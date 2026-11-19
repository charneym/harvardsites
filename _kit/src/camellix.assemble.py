#!/usr/bin/env python3
"""Assemble camellix.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run: python3 _kit/src/camellix.assemble.py && node _kit/build.js src/camellix.src.html camellix/index.html"""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Camellix — The science of green tea, for health</title>
<meta name="description" content="Camellix, LLC (Evans, Georgia) develops EC16, a naturally formed green tea catechin nanoparticle made from food-grade ingredients, against infectious and oral disease, with NIH support and the Dental College of Georgia at Augusta University.">
<meta name="theme-color" content="#0d1611">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230d1611'/%3E%3Cpath d='M32 56C30 44 31 32 32 14M32 34C22 32 14 24 13 14C24 14 31 22 32 34M32 28C40 26 48 19 50 9C40 10 33 17 32 28' fill='none' stroke='%2378ca16' stroke-width='3.4' stroke-linejoin='round'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Fraunces:300,300i; Manrope:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0d1611;--inkr:13,22,17;--boner:243,243,236;--accr:120,202,22;--ink2:#111c15;--ink3:#18241c;--deep:#08100b;
  --bone:#f3f3ec;--bone2:#e9eae0;--bone3:#d9dbcd;
  --stone:#a3a99f;--stoneD:#59605a;
  --acc:#047832;--accL:#8fd43a;--accD:#047832;
  --hair:rgba(243,243,236,.14);--hairD:rgba(13,22,17,.16);
  --disp:'Fraunces',Georgia,'Times New Roman',serif;
  --serif:'Fraunces',Georgia,serif;
  --sans:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#0b1410 0%,#17241b 30%,#0d1611 60%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:10px;height:56px;color:var(--bone)}
