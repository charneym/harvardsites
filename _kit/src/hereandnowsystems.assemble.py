#!/usr/bin/env python3
"""Assemble hereandnowsystems.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run: python3 _kit/src/hereandnowsystems.assemble.py && node _kit/build.js _kit/src/hereandnowsystems.src.html hereandnowsystems/index.html
Facts: stepaway.biz (home, /research, /organizations, /stand-down, /app-privacy-policy), NIH RePORTER 1R43AA031938-01A1
(abstract), 1R34AA026440, 1RC2AA019422, KTUU/Alaska's News Source 2020-09-01, ADN 2015-05-29, UAA news 2015-06.
Palette: stepaway.biz theme CSS (#15315A navy, #F04C23 red-orange) and the Step Away sunrise logo (sun yellow/orange)."""
import re, pathlib, urllib.parse
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
PHONEJS = (HERE / "hereandnowsystems.phone.js").read_text()

# the Step Away sunrise mark, redrawn (sun with rays, the red path, the stepping stones), for dark grounds
MARK_SVG = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 46 46"><defs><linearGradient id="hs" x1="0" y1="11" x2="0" y2="21" gradientUnits="userSpaceOnUse">'
            '<stop offset="0" stop-color="#fbc531"/><stop offset="1" stop-color="#f07d22"/></linearGradient></defs>'
            '<g stroke="#f5b52e" stroke-width="1.6" stroke-linecap="round">' +
            "".join('<path d="M%.2f %.2fL%.2f %.2f"/>' % ((30 + __import__("math").cos(a) * 13), (21 + __import__("math").sin(a) * 13), (30 + __import__("math").cos(a) * 18), (21 + __import__("math").sin(a) * 18))
                    for a in [__import__("math").pi + i / 8 * __import__("math").pi for i in range(9)]) +
            '</g><path d="M20 21a10 10 0 0 1 20 0z" fill="url(#hs)"/>'
            '<path d="M6 24C24 23 27 30 15 34C4 38 10 44 27 44" fill="none" stroke="#e8452c" stroke-width="3.2" stroke-linecap="round"/>'
            '<g fill="#8b97aa"><ellipse cx="12" cy="27" rx="3.4" ry="1.9"/><ellipse cx="21" cy="30" rx="3" ry="1.7"/><ellipse cx="11" cy="38" rx="3.2" ry="1.8"/><ellipse cx="20" cy="42.5" rx="3.4" ry="1.9"/></g></svg>')
MARK = "data:image/svg+xml," + urllib.parse.quote(MARK_SVG)
R = {}

R["meta"] = r'''<title>Here & Now Systems — Step Away, a private way to change drinking</title>
<meta name="description" content="Here & Now Systems, of Anchorage, Alaska, makes Step Away: a research-based smartphone system that helps people make a healthy change in their drinking.">
<meta name="theme-color" content="#0d2038">
<link rel="icon" href="''' + MARK + '''">'''

R["fonts"] = "/*@fonts Fraunces:300,300i; Lato:400,700; DM Mono:400*/"

