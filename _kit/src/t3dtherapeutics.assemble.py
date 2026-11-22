#!/usr/bin/env python3
"""Assemble t3dtherapeutics.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/t3dtherapeutics.assemble.py && node build.js src/t3dtherapeutics.src.html ../t3dtherapeutics/index.html
Facts: _kit/dossiers/t3dtherapeutics.md. Palette: the T3D logo and live t3dtherapeutics.com (blue gradient T and D ~#1f7ad0/#0f5fae,
green 3 ~#3f9e3a/#6cc04a, blue header bar); ink is a deep logo blue. Hero: _kit/home/t3dtherapeutics/ppar.py (PDB 3TKM)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>T3D Therapeutics — T3D-959 for Alzheimer’s disease</title>
<meta name="description" content="T3D Therapeutics is a clinical-stage company in Research Triangle Park, NC, developing T3D-959, an oral, once-a-day PPAR delta/gamma agonist that targets the brain’s failing glucose and lipid metabolism in Alzheimer’s disease.">
<meta name="theme-color" content="#05162b">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2305162b'/%3E%3Cpath d='M10 16H30M20 16V48' stroke='%232a84d8' stroke-width='7'/%3E%3Cpath d='M34 16H52L42 30C50 30 54 34 54 40C54 46 49 49 43 49H34' fill='none' stroke='%235cb94e' stroke-width='6'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Sora:300,400,700; Open Sans:400,600; DM Mono:400*/"

R["root"] = r''':root{
  --ink:#05162b;--inkr:5,22,43;--boner:243,247,251;--accr:42,132,216;--ink2:#081d36;--ink3:#0d2644;--deep:#031020;
  --bone:#f3f7fb;--bone2:#e6eef6;--bone3:#d3dfec;
  --stone:#a6b6c8;--stoneD:#4a5a6e;
  --acc:#1f74c6;--accL:#7fbff2;--accD:#145fa8;--grn:#3f9e3a;--grnL:#93d77f;--grnD:#2f7f2b;
  --hair:rgba(243,247,251,.14);--hairD:rgba(5,22,43,.16);
  --disp:'Sora',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Sora',system-ui,sans-serif;
  --sans:'Open Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'DM Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#05162b,#05162b)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}
@media (max-width:860px){.fieldbg{background:#05162b}
  html .hero{padding-top:calc(40svh + 8px)!important}
  html #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 110px),transparent calc(40svh + 4px));mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 110px),transparent calc(40svh + 4px))}}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand .bw{font:700 26px/1 'Sora',system-ui,sans-serif;letter-spacing:.01em;color:#4aa0ec;white-space:nowrap}
.brand .bw i{font-style:normal;color:var(--grnL)}
.brand .bt{font:400 10.5px/1 'DM Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:var(--bone);padding:5px 0 4px 12px;border-left:1px solid var(--hair);white-space:nowrap}
@media (max-width:420px){.brand .bt{display:none}}'''


R["scenecss"] = r'''/* story (pinned, one continuous scene) */
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
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9d1db;paint-order:stroke;stroke:#08203a;stroke-width:5px;stroke-linejoin:round}
.scene text.cap{fill:var(--accL)}
.scene svg *{vector-effect:none}
.scene .t3v{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.2}
.scene .t3h{fill:none;stroke:rgba(var(--boner),.1);stroke-width:1}
.scene .t3rbc{fill:rgba(224,112,94,.16);stroke:#e88a78;stroke-width:1}
.scene .t3d{fill:none;stroke:rgba(var(--boner),.58);stroke-linecap:round}
.scene .t3ax{fill:none;stroke:rgba(var(--boner),.7);stroke-width:2.2;stroke-linecap:round}
.scene .t3my{fill:var(--ink2);stroke:rgba(var(--boner),.62);stroke-width:1.1}
.scene .t3sf{fill:rgba(var(--accr),.07);stroke:none}
.scene .t3e{fill:none;stroke:rgba(var(--boner),.13);stroke-width:1}
.scene .t3s{fill:none;stroke:var(--bone);stroke-width:1.6}
.scene .t3n{fill:var(--ink2);stroke:var(--accL);stroke-width:1.3}
.scene .t3nl{fill:rgba(var(--accr),.25);stroke:var(--accL);stroke-width:1}
.scene .t3rc{fill:rgba(147,215,127,.35);stroke:var(--grnL);stroke-width:1.2}
.scene .t3rc.g{fill:rgba(147,215,127,.18)}
.scene .t3mg{fill:rgba(255,206,110,.34);stroke:none}
.scene .t3m{fill:var(--ink2);stroke:#ffd27a;stroke-width:1.2}
.scene .t3mc{fill:none;stroke:rgba(255,210,122,.75);stroke-width:.9}
.scene .t3tg{fill:none;stroke:#ff9a86;stroke-width:1.5;stroke-linecap:round}
.scene .t3pf{fill:rgba(255,170,90,.14);stroke:#f3b36e;stroke-width:1.3}
.scene .t3ph{fill:none;stroke:rgba(243,179,110,.55);stroke-width:.9}
.scene .t3pl{transform-box:view-box}
.scene .t3gl{fill:rgba(255,210,122,.22);stroke:#ffd27a;stroke-width:1.2}
.scene .t3ld{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#cfdbe8;paint-order:stroke;stroke:#08203a;stroke-width:5px;stroke-linejoin:round}
.scene text.g{fill:var(--grnL)}
.scene text.cap{fill:var(--accL)}
/* ===== T3D additions ===== */
.ftr .fcv{opacity:.3}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(42px,4.4vw,88px);letter-spacing:-.035em;line-height:1.05;font-weight:300;max-width:13ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
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
.stat .v{font-size:clamp(50px,5vw,92px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
/* products: rows */
.prd{list-style:none;margin:0;padding:0}
.prd-grid{display:block}
.prd-row{display:grid;grid-template-columns:minmax(0,3.4fr) minmax(0,5fr) minmax(0,2.6fr);column-gap:var(--gap);align-items:start;padding:20px 0 22px;border-top:1px solid var(--hairD);position:relative}
.prd-row:last-child{border-bottom:1px solid var(--hairD)}
.prd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prd-row:hover::after{transform:scaleX(1)}
.prd-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.4vw,40px);line-height:1.05;letter-spacing:-.025em;margin:0 0 10px}
.prd-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD)}
.prd-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:54ch}
.prd-row .meta{display:flex;flex-direction:column;gap:8px}
.prd-row .meta .lab{color:var(--stoneD)}
.prd-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--acc);padding:6px 8px 5px}
@media (max-width:1024px){.prd-row{grid-template-columns:1fr 1fr;row-gap:16px}.prd-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.prd-row{grid-template-columns:1fr}}
/* funded programmes */
.rd{list-style:none;margin:0;padding:0}
.rd-row{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,4.4fr) minmax(0,4fr) minmax(0,2fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
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
.pils{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap);margin-top:clamp(64px,7vw,110px)}
.pil{border-top:1px solid var(--hair);padding-top:24px;position:relative}
.pil::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.pil:hover::before{transform:scaleX(1)}
.pil svg{width:56px;height:56px;margin-bottom:24px;overflow:visible;display:block}
.pil svg *{fill:none;stroke:var(--bone);stroke-width:1.1}
.pil svg .a{stroke:var(--accL)}
.pil h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px}
.pil p{color:var(--stone);font-size:15.5px;margin:0;max-width:38ch}
.pil .lab{display:block;margin-bottom:14px;color:var(--accL)}
@media (max-width:1100px){.pils{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:48px}}
@media (max-width:620px){.pils{grid-template-columns:1fr;row-gap:40px}}
/* team: refined text-only */
.tm{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start}
.tm-p{border-top:1px solid var(--hairD);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD);margin-bottom:18px}
.tm-p p{color:var(--stoneD);font-size:16px;line-height:1.6;margin:0 0 14px;max-width:56ch}
.tm-x{list-style:none;margin:28px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:var(--gap)}
.tm-x li{padding:14px 0 16px;border-top:1px solid var(--hairD);font-size:15px;color:var(--ink)}
.tm-x .lab{display:block;margin-bottom:6px;color:var(--stoneD)}
.tm-side p{color:var(--stoneD);font-size:16px;line-height:1.6;max-width:40ch;margin:0 0 18px}
@media (max-width:1024px){.tm{grid-template-columns:1fr}}
@media (max-width:560px){.tm-x{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["scenecss"] += r'''
/* team: name grid */
.tg{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));column-gap:var(--gap)}
.tg li{border-top:1px solid var(--hairD);padding:16px 0 22px;position:relative}
.tg li::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tg li:hover::before{transform:scaleX(1)}
.tg .tn{display:block;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.45vw,23px);line-height:1.2;letter-spacing:-.01em;color:var(--ink)}
.tg .tr{display:block;margin-top:6px;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--stoneD)}
.tg li.ld .tn{font-size:clamp(20px,1.6vw,25px)}
.tg li.ld .tr{color:var(--accD)}
@media (max-width:1024px){.tg{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:700px){.tg{grid-template-columns:repeat(2,minmax(0,1fr))}}
.tm-wrap{display:grid;grid-template-columns:minmax(0,3.6fr) minmax(0,8.4fr);gap:clamp(32px,5vw,96px);align-items:start}
.tm-wrap .tm-side .btn{margin-top:6px}
@media (max-width:1024px){.tm-wrap{grid-template-columns:1fr}}
.tm-list{min-width:0}
.tgh{display:block;margin:0 0 14px;color:var(--accD)}
.tg+.tgh{margin-top:44px}
@media (min-width:861px){.hero{padding-top:clamp(150px,17vh,190px)!important}}
.disc{margin:28px 0 0;font:400 11px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--stoneD)}
'''


R["seen"] = r'''<script>try{if(sessionStorage.getItem("t3dtherapeutics-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M8 22H40M24 22V74M50 22H80L64 44C76 44 84 50 84 60C84 70 76 76 66 76H50"/></svg>
    <div class="wm"><span>T3D THERAPEUTICS</span></div>
  </div>
  <span class="lab pl">Alzheimer’s disease · Research Triangle Park, NC</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="T3D Therapeutics, home"><span class="bw">T<i>3</i>D</span><span class="bt">Therapeutics</span></a>'

NAV = [("story", "Science"), ("pipeline", "Pipeline"), ("clinical", "Clinical"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Office</span><br>Research Triangle Park, NC</div>
    <div><span class="lab">Email</span><br>info@t3dtherapeutics.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">T3D Therapeutics</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="T3D Therapeutics";\nvar PK="t3dtherapeutics";'

R["content"] = r'''var FONTS=['300 1em "Sora"','400 1em "Sora"','700 1em "Sora"','400 1em "Open Sans"','600 1em "Open Sans"','400 1em "DM Mono"'];
var MAIL="info@t3dtherapeutics.com";
var RP="https://reporter.nih.gov/project-details/";
var TN="https://www.t3dtherapeutics.com/";
var SECS={science:"story",pipeline:"pipeline",clinical:"clinical",team:"team",news:"news",contact:"contact"};
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2024-07-31",s:"AAIC 2024 · Philadelphia",t:"A novel way to reduce Alzheimer’s amyloid plaque burden: Phase 2 results of T3D-959 presented at AAIC",u:TN+"2024/07/31/a-novel-way-to-reduce-alzheimers-amyloid-plaque-burden-phase-2-clinical-trial-results-of-t3d-959-to-be-presented-by-t3d-therapeutics-at-aaic/"},
 {d:"2024-07-24",s:"Scientific Advisory Board",t:"Leading Alzheimer’s expert joins T3D Therapeutics’ Scientific Advisory Board",u:TN+"2024/07/31/leading-alzheimers-expert-joins-t3d-therapeutics-scientific-advisory-board/"},
 {d:"2023-10-04",s:"CTAD 2023 · Late-breaking",t:"Topline results from the Phase 2 PIONEER study of T3D-959 selected as late-breaking news at CTAD",u:TN+"2023/10/04/t3d-therapeutics-selected-to-present-topline-results-from-the-phase-2-pioneer-study-of-t3d-959-as-late-breaking-news-at-the-16th-clinical-trials-on-alzheimers-disease-conference-ctad/"},
 {d:"2021-04-20",s:"Phase 2",t:"First patient dosed in the Phase 2 PIONEER study of T3D-959 in mild to moderate Alzheimer’s disease",u:TN+"2021/04/20/t3d-therapeutics-inc-t3d-therapeutics-announces-first-patient-dosed-in-its-phase-2-study-of-t3d-959-for-the-treatment-of-mild-to-moderate-alzheimers-disease/"},
 {d:"2020-08-27",s:"Alzheimer’s Association",t:"Research award from the Part the Cloud-Gates Partnership Grant Program",u:TN+"2020/08/27/t3d-therapeutics-receives-a-research-award-from-the-alzheimers-association-part-the-cloud-gates-partnership-grant-program/"},
 {d:"2019-11-06",s:"Financing",t:"T3D Therapeutics closes a $15M financing to advance Phase 2 development of T3D-959",u:TN+"2019/11/06/t3d-therapeutics-closes-15m-financing-to-advance-phase-2-development-of-t3d-959-in-a-new-approach-to-treating-alzheimers-disease/"}
];'''

R["views"] = r'''function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function prd(){var A=[
  ["T3D-959","Alzheimer’s disease · mild to moderate","An oral, once-a-day small molecule that activates two nuclear receptors central to glucose and lipid metabolism in the brain, PPARδ and, at 15-fold lower potency, PPARγ. The first PPARδ-activating compound developed for Alzheimer’s disease.",["Phase 1 · Phase 2a · Phase 2 PIONEER completed","Results presented at AAIC 2024"],"Phase 2"],
  ["T3D-959","Mild cognitive impairment","The same once-a-day medicine is being considered for patients earlier in the disease course, with mild cognitive impairment (MCI).",["Potential indication"],"Planned"],
  ["T3D-959 and related molecules","Huntington’s disease and other neurodegenerative diseases","T3D holds an exclusive, worldwide license for T3D-959 and structurally related small molecules, whose mechanism of action may benefit neurodegenerative diseases beyond Alzheimer’s, with an emphasis on Huntington’s disease.",["Exclusive worldwide license"],"Research"]];
  return '<ul class="prd prd-grid">'+A.map(function(a){return '<li class="prd-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta"><span class="tag">'+esc(a[4])+'</span>'+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'+
  '<p class="disc">T3D-959 is an investigational new drug candidate and is not approved for any indication in any market.</p>'}
function rd(){var A=[
  ["Phase 1","Safety in healthy volunteers","96 normal subjects dosed for up to 7 days: no drug-related adverse events, and a maximum tolerated dose above 200 mg, more than twice the highest dose later tested in Phase 2a.",["Once-a-day oral dosing",""],"Completed"],
  ["Phase 2a","Exploratory study in Alzheimer’s patients","34 subjects with mild to moderate disease, randomized to one of four doses for 14 days, with a 22-week open-label extension. It showed drug penetration and target engagement in the human brain, potential gains in cognition and motor function, and a probable low effective dose range.",["Presented at AAIC 2018",""],"Completed"],
  ["Phase 2","PIONEER","A multi-center, double-blind, placebo-controlled study of the safety, tolerability and efficacy of T3D-959 in mild to moderate Alzheimer’s disease. Topline results were late-breaking news at CTAD 2023; cognition, function and plasma biomarker results followed at AAIC 2024.",["NCT04251182","ct"],"Completed"],
  ["2023–","Clinical development enablement","An NIH SBIR award from the National Institute on Aging for long-term rodent testing of T3D-959’s carcinogenic potential, a step toward longer clinical studies; renewed in July 2025.",["NIH · NIA · R44AG082580","11091651"],"Active"]];
  return '<ul class="rd">'+A.map(function(a){var u=a[3][1]==="ct"?"https://clinicaltrials.gov/study/NCT04251182":a[3][1]?RP+a[3][1]:"";
    var lk=u?'<a class="lab ul" href="'+u+'" target="_blank" rel="noopener">'+(a[3][1]==="ct"?"ClinicalTrials.gov ↗":"NIH RePORTER ↗")+'</a>':'';
    return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">'+a[4]+'</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function pils(){var C=[
  ["Starvation and strangulation","Uniquely addresses both the ‘starvation’ and the ‘strangulation’ of the brain found in Alzheimer’s disease.",'<circle cx="28" cy="28" r="22"/><path class="a" d="M28 12l13.9 8v16L28 44l-13.9-8V20z"/>'],
  ["Memory, motion, cognition","Potentially the first drug to improve memory, motor function and cognition.",'<path d="M6 36C14 20 22 20 28 30S42 40 50 22"/><path class="a" d="M6 46H50"/>'],
  ["Many defects at once","Potentially the first drug to improve multiple defects caused by Alzheimer’s disease.",'<circle cx="18" cy="20" r="10"/><circle cx="38" cy="20" r="10"/><circle class="a" cx="28" cy="38" r="10"/>'],
  ["Once a day, by mouth","An oral medicine, taken once a day, designed for patients and caregivers.",'<rect x="10" y="20" width="36" height="16" rx="8"/><path class="a" d="M28 20V36"/>']];
  return '<div class="pils">'+C.map(function(c,i){return '<div class="pil"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function team(){var G=[["Management",[["John Didsbury, PhD","President & CEO, Chairman",1],["Warren Strittmatter, MD","Chief Medical Officer",1],["Hoda Gabriel, PMP","Consultant, clinical development"],["Stan Chamberlain, PhD","Consultant, chemistry"],["Blake Swearingen, MS","Consultant, clinical research"]]],
  ["Board of Directors",[["Barry Buzogany, Esq.","Director"],["Charles Lineberry, PhD","Director"],["John A. Golden","Director"],["Thomas G. Mendell","Director"]]],
  ["Scientific Advisory Board",[["Roberta Brinton, PhD","Scientific Advisor"],["Roger Bullock, MB BS, MRCPsych","Scientific Advisor"],["Michael Heneka, MD","Scientific Advisor"],["Robert Alexander, MD","Scientific Advisor"]]]];
  return G.map(function(g){return '<span class="lab tgh">'+esc(g[0])+'</span><ul class="tg">'+g[1].map(function(t){return '<li'+(t[2]?' class="ld"':'')+'><span class="tn">'+esc(t[0])+'</span><span class="tr">'+esc(t[1])+'</span></li>'}).join("")+'</ul>'}).join("")}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage · Alzheimer’s disease<span class="nomob"> · Research Triangle Park, NC</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Alzheimer’s is</span><span class="l">a disease of</span><span class="l"><em>brain energy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>T3D-959 is an oral, once-a-day medicine that activates PPARδ and PPARγ, the nuclear receptors that regulate how the brain uses glucose and lipids, to treat the disease at its metabolic roots.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How T3D-959 works '+ARR+'</a><a class="btn" href="#clinical" data-to="clinical">Clinical results</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our approach · since 2013</span>'+
   '<p class="txt" id="mani">T3D was founded to challenge two decades of thinking about Alzheimer’s. We see it as a <em>neuro-metabolic disease:</em> a brain that can no longer turn sugar into energy starves, and plaques, tangles and inflammation follow.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2%</span><p class="k">of total body weight is the brain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20%</span><p class="k">of the body’s oxygen is used by the adult brain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25%</span><p class="k">of the body’s glucose is used by the brain at rest</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science · T3D-959</span><h2 class="d3">Feed the brain, <em>then protect it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fuel</span><span>Starvation</span><span>Damage</span><span>T3D-959</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The brain runs on sugar.</h2><p>The brain is the most metabolically active organ in the body. It is only 2% of body weight, yet it uses 25% of the body’s glucose, and relies on balanced lipid metabolism to keep its cells working.</p></article>'+
     '<article class="step"><h2>Then the fuel stops.</h2><p>In Alzheimer’s disease the brain loses its ability to process sugar into energy and to keep its lipids in balance. The brain starves, and a wasting process begins that leads to cognitive and motor deficits.</p></article>'+
     '<article class="step"><h2>Starvation, then strangulation.</h2><p>The starving brain then degenerates, and the ‘strangulation’ shows as the plaques, tangles and inflammation of the Alzheimer’s brain. That is why T3D addresses the starvation first.</p></article>'+
     '<article class="step"><h2>T3D-959 targets both.</h2><p>T3D-959 activates PPARδ and PPARγ, nuclear receptors that are central regulators of glucose and lipid metabolism, aiming to restore the brain’s energy and slow the damage. In Phase 2a it reached the human brain and engaged its target.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One molecule, <em>a metabolic approach.</em></h2></div><p data-r>Our lead compound T3D-959 is in active development as a potentially disease-modifying, orally delivered, once-a-day medicine for Alzheimer’s disease, with Huntington’s disease next in focus.</p></div>'+
   prd()+
  '</div></section>'+
  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical development</span><h2 class="d2 split">From first dose <em>to Phase 2.</em></h2></div><p data-r>T3D-959 has completed Phase 1, an exploratory Phase 2a in Alzheimer’s patients and the placebo-controlled Phase 2 PIONEER study, with support from the National Institute on Aging and the Alzheimer’s Association.</p></div>'+
   rd()+pils()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers <em>and Alzheimer’s scientists.</em></h2></div><p data-r>Decades in drug development at GlaxoSmithKline, Genentech and Duke University Medical Center, guided by leading Alzheimer’s researchers.</p></div>'+
   '<div class="tm-wrap"><div class="tm-side"><p>Our CEO, Dr. John Didsbury, serves as a study section reviewer and committee chair for NIA/NIH Alzheimer’s clinical trial grants. Our Chief Medical Officer, Dr. Warren Strittmatter, is a former Chief of Neurology at Duke.</p><a class="btn" href="#contact" data-to="contact">Get in touch '+ARR+'</a></div><div class="tm-list">'+team()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="news" data-theme="light" style="padding-top:0"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">News <em>and events.</em></h2></div><p data-r>Clinical results, conferences, grants and financing.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For investors, partners, clinicians and researchers</span>'+
   '<h2 class="big split">A new way to treat <em>Alzheimer’s.</em></h2>'+
   '<p class="sub" data-r>Talk to us about T3D-959, the PIONEER results, or partnering on the next stage of development.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#clinical" data-to="clinical">See the clinical data</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>68 T.W. Alexander Drive</span><br><span>Research Triangle Park, NC 27709</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+19192374897">919-237-4897</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>68 T.W. Alexander Drive<br>PO Box 13628<br>Research Triangle Park, NC 27709</div>'+
   '<div class="c"><span class="lab">Lead candidate</span>T3D-959<br>PPARδ / PPARγ agonist</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Science</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#clinical" data-to="clinical">Clinical</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19192374897">919-237-4897</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:700;font-size:40px;letter-spacing:.02em">T3D Therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 T3D Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"T3D Therapeutics — T3D-959 for Alzheimer’s disease",x:"Home"}}
'''

R["field"] = (HERE / "t3dtherapeutics.field.js").read_text()
R["story"] = (HERE / "t3dtherapeutics.story.js").read_text()


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
(HERE / "t3dtherapeutics.src.html").write_text(out)
print("wrote", HERE / "t3dtherapeutics.src.html", len(out))
