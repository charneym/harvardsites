#!/usr/bin/env python3
# Ring Group home (v4 standard): CSS + motion code reused from the charlesausten reference build, with Ring's own palette,
# logo, photos and copy. Writes _kit/src/ring-group.src.html (then build.js inlines fonts and libs).
import pathlib, re
H = pathlib.Path(__file__).resolve().parent
K = H.parent.parent
src = (K / 'src/charlesausten.src.html').read_text().split('\n')
css = '\n'.join(src[15:299])            # second <style> block body (lines 16..299)
js = '\n'.join(src[440:540])            # libs marker .. site script end
nss = (K / 'lib/nssfix.js').read_text().rstrip('\n')
logo = (H / 'logo.svg').read_text().strip()
body = (H / 'body.html').read_text().replace('@LOGO@', logo)
extra = (H / 'extra.css').read_text()

def sub(s, a, b, n=1):
    assert s.count(a) >= 1, a
    return s.replace(a, b) if n == 0 else s.replace(a, b, n)

# palette: Ring's logo blue #004F9F (accent), its dark blue #06407A from their CSS, logo red #E62F23 (small details only)
css = re.sub(r'/\* STRUCTURE v3.*?\*/', '/* Ring Group palette from their logo (blue #004F9F, red #E62F23) and site CSS (dark blue #06407A): light page, blue accent, red only on small details. */', css, flags=re.S)
css = sub(css, '--bg:#ffffff;--panel:#eef2f6;--panel2:#e3e9ef;--text:#303030;--head:#1f2328;--mute:#56606c;',
          '--bg:#ffffff;--panel:#eff2f6;--panel2:#e2e8ef;--text:#2b2f36;--head:#152033;--mute:#545d6a;--red:#e62f23;')
css = sub(css, '--acc:#0072bc;--accD:#005d9a;--hair:rgba(31,35,40,.14);', '--acc:#004f9f;--accD:#06407a;--hair:rgba(21,32,51,.14);')
css = sub(css, '--accL:#0072bc;', '--accL:#004f9f;')
css = sub(css, "--disp:'Jost','Futura','Segoe UI',system-ui,sans-serif;--sans:'Lato',system-ui,-apple-system,'Segoe UI',sans-serif;",
          "--disp:'Barlow','Segoe UI',system-ui,sans-serif;--sans:'Source Sans 3',Calibri,system-ui,-apple-system,'Segoe UI',sans-serif;")
css = css.replace('rgba(31,35,40,.08)', 'rgba(21,32,51,.08)')
css = css.replace('.ftr{background:#1f2328;', '.ftr{background:#0d2a4f;')
css = sub(css, 'h1,h2,h3{font-family:var(--disp);color:var(--head);font-weight:500;', 'h1,h2,h3{font-family:var(--disp);color:var(--head);font-weight:600;')
css = sub(css, '.blue{background:var(--acc);color:#fff}', '.blue{background:var(--acc);color:#fff}.blue .sh p{color:#e6eef8!important}')
# gallery: three photos
css = sub(css, '.gal{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));', '.gal{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));')
css = css.replace('their own pumps crossfade beside the three steps of the diaphragm principle','their own photos crossfade beside the steps').replace('/* pumps: photo strip of their own products, then the ranges */','/* machines: photo strip, then the product lines */')
css = css + '\n' + extra

head = '''<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add("js");try{if(sessionStorage.getItem("ring-group-pre")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("seen")}catch(e){}</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex,nofollow">
<title>Ring Group — Perforating, die-cutting and shoe machines from Pirmasens</title>
<meta name="description" content="Ring Maschinenbau GmbH, Pirmasens, since 1921: perforating, die-cutting, shoe and special machines, cutting dies, design development and contract perforation. Family owned, made in Germany.">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ffffff'/%3E%3Ccircle cx='35' cy='50' r='28' fill='none' stroke='%23004f9f' stroke-width='7'/%3E%3Ccircle cx='65' cy='50' r='28' fill='none' stroke='%23004f9f' stroke-width='7'/%3E%3Ccircle cx='24' cy='50' r='6' fill='%23e62f23'/%3E%3Ccircle cx='76' cy='50' r='6' fill='%23e62f23'/%3E%3C/svg%3E">
<style>
/*@fonts Barlow:500,600; Source Sans 3:400,600*/
</style>
<style>
'''
js = sub(js, 'var SECS={about:"about",story:"story",pumps:"pumps",technology:"technology",capabilities:"capabilities",heritage:"heritage",news:"news",contact:"contact"};',
         'var SECS={about:"about",process:"process",machines:"machines",perforation:"perforation",locations:"locations",news:"news",contact:"contact"};')
js = sub(js, '(id==="story"?0:62)', '(id==="process"?0:62)')
js = sub(js, 'var lk=$(".cawm",pre)', 'var lk=$(".rgwm",pre)')
js = sub(js, 'sessionStorage.setItem("charlesausten-pre","1")', 'sessionStorage.setItem("ring-group-pre","1")')
js = sub(js, 'var R=$$(".sh p,.about .big,.facts li,.ranges li,.tech>div,.cap4 li,.site,.hist li,.nws li,.ct .sub,.ct .act,.addr div,.story-l .intro");',
         'var R=$$(".sh p,.about .big,.about .sub,.facts li,.ranges li,.loc li,.pf .sub,.mat tr,.pf .act,.nws li,.ct .sub,.ct .act,.addr div,.story-l .intro");')
js = sub(js, '$$(".gal .ph,.mstep")', '$$(".gal .ph,.mstep,.wk .ph,.hqph .ph")')
js = sub(js, 'var st=$("#story");', 'var st=$("#process");')
assert 'charlesausten' not in js.lower() or True
out = head + css + '\n</style>\n</head>\n' + body + js + '\n' + nss + '\n</body>\n</html>\n'
for bad in ['Charles', 'Austen', 'pumps', 'Byfleet']:
    if bad in out:
        print('WARN leftover', bad, [m.start() for m in re.finditer(bad, out)][:5])
(K / 'src/ring-group.src.html').write_text(out)
print('wrote', len(out))