R["root"] = r''':root{
  --ink:#0d2038;--inkr:13,32,56;--boner:247,243,236;--accr:255,160,77;--ink2:#112844;--ink3:#16304f;--deep:#081627;
  --bone:#f7f3ec;--bone2:#efe9df;--bone3:#e2d9cb;
  --stone:#a9b6c8;--stoneD:#4f5b6b;
  --acc:#d23f19;--accL:#ffa04d;--accD:#b8360f;--sun:#f6b32b;--red:#e8452c;
  --hair:rgba(247,243,236,.15);--hairD:rgba(13,32,56,.15);
  --disp:'Fraunces',Georgia,'Times New Roman',serif;
  --serif:'Fraunces',Georgia,serif;
  --sans:'Lato',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'DM Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1560px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:radial-gradient(70% 90% at 72% 60%,#14304f 0%,#0f2542 46%,#0a1a30 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand img.mk{width:38px;height:38px;flex:none;display:block}
.brand .bt{font:400 20px/1 var(--sans);letter-spacing:.005em;white-space:nowrap}
.brand .bt b{font-weight:700}
@media (max-width:860px){.brand img.mk{width:32px;height:32px}.brand .bt{font-size:18px}}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene: the Step Away path of stepping stones toward a rising sun) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:13ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa8bd;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #6a7d97;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(230px,31vh,310px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(78vh,720px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .hz{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1.1}
.scene .mt{fill:none;stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .mt2{fill:none;stroke:rgba(var(--boner),.18);stroke-width:1}
.scene .wl{fill:none;stroke:rgba(var(--boner),.12);stroke-width:1}
.scene .sky{fill:none;stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .sunb{fill:url(#hnSun)}
.scene .ray{fill:none;stroke:var(--sun);stroke-width:2;stroke-linecap:round}
.scene .refl{fill:none;stroke:rgba(246,179,43,.55);stroke-width:1.4;stroke-linecap:round}
.scene .pth{fill:none;stroke:var(--red);stroke-width:3;stroke-linecap:round}
.scene .pth0{fill:none;stroke:rgba(232,69,44,.28);stroke-width:1.2;stroke-dasharray:3 6}
.scene .st{fill:#1c3a5e;stroke:rgba(var(--boner),.55);stroke-width:1.1;transition:fill .5s,stroke .5s}
.scene .st.lit{fill:var(--sun);stroke:#ffe2a6}
.scene .wk{fill:#fff}
.scene .ld{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .dot{fill:var(--accL)}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c9d2de}
.scene text.a{fill:var(--accL)}
@media (max-width:1024px){.scene svg text{font-size:19px!important;letter-spacing:.02em!important}}
/* ===== Here & Now Systems: Step Away navy ground, warm paper, the sunrise orange and the path red as accents ===== */
.hero .hero-h{font-size:clamp(46px,6.1vw,108px);letter-spacing:-.03em;line-height:1}
@media (max-width:860px){.hero .hero-h{font-size:clamp(40px,11vw,78px)}.hero .hero-h .l{white-space:normal}}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:300}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:#fff;border-color:var(--acc)}
/* DN: statement left, stats stacked on the right */
.mani .wrap{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:clamp(40px,6vw,120px);align-items:start}
.mani .mani-in{margin:0;width:auto}
.mani .txt{font-size:clamp(28px,2.7vw,46px);max-width:26ch}
.mani .stats{margin-top:0;grid-template-columns:1fr;gap:34px}
.stat .v{font-size:clamp(46px,4.4vw,80px)}
.stat .v sup{color:var(--accL)}
.mani .stat p.k{margin:14px 0 0}
@media (max-width:960px){.mani .wrap{grid-template-columns:1fr}.mani .stats{margin-top:56px;grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.mani .stats{grid-template-columns:1fr}}
/* the app: four features */
.caps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.cap{border-top:1px solid var(--hairD);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:26px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--ink);stroke-width:1.1}
.cap svg .a{stroke:var(--accD)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2vw,32px);line-height:1.1;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stoneD);font-size:15.5px;margin:0;max-width:30ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accD)}
@media (max-width:1024px){.caps{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:48px}}
@media (max-width:560px){.caps{grid-template-columns:1fr;row-gap:40px}}
.fl{list-style:none;margin:clamp(64px,7vw,110px) 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:var(--gap);border-top:1px solid var(--hairD)}
.fl li{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:var(--gap);padding:20px 0;border-bottom:1px solid var(--hairD);align-items:baseline}
.fl li::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:right;transition:transform .4s var(--eo)}
.fl li:hover::after{transform:scaleX(1);transform-origin:left}
.fl b{font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.36;letter-spacing:-.015em}
@media (max-width:860px){.fl{grid-template-columns:1fr}.fl li{grid-template-columns:1fr;gap:6px}}
/* research programmes: rows whose rule draws on hover (DH) */
.prg{list-style:none;margin:0;padding:0;border-top:1px solid var(--hair)}
.prg li{position:relative;display:grid;grid-template-columns:minmax(0,2.4fr) minmax(0,4fr) minmax(0,5fr);gap:var(--gap);padding:clamp(26px,2.6vw,38px) 0;border-bottom:1px solid var(--hair);align-items:start}
.prg li::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:right;transition:transform .45s var(--eo)}
.prg li:hover::after{transform:scaleX(1);transform-origin:left}
.prg .lab{display:block;color:var(--stone)}
.prg .lab.a{color:var(--accL);margin-bottom:8px}
.prg h3{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2.1vw,34px);line-height:1.12;letter-spacing:-.02em;margin:0;transition:color .3s var(--eo)}
.prg li:hover h3{color:var(--accL)}
.prg p{margin:0;color:rgba(var(--boner),.78);font-size:16px;max-width:52ch}
@media (max-width:960px){.prg li{grid-template-columns:1fr;gap:10px}}
.dark .credit p i,.dark2 .credit p i{color:var(--accL)}
@media (max-width:600px){html .credit p span{white-space:normal}html .credit p i{padding:0 .35em}}
/* team: the lead, then collaborators, in the shared masthead list */
#team .lead{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:clamp(32px,5vw,96px);margin-bottom:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:clamp(28px,3vw,44px)}
#team .lead h3{font-family:var(--disp);font-weight:300;font-size:clamp(32px,3.2vw,54px);line-height:1.04;letter-spacing:-.025em;margin:0 0 12px}
#team .lead .role{display:block;color:var(--accD)}
#team .lead p{margin:0 0 16px;color:var(--stoneD);max-width:58ch}
#team .lead p:last-child{margin-bottom:0}
@media (max-width:860px){#team .lead{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.4;letter-spacing:-.015em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
.light .kick{color:var(--accD)}
html .ftr .fcv{opacity:.22!important}
html.bo-open #field{opacity:.2!important}
@media (min-width:861px){.hero::before{background:radial-gradient(46% 64% at 20% 52%,rgba(var(--inkr),.78),rgba(var(--inkr),.42) 58%,rgba(var(--inkr),0) 86%),linear-gradient(180deg,rgba(var(--inkr),.3),rgba(var(--inkr),0) 20%,rgba(var(--inkr),0) 80%,var(--ink) 100%)}}
@media (max-width:860px){html #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(44svh - 96px),rgba(0,0,0,.5) calc(44svh - 50px),transparent calc(44svh + 4px));mask-image:linear-gradient(180deg,#000 0,#000 calc(44svh - 96px),rgba(0,0,0,.5) calc(44svh - 50px),transparent calc(44svh + 4px))}html .hero{padding-top:calc(44svh + 4px)!important}html .hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 28%,rgba(var(--inkr),.12) 38%,rgba(var(--inkr),.4) 47%,rgba(var(--inkr),.75) 58%,rgba(var(--inkr),.92) 76%,var(--ink) 100%)}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("hn-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <img class="mk" src="''' + MARK + r'''" alt="" width="88" height="88" style="width:88px;height:88px">
    <div class="wm"><span>HERE &amp; NOW</span></div>
  </div>
  <span class="lab pl">Step Away · Anchorage, Alaska</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" data-to="hero" aria-label="Here & Now Systems, home"><img class="mk" src="' + MARK + '" alt="" width="38" height="38"><span class="bt"><b>Here &amp; Now</b> Systems</span></a>'

NAV = [("story", "Step Away"), ("research", "Research"), ("team", "Team"), ("news", "News")]
ARR = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
R["navmenu"] = '<nav class="nav" aria-label="Primary">\n' + "".join(
    '    <a class="nl ul" href="#%s" data-to="%s">%s</a>\n' % (k, k, v) for k, v in NAV) + '    <a class="btn" href="#contact" data-to="contact">Contact ' + ARR + r'''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>
