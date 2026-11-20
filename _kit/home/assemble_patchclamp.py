#!/usr/bin/env python3
"""HOME-ONLY build for PatchClamp MedTech: copies firelight.src.html and swaps its marked regions.
Usage: python3 _kit/home/assemble_patchclamp.py  (writes _kit/src/patchclamp.src.html)"""
import re, os
K = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(K, 'src/firelight.src.html')).read()
R = {}

R['meta'] = '''<title>PatchClamp MedTech — Watertight dural repair for minimally invasive surgery</title>
<meta name="description" content="PatchClamp MedTech, in Seattle, is developing a single-hand device that seals dural openings from the inside during minimally invasive brain and spine surgery. Investigational device.">
<meta name="theme-color" content="#021a3c">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23021a3c'/%3E%3Ccircle cx='32' cy='32' r='24' fill='none' stroke='%233078c0' stroke-width='3' stroke-dasharray='4 3'/%3E%3Cg stroke='%23eef2f7' stroke-width='5' stroke-linecap='round'%3E%3Cpath d='M32 14V50M16.4 23L47.6 41M16.4 41L47.6 23'/%3E%3C/g%3E%3Ccircle cx='32' cy='32' r='5' fill='%23021a3c' stroke='%23eef2f7' stroke-width='2.5'/%3E%3C/svg%3E">'''

R['fonts'] = '/*@fonts Newsreader:300,300i,400; Instrument Sans:400,500; IBM Plex Mono:400*/'

