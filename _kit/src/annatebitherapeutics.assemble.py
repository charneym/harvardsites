#!/usr/bin/env python3
"""Assemble annatebitherapeutics.src.html from the bedrocktherapeutics home-only build (itself built on the
firelight regions). Swaps meta, palette, fonts, logo, loader, nav, content, views, hero field and story.
Run from _kit/src:  python3 annatebitherapeutics.assemble.py"""
import re, pathlib
HERE = pathlib.Path(__file__).parent
s = (HERE / "bedrocktherapeutics.src.html").read_text()
MARK = (pathlib.Path("/tmp/claude-0/-home-user-harvardsites/fb24480c-2703-5d1a-841c-55daef9882c1/scratchpad/an/mark.b64")).read_text().strip() \
    if pathlib.Path("/tmp/claude-0/-home-user-harvardsites/fb24480c-2703-5d1a-841c-55daef9882c1/scratchpad/an/mark.b64").exists() \
    else (HERE / "annatebitherapeutics.mark.b64").read_text().strip()
(HERE / "annatebitherapeutics.mark.b64").write_text(MARK)
MK = "data:image/png;base64," + MARK

def region(name, new, css=None):
    global s
    for a, b in ((r"/\*<R:%s>\*/" % name, r"/\*</R:%s>\*/" % name), (r"<!--<R:%s>-->" % name, r"<!--</R:%s>-->" % name)):
        m = re.search(a + r".*?" + b, s, re.S)
        if m:
            open_ = m.group(0)[:len(re.match(a, m.group(0)).group(0))]
            close = re.search(b + r"$", m.group(0)).group(0)
            s = s[:m.start()] + open_ + new + close + s[m.end():]
            return
    raise SystemExit("region not found: " + name)

def rep(old, new, count=1):
    global s
    n = s.count(old)
    if n < 1:
        raise SystemExit("missing: " + old[:80])
    s = s.replace(old, new) if count == 0 else s.replace(old, new, count)

# ---------------------------------------------------------------- meta
region("meta", '''<title>Annate Bitherapeutics — ApoL1 bispecific antibodies against cancer, Athens, GA</title>
<meta name="description" content="Annate Bitherapeutics, a University of Georgia startup in Athens, Georgia, develops bispecific antibodies that deliver ApoL1, a component of the body's innate immune defence, directly into cancer cells. Lead programme ANN-01M targets relapsed/refractory multiple myeloma.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0a161c">
<link rel="icon" href="''' + MK + '''">''')

# ---------------------------------------------------------------- fonts + palette (sampled from annatebitherapeutics.com:
# logo teal #4bbba1 / #48b8a0 and white; theme slate #293e4a / #334d5c; darker teal #399882)
region("fonts", "/*@fonts Fraunces:300,300i,400; Lato:400,700*/")
region("root", ''':root{
  --ink:#0a161c;--inkr:10,22,28;--boner:241,246,245;--accr:57,152,130;--ink2:#0d1c23;--ink3:#13262f;--deep:#071014;
  --bone:#f1f6f5;--bone2:#e2ecea;--bone3:#cddcd9;
  --stone:#93a8ad;--stoneD:#3e5862;
  --acc:#399882;--accL:#4bbba1;--accD:#287563;--rd:#287563;--rdL:#4bbba1;--gy:#7f9399;
  --navy:#293e4a;
  --hair:rgba(241,246,245,.14);--hairD:rgba(10,22,28,.15);
  --disp:'Fraunces',Georgia,'Times New Roman',serif;
  --serif:'Fraunces',Georgia,serif;
  --sans:'Lato',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Lato',system-ui,-apple-system,'Segoe UI',sans-serif;
  --deco:'Lato',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}''')
region("fieldbg", '''.fieldbg{position:fixed;inset:0;z-index:0;background:#0a161c}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
rep("@media (max-width:860px){.fieldbg{background:#0e0c0c}}", "@media (max-width:860px){.fieldbg{background:#0a161c}}")
s = s.replace("76,188,179", "75,187,161")

# ---------------------------------------------------------------- logo (their own mark, cropped from assets/img/logo.png;
# the ANN/ATE split of the wordmark in teal and white, as on their logo)
region("logocss", '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand .mk{width:34px;height:34px;flex:0 0 auto;object-fit:contain;display:block}
.brand .wt{display:flex;flex-direction:column;align-items:stretch;line-height:1}
.brand .wt b{font:700 21px/1 var(--deco);letter-spacing:.24em;margin-right:-.24em;color:var(--bone)}
.brand .wt b span{color:var(--accL)}
.brand .wt i{margin-top:6px;font:700 9.5px/1 var(--deco);font-style:normal;letter-spacing:.32em;text-transform:uppercase;color:var(--bone2);white-space:nowrap}
@media (max-width:420px){.brand .wt b{font-size:18px}.brand .wt i{font-size:8px;letter-spacing:.26em}.brand .mk{width:30px;height:30px}}''')
region("brand", '<a href="#/" class="brand" id="brand" aria-label="Annate Bitherapeutics, home"><img class="mk" src="' + MK + '" alt="" width="34" height="34"><span class="wt"><b><span>ANN</span>ATE</b><i>Bitherapeutics</i></span></a>')