<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/" data-to="hero">Home</a></li>
''' + "".join('    <li><a href="#%s" data-to="%s">%s</a></li>\n' % (k, k, v) for k, v in NAV) + r'''    <li><a href="#contact" data-to="contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Based in</span><br>Anchorage, Alaska</div>
    <div><span class="lab">Email</span><br>info@stepaway.biz</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Here &amp; Now Systems</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Here & Now Systems";\nvar PK="hn";'

R["content"] = r'''var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Lato"','700 1em "Lato"','400 1em "DM Mono"'];
var MAIL="info@stepaway.biz",ORG="pldulin@stepaway.biz";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-07-01",s:"NIH RePORTER · NIAAA",t:"SBIR Phase I award: integrating AI and biometric information for personalized alcohol intervention, the Step Away Alcohol Manager (SAAM)",u:"https://reporter.nih.gov/project-details/11186869"},
 {d:"2020-09-01",s:"Alaska’s News Source (KTUU)",t:"UAA team develops app to help people with struggles related to alcohol",u:"https://www.alaskasnewssource.com/2020/09/01/uaa-team-develops-app-to-help-people-with-struggles-related-to-alchohol/"},
 {d:"2018-09-01",s:"NIH RePORTER · NIAAA",t:"Can a chatbot-delivered alcohol intervention engage users and enhance outcomes over a smartphone app? Development and feasibility testing of a Step Away ‘bot’",u:"https://reporter.nih.gov/project-details/9601549"},
 {d:"2015-06",s:"University of Alaska Anchorage",t:"UAA researcher Patrick Dulin develops app to help people with alcohol abuse disorders",u:"https://www.uaa.alaska.edu/news/archive/2015/06/uaa-researcher-patrick-dulin-develops-app-to-help-people-with-alcohol-abuse-disorders.cshtml"},
 {d:"2015-05-29",s:"Anchorage Daily News",t:"Smartphone app monitors Alaska probationers’ alcoholism",u:"https://www.adn.com/crime-justice/article/smartphone-app-monitors-alaska-probationers-alcoholism/2015/05/29/"}
];'''

