#!/usr/bin/env python3
"""Assemble ifitprosthetics.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/ifitprosthetics.assemble.py && node build.js src/ifitprosthetics.src.html ../ifitprosthetics/index.html
Facts: ifitprosthetics.com (home, team, background, innovation, international relief, blog, transfemoral pages), the iFIT 2026
product catalogue (ifit_product_catalog_8.6.26.pdf), the iFIT capability statement, NIH RePORTER (1R41HD118857-01 and earlier).
Palette: iFIT's own logo and 2026 catalogue (violet #3f0099 / #482d8b, orange #ee7623). Hero: iFIT's own TT200 studio cut-out
(catalogue image with its alpha mask). Photo in the approach section: iFIT's own catalogue photography."""
import re, pathlib, base64
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
IMG = HERE.parent / "assets" / "ifitprosthetics"
def b64(n): return "data:image/webp;base64," + base64.b64encode((IMG / n).read_bytes()).decode()
R = {}

R["meta"] = r'''<title>iFIT Prosthetics — Adjustable, immediate-fit prostheses</title>
<meta name="description" content="iFIT Prosthetics makes adjustable, immediate-fit transtibial and transfemoral prostheses that are fit and aligned on the patient's limb in a single session with hand tools. Veteran-owned, made in Wisconsin, developed with NIH funding.">
<meta name="theme-color" content="#120b2b">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23482d8b'/%3E%3Ccircle cx='40' cy='16' r='6' fill='%23fff'/%3E%3Cpath d='M10 44L34 26L50 30M30 30L22 52' fill='none' stroke='%23ee7623' stroke-width='6'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Archivo:300,400; Public Sans:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#120b2b;--inkr:18,11,43;--boner:245,243,248;--accr:238,118,35;--ink2:#170f36;--ink3:#1e1544;--deep:#0c0720;
  --bone:#f5f3f8;--bone2:#ebe7f1;--bone3:#dad4e6;
  --stone:#b4adc8;--stoneD:#575170;
  --acc:#ee7623;--accL:#f48d48;--accD:#a64a08;--vio:#482d8b;--vioL:#8f78d8;
  --hair:rgba(245,243,248,.14);--hairD:rgba(18,11,43,.16);
  --disp:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Archivo',system-ui,sans-serif;
  --sans:'Public Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:#120b2b}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand img.ifl{height:38px;width:auto;display:block}
@media (max-width:860px){.brand img.ifl{height:32px}}'''

STORY_LAYOUT = (HERE.parent.parent / "_kit" / "src" / "viatservices.assemble.py").read_text()
a = STORY_LAYOUT.index("/* story (pinned"); b = STORY_LAYOUT.index(".scene .rg")
STORY_LAYOUT = STORY_LAYOUT[a:b]

