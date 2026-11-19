#!/usr/bin/env python3
"""Assemble preserver-tech.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run: python3 _kit/src/preserver-tech.assemble.py && node _kit/build.js src/preserver-tech.src.html preserver-tech/index.html"""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Preserver Tech — Translating innovation into practical solutions</title>
<meta name="description" content="Preserver Tech LLC, a science and technology startup in Portsmouth, Virginia, is developing MucoRegen, a cost-effective gelatin-based matrix for gingival regeneration, supported by an NIH/NIDCR STTR Phase I award.">
<meta name="theme-color" content="#141414">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23141414'/%3E%3Cpath d='M32 9L52 20.5V43.5L32 55L12 43.5V20.5Z' fill='%23f4f1ec'/%3E%3Cpath d='M12 20.5L32 32L52 20.5M32 32V55' fill='none' stroke='%23141414' stroke-width='3'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Newsreader:300,300i; Instrument Sans:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#141414;--inkr:20,20,20;--boner:244,241,236;--accr:200,20,30;--ink2:#1b1a1a;--ink3:#242121;--deep:#0d0d0d;
  --bone:#f4f1ec;--bone2:#ebe6df;--bone3:#ddd6cc;
  --stone:#a5a19c;--stoneD:#5f5a55;
  --acc:#c8141e;--accL:#ec5446;--accD:#a3101a;
  --hair:rgba(244,241,236,.14);--hairD:rgba(20,20,20,.16);
  --disp:'Newsreader',Georgia,'Times New Roman',serif;
  --serif:'Newsreader',Georgia,serif;
  --sans:'Instrument Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#0f1013 0%,#24252b 40%,#6d4b3b 58%,#1c1a17 70%,#141414 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.cube{width:34px;height:38px;flex:none;overflow:visible}