region("seen", '<script>try{if(sessionStorage.getItem("annate-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
region("pre", '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 48 48"><path class="ring" d="M24 2a22 22 0 1 1 0 44a22 22 0 1 1 0-44"/><image href="''' + MK + '''" x="11" y="11" width="26" height="26"/></svg>
    <div class="wm"><span>ANNATE</span></div>
  </div>
  <span class="lab pl">ApoL1 Bispecific Antibodies · Athens, GA</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
rep('''#pre .mk .hx{fill:none;stroke:var(--bone);stroke-width:1.4;stroke-linejoin:round}
#pre .mk .pk{fill:none;stroke:var(--bone);stroke-width:1.4;stroke-linejoin:round;stroke-linecap:round}
#pre .mk .wv{fill:none;stroke:var(--accL);stroke-width:1.4;stroke-linejoin:round;stroke-linecap:round}''',
'''#pre .mk .ring{fill:none;stroke:var(--accL);stroke-width:1}''')

MAIL = "michael.cipriano@annatebitherapeutics.com"
region("navmenu", '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/pipeline">Pipeline</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/approach">Approach</a></li>
    <li><a href="#/pipeline">Pipeline</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Headquarters</span><br>Athens, GA</div>
    <div><span class="lab">Email</span><br><a href="mailto:''' + MAIL + '''">''' + MAIL.replace("@", "@<wbr>") + '''</a></div>
  </div>
</div>''')
region("xc", '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Annate Bitherapeutics</span><div class="t" id="xtt"></div></div>''')
region("site", 'var SITE="Annate Bitherapeutics";\nvar PK="annate";')

# ---------------------------------------------------------------- content
region("content", '''var FONTS=['300 1em "Fraunces"','italic 300 1em "Fraunces"','400 1em "Fraunces"','400 1em "Lato"','700 1em "Lato"'];
var MAIL="''' + MAIL + '''";
var RP="https://reporter.nih.gov/project-details/";
var AB="https://annatebitherapeutics.com/";
/* Programmes: annatebitherapeutics.com (home, pipeline and the 6 September 2026 release) and NIH RePORTER 1R43CA306589-01.
   [platform, programme, target, status, detail, link, link label] */
var PIPE=[
 ["ANN-01M","Relapsed/refractory multiple myeloma","Bispecific · ApoL1","Lead optimisation · Pre-clinical","A first-in-class bispecific antibody designed to capture endogenous ApoL1 complexes circulating in the blood and deliver them directly into myeloma cells, triggering tumour cell death through a mechanism that does not depend on immune cells. It is designed to sidestep the fitness bar that keeps many patients from CAR-T and the exhaustion that can blunt T-cell engagers. An NCI SBIR Phase I award supports in vitro and advanced in vivo efficacy studies and work toward IND-enabling data.",RP+"11254465","NIH RePORTER"],
 ["ANN-01P","Mesothelin-expressing cancers, with a focus on pancreatic cancer (PDAC)","Bispecific · ApoL1","Research · Pre-clinical","The same ApoL1 platform turned on mesothelin, a tumour-surface antigen, with pancreatic ductal adenocarcinoma as the first focus. Multiple myeloma and pancreatic cancer remain among the most challenging diseases in oncology.",AB+"pipeline/","Annate pipeline"]];
/* "Why this matters", from the approach page. */
var EVID=[
 ["Unique mechanism","Lysosomal disruption is a novel mode of action that complements existing standards and may overcome cross-resistance"],
 ["Tumour selectivity","The payload is endogenous and only unleashed inside targeted cells, maintaining a wide therapeutic window"],
 ["Therapy fatigue","Many relapsed patients have exhausted T-cell-dependent options; a cell-intrinsic approach keeps working when lymphocyte counts fall"],
 ["Combination strategy","Annate evaluates how its therapeutics can enhance or complement existing standards of care"]];
/* annatebitherapeutics.com/team. Text-only masthead. */
var TEAM=[
 {g:"Founders",name:"Eric DeJesus, PhD",title:"Co-Founder & CEO",sum:"Conceptualised and first investigated ApoL1 as a therapeutic against human disease in 2010, with a publication record on ApoL1 toxicity."},
 {g:"Founders",name:"Stephen Hajduk, PhD",title:"Co-Founder & CSO",sum:"A 47-year scientific career and over 100 publications, including pioneering studies of ApoL1 toxicity; former head of biochemistry at UGA."},
 {g:"Founders",name:"Michael Cipriano, PhD",title:"Co-Founder & VP, R&D",sum:"Conceptualised targeting ApoL1 with a bispecific antibody guided system; cell biology, bioinformatics and study design."},
 {g:"Advisors",name:"Brian Longstreet",title:"Strategic Business Advisor",sum:"CEO and co-founder of Exolvo Biosciences; earlier leadership roles at Merck and Schering-Plough."},
 {g:"Advisors",name:"Marty Moore, PhD",title:"FDA Pathway Advisor",sum:"Built university spinouts into clinical-stage companies: two IND submissions, five clinical trials, over $75M raised."},
 {g:"Advisors",name:"Ajay L. Nooka, MD, MPH",title:"Clinical Trials Advisor, Myeloma",sum:"Myeloma clinician-scientist with leadership across clinical trials at Emory's Winship Cancer Institute."},
 {g:"Advisors",name:"Gregory B. Lesinski, PhD, MPH",title:"Translational Science Advisor, Oncology",sum:"Professor and Associate Director for Basic Research at Emory's Winship Cancer Institute."},
 {g:"Advisors",name:"Vikas A. Gupta, MD, PhD",title:"Clinical and Translational Science Advisor",sum:"Hematologist-oncologist at Emory University advancing myeloma and immunotherapy research."},
 {g:"Advisors",name:"Serguei V. Kozlov, PhD, MBA, PMP",title:"Translational Science Advisor, Animal Models",sum:"Leads translational in vivo model development at the Frederick National Laboratory."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 2026","Annate awarded a $400K NCI SBIR Phase I grant to advance ANN-01M in relapsed/refractory multiple myeloma","Annate Bitherapeutics",AB+"press-release/recognition/nci-sbir-ann-01m/"],
 ["August 2026","NCI SBIR Phase I: Exploring the therapeutic potential of apolipoprotein L1 in multiple myeloma ($398,040)","NIH RePORTER",RP+"11254465"],
 ["May 2026","UGA's Hajduk Lab awarded a $250,000 IMS and Paula and Rodger Riney Foundation translational research grant in multiple myeloma","Annate Bitherapeutics",AB+"press-release/recognition/research/ims-riney-translational-research-grant/"],
 ["May 2026","Annate Bitherapeutics wins at the 2026 GIPA Startup Awards in Atlanta","Annate Bitherapeutics",AB+"press-release/recognition/events/gipa-startup-awards/"],
 ["April 2026","Eric DeJesus joins Georgia Life Sciences in Washington for the CSBA Fly-In","Annate Bitherapeutics",AB+"press-release/events/recognition/gls-csba-fly-in/"],
 ["March 2026","‘A chance to ring the bell’: how a UGA startup is changing the fight against cancer","UGA Research News","https://research.uga.edu/news/a-chance-to-ring-the-bell-how-a-uga-startup-is-changing-the-fight-against-cancer/"],
 ["June 2025","Annate Bitherapeutics represents UGA at the Southeastern Venture Showcase","UGA Research News","https://research.uga.edu/news/annate-bitherapeutics-represents-uga-at-southeastern-venture-showcase/"]];
var SHEETS=[];''')

# ---------------------------------------------------------------- views
views = (HERE / "annatebitherapeutics.views.js").read_text()
region("views", views)
field = (HERE / "annatebitherapeutics.field.js").read_text()
region("field", field)
story = (HERE / "annatebitherapeutics.story.js").read_text()
region("story", story)

# ---------------------------------------------------------------- comments / extra css
rep("/* ===== Bedrock Therapeutics: the palette is sampled from their own logo (images/bedrockLogo.png: navy #072d51, teal\n   #198285 on white): a deep navy ink, the logo teal as the accent (a lighter #4cbcb3 for text on dark) and a cool bone.\n   Display type in Newsreader, echoing the lowercase serif wordmark on bedrocktherapeutics.com; Archivo for labels and UI.",
    "/* ===== Annate Bitherapeutics: the palette is sampled from their live site and logo (assets/img/logo.png: teal #4bbba1\n   and white; theme slate #293e4a, darker teal #399882): a deep slate ink, the logo teal as the accent, a cool bone.\n   Lato is the face of annatebitherapeutics.com; Fraunces for display.")
rep("/* Bedrock additions */", "/* Annate additions */")
rep(".btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}", ".btn.solid{background:var(--accL);border-color:var(--accL);color:var(--deep)}")
rep(".light .btn.solid{background:var(--acc);border-color:var(--acc);color:#fff}", ".light .btn.solid{background:var(--accD);border-color:var(--accD);color:#fff}")
extra = (HERE / "annatebitherapeutics.extra.css").read_text()
rep("</style>\n</head>", extra + "\n</style>\n</head>")

out = HERE / "annatebitherapeutics.src.html"
out.write_text(s)
left = [m.start() for m in re.finditer(r"(?i)bedrock|bdrk|cornea|newsreader|archivo", s)]
print("written", out, len(s), "leftovers:", len(left))
for i in left[:20]:
    print("  ", s[max(0, i - 60):i + 40].replace("\n", " "))
