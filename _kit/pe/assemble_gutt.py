#!/usr/bin/env python3
"""Assemble _kit/src/gutt.src.html from the firelight engine regions (HOME-ONLY format).
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


INK = '#0a1433'
reg('meta', '''<title>Gutt Financial Management — Objective financial, tax and investment counsel, Atlanta</title>
<meta name="description" content="Gutt Financial Management is a fee-only registered investment adviser in Atlanta, founded in 1986 by Michael S. Gutt, J.D., LL.M., providing objective and personalized financial, tax and investment counsel on an ongoing basis.">
<meta name="theme-color" content="#0a1433">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2306227b'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-family='Georgia,serif' font-weight='700' font-size='26' fill='%23f2f4f7'%3EGFM%3C/text%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts Spectral:300,300i; Hanken Grotesk:400,500; Libre Caslon Text:700*/")
reg('root', ''':root{
  --ink:#0a1433;--inkr:10,20,51;--boner:242,244,247;--accr:150,174,206;--ink2:#0d1a40;--ink3:#16254f;--deep:#070e26;
  --bone:#f2f4f7;--bone2:#e6eaf0;--bone3:#d5dce6;
  --stone:#a9b6c7;--stoneD:#526175;
  --acc:#8fa8c8;--accL:#b4c8e2;--accD:#06227b;
  --hair:rgba(242,244,247,.14);--hairD:rgba(10,20,51,.16);
  --disp:'Spectral',Georgia,'Times New Roman',serif;
  --serif:'Spectral',Georgia,serif;
  --sans:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#081236 0%,#1a2f6a 40%,#5d6f98 58%,#1a2547 66%,#0d1736 80%,#0a1433 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.logo{width:auto;height:24px;flex:none;overflow:visible}
.brand .bt{font:700 30px 'Libre Caslon Text',Georgia,serif;letter-spacing:.02em;fill:var(--bone)}
.brand .wt{font:500 10.5px/1.25 var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--stone);max-width:13em;padding-top:2px}''')

reg('seen', '<script>try{if(sessionStorage.getItem("gfm-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M48 88V58M48 66L30 52M48 62L66 46M48 58C30 58 14 48 16 34C18 20 34 12 48 14C62 12 78 20 80 34C82 48 66 58 48 58"/></svg>
    <div class="wm"><span>GFM</span></div>
  </div>
  <span class="lab pl">Financial counsel · Atlanta, Georgia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="Gutt Financial Management, home"><svg class="logo" viewBox="0 0 84 30" aria-hidden="true"><text x="0" y="26" class="bt">GFM</text></svg><span class="wt">Gutt Financial Management</span></a>')
reg('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/services">Services</a>
    <a class="nl ul" href="#/clients">Clients</a>
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
    <li><a href="#/services">Services</a></li>
    <li><a href="#/clients">Clients</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/resources">Resources</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Monarch Plaza, Atlanta</div>
    <div><span class="lab">Phone</span><br><a href="tel:+14042374188">(404) 237-4188</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Gutt Financial Management</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="Gutt Financial Management";\nvar PK="gfm";')

# ---------------- content (all from guttfm.com, the Form CRS and the Form ADV on IAPD) ----------------
reg('content', r'''var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','700 1em "Libre Caslon Text"'];
var TEL="+14042374188",TELT="(404) 237-4188",FAX="(404) 365-8059",MAIL="laurie@guttfm.com";
var ADV="https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=1003278",CRS="https://reports.adviserinfo.sec.gov/crs/crs_109270.pdf",IAPD="https://adviserinfo.sec.gov/firm/summary/109270";
var SHEETS=[],GROUPS=[];
/* [name, role, one-sentence summary] (guttfm.com/about) */
var TEAM=[
 ["Michael S. Gutt, J.D., LL.M.","Founder · Senior Consultant","A financial counselor since 1981, first at The Ayco Corporation; tax attorney (J.D. and LL.M. in Taxation, Emory) and registered investment adviser."],
 ["Susan C. Spratlin","Associate Financial Consultant","With GFM since 1988; prepares income tax projections, retirement and estate analyses, performance reports and client tax returns."],
 ["Laurie K. Frank","Office Administrator","Administrative support and client services for GFM since April 2015."]
];
var DOCS=[
 {d:"Form CRS",s:"Client relationship summary",t:"Form CRS: our services, fees, conflicts and standard of conduct",u:CRS},
 {d:"Form ADV",s:"Part 2A brochure",t:"Form ADV Part 2A: our firm brochure",u:ADV},
 {d:"Checklist",s:"First meeting",t:"Checklist for the first data gathering meeting",u:"https://guttfm.com/wp-content/uploads/2022/11/GFM-CHECKLIST.pdf"},
 {d:"Worksheet",s:"First meeting",t:"Client worksheet: data gathering for the first planning meeting",u:"https://guttfm.com/wp-content/uploads/2022/11/GFM-CLIENT-WORKSHEET-1.pdf"},
 {d:"Privacy",s:"Policy",t:"Our privacy policy",u:"https://guttfm.com/wp-content/uploads/2022/11/GFM-PRIVACY-POLICY-1.pdf"},
 {d:"SEC",s:"Adviser public disclosure",t:"Gutt Financial Management on the SEC’s Investment Adviser Public Disclosure site",u:IAPD}
];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",services:"s-services",clients:"s-clients",team:"s-team",resources:"s-resources",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function docRows(list){return '<ul class="rows">'+list.map(function(n){
  return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><span class="lab">'+esc(n.d)+'</span><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<section class="mh"><div class="mh-group"><p class="mh-label">Our team</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></section>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Fee-only financial counsel<span class="nomob"> · Atlanta, since 1986</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Objective counsel,</span><span class="l"><em>year after year.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Personalized financial, tax and investment counsel for individuals and families. Because we sell no products, only services, our counsel is objective by design.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/contact">Arrange a first meeting '+ARR+'</a><a class="btn" href="#/approach">How we work</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<p class="txt" id="mani">To provide objective and personalized financial, tax, and investment counsel to each and every client, <em>on an ongoing basis.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1986</span><span class="k">The year Michael S. Gutt founded GFM in Atlanta</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$162<sup>M</sup></span><span class="k">Regulatory assets under management, per our Form ADV filed January 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">Financial disciplines coordinated into one plan, by a fee-only firm that sells no products</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with clients</span><h2 class="d3">A plan that grows <em>ring by ring.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Listen</span><span>Plan</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It starts with a first meeting.</h2><p>A checklist and a client worksheet gather the facts. Then we examine your financial situation and goals, your tolerance for risk and your investment time horizon.</p></article>'+
     '<article class="step"><h2>Six disciplines, one plan.</h2><p>As generalists with different areas of expertise, we coordinate investments, capital, income tax, retirement, estate and insurance planning into one overall strategy.</p></article>'+
     '<article class="step"><h2>Counsel that keeps going.</h2><p>Discretionary accounts are monitored at least quarterly and reviewed with you at least annually, with monthly brokerage statements and quarterly and annual performance summaries.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our services</span><h2 class="d2 split">Strength in a number of <em>disciplines.</em></h2></div><p data-r>Mr. Gutt’s experience as a tax attorney and registered investment adviser gives him additional insight into the intricacies of financial planning. We coordinate these efforts so each serves the others.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Money management</dt><dd>Portfolios customized to your objectives and tolerance for risk, diversified across exchange-traded funds, no-load mutual funds and U.S. government securities, and actively allocated.</dd></div>'+
    '<div><dt class="lab">Capital planning</dt><dd>Asset allocation, cash flow analysis, family budgets, company benefits, stock option strategies, and analysis of existing debt and financing.</dd></div>'+
    '<div><dt class="lab">Income tax planning</dt><dd>Tax projections, withholding and estimated tax planning, the alternative minimum tax, retirement plan choices, and preparation of individual and fiduciary returns.<sup>*</sup></dd></div>'+
    '<div><dt class="lab">Retirement planning</dt><dd>Strategies for distributing company plans, and analysis of the income available from pensions, corporate benefits, Social Security and IRAs.</dd></div>'+
    '<div><dt class="lab">Estate planning</dt><dd>Review of wills and trusts, beneficiary designations, ownership of assets and gifts, and preparation of estate documents and gift or estate tax returns.<sup>*</sup></dd></div>'+
    '<div><dt class="lab">Insurance planning</dt><dd>Life, health, disability, and property and casualty coverage: adequacy, cost efficiency, beneficiaries and ownership.</dd></div>'+
   '</dl>'+
   '<p class="note-s" data-r><sup>*</sup> Tax return and document preparation carry an additional fee. Our fees are based on assets under management, negotiated annual fees or hourly fees; we are not paid commissions.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="s-clients" data-theme="dark"><div class="wrap">'+
   '<div class="two"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d2 split">Smaller by design, <em>closer by choice.</em></h2>'+
    '<p class="muted" data-r style="margin-top:28px;max-width:40ch">Individuals and families above all, as well as trusts, estates, pension and profit sharing plans, charitable organizations and businesses.</p></div>'+
   '<div><p class="lede" data-r style="margin-bottom:30px">Two ways to work with us:</p><ul class="aims">'+
    '<li><span><b>Comprehensive financial planning.</b> A holistic plan across investments, retirement, estate, income tax and insurance, with investments managed on a discretionary or non-discretionary basis.</span></li>'+
    '<li><span><b>Asset management.</b> A stand-alone account managed on a discretionary basis, consistent with the investment strategy you select.</span></li>'+
    '<li><span>Either way, we never take custody of your assets, and our smaller size and greater accessibility mean personal attention for each and every client.</span></li>'+
   '</ul></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Who we are</span><h2 class="d2 split">Relationships measured <em>in decades.</em></h2></div><p data-r>We believe the long-standing relationships we have forged with our clients are testimony to our commitment to the best quality of service, on a continuing basis.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="s-resources" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Resources and disclosures</span><h2 class="d3 split">Read before <em>we meet.</em></h2></div></div>'+docRows(DOCS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Get in touch</span>'+
   '<h2 class="big split">Begin with a <em>first meeting.</em></h2>'+
   '<p class="sub" data-r>Call or write to arrange your first data gathering meeting at our Atlanta office. Your primary contact is Michael Gutt, with Susan Spratlin as a second.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email '+MAIL+' '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Office</span><h3>Atlanta, Georgia</h3><p>Gutt Financial Management, LLC<br>3414 Peachtree Road, 103 Monarch Plaza<br>Atlanta, Georgia 30326</p></div>'+
    '<div class="offs" data-r><div><span class="lab">Phone</span><b><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></b></div><div><span class="lab">Fax</span><b>'+FAX+'</b></div>'+
     '<div><span class="lab">Email</span><b><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></b></div>'+
     '<div><span class="lab">Disclosures</span><b class="em"><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a> · <a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a></b></div></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>3414 Peachtree Road<br>103 Monarch Plaza<br>Atlanta, Georgia 30326</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAX+'<br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/clients">Clients</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/resources">Resources</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+IAPD+'" target="_blank" rel="noopener">SEC adviser disclosure</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:Spectral,Georgia,serif;font-weight:300;font-size:44px;letter-spacing:.02em">Gutt Financial</text></svg>'+
  '<p class="disc">Gutt Financial Management, LLC is registered with the U.S. Securities and Exchange Commission as an investment adviser. Registration does not imply a certain level of skill or training.</p>'+
  '<div class="legal"><span class="lab">© 2026 Gutt Financial Management, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){return {k:"home",v:vHome,t:"Gutt Financial Management — Objective financial, tax and investment counsel, Atlanta",x:"Home"}}''')

# ---------------- hero field: an old oak at blue hour ----------------
reg('field', r'''/* ================= HERO FIELD: an old Southern oak at blue hour on an Atlanta meadow ("the city in a forest").
   A broad, low-limbed oak stands to the right of the copy; behind it a distant tree line in valley haze and the last pale
   light on the horizon; stars come out overhead and fireflies drift over the grass. It moves on its own (fireflies,
   twinkle, drifting haze) with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oLand=null,FLY=[],STARS=[],HAZE=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function mix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
  function rgb(a,al){return "rgba("+(a[0]|0)+","+(a[1]|0)+","+(a[2]|0)+","+(al==null?1:al)+")"}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var S=mob?Math.min(h*.37,w*.86):h,hz=S*(mob?.8:.79);
    var TH=mob?S*.6:Math.min(h*.5,cw*.36),tx=mob?w*.56:side+cw*.79;
    return {mob:mob,side:side,cw:cw,S:S,hz:hz,TH:TH,tx:tx,ty:hz+S*(mob?.035:.03),gx:mob?w*.3:side+cw*.62};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function groundY(x){var S=G.S;return G.hz+S*.012*Math.sin(x/(w*.23)+1.3)+S*.008*Math.sin(x/(w*.09)+.4)}
  function build(){
    var S=G.S,hz=G.hz,A=mk(S+2),g=A[1];oSky=A[0];
    /* blue-hour sky: deep navy overhead, the brand's slate blue lower down, a last pale band on the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#050c29");sky.addColorStop(.38,"#102463");sky.addColorStop(.66,"#2f4a8a");sky.addColorStop(.84,"#6c7fac");sky.addColorStop(.95,"#a9aec2");sky.addColorStop(1,"#c9bfb6");
    g.fillStyle=sky;g.fillRect(0,0,w,S+2);
    var gl=g.createRadialGradient(G.gx,hz,0,G.gx,hz,S*(G.mob?.7:.62));gl.addColorStop(0,"rgba(236,214,186,.5)");gl.addColorStop(.35,"rgba(196,184,190,.18)");gl.addColorStop(1,"rgba(196,184,190,0)");
    g.fillStyle=gl;g.fillRect(0,0,w,S+2);
    /* a few long, thin clouds catching the last light */
    var R=rng(11);for(var k=0;k<(G.mob?4:8);k++){var cy=hz*(.3+R()*.5),cx=R()*w,cwid=w*(.12+R()*.22),ch=S*(.003+R()*.006),a=.05+.09*(cy/hz);
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(214,206,214,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(214,206,214,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    var B=mk(S+2),l=B[1];oLand=B[0];
    /* the distant tree line: Atlanta's canopy, soft in the haze */
    var Rt=rng(23);[[.026,"#34477b",.45,.012],[.016,"#223463",.85,.004]].forEach(function(L,li){l.fillStyle=L[1];l.globalAlpha=L[2];l.beginPath();l.moveTo(-10,hz+6);
      var x=-10;while(x<w+20){var big=.5+.5*Math.sin(x/(w*.13)+li*2.1)*Math.sin(x/(w*.051)+1),r=S*L[0]*(.35+Rt()*.75+big*.7),y=hz-S*L[3]-S*.012*big+Rt()*S*.004;l.moveTo(x+r*2,y);l.arc(x+r,y,r,0,Math.PI*2);x+=r*(.45+Rt()*.5)}
      l.fill();l.fillRect(-10,hz-S*L[3]-2,w+30,S*.03)});l.globalAlpha=1;
    /* the meadow */
    var gg=l.createLinearGradient(0,hz-S*.02,0,S);gg.addColorStop(0,"#1b2a52");gg.addColorStop(.25,"#0f1b3d");gg.addColorStop(1,"#0a1433");
    l.fillStyle=gg;l.beginPath();l.moveTo(-4,S+2);for(var x2=-4;x2<=w+6;x2+=4)l.lineTo(x2,groundY(x2));l.lineTo(w+6,S+2);l.closePath();l.fill();
    /* a low ground haze along the meadow */
    var hg=l.createLinearGradient(0,hz-S*.03,0,hz+S*.04);hg.addColorStop(0,"rgba(170,180,206,0)");hg.addColorStop(.5,"rgba(170,180,206,.16)");hg.addColorStop(1,"rgba(170,180,206,0)");l.fillStyle=hg;l.fillRect(0,hz-S*.03,w,S*.07);
    oak(l);
    /* grass along the near crest */
    var Rg=rng(91);l.strokeStyle="#081130";l.lineWidth=1;for(var q=0;q<(G.mob?160:420);q++){var gx=Rg()*w,gy=groundY(gx)+S*.004+Rg()*S*.01,gh=S*(.006+Rg()*.016)*(Math.abs(gx-G.tx)<G.TH*.5?1.4:1);l.beginPath();l.moveTo(gx,gy);l.quadraticCurveTo(gx+gh*.15,gy-gh*.6,gx+gh*(Rg()-.4)*.6,gy-gh);l.stroke()}
    STARS=[];var Rs=rng(5);for(var s=0;s<(G.mob?40:110);s++){var sy=Math.pow(Rs(),1.6)*hz*.62;STARS.push([Rs()*w,sy,.4+Rs()*.9,Rs()*6.28,.4+Rs()*1.4])}
    FLY=[];var Rf=rng(61),n=G.mob?14:34;for(var f=0;f<n;f++){var fx=G.mob?Rf()*w:G.side+G.cw*(.48+Rf()*.52);FLY.push([fx,hz+(S-hz)*(.05+Rf()*.6)-(Rf()<.4?G.TH*Rf()*.35:0),Rf()*6.28,.5+Rf()*.9,Rf()*6.28,1.4+Rf()*1.6])}
    HAZE=[];var Rh=rng(37);for(var m=0;m<(G.mob?4:7);m++)HAZE.push([Rh()*w,.5+Rh()*.5,Rh()<.5?1:-1,Rh()*6.28]);
  }
  /* the oak: a short, heavy trunk that parts low into broad limbs, the crown wider than it is tall, foliage in
     thousands of small leaf clusters lit at their edges by the light low on the horizon */
  function oak(g){
    var R=rng(1986),TH=G.TH,X=G.tx,Y=G.ty,segs=[],tips=[];
    /* the crown envelope: a broad dome, wider than tall */
    var CX=X,CY=Y-TH*.66,RX=TH*.8,RY=TH*.5;
    function inside(x,y){var dx=(x-CX)/RX,dy=(y-CY)/(y<CY?RY:RY*1.15);return dx*dx+dy*dy}
    function grow(x,y,a,len,wd,d){
      var x2=x+Math.cos(a)*len,y2=y+Math.sin(a)*len,e=inside(x2,y2);
      if(e>1){var f=.98/Math.sqrt(e);len*=Math.max(.35,f);x2=x+Math.cos(a)*len;y2=y+Math.sin(a)*len}
      var bend=(R()-.5)*.9,mx=(x+x2)/2+Math.cos(a+Math.PI/2)*len*bend*.22,my=(y+y2)/2+Math.sin(a+Math.PI/2)*len*bend*.22;
      segs.push([x,y,mx,my,x2,y2,wd,d]);
      if(d===0||len<TH*.025){tips.push([x2,y2]);return}
      if(d<=4){tips.push([(x+x2)/2,(y+y2)/2])}
      var n=d>2&&R()<.45?3:2;for(var k=0;k<n;k++){var sp=(.28+R()*.42)*(k===0?-1:k===1?1:(R()-.5)*1.2),na=a+sp;
        na=na+(-Math.PI/2-na)*(d>4?.1:.04);
        grow(x2,y2,na,len*(.66+R()*.18),wd*.64,d-1)}
      tips.push([x2,y2]);
    }
    var trunk=TH*.3,tw=TH*.07;
    segs.push([X,Y,X-tw*.15,Y-trunk*.5,X+tw*.05,Y-trunk,tw,9]);
    var limbs=[[-2.7,.55],[-2.35,.52],[-2.0,.48],[-1.7,.45],[-1.4,.46],[-1.08,.5],[-.78,.54],[-.45,.56]];
    limbs.forEach(function(L){grow(X+tw*.05,Y-trunk-R()*TH*.05,L[0]+(R()-.5)*.12,TH*L[1]*.62,tw*.55,7)});
    g.fillStyle="#050b20";g.beginPath();g.moveTo(X-tw*1.2,Y+2);g.quadraticCurveTo(X-tw*.55,Y-tw*.2,X-tw*.5,Y-trunk*.45);g.lineTo(X+tw*.5,Y-trunk*.45);g.quadraticCurveTo(X+tw*.55,Y-tw*.2,X+tw*1.25,Y+2);g.closePath();g.fill();
    g.strokeStyle="#050b20";g.lineCap="round";g.lineJoin="round";
    segs.forEach(function(s){g.lineWidth=Math.max(.6,s[6]);g.beginPath();g.moveTo(s[0],s[1]);g.quadraticCurveTo(s[2],s[3],s[4],s[5]);g.stroke()});
    /* foliage: leaf clumps on every twig, lit on the side that faces the last light on the horizon */
    var LX=G.gx,LY=G.hz,blobs=[],cr=TH*.05,K=G.mob?7:9,lr=TH*(G.mob?.009:.0075);
    tips.forEach(function(t){var dx=LX-t[0],dy=LY-t[1],dl=Math.hypot(dx,dy)||1;dx/=dl;dy/=dl;var shell=Math.min(1,inside(t[0],t[1]));
      for(var k=0;k<K;k++){var ang=R()*6.283,rr=cr*Math.sqrt(R()),ox=Math.cos(ang)*rr,oy=Math.sin(ang)*rr*.75,
        lit=Math.max(0,(ox*dx+oy*dy)/cr)*(.35+.65*shell),f=Math.min(1,lit*.95+R()*.12);blobs.push([t[0]+ox,t[1]+oy,lr*(.7+R()*.9),f,R()*3.14])}});
    blobs.sort(function(a,b){return a[3]-b[3]});
    var D=[5,10,30],M=[16,27,60],L=[70,88,128];
    blobs.forEach(function(b){var col=b[3]<.6?mix(D,M,b[3]/.6):mix(M,L,(b[3]-.6)/.4);g.fillStyle=rgb(col);g.beginPath();g.ellipse(b[0],b[1],b[2],b[2]*.7,b[4],0,Math.PI*2);g.fill()});
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=cv.getBoundingClientRect().width||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?30:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var S=G.S,hz=G.hz;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* stars coming out */
    for(var s=0;s<STARS.length;s++){var st=STARS[s],a=(.25+.45*(1-st[1]/(hz*.62)))*(.6+.4*Math.sin(t*st[4]+st[3]))*sm(t/3+.4);c.fillStyle="rgba(232,238,255,"+a.toFixed(3)+")";c.beginPath();c.arc(st[0],st[1],st[2],0,Math.PI*2);c.fill()}
    c.setTransform(1,0,0,1,0,0);c.drawImage(oLand,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* haze drifting along the meadow */
    for(var m=0;m<HAZE.length;m++){var H=HAZE[m],mw=w*(.2+.18*H[1]),mx=((H[0]+t*7*H[1]*H[2])%(w+600)+(w+600))%(w+600)-300,my=hz+S*.006,mh=S*.016,al=.08+.04*Math.sin(t*.25+H[3]);
      c.save();c.translate(mx,my);c.scale(1,mh/mw);var mg=c.createRadialGradient(0,0,0,0,0,mw);mg.addColorStop(0,"rgba(190,198,222,"+al.toFixed(3)+")");mg.addColorStop(1,"rgba(190,198,222,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,mw,0,Math.PI*2);c.fill();c.restore()}
    /* fireflies */
    c.globalCompositeOperation="lighter";
    for(var f=0;f<FLY.length;f++){var F=FLY[f],fx=F[0]+Math.sin(t*.23*F[3]+F[2])*S*.03,fy=F[1]+Math.sin(t*.31*F[3]+F[4])*S*.018,bl=Math.pow(Math.max(0,Math.sin(t*.9*F[3]+F[2]*2)),3)*sm(t/2-.3);
      if(G.mob&&fy>S*.98)continue;if(bl<.02)continue;
      var rr=F[5]*(G.mob?1:1.2),fg=c.createRadialGradient(fx,fy,0,fx,fy,rr*7);fg.addColorStop(0,"rgba(236,232,150,"+(.5*bl).toFixed(3)+")");fg.addColorStop(1,"rgba(236,232,150,0)");c.fillStyle=fg;c.fillRect(fx-rr*7,fy-rr*7,rr*14,rr*14);
      c.fillStyle="rgba(255,252,200,"+(.95*bl).toFixed(3)+")";c.beginPath();c.arc(fx,fy,rr*.7,0,Math.PI*2);c.fill()}
    c.globalCompositeOperation="source-over";c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.tx,G.ty-G.TH*.6]:[w/2,h/2]}};
})();''')

# ---------------- story: a cross-section of the oak, ring by ring ----------------
reg('story', r'''/* the story scene: a cross-section of the hero's oak, drawn in fine line. Step 1 the heartwood: the first meeting,
   where we learn your objectives, risk tolerance and time horizon. Step 2 six rays run from the heart to the bark: the six
   disciplines coordinated into one plan. Step 3 the rings grow outward to the bark, the outermost marked in quarters:
   monitored at least quarterly, reviewed at least annually, on an ongoing basis since 1986. */
var TR=null;
function trR(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function tring(cx,cy,r,ph,amp,R){var o='',n=96,k;var j1=R()*6.28,j2=R()*6.28;
  for(k=0;k<=n;k++){var a=k/n*6.2832,rr=r*(1+amp*(.55*Math.sin(2*a+ph[0])+.3*Math.sin(3*a+ph[1])+.15*Math.sin(5*a+ph[2]))+.006*Math.sin(7*a+j1)+.004*Math.sin(11*a+j2));
    o+=(k?'L':'M')+(cx+Math.cos(a)*rr).toFixed(1)+' '+(cy+Math.sin(a)*rr).toFixed(1)}return o+'Z'}
function tpt(a,r){var T=TR,rr=r*(1+T.amp*(.55*Math.sin(2*a+T.ph[0])+.3*Math.sin(3*a+T.ph[1])+.15*Math.sin(5*a+T.ph[2])));return [T.cx+Math.cos(a)*rr,T.cy+Math.sin(a)*rr]}
function lab(id,txt,x,y,side,to){var tw=txt.length*9.4,anc=side==="s"?"start":side==="e"?"end":"middle",lx=side==="s"?x+tw+8:side==="e"?x-tw-8:x,ly=side==="m"?y+8:y-4;
  var ld=to?'<path class="ld" d="M'+lx.toFixed(1)+' '+ly.toFixed(1)+'L'+to[0].toFixed(1)+' '+to[1].toFixed(1)+'"/><circle class="dt" cx="'+to[0].toFixed(1)+'" cy="'+to[1].toFixed(1)+'" r="2.6"/>':'';
  return '<g class="lb" id="'+id+'">'+ld+'<text x="'+x+'" y="'+y+'" text-anchor="'+anc+'" class="w">'+txt+'</text></g>'}
function scene(){
  var mob=MOBILE(),R=trR(1986),o,k;
  TR=mob?{cx:200,cy:236,R:148,amp:.03,ph:[.7,2.1,4.4]}:{cx:380,cy:322,R:250,amp:.03,ph:[.7,2.1,4.4]};
  var N=34,HW=11,T=TR;
  o='<svg'+(mob?' class="mob" viewBox="0 0 400 400"':' viewBox="0 0 760 644"')+' aria-hidden="true"><defs><pattern id="bk" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(70)"><path d="M0 0V5" stroke="rgba(242,244,247,.26)" stroke-width="1"/></pattern>'+
    '<radialGradient id="hw" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="rgba(150,174,206,.22)"/><stop offset="1" stop-color="rgba(150,174,206,0)"/></radialGradient></defs>';
  /* the bark: a rough outer band */
  var bo='',bi='',n=140;for(k=0;k<=n;k++){var a=k/n*6.2832,p=tpt(a,T.R*(1.075+.018*Math.sin(a*23+R()*.6)+.012*(R()-.5))),q=tpt(a,T.R*1.012);bo+=(k?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1);bi+=(k?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)}
  o+='<g id="trBk"><path class="bark" d="'+bo+'Z'+bi+'Z" fill-rule="evenodd"/><path class="bkl" d="'+bo+'Z"/></g>';
  o+='<circle id="trHw" cx="'+T.cx+'" cy="'+T.cy+'" r="'+(T.R*.36).toFixed(1)+'" fill="url(#hw)"/>';
  /* the rings: narrow and wide years, heartwood to sapwood */
  o+='<g id="trRg">';var r=0,ws=[];for(k=0;k<N;k++)ws.push(.6+R()*.9);var tot=ws.reduce(function(s,v){return s+v},0);
  for(k=0;k<N;k++){r+=T.R*ws[k]/tot;o+='<path class="rg'+(k<HW?' hw':'')+(k===N-1?' last':'')+'" d="'+tring(T.cx,T.cy,r,T.ph,T.amp*(r/T.R),R)+'"/>'}
  o+='</g>';
  o+='<circle class="pith" cx="'+T.cx+'" cy="'+T.cy+'" r="3"/>';
  /* two drying checks running in from the bark */
  o+='<g id="trCk">'+[[.42,.62],[3.6,.7]].map(function(c){var a=c[0],p1=tpt(a,T.R*1.01),p2=tpt(a+.02,T.R*(1-c[1]*.5)),p3=tpt(a-.01,T.R*(1-c[1]));return '<path class="ck" d="M'+p1[0].toFixed(1)+' '+p1[1].toFixed(1)+'L'+p2[0].toFixed(1)+' '+p2[1].toFixed(1)+'L'+p3[0].toFixed(1)+' '+p3[1].toFixed(1)+'"/>'}).join("")+'</g>';
  /* six rays from the heart: the six disciplines */
  var RA=mob?[-2.36,-1.57,-.78,.78,1.57,2.36]:[-2.4,-1.5708,2.4,-.74,1.5708,.74];
  o+='<g id="trRy">'+RA.map(function(a){var p=tpt(a,T.R*.12),q=tpt(a,T.R*.99);return '<path class="ry" d="M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'L'+q[0].toFixed(1)+' '+q[1].toFixed(1)+'"/><circle class="rd" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="3.2"/>'}).join("")+'</g>';
  /* the outermost ring, marked in quarters */
  o+='<g id="trQ">'+[-1.5708,0,1.5708,3.1416].map(function(a){var p=tpt(a,T.R*.95),q=tpt(a,T.R*1.03);return '<path class="qt" d="M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'L'+q[0].toFixed(1)+' '+q[1].toFixed(1)+'"/>'}).join("")+'<path class="qr" d="'+tring(T.cx,T.cy,T.R*.99,T.ph,T.amp,trR(7))+'"/></g>';
  var C=[T.cx,T.cy],H1=tpt(-2.4,T.R*.2),H2=tpt(-.7,T.R*.22);
  if(mob){
    o+=lab("l1a","OBJECTIVES",14,26,"s",null)+lab("l1b","RISK TOLERANCE",386,26,"e",null)+lab("l1c","TIME HORIZON",200,46,"m",null);
    o+=lab("l2a","INVESTMENTS",14,26,"s",null)+lab("l2b","CAPITAL",200,18,"m",null)+lab("l2c","INCOME TAX",386,26,"e",null)+lab("l2d","RETIREMENT",14,52,"s",null)+lab("l2e","ESTATE",200,44,"m",null)+lab("l2f","INSURANCE",386,52,"e",null);
    o+=lab("l3a","QUARTERLY",14,26,"s",null)+lab("l3b","ANNUALLY",386,26,"e",null)+lab("l3c","ONGOING SINCE 1986",200,46,"m",null);
  }else{
    var e=function(a){return tpt(a,T.R*.99)};
    o+=lab("l1a","OBJECTIVES",12,40,"s",H1)+lab("l1b","RISK TOLERANCE",748,40,"e",H2)+lab("l1c","TIME HORIZON",380,634,"m",null);
    o+=lab("l2a","MONEY MANAGEMENT",12,40,"s",e(-2.4))+lab("l2b","CAPITAL PLANNING",380,22,"m",null)+lab("l2c","INCOME TAX PLANNING",12,622,"s",e(2.4))+
       lab("l2d","RETIREMENT PLANNING",748,40,"e",e(-.74))+lab("l2e","ESTATE PLANNING",380,634,"m",null)+lab("l2f","INSURANCE PLANNING",748,622,"e",e(.74));
    o+=lab("l3a","MONITORED QUARTERLY",12,40,"s",tpt(-1.5708,T.R*1.0))+lab("l3b","REVIEWED ANNUALLY",748,40,"e",tpt(-.6,T.R*1.0))+lab("l3c","ONGOING SINCE 1986",380,634,"m",null);
  }
  return o+'</svg>';
}
function storyDraw(svg){
  var q=function(s){return $(s,svg)},qq=function(s){return $$(s,svg)};
  var E={rg:qq("#trRg path"),hw:q("#trHw"),bk:q("#trBk"),ck:q("#trCk"),ry:qq("#trRy .ry"),rd:qq("#trRy .rd"),qg:q("#trQ"),
    l1:qq("#l1a,#l1b,#l1c"),l2:qq("#l2a,#l2b,#l2c,#l2d,#l2e,#l2f"),l3:qq("#l3a,#l3b,#l3c")};
  var RL=E.ry.map(function(p){return p.getTotalLength()}),NR=E.rg.length,HW=11;
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!E.rg[0].isConnected)return;
    var s1=seg(p,.02,.18),s2=seg(p,.36,.56),s3=seg(p,.7,.9),o1=s1*(1-seg(p,.3,.36)),o2=s2*(1-seg(p,.64,.7));
    E.rg.forEach(function(r,k){var a=k<HW?(.3+.7*s1):(.16+.22*s2+.62*seg(s3,(k-HW)/(NR-HW)*.75,(k-HW)/(NR-HW)*.75+.25));r.style.opacity=(b*a).toFixed(3)});
    E.hw.style.opacity=(b*s1*(1-.5*s3)).toFixed(3);
    E.bk.style.opacity=(b*(.2+.8*s3)).toFixed(3);E.ck.style.opacity=(b*(.4+.6*s3)).toFixed(3);
    E.ry.forEach(function(r,k){var L=RL[k],v=seg(s2,k*.08,.6+k*.08);r.style.strokeDasharray=L+" "+L;r.style.strokeDashoffset=(L*(1-v)).toFixed(1);r.style.opacity=(b*(1-.6*s3)).toFixed(3);E.rd[k].style.opacity=(b*v*(1-.6*s3)).toFixed(3)});
    E.qg.style.opacity=(b*s3).toFixed(3);
    show(E.l1,b*o1);show(E.l2,b*o2);show(E.l3,b*s3);
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
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a3acc2;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #66749a;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(28px,2.4vw,40px);line-height:1.1;letter-spacing:-.02em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(76vh,700px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .rg{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1;vector-effect:non-scaling-stroke}
.scene .rg.hw{stroke:var(--accL);stroke-width:1.1}
.scene .rg.last{stroke:rgba(var(--boner),.8);stroke-width:1.3}
.scene .pith{fill:var(--accL)}
.scene .bark{fill:url(#bk);stroke:none}
.scene .bkl{fill:none;stroke:rgba(var(--boner),.7);stroke-width:1.3}
.scene .ck{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.1;stroke-linejoin:round}
.scene .ry{fill:none;stroke:var(--accL);stroke-width:1.4}
.scene .rd{fill:var(--accL)}
.scene .qt{fill:none;stroke:var(--accL);stroke-width:2}
.scene .qr{fill:none;stroke:var(--accL);stroke-width:1.6}
.scene .ld{fill:none;stroke:rgba(var(--boner),.42);stroke-width:1}
.scene .dt{fill:var(--accL)}
.scene text{font-family:var(--mono);font-weight:500;font-size:12.5px;letter-spacing:.14em;fill:#b9c2d4}
.scene text.w{fill:var(--bone)}
.scene .lb{opacity:0}''')

# ---------------- global swaps outside regions (colours) ----------------
src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(10,20,51,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a3acc2}.rail span::before{background:var(--ink2);border-color:#66749a}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#b9c2d4}')
src = src.replace('.scene text{font-size:12px}', '.scene text{font-size:12.5px}')
src = src.replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== Gutt Financial Management: their navy as the ground and accent, their slate and pale steel blue ===== */
.hero-h{font-size:clamp(48px,6.8vw,128px);letter-spacing:-.03em;line-height:.98}
.hero .eyebrow{color:var(--accL)}
#pre .wm{font-family:'Libre Caslon Text',Georgia,serif;font-weight:700;letter-spacing:.02em;color:var(--bone)}
.ftr .bigsvg{color:var(--bone)}
.ftr .disc{position:relative;z-index:1;max-width:72ch;margin:clamp(22px,2.4vw,34px) auto 0;text-align:center;font-size:13px;color:var(--stone)}
.ftr .fcv{opacity:.22!important}
.light .facts dt{color:var(--accD)}
.facts dd sup,.note-s sup{font-size:.6em;color:var(--accD);margin-left:2px}
.aims b{font-weight:500;color:var(--bone)}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD)}
.cta .addr h3{margin-top:12px}
.cta>.wrap>.cx{grid-column:1/-1}
.cta .offs{margin-top:0;grid-template-columns:1fr 1fr}
.cta .offs>div:last-child{grid-column:1/-1}
.cta .act .btn.solid{text-transform:none}
@media (max-width:640px){.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:50vh;height:50svh}.scene svg.mob text{font-size:12px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = re.findall(r'(?i)firelight|fort lauderdale|rick@', src)
if leftover: print('LEFTOVER:', len(leftover), set(x.lower() for x in leftover))
open(os.path.join(K, 'src', 'gutt.src.html'), 'w', encoding='utf-8').write(src)
print('wrote gutt.src.html')
