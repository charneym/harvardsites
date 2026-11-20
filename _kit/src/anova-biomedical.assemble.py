#!/usr/bin/env python3
"""Assemble anova-biomedical.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run: python3 _kit/src/anova-biomedical.assemble.py && node _kit/build.js src/anova-biomedical.src.html anova-biomedical/index.html"""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
SRC = (HERE / "firelight.src.html").read_text()
R = {}

# Anova mark, traced from the logo file (legAsset 4@500x.png): two mirrored halves, white and gold, 330 x 384.
HALF = "M0 0H100C140 0 163 30 163 70V314C163 354 140 384 100 384H0V286C0 234 56 204 126 204V180C56 180 0 150 0 98Z"
UNION = "M0 0H100C140 0 164 30 164 70C164 30 189 0 229 0H329V98C329 150 273 180 203 180V204C273 204 329 234 329 286V384H229C189 384 164 354 164 314C164 354 140 384 100 384H0V286C0 234 56 204 126 204V180C56 180 0 150 0 98Z"
def scale_path(d, k, ox, oy):
    toks = re.findall(r"[A-Za-z]|-?\d+(?:\.\d+)?", d); out = []; cmd = None; idx = 0
    for t in toks:
        if t.isalpha():
            cmd = t; idx = 0; out.append(t); continue
        v = float(t)
        if cmd == "H": v = v * k + ox
        elif cmd == "V": v = v * k + oy
        else: v = v * k + (ox if idx % 2 == 0 else oy)
        idx += 1; out.append(("%.2f" % v).rstrip("0").rstrip("."))
    return " ".join(out)
PRE_MARK = scale_path(UNION, 0.235, (96 - 329 * 0.235) / 2, (96 - 384 * 0.235) / 2)
MARK = '<path class="w" d="' + HALF + '"/><path class="g" d="' + HALF + '" transform="matrix(-1 0 0 1 329 0)"/>'

R["meta"] = r'''<title>Anova Biomedical — Next-generation vascular prosthetics</title>
<meta name="description" content="Anova Biomedical, Inc., a Cornell spin-out in Ithaca, New York, develops elastic, fully degradable vascular grafts that match the mechanics of native vessels and remodel into the patient's own tissue.">
<meta name="theme-color" content="#14212d">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-20 -10 370 404'%3E%3Crect x='-20' y='-10' width='370' height='404' fill='%2314212d'/%3E%3Cpath fill='%23ffffff' d='M0 0H100C140 0 163 30 163 70V314C163 354 140 384 100 384H0V286C0 234 56 204 126 204V180C56 180 0 150 0 98Z'/%3E%3Cpath fill='%23d89c28' transform='matrix(-1 0 0 1 329 0)' d='M0 0H100C140 0 163 30 163 70V314C163 354 140 384 100 384H0V286C0 234 56 204 126 204V180C56 180 0 150 0 98Z'/%3E%3C/svg%3E">'''

R["fonts"] = "/*@fonts Spectral:300,300i,400; Manrope:400,500,600; DM Mono:400*/"

R["root"] = r''':root{
  --ink:#14212d;--inkr:20,33,45;--boner:245,242,234;--accr:216,156,40;--ink2:#172533;--ink3:#1f2f3f;--deep:#0d1620;
  --bone:#f5f2ea;--bone2:#ebe6da;--bone3:#dcd5c6;
  --stone:#a5abb1;--stoneD:#56606a;
  --acc:#d89c28;--accL:#e2ad48;--accD:#8a5d0c;
  --hair:rgba(245,242,234,.14);--hairD:rgba(20,33,45,.16);
  --disp:'Spectral',Georgia,'Times New Roman',serif;
  --serif:'Spectral',Georgia,serif;
  --sans:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'DM Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}'''

R["fieldbg"] = r'''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#15232f 0%,#0f1a25 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}'''

