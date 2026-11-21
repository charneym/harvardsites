#!/usr/bin/env python3
"""Assemble vascularrescue.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/vascularrescue.assemble.py && node build.js src/vascularrescue.src.html ../vascularrescue/index.html
Facts: _kit/dossiers/vascularrescue.md. Palette: the live vascularrescue.com (logo pink #FA5B89, logo teal #4A978E, charcoal #1f1f1f, black nav)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}
R["meta"] = r'''<title>Vascular Rescue — Automated vascular access</title>
<meta name="description" content="Vascular Rescue is developing AVAD, the Automated Vascular Access Device: the only device that automates the full Seldinger procedure end to end, from ultrasound targeting to guidewire and sheath placement. Baltimore, Maryland.">
<meta name="theme-color" content="#101516">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23101516'/%3E%3Cpath d='M46 16H24a8 8 0 0 0 0 16h16a8 8 0 0 1 0 16H18' fill='none' stroke='%234A978E' stroke-width='6'/%3E%3Ccircle cx='46' cy='16' r='4' fill='%23FA5B89'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Montserrat:300,400,500; Roboto Slab:300; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#101516;--inkr:16,21,22;--boner:242,243,241;--accr:74,151,142;--ink2:#141a1b;--ink3:#1a2122;--deep:#0b0f10;
  --bone:#f2f3f1;--bone2:#e7e9e6;--bone3:#d5d9d6;
  --stone:#a4adab;--stoneD:#525c5b;
  --acc:#4a978e;--accL:#6cc0b5;--accD:#2f7169;
  --pink:#fa5b89;--pinkD:#c8305e;
  --hair:rgba(242,243,241,.14);--hairD:rgba(16,21,22,.16);
  --disp:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Roboto Slab',Georgia,serif;
  --sans:'Montserrat',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#101516,#101516)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the mark: Vascular Rescue's looped tube "S" (redrawn from the logo on vascularrescue.com), teal, with the pink of the wordmark
MARK = '<path class="vm-a" d="M27 4H9.5a5.5 5.5 0 0 0 0 11h12a5.5 5.5 0 0 1 0 11H3"/><circle class="vm-b" cx="27" cy="4" r="2.6"/>'

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.vm{width:30px;height:30px;flex:none;overflow:visible}
.brand .vm-a{fill:none;stroke:var(--acc);stroke-width:3.2;stroke-linecap:round}
.brand .vm-b{fill:var(--pink)}
.brand .bt{font:500 19px/1 var(--disp);letter-spacing:-.01em;white-space:nowrap}
.brand .bt b{font-weight:500;color:var(--pink)}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa6a4;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #667a77;transition:background .35s,border-color .35s}
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
.scene .vsk{fill:none;stroke:rgba(var(--boner),.8);stroke-width:1.4}
.scene .vly{fill:none;stroke:rgba(var(--boner),.22);stroke-width:1;stroke-dasharray:2 5}
.scene .vfan{fill:rgba(var(--accr),.08);stroke:rgba(var(--accr),.55);stroke-width:1}
.scene .vvf{fill:rgba(108,192,181,.16);stroke:none}
.scene .vvn{fill:none;stroke:var(--bone);stroke-width:1.4}
.scene .vflow{fill:none;stroke:rgba(108,192,181,.7);stroke-width:1;stroke-dasharray:6 34}
.scene .vaf{fill:rgba(250,91,137,.16);stroke:none}
.scene .var{fill:none;stroke:#f58aa9;stroke-width:1.3}
.scene .vaflow{fill:none;stroke:rgba(250,91,137,.8);stroke-width:1;stroke-dasharray:6 34}
.scene .vpr{fill:#141a1b;stroke:rgba(var(--boner),.75);stroke-width:1.2}
.scene .vpr2{stroke:var(--accL);stroke-width:2}
.scene .vx{fill:none;stroke:var(--accL);stroke-width:1.2}
.scene .vtr{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1;stroke-dasharray:3 6}
.scene .vnd{fill:none;stroke:var(--bone);stroke-width:2.4;stroke-linecap:round}
.scene .vhit{fill:rgba(108,192,181,.35);stroke:var(--accL);stroke-width:1.4}
.scene .vhit2{fill:none;stroke:rgba(108,192,181,.5);stroke-width:1}
.scene .vdp{fill:#101516;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .vdv{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .vda{fill:none;stroke:#f58aa9;stroke-width:1.2}
.scene .vwr{fill:none;stroke:#e9f3f1;stroke-width:1.6}
.scene .vsh{fill:none;stroke:var(--accL);stroke-width:5;stroke-opacity:.55;stroke-linecap:round}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9d1cf;paint-order:stroke;stroke:#141a1b;stroke-width:5px;stroke-linejoin:round}
.scene text.vac{fill:var(--accL)}
.scene text.vpk{fill:#f58aa9}
.scene text.cap{fill:var(--accL)}
/* ===== Vascular Rescue additions ===== */
.ftr .fcv{opacity:.32}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,4.6vw,92px);letter-spacing:-.04em;line-height:1.04;font-weight:300;max-width:12ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.035em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--pink)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em,.cta .big em{color:var(--pinkD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:#fff;border-color:var(--accD)}
.btn,.btn::before,.btn.solid{border-radius:0}
/* DN: statement and stats share the row */
.mani .mrow{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,4fr);gap:clamp(40px,6vw,120px);align-items:center}
.mani .mrow .mani-in{margin:0;width:auto}
.mani .mrow .txt{font-size:clamp(28px,2.6vw,48px);max-width:24ch}
.mani .mrow .stats{margin-top:0;grid-template-columns:1fr;gap:clamp(22px,2.6vw,36px)}
.mani .mrow .stat .v{font-size:clamp(46px,4.2vw,80px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
@media (max-width:1024px){.mani .mrow{grid-template-columns:1fr}.mani .mrow .stats{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:700px){.mani .mrow .stats{grid-template-columns:1fr}}
/* the problem: Seldinger text + cost rows */
.vrq{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start;margin-bottom:clamp(64px,7vw,110px)}
.vrq .lead2{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2vw,34px);line-height:1.22;letter-spacing:-.025em;margin:0;max-width:22ch}
.vrq .lead2 em{font-style:normal;color:var(--pinkD)}
.vrq p{color:var(--stoneD);font-size:16.5px;line-height:1.65;margin:0 0 16px;max-width:60ch}
.vrc{list-style:none;margin:0;padding:0}
.vrc-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);column-gap:var(--gap);align-items:center;padding:22px 0 24px;border-top:1px solid var(--hairD);position:relative}
.vrc-row:last-child{border-bottom:1px solid var(--hairD)}
.vrc-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--pinkD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.vrc-row:hover::after{transform:scaleX(1)}
.vrc-row .n{font-family:var(--disp);font-weight:300;font-size:clamp(36px,3.4vw,58px);line-height:1;letter-spacing:-.045em;color:var(--ink);white-space:nowrap;transition:color .3s var(--eo)}
.vrc-row:hover .n{color:var(--pinkD)}
.vrc-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:56ch}
.vrc-row .lab{color:var(--stoneD);text-align:right}
.vrc-src{margin:22px 0 0;font-size:13px;line-height:1.6;color:var(--stoneD);max-width:110ch}
.vrc-src a{color:var(--ink)}
@media (max-width:1024px){.vrq{grid-template-columns:1fr}.vrc-row{grid-template-columns:minmax(0,1fr) minmax(0,2fr);row-gap:10px}.vrc-row .lab{grid-column:2;text-align:left}}
@media (max-width:620px){.vrc-row{grid-template-columns:1fr}.vrc-row .lab{grid-column:1}}
/* development: milestones + partners rows */
.rd{list-style:none;margin:0;padding:0}
.rd-row{display:grid;grid-template-columns:minmax(0,2.2fr) minmax(0,4fr) minmax(0,4.4fr) minmax(0,1.8fr);column-gap:var(--gap);align-items:start;padding:20px 0 22px;border-top:1px solid var(--hair);position:relative}
.rd-row:last-child{border-bottom:1px solid var(--hair)}
.rd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.rd-row:hover::after{transform:scaleX(1)}
.rd-row .yr{font:400 11px/1.6 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accL)}
.rd-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.9vw,30px);line-height:1.15;letter-spacing:-.025em;margin:0}
.rd-row p{margin:0;color:var(--stone);font-size:15.5px;line-height:1.6}
.rd-row .meta{display:flex;flex-direction:column;gap:8px;align-items:flex-start}
.rd-row .meta a{color:var(--bone)}
.rd-row .tag{display:inline-block;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--pinkD);padding:6px 8px 5px}
@media (max-width:1100px){.rd-row{grid-template-columns:minmax(0,1fr) minmax(0,3fr);row-gap:12px}.rd-row p{grid-column:2}.rd-row .meta{grid-column:2;flex-direction:row;flex-wrap:wrap;gap:8px 20px}}
@media (max-width:620px){.rd-row{grid-template-columns:1fr}.rd-row p,.rd-row .meta{grid-column:1}}
.rd-h{display:block;margin:clamp(64px,7vw,104px) 0 22px;color:var(--accL)}
.trl{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-bottom:clamp(56px,6vw,96px)}
.trl>div{border-top:1px solid var(--hair);padding-top:22px;position:relative}
.trl>div::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.trl>div:hover::before{transform:scaleX(1)}
.trl .lab{display:block;margin-bottom:14px;color:var(--accL)}
.trl h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.15;letter-spacing:-.025em;margin:0 0 12px}
.trl p{color:var(--stone);font-size:15.5px;margin:0;max-width:38ch}
@media (max-width:900px){.trl{grid-template-columns:1fr;row-gap:36px}}
/* team: portraits (Leavitt hover, AC) */
.vrt{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:clamp(32px,5vw,96px);align-items:start}
.vrt-side p{color:var(--stoneD);font-size:16px;line-height:1.6;max-width:36ch;margin:0 0 18px}
.vrg{display:grid;grid-template-columns:repeat(3,minmax(0,240px));gap:clamp(20px,2.4vw,40px);justify-content:end}
@media (max-width:1024px){.vrg{justify-content:start}}
.vrp{position:relative;display:block;color:inherit;transition:transform .4s var(--eo)}
.vrp .ph{position:relative;aspect-ratio:225/268;overflow:hidden;background:var(--bone3);box-shadow:0 0 0 rgba(16,21,22,0);transition:box-shadow .4s var(--eo)}
.vrp .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .45s var(--eo)}
.vrp .ph .g{filter:grayscale(1) contrast(1.04)}
.vrp .ph .c{clip-path:circle(0% at var(--mx,50%) var(--my,50%));transition:clip-path .45s var(--eo),transform .45s var(--eo)}
.vrp:hover,.vrp:focus-visible{transform:translateY(-6px)}
.vrp:hover .ph,.vrp:focus-visible .ph{box-shadow:0 18px 40px -18px rgba(16,21,22,.45)}
.vrp:hover .ph img,.vrp:focus-visible .ph img{transform:scale(1.045)}
.vrp:hover .ph .c,.vrp:focus-visible .ph .c{clip-path:circle(150% at var(--mx,50%) var(--my,50%))}
.vrp h3{font-family:var(--disp);font-weight:400;font-size:19px;line-height:1.2;letter-spacing:-.015em;margin:16px 0 4px;transition:color .3s ease-out}
.vrp:hover h3,.vrp:focus-visible h3{color:var(--accD)}
.vrp p{font-size:14.5px;line-height:1.4;margin:0;color:var(--stoneD)}
.vrp .go{position:absolute;right:10px;top:10px;width:34px;height:34px;display:grid;place-items:center;background:var(--ink);color:var(--bone);opacity:0;transform:translateY(6px);transition:opacity .3s var(--eo),transform .3s var(--eo)}
.vrp .go svg{width:14px;height:10px}
.vrp:hover .go,.vrp:focus-visible .go{opacity:1;transform:none}
@media (max-width:1024px){.vrt{grid-template-columns:1fr}}
@media (max-width:560px){.vrg{grid-template-columns:1fr;gap:0}.vrp{display:grid;grid-template-columns:84px 1fr;column-gap:18px;align-items:center;padding:12px 0;border-top:1px solid var(--hairD)}.vrp .ph{grid-row:1/3}.vrp h3{margin:0 0 2px;align-self:end;font-size:19px}.vrp p{align-self:start}.vrp .go{display:none}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("vascularrescue-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M80 18H32a14 14 0 0 0 0 28h32a14 14 0 0 1 0 28H14"/></svg>
    <div class="wm"><span>VASCULAR RESCUE</span></div>
  </div>
  <span class="lab pl">Automated vascular access · Baltimore, Maryland</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Vascular Rescue, home"><svg class="vm" viewBox="0 0 30 30" aria-hidden="true">' + MARK + '</svg><span class="bt">Vascular <b>Rescue</b></span></a>'

NAV = [("problem", "The problem"), ("story", "AVAD"), ("research", "Development"), ("team", "Team")]
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
    <div><span class="lab">Office</span><br>Baltimore, Maryland</div>
    <div><span class="lab">Email</span><br>info@vascularrescue.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Vascular Rescue</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Vascular Rescue";\nvar PK="vascularrescue";'

R["content"] = r'''var FONTS=['300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','300 1em "Roboto Slab"','400 1em "IBM Plex Mono"'];
var MAIL="info@vascularrescue.com";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];var NEWS=[];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
document.addEventListener("pointermove",function(e){var c=e.target.closest&&e.target.closest(".vrp");if(!c)return;var r=c.querySelector(".ph").getBoundingClientRect();
  c.style.setProperty("--mx",((e.clientX-r.left)/r.width*100).toFixed(1)+"%");c.style.setProperty("--my",((e.clientY-r.top)/r.height*100).toFixed(1)+"%")},{passive:true});
function costs(){var A=[
  ["$45,814","The average cost of a single central line–associated bloodstream infection: the highest per-case cost of any healthcare-associated infection, and a leading route to sepsis.","Zimlichman et al. · JAMA IM 2013"],
  ["$38,656","Excess hospital charges when infection follows medical care, together with 9.58 additional inpatient days.","Zhan &amp; Miller · JAMA 2003"],
  ["4.31%","Mortality attributable to infection due to medical care: deaths that would not otherwise have occurred.","Zhan &amp; Miller · JAMA 2003"]];
  return '<ul class="vrc">'+A.map(function(a){return '<li class="vrc-row"><span class="n">'+a[0]+'</span><p>'+esc(a[1])+'</p><span class="lab">'+a[2]+'</span></li>'}).join("")+'</ul>'+
   '<p class="vrc-src">Sources: Zimlichman E, et al. Health Care–Associated Infections: A Meta-analysis of Costs and Financial Impact on the US Health Care System. JAMA Internal Medicine. 2013;173(22):2039–2046. <a class="ul" href="https://doi.org/10.1001/jamainternmed.2013.9763" target="_blank" rel="noopener">doi:10.1001/jamainternmed.2013.9763</a> · Zhan C, Miller MR. Excess Length of Stay, Charges, and Mortality Attributable to Medical Injuries During Hospitalization. JAMA. 2003;290(14):1868–1874. <a class="ul" href="https://doi.org/10.1001/jama.290.14.1868" target="_blank" rel="noopener">doi:10.1001/jama.290.14.1868</a></p>'}
function partners(){var A=[
  ["NIH · NHLBI","Catalyze R61: automated vascular access device development","The R61 phase automates every step of cannulation, through placement of the sheath in the target vessel; the R33 phase is to build the sterile, patient-specific cassette and begin the FDA regulatory process.",["Funding","https://reporter.nih.gov/project-details/11282396","NIH RePORTER ↗"],"2026 award"],
  ["TEDCO · MII","Maryland Innovation Initiative","A Company Formation awardee, “advancing the development of automated vascular access”. TEDCO sponsors AVAD’s path from laboratory prototype to clinical-grade device.",["Sponsor","https://www.tedcomd.com/press-release/tedcos-maryland-innovation-initiative-announces-recent-company-formation-and","TEDCO release ↗"],"2025 award"],
  ["UM Build","University of Maryland","Funding that advances AVAD prototype development and validation testing at the University of Maryland.",["Funding","",""],0],
  ["MTECH · MIPS","Maryland Industrial Partnerships","Part of the Maryland Technology Enterprise Institute at the University of Maryland; funds collaborative research supporting AVAD engineering development.",["Funding","",""],0],
  ["MDC Studio","Venture studio","Vascular Rescue is an MDC Studio portfolio company.",["Portfolio","https://mdcstudio.com","mdcstudio.com ↗"],0]];
  return '<ul class="rd">'+A.map(function(a){var lk=a[3][1]?'<a class="lab ul" href="'+a[3][1]+'" target="_blank" rel="noopener">'+a[3][2]+'</a>':'';return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">'+a[4]+'</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function team(){var P=[
  ["Rajabrata Sarkar, MD, PhD","Founder, CEO · Vascular surgeon","sarkar.jpg","https://www.linkedin.com/in/rajabrata-sarkar-3399022/"],
  ["Gil Blankenship, PhD","Business &amp; technical adviser","blankenship.jpg","https://www.linkedin.com/in/gil-blankenship-74a0531/"],
  ["Jeffrey Gair, PhD","Lead engineer","gair.jpg","https://www.linkedin.com/in/jgairjr/"]];
  return '<div class="vrg">'+P.map(function(p){return '<a class="vrp" href="'+p[3]+'" target="_blank" rel="noopener" aria-label="'+p[0]+' on LinkedIn"><div class="ph"><img class="g" src="'+p[2]+'" alt="" width="225" height="268" loading="lazy" onerror="this.parentNode.style.display=\'none\'"><img class="c" src="'+p[2]+'" alt="'+p[0]+'" width="225" height="268" loading="lazy" onerror="this.style.display=\'none\'"><span class="go">'+ARR+'</span></div><h3>'+p[0]+'</h3><p>'+p[1]+' · LinkedIn</p></a>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Automated vascular access · Baltimore<span class="nomob">, Maryland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Expert access,</span><span class="l">on the first</span><span class="l"><em>attempt.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AVAD, the Automated Vascular Access Device, is the only device that automates the full Seldinger procedure end to end: targeting, insertion, detection and cannulation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">See how AVAD works '+ARR+'</a><a class="btn" href="#problem" data-to="problem">The problem</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap mrow">'+
   '<div class="mani-in"><span class="lab kick" data-r>The challenge</span>'+
   '<p class="txt" id="mani">Vascular access is where critical care begins, and where it too often fails. The technique behind it <em>has not fundamentally changed in decades.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">13M+</span><p class="k">Vascular access procedures a year in the United States, and roughly twice that worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5–20%</span><p class="k">Failure rates, depending on procedure and setting</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3–7%</span><p class="k">Central lines that fail on the first attempt in expert hands, even with ultrasound</p></div>'+
   '</div></div></section>'+
  '<section class="sec light" id="problem" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The problem</span><h2 class="d2 split">Every failure is <em>a patient.</em></h2></div><p data-r>Failed access attempts drive infection, hematoma, arterial injury during venous access, delayed treatment, longer stays and preventable deaths.</p></div>'+
   '<div class="vrq"><p class="lead2" data-r>Central venous catheters and arterial lines are the entry point for the medications, fluids, monitoring and dialysis that keep <em>the sickest patients alive.</em></p>'+
    '<div><p data-r>The technique that establishes them, a six-step manual procedure known as the Seldinger method, depends heavily on operator skill. Even in expert hands under ultrasound guidance, failures still occur. In less experienced hands, in emergency settings and in patients with difficult anatomy, failure rates climb sharply.</p>'+
    '<p data-r>Each failure adds $26K–$100K in unreimbursed hospital cost. Failures in arterial access can be fatal and need costly emergency procedures.</p></div></div>'+
   '<span class="lab kick" data-r style="display:block;margin-bottom:22px">What a failed access attempt costs</span>'+
   costs()+
  '</div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The solution · AVAD</span><h2 class="d3">Four subsystems. <em>One closed loop.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Insert</span><span>Detect</span><span>Cannulate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Vessel targeting.</h2><p>A built-in colour-flow ultrasound identifies the target vessel and shows it under a real-time crosshair. The clinician confirms the target on screen; the device does the rest.</p></article>'+
     '<article class="step"><h2>Automated needle insertion.</h2><p>Precise trajectory control and controlled advancement replace manual technique: the same expert-level approach angle and depth on every insertion, whoever is operating.</p></article>'+
     '<article class="step"><h2>Puncture detection.</h2><p>Electronic vessel-puncture detection confirms entry the moment it happens, and Doppler analysis tells arteries from veins in real time, eliminating mistaken arterial punctures during venous access.</p></article>'+
     '<article class="step"><h2>Complete cannulation.</h2><p>Automated guidewire and sheath placement completes the Seldinger sequence, the step other “AI-guided” systems leave to the operator, and carries the procedure through to a secured, ready-to-use access point.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Development</span><h2 class="d2 split">Proven where access <em>matters most.</em></h2></div><p data-r>Portable, self-contained and self-powered, AVAD is built to deliver expert-level access regardless of operator experience, patient anatomy or clinical setting.</p></div>'+
   '<div class="trl">'+
    '<div><span class="lab">Stage</span><h3>TRL 4</h3><p>A laboratory prototype, validated in vascular phantoms and in swine.</p></div>'+
    '<div><span class="lab">Validation</span><h3>Uniformed Services University</h3><p>Dr. Patrick Walker’s animal test facility has been used to confirm effective vascular access in swine.</p></div>'+
    '<div><span class="lab">Collaboration</span><h3>Military medicine</h3><p>With Patrick Walker, MD, FACS, Major, US Army, Program Director and Co-PI of the <a class="ul" href="https://sites.google.com/usuhs.edu/sur/research/bsos" target="_blank" rel="noopener">Battlefield Shock and Organ Support</a> team, where rapid access in the field decides survival.</p></div>'+
   '</div>'+
   '<span class="lab rd-h" data-r>Partners &amp; sponsors</span>'+
   partners()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Vascular surgery, <em>engineered.</em></h2></div><p data-r>Experts in vascular access and engineering, founded by a practising vascular surgeon.</p></div>'+
   '<div class="vrt"><div class="vrt-side"><p data-r>AVAD comes from the operating room: a vascular surgeon who sees what a failed line costs, working with engineers to automate every step of the procedure, not just the needle.</p><a class="btn" href="#research" data-to="research" data-r>Our development '+ARR+'</a></div>'+
    team()+'</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For clinicians, partners and investors</span>'+
   '<h2 class="big split">Let’s make access <em>routine.</em></h2>'+
   '<p class="sub" data-r>Talk to us about AVAD, research collaborations or partnering on the path from prototype to clinical-grade device.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#story" data-to="story">How AVAD works</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>The Wilkens-Robins Building</span><br><span>300 West Pratt Street, Ste 200</span><br><span>Baltimore, MD 21201</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Portfolio</span><p>An MDC Studio portfolio company</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>300 West Pratt Street, Ste 200<br>Baltimore, MD 21201</div>'+
   '<div class="c"><span class="lab">Device</span>AVAD · Automated Vascular<br>Access Device</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#problem" data-to="problem">The problem</a><br><a class="ul" href="#story" data-to="story">AVAD</a><br><a class="ul" href="#research" data-to="research">Development</a><br><a class="ul" href="#team" data-to="team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 44" aria-hidden="true"><text x="380" y="36" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.06em">VASCULAR RESCUE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vascular Rescue</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Vascular Rescue — Automated vascular access",x:"Home"}}'''

R["field"] = (HERE / "vascularrescue.field.js").read_text()
R["story"] = (HERE / "vascularrescue.story.js").read_text()

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
(HERE / "vascularrescue.src.html").write_text(out)
print("wrote", HERE / "vascularrescue.src.html", len(out))
