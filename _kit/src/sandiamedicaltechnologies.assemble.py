#!/usr/bin/env python3
"""Assemble sandiamedicaltechnologies.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/sandiamedicaltechnologies.assemble.py && node build.js src/sandiamedicaltechnologies.src.html ../sandiamedicaltechnologies/index.html
Facts: _kit/dossiers/sandiamedicaltechnologies.md. Palette: the live sandiamedicaltechnologies.com (logo teal #008ea6 / #038ea6,
orange triangle #fbb153, ZEPART navy #21477d, Barlow type). Hero: Sandia's own ZEPART render, cut out (see the field file)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>Sandia Medical Technologies — ZEPART thumb joint replacement</title>
<meta name="description" content="Sandia Medical Technologies, Albuquerque, New Mexico, develops joint replacement for osteoarthritis. Its first device, the ZEPART thumb implant, is a stemmed implant that completely replaces the trapezium for thumb CMC arthritis. In development; not FDA-cleared.">
<meta name="theme-color" content="#05232c">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2305232c'/%3E%3Cpath d='M6 40L14 26L22 40Z' fill='%23fbb153'/%3E%3Cpath d='M31 10L23 24L40 52H56Z' fill='%233cc3d9'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Barlow:300,400,500; IBM Plex Mono:400; Krona One:400*/"

R["root"] = r''':root{
  --ink:#05232c;--inkr:5,35,44;--boner:243,247,248;--accr:60,195,217;--ink2:#072a34;--ink3:#0b3440;--deep:#031a21;
  --bone:#f3f7f8;--bone2:#e6eef0;--bone3:#d3e0e3;
  --stone:#a3b8be;--stoneD:#46606a;
  --acc:#008ea6;--accL:#4cc6db;--accD:#007187;--org:#fbb153;--orgD:#a8620c;
  --hair:rgba(243,247,248,.14);--hairD:rgba(5,35,44,.16);
  --disp:'Barlow',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Barlow',system-ui,sans-serif;
  --sans:'Barlow',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#05232c,#05232c)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}
@media (max-width:860px){html .fieldbg{background:#05232c}
  html .hero{padding-top:calc(40svh + 8px)!important}
  html #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 36px),transparent calc(40svh + 4px));mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 36px),transparent calc(40svh + 4px))}}'''

# the mark: Sandia's logo (redrawn from SMT-web-logo-600px.png: an orange triangle and two teal slanted peaks)
MARK = '<path class="sm-o" d="M0.5 52L16 24L32 52Z"/><path class="sm-t" d="M53.5 0L37.5 28L73 88.5H106.5Z"/><path class="sm-t" d="M124 31L107.5 59L134 104H167Z"/>'

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.sm{width:44px;height:28px;flex:none;overflow:visible}
.brand .sm-o{fill:var(--org)}
.brand .sm-t{fill:var(--accL)}
.brand .bt{display:flex;flex-direction:column;font:400 10.5px/1.22 'Krona One','Barlow',sans-serif;letter-spacing:.06em;white-space:nowrap;color:var(--bone)}
.brand .bt b{font-weight:400;color:var(--accL)}'''

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
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#cfdde1;paint-order:stroke;stroke:#072a34;stroke-width:5px;stroke-linejoin:round}
.scene text.cap{fill:var(--accL)}
.scene text.sa{fill:var(--accL)}
.scene text.so{fill:var(--org)}
.scene svg *{vector-effect:none}
.scene .sg{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .sb{fill:rgba(var(--boner),.035);stroke:rgba(var(--boner),.7);stroke-width:1.2;stroke-linejoin:round}
.scene .str{fill:rgba(var(--accr),.08);stroke:var(--accL);stroke-width:1.6}
.scene .sjag{fill:none;stroke:var(--org);stroke-width:1.6;stroke-linecap:round}
.scene .simp{fill:url(#smM);stroke:#e9f2f4;stroke-width:1.4}
.scene .simw{fill:rgba(5,35,44,.55);stroke:#5b7178;stroke-width:1}
.scene .scl{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .sarc{fill:none;stroke:var(--accL);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
/* ===== Sandia additions ===== */
.ftr .fcv{opacity:.3}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,3.9vw,72px);letter-spacing:-.03em;line-height:1.02;font-weight:300;max-width:none}
.hero .hero-h em{color:var(--org)!important}
@media (min-width:861px){html .hero{padding-top:clamp(156px,19vh,196px);padding-bottom:clamp(44px,6vh,72px)}html .hero .hero-foot{margin-top:clamp(52px,6.4vh,64px)}}
.hero .hnote{margin:0;font:400 10.5px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:rgba(var(--boner),.66);max-width:56ch}
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

R["scenecss"] += r'''
/* Sandia: "designed for" pillars on the light ZEPART section */
.light .pil{border-top-color:var(--hairD)}
.light .pil::before{background:var(--accD)}
.light .pil svg *{stroke:var(--ink)}
.light .pil svg .a{stroke:var(--acc)}
.light .pil p{color:var(--stoneD)}
.light .pil .lab{color:var(--accD)}
.light .pils{margin-top:clamp(56px,6vw,96px)}
/* the need: figures */
.nd{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap)}
.nd-c{border-top:1px solid var(--hair);padding-top:22px;position:relative}
.nd-c::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--org);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.nd-c:hover::before{transform:scaleX(1)}
.nd-c .nv{display:block;font-family:var(--disp);font-weight:300;font-size:clamp(40px,3.8vw,68px);line-height:1;letter-spacing:-.035em;color:var(--bone);margin-bottom:18px}
.nd-c p{margin:0;color:var(--stone);font-size:15.5px;line-height:1.6;max-width:34ch}
@media (max-width:1100px){.nd{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:44px}}
@media (max-width:560px){.nd{grid-template-columns:1fr;row-gap:36px}}
/* team: three columns with a one-line note */
.tg.tg3{grid-template-columns:repeat(3,minmax(0,1fr))}
.tg .td{display:block;margin-top:12px;color:var(--stoneD);font-size:15px;line-height:1.55;max-width:38ch}
.tg li.tnote .tr{color:var(--accD)}
@media (max-width:900px){.tg.tg3{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.tg.tg3{grid-template-columns:1fr}}
.disc{margin-top:clamp(40px,4vw,64px)}
'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("sandiamedicaltechnologies-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="-2 -4 172 112"><path d="M0.5 52L16 24L32 52Z"/><path d="M53.5 0L37.5 28L73 88.5H106.5Z"/><path d="M124 31L107.5 59L134 104H167Z"/></svg>
    <div class="wm"><span>SANDIA MEDICAL</span></div>
  </div>
  <span class="lab pl">Orthopedic extremity implants · Albuquerque, New Mexico</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Sandia Medical Technologies, home"><svg class="sm" viewBox="0 0 168 104" aria-hidden="true">' + MARK + '</svg><span class="bt"><span>SANDIA</span><b>MEDICAL</b><span>TECHNOLOGIES</span></span></a>'

NAV = [("story", "Technology"), ("zepart", "ZEPART"), ("need", "The need"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Based in</span><br>Albuquerque, New Mexico</div>
    <div><span class="lab">Phone</span><br>505.805.5002</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Sandia Medical</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Sandia Medical Technologies";\nvar PK="sandiamedicaltechnologies";'

R["content"] = r'''var FONTS=['300 1em "Barlow"','400 1em "Barlow"','500 1em "Barlow"','400 1em "IBM Plex Mono"','400 1em "Krona One"'];
var MAIL="dimitri@sandiamedicaltechnologies.com";
var SU="https://sandiamedicaltechnologies.com/";
var SECS={technology:"story",zepart:"zepart","the-need":"need",need:"need",team:"team",news:"news",contact:"contact"};
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-06-15",s:"UNM Rainforest Innovations",t:"New hope for thumb arthritis patients in New Mexico",u:"https://innovations.unm.edu/2026/06/15/new-hope-for-thumb-arthritis-patients-in-new-mexico/"},
 {d:"2025-02-12",s:"For clinicians",t:"ZEPART offers the best of both worlds",u:SU+"for-clinicians-zepart-offers-the-best-of-both-worlds/"},
 {d:"2025-01-30",s:"For patients",t:"CMC thumb joint replacement for arthritis",u:SU+"for-patients-cmc-thumb-joint-replacement-for-arthritis/"},
 {d:"2025-01-07",s:"For investors",t:"A significant opportunity based on a growing medical need",u:SU+"a-significant-opportunity-based-on-a-growing-medical-need/"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function prd(){var A=[
  ["ZEPART","Thumb CMC joint · trapezium replacement","A stemmed implant for complete replacement of the trapezium, with a distinctly differentiated design optimized for stability, strength and flexibility. An alternative to trapeziectomy that aims to relieve pain, restore mobility and retain strength.",["Conceived by Nathan T. Morrell, MD","AI-enabled design","Established regulatory pathway anticipated"],"In development"],
  ["Next joints","Upper extremity · joint prostheses","Sandia plans to replicate the ZEPART development model for other surgical needs, expanding its design philosophy to further joint implant prostheses and therapies, especially in the upper extremities.",["Company plan"],"Planned"]];
  return '<ul class="prd prd-grid">'+A.map(function(a){return '<li class="prd-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta"><span class="tag">'+esc(a[4])+'</span>'+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'}
function dfor(){var C=[
  ["Normal grip strength","Strength is kept, not traded away for pain relief.",'<path d="M10 40C10 24 20 14 30 14C40 14 46 22 46 30"/><path class="a" d="M38 30H50M44 24V36"/>'],
  ["Normal range of motion","Engineered to adapt to the hand’s natural movements.",'<path d="M12 44A32 32 0 0 1 44 12"/><path class="a" d="M38 8L44 12L40 18"/><circle cx="12" cy="44" r="4"/>'],
  ["Eliminating symptoms","Designed to eliminate pain and improve quality of life.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M18 29L25 36L39 21"/>'],
  ["Natural alignment","Designed to prevent thumb shortening and keep the metacarpal in its natural resting position.",'<path d="M28 6V50"/><path class="a" d="M18 16L28 6L38 16M18 40L28 50L38 40"/>']];
  return '<div class="pils">'+C.map(function(c,i){return '<div class="pil"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><span class="lab">Designed for · 0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function need(){var C=[
  ["200,000+","Estimated U.S. thumb CMC procedures a year, by more than 4,000 members of the American Society for Surgery of the Hand."],
  ["~40,000","CMC procedures a year in each of France, Germany, Italy and Switzerland."],
  ["8.1%","Current compound annual growth of the CMC osteoarthritis market."],
  ["3.2 billion","Adults aged 50 and over expected by 2050, up 70 percent from 1.9 billion today."]];
  return '<div class="nd">'+C.map(function(c){return '<div class="nd-c"><span class="nv">'+esc(c[0])+'</span><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function team(){var T=[["Rick Thomson","President and CEO","30+ years in medical device commercialization, from start-ups to multi-billion dollar corporations.",1],
  ["Nathan T. Morrell, MD, FAOA","Chief Medical Officer","Board-certified hand and upper extremity surgeon; co-founder and co-inventor of ZEPART.",1],
  ["Dimitri Madden","Chief Operating Officer","Systems engineering and project management; co-founder and co-inventor of ZEPART.",1],
  ["Ethan Darwin","Chief R&D Officer","Orthopedic biomechanics and soft tissue mechanics; co-founder and co-inventor of ZEPART."],
  ["Ruba Sarris-Sawaya","Chief QRC Officer","20+ years in orthopedic medtech: quality, regulatory strategy and clinical affairs."]];
  return '<ul class="tg tg3">'+T.map(function(t){return '<li'+(t[3]?' class="ld"':'')+'><span class="tn">'+esc(t[0])+'</span><span class="tr">'+esc(t[1])+'</span><span class="td">'+esc(t[2])+'</span></li>'}).join("")+
   '<li class="tnote"><span class="tr">Albuquerque · Palo Alto · Houston</span><span class="td">Medicine, engineering, design and business, united by a philosophy to design only meaningful, uncompromising solutions.</span></li></ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Orthopedic extremity implants<span class="nomob"> · Albuquerque, New Mexico</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Thumb joint</span><span class="l">replacement,</span><span class="l"><em>without</em></span><span class="l"><em>compromise.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sandia Medical Technologies develops joint replacement for osteoarthritis. Our first device, the ZEPART thumb implant, replaces the trapezium completely to restore a stable, strong and mobile thumb.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How ZEPART works '+ARR+'</a><a class="btn" href="#need" data-to="need">The need</a></div>'+
   '</div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our why</span>'+
   '<p class="txt" id="mani">As the population ages, osteoarthritis is becoming a major driver of mobility loss. We design joint replacement that <em>restores function</em> and quality of life.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15%</span><p class="k">Of adults may have thumb CMC osteoarthritis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24%</span><p class="k">Of adults aged 60 to 92</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200k+</span><p class="k">Patients a year seek surgery for it in the U.S. alone</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · ZEPART</span><h2 class="d3">A new joint, <em>not a workaround.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Joint</span><span>Arthritis</span><span>ZEPART</span><span>Function</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The joint at the base of the thumb.</h2><p>The carpometacarpal (CMC) joint, where the first metacarpal meets the trapezium bone of the wrist, gives the thumb its reach and its grip. It is one of the most common sites for arthritis in the body.</p></article>'+
     '<article class="step"><h2>Osteoarthritis wears it down.</h2><p>For people with thumb CMC osteoarthritis, everyday tasks become painful, if not impossible. Today’s surgical options trade motion or grip strength for pain relief, or remove the joint altogether.</p></article>'+
     '<article class="step"><h2>ZEPART replaces the trapezium.</h2><p>A stemmed implant for complete replacement of the trapezium. It replicates the hand’s natural geometry to articulate normally with the neighboring carpal bones, with no resurfacing and no ball-and-socket.</p></article>'+
     '<article class="step"><h2>Designed to return patients to their best.</h2><p>Designed for normal grip strength, normal range of motion and an end to symptoms, while preventing thumb shortening and keeping the metacarpal in its natural resting position.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="zepart" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>ZEPART thumb implant</span><h2 class="d2 split">The ideal joint replacement for <em>CMC thumb arthritis.</em></h2></div><p data-r>An advanced, anatomically optimized thumb implant, conceived by hand surgeon Nathan T. Morrell, MD, and advanced with a multidisciplinary science and engineering team through AI-enabled design, rigorous validation and clinical insight.</p></div>'+
   prd()+dfor()+
   '<p class="disc">The device is under development and has not received FDA clearance or CE marking. It is not available for sale in the United States or Europe.</p>'+
  '</div></section>'+
  '<section class="sec dark2" id="need" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The need</span><h2 class="d2 split">As many thumb joints <em>as knees and hips.</em></h2></div><p data-r>Thumb CMC arthritis is one of the major unmet needs in orthopedic medicine. Its market is beginning to grow the way knee and hip replacement did 20 to 30 years ago, when implant technology caught up with the clinical need.</p></div>'+
   need()+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Surgeons, engineers <em>and operators.</em></h2></div><p data-r>A product development team with cross-cutting expertise in medicine, engineering, design and business, specialized in research, development and commercialization for orthopedics.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec light" id="news" data-theme="light" style="padding-top:0"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Sandia Medical <em>in the news.</em></h2></div><p data-r>Updates for clinicians, patients and investors.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For clinicians, patients and investors</span>'+
   '<h2 class="big split">Talk to <em>Sandia Medical.</em></h2>'+
   '<p class="sub" data-r>You are welcome to contact us about our mission, our products, our research and future applications.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#zepart" data-to="zepart">See ZEPART</a></div>'+
   '<div class="ctc2"><div><span class="lab">Based in</span><p><span>Sandia Medical Technologies</span><br><span>Albuquerque, New Mexico</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+15058055002">505.805.5002</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Albuquerque<br>New Mexico</div>'+
   '<div class="c"><span class="lab">Product</span>ZEPART thumb implant<br>In development</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#zepart" data-to="zepart">ZEPART</a><br><a class="ul" href="#need" data-to="need">The need</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email us</a><br><a class="ul" href="tel:+15058055002">505.805.5002</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 44" aria-hidden="true"><text x="320" y="36" text-anchor="middle" style="font-family:\'Krona One\',sans-serif;font-weight:400;font-size:40px;letter-spacing:.04em">SANDIA MEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sandia Medical Technologies</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Sandia Medical Technologies — ZEPART thumb joint replacement",x:"Home"}}'''

R["field"] = (HERE / "sandiamedicaltechnologies.field.js").read_text()
R["story"] = (HERE / "sandiamedicaltechnologies.story.js").read_text()


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
(HERE / "sandiamedicaltechnologies.src.html").write_text(out)
print("wrote", HERE / "sandiamedicaltechnologies.src.html", len(out))