R["logocss"] = r'''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.mk{width:28px;height:33px;flex:none;overflow:visible}
.brand svg.mk .w{fill:currentColor}.brand svg.mk .g{fill:var(--acc)}
.brand .bt{display:flex;flex-direction:column;gap:3px;font-family:var(--sans);text-transform:uppercase;white-space:nowrap;line-height:1}
.brand .bt b{font-weight:500;font-size:19px;letter-spacing:.2em}
.brand .bt small{font-weight:400;font-size:9.5px;letter-spacing:.31em}'''
R["scenecss"] = r'''
/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,4.4fr) minmax(0,7.6fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:13ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9a9893;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66707a;transition:background .35s,border-color .35s}
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
.scene .wl{fill:rgba(var(--boner),.07);stroke:rgba(var(--boner),.62);stroke-width:1.2}
.scene .ht{fill:none;stroke:rgba(var(--boner),.2);stroke-width:1}
.scene .lum{fill:none;stroke:rgba(var(--boner),.36);stroke-width:1.2;stroke-dasharray:4 14;animation:avFlow 1.6s linear infinite}
@keyframes avFlow{to{stroke-dashoffset:-36}}
.scene .stf{fill:rgba(165,171,177,.12);stroke:rgba(165,171,177,.85);stroke-width:1.2}
.scene .stl{fill:none;stroke:rgba(165,171,177,.38);stroke-width:1}
.scene .el{fill:rgba(var(--accr),.3);stroke:var(--accL);stroke-width:1.4}
.scene .elh{fill:none;stroke:rgba(226,173,72,.7);stroke-width:.9}
.scene .neo{fill:rgba(var(--boner),.07);stroke:rgba(var(--boner),.62);stroke-width:1.2}
.scene .hyp{fill:rgba(165,171,177,.3);stroke:rgba(200,205,210,.8);stroke-width:1}
.scene .cel{fill:rgba(var(--boner),.82)}
.scene .cel+.nu{fill:var(--accD)}
.scene .sut{fill:none;stroke:rgba(var(--boner),.55);stroke-width:1}
.scene .ld{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .dot{fill:var(--accL)}
.scene text{font-family:var(--mono);font-size:13px;letter-spacing:.12em;fill:#c9ccd0}
.scene text.a{fill:var(--accL)}
.scene .pT{animation:avPT 1.15s ease-in-out infinite}
.scene .pB{animation:avPB 1.15s ease-in-out infinite}
@keyframes avPT{0%,100%{transform:translateY(0)}38%{transform:translateY(calc(var(--a,9px) * -1))}}
@keyframes avPB{0%,100%{transform:translateY(0)}38%{transform:translateY(var(--a,9px))}}
@media (prefers-reduced-motion:reduce){.scene .pT,.scene .pB,.scene .lum{animation:none}}
@media (max-width:1024px){.scene svg text{font-size:23px!important;letter-spacing:.06em!important}}
/* ===== Anova Biomedical additions ===== */
.hero .hero-h{font-size:clamp(46px,5.7vw,104px);letter-spacing:-.03em;line-height:1}
@media (max-width:860px){.hero .hero-h{font-size:clamp(40px,11.2vw,80px)}.hero .hero-h .l{white-space:normal}}
.d1 em,.d2 em,.d3 em,.big em,.mani .txt em{font-weight:300}
.btn.solid,.dark .btn.solid,.hero .btn.solid{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.btn.solid::before{background:var(--bone)}
.btn.solid:hover{color:var(--ink);border-color:var(--bone)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{color:#fff;border-color:var(--accD)}
.stat .v{font-size:clamp(54px,5.6vw,100px)}
.stat .v sup{color:var(--accL)}
/* technology: micrograph beside three pillars */
.tech{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,96px);align-items:start}
.tech figure{margin:0}
.tech figure .ph{position:relative;aspect-ratio:5/4;overflow:hidden;background:var(--bone3)}
.tech figure img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.05);transition:transform .6s var(--eo)}
.tech figure:hover img{transform:scale(1.03)}
.tech figcaption{margin-top:14px;font-size:14px;line-height:1.5;color:var(--stoneD);max-width:44ch}
.pil{list-style:none;margin:0;padding:0}
.pil li{position:relative;display:grid;grid-template-columns:56px minmax(0,1fr);column-gap:var(--gap);padding:26px 0 28px;border-top:1px solid var(--hairD)}
.pil li:last-child{border-bottom:1px solid var(--hairD)}
.pil li::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.pil li:hover::before{transform:scaleX(1)}
.pil .lab{color:var(--accD);padding-top:8px}
.pil h3{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.2vw,36px);line-height:1.1;letter-spacing:-.02em;margin:0 0 10px}
.pil p{margin:0;color:var(--stoneD);font-size:16px;max-width:52ch}
@media (max-width:960px){.tech{grid-template-columns:1fr}}
/* pipeline rows */
.prog-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,5fr) minmax(0,3fr);column-gap:var(--gap);align-items:start;padding:18px 0 20px;border-top:1px solid var(--hair);position:relative}
.prog-row:last-of-type{border-bottom:1px solid var(--hair)}
.prog-row::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.prog-row:hover::after{transform:scaleX(1)}
.prog-row h3{font-family:var(--disp);font-weight:300;font-size:clamp(32px,3vw,50px);line-height:1;letter-spacing:-.03em;margin:0}
.prog-row h3 em{color:var(--accL)}
.prog-row .pind{display:block;margin-top:14px;color:var(--stone);font-size:15px}
.prog-row p{margin:0;color:rgba(var(--boner),.8);font-size:16px;max-width:54ch}
.prog-row .meta{display:flex;flex-direction:column;gap:8px}
.prog-row .meta .lab b{font-weight:400;color:var(--bone)}
@media (max-width:1024px){.prog-row{grid-template-columns:1fr 1fr;row-gap:18px}.prog-row .meta{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;gap:8px 24px}}
@media (max-width:700px){.prog-row{grid-template-columns:1fr}}
/* team: uniform portrait grid (CI) */
.pg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(30px,3vw,44px) var(--gap)}
.pt{position:relative;display:block;min-width:0;color:inherit}
.pt .ph{position:relative;aspect-ratio:4/5;overflow:hidden;background:var(--ink3)}
.pt .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 30%;filter:grayscale(1) contrast(1.03) brightness(.96);transition:filter .35s ease-out,transform .45s var(--eo)}
.pt:hover .ph img{filter:grayscale(0);transform:scale(1.035)}
.pt h3{font-family:var(--disp);font-weight:400;font-size:22px;line-height:1.2;letter-spacing:-.015em;margin:18px 0 4px;transition:color .25s ease-out}
.pt h3 span{background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;transition:background-size .35s var(--eo)}
.pt:hover h3{color:var(--accL)}
.pt:hover h3 span{background-size:100% 1px}
.pt .ro{font-size:14.5px;line-height:1.4;margin:0;color:var(--stone)}
.pt .bio{font-size:14px;line-height:1.5;margin:10px 0 0;color:rgba(var(--boner),.66);max-width:32ch}
@media (max-width:1024px){.pg{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.pg{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:14px}.pt h3{font-size:18px}.pt .bio{display:none}}
/* contact block in the CTA */
.cta .ctc2{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);margin-top:clamp(56px,6vw,96px);border-top:1px solid var(--hairD);padding-top:16px;align-items:start}
.cta .ctc2 .lab{display:block;margin-bottom:10px;color:var(--accD)}
.cta .ctc2 p{margin:0;font-family:var(--disp);font-weight:300;font-size:clamp(20px,1.6vw,25px);line-height:1.35;letter-spacing:-.015em}
.cta .ctc2 a{color:var(--ink)}
.cta>.wrap>.ctc2{grid-column:1/-1}
@media (max-width:860px){.cta .ctc2{grid-template-columns:1fr;row-gap:28px}}
.ftr .fcv{opacity:.3!important}
'''