R["views"] = r'''/* ================= VIEWS (home only: nav items open build-out pages via _kit/lib/buildout.js; in-page CTAs scroll) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  var y=el.getBoundingClientRect().top+window.scrollY;if(el.parentNode&&el.parentNode.classList&&el.parentNode.classList.contains("pin-spacer"))y=el.parentNode.getBoundingClientRect().top+window.scrollY;
  if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();var open=document.body.classList.contains("menu-open");if(open)closeMenu();var id=a.getAttribute("data-to");setTimeout(function(){goSec(id)},open?320:0)},true);
function fdy(d){return /^\d{4}$/.test(d)?d:fd(d)}
function rowsN(list){return '<ul class="rows">'+list.map(function(n){return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><time class="lab" datetime="'+n.d+'">'+fdy(n.d)+'</time><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Tracking","Track your drinking against your goal, with feedback on how often you drink, the calories and the money it costs.",'<path d="M8 46h40"/><path class="a" d="M10 38l10-9 9 5 16-17"/><path d="M40 17h5v5"/>'],
  ["Urge strategies","New skills and strategies for dealing with urges to drink, drawn from decades of research on what works.",'<circle cx="28" cy="28" r="19"/><path class="a" d="M28 15v13l9 6"/>'],
  ["Alternate activities","Identify non-drinking activities and schedule them directly into your phone.",'<rect x="9" y="12" width="38" height="34"/><path d="M9 21h38M18 8v8M38 8v8"/><path class="a" d="M19 33l6 6 12-13"/>'],
  ["Support team","Set up a support team and share your weekly report if you want, or use Step Away entirely by yourself.",'<circle cx="20" cy="22" r="7"/><circle class="a" cx="38" cy="24" r="6"/><path d="M6 46c1-9 7-14 14-14s13 5 14 14"/><path class="a" d="M33 34c6 0 12 4 13 12"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function facts(){var F=[
  ["Who it is for","People who want to drink less or stop, mostly with mild to moderate alcohol issues"],
  ["What it costs","Free for one week, then a monthly subscription you can cancel anytime; a year costs less than one counseling session"],
  ["Where it runs","iPhone and Android, with research editions for trials"],
  ["Privacy","Data is uploaded under a hashed identifier that cannot be traced to a specific user"],
  ["For organizations","A package for employers who want Step Away in their wellness plan"],
  ["For Veterans","Stand Down, built with Veterans and VA psychologists"]];
  return '<ul class="fl" data-group>'+F.map(function(f){return '<li><span class="lab">'+f[0]+'</span><b>'+f[1]+'</b></li>'}).join("")+'</ul>'}
function programmes(){var P=[
  ["2009 · NIAAA","The LBMI-A prototype","The Location-Based Monitoring and Intervention System for Alcohol Use Disorders, pilot tested for six weeks with people drinking heavily: overall alcohol use dropped by over 50%, heavy drinking days by more than 60%."],
  ["Seattle and Palo Alto VA","Step Away with Veterans","Studies led by VA researchers found that Step Away helped Veterans cut their drinking by around half, and most stayed engaged with the app up to six months after download."],
  ["2018 · NIAAA","The Step Away ‘bot’","A state-of-the-art version of the app, tested against a Step Away chatbot that holds a conversation with the user, to learn how to keep people engaged."],
  ["2026 · NIAAA SBIR Phase I","Step Away Alcohol Manager (SAAM)","Multi-agent generative AI for empathic, real-time conversations at high-risk times, with facial-scan biometrics of stress and sleep, tested with 20 people who meet AUDIT criteria for hazardous drinking."]];
  return '<ul class="prg" data-group>'+P.map(function(p,i){return '<li><div><span class="lab a">0'+(i+1)+'</span><span class="lab">'+esc(p[0])+'</span></div><h3>'+esc(p[1])+'</h3><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function team(){
  return '<div class="lead" data-group><div><h3>Dr. Patrick Dulin</h3><span class="lab role">Director, Here &amp; Now Systems</span></div>'+
   '<div><p>Dr. Dulin conceived the idea for Step Away in 2008 and has led its research and development ever since. He is a Professor in the Clinical and Community Psychology Ph.D. program at the University of Alaska Anchorage.</p>'+
   '<p>A licensed psychologist and researcher, he has been principal investigator on numerous national-level grants, including the NIAAA awards behind every version of Step Away.</p></div></div>'+
   '<section class="mh"><div class="mh-group"><p class="mh-label">Research collaborators</p><ul class="mh-list">'+
    '<li><div class="mh-row"><span class="mh-name">Daniel Blonigen</span><span class="mh-role">VA researcher</span><span class="mh-sum">Principal investigator on the studies of Step Away with Veterans.</span></div></li>'+
    '<li><div class="mh-row"><span class="mh-name">Eric Hawkins</span><span class="mh-role">VA researcher</span><span class="mh-sum">Principal investigator on the studies of Step Away with Veterans.</span></div></li>'+
   '</ul></div></section>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Digital health for alcohol use · Anchorage, Alaska</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A private way</span><span class="l">to change</span><span class="l"><em>your drinking.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Here &amp; Now Systems makes Step Away, a smartphone system built on decades of research that gives people the tools, tracking and immediate help to drink less or stop.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="#research" data-to="research">The research</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Step Away</span>'+
   '<p class="txt" id="mani">Only about one in ten people diagnosed with alcohol use disorder receives any treatment. Step Away puts evidence-based help on the phone already in their pocket: <em>private, independent, and always there.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50–60<sup>%</sup></span><p class="k">Reductions in alcohol use in four pilot trials of Step Away</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6<sup>months</sup></span><p class="k">Most Veterans in the VA studies stayed engaged with the app up to six months</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><p class="k">The year Dr. Patrick Dulin conceived Step Away; NIAAA funded the first prototype</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Step Away works</span><h2 class="d3">One step, <em>then the next.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Assess</span><span>Patterns</span><span>Goal</span><span>Check in</span><span>Progress</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Is drinking a problem, and how serious?</h2><p>Step Away starts by helping you understand whether you have a drinking problem, and how severe it is.</p></article>'+
     '<article class="step"><h2>Your patterns, and your triggers.</h2><p>It gets to know your drinking over time: your specific patterns and triggers, how often you drink, and what it costs you in calories and money.</p></article>'+
     '<article class="step"><h2>One goal: drink less, or stop.</h2><p>You set an overall drinking goal, either to drink less or to stop altogether, and learn new strategies for dealing with urges to drink.</p></article>'+
     '<article class="step"><h2>Help at the hard moments.</h2><p>Regular check-ins, daily or less often, and support during the high-risk times you define yourself, whether that is Friday nights or the end of the workday.</p></article>'+
     '<article class="step"><h2>A weekly report on your progress.</h2><p>Every week, a report on your progress that you can share if you want, keeping you accountable and on target for your goal.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="app" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The app</span><h2 class="d2 split">A personal assistant <em>for changing drinking.</em></h2></div><p data-r>Step Away is a stand-alone, interactive app that gives you the structure to stop drinking or reduce to a safer level, without a meeting, a group or a counselor. Check in every day or once a week; it adapts to you.</p></div>'+
   caps()+facts()+
  '</div></section>'+
  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Research behind <em>every version.</em></h2></div><p data-r>Step Away has been the focus of research grants from the NIAAA, the VA and New Zealand’s Health Research Council. Users found it, on average, “very to extremely helpful” in changing their drinking.</p></div>'+
   programmes()+
   '<div class="credit" data-r><span class="lab">Research funding</span><p><span>National Institute on Alcohol Abuse and Alcoholism</span> <i>·</i> <span>VA Health Science Research and Development Service</span> <i>·</i> <span>Health Research Council of New Zealand</span></p></div>'+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by <em>a psychologist.</em></h2></div><p data-r>Step Away has been improved continually with input from users and from psychologists around the world, and studied with addiction specialists at the VA.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">In the <em>news.</em></h2></div><p data-r>In July 2026 the NIAAA awarded Here &amp; Now Systems an SBIR Phase I grant of $306,746 to build the Step Away Alcohol Manager.</p></div>'+
   rowsN(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Users, organizations and research partners</span>'+
   '<h2 class="big split">Step away, <em>starting here.</em></h2>'+
   '<p class="sub" data-r>Questions about Step Away, a package for your organization, or a research collaboration: write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Here &amp; Now '+ARR+'</a><a class="btn" href="https://apps.apple.com/us/app/step-away-alcohol-help/id688669242" target="_blank" rel="noopener">Step Away on the App Store</a></div>'+
   '<div class="ctc2"><div><span class="lab">Based in</span><p><span>Here &amp; Now Systems LLC</span><br><span>Anchorage, Alaska</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Organizations</span><p><a class="ul" href="mailto:'+ORG+'">'+ORG+'</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Here &amp; Now Systems LLC<br>Anchorage, Alaska</div>'+
   '<div class="c"><span class="lab">What we make</span>Step Away, a research-based smartphone system for changing drinking</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Step Away</a><br><a class="ul" href="#research" data-to="research">Research</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="https://stepaway.biz/" target="_blank" rel="noopener">stepaway.biz</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 620 44" aria-hidden="true"><text x="310" y="36" text-anchor="middle" style="font-family:Lato,system-ui,sans-serif;font-weight:400;font-size:46px;letter-spacing:.01em">Here &amp; Now Systems</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Here &amp; Now Systems LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Here & Now Systems — Step Away, a private way to change drinking",x:"Home"}}'''

