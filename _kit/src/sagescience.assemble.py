#!/usr/bin/env python3
"""Assemble sagescience.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/sagescience.assemble.py && node build.js src/sagescience.src.html ../sagescience/index.html
Facts: _kit/dossiers/sagescience.md. Palette: the live sagescience.com (logo navy #164175, button green #669933, white page,
Helvetica/Inter-like sans, lowercase rounded wordmark)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Sage Science — DNA size selection for next-generation sequencing</title>
<meta name="description" content="Sage Science builds automated electrophoresis systems for sequencing sample preparation: the Pippin family for DNA size selection, the HLS2 HMW Library System, SageELF fractionation and the MegaPulse and Pippin Pulse power supplies. Beverly, Massachusetts.">
<meta name="theme-color" content="#061428">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23061428'/%3E%3Ccircle cx='32' cy='32' r='24' fill='none' stroke='%23fff' stroke-width='4'/%3E%3Cpath d='M34 12C22 18 22 26 30 32S42 46 30 52' fill='none' stroke='%238cc152' stroke-width='5' stroke-dasharray='3 3'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Inter Tight:300,400; Inter:400,500; IBM Plex Mono:400; Nunito:300*/"

R["root"] = r''':root{
  --ink:#061428;--inkr:6,20,40;--boner:244,247,250;--accr:140,193,82;--ink2:#0a1c36;--ink3:#102544;--deep:#040e1e;
  --bone:#f4f7fa;--bone2:#e8eef4;--bone3:#d6dfe9;
  --stone:#a6b4c6;--stoneD:#4b5a6e;
  --acc:#4f7f22;--accL:#8cc152;--accD:#40691a;--navy:#164175;
  --hair:rgba(244,247,250,.14);--hairD:rgba(6,20,40,.16);
  --disp:'Inter Tight',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Inter Tight',system-ui,sans-serif;
  --sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#061428,#061428)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}
@media (max-width:860px){.fieldbg{background:#061428}
  html .hero{padding-top:calc(40svh + 8px)!important}
  html #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 36px),transparent calc(40svh + 4px));mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 36px),transparent calc(40svh + 4px))}}'''

# the mark: Sage Science's ring with a beaded S-shaped spine (redrawn from the logo on sagescience.com)
MARK = '<circle class="sr" cx="15" cy="15" r="13.6"/>' + '<circle class="sd" cx="15.00" cy="3.50" r="0.70"/><circle class="sd" cx="12.80" cy="5.42" r="0.89"/><circle class="sd" cx="11.15" cy="7.33" r="1.07"/><circle class="sd" cx="10.52" cy="9.25" r="1.23"/><circle class="sd" cx="11.08" cy="11.17" r="1.35"/><circle class="sd" cx="12.72" cy="13.08" r="1.42"/><circle class="sd" cx="15.00" cy="15.00" r="1.45"/><circle class="sd" cx="17.28" cy="16.92" r="1.42"/><circle class="sd" cx="18.92" cy="18.83" r="1.35"/><circle class="sd" cx="19.48" cy="20.75" r="1.23"/><circle class="sd" cx="18.85" cy="22.67" r="1.07"/><circle class="sd" cx="17.20" cy="24.58" r="0.89"/><circle class="sd" cx="15.00" cy="26.50" r="0.70"/>'

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:11px;height:56px;color:var(--bone)}
.brand svg.sm{width:32px;height:32px;flex:none;overflow:visible}
.brand .sr{fill:none;stroke:var(--bone);stroke-width:1.5}
.brand .sd{fill:var(--accL)}
.brand .bt{font:300 25px/1 'Nunito',system-ui,sans-serif;letter-spacing:.01em;white-space:nowrap;padding-bottom:3px}'''

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
.scene svg *{vector-effect:none}
.scene .ssg{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .ssb{fill:rgba(30,62,104,.28);stroke:rgba(var(--boner),.7);stroke-width:1.4}
.scene .sse{fill:none;stroke:rgba(var(--boner),.2);stroke-width:1}
.scene .ssr{fill:rgba(90,140,220,.08);stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .sspt{fill:none;stroke:#e6dfcc;stroke-width:1.6}
.scene .ssl{fill:rgba(110,160,240,.12);stroke:rgba(var(--boner),.62);stroke-width:1.1}
.scene .ssw{fill:#040e1e;stroke:rgba(var(--boner),.7);stroke-width:1.1}
.scene .ssm{fill:none;stroke:#f4f7fa;stroke-width:2;stroke-dasharray:5 4}
.scene .sscl{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .ssbr{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .ssel{fill:var(--ink2);stroke:rgba(var(--boner),.6);stroke-width:1.3}
.scene g.on .ssel{fill:var(--accL);stroke:var(--accL)}
.scene .ssdna{fill:#9dffb4;filter:drop-shadow(0 0 4px rgba(110,255,150,.85))}
.scene .sspip{fill:rgba(230,238,248,.1);stroke:rgba(var(--boner),.8);stroke-width:1.2}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9d3df;paint-order:stroke;stroke:#0a1c36;stroke-width:5px;stroke-linejoin:round}
.scene text.ssa{fill:var(--accL)}
.scene text.cap{fill:var(--accL)}
/* ===== Sage Science additions ===== */
.ftr .fcv{opacity:.3}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,4.6vw,94px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:12ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--navy);border-color:var(--navy);color:var(--bone)}
.light .btn.solid::before{background:var(--acc)}
.light .btn.solid:hover{color:#fff;border-color:var(--acc)}
.btn,.btn::before,.btn.solid{border-radius:0}
.stat .v{font-size:clamp(48px,4.6vw,86px);font-weight:300;letter-spacing:-.04em;white-space:nowrap}
.stat .v small{font-size:.5em;letter-spacing:-.01em;margin-left:.12em;color:var(--accL)}
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

R["scenecss"] += r'''
.pils{grid-template-columns:repeat(3,minmax(0,1fr))!important;row-gap:56px}
@media (max-width:1100px){.pils{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
@media (max-width:620px){.pils{grid-template-columns:1fr!important}}
.tm3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
@media (max-width:1024px){.tm3{grid-template-columns:1fr}}
.tm-wrap{display:grid;grid-template-columns:minmax(0,3.4fr) minmax(0,8.6fr);gap:clamp(32px,5vw,96px);align-items:start}
@media (max-width:1024px){.tm-wrap{grid-template-columns:1fr}}
@media (max-width:860px){html .fieldbg{background:#061428}}
.light+.cta{border-top-color:var(--hairD)}
.rd-h{margin:clamp(72px,8vw,120px) 0 22px;font-family:var(--disp);font-weight:300;font-size:clamp(24px,2vw,32px);letter-spacing:-.02em}
'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("sagescience-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><circle cx="48" cy="48" r="40" fill="none"/><path d="M50 12C32 22 32 36 46 46S62 70 46 84"/></svg>
    <div class="wm"><span>SAGE SCIENCE</span></div>
  </div>
  <span class="lab pl">DNA size selection · Beverly, Massachusetts</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Sage Science, home"><svg class="sm" viewBox="0 0 30 30" aria-hidden="true">' + MARK + '</svg><span class="bt">sage science</span></a>'

NAV = [("story", "Technology"), ("products", "Products"), ("applications", "Applications"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Office</span><br>500 Cummings Center, Beverly, MA</div>
    <div><span class="lab">Email</span><br>info@sagescience.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Sage Science</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Sage Science";\nvar PK="sagescience";'

R["content"] = r'''var FONTS=['300 1em "Inter Tight"','400 1em "Inter Tight"','400 1em "Inter"','500 1em "Inter"','400 1em "IBM Plex Mono"','300 1em "Nunito"'];
var MAIL="info@sagescience.com";
var RP="https://reporter.nih.gov/project-details/";
var SB="https://sagescience.com/";
var SECS={technology:"story",products:"products",applications:"applications",team:"team",news:"news",contact:"contact"};
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-07-22",s:"Product launch",t:"New MegaPulse pulsed-field electrophoresis power supply resolves DNA up to 1.6 Mb",u:SB+"blog/new-megapulse-electrophoresis-power-supply/"},
 {d:"2026-07-20",s:"Citation",t:"MASTR-seq enables multiplexed analysis of short tandem repeats with sequencing",u:SB+"citation/mastr-seq-enables-multiplexed-analysis-of-short-tandem-repeats-with-sequencing/"},
 {d:"2025-11-05",s:"Product news",t:"New BluePippin 2.5% agarose cassettes for high sizing accuracy between 100 and 600 bp",u:SB+"blog/need-more-accuracy-between-100-600bp-new-2-5-agarose-cassettes/"},
 {d:"2025-09-22",s:"NIH · NHGRI",t:"NIH SBIR Phase II award to automate size selection for long-read sequencing libraries at scale",u:RP+"11128542"},
 {d:"2025-07-11",s:"Product news",t:"New PippinHT cassette: >10 kb high-pass with internal standards",u:SB+"blog/new-pippinht-cassette-10kb-high-pass-with-internal-standards/"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function prd(){var A=[
  ["PippinHT","High-throughput DNA size selection","Sage’s sizing technology at 24 samples per run, against a maximum of five on Pippin Prep or BluePippin: an automated solution for busy sequencing labs, core facilities and large-scale sequencing.",["Selects 100 bp – 1.5 kb","High pass up to 40 kb","Built-in CPU"],"24 samples"],
  ["BluePippin","DNA size selection with pulsed field","Everything Pippin Prep does, plus pulsed-field electrophoresis to resolve and collect high molecular weight DNA. High-pass filtering collects every fragment above a threshold for long-read sequencing.",["Selects 100 bp – 50 kb","Up to 5 samples per cassette","PacBio and Oxford Nanopore workflows"],"Pulsed field"],
  ["Pippin Prep","Short-read NGS library construction","Narrow, even fragment distributions, or wide ranges with minimal effort, for the most popular NGS platforms. Runs take as little as 30 minutes, with no possibility of cross-contamination.",["Selects 100 bp – 1.5 kb","Recommended by Illumina and Ion Torrent for certain workflows"],"The original"],
  ["HLS2 HMW Library System","Extract. React. Select.","HMW DNA extraction and Cas9 target selection of large genomic regions. With HLS-CATCH, guide RNAs capture regions up to 500 kb for structural variation and phasing.",["Optical mapping","Long-read sequencing","Linked reads"],"Cas9"],
  ["SageELF","Whole-sample fractionation","Separates a DNA or protein sample by size and fractionates all of it, or a section, into 12 contiguous fractions, with pulsed field for large DNA.",["DNA up to 40 kb","Proteins up to 500 kDa"],"12 fractions"],
  ["MegaPulse","Pulsed-field electrophoresis power supply","FIGE and ZIFE modes and seven pre-validated protocols, driving one or two standard midi gel boxes at once: complete HMW DNA analysis in one compact instrument.",["Resolves 0.5 kb – 1.6 Mb","Touchscreen option"],"New · 2026"],
  ["Pippin Pulse","Electrophoresis power supply","Pulsed-field power supply for analytical gels on a midi gel box.",["Resolves DNA up to 400 kb"],""]];
  return '<ul class="prd prd-grid">'+A.map(function(a){return '<li class="prd-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">'+esc(a[4])+'</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'}
function rd(){var A=[
  ["2022–","High-throughput size selection for long-read sequencing libraries","SBIR Phase I and II from the National Human Genome Research Institute, now in its third year, with a $957,480 award in September 2025.",["NIH · NHGRI · R44HG012531","11128542"],"Active"],
  ["2018–2020","Targeted long-read sequencing sample preparation using Cas9 nucleases","The SBIR programme behind HLS-CATCH: Cas9 purification of large genomic targets directly from cells.",["NIH · NHGRI · R44HG010438","9980971"],""],
  ["2015–2016","Cells-to-sequence sample preparation for next-generation sequencing","SBIR work on preparing sequencing libraries directly from cells, which led to the SageHLS platform.",["NIH · NHGRI · R44HG008720","9115216"],""]];
  return '<ul class="rd">'+A.map(function(a){var u=RP+a[3][1];
    return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">'+a[4]+'</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span><a class="lab ul" href="'+u+'" target="_blank" rel="noopener">NIH RePORTER ↗</a></div></li>'}).join("")+'</ul>'}
function pils(){var C=[
  ["DNA sequencing","NGS sample prep for short-read and long-read platforms.",'<path d="M8 28H48"/><path class="a" d="M14 20V36M24 22V34M34 18V38M44 24V32"/>'],
  ["RNA sequencing · microRNA","More efficient RNA-seq workflows, and highly accurate targeting of microRNAs and other small RNAs.",'<path d="M6 28C14 14 22 42 30 28S46 14 50 28"/><circle class="a" cx="30" cy="28" r="3"/>'],
  ["HMW target capture","HLS-CATCH uses Cas9 guide RNAs to capture genomic regions up to 500 kb.",'<path d="M6 28H50"/><path class="a" d="M18 18V38M38 18V38"/><path d="M18 28H38" stroke-width="3"/>'],
  ["Genotyping","Massively parallel genotyping with ddRAD-seq.",'<rect x="8" y="8" width="40" height="40"/><path class="a" d="M8 20H48M8 32H48M8 44H48"/>'],
  ["Cell-free DNA","Isolate small cfDNA fragments for study.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M20 26H26M30 32H36M24 36H30"/>'],
  ["Proteomics","Whole-sample or targeted protein fractionation, up to 500 kDa.",'<path d="M10 46V10"/><path class="a" d="M16 14H42M16 22H38M16 30H44M16 38H34"/>']];
  return '<div class="pils">'+C.map(function(c,i){return '<div class="pil"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function team(){var T=[
  ["Sadaf Hoda","CEO","More than 20 years in life sciences, building lab operations from the ground up. Sage’s fourth employee, she helped develop the first Pippin prototypes, built the applications team, led product launches and corporate operations, and has been CEO since 2022."],
  ["T. Chris Boles, PhD","Chief Scientific Officer","An expert in molecular biology instruments, consumables and reagents. At Mosaic Technologies he led the development of bridge amplification, a foundation of Illumina’s sequencing platform. Formerly VP of R&D at Matrix Technologies, and an assistant professor at Brandeis."],
  ["Patrick Carroll","Executive Vice President","Thirty years building high-performing sales organizations. Employee 15 at Applied Biosystems, later Senior VP of Worldwide Sales, and nearly a decade leading North American sales at Bio-Rad."]];
  return '<div class="tm3">'+T.map(function(t){return '<div class="tm-p"><h3>'+esc(t[0])+'</h3><span class="cr">'+esc(t[1])+'</span><p>'+esc(t[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>DNA size selection · Beverly, Massachusetts</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Better libraries</span><span class="l">start with</span><span class="l"><em>precise sizing.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sage Science builds automated electrophoresis systems for sequencing sample prep. Pippin instruments size-select DNA from 100 bp to 50 kb, so every library is cleaner, more reproducible and ready to sequence.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How Pippin works '+ARR+'</a><a class="btn" href="#products" data-to="products">Our products</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our technology</span>'+
   '<p class="txt" id="mani">Science is more robust when it rests on <em>precise, automated, reproducible</em> technology, not manual steps that bring variability and error. So we automate the steps of a workflow that matter most.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">24</span><p class="k">Samples size-selected in one PippinHT run</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50<small>kb</small></span><p class="k">Upper limit of BluePippin size selection, with pulsed field</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.6<small>Mb</small></span><p class="k">DNA resolved on a standard gel with the new MegaPulse</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Pippin</span><h2 class="d3">Size selection, <em>automated.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Load</span><span>Separate</span><span>Divert</span><span>Collect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Load a precast cassette.</h2><p>Pippin’s disposable cassettes come precast with agarose. Each sample lane is physically separate, so there is no chance of cross-contamination, and markers run in a dedicated lane or inside the sample lane itself.</p></article>'+
     '<article class="step"><h2>Fragments sort by size.</h2><p>DNA separates along the gel column. The instrument detects the markers as they pass and uses them to find the fragments that match the size range you entered in the software.</p></article>'+
     '<article class="step"><h2>The range is diverted.</h2><p>Each lane branches, with three electrodes. When the programmed range reaches the branch point, the instrument switches the active electrode and sends that DNA into a membrane-bound buffer chamber.</p></article>'+
     '<article class="step"><h2>Collect it with a pipette.</h2><p>Once the range is collected, the electrode switches back to the separation channel. Your sized DNA waits in buffer, ready to remove with a standard pipette: no manual gel cutting, no gel extraction.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Instruments for <em>sample prep.</em></h2></div><p data-r>The Pippin family for targeted DNA size selection, the HLS2 for high molecular weight DNA, SageELF for whole-sample fractionation, and two pulsed-field power supplies. All designed and built in Beverly.</p></div>'+
   prd()+
  '</div></section>'+
  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">From short reads <em>to megabases.</em></h2></div><p data-r>The Pippin platform has become a key tool for building high-quality next-gen sequencing libraries, and Sage systems serve labs from sequencing cores to proteomics.</p></div>'+
   pils()+'<h3 class="rd-h" data-r>Research funded by the NIH</h3>'+rd()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by people who <em>built Pippin.</em></h2></div><p data-r>Sage Science is privately funded. It is headquartered and manufactures at 500 Cummings Center in Beverly, Massachusetts.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec light" id="news" data-theme="light" style="padding-top:0"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Sage Science.</em></h2></div><p data-r>New instruments and cassettes, citations and funding.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For sequencing labs, core facilities and researchers</span>'+
   '<h2 class="big split">Let’s size your <em>next library.</em></h2>'+
   '<p class="sub" data-r>Ask about an instrument, a cassette or a quote, or get help from our technical support team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#products" data-to="products">See the products</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>Sage Science, Inc., Suite 2400</span><br><span>500 Cummings Center, Beverly, MA 01915</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:support@sagescience.com">support@sagescience.com</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+19789221832">978.922.1832</a><br><span>Support <a class="ul" href="tel:+18887440144">888.744.0144</a></span></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Suite 2400, 500 Cummings Center<br>Beverly, MA 01915</div>'+
   '<div class="c"><span class="lab">Products</span>PippinHT · BluePippin · Pippin Prep<br>HLS2 · SageELF<br>MegaPulse · Pippin Pulse</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#products" data-to="products">Products</a><br><a class="ul" href="#applications" data-to="applications">Applications</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19789221832">978.922.1832</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Nunito\',system-ui,sans-serif;font-weight:300;font-size:46px;letter-spacing:.02em">sage science</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sage Science, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Sage Science — DNA size selection for next-generation sequencing",x:"Home"}}'''

R["field"] = (HERE / "sagescience.field.js").read_text()
R["story"] = (HERE / "sagescience.story.js").read_text()


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
(HERE / "sagescience.src.html").write_text(out)
print("wrote", HERE / "sagescience.src.html", len(out))