R["seen"] = r'''<script>try{if(sessionStorage.getItem("anv-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>'''

R["pre"] = r'''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="''' + PRE_MARK + r'''"/></svg>
    <div class="wm"><span>ANOVA BIOMEDICAL</span></div>
  </div>
  <span class="lab pl">Vascular prosthetics · Ithaca, New York</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''

R["brand"] = '<a href="#/" class="brand" id="brand" aria-label="Anova Biomedical, home"><svg class="mk" viewBox="0 0 329 384" aria-hidden="true">' + MARK + '</svg><span class="bt"><b>Anova</b><small>Biomedical</small></span></a>'

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
    <div><span class="lab">Office</span><br>Ithaca, New York</div>
    <div><span class="lab">Email</span><br>anthony.damato@anovabiomedical.com</div>
  </div>
</div>'''

R["xc"] = r'''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Anova Biomedical</span><div class="t" id="xtt"></div></div>'''

R["site"] = 'var SITE="Anova Biomedical";\nvar PK="anv";'

R["content"] = r'''var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','400 1em "Manrope"','500 1em "Manrope"','400 1em "DM Mono"'];
var MAIL="anthony.damato@anovabiomedical.com";
/* people: names and titles exactly as on anovabiomedical.com (Meet the Team); lines from the Cornell Chronicle, Jan 21, 2025 */
var PEOPLE=[
 {name:"Anthony D’Amato, PhD",title:"CEO & Co-Founder",img:"img/damato.jpg",line:"Former postdoctoral researcher in the Wang lab; first-cohort Cornell Ignite Fellow for New Ventures."},
 {name:"Yadong Wang, PhD",title:"Chair of Scientific Advisory Board & Co-Founder",img:"img/wang.jpg",line:"McAdam Family Foundation Professor of Heart Assist Technology, Cornell Engineering."},
 {name:"Warrick Ma, PhD",title:"Principal Chemist",img:"img/ma.jpg",line:""},
 {name:"Ryan Rockett",title:"Biomedical Engineer",img:"img/rockett.jpg",line:""}
];
var SHEETS=[];var GROUPS=[];
var NEWS=[
 {d:"2026-09-01",s:"NIH RePORTER",t:"NHLBI awards Anova an STTR Phase I grant for compliant, degradable peripheral vascular grafts",u:"https://reporter.nih.gov/project-details/11406427"},
 {d:"2025-08",s:"NIH RePORTER",t:"NIDDK SBIR Phase I award ($298,371) for biodegradable, elastic grafts for hemodialysis",u:"https://reporter.nih.gov/project-details/11182162"},
 {d:"2025-01-21",s:"Cornell Chronicle",t:"New biodegradable graft could help cardiovascular patients",u:"https://news.cornell.edu/stories/2025/01/new-biodegradable-graft-could-help-cardiovascular-patients"},
 {d:"2024-10",s:"FuzeHub",t:"Grand prize and a $150,000 investment at the FuzeHub Commercialization Competition",u:"https://fuzehub.com/manufacturing-blog/fuzehub-announces-2024-new-york-state-innovation-summit-commercialization-competition-winners/"},
 {d:"2024-09",s:"Cornell",t:"Admitted to Cornell’s Center for Life Science Ventures incubator in Ithaca",u:"https://lifescienceventures.cornell.edu/"},
 {d:"2024-08-19",s:"NSF",t:"NSF SBIR Phase I: 3D printing of personalized vascular grafts using novel elastomeric resins",u:"https://www.nsf.gov/awardsearch/showAward?AWD_ID=2431804"}
];'''

