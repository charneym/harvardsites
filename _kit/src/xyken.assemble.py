#!/usr/bin/env python3
"""Assemble xyken.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/xyken.assemble.py && node build.js src/xyken.src.html ../xyken/index.html
Facts: _kit/dossiers/xyken.md. Palette: the live xyken.com (hero band #00699d, logo wave #2d74aa to #6ea8d8, nav #336995)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Xyken — Mobile 3D imaging for custom fit</title>
<meta name="description" content="Xyken builds patented mobile 3D and AI imaging that turns an iPhone or iPad into a clinical 3D scanner for orthotics and prosthetics, and, with NIH SBIR support, a smartphone-based system for custom-fit, low-cost hearing aids.">
<meta name="theme-color" content="#0c1624">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2300699d'/%3E%3Cpath d='M12 44C18 20 24 16 30 30S42 46 52 18' fill='none' stroke='%23fff' stroke-width='6'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Outfit:300,400; IBM Plex Sans:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0c1624;--inkr:12,22,36;--boner:243,245,246;--accr:58,154,214;--ink2:#0f1b2c;--ink3:#152337;--deep:#08101b;
  --bone:#f3f5f6;--bone2:#e8ecef;--bone3:#d6dde3;
  --stone:#a6b1bd;--stoneD:#4f5b68;
  --acc:#00699d;--accL:#4aa3dc;--accD:#00598a;
  --hair:rgba(243,245,246,.14);--hairD:rgba(12,22,36,.16);
  --disp:'Outfit',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Outfit',system-ui,sans-serif;
  --sans:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#0c1624,#0c1624)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the mark: Xyken's blue wave (redrawn from the logo on xyken.com: a deep-blue stroke rising into a lighter crest)
MARK = '<path class="xm-a" d="M2 22C5 10 8 7 12 13S18 22 22 15"/><path class="xm-b" d="M18 20C21 14 24 8 29 3"/>'

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.xm{width:32px;height:26px;flex:none;overflow:visible}
.brand .xm-a{fill:none;stroke:var(--acc);stroke-width:4;stroke-linecap:round}
.brand .xm-b{fill:none;stroke:#6ea8d8;stroke-width:4;stroke-linecap:round}
.brand .bt{font:400 22px/1 var(--disp);letter-spacing:.01em;white-space:nowrap}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa6b4;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66748a;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(250px,33vh,330px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.2vw,38px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(74vh,680px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene svg *{vector-effect:non-scaling-stroke}
.scene .xg{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .xgr{stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .xr{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1}
.scene .xo{fill:rgba(var(--accr),.05);stroke:var(--bone);stroke-width:1.5}
.scene .xsw{stroke:var(--accL);stroke-width:2}
.scene .xbf{fill:rgba(84,190,120,.07);stroke:none}
.scene .xb{fill:none;stroke:#62c98a;stroke-width:2}
.scene text.xg2{fill:#7fd6a0}
.scene .xfov{fill:rgba(var(--accr),.07);stroke:rgba(var(--accr),.5);stroke-width:1}
.scene .xph{fill:#0f1b2c;stroke:var(--bone);stroke-width:1.4}
.scene .xps{fill:rgba(var(--accr),.25);stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .xpc{fill:var(--bone)}
.scene .xe{stroke:#0f1b2c;stroke-width:1}
.scene .xe.e0{fill:#3a9ad6}.scene .xe.e1{fill:#7fd6a0}.scene .xe.e2{fill:#e9c46a}
.scene .xcl{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1}
.scene .xin{fill:rgba(var(--accr),.12);stroke:var(--accL);stroke-width:1.5}
.scene .xin2{fill:none;stroke:rgba(var(--accr),.6);stroke-width:1}
.scene .xup{fill:none;stroke:var(--accL);stroke-width:1.3}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9d1db;paint-order:stroke;stroke:#0f1b2c;stroke-width:5px;stroke-linejoin:round}
.scene text.xa{fill:var(--accL)}
.scene text.cap{fill:var(--accL)}
/* ===== Xyken additions ===== */
.ftr .fcv{opacity:.32}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,4.7vw,96px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:12.5ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:#fff;border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(50px,5vw,92px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
/* products: rows */
.prd{list-style:none;margin:0;padding:0}
.prd-row{display:grid;grid-template-columns:minmax(0,3.4fr) minmax(0,5fr) minmax(0,2.6fr);column-gap:var(--gap);align-items:start;padding:20px 0 22px;border-top:1px solid var(--hairD);position:relative}
.prd-row:last-child{border-bottom:1px solid var(--hairD)}
.prd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prd-row:hover::after{transform:scaleX(1)}
.prd-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.4vw,40px);line-height:1.05;letter-spacing:-.025em;margin:0 0 10px}
.prd-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD)}
.prd-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:54ch}
.prd-row .meta{display:flex;flex-direction:column;gap:8px}
.prd-row .meta .lab{color:var(--stoneD)}
.prd-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--acc);padding:6px 8px 5px}
@media (max-width:1024px){.prd-row{grid-template-columns:1fr 1fr;row-gap:16px}.prd-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.prd-row{grid-template-columns:1fr}}
/* R&D programmes (NIH) */
.rd{list-style:none;margin:0;padding:0}
.rd-row{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,4.4fr) minmax(0,4fr) minmax(0,2fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.rd-row:last-child{border-bottom:1px solid var(--hair)}
.rd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.rd-row:hover::after{transform:scaleX(1)}
.rd-row .yr{font:400 11px/1.6 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.rd-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.9vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0}
.rd-row p{margin:0;color:var(--stone);font-size:15.5px;line-height:1.6}
.rd-row .meta{display:flex;flex-direction:column;gap:8px;align-items:flex-start}
.rd-row .meta a{color:var(--bone)}
.rd-row .tag{display:inline-block;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--acc);padding:6px 8px 5px}
@media (max-width:1100px){.rd-row{grid-template-columns:minmax(0,1fr) minmax(0,3fr);row-gap:12px}.rd-row p{grid-column:2}.rd-row .meta{grid-column:2;flex-direction:row;flex-wrap:wrap;gap:8px 20px}}
@media (max-width:620px){.rd-row{grid-template-columns:1fr}.rd-row p,.rd-row .meta{grid-column:1}}
.caps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(64px,7vw,110px)}
.cap{border-top:1px solid var(--hair);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:24px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--bone);stroke-width:1.1}
.cap svg .a{stroke:var(--accL)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stone);font-size:15.5px;margin:0;max-width:38ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accL)}
@media (max-width:900px){.caps{grid-template-columns:1fr;row-gap:40px}}
/* team: refined text-only */
.tm{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start}
.tm-p{border-top:1px solid var(--hairD);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD);margin-bottom:18px}
.tm-p p{color:var(--stoneD);font-size:16px;line-height:1.6;margin:0 0 14px;max-width:56ch}
.tm-x{list-style:none;margin:28px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:var(--gap)}
.tm-x li{padding:14px 0 16px;border-top:1px solid var(--hairD);font-size:15px;color:var(--ink)}
.tm-x .lab{display:block;margin-bottom:6px;color:var(--stoneD)}
.tm-side p{color:var(--stoneD);font-size:16px;line-height:1.6;max-width:40ch;margin:0 0 18px}
@media (max-width:1024px){.tm{grid-template-columns:1fr}}
@media (max-width:560px){.tm-x{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("xyken-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M14 70C22 36 30 28 40 44S56 70 66 50M58 64C66 46 74 30 84 18"/></svg>
    <div class="wm"><span>XYKEN</span></div>
  </div>
  <span class="lab pl">Mobile 3D imaging · McLean, Virginia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Xyken, home"><svg class="xm" viewBox="0 0 31 25" aria-hidden="true">' + MARK + '</svg><span class="bt">Xyken</span></a>'

NAV = [("story", "Technology"), ("products", "Products"), ("research", "R&amp;D"), ("team", "Team")]
R["navmenu"] = '<nav class="nav" aria-label="Primary">\n' + "".join(
    '    <a class="nl ul" href="#%s" data-to="%s">%s</a>\n' % (k, k, v) for k, v in NAV) + r'''    <a class="btn" href="#contact" data-to="contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>
<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/" data-to="hero">Home</a></li>
''' + "".join('    <li><a href="#%s" data-to="%s">%s</a></li>\n' % (k, k, v) for k, v in NAV) + r'''    <li><a href="#contact" data-to="contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>McLean, Virginia</div>
    <div><span class="lab">Email</span><br>info@xyken.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Xyken</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Xyken";\nvar PK="xyken";'

R["content"] = r'''var FONTS=['300 1em "Outfit"','400 1em "Outfit"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','400 1em "IBM Plex Mono"'];
var MAIL="info@xyken.com";
var RP="https://reporter.nih.gov/project-details/";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-05-18",s:"NIH · NIDCD",t:"Hearing aid SBIR Phase II enters its second year",u:RP+"11320732"},
 {d:"2025-04-11",s:"NIH · NIDCD",t:"SBIR Phase II award for smartphone-made hearing aids",u:RP+"11173541"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function prd(){var A=[
  ["SnugFit O&P 3D Scanner","The app · iPhone and iPad","Real-time 3D body scanning for FO, AFO, KAFO, knee, torso and head with the TrueDepth sensor, no other device needed. Sub-millimetre accuracy, no manual noise clean-up, and scans uploaded with the prescription in one click.",["15-day free trial","Scans in 5 to 25 seconds","TrueDepth iPhone X and later"],1],
  ["SureScan Mirror","Patent-pending optics","A 53-gram mirror attachment that turns the front TrueDepth (Face ID) camera into a full-colour iPhone or iPad 3D scanner, so you see the scan on screen while you capture it. Developed through NIH support.",["U.S. patent pending 29/866,037","Full, unblocked field of view","Over 500 sold"],0],
  ["SnugFit SDK","Your own scanner app","Build your own 3D scanner app the way you want it, on the same engine that powers SnugFit O&P.",["Xyken’s own IP","No third-party SDK"],0],
  ["Order-N-Scan","Ordering, online","Lets your customers scan and order their custom footwear products online.",["Custom footwear","Direct to consumer"],0],
  ["Deep Link","Integration","The simplest way to connect your app to the SnugFit O&P 3D scan interface.",["For partner apps"],0]];
  return '<ul class="prd">'+A.map(function(a){return '<li class="prd-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Most used</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'}
function rd(){var A=[
  ["2025–2028","Custom-fit, low-cost hearing aids","Smartphone 3D ear imaging, automated shell generation and efficient 3D printing with modular electronics, to make custom-fit OTC hearing aids affordable and widely available.",["NIDCD · SBIR Phase II","11320732"],1],
  ["2021–2026","Foot orthotics from a phone","Clinicians capture the 3D foot in any posture (weight bearing, non-bearing or partial), see its biomechanics, optimise the orthotic by finite element analysis, and test and refit with a local 3D printer.",["NIA · SBIR Phase II","10866599"],0],
  ["2017–2022","Remote chronic wound management","Quantitative 3D documentation of wounds on mobile devices to track healing and predict its course.",["NIA · NIAMS · SBIR",""],0],
  ["2010–2018","Capsule endoscopy and 3D endoscopic imaging","Intelligent capsule endoscopy video analysis, 720-degree capsule imaging and real-time 3D for endoscopic instruments, the roots of GISentinel.",["NIDDK · NIA · SBIR",""],0]];
  return '<ul class="rd">'+A.map(function(a){var lk=a[3][1]?'<a class="lab ul" href="'+RP+a[3][1]+'" target="_blank" rel="noopener">NIH RePORTER ↗</a>':'';return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Active</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["3D software","Real-time capture and reconstruction on the phone, 3D modelling, deformation and GPU implementation, with cloud computing where it helps.",'<path d="M28 4L50 16V40L28 52L6 40V16Z"/><path class="a" d="M6 16L28 28L50 16M28 28V52"/>'],
  ["Specialized optics","Unconventional optical elements, from as small as a pencil tip to the SureScan Mirror, designed for low cost and high scan quality.",'<path d="M8 46L46 8"/><path class="a" d="M4 28H24L34 18M34 18L52 18"/><circle cx="34" cy="18" r="3"/>'],
  ["Embedded hardware","Miniature DSP and FPGA computing boards, some as small as half a credit card, for power-hungry 3D processing.",'<rect x="12" y="12" width="32" height="32"/><rect class="a" x="21" y="21" width="14" height="14"/><path d="M20 4v8M28 4v8M36 4v8M20 44v8M28 44v8M36 44v8M4 20h8M4 28h8M4 36h8M44 20h8M44 28h8M44 36h8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mobile 3D imaging · McLean, Virginia<span class="nomob"> · NIH SBIR</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Custom fit,</span><span class="l">scanned on</span><span class="l"><em>a phone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Xyken’s patented mobile 3D and AI imaging turns an iPhone or iPad into a clinical 3D scanner for orthotics and prosthetics, used by more than 8,500 clinic users in 25 countries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">See how a scan works '+ARR+'</a><a class="btn" href="#products" data-to="products">Our products</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Xyken</span>'+
   '<p class="txt" id="mani">We do not build on someone else’s SDK. We own the IP, <em>from the 3D algorithms to the optics,</em> so we can answer your customization needs quickly.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">8,500+</span><p class="k">Clinic users of the SnugFit O&amp;P 3D Scanner</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;0.4<sup>mm</sup></span><p class="k">Average error on a foot model, against an industrial ground truth</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25</span><p class="k">Countries with users, with a one-hour customer response time</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · SnugFit O&amp;P</span><h2 class="d3">A clinical scan in <em>under 25 seconds.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Position</span><span>Capture</span><span>Accuracy</span><span>Upload</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start in the right place.</h2><p>An initial position indicator, a green shade overlay or haptics, tells you when the phone is set. The app picks the right accuracy level for the scan: FO, AFO, KAFO, knee, torso or head.</p></article>'+
     '<article class="step"><h2>Move freely. Truly real time.</h2><p>Walk the phone round the patient; the scan does not lose track. A torso takes five seconds, an AFO under twenty-five, with no cast, no mould and no other device.</p></article>'+
     '<article class="step"><h2>Sub-millimetre, measured.</h2><p>Tested against an industrial scanner accurate to 10 microns: average error under 0.4 mm on a foot model and under 0.5 mm on a torso, confirmed by an independent evaluator. No noise to clean up by hand.</p></article>'+
     '<article class="step"><h2>One click to the lab.</h2><p>Scans and prescription upload together, and the record stays on the device. From there it becomes an orthotic, a prosthetic socket, a compression garment or custom footwear.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Digital orthotics and prosthetics, <em>made easy.</em></h2></div><p data-r>One engine, built by Xyken, behind every product: the app clinics use every day, the optics that extend it, and the tools partners build on.</p></div>'+
   prd()+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>R&amp;D · NIH SBIR</span><h2 class="d2 split">Research that ends up <em>in clinics.</em></h2></div><p data-r>With the support of the National Institutes of Health, Xyken works on mobile 3D imaging for hearing aids, orthotics and chronic wounds, and is developing a high-resolution rear-camera 3D scanner.</p></div>'+
   rd()+caps()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists and engineers in <em>mobile 3D.</em></h2></div><p data-r>An exceptional team with strong expertise in 3D imaging, 2D imaging, specialized optics and miniature embedded DSP/FPGA hardware, working with industry partners in healthcare and beyond.</p></div>'+
   '<div class="tm"><div class="tm-side"><p>Xyken has led a continuous run of NIH SBIR research since 2010, from capsule endoscopy to foot orthotics and hearing aids, and believes just as strongly in commercialization.</p><a class="btn" href="'+RP+'11320732" target="_blank" rel="noopener">The current NIH award '+ARR+'</a></div>'+
    '<div class="tm-p"><h3>Dr. Steven Yi</h3><span class="cr">Principal investigator · NIH SBIR awards</span>'+
     '<p>Principal investigator on Xyken’s NIH SBIR programmes, including the current Phase II award for a smartphone-based custom-fit hearing aid manufacturing system.</p>'+
     '<ul class="tm-x"><li><span class="lab">Hearing</span>NIDCD SBIR Phase II</li><li><span class="lab">Orthotics</span>NIA SBIR Phase II</li><li><span class="lab">Wounds</span>NIA · NIAMS SBIR</li></ul></div></div>'+
   '<div class="shead" style="margin:clamp(72px,8vw,120px) 0 28px"><h2 class="d3 split">News</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For clinics, manufacturers and partners</span>'+
   '<h2 class="big split">Try SnugFit <em>free for 15 days.</em></h2>'+
   '<p class="sub" data-r>We demonstrate our products online. Tell us about you and what you need, from a trial to app customization, and we will do the rest.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#products" data-to="products">See the products</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>7921 Jones Branch Dr., #392</span><br><span>McLean, Virginia 22102</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Support</span><p>One-hour customer response time</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>7921 Jones Branch Dr., #392<br>McLean, Virginia 22102</div>'+
   '<div class="c"><span class="lab">Products</span>SnugFit O&amp;P · SureScan Mirror<br>SnugFit SDK · Order-N-Scan</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#products" data-to="products">Products</a><br><a class="ul" href="#research" data-to="research">R&amp;D</a><br><a class="ul" href="#team" data-to="team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Outfit\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.06em">XYKEN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Xyken, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Xyken — Mobile 3D imaging for custom fit",x:"Home"}}'''

R["field"] = (HERE / "xyken.field.js").read_text()
R["story"] = (HERE / "xyken.story.js").read_text()

def sub(src, name, body):
    pats = [(r"(/\*<R:%s>\*/)(.*?)(/\*</R:%s>\*/)" % (name, name)), (r"(<!--<R:%s>-->)(.*?)(<!--</R:%s>-->)" % (name, name))]
    for pat in pats:
        new, n = re.subn(pat, lambda m: m.group(1) + body + m.group(3), src, count=1, flags=re.S)
        if n:
            return new
    raise SystemExit("region not found: " + name)

out = SRC
for k, v in R.items():
    out = sub(out, k, v)
left = [k for k in re.findall(r"<R:([a-z0-9]+)>", out) if k not in R]
if left:
    print("kept from firelight:", sorted(set(left)))
out = re.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update: build-out pages (_kit/lib/buildout.js)
(HERE / "xyken.src.html").write_text(out)
print("wrote", HERE / "xyken.src.html", len(out))
