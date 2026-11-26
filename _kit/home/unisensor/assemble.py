#!/usr/bin/env python3
# UNISENSOR home (v4 standard): CSS + motion code reused from the charlesausten reference build (as ring-group),
# with UNISENSOR's palette (logo red #E2001A, logo black #19171A), vector logo, photos and copy.
import pathlib, re
H = pathlib.Path(__file__).resolve().parent
K = H.parent.parent
src = (K / 'src/charlesausten.src.html').read_text().split('\n')
css = '\n'.join(src[15:299])
js = '\n'.join(src[440:540])
nss = (K / 'lib/nssfix.js').read_text().rstrip('\n')
logo = (H / 'logo.svg').read_text().strip()
body = (H / 'body.html').read_text()
hidden = logo.replace('role="img" aria-label="UNISENSOR"', 'aria-hidden="true"')
body = body.replace('@LOGO@', hidden)
extra = (H / 'extra.css').read_text()


def sub(s, a, b):
    assert a in s, a
    return s.replace(a, b, 1)


css = re.sub(r'/\* STRUCTURE v3.*?\*/', '/* UNISENSOR palette from their logo (red #E2001A, as in their CSS; logo black #19171A) and site greys: light page, red accent on buttons, links and small details. */', css, flags=re.S)
css = sub(css, '--bg:#ffffff;--panel:#eef2f6;--panel2:#e3e9ef;--text:#303030;--head:#1f2328;--mute:#56606c;', '--bg:#ffffff;--panel:#f3f3f4;--panel2:#e6e6e8;--text:#2e2d30;--head:#19171a;--mute:#5a5960;')
css = sub(css, '--acc:#0072bc;--accD:#005d9a;--hair:rgba(31,35,40,.14);', '--acc:#e2001a;--accD:#b30015;--hair:rgba(25,23,26,.14);')
css = sub(css, '--accL:#0072bc;', '--accL:#e2001a;')
css = sub(css, "--disp:'Jost','Futura','Segoe UI',system-ui,sans-serif;--sans:'Lato',system-ui,-apple-system,'Segoe UI',sans-serif;",
          "--disp:'Titillium Web','Segoe UI',system-ui,sans-serif;--sans:'Source Sans 3',Verdana,system-ui,-apple-system,'Segoe UI',sans-serif;")
css = css.replace('rgba(31,35,40,.08)', 'rgba(25,23,26,.08)')
css = sub(css, 'h1,h2,h3{font-family:var(--disp);color:var(--head);font-weight:500;', 'h1,h2,h3{font-family:var(--disp);color:var(--head);font-weight:600;')
css = css.replace('their own pumps crossfade beside the three steps of the diaphragm principle','their own systems crossfade beside the four steps')
css = css + '\n' + extra
head = '''<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add("js");try{if(sessionStorage.getItem("unisensor-pre")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("seen")}catch(e){}</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex,nofollow">
<title>UNISENSOR — Spectroscopic sorting and process analysis from Karlsruhe</title>
<meta name="description" content="UNISENSOR Sensorsysteme GmbH, Karlsruhe, since 1990: laser-spectroscopic plastic sorting (POWERSORT 200 and 360) and online process analysis of CO2 gas, beverages and water containers (CARBOSCAN, AQUASCREEN).">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='50' r='36' fill='%23e2001a' stroke='%2319171a' stroke-width='7'/%3E%3C/svg%3E">
<style>
/*@fonts Titillium Web:400,600; Source Sans 3:400,600*/
</style>
<style>
'''
js = sub(js, 'var SECS={about:"about",story:"story",pumps:"pumps",technology:"technology",capabilities:"capabilities",heritage:"heritage",news:"news",contact:"contact"};',
         'var SECS={news:"news",company:"company",products:"products",technology:"technology",press:"press",contact:"contact"};')
js = sub(js, '(id==="story"?0:62)', '(id==="technology"?0:62)')
js = sub(js, 'var lk=$(".cawm",pre)', 'var lk=$(".uswm",pre)')
js = sub(js, 'sessionStorage.setItem("charlesausten-pre","1")', 'sessionStorage.setItem("unisensor-pre","1")')
js = sub(js, 'var R=$$(".sh p,.about .big,.facts li,.ranges li,.tech>div,.cap4 li,.site,.hist li,.nws li,.ct .sub,.ct .act,.addr div,.story-l .intro");',
         'var R=$$(".sh p,.about .big,.about .sub,.facts li,.prod tbody tr,.pr .sub,.hist li,.nws li,.ct .sub,.ct .act,.addr div,.story-l .intro");')
js = sub(js, '$$(".gal .ph,.mstep")', '$$(".mstep,.awph .ph,.hqph .ph")')
js = sub(js, 'gsap.fromTo(".hero-ph",{clipPath', 'gsap.fromTo(".hero-ph .hf",{clipPath')
js = sub(js, 'var st=$("#story");', 'var st=$("#technology");')
out = head + css + '\n</style>\n</head>\n' + body + js + '\n' + nss + '\n</body>\n</html>\n'
for bad in ['Charles', 'Austen', 'pumps', 'Byfleet']:
    if bad in out:
        print('WARN leftover', bad)
(K / 'src/unisensor.src.html').write_text(out)
print('wrote', len(out))
