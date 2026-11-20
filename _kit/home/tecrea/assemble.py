# Assembles _kit/src/tecrea.src.html from the shared home-only engine (regions of the BIOMATCAN/firelight build),
# swapping meta, fonts, palette, logo, content, views, hero field and story. Run: python3 _kit/home/tecrea/assemble.py
import re, os
K = os.path.join(os.path.dirname(__file__), '..', '..')
s = open(os.path.join(K, 'src', 'biomatcan.src.html')).read()
P = os.path.join(os.path.dirname(__file__), 'parts')
def part(n): return open(os.path.join(P, n)).read().strip('\n')
def reg(name, body, html=False):
    global s
    a, b = ('<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name) if html else ('/*<R:%s>*/' % name, '/*</R:%s>*/' % name)
    i = s.index(a); j = s.index(b, i)
    s = s[:i + len(a)] + body + s[j:]

reg('meta', part('meta.html'), html=True)
reg('fonts', "/*@fonts Newsreader:300,300i,400,400i; Schibsted Grotesk:400,500,600; Big Shoulders Display:600,700*/")
reg('root', part('root.css'))
reg('fieldbg', part('fieldbg.css'))
reg('logocss', part('logo.css'))
reg('scenecss', part('scene.css'))
reg('seen', '<script>try{if(sessionStorage.getItem("tcr-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>', html=True)
reg('pre', part('pre.html'), html=True)
reg('brand', part('brand.html'), html=True)
reg('navmenu', part('navmenu.html'), html=True)
reg('xc', '<div class="xc" id="xc" aria-hidden="true"></div>\n<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Tecrea</span><div class="t" id="xtt"></div></div>', html=True)
reg('site', 'var SITE="Tecrea";\nvar PK="tcr";')
reg('content', part('content.js'))
reg('views', part('views.js'))
reg('field', part('field.js'))
reg('story', part('story.js'))

# BIOMATCAN-specific CSS outside the regions -> Tecrea
s = s.replace("#pre .mk .lg .h1{fill:#0677dd;stroke:none}#pre .mk .lg .h2{fill:#f4f6f8;stroke:none}#pre .mk .lg .h3{fill:none;stroke:#04184a;stroke-width:3.6;stroke-linecap:round;stroke-linejoin:round}", "")
s = s.replace("@media (max-width:860px){.fieldbg{background:#0a1220}}", "@media (max-width:860px){.fieldbg{background:#06140e}}")
s = s.replace(".rail span{color:#97a3b3}.rail span::before{background:var(--ink2);border-color:#5d6b80;border-radius:0}", ".rail span{color:#9fb0a3}.rail span::before{background:var(--ink2);border-color:#5b6d5f;border-radius:0}")
s = s.replace("/* ===== BIOMATCAN: logo and live site sampled. Logo navy #04184a deepened to the ink #0a1220 (--ink); logo blue #0677dd → --ember, lifted to #4aa3f2 → --accL (accents on dark), darkened to #0560b8 → --acc for text on white; the ceramic white of their product → --bone #f4f6f8 ===== */",
              "/* ===== Tecrea: logo.svg and live site sampled. Logo green #5a9300 → --ember, lifted to #a3d14a → --accL (accents on dark), darkened to #3f7000 → --acc (text and buttons on white); logo teal #00e5c4 (\"THINK SMALL\") → --teal; the site's hero ground #001600 → the ink #06140e ===== */")
s = s.replace("/* ===== BIOMATCAN additions ===== */", "/* ===== Tecrea additions ===== */")
s = s.replace(".light .btn.solid{background:var(--ember);border-color:var(--ember);color:#fff}", ".light .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}")
s = s.replace("#manufacturing .shead p{", "#programmes .shead p{")
s = s.replace("</style>\n</head>", part('extra.css') + "\n</style>\n</head>", 1)
assert 'BIOMATCAN' not in s and 'biomatcan' not in s.lower(), [m.start() for m in re.finditer('(?i)biomatcan', s)][:5]
open(os.path.join(K, 'src', 'tecrea.src.html'), 'w').write(s)
print('wrote tecrea.src.html', len(s))
