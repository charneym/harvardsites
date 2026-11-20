#!/usr/bin/env python3
"""Assemble _kit/src/oliver.src.html (HOME-ONLY) from firelight's regions. Run from repo root:
   python3 _kit/src/oliver.assemble.py && node _kit/build.js _kit/src/oliver.src.html oliver/index.html"""
import re, os, sys
ROOT = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(ROOT, 'firelight.src.html'), encoding='utf8').read()

def put(name, body, html=False):
    global s
    if html:
        a, b = '<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name
    else:
        a, b = '/*<R:%s>*/' % name, '/*</R:%s>*/' % name
    i, j = s.find(a), s.find(b)
    assert i >= 0 and j > i, name
    s = s[:i] + a + body + s[j:]

def sub(old, new, count=1):
    global s
    assert s.count(old) >= 1, old[:60]
    s = s.replace(old, new) if count == 0 else s.replace(old, new, count)

# ---------------------------------------------------------------- HTML regions
put('meta', '''<title>Oliver Capital Management — Comprehensive wealth management, Seattle</title>
<meta name="description" content="Oliver Capital Management, Inc. is an SEC-registered investment adviser in Seattle providing Comprehensive Wealth Management to private clients and fiduciary services to retirement plans.">
<meta name="theme-color" content="#06182e">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%2306182e'/%3E%3Cpath d='M16 14H48M20 18H44M25 22V50M32 22V50M39 22V50M18 50H46M14 55H50' fill='none' stroke='%23b3cbe4' stroke-width='3'/%3E%3C/svg%3E">''', html=True)
put('seen', '''<script>try{if(sessionStorage.getItem("ocm-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>''', html=True)
COL_ICON = ('<path d="M4 6H44M8 10.5H40" /><circle cx="9.5" cy="15.5" r="3.6"/><circle cx="38.5" cy="15.5" r="3.6"/>'
            '<path d="M13 13.5H35M15 19.5H33M16 21V64M24 21V64M32 21V64M20 21V64M28 21V64M13 64H35M10 68H38M6 72H42"/>')
put('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="-2 0 52 76"><path d="M4 6H44M8 10.5H40M13 13.5H35M16 21V64M32 21V64M24 21V64M13 64H35M6 72H42"/></svg>
    <div class="wm"><span>OLIVER</span></div>
  </div>
  <span class="lab pl">Comprehensive wealth management · Seattle</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''', html=True)
put('brand', '''<a href="#/" class="brand" id="brand" aria-label="Oliver Capital Management, home"><svg class="logo" viewBox="0 0 150 78" aria-hidden="true"><g class="colg" fill="none" stroke="currentColor" stroke-width="1.6">''' + COL_ICON + '''</g><text x="54" y="47" class="bt">Oliver</text></svg><span class="wt">Capital Management</span></a>''', html=True)
put('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/services">Services</a>
    <a class="nl ul" href="#/clients">Clients</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
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
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Two Union Square, Seattle</div>
    <div><span class="lab">Phone</span><br>206.775.7500</div>
  </div>
</div>''', html=True)
put('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Oliver Capital Management</span><div class="t" id="xtt"></div></div>''', html=True)

# ---------------------------------------------------------------- CSS regions
put('fonts', '/*@fonts Cormorant Garamond:300,300i,400,400i,500; Hanken Grotesk:400,500; IBM Plex Mono:400*/')
put('root', ''':root{
  --ink:#06182e;--inkr:6,24,46;--boner:244,241,234;--accr:148,174,202;--ink2:#0a2140;--ink3:#112d52;--deep:#041121;
  --bone:#f4f1ea;--bone2:#e9e5dc;--bone3:#ddd7cb;
  --stone:#a7b5c6;--stoneD:#4c5a6d;
  --acc:#94aeca;--accL:#b3cbe4;--accD:#2f6094;
  --hair:rgba(244,241,234,.14);--hairD:rgba(6,24,46,.16);
  --disp:'Cormorant Garamond',Georgia,'Times New Roman',serif;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
put('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:#06182e}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
put('logocss', '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.logo{width:auto;height:44px;flex:none;overflow:visible}
.brand .bt{font:500 40px var(--disp);letter-spacing:.01em;fill:currentColor}
.brand .wt{font:400 10.5px/1.25 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--stone);max-width:8.5em}''')