R["views"] = r'''/* ================= VIEWS (home only: nav items scroll to sections) ================= */
function goSec(id){var el=document.getElementById(id);if(!el)return;
  if(id==="hero"){lenis?lenis.scrollTo(0,{duration:1.4}):scrollTo({top:0,behavior:"smooth"});return}
  if(lenis)lenis.scrollTo(el,{duration:1.5,offset:0});else el.scrollIntoView({behavior:"smooth"})}
window.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open"))closeMenu();goSec(a.getAttribute("data-to"))},true);
function pillars(){var P=[
  ["Biodegradable elastomers","Proprietary biomaterials that produce vascular prosthetics leading to a fully autologous, elastic neo-artery. When exposed to metal ions, the elastomer’s coiled molecules bind like a three-dimensional fishing net: it stretches, then springs back."],
  ["Advanced manufacturing","A novel approach gives unprecedented control during microfibre deposition, producing prosthetics that mimic the structure and mechanics of native arteries."],
  ["Easy clinical adoption","Designed with advice from clinical advisors, so the devices fit existing clinical workflows, with no special considerations for shipping, storage or implantation."]];
  return '<ol class="pil">'+P.map(function(p,i){return '<li><span class="lab">0'+(i+1)+'</span><div><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></div></li>'}).join("")+'</ol>'}
function progs(){var G=[
  ["deNovo<em>1</em> AVG","Hemodialysis vascular access","An arteriovenous graft made from PAS, a fully degradable elastomer, built with distinct arterial and venous zones. Remodelling into a compliant conduit has been shown in sheep; the Phase I study cannulates it for 180 days against the ePTFE gold standard.",[["Stage","Preclinical · large animal"],["Funding","NIH NIDDK SBIR Phase I"]]],
  ["NOVA<em>graft</em>","Peripheral bypass in small arteries","A compliant, degradable bypass graft designed to match arterial mechanics and remodel into the patient’s own tissue, already shown in the rat carotid artery. Phase I tests remodelling in elderly animals, the age of the target patients.",[["Stage","Preclinical"],["Funding","NIH NHLBI STTR Phase I, 2026"]]],
  ["Personalized <em>grafts</em>","Patient-specific prosthetics","An elastic, 3D-printable resin. Porous grafts were printed directly from de-identified patient imaging, far more flexible than conventional synthetic grafts and closer to the elasticity of human arteries.",[["Stage","Feasibility · Phase I complete"],["Funding","NSF SBIR Phase I"]]]];
  return G.map(function(g,i){return '<div class="prog-row"><div><span class="lab" style="display:block;margin-bottom:12px">Programme 0'+(i+1)+'</span><h3>'+g[0]+'</h3><span class="pind">'+esc(g[1])+'</span></div><p>'+esc(g[2])+'</p><div class="meta">'+g[3].map(function(m){return '<span class="lab">'+m[0]+' · <b>'+esc(m[1])+'</b></span>'}).join("")+'</div></div>'}).join("")}
function team(){return '<div class="pg">'+PEOPLE.map(function(p){return '<div class="pt"><div class="ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy" width="640" height="800" onerror="this.style.display=\'none\'"></div><h3><span>'+esc(p.name)+'</span></h3><p class="ro">'+esc(p.title)+'</p>'+(p.line?'<p class="bio">'+esc(p.line)+'</p>':'')+'</div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Vascular prosthetics · Ithaca, New York<span class="nomob"> · A Cornell spin-out</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Next-generation</span><span class="l">vascular <em>prosthetics.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Anova Biomedical re-designs vascular grafts from first principles: elastic, fully degradable prosthetics that move like native vessels and transform over time into the patient’s own artery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#story" data-to="story">How it works '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">Pipeline</a></div></div>'+
  '</section>'+
  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<p class="txt" id="mani">For over sixty years, vascular grafts have been made from two materials, PET and ePTFE. They have saved countless lives, but they never integrate with the body. We build grafts that match the mechanics of our vessels and become <em>the patient’s own artery.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">11</span><span class="k">Patents licensed from Professor Yadong Wang’s lab at Cornell, in composition, design and manufacturing</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">9–12</span><span class="k">Months for the graft to degrade as a new blood vessel regenerates in its place</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Federal Phase I awards: NSF (2024), NIH NIDDK (2025) and NIH NHLBI (2026)</span></div>'+
   '</div></div></section>'+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A graft that becomes <em>an artery.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Today</span><span>Elastic</span><span>Ingrowth</span><span>Neo-artery</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Stiff tubes, soft vessels.</h2><p>Synthetic grafts are made mostly from ePTFE, more than 100 times stiffer than arteries. At the joint between the stiff tube and the pulsing vessel, tension drives inflammation and scarring that can close the graft again.</p></article>'+
     '<article class="step"><h2>An elastomer that moves.</h2><p>Anova’s grafts are made from a fully degradable elastomer designed to match the mechanics of native vessels, expanding and contracting with every pulse, so there is no mismatch at the joint.</p></article>'+
     '<article class="step"><h2>The body moves in.</h2><p>As blood flows through it, new vascular cells grow in and around the graft while the body slowly absorbs the material, over about nine to twelve months.</p></article>'+
     '<article class="step"><h2>A neo-artery remains.</h2><p>What is left is a compliant conduit of the patient’s own tissue, with no foreign material staying in the body for life. Safe transformation into autologous tissue has been shown in animal studies.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Twenty-five years of <em>elastomer science.</em></h2></div><p data-r>The foundational technology comes from Professor Yadong Wang, who began the work in 2000 as a postdoctoral researcher in Robert Langer’s lab at MIT and has spent two decades evolving a biodegradable elastomer platform optimised for vascular engineering, now at Cornell University.</p></div>'+
   '<div class="tech"><figure data-r><div class="ph"><img src="img/sem.jpg" alt="Micrograph of the outer surface of an Anova graft, showing its layered microfibres" loading="lazy" width="749" height="599"></div><figcaption>Micrograph of a graft’s outer (abluminal) wall, showing the controlled microfibre structure.</figcaption></figure>'+pillars()+'</div>'+
  '</div></section>'+
  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From dialysis access <em>to bypass.</em></h2></div><p data-r>Our first product, the deNovo1 AVG, is the first step on a path toward replacing inferior graft materials across vascular access, bypass and personalised prosthetics.</p></div>'+
   progs()+
  '</div></section>'+
  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>Anova.</em></h2></div><p data-r>Co-founded by Anthony D’Amato and Professor Yadong Wang, and admitted in 2024 to Cornell’s Center for Life Science Ventures, a residential startup incubator in Ithaca.</p></div>'+
   team()+
  '</div></section>'+
  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><h2 class="d3 split">News and awards</h2></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Anova.</em></h2>'+
   '<p class="sub" data-r>To learn more about Anova Biomedical and its vascular grafts, write to our CEO.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Dr. D’Amato '+ARR+'</a><a class="btn" href="#pipeline" data-to="pipeline">See the pipeline</a></div>'+
   '<div class="ctc2"><div><span class="lab">Office</span><p><span>237 King Rd E</span><br><span>Ithaca, NY 14850</span></p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul" href="mailto:'+MAIL+'">anthony.damato@<wbr>anovabiomedical.com</a></p></div>'+
    '<div><span class="lab">Incubator</span><p>Center for Life Science Ventures, Cornell University</p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>237 King Rd E<br>Ithaca, NY 14850</div>'+
   '<div class="c"><span class="lab">Programmes</span>deNovo1 AVG, for hemodialysis access<br>NOVAgraft, for peripheral bypass</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#story" data-to="story">Technology</a><br><a class="ul" href="#pipeline" data-to="pipeline">Pipeline</a><br><a class="ul" href="#team" data-to="team">Team</a><br><a class="ul" href="#news" data-to="news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">anthony.damato@<wbr>anovabiomedical.com</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 44" aria-hidden="true"><text x="320" y="36" text-anchor="middle" style="font-family:Spectral,Georgia,serif;font-weight:300;font-size:46px;letter-spacing:.06em">ANOVA BIOMEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Anova Biomedical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route; any other hash renders home ================= */
function route(h){return {k:"home",v:vHome,t:"Anova Biomedical — Next-generation vascular prosthetics",x:"Home"}}'''

