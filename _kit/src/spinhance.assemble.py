#!/usr/bin/env python3
"""Assemble spinhance.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/spinhance.assemble.py && node build.js src/spinhance.src.html ../spinhance/index.html
Facts: _kit/dossiers/spinhance.md. Palette: the live spinhance.com logo (Squarespace): "SPIN" in #00a0de, "HANCE" in charcoal
#1b1918, on white. Ink #111315 (from the charcoal), bone, Spinhance blue as the accent. Display: Sora (close to the logo's
squared geometric letters)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Spinhance — Imaging phantoms and delivery devices for hyperpolarized xenon MRI</title>
<meta name="description" content="Spinhance designs MR-compatible devices for hyperpolarized xenon-129 lung MRI: a quality-assurance imaging phantom for clinical pulmonary gas-exchange imaging (NIH NIBIB SBIR) and a free-breathing delivery and monitoring system (NIH NHLBI SBIR). Rydal, Pennsylvania.">
<meta name="theme-color" content="#111315">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23111315'/%3E%3Cpath d='M44 18H26a8 8 0 0 0 0 16h12a8 8 0 0 1 0 16H20' fill='none' stroke='%2300a0de' stroke-width='6'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Sora:300,400; Inter Tight:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#111315;--inkr:17,19,21;--boner:242,241,238;--accr:0,160,222;--ink2:#16191c;--ink3:#1d2125;--deep:#0d0f10;
  --bone:#f2f1ee;--bone2:#e9e8e4;--bone3:#dad9d4;
  --stone:#a9b0b5;--stoneD:#50585d;
  --acc:#00a0de;--accL:#3fbbea;--accD:#00739f;
  --hair:rgba(242,241,238,.14);--hairD:rgba(17,19,21,.16);
  --disp:'Sora',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Sora',system-ui,sans-serif;
  --sans:'Inter Tight',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:#111315}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''



R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand img{height:22px;width:auto;display:block}
.brand .bt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
@media (max-width:520px){.brand img{height:18px}}'''


R["scenecss"] = r'''/* story (pinned, one continuous scene) */
/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa2b4;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66708a;transition:background .35s,border-color .35s}
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
.scene .gd{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .dv{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.82);stroke-width:1.3}
.scene .dv2{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .dia{fill:none;stroke:var(--accL);stroke-width:1.6}
.scene .cap2{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.1}
.scene .rbc{fill:rgba(var(--boner),.06);stroke:rgba(var(--boner),.7);stroke-width:1.1}
.scene .xe{fill:var(--accL)}
.scene .xe2{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .mesh{fill:none;stroke:rgba(var(--boner),.75);stroke-width:1.2}
.scene .poly{fill:rgba(var(--accr),.22);stroke:var(--accL);stroke-width:1.1}
.scene .poly2{fill:rgba(var(--boner),.12);stroke:var(--accL);stroke-width:1.1;stroke-dasharray:3 3}
.scene .bore{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1;stroke-dasharray:2 5}
.scene .ax{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1}
.scene .sp{fill:none;stroke:var(--bone);stroke-width:1.6}
.scene .sp2{fill:none;stroke:var(--accL);stroke-width:1.5;stroke-dasharray:5 4}
.scene .bias{fill:none;stroke:var(--bone);stroke-width:1.2}
.scene .aw{fill:none;stroke:rgba(var(--boner),.85);stroke-width:1.4}
.scene .aw2{fill:none;stroke:rgba(var(--boner),.35);stroke-width:1;stroke-dasharray:2 4}
.scene .seal{fill:rgba(var(--boner),.18);stroke:var(--bone);stroke-width:1.2}
.scene .gap{fill:none;stroke:rgba(var(--accr),.7);stroke-width:1;stroke-dasharray:3 5}
.scene .flow{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.1;stroke-dasharray:10 8}
.scene .vro{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1.1}
.scene .vrc{fill:none;stroke:var(--accL);stroke-width:1.5;stroke-linecap:round}
.scene .dial{fill:#16191c;stroke:rgba(var(--boner),.7);stroke-width:1.2}
.scene .tk{stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .ndl{stroke:var(--accL);stroke-width:2;stroke-linecap:round}
.scene .hub{fill:var(--accL)}
.scene .lgb{fill:none;stroke:rgba(var(--boner),.35);stroke-width:1}
.scene .lgf{fill:rgba(var(--accr),.55);stroke:var(--accL);stroke-width:1}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c6ccd0;paint-order:stroke;stroke:#16191c;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.nm2{fill:var(--bone)}
.scene text.cap{fill:var(--accL)}
/* ===== Spinhance additions ===== */
#pre .wm .c:nth-child(-n+4){color:var(--accL)}
.hero .hero-h{font-size:clamp(42px,4.1vw,82px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:13ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
html body .hero h1#pageTitle.hero-h{font-size:clamp(42px,3.3vw + 14px,78px)!important}
@media (max-width:860px){html body .hero h1#pageTitle.hero-h{font-size:clamp(38px,10.4vw,72px)!important}.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:var(--ink);border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(50px,5vw,92px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
/* how it works: four principles */
.caps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:34ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1100px){.caps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:44px}}
@media (max-width:620px){.caps{grid-template-columns:1fr}.cap p{max-width:52ch}}
.q{margin:clamp(64px,7vw,112px) 0 0;display:grid;grid-template-columns:minmax(0,3fr) minmax(0,9fr);gap:var(--gap);border-top:1px solid var(--hairD);padding-top:22px}
.q blockquote{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(24px,2.3vw,38px);line-height:1.22;letter-spacing:-.02em;max-width:34ch}
.q .lab{color:var(--accD)}
@media (max-width:760px){.q{grid-template-columns:1fr}}
/* assessments (programme rows) */
.asm{list-style:none;margin:0;padding:0}
.asm-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,2.8fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.asm-row:last-child{border-bottom:1px solid var(--hair)}
.asm-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.asm-row:hover::after{transform:scaleX(1)}
.asm-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,48px);line-height:1;letter-spacing:-.03em;margin:0 0 10px}
.asm-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.asm-row p{margin:0;color:var(--stone);font-size:16px;max-width:54ch}
.asm-row .meta{display:flex;flex-direction:column;gap:8px}
.asm-row.lead h3{color:var(--bone)}
.asm-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ink);background:var(--acc);padding:6px 8px 5px}
@media (max-width:1024px){.asm-row{grid-template-columns:1fr 1fr;row-gap:16px}.asm-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.asm-row{grid-template-columns:1fr}}
/* applications */
.caps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:34ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1100px){.caps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:44px}}
@media (max-width:620px){.caps{grid-template-columns:1fr}.cap p{max-width:52ch}}
/* team: refined text-only */
.tm{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start}
.tm-p{border-top:1px solid var(--hair);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:18px}
.tm-p p{color:var(--stone);font-size:16px;line-height:1.6;margin:0 0 14px;max-width:56ch}
.tm-x{list-style:none;margin:28px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:var(--gap)}
.tm-x li{padding:14px 0 16px;border-top:1px solid var(--hair);font-size:15px;color:var(--bone)}
.tm-x .lab{display:block;margin-bottom:6px}
.tm-side p{color:var(--stone);font-size:16px;line-height:1.6;max-width:40ch;margin:0 0 18px}
@media (max-width:1024px){.tm{grid-template-columns:1fr}}
@media (max-width:560px){.tm-x{grid-template-columns:1fr}}
/* team: refined text-only, two principal investigators */
.tm2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(32px,5vw,96px)}
.tm-p{border-top:1px solid var(--hair);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:18px}
.tm-p p{color:var(--stone);font-size:16px;line-height:1.6;margin:0 0 14px;max-width:52ch}
.tm-note{margin-top:clamp(40px,5vw,72px);color:var(--stone);font-size:16px;max-width:70ch}
@media (max-width:900px){.tm2{grid-template-columns:1fr}}
''' + r'''/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("spinhance-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M70 22H38a13 13 0 0 0 0 26h20a13 13 0 0 1 0 26H26"/></svg>
    <div class="wm"><span>SPINHANCE</span></div>
  </div>
  <span class="lab pl">Hyperpolarized xenon MRI · Rydal, Pennsylvania</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''


R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Spinhance, home"><img src="logo.webp" alt="Spinhance" width="171" height="21"><span class="bt">Spinhance</span></a>'


NAV = [("story", "Technology"), ("programme", "Programmes"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Based in</span><br>Rydal, Pennsylvania</div>
    <div><span class="lab">Funding</span><br>NIH NIBIB · NIH NHLBI</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Spinhance</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Spinhance";\nvar PK="spinhance";'

R["content"] = r'''var FONTS=['300 1em "Sora"','400 1em "Sora"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"'];
var AW1="https://reporter.nih.gov/project-details/11316661";
var AW2="https://reporter.nih.gov/project-details/11070224";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-09-15",s:"NIH RePORTER · NIBIB",t:"SBIR Phase I: Quality assurance imaging phantom for clinical pulmonary gas exchange xenon MRI",u:AW1},
 {d:"2025-02-01",s:"NIH RePORTER · NHLBI",t:"SBIR Phase I: Free-breathing dynamic cardiopulmonary function imaging system to use with xenon MRI",u:AW2},
 {d:"2021-05-01",s:"Magnetic Resonance in Medicine",t:"Effect of inhaled oxygen concentration on 129Xe chemical shift of red blood cells in rat lungs",u:"https://doi.org/10.1002/mrm.28801"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["Pressurised xenon","A sealed vessel of xenon gas: a stable stand-in for the inhaled agent, so a scan can be checked without a polarised dose or a volunteer.",'<path d="M16 12H40V44H16Z"/><path class="a" d="M24 12V6H32V12"/><circle class="a" cx="24" cy="26" r="2"/><circle class="a" cx="32" cy="32" r="2"/><circle class="a" cx="26" cy="36" r="2"/>'],
  ["3D-printed mesh","Polymer mesh structures designed to mimic the diffusion, magnetic susceptibility and relaxation of xenon gas in human airways and lung tissue.",'<path d="M10 18C16 12 22 24 28 18S40 12 46 18"/><path class="a" d="M10 28C16 22 22 34 28 28S40 22 46 28"/><path d="M10 38C16 32 22 44 28 38S40 32 46 38"/>'],
  ["Dissolved-phase signal","Polymer compartments, such as thermoplastic polyurethane and polydimethylsiloxane, chosen for their chemical shift and diffusion to reproduce xenon in tissue and in blood.",'<path d="M8 44H48"/><path class="a" d="M12 44C16 44 16 22 18 22S20 44 24 44"/><path d="M22 44C26 44 26 30 28 30S30 44 34 44"/><path d="M36 44C40 44 40 12 42 12S44 44 48 44"/>'],
  ["Every scanner","Testing at clinical sites on different scanner manufacturers, to quantify hardware and sequence biases and set standard imaging protocols.",'<circle cx="20" cy="28" r="14"/><circle class="a" cx="38" cy="28" r="14"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function prog(){var A=[
  ["NIH NIBIB · SBIR Phase I","Xenon MRI phantom","A quality-assurance imaging phantom for clinical pulmonary gas-exchange xenon MRI: first a pressurised xenon gas phantom with 3D-printed polymer mesh, to assess ventilation imaging (SNR, B0, B1, flip angle, resolution, geometric distortion); then polymer compartments for the membrane and red-blood-cell signals; then tests at clinical sites.",["2026–27","$306,358"],1,AW1],
  ["NIH NHLBI · SBIR Phase I","Free-breathing imaging system","An automatic, MRI-compatible set of piston-driven syringe pumps that follow the patient’s own breathing and add hyperpolarized xenon or oxygen to the inhaled gas, synchronised with the images, the heartbeat and exhaled O2, CO2 and xenon, with no breath-hold. Ends in a small pilot study.",["2025–27","$306,530"],0,AW2],
  ["In use","Small-animal delivery","The free-breathing system builds on an existing Spinhance product used to deliver hyperpolarized xenon in ventilated small-animal studies.",["Preclinical","MR-compatible"],0,""]];
  return '<ul class="asm">'+A.map(function(a){return '<li class="asm-row'+(a[4]?' lead':'')+'"><div><h3>'+esc(a[1])+'</h3><span class="nm3">'+esc(a[0])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Current</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+(a[5]?'<a class="lab ul" href="'+a[5]+'" target="_blank" rel="noopener">NIH record ↗</a>':'')+'</div></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hyperpolarized xenon MRI · Rydal, Pennsylvania<span class="nomob"> · NIH SBIR</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A reference</span><span class="l">standard for</span><span class="l"><em>xenon lung MRI.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Spinhance builds MR-compatible devices for hyperpolarized xenon-129 imaging of the lungs, including a quality-assurance phantom that reproduces the gas and dissolved-phase xenon signals.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="#programme" data-to="programme">Programmes</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why a phantom</span>'+
   '<p class="txt" id="mani">Xenon MRI sees where oxygen crosses into the blood. Yet no commercial phantom reproduces its dissolved-phase signal, and multi-site trials need <em>one reference.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">NIH SBIR Phase I awards, NIBIB 2026 and NHLBI 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$613K</span><p class="k">combined NIH funding for the two projects</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">xenon signals the phantom reproduces: gas, membrane, red blood cells</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Xenon MRI phantom</span><h2 class="d3">The lung’s signal, <em>held in a vessel.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Gas</span><span>Blood</span><span>Phantom</span><span>Sites</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Inhaled xenon fills the lung.</h2><p>Hyperpolarized xenon-129 is an inhaled MRI contrast agent, recently approved by the FDA for evaluating lung function. As a gas it shows how the airways ventilate.</p></article>'+
     '<article class="step"><h2>Then it crosses into the blood.</h2><p>Xenon diffuses through the alveoli, dissolves into the membrane and blood and binds to hemoglobin, mirroring oxygen. Each step has its own spectral signature.</p></article>'+
     '<article class="step"><h2>A phantom that answers the same way.</h2><p>Pressurised xenon in 3D-printed polymer mesh mimics the gas in airways and lung tissue, and polymer compartments are designed to reproduce the membrane and red-blood-cell signals.</p></article>'+
     '<article class="step"><h2>One reference, every scanner.</h2><p>Tested at clinical sites on different scanner manufacturers, the phantom measures hardware and sequence biases, so multi-site trials can trust the same numbers.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>How it works</span><h2 class="d2 split">A stable stand-in <em>for the lung.</em></h2></div><p data-r>The phantom is designed as a stable, reproducible reference for multi-center clinical trials and routine quality control of xenon MRI, from ventilation images to regional gas exchange.</p></div>'+
   caps()+
   '<div class="q"><span class="lab">Why it matters</span><blockquote>Reliable quantitative biomarkers for diseases such as idiopathic pulmonary fibrosis and pulmonary hypertension, and for pulmonary drug development.</blockquote></div>'+
  '</div></section>'+
  '<section class="sec dark2" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Devices for <em>xenon lung imaging.</em></h2></div><p data-r>Two NIH Small Business Innovation Research awards fund Spinhance’s current work: a phantom to standardise xenon MRI, and a system to image the lung during normal breathing.</p></div>'+
   prog()+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers of <em>hyperpolarized MRI.</em></h2></div><p data-r>The principal investigators on Spinhance’s NIH awards, with backgrounds in hyperpolarized magnetic resonance at the University of Pennsylvania.</p></div>'+
   '<div class="tm2">'+
    '<div class="tm-p"><h3>Kiarash Emami, PhD</h3><span class="cr">Co-founder · Contact PI, NHLBI SBIR</span>'+
     '<p>Holds a PhD in electrical and systems engineering and an MS in bioengineering from the University of Pennsylvania, where he published on hyperpolarized gas MRI in the Department of Radiology.</p></div>'+
    '<div class="tm-p"><h3>Nicholas Drachman</h3><span class="cr">Senior R&amp;D Engineer · Contact PI, NIBIB SBIR</span>'+
     '<p>Leads the xenon MRI phantom project. Previously published on hyperpolarized magnetic resonance from the University of Pennsylvania’s Department of Radiology.</p></div>'+
   '</div>'+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>publications.</em></h2></div><p data-r>The NIH award records and peer-reviewed work with a Spinhance affiliation.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For imaging centres, trial sponsors and partners</span>'+
   '<h2 class="big split">Talk to <em>Spinhance.</em></h2>'+
   '<p class="sub" data-r>For the xenon MRI phantom, free-breathing delivery or MR-compatible device work, reach the team in Rydal, Pennsylvania.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+AW1+'" target="_blank" rel="noopener">The phantom award '+ARR+'</a><a class="btn" href="'+AW2+'" target="_blank" rel="noopener">The NHLBI award</a></div>'+
   '<div class="ctc2"><div><span class="lab">Based in</span><p>Rydal, Pennsylvania 19046</p></div>'+
    '<div><span class="lab">Company</span><p>Spinhance, LLC</p></div>'+
    '<div><span class="lab">Funding</span><p>NIH NIBIB and NHLBI, SBIR Phase I</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Rydal, Pennsylvania</div>'+
   '<div class="c"><span class="lab">Focus</span>Hyperpolarized xenon-129 MRI<br>MR-compatible devices</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#programme" data-to="programme">Programmes</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="#contact" data-to="contact">Rydal, PA 19046</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.06em"><tspan fill="#3fbbea">SPIN</tspan>HANCE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Spinhance, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Spinhance — Imaging phantoms and delivery devices for hyperpolarized xenon MRI",x:"Home"}}'''

R["field"] = (HERE / "spinhance.field.js").read_text()
R["story"] = (HERE / "spinhance.story.js").read_text()

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
(HERE / "spinhance.src.html").write_text(out)
print("wrote", HERE / "spinhance.src.html", len(out))