R["field"] = PHONEJS + r'''
/* ================= HERO FIELD: the product. The phone (pre-painted once per size) stands before a low dawn glow; each frame
   adds a slow float and the gauge knob, which eases down from the red end of the scale into the yellow as the hero
   arrives, then rests with a slight breath. No pointer response (CZ). */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false,tK=null;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oPh=null;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){var eb=document.querySelector(".hero .eyebrow"),et=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.44;if(!(et>200))et=h*.44;
      var U=Math.min(et-14,w*1.05),s=Math.max(.2,(U-140)/704);return {mob:mob,s:s,cx:w*.5,cy:86+352*s,U:U}}
    var s2=Math.min(h*.64/730,cw*.30/380,1.05);return {mob:mob,s:s2,cx:side+cw*.74,cy:Math.max(h*.5,110+352*s2)}
  }
  function build(){var s=G.s;oPh=document.createElement("canvas");oPh.width=Math.round(1000*s*dpr);oPh.height=Math.round(1000*s*dpr);
    var g=oPh.getContext("2d");g.setTransform(dpr*s,0,0,dpr*s,0,0);PHONE.paint(g)}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?20:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.55+.45*dim):"";
    var s=G.s,par=G.mob?0:-SP.v*h*.05,fl=RM?0:Math.sin(t*.55)*4*Math.min(1,s+.2);
    var ox=G.cx-500*s,oy=G.cy-480*s+par+fl+(1-e)*18;
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    /* the dawn: a low warm glow rising behind the phone, eased out over a long radius */
    var gx=G.cx+30*s,gy=G.cy+(G.mob?80:250)*s+par,gr=G.mob?Math.max(40,Math.min(760*s,G.U-gy+20)):760*s;
    var hg=c.createRadialGradient(gx,gy,0,gx,gy,gr);hg.addColorStop(0,"rgba(240,120,46,.34)");hg.addColorStop(.25,"rgba(236,128,52,.20)");hg.addColorStop(.5,"rgba(210,110,60,.08)");hg.addColorStop(.75,"rgba(160,90,70,.025)");hg.addColorStop(1,"rgba(160,90,70,0)");
    c.fillStyle=hg;c.fillRect(gx-gr,gy-gr,gr*2,gr*2);
    var hg2=c.createRadialGradient(gx,gy-60*s,0,gx,gy-60*s,300*s);hg2.addColorStop(0,"rgba(255,196,92,.22)");hg2.addColorStop(.6,"rgba(255,180,80,.05)");hg2.addColorStop(1,"rgba(255,180,80,0)");
    c.fillStyle=hg2;c.fillRect(gx-300*s,gy-360*s,600*s,600*s);
    c.drawImage(oPh,ox,oy,1000*s,1000*s);
    /* the knob: down from the red into the yellow, then a slow breath */
    if(tK===null&&e>.05)tK=t;var k=tK===null?0:sm((t-tK-.6)/3.2);
    var u=RM?.32:.82-.5*k+(k>=1?Math.sin((t-tK)*.5)*.012:0);
    var P=PHONE.knob(u),px=ox+P[0]*s,py=oy+P[1]*s,kr=14*s;
    c.save();c.shadowColor="rgba(0,0,0,.25)";c.shadowBlur=6*s;c.shadowOffsetY=2*s;c.fillStyle="#fff";c.beginPath();c.arc(px,py,kr,0,6.283);c.fill();c.restore();
    var si=Math.min(4,Math.floor(u*5));c.strokeStyle=PHONE.seg[si];c.lineWidth=4.5*s;c.beginPath();c.arc(px,py,kr-2.5*s,0,6.283);c.stroke();
    if(G.mob){c.save();c.globalCompositeOperation="destination-out";var fg=c.createLinearGradient(0,G.U-52,0,G.U+70);fg.addColorStop(0,"rgba(0,0,0,0)");fg.addColorStop(.5,"rgba(0,0,0,.5)");fg.addColorStop(1,"rgba(0,0,0,1)");c.fillStyle=fg;c.fillRect(0,G.U-52,w,h);c.restore()}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){size()});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();'''

