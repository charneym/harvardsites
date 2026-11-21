#!/usr/bin/env python3
"""Assemble acouflow.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/acouflow.assemble.py && node build.js src/acouflow.src.html ../acouflow/index.html
Facts: _kit/dossiers/acouflow.md. Palette: the live acouflow.com placeholder (Squarespace, Montserrat wordmark over an aerial
photograph of glacial slate-grey braids and ochre-gold silt): slate ink #0d1417, glacial grey, ochre gold #c9a24a."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>AcouFlow Therapeutics — VortexPAP: airway pressure without a sealed mask</title>
<meta name="description" content="AcouFlow Therapeutics is developing VortexPAP, a positive airway pressure therapy for mild to moderate obstructive sleep apnea that uses pulsed vortex airflow to pressurise the airway without a sealed mask. NIH NHLBI STTR Phase I, with the University of Cincinnati.">
<meta name="theme-color" content="#0d1417">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230d1417'/%3E%3Cellipse cx='22' cy='32' rx='7' ry='18' fill='none' stroke='%23c9a24a' stroke-width='4'/%3E%3Cellipse cx='42' cy='32' rx='7' ry='18' fill='none' stroke='%23f1efe9' stroke-width='4'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Montserrat:300,400; Inter Tight:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0d1417;--inkr:13,20,23;--boner:241,239,233;--accr:201,162,74;--ink2:#121b1f;--ink3:#18242a;--deep:#0a1012;
  --bone:#f1efe9;--bone2:#e8e5dd;--bone3:#d9d5cb;
  --stone:#a5b1b3;--stoneD:#52605f;
  --acc:#c9a24a;--accL:#d9b765;--accD:#7f6220;
  --hair:rgba(241,239,233,.14);--hairD:rgba(13,20,23,.16);
  --disp:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Montserrat',system-ui,sans-serif;
  --sans:'Inter Tight',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:#0d1417}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the mark: two vortex rings in a train (AcouFlow has no published logo; the wordmark is set in Montserrat as on acouflow.com)
MARK = '<ellipse class="am-a" cx="9" cy="15" rx="4.6" ry="11.5"/><ellipse class="am-b" cx="21" cy="15" rx="4.6" ry="11.5"/>'

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.am{width:30px;height:30px;flex:none;overflow:visible}
.brand .am-a{fill:none;stroke:var(--acc);stroke-width:2.2}
.brand .am-b{fill:none;stroke:var(--bone);stroke-width:2.2}
.brand .bt{font:400 19px/1 var(--disp);letter-spacing:.02em;white-space:nowrap}
.brand .bt small{font:400 10.5px/1 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--stone);margin-left:10px}
@media (max-width:520px){.brand .bt small{display:none}}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa2b4;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66708a;transition:background .35s,border-color .35s}
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
.scene .dv{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.82);stroke-width:1.3}
.scene .dv2{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .dia{fill:none;stroke:var(--accL);stroke-width:1.6}
.scene .aw{fill:none;stroke:rgba(var(--boner),.85);stroke-width:1.4}
.scene .aw2{fill:none;stroke:rgba(var(--boner),.35);stroke-width:1;stroke-dasharray:2 4}
.scene .seal{fill:rgba(var(--boner),.18);stroke:var(--bone);stroke-width:1.2}
.scene .gap{fill:none;stroke:rgba(var(--accr),.7);stroke-width:1;stroke-dasharray:3 5}
.scene .flow{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.1;stroke-dasharray:10 8}
.scene .vro{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1.1}
.scene .vrc{fill:none;stroke:var(--accL);stroke-width:1.5;stroke-linecap:round}
.scene .dial{fill:#121b1f;stroke:rgba(var(--boner),.7);stroke-width:1.2}
.scene .tk{stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .ndl{stroke:var(--accL);stroke-width:2;stroke-linecap:round}
.scene .hub{fill:var(--accL)}
.scene .lgb{fill:none;stroke:rgba(var(--boner),.35);stroke-width:1}
.scene .lgf{fill:rgba(var(--accr),.55);stroke:var(--accL);stroke-width:1}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c3ccce;paint-order:stroke;stroke:#121b1f;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.nm2{fill:var(--bone)}
.scene text.cap{fill:var(--accL)}
/* ===== AcouFlow additions ===== */
.hero .hero-h{font-size:clamp(42px,4.1vw,82px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:13ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
html body .hero h1#pageTitle.hero-h{font-size:clamp(42px,3.3vw + 14px,78px)!important}
@media (max-width:860px){html body .hero h1#pageTitle.hero-h{font-size:clamp(38px,10.4vw,72px)!important}.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
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
.stat .v{font-size:clamp(50px,5vw,92px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
/* how it works: four principles */
.caps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:34ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1100px){.caps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:44px}}
@media (max-width:620px){.caps{grid-template-columns:1fr}.cap p{max-width:52ch}}
.q{margin:clamp(64px,7vw,112px) 0 0;display:grid;grid-template-columns:minmax(0,3fr) minmax(0,9fr);gap:var(--gap);border-top:1px solid var(--hairD);padding-top:22px}
.q blockquote{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(24px,2.3vw,38px);line-height:1.22;letter-spacing:-.02em;max-width:34ch}
.q .lab{color:var(--accD)}
@media (max-width:760px){.q{grid-template-columns:1fr}}
/* assessments (programme rows) */
.asm{list-style:none;margin:0;padding:0}
.asm-row{display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,5fr) minmax(0,2.8fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.asm-row:last-child{border-bottom:1px solid var(--hair)}
.asm-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.asm-row:hover::after{transform:scaleX(1)}
.asm-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,48px);line-height:1;letter-spacing:-.03em;margin:0 0 10px}
.asm-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.asm-row p{margin:0;color:var(--stone);font-size:16px;max-width:54ch}
.asm-row .meta{display:flex;flex-direction:column;gap:8px}
.asm-row.lead h3{color:var(--bone)}
.asm-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ink);background:var(--acc);padding:6px 8px 5px}
@media (max-width:1024px){.asm-row{grid-template-columns:1fr 1fr;row-gap:16px}.asm-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.asm-row{grid-template-columns:1fr}}
/* applications */
.caps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:34ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1100px){.caps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:44px}}
@media (max-width:620px){.caps{grid-template-columns:1fr}.cap p{max-width:52ch}}
/* team: refined text-only */
.tm{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start}
.tm-p{border-top:1px solid var(--hair);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:18px}
.tm-p p{color:var(--stone);font-size:16px;line-height:1.6;margin:0 0 14px;max-width:56ch}
.tm-x{list-style:none;margin:28px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:var(--gap)}
.tm-x li{padding:14px 0 16px;border-top:1px solid var(--hair);font-size:15px;color:var(--bone)}
.tm-x .lab{display:block;margin-bottom:6px}
.tm-side p{color:var(--stone);font-size:16px;line-height:1.6;max-width:40ch;margin:0 0 18px}
@media (max-width:1024px){.tm{grid-template-columns:1fr}}
@media (max-width:560px){.tm-x{grid-template-columns:1fr}}
/* team: refined text-only, two principal investigators */
.tm2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(32px,5vw,96px)}
.tm-p{border-top:1px solid var(--hair);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.8vw,46px);line-height:1.05;letter-spacing:-.03em;margin:0 0 12px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:18px}
.tm-p p{color:var(--stone);font-size:16px;line-height:1.6;margin:0 0 14px;max-width:52ch}
.tm-note{margin-top:clamp(40px,5vw,72px);color:var(--stone);font-size:16px;max-width:70ch}
@media (max-width:900px){.tm2{grid-template-columns:1fr}}
''' + r'''/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("acouflow-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M30 22c-7 0-11 12-11 26s4 26 11 26 11-12 11-26-4-26-11-26zM66 22c-7 0-11 12-11 26s4 26 11 26 11-12 11-26-4-26-11-26z"/></svg>
    <div class="wm"><span>ACOUFLOW</span></div>
  </div>
  <span class="lab pl">VortexPAP · Cincinnati, Ohio</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="AcouFlow Therapeutics, home"><svg class="am" viewBox="0 0 30 30" aria-hidden="true">' + MARK + '</svg><span class="bt">AcouFlow<small>Therapeutics</small></span></a>'

NAV = [("story", "Technology"), ("programme", "Programme"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Based in</span><br>Cincinnati, Ohio</div>
    <div><span class="lab">Email</span><br>orenl@ucmail.uc.edu</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">AcouFlow Therapeutics</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="AcouFlow Therapeutics";\nvar PK="acouflow";'

R["content"] = r'''var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','400 1em "Inter Tight"','500 1em "Inter Tight"','400 1em "IBM Plex Mono"'];
var MAIL="orenl@ucmail.uc.edu";
var AWARD="https://reporter.nih.gov/project-details/11253024";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-08-10",s:"NIH RePORTER · NHLBI",t:"STTR Phase I: Toward establishing the feasibility and commercial readiness of VortexPAP for improving OSA treatment",u:AWARD},
 {d:"2024-04-22",s:"WVXU, via University of Cincinnati",t:"Find your CPAP annoying? UC researchers are working on a more comfortable device",u:"https://www.uc.edu/news/articles/2024/04/wvxu--find-your-cpap-annoying-university-of-cincinnati-researchers-may-have-a-solution.html"},
 {d:"2024-04-17",s:"University of Cincinnati",t:"UC researchers develop new CPAP device",u:"https://www.uc.edu/news/articles/2024/04/university-of-cincinnati-researchers-develop-a-new-cpap-device-to-assist-indivials-with-obstructive-sleep-apnea.html"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["No sealed mask","A minimalist interface that barely touches the face. Without a tight seal or an enclosed mask, it is also meant to help people with claustrophobia.",'<path d="M10 40C10 22 18 10 28 10S46 22 46 40"/><path class="a" d="M20 40C20 32 23 28 28 28S36 32 36 40"/><path d="M6 46H50"/>'],
  ["Pulsed vortex airflow","Instead of continuous airflow, the device pulses the air, and each pulse is a vortex, similar to a smoke ring: a flow-control concept from aerospace engineering.",'<ellipse cx="16" cy="28" rx="6" ry="16"/><ellipse class="a" cx="34" cy="28" rx="6" ry="16"/><path d="M42 28H54M50 24l4 4-4 4"/>'],
  ["CPAP-level pressure","The vortex pulses pressurise the upper airway in the same manner as CPAP devices. In a preliminary clinical study with current CPAP users, it delivered the pressure levels used in their own therapy.",'<circle cx="28" cy="30" r="20"/><path class="a" d="M28 30L40 18"/><path d="M14 30h4M38 30h4M28 14v4"/>'],
  ["Less air swallowing","With no seal to hold, the device works at lower pressures, which also reduce air swallowing.",'<path d="M8 20C18 12 38 12 48 20"/><path class="a" d="M14 30C22 24 34 24 42 30"/><path d="M20 40C24 37 32 37 36 40"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function prog(){var A=[
  ["Aim 1","Feasibility study","A Phase 0 clinical trial to evaluate the safety and effectiveness of VortexPAP in controlling obstructive sleep apnea.",["NIH STTR Phase I","With the University of Cincinnati"],1],
  ["Aim 2","Built for home use","Optimising the device for home use, with added compliance monitoring, so patients can use it without clinical supervision.",["Compliance monitoring","Home use"],0],
  ["Aim 3","Ready for multi-center trials","The clinical trial protocol, informed consent documents and operational manuals for larger, multi-center trials of long-term adherence and efficacy against conventional CPAP.",["Trial protocol","Next phase"],0],
  ["Before","Proof of concept","Earlier University of Cincinnati work, including an NIH-funded proof-of-concept project to develop and verify an ergonomic design, and a preliminary clinical study with current CPAP users.",["Completed","Ergonomic design"],0]];
  return '<ul class="asm">'+A.map(function(a){return '<li class="asm-row'+(a[4]?' lead':'')+'"><div><h3>'+esc(a[1])+'</h3><span class="nm3">'+esc(a[0])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">2026–27</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Obstructive sleep apnea · Cincinnati, Ohio<span class="nomob"> · NIH STTR</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Airway pressure,</span><span class="l">without</span><span class="l"><em>the seal.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AcouFlow Therapeutics is developing VortexPAP, a positive airway pressure therapy for mild to moderate obstructive sleep apnea that uses pulsed vortex airflow to reach therapeutic pressure without a sealed mask.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="#programme" data-to="programme">The programme</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why VortexPAP</span>'+
   '<p class="txt" id="mani">CPAP works, but only if it is used, and the sealed mask is why many stop. VortexPAP keeps <em>the pressure</em> and drops the seal.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$498K</span><p class="k">NIH NHLBI STTR Phase I award for VortexPAP, 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40M</span><p class="k">US adults with obstructive sleep apnea, about</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 3</span><p class="k">CPAP patients, at least, estimated not to use it as prescribed</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · VortexPAP</span><h2 class="d3">Pressure that travels as <em>a vortex.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Collapse</span><span>CPAP</span><span>Vortex</span><span>Home</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The airway closes in sleep.</h2><p>In obstructive sleep apnea the upper airway collapses during sleep. About 40 million American adults live with it, and positive airway pressure is the first-line treatment.</p></article>'+
     '<article class="step"><h2>CPAP needs a seal.</h2><p>CPAP pushes continuous air through a tight-fitting mask. It is effective, but the mask and headgear are uncomfortable, and noncompliance is estimated to affect at least a third of patients.</p></article>'+
     '<article class="step"><h2>Each pulse, a vortex.</h2><p>VortexPAP pulses the airflow, and each pulse is a vortex ring. The vortices pressurise the airway in the same manner as CPAP, without the seal, through a mask that barely touches the face.</p></article>'+
     '<article class="step"><h2>From the clinic to the bedroom.</h2><p>With an NIH STTR award, the device is being tested in a feasibility study at the University of Cincinnati and optimised for home use, with compliance monitoring built in.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>How it works</span><h2 class="d2 split">Comfort is how therapy <em>gets used.</em></h2></div><p data-r>VortexPAP is designed to improve comfort and adherence for people with mild to moderate obstructive sleep apnea, by delivering therapeutic pressure without a sealed mask.</p></div>'+
   caps()+
   '<div class="q"><span class="lab">Liran Oren, PhD</span><blockquote>“The vortex pulses can pressurize the airway in the same manner as CPAP devices, we just don’t need the seal anymore.”</blockquote></div>'+
  '</div></section>'+
  '<section class="sec dark2" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">Toward clinical and <em>commercial readiness.</em></h2></div><p data-r>A Phase I STTR award from the National Heart, Lung, and Blood Institute funds the next step toward commercialisation, and prepares the trials that will compare long-term adherence and efficacy with conventional CPAP.</p></div>'+
   prog()+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Fluid mechanics, meeting <em>sleep medicine.</em></h2></div><p data-r>The principal investigators on the NIH award bring together airflow research and clinical sleep medicine at the University of Cincinnati.</p></div>'+
   '<div class="tm2">'+
    '<div class="tm-p"><h3>Liran Oren, PhD</h3><span class="cr">Contact PI · NIH STTR Phase I</span>'+
     '<p>Research associate professor in the Department of Otolaryngology, Head and Neck Surgery at the University of Cincinnati College of Medicine. Leads the work with engineers to develop VortexPAP.</p></div>'+
    '<div class="tm-p"><h3>Ann Romaker, MD</h3><span class="cr">Principal investigator · NIH STTR Phase I</span>'+
     '<p>Director of the UC Sleep Medicine Center and professor of internal medicine at the University of Cincinnati. Identified the main reasons for CPAP noncompliance that the device sets out to address.</p></div>'+
   '</div>'+
   '<p class="tm-note">VortexPAP was developed at the University of Cincinnati with Ephraim Gutmark, PhD, of aerospace engineering, and with support from the UC Venture Lab. Testing for the STTR project is performed at the University of Cincinnati.</p>'+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funding and <em>coverage.</em></h2></div><p data-r>The NIH award record and reporting on the device’s development at the University of Cincinnati.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>AcouFlow.</em></h2>'+
   '<p class="sub" data-r>For questions about VortexPAP, the feasibility study or partnering, write to the contact principal investigator.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+AWARD+'" target="_blank" rel="noopener">The NIH award</a></div>'+
   '<div class="ctc2"><div><span class="lab">Based in</span><p>Cincinnati, Ohio</p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Funding</span><p>NIH NHLBI, STTR Phase I</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Cincinnati, Ohio</div>'+
   '<div class="c"><span class="lab">Device</span>VortexPAP<br>Mask-free positive airway pressure</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#programme" data-to="programme">Programme</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.04em">ACOUFLOW</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AcouFlow Therapeutics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"AcouFlow Therapeutics — VortexPAP: airway pressure without a sealed mask",x:"Home"}}'''

R["field"] = (HERE / "acouflow.field.js").read_text()
R["story"] = (HERE / "acouflow.story.js").read_text()

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
(HERE / "acouflow.src.html").write_text(out)
print("wrote", HERE / "acouflow.src.html", len(out))
