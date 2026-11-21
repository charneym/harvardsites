#!/usr/bin/env python3
"""Assemble neurobehavioralsystems.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/neurobehavioralsystems.assemble.py && node build.js src/neurobehavioralsystems.src.html ../neurobehavioralsystems/index.html
Facts: _kit/dossiers/neurobehavioralsystems.md. Palette: the live neurobs.com (main.css): deep indigo #190676 (text, wordmark
'neuro'/'systems'), periwinkle #677eb2 (nav bar, wordmark 'behavioral'); the ink is a deepened indigo #0b0b22."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Neurobehavioral Systems — Presentation® and the California Cognitive Assessment Battery</title>
<meta name="description" content="Neurobehavioral Systems (NBS), Berkeley, California, makes Presentation®, stimulus delivery and experiment control software for neuroscience, and is developing the California Cognitive Assessment Battery (CCAB) for at-home cognitive testing with NIH SBIR support.">
<meta name="theme-color" content="#0b0b22">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230b0b22'/%3E%3Cpath d='M14 46V18h4l12 18 12-18h4v28' fill='none' stroke='%2393a5d8' stroke-width='4'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Jost:300,400; Inter Tight:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0b0b22;--inkr:11,11,34;--boner:242,241,236;--accr:147,165,216;--ink2:#0f0f2c;--ink3:#15163a;--deep:#08081a;
  --bone:#f2f1ec;--bone2:#e9e8e2;--bone3:#dad9d2;
  --stone:#a7aecb;--stoneD:#525877;
  --acc:#677eb2;--accL:#93a5d8;--accD:#33458a;
  --hair:rgba(242,241,236,.14);--hairD:rgba(11,11,34,.16);
  --disp:'Jost',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Jost',system-ui,sans-serif;
  --sans:'Inter Tight',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:#0b0b22}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand .bt{font:300 21px/1 var(--disp);letter-spacing:.005em;white-space:nowrap}
.brand .bt b{font-weight:300;color:var(--accL)}
@media (max-width:420px){.brand .bt{font-size:18px}}'''

WM = 'neuro<b>behavioral</b>systems'

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
.scene .aw{fill:none;stroke:rgba(var(--boner),.85);stroke-width:1.4}
.scene .aw2{fill:none;stroke:rgba(var(--boner),.35);stroke-width:1;stroke-dasharray:2 4}
.scene .seal{fill:rgba(var(--boner),.18);stroke:var(--bone);stroke-width:1.2}
.scene .gap{fill:none;stroke:rgba(var(--accr),.7);stroke-width:1;stroke-dasharray:3 5}
.scene .flow{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.1;stroke-dasharray:10 8}
.scene .vro{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1.1}
.scene .vrc{fill:none;stroke:var(--accL);stroke-width:1.5;stroke-linecap:round}
.scene .dial{fill:#121b1f;stroke:rgba(var(--boner),.7);stroke-width:1.2}
.scene .tk{stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .ndl{stroke:var(--accL);stroke-width:2;stroke-linecap:round}
.scene .hub{fill:var(--accL)}
.scene .lgb{fill:none;stroke:rgba(var(--boner),.35);stroke-width:1}
.scene .lgf{fill:rgba(var(--accr),.55);stroke:var(--accL);stroke-width:1}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c3ccce;paint-order:stroke;stroke:#121b1f;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.nm2{fill:var(--bone)}
.scene text.cap{fill:var(--accL)}
''' + r'''
.scene text{fill:#c4c8dc;stroke:#0f0f2c}
/* phones: a taller photo band above the text (CW), and the page's own ink behind it */
@media (max-width:860px){html body .fieldbg{background:#0b0b22}
  html body #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(44svh - 120px),transparent calc(44svh - 10px));mask-image:linear-gradient(180deg,#000 0,#000 calc(44svh - 120px),transparent calc(44svh - 10px))}
  html body .hero{padding-top:calc(44svh + 8px)!important}}
.scene .stim{fill:rgba(var(--accr),.28);stroke:var(--accL);stroke-width:1.6}
.scene .tr{fill:none;stroke:var(--accL);stroke-width:1.8;stroke-dasharray:260;stroke-dashoffset:260}
.scene .bell{fill:rgba(var(--accr),.1);stroke:var(--accL);stroke-width:1.5}
.scene .mk2{stroke:var(--bone);stroke-width:1.4}
.scene .snd{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .wv{fill:none;stroke:var(--bone);stroke-width:1.2}
.scene .eng{fill:none;stroke:rgba(var(--accr),.8);stroke-width:1.1;stroke-dasharray:200;stroke-dashoffset:200}
/* ===== NBS additions ===== */
.hero .hero-h{font-size:clamp(42px,4.1vw,82px);letter-spacing:-.03em;line-height:1.04;font-weight:300;max-width:13ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
html body .hero h1#pageTitle.hero-h{font-size:clamp(42px,3.3vw + 14px,78px)!important}
@media (max-width:860px){html body .hero h1#pageTitle.hero-h{font-size:clamp(38px,10.4vw,72px)!important}.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.025em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--accL);border-color:var(--accL);color:var(--ink)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:var(--ink);border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(46px,4.4vw,84px);font-weight:300;letter-spacing:-.04em;white-space:nowrap}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
/* products: four capabilities */
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
.q blockquote{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(24px,2.3vw,38px);line-height:1.22;letter-spacing:-.02em;max-width:36ch}
.q .lab{color:var(--accD)}
@media (max-width:760px){.q{grid-template-columns:1fr}}
/* research programme rows */
.asm{list-style:none;margin:0;padding:0}
.asm-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,2.8fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.asm-row:last-child{border-bottom:1px solid var(--hair)}
.asm-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.asm-row:hover::after{transform:scaleX(1)}
.asm-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.6vw,44px);line-height:1.02;letter-spacing:-.025em;margin:0 0 10px}
.asm-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.asm-row p{margin:0;color:var(--stone);font-size:16px;max-width:54ch}
.asm-row .meta{display:flex;flex-direction:column;gap:8px}
.asm-row.lead h3{color:var(--bone)}
.asm-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ink);background:var(--accL);padding:6px 8px 5px}
.asm-row a.ul{color:var(--bone)}
@media (max-width:1024px){.asm-row{grid-template-columns:1fr 1fr;row-gap:16px}.asm-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.asm-row{grid-template-columns:1fr}}
/* team: refined text-only */
.tm2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(32px,5vw,96px)}
.tm-p{border-top:1px solid var(--hair);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,46px);line-height:1.05;letter-spacing:-.025em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:18px}
.tm-p p{color:var(--stone);font-size:16px;line-height:1.6;margin:0 0 14px;max-width:52ch}
.tm-note{margin-top:clamp(40px,5vw,72px);color:var(--stone);font-size:16px;max-width:70ch}
@media (max-width:900px){.tm2{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:12px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:8px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("neurobehavioralsystems-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M20 72V26h5l23 32 23-32h5v46"/></svg>
    <div class="wm"><span>NEUROBEHAVIORAL SYSTEMS</span></div>
  </div>
  <span class="lab pl">Presentation® · Berkeley, California</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Neurobehavioral Systems, home"><span class="bt">' + WM + '</span></a>'

NAV = [("story", "Technology"), ("products", "Products"), ("research", "Research"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Based in</span><br>Berkeley, California</div>
    <div><span class="lab">Email</span><br>consultants@neurobs.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Neurobehavioral Systems</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Neurobehavioral Systems";\nvar PK="neurobehavioralsystems";'

R["content"] = r'''var FONTS=['300 1em "Jost"','400 1em "Jost"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"'];
var MAIL="consultants@neurobs.com";
var AWARD="https://reporter.nih.gov/project-details/11370594";
var PAPER="https://doi.org/10.3389/fnhum.2023.1305529";
var TRIAL="https://clinicaltrials.gov/study/NCT04800588";
var TRY="https://neurobs.com/menu_presentation/menu_features/free_trial";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-07-10",s:"NIH RePORTER · NIA SBIR Phase II",t:"At-home computerized assessment of normal cognitive aging and age-related cognitive decline in older African Americans, Hispanics, and rural non-Hispanic whites",u:AWARD},
 {d:"2024-01-11",s:"Frontiers in Human Neuroscience",t:"The California Cognitive Assessment Battery (CCAB)",u:PAPER},
 {d:"2022-06-02",s:"NIH RePORTER · NIA supplement",t:"Computerized tests of cognitive decline in presymptomatic Alzheimer’s disease: CCAB-Spanish",u:"https://reporter.nih.gov/project-details/10408563"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["Presentation®","Stimulus delivery and experiment control for Windows. Auditory, visual and multimodal stimuli with sub-millisecond temporal precision, for fMRI, ERP, MEG, psychophysics, eye movements, single neuron recording and reaction time studies.",'<path d="M6 12H50V40H6Z"/><path d="M20 48H36M28 40V48"/><path class="a" d="M22 20H34V32H22Z"/>'],
  ["Presentation Mobile®","Experiments designed in Presentation run on iPad, iPhone and Android devices. Hosted experiments download through the free app, and encrypted data can be stored with NBS.",'<path d="M16 6H40V50H16Z"/><path d="M24 44H32"/><path class="a" d="M22 16H34M22 24H34M22 32H30"/>'],
  ["LabStreamer®","Offloads the difficult task of validating the performance of laboratory computers and equipment, so timing can be checked rather than assumed.",'<path d="M6 18H50V40H6Z"/><path d="M12 30H18M24 30H30"/><path class="a" d="M36 34L40 24L44 34"/>'],
  ["Experiment Packs","Fully documented experiments for the classroom or the lab, and Psych Lab 101: 30+ experiments and 11 adjustable visual illusion demos for mobile devices.",'<path d="M8 14H34V46H8Z"/><path d="M14 10H40V42"/><path class="a" d="M20 6H46V38"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function prog(){var A=[
  ["NIA SBIR Phase II · 2022–2027","Norms for older Americans","Longitudinal CCAB data from 300 healthy adults aged 60 to 89 in each of four groups, African American, Asian American, English-speaking and Spanish-speaking Hispanic, tested at home and again at one-year intervals, to build norms for the whole US population.",["$832,200 · 2026–27","Fast-track SBIR"],1,AWARD],
  ["CCAB-Español","A battery in Spanish","A Spanish version of the CCAB optimised for US Spanish dialects, with normative data from older Spanish-speaking Hispanics tested telemedically in their homes, so examiners with limited Spanish can still administer it.",["NIA supplement","Telemedical"],0,"https://reporter.nih.gov/project-details/10408563"],
  ["Clinical study · NCT04800588","Presymptomatic Alzheimer’s","Computerized tests of cognitive decline in presymptomatic Alzheimer’s disease, designed to detect decline long before the onset of dementia. Listed as recruiting on ClinicalTrials.gov.",["Recruiting","Sponsor: NBS"],0,TRIAL],
  ["Published · 2024","The CCAB, described","15 non-verbal and 17 verbal subtests normed for telemedical assessment, with psychometric data from 415 older participants, published with colleagues from UC Davis and the VA Northern California Health Care System.",["Frontiers in Human Neuroscience"],0,PAPER]];
  return '<ul class="asm">'+A.map(function(a){return '<li class="asm-row'+(a[4]?' lead':'')+'"><div><h3>'+esc(a[1])+'</h3><span class="nm3">'+esc(a[0])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Active</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'<a class="lab ul" href="'+a[5]+'" target="_blank" rel="noopener">Source ↗</a></div></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neuroscience software · Berkeley, California<span class="nomob"> · Since 2000</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precise, powerful</span><span class="l"><em>stimulus delivery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Presentation® runs behavioral, psychological and physiological experiments with sub-millisecond timing. Now Neurobehavioral Systems brings that precision to cognitive testing in older adults’ own homes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="'+TRY+'" target="_blank" rel="noopener">Try Presentation free</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 2000</span>'+
   '<p class="txt" id="mani">NBS was founded with a single focus: precise, powerful tools for behavioral and physiological experiments, so that a scientist’s imagination is <em>never held back</em> by software.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">115,719</span><p class="k">registrations of Presentation, and counting</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">264,428</span><p class="k">downloads of the world’s most popular experiment control software</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$832K</span><p class="k">NIH NIA SBIR Phase II award, 2026–27 budget year</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · CCAB</span><h2 class="d3">A cognitive test, <em>at home.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stimulus</span><span>Voice</span><span>Transcript</span><span>Norms</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Every stimulus, on time.</h2><p>Presentation delivers visual, auditory and multimodal stimuli with sub-millisecond precision and logs every event, so a reaction time measures the participant, not the computer.</p></article>'+
     '<article class="step"><h2>Instructions, spoken.</h2><p>The California Cognitive Assessment Battery runs on calibrated tablets, in the lab or in participants’ homes. Instructions and test materials arrive through headphones in naturalistic text-to-speech voices.</p></article>'+
     '<article class="step"><h2>Seven engines, one transcript.</h2><p>Verbal responses are scored in real time, then transcribed by consensus automatic speech recognition, which combines seven commercial engines into timestamped transcripts more accurate than any single one.</p></article>'+
     '<article class="step"><h2>Measured against the right norms.</h2><p>Scores are compared with norms for the participant’s own group. With NIH support, NBS is extending those norms to African American, Asian American and Hispanic older adults.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Software for the <em>experiment.</em></h2></div><p data-r>From the first stimulus to the last logfile, on Windows, iOS and Android, and inside other companies’ products for clinical trials, medical testing, cognitive training and assessment.</p></div>'+
   caps()+
   '<div class="q"><span class="lab">The NBS mission</span><blockquote>“NBS vows to continually add new capabilities to its software products so that a scientist’s imagination will not be held back by software limitations.”</blockquote></div>'+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Cognitive testing for <em>everyone.</em></h2></div><p data-r>The California Cognitive Assessment Battery brings neuropsychological testing to people who lack access because of cost, capacity, mobility or transportation, funded by the National Institute on Aging.</p></div>'+
   prog()+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A small company, <em>in Berkeley.</em></h2></div><p data-r>NBS is a small and growing company in downtown Berkeley. Its principal investigators lead the NIH-funded work on the CCAB.</p></div>'+
   '<div class="tm2">'+
    '<div class="tm-p"><h3>David L. Woods</h3><span class="cr">President · Contact PI, NIA SBIR</span>'+
     '<p>Contact principal investigator on the National Institute on Aging awards that fund the California Cognitive Assessment Battery, and corresponding author of its 2024 description in Frontiers in Human Neuroscience.</p></div>'+
    '<div class="tm-p"><h3>Peter Pebler</h3><span class="cr">Chief Technology Officer · PI, NIA SBIR</span>'+
     '<p>Principal investigator on the CCAB awards with David Woods, and co-author of the battery’s 2024 description.</p></div>'+
   '</div>'+
   '<p class="tm-note">The CCAB is developed with colleagues at the VA Northern California Health Care System and the University of California, Davis.</p>'+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>publications.</em></h2></div><p data-r>The NIH award records and the peer-reviewed description of the California Cognitive Assessment Battery.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For researchers, partners and businesses</span>'+
   '<h2 class="big split">Talk to <em>NBS.</em></h2>'+
   '<p class="sub" data-r>To build Presentation into your product or service, or for business enquiries, write to us. Product support is handled on the NBS forums.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+TRY+'" target="_blank" rel="noopener">Try Presentation free</a></div>'+
   '<div class="ctc2"><div><span class="lab">Address</span><p>2093 Addison Street, Suite 215<br>Berkeley, CA 94704</p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+15105279231">510-527-9231</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>2093 Addison Street, Suite 215<br>Berkeley, CA 94704</div>'+
   '<div class="c"><span class="lab">Software</span>Presentation®<br>Presentation Mobile®<br>LabStreamer®</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#products" data-to="products">Products</a><br><a class="ul" href="#research" data-to="research">Research</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15105279231">510-527-9231</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:300;font-size:36px;letter-spacing:.02em">neurobehavioralsystems</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Neurobehavioral Systems, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Neurobehavioral Systems — Presentation® and the California Cognitive Assessment Battery",x:"Home"}}'''

R["field"] = (HERE / "neurobehavioralsystems.field.js").read_text()
R["story"] = (HERE / "neurobehavioralsystems.story.js").read_text()

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
(HERE / "neurobehavioralsystems.src.html").write_text(out)
print("wrote", HERE / "neurobehavioralsystems.src.html", len(out))
