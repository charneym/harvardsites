#!/usr/bin/env python3
"""Assemble collamedix.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run (from _kit): python3 src/collamedix.assemble.py && node build.js src/collamedix.src.html ../collamedix/index.html
Facts: _kit/dossiers/collamedix.md. Palette: the CollaMedix logo on collamedixinc.com (deep blue #0050a0, cyan #00b8e8,
helix green #289840), set on a deep navy ink."""
import re, math, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

R["meta"] = r'''<title>CollaMedix — Pure collagen, strong enough to braid</title>
<meta name="description" content="CollaMedix, Cleveland, Ohio, makes CollaFabric®, the only load-bearing pure collagen fabric in existence: electrocompacted collagen threads braided into implants for rotator cuff repair and stress urinary incontinence.">
<meta name="theme-color" content="#071628">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23071628'/%3E%3Cpath d='M46 16A22 22 0 1 0 46 48' fill='none' stroke='%2300b8e8' stroke-width='7'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Figtree:300,400; IBM Plex Sans:400,500; IBM Plex Mono:400*/"

R["root"] = r''':root{
  --ink:#071628;--inkr:7,22,40;--boner:242,245,247;--accr:0,184,232;--ink2:#0a1c31;--ink3:#10253d;--deep:#050f1c;
  --bone:#f2f5f7;--bone2:#e6ecf1;--bone3:#d3dde6;
  --stone:#a3b1c0;--stoneD:#4c5a6a;
  --acc:#0050a0;--accL:#22c0ee;--accD:#00488f;--grn:#4fbf6a;
  --hair:rgba(242,245,247,.14);--hairD:rgba(7,22,40,.16);
  --disp:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --serif:'Figtree',system-ui,sans-serif;
  --sans:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(#071628,#071628)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

# the mark: the CollaMedix "C", a collagen helix bent into a C (redrawn from the logo: two twisting strands, cyan and blue, green rungs)
def helixC():
    a, b, rr = [], [], []
    for i in range(49):
        t = math.pi * (.3 + 1.4 * i / 48)
        w = 2.1 * math.sin(i / 48 * math.pi * 2 * 4.5)
        x1, y1 = 15 + (11.5 + w) * math.cos(t), 15 - (11.5 + w) * math.sin(t)
        x2, y2 = 15 + (11.5 - w) * math.cos(t), 15 - (11.5 - w) * math.sin(t)
        a.append('%.1f %.1f' % (x1, y1)); b.append('%.1f %.1f' % (x2, y2))
        if i % 3 == 1 and abs(w) > .9: rr.append('M%.1f %.1fL%.1f %.1f' % (x1, y1, x2, y2))
    return '<path class="cm-r" d="%s"/><path class="cm-a" d="M%s"/><path class="cm-b" d="M%s"/>' % (''.join(rr), 'L'.join(a), 'L'.join(b))
MARK = helixC()

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:11px;height:56px;color:var(--bone)}
.brand svg.cmk{width:30px;height:30px;flex:none;overflow:visible}
.brand .cm-a{fill:none;stroke:#00b8e8;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.brand .cm-b{fill:none;stroke:#3d86d6;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.brand .cm-r{fill:none;stroke:var(--grn);stroke-width:1.1}
.brand .bt{font:400 23px/1 var(--disp);letter-spacing:-.005em;white-space:nowrap}
.brand .bt b{font-weight:400;color:#22c0ee}'''

SCENEHEAD = r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:15ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa8b8;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66768c;transition:background .35s,border-color .35s}
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
.scene .xg{stroke:rgba(var(--boner),.05);stroke-width:1}
.scene .cm-cell{fill:rgba(var(--accr),.04);stroke:rgba(var(--boner),.6);stroke-width:1.2}
.scene .cm-cell2{fill:none;stroke:rgba(var(--accr),.45);stroke-width:1}
.scene .cm-el{stroke:#c9d3de;stroke-width:2.2}
.scene .cm-elt{fill:var(--ink2);stroke:#c9d3de;stroke-width:1.4}
.scene .cm-mol{fill:none;stroke:var(--accL);stroke-width:1.5;stroke-linecap:round}
.scene .cm-th{stroke:var(--bone);stroke-width:5;stroke-linecap:round}
.scene .cm-ribu{fill:none;stroke:var(--ink2);stroke-width:9}
.scene .cm-rib{fill:none;stroke:#e9e4d8;stroke-width:3.2}
.scene .cm-tube{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .cm-new{fill:none;stroke:#6fd38a;stroke-width:2.4;stroke-linecap:round}
.scene .cm-ten{fill:none;stroke:rgba(var(--boner),.38);stroke-width:1}
.scene .cm-sut{fill:none;stroke:var(--accL);stroke-width:2.4}
.scene text{font-family:var(--mono);letter-spacing:.12em;fill:#c9d3de;paint-order:stroke;stroke:var(--ink2);stroke-width:5px;stroke-linejoin:round}
.scene text.cap{fill:var(--accL)}
'''

R["scenecss"] = SCENEHEAD + r'''/* ===== CollaMedix additions ===== */
.ftr .fcv{opacity:.32}
@media (max-width:860px){.hero::before{background:linear-gradient(180deg,rgba(var(--inkr),0) 0%,rgba(var(--inkr),0) 36%,rgba(var(--inkr),.7) 52%,rgba(var(--inkr),.9) 72%,var(--ink) 100%)}}
.hero .hero-h{font-size:clamp(44px,4.6vw,94px);letter-spacing:-.035em;line-height:1.04;font-weight:300;max-width:12.5ch}
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
.prd-row{display:grid;grid-template-columns:minmax(0,3.4fr) minmax(0,5fr) minmax(0,2.6fr);column-gap:var(--gap);align-items:start;padding:22px 0 24px;border-top:1px solid var(--hairD);position:relative}
.prd-row:last-child{border-bottom:1px solid var(--hairD)}
.prd-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prd-row:hover::after{transform:scaleX(1)}
.prd-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.4vw,40px);line-height:1.05;letter-spacing:-.025em;margin:0 0 10px}
.prd-row h3 sup{font-size:.42em;vertical-align:top;position:relative;top:.3em;margin-left:1px}
.prd-row .nm3{display:block;font:400 11px/1.5 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accD)}
.prd-row p{margin:0;color:var(--stoneD);font-size:16px;max-width:54ch}
.prd-row .meta{display:flex;flex-direction:column;gap:8px}
.prd-row .meta .lab{color:var(--stoneD)}
.prd-row .tag{display:inline-block;align-self:flex-start;font:400 10.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--acc);padding:6px 8px 5px}
.prd-note{margin:22px 0 0;font:400 11px/1.6 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--stoneD)}
@media (max-width:1024px){.prd-row{grid-template-columns:1fr 1fr;row-gap:16px}.prd-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.prd-row{grid-template-columns:1fr}}
/* R&D programmes (NIH) */
.rd{list-style:none;margin:0;padding:0}
.rd-row{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,4.4fr) minmax(0,4fr) minmax(0,2fr);column-gap:var(--gap);align-items:start;padding:14px 0 15px;border-top:1px solid var(--hair);position:relative}
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
.prt{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,9fr);gap:var(--gap);margin-top:clamp(64px,7vw,110px);border-top:1px solid var(--hair);padding-top:22px}
.prt .lab{color:var(--accL)}
.prt ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px var(--gap)}
.prt li{font-family:var(--disp);font-weight:300;font-size:clamp(17px,1.3vw,21px);line-height:1.3;color:var(--bone);border-left:1px solid var(--hair);padding-left:14px}
@media (max-width:1024px){.prt{grid-template-columns:1fr}.prt ul{grid-template-columns:repeat(2,minmax(0,1fr))}}
/* team: founders' portraits (from collamedixinc.com), advisers as text */
.cm-team .pg{justify-content:flex-start}
.cm-team .pt .ph img{object-position:50% 22%}
.cm-team .pt p{color:var(--stoneD)}
.cm-adv{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px)}
.cm-adv>div{border-top:1px solid var(--hairD);padding-top:18px}
.cm-adv .lab{display:block;margin-bottom:14px;color:var(--accD)}
.cm-adv ul{list-style:none;margin:0;padding:0}
.cm-adv li{font-size:15px;line-height:1.45;color:var(--ink);padding:0 0 12px}
.cm-adv li span{display:block;color:var(--stoneD);font-size:13.5px}
@media (max-width:900px){.cm-adv{grid-template-columns:1fr;row-gap:32px}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(19px,1.5vw,24px);line-height:1.35;letter-spacing:-.01em;overflow-wrap:anywhere}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("collamedix-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M74 26A32 32 0 1 0 74 70"/></svg>
    <div class="wm"><span>COLLAMEDIX</span></div>
  </div>
  <span class="lab pl">Pure collagen biofabrics · Cleveland, Ohio</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="CollaMedix, home"><svg class="cmk" viewBox="0 0 30 30" aria-hidden="true">' + MARK + '</svg><span class="bt"><b>Colla</b>Medix</span></a>'

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
    <div><span class="lab">Office</span><br>3303 Carnegie Ave, Cleveland, OH</div>
    <div><span class="lab">Email</span><br>donna@collamedixinc.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">CollaMedix</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="CollaMedix";\nvar PK="collamedix";'

R["content"] = r'''var FONTS=['300 1em "Figtree"','400 1em "Figtree"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','400 1em "IBM Plex Mono"'];
var MAIL="donna@collamedixinc.com";
var RP="https://reporter.nih.gov/project-details/";
var SHEETS=[];var GROUPS=[];var PEOPLE=[];
var NEWS=[
 {d:"2026-08",s:"NIH · NICHD",t:"SBIR Phase II for CollaSling continues into its fifth year",u:RP+"11367360"},
 {d:"2025-01",s:"Crain’s Cleveland Business",t:"CollaMedix charts big growth in a new Cleveland facility",u:"https://www.crainscleveland.com/health-care/collamedix-ramps-biotech-production-bigger-space"},
 {d:"2025-01",s:"UH Haslam Sports Innovation Center",t:"UH Haslam Sports Innovation Center invests in CollaMedix",u:"https://www.linkedin.com/posts/uh-haslam-sports-innovation-center_sportsmedicine-innovation-activity-7283552371371065344-k999"},
 {d:"2023-09",s:"Press release",t:"Oversubscribed seed round, preparing to enter sports medicine",u:"https://collamedixinc.com/wp-content/uploads/2023/10/CollaMedix-SAFE-Press-Release-Sept.-2023.pdf"},
 {d:"2022-12",s:"Press release",t:"Orthopedic Advisory Board named; David Nolan joins as adviser",u:"https://collamedixinc.com/wp-content/uploads/2022/12/Press-Release-CollaMedix-Dec-2022.pdf"},
 {d:"2019-10",s:"The Daily · Case Western Reserve",t:"Exclusive licensing agreement for the electrocompaction patents",u:"https://thedaily.case.edu/collamedix-biotech-startup-founded-with-technology-invented-at-case-western-reserve-and-university-hospitals-reaches-exclusive-licensing-agreement/"}
];'''

R["views"] = r'''/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function prd(){var A=[
  ["CollaSleeve<sup>®</sup>","Orthopedics · rotator cuff repair","A tubular braided pure collagen scaffold, deployed simply by sliding it over the sutures used in a tendon repair and implanted arthroscopically in the standard SpeedBridge procedure. Its aligned threads drive organized, tendon-like collagen across the repair.",["About 500,000 repairs a year","Retear rates of 25% to 90% in some patients","Arthroscopic, over any suture"],1],
  ["CollaSling<sup>®</sup>","Female health · stress urinary incontinence","A safer, bio-inspired pure collagen sling: a 50 cm electrocompacted braided scaffold that supports the urethra from below like a hammock. In long-term studies in sheep it laid down a thick ligamentous band of new collagen.",["NIH NICHD SBIR Phase II","Implanted in 14 adult sheep","Human-size prototype"],0],
  ["CollaFabric<sup>®</sup> Hybridized","The platform","ELAC threads combined with other materials for specific properties and tissue responses: UHMW polyethylene, PLLA or PLGA; mesenchymal or other stem cells; or hydroxyapatite for osteoinduction.",["Knitted · woven · filament-wound · braided"],0]];
  return '<ul class="prd">'+A.map(function(a){return '<li class="prd-row"><div><h3>'+a[0]+'</h3><span class="nm3">'+esc(a[1])+'</span></div><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">First product</span>':'')+a[3].map(function(m){return '<span class="lab">'+esc(m)+'</span>'}).join("")+'</div></li>'}).join("")+'</ul>'+
  '<p class="prd-note">Products under development: not for clinical use. Not available for sale in the United States.</p>'}
function rd(){var A=[
  ["2020–2027","CollaSling: a tissue-guidance biofabric for stress urinary incontinence","Phase II since 2020, renewed in 2024; year five funded in August 2026.",["NICHD · SBIR Phase II","11367360"],1],
  ["2024–2026","AlloBrace: a pure collagen augment","To improve the performance and integration of allografts.",["NIAMS · SBIR Phase I","10919715"],0],
  ["2023–2025","OsTend: a load-bearing, bi-phasic collagen scaffold","A scaffold for massive rotator cuff repairs.",["NIAMS · SBIR Phase I","10761321"],0],
  ["2023–2025","CollaLink: a guided-regenerative scaffold","For augmentation of anterior cruciate ligament repair.",["NIAMS · SBIR Phase I","10760639"],0]];
  return '<ul class="rd">'+A.map(function(a){var lk='<a class="lab ul" href="'+RP+a[3][1]+'" target="_blank" rel="noopener">NIH RePORTER ↗</a>';return '<li class="rd-row"><span class="yr">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p><div class="meta">'+(a[4]?'<span class="tag">Active</span>':'')+'<span class="lab">'+esc(a[3][0])+'</span>'+lk+'</div></li>'}).join("")+'</ul>'}
function partners(){var P=["National Science Foundation","National Institutes of Health","Case Western Reserve University","University Hospitals","UH Haslam Sports Innovation Center","Ohio Third Frontier","dsm-firmenich Engineering Materials","Innovation Fund"];
  return '<div class="prt"><span class="lab">Partners</span><ul>'+P.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function team(){var T=[["richardson","Donna Richardson","Founder · Chief Executive Officer"],["shankar","Subba Shankar, PhD","Founder · Chief Technology Officer"],["akkus","Ozan Akkus, PhD","Inventor, Founder · Chief Scientific Officer"],["hijaz","Adonis Hijaz, MD","Founder · Chief Medical Officer"]];
  return '<div class="pg">'+T.map(function(t){return '<div class="pt"><div class="ph"><img src="'+t[0]+'.webp" alt="'+esc(t[1])+'" loading="lazy" width="560" height="700"></div><h3><span>'+esc(t[1])+'</span></h3><p>'+esc(t[2])+'</p></div>'}).join("")+'</div>'}
function adv(){var G=[
  ["Orthopedic Advisory Board",[["Robert Gillespie, MD","Chairman · Chief, Shoulder and Elbow Surgery, UH Cleveland Medical Center"],["Joseph Iannotti, MD, PhD","Professor of Surgery, Cleveland Clinic Lerner College of Medicine, CWRU"],["James Voos, MD","Chair of Orthopaedic Surgery, UH Cleveland Medical Center"]]],
  ["Female Health Clinical Advisory Board",[["Adonis Hijaz, MD","Chairman · Lester Persky Professor of Urology"],["Cecile Ferrando, MD, MPH","Urogynecologist, UC San Diego Health"],["David Sheyn, MD","Associate Professor of Urology"],["Eric Jelovsek, MD, MMEd, MSDS","Urogynecologist, Duke University"],["Kenneth M. Peters, MD","Chair of Urology, Corewell Health William Beaumont University Hospital"]]],
  ["Board",[["Karen Spilizewski","Board of Directors"],["Jim Anderson, MD, PhD","Professor of Biomedical Engineering, CWRU"],["Dave Nolan","Board Advisor · Retired Group President, Global Businesses, Zimmer Biomet"]]]];
  return '<div class="cm-adv">'+G.map(function(g){return '<div><span class="lab">'+esc(g[0])+'</span><ul>'+g[1].map(function(p){return '<li>'+esc(p[0])+'<span>'+esc(p[1])+'</span></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Collagen biomaterials · Cleveland, Ohio<span class="nomob"> · Since 2018</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Pure collagen,</span><span class="l">strong enough</span><span class="l"><em>to braid.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CollaMedix makes CollaFabric®, the only load-bearing pure collagen fabric in existence: electrocompacted collagen threads, braided into implants that guide the body to lay down new, aligned tissue.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">See how it is made '+ARR+'</a><a class="btn" href="#products" data-to="products">Our products</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why collagen</span>'+
   '<p class="txt" id="mani">Collagen is the building block of the body. In nature it is aligned and densely packed; made in a laboratory it is random, loose and <em>as strong as JELL-O.</em> Ours is aligned, dense and strong enough for a surgeon to rely on.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$8M</span><p class="k">In grant funding from the NSF, NIH and other local government entities</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100<sup>%</sup></span><p class="k">Pure bovine collagen, in a macroporous braided construct</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12–18</span><p class="k">Months for CollaFabric to resorb, as new tissue forms</p></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · Electrocompaction</span><h2 class="d3">From solution to <em>load-bearing thread.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Collagen</span><span>ELAC</span><span>Braid</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start with medical-grade collagen.</h2><p>Solubilized collagen from commercial suppliers. Reconstituted like this it is randomly oriented and loosely packed, which is why most collagen products are sponges or pellets for jobs that bear no load.</p></article>'+
     '<article class="step"><h2>Electrocompact it into thread.</h2><p>CollaMedix’s patented electrocompaction (ELAC) process aligns and compacts the molecules into threads among the densest and strongest forms of reconstituted collagen, without denaturing them: tensile strength rises by orders of magnitude.</p></article>'+
     '<article class="step"><h2>Braid it like a textile.</h2><p>The threads survive knitting, weaving, filament winding and industrial braiding. Braided, they make the only pure collagen braided tube available today, with interconnected macroporosity for fast, complete cell infiltration.</p></article>'+
     '<article class="step"><h2>The body follows the threads.</h2><p>In vivo, new collagen is laid down aligned over the threads and is positive for the tendon marker tenomodulin. The fabric guides tendon-like tissue, a bioinductive response unique to ELAC threads.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One biofabric, <em>two unmet needs.</em></h2></div><p data-r>CollaMedix has developed two products from CollaFabric® to address unmet clinical needs, one in orthopedics and one in female pelvic health, on a platform that can be hybridized for more.</p></div>'+
   prd()+
  '</div></section>'+
  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research · NIH SBIR</span><h2 class="d2 split">Science that has <em>earned its funding.</em></h2></div><p data-r>CollaMedix has competed for and been awarded $8M in grant funding from the National Science Foundation, the National Institutes of Health and other local government entities.</p></div>'+
   rd()+partners()+
  '</div></section>'+
  '<section class="sec light cm-team" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by device builders and <em>the inventor.</em></h2></div><p data-r>Incorporated on June 12, 2018 to commercialize electrocompaction developed at Case Western Reserve University, by two medical device entrepreneurs with more than 60 years’ combined experience in start-ups.</p></div>'+
   team()+adv()+
   '<div class="shead" style="margin:clamp(72px,8vw,120px) 0 28px"><h2 class="d3 split">News</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For surgeons, partners and investors</span>'+
   '<h2 class="big split">A new era in <em>high-value collagen.</em></h2>'+
   '<p class="sub" data-r>Tell us about your interest in CollaFabric®, CollaSleeve® or CollaSling®, from research collaboration to partnership, and our team will be in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#story" data-to="story">The technology</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office and cleanroom</span><p><span>3303 Carnegie Ave</span><br><span>Cleveland, OH 44115</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul" href="tel:+12163386412">216-338-6412</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>3303 Carnegie Ave<br>Cleveland, OH 44115</div>'+
   '<div class="c"><span class="lab">Products</span>CollaFabric® · CollaSleeve®<br>CollaSling®</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#products" data-to="products">Products</a><br><a class="ul" href="#research" data-to="research">Research</a><br><a class="ul" href="#team" data-to="team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 44" aria-hidden="true"><text x="320" y="36" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:300;font-size:44px;letter-spacing:.06em">COLLAMEDIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CollaMedix Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"CollaMedix — Pure collagen, strong enough to braid",x:"Home"}}'''

R["field"] = (HERE / "collamedix.field.js").read_text()
R["story"] = (HERE / "collamedix.story.js").read_text()

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
(HERE / "collamedix.src.html").write_text(out)
print("wrote", HERE / "collamedix.src.html", len(out))