# scenecss: keep firelight's story layout CSS (generic), then re-skinned at the end of the stylesheet
# ---------------------------------------------------------------- JS regions
put('site', 'var SITE="Oliver Capital Management";\nvar PK="ocm";')

put('content', r'''var FONTS=['300 1em "Cormorant Garamond"','italic 300 1em "Cormorant Garamond"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','400 1em "IBM Plex Mono"'];
var OC="https://www.olivercapital.com/";
var MAIL="mko@olivercapital.com";
var TEL="206.775.7500";
var CRS=OC+"retail/inc/OCM-ADV-3.pdf";
var ADV="https://adviserinfo.sec.gov/firm/summary/127606";
/* Comprehensive Wealth Management, from olivercapital.com/retail/services_wealth.php */
var CWM=[
 ["01 · Analysis","Asset analysis and planning","Specialised analysis of specific assets and their risk and tax implications for your portfolio: succession planning, corporate stock options and concentrated stock holdings."],
 ["02 · Legacy","Wealth preservation and transfer","Expert and confidential support of your long-term goals, from accumulating and preserving wealth to transferring it."],
 ["03 · Administration","Custody and tax management","Asset administration and analysis of your financial information, high-net-worth tax strategies and financial reporting."]];
var MORE=["Financial planning as part of Comprehensive Wealth Management, with no additional fee for it",
 "Liquidity for illiquid estates, asset equalisation among heirs and charitable-giving strategies",
 "Employee stock option services, including exercise and diversification when appropriate",
 "401(k) rollovers to an IRA, custodied at Fidelity or, in some cases, Charles Schwab",
 "Corporate retirement plan administration: 401(k), pension, money purchase and profit sharing plans",
 "Online account access with history and cost basis, checking and debit card, direct deposit, wires and bill pay"];
var PRIV=["Comprehensive Wealth Management for individuals and families","Investment accounts and IRAs","401(k) rollovers after a job change or retirement","A published account minimum of $500,000"];
var INST=["Model portfolios for retirement, ERISA-qualified and defined contribution plans","Formal, written assumption of fiduciary duties under ERISA 3(38) and 3(21)","Review and negotiation of fees and services with trustees, record keepers and administrators","Pensions, endowments, foundations, municipalities and other institutional investors"];
var DOCS=[
 {s:"For plan sponsors",t:"Top questions to ask your plan advisor",u:OC+"dc/pdf/OCM%20401k%20Publication%20-%20Top%20Questions%20to%20Ask%20Advisor%20-%20V1.pdf"},
 {s:"For plan participants",t:"Your new and improved 401(k) plan",u:OC+"dc/pdf/Your%20New%20and%20Improved%20401k%20Plan.pdf"},
 {s:"Regulatory",t:"Client Relationship Summary (Form CRS)",u:CRS}];
var SHEETS=[];''')

put('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECMAP={"#/approach":"story","#/services":"services","#/clients":"clients","#/team":"team","#/contact":"contact"};
function toSec(id,instant){var el=document.getElementById(id);if(!el)return;var y=Math.max(0,el.getBoundingClientRect().top+window.scrollY-(id==="story"?0:64));
  if(lenis&&!instant)lenis.scrollTo(y,{duration:1.5});else{if(lenis)lenis.scrollTo(y,{immediate:true,force:true});window.scrollTo(0,y)}}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var id=SECMAP[a.getAttribute("href")];if(!id)return;
  e.preventDefault();e.stopImmediatePropagation();var m=document.body.classList.contains("menu-open");if(m)closeMenu();setTimeout(function(){toSec(id)},m?380:0)},true);
