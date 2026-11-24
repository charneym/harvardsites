#!/usr/bin/env python3
"""Build the NP Photonics WordPress block theme from the concept page (npphotonics/index.html).

Practice build: the concept's home page becomes a WordPress block theme. Text, headings and section
structure become core blocks the owner can edit; complex pieces (SVG scene, product/news/team lists,
buttons) stay as Custom HTML blocks. The concept's CSS and animation scripts ship as theme assets.

Run:  python3 _kit/wp/npphotonics/build.py
Out:  _kit/wp/npphotonics/theme/npphotonics/   (theme folder)
      npphotonics/wp/npphotonics-theme.zip      (upload in WordPress: Appearance > Themes > Add New > Upload)
"""
import json, os, re, shutil, subprocess, tempfile, zipfile, pathlib
import bs4

H = pathlib.Path(__file__).resolve().parent
R = H.parent.parent.parent
SRC = R / 'npphotonics'
OUT = H / 'theme' / 'npphotonics'
ZIP = SRC / 'wp' / 'npphotonics-theme.zip'
VERSION = '0.1.0'

page = (SRC / 'index.html').read_text()

# ---------- 1. capture the home view HTML the concept renders at runtime ----------
def capture():
    tmp = pathlib.Path(tempfile.mkdtemp())
    for f in SRC.iterdir():
        if f.suffix in ('.png', '.webp'): shutil.copy(f, tmp)
    hook = 'view.innerHTML=r.v()+footer();'
    assert page.count(hook) == 1
    (tmp / 'index.html').write_text(page.replace(hook, 'view.innerHTML=window.__V=r.v()+footer();'))
    js = tmp / 'cap.js'
    js.write_text("""const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://'+process.argv[2]+'/index.html');await p.waitForFunction(()=>window.__V,null,{timeout:30000});
require('fs').writeFileSync(process.argv[2]+'/home.html',await p.evaluate(()=>window.__V));await b.close()})();""")
    env = dict(os.environ, NODE_PATH=subprocess.check_output(['npm', 'root', '-g'], text=True).strip())
    subprocess.check_call(['node', str(js), str(tmp)], env=env)
    return (tmp / 'home.html').read_text()

view = capture()
soup = bs4.BeautifulSoup(view, 'html.parser')
home_els = [c for c in soup.children if isinstance(c, bs4.Tag)]
footer_el = home_els.pop()
assert footer_el.name == 'footer'

# ---------- 2. convert HTML to block markup ----------
INLINE = {'em', 'strong', 'b', 'i', 'a', 'br', 'span', 'sup', 'sub', 'code', 'small'}
GROUP_TAGS = {'div', 'section', 'article', 'aside', 'header', 'footer', 'main'}
dropped = []

def attrs_json(d):
    return (' ' + json.dumps(d, ensure_ascii=False, separators=(',', ':'))) if d else ''

def inline_only(el):
    return all(isinstance(c, bs4.NavigableString) or (c.name in INLINE and inline_only(c)) for c in el.children)

def note_dropped(el):
    for k in el.attrs:
        if k.startswith('data-') or k in ('tabindex', 'aria-hidden', 'role'):
            dropped.append((el.name, '.'.join(el.get('class', [])), el.get('id', ''), k))

def inner(el):
    return el.decode_contents()

def html_block(el):
    return '<!-- wp:html -->\n' + str(el) + '\n<!-- /wp:html -->'