.brand svg.cube .f{fill:currentColor}.brand svg.cube .e{fill:none;stroke:var(--ink);stroke-width:2.4;stroke-linejoin:round}
.brand .bt{font:500 19px/1 var(--sans);letter-spacing:.01em;white-space:nowrap}
.brand .wt{font:400 10.5px/1.25 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--stone);max-width:7.5em}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:13ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9a9893;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #6a6863;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(230px,31vh,310px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.025em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene svg *{vector-effect:non-scaling-stroke}
.scene .bn{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.2}
.scene .bnf{fill:none;stroke:rgba(var(--boner),.2);stroke-width:1}
.scene .hat{fill:none;stroke:rgba(var(--boner),.075);stroke-width:1}
.scene .crown+.hat{stroke:rgba(var(--boner),.16)}
.scene .crown{fill:url(#ptEn);stroke:rgba(var(--boner),.7);stroke-width:1.3}
.scene .root{fill:#3a3127;stroke:rgba(var(--boner),.55);stroke-width:1.2}
.scene .gum{fill:var(--ink2)}
.scene .gumt{fill:rgba(var(--accr),.13)}
.scene .gm{fill:none;stroke:rgba(236,84,70,.85);stroke-width:1.4}
.scene .mgj{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1;stroke-dasharray:2 6}
.scene .acc{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .accf{fill:var(--accL)}
.scene .graft{fill:url(#ptPore);stroke:var(--accL);stroke-width:1.4}
.scene .ring{fill:var(--ink);stroke:rgba(var(--boner),.7);stroke-width:1.3}
.scene .mac{fill:#0e0e0e;stroke:rgba(var(--boner),.55);stroke-width:1.1}
.scene .mic{fill:#0e0e0e;stroke:rgba(var(--boner),.35);stroke-width:.9}
.scene .wall{fill:rgba(244,241,236,.07)}
.scene .cell{fill:rgba(236,84,70,.9)}
.scene .nuc{fill:#2a0b0d}
.scene .ld{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c9c5bf}
.scene text.a{fill:var(--accL)}
@media (max-width:1024px){.scene svg text{font-size:23px!important;letter-spacing:.06em!important}}
/* ===== Preserver Tech additions ===== */
.hero .hero-h{font-size:clamp(46px,6.1vw,112px);letter-spacing:-.03em;line-height:1}
@media (max-width:860px){.hero .hero-h{font-size:clamp(40px,11.4vw,80px)}.hero .hero-h .l{white-space:normal}}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:300}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--bone)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:#fff;border-color:var(--accD)}
.stat .v{font-size:clamp(54px,5.6vw,100px)}
.stat .v sup{color:var(--accL)}
/* what we do: four capabilities */
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
/* programme (pipeline) */
.prog-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,5fr) minmax(0,3fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);border-bottom:1px solid var(--hair);position:relative}
.prog-row::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prog-row:hover::after{transform:scaleX(1)}
.prog-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(34px,3.2vw,54px);line-height:1;letter-spacing:-.03em;margin:0}
.prog-row h3 em{color:var(--accL)}
.prog-row p{margin:0;color:var(--stone);font-size:16px;max-width:52ch}
.prog-row .lab{display:block}
.prog-row .meta{display:flex;flex-direction:column;gap:8px}
.stages{list-style:none;margin:clamp(40px,4.6vw,64px) 0 0;padding:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));position:relative}
.stages::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.stages .fill{position:absolute;left:0;top:4px;height:1px;width:70%;background:var(--accL);transform-origin:left}
.stages li{position:relative;padding:22px 16px 0 0;font-size:14.5px;line-height:1.45;color:var(--stone)}
.stages li::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;background:var(--ink2);border:1px solid #6a6863}
.stages li.done::before,.stages li.now::before{background:var(--accL);border-color:var(--accL)}
.stages li.now::after{content:"";position:absolute;left:-5px;top:-5px;width:19px;height:19px;border:1px solid var(--accL);opacity:.5;animation:ptPulse 2.4s var(--eo) infinite}
@keyframes ptPulse{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.5);opacity:0}}
.stages b{display:block;font:400 10.5px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--bone);margin-bottom:6px}
.stages li.next b{color:var(--stone)}
.bench{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:var(--gap);margin-top:clamp(56px,6vw,96px)}
.bench dl{margin:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:var(--gap)}
.bench dl>div{padding:18px 0 20px;border-top:1px solid var(--hair)}
.bench dt{margin-bottom:6px}
.bench dd{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.6vw,25px);line-height:1.3;letter-spacing:-.015em}
.bench .note-s{margin-top:18px}
@media (max-width:1024px){.prog-row{grid-template-columns:1fr 1fr;row-gap:18px}.prog-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}.bench{grid-template-columns:1fr}}
@media (max-width:860px){.stages{grid-template-columns:1fr;row-gap:0}.stages::before{left:4px;right:auto;top:0;bottom:0;width:1px;height:auto}.stages .fill{left:4px;width:1px;height:70%;top:0}.stages li{padding:0 0 22px 30px}.prog-row{grid-template-columns:1fr}}
@media (max-width:560px){.bench dl{grid-template-columns:1fr}}
/* team: refined text cards (no portraits published) */
.ppl{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
.ppl li{position:relative;border-top:1px solid var(--hair);padding:26px 0 8px;display:flex;flex-direction:column}
.ppl li::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.ppl li:hover::before{transform:scaleX(1)}
.ppl .lab{display:block;margin-bottom:18px}
.ppl h3{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.5vw,42px);line-height:1.06;letter-spacing:-.025em;margin:0 0 12px}
.ppl .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL);margin-bottom:16px}
.ppl p{color:var(--stone);font-size:15.5px;margin:0 0 18px;max-width:34ch}
.ppl a.ml{margin-top:auto;align-self:flex-start;font:400 13px/1.5 var(--mono);letter-spacing:.02em;color:var(--bone);padding:6px 0}
@media (max-width:860px){.ppl{grid-template-columns:1fr;row-gap:34px}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.6vw,25px);line-height:1.35;letter-spacing:-.015em}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
.lede-s{max-width:60ch}
.grant{display:flex;gap:10px 28px;flex-wrap:wrap;margin-top:22px}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("pvt-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

CUBE = '<path class="f" d="M17 1.5L32.5 10.5V28.5L17 37.5L1.5 28.5V10.5Z"/><path class="e" d="M1.5 10.5L17 19.5L32.5 10.5M17 19.5V37.5"/>'

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M48 6L84 27V69L48 90L12 69V27Z"/><path d="M12 27L48 48L84 27M48 48V90"/></svg>
    <div class="wm"><span>PRESERVER TECH</span></div>
  </div>
  <span class="lab pl">Science &amp; technology · Portsmouth, Virginia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Preserver Tech, home"><svg class="cube" viewBox="0 0 34 39" aria-hidden="true">' + CUBE + '</svg><span class="bt">Preserver Tech</span></a>'

NAV = [("story", "Technology"), ("pipeline", "Pipeline"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Office</span><br>Portsmouth, Virginia</div>
    <div><span class="lab">Email</span><br>lobat.tayebi@gmail.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Preserver Tech</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Preserver Tech";\nvar PK="pvt";'

R["content"] = r'''var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Instrument Sans"','500 1em "Instrument Sans"','400 1em "IBM Plex Mono"'];
var MAIL="lobat.tayebi@gmail.com";
var TEL="530-219-7645";
var GRANT="https://reporter.nih.gov/project-details/11407730";
/* people: names and titles exactly as on preservertech.com (Contact); no portraits are published */
var PEOPLE=[
 {name:"Lobat Tayebi, Ph.D., DPhil",title:"Founder",line:"Principal investigator on the NIH/NIDCR STTR Phase I award for MucoRegen.",mail:"lobat.tayebi@gmail.com"},
 {name:"Daryoosh Vashaee, Ph.D.",title:"Chief Technology Officer",line:"",mail:"vashaee@gmail.com"},
 {name:"Morteza Rasoulianboroujeni, PhD",title:"Technical Advisor",line:"",mail:"morteza.r.b@gmail.com"}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2026-09-14",s:"NIH RePORTER",t:"NIDCR awards Preserver Tech an STTR Phase I grant for MucoRegen, a cost-effective product for gingival regeneration",u:GRANT}
];'''

R["views"] = r'''/* ================= VIEWS (home only: nav items scroll to sections) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function caps(){var C=[
  ["Research & Development","Advancing innovative scientific and engineering concepts.",'<circle cx="24" cy="24" r="14"/><circle class="a" cx="24" cy="24" r="4"/><path d="M24 2v8M24 38v8M2 24h8M38 24h8"/>'],
  ["Product Development","Transforming technologies into practical and scalable products.",'<path d="M28 4L50 16.5V41.5L28 54L6 41.5V16.5Z"/><path class="a" d="M6 16.5L28 29L50 16.5M28 29V54"/>'],
  ["Translation & Commercialization","Bridging research, validation, and market introduction.",'<path d="M4 44H52"/><path d="M8 44V34M20 44V26M32 44V18"/><path class="a" d="M44 44V8M38 14l6-6 6 6"/>'],
  ["Collaborative Innovation","Working with universities, researchers, clinicians, and industry partners to accelerate technology development.",'<circle cx="18" cy="28" r="13"/><circle class="a" cx="38" cy="28" r="13"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function ppl(){return '<ul class="ppl">'+PEOPLE.map(function(p,i){return '<li><span class="lab">0'+(i+1)+'</span><h3>'+esc(p.name)+'</h3><span class="cr">'+esc(p.title)+'</span>'+(p.line?'<p>'+esc(p.line)+'</p>':'')+'<a class="ml ul" href="mailto:'+p.mail+'">'+p.mail+'</a></li>'}).join("")+'</ul>'}
function stages(){var S=[["Formulation","Matrix formulation extensively optimized by the PI’s research group","done"],["In vitro","Over three times the cell proliferation of conventional scaffolds","done"],["Pilot in vivo","Comparable to autologous grafts in increasing keratinized gingival width","done"],["Phase I study","Comprehensive in vitro and in vivo evaluation against commercial products","now"],["Next","Toward clinical and commercial adoption","next"]];
  return '<ol class="stages" aria-label="MucoRegen development stages"><i class="fill" aria-hidden="true"></i>'+S.map(function(s){return '<li class="'+s[2]+'"><b>'+s[0]+'</b>'+s[1]+'</li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Science &amp; technology · Portsmouth, Virginia<span class="nomob"> · Gingival regeneration</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Translating</span><span class="l">innovation into</span><span class="l">practical <em>solutions.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Preserver Tech turns innovative research and engineering concepts into commercially viable products, starting with MucoRegen, a cost-effective matrix for gum tissue regeneration.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">The technology '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">MucoRegen</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Preserver Tech</span>'+
   '<p class="txt" id="mani">We develop innovative technologies that address unmet market needs, working at the intersection of research, engineering, product development and translation, to carry promising science <em>toward the market.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$307K</span><span class="k">NIH/NIDCR STTR Phase I award for MucoRegen ($306,872), September 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3×<sup>+</sup></span><span class="k">Cell proliferation versus conventional scaffolds, in vitro</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;$100</span><span class="k">Projected cost of MucoRegen, against $250 to $800 for commercial graft products</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · MucoRegen</span><h2 class="d3">A matrix that lets gums <em>regrow.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Recession</span><span>Matrix</span><span>Pores</span><span>Regrowth</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Gingival loss, and the graft problem.</h2><p>Free gingival and connective tissue grafts are the gold standard, but they are invasive and leave a second, donor-site wound. Commercial alternatives work, but cost $250 to $800 and only partly match the elasticity and structure of native gingiva.</p></article>'+
     '<article class="step"><h2>A gelatin-based matrix.</h2><p>MucoRegen pairs gelatin with other safe, natural and biodegradable materials in a biomimetic, affordable formulation. To the company’s knowledge, no gelatin-based matrix is yet on the market for gingival regeneration.</p></article>'+
     '<article class="step"><h2>Two scales of pore.</h2><p>A novel fabrication method gives the scaffold interconnected macro- and micropores that mimic native extracellular matrix, easing nutrient diffusion and cell infiltration: over three times the cell proliferation of conventional scaffolds in vitro.</p></article>'+
     '<article class="step"><h2>Keratinized gingiva, regrown.</h2><p>In pilot in vivo studies, MucoRegen performed comparably to autologous grafts, and slightly better than Mucograft®, in increasing keratinized gingival width, with organized collagen deposition and vascularization.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we do</span><h2 class="d2 split">From research concept to <em>market-ready product.</em></h2></div><p data-r>Our approach combines scientific innovation with practical product development, helping promising technologies progress toward scalable, market-ready solutions, with the flexibility to expand across technology areas.</p></div>'+
   caps()+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Current <em>innovations.</em></h2></div><p data-r>MucoRegen is in development with Old Dominion University, under an NIH/NIDCR STTR Phase I award to Preserver Tech LLC.</p></div>'+
   '<div class="prog-row"><div><span class="lab" style="margin-bottom:12px">Programme 01</span><h3>Muco<em>Regen</em></h3></div>'+
    '<p>A gelatin-based, dual-porosity matrix for periodontal soft-tissue regeneration, designed as a practical and cost-effective alternative to the soft-tissue graft products available today.</p>'+
    '<div class="meta"><span class="lab">Indication · Gingival recession</span><span class="lab">Stage · Preclinical, Phase I</span><span class="lab">Partner · Old Dominion University</span></div></div>'+
   stages()+
   '<div class="bench"><div><span class="lab kick" data-r>Phase I benchmarks</span><p class="muted" data-r style="max-width:34ch">The Phase I study compares MucoRegen with every major graft category.</p></div>'+
    '<div><dl>'+
     '<div><dt class="lab">Gold-standard autograft</dt><dd>Free gingival graft (FGG)</dd></div>'+
     '<div><dt class="lab">Allograft</dt><dd>AlloDerm®, a human acellular dermal matrix</dd></div>'+
     '<div><dt class="lab">Collagen-based xenograft</dt><dd>Mucograft®</dd></div>'+
     '<div><dt class="lab">Animal acellular dermal matrix</dt><dd>NovoMatrix™</dd></div>'+
    '</dl><p class="note-s">NIH/NIDCR STTR Phase I award R41DE035779, “A Cost-Effective Alternative Product for Gingival Regeneration”, September 2026 to September 2027.</p></div></div>'+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>Preserver Tech.</em></h2></div><p data-r>Working with universities, researchers, clinicians and industry partners to accelerate technology development.</p></div>'+
   ppl()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><h2 class="d3 split">Latest news</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For universities, clinicians and industry partners</span>'+
   '<h2 class="big split">Work with <em>Preserver Tech.</em></h2>'+
   '<p class="sub" data-r>Researching, developing or bringing a technology to market? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Dr. Tayebi '+ARR+'</a><a class="btn" href="tel:+15302197645">'+TEL+'</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>501 Bobby Jones Ct</span><br><span>Portsmouth, VA 23701</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+15302197645">'+TEL+'</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>501 Bobby Jones Ct<br>Portsmouth, VA 23701</div>'+
   '<div class="c"><span class="lab">Programme</span>MucoRegen, for gingival regeneration<br>NIH/NIDCR STTR R41DE035779</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15302197645">'+TEL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:Newsreader,Georgia,serif;font-weight:300;font-size:46px;letter-spacing:.04em">PRESERVER TECH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Preserver Tech LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Preserver Tech — Translating innovation into practical solutions",x:"Home"}}'''

R["field"] = r'''/* ================= HERO FIELD: a red field poppy at golden hour, from the one photograph on Preserver Tech's own
   home page (a poppy among green seed capsules, mountains behind). Backlit petals, dark blotch, the green capsule and its
   stigma crown; seed capsules and grasses in the meadow; hazy ridges under a low sun. It sways on its own, with no
   pointer response (CZ). The painted heads are pre-rendered once; each frame only composites and sways them. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBg=null,FLW=[],PODS=[],GR=[],MO=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h,hz=mob?U*.5:h*.58;
    var R=mob?U*.27:Math.min(h*.2,cw*.13);
    var px=mob?w*.66:side+cw*.79,py=mob?U*.44:h*.4;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,R:R,px:px,py:py,ground:mob?U:h};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* one poppy head, drawn facing the viewer with a slight upward tilt, centred in its own canvas */
  function paintPoppy(R,seed,glow){
    var S=R*2.7,A=mk(S,S),o=A[0],g=A[1],rnd=rng(seed);g.translate(S/2,S/2);
    function petal(a,L,spr,yk,sh){var P=[],N=90,ph=rnd()*6,ph2=rnd()*6;
      for(var i=0;i<=N;i++){var u=i/N,an=a-spr+u*2*spr,env=Math.pow(Math.sin(Math.PI*u),.35),r=L*(.55+.45*env)*(1+.045*Math.sin(u*21+ph)+.03*Math.sin(u*37+ph2)+.02*Math.sin(u*63+ph));
        P.push([Math.cos(an)*r,Math.sin(an)*r*yk])}
      g.save();if(sh){g.shadowColor="rgba(10,0,0,.55)";g.shadowBlur=R*.09;g.shadowOffsetY=R*.02}
      g.beginPath();g.moveTo(Math.cos(a-spr*.4)*L*.06,Math.sin(a-spr*.4)*L*.06*yk);for(var k=0;k<P.length;k++)g.lineTo(P[k][0],P[k][1]);g.lineTo(Math.cos(a+spr*.4)*L*.06,Math.sin(a+spr*.4)*L*.06*yk);g.closePath();
      var gr=g.createRadialGradient(0,0,0,0,0,L);gr.addColorStop(0,"#120406");gr.addColorStop(.13,"#1d0508");gr.addColorStop(.2,"#6e0910");gr.addColorStop(.36,"#a70f17");gr.addColorStop(.66,"#c8141e");gr.addColorStop(.9,"#de2f24");gr.addColorStop(1,"#f0573a");
      g.fillStyle=gr;g.fill();g.restore();
      g.save();g.clip();
      /* veins and soft folds */
      for(var v=0;v<26;v++){var va=a-spr*.92+v/25*spr*1.84+(rnd()-.5)*.04,vl=L*(.75+rnd()*.3);g.strokeStyle="rgba(70,0,6,"+(.1+rnd()*.12).toFixed(3)+")";g.lineWidth=Math.max(.6,R*.006);
        g.beginPath();g.moveTo(Math.cos(va)*L*.15,Math.sin(va)*L*.15*yk);g.quadraticCurveTo(Math.cos(va+.05)*vl*.6,Math.sin(va+.05)*vl*.6*yk,Math.cos(va)*vl,Math.sin(va)*vl*yk);g.stroke()}
      for(var f=0;f<4;f++){var fa=a-spr*.6+f/3*spr*1.2+(rnd()-.5)*.2;g.strokeStyle="rgba(60,0,4,.13)";g.lineWidth=R*.07;g.beginPath();g.moveTo(Math.cos(fa)*L*.25,Math.sin(fa)*L*.25*yk);g.lineTo(Math.cos(fa)*L*1.05,Math.sin(fa)*L*1.05*yk);g.stroke()}
      for(var f2=0;f2<3;f2++){var fb=a-spr*.5+f2/2*spr+(rnd()-.5)*.25;g.strokeStyle="rgba(255,120,90,.08)";g.lineWidth=R*.05;g.beginPath();g.moveTo(Math.cos(fb)*L*.4,Math.sin(fb)*L*.4*yk);g.lineTo(Math.cos(fb)*L*1.05,Math.sin(fb)*L*1.05*yk);g.stroke()}
      /* the low sun shining through the rim */
      var rg=g.createRadialGradient(-R*.5,-R*.5,0,0,0,L*1.05);rg.addColorStop(0,"rgba(255,170,110,0)");rg.addColorStop(.75,"rgba(255,150,90,0)");rg.addColorStop(1,"rgba(255,160,100,"+(.35*glow).toFixed(3)+")");g.fillStyle=rg;g.fillRect(-L*1.2,-L*1.2,L*2.4,L*2.4);
      g.restore();
      g.strokeStyle="rgba(255,135,95,"+(.35*glow).toFixed(3)+")";g.lineWidth=Math.max(.7,R*.006);g.beginPath();for(var q=0;q<P.length;q++){q?g.lineTo(P[q][0],P[q][1]):g.moveTo(P[q][0],P[q][1])}g.stroke();
    }
    var yk=.8;
    petal(-Math.PI/2-.78,R*1.02,1.05,yk,false);petal(-Math.PI/2+.8,R*.98,1.02,yk,false);
    petal(Math.PI-.18,R*.92,.95,yk,true);petal(.16,R*.94,.95,yk,true);
    petal(Math.PI/2+.05,R*.86,1.0,yk,true);
    /* stamens: a ring of dark filaments with dusky anthers */
    for(var s=0;s<120;s++){var sa=rnd()*6.283,r0=R*(.1+rnd()*.03),r1=R*(.17+rnd()*.09),ex=Math.cos(sa)*r1,ey=Math.sin(sa)*r1*yk-R*.02;
      g.strokeStyle="rgba(18,10,16,.85)";g.lineWidth=Math.max(.6,R*.008);g.beginPath();g.moveTo(Math.cos(sa)*r0,Math.sin(sa)*r0*yk-R*.02);g.lineTo(ex,ey);g.stroke();
      g.fillStyle=rnd()<.5?"#2b2033":"#3c3048";g.beginPath();g.ellipse(ex,ey,R*.014,R*.01,sa,0,6.283);g.fill()}
    /* the green capsule and its stigma crown */
    var pg=g.createRadialGradient(-R*.04,-R*.08,0,0,-R*.03,R*.13);pg.addColorStop(0,"#a9b585");pg.addColorStop(.6,"#6f7c50");pg.addColorStop(1,"#3f4a2c");
    g.fillStyle=pg;g.beginPath();g.ellipse(0,-R*.03,R*.11,R*.1,0,0,6.283);g.fill();
    g.fillStyle="#3a2440";g.beginPath();g.ellipse(0,-R*.08,R*.085,R*.045,0,0,6.283);g.fill();
    g.strokeStyle="#1e1024";g.lineWidth=Math.max(.8,R*.012);for(var k2=0;k2<9;k2++){var ka=k2/9*6.283;g.beginPath();g.moveTo(0,-R*.08);g.lineTo(Math.cos(ka)*R*.085,-R*.08+Math.sin(ka)*R*.045);g.stroke()}
    g.fillStyle="rgba(200,215,170,.35)";g.beginPath();g.ellipse(-R*.045,-R*.02,R*.025,R*.04,-.4,0,6.283);g.fill();
    return {cv:o,S:S};
  }
  function paintPod(R,seed){var S=R*3,A=mk(S,S*1.4),o=A[0],g=A[1];g.translate(S/2,S*.5);
    var pg=g.createLinearGradient(-R,0,R,0);pg.addColorStop(0,"#56633a");pg.addColorStop(.35,"#9aa776");pg.addColorStop(1,"#3a4528");
    g.fillStyle=pg;g.beginPath();g.moveTo(-R*.25,R*1.05);g.bezierCurveTo(-R*1.05,R*.8,-R*.95,-R*.45,-R*.62,-R*.62);g.lineTo(R*.62,-R*.62);g.bezierCurveTo(R*.95,-R*.45,R*1.05,R*.8,R*.25,R*1.05);g.closePath();g.fill();
    g.strokeStyle="rgba(40,50,25,.45)";g.lineWidth=Math.max(.6,R*.03);for(var i=-2;i<=2;i++){g.beginPath();g.moveTo(i*R*.25,-R*.6);g.quadraticCurveTo(i*R*.42,R*.2,i*R*.1,R*1.02);g.stroke()}
    g.fillStyle="#4b3a4e";g.beginPath();g.ellipse(0,-R*.66,R*.72,R*.2,0,0,6.283);g.fill();
    g.strokeStyle="#2a1d2e";g.lineWidth=Math.max(.8,R*.05);for(var k=0;k<8;k++){var a=k/8*6.283;g.beginPath();g.moveTo(0,-R*.66);g.lineTo(Math.cos(a)*R*.72,-R*.66+Math.sin(a)*R*.2);g.stroke()}
    g.fillStyle="rgba(255,190,130,.25)";g.beginPath();g.ellipse(-R*.45,0,R*.12,R*.45,.1,0,6.283);g.fill();
    return {cv:o,S:S,ox:S/2,oy:S*.5+R*1.05};
  }
  function paintBud(R){var S=R*3,A=mk(S,S),o=A[0],g=A[1];g.translate(S/2,S*.3);
    var bg=g.createLinearGradient(-R,0,R,0);bg.addColorStop(0,"#4c5a33");bg.addColorStop(.4,"#8c9a69");bg.addColorStop(1,"#323d22");
    g.fillStyle=bg;g.beginPath();g.moveTo(0,-R*.1);g.bezierCurveTo(R*.75,0,R*.7,R*1.25,0,R*1.45);g.bezierCurveTo(-R*.7,R*1.25,-R*.75,0,0,-R*.1);g.fill();
    g.strokeStyle="rgba(210,220,180,.35)";g.lineWidth=Math.max(.5,R*.02);var r=rng(5);for(var i=0;i<40;i++){var y=r()*R*1.35,x=(r()-.5)*R*1.2*Math.sin(Math.PI*y/(R*1.45));g.beginPath();g.moveTo(x,y);g.lineTo(x+(x>0?1:-1)*R*.12,y-R*.05);g.stroke()}
    g.fillStyle="rgba(200,20,30,.85)";g.beginPath();g.moveTo(-R*.12,R*1.38);g.quadraticCurveTo(0,R*1.62,R*.12,R*1.38);g.fill();
    return {cv:o,S:S,ox:S/2,oy:S*.3};
  }
  function build(){
    var W=w,H=G.ground,hz=G.hz,A=mk(W,H+2),g=A[1];oBg=A[0];
    var sx=G.mob?w*.32:G.side+G.cw*.6,sy=hz-H*.03;
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#0f1013");sky.addColorStop(.42,"#25262c");sky.addColorStop(.74,"#5a4a45");sky.addColorStop(.92,"#a7735a");sky.addColorStop(1,"#c58a62");
    g.fillStyle=sky;g.fillRect(0,0,W,hz+2);
    var sun=g.createRadialGradient(sx,sy,0,sx,sy,Math.max(W,H)*.55);sun.addColorStop(0,"rgba(255,214,160,.7)");sun.addColorStop(.1,"rgba(250,170,110,.34)");sun.addColorStop(.4,"rgba(200,120,80,.1)");sun.addColorStop(1,"rgba(200,120,80,0)");
    g.fillStyle=sun;g.fillRect(0,0,W,H);
    /* hazy ridges, far to near */
    var RD=[[.86,"rgba(126,104,104,.55)",.05,3],[.93,"rgba(84,72,76,.75)",.075,7],[1,"rgba(46,42,44,.95)",.06,11]];
    for(var r=0;r<RD.length;r++){var rr=rng(RD[r][3]),amp=H*RD[r][2],base=hz*RD[r][0]+(G.mob?0:H*.02),o1=rr()*9,o2=rr()*9;g.fillStyle=RD[r][1];g.beginPath();g.moveTo(0,H);
      for(var x=0;x<=W+6;x+=6){var u=x/W,y=base-amp*(.55*Math.sin(u*3.1+o1)+.3*Math.sin(u*7.3+o2)+.15*Math.sin(u*17+o1*2)+.6)*(.7+.3*Math.sin(u*1.3+o2));g.lineTo(x,y)}
      g.lineTo(W,H);g.closePath();g.fill()}
    /* the meadow: warm light on the near slope, darkening toward the viewer */
    var mt=hz+H*.015,md=g.createLinearGradient(0,mt-H*.02,0,H);md.addColorStop(0,"#3a332b");md.addColorStop(.22,"#2a2a1f");md.addColorStop(.7,"#191915");md.addColorStop(1,"#141414");
    g.fillStyle=md;g.beginPath();g.moveTo(0,H+2);for(var mx=0;mx<=W+8;mx+=8){var u2=mx/W;g.lineTo(mx,mt-H*.012*Math.sin(u2*2.4+.6)-H*.006*Math.sin(u2*6.1+2))}g.lineTo(W,H+2);g.closePath();g.fill();
    var hzz=g.createLinearGradient(0,mt-H*.03,0,mt+H*.07);hzz.addColorStop(0,"rgba(170,120,95,0)");hzz.addColorStop(.35,"rgba(170,120,95,.16)");hzz.addColorStop(1,"rgba(170,120,95,0)");g.fillStyle=hzz;g.fillRect(0,mt-H*.03,W,H*.1);
    var gl=g.createRadialGradient(sx,hz,0,sx,hz,W*.5);gl.addColorStop(0,"rgba(230,160,100,.22)");gl.addColorStop(1,"rgba(230,160,100,0)");g.fillStyle=gl;g.fillRect(0,hz,W,H-hz);
    /* far grass: fine strokes catching the light */
    var rg=rng(41),n=G.mob?700:2200;g.lineCap="round";
    for(var k=0;k<n;k++){var gy=hz+Math.pow(rg(),1.4)*(H-hz),gx=rg()*W,dep=(gy-hz)/(H-hz),len=(4+rg()*10)*(.4+dep*2.2),lean=(rg()-.5)*len*.5,lit=Math.max(0,1-Math.abs(gx-sx)/(W*.5));
      g.strokeStyle="rgba("+(60+lit*120|0)+","+(64+lit*80|0)+","+(40+lit*30|0)+","+(.25+rg()*.35).toFixed(3)+")";g.lineWidth=.6+dep*1.2;g.beginPath();g.moveTo(gx,gy);g.quadraticCurveTo(gx+lean*.3,gy-len*.6,gx+lean,gy-len);g.stroke()}
    /* soft bokeh in the light */
    var rb=rng(77);for(var b=0;b<(G.mob?10:22);b++){var bx=sx+(rb()-.5)*W*.7,by=hz+(rb()-.6)*H*.18,br=(G.mob?6:10)+rb()*(G.mob?14:26);var bk=g.createRadialGradient(bx,by,0,bx,by,br);bk.addColorStop(0,"rgba(255,200,150,"+(.06+rb()*.08).toFixed(3)+")");bk.addColorStop(1,"rgba(255,200,150,0)");g.fillStyle=bk;g.fillRect(bx-br,by-br,br*2,br*2)}
    /* the flowers: one hero poppy, a second further back, a nodding bud; seed capsules on their stems */
    var R=G.R,px=G.px,py=G.py;FLW=[];PODS=[];GR=[];MO=[];
    FLW.push({h:paintPoppy(R,3,1),x:px,y:py,bx:px+R*.35,by:G.ground+20,sw:.022,ph:0,sc:1});
    if(!G.mob)FLW.push({h:paintPoppy(R*.58,9,.8),x:G.side+G.cw*.99,y:h*.6,bx:G.side+G.cw*.96,by:h+20,sw:.03,ph:1.7,sc:1,a:.82});
    else FLW.push({h:paintPoppy(R*.55,9,.8),x:w*.97,y:U2(.7),bx:w*.94,by:G.ground+10,sw:.03,ph:1.7,sc:1,a:.85});
    var bud=paintBud(R*.2);PODS.push({s:bud,x:G.mob?w*.4:G.side+G.cw*.64,y:G.mob?G.U*.36:h*.36,bx:G.mob?w*.43:G.side+G.cw*.67,by:G.ground+20,sw:.03,ph:.9,nod:1});
    var pr=rng(13),PP=G.mob?[[.86,.3],[.5,.62],[.22,.74]]:[[.69,.62],[.9,.28],[.58,.8],[.98,.84],[.84,.72]];
    for(var p=0;p<PP.length;p++){var ps=paintPod(R*(G.mob?.12:.11)*(.8+pr()*.4),p);var Y=(G.mob?G.U:h)*PP[p][1];
      PODS.push({s:ps,x:G.mob?w*PP[p][0]:G.side+G.cw*PP[p][0],y:Y,bx:(G.mob?w*PP[p][0]:G.side+G.cw*PP[p][0])+(pr()-.5)*R*.6,by:G.ground+20,sw:.025+pr()*.02,ph:pr()*6})}
    var rgr=rng(23);for(var q=0;q<(G.mob?40:90);q++){var gx2=rgr()*w;GR.push([gx2,G.ground+4,(G.mob?G.U*.18:h*.16)*(.4+rgr()*.9),(rgr()-.5)*.5,rgr()*6,.6+rgr()*1.4])}
    var rm=rng(31);for(var m=0;m<(G.mob?18:40);m++)MO.push([rm(),rm(),rm()*6.28,.3+rm()*.7,.6+rm()*1.2]);
  }
  function U2(f){return G.U*f}
  function stem(x0,y0,x1,y1,wd,bend){c.strokeStyle="#2f3a24";c.lineWidth=wd;c.lineCap="round";c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(x0+bend,(y0+y1)/2,x1,y1);c.stroke();
    c.strokeStyle="rgba(200,190,140,.22)";c.lineWidth=Math.max(.5,wd*.3);c.beginPath();c.moveTo(x0-wd*.25,y0);c.quadraticCurveTo(x0+bend-wd*.25,(y0+y1)/2,x1-wd*.25,y1);c.stroke()}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var par=G.mob?0:-SP.v*h*.06;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oBg,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* drifting pollen in the low sun */
    var sx=G.mob?w*.32:G.side+G.cw*.6;
    for(var m=0;m<MO.length;m++){var o=MO[m],life=(t*.03*o[3]+o[0])%1,mx=sx+(o[1]-.5)*w*.6+Math.sin(t*.4+o[2])*30,my=G.hz-life*G.hz*.7+Math.sin(t*.7+o[2])*8,ma=Math.sin(Math.PI*life)*.5*e;
      c.fillStyle="rgba(255,220,170,"+ma.toFixed(3)+")";c.fillRect(mx,my+par*.5,o[4],o[4])}
    c.translate(0,par);
    /* seed capsules and the bud on their stems */
    for(var p=0;p<PODS.length;p++){var P=PODS[p],sw=Math.sin(t*.55+P.ph)*P.sw,hx=P.x+sw*(P.by-P.y),hy=P.y;
      stem(P.bx,P.by,hx,hy+(P.nod?0:0),Math.max(1.2,G.R*.022),(P.x-P.bx)*.4+sw*60);
      c.save();c.translate(hx,hy);c.rotate(sw*.8+(P.nod?.5:0));c.drawImage(P.s.cv,-P.s.ox,-(P.nod?P.s.oy:P.s.oy),P.s.S,P.s.cv.height/dpr);c.restore()}
    /* poppies, back to front */
    for(var f=FLW.length-1;f>=0;f--){var F=FLW[f],s2=Math.sin(t*.5+F.ph)*F.sw+Math.sin(t*1.3+F.ph)*F.sw*.25,fx=F.x+s2*(F.by-F.y),fy=F.y;
      stem(F.bx,F.by,fx,fy+G.R*.08*(f?0.6:1),Math.max(1.6,G.R*(f?.025:.04)),(F.x-F.bx)*.5+s2*80);
      c.save();c.globalAlpha=e*(F.a||1);c.translate(fx,fy);c.rotate(s2*.6+(f?.12:-.1));var S=F.h.S;c.drawImage(F.h.cv,-S/2,-S/2,S,S);c.restore();c.globalAlpha=e}
    /* near grasses, dark against the light */
    c.lineCap="round";
    for(var g2=0;g2<GR.length;g2++){var q=GR[g2],sw2=Math.sin(t*.8+q[4])*q[2]*.04;c.strokeStyle="rgba(12,13,10,.92)";c.lineWidth=q[5];c.beginPath();c.moveTo(q[0],q[1]);c.quadraticCurveTo(q[0]+q[3]*q[2]*.3,q[1]-q[2]*.6,q[0]+q[3]*q[2]+sw2,q[1]-q[2]);c.stroke()}
    c.setTransform(1,0,0,1,0,0);c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.px,G.py]:[w/2,h/2]}};
})();'''

R["story"] = r'''/* the story scene: MucoRegen, drawn as an engraved dental specimen (frontal view of three lower incisors in the gum).
   Step 1 the middle tooth shows gingival recession (exposed root, a low gum margin); step 2 the gelatin-based matrix
   is laid over the defect; step 3 a magnifier opens on its dual porosity, with cells moving in; step 4 the matrix
   resorbs and the gum margin is restored, with the keratinized band marked. Each step changes one labelled part. */
var SC_X=[190,330,470],SC_PAP=214,SC_OK=288,SC_REC=376;
function scMargin(m){var d="M40 232";SC_X.forEach(function(cx,i){var mm=i===1?m:SC_OK,deep=mm-SC_PAP;
  d+=(i?"":" C52 226 "+(cx-86)+" "+SC_PAP+" "+(cx-70)+" "+SC_PAP)+" C"+(cx-60)+" "+SC_PAP+" "+(cx-46)+" "+mm+" "+cx+" "+mm+" C"+(cx+46)+" "+mm+" "+(cx+60)+" "+SC_PAP+" "+(cx+70)+" "+SC_PAP});
  return d+" C590 "+SC_PAP+" 600 226 620 232"}
function scGum(m){return scMargin(m)+" L620 600 L40 600 Z"}
function scTooth(cx){var inc=96,cej=262;
  return {crown:"M"+(cx-50)+" "+(inc+9)+"Q"+(cx-50)+" "+inc+" "+(cx-40)+" "+inc+"C"+(cx-26)+" "+(inc-3)+" "+(cx-12)+" "+(inc+2)+" "+cx+" "+inc+"C"+(cx+12)+" "+(inc-3)+" "+(cx+26)+" "+(inc+2)+" "+(cx+40)+" "+inc+"Q"+(cx+50)+" "+inc+" "+(cx+50)+" "+(inc+9)+"C"+(cx+58)+" "+(inc+62)+" "+(cx+53)+" "+(cej-58)+" "+(cx+40)+" "+cej+"Q"+cx+" "+(cej+22)+" "+(cx-40)+" "+cej+"C"+(cx-53)+" "+(cej-58)+" "+(cx-58)+" "+(inc+62)+" "+(cx-50)+" "+(inc+9)+"Z",
    root:"M"+(cx-40)+" "+cej+"C"+(cx-40)+" "+(cej+130)+" "+(cx-22)+" 520 "+cx+" 572 C"+(cx+22)+" 520 "+(cx+40)+" "+(cej+130)+" "+(cx+40)+" "+cej+"Q"+cx+" "+(cej+22)+" "+(cx-40)+" "+cej+"Z",
    hat:"M"+(cx-30)+" "+(inc+14)+"C"+(cx-34)+" "+(inc+70)+" "+(cx-30)+" "+(cej-50)+" "+(cx-26)+" "+(cej-8)+"M"+(cx+30)+" "+(inc+14)+"C"+(cx+34)+" "+(inc+70)+" "+(cx+30)+" "+(cej-50)+" "+(cx+26)+" "+(cej-8)+"M"+(cx-8)+" "+(inc+10)+"C"+(cx-10)+" "+(inc+60)+" "+(cx-6)+" "+(cej-60)+" "+(cx-4)+" "+(cej-20)}}
function scPores(){var r=rng2(7),out="",mac=[],cx=668,cy=300;
  var P=[[-62,-48,26],[-8,-66,22],[46,-42,24],[-78,8,20],[-26,-6,27],[30,8,22],[78,2,18],[-56,56,23],[0,52,25],[52,58,21],[-30,92,16],[34,-94,15],[-36,-96,14],[86,-46,13],[-96,-34,12],[92,48,13]];
  P.forEach(function(p){var n=14,d="";for(var i=0;i<=n;i++){var a=i/n*6.283,rr=p[2]*(1+.12*Math.sin(a*3+p[0])+.06*Math.sin(a*5+p[1]));d+=(i?"L":"M")+(cx+p[0]+Math.cos(a)*rr).toFixed(1)+" "+(cy+p[1]+Math.sin(a)*rr).toFixed(1)}mac.push(d+"Z")});
  out+='<circle class="wall" cx="'+cx+'" cy="'+cy+'" r="110"/>';
  out+=mac.map(function(d){return '<path class="mac" d="'+d+'"/>'}).join("");
  for(var k=0;k<90;k++){var a=r()*6.283,rd=Math.sqrt(r())*104,x=cx+Math.cos(a)*rd,y=cy+Math.sin(a)*rd,ok=true;
    for(var j=0;j<P.length;j++){var dx=x-(cx+P[j][0]),dy=y-(cy+P[j][1]);if(Math.sqrt(dx*dx+dy*dy)<P[j][2]+5){ok=false;break}}
    if(ok)out+='<circle class="mic" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(1.6+r()*2).toFixed(1)+'"/>'}
  return out}
function rng2(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
var SC_CELLS=[[-150,-20,-62,-48],[-150,30,-26,-6],[-140,80,-56,56],[-160,-70,-8,-66],[-150,10,30,8],[-145,60,0,52],[-155,-40,46,-42],[-150,100,52,58]];
function scene(){
  var T=SC_X.map(scTooth),mob=MOBILE(),lx=mob?566:572;
  return '<svg viewBox="20 76 780 504" aria-hidden="true">'+
   '<defs><pattern id="ptPore" width="18" height="16" patternUnits="userSpaceOnUse"><rect width="18" height="16" fill="rgba(236,84,70,.10)"/><circle cx="5" cy="5" r="3.2" fill="none" stroke="rgba(236,84,70,.75)" stroke-width="1"/><circle cx="13.5" cy="11.5" r="1.6" fill="none" stroke="rgba(236,84,70,.6)" stroke-width=".8"/></pattern>'+
   '<radialGradient id="ptFadeG" cx="330" cy="250" r="330" gradientUnits="userSpaceOnUse" gradientTransform="translate(330 250) scale(1 1.02) translate(-330 -250)"><stop offset=".62" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>'+
   '<linearGradient id="ptEn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(244,241,236,.24)"/><stop offset=".55" stop-color="rgba(244,241,236,.13)"/><stop offset="1" stop-color="rgba(232,214,190,.1)"/></linearGradient>'+
   '<mask id="ptFade" maskUnits="userSpaceOnUse" x="0" y="0" width="680" height="620"><rect x="0" y="0" width="680" height="620" fill="url(#ptFadeG)"/></mask>'+
   '<clipPath id="ptGumC"><path id="scGumC" d="'+scGum(SC_REC)+'"/></clipPath><clipPath id="ptRing"><circle cx="668" cy="300" r="110"/></clipPath></defs>'+
   '<g mask="url(#ptFade)">'+
    T.map(function(t){return '<path class="root" d="'+t.root+'"/>'}).join("")+
    '<path class="gum" id="scGum" d="'+scGum(SC_REC)+'"/><path class="gumt" id="scGumT" d="'+scGum(SC_REC)+'"/>'+
    '<g clip-path="url(#ptGumC)">'+[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(function(i){var y=228+i*16;return '<path class="hat" d="M30 '+y+' C180 '+(y+10)+' 300 '+(y-6)+' 420 '+(y+6)+' S600 '+(y-4)+' 640 '+(y+2)+'"/>'}).join("")+'</g>'+
    '<path class="mgj" d="M40 452 C160 440 260 462 340 448 S520 440 620 452"/>'+
    '<path class="gm" id="scGm" d="'+scMargin(SC_REC)+'"/>'+
    T.map(function(t){return '<path class="crown" d="'+t.crown+'"/><path class="hat" d="'+t.hat+'"/>'}).join("")+
    '<g id="scGraft"><path class="graft" id="scGraftP" d="M268 272 Q330 292 392 272 L398 408 Q330 426 262 408 Z"/></g>'+
   '</g>'+
   '<g id="scL1"><path class="ld" d="M372 322H'+(lx-10)+'"/><circle class="accf" cx="372" cy="322" r="3"/><text x="'+lx+'" y="327">EXPOSED ROOT</text>'+
    '<path class="ld" d="M388 378H'+(lx-10)+'"/><circle class="accf" cx="388" cy="378" r="3"/><text x="'+lx+'" y="383">GUM MARGIN</text></g>'+
   '<g id="scL2"><path class="ld" d="M398 340H'+(lx-10)+'"/><circle class="accf" cx="398" cy="340" r="3"/><text x="'+lx+'" y="335" class="a">MUCOREGEN</text><text x="'+lx+'" y="'+(mob?363:353)+'" class="a">MATRIX</text></g>'+
   '<g id="scIn"><circle class="acc" cx="344" cy="336" r="22"/><path class="ld" id="scInL1" d="M352 315L640 194"/><path class="ld" id="scInL2" d="M352 357L640 406"/>'+
    '<circle class="ring" cx="668" cy="300" r="112"/><g clip-path="url(#ptRing)">'+scPores()+
    SC_CELLS.map(function(q,i){return '<g class="scC"><ellipse class="cell" cx="0" cy="0" rx="7" ry="4.5"/><circle class="nuc" cx="1" cy="0" r="2"/></g>'}).join("")+'</g>'+
    '<text x="668" y="'+(mob?166:172)+'" text-anchor="middle" class="a">DUAL POROSITY</text><text x="668" y="'+(mob?450:440)+'" text-anchor="middle">CELLS MOVE IN</text></g>'+
   '<g id="scL4"><path class="acc" d="M'+(lx-24)+' 290H'+(lx-12)+'V452H'+(lx-24)+'"/><path class="ld" d="M398 290H'+(lx-30)+'M480 452H'+(lx-30)+'" style="stroke-dasharray:2 5"/><text x="'+(lx+4)+'" y="'+(mob?362:364)+'" class="a">KERATINIZED</text><text x="'+(lx+4)+'" y="'+(mob?390:384)+'" class="a">GINGIVA</text></g>'+
  '</svg>';
}
function storyDraw(svg){
  var E={gum:$("#scGum",svg),gumt:$("#scGumT",svg),gumc:$("#scGumC",svg),gm:$("#scGm",svg),gr:$("#scGraft",svg),grp:$("#scGraftP",svg),l1:$("#scL1",svg),l2:$("#scL2",svg),inn:$("#scIn",svg),l4:$("#scL4",svg),cells:$$(".scC",svg),ld:[$("#scInL1",svg),$("#scInL2",svg)]};
  var GL=E.grp.getTotalLength(),LL=E.ld.map(function(p){return p.getTotalLength()}),lastM=-1;
  return function(p,b){
    if(!E.gum.isConnected)return;
    var s1=seg(p,.02,.14),o1=seg(p,.22,.3),s2=seg(p,.27,.42),o2=seg(p,.48,.54),s3=seg(p,.52,.68),o3=seg(p,.74,.8),s4=seg(p,.78,.95);
    svg.style.opacity=(.25+.75*b).toFixed(3);
    var m=lerp(SC_REC,SC_OK+2,s4);if(Math.abs(m-lastM)>.2){lastM=m;var d=scGum(m);E.gum.setAttribute("d",d);E.gumt.setAttribute("d",d);E.gumc.setAttribute("d",d);E.gm.setAttribute("d",scMargin(m))}
    E.l1.style.opacity=(b*s1*(1-o1)).toFixed(3);
    E.grp.style.strokeDasharray=GL;E.grp.style.strokeDashoffset=(GL*(1-s2)).toFixed(1);
    E.gr.style.opacity=(b*Math.min(1,s2*1.6)*(1-.92*s4)).toFixed(3);
    E.l2.style.opacity=(b*s2*(1-o2)).toFixed(3);
    E.inn.style.opacity=(b*s3*(1-o3)).toFixed(3);
    E.ld.forEach(function(l,k){l.style.strokeDasharray=LL[k];l.style.strokeDashoffset=(LL[k]*(1-s3)).toFixed(1)});
    E.cells.forEach(function(g,k){var q=SC_CELLS[k],u=seg(p,.55+k*.012,.7+k*.008),x=668+lerp(q[0],q[2],u),y=300+lerp(q[1],q[3],u);g.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");g.style.opacity=u>0?1:0});
    E.l4.style.opacity=(b*s4).toFixed(3);
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
left = [k for k in re.findall(r"<R:([a-z0-9]+)>", out) if k not in R]
if left:
    print("kept from firelight:", sorted(set(left)))
(HERE / "preserver-tech.src.html").write_text(out)
print("wrote", HERE / "preserver-tech.src.html", len(out))
