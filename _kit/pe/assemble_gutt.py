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
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#0a1433}
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

# ---------------- hero field: real photograph (rephoto 2026-11-20) ----------------
reg('field', r'''/* ================= HERO FIELD (HOME_BRIEF update 2026-11-20, option b): a real photograph, the Midtown Atlanta skyline at dusk, One Atlantic Center at its centre (the firm's city; office on Peachtree Road).
   Source: "City of Atlanta at Sunset", Pexels photo 11599618, https://www.pexels.com/photo/city-of-atlanta-at-sunset-11599618/ (free licence).
   Graded in hero.webp to the site's palette: highlights compressed, exposure lowered, shadows pulled to the page ink so the
   photo melts into it (DJ). It sits right of ~45% on desktop under a deep ink scrim over the headline (DI); a very slow
   Ken Burns drift, no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1433",K="10,20,51";var IW=2400,IH=1281,EX=.5,EY=.45;
  function A(a){return "rgba("+K+","+a+")"}
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.52,w*1.0):h;
    var ih=mob?U*1.25:Math.max(h*1.05,w*.62*IH/IW),iw=ih*(IW/IH);
    if(mob&&iw<w*1.1){iw=w*1.1;ih=iw*IH/IW}
    var kx=mob?w*.5:w*.79,ky=mob?U*.55:h*.5;
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
@media (max-width:640px){.cta .offs{grid-template-columns:1fr}.hero-h{font-size:clamp(34px,10.4vw,64px)}}
@media (max-width:860px){.story-r{height:50vh;height:50svh}.scene svg.mob text{font-size:12px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = re.findall(r'(?i)firelight|fort lauderdale|rick@', src)
if leftover: print('LEFTOVER:', len(leftover), set(x.lower() for x in leftover))
open(os.path.join(K, 'src', 'gutt.src.html'), 'w', encoding='utf-8').write(src)
print('wrote gutt.src.html')