def block(el):
    cls = ' '.join(el.get('class', []))
    eid = el.get('id')
    if el.name in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6') and inline_only(el):
        note_dropped(el)
        lvl = int(el.name[1])
        a = {}
        if lvl != 2: a['level'] = lvl
        if eid: a['anchor'] = eid
        if cls: a['className'] = cls
        idattr = f' id="{eid}"' if eid else ''
        return (f'<!-- wp:heading{attrs_json(a)} -->\n<{el.name}{idattr} class="wp-block-heading{(" " + cls) if cls else ""}">'
                f'{inner(el)}</{el.name}>\n<!-- /wp:heading -->')
    if el.name == 'p' and inline_only(el):
        note_dropped(el)
        a = {}
        if eid: a['anchor'] = eid
        if cls: a['className'] = cls
        idattr = f' id="{eid}"' if eid else ''
        clsattr = f' class="{cls}"' if cls else ''
        return f'<!-- wp:paragraph{attrs_json(a)} -->\n<p{idattr}{clsattr}>{inner(el)}</p>\n<!-- /wp:paragraph -->'
    kids = [c for c in el.children if not (isinstance(c, bs4.NavigableString) and not c.strip())]
    if (el.name in GROUP_TAGS and kids and all(isinstance(c, bs4.Tag) for c in kids)
            and el.get('aria-hidden') != 'true' and not el.find('svg', recursive=False)
            and not (set(el.get('class', [])) & {'act', 'rail', 'scene'})):
        note_dropped(el)
        a = {}
        if el.name != 'div': a['tagName'] = el.name
        if eid: a['anchor'] = eid
        if cls: a['className'] = cls
        idattr = f' id="{eid}"' if eid else ''
        body = '\n'.join(block(c) for c in kids)
        return (f'<!-- wp:group{attrs_json(a)} -->\n<{el.name}{idattr} class="wp-block-group{(" " + cls) if cls else ""}">'
                f'{body}</{el.name}>\n<!-- /wp:group -->')
    return html_block(el)

def php_assets(markup):
    # image paths become theme URLs (patterns are PHP, so they resolve on any site)
    return re.sub(r'(src|href)="((?:logo-[wh]|hero|fav)\.(?:png|webp))"',
                  lambda m: f'{m.group(1)}="<?php echo esc_url( get_theme_file_uri( \'assets/{m.group(2)}\' ) ); ?>"', markup)

home_blocks = '\n\n'.join(block(e) for e in home_els)
footer_blocks = html_block(footer_el)

# ---------- 3. page chrome (preloader, header, menu, overlays) from the concept body ----------
body = page[page.find('<body'):]
c0 = body.find('<a class="skip"')
c1 = body.find('<main id="main"')
c2 = body.find('</main>') + len('</main>')
c3 = body.find('<script', c2)
chrome = body[c0:c1] + body[c2:c3]
chrome = re.sub(r'<!--</?R:\w+>-->', '', chrome)
chrome_blocks = '<!-- wp:html -->\n' + chrome.strip() + '\n<!-- /wp:html -->'

# ---------- 4. CSS and JS assets ----------
css = page[page.find('<style>') + 7: page.find('</style>')]
scripts = re.findall(r'<script>(.*?)</script>', page, re.S)
seen_js = scripts[0]
libs = [s for s in scripts if re.match(r'\s*/\*!\s*\n \* (GSAP|ScrollTrigger|SplitText|CustomEase)', s)]
assert len(libs) == 4, len(libs)
lenis = [s for s in scripts if s.startswith('(function(){var e=`1.3')]
storyfx = [s for s in scripts if s.startswith('/* StoryFX')]
fit = [s for s in scripts if s.startswith('/* LAYOUT FIT')]
xcset = [s for s in scripts if s.startswith('gsap.set(".xc"')]
main = [s for s in scripts if s.lstrip().startswith('(function(){\n"use strict"')]
nss = [s for s in scripts if s.startswith('/*R:nssfix*/')]
assert all(len(x) == 1 for x in (lenis, storyfx, fit, xcset, main, nss))
app = main[0]
hook = 'view.innerHTML=r.v()+footer();'
assert app.count(hook) == 1
# WordPress renders the page content; the script only builds it if the server sent nothing
app = app.replace(hook, 'if(!view.firstElementChild)view.innerHTML=r.v()+footer();')
# the hero render loads from the theme's assets folder
assert app.count('img.src="hero.webp"') == 1
app = app.replace('img.src="hero.webp"', 'img.src=(window.NPP_ASSETS||"")+"hero.webp"')
# attributes core blocks cannot store: restored before the animation script runs
shim = """/* NP Photonics theme: restore animation hooks that WordPress blocks don't store */
(function(){function q(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
q("#hero,.ftr").forEach(function(e){e.setAttribute("data-field","")});
q("#view section.hero,#view section.mani,#view section.story,#view section.dark2,#view section.dark,#view .ftr").forEach(function(e){e.setAttribute("data-theme","dark")});
q("#view section.light").forEach(function(e){e.setAttribute("data-theme","light")});
q("#hero .eyebrow,#hero .hero-foot>.s,#hero .hero-foot>.act").forEach(function(e){e.setAttribute("data-r","")});
var t=document.getElementById("pageTitle");if(t)t.setAttribute("tabindex","-1");
var m=document.getElementById("main");if(m)m.setAttribute("tabindex","-1");
q("#view .wp-block-group").forEach(function(e){e.classList.remove("is-layout-flow","wp-block-group-is-layout-flow")});})();
"""
wp_css = """
/* ---- WordPress: the theme styles everything itself ---- */
.wp-site-blocks{padding:0;margin:0}
"""

