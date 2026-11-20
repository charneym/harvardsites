#!/usr/bin/env python3
"""Assemble _kit/src/legacy-pa.src.html from the firelight engine regions (HOME-ONLY format).
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


INK = '#06142b'
reg('meta', '''<title>Legacy Advisory Services — Wealth management in Exton, Pennsylvania</title>
<meta name="description" content="Legacy Advisory Services, LLC is a registered investment adviser in Exton, Pennsylvania, building customized financial plans and investment portfolios balanced for safety, income, growth, taxes and inflation.">
<meta name="theme-color" content="#06142b">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23003366'/%3E%3Cpath d='M12 52V34a20 20 0 0 1 40 0v18h-9V34a11 11 0 0 0-22 0v18z' fill='%23f4f5f5'/%3E%3Cpath d='M28 13h8l-1 9h-6z' fill='%23f8bd00'/%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts Newsreader:400,400i; Public Sans:400,500; Libre Caslon Text:700*/")
reg('root', ''':root{
  --ink:#06142b;--inkr:6,20,43;--boner:244,245,245;--accr:248,189,0;--ink2:#0a1f3d;--ink3:#112b52;--deep:#030c1b;--navy:#003366;
  --bone:#f4f5f5;--bone2:#e8eaeb;--bone3:#dcdedf;
  --stone:#a7b2c3;--stoneD:#46546d;
  --acc:#f8bd00;--accL:#f8bd00;--accD:#7d5e00;
  --hair:rgba(244,245,245,.14);--hairD:rgba(6,20,43,.16);
  --disp:'Newsreader',Georgia,'Times New Roman',serif;
  --serif:'Newsreader',Georgia,serif;
  --sans:'Public Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Public Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#06142b 0%,#0d2c55 34%,#5a6a86 50%,#b99a5e 56%,#1a2c4a 64%,#0a1d38 80%,#06142b 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.logo{width:auto;height:21px;flex:none;overflow:visible}
.brand .bt{font:700 30px 'Libre Caslon Text',Georgia,serif;letter-spacing:.06em;fill:var(--bone)}
.brand .wt{font:500 10.5px/1.25 var(--mono);letter-spacing:.2em;text-transform:uppercase;color:var(--accL);max-width:8em;padding-top:2px}''')

reg('seen', '<script>try{if(sessionStorage.getItem("las-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M14 82V50a34 34 0 0 1 68 0v32M30 82V50a18 18 0 0 1 36 0v32M42 14l2 12h8l2-12"/></svg>
    <div class="wm"><span>LEGACY</span></div>
  </div>
  <span class="lab pl">Advisory Services · Exton, Pennsylvania</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="Legacy Advisory Services, home"><svg class="logo" viewBox="0 0 150 30" aria-hidden="true"><text x="0" y="26" class="bt">LEGACY</text></svg><span class="wt">Advisory Services</span></a>')
reg('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/services">Services</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/insights">Insights</a>
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
    <li><a href="#/insights">Insights</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>658 Exton Commons, Exton, PA</div>
    <div><span class="lab">Phone</span><br><a href="tel:+16105246801">610-524-6801</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Legacy Advisory Services</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="Legacy Advisory Services";\nvar PK="las";')

# ---------------- content ----------------
reg('content', r'''var FONTS=['400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Public Sans"','500 1em "Public Sans"','700 1em "Libre Caslon Text"'];
var TEL="+16105246801",TELT="610-524-6801",FAX="610-524-6806",MAIL="info@legacyadvisorypa.com";
var ADV="https://static.fmgsuite.com/media/documents/825176ec-8c34-420f-b270-babf55b50168.pdf",CRS="https://static.fmgsuite.com/media/documents/17786963-1c81-4151-a986-d07aefb3c0ea.pdf",IAPD="https://adviserinfo.sec.gov/firm/summary/147173",LS="https://www.legacyadvisorypa.com/";
var SHEETS=[],GROUPS=[];
/* [name, role, one-sentence summary] (legacyadvisorypa.com/team and Form ADV Part 2A, February 27, 2026) */
var TEAM=[
 ["Richard S. Wiedl, CFP®","Managing Partner","More than 20 years in financial planning and investment management, focused on tax-efficient strategies."],
 ["Martin A. Gruszka","Partner and Advisor · Chief Compliance Officer","Advises clients and oversees the firm’s operations and marketing; West Chester University."],
 ["Adam Varrenti III","Partner and Advisor · Chief Investment Officer","Oversees investment selection, after a 15-year career building personalized portfolios."]
];
var DOCS=[
 {d:"Our approach",s:"Legacy Advisory Services",t:"Risk-adjusted returns: how much risk stands behind a return",u:LS+"risk-adjusted-returns"},
 {d:"Our approach",s:"Legacy Advisory Services",t:"Diversification and asset allocation",u:LS+"diversification-and-asset-allocation"},
 {d:"Our approach",s:"Legacy Advisory Services",t:"Why your portfolio needs continuous monitoring",u:LS+"continuous-monitoring"},
 {d:"2026-02-27",s:"Form ADV Part 2A",t:"Our firm brochure: services, fees and practices",u:ADV},
 {d:"Form CRS",s:"Client relationship summary",t:"Form CRS: our services, fees, conflicts and conduct",u:CRS},
 {d:"SEC",s:"Adviser public disclosure",t:"Legacy Advisory Services, LLC on the SEC’s Investment Adviser Public Disclosure site",u:IAPD}
];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",services:"s-services",team:"s-team",insights:"s-insights",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function docRows(list){return '<ul class="rows">'+list.map(function(n){var dt=/^\d{4}-/.test(n.d)?'<time class="lab" datetime="'+n.d+'">'+fd(n.d)+'</time>':'<span class="lab">'+esc(n.d)+'</span>';
  return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm">'+dt+'<span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Partners</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function ico(n){var I={
  vault:'<rect x="6" y="10" width="52" height="44"/><circle cx="32" cy="32" r="12"/><path class="a" d="M32 20v24M20 32h24"/><path d="M12 54v4M52 54v4"/>',
  page:'<path d="M14 6h28l10 10v42H14z"/><path d="M42 6v10h10"/><path class="a" d="M22 28h22M22 36h22M22 44h14"/>',
  scale:'<path d="M32 8v48M18 56h28"/><path class="a" d="M10 18h44"/><path d="M10 18L4 36h12zM54 18l-6 18h12z"/><path d="M4 36a6 4 0 0 0 12 0M48 36a6 4 0 0 0 12 0"/>'};
  return '<svg viewBox="0 0 64 64" aria-hidden="true">'+I[n]+'</svg>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wealth management<span class="nomob"> · Exton, Pennsylvania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Building a legacy</span><span class="l">that will stand</span><span class="l">the test of <em>time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We analyze your current situation, risk profile and goals, then build a customized financial plan and investment portfolio around your unique needs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Schedule a consultation '+ARR+'</a><a class="btn" href="#/approach">How we work</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our philosophy</span>'+
   '<p class="txt" id="mani">You have spent considerable time and effort accumulating your assets. Now they should work as hard for you as you did, through a plan balanced for safety, income, growth, taxes <em>and inflation.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><span class="k">The year Legacy Advisory Services was founded in Exton</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$157M</span><span class="k">Client assets under continuous, discretionary management at year-end 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Partners who own the firm and review client accounts themselves</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with clients</span><h2 class="d3">A plan built <em>to last.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Listen</span><span>Goals</span><span>Plan</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We listen first.</h2><p>Our first meeting is a casual conversation. We gather and review your records (assets and liabilities, tax returns, investment statements, insurance policies, pension plans) to see clearly where you stand.</p></article>'+
     '<article class="step"><h2>Your goals, your risk.</h2><p>We assess your tolerance for risk and how much of your wealth belongs in short, medium and long-term horizons. There is no one-size-fits-all plan; yours is designed only once we see the whole picture.</p></article>'+
     '<article class="step"><h2>A plan in balance.</h2><p>Your plan weighs safety, income, growth, taxes and inflation. We implement it with a disciplined, unemotional asset allocation matched to the level of risk you accept.</p></article>'+
     '<article class="step"><h2>Watched and reviewed.</h2><p>Markets change daily, and so do lives. We monitor your portfolio continuously, report results at least quarterly, and review the plan with you by phone or in person.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Full service, <em>one plan.</em></h2></div><p data-r>As a full-service firm we can help in a variety of ways, coordinating your portfolio with the planning around it so that every part works toward the same goals.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Investment management</dt><dd>Stocks, bonds, exchange traded funds and government securities, in brokerage accounts, IRAs (traditional, Roth, SEP and SIMPLE), solo 401(k) and profit sharing plans.</dd></div>'+
    '<div><dt class="lab">Retirement planning</dt><dd>A personalized retirement plan, income replacement to keep the lifestyle you are accustomed to, 401(k) and 403(b) planning and Roth conversions.</dd></div>'+
    '<div><dt class="lab">Tax, estate and college</dt><dd>Strategies to keep more of what you have earned, to make sure your estate is in order, and to prepare for rising education costs.</dd></div>'+
    '<div><dt class="lab">Insurance</dt><dd>Life, long-term care, disability income, and individual and group health insurance, so your family and loved ones are covered.</dd></div>'+
   '</dl>'+
   '<p class="note-s" data-r>Our fees are published: an annual asset-based fee of 1.25% on accounts up to $500,000, 1.00% up to $2.5 million and 0.75% above, billed quarterly, or advice by the hour at $250. Full details are in our <a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2A</a>.</p>'+
  '</div></section>'+

  '<section class="sec dark2" data-theme="dark"><div class="wrap">'+
   '<div class="two"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d2 split">At a critical <em>point.</em></h2>'+
    '<p class="muted" data-r style="margin-top:28px;max-width:40ch">You have worked hard to accumulate your assets, and we work with individuals and families, as well as pension and profit sharing plans, trusts, estates, charitable organizations and businesses.</p></div>'+
   '<div><p class="lede" data-r style="margin-bottom:30px">We can help you:</p><ul class="aims">'+
    '<li><span>Put your money to work through a disciplined investment strategy.</span></li>'+
    '<li><span>Secure your future with a personalized retirement plan.</span></li>'+
    '<li><span>Replace your income in retirement and keep the lifestyle you are accustomed to.</span></li>'+
    '<li><span>Keep more of what you have earned, and make sure your estate is in order.</span></li>'+
    '<li><span>Prepare for one of life’s biggest investments: education.</span></li>'+
   '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-safe" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Safeguards</span><h2 class="d2 split">Your interests, <em>protected.</em></h2></div><p data-r>We are registered with the SEC as an investment adviser, and our Code of Ethics sets out our fiduciary duty to every client.</p></div>'+
   '<div class="pillars">'+
    '<div class="pl3">'+ico("vault")+'<span class="lab">Custody</span><h3>We never hold your assets</h3><p>Your accounts are held by an independent qualified custodian, such as Charles Schwab or Altruist. We never accept custody of client funds or securities.</p></div>'+
    '<div class="pl3">'+ico("page")+'<span class="lab">Reporting</span><h3>Statements from your custodian</h3><p>You receive account statements at least quarterly directly from your custodian, alongside our own quarterly report on your portfolio.</p></div>'+
    '<div class="pl3">'+ico("scale")+'<span class="lab">Conduct</span><h3>Advice without side payments</h3><p>We receive no compensation from third parties for our investment advice and pay no one for referrals. The firm has no legal or disciplinary events.</p></div>'+
   '</div></div></section>'+

  '<section class="sec dark" id="s-team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Three partners, <em>one office.</em></h2></div><p data-r>The firm is owned by its three partners, and they review client accounts themselves, from our office at Exton Commons.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="s-insights" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Insights and disclosures</span><h2 class="d3 split">Read before <em>you invest.</em></h2></div></div>'+docRows(DOCS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Consultation</span>'+
   '<h2 class="big split">We’d love to <em>hear from you.</em></h2>'+
   '<p class="sub" data-r>Give us a call or send a note and we’ll get started, with a casual conversation about where you are today and where you want to be.</p>'+
   '<div class="act" data-r><a class="btn solid" href="tel:'+TEL+'">Call '+TELT+' '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">Email us</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Office</span><h3>Exton, Pennsylvania</h3><p>Legacy Advisory Services, LLC<br>658 Exton Commons<br>Exton, PA 19341</p></div>'+
    '<div class="offs" data-r><div><span class="lab">Office</span><b><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></b></div><div><span class="lab">Fax</span><b>'+FAX+'</b></div>'+
     '<div><span class="lab">Email</span><b><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></b></div>'+
     '<div><span class="lab">Disclosures</span><b class="em"><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a> · <a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a></b></div></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>658 Exton Commons<br>Exton, PA 19341</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/insights">Insights</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+IAPD+'" target="_blank" rel="noopener">SEC adviser disclosure</a><br><a class="ul" href="https://brokercheck.finra.org/" target="_blank" rel="noopener">FINRA BrokerCheck</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 250 44" aria-hidden="true"><text x="125" y="36" text-anchor="middle" style="font-family:\'Libre Caslon Text\',Georgia,serif;font-weight:700;font-size:44px;letter-spacing:.06em">LEGACY</text></svg>'+
  '<p class="disc">Investment advisory services offered through Legacy Advisory Services, LLC, a Registered Investment Advisor. Securities offered through Fortune Financial Services, LLC, Member FINRA/SIPC. Legacy Advisory Services, LLC and Fortune Financial Services, LLC are separate entities.</p>'+
  '<div class="legal"><span class="lab">© 2026 Legacy Advisory Services, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){return {k:"home",v:vHome,t:"Legacy Advisory Services — Wealth management in Exton, Pennsylvania",x:"Home"}}''')

# ---------------- hero field: sunset over Chester County farmland ----------------
reg('field', r'''/* ================= HERO FIELD: evening over the rolling farmland of Chester County, near the firm's Exton office
   (their own site leads with a photo of this countryside: hills, fields and a split-rail fence). Layered hills fade into the
   valley haze, a fieldstone bank barn and an old shade tree stand on the near rise against the low gold sun, field rows
   catch the light, and a split-rail fence runs through the foreground. It moves on its own (haze drifts, the sun settles,
   birds cross, the barn windows glow) with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oLand=null,MIST=[],BIRDS=[],WIN=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function mix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
  function rgb(a,al){return "rgba("+(a[0]|0)+","+(a[1]|0)+","+(a[2]|0)+","+(al==null?1:al)+")"}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var S=mob?Math.min(h*.36,w*.8):h,hz=S*(mob?.46:.54);
    return {mob:mob,side:side,cw:cw,S:S,hz:hz,sx:mob?w*.3:side+cw*.875,sy:hz-S*(mob?.035:.045),R:Math.max(9,S*(mob?.045:.036)),
      bx:mob?w*.64:side+cw*.665};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  var N=6,FAR=[132,146,172],NEAR=[10,27,52],HAZE=[222,196,150];
  function baseY(i){var f=i/(N-1);return G.hz+(G.S-G.hz)*(.03+.62*Math.pow(f,1.25))}
  function hillY(i,x){var f=i/(N-1),S=G.S,amp=S*(G.mob?(.03+.07*f):(.025+.075*f)),R=rng(211+i*53);
    var p1=R()*6.28,p2=R()*6.28,p3=R()*6.28,wl=w*(.16+.3*f)+260;
    var n=.5+.5*(.62*Math.sin(x/wl+p1)+.28*Math.sin(x/(wl*.43)+p2)+.1*Math.sin(x/(wl*.17)+p3));
    return baseY(i)-amp*n}
  /* the barn sits on the second-nearest rise; that hill is lifted into a gentle knoll under it */
  function knollY(x){var i=N-2,y=hillY(i,x),d=(x-G.bx)/(G.S*(G.mob?.5:.42));return y-G.S*(G.mob?.03:.04)*Math.exp(-d*d)}
  function Y(i,x){return i===N-2?knollY(x):hillY(i,x)}
  function build(){
    var S=G.S,hz=G.hz,A=mk(S+2),g=A[1];oSky=A[0];
    /* evening sky: the logo's navy overhead, easing to a gold horizon around the low sun */
    var sky=g.createLinearGradient(0,0,0,hz+S*.06);
    sky.addColorStop(0,"#06142b");sky.addColorStop(.28,"#0b2a52");sky.addColorStop(.55,"#3d5478");sky.addColorStop(.76,"#93896f");sky.addColorStop(.9,"#e2b45a");sky.addColorStop(1,"#f6d27a");
    g.fillStyle=sky;g.fillRect(0,0,w,S+2);
    var gl=g.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,S*.8);gl.addColorStop(0,"rgba(255,222,140,.6)");gl.addColorStop(.22,"rgba(248,189,0,.2)");gl.addColorStop(1,"rgba(248,189,0,0)");
    g.fillStyle=gl;g.fillRect(0,0,w,S+2);
    /* long thin clouds, lit from below */
    var R=rng(19);for(var k=0;k<(G.mob?5:10);k++){var cy=hz*(.16+R()*.56),cx=R()*w,cwid=w*(.08+R()*.22),ch=S*(.003+R()*.006),near=1-Math.min(1,Math.abs(cx-G.sx)/(w*.6)),a=.05+.16*near;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(250,214,140,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(250,214,140,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    var B=mk(S+2),l=B[1];oLand=B[0];
    for(var i=0;i<N;i++){var f=i/(N-1),col=mix(FAR,NEAR,Math.pow(f,.62)),top=baseY(i)-S*.12,bot=i<N-1?Math.min(S+2,baseY(i+1)+S*.03):S+2;
      var gr=l.createLinearGradient(0,top,0,bot);gr.addColorStop(0,rgb(mix(col,HAZE,.08*(1-f))));gr.addColorStop(.55,rgb(col));gr.addColorStop(1,rgb(mix(col,HAZE,.3*(1-f*.8))));
      l.fillStyle=gr;l.beginPath();l.moveTo(-4,S+2);for(var x=-4;x<=w+6;x+=3)l.lineTo(x,Y(i,x));l.lineTo(w+6,S+2);l.closePath();l.fill();
      /* the sun's warmth on the far slopes, and a gold rim along each crest near it */
      if(i<N-1){l.save();l.globalCompositeOperation="source-atop";var sw=l.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,w*(.5-.06*i));sw.addColorStop(0,"rgba(255,206,110,"+(.4-.07*i).toFixed(3)+")");sw.addColorStop(1,"rgba(255,206,110,0)");l.fillStyle=sw;l.fillRect(0,0,w,S+2);
        l.strokeStyle="rgba(255,214,120,"+(.62-.1*i).toFixed(3)+")";l.lineWidth=1.1;l.beginPath();var x0=Math.max(-4,G.sx-w*.45),x1=Math.min(w+4,G.sx+w*.45);for(var x2=x0;x2<=x1;x2+=3){x2===x0?l.moveTo(x2,Y(i,x2)+.6):l.lineTo(x2,Y(i,x2)+.6)}l.stroke();l.restore()}
      /* hedgerows and woodlots on the far hills */
      if(i>=1&&i<=3){var Rt=rng(700+i),cnt=G.mob?12:30,th=S*(.004+.004*f);l.fillStyle=rgb(mix(col,NEAR,.12));
        for(var q=0;q<cnt;q++){var tx=Rt()*w,n2=4+Math.floor(Rt()*10),ty=Y(i,tx)+th*.4;if(Math.abs(tx-G.sx)<w*.04&&i===1)continue;for(var r=0;r<n2;r++){var rx=tx+(r-n2/2)*th*1.1,rr=th*(.6+Rt()*.6);l.beginPath();l.ellipse(rx,Y(i,rx)+th*.4-rr*.45,rr*1.15,rr*.7,0,0,Math.PI*2);l.fill()}}}
      /* plough lines on the mid and near fields, following the contour, catching the light near the sun */
      if(i===2||i===3||i===N-2){var Rf=rng(900+i),nf=G.mob?4:7,dep=(i<N-1?baseY(i+1):S)-baseY(i);
        for(var r2=0;r2<nf;r2++){var off=dep*(.12+.11*r2),xs=Rf()*w*.6-w*.1,xe=xs+w*(.35+Rf()*.5),lit=.05+.07*(1-f);
          l.strokeStyle="rgba(248,206,120,"+lit.toFixed(3)+")";l.lineWidth=1;l.beginPath();for(var x3=xs;x3<=xe;x3+=4){var yy=Y(i,x3)+off*(1+.15*Math.sin(x3/90+r2));x3===xs?l.moveTo(x3,yy):l.lineTo(x3,yy)}l.stroke()}}
      if(i===N-2){barn(l,col);oak(l,G.bx-G.S*(G.mob?.24:.24),knollY(G.bx-G.S*(G.mob?.24:.24)),col)}
    }
    fence(l);
    MIST=[];var Rm=rng(43);for(var m=0;m<(G.mob?6:11);m++){MIST.push([Rm()*w,1+(m%(N-2)),.4+Rm()*.6,(Rm()-.5)*2,Rm()*6.28])}
    BIRDS=[];var Rb=rng(83);for(var b=0;b<(G.mob?3:5);b++)BIRDS.push([Rb(),.22+Rb()*.32,.6+Rb()*.5,Rb()*6.28,Rb()*.06]);
  }
  /* a Pennsylvania bank barn: fieldstone gable end facing us, a long slate roof receding, the forebay overhanging the
     lower stone stable, two louvred ventilators on the ridge and a stone silo; warm windows in the stable level */
  function barn(g,col){
    var x=G.bx,y=knollY(x)+G.S*.004,H=G.S*(G.mob?.13:.118),gw=H*.92,L=H*1.6,wall=H*.5,lx=x-(gw+L)/2,
        dark=rgb(mix(col,NEAR,.55)),face=rgb(mix(col,[40,52,74],.5)),roof=rgb(mix(col,NEAR,.25));
    WIN=[];
    /* silo behind the barn's far end */
    var sx=lx+gw+L+H*.12,sw2=H*.3,sh=H*1.12;g.fillStyle=dark;g.fillRect(sx-sw2/2,y-sh,sw2,sh);g.beginPath();g.ellipse(sx,y-sh,sw2/2,sw2*.42,0,Math.PI,0);g.fill();
    g.strokeStyle="rgba(255,206,110,.42)";g.lineWidth=1;g.beginPath();g.moveTo(sx+sw2/2,y-sh);g.lineTo(sx+sw2/2,y-H*.2);g.stroke();
    /* the long side: lower stone stable, forebay above */
    g.fillStyle=dark;g.beginPath();g.moveTo(lx+gw,y);g.lineTo(lx+gw+L,y-H*.04);g.lineTo(lx+gw+L,y-wall);g.lineTo(lx+gw,y-wall);g.closePath();g.fill();
    g.fillStyle=face;g.fillRect(lx+gw,y-wall*.96,L,wall*.42);
    g.fillStyle=dark;g.fillRect(lx+gw-H*.02,y-wall*.56,L+H*.04,H*.035);
    /* roof plane */
    g.fillStyle=roof;g.beginPath();g.moveTo(lx+gw/2,y-H);g.lineTo(lx+gw/2+L,y-H);g.lineTo(lx+gw+L+H*.06,y-wall-H*.02);g.lineTo(lx+gw-H*.02,y-wall-H*.02);g.closePath();g.fill();
    g.strokeStyle="rgba(255,214,120,.75)";g.lineWidth=1.2;g.beginPath();g.moveTo(lx+gw/2,y-H);g.lineTo(lx+gw/2+L,y-H);g.lineTo(lx+gw+L+H*.06,y-wall-H*.02);g.stroke();
    /* ventilators on the ridge */
    g.fillStyle=dark;[.3,.7].forEach(function(t){var vx=lx+gw/2+L*t,vw=H*.11,vh=H*.13;g.fillRect(vx-vw/2,y-H-vh,vw,vh);g.beginPath();g.moveTo(vx-vw*.8,y-H-vh);g.lineTo(vx,y-H-vh*1.6);g.lineTo(vx+vw*.8,y-H-vh);g.closePath();g.fill()});
    /* gable end: fieldstone, a touch lighter, with its coursing */
    g.fillStyle=face;g.beginPath();g.moveTo(lx,y);g.lineTo(lx+gw,y);g.lineTo(lx+gw,y-wall);g.lineTo(lx+gw/2,y-H);g.lineTo(lx,y-wall);g.closePath();g.fill();
    g.save();g.clip();var Rs=rng(31);g.strokeStyle="rgba(200,190,170,.13)";g.lineWidth=.8;
    for(var cy=y-H*.04;cy>y-H;cy-=H*.075){g.beginPath();g.moveTo(lx,cy);g.lineTo(lx+gw,cy);g.stroke();for(var cx=lx+Rs()*H*.12;cx<lx+gw;cx+=H*(.1+Rs()*.08)){g.beginPath();g.moveTo(cx,cy);g.lineTo(cx,cy-H*.075);g.stroke()}}
    g.restore();
    g.strokeStyle="rgba(255,214,120,.55)";g.lineWidth=1;g.beginPath();g.moveTo(lx,y-wall);g.lineTo(lx+gw/2,y-H);g.lineTo(lx+gw,y-wall);g.stroke();
    /* the hay-door and the stable windows */
    g.fillStyle=dark;g.fillRect(lx+gw*.38,y-wall-H*.26,gw*.24,H*.2);
    [[.2,.2],[.62,.2]].forEach(function(p){WIN.push([lx+gw*p[0],y-H*p[1],gw*.17,H*.11])});
    for(var k=0;k<4;k++)WIN.push([lx+gw+L*(.12+.22*k),y-wall*.86,L*.07,H*.09]);
  }
  /* an old shade tree beside the barn, backlit, the sun catching the edge of its crown */
  function oak(g0,x,y,col){var T=mk(G.S+2),g=T[1],H=G.S*(G.mob?.2:.19),R=rng(57),dark=rgb(mix(col,NEAR,.6));
    g.fillStyle=dark;g.beginPath();g.moveTo(x-H*.05,y);g.lineTo(x-H*.025,y-H*.45);g.lineTo(x+H*.025,y-H*.45);g.lineTo(x+H*.06,y);g.closePath();g.fill();
    g.strokeStyle=dark;g.lineCap="round";[[-1,.42],[1,.38],[-.5,.6],[.6,.62]].forEach(function(b){g.lineWidth=H*.02;g.beginPath();g.moveTo(x,y-H*.4);g.quadraticCurveTo(x+b[0]*H*.12,y-H*b[1]-H*.08,x+b[0]*H*.26,y-H*b[1]-H*.16);g.stroke()});
    var P=[];for(var k=0;k<150;k++){var a=R()*Math.PI*2,r=Math.pow(R(),.4),px=x+Math.cos(a)*r*H*.44,py=y-H*.7+Math.sin(a)*r*H*.27*(Math.sin(a)>0?.8:1),rr=H*(.025+R()*.04)*(1.3-r*.5);P.push([px,py,rr])}
    P.forEach(function(p){g.beginPath();g.arc(p[0],p[1],p[2],0,Math.PI*2);g.fill()});
    g.save();g.globalCompositeOperation="source-atop";var rim=g.createLinearGradient(x+H*.15,0,x+H*.55,0);rim.addColorStop(0,"rgba(255,206,110,0)");rim.addColorStop(1,"rgba(255,206,110,.32)");g.fillStyle=rim;g.fillRect(x,y-H*1.1,H*.6,H*1.1);g.restore();g0.save();g0.setTransform(1,0,0,1,0,0);g0.drawImage(T[0],0,0);g0.restore()}
  /* split-rail fence along the near pasture, posts receding to the right */
  function fence(g){var S=G.S,mob=G.mob,x0=mob?w*.04:G.side+G.cw*.5,y0=S*(mob?.9:.95),x1=w+S*.1,y1=S*(mob?.8:.81),n=mob?6:8,R=rng(5),dark="rgb(4,13,29)";
    var P=[];for(var k=0;k<=n;k++){var t=Math.pow(k/n,.8),px=x0+(x1-x0)*t,py=y0+(y1-y0)*t,sc=1-.6*t;P.push([px,py,sc])}
    for(var k2=0;k2<n;k2++){var a=P[k2],b=P[k2+1];[.25,.55,.85].forEach(function(r){var ha=S*.13*a[2],hb=S*.13*b[2],ya=a[1]-ha*r,yb=b[1]-hb*r,th=Math.max(1.5,S*.009*(a[2]+b[2])/2);
      g.fillStyle=dark;g.beginPath();g.moveTo(a[0],ya-th/2);g.quadraticCurveTo((a[0]+b[0])/2,(ya+yb)/2+th*.7,b[0],yb-th/2);g.lineTo(b[0],yb+th/2);g.quadraticCurveTo((a[0]+b[0])/2,(ya+yb)/2+th*1.7,a[0],ya+th/2);g.closePath();g.fill();
      g.strokeStyle="rgba(255,206,110,.4)";g.lineWidth=1;g.beginPath();g.moveTo(a[0],ya-th/2);g.quadraticCurveTo((a[0]+b[0])/2,(ya+yb)/2+th*.7,b[0],yb-th/2);g.stroke()})}
    P.forEach(function(p){var ph=S*.16*p[2],pw=Math.max(3,S*.024*p[2]);g.fillStyle=dark;g.fillRect(p[0]-pw/2,p[1]-ph,pw,ph+S*.02);g.strokeStyle="rgba(255,206,110,.45)";g.lineWidth=1;g.beginPath();g.moveTo(p[0]+pw/2,p[1]-ph);g.lineTo(p[0]+pw/2,p[1]-ph*.4);g.stroke()});
    /* tall grass at the foot of the fence */
    g.strokeStyle=dark;g.lineWidth=1.1;for(var q=0;q<(mob?60:150);q++){var u=R(),gx=x0-S*.1+(x1-x0+S*.1)*u,gy=y0+(y1-y0)*Math.min(1,Math.max(0,(gx-x0)/(x1-x0)))+S*.012,gh=S*(.015+R()*.03)*(1-.5*u);g.beginPath();g.moveTo(gx,gy);g.quadraticCurveTo(gx+gh*.2,gy-gh*.6,gx+gh*(R()-.3)*.6,gy-gh);g.stroke()}}
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
    /* the sun, settling slowly toward the far hills */
    var sink=sm(t/30)*G.R*.7+SP.v*G.R*.8,sx=G.sx,sy=G.sy+sink,pulse=.93+.07*Math.sin(t*.6);
    c.globalCompositeOperation="lighter";
    var hg=c.createRadialGradient(sx,sy,G.R*.6,sx,sy,G.R*8);hg.addColorStop(0,"rgba(255,206,110,"+(.36*pulse).toFixed(3)+")");hg.addColorStop(1,"rgba(248,189,0,0)");c.fillStyle=hg;c.fillRect(sx-G.R*8,sy-G.R*8,G.R*16,G.R*16);
    c.globalCompositeOperation="source-over";
    var dg=c.createRadialGradient(sx,sy-G.R*.2,0,sx,sy,G.R);dg.addColorStop(0,"#fff7de");dg.addColorStop(.7,"#ffe08c");dg.addColorStop(1,"#f8c52a");c.fillStyle=dg;c.beginPath();c.arc(sx,sy,G.R,0,Math.PI*2);c.fill();
    /* birds heading home */
    c.strokeStyle="rgba(6,20,43,.7)";c.lineCap="round";c.lineJoin="round";
    for(var b=0;b<BIRDS.length;b++){var B=BIRDS[b],sp=.011*B[2],p=((B[0]+t*sp)%1+1)%1,bx=w+30-p*(w+60),by=hz*B[1]+Math.sin(t*.4+B[3])*S*.01,s=(G.mob?3.2:5)*(1-B[4]*4),fl=Math.sin(t*5*B[2]+B[3]);
      c.lineWidth=Math.max(1,s*.28);c.beginPath();c.moveTo(bx-s,by-s*.35*fl);c.quadraticCurveTo(bx-s*.4,by-s*.5*fl-s*.1,bx,by);c.quadraticCurveTo(bx+s*.4,by-s*.5*fl-s*.1,bx+s,by-s*.35*fl);c.stroke()}
    c.setTransform(1,0,0,1,0,0);c.drawImage(oLand,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* lamplight in the barn windows */
    for(var k=0;k<WIN.length;k++){var W=WIN[k],fl2=.82+.18*Math.sin(t*(.5+k*.13)+k);c.fillStyle="rgba(255,206,110,"+(.78*fl2).toFixed(3)+")";c.fillRect(W[0],W[1],W[2],W[3]);
      var wg=c.createRadialGradient(W[0]+W[2]/2,W[1]+W[3]/2,0,W[0]+W[2]/2,W[1]+W[3]/2,W[3]*2.2);wg.addColorStop(0,"rgba(248,189,0,"+(.22*fl2).toFixed(3)+")");wg.addColorStop(1,"rgba(248,189,0,0)");c.fillStyle=wg;c.fillRect(W[0]-W[3]*2,W[1]-W[3]*2,W[2]+W[3]*4,W[3]*5)}
    /* evening haze drifting along the valleys */
    for(var m=0;m<MIST.length;m++){var M=MIST[m],li=M[1],f=li/(N-1),my=baseY(li)+S*.012,mx=((M[0]+t*(4+5*M[2])*(M[3]>0?1:-1))%(w+600)+(w+600))%(w+600)-300,mw=w*(.22+.2*M[2]),mh=S*(.016+.018*f),a=(.1+.05*Math.sin(t*.2+M[4]))*(1-f*.6);
      c.save();c.translate(mx,my);c.scale(1,mh/mw);var mg=c.createRadialGradient(0,0,0,0,0,mw);mg.addColorStop(0,"rgba(232,214,180,"+a.toFixed(3)+")");mg.addColorStop(1,"rgba(232,214,180,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,mw,0,Math.PI*2);c.fill();c.restore()}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.bx,G.S*.9]:[w/2,h/2]}};
})();''')

# ---------------- story: a stone arch bridge, built step by step ----------------
reg('story', r'''/* the story scene: ONE fieldstone arch bridge (Chester County's countryside is full of them), built in front of you as the
   firm's planning process unfolds (BL/BY). Step 1 the foundations: the two abutments set into the banks, your records.
   Step 2 the timber centering that gives the arch its shape: your goals, risk and horizons. Step 3 the arch stones go on
   from both sides, balanced, and the gold keystone locks them: safety, income, growth, taxes, inflation. Step 4 the
   centering comes away, the spandrels and deck go on, and the bridge stands on its own: monitored and reviewed. */
var AB={};
function f1(n){return n.toFixed(1)}
function pol(a,r){var t=a*Math.PI/180;return [AB.cx+Math.cos(t)*r,AB.cy-Math.sin(t)*r]}
function lab(id,txt,x,y,side,to){var anc=side==="s"?"start":side==="e"?"end":"middle",lx=side==="s"?x-10:side==="e"?x+10:x,ly=side==="m"?y+8:y-4;
  var ld=to?'<path class="ld" d="M'+f1(lx)+' '+f1(ly)+'L'+f1(to[0])+' '+f1(to[1])+'"/><circle class="dt" cx="'+f1(to[0])+'" cy="'+f1(to[1])+'" r="2.6"/>':'';
  return '<g class="lb" id="'+id+'">'+ld+'<text x="'+f1(x)+'" y="'+f1(y)+'" text-anchor="'+anc+'" class="w">'+txt+'</text></g>'}
function courses(x0,y0,x1,y1,hh,R){var o='';for(var y=y1-hh,row=0;y>y0-.1;y-=hh,row++){o+='M'+f1(x0)+' '+f1(y)+'H'+f1(x1);var off=(row%2)?hh*.9:0;for(var x=x0+hh*1.1+off+R()*hh*.4;x<x1-hh*.4;x+=hh*(1.6+R()*.7))o+='M'+f1(x)+' '+f1(y)+'V'+f1(y+hh)}return o}
function scene(){
  var mob=MOBILE();
  AB=mob?{cx:200,cy:262,R:92,R2:118,deck:136,par:120,bed:322,wl:296,ab:42,x0:16,x1:384,vb:"0 0 400 380"}:{cx:400,cy:352,R:150,R2:190,deck:150,par:122,bed:446,wl:404,ab:72,x0:70,x1:730,vb:"0 10 800 530"};
  var A=AB,R=function(){var s=17;return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}();
  var lL=A.cx-A.R,lR=A.cx+A.R,oL=A.cx-A.R2,oR=A.cx+A.R2,aL=lL-A.ab,aR=lR+A.ab;
  var o='<svg'+(mob?' class="mob"':'')+' viewBox="'+A.vb+'" aria-hidden="true"><defs><pattern id="ht" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V4" stroke="rgba(244,245,245,.2)" stroke-width="1"/></pattern></defs>';
  /* banks and creek */
  var bankL='M'+f1(A.x0-40)+' '+f1(A.deck)+'H'+f1(A.x0)+'L'+f1(aL)+' '+f1(A.cy-A.R*.1)+'L'+f1(aL)+' '+f1(A.bed),bankR='M'+f1(A.x1+40)+' '+f1(A.deck)+'H'+f1(A.x1)+'L'+f1(aR)+' '+f1(A.cy-A.R*.1)+'L'+f1(aR)+' '+f1(A.bed);
  var eL='M'+f1(A.x0-40)+' '+f1(A.deck)+'H'+f1(A.x0)+'L'+f1(aL)+' '+f1(A.cy-A.R*.1)+'V'+f1(A.bed)+'H'+f1(A.x0-40)+'Z',eR='M'+f1(A.x1+40)+' '+f1(A.deck)+'H'+f1(A.x1)+'L'+f1(aR)+' '+f1(A.cy-A.R*.1)+'V'+f1(A.bed)+'H'+f1(A.x1+40)+'Z';
  o+='<g id="scGr"><path class="ea" d="'+eL+'"/><path class="ea" d="'+eR+'"/><path class="bk" d="'+bankL+'"/><path class="bk" d="'+bankR+'"/><path class="bed" d="M'+f1(aL-30)+' '+f1(A.bed)+'H'+f1(aR+30)+'"/>';
  for(var k=0;k<4;k++){var wy=A.wl+k*(A.bed-A.wl)/4.2,ws='M'+f1(lL+6)+' '+f1(wy);for(var x=lL+6;x<lR-6;x+=18)ws+='q4.5 -2.4 9 0t9 0';o+='<path class="wv" d="'+ws+'"/>'}
  o+='</g>';
  /* the abutments, in coursed fieldstone */
  var hh=mob?11:15;
  o+='<g id="scAb"><path class="st" d="M'+f1(aL)+' '+f1(A.cy)+'H'+f1(lL)+'V'+f1(A.bed)+'H'+f1(aL)+'Z"/><path class="st" d="M'+f1(lR)+' '+f1(A.cy)+'H'+f1(aR)+'V'+f1(A.bed)+'H'+f1(lR)+'Z"/>'+
    '<path class="jn" d="'+courses(aL,A.cy,lL,A.bed,hh,R)+courses(lR,A.cy,aR,A.bed,hh,R)+'"/></g>';
  /* the timber centering */
  var ce='M'+f1(lL)+' '+f1(A.cy)+'A'+A.R+' '+A.R+' 0 0 1 '+f1(lR)+' '+f1(A.cy),ci=A.R*.8,ct='M'+f1(A.cx-ci)+' '+f1(A.cy)+'A'+f1(ci)+' '+f1(ci)+' 0 0 1 '+f1(A.cx+ci)+' '+f1(A.cy)+'M'+f1(lL)+' '+f1(A.cy)+'H'+f1(lR);
  for(var a=15;a<180;a+=15){var p=pol(a,A.R-1),q=pol(a,ci);ct+='M'+f1(q[0])+' '+f1(q[1])+'L'+f1(p[0])+' '+f1(p[1])}
  [-.62,0,.62].forEach(function(t){var x=A.cx+t*A.R;ct+='M'+f1(x)+' '+f1(t===0?A.cy-ci:A.cy)+'V'+f1(A.wl+4)});
  ct+='M'+f1(A.cx-A.R*.62)+' '+f1(A.cy)+'L'+f1(A.cx)+' '+f1(A.cy-ci)+'L'+f1(A.cx+A.R*.62)+' '+f1(A.cy);
  o+='<g id="scCe"><path class="tm2" id="scCa" d="'+ce+'"/><path class="tm3" id="scCt" d="'+ct+'"/></g>';
  /* the spandrel walls, deck and parapet (step 4), behind the arch ring */
  var sp='M'+f1(A.x0)+' '+f1(A.deck)+'H'+f1(A.x1)+'L'+f1(aR)+' '+f1(A.cy)+'H'+f1(oR)+'A'+A.R2+' '+A.R2+' 0 0 0 '+f1(oL)+' '+f1(A.cy)+'H'+f1(aL)+'Z';
  o+='<g id="scSp"><path class="spf" d="'+sp+'"/><clipPath id="spc"><path d="'+sp+'"/></clipPath><path class="jn" clip-path="url(#spc)" d="'+courses(A.x0,A.deck,A.x1,A.cy,hh*1.15,R)+'"/>'+
    '<path class="par" d="M'+f1(A.x0-6)+' '+f1(A.deck)+'V'+f1(A.par)+'H'+f1(A.x1+6)+'V'+f1(A.deck)+'Z"/><path class="cop" d="M'+f1(A.x0-10)+' '+f1(A.par)+'H'+f1(A.x1+10)+'"/></g>';
  /* the arch ring: voussoirs laid from both springings, the keystone last */
  var n=17,g=.55,vs='';
  for(var i=0;i<n;i++){var a0=180-i*180/n+g,a1=180-(i+1)*180/n-g,k=i===(n-1)/2,r2=k?A.R2+(mob?6:9):A.R2,P1=pol(a0,A.R),P2=pol(a0,r2),P3=pol(a1,r2),P4=pol(a1,A.R);
    vs+='<path class="vs'+(k?' ks':'')+'" data-i="'+i+'" d="M'+f1(P1[0])+' '+f1(P1[1])+'L'+f1(P2[0])+' '+f1(P2[1])+'A'+r2+' '+r2+' 0 0 1 '+f1(P3[0])+' '+f1(P3[1])+'L'+f1(P4[0])+' '+f1(P4[1])+'A'+A.R+' '+A.R+' 0 0 0 '+f1(P1[0])+' '+f1(P1[1])+'Z"/>'}
  o+='<g id="scVs">'+vs+'</g>';
  /* labels */
  var mid=function(i){return pol(180-(i+.5)*180/n,(A.R+A.R2)/2)};
  if(mob){
    o+=lab("l1a","ASSETS",14,30,"s",null)+lab("l1b","INSURANCE",386,30,"e",null)+lab("l1c","TAX RETURNS",200,58,"m",null);
    o+=lab("l2a","YOUR GOALS",14,30,"s",null)+lab("l2b","RISK TOLERANCE",386,30,"e",null)+lab("l2c","SHORT TO LONG TERM",200,58,"m",null);
    var F=[["INFLATION",160],["INCOME",125],["SAFETY",90],["GROWTH",55],["TAXES",20]];
    o+=F.map(function(f,j){var p=pol(f[1],A.R2+(j===2?34:26));return lab("l3"+"abcde"[j],f[0],p[0],p[1]+(j===2?-4:4),j<2?"e":j>2?"s":"m",null)}).join("");
    o+=lab("l4a","MONITORED",14,30,"s",null)+lab("l4b","REPORTED",386,30,"e",null)+lab("l4c","REVIEWED WITH YOU",200,58,"m",null);
  }else{
    var aLc=[(aL+lL)/2,A.cy+44],aRc=[(aR+lR)/2,A.cy+44];
    o+=lab("l1a","ASSETS &amp; LIABILITIES",30,190,"s",aLc)+lab("l1b","INSURANCE &amp; PENSIONS",770,190,"e",aRc)+lab("l1c","TAX RETURNS &amp; STATEMENTS",400,92,"m",[A.cx,A.bed-2]);
    var c2=pol(150,A.R-4),c3=pol(30,A.R-4);
    o+=lab("l2a","YOUR GOALS",30,190,"s",c2)+lab("l2b","RISK TOLERANCE",770,190,"e",c3)+lab("l2c","SHORT, MEDIUM &amp; LONG TERM",400,92,"m",[A.cx,A.cy-A.R]);
    var F2=[["INFLATION",160,1],["INCOME",125,4],["SAFETY",90,8],["GROWTH",55,12],["TAXES",20,15]];
    o+=F2.map(function(f,j){var p=pol(f[1],A.R2+58),m=mid(f[2]);return lab("l3"+"abcde"[j],f[0],p[0],p[1]+(j===2?-6:5),j<2?"e":j>2?"s":"m",[m[0],m[1]])}).join("");
    o+=lab("l4a","CONTINUOUS MONITORING",30,72,"s",[A.x0+60,A.par])+lab("l4b","QUARTERLY REPORTING",770,72,"e",[A.x1-60,A.par])+lab("l4c","PERIODIC REVIEWS WITH YOU",400,500,"m",[A.cx,A.wl+8]);
  }
  return o+'</svg>';
}
function storyDraw(svg){
  var q=function(s){return $(s,svg)},qq=function(s){return $$(s,svg)};
  var E={gr:q("#scGr"),ab:q("#scAb"),ce:q("#scCe"),ca:q("#scCa"),ct:q("#scCt"),sp:q("#scSp"),vs:qq("#scVs .vs"),
    l1:qq("#l1a,#l1b,#l1c"),l2:qq("#l2a,#l2b,#l2c"),l3:qq("[id^=l3]"),l4:qq("#l4a,#l4b,#l4c")};
  var CA=E.ca.getTotalLength(),CT=E.ct.getTotalLength(),n=E.vs.length,mid=(n-1)/2;
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!E.ab.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.42),s3=seg(p,.52,.7),s4=seg(p,.78,.94);
    var o1=s1*(1-seg(p,.22,.27)),o2=s2*(1-seg(p,.47,.52)),o3=s3*(1-seg(p,.73,.78));
    E.gr.style.opacity=(b*(.55+.45*s1)).toFixed(3);
    E.ab.style.opacity=b.toFixed(3);E.ab.style.transform="translateY("+((1-s1)*10).toFixed(1)+"px)";
    E.ca.style.strokeDasharray=CA+" "+CA;E.ca.style.strokeDashoffset=(CA*(1-s2)).toFixed(1);
    E.ct.style.strokeDasharray=CT+" "+CT;E.ct.style.strokeDashoffset=(CT*(1-seg(s2,.25,1))).toFixed(1);
    E.ce.style.opacity=(b*(1-s4)).toFixed(3);E.ce.style.transform="translateY("+(s4*18).toFixed(1)+"px)";
    E.vs.forEach(function(v,i){var d=Math.abs(i-mid),k=i===mid,st=k?seg(s3,.78,1):seg(s3,(mid-d)/mid*.7,(mid-d)/mid*.7+.22);
      v.style.opacity=(b*st).toFixed(3);v.style.transform="translateY("+((1-st)*-14).toFixed(1)+"px)"});
    E.sp.style.opacity=(b*s4).toFixed(3);
    show(E.l1,b*o1);show(E.l2,b*o2);show(E.l3,b*o3);show(E.l4,b*s4);
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
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a3aec0;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #64738f;transition:background .35s,border-color .35s}
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
.scene .ea{fill:url(#ht);opacity:.55;stroke:none}
.scene .bk{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1.1}
.scene .bed{fill:none;stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .wv{fill:none;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .st{fill:url(#ht);stroke:rgba(var(--boner),.8);stroke-width:1.2}
.scene .jn{fill:none;stroke:rgba(var(--boner),.26);stroke-width:.9}
.scene .tm2{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .tm3{fill:none;stroke:rgba(var(--accr),.62);stroke-width:1}
.scene .spf{fill:rgba(var(--boner),.035);stroke:rgba(var(--boner),.7);stroke-width:1.2;stroke-linejoin:round}
.scene .par{fill:url(#ht);stroke:rgba(var(--boner),.75);stroke-width:1.1}
.scene .cop{fill:none;stroke:var(--bone);stroke-width:1.6}
.scene .vs{fill:var(--ink2);stroke:rgba(var(--boner),.88);stroke-width:1.2;stroke-linejoin:round}
.scene .vs.ks{fill:rgba(var(--accr),.2);stroke:var(--accL);stroke-width:1.6}
.scene .ld{fill:none;stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .dt{fill:var(--accL)}
.scene text{font-family:var(--mono);font-weight:500;font-size:12.5px;letter-spacing:.14em;fill:#b8c1cf}
.scene text.w{fill:var(--bone)}
.scene .lb{opacity:0}''')

# ---------------- global swaps outside regions (colours / weights) ----------------
src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(6,20,43,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a3aec0}.rail span::before{background:var(--ink2);border-color:#64738f}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#b8c1cf}')
src = src.replace('.scene text{font-size:12px}', '.scene text{font-size:12.5px}')
src = src.replace('font-weight:300', 'font-weight:400').replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== Legacy Advisory Services: their navy ground and logo navy, cool grey pages, their gold as the accent ===== */
.d1,.d2,.d3,.lede,.mani .txt,.cta .big,.stat .v{font-weight:400}
.d1{letter-spacing:-.02em}.hero-h{font-size:clamp(46px,6.3vw,120px);letter-spacing:-.025em;line-height:.99}
.d2{letter-spacing:-.018em}.d3{letter-spacing:-.015em}.mani .txt{letter-spacing:-.015em}.cta .big{letter-spacing:-.022em}.stat .v{letter-spacing:-.02em}
.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em{font-weight:400}
.lede{line-height:1.3}
#pre .wm{font-family:'Libre Caslon Text',Georgia,serif;font-weight:700;color:var(--bone);letter-spacing:.06em}
#pre .mk path{stroke:var(--accL)}
.hero .eyebrow{color:var(--accL)}
.light .kick,.light .lab.kick{color:var(--accD)}
.ftr .bigsvg{color:var(--bone)}
.ftr .disc{position:relative;z-index:1;max-width:76ch;margin:clamp(22px,2.4vw,34px) auto 0;text-align:center;font-size:13px;color:var(--stone)}
.ftr .fcv{opacity:.24!important}
.note-s a{color:inherit}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD)}
.cta .addr h3{margin-top:12px}
.cta>.wrap>.cx{grid-column:1/-1}
.cta .offs{margin-top:0;grid-template-columns:1fr 1fr}
.pl3 .lab{margin:0 0 12px}
.dark .mh,.dark2 .mh{--mh-ink:var(--bone);--mh-mute:var(--stone);--mh-line:var(--hair);--mh-accent:var(--accL);--mh-display:var(--disp);--mh-sans:var(--sans);--mh-mono:var(--mono)}
#s-team .mh{margin-top:clamp(8px,1vw,16px)}
#s-team .mh-label{color:var(--accL)}
@media (max-width:640px){.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:46vh;height:46svh}.scene svg.mob text{font-size:11.5px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = [m for m in re.findall(r'(?i)firelight|fort lauderdale|rick@|gouws', src)]
open(os.path.join(K, 'src', 'legacy-pa.src.html'), 'w', encoding='utf-8').write(src)
print('wrote src; leftovers:', len(leftover), set(leftover))
