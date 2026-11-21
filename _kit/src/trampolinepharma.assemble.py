#!/usr/bin/env python3
"""Assemble trampolinepharma.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/trampolinepharma.assemble.py && node build.js src/trampolinepharma.src.html ../trampolinepharma/index.html
Facts: _kit/dossiers/trampolinepharma.md. Palette: the live logo — gold #ccb478, charcoal #424242 on white. Site ink #151514,
bone #f3f1ea, accent gold #c6a45f. Display Montserrat (close to the logo's geometric sans)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>TrAMPoline Pharma — Engineered TIL and TCR cell therapy for solid tumors</title>
<meta name="description" content="TrAMPoline Pharma is a cellular immunotherapy company in Aurora, Colorado developing personalized (autologous) therapies for solid tumor cancers. Its lead candidate MightyTIL is a gene-engineered tumor infiltrating lymphocyte built on the patented coR8:Amp platform, funded by NIH NCI SBIR awards.">
<meta name="theme-color" content="#151514">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect width=\'64\' height=\'64\' fill=\'%23151514\'/%3E%3Ccircle cx=\'32\' cy=\'32\' r=\'17\' fill=\'none\' stroke=\'%23c6a45f\' stroke-width=\'5\'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Montserrat:300,400; Inter Tight:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#151514;--inkr:21,21,20;--boner:243,241,234;--accr:198,164,95;--ink2:#1a1a18;--ink3:#211f1c;--deep:#101010;
  --bone:#f3f1ea;--bone2:#e9e6dd;--bone3:#d9d5c9;
  --stone:#b0aa9c;--stoneD:#575249;
  --acc:#c6a45f;--accL:#ddc189;--accD:#8a6a24;
  --hair:rgba(243,241,234,.14);--hairD:rgba(21,21,20,.16);
  --disp:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Montserrat',system-ui,sans-serif;
  --sans:'Inter Tight',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:#151514}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand img{height:26px;width:auto;display:block}
.brand .bt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
@media (max-width:520px){.brand img{height:20px}}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9b958a;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #6d675c;transition:background .35s,border-color .35s}
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
.scene .mb2{fill:none;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .sk{fill:none;stroke:rgba(var(--boner),.7);stroke-width:1.2}
.scene .dom{fill:rgba(var(--boner),.08);stroke:rgba(var(--boner),.85);stroke-width:1.3}
.scene .dom.a2{fill:rgba(var(--accr),.2);stroke:var(--accL)}
.scene .ant{fill:none;stroke:var(--accL);stroke-width:3.4;stroke-linecap:round}
.scene .read{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1;stroke-dasharray:3 5}
.scene .bind{fill:none;stroke:var(--accL);stroke-width:1.2;stroke-dasharray:4 4}
.scene .pulse{fill:none;stroke:rgba(var(--accr),.5);stroke-width:1}
.scene .sigl{fill:none;stroke:var(--accL);stroke-width:1.4;stroke-linecap:round}
.scene .ax{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .cv0{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1.4;stroke-dasharray:5 4}
.scene .cv1{fill:none;stroke:var(--accL);stroke-width:1.8}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c8c2b6;paint-order:stroke;stroke:#1a1a18;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.nm2{fill:var(--bone)}
.scene text.cap{fill:var(--accL)}
/* ===== TrAMPoline additions ===== */
#pre .wm .c:nth-child(-n+5){color:var(--accL)}
.hero .hero-h{font-size:clamp(42px,4.1vw,82px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:13ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
html body .hero h1#pageTitle.hero-h{font-size:clamp(42px,3.2vw + 14px,76px)!important}
@media (max-width:860px){html body .hero h1#pageTitle.hero-h{font-size:clamp(36px,9.8vw,68px)!important}.hero .hero-h{font-size:clamp(36px,9.8vw,68px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:46ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:var(--ink);border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(46px,4.6vw,86px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
.ftr .fcv{opacity:.34}/* DF: the cell echoed behind the footer wordmark stays well below the letterforms */
.hero-note{display:block;margin-top:14px;color:rgba(var(--boner),.4)}
/* platform: four properties */
.tcards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.tcard{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.tcard::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tcard:hover::before{transform:scaleX(1)}
.tcard svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.tcard svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.tcard svg .a{stroke:var(--accD)}
.tcard h3{font-family:var(--disp);font-weight:300;font-size:clamp(21px,1.7vw,29px);line-height:1.14;letter-spacing:-.02em;margin:0 0 14px}
.tcard p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:34ch}
.tcard .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1100px){.tcards{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:44px}}
@media (max-width:620px){.tcards{grid-template-columns:1fr}.tcard p{max-width:52ch}}
.pull{margin:clamp(64px,7vw,112px) 0 0;display:grid;grid-template-columns:minmax(0,3fr) minmax(0,9fr);gap:var(--gap);border-top:1px solid var(--hairD);padding-top:22px}
.pull blockquote{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(23px,2.2vw,36px);line-height:1.22;letter-spacing:-.02em;max-width:36ch}
.pull .lab{color:var(--accD)}
@media (max-width:760px){.pull{grid-template-columns:1fr}}
/* pipeline rows */
.pipe{list-style:none;margin:0;padding:0}
.pipe-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,2.8fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.pipe-row:last-child{border-bottom:1px solid var(--hair)}
.pipe-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.pipe-row:hover::after{transform:scaleX(1)}
.pipe-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.6vw,44px);line-height:1.02;letter-spacing:-.03em;margin:0 0 10px}
.pipe-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.pipe-row p{margin:0;color:var(--stone);font-size:16px;max-width:54ch}
.pipe-row .meta{display:flex;flex-direction:column;gap:8px}
.pipe-row.lead h3{color:var(--bone)}
.pipe-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ink);background:var(--acc);padding:6px 8px 5px}
@media (max-width:1024px){.pipe-row{grid-template-columns:1fr 1fr;row-gap:16px}.pipe-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.pipe-row{grid-template-columns:1fr}}
/* team: portraits from their own site */
.ppl{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap) var(--gap);row-gap:clamp(40px,4vw,64px)}
.ppl-c{position:relative}
.ppl-c .ph2{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;background:var(--ink3);margin-bottom:22px;filter:saturate(.82) contrast(1.02)}
.ppl-c h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.75vw,30px);line-height:1.08;letter-spacing:-.025em;margin:0 0 10px}
.ppl-c .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:16px}
.ppl-c p{color:var(--stone);font-size:15.5px;line-height:1.6;margin:0;max-width:38ch}
@media (max-width:1100px){.ppl{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.ppl{grid-template-columns:1fr}.ppl-c .ph2{aspect-ratio:4/3}}
.ppl-note{margin-top:clamp(40px,5vw,72px);color:var(--stone);font-size:16px;max-width:72ch}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("trampolinepharma-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M48 2a46 46 0 1 1 0 92a46 46 0 1 1 0-92"/></svg>
    <div class="wm"><span>TRAMPOLINE</span></div>
  </div>
  <span class="lab pl">Cellular immunotherapy &middot; Aurora, Colorado</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="TrAMPoline Pharma, home"><img src="logo.webp" alt="TrAMPoline Pharma" width="640" height="150"><span class="bt">TrAMPoline Pharma</span></a>'

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
    <div><span class="lab">Based in</span><br>Aurora, Colorado</div>
    <div><span class="lab">Funding</span><br>NIH NCI &middot; SBIR Phase I and II</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">TrAMPoline Pharma</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="TrAMPoline Pharma";\nvar PK="trampolinepharma";'

R["content"] = r'''var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"'];
var AW_TCR="https://reporter.nih.gov/project-details/11315490";
var AW_TIL2="https://reporter.nih.gov/project-details/10685604";
var AW_TIL1="https://reporter.nih.gov/project-details/10472171";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-09-10",s:"NIH RePORTER · NCI",t:"SBIR Phase I: Development of a universal next generation T cell receptor cancer therapy — preclinical proof-of-concept and optimization",u:AW_TCR},
 {d:"2023-09-01",s:"NIH RePORTER · NCI",t:"SBIR Phase II, year two: Next generation autologous TIL cancer therapy — development of GMP manufacturing process",u:AW_TIL2},
 {d:"2022-09-01",s:"NIH RePORTER · NCI",t:"SBIR Phase II awarded: Next generation autologous TIL cancer therapy — development of GMP manufacturing process",u:AW_TIL1}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
var SECS={technology:"story",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact",about:"about"};
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function tcards(){var C=[
  ["coR8:Amp™","The high-affinity CD8α co-receptor on the outside, fused to the MyD88 signalling domain on the inside, so MyD88 switches on strictly when the T cell receptor engages the MHC–antigen on a tumor cell.",'<path d="M28 6V26"/><path class="a" d="M16 26H40V38H16Z"/><path d="M28 38V50"/><path class="a" d="M14 50H42"/>'],
  ["Many antigens, not one","Tumor infiltrating lymphocytes react to multiple tumor antigens, including the neo-antigens a mutating solid tumor forms. A CAR T cell recognises a single antigen, which is often lost as the cancer evolves.",'<circle cx="16" cy="18" r="6"/><circle class="a" cx="34" cy="14" r="6"/><circle cx="24" cy="34" r="6"/><circle class="a" cx="42" cy="36" r="6"/><path d="M16 24L24 28M34 20L24 28M42 30L24 28"/>'],
  ["Less exhaustion","Engineered TILs carry less of the checkpoint receptors that shut a T cell down, and in the company’s preclinical work respond months after they were transferred.",'<path d="M8 40C16 40 18 14 26 14S36 40 48 40"/><path class="a" d="M8 44H48"/>'],
  ["Less IL-2","The same responses are reported at lower levels of the growth factor IL-2, whose toxicity in patients limits how far TIL therapy can be pushed.",'<path d="M20 8H36L32 30V46H24V30Z"/><path class="a" d="M24 34H32"/>']];
  return '<div class="tcards">'+C.map(function(c,i){return '<div class="tcard"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function pipeline(){var A=[
  ["MightyTIL™ · coR8:Amp™","Engineered TIL therapy","The lead candidate: a gene-engineered tumor infiltrating lymphocyte for orphan indications (sarcoma, head and neck cancer) and melanoma. The company reports significantly enhanced anti-tumor activity in multiple animal tumor models compared with conventional unmodified TIL.",["Solid tumors","Preclinical"],1,""],
  ["NIH NCI · SBIR Phase II","GMP manufacturing","$2.0M over two years to build the GMP manufacturing process: g-retroviral vectors with the CDMO Vigene Biosciences, then GMP coR8:Amp™ TILs with the Gates Biomanufacturing Facility and the Cell Therapy Operations Program at the University of Colorado Anschutz Medical Campus, towards pre-IND and IND filings for a Phase I trial in immune-refractory solid tumors.",["2022–25","$2,000,000"],0,AW_TIL2],
  ["NIH NCI · SBIR Phase I","MightyTCR-T","A “universal” TCR-T therapy, tested against acute myeloid leukemia. Rather than classical MHC-restricted recognition, it uses synthetic CD1d-reactive T cell receptors of the kind invariant natural killer T cells carry. The award funds lead candidate selection, in vitro and in vivo validation against AML, regimen optimisation with approved AML drugs, and biodistribution, PK and PD.",["2026–27","$398,039"],0,AW_TCR]];
  return '<ul class="pipe">'+A.map(function(a){return '<li class="pipe-row'+(a[4]?' lead':'')+'"><div><h3>'+esc(a[1])+'</h3><span class="nm3">'+esc(a[0])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Lead</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+(a[5]?'<a class="lab ul" href="'+a[5]+'" target="_blank" rel="noopener">NIH record ↗</a>':'')+'</div></li>'}).join("")+'</ul>'}
function people(){var P=[
  ["davila","Eduardo Davila, PhD","Co-founder &middot; Chief Scientific Officer","Professor in the Department of Medicine, Medical Oncology at the University of Colorado, where he is Director of Cancer Immunotherapy. His team dissected the role of the MyD88 protein in augmenting T cells’ effector functions and persistence, the signalling the coR8:Amp platform puts to work."],
  ["duke","Richard C Duke, PhD","President","A co-scientific founder and former chief executive of GlobeImmune, and involved in the formation or management of Newellink, ApopLogic Pharmaceuticals, Sierra Neuropharmaceuticals, MenoGeniX, PeptiVir and Aurora Oncology. Those Colorado companies have raised more than $200 million. Tenured faculty at the University of Colorado; McGill (BSc, MSc) and Colorado (PhD)."],
  ["crump","Lyndsey Crump, PhD","Senior Scientist","A cancer biologist who joined in 2023 and guides one of the adoptive cell therapy pipelines; contact principal investigator on the 2026 NCI award. MS in Biomedical Sciences from the University of Wisconsin, PhD in Cancer Biology from the University of Colorado Anschutz Medical Campus, where she also held a post-doctoral fellowship."],
  ["liu","Jing Liu, MD, PhD","Senior Scientist","Four years of work in adenovirus gene therapy and six in immunotherapy, specialising in viral vector optimisation, homologous engineering, T cell engineering and adoptive cell therapy."]];
  return '<div class="ppl">'+P.map(function(p){return '<div class="ppl-c"><img class="ph2" src="'+p[0]+'.webp" alt="'+esc(p[1])+'" width="720" height="720" loading="lazy" decoding="async"><h3>'+esc(p[1])+'</h3><span class="cr">'+p[2]+'</span><p>'+esc(p[3])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cellular immunotherapy &middot; Aurora, Colorado<span class="nomob"> &middot; NIH NCI SBIR</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A T cell that</span><span class="l"><em>keeps its strength.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>TrAMPoline Pharma develops personalized (autologous) cell therapies for solid tumor cancers. Its lead candidate, MightyTIL™, is a gene-engineered tumor infiltrating lymphocyte built on the patented coR8:Amp™ platform.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">The technology '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Pipeline</a></div>'+
   '<span class="lab hero-note">Illustration: a T lymphocyte, rendered for this page</span></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<p class="txt" id="mani">T cell therapy can cure some blood cancers. In solid tumors, few immune cells reach the tumor and most lose their strength — so TrAMPoline engineers <em>the T cell itself.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%</span><p class="k">of all cancers are solid tumors, the company’s focus</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~60%</span><p class="k">of cancer patients experience T cell immunotherapy failures, across checkpoint inhibitors, CAR T, TCR-engineered and TIL</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.4M</span><p class="k">in NIH NCI SBIR funding across the TIL and TCR programmes, 2022–27</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology &middot; coR8:Amp™</span><h2 class="d3">Strength, <em>only on contact.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Antigen</span><span>CD8α</span><span>MyD88</span><span>Persistence</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A tumor antigen, held out on MHC.</h2><p>A tumor cell displays fragments of its own proteins on MHC molecules. The T cell receptor reads them — but on a solid tumor the antigen is often weak, and the grip too loose to provoke a real response.</p></article>'+
     '<article class="step"><h2>The co-receptor tightens the grip.</h2><p>coR8:Amp™ adds the high-affinity CD8α co-receptor, which binds the same MHC molecule. Responses to weak and suboptimal antigens, including tumor neo-antigens, increase — and because CD8α is used, the approach works regardless of the patient’s HLA type.</p></article>'+
     '<article class="step"><h2>MyD88 switches on inside.</h2><p>Fused to the co-receptor’s intracellular tail is MyD88, a signalling protein that amplifies activation. It fires strictly upon engagement of the T cell receptor with the MHC–antigen on a tumor cell: no contact, no signal.</p></article>'+
     '<article class="step"><h2>And the cell keeps going.</h2><p>In the company’s preclinical studies the engineered cells show higher potency, less of the checkpoint receptors that drive exhaustion, activity months after transfer, and the same effect with less IL-2.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The platform</span><h2 class="d2 split">One change, <em>four consequences.</em></h2></div><p data-r>coR8:Amp™ is a single fusion construct: the CD8α co-receptor joined to the MyD88 signalling domain. The company describes it as universal — it can be used whatever the patient’s HLA type, and in TILs, TCR-T cells or other engineered T cells.</p></div>'+
   tcards()+
   '<div class="pull"><span class="lab">In their words</span><blockquote>Reviving the patient’s immune system to destroy cancer—forever.™</blockquote></div>'+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the bench <em>towards the clinic.</em></h2></div><p data-r>A lead engineered TIL therapy for solid tumors, the GMP manufacturing process behind it, and a second programme applying the same platform to a universal T cell receptor — both funded by the National Cancer Institute.</p></div>'+
   pipeline()+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Cell therapy, <em>built in Colorado.</em></h2></div><p data-r>A founding scientist who mapped the signalling the platform depends on, a president who has built Colorado biotechs for three decades, and the scientists running the two pipelines.</p></div>'+
   people()+
   '<p class="ppl-note">Based at the Fitzsimons Innovation Community in Aurora, next to the University of Colorado Anschutz Medical Campus, where the GMP manufacturing work is carried out.</p>'+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>on the record.</em></h2></div><p data-r>The NIH records for the two programmes, newest first.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>TrAMPoline.</em></h2>'+
   '<p class="sub" data-r>For the MightyTIL™ and MightyTCR-T programmes, manufacturing or collaboration, reach the team in Aurora, Colorado.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+AW_TCR+'" target="_blank" rel="noopener">The 2026 NCI award '+ARR+'</a><a class="btn" href="'+AW_TIL2+'" target="_blank" rel="noopener">The TIL manufacturing award</a></div>'+
   '<div class="ctc2"><div><span class="lab">Based in</span><p>12635 E Montview Blvd., Suite 175<br>Aurora, Colorado 80045</p></div>'+
    '<div><span class="lab">Company</span><p>TrAMPoline Pharma, Inc.</p></div>'+
    '<div><span class="lab">Funding</span><p>NIH National Cancer Institute<br>SBIR Phase I and Phase II</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Aurora, Colorado</div>'+
   '<div class="c"><span class="lab">Focus</span>Engineered TIL and TCR-T<br>therapies for solid tumors</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="#contact" data-to="contact">Aurora, CO 80045</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 620 44" aria-hidden="true"><text x="310" y="36" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:300;font-size:42px;letter-spacing:.05em"><tspan fill="#ddc189">TrAMP</tspan>OLINE PHARMA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 TrAMPoline Pharma, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"TrAMPoline Pharma — Engineered TIL and TCR cell therapy for solid tumors",x:"Home"}}'''

R["field"] = (HERE / "trampolinepharma.field.js").read_text()
R["story"] = (HERE / "trampolinepharma.story.js").read_text()


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
(HERE / "trampolinepharma.src.html").write_text(out)
print("wrote", HERE / "trampolinepharma.src.html", len(out))
