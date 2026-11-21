#!/usr/bin/env python3
"""Assemble traqbeat.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/traqbeat.assemble.py && node build.js src/traqbeat.src.html ../traqbeat/index.html
Facts: _kit/dossiers/traqbeat.md. Palette: the live traqbeat.com (hero greens #00A907 / #007305, the device's orange housing,
near-black from the product film's studio ground). Hero and story stills: Traqbeat's own product film (images/tb_mia.mp4)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}
LOGO = (HERE / "traqbeat.logo.svgfrag").read_text().strip()

R["meta"] = r'''<title>Traqbeat — One wearable, wrist to chest</title>
<meta name="description" content="Traqbeat Technologies, Heraklion, Crete: a patented, convertible wearable worn as a wrist bracelet or a chest patch, for continuous and synchronous monitoring of vital signs with AI risk assessment, in and out of the clinic. CE marked.">
<meta name="theme-color" content="#0a0a0a">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2300a907'/%3E%3Cpath d='M20 44a14 14 0 0 1 0-24M28 38a6 6 0 0 1 0-12M44 20a14 14 0 0 1 0 24M36 26a6 6 0 0 1 0 12' fill='none' stroke='%23fff' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Raleway:300,400,500; IBM Plex Sans:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0a0a0a;--inkr:10,10,10;--boner:244,245,242;--accr:0,169,7;--ink2:#0a0a0a;--ink3:#151715;--deep:#050505;
  --bone:#f4f5f2;--bone2:#e9ebe6;--bone3:#d7dbd3;
  --stone:#a8aea6;--stoneD:#525a50;
  --acc:#00a907;--accL:#38cf3e;--accD:#007305;--org:#f07a20;
  --hair:rgba(244,245,242,.14);--hairD:rgba(10,10,10,.16);
  --disp:'Raleway',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Raleway',system-ui,sans-serif;
  --sans:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#0a0a0a,#0a0a0a)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.tqlogo{height:38px;width:auto;flex:none;display:block}
.brand svg.tqlogo path,.brand svg.tqlogo polygon{fill:currentColor}
.light-hdr .brand{color:var(--ink)}'''

STORYCSS = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa39a;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #6a736a;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(250px,33vh,330px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.2vw,38px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(76vh,700px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:var(--accL)}
'''

ADD = r'''/* ===== Traqbeat additions ===== */
.ftr .fcv{opacity:.16}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,4.6vw,94px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:12ch}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em,.hero .hero-h em{font-weight:400;font-style:normal!important;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em,.cta .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:#fff;border-color:var(--accD)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(50px,5vw,92px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
/* biomarkers: rows */
.bmk{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:clamp(32px,4vw,72px)}
.bmk-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);column-gap:var(--gap);align-items:baseline;padding:20px 0 22px;border-top:1px solid var(--hairD);position:relative}
.bmk-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.bmk-row:hover::after{transform:scaleX(1)}
.bmk-row h3{font-family:var(--disp);font-weight:400;font-size:clamp(22px,1.9vw,32px);line-height:1.1;letter-spacing:-.02em;margin:0}
.bmk-row .nm3{display:block;margin-top:8px;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD)}
.bmk-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:44ch}
@media (max-width:1024px){.bmk{grid-template-columns:1fr}}
@media (max-width:560px){.bmk-row{grid-template-columns:1fr;row-gap:10px}}
.ce{display:flex;flex-wrap:wrap;gap:10px 28px;align-items:center;margin-top:clamp(40px,4vw,64px);padding-top:18px;border-top:1px solid var(--hairD)}
.ce .tag{display:inline-block;font:500 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--accD);padding:6px 8px 5px}
.ce .lab{color:var(--stoneD)}
.caps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(64px,7vw,110px)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:24px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:400;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:38ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:900px){.caps{grid-template-columns:1fr;row-gap:40px}}
/* research projects */
.rd{list-style:none;margin:0;padding:0}
.rd-row{display:grid;grid-template-columns:minmax(0,2.2fr) minmax(0,3.8fr) minmax(0,4.2fr) minmax(0,2fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.rd-row:last-child{border-bottom:1px solid var(--hair)}
.rd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.rd-row:hover::after{transform:scaleX(1)}
.rd-row .yr{font:400 11px/1.6 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.rd-row h3{font-family:var(--disp);font-weight:400;font-size:clamp(22px,1.9vw,30px);line-height:1.12;letter-spacing:-.01em;margin:0}
.rd-row .nm3{display:block;margin-top:8px;font:400 13px/1.5 var(--sans);letter-spacing:0;color:var(--stone)}
.rd-row p{margin:0;color:var(--stone);font-size:15.5px;line-height:1.6}
.rd-row .meta{display:flex;flex-direction:column;gap:8px;align-items:flex-start}
.rd-row .meta a{color:var(--bone)}
.rd-row .tag{display:inline-block;font:500 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ink);background:var(--acc);padding:6px 8px 5px}
.rd-row .tag.o{background:var(--org)}
@media (max-width:1100px){.rd-row{grid-template-columns:minmax(0,1fr) minmax(0,3fr);row-gap:12px}.rd-row p{grid-column:2}.rd-row .meta{grid-column:2;flex-direction:row;flex-wrap:wrap;gap:8px 20px}}
@media (max-width:620px){.rd-row{grid-template-columns:1fr}.rd-row p,.rd-row .meta,.rd-row .rdh{grid-column:1}}
.sup{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px)}
.sup div{border-top:1px solid var(--hair);padding-top:16px}
.sup .lab{display:block;margin-bottom:10px;color:var(--accL)}
.sup p{margin:0;color:var(--stone);font-size:15.5px;max-width:36ch}
@media (max-width:900px){.sup{grid-template-columns:1fr;row-gap:28px}}
/* team: refined text-only */
.tmg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
.tm-p{border-top:1px solid var(--hairD);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:400;font-size:clamp(28px,2.5vw,42px);line-height:1.05;letter-spacing:-.025em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD);margin-bottom:18px}
.tm-p p{color:var(--stoneD);font-size:16px;line-height:1.6;margin:0;max-width:40ch}
@media (max-width:1024px){.tmg{grid-template-columns:1fr;row-gap:36px}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:400;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''
R["scenecss"] = STORYCSS + ADD

R["seen"] = r'''<script>try{if(sessionStorage.getItem("traqbeat-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M30 70a30 30 0 0 1 0-44M38 60a16 16 0 0 1 0-24M66 26a30 30 0 0 1 0 44M58 36a16 16 0 0 1 0 24"/></svg>
    <div class="wm"><span>TRAQBEAT</span></div>
  </div>
  <span class="lab pl">Wearable health monitoring · Heraklion, Crete</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Traqbeat, home"><svg class="tqlogo" viewBox="0 0 892.82 320.62" aria-hidden="true">' + LOGO + '</svg></a>'

NAV = [("story", "Technology"), ("device", "Device"), ("research", "Research"), ("team", "Team")]
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
    <div><span class="lab">Office</span><br>STEP-C, Heraklion, Crete</div>
    <div><span class="lab">Email</span><br>info@traqbeat.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Traqbeat</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Traqbeat";\nvar PK="traqbeat";'

R["content"] = r'''var FONTS=['300 1em "Raleway"','400 1em "Raleway"','500 1em "Raleway"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','400 1em "IBM Plex Mono"'];
var MAIL="info@traqbeat.com";
var CD="https://cordis.europa.eu/project/id/";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];var NEWS=[];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function bmk(){var A=[
  ["Cuffless blood pressure","No cuff","Blood pressure tracked continuously, without an inflating cuff."],
  ["Heart rate","and heart rate variability","Beat-to-beat rhythm and its variability, recorded around the clock."],
  ["Respiratory rate","Breathing","Breaths per minute, synchronous with the cardiac signals."],
  ["Oxygen saturation","SpO₂","Blood oxygen, monitored alongside every other signal."],
  ["Skin temperature","Thermal","Continuous skin temperature from the same sensor core."],
  ["Activity","Tracking and recognition","Movement and activity recognised, to put each vital sign in context."]];
  return '<ul class="bmk">'+A.map(function(a){return '<li class="bmk-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["AI risk assessment and alarming","Artificial intelligence turns the continuous record into insights and alerts, for the patient and for the clinician.",'<path d="M4 30H16L21 18L28 42L34 24L38 30H52"/><circle class="a" cx="46" cy="14" r="5"/><path class="a" d="M46 6V2M54 14H58"/>'],
  ["Internet of Medical Things","Wi-Fi, Bluetooth 5.0 and 5G connectivity with low-power components, medical grade and delay tolerant, built for security and trust.",'<path d="M16 38a17 17 0 0 1 0-20M22 33a9 9 0 0 1 0-10M40 18a17 17 0 0 1 0 20M34 23a9 9 0 0 1 0 10"/><circle class="a" cx="28" cy="28" r="3"/>'],
  ["Portal and patient app","A portal for physicians and an app for patients carry the readings, the AI insights and the alerts.",'<rect x="6" y="10" width="32" height="24"/><path d="M14 42H30M22 34V42"/><rect class="a" x="38" y="20" width="14" height="26"/><path class="a" d="M43 42H47"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function rd(){var A=[
  ["2026–2029","6G-CARE","6G-enabled Connected and Autonomous Response for eHealth","A Horizon Europe Smart Networks and Services project, coordinated by the Luxembourg Institute of Science and Technology, with Traqbeat among eighteen partners.","Horizon SNS JU · 101287270","101287270",1],
  ["Active","REALM","Real-world-data Enabled Assessment for heaLth regulatory decision-Making","A framework through which regulators, software developers, healthcare professionals and policy makers jointly create and evaluate innovative medical device software.","Horizon Europe · 101095435","101095435",1],
  ["Active","WEMOR","Wearable device for monitoring warfighter health and sustainability","Studies the feasibility of a holistic health and wellness management system built on a single wearable biomarker monitor.","European Defence Fund · 101121488","101121488",1],
  ["Active","ENSURE EMS","A triage management system supporting emergencies","An integrated mass-casualty management and digital triage system, part of the iProcureSecurity pre-commercial procurement.","H2020 iProcureSecurity PCP · 101022061","101022061",1],
  ["Completed","Next-Gen PLEDGE","Next generation personalised edge-AI healthcare","Advanced remote monitoring for early detection of disease symptoms, tested within the TERMINET framework for federated machine learning.","H2020 TERMINET open call · 957406","957406",0],
  ["Completed","CARDIORESPTRAQ","Continuous at-home monitoring for cardiorespiratory patients","A pilot study using the Traqbeat wearable to monitor patients with chronic cardiorespiratory conditions in hospital and at home.","EIT Health RIS Innovation · 2020","",0]];
  return '<ul class="rd">'+A.map(function(a){var lk=a[5]?'<a class="lab ul" href="'+CD+a[5]+'" target="_blank" rel="noopener">CORDIS ↗</a>':'';return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><div class="rdh"><h3>'+esc(a[1])+'</h3><span class="nm3">'+esc(a[2])+'</span></div><p>'+esc(a[3])+'</p><div class="meta">'+(a[6]?'<span class="tag">'+(a[0]==="2026–2029"?"New · 2026":"Active")+'</span>':'')+'<span class="lab">'+esc(a[4])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wearable health monitoring · Heraklion, Crete<span class="nomob"> · CE marked</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Put your life</span><span class="l">back on</span><span class="l"><em>traq.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>One patented, convertible wearable, worn as a wrist bracelet or a chest patch, for continuous and synchronous monitoring of vital signs with AI risk assessment, in and out of the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">See how it converts '+ARR+'</a><a class="btn" href="#contact" data-to="contact">Arrange a demonstration</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Real-time assessment of health status</span>'+
   '<p class="txt" id="mani">One device that moves with the patient, <em>from the ward to home</em> with a seamless transition, easy to use for every age group.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">9</span><p class="k">Biomarkers measured simultaneously by one device</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Applications from a single wearable: wrist bracelet and chest patch</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3–7<sup>days</sup></span><p class="k">Of continuous monitoring on a single charge</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Single device, two applications</span><h2 class="d3">Wrist or chest, <em>one record.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wrist</span><span>Convert</span><span>Patch</span><span>Monitor</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>On the wrist.</h2><p>Worn as a bracelet, the Traqbeat device records vital signs around the clock, in the hospital or at home, and is easy to use for every age group.</p></article>'+
     '<article class="step"><h2>One core, lifted out.</h2><p>The sensor core leaves the bracelet housing. The same device, the same patient, so the record carries on with a seamless transition.</p></article>'+
     '<article class="step"><h2>Into the chest patch.</h2><p>The core clicks into a chest patch, the second application of the one device, for monitoring close to the heart and lungs.</p></article>'+
     '<article class="step"><h2>Continuous and synchronous.</h2><p>Twenty-four-hour remote monitoring of blood pressure, heart rate and its variability, breathing, oxygen saturation, skin temperature and activity, for three to seven days on a single charge.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="device" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The device</span><h2 class="d2 split">Non-invasive, adaptable, <em>personalised.</em></h2></div><p data-r>Every signal comes from one sensor core and is recorded at the same time, so a clinician sees the whole picture, not six devices’ worth of fragments.</p></div>'+
   bmk()+
   '<div class="ce"><span class="tag">CE marked</span><span class="lab">2014/53/EU · Radio Equipment Directive</span><span class="lab">2011/65/EU · RoHS</span><span class="lab">Patented design</span></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research · EU programmes</span><h2 class="d2 split">Built in <em>European research.</em></h2></div><p data-r>Traqbeat develops methods and tools in medical sensing and informatics, e-health, m-health and the Internet of Medical Things, with partners across Horizon Europe, H2020, the European Defence Fund and EIT Health.</p></div>'+
   rd()+
   '<div class="sup"><div><span class="lab">EIT Health</span><p>RIS Innovation support for CARDIORESPTRAQ, continuous at-home cardiorespiratory monitoring.</p></div>'+
    '<div><span class="lab">Elevate Greece</span><p>SME support under EPAnEK 2014–2020, the Greek competitiveness programme.</p></div>'+
    '<div><span class="lab">Interreg</span><p>GAZELLE, Balkan–Mediterranean 2014–2020, accelerating high-potential innovative SMEs.</p></div></div>'+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded in research, <em>in Heraklion.</em></h2></div><p data-r>Traqbeat was founded in 2020 at the Science and Technology Park of Crete, to take medical sensing research from the lab to the patient.</p></div>'+
   '<div class="tmg">'+
    '<div class="tm-p"><h3>Dr. Vangelis Sakkalis</h3><span class="cr">CEO · Co-founder</span><p>Research Director at ICS-FORTH, where he heads the Computational Neuroscience and Multiscale Cancer Modelling groups. PhD in Electronic and Computer Engineering, after a Master’s at Imperial College London.</p></div>'+
    '<div class="tm-p"><h3>Dr. Emmanouil Spanakis</h3><span class="cr">COO · CIO · Co-founder</span><p>PhD in Computer Science from the University of Crete.</p></div>'+
    '<div class="tm-p"><h3>Matthew Pediaditis</h3><span class="cr">Co-founder</span><p>One of the three co-founders of Traqbeat Technologies.</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For hospitals, clinicians and research partners</span>'+
   '<h2 class="big split">Get in touch to arrange <em>a real demonstration.</em></h2>'+
   '<p class="sub" data-r>See the bracelet and the patch, the portal and the app, and what continuous, synchronous monitoring could mean for your patients or your study.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#device" data-to="device">See the device</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>Science and Technology Park of Crete (STEP-C)</span><br><span>N. Plastira 100, Vassilika Vouton</span><br><span>GR-700 13 Heraklion, Crete, Greece</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Telephone</span><p><a class="ul" href="tel:+302810391944">+30 2810 391944</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>STEP-C, N. Plastira 100<br>GR-700 13 Heraklion, Crete</div>'+
   '<div class="c"><span class="lab">The device</span>Wrist bracelet · Chest patch<br>CE 2014/53/EU · 2011/65/EU</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#device" data-to="device">Device</a><br><a class="ul" href="#research" data-to="research">Research</a><br><a class="ul" href="#team" data-to="team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+302810391944">+30 2810 391944</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 620 44" aria-hidden="true"><text x="310" y="36" text-anchor="middle" style="font-family:\'Raleway\',system-ui,sans-serif;font-weight:400;font-size:44px;letter-spacing:.08em">TRAQBEAT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Traqbeat Technologies PC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Traqbeat — One wearable, wrist to chest",x:"Home"}}'''

R["field"] = (HERE / "traqbeat.field.js").read_text()
R["story"] = (HERE / "traqbeat.story.js").read_text()

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
out = re.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)
(HERE / "traqbeat.src.html").write_text(out)
print("wrote", HERE / "traqbeat.src.html", len(out))