R["field"] = r'''/* ================= HERO FIELD: Anova's own photograph of its graft (anovabiomedical.com, "PIAS Graft"), colour-graded
   to the brand: the microfibre tube in logo gold on the site's navy. It is drawn to a canvas so it can breathe slowly on
   its own (no pointer response, CZ), and the same canvas is echoed behind the footer wordmark (BT). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,AR=1355/1800,MX=.335,MY=.64;
  img.decoding="async";img.onload=function(){ok=true;if(w)frame(true)};img.src="img/graft.jpg";
  function geo(){var mob=w<861,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2);
    if(mob){var U=h*.34,dw=Math.max(w*1.55,U*1.6/AR),dh=dw*AR,px=w*.5,py=U*.6;return {mob:1,dw:dw,dh:dh,x0:px-MX*dw,y0:py-MY*dh,px:px,py:py}}
    var dh2=Math.max(h*1.18,w*.8*AR),dw2=dh2/AR,px2=side+(w-2*side)*.6,py2=h*.6;
    return {mob:0,dw:dw2,dh:dh2,x0:px2-MX*dw2,y0:py2-MY*dh2,px:px2,py:py2}}
  function size(){dpr=Math.min(2,window.devicePixelRatio||1);w=cv.clientWidth||innerWidth;h=cv.clientHeight||innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();frame(true)}
  function frame(once){
    var t=(performance.now()-t0)/1000;dim+=(dimT-dim)*.08;
    c.setTransform(dpr,0,0,dpr,0,0);
    var bg=c.createLinearGradient(0,0,0,h);bg.addColorStop(0,"#15232f");bg.addColorStop(1,"#0f1a25");c.fillStyle=bg;c.fillRect(0,0,w,h);
    if(ok&&G){var e=IN.v,s=(1.07-.04*e)+.008*Math.sin(t*.45),par=G.mob?0:-SP.v*70;
      c.save();c.globalAlpha=Math.min(1,e*1.2);c.translate(G.px,G.py+par);c.scale(s,s);c.translate(-G.px,-G.py);
      c.drawImage(img,G.x0,G.y0,G.dw,G.dh);
      var fw=G.dw*.24,lg=c.createLinearGradient(G.x0,0,G.x0+fw,0);lg.addColorStop(0,"rgba(20,34,46,1)");lg.addColorStop(1,"rgba(20,34,46,0)");c.fillStyle=lg;c.fillRect(G.x0-2,G.y0-2,fw+2,G.dh+4);
      c.restore();
      if(G.x0>0){c.fillStyle=bg;c.fillRect(0,0,Math.max(0,G.px-(G.px-G.x0)*s)+1,h)}}
    if(dim<.999){c.fillStyle="rgba(11,18,26,"+(1-dim).toFixed(3)+")";c.fillRect(0,0,w,h)}
    if(!shown&&ok){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*60)/60},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.px,G.py]:[w/2,h/2]}};
})();'''

