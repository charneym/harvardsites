#!/usr/bin/env python3
"""Assemble _kit/src/8thstreet.src.html from the firelight engine regions (HOME-ONLY format).
Never hand-edit the big file: rerun this script, then node _kit/build.js."""
import re, os, sys
K = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(K, 'src', 'firelight.src.html'), encoding='utf-8').read()

def reg(name, body):
    global src
    pats = [(r'/\*<R:%s>\*/' % name, r'/\*</R:%s>\*/' % name, '/*<R:%s>*/' % name, '/*</R:%s>*/' % name),
            (r'<!--<R:%s>-->' % name, r'<!--</R:%s>-->' % name, '<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name)]
    for a, b, A, B in pats:
        m = re.search(a + r'.*?' + b, src, re.S)
        if m:
            src = src[:m.start()] + A + body + B + src[m.end():]
            return
    sys.exit('region not found: ' + name)

INK = '#0c2118'
TITLE = '8th Street Investments — Financial planning and investment management, Alexandria, Virginia'
reg('meta', '''<title>''' + TITLE + '''</title>
<meta name="description" content="8th Street Investments is a registered investment adviser in Alexandria, Virginia, providing professional financial planning and investment management at reasonable fees: independent, customized and solely client-focused.">
<meta name="theme-color" content="#0c2118">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%231b5733'/%3E%3Cpath d='M14 14h36v40H14z' fill='none' stroke='%23f4f1e6' stroke-width='3'/%3E%3Cpath d='M20 21h6v8h-6zM29 21h6v8h-6zM38 21h6v8h-6zM36 37h8v8h-8z' fill='%23f4f1e6'/%3E%3Cpath d='M22 54V44a5 5 0 0 1 10 0v10' fill='%23b08d30'/%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts Newsreader:400,400i,600; Manrope:400,500*/")
reg('root', ''':root{
  --ink:#0c2118;--inkr:12,33,24;--boner:244,241,230;--accr:210,173,79;--ink2:#10291e;--ink3:#173527;--deep:#081710;
  --bone:#f4f1e6;--bone2:#ebe6d6;--bone3:#ddd6c2;
  --stone:#a9b6ac;--stoneD:#4b5b51;
  --acc:#b08d30;--accL:#d2ad4f;--accD:#7a5f1a;
  --green:#1b5733;
  --hair:rgba(244,241,230,.14);--hairD:rgba(12,33,24,.16);
  --disp:'Newsreader',Georgia,'Times New Roman',serif;
  --serif:'Newsreader',Georgia,serif;
  --sans:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#07150f 0%,#10271f 34%,#2a3f36 60%,#6b6748 76%,#122a20 84%,#0c2118 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.mk{width:auto;height:34px;flex:none;overflow:visible}
.brand svg.mk *{fill:none;stroke:var(--bone);stroke-width:1.5}
.brand svg.mk .g{fill:var(--accL);stroke:none}
.brand svg.mk .f{fill:var(--bone);stroke:none}
.brand .bw{display:flex;flex-direction:column;line-height:1}
.brand .bt{font:400 27px/1 var(--disp);letter-spacing:-.01em;color:var(--bone)}
.brand .bt b{font-weight:600;color:var(--accL)}
.brand .bt sup{font-size:.46em;letter-spacing:.06em;vertical-align:top;position:relative;top:.18em;margin-right:.12em}
.brand .wt{font:500 9.5px/1 var(--mono);letter-spacing:.32em;text-transform:uppercase;color:var(--stone);margin-top:6px}''')

reg('seen', '<script>try{if(sessionStorage.getItem("esi-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
MARK = '<path d="M2 2h30v38H2z"/><path d="M2 21h30"/><path class="f" d="M6 7h5v8H6zM14.5 7h5v8h-5zM23 7h5v8h-5zM20 25h9v8h-9z"/><path class="g" d="M6.5 40V30a4.5 4.5 0 0 1 9 0v10z"/>'
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M20 10h56v78H20zM20 50h56M30 20h10v16H30zM43 20h10v16H43zM56 20h10v16H56zM50 58h16v14H50zM28 88V68a8 8 0 0 1 16 0v20"/></svg>
    <div class="wm"><span>8TH STREET</span></div>
  </div>
  <span class="lab pl">Financial planning and investment management · Alexandria, Virginia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="8th Street Investments, home"><svg class="mk" viewBox="0 0 34 42" aria-hidden="true">' + MARK + '</svg><span class="bw"><span class="bt"><b>8</b><sup>TH</sup>Street</span><span class="wt">Investments</span></span></a>')
reg('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/services">Services</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/disclosures">Disclosures</a>
    <a class="btn" href="#/contact">Contact ''' + ARRS + '''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/approach">Approach</a></li>
    <li><a href="#/services">Services</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/disclosures">Disclosures</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Alexandria, Virginia</div>
    <div><span class="lab">Phone</span><br><a href="tel:+17035190962">(703) 519-0962</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">8th Street Investments</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="8th Street Investments";\nvar PK="esi";')

# ---------------- content (all from 8thstreetllc.com, Form ADV Part 2A of March 13, 2026, Form CRS, SEC IAPD) ----------------
reg('content', r'''var FONTS=['400 1em "Newsreader"','italic 400 1em "Newsreader"','600 1em "Newsreader"','400 1em "Manrope"','500 1em "Manrope"'];
var TEL="+17035190962",TELT="(703) 519-0962",FAX="(703) 519-0974",MAIL="info@8thstreetllc.com";
var B8="https://www.8thstreetllc.com/s/";
var ADV=B8+"8th-Street-Form-ADV-Part-2A-March-13-2026.pdf",CRS=B8+"2026-8th-Street-Form-CRS.pdf",PRIV=B8+"2026-8th-Street-Privacy-Policy-Notice.pdf",IAPD="https://adviserinfo.sec.gov/firm/summary/148727";
var SHEETS=[],GROUPS=[];
/* [name, title, summary, background] (8thstreetllc.com/about; titles from Form ADV Schedule A) */
var TEAM=[
 ["Michael E. Shea, CFA","Managing Member · Chief Investment Officer",
  "Michael works with each client to establish goals, evaluate risks and understand issues before building and managing a client’s customized portfolio.",
  "Before establishing 8th Street, Michael was a Senior Portfolio Manager with U.S. Trust Company, managing over $500 million in assets for high net worth individuals, foundations and endowments. He also spent over ten years in U.S. Trust’s Special Fiduciary Services Division as Senior Financial Analyst. B.S. in Finance, University of Colorado; M.B.A. in Finance and Accounting, New York University; CFA charterholder since 1998, and a member of the CFA Institute and CFA Society of Washington, DC."],
 ["Lisa C. Pendley, CFP®","Managing Member · Chief Compliance Officer",
  "Lisa works with clients to assess their financial needs and offer a plan to achieve their unique goals, in a thoughtful and common-sense manner.",
  "Before 8th Street, Lisa was a Senior Financial Planner with U.S. Trust Company, developing tailored wealth management programs and financial planning strategies for high net worth individuals, and served for over six years as Senior Vice President and legal counsel for its Special Fiduciary Services Division, specializing in employee benefits and ERISA fiduciary law. B.A. in Economics, University of Chicago; J.D., DePaul University College of Law; LL.M. in Taxation and Certificate in Employee Benefits Law, Georgetown University Law Center. A CERTIFIED FINANCIAL PLANNER™ and member of the Financial Planning Association (National Capital Area)."]
];
var DOCS=[
 {d:"Form CRS",s:"2026 · Client relationship summary",t:"Form CRS: our services, fees, obligations and conflicts",u:CRS},
 {d:"2026-03-13",s:"Form ADV Part 2A",t:"Firm brochure: our advisory business, fees and practices",u:ADV},
 {d:"Privacy",s:"2026 · Notice",t:"Privacy policy notice",u:PRIV},
 {d:"SEC",s:"CRD 148727",t:"8th Street Investments on the SEC’s Investment Adviser Public Disclosure site",u:IAPD}
];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",services:"s-services",team:"s-team",disclosures:"s-insights",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function docRows(list){return '<ul class="rows">'+list.map(function(n){var dt=/^\d{4}-/.test(n.d)?'<time class="lab" datetime="'+n.d+'">'+fd(n.d)+'</time>':'<span class="lab">'+esc(n.d)+'</span>';
  return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm">'+dt+'<span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<div class="tm">'+TEAM.map(function(p){
  return '<article><span class="ln3" aria-hidden="true"></span><h3>'+esc(p[0])+'</h3><p class="ttl">'+esc(p[1])+'</p><p class="sm">'+esc(p[2])+'</p>'+
   '<details><summary>Background</summary><p>'+esc(p[3])+'</p></details></article>'}).join("")+'</div>'}
function ico(n){var I={
  vault:'<rect x="6" y="10" width="52" height="44"/><circle cx="32" cy="32" r="12"/><path class="a" d="M32 20v24M20 32h24"/><path d="M12 54v4M52 54v4"/>',
  door:'<path d="M14 58V24h36v34"/><path class="a" d="M22 58V36a10 10 0 0 1 20 0v22"/><path d="M8 58h48M10 24L32 8l22 16"/>',
  scale:'<path d="M32 8v48M18 56h28"/><path class="a" d="M10 18h44"/><path d="M10 18L4 36h12zM54 18l-6 18h12z"/><path d="M4 36a6 4 0 0 0 12 0M48 36a6 4 0 0 0 12 0"/>'};
  return '<svg viewBox="0 0 64 64" aria-hidden="true">'+I[n]+'</svg>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Registered investment adviser<span class="nomob"> · Alexandria, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Independent advice,</span><span class="l">solely <em>client-focused.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Professional financial planning and investment management at reasonable fees, from the principals of a registered investment adviser in the Washington, D.C. metro area.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Contact us '+ARR+'</a><a class="btn" href="#/approach">How we work</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our investment philosophy</span>'+
   '<p class="txt" id="mani">Investing is a long-term proposition, driven by careful understanding of your personal goals. We do not attempt to time the market. A consistent process of review and rebalancing <em>drives the long term.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><span class="k">The year 8th Street was founded, in Virginia</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$167M</span><span class="k">Client assets managed, as of December 31, 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">None</span><span class="k">No account minimum, for investment management or planning</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with clients</span><h2 class="d3">Where do you <em>want to be?</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Goals</span><span>Allocation</span><span>Rebalance</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We start with your goals.</h2><p>Together we write an Investment Policy Statement: your goals and objectives, your time horizon and risk tolerance, and the broad strategy for meeting them.</p></article>'+
     '<article class="step"><h2>Allocation sets the course.</h2><p>Appropriate asset allocation is the basis for any investment goal. We then select individual securities by fundamental analysis, with an eye to tax and cost efficiency, using stocks, bonds, ETFs and mutual funds.</p></article>'+
     '<article class="step"><h2>Rebalanced, never timed.</h2><p>Markets fluctuate, sometimes distressingly. We do not try to time them. We monitor your portfolio continuously and rebalance it to your asset allocation guidelines.</p></article>'+
     '<article class="step"><h2>Reviewed with you, every year.</h2><p>At least once a year we sit down with you to review your circumstances, objectives and risk profile, and keep the plan pointed where you want to go.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Use one, some, <em>or all.</em></h2></div><p data-r>Our mission is professional financial planning and investment management customized to your individual needs. Choose the services that fit your needs and preferences.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Investment management</dt><dd>Customized portfolios of stocks, bonds, ETFs and mutual funds, built on your Investment Policy Statement and managed on a discretionary basis, with basic financial planning included.</dd></div>'+
    '<div><dt class="lab">Portfolio consultations</dt><dd>For do-it-yourself investors, or anyone with a current investment provider: an objective, independent review of your investment plan, on an hourly or flat fee basis.</dd></div>'+
    '<div><dt class="lab">Financial planning</dt><dd>Modular or comprehensive planning, hourly or flat fee: budgeting and cash flow, education, retirement and investment planning, and other analyses as needed.</dd></div>'+
    '<div><dt class="lab">Consulting</dt><dd>Advice on a single area of concern, such as estate or retirement planning, a review of your existing portfolio, or your employer plan, 529 plan or annuity options.</dd></div>'+
   '</dl>'+
  '</div></section>'+

  '<section class="sec dark2" data-theme="dark"><div class="wrap">'+
   '<div class="two"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d2 split">Ethical, experienced, <em>accessible.</em></h2>'+
    '<p class="muted" data-r style="margin-top:28px;max-width:40ch">Individuals and families, trusts and estates, corporations and other businesses, and charitable organizations, from our offices in Alexandria, Virginia and Hilton Head Island, South Carolina.</p></div>'+
   '<div><p class="lede" data-r style="margin-bottom:30px">8th Street may suit you if:</p><ul class="aims">'+
    '<li><span>You find financial and investment decisions intimidating or time consuming.</span></li>'+
    '<li><span>You want a financial advisor that is ethical, experienced and accessible.</span></li>'+
    '<li><span>You would rather have independent, customized advice than the impersonal service of a large financial institution.</span></li>'+
    '<li><span>You invest on your own, or with another provider, and want an objective second opinion.</span></li>'+
   '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec light" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Working with us</span><h2 class="d2 split">The principals, <em>every time.</em></h2></div><p data-r>We provide timely and accessible client service, and your assets stay with an independent, well-known custodian.</p></div>'+
   '<div class="pillars">'+
    '<div class="pl3">'+ico("door")+'<span class="lab">01 · Access</span><h3>No hand-offs</h3><p>You work with the principals of 8th Street. You won’t be shifted from salesperson to relationship manager to account administrator to an 800 number.</p></div>'+
    '<div class="pl3">'+ico("vault")+'<span class="lab">02 · Custody</span><h3>Your assets at Schwab</h3><p>Accounts are held at Charles Schwab &amp; Co., where you can see your own account at any time, day or night, with a dedicated Schwab Alliance team.</p></div>'+
    '<div class="pl3">'+ico("scale")+'<span class="lab">03 · Fees</span><h3>Reasonable, and clear</h3><p>Investment management is an asset-based fee, billed quarterly in arrears. Planning and consulting are fixed or hourly. No wrap-fee programs.</p></div>'+
   '</div></div></section>'+

  '<section class="sec dark" id="s-team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Your 8th Street team</span><h2 class="d2 split">Two principals, <em>since 2008.</em></h2></div><p data-r>Both principals came to 8th Street from U.S. Trust Company, and own the firm together.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="s-insights" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Disclosures</span><h2 class="d3 split">Read before <em>you decide.</em></h2></div><p data-r>Our Client Relationship Summary is an important summary of our services, fees and obligations.</p></div>'+docRows(DOCS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact · by appointment</span>'+
   '<h2 class="big split">Interested? Have some <em>questions?</em></h2>'+
   '<p class="sub" data-r>Take some time to see if you’d be comfortable at 8th Street. We meet by appointment, and we are glad to talk first.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Main office</span><h3>Alexandria, Virginia</h3><p>8th Street Investments, LLC<br>1800 Diagonal Road, Suite 600<br>Alexandria, VA 22314</p></div>'+
    '<div class="offs" data-r><div><span class="lab">Office</span><b><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></b></div><div><span class="lab">Email</span><b><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></b></div>'+
     '<div><span class="lab">Branch office</span><b>22 New Orleans Road, Suite 3, Hilton Head Island, SC</b></div><div><span class="lab">Fax</span><b>'+FAX+'</b></div>'+
     '<div><span class="lab">Disclosures</span><b class="em"><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a> · <a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a> · <a class="ul" href="'+PRIV+'" target="_blank" rel="noopener">Privacy</a></b></div></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Main office</span>1800 Diagonal Road, Suite 600<br>Alexandria, VA 22314</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/disclosures">Disclosures</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+PRIV+'" target="_blank" rel="noopener">Privacy policy</a><br><a class="ul" href="'+IAPD+'" target="_blank" rel="noopener">SEC adviser disclosure</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="48" text-anchor="middle" style="font-family:Newsreader,Georgia,serif;font-weight:400;font-size:60px;letter-spacing:-.01em">8th Street</text></svg>'+
  '<p class="disc">8th Street Investments, LLC is an investment adviser registered with the SEC. Registration does not imply a certain level of skill or training. Investing involves risk, including the risk of loss.</p>'+
  '<div class="legal"><span class="lab">© 2026 8th Street Investments, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){return {k:"home",v:vHome,t:"''' + TITLE + '''",x:"Home"}}''')

# ---------------- hero field: Federal rowhouses at dusk ----------------
reg('field', r'''/* ================= HERO FIELD: a row of Federal brick townhouses at dusk, like the three-bay house in
   8th Street's own logo (Old Town Alexandria). Cornices, dormers and chimneys against a deep green evening sky with a
   last gold glow on the horizon; gas lamps on the brick sidewalk; windows light up one by one. It moves on its own
   (lights come on, lamps flicker, thin cloud drifts) with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oRow=null,WIN=[],LAMPS=[],CLOUDS=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function mix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
  function rgb(a,al){return "rgba("+(a[0]|0)+","+(a[1]|0)+","+(a[2]|0)+","+(al==null?1:al)+")"}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var S=mob?h*.4:h,gy=mob?S-46:h*.87,H=mob?Math.max(120,gy-78):Math.min(h*.6,w*.4),x0=mob?-H*.12:side+cw*.55;
    return {mob:mob,side:side,cw:cw,S:S,gy:gy,H:H,x0:x0,sw:H*.045};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  var TONES=[[44,58,48],[58,56,50],[104,98,82],[36,52,44],[70,84,70],[62,60,54],[96,92,80]],TRIM=[214,206,184],GLASS=[14,26,25],WARM=[238,190,108],DOORS=[[27,87,51],[18,26,22],[27,87,51],[70,40,30]];
  function house(g,x,bw,hh,R){
    var gy=G.gy,H=G.H,lw=Math.max(.6,H/640),roofH=hh*.14,fy=gy-hh+roofH,cor=hh*.03,wt=hh*.07,tone=TONES[(R()*TONES.length)|0],bays=bw>H*.5?3:2,nf=hh<H*.86?2:3,painted=tone[0]>90;
    var facH=gy-wt-(fy+cor),fl=nf===3?[.38,.34,.28]:[.52,.48],flY=nf===3?[gy-wt-facH*fl[0],gy-wt-facH*(fl[0]+fl[1]),fy+cor]:[gy-wt-facH*fl[0],fy+cor,fy+cor];
    /* chimneys on the party walls, then the slate roof band with dormers */
    g.fillStyle=rgb(mix(tone,[10,16,14],.35));
    [x+bw*.04,x+bw*.86].forEach(function(cx){g.fillRect(cx,fy-roofH-hh*.06,bw*.1,hh*.07+roofH*.4);g.fillRect(cx-bw*.012,fy-roofH-hh*.065,bw*.124,hh*.012)});
    var rg=g.createLinearGradient(0,fy-roofH,0,fy);rg.addColorStop(0,"#18231f");rg.addColorStop(1,"#2a3833");g.fillStyle=rg;
    g.beginPath();g.moveTo(x+bw*.02,fy);g.lineTo(x+bw*.05,fy-roofH);g.lineTo(x+bw*.95,fy-roofH);g.lineTo(x+bw*.98,fy);g.closePath();g.fill();
    g.strokeStyle="rgba(200,210,200,.06)";g.lineWidth=lw*.8;for(var sy=fy-roofH+4;sy<fy;sy+=Math.max(2.4,hh*.012)){g.beginPath();g.moveTo(x+bw*.04,sy);g.lineTo(x+bw*.96,sy);g.stroke()}
    var nd=bays===3?2:1;for(var d=0;d<nd;d++){var dx=x+bw*(nd===2?(.3+.4*d):.5),dw=bw*.13,dh=roofH*.78,dy=fy-dh*.62;
      g.fillStyle=rgb(mix(TRIM,tone,.55));g.fillRect(dx-dw/2,dy,dw,dh*.62);
      g.beginPath();g.moveTo(dx-dw*.62,dy);g.lineTo(dx,dy-dh*.42);g.lineTo(dx+dw*.62,dy);g.closePath();g.fill();
      win(g,dx-dw*.3,dy+dh*.08,dw*.6,dh*.48,lw,R,2,false,true)}
    /* brick facade with fine coursing */
    var fg=g.createLinearGradient(0,fy,0,gy);fg.addColorStop(0,rgb(mix(tone,[90,96,84],.12)));fg.addColorStop(1,rgb(mix(tone,[6,12,10],.25)));
    g.fillStyle=fg;g.fillRect(x,fy,bw,gy-fy);
    var cs=Math.max(2.2,H*.0065);g.fillStyle=painted?"rgba(0,0,0,.04)":"rgba(0,0,0,.13)";for(var by=fy+cor;by<gy-wt;by+=cs){g.fillRect(x,by,bw,Math.max(.5,lw*.5));
      var off=((by/cs)|0)%2?cs*1.1:0;for(var bx=x+off;bx<x+bw;bx+=cs*2.2)if(R()<.5)g.fillRect(bx,by,Math.max(.5,lw*.5),cs)}
    g.fillStyle="rgba(255,240,210,.035)";for(var k=0;k<bw*hh/90;k++)g.fillRect(x+R()*bw,fy+R()*(gy-fy),cs*1.8,cs*.8);
    /* party-wall shadow and cornice with dentils */
    g.fillStyle="rgba(0,0,0,.28)";g.fillRect(x,fy,Math.max(1,bw*.012),gy-fy);
    g.fillStyle=rgb(mix(TRIM,tone,.32));g.fillRect(x-bw*.01,fy-cor*.35,bw*1.02,cor*.75);g.fillRect(x,fy+cor*.4,bw,cor*.3);
    g.fillStyle=rgb(mix(TRIM,tone,.55));for(var dn=x+bw*.01;dn<x+bw;dn+=Math.max(3,bw*.022))g.fillRect(dn,fy+cor*.4,Math.max(1.2,bw*.011),cor*.45);
    g.fillStyle="rgba(0,0,0,.25)";g.fillRect(x,fy+cor*.85,bw,cor*.25);
    /* stone water table and basement */
    g.fillStyle=rgb(mix(TRIM,tone,.6));g.fillRect(x,gy-wt,bw,wt*.18);
    g.fillStyle=rgb(mix(tone,[60,58,50],.3));g.fillRect(x,gy-wt+wt*.18,bw,wt*.82);
    var door=bays===3?((R()<.5)?0:2):0,ww=bw/bays*.4;
    for(var b=0;b<bays;b++){var cx=x+bw*(b+.5)/bays;
      /* upper floors */
      for(var f=1;f<nf;f++){var top=flY[f],fh=(f===1?flY[0]-flY[1]:flY[1]-(fy+cor)),wh=Math.min(fh*.66,ww*(f===1?1.95:1.55)),wy=top+(fh-wh)*.55;win(g,cx-ww/2,wy,ww,wh,lw,R,f===1?6:6,tone.shutter,false,tone)}
      if(b===door){doorway(g,cx,ww,flY[0],gy-wt,lw,R,tone)}
      else{var fh0=gy-wt-flY[0],wh0=Math.min(fh0*.66,ww*1.8),wy0=flY[0]+(fh0-wh0)*.45;win(g,cx-ww/2,wy0,ww,wh0,lw,R,6,false,false,tone);
        g.fillStyle="#0d1512";g.fillRect(cx-ww*.35,gy-wt*.72,ww*.7,wt*.42);g.strokeStyle=rgb(mix(TRIM,tone,.6),.5);g.lineWidth=lw*.7;for(var gb=1;gb<5;gb++){g.beginPath();g.moveTo(cx-ww*.35+ww*.14*gb,gy-wt*.72);g.lineTo(cx-ww*.35+ww*.14*gb,gy-wt*.3);g.stroke()}}
    }
  }
  /* a 6-over-6 sash: the glass is cut out of the facade (lit later, per frame), then lintel, sill, frame and muntins */
  function win(g,x,y,ww,wh,lw,R,panes,shut,dormer,tone){
    var lit=R()<(dormer?.35:.5),on=.3+R()*(R()<.7?3.2:9);
    if(!dormer){g.fillStyle=rgb(mix(TRIM,[40,40,36],.12));g.beginPath();g.moveTo(x-ww*.12,y-ww*.24);g.lineTo(x+ww*1.12,y-ww*.24);g.lineTo(x+ww*1.04,y-ww*.02);g.lineTo(x-ww*.04,y-ww*.02);g.closePath();g.fill();
      g.fillStyle="rgba(0,0,0,.25)";g.fillRect(x-ww*.04,y-ww*.02,ww*1.08,ww*.035);
      g.fillStyle=rgb(mix(TRIM,[40,40,36],.2));g.fillRect(x-ww*.08,y+wh,ww*1.16,ww*.07);
      if(R()<.55){var sc=[22,58,38];g.fillStyle=rgb(mix(sc,[0,0,0],.25));g.fillRect(x-ww*.52,y,ww*.46,wh);g.fillRect(x+ww*1.06,y,ww*.46,wh);
        g.fillStyle="rgba(0,0,0,.28)";for(var sl=y+wh*.04;sl<y+wh;sl+=Math.max(2,wh*.035)){g.fillRect(x-ww*.48,sl,ww*.38,Math.max(.5,lw*.5));g.fillRect(x+ww*1.1,sl,ww*.38,Math.max(.5,lw*.5))}}}
    g.save();g.globalCompositeOperation="destination-out";g.fillRect(x,y,ww,wh);g.restore();
    WIN.push({t:"r",x:x,y:y,w:ww,h:wh,lit:lit,on:on,k:.85+R()*.3,cur:R()<.5});
    g.strokeStyle=rgb(TRIM,.85);g.lineWidth=Math.max(1,lw*1.3);g.strokeRect(x,y,ww,wh);
    g.lineWidth=Math.max(.5,lw*.55);g.strokeStyle=rgb(TRIM,.5);g.beginPath();
    var cols=dormer?2:3,rows=dormer?2:4;for(var i=1;i<cols;i++){g.moveTo(x+ww*i/cols,y);g.lineTo(x+ww*i/cols,y+wh)}
    for(var j=1;j<rows;j++){g.moveTo(x,y+wh*j/rows);g.lineTo(x+ww,y+wh*j/rows)}g.stroke();
    if(!dormer){g.lineWidth=Math.max(.9,lw*1.2);g.strokeStyle=rgb(TRIM,.7);g.beginPath();g.moveTo(x,y+wh/2);g.lineTo(x+ww,y+wh/2);g.stroke()}
  }
  /* the front door: pilasters, a fanlight with radiating muntins, a six-panel door and a stoop with iron rails */
  function doorway(g,cx,ww,top,base,lw,R,tone){
    var dw=ww*1.05,dh=(base-top)*.62,dy=base-dh-(base-top)*.04,r=dw/2,col=DOORS[(R()*DOORS.length)|0];
    g.fillStyle=rgb(mix(TRIM,[40,40,36],.1));g.fillRect(cx-dw*.78,dy-r-dw*.12,dw*1.56,dh+r+dw*.12);
    g.fillStyle=rgb(mix(tone,[0,0,0],.2));g.beginPath();g.rect(cx-dw/2,dy,dw,dh);g.arc(cx,dy,r,Math.PI,0);g.fill();
    g.save();g.globalCompositeOperation="destination-out";g.beginPath();g.moveTo(cx-r*.92,dy);g.arc(cx,dy,r*.92,Math.PI,0);g.closePath();g.fill();g.restore();
    WIN.push({t:"a",x:cx,y:dy,r:r*.92,lit:R()<.75,on:.4+R()*4,k:1});
    g.strokeStyle=rgb(TRIM,.9);g.lineWidth=Math.max(.7,lw);g.beginPath();for(var s=0;s<=6;s++){var a=Math.PI+Math.PI*s/6;g.moveTo(cx,dy);g.lineTo(cx+Math.cos(a)*r*.92,dy+Math.sin(a)*r*.92)}g.stroke();
    g.beginPath();g.arc(cx,dy,r*.22,Math.PI,0);g.stroke();g.beginPath();g.arc(cx,dy,r*.92,Math.PI,0);g.lineWidth=Math.max(1,lw*1.5);g.stroke();
    var dg=g.createLinearGradient(0,dy,0,dy+dh);dg.addColorStop(0,rgb(mix(col,[255,240,200],.06)));dg.addColorStop(1,rgb(mix(col,[0,0,0],.3)));g.fillStyle=dg;g.fillRect(cx-dw*.44,dy+dw*.03,dw*.88,dh-dw*.03);
    g.strokeStyle="rgba(0,0,0,.35)";g.lineWidth=Math.max(.6,lw*.8);[[.08,.3],[.36,.3],[.68,.26]].forEach(function(p){g.strokeRect(cx-dw*.36,dy+dh*p[0],dw*.3,dh*p[1]);g.strokeRect(cx+dw*.06,dy+dh*p[0],dw*.3,dh*p[1])});
    g.fillStyle=rgb([210,173,79]);g.beginPath();g.arc(cx+dw*.3,dy+dh*.55,Math.max(1,dw*.03),0,Math.PI*2);g.fill();
    /* stoop: three steps down to the sidewalk, iron rails */
    var st=G.gy-base+dh*0,n=3,sh=(G.gy-(dy+dh))/n;
    for(var i=0;i<n;i++){var sw=dw*(1.3+i*.22);g.fillStyle=rgb(mix(TRIM,[30,30,28],.38+i*.06));g.fillRect(cx-sw/2,dy+dh+sh*i,sw,sh*.82);g.fillStyle="rgba(0,0,0,.3)";g.fillRect(cx-sw/2,dy+dh+sh*i+sh*.82,sw,sh*.18)}
    g.strokeStyle="#0a0f0d";g.lineWidth=Math.max(.8,lw*1.1);var ry=dy+dh-dw*.42;
    [-1,1].forEach(function(sg){var ax=cx+sg*dw*.62,bx=cx+sg*dw*.95;g.beginPath();g.moveTo(ax,ry);g.lineTo(bx,G.gy-dw*.42);g.moveTo(ax,ry);g.lineTo(ax,dy+dh);g.moveTo(bx,G.gy-dw*.42);g.lineTo(bx,G.gy);
      for(var q=1;q<5;q++){var px=ax+(bx-ax)*q/5,py=ry+(G.gy-dw*.42-ry)*q/5;g.moveTo(px,py);g.lineTo(px,py+dw*.42)}g.stroke()});
  }
  function lamp(g,x,lw){var gy=G.gy+G.sw*.4,ph=G.H*.44,top=gy-ph,lw2=Math.max(1.4,G.H*.006),lh=G.H*.06,lwid=G.H*.034;
    g.fillStyle="#0a100e";g.fillRect(x-lw2*1.6,gy-G.H*.03,lw2*3.2,G.H*.03);g.fillRect(x-lw2/2,top+lh,lw2,ph-lh);
    g.fillRect(x-lwid*.38,top+lh*.94,lwid*.76,lh*.12);
    g.beginPath();g.moveTo(x-lwid*.62,top+lh*.18);g.lineTo(x+lwid*.62,top+lh*.18);g.lineTo(x,top-lh*.22);g.closePath();g.fill();
    g.save();g.globalCompositeOperation="destination-out";g.beginPath();g.moveTo(x-lwid*.5,top+lh*.22);g.lineTo(x+lwid*.5,top+lh*.22);g.lineTo(x+lwid*.32,top+lh*.92);g.lineTo(x-lwid*.32,top+lh*.92);g.closePath();g.fill();g.restore();
    g.strokeStyle="#0a100e";g.lineWidth=Math.max(.8,lw);g.beginPath();g.moveTo(x-lwid*.5,top+lh*.22);g.lineTo(x-lwid*.32,top+lh*.92);g.moveTo(x+lwid*.5,top+lh*.22);g.lineTo(x+lwid*.32,top+lh*.92);g.moveTo(x,top+lh*.22);g.lineTo(x,top+lh*.92);g.stroke();
    LAMPS.push({x:x,y:top+lh*.55,w:lwid,h:lh,p:Math.random()*6.28})}
  function build(){
    var S=G.S,gy=G.gy,H=G.H;WIN=[];LAMPS=[];
    var A=mk(S+2),g=A[1];oSky=A[0];
    /* evening sky: deep green-black overhead to a last gold glow along the roofline */
    var sky=g.createLinearGradient(0,0,0,gy);
    sky.addColorStop(0,"#06130d");sky.addColorStop(.35,"#0d2219");sky.addColorStop(.62,"#1d3a2f");sky.addColorStop(.8,"#4a5a45");sky.addColorStop(.92,"#9d8a52");sky.addColorStop(1,"#c7a45a");
    g.fillStyle=sky;g.fillRect(0,0,w,S+2);
    var hx=G.mob?w*.6:G.x0+(w-G.x0)*.55,hy=gy-G.H*.8,gl=g.createRadialGradient(hx,hy,0,hx,hy,Math.max(w,S)*.6);gl.addColorStop(0,"rgba(232,190,104,.42)");gl.addColorStop(.35,"rgba(200,160,88,.14)");gl.addColorStop(1,"rgba(200,160,88,0)");
    g.fillStyle=gl;g.fillRect(0,0,w,S+2);
    var Rs=rng(11);g.fillStyle="rgba(244,241,230,.7)";for(var k=0;k<(G.mob?40:120);k++){var sx=Rs()*w,sy=Rs()*gy*.55,sr=Rs()<.1?1.3:.7;g.globalAlpha=.25+Rs()*.6*(1-sy/(gy*.55));g.beginPath();g.arc(sx,sy,sr,0,6.29);g.fill()}g.globalAlpha=1;
    /* the row: houses side by side across the whole width (the left ones dim under the text scrim) */
    var B=mk(S+2),l=B[1];oRow=B[0];var R=rng(1808),x=G.x0,list=[];
    while(x>-H){var bw0=H*(.52+R()*.1);x-=bw0;list.unshift([x,bw0])}
    x=G.x0;while(x<w+H*.1){var bw1=H*(.52+R()*.1);list.push([x,bw1]);x+=bw1}
    list.forEach(function(it,i){var Rh=rng(7919*(i+3)+101);Rh();Rh();var hh=H*(.76+Rh()*.24);house(l,it[0],it[1],hh,Rh)});
    /* brick sidewalk, granite curb, the street */
    var sw=G.sw;l.fillStyle="#2a2a22";l.fillRect(0,gy,w,sw);l.fillStyle="rgba(0,0,0,.25)";for(var by=gy;by<gy+sw;by+=Math.max(2,sw/6))l.fillRect(0,by,w,.6);
    l.fillStyle="#8d8a78";l.fillRect(0,gy+sw,w,Math.max(1.5,sw*.14));
    var rd=l.createLinearGradient(0,gy+sw,0,S);rd.addColorStop(0,"#121a16");rd.addColorStop(1,"#0c2118");l.fillStyle=rd;l.fillRect(0,gy+sw*1.14,w,S-gy);
    var lw=Math.max(.6,H/640);list.forEach(function(it,i){if(i%2===1)lamp(l,it[0]+it[1]*.02,lw)});
    CLOUDS=[];var Rc=rng(23);for(var m=0;m<(G.mob?4:7);m++)CLOUDS.push([Rc(),gy*(.12+Rc()*.42),.5+Rc()*.5,Rc()]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?30:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var S=G.S,gy=G.gy;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* thin evening cloud, lit gold from below near the horizon */
    for(var k=0;k<CLOUDS.length;k++){var C=CLOUDS[k],cw=w*(.18+.2*C[2]),cx=((C[0]*(w+cw*2)+t*(3+4*C[2]))%(w+cw*2))-cw,cy=C[1],lo=cy/gy,a=.05+.08*lo;
      c.save();c.translate(cx,cy);c.scale(1,(S*.012+S*.01*C[3])/cw);var cg=c.createRadialGradient(0,0,0,0,0,cw);cg.addColorStop(0,"rgba("+(lo>.4?"214,180,110":"120,140,124")+","+a.toFixed(3)+")");cg.addColorStop(1,"rgba(120,140,124,0)");c.fillStyle=cg;c.beginPath();c.arc(0,0,cw,0,6.29);c.fill();c.restore()}
    /* glass: dark windows hold the sky, lit ones warm up one by one */
    var lit=[];
    for(var i=0;i<WIN.length;i++){var W=WIN[i],L=W.lit?sm((t*(RM?1:1)-W.on)/1.2)*e:0,col=mix(GLASS,mix(WARM,[250,214,140],W.k-.85),L*W.k);
      c.fillStyle=rgb(col);
      if(W.t==="r"){c.fillRect(W.x-1,W.y-1,W.w+2,W.h+2);if(L>0){if(W.cur){c.fillStyle="rgba(120,70,20,"+(.35*L).toFixed(3)+")";c.fillRect(W.x,W.y,W.w,W.h*.16)}lit.push([W.x+W.w/2,W.y+W.h/2,Math.max(W.w,W.h)*.9,L])}
        else{c.fillStyle="rgba(180,200,190,.045)";c.fillRect(W.x,W.y,W.w,W.h*.45)}}
      else{c.beginPath();c.arc(W.x,W.y+1,W.r+1,Math.PI,0);c.closePath();c.fill();if(L>0)lit.push([W.x,W.y-W.r*.4,W.r*1.6,L])}}
    for(var q=0;q<LAMPS.length;q++){var P=LAMPS[q],fl=.88+.06*Math.sin(t*7+P.p)+.05*Math.sin(t*13.3+P.p*2);c.fillStyle="rgba(255,222,150,"+(fl*e).toFixed(3)+")";c.fillRect(P.x-P.w*.5,P.y-P.h*.4,P.w,P.h*.8)}
    c.setTransform(1,0,0,1,0,0);c.drawImage(oRow,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the warm spill of light: lit rooms and the gas lamps on the brick */
    c.globalCompositeOperation="lighter";
    for(var j=0;j<lit.length;j++){var Li=lit[j],rg=c.createRadialGradient(Li[0],Li[1],0,Li[0],Li[1],Li[2]);rg.addColorStop(0,"rgba(240,190,100,"+(.12*Li[3]).toFixed(3)+")");rg.addColorStop(1,"rgba(240,190,100,0)");c.fillStyle=rg;c.fillRect(Li[0]-Li[2],Li[1]-Li[2],Li[2]*2,Li[2]*2)}
    for(var q2=0;q2<LAMPS.length;q2++){var P2=LAMPS[q2],fl2=.85+.08*Math.sin(t*7+P2.p)+.06*Math.sin(t*13.3+P2.p*2),R2=G.H*.42,lg=c.createRadialGradient(P2.x,P2.y,0,P2.x,P2.y,R2);
      lg.addColorStop(0,"rgba(255,210,130,"+(.6*fl2*e).toFixed(3)+")");lg.addColorStop(.25,"rgba(240,180,90,"+(.2*fl2*e).toFixed(3)+")");lg.addColorStop(1,"rgba(240,180,90,0)");c.fillStyle=lg;c.fillRect(P2.x-R2,P2.y-R2,R2*2,R2*2);
      var rr=c.createLinearGradient(0,gy+G.sw,0,Math.min(S,gy+G.sw+G.H*.25));rr.addColorStop(0,"rgba(240,190,100,"+(.12*fl2*e).toFixed(3)+")");rr.addColorStop(1,"rgba(240,190,100,0)");c.fillStyle=rr;c.fillRect(P2.x-G.H*.015,gy+G.sw*1.2,G.H*.03,G.H*.25)}
    c.globalCompositeOperation="source-over";
    /* text side: the row recedes into evening dark so the copy reads cleanly */
    if(!G.mob){var sc=c.createLinearGradient(0,0,G.x0+G.H*.15,0);sc.addColorStop(0,"rgba(12,33,24,.9)");sc.addColorStop(.62,"rgba(12,33,24,.72)");sc.addColorStop(1,"rgba(12,33,24,0)");c.fillStyle=sc;c.fillRect(0,0,G.x0+G.H*.15,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.x0+(w-G.x0)*.5,G.gy-G.H*.45]:[w/2,h/2]}};
})();''')

# ---------------- story: a nautical chart in fine line ----------------
reg('story', r'''/* the story scene, from 8th Street's own "Where do you want to be? We want to help you get there." ONE engraved chart,
   kept on screen. Step 1 the plan: today, your goals and the Investment Policy Statement in the cartouche. Step 2 the
   course is drawn: the asset allocation. Step 3 the track drifts with the markets and is brought back: rebalancing.
   Step 4 review fixes along the course, and the goal is in sight. */
function lab(id,txt,x,y,side,to){var anc=side==="s"?"start":side==="e"?"end":"middle",L=txt.split("|"),lx=side==="s"?x-8:side==="e"?x+8:x,ly=side==="m"?y+8:y-5;
  var ld=to?'<path class="ld" d="M'+lx.toFixed(1)+' '+ly.toFixed(1)+'L'+to[0].toFixed(1)+' '+to[1].toFixed(1)+'"/><circle class="dt" cx="'+to[0].toFixed(1)+'" cy="'+to[1].toFixed(1)+'" r="3"/>':'';
  return '<g class="lb" id="'+id+'">'+ld+'<text x="'+x+'" y="'+y+'" text-anchor="'+anc+'" class="w">'+L.map(function(s,i){return '<tspan x="'+x+'" dy="'+(i?'1.3em':'0')+'">'+s+'</tspan>'}).join("")+'</text></g>'}
function rose(cx,cy,r){var o='<g class="rose"><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'"/><circle cx="'+cx+'" cy="'+cy+'" r="'+(r*.86)+'"/><circle class="fa" cx="'+cx+'" cy="'+cy+'" r="'+(r*.3)+'"/>';
  for(var k=0;k<72;k++){var a=k*Math.PI/36,r1=r*(k%9===0?.78:.82);o+='<path class="tk" d="M'+(cx+Math.cos(a)*r1).toFixed(1)+' '+(cy+Math.sin(a)*r1).toFixed(1)+'L'+(cx+Math.cos(a)*r*.86).toFixed(1)+' '+(cy+Math.sin(a)*r*.86).toFixed(1)+'"/>'}
  for(var p=0;p<8;p++){var a2=p*Math.PI/4-Math.PI/2,L=p%2?r*.5:r*.76,s=r*.09,ax=Math.cos(a2),ay=Math.sin(a2),nx=-ay,ny=ax;
    o+='<path class="'+(p%2?'pt':'pt m')+'" d="M'+cx+' '+cy+'L'+(cx+nx*s).toFixed(1)+' '+(cy+ny*s).toFixed(1)+'L'+(cx+ax*L).toFixed(1)+' '+(cy+ay*L).toFixed(1)+'L'+(cx-nx*s).toFixed(1)+' '+(cy-ny*s).toFixed(1)+'Z"/>'}
  return o+'<text class="n" x="'+cx+'" y="'+(cy-r-8)+'" text-anchor="middle">N</text></g>'}
function scene(){
  var mob=MOBILE(),o='<svg'+(mob?' class="mob"':'')+' viewBox="0 0 800 560" aria-hidden="true"><defs><pattern id="ht" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V5" stroke="rgba(244,241,230,.2)" stroke-width="1"/></pattern>'+
   '<clipPath id="chc"><rect x="28" y="28" width="744" height="504"/></clipPath></defs>';
  /* neatline with graduated border, meridians and parallels */
  o+='<g id="scCh"><rect class="nl1" x="20" y="20" width="760" height="520"/><rect class="nl2" x="28" y="28" width="744" height="504"/>';
  for(var gx=28+31;gx<772;gx+=31)o+='<path class="tk" d="M'+gx+' 20v'+(gx%62===59?8:4)+'M'+gx+' 540v-'+(gx%62===59?8:4)+'"/>';
  for(var gy=28+28;gy<532;gy+=28)o+='<path class="tk" d="M20 '+gy+'h'+(gy%56===0?8:4)+'M780 '+gy+'h-'+(gy%56===0?8:4)+'"/>';
  o+='<path class="grd" d="M214 28V532M400 28V532M586 28V532M28 154H772M28 280H772M28 406H772"/>';
  /* land: a hatched coast top-left with depth contours, an island mid-course */
  var COAST='M28 28H312C300 58 262 72 248 100C232 132 196 142 164 170C132 198 92 196 62 230C48 246 38 252 28 254Z',ISL='M480 392C490 368 536 362 556 376C578 390 570 422 544 428C516 434 474 418 480 392Z';
  o+='<g clip-path="url(#chc)"><path class="dp" d="'+COAST+'" transform="translate(16 18)"/><path class="dp d2" d="'+COAST+'" transform="translate(36 40)"/>'+
   '<path class="dp" d="'+ISL+'" transform="translate(-18 -14) scale(1.04)"/><path class="dp d2" d="M454 384C462 346 540 336 576 360C606 382 596 438 548 446C504 454 444 424 454 384Z"/>'+
   '<path class="land" d="'+COAST+'"/><path class="land" d="'+ISL+'"/></g>';
  /* portolan rhumb lines radiating from the compass rose across the whole chart */
  var rh='';for(var k=0;k<32;k++){var an=k*Math.PI/16;rh+='M676 438L'+(676+Math.cos(an)*1100).toFixed(0)+' '+(438+Math.sin(an)*1100).toFixed(0)}
  o+='<path class="rh" clip-path="url(#chc)" d="'+rh+'"/>';
  /* soundings: small depth dots along the channel, and a scale bar */
  var Rd=[[150,300],[190,330],[262,280],[300,232],[352,196],[420,170],[468,140],[520,118],[392,268],[640,300],[700,250],[580,470],[420,470],[330,500],[250,380],[540,190],[760,180],[600,90]];
  o+=Rd.map(function(d){return '<circle class="snd" cx="'+d[0]+'" cy="'+d[1]+'" r="1.4"/>'}).join('');
  o+='<path class="tk" d="M60 512H220M60 506v12M100 509v6M140 506v12M180 509v6M220 506v12"/>';
  o+=rose(676,438,62)+'</g>';
  /* cartouche: the Investment Policy Statement */
  o+='<g id="scCt"><rect class="ct" x="44" y="46" width="196" height="104"/><rect class="ct2" x="49" y="51" width="186" height="94"/>'+
   '<text class="ctt" x="142" y="72" text-anchor="middle">INVESTMENT POLICY</text><text class="ctt" x="142" y="88" text-anchor="middle">STATEMENT</text><path class="ctl" d="M70 97H214"/>'+
   '<text class="ctr" x="62" y="114">GOALS</text><path class="dl" d="M108 112H222"/><text class="ctr" x="62" y="128">TIME HORIZON</text><path class="dl" d="M150 126H222"/><text class="ctr" x="62" y="142">RISK TOLERANCE</text><path class="dl" d="M162 140H222"/></g>';
  /* today, the goal, the course, the drift and the review fixes */
  var A=[110,470],B=[330,400],C=[600,230],D=[690,112];
  o+='<g id="scA"><circle class="pos" cx="'+A[0]+'" cy="'+A[1]+'" r="7"/><circle class="dt" cx="'+A[0]+'" cy="'+A[1]+'" r="2.6"/></g>';
  o+='<g id="scD"><circle class="gl" cx="'+D[0]+'" cy="'+D[1]+'" r="22"/><circle class="pos g" cx="'+D[0]+'" cy="'+D[1]+'" r="11"/><path class="star" d="M690 101L693 109L701 112L693 115L690 123L687 115L679 112L687 109Z"/></g>';
  o+='<path class="crs" id="scCo" d="M'+A+'L'+B+'L'+C+'L'+(D[0]-7)+' '+(D[1]+9)+'"/>';
  o+='<path class="drf" id="scDr" d="M357 383C392 404 420 404 440 388C462 370 452 354 470 340C484 330 490 306 497 295"/>';
  o+='<path class="arw" id="scAr" d="M470 340L497 296M489 300L497 295L496 305"/>';
  var F=[[220,435],[546,264],[645,171]];
  o+='<g id="scF">'+F.map(function(p){return '<g class="fx"><circle cx="'+p[0]+'" cy="'+p[1]+'" r="8"/><path d="M'+(p[0]-13)+' '+p[1]+'H'+(p[0]+13)+'M'+p[0]+' '+(p[1]-13)+'V'+(p[1]+13)+'"/></g>'}).join("")+'</g>';
  if(mob){
    o+=lab("lA","TODAY",110,510,"m",null)+lab("lD","YOUR GOALS",690,76,"m",null);
    o+=lab("l2a","ASSET ALLOCATION",96,372,"s",null);
    o+=lab("l3a","MARKET FLUCTUATIONS",400,516,"m",null)+lab("l3b","REBALANCED",540,320,"s",null);
    o+=lab("l4a","ANNUAL REVIEW",500,320,"s",null);
  }else{
    o+=lab("lA","TODAY",110,506,"m",null)+lab("lD","YOUR GOALS",690,78,"m",null);
    o+=lab("l2a","ASSET ALLOCATION",96,372,"s",[214,437])+lab("l2b","STOCKS · BONDS · ETFS · FUNDS",420,226,"e",[458,317]);
    o+=lab("l3a","MARKET FLUCTUATIONS",300,512,"m",[424,398])+lab("l3b","REBALANCED TO|YOUR ALLOCATION",590,316,"s",[498,297]);
    o+=lab("l4a","ANNUAL REVIEW",590,316,"s",[552,262])+lab("l4b","AT LEAST ONCE A YEAR",290,300,"e",[226,430]);
  }
  return o+'</svg>';
}
function storyDraw(svg){
  var q=function(s){return $(s,svg)},qq=function(s){return $$(s,svg)};
  var E={ch:q("#scCh"),ct:q("#scCt"),a:q("#scA"),d:q("#scD"),co:q("#scCo"),dr:q("#scDr"),ar:q("#scAr"),fx:qq("#scF .fx"),
    l0:qq("#lA,#lD"),l2:qq("#l2a,#l2b"),l3:qq("#l3a,#l3b"),l4:qq("#l4a,#l4b")};
  var CL=E.co.getTotalLength(),DL=E.dr.getTotalLength();
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!E.co.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.42),s3=seg(p,.52,.66),s4=seg(p,.77,.92);
    E.ch.style.opacity=(b*(.6+.4*s1)).toFixed(3);
    E.ct.style.opacity=(b*(.25+.75*s1)).toFixed(3);E.ct.classList.toggle("on",p<.25);
    E.a.style.opacity=b.toFixed(3);E.d.style.opacity=(b*(.4+.6*s1)).toFixed(3);E.d.classList.toggle("on",s4>.5);
    show(E.l0,b*s1);
    show(E.l2,b*s2*(1-seg(p,.46,.5)));show(E.l3,b*s3*(1-seg(p,.71,.75)));show(E.l4,b*s4);
    E.co.style.strokeDasharray=CL+" "+CL;E.co.style.strokeDashoffset=(CL*(1-s2)).toFixed(1);E.co.style.opacity=b.toFixed(3);
    E.dr.style.strokeDasharray=DL+" "+DL;E.dr.style.strokeDashoffset=(DL*(1-s3)).toFixed(1);E.dr.style.opacity=(b*(s3>0?1:0)*(1-.6*s4)).toFixed(3);
    E.ar.style.opacity=(b*seg(p,.6,.66)*(1-.6*s4)).toFixed(3);
    E.fx.forEach(function(f,k){var qx=seg(s4,k*.18,.5+k*.18);f.style.opacity=(b*qx).toFixed(3)});
  };
}''')

reg('scenecss', r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:12ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a3b2a8;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #64786c;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:400;font-size:clamp(28px,2.4vw,40px);line-height:1.1;letter-spacing:-.015em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .nl1{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.4}
.scene .nl2{fill:rgba(var(--boner),.025);stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .tk{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .rh{fill:none;stroke:rgba(var(--boner),.085);stroke-width:1}
.scene .snd{fill:rgba(var(--boner),.4)}
.scene .grd{fill:none;stroke:rgba(var(--boner),.1);stroke-width:1}
.scene .land{fill:url(#ht);stroke:rgba(var(--boner),.74);stroke-width:1.3}
.scene .dp{fill:none;stroke:rgba(var(--boner),.28);stroke-width:1;stroke-dasharray:3 4}
.scene .dp.d2{stroke:rgba(var(--boner),.16)}
.scene .rose circle{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .rose .fa{fill:var(--ink2)}
.scene .rose .pt{fill:var(--ink2);stroke:rgba(var(--boner),.7);stroke-width:1}
.scene .rose .pt.m{fill:rgba(var(--boner),.14)}
.scene .rose .n{font-family:var(--disp);font-size:16px;letter-spacing:0;fill:var(--bone)}
.scene .ct,.scene .ct2{fill:var(--ink2);stroke:rgba(var(--boner),.7);stroke-width:1.2;transition:stroke .4s var(--eo)}
.scene .ct2{fill:none;stroke-width:.8;stroke:rgba(var(--boner),.4)}
.scene #scCt.on .ct{stroke:var(--accL)}
.scene .ctt{font-family:var(--disp);font-size:14px;letter-spacing:.08em;fill:var(--bone)}
.scene .ctr{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;fill:#c4cbc3}
.scene .ctl{stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .dl{stroke:rgba(var(--boner),.4);stroke-width:1;stroke-dasharray:1 3}
.scene .pos{fill:var(--ink2);stroke:var(--bone);stroke-width:1.4}
.scene .pos.g{stroke:var(--accL)}
.scene .gl{fill:rgba(var(--accr),.1);stroke:rgba(var(--accr),.5);stroke-width:1;transition:fill .5s var(--eo)}
.scene #scD.on .gl{fill:rgba(var(--accr),.28)}
.scene .star{fill:var(--accL)}
.scene .crs{fill:none;stroke:var(--accL);stroke-width:2;stroke-linejoin:round}
.scene .drf{fill:none;stroke:rgba(var(--boner),.8);stroke-width:1.3}
.scene .arw{fill:none;stroke:var(--accL);stroke-width:1.6}
.scene .fx circle{fill:var(--ink2);stroke:var(--accL);stroke-width:1.4}
.scene .fx path{stroke:var(--accL);stroke-width:1}
.scene .ld{fill:none;stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .dt{fill:var(--accL)}
.scene text{font-family:var(--mono);font-weight:500;font-size:12.5px;letter-spacing:.14em;fill:#b9c2ba}
.scene text.w{fill:var(--bone)}
.scene .lb{opacity:0}
.scene svg.mob .lb text{font-size:22px;letter-spacing:.08em}''')

# ---------------- global swaps outside regions (colours / weights) ----------------
src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(12,33,24,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a3b2a8}.rail span::before{background:var(--ink2);border-color:#64786c}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#b9c2ba}')
src = src.replace('.scene text{font-size:12px}', '.scene text{font-size:12.5px}')
src = src.replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== 8th Street: evening-green ground, warm ivory pages, the gold of their logo's "8" as the accent ===== */
.d1,.d2,.d3,.lede,.mani .txt,.cta .big,.stat .v{font-weight:400}
.hero-h{font-size:clamp(48px,5.6vw,108px);letter-spacing:-.025em;line-height:1}
.d2{letter-spacing:-.02em}.d3{letter-spacing:-.018em}.mani .txt{letter-spacing:-.015em}.cta .big{letter-spacing:-.024em}.stat .v{letter-spacing:-.02em}
.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em{font-weight:400}
.lede{line-height:1.3}
#pre .wm{font-family:var(--disp);font-weight:600;letter-spacing:.06em;color:var(--bone)}
#pre .mk path{fill:none;stroke:var(--accL)}
.hero .eyebrow{color:var(--accL)}
.ftr .bigsvg{color:var(--accL)}
.ftr .disc{position:relative;z-index:1;max-width:72ch;margin:clamp(22px,2.4vw,34px) auto 0;text-align:center;font-size:13px;color:var(--stone)}
.ftr .fcv{opacity:.24!important}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD)}
.cta .addr h3{margin-top:12px}
.cta>.wrap>.cx{grid-column:1/-1}
.cta .offs{margin-top:0;grid-template-columns:1fr 1fr}
.cta .offs>div:last-child{grid-column:1/-1}
.cta .offs b{overflow-wrap:anywhere}
.pl3 .lab{margin:0 0 12px}
/* team: two principals, refined text-only (their headshots are 96px wide), inline Background expand */
.tm{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(40px,4vw,72px) clamp(28px,5vw,96px)}
.tm article{min-width:0;position:relative;padding-top:30px}
.tm .ln3{position:absolute;left:0;right:0;top:0;height:1px;background:var(--hair)}
.tm .ln3::after{content:"";position:absolute;inset:0;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm article:hover .ln3::after{transform:scaleX(1)}
.tm h3{font-family:var(--disp);font-weight:400;font-size:clamp(30px,2.8vw,44px);line-height:1.06;letter-spacing:-.018em;margin:0 0 8px}
.tm .ttl{font-size:14.5px;color:var(--accL);margin:0 0 18px}
.tm .sm{font-size:16.5px;line-height:1.62;color:rgba(var(--boner),.86);margin:0 0 16px;max-width:46ch}
.tm details{border-top:1px solid var(--hair)}
.tm summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:14px 0;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;transition:color .3s var(--eo)}
.tm summary:hover{color:var(--accL)}
.tm summary::-webkit-details-marker{display:none}
.tm summary::after{content:"+";font-size:18px;line-height:1;color:var(--accL);transition:transform .3s var(--eo)}
.tm details[open] summary::after{transform:rotate(45deg)}
.tm details p{font-size:15px;line-height:1.62;color:var(--stone);margin:0 0 8px;max-width:58ch}
@media (max-width:760px){.tm{grid-template-columns:1fr}.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:46vh;height:46svh}.fieldbg{background:var(--ink)}
  #field{-webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 30px),transparent 40svh)!important;mask-image:linear-gradient(180deg,#000 0,#000 calc(40svh - 30px),transparent 40svh)!important}
  .hero{padding-top:calc(40svh + 6px)!important}
  .brand .bt{font-size:24px}
  .hero-h{font-size:clamp(34px,9.4vw,72px)!important}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = [m for m in re.findall(r'(?i)firelight|fort lauderdale|rick@', src)]
open(os.path.join(K, 'src', '8thstreet.src.html'), 'w', encoding='utf-8').write(src)
print('wrote src; leftovers:', len(leftover), set(leftover))
