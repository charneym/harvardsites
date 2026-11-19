#!/usr/bin/env python3
"""Assemble montani-bio.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run: python3 _kit/src/montani-bio.assemble.py && node _kit/build.js src/montani-bio.src.html montani-bio/index.html"""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Montani Biotechnologies — Providing the signal: bridging gaps in immunity</title>
<meta name="description" content="Montani Biotechnologies, a 2025 spinout of West Virginia University's Vaccine Development Center in Morgantown, develops mRNA-LNP genetic adjuvants, autogene therapies and targeted antigens to empower anti-cancer immunity.">
<meta name="theme-color" content="#02121d">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2302121d'/%3E%3Cpath d='M6 22H58M12 44Q32 4 52 44M20 22V31M26 22V24M38 22V24M44 22V31' fill='none' stroke='%23f3f2ee' stroke-width='3'/%3E%3Cpath d='M14 54Q32 40 50 54' fill='none' stroke='%238fa3cc' stroke-width='3'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Source Serif 4:300,300i; Cabin:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#02121d;--inkr:2,18,29;--boner:243,242,238;--accr:96,120,168;--ink2:#061c2b;--ink3:#0b334a;--deep:#010b12;
  --bone:#f3f2ee;--bone2:#e9e9e6;--bone3:#d9dbdc;
  --stone:#a3acb7;--stoneD:#525d69;
  --acc:#6078a8;--accL:#93a7d1;--accD:#47608f;
  --hair:rgba(243,242,238,.14);--hairD:rgba(2,18,29,.16);
  --disp:'Source Serif 4',Georgia,'Times New Roman',serif;
  --serif:'Source Serif 4',Georgia,serif;
  --sans:'Cabin',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#061a28 0%,#2a4762 34%,#8796ae 46%,#1a3347 60%,#02121d 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.mb{width:40px;height:32px;flex:none;overflow:visible}