R['root'] = ''':root{
  --ink:#021a3c;--inkr:2,26,60;--boner:238,242,247;--accr:48,120,192;--ink2:#04214a;--ink3:#082a58;--deep:#011129;
  --bone:#eef2f7;--bone2:#e2e8f0;--bone3:#d3dbe6;
  --stone:#a3b3c8;--stoneD:#4d5d73;
  --acc:#3078c0;--accL:#6aa6e6;--accD:#1f5a9c;
  --hair:rgba(238,242,247,.14);--hairD:rgba(2,26,60,.16);
  --disp:'Newsreader',Georgia,'Times New Roman',serif;
  --serif:'Newsreader',Georgia,serif;
  --sans:'Instrument Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R['fieldbg'] = '''.fieldbg{position:fixed;inset:0;z-index:0;background:radial-gradient(60% 70% at 72% 62%,#0a2d5c 0%,#04204a 45%,#021a3c 75%,#011129 100%)}
html body .fieldbg{background:radial-gradient(60% 70% at 72% 62%,#0a2d5c 0%,#04204a 45%,#021a3c 75%,#011129 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R['logocss'] = '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.logo{width:auto;height:40px;flex:none;overflow:visible}
.brand svg.logo .rg{fill:none;stroke:var(--accL);stroke-width:2;stroke-dasharray:3.2 2.6}
.brand svg.logo .sp{fill:none;stroke:currentColor;stroke-width:4.6;stroke-linecap:round}
.brand svg.logo .hb{fill:var(--ink);stroke:currentColor;stroke-width:2.2}
.brand .bt{font:400 19px var(--sans);letter-spacing:.2em;fill:currentColor}
.brand .wt{font:400 10.5px/1.25 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--stone);max-width:7.5em}'''

SCENECSS = '''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:12ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#93a5bd;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5d7190;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.03em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(70vh,640px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
/* PatchClamp cross-section, drawn in fine engraved line */
.scene .tis{fill:none;stroke:rgba(var(--boner),.16);stroke-width:1}
.scene .wall{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.3}
.scene .hat{fill:none;stroke:rgba(var(--boner),.22);stroke-width:.9}
.scene .dura{fill:rgba(var(--boner),.07);stroke:rgba(var(--boner),.78);stroke-width:1.3}
.scene .fib{fill:none;stroke:rgba(var(--boner),.3);stroke-width:.8}
.scene .csf{fill:none;stroke:rgba(var(--accr),.55);stroke-width:1}
.scene .cord{fill:rgba(var(--boner),.035);stroke:rgba(var(--boner),.5);stroke-width:1.2}
.scene .drop{fill:var(--accL)}
.scene .app{fill:var(--ink3);stroke:var(--bone);stroke-width:1.3}
.scene .app2{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .graft{fill:rgba(var(--accr),.16);stroke:var(--accL);stroke-width:1.8;stroke-linejoin:round}
.scene .rib{fill:none;stroke:var(--accL);stroke-width:1}
.scene .clasp{fill:none;stroke:var(--bone);stroke-width:3.2;stroke-linecap:round}
.scene .claspE{fill:var(--bone)}
.scene .hub{fill:var(--ink2);stroke:var(--bone);stroke-width:1.6}
.scene .arr{fill:none;stroke:var(--accL);stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}
.scene .ld{fill:none;stroke:rgba(var(--boner),.45);stroke-width:.9}
.scene svg text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#b4c3d6}
.scene svg text.a{fill:var(--accL)}
.scene svg text.w{fill:var(--bone)}
.scene svg.mob text{font-size:21px;letter-spacing:.06em}
/* DH: programme rows draw their rule on hover */
.pf li{position:relative}
.pf li::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .4s var(--eo)}
.pf li:hover::after{transform:scaleX(1);transition:transform .4s var(--eo)}
.pf li:not(:hover)::after{transform-origin:right}
.pf h3{transition:color .3s var(--eo),transform .35s var(--eo)}
.pf li:hover h3{color:var(--accL);transform:translateX(6px)}
.pf .when{font:400 11px/1.4 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--stone)}
.light .aims li{border-color:var(--hairD)}.light .aims li:last-child{border-bottom-color:var(--hairD)}
.light .aims li::before{background:var(--accD)}
.ind.c3{grid-template-columns:repeat(3,minmax(0,1fr))}
.ind li::before{border-radius:0}
.imp{margin-top:clamp(64px,7vw,104px)}
.cta .offs{max-width:none;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(48px,5vw,80px)}\n.cta>.wrap>.offs,.cta>.wrap>.disc{grid-column:1/-1}
.cta .offs .lab{color:var(--stoneD)}
.disc{margin-top:28px;font-size:13.5px;color:var(--stoneD);max-width:70ch}
@media (max-width:860px){.ind.c3{grid-template-columns:1fr}.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:40svh}}\n@media (max-width:560px){.brand .wt{display:none}.brand svg.logo{height:34px}}'''
R['scenecss'] = SCENECSS

R['seen'] = '<script>try{if(sessionStorage.getItem("pcm-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'

MARK = ('<circle class="rg" cx="22" cy="22" r="20"/><g class="sp"><path d="M22 7V37"/><path d="M9 14.5L35 29.5"/><path d="M9 29.5L35 14.5"/></g>'
        '<circle class="hb" cx="22" cy="22" r="4.4"/>')

R['pre'] = '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><circle cx="48" cy="48" r="44" stroke-dasharray="6 5"/><path d="M48 14V82M18.6 31L77.4 65M18.6 65L77.4 31"/><circle cx="48" cy="48" r="8"/></svg>
    <div class="wm"><span>PATCHCLAMP</span></div>
  </div>
  <span class="lab pl">Medical devices · Seattle, Washington</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R['brand'] = ('<a href="#/" class="brand" id="brand" aria-label="PatchClamp MedTech, home"><svg class="logo" viewBox="0 0 196 44" aria-hidden="true">'
              + MARK + '<text x="56" y="29" class="bt">PATCHCLAMP</text></svg><span class="wt">MedTech</span></a>')

NAV = [('technology', 'Technology'), ('programme', 'Programme'), ('team', 'Team'), ('news', 'News')]
R['navmenu'] = ('<nav class="nav" aria-label="Primary">\n'
  + ''.join('    <a class="nl ul" href="#/%s">%s</a>\n' % n for n in NAV)
  + '''    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
''' + ''.join('    <li><a href="#/%s">%s</a></li>\n' % n for n in NAV) + '''    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Location</span><br>Seattle, Washington</div>
    <div><span class="lab">Email</span><br>Marc@PatchClamp.Tech</div>
  </div>
</div>''')

R['xc'] = '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">PatchClamp MedTech</span><div class="t" id="xtt"></div></div>'''

R['site'] = 'var SITE="PatchClamp MedTech";\nvar PK="pcm";'

R['content'] = r'''var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Instrument Sans"','500 1em "Instrument Sans"','400 1em "IBM Plex Mono"'];
var MAIL="Marc@PatchClamp.Tech";
var SHEETS=[],GROUPS=[];
var IND=["Endoscopic spine surgery","Minimally invasive cranial surgery","Open cranial and spinal procedures"];
var IMPACT=["Reduce complications","Improve outcomes","Lower hospital costs","Decrease hospital readmissions","Shorten time in the operating room"];
/* [stage, title, description, when, link, link label] */
var PROG=[
 ["Phase II SBIR · NINDS","Toward FDA clearance","Scale-up of manufacturing, design refinements and GLP biocompatibility studies, ending in regulatory pre-submission work for an anticipated 510(k) clearance.","July 2026","https://reporter.nih.gov/project-details/11313359","NIH RePORTER"],
 ["Phase I SBIR · NINDS","Feasibility, in vitro and in vivo","Burst-pressure chambers, constrained-access spine models and an acute in vivo laminectomy model, with the device refined on surgeon feedback.","April 2024","https://reporter.nih.gov/project-details/10818254","NIH RePORTER"],
 ["Engineering","Built with Product Creation Studio","Seattle engineering partner for the applicator, the graft-clasp assembly and the pressure rigs used to test them.","June 2024","https://www.newswire.com/news/product-creation-studio-partners-with-patchclamp-medtech-inc-to-22368846","Announcement"],
 ["Intellectual property","Patented in the US and Japan","A US utility patent granted prioritized examination in 2021, international filings in 2022 and protection in Japan. All base IP is assigned to PatchClamp.","2020 – 2022","",""]
];
/* masthead rows: [name, role, summary] (patchclamp.tech/team) */
var LEAD=[
 ["Dr. Marc Mayberg, M.D.","Neurosurgeon · CEO, Founder, Director","Clinical Professor of Neurological Surgery at UW; former Chairman of Neurological Surgery at the Cleveland Clinic."],
 ["Joe Piper","Executive Chairman, Founder, Director","Forty-five years in healthcare company formation, as counsel, founder, corporate VC and VC."],
 ["Hans Lundin","CFO, Founder, Director","Over 20 years of entrepreneurial and venture-backed financial management; CFO of Specifica."],
 ["Dr. Gary Myles, Ph.D.","IP Counsel, Director","Biotechnology patent attorney; teaches patent law at Seattle University and the University of Washington."],
 ["Adam Smith","CTO, Director","Managing engineer at Product Creation Studio, experienced in minimally invasive devices."]
];
var TEAM2=[
 ["Dr. Christoph Hofstetter, M.D., Ph.D.","Neurosurgeon · Chief Medical Officer","Professor of Neurological Surgery at UW; established the first US spine fellowship focused on endoscopic spine surgery."],
 ["Bob McPherson","Chief Operating Officer","Twenty years of product development in design for manufacturing, reliability and failure analysis."],
 ["Carol Danielson","Regulatory · FDA Liaison","Over 30 years advising on FDA development and regulation of drugs, biologics and medical devices."],
 ["Daren Nitz","Corporate Counsel","Over 30 years representing entrepreneurs, companies and venture investors."]
];
var NEWS=[
 {d:"2026-07-28",s:"NIH RePORTER",t:"NINDS awards PatchClamp a Phase II SBIR to take the dural repair device toward FDA clearance",u:"https://reporter.nih.gov/project-details/11313359"},
 {d:"2025-05-06",s:"Product Creation Studio",t:"Surgical innovation in action: PatchClamp’s approach to dural repair",u:"https://www.productcreationstudio.com/blog/surgical-innovation-in-action-patchclamps-revolutionary-approach-to-dural-repair"},
 {d:"2025-05-01",s:"Design News",t:"Clinical insight to corporate value: the strategic evolution of PatchClamp",u:"https://www.designnews.com/medical/clinical-insight-corporate-value-the-strategic-evolution-of-patchclamp"},
 {d:"2024-06-24",s:"Newswire",t:"Product Creation Studio partners with PatchClamp Medtech to develop a dural repair system",u:"https://www.newswire.com/news/product-creation-studio-partners-with-patchclamp-medtech-inc-to-22368846"},
 {d:"2024-04-18",s:"NIH RePORTER",t:"NINDS awards PatchClamp a Phase I SBIR for sealing dural perforations in minimally invasive surgery",u:"https://reporter.nih.gov/project-details/10818254"}
];'''

R['views'] = r'''/* ================= VIEWS (home only; nav items scroll to their sections) ================= */
var SECS={technology:"story",programme:"programme",team:"team",news:"news",contact:"contact"};
function toSec(k){var el=document.getElementById(SECS[k]);if(!el)return;var y=Math.max(0,el.getBoundingClientRect().top+window.scrollY-(k==="technology"?0:64));if(lenis)lenis.scrollTo(y,{duration:1.5,force:true});else window.scrollTo(0,y)}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();if(document.body.classList.contains("menu-open"))closeMenu();toSec(k)},true);
function sRow(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}
function grid(groups){return groups.map(function(g){return '<div class="grp"><span class="lab grp-l">'+esc(g[0])+'</span><div class="mh"><div class="mh-group"><ul class="mh-list">'+g[1].map(sRow).join("")+'</ul></div></div></div>'}).join("")}
function prog(list){return '<ul class="pf">'+list.map(function(c){return '<li><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><p><span class="lab" style="display:block">'+esc(c[0])+'</span><span class="when" style="display:block">'+esc(c[3])+'</span></p><div class="w">'+(c[4]?'<a class="ul" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+' '+ARR+'</a>':'')+'</div></li>'}).join("")+'</ul>'}
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical devices · Seattle<span class="nomob"> · Dural repair</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Seal the dura</span><span class="l">from <em>the inside.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PatchClamp places a graft inside the dura and clasps it from outside, with a single-hand applicator about the width of a drinking straw: an immediate watertight seal for minimally invasive brain and spine surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<p class="txt" id="mani">Minimally invasive surgery spares the patient, but its narrow ports leave little room to stitch the dura. PatchClamp reverses the repair, placing the patch from <em>inside the membrane.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3M</span><span class="k">Phase II NIH SBIR continuation grant, awarded July 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8–24<sup>mm</sup></span><span class="k">Access ports for most minimally invasive cases, worked at a depth of 8–10 cm</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3,000<sup>+</sup></span><span class="k">Operations in Dr. Mayberg’s 40 years as a neurosurgeon, where the idea began</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A repair placed from <em>within.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Leak</span><span>Port</span><span>Graft</span><span>Clasp</span><span>Seal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An opening that keeps leaking.</h2><p>Cerebrospinal fluid sits above atmospheric pressure, so any opening in the dura leaks persistently, risking infection, meningitis, headaches and wound breakdown.</p></article>'+
     '<article class="step"><h2>Down the port, one-handed.</h2><p>A low-profile, disposable applicator carries the graft, folded inside a restraining cylinder, through the narrow access port to the perforation.</p></article>'+
     '<article class="step"><h2>The graft opens inside.</h2><p>The graft passes through the opening and re-expands on its support ribs against the inner surface of the dura.</p></article>'+
     '<article class="step"><h2>Clasped from outside.</h2><p>Bioabsorbable struts release onto the outer surface and hold the graft in place. The clasp can be undone to reposition before the applicator is withdrawn.</p></article>'+
     '<article class="step"><h2>Watertight, immediately.</h2><p>The seal is tested against escalating pulsatile pressure in burst chambers that reproduce surgical fluid pressures of 0 to 35 cm of water.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Where it works</span><h2 class="d2 split">Made for the narrowest <em>fields.</em></h2></div><p data-r>An affordable, reliable way to repair and seal durotomies, the incisions and punctures of the dura, wherever a surgeon cannot reach to suture.</p></div>'+
   '<ul class="ind c3">'+IND.map(function(c){return '<li>'+esc(c)+'</li>'}).join("")+'</ul>'+
   '<div class="two imp"><div><span class="lab kick" data-r>Impact</span><h2 class="d3 split">Better outcomes at a <em>lower cost.</em></h2></div>'+
   '<div><p class="lede" data-r>An immediate watertight seal answers a need that sutures, staples, grafts and tissue adhesives often leave open in restricted exposures.</p><div style="margin-top:32px">'+aims(IMPACT)+'</div></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">From proof of concept to <em>510(k).</em></h2></div><p data-r>Funded by the National Institute of Neurological Disorders and Stroke, and engineered in Seattle.</p></div>'+
   prog(PROG)+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Neurosurgeons, engineers <em>and builders.</em></h2></div><p data-r>Two University of Washington neurosurgeons, an engineering partner, and a board that has formed healthcare companies for decades.</p></div>'+
   grid([["Founders and directors",LEAD],["Clinical, operations and counsel",TEAM2]])+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">Grants and <em>coverage.</em></h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For surgeons, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>PatchClamp.</em></h2>'+
   '<p class="sub" data-r>Following the path to FDA clearance, or working on dural repair in minimally invasive surgery? Write to the team in Seattle.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Dr. Mayberg '+ARR+'</a></div>'+
   '<div class="offs">'+
    '<div data-r><span class="lab">Location</span><b>Seattle, Washington</b></div>'+
    '<div data-r><span class="lab">CEO · Dr. Marc Mayberg</span><b class="em"><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></b></div>'+
    '<div data-r><span class="lab">Executive Chairman · Joe Piper</span><b class="em"><a class="ul" href="mailto:Joe@PatchClamp.Tech">Joe@PatchClamp.Tech</a></b></div>'+
   '</div>'+
   '<p class="disc" data-r>PatchClamp is an investigational device. It has not been cleared or approved by the U.S. Food and Drug Administration.</p>'+
  '</div></section>';
}
function v404(){return vHome()}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>PatchClamp Medtech, Inc.<br>Seattle, Washington</div>'+
   '<div class="c"><span class="lab">Device</span>Investigational. Not FDA<br>cleared or approved.</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="#/contact">Get in touch</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:Newsreader,Georgia,serif;font-weight:300;font-size:46px;letter-spacing:.06em">PATCHCLAMP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PatchClamp Medtech, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one page; any hash shows home ================= */
function route(h){
  return {k:"home",v:vHome,t:"PatchClamp MedTech — Watertight dural repair for minimally invasive surgery",x:"Home"};
}'''

R['field'] = r'''/* ================= HERO FIELD: the PatchClamp device on the dura, under a surgical light. Six bioabsorbable
   struts (the clasp of their logo) unfold over the graft on the membrane's fibrous surface, and the steel applicator
   lifts clear. It then lives on its own: slow pulse rings of fluid pressure that the seal holds, and a sheen travelling
   along the shaft. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBg=null;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h;
    var R=mob?Math.min(w*.24,U*.34):Math.max(96,Math.min(h*.19,cw*.125));
    return {mob:mob,side:side,cw:cw,U:U,R:R,cx:mob?w*.5:side+cw*.765,cy:mob?U*.58:h*.6,k:.42,dx:mob?.62:.8,dy:-1};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.round(W*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function build(){
    var A=mk(w,h),g=A[1];oBg=A[0];var cx=G.cx,cy=G.cy,R=G.R,k=G.k;
    /* the membrane under a surgical light: a pool of cool light on navy */
    g.save();g.translate(cx,cy);g.scale(1,k*1.25);
    var lp=g.createRadialGradient(0,0,0,0,0,R*4.6);lp.addColorStop(0,"rgba(180,200,226,.34)");lp.addColorStop(.28,"rgba(106,140,186,.2)");lp.addColorStop(.6,"rgba(48,90,150,.08)");lp.addColorStop(1,"rgba(48,90,150,0)");
    g.fillStyle=lp;g.beginPath();g.arc(0,0,R*4.6,0,Math.PI*2);g.fill();g.restore();
    /* collagen fibres of the dura, in perspective, brightest in the light */
    var Rn=rng(7),N=G.mob?900:2600,sig=R*2.3;g.lineCap="round";
    for(var i=0;i<N;i++){var X=(Rn()*2-1)*R*7,Z=(Rn()*2-1)*R*4.2,th=.3+(Rn()-.5)*.9,L=R*(.25+Rn()*.9),I=Math.exp(-(X*X+Z*Z*1.6)/(2*sig*sig)),a=.02+.17*I;if(a<.03&&Rn()<.5)continue;
      g.strokeStyle="rgba("+(Rn()<.18?"106,166,230":"214,226,240")+","+a.toFixed(3)+")";g.lineWidth=(.4+Rn()*.55)*(G.mob?.8:1);g.beginPath();
      var ph=Rn()*6.28,amp=R*.05*(.5+Rn());
      for(var s=0;s<=14;s++){var u=s/14*L,px=X+Math.cos(th)*u-Math.sin(th)*Math.sin(u/R*5+ph)*amp,pz=Z+Math.sin(th)*u+Math.cos(th)*Math.sin(u/R*5+ph)*amp,sx=cx+px,sy=cy+pz*k;
        if(s===0)g.moveTo(sx,sy);else g.lineTo(sx,sy)}g.stroke()}
    /* vignette */
    var vg=g.createRadialGradient(cx,cy,R*2,cx,cy,Math.max(w,h)*.9);vg.addColorStop(0,"rgba(1,17,41,0)");vg.addColorStop(1,"rgba(1,17,41,.72)");g.fillStyle=vg;g.fillRect(0,0,w,h);
  }
  function capsule(x0,x1,w0,w1){var m=x0+(x1-x0)*.55;c.beginPath();c.moveTo(x0,-w0);c.lineTo(m,-w0);c.quadraticCurveTo(m+(x1-m)*.35,-w1,x1-w1*.6,-w1);c.arc(x1-w1*.6,0,w1,-Math.PI/2,Math.PI/2);c.quadraticCurveTo(m+(x1-m)*.35,w1,m,w0);c.lineTo(x0,w0);c.closePath()}
  function strut(a,len,wd,lift){var cx=G.cx,cy=G.cy,k=G.k,R=G.R;
    /* shadow on the tissue */
    c.save();c.translate(cx+R*.03,cy+R*.05);c.scale(1,k);c.rotate(a);c.fillStyle="rgba(1,12,30,.42)";capsule(R*.12,len,wd*.5,wd*.8);c.fill();c.restore();
    c.save();c.translate(cx,cy-lift);c.scale(1,k);c.rotate(a);
    var gr=c.createLinearGradient(0,-wd*1.2,0,wd*1.2);gr.addColorStop(0,"#f4f7fb");gr.addColorStop(.42,"#c9d5e4");gr.addColorStop(.75,"#7f93ad");gr.addColorStop(1,"#3d5070");
    c.fillStyle=gr;capsule(R*.1,len,wd*.45,wd*.78);c.fill();c.lineWidth=.8;c.strokeStyle="rgba(238,242,247,.55)";c.stroke();c.restore()}
  function shaft(tx,ty,W,t){var dx=G.dx,dy=G.dy,l=Math.sqrt(dx*dx+dy*dy);dx/=l;dy/=l;var nx=-dy,ny=dx,R=G.R,L=Math.max(w,h)*1.6,D1=R*1.45;
    function seg(a,b,wd,dark){var p0x=tx+dx*a,p0y=ty+dy*a,p1x=tx+dx*b,p1y=ty+dy*b;
      var gr=c.createLinearGradient(p0x+nx*wd/2,p0y+ny*wd/2,p0x-nx*wd/2,p0y-ny*wd/2);
      gr.addColorStop(0,"#13284a");gr.addColorStop(.16,"#5d7190");gr.addColorStop(.3,"#dfe7f1");gr.addColorStop(.4,"#f4f7fb");gr.addColorStop(.55,"#a3b3c8");gr.addColorStop(.82,"#3d5070");gr.addColorStop(1,"#0b2146");
      c.fillStyle=gr;c.beginPath();c.moveTo(p0x+nx*wd/2,p0y+ny*wd/2);c.lineTo(p1x+nx*wd/2,p1y+ny*wd/2);c.lineTo(p1x-nx*wd/2,p1y-ny*wd/2);c.lineTo(p0x-nx*wd/2,p0y-ny*wd/2);c.closePath();c.fill();
      /* a sheen travelling slowly up the shaft */
      c.save();c.clip();var sp=((t*.05)%1.6-.3)*L*.5,sg=c.createLinearGradient(tx+dx*(sp-R*.8),ty+dy*(sp-R*.8),tx+dx*(sp+R*.8),ty+dy*(sp+R*.8));
      sg.addColorStop(0,"rgba(238,242,247,0)");sg.addColorStop(.5,"rgba(238,242,247,.22)");sg.addColorStop(1,"rgba(238,242,247,0)");c.fillStyle=sg;c.fillRect(0,0,w,h);c.restore()}
    var ang=Math.atan2(ny,nx);
    seg(D1,L,W*1.32);
    c.fillStyle="#0b2146";c.beginPath();c.ellipse(tx+dx*D1,ty+dy*D1,W*.66,W*.2,ang,0,Math.PI*2);c.fill();
    c.strokeStyle="rgba(106,166,230,.85)";c.lineWidth=Math.max(1,W*.035);c.beginPath();c.ellipse(tx+dx*(D1+W*.5),ty+dy*(D1+W*.5),W*.66,W*.2,ang,0,Math.PI);c.stroke();
    seg(0,D1+2,W);
    /* the open end of the applicator */
    c.fillStyle="#0b2146";c.beginPath();c.ellipse(tx,ty,W*.5,W*.17,ang,0,Math.PI*2);c.fill();
    c.strokeStyle="rgba(223,231,241,.85)";c.lineWidth=1.1;c.stroke();
    c.fillStyle="#3d5070";c.beginPath();c.ellipse(tx-dx*W*.04,ty-dy*W*.04,W*.2,W*.07,ang,0,Math.PI*2);c.fill()}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=IN.v,cx=G.cx,cy=G.cy,R=G.R,k=G.k;cv.style.opacity=shown?String(.5+.5*dim):"";
    var open=sm(e/.62),lift=sm((e-.58)/.42),ap=sm(e*2.2);
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=Math.min(1,e*3);
    c.drawImage(oBg,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* pulse rings: fluid pressure beneath the membrane, held by the seal */
    for(var j=0;j<3;j++){var p=((t/4.2)+j/3)%1,rr=R*(1.25+p*3.1),a=Math.pow(1-p,2)*.3*open;if(a<.01)continue;
      c.strokeStyle="rgba(106,166,230,"+a.toFixed(3)+")";c.lineWidth=1.2;c.beginPath();c.ellipse(cx,cy,rr,rr*k,0,0,Math.PI*2);c.stroke()}
    /* the graft, seen through the membrane */
    var gs=R*1.12*(.3+.7*open);c.globalAlpha=Math.min(1,e*3)*open;
    var gg=c.createRadialGradient(cx,cy,0,cx,cy,gs);gg.addColorStop(0,"rgba(214,226,240,.2)");gg.addColorStop(.85,"rgba(214,226,240,.12)");gg.addColorStop(1,"rgba(106,166,230,.05)");
    c.fillStyle=gg;c.beginPath();c.ellipse(cx,cy,gs,gs*k,0,0,Math.PI*2);c.fill();
    c.strokeStyle="rgba(106,166,230,.55)";c.lineWidth=1.1;c.setLineDash([5,5]);c.beginPath();c.ellipse(cx,cy,gs,gs*k,0,0,Math.PI*2);c.stroke();c.setLineDash([]);
    c.globalAlpha=Math.min(1,e*3);
    /* the six struts of the clasp, unfolding */
    var len=R*(.22+.78*open),wd=R*.06*(.6+.4*open),order=[];for(var i=0;i<6;i++){var a=i*Math.PI/3+.26+(1-open)*.5;order.push([Math.sin(a),a])}
    order.sort(function(x,y){return x[0]-y[0]});
    for(var q=0;q<6;q++)strut(order[q][1],len,wd,0);
    /* the hub */
    var hr=R*.17;c.save();c.translate(cx,cy);c.scale(1,k);
    var hg=c.createRadialGradient(-hr*.35,-hr*.5,0,0,0,hr);hg.addColorStop(0,"#f4f7fb");hg.addColorStop(.5,"#a3b3c8");hg.addColorStop(1,"#2b4366");
    c.fillStyle=hg;c.beginPath();c.arc(0,0,hr,0,Math.PI*2);c.fill();c.strokeStyle="rgba(244,247,251,.7)";c.lineWidth=1;c.stroke();
    c.fillStyle="#0b2146";c.beginPath();c.arc(0,0,hr*.42,0,Math.PI*2);c.fill();c.restore();
    /* the applicator: seated on the hub while the struts open, then lifted clear */
    var W=R*.3,up=R*(.12+.42*lift)+Math.sin(t*.6)*R*.02*lift,dl=Math.sqrt(G.dx*G.dx+G.dy*G.dy);
    var tx=cx+G.dx/dl*up,ty=cy-hr*k*.4+G.dy/dl*up;
    c.globalAlpha=Math.min(1,e*3)*(.35+.65*ap);
    var sh=c.createRadialGradient(cx+R*.02,cy+R*.03,0,cx+R*.02,cy+R*.03,R*.5);sh.addColorStop(0,"rgba(1,12,30,"+(.35*(1-lift*.7)).toFixed(3)+")");sh.addColorStop(1,"rgba(1,12,30,0)");
    c.fillStyle=sh;c.beginPath();c.ellipse(cx+R*.02,cy+R*.03,R*.5,R*.5*k,0,0,Math.PI*2);c.fill();
    shaft(tx,ty,W,t);
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:Math.max(d,2.6),ease:"power1.inOut"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();'''

R['story'] = r'''/* the story scene: ONE cross-section of the surgical field (BL/BY). An access port above the dura; cerebrospinal
   fluid below it. Step 1 fluid leaks through the durotomy; 2 the applicator comes down the port; 3 the graft passes
   through and opens inside the dura; 4 the clasp's struts open on the outer surface and the applicator withdraws;
   5 pulsing pressure pushes on the graft and the seal holds. Each step changes one labelled part. */
function scene(){
  var mob=MOBILE(),LX=mob?136:40,RX=mob?446:0,s='';
  function lab(id,x,y,txt,anc,cls,lead){return '<g id="'+id+'">'+(lead?'<path class="ld" d="'+lead+'"/>':'')+'<text x="'+x+'" y="'+y+'"'+(anc?' text-anchor="'+anc+'"':'')+(cls?' class="'+cls+'"':'')+'>'+txt+'</text></g>'}
  /* tissue layers above the dura, either side of the port */
  for(var y=58;y<280;y+=26){s+='<path class="tis" d="M20 '+y+'C140 '+(y-6)+' 260 '+(y+6)+' 366 '+y+'"/><path class="tis" d="M434 '+y+'C540 '+(y+6)+' 660 '+(y-6)+' 780 '+y+'"/>'}
  /* the access port */
  s+='<path class="wall" d="M370 24V286M430 24V286"/>';
  for(var hy=36;hy<280;hy+=14){s+='<path class="hat" d="M362 '+(hy+6)+'L370 '+hy+'M430 '+(hy+6)+'L438 '+hy+'"/>'}
  /* the dura, with its durotomy */
  s+='<path class="dura" d="M20 290H386V314H20Z"/><path class="dura" d="M414 290H780V314H414Z"/>';
  for(var fx=26;fx<780;fx+=9){if(fx>380&&fx<418)continue;s+='<path class="fib" d="M'+fx+' 311L'+(fx+6)+' 293"/>'}
  /* fluid and neural tissue beneath */
  for(var cy2=346;cy2<=418;cy2+=24){s+='<path class="csf" d="M20 '+cy2+'C120 '+(cy2-8)+' 200 '+(cy2+8)+' 300 '+cy2+'S480 '+(cy2-8)+' 560 '+cy2+'S700 '+(cy2+8)+' 780 '+cy2+'"/>'}
  s+='<path class="cord" d="M20 520V462C200 448 600 448 780 462V520Z"/>';
  /* leak droplets */
  s+='<g id="sDrop">';for(var d=0;d<7;d++)s+='<circle class="drop" r="3.2" cx="400" cy="300"/>';s+='</g>';
  /* pressure arrows */
  s+='<g id="sPress">';for(var px=330;px<=470;px+=35)s+='<path class="arr" d="M'+px+' 372V344M'+(px-5)+' 350L'+px+' 344L'+(px+5)+' 350"/>';s+='</g>';
  /* graft (inside), clasp (outside), applicator */
  s+='<path class="graft" id="sGraft" d=""/><g id="sRibs"></g>';
  s+='<g id="sClasp"><path class="clasp" id="sStr" d=""/><circle class="claspE" id="sE1" r="4.5" cx="400" cy="288"/><circle class="claspE" id="sE2" r="4.5" cx="400" cy="288"/><circle class="hub" id="sHub" cx="400" cy="284" r="7"/></g>';
  s+='<g clip-path="url(#sClip)"><g id="sApp"><path class="app" d="M389 -400V0Q389 6 395 6H405Q411 6 411 0V-400"/><path class="app2" d="M395 -400V-2M405 -400V-2"/></g></g>';
  /* labels (CY: placed so none can touch) */
  s+=lab("lPort",mob?360:356,mob?62:66,mob?"PORT 8–24 MM":"ACCESS PORT · 8–24 MM","end","w");
  s+=lab("lDura",LX,mob?280:282,"DURA","","w");
  s+=lab("lCsf",LX,mob?388:384,mob?"CSF":"CEREBROSPINAL FLUID","","");
  s+=lab("lCord",LX,mob?500:496,mob?"CORD":"BRAIN OR SPINAL CORD","","");
  s+=lab("lLeak",mob?RX:470,mob?236:242,"DUROTOMY","","a",mob?"M440 242L418 292":"M466 246L420 292");
  s+=lab("lApp",mob?RX:450,mob?150:154,mob?"APPLICATOR":"SINGLE-HAND APPLICATOR","","a",mob?"M440 144L416 144":"M444 150L416 150");
  s+=lab("lGraft",mob?RX:546,mob?346:362,mob?"GRAFT":"GRAFT · INSIDE THE DURA","","a",mob?"M440 342L500 324":"M540 358L512 324");
  s+=lab("lClasp",mob?RX:530,mob?236:236,mob?"CLASP":"BIOABSORBABLE CLASP · OUTSIDE","","a",mob?"M440 232L470 282":"M524 232L494 282");
  s+=lab("lSeal",mob?RX:500,mob?442:440,mob?"SEAL HOLDS":"WATERTIGHT · 0–35 CM H₂O","","a");
  return '<svg'+(mob?' class="mob" viewBox="120 0 560 524"':' viewBox="0 0 800 524"')+' aria-hidden="true"><defs><clipPath id="sClip"><rect x="0" y="0" width="800" height="292"/></clipPath></defs>'+s+'</svg>';
}
function storyDraw(svg){
  function q(id){return svg.querySelector("#"+id)}
  var E={drops:Array.prototype.slice.call(svg.querySelectorAll("#sDrop circle")),press:q("sPress"),graft:q("sGraft"),ribs:q("sRibs"),str:q("sStr"),e1:q("sE1"),e2:q("sE2"),hub:q("sHub"),clasp:q("sClasp"),app:q("sApp"),
    leak:q("lLeak"),lapp:q("lApp"),lgraft:q("lGraft"),lclasp:q("lClasp"),lseal:q("lSeal")};
  var RB=[];for(var i=0;i<6;i++){var r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("class","rib");E.ribs.appendChild(r);RB.push(r)}
  return function(p,b){
    if(!E.graft.isConnected)return;
    var s1=seg(p,.02,.14),s2=seg(p,.2,.36),s3=seg(p,.4,.56),s4=seg(p,.6,.76),s5=seg(p,.8,.94);
    svg.style.opacity=b;
    /* 1 leak: droplets rise through the opening, until the graft closes it */
    var lk=s1*(1-seg(p,.44,.56));
    E.drops.forEach(function(c,j){var u=((p*7+j/7)%1),y=430-u*190,x=400+Math.sin(j*2.1+u*6)*(u<.55?18*(1-u):6+u*14);c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1));c.style.opacity=(lk*Math.sin(Math.PI*u)).toFixed(3)});
    E.leak.style.opacity=(s1*(1-s3)).toFixed(3);
    /* 2 applicator down the port; 3 into the opening; 4 withdrawn */
    var ty=-40+328*s2+20*s3-250*s4;E.app.setAttribute("transform","translate(0 "+ty.toFixed(1)+")");
    E.lapp.style.opacity=(s2*(1-s4)).toFixed(3);
    /* 3 the graft opens inside the dura, on its support ribs */
    var gu=seg(p,.44,.58),gw=4+114*gu,bow=lerp(14,2,s4)+(s5>0?-2.5*s5*Math.sin(p*90):0),gy=318;
    E.graft.setAttribute("d",gu>0?"M"+(400-gw)+" "+gy+"Q400 "+(gy+bow*2)+" "+(400+gw)+" "+gy+"Q400 "+(gy+bow*2+6)+" "+(400-gw)+" "+gy+"Z":"");
    E.graft.style.opacity=(gu>0?1:0);
    RB.forEach(function(r,j){var f=(j+.5)/6*2-1,x=400+f*gw*.92,yb=gy+bow*(1-f*f)*1.0;r.setAttribute("d","M400 "+(gy+bow*.6)+"L"+x.toFixed(1)+" "+yb.toFixed(1));r.style.opacity=(gu*.8).toFixed(3)});
    E.lgraft.style.opacity=s3.toFixed(3);
    /* 4 the clasp's struts open on the outer surface */
    var cw=6+92*s4;E.str.setAttribute("d","M"+(400-cw)+" 289Q400 280 "+(400+cw)+" 289");E.e1.setAttribute("cx",(400-cw).toFixed(1));E.e2.setAttribute("cx",(400+cw).toFixed(1));
    E.clasp.style.opacity=seg(p,.5,.62).toFixed(3);E.lclasp.style.opacity=s4.toFixed(3);
    /* 5 pressure pushes and the seal holds */
    E.press.style.opacity=(s5*.9).toFixed(3);E.press.setAttribute("transform","translate(0 "+(4*Math.sin(p*90)).toFixed(2)+")");
    E.lseal.style.opacity=s5.toFixed(3);
  };
}'''

def put(s, name, body):
    pat_c = re.compile(r'(/\*<R:%s>\*/).*?(/\*</R:%s>\*/)' % (name, name), re.S)
    pat_h = re.compile(r'(<!--<R:%s>-->).*?(<!--</R:%s>-->)' % (name, name), re.S)
    n = 0
    for pat in (pat_c, pat_h):
        s, k = pat.subn(lambda m: m.group(1) + body + m.group(2), s)
        n += k
    assert n == 1, (name, n)
    return s

out = src
for k, v in R.items():
    out = put(out, k, v)
# colours hard-coded outside the regions (BG: every colour from the PatchClamp palette)
for a, b in [('#120e0b', '#021a3c'), ('rgba(18,14,11', 'rgba(2,26,60'), ('#a39684', '#93a5bd'), ('#7a6a58', '#5d7190'),
             ('#c2b6a4', '#b4c3d6'), ('#8a2a1a', '#1f5a9c'), ('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */',
             '/* ===== PatchClamp: navy ground, cool white pages, their logo blue as the accent ===== */')]:
    out = out.replace(a, b)
# buttons: logo blue tint with navy text (AA), white text on dark hover
out = out.replace('</style>\n</head>', '.btn.solid{background:var(--accL);border-color:var(--accL);color:var(--ink)}\n#pre .mk circle{fill:none;stroke:var(--accL);stroke-width:1.2}\n#pre .mk circle+path+circle,#pre .mk circle:last-child{stroke:var(--bone)}\n</style>\n</head>', 1)
for bad in ['Firelight', 'FIRELIGHT', 'firelight', 'flc-']:
    if bad in out:
        i = out.find(bad); print('LEFTOVER', bad, out[max(0, i - 80):i + 40].replace('\n', ' '))
import re as _bo; out = _bo.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update 1: nav items open build-out pages (_kit/lib/buildout.js)
open(os.path.join(K, 'src/patchclamp.src.html'), 'w').write(out)
print('wrote src/patchclamp.src.html', len(out))
