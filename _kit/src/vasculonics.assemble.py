#!/usr/bin/env python3
"""Assemble vasculonics.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/vasculonics.assemble.py && node build.js src/vasculonics.src.html ../vasculonics/index.html
Facts: _kit/dossiers/vasculonics.md. Palette: the live vasculonics.com logo (red #ea1824, blue #3c54a4, white; ground #161616)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Vasculonics — First-in-class therapeutics for immunity and fibrosis</title>
<meta name="description" content="Vasculonics is developing VN-1032, an orally active selective aryl hydrocarbon receptor modulator (SAhRM), as cancer immunotherapy and as a disease-modifying therapy for pulmonary arterial hypertension and chronic kidney disease. Indianapolis, Indiana.">
<meta name="theme-color" content="#0a0d1b">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23ea1824'/%3E%3Cpath d='M6 30C8 46 20 60 34 60C22 52 14 40 12 22Z' fill='%233c54a4'/%3E%3Cpath d='M16 20L30 48L52 16C42 20 36 26 31 36Z' fill='%23fff'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Sora:300,400; Montserrat:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0a0d1b;--inkr:10,13,27;--boner:240,241,245;--accr:255,90,97;--ink2:#0e1222;--ink3:#141a2e;--deep:#070912;
  --bone:#f0f1f5;--bone2:#e5e7ee;--bone3:#d3d7e2;
  --stone:#a9afc0;--stoneD:#525a6e;
  --acc:#ea1824;--accL:#ff5a61;--accD:#c8101b;--blu:#3c54a4;--bluL:#93a6ee;
  --hair:rgba(240,241,245,.14);--hairD:rgba(10,13,27,.16);
  --disp:'Sora',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Sora',system-ui,sans-serif;
  --sans:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#0a0d1b,#0a0d1b)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the mark: the Vasculonics roundel (red disc, blue crescent lower left, white V), redrawn from the logo on vasculonics.com
MARK = '<circle cx="16" cy="16" r="15" fill="#ea1824"/><path d="M3 15C4 23 10 30 17 30C11 26 7 20 6 11Z" fill="#3c54a4"/><path d="M8 10L15 24L26 8C21 10 18 13 15.5 18Z" fill="#fff"/>'

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.vm{width:30px;height:30px;flex:none;overflow:visible}
.brand .bt{font:400 21px/1 var(--disp);letter-spacing:.005em;white-space:nowrap}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa1b4;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #687089;transition:background .35s,border-color .35s}
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
.scene svg *{vector-effect:non-scaling-stroke}
.scene .vg{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .vh{fill:none;stroke:rgba(var(--boner),.18);stroke-width:1}
.scene .vm{fill:rgba(var(--boner),.035);stroke:var(--bone);stroke-width:1.5}
.scene .vn{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1;stroke-dasharray:3 4}
.scene .vst{fill:rgba(var(--boner),.4)}
.scene .vido{fill:none;stroke:rgba(var(--boner),.7);stroke-width:1.2}
.scene .vpd{stroke:var(--accL);stroke-width:1.6}
.scene .vpdk{fill:var(--ink2);stroke:var(--accL);stroke-width:1.4}
.scene .vahr{fill:rgba(var(--boner),.06);stroke:var(--bone);stroke-width:1.5;transition:fill .4s,stroke .4s}
.scene #vsAhr.on .vahr{fill:rgba(var(--accr),.28);stroke:var(--accL)}
.scene #vsAhr.mod .vahr{fill:rgba(147,166,238,.3);stroke:var(--bluL)}
.scene .vky{fill:var(--accL);stroke:var(--ink2);stroke-width:1}
.scene .vcdf{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.85);stroke-width:1.3;transition:fill .45s,stroke .45s,stroke-dasharray .3s}
.scene .vcdn{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .vcd.ex .vcdf{stroke-dasharray:3 4;stroke:rgba(var(--boner),.45)}
.scene .vcd.go .vcdf{fill:rgba(234,24,36,.55);stroke:var(--accL)}
.scene .vtr{fill:rgba(147,166,238,.08);stroke:var(--bluL);stroke-width:1.2}
.scene .vtr2{fill:none;stroke:rgba(147,166,238,.55);stroke-width:1}
.scene .vdr{fill:rgba(147,166,238,.35);stroke:var(--bluL);stroke-width:1.4}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9cedb;paint-order:stroke;stroke:#0e1222;stroke-width:5px;stroke-linejoin:round}
.scene text.xa{fill:var(--accL)}
.scene text.vb{fill:var(--bluL)}
.scene text.vex{fill:#8c93a7}
.scene text.cap{fill:var(--accL)}
/* ===== Vasculonics additions ===== */
#story .rail span{color:#9aa1b4}#story .rail span.on{color:var(--bone)}
#story .rail span::before{border-color:#687089}#story .rail span.done::before,#story .rail span.on::before{border-color:var(--accL)}
#story .scene text{fill:#c9cedb}#story .scene text.xa,#story .scene text.cap{fill:var(--accL)}#story .scene text.vb{fill:var(--bluL)}#story .scene text.vex{fill:#8c93a7}
.ftr .fcv{display:none}
@media (max-width:860px){.fieldbg{background:#0a0d1b!important}#field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(34svh - 24px),transparent calc(34svh + 6px))!important;mask-image:linear-gradient(180deg,#000 0,#000 calc(34svh - 24px),transparent calc(34svh + 6px))!important}}
@media (max-width:860px){section.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0,rgba(var(--inkr),0) 280px,rgba(var(--inkr),.86) 420px,rgba(var(--inkr),.95) 72%,var(--ink) 100%)}}
.hero .hero-h,#pageTitle.hero-h{font-size:clamp(40px,4.4vw,76px)!important;letter-spacing:-.04em;line-height:1.08;margin-bottom:.22em;font-weight:300;max-width:none}
.hero{justify-content:center!important;padding-top:clamp(120px,15vh,170px)!important;padding-bottom:clamp(80px,10vh,120px)!important}
@media (max-width:1366px) and (min-width:861px){.hero .hero-h,#pageTitle.hero-h{font-size:clamp(40px,4.3vw,58px)!important}}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h,#pageTitle.hero-h{font-size:clamp(34px,9.4vw,60px)!important}.hero .hero-h .l{white-space:normal}.hero{justify-content:flex-start!important;padding-top:calc(34svh + 8px)!important}}
.hero-foot .s{max-width:44ch}
.hcap{position:absolute;right:var(--side);bottom:clamp(28px,4.4vh,44px);margin:0;max-width:40ch;text-align:right;color:rgba(var(--boner),.62);font-size:10.5px;line-height:1.6;z-index:2}
@media (max-width:1024px){.hcap{display:none}}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.035em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:#fff;border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(46px,4.6vw,86px);font-weight:300;letter-spacing:-.045em}
.stat .v sup{color:var(--accL);font-size:.42em;vertical-align:.9em;margin-left:.08em;letter-spacing:0}
.stat p.k{margin:0}
/* pipeline rows */
.vpl{list-style:none;margin:0;padding:0}
.vpl-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,5.2fr) minmax(0,3.8fr);column-gap:var(--gap);align-items:start;padding:22px 0 24px;border-top:1px solid var(--hairD);position:relative}
.vpl-row:last-child{border-bottom:1px solid var(--hairD)}
.vpl-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.vpl-row:hover::after{transform:scaleX(1)}
.vpl-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2.2vw,36px);line-height:1.08;letter-spacing:-.03em;margin:0 0 10px}
.vpl-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD)}
.vpl-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:56ch}
.vpl-row .meta{display:flex;flex-direction:column;gap:10px}
.vpl-row .meta .lab{color:var(--stoneD)}
.vpl-row .meta a{color:var(--ink)}
.vpl-bar{position:relative;height:6px;background:var(--bone3);margin:2px 0 4px}
.vpl-bar i{position:absolute;left:0;top:0;bottom:0;background:var(--acc)}
.vpl-bar i.b{background:var(--blu)}
.vpl-stg{display:grid;grid-template-columns:repeat(4,1fr);font:400 9.5px/1.3 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--stoneD)}
@media (max-width:1024px){.vpl-row{grid-template-columns:1fr 1fr;row-gap:16px}.vpl-row .meta{grid-column:1/-1}}
@media (max-width:700px){.vpl-row{grid-template-columns:1fr}}
/* mechanism columns */
.caps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(64px,7vw,110px)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:24px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--acc)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.025em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:40ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:900px){.caps{grid-template-columns:1fr;row-gap:40px}}
/* milestones */
.ms{list-style:none;margin:0;padding:0}
.ms-row{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,6fr) minmax(0,3fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.ms-row:last-child{border-bottom:1px solid var(--hair)}
.ms-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.ms-row:hover::after{transform:scaleX(1)}
.ms-row .yr{padding-top:.55em;font:400 11px/1.6 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.ms-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.7vw,27px);line-height:1.18;letter-spacing:-.02em;margin:0}
.ms-row .meta{display:flex;flex-direction:column;gap:6px;align-items:flex-start;padding-top:.35em}
.ms-row .meta a{color:var(--bone)}
.ms-row .tag{display:inline-block;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--acc);padding:6px 8px 5px}
@media (max-width:900px){.ms-row{grid-template-columns:minmax(0,1fr) minmax(0,3fr);row-gap:10px}.ms-row .meta{grid-column:2;flex-direction:row;flex-wrap:wrap;gap:6px 18px}}
@media (max-width:560px){.ms-row{grid-template-columns:1fr}.ms-row .meta{grid-column:1}}
/* team: masthead lists */
.tmh{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:clamp(32px,5vw,96px);align-items:start}
.tmh-side p{color:var(--stoneD);font-size:16px;line-height:1.6;max-width:38ch;margin:0 0 18px}
@media (max-width:1024px){.tmh{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(18px,1.4vw,23px);line-height:1.38;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("vasculonics-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><circle cx="48" cy="48" r="40"/><path d="M14 46C16 66 30 84 50 86M26 30L44 70L74 24C62 30 54 38 47 52"/></svg>
    <div class="wm"><span>VASCULONICS</span></div>
  </div>
  <span class="lab pl">Therapeutics for immunity and fibrosis · Indianapolis, Indiana</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Vasculonics, home"><svg class="vm" viewBox="0 0 32 32" aria-hidden="true">' + MARK + '</svg><span class="bt">Vasculonics</span></a>'

NAV = [("story", "Science"), ("pipeline", "Pipeline"), ("team", "Team"), ("milestones", "Milestones")]
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
    <div><span class="lab">Office</span><br>Indianapolis, Indiana</div>
    <div><span class="lab">Lead</span><br>VN-1032 · SAhRM</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Vasculonics</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Vasculonics";\nvar PK="vasculonics";'

R["content"] = r'''var FONTS=['300 1em "Sora"','400 1em "Sora"','400 1em "Montserrat"','500 1em "Montserrat"','400 1em "IBM Plex Mono"'];
var FORM="https://vasculonics.com/";
var RP="https://reporter.nih.gov/project-details/";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];var NEWS=[];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function vpl(){var A=[
  ["VN-1032","Cancer immunotherapy","Pancreatic and colorectal cancer. Potent enhancement of intratumoral cytotoxic T cells, with promising compatibility for PD-1 inhibitor combinations and a pharmacological profile distinct from existing AhR antagonists.",["Clinical candidate","FDA Pre-IND response, 2026"],3,""],
  ["VN-1032","Pulmonary arterial hypertension","An oral, disease-modifying therapy. VN-1032 reduced AhR activation and the vascular toxin ADMA, and produced robust efficacy in the Sugen-Hypoxia model of PAH progression; Phase II work covers safety in rats and dogs and dose-response efficacy in severe disease.",["NHLBI SBIR Phase II","IND-enabling path"],2,"11193989"],
  ["VN-1032","Chronic kidney disease","Targets the inflammation, oxidative stress and fibrosis behind progressive disease, with disease-modifying efficacy in preclinical models of CKD.",["Preclinical efficacy"],1,""],
  ["DDAH programme","Kidney protection","A potential DDAH biotherapeutic to preserve kidney function in cardiac surgery patients (NIDDK SBIR Phase I), and a small-molecule DDAH modulator for diabetic kidney disease, a 2021 BARDA Blue Knight QuickFire winner.",["NIDDK SBIR Phase I","2020–2021"],1,"10080189"]];
  return '<ul class="vpl">'+A.map(function(a,i){var lk=a[5]?'<a class="lab ul" href="'+RP+a[5]+'" target="_blank" rel="noopener">NIH RePORTER ↗</a>':'';
    return '<li class="vpl-row"><div><h3>'+esc(a[1])+'</h3><span class="nm3">'+esc(a[0])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+
     a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+lk+'</div></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Immune suppression","In tumours, AhR drives IDO and kynurenine, induces PD-L1, exhausts CD8⁺ T cells, enriches Tregs and shapes macrophage and dendritic cell activity. Modulating it is a key strategy to enhance immunotherapy.",'<circle cx="24" cy="30" r="18"/><circle class="a" cx="46" cy="14" r="7"/><circle class="a" cx="48" cy="34" r="6"/>'],
  ["Vascular disease","AhR activation is essential for PAH progression in humans and animal models, and the vascular toxin ADMA is raised in PAH. VN-1032 acts on both.",'<path d="M6 16C18 16 22 28 28 28S38 16 50 16M6 40C18 40 22 28 28 28S38 40 50 40"/><path class="a" d="M14 28H42"/>'],
  ["Fibrosis","AhR plays important roles in inflammatory and fibrotic disease. VN-1032 targets inflammation, oxidative stress and fibrosis across PAH and CKD.",'<path d="M8 46C16 30 20 22 28 10M18 46C24 34 30 26 40 16M30 48C36 38 42 32 50 26"/><path class="a" d="M10 30L46 30"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function ms(){var A=[
  ["2026","Vasculonics obtains the FDA response to its Pre-IND briefing","Company",""],
  ["2025","SBIR Phase II continues: a novel disease modifying oral therapy for PAH","NHLBI · $1.28M","11193989"],
  ["2024","SBIR Phase II award for the oral PAH therapy","NHLBI","11006726"],
  ["2021–23","NHLBI Catalyze II: preclinical development of a disease modifying therapy for PAH","NHLBI","10260552"],
  ["2021","BARDA Blue Knight QuickFire winner: a small-molecule DDAH modulator for diabetic kidney disease","Prize",""],
  ["2020","Incorporated as a C-Corp; SBIR Phase I for a DDAH biotherapeutic to preserve kidney function in cardiac surgery","NIDDK","10080189"],
  ["2019","SBIR Phase I: a novel disease modifying therapy for progression of PAH","NHLBI","9845919"]];
  return '<ul class="ms">'+A.map(function(a,i){var lk=a[3]?'<a class="lab ul" href="'+RP+a[3]+'" target="_blank" rel="noopener">NIH RePORTER ↗</a>':'';
    return '<li class="ms-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><div class="meta">'+(i===0?'<span class="tag">Latest</span>':'')+'<span class="lab">'+esc(a[2])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function mh(label,ps){return '<div class="mh-group"><p class="mh-label">'+esc(label)+'</p><ul class="mh-list">'+ps.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div>'}
function team(){return '<div class="mh">'+
  mh("Leadership",[["Jaipal Singh, PhD","CSO & Founder","Principal investigator on the company’s NIH awards"],["Brad Lawson","CEO",""],["Anantha Shekhar, MD, PhD","Co-Founder","Scientific Advisory Board"],["Young Lee, PhD","Project Leader",""],["Vijay Reddy, PhD, DABT","SVP, Toxicology",""]])+
  mh("Advisors and investigators",[["Raymond Kauffman, PhD","Pharmacology Advisor",""],["Srinivas Kasibhatla, PhD","Chemistry Advisor",""],["Douglas Balogh, PhD","FDA Regulatory Affairs / CMC Advisor",""],["Timothy Frankel, MD","Scientific & Clinical Advisor","Oncology"],["Jamie Mills, MD, PhD","Clinical Investigator","Pancreatic ductal adenocarcinoma"],["Andrew Dahlem, PhD","Strategic Advisor",""]])+
  '</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Biotechnology · Indianapolis, Indiana<span class="nomob"> · NIH SBIR</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">First-in-class</span><span class="l">medicines for</span><span class="l"><em>immunity and fibrosis.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>VN-1032 is an orally active, selective aryl hydrocarbon receptor modulator. It enhances the cytotoxic T cells inside tumours, and modifies disease in preclinical models of pulmonary arterial hypertension and kidney disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">See how VN-1032 works '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Our pipeline</a></div></div>'+
   '<p class="lab hcap" data-r>The AhR ligand-binding domain (PAS-B), space-filled from PDB 7ZUB, cut away to show its ligand pocket (red) with indirubin bound. Illustrative render</p>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Vasculonics</span>'+
   '<p class="txt" id="mani">One chemical platform, aimed at a molecular pathway that runs through cancer, <em>vascular disease and fibrosis.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.28M</span><p class="k">NHLBI SBIR Phase II funding for the oral PAH programme, 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.8<sup>yrs</sup></span><p class="k">Average survival in PAH; today’s vasodilators treat symptoms, not progression</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><p class="k">FDA response to the company’s Pre-IND briefing</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science · VN-1032</span><h2 class="d3">Override immune <em>suppression.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Suppression</span><span>Modulation</span><span>Attack</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A receptor tumours exploit.</h2><p>Cancer cells raise IDO, which makes kynurenine, a natural activator of the aryl hydrocarbon receptor (AhR).</p></article>'+
     '<article class="step"><h2>The brakes go on.</h2><p>Active AhR induces PD-L1, drives CD8⁺ T cells into exhaustion and enriches regulatory T cells in the tumour, which hold back what cytotoxic T cells are left.</p></article>'+
     '<article class="step"><h2>VN-1032 modulates AhR.</h2><p>An orally active, selective AhR modulator (SAhRM), with a pharmacological profile distinct from existing AhR antagonists.</p></article>'+
     '<article class="step"><h2>T cells back in the fight.</h2><p>Potent enhancement of intratumoral cytotoxic T cells, with significant efficacy as immunotherapy in pancreatic and colorectal cancer and promising compatibility with PD-1 inhibitors.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One molecule, <em>three diseases.</em></h2></div><p data-r>VN-1032 modulates a critical pathway implicated across cancer immunotherapy and fibrotic disease, positioning it as a potentially transformative approach. A DDAH programme for kidney protection runs alongside.</p></div>'+
   vpl()+caps()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers, <em>from chemistry to clinic.</em></h2></div><p data-r>A founding scientist and co-founder, a toxicology and regulatory bench, and clinical advisors in oncology and pancreatic cancer.</p></div>'+
   '<div class="tmh"><div class="tmh-side"><p>Vasculonics has built its programmes with continuous NIH support since 2019, from Phase I to the current NHLBI SBIR Phase II.</p><a class="btn" href="'+RP+'11193989" target="_blank" rel="noopener">The current NIH award '+ARR+'</a></div>'+team()+'</div>'+
  '</div></section>'+
  '<section class="sec dark2" id="milestones" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Milestones</span><h2 class="d2 split">From Phase I to <em>Pre-IND.</em></h2></div><p data-r>Seven years of awards and milestones, from the first SBIR for PAH in 2019 to the FDA’s response to the Pre-IND briefing in 2026.</p></div>'+
   ms()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For partners, investors and investigators</span>'+
   '<h2 class="big split">Talk to us about <em>VN-1032.</em></h2>'+
   '<p class="sub" data-r>We are advancing VN-1032 toward IND filing in oncology and pulmonary arterial hypertension. Send us a message and the team will be in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Send a message '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">See the pipeline</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>1800 North Capitol Avenue</span><br><span>Noyes Pavilion, 5th Floor, E504C</span><br><span>Indianapolis, Indiana 46202</span></p></div>'+
    '<div><span class="lab">Leadership</span><p>Jaipal Singh, PhD, CSO &amp; Founder<br>Brad Lawson, CEO</p></div>'+
    '<div><span class="lab">Funding</span><p><a class="ul" href="'+RP+'11193989" target="_blank" rel="noopener">NHLBI SBIR Phase II ↗</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>1800 North Capitol Avenue<br>Indianapolis, Indiana 46202</div>'+
   '<div class="c"><span class="lab">Programmes</span>VN-1032 · oncology, PAH, CKD<br>DDAH · kidney protection</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Science</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#milestones" data-to="milestones">Milestones</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Message form ↗</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 44" aria-hidden="true"><text x="380" y="36" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.06em">VASCULONICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vasculonics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Vasculonics — First-in-class therapeutics for immunity and fibrosis",x:"Home"}}'''

R["field"] = (HERE / "vasculonics.field.js").read_text()
R["story"] = (HERE / "vasculonics.story.js").read_text()

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
(HERE / "vasculonics.src.html").write_text(out)
print("wrote", HERE / "vasculonics.src.html", len(out))