# ---------- 5. write the theme ----------
if OUT.exists(): shutil.rmtree(OUT)
for d in ('assets', 'templates', 'parts', 'patterns'):
    (OUT / d).mkdir(parents=True)
for f in ('logo-h.png', 'logo-w.png', 'hero.webp', 'fav.png'):
    shutil.copy(SRC / f, OUT / 'assets' / f)
(OUT / 'assets' / 'site.css').write_text(css + wp_css)
(OUT / 'assets' / 'libs.js').write_text('\n;\n'.join(libs + lenis + storyfx + fit))
(OUT / 'assets' / 'app.js').write_text(shim + '\n' + xcset[0] + '\n' + app + '\n' + nss[0])
(OUT / 'assets' / 'seen.js').write_text(seen_js)
# Editor only: no scripts run there, so hide the loader and overlays and show the page as it reads after load.
(OUT / 'assets' / 'editor.css').write_text("""body{background:#0c1430}
#pre,.mm,.ps,.xc,.xt,#field,.fieldbg,.grain,.fcv{display:none!important}
.hdr{position:relative!important;transform:none!important}
.hero{min-height:0!important;padding-top:120px!important;padding-bottom:120px!important}
.story-pin{height:auto!important}
""")

(OUT / 'style.css').write_text(f"""/*
Theme Name: NP Photonics
Description: Custom block theme for NP Photonics (practice build from the concept site).
Version: {VERSION}
Requires at least: 6.5
Tested up to: 6.8
Requires PHP: 7.4
License: GPL-2.0-or-later
Text Domain: npphotonics
*/
""")

(OUT / 'theme.json').write_text(json.dumps({
    "$schema": "https://schemas.wp.org/trunk/theme.json",
    "version": 3,
    "settings": {
        "appearanceTools": False,
        "color": {"defaultPalette": False, "defaultGradients": False, "palette": [
            {"slug": "ink", "name": "Ink", "color": "#0c1430"},
            {"slug": "star", "name": "Star yellow", "color": "#f3e36b"},
            {"slug": "blue", "name": "Deep blue", "color": "#1f3a9e"},
            {"slug": "paper", "name": "Paper", "color": "#ffffff"}]},
        "layout": {},
        "spacing": {"blockGap": None},
        "typography": {"defaultFontSizes": False, "fontFamilies": [
            {"slug": "sora", "name": "Sora", "fontFamily": "'Sora', sans-serif"},
            {"slug": "inter", "name": "Inter", "fontFamily": "'Inter', sans-serif"}]}
    },
    "templateParts": [],
    "customTemplates": []
}, indent=2))