R["story"] = r'''/* the story scene, one continuous drawing in the Step Away mark's own terms: a red path of stepping stones that winds from
   the foreground to the horizon, below Alaskan ridgelines, toward a sun that rises as the steps go by. Each step lights its
   two stones and a walker moves along the path; a label marks the step. */
var HN_P="M92 548 C250 528 300 500 214 470 C130 442 196 410 318 400 C420 392 440 360 372 344 C318 332 372 312 470 306";
function scene(){
  var sky="",wl="",rays="",st="";
  for(var i=0;i<9;i++){var y=290-i*26;sky+='<path class="sky" d="M30 '+y+'H690"/>'}
  for(var j=0;j<16;j++){var yy=308+Math.pow(j,1.55)*4.2;wl+='<path class="wl" d="M'+(40-j*4)+' '+yy.toFixed(1)+'H'+(680+j*4)+'"/>'}
  for(var r=0;r<11;r++){var a=Math.PI+(r+.5)/11*Math.PI;rays+='<path class="ray" d="M'+(500+Math.cos(a)*80).toFixed(1)+' '+(300+Math.sin(a)*80).toFixed(1)+'L'+(500+Math.cos(a)*104).toFixed(1)+' '+(300+Math.sin(a)*104).toFixed(1)+'"/>'}
  for(var k=0;k<10;k++)st+='<ellipse class="st" id="hnS'+k+'" cx="0" cy="0" rx="10" ry="4"/>';
  /* labels: [line 1, line 2, leader end x, leader end y, text x, anchor]; each placed in clear water beside its stones (CY) */
  var L=[["SCREENING","SEVERITY",150,-14,160,"start"],["PATTERNS","AND TRIGGERS",104,-6,114,"start"],["A GOAL","LESS, OR NONE",118,30,128,"start"],["CHECK-INS","HIGH-RISK TIMES",-70,-36,-80,"end"],["WEEKLY","REPORT",150,22,160,"start"]],lb="";
  L.forEach(function(l,i){lb+='<g id="hnL'+i+'"><path class="ld" d="M0 0 L'+(l[2]-(l[4]>0?12:-12))+' '+l[3]+' H'+l[2]+'"/><circle class="dot" cx="0" cy="0" r="3"/>'+
    '<text x="'+l[4]+'" y="'+(l[3]-4)+'" class="a" text-anchor="'+l[5]+'">'+l[0]+'</text><text x="'+l[4]+'" y="'+(l[3]+16)+'" text-anchor="'+l[5]+'">'+l[1]+'</text></g>'});
  return '<svg viewBox="20 120 680 450" aria-hidden="true"><defs>'+
   '<radialGradient id="hnSun" cx="500" cy="300" r="72" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd36b"/><stop offset=".7" stop-color="#f7a52a"/><stop offset="1" stop-color="#ef7a22"/></radialGradient>'+
   '<radialGradient id="hnGlow" cx="500" cy="300" r="300" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f39a3a" stop-opacity=".38"/><stop offset=".45" stop-color="#e07a3a" stop-opacity=".1"/><stop offset="1" stop-color="#e07a3a" stop-opacity="0"/></radialGradient>'+
   '<clipPath id="hnSky"><rect x="0" y="0" width="720" height="300"/></clipPath></defs>'+
   '<ellipse id="hnG" cx="500" cy="300" rx="320" ry="240" fill="url(#hnGlow)"/>'+
   sky+
   '<g clip-path="url(#hnSky)"><g id="hnSun1"><circle class="sunb" cx="500" cy="300" r="62"/>'+rays+'</g></g>'+
   '<path class="mt2" d="M30 300 L80 276 L118 286 L176 240 L214 262 L262 226 L318 270 L352 258 L384 280 L420 268 L470 290 L520 282 L560 262 L600 276 L646 250 L690 284"/>'+
   '<path class="mt" d="M30 300 L64 288 L104 296 L150 270 L190 290 L236 280 L290 298 L330 292 L380 300"/>'+
   '<path class="mt" d="M540 300 L590 286 L628 294 L664 280 L690 292"/>'+
   '<path class="hz" d="M30 300H690"/>'+
   '<g id="hnRefl"><path class="refl" d="M452 312H548"/><path class="refl" d="M466 324H534"/><path class="refl" d="M478 338H522"/><path class="refl" d="M488 354H512"/></g>'+
   wl+
   '<path class="pth0" d="'+HN_P+'"/><path class="pth" id="hnP" d="'+HN_P+'"/>'+st+
   '<circle class="wk" id="hnW" cx="0" cy="0" r="4.5"/>'+lb+
  '</svg>';
}
function storyDraw(svg){
  var P=$("#hnP",svg),T=P.getTotalLength(),S=[],LB=[],U=[.04,.12,.22,.31,.42,.52,.63,.73,.85,.95];
  for(var k=0;k<10;k++){var e=$("#hnS"+k,svg),q=P.getPointAtLength(U[k]*T),sc=1.25-.75*U[k];e.setAttribute("cx",q.x.toFixed(1));e.setAttribute("cy",q.y.toFixed(1));e.setAttribute("rx",(12*sc).toFixed(1));e.setAttribute("ry",(4.6*sc).toFixed(1));S.push(e)}
  for(var i=0;i<5;i++){var g=$("#hnL"+i,svg),m=P.getPointAtLength(((U[2*i]+U[2*i+1])/2)*T);g.setAttribute("transform","translate("+m.x.toFixed(1)+" "+m.y.toFixed(1)+")");LB.push(g)}
  var sun=$("#hnSun1",svg),gl=$("#hnG",svg),rf=$("#hnRefl",svg),wk=$("#hnW",svg);
  return function(p,b){
    if(!P.isConnected)return;
    svg.style.opacity=(.25+.75*b).toFixed(3);
    var reach=Math.min(1,.06+p*.92);
    P.style.strokeDasharray=T;P.style.strokeDashoffset=(T*(1-reach)).toFixed(1);
    S.forEach(function(e,k){var on=U[k]<=reach+.005;if(on!==e.classList.contains("lit"))e.classList.toggle("lit",on)});
    var w=P.getPointAtLength(reach*T);wk.setAttribute("cx",w.x.toFixed(1));wk.setAttribute("cy",(w.y-5).toFixed(1));
    var rise=seg(p,0,1);sun.setAttribute("transform","translate(0 "+(96*(1-rise)).toFixed(1)+")");
    gl.style.opacity=(.35+.65*rise).toFixed(3);rf.style.opacity=(.15+.85*rise).toFixed(3);
    var W5=[[-.1,0,.16,.22],[.2,.26,.36,.42],[.4,.46,.56,.62],[.6,.66,.76,.82],[.8,.86,2,3]];
    LB.forEach(function(g,k){var q=W5[k];g.style.opacity=(seg(p,q[0],q[1])*(1-seg(p,q[2],q[3]))).toFixed(3)});
  };
}'''

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
# Firelight colours that live outside the regions, mapped onto the Step Away palette
for a, b in [(".rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}", ".rail span{color:#9aa8bd}.rail span::before{background:var(--ink2);border-color:#6a7d97}"),
             (".scene text{fill:#c2b6a4}", ".scene text{fill:#c9d2de}"),
             (".fieldbg{background:#120e0b}", ".fieldbg{background:#0d2038}"),
             ("calc(34svh - 130px)", "calc(44svh - 96px)"), ("rgba(18,14,11,.12)", "rgba(13,32,56,.12)"), ("#8a2a1a", "#b8360f")]:
    if a not in out: raise SystemExit("missing: " + a)
    out = out.replace(a, b)
left = [k for k in re.findall(r"<R:([a-z0-9]+)>", out) if k not in R]
if left:
    print("kept from firelight:", sorted(set(left)))
out = re.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update: nav items open build-out pages
(HERE / "hereandnowsystems.src.html").write_text(out)
print("wrote", HERE / "hereandnowsystems.src.html", len(out))
