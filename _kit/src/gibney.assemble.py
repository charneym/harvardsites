#!/usr/bin/env python3
"""Assemble _kit/src/gibney.src.html from firelight.src.html regions (HOME_BRIEF: home-only, full-site style).
Run: python3 _kit/src/gibney.assemble.py && node _kit/build.js _kit/src/gibney.src.html gibney/index.html"""
import re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
src = (HERE / "firelight.src.html").read_text()
P = {}

P["meta"] = """<title>Gibney &amp; Company — Private wealth advisory, Iselin, New Jersey</title>
<meta name="description" content="Gibney &amp; Company provides comprehensive, independent and transparent family office solutions for individuals and families of significant wealth. Iselin, New Jersey.">
<meta name="theme-color" content="#1d2224">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%231d2224'/%3E%3Cellipse cx='32' cy='46' rx='20' ry='6' fill='none' stroke='%23c2bc9c' stroke-width='2.4'/%3E%3Cellipse cx='32' cy='33' rx='14' ry='5' fill='none' stroke='%23c2bc9c' stroke-width='2.4'/%3E%3Cellipse cx='32' cy='22' rx='8' ry='4' fill='none' stroke='%23c2bc9c' stroke-width='2.4'/%3E%3C/svg%3E">"""

P["fonts"] = "/*@fonts Cormorant Garamond:400,400i; Manrope:400,500; Red Hat Mono:400*/"

# palette: logo taupe #969075 (sampled 150,144,117) -> --acc; site slate #4b5457 -> deep ink base; site bone #eae9e4; site stone #b5b1a0
P["root"] = """:root{
  --ink:#1d2224;--inkr:29,34,36;--boner:234,233,228;--accr:150,144,117;--ink2:#22292b;--ink3:#2b3335;--deep:#161a1b;
  --bone:#eae9e4;--bone2:#dfddd5;--bone3:#d2cfc4;
  --stone:#b5b1a0;--stoneD:#5c5848;
  --acc:#969075;--accL:#c6c0a0;--accD:#625e47;
  --hair:rgba(234,233,228,.14);--hairD:rgba(29,34,36,.16);
  --disp:'Cormorant Garamond',Georgia,'Times New Roman',serif;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'Manrope',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Red Hat Mono',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}"""

P["fieldbg"] = """.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#1f2629 0%,#56605f 40%,#c9c3ad 60%,#3e4749 64%,#1d2224 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}"""

P["logocss"] = """.brand{display:flex;align-items:center;gap:14px;height:56px;color:var(--bone)}
.brand .bm{font:500 25px/1 var(--disp);letter-spacing:.1em;text-transform:uppercase;white-space:nowrap;padding-top:2px}
.brand .bm i{font-style:italic;font-weight:400;letter-spacing:0;text-transform:none;color:var(--accL);padding:0 .06em}
.brand .wt{font:400 10px/1.3 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--stone);max-width:9em;border-left:1px solid var(--hair);padding-left:14px}
@media (max-width:560px){.brand .wt{display:none}.brand .bm{font-size:22px}}"""

