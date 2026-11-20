#!/usr/bin/env python3
"""Assemble _kit/src/levin.src.html from the firelight engine regions (HOME-ONLY format).
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

INK = '#16151a'
reg('meta', '''<title>Levin Funding Group — True wealth management in Tucson, Arizona</title>
<meta name="description" content="Levin Funding Group is a registered investment adviser in Tucson, Arizona, helping clients build, protect and transfer their wealth through financial planning and portfolio management.">
<meta name="theme-color" content="#16151a">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2316151a'/%3E%3Crect x='30' y='14' width='26' height='36' fill='%23fcb040'/%3E%3Cpath d='M10 14v36h18' fill='none' stroke='%23f4f1ec' stroke-width='5'/%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts Newsreader:400,400i; Figtree:300,400,500*/")
reg('root', ''':root{
  --ink:#16151a;--inkr:22,21,26;--boner:245,241,234;--accr:252,176,64;--ink2:#1d1b21;--ink3:#29262d;--deep:#0f0e12;
  --bone:#f5f1ea;--bone2:#ece6dc;--bone3:#e0d8cb;
  --stone:#b4b1b4;--stoneD:#5d5a60;
  --acc:#fcb040;--accL:#fcb040;--accD:#94570a;
  --hair:rgba(245,241,234,.14);--hairD:rgba(22,21,26,.16);
  --disp:'Newsreader',Georgia,'Times New Roman',serif;
  --serif:'Newsreader',Georgia,serif;
  --sans:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#121226 0%,#2c2440 34%,#7a4651 50%,#c8703f 58%,#3a2a2a 66%,#1c1716 80%,#16151a 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:10px;height:56px;color:var(--bone)}
.brand svg.logo{width:auto;height:30px;flex:none;overflow:visible}
.brand .bt{font:300 36px 'Figtree',system-ui,sans-serif;letter-spacing:-.01em;fill:var(--bone)}
.brand .bx{fill:var(--accL)}
.brand .bf{font:400 11.5px 'Figtree',system-ui,sans-serif;letter-spacing:.04em;fill:#16151a}''')

reg('seen', '<script>try{if(sessionStorage.getItem("lfg-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M30 86V30M30 52H18V38M30 60H44V44"/></svg>
    <div class="wm"><span>LEVIN</span></div>
  </div>
  <span class="lab pl">True wealth management · Tucson, Arizona</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="Levin Funding Group, home"><svg class="logo" viewBox="0 0 168 34" aria-hidden="true"><text x="0" y="30" class="bt">LEVIN</text><rect class="bx" x="104" y="4" width="64" height="27"/><text x="109" y="16" class="bf">FUNDING</text><text x="109" y="28" class="bf">GROUP</text></svg></a>')
reg('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/solutions">Solutions</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/resources">Resources</a>
    <a class="btn" href="#/contact">Contact ''' + ARRS + '''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/approach">Approach</a></li>
    <li><a href="#/solutions">Solutions</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/resources">Resources</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Tucson, Arizona</div>
    <div><span class="lab">Phone</span><br><a href="tel:+15207512000">(520) 751-2000</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Levin Funding Group</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="Levin Funding Group";\nvar PK="lfg";')

# ---------------- content ----------------
reg('content', r'''var FONTS=['400 1em "Newsreader"','italic 400 1em "Newsreader"','300 1em "Figtree"','400 1em "Figtree"','500 1em "Figtree"'];
var TEL="+15207512000",TELT="(520) 751-2000",MAIL="kim@levinfunding.com";
var ADV="https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=1030859",CRS="https://reports.adviserinfo.sec.gov/crs/crs_170087.pdf",IAPD="https://adviserinfo.sec.gov/firm/summary/170087",LOGIN="https://wealth.emaplan.com/ema/SignIn?ema%2fria%2flevinfundinggrpllc";
var SHEETS=[],GROUPS=[];
/* [name, title, photo, summary, background] (levinfunding.com/team/*; CCO from Form ADV Part 2A, March 2026) */
var U="https://levinfunding.com/wp-content/uploads/";
var TEAM=[
 ["John D. Levin, ChFC, CLU","Managing Member",U+"2016/02/biopage_JDL.png",
  "Committed to exceptional client service since entering the financial industry in 1989. His practice focuses on business owners, professionals and high net worth individuals.",
  "John holds the CLU and ChFC designations and is a member of the Southern Arizona Estate Planning Council. Active in his community, he serves on the Tucson Medical Center Foundation board of directors."],
 ["Kimberly A. Levin","Business Manager",U+"2016/02/biopage_KAL.png",
  "More than 30 years in the financial industry. She began working alongside John servicing clients, then moved into business development.",
  "Her duties include managing employee group benefits and accounting. Kimberly makes family a priority and enjoys time with her seven grandchildren and traveling with John."],
 ["Alex Levin","Risk Management",U+"2021/03/IMG_5122-e1615401067196-600x600.jpg",
  "Specializes in risk management and retirement planning. He began his career as an intern with Northwestern Mutual in 2007 and joined Levin Risk Management in 2010.",
  "Alex attended Northern Arizona University. He serves on the El Rio Community Health Center Foundation Board and is Chairman of the Board of the American Heart Association. Securities are offered through World Equity Group, Inc., member FINRA/SIPC; Levin Funding Group and World Equity Group, Inc. are independently owned and operated."],
 ["Kimberlee Levin","Chief Compliance Officer · New Business",U+"2021/03/Headshot_Kimberlee-e1615400921263-600x600.jpg",
  "Coordinates new business for the firm, which she joined in 2010, and is studying to complete her CFP designation.",
  "Kimberlee began her career at Northwestern Mutual in 2008 after attending Northern Arizona University. She serves as Financial Assistance Coordinator for CHD Families of Tucson, a non-profit supporting families with children born with heart defects."]
];
var DOCS=[
 {d:"Form CRS",s:"Client relationship summary",t:"Form CRS: our services, fees, conflicts and conduct",u:CRS},
 {d:"Form ADV",s:"Part 2A brochure, March 2026",t:"Form ADV Part 2A: our firm brochure",u:ADV},
 {d:"Video",s:"LFG resources",t:"Goal planning: how a plan starts with what matters to you",u:"https://levinfunding.com/wp-content/uploads/2025/12/Goal-Planning_Compliance-Video.mp4"},
 {d:"Video",s:"LFG resources",t:"Life in a box: keeping your important documents in one place",u:"https://levinfunding.com/wp-content/uploads/2017/05/LifeInABox.mp4"},
 {d:"SEC",s:"Adviser public disclosure",t:"Levin Funding Group LLC on the SEC’s Investment Adviser Public Disclosure site",u:IAPD}
];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",solutions:"s-solutions",team:"s-team",resources:"s-resources",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function docRows(list){return '<ul class="rows">'+list.map(function(n){var dt=/^\d{4}-/.test(n.d)?'<time class="lab" datetime="'+n.d+'">'+fd(n.d)+'</time>':'<span class="lab">'+esc(n.d)+'</span>';
  return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm">'+dt+'<span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<div class="tm">'+TEAM.map(function(p){var ini=p[0].split(" ").map(function(x){return x[0]}).slice(0,2).join("");
  return '<article><div class="ph"><img src="'+p[2]+'" alt="'+esc(p[0].replace(/, ChFC, CLU$/,""))+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"><span class="ini" aria-hidden="true">'+ini+'</span></div>'+
   '<h3>'+esc(p[0])+'</h3><p class="ttl">'+esc(p[1])+'</p><p class="sm">'+esc(p[3])+'</p>'+
   '<details><summary>Background</summary><p>'+esc(p[4])+'</p></details></article>'}).join("")+'</div>'}
function ico(n){var I={
  page:'<path d="M14 6h28l10 10v42H14z"/><path d="M42 6v10h10"/><path class="a" d="M22 28h22M22 36h22M22 44h14"/>',
  grid:'<path d="M8 56h48"/><path d="M14 56V38h8v18M28 56V26h8v30M42 56V14h8v42"/><path class="a" d="M10 30l14-10 12 6 18-16"/>',
  vault:'<rect x="6" y="10" width="52" height="44"/><circle cx="32" cy="32" r="12"/><path class="a" d="M32 20v24M20 32h24"/><path d="M12 54v4M52 54v4"/>'};
  return '<svg viewBox="0 0 64 64" aria-hidden="true">'+I[n]+'</svg>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Registered investment adviser<span class="nomob"> · Tucson, Arizona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Build, protect</span><span class="l">and <em>transfer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Levin Funding Group offers a true wealth management experience: we start by understanding who you are and what you want to achieve, then develop a plan fit specifically to your goals.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Get in touch '+ARR+'</a><a class="btn" href="#/approach">Our process</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our focus is you</span>'+
   '<p class="txt" id="mani">We provide credibility, trust and independence. Our primary focus is understanding exactly what is important to you and your financial future, so that every plan we build is <em>customized, never cookie-cutter.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30<sup>+</sup></span><span class="k">Years of experience behind our client-centered approach to wealth management</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2014</span><span class="k">The year Levin Funding Group began providing investment advisory services</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$215M</span><span class="k">Discretionary assets under management, December 31, 2025 (Form ADV)</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with clients</span><h2 class="d3">Building your <em>financial roadmap.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Discovery</span><span>Design</span><span>Decisions</span><span>Results</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Where you are, where you want to be.</h2><p>We help you understand where you are now and where you want to be in the future, starting with an extensive review of your family situation, assets and liabilities, and estate, tax and insurance needs.</p></article>'+
     '<article class="step"><h2>A plan designed around you.</h2><p>Your goals, your time frame and your tolerance for risk shape the route. Each portfolio is set out in a written investment policy statement, customized to you.</p></article>'+
     '<article class="step"><h2>Decisions, with the whole picture.</h2><p>Our advisors look at your entire financial picture, from investments and taxes to retirement and your business, and help you make the right decisions to reach your goals.</p></article>'+
     '<article class="step"><h2>Results, reviewed regularly.</h2><p>We continuously monitor your portfolio and review your plan with you regularly, so it keeps meeting your goals as your life, cash-flow needs and the markets change.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-solutions" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solutions</span><h2 class="d2 split">Your entire <em>financial picture.</em></h2></div><p data-r>Managing your business, your taxes, your investments and your retirement can be overwhelming. We manage all of the components within your financial world, through every stage of your life.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Financial planning</dt><dd>A customized plan that reflects your time frame, your tolerance for risk and your goals, reviewed with you regularly.</dd></div>'+
    '<div><dt class="lab">Asset allocation</dt><dd>Customized portfolio construction that aligns your investments with your goals while balancing risk and reward.</dd></div>'+
    '<div><dt class="lab">Retirement planning</dt><dd>Through the accumulation phase and the distribution phase, a plan that works with your budget, lifestyle and goals.</dd></div>'+
    '<div><dt class="lab">Strategic tax planning</dt><dd>Strategies to reduce annual and estate taxes and to minimize the tax impact of your financial decisions.</dd></div>'+
    '<div><dt class="lab">Risk management</dt><dd>Plan monitoring and insurance coverage, including life, long-term care and disability, to protect your family, business and future.</dd></div>'+
    '<div><dt class="lab">Legacy and charitable planning</dt><dd>Charitable trusts, family foundations, gift annuities and bequests, and a legacy plan that expresses your values.</dd></div>'+
    '<div><dt class="lab">Business planning</dt><dd>Employee and executive benefits, succession and exit planning, and tax strategies as you launch, grow, transition or sell.</dd></div>'+
    '<div><dt class="lab">Asset protection</dt><dd>A thorough review of where your plan may leave you vulnerable, and a protection strategy developed with your legal team.</dd></div>'+
   '</dl>'+
   '<p class="note-s" data-r>Advisor Alliance: Levin Funding Group also works alongside attorneys and CPA firms across the country, collaborating with your financial and legal team to manage your entire financial world.</p>'+
  '</div></section>'+

  '<section class="sec dark2" data-theme="dark"><div class="wrap">'+
   '<div class="two"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d2 split">Clients of <em>all sizes.</em></h2>'+
    '<p class="muted" data-r style="margin-top:28px;max-width:40ch">We generally require a minimum account size of $250,000 for portfolio management, which we may waive at our discretion.</p></div>'+
   '<div><p class="lede" data-r style="margin-bottom:30px">We provide investment advisory services to:</p><ul class="aims">'+
    '<li><span>Individuals and high net worth individuals, and their families.</span></li>'+
    '<li><span>Business owners and professionals.</span></li>'+
    '<li><span>Trusts, qualified retirement plans and charitable organizations.</span></li>'+
    '<li><span>Corporations, small businesses and other business entities.</span></li>'+
   '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec light" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>How we invest</span><h2 class="d2 split">Disciplined, and <em>in one place.</em></h2></div><p data-r>We continuously monitor your portfolio holdings and overall asset allocation, and contact you at least annually to confirm your circumstances and goals.</p></div>'+
   '<div class="pillars">'+
    '<div class="pl3">'+ico("page")+'<span class="lab">01 · Policy</span><h3>A written investment policy statement</h3><p>We determine your objectives and risk profile with you, then design a written policy statement that every decision is measured against.</p></div>'+
    '<div class="pl3">'+ico("grid")+'<span class="lab">02 · Portfolios</span><h3>Passive, low-turnover building blocks</h3><p>We primarily recommend passively managed asset class and index funds, from fund families including Vanguard and Dimensional Fund Advisors.</p></div>'+
    '<div class="pl3">'+ico("vault")+'<span class="lab">03 · Technology</span><h3>Your personal financial homepage</h3><p>A secure place for your entire financial picture: daily account updates, customized reports and a vault for wills, trusts and other documents, available 24/7.</p></div>'+
   '</div></div></section>'+

  '<section class="sec dark" id="s-team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A family of <em>specialists.</em></h2></div><p data-r>Our advisors have extensive knowledge and experience in all aspects of wealth management, and help you understand the complex financial landscape around us today.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="s-resources" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Resources and disclosures</span><h2 class="d3 split">Keeping you <em>informed.</em></h2></div></div>'+docRows(DOCS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Get in touch</span>'+
   '<h2 class="big split">Your partner in <em>success.</em></h2>'+
   '<p class="sub" data-r>Work with our advisors to understand where you are now, where you want to be, and the plan that gets you there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Office</span><h3>Tucson, Arizona</h3><p>Levin Funding Group LLC<br>2200 East River Road, Suite 104<br>Tucson, AZ 85718</p></div>'+
    '<div class="offs" data-r><div><span class="lab">Phone</span><b><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></b></div><div><span class="lab">Email</span><b><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></b></div>'+
     '<div><span class="lab">Disclosures</span><b class="em"><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a> · <a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a> · <a class="ul" href="'+LOGIN+'" target="_blank" rel="noopener">Client login</a></b></div></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>2200 East River Road, Suite 104<br>Tucson, AZ 85718</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/resources">Resources</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+IAPD+'" target="_blank" rel="noopener">SEC adviser disclosure</a><br><a class="ul" href="'+LOGIN+'" target="_blank" rel="noopener">Client login</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 44" aria-hidden="true"><text x="320" y="36" text-anchor="middle" style="font-family:Figtree,system-ui,sans-serif;font-weight:300;font-size:46px;letter-spacing:.02em">LEVIN FUNDING GROUP</text></svg>'+
  '<p class="disc">Levin Funding Group LLC (“LFG”) is a registered investment adviser. LFG provides individual client services only in states in which it is filed or where an exemption or exclusion from such filing exists. Registration with the SEC does not imply a certain level of skill or training. Past performance does not guarantee future performance.</p>'+
  '<div class="legal"><span class="lab">© 2026 Levin Funding Group LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){return {k:"home",v:vHome,t:"Levin Funding Group — True wealth management in Tucson, Arizona",x:"Home"}}''')

# ---------------- hero field: dusk in the Sonoran Desert below the Santa Catalinas ----------------
reg('field', r'''/* ================= HERO FIELD: dusk in the Sonoran Desert, north Tucson. The Santa Catalina Mountains catch the
   last pink light under an orange afterglow (the firm's own orange), a tall saguaro stands rim-lit in the foreground among
   smaller saguaros, prickly pear and creosote. It moves on its own (stars come out, the afterglow breathes, a hawk circles)
   with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oLand=null,STARS=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var S=mob?Math.min(h*.34,w*.9):h,hz=S*(mob?.62:.6);
    return {mob:mob,side:side,cw:cw,S:S,hz:hz,gx:mob?w*.4:side+cw*.42};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the Catalinas: a broad massif with a rocky, saw-toothed crest (fixed seed so it always reads as the same range) */
  function crest(x,base,amp,seed){var R=rng(seed),p=[];for(var k=0;k<6;k++)p.push(R()*6.28);var u=x/w;
    var env=.35+.65*Math.pow(Math.sin(Math.PI*Math.min(1,Math.max(0,(u+.12)/1.18))),.8);
    var n=.55*Math.sin(u*5.1+p[0])+.25*Math.sin(u*11.3+p[1])+.12*Math.sin(u*23.7+p[2])+.08*Math.abs(Math.sin(u*61+p[3]));
    return base-amp*env*(.72+.28*n)}
  function build(){
    var S=G.S,hz=G.hz,A=mk(S+2),g=A[1];oSky=A[0];
    /* afterglow sky: night overhead to a band of the firm's orange on the western horizon */
    var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#101126");sky.addColorStop(.32,"#252244");sky.addColorStop(.6,"#5e3d5a");sky.addColorStop(.8,"#b05e4c");sky.addColorStop(.93,"#ec9548");sky.addColorStop(1,"#fcb862");
    g.fillStyle=sky;g.fillRect(0,0,w,S+2);
    var gl=g.createRadialGradient(G.gx,hz,0,G.gx,hz,w*.55);gl.addColorStop(0,"rgba(255,196,110,.42)");gl.addColorStop(.4,"rgba(236,140,80,.14)");gl.addColorStop(1,"rgba(236,140,80,0)");g.fillStyle=gl;g.fillRect(0,0,w,S+2);
    /* long thin clouds lit pink from below */
    var R=rng(11);for(var k=0;k<(G.mob?5:9);k++){var cy=hz*(.3+R()*.45),cx=R()*w,cwid=w*(.12+R()*.22),ch=S*(.004+R()*.006),a=.08+.12*R();
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(250,170,150,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(250,170,150,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    var B=mk(S+2),l=B[1];oLand=B[0];
    /* far range: hazy violet */
    ridge(l,hz+S*.01,S*.2,31,["#6e4a68","#5a3e5c"],.0);
    /* the Catalinas: alpenglow on the faces, ravines in shadow */
    var base=hz+S*.06,amp=S*.24;
    l.save();l.beginPath();l.moveTo(-4,S+2);for(var x=-4;x<=w+6;x+=3)l.lineTo(x,crest(x,base,amp,57));l.lineTo(w+6,S+2);l.closePath();
    var mg=l.createLinearGradient(0,base-amp,0,base+S*.06);mg.addColorStop(0,"#b0687a");mg.addColorStop(.45,"#8a4d63");mg.addColorStop(1,"#4a2f40");l.fillStyle=mg;l.fill();l.clip();
    /* light from the afterglow side, shadow toward the east */
    var sg=l.createLinearGradient(0,0,w,0);sg.addColorStop(0,"rgba(255,170,150,.10)");sg.addColorStop(.45,"rgba(255,170,150,0)");sg.addColorStop(1,"rgba(30,16,30,.32)");l.fillStyle=sg;l.fillRect(0,0,w,S+2);
    /* gullies: thin shadowed creases running down and out from notches in the crest */
    var Rr=rng(91);l.lineCap="round";for(var q=0;q<(G.mob?12:26);q++){var rx=Rr()*w,top=crest(rx,base,amp,57)+2,len=S*(.05+Rr()*.12),dir=Rr()<.5?-1:1;
      l.strokeStyle="rgba(46,24,44,"+(.1+Rr()*.12).toFixed(3)+")";l.lineWidth=.8+Rr()*1;l.beginPath();l.moveTo(rx,top);l.quadraticCurveTo(rx+dir*len*.15,top+len*.5,rx+dir*len*.45,top+len);l.stroke()}
    /* warm light along the crest */
    l.strokeStyle="rgba(255,190,150,.5)";l.lineWidth=1.2;l.beginPath();for(var x2=-4;x2<=w+6;x2+=3){var y2=crest(x2,base,amp,57)+.8;x2===-4?l.moveTo(x2,y2):l.lineTo(x2,y2)}l.stroke();
    l.restore();
    /* foothills and bajada falling toward the city, already in shadow */
    ridge(l,hz+S*.2,S*.06,73,["#3a2733","#2a1f27"],.0);
    var fl=l.createLinearGradient(0,hz+S*.2,0,S);fl.addColorStop(0,"#2a2026");fl.addColorStop(.5,"#1d1719");fl.addColorStop(1,"#141216");
    l.fillStyle=fl;l.beginPath();l.moveTo(-4,S+2);for(var x3=-4;x3<=w+6;x3+=6)l.lineTo(x3,hz+S*.25+Math.sin(x3/(w*.19))*S*.008);l.lineTo(w+6,S+2);l.closePath();l.fill();
    /* desert floor: creosote, prickly pear, distant saguaros */
    var Rd=rng(203),gy=function(x){return hz+S*.25+Math.sin(x/(w*.19))*S*.008};
    for(var d=0;d<(G.mob?40:110);d++){var dx=Rd()*w,depth=Rd(),dy=gy(dx)+depth*(S-gy(dx))*.9,ds=S*(.006+.022*depth);
      l.fillStyle="rgba(12,10,12,"+(.55+.4*depth).toFixed(3)+")";bush(l,dx,dy,ds,Rd)}
    for(var p=0;p<(G.mob?3:7);p++){var px=Rd()*w,pd=.3+Rd()*.6,py=gy(px)+pd*(S-gy(px))*.8;l.fillStyle="#110e11";pear(l,px,py,S*(.012+.02*pd),Rd)}
    var Rs=rng(317),far=G.mob?9:22;
    for(var s=0;s<far;s++){var sx=Rs()*w,sd=Rs()*.55,sy=gy(sx)+sd*(S-gy(sx))*.6+S*.004,sh=S*(.035+.08*sd)*(.7+Rs()*.5);
      if(!G.mob&&sx>G.side+G.cw*.62&&sx<G.side+G.cw*.92&&sd>.3)continue;
      l.fillStyle="rgba(14,11,14,"+(.7+.3*sd).toFixed(3)+")";saguaro(l,sx,sy,sh,Rs,false)}
    /* the hero saguaro, rim-lit by the afterglow */
    var hx=G.mob?w*.8:G.side+G.cw*.78,hy=S*(G.mob?.98:.97),hh=S*(G.mob?.62:.64);
    l.fillStyle="#0e0c0f";saguaro(l,hx,hy,hh,rng(5),true);
    var hx2=G.mob?w*.6:G.side+G.cw*.66,hh2=hh*.42;l.fillStyle="#120f12";saguaro(l,hx2,S*(G.mob?.93:.9),hh2,rng(9),false);
    /* ground shadow fading to the page */
    var fg=l.createLinearGradient(0,S*.8,0,S+2);fg.addColorStop(0,"rgba(22,21,26,0)");fg.addColorStop(1,"rgba(22,21,26,.9)");l.fillStyle=fg;l.fillRect(0,S*.8,w,S*.2+2);
    STARS=[];var Rt=rng(61);for(var t=0;t<(G.mob?40:110);t++)STARS.push([Rt()*w,Math.pow(Rt(),1.6)*hz*.62,.4+Rt()*1.1,Rt()*6.28,.3+Rt()*.7]);
  }
  function ridge(g,base,amp,seed,cols){g.beginPath();g.moveTo(-4,G.S+2);for(var x=-4;x<=w+6;x+=4)g.lineTo(x,crest(x*1.3+seed*7,base,amp,seed));g.lineTo(w+6,G.S+2);g.closePath();
    var gr=g.createLinearGradient(0,base-amp,0,base+amp*.4);gr.addColorStop(0,cols[0]);gr.addColorStop(1,cols[1]);g.fillStyle=gr;g.fill()}
  function bush(g,x,y,s,R){g.beginPath();for(var k=0;k<5;k++){var bx=x+(R()-.5)*s*1.6,by=y-R()*s*.5,br=s*(.35+R()*.4);g.moveTo(bx+br,by);g.ellipse(bx,by,br,br*.7,0,0,Math.PI*2)}g.fill()}
  function pear(g,x,y,s,R){var pads=[[0,0,1,0],[-.7,-.9,.8,-.5],[.6,-1,.85,.4],[.1,-1.8,.7,.1],[-1.3,-.3,.7,-.9]];g.beginPath();
    pads.forEach(function(p){g.moveTo(x+p[0]*s+s*p[2]*.62,y+p[1]*s-s*.5);g.ellipse(x+p[0]*s,y+p[1]*s-s*.5,s*p[2]*.62,s*p[2]*.82,p[3],0,Math.PI*2)});g.fill()}
  /* saguaro: a trunk and arms drawn as thick round-capped strokes that curve out and up; rim=true adds the warm
     edge light (the silhouette drawn warm, then dark offset away from the glow) and fine ribs */
  function saguaro(g,x,base,H,R,rim){
    var tw=H*(rim?.074:.08),arms=[],n=rim?3:(R()<.25?0:R()<.6?1:2);
    if(rim)arms=[[-1,.40,.17,.30],[1,.50,.15,.26],[-1,.62,.11,.14]];
    else for(var k=0;k<n;k++)arms.push([k%2?1:-1,.36+R()*.26,.12+R()*.08,.16+R()*.16]);
    function shape(dx,dy){g.beginPath();g.moveTo(x+dx,base+dy);g.lineTo(x+dx,base-H+tw/2+dy);
      arms.forEach(function(a){var d=a[0],ay=base-H*a[1]+dy,out=H*a[2],up=H*a[3],ex=x+dx+d*out;
        g.moveTo(x+dx,ay);g.bezierCurveTo(x+dx+d*out*.55,ay+out*.12,ex,ay-out*.05,ex,ay-out*.55);g.lineTo(ex,ay-up)})}
    g.save();g.lineCap="round";g.lineJoin="round";var col=g.fillStyle;
    if(rim){g.strokeStyle="rgba(255,178,104,.95)";shape(0,0);g.lineWidth=tw;g.stroke();g.strokeStyle=col;shape(Math.max(1.6,tw*.07),Math.max(.8,tw*.03));g.lineWidth=tw*.985;g.stroke()}
    else{g.strokeStyle=col;shape(0,0);g.lineWidth=tw;g.stroke()}
    if(rim){g.strokeStyle="rgba(255,190,130,.08)";g.lineWidth=1;g.lineCap="butt";for(var r=1;r<5;r++){var rx=x-tw/2+tw*r/5+1.5;g.beginPath();g.moveTo(rx,base-H+tw*.9);g.lineTo(rx,base);g.stroke()}}
    g.restore();
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?30:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var S=G.S,hz=G.hz;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the afterglow breathes and slowly deepens; stars come out overhead */
    var br=.5+.5*Math.sin(t*.35),deep=sm(t/40)*.18+SP.v*.2;
    c.globalCompositeOperation="lighter";
    var hg=c.createRadialGradient(G.gx,hz,0,G.gx,hz,w*.42);hg.addColorStop(0,"rgba(255,170,90,"+(.08+.06*br).toFixed(3)+")");hg.addColorStop(1,"rgba(255,170,90,0)");c.fillStyle=hg;c.fillRect(0,0,w,hz+S*.1);
    c.globalCompositeOperation="source-over";
    if(deep>0){c.fillStyle="rgba(16,17,38,"+deep.toFixed(3)+")";c.fillRect(0,0,w,hz)}
    for(var s=0;s<STARS.length;s++){var st=STARS[s],a=sm((t-2)/14)*st[4]*(.55+.45*Math.sin(t*1.3+st[3]))*(1-st[1]/(hz*.62)*.7);if(a<=.01)continue;
      c.fillStyle="rgba(255,244,226,"+a.toFixed(3)+")";c.beginPath();c.arc(st[0],st[1],st[2]*(G.mob?.7:1),0,Math.PI*2);c.fill()}
    /* a red-tailed hawk circling high over the range */
    var hcx=G.mob?w*.3:G.side+G.cw*.6,hcy=hz*(G.mob?.42:.38),rx=G.mob?w*.12:w*.07,ry=rx*.28,an=t*.22,bx=hcx+Math.cos(an)*rx,by=hcy+Math.sin(an)*ry,sz=G.mob?5:8,tilt=Math.cos(an)*.25;
    c.save();c.translate(bx,by);c.rotate(tilt);c.fillStyle="rgba(20,16,24,.85)";c.beginPath();
    c.moveTo(-sz*1.6,-sz*.1);c.quadraticCurveTo(-sz*.7,-sz*.45,0,-sz*.05);c.quadraticCurveTo(sz*.7,-sz*.45,sz*1.6,-sz*.1);c.quadraticCurveTo(sz*.7,sz*.08,sz*.12,sz*.12);c.lineTo(sz*.18,sz*.5);c.lineTo(-sz*.18,sz*.5);c.lineTo(-sz*.12,sz*.12);c.quadraticCurveTo(-sz*.7,sz*.08,-sz*1.6,-sz*.1);c.fill();c.restore();
    c.setTransform(1,0,0,1,0,0);c.drawImage(oLand,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.side+G.cw*.72,G.S*.9]:[w/2,h/2]}};
})();''')

# ---------------- story: the financial roadmap as a trail up the Catalinas ----------------
reg('story', r'''/* the story scene: their own phrase, "building your financial roadmap", drawn as an engraved elevation of a
   mountain with a trail. Step 1 marks where you are now (trailhead) and where you want to be (summit). Step 2 the
   route is drawn, shaped by your goals, time frame and risk tolerance. Step 3 the decisions along the way are waypoints
   (investments, taxes, retirement, your business). Step 4 a walker climbs the route to the summit flag; the plan is
   reviewed regularly. */
var TR=[[90,500],[262,476],[206,432],[342,404],[296,356],[432,322],[402,292],[506,254],[472,212],[548,178],[562,128]];
var MT=[[0,520],[60,500],[140,462],[210,400],[270,330],[326,286],[368,302],[420,240],[482,186],[530,150],[562,120],[592,136],[640,186],[704,256],[760,316],[800,352],[800,520]];
function pl(a){return a.map(function(p,i){return (i?'L':'M')+p[0]+' '+p[1]}).join('')}
function labT(id,lines,x,y,anc,from,to,mob){var o='<g class="lb" id="'+id+'">';
  if(to&&!mob)o+='<path class="ld" d="M'+from[0]+' '+from[1]+'L'+to[0]+' '+to[1]+'"/><circle class="dt" cx="'+to[0]+'" cy="'+to[1]+'" r="3"/>';
  o+='<text x="'+x+'" y="'+y+'" text-anchor="'+anc+'" class="w">'+lines+'</text>';return o+'</g>'}
function art(){var o='<defs><clipPath id="mclip"><path d="'+pl(MT)+'Z"/></clipPath></defs>';
  /* far range behind */
  o+='<path class="far" d="M0 470L70 430L150 380L230 350L300 372L360 330L420 300L470 318L520 290L600 230L660 250L720 300L800 280"/>';
  o+='<g id="scMt"><path class="mt" d="'+pl(MT)+'Z"/><g clip-path="url(#mclip)">';
  /* engraved strata, following the slope */
  for(var y=140;y<=520;y+=11){var d='M0 '+y;for(var x=0;x<=800;x+=40)d+='L'+x+' '+(y+Math.sin(x/70+y/37)*3).toFixed(1);o+='<path class="st" d="'+d+'"/>'}
  /* shadow hatch on the eastern face */
  for(var k=0;k<46;k++){var x0=562+k*12;o+='<path class="hh" d="M'+x0+' 110L'+(x0-150)+' 540"/>'}
  o+='</g><path class="mo" d="'+pl(MT.slice(0,-1))+'"/></g>';
  /* desert floor and saguaros at the trailhead */
  o+='<path class="gd0" d="M0 520H800"/>';
  function sag(x,b,hh){var t=hh*.09;return '<path class="sg" d="M'+(x-t/2)+' '+b+'V'+(b-hh+t/2)+'a'+(t/2)+' '+(t/2)+' 0 0 1 '+t+' 0V'+b+
    'M'+(x-t/2)+' '+(b-hh*.4)+'h-'+(hh*.12)+'v-'+(hh*.24)+'M'+(x+t/2)+' '+(b-hh*.52)+'h'+(hh*.1)+'v-'+(hh*.18)+'"/>'}
  o+=sag(36,520,64)+sag(140,520,40)+sag(720,520,52)+sag(774,520,30);
  /* the route */
  o+='<path class="rt0" d="'+pl(TR)+'"/><path class="rt" id="scRt" d="'+pl(TR)+'"/>';
  o+='<circle class="th" id="scA" cx="90" cy="500" r="6"/>';
  o+='<g id="scF"><path class="fp" d="M562 128V70"/><path class="ff" id="scFf" d="M562 72L598 82L562 92Z"/></g>';
  o+='<g id="scW">'+[3,5,7,9].map(function(i){return '<circle class="wp" cx="'+TR[i][0]+'" cy="'+TR[i][1]+'" r="5"/>'}).join('')+'</g>';
  o+='<circle class="wk" id="scK" cx="90" cy="500" r="7"/>';
  return o}
function scene(){
  var mob=MOBILE(),o;
  function tl(t){return t}
  if(mob){
    o='<svg class="mob" viewBox="0 0 400 340" aria-hidden="true"><g transform="translate(0,70) scale(.5)">'+art()+'</g>';
    o+=labT("l1a","WHERE YOU ARE NOW",14,26,"start",0,0,1)+labT("l1b","WHERE YOU WANT TO BE",386,52,"end",0,0,1);
    o+=labT("l2a","YOUR GOALS",14,26,"start",0,0,1)+labT("l2b","TIME FRAME",200,26,"middle",0,0,1)+labT("l2c","RISK TOLERANCE",386,26,"end",0,0,1);
    o+=labT("l3a","INVESTMENTS",14,26,"start",0,0,1)+labT("l3b","TAXES",386,26,"end",0,0,1)+labT("l3c","RETIREMENT",14,52,"start",0,0,1)+labT("l3d","YOUR BUSINESS",386,52,"end",0,0,1);
    o+=labT("l4a","REVIEWED REGULARLY",14,26,"start",0,0,1)+labT("l4b","ADJUSTED AS LIFE CHANGES",386,52,"end",0,0,1);
  }else{
    o='<svg viewBox="0 30 800 520" aria-hidden="true">'+art();
    o+=labT("l1a","WHERE YOU ARE NOW",24,384,"start",[70,392],[90,492])+labT("l1b","WHERE YOU WANT TO BE",612,64,"start",[606,60],[568,118]);
    o+=labT("l2a","YOUR GOALS",612,64,"start",[606,60],[568,118])+labT("l2b","TIME FRAME",24,120,"start",[132,116],[296,356])+labT("l2c","RISK TOLERANCE",24,160,"start",[188,156],[402,292]);
    o+=labT("l3a","YOUR BUSINESS",24,100,"start",[162,96],[506,254])+labT("l3b","RETIREMENT",24,140,"start",[138,136],[432,322])+labT("l3c","TAXES",24,180,"start",[90,176],[296,356])+labT("l3d","INVESTMENTS",24,220,"start",[146,216],[342,404]);
    o+=labT("l4a","REVIEWED REGULARLY",612,64,"start",[606,60],[600,82])+labT("l4b","ADJUSTED AS LIFE CHANGES",24,120,"start",[260,116],[472,212]);
  }
  return o+'</svg>';
}
function storyDraw(svg){
  var q=function(s){return $(s,svg)},qq=function(s){return $$(s,svg)};
  var E={mt:q("#scMt"),rt:q("#scRt"),a:q("#scA"),f:q("#scF"),ff:q("#scFf"),w:qq("#scW circle"),k:q("#scK"),
    l1:qq("#l1a,#l1b"),l2:qq("#l2a,#l2b,#l2c"),l3:qq("#l3a,#l3b,#l3c,#l3d"),l4:qq("#l4a,#l4b")};
  var L=E.rt.getTotalLength();
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!E.k.isConnected)return;
    var s1=seg(p,.02,.14),s2=seg(p,.27,.42),s3=seg(p,.52,.66),s4=seg(p,.77,.92);
    var o1=s1*(1-seg(p,.21,.26)),o2=s2*(1-seg(p,.46,.51)),o3=s3*(1-seg(p,.71,.76));
    E.mt.style.opacity=(b*(.6+.4*s1)).toFixed(3);
    E.a.style.opacity=(b*(.3+.7*s1)).toFixed(3);E.f.style.opacity=(b*(.3+.7*s1)).toFixed(3);
    show(E.l1,b*o1);show(E.l2,b*o2);show(E.l3,b*o3);show(E.l4,b*s4);
    E.rt.style.strokeDasharray=L+" "+L;E.rt.style.strokeDashoffset=(L*(1-s2)).toFixed(1);E.rt.style.opacity=b.toFixed(3);
    E.w.forEach(function(c,i){var v=seg(s3,i*.15,.4+i*.15);c.style.opacity=(b*v).toFixed(3);c.style.transform="scale("+(.4+.6*v).toFixed(3)+")"});
    var pt=E.rt.getPointAtLength(L*s4);E.k.setAttribute("cx",pt.x.toFixed(1));E.k.setAttribute("cy",pt.y.toFixed(1));E.k.style.opacity=(b*s2).toFixed(3);
    E.ff.style.transform="scaleX("+(.3+.7*s4).toFixed(3)+")";E.ff.classList.toggle("on",s4>.98);
  };
}''')

reg('scenecss', r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:13ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a6a2a8;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #6d6870;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(240px,32vh,320px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:400;font-size:clamp(28px,2.4vw,40px);line-height:1.1;letter-spacing:-.015em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .far{fill:none;stroke:rgba(var(--boner),.22);stroke-width:1;stroke-dasharray:2 4}
.scene .mt{fill:rgba(var(--boner),.03)}
.scene .st{fill:none;stroke:rgba(var(--boner),.16);stroke-width:1}
.scene .hh{fill:none;stroke:rgba(var(--boner),.12);stroke-width:1}
.scene .mo{fill:none;stroke:rgba(var(--boner),.82);stroke-width:1.5;stroke-linejoin:round}
.scene .gd0{stroke:rgba(var(--boner),.5);stroke-width:1.2}
.scene .sg{fill:none;stroke:rgba(var(--boner),.7);stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}
.scene .rt0{fill:none;stroke:rgba(var(--boner),.18);stroke-width:1.2;stroke-dasharray:3 5}
.scene .rt{fill:none;stroke:var(--accL);stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round}
.scene .th{fill:var(--ink2);stroke:var(--accL);stroke-width:1.6}
.scene .fp{stroke:rgba(var(--boner),.85);stroke-width:1.4}
.scene .ff{fill:rgba(var(--accr),.25);stroke:var(--accL);stroke-width:1.2;transform-box:fill-box;transform-origin:left center;transition:fill .4s}
.scene .ff.on{fill:var(--accL)}
.scene .wp{fill:var(--ink2);stroke:var(--accL);stroke-width:1.6;transform-box:fill-box;transform-origin:center}
.scene .wk{fill:var(--accL);stroke:var(--ink2);stroke-width:2}
.scene .ld{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .dt{fill:var(--accL)}
.scene text{font-family:var(--mono);font-weight:500;font-size:12.5px;letter-spacing:.14em;fill:#bdb8bd}
.scene text.w{fill:var(--bone)}
.scene .lb{opacity:0}''')

# ---------------- global swaps outside regions (colours / weights) ----------------
src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(22,21,26,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a6a2a8}.rail span::before{background:var(--ink2);border-color:#6d6870}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#bdb8bd}')
src = src.replace('.scene text{font-size:12px}', '.scene text{font-size:12.5px}')
src = src.replace('font-weight:300', 'font-weight:400').replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== Levin Funding Group: dusk-charcoal ground from their logo grey, warm bone pages, their orange as the accent ===== */
.d1,.d2,.d3,.lede,.mani .txt,.cta .big,.stat .v{font-weight:400}
.d1{letter-spacing:-.025em}.hero-h{font-size:clamp(48px,7vw,132px);letter-spacing:-.03em;line-height:.98}
.d2{letter-spacing:-.022em}.d3{letter-spacing:-.018em}.mani .txt{letter-spacing:-.015em}.cta .big{letter-spacing:-.025em}.stat .v{letter-spacing:-.02em}
.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em{font-weight:400}
.lede{line-height:1.3}
#pre .wm{font-family:'Figtree',system-ui,sans-serif;font-weight:300;color:var(--bone)}
.hero .eyebrow{color:var(--accL)}
.ftr .bigsvg{color:var(--bone)}
.ftr .disc{position:relative;z-index:1;max-width:80ch;margin:clamp(22px,2.4vw,34px) auto 0;text-align:center;font-size:13px;color:var(--stone)}
.ftr .fcv{opacity:.22!important}
.light .kick,.light .lab.kick{color:var(--accD)}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD)}
.cta .addr h3{margin-top:12px}
.cta>.wrap>.cx{grid-column:1/-1}
.cta .offs{margin-top:0;grid-template-columns:1fr 1fr}
.cta .offs>div:last-child{grid-column:1/-1}
.pl3 .lab{margin:0 0 12px}
/* team portraits (text inline expand, no bio sheets) */
.tm{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(36px,3.4vw,56px) var(--gap)}
.tm article{min-width:0}
.tm .ph{position:relative;aspect-ratio:4/5;overflow:hidden;background:var(--ink3);margin-bottom:24px}
.tm .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 25%;filter:grayscale(1) contrast(1.04);transition:filter .45s ease-out,transform .7s var(--eo)}
.tm article:hover .ph img{filter:grayscale(0);transform:scale(1.03)}
.tm .ph .ini{position:absolute;inset:0;display:none;place-items:center;font-family:var(--disp);font-size:64px;color:var(--stone)}
.tm .ph.noph img{display:none}.tm .ph.noph .ini{display:grid}
.tm h3{font-family:var(--disp);font-weight:400;font-size:clamp(24px,1.9vw,30px);line-height:1.1;letter-spacing:-.012em;margin:0 0 6px}
.tm .ttl{font-size:14.5px;color:var(--accL);margin:0 0 16px}
.tm .sm{font-size:15px;line-height:1.62;color:rgba(var(--boner),.84);margin:0 0 14px}
.tm details{border-top:1px solid var(--hair)}
.tm summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:14px 0;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase}
.tm summary::-webkit-details-marker{display:none}
.tm summary::after{content:"+";font-size:18px;line-height:1;color:var(--accL);transition:transform .3s var(--eo)}
.tm details[open] summary::after{transform:rotate(45deg)}
.tm details p{font-size:15px;line-height:1.62;color:var(--stone);margin:0 0 8px}
@media (max-width:1180px){.tm{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.tm{grid-template-columns:1fr}.tm .ph{aspect-ratio:1/1}.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:46vh;height:46svh}.scene svg.mob text{font-size:12px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = [m for m in re.findall(r'(?i)firelight|fort lauderdale|rick@', src)]
open(os.path.join(K, 'src', 'levin.src.html'), 'w', encoding='utf-8').write(src)
print('wrote src; leftovers:', len(leftover), set(leftover))
