#!/usr/bin/env python3
"""Assemble nourheart.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/nourheart.assemble.py && node build.js src/nourheart.src.html ../nourheart/index.html
Facts: _kit/dossiers/nourheart.md. Palette: the live logo and site CSS: crimson #91002c, blue #2b5c96 on white.
Site ink #0a1220 (the logo blue taken to night), bone #f2f0ee, accent crimson #91002c (light) / #e8688a (dark).
Display Josefin Sans (the live site's own face)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Nour Heart — Nourexal™ for donor hearts, Nourin® tests for myocardial ischemia</title>
<meta name="description" content="Nour Heart, Inc. develops Nourexal™ (cyclocreatine phosphate), a bioenergetic drug with FDA Orphan Drug Designation for heart transplantation, and Nourin® miRNA blood tests for myocardial ischemia. NIH NHLBI SBIR funded; Vienna, Virginia.">
<meta name="theme-color" content="#0a1220">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect width=\'64\' height=\'64\' fill=\'%230a1220\'/%3E%3Cpath d=\'M6 36H22L28 14L36 50L42 36H58\' fill=\'none\' stroke=\'%23e8688a\' stroke-width=\'5\'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Josefin Sans:300,400; Inter Tight:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0a1220;--inkr:10,18,32;--boner:242,240,238;--accr:232,104,138;--ink2:#0d1727;--ink3:#13203a;--deep:#070d18;
  --bone:#f2f0ee;--bone2:#e8e5e2;--bone3:#d6d2ce;
  --stone:#a9b0bc;--stoneD:#4f5664;
  --acc:#c23a5c;--accL:#e8688a;--accD:#91002c;--blue:#2b5c96;--blueL:#9db8dc;
  --hair:rgba(242,240,238,.14);--hairD:rgba(10,18,32,.16);
  --disp:'Josefin Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Josefin Sans',system-ui,sans-serif;
  --sans:'Inter Tight',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:#0a1220}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand img{height:40px;width:auto;display:block}
.brand .bt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
@media (max-width:520px){.brand img{height:32px}}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#98a0ad;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5f6878;transition:background .35s,border-color .35s}
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
.scene .mb{fill:none;stroke:rgba(var(--boner),.85);stroke-width:1.5}
.scene .mb2{fill:none;stroke:rgba(var(--boner),.22);stroke-width:1}
.scene .hl{stroke:rgba(var(--accr),.55);stroke-width:1.2}
.scene .lvl{fill:none;stroke:var(--accL);stroke-width:1.6}
.scene .tb0{fill:none;stroke:rgba(var(--boner),.85)}
.scene .tb1{fill:none;stroke:var(--ink2)}
.scene .br{fill:none;stroke:rgba(var(--boner),.7);stroke-width:5}
.scene .bf{fill:var(--ink2);stroke:none}
.scene .cor{fill:none;stroke:rgba(var(--accr),.75);stroke-width:1.4;stroke-linecap:round}
.scene .nhh .st{fill:none;stroke:var(--accL);stroke-width:1.1}
.scene .nhh path{fill:rgba(var(--accr),.22);stroke:var(--accL);stroke-width:1.1}
.scene .ax{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .bar0{fill:none;stroke:rgba(var(--boner),.7);stroke-width:12}
.scene .bar1{fill:none;stroke:var(--accL);stroke-width:12}
.scene .mk0{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1;stroke-dasharray:3 4}
.scene .mk1{fill:none;stroke:var(--accL);stroke-width:1;stroke-dasharray:3 4}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c4cad4;paint-order:stroke;stroke:#0d1727;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.nm2{fill:var(--bone)}
.scene text.cap{fill:var(--accL)}
/* ===== Nour Heart additions ===== */
.hero .hero-h{font-size:clamp(42px,4.1vw,82px);letter-spacing:-.02em;line-height:1.06;font-weight:300;max-width:13ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
html body .hero h1#pageTitle.hero-h{font-size:clamp(42px,3.2vw + 14px,76px)!important}
@media (max-width:860px){html body .hero h1#pageTitle.hero-h{font-size:clamp(36px,9.8vw,68px)!important}.hero .hero-h{font-size:clamp(36px,9.8vw,68px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:46ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.02em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--accD);border-color:var(--accD);color:var(--bone)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:var(--bone);border-color:var(--accD)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(46px,4.6vw,86px);font-weight:300;letter-spacing:-.03em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
.ftr .fcv{opacity:.3}/* DF: art echoed behind the footer wordmark stays well below the letterforms */
.hero-note{display:block;margin-top:14px;color:rgba(var(--boner),.4)}
/* technology: four properties */
.tcards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.tcard{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.tcard::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tcard:hover::before{transform:scaleX(1)}
.tcard svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.tcard svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.tcard svg .a{stroke:var(--accD)}
.tcard h3{font-family:var(--disp);font-weight:300;font-size:clamp(21px,1.7vw,29px);line-height:1.14;letter-spacing:-.01em;margin:0 0 14px}
.tcard p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:34ch}
.tcard .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1100px){.tcards{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:44px}}
@media (max-width:620px){.tcards{grid-template-columns:1fr}.tcard p{max-width:52ch}}
.pull{margin:clamp(64px,7vw,112px) 0 0;display:grid;grid-template-columns:minmax(0,3fr) minmax(0,9fr);gap:var(--gap);border-top:1px solid var(--hairD);padding-top:22px}
.pull blockquote{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(23px,2.2vw,36px);line-height:1.22;letter-spacing:-.01em;max-width:40ch}
.pull .lab{color:var(--accD)}
@media (max-width:760px){.pull{grid-template-columns:1fr}}
/* pipeline rows */
.pipe{list-style:none;margin:0;padding:0}
.pipe-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,2.8fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.pipe-row:last-child{border-bottom:1px solid var(--hair)}
.pipe-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.pipe-row:hover::after{transform:scaleX(1)}
.pipe-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.6vw,44px);line-height:1.04;letter-spacing:-.02em;margin:0 0 10px}
.pipe-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.pipe-row p{margin:0;color:var(--stone);font-size:16px;max-width:54ch}
.pipe-row .meta{display:flex;flex-direction:column;gap:8px}
.pipe-row.lead h3{color:var(--bone)}
.pipe-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--bone);background:var(--accD);padding:6px 8px 5px}
@media (max-width:1024px){.pipe-row{grid-template-columns:1fr 1fr;row-gap:16px}.pipe-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.pipe-row{grid-template-columns:1fr}}
.team-note{margin-top:clamp(40px,5vw,72px);color:var(--stoneD);font-size:16px;max-width:72ch}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.005em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("nourheart-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M4 56H30L38 22L50 80L58 56H92"/></svg>
    <div class="wm"><span>NOUR HEART</span></div>
  </div>
  <span class="lab pl">Cardiac therapeutics &middot; Vienna, Virginia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Nour Heart, home"><img src="logo.webp" alt="Nour Heart, Inc." width="418" height="138"><span class="bt">Nour Heart, Inc.</span></a>'

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
    <div><span class="lab">Based in</span><br>Vienna, Virginia</div>
    <div><span class="lab">Funding</span><br>NIH NHLBI &middot; SBIR Phase II</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Nour Heart</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Nour Heart";\nvar PK="nourheart";'

R["content"] = r'''var FONTS=['300 1em "Josefin Sans"','400 1em "Josefin Sans"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"'];
var AW2="https://reporter.nih.gov/project-details/11194294";
var AW1="https://reporter.nih.gov/project-details/11003902";
var AWS="https://reporter.nih.gov/project-details/11209264";
var MAIL="nourheart@nourheart.com";
var SHEETS=[];var GROUPS=[];
var PEOPLE=[
 {g:"Leadership",name:"Salwa A. Elgebaly, PhD, FACC",title:"Founder and Chief Executive Officer",sum:"Cardio pharmacologist and former Director of Surgical Research at UConn; first to identify and patent Nourin® and Nourexal™."},
 {g:"Advisors and consultants",name:"Charles Van Buren, MD",title:"Senior Medical Advisor",sum:"Heads the heart transplant programme; Emeritus Professor at McGovern Medical School and 21 years Medical Director of LifeGift."},
 {g:"Advisors and consultants",name:"Robert Poston, MD",title:"Cardiothoracic surgery",sum:"Chief of Cardiothoracic Surgery at Mountain View Hospital, Las Cruces, with clinical experience in cardiac transplantation."},
 {g:"Advisors and consultants",name:"Michael A. Azrin, MD",title:"Interventional cardiology",sum:"Professor of Medicine (Cardiology) at UConn and Director of Cardiac Catheterization and Interventional Cardiology."},
 {g:"Advisors and consultants",name:"Robert Christenson, PhD",title:"Cardiac biomarkers and regulatory",sum:"Professor of pathology at the University of Maryland School of Medicine and Medical Director of its Core Laboratory."},
 {g:"Advisors and consultants",name:"Nashwa El-Khazragy, MD",title:"Molecular biomarkers",sum:"Professor of Clinical Pathology-Hematology and head of the Proteomics & Metabolomics research unit at Ain Shams University."},
 {g:"Advisors and consultants",name:"Joseph Fortunak, PhD",title:"Drug development and regulatory",sum:"Professor of Chemistry and Pharmaceutical Science at Howard University; former Head of Global Chemical Development at Abbott."},
 {g:"Advisors and consultants",name:"Tamer Elbayoumi, PhD",title:"Drug safety",sum:"Professor of Pharmaceutical Sciences at Midwestern University and founder of NanoMedSolution, a pre-IND consultancy."},
 {g:"Advisors and consultants",name:"Hussien Rizk, MD",title:"Cardiology",sum:"Emeritus Professor of Cardiology and former head of the department at Cairo University Faculty of Medicine."}
];
var NEWS=[
 {d:"2025-08-29",s:"NIH RePORTER · NHLBI",t:"SBIR Phase II, year two: Nourexal™, a novel bioenergetic drug to increase donor heart utilization ($1.92M)",u:AW2},
 {d:"2025-01-16",s:"NIH RePORTER · NHLBI",t:"Supplement to the Nourexal™ donor-heart award",u:AWS},
 {d:"2024-09-18",s:"NIH RePORTER · NHLBI",t:"Direct-to-Phase II SBIR awarded: IND-enabling work on Nourexal™ for heart transplantation ($1.66M)",u:AW1},
 {d:"2024-04-07",s:"JACC · ACC.24",t:"microRNA-137 and microRNA-106b: novel myocardial ischemia/inflammation-dependent biomarkers for acute coronary syndrome",u:"https://doi.org/10.1016/S0735-1097(24)03141-3"},
 {d:"2023-11-09",s:"European Heart Journal · ESC",t:"Nourin miRNAs: biomarkers highly expressed in unstable angina patients with normal ECG and negative hs-troponin",u:"https://academic.oup.com/eurheartj/article/44/Supplement_2/ehad655.1442/7391748"},
 {d:"2023-03-16",s:"Pharmaceuticals",t:"Cyclocreatine Phosphate: a novel bioenergetic/anti-inflammatory drug that resuscitates poorly functioning hearts",u:"https://doi.org/10.3390/ph16030453"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
var SECS={technology:"story",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact",about:"about"};
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function tcards(){var C=[
  ["Energy under low oxygen","CCrP is a synthetic analogue of the heart’s own creatine phosphate. It is more stable, and it keeps making ATP under acidic, anaerobic conditions, where creatine phosphate stops working.",'<path d="M30 6L14 32H28L24 50L42 22H28Z"/><path class="a" d="M8 50H48"/>'],
  ["Anti-inflammatory","In the company’s studies CCrP reduces cell injury and inhibits inflammation and fibrosis, and restores normal cardiac function after extended cold storage of rat and dog hearts.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M16 40L40 16"/>'],
  ["Given once, to the donor","Under Nour Heart’s patented “three-step clinical protocol”, CCrP is given only once, to the heart donor, and not to the recipient.",'<path d="M28 6V22"/><path d="M20 22H36V40H20Z"/><path class="a" d="M28 40V50"/>'],
  ["Orphan Drug Designation","Granted by the FDA for the “Prevention of Ischemic Injury to Enhance Cardiac Graft Recovery and Survival in Heart Transplantation” (DRU-2015-4951).",'<path d="M10 10H46V46H10Z"/><path class="a" d="M18 28L25 35L39 20"/>']];
  return '<div class="tcards">'+C.map(function(c,i){return '<div class="tcard"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function pipeline(){var A=[
  ["Nourexal™ · cyclocreatine phosphate","Heart transplantation","The first clinical application, for end-stage heart failure patients scheduled for transplant. The NIH Direct-to-Phase II award funds GMP-grade CCrP and its chemistry, manufacturing and controls; FDA-recommended safety studies in rats, dogs and human unused cadaver donors; a pilot study extending cold storage of pig hearts to six hours, overseen by Dr. O.H. Frazier at the Texas Heart Institute; and the IND for a Phase I trial.",["Orphan Drug Designation","IND-enabling","$3.6M NIH NHLBI"],1,AW2],
  ["Nourexal™ · cyclocreatine phosphate","Cardiac surgery and interventional cardiology","The same bioenergetic protection for hearts at risk of ischemic injury in high-risk cardiac surgery and high-risk interventional cardiology, the further clinical applications the company names for the drug.",["Further indications"],0,""],
  ["Nourin® miRNAs · miR-137, miR-106b","A blood test for myocardial ischemia","Two disease-specific microRNAs, one for ischemia and one for inflammation, to rule acute myocardial ischemia in or out before it progresses to infarction, with particular benefits for women. In the company’s studies they classified acute coronary syndrome against non-ischemic patients with comorbidities with over 98% sensitivity and 97% specificity.",["Diagnostic","qPCR and point-of-care"],0,"https://doi.org/10.1016/S0735-1097(24)03141-3"]];
  return '<ul class="pipe">'+A.map(function(a){return '<li class="pipe-row'+(a[4]?' lead':'')+'"><div><h3>'+esc(a[1])+'</h3><span class="nm3">'+esc(a[0])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Lead</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+(a[5]?'<a class="lab ul" href="'+a[5]+'" target="_blank" rel="noopener">'+(a[4]?'NIH record ↗':'ACC.24 abstract ↗')+'</a>':'')+'</div></li>'}).join("")+'</ul>'}
function team(){var G={};var order=[];PEOPLE.forEach(function(p){if(!G[p.g]){G[p.g]=[];order.push(p.g)}G[p.g].push(p)});
  return '<div class="mh">'+order.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+G[g].map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cardiac therapeutics and diagnostics<span class="nomob"> &middot; Vienna, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">More time for</span><span class="l"><em>the donor heart.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Nour Heart develops Nourexal™ (cyclocreatine phosphate), a bioenergetic drug that keeps heart muscle making ATP through ischemia. It holds FDA Orphan Drug Designation for heart transplantation, and the NIH is funding its path to an IND.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">The science '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Pipeline</a></div>'+
   '<span class="lab hero-note">Photograph: a preserved human heart</span></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<p class="txt" id="mani">In the U.S. more than 20,000 heart transplants are needed each year, and fewer than 4,000 are performed. Most eligible donor hearts are turned down because the time they can travel is limited to <em>four hours.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6<sup>/10</sup></span><p class="k">hearts from organ donors go unused</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4h</span><p class="k">transport limit for a donor heart today</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3.6M</span><p class="k">NIH NHLBI SBIR funding for Nourexal™, 2024–25</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology &middot; Nourexal™</span><h2 class="d3">Energy that <em>outlasts the clock.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Donors</span><span>Clock</span><span>ATP</span><span>Storage</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Six hearts in ten are never used.</h2><p>The U.S. has more than 12,000 organ donors a year, yet hearts from six of every ten go unused, while the waiting list asks for over 20,000 transplants.</p></article>'+
     '<article class="step"><h2>The limit is four hours.</h2><p>Once a heart leaves the donor it is cold and starved of oxygen. Its energy store, ATP, runs down, and the vast majority of eligible hearts are rejected because transport is limited to four hours.</p></article>'+
     '<article class="step"><h2>CCrP keeps the energy coming.</h2><p>Nourexal™ is taken up into the heart muscle and phosphorylates ADP directly, generating ATP under limited oxygen supply. It is given once, to the donor, before the heart is harvested.</p></article>'+
     '<article class="step"><h2>Twenty-two hours, in rat donors.</h2><p>Given to rat donors, CCrP protected hearts during harvesting and allowed 22 hours of storage, with full recovery of the grafted hearts. A pilot study now aims to extend cold storage of pig hearts to six hours.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The drug</span><h2 class="d2 split">One molecule, <em>four reasons.</em></h2></div><p data-r>Nourexal™ (cyclocreatine phosphate, CCrP) is a bioenergetic and anti-inflammatory drug that Nour Heart developed, patented and produces under its issued chemical patent and a pending process patent.</p></div>'+
   tcards()+
   '<div class="pull"><span class="lab">Our mission</span><blockquote>To develop and commercialize diagnostic and therapeutic products for the early detection, prevention, and treatment of myocardial ischemia in patients with ischemic heart disease.</blockquote></div>'+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">A drug and a test, <em>for ischemic hearts.</em></h2></div><p data-r>Nourexal™ protects heart muscle against ischemic injury, starting with donor hearts for transplant. The Nourin® molecular biomarkers detect myocardial ischemia before it progresses to infarction.</p></div>'+
   pipeline()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Pharmacology, <em>surgery and the clinic.</em></h2></div><p data-r>A founder who discovered both of the company’s technologies, with transplant surgeons, cardiologists, biomarker scientists and drug-development specialists around her.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>publications.</em></h2></div><p data-r>NIH records for the Nourexal™ programme and recent peer-reviewed work on both technologies, newest first.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For transplant centres, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Nour Heart.</em></h2>'+
   '<p class="sub" data-r>For Nourexal™, the Nourin® tests or a collaboration, write to Dr. Salwa Elgebaly and the team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+AW2+'" target="_blank" rel="noopener">The NIH award</a></div>'+
   '<div class="ctc2"><div><span class="lab">Based in</span><p>Vienna, Virginia 22180<br>United States</p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Telephone</span><p><a class="ul" href="tel:+18606808860">(860) 680-8860</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Vienna, Virginia</div>'+
   '<div class="c"><span class="lab">Focus</span>Therapeutics and diagnostics<br>for myocardial ischemia</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 620 44" aria-hidden="true"><text x="310" y="38" text-anchor="middle" style="font-family:\'Josefin Sans\',system-ui,sans-serif;font-weight:300;font-size:42px;letter-spacing:.08em">NOUR <tspan fill="#e8688a">HEART</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Nour Heart, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Nour Heart — Nourexal™ for donor hearts, Nourin® tests for myocardial ischemia",x:"Home"}}'''

R["field"] = (HERE / "nourheart.field.js").read_text()
R["story"] = (HERE / "nourheart.story.js").read_text()

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
(HERE / "nourheart.src.html").write_text(out)
print("wrote", HERE / "nourheart.src.html", len(out))