P["scenecss"] = """/* story (pinned, one continuous scene: the cairn is built tier by tier) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:12ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#a3a294;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #737566;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:400;font-size:clamp(28px,2.5vw,42px);line-height:1.08;letter-spacing:-.015em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(74vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .frm{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.3}
.scene .slab{fill:rgba(var(--boner),.035);stroke:rgba(var(--boner),.62);stroke-width:1.3}
.scene .ln-a{fill:none;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .hill{fill:none;stroke:rgba(var(--boner),.26);stroke-width:1}
.scene .sun{fill:none;stroke:var(--accL);stroke-width:1.1;opacity:.7}
.scene .stn{fill:var(--ink2);stroke:rgba(var(--boner),.78);stroke-width:1.3}
.scene .stn2{fill:#2e3330}
.scene .ghost{fill:none;stroke:rgba(var(--boner),.34);stroke-width:1;stroke-dasharray:3 6}
.story .rail span{color:#a3a294}.story .rail span::before{background:var(--ink2);border-color:#737566}.story .rail span.done::before,.story .rail span.on::before{background:var(--accL);border-color:var(--accL)}.story .rail span.on{color:var(--bone)}
.story .scene text{fill:#c9c6b8}.story .scene text.w{fill:var(--bone)}.story .scene text.a{fill:var(--accL)}
@media (max-width:860px){html .fieldbg{background:var(--ink)}}
.scene .ht{fill:none;stroke:rgba(var(--boner),.28);stroke-width:1}
.scene .rim{fill:none;stroke:var(--accL);stroke-width:1.5;stroke-linecap:round}
.scene .rip{fill:none;stroke:rgba(var(--boner),.22);stroke-width:1}
.scene .lead{fill:none;stroke:var(--accL);stroke-width:1}
.scene .dot{fill:var(--accL)}
.scene text{font-family:var(--mono);font-size:12px;letter-spacing:.12em;fill:#c9c6b8}
.scene text.a{fill:var(--accL)}
.scene text.w{fill:var(--bone)}
/* services rows (DH: the rule draws on hover) */
.svc{list-style:none;margin:0;padding:0;border-top:1px solid var(--hairD)}
.svc li{position:relative;display:grid;grid-template-columns:56px minmax(0,4fr) minmax(0,5fr) minmax(0,3.4fr);column-gap:var(--gap);align-items:center;padding:28px 0;border-bottom:1px solid var(--hairD)}
.svc li::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accD);transform:scaleX(0);transform-origin:right;transition:transform .4s var(--eo)}
.svc li:hover::after{transform:scaleX(1);transform-origin:left}
.svc .n{font-family:var(--mono);font-size:11px;letter-spacing:.14em;color:var(--accD)}
.svc h3{font-family:var(--disp);font-weight:400;font-size:clamp(26px,2.3vw,38px);line-height:1.08;letter-spacing:-.015em;margin:0;transition:transform .35s var(--eo),color .3s ease-out}
.svc li:hover h3{transform:translateX(6px);color:var(--accD)}
.svc p{margin:0;font-size:16px;line-height:1.6;color:var(--stoneD);max-width:48ch}
.svc ul{list-style:none;margin:0;padding:0}
.svc ul li{display:block;padding:3px 0;border:0;font-family:var(--mono);font-size:11px;line-height:1.5;letter-spacing:.12em;text-transform:uppercase;color:var(--ink)}
.svc ul li::after{display:none}
@media (max-width:1024px){.svc li{grid-template-columns:44px minmax(0,1fr) minmax(0,1fr);row-gap:14px}.svc li>ul{grid-column:2/-1}}
@media (max-width:640px){.svc li{grid-template-columns:1fr;row-gap:12px;padding:24px 0}.svc li>ul{grid-column:1}}
/* who we serve */
.pillars.p4{grid-template-columns:repeat(4,minmax(0,1fr));margin-top:clamp(64px,7vw,110px)}
.p4 .pl3 h3{font-weight:400}
@media (max-width:1024px){.pillars.p4{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:48px}}
@media (max-width:640px){.pillars.p4{grid-template-columns:1fr}}
.serve .lede{max-width:34ch}
.serve .credit p{font-weight:400}
.serve .credit p i{color:var(--accL)}
.serve .two>div:first-child{position:static!important}
.grp .mh-sum{display:block;-webkit-line-clamp:unset;overflow:visible}
/* team note */
.tnote{max-width:1100px;margin:clamp(36px,4vw,56px) auto 0;font-size:15px;color:var(--stone)}
/* contact details under the CTA */
.cdet{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:28px var(--gap);margin-top:clamp(56px,6vw,96px);padding-top:28px;border-top:1px solid var(--hairD);grid-column:1/-1}
.cdet>div{min-width:0}
.cdet .lab{display:block;margin-bottom:12px;color:var(--accD)}
.cdet p{margin:0;font-size:16px;line-height:1.6;color:var(--ink)}
.cdet a{display:inline-block;padding:2px 0}
.cdet .big2{font-family:var(--disp);font-size:clamp(22px,1.8vw,28px);line-height:1.25;letter-spacing:-.005em}
@media (max-width:1024px){.cdet{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.cdet{grid-template-columns:1fr}}
/* Cormorant sits small: lift the display sizes a touch and keep the italics in the family */
.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em{font-weight:400!important;font-style:italic}
.d2,.d3,.cta .big,.mani .txt,.hero-h{font-weight:400!important}
.d2{font-size:clamp(44px,5.6vw,104px);letter-spacing:-.02em!important}
.d3{font-size:clamp(36px,3.8vw,66px);letter-spacing:-.015em!important}
.mani .txt{font-size:clamp(32px,4vw,66px);letter-spacing:-.015em;line-height:1.1}
.stat .v{font-weight:400;letter-spacing:-.02em}
.hero-h{letter-spacing:-.02em!important}
.cta .big{letter-spacing:-.02em}
.pl3 h3,.pco h3,.pt h3{font-weight:400}"""

P["seen"] = """<script>try{if(sessionStorage.getItem("gib-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>"""

P["pre"] = """<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><path d="M14 80a34 9 0 1 0 68 0a34 9 0 1 0 -68 0M24 60a24 7 0 1 0 48 0a24 7 0 1 0 -48 0M33 42a15 5.5 0 1 0 30 0a15 5.5 0 1 0 -30 0M40 27a8 4 0 1 0 16 0a8 4 0 1 0 -16 0"/></svg>
    <div class="wm"><span>GIBNEY &amp; CO.</span></div>
  </div>
  <span class="lab pl">Private wealth advisory · Iselin, New Jersey</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>"""

P["brand"] = """<a href="#/" class="brand" id="brand" aria-label="Gibney &amp; Company, home"><span class="bm">Gibney <i>&amp;</i> Co.</span><span class="wt">Private Wealth Advisory</span></a>"""

P["navmenu"] = """<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/process">Process</a>
    <a class="nl ul" href="#/services">Services</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/approach">Approach</a></li>
    <li><a href="#/process">Process</a></li>
    <li><a href="#/services">Services</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Iselin, New Jersey</div>
    <div><span class="lab">Email</span><br>info@gibneywealth.com</div>
  </div>
</div>"""

P["xc"] = """<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Gibney &amp; Company</span><div class="t" id="xtt"></div></div>"""

P["site"] = """var SITE="Gibney & Company";
var PK="gib";"""

