#!/usr/bin/env python3
"""Assemble zetroz.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/zetroz.assemble.py && node build.js src/zetroz.src.html ../zetroz/index.html
Facts: _kit/dossiers/zetroz.md. Palette: the live zetroz.com logo (blue #0979BF, black), the sam® lime #C4D900 used sparingly.
Hero and story: ZetrOZ's own sam® 3.0 launch photography (zetroz.com/wp-content/uploads/2026/07/)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}
LOGO = (HERE / "zetroz.logo.svgfrag").read_text().strip()
VB = "24 15 560 145"

R["meta"] = r'''<title>ZetrOZ Systems — Sustained acoustic medicine</title>
<meta name="description" content="ZetrOZ Systems, Trumbull, Connecticut: the inventors of sustained acoustic medicine and sam®, the FDA-cleared wearable that delivers low-intensity ultrasound for hours to accelerate soft-tissue healing and relieve musculoskeletal pain.">
<meta name="theme-color" content="#08121b">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230979bf'/%3E%3Cellipse cx='32' cy='32' rx='19' ry='17' fill='none' stroke='%23fff' stroke-width='7'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Montserrat:300,400,500; Source Sans 3:400,500; JetBrains Mono:400*/"

R["root"] = r''':root{
  --ink:#08121b;--inkr:8,18,27;--boner:243,246,248;--accr:9,121,191;--ink2:#08121b;--ink3:#0e1c28;--deep:#050b11;
  --bone:#f3f6f8;--bone2:#e6ecf0;--bone3:#d3dce3;
  --stone:#a3b0bb;--stoneD:#4d5b66;
  --acc:#0979bf;--accL:#4aa8ea;--accD:#076aa8;--lime:#c4d900;
  --hair:rgba(243,246,248,.14);--hairD:rgba(8,18,27,.16);
  --disp:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Montserrat',system-ui,sans-serif;
  --sans:'Source Sans 3',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'JetBrains Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#08121b,#08121b)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.zlogo{height:32px;width:auto;flex:none;display:block}
.brand svg.zlogo .zb{fill:#2a8fd6}
.brand svg.zlogo .zk{fill:currentColor}
.light-hdr .brand{color:#000}
.light-hdr .brand svg.zlogo .zb{fill:#0979bf}
@media (max-width:560px){.brand svg.zlogo{height:27px}}'''

STORYCSS = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#93a2ae;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5f6f7c;transition:background .35s,border-color .35s}
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
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:var(--accL)}
'''

ADD = r'''/* ===== ZetrOZ additions ===== */
html body .fieldbg{background:#08121b}
html body .rail span{color:#93a2ae}html body .rail span.on{color:var(--bone)}html body .rail span::before{background:var(--ink2);border-color:#5f6f7c}html body .rail span.done::before,html body .rail span.on::before{background:var(--accL);border-color:var(--accL)}
html body .scene text.zcap{fill:var(--accL)}
html body .light+.cta{border-top:1px solid rgba(8,18,27,.12)}
@media (max-width:860px){html body #field{-webkit-mask-image:none;mask-image:none}}
#pre{background:#f3f6f8}
#pre .zpm{display:block;width:auto;height:clamp(64px,7.4vw,108px);max-width:calc(100vw - 48px);overflow:visible}
#pre .zpm .zb{fill:#0979bf}
#pre .zpm .zk{fill:#000}
#pre .zps{display:block;font:500 12px/1.4 var(--mono);letter-spacing:.3em;margin-right:-.3em;text-transform:uppercase;color:#1d2a35;white-space:nowrap}
#pre .pl{color:#3d4b57}
#pre .cnt{color:#08121b}
#pre .bar{background:rgba(8,18,27,.16)}
#pre .bar i{background:#0979bf}
html body .ftr{background:var(--ink)}html body .ftr .fcv{display:none}
.hero .hero-h{font-size:clamp(44px,4.6vw,92px);letter-spacing:-.04em;line-height:1.04;font-weight:300;max-width:12ch}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}
 html body .hero{padding-top:calc(52svh + 22px)!important}
 html body .hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 44%,rgba(var(--inkr),.75) 58%,rgba(var(--inkr),.94) 72%,var(--ink) 100%)}}
.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),.2),rgba(var(--inkr),0) 18%,rgba(var(--inkr),0) 72%,var(--ink) 100%)}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.035em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em,.hero .hero-h em{font-weight:500;font-style:normal!important;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em,.cta .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:#fff;border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(50px,5vw,92px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL);font-size:.32em;letter-spacing:0;margin-left:.2em}
.stat p.k{margin:0}
/* technology rows */
.zt{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:clamp(32px,4vw,72px)}
.zt-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);column-gap:var(--gap);align-items:baseline;padding:20px 0 22px;border-top:1px solid var(--hairD);position:relative}
.zt-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.zt-row:hover::after{transform:scaleX(1)}
.zt-row h3{font-family:var(--disp);font-weight:400;font-size:clamp(21px,1.75vw,29px);line-height:1.12;letter-spacing:-.02em;margin:0}
.zt-row .nm3{display:block;margin-top:8px;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD)}
.zt-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:44ch}
@media (max-width:1024px){.zt{grid-template-columns:1fr}}
@media (max-width:560px){.zt-row{grid-template-columns:1fr;row-gap:10px}}
.zce{display:flex;flex-wrap:wrap;gap:10px 28px;align-items:center;margin-top:clamp(40px,4vw,64px);padding-top:18px;border-top:1px solid var(--hairD)}
.zce .tag{display:inline-block;font:500 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--accD);padding:6px 8px 5px}
.zce .lab{color:var(--stoneD)}
.zce a.lab{color:var(--ink)}
/* sam 3.0 features */
.zf{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(36px,3vw,48px) var(--gap);margin-top:clamp(64px,7vw,110px)}
.zf-c{border-top:1px solid var(--hairD);padding-top:22px;position:relative}
.zf-c::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.zf-c:hover::before{transform:scaleX(1)}
.zf-c .lab{display:block;margin-bottom:14px;color:var(--accD)}
.zf-c h3{font-family:var(--disp);font-weight:400;font-size:clamp(21px,1.7vw,28px);line-height:1.14;letter-spacing:-.02em;margin:0 0 12px}
.zf-c p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:38ch}
.zf-h{grid-column:1/-1;display:flex;align-items:baseline;gap:18px;flex-wrap:wrap}
.zf-h .lab{color:var(--accD)}
.zf-h h3{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.6vw,44px);letter-spacing:-.03em;margin:0}
@media (max-width:900px){.zf{grid-template-columns:1fr;row-gap:32px}}
/* research rows */
.rd{list-style:none;margin:0;padding:0}
.rd-row{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,4fr) minmax(0,4.2fr) minmax(0,2.2fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.rd-row:last-child{border-bottom:1px solid var(--hair)}
.rd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.rd-row:hover::after{transform:scaleX(1)}
.rd-row .yr{font:400 11px/1.6 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.rd-row h3{font-family:var(--disp);font-weight:400;font-size:clamp(20px,1.7vw,27px);line-height:1.15;letter-spacing:-.015em;margin:0}
.rd-row .nm3{display:block;margin-top:8px;font:400 13px/1.5 var(--sans);letter-spacing:0;color:var(--stone)}
.rd-row p{margin:0;color:var(--stone);font-size:15.5px;line-height:1.6}
.rd-row .meta{display:flex;flex-direction:column;gap:8px;align-items:flex-start}
.rd-row .meta a{color:var(--bone)}
.rd-row .tag{display:inline-block;font:500 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--acc);padding:6px 8px 5px}
@media (max-width:1100px){.rd-row{grid-template-columns:minmax(0,1fr) minmax(0,3fr);row-gap:12px}.rd-row p{grid-column:2}.rd-row .meta{grid-column:2;flex-direction:row;flex-wrap:wrap;gap:8px 20px}}
@media (max-width:620px){.rd-row{grid-template-columns:1fr}.rd-row p,.rd-row .meta,.rd-row .rdh{grid-column:1}}
.sup{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px)}
.sup div{border-top:1px solid var(--hair);padding-top:16px}
.sup .lab{display:block;margin-bottom:10px;color:var(--accL)}
.sup p{margin:0;color:var(--stone);font-size:15.5px;max-width:36ch}
@media (max-width:900px){.sup{grid-template-columns:1fr;row-gap:28px}}
/* team: refined text-only */
.tmg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
.tm-p{border-top:1px solid var(--hairD);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:400;font-size:clamp(26px,2.3vw,38px);line-height:1.06;letter-spacing:-.025em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD);margin-bottom:18px}
.tm-p p{color:var(--stoneD);font-size:16px;line-height:1.6;margin:0;max-width:40ch}
@media (max-width:1024px){.tmg{grid-template-columns:1fr;row-gap:36px}}
/* news rows */
.nw{list-style:none;margin:0;padding:0}
.nw-row{position:relative;border-top:1px solid var(--hair)}
.nw-row:last-child{border-bottom:1px solid var(--hair)}
.nw-row a{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,7fr) minmax(0,2fr);column-gap:var(--gap);align-items:baseline;padding:22px 0 24px;color:var(--bone)}
.nw-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.nw-row:hover::after{transform:scaleX(1)}
.nw-row .yr{font:400 11px/1.6 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.nw-row h3{font-family:var(--disp);font-weight:400;font-size:clamp(19px,1.55vw,25px);line-height:1.25;letter-spacing:-.01em;margin:0;transition:color .3s var(--eo)}
.nw-row:hover h3{color:var(--accL)}
.nw-row .src{justify-self:end;font:400 11px/1.6 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--stone);display:flex;gap:10px;align-items:center;transition:transform .35s var(--eo)}
.nw-row:hover .src{transform:translateX(6px)}
@media (max-width:760px){.nw-row a{grid-template-columns:1fr;row-gap:8px}.nw-row .src{justify-self:start}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:400;font-size:clamp(18px,1.4vw,23px);line-height:1.4;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''
R["scenecss"] = STORYCSS + ADD

R["seen"] = r'''<script>try{if(sessionStorage.getItem("zetroz-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="zpm" viewBox="''' + VB + '''" aria-hidden="true">''' + LOGO + r'''</svg>
    <span class="zps">Systems</span>
  </div>
  <span class="lab pl">Sustained acoustic medicine · Trumbull, Connecticut</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="ZetrOZ Systems, home"><svg class="zlogo" viewBox="' + VB + '" aria-hidden="true">' + LOGO + '</svg></a>'

NAV = [("story", "Technology"), ("sam", "sam® 3.0"), ("research", "Research"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Headquarters</span><br>56 Quarry Road, Trumbull, CT</div>
    <div><span class="lab">Email</span><br>info@zetroz.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">ZetrOZ Systems</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="ZetrOZ Systems";\nvar PK="zetroz";'

R["content"] = r'''var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','400 1em "Source Sans 3"','500 1em "Source Sans 3"','400 1em "JetBrains Mono"'];
var MAIL="info@zetroz.com";
var RP="https://reporter.nih.gov/project-details/";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];var NEWS=[];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function tech(){var A=[
  ["Long duration","Low intensity","Where traditional therapeutic ultrasound comes in short, high-intensity bursts from large systems, sam® delivers low-intensity ultrasound for hours."],
  ["OZ Inside™","Miniaturised ultrasound","ZetrOZ’s patented ultra-low impedance technology streamlines the system architecture and electro-acoustic signal conduction, so the therapy fits in a wearable."],
  ["Mechanobiology","Accelerated healing","Clinically proven long-duration ultrasound for tendon, muscle and joint injuries; beyond pain relief, it accelerates the body’s natural healing process."],
  ["Drug free","Non-invasive","Shown to give symptomatic relief of knee osteoarthritis pain and back pain from herniated discs, without medication or surgery."],
  ["Covered care","Insurance","The research has supported insurance coverage of sam® for arthritis pain of the knee, hip, shoulder and elbow."],
  ["Made in the USA","cGMP · ISO 13485","Designed and manufactured in the United States, under cGMP and ISO 13485 certification."]];
  return '<ul class="zt">'+A.map(function(a){return '<li class="zt-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p></li>'}).join("")+'</ul>'}
function feats(){var F=[
  ["Longer battery life","Up to 8 hours of continuous therapy, designed to keep up with a recovery routine."],
  ["Faster charging","Less time waiting and more time recovering."],
  ["No buzzing between sessions","A quieter experience, designed for uninterrupted daily wear."],
  ["LED light indicators","Simple visual feedback keeps therapy sessions easy to monitor at a glance."],
  ["Auto-adapting applicators","Flexible applicators for a more comfortable fit across different treatment areas."],
  ["Wear it under clothing","A low-profile design, so recovery fits into everyday life."]];
  return '<div class="zf"><div class="zf-h"><span class="lab">The next evolution in recovery</span><h3>sam® 3.0</h3></div>'+F.map(function(f){return '<div class="zf-c"><h3>'+esc(f[0])+'</h3><p>'+esc(f[1])+'</p></div>'}).join("")+'</div>'}
function rd(){var A=[
  ["2024–2027","NIH · NIA","Daily and localized NSAID sonophoresis for symptomatic treatment of knee osteoarthritis","SBIR Phase II, continuing the NIA programme that began in 2018, led by Dr. George K. Lewis.","R44AG061985","11390466"],
  ["2020–2026","NIH · NIMHD","Clinical optimization of ultrasonic drug delivery technologies","For underserved minority and US veteran populations; an NIMHD SBIR programme from Phase I to Phase II.","R44MD015912","11051818"],
  ["Phase II","US Army · USAMMA","Accelerated healing of soft-tissue injuries","With the University of Miami. Phase I showed sam® accelerating soft-tissue healing by over 50% against standard of care.","Department of Defense",""],
  ["Earlier","NASA · NSBRI · NSF","Foundations of wearable ultrasound","Research supported by the National Space Biomedical Research Institute, the National Science Foundation, CIMIT and Connecticut Innovations.","Federal and state funding",""]];
  return '<ul class="rd">'+A.map(function(a){var lk=a[5]?'<a class="lab ul" href="'+RP+a[5]+'" target="_blank" rel="noopener">NIH RePORTER ↗</a>':'';return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><div class="rdh"><h3>'+esc(a[2])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[3])+'</p><div class="meta"><span class="lab">'+esc(a[4])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function news(){var N=[
  ["Apr 2026","sam® 3.0 Multi-Hour Continuous Ultrasound Device cleared by the FDA, 510(k) K260076","FDA","https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K260076"],
  ["Feb 2026","ZetrOZ Systems brings wearable ultrasound technology to pro baseball’s spring training","Accessnewswire","https://www.accessnewswire.com/newsroom/en/healthcare-and-pharmaceutical/zetroz-systems-brings-wearable-ultrasound-technology-to-pro-baseballs-1136024"],
  ["2025","sam® wearable ultrasound device helps U.S. Army veteran Noah Galloway","Accessnewswire","https://www.accessnewswire.com/newsroom/en/healthcare-and-pharmaceutical/sam-wearable-ultrasound-device-helps-u.s.-army-veteran-noah-galloway-1097800"],
  ["2025","U.S. Olympic athlete Ashley Hoffman becomes sam® brand ambassador for active living with knee osteoarthritis","Accessnewswire","https://www.accessnewswire.com/newsroom/en/healthcare-and-pharmaceutical/u.s.-olympic-athlete-ashley-hoffman-becomes-sam-brand-ambassador-for-1088521"],
  ["2025","sam® 2.0 receives the Arthritis Foundation’s Ease of Use® Certification","Accessnewswire","https://www.accessnewswire.com/newsroom/en/healthcare-and-pharmaceutical/zetroz-systems-samr-2.0-wearable-ultrasound-device-receives-arthritis-1042078"]];
  return '<ul class="nw">'+N.map(function(n){return '<li class="nw-row"><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="yr">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="src">'+esc(n[2])+' ↗</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Sustained acoustic medicine · Trumbull, Connecticut</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Ultrasound</span><span class="l">you wear,</span><span class="l"><em>for hours.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ZetrOZ Systems invented sam®, the FDA-cleared wearable that delivers low-intensity ultrasound for hours a day to accelerate soft-tissue healing and relieve musculoskeletal pain, without drugs or surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How sam® works '+ARR+'</a><a class="btn" href="#contact" data-to="contact">Contact ZetrOZ</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Healing technologies since 2006</span>'+
   '<p class="txt" id="mani">Therapeutic ultrasound used to mean short, high-intensity bursts in a clinic. ZetrOZ made it <em>low-intensity, long-duration and wearable.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">48</span><p class="k">Patents protecting sustained acoustic medicine, in the US and internationally</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20</span><p class="k">Level 1–5 clinical studies on sustained acoustic medicine</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8<sup>hours</sup></span><p class="k">Of continuous therapy from sam® 3.0 on a single charge</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Sustained acoustic medicine</span><h2 class="d3">Therapy that goes <em>where you go.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Apply</span><span>Wear</span><span>Heal</span><span>sam® 3.0</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Applied over the injury.</h2><p>A small ultrasound applicator sits on a coupling patch over the tendon, muscle or joint being treated: knee, shoulder, elbow, back or neck.</p></article>'+
     '<article class="step"><h2>Worn through the day.</h2><p>The controller clips to a waistband and runs the therapy for hours, during daily activities, at home, at work or in training.</p></article>'+
     '<article class="step"><h2>Low intensity, long duration.</h2><p>Sustained acoustic medicine stimulates the body’s natural repair process, accelerating soft-tissue healing and relieving pain, including back pain from herniated discs.</p></article>'+
     '<article class="step"><h2>The next evolution.</h2><p>sam® 3.0, cleared by the FDA in April 2026, brings longer battery life, faster charging, quieter wear and auto-adapting applicators.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="sam" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>sam® · OZ Inside™</span><h2 class="d2 split">The only FDA-cleared <em>multi-hour ultrasound.</em></h2></div><p data-r>ZetrOZ is the exclusive developer and manufacturer of the sam® product line, wearable, drug-free devices for acute and chronic musculoskeletal conditions, used from pro sports to the Department of Veterans Affairs.</p></div>'+
   tech()+
   '<div class="zce"><span class="tag">FDA cleared</span><a class="lab ul" href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K260076" target="_blank" rel="noopener">510(k) K260076 · sam® 3.0 ↗</a><span class="lab">Arthritis Foundation Ease of Use®</span><span class="lab">Medical Design Excellence Award</span></div>'+
   feats()+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research · Federally funded</span><h2 class="d2 split">Built on <em>federal science.</em></h2></div><p data-r>With funding from the National Institutes of Health, the National Science Foundation, the Department of Defense and NASA, ZetrOZ has shown that daily sustained acoustic medicine accelerates soft-tissue healing and relieves knee and back pain.</p></div>'+
   rd()+
   '<div class="sup"><div><span class="lab">42 publications</span><p>Peer-reviewed basic science, engineering and clinical publications on sustained acoustic medicine.</p></div>'+
    '<div><span class="lab">OA Action Alliance</span><p>A member of the national coalition led by the Arthritis Foundation and the CDC.</p></div>'+
    '<div><span class="lab">Patents · PCT</span><p>International protection in Europe, China, India and Brazil through the Patent Cooperation Treaty.</p></div></div>'+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The inventors of <em>sustained acoustic medicine.</em></h2></div><p data-r>A Trumbull, Connecticut team with four manufacturing facilities in the United States, and a focus on helping 100 million patients.</p></div>'+
   '<div class="tmg">'+
    '<div class="tm-p"><h3>George K. Lewis, PhD</h3><span class="cr">President &amp; CEO</span><p>A Presidential Life Science Fellow and National Science Foundation Fellow, with more than 50 peer-reviewed publications and over 60 global patents filed. Biomedical engineering at the University of Miami; doctorate from Cornell University.</p></div>'+
    '<div class="tm-p"><h3>Sabrina Lewis, MS</h3><span class="cr">Director of Regulatory Affairs</span><p>A certified quality and regulatory specialist with 25 years in healthcare. She oversees regulatory filings globally and maintains the cGMP and ISO 13485 certifications.</p></div>'+
    '<div class="tm-p"><h3>Robert Butler, MBA</h3><span class="cr">Controller</span><p>A 25-year veteran of global medical device financial operations, overseeing the financial systems for the sam® family of ultrasound products. MBA from Rensselaer Polytechnic Institute.</p></div>'+
   '</div>'+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the clinic <em>to the dugout.</em></h2></div><p data-r>Clearances, partnerships and the athletes, veterans and patients who wear sam®.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For clinicians, athletic trainers and research partners</span>'+
   '<h2 class="big split">Talk to the team behind <em>sam®.</em></h2>'+
   '<p class="sub" data-r>Questions about sustained acoustic medicine, clinical research, partnerships or access to sam® for your patients or athletes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#sam" data-to="sam">See sam® 3.0</a></div>'+
   '<div class="ctc2"><div><span class="lab">Global headquarters</span><p><span>ZetrOZ Systems</span><br><span>56 Quarry Road</span><br><span>Trumbull, CT 06611</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Telephone</span><p><a class="ul" href="tel:+18882029831">(888) 202-9831</a><br><span>Mon–Fri 8:30–5:30 EST</span></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>56 Quarry Road<br>Trumbull, CT 06611</div>'+
   '<div class="c"><span class="lab">sam®</span>Sustained acoustic medicine<br>FDA 510(k) K260076</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#sam" data-to="sam">sam® 3.0</a><br><a class="ul" href="#research" data-to="research">Research</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18882029831">(888) 202-9831</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 620 44" aria-hidden="true"><text x="310" y="36" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:400;font-size:44px;letter-spacing:.08em">ZETROZ</text></svg>'+
  '<div class="legal"><span class="lab">© 2006–2026 ZetrOZ Systems</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"ZetrOZ Systems — Sustained acoustic medicine",x:"Home"}}'''

R["field"] = (HERE / "zetroz.field.js").read_text()
R["story"] = (HERE / "zetroz.story.js").read_text()

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
NSS = (HERE.parent / "lib" / "nssfix.js").read_text()
out = out.replace("</body>", NSS.strip() + "\n</body>", 1)
(HERE / "zetroz.src.html").write_text(out)
print("wrote", HERE / "zetroz.src.html", len(out))