.brand svg.sprig{width:30px;height:38px;flex:none;overflow:visible}
.brand svg.sprig path{fill:none;stroke:currentColor;stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}
.brand svg.sprig .a{stroke:var(--accL)}
.brand .bt{font:italic 300 27px/1 var(--disp);letter-spacing:-.01em;white-space:nowrap}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:13ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#98a097;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66705f;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(230px,31vh,310px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.025em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene svg *{vector-effect:non-scaling-stroke}
.scene .lf{fill:url(#cxLeaf);stroke:rgba(var(--boner),.7);stroke-width:1.3}
.scene .vn{fill:none;stroke:rgba(var(--boner),.32);stroke-width:1}
.scene .mr{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.2}
.scene .hat{fill:none;stroke:rgba(var(--boner),.08);stroke-width:1}
.scene .lens{fill:#0b140e;stroke:rgba(var(--boner),.7);stroke-width:1.3}
.scene .lensw{fill:rgba(var(--accr),.04)}
.scene .foc{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .ld{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .cw{fill:rgba(var(--boner),.025);stroke:rgba(var(--boner),.36);stroke-width:1}
.scene .cat{fill:var(--accL)}
.scene .bd{fill:none;stroke:rgba(var(--boner),.78);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}
.scene .bdi{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .oh{fill:var(--ink2);stroke:rgba(var(--boner),.6);stroke-width:1.1}
.scene .tail{fill:none;stroke:var(--accL);stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}
.scene .hd{fill:rgba(var(--boner),.85)}
.scene .mt{fill:none;stroke:var(--accL);stroke-width:1.2;stroke-linejoin:round}
.scene .np{fill:rgba(var(--accr),.16);stroke:var(--accL);stroke-width:1.2}
.scene .vir{fill:rgba(28,136,201,.22);stroke:#59aee0;stroke-width:1.2}
.scene .sp{fill:none;stroke:#59aee0;stroke-width:1.2;stroke-linecap:round}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c4c9bf}
.scene text.a{fill:var(--accL)}
/* ===== Camellix additions ===== */
.hero .hero-h{font-size:clamp(46px,6.1vw,112px);letter-spacing:-.035em;line-height:1}
@media (max-width:860px){.hero .hero-h{font-size:clamp(40px,11.4vw,80px)}.hero .hero-h .l{white-space:normal}}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:300}
.d1 em,.d2 em,.d3 em,.mani .txt em{color:var(--accL)}
.light .d2 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--bone)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:#fff;border-color:var(--accD)}
.stat .v{font-size:clamp(54px,5.6vw,100px)}
.stat .v sup,.stat .v small{color:var(--accL)}
.stat .v small{font-size:.42em;letter-spacing:0;margin-left:.08em}
/* approach: four principles */
.caps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1;stroke-linejoin:round;stroke-linecap:round}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2vw,32px);line-height:1.1;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:30ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1024px){.caps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:48px}}
@media (max-width:560px){.caps{grid-template-columns:1fr;row-gap:40px}}
/* programmes */
.progs{list-style:none;margin:0;padding:0;border-bottom:1px solid var(--hair)}
.prog-row{display:grid;grid-template-columns:minmax(0,.5fr) minmax(0,3.4fr) minmax(0,4.6fr) minmax(0,3fr);column-gap:var(--gap);align-items:start;padding:26px 0 28px;border-top:1px solid var(--hair);position:relative}
.prog-row::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prog-row:hover::before{transform:scaleX(1)}
.prog-row .n{padding-top:8px}
.prog-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.06;letter-spacing:-.025em;margin:0;transition:color .3s var(--eo)}
.prog-row:hover h3{color:var(--accL)}
.prog-row h3 small{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--stone);margin-top:10px}
.prog-row p{margin:0;color:var(--stone);font-size:16px;max-width:52ch;padding-top:4px}
.prog-row .meta{display:flex;flex-direction:column;gap:8px;padding-top:6px}
.prog-row .meta .lab:first-child{color:var(--accL)}
.mkt{margin-top:clamp(48px,5vw,80px);text-align:center}
.mkt .lab{display:block;margin-bottom:16px}
.mkt p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.8vw,28px);line-height:1.5;letter-spacing:-.01em;display:flex;flex-wrap:wrap;justify-content:center;gap:4px 34px}
.mkt p span small{font:400 10.5px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--stone);margin-left:10px}
@media (max-width:1024px){.prog-row{grid-template-columns:minmax(0,.6fr) minmax(0,5fr);row-gap:14px}.prog-row p,.prog-row .meta{grid-column:2}.prog-row .meta{flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:560px){.prog-row{grid-template-columns:1fr}.prog-row p,.prog-row .meta{grid-column:1}.prog-row .n{padding-top:0}}
/* team: refined text cards (two people; no portraits used) */
.ppl{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--gap)}
.ppl li{position:relative;border-top:1px solid var(--hair);padding:26px 0 8px;display:flex;flex-direction:column}
.ppl li::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.ppl li:hover::before{transform:scaleX(1)}
.ppl .lab{display:block;margin-bottom:18px}
.ppl h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,46px);line-height:1.06;letter-spacing:-.025em;margin:0 0 12px}
.ppl .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:16px}
.ppl p{color:var(--stone);font-size:15.5px;margin:0 0 12px;max-width:48ch}
@media (max-width:860px){.ppl{grid-template-columns:1fr;row-gap:34px}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.6vw,25px);line-height:1.35;letter-spacing:-.015em}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
.lede-s{max-width:60ch}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("cmx-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

SPRIG = '<path d="M15 37C14 28 14.5 20 15 9"/><path d="M15 24C8 23 3 18 2 11C9 11 14 16 15 24Z"/><path d="M15 19C21 18 27 13 28 6C21 6 16 11 15 19Z"/><path class="a" d="M15 9C13 6 13.5 3 15 1C16.5 3 17 6 15 9Z"/>'

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M48 92C46 72 46.5 52 48 26M48 62C30 60 16 48 14 30C32 30 46 42 48 62M48 50C64 48 78 36 82 18C64 18 50 30 48 50M48 26C44 20 44.5 12 48 6C51.5 12 52 20 48 26"/></svg>
    <div class="wm"><span>CAMELLIX</span></div>
  </div>
  <span class="lab pl">Green tea technology · Evans, Georgia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Camellix, home"><svg class="sprig" viewBox="0 0 30 38" aria-hidden="true">' + SPRIG + '</svg><span class="bt">Camellix</span></a>'

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
    <div><span class="lab">Office</span><br>Evans, Georgia</div>
    <div><span class="lab">Email</span><br>customerservice@camellix.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Camellix</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Camellix";\nvar PK="cmx";'

R["content"] = r'''var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Manrope"','500 1em "Manrope"','400 1em "IBM Plex Mono"'];
var MAIL="customerservice@camellix.com";
var TEL="706-294-9801";
var GRANT="https://reporter.nih.gov/project-details/11404985";
/* people: Stephen Hsu from camellix.com (Our Founder); Douglas P. Dickinson's title from NIH RePORTER (R41AG102092) */
var PEOPLE=[
 {name:"Stephen Hsu, PhD",title:"Founder and CEO",lines:["Professor of Oral Biology and Oral Health & Diagnostic Sciences at the Dental College of Georgia at Augusta University, and contact principal investigator on Camellix’s NIH awards.","PhD in Cellular Biology and Anatomy from the University of Cincinnati College of Medicine; four years as a research fellow at Memorial Sloan-Kettering Cancer Center. His TED talk, “Success through Hardship”, tells how tea leaves helped him survive a labour camp."]},
 {name:"Douglas P. Dickinson",title:"Vice President for Research",lines:["Principal investigator, with Dr. Hsu, on the 2026 NIH/NIA STTR award for EC16 nanoparticles in oral health and Alzheimer’s prevention."]}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2026-09-18",s:"NIH RePORTER",t:"NIA awards Camellix an STTR Phase I grant: EC16 nanoparticles, bridging oral health and Alzheimer’s prevention",u:GRANT},
 {d:"2026-05-13",s:"Preprints.org",t:"Orally administered EC16 nanoparticles attenuate periodontitis and cross the blood–brain barrier: a pilot murine model study",u:"https://doi.org/10.20944/preprints202603.2528.v2"},
 {d:"2024-09-01",s:"Dentistry Review",t:"EC16 nanoformulation: a potential nasal drug for treating Long COVID",u:"https://doi.org/10.1016/j.dentre.2024.100108"}
];'''

R["views"] = r'''/* ================= VIEWS (home only: nav items scroll to sections) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["Natural compounds","Products built from natural compounds, on scientific and clinical research, effective and easy to use, without toxic ingredients.",'<path d="M28 52C27 40 27.5 28 28 10"/><path d="M28 36C17 35 9 28 8 17C19 17 27 25 28 36Z"/><path class="a" d="M28 28C38 27 46 20 48 9C37 9 29 17 28 28Z"/>'],
  ["Research-led","Associated with the Dental College of Georgia at Augusta University, and supported by NIH since 2017.",'<path d="M21 6H35M24 6V22L10 46C8 50 10 52 14 52H42C46 52 48 50 46 46L32 22V6"/><path class="a" d="M15 38H41"/><circle class="a" cx="25" cy="44" r="2"/><circle class="a" cx="33" cy="42" r="1.5"/>'],
  ["Clinicians behind every product","Cutting-edge technology combined with the expertise of the medical and dental professionals behind every product.",'<path d="M16 8C9 8 6 14 7 22C8 30 11 34 13 44C14 50 19 50 20 44L23 32C24 29 32 29 33 32L36 44C37 50 42 50 43 44C45 34 48 30 49 22C50 14 47 8 40 8C34 8 32 11 28 11C24 11 22 8 16 8Z"/><path class="a" d="M20 16C24 18 32 18 36 16"/>'],
  ["Patented, made in the USA","Every Camellix brand uses U.S.-patented green tea technology and is manufactured in the USA.",'<path d="M28 4L48 12V28C48 40 39 49 28 53C17 49 8 40 8 28V12Z"/><path class="a" d="M18 28L25 35L39 20"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function ppl(){return '<ul class="ppl">'+PEOPLE.map(function(p,i){return '<li><span class="lab">0'+(i+1)+'</span><h3>'+esc(p.name)+'</h3><span class="cr">'+esc(p.title)+'</span>'+p.lines.map(function(l){return '<p>'+esc(l)+'</p>'}).join("")+'</li>'}).join("")+'</ul>'}
var PROGS=[
 ["EC16 nanoparticle oral formula","Oral health · Alzheimer’s","A food-grade oral formula of EC16, water and glycerol, to prevent periodontal disease and the neuroinflammation linked to it. In a mouse periodontitis model it cut the P. gingivalis load to baseline and markedly reduced bone loss.",["Preclinical","NIH/NIA STTR Phase I, 2026–27","With the Dental College of Georgia"]],
 ["F18D nasal formulation","Long COVID","A saline-based nasal formulation for Long-COVID neurologic symptoms such as loss of smell, drawing on EC16’s antiviral, antioxidant, anti-inflammatory and neuroprotective properties.",["Preclinical","NIH-funded (NIDCD STTR)"]],
 ["Spore-active hand hygiene","C. difficile","Hand hygiene products against pathogenic bacterial spores such as C. difficile, for which there is currently no effective hand hygiene product.",["Development","NIH-funded (NIAID STTR)"]],
 ["PST70 surface spray","Norovirus · coronavirus","A surface disinfectant with EC16 that kills 99.9999% of norovirus in one minute, made only from ingredients of three popular beverages, plus water.",["Coming soon","EPA registration 95158-1"]],
 ["AverTeaX Nano","Cold sores · shingles","A topical EC16 nanoformulation against herpes simplex. In a phase II trial it halved episode duration and cut the blister and ulceration stage from three days to one; a clinical study saw similar effects on shingles.",["Phase II clinical","Herpes labialis"]]
];
function progs(){return '<ul class="progs">'+PROGS.map(function(p,i){return '<li class="prog-row"><span class="lab n">0'+(i+1)+'</span><h3>'+esc(p[0])+'<small>'+esc(p[1])+'</small></h3><p>'+esc(p[2])+'</p><div class="meta">'+p[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Green tea technology · Evans, Georgia<span class="nomob"> · EC16 nanoparticles</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The science</span><span class="l">of green tea,</span><span class="l">for <em>health.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Camellix turns green tea catechins into natural, clinically tested products, and into EC16, a naturally formed nanoparticle made from 100% food-grade ingredients, against infectious and oral disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">The technology '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Pipeline</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Camellix</span>'+
   '<p class="txt" id="mani">We study the many effects of green tea catechins, above all EC16, a naturally formed nanoparticle, to fill the gaps in the prevention and control of <em>infectious disease.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">99.9999<small>%</small></span><span class="k">Reduction in human coronavirus infectivity in one minute, F18D nanoformulation</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$500K</span><span class="k">NIH/NIA STTR Phase I award for EC16 nanoparticles ($499,999), September 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3→1</span><span class="k">Days in the cold sore blister and ulceration stage, phase II trial of AverTeaX Nano</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · EC16</span><h2 class="d3">From the tea leaf to a <em>nanoparticle.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Leaf</span><span>EC16</span><span>Assembly</span><span>Action</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It starts in the tea leaf.</h2><p>Green tea leaves hold unique compounds called catechins, or green tea polyphenols. The most abundant is EGCG, with antioxidant, anti-inflammatory and antimicrobial effects.</p></article>'+
     '<article class="step"><h2>EGCG, made stable: EC16.</h2><p>Camellix naturally modifies green tea polyphenols. EC16 is EGCG-palmitate: the catechin joined to a fatty acid, which gives it chemical stability and helps carry its activity into epithelial cells.</p></article>'+
     '<article class="step"><h2>A nanoparticle that assembles itself.</h2><p>With Facilitated Self-Assembling Technology (FAST, patent pending), EC16 forms nanoparticles naturally. The oral formula is simply EC16, water and glycerol: 100% food-grade.</p></article>'+
     '<article class="step"><h2>Fast against pathogens.</h2><p>In Camellix’s data, the F18D nanoformulation reduced human coronavirus infectivity by 99.9999% in one minute, and the PST70 spray with EC16 kills 99.9999% of norovirus in one minute.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we do</span><h2 class="d2 split">Natural compounds, <em>proven in the clinic.</em></h2></div><p data-r>Camellix develops and markets products from natural compounds, based on scientific and clinical research, with high efficacy and without side effects or environmental pollutants.</p></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One nanoparticle, <em>many fronts.</em></h2></div><p data-r>EC16 programmes against SARS-CoV-2, C. difficile spores, norovirus, herpes simplex and varicella-zoster, and now periodontal disease, with NIH support.</p></div>'+
   progs()+
   '<div class="mkt"><span class="lab" data-r>On the market today</span><p data-r><span>MighTeaFlow®<small>Dry mouth</small></span><span>AverTeaX®<small>Cold sores</small></span><span>ProtecTeaV™<small>Viral prevention</small></span><span>ReviTeaLize®<small>Hair care</small></span></p></div>'+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The scientists behind <em>Camellix.</em></h2></div><p data-r>Scientists and healthcare professionals using patented green tea technology to promote better health and improve quality of life.</p></div>'+
   ppl()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><h2 class="d3 split">Latest news</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For partners, clinicians and investors</span>'+
   '<h2 class="big split">Work with <em>Camellix.</em></h2>'+
   '<p class="sub" data-r>Developing, testing or distributing green tea technology? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Camellix '+ARR+'</a><a class="btn" href="tel:+17062949801">'+TEL+'</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>Camellix, LLC</span><br><span>Evans, Georgia</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+17062949801">'+TEL+'</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Camellix, LLC<br>Evans, Georgia</div>'+
   '<div class="c"><span class="lab">Research</span>With the Dental College of Georgia<br>at Augusta University</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+17062949801">'+TEL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:Fraunces,Georgia,serif;font-weight:300;font-size:46px;letter-spacing:.06em">CAMELLIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Camellix, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Camellix — The science of green tea, for health",x:"Home"}}'''

R["field"] = r'''/* ================= HERO FIELD: a tea garden at first light. Camellix takes its name from Camellia sinensis, the tea
   plant. A tea branch in the foreground (glossy serrated leaves, "two leaves and a bud" at the tip, one white tea flower),
   clipped tea rows curving across the slope below, hills in mist under a low sun. The branch sways on its own, with no
   pointer response (CZ). The background and the branch are pre-rendered once; each frame only composites them. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBg=null,BR=null,MO=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.8):h,hz=mob?U*.42:h*.42;
    var S=mob?U*1.05:Math.min(h*1.02,cw*.62);
    var bx=mob?w*.7:side+cw*.8,by=mob?U*1.02:h*1.02;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,bx:bx,by:by,ground:mob?U:h};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* one tea leaf along +x from (0,0): elliptic, pointed, finely serrated, glossy */
  function leaf(g,x,y,a,L,W,tone,rnd,young){
    g.save();g.translate(x,y);g.rotate(a);
    var up=[],dn=[],N=64,teeth=young?18:26;
    for(var i=0;i<=N;i++){var u=i/N,env=Math.pow(Math.sin(Math.PI*Math.pow(u,.85)),.9)*(1-.18*u),saw=(u>.08&&u<.96)?(.035*((u*teeth)%1)):0,hw=W*(env+saw*env);
      var cx=u*L,bend=Math.sin(Math.PI*u)*W*.12;up.push([cx,-hw+bend]);dn.push([cx,hw*.92+bend])}
    g.beginPath();g.moveTo(0,0);for(var k=0;k<up.length;k++)g.lineTo(up[k][0],up[k][1]);for(k=dn.length-1;k>=0;k--)g.lineTo(dn[k][0],dn[k][1]);g.closePath();
    var gr=g.createLinearGradient(0,-W,0,W);
    if(young){gr.addColorStop(0,"#b7d36a");gr.addColorStop(.5,"#8fb349");gr.addColorStop(1,"#5d7f2c")}
    else{gr.addColorStop(0,tone[0]);gr.addColorStop(.48,tone[1]);gr.addColorStop(.52,tone[2]);gr.addColorStop(1,tone[3])}
    g.fillStyle=gr;g.fill();
    g.save();g.clip();
    /* gloss: the low sun across the upper half */
    var sh=g.createLinearGradient(L*.15,-W,L*.7,0);sh.addColorStop(0,"rgba(255,248,215,0)");sh.addColorStop(.5,"rgba(255,246,210,"+(young?.16:.22)+")");sh.addColorStop(1,"rgba(255,246,210,0)");g.fillStyle=sh;g.fillRect(0,-W*1.2,L,W*1.2);
    /* veins */
    g.strokeStyle=young?"rgba(235,245,190,.45)":"rgba(210,230,170,.35)";g.lineWidth=Math.max(.6,W*.035);g.beginPath();g.moveTo(0,0);
    for(var m=0;m<=20;m++){var u2=m/20;g.lineTo(u2*L*.97,Math.sin(Math.PI*u2)*W*.12)}g.stroke();
    g.lineWidth=Math.max(.5,W*.018);g.strokeStyle=young?"rgba(235,245,190,.28)":"rgba(200,225,160,.2)";
    for(var v=1;v<9;v++){var vx=L*(.08+v*.1),vy=Math.sin(Math.PI*vx/L)*W*.12;
      g.beginPath();g.moveTo(vx,vy);g.quadraticCurveTo(vx+L*.1,vy-W*.5,vx+L*.16,vy-W*.85);g.stroke();
      g.beginPath();g.moveTo(vx,vy);g.quadraticCurveTo(vx+L*.1,vy+W*.45,vx+L*.16,vy+W*.78);g.stroke()}
    g.restore();
    g.strokeStyle=young?"rgba(220,240,170,.5)":"rgba(225,240,190,.32)";g.lineWidth=Math.max(.6,W*.02);
    g.beginPath();g.moveTo(0,0);for(k=0;k<up.length;k++)g.lineTo(up[k][0],up[k][1]);g.stroke();
    g.restore();
  }
  /* the branch, pre-rendered in its own canvas; pivot at the bottom centre */
  function paintBranch(S){
    var A=mk(S*1.15,S*1.1),o=A[0],g=A[1],rnd=rng(17),ox=S*.62,oy=S*1.08;g.translate(ox,oy);
    var TONES=[["#2f4a2a","#3f5f33","#26401f","#162a14"],["#34502c","#4a6b39","#2a4522","#18301a"],["#273f24","#37552f","#203819","#122412"]];
    /* the stem: a gentle S, woody at the base, green at the tip */
    var P=[[0,0],[-S*.05,-S*.25],[-S*.02,-S*.5],[S*.04,-S*.72],[S*.03,-S*.92]];
    function at(t){var n=P.length-1,i=Math.min(n-1,Math.floor(t*n)),f=t*n-i,a=P[i],b=P[i+1];return [a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f]}
    for(var s=0;s<60;s++){var t=s/60,p=at(t),q=at((s+1)/60);g.strokeStyle=t<.45?"#4a3d2c":"#4f6b2f";g.lineWidth=S*(.02-.013*t);g.lineCap="round";g.beginPath();g.moveTo(p[0],p[1]);g.lineTo(q[0],q[1]);g.stroke()}
    /* mature leaves, alternate along the stem */
    var LV=[[.14,-1,.42,.11],[.26,1,.4,.105],[.38,-1,.38,.1],[.5,1,.35,.095],[.62,-1,.31,.085],[.73,1,.27,.075]];
    var FL=null;
    LV.forEach(function(l,i){var p=at(l[0]),side=l[1],ang=side<0?Math.PI+.55-(rnd()*.25):-.55+(rnd()*.25),L=S*l[2],W=S*l[3]*.5;
      if(i===2)FL=[p[0],p[1]];
      leaf(g,p[0],p[1],ang,L,W,TONES[i%3],rnd,false)});
    /* two leaves and a bud */
    var tp=at(.94);
    leaf(g,tp[0],tp[1]+S*.04,Math.PI+.75,S*.17,S*.05,null,rnd,true);
    leaf(g,tp[0],tp[1]+S*.01,-.95,S*.15,S*.045,null,rnd,true);
    g.save();g.translate(P[4][0],P[4][1]);g.rotate(-Math.PI/2+.08);
    var bg=g.createLinearGradient(0,-S*.02,0,S*.02);bg.addColorStop(0,"#d8e6a6");bg.addColorStop(1,"#94b153");g.fillStyle=bg;
    g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(S*.05,-S*.024,S*.11,0);g.quadraticCurveTo(S*.05,S*.024,0,0);g.fill();
    g.strokeStyle="rgba(250,252,235,.55)";g.lineWidth=Math.max(.5,S*.0015);for(var d=0;d<26;d++){var dx=rnd()*S*.1,dy=(rnd()-.5)*S*.03*Math.sin(Math.PI*dx/(S*.11));g.beginPath();g.moveTo(dx,dy);g.lineTo(dx+S*.006,dy-(dy>0?-1:1)*S*.004);g.stroke()}
    g.restore();
    /* one white tea flower on a short side shoot, nodding outward */
    var fx=FL[0]-S*.15,fy=FL[1]+S*.02,fr=S*.07;
    g.strokeStyle="#4a5e2c";g.lineWidth=S*.006;g.beginPath();g.moveTo(FL[0],FL[1]);g.quadraticCurveTo(FL[0]-S*.06,FL[1]-S*.03,fx,fy);g.stroke();
    g.save();g.translate(fx,fy);g.rotate(-.35);
    for(var k=0;k<6;k++){var pa=k/6*6.283+.3;g.save();g.rotate(pa);var pg=g.createRadialGradient(fr*.4,0,0,fr*.5,0,fr*.75);pg.addColorStop(0,"#fffdf3");pg.addColorStop(.7,"#efeee0");pg.addColorStop(1,"#cfd1bf");
      g.fillStyle=pg;g.beginPath();g.ellipse(fr*.52,0,fr*.52,fr*.4,0,0,6.283);g.fill();g.strokeStyle="rgba(150,150,120,.35)";g.lineWidth=Math.max(.5,fr*.015);g.stroke();g.restore()}
    for(var st=0;st<70;st++){var sa=rnd()*6.283,sr=fr*(.12+rnd()*.24);g.strokeStyle="rgba(230,200,90,.8)";g.lineWidth=Math.max(.5,fr*.012);g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(sa)*sr,Math.sin(sa)*sr);g.stroke();
      g.fillStyle=rnd()<.5?"#f2c94c":"#e0a92c";g.beginPath();g.arc(Math.cos(sa)*sr,Math.sin(sa)*sr,Math.max(.8,fr*.03),0,6.283);g.fill()}
    g.fillStyle="#c8b65a";g.beginPath();g.arc(0,0,fr*.07,0,6.283);g.fill();
    g.restore();
    /* a dewdrop on the tip of the lowest leaf */
    var dp=at(.14),da=Math.PI+.55,dxx=dp[0]+Math.cos(da)*S*.4,dyy=dp[1]+Math.sin(da)*S*.4+S*.012;
    var dg=g.createRadialGradient(dxx-S*.003,dyy-S*.004,0,dxx,dyy,S*.011);dg.addColorStop(0,"rgba(255,255,245,.95)");dg.addColorStop(.35,"rgba(210,230,200,.5)");dg.addColorStop(1,"rgba(120,160,110,.25)");g.fillStyle=dg;g.beginPath();g.arc(dxx,dyy,S*.011,0,6.283);g.fill();
    return {cv:o,ox:ox,oy:oy,W:S*1.15,H:S*1.1};
  }
  function build(){
    var W=w,H=G.ground,hz=G.hz,A=mk(W,H+2),g=A[1];oBg=A[0];
    var sx=G.mob?w*.36:G.side+G.cw*.58,sy=hz-H*.05;
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#0b1410");sky.addColorStop(.4,"#1c2a21");sky.addColorStop(.75,"#5d6a52");sky.addColorStop(.93,"#b4b388");sky.addColorStop(1,"#d9cf9f");
    g.fillStyle=sky;g.fillRect(0,0,W,hz+2);
    var sun=g.createRadialGradient(sx,sy,0,sx,sy,Math.max(W,H)*.55);sun.addColorStop(0,"rgba(255,240,200,.75)");sun.addColorStop(.09,"rgba(245,225,170,.36)");sun.addColorStop(.4,"rgba(190,190,130,.1)");sun.addColorStop(1,"rgba(190,190,130,0)");
    g.fillStyle=sun;g.fillRect(0,0,W,H);
    /* misty hills, far to near */
    var RD=[[.9,"rgba(120,135,112,.5)",.07,3],[.97,"rgba(78,98,76,.7)",.08,7],[1.04,"rgba(44,62,44,.92)",.07,11]];
    for(var r=0;r<RD.length;r++){var rr=rng(RD[r][3]),amp=H*RD[r][2],base=hz*RD[r][0],o1=rr()*9,o2=rr()*9;g.fillStyle=RD[r][1];g.beginPath();g.moveTo(0,H);
      for(var x=0;x<=W+6;x+=6){var u=x/W,y=base-amp*(.55*Math.sin(u*2.6+o1)+.3*Math.sin(u*5.9+o2)+.12*Math.sin(u*13+o1*2)+.6)*(.7+.3*Math.sin(u*1.3+o2));g.lineTo(x,y)}
      g.lineTo(W,H);g.closePath();g.fill();
      var mist=g.createLinearGradient(0,base-amp*.2,0,base+H*.06);mist.addColorStop(0,"rgba(215,220,190,0)");mist.addColorStop(.5,"rgba(215,220,190,"+(.16-r*.04)+")");mist.addColorStop(1,"rgba(215,220,190,0)");g.fillStyle=mist;g.fillRect(0,base-amp*.2,W,H*.1)}
    /* the tea garden: clipped rows curving across the slope, larger toward the viewer */
    var top=hz*1.02+H*.02,rows=G.mob?11:16,ry=rng(41);
    var base2=g.createLinearGradient(0,top,0,H);base2.addColorStop(0,"#2c3f2a");base2.addColorStop(.5,"#1a2a1b");base2.addColorStop(1,"#0d1611");g.fillStyle=base2;g.fillRect(0,top,W,H-top);
    for(var i=0;i<rows;i++){var f=i/(rows-1),yy=top+(H-top)*Math.pow(f,1.6)*1.02,th=(H-top)*(.025+f*.11),curve=H*(.045+.08*f),ph=i*.7;
      var lit=1-f*.75;
      function rowY(xx){var u=xx/W;return yy+curve*Math.sin(u*2.2+ph*.15+1.2)-curve*.4*Math.sin(u*5.1+ph*.3)}
      /* shadow furrow under the row */
      g.fillStyle="rgba(8,14,9,.55)";g.beginPath();g.moveTo(0,rowY(0)+th*.15);for(var x2=0;x2<=W+8;x2+=8)g.lineTo(x2,rowY(x2)+th*.15);for(x2=W+8;x2>=0;x2-=8)g.lineTo(x2,rowY(x2)+th*.7);g.closePath();g.fill();
      /* the clipped hedge: a rounded top made of small bumps */
      var hg=g.createLinearGradient(0,yy-th,0,yy+th*.3);hg.addColorStop(0,"rgb("+(96*lit+40|0)+","+(128*lit+48|0)+","+(64*lit+30|0)+")");hg.addColorStop(.45,"rgb("+(50*lit+24|0)+","+(78*lit+34|0)+","+(40*lit+22|0)+")");hg.addColorStop(1,"#0f1a10");
      g.fillStyle=hg;g.beginPath();g.moveTo(0,rowY(0)+th*.2);
      var bw=Math.max(4,th*.9);for(var x3=0;x3<=W+bw;x3+=bw){var by=rowY(x3)-th*(.75+.12*Math.sin(x3*.37+i)+.1*(ry()-.5));g.quadraticCurveTo(x3+bw*.5,by-th*.18,x3+bw,rowY(x3+bw)-th*(.75+.12*Math.sin((x3+bw)*.37+i)))}
      g.lineTo(W,rowY(W)+th*.2);g.closePath();g.fill();
      /* sunlit leaf flecks along the crown */
      var n=Math.round(W/(G.mob?6:4)*(.3+f*.7));g.fillStyle="rgba(200,225,140,"+(.06+.14*lit).toFixed(3)+")";
      for(var k=0;k<n;k++){var lx=ry()*W,ly=rowY(lx)-th*(.55+ry()*.3),ls=.6+f*2.4*ry();g.fillRect(lx,ly,ls,ls*.6)}
    }
    /* warm haze where the sun meets the garden */
    var gl=g.createRadialGradient(sx,hz,0,sx,hz,W*.5);gl.addColorStop(0,"rgba(240,230,170,.2)");gl.addColorStop(1,"rgba(240,230,170,0)");g.fillStyle=gl;g.fillRect(0,0,W,H);
    /* keep the copy side calm: a soft darkening on the left (desktop) */
    if(!G.mob){var lg=g.createLinearGradient(0,0,W*.6,0);lg.addColorStop(0,"rgba(8,14,10,.55)");lg.addColorStop(1,"rgba(8,14,10,0)");g.fillStyle=lg;g.fillRect(0,0,W,H)}
    var bt=g.createLinearGradient(0,H*.72,0,H);bt.addColorStop(0,"rgba(13,22,17,0)");bt.addColorStop(1,"rgba(13,22,17,.85)");g.fillStyle=bt;g.fillRect(0,H*.72,W,H*.28+2);
    BR=paintBranch(G.S);
    var rm=rng(31);MO=[];for(var m=0;m<(G.mob?16:36);m++)MO.push([rm(),rm(),rm()*6.28,.3+rm()*.7,.6+rm()*1.2]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var par=G.mob?0:-SP.v*h*.06;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oBg,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* motes drifting up through the morning light */
    var sx=G.mob?w*.36:G.side+G.cw*.58;
    for(var m=0;m<MO.length;m++){var o=MO[m],life=(t*.03*o[3]+o[0])%1,mx=sx+(o[1]-.5)*w*.6+Math.sin(t*.4+o[2])*30,my=G.hz*1.1-life*G.hz*.8+Math.sin(t*.7+o[2])*8,ma=Math.sin(Math.PI*life)*.45*e;
      c.fillStyle="rgba(250,245,210,"+ma.toFixed(3)+")";c.fillRect(mx,my+par*.5,o[4],o[4])}
    /* the branch sways from its base */
    var sw=Math.sin(t*.45)*.018+Math.sin(t*1.1+1)*.006;
    c.save();c.translate(G.bx,G.by+par);c.rotate(sw);c.drawImage(BR.cv,-BR.ox,-BR.oy,BR.W,BR.H);c.restore();
    c.setTransform(1,0,0,1,0,0);c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.bx,G.by-G.S*.6]:[w/2,h/2]}};
})();'''

R["story"] = r'''/* the story scene: EC16, from leaf to nanoparticle (BY). An engraved tea leaf on the left with a focus ring, and ONE lens
   on the right that stays on screen. Step 1 the lens shows leaf cells holding catechins; step 2 one EGCG molecule, then the
   palmitate chain drawing on (EC16); step 3 EC16 molecules gather into a nanoparticle; step 4 nanoparticles meet virus
   particles, which fade. Each step changes only what is inside the lens and its caption. On phones the view crops to the lens. */
var LX=590,LY=330,LR=180;
function rng2(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function hexP(cx,cy,r){var d="";for(var k=0;k<6;k++){var a=(-90+60*k)*Math.PI/180;d+=(k?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
function zig(x,y,n,dx,dy){var d="M"+x+" "+y;for(var i=1;i<=n;i++)d+="L"+(x+i*dx).toFixed(1)+" "+(y+(i%2?dy:0)).toFixed(1);return d}
function scCells(){var r=rng2(5),out="",s=38;
  for(var row=-6;row<=6;row++)for(var col=-6;col<=6;col++){var cx=LX+col*s*1.0+(row%2?s*.5:0),cy=LY+row*s*.86;if(Math.hypot(cx-LX,cy-LY)>LR+30)continue;
    var d="";for(var k=0;k<6;k++){var a=(-90+60*k)*Math.PI/180,rr=s*.56*(1+(r()-.5)*.08);d+=(k?"L":"M")+(cx+rr*Math.cos(a)).toFixed(1)+" "+(cy+rr*Math.sin(a)*.9).toFixed(1)}
    out+='<path class="cw" d="'+d+'Z"/>';var n=2+Math.floor(r()*4);for(var j=0;j<n;j++)out+='<circle class="cat" cx="'+(cx+(r()-.5)*s*.5).toFixed(1)+'" cy="'+(cy+(r()-.5)*s*.45).toFixed(1)+'" r="'+(1.8+r()*1.6).toFixed(1)+'"/>'}
  return out}
/* EGCG, schematic: A and C rings fused, B ring (three OH) on C, the gallate ring (three OH) on an ester; then the C16 palmitate chain */
var M_R=24,M_A=[478,318],M_C=[478+M_R*Math.sqrt(3),318];
function scMol(){var r=M_R,dx=r*Math.sqrt(3),A=M_A,C=M_C,out="";
  out+='<path class="bd" d="'+hexP(A[0],A[1],r)+'"/><path class="bd" d="'+hexP(C[0],C[1],r)+'"/>';
  out+='<path class="bdi" d="'+hexP(A[0],A[1],r*.62)+'"/>';
  var cv=[C[0]+r*Math.cos(-Math.PI/6),C[1]+r*Math.sin(-Math.PI/6)],B=[cv[0]+2*r*Math.cos(-Math.PI/6),cv[1]+2*r*Math.sin(-Math.PI/6)];
  var bv=[B[0]-r*Math.cos(-Math.PI/6),B[1]-r*Math.sin(-Math.PI/6)];
  out+='<path class="bd" d="M'+cv[0].toFixed(1)+' '+cv[1].toFixed(1)+'L'+bv[0].toFixed(1)+' '+bv[1].toFixed(1)+'"/><path class="bd" d="'+hexP(B[0],B[1],r)+'"/><path class="bdi" d="'+hexP(B[0],B[1],r*.62)+'"/>';
  [-30,30,90].forEach(function(an){var a=(an-60)*Math.PI/180;var v=[B[0]+r*Math.cos(a),B[1]+r*Math.sin(a)];var e=[B[0]+(r+14)*Math.cos(a),B[1]+(r+14)*Math.sin(a)];out+='<path class="bd" d="M'+v[0].toFixed(1)+' '+v[1].toFixed(1)+'L'+e[0].toFixed(1)+' '+e[1].toFixed(1)+'"/><circle class="oh" cx="'+e[0].toFixed(1)+'" cy="'+e[1].toFixed(1)+'" r="4"/>'});
  [[A[0]-r*Math.cos(Math.PI/6),A[1]-r*.5,-1,-.6],[A[0],A[1]+r,0,1]].forEach(function(q){var e=[q[0]+q[2]*14,q[1]+q[3]*14];out+='<path class="bd" d="M'+q[0].toFixed(1)+' '+q[1].toFixed(1)+'L'+e[0].toFixed(1)+' '+e[1].toFixed(1)+'"/><circle class="oh" cx="'+e[0].toFixed(1)+'" cy="'+e[1].toFixed(1)+'" r="4"/>'});
  var cb=[C[0]+r*Math.cos(Math.PI/6),C[1]+r*Math.sin(Math.PI/6)],o=[cb[0]+14,cb[1]+20],cc=[o[0]+22,o[1]],D=[cc[0]+14+r,cc[1]+18];
  out+='<path class="bd" d="M'+cb[0].toFixed(1)+' '+cb[1].toFixed(1)+'L'+o[0].toFixed(1)+' '+o[1].toFixed(1)+'L'+cc[0].toFixed(1)+' '+cc[1].toFixed(1)+'L'+(D[0]-r*Math.cos(Math.PI/6)).toFixed(1)+' '+(D[1]-r*.5).toFixed(1)+'"/>';
  out+='<path class="bd" d="M'+cc[0].toFixed(1)+' '+cc[1].toFixed(1)+'L'+(cc[0]+2).toFixed(1)+' '+(cc[1]-16).toFixed(1)+'"/><circle class="oh" cx="'+(cc[0]+2).toFixed(1)+'" cy="'+(cc[1]-20).toFixed(1)+'" r="4"/>';
  out+='<path class="bd" d="'+hexP(D[0],D[1],r)+'"/><path class="bdi" d="'+hexP(D[0],D[1],r*.62)+'"/>';
  [0,60,120].forEach(function(an){var a=(an-30)*Math.PI/180;var v=[D[0]+r*Math.cos(a),D[1]+r*Math.sin(a)];var e=[D[0]+(r+14)*Math.cos(a),D[1]+(r+14)*Math.sin(a)];
    if(an===0)return;out+='<path class="bd" d="M'+v[0].toFixed(1)+' '+v[1].toFixed(1)+'L'+e[0].toFixed(1)+' '+e[1].toFixed(1)+'"/><circle class="oh" cx="'+e[0].toFixed(1)+'" cy="'+e[1].toFixed(1)+'" r="4"/>'});
  var tv=[D[0]+r*Math.cos(-Math.PI/6),D[1]+r*Math.sin(-Math.PI/6)];
  out+='<path class="tail" id="scTail" d="'+zig(tv[0],tv[1],15,10.6,-9)+'"/>';
  return out}
/* step 3: EC16 molecules (head + tail glyphs) that gather into one sphere; step 4: particles and viruses */
var NM=30,SC_MOL=[];(function(){var r=rng2(11);for(var i=0;i<NM;i++){var a=i/NM*6.283;SC_MOL.push({sx:LX+(r()-.5)*LR*1.5,sy:LY+(r()-.5)*LR*1.4,sa:r()*360,a:a})}})();
var SC_V=[[LX-70,LY-58],[LX+82,LY-20],[LX-24,LY+86]],SC_NP=[[-150,-120,-34,-30],[150,-140,40,-30],[170,90,48,4],[-160,60,-40,26],[40,170,6,42]];
function spiky(cx,cy,r){var d="";for(var k=0;k<14;k++){var a=k/14*6.283;d+="M"+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)+"L"+(cx+(r+8)*Math.cos(a)).toFixed(1)+" "+(cy+(r+8)*Math.sin(a)).toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),vb=mob?"390 132 400 450":"0 64 820 530",ty=LY+LR+40;
  var lf="M0 0C70 -70 230 -84 400 0C230 84 70 70 0 0Z",lt="translate(96 556) rotate(-58)";
  var veins="";for(var v=1;v<9;v++){var x=v*42;veins+='<path class="vn" d="M'+x+' 0Q'+(x+30)+' -26 '+(x+48)+' -'+(Math.max(14,62-Math.abs(200-x)*.18)).toFixed(0)+'M'+x+' 0Q'+(x+30)+' 26 '+(x+48)+' '+(Math.max(14,62-Math.abs(200-x)*.18)).toFixed(0)+'"/>'}
  var hat="";for(var i=0;i<16;i++){var y=-60+i*8;hat+='<path class="hat" d="M30 '+y+'L380 '+(y+3)+'"/>'}
  /* the focus ring sits on the leaf at local (210,24) */
  var fa=-58*Math.PI/180,fx=96+210*Math.cos(fa)-24*Math.sin(fa),fy=556+210*Math.sin(fa)+24*Math.cos(fa);
  return '<svg viewBox="'+vb+'" aria-hidden="true">'+
   '<defs><linearGradient id="cxLeaf" x1="0" y1="-1" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="rgba(143,212,58,.16)"/><stop offset="1" stop-color="rgba(143,212,58,.05)"/></linearGradient>'+
   '<clipPath id="cxLeafC"><path d="'+lf+'" transform="'+lt+'"/></clipPath><clipPath id="cxLens"><circle cx="'+LX+'" cy="'+LY+'" r="'+LR+'"/></clipPath></defs>'+
   '<g id="scLeaf"><path class="mr" d="M-34 0L0 0" transform="'+lt+'"/><path class="lf" d="'+lf+'" transform="'+lt+'"/><g clip-path="url(#cxLeafC)"><g transform="'+lt+'">'+hat+'</g></g><g transform="'+lt+'"><path class="mr" d="M0 0L392 0"/>'+veins+'</g></g>'+
   '<circle class="foc" cx="'+fx.toFixed(1)+'" cy="'+fy.toFixed(1)+'" r="20"/>'+
   '<path class="ld" id="scL1" d="M'+(fx+12).toFixed(1)+' '+(fy-16).toFixed(1)+'L'+(LX-60)+' '+(LY-LR+10)+'"/><path class="ld" id="scL2" d="M'+(fx+14).toFixed(1)+' '+(fy+14).toFixed(1)+'L'+(LX-70)+' '+(LY+LR-14)+'"/>'+
   '<circle class="lens" cx="'+LX+'" cy="'+LY+'" r="'+(LR+2)+'"/>'+
   '<g clip-path="url(#cxLens)"><circle class="lensw" cx="'+LX+'" cy="'+LY+'" r="'+LR+'"/>'+
    '<g id="scS1">'+scCells()+'</g>'+
    '<g id="scS2">'+scMol()+'</g>'+
    '<g id="scS3"><circle class="np" id="scSph" cx="'+LX+'" cy="'+LY+'" r="96"/>'+SC_MOL.map(function(m){return '<g class="scM"><path class="mt" d="'+zig(5,0,6,6,-5)+'"/><circle class="hd" cx="0" cy="0" r="5"/></g>'}).join("")+'</g>'+
    '<g id="scS4">'+SC_V.map(function(v){return '<g class="scV"><circle class="vir" cx="'+v[0]+'" cy="'+v[1]+'" r="30"/><path class="sp" d="'+spiky(v[0],v[1],30)+'"/></g>'}).join("")+
     SC_NP.map(function(){return '<g class="scN"><circle class="np" cx="0" cy="0" r="17"/></g>'}).join("")+'</g>'+
   '</g>'+
   '<g text-anchor="middle"><text id="scT1" x="'+LX+'" y="'+ty+'" class="a">TEA LEAF CELLS · CATECHINS</text>'+
    '<text id="scT2a" x="'+LX+'" y="'+ty+'">EGCG</text><text id="scT2" x="'+LX+'" y="'+ty+'" class="a">EGCG + PALMITATE = EC16</text>'+
    '<text id="scT3" x="'+LX+'" y="'+ty+'" class="a">EC16 NANOPARTICLE</text>'+
    '<text id="scT4" x="'+LX+'" y="'+ty+'" class="a">−99.9999% IN ONE MINUTE</text></g>'+
   (mob?'':'<text x="300" y="186" text-anchor="middle">GREEN TEA LEAF</text>')+
  '</svg>';
}
function storyDraw(svg){
  var E={s1:$("#scS1",svg),s2:$("#scS2",svg),s3:$("#scS3",svg),s4:$("#scS4",svg),tail:$("#scTail",svg),sph:$("#scSph",svg),
    m:$$(".scM",svg),v:$$(".scV",svg),n:$$(".scN",svg),t1:$("#scT1",svg),t2a:$("#scT2a",svg),t2:$("#scT2",svg),t3:$("#scT3",svg),t4:$("#scT4",svg),l:[$("#scL1",svg),$("#scL2",svg)]};
  var TL=E.tail.getTotalLength(),LL=E.l.map(function(p){return p.getTotalLength()});
  return function(p,b){
    if(!E.s1.isConnected)return;
    var s1=seg(p,.0,.08),o1=seg(p,.2,.27),s2=seg(p,.24,.32),tl=seg(p,.32,.44),o2=seg(p,.47,.53),s3=seg(p,.5,.66),o3=seg(p,.72,.78),s4=seg(p,.76,.94);
    svg.style.opacity=(.25+.75*b).toFixed(3);
    E.l.forEach(function(l,k){l.style.strokeDasharray=LL[k];l.style.strokeDashoffset=(LL[k]*(1-Math.max(s1,.999*(p>0?1:0)))).toFixed(1)});
    var a1=1-o1;E.s1.style.opacity=(b*a1).toFixed(3);E.t1.style.opacity=(b*a1).toFixed(3);
    var a2=s2*(1-o2);E.s2.style.opacity=(b*a2).toFixed(3);
    E.tail.style.strokeDasharray=TL;E.tail.style.strokeDashoffset=(TL*(1-tl)).toFixed(1);
    E.t2a.style.opacity=(b*a2*(1-tl)).toFixed(3);E.t2.style.opacity=(b*a2*tl).toFixed(3);
    var a3=Math.max(s3*(1-o3),0);E.s3.style.opacity=(b*Math.max(a3,s3*(1-seg(p,.74,.8)))).toFixed(3);E.t3.style.opacity=(b*a3).toFixed(3);
    E.sph.style.opacity=(seg(p,.6,.68)*(1-seg(p,.74,.8))*.9).toFixed(3);
    E.m.forEach(function(g,k){var q=SC_MOL[k],u=seg(p,.52+k*.002,.64+k*.001),tx=LX+Math.cos(q.a)*96,ty=LY+Math.sin(q.a)*96,ta=q.a*180/Math.PI+180;
      var x=lerp(q.sx,tx,u),y=lerp(q.sy,ty,u),an=lerp(q.sa,ta,u);g.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+an.toFixed(1)+")")});
    E.s4.style.opacity=(b*s4).toFixed(3);E.t4.style.opacity=(b*s4).toFixed(3);
    var hit=seg(p,.84,.96);
    E.n.forEach(function(g,k){var q=SC_NP[k],u=seg(p,.78+k*.01,.9+k*.008),vt=SC_V[k%3],x=lerp(LX+q[0],vt[0]+q[2],u),y=lerp(LY+q[1],vt[1]+q[3],u);g.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")});
    E.v.forEach(function(g){g.style.opacity=(1-.78*hit).toFixed(3)});
  };
}'''

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
(HERE / "camellix.src.html").write_text(out)
print("wrote", HERE / "camellix.src.html", len(out))
