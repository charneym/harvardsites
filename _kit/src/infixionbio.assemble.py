#!/usr/bin/env python3
"""Assemble infixionbio.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/infixionbio.assemble.py && node build.js src/infixionbio.src.html ../infixionbio/index.html
Facts: infixionbio.com (home, Our Approach, NF1 Basics, Team, Investors & News, Publications, Contact) and NIH RePORTER.
Palette: the live infixionbio.com logo (helix and "BioScience" cyan #009ade, wordmark charcoal #2d2a26) and the navy of
their programme figures (#0b5a96)."""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>iNFixion Bioscience — Treating NF1 at its root cause</title>
<meta name="description" content="iNFixion Bioscience is a San Diego drug discovery company developing therapies that restore healthy neurofibromin to treat and prevent the symptoms of neurofibromatosis type 1 (NF1), for all patients regardless of their mutation.">
<meta name="theme-color" content="#091521">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23091521'/%3E%3Cpath d='M22 8C22 24 42 24 42 32S22 40 22 56M42 8C42 24 22 24 22 32S42 40 42 56' fill='none' stroke='%23009ade' stroke-width='5'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Sora:300,400; Source Sans 3:400,600; JetBrains Mono:400*/"

R["root"] = r''':root{
  --ink:#091521;--inkr:9,21,33;--boner:244,246,247;--accr:0,154,222;--ink2:#0c1a28;--ink3:#112333;--deep:#060f18;
  --bone:#f4f6f7;--bone2:#e9eef1;--bone3:#d5dee4;
  --stone:#a3b0bc;--stoneD:#4c5966;
  --acc:#009ade;--accL:#4cc3f2;--accD:#0b5a96;
  --hair:rgba(244,246,247,.14);--hairD:rgba(9,21,33,.16);
  --disp:'Sora',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Sora',system-ui,sans-serif;
  --sans:'Source Sans 3',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'JetBrains Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#091521,#091521)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the mark: iNFixion's double helix (redrawn from the logo on infixionbio.com: two cyan strands crossing, with rungs)
MARK = ('<path class="im-a" d="M5 1C5 8 17 9 17 15S5 22 5 29"/><path class="im-b" d="M17 1C17 8 5 9 5 15S17 22 17 29"/>'
        '<path class="im-r" d="M7 5H15M8 25H14"/>')

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.imk{width:22px;height:30px;flex:none;overflow:visible}
.brand .im-a,.brand .im-b{fill:none;stroke:var(--acc);stroke-width:2.6;stroke-linecap:round}
.brand .im-b{stroke:#7fd0f4}
.brand .im-r{fill:none;stroke:var(--acc);stroke-width:1.6;stroke-linecap:round}
.brand .bt{font:300 21px/1 var(--disp);letter-spacing:.005em;white-space:nowrap}
.brand .bt b{font-weight:300;color:var(--accL)}'''

