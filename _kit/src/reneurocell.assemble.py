#!/usr/bin/env python3
"""Assemble reneurocell.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/reneurocell.assemble.py && node build.js src/reneurocell.src.html ../reneurocell/index.html
Facts: _kit/dossiers/reneurocell.md. Palette: the live reneurocell.com (logo blue #2a8fd1 + grey #707070, band #38a0f8,
page wash #e8f8f8, headings #3673d4); Open Sans Light is the logo face, Space Grotesk the site's heading face."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>ReNeuroCell Therapeutics — Neuroimplants for spinal cord injury</title>
<meta name="description" content="ReNeuroCell Therapeutics, a spinoff of FORTH and the University of Crete, develops neuroimplants: human neural stem cells housed in precision-microfabricated, bioactive scaffolds, as a treatment for chronic spinal cord injury.">
<meta name="theme-color" content="#081a2e">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23081a2e'/%3E%3Ctext x='32' y='45' text-anchor='middle' font-family='Arial' font-size='38' fill='%2338a0f8'%3ER%3C/text%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Space Grotesk:300,400; Open Sans:300,400,600; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#081a2e;--inkr:8,26,46;--boner:238,247,250;--accr:56,160,248;--ink2:#0b2034;--ink3:#11293f;--deep:#06121f;
  --bone:#eef7fa;--bone2:#e1f1f5;--bone3:#cfe3ea;
  --stone:#a3b6c6;--stoneD:#4a5c6c;
  --acc:#1a74b8;--accL:#5cb4f5;--accD:#1662a8;
  --hair:rgba(238,247,250,.14);--hairD:rgba(8,26,46,.16);
  --disp:'Space Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Space Grotesk',system-ui,sans-serif;
  --sans:'Open Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#081a2e,#081a2e)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the wordmark: ReNeuroCell, with R, N and C in the logo's blue and the rest in grey (as on reneurocell.com)
WM = '<span class="b">R</span>e<span class="b">N</span>euro<span class="b">C</span>ell'

R["logocss"] = r'''.brand{display:flex;align-items:baseline;gap:10px;height:56px;color:var(--bone);align-items:center}
.brand .bt{font:300 25px/1 'Open Sans',system-ui,sans-serif;letter-spacing:-.005em;white-space:nowrap;color:#c3ccd4}
.brand .bt .b{color:var(--accL)}
.brand .bs{font:400 9.5px/1 var(--mono);letter-spacing:.2em;text-transform:uppercase;color:#9fb0bf;padding-top:5px}
@media (max-width:420px){.brand .bs{display:none}}'''

storycss = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa6b4;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66748a;transition:background .35s,border-color .35s}
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
.scene .rg{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .rc{fill:none;stroke:var(--bone);stroke-width:1.5}
.scene .re{fill:none;stroke:rgba(var(--boner),.7);stroke-width:1.2}
.scene .rf{fill:none;stroke:rgba(var(--boner),.32);stroke-width:1}
.scene .rgm{fill:none;stroke:rgba(var(--accr),.7);stroke-width:1}
.scene .rsb{fill:rgba(var(--accr),.08);stroke:none}
.scene .rsp{fill:none;stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .rso{fill:none;stroke:var(--accL);stroke-width:1.5}
.scene .rcl{fill:#7fe0b4;stroke:#0b2034;stroke-width:1;transition:fill .5s}
.scene .rcl.nu{fill:#f2c46a}
.scene .rnt{fill:none;stroke:#f2c46a;stroke-width:1.3}
.scene .rk{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9d1db;paint-order:stroke;stroke:#0b2034;stroke-width:5px;stroke-linejoin:round}
.scene text.rl{fill:#c9d4df}
.scene text.ra{fill:var(--accL)}
.scene text.rg2{fill:#7fe0b4}
.scene text.cap{fill:var(--accL)}
'''
R["scenecss"] = storycss + r'''/* ===== ReNeuroCell additions ===== */
.ftr .fcv{opacity:.2}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(42px,4.1vw,86px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:12ch}
@media (max-width:860px){.fieldbg{background:#081a2e!important}}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:42ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:#fff;border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
/* manifesto: statement left, stats stacked right (DN) */
.mani>.wrap{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,4fr);column-gap:calc(var(--gap)*3);align-items:start}
.mani .mani-in{margin:0;width:auto}
.mani .txt{font-size:clamp(28px,3vw,50px);max-width:24ch;line-height:1.14}
.mani .stats{margin-top:0;grid-template-columns:1fr;gap:34px;padding-top:6px}
.stat .v{font-size:clamp(46px,4.2vw,80px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
@media (max-width:900px){.mani>.wrap{grid-template-columns:1fr}.mani .stats{margin-top:clamp(56px,8vw,96px)}}
/* expertise rows (light) */
.xp{list-style:none;margin:0;padding:0}
.xp-row{display:grid;grid-template-columns:56px minmax(0,4fr) minmax(0,6fr);column-gap:var(--gap);align-items:start;padding:22px 0 24px;border-top:1px solid var(--hairD);position:relative}
.xp-row:last-child{border-bottom:1px solid var(--hairD)}
.xp-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.xp-row:hover::after{transform:scaleX(1)}
.xp-row .no{font:400 11px/1.6 var(--mono);letter-spacing:.14em;color:var(--accD);padding-top:.7em}
.xp-row p{padding-top:.35em}
.xp-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2.2vw,36px);line-height:1.08;letter-spacing:-.025em;margin:0}
.xp-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:56ch}
@media (max-width:760px){.xp-row{grid-template-columns:40px minmax(0,1fr);row-gap:10px}.xp-row p{grid-column:2}}
/* programmes (dark) */
.rd{list-style:none;margin:0;padding:0}
.rd-row{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,4.4fr) minmax(0,4fr) minmax(0,2fr);column-gap:var(--gap);align-items:start;padding:20px 0 22px;border-top:1px solid var(--hair);position:relative}
.rd-row:last-child{border-bottom:1px solid var(--hair)}
.rd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.rd-row:hover::after{transform:scaleX(1)}
.rd-row .yr{font:400 11px/1.6 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.rd-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.9vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0}
.rd-row p{margin:0;color:var(--stone);font-size:15.5px;line-height:1.6}
.rd-row .meta{display:flex;flex-direction:column;gap:8px;align-items:flex-start}
.rd-row .meta a{color:var(--bone)}
.rd-row .tag{display:inline-block;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--acc);padding:6px 8px 5px}
@media (max-width:1100px){.rd-row{grid-template-columns:minmax(0,1fr) minmax(0,3fr);row-gap:12px}.rd-row p{grid-column:2}.rd-row .meta{grid-column:2;flex-direction:row;flex-wrap:wrap;gap:8px 20px}}
@media (max-width:620px){.rd-row{grid-template-columns:1fr}.rd-row p,.rd-row .meta{grid-column:1}}
.fund{margin-top:clamp(56px,6vw,96px);display:flex;flex-wrap:wrap;justify-content:center;gap:10px 40px;text-align:center}
.fund .lab{width:100%;color:var(--stone)}
.fund span.n{font-family:var(--disp);font-weight:300;font-size:clamp(18px,1.5vw,22px);color:var(--bone);letter-spacing:-.01em}
/* team (masthead, CL) */
.light .mh{--mh-ink:#081a2e;--mh-mute:#4a5c6c;--mh-line:rgba(8,26,46,.16);--mh-accent:#1662a8;--mh-display:'Space Grotesk',system-ui,sans-serif;--mh-sans:'Open Sans',system-ui,sans-serif;--mh-mono:'IBM Plex Mono',ui-monospace,monospace}
.light .mh-name{letter-spacing:-.01em}
.orig{margin-top:clamp(56px,6vw,90px);display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--gap)}
.orig>div{border-top:1px solid var(--hairD);padding-top:20px;position:relative}
.orig>div::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.orig>div:hover::before{transform:scaleX(1)}
.orig .lab{display:block;margin-bottom:12px;color:var(--accD)}
.orig h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.9vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 10px}
.orig p{margin:0;color:var(--stoneD);font-size:15.5px;max-width:48ch}
@media (max-width:760px){.orig{grid-template-columns:1fr;row-gap:32px}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("reneurocell-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M20 26H76V70H20ZM30 26V70M40 26V70M50 26V70M60 26V70M70 26V70M20 37H76M20 48H76M20 59H76"/></svg>
    <div class="wm"><span>RENEUROCELL</span></div>
  </div>
  <span class="lab pl">Neuroimplants · Heraklion, Crete</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="ReNeuroCell Therapeutics, home"><span class="bt">' + WM + '</span><span class="bs">Therapeutics</span></a>'

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
    <div><span class="lab">Office</span><br>Heraklion, Crete</div>
    <div><span class="lab">Email</span><br>info@reneurocell.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">ReNeuroCell</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="ReNeuroCell";\nvar PK="reneurocell";'

R["content"] = r'''var FONTS=['300 1em "Space Grotesk"','400 1em "Space Grotesk"','300 1em "Open Sans"','400 1em "Open Sans"','400 1em "IBM Plex Mono"'];
var MAIL="info@reneurocell.com";
var CORDIS="https://cordis.europa.eu/project/id/101310742";
var SHEETS=[];var GROUPS=[];var PEOPLE=[
 {name:"Achilleas Gravanis",title:"CEO · Co-founder",sum:"Former Professor of Pharmacology, University of Crete Medical School; co-founder of BioNature."},
 {name:"Dimitrios Tzeranis",title:"CSO · Co-founder",sum:"Assistant Professor of Materials Science, University of Crete; NTUA and MIT alumnus."},
 {name:"Ioannis Charalampopoulos",title:"COO · Co-founder",sum:"Professor of Pharmacology, University of Crete Medical School; IMBB-FORTH."},
 {name:"Gregory Roumeliotis",title:"Chief Strategy Officer",sum:"Precision-medicine go-to-market strategist; health technology assessment and tech transfer."},
 {name:"Emmanuel Stratakis",title:"Co-founder",sum:"Director of IESL-FORTH; head of its Ultrafast Laser Micro- and Nano-processing lab."},
 {name:"Konstantinos Fotakis",title:"Co-founder",sum:"Professor Emeritus of Physics, University of Crete; former Alternate Minister for Research."}];
var NEWS=[
 {d:"2026-06-29",y:"29 June 2026",s:"Horizon Europe · CORDIS",t:"EU grant signed for H-Neuroimplants: human neural stem cell scaffolds for chronic spinal cord injury",u:CORDIS},
 {d:"2026",y:"2026",s:"J Biomed Mater Res B",t:"BNN27 delivered via collagen scaffold and FmocFF hydrogel grafts protects neurons after optic nerve injury",u:"https://doi.org/10.1002/jbmb.70013"},
 {d:"2023",y:"2023",s:"Biomedicines",t:"Microneurotrophin BNN27 increases the density of implanted neural stem cell-derived cells after spinal cord injury",u:"https://doi.org/10.3390/biomedicines11041170"},
 {d:"2020",y:"2020",s:"npj Regenerative Medicine",t:"Neural stem cells delivered in porous collagen scaffolds promote neuronal differentiation and locomotion recovery",u:"https://doi.org/10.1038/s41536-020-0097-0"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function xp(){var A=[
  ["Precision biofabrication","Laser microfabrication of scaffolds with controlled architecture, the backbone of every neuroimplant."],
  ["Biomaterial design and fabrication","Bioactive, porous collagen-based scaffolds and hydrogel grafts that house cells and deliver molecules where they are needed."],
  ["Stem cell culture and differentiation","Human iPSC-derived neural stem cells of optimised lineage, cultured and differentiated for implantation."],
  ["Models of neurodegeneration and CNS injury","Cell and animal models of spinal cord and optic nerve injury, and of neurodegeneration, to test what works."],
  ["Implantable device design and characterisation","Neuroimplants designed and characterised as devices, with a path to GMP-compatible manufacture."]];
  return '<ul class="xp">'+A.map(function(a,i){return '<li class="xp-row"><span class="no">0'+(i+1)+'</span><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p></li>'}).join("")+'</ul>'}
function rd(){var A=[
  ["2026–2028","Human neuroimplants for chronic spinal cord injury","Design and evaluate a prototype that carries human iPSC-derived neural stem cells in a laser-microfabricated scaffold, with a robust pipeline for testing it in mice and strong IP for the next steps.",["Horizon Europe · H-Neuroimplants",CORDIS],1],
  ["Ongoing","GMP-compatible neuroimplants","Funded by an EIC Pre-accelerator grant: developing GMP-compatible neuroimplants and evaluating them in preclinical models of chronic spinal cord injury, towards clinical translation.",["EIC Pre-accelerator",""],0],
  ["2023","Neuroimplants with a microneurotrophin","Combining implanted neural stem cells with BNN27, which reduced astrogliosis and increased the density of neurons and implanted NSC-derived cells after spinal cord injury.",["Biomedicines 11(4):1170","https://doi.org/10.3390/biomedicines11041170"],0],
  ["2026","Optic nerve injury","Delivering BNN27 via collagen–glycosaminoglycan scaffold and FmocFF hydrogel grafts, which promoted neuroprotection after optic nerve injury.",["J Biomed Mater Res B","https://doi.org/10.1002/jbmb.70013"],0]];
  return '<ul class="rd">'+A.map(function(a){var lk=a[3][1]?'<a class="lab ul" href="'+a[3][1]+'" target="_blank" rel="noopener">'+(a[3][1].indexOf("cordis")>0?'CORDIS ↗':'Read the paper ↗')+'</a>':'';return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Lead programme</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership and co-founders</p><ul class="mh-list">'+PEOPLE.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div></div>'}
function rnRows(list){return '<ul class="rows">'+list.map(function(n){return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><time class="lab" datetime="'+n.d+'">'+esc(n.y)+'</time><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neural stem cell implants · Heraklion, Crete</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Living implants</span><span class="l">for the injured</span><span class="l"><em>spinal cord.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ReNeuroCell develops neuroimplants: potent neural stem cells housed in a precision-microfabricated, bioactive scaffold, as a new treatment for injuries of the central nervous system.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How a neuroimplant works '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Our pipeline</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why neuroimplants</span>'+
   '<p class="txt" id="mani">Promising cell therapies have not yet become products that treat spinal cord injury. <em>We are building the carrier that takes them there.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">€488.6<sup>k</sup></span><p class="k">EU contribution to H-Neuroimplants, Horizon Europe, 2026–2028</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Parent institutions: FORTH and the University of Crete</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Peer-reviewed papers behind the neuroimplant, 2020–2026</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Neuroimplants</span><h2 class="d3">Stem cells, given <em>a place to grow.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Scaffold</span><span>Cells</span><span>Implant</span><span>Repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A scaffold, laser-made.</h2><p>The backbone is a bioactive, porous collagen-based scaffold, shaped by precision laser microfabrication so its architecture is controlled down to the pore.</p></article>'+
     '<article class="step"><h2>Seeded with neural stem cells.</h2><p>Human iPSC-derived neural stem cells of optimised lineage settle into the pores. The scaffold protects them and keeps them where they are needed.</p></article>'+
     '<article class="step"><h2>Placed in the lesion.</h2><p>The seeded neuroimplant is implanted into the injury, bridging the gap that chronic spinal cord injury leaves in the cord.</p></article>'+
     '<article class="step"><h2>Neurons, and movement.</h2><p>In a mouse model of spinal cord injury, neural stem cells delivered in porous collagen scaffolds promoted neuronal differentiation and locomotion recovery (npj Regenerative Medicine, 2020).</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="expertise" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Advanced tissue constructs, <em>built in-house.</em></h2></div><p data-r>A pre-clinical stage biotechnology company developing advanced tissue constructs and platforms for diverse applications, on five areas of expertise.</p></div>'+
   xp()+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From mouse models <em>to the clinic.</em></h2></div><p data-r>Our lead programme takes neuroimplants from prototypes that delivered mouse neural stem cells to a human version, with a complete roadmap towards clinical implementation.</p></div>'+
   rd()+
   '<div class="fund" data-r><span class="lab">Supported by</span><span class="n">European Innovation Council</span><span class="n">Horizon Europe</span><span class="n">FORTH</span><span class="n">University of Crete</span></div>'+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Pharmacology, materials and <em>lasers, together.</em></h2></div><p data-r>A spinoff of two leading Greek academic institutions, founded by scientists in neuropharmacology, biomaterials and laser micro-processing.</p></div>'+
   team()+
   '<div class="orig"><div><span class="lab">Spinoff of</span><h3>FORTH</h3><p>Foundation for Research and Technology – Hellas, home to IMBB and IESL, where our founders lead labs.</p></div>'+
    '<div><span class="lab">Spinoff of</span><h3>University of Crete</h3><p>Medical School and Materials Science and Engineering, Heraklion.</p></div></div>'+
  '</div></section>'+
  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and publications</span><h2 class="d2 split">The latest from <em>the lab.</em></h2></div><p data-r>The grant and the peer-reviewed work behind the neuroimplant.</p></div>'+
   rnRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For partners, investors and cell therapy companies</span>'+
   '<h2 class="big split">Let’s carry cell therapy <em>further.</em></h2>'+
   '<p class="sub" data-r>We are at the Science and Technology Park of Crete in Heraklion. Write to us about neuroimplants, biofabrication or collaboration.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#story" data-to="story">See the technology</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>Science and Technology Park of Crete</span><br><span>N. Plastira 100, Heraklion 70013, Greece</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Telephone</span><p><a class="ul" href="tel:+302810392042">+30 2810 392042</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Science and Technology Park of Crete<br>N. Plastira 100, Heraklion 70013</div>'+
   '<div class="c"><span class="lab">Spinoff of</span>FORTH<br>University of Crete</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+302810392042">+30 2810 392042</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Open Sans\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.01em">ReNeuroCell</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Reneurocell Therapeutics P.C.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"ReNeuroCell Therapeutics — Neuroimplants for spinal cord injury",x:"Home"}}'''

R["field"] = (HERE / "reneurocell.field.js").read_text()
R["story"] = (HERE / "reneurocell.story.js").read_text()

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
(HERE / "reneurocell.src.html").write_text(out)
print("wrote", HERE / "reneurocell.src.html", len(out))
