#!/usr/bin/env python3
"""Assemble craniosure.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run: python3 _kit/src/craniosure.assemble.py && node _kit/build.js _kit/src/craniosure.src.html craniosure/index.html"""
import re, pathlib, base64
HERE = pathlib.Path(__file__).resolve().parent
IMG = HERE / "craniosure-img"
SRC = (HERE / "firelight.src.html").read_text()
SKULL = (HERE / "craniosure.phone.js").read_text()
def b64(name, mime):
    return "data:%s;base64,%s" % (mime, base64.b64encode((IMG / name).read_bytes()).decode())
MARK = b64("mark.png", "image/png")
PH = [b64("t%d.webp" % i, "image/webp") for i in range(1, 7)]
R = {}

R["meta"] = r'''<title>CranioSure — Earlier answers on infant head shape</title>
<meta name="description" content="CranioSure is a Madison, Wisconsin medtech startup building a smartphone app that screens infant head shape for craniosynostosis risk and connects families to ACPA-approved craniofacial teams.">
<meta name="theme-color" content="#0b1451">
<link rel="icon" href="''' + MARK + '''">'''

R["fonts"] = "/*@fonts Source Serif 4:300,300i,400; Manrope:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0b1451;--inkr:11,20,81;--boner:244,247,252;--accr:36,183,255;--ink2:#0e185a;--ink3:#152165;--deep:#070d3a;
  --bone:#f4f7fc;--bone2:#e8eef8;--bone3:#d9e2f2;
  --stone:#a9b4d6;--stoneD:#4a5684;
  --acc:#2082ff;--accL:#24b7ff;--accD:#1663d6;--cy:#27ebff;--red:#c5050c;
  --hair:rgba(244,247,252,.15);--hairD:rgba(11,20,81,.15);
  --disp:'Source Serif 4',Georgia,'Times New Roman',serif;
  --serif:'Source Serif 4',Georgia,serif;
  --sans:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:radial-gradient(60% 80% at 72% 50%,#17226e 0%,#0d1758 44%,#080f43 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand img.mk{width:34px;height:34px;flex:none;display:block}
.brand .bt{font:500 21px/1 var(--sans);letter-spacing:-.005em;white-space:nowrap}
@media (max-width:860px){.brand img.mk{width:30px;height:30px}.brand .bt{font-size:19px}}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene: an infant's head seen from above) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:13ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8f9bc6;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5a679e;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(230px,31vh,310px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(78vh,720px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene svg .nse{vector-effect:non-scaling-stroke}
.scene .hd{fill:url(#csHd);stroke:rgba(var(--boner),.85);stroke-width:1.6}
.scene .hat{fill:none;stroke:rgba(var(--boner),.07);stroke-width:1}
.scene .ear{fill:#1b2a78;stroke:rgba(var(--boner),.7);stroke-width:1.3}
.scene .sut{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1.2;stroke-dasharray:4 5}
.scene .fon{fill:rgba(var(--boner),.08);stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .sag{fill:none;stroke:var(--red);stroke-width:3.2;stroke-linecap:round}
.scene .tr{fill:none;stroke:var(--cy);stroke-width:2.6;stroke-linecap:round}
.scene .ph{fill:none;stroke:rgba(var(--boner),.75);stroke-width:1.6}
.scene .vf{fill:none;stroke:var(--accL);stroke-width:2}
.scene .ld{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .dot{fill:var(--accL)}
.scene .dotr{fill:var(--red)}
.scene .pin{fill:var(--acc);stroke:rgba(var(--boner),.9);stroke-width:1.4}
.scene .rt{fill:none;stroke:var(--accL);stroke-width:1.6;stroke-dasharray:3 6}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c4cde8}
.scene text.a{fill:var(--accL)}
.scene text.r{fill:#ff6b70}
@media (max-width:1024px){.scene svg text{font-size:19px!important;letter-spacing:.02em!important}}
/* ===== CranioSure: deep navy ground from the logo type, cool paper pages, the logo blues as accents ===== */
.hero .hero-h{font-size:clamp(46px,6.3vw,112px);letter-spacing:-.03em;line-height:1}
@media (max-width:860px){.hero .hero-h{font-size:clamp(40px,11.4vw,80px)}.hero .hero-h .l{white-space:normal}}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:300}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:#fff;border-color:var(--acc)}
.stat .v{font-size:clamp(50px,5.2vw,94px)}
.stat .v sup{color:var(--accL)}
.stats{grid-template-columns:repeat(4,minmax(0,1fr))}
@media (max-width:1100px){.stats{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:860px){.stats{grid-template-columns:1fr}}
/* services: four capabilities */
.caps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2vw,32px);line-height:1.1;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:30ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1024px){.caps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:48px}}
@media (max-width:560px){.caps{grid-template-columns:1fr;row-gap:40px}}
/* who it is for: a fact list with animated rules */
.fl{list-style:none;margin:clamp(64px,7vw,110px) 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:var(--gap);border-top:1px solid var(--hairD)}
.fl li{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:var(--gap);padding:20px 0;border-bottom:1px solid var(--hairD);align-items:baseline}
.fl li::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:right;transition:transform .4s var(--eo)}
.fl li:hover::after{transform:scaleX(1);transform-origin:left}
.fl b{font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.6vw,25px);line-height:1.32;letter-spacing:-.015em}
@media (max-width:860px){.fl{grid-template-columns:1fr}.fl li{grid-template-columns:1fr;gap:6px}}
/* team: a uniform portrait grid of three */
#team .pt{width:calc((100% - 2 * var(--gap)) / 3);max-width:330px}
#team .pt .ph img{object-position:50% 24%}
#team .pg{row-gap:clamp(40px,4vw,60px)}
@media (max-width:560px){#team .pt{width:100%;max-width:none}}
/* recognition credit line */
.dark .credit p i,.dark2 .credit p i{color:var(--accL)}
@media (max-width:600px){html .credit p span{white-space:normal}html .credit p i{padding:0 .35em}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.6vw,25px);line-height:1.35;letter-spacing:-.015em}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
.light .kick{color:var(--accD)}
/* DF: the skull echo stays faint behind the footer wordmark */
html .ftr .fcv{opacity:.22!important}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("cs-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <img src="''' + MARK + r'''" alt="" width="84" height="84" style="width:84px;height:84px">
    <div class="wm"><span>CRANIOSURE</span></div>
  </div>
  <span class="lab pl">Infant head shape · Madison, Wisconsin</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" data-to="hero" aria-label="CranioSure, home"><img class="mk" src="' + MARK + '" alt="" width="34" height="34"><span class="bt">CranioSure</span></a>'

NAV = [("story", "Technology"), ("services", "Services"), ("team", "Team"), ("news", "News")]
ARR = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
R["navmenu"] = '<nav class="nav" aria-label="Primary">\n' + "".join(
    '    <a class="nl ul" href="#%s" data-to="%s">%s</a>\n' % (k, k, v) for k, v in NAV) + '    <a class="btn" href="#contact" data-to="contact">Contact ' + ARR + r'''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>
<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/" data-to="hero">Home</a></li>
''' + "".join('    <li><a href="#%s" data-to="%s">%s</a></li>\n' % (k, k, v) for k, v in NAV) + r'''    <li><a href="#contact" data-to="contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Madison, Wisconsin</div>
    <div><span class="lab">Email</span><br>contactus@craniosure.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">CranioSure</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="CranioSure";\nvar PK="cs";'

R["content"] = r'''var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Manrope"','500 1em "Manrope"','400 1em "IBM Plex Mono"'];
var MAIL="contactus@craniosure.com";
/* people: names and titles exactly as on craniosure.com ("Meet our team"), with their own portraits */
var PH=''' + "[" + ",".join('"%s"' % u for u in PH) + "]" + r''';
var PEOPLE=[
 {name:"Daniel Cho, MD, PhD",title:"Co-Founder / CEO",img:PH[2]},
 {name:"Jessica Blum, MD, MSc",title:"Co-Founder / CMO",img:PH[1]},
 {name:"Caroline Bay, MD",title:"Chief Operating Officer",img:PH[0]},
 {name:"Maja Rudolph, PhD",title:"Chief Technology Officer",img:PH[5]},
 {name:"Cameron Kneib, MD",title:"Chief Financial Officer",img:PH[4]},
 {name:"Aidan O’Shea",title:"Senior Research Scientist",img:PH[3]}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2025-07-08",s:"UW–Madison Department of Surgery",t:"Cho Lab receives a D2P SEED grant to develop and validate the CranioSure app",u:"https://www.surgery.wisc.edu/2025/07/08/cho-lab-receives-d2p-seed-funding-to-develop-app-to-detect-birth-defects-of-the-skull/"},
 {d:"2025",s:"Creative Destruction Lab",t:"CranioSure completes CDL-Wisconsin’s 2024/25 Health & Wellness stream",u:"https://creativedestructionlab.com/?p=39136"},
 {d:"2024-08-01",s:"WisBusiness: The Show",t:"Dr. Daniel Cho on CranioSure, winner of the 2024 Governor’s Business Plan Contest",u:"https://www.wisbusiness.com/?p=1499721"},
 {d:"2024-07-18",s:"Wisconsin Innovation Awards",t:"CranioSure named a finalist for the 2024 Wisconsin Innovation Awards",u:"https://wisconsininnovationawards.com/wisconsin-innovation-awards-announces-2024-finalists/"},
 {d:"2024-06-07",s:"BizTimes Milwaukee",t:"CranioSure wins the 2024 Wisconsin Governor’s Business Plan Contest, and its life sciences category",u:"https://biztimes.com/madison-based-medtech-company-wins-2024-governors-business-plan-contest/"}
];'''

R["views"] = r'''/* ================= VIEWS (home only: nav items scroll to sections) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  var y=el.getBoundingClientRect().top+window.scrollY;if(el.parentNode&&el.parentNode.classList&&el.parentNode.classList.contains("pin-spacer"))y=el.parentNode.getBoundingClientRect().top+window.scrollY;
  if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();var open=document.body.classList.contains("menu-open");if(open)closeMenu();var id=a.getAttribute("data-to");setTimeout(function(){goSec(id)},open?320:0)},true);
function fdy(d){return /^\d{4}$/.test(d)?d:fd(d)}
function rowsN(list){return '<ul class="rows">'+list.map(function(n){return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><time class="lab" datetime="'+n.d+'">'+fdy(n.d)+'</time><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Evaluation","Smartphone images of an infant’s head, assessed for the risk of craniosynostosis.",'<ellipse cx="28" cy="29" rx="17" ry="21"/><path class="a" d="M28 8V50"/><path d="M8 12V6h6M48 12V6h-6M8 46v6h6M48 46v6h-6"/>'],
  ["Growth Tracking","Follow an infant’s head shape from one visit to the next.",'<ellipse cx="28" cy="30" rx="12" ry="15"/><ellipse class="a" cx="28" cy="30" rx="19" ry="23"/>'],
  ["Easy Referral","Easy, fast referral to an ACPA-approved craniofacial team when a concern is found.",'<path d="M6 44h30"/><path class="a" d="M36 44c8-2 12-10 12-18M42 22l6 4 4-6"/><circle cx="12" cy="26" r="6"/>'],
  ["Care Coordination","Locating the nearest ACPA-approved clinic, so families reach the right team.",'<path d="M28 50s16-15 16-27a16 16 0 0 0-32 0c0 12 16 27 16 27z"/><path class="a" d="M28 16v14M21 23h14"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function facts(){var F=[["Who uses it","Pediatricians and primary care providers"],["Where it works","Urban and rural clinics, large medical centers and small community practices"],["What it saves","Unnecessary referrals and diagnostic CT scans"],["What it needs","A standard smartphone camera, no expensive imaging equipment"]];
  return '<ul class="fl" data-group>'+F.map(function(f){return '<li><span class="lab">'+f[0]+'</span><b>'+f[1]+'</b></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+PEOPLE.map(function(p){return '<div class="pt"><div class="ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy"></div><h3><span>'+esc(p.name)+'</span></h3><p>'+esc(p.title)+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Infant head shape · Madison, Wisconsin</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Earlier answers</span><span class="l">on infant</span><span class="l"><em>head shape.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CranioSure is an app for evaluating infant head shape and improving access to craniofacial care: objective guidance for pediatricians, from a few smartphone photos.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="#services" data-to="services">Services</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What is CranioSure?</span>'+
   '<p class="txt" id="mani">Head shape differences are a common concern for parents. CranioSure gives primary care providers objective guidance and the confidence to manage them, so the infants who need a craniofacial team <em>reach one early.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1:500</span><span class="k">More than one in 500 children will have a head shape difference</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1:2,000</span><span class="k">Infants who will have craniosynostosis, the premature fusion of the skull bones</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5<sup>months</sup></span><span class="k">Surgery for craniosynostosis is far less invasive before about this age</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8.6→3</span><span class="k">Average age at referral, in months, after Dr. Cho’s outreach program for pediatricians</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A smartphone, and <em>a clear next step.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Photos</span><span>Shape</span><span>Benign</span><span>Fused</span><span>Refer</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Photos on a standard smartphone.</h2><p>The pediatrician photographs the infant’s head with an ordinary smartphone camera. No expensive imaging equipment, and no CT scan to start.</p></article>'+
     '<article class="step"><h2>The head shape, read by the algorithm.</h2><p>CranioSure’s proprietary algorithm analyzes the images and screens the shape of the head, giving the provider objective diagnostic guidance.</p></article>'+
     '<article class="step"><h2>Benign differences, recognised.</h2><p>Many head shape differences are benign and resolve on their own. Telling them apart spares families unnecessary referrals and CT scans.</p></article>'+
     '<article class="step"><h2>Craniosynostosis, caught early.</h2><p>When the skull bones fuse too early, the growing brain is restricted. CranioSure helps detect an infant’s risk while surgery can still be far less invasive, before about five months of age.</p></article>'+
     '<article class="step"><h2>Referred to the right team.</h2><p>When there is a concern, CranioSure helps locate the nearest American Cleft Palate-Craniofacial Association-approved team for an easy, fast referral.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Confidence for the <em>first appointment.</em></h2></div><p data-r>CranioSure helps provide pediatricians with data and confidence when evaluating an infant’s head shape, and allows for easy, fast referral to an ACPA-approved craniofacial team.</p></div>'+
   caps()+facts()+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Craniofacial surgeons, <em>and the team around them.</em></h2></div><p data-r>CranioSure was founded by Dr. Daniel Cho, a craniofacial plastic surgeon at the University of Wisconsin–Madison, and designed by a team that includes craniofacial plastic surgeons.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and recognition</span><h2 class="d2 split">In the <em>news.</em></h2></div><p data-r>A UW Discovery to Product SEED grant (July 2025) funds the development and validation of the app.</p></div>'+
   rowsN(NEWS)+
   '<div class="credit" data-r><span class="lab">Our supporters</span><p><span>UW–Madison Discovery to Product</span> <i>·</i> <span>Craniofacial Research and Innovation Lab, UW–Madison</span> <i>·</i> <span>American Society of Maxillofacial Surgeons</span> <i>·</i> <span>Wisconsin Governor’s Business Plan Contest</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pediatricians, partners and investors</span>'+
   '<h2 class="big split">Every head shape, <em>seen early.</em></h2>'+
   '<p class="sub" data-r>CranioSure is committed to putting accurate, affordable and accessible tools into the hands of primary care and pediatric providers. Interested in joining? Send us an email.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email CranioSure '+ARR+'</a><a class="btn" href="https://www.linkedin.com/company/craniosure/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>151 E Wilson, Unit 1309</span><br><span>Madison, WI 53703</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Follow</span><p><a class="ul" href="https://www.linkedin.com/company/craniosure/" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://instagram.com/craniosure" target="_blank" rel="noopener">Instagram</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>151 E Wilson, Unit 1309<br>Madison, WI 53703</div>'+
   '<div class="c"><span class="lab">What we do</span>Smartphone screening of infant head shape, and referral to ACPA-approved craniofacial teams</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#services" data-to="services">Services</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="https://www.linkedin.com/company/craniosure/" target="_blank" rel="noopener">LinkedIn</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:Manrope,system-ui,sans-serif;font-weight:500;font-size:46px;letter-spacing:.01em">CranioSure</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CranioSure</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"CranioSure — Earlier answers on infant head shape",x:"Home"}}'''

R["field"] = SKULL + r'''
/* ================= HERO FIELD: the product, a phone on a blanket showing the app, pre-painted once per size; each frame
   composites it with a slow float and a cyan point running around the on-screen head contour, as the app reads the shape. No pointer response (CZ). */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSk=null,OUTP=null,OUTL=0;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(mob){var U=Math.min(h*.34,w*.74),s=Math.max(.15,(U-96)/750);return {mob:mob,s:s,cx:w*.5+30*s,cy:66+375*s,U:U}}
    var s2=Math.min(h*.64/750,cw*.44/780);return {mob:mob,s:s2,cx:side+cw*.76,cy:h*.54}
  }
  function build(){
    var s=G.s,W=Math.ceil(800*s)+40,H=Math.ceil(780*s)+40;oSk=document.createElement("canvas");oSk.width=Math.round(W*dpr);oSk.height=Math.round(H*dpr);
    var g=oSk.getContext("2d");g.setTransform(dpr*s,0,0,dpr*s,dpr*(20-150*s),dpr*(20-95*s));SKULL.paint(g);
    OUTP=SKULL.outline;var L=[0];for(var i=1;i<OUTP.length;i++)L.push(L[i-1]+Math.hypot(OUTP[i][0]-OUTP[i-1][0],OUTP[i][1]-OUTP[i-1][1]));OUTL=L}
  function at(u){var T=u*OUTL[OUTL.length-1],i=1;while(i<OUTL.length-1&&OUTL[i]<T)i++;var f=(T-OUTL[i-1])/((OUTL[i]-OUTL[i-1])||1);
    return [OUTP[i-1][0]+(OUTP[i][0]-OUTP[i-1][0])*f,OUTP[i-1][1]+(OUTP[i][1]-OUTP[i-1][1])*f]}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?3:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.55+.45*dim):"";
    var s=G.s,par=G.mob?0:-SP.v*h*.05,fl=RM?0:Math.sin(t*.6)*4;
    var ox=G.cx-540*s,oy=G.cy-470*s+par+fl+(1-e)*18;
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    /* a soft cool halo behind the skull */
    var hr=480*s,hg=c.createRadialGradient(G.cx+40*s,G.cy-40*s+par,0,G.cx,G.cy+par,hr*1.25);hg.addColorStop(0,"rgba(32,130,255,.2)");hg.addColorStop(.6,"rgba(32,130,255,.06)");hg.addColorStop(1,"rgba(32,130,255,0)");
    c.fillStyle=hg;c.fillRect(G.cx-hr*1.4,G.cy-hr*1.4+par,hr*2.8,hr*2.8);
    c.drawImage(oSk,ox+150*s-20,oy+95*s-20,oSk.width/dpr,oSk.height/dpr);
    /* the trace: a cyan point runs over the vault and back, leaving a fading line */
    var CL=!!SKULL.closed,cyc=CL?6:9,ph=(t%cyc)/cyc,u=CL?ph:(ph<.5?sm(ph*2):sm(2-ph*2)),dir=CL?1:(ph<.5?1:-1),TL=CL?.3:.16;
    c.lineCap="round";
    for(var k=0;k<28;k++){var u0=u-dir*TL*k/28,u1=u-dir*TL*(k+1)/28;if(CL){u0=(u0+1)%1;u1=(u1+1)%1;if(u1>u0)continue}if(u0<0||u0>1||u1<0||u1>1)continue;var A=at(u0),B=at(u1);
      c.strokeStyle="rgba(39,235,255,"+(.85*(1-k/28)).toFixed(3)+")";c.lineWidth=2.4*(1-k/40);c.beginPath();c.moveTo(ox+A[0]*s,oy+A[1]*s);c.lineTo(ox+B[0]*s,oy+B[1]*s);c.stroke()}
    var P=at(u),px=ox+P[0]*s,py=oy+P[1]*s,gl=c.createRadialGradient(px,py,0,px,py,18);gl.addColorStop(0,"rgba(39,235,255,.9)");gl.addColorStop(.3,"rgba(39,235,255,.25)");gl.addColorStop(1,"rgba(39,235,255,0)");
    c.fillStyle=gl;c.fillRect(px-18,py-18,36,36);c.fillStyle="#eafcff";c.beginPath();c.arc(px,py,2.6,0,6.283);c.fill();
    if(G.mob){c.save();c.globalCompositeOperation="destination-out";var fg=c.createLinearGradient(0,G.U-24,0,G.U);fg.addColorStop(0,"rgba(0,0,0,0)");fg.addColorStop(1,"rgba(0,0,0,1)");c.fillStyle=fg;c.fillRect(0,G.U-24,w,h);c.restore()}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){size()});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();'''

R["story"] = r'''/* the story scene: one infant head seen from above (nose at the top, ears at the sides), with the sutures of the skull
   drawn beneath the scalp. Step 1 a phone frames it; step 2 a cyan line traces its contour; step 3 the back flattens
   (a benign difference); step 4 it becomes long and narrow as the sagittal suture, drawn in red, fuses early;
   step 5 a route leads to the nearest craniofacial team. One continuous drawing (BL). */