P["content"] = r"""var FONTS=['400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','400 1em "Manrope"','500 1em "Manrope"','400 1em "Red Hat Mono"'];
var GW="https://www.gibneywealth.com/";
var MAIL="info@gibneywealth.com";
var CRS=GW+"PDFs/GibneyFormCRS_ADV3_03.30.26.pdf";
var ADV="https://adviserinfo.sec.gov/firm/summary/151879";
var LOGIN="https://arielwealth.portal.tamaracinc.com/Login.aspx?ReturnUrl=%2fDashboard.aspx";
/* [title, description, sub-services] from gibneywealth.com "What We Offer" */
var SERVICES=[
 ["Investment advice and execution","A tailored asset allocation that weighs asset classes, investment styles, tax implications and your risk tolerance, then ongoing oversight: portfolio review, rebalancing and liquidity management.",["Strategic asset allocation","Investment management products","Retirement and college savings","Online trading"]],
 ["Cash flow planning, today and tomorrow","Ample and stable income, from meeting daily needs to buying a second home, with credit strategies that never interfere with your investing strategy.",["Cash flow and banking","Income tax planning","Loan strategies","Retirement income planning"]],
 ["Protecting your family’s assets","A look at your current coverage to identify any gaps in your family protection plan, and coverage recommended to meet your needs.",["Umbrella insurance","Property and casualty","Disability and health"]],
 ["Estate and wealth transfer strategies","Leaving a legacy to your heirs and favorite charities, developed with our own outside counsel and your trusted advisors, and aligned with your goals and values.",["Wealth transfer","Estate services"]],
 ["Tax planning","Efficient, proactive strategies to manage your annual tax burden and to plan for special events, from managing a distribution to selling a business.",["Annual and special event tax management","Tax preparation"]]
];
var DIFF=[
 ["Comprehensive","Your central source for financial information, management and execution, with the expertise, products and services to meet your family’s fiscal needs."],
 ["Independent","A private, independent firm delivering advice in complete confidentiality, working with all of your trusted advisors."],
 ["Engaged","An enduring relationship that connects life events with your financial plan, to serve your entire family well into the future."],
 ["Accountable","Your success is our success. Complete transparency in every discretionary relationship."]
];
function P(slug,name,title,sum){return {slug:slug,name:name,title:title,grp:"Partners",img:"",sum:sum}}
var SHEETS=[
 P("kevin-m-gibney","Kevin M. Gibney","Chief Executive Officer, Founder and Managing Partner","Launched the firm in 2009. Previously Vice President of Financial Counseling at The Ayco Company, a private wealth management division of Goldman Sachs. M.B.A., Fairleigh Dickinson."),
 P("vanessa-bovo-curran","Vanessa Bovo Curran","Partner","Formerly Senior Executive Financial Planner at The Ayco Company. J.D., cum laude, Seton Hall University School of Law; admitted to practice law in New Jersey and New York.")
];
var GROUPS=[["Partners",SHEETS]];
var NEWS=[];"""

P["views"] = r"""/* ================= VIEWS (home only; every nav item scrolls to its section) ================= */
var SECS=["approach","process","services","clients","team","contact"],SECID={approach:"approach",process:"story",services:"services",clients:"clients",team:"team",contact:"contact"};
function secGo(s,instant){var el=document.getElementById(SECID[s]||s);if(!el)return;var off=s==="process"?0:(MOBILE()?56:72);var y=Math.max(0,el.getBoundingClientRect().top+window.scrollY-off);
  if(lenis)lenis.scrollTo(y,{duration:instant?0:1.5,immediate:!!instant,force:true});else window.scrollTo(0,y)}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var s=a.getAttribute("href").slice(2);if(SECS.indexOf(s)<0)return;
  e.preventDefault();e.stopImmediatePropagation();if(document.body.classList.contains("menu-open"))closeMenu();secGo(s)},true);
addEventListener("hashchange",function(e){var s=location.hash.replace(/^#\/?/,"");if(SECS.indexOf(s)<0||curKey!=="home")return;e.stopImmediatePropagation();history.replaceState(null,"","#/");prevHash="#/";secGo(s)});
function mhRow2(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}
function grid(groups){return groups.map(function(g){return '<div class="grp"><div class="mh"><div class="mh-group"><ul class="mh-list">'+g[1].map(mhRow2).join("")+'</ul></div></div></div>'}).join("")}
function svc(){return '<ul class="svc">'+SERVICES.map(function(s,i){return '<li><span class="n">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p><ul>'+s[2].map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul></li>'}).join("")+'</ul>'}
function vHome(){
  var pend=window._secPend;window._secPend=null;if(pend)setTimeout(function(){secGo(pend,true)},window._preShown?2300:900);
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private wealth advisory<span class="nomob"> · Iselin, New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Time to enjoy</span><span class="l">your family, and</span><span class="l">your <em>wealth.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Gibney &amp; Company provides comprehensive, independent and transparent family office solutions that focus on your unique financial needs and aspirations.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/process">How we work '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Mission and philosophy</span>'+
   '<p class="txt" id="mani">Possessing significant wealth is a blessing that also carries tremendous responsibility for individuals and <em>their families.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><span class="k">Founded, and registered with the SEC as an investment adviser</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4<sup>×</sup></span><span class="k">A year, at least: every client account is reviewed quarterly</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><span class="k">Disciplines under one roof: investments, cash flow, protection, estate and tax</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work</span><h2 class="d3">A plan built to <em>stay in balance.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Partner</span><span>Strategy</span><span>Implement</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We partner with you.</h2><p>The first step is to meet with you, your family and any designated advisors to explore your financial responsibilities and ambitions, your assets and liabilities, your income needs, and your risk profile and preferences.</p></article>'+
     '<article class="step"><h2>We formulate a personalized strategy.</h2><p>We evaluate your financial situation to create a clear picture of where you stand today and where you want to be tomorrow: potential pitfalls and gaps, the optimal products and solutions, and the actions needed to implement the plan.</p></article>'+
     '<article class="step"><h2>We implement and assess.</h2><p>We take care of whatever needs to be done, from engaging outside providers to wiring money, so you don’t have to. Then we keep managing the plan as circumstances, family events and opportunities change.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we offer</span><h2 class="d2 split">A broad range <em>of services.</em></h2></div><p data-r>Five disciplines, coordinated by one firm, so that your investments, income, protection, estate and taxes all pull in the same direction.</p></div>'+
   svc()+
  '</div></section>'+

  '<section class="sec dark serve" id="clients" data-theme="dark"><div class="wrap">'+
   '<div class="two"><div><span class="lab kick" data-r>Who we serve</span><h2 class="d3 split">Individuals and families of <em>significant wealth.</em></h2></div>'+
   '<div><p class="lede" data-r>We are sensitive to the responsibilities of wealth stewardship, and work hard to engender greater peace of mind even as we serve your lifelong goals and ambitions.</p>'+
   '<p class="muted" data-r style="margin-top:26px;max-width:56ch">You will bring valued advisor relationships to the table, and we welcome the opportunity to work with them. Our alliances with tax and accounting firms add business consulting, income tax planning and preparation.</p>'+
   '<div class="credit"><span class="lab" data-r>Brokerage, custody and online trading through</span><p data-r><span>Charles Schwab</span><i>/</i><span>Fidelity Investments</span></p></div></div></div>'+
   '<div class="pillars p4">'+DIFF.map(function(d,i){return '<div class="pl3"><span class="lab">0'+(i+1)+'</span><h3>'+esc(d[0])+'</h3><p>'+esc(d[1])+'</p></div>'}).join("")+'</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our team</span><h2 class="d2 split">Partners in your <em>family’s plan.</em></h2></div><p data-r>Both partners advised executives, entrepreneurs and families at The Ayco Company, a private wealth management division of Goldman Sachs, before building Gibney &amp; Company.</p></div>'+
   grid(GROUPS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact us</span>'+
   '<h2 class="big split">Start with a <em>conversation.</em></h2>'+
   '<p class="sub" data-r>Our goal is to give you the time and freedom to enjoy your family, and your wealth. The first step is a meeting with you, your family and your advisors.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:+19089709800">(908) 970-9800</a></div>'+
   '<div class="cdet">'+
    '<div><span class="lab">Headquarters</span><p>Gibney &amp; Company<br>33 Wood Avenue South, Suite 710<br>Iselin, NJ 08830</p></div>'+
    '<div><span class="lab">Phone</span><p><a class="ul big2" href="tel:+19089709800">(908) 970-9800</a><br>Fax (908) 934-9249</p></div>'+
    '<div><span class="lab">Email</span><p><a class="ul big2" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Disclosures</span><p><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS (March 30, 2026)</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on adviserinfo.sec.gov</a><br><a class="ul" href="'+LOGIN+'" target="_blank" rel="noopener">Client log in</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function v404(){return '<section class="ph-head" data-field data-theme="dark"><span class="lab eyebrow">Not found</span><h1 class="d1" id="pageTitle" tabindex="-1">This page <em>does not exist.</em></h1><p class="lede intro" data-r><a class="ul" href="#/">Return home →</a></p></section>'}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>33 Wood Avenue South, Suite 710<br>Iselin, NJ 08830</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:+19089709800">(908) 970-9800</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/process">Process</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a><br>SEC-registered investment adviser</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 50" aria-hidden="true"><text x="260" y="40" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:400;font-size:50px;letter-spacing:.1em">GIBNEY &amp; CO.</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kevin M. Gibney and Company, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function pBy(s){return -1}
/* ================= ROUTER ================= */
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(!p.length)return {k:"home",v:vHome,t:"Gibney & Company — Private wealth advisory, Iselin, New Jersey",x:"Home"};
  if(SECS.indexOf(p[0])>=0){if(!curKey){window._secPend=p[0];try{history.replaceState(null,"","#/")}catch(e){}}return {k:"home",v:vHome,t:"Gibney & Company — Private wealth advisory, Iselin, New Jersey",x:"Home"}}
  return {k:"404",v:v404,t:"Not found — "+SITE,x:"Not found"};
}"""

