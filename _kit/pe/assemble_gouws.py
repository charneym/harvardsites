#!/usr/bin/env python3
"""Assemble _kit/src/gouws.src.html from the firelight engine regions (HOME-ONLY format).
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

INK = '#0d1226'
reg('meta', '''<title>Gouws Capital — Investment management with risk management and hedging</title>
<meta name="description" content="Gouws Capital LLC is a registered investment adviser in Charlotte, North Carolina, offering customized investment management with a strong emphasis on risk management and hedging.">
<meta name="theme-color" content="#0d1226">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230d1226'/%3E%3Ccircle cx='40' cy='30' r='7' fill='%23e8c46a'/%3E%3Cpath d='M6 50L22 32L31 41L42 28L58 50Z' fill='%23f3f1f2'/%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts Cormorant Garamond:500,500i; Manrope:400,500; Cinzel:500*/")
reg('root', ''':root{
  --ink:#0d1226;--inkr:13,18,38;--boner:243,241,242;--accr:217,180,90;--ink2:#141a35;--ink3:#1e2546;--deep:#090d1c;
  --bone:#f3f1f2;--bone2:#e8e5e9;--bone3:#dcd8de;
  --stone:#acaec4;--stoneD:#4f5476;
  --acc:#d9b45a;--accL:#e8c46a;--accD:#7a5f14;
  --hair:rgba(243,241,242,.14);--hairD:rgba(13,18,38,.16);
  --disp:'Cormorant Garamond',Georgia,'Times New Roman',serif;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#0d1226}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.logo{width:auto;height:22px;flex:none;overflow:visible}
.brand .bt{font:500 30px 'Cinzel',Georgia,serif;letter-spacing:.08em;fill:var(--accL)}
.brand .wt{font:500 10.5px/1.25 var(--mono);letter-spacing:.2em;text-transform:uppercase;color:var(--stone);max-width:7.5em;padding-top:2px}''')

reg('seen', '<script>try{if(sessionStorage.getItem("gcl-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M4 74L28 46L40 57L60 32L92 74H4"/></svg>
    <div class="wm"><span>GOUWS</span></div>
  </div>
  <span class="lab pl">Investment management · Charlotte, North Carolina</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="Gouws Capital, home"><svg class="logo" viewBox="0 0 150 30" aria-hidden="true"><text x="0" y="26" class="bt">GOUWS</text></svg><span class="wt">Capital LLC</span></a>')
reg('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/investments">Investments</a>
    <a class="nl ul" href="#/safety">Safety</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="btn" href="#/contact">Contact ''' + ARRS + '''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/approach">Approach</a></li>
    <li><a href="#/investments">Investments</a></li>
    <li><a href="#/safety">Safety</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Charlotte, North Carolina</div>
    <div><span class="lab">Phone</span><br><a href="tel:+17049443233">704-944-3233</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Gouws Capital</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="Gouws Capital";\nvar PK="gcl";')

# ---------------- content ----------------
reg('content', r'''var FONTS=['500 1em "Cormorant Garamond"','italic 500 1em "Cormorant Garamond"','400 1em "Manrope"','500 1em "Manrope"','500 1em "Cinzel"'];
var TEL="+17049443233",TELT="704-944-3233",MOB="704-650-9701";
var ADV="https://www.gouwscapital.com/ADV.pdf",CRS="https://reports.adviserinfo.sec.gov/crs/crs_153812.pdf",IAPD="https://adviserinfo.sec.gov/firm/summary/153812";
var SHEETS=[],GROUPS=[];
/* [name, title, photo, summary, background] (all from gouwscapital.com/team) */
var TEAM=[
 ["Fanie Gouws, CFA","Founder and Principal","https://storage.googleapis.com/wzukusers/user-29236318/images/5991de3bd99ffBwO0NV5/Fanie_Final_d400.jpg",
  "More than 30 years in the financial services industry, including heading Tax-Efficient Risk Management and Enhanced Total Return at Brown Brothers Harriman.",
  "He began his career at Value Line as an options and convertible bonds analyst. At Kidder, Peabody he specialized in asset allocation, portfolio construction, program trading, options and futures. Before finance he worked as a structural engineer designing nuclear plants, and raced bicycles full time in Europe. B.S. in Engineering, Rensselaer Polytechnic Institute (1979); Chartered Financial Analyst (1988)."],
 ["Justin M. Brooks, CFA","Director of Research","https://storage.googleapis.com/production-ipage-v1-0-6/756/665756/CReRiIxA/4c3cabf810ef44ffa9e3e1d30ba9c60d",
  "Previously Portfolio Manager at Eastover Capital Management in Charlotte for six years, responsible for its trading, research and portfolio management.",
  "He was a member of Eastover’s Investment Committee. Before that he was an Analyst on Merrill Lynch’s institutional trading desk, supporting sales trading on the electronic desks in New York, London and Singapore. BA in Economics, Clemson University; Series 65; CFA® charterholder."],
 ["Trace Gouws","Chief Technology Officer and Business Manager","https://storage.googleapis.com/production-ipage-v1-0-7/247/1990247/rLHjyZOT/f9e23fc6951f4cf8acbc777892bdc67d",
  "Began her career as a computer programmer for IBM.",
  "At Randall Helms she was chiefly responsible for creating advanced computer programs applied to financial analysis, including the management of diversified equity portfolios, for domestic and international investment managers."]
];
var DOCS=[
 {d:"Form CRS",s:"Client relationship summary",t:"Form CRS: our services, fees, conflicts and conduct",u:CRS},
 {d:"Form ADV",s:"Part 2A brochure",t:"Form ADV Part 2A: our firm brochure",u:ADV},
 {d:"2019-02-14",s:"Publication",t:"Achieving Financial Security is a Race against Time",u:"https://www.gouwscapital.com/Publication_20190214.pdf"},
 {d:"SEC",s:"Adviser public disclosure",t:"Gouws Capital LLC on the SEC’s Investment Adviser Public Disclosure site",u:IAPD}
];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",investments:"s-investments",safety:"s-safety",team:"s-team",insights:"s-insights",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function docRows(list){return '<ul class="rows">'+list.map(function(n){var dt=/^\d{4}-/.test(n.d)?'<time class="lab" datetime="'+n.d+'">'+fd(n.d)+'</time>':'<span class="lab">'+esc(n.d)+'</span>';
  return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm">'+dt+'<span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<div class="tm">'+TEAM.map(function(p){var ini=p[0].split(" ").map(function(x){return x[0]}).slice(0,2).join("");
  return '<article><div class="ph"><img src="'+p[2]+'" alt="'+esc(p[0].replace(/, CFA$/,""))+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"><span class="ini" aria-hidden="true">'+ini+'</span></div>'+
   '<h3>'+esc(p[0])+'</h3><p class="ttl">'+esc(p[1])+'</p><p class="sm">'+esc(p[3])+'</p>'+
   '<details><summary class="dbtn">Background</summary><p>'+esc(p[4])+'</p></details></article>'}).join("")+'</div>'}
function ico(n){var I={
  vault:'<rect x="6" y="10" width="52" height="44"/><circle cx="32" cy="32" r="12"/><path class="a" d="M32 20v24M20 32h24"/><path d="M12 54v4M52 54v4"/>',
  page:'<path d="M14 6h28l10 10v42H14z"/><path d="M42 6v10h10"/><path class="a" d="M22 28h22M22 36h22M22 44h14"/>',
  scale:'<path d="M32 8v48M18 56h28"/><path class="a" d="M10 18h44"/><path d="M10 18L4 36h12zM54 18l-6 18h12z"/><path d="M4 36a6 4 0 0 0 12 0M48 36a6 4 0 0 0 12 0"/>'};
  return '<svg viewBox="0 0 64 64" aria-hidden="true">'+I[n]+'</svg>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Registered investment adviser<span class="nomob"> · Charlotte, North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Wealth managed,</span><span class="l">risk <em>hedged.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Customized investment management with a strong emphasis on risk management and hedging, for clients who want their capital invested for the long term.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Free consultation '+ARR+'</a><a class="btn" href="#/approach">Our approach</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our philosophy</span>'+
   '<p class="txt" id="mani">Emotional investing at market peaks and lows erodes wealth. Successful investing takes advance planning, and at our firm planning is continuous and preventative, <em>never spurious or emotional.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2010</span><span class="k">The year Gouws Capital was established in Charlotte</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><span class="k">States where our clients are based</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30<sup>+</sup></span><span class="k">Years our founder has spent in the financial services industry</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with clients</span><h2 class="d3">Risk management, <em>move by move.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Client</span><span>Hedge</span><span>Plan</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Every client is unique.</h2><p>We start with your overall wealth, risk tolerance and income requirements, and tailor the portfolio to your specific needs.</p></article>'+
     '<article class="step"><h2>Hedged, not just diversified.</h2><p>Correlations jump in a crisis. So we use broad market hedging, covered call writing and multiple asset classes, and for concentrated positions, tax-efficient hedging and diversification programs.</p></article>'+
     '<article class="step"><h2>Planned ahead, kept liquid.</h2><p>We invest only in exchange traded securities, so capital can be raised promptly, and we plan in advance so clients can act on the opportunities a market crisis creates.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-investments" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investments</span><h2 class="d2 split">Four asset classes, <em>one plan.</em></h2></div><p data-r>You are unique, and your investments should reflect your needs and circumstances. Depending on your situation, your portfolio may hold some or all of these. Client portfolios are reviewed daily.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Equities</dt><dd>The primary growth medium: Exchange Traded Funds, direct stock purchases and associated derivatives, for exposure to U.S. and foreign markets.</dd></div>'+
    '<div><dt class="lab">Fixed income</dt><dd>A hedge against equity risk, and a component of our dynamic asset allocation process.</dd></div>'+
    '<div><dt class="lab">Commodities</dt><dd>Positioned for periodic supply and demand imbalances in key commodities, and as a potential hedge against long-term inflation.</dd></div>'+
    '<div><dt class="lab">Hedging instruments</dt><dd>Securities that can be directly hedged, and a broad market hedge when our asset allocation model says the risk warrants it.</dd></div>'+
   '</dl>'+
   '<p class="note-s" data-r>Our hedging programs are not based on theoretical correlations. They provide a direct offset to market risk, which is what differentiates Gouws Capital from conventional diversification.</p>'+
  '</div></section>'+

  '<section class="sec dark2" data-theme="dark"><div class="wrap">'+
   '<div class="two"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d2 split">Capital with a <em>long horizon.</em></h2>'+
    '<p class="muted" data-r style="margin-top:28px;max-width:40ch">Individuals, trusts and estates, with taxable and tax-exempt portfolios, including concentrated positions of up to 100% in a single security.</p></div>'+
   '<div><p class="lede" data-r style="margin-bottom:30px">We can help you if:</p><ul class="aims">'+
    '<li><span>You have accumulated capital you wish to invest with a long-term investment horizon.</span></li>'+
    '<li><span>You are concerned about the financial markets.</span></li>'+
    '<li><span>You are planning for retirement.</span></li>'+
    '<li><span>You just do not know what to do about investing, period.</span></li>'+
   '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-safety" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Safety</span><h2 class="d2 split">Built to protect <em>client assets.</em></h2></div><p data-r>We want clients to know that their savings are carefully monitored, results are reported accurately, and accounts are protected against intrusion.</p></div>'+
   '<div class="pillars">'+
    '<div class="pl3">'+ico("vault")+'<span class="lab">01 · Custody</span><h3>We never hold your assets</h3><p>Client assets are held by an internationally known custodian, Charles Schwab &amp; Co., not by our firm.</p></div>'+
    '<div class="pl3">'+ico("page")+'<span class="lab">02 · Reporting</span><h3>Statements straight from Schwab</h3><p>Monthly statements come directly from the custodian, with real-time electronic access, and an affiliate of the custodian calculates performance.</p></div>'+
    '<div class="pl3">'+ico("scale")+'<span class="lab">03 · Conduct</span><h3>Your interests first</h3><p>We receive no commissions on trades, and our CFA-led team abides by the CFA Institute Code of Ethics and Standards of Professional Conduct.</p></div>'+
   '</div></div></section>'+

  '<section class="sec dark" id="s-team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by <em>charterholders.</em></h2></div><p data-r>Our custodian’s support team handles operations and administration, so we devote more than 90% of our time to investment management and research, and keep fees lower.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="s-insights" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Insights and disclosures</span><h2 class="d3 split">Read before <em>you invest.</em></h2></div></div>'+docRows(DOCS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Complimentary review</span>'+
   '<h2 class="big split">Concerned about your <em>investments?</em></h2>'+
   '<p class="sub" data-r>We are delighted to offer a complimentary review of your particular needs and circumstances, at your convenience.</p>'+
   '<div class="act" data-r><a class="btn solid" href="tel:'+TEL+'">Call '+TELT+' '+ARR+'</a><a class="btn" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Office</span><h3>Charlotte, North Carolina</h3><p>Gouws Capital LLC<br>15720 Brixham Hill Avenue, Suite 300<br>Charlotte, NC 28277</p></div>'+
    '<div class="offs" data-r><div><span class="lab">Office</span><b><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></b></div><div><span class="lab">Mobile</span><b><a class="ul" href="tel:+17046509701">'+MOB+'</a></b></div>'+
     '<div><span class="lab">Disclosures</span><b class="em"><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a> · <a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a></b></div></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>15720 Brixham Hill Avenue, Suite 300<br>Charlotte, NC 28277</div>'+
   '<div class="c"><span class="lab">Phone</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a> · office<br><a class="ul" href="tel:+17046509701">'+MOB+'</a> · mobile</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/investments">Investments</a><br><a class="ul" href="#/safety">Safety</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/insights">Insights</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+IAPD+'" target="_blank" rel="noopener">SEC adviser disclosure</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:Cinzel,Georgia,serif;font-weight:500;font-size:44px;letter-spacing:.08em">GOUWS CAPITAL</text></svg>'+
  '<p class="disc">Gouws Capital LLC is a registered investment adviser. Registration with the SEC does not imply a certain level of skill or training.</p>'+
  '<div class="legal"><span class="lab">© 2026 Gouws Capital LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){return {k:"home",v:vHome,t:"Gouws Capital — Investment management with risk management and hedging",x:"Home"}}''')

# ---------------- hero field: real photograph (rephoto 2026-11-20) ----------------
reg('field', r'''/* ================= HERO FIELD (HOME_BRIEF update 2026-11-20, option b): a real photograph, uptown Charlotte (the firm's city) at last light, Duke Energy Center and the Ally tower over I-77.
   Source: "Skyline of Charlotte at Sunset, North Carolina, USA" by Andres Nino on Pexels (watermark cropped out), https://www.pexels.com/photo/skyline-of-charlotte-at-sunset-north-carolina-usa-20018783/ (free licence).
   Graded in hero.webp to the site's palette: highlights compressed, exposure lowered, shadows pulled to the page ink so the
   photo melts into it (DJ). It sits right of ~45% on desktop under a deep ink scrim over the headline (DI); a very slow
   Ken Burns drift, no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0d1226",K="13,18,38";var IW=2400,IH=1547,EX=.5,EY=.42;
  function A(a){return "rgba("+K+","+a+")"}
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.52,w*1.0):h;
    var ih=mob?U*1.25:Math.max(h*1.12,w*.62*IH/IW),iw=ih*(IW/IH);
    if(mob&&iw<w*1.1){iw=w*1.1;ih=iw*IH/IW}
    var kx=mob?w*.5:w*.72,ky=mob?U*.52:h*.5;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.045*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX-k*G.iw*.012,y=G.ky-dh*EY-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      var fe=Math.min(dw*.24,w*.2);
      if(x>0){c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x)+1,h)}
      var eg=c.createLinearGradient(x,0,x+fe,0);eg.addColorStop(0,A(1));eg.addColorStop(1,A(0));c.fillStyle=eg;c.fillRect(Math.max(0,x)-1,0,fe+2,h);
      var xr=x+dw;if(xr<w+fe){var rg=c.createLinearGradient(xr-fe*.7,0,xr,0);rg.addColorStop(0,A(0));rg.addColorStop(1,A(1));c.fillStyle=rg;c.fillRect(xr-fe*.7,0,fe*.7+1,h);if(xr<w){c.fillStyle=BG;c.fillRect(Math.floor(xr)-1,0,w-xr+2,h)}}
      if(y>0){c.fillStyle=BG;c.fillRect(0,0,w,Math.ceil(y)+1);var tg=c.createLinearGradient(0,y,0,y+dh*.12);tg.addColorStop(0,A(1));tg.addColorStop(1,A(0));c.fillStyle=tg;c.fillRect(0,y-1,w,dh*.12+1)}
      var yb=y+dh;if(yb<h){c.fillStyle=BG;c.fillRect(0,Math.floor(yb)-1,w,h-yb+2)}
      var bfe=dh*.12;var bg2=c.createLinearGradient(0,yb-bfe,0,yb);bg2.addColorStop(0,A(0));bg2.addColorStop(1,A(1));c.fillStyle=bg2;c.fillRect(0,yb-bfe,w,bfe+1);
      if(!G.mob){
        var rv=c.createLinearGradient(w-Math.max(90,w*.1),0,w,0);rv.addColorStop(0,A(0));rv.addColorStop(1,A(.85));c.fillStyle=rv;c.fillRect(w-Math.max(90,w*.1),0,Math.max(90,w*.1)+1,h);
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.72,0);lv.addColorStop(0,A(1));lv.addColorStop(.58,A(.94));lv.addColorStop(.82,A(.55));lv.addColorStop(1,A(0));c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.26);tv.addColorStop(0,A(.78));tv.addColorStop(1,A(0));c.fillStyle=tv;c.fillRect(0,0,w,h*.26);
        var bv=c.createLinearGradient(0,h*.64,0,h);bv.addColorStop(0,A(0));bv.addColorStop(1,A(.94));c.fillStyle=bv;c.fillRect(0,h*.64,w,h*.36+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,A(.78));tv2.addColorStop(1,A(0));c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.62,0,G.bh);mv.addColorStop(0,A(0));mv.addColorStop(1,A(1));c.fillStyle=mv;c.fillRect(0,G.bh*.62,w,G.bh*.38+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();''')

# ---------------- story: a chessboard in fine line ----------------
reg('story', r'''/* the story scene, drawn from the chessboard on Gouws Capital's own site. ONE board in perspective. Step 1 the king,
   the client's portfolio, stands alone and the three things we learn first point to it. Step 2 the defenders close in
   around it (hedges, covered calls, other asset classes). Step 3 a knight's move is prepared in advance to a lit square:
   the plan made before the crisis, with liquid, exchange-traded holdings. */
var PC={
 pawn:'M-20 0h40v-6h-40zM-15 -6C-13 -18 -8 -26 -7 -32h14C8 -26 13 -18 15 -6zM-11 -32h22v-4h-22zM0 -36m-11 -10a11 11 0 1 0 22 0a11 11 0 1 0 -22 0',
 rook:'M-24 0h48v-7h-48zM-18 -7L-14 -50h28L18 -7zM-20 -50h40v-18h-7v7h-8v-7h-10v7h-8v-7h-7z',
 bishop:'M-22 0h44v-7h-44zM-15 -7C-12 -24 -7 -38 -6 -50h12C7 -38 12 -24 15 -7zM-12 -50h24v-4h-24zM0 -94C13 -82 13 -64 8 -54h-16C-13 -64 -13 -82 0 -94zM4 -84l-7 9M0 -94m-4 -4a4 4 0 1 0 8 0a4 4 0 1 0 -8 0',
 knight:'M-23 0h46v-7h-46zM-17 -7C-18 -26 -9 -38 -14 -54C-19 -68 -12 -84 2 -92C9 -96 14 -94 15 -88L28 -68C31 -62 26 -58 20 -60L8 -64C11 -48 19 -32 17 -7zM6 -78m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0',
 king:'M-26 0h52v-8h-52zM-18 -8C-15 -30 -9 -52 -8 -70h16C9 -52 15 -30 18 -8zM-14 -70h28v-5h-28zM-11 -75C-16 -88 -6 -100 0 -100C6 -100 16 -88 11 -75zM0 -100v-20M-7 -112h14'};
var BD={yH:-157.5,C:597.5,cx:400,W:620,zF:1.825};
function bz(v){return BD.zF-(BD.zF-1)*v}
function bp(u,v){var z=bz(v);return [BD.cx+(u-.5)*BD.W/z,BD.yH+BD.C/z,1/z]}
function board(mob){var o='',i,j,k;
  for(i=0;i<8;i++)for(j=0;j<8;j++){if((i+j)%2===0)continue;var a=bp(i/8,j/8),b=bp((i+1)/8,j/8),cc=bp((i+1)/8,(j+1)/8),d=bp(i/8,(j+1)/8);
    o+='<path class="sq" d="M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+b[0].toFixed(1)+' '+b[1].toFixed(1)+'L'+cc[0].toFixed(1)+' '+cc[1].toFixed(1)+'L'+d[0].toFixed(1)+' '+d[1].toFixed(1)+'Z"/>'}
  for(k=0;k<=8;k++){var p=bp(k/8,0),q=bp(k/8,1),r=bp(0,k/8),s=bp(1,k/8);o+='<path class="bd" d="M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'L'+q[0].toFixed(1)+' '+q[1].toFixed(1)+'M'+r[0].toFixed(1)+' '+r[1].toFixed(1)+'L'+s[0].toFixed(1)+' '+s[1].toFixed(1)+'"/>'}
  var A=bp(-.03,-.03),B=bp(1.03,-.03),C2=bp(1.03,1.03),D=bp(-.03,1.03);
  o+='<path class="frm" d="M'+A[0].toFixed(1)+' '+A[1].toFixed(1)+'L'+B[0].toFixed(1)+' '+B[1].toFixed(1)+'L'+C2[0].toFixed(1)+' '+C2[1].toFixed(1)+'L'+D[0].toFixed(1)+' '+D[1].toFixed(1)+'Z"/>';
  o+='<path class="edge" d="M'+D[0].toFixed(1)+' '+D[1].toFixed(1)+'v14H'+C2[0].toFixed(1)+'v-14"/>';
  return o}
function sqPath(i,j){var a=bp(i/8,j/8),b=bp((i+1)/8,j/8),cc=bp((i+1)/8,(j+1)/8),d=bp(i/8,(j+1)/8);return 'M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+b[0].toFixed(1)+' '+b[1].toFixed(1)+'L'+cc[0].toFixed(1)+' '+cc[1].toFixed(1)+'L'+d[0].toFixed(1)+' '+d[1].toFixed(1)+'Z'}
function piece(kind,i,j,cls,id){var p=bp((i+.5)/8,(j+.5)/8),s=(p[2]*(BD.ps||1.12)).toFixed(3);
  return '<g'+(id?' id="'+id+'"':'')+' class="'+(cls||'')+'" transform="translate('+p[0].toFixed(1)+' '+(p[1]+8*p[2]).toFixed(1)+') scale('+s+')"><g class="pm"><path class="pc'+(kind==="king"?" k":"")+'" d="'+PC[kind]+'"/><path class="ph" d="'+PC[kind]+'"/></g></g>'}
function tip(i,j,dy){var p=bp((i+.5)/8,(j+.5)/8);return [p[0],p[1]+(dy||0)*p[2]]}
/* label: text at (x,y) with a leader to a board point. side: "s" start-anchored, "e" end-anchored, "m" middle */
function lab(id,txt,x,y,side,to,mob){var anc=side==="s"?"start":side==="e"?"end":"middle",lx=side==="s"?x-10:side==="e"?x+10:x,ly=side==="m"?y+8:y-4;
  var ld=to?'<path class="ld" d="M'+lx.toFixed(1)+' '+ly.toFixed(1)+'L'+to[0].toFixed(1)+' '+to[1].toFixed(1)+'"/><circle class="dt" cx="'+to[0].toFixed(1)+'" cy="'+to[1].toFixed(1)+'" r="2.6"/>':'';
  return '<g class="lb" id="'+id+'">'+ld+'<text x="'+x+'" y="'+y+'" text-anchor="'+anc+'" class="w">'+txt+'</text></g>'}
function scene(){
  var mob=MOBILE();
  if(mob){BD={yH:-122,C:470,cx:200,W:380,zF:1.62,ps:1.4}}else{BD={yH:-240,C:780,cx:400,W:740,zF:1.75,ps:1.65}}
  var PS=BD.ps/1.12,K=tip(4,4,-128*PS),H1=tip(2,4,-60*PS),H2=tip(6,5,-100*PS),H3=tip(4,3,-50*PS),N1=tip(1,5,-96*PS),T=tip(2,3,0);
  var o='<svg'+(mob?' class="mob" viewBox="0 0 400 380"':' viewBox="0 10 800 545"')+' aria-hidden="true"><defs><pattern id="ht" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V4" stroke="rgba(243,241,242,.22)" stroke-width="1"/></pattern></defs>';
  o+='<g id="scBd">'+board(mob)+'</g>';
  o+='<path class="hl" id="scKs" d="'+sqPath(4,4)+'"/><path class="hl t" id="scTs" d="'+sqPath(2,3)+'"/>';
  var P0=bp(1.5/8,5.5/8),P1=bp(1.5/8,3.5/8),P2=bp(2.5/8,3.5/8);
  o+='<path class="gd" id="scMv" d="M'+P0[0].toFixed(1)+' '+P0[1].toFixed(1)+'L'+P1[0].toFixed(1)+' '+P1[1].toFixed(1)+'L'+P2[0].toFixed(1)+' '+P2[1].toFixed(1)+'"/>';
  /* guard lines from each defender's square to the king's square */
  var kk=bp(4.5/8,4.5/8),gs=[[2,4],[6,5],[3,3],[4,3],[5,3]];
  o+='<g id="scGd">'+gs.map(function(g){var a=bp((g[0]+.5)/8,(g[1]+.5)/8);return '<path class="gd" d="M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+kk[0].toFixed(1)+' '+kk[1].toFixed(1)+'"/>'}).join("")+'</g>';
  /* pieces, far rows first so nearer ones overlap correctly */
  o+=piece("pawn",3,3,"df","scD1")+piece("pawn",4,3,"df","scD2")+piece("pawn",5,3,"df","scD3")+piece("rook",2,4,"df","scD4")+piece("king",4,4,"","scK")+piece("bishop",6,5,"df","scD5")+piece("knight",1,5,"kn","scN");
  if(mob){
    o+=lab("l1a","WEALTH",14,30,"s",null)+lab("l1b","RISK TOLERANCE",200,30,"m",null)+lab("l1c","INCOME NEEDS",386,30,"e",null);
    o+=lab("l2a","BROAD MARKET HEDGES",14,30,"s",null)+lab("l2b","COVERED CALLS",386,30,"e",null)+lab("l2c","MULTIPLE ASSET CLASSES",200,58,"m",null);
    o+=lab("l3a","PLANNED IN ADVANCE",14,30,"s",null)+lab("l3b","EXCHANGE-TRADED",386,30,"e",null)+lab("l3c","PROMPT LIQUIDITY",200,58,"m",null);
  }else{
    o+=lab("l1a","WEALTH",30,110,"s",K)+lab("l1b","RISK TOLERANCE",770,110,"e",K)+lab("l1c","INCOME REQUIREMENTS",400,40,"m",[K[0],K[1]-14]);
    o+=lab("l2a","BROAD MARKET HEDGES",30,110,"s",H1)+lab("l2b","COVERED CALL WRITING",770,110,"e",H2)+lab("l2c","MULTIPLE ASSET CLASSES",400,40,"m",H3);
    o+=lab("l3a","PLANNED IN ADVANCE",30,110,"s",N1)+lab("l3b","OPPORTUNITY IN A CRISIS",770,110,"e",[T[0],T[1]-6])+lab("l3c","EXCHANGE-TRADED, LIQUID",400,40,"m",null);
  }
  return o+'</svg>';
}
function storyDraw(svg){
  var q=function(s){return $(s,svg)},qq=function(s){return $$(s,svg)};
  var E={bd:q("#scBd"),ks:q("#scKs"),ts:q("#scTs"),mv:q("#scMv"),gd:qq("#scGd path"),k:q("#scK"),df:qq(".df"),kn:q("#scN"),
    l1:qq("#l1a,#l1b,#l1c"),l2:qq("#l2a,#l2b,#l2c"),l3:qq("#l3a,#l3b,#l3c")};
  var GL=E.gd.map(function(p){return p.getTotalLength()}),ML=E.mv.getTotalLength();
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!E.k.isConnected)return;
    var s1=seg(p,.02,.18),s2=seg(p,.36,.56),s3=seg(p,.7,.9),o1=s1*(1-seg(p,.3,.36)),o2=s2*(1-seg(p,.64,.7));
    E.bd.style.opacity=(b*(.55+.45*s1)).toFixed(3);
    E.k.style.opacity=b.toFixed(3);E.ks.style.opacity=(b*(.35+.65*s1)).toFixed(3);
    show(E.l1,b*o1);show(E.l2,b*o2);show(E.l3,b*s3);
    E.df.forEach(function(d,k){var q2=seg(s2,k*.12,.5+k*.12);d.style.opacity=(b*q2).toFixed(3);d.firstChild.style.transform="translateY("+((1-q2)*-26).toFixed(1)+"px)"});
    E.gd.forEach(function(g,k){g.style.strokeDasharray="4 6";g.style.opacity=(b*s2*(1-.55*s3)).toFixed(3)});
    E.kn.style.opacity=(b*(.25+.75*s3)).toFixed(3);
    E.mv.style.strokeDasharray=ML+" "+ML;E.mv.style.strokeDashoffset=(ML*(1-s3)).toFixed(1);E.mv.style.opacity=b.toFixed(3);
    E.ts.style.opacity=(b*s3).toFixed(3);
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
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a3a6bf;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #6a6f92;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:500;font-size:clamp(28px,2.4vw,40px);line-height:1.1;letter-spacing:-.015em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .sq{fill:url(#ht)}
.scene .bd{fill:none;stroke:rgba(var(--boner),.34);stroke-width:1}
.scene .frm{fill:none;stroke:rgba(var(--boner),.72);stroke-width:1.4}
.scene .edge{fill:rgba(var(--boner),.05);stroke:rgba(var(--boner),.5);stroke-width:1.1}
.scene .pc{fill:var(--ink2);stroke:rgba(var(--boner),.86);stroke-width:1.3;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.scene .pc.k{stroke:var(--accL);stroke-width:1.6}
.scene .ph{fill:url(#ht);stroke:none;opacity:.55}
.scene .pm{transition:none}
.scene .hl{fill:rgba(var(--accr),.16);stroke:var(--accL);stroke-width:1.2}
.scene .gd{fill:none;stroke:var(--accL);stroke-width:1.2;stroke-dasharray:4 6}
.scene #scMv{stroke-width:1.6}
.scene .ld{fill:none;stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .dt{fill:var(--accL)}
.scene text{font-family:var(--mono);font-weight:500;font-size:12.5px;letter-spacing:.14em;fill:#b9bbd0}
.scene text.w{fill:var(--bone)}
.scene .lb{opacity:0}''')

# ---------------- global swaps outside regions (colours / weights) ----------------
src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(13,18,38,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a3a6bf}.rail span::before{background:var(--ink2);border-color:#6a6f92}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#b9bbd0}')
src = src.replace('.scene text{font-size:12px}', '.scene text{font-size:12.5px}')
src = src.replace('font-weight:300', 'font-weight:500').replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== Gouws Capital: navy dawn ground, their lavender-grey pages, their gold as the accent ===== */
.d1,.d2,.d3,.lede,.mani .txt,.cta .big,.stat .v{font-weight:500}
.d1{letter-spacing:-.02em}.hero-h{font-size:clamp(50px,7.2vw,136px);letter-spacing:-.022em;line-height:.98}
.d2{letter-spacing:-.018em}.d3{letter-spacing:-.015em}.mani .txt{letter-spacing:-.015em}.cta .big{letter-spacing:-.022em}.stat .v{letter-spacing:-.02em}
.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em{font-weight:500}
.lede{line-height:1.3}
#pre .wm{font-family:'Cinzel',Georgia,serif;font-weight:500;color:var(--accL)}
.hero .eyebrow{color:var(--accL)}
.ftr .bigsvg{color:var(--accL)}
.ftr .disc{position:relative;z-index:1;max-width:72ch;margin:clamp(22px,2.4vw,34px) auto 0;text-align:center;font-size:13px;color:var(--stone)}
.ftr .fcv{opacity:.26!important}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD)}
.cta .addr h3{margin-top:12px}
.cta>.wrap>.cx{grid-column:1/-1}
.cta .offs{margin-top:0;grid-template-columns:1fr 1fr}
.cta .offs>div:last-child{grid-column:1/-1}
.pl3 .lab{margin:0 0 12px}
/* team portraits (text inline expand, no bio sheets) */
.tm{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(36px,3.4vw,56px) var(--gap)}
.tm article{min-width:0}
.tm .ph{position:relative;aspect-ratio:4/5;overflow:hidden;background:var(--ink3);margin-bottom:24px}
.tm .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 22%;filter:grayscale(1) contrast(1.04);transition:filter .45s ease-out,transform .7s var(--eo)}
.tm article:hover .ph img{filter:grayscale(0);transform:scale(1.03)}
.tm .ph .ini{position:absolute;inset:0;display:none;place-items:center;font-family:var(--disp);font-size:64px;color:var(--stone)}
.tm .ph.noph img{display:none}.tm .ph.noph .ini{display:grid}
.tm h3{font-family:var(--disp);font-weight:500;font-size:clamp(28px,2.3vw,36px);line-height:1.08;letter-spacing:-.012em;margin:0 0 6px}
.tm .ttl{font-size:14.5px;color:var(--accL);margin:0 0 16px}
.tm .sm{font-size:15.5px;line-height:1.62;color:rgba(var(--boner),.84);margin:0 0 14px}
.tm details{border-top:1px solid var(--hair)}
.tm summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:14px 0;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase}
.tm summary::-webkit-details-marker{display:none}
.tm summary::after{content:"+";font-size:18px;line-height:1;color:var(--accL);transition:transform .3s var(--eo)}
.tm details[open] summary::after{transform:rotate(45deg)}
.tm details p{font-size:15px;line-height:1.62;color:var(--stone);margin:0 0 8px}
@media (max-width:1024px){.tm{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.tm{grid-template-columns:1fr}.tm .ph{aspect-ratio:1/1}.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:46vh;height:46svh}.scene svg.mob text{font-size:12px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = [m for m in re.findall(r'(?i)firelight|fort lauderdale|rick@', src)]
open(os.path.join(K, 'src', 'gouws.src.html'), 'w', encoding='utf-8').write(src)
print('wrote src; leftovers:', len(leftover))