R["scenecss"] = STORY_LAYOUT + r'''.scene .gd{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .ax{stroke:rgba(var(--boner),.12);stroke-width:1;stroke-dasharray:2 6}
.scene .lb{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.8);stroke-width:1.3}
.scene .lb2{fill:none;stroke:rgba(var(--boner),.38);stroke-width:1;stroke-dasharray:3 4}
.scene .lb3{fill:none;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .ms{fill:none;stroke:var(--accL);stroke-width:1.6}
.scene .dm{fill:none;stroke:rgba(var(--boner),.7);stroke-width:1}
.scene .lead{fill:none;stroke:rgba(var(--boner),.22);stroke-width:1;stroke-dasharray:2 4}
.scene .szb{stroke:rgba(var(--boner),.3);stroke-width:3}
.scene .szb.on{stroke:var(--accL)}
.scene .sh{fill:rgba(143,120,216,.10);stroke:#cfc4f2;stroke-width:1.4}
.scene .sh2{fill:none;stroke:rgba(207,196,242,.45);stroke-width:1}
.scene .rv{fill:#170f36;stroke:#cfc4f2;stroke-width:1}
.scene .py{fill:rgba(var(--boner),.06);stroke:rgba(var(--boner),.75);stroke-width:1.2}
.scene .st{fill:none;stroke:var(--accL);stroke-width:2}
.scene .bk{fill:#170f36;stroke:var(--accL);stroke-width:1.2}
.scene .cd{fill:none;stroke:var(--accL);stroke-width:1.2}
.scene .al{fill:none;stroke:var(--accL);stroke-width:1;stroke-dasharray:6 5}
.scene .al2{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .ar{fill:none;stroke:var(--accL);stroke-width:1.5}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#cdc7dc;paint-order:stroke;stroke:#170f36;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.mu{fill:#9a93b2}
.scene text.cap{fill:var(--accL)}
/* ===== iFIT additions ===== */
.hero .hero-h{font-size:clamp(44px,4.9vw,100px);letter-spacing:-.035em;line-height:1.02;font-weight:300;max-width:11ch}
@media (max-width:1366px) and (min-width:861px){.hero .hero-h{font-size:clamp(42px,4.5vw,64px)}}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}
  html body .fieldbg{background:#120b2b}
  html body #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(min(50svh,115vw) - 90px),transparent calc(min(50svh,115vw) + 10px));mask-image:linear-gradient(180deg,#000 0,#000 calc(min(50svh,115vw) - 90px),transparent calc(min(50svh,115vw) + 10px))}
  html body .hero{padding-top:calc(min(50svh,115vw) + 8px)!important}
  html body .hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 38%,rgba(var(--inkr),.55) 47%,rgba(var(--inkr),.9) 56%,var(--ink) 100%)!important}}
.hero-foot .s{max-width:42ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em,.hero .hero-h em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em,.cta .big em{color:var(--vio)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--vio);border-color:var(--vio);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:var(--ink);border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
/* DN: statement left, stats stacked right */
.mani>.wrap{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,4fr);gap:clamp(40px,6vw,120px);align-items:center}
.mani .mani-in{margin:0;width:auto}
.mani .txt{font-size:clamp(28px,2.9vw,50px);max-width:26ch}
.mani .stats{margin-top:0;grid-template-columns:1fr;gap:30px}
.stat .v{font-size:clamp(46px,4.2vw,76px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
@media (max-width:960px){.mani>.wrap{grid-template-columns:1fr}.mani .stats{margin-top:64px}}
/* approach: their own photograph beside the four advantages */
.why{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start}
.why figure{margin:0;position:relative}
.why .fr{aspect-ratio:4/5;overflow:hidden;background:#e4e0ea}
.why img{width:100%;height:100%;object-fit:cover;object-position:50% 50%;display:block;transition:transform .8s var(--eo)}
.why figure:hover img{transform:scale(1.03)}
.why figcaption{margin-top:14px;font:400 11px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--stoneD)}
.adv{list-style:none;margin:0;padding:0}
.adv li{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);column-gap:var(--gap);padding:22px 0 24px;border-top:1px solid var(--hairD);position:relative}
.adv li:last-child{border-bottom:1px solid var(--hairD)}
.adv li::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--acc);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.adv li:hover::after{transform:scaleX(1)}
.adv h3{font-family:var(--disp);font-weight:300;font-size:clamp(21px,1.7vw,27px);line-height:1.2;letter-spacing:-.015em;margin:0}
.adv .lab{display:block;margin-bottom:10px;color:var(--vio)}
.adv p{margin:0;color:var(--stoneD);font-size:15.5px;line-height:1.6}
@media (max-width:1024px){.why{grid-template-columns:1fr}.why figure{max-width:520px}}
@media (max-width:620px){.adv li{grid-template-columns:1fr;row-gap:10px}}
/* products (programme rows) */
.prods{list-style:none;margin:0;padding:0}
.pr-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,2.8fr);column-gap:var(--gap);align-items:start;padding:20px 0 22px;border-top:1px solid var(--hair);position:relative}
.pr-row:last-child{border-bottom:1px solid var(--hair)}
.pr-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.pr-row:hover::after{transform:scaleX(1)}
.pr-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.6vw,44px);line-height:1;letter-spacing:-.03em;margin:0 0 10px}
.pr-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.pr-row p{margin:0;color:var(--stone);font-size:16px;max-width:54ch}
.pr-row .meta{display:flex;flex-direction:column;gap:8px}
.pr-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ink);background:var(--acc);padding:6px 8px 5px}
.pr-grp{margin:clamp(40px,4vw,64px) 0 14px;display:block}
.pr-grp:first-of-type{margin-top:0}
@media (max-width:1024px){.pr-row{grid-template-columns:1fr 1fr;row-gap:16px}.pr-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.pr-row{grid-template-columns:1fr}}
/* research: studies list + field work */
.rs{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(32px,5vw,96px);align-items:start}
.papers{list-style:none;margin:0;padding:0}
.papers li{padding:18px 0 20px;border-top:1px solid var(--hairD);position:relative}
.papers li:last-child{border-bottom:1px solid var(--hairD)}
.papers li::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--acc);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.papers li:hover::after{transform:scaleX(1)}
.papers h3{font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.25;letter-spacing:-.01em;margin:0 0 8px}
.papers .lab{color:var(--stoneD)}
.fw{border-top:1px solid var(--hairD);padding-top:22px}
.fw .lab{display:block;color:var(--vio);margin-bottom:14px}
.fw .big2{font-family:var(--disp);font-weight:300;font-size:clamp(54px,5vw,88px);line-height:1;letter-spacing:-.045em;display:block;margin-bottom:14px;color:var(--ink)}
.fw p{color:var(--stoneD);font-size:15.5px;line-height:1.6;margin:0 0 14px;max-width:44ch}
.fw .gait{margin:26px 0 0;aspect-ratio:16/9;overflow:hidden;background:#e4e0ea}
.fw .gait img{width:100%;height:100%;object-fit:cover;display:block}
@media (max-width:1024px){.rs{grid-template-columns:1fr}}
/* team intro */
.tm-in{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start;margin-bottom:clamp(44px,5vw,72px)}
.tm-in .who{border-top:1px solid var(--hair);padding-top:22px}
.tm-in .who h3{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.6vw,42px);line-height:1.05;letter-spacing:-.03em;margin:0 0 10px}
.tm-in .who .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:16px}
.tm-in .who p{color:var(--stone);font-size:16px;line-height:1.6;margin:0 0 12px;max-width:58ch}
.tm-in .side p{color:var(--stone);font-size:16px;line-height:1.6;max-width:40ch;margin:0 0 18px}
@media (max-width:1024px){.tm-in{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--vio)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("ifit-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M64 14a9 9 0 1 0 .1 0M10 62C26 50 40 42 52 40L78 46M46 44L32 80"/></svg>
    <div class="wm"><span>iFIT PROSTHETICS</span></div>
  </div>
  <span class="lab pl">Adjustable, immediate-fit prostheses · Wisconsin</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="iFIT Prosthetics, home"><img class="ifl" src="__LOGO__" alt="iFIT Prosthetics" width="298" height="100"></a>'

NAV = [("story", "Technology"), ("products", "Products"), ("research", "Research"), ("team", "Team")]
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
    <div><span class="lab">Office</span><br>Oconomowoc, Wisconsin</div>
    <div><span class="lab">Email</span><br>info@ifitprosthetics.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">iFIT Prosthetics</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="iFIT Prosthetics";\nvar PK="ifit";'

R["content"] = r'''var FONTS=['300 1em "Archivo"','400 1em "Archivo"','400 1em "Public Sans"','500 1em "Public Sans"','400 1em "IBM Plex Mono"'];
var MAIL="info@ifitprosthetics.com",TEL="267-567-3284";
var AWARD="https://reporter.nih.gov/project-details/11183394";
var SHEETS=[];var GROUPS=[];
var PEOPLE=[
 {name:"Liliana Pezzin, JD, PhD",title:"Chief Financial Officer",sum:""},
 {name:"Jim Marschalek, MS",title:"Lead Engineer",sum:"Advanced Design Concepts, iFIT’s engineering partner since the beginning."},
 {name:"Ingram Dillingham, BS",title:"Account Executive",sum:"Works with prosthetists on sizing and care plans."},
 {name:"Jessica Kenia, MS",title:"Lab Manager",sum:""},
 {name:"Sarah Spencer, BA",title:"Accounting",sum:""},
 {name:"Machele Brass, BFA",title:"Graphic Design / Art Director",sum:""}
];
var NEWS=[
 {d:"2026-09-17",s:"NIH · NICHD",t:"STTR Phase I: Advanced closure system for adjustable, subischial transfemoral sockets",u:AWARD},
 {d:"2025-06-11",s:"iFIT blog",t:"The iFIT system eliminates skin breakdown",u:"https://www.ifitprosthetics.com/blog.html"},
 {d:"2025-02-27",s:"iFIT blog",t:"Dr. Dillingham receives the 2025 AAP Distinguished Academician Award",u:"https://www.ifitprosthetics.com/blog.html"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function adv(){var D=[
  ["Fit in a single session","Immediate fit","Fitted and aligned on the patient’s limb in one visit with a few hand tools, with no casts, scans or moulds, so persons with limb loss do not wait weeks for a prosthesis."],
  ["Adjusted by the wearer","Volume management","A safety-locking buckle or cord closure lets the wearer adjust the socket any time, for daily volume changes such as those seen with kidney or heart disease."],
  ["Built to last, made to customise","Proven technology","Injection-moulded from proprietary materials, strength-tested to adapted ISO standards, waterproof, and customisable by heat moulding, cutting and padding."],
  ["A fraction of the cost","Affordable access","Highly consistent quality at a fraction of the cost of conventional devices: a preparatory, definitive or cost-effective secondary socket."]];
  return '<ul class="adv">'+D.map(function(d,i){return '<li><div><span class="lab">0'+(i+1)+' · '+esc(d[1])+'</span><h3>'+esc(d[0])+'</h3></div><p>'+esc(d[2])+'</p></li>'}).join("")+'</ul>'}
function prods(){var G=[["Transtibial",[
  ["TT200","Buckle closure · the original","The original immediate fit, fully adjustable transtibial prosthesis, with a safety-locking buckle system the user can adjust at any time.",["Narrow to Ultra Wide","Right- or left-handed"],0],
  ["TT250 · TT250W","Larger, longer limbs","Our largest adjustable, immediate fit device for persons with transtibial limb loss and a large limb, with maximum adjustability.",["Standard · Wide","Spool and buckle closure"],0],
  ["TTAC-S","Transtibial Advanced Closure","A sleek, lightweight socket with a high-strength cord closure for adjustment any time, anywhere; lower in profile to fit better under clothing.",["Short · Medium · Tall","Adults under 260 lb"],1],
  ["TTAC-N","Narrow and pediatric","For children, teens and adults with narrow limbs: adapts to children as they grow and can be used as a sports prosthesis.",["Medium · Tall","Children, teens, narrow limbs"],1]]],
 ["Transfemoral",[
  ["TF300","Subischial transfemoral","The industry’s first subischial design: a lower trim line for better sitting comfort, total contact for a stable gait, and adjustment without socks.",["Standard · Wide","Cable-and-hook or spool"],0],
  ["Pediatric TF","Transfemoral Advanced Closure","For pediatric and narrow limbs, in three lengths, tightened with an internal pulley mechanism.",["Three lengths","Internal pulley closure"],1]]]];
  return G.map(function(g){return '<span class="lab pr-grp">'+esc(g[0])+'</span><ul class="prods">'+g[1].map(function(a){return '<li class="pr-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">New</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'}).join("")}
function papers(){var P=[
  ["A prospective assessment of an adjustable, immediate fit, transtibial prosthesis","PM&R · 2019"],
  ["Improved self-reported comfort, stability, and limb temperature regulation with an immediate fit, adjustable transtibial prosthesis","Archives of Rehabilitation Research and Clinical Translation · 2020"],
  ["An immediate fit, adjustable, modular prosthetic system for addressing world-wide limb loss disability","Archives of Rehabilitation Research and Clinical Translation · 2021"],
  ["A prospective assessment of an adjustable, immediate fit, subischial transfemoral prosthesis","Archives of Rehabilitation Research and Clinical Translation · 2022"],
  ["Prospective intervention study using immediate-fit, adjustable prostheses for persons with lower limb loss in Botswana","American Journal of Physical Medicine & Rehabilitation · 2025"]];
  return '<ul class="papers">'+P.map(function(p){return '<li><h3>'+esc(p[0])+'</h3><span class="lab">'+esc(p[1])+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><ul class="mh-list">'+PEOPLE.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Adjustable, immediate-fit prostheses<span class="nomob"> · Wisconsin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The right fit,</span><span class="l"><em>right now.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Transtibial and transfemoral prostheses that are fit and aligned on the patient’s limb in a single session, then adjusted by the wearer as the limb changes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it fits '+ARR+'</a><a class="btn" href="#products" data-to="products">The sockets</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<p class="txt" id="mani">Technologically advanced, high quality, <em>affordable</em> prosthetic devices that enhance the lives of persons with amputations.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1</span><p class="k">Session to fit and align, with hand tools</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20</span><p class="k">Socket sizes, for a close fit right out of the box</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><p class="k">Issued US patents</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Immediate fit</span><h2 class="d3">Fit on the limb, <em>not from a cast.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Measure</span><span>Size</span><span>Fit</span><span>Adjust</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Measure the limb.</h2><p>The prosthetist records the patient’s weight, the distal one-third circumference and the limb length from the base of the patella.</p></article>'+
     '<article class="step"><h2>Choose from 20 sizes.</h2><p>A sizing chart selects the socket and the preferred closure. No casts, scans or moulds: the device arrives ready to fit.</p></article>'+
     '<article class="step"><h2>Fit and align in one session.</h2><p>The socket is customised, aligned and padded on the patient’s limb with a few hand tools, so the patient can walk out with a functional prosthesis.</p></article>'+
     '<article class="step"><h2>The wearer adjusts it.</h2><p>As limb volume changes through the day or during healing, the wearer tightens or loosens the buckle or cord closure, with no socks to add.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Why iFIT</span><h2 class="d2 split">A better socket, <em>sooner.</em></h2></div><p data-r>Hard, non-adjustable sockets are often uncomfortable. iFIT’s adjustable sockets are fit early and accommodate limb changes, so patients can start rehabilitation as soon as the surgical wounds have healed.</p></div>'+
   '<div class="why"><figure><div class="fr"><img src="__WEARER__" alt="A man wearing an iFIT transtibial prosthesis sits on stone steps" width="472" height="590" loading="lazy" decoding="async"></div><figcaption>An iFIT transtibial prosthesis in daily wear</figcaption></figure>'+
   adv()+'</div>'+
  '</div></section>'+
  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A full line, for adults <em>and children.</em></h2></div><p data-r>iFIT is the first and only company to develop and commercialise a full line of pediatric and adult adjustable, immediate-fit prostheses, sized and customised to the patient by the prosthetist.</p></div>'+
   prods()+
  '</div></section>'+
  '<section class="sec light" id="research" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Tested in clinical trials, <em>here and abroad.</em></h2></div><p data-r>Developed, tested, patented and commercialised through sustained NIH grant funding. Prospective trials have rated iFIT sockets highly for comfort, ease of fit, weight, usability and satisfaction.</p></div>'+
   '<div class="rs">'+papers()+
    '<div class="fw"><span class="lab">International care</span><span class="big2">120+</span><p>People fitted across Botswana, Zambia, Jamaica and other countries. In rural clinics, using only hand tools, patients were fit, trained and able to walk out the same day.</p><p>Fitting missions in Botswana (2021, 2023, 2024) and the Dominican Republic (2022).</p>'+
    '<div class="gait"><img src="__GAIT__" alt="A patient walks between parallel bars wearing an iFIT transtibial prosthesis" width="1200" height="633" loading="lazy" decoding="async"></div></div>'+
   '</div>'+
  '</div></section>'+
  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physician-led, <em>veteran-owned.</em></h2></div><p data-r>A U.S. veteran-owned business founded in 2010, making its products in Wisconsin with engineering partner Advanced Design Concepts.</p></div>'+
   '<div class="tm-in"><div class="side"><p>While directing the prosthetic and orthotic clinic at Johns Hopkins University, Dr. Dillingham saw how much time went into making a hard socket fit a changing limb. iFIT began with that problem.</p><a class="btn" href="'+AWARD+'" target="_blank" rel="noopener">The 2026 NIH award '+ARR+'</a></div>'+
    '<div class="who"><h3>Timothy R. Dillingham, MD, MS</h3><span class="cr">Founder · CEO and President</span>'+
     '<p>A board-certified rehabilitation physician who served in the U.S. Army during the Persian Gulf War and as an NIH investigator studying the needs of patients with limb loss. Recipient of the 2025 AAP Distinguished Academician Award and the 2022 AANEM Innovation Award.</p></div></div>'+
   team()+
   '<div class="shead" style="margin:clamp(72px,8vw,120px) 0 28px"><h2 class="d3 split">News</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For prosthetists, patients and partners</span>'+
   '<h2 class="big split">Get the <em>right fit.</em></h2>'+
   '<p class="sub" data-r>Prosthetists can buy direct from iFIT or through distributors Cascade, Empire and SPS. For custom sockets, international orders or questions, get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#products" data-to="products">See the sockets</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>1060 Corporate Center Dr,</span><br><span>Oconomowoc, WI 53066</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+12675673284">'+TEL+'</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>1060 Corporate Center Dr<br>Oconomowoc, WI 53066</div>'+
   '<div class="c"><span class="lab">Products</span>TT200 · TT250 · TTAC<br>TF300 · Pediatric TF</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#products" data-to="products">Products</a><br><a class="ul" href="#research" data-to="research">Research</a><br><a class="ul" href="#team" data-to="team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12675673284">'+TEL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.02em">iFIT PROSTHETICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 iFIT Prosthetics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"iFIT Prosthetics — Adjustable, immediate-fit prostheses",x:"Home"}}'''

R["field"] = (HERE / "ifitprosthetics.field.js").read_text()
R["story"] = (HERE / "ifitprosthetics.story.js").read_text()

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
out = out.replace("__WEARER__", b64("wearer.webp")).replace("__GAIT__", b64("gait.webp")).replace("__LOGO__", b64("logo.webp"))
left = [k for k in re.findall(r"<R:([a-z0-9]+)>", out) if k not in R]
if left:
    print("kept from firelight:", sorted(set(left)))
out = re.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)
(HERE / "ifitprosthetics.src.html").write_text(out)
print("wrote", HERE / "ifitprosthetics.src.html", len(out))