R["scenecss"] = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.6fr) minmax(0,7.4fr);gap:var(--gap);align-items:center;padding:80px var(--side) 56px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#9aa8b6;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66788a;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(250px,33vh,330px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.2vw,38px);line-height:1.12;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:46ch;margin:0;font-size:17px}
.story-r{position:relative;height:min(78vh,700px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene svg *{vector-effect:non-scaling-stroke}
.scene .ig{stroke:rgba(var(--boner),.045);stroke-width:1}
.scene .ihn{fill:none;stroke:var(--accL);stroke-width:1.8}
.scene .ihm{fill:none;stroke:#8d9aa8;stroke-width:1.8}
.scene .irn{fill:none;stroke:rgba(var(--accr),.55);stroke-width:1}
.scene .irm{fill:none;stroke:rgba(141,154,168,.5);stroke-width:1}
.scene .itn{fill:none;stroke:rgba(var(--accr),.6);stroke-width:1}
.scene .itm{fill:none;stroke:rgba(141,154,168,.55);stroke-width:1}
.scene .imk{fill:#0c1a28;stroke:var(--bone);stroke-width:1.2}
.scene .imx{fill:none;stroke:var(--bone);stroke-width:1.6}
.scene .iar{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1.1}
.scene .ibr{fill:none;stroke:var(--accL);stroke-width:1.1}
.scene .imi{fill:none;stroke:#e8edf1;stroke-width:2.2;stroke-linecap:round}
.scene .iaso{fill:var(--accL);stroke:#e8f7ff;stroke-width:1}
.scene .ipn{fill:rgba(var(--accr),.2);stroke:var(--accL);stroke-width:1.5}
.scene .ipn2{fill:rgba(var(--accr),.14);stroke:var(--accL);stroke-width:1.5}
.scene .ipg{fill:none;stroke:rgba(var(--boner),.6);stroke-width:1.2;stroke-dasharray:5 5}
.scene .ipm{fill:rgba(141,154,168,.14);stroke:#8d9aa8;stroke-width:1.5}
.scene .igA{fill:none;stroke:rgba(var(--boner),.35);stroke-width:1}
.scene .igT{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .igF{fill:none;stroke:var(--accL);stroke-width:3}
.scene .ind{fill:none;stroke:var(--bone);stroke-width:2}
.scene .inc{fill:var(--bone)}
.scene text{font-family:var(--mono);letter-spacing:.1em;fill:#c6d0da;paint-order:stroke;stroke:#0c1a28;stroke-width:5px;stroke-linejoin:round}
.scene text.it{fill:#c6d0da}
.scene text.ia,.scene text.cap{fill:var(--accL)}
.scene text.iw{fill:var(--bone);stroke:none}
/* ===== iNFixion additions ===== */
.ftr .fcv{opacity:.32}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,4.6vw,92px);letter-spacing:-.035em;line-height:1.06;font-weight:300;max-width:12ch}
.d1 em,.d2 em,.d3 em,.big em,.cta .big em,.mani .txt em,.hero .hero-h em{font-style:normal!important}
@media (max-width:860px){.hero .hero-h{font-size:clamp(38px,10.2vw,72px)}.hero .hero-h .l{white-space:normal}}
.hero-foot .s{max-width:44ch}
.d1,.d2,.d3,.big,.mani .txt{font-weight:300;letter-spacing:-.03em}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em,.cta .big em,.step h2 em{font-weight:300;font-style:normal;color:var(--accL)}
.light .d1 em,.light .d2 em,.light .d3 em,.light .big em{color:var(--accD)}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:#04121d}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:#fff;border-color:var(--accD)}
.btn,.btn::before,.btn.solid{border-radius:0}
/* DN: statement and stats share the row */
.mani>.wrap{display:grid;grid-template-columns:minmax(0,7.2fr) minmax(0,4fr);gap:clamp(40px,6vw,120px);align-items:center}
.mani .mani-in{margin:0;width:auto}
.mani .txt{font-size:clamp(28px,2.9vw,50px);max-width:24ch;line-height:1.14}
.mani .stats{margin-top:0;grid-template-columns:1fr;gap:clamp(26px,3.4vh,40px)}
.stat .v{font-size:clamp(46px,4.4vw,80px);font-weight:300;letter-spacing:-.04em}
.stat .v sup{color:var(--accL)}
.stat p.k{margin:0}
@media (max-width:960px){.mani>.wrap{grid-template-columns:1fr}.mani .stats{margin-top:56px}}
/* programmes: rows */
.prd{list-style:none;margin:0;padding:0}
.prd-row{display:grid;grid-template-columns:minmax(0,3.6fr) minmax(0,4.8fr) minmax(0,3fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hairD);position:relative}
.prd-row:last-child{border-bottom:1px solid var(--hairD)}
.prd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prd-row:hover::after{transform:scaleX(1)}
.prd-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(25px,2.2vw,38px);line-height:1.08;letter-spacing:-.025em;margin:0 0 10px}
.prd-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--accD)}
.prd-row p{margin:0;color:var(--stoneD);font-size:17px;max-width:54ch}
.prd-row .meta{display:flex;flex-direction:column;gap:8px}
.prd-row .meta .lab{color:var(--stoneD)}
.prd-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:#fff;background:var(--accD);padding:6px 8px 5px}
@media (max-width:1024px){.prd-row{grid-template-columns:1fr 1fr;row-gap:16px}.prd-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.prd-row{grid-template-columns:1fr}}
/* research funding (NIH) */
.rd{list-style:none;margin:0;padding:0}
.rd-row{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,7fr) minmax(0,3.4fr);column-gap:var(--gap);align-items:start;padding:15px 0 17px;border-top:1px solid var(--hair);position:relative}
.rd-row:last-child{border-bottom:1px solid var(--hair)}
.rd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.rd-row:hover::after{transform:scaleX(1)}
.rd-row .yr{font:400 11px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--accL)}
.rd-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(21px,1.75vw,28px);line-height:1.16;letter-spacing:-.02em;margin:0}
.rd-row p{margin:0;color:var(--stone);font-size:16px;line-height:1.6}
.rd-row .meta{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px 16px;align-items:center}
.rd-row .meta a{color:var(--bone)}
.rd-row .tag{display:inline-block;font:400 10.5px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:#04121d;background:var(--accL);padding:6px 8px 5px}
@media (max-width:1100px){.rd-row{grid-template-columns:minmax(0,1fr) minmax(0,3fr);row-gap:12px}.rd-row .meta{grid-column:2;flex-direction:row;flex-wrap:wrap;gap:8px 20px}}
@media (max-width:620px){.rd-row{grid-template-columns:1fr}.rd-row p,.rd-row .meta{grid-column:1}}
.pub{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:var(--gap);margin-top:clamp(64px,7vw,110px);border-top:1px solid var(--hair);padding-top:28px;position:relative}
.pub::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.pub:hover::before{transform:scaleX(1)}
.pub .lab{color:var(--accL)}
.pub h3{font-family:var(--disp);font-weight:300;font-size:clamp(24px,2.2vw,36px);line-height:1.14;letter-spacing:-.02em;margin:0 0 14px}
.pub p{color:var(--stone);font-size:16px;margin:0 0 18px;max-width:62ch}
@media (max-width:860px){.pub{grid-template-columns:1fr}}
/* team: refined text-only */
.tm{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(28px,3vw,48px) var(--gap)}
.tm-p{border-top:1px solid var(--hairD);padding-top:22px;position:relative}
.tm-p::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-p:hover::before{transform:scaleX(1)}
.tm-p h3{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.08;letter-spacing:-.03em;margin:0 0 10px}
.tm-p .cr{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--accD);margin-bottom:16px}
.tm-p p{color:var(--stoneD);font-size:16.5px;line-height:1.6;margin:0;max-width:44ch}
.tm-x{list-style:none;margin:clamp(48px,5vw,80px) 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:var(--gap)}
.tm-x li{padding:14px 0 16px;border-top:1px solid var(--hairD);font-size:16px;color:var(--ink);position:relative}
.tm-x li::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm-x li:hover::before{transform:scaleX(1)}
.tm-x .lab{display:block;margin-bottom:6px;color:var(--stoneD)}
.tm-h{font:400 11px/1.5 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--accD);margin:clamp(56px,6vw,96px) 0 0}
@media (max-width:1024px){.tm,.tm-x{grid-template-columns:1fr 1fr}}
@media (max-width:620px){.tm,.tm-x{grid-template-columns:1fr}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("infixionbio-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M34 6C34 30 62 32 62 48S34 66 34 90M62 6C62 30 34 32 34 48S62 66 62 90M38 16H58M38 80H58"/></svg>
    <div class="wm"><span>iNFIXION</span></div>
  </div>
  <span class="lab pl">NF1 drug discovery · San Diego, California</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="iNFixion Bioscience, home"><svg class="imk" viewBox="0 0 22 30" aria-hidden="true">' + MARK + '</svg><span class="bt">iNFixion <b>Bioscience</b></span></a>'

NAV = [("story", "Approach"), ("programmes", "Programmes"), ("team", "Team"), ("news", "News")]
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
    <div><span class="lab">Lab</span><br>San Diego, California</div>
    <div><span class="lab">Email</span><br>info@infixionbio.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">iNFixion</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="iNFixion Bioscience";\nvar PK="infixionbio";'

R["content"] = r'''var FONTS=['300 1em "Sora"','400 1em "Sora"','400 1em "Source Sans 3"','600 1em "Source Sans 3"','400 1em "JetBrains Mono"'];
var MAIL="info@infixionbio.com";
var RP="https://reporter.nih.gov/project-details/";
var WEB="https://www.infixionbio.com/";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-08-26",s:"NIH · NINDS",t:"SBIR award to select a lead ASO candidate for NF1 cognitive and social deficits",u:RP+"11316689"},
 {d:"2025-12-15",s:"Newsletter",t:"Learn more about iNFixion in our December newsletter",u:WEB+"infixion-december-newsletter/"},
 {d:"2025-10-21",s:"Support",t:"Thank you to the Giorgio Foundation and the Stapelfeld family for their generous support",u:WEB+"thank-you-to-the-giorgio-foundation/"},
 {d:"2025-06-24",s:"Community",t:"The iNFixion team attends the 2025 NF Conference in Washington, DC",u:WEB+"infixion-team-attends-2025-nf-conference-in-washington-dc/"},
 {d:"2025-05-27",s:"Video",t:"A new film by WCB Films on NF1 and iNFixion’s approach to treat the root cause",u:WEB+"new-video-by-wcb-films-describing-nf1-and-infixions-unique-approach-to-treat-the-root-cause/"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function prd(){var A=[
  ["Antisense oligonucleotides","Lead programme · ASO","Designed, targeted ASOs that increase NF1 protein expression in vitro, by blocking the microRNA sites on the NF1 mRNA’s 3′UTR. A 2026 NIH award funds selecting a lead candidate for NF1 cognitive and social deficits.",["Next: efficacy and safety in animal models","NIH SBIR · 2026"],"Lead"],
  ["Small molecules","Programme · drug screening","More than 14,000 molecules screened, and lead compound classes identified, for drugs that raise functional neurofibromin.",["14K+ molecules screened","Next: lead optimization"],""],
  ["New NF1 scientific tools","Platform · for the field","Tools to aid NF1 drug discovery and development, including NF1 reporter assays, monoclonal antibodies, ELISA and histopathology.",["Reporter assays · antibodies","ELISA · histopathology"],""]];
  return '<ul class="prd">'+A.map(function(a){return '<li class="prd-row"><div><h3>'+esc(a[0])+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">'+a[4]+'</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'}
function rd(){var A=[
  ["2026","Selection of a lead candidate for the development of an ASO therapeutic for NF1 cognitive and social deficits","",["NINDS · SBIR Phase I","11316689"],1],
  ["2022–2023","Steric-blocking antisense oligonucleotide (ASO) discovery to selectively correct NF1 haploinsufficiency","",["NINDS · SBIR Phase I",""],0],
  ["2021–2022","Inhibition of NF1 protein degradation as a treatment for NF1 haploinsufficiency","",["NINDS · SBIR Phase I",""],0],
  ["2020–2021","Increasing NF1 expression as a treatment for NF1 haploinsufficiency","",["NINDS · SBIR Phase I",""],0]];
  return '<ul class="rd">'+A.map(function(a){var lk=a[3][1]?'<a class="lab ul" href="'+RP+a[3][1]+'" target="_blank" rel="noopener">NIH RePORTER ↗</a>':'';return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><div class="meta">'+(a[4]?'<span class="tag">Active</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function team(){var P=[
  ["Herb Sarnoff","Founder &amp; CEO · NF1 parent","Has led the company since its founding in 2017: the research team and advisory board, several NIH SBIR grants and the company’s lab at JLABS in San Diego. An engineer and entrepreneur, inventor on 13 U.S. patents."],
  ["Michelle Mattson-Hoss, PhD","VP, Research &amp; Development","Leads all lab research, from tool and assay development to drug screening and hit evaluation. Built the iNFixion lab from nothing during the pandemic."],
  ["Michael ‘Mick’ Frost, MD","Medical Director · NF1 parent","A board-certified anatomic and clinical pathologist with over 30 years in medical practice, and first author of iNFixion’s 2022 white paper."]];
  var X=[["Scientist","Mya Walker, PhD"],["Sr. Research Associate","Gwen Guzman, BS"],["Drug discovery","Glenn Croston, PhD"],["Preclinical · NF1 parent","Aleah Caulin, PhD"],["ASO development","Eric Marcusson, PhD"],["Europe · NF1 parent","Sara Brebbia Dirksen, MS"]];
  var S=[["Louisiana State Univ. (Pennington)","Bob Kesterson, PhD"],["University of Utah","David Viskochil, MD/PhD"],["Univ. Alabama Birmingham (Emeritus)","Bruce Korf, MD/PhD"],["New York University","Kaleb Yohay, MD"],["University of Colorado, Anschutz","Gregory Way, PhD"],["Sanford Burnham, San Diego","Evan Snyder, MD/PhD"],["UC San Diego","James Kadonaga, PhD"]];
  function li(a){return '<li><span class="lab">'+a[0]+'</span>'+esc(a[1])+'</li>'}
  return '<div class="tm">'+P.map(function(p){return '<div class="tm-p"><h3>'+esc(p[0])+'</h3><span class="cr">'+p[1]+'</span><p>'+esc(p[2])+'</p></div>'}).join("")+'</div>'+
   '<p class="tm-h" data-r>Research and consultants</p><ul class="tm-x" style="margin-top:20px">'+X.map(li).join("")+'</ul>'+
   '<p class="tm-h" data-r>Scientific advisory board</p><ul class="tm-x" style="margin-top:20px">'+S.map(li).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>NF1 drug discovery · San Diego<span class="nomob"> · NIH SBIR</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treating NF1</span><span class="l">at its</span><span class="l"><em>root cause.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>iNFixion Bioscience develops therapies that restore healthy neurofibromin, the protein people with neurofibromatosis type 1 have too little of, for all patients regardless of their mutation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">Our approach '+ARR+'</a><a class="btn" href="#programmes" data-to="programmes">The programmes</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<p class="txt" id="mani">To vastly improve the lives of people living with NF1 <em>by treating the root cause,</em> not one symptom at a time.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 3,000</span><p class="k">People affected by NF1, one of the most common genetic disorders</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.5M</span><p class="k">People living with NF1 worldwide, 125,000 of them in the U.S.</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4,000+</span><p class="k">Unique NF1 mutations identified, which is why we work across all of them</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach · haploinsufficiency correction</span><h2 class="d3">Neurofibromin <em>is key.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Genetics</span><span>The gap</span><span>The ASO</span><span>Restored</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One copy is enough to cause NF1.</h2><p>NF1 is autosomal dominant: a mutation on just one of the two copies of the NF1 gene causes the disease. People with NF1 make about half their neurofibromin fully functional, from the normal copy.</p></article>'+
     '<article class="step"><h2>Too little is the problem.</h2><p>Many, if not all, NF1 symptoms result from haploinsufficiency: it is the insufficient quantity of normal neurofibromin, not the mutated protein itself, that drives the disease.</p></article>'+
     '<article class="step"><h2>Unblock the normal copy.</h2><p>MicroRNAs that bind the NF1 mRNA’s 3′UTR hold its expression down. Our steric-blocking antisense oligonucleotides take those sites, so the normal copy makes more protein.</p></article>'+
     '<article class="step"><h2>Restore the level, for every mutation.</h2><p>Restoring neurofibromin corrects key pathways such as Ras. Because the therapy works on the normal copy, it can treat people regardless of their specific mutation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research &amp; development pipeline</span><h2 class="d2 split">Three ways to restore <em>neurofibromin.</em></h2></div><p data-r>Safe and effective therapies that address NF1 protein haploinsufficiency, with the potential to manage and prevent a broad spectrum of NF1 manifestations.</p></div>'+
   prd()+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research funding · NIH SBIR</span><h2 class="d2 split">Seven peer-reviewed <em>grants.</em></h2></div><p data-r>iNFixion has received seven peer-reviewed grants from the NIH, the Department of Defense and NF foundations, including a run of NIH SBIR awards since 2020.</p></div>'+
   rd()+
   '<div class="pub"><span class="lab">White paper · 2022</span><div><h3>Rationale for haploinsufficiency correction therapy in neurofibromatosis type 1.</h3><p>Frost M, Serra E, Viskochil D, Korf BR, Mattson-Hoss MK, Croston GE, Sarnoff H. J Transl Genet Genom. 2022;6:403–28.</p><a class="btn" href="'+WEB+'publications/" target="_blank" rel="noopener">Publications '+ARR+'</a></div></div>'+
  '</div></section>'+
  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Researchers, physicians and <em>NF1 parents.</em></h2></div><p data-r>A core research team in San Diego and a scientific advisory board of NF1 thought leaders and academic researchers.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investors &amp; news</span><h2 class="d2 split">Latest <em>news.</em></h2></div><p data-r>Grants, support from the NF community, and our newsletter.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Collaboration and investment</span>'+
   '<h2 class="big split">Help us treat NF1 <em>at its core.</em></h2>'+
   '<p class="sub" data-r>iNFixion Bioscience is seeking scientific collaboration and investment. Reach out to our team to schedule an initial meeting.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#story" data-to="story">Our approach</a></div>'+
   '<div class="ctc2"><div><span class="lab">Lab</span><p><span>3210 Merryfield Row</span><br><span>San Diego, CA 92121</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Follow</span><p><a class="ul" href="https://www.linkedin.com/company/infixion-bioscience-inc/about/" target="_blank" rel="noopener">LinkedIn ↗</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Lab</span>3210 Merryfield Row<br>San Diego, CA 92121</div>'+
   '<div class="c"><span class="lab">Programmes</span>Antisense oligonucleotides<br>Small molecules · NF1 tools</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Approach</a><br><a class="ul" href="#programmes" data-to="programmes">Programmes</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.06em">iNFIXION</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 iNFixion Bioscience, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"iNFixion Bioscience — Treating NF1 at its root cause",x:"Home"}}'''

R["field"] = (HERE / "infixionbio.field.js").read_text()
R["story"] = (HERE / "infixionbio.story.js").read_text()

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
(HERE / "infixionbio.src.html").write_text(out)
print("wrote", HERE / "infixionbio.src.html", len(out))