var CS_C=[330,330];
function csHead(W,L,flat){var d="",cx=CS_C[0],cy=CS_C[1],nx=Math.cos(.8),ny=Math.sin(.8),D0=Math.hypot(W*nx,L*ny)*(1-.13*flat);
  for(var i=0;i<=120;i++){var a=i/120*6.2832,x=Math.cos(a),y=Math.sin(a);
    var bump=y<0?1+.03*Math.pow(-y,3):1+.04*Math.pow(y,4);
    var X=W*x,Y=L*y*bump,pr=(X*nx+Y*ny)/Math.hypot(W*nx,L*ny)*Math.hypot(W*nx,L*ny);
    var k=X*nx+Y*ny;if(k>D0){var ex=k-D0,soft=ex*ex/(ex+18);X-=nx*soft;Y-=ny*soft}
    d+=(i?"L":"M")+(cx+X).toFixed(1)+" "+(cy+Y).toFixed(1)}
  return d+"Z"}
function scene(){
  var cx=CS_C[0],cy=CS_C[1],hat="";
  for(var i=0;i<34;i++){var y=120+i*12.5;hat+='<path class="hat" d="M120 '+y+' C240 '+(y-14)+' 420 '+(y+14)+' 540 '+y+'"/>'}
  return '<svg viewBox="132 72 668 536" aria-hidden="true"><defs>'+
   '<radialGradient id="csHd" cx="300" cy="270" r="260" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2a3a8e"/><stop offset=".7" stop-color="#18246f"/><stop offset="1" stop-color="#101a5e"/></radialGradient>'+
   '<clipPath id="csClip"><path id="csHc" d="'+csHead(150,190,0)+'"/></clipPath></defs>'+
   '<g id="csEars"><path class="ear" id="csE1" d=""/><path class="ear" id="csE2" d=""/></g>'+
   '<path class="ear" id="csNose" d=""/>'+
   '<path class="hd" id="csH" d="'+csHead(150,190,0)+'"/>'+
   '<g clip-path="url(#csClip)">'+hat+'</g>'+
   '<g id="csSut">'+
    '<path class="sut" d="M'+cx+' 162 L'+cx+' 236"/>'+
    '<path class="sut" d="M188 300 C220 254 270 240 '+cx+' 238 C390 240 440 254 472 300"/>'+
    '<path class="sut" d="M'+cx+' 262 L'+cx+' 446"/>'+
    '<path class="sut" d="M'+cx+' 452 C300 470 260 486 214 512 M'+cx+' 452 C360 470 400 486 446 512"/>'+
    '<path class="fon" d="M'+cx+' 232 L'+(cx+16)+' 250 L'+cx+' 268 L'+(cx-16)+' 250 Z"/>'+
    '<path class="fon" d="M'+(cx-8)+' 446 L'+(cx+8)+' 446 L'+cx+' 458 Z"/>'+
   '</g>'+
   '<path class="sag" id="csSag" d="M'+cx+' 268 L'+cx+' 446"/>'+
   '<path class="tr" id="csTr" d="'+csHead(150,190,0)+'"/>'+
   '<g id="csPh"><rect class="ph" x="120" y="96" width="420" height="480" rx="34"/><rect class="ph" x="290" y="108" width="80" height="10" rx="5" style="stroke-width:1"/>'+
    '<path class="vf" d="M160 150v-24h24M500 150v-24h-24M160 524v24h24M500 524v24h-24"/></g>'+
   '<g id="csL1"><path class="ld" d="M540 236H576"/><circle class="dot" cx="540" cy="236" r="3"/><text x="586" y="232" class="a">SMARTPHONE</text><text x="586" y="252">CAMERA</text>'+
    '<path class="ld" d="M'+(cx+6)+' 152 L580 120"/><circle class="dot" cx="'+(cx+6)+'" cy="152" r="3"/><text x="586" y="116">NOSE · FRONT</text></g>'+
   '<g id="csL2"><path class="ld" d="M478 330H576"/><circle class="dot" cx="478" cy="330" r="3"/><text x="586" y="326" class="a">HEAD SHAPE</text><text x="586" y="346">READ FROM PHOTOS</text></g>'+
   '<g id="csL3"><path class="ld" d="M452 460L576 470"/><circle class="dot" cx="452" cy="460" r="3"/><text x="586" y="466" class="a">FLATTENED BACK</text><text x="586" y="486">BENIGN DIFFERENCE</text></g>'+
   '<g id="csL4"><path class="ld" d="M'+(cx+4)+' 360H576"/><circle class="dotr" cx="'+(cx+4)+'" cy="360" r="3"/><text x="586" y="356" class="r">SAGITTAL SUTURE</text><text x="586" y="376">FUSED TOO EARLY</text>'+
    '<path class="ld" d="M440 236L576 196"/><circle class="dot" cx="440" cy="236" r="3"/><text x="586" y="192">LONG, NARROW HEAD</text></g>'+
   '<g id="csL5"><path class="rt" id="csRt" d="M410 520 C470 560 560 560 640 500"/><path class="pin" d="M640 498c-12-14-20-24-20-34a20 20 0 0 1 40 0c0 10-8 20-20 34z"/><path d="M640 456v16M632 464h16" style="stroke:#fff;stroke-width:2;fill:none"/>'+
    '<text x="640" y="538" text-anchor="middle" class="a">ACPA-APPROVED</text><text x="640" y="558" text-anchor="middle">CRANIOFACIAL TEAM</text></g>'+
  '</svg>';
}
function storyDraw(svg){
  var E={h:$("#csH",svg),hc:$("#csHc",svg),tr:$("#csTr",svg),sut:$("#csSut",svg),sag:$("#csSag",svg),ph:$("#csPh",svg),e1:$("#csE1",svg),e2:$("#csE2",svg),ns:$("#csNose",svg),
    L:[$("#csL1",svg),$("#csL2",svg),$("#csL3",svg),$("#csL4",svg),$("#csL5",svg)],rt:$("#csRt",svg)};
  var SG=E.sag.getTotalLength(),RT=E.rt.getTotalLength(),last="";
  return function(p,b){
    if(!E.h.isConnected)return;
    svg.style.opacity=(.25+.75*b).toFixed(3);
    var flat=seg(p,.42,.52)*(1-seg(p,.6,.68)),sc=seg(p,.62,.74);
    var W=150*(1-.2*sc),L=190*(1+.1*sc),d=csHead(W,L,flat);
    if(d!==last){last=d;E.h.setAttribute("d",d);E.hc.setAttribute("d",d);E.tr.setAttribute("d",d)}
    var cx=CS_C[0],cy=CS_C[1];
    E.e1.setAttribute("d","M"+(cx-W+4)+" "+(cy-34)+" C"+(cx-W-22)+" "+(cy-30)+" "+(cx-W-22)+" "+(cy+20)+" "+(cx-W+4)+" "+(cy+26)+"Z");
    E.e2.setAttribute("d","M"+(cx+W-4)+" "+(cy-34)+" C"+(cx+W+22)+" "+(cy-30)+" "+(cx+W+22)+" "+(cy+20)+" "+(cx+W-4)+" "+(cy+26)+"Z");
    var ny=cy-L*1.03;E.ns.setAttribute("d","M"+(cx-16)+" "+(ny+8)+" C"+(cx-12)+" "+(ny-16)+" "+(cx+12)+" "+(ny-16)+" "+(cx+16)+" "+(ny+8)+"Z");
    E.sut.setAttribute("transform","translate("+cx+" "+cy+") scale("+(W/150).toFixed(4)+" "+(L/190).toFixed(4)+") translate("+(-cx)+" "+(-cy)+")");
    E.sag.setAttribute("transform",E.sut.getAttribute("transform"));
    E.sag.style.strokeDasharray=SG;E.sag.style.strokeDashoffset=(SG*(1-seg(p,.64,.76))).toFixed(1);
    var trA=seg(p,.22,.36),TL=E.tr.getTotalLength();E.tr.style.strokeDasharray=TL;E.tr.style.strokeDashoffset=(TL*(1-trA)).toFixed(1);E.tr.style.opacity=(1-.55*seg(p,.42,.5)).toFixed(3);
    E.ph.style.opacity=(seg(p,0,.06)*(1-seg(p,.16,.22))).toFixed(3);
    var W5=[[-.1,0,.16,.22],[.22,.3,.36,.42],[.42,.5,.56,.62],[.62,.72,.78,.84],[.82,.9,2,3]];
    E.L.forEach(function(g,k){var q=W5[k];g.style.opacity=(seg(p,q[0],q[1])*(1-seg(p,q[2],q[3]))).toFixed(3)});
    E.rt.style.strokeDasharray="3 6";E.rt.style.strokeDashoffset="0";E.rt.style.opacity=seg(p,.84,.94).toFixed(3);
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
# Firelight colours that live outside the regions: map them onto the CranioSure palette (BG)
for a, b in [(".rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}", ".rail span{color:#8f9bc6}.rail span::before{background:var(--ink2);border-color:#5a679e}"),
             (".scene text{fill:#c2b6a4}", ".scene text{fill:#c4cde8}"),
             (".fieldbg{background:#120e0b}", ".fieldbg{background:#0b1451}"),
             ("calc(34svh - 130px)", "calc(34svh - 34px)"), ("rgba(18,14,11,.12)", "rgba(11,20,81,.12)"), ("#8a2a1a", "#c5050c")]:
    if a not in out: raise SystemExit("missing: " + a)
    out = out.replace(a, b)
left = [k for k in re.findall(r"<R:([a-z0-9]+)>", out) if k not in R]
if left:
    print("kept from firelight:", sorted(set(left)))
import re as _bo; out = _bo.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update 1: nav items open build-out pages (_kit/lib/buildout.js)
(HERE / "craniosure.src.html").write_text(out)
print("wrote", HERE / "craniosure.src.html", len(out))
