#!/usr/bin/env python3
"""Assemble uncotherapeutics.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style, build-out pages).
Run: python3 _kit/src/uncotherapeutics.assemble.py && node _kit/build.js src/uncotherapeutics.src.html ../uncotherapeutics/index.html  (from _kit)
Facts: _kit/dossiers/uncotherapeutics.md. Palette: the live uncotherapeutics.com (navy ground #00023e/#070d47; the logo's
sunset sphere #fee391 -> #fecaa0 -> #faaedd -> #d89bf6 -> #9273e4; white condensed wordmark). Hero: crafted render
(_kit/home/uncotherapeutics/render/receptor.html)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Unco Therapeutics — Redefining GPCR drug discovery</title>
<meta name="description" content="Unco Therapeutics is developing allosteric uncouplers, a new class of small-molecule GPCR therapeutics, as safe and effective non-opioid treatments for chronic pain. Supported by an NIH STTR Phase I award.">
<meta name="theme-color" content="#03053f">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23fee391'/%3E%3Cstop offset='.55' stop-color='%23faaedd'/%3E%3Cstop offset='1' stop-color='%239273e4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' fill='%2303053f'/%3E%3Ccircle cx='32' cy='32' r='20' fill='url(%23g)'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Barlow Semi Condensed:300,400,600,700; Figtree:400,500; DM Mono:400*/"

R["root"] = r''':root{
  --ink:#03053f;--inkr:3,5,63;--boner:247,245,252;--accr:216,155,246;--ink2:#070a4a;--ink3:#0d1156;--deep:#010230;
  --bone:#f7f5fc;--bone2:#eeebf8;--bone3:#dedaf0;
  --stone:#b3b5dc;--stoneD:#4c5088;
  --acc:#d89bf6;--accL:#fdd9a4;--accD:#5b3fc8;
  --hair:rgba(247,245,252,.14);--hairD:rgba(3,5,63,.16);
  --disp:'Barlow Semi Condensed',system-ui,'Segoe UI',sans-serif;
  --serif:'Barlow Semi Condensed',system-ui,sans-serif;
  --sans:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'DM Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''html{background:#03053f}
.fieldbg{position:fixed;inset:0;z-index:0;background:transparent}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;height:56px;color:var(--bone)}
.brand svg.ucw{height:40px;width:auto;flex:none;overflow:visible;display:block}
.brand svg.ucw .t1{font:700 33px/1 'Barlow Semi Condensed',system-ui,sans-serif;letter-spacing:-.01em;fill:currentColor}
.brand svg.ucw .t2{font:500 10.5px/1 'Figtree',system-ui,sans-serif;letter-spacing:.06em;fill:currentColor}'''
R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:14ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a3a6d6;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5d62a8;transition:background .35s,border-color .35s}
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
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c9cbef;paint-order:stroke;stroke:#070a4a;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.cap{font-size:14px;fill:var(--accL)}
@media (max-width:1024px){.scene svg text{font-size:21px!important;letter-spacing:.06em!important}}
.scene .uc-lh{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .uc-lt{fill:none;stroke:rgba(var(--boner),.16);stroke-width:1}
.scene .uc-hx{fill:rgba(var(--accr),.05);stroke-width:1.3;transition:fill .5s var(--eo)}
.scene .uc-hx.on{fill:rgba(254,227,145,.14)}
.scene .uc-hc{fill:none;stroke-width:1;opacity:.55}
.scene .uc-lp{fill:none;stroke-width:1.3}
.scene .uc-nt{fill:none;stroke:#fee391;stroke-width:1.3}
.scene .uc-nr{fill:#070a4a;stroke:#fee391;stroke-width:1.2}
.scene .uc-tp{fill:rgba(254,227,145,.28);stroke:#fee391;stroke-width:1.3}
.scene .uc-cut{fill:none;stroke:#faaedd;stroke-width:1.6}
.scene .uc-pr{fill:rgba(250,174,221,.1);stroke:#faaedd;stroke-width:1.2}
.scene .uc-prc{fill:none;stroke:rgba(250,174,221,.6);stroke-width:1}
.scene .uc-an{fill:rgba(var(--boner),.06);stroke:rgba(var(--boner),.75);stroke-width:1.2}
.scene .uc-ga{fill:rgba(167,132,238,.16);stroke:#a784ee;stroke-width:1.2}
.scene .uc-gb,.scene .uc-gg{fill:rgba(167,132,238,.08);stroke:rgba(167,132,238,.75);stroke-width:1.1}
.scene .uc-wv{fill:none;stroke:#faaedd;stroke-width:1.2}
.scene .uc-mb{fill:rgba(254,227,145,.12);stroke:#fee391;stroke-width:1.4}
.scene .uc-ma{fill:#fee391;stroke:none}
.scene .uc-ma.n{fill:#a9b8ff}.scene .uc-ma.s{fill:#ffd36b}.scene .uc-ma.o{fill:#ff9db8}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c9cbef;paint-order:stroke;stroke:#070a4a;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.g{fill:#e4dcff;font-size:12px;letter-spacing:.04em}
.scene text.cap{font-size:14px;fill:var(--accL)}
@media (max-width:1024px){.scene svg text{font-size:21px!important;letter-spacing:.06em!important}.scene svg text.g{font-size:15px!important}}
/* ===== Unco additions ===== */
.hero .hero-h{font-family:var(--disp);font-size:clamp(54px,5vw,100px);letter-spacing:-.012em;line-height:1.02;font-weight:300}
html body section.hero#hero h1.hero-h{font-size:clamp(54px,5vw,100px)!important}
@media (max-width:860px){html body section.hero#hero h1.hero-h{font-size:clamp(48px,13vw,84px)!important}.hero .hero-h .l{white-space:normal}section.hero#hero{padding-top:calc(38svh + 24px)!important}}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.01em}
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
.stat .v{font-family:var(--disp);font-size:clamp(46px,4.6vw,84px);font-weight:300;letter-spacing:-.015em}
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
.prog-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(34px,3.2vw,54px);line-height:1;letter-spacing:-.012em;margin:0}
.prog-row h3 em{color:var(--accL);font-style:normal}
.prog-row p{margin:0;color:var(--stone);font-size:16px;max-width:52ch}
.prog-row .lab{display:block}
.prog-row .meta{display:flex;flex-direction:column;gap:8px}
.stages{list-style:none;margin:clamp(40px,4.6vw,64px) 0 0;padding:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));position:relative}
.stages::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.stages .fill{position:absolute;left:0;top:4px;height:1px;width:50%;background:var(--accL);transform-origin:left}
.stages li{position:relative;padding:22px 16px 0 0;font-size:14.5px;line-height:1.45;color:var(--stone)}
.stages li::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;background:var(--ink2);border:1px solid #5d62a8}
.stages li.done::before,.stages li.now::before{background:var(--accL);border-color:var(--accL)}
.stages li.now::after{content:"";position:absolute;left:-5px;top:-5px;width:19px;height:19px;border:1px solid var(--accL);opacity:.5;animation:ucPulse 2.4s var(--eo) infinite}
@keyframes ucPulse{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.5);opacity:0}}
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
.light .mh{--mh-ink:#03053f;--mh-mute:#4c5088;--mh-line:rgba(3,5,63,.16);--mh-accent:#5b3fc8;--mh-display:'Barlow Semi Condensed',system-ui,sans-serif;--mh-sans:'Figtree',system-ui,sans-serif;--mh-mono:'DM Mono',ui-monospace,monospace}
.light .mh-name{letter-spacing:-.02em}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,23px);line-height:1.35;letter-spacing:-.015em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
.lede-s{max-width:60ch}
/* template leftovers re-tinted to the Unco palette (BG) */
@media (max-width:860px){html body .fieldbg{background:#03053f}}
html body .light+.cta{border-top-color:rgba(3,5,63,.12)}
html body .rail span{color:#a3a6d6}html body .rail span.on{color:var(--bone)}
html body .rail span::before{background:var(--ink2);border-color:#5d62a8}
html body .rail span.done::before,html body .rail span.on::before{background:var(--accL);border-color:var(--accL)}
html body .scene text{fill:#c9cbef}html body .scene text.a,html body .scene text.cap{fill:var(--accL)}html body .scene text.g{fill:#e4dcff}
html body .btn.solid,html body .hero .btn.solid,html body .light .btn.solid{color:var(--ink)}
html body .light .btn.solid{background:var(--accD);border-color:var(--accD);color:#fff}
html body .light .btn.solid:hover{color:#fff}
/* footer echo of the hero stays faint, never behind the wordmark at strength (DF) */
html body .ftr .fcv{opacity:.13!important}'''


R["seen"] = r'''<script>try{if(sessionStorage.getItem("unc-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

def MARK(gid):
    return ('<svg class="ucw" viewBox="0 0 104 46" aria-hidden="true"><defs><linearGradient id="%s" x1="0" y1="0" x2="0" y2="1">'
            '<stop offset="0" stop-color="#fee391"/><stop offset=".42" stop-color="#fecaa0"/><stop offset=".62" stop-color="#faaedd"/>'
            '<stop offset=".8" stop-color="#d89bf6"/><stop offset="1" stop-color="#9273e4"/></linearGradient></defs>'
            '<text class="t1" x="0" y="28">UNC</text><circle cx="69" cy="16.5" r="12.5" fill="url(#%s)"/>'
            '<text class="t2" x="9" y="43">Therapeutics</text></svg>') % (gid, gid)

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><circle cx="48" cy="48" r="30"/><path d="M18 48h60M22 36h52M22 60h52M30 26h36M30 70h36"/></svg>
    <div class="wm"><span>UNCO THERAPEUTICS</span></div>
  </div>
  <span class="lab pl">GPCR therapeutics &middot; New York City</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Unco Therapeutics, home">' + MARK("ucg1") + '</a>'

NAV = [("story", "Science"), ("pipeline", "Pipeline"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Research HQ</span><br>Long Island City, New York</div>
    <div><span class="lab">Email</span><br>info@uncotherapeutics.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Unco Therapeutics</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Unco Therapeutics";\nvar PK="unc";'

R["content"] = r'''var FONTS=['300 1em "Barlow Semi Condensed"','400 1em "Barlow Semi Condensed"','600 1em "Barlow Semi Condensed"','700 1em "Barlow Semi Condensed"','400 1em "Figtree"','500 1em "Figtree"','400 1em "DM Mono"'];
var MAIL="info@uncotherapeutics.com";
var GRANT="https://reporter.nih.gov/project-details/11253679";
var NB="https://www.uncotherapeutics.com/blog-news/";
/* team: names, titles and facts exactly as on uncotherapeutics.com/team ("Meet The Founders"); no portraits used */
var PEOPLE=[
 {name:"Alex Thomsen, Ph.D.",title:"Founder & Executive Director",sum:"GPCR signaling and receptor pharmacology. Assistant Professor at New York University; trained in the Lefkowitz lab."},
 {name:"Surbhi Chitnis, Ph.D.",title:"Co-Founder & Founding Scientist",sum:"Medicinal chemist in small-molecule drug discovery; Ph.D. in Medicinal Chemistry, University at Buffalo."},
 {name:"May Khanna, Ph.D.",title:"Co-Founder & Scientific Advisor",sum:"Serial bioentrepreneur; Associate Professor and Assistant Dean of Innovation and Entrepreneurship, University of Florida."}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2026-06-01",s:"Unco news",t:"Dr. Surbhi Chitnis wins 3rd place for oral presentation at AMPIRS, NYU College of Dentistry",u:NB+"dr-surbhi-chitnis-wins-3rd-place-for-oral-presentation-at-ampirs"},
 {d:"2026-03-01",s:"Unco news",t:"Unco Therapeutics awarded the AbbVie Golden Ticket, with a year of lab space at BioLabs @ NYU Langone",u:NB+"unco-therapeutics-awarded-the-abbvie-golden-ticket"},
 {d:"2025-11-01",s:"Unco news",t:"Unco Therapeutics welcomes Dr. Surbhi Chitnis as Co-Founder & Founding Scientist",u:NB+"unco-therapeutics-welcomes-dr-surbhi-chitnis"},
 {d:"2025-09-01",s:"NIH STTR",t:"Unco Therapeutics awarded an NIH STTR Phase I grant for allosteric uncouplers in chronic pain",u:NB+"unco-therapeutics-awarded-an-sttr-grant"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["Molecular microswitches","GPCRs are a family of more than 800 receptors on the surface of cells throughout the body. They detect signals from outside the cell and regulate inflammation, immune responses, neuronal activity, hormone signaling and metabolism.",'<rect x="10" y="10" width="8" height="36" rx="4"/><rect x="24" y="8" width="8" height="40" rx="4"/><rect x="38" y="10" width="8" height="36" rx="4"/><path class="a" d="M4 20h48M4 36h48"/>'],
  ["Where pharmacology falls short","Only a small fraction of GPCRs have been targeted by existing drugs, and lack of efficacy remains a leading cause of clinical failure. Chronic pain shows the gap most clearly: opioids carry serious risks, and alternatives often lack efficacy.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M14 42L42 14"/>'],
  ["An integrated discovery engine","Structural biology, AI-driven in silico screening, medicinal chemistry and translational pharmacology, combined with tailored design strategies, to modulate even the most difficult-to-target GPCRs precisely and selectively.",'<path d="M28 6l19 11v22L28 50 9 39V17z"/><path class="a" d="M28 18l9 5v10l-9 5-9-5V23z"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Meet the founders</p><ul class="mh-list">'+PEOPLE.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div></div>'}
function stages(){var S=[["Target biology","PAR2 drives pain signaling in sensory neurons in cancer-associated, inflammatory and neuropathic pain","done"],["Hit discovery","Computational and AI-based screening identified several small-molecule series","done"],["Pain-model validation","The uncoupler function of some compounds validated in ex vivo and in vivo pain models","done"],["Lead optimisation","Potent, selective, drug-like compounds that block the PAR2–G protein interaction","now"],["Development","Toward safe, effective non-opioid therapies","next"]];
  return '<ol class="stages" aria-label="Allosteric uncoupler programme stages"><i class="fill" aria-hidden="true"></i>'+S.map(function(s){return '<li class="'+s[2]+'"><b>'+s[0]+'</b>'+s[1]+'</li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>GPCR therapeutics · New York City<span class="nomob"> · Chronic pain</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Redefining</span><span class="l">GPCR drug</span><span class="l"><em>discovery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Unco Therapeutics is creating a new class of medicines, allosteric uncouplers, to shut down the overactive receptor signaling that sustains chronic pain, without opioids.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Pipeline</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Unco</span>'+
   '<p class="txt" id="mani">We are building <em>entirely new classes of therapeutics</em> based on fundamentally different pharmacological principles.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">800+</span><span class="k">GPCRs on the surface of cells throughout the body</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 3</span><span class="k">Approved drugs act by modulating GPCR activity, more than one-third in all</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$350K</span><span class="k">NIH STTR Phase I award for allosteric uncouplers in chronic pain, September 2025</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science · PAR2</span><h2 class="d3">Switching off a receptor <em>that won’t let go.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Activation</span><span>Signal</span><span>Blocked</span><span>Uncoupled</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A protease cuts the receptor.</h2><p>In cancer-associated, inflammatory and neuropathic pain, proteases are released around sensory neurons. They cleave the end of the PAR2 receptor, exposing a tethered peptide that switches the receptor on, irreversibly.</p></article>'+
     '<article class="step"><h2>The G protein carries the signal.</h2><p>Active PAR2 couples to a G protein inside the neuron. The signal makes pain-sensing neurons hyperexcitable, and it persists not only at the cell surface but also from compartments deep within the cell.</p></article>'+
     '<article class="step"><h2>Conventional drugs can’t compete.</h2><p>A traditional antagonist must displace the activating ligand. Here the agonist is covalently attached to the receptor itself, so it cannot be competed off, and PAR2 has resisted small molecules, peptides, pepducins and antibodies alike.</p></article>'+
     '<article class="step"><h2>The uncoupler cuts the link.</h2><p>Allosteric uncouplers bind the receptor’s intracellular G protein-binding site instead. Because the PAR2–G protein interaction is transient, they can take that site and shut down signaling, whatever is happening outside.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our approach</span><h2 class="d2 split">Beyond conventional <em>receptor pharmacology.</em></h2></div><p data-r>With extensive expertise in GPCR biology and signaling mechanisms, we design therapeutic strategies for biology that has been out of reach.</p></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Allosteric uncouplers for <em>chronic pain.</em></h2></div><p data-r>Our pioneer program targets difficult GPCRs implicated in chronic pain and inflammation, starting with the protease-activated receptor 2 (PAR2).</p></div>'+
   '<div class="prog-row"><div><span class="lab" style="margin-bottom:12px">Programme 01</span><h3>PAR2 <em>uncouplers</em></h3></div>'+
    '<p>Small molecules designed to block overactive PAR2 signaling at the cell surface and from intracellular compartments, as safe and effective non-opioid therapies for conditions where pain plays a central role: arthritis, migraine, inflammatory bowel disease and cancer.</p>'+
    '<div class="meta"><span class="lab">Indication · Chronic pain</span><span class="lab">Stage · Lead optimisation</span><span class="lab">Funding · NIH NIGMS STTR</span></div></div>'+
   stages()+
   '<div class="bench"><div><span class="lab kick" data-r>The Phase I work</span><p class="muted" data-r style="max-width:34ch">What the STTR Phase I award funds, from the project summary.</p></div>'+
    '<div><dl>'+
     '<div><dt class="lab">Starting point</dt><dd>Several small-molecule series found by computational and AI-based screening</dd></div>'+
     '<div><dt class="lab">Scaffolds</dt><dd>Thiazolidine, naphthyl-diamine and pyrazolopyrimidine series</dd></div>'+
     '<div><dt class="lab">Goal</dt><dd>Novel, potent, selective and drug-like compounds that block the PAR2–G protein interaction</dd></div>'+
     '<div><dt class="lab">Partner</dt><dd>A collaboration with the Thomsen Laboratory at New York University</dd></div>'+
    '</dl><p class="note-s">NIH NIGMS STTR Phase I award 1R41GM165099-01A1, “Development of Allosteric Uncouplers as Therapeutics for Chronic Pain”, September 2025 to March 2027.</p></div></div>'+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Making chronic pain <em>a solvable problem.</em></h2></div><p data-r>World-class scientists and builders, bringing together GPCR biology and pharmacology, medicinal chemistry, structural biology, and entrepreneurship.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">Science doesn’t stand still.</h2></div><p data-r>The latest as we advance the future of GPCR therapeutics.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For partners, investors and collaborators</span>'+
   '<h2 class="big split">Get in touch with <em>Unco.</em></h2>'+
   '<p class="sub" data-r>Interested in allosteric uncouplers, GPCR pharmacology or non-opioid pain therapeutics? Write to our team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#team" data-to="team">Meet the founders</a></div>'+
   '<div class="ctc2"><div><span class="lab">Research HQ</span><p><span>45-18 Court Square, 6th Floor</span><br><span>Long Island City, NY 11101</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Funding</span><p>NIH NIGMS, STTR Phase I</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Research HQ</span>45-18 Court Square, 6th Floor<br>Long Island City, NY 11101</div>'+
   '<div class="c"><span class="lab">Programme</span>PAR2 allosteric uncouplers<br>NIH STTR 1R41GM165099</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Science</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',system-ui,sans-serif;font-weight:600;font-size:46px;letter-spacing:.01em">UNCO THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Unco Therapeutics LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Unco Therapeutics — Redefining GPCR drug discovery",x:"Home"}}'''

R["field"] = (HERE / "uncotherapeutics.field.js").read_text()
R["story"] = (HERE / "uncotherapeutics.story.js").read_text()

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
(HERE / "uncotherapeutics.src.html").write_text(out)
print("wrote", HERE / "uncotherapeutics.src.html", len(out))