(function(){var id=SECMAP[location.hash];if(!id)return;try{history.replaceState(null,"","#/")}catch(e){}
  addEventListener("load",function(){setTimeout(function(){toSec(id,true)},2600)})})();
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function docRows(list){return '<ul class="rows docs">'+list.map(function(n){return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><span class="lab">PDF</span><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Registered investment adviser · Seattle<span class="nomob">, Washington</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Wealth, managed</span><span class="l">with <em>discipline.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Oliver Capital Management provides Comprehensive Wealth Management to private clients, and fiduciary services to retirement plans, from Two Union Square in Seattle.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Attention to detail · Discipline and structure · Passion</span>'+
   '<p class="txt" id="mani">We spend an abundance of quality time listening to your needs and goals, then provide the discipline and structure that even <em>well-laid plans</em> so often lack.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2006</span><span class="k">Registered with the SEC as an investment adviser</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$500K</span><span class="k">Published account minimum for private clients</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0</span><span class="k">Commissions or payments from anyone but our clients</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with you</span><h2 class="d3">Built to last, <em>step by step.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Listen</span><span>Analyse</span><span>Invest</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It begins with listening.</h2><p>Before any recommendation, we spend time with you on your needs and goals, and on what you want your wealth to do for you and your family.</p></article>'+
     '<article class="step"><h2>A comprehensive analysis.</h2><p>Our Comprehensive Wealth Management analysis covers retirement and education planning, asset allocation, tax mitigation, estate planning and life and disability insurance, pointing out weaknesses in your current plan and offering specific solutions.</p></article>'+
     '<article class="step"><h2>A strategically engineered portfolio.</h2><p>Client assets are primarily invested through our Strategically Engineered Portfolio Program, held at Fidelity or Schwab. With very limited exception, we trade only with your prior approval.</p></article>'+
     '<article class="step"><h2>Discipline, year after year.</h2><p>We monitor your progress toward your goals, rebalance the portfolio each year back to its target allocation, and contact you at least annually to review it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Comprehensive Wealth <em>Management.</em></h2></div><p data-r>Retirement and education planning, asset allocation, tax mitigation, estate planning and life and disability insurance, considered together as one plan.</p></div>'+
   '<div class="pillars">'+CWM.map(function(c){return '<div class="pl3"><span class="lab">'+c[0]+'</span><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>'}).join("")+'</div>'+
   '<div class="two more"><div><span class="lab kick" data-r>Also at OCM</span><h3 class="d3 split">Beyond the <em>portfolio.</em></h3></div>'+aims(MORE)+'</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="clients" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d2 split">Private clients, <em>and their plans.</em></h2></div><p data-r>Individuals and families on one side; on the other, the retirement plans and institutions that invest for many people at once.</p></div>'+
   '<div class="kits"><div><span class="lab kick" data-r>Individuals and families</span>'+aims(PRIV)+'</div><div><span class="lab kick" data-r>Retirement plans and institutions</span>'+aims(INST)+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="two bio"><div><span class="lab kick" data-r>Founder</span><h2 class="d2 split">Mark K. <em>Oliver.</em></h2><span class="lab role" data-r>President · Senior Wealth Manager and Investment Advisor</span></div>'+
   '<div><p class="lede" data-r>Attention to detail, discipline and structure, passion: Mark Oliver practised them daily for nearly a decade as a world-class gymnast training for the Olympic Games.</p>'+
   '<p class="muted" data-r>He brings an extensive formal business and finance education from the University of Washington, and a tenure at two of the most highly respected major Wall Street wire houses, to the private clients of the firm he founded. In October 2017 he crossed the finish line of the Ironman World Championship in Kailua-Kona, Hawai‘i.</p>'+
   '<div class="act" data-r><a class="btn" href="mailto:'+MAIL+'">'+MAIL+'</a></div></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Resources</span><h2 class="d3 split">Read before <em>you decide.</em></h2></div></div>'+docRows(DOCS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For private clients and plan sponsors</span>'+
   '<h2 class="big split">Start a <em>conversation.</em></h2>'+
   '<p class="sub" data-r>To talk about your wealth, or about your company’s retirement plan, call the office or write to Mark Oliver directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Mark Oliver '+ARR+'</a><a class="btn" href="tel:+12067757500">'+TEL+'</a></div>'+
   '<dl class="cinfo">'+
    '<div data-r><dt class="lab">Office</dt><dd>Two Union Square<br>601 Union Street, Suite 3010<br>Seattle, WA 98101</dd></div>'+
    '<div data-r><dt class="lab">Telephone</dt><dd>'+TEL+' main<br>206.775.7300 fax</dd></div>'+
    '<div data-r><dt class="lab">Email</dt><dd><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></dd></div>'+
    '<div data-r><dt class="lab">Disclosures</dt><dd><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on IAPD</a></dd></div>'+
   '</dl>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>601 Union Street, Suite 3010<br>Seattle, WA 98101</div>'+
   '<div class="c"><span class="lab">Regulatory</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV (SEC IAPD)</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/clients">Clients</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12067757500">'+TEL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:400;font-size:46px;letter-spacing:.08em">OLIVER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Oliver Capital Management, Inc.</span><span class="lab">SEC-registered investment adviser · Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function v404(){return vHome()}
/* ================= ROUTER: one route ================= */
function route(h){return {k:"home",v:vHome,t:"Oliver Capital Management — Comprehensive wealth management, Seattle",x:"Home"}}''')

# ---------------------------------------------------------------- HERO FIELD
put('field', r'''/* ================= HERO FIELD: real photography (HOME_BRIEF update 2026-11-20 part 2). Downtown Seattle at dusk with Mount Rainier
   behind it (Memorial Day 2026): a photograph by Jose Moreno on Unsplash (unsplash.com/photos/AaCdUPmXXPQ, Unsplash License).
   The firm is at Two Union Square, downtown Seattle; its own site has no usable photography. Replaces the earlier painted
   Rainier-across-the-Sound scene.
   Graded offline toward the palette and drawn with a slow Ken Burns drift. The subject sits right of centre and an ink scrim
   keeps the headline side quiet (DI); the photo is full-bleed, so no edge falls inside the viewport (DJ). On phones it sits in
   the top band and fades into the ink. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,INK="#06182e",S="4,16,32";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.jpg";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function lg(x0,y0,x1,y1,st){var g=c.createLinearGradient(x0,y0,x1,y1);for(var i=0;i<st.length;i++)g.addColorStop(st[i][0],"rgba("+S+","+st[i][1]+")");return g}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var bw=w,bh=G.bh,iw=img.naturalWidth,ih=img.naturalHeight;
      /* Ken Burns: a very slow push in and drift, eased back and forth over ~50s */
      var k=.5-.5*Math.cos(t*Math.PI*2/50),sc=Math.max(bw/iw,bh/ih)*((G.mob?1.5:1.18)+.07*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,fx=G.mob?.62:.05,fy=G.mob?.8:.6;
      var x=(bw-dw)*fx-k*bw*.012,y=(bh-dh)*fy-k*bh*.01;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      c.fillStyle="rgba("+S+",.12)";c.fillRect(0,0,w,bh);
      if(!G.mob){
        /* the headline side (0 to ~55%) stays deep ink; the photo opens up to the right */
        c.fillStyle=lg(0,0,G.side+G.cw*.74,0,[[0,.93],[.5,.86],[.78,.42],[1,0]]);c.fillRect(0,0,w,h);
        c.fillStyle=lg(0,0,0,h*.22,[[0,.55],[1,0]]);c.fillRect(0,0,w,h*.22);
        c.fillStyle=lg(0,h*.6,0,h,[[0,0],[1,.75]]);c.fillRect(0,h*.6,w,h*.4);
      }else{
        c.fillStyle=lg(0,0,0,bh*.3,[[0,.6],[1,0]]);c.fillRect(0,0,w,bh*.3);
        c.fillStyle=lg(0,bh*.5,0,bh,[[0,0],[1,1]]);c.fillRect(0,bh*.5,w,bh*.5+1);
        c.fillStyle=INK;c.fillRect(0,bh,w,h-bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[w*.68,G.bh*.5]:[w/2,h/2]}};
})();''')

# ---------------------------------------------------------------- STORY: an engraved Ionic column, built in four steps
put('story', r'''/* the story scene: OCM's own mark, the Ionic column, drawn as an engraved elevation and built from the ground up.
   Step 1 lays the steps and base (your goals and needs), step 2 raises the fluted shaft (the five areas of the
   Comprehensive Wealth Management analysis), step 3 sets the capital (the portfolio), step 4 crowns it with the
   entablature (annual rebalancing and review). Each step draws one part and its labels. */
function lerp(a,b,t){return a+(b-a)*t}
function seg(p,a,b){var x=(p-a)/(b-a);x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
var SC_L={d:[["YOUR GOALS","YOUR NEEDS"],["RETIREMENT PLANNING","EDUCATION PLANNING","TAX MITIGATION","ESTATE PLANNING","LIFE & DISABILITY"],["ASSET ALLOCATION","FIDELITY · SCHWAB","YOUR APPROVAL"],["ANNUAL REBALANCING","YEARLY REVIEW"]],
  m:[["GOALS","NEEDS"],["RETIREMENT","EDUCATION","TAX","ESTATE","INSURANCE"],["ALLOCATION","CUSTODY","APPROVAL"],["REBALANCING","REVIEW"]]};
function colParts(cx,k,y0,y1){
  function v(f){return (y0+f*(y1-y0)).toFixed(1)}
  function X(d){return (cx+d*k).toFixed(1)}
  function band(f0,f1,hw){return 'M'+X(-hw)+' '+v(f0)+'H'+X(hw)+'V'+v(f1)+'H'+X(-hw)+'Z'}
  function torus(f0,f1,hw){var a=v(f0),b=v(f1),m=((+a+ +b)/2).toFixed(1),r=((b-a)/2).toFixed(1);return 'M'+X(-hw+6)+' '+a+'H'+X(hw-6)+'A'+(6*k).toFixed(1)+' '+r+' 0 0 1 '+X(hw-6)+' '+b+'H'+X(-hw+6)+'A'+(6*k).toFixed(1)+' '+r+' 0 0 1 '+X(-hw+6)+' '+a+'Z'}
  function spiral(sx,sy,r,dir){var d='',n=40;for(var i=0;i<=n;i++){var a=i/n*Math.PI*4.2,rr=r*(1-i/n*.82),x=sx+dir*Math.cos(a+Math.PI)*rr,y=sy+Math.sin(a+Math.PI)*rr*(dir);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d}
  var P={s1:[],s2:[],s3:[],s4:[],h1:[],h2:[],h3:[],h4:[]};
  /* 1 · steps, plinth and base mouldings */
  P.s1.push(band(.957,1,150),band(.914,.957,130),band(.875,.914,110),band(.84,.875,80));
  P.s1.push(torus(.805,.84,74),band(.792,.805,64),torus(.766,.792,68));
  for(var i=0;i<14;i++){var yy=v(.957+i*.003);}
  for(var j=0;j<6;j++){P.h1.push('M'+X(60+j*14)+' '+v(.96)+'V'+v(.995));P.h1.push('M'+X(52+j*13)+' '+v(.917)+'V'+v(.952));P.h1.push('M'+X(44+j*11)+' '+v(.878)+'V'+v(.91))}
  /* 2 · the fluted shaft, with a touch of entasis */
  var sT=.18,sB=.766,top=48,bot=56;
  P.s2.push('M'+X(-bot)+' '+v(sB)+'C'+X(-bot-3)+' '+v(.55)+' '+X(-top-2)+' '+v(.3)+' '+X(-top)+' '+v(sT));
  P.s2.push('M'+X(bot)+' '+v(sB)+'C'+X(bot+3)+' '+v(.55)+' '+X(top+2)+' '+v(.3)+' '+X(top)+' '+v(sT));
  for(var f=1;f<12;f++){var fr=f/12*2-1;P.s2.push('M'+X(fr*bot)+' '+v(sB-.008)+'L'+X(fr*top)+' '+v(sT+.008))}
  for(var g=0;g<7;g++){var fr2=.66+g*.045;P.h2.push('M'+X(fr2*bot)+' '+v(sB-.02)+'L'+X(fr2*top)+' '+v(sT+.02))}
  /* 3 · necking, echinus, the scrolled volutes and the abacus */
  P.s3.push(band(.16,.18,52));
  P.s3.push('M'+X(-62)+' '+v(.16)+'Q'+X(0)+' '+v(.118)+' '+X(62)+' '+v(.16));
  P.s3.push('M'+X(-80)+' '+v(.113)+'H'+X(80)+'M'+X(-78)+' '+v(.13)+'Q'+X(0)+' '+v(.138)+' '+X(78)+' '+v(.13));
  var vr=15*k,vy=+v(.142);P.s3.push(spiral(cx-78*k,vy,vr,1),spiral(cx+78*k,vy,vr,-1));
  P.s3.push('M'+X(-78)+' '+(vy-vr).toFixed(1)+'A'+vr.toFixed(1)+' '+vr.toFixed(1)+' 0 1 0 '+X(-78)+' '+(vy+vr).toFixed(1));
  P.s3.push('M'+X(78)+' '+(vy-vr).toFixed(1)+'A'+vr.toFixed(1)+' '+vr.toFixed(1)+' 0 1 1 '+X(78)+' '+(vy+vr).toFixed(1));
  P.s3.push(band(.087,.113,88));
  for(var e=0;e<9;e++)P.h3.push('M'+X(-44+e*11)+' '+v(.152)+'a'+(3.5*k).toFixed(1)+' 4 0 0 0 '+(7*k).toFixed(1)+' 0');
  /* 4 · the entablature: architrave in three fasciae, a dentil course and the cornice */
  P.s4.push(band(.06,.087,100),'M'+X(-100)+' '+v(.069)+'H'+X(100)+'M'+X(-100)+' '+v(.078)+'H'+X(100));
  P.s4.push(band(.026,.06,104),band(0,.026,116));
  for(var d=0;d<17;d++)P.h4.push('M'+X(-96+d*12)+' '+v(.036)+'h'+(6*k).toFixed(1)+'v'+(+v(.05)-+v(.036)).toFixed(1)+'h-'+(6*k).toFixed(1)+'Z');
  return P;
}
/* label anchors: [part y-fraction, side half-width] for each step's labels */
var SC_ANCH=[[[.93,140],[.93,140]],[[.26,50],[.36,51],[.47,52],[.58,53],[.69,54]],[[.1,88],[.145,95],[.17,52]],[[.5,53],[.6,54]]];
function scene(){
  var mob=MOBILE(),W=mob?480:780,H=mob?540:580,cx=mob?150:390,k=mob?.78:1,y0=mob?26:34,y1=mob?512:548;
  var P=colParts(cx,k,y0,y1),L=mob?SC_L.m:SC_L.d,tw=mob?178:214,th=mob?28:34;
  function v(f){return y0+f*(y1-y0)}
  /* tag slots: desktop puts step 2 on the left and the rest on the right; phones stack everything on the right */
  var slots;
  if(mob){var R0=W-tw-2;slots=[[[R0,v(.872)],[R0,v(.95)]],[[R0,v(.41)],[R0,v(.488)],[R0,v(.566)],[R0,v(.644)],[R0,v(.722)]],[[R0,v(.176)],[R0,v(.254)],[R0,v(.332)]],[[R0,v(.02)],[R0,v(.098)]]]}
  else{var LX=6,RX=W-tw-6;slots=[[[LX,v(.93)],[RX,v(.93)]],[[LX,v(.26)],[LX,v(.36)],[LX,v(.46)],[LX,v(.56)],[LX,v(.66)]],[[RX,v(.15)],[RX,v(.25)],[RX,v(.35)]],[[RX,v(.5)],[RX,v(.6)]]]}
  function hwAt(f){return f>=.957?150:f>=.914?130:f>=.875?110:f>=.84?80:f>=.766?74:48+8*(f-.18)/.586}
  function tags(n){return L[n].map(function(t,i){var s=slots[n][i],a=SC_ANCH[n][i],ty=s[1];
    if(mob&&n===3)a=[[.073,100],[.04,104]][i];
    if(mob&&(n<2)){var ff=(ty-y0)/(y1-y0);a=[ff,hwAt(ff)]}
    var left=s[0]<cx,ex=left?s[0]+tw:s[0],ax=cx+(left?-1:1)*(a[1]*k+6),ay=v(a[0]),mxp=mob?ex-10-i*9:(ex+ax)/2;
    var d='M'+ex.toFixed(1)+' '+ty.toFixed(1)+'H'+mxp.toFixed(1)+'V'+ay.toFixed(1)+'H'+ax.toFixed(1);
    return '<g class="tg t'+(n+1)+'"><path class="join sJ" d="'+d+'"/><circle class="dot" cx="'+ax.toFixed(1)+'" cy="'+ay.toFixed(1)+'" r="2.6"/><rect class="tag" x="'+s[0]+'" y="'+(ty-th/2).toFixed(1)+'" width="'+tw+'" height="'+th+'"/><text x="'+(s[0]+tw/2)+'" y="'+(ty+4.5).toFixed(1)+'" text-anchor="middle" class="w">'+t.replace("&","&amp;")+'</text></g>'}).join("")}
  function grp(n){return '<g class="part" id="scP'+n+'">'+P["s"+n].map(function(d){return '<path class="cl dr" d="'+d+'"/>'}).join("")+P["h"+n].map(function(d){return '<path class="hat dr" d="'+d+'"/>'}).join("")+'</g>'}
  var ghost=[1,2,3,4].map(function(n){return P["s"+n].map(function(d){return '<path d="'+d+'"/>'}).join("")}).join("");
  var ground='<path class="gnd" d="M0 '+y1+'H'+W+'"/>';for(var gi=0;gi<26;gi++){var gx=gi*W/25;ground+='<path class="gnd2" d="M'+gx.toFixed(1)+' '+(y1+4)+'l-10 10"/>'}
  return '<svg class="'+(mob?'mob':'dsk')+'" viewBox="0 0 '+W+' '+(H+(mob?0:0))+'" aria-hidden="true"><g class="ghost">'+ghost+'</g>'+ground+
    grp(1)+grp(2)+grp(3)+grp(4)+tags(0)+tags(1)+tags(2)+tags(3)+'</svg>';
}
function storyDraw(svg){
  var parts=[1,2,3,4].map(function(n){return $$("#scP"+n+" .dr",svg)}),T=[1,2,3,4].map(function(n){return $$(".tg.t"+n,svg)});
  var len=parts.map(function(a){return a.map(function(p){var l=p.getTotalLength();p.style.strokeDasharray=l;p.style.strokeDashoffset=l;return l})});
  var J=T.map(function(a){return a.map(function(g){var p=$(".sJ",g),l=p.getTotalLength();p.style.strokeDasharray=l;return [p,l]})});
  var ghost=$(".ghost",svg),W=[[.02,.2],[.27,.47],[.52,.72],[.77,.95]];
  return function(p,b){
    if(!svg.isConnected)return;
    ghost.style.opacity=(.18+.5*b*(1-seg(p,.8,.97))).toFixed(3);
    for(var n=0;n<4;n++){var s=n===0?Math.max(seg(p,W[0][0],W[0][1]),b*.999*0):seg(p,W[n][0],W[n][1]);if(n===0)s=Math.max(s,b*.35);
      var A=parts[n],Ln=len[n];for(var i=0;i<A.length;i++){var q=Math.min(1,Math.max(0,s*1.25-i/A.length*.25));A[i].style.strokeDashoffset=(Ln[i]*(1-q)).toFixed(1)}
      var tg=T[n];for(var j=0;j<tg.length;j++){var q2=seg(s,.25+j*.08,.75+j*.08);tg[j].style.opacity=(q2*(n===0?Math.max(b,.0):1)).toFixed(3);J[n][j][0].style.strokeDashoffset=(J[n][j][1]*(1-q2)).toFixed(1)}}
  };
}''')

# ---------------------------------------------------------------- appended CSS (later in the cascade than the firelight theme block)
CSS = r'''
/* ===== Oliver Capital Management: logo navy, the site's frame blue as the accent, marble bone pages ===== */
.d1,.d2,.d3,.cta .big,.mani .txt,.stat .v,.step h2,.pl3 h3,.row-a h3,.facts dd,.ind li{font-weight:400}
.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em{font-weight:400}
.hero-h{font-size:clamp(54px,7.6vw,144px);letter-spacing:-.025em;line-height:.95}
@media (max-width:860px){.hero-h{font-size:clamp(38px,10.6vw,92px)}}
.hero::before{background:radial-gradient(48% 66% at 19% 54%,rgba(var(--inkr),.82),rgba(var(--inkr),.5) 56%,rgba(var(--inkr),0) 86%),linear-gradient(180deg,rgba(var(--inkr),.45),rgba(var(--inkr),0) 22%,rgba(var(--inkr),0) 70%,var(--ink) 100%)}
.hero .eyebrow{color:var(--accL)}
.brand .colg{stroke:var(--accL)}
#pre .mk path{fill:none;stroke:var(--accL);stroke-width:2.2}
.rail span{color:#9fb0c4}.rail span::before{background:var(--ink2);border-color:#5f7590;border-radius:0}
.story{background:var(--ink2)}
.scene .ghost path{fill:none;stroke:rgba(var(--boner),.5);stroke-width:.8;stroke-dasharray:2 5}
.scene .cl{fill:none;stroke:var(--bone);stroke-width:1.25;stroke-linejoin:round}
.scene .hat{fill:none;stroke:rgba(var(--accr),.75);stroke-width:.8}
.scene .gnd{stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .gnd2{stroke:rgba(var(--boner),.18);stroke-width:.8}
.scene .tag{fill:var(--ink2);stroke:rgba(var(--boner),.55);stroke-width:1.1}
.scene .join{fill:none;stroke:var(--accL);stroke-width:1.1}
.scene .dot{fill:var(--accL)}
.scene .tg{opacity:0}
.scene text{font-family:var(--mono);font-size:12px;letter-spacing:.1em;fill:var(--bone)}
.scene svg.mob text{font-size:15.5px;letter-spacing:.05em}
.stat .v{font-size:clamp(58px,6.4vw,116px)}
.stat .v,.mani .txt{letter-spacing:-.025em}
.mani .txt{font-size:clamp(32px,4vw,66px);line-height:1.1}
.pillars{margin-top:8px}
.light .pl3 .lab{color:var(--accD)}
.pl3 .lab{display:block;margin-bottom:22px}
.more{margin-top:clamp(72px,9vw,128px)}
.more h3.d3{margin:12px 0 0}
.light .aims li::before{background:var(--accD)}
.bio .role{display:block;margin-top:22px;color:var(--accL);max-width:30ch;line-height:1.7}
.bio .lede{font-family:var(--disp);font-size:clamp(26px,2.3vw,36px);line-height:1.25;letter-spacing:-.01em;margin:0;max-width:30ch}
.bio .muted{margin:28px 0 0;max-width:58ch;color:var(--stone);font-size:17px;line-height:1.65}
.bio .act{margin-top:34px}
.docs .row-a .nm{gap:4px}
.row-a::after{background:linear-gradient(0deg,rgba(var(--accr),.1),rgba(var(--accr),0) 70%)}
.cinfo{margin:clamp(64px,8vw,112px) 0 0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--gap);grid-column:1/-1}
.cinfo>div{border-top:1px solid var(--hairD);padding-top:18px}
.cinfo dt{color:var(--accD);margin-bottom:10px}
.cinfo dd{margin:0;font-size:16px;line-height:1.6;color:var(--ink)}
.cta .big em{color:var(--accD)}
.btn.solid{background:var(--acc);border-color:var(--acc);color:var(--ink)}
.light .btn.solid{background:var(--ink);border-color:var(--ink);color:var(--bone)}
.light .btn.solid::before{background:var(--accD)}
.light .btn.solid:hover{border-color:var(--accD)}
.xc{background:var(--ink3)}.xc::before{background:var(--accL)}
.ftr{background:var(--deep)}
.ftr .fcv{opacity:.42}
@media (min-width:1025px){.cta>.wrap>.cinfo{grid-row:4}}
@media (max-width:1024px){.cinfo{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.cinfo{grid-template-columns:1fr}}
@media (max-width:640px){.ftr .legal>span.lab:nth-child(2){white-space:normal}}
@media (max-width:860px){.fieldbg{background:#06182e}.story-r{height:48vh;height:48svh}}
'''
i = s.rfind('</style>')
s = s[:i] + CSS + s[i:]

# sanity: no firelight leftovers in visible content
left = [m.start() for m in re.finditer(r'(?i)firelight|flc-pre|rick@', s)]
out = os.path.join(ROOT, 'oliver.src.html')
import re as _bo; s = _bo.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', s, count=1)  # HOME_BRIEF update 1: nav items open build-out pages (_kit/lib/buildout.js)
open(out, 'w', encoding='utf8').write(s)
print('wrote', out, len(s), 'leftovers:', [s[max(0,p-40):p+30].replace('\n',' ') for p in left][:8])