.brand svg.mb path{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round}
.brand svg.mb .s{stroke:var(--accL)}
.brand .bt{font:500 19px/1 var(--sans);letter-spacing:.005em;white-space:nowrap}
.brand .bt span{color:var(--accL);font-weight:400}
@media (max-width:420px){.brand .bt{font-size:17px}.brand svg.mb{width:34px}}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:13ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8f9aa8;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5b6b7e;transition:background .35s,border-color .35s}
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
.scene .bn{fill:none;stroke:rgba(var(--boner),.72);stroke-width:1.4}
.scene .bnf{fill:none;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .hat{fill:none;stroke:rgba(var(--boner),.07);stroke-width:1}
.scene .cyto{fill:url(#mbCy)}
.scene .nucf{fill:rgba(11,51,74,.75);stroke:rgba(var(--boner),.55);stroke-width:1.1}
.scene .acc{fill:none;stroke:var(--accL);stroke-width:1.5}
.scene .accf{fill:var(--accL)}
.scene .lip{fill:var(--ink2);stroke:rgba(var(--boner),.75);stroke-width:1}
.scene .tail{fill:none;stroke:rgba(var(--boner),.35);stroke-width:1}
.scene .core{fill:rgba(var(--accr),.16)}
.scene .rib{fill:#0b334a;stroke:rgba(var(--boner),.75);stroke-width:1.1}
.scene .bead{fill:var(--accL)}
.scene .ck{fill:var(--accL)}
.scene .ck2{fill:none;stroke:var(--accL);stroke-width:1.2}
.scene .tum{fill:rgba(2,18,29,.9);stroke:rgba(var(--boner),.5);stroke-width:1.1}
.scene .tumn{fill:rgba(var(--boner),.12)}
.scene .imm{fill:#0b334a;stroke:var(--accL);stroke-width:1.3}
.scene .immn{fill:rgba(147,167,209,.35)}
.scene .ld{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c4cad2}
.scene text.a{fill:var(--accL)}
@media (max-width:1024px){.scene svg text{font-size:22px!important;letter-spacing:.05em!important}}
/* ===== Montani additions ===== */
.hero .hero-h{font-size:clamp(48px,6.6vw,120px);letter-spacing:-.035em;line-height:.98}
@media (max-width:860px){.hero .hero-h{font-size:clamp(42px,12vw,82px)}}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:300}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:#fff;border-color:var(--accD)}
.stat .v{font-size:clamp(54px,5.6vw,100px)}
/* what mRNA-LNP offers: three qualities */
.caps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.2vw,34px);line-height:1.1;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:34ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:860px){.caps{grid-template-columns:1fr;row-gap:40px}}
/* programmes */
.progs{border-top:1px solid var(--hair)}
.prog-row{display:grid;grid-template-columns:minmax(0,3.4fr) minmax(0,5fr) minmax(0,3fr);column-gap:var(--gap);align-items:start;padding:30px 0 34px;border-bottom:1px solid var(--hair);position:relative}
.prog-row::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prog-row:hover::after{transform:scaleX(1)}
.prog-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(32px,3vw,50px);line-height:1.02;letter-spacing:-.03em;margin:0}
.prog-row h3 em{color:var(--accL)}
.prog-row p{margin:0;color:var(--stone);font-size:16px;max-width:52ch}
.prog-row .lab{display:block}
.prog-row .meta{display:flex;flex-direction:column;gap:8px}
.prog-row .meta .lab b{font-weight:400;color:var(--bone)}
@media (max-width:1024px){.prog-row{grid-template-columns:1fr 1fr;row-gap:18px}.prog-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:860px){.prog-row{grid-template-columns:1fr}}
/* team: the founders' own photograph beside their entries */
.tm{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,6fr);gap:clamp(28px,4vw,72px);align-items:start}
.tm figure{margin:0;position:relative;overflow:hidden;aspect-ratio:807/534;background:var(--ink3)}
.tm figure img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.72) contrast(1.03) brightness(.97)}
.tm figure::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,51,74,0) 55%,rgba(2,18,29,.35));mix-blend-mode:multiply;pointer-events:none}
.tm figcaption{margin-top:14px}
.ppl{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
.ppl li{position:relative;border-top:1px solid var(--hair);padding:22px 0 26px}
.ppl li:last-child{border-bottom:1px solid var(--hair)}
.ppl li::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.ppl li:hover::before{transform:scaleX(1)}
.ppl h3{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.2vw,36px);line-height:1.06;letter-spacing:-.025em;margin:0 0 8px}
.ppl .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:14px}
.ppl p{color:var(--stone);font-size:15.5px;margin:0;max-width:52ch}
@media (max-width:960px){.tm{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.6vw,25px);line-height:1.35;letter-spacing:-.015em}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("mtb-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

MARK = '<path d="M1 9H39"/><path d="M4 23Q20 -3 36 23"/><path d="M9 9V14M14 9V10.5M26 9V10.5M31 9V14"/><path class="s" d="M7 30Q20 20 33 30"/>'

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M4 36H92"/><path d="M10 70Q48 -6 86 70"/><path d="M22 36V48M34 36V39M62 36V39M74 36V48"/><path d="M18 86Q48 66 78 86"/></svg>
    <div class="wm"><span>MONTANI BIO</span></div>
  </div>
  <span class="lab pl">mRNA immunotherapy · Morgantown, West Virginia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Montani Biotechnologies, home"><svg class="mb" viewBox="0 0 40 32" aria-hidden="true">' + MARK + '</svg><span class="bt">Montani Bio<span>technologies</span></span></a>'

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
    <div><span class="lab">Office</span><br>Morgantown, West Virginia</div>
    <div><span class="lab">Spinout of</span><br>WVU Vaccine Development Center</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Montani Biotechnologies</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Montani Biotechnologies";\nvar PK="mtb";'

R["content"] = r'''var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Cabin"','500 1em "Cabin"','400 1em "IBM Plex Mono"'];
var FORM="https://montanibio.com/";
var LI="https://www.linkedin.com/company/montani-biotechnologies/";
var BIO="https://convention.bio.org/2026-sessions-and-courses/montani-biotechnologies-inc";
var PHOTO="https://img1.wsimg.com/isteam/ip/d1909d2e-b1d6-49b5-8f80-00dbda89552f/blob-0343fce.png/:/cr=t:25.3%25,l:12.6%25,w:74.8%25,h:49.5%25/rs=w:1400,m";
/* people: names, titles and bios as on montanibio.com (About Us) */
var PEOPLE=[
 {name:"Katherine Lee, PhD",title:"Co-founder & Chief Executive Officer",line:"BS and PhD in Immunology from West Virginia University. Expertise in preclinical models of disease and cancer, respiratory pathogens and mRNA vaccine development; about 15 peer-reviewed publications. Her work centres on scalable, efficient production pipelines and preclinical evaluation of mRNA vaccines and therapeutics."},
 {name:"F. Heath Damron, PhD",title:"Co-founder & Chief Scientific Officer",line:"Professor and founding director of WVU’s Vaccine Development Center (est. 2017). More than 20 years in funded grant writing, commercial partnerships and preclinical vaccine R&D; over $20 million in research funding secured since 2014 and about 76 peer-reviewed publications."}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2026-06-23",s:"BIO International Convention",t:"Montani Bio presents in the Start-Up Stadium at BIO 2026, San Diego",u:BIO}
];'''

R["views"] = r'''/* ================= VIEWS (home only: nav items scroll to sections) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["Speed","The mRNA platform simplifies drug design and production, so new candidates, including personalized cancer therapies, move faster from idea to medicine.",'<path d="M4 40H52"/><path d="M4 28H34"/><path d="M4 16H22"/><path class="a" d="M40 16l12 12-12 12"/>'],
  ["Precision","Lipid nanoparticles deliver messenger RNA directly into cells, so the body itself produces precise proteins that train the immune system.",'<circle cx="28" cy="28" r="22"/><circle cx="28" cy="28" r="12"/><circle class="a" cx="28" cy="28" r="3"/>'],
  ["Adaptability","One platform for personalized cancer therapies and disease-modifying treatments, expanding mRNA into new areas of disease.",'<path d="M4 28C12 12 20 12 28 28S44 44 52 28"/><path class="a" d="M4 28C12 44 20 44 28 28S44 12 52 28"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function ppl(){return '<ul class="ppl">'+PEOPLE.map(function(p){return '<li><h3>'+esc(p.name)+'</h3><span class="cr">'+esc(p.title)+'</span><p>'+esc(p.line)+'</p></li>'}).join("")+'</ul>'}
function progs(){var P=[
  ["01","Genetic","adjuvants","mRNA that expresses integral cytokines and chemokines in desirable inflammatory pathways, harnessing the innate immune system to strengthen responses to vaccines and immunotherapies. In preclinical studies, candidates suppressed tumor growth in immunotherapy-resistant melanoma (VDC-MB-0001, 0002) and increased antibody responses to antigen (VDC-MB-0002).",[["Candidates","VDC-MB-0001 · VDC-MB-0002"],["Indication","Immunotherapy-resistant melanoma"],["Stage","Preclinical"]]],
  ["02","Autogene","therapies","Personalized cancer therapies: working with a world-class neoantigen prediction algorithm, the platform delivers potent tumor-specific neoantigens to drive durable anti-tumor immunity.",[["Indications","Melanoma · Breast cancer"],["Stage","Under investigation"]]],
  ["03","Targeted","antigens","Canonical expression of mRNA-encoded payloads does not use the full potential of mRNA-LNP interactions in the host. Montani is exploring how novel expression signals, added in silico, could improve how those proteins are presented and processed.",[["Approach","In silico expression signals"],["Stage","Research"]]]];
  return '<div class="progs">'+P.map(function(r){return '<div class="prog-row"><div><span class="lab" style="margin-bottom:12px">Platform '+r[0]+'</span><h3>'+r[1]+' <em>'+r[2]+'</em></h3></div><p>'+esc(r[3])+'</p><div class="meta">'+r[4].map(function(m){return '<span class="lab">'+esc(m[0])+' · <b>'+esc(m[1])+'</b></span>'}).join("")+'</div></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>mRNA immunotherapy · Morgantown, West Virginia</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Bridging gaps</span><span class="l">in <em>immunity.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Montani Bio provides the signal: mRNA-LNP therapies that train the immune system to fight cancer at its source. A 2025 spinout of West Virginia University’s Vaccine Development Center.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">The technology '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Pipeline</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Welcome to the future of immunotherapy</span>'+
   '<p class="txt" id="mani">We believe in the potential of mRNA to empower anti-cancer immunity, and we are carrying the most exciting discoveries from our academic lab <em>toward the clinic.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><span class="k">Incorporated as a spinout of the Vaccine Development Center at WVU Health Sciences</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Candidate technologies: genetic adjuvants, autogene therapies and targeted antigens</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Genetic adjuvant candidates tested preclinically in immunotherapy-resistant melanoma</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · mRNA-LNP</span><h2 class="d3">Providing the <em>signal.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deliver</span><span>Express</span><span>Signal</span><span>Respond</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A lipid nanoparticle carries the message.</h2><p>Messenger RNA, wrapped in a lipid nanoparticle, is delivered directly into cells, mimicking natural processes.</p></article>'+
     '<article class="step"><h2>The cell reads it.</h2><p>Inside the cell, the mRNA is translated into precise proteins. The body makes the medicine itself, so design and production are simpler and faster.</p></article>'+
     '<article class="step"><h2>Cytokines and chemokines signal.</h2><p>Montani’s genetic adjuvants express integral cytokines and chemokines in desirable inflammatory pathways, calling on the innate power of the immune system.</p></article>'+
     '<article class="step"><h2>The immune system answers.</h2><p>Immune responses are activated against the tumor. In preclinical studies, candidate genetic adjuvants suppressed tumor growth in immunotherapy-resistant melanoma.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Why mRNA-LNP</span><h2 class="d2 split">Speed, precision <em>and adaptability.</em></h2></div><p data-r>mRNA-LNP technology is transforming next-generation therapeutics. Our platform is designed to accelerate personalized cancer therapies and disease-modifying treatments for some of the most challenging medical needs.</p></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three candidate <em>technologies.</em></h2></div><p data-r>Advancing intellectual property for cancer therapeutics from the Vaccine Development Center at West Virginia University toward the clinic.</p></div>'+
   progs()+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by <em>Drs. Lee and Damron.</em></h2></div><p data-r>Driven by a passion to bring forward innovative solutions for human diseases, building a research enterprise of our own.</p></div>'+
   '<div class="tm"><figure><img src="'+PHOTO+'" alt="Dr. F. Heath Damron and Dr. Katherine Lee, co-founders of Montani Biotechnologies" loading="lazy" width="807" height="534"><figcaption class="lab">F. Heath Damron and Katherine Lee</figcaption></figure>'+ppl()+'</div>'+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><h2 class="d3 split">Latest news</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Interested in our science?</span>'+
   '<h2 class="big split">Send us <em>a message.</em></h2>'+
   '<p class="sub" data-r>For partners, collaborators and investors interested in mRNA immunotherapy from West Virginia.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Contact form '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>Montani Biotechnologies, Inc.</span><br><span>Morgantown, WV</span></p></div>'+
    '<div><span class="lab">Message</span><p><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">montanibio.com</a></p></div>'+
    '<div><span class="lab">Follow</span><p><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Montani Biotechnologies, Inc.<br>Morgantown, WV</div>'+
   '<div class="c"><span class="lab">Platform</span>Genetic adjuvants<br>Autogene therapies<br>Targeted antigens</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:300;font-size:50px;letter-spacing:.06em">MONTANI BIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Montani Biotechnologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Montani Biotechnologies — Providing the signal: bridging gaps in immunity",x:"Home"}}'''

R["field"] = r'''/* ================= HERO FIELD: the steel arch bridge from Montani's own logo (the New River Gorge Bridge, West
   Virginia) at first light: a deck truss on its columns over the great arch, approach piers stepping down the gorge
   walls, forested ridges fading into haze, and morning mist drifting through the gorge. The mist moves on its own;
   no pointer response (CZ). Sky, ridges and the bridge are painted once; each frame only composites and drifts mist. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBg=null,oBr=null,oM1=null,oM2=null;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.82):h;
    var S=mob?w*.4:Math.min(cw*.23,h*.4),gx=mob?w*.56:side+cw*.755,RW=mob?1.6:1.3;
    var deck=mob?U*.36:h*.37,k=S/330,rise=S*.42,crown=deck+18*k,spring=crown+rise;
    return {mob:mob,side:side,cw:cw,U:U,S:S,gx:gx,deck:deck,k:k,crown:crown,spring:spring,dd:15*k,RW:RW,rimL:gx-S*RW,rimR:gx+S*RW,river:mob?U*1.02:h*.84,ground:mob?U:h};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the gorge wall surface: rim at deck level, down through the arch springings to the river */
  function wallY(x){var g=G,L=x<g.gx,d=Math.abs(x-g.gx),rimY=g.deck+g.dd+6*g.k,rd=g.S*g.RW,sd=g.S,bd=g.S*.16;
    var y;if(d>=rd)y=rimY-(d-rd)*.03;else if(d>=sd){var t=(rd-d)/(rd-sd);y=rimY+(g.spring-rimY)*Math.pow(t,1.5)}else if(d>=bd){var t2=(sd-d)/(sd-bd);y=g.spring+(g.river-g.spring)*(1-Math.pow(1-t2,1.6))}else y=g.river;
    return y+(L?2:-2)*Math.sin(x*.05)*g.k}
  function archT(x){var u=(x-G.gx)/G.S;return G.crown+(G.spring-G.crown)*u*u}
  function build(){
    var W=w,H=h,g0=G,A=mk(W,H),g=A[1];oBg=A[0];
    var hz=g0.mob?g0.U*.62:h*.5,gx=g0.gx;
    /* sky: deep navy overhead, slate toward a pale silver dawn behind the gorge */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#05182a");sky.addColorStop(.35,"#1b3a55");sky.addColorStop(.7,"#58709a");sky.addColorStop(.9,"#a5b2c8");sky.addColorStop(1,"#c9d0da");
    g.fillStyle=sky;g.fillRect(0,0,W,hz+4);
    var gl=g.createRadialGradient(gx+g0.S*.5,hz*.94,0,gx+g0.S*.5,hz*.94,Math.max(W,H)*.6);gl.addColorStop(0,"rgba(240,238,232,.62)");gl.addColorStop(.12,"rgba(214,220,230,.3)");gl.addColorStop(.45,"rgba(150,168,200,.08)");gl.addColorStop(1,"rgba(150,168,200,0)");g.fillStyle=gl;g.fillRect(0,0,W,H);
    /* thin high cloud */
    var rc=rng(5);for(var q=0;q<(g0.mob?8:16);q++){var cx=rc()*W,cy=hz*(.18+rc()*.5),cr=(60+rc()*160)*(g0.mob?.6:1);g.save();g.translate(cx,cy);g.scale(1,.12);var cg=g.createRadialGradient(0,0,0,0,0,cr);cg.addColorStop(0,"rgba(200,210,226,"+(.05+rc()*.08).toFixed(3)+")");cg.addColorStop(1,"rgba(200,210,226,0)");g.fillStyle=cg;g.fillRect(-cr,-cr,cr*2,cr*2);g.restore()}
    /* ridges, far to near, with a forested fringe */
    var RD=[[.86,[148,162,186],.05,3,0],[.93,[112,130,158],.07,7,.5],[1.0,[76,96,124],.065,11,.8],[1.08,[44,66,92],.05,17,1]];
    var hzB=g0.mob?g0.U*.6:h*.5;
    for(var r=0;r<RD.length;r++){var rr=rng(RD[r][3]),amp=(g0.mob?g0.U:h)*RD[r][2],base=hzB*RD[r][0],o1=rr()*9,o2=rr()*9,col=RD[r][1],tr=RD[r][4];
      g.fillStyle="rgb("+col.join(",")+")";g.beginPath();g.moveTo(0,H);
      for(var x=0;x<=W+4;x+=4){var u=x/W,y=base-amp*(.5*Math.sin(u*2.7+o1)+.3*Math.sin(u*6.1+o2)+.2*Math.sin(u*13+o1*2)+.7);
        if(tr)y-=tr*(2.5+2.5*Math.abs(Math.sin(x*.9+o1)))*(g0.mob?.6:1);g.lineTo(x,y)}
      g.lineTo(W,H);g.closePath();g.fill();
      var hzz=g.createLinearGradient(0,base-amp,0,base+amp*2);hzz.addColorStop(0,"rgba(200,208,222,0)");hzz.addColorStop(.5,"rgba(200,208,222,"+(.22-r*.04).toFixed(3)+")");hzz.addColorStop(1,"rgba(200,208,222,0)");g.fillStyle=hzz;g.fillRect(0,base-amp,W,amp*3)}
    /* gorge interior: haze pooled between the walls */
    var gi=g.createLinearGradient(0,g0.spring-40*g0.k,0,g0.river);gi.addColorStop(0,"rgba(160,174,198,0)");gi.addColorStop(.5,"rgba(160,174,198,.35)");gi.addColorStop(.85,"rgba(190,200,216,.55)");gi.addColorStop(1,"rgba(190,200,216,0)");g.fillStyle=gi;g.fillRect(gx-g0.S*1.7,g0.spring-40*g0.k,g0.S*3.4,g0.river-g0.spring+60*g0.k);
    /* the two gorge walls, forested and dark against the haze */
    function wall(side){var x0=side<0?-4:W+4,x1=gx+(side<0?3:-3),st=side<0?4:-4;g.beginPath();g.moveTo(x0,H+2);
      for(var x=x0;side<0?x<=x1:x>=x1;x+=st)g.lineTo(x,wallY(x));g.lineTo(x1,H+2);g.closePath();
      var wg=g.createLinearGradient(0,g0.deck,0,g0.ground);wg.addColorStop(0,"#1f3a50");wg.addColorStop(.35,"#12293a");wg.addColorStop(1,"#071825");g.fillStyle=wg;g.fill()}
    wall(-1);wall(1);
    /* conifers along the rims and down the slopes */
    var rt=rng(29),n=g0.mob?420:1400;
    for(var t=0;t<n;t++){var tx=rt()*W;if(Math.abs(tx-gx)<g0.S*.18)continue;var ty=wallY(tx)+Math.pow(rt(),1.6)*(g0.ground-wallY(tx))*.9,dep=(ty-g0.deck)/(g0.ground-g0.deck),th=(5+rt()*7)*g0.k*(.6+dep*1.6),tw=th*.32;
      var lit=Math.max(0,1-Math.abs(tx-(gx+g0.S*.5))/(W*.6))*(1-dep);
      g.fillStyle="rgba("+(14+lit*40|0)+","+(34+lit*44|0)+","+(48+lit*52|0)+","+(.6+rt()*.35).toFixed(3)+")";g.beginPath();g.moveTo(tx,ty-th);g.lineTo(tx+tw,ty);g.lineTo(tx-tw,ty);g.closePath();g.fill()}
    /* the river, a pale thread far below */
    g.strokeStyle="rgba(214,222,232,.5)";g.lineWidth=Math.max(1,2*g0.k);g.beginPath();g.moveTo(gx-g0.S*.16,g0.river-2);g.quadraticCurveTo(gx,g0.river+3,gx+g0.S*.16,g0.river-1);g.stroke();
    if(g0.mob){var fd=g.createLinearGradient(0,g0.U*.82,0,g0.U*1.05);fd.addColorStop(0,"rgba(2,18,29,0)");fd.addColorStop(1,"#02121d");g.fillStyle=fd;g.fillRect(0,g0.U*.82,W,H);g.fillStyle="#02121d";g.fillRect(0,g0.U*1.05,W,H)}
    /* ---- the bridge, on its own layer so the mist can pass in front of and behind it ---- */
    var B=mk(W,H),b=B[1];oBr=B[0];
    var k=g0.k,S=g0.S,dk=g0.deck,dd=g0.dd,steel="rgba(10,28,42,.96)",lit="rgba(214,224,238,.42)";
    function ln(x1,y1,x2,y2,wd){b.lineWidth=wd;b.beginPath();b.moveTo(x1,y1);b.lineTo(x2,y2);b.stroke()}
    b.strokeStyle=steel;b.lineCap="butt";
    var NP=26,pw=2*S/NP,xs=Math.max(-pw,g0.rimL),xe=Math.min(W+pw,g0.rimR+pw*.5);
    /* approach piers: twin legs with X bracing, from the deck down to the wall */
    for(var px=gx-S-pw*2;px>xs;px-=pw*2){var yb=wallY(px),yt=dk+dd;if(yb-yt<6*k)continue;pier(px,yt,yb)}
    for(var px2=gx+S+pw*2;px2<xe;px2+=pw*2){var yb2=wallY(px2),yt2=dk+dd;if(yb2-yt2<6*k)continue;pier(px2,yt2,yb2)}
    function pier(x,yt,yb){var hw=2.2*k;b.strokeStyle=steel;ln(x-hw,yt,x-hw*1.6,yb,1.6*k);ln(x+hw,yt,x+hw*1.6,yb,1.6*k);
      var bay=22*k;for(var y=yt;y<yb-bay*.5;y+=bay){var f=(y-yt)/(yb-yt),f2=Math.min(1,(y+bay-yt)/(yb-yt)),a=hw*(1+.6*f),a2=hw*(1+.6*f2);ln(x-a,y,x+a2,Math.min(yb,y+bay),.6*k);ln(x+a,y,x-a2,Math.min(yb,y+bay),.6*k)}}
    /* the arch: two chords with a Warren web */
    function archB(x){var u=(x-gx)/S;return archT(x)+(13+7*u*u)*k}
    b.strokeStyle=steel;
    b.lineWidth=2.6*k;b.beginPath();for(var ax=gx-S;ax<=gx+S+.5;ax+=2){var yy=archT(ax);ax===gx-S?b.moveTo(ax,yy):b.lineTo(ax,yy)}b.stroke();
    b.lineWidth=2.2*k;b.beginPath();for(var ax2=gx-S;ax2<=gx+S+.5;ax2+=2){var yy2=archB(ax2);ax2===gx-S?b.moveTo(ax2,yy2):b.lineTo(ax2,yy2)}b.stroke();
    for(var i=0;i<NP;i++){var x1=gx-S+i*pw,x2=x1+pw;ln(x1,archT(x1),x1,archB(x1),.9*k);ln(x1,archB(x1),x2,archT(x2),.7*k)}
    /* columns from the arch up to the deck */
    for(var j=1;j<NP;j++){var cx2=gx-S+j*pw,top=dk+dd,bot=archT(cx2);if(bot-top<4*k)continue;ln(cx2-1.2*k,top,cx2-1.2*k,bot,1.3*k);ln(cx2+1.2*k,top,cx2+1.2*k,bot,1.3*k);
      var bay2=18*k;for(var yy3=top+bay2*.4;yy3<bot-bay2*.6;yy3+=bay2)ln(cx2-1.2*k,yy3,cx2+1.2*k,yy3+bay2*.6,.5*k)}
    /* the deck truss */
    b.lineWidth=2*k;ln(xs,dk,xe,dk,2*k);ln(xs,dk+dd,xe,dk+dd,1.8*k);
    for(var dx=gx-S;dx>xs-pw;dx-=pw/2){ln(dx,dk,dx,dk+dd,.7*k);ln(dx,dk,dx-pw/2,dk+dd,.6*k)}
    for(var dx2=gx-S+pw/2;dx2<xe+pw;dx2+=pw/2){ln(dx2,dk,dx2,dk+dd,.7*k);ln(dx2,dk,dx2-pw/2,dk+dd,.6*k)}
    /* the dawn catching the top of the deck and the arch */
    b.strokeStyle=lit;ln(xs,dk-.9*k,xe,dk-.9*k,.9*k);
    b.lineWidth=.9*k;b.beginPath();for(var ax3=gx-S*.92;ax3<=gx+S*.92;ax3+=2){var y4=archT(ax3)-1.2*k;ax3<=gx-S*.92+1?b.moveTo(ax3,y4):b.lineTo(ax3,y4)}b.stroke();
    /* a few nearer conifers at the right edge, framing the view (desktop) */
    if(false){var rf=rng(53);for(var f=0;f<6;f++){var fx=W-rf()*W*.06,fy=H+10,fh=h*(.2+rf()*.22),fw=fh*.16;b.fillStyle="rgba(3,14,22,.97)";b.beginPath();b.moveTo(fx,fy-fh);
      for(var l=0;l<=12;l++){var ly=fy-fh+fh*l/12,lw=fw*(l/12)*(1+.25*Math.sin(l*2.3+f));b.lineTo(fx+lw,ly)}for(var l2=12;l2>=0;l2--){var ly2=fy-fh+fh*l2/12,lw2=fw*(l2/12)*(1+.25*Math.cos(l2*2.1+f));b.lineTo(fx-lw2,ly2)}b.closePath();b.fill()}}
    /* mist textures: long soft banks, drawn twice across for a seamless drift */
    oM1=mist(W,(g0.mob?g0.U:h)*.34,41,g0.mob?16:30,.17);oM2=mist(W,(g0.mob?g0.U:h)*.22,77,g0.mob?12:22,.2);
  }
  function mist(W,Hm,seed,n,a){var M=mk(W,Hm),m=M[1],r=rng(seed);
    for(var i=0;i<n;i++){var x=r()*W,y=Hm*(.3+r()*.45),rx=W*(.08+r()*.18),ry=Hm*(.18+r()*.22);
      for(var o=-1;o<=1;o++){m.save();m.translate(x+o*W,y);m.scale(1,ry/rx);var mg=m.createRadialGradient(0,0,0,0,0,rx);mg.addColorStop(0,"rgba(222,228,236,"+(a*(.5+r()*.5)).toFixed(3)+")");mg.addColorStop(1,"rgba(222,228,236,0)");m.fillStyle=mg;m.fillRect(-rx,-rx,rx*2,rx*2);m.restore()}}
    return {cv:M[0],H:Hm}}
  function drawMist(M,y,off,al){var W=w;c.globalAlpha=al;var x=-(off%W);c.drawImage(M.cv,x,y,W,M.H);c.drawImage(M.cv,x+W,y,W,M.H)}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var par=G.mob?0:-SP.v*h*.06;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.setTransform(dpr,0,0,dpr,0,par*.4*dpr);c.drawImage(oBg,0,0,w,h);
    var bh=G.mob?G.U:h;
    drawMist(oM1,G.spring-bh*.12,t*7*G.k,e*.95);
    c.globalAlpha=e;c.setTransform(dpr,0,0,dpr,0,par*dpr);c.drawImage(oBr,0,0,w,h);
    drawMist(oM2,G.spring+bh*.05,t*12*G.k+w*.37,e);
    drawMist(oM1,G.river-bh*.2,t*4.5*G.k+w*.61,e*.8);
    c.setTransform(1,0,0,1,0,0);c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.gx,G.crown]:[w/2,h/2]}};
})();'''

R["story"] = r'''/* the story scene: one cell, drawn in fine line. Step 1 a lipid nanoparticle carrying an mRNA coil reaches the
   membrane and fuses; step 2 the strand is free in the cytoplasm and ribosomes travel along it, each trailing a growing
   protein; step 3 the cell releases cytokines and chemokines (genetic adjuvant); step 4 immune cells arrive at a tumor
   cluster and it shrinks. Each step changes one labelled part. */
var MB_STR="M196 214 C236 196 262 246 304 232 S372 196 404 226 S436 300 404 334";
var MB_CK=[];(function(){var r=function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}(19);for(var i=0;i<20;i++){var a=-.62+r()*1.05,x0=300+198*Math.cos(a)*.98,y0=300+170*Math.sin(a)*.98,d=60+r()*230;MB_CK.push([x0,y0,x0+Math.cos(a)*d,y0+Math.sin(a)*d*.8,r()<.35,r()*.12])}})();
var MB_TU=[[640,452,30],[690,440,26],[664,494,27],[612,494,22],[712,486,23],[636,410,20],[690,402,18]];
var MB_IM=[[860,170,592,416],[880,330,646,372],[860,600,736,438],[700,640,708,524]];
function mbBlob(cx,cy,r,seed,n,j){var d="";for(var i=0;i<=n;i++){var a=i/n*6.283,rr=r*(1+j*Math.sin(a*3+seed)+j*.6*Math.sin(a*5+seed*2));d+=(i?"L":"M")+(cx+Math.cos(a)*rr).toFixed(1)+" "+(cy+Math.sin(a)*rr).toFixed(1)}return d+"Z"}
function scene(){
  var mob=MOBILE(),i,s="";
  s+='<svg viewBox="0 60 800 520" aria-hidden="true"><defs><radialGradient id="mbCy" cx="300" cy="300" r="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="rgba(96,120,168,.16)"/><stop offset="1" stop-color="rgba(96,120,168,.05)"/></radialGradient>'+
   '<clipPath id="mbCell"><ellipse cx="300" cy="300" rx="192" ry="162"/></clipPath></defs>';
  /* the cell */
  s+='<ellipse class="cyto" cx="300" cy="300" rx="200" ry="170"/>';
  s+='<g clip-path="url(#mbCell)">';for(i=0;i<20;i++){var y=140+i*17;s+='<path class="hat" d="M90 '+y+' C200 '+(y+8)+' 330 '+(y-6)+' 520 '+(y+4)+'"/>'}s+='</g>';
  s+='<ellipse class="bn" id="mbMem" cx="300" cy="300" rx="200" ry="170"/><ellipse class="bnf" cx="300" cy="300" rx="192" ry="162"/>';
  s+='<path class="bnf" d="M176 348 C196 300 186 262 214 246 M188 392 C232 410 300 414 346 396 M330 392 C356 380 376 364 386 340"/>';
  s+='<ellipse class="nucf" cx="262" cy="330" rx="66" ry="54"/><ellipse class="bnf" cx="262" cy="330" rx="59" ry="47"/><circle class="bnf" cx="276" cy="322" r="13"/>';
  /* the tumor cluster, waiting from the start */
  s+='<g id="mbTu">';MB_TU.forEach(function(q,k){s+='<g class="mbT" transform="translate('+q[0]+' '+q[1]+')"><path class="tum" d="'+mbBlob(0,0,q[2],k+1,18,.08)+'"/><circle class="tumn" cx="2" cy="1" r="'+(q[2]*.32).toFixed(1)+'"/></g>'});s+='</g>';
  /* mRNA in the cell, ribosomes and their proteins */
  s+='<path class="acc" id="mbStr" d="'+MB_STR+'"/>';
  s+='<g id="mbRibs">';for(i=0;i<3;i++){s+='<g class="mbR"><g class="mbB">';for(var b=0;b<9;b++)s+='<circle class="bead" r="2.6" cx="0" cy="0"/>';s+='</g><ellipse class="rib" cx="0" cy="-5" rx="11" ry="8"/><ellipse class="rib" cx="0" cy="6" rx="8" ry="5"/></g>'}s+='</g>';
  /* cytokines and chemokines */
  s+='<g id="mbCk">';MB_CK.forEach(function(q){s+=q[4]?'<path class="ck2 mbK" d="M0 -4L4 0L0 4L-4 0Z"/>':'<circle class="ck mbK" r="3.6"/>'});s+='</g>';
  /* immune cells */
  s+='<g id="mbIm">';MB_IM.forEach(function(q,k){s+='<g class="mbI"><path class="imm" d="'+mbBlob(0,0,19,k*2+3,28,.07)+'"/><circle class="immn" cx="-3" cy="-2" r="8"/></g>'});s+='</g>';
  /* the lipid nanoparticle */
  s+='<g id="mbLnp"><circle class="core" r="26"/>';for(i=0;i<22;i++){var a=i/22*6.283;s+='<path class="tail" d="M'+(Math.cos(a)*25).toFixed(1)+' '+(Math.sin(a)*25).toFixed(1)+'L'+(Math.cos(a)*18).toFixed(1)+' '+(Math.sin(a)*18).toFixed(1)+'"/><circle class="lip" cx="'+(Math.cos(a)*28).toFixed(1)+'" cy="'+(Math.sin(a)*28).toFixed(1)+'" r="3.4"/>'}
  s+='<path class="acc" d="M-12 -4 C-8 -14 0 -12 2 -4 S10 8 14 0 M-14 6 C-8 14 0 12 4 6"/></g>';
  /* labels */
  var lx=mob?470:470;
  s+='<g id="mbL1"><path class="ld" d="M128 130L176 104H'+(mob?196:210)+'"/><circle class="accf" cx="128" cy="130" r="3"/>'+(mob?'<text x="204" y="92" class="a">LIPID</text><text x="204" y="120" class="a">NANOPARTICLE</text>':'<text x="216" y="108" class="a">LIPID NANOPARTICLE</text>')+'<text x="'+(mob?204:216)+'" y="'+(mob?148:128)+'">WITH mRNA</text></g>';
  s+='<g id="mbL2"><path class="ld" d="M404 334L'+lx+' 360"/><circle class="accf" cx="404" cy="334" r="3"/><text x="'+(lx+8)+'" y="366" class="a">mRNA</text><text x="300" y="'+(mob?112:118)+'" text-anchor="middle">RIBOSOMES MAKE PROTEIN</text></g>';
  s+=mob?'<g id="mbL3"><text x="520" y="100" class="a">CYTOKINES &amp;</text><text x="520" y="126" class="a">CHEMOKINES</text></g>':'<g id="mbL3"><text x="520" y="118" class="a">CYTOKINES &amp; CHEMOKINES</text></g>';
  s+='<g id="mbL4"><text x="'+(mob?790:770)+'" y="340" text-anchor="end" class="a">IMMUNE CELLS</text><text x="664" y="'+(mob?566:556)+'" text-anchor="middle">TUMOR</text></g>';
  return s+'</svg>';
}
function storyDraw(svg){
  var E={mem:$("#mbMem",svg),lnp:$("#mbLnp",svg),str:$("#mbStr",svg),ribs:$$(".mbR",svg),ck:$$(".mbK",svg),im:$$(".mbI",svg),tu:$$(".mbT",svg),l1:$("#mbL1",svg),l2:$("#mbL2",svg),l3:$("#mbL3",svg),l4:$("#mbL4",svg)};
  var SL=E.str.getTotalLength(),PTS=[];for(var i=0;i<=120;i++){var q=E.str.getPointAtLength(SL*i/120);PTS.push([q.x,q.y])}
  function at(f){f=Math.max(0,Math.min(1,f))*120;var i0=Math.floor(f),i1=Math.min(120,i0+1),u=f-i0;return [lerp(PTS[i0][0],PTS[i1][0],u),lerp(PTS[i0][1],PTS[i1][1],u)]}
  return function(p,b){
    if(!E.mem.isConnected)return;
    var s1=seg(p,.0,.14),f1=seg(p,.16,.26),o1=seg(p,.2,.26),s2=seg(p,.27,.46),o2=seg(p,.5,.55),s3=seg(p,.52,.72),o3=seg(p,.76,.84),s4=seg(p,.77,.96);
    svg.style.opacity=(.25+.75*b).toFixed(3);
    var lx=lerp(30,150,s1),ly=lerp(96,170,s1),sc=1-.35*f1;
    E.lnp.setAttribute("transform","translate("+lx.toFixed(1)+" "+ly.toFixed(1)+") scale("+sc.toFixed(3)+")");E.lnp.style.opacity=(b*(1-f1)).toFixed(3);
    E.l1.style.opacity=(b*s1*(1-o1)).toFixed(3);
    var sd=Math.max(f1*.6,s2);E.str.style.strokeDasharray=SL;E.str.style.strokeDashoffset=(SL*(1-sd)).toFixed(1);E.str.style.opacity=(b*(1-.6*s4)).toFixed(3);
    E.ribs.forEach(function(g,k){var u=seg(p,.28+k*.03,.5+k*.02),pos=at(.08+k*.28+u*.2);g.setAttribute("transform","translate("+pos[0].toFixed(1)+" "+pos[1].toFixed(1)+")");g.style.opacity=(b*Math.min(1,u*4)*(1-.7*s4)).toFixed(3);
      var beads=g.firstChild.childNodes,nb=Math.round(u*beads.length);for(var j=0;j<beads.length;j++){var bb=beads[j];bb.setAttribute("cx",(Math.sin(j*.9+k)*5).toFixed(1));bb.setAttribute("cy",(-14-j*5.4).toFixed(1));bb.style.opacity=j<nb?1:0}});
    E.l2.style.opacity=(b*s2*(1-o2)).toFixed(3);
    if(s3>.005){E.mem.style.stroke="rgba(147,167,209,"+(.62+.33*s3*(1-s4*.4)).toFixed(3)+")";E.mem.style.strokeWidth=(1.2+.6*s3).toFixed(2)}else{E.mem.style.stroke="";E.mem.style.strokeWidth=""}
    E.ck.forEach(function(el,k){var q=MB_CK[k],u=seg(p,.53+q[5],.7+q[5]),x=lerp(q[0],q[2],u),y=lerp(q[1],q[3],u);el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");el.style.opacity=(b*(u>0?1:0)*(1-.75*o3)).toFixed(3)});
    E.l3.style.opacity=(b*s3*(1-o3)).toFixed(3);
    E.im.forEach(function(g,k){var q=MB_IM[k],u=seg(p,.77+k*.025,.92+k*.015);g.setAttribute("transform","translate("+lerp(q[0],q[2],u).toFixed(1)+" "+lerp(q[1],q[3],u).toFixed(1)+")");g.style.opacity=(b*u).toFixed(3)});
    var shr=seg(p,.86,.98);E.tu.forEach(function(g,k){var q=MB_TU[k],z=1-.3*shr;g.setAttribute("transform","translate("+q[0]+" "+q[1]+") scale("+z.toFixed(3)+")");g.style.opacity=(b*(.55+.45*s4)*(1-.35*shr)).toFixed(3)});
    E.l4.style.opacity=(b*s4).toFixed(3);
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
(HERE / "montani-bio.src.html").write_text(out)
print("wrote", HERE / "montani-bio.src.html", len(out))
