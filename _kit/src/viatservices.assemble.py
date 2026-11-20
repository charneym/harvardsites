#!/usr/bin/env python3
"""Assemble viatservices.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/viatservices.assemble.py && node build.js src/viatservices.src.html ../viatservices/index.html
Facts: _kit/dossiers/viatservices.md. Palette: the live viatservices.com (orange wordmark and mark #f1991b, orange nav pill,
navy #1A2744 in its theme)."""
import re, pathlib, base64
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
IMG = HERE.parent / "assets" / "viatservices"
def b64(n): return "data:image/webp;base64," + base64.b64encode((IMG / n).read_bytes()).decode()
R = {}

R["meta"] = r'''<title>VIAT Services — Next-generation neurocognitive assessment</title>
<meta name="description" content="VIAT Services develops neurocognitive assessments based on the latest advances in neuroscience, and, with an NSF SBIR Phase I award, an immersive virtual reality assessment of spatial orientation for aviation, aerospace, navigation and other safety-critical work.">
<meta name="theme-color" content="#0c1326">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23f1991b'/%3E%3Cpath d='M12 34c8-12 20-16 32-12 6 2 9 6 8 10-8 12-20 16-32 12-6-2-9-6-8-10z' fill='none' stroke='%23fff' stroke-width='6'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Sora:300,400; Hanken Grotesk:400,500; Geist Mono:400*/"

R["root"] = r''':root{
  --ink:#0c1326;--inkr:12,19,38;--boner:244,242,238;--accr:241,153,27;--ink2:#101932;--ink3:#16213d;--deep:#090f1f;
  --bone:#f4f2ee;--bone2:#ebe8e2;--bone3:#dcd8cf;
  --stone:#a7aec0;--stoneD:#545c6e;
  --acc:#f1991b;--accL:#f6a93a;--accD:#a85f00;
  --hair:rgba(244,242,238,.14);--hairD:rgba(12,19,38,.16);
  --disp:'Sora',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Sora',system-ui,sans-serif;
  --sans:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Geist Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:#0c1326}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the mark: VIAT's orange square with the white lens/eye loop (redrawn from the logo on viatservices.com)
MARK = '<rect class="vm-sq" x="0" y="0" width="30" height="30"/><path class="vm-lp" d="M6.5 17.2c3.6-5.8 9.2-8 14.6-6.1 2.6.9 3.9 2.6 3.4 4.5-3.6 5.8-9.2 8-14.6 6.1-2.6-.9-3.9-2.6-3.4-4.5z"/>'

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.vm{width:28px;height:28px;flex:none;overflow:visible}
.brand .vm-sq{fill:var(--acc)}
.brand .vm-lp{fill:none;stroke:#fff;stroke-width:2.6}
.brand .bt{font:400 19px/1 var(--disp);letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}
.brand .bt b{font-weight:400;color:var(--accL)}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
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
.scene .rg{fill:none;stroke:rgba(var(--boner),.16);stroke-width:1}
.scene .rg.r5{stroke:rgba(var(--boner),.34)}
.scene .tk{stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .gd{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .lm{fill:rgba(var(--boner),.06);stroke:rgba(var(--boner),.82);stroke-width:1.3}
.scene .lm2{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .me{fill:#101932;stroke:var(--bone);stroke-width:1.4}
.scene .me2{fill:none;stroke:var(--bone);stroke-width:1.4}
.scene .hs{fill:var(--acc);stroke:var(--acc);stroke-width:1}
.scene .gh .me,.scene .gh .me2{stroke:rgba(var(--boner),.6);stroke-dasharray:3 4}
.scene .gh .hs{fill:none;stroke:rgba(var(--accr),.8);stroke-dasharray:3 3}
.scene .fov{fill:rgba(var(--accr),.08);stroke:rgba(var(--accr),.55);stroke-width:1}
.scene .arcA{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .pth{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1.1;stroke-dasharray:2 6}
.scene .pth2{fill:none;stroke:rgba(var(--boner),.7);stroke-width:1.2;stroke-dasharray:5 6}
.scene .ray{fill:none;stroke:var(--accL);stroke-width:2}
.scene .err{fill:none;stroke:var(--accL);stroke-width:1.3}
.scene .route{fill:none;stroke:var(--accL);stroke-width:1.4;stroke-linecap:round}
.scene .eegb{stroke:rgba(var(--boner),.18);stroke-width:1}
.scene .eeg{fill:none;stroke:var(--accL);stroke-width:1.3}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9cfdb;paint-order:stroke;stroke:#101932;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.nm2{fill:var(--bone)}
.scene text.cap{fill:var(--accL)}
/* ===== VIAT additions ===== */
.hero .hero-h{font-size:clamp(44px,4.7vw,96px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:12.5ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
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
/* technology: the prototype, in VIAT's own photograph, beside what makes it different */
.tech{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start}
.tech figure{margin:0;position:relative}
.tech .fr{aspect-ratio:4/5;overflow:hidden;background:#e4e0d8}
.tech img{width:100%;height:100%;object-fit:cover;object-position:40% 50%;display:block;transition:transform .8s var(--eo)}
.tech figure:hover img{transform:scale(1.03)}
.tech figcaption{margin-top:14px;font:400 11px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--stoneD)}
.diffs{list-style:none;margin:0;padding:0}
.diffs li{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);column-gap:var(--gap);padding:22px 0 24px;border-top:1px solid var(--hairD);position:relative}
.diffs li:last-child{border-bottom:1px solid var(--hairD)}
.diffs li::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.diffs li:hover::after{transform:scaleX(1)}
.diffs h3{font-family:var(--disp);font-weight:300;font-size:clamp(21px,1.7vw,27px);line-height:1.2;letter-spacing:-.015em;margin:0}
.diffs .lab{display:block;margin-bottom:10px;color:var(--accD)}
.diffs p{margin:0;color:var(--stoneD);font-size:15.5px;line-height:1.6}
@media (max-width:1024px){.tech{grid-template-columns:1fr}.tech figure{max-width:520px}}
@media (max-width:620px){.diffs li{grid-template-columns:1fr;row-gap:10px}}
/* assessments (programme rows) */
.asm{list-style:none;margin:0;padding:0}
.asm-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,2.8fr);column-gap:var(--gap);align-items:start;padding:24px 0 26px;border-top:1px solid var(--hair);position:relative}
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
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("viat-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M20 20H76V76H20ZM30 55c8-12 19-16 29-13 5 1.5 7.5 5 7 8.5-8 12-19 16-29 13-5-1.5-7.5-5-7-8.5z"/></svg>
    <div class="wm"><span>VIAT SERVICES</span></div>
  </div>
  <span class="lab pl">Neurocognitive assessment · Hampton, Virginia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="VIAT Services, home"><svg class="vm" viewBox="0 0 30 30" aria-hidden="true">' + MARK + '</svg><span class="bt"><b>VIAT</b> Services</span></a>'

NAV = [("story", "Technology"), ("assessments", "Assessments"), ("applications", "Applications"), ("team", "Team")]
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
    <div><span class="lab">Office</span><br>Hampton, Virginia</div>
    <div><span class="lab">Email</span><br>info@viatservices.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">VIAT Services</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="VIAT Services";\nvar PK="viat";'

R["content"] = r'''var FONTS=['300 1em "Sora"','400 1em "Sora"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','400 1em "Geist Mono"'];
var MAIL="info@viatservices.com";
var AWARD="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2528215";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2025-08-04",s:"National Science Foundation",t:"SBIR Phase I: Immersive Virtual Reality-Based Assessment Tool for Spatial Orientation",u:AWARD}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function diffs(){var D=[
  ["Allocentric vs egocentric","What today’s tests miss","Conventional computerized spatial tests mainly measure object-to-object relations from a fixed viewpoint. They do not engage the multisensory systems that encode the relations between the body and the objects around it."],
  ["Immersive by design","Vestibular and proprioceptive input","The instrument integrates immersive virtual reality with design features that bring in vestibular and proprioceptive input from the environment and systematically constrain allocentric strategies."],
  ["Portable and scalable","Built to be licensed","The goal is a portable, scalable tool with strong internal and predictive validity, offered to key sectors through annual licensing."]];
  return '<ul class="diffs">'+D.map(function(d,i){return '<li><div><span class="lab">0'+(i+1)+' · '+esc(d[1])+'</span><h3>'+esc(d[0])+'</h3></div><p>'+esc(d[2])+'</p></li>'}).join("")+'</ul>'}
function asm(){var A=[
  ["VR Spatial Orientation","Immersive VR assessment","An immersive virtual reality assessment of spatial orientation ability, the capacity to imagine a reoriented self or a change of perspective within an environment. Developed with an NSF SBIR Phase I award.",["In development","NSF SBIR Phase I","Aviation · aerospace · navigation"],1],
  ["FICS™","Fundamental Integrated Cognitive Style","Measures an individual’s preferences for processing information. Built on everyday scenarios rather than self-report, so it is hard to game. For organizations, professional coaches and HR.",["72 questions · 20 minutes","Ages 11 and up","English and French"],0],
  ["MQ™","Metacognition Quotient","Measures awareness of different strategies to solve a problem and the flexibility to choose the optimal one. Used in one-on-one sessions or team training, with a report and training exercises.",["72 questions · 20 minutes","Ages 11 and up","Online or paper"],0],
  ["3TOTA™","Three Types of Thinkers Assessment","A career profiling tool based on research that identified three neural networks responsible for how individuals process information, shown to predict success in different professions.",["48 questions · 20 minutes","Ages 8 and up","Online, computerized or paper"],0]];
  return '<ul class="asm">'+A.map(function(a){return '<li class="asm-row'+(a[4]?' lead':'')+'"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">New</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Aviation and aerospace","A first application of the VR spatial orientation assessment, for personnel selection and training.",'<path d="M4 34L52 18L44 30L52 42Z"/><path class="a" d="M4 34H30"/><path d="M28 26L22 12H30L38 23"/>'],
  ["Navigation and defense","Navigation and other safety-critical environments, with applications in defense.",'<circle cx="28" cy="28" r="22"/><path class="a" d="M28 10L33 28L28 46L23 28Z"/><path d="M28 2v6M28 48v6M2 28h6M48 28h6"/>'],
  ["Healthcare and public safety","Fields where spatial orientation is essential and, with aviation, over 10 million Americans are assessed each year.",'<path d="M20 6H36V20H50V36H36V50H20V36H6V20H20Z"/><path class="a" d="M14 28H22L25 21L30 35L33 28H42"/>'],
  ["STEM education","Spatial ability matters for learning in science and mathematics; the project also advances how VR can support its assessment and training.",'<path d="M6 20L28 10L50 20L28 30Z"/><path d="M14 24V38C20 44 36 44 42 38V24"/><path class="a" d="M50 20V36"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neurocognitive assessment · Hampton, Virginia<span class="nomob"> · NSF SBIR</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Assessment</span><span class="l">for human</span><span class="l"><em>performance.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Next-generation neurocognitive assessment technologies. With an NSF SBIR Phase I award, VIAT is building an immersive virtual reality assessment of spatial orientation for aviation, aerospace, navigation and other safety-critical work.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">Explore the technology '+ARR+'</a><a class="btn" href="#assessments" data-to="assessments">Our assessments</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why VIAT</span>'+
   '<p class="txt" id="mani">Unlike assessments built on theoretical models, ours are developed from the latest advances in neuroscience: <em>brain mapping, neuroimaging and EEG.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305K</span><span class="k">NSF SBIR Phase I award for the VR spatial orientation assessment, 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+</span><span class="k">Research universities served worldwide</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><span class="k">Countries where VIAT assessments have been used, for over 10 years</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Spatial orientation</span><h2 class="d3">Testing orientation the way the body <em>feels it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ability</span><span>Immersion</span><span>Point</span><span>Validate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Spatial orientation.</h2><p>The capacity to imagine a reoriented self or a change of perspective within an environment. It is essential in aviation, healthcare and public safety, where over 10 million Americans are assessed each year.</p></article>'+
     '<article class="step"><h2>Immersive, not on a flat screen.</h2><p>Existing computerized tools fail to activate the sensory systems involved in spatial orientation. VIAT’s instrument uses immersive VR with design features that bring in vestibular and proprioceptive input.</p></article>'+
     '<article class="step"><h2>Reorient, then point.</h2><p>Reorientation angles, pointing directions and response dynamics are optimized to isolate egocentric processing: the relations between the body and the objects around it.</p></article>'+
     '<article class="step"><h2>Validated in the brain and the world.</h2><p>Development is iterative, combining behavioral testing, real-world navigation tasks and EEG-based neurophysiological validation, toward a new psychometric framework for spatial orientation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The VR assessment</span><h2 class="d2 split">The first scientifically valid VR test of <em>spatial orientation.</em></h2></div><p data-r>The project integrates insights from cognitive neuroscience and human-computer interaction into a scientifically grounded, portable and scalable tool for personnel selection, training and diagnostics.</p></div>'+
   '<div class="tech"><figure><div class="fr"><img src="__PART__" alt="A participant wearing a VR headset stands in an empty room during a spatial orientation test" width="720" height="956" loading="lazy" decoding="async"></div><figcaption>Testing the immersive VR assessment · VIAT Services</figcaption></figure>'+
   diffs()+'</div>'+
  '</div></section>'+
  '<section class="sec dark2" id="assessments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Assessments</span><h2 class="d2 split">Valid, reliable, grounded in <em>neuroscience.</em></h2></div><p data-r>Developed by university professors at the world’s top research universities, our assessments help organizations predict success, assess skills, hire candidates, develop leaders and improve teams.</p></div>'+
   asm()+
  '</div></section>'+
  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Where orientation is <em>safety-critical.</em></h2></div><p data-r>The VR assessment is aimed at personnel selection, training and diagnostics in the sectors that depend most on spatial orientation, with deployment in at least three major industries targeted by year three.</p></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Neuroscience, psychology and <em>strategy.</em></h2></div><p data-r>VIAT’s interdisciplinary team has experience in neuroscience, psychology, management consulting, strategy and technology.</p></div>'+
   '<div class="tm"><div class="tm-side"><p>VIAT Services has roots in advanced scientific assessment: it first offered proprietary assessments to research universities worldwide, then expanded to serve organizations.</p><a class="btn" href="'+AWARD+'" target="_blank" rel="noopener">The NSF award '+ARR+'</a></div>'+
    '<div class="tm-p"><h3>Dr. Maria Kozhevnikov</h3><span class="cr">Principal investigator · NSF SBIR Phase I</span>'+
     '<p>Cognitive neuroscientist. Her research examines visual and spatial imagery, individual differences in information processing, and VR-based neurocognitive assessment of spatial orientation in high-demand settings such as aviation and spaceflight.</p>'+
     '<ul class="tm-x"><li><span class="lab">Harvard Medical School</span>Martinos Center for Biomedical Imaging</li><li><span class="lab">National University of Singapore</span>Department of Psychology</li></ul></div></div>'+
   '<div class="shead" style="margin:clamp(72px,8vw,120px) 0 28px"><h2 class="d3 split">News</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For organizations, coaches and research partners</span>'+
   '<h2 class="big split">Talk to <em>VIAT.</em></h2>'+
   '<p class="sub" data-r>Ask a question, request a demo, or get information about prices and packages. One of our experts will help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#assessments" data-to="assessments">See the assessments</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>1100 Exploration Way,</span><br><span>Hampton, Virginia 23666</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Funding</span><p>National Science Foundation, SBIR Phase I</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>1100 Exploration Way<br>Hampton, Virginia 23666</div>'+
   '<div class="c"><span class="lab">Assessments</span>VR Spatial Orientation<br>FICS™ · MQ™ · 3TOTA™</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#assessments" data-to="assessments">Assessments</a><br><a class="ul" href="#applications" data-to="applications">Applications</a><br><a class="ul" href="#team" data-to="team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.04em">VIAT SERVICES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 VIAT Services LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"VIAT Services — Next-generation neurocognitive assessment",x:"Home"}}'''

R["field"] = (HERE / "viatservices.field.js").read_text()
R["story"] = (HERE / "viatservices.story.js").read_text()

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
out = out.replace("__PART__", b64("participant.webp"))
left = [k for k in re.findall(r"<R:([a-z0-9]+)>", out) if k not in R]
if left:
    print("kept from firelight:", sorted(set(left)))
out = re.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update: build-out pages (_kit/lib/buildout.js)
(HERE / "viatservices.src.html").write_text(out)
print("wrote", HERE / "viatservices.src.html", len(out))
