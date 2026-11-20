#!/usr/bin/env python3
"""Assemble toomer-therapeutics.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run: python3 _kit/src/toomer-therapeutics.assemble.py && node _kit/build.js src/toomer-therapeutics.src.html ../toomer-therapeutics/index.html  (from _kit)
Facts: _kit/dossiers/toomer-therapeutics.md. Palette: the live toomertherapeutics.com (black wordmark, pale-blue triple-wave mark #a5cbea, nav band #c7d6f1)."""
import re, pathlib, base64
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
IMG = HERE.parent / "assets" / "toomer-therapeutics"
def b64(n): return "data:image/webp;base64," + base64.b64encode((IMG / n).read_bytes()).decode()
R = {}

R["meta"] = r'''<title>Toomer Therapeutics — Targeted therapies for aggressive solid cancers</title>
<meta name="description" content="Toomer Therapeutics, Mount Pleasant, South Carolina, develops first-in-class small molecule inhibitors of cancer-promoting E3 ubiquitin ligases, starting with ARIH1 in triple negative breast cancer, supported by an NCI STTR Phase I award.">
<meta name="theme-color" content="#0e1418">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230e1418'/%3E%3Cpath d='M10 22c7-6 15-6 22 0s15 6 22 0M10 33c7-6 15-6 22 0s15 6 22 0M10 44c7-6 15-6 22 0s15 6 22 0' fill='none' stroke='%23a5cbea' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Instrument Serif:400,400i; Figtree:400,500; DM Mono:400*/"

R["root"] = r''':root{
  --ink:#0e1418;--inkr:14,20,24;--boner:243,246,248;--accr:165,203,234;--ink2:#121a20;--ink3:#18222a;--deep:#0a0f12;
  --bone:#f3f6f8;--bone2:#e8eef2;--bone3:#d6e0e8;
  --stone:#a3afb8;--stoneD:#55626c;
  --acc:#a5cbea;--accL:#a5cbea;--accD:#2c6492;
  --hair:rgba(243,246,248,.14);--hairD:rgba(14,20,24,.16);
  --disp:'Instrument Serif',Georgia,'Times New Roman',serif;
  --serif:'Instrument Serif',Georgia,serif;
  --sans:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'DM Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#0b1016 0%,#2b3d50 22%,#8aa6c0 31%,#3a4535 36%,#121815 52%,#0e1418 100%)}
@media (min-width:861px){.fieldbg{background:linear-gradient(180deg,#0b1016 0%,#16212c 22%,#3a5068 38%,#8aa6c0 52%,#c9d6e6 60%,#4d5a52 63%,#2a3128 78%,#0e1418 100%)}}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.wv{width:34px;height:26px;flex:none;overflow:visible}
.brand svg.wv path{fill:none;stroke:var(--acc);stroke-width:2.2;stroke-linecap:round}
.brand .bt{display:flex;flex-direction:column;line-height:1}
.brand .bt b{font:400 21px/1 var(--sans);letter-spacing:.005em}
.brand .bt i{font:400 9.5px/1 var(--mono);font-style:normal;letter-spacing:.2em;text-transform:uppercase;color:var(--stone);margin-top:4px}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:13ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#98a2aa;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66717a;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(230px,31vh,310px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:400;font-size:clamp(28px,2.5vw,42px);line-height:1.08;letter-spacing:-.015em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene svg *{vector-effect:non-scaling-stroke}
.scene .pb{fill:rgba(var(--accr),.07);stroke:rgba(var(--boner),.72);stroke-width:1.3}
.scene .pc{fill:none;stroke:rgba(var(--boner),.17);stroke-width:1}
.scene .pd{fill:rgba(var(--boner),.28)}
.scene .e2 .pb{fill:rgba(var(--boner),.05)}
.scene .tg .pb{fill:rgba(var(--accr),.12);stroke:var(--accL)}
.scene .ub{fill:#0e1418;stroke:rgba(var(--boner),.8);stroke-width:1.2}
.scene .lnk{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.2}
.scene .inh{fill:rgba(var(--accr),.22);stroke:var(--accL);stroke-width:1.6}
.scene .inhl{fill:none;stroke:var(--accL);stroke-width:1.6}
.scene .halo{fill:none;stroke:var(--accL);stroke-width:1.2;stroke-dasharray:3 7}
.scene .frag{fill:rgba(var(--boner),.5)}
.scene .pth{fill:none;stroke:rgba(var(--boner),.28);stroke-width:1;stroke-dasharray:2 6}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c9d1d7;paint-order:stroke;stroke:#121a20;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.nm{font-family:var(--disp);font-size:30px;letter-spacing:0;fill:var(--bone)}
.scene text.nm.s{font-size:22px}
.scene text.cap{font-size:14px;fill:var(--accL)}
@media (max-width:1024px){.scene svg text{font-size:23px!important;letter-spacing:.06em!important}.scene svg text.nm{font-size:44px!important;letter-spacing:0!important}.scene svg text.nm.s{font-size:34px!important}}
/* ===== Toomer additions ===== */
.hero .hero-h{font-size:clamp(50px,6.6vw,124px);letter-spacing:-.02em;line-height:.98;font-weight:400}
@media (max-width:860px){.hero .hero-h{font-size:clamp(44px,12.4vw,84px)}.hero .hero-h .l{white-space:normal}}
.d1,.d2,.d3,.big,.mani .txt{font-weight:400}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:400;font-style:italic}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:#fff;border-color:var(--accD)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(54px,5.6vw,100px);font-weight:400}
.stat .v sup{color:var(--accL)}
/* technology: three principles */
.caps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:400;font-size:clamp(26px,2.2vw,36px);line-height:1.08;letter-spacing:-.01em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:34ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1024px){.caps{grid-template-columns:1fr;row-gap:44px}.cap p{max-width:52ch}}
/* programme (pipeline) */
.prog-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,5fr) minmax(0,3fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);border-bottom:1px solid var(--hair);position:relative}
.prog-row::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prog-row:hover::after{transform:scaleX(1)}
.prog-row h3{font-family:var(--disp);font-weight:400;font-size:clamp(36px,3.4vw,58px);line-height:1;letter-spacing:-.015em;margin:0}
.prog-row h3 em{color:var(--accL)}
.prog-row p{margin:0;color:var(--stone);font-size:16px;max-width:52ch}
.prog-row .lab{display:block}
.prog-row .meta{display:flex;flex-direction:column;gap:8px}
.stages{list-style:none;margin:clamp(40px,4.6vw,64px) 0 0;padding:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));position:relative}
.stages::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.stages .fill{position:absolute;left:0;top:4px;height:1px;width:70%;background:var(--accL);transform-origin:left}
.stages li{position:relative;padding:22px 16px 0 0;font-size:14.5px;line-height:1.45;color:var(--stone)}
.stages li::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;background:var(--ink2);border:1px solid #66717a}
.stages li.done::before,.stages li.now::before{background:var(--accL);border-color:var(--accL)}
.stages li.now::after{content:"";position:absolute;left:-5px;top:-5px;width:19px;height:19px;border:1px solid var(--accL);opacity:.5;animation:ttPulse 2.4s var(--eo) infinite}
@keyframes ttPulse{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.5);opacity:0}}
.stages b{display:block;font:400 10.5px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--bone);margin-bottom:6px}
.stages li.next b{color:var(--stone)}
.bench{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:var(--gap);margin-top:clamp(56px,6vw,96px)}
.bench dl{margin:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:var(--gap)}
.bench dl>div{padding:18px 0 20px;border-top:1px solid var(--hair)}
.bench dt{margin-bottom:6px}
.bench dd{margin:0;font-family:var(--disp);font-weight:400;font-size:clamp(21px,1.7vw,26px);line-height:1.28;letter-spacing:-.005em}
.bench .note-s{margin-top:18px}
@media (max-width:1024px){.prog-row{grid-template-columns:1fr 1fr;row-gap:18px}.prog-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}.bench{grid-template-columns:1fr}}
@media (max-width:860px){.stages{grid-template-columns:1fr;row-gap:0}.stages::before{left:4px;right:auto;top:0;bottom:0;width:1px;height:auto}.stages .fill{left:4px;width:1px;height:70%;top:0}.stages li{padding:0 0 22px 30px}.prog-row{grid-template-columns:1fr}}
@media (max-width:560px){.bench dl{grid-template-columns:1fr}}
/* team: two founders, uniform 4:5 portraits (CI) */
.fnd{list-style:none;margin:0 auto;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(28px,4vw,72px);max-width:1120px}
.fnd li{position:relative;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(18px,2vw,30px);align-items:end}
.fnd figure{margin:0;aspect-ratio:4/5;overflow:hidden;background:#dfe6ec}
.fnd img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(1) contrast(1.02) brightness(.98);transition:filter .35s var(--eo),transform .6s var(--eo)}
.fnd li:hover img{filter:grayscale(0);transform:scale(1.025)}
.fnd .tx{border-top:1px solid var(--hair);padding-top:18px;position:relative}
.fnd .tx::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.fnd li:hover .tx::before{transform:scaleX(1)}
.fnd h3{font-family:var(--disp);font-weight:400;font-size:clamp(26px,2.3vw,36px);line-height:1.05;letter-spacing:-.01em;margin:0 0 10px}
.fnd .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:12px}
.fnd p{color:var(--stone);font-size:15px;line-height:1.55;margin:0}
.light .fnd .tx{border-top-color:var(--hairD)}
.light .fnd .tx::before{background:var(--accD)}
.light .fnd .cr{color:var(--accD)}
.light .fnd p{color:var(--stoneD)}
@media (max-width:860px){.fnd{grid-template-columns:1fr;row-gap:44px}}
@media (max-width:420px){.fnd li{grid-template-columns:minmax(0,1fr) minmax(0,1.25fr)}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:400;font-size:clamp(21px,1.7vw,26px);line-height:1.3;letter-spacing:-.005em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
.lede-s{max-width:60ch}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("tmr-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

WAVES = '<path d="M2 6c5-4.5 10-4.5 15 0s10 4.5 15 0"/><path d="M2 13c5-4.5 10-4.5 15 0s10 4.5 15 0"/><path d="M2 20c5-4.5 10-4.5 15 0s10 4.5 15 0"/>'

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M14 34c11-10 23-10 34 0s23 10 34 0"/><path d="M14 50c11-10 23-10 34 0s23 10 34 0"/><path d="M14 66c11-10 23-10 34 0s23 10 34 0"/></svg>
    <div class="wm"><span>TOOMER THERAPEUTICS</span></div>
  </div>
  <span class="lab pl">Oncology · Mount Pleasant, South Carolina</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Toomer Therapeutics, home"><svg class="wv" viewBox="0 0 34 26" aria-hidden="true">' + WAVES + '</svg><span class="bt"><b>Toomer</b><i>Therapeutics</i></span></a>'

NAV = [("story", "Technology"), ("pipeline", "Pipeline"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Office</span><br>Mount Pleasant, South Carolina</div>
    <div><span class="lab">Email</span><br>toomertherapeutics@outlook.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Toomer Therapeutics</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Toomer Therapeutics";\nvar PK="tmr";'

R["content"] = r'''var FONTS=['400 1em "Instrument Serif"','italic 400 1em "Instrument Serif"','400 1em "Figtree"','500 1em "Figtree"','400 1em "DM Mono"'];
var MAIL="toomertherapeutics@outlook.com";
var GRANT="https://reporter.nih.gov/project-details/11312958";
var PAPER="https://pmc.ncbi.nlm.nih.gov/articles/PMC8933277/";
/* founders: names as on toomertherapeutics.com ("Meet our Founders"); portraits are theirs, from the same page */
var PEOPLE=[
 {name:"Dr. Breege Howley",title:"Co-founder",line:"Department of Biochemistry and Molecular Biology, Medical University of South Carolina. First author of the 2022 Oncogene study of ARIH1 in breast cancer; principal investigator on the NCI STTR award.",img:"__HOWLEY__"},
 {name:"Dr. Philip Howe",title:"Co-founder",line:"Chair of the Department of Biochemistry and Molecular Biology, Medical University of South Carolina. Contact principal investigator on the NCI STTR award.",img:"__HOWE__"}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2026-09-02",s:"NIH RePORTER",t:"National Cancer Institute awards Toomer Therapeutics an STTR Phase I grant to develop ARIH1 inhibitors as a novel targeted therapy in cancer",u:GRANT},
 {d:"2022-01-31",s:"Oncogene",t:"The ubiquitin E3 ligase ARIH1 regulates hnRNP E1 protein stability, EMT and breast cancer progression",u:PAPER}
];'''

R["views"] = r'''/* ================= VIEWS (home only: nav items scroll to sections) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["Inhibition of specific E3 ubiquitin ligases","Developing small molecule inhibitors that specifically disrupt the interaction between an E3 ligase and its E2 enzyme to inhibit E3 function.",'<circle cx="20" cy="30" r="15"/><circle cx="42" cy="18" r="9"/><path class="a" d="M30 16l8 8M38 16l-8 8"/>'],
  ["Selectivity","Utilizing structural biology to specifically target E3–E2 interactions, minimizing off-target effects across the ubiquitin proteasome system.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="11"/><circle class="a" cx="28" cy="28" r="3"/><path d="M28 2v10M28 44v10M2 28h10M44 28h10"/>'],
  ["Clinical value","Translating mechanistically unique inhibitors into clinical candidates that can provide durable responses in aggressive solid cancers such as triple negative breast cancer.",'<path d="M4 48H52"/><path d="M8 48V38M20 48V30M32 48V22"/><path class="a" d="M44 48V8M38 14l6-6 6 6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function fnd(){return '<ul class="fnd">'+PEOPLE.map(function(p){return '<li><figure><img src="'+p.img+'" alt="'+esc(p.name)+'" width="560" height="700" loading="lazy" decoding="async"></figure><div class="tx"><h3>'+esc(p.name)+'</h3><span class="cr">'+esc(p.title)+'</span><p>'+esc(p.line)+'</p></div></li>'}).join("")+'</ul>'}
function stages(){var S=[["Target biology","ARIH1 shown to regulate hnRNP E1, EMT and breast cancer progression","done"],["Hit discovery","Small molecule ARIH1 inhibitors found by molecular docking; lead compound A3","done"],["Lead optimization","Optimization and ADME-PK toward a more drug-like compound","now"],["Efficacy","Lead compounds with chemotherapy in a mouse model of TNBC","now"],["Next","IND-enabling studies, the focus of a planned STTR Phase II","next"]];
  return '<ol class="stages" aria-label="ARIH1 programme stages"><i class="fill" aria-hidden="true"></i>'+S.map(function(s){return '<li class="'+s[2]+'"><b>'+s[0]+'</b>'+s[1]+'</li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Oncology · Mount Pleasant, South Carolina<span class="nomob"> · The ubiquitin system</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Targeted therapies</span><span class="l">for aggressive</span><span class="l">solid <em>cancers.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Advancing first-in-class therapies that harness the ubiquitin system: small molecule inhibitors of cancer-promoting E3 ligases, beginning with ARIH1 in triple negative breast cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">Our technology '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Pipeline</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<p class="txt" id="mani">Toomer Therapeutics is dedicated to improving cancer patient outcomes through the development of novel small molecule inhibitors that target cancer-promoting <em>E3 ubiquitin ligases.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$400K</span><span class="k">NCI STTR Phase I award to develop ARIH1 inhibitors, September 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">E3–E2</span><span class="k">The protein interface our inhibitors are designed to disrupt</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">TNBC</span><span class="k">First indication: triple negative breast cancer</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · ARIH1</span><h2 class="d3">Switching off a cancer’s <em>tagging machine.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tagging</span><span>ARIH1</span><span>Inhibit</span><span>Spared</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The ubiquitin system.</h2><p>Cells mark proteins for destruction with ubiquitin. An E2 enzyme carries the ubiquitin and hands it to an E3 ligase, which decides which protein gets tagged.</p></article>'+
     '<article class="step"><h2>ARIH1, an E3 that drives TNBC.</h2><p>ARIH1 levels are higher in triple negative breast cancer than in normal tissue, and high levels are associated with reduced survival. ARIH1 lowers hnRNP E1, and silencing it inhibits EMT and cancer stemness.</p></article>'+
     '<article class="step"><h2>Block the E3–E2 handshake.</h2><p>Toomer develops small molecules that specifically disrupt the interaction between an E3 ligase and its E2 enzyme, guided by structural biology to spare the rest of the ubiquitin proteasome system.</p></article>'+
     '<article class="step"><h2>The protein is spared.</h2><p>Hit compounds and derivatives of the lead compound A3 inhibit ARIH1 ubiquitination in vitro and, like ARIH1 silencing, inhibit cancer stemness and increase chemotherapy sensitivity.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Inhibitors for the ligases cancer <em>depends on.</em></h2></div><p data-r>E3 ubiquitin ligases decide which proteins a cell destroys. Toomer targets the cancer-promoting ones, with first-in-class inhibitors built for selectivity and clinical value.</p></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">ARIH1 inhibitors for <em>TNBC.</em></h2></div><p data-r>Anthracycline, alkylator and taxane-based chemotherapy is the standard of care in metastatic triple negative breast cancer, and too many patients relapse. ARIH1 inhibitors are designed as a targeted therapy to change that.</p></div>'+
   '<div class="prog-row"><div><span class="lab" style="margin-bottom:12px">Programme 01</span><h3>ARIH1 <em>inhibitors</em></h3></div>'+
    '<p>Small molecule inhibitors of the E3 ubiquitin ligase ARIH1, developed as a novel targeted therapy in triple negative breast cancer and other cancers, alone and in combination with chemotherapy.</p>'+
    '<div class="meta"><span class="lab">Indication · TNBC</span><span class="lab">Stage · Preclinical</span><span class="lab">Funding · NCI STTR Phase I</span></div></div>'+
   stages()+
   '<div class="bench"><div><span class="lab kick" data-r>Why ARIH1</span><p class="muted" data-r style="max-width:34ch">What the founders’ research has shown about ARIH1 in breast cancer.</p></div>'+
    '<div><dl>'+
     '<div><dt class="lab">In TNBC tissue</dt><dd>ARIH1 levels are higher than in normal tissue</dd></div>'+
     '<div><dt class="lab">In patients</dt><dd>High ARIH1 is associated with reduced relapse-free and overall survival</dd></div>'+
     '<div><dt class="lab">When silenced</dt><dd>EMT and cancer stemness are inhibited, and tumour progression is blocked in mouse models</dd></div>'+
     '<div><dt class="lab">With chemotherapy</dt><dd>ARIH1-silenced TNBC cells are more sensitive to commonly used chemotherapeutics</dd></div>'+
    '</dl><p class="note-s">NCI STTR Phase I award 1R41CA302048-01A1, “Development of ARIH1 inhibitors as a novel targeted therapy in cancer”, September 2026 to August 2027.</p></div></div>'+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Meet our <em>founders.</em></h2></div><p data-r>Toomer Therapeutics was founded by the scientists whose research at the Medical University of South Carolina linked ARIH1 to breast cancer progression.</p></div>'+
   fnd()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><h2 class="d3 split">News and publications</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For partners, investors and collaborators</span>'+
   '<h2 class="big split">Talk to <em>Toomer.</em></h2>'+
   '<p class="sub" data-r>Interested in ARIH1, E3 ligase inhibition or triple negative breast cancer? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#team" data-to="team">Meet the founders</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>Mount Pleasant,</span><br><span>South Carolina</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Funding</span><p>National Cancer Institute, STTR Phase I</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Mount Pleasant,<br>South Carolina</div>'+
   '<div class="c"><span class="lab">Programme</span>ARIH1 inhibitors, for TNBC<br>NCI STTR 1R41CA302048</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Instrument Serif\',Georgia,serif;font-weight:400;font-size:46px;letter-spacing:.02em">TOOMER THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Toomer Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Toomer Therapeutics — Targeted therapies for aggressive solid cancers",x:"Home"}}'''

R["field"] = (HERE / "toomer-therapeutics.field.js").read_text()
R["story"] = (HERE / "toomer-therapeutics.story.js").read_text()

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
out = out.replace("__HOWLEY__", b64("howley.webp")).replace("__HOWE__", b64("howe.webp"))
left = [k for k in re.findall(r"<R:([a-z0-9]+)>", out) if k not in R]
if left:
    print("kept from firelight:", sorted(set(left)))
import re as _bo; out = _bo.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update 1: nav items open build-out pages (_kit/lib/buildout.js)
(HERE / "toomer-therapeutics.src.html").write_text(out)
print("wrote", HERE / "toomer-therapeutics.src.html", len(out))
