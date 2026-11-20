#!/usr/bin/env python3
"""Assemble _kit/src/financiallegacy.src.html from the firelight engine regions (HOME-ONLY format).
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

INK = '#081633'
reg('meta', '''<title>Financial Legacy Management — Fee-only financial planning in Conway and Little Rock</title>
<meta name="description" content="Financial Legacy Management, Inc. is a fee-only financial planning and investment management firm with offices in Conway and Little Rock, Arkansas.">
<meta name="theme-color" content="#081633">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23081633'/%3E%3Ccircle cx='46' cy='26' r='6' fill='%23d8b45f'/%3E%3Cpath d='M8 50L30 16L44 38L50 34L60 50Z' fill='%23f5f1e7'/%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts Libre Caslon Text:400,400i; Figtree:400,500*/")
reg('root', ''':root{
  --ink:#081633;--inkr:8,22,51;--boner:245,241,231;--accr:216,180,95;--ink2:#0c1d40;--ink3:#14284f;--deep:#050f26;
  --bone:#f5f1e7;--bone2:#ebe5d6;--bone3:#ddd5c2;
  --stone:#aeb4c8;--stoneD:#4c5674;
  --acc:#c9a24e;--accL:#d8b45f;--accD:#7d5e17;
  --hair:rgba(245,241,231,.14);--hairD:rgba(8,22,51,.16);
  --disp:'Libre Caslon Text',Georgia,'Times New Roman',serif;
  --serif:'Libre Caslon Text',Georgia,serif;
  --sans:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#08163a 0%,#24305f 34%,#a07a6e 56%,#2a2f5a 62%,#0e1a3c 76%,#081633 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.logo{width:auto;height:24px;flex:none;overflow:visible}
.brand .bt{font:400 30px 'Libre Caslon Text',Georgia,serif;letter-spacing:.02em;fill:var(--bone)}
.brand .bb{fill:var(--accL)}
.brand .wt{font:500 10.5px/1.25 var(--mono);letter-spacing:.2em;text-transform:uppercase;color:var(--stone);max-width:9em;padding-top:2px}''')

reg('seen', '<script>try{if(sessionStorage.getItem("flm-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M6 78L40 22L58 52L66 46L90 78Z"/><path d="M2 84H94"/></svg>
    <div class="wm"><span>FLM</span></div>
  </div>
  <span class="lab pl">Fee-only financial planning · Conway and Little Rock, Arkansas</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="Financial Legacy Management, home"><svg class="logo" viewBox="0 0 84 30" aria-hidden="true"><text x="0" y="26" class="bt">FLM</text><path class="bb" d="M2 29.4H80V30.6H2Z"/></svg><span class="wt">Financial Legacy Management</span></a>')
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
    <div><span class="lab">Conway</span><br><a href="tel:+15013297526">501-329-PLAN</a></div>
    <div><span class="lab">Little Rock</span><br><a href="tel:+15012247526">501-224-PLAN</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Financial Legacy Management</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="Financial Legacy Management";\nvar PK="flm";')

# ---------------- content ----------------
reg('content', r'''var FONTS=['400 1em "Libre Caslon Text"','italic 400 1em "Libre Caslon Text"','400 1em "Figtree"','500 1em "Figtree"'];
var UP="https://financiallegacymanagement.com/wp-content/uploads/";
var ADV=UP+"2026/11/ADV-Part-2-2026.pdf",CRS=UP+"2026/09/Client-Relationship-Summary-ADV-Part-3.pdf",PRIV=UP+"2026/09/FLM-Privacy-Policy-2026.pdf",TXT=UP+"2026/09/Texting-Policy.pdf",IAPD="https://adviserinfo.sec.gov/firm/summary/136348",PORTAL="http://portal.panoramixweb.com/Account/Login/676";
var SHEETS=[],GROUPS=[];
/* [name, title, summary, background, phone(tel), phone(text), email] (financiallegacymanagement.com/bios, /contact-us; Form ADV Part 2) */
var TEAM=[
 ["John W. Kelley, CFP®","Chief Executive Officer · Financial Planner · Portfolio Manager",
  "Has led Financial Legacy Management since June 2005, and serves as the firm’s Chief Compliance Officer.",
  "Before FLM he was a Financial Planner, Portfolio Manager and Chief Compliance Officer at The Arkansas Financial Group (1999–2005). He has been President of Academics First of Conway, Inc. since 2004. B.A. in Finance, University of Arkansas at Little Rock (1998); CFP® Professional Education Program, College of Financial Planning (2002); CFP® certification (2003); Financial Life Planning Certification, Money Quotients (2004).",
  "+15013297526","501-329-PLAN","john@financiallegacymanagement.com"],
 ["Alvin Rogers, II, CFP®, MBA","Chief Financial Officer · Financial Planner · Portfolio Manager",
  "Joined Financial Legacy Management in September 2006, and with John Kelley is one of the firm’s two owners.",
  "He has been Vice President of Rogers Financial Services since 2006, and was Managing Planner and Portfolio Manager at Financial Decisions Institute, Inc. (2000–2005). B.S. in Accounting, University of Arkansas at Little Rock (1992); MBA, Webster University (1994); CFP® Professional Education Program, College of Financial Planning (1998); CFP® certification (1999).",
  "+15012247526","501-224-PLAN","alvin@financiallegacymanagement.com"]
];
var DOCS=[
 {d:"2026-08-10",s:"Form CRS",t:"Client Relationship Summary: our services, fees, conflicts and conduct",u:CRS},
 {d:"2025-12-31",s:"Form ADV Part 2",t:"Firm brochure: advisory business, fees, strategies and reviews",u:ADV},
 {d:"Privacy",s:"Policy",t:"How we protect and share client information",u:PRIV},
 {d:"Texting",s:"Policy",t:"Text and communication policy",u:TXT},
 {d:"SEC",s:"Adviser public disclosure",t:"Financial Legacy Management on the SEC’s Investment Adviser Public Disclosure site",u:IAPD}
];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",services:"s-services",team:"s-team",disclosures:"s-disclosures",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function docRows(list){return '<ul class="rows">'+list.map(function(n){var dt=/^\d{4}-/.test(n.d)?'<time class="lab" datetime="'+n.d+'">'+fd(n.d)+'</time>':'<span class="lab">'+esc(n.d)+'</span>';
  return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm">'+dt+'<span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<div class="tm">'+TEAM.map(function(p){
  return '<article><span class="rule" aria-hidden="true"></span><h3>'+esc(p[0])+'</h3><p class="ttl">'+esc(p[1])+'</p><p class="sm">'+esc(p[2])+'</p>'+
   '<p class="ct"><a class="ul" href="tel:'+p[4]+'">'+esc(p[5])+'</a><a class="ul" href="mailto:'+p[6]+'">'+esc(p[6])+'</a></p>'+
   '<details><summary>Background</summary><p>'+esc(p[3])+'</p></details></article>'}).join("")+'</div>'}
function ico(n){var I={
  book:'<path d="M32 16C24 10 14 10 6 12v38c8-2 18-2 26 4c8-6 18-6 26-4V12c-8-2-18-2-26 4z"/><path class="a" d="M32 16v38"/><path d="M12 22c5-1 10-1 14 1M12 30c5-1 10-1 14 1M38 23c4-2 9-2 14-1M38 31c4-2 9-2 14-1"/>',
  key:'<circle cx="20" cy="32" r="12"/><circle class="a" cx="20" cy="32" r="4"/><path d="M32 32h28M50 32v10M58 32v7"/>',
  compass:'<circle cx="32" cy="32" r="24"/><path class="a" d="M40 24l-5 11-11 5 5-11z"/><path d="M32 4v6M32 54v6M4 32h6M54 32h6"/>'};
  return '<svg viewBox="0 0 64 64" aria-hidden="true">'+I[n]+'</svg>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fee-only financial planning<span class="nomob"> · Conway and Little Rock, Arkansas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Your goals,</span><span class="l">your <em>legacy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Financial Legacy Management is dedicated to helping our clients reach their financial goals in the most efficient manner possible, through financial planning and investment management.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Free initial consultation '+ARR+'</a><a class="btn" href="#/approach">How we work</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Fee-only, by design</span>'+
   '<p class="txt" id="mani">We only receive compensation from our clients. We do not sell products or take commissions, so our advice comes without hidden agendas, and <em>our success is tied to yours.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2005</span><span class="k">The year Financial Legacy Management was founded</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">350</span><span class="k">Approximate number of client relationships, as of December 31, 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$155<sup>M</sup></span><span class="k">Approximate assets under management, as of December 31, 2025</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with clients</span><h2 class="d3">A plan first, <em>then a portfolio.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Plan</span><span>Invest</span><span>Coach</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The plan comes first.</h2><p>Your goals rest on your own values, priorities and circumstances. We start there, and answer the questions that matter: retirement, college, insurance, a will or trust.</p></article>'+
     '<article class="step"><h2>Then we invest toward it.</h2><p>We find the asset-class mix that suits your comfort with risk, using Modern Portfolio Theory: low-cost index funds and ETFs at the core, active funds where they can make a difference.</p></article>'+
     '<article class="step"><h2>Coaching, for life.</h2><p>We review accounts every quarter, and when life changes we are there to advise you, help you decide and hold you accountable, including the plans you make for your children.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we do</span><h2 class="d2 split">Planning and <em>investing, together.</em></h2></div><p data-r>Our services divide into two categories, financial planning and investment management. Most clients choose both, for ongoing, in-depth advice and life planning.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Financial planning</dt><dd>Clear directions to your goals: how much to save for retirement and in which accounts, college funding, whether you need a will or trust, and the insurance you really need.</dd></div>'+
    '<div><dt class="lab">Portfolio management</dt><dd>An ongoing relationship in which we select and monitor your investments, with the asset-class mix set to your risk comfort and expenses kept as low as possible.</dd></div>'+
    '<div><dt class="lab">Ongoing advice</dt><dd>Cash flow, insurance review, investment management, education, retirement and estate planning, and tax preparation, with each recommendation carried through.</dd></div>'+
    '<div><dt class="lab">Business owners</dt><dd>Retainer relationships for small businesses with ongoing tax planning needs, and accounting services for clients who own small businesses.</dd></div>'+
   '</dl>'+
   '<p class="note-s" data-r>High expenses can decimate the returns of an investment portfolio. We keep fund fees, trading costs and brokerage expenses to a minimum, and client assets are held by a qualified custodian such as Charles Schwab.</p>'+
  '</div></section>'+

  '<section class="sec dark2" data-theme="dark"><div class="wrap">'+
   '<div class="two"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d2 split">Families, and the <em>plans they keep.</em></h2>'+
    '<p class="muted" data-r style="margin-top:28px;max-width:40ch">We accept clients with a minimum of $100,000 of investable assets, and family members’ assets count together toward it. The first meeting is free.</p></div>'+
   '<div><p class="lede" data-r style="margin-bottom:30px">We advise:</p><ul class="aims">'+
    '<li><span>Individuals and families, across every part of their financial lives.</span></li>'+
    '<li><span>Pension, profit sharing and company retirement plans.</span></li>'+
    '<li><span>Trusts, estates and charitable organizations.</span></li>'+
    '<li><span>Small businesses and the people who own them.</span></li>'+
   '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-promises" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our promises</span><h2 class="d2 split">Advice you can <em>understand.</em></h2></div><p data-r>Clients want someone they can understand. We explain concepts plainly, so that you can make wise and well-informed financial decisions.</p></div>'+
   '<div class="pillars">'+
    '<div class="pl3">'+ico("book")+'<span class="lab">01 · Educate</span><h3>Honesty and integrity</h3><p>No industry lingo or jargon. We explain financial products and concepts so you are never left in the dark.</p></div>'+
    '<div class="pl3">'+ico("key")+'<span class="lab">02 · Concierge</span><h3>Your financial concierge</h3><p>An individualized plan built on in-depth knowledge of you, then viable options, help implementing them, and a walk through the entire process.</p></div>'+
    '<div class="pl3">'+ico("compass")+'<span class="lab">03 · Coaching</span><h3>On-going coaching</h3><p>Life is a journey. Knowing who you are and where you want to go helps when life changes, and we will be there to lead, motivate and affirm.</p></div>'+
   '</div></div></section>'+

  '<section class="sec dark" id="s-team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Two planners, <em>one firm.</em></h2></div><p data-r>Both of our advisors are CERTIFIED FINANCIAL PLANNER™ professionals and portfolio managers, and both review client accounts every quarter.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="s-disclosures" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Disclosures and policies</span><h2 class="d3 split">Read before <em>you invest.</em></h2></div></div>'+docRows(DOCS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Free initial consultation</span>'+
   '<h2 class="big split">Let’s talk about <em>your goals.</em></h2>'+
   '<p class="sub" data-r>For more information or to schedule a free initial consultation, call or e-mail either of us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:john@financiallegacymanagement.com">E-mail John Kelley '+ARR+'</a><a class="btn" href="mailto:alvin@financiallegacymanagement.com">E-mail Alvin Rogers</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Conway office</span><h3>John Kelley, CFP®</h3><p>Financial Legacy Management, Inc.<br>950 Hogan Lane, Suite 11<br>Conway, AR 72034</p><p class="mt"><a class="ul" href="tel:+15013297526">501-329-PLAN</a> · <a class="ul" href="mailto:john@financiallegacymanagement.com">john@financiallegacymanagement.com</a></p></div>'+
    '<div class="addr" data-r><span class="lab">Little Rock office</span><h3>Alvin Rogers, II, CFP®, MBA</h3><p>Financial Legacy Management, Inc.<br>13 Office Park Drive<br>Little Rock, AR 72211</p><p class="mt"><a class="ul" href="tel:+15012247526">501-224-PLAN</a> · <a class="ul" href="mailto:alvin@financiallegacymanagement.com">alvin@financiallegacymanagement.com</a></p></div>'+
   '</div>'+
   '<div class="offs cx2" data-r><div><span class="lab">Hours</span><b>8:00am – 4:00pm</b></div><div><span class="lab">Clients</span><b><a class="ul" href="'+PORTAL+'" target="_blank" rel="noopener">Client portal</a></b></div>'+
    '<div><span class="lab">Disclosures</span><b class="em"><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a> · <a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a></b></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Conway</span>950 Hogan Lane, Suite 11<br>Conway, AR 72034<br><a class="ul" href="tel:+15013297526">501-329-PLAN</a></div>'+
   '<div class="c"><span class="lab">Little Rock</span>13 Office Park Drive<br>Little Rock, AR 72211<br><a class="ul" href="tel:+15012247526">501-224-PLAN</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/contact">Contact</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2</a><br><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+PRIV+'" target="_blank" rel="noopener">Privacy policy</a><br><a class="ul" href="'+IAPD+'" target="_blank" rel="noopener">SEC adviser disclosure</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Libre Caslon Text\',Georgia,serif;font-weight:400;font-size:40px;letter-spacing:.02em">Financial Legacy</text></svg>'+
  '<p class="disc">Financial Legacy Management, Inc. is a fee-only investment adviser registered with the SEC. Registration does not imply a certain level of skill or training.</p>'+
  '<div class="legal"><span class="lab">© 2026 Financial Legacy Management, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){return {k:"home",v:vHome,t:"Financial Legacy Management — Fee-only financial planning in Conway and Little Rock",x:"Home"}}''')

# ---------------- hero field: Pinnacle Mountain at sunset over the Arkansas River ----------------
reg('field', r'''/* ================= HERO FIELD: sunset over the Arkansas River west of Little Rock, Pinnacle Mountain's cone
   standing above the far bank, low Ouachita ridges behind it. The firm's gold sun settles toward the ridges and lays a
   glittering path down the river; the river carries the sky and the mountain's reflection. It moves on its own (glitter,
   slow ripples, the sun sinking a little) with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oLand=null,oFore=null,RIV=null,GL=[],RIP=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var S=mob?Math.min(h*.36,w*.86):h,hz=S*(mob?.56:.6);
    var mx=mob?w*.6:side+cw*.64,mW=mob?Math.min(w*.4,S*.9):Math.min(cw*.26,S*.62),mh=S*(mob?.3:.29);
    var sx=mob?w*.88:side+cw*.9;
    return {mob:mob,side:side,cw:cw,S:S,hz:hz,mx:mx,mW:mW,mh:mh,sx:sx,sy:hz-S*(mob?.075:.07),R:Math.max(9,S*(mob?.045:.034))};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* far Ouachita ridges: long low swells along the horizon */
  function ridge(k,x){var R=rng(11+k*29),p1=R()*6.28,p2=R()*6.28,p3=R()*6.28,wl=w*(.16+.08*k)+120;
    var n=.5+.5*(.6*Math.sin(x/wl+p1)+.28*Math.sin(x/(wl*.43)+p2)+.12*Math.sin(x/(wl*.17)+p3));
    return G.hz-G.S*(k?.034:.05)*(.35+.65*n)}
  /* value noise for rugged edges */
  var VN=(function(){var R=rng(71),a=[];for(var i=0;i<1024;i++)a.push(R());return a})();
  function vn(x){var i=Math.floor(x),f=x-i,u=f*f*(3-2*f);return VN[(i%1024+1024)%1024]*(1-u)+VN[((i+1)%1024+1024)%1024]*u}
  function fbm(x){return .5*vn(x)+.27*vn(x*2.1+11)+.15*vn(x*4.3+23)+.08*vn(x*8.9+41)}
  var HT=(function(){var a=new Float32Array(65536),st=0x9e3779b9;for(var i=0;i<65536;i++){st=(st+0x6D2B79F5)|0;var t=Math.imul(st^(st>>>15),1|st);t=(t+Math.imul(t^(t>>>7),61|t))^t;a[i]=((t^(t>>>14))>>>0)/4294967296}return a})();
  function crownAt(x,y,c){var gx=x/c,gy=y/c,ix=Math.floor(gx),iy=Math.floor(gy),best=9,bx=0,by=0;
    for(var j=-1;j<=1;j++)for(var i=-1;i<=1;i++){var h=((ix+i)&255)+(((iy+j)&255)<<8),cx=ix+i+.15+.7*HT[h],cy=iy+j+.15+.7*HT[(h+7919)&65535],dx=gx-cx,dy=gy-cy,rr=.55+.25*HT[(h+104729)&65535],d=Math.hypot(dx,dy*1.15)/rr;
      if(d<best){best=d;bx=dx/rr;by=dy/rr}}return [best,bx,by]}
  function vn2(x,y){var i=Math.floor(x),j=Math.floor(y),fx=x-i,fy=y-j,u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy),i0=i&255,j0=j&255,i1=(i+1)&255,j1=(j+1)&255;
    var a=HT[i0+(j0<<8)],b=HT[i1+(j0<<8)],c=HT[i0+(j1<<8)],d=HT[i1+(j1<<8)];return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v}
  /* Pinnacle Mountain as seen from the east, from the river: the summit sits east of centre. The east (left) flank is a
     steep, slightly concave rock face; the west (right) flank falls in a convex shoulder to a long lower spur. The top is a
     ragged crown of bare sandstone boulders. */
  function mtnBase(t){
    if(t<-1||t>1.45)return -.02;
    if(t<0){var a=-t;return Math.pow(1-a,1.85)*(1+.1*Math.sin(a*3.1))-.03*Math.exp(-Math.pow((a-.1)/.05,2))}
    var f=Math.pow(Math.max(0,1-t/1.15),1.12);
    var sh=.4*Math.exp(-Math.pow((t-.6)/.26,2))+.15*Math.exp(-Math.pow((t-1.1)/.22,2));
    return Math.max(f*(1-.12*sm(t/.4)),sh*(1-sm((t-1.1)/.35)))}
  function mtn(x){var t=(x-G.mx)/G.mW;if(t<-1||t>1.45)return G.hz+4;
    var b=mtnBase(t),rug=(fbm(x/(G.mW*.035))-.5)*.035*b+(fbm(x/(G.mW*.012)+7)-.5)*.02*Math.max(0,b-.72)*4;
    return G.hz+G.S*.006-G.mh*1.02*(b+rug)}
  /* the river: a wide reach below the mountain; our near shore curves away, low on the left and deep on the right */
  function shore(x){var u=G.mob?x/w:(x-G.side-G.cw*.28)/(G.cw*.62),b=G.S-G.hz;
    return G.hz+b*(G.mob?(.34+.4*sm(u)):(.07+.36*sm(u)))+b*.025*Math.sin(x*.011+1.3)+b*.012*Math.sin(x*.037)}
  function build(){
    var S=G.S,hz=G.hz,A=mk(S+2),g=A[1];oSky=A[0];
    var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#07153a");sky.addColorStop(.32,"#1d2b62");sky.addColorStop(.6,"#55507e");sky.addColorStop(.8,"#b47e72");sky.addColorStop(.93,"#e9ad6a");sky.addColorStop(1,"#f6d48e");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    var gl=g.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,S*.8);gl.addColorStop(0,"rgba(255,224,150,.6)");gl.addColorStop(.25,"rgba(240,176,104,.24)");gl.addColorStop(1,"rgba(240,176,104,0)");
    g.fillStyle=gl;g.fillRect(0,0,w,hz+2);
    /* long thin clouds, lit from beneath */
    var R=rng(5);for(var k=0;k<(G.mob?4:7);k++){var cy=hz*(.3+R()*.5),cx=R()*w,cwid=w*(.14+R()*.22),ch=S*(.012+R()*.016),near=1-Math.min(1,Math.abs(cx-G.sx)/(w*.7)),a=.04+.1*near;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(250,196,140,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(250,196,140,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    var B=mk(S+2),l=B[1];oLand=B[0];
    /* far ridges, warmed where the sun is */
    [["#8a6f8a",0],["#5d557c",1]].forEach(function(r){l.fillStyle=r[0];l.beginPath();l.moveTo(-4,hz+3);for(var x=-4;x<=w+6;x+=4)l.lineTo(x,ridge(r[1],x));l.lineTo(w+6,hz+3);l.closePath();l.fill();
      l.save();l.globalCompositeOperation="source-atop";var sw=l.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,w*.4);sw.addColorStop(0,"rgba(255,206,140,.42)");sw.addColorStop(1,"rgba(255,206,140,0)");l.fillStyle=sw;l.fillRect(0,0,w,hz+4);l.restore()});
    /* the mountain, shaded pixel by pixel. Its surface is a cone (normal swings from east to west across it) cut by
       ridges and gullies running down the fall line; the low sun in the west (right) grazes the west face warm while the
       east face falls into cool shadow. Bare sandstone above a ragged treeline, a fine forest texture below it, and
       atmospheric haze thickening toward the foot. */
    var mL=Math.floor(G.mx-G.mW-2),mR=Math.ceil(G.mx+G.mW*1.45+2),smx=G.mx,smy=hz;
    for(var xs=mL;xs<=mR;xs+=1){var ys=mtn(xs);if(ys<smy){smy=ys;smx=xs}}
    var md=dpr,MW=Math.ceil((mR-mL)*md),MT=Math.floor(smy-2),MH=Math.ceil((hz+3-MT)*md),mc=document.createElement("canvas");mc.width=MW;mc.height=MH;
    var mx2=mc.getContext("2d"),id=mx2.createImageData(MW,MH),D=id.data,PR=[];for(var px=0;px<MW;px++)PR.push(mtn(mL+px/md));
    var sc=G.mW/260,LX=.93,LZ=.3,LN=Math.hypot(LX,LZ);LX/=LN;LZ/=LN;
    for(var py=0;py<MH;py++){var y=MT+py/md,depth=(y-smy)/(hz-smy);
      /* the cone's half-width at this height, for the base normal */
      for(px=0;px<MW;px++){var x=mL+px/md,top=PR[px];if(y<top)continue;
        var u=(x-smx)/(G.mW*(.12+1.05*Math.max(0,depth))),cn=Math.max(-1,Math.min(1,u));
        /* gullies and spurs: noise stretched down the fall line, sheared outward from the summit */
        var gx=(x-(x-smx)*.35*depth)/(sc*15),gy=y/(sc*60);
        var e=.08,n0=vn2(gx,gy)*.7+vn2(gx*2.1+5,gy*1.8+3)*.3,n1=vn2(gx+e,gy)*.7+vn2((gx+e)*2.1+5,gy*1.8+3)*.3,gk=depth<.35?.16:.16-.1*sm((depth-.35)/.3);
        var nx=cn*.95+(n1-n0)/e*gk,nz=Math.sqrt(Math.max(.05,1-nx*nx));var ln=Math.hypot(nx,nz);nx/=ln;nz/=ln;
        var dif=Math.pow(Math.max(0,nx*LX+nz*LZ),1.6),tl=.2+.13*fbm(x/(G.mW*.06)+5)+(top-smy)/(hz-smy)*.4,rock=1-sm((depth-tl)/.05);
        var r,g,b;
        var st=vn2(x/(sc*1.6),y/(sc*7))*.6+vn2(x/(sc*.7),y/(sc*.9))*.4,rk=.65+.6*st;
        var rr=(34+170*dif*rk)*(1-.35*Math.max(0,-cn)),rg=(32+112*dif*rk)*(1-.35*Math.max(0,-cn)),rb=(62+70*dif*rk)*(1-.3*Math.max(0,-cn));
        /* forest: crown-sized pits and tops */
        /* crowns: nearest jittered cell centre gives a round dome per tree; each dome is lit on its sunward side */
        var cc=crownAt(x-mL,y-MT,sc*2.3),dome=Math.max(0,1-cc[0]),side=.55+.45*Math.max(-1,Math.min(1,cc[1]*.9-cc[2]*.5)),tex=(.5+.55*dome*side)*(.72+.45*vn2((x-mL)/(sc*22),(y-MT)/(sc*14))),pit=.72+.28*sm(dome*2.2);
        var shd=1-.5*Math.max(0,-cn);var fr=(16+140*dif*tex+8*dome)*pit*shd,fg=(21+80*dif*tex+7*dome)*pit*shd,fb=(46+40*dif*tex+12*dome)*pit*shd;
        var r=fr+(rr-fr)*rock,g=fg+(rg-fg)*rock,b=fb+(rb-fb)*rock;
        /* haze: thin at the top, heavier at the foot, warmer toward the sun */
        var hzk=.04+.26*Math.pow(Math.max(0,depth),1.8),wk=Math.max(0,1-Math.hypot(x-G.sx,y-G.sy)/(G.mW*2.2));
        r=r*(1-hzk)+(128+80*wk)*hzk;g=g*(1-hzk)+(100+56*wk)*hzk;b=b*(1-hzk)+(132+6*wk)*hzk;
        var o=(py*MW+px)*4,ea=Math.min(1,(y-top)*md+.35);D[o]=r;D[o+1]=g;D[o+2]=b;D[o+3]=255*ea}}
    mx2.putImageData(id,0,0);l.drawImage(mc,mL,MT,MW/md,MH/md);
    /* rim light along the west skyline */
    l.save();var rimg=l.createLinearGradient(smx,0,mR,0);rimg.addColorStop(0,"rgba(255,214,160,.6)");rimg.addColorStop(.6,"rgba(255,214,160,.28)");rimg.addColorStop(1,"rgba(255,214,160,0)");
    l.strokeStyle=rimg;l.lineWidth=1.1;l.beginPath();for(var x3=smx;x3<=mR;x3+=1.5){var y3=mtn(x3)+.6;x3===smx?l.moveTo(x3,y3):l.lineTo(x3,y3)}l.stroke();l.restore();
    /* valley mist at the mountain's foot */
    var Rm=rng(109);for(var mq=0;mq<(G.mob?4:8);mq++){var mxm=mL+Rm()*(mR-mL),mw2=G.mW*(.35+Rm()*.5),mh2=G.S*(.008+Rm()*.01);l.save();l.translate(mxm,hz-G.S*(.004+Rm()*.012));l.scale(1,mh2/mw2);var mg2=l.createRadialGradient(0,0,0,0,0,mw2);mg2.addColorStop(0,"rgba(220,180,175,.2)");mg2.addColorStop(1,"rgba(220,180,175,0)");l.fillStyle=mg2;l.beginPath();l.arc(0,0,mw2,0,6.28);l.fill();l.restore()}
    /* the far bank: a dark line of trees at the water */
    var Rt=rng(23),fbp=new Path2D();fbp.rect(-4,hz-S*.002,w+10,S*.034);
    for(var x4=-4;x4<=w+6;){var cr=S*(.003+Rt()*.005)*(G.mob?.8:1),ch2=cr*(.55+Rt()*.5);fbp.moveTo(x4+cr,hz-ch2*.2);fbp.ellipse(x4,hz-ch2*.2,cr,ch2,0,0,6.28);x4+=cr*(.5+Rt()*.6)}
    l.fillStyle="#141b40";l.fill(fbp);
    l.save();l.clip(fbp);var fbg=l.createLinearGradient(0,hz-S*.02,0,hz);fbg.addColorStop(0,"rgba(120,100,140,.25)");fbg.addColorStop(1,"rgba(120,100,140,0)");l.fillStyle=fbg;l.fillRect(0,hz-S*.02,w,S*.02);l.restore();
    /* the near land below the horizon */
    var lg=l.createLinearGradient(0,hz,0,S);lg.addColorStop(0,"#121a3e");lg.addColorStop(.5,"#0c1534");lg.addColorStop(1,G.mob?"#081633":"#071230");l.fillStyle=lg;l.fillRect(0,hz+S*.004,w,S-hz+2);
    /* the river, carrying the sky */
    RIV=new Path2D();RIV.moveTo(-4,hz+S*.002);RIV.lineTo(w+4,hz+S*.002);var SH=[];for(var x6=w+4;x6>=-4;x6-=4){var y7=shore(x6);SH.push([x6,y7]);RIV.lineTo(x6,y7)}RIV.closePath();
    var wg=l.createLinearGradient(0,hz,0,hz+(S-hz)*(G.mob?.8:.5));wg.addColorStop(0,"#e6b47c");wg.addColorStop(.12,"#a77a78");wg.addColorStop(.45,"#4c4a78");wg.addColorStop(1,"#1a2552");
    l.fillStyle=wg;l.fill(RIV);
    l.save();l.clip(RIV);
      /* the mountain upside down in the water, darker and softer */
      l.globalAlpha=.5;l.fillStyle="#1a2150";l.beginPath();l.moveTo(G.mx-G.mW,hz);for(var x5=G.mx-G.mW;x5<=G.mx+G.mW*1.35;x5+=3)l.lineTo(x5,2*hz-mtn(x5)+S*.01);l.lineTo(G.mx+G.mW*1.35,hz);l.closePath();l.fill();l.globalAlpha=1;
      /* the far ridges and treeline, mirrored faintly */
      l.fillStyle="rgba(20,27,64,.55)";l.fillRect(0,hz,w,S*.012);
      /* the west half of the water lies in shadow, which keeps the headline clear */
      var hs=l.createLinearGradient(0,0,w,0);hs.addColorStop(0,"rgba(10,18,46,.72)");hs.addColorStop(G.mob?.2:.45,"rgba(10,18,46,.3)");hs.addColorStop(G.mob?.5:.7,"rgba(10,18,46,0)");l.fillStyle=hs;l.fillRect(0,hz,w,S-hz);
      /* the sun's warmth on the water beneath it */
      l.save();l.translate(G.sx,hz);l.scale(1,2.2);var sg=l.createRadialGradient(0,0,0,0,0,S*.16);sg.addColorStop(0,"rgba(255,214,140,.5)");sg.addColorStop(1,"rgba(255,214,140,0)");l.fillStyle=sg;l.fillRect(-S*.2,0,S*.4,S*.2);l.restore();
    l.restore();
    /* soft light along our shore */
    var ss=l.createLinearGradient(0,0,w,0);ss.addColorStop(0,"rgba(240,200,140,0)");ss.addColorStop(G.mob?.2:.5,"rgba(240,200,140,0)");ss.addColorStop(G.mob?.6:.75,"rgba(240,200,140,.28)");l.strokeStyle=ss;l.lineWidth=1;l.beginPath();SH.forEach(function(p,k2){k2?l.lineTo(p[0],p[1]):l.moveTo(p[0],p[1])});l.stroke();
    /* our side: a meadow catching the last light, then a near wood of oaks and pines along the bottom (desktop; phones keep a clear band) */
    oFore=null;if(!G.mob){
      var md=l.createRadialGradient(G.sx,hz,0,G.sx,hz,w*.6);md.addColorStop(0,"rgba(190,140,110,.16)");md.addColorStop(1,"rgba(190,140,110,0)");l.fillStyle=md;l.fillRect(0,hz,w,S-hz);
      var Rk=rng(31);var FB=mk(S+2);oFore=FB[0];var l0=l;l=FB[1];
      var edge=function(x){var u=(x-G.side)/G.cw;return S*(.93-.12*sm((u-.45)/.5))+S*.012*Math.sin(x*.02)};
      var sunAt=function(x,y){return Math.max(0,1-Math.hypot(x-G.sx,(y-hz)*1.6)/(w*.6))};
      /* foliage is built from many small leaf clumps, so every crown has a ragged, real edge. Backlit by the low sun, the
         crowns are near-silhouettes; only their sun-facing fringe catches a thin warm rim. */
      function crown(clumps,sk){var p=new Path2D();clumps.forEach(function(c){p.moveTo(c[0]+c[2],c[1]);p.arc(c[0],c[1],c[2],0,6.28)});
        if(sk>.03){l.fillStyle="rgba(250,190,124,"+(.1+.45*sk).toFixed(3)+")";l.fill(p);l.save();l.translate(-.9,.6)}
        l.fillStyle="#060b22";l.fill(p);if(sk>.03)l.restore();
        /* inner volume: faint cool light on the upper lobes, deeper shade beneath */
        l.save();l.clip(p);var cy0=clumps.reduce(function(a,c){return Math.min(a,c[1])},1e9),cy1=clumps.reduce(function(a,c){return Math.max(a,c[1])},-1e9);
        var vg=l.createLinearGradient(0,cy0,0,cy1);vg.addColorStop(0,"rgba(70,70,110,"+(.12+.12*sk).toFixed(3)+")");vg.addColorStop(1,"rgba(0,0,0,.25)");l.fillStyle=vg;l.fillRect(-10,cy0-20,w+20,cy1-cy0+40);l.restore()}
      function blob(out,cx,cy,rx,ry,n,R2,cs){for(var i=0;i<n;i++){var a=R2()*6.28,d=Math.sqrt(R2());out.push([cx+Math.cos(a)*rx*d,cy+Math.sin(a)*ry*d,cs*(.5+R2()*.7)])}}
      /* a broad white oak: short trunk, spreading limbs, a crown of several foliage masses */
      function oak(x,y,s){var R2=rng(Math.floor(x*13+y*7)),sk=sunAt(x,y),cl=[];
        l.strokeStyle="#050a20";l.lineCap="round";l.lineWidth=s*.07;l.beginPath();l.moveTo(x,y);l.quadraticCurveTo(x-s*.02,y-s*.3,x+s*.01,y-s*.45);l.stroke();
        l.lineWidth=s*.03;[[-1,.5],[1,.48],[-.5,.62],[.55,.66]].forEach(function(b){l.beginPath();l.moveTo(x,y-s*.38);l.quadraticCurveTo(x+b[0]*s*.2,y-s*b[1],x+b[0]*s*.5,y-s*(b[1]+.1));l.stroke()});
        var nm=5+Math.floor(R2()*3);for(var k=0;k<nm;k++){var a=Math.PI*(1.08+.84*k/(nm-1))+(R2()-.5)*.3,d=s*(.3+.12*R2());
          blob(cl,x+Math.cos(a)*d*1.3,y-s*.66+Math.sin(a)*d*.6,s*(.2+.08*R2()),s*(.15+.06*R2()),Math.round(50*(s/40)+30),R2,Math.max(1.2,s*.03))}
        blob(cl,x,y-s*.72,s*.32,s*.2,Math.round(60*(s/40)+30),R2,Math.max(1.2,s*.034));crown(cl,sk)}
      /* a shortleaf pine: tall clean trunk, a few irregular needle clumps on short limbs near the top */
      function pine(x,y,s){var R2=rng(Math.floor(x*17+y*3)),sk=sunAt(x,y),H=s*1.5,cl=[];
        l.strokeStyle="#050a20";l.lineWidth=Math.max(1,s*.03);l.beginPath();l.moveTo(x,y);l.quadraticCurveTo(x+s*.04,y-H*.5,x+s*.02,y-H);l.stroke();
        var nc=4+Math.floor(R2()*2);for(var i=0;i<nc;i++){var v=i/(nc-1),cy=y-H*(.55+.45*v),sd=(i%2?1:-1)*(R2()<.25?-1:1),off=s*(.06+.12*R2())*(1-v*.5)*sd;
          l.lineWidth=Math.max(.8,s*.015);l.beginPath();l.moveTo(x+s*.02*v,cy+s*.02);l.lineTo(x+off,cy);l.stroke();
          blob(cl,x+off,cy,s*(.17-.07*v)*(.8+.4*R2()),s*(.04+.015*R2()),Math.round(14*(s/40)+10),R2,Math.max(1,s*.022));blob(cl,x+off*1.6,cy+s*.02,s*.06,s*.025,6,R2,Math.max(1,s*.018))}
        blob(cl,x+s*.02,y-H*1.02,s*.05,s*.06,8,R2,Math.max(1.2,s*.03));crown(cl,sk)}
      /* the wood: a dark mass whose top is built of real crowns */
      l.fillStyle="#060c25";l.beginPath();l.moveTo(-4,S+4);for(var x7=-4;x7<=w+6;x7+=3)l.lineTo(x7,edge(x7)+S*.03);l.lineTo(w+6,S+4);l.closePath();l.fill();
      var TR=[];for(var q2=0;q2<30;q2++){var tx=Rk()*w,u2=(tx-G.side)/G.cw,big=.3+.7*sm((u2-.35)/.55),ts=S*(.05+Rk()*.045)*(.55+big);TR.push([tx,edge(tx)+S*.035+Rk()*S*.04,ts,Rk()<.3])}
      TR.sort(function(a,b){return a[1]-b[1]});TR.forEach(function(t){t[3]?pine(t[0],t[1],t[2]):oak(t[0],t[1],t[2])});
      /* the nearest group, at the right, larger and against the light */
      pine(G.side+G.cw*.85,S*1.03,S*.13);oak(G.side+G.cw*.96,S*1.07,S*.21);l=l0;
    }
    if(G.mob){var fg=l.createLinearGradient(0,S*.8,0,S);fg.addColorStop(0,"rgba(8,22,51,0)");fg.addColorStop(1,"rgba(8,22,51,1)");l.fillStyle=fg;l.fillRect(0,S*.8,w,S*.2+2)}
    /* glitter: short strokes on the sun's path down the water */
    GL=[];var Rg=rng(47),cnt=G.mob?70:180;for(var g2=0;g2<cnt;g2++){var sb=shore(G.sx)-hz,v2=Math.pow(Rg(),1.3),y6=hz+S*.006+sb*v2,spread=S*(.008+.07*v2);GL.push([G.sx+(Rg()-.5)*2*spread*Math.pow(Rg(),.6),y6,(2+Rg()*7)*(.4+v2*1.6),Rg()*6.28,.6+Rg()*1.4])}
    RIP=[];var Rp=rng(53);for(var r2=0;r2<(G.mob?10:24);r2++)RIP.push([Rp(),Rp(),Rp()*6.28]);
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
    /* the sun settling toward the ridges (never fully gone) */
    var sink=sm(t/30)*G.R*.7+SP.v*G.R*.5,sx=G.sx,sy=G.sy+sink,pulse=.93+.07*Math.sin(t*.6);
    c.globalCompositeOperation="lighter";
    var hg=c.createRadialGradient(sx,sy,G.R*.6,sx,sy,G.R*7);hg.addColorStop(0,"rgba(255,206,130,"+(.36*pulse).toFixed(3)+")");hg.addColorStop(1,"rgba(255,180,100,0)");c.fillStyle=hg;c.fillRect(sx-G.R*7,sy-G.R*7,G.R*14,G.R*14);
    c.globalCompositeOperation="source-over";
    var dg=c.createRadialGradient(sx,sy-G.R*.2,0,sx,sy,G.R);dg.addColorStop(0,"#fff4d6");dg.addColorStop(.7,"#ffdf98");dg.addColorStop(1,"#f2c062");c.fillStyle=dg;c.beginPath();c.arc(sx,sy,G.R,0,Math.PI*2);c.fill();
    c.setTransform(1,0,0,1,0,0);c.drawImage(oLand,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* on the water: slow ripples, then the glittering path of the sun */
    c.save();c.clip(RIV);
    c.lineCap="round";
    for(var r=0;r<RIP.length;r++){var P=RIP[r],x=((P[1]*w+t*6*(.4+P[0]))%(w+200))-100,v=((P[0]+t*.004)%1),y=hz+(shore(x)-hz)*v,len=w*(.03+.06*v)*(.5+P[1]),a=.1*Math.sin(Math.PI*v)*(.6+.4*Math.sin(t*.5+P[2]));
      c.strokeStyle="rgba(230,214,220,"+a.toFixed(3)+")";c.lineWidth=1;c.beginPath();c.moveTo(x-len/2,y);c.lineTo(x+len/2,y);c.stroke()}
    for(var i=0;i<GL.length;i++){var g=GL[i],tw=.5+.5*Math.sin(t*g[4]*1.6+g[3]),a2=Math.pow(tw,3)*.9*(1-(g[1]-hz)/(S-hz)*.5);if(a2<.03)continue;
      c.strokeStyle="rgba(255,226,160,"+a2.toFixed(3)+")";c.lineWidth=G.mob?1:1.3;c.beginPath();c.moveTo(g[0]-g[2]/2,g[1]);c.lineTo(g[0]+g[2]/2,g[1]);c.stroke()}
    c.restore();
    if(oFore){c.setTransform(1,0,0,1,0,0);c.drawImage(oFore,0,0);c.setTransform(dpr,0,0,dpr,0,0)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mx,G.hz]:[w/2,h/2]}};
})();''')

# ---------------- story: a white oak in fine line ----------------
reg('story', r'''/* the story scene: "legacy" drawn as a white oak in fine line. The whole tree stands as a faint ghost from the start so
   the frame is never empty. Step 1 the ground and the roots draw in: the plan comes first (retirement, college, insurance,
   a will or trust). Step 2 the trunk and limbs grow in strength: the portfolio (a low-cost index core, active satellites,
   globally diversified). Step 3 the canopy leafs out in gold and a sapling rises beside it: coaching for life, the next
   generation. */
function tRng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function grow(x,y,ang,len,wd,d,maxD,R,out,tips,spread){
  var ex=x+Math.cos(ang)*len,ey=y+Math.sin(ang)*len,k=(R()-.5)*len*.28,cx=(x+ex)/2-Math.sin(ang)*k,cy=(y+ey)/2+Math.cos(ang)*k;
  out.push({d:'M'+x.toFixed(1)+' '+y.toFixed(1)+'Q'+cx.toFixed(1)+' '+cy.toFixed(1)+' '+ex.toFixed(1)+' '+ey.toFixed(1),w:wd,lv:d});
  if(d>=maxD){tips.push([ex,ey]);return}
  var n=d<1?3:(R()<.35?3:2);
  for(var i=0;i<n;i++){var f=n===1?0:(i/(n-1)-.5),a=ang+f*spread+(R()-.5)*.28;
    /* keep an oak's broad, rounded crown: limbs lean outward, never droop below level */
    if(spread>0&&a>-.12&&a<Math.PI/2)a=-.12;if(spread>0&&a<-Math.PI+.12)a=-Math.PI+.12;
    grow(ex,ey,a,len*(.7+R()*.12),Math.max(.7,wd*.64),d+1,maxD,R,out,tips,spread*.92)}
}
function scene(){
  var mob=MOBILE(),R=tRng(17),i;
  var GY=392,BR=[],TP=[],RT=[],RTP=[],SB=[],ST=[];
  /* trunk, then three main limbs */
  BR.push({d:'M400 '+GY+'C396 360 402 322 400 290',w:15,lv:0});
  [[-2.42,100],[-1.6,88],[-.74,102]].forEach(function(l){grow(400,290,l[0],l[1],10,1,6,R,BR,TP,1.05)});
  /* roots: spread under the ground line, wide and shallow */
  var Rr=tRng(29);for(i=0;i<7;i++){var a=Math.PI*(.1+.8*i/6)+(Rr()-.5)*.1;grow(400+(i-3)*5,GY,a,44+Rr()*22,6,0,3,Rr,RT,RTP,-.8)}
  /* the sapling beside it */
  var Rs=tRng(41);SB.push({d:'M652 '+GY+'Q650 372 652 354',w:2.6,lv:0});grow(652,354,-2.2,24,1.8,1,3,Rs,SB,ST,1);grow(652,354,-1.0,24,1.8,1,3,Rs,SB,ST,1);grow(652,354,-1.57,20,1.6,1,2,Rs,SB,ST,1);
  /* leaves: small almond shapes clustered at every tip, in six groups from the centre out */
  function leaves(tips,sc,R2,ng){var gs=[];for(var q=0;q<ng;q++)gs.push('');tips.forEach(function(t){var m=2+Math.floor(R2()*3),gi=Math.min(ng-1,Math.floor(Math.abs(t[0]-400)/330*ng+R2()*.8));
    for(var j=0;j<m;j++){var lx=t[0]+(R2()-.5)*14*sc,ly=t[1]+(R2()-.5)*12*sc,rot=(R2()*180)|0;gs[gi]+='<ellipse cx="'+lx.toFixed(1)+'" cy="'+ly.toFixed(1)+'" rx="'+(5.4*sc).toFixed(1)+'" ry="'+(2.3*sc).toFixed(1)+'" transform="rotate('+rot+' '+lx.toFixed(1)+' '+ly.toFixed(1)+')"/>'}});return gs}
  var LG=leaves(TP,1,tRng(53),6),SL=leaves(ST,.7,tRng(59),1);
  function paths(list,cls){return list.map(function(b){return '<path class="'+cls+'" data-lv="'+b.lv+'" style="stroke-width:'+b.w.toFixed(2)+'" d="'+b.d+'"/>'}).join('')}
  var o='<svg'+(mob?' class="mob" viewBox="0 0 400 380"':' viewBox="0 10 800 545"')+' aria-hidden="true">';
  o+=mob?'<g transform="translate(-24 66) scale(.56)">':'<g>';
  /* ground and soil strata */
  o+='<path class="gr" d="M40 '+GY+'H760"/><g class="soil">';var Rg=tRng(61);for(i=0;i<16;i++){var sx=60+Rg()*640,sy=GY+14+Rg()*140,sl=20+Rg()*60;o+='<path d="M'+sx.toFixed(0)+' '+sy.toFixed(0)+'h'+sl.toFixed(0)+'"/>'}o+='</g>';
  o+='<g id="tGh">'+paths(BR,'gh')+paths(RT,'gh')+'</g>';
  o+='<g id="tRt">'+paths(RT,'rt')+'</g><g id="tBr">'+paths(BR,'br')+'</g><g id="tSp">'+paths(SB,'br')+'</g>';
  o+=LG.map(function(g,k){return '<g class="lf" id="tL'+k+'">'+g+'</g>'}).join('')+'<g class="lf" id="tSL">'+SL[0]+'</g>';
  o+='</g>';
  /* labels */
  function pick(list,fn){return list.reduce(function(a,b){return fn(b)>fn(a)?b:a})}
  var rl=pick(RTP,function(p){return -p[0]}),rr=pick(RTP,function(p){return p[0]}),rd=pick(RTP,function(p){return p[1]-Math.abs(p[0]-400)*.2}),
      tl=pick(TP,function(p){return -p[0]}),tr=pick(TP,function(p){return p[0]}),tt=pick(TP,function(p){return -p[1]});
  if(mob){
    o+=lab("l1a","RETIREMENT",14,22,"s",null)+lab("l1b","COLLEGE",386,22,"e",null)+lab("l1c","INSURANCE · WILL OR TRUST",200,46,"m",null);
    o+=lab("l2a","LOW-COST CORE",14,22,"s",null)+lab("l2b","ACTIVE SATELLITES",386,22,"e",null)+lab("l2c","GLOBALLY DIVERSIFIED",200,46,"m",null);
    o+=lab("l3a","QUARTERLY REVIEWS",14,22,"s",null)+lab("l3b","LIFE CHANGES",386,22,"e",null)+lab("l3c","THE NEXT GENERATION",200,46,"m",null);
  }else{
    o+=lab("l1a","RETIREMENT",30,430,"s",rl)+lab("l1b","COLLEGE FUNDS",770,430,"e",rr)+lab("l1c","INSURANCE",30,500,"s",pick(RTP,function(p){return p[1]-Math.abs(p[0]-330)*1.5}))+lab("l1d","WILL OR TRUST",770,500,"e",pick(RTP,function(p){return p[1]-Math.abs(p[0]-470)*1.5}));
    o+=lab("l2a","CORE: INDEX FUNDS AND ETFS",30,350,"s",[398,330])+lab("l2b","ACTIVE FUNDS AS SATELLITES",770,350,"e",[tr[0]-30,tr[1]+40])+lab("l2c","GLOBALLY DIVERSIFIED",400,22,"m",[tt[0],tt[1]-4]);
    o+=lab("l3a","QUARTERLY REVIEWS",30,40,"s",tl)+lab("l3b","WHEN LIFE CHANGES",770,40,"e",tr)+lab("l3c","THE NEXT GENERATION",770,460,"e",[652,350]);
  }
  return o+'</svg>';
}
/* label: text at (x,y) with a leader to a point. side: "s" start-anchored, "e" end-anchored, "m" middle */
function lab(id,txt,x,y,side,to){var anc=side==="s"?"start":side==="e"?"end":"middle",lx=side==="s"?x-10:side==="e"?x+10:x,ly=side==="m"?y+8:y-4;
  var ld=to?'<path class="ld" d="M'+lx.toFixed(1)+' '+ly.toFixed(1)+'L'+to[0].toFixed(1)+' '+to[1].toFixed(1)+'"/><circle class="dt" cx="'+to[0].toFixed(1)+'" cy="'+to[1].toFixed(1)+'" r="2.6"/>':'';
  return '<g class="lb" id="'+id+'">'+ld+'<text x="'+x+'" y="'+y+'" text-anchor="'+anc+'" class="w">'+txt+'</text></g>'}
function storyDraw(svg){
  var q=function(s){return $(s,svg)},qq=function(s){return $$(s,svg)};
  var E={gh:q("#tGh"),rt:qq("#tRt path"),br:qq("#tBr path"),sp:qq("#tSp path"),lf:qq("[id^=tL]"),sl:q("#tSL"),
    l1:qq("#l1a,#l1b,#l1c,#l1d"),l2:qq("#l2a,#l2b,#l2c"),l3:qq("#l3a,#l3b,#l3c")};
  function prep(list){return list.map(function(p){var L=p.getTotalLength()+1;p.style.strokeDasharray=L+" "+L;return [p,L,+p.getAttribute("data-lv")]})}
  var RT=prep(E.rt),BRp=prep(E.br),SPp=prep(E.sp);
  function drawIn(list,s,maxLv){list.forEach(function(a){var st=a[2]/(maxLv+1)*.68,v=seg(s,st,st+.32);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);a[0].style.visibility=v>.002?"visible":"hidden"})}
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!E.gh.isConnected)return;
    var s1=seg(p,.02,.22),s2=seg(p,.36,.6),s3=seg(p,.7,.92),o1=s1*(1-seg(p,.3,.36)),o2=s2*(1-seg(p,.64,.7));
    svg.style.opacity=b.toFixed(3);
    E.gh.style.opacity=(.5*(1-.6*s2)).toFixed(3);
    drawIn(RT,s1,3);drawIn(BRp,s2,6);drawIn(SPp,s3,3);
    E.lf.forEach(function(g,k){g.style.opacity=seg(s3,k*.08,.45+k*.08).toFixed(3)});
    E.sl.style.opacity=seg(s3,.4,1).toFixed(3);
    show(E.l1,o1);show(E.l2,o2);show(E.l3,s3);
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
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a6adc4;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66708f;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:400;font-size:clamp(26px,2.2vw,36px);line-height:1.14;letter-spacing:-.012em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(74vh,680px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .gr{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.2}
.scene .soil path{fill:none;stroke:rgba(var(--boner),.16);stroke-width:1;stroke-dasharray:2 5}
.scene .gh{fill:none;stroke:rgba(var(--boner),.34);stroke-linecap:round}
.scene .br{fill:none;stroke:var(--bone);stroke-linecap:round}
.scene .rt{fill:none;stroke:var(--accL);stroke-linecap:round}
.scene .lf ellipse{fill:rgba(var(--accr),.28);stroke:var(--accL);stroke-width:.9}
.scene .lf{opacity:0}
.scene .ld{fill:none;stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .dt{fill:var(--accL)}
.scene text{font-family:var(--mono);font-weight:500;font-size:12.5px;letter-spacing:.14em;fill:#b9bfd2}
.scene text.w{fill:var(--bone)}
.scene .lb{opacity:0}''')

# ---------------- global swaps outside regions (colours / weights) ----------------
src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(8,22,51,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a6adc4}.rail span::before{background:var(--ink2);border-color:#66708f}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#b9bfd2}')
src = src.replace('.scene text{font-size:12px}', '.scene text{font-size:12.5px}')
src = src.replace('font-weight:300', 'font-weight:400').replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== Financial Legacy Management: navy dusk ground, ivory pages, their gold as the accent ===== */
.d1,.d2,.d3,.lede,.mani .txt,.cta .big,.stat .v{font-weight:400}
.d1{letter-spacing:-.025em}.hero-h{font-size:clamp(46px,6.6vw,124px);letter-spacing:-.03em;line-height:1.02}
.d2{letter-spacing:-.022em}.d3{letter-spacing:-.018em}.mani .txt{letter-spacing:-.018em}.cta .big{letter-spacing:-.026em}.stat .v{letter-spacing:-.025em}
.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em{font-weight:400}
.lede{line-height:1.3}
#pre .wm{font-family:'Libre Caslon Text',Georgia,serif;font-weight:400;color:var(--accL)}
#pre .mk path{stroke:var(--accL)}
.hero .eyebrow{color:var(--accL)}
.ftr .bigsvg{color:var(--bone)}
.ftr .disc{position:relative;z-index:1;max-width:72ch;margin:clamp(22px,2.4vw,34px) auto 0;text-align:center;font-size:13px;color:var(--stone)}
.ftr .fcv{opacity:.24!important}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD);grid-column:1/-1}
.cta .addr h3{margin-top:12px}
.cta .addr .mt{margin-top:14px;font-size:15px;overflow-wrap:anywhere}
.cta .cx2{grid-column:1/-1;margin-top:clamp(36px,4vw,56px);grid-template-columns:repeat(3,minmax(0,1fr))}
.pl3 .lab{margin:0 0 12px}
/* team: refined text-only (no published portraits), inline expand, no bio sheets */
.tm{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(36px,3.4vw,56px) clamp(28px,4vw,72px)}
.tm article{min-width:0;position:relative;padding-top:30px}
.tm .rule{position:absolute;left:0;right:0;top:0;height:1px;background:var(--hair)}
.tm .rule::after{content:"";position:absolute;inset:0;background:var(--accL);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--eo)}
.tm article:hover .rule::after{transform:scaleX(1)}
.tm h3{font-family:var(--disp);font-weight:400;font-size:clamp(28px,2.4vw,38px);line-height:1.1;letter-spacing:-.018em;margin:0 0 8px}
.tm .ttl{font-size:14.5px;color:var(--accL);margin:0 0 18px}
.tm .sm{font-size:16px;line-height:1.62;color:rgba(var(--boner),.84);margin:0 0 16px;max-width:52ch}
.tm .ct{display:flex;flex-wrap:wrap;gap:6px 22px;font-size:14.5px;margin:0 0 18px}
.tm .ct a{overflow-wrap:anywhere}
.tm details{border-top:1px solid var(--hair)}
.tm summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:14px 0;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase}
.tm summary::-webkit-details-marker{display:none}
.tm summary::after{content:"+";font-size:18px;line-height:1;color:var(--accL);transition:transform .3s var(--eo)}
.tm details[open] summary::after{transform:rotate(45deg)}
.tm details p{font-size:15px;line-height:1.62;color:var(--stone);margin:0 0 8px}
@media (max-width:860px){.tm{grid-template-columns:1fr}.cta .cx2{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:46vh;height:46svh}.scene svg.mob text{font-size:12px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = [m for m in re.findall(r'(?i)firelight|fort lauderdale|rick@|gouws', src)]
open(os.path.join(K, 'src', 'financiallegacy.src.html'), 'w', encoding='utf-8').write(src)
print('wrote src; leftovers:', len(leftover), set(leftover))
