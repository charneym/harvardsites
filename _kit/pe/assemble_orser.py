#!/usr/bin/env python3
"""Assemble _kit/src/orser.src.html from the firelight engine regions (HOME-ONLY format).
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

# Palette (BK): logo wordmark indigo #2d2a85 (sampled #282888/#303070) -> --accD, its tint #aaa6ec on dark;
# logo mountains mauve-grey #807e7f / #9d948f -> --stone family; logo ground cream #efefe7 -> --bone;
# deep shade of the indigo -> --ink.
INK = '#13123a'
reg('meta', '''<title>Orser Capital Management — Fee-only investment management, Southlake, Texas</title>
<meta name="description" content="Orser Capital Management LLC is a fee-only registered investment adviser in Southlake, Texas, managing portfolios for individuals, foundations, endowments, pension and profit-sharing plans, trusts and estates, with clients in 13 states.">
<meta name="theme-color" content="#13123a">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2313123a'/%3E%3Cpath d='M4 50L22 24L30 34L40 16L60 50Z' fill='%23aaa6ec'/%3E%3Cpath d='M36 22L40 16L44 22L41 21Z' fill='%23f1eee6'/%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts EB Garamond:500,500i; Figtree:400,500; Cormorant SC:500,600*/")
reg('root', ''':root{
  --ink:#13123a;--inkr:19,18,58;--boner:241,238,230;--accr:170,166,236;--ink2:#18173f;--ink3:#24234f;--deep:#0c0b28;
  --bone:#f1eee6;--bone2:#e8e4da;--bone3:#dcd7cc;
  --stone:#b4adb4;--stoneD:#5c5766;
  --acc:#aaa6ec;--accL:#aaa6ec;--accD:#2d2a85;
  --hair:rgba(241,238,230,.14);--hairD:rgba(19,18,58,.16);
  --disp:'EB Garamond',Georgia,'Times New Roman',serif;
  --serif:'EB Garamond',Georgia,serif;
  --sans:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Figtree',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#1c1b4e 0%,#4a4785 30%,#a69bb5 52%,#2a2850 66%,#1f1d44 80%,#13123a 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.logo{width:auto;height:26px;flex:none;overflow:visible}
.brand .mk2{fill:none;stroke:var(--accL);stroke-width:1.5;stroke-linejoin:round}
.brand .mk3{fill:var(--bone)}
.brand .bt{font:600 30px 'Cormorant SC',Georgia,serif;letter-spacing:.06em;fill:var(--bone)}
.brand .wt{font:500 10.5px/1.25 var(--mono);letter-spacing:.2em;text-transform:uppercase;color:var(--stone);max-width:8.5em;padding-top:2px}''')

reg('seen', '<script>try{if(sessionStorage.getItem("ocm-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M4 74L30 38L42 52L60 26L92 74H4"/></svg>
    <div class="wm"><span>ORSER</span></div>
  </div>
  <span class="lab pl">Fee-only investment management · Southlake, Texas</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="Orser Capital Management, home"><svg class="logo" viewBox="0 0 168 30" aria-hidden="true"><path class="mk2" d="M1 27L11 13L16 19L23 8L35 27Z"/><path class="mk3" d="M20.6 11.6L23 8L25.6 12L23.6 11.2Z"/><text x="44" y="25" class="bt">Orser</text></svg><span class="wt">Capital Management</span></a>')
reg('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/services">Services</a>
    <a class="nl ul" href="#/clients">Clients</a>
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
    <li><a href="#/clients">Clients</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/disclosures">Disclosures</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Southlake, Texas</div>
    <div><span class="lab">Phone</span><br><a href="tel:+18176972385">817-697-2385</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Orser Capital Management</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="Orser Capital Management";\nvar PK="ocm";')

# ---------------- content ----------------
reg('content', r'''var FONTS=['500 1em "EB Garamond"','italic 500 1em "EB Garamond"','400 1em "Figtree"','500 1em "Figtree"','600 1em "Cormorant SC"'];
var TEL="+18176972385",TELT="817-697-2385",MAIL="orsercm@yahoo.com";
var ADV="https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=1010104",CRS="https://reports.adviserinfo.sec.gov/crs/crs_144847.pdf",IAPD="https://adviserinfo.sec.gov/firm/summary/144847";
var SHEETS=[],GROUPS=[];
/* [name, role, one-line summary] from Form ADV Schedule A, the Part 2A brochure (Feb 2026) and the SEC IAPD records */
var TEAM=[
 ["Elizabeth K. Orser","Managing Member · Chief Compliance Officer","A principal owner since the firm began in July 2007."],
 ["James B. Orser","Managing Member · Portfolio Manager","Joined in 2013 after more than a decade at Luther King Capital Management."],
 ["William Bryce Orser","Investment Adviser Representative","Registered with Orser Capital Management since February 2026."]
];
var DOCS=[
 {d:"Form CRS",s:"Client relationship summary",t:"Form CRS: our services, fees, conflicts and conduct",u:CRS},
 {d:"2026-02-19",s:"Form ADV Part 2A",t:"Our firm brochure, filed with the SEC in February 2026",u:ADV},
 {d:"SEC",s:"Adviser public disclosure",t:"Orser Capital Management LLC on the SEC’s Investment Adviser Public Disclosure site",u:IAPD}
];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",services:"s-services",clients:"s-clients",team:"s-team",disclosures:"s-docs",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function docRows(list){return '<ul class="rows">'+list.map(function(n){var dt=/^\d{4}-/.test(n.d)?'<time class="lab" datetime="'+n.d+'">'+fd(n.d)+'</time>':'<span class="lab">'+esc(n.d)+'</span>';
  return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm">'+dt+'<span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<section class="mh"><div class="mh-group"><p class="mh-label">Principals and advisers</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div></section>'}
function ico(n){var I={
  floor:'<path d="M8 50h48"/><path class="a" d="M14 50V34h10v16M27 50V24h10v26M40 50V14h10v36"/>',
  fee:'<circle cx="32" cy="32" r="24"/><path class="a" d="M22 42L42 22"/><circle cx="24" cy="24" r="4"/><circle cx="40" cy="40" r="4"/>',
  shield:'<path d="M32 6L54 14v16c0 14-9 24-22 28C19 54 10 44 10 30V14z"/><path class="a" d="M22 32l7 7 14-15"/>'};
  return '<svg viewBox="0 0 64 64" aria-hidden="true">'+I[n]+'</svg>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Registered investment adviser<span class="nomob"> · Southlake, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Fee-only.</span><span class="l">Client <em>advocate.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Investment management for individuals, foundations, endowments, pension and profit-sharing plans, trusts and estates, with clients in 13 states, most of them in Texas and Montana.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Get in touch '+ARR+'</a><a class="btn" href="#/approach">Our approach</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<p class="txt" id="mani">Every client is different. So we offer a variety of investment strategies, built on our own research, to meet growth and income objectives <em>in line with your goals, life cycle and risk profile.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2007</span><span class="k">The year Orser Capital Management began advising clients</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13</span><span class="k">States where our clients live, most in Texas and Montana</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2,500</span><span class="k">Securities, approximately, that our proprietary database analyzes every day</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with clients</span><h2 class="d3">A route planned <em>for you.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Assess</span><span>Allocate</span><span>Monitor</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We start where you stand.</h2><p>We analyze your current assets, projected cash-flow needs and risk tolerance, then formulate a customized long-term plan.</p></article>'+
     '<article class="step"><h2>A route set to your goals.</h2><p>Asset classes are set by your objectives, through a moderate equity, income equity or retirement model, and we trade with discretion in your account at the custodian you choose.</p></article>'+
     '<article class="step"><h2>Watched daily, reviewed quarterly.</h2><p>Our database screens about 2,500 securities every day. We review every account at least quarterly, or when markets change sharply, and meet with clients at least once a year.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our services</span><h2 class="d2 split">Active management, <em>no commissions.</em></h2></div><p data-r>OCM is a fee-only registered investment adviser. We manage your portfolio on an active basis at an independent custodian, using only public securities.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Fee-only</dt><dd>We receive no commission-based compensation or so-called trailers from third parties, which we believe minimizes most potential conflicts of interest.</dd></div>'+
    '<div><dt class="lab">Your custodian</dt><dd>We do not hold your assets. We exercise discretionary authority at the custodian of your choice; most clients use the low-cost custody services of Charles Schwab &amp; Co.</dd></div>'+
    '<div><dt class="lab">Proprietary research</dt><dd>Our own database, process and software analyze approximately 2,500 securities each day to find growth opportunities and build well-diversified portfolios.</dd></div>'+
    '<div><dt class="lab">What we own</dt><dd>Depending on your situation, high-quality companies, fixed income and exchange traded funds where appropriate, with ongoing monitoring and administration support.</dd></div>'+
   '</dl>'+
   '<p class="note-s" data-r>We believe it is important to be a client advocate. Our 30+ years of experience, including CPA, CFA and PhD credentials, help us identify conservative, high-quality investments and maintain high compliance standards.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="s-clients" data-theme="dark"><div class="wrap">'+
   '<div class="two"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d2 split">From Texas <em>to Montana.</em></h2>'+
    '<p class="muted" data-r style="margin-top:28px;max-width:40ch">Clients in 13 different states, with the majority in Texas and Montana, served from our office in Southlake.</p></div>'+
   '<div><p class="lede" data-r style="margin-bottom:30px">We manage portfolios for:</p><ul class="aims">'+
    '<li><span>Individuals and high-net-worth families.</span></li>'+
    '<li><span>Foundations and endowments.</span></li>'+
    '<li><span>Pension and profit-sharing plans.</span></li>'+
    '<li><span>Trusts, estates and other organizations.</span></li>'+
   '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-terms" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Terms</span><h2 class="d2 split">Simple, and <em>in writing.</em></h2></div><p data-r>The essentials from our Form CRS and Form ADV brochure. You pay fees and costs whether you make or lose money on your investments.</p></div>'+
   '<div class="pillars">'+
    '<div class="pl3">'+ico("floor")+'<span class="lab">01 · Minimum</span><h3>$50,000 preferred minimum</h3><p>Our preferred minimum account size to act as your investment manager.</p></div>'+
    '<div class="pl3">'+ico("fee")+'<span class="lab">02 · Fees</span><h3>Up to 1.00% a year</h3><p>An asset-based fee, negotiable and billed quarterly. We charge no performance-based fees.</p></div>'+
    '<div class="pl3">'+ico("shield")+'<span class="lab">03 · Conduct</span><h3>Your interest first</h3><p>As your adviser we must act in your best interest, and our firm and professionals have no legal or disciplinary history.</p></div>'+
   '</div></div></section>'+

  '<section class="sec dark" id="s-team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people who <em>review your account.</em></h2></div><p data-r>Our portfolio manager and our chief compliance officer review every client account at least quarterly, and more often when a client’s situation or the markets change.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="s-docs" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Disclosures</span><h2 class="d3 split">Everything <em>on the record.</em></h2></div></div>'+docRows(DOCS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Get in touch</span>'+
   '<h2 class="big split">Let’s talk about <em>your plan.</em></h2>'+
   '<p class="sub" data-r>Call the office or write to us. We begin with your current assets, your cash-flow needs and your tolerance for risk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Office</span><h3>Southlake, Texas</h3><p>Orser Capital Management LLC<br>566 N. Kimball Avenue, Suite 100<br>Southlake, TX 76092</p></div>'+
    '<div class="offs" data-r><div><span class="lab">Office</span><b><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></b></div><div><span class="lab">Email</span><b><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></b></div>'+
     '<div><span class="lab">Disclosures</span><b class="em"><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a> · <a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2A</a></b></div></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>566 N. Kimball Avenue, Suite 100<br>Southlake, TX 76092</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/clients">Clients</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+IAPD+'" target="_blank" rel="noopener">SEC adviser disclosure</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Cormorant SC\',Georgia,serif;font-weight:600;font-size:46px;letter-spacing:.06em">Orser Capital</text></svg>'+
  '<p class="disc">Orser Capital Management LLC is an investment adviser registered with the Securities and Exchange Commission. Registration does not imply a certain level of skill or training. This website is for informational purposes only and is not an offer or a recommendation of any security.</p>'+
  '<div class="legal"><span class="lab">© 2026 Orser Capital Management LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){return {k:"home",v:vHome,t:"Orser Capital Management — Fee-only investment management, Southlake, Texas",x:"Home"}}''')

# ---------------- hero field: a Montana peak at alpenglow, mirrored in a valley lake ----------------
reg('field', r'''/* ================= HERO FIELD: a snow-capped Montana peak at evening alpenglow (their own site is Montana
   photography and their logo is a mountain range), the range mirrored in a still valley lake below a line of spruce,
   a split-rail fence in the meadow in front. Painted in the logo's indigo, mauve-grey and cream. It moves on its own
   (clouds drift, the lake ripples, mist slides over the water) with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oLand=null,oRef=null,oFore=null,CL=[],MI=[],GL=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var S=mob?Math.min(h*.36,w*.8):h;
    var hz=S*(mob?.66:.63),lb=S*(mob?.84:.85);
    var px=mob?w*.6:side+cw*.7,ap=S*(mob?.24:.16);
    return {mob:mob,side:side,cw:cw,S:S,hz:hz,lb:lb,px:px,ap:ap};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the range: a sum of peaks, the main summit right of centre */
  function peaks(){var U=G.mob?w*.9:G.cw,px=G.px,H=G.hz-G.ap;
    return [[px,H,U*.30,U*.25],[px-U*.24,H*.66,U*.2,U*.17],[px+U*.2,H*.74,U*.16,U*.2],[px+U*.42,H*.5,U*.2,U*.25],[px-U*.55,H*.42,U*.28,U*.22],[px-U*.9,H*.34,U*.3,U*.3],[px-U*.08,H*.78,U*.2,U*.12],[px+U*.1,H*.8,U*.1,U*.22],[px-U*.32,H*.52,U*.16,U*.18],[px+U*.3,H*.58,U*.16,U*.14]]}
  var PK=null;
  function fr(x){var a=0,f=1/(G.mob?60:110),am=1,k;for(k=0;k<5;k++){a+=am*Math.sin(x*f+k*1.7+Math.sin(x*f*.37+k));f*=2.13;am*=.5}return a}
  function ridge(x){var m=0,i,p,u,v;for(i=0;i<PK.length;i++){p=PK[i];u=x<p[0]?(p[0]-x)/p[2]:(x-p[0])/p[3];if(u<1){v=p[1]*(.62*Math.pow(1-u,1.55)+.38*Math.pow(1-u,.9)*(1-u));if(v>m)m=v}}
    return G.hz-m-m*.05*fr(x)-G.S*.012}
  function hill(x){return G.hz-G.S*(.028+.018*(.5+.5*Math.sin(x/(w*.11)+1.7))+.012*(.5+.5*Math.sin(x/(w*.037)+.3)))}
  function spruce(g,x,y,hh){var wd=hh*.2;g.beginPath();g.moveTo(x,y-hh);for(var k=1;k<=6;k++){var yy=y-hh+hh*k/6.4,ww=wd*(.18+.82*k/6);g.lineTo(x+ww,yy);g.lineTo(x+ww*.3,yy-hh*.025)}
    g.lineTo(x+wd*.08,y);g.lineTo(x-wd*.08,y);for(var k2=6;k2>=1;k2--){var yy2=y-hh+hh*k2/6.4,ww2=wd*(.18+.82*k2/6);g.lineTo(x-ww2*.3,yy2-hh*.025);g.lineTo(x-ww2,yy2)}g.closePath();g.fill()}
  function build(){
    var S=G.S,hz=G.hz,lb=G.lb,x,i,k;PK=peaks();
    /* sky: indigo overhead, lavender, then a cream band of alpenglow on the horizon */
    var A=mk(S+2),g=A[1];oSky=A[0];
    var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#1b1a4c");sky.addColorStop(.28,"#3a3878");sky.addColorStop(.55,"#7b74a6");sky.addColorStop(.8,"#c7b9c4");sky.addColorStop(1,"#eee3d8");
    g.fillStyle=sky;g.fillRect(0,0,w,S+2);
    var gl=g.createRadialGradient(G.mob?w*.15:G.side,hz*.92,0,G.mob?w*.15:G.side,hz*.92,w*.6);gl.addColorStop(0,"rgba(246,232,220,.5)");gl.addColorStop(1,"rgba(246,232,220,0)");g.fillStyle=gl;g.fillRect(0,0,w,S+2);
    /* the range */
    var B=mk(S+2),l=B[1];oLand=B[0];
    var pts=[];for(x=-6;x<=w+6;x+=2)pts.push([x,ridge(x)]);
    function sil(){l.beginPath();l.moveTo(-6,hz+2);for(var q=0;q<pts.length;q++)l.lineTo(pts[q][0],pts[q][1]);l.lineTo(w+6,hz+2);l.closePath()}
    sil();var rk=l.createLinearGradient(0,G.ap,0,hz);rk.addColorStop(0,"#8c86a6");rk.addColorStop(.45,"#625d86");rk.addColorStop(1,"#4b4774");l.fillStyle=rk;l.fill();
    l.save();sil();l.clip();
    /* snow: everything above a ragged snowline, lavender in shade */
    var R=rng(19),sl=G.ap+(hz-G.ap)*.46;
    l.beginPath();l.moveTo(-6,0);for(x=-6;x<=w+6;x+=6){var dd=Math.abs(x-G.px)/(G.mob?w:G.cw);l.lineTo(x,sl+dd*(hz-G.ap)*.18+Math.sin(x*.05)*S*.012+(R()-.5)*S*.02)}l.lineTo(w+6,0);l.closePath();
    var sn=l.createLinearGradient(0,G.ap,0,sl+S*.06);sn.addColorStop(0,"#dcd8ea");sn.addColorStop(1,"#a9a3c4");l.fillStyle=sn;l.fill();
    /* couloirs: short tapered snow streaks and rock ribs */
    for(k=0;k<(G.mob?26:60);k++){var sx=G.px+(R()-.5)*(G.mob?w*.9:G.cw*.95),sy=ridge(sx)+S*.012,len=(hz-sy)*(.12+R()*.3),ang=(R()-.5)*.4;
      var snow=R()<.5;l.strokeStyle=snow?"rgba(226,222,238,"+(.1+R()*.16).toFixed(2)+")":"rgba(74,70,108,"+(.1+R()*.14).toFixed(2)+")";l.lineWidth=.8+R()*1.1;
      l.beginPath();l.moveTo(sx,sy);l.quadraticCurveTo(sx+Math.sin(ang)*len*.3,sy+len*.5,sx+Math.sin(ang)*len*.5,sy+len);l.stroke()}
    /* light from the west: smoothed slope of the crest decides lit (rising) and shaded (falling) faces */
    var sl2=[],W2=G.mob?8:16;for(i=0;i<pts.length;i++){var acc=0,nn=0;for(var j2=Math.max(1,i-W2);j2<Math.min(pts.length-1,i+W2);j2++){acc+=pts[j2+1][1]-pts[j2-1][1];nn++}sl2.push(nn?acc/nn:0)}
    for(i=0;i<pts.length;i++){var sv=sl2[i],dep=(hz-pts[i][1])*.7,yy=pts[i][1];if(dep<2)continue;
      if(sv<0){var a1=Math.tanh(-sv/3);l.globalCompositeOperation="screen";var fg=l.createLinearGradient(0,yy,0,yy+dep);fg.addColorStop(0,"rgba(250,228,216,"+(.55*a1).toFixed(3)+")");fg.addColorStop(1,"rgba(250,228,216,0)");l.fillStyle=fg}
      else{var a2=Math.tanh(sv/3);l.globalCompositeOperation="source-over";var sg=l.createLinearGradient(0,yy,0,yy+dep);sg.addColorStop(0,"rgba(40,38,82,"+(.34*a2).toFixed(3)+")");sg.addColorStop(1,"rgba(40,38,82,"+(.12*a2).toFixed(3)+")");l.fillStyle=sg}
      l.fillRect(pts[i][0]-1.1,yy,2.3,dep)}
    l.globalCompositeOperation="source-over";
    /* spurs: a soft slanted shadow down the east side of the main summits */
    l.save();l.filter="blur("+(G.mob?3:6)+"px)";PK.slice(0,4).forEach(function(p){var ax=p[0],ay=ridge(ax),dp=hz-ay;l.fillStyle="rgba(36,34,76,.26)";
      l.beginPath();l.moveTo(ax+2,ay+dp*.04);l.lineTo(ax+dp*.12,ay+dp*.45);l.lineTo(ax+dp*.2,hz);l.lineTo(ax+p[3]*.9,hz);l.lineTo(ax+p[3]*.5,ay+dp*.4);l.closePath();l.fill()});l.restore();
    /* haze at the foot of the range */
    var hzG=l.createLinearGradient(0,hz-S*.16,0,hz);hzG.addColorStop(0,"rgba(199,185,196,0)");hzG.addColorStop(1,"rgba(199,185,196,.62)");l.fillStyle=hzG;l.fillRect(0,hz-S*.16,w,S*.16);
    l.restore();
    /* rim light along the crest */
    l.strokeStyle="rgba(250,236,226,.5)";l.lineWidth=1;l.beginPath();for(i=0;i<pts.length;i++){var dy2=i<pts.length-1?pts[i+1][1]-pts[i][1]:0;if(dy2<-.4)l.lineTo(pts[i][0],pts[i][1]);else l.moveTo(pts[i][0],pts[i][1])}l.stroke();
    /* forested foothills and the spruce line on the far shore */
    l.beginPath();l.moveTo(-6,hz+2);for(x=-6;x<=w+6;x+=3)l.lineTo(x,hill(x));l.lineTo(w+6,hz+2);l.closePath();var hg=l.createLinearGradient(0,hz-S*.06,0,hz);hg.addColorStop(0,"#34315e");hg.addColorStop(1,"#23214a");l.fillStyle=hg;l.fill();
    var Rt=rng(61);l.fillStyle="#1d1b43";for(k=0;k<(G.mob?90:220);k++){var tx=Rt()*w,ty=hill(tx)+S*.006,th=S*(G.mob?.035:.03)*(.6+Rt()*.8);spruce(l,tx,ty,th)}
    l.fillStyle="#17163a";for(k=0;k<(G.mob?110:260);k++){var ux=Rt()*w,uh=S*(G.mob?.03:.026)*(.5+Rt()*.9);spruce(l,ux,hz+1,uh)}
    l.fillStyle="#17163a";l.fillRect(0,hz-1,w,3);
    /* what the lake mirrors */
    var C=mk(S+2);oRef=C[0];C[1].setTransform(1,0,0,1,0,0);C[1].drawImage(oSky,0,0);C[1].drawImage(oLand,0,0);
    /* the meadow and the split-rail fence in front */
    var F=mk(S+2),f=F[1];oFore=F[0];
    var Rf=rng(83);f.beginPath();f.moveTo(-6,S+2);function bank(x){var u=(x-(G.mob?w*.3:w*.42))/(w*.45);u=u<0?0:u>1?1:u;return lb-S*.008*Math.sin(x/(w*.17))-S*.004-S*(G.mob?.06:.075)*u*u*(3-2*u)}for(x=-6;x<=w+6;x+=4)f.lineTo(x,bank(x));f.lineTo(w+6,S+2);f.closePath();
    var mg=f.createLinearGradient(0,lb-S*.08,0,S);mg.addColorStop(0,"#3b3768");mg.addColorStop(.3,"#25224d");mg.addColorStop(1,"#121131");f.fillStyle=mg;f.fill();
    f.strokeStyle="rgba(214,204,220,.32)";f.lineWidth=1.2;f.beginPath();for(x=-6;x<=w+6;x+=4){x<0?f.moveTo(x,bank(x)):f.lineTo(x,bank(x))}f.stroke();
    f.lineCap="round";for(k=0;k<(G.mob?260:700);k++){var gx=Rf()*w,gy=lb+(S-lb)*Math.pow(Rf(),1.6),gh=S*(.008+.03*(gy-lb)/(S-lb))*(.5+Rf()),lean=(Rf()-.4)*gh*.5;
      f.strokeStyle=Rf()<.25?"rgba(170,166,200,.16)":"rgba(14,13,40,.55)";f.lineWidth=.8+Rf()*.8;f.beginPath();f.moveTo(gx,gy);f.quadraticCurveTo(gx+lean*.3,gy-gh*.6,gx+lean,gy-gh);f.stroke()}
    var x0=G.mob?w*.5:Math.max(w*.56,G.side+G.cw*.55),y0=S*(G.mob?.985:.975),x1=w+S*.1,y1=lb-S*(G.mob?.025:.035),n=G.mob?5:6;
    var posts=[];for(k=0;k<n;k++){var tt=Math.pow(k/(n-1),.8),pxp=x0+(x1-x0)*tt,pyp=y0+(y1-y0)*tt,ph=S*(G.mob?.17:.2)*(1-tt*.6);posts.push([pxp,pyp,ph])}
    function rail(a,b,ha,hb,sag){var ax=a[0],ay=a[1]-a[2]*ha,bx=b[0],by=b[1]-b[2]*hb,th=(a[2]+b[2])*.028;
      f.strokeStyle="#100f2c";f.lineWidth=th;f.beginPath();f.moveTo(ax,ay);f.quadraticCurveTo((ax+bx)/2,(ay+by)/2+sag*th,bx,by);f.stroke();
      f.strokeStyle="rgba(232,224,226,.34)";f.lineWidth=Math.max(.9,th*.26);f.beginPath();f.moveTo(ax,ay-th*.38);f.quadraticCurveTo((ax+bx)/2,(ay+by)/2+sag*th-th*.38,bx,by-th*.38);f.stroke()}
    for(k=0;k<n-1;k++){rail(posts[k],posts[k+1],.82,.86,.8);rail(posts[k],posts[k+1],.42,.46,1.2)}
    posts.forEach(function(p,j){var pw=p[2]*.075;f.fillStyle="#0f0e2a";f.beginPath();f.moveTo(p[0]-pw/2,p[1]);f.lineTo(p[0]-pw*.45,p[1]-p[2]);f.lineTo(p[0]+pw*.4,p[1]-p[2]*1.03);f.lineTo(p[0]+pw/2,p[1]);f.closePath();f.fill();
      f.fillStyle="rgba(232,224,226,.32)";f.fillRect(p[0]-pw*.45,p[1]-p[2],pw*.22,p[2]*.96)});
    /* tufts at the foot of each post */
    posts.forEach(function(p){for(var q=0;q<14;q++){var qx=p[0]+(Rf()-.5)*p[2]*.3,qh=p[2]*(.08+Rf()*.14);f.strokeStyle="rgba(14,13,40,.7)";f.lineWidth=1;f.beginPath();f.moveTo(qx,p[1]+2);f.lineTo(qx+(Rf()-.5)*qh*.6,p[1]-qh);f.stroke()}});
    CL=[];var Rc=rng(29);for(k=0;k<(G.mob?3:5);k++)CL.push([Rc()*w,G.ap*(.5+Rc()*1.6),w*(.08+Rc()*.14),.5+Rc(),Rc()*6.28]);
    MI=[];var Rm=rng(47);for(k=0;k<(G.mob?3:5);k++)MI.push([Rm()*w,Rm(),w*(.16+Rm()*.18),Rm()*6.28]);
    GL=[];var Rg=rng(53);for(k=0;k<(G.mob?14:34);k++)GL.push([Rg()*w,Rg(),.4+Rg()*.8,Rg()*6.28]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?30:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var S=G.S,hz=G.hz,lb=G.lb,LH=lb-hz,k;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* high cloud drifting west to east, lit cream underneath */
    for(k=0;k<CL.length;k++){var Q=CL[k],cx=((Q[0]+t*(3+2*Q[3]))%(w+Q[2]*2)+(w+Q[2]*2))%(w+Q[2]*2)-Q[2],cy=Q[1]+Math.sin(t*.1+Q[4])*S*.004;
      c.save();c.translate(cx,cy);c.scale(1,.16);var cg=c.createRadialGradient(0,0,0,0,0,Q[2]);cg.addColorStop(0,"rgba(240,226,222,.12)");cg.addColorStop(1,"rgba(240,226,222,0)");c.fillStyle=cg;c.beginPath();c.arc(0,0,Q[2],0,Math.PI*2);c.fill();c.restore()}
    c.setTransform(1,0,0,1,0,0);c.drawImage(oLand,0,0);
    /* the lake: the range mirrored, rippling more toward the near shore */
    var d=dpr,amp=1+SP.v*2,y;
    for(y=0;y<LH;y+=2){var f=y/LH,dx=(Math.sin(y*.23+t*1.4)*(.4+f*2.6)+Math.sin(y*.07-t*.6)*f*2.2)*amp,sy=Math.max(0,hz-y-2);
      c.drawImage(oRef,0,Math.round(sy*d),cv.width,Math.round(2*d),Math.round(dx*d),Math.round((hz+y)*d),cv.width,Math.round(2*d)+1)}
    c.setTransform(dpr,0,0,dpr,0,0);
    var lk=c.createLinearGradient(0,hz,0,lb);lk.addColorStop(0,"rgba(19,18,58,.16)");lk.addColorStop(1,"rgba(19,18,58,.5)");c.fillStyle=lk;c.fillRect(0,hz,w,LH+2);
    c.fillStyle="rgba(238,227,216,.3)";c.fillRect(0,hz+1,w,1);
    /* glints on the water and mist sliding over it */
    for(k=0;k<GL.length;k++){var Gq=GL[k],gy=hz+LH*(.1+.85*Gq[1]),gw=(6+18*Gq[1])*Gq[2],ga=.1+.14*(.5+.5*Math.sin(t*1.1*Gq[2]+Gq[3])),gx=(Gq[0]+Math.sin(t*.2+Gq[3])*12);
      c.fillStyle="rgba(240,230,222,"+ga.toFixed(3)+")";c.fillRect(gx,gy,gw,1)}
    for(k=0;k<MI.length;k++){var M=MI[k],mx=((M[0]+t*(4+4*M[1]))%(w+M[2]*2)+(w+M[2]*2))%(w+M[2]*2)-M[2],my=hz+LH*(.15+.3*M[1]),a=.07+.04*Math.sin(t*.25+M[3]);
      c.save();c.translate(mx,my);c.scale(1,.05);var mg=c.createRadialGradient(0,0,0,0,0,M[2]);mg.addColorStop(0,"rgba(224,214,222,"+a.toFixed(3)+")");mg.addColorStop(1,"rgba(224,214,222,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,M[2],0,Math.PI*2);c.fill();c.restore()}
    c.setTransform(1,0,0,1,0,0);c.drawImage(oFore,0,0);
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.px,G.S*.62]:[w/2,h/2]}};
})();''')

# ---------------- story: a trail map in fine line ----------------
reg('story', r'''/* the story scene: ONE topographic trail map of a mountain (the logo's range, the Montana country of their photos),
   drawn as an engraved survey sheet. Step 1 the map: where you stand (trailhead), the summit you are aiming for, and the
   steep ground (risk). Step 2 the route is drawn up the mountain: the allocation set by your objectives. Step 3 a walker
   travels the route past three checkpoints: daily screening, quarterly reviews, the annual meeting. */
var MP={};
function mpt(u,v){return [MP.x+u*MP.W,MP.y+v*MP.H]}
function hf(u,v){function g(cx,cy,sxl,sxr,sy,a){var dx=u-cx,sx=dx<0?sxl:sxr;return a*Math.exp(-(dx*dx)/(2*sx*sx)-((v-cy)*(v-cy))/(2*sy*sy))}
  return g(.70,.28,.2,.085,.15,1)+g(.44,.44,.16,.14,.13,.5)+g(.2,.26,.12,.12,.1,.34)+g(.9,.72,.1,.12,.12,.28)+g(.6,.62,.2,.2,.08,.12)}
function contours(nx,ny){var Z=[],i,j,L,out=[];for(j=0;j<=ny;j++){Z[j]=[];for(i=0;i<=nx;i++)Z[j][i]=hf(i/nx,j/ny)}
  function ip(lev,p,q,u0,v0,u1,v1){var t=(lev-p)/(q-p);return mpt((u0+(u1-u0)*t)/nx,(v0+(v1-v0)*t)/ny)}
  for(L=1;L<=13;L++){var lev=L*.075,d='';
    for(j=0;j<ny;j++)for(i=0;i<nx;i++){var a=Z[j][i],b=Z[j][i+1],c=Z[j+1][i+1],e=Z[j+1][i],k=(a>lev?8:0)|(b>lev?4:0)|(c>lev?2:0)|(e>lev?1:0);if(k===0||k===15)continue;
      var T=ip(lev,a,b,i,j,i+1,j),R=ip(lev,b,c,i+1,j,i+1,j+1),B=ip(lev,e,c,i,j+1,i+1,j+1),Lf=ip(lev,a,e,i,j,i,j+1),S=[];
      switch(k){case 1:case 14:S=[[Lf,B]];break;case 2:case 13:S=[[B,R]];break;case 3:case 12:S=[[Lf,R]];break;case 4:case 11:S=[[T,R]];break;
        case 5:S=[[Lf,T],[B,R]];break;case 10:S=[[T,R],[Lf,B]];break;case 6:case 9:S=[[T,B]];break;case 7:case 8:S=[[Lf,T]];break}
      S.forEach(function(s){d+='M'+s[0][0].toFixed(1)+' '+s[0][1].toFixed(1)+'L'+s[1][0].toFixed(1)+' '+s[1][1].toFixed(1)})}
    out.push('<path class="ct'+(L%4===0?' ix':'')+'" d="'+d+'"/>')}
  return out.join("")}
var ROUTE=[[.12,.88],[.24,.82],[.37,.77],[.31,.67],[.45,.61],[.4,.5],[.55,.46],[.57,.37],[.7,.29]];
function routeAt(f){var P=ROUTE.map(function(q){return mpt(q[0],q[1])}),Ls=[0],i;for(i=1;i<P.length;i++)Ls.push(Ls[i-1]+Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]));
  var tg=f*Ls[Ls.length-1];for(i=1;i<P.length;i++)if(Ls[i]>=tg){var t=(tg-Ls[i-1])/(Ls[i]-Ls[i-1]);return [P[i-1][0]+(P[i][0]-P[i-1][0])*t,P[i-1][1]+(P[i][1]-P[i-1][1])*t]}return P[P.length-1]}
function lab(id,txt,x,y,side,to){var anc=side==="s"?"start":side==="e"?"end":"middle",tw=txt.length*(MOBILE()?7.4:8.6),cx=side==="s"?x+tw/2:side==="e"?x-tw/2:x;
  var ld='';if(to){var up=to[1]<y-6,lx=Math.max(Math.min(to[0],cx+tw/2-6),cx-tw/2+6),ly=up?y-15:y+6;ld='<path class="ld" d="M'+lx.toFixed(1)+' '+ly.toFixed(1)+'L'+to[0].toFixed(1)+' '+to[1].toFixed(1)+'"/><circle class="dt" cx="'+to[0].toFixed(1)+'" cy="'+to[1].toFixed(1)+'" r="2.6"/>'}
  return '<g class="lb" id="'+id+'">'+ld+'<text x="'+x+'" y="'+y+'" text-anchor="'+anc+'" class="w">'+txt+'</text></g>'}
function f2(q){return q[0].toFixed(1)+' '+q[1].toFixed(1)}
function scene(){
  var mob=MOBILE();
  MP=mob?{x:14,y:66,W:372,H:300}:{x:70,y:70,W:660,H:450};
  var o='<svg'+(mob?' class="mob" viewBox="0 0 400 380"':' viewBox="0 10 800 555"')+' aria-hidden="true">';
  /* the sheet: double frame, graticule ticks, north arrow, scale bar */
  var x0=MP.x,y0=MP.y,x1=MP.x+MP.W,y1=MP.y+MP.H,tk='',i;
  for(i=1;i<10;i++){var tx=x0+MP.W*i/10,ty=y0+MP.H*i/10;tk+='M'+tx.toFixed(1)+' '+y0+'v7M'+tx.toFixed(1)+' '+y1+'v-7M'+x0+' '+ty.toFixed(1)+'h7M'+x1+' '+ty.toFixed(1)+'h-7'}
  o+='<g id="scMap"><rect class="frm" x="'+(x0-6)+'" y="'+(y0-6)+'" width="'+(MP.W+12)+'" height="'+(MP.H+12)+'"/><rect class="frm2" x="'+x0+'" y="'+y0+'" width="'+MP.W+'" height="'+MP.H+'"/><path class="tk" d="'+tk+'"/>';
  var na=mpt(.94,.1);o+='<g class="na" transform="translate('+f2(na)+')"><path d="M0 -16L6 8L0 3L-6 8Z"/><text x="0" y="22" text-anchor="middle">N</text></g>';
  var sb=mpt(.74,.95),sl=mob?60:96;o+='<g class="sbar" transform="translate('+f2(sb)+')"><path d="M0 0h'+sl+'M0 -4v8M'+(sl/2)+' -3v6M'+sl+' -4v8"/></g>';
  o+='<g id="scCt">'+contours(mob?72:110,mob?60:80)+'</g>';
  /* a creek down the valley to the trailhead */
  o+='</g>';
  /* steep face, route, trailhead, summit, checkpoints, walker */
  var T=mpt(.12,.88),P=mpt(.7,.29),St=mpt(.8,.3);
  o+='<path class="hl" id="scSt" d="M'+f2(mpt(.77,.17))+'Q'+f2(mpt(.83,.3))+' '+f2(mpt(.77,.43))+'"/>';
  var rp=ROUTE.map(function(q){return mpt(q[0],q[1])});
  o+='<path class="rt" id="scRt" d="M'+rp.map(f2).join("L")+'"/>';
  o+='<g id="scTh"><circle class="th" cx="'+T[0].toFixed(1)+'" cy="'+T[1].toFixed(1)+'" r="7"/><circle class="thc" cx="'+T[0].toFixed(1)+'" cy="'+T[1].toFixed(1)+'" r="2.6"/></g>';
  o+='<g id="scSu" transform="translate('+f2(P)+')"><path class="su" d="M-7 5L0 -7L7 5Z"/><path class="fl" d="M0 -7V-30M0 -30L15 -25L0 -20"/></g>';
  var C=[.24,.56,.86].map(routeAt);
  o+=C.map(function(q,k){return '<rect class="cp" id="scC'+k+'" x="'+(q[0]-5).toFixed(1)+'" y="'+(q[1]-5).toFixed(1)+'" width="10" height="10"/>'}).join("");
  o+='<circle class="wk" id="scWk" cx="'+T[0].toFixed(1)+'" cy="'+T[1].toFixed(1)+'" r="5.5"/>';
  var R1=routeAt(.4);
  if(mob){
    o+=lab("l1a","CURRENT ASSETS",14,26,"s",[T[0],T[1]-9])+lab("l1b","RISK TOLERANCE",386,26,"e",St)+lab("l1c","LONG-TERM GOALS",200,48,"m",[P[0],P[1]-32]);
    o+=lab("l2a","ASSET ALLOCATION",14,26,"s",R1)+lab("l2b","SET BY YOUR OBJECTIVES",386,26,"e",[P[0]+4,P[1]-26]);
    o+=lab("l3a","DAILY SCREENING",14,26,"s",C[0])+lab("l3b","QUARTERLY REVIEW",200,48,"m",C[1])+lab("l3c","ANNUAL MEETING",386,26,"e",C[2]);
  }else{
    o+=lab("l1a","CURRENT ASSETS",226,505,"s",[T[0]+6,T[1]-6])+lab("l1b","RISK TOLERANCE",712,430,"e",St)+lab("l1c","LONG-TERM GOALS",400,44,"m",[P[0]-2,P[1]-30]);
    o+=lab("l2a","ASSET ALLOCATION",226,505,"s",R1)+lab("l2b","SET BY YOUR OBJECTIVES",400,44,"m",[P[0]+14,P[1]-25])+lab("l2c","MODERATE EQUITY · INCOME EQUITY · RETIREMENT MODELS",400,556,"m",null);
    o+=lab("l3a","DAILY · 2,500 SECURITIES SCREENED",226,505,"s",C[0])+lab("l3b","QUARTERLY · EVERY ACCOUNT REVIEWED",712,430,"e",C[1])+lab("l3c","ANNUALLY · CLIENT MEETING",400,44,"m",C[2]);
  }
  return o+'</svg>';
}
function storyDraw(svg){
  var q=function(s){return $(s,svg)},qq=function(s){return $$(s,svg)};
  var E={mp:q("#scMap"),st:q("#scSt"),rt:q("#scRt"),th:q("#scTh"),su:q("#scSu"),wk:q("#scWk"),cp:qq(".cp"),
    l1:qq("#l1a,#l1b,#l1c"),l2:qq("#l2a,#l2b,#l2c"),l3:qq("#l3a,#l3b,#l3c")};
  var RL=E.rt.getTotalLength(),CPF=[.24,.56,.86];
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!E.rt.isConnected)return;
    var s1=seg(p,.02,.18),s2=seg(p,.36,.56),s3=seg(p,.68,.94),o1=s1*(1-seg(p,.3,.36)),o2=s2*(1-seg(p,.62,.68)),wv=seg(p,.62,.7);
    E.mp.style.opacity=(b*(.6+.4*s1)).toFixed(3);
    E.th.style.opacity=b.toFixed(3);E.su.style.opacity=(b*(.55+.45*s1)).toFixed(3);
    E.st.style.opacity=(b*o1).toFixed(3);
    show(E.l1,b*o1);show(E.l2,b*o2);show(E.l3,b*s3);
    E.rt.style.strokeDasharray=RL+" "+RL;E.rt.style.strokeDashoffset=(RL*(1-Math.max(s2,seg(p,.62,.66)))).toFixed(1);E.rt.style.opacity=b.toFixed(3);
    var pt=E.rt.getPointAtLength(RL*s3*.995);E.wk.setAttribute("cx",pt.x.toFixed(1));E.wk.setAttribute("cy",pt.y.toFixed(1));E.wk.style.opacity=(b*wv).toFixed(3);
    E.cp.forEach(function(c,k){c.style.opacity=(b*wv).toFixed(3);c.classList.toggle("on",s3>=CPF[k]-.02)});
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
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a7a3bd;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #6c6890;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:500;font-size:clamp(28px,2.4vw,40px);line-height:1.1;letter-spacing:-.015em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(80vh,740px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .frm{fill:rgba(var(--boner),.025);stroke:rgba(var(--boner),.6);stroke-width:1.2}
.scene .frm2{fill:none;stroke:rgba(var(--boner),.34);stroke-width:1}
.scene .tk,.scene .sbar path{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .na path{fill:rgba(var(--boner),.7)}
.scene .na text{font-size:11px;fill:rgba(var(--boner),.7)}
.scene .ct{fill:none;stroke:rgba(var(--boner),.3);stroke-width:.9;stroke-linecap:round}
.scene .ct.ix{stroke:rgba(var(--boner),.56);stroke-width:1.3}
.scene .crk{fill:none;stroke:rgba(var(--accr),.7);stroke-width:1.4;stroke-dasharray:6 3}
.scene .hl{fill:none;stroke:var(--accL);stroke-width:7;stroke-linecap:round;opacity:0;stroke-opacity:.35}
.scene .rt{fill:none;stroke:var(--accL);stroke-width:2.2;stroke-linejoin:round;stroke-linecap:round}
.scene .th{fill:var(--ink2);stroke:var(--bone);stroke-width:1.4}
.scene .thc{fill:var(--bone)}
.scene .su{fill:var(--bone)}
.scene .fl{fill:none;stroke:var(--accL);stroke-width:1.5;stroke-linejoin:round}
.scene .cp{fill:var(--ink2);stroke:rgba(var(--boner),.7);stroke-width:1.3;transition:fill .35s var(--eo),stroke .35s var(--eo);opacity:0}
.scene .cp.on{fill:var(--accL);stroke:var(--accL)}
.scene .wk{fill:var(--bone);stroke:var(--ink2);stroke-width:2;opacity:0}
.scene .ld{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .dt{fill:var(--accL)}
.scene text{font-family:var(--mono);font-weight:500;font-size:12.5px;letter-spacing:.14em;fill:#bdb9cf;paint-order:stroke;stroke:var(--ink2);stroke-width:5px;stroke-linejoin:round}
.scene text.w{fill:var(--bone)}
.scene .lb{opacity:0}''')

# ---------------- global swaps outside regions (colours / weights) ----------------
src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(19,18,58,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a7a3bd}.rail span::before{background:var(--ink2);border-color:#6c6890}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#bdb9cf}')
src = src.replace('.scene text{font-size:12px}', '.scene text{font-size:12.5px}')
src = src.replace('font-weight:300', 'font-weight:500').replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== Orser Capital Management: deep indigo ground, the logo's cream pages, its indigo as the accent ===== */
.d1,.d2,.d3,.lede,.mani .txt,.cta .big,.stat .v{font-weight:500}
.d1{letter-spacing:-.02em}.hero-h{font-size:clamp(50px,7.2vw,136px);letter-spacing:-.022em;line-height:.98}
.d2{letter-spacing:-.018em}.d3{letter-spacing:-.015em}.mani .txt{letter-spacing:-.012em}.cta .big{letter-spacing:-.022em}.stat .v{letter-spacing:-.02em}
.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em{font-weight:500}
.lede{line-height:1.3}
#pre .wm{font-family:'Cormorant SC',Georgia,serif;font-weight:600;color:var(--bone)}
.hero .eyebrow{color:var(--accL)}
.ftr .bigsvg{color:var(--bone)}
.ftr .disc{position:relative;z-index:1;max-width:78ch;margin:clamp(22px,2.4vw,34px) auto 0;text-align:center;font-size:13px;color:var(--stone)}
.ftr .fcv{opacity:.24!important}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD)}
.cta .addr h3{margin-top:12px}
.cta>.wrap>.cx{grid-column:1/-1}
.cta .offs{margin-top:0;grid-template-columns:1fr 1fr}
.cta .offs>div:last-child{grid-column:1/-1}
.pl3 .lab{margin:0 0 12px}
/* CL: the shared masthead list (_kit/components/masthead.html), re-skinned with tokens for a dark band */
.mh{--mh-ink:var(--bone);--mh-mute:var(--stone);--mh-line:var(--hair);--mh-accent:var(--accL);--mh-display:var(--disp);--mh-sans:var(--sans);--mh-mono:var(--mono);display:grid;gap:56px}
.mh-label{margin:0 0 12px;font:500 11.5px/1.2 var(--mh-mono,ui-monospace,monospace);letter-spacing:.14em;text-transform:uppercase;color:var(--mh-mute)}
.mh-list{list-style:none;margin:0;padding:0;border-top:1px solid var(--mh-line)}
.mh-list>li{border-bottom:1px solid var(--mh-line)}
.mh-row{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,3fr) minmax(0,5fr) 24px;column-gap:24px;align-items:center;padding:18px 0;color:var(--mh-ink);text-decoration:none}
.mh-name{justify-self:start;font:400 21px/1.25 var(--mh-display,Georgia,serif);letter-spacing:-.005em;transition:color .25s ease,background-size .35s cubic-bezier(.2,.7,.2,1);background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;padding-bottom:2px}
.mh-role{font:400 13.5px/1.4 var(--mh-sans,system-ui,sans-serif);color:var(--mh-mute)}
.mh-sum{font:400 14.5px/1.5 var(--mh-sans,system-ui,sans-serif);color:var(--mh-ink);opacity:.86;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.mh-arrow{justify-self:end;transform:translateX(-8px);font:400 15px/1 var(--mh-sans,system-ui,sans-serif);color:var(--mh-mute);transition:transform .25s ease,color .25s ease}
.mh-sum{transition:opacity .25s ease}
div.mh-row{grid-template-columns:minmax(0,4fr) minmax(0,3fr) minmax(0,5fr) 24px}
.mh-name{font-weight:500}
@media (max-width:760px){
  .mh{gap:40px}
  .mh-row,div.mh-row{grid-template-columns:1fr 20px;row-gap:4px;padding:14px 0}
  .mh-name{grid-column:1;font-size:19px}.mh-arrow{grid-column:2;grid-row:1}
  .mh-role,.mh-sum{grid-column:1 / -1}
  .mh-sum{-webkit-line-clamp:3}
}
@media (max-width:640px){.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:50vh;height:50svh}.scene svg.mob text{font-size:11.5px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = [m for m in re.findall(r'(?i)firelight|fort lauderdale|rick@|gouws', src)]
open(os.path.join(K, 'src', 'orser.src.html'), 'w', encoding='utf-8').write(src)
print('wrote src; leftovers:', len(leftover))
