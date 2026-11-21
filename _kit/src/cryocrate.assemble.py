#!/usr/bin/env python3
"""Assemble cryocrate.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/cryocrate.assemble.py && node build.js src/cryocrate.src.html ../cryocrate/index.html
Facts: _kit/dossiers/cryocrate.md. Palette: the live cryocrate.com logo (#005399 navy-blue, #0097d1 cyan) and link blue #0465a7."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>CryoCrate — Cell and tissue cryopreservation</title>
<meta name="description" content="CryoCrate develops cryopreservation media and devices, C80EZ, IcyEye and InstaVitria, that keep cells and tissues viable through freezing and allow long-term storage in a regular -80 °C lab freezer instead of liquid nitrogen. Columbia, Missouri.">
<meta name="theme-color" content="#071523">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 55 55'%3E%3Cpath d='M51.99 24.42a5.86 5.86 0 00-5.86-5.87h-8.08v11.68a7.89 7.89 0 01-7.89 7.89H18.48v8.09a5.86 5.86 0 005.86 5.86h21.79a5.86 5.86 0 005.86-5.86z' fill='%23005399'/%3E%3Cpath d='M16.45 31.56v-7.19a8 8 0 018-8.04h11.68V8.44a5.86 5.86 0 00-5.86-5.87H8.37A5.86 5.86 0 002.5 8.44v22.0a5.86 5.86 0 005.87 5.86h8.08z' fill='%23005399'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Newsreader:300,400,300i; Lato:400,700; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#071523;--inkr:7,21,35;--boner:242,246,249;--accr:0,151,209;--ink2:#0a1b2c;--ink3:#0f2337;--deep:#050f1a;
  --bone:#f2f6f9;--bone2:#e6edf3;--bone3:#d3dee8;
  --stone:#a3b3c2;--stoneD:#4b5c6c;
  --acc:#0097d1;--accL:#52c3ee;--accD:#005399;
  --hair:rgba(242,246,249,.14);--hairD:rgba(7,21,35,.16);
  --disp:'Newsreader',Georgia,'Times New Roman',serif;
  --serif:'Newsreader',Georgia,serif;
  --sans:'Lato',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#071523,#071523)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the mark: CryoCrate's own logo icon (two interlocking rounded squares with the diagonal ice lines), from cryocrate.com/images/logo-icon.svg
MARK = ('<path class="cm-b" d="M51.99 24.42a5.86 5.86 0 00-5.86-5.87h-8.08v11.68c0 .13 0 .27-.01.4a7.89 7.89 0 01-7.88 7.48H18.48v8.09a5.84 5.84 0 005.86 5.86h21.79a5.86 5.86 0 005.86-5.86z"/>'
        '<path class="cm-b" d="M16.45 31.56v-7.19a8.06 8.06 0 01.63-3.04 7.92 7.92 0 013.61-3.91 8.13 8.13 0 013.65-.9h11.68V8.44a5.86 5.86 0 00-5.86-5.87H8.37a6.1 6.1 0 00-2.71.67A5.89 5.89 0 002.5 8.44v22.0a5.86 5.86 0 005.87 5.86h8.08z"/>'
        '<path class="cm-a" d="M36.02 26.05v-7.5h-7.44a51.23 51.23 0 007.44 7.5M35.31 33.02a7.37 7.37 0 00.7-2.79 44.69 44.69 0 00-11.77-11.61 6.09 6.09 0 00-2.66.69 71.4 71.4 0 0013.73 13.71M18.48 28.6v7.5h7.61a44.47 44.47 0 00-7.61-7.5M19.17 21.66a5.93 5.93 0 00-.69 2.66 51.42 51.42 0 0011.64 11.77 6.95 6.95 0 002.84-.72 61.85 61.85 0 00-13.79-13.71M7.92 38.11H6.54l9.9 9.9v-9.89H8.37zM48.37 16.51L38.05 6.2v10.31z"/>')

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.cmk{width:30px;height:30px;flex:none;overflow:visible}
.brand .cm-b{fill:#1f74bf}
.brand .cm-a{fill:var(--accL)}
.light-nav .brand .cm-b,.on-light .brand .cm-b{fill:var(--accD)}
.brand .bt{font:400 25px/1 var(--disp);letter-spacing:-.005em;white-space:nowrap}'''

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
.scene .cg{stroke:rgba(var(--boner),.045);stroke-width:1}
.scene .cn{fill:rgba(82,195,238,.16);stroke:rgba(150,215,245,.75);stroke-width:.8}
.scene .cp{fill:none;stroke:#7fd3c4;stroke-width:1.5;stroke-linecap:round}
.scene .cm{fill:rgba(var(--accr),.06);stroke:var(--bone);stroke-width:1.6;transition:stroke .4s}
.scene .cm.hurt{stroke:#e8a54b}
.scene .cm.ok{stroke:var(--accL);fill:rgba(var(--accr),.1)}
.scene .cm2{fill:none;stroke:rgba(var(--boner),.22);stroke-width:1}
.scene .cnu{fill:rgba(var(--boner),.04);stroke:rgba(var(--boner),.7);stroke-width:1.2}
.scene .cnl{fill:rgba(var(--boner),.12);stroke:rgba(var(--boner),.55);stroke-width:1}
.scene .cor{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .cer{fill:none;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .cb{fill:rgba(190,230,255,.05);stroke:#d9efff;stroke-width:1.5;stroke-linejoin:miter}
.scene .ct{fill:none;stroke:#e8a54b;stroke-width:2}
.scene .cs{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.2}
.scene .cs2{fill:none;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .cx{fill:none;stroke:#e8a54b;stroke-width:1.6}
.scene .cd{fill:var(--accL);stroke:var(--ink2);stroke-width:2}
.scene .cok{fill:none;stroke:var(--accL);stroke-width:2.4}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c6d2dd;paint-order:stroke;stroke:#0a1b2c;stroke-width:5px;stroke-linejoin:round}
.scene text.ca,.scene text.cap{fill:var(--accL)}
.scene text.cw{fill:#e8a54b}
/* ===== CryoCrate additions (row styles shared with the engine) ===== */
.ftr .fcv{opacity:.32}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.4vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
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
/* R&D programmes (NIH) */
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
.caps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(64px,7vw,110px)}
.cap{border-top:1px solid var(--hair);padding-top:24px;position:relative}
.cap::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.cap:hover::before{transform:scaleX(1)}
.cap svg{width:56px;height:56px;margin-bottom:24px;overflow:visible;display:block}
.cap svg *{fill:none;stroke:var(--bone);stroke-width:1.1}
.cap svg .a{stroke:var(--accL)}
.cap h3{font-family:var(--disp);font-weight:300;font-size:clamp(22px,1.8vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0 0 14px}
.cap p{color:var(--stone);font-size:15.5px;margin:0;max-width:38ch}
.cap .lab{display:block;margin-bottom:14px;color:var(--accL)}
@media (max-width:900px){.caps{grid-template-columns:1fr;row-gap:40px}}
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
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
/* ===== CryoCrate ===== */
.ftr .fcv{opacity:.3}
.hero .eyebrow{color:var(--accL)}
.hero .hero-h{font-family:var(--disp);font-weight:300;font-size:clamp(48px,5.2vw,104px);letter-spacing:-.025em;line-height:1.0;max-width:11ch}
.d1,.d2,.d3,.big,.mani .txt,.step h2,.step h3{font-family:var(--disp);font-weight:300;letter-spacing:-.02em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em,.hero .hero-h em{font-style:italic;font-weight:300;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em,.cta .big em{color:var(--accD)}
.prd-row h3,.rd-row h3,.cap h3,.tm-p h3{font-family:var(--disp);letter-spacing:-.015em}
.prd-row h3 sup{font-size:.42em;vertical-align:.95em;margin-left:2px;color:var(--accD)}
.prd-row .vars{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:14px}
.prd-row .vars span{font:400 11px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ink)}
.prd-row .tag.pend{background:transparent;color:var(--accD);border:1px solid var(--accD);padding:5px 7px 4px}
.prd-row .tag.rnd{background:transparent;color:var(--stoneD);border:1px solid var(--stoneD);padding:5px 7px 4px}
.prd-row .meta a{color:var(--ink)}
.hero .btn.solid,.dark .btn.solid{color:var(--ink)}
.hero .btn.solid:hover{color:var(--ink)}
@media (max-width:860px){.hero .hero-h{font-size:clamp(40px,11vw,72px)}.hero .hero-h .l{white-space:normal}}
'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("cryocrate-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M48 10V86M15 29L81 67M15 67L81 29M48 22l-7-7M48 22l7-7M48 74l-7 7M48 74l7 7M26 35l-9 2M26 35l-2-9M70 61l9-2M70 61l2 9M26 61l-2 9M26 61l-9-2M70 35l2-9M70 35l9 2"/></svg>
    <div class="wm"><span>CRYOCRATE</span></div>
  </div>
  <span class="lab pl">Life in nano ice · Columbia, Missouri</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="CryoCrate, home"><svg class="cmk" viewBox="0 0 55 55" aria-hidden="true">' + MARK + '</svg><span class="bt">CryoCrate</span></a>'

NAV = [("story", "Technology"), ("products", "Products"), ("research", "Research"), ("team", "Team")]
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
    <div><span class="lab">Lab</span><br>Columbia, Missouri</div>
    <div><span class="lab">Phone</span><br>573-884-4576</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">CryoCrate</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="CryoCrate";\nvar PK="cryocrate";'

R["content"] = r'''var FONTS=['300 1em "Newsreader"','400 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Lato"','700 1em "Lato"','400 1em "IBM Plex Mono"'];
var MAIL="xu.han@cryocrate.com";
var RP="https://reporter.nih.gov/project-details/";
var STORE="https://store.cryocrate.com/order/";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-09-04",s:"NIH · NCI",t:"Second year of the R33 award for NK-cell cryopreservation",u:RP+"11417248"},
 {d:"2025-08-18",s:"NIH · ORIP",t:"SBIR Phase II continues: a biocompatible cryopreservation platform for cell-based therapeutics",u:RP+"11190815"},
 {d:"2023-10-06",s:"CryoCrate",t:"InstaVitria® patent granted in India and China",u:"https://www.cryocrate.com/news.html"},
 {d:"2023-10-01",s:"CryoCrate",t:"IcyEye® patent granted in India",u:"https://www.cryocrate.com/news.html"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function prd(){var A=[
  ["C80EZ","Cryopreservation media · versatile product line","“Easy for −80 °C.” Biocompatible polymer combinations promote nanoscale cubic ice, so cells and tissues keep their viability and function and can be stored long-term in a regular lab deep freezer, or shipped on dry ice instead of in a liquid nitrogen dry shipper.",["Standard","2X","Tissue","Neuron","Insect","Competent"],["On the market since 2017",""],1],
  ["IcyEye","Corneal cryopreservation kit","A disposable ice-filtering device with a nanostructured membrane, plus C80EZ-CORNEA medium. Donor corneas keep over 95% post-thaw endothelial viability and their clarity, stored in regular −80 °C freezers, and the kit fits into eye banks’ existing routine.",[],["Seeking FDA clearance","pend"],0],
  ["InstaVitria","Ultra-fast cooling system","Balanced arrays of liquid and cold-gas nitrogen jets cool the cells on a thin tissue’s surface at over 10⁶ K/min, two orders of magnitude faster than plunging into liquid nitrogen, so cells vitrify without any cell-permeating cryoprotectant.",[],["Under R&D","rnd"],0],
  ["OdinSol","Biocompatible cryopreservation media","Based on CryoCrate’s “Hexagonal-ice Ablation on Nano-scale” (HAN) mechanism: long-term cryopreservation without toxic, cell-permeating cryoprotectants, developed for skin banking and for CAR-T and NK cells.",[],["In development · NIH SBIR","rnd"],0]];
  return '<ul class="prd">'+A.map(function(a){return '<li class="prd-row"><div><h3>'+esc(a[0])+'<sup>®</sup></h3><span class="nm3">'+esc(a[1])+'</span></div><div><p>'+esc(a[2])+'</p>'+(a[3].length?'<div class="vars">'+a[3].map(function(v){return '<span>'+esc(v)+'</span>'}).join("")+'</div>':'')+'</div><div class="meta"><span class="tag'+(a[4][1]?' '+a[4][1]:'')+'">'+esc(a[4][0])+'</span>'+(a[5]?'<a class="lab ul" href="'+STORE+'" target="_blank" rel="noopener">Order online ↗</a>':'')+'</div></li>'}).join("")+'</ul>'}
function rd(){var A=[
  ["2025–2028","NK cells that still migrate and kill after thawing","A novel biocompatible, high-throughput cryopreservation medium and method for enhanced post-thaw migration and cytotoxicity of NK cells.",["NCI · R33","11417248"],1],
  ["2024–2027","A cryopreservation platform for cell-based therapeutics","Establishing a first-in-class biocompatible and efficient cryopreservation technology platform for the next generation of cell-based therapeutics in regenerative medicine and drug discovery.",["ORIP · SBIR Phase II","11190815"],1],
  ["2022–2025","Biobanking for CAR-T and NK cell therapies","OdinSol cryopreserved CAR-T and NK cells in regular deep freezers without DMSO, and increased their post-thaw cytotoxicity; this award supports a GMP production line and studies in humanized mice.",["NCI · SBIR Phase II","10705271"],0],
  ["2022–2025","Skin banking and transplantation","Long-term, efficient cryopreservation of skin grafts with a first-in-class biocompatible technology, without toxic, cell-permeating cryoprotectants.",["NIAID · SBIR Phase II","10618957"],0],
  ["2021–2025","A cornea cryopreservation kit, towards the clinic","Late-stage preclinical development and cGMP production of IcyEye, based on FDA feedback.",["NEI · SBIR Phase II","10476603"],0]];
  return '<ul class="rd">'+A.map(function(a){var lk=a[3][1]?'<a class="lab ul" href="'+RP+a[3][1]+'" target="_blank" rel="noopener">NIH RePORTER ↗</a>':'';return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Active</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Smaller ice","Polymers that steer freezing towards nanoscale cubic ice and stop hexagonal crystals regrowing during storage and warming.",'<path d="M28 6V50M9 17L47 39M9 39L47 17"/><path class="a" d="M28 14l-5-5M28 14l5-5M28 42l-5 5M28 42l5 5"/>'],
  ["Filtered ice","A nanostructured membrane that keeps cell-damaging ice crystals from forming in front of the corneal endothelium.",'<path d="M6 16H50M6 40H50"/><path class="a" d="M6 28H50" stroke-dasharray="3 4"/><path d="M14 8l4 4-4 4M38 8l4 4-4 4"/>'],
  ["No ice at all","Cooling fast enough that cells vitrify, solidifying without forming ice, with no cell-permeating cryoprotectant.",'<rect x="12" y="12" width="32" height="32"/><path class="a" d="M4 6l10 8M20 2l2 10M36 2l-2 10M52 6l-10 8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cell and tissue cryopreservation<span class="nomob"> · Columbia, Missouri</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Life, kept</span><span class="l">in <em>nano ice.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CryoCrate makes cryopreservation media and devices that keep cells and tissues viable through freezing, and lets you store them in a regular −80 °C lab freezer instead of liquid nitrogen.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How C80EZ works '+ARR+'</a><a class="btn" href="#products" data-to="products">Our products</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why CryoCrate</span>'+
   '<p class="txt" id="mani">Many cells and tissues cannot be frozen today, or lose their viability in the freeze-thaw. The damage is done by ice, so we change the ice, <em>from large hexagonal crystals to nanoscale cubic ice.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">−80<sup>°C</sup></span><p class="k">Long-term storage in a regular lab deep freezer, with no liquid nitrogen</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;95<sup>%</sup></span><p class="k">Post-thaw viability of human corneal endothelial cells with IcyEye</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10<sup>6</sup></span><p class="k">Kelvin per minute: InstaVitria’s cooling rate on a thin tissue’s surface</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · C80EZ</span><h2 class="d3">The damage is the ice. <em>So we shrink it.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ice</span><span>Polymers</span><span>Storage</span><span>Thaw</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Ordinary ice tears cells.</h2><p>Slow cooling grows large hexagonal ice crystals, and they keep growing in storage and on warming. That ice mechanically damages tissue structures and fragile cells.</p></article>'+
     '<article class="step"><h2>Polymers make the ice small.</h2><p>C80EZ applies unique biocompatible polymer combinations that promote nanoscale cubic ice and minimise the size of hexagonal crystals (international patent filing).</p></article>'+
     '<article class="step"><h2>Stable at −80 °C.</h2><p>Because the ice does not regrow, frozen samples stay thermally stable: long-term storage in a regular −70 to −80 °C lab freezer, and shipping in dry ice boxes instead of liquid nitrogen dry shippers.</p></article>'+
     '<article class="step"><h2>Cells come back working.</h2><p>Anti-apoptosis agents and antioxidants cut cell loss further, improving post-thaw viability and function for cells and tissues that are traditionally difficult to cryopreserve.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A trio of technologies, <em>one aim.</em></h2></div><p data-r>Media for the lab bench today, a corneal kit on its way to eye banks, and a cooling system that needs no cryoprotectant at all: each built on CryoCrate’s own inventions.</p></div>'+
   prd()+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research · NIH SBIR</span><h2 class="d2 split">From the bench to <em>cell therapy.</em></h2></div><p data-r>Supported by the National Institutes of Health, CryoCrate takes its biocompatible cryopreservation from corneas and skin grafts to the CAR-T and NK cells used in cancer immunotherapy.</p></div>'+
   rd()+caps()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by a <em>cryobiologist.</em></h2></div><p data-r>CryoCrate was founded in 2012 to pursue the innovation of cryopreservation devices and related media, and works with research centres at the University of Missouri.</p></div>'+
   '<div class="tm"><div class="tm-side"><p>Its C80EZ media have been tested by researchers at the University of Missouri, the USDA Agricultural Research Service, Wayne State University and the Danforth Plant Science Center.</p><a class="btn" href="'+RP+'11417248" target="_blank" rel="noopener">The current NIH award '+ARR+'</a></div>'+
    '<div class="tm-p"><h3>Dr. Xu Han</h3><span class="cr">Founder · President and Chief Technology Officer</span>'+
     '<p>An internationally recognised cryobiologist, Top Reviewer for the journal Cryobiology and an NIH SBIR proposal reviewer. He holds a PhD in mechanical engineering and cryobiology and trained as a postdoctoral researcher in cryopreservation for comparative medicine.</p>'+
     '<ul class="tm-x"><li><span class="lab">Faculty</span>Adjunct, School of Medicine, University of Missouri</li><li><span class="lab">Vision</span>Adjunct Member, Vision Research Center, UMKC</li><li><span class="lab">Awards</span>NIH, USDA and Coulter</li></ul></div></div>'+
   '<div class="shead" style="margin:clamp(72px,8vw,120px) 0 28px"><h2 class="d3 split">News</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For labs, biobanks, eye banks and cell-therapy teams</span>'+
   '<h2 class="big split">Freeze it. <em>Bring it back.</em></h2>'+
   '<p class="sub" data-r>Order C80EZ media online, or talk to us about your cells and tissues, from a pilot to a partnership.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+STORE+'" target="_blank" rel="noopener">Order online</a></div>'+
   '<div class="ctc2"><div><span class="lab">Lab</span><p><span>1601 S. Providence Road</span><br><span>Columbia, Missouri 65211</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+15738844576">573-884-4576</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Lab</span>1601 S. Providence Road<br>Columbia, Missouri 65211</div>'+
   '<div class="c"><span class="lab">Products</span>C80EZ® · IcyEye®<br>InstaVitria® · OdinSol®</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#products" data-to="products">Products</a><br><a class="ul" href="#research" data-to="research">Research</a><br><a class="ul" href="#team" data-to="team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15738844576">573-884-4576</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="48" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:300;font-size:60px;letter-spacing:.02em">CryoCrate</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CryoCrate, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"CryoCrate — Cell and tissue cryopreservation",x:"Home"}}'''

R["field"] = (HERE / "cryocrate.field.js").read_text()
R["story"] = (HERE / "cryocrate.story.js").read_text()

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
# firelight's warm leftovers -> CryoCrate's cold palette; a taller phone band for the crystal (CW)
for a, b in [("#120e0b", "#071523"), ("#a39684", "#9aabbb"), ("#7a6a58", "#5d7488"), ("#c2b6a4", "#c6d2dd"), ("calc(34svh - 130px)", "calc(42svh - 60px)"), ("calc(34svh - 70px)", "calc(42svh - 60px)"), ("34svh", "42svh")]:
    out = out.replace(a, b)
(HERE / "cryocrate.src.html").write_text(out)
print("wrote", HERE / "cryocrate.src.html", len(out))