P["field"] = r"""/* ================= HERO FIELD: first light on a still lake. A cairn of smooth river stones balances on a low rock
   shelf at the water's edge (the stacked stones of Gibney's own site, made real), backlit by a low sun over wooded hills,
   with mist drifting across the far shore and the whole scene mirrored in the water. It moves on its own (mist, ripples,
   glints), with no pointer response (CZ). Every colour comes from the logo taupe, the site slate and bone. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oRef=null,oCairn=null,MI=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h,hz=mob?U*.5:h*.6;
    var S=mob?Math.max(12,U*.09):Math.max(24,Math.min(h*.062,w*.04));
    var cx=mob?w*.66:side+cw*.75,wl=mob?U*.84:h*.79;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,cx:cx,wl:wl,sx:mob?w*.34:cx-S*4.6,sy:hz-U*(mob?.07:.075)};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function ridge(g,base,amp,seed,col,trees){var R=rng(seed),ph=[R()*6.28,R()*6.28,R()*6.28],f=[1.7+R(),3.9+R()*2,9+R()*4];
    g.fillStyle=col;g.beginPath();g.moveTo(-4,G.hz+2);
    for(var x=-4;x<=w+4;x+=trees?2:4){var u=x/w,y=base-amp*(.55*Math.sin(u*f[0]+ph[0])+.3*Math.sin(u*f[1]+ph[1])+.15*Math.sin(u*f[2]+ph[2]));
      if(trees){var k=x*.21+seed;y-=amp*.16*Math.abs(Math.sin(k))*(.6+.4*Math.sin(k*.37))+amp*.07*Math.abs(Math.sin(k*2.3))}g.lineTo(x,y)}
    g.lineTo(w+4,G.hz+2);g.closePath();g.fill()}
  function haze(g,top,bot,a){var hg=g.createLinearGradient(0,top,0,bot);hg.addColorStop(0,"rgba(214,208,186,0)");hg.addColorStop(1,"rgba(214,208,186,"+a+")");g.fillStyle=hg;g.fillRect(0,top,w,bot-top)}
  function stone(g,x,y,rx,ry,rot,col,lit){
    g.save();g.translate(x,y);g.rotate(rot);
    g.beginPath();for(var i=0;i<=48;i++){var a=i/48*Math.PI*2,r=1+.035*Math.sin(2*a+rx)+.025*Math.sin(3*a+ry),py=Math.sin(a)*ry*r;if(py>0)py*=.9;var px=Math.cos(a)*rx*r;i?g.lineTo(px,py):g.moveTo(px,py)}g.closePath();
    var gr=g.createLinearGradient(0,-ry,0,ry);gr.addColorStop(0,col[0]);gr.addColorStop(.55,col[1]);gr.addColorStop(1,col[2]);g.fillStyle=gr;g.fill();
    g.save();g.clip();
    var sp=g.createRadialGradient(-rx*.42,-ry*.55,0,-rx*.42,-ry*.55,rx*.9);sp.addColorStop(0,"rgba(236,226,196,"+(.22*lit).toFixed(3)+")");sp.addColorStop(1,"rgba(236,226,196,0)");g.fillStyle=sp;g.fillRect(-rx*1.2,-ry*1.2,rx*2.4,ry*2.4);
    var sh=g.createLinearGradient(0,ry*.1,0,ry);sh.addColorStop(0,"rgba(16,19,20,0)");sh.addColorStop(1,"rgba(16,19,20,.55)");g.fillStyle=sh;g.fillRect(-rx*1.2,-ry,rx*2.4,ry*2.2);
    g.restore();
    g.strokeStyle="rgba(246,236,206,"+(.62*lit).toFixed(3)+")";g.lineWidth=Math.max(1,rx*.018);g.lineCap="round";
    g.beginPath();g.ellipse(0,0,rx*.995,ry*.99,0,Math.PI*1.08,Math.PI*1.62);g.stroke();
    g.restore()}
  function build(){
    var hz=G.hz,U=G.U,A=mk(hz+2),g=A[1];oSky=A[0];
    /* dawn sky: slate overhead warming to the logo's taupe and a pale gold band over the hills */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#1f2629");sky.addColorStop(.3,"#323d41");sky.addColorStop(.58,"#5f6866");sky.addColorStop(.78,"#9b9a86");sky.addColorStop(.92,"#d3cbb0");sky.addColorStop(1,"#e8dfc4");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    var sx=G.sx,sy=G.sy;
    var sg=g.createRadialGradient(sx,sy,0,sx,sy,U*.55);sg.addColorStop(0,"rgba(250,240,212,.6)");sg.addColorStop(.25,"rgba(236,220,182,.22)");sg.addColorStop(1,"rgba(236,220,182,0)");g.fillStyle=sg;g.fillRect(0,0,w,hz+2);
    var sd=g.createRadialGradient(sx,sy,0,sx,sy,U*.022);sd.addColorStop(0,"rgba(255,250,236,1)");sd.addColorStop(.7,"rgba(255,246,222,.9)");sd.addColorStop(1,"rgba(255,246,222,0)");g.fillStyle=sd;g.beginPath();g.arc(sx,sy,U*.022,0,Math.PI*2);g.fill();
    /* thin cloud strands lit from below */
    var R=rng(7);for(var i=0;i<6;i++){var cy=hz*(.52+R()*.3),cxx=R()*w,cwid=w*(.14+R()*.2),ch=U*(.004+R()*.006),a=.05+R()*.08;
      g.save();g.translate(cxx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(240,228,198,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(240,228,198,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* three ranges of wooded hills, receding into the haze */
    ridge(g,hz-U*.085,U*.05,13,"#a3a493",false);haze(g,hz-U*.1,hz,.35);
    ridge(g,hz-U*.045,U*.04,31,"#7c837d",true);haze(g,hz-U*.06,hz,.3);
    ridge(g,hz-U*.016,U*.026,57,"#4f5856",true);
    var lw=g.createLinearGradient(0,hz-U*.012,0,hz+1);lw.addColorStop(0,"rgba(214,208,186,0)");lw.addColorStop(1,"rgba(214,208,186,.22)");g.fillStyle=lw;g.fillRect(0,hz-U*.012,w,U*.012+2);
    /* the reflection: the sky and hills mirrored, darkened by the water */
    var WH=(G.mob?U:h)-hz+2,B=mk(WH),r=B[1];oRef=B[0];
    r.setTransform(1,0,0,-1,0,Math.round(hz*dpr));r.drawImage(oSky,0,0);r.setTransform(dpr,0,0,dpr,0,0);
    var wt=r.createLinearGradient(0,0,0,WH);wt.addColorStop(0,"rgba(60,70,72,.18)");wt.addColorStop(.25,"rgba(44,52,54,.55)");wt.addColorStop(.7,"rgba(29,34,36,.86)");wt.addColorStop(1,"rgba(22,26,27,.96)");r.fillStyle=wt;r.fillRect(0,0,w,WH);
    /* the cairn on its rock shelf (drawn once; mirrored each frame) */
    var C=mk((G.mob?U:h)+2),k=C[1];oCairn=C[0];var S=G.S,cx=G.cx,wl=G.wl;
    k.fillStyle="#252c2e";k.beginPath();k.moveTo(cx-S*4.4,wl+1);k.bezierCurveTo(cx-S*4,wl-S*.2,cx-S*3.4,wl-S*.42,cx-S*2.6,wl-S*.46);k.lineTo(cx+S*2.2,wl-S*.52);k.bezierCurveTo(cx+S*3.2,wl-S*.5,cx+S*4.1,wl-S*.28,cx+S*4.9,wl+1);k.closePath();k.fill();
    var tg=k.createLinearGradient(0,wl-S*.55,0,wl);tg.addColorStop(0,"rgba(214,204,174,.28)");tg.addColorStop(.25,"rgba(214,204,174,.05)");tg.addColorStop(1,"rgba(0,0,0,0)");k.fillStyle=tg;k.fill();
    k.strokeStyle="rgba(240,230,200,.35)";k.lineWidth=1;k.beginPath();k.moveTo(cx-S*3.3,wl-S*.4);k.bezierCurveTo(cx-S*2.8,wl-S*.46,cx-S*2.6,wl-S*.46,cx-S*1.6,wl-S*.48);k.stroke();
    var PB=[[-3.2,.07,.16],[-2.9,.06,.1],[2.9,.08,.14],[3.4,.05,.09]];PB.forEach(function(q){stone(k,cx+q[0]*S,wl-S*.46-q[2]*S*.5,q[2]*S*1.5,q[2]*S*.75,0,["#4a5254","#343c3e","#22292b"],.7)});
    var ST=[[0,1.62,.5,.02,["#4b5355","#363e40","#22292b"]],[.07,1.3,.44,-.03,["#6d6958","#55523f","#34342b"]],[-.05,1.04,.39,.025,["#4f5759","#394143","#24292b"]],[.04,.82,.33,-.02,["#77735f","#5c5945","#3a3a2f"]],[-.03,.62,.28,.03,["#525a5c","#3b4345","#262c2e"]],[.02,.44,.24,-.02,["#827d66","#66624c","#424133"]],[0,.27,.18,.02,["#5a6264","#424a4c","#2a3133"]]];
    var y=wl-S*.46,cxs=[];
    for(var j=0;j<ST.length;j++){var q=ST[j],rx=q[1]*S,ry=q[2]*S,yc=y-ry*.9;
      if(j){k.fillStyle="rgba(14,17,18,.45)";k.beginPath();k.ellipse(cx+q[0]*S,y+ry*.05,rx*.82,ry*.32,0,0,Math.PI*2);k.fill()}
      stone(k,cx+q[0]*S,yc,rx,ry,q[3],q[4],1);cxs.push(yc);y=yc-ry*.82}
    G.top=y;
    MI=[];var Rm=rng(23);for(var m=0;m<(G.mob?5:9);m++)MI.push([Rm(),hz-U*(.07*Rm()-.01),.18+Rm()*.3,.004+Rm()*.006,.07+Rm()*.08,.6+Rm()*.8]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,cx=G.cx,wl=G.wl,wb=G.mob?U:h,D=dpr;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);
    /* the water: the mirrored sky, broken into gently shifting strips (more movement toward the viewer) */
    var WH=wb-hz,step=2;
    for(var yy=0;yy<WH;yy+=step){var k=yy/WH,amp=(.6+k*7)*(G.mob?.6:1),dx=Math.sin(yy*.09/(.3+k)+t*.9)*amp+Math.sin(yy*.031+t*.5)*amp*.6;
      c.drawImage(oRef,0,Math.round(yy*D),oRef.width,Math.ceil(step*D),Math.round(dx*D),Math.round((hz+yy)*D),oRef.width,Math.ceil(step*D))}
    c.setTransform(D,0,0,D,0,0);
    /* the sun's path across the water: flickering glints */
    var sx=G.sx;c.globalCompositeOperation="lighter";
    for(var gI=0;gI<(G.mob?26:60);gI++){var gy=hz+3+Math.pow((gI+.5)/(G.mob?26:60),1.7)*(wl-hz-6),gk=(gy-hz)/(wl-hz),gw=U*(.02+.09*gk)*(.5+.5*Math.sin(gI*12.9898)),gx=sx+Math.sin(gI*78.233+t*.7)*U*.025*(1+gk*2),ga=(.12+.2*(1-gk))*(.5+.5*Math.sin(t*2.1+gI*1.7));
      if(ga<.04)continue;c.fillStyle="rgba(246,232,196,"+(ga*e).toFixed(3)+")";c.fillRect(gx-gw/2,gy,gw,1)}
    c.globalCompositeOperation="source-over";
    /* mist drifting along the far shore */
    for(var m=0;m<MI.length;m++){var mi=MI[m],mw=w*mi[2],mx=((mi[0]*w*1.6+t*U*mi[3]*mi[5]*2)%(w*1.6))-w*.3,my=mi[1]+Math.sin(t*.2+m)*U*.003;
      c.save();c.translate(mx,my);c.scale(1,(U*.022)/mw);var mg=c.createRadialGradient(0,0,0,0,0,mw);mg.addColorStop(0,"rgba(232,226,206,"+mi[4].toFixed(3)+")");mg.addColorStop(1,"rgba(232,226,206,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,mw,0,Math.PI*2);c.fill();c.restore()}
    /* the cairn's reflection, softened and rippled */
    c.save();c.beginPath();c.rect(0,wl,w,wb-wl);c.clip();c.globalAlpha=e*.42;
    var ry0=wl,rh=wl-G.top+S;
    for(var r2=0;r2<rh;r2+=2){var dk=Math.sin(r2*.22+t*1.4)*(.4+r2*.025),srcY=wl-r2;
      c.drawImage(oCairn,Math.round((cx-S*5.2)*D),Math.round((srcY-2)*D),Math.round(S*10.4*D),Math.ceil(2*D),cx-S*5.2+dk,ry0+r2,S*10.4,2)}
    c.restore();c.globalAlpha=e;
    /* ripple lines crossing the reflection and the open water */
    c.strokeStyle="rgba(214,208,186,.10)";c.lineWidth=1;
    for(var rl=0;rl<(G.mob?7:12);rl++){var rk=(rl+.5)/(G.mob?7:12),ryy=wl+S*.25+rk*(wb-wl)*.5,rw=S*(2.5+rk*4),rxx=cx+Math.sin(t*.3+rl*2.1)*S*.5;
      c.globalAlpha=e*(.5+.5*Math.sin(t*.8+rl));c.beginPath();c.moveTo(rxx-rw,ryy);c.quadraticCurveTo(rxx,ryy+1.5,rxx+rw,ryy);c.stroke()}
    c.globalAlpha=e;
    c.setTransform(1,0,0,1,0,0);c.drawImage(oCairn,0,0);c.setTransform(D,0,0,D,0,0);
    /* the waterline lapping at the shelf */
    var lap=Math.sin(t*.9)*.5+.5;c.strokeStyle="rgba(228,220,196,"+(.18+.14*lap).toFixed(3)+")";c.lineWidth=1;c.beginPath();
    for(var lx=cx-S*4.5;lx<=cx+S*5;lx+=6){var ly=wl+.5+Math.sin(lx*.05+t*1.2)*.8;lx===cx-S*4.5?c.moveTo(lx,ly):c.lineTo(lx,ly)}c.stroke();
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.wl-G.S*1.6]:[w/2,h/2]}};
})();"""