(OUT / 'functions.php').write_text(r"""<?php
/**
 * NP Photonics theme setup.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'after_setup_theme', function () {
	add_theme_support( 'editor-styles' );
	add_editor_style( array( 'assets/site.css', 'assets/editor.css' ) );
} );

// One stylesheet and two scripts carry the whole design.
add_filter( 'should_load_separate_core_block_assets', '__return_false' );
add_action( 'wp_enqueue_scripts', function () {
	$v = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'npphotonics', get_theme_file_uri( 'assets/site.css' ), array(), $v );
	wp_enqueue_script( 'npphotonics-libs', get_theme_file_uri( 'assets/libs.js' ), array(), $v, true );
	wp_enqueue_script( 'npphotonics-app', get_theme_file_uri( 'assets/app.js' ), array( 'npphotonics-libs' ), $v, true );
	wp_add_inline_script( 'npphotonics-app', 'window.NPP_ASSETS=' . wp_json_encode( trailingslashit( get_theme_file_uri( 'assets' ) ) ) . ';', 'before' );
	// WordPress's own front-end block styles would fight the design: the theme styles every block itself.
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'wp-block-library-theme' );
	wp_dequeue_style( 'classic-theme-styles' );
	wp_dequeue_style( 'global-styles' );
}, 100 );
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_stored_styles' );
remove_action( 'wp_footer', 'wp_enqueue_stored_styles', 1 );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
// The theme has its own "Skip to content" link.
remove_action( 'wp_footer', 'the_block_template_skip_link' );
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_block_template_skip_link' );

add_action( 'wp_head', function () {
	echo '<meta name="theme-color" content="#0c1430">' . "\n";
	if ( is_front_page() ) {
		echo '<meta name="description" content="' . esc_attr__( 'NP Photonics, Tucson, Arizona: single-frequency fiber lasers, short-length fiber amplifiers and mid-IR transport fibers, built on proprietary phosphate, germanate and tellurite glass since 1998.', 'npphotonics' ) . '">' . "\n";
	}
	if ( ! has_site_icon() ) {
		echo '<link rel="icon" href="' . esc_url( get_theme_file_uri( 'assets/fav.png' ) ) . '">' . "\n";
	}
	// Skip the intro loader on repeat views in the same tab.
	echo '<script>' . file_get_contents( get_theme_file_path( 'assets/seen.js' ) ) . '</script>' . "\n";
}, 1 );
""")

def pattern(slug, title, markup, inserter=False):
    (OUT / 'patterns' / f'{slug}.php').write_text(
        f"<?php\n/**\n * Title: {title}\n * Slug: npphotonics/{slug}\n * Inserter: {'yes' if inserter else 'no'}\n */\n?>\n"
        + php_assets(markup) + '\n')

pattern('chrome', 'Site chrome (loader, header, menu)', chrome_blocks)
pattern('home', 'NP Photonics home page', home_blocks, inserter=True)
pattern('footer', 'Site footer', footer_blocks)

def page_template(content):
    return ('<!-- wp:pattern {"slug":"npphotonics/chrome"} /-->\n\n'
            '<!-- wp:group {"tagName":"main","anchor":"main"} -->\n<main id="main" class="wp-block-group">'
            '<!-- wp:group {"anchor":"view"} -->\n<div id="view" class="wp-block-group">'
            + content +
            '\n<!-- wp:pattern {"slug":"npphotonics/footer"} /--></div>\n<!-- /wp:group --></main>\n<!-- /wp:group -->\n')

(OUT / 'templates' / 'front-page.html').write_text(page_template('<!-- wp:pattern {"slug":"npphotonics/home"} /-->'))
# Any other page or post: its title and content in a plain light section.
(OUT / 'templates' / 'index.html').write_text(page_template(
    '<!-- wp:group {"tagName":"section","className":"sec light"} -->\n<section class="wp-block-group sec light">'
    '<!-- wp:group {"className":"wrap"} -->\n<div class="wp-block-group wrap">'
    '<!-- wp:post-title {"level":1,"className":"d2"} /-->\n<!-- wp:post-content /-->'
    '</div>\n<!-- /wp:group --></section>\n<!-- /wp:group -->'))
(OUT / 'parts' / '.gitkeep').write_text('')

# ---------- 6. zip ----------
ZIP.parent.mkdir(exist_ok=True)
if ZIP.exists(): ZIP.unlink()
with zipfile.ZipFile(ZIP, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in sorted(OUT.rglob('*')):
        if f.is_file() and f.name != '.gitkeep':
            z.write(f, 'npphotonics/' + str(f.relative_to(OUT)))

print('theme:', OUT)
print('zip:', ZIP, ZIP.stat().st_size, 'bytes')
print('dropped attributes (restored by shim where needed):')
for d in sorted(set(dropped)): print('  ', d)
