#!/usr/bin/env python3
"""Assemble informai.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/informai.assemble.py && node build.js src/informai.src.html ../informai/index.html
Facts: _kit/dossiers/informai.md. Palette: the live informai.com (header navy #02021f/#000033, page #0c0f1a, button and
lede periwinkle #8b9cf6/#7f86d8, white serif wordmark with a white swoosh)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>InformAI — AI for radiation oncology and transplantation</title>
<meta name="description" content="InformAI builds fit-to-purpose clinical AI software: RadOncAI, FDA 510(k)-cleared AI dose planning for head and neck radiation therapy, and TransplantAI, SinusAI and VoluQuant in development. Houston, Texas Medical Center.">
<meta name="theme-color" content="#080b22">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23080b22'/%3E%3Cpath d='M30 12A20 20 0 1 1 30 52' fill='none' stroke='%238b9cf6' stroke-width='6'/%3E%3Cpath d='M10 24H40M10 32H44M10 40H40' stroke='%23fff' stroke-width='4'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Poppins:300,400; Open Sans:400,600; DM Mono:400; Libre Caslon Text:400*/"

R["root"] = r''':root{
  --ink:#080b22;--inkr:8,11,34;--boner:244,245,251;--accr:139,156,246;--ink2:#0b0f2a;--ink3:#121736;--deep:#05071a;
  --bone:#f4f5fb;--bone2:#e9ebf6;--bone3:#d8dcee;
  --stone:#a9aecb;--stoneD:#4e5372;
  --acc:#5b6be0;--accL:#9aa8fb;--accD:#4252c8;
  --hair:rgba(244,245,251,.14);--hairD:rgba(8,11,34,.16);
  --disp:'Poppins',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Poppins',system-ui,sans-serif;
  --sans:'Open Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'DM Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#080b22,#080b22)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}
@media (max-width:860px){.fieldbg{background:#080b22}
  html .hero{padding-top:calc(40svh + 8px)!important}
  html #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 36px),transparent calc(40svh + 4px));mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 36px),transparent calc(40svh + 4px))}}'''

# the mark: InformAI's swoosh (redrawn from the logo on informai.com: an open ring to the right with speed lines running into it)
MARK = '<path class="im-a" d="M17 3.5A11.5 11.5 0 1 1 13 25.5"/><path class="im-b" d="M1 9.5H22M3 14H25M1 18.5H22"/>'

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.im{width:34px;height:30px;flex:none;overflow:visible}
.brand .im-a{fill:none;stroke:var(--accL);stroke-width:3.2;stroke-linecap:round}
.brand .im-b{fill:none;stroke:var(--bone);stroke-width:2.6;stroke-linecap:round}
.brand .bt{font:400 23px/1 'Libre Caslon Text',Georgia,serif;letter-spacing:.005em;white-space:nowrap}'''

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
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9d1db;paint-order:stroke;stroke:#0f1b2c;stroke-width:5px;stroke-linejoin:round}
.scene text.cap{fill:var(--accL)}
.scene svg *{vector-effect:none}
.scene .ig{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .ie{fill:none;stroke:rgba(var(--boner),.14);stroke-width:1}
.scene .ib{fill:rgba(var(--accr),.04);stroke:var(--bone);stroke-width:1.5}
.scene .ia{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.1}
.scene .iair{fill:var(--ink2);stroke:rgba(var(--boner),.62);stroke-width:1.1}
.scene .icord{fill:rgba(255,214,120,.1);stroke:#ffd27a;stroke-width:1.4}
.scene .ipar{fill:rgba(126,214,180,.08);stroke:#7ed6b4;stroke-width:1.3}
.scene .itg{fill:rgba(240,128,128,.14);stroke:#ff8f86;stroke-width:1.8}
.scene .iso{fill:none;stroke-width:1.5}
.scene .iso.i0{stroke:#7f8ff4}.scene .iso.i1{stroke:#b59cf2}.scene .iso.i2{stroke:#f3a07e}.scene .iso.i3{stroke:#ffd27a}
.scene .icl{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1}
.scene .ibm{fill:rgba(var(--accr),.07);stroke:rgba(var(--accr),.45);stroke-width:1}
.scene .ihd{fill:var(--ink2);stroke:var(--accL);stroke-width:1.2}
.scene .iarc{fill:none;stroke:var(--accL);stroke-width:1.4;stroke-dasharray:4 6}
.scene .idb{fill:rgba(11,15,42,.92);stroke:rgba(var(--boner),.22);stroke-width:1}
.scene .iax{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .idv{fill:none;stroke-width:1.6}
.scene .idv.d0{stroke:#ff8f86}.scene .idv.d1{stroke:#7ed6b4}.scene .idv.d2{stroke:#ffd27a}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9cde3;paint-order:stroke;stroke:#0b0f2a;stroke-width:5px;stroke-linejoin:round}
.scene text.ia2{fill:var(--accL)}
.scene text.cap{fill:var(--accL)}
/* ===== InformAI additions ===== */
.ftr .fcv{opacity:.3}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,4.7vw,96px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:12.5ch}
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
.tg li.ld .tn{font-size:clamp(24px,2vw,32px)}
.tg li.ld .tr{color:var(--accD)}
@media (max-width:1024px){.tg{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:700px){.tg{grid-template-columns:repeat(2,minmax(0,1fr))}}
.tm-wrap{display:grid;grid-template-columns:minmax(0,3.6fr) minmax(0,8.4fr);gap:clamp(32px,5vw,96px);align-items:start}
.tm-wrap .tm-side .btn{margin-top:6px}
@media (max-width:1024px){.tm-wrap{grid-template-columns:1fr}}
.disc{margin:28px 0 0;font:400 11px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--stoneD)}
'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("informai-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M56 14A34 34 0 1 1 44 80M10 34H70M16 48H76M10 62H70"/></svg>
    <div class="wm"><span>INFORMAI</span></div>
  </div>
  <span class="lab pl">Clinical AI · Texas Medical Center, Houston</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="InformAI, home"><svg class="im" viewBox="0 0 30 30" aria-hidden="true">' + MARK + '</svg><span class="bt">InformAI</span></a>'

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
    <div><span class="lab">Office</span><br>TMC Innovation, Houston</div>
    <div><span class="lab">Email</span><br>info@informai.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">InformAI</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="InformAI";\nvar PK="informai";'

R["content"] = r'''var FONTS=['300 1em "Poppins"','400 1em "Poppins"','400 1em "Open Sans"','600 1em "Open Sans"','400 1em "DM Mono"','400 1em "Libre Caslon Text"'];
var MAIL="info@informai.com";
var RP="https://reporter.nih.gov/project-details/";
var IP="https://www.informai.com/post/";
var SECS={technology:"story",products:"products",research:"research",team:"team",news:"news",contact:"contact"};
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-10-06",s:"CPRIT Innovations VII",t:"InformAI chosen as panelist for The Role of AI in Science",u:IP+"informai-chosen-as-panelist-for-cprit-innovations-vii"},
 {d:"2026-08-15",s:"Annals of Surgery Open",t:"XGBoost outperforms traditional transplant regulatory models based on regression",u:"https://doi.org/10.1097/AS9.0000000000000698"},
 {d:"2026-07-15",s:"Press release",t:"FDA 510(k) clearance for RadOncAI radiation therapy dose planning software",u:IP+"informai-receives-fda-510-k-clearance-for-radoncai-radiation-therapy-dose-planning-software"},
 {d:"2025-10-01",s:"CPRIT",t:"Supplemental CPRIT grant for RadOncAI product commercialization",u:IP+"informai-receives-supplemental-cprit-grant-for-product-commercialization"},
 {d:"2024-02-13",s:"NIH · NHLBI",t:"Phase 2 work begins on the NIH Fast-Track grant for TransplantAI",u:IP+"informai-inc-begins-phase-2-work-on-nih-grant-for-innovative-ai-solution-transplantai"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function prd(){var A=[
  ["RadOncAI","Radiation oncology · part of the RadDose platform","AI-driven radiation therapy: an optimized dose plan for head and neck cancer that targets the tumour while minimizing exposure to the healthy tissue next to it. A clinician co-pilot that brings expert-level planning to every care setting.",["FDA 510(k) cleared, 2026","700+ treatment plans delivered","Funded by CPRIT"],"Cleared"],
  ["TransplantAI","Solid organ transplantation","A donor–recipient informatics platform for nuanced transplant decisions at the point of care. It merges donor and recipient data in real time and gives predictive insight on matching and outcomes, for the hundreds of organ offers each centre reviews every week.",["Funded by NIH and NSF","Multi-outcome risk"],"In development"],
  ["SinusAI","ENT and radiology","AI-assisted detection of sinus disease on CT, with clinician-level accuracy, to speed up ENT and radiology workflows across 11 million annual ENT office visits and 700,000 sinus surgeries in the US.",["AuntMinnie Best of Radiology finalist"],"In development"],
  ["VoluQuant","Organ volumetrics","Automated segmentation, labelling, 3D visualization and per-organ volume measurement of the liver, kidneys, lungs and heart from CT images.",["Funded by NIH"],"In development"]];
  return '<ul class="prd prd-grid">'+A.map(function(a){return '<li class="prd-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta"><span class="tag">'+esc(a[4])+'</span>'+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'+
  '<p class="disc">Products in development are not intended to diagnose, treat, cure or prevent any disease.</p>'}
function rd(){var A=[
  ["2024–","AI tool to optimize organ transplantation outcome","SBIR Fast-Track (Phase I/II) for TransplantAI, addressing organ scarcity, discard and allocation inefficiency. Now in its third year, with a $992,164 award in 2026.",["NIH · NHLBI · R44HL172564","11419808"],"Active"],
  ["2022–","RadOncAI: AI-guided dose prediction","Product development grant DP220063 from the Cancer Prevention and Research Institute of Texas, and a supplemental $465,188 grant in 2025 for commercialization.",["CPRIT · DP220063",""],"Active"],
  ["2026","XGBoost against transplant regulatory models","Pettit, Cione, Marlatt, Uzgoren, Shetty, Henry, Havelka, Goss and Rana. Annals of Surgery Open 7(3), e698.",["Publication","doi"],""],
  ["2020–2021","Transplant-AI, STTR Phase I","AI that predicts 1- and 3-year survival after liver and kidney transplantation and 90-day waitlist mortality, outperforming the models in use.",["NSF · STTR Phase I · 2014827","nsf"],""]];
  return '<ul class="rd">'+A.map(function(a){var u=a[3][1]==="doi"?"https://doi.org/10.1097/AS9.0000000000000698":a[3][1]==="nsf"?"https://www.nsf.gov/awardsearch/showAward?AWD_ID=2014827":a[3][1]?RP+a[3][1]:"";
    var lk=u?'<a class="lab ul" href="'+u+'" target="_blank" rel="noopener">'+(a[3][1]==="doi"?"Read the paper ↗":a[3][1]==="nsf"?"NSF award ↗":"NIH RePORTER ↗")+'</a>':'';
    return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">'+a[4]+'</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function pils(){var C=[
  ["We design","Fit-to-purpose AI software for targeted clinical pain points.",'<circle cx="28" cy="28" r="22"/><circle class="a" cx="28" cy="28" r="8"/><path d="M28 2v10M28 44v10M2 28h10M44 28h10"/>'],
  ["We develop","Enterprise-grade, seamless and scalable AI products.",'<rect x="8" y="8" width="40" height="40"/><path class="a" d="M8 20H48M8 32H48M20 8V48"/>'],
  ["We unlock","Value directly through existing reimbursement frameworks.",'<path d="M8 44L22 30L32 38L48 14"/><path class="a" d="M38 14H48V24"/>'],
  ["We partner","With elite medical institutions, and deploy directly with channel partners.",'<circle cx="20" cy="28" r="14"/><circle class="a" cx="36" cy="28" r="14"/>']];
  return '<div class="pils">'+C.map(function(c,i){return '<div class="pil"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function team(){var T=[["Jim Havelka, MBA","CEO and Founder",1],["Anil Shetty, MD","Chief Innovation Officer",1],["Jack Barker, MBA","CFO",1],["Kyle Myers, PhD","Regulatory Advisor"],
  ["K. Elizabeth Hawk, MD, PhD, MBA","Radiology Lead"],["Abbas Rana, MD, FACS","Transplant Lead"],["Moshe Ephrat, MD","ENT Lead"],["Jeff Hopkins","ENT Advisor"],
  ["Jackie Coleman","Regulatory Lead"],["Jim Parker, MBA","Payers Lead"],["Mark Kaye, MBA","Product Advisor"],["John Martin, MD","Product Advisor"],
  ["Britton Marlatt, MSc, MBA","Senior Data Scientist"],["Selim Uzgoren","Product Engineer"]];
  return '<ul class="tg">'+T.map(function(t){return '<li'+(t[2]?' class="ld"':'')+'><span class="tn">'+esc(t[0])+'</span><span class="tr">'+esc(t[1])+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical AI · Texas Medical Center, Houston<span class="nomob"> · FDA 510(k)</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Clinical AI,</span><span class="l">fit to</span><span class="l"><em>purpose.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>InformAI builds AI software for specific clinical needs. RadOncAI, our FDA-cleared radiation dose planning software, brings expert-level head and neck plans in minutes, not hours.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How RadOncAI plans '+ARR+'</a><a class="btn" href="#products" data-to="products">Our products</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our story</span>'+
   '<p class="txt" id="mani">We believe AI can bring a paradigm shift to clinical workflows. So we build fit-to-purpose AI that drives <em>scaled, clinical impact</em> and unlocks real economic value.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">700+</span><p class="k">Radiation treatment plans delivered with RadOncAI</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">900+</span><p class="k">Patients in the clinical research cohort behind its clearance</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">AI products, for radiation oncology, transplantation, ENT and radiology</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · RadOncAI</span><h2 class="d3">An expert plan, <em>in minutes.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Anatomy</span><span>Dose</span><span>Plan</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start from the planning CT.</h2><p>Head and neck radiation is planned on the patient’s own CT: the tumour target, and right beside it the healthy structures to protect, such as the spinal cord and the salivary glands.</p></article>'+
     '<article class="step"><h2>AI predicts the dose.</h2><p>RadOncAI optimizes the key step of dose planning. Trained and tested on a cohort of more than 900 patients, it generates a dose distribution that covers the target and holds back from the tissue around it.</p></article>'+
     '<article class="step"><h2>Shaped for IMRT and VMAT.</h2><p>The result is an optimized radiation plan for modern IMRT and VMAT protocols: consistent, expert-level quality wherever the patient is treated, with lower off-target radiation and fewer complications.</p></article>'+
     '<article class="step"><h2>The clinician stays in charge.</h2><p>RadOncAI is a clinician co-pilot. Radiation oncologists review and finalize a quality plan in minutes rather than hours. More than 700 treatment plans have been delivered to date.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">AI for critical <em>clinical fields.</em></h2></div><p data-r>Enterprise software for radiation oncology, transplantation, radiology and ENT: our flagship RadOncAI, and TransplantAI, SinusAI and VoluQuant in our development pipeline.</p></div>'+
   prd()+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research · funding</span><h2 class="d2 split">Built with clinicians, <em>backed by research.</em></h2></div><p data-r>InformAI works with renowned healthcare organizations, national physician groups and leading imaging companies, with support from the NIH, NSF and the Cancer Prevention and Research Institute of Texas.</p></div>'+
   rd()+pils()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Medicine, regulation <em>and industry.</em></h2></div><p data-r>A highly experienced, seasoned leadership team, blending medical, regulatory and industry expertise, with clinical leads in radiology, transplantation and ENT.</p></div>'+
   '<div class="tm-wrap"><div class="tm-side"><p>InformAI is part of TMCi, the innovation centre of the Texas Medical Center, the world’s largest medical provider, with 10 million patient encounters a year.</p><a class="btn" href="#contact" data-to="contact">Work with us '+ARR+'</a></div>'+team()+'</div>'+
  '</div></section>'+
  '<section class="sec light" id="news" data-theme="light" style="padding-top:0"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">InformAI <em>in the news.</em></h2></div><p data-r>Clearances, grants, publications and conferences.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For radiation oncology teams, transplant centres and partners</span>'+
   '<h2 class="big split">How can InformAI <em>help you?</em></h2>'+
   '<p class="sub" data-r>Tell us about your clinic or your programme, from a RadOncAI evaluation to a research or channel partnership.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#products" data-to="products">See the products</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>TMC Innovation, Texas Medical Center</span><br><span>2450 Holcombe Blvd, Houston, Texas 77021</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+12816707085">281-670-7085</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>TMC Innovation<br>2450 Holcombe Blvd<br>Houston, Texas 77021</div>'+
   '<div class="c"><span class="lab">Products</span>RadOncAI · TransplantAI<br>SinusAI · VoluQuant</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#products" data-to="products">Products</a><br><a class="ul" href="#research" data-to="research">Research</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12816707085">281-670-7085</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Libre Caslon Text\',Georgia,serif;font-weight:400;font-size:44px;letter-spacing:.04em">InformAI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 InformAI, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"InformAI — AI for radiation oncology and transplantation",x:"Home"}}'''

R["field"] = (HERE / "informai.field.js").read_text()
R["story"] = (HERE / "informai.story.js").read_text()


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
(HERE / "informai.src.html").write_text(out)
print("wrote", HERE / "informai.src.html", len(out))