R["story"] = r'''/* the story scene: one artery, drawn as an engraved longitudinal section, with a graft sewn into its middle.
   Step 1 the graft is stiff ePTFE: the artery pulses, the graft does not, and scar tissue narrows both joints.
   Step 2 the graft is Anova's elastomer: it pulses with the artery. Step 3 host cells move into its wall as it is absorbed.
   Step 4 the elastomer is gone and a continuous neo-artery remains. Each step changes the graft segment only. */
var AV={cy:250,ot:118,it:166,ib:334,ob:382,g0:300,g1:500,x0:110,x1:690};
function avHatch(x0,x1,y0,y1,st,dx){var d="";for(var x=x0-dx;x<x1;x+=st){var a=Math.max(x,x0),b=Math.min(x+dx,x1);if(b<=a)continue;var ya=y0+(a-x)/dx*(y1-y0),yb=y0+(b-x)/dx*(y1-y0);d+="M"+a.toFixed(1)+" "+ya.toFixed(1)+"L"+b.toFixed(1)+" "+yb.toFixed(1)}return d}
function avBand(x0,x1,y0,y1){return "M"+x0+" "+y0+"H"+x1+"V"+y1+"H"+x0+"Z"}
function avWall(cls,hcls,x0,x1,y0,y1,kind){var h="";
  if(kind==="n")h='<path class="'+hcls+'" d="'+avHatch(x0,x1,y0+2,y1-2,10,14)+'"/>';
  else if(kind==="s"){var d="";for(var y=y0+5;y<y1-1;y+=5)d+="M"+x0+" "+y+"H"+x1;h='<path class="'+hcls+'" d="'+d+'"/>'}
  else if(kind==="e")h='<path class="'+hcls+'" d="'+avHatch(x0,x1,y0+2,y1-2,11,14)+avHatch(x0,x1,y1-2,y0+2,11,14)+'"/>';
  return '<path class="'+cls+'" d="'+avBand(x0,x1,y0,y1)+'"/>'+h}
function avSut(x,y0,y1){return '<path class="sut" d="M'+(x-5)+' '+(y0-4)+'L'+(x+5)+' '+(y1+4)+'M'+(x+5)+' '+(y0-4)+'L'+(x-5)+' '+(y1+4)+'"/>'}
function rng2(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
var AV_CELLS=(function(){var r=rng2(11),C=[];for(var k=0;k<20;k++){var top=k%2===0,x=AV.g0+16+r()*(AV.g1-AV.g0-32),y=top?AV.ot+8+r()*32:AV.ib+8+r()*32,from=x<400?AV.g0-14:AV.g1+14;C.push([from,x,y,top,(r()-.5)*.5])}return C})();
function scene(){
  var A=AV,mob=MOBILE(),ty=mob?80:82,by=mob?440:434;
  function native(top){var y0=top?A.ot:A.ib,y1=top?A.it:A.ob;return avWall("wl","ht",A.x0,A.g0,y0,y1,"n")+avWall("wl","ht",A.g1,A.x1,y0,y1,"n")+avSut(A.g0,y0,y1)+avSut(A.g1,y0,y1)}
  function graft(top){var y0=top?A.ot:A.ib,y1=top?A.it:A.ob,cells="";
    AV_CELLS.forEach(function(q,k){if(q[3]===top)cells+='<g class="avC" data-k="'+k+'"><ellipse class="cel" cx="0" cy="0" rx="9" ry="3"/><circle class="nu" cx="0" cy="0" r="1.6"/></g>'});
    return '<g class="avS">'+avWall("stf","stl",A.g0,A.g1,y0,y1,"s")+'</g><g class="avE">'+avWall("el","elh",A.g0,A.g1,y0,y1,"e")+'</g><g class="avN">'+avWall("neo","ht",A.g0,A.g1,y0,y1,"n")+'</g>'+cells}
  function hyp(x,top){var y=top?A.it:A.ib,s=top?1:-1;return 'M'+(x-58)+' '+y+'C'+(x-30)+' '+(y+s*4)+' '+(x-22)+' '+(y+s*40)+' '+x+' '+(y+s*40)+'C'+(x+22)+' '+(y+s*40)+' '+(x+30)+' '+(y+s*4)+' '+(x+58)+' '+y+'Z'}
  function lab(id,x,t,b,bx,cls){return '<g id="'+id+'" style="opacity:0">'+
    '<text x="'+x+'" y="'+ty+'" text-anchor="middle" class="'+(cls||"")+'">'+t+'</text><path class="ld" d="M'+x+' '+(ty+12)+'V'+(A.ot-10)+'"/><circle class="dot" cx="'+x+'" cy="'+(A.ot-10)+'" r="2.6"/>'+
    '<text x="'+bx+'" y="'+by+'" text-anchor="middle">'+b+'</text><path class="ld" d="M'+bx+' '+(by-(mob?26:20))+'V'+(A.ob+10)+'"/><circle class="dot" cx="'+bx+'" cy="'+(A.ob+10)+'" r="2.6"/></g>'}
  return '<svg viewBox="110 '+(mob?50:56)+' 580 '+(mob?404:392)+'" aria-hidden="true">'+
   '<defs><linearGradient id="avFadeG" x1="110" x2="690" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".08" stop-color="#fff"/><stop offset=".92" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
   '<mask id="avFade" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="520"><rect x="0" y="0" width="800" height="520" fill="url(#avFadeG)"/></mask></defs>'+
   '<g mask="url(#avFade)">'+
    '<path class="lum" d="M'+A.x0+' '+A.cy+'H'+A.x1+'"/><path class="lum" style="animation-delay:-.5s" d="M'+A.x0+' '+(A.cy-48)+'H'+A.x1+'"/><path class="lum" style="animation-delay:-1s" d="M'+A.x0+' '+(A.cy+48)+'H'+A.x1+'"/>'+
    '<g id="avHyp">'+[A.g0,A.g1].map(function(x){return '<path class="hyp" d="'+hyp(x,true)+'"/><path class="hyp" d="'+hyp(x,false)+'"/>'}).join("")+'</g>'+
    '<g class="pT">'+native(true)+'</g><g class="pB">'+native(false)+'</g>'+
    '<g class="pT" id="avGT">'+graft(true)+'</g><g class="pB" id="avGB">'+graft(false)+'</g>'+
   '</g>'+
   lab("avL1",400,"ePTFE · OVER 100× STIFFER","SCARRING AT THE JOINT",A.g0)+
   lab("avL2",400,"ELASTOMER PULSES WITH THE ARTERY","NO MISMATCH AT THE JOINT",A.g1,"a")+
   lab("avL3",400,"HOST CELLS GROW IN","ABSORBED OVER 9–12 MONTHS",400,"a")+
   lab("avL4",400,"AUTOLOGOUS NEO-ARTERY","NO FOREIGN MATERIAL LEFT",400,"a")+
  '</svg>';
}
function storyDraw(svg){
  var E={hyp:$("#avHyp",svg),gt:$("#avGT",svg),gb:$("#avGB",svg),S:$$(".avS",svg),El:$$(".avE",svg),N:$$(".avN",svg),C:$$(".avC",svg),L:[$("#avL1",svg),$("#avL2",svg),$("#avL3",svg),$("#avL4",svg)]};
  return function(p,b){
    if(!E.gt.isConnected)return;
    var s1=seg(p,.02,.14),o1=seg(p,.22,.3),s2=seg(p,.27,.42),o2=seg(p,.48,.54),s3=seg(p,.52,.68),o3=seg(p,.74,.8),s4=seg(p,.78,.95);
    svg.style.opacity=(.25+.75*b).toFixed(3);
    var amp=(9*s2).toFixed(2)+"px";E.gt.style.setProperty("--a",amp);E.gb.style.setProperty("--a",amp);
    E.hyp.style.opacity=(1-s2).toFixed(3);
    E.S.forEach(function(g){g.style.opacity=(1-s2).toFixed(3)});
    E.El.forEach(function(g){g.style.opacity=(s2*(1-.5*s3)*(1-s4)).toFixed(3)});
    E.N.forEach(function(g){g.style.opacity=s4.toFixed(3)});
    E.C.forEach(function(g){var k=+g.getAttribute("data-k"),q=AV_CELLS[k],u=seg(p,.52+k*.008,.64+k*.006),x=lerp(q[0],q[1],u);
      g.setAttribute("transform","translate("+x.toFixed(1)+" "+q[2].toFixed(1)+") rotate("+(q[4]*57).toFixed(1)+")");g.style.opacity=((u>0?Math.min(1,u*3):0)*(1-.85*s4)).toFixed(3)});
    var LO=[(1-o1),s2*(1-o2),s3*(1-o3),s4];
    E.L.forEach(function(l,i){l.style.opacity=(b*LO[i]).toFixed(3)});
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
import re as _bo; out = _bo.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update 1: nav items open build-out pages (_kit/lib/buildout.js)
(HERE / "anova-biomedical.src.html").write_text(out)
print("wrote", HERE / "anova-biomedical.src.html", len(out))
