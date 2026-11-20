#!/usr/bin/env python3
"""Neurospheric home-only build. Base: the regions of owictechnologies.src.html (itself assembled from firelight's regions);
content, palette, hero field and story are Neurospheric's own. Run: python3 _kit/src/neurospheric.assemble.py
then: node _kit/build.js _kit/src/neurospheric.src.html neurospheric/index.html"""
import re, os
HERE = os.path.dirname(os.path.abspath(__file__))
SCR = os.environ.get("NS_SCR", "/tmp/claude-0/-home-user-harvardsites/81960e8e-28d4-522c-8897-f1f5073decc3/scratchpad/ns")
src = open(os.path.join(HERE, "owictechnologies.src.html")).read()
LOGO = "data:image/webp;base64," + open(os.path.join(SCR, "logo.b64")).read().strip()
MARK = "data:image/webp;base64," + open(os.path.join(SCR, "mark.b64")).read().strip()

R = {}
R["meta"] = '''<title>Neurospheric — neurosurgical technology for deep-seated brain surgery, Perth</title>
<meta name="description" content="Neurospheric, a Perth neurosurgical technology start-up founded by neurosurgeon Assoc. Prof. Hari Ramakonar and engineer Roshan De Silva, develops minimally invasive surgical tools for drug-resistant epilepsy, brain tumours and other deep-seated conditions.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0b0c18">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230b0c18'/%3E%3Cellipse cx='30' cy='30' rx='13' ry='11' fill='%230f81c7'/%3E%3Ccircle cx='48' cy='24' r='5' fill='%230f81c7'/%3E%3Ccircle cx='46' cy='42' r='6' fill='%230f81c7'/%3E%3Ccircle cx='24' cy='50' r='5' fill='%230f81c7'/%3E%3Ccircle cx='14' cy='36' r='4' fill='%230f81c7'/%3E%3Ccircle cx='20' cy='14' r='4' fill='%230f81c7'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Hanken Grotesk:300,400,500,300i; Inter:400,500; IBM Plex Mono:400,500*/"

R["root"] = ''':root{
  --ink:#0b0c18;--inkr:11,12,24;--boner:242,244,247;--accr:61,155,233;--ink2:#0f1120;--ink3:#161a2c;--deep:#07080f;
  --bone:#f2f4f7;--bone2:#e7eaf0;--bone3:#d6dbe4;
  --stone:#9ca3b3;--stoneD:#535b6c;
  --acc:#0f81c7;--accL:#3d9be9;--accD:#0a6aa6;--teal:#9ca3b3;--tealL:#c9ced8;
  --hair:rgba(242,244,247,.14);--hairD:rgba(11,12,24,.16);
  --disp:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Hanken Grotesk',system-ui,sans-serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,monospace;
  --deco:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = '''.fieldbg{position:fixed;inset:0;z-index:0;background:#0b0c18}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = '''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand img{height:34px;width:auto;display:block}
@media (max-width:420px){.brand img{height:29px}}'''

R["scenecss"] = '''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:16ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa1b2;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5f6679;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.03em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .neat{fill:none;stroke:rgba(var(--boner),.18);stroke-width:1}
.scene .sk{fill:none;stroke:rgba(var(--boner),.78);stroke-width:1.3;stroke-linejoin:round}
.scene .skh{fill:url(#nsHt);stroke:none}
.scene .cx{fill:rgba(61,155,233,.05);stroke:rgba(var(--boner),.86);stroke-width:1.4;stroke-linejoin:round;stroke-linecap:round}
.scene .gy{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1;stroke-linecap:round}
.scene .wm{fill:none;stroke:rgba(var(--boner),.24);stroke-width:.9;stroke-dasharray:3 4}
.scene .vn{fill:rgba(var(--inkr),.9);stroke:rgba(var(--boner),.6);stroke-width:1}
.scene .mid{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1}
.scene .tg{fill:rgba(61,155,233,.16);stroke:var(--accL);stroke-width:1.4}
.scene .tgx{fill:none;stroke:var(--accL);stroke-width:1}
.scene .tgr{fill:none;stroke:rgba(61,155,233,.5);stroke-width:1;stroke-dasharray:2 4}
.scene .rod{fill:none;stroke:rgba(var(--boner),.62);stroke-width:5;stroke-linecap:butt}
.scene .rodc{fill:none;stroke:var(--ink2);stroke-width:2.4}
.scene .trj{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1.1;stroke-dasharray:6 6}
.scene .crs{fill:rgba(var(--boner),.07);stroke:none}
.scene .apth{fill:none;stroke:var(--accL);stroke-width:1.3;stroke-dasharray:5 5;stroke-linecap:round}
.scene .lnk{fill:var(--ink2);stroke:var(--accL);stroke-width:1.3}
.scene .key{fill:none;stroke:var(--accL);stroke-width:2.2}
.scene .ok{fill:none;stroke:var(--accL);stroke-width:1.2}
.scene .ld2{fill:none;stroke:rgba(var(--boner),.45);stroke-width:.9}
.scene .tbl{fill:none;stroke:rgba(var(--boner),.35);stroke-width:.9}
.scene text{font-family:var(--mono);font-weight:500;font-size:12.5px;letter-spacing:.12em;fill:#d7dbe4}
.scene text.a{fill:var(--accL)}
.scene text.t{font-size:10.5px;letter-spacing:.14em;fill:rgba(var(--boner),.62)}
.scene text.t.c{font-size:11px;fill:rgba(var(--boner),.82)}
.scene text.t.s{fill:rgba(var(--boner),.45)}
.scene svg.mob text{font-size:22px;letter-spacing:.06em}.scene svg.mob .neat{display:none}.scene svg.mob text.a{font-size:26px}
.scene svg.mob text.t,.scene svg.mob text.t.c{font-size:23px;letter-spacing:.04em}
.scene svg.mob .tb{display:none}
@media (max-width:1024px){.scene .tb{display:none}}'''

R["seen"] = '<script>try{if(sessionStorage.getItem("nsph-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'

R["pre"] = '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <img class="plogo" src="''' + LOGO + '''" alt="">
  </div>
  <span class="lab pl">Neurosurgical technology · Perth</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Neurospheric, home"><img src="' + LOGO + '" alt="Neurospheric" width="640" height="121"></a>'

ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
R["navmenu"] = '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/technology">Technology</a>
    <a class="nl ul" href="#/focus">Focus</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact ''' + ARRS + '''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/technology">Technology</a></li>
    <li><a href="#/focus">Focus</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Based in</span><br>Nedlands, Western Australia</div>
    <div><span class="lab">Company</span><br>Neurospheric Pty Ltd</div>
  </div>
</div>'''

R["xc"] = '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Neurospheric</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Neurospheric";\nvar PK="nsph";'

R["content"] = r'''var FONTS=['300 1em "Hanken Grotesk"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','italic 300 1em "Hanken Grotesk"','400 1em "Inter"','500 1em "Inter"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var WEB="https://www.neurospheric.com/";
var LI_H="https://www.linkedin.com/in/hari-ramakonar-56a19829/";
var LI_R="https://www.linkedin.com/in/roshan-de-silva-04b97b143/";
var BOOST="https://www.wa.gov.au/organisation/department-of-energy-and-economic-diversification/biomedical-industry-innovation-booster-grant-2025-recipients";
/* facts: neurospheric.com (home, about, blog) fetched 2026-11-20; WA Government Biomedical Industry Innovation Booster Grant 2025 recipients
   (updated 2025-11-14); WA Government grant recipients announcement 2026-04-08; Curtin University news 2025-06-27; ABN Lookup 48 673 261 473 */
var SYS=[["Precision","Safer in delicate regions","Tools that enhance surgical precision and minimise risk where the brain is most delicate."],
 ["Flexibility","Minimally invasive","Minimally invasive techniques that combine precision and flexibility, for the best possible patient outcomes."],
 ["Compassion","Built with surgeons","Inspired by the challenges neurosurgeons face: engineers, medical professionals and innovators working together."]];
var FOCUS=[
 ["Epilepsy","Drug-resistant epilepsy","Epilepsy that medication does not control, where surgery deep in the brain can be part of care."],
 ["Oncology","Brain tumour","Tumours in delicate brain regions, where minimally invasive resection could lower the risk to healthy tissue."],
 ["Deep-seated","Other deep-seated conditions","Other conditions deep inside the brain that require surgery, and that today’s straight-line instruments reach with difficulty."]];
var FOUNDERS=[
 {name:"Assoc. Prof. Hari Ramakonar",title:"Co-Founder, Co-CEO & Chief Medical Officer",img:"hari.webp",li:LI_H,
  bio:"A Western Australian, fellowship-trained neurosurgeon and UWA Medicine graduate with Honours. Fellowships in complex spine surgery (University of Toronto), adult and paediatric epilepsy surgery (University of Western Ontario) and paediatric neurosurgery (Royal Children’s Hospital, Melbourne). His interests include brain and spinal tumours, epilepsy surgery, deep brain stimulation and neurotrauma."},
 {name:"Roshan De Silva",title:"Co-Founder, Co-CEO & Chief Technical Officer",img:"roshan.webp",li:LI_R,
  bio:"An engineer rooted in mechanical engineering, robotics, control systems, and system design and integration, with deep experience in project management, IT and networking. He also brings business consulting, strategic planning and new product management to the company."}];
var TEAM=[
 {g:"Team",name:"Stephen Alfrich",title:"Business Development Manager",sum:"30+ years in medical device sales and business development, including Resurgent Medical, Singular Health and PA Medical."},
 {g:"Team",name:"Dr Greydon Gilmore",title:"Entrepreneur in Residence",sum:"Appointed under the WA Government’s Entrepreneur in Residence Scheme, announced April 2026."},
 {g:"Team",name:"Glen Ross",title:"Advisor",sum:"State Sales Manager at Lifehealthcare."}];
var NEWS=[
 ["Apr 2026","WA Government names Neurospheric a recipient of the Entrepreneur in Residence Scheme, with Dr Greydon Gilmore","WA Government","https://www.wa.gov.au/government/announcements/meet-the-recipients-of-key-health-and-medical-life-sciences-grants-0"],
 ["Nov 2025","“Smart Neurosurgery: Adaptive Robotic Morphing Technology to Revolutionise Brain Surgery” awarded a Biomedical Industry Innovation Booster Grant","WA Government",BOOST],
 ["Jun 2025","An iPREP Biodesign internship with Neurospheric builds a proof of concept for minimally invasive tumour resection in delicate brain regions","Curtin University","https://www.curtin.edu.au/news/oasis-news/iprep-internship-opens-the-door-from-radio-astronomy-to-neurosurgical-devices/"],
 ["Apr 2024","Making neurological interventions safer and more effective","Neurospheric","https://www.neurospheric.com/post/making-neurological-interventions-safer-and-more-effective"]];
var SHEETS=[];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function focusRows(){return '<ul class="pfr path nsf">'+FOCUS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function founders(){return '<div class="pp">'+FOUNDERS.map(function(p){return '<article><div class="ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy" decoding="async"></div><div>'+
  '<h3>'+esc(p.name)+'</h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.bio)+'</p><div class="cr"><a class="ul" href="'+p.li+'" target="_blank" rel="noopener">LinkedIn ↗</a></div></div></article>'}).join("")+'</div>'}
function team(){return '<div class="mh nst"><div class="mh-group"><p class="mh-label">Team and advisors</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neurosurgical technology<span class="nomob"> · Perth, Western Australia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precise tools for</span><span class="l">deep-seated</span><span class="l"><em>brain surgery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Founded by a neurosurgeon and a robotics engineer, Neurospheric is developing minimally invasive surgical tools for drug-resistant epilepsy, brain tumours and other deep-seated conditions that require surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our approach '+ARR+'</a><a class="btn" href="#/team">Meet the founders</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why we exist</span>'+
   '<h2 class="txt" id="mani">Neurosurgery has not significantly changed in 40 years. <b class="w0">Neurospheric was founded to change that, combining state-of-the-art technology with real-world surgical needs.</b> <em>Precision in healing, compassion in service.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40 yrs</span><span class="k">In which, the founders say, neurosurgery has not significantly changed</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$40K</span><span class="k">WA Biomedical Industry Innovation Booster Grant for adaptive robotic morphing technology, November 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Founders: a fellowship-trained neurosurgeon and a robotics and systems engineer</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One deep target, <em>a better way in.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Straight line</span><span>Adaptive</span><span>Outcome</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The target.</h2><p>Drug-resistant epilepsy, brain tumours and other deep-seated conditions lie deep inside the brain, beneath tissue that matters.</p></article>'+
     '<article class="step"><h2>The straight line.</h2><p>Neurosurgery has not significantly changed in 40 years. Rigid instruments travel in straight lines, so geometry sets the path to a deep target.</p></article>'+
     '<article class="step"><h2>The adaptive path.</h2><p>Neurospheric’s funded project, Smart Neurosurgery, develops adaptive robotic morphing technology: instruments that change their shape. Drawn here as a schematic.</p></article>'+
     '<article class="step"><h2>The outcome.</h2><p>Minimally invasive techniques that combine precision and flexibility, to minimise risk and give patients the best possible outcome.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="focus" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Focus</span><h2 class="d2 split">Where surgery <em>is hardest.</em></h2></div><p data-r>Neurospheric is dedicated to transforming care for conditions that sit deep in the brain and require surgery.</p></div>'+
   focusRows()+
   '<p class="ack" data-r>“Smart Neurosurgery: Adaptive Robotic Morphing Technology to Revolutionise Brain Surgery” is supported by the Western Australian Government’s Biomedical Industry Innovation Booster Grant (2025 recipients).</p>'+
   '<div class="credit nsc"><span class="lab" data-r>Supported by</span><p data-r><span>CERI</span><i>·</i><span>Perth Biodesign</span><i>·</i><span>Perron Institute</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A neurosurgeon <em>and an engineer.</em></h2></div><p data-r>Inspired by the challenges neurosurgeons face, the founders bring the operating theatre and the engineering bench together.</p></div>'+
   founders()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Perth, <em>for the theatre.</em></h2></div><p data-r>Grants, programmes and updates from Neurospheric.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Help move neurosurgery <em>forward.</em></h2>'+
   '<p class="sub" data-r>Neurospheric works with surgeons, research partners and supporters in Western Australia. To start a conversation, reach the founders directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+LI_H+'" target="_blank" rel="noopener">Hari Ramakonar '+ARR+'</a><a class="btn" href="'+LI_R+'" target="_blank" rel="noopener">Roshan De Silva '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span class="bl">Nedlands</span><span class="bl">Western Australia 6009</span></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r><span class="bl">Neurospheric Pty Ltd</span><span class="bl">ABN 48 673 261 473</span></p></div>'+
    '<div><span class="lab" data-r>Founders</span><p data-r><a class="ul" href="'+LI_H+'" target="_blank" rel="noopener">Hari Ramakonar on LinkedIn</a></p><p data-r><a class="ul" href="'+LI_R+'" target="_blank" rel="noopener">Roshan De Silva on LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Nedlands<br>Western Australia 6009</div>'+
   '<div class="c"><span class="lab">Company</span>Neurospheric Pty Ltd<br>ABN 48 673 261 473</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/focus">Focus</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Founders</span><a class="ul" href="'+LI_H+'" target="_blank" rel="noopener">Hari Ramakonar</a><br><a class="ul" href="'+LI_R+'" target="_blank" rel="noopener">Roshan De Silva</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Hanken Grotesk\',system-ui,sans-serif;font-weight:500;font-size:60px;letter-spacing:-.01em">Neurospheric</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Neurospheric Pty Ltd</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",focus:"focus",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Neurospheric — neurosurgical technology for deep-seated brain surgery, Perth",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();'''

R["field"] = r'''/* ================= HERO FIELD (HOME_BRIEF update, option b): a real photograph of the subject, from Pexels (free licence):
   "Surgeons Performing Surgery in Operating Room" by Fernando Capetillo, https://www.pexels.com/photo/surgeons-performing-surgery-in-operating-room-40482075/
   Graded in hero.webp: highlights (theatre lamps, gloves) compressed, exposure lowered, shadows pulled to the site's navy ink, so the
   photo's own dark theatre melts into the page (DJ). It sits right of ~40% on desktop under a deep ink wash over the headline (DI);
   a very slow Ken Burns drift, no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b0c18",K="11,12,24";var IW=2400,IH=3600,EX=.56,EY=.42;
  function A(a){return "rgba("+K+","+a+")"}
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.52,w*1.0):h;
    var ih=mob?U*1.25:Math.max(h*1.3,w*.56),iw=ih*(IW/IH);
    if(mob&&iw<w*1.1){iw=w*1.1;ih=iw*IH/IW}
    var kx=mob?w*.56:side+cw*.74,ky=mob?U*.56:h*.5;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX-k*G.iw*.01,y=G.ky-dh*EY-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      var fe=dw*.22;
      if(x>0){c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x)+1,h)}
      var eg=c.createLinearGradient(x,0,x+fe,0);eg.addColorStop(0,A(1));eg.addColorStop(1,A(0));c.fillStyle=eg;c.fillRect(Math.max(0,x),0,fe+1,h);
      var xr=x+dw;var rg=c.createLinearGradient(xr-fe*.7,0,xr,0);rg.addColorStop(0,A(0));rg.addColorStop(1,A(1));c.fillStyle=rg;c.fillRect(xr-fe*.7,0,fe*.7+1,h);if(xr<w){c.fillStyle=BG;c.fillRect(Math.floor(xr)-1,0,w-xr+2,h)}
      if(y>0){c.fillStyle=BG;c.fillRect(0,0,w,Math.ceil(y)+1)}
      var yb=y+dh;if(yb<h){c.fillStyle=BG;c.fillRect(0,Math.floor(yb)-1,w,h-yb+2)}
      var bfe=dh*.12;var bg2=c.createLinearGradient(0,yb-bfe,0,yb);bg2.addColorStop(0,A(0));bg2.addColorStop(1,A(1));c.fillStyle=bg2;c.fillRect(0,yb-bfe,w,bfe+1);
      var rv=c.createLinearGradient(w-Math.max(90,w*.1),0,w,0);rv.addColorStop(0,A(0));rv.addColorStop(1,A(.9));c.fillStyle=rv;c.fillRect(w-Math.max(90,w*.1),0,Math.max(90,w*.1)+1,h);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,A(1));lv.addColorStop(.6,A(.92));lv.addColorStop(.84,A(.5));lv.addColorStop(1,A(0));c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.26);tv.addColorStop(0,A(.78));tv.addColorStop(1,A(0));c.fillStyle=tv;c.fillRect(0,0,w,h*.26);
        var bv=c.createLinearGradient(0,h*.64,0,h);bv.addColorStop(0,A(0));bv.addColorStop(1,A(.92));c.fillStyle=bv;c.fillRect(0,h*.64,w,h*.36+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,A(.78));tv2.addColorStop(1,A(0));c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.66,0,G.bh);mv.addColorStop(0,A(0));mv.addColorStop(1,A(1));c.fillStyle=mv;c.fillRect(0,G.bh*.66,w,G.bh*.34+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();'''

R["story"] = r'''/* the story scene (BL/BY/DB): ONE engraved coronal section of the head (skull, cortex with its folds, white matter, ventricles),
   kept on screen throughout; each step adds one thing: a deep-seated target; the straight line a rigid instrument must follow;
   an adaptive, shape-changing path (schematic: the funded project is "adaptive robotic morphing technology", no design is public);
   a small, minimally invasive opening with the target reached. Anatomy is schematic. */
function G2(x,m,w){return Math.exp(-Math.pow((x-m)/w,2))}
function rB(a,gy){/* coronal outline radius factor at angle a (0 = right, +PI/2 = down) */
  var d=a*180/Math.PI;while(d>180)d-=360;while(d<-180)d+=360;
  var r=1-.2*G2(d,90,24)-.07*G2(d,-90,5)-.055*G2(d,28,6)-.055*G2(d,152,6)+.03*G2(d,55,14)+.03*G2(d,125,14);
  if(gy)r+=.017*Math.sin(a*27)+.007*Math.sin(a*41+1.3);
  return r}
function cPt(cx,cy,rx,ry,a,gy,k){var r=rB(a,gy)*(k||1);return [cx+Math.cos(a)*rx*r,cy+Math.sin(a)*ry*r]}
function brainPath(cx,cy,rx,ry,gy,a0,a1){var d="",N=260;a0=a0==null?-Math.PI/2:a0;a1=a1==null?a0+Math.PI*2:a1;
  for(var i=0;i<=N;i++){var q=cPt(cx,cy,rx,ry,a0+(a1-a0)*i/N,gy);d+=(i?"L":"M")+q[0].toFixed(1)+" "+q[1].toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),LX=mob?560:584;
  var cx=290,cy=268,TX=cx-62,TY=cy+70,RX=214,RY=190;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"36 24 740 512":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><pattern id="nsHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(242,244,247,.2)" stroke-width="1"/></pattern></defs>';
  /* skull: a band open at the base for the brainstem */
  var A0=Math.PI/2+.16,A1=Math.PI/2-.16+Math.PI*2;
  function sk(k){var d="",N=200;for(var i=0;i<=N;i++){var a=A0+(A1-A0)*i/N,dg=a*180/Math.PI%360;var r=1-.06*G2(dg,90,30)-.06*G2(dg,450,30);d+=(i?"L":"M")+(cx+Math.cos(a)*(RX+30)*k*r).toFixed(1)+" "+(cy+8+Math.sin(a)*(RY+34)*k*r).toFixed(1)}return d}
  var so=sk(1),si=sk(.94);
  var band=so+"L"+si.slice(1).split("L").reverse().join("L")+"Z";
  var ctx=brainPath(cx,cy,RX,RY,true)+"Z",wm=brainPath(cx,cy+8,RX*.74,RY*.7,false)+"Z";
  /* sulci: folds running in along the inward normal, irregular depths */
  var sul="",n=0;for(var i=0;i<40;i++){var a=-Math.PI/2+.1+i/40*(Math.PI*2-.2),dg=(a*180/Math.PI+360)%360;if(dg>62&&dg<118)continue;
    var dep=[.08,.12,.06,.1,.14,.07][i%6],p0=cPt(cx,cy,RX,RY,a,true,.995),p1=cPt(cx,cy,RX,RY,a+(i%2?.03:-.03),false,1-dep),pm=cPt(cx,cy,RX,RY,a+(i%2?-.02:.02),false,1-dep*.5);
    sul+="M"+p0[0].toFixed(1)+" "+p0[1].toFixed(1)+"Q"+pm[0].toFixed(1)+" "+pm[1].toFixed(1)+" "+p1[0].toFixed(1)+" "+p1[1].toFixed(1)}
  /* sylvian fissures */
  [28,152].forEach(function(dg){var a=dg*Math.PI/180,p0=cPt(cx,cy,RX,RY,a,false,.95),p1=cPt(cx,cy,RX,RY,a+(dg<90?.12:-.12),false,.62);sul+="M"+p0[0].toFixed(1)+" "+p0[1].toFixed(1)+"Q"+((p0[0]+p1[0])/2).toFixed(1)+" "+((p0[1]+p1[1])/2-10).toFixed(1)+" "+p1[0].toFixed(1)+" "+p1[1].toFixed(1)});
  var mid="M"+cx+" "+(cy-RY*.93)+"C"+(cx-3)+" "+(cy-140)+" "+(cx+3)+" "+(cy-110)+" "+cx+" "+(cy-78);
  var cc="M"+(cx-80)+" "+(cy-62)+"Q"+cx+" "+(cy-98)+" "+(cx+80)+" "+(cy-62);
  function vent(sg){return "M"+(cx+sg*5)+" "+(cy-70)+"C"+(cx+sg*40)+" "+(cy-80)+" "+(cx+sg*58)+" "+(cy-56)+" "+(cx+sg*48)+" "+(cy-38)+"C"+(cx+sg*36)+" "+(cy-28)+" "+(cx+sg*16)+" "+(cy-40)+" "+(cx+sg*5)+" "+(cy-30)+"Z"}
  var stem="M"+(cx-26)+" "+(cy+RY*.8)+"C"+(cx-24)+" "+(cy+215)+" "+(cx-20)+" "+(cy+250)+" "+(cx-18)+" "+(cy+280)+"M"+(cx+26)+" "+(cy+RY*.8)+"C"+(cx+24)+" "+(cy+215)+" "+(cx+20)+" "+(cy+250)+" "+(cx+18)+" "+(cy+280);
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="skh" d="'+band+'"/><path class="sk sD" d="'+so+'"/><path class="sk sD" d="'+si+'"/>';
  g+='<path class="cx sD" d="'+ctx+'"/><path class="gy sD" d="'+sul+'"/><path class="wm" d="'+wm+'"/>';
  g+='<path class="mid sD" d="'+mid+cc+stem+'"/><path class="vn" d="'+vent(-1)+'"/><path class="vn" d="'+vent(1)+'"/>';
  if(innerWidth>1024)g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">CORONAL SECTION · SCHEMATIC</text><text x="558" y="538" class="t s">NEUROSPHERIC</text></g>';
  g+='</g>';
  /* 1 the target, deep and medial, below the ventricle */
  g+='<g id="sc1"><circle class="tgr dr" cx="'+TX+'" cy="'+TY+'" r="28"/><circle class="tg" cx="'+TX+'" cy="'+TY+'" r="14"/><path class="tgx dr" d="M'+(TX-22)+' '+TY+'h44M'+TX+' '+(TY-22)+'v44"/>'+
     '<path class="ld2 dr" d="M'+(TX+16)+' '+(TY+14)+'L'+(cx+40)+' '+(cy+150)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(cy+154)+'" class="t c">'+(mob?"TARGET":"DEEP-SEATED TARGET")+'</text>'+
     '<path class="ld2 dr" d="M'+(cx+196)+' '+(cy-90)+'L'+(cx+226)+' '+(cy-112)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(cy-108)+'" class="t c">CORTEX</text>'+
     '<path class="ld2 dr" d="M'+(cx+50)+' '+(cy-50)+'L'+(cx+120)+' '+(cy-50)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(cy-46)+'" class="t c">VENTRICLE</text>'+
     '<text x="40" y="530" class="a">THE TARGET</text></g>';
  /* 2 the straight line: a rigid shaft from the crown straight down, through what lies in between */
  var EX0=cx-20,EY0=cy-RY-40,dx=TX-EX0,dy=TY-EY0,L=Math.sqrt(dx*dx+dy*dy),nx=-dy/L*8,ny=dx/L*8;
  var crs="M"+(EX0+nx)+" "+(EY0+ny)+"L"+(TX+nx)+" "+(TY+ny)+"L"+(TX-nx)+" "+(TY-ny)+"L"+(EX0-nx)+" "+(EY0-ny)+"Z";
  g+='<g id="sc2"><path class="crs" d="'+crs+'"/><path class="trj dr" d="M'+EX0+' '+EY0+'L'+TX+' '+TY+'"/>'+
     '<path class="rod dr" d="M'+(EX0-dx*.1)+' '+(EY0-dy*.1)+'L'+(TX-dx*.16)+' '+(TY-dy*.16)+'"/>'+
     '<path class="ld2 dr" d="M'+(EX0+6)+' '+(EY0+14)+'L'+(cx+60)+' '+(cy-170)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(cy-166)+'" class="t c">'+(mob?"STRAIGHT":"RIGID, STRAIGHT PATH")+'</text>'+
     '<text x="40" y="530" class="a">THE STRAIGHT LINE</text></g>';
  /* 3 the adaptive path: a jointed, shape-changing instrument that bends in from the side, under the ventricle (schematic) */
  var P0=[cx-206,cy-150],P1=[cx-100,cy-96],P2=[cx-196,cy+70],P3=[TX-14,TY+4];
  function bz(t){var u=1-t;return [u*u*u*P0[0]+3*u*u*t*P1[0]+3*u*t*t*P2[0]+t*t*t*P3[0],u*u*u*P0[1]+3*u*u*t*P1[1]+3*u*t*t*P2[1]+t*t*t*P3[1]]}
  var ap="M"+P0[0]+" "+P0[1]+"C"+P1.join(" ")+" "+P2.join(" ")+" "+P3.join(" ");
  var lk="";for(var j=1;j<=12;j++){var q=bz(.06+j*.075);lk+='<circle class="lnk" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="4.2"/>'}
  var qm=bz(.62);
  g+='<g id="sc3"><path class="apth dr" d="'+ap+'"/>'+lk+
     '<path class="ld2 dr" d="M'+(qm[0]+8)+' '+(qm[1]+10)+'L'+(cx-60)+' '+(cy+118)+'L'+(cx+40)+' '+(cy+118)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(cy+114)+'" class="t c">'+(mob?"ADAPTIVE":"ADAPTIVE PATH")+'</text>'+(mob?"":'<text x="'+LX+'" y="'+(cy+132)+'" class="t c">(SCHEMATIC)</text>')+''+
     '<text x="40" y="530" class="a">THE ADAPTIVE PATH</text></g>';
  /* 4 the outcome: a small opening, the target reached */
  var kp=bz(.13);
  g+='<g id="sc4"><circle class="key dr" cx="'+kp[0].toFixed(1)+'" cy="'+kp[1].toFixed(1)+'" r="9"/><circle class="ok dr" cx="'+TX+'" cy="'+TY+'" r="38"/>'+
     '<path class="ld2 dr" d="M'+(kp[0]+6)+' '+(kp[1]-8)+'L'+(cx-150)+' 40H'+(LX-8)+'"/><text x="'+LX+'" y="44" class="t c">'+(mob?"OPENING":"SMALL OPENING")+'</text>'+
     '<text x="'+LX+'" y="'+(cy+174)+'" class="t c" style="fill:var(--accL)">REACHED</text>'+
     '<text x="40" y="530" class="a">THE OUTCOME</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .skh, #scBase .wm, #scBase .vn",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    lk:$$("#sc3 .lnk",svg),crs:$("#sc2 .crs",svg)};
  /* the apth/trj dashes are drawn by dashoffset; keep their pattern by masking with a clip instead: simpler, fade them in */
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){var el=a[0];if(el.classList.contains("apth")||el.classList.contains("trj")){el.style.strokeDasharray="";el.style.opacity=v.toFixed(3);return}el.style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* the straight line steps back once the adaptive path arrives */
    E.g[1].style.opacity=(b*(s[1]>0?1:0)*(1-.62*s[2])).toFixed(3);
    if(E.crs)E.crs.style.opacity=s[1].toFixed(3);
    E.lk.forEach(function(el,j){var v=Math.max(0,Math.min(1,s[2]*12-j*.9));el.style.opacity=v.toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}'''

EXTRA_CSS = r'''
/* ===== Neurospheric: their live site is white and near-black (#161616) with the logo's blue (#0f81c7, sampled from the logo PNG) and a lighter
   blue #3d9be9 from its CSS; ink here is the navy-black of the hero photograph's theatre so the photo melts into the page. Hanken Grotesk / Inter / IBM Plex Mono. ===== */
.rail span{color:#9aa1b2}.rail span::before{background:var(--ink2);border-color:#5f6679}
.scene text{fill:#d7dbe4}.scene text.a{fill:var(--accL)}
@media (max-width:860px){.fieldbg{background:#0b0c18}}
.hero-h{font-size:clamp(40px,5.2vw,94px)}
.lab{font-weight:500}
.credit.nsc{margin-top:clamp(40px,4.4vw,64px)}
.credit.nsc .lab{color:var(--accD)}
.credit.nsc p i{color:var(--acc)}
.pfr.nsf li{grid-template-columns:minmax(0,1.4fr) minmax(0,3fr) minmax(0,6.6fr)}
@media (max-width:860px){.pfr.nsf li{grid-template-columns:1fr;row-gap:6px}.pfr.nsf .tg{padding-top:0}}
#team .pp{margin-bottom:clamp(64px,7vw,104px)}
#team .pp .ph img{object-position:50% 20%}
#team .pp .cr a{color:var(--accL)}
.nst .mh-label{color:var(--accL)}
.ack{border-left-color:var(--acc)}
.mani .txt b{color:var(--bone)}
.mani .txt em{color:var(--accL)}
'''

def sub(name, text):
    global src
    pat = re.compile(r'(<R:' + name + r'>(?:\*/|-->))(.*?)((?:/\*|<!--)</R:' + name + r'>)', re.S)
    m = pat.search(src)
    if not m: raise SystemExit("region not found: " + name)
    src = src[:m.start(2)] + text + src[m.end(2):]

for k, v in R.items(): sub(k, v)
i = src.rfind("</style>")
src = src[:i] + EXTRA_CSS + src[i:]
# remaining OWiC strings outside regions
src = src.replace("/* ===== OWiC Technologies: their live site", "/* ===== (base) their live site")
open(os.path.join(HERE, "neurospheric.src.html"), "w").write(src)
left = [l for l in src.split("\n") if re.search(r"owic|OWiC|SPECS", l)]
print("assembled; stray base strings:", len(left))
for l in left[:8]: print("  ", l[:160])
