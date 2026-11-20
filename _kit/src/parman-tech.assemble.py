#!/usr/bin/env python3
"""Assemble parman-tech.src.html (HOME_BRIEF: home-only, full-site style) from the Firelight-engine regions,
via the home-only engine already split into regions in mechano-therapeutics.src.html (same plumbing, every
visible region replaced here). Run from _kit:
  python3 src/parman-tech.assemble.py && node build.js src/parman-tech.src.html ../parman-tech/index.html"""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "mechano-therapeutics.src.html").read_text()
R = {}

R["meta"] = r'''<title>Parman Tech — Separating nanoparticles with light</title>
<meta name="description" content="Parman Tech, a company that originated at NIST, is developing NanoSelect: optical-force separation that outputs a chosen nanoparticle size from a mixed stream, for viral vectors, lipid nanoparticles and extracellular vesicles. Loveland, Colorado.">
<meta name="theme-color" content="#05202f">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23043a58'/%3E%3Cg fill='none' stroke-width='5' stroke-linecap='round' stroke-dasharray='0 8'%3E%3Cpath stroke='%233e77bc' d='M8 50H24C32 50 30 22 40 22H50'/%3E%3Cpath stroke='%234cbe95' d='M8 56H28C36 56 34 30 44 30H52'/%3E%3C/g%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Archivo:300,400,500i; Newsreader:300i; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#05202f;--inkr:5,32,47;--boner:242,244,243;--accr:111,211,173;--ink2:#072636;--ink3:#0b2d40;--deep:#03141e;
  --bone:#f2f4f3;--bone2:#e6ebea;--bone3:#d3dcdb;
  --stone:#9fb2bd;--stoneD:#55707f;
  --acc:#4cbe95;--accL:#6fd3ad;--accD:#1b7656;--blue:#3e77bc;
  --hair:rgba(242,244,243,.14);--hairD:rgba(5,32,47,.16);
  --disp:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Newsreader',Georgia,'Times New Roman',serif;
  --sans:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:radial-gradient(75% 90% at 68% 50%,#0b3048 0%,#062436 44%,#03141e 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the logo: heavy italic "PARMAN TECH" with two dotted particle paths (blue, green) splitting into arrows
R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.logo{width:46px;height:30px;flex:none;overflow:visible}
.brand .pb{stroke:#5b8fd0}.brand .pg{stroke:var(--acc)}
.brand .ab{fill:#5b8fd0}.brand .ag{fill:var(--acc)}
.hdr.ink .brand .pb{stroke:var(--blue)}.hdr.ink .brand .ab{fill:var(--blue)}
.hdr.ink .brand .pg{stroke:#2f9c75}.hdr.ink .brand .ag{fill:#2f9c75}
.brand .wmk{font-family:var(--disp);font-style:italic;font-weight:500;font-size:18px;letter-spacing:.01em;line-height:1;white-space:nowrap;color:var(--bone)}
.hdr.ink .brand .wmk{color:#043a58}
@media (max-width:860px){.brand .wmk{font-size:16px}.brand svg.logo{width:40px;height:26px}}'''

LOGO = ('<svg class="logo" viewBox="0 0 46 30" aria-hidden="true"><g fill="none" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0 4.4">'
        '<path class="pb" d="M2 24H17C22 24 21 7 27 7H37"/><path class="pg" d="M2 28.4H20C25 28.4 24 13 30 13H39"/></g>'
        '<path class="ab" d="M39 3.2L44.6 3.6L41.4 8.4Z"/><path class="ag" d="M41 10.2L45.6 13L41 15.8Z"/></svg>')
R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Parman Tech, home">' + LOGO + '<span class="wmk">PARMAN TECH</span></a>'

R["seen"] = '<script>try{if(sessionStorage.getItem("pt-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M10 66H38C50 66 46 30 60 30H86"/><path d="M10 74H44C56 74 52 42 66 42H88"/></svg>
    <div class="wm"><span>PARMAN TECH</span></div>
  </div>
  <span class="lab pl">Optical nanoparticle separation · Loveland, Colorado</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

MAIL = "jjcurry@parmantech.com"
R["navmenu"] = r'''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/applications">Applications</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/technology">Technology</a></li>
    <li><a href="#/applications">Applications</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Lab</span><br>Loveland, Colorado</div>
    <div><span class="lab">Email</span><br>''' + MAIL + r'''</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Parman Tech</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Parman Tech";\nvar PK="pt";'

R["scenecss"] = (HERE / "parman-tech.scene.css").read_text()
R["content"] = (HERE / "parman-tech.content.js").read_text()
R["views"] = (HERE / "parman-tech.views.js").read_text()
R["field"] = (HERE / "parman-tech.field.js").read_text()
R["story"] = (HERE / "parman-tech.story.js").read_text()

out = SRC
for k, v in R.items():
    n = 0
    for a, b in (("/*<R:%s>*/" % k, "/*</R:%s>*/" % k), ("<!--<R:%s>-->" % k, "<!--</R:%s>-->" % k)):
        pat = re.compile(re.escape(a) + r".*?" + re.escape(b), re.S)
        out, c = pat.subn(lambda m: a + v + b, out, count=1)
        n += c
    assert n == 1, k
out = out.replace("@media (max-width:860px){.fieldbg{background:#131416}}", "@media (max-width:860px){.fieldbg{background:#04192a}}")
# leftovers from the source firm must not survive
for bad in ("Mechano", "mechano", "JOINT", "gdodge"):
    assert bad not in out, bad
(HERE / "parman-tech.src.html").write_text(out)
print("ok", len(out))
