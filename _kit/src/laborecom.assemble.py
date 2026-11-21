#!/usr/bin/env python3
"""Assemble laborecom.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style, build-out pages).
Run: python3 _kit/src/laborecom.assemble.py && node _kit/build.js src/laborecom.src.html ../laborecom/index.html  (from _kit)
Facts: _kit/dossiers/laborecom.md. Palette: the live laborecom.com (violet nav bar #6723d8; logo mark gradient #5900ce -> #7177ef;
black wordmark, grey 'THERAPEUTICS'). Hero: crafted render (_kit/home/laborecom/render/vessel.html)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Laborecom Therapeutics — Protecting the heart after a heart attack</title>
<meta name="description" content="Laborecom Therapeutics, Chicago, is developing LBRC-101, a first-in-class cell-permeable peptide to prevent reperfusion injury after heart attack by blocking the process immune cells use to enter heart muscle. Supported by an NIH NHLBI SBIR Phase I award.">
<meta name="theme-color" content="#100b1e">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23100b1e'/%3E%3Cg fill='%237a5cf0'%3E%3Ccircle cx='15' cy='38' r='6'/%3E%3Ccircle cx='23' cy='26' r='9'/%3E%3Ccircle cx='34' cy='24' r='7'/%3E%3Ccircle cx='33' cy='38' r='10'/%3E%3C/g%3E%3Crect x='46' y='14' width='3' height='36' fill='%23a99cff'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Sora:300,400,600; Hanken Grotesk:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#100b1e;--inkr:16,11,30;--boner:245,243,251;--accr:169,156,255;--ink2:#150f27;--ink3:#1c1532;--deep:#0b0815;
  --bone:#f5f3fb;--bone2:#ebe7f6;--bone3:#d9d3ee;
  --stone:#aea7c4;--stoneD:#5b5474;
  --acc:#6723d8;--accL:#a99cff;--accD:#5a1fc4;
  --hair:rgba(245,243,251,.14);--hairD:rgba(16,11,30,.16);
  --disp:'Sora',system-ui,'Segoe UI',sans-serif;
  --serif:'Sora',system-ui,sans-serif;
  --sans:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''html{background:#100b1e}
.fieldbg{position:fixed;inset:0;z-index:0;background:transparent}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:11px;height:56px;color:var(--bone)}
.brand svg.lbm{width:40px;height:30px;flex:none;overflow:visible}
.brand .bt{display:flex;flex-direction:column;line-height:1}
.brand .bt b{font:600 19px/1 var(--disp);letter-spacing:-.01em}
.brand .bt i{font:400 9px/1 var(--mono);font-style:normal;letter-spacing:.24em;text-transform:uppercase;color:var(--stone);margin-top:5px}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:14ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a29bb8;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #6d6688;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(230px,31vh,310px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.2vw,38px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene svg *{vector-effect:non-scaling-stroke}
.scene .lb-ves{fill:none;stroke:rgba(var(--boner),.22);stroke-width:1;stroke-dasharray:2 6}
.scene .lb-rbc{fill:rgba(214,58,98,.16);stroke:rgba(236,120,150,.75);stroke-width:1.1}
.scene .lb-rbi{fill:none;stroke:rgba(236,120,150,.45);stroke-width:1}
.scene .lb-cell{fill:rgba(var(--accr),.07);stroke:rgba(var(--boner),.7);stroke-width:1.2}
.scene .lb-nuc{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .lb-mt{fill:none;stroke:rgba(var(--accr),.5);stroke-width:1;stroke-dasharray:5 4}
.scene .lb-fib{fill:none;stroke:rgba(var(--boner),.34);stroke-width:1}
.scene .lb-str{fill:none;stroke:rgba(var(--boner),.17);stroke-width:1;transition:stroke .5s var(--eo)}
.scene .lb-str.hit{stroke:rgba(236,120,150,.75)}
.scene .lb-dmg{fill:rgba(214,58,98,.1);stroke:rgba(236,120,150,.55);stroke-width:1;stroke-dasharray:3 6}
.scene .lb-halo{fill:none;stroke:var(--accL);stroke-width:1.1;stroke-dasharray:3 7}
.scene .lb-vs{fill:rgba(var(--accr),.3);stroke:var(--accL);stroke-width:1.2}
.scene .lb-kn{fill:none;stroke:var(--accL);stroke-width:1.2}
.scene .lb-pp{fill:#100b1e;stroke:#f2c6ff;stroke-width:1.4}
.scene .lb-ppl{fill:none;stroke:#f2c6ff;stroke-width:1.4}
.scene .lb-wbc{fill:#241c3c;stroke:rgba(var(--boner),.85);stroke-width:1.3}
.scene .lb-wn{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1.1}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#cfc8e4;paint-order:stroke;stroke:#150f27;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.cap{font-size:14px;fill:var(--accL)}
@media (max-width:1024px){.scene svg text{font-size:21px!important;letter-spacing:.06em!important}}
/* ===== Laborecom additions ===== */
.hero .hero-h{font-family:var(--disp);font-size:clamp(44px,4vw,80px);letter-spacing:-.035em;line-height:1.02;font-weight:300}
html body section.hero#hero h1.hero-h{font-size:clamp(44px,4vw,80px)!important}
@media (max-width:860px){html body section.hero#hero h1.hero-h{font-size:clamp(40px,11vw,76px)!important}.hero .hero-h .l{white-space:normal}section.hero#hero{padding-top:calc(38svh + 24px)!important}}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:400;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.mani .txt{font-size:clamp(24px,2.3vw,40px);line-height:1.22}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.light .btn.solid::before{background:var(--ink)}
.light .btn.solid:hover{color:#fff;border-color:var(--ink)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-family:var(--disp);font-size:clamp(46px,4.6vw,84px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
/* technology: three principles */
.caps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:400;font-size:clamp(22px,1.8vw,30px);line-height:1.15;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:36ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1024px){.caps{grid-template-columns:1fr;row-gap:44px}.cap p{max-width:52ch}}
/* programme (pipeline) */
.prog-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,5fr) minmax(0,3fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);border-bottom:1px solid var(--hair);position:relative}
.prog-row::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prog-row:hover::after{transform:scaleX(1)}
.prog-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(34px,3.2vw,54px);line-height:1;letter-spacing:-.035em;margin:0}
.prog-row h3 em{color:var(--accL);font-style:normal}
.prog-row p{margin:0;color:var(--stone);font-size:16px;max-width:52ch}
.prog-row .lab{display:block}
.prog-row .meta{display:flex;flex-direction:column;gap:8px}
.stages{list-style:none;margin:clamp(40px,4.6vw,64px) 0 0;padding:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));position:relative}
.stages::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.stages .fill{position:absolute;left:0;top:4px;height:1px;width:50%;background:var(--accL);transform-origin:left}
.stages li{position:relative;padding:22px 16px 0 0;font-size:14.5px;line-height:1.45;color:var(--stone)}
.stages li::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;background:var(--ink2);border:1px solid #6d6688}
.stages li.done::before,.stages li.now::before{background:var(--accL);border-color:var(--accL)}
.stages li.now::after{content:"";position:absolute;left:-5px;top:-5px;width:19px;height:19px;border:1px solid var(--accL);opacity:.5;animation:lbPulse 2.4s var(--eo) infinite}
@keyframes lbPulse{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.5);opacity:0}}
.stages b{display:block;font:400 10.5px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--bone);margin-bottom:6px}
.stages li.next b{color:var(--stone)}
.bench{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:var(--gap);margin-top:clamp(56px,6vw,96px)}
.bench dl{margin:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:var(--gap)}
.bench dl>div{padding:18px 0 20px;border-top:1px solid var(--hair)}
.bench dt{margin-bottom:6px}
.bench dd{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,23px);line-height:1.34;letter-spacing:-.015em}
.bench .note-s{margin-top:18px}
@media (max-width:1024px){.prog-row{grid-template-columns:1fr 1fr;row-gap:18px}.prog-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}.bench{grid-template-columns:1fr}}
@media (max-width:860px){.stages{grid-template-columns:1fr;row-gap:0}.stages::before{left:4px;right:auto;top:0;bottom:0;width:1px;height:auto}.stages .fill{left:4px;width:1px;height:50%;top:0}.stages li{padding:0 0 22px 30px}.prog-row{grid-template-columns:1fr}}
@media (max-width:560px){.bench dl{grid-template-columns:1fr}}
/* team: masthead (CL), tokens only */
.light .mh{--mh-ink:#100b1e;--mh-mute:#5b5474;--mh-line:rgba(16,11,30,.16);--mh-accent:#5a1fc4;--mh-display:'Sora',system-ui,sans-serif;--mh-sans:'Hanken Grotesk',system-ui,sans-serif;--mh-mono:'IBM Plex Mono',ui-monospace,monospace}
.light .mh-name{letter-spacing:-.02em}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,23px);line-height:1.35;letter-spacing:-.015em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
.lede-s{max-width:60ch}
/* footer echo of the hero stays faint, never behind the wordmark at strength (DF) */
html body .ftr .fcv{opacity:.13!important}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("lbr-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

MARK = ('<svg class="lbm" viewBox="0 0 40 30" aria-hidden="true"><defs><linearGradient id="lbg" x1="0" y1="1" x2="1" y2="0">'
        '<stop offset="0" stop-color="#6a14e6"/><stop offset="1" stop-color="#8a90ff"/></linearGradient></defs>'
        '<g fill="url(#lbg)"><circle cx="6.5" cy="20" r="4.6"/><circle cx="13" cy="10.5" r="7"/><circle cx="21.5" cy="9" r="5.6"/>'
        '<circle cx="15" cy="20" r="7.4"/><circle cx="22" cy="16.5" r="5.4"/></g><rect x="30" y="1" width="2" height="28" fill="#a99cff"/></svg>')

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M13 58a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M21 40a13 13 0 1 0 26 0a13 13 0 1 0 -26 0M40 36a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M31 58a15 15 0 1 0 30 0a15 15 0 1 0 -30 0M76 20V78"/></svg>
    <div class="wm"><span>LABORECOM THERAPEUTICS</span></div>
  </div>
  <span class="lab pl">Cardiology &middot; Chicago, Illinois</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Laborecom Therapeutics, home">' + MARK + '<span class="bt"><b>Laborecom</b><i>Therapeutics</i></span></a>'

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
    <div><span class="lab">Based in</span><br>Chicago, Illinois</div>
    <div><span class="lab">Email</span><br>info@laborecom.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Laborecom Therapeutics</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Laborecom Therapeutics";\nvar PK="lbr";'

R["content"] = r'''var FONTS=['300 1em "Sora"','400 1em "Sora"','600 1em "Sora"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','400 1em "IBM Plex Mono"'];
var MAIL="info@laborecom.com";
var GRANT="https://reporter.nih.gov/project-details/11254406";
var PAPER="https://pmc.ncbi.nlm.nih.gov/articles/PMC4861765/";
/* team: names and titles exactly as on laborecom.com/team ("Meet the Team"); no portraits are published */
var PEOPLE=[
 {name:"Nakisha S. Rutledge, PhD",title:"Chief Executive Officer",sum:"Leads Laborecom Therapeutics and the development of LBRC-101."},
 {name:"Lucas Shores, PhD",title:"Director & Board Chair, Co-founder",sum:"Contact principal investigator on the NIH NHLBI SBIR Phase I award for LBRC-101."},
 {name:"William A Muller, MD, PhD",title:"Inventor, Co-Founder",sum:"His Northwestern University research on the lateral border recycling compartment (LBRC) underlies LBRC-101."}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2025-09-15",s:"NIH RePORTER",t:"NHLBI awards Laborecom an SBIR Phase I grant for a cell-permeable peptide therapeutic to reduce myocardial reperfusion injury",u:GRANT},
 {d:"2016-05-01",s:"American Journal of Pathology",t:"A unique role for endothelial cell kinesin light chain 1, variant 1 in leukocyte transendothelial migration",u:PAPER}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["The injury after the rescue","Restoring blood flow with PCI saves lives, yet as much as half of the long-term damage to the heart is due to reperfusion injury, and no approved therapeutic has been shown to significantly reduce the resulting infarct size.",'<path d="M28 50C10 38 4 28 4 19a11 11 0 0 1 24-5 11 11 0 0 1 24 5c0 9-6 19-24 31z"/><path class="a" d="M10 28h9l4-8 6 16 4-8h13"/>'],
  ["A new target: the LBRC","Immune cells entering the muscle after reperfusion cause damage. To cross the vessel wall they rely on the lateral border recycling compartment, membrane moved to the cell border by a motor protein uniquely expressed in endothelial cells.",'<rect x="4" y="22" width="22" height="14"/><rect x="30" y="22" width="22" height="14"/><circle class="a" cx="24" cy="29" r="2.4"/><circle class="a" cx="32" cy="29" r="2.4"/><circle cx="28" cy="12" r="7"/>'],
  ["A cell-permeable peptide","LBRC-101 is a first-in-class peptide therapeutic that blocks this step, rather than suppressing the immune system directly or targeting mitochondrial stress as earlier approaches have.",'<path d="M6 40h44"/><circle cx="12" cy="40" r="4"/><circle cx="22" cy="40" r="4"/><circle cx="32" cy="40" r="4"/><circle cx="42" cy="40" r="4"/><path class="a" d="M28 8v18M21 19l7 7 7-7"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Meet the team</p><ul class="mh-list">'+PEOPLE.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div></div>'}
function stages(){var S=[["Biology","The LBRC pathway in leukocyte transendothelial migration, from the inventor’s research","done"],["Peptide optimisation","Stability, permeability and plasma protein binding, with activity checked in a migration assay","now"],["Mouse MI model","Optimised peptides head-to-head: heart function by echocardiogram, infarct size by histopathology","now"],["IND-enabling","Studies planned for a Phase II award, including a swine model of myocardial infarction","next"],["Clinic","Patients with STEMI receiving PCI","next"]];
  return '<ol class="stages" aria-label="LBRC-101 programme stages"><i class="fill" aria-hidden="true"></i>'+S.map(function(s){return '<li class="'+s[2]+'"><b>'+s[0]+'</b>'+s[1]+'</li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cardiology · Chicago, Illinois<span class="nomob"> · LBRC-101</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new way</span><span class="l">of treating</span><span class="l"><em>inflammation.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>LBRC-101 is a first-in-class peptide therapeutic designed to prevent reperfusion injury after a heart attack, by blocking the process immune cells use to enter heart muscle.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Pipeline</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Laborecom</span>'+
   '<p class="txt" id="mani">Laborecom Therapeutics is a Chicago-based biotech developing LBRC-101, a first-in-class peptide therapeutic to prevent <em>reperfusion injury</em> following heart attack.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$457K</span><span class="k">NIH NHLBI SBIR Phase I award for LBRC-101, September 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">750K</span><span class="k">People in the US affected each year by STEMI, the most deadly type of heart attack</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Half</span><span class="k">Of the long-term damage to the heart can be due to reperfusion injury</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · LBRC</span><h2 class="d3">Keeping immune cells <em>out of the heart.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Reperfusion</span><span>LBRC</span><span>Block</span><span>Spared</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Blood flow returns.</h2><p>In a STEMI heart attack a coronary artery is blocked. Percutaneous coronary intervention (PCI) restores blood flow to the heart, and immune cells arrive with it.</p></article>'+
     '<article class="step"><h2>The LBRC opens a path.</h2><p>To leave the vessel, an immune cell crosses between endothelial cells. Membrane from the lateral border recycling compartment is moved to the border by a motor protein, and the cell enters the muscle and causes damage.</p></article>'+
     '<article class="step"><h2>LBRC-101 blocks the motor step.</h2><p>LBRC-101 is a cell-permeable peptide. It targets a motor protein uniquely expressed in endothelial cells, to prevent transendothelial migration.</p></article>'+
     '<article class="step"><h2>The heart muscle is spared.</h2><p>Immune cells stay in the vessel. The goal: smaller infarcts, since larger infarcts are strongly associated with reinfarction, hospitalisation with heart failure and mortality.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our approach</span><h2 class="d2 split">Treating the damage that <em>follows the rescue.</em></h2></div><p data-r>Reperfusion injury is driven by inflammation. Laborecom targets the step immune cells use to enter the heart muscle, at the vessel wall itself.</p></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">LBRC-101 for <em>myocardial reperfusion injury.</em></h2></div><p data-r>An NIH SBIR Phase I award validates the underlying biology of the LBRC pathway and funds the work to an optimised lead candidate.</p></div>'+
   '<div class="prog-row"><div><span class="lab" style="margin-bottom:12px">Programme 01</span><h3>LBRC-<em>101</em></h3></div>'+
    '<p>A first-in-class, cell-permeable peptide therapeutic to prevent reperfusion injury following heart attack and procedures such as percutaneous coronary intervention (PCI).</p>'+
    '<div class="meta"><span class="lab">Indication · STEMI / PCI</span><span class="lab">Stage · Preclinical</span><span class="lab">Funding · NIH NHLBI SBIR</span></div></div>'+
   stages()+
   '<div class="bench"><div><span class="lab kick" data-r>The Phase I work</span><p class="muted" data-r style="max-width:34ch">What the SBIR Phase I award funds, from the project summary.</p></div>'+
    '<div><dl>'+
     '<div><dt class="lab">Aim 1</dt><dd>Optimise the peptide for stability, permeability and plasma protein binding while keeping its activity</dd></div>'+
     '<div><dt class="lab">Aim 2</dt><dd>Test optimised peptides head-to-head in a mouse model of myocardial infarction</dd></div>'+
     '<div><dt class="lab">Outcome</dt><dd>An optimised lead candidate for further development through Phase II</dd></div>'+
     '<div><dt class="lab">Phase II</dt><dd>IND-enabling studies and testing in a swine model of myocardial infarction</dd></div>'+
    '</dl><p class="note-s">NIH NHLBI SBIR Phase I award 1R43HL182534-01, “A cell-permeable peptide therapeutic to reduce myocardial reperfusion injury”, September 2025 to August 2026.</p></div></div>'+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>LBRC-101.</em></h2></div><p data-r>Laborecom was co-founded by William A Muller, the inventor of the LBRC technology, and Lucas Shores, and is led by Nakisha S. Rutledge.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">News and publications</h2></div><p data-r>Funding and the published science behind the LBRC pathway.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Laborecom.</em></h2>'+
   '<p class="sub" data-r>Interested in LBRC-101 or reperfusion injury? Send all inquiries to our team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#team" data-to="team">Meet the team</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>Chicago,</span><br><span>Illinois</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Funding</span><p>NIH NHLBI, SBIR Phase I</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Chicago,<br>Illinois</div>'+
   '<div class="c"><span class="lab">Programme</span>LBRC-101, reperfusion injury<br>NIH SBIR 1R43HL182534</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="35" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:-.01em">Laborecom</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Laborecom Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Laborecom Therapeutics — Protecting the heart after a heart attack",x:"Home"}}'''

R["field"] = (HERE / "laborecom.field.js").read_text()
R["story"] = (HERE / "laborecom.story.js").read_text()

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
out = re.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update: build-out pages
(HERE / "laborecom.src.html").write_text(out)
print("wrote", HERE / "laborecom.src.html", len(out))
