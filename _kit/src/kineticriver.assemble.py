#!/usr/bin/env python3
"""Assemble kineticriver.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style, build-out pages).
Run: python3 _kit/src/kineticriver.assemble.py && node _kit/build.js src/kineticriver.src.html ../kineticriver/index.html  (from _kit)
Facts: _kit/dossiers/kineticriver.md. Palette: the live kineticriver.com (orange #eb8723 logo tile and accents; slate header #212f38;
deep #0e131a). Fonts: Nunito / Nunito Sans, as on their site. Hero: crafted render (_kit/home/kineticriver/render/flowcell.html)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Kinetic River — Flow cytometers, nanoparticle analysis and consulting</title>
<meta name="description" content="Kinetic River, Mountain View, California, designs and builds flow cytometers: the Delaware Flow NanoCytometer for particles from 28 nm to 28 µm, the compensation-free Arno, the modular Potomac and the lifetime-resolved Danube, plus nanoparticle analysis services and engineering consulting.">
<meta name="theme-color" content="#0d141a">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23eb8723'/%3E%3Cg fill='none' stroke='%23fff' stroke-width='4' stroke-linecap='round'%3E%3Cpath d='M10 22c9-7 17 7 26 0s14-6 18-2'/%3E%3Cpath d='M10 33c9-7 17 7 26 0s14-6 18-2'/%3E%3Cpath d='M10 44c9-7 17 7 26 0s14-6 18-2'/%3E%3C/g%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Nunito Sans:300,400,600; Nunito:400,600; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#0d141a;--inkr:13,20,26;--boner:244,241,236;--accr:244,160,74;--ink2:#111a21;--ink3:#17222b;--deep:#091015;
  --bone:#f4f1ec;--bone2:#ebe6de;--bone3:#dcd5ca;
  --stone:#a9b4bc;--stoneD:#55626b;
  --acc:#eb8723;--accL:#f4a04a;--accD:#a8540c;
  --hair:rgba(244,241,236,.14);--hairD:rgba(13,20,26,.16);
  --disp:'Nunito Sans',system-ui,'Segoe UI',sans-serif;
  --serif:'Nunito Sans',system-ui,sans-serif;
  --sans:'Nunito',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''html{background:#0d141a}
.fieldbg{position:fixed;inset:0;z-index:0;background:transparent}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.krm{width:36px;height:36px;flex:none}
.brand .bt{display:flex;flex-direction:column;line-height:1}
.brand .bt b{font:600 18px/1 var(--disp);letter-spacing:.08em;text-transform:uppercase}
.brand .bt i{font:400 12.5px/1 var(--sans);font-style:italic;color:var(--accL);margin-top:5px;letter-spacing:.01em}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:14ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa6ae;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #5f6d77;transition:background .35s,border-color .35s}
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
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c9d3d9;paint-order:stroke;stroke:#111a21;stroke-width:5px;stroke-linejoin:round}
.scene text.a{fill:var(--accL)}
.scene text.cap{font-size:14px;fill:var(--accL)}
@media (max-width:1024px){.scene svg text{font-size:21px!important;letter-spacing:.06em!important}}
.scene .kr-gl{fill:rgba(var(--boner),.025);stroke:rgba(var(--boner),.55);stroke-width:1.2}
.scene .kr-gl2{fill:none;stroke:rgba(var(--boner),.16);stroke-width:1}
.scene .kr-ch{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .kr-fn{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1.2}
.scene .kr-sh{fill:none;stroke:rgba(var(--boner),.22);stroke-width:1;stroke-dasharray:3 6}
.scene .kr-core{fill:none;stroke:rgba(var(--boner),.28);stroke-width:1;stroke-dasharray:2 5}
.scene .kr-bm{fill:none;stroke:#47b4ff;stroke-width:2.4}
.scene .kr-spot{fill:rgba(var(--accr),.28);stroke:var(--accL);stroke-width:1.2}
.scene .kr-fsc{fill:none;stroke:rgba(110,190,255,.75);stroke-width:1.1;stroke-dasharray:4 5}
.scene .kr-fl{fill:none;stroke:var(--accL);stroke-width:1.2;stroke-dasharray:4 5}
.scene .kr-pt{fill:#1a2630;stroke:rgba(var(--boner),.85);stroke-width:1.2;transition:fill .25s,stroke .25s}
.scene .kr-pt.hot{fill:var(--acc);stroke:#ffd2a0}
.scene .kr-ax{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .kr-tr{fill:none;stroke:rgba(150,205,255,.9);stroke-width:1.5}
.scene .kr-tro{fill:none;stroke:var(--accL);stroke-width:1.6}
.scene .kr-tra{fill:none;stroke:#e9d7b8;stroke-width:1.5;stroke-dasharray:5 4}
.scene .kr-band{fill:rgba(var(--accr),.1);stroke:rgba(var(--accr),.5);stroke-width:1;stroke-dasharray:3 5}
.scene text.o{fill:var(--accL)}
/* ===== Kinetic River additions ===== */
.hero .hero-h{font-family:var(--disp);font-size:clamp(52px,5vw,100px);letter-spacing:-.035em;line-height:1.02;font-weight:300}
html body section.hero#hero h1.hero-h{font-size:clamp(52px,5vw,100px)!important}
.hero .hero-h em,.d1 em,.d2 em,.d3 em,.big em{font-style:normal!important}
@media (max-width:860px){html body section.hero#hero h1.hero-h{font-size:clamp(40px,11vw,76px)!important}.hero .hero-h .l{white-space:normal}section.hero#hero{padding-top:calc(38svh + 24px)!important}}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:400;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.mani .txt{font-size:clamp(24px,2.3vw,40px);line-height:1.22}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:var(--ink);border-color:var(--acc)}
.mani .txt em{font-style:normal!important}
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
.stages li::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;background:var(--ink2);border:1px solid #5f6d77}
.stages li.done::before,.stages li.now::before{background:var(--accL);border-color:var(--accL)}
.stages li.now::after{content:"";position:absolute;left:-5px;top:-5px;width:19px;height:19px;border:1px solid var(--accL);opacity:.5;animation:krPulse 2.4s var(--eo) infinite}
@keyframes krPulse{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.5);opacity:0}}
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
.light .mh{--mh-ink:#0d141a;--mh-mute:#55626b;--mh-line:rgba(13,20,26,.16);--mh-accent:#a8540c;--mh-display:'Nunito Sans',system-ui,sans-serif;--mh-sans:'Nunito',system-ui,sans-serif;--mh-mono:'IBM Plex Mono',ui-monospace,monospace}
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
html body .ftr .fcv{opacity:.13!important}
.stat .v small{font-size:.42em;letter-spacing:0;margin-left:.12em;color:var(--accL);font-weight:400}
.kr-ir h3{font-size:clamp(34px,3vw,52px)}
.kr-ir .lab{color:var(--stone)}
.kr-ir+.kr-ir{border-top:0}
/* founder feature (BV: a typographic block, bio inline) */
.kr-fd{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);padding:28px 0 clamp(56px,6vw,88px);border-top:1px solid var(--hairD)}
.kr-fd .lab{display:block;margin-bottom:14px;color:var(--accD)}
.kr-fd h3{font-family:var(--disp);font-weight:300;font-size:clamp(30px,2.6vw,46px);line-height:1.08;letter-spacing:-.025em;margin:0 0 12px}
.kr-fd .kr-fdr{margin:0;color:var(--stoneD);font-size:15px}
.kr-fd p{margin:0 0 14px;max-width:62ch;font-size:16.5px;line-height:1.6}
.kr-fd p:last-child{margin-bottom:0}
@media (max-width:860px){.kr-fd{grid-template-columns:1fr;row-gap:20px}}
.light .mh-label{color:#55626b}
'''


R["seen"] = r'''<script>try{if(sessionStorage.getItem("krc-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

MARK = ('<svg class="krm" viewBox="0 0 36 36" aria-hidden="true"><rect width="36" height="36" fill="#eb8723"/>'
        '<g fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round"><path d="M6 13c5-4 9 4 14 0s8-3 10-1"/>'
        '<path d="M6 19c5-4 9 4 14 0s8-3 10-1"/><path d="M6 25c5-4 9 4 14 0s8-3 10-1"/></g></svg>')

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M14 34c13-10 24 10 37 0s22-8 30-3M14 50c13-10 24 10 37 0s22-8 30-3M14 66c13-10 24 10 37 0s22-8 30-3"/></svg>
    <div class="wm"><span>KINETIC RIVER</span></div>
  </div>
  <span class="lab pl">Flow cytometry &middot; Mountain View, California</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Kinetic River, home">' + MARK + '<span class="bt"><b>Kinetic River</b><i>Where Light Meets Life</i></span></a>'

NAV = [("story", "Technology"), ("instruments", "Instruments"), ("services", "Services"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Based in</span><br>Mountain View, California</div>
    <div><span class="lab">Email</span><br>GVacca@KineticRiver.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Kinetic River</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Kinetic River";\nvar PK="krc";'

R["content"] = r'''var FONTS=['300 1em "Nunito Sans"','400 1em "Nunito Sans"','600 1em "Nunito Sans"','400 1em "Nunito"','600 1em "Nunito"','400 1em "IBM Plex Mono"'];
var MAIL="GVacca@KineticRiver.com";
var KR="https://www.kineticriver.com/";
var GRANT="https://reporter.nih.gov/project-details/11370630";
/* team: names and titles exactly as on kineticriver.com/our-team/ and /about/; summaries condensed from their bios there */
var PEOPLE=[
 {name:"Alan Chin, PhD",title:"Principal Scientist",sum:"Leads R&D on Time-Resolved Flow Cytometry, from instrument design to experiment planning and data analysis."},
 {name:"Daniel Estoque, BS",title:"Senior Mechanical Engineer",sum:"Nine years engineering flow cytometry and hematology instruments at Beckman-Coulter."},
 {name:"Rich Hanson, MS",title:"Senior R&D Technician",sum:"Responsible for all aspects of instrument prototyping."},
 {name:"Kennan LaneLutter, BS",title:"Laboratory Technician",sum:"Sample preparation, assay execution and data analysis across our instrument projects."},
 {name:"Orin Laney, MS",title:"Electronics Engineer",sum:"Low-noise analog design, RF instrumentation and I/O interfacing; a licensed professional engineer in California."},
 {name:"Hannu Lehtimäki, MS",title:"Design Software Specialist",sum:"Mechanical and optomechanical design, with the system design software he developed at BeamWise."},
 {name:"Andrea Zanella",title:"Senior Account Manager for Europe",sum:"Formerly VP General Manager of BD Biosciences in Italy and Greece."},
 {name:"Bonnie Sun, BS",title:"Office Administrator",sum:"Coordination, logistics, accounting support and office administration."}
];
var ADVISORS=[
 {name:"Rosemary Coates, MBA",title:"Advisor, Reshoring Institute",sum:"President of Blue Silk Consulting and Executive Director of the Reshoring Institute."},
 {name:"Richard McKay, PhD",title:"Advisor, Full Spectrum Scientific",sum:"President and founder of Full Spectrum Scientific; formerly at GE Healthcare."},
 {name:"Sean K. Murphy, MS",title:"Advisor, SKMurphy",sum:"CEO of SKMurphy, Inc., a Silicon Valley advisory firm for market creation."},
 {name:"Ashley Sloat, PhD",title:"Advisor, Aurora Consulting",sum:"President and Director of Patent Strategy at Aurora Consulting LLC."}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2026-11-12",s:"Kinetic River",t:"Year 2 of Arno’s Commercial Readiness Program",u:KR+"year-2-of-arnos-commercial-readiness-program/"},
 {d:"2026-10-28",s:"Kinetic River",t:"KRC returns to Taiwan",u:KR+"krc-returns-to-taiwan/"},
 {d:"2026-05-15",s:"Kinetic River",t:"Delaware is installed in Taipei",u:KR+"delaware-is-installed-in-taipei/"},
 {d:"2026-04-23",s:"Kinetic River",t:"SBIR reauthorization",u:KR+"sbir-reauthorization/"},
 {d:"2025-07-15",s:"NIH RePORTER",t:"NIGMS Commercialization Readiness Program award: Compensation-Free Flow Cytometer with Expanded Reagent Choices and Reduced Manufacturing Costs",u:GRANT}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["Nanoparticle analysis services","Send us your samples and stains; we run them on the Delaware Flow NanoCytometer and return a detailed report. Exosomes, EVs, LNPs, VLPs and bacteria, from culture medium, plasma, urine or purified EV preps.",'<circle cx="28" cy="28" r="20"/><circle class="a" cx="28" cy="28" r="4"/><circle cx="16" cy="20" r="2.5"/><circle cx="40" cy="34" r="3"/><circle cx="20" cy="38" r="2"/>'],
  ["Engineering consulting","Independent design reviews and technical due diligence in mergers and acquisitions, on optics, flowcells and detection for flow cytometers, hematology and particle analyzers.",'<path d="M6 44h44"/><path d="M14 44V24l14-12 14 12v20"/><path class="a" d="M4 30h48"/>'],
  ["Expert witness and training","Testimony in patent and other litigation on flow cytometry, cell sorting, particle analysis and separation, and training seminars for teams.",'<path d="M28 6v44M12 14h32"/><path d="M12 14L4 32h16zM44 14l-8 18h16z"/><path class="a" d="M4 32a8 4 0 0 0 16 0M36 32a8 4 0 0 0 16 0"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function mh(label,L){return '<div class="mh-group"><p class="mh-label">'+label+'</p><ul class="mh-list">'+L.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div>'}
function team(){return '<div class="kr-fd"><div><span class="lab">Founder &amp; CEO</span><h3>Giacomo Vacca, Ph.D.</h3><p class="kr-fdr">Volwiler Research Fellow · Optica and SPIE Senior Member</p></div>'+
  '<div><p>Giacomo Vacca earned his B.A. and M.A. in Physics from Harvard University and his Ph.D. in Applied Physics from Stanford University. His career spans the life sciences, in vitro diagnostics, microfluidics, lasers, telecommunications and the energy sector.</p>'+
  '<p>Laser Rastering, a technology he conceived and developed, boosted flow cytometry analysis throughput by a factor of 30. He holds 82 issued patents, and has helped bring flow cytometers, hematology analyzers, solid-state lasers and integrated waveguide optical components to market.</p></div></div>'+
  '<div class="mh">'+mh("Our team",PEOPLE)+mh("Advisors",ADVISORS)+'</div>'}
var INSTR=[
 ["Delaware","Flow NanoCytometer®","Built for nanoparticle research: sensitive detection and characterization of exosomes, extracellular vesicles and other biological and non-biological nanoparticles.",["Up to 5 lasers, 375–640 nm","3 scatter, 6 fluorescence channels","Down to 68 nm on liposomes"]],
 ["Arno","Compensation-Free Flow Cytometer","12-color flow cytometry with only 2 lasers and 6 detectors. Fluorescence lifetime separates two fluors in each detector, so no compensation or spectral unmixing is needed.",["Time-Resolved Flow Cytometry","Spillover ≤ 5% on all channels","No compensation controls"]],
 ["Potomac","Modular Flow Cytometer","A completely customizable architecture for research that one-size systems can’t serve: exotic light sources, extreme flow rates, custom flow cells, novel optical setups.",["1 to 8 lasers","4 to 20 detection channels","Installed at the National Cancer Institute"]],
 ["Danube","Fluorescence Lifetime Flow Cytometer","Direct, time-domain lifetime analysis on a cell-by-cell basis, bringing many of the benefits of FLIM to the throughput of flow cytometry.",["Up to 1,500 cells per second","Excitation events of 4 ns or less","Subnanosecond resolution"]]
];
function instr(){return INSTR.map(function(r,i){return '<div class="prog-row kr-ir"><div><span class="lab" style="margin-bottom:12px">0'+(i+1)+' · '+esc(r[1])+'</span><h3>'+esc(r[0])+'</h3></div>'+
  '<p>'+esc(r[2])+'</p><div class="meta">'+r[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></div>'}).join("")}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Flow cytometry · Mountain View, California</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Where light</span><span class="l">meets <em>life.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kinetic River designs and builds flow cytometers for life science research and biomedical diagnostics, from ultrasensitive nanoparticle detection to compensation-free analysis by fluorescence lifetime.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="#instruments" data-to="instruments">Instruments</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Kinetic River</span>'+
   '<p class="txt" id="mani">A flow-cytometry-focused biophotonics design and product development company, creating <em>innovative, high-value tools</em> for life science research and biomedical diagnostics.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">28<small>nm</small></span><span class="k">The smallest particles the Delaware detects, in a range that reaches 28 µm</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12</span><span class="k">Colors, compensation-free, on the Arno with 2 lasers and 6 detectors</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$7M</span><span class="k">In NIH SBIR and Commercialization Readiness awards since 2017</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Flow cytometry</span><h2 class="d3">Reading every particle <em>by its light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stream</span><span>Laser</span><span>Spillover</span><span>Lifetime</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One particle at a time.</h2><p>Sheath fluid focuses the sample into a narrow core stream, so cells, vesicles or nanoparticles cross the flow cell in single file, and each one gives its own signal.</p></article>'+
     '<article class="step"><h2>Light in, light out.</h2><p>As a particle crosses the laser it scatters light, which tells its size, and its fluorescent labels emit, which tells what it carries. The Delaware does this for particles from 28 nm to 28 µm.</p></article>'+
     '<article class="step"><h2>Colors overlap.</h2><p>Fluorophore emissions spill into each other’s detectors. Conventional instruments correct with compensation or spectral unmixing, burdensome and expensive protocols that limit the dyes a panel can use.</p></article>'+
     '<article class="step"><h2>Time tells them apart.</h2><p>The Arno adds fluorescence lifetime. Two fluors share each detector and are separated by how fast they decay, giving 12 colors from 2 lasers and 6 detectors, with no compensation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec dark2" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments</span><h2 class="d2 split">Flow cytometers for the <em>cutting edge.</em></h2></div><p data-r>Four instruments, built on modules we design ourselves: Shasta fluidics control, the Cavour flowcell monitor, the Tuolumne quad amplifier and our Panama software.</p></div>'+
   instr()+
   '<div class="bench"><div><span class="lab kick" data-r>Now: the Arno</span><p class="muted" data-r style="max-width:34ch">NIH NIGMS Commercialization Readiness Program, 2025 to 2028, to prepare the Arno for market launch.</p></div>'+
    '<div><dl>'+
     '<div><dt class="lab">Aim 1</dt><dd>Cut the cost of the Arno’s data acquisition module in half, while keeping its performance</dd></div>'+
     '<div><dt class="lab">Aim 2</dt><dd>Separate a wider range of common dyes and fluorescent proteins, with empirical lifetime data</dd></div>'+
     '<div><dt class="lab">Goal</dt><dd>Bring compensation-free cytometry to smaller research labs and flow core labs</dd></div>'+
     '<div><dt class="lab">Patents</dt><dd>A portfolio of 13 patents to date behind the Arno’s Time-Resolved Flow Cytometry</dd></div>'+
    '</dl><p class="note-s">NIH NIGMS award 5SB1GM157775, “Compensation-Free Flow Cytometer with Expanded Reagent Choices and Reduced Manufacturing Costs”.</p></div></div>'+
  '</div></section>'+
  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Our instruments and expertise, <em>at your service.</em></h2></div><p data-r>Beyond instruments, we analyze nanoparticle samples for researchers and bring decades of flow cytometry engineering to clients, counsel and teams.</p></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicists and engineers <em>who build cytometers.</em></h2></div><p data-r>Kinetic River was founded by Giacomo Vacca, who leads a team in optics, fluidics, electronics and assay science in Mountain View, with advisors in manufacturing, markets and patents.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">News from the lab</h2></div><p data-r>Funding, installations and the latest from Kinetic River.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For researchers, core labs and partners</span>'+
   '<h2 class="big split">Talk to <em>Kinetic River.</em></h2>'+
   '<p class="sub" data-r>Questions about an instrument, a sample to analyze or a project to review? Write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#instruments" data-to="instruments">See the instruments</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>897 Independence Avenue, Suite 4A</span><br><span>Mountain View, CA 94043</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Funding</span><p>NIH NIGMS, SBIR and Commercialization Readiness Program</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>897 Independence Avenue, Suite 4A<br>Mountain View, CA 94043</div>'+
   '<div class="c"><span class="lab">Instruments</span>Delaware · Arno<br>Potomac · Danube</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#instruments" data-to="instruments">Instruments</a><br><a class="ul" href="#services" data-to="services">Services</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 44" aria-hidden="true"><text x="320" y="35" text-anchor="middle" style="font-family:\'Nunito Sans\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.04em">Kinetic River</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kinetic River Corp.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Kinetic River — Flow cytometers, nanoparticle analysis and consulting",x:"Home"}}'''

R["field"] = (HERE / "kineticriver.field.js").read_text()
R["story"] = (HERE / "kineticriver.story.js").read_text()

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
(HERE / "kineticriver.src.html").write_text(out)
print("wrote", HERE / "kineticriver.src.html", len(out))
