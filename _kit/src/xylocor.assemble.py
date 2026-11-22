#!/usr/bin/env python3
"""Assemble xylocor.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/xylocor.assemble.py && node build.js src/xylocor.src.html ../xylocor/index.html
Facts: _kit/dossiers/xylocor.md. Palette: the live xylocor.com logo (xylocor.svg: green #2C8F6B "Xylo", grey #999999 "Cor",
light grey #B4B4B5 "Therapeutics"), white pages and the teal-green wash of their hero; type Avenir LT Std on their site
(Nunito Sans here). Hero: _kit/home/xylocor/render.py -> ../xylocor/hero.webp."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
HOME = HERE.parent / "home" / "xylocor"
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>XyloCor Therapeutics — Gene therapy for advanced coronary artery disease</title>
<meta name="description" content="XyloCor Therapeutics is a clinical-stage biopharmaceutical company in King of Prussia, PA, developing XC001, a one-time gene therapy designed to grow new blood vessels in the heart, now in the Phase 2b EXACT-2 trial for refractory angina.">
<meta name="theme-color" content="#071a17">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23071a17'/%3E%3Cpath d='M16 12L48 52M48 12L16 52' stroke='%232C8F6B' stroke-width='7'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Nunito Sans:300,400,600; DM Mono:400*/"

R["root"] = r''':root{
  --ink:#071a17;--inkr:7,26,23;--boner:244,246,243;--accr:44,143,107;--ink2:#0a201c;--ink3:#0f2b25;--deep:#04110e;
  --bone:#f4f6f3;--bone2:#e8ede9;--bone3:#d5ddd7;
  --stone:#a7b6b0;--stoneD:#4a5953;
  --acc:#2C8F6B;--accL:#6fcaa3;--accD:#21765a;
  --hair:rgba(244,246,243,.14);--hairD:rgba(7,26,23,.16);
  --disp:'Nunito Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Nunito Sans',system-ui,sans-serif;
  --sans:'Nunito Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'DM Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#071a17,#071a17)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}
@media (max-width:860px){.fieldbg{background:#071a17}
  html .hero{padding-top:calc(42svh + 8px)!important}
  html #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(42svh - 36px),transparent calc(42svh + 4px));mask-image:linear-gradient(180deg,#000 0,#000 calc(42svh - 36px),transparent calc(42svh + 4px))}}'''

LOGO = (HOME / "logo_paths.svg").read_text()
R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.xlogo{width:auto;height:44px;flex:none;overflow:visible}
.brand .lg0{fill:var(--accL)}.brand .lg1{fill:#c9d2ce}.brand .lg2{fill:#9fb0aa}
@media (max-width:860px){.brand svg.xlogo{height:38px}}'''
R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9fb2ab;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5f7a71;transition:background .35s,border-color .35s}
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
.scene svg *{vector-effect:none}
.scene .xf{fill:none;stroke:rgba(var(--boner),.13);stroke-width:1}
.scene .xh{fill:none;stroke:rgba(233,163,106,.32);stroke-width:1}
.scene .xs{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1.2}
.scene .xa{fill:none;stroke:#f08a80;stroke-width:1.5}
.scene .xlu{fill:rgba(226,82,74,.12);stroke:none}
.scene .xpl{fill:rgba(233,180,106,.2);stroke:#e9b46a;stroke-width:1.3}
.scene .xfl{fill:none;stroke:#ff9d92;stroke-width:2;stroke-linecap:round}
.scene .xv{fill:none;stroke:#f2766b;stroke-linecap:round;stroke-linejoin:round}
.scene .xc{fill:none;stroke:rgba(var(--boner),.75);stroke-width:7;stroke-linecap:round}
.scene .xc2{fill:none;stroke:var(--ink2);stroke-width:4.6;stroke-linecap:round}
.scene .xnd{fill:none;stroke:var(--accL);stroke-width:1.6;stroke-linecap:round}
.scene .xring{fill:rgba(var(--accr),.08);stroke:rgba(111,202,163,.55);stroke-width:1;stroke-dasharray:3 4}
.scene .xvp{fill:rgba(111,202,163,.25);stroke:var(--accL);stroke-width:1}
.scene .xce{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.7);stroke-width:1.1}
.scene .xnu{fill:rgba(111,202,163,.16);stroke:var(--accL);stroke-width:1.1}
.scene .xdna{fill:none;stroke:var(--accL);stroke-width:1.2}
.scene .xvg{fill:var(--accL);stroke:none}
.scene .xcl{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9d6d0;paint-order:stroke;stroke:var(--ink2);stroke-width:5px;stroke-linejoin:round}
.scene text.xt2{fill:var(--accL)}
.scene text.xt3{fill:#ff9d92}
.scene text.cap{fill:var(--accL)}
/* ===== XyloCor additions ===== */
.ftr .fcv{opacity:.3}
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
.ppl-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,3.8fr);column-gap:var(--gap);align-items:start;padding:22px 0 26px;border-top:1px solid var(--hairD);position:relative}
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
/* EXACT-2 trial */
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

R["seen"] = r'''<script>try{if(sessionStorage.getItem("xylocor-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M48 4V40C48 52 40 58 30 66M48 40C48 54 58 60 68 70M30 66C26 74 18 78 10 82M30 66L32 90M68 70L66 92M68 70C76 74 84 76 90 76"/></svg>
    <div class="wm"><span>XYLOCOR</span></div>
  </div>
  <span class="lab pl">Gene therapy for coronary artery disease · King of Prussia, PA</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="XyloCor Therapeutics, home"><svg class="xlogo" viewBox="0 0 204 66.1" aria-hidden="true">' + LOGO + '</svg></a>'

NAV = [("story", "Technology"), ("pipeline", "Pipeline"), ("trial", "EXACT‑2 Trial"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Office</span><br>King of Prussia, PA</div>
    <div><span class="lab">Email</span><br>info@xylocor.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">XyloCor</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="XyloCor";\nvar PK="xylocor";'

R["content"] = r'''var FONTS=['300 1em "Nunito Sans"','400 1em "Nunito Sans"','600 1em "Nunito Sans"','400 1em "DM Mono"'];
var MAIL="info@xylocor.com";
var XP="https://www.xylocor.com/pdfs/";
var CT="https://clinicaltrials.gov/study/NCT07048808";
var SECS={technology:"story",pipeline:"pipeline","exact-2 trial":"trial",trial:"trial",team:"team",news:"news",contact:"contact"};
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-03-05",s:"Press release",t:"XyloCor appoints John Tucker as President and Chief Executive Officer",u:XP+"XyloCor-Appoints-John-Tucker-President-and-CEO.pdf"},
 {d:"2025-07-10",s:"Press release",t:"First patient dosed in the Phase 2b EXACT‑2 trial of XC001 for coronary artery disease",u:XP+"XyloCor-First-Patient-Dosed-EXACT2.pdf"},
 {d:"2025-01-07",s:"Press release",t:"XyloCor raises $67.5 million in Series B financing, led by Jeito Capital",u:XP+"XyloCor-Series-B-Financing-Release-010725.pdf"},
 {d:"2024-07-10",s:"Press release",t:"License agreement with SmartCella for the Extroducer® Infusion Catheter System",u:XP+"XyloCor-SmartWise-Press-Release.pdf"},
 {d:"2024-05-02",s:"Circulation: Cardiovascular Interventions",t:"Positive EXACT Phase 2 data presented at SCAI 2024 and published",u:"https://www.ahajournals.org/doi/epdf/10.1161/CIRCINTERVENTIONS.124.014054"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function ppl(){var PH=["Discovery","Phase 1","Phase 2","Phase 3"],A=[
  ["XC001","Refractory angina · coronary artery disease","A one-time gene therapy for patients with refractory angina who have exhausted medicines and are not eligible for stents or bypass surgery. The Phase 1/2 EXACT trial is complete; the Phase 2b EXACT‑2 trial is enrolling in the US and UK. FDA Fast Track designation.",3,"Phase 2b · recruiting"],
  ["XC001","Adjunct to bypass surgery (CABG)","Of the roughly 500,000 CABG procedures performed each year in the US, an estimated one‑third of patients are at risk of incomplete revascularization. XC001 given with CABG may reduce it, in a planned double‑blind Phase 2 trial.",3,"Phase 2 · planned"],
  ["XC002","Cardiac regeneration after heart attack","Our second program, for patients whose hearts function poorly after past heart attacks and resulting heart failure. In animal models, XC002 has transformed non‑functioning cardiac cells into functioning cardiac cells.",1,"Discovery"]];
  return '<ul class="ppl">'+A.map(function(a){var bar='',lab='';for(var i=0;i<4;i++){bar+='<i'+(i<a[3]?' class="f"':'')+'></i>';lab+='<span>'+PH[i]+'</span>'}
    return '<li class="ppl-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="ppl-ph"><span class="tag">'+esc(a[4])+'</span><div class="ppl-bar" aria-hidden="true">'+bar+'</div><div class="ppl-lab" aria-hidden="true">'+lab+'</div></div></li>'}).join("")+'</ul>'+
  '<p class="disc">XC001 and XC002 are investigational and not approved for any use.</p>'}
function trial(){var F=[["Design","Randomized, double‑blind, sham‑controlled"],["Phase","2b · multicenter"],["Patients","106 planned, ages 18–85"],["Sites","US, UK and EU"],["Delivery","Cardiac catheter, in the cath lab"],["Dates","May 2025 – June 2027"]];
  return '<div class="tri"><dl class="tri-f">'+F.map(function(f){return '<div><dt>'+esc(f[0])+'</dt><dd>'+esc(f[1])+'</dd></div>'}).join("")+'</dl>'+
   '<div class="tri-e"><h3>You may qualify if you…</h3><ul>'+
    '<li>are between 18 and 85 and have been diagnosed with chronic angina due to obstructive coronary artery disease</li>'+
    '<li>have been told you have no other treatment options: you are unsuitable for stents or bypass surgery</li>'+
    '<li>still have symptoms (Canadian Cardiovascular Society class II–IV) despite maximized medical therapy</li></ul>'+
    '<div class="act"><a class="btn solid" href="'+CT+'" target="_blank" rel="noopener">NCT07048808 on ClinicalTrials.gov '+ARR+'</a><a class="btn" href="#contact" data-to="contact">Questions about the trial</a></div></div></div>'+
   '<div class="tri-r">'+
    '<div class="rc"><span class="rv">93%</span><p>of EXACT patients entered with chest pain so severe that it markedly limited daily activities.</p></div>'+
    '<div class="rc"><span class="rv">43%</span><p>reported no chest pain with ordinary activities six months after a single treatment with XC001.</p></div>'+
    '<div class="rc"><span class="rv">0</span><p>serious adverse events related to the study drug. Results published in <a class="ul" href="https://www.ahajournals.org/doi/epdf/10.1161/CIRCINTERVENTIONS.124.014054" target="_blank" rel="noopener">Circulation: Cardiovascular Interventions ↗</a></p></div>'+
   '</div>'}
function team(){var M=[["John H. Tucker, MBA","President and CEO",1],["Eric Duckers, MD, PhD","Chief Medical Officer",1],["Andrew Walsh","VP, Head of Finance"],["Dawn Byrnes","VP Clinical Operations"],["Alison Mastrangelo, PhD","Acting Head of CMC & Technical Operations"],["Howard Dittrich, MD","Medical Advisor"]],
  B=[["Glenn Batchelder","Executive Chairman"],["Ronald Crystal, MD","Founder and Advisor"],["Todd Rosengart, MD","Co‑founder"],["Pascal Touchon","Board member"],["Fouad Azzam, PhD, MBA","Board member"],["Alan Colowick, MD, MPH","Board member"],["Daniel Hetu, MD, MBA","Board member"],["Aidan King, MBA, CFA","Board member"]];
  function g(L){return '<ul class="tg">'+L.map(function(t){return '<li'+(t[2]?' class="ld"':'')+'><span class="tn">'+esc(t[0])+'</span><span class="tr">'+esc(t[1])+'</span></li>'}).join("")+'</ul>'}
  return '<div><p class="tgh">Management</p>'+g(M)+'<p class="tgh tgh2">Founders and board</p>'+g(B)+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical‑stage gene therapy<span class="nomob"> · King of Prussia, PA</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">New blood</span><span class="l">vessels for</span><span class="l"><em>the heart.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>XyloCor is developing XC001, a one‑time gene therapy designed to grow new coronary blood vessels, for patients with advanced coronary artery disease who have no other treatment options.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How XC001 works '+ARR+'</a><a class="btn" href="#trial" data-to="trial">The EXACT‑2 trial</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our vision</span>'+
   '<p class="txt" id="mani">Improve the lives of people who struggle with daily activities due to cardiovascular disease, through our commitment to <em>advancing the science of gene therapy.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$67.5M</span><p class="k">Series B, January 2025, led by Jeito Capital</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2b</span><p class="k">Phase of EXACT‑2, our randomized, sham‑controlled trial of XC001</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1990s</span><p class="k">Founders’ gene therapy and cardiac surgery work began at Weill Cornell</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · XC001</span><h2 class="d3">The heart’s own <em>bypass.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ischemia</span><span>Delivery</span><span>VEGF</span><span>New vessels</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A narrowed artery starves the muscle.</h2><p>In coronary artery disease, plaque limits blood flow to the heart muscle beyond it. The result is ischemia and angina. In refractory angina, medicines, stents and bypass surgery have all been exhausted.</p></article>'+
     '<article class="step"><h2>One delivery into the heart.</h2><p>In EXACT‑2, interventional cardiologists inject XC001 directly into the heart muscle from a catheter in the cath lab, using the Extroducer® Infusion Catheter System. One‑time, local administration, with no surgery.</p></article>'+
     '<article class="step"><h2>The heart’s cells make VEGF.</h2><p>XC001 is an altered adenovirus that cannot reproduce. Inside a cell it delivers the gene for human vascular endothelial growth factor (VEGF) to the nucleus; the cell makes VEGF protein and ships it outside.</p></article>'+
     '<article class="step"><h2>New vessels bring blood back.</h2><p>VEGF helps new blood vessels form around diseased ones, building on the body’s own pathways, to bring more blood and oxygen to the areas of the heart that need it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">For unmet needs in <em>cardiovascular disease.</em></h2></div><p data-r>Our lead candidate XC001 is in clinical development for refractory angina, with a second trial as an adjunct to bypass surgery. XC002, for cardiac regeneration, is in discovery.</p></div>'+
   ppl()+
  '</div></section>'+
  '<section class="sec dark2" id="trial" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>EXACT‑2 · now enrolling</span><h2 class="d2 split">A trial for <em>“no option”</em> angina.</h2></div><p data-r>XyloCor is recruiting adults living with chronic angina for EXACT‑2, a Phase 2b trial of XC001 delivered by cardiac catheter, at sites in the US and UK. It builds on the completed Phase 1/2 EXACT trial.</p></div>'+
   trial()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Gene therapy meets <em>cardiac surgery.</em></h2></div><p data-r>Founders Dr. Ronald Crystal and Dr. Todd Rosengart began their collaboration in the 1990s at Weill Cornell Medical College, combining gene therapy and cardiac surgery. XyloCor holds an exclusive license from Cornell.</p></div>'+
   '<div class="tm-wrap"><div class="tm-side"><p>Backed by Jeito Capital, Sofinnova and LSP, among others. Led since March 2026 by John H. Tucker, former CEO of scPharmaceuticals.</p><a class="btn" href="#contact" data-to="contact">Contact us '+ARR+'</a></div>'+team()+'</div>'+
  '</div></section>'+
  '<section class="sec light" id="news" data-theme="light" style="padding-top:0"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">XyloCor <em>in the news.</em></h2></div><p data-r>Leadership, financing, clinical results and the EXACT‑2 trial.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For patients, physicians, investors and partners</span>'+
   '<h2 class="big split">Questions about <em>XC001?</em></h2>'+
   '<p class="sub" data-r>Message us about the EXACT‑2 trial, our programs or a partnership. We will get back to you as soon as we can.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#trial" data-to="trial">The EXACT‑2 trial</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>411 Swedeland Road, Suite 23‑1080</span><br><span>King of Prussia, PA 19406</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+18882900081">888‑290‑0081</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>411 Swedeland Road<br>Suite 23‑1080<br>King of Prussia, PA 19406</div>'+
   '<div class="c"><span class="lab">Programs</span>XC001 · refractory angina<br>XC001 · adjunct to CABG<br>XC002 · cardiac regeneration</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#trial" data-to="trial">EXACT‑2 Trial</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18882900081">888‑290‑0081</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Nunito Sans\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.02em">XyloCor</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 XyloCor Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"XyloCor Therapeutics — Gene therapy for advanced coronary artery disease",x:"Home"}}'''

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
out = out.replace(".fieldbg{background:#120e0b}", ".fieldbg{background:#071a17}").replace("rgba(18,14,11,.12)", "rgba(7,26,23,.12)")  # template ink left outside the regions
(HERE / "xylocor.src.html").write_text(out)
print("wrote", HERE / "xylocor.src.html", len(out))
