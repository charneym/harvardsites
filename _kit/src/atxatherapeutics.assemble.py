#!/usr/bin/env python3
"""Assemble atxatherapeutics.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/atxatherapeutics.assemble.py && node build.js src/atxatherapeutics.src.html ../atxatherapeutics/index.html
Facts: _kit/dossiers/atxatherapeutics.md (atxatherapeutics.com home, about-us, our-challenge, our-mission, our-pipeline,
our-team, news, pah-advance, contact; fetched 2026-11-23). Palette: the live logo (Small Logo.jpg: ribbon mark royal blue
#0606A6 / #1E1EA9 / deep #05058C, script wordmark the same blue) and the site's nav blue #000099 on white; type Raleway
(their headings) with DM Mono. Hero: _kit/home/atxatherapeutics/render.py -> ../atxatherapeutics/hero.webp."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
HOME = HERE.parent / "home" / "atxatherapeutics"
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>ATXA Therapeutics — Thromboxane receptor antagonists for cardiopulmonary disease</title>
<meta name="description" content="ATXA Therapeutics is a clinical-stage pharmaceutical company in Dublin developing NTP42, a first-in-class oral antagonist of the thromboxane receptor (TP), for pulmonary arterial hypertension and other cardiopulmonary diseases.">
<meta name="theme-color" content="#060a26">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23060a26'/%3E%3Cpath d='M6 22C20 22 28 30 32 32C36 30 44 20 58 18C60 26 56 40 46 42C40 42 36 34 32 32C28 34 20 44 10 44C8 36 10 28 6 22Z' fill='%234a50f0'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Raleway:300,400,600; DM Mono:400*/"

R["root"] = r''':root{
  --ink:#060a26;--inkr:6,10,38;--boner:245,246,251;--accr:6,6,166;--ink2:#0a0f33;--ink3:#10164a;--deep:#03061a;
  --bone:#f5f6fb;--bone2:#e9ebf5;--bone3:#d6d9ea;
  --stone:#a9aecb;--stoneD:#4b5070;
  --acc:#0606A6;--accL:#9096ff;--accD:#0606A6;
  --hair:rgba(245,246,251,.14);--hairD:rgba(6,10,38,.16);
  --disp:'Raleway',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Raleway',system-ui,sans-serif;
  --sans:'Raleway',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'DM Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#060a26,#060a26)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}
@media (max-width:860px){.fieldbg{background:#060a26}
  html .hero{padding-top:calc(42svh + 8px)!important}
  html #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(42svh - 36px),transparent calc(42svh + 4px));mask-image:linear-gradient(180deg,#000 0,#000 calc(42svh - 36px),transparent calc(42svh + 4px))}}'''

MARK = (HOME / "mark_path.txt").read_text().strip()
GRAD = '<defs><linearGradient id="%s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6c72ff"/><stop offset=".55" stop-color="#3a40ea"/><stop offset="1" stop-color="#2328c8"/></linearGradient></defs>'
R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.alogo{width:auto;height:46px;flex:none;overflow:visible}
.brand .alw{fill:var(--bone);font-family:'Raleway',system-ui,sans-serif;font-weight:600;letter-spacing:.01em}
@media (max-width:860px){.brand svg.alogo{height:40px}}
#pre .mk{width:auto;height:72px;overflow:visible}
#pre .mk path{fill:url(#axPg)!important;stroke:none!important;stroke-dasharray:none!important}
#pre .wm .w1{display:block;text-align:center;font-weight:600;font-size:clamp(30px,3.4vw,44px);letter-spacing:.3em;margin-right:-.3em}
#pre .wm .w2{display:block;text-align:center;font-size:clamp(12px,1.1vw,15px);letter-spacing:.42em;margin-right:-.42em;margin-top:.7em;color:#c9ccec}
@media (max-width:860px){#pre .mk{height:56px}}'''

LAY = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a3a8d4;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5d63a0;transition:background .35s,border-color .35s}
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
'''
ADD = r'''/* ===== ATXA additions ===== */
.ftr .fcv{display:none!important}
.ftr{background:var(--ink)!important}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,4.6vw,92px);letter-spacing:-.03em;line-height:1.04;font-weight:300;max-width:12ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.025em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:#fff;border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(48px,4.8vw,88px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
/* pipeline rows */
.ppl{list-style:none;margin:0;padding:0}
.ppl-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,3.8fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hairD);position:relative}
.ppl-row:last-child{border-bottom:1px solid var(--hairD)}
.ppl-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.ppl-row:hover::after{transform:scaleX(1)}
.ppl-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.6vw,44px);line-height:1.04;letter-spacing:-.025em;margin:0 0 10px}
.ppl-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD)}
.ppl-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:54ch}
.ppl-ph{display:flex;flex-direction:column;gap:10px}
.ppl-bar{display:grid;grid-template-columns:repeat(4,1fr);gap:3px}
.ppl-bar i{height:6px;background:rgba(var(--inkr),.08)}
.ppl-bar i.f{background:var(--acc)}
.ppl-lab{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;font:400 9.5px/1.3 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--stoneD)}
.ppl-ph .tag{align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--acc);padding:6px 8px 5px}
@media (max-width:1024px){.ppl-row{grid-template-columns:1fr 1fr;row-gap:16px}.ppl-ph{grid-column:1/-1}}
@media (max-width:700px){.ppl-row{grid-template-columns:1fr}}
.disc{margin:28px 0 0;font:400 11px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--stoneD)}
/* PAH-ADVANCE work packages + PAH figures */
.tri{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,6fr);gap:clamp(32px,5vw,96px);align-items:start}
.tri-f{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:var(--gap);margin:0}
.tri-f div{border-top:1px solid var(--hair);padding:14px 0 18px;position:relative}
.tri-f div::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tri-f div:hover::before{transform:scaleX(1)}
.tri-f dt{font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:6px}
.tri-f dd{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.3;color:var(--bone)}
.tri-e h3,.tri-r h3{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2vw,32px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.tri-e ul{list-style:none;margin:0 0 28px;padding:0}
.tri-e li{padding:12px 0 12px 22px;border-top:1px solid var(--hair);color:var(--stone);font-size:16px;position:relative}
.tri-e li::before{content:"";position:absolute;left:0;top:21px;width:9px;height:1px;background:var(--accL)}
.tri-r{margin-top:clamp(64px,7vw,110px);display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
.tri-r .rc{border-top:1px solid var(--hair);padding-top:20px}
.tri-r .rv{display:block;font-family:var(--disp);font-weight:300;font-size:clamp(44px,4vw,72px);line-height:1;letter-spacing:-.04em;color:var(--bone);margin-bottom:12px}
.tri-r p{color:var(--stone);font-size:15.5px;margin:0 0 12px;max-width:38ch}
.tri-r a{color:var(--accL)}
.tri .act{margin-top:6px}
@media (max-width:1024px){.tri{grid-template-columns:1fr}.tri-r{grid-template-columns:1fr}}
@media (max-width:560px){.tri-f{grid-template-columns:1fr}}
/* team: name grid */
.tg{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:var(--gap)}
.tg li{border-top:1px solid var(--hairD);padding:16px 0 22px;position:relative}
.tg li::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tg li:hover::before{transform:scaleX(1)}
.tg .tn{display:block;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.45vw,23px);line-height:1.2;letter-spacing:-.01em;color:var(--ink)}
.tg .tr{display:block;margin-top:6px;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--stoneD)}
.tg li.ld .tn{font-size:clamp(24px,2vw,32px)}
.tg li.ld .tr{color:var(--accD)}
.tgh{font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD);margin:0 0 14px}
.tgh2{margin-top:44px}
@media (max-width:700px){.tg{grid-template-columns:repeat(2,minmax(0,1fr))}}
.tm-wrap{display:grid;grid-template-columns:minmax(0,3.6fr) minmax(0,8.4fr);gap:clamp(32px,5vw,96px);align-items:start}
.tm-side p{color:var(--stoneD);font-size:16px;line-height:1.6;max-width:40ch;margin:0 0 18px}
.tm-wrap .tm-side .btn{margin-top:6px}
@media (max-width:1024px){.tm-wrap{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''
R["scenecss"] = LAY + r'''.scene svg *{vector-effect:none}
.scene .xf{fill:none;stroke:rgba(var(--boner),.16);stroke-width:1}
.scene .xh{fill:none;stroke:rgba(144,150,255,.5);stroke-width:1}
.scene .xs{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.2}
.scene .xce{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.55);stroke-width:1}
.scene .xnu{fill:rgba(144,150,255,.35);stroke:none}
.scene .xlu2{fill:rgba(3,6,26,.55);stroke:none}
.scene .xen{fill:none;stroke:#c9ccec;stroke-width:1.6}
.scene .xr{fill:none;stroke:#c9ccec;stroke-width:1.4;stroke-linejoin:round}
.scene .xpl2{fill:rgba(var(--boner),.1);stroke:rgba(var(--boner),.7);stroke-width:1}
.scene .xag{fill:#f5f6fb;stroke:none}
.scene .xnt{fill:#9096ff;stroke:#c9ccff;stroke-width:.8}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9ccec;paint-order:stroke;stroke:var(--ink2);stroke-width:5px;stroke-linejoin:round}
.scene text.xt2{fill:var(--accL)}
.scene text.cap{fill:var(--accL)}
''' + ADD.replace("XyloCor", "ATXA") + r'''
body,h1,h2,h3,p,span,a,li,text{font-variant-numeric:lining-nums}
.ppl-row h3{font-weight:400}
.ppl-row .nm3{color:var(--acc)}
.tg .tn{font-weight:400}
.wp{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:var(--gap)}
.wp li{border-top:1px solid var(--hair);padding:16px 0 26px;position:relative}
.wp li::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.wp li:hover::before{transform:scaleX(1)}
.wp .wn{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;color:var(--accL);margin-bottom:10px}
.wp h3{font-family:var(--disp);font-weight:400;font-size:clamp(20px,1.6vw,26px);line-height:1.2;letter-spacing:-.01em;margin:0 0 8px;color:var(--bone)}
.wp p{margin:0;color:var(--stone);font-size:15.5px;max-width:38ch}
@media (max-width:1024px){.wp{grid-template-columns:1fr 1fr}}
@media (max-width:600px){.wp{grid-template-columns:1fr}}
.adv-note{margin:28px 0 0;color:var(--stone);font-size:15.5px;max-width:70ch}
.adv-note a{color:var(--accL)}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("atxa-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="4 2 642 114">''' + (GRAD % "axPg") + '''<path fill="url(#axPg)" d="''' + MARK + r'''"/></svg>
    <div class="wm"><span class="w1">ATXA</span><span class="w2">THERAPEUTICS</span></div>
  </div>
  <span class="lab pl">Thromboxane receptor antagonists · Dublin, Ireland</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = ('<a href="#/" class="brand" id="brand" aria-label="ATXA Therapeutics, home"><svg class="alogo" viewBox="0 0 650 200" aria-hidden="true">'
  + (GRAD % "axBg") + '<path fill="url(#axBg)" d="' + MARK + '"/>'
  + '<text class="alw" x="325" y="186" text-anchor="middle" font-size="62" textLength="600" lengthAdjust="spacingAndGlyphs">ATXA THERAPEUTICS</text></svg></a>')

NAV = [("story", "Science"), ("pipeline", "Pipeline"), ("advance", "PAH-ADVANCE"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Office</span><br>UCD Conway Institute, Dublin 4</div>
    <div><span class="lab">Email</span><br>info@atxatherapeutics.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">ATXA</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="ATXA Therapeutics";\nvar PK="atxa";'

R["content"] = r'''var FONTS=['300 1em "Raleway"','400 1em "Raleway"','600 1em "Raleway"','400 1em "DM Mono"'];
var MAIL="info@atxatherapeutics.com";
var AP="https://www.atxatherapeutics.com/post/";
var SECS={science:"story",pipeline:"pipeline","pah-advance":"advance",team:"team",news:"news",contact:"contact"};
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-02-27",s:"Nature Communications",t:"Structural insights into agonist recognition and function of the thromboxane receptor, with Trinity College Dublin",u:AP+"study-on-structural-insights-into-agonist-recognition-and-function-of-the-thromboxane-receptor-publi"},
 {d:"2026-01-27",s:"Conference",t:"ATXA attends and presents at the Pulmonary Vascular Research Institute 2026 Annual Congress in Dublin",u:AP+"atxa-to-attend-and-present-at-the-pulmonary-vascular-research-institute-2026-annual-congress"},
 {d:"2024-04-12",s:"Award",t:"Founder and CEO Professor Therese Kinsella receives the 2024 NovaUCD Innovation Award",u:AP+"atxa-therapeutics-founder-ceo-receives-2024-novaucd-innovation-award"},
 {d:"2023-12-21",s:"Frontiers in Pharmacology",t:"Results of the Phase 1 first-in-human study of NTP42 in healthy volunteers published",u:AP+"atxa-therapeutics-publishes-results-of-phase-1-first-in-human-study-evaluating-the-safety-tolerabi"},
 {d:"2022-10-19",s:"Funding",t:"ATXA receives grant and equity funding through the European Innovation Council Accelerator",u:AP+"atxa-therapeutics-receives-funding-through-the-european-innovation-council-accelerator-programme"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function ppl(){var PH=["Preclinical","Phase 1","Phase 2","Phase 3"],A=[
  ["NTP42","Pulmonary arterial hypertension (PAH)","Our lead candidate, formulated as NTP42:KVA4 for oral dosing. A Phase I trial in healthy volunteers (NCT04919863) confirmed safety, tolerability, drug exposure and TP target engagement. Orphan Designation from the EMA and the FDA. Next: a bridging trial and a Phase II trial in PAH patients.",2,"Phase I complete"],
  ["NTP42","Related cardiopulmonary diseases","Platform potential beyond PAH: ATXA has validated its TP antagonists in preclinical models of cardiopulmonary disease and acute pulmonary inflammation, with heart failure, interstitial lung disease and idiopathic pulmonary fibrosis among the related indications.",1,"Preclinical"],
  ["TP20 · NTP48","Further TP antagonists","Alongside NTP42, a series of highly selective TP antagonists, each with distinct pharmaceutical properties, advancing across cardiopulmonary and other disease areas.",1,"Preclinical"]];
  return '<ul class="ppl">'+A.map(function(a){var bar='',lab='';for(var i=0;i<4;i++){bar+='<i'+(i<a[3]?' class="f"':'')+'></i>';lab+='<span>'+PH[i]+'</span>'}
    return '<li class="ppl-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="ppl-ph"><span class="tag">'+esc(a[4])+'</span><div class="ppl-bar" aria-hidden="true">'+bar+'</div><div class="ppl-lab" aria-hidden="true">'+lab+'</div></div></li>'}).join("")+'</ul>'+
  '<p class="disc">NTP42 and ATXA’s other candidates are investigational and not approved for any use. Protected by a growing global patent estate.</p>'}
function advance(){var W=[["Manufacture & formulation","Scaled‑up manufacture of NTP42 and development of a drug‑in‑capsule form for oral dosing."],
  ["Bridging clinical trial","Validation of the NTP42 drug‑in‑capsule in a bridging trial in healthy volunteers."],
  ["Drug safety & toxicology","Completion of all necessary long‑term drug safety studies and toxicology assessments."],
  ["Regulatory preparation","Negotiations and applications for Phase II regulatory approval in Europe and North America."],
  ["Phase II clinical trial","Evaluation of NTP42 in an international Phase II clinical trial in patients with PAH."],
  ["Product diversification","Taking NTP42 and ATXA’s other compounds into further relevant disease indications."]];
  return '<ol class="wp">'+W.map(function(w,i){return '<li><span class="wn">0'+(i+1)+'</span><h3>'+esc(w[0])+'</h3><p>'+esc(w[1])+'</p></li>'}).join("")+'</ol>'+
   '<div class="tri-r">'+
    '<div class="rc"><span class="rv">15–50</span><p>people per million are affected by PAH, a rare, progressive disease of the arteries of the lungs.</p></div>'+
    '<div class="rc"><span class="rv">70%</span><p>of people with PAH are women. It can affect people of all ages.</p></div>'+
    '<div class="rc"><span class="rv">58%</span><p>five‑year survival, even with recent advances in diagnosis and treatment. Current therapies mainly widen the vessels and do little to slow the disease.</p></div>'+
   '</div>'}
function team(){var M=[["Prof. Therese Kinsella","Founder & CEO",1],["Helen Reid","Program Manager & Scientist"],["Eamon Mulvaney","Senior Scientist"],["Elizabeth Eng","Research Scientist"],["Katherine Martin","Finance & Admin Manager"]],
  A=[["Andy Baxter","Product Development"],["Mike Perkins","Consultant Chief Medical Officer"],["Mark Maginn","Regulatory Affairs"],["Adriaan Fruijtier","Regulatory Affairs"]],
  B=[["Diarmuid Burke","Chairperson"],["Prof. Therese Kinsella","Founder & CEO"],["Daniel O’Mahony","Board Member"],["Jonathan Langley","Board Member"]];
  function g(L){return '<ul class="tg">'+L.map(function(t){return '<li'+(t[2]?' class="ld"':'')+'><span class="tn">'+esc(t[0])+'</span><span class="tr">'+esc(t[1])+'</span></li>'}).join("")+'</ul>'}
  return '<div><p class="tgh">ATXA team</p>'+g(M)+'<p class="tgh tgh2">Advisory team</p>'+g(A)+'<p class="tgh tgh2">Board of directors</p>'+g(B)+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical‑stage pharmaceutical company<span class="nomob"> · Dublin, Ireland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new target</span><span class="l">for heart and</span><span class="l"><em>lung disease.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ATXA Therapeutics is developing NTP42, a first‑in‑class oral antagonist of the thromboxane receptor (TP), for pulmonary arterial hypertension and other cardiopulmonary diseases.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How NTP42 works '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Our pipeline</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<p class="txt" id="mani">To bring accessible, affordable and life‑changing treatments to patients with cardiopulmonary diseases, <em>offering them new hope.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">€2.5M</span><p class="k">EIC Accelerator grant, with up to €8 million in equity, for PAH‑ADVANCE</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Orphan Designations for NTP42 in PAH, from the EMA and the FDA</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+</span><p class="k">years of prostanoid receptor research behind ATXA, founded in 2015</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our science · the TP</span><h2 class="d3">One receptor, <em>many hallmarks.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Wall</span><span>NTP42</span><span>Hallmarks</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Thromboxane tightens the vessel.</h2><p>The prostanoid TXA2 and the isoprostane 8‑iso‑PGF2α signal through the thromboxane receptor, the TP, inducing platelet aggregation and the constriction of vascular and pulmonary smooth muscle.</p></article>'+
     '<article class="step"><h2>The artery wall thickens.</h2><p>TP signalling is pro‑inflammatory, pro‑mitogenic and pro‑fibrotic. In PAH, the walls of the lung arteries thicken and stiffen and do not dilate well, so pressure rises and the right heart has to work harder.</p></article>'+
     '<article class="step"><h2>NTP42 blocks the TP.</h2><p>NTP42 is a first‑in‑class, highly selective small‑molecule antagonist of the TP, taken by mouth. It occupies the receptor, so its agonists cannot signal through it.</p></article>'+
     '<article class="step"><h2>Aimed at the disease, not only the symptoms.</h2><p>TP antagonists are predicted to inhibit vasoconstriction, platelet aggregation, inflammation and fibrosis. In two preclinical models of PAH, NTP42 showed benefit alone and alongside standard‑of‑care drugs.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Highly selective <em>TP antagonists.</em></h2></div><p data-r>A proprietary series of small‑molecule drugs, led by NTP42 in pulmonary arterial hypertension, with platform potential across cardiopulmonary disease and beyond.</p></div>'+
   ppl()+
  '</div></section>'+
  '<section class="sec dark2" id="advance" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>PAH‑ADVANCE · EIC Accelerator</span><h2 class="d2 split">The clinical path <em>of NTP42.</em></h2></div><p data-r>Through the European Innovation Council Accelerator, PAH‑ADVANCE was awarded €2.5 million in grant and up to €8 million in equity to take NTP42 to a Phase II trial in patients with PAH.</p></div>'+
   advance()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists, clinicians and <em>strategists.</em></h2></div><p data-r>Founded by Professor Therese Kinsella in 2015, ATXA is the culmination of over 20 years of research into the biology and signalling of the human prostanoid receptors in disease.</p></div>'+
   '<div class="tm-wrap"><div class="tm-side"><p>Expertise in cardiovascular and cancer biology, platelet biology, drug discovery, medicinal chemistry, preclinical and clinical development, IP and commercialisation. Supported by external investors, Enterprise Ireland and the EU’s Horizon 2020 SME Instrument.</p><a class="btn" href="#contact" data-to="contact">Contact us '+ARR+'</a></div>'+team()+'</div>'+
  '</div></section>'+
  '<section class="sec light" id="news" data-theme="light" style="padding-top:0"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>ATXA.</em></h2></div><p data-r>Research, clinical results, funding and events.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and media</span>'+
   '<h2 class="big split">Let’s talk about <em>NTP42.</em></h2>'+
   '<p class="sub" data-r>We welcome inquiries about strategic collaboration and partnership across development and commercialisation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="mailto:investors@atxatherapeutics.com">Investor inquiries</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>UCD Conway Institute</span><br><span>University College Dublin</span><br><span>Belfield, Dublin 4, Ireland</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:media@atxatherapeutics.com">media@atxatherapeutics.com</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+35315252829">+353 (0)1 525 2829</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>UCD Conway Institute<br>University College Dublin<br>Belfield, Dublin 4, Ireland<br>Company no. 561857</div>'+
   '<div class="c"><span class="lab">Pipeline</span>NTP42 · PAH<br>NTP42 · cardiopulmonary<br>TP20 · NTP48</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Science</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#advance" data-to="advance">PAH-ADVANCE</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+35315252829">+353 (0)1 525 2829</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Raleway\',system-ui,sans-serif;font-weight:400;font-size:44px;letter-spacing:.06em">ATXA Therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ATXA Therapeutics Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"ATXA Therapeutics — Thromboxane receptor antagonists for cardiopulmonary disease",x:"Home"}}'''
R["field"] = (HOME / "field.js").read_text()
R["story"] = (HOME / "story.js").read_text()

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
out = out.replace(".fieldbg{background:#120e0b}", ".fieldbg{background:#060a26}").replace("rgba(18,14,11,.12)", "rgba(6,10,38,.12)")  # template ink left outside the regions
(HERE / "atxatherapeutics.src.html").write_text(out)
print("wrote", HERE / "atxatherapeutics.src.html", len(out))