P["story"] = r"""/* the story scene (BL/BY): ONE cairn on one rock shelf by the water, built tier by tier. Step 1 places the broad base
   stones (what we learn when we partner with you), step 2 the middle stones (the strategy), step 3 the capstones (implement
   and assess). Each tier's labels connect to its own stones; earlier tiers stay, dimmed. */
var ST_D=[[130,33],[102,31],[82,27],[64,24],[48,20],[33,17],[19,13]],ST_T=[0,0,1,1,2,2,2];
var LB_D=[["YOUR AMBITIONS",0,"l"],["INCOME NEEDS",0,"r"],["ASSETS & LIABILITIES",1,"l"],["RISK PROFILE",1,"r"],["PITFALLS & GAPS",2,"l"],["ACTIONS TO TAKE",2,"r"],["PRODUCTS & SOLUTIONS",3,"l"],["RECOMMENDATIONS",3,"r"],["COMPLETE PICTURE",4,"l"],["ACCOUNTABILITY",4,"r"],["MEANINGFUL REPORTS",5,"l"],["ACTIVE MANAGEMENT",5,"r"]];
function stoneSvg(cx,cy,rx,ry,i){
  return '<g class="sG" data-t="'+ST_T[i]+'"><ellipse class="stn'+(i%2?' stn2':'')+'" cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'"/>'+
   '<path class="ht" d="M'+(cx-rx*.7).toFixed(1)+' '+(cy+ry*.35).toFixed(1)+'Q'+cx+' '+(cy+ry*1.02).toFixed(1)+' '+(cx+rx*.7).toFixed(1)+' '+(cy+ry*.35).toFixed(1)+'"/>'+
   (rx>40?'<path class="ht" d="M'+(cx-rx*.42).toFixed(1)+' '+(cy+ry*.62).toFixed(1)+'Q'+cx+' '+(cy+ry*1.08).toFixed(1)+' '+(cx+rx*.42).toFixed(1)+' '+(cy+ry*.62).toFixed(1)+'"/>'+'<path class="ht" d="M'+(cx-rx*.86).toFixed(1)+' '+(cy+ry*.05).toFixed(1)+'Q'+cx+' '+(cy+ry*.78).toFixed(1)+' '+(cx+rx*.86).toFixed(1)+' '+(cy+ry*.05).toFixed(1)+'"/>':'')+
   '<path class="rim" d="M'+(cx-rx*.94).toFixed(1)+' '+(cy-ry*.34).toFixed(1)+'A'+rx+' '+ry+' 0 0 1 '+(cx-rx*.09).toFixed(1)+' '+(cy-ry*.996).toFixed(1)+'"/></g>'}
function cairn(cx,by,k){var y=by,out=[],gh=[],ys=[];for(var i=0;i<ST_D.length;i++){var rx=ST_D[i][0]*k,ry=ST_D[i][1]*k,cy=y-ry;ys.push([cy,rx]);out.push(stoneSvg(cx,+cy.toFixed(1),+rx.toFixed(1),+ry.toFixed(1),i));
  if(ST_T[i])gh.push('<ellipse class="ghost" data-t="'+ST_T[i]+'" cx="'+cx+'" cy="'+cy.toFixed(1)+'" rx="'+rx.toFixed(1)+'" ry="'+ry.toFixed(1)+'"/>');y=cy-ry}
  return {svg:'<g id="scGhost">'+gh.join("")+'</g>'+out.join(""),ys:ys}}
function land(W,H,wl,sx,sy){var o='';
  o+='<path class="hill" d="M0 '+(wl-30)+'C'+W*.12+' '+(wl-44)+' '+W*.24+' '+(wl-50)+' '+W*.36+' '+(wl-40)+'S'+W*.6+' '+(wl-26)+' '+W*.74+' '+(wl-38)+'S'+W*.92+' '+(wl-46)+' '+W+' '+(wl-34)+'"/>';
  o+='<path class="hill" d="M0 '+(wl-12)+'C'+W*.18+' '+(wl-24)+' '+W*.3+' '+(wl-20)+' '+W*.44+' '+(wl-15)+'S'+W*.7+' '+(wl-10)+' '+W*.84+' '+(wl-20)+'S'+W*.96+' '+(wl-17)+' '+W+' '+(wl-13)+'"/>';
  o+='<path class="frm" d="M0 '+wl+'H'+W+'"/>';
  for(var i=0;i<4;i++){var y=wl+16+i*14,a=W*(.08+i*.04),b=W*(.92-i*.05);o+='<path class="rip" d="M'+a+' '+y+'H'+(W*.42)+'M'+(W*.58)+' '+y+'H'+b+'"/>'}
  return o}
function scene(){
  var mob=MOBILE(),o;
  if(mob){var W=400,H=440,wl=372,cx=200,k=.64,C=cairn(cx,wl-14,k);
    o='<svg class="mob" viewBox="0 128 '+W+' 306" aria-hidden="true"><g id="scLand">'+land(W,H,wl,64,262)+
      '<path class="slab" d="M'+(cx-110)+' '+wl+'L'+(cx-94)+' '+(wl-14)+'H'+(cx+92)+'L'+(cx+112)+' '+wl+'Z"/></g>'+C.svg;
    var tiers=[[0,1,"PARTNER"],[2,3,"STRATEGY"],[4,6,"IMPLEMENT"]];
    tiers.forEach(function(tq,ti){var a=C.ys[tq[0]],b=C.ys[tq[1]],y=(a[0]+b[0])/2,ex=cx+Math.max(a[1],b[1])+8,side=ti===1?"l":"r";
      if(side==="r")o+='<g class="sL" data-t="'+ti+'"><path class="lead" d="M'+ex.toFixed(1)+' '+y.toFixed(1)+'H300"/><circle class="dot" cx="300" cy="'+y.toFixed(1)+'" r="2.5"/><text x="308" y="'+(y+4).toFixed(1)+'" class="w">'+tq[2]+'</text></g>';
      else{var lx=cx-Math.max(a[1],b[1])-8;o+='<g class="sL" data-t="'+ti+'"><path class="lead" d="M'+lx.toFixed(1)+' '+y.toFixed(1)+'H100"/><circle class="dot" cx="100" cy="'+y.toFixed(1)+'" r="2.5"/><text x="92" y="'+(y+4).toFixed(1)+'" text-anchor="end" class="w">'+tq[2]+'</text></g>'}});
    return o+'</svg>'}
  var W=800,H=620,wl=560,cx=400,C=cairn(cx,wl-20,1.24);
  o='<svg viewBox="0 96 '+W+' 528" aria-hidden="true"><g id="scLand">'+land(W,H,wl,104,150)+
    '<path class="slab" d="M'+(cx-206)+' '+wl+'C'+(cx-198)+' '+(wl-12)+' '+(cx-186)+' '+(wl-20)+' '+(cx-166)+' '+(wl-20)+'H'+(cx+162)+'C'+(cx+182)+' '+(wl-20)+' '+(cx+200)+' '+(wl-12)+' '+(cx+214)+' '+wl+'Z"/></g>'+C.svg;
  LB_D.forEach(function(L){var s=C.ys[L[1]],y=s[0],t=ST_T[L[1]];
    if(L[2]==="l"){var ex=cx-s[1]-10;o+='<g class="sL" data-t="'+t+'"><path class="lead" d="M'+ex.toFixed(1)+' '+y.toFixed(1)+'H204"/><circle class="dot" cx="204" cy="'+y.toFixed(1)+'" r="2.5"/><text x="194" y="'+(y+4).toFixed(1)+'" text-anchor="end" class="w">'+L[0].replace("&","&amp;")+'</text></g>'}
    else{var ex2=cx+s[1]+10;o+='<g class="sL" data-t="'+t+'"><path class="lead" d="M'+ex2.toFixed(1)+' '+y.toFixed(1)+'H596"/><circle class="dot" cx="596" cy="'+y.toFixed(1)+'" r="2.5"/><text x="606" y="'+(y+4).toFixed(1)+'" class="w">'+L[0].replace("&","&amp;")+'</text></g>'}});
  return o+'</svg>'}
function storyDraw(svg){
  var GH=$$(".ghost",svg),SG=$$(".sG",svg),SL=$$(".sL",svg),land=$("#scLand",svg),LD=SL.map(function(g){return $(".lead",g)}),LL=LD.map(function(p){return p.getTotalLength()});
  return function(p,b){
    if(!svg.isConnected)return;
    var q=[1,seg(p,.24,.44),seg(p,.57,.78)],cur=p<1/3?0:p<2/3?1:2;
    land.style.opacity=b.toFixed(3);
    var idx=[0,0,0],gi=[0,0,0];
    GH.forEach(function(g){var t=+g.getAttribute("data-t"),n=gi[t]++,qq=seg(q[t],n*.18,.62+n*.18);g.style.opacity=(b*(1-qq)).toFixed(3)});
    SG.forEach(function(g){var t=+g.getAttribute("data-t"),n=idx[t]++,qq=t?seg(q[t],n*.18,.62+n*.18):1,v=t?qq:b;
      g.style.opacity=(b*v).toFixed(3);g.setAttribute("transform","translate(0 "+(-(1-v)*46).toFixed(1)+")")});
    SL.forEach(function(g,i){var t=+g.getAttribute("data-t"),qq=t?seg(q[t],.3,1):seg(b,.35,1),dimv=t===cur?1:.38;
      g.style.opacity=(b*qq*dimv).toFixed(3);LD[i].style.strokeDasharray=LL[i];LD[i].style.strokeDashoffset=(LL[i]*(1-qq)).toFixed(1)});
  };
}"""

def put(s, name, body):
    for a, b in ((f"/*<R:{name}>*/", f"/*</R:{name}>*/"), (f"<!--<R:{name}>-->", f"<!--</R:{name}>-->")):
        i = s.find(a)
        if i >= 0:
            j = s.find(b, i)
            assert j > i, name
            return s[:i + len(a)] + body + s[j:]
    raise SystemExit("region not found: " + name)

for k, v in P.items():
    src = put(src, k, v)
# the page has one view: drop the footer copy of the old site's flame mark etc. nothing else is hand-edited
src = src.replace("/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */", "/* ===== Gibney: slate ground, bone pages, the logo taupe as the accent ===== */")
left = [src[max(0,m.start()-60):m.start()+40] for m in re.finditer("(?i)firelight|flc-", src)]
if left: print("WARN leftover:", left)
(HERE / "gibney.src.html").write_text(src)
print("wrote", HERE / "gibney.src.html", len(src))
