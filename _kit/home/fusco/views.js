/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Independent &amp; family-owned<span class="nomob"> · Wilton Manors, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stronger</span><span class="l"><em>together.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Asset management and financial planning from an independent, family-owned firm that has served its community since 1981, built on relationships of respect, trust and loyalty.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="philosophy" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our commitment</span>'+
   '<h2 class="txt" id="mani">Helping you create a path to financial freedom, so you can enjoy your life, your family and ultimately <em>your retirement.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1981</span><span class="k">An independent, family-owned business serving our community since</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$159M</span><span class="k">Client assets managed, as of December 2025 (Form ADV)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Fiduciary</span><span class="k">As your investment adviser we must act in your best interest, and not put our interest ahead of yours</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with you</span><h2 class="d3">Every plan starts <em>one&#8209;on&#8209;one.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Listen</span><span>Design</span><span>Monitor</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We begin with you.</h2><p>Through interviews and questionnaires we learn your objectives, your circumstances and your tolerance for risk, so that our advice is built around your needs.</p></article>'+
     '<article class="step"><h2>A portfolio designed for you.</h2><p>Diversified portfolios, built mainly from mutual funds and equities. You can restrict specific investments or sectors, and we adapt to low-basis stock, inheritances or a closely held business.</p></article>'+
     '<article class="step"><h2>Watched continuously.</h2><p>We monitor your accounts and trade when necessary. We do not try to time the market; at most we raise cash modestly when your risk tolerance and market conditions call for it.</p></article>'+
     '<article class="step"><h2>Reviewed at least once a year.</h2><p>Johanna Lobdell, CFP®, reviews every account against your needs, objectives and financial plan at least annually, and more often if your circumstances change or you ask.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Two services, one <em>relationship.</em></h2></div><p data-r>Our services are always provided based on the individual needs of each client. We do not recommend or offer advice on any proprietary products.</p></div>'+
   '<div class="kits"><div><span class="lab kick" data-r>Asset management</span>'+aims(AM)+'</div><div><span class="lab kick" data-r>Financial planning</span>'+aims(FP)+'</div></div>'+
   '<p class="note-s" data-r>Client assets are held by an independent custodian, Fidelity (National Financial Services). You receive statements directly from the custodian, at least quarterly.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="clients" data-theme="dark"><div class="wrap"><div class="two">'+
   '<div><span class="lab kick" data-r>Who we serve</span><h2 class="d3 split">Individuals, families and the plans they <em>rely on.</em></h2><p class="muted" data-r style="margin-top:26px;max-width:40ch">Asset management accounts typically start at $500,000, and all household accounts can be combined to reach it.</p></div>'+
   '<div><dl class="facts">'+WHO.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl></div>'+
  '</div></div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A family firm, <em>since 1981.</em></h2></div><p data-r>Neither the firm nor its advisers has any legal or disciplinary history to report.</p></div>'+
   '<div class="mh"><div class="mh-group"><p class="mh-label" data-r>Leadership</p><ul class="mh-list">'+TEAM.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="insights" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Insights</span><h2 class="d3 split">From our resource <em>center.</em></h2></div><p data-r><a class="ul" href="'+WEB+'resource-center" target="_blank" rel="noopener">Browse the full resource center</a></p></div>'+
   '<ul class="rows">'+INS.map(function(n){return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Start with a <em>conversation.</em></h2>'+
   '<p class="sub" data-r>We work with each client one-on-one. Call the office or write to Johanna Lobdell, and we will find a time to talk about where you are and where you would like to be.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Fusco Financial Services, Inc.<br>2402 NE 8th Avenue<br>Wilton Manors, FL 33305</p><p class="dl" data-r>Monday to Friday, 9:00 am to 5:00 pm</p></div>'+
    '<div><span class="lab" data-r>Reach us</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p class="dl" data-r>Fax '+FAX+'</p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p data-r><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS relationship summary</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on the SEC’s adviser search</a></p><p class="dl" data-r>Check the background of a financial professional on FINRA’s <a class="ul" href="'+BC+'" target="_blank" rel="noopener">BrokerCheck</a>.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>2402 NE 8th Avenue<br>Wilton Manors, FL 33305</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email the office</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/philosophy">Philosophy</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/insights">Insights</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a><br><a class="ul" href="'+BC+'" target="_blank" rel="noopener">BrokerCheck</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:500;font-size:44px;letter-spacing:.06em">FUSCO FINANCIAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Fusco Financial Services, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={philosophy:"philosophy",approach:"story",services:"services",clients:"clients",team:"team",insights:"insights",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Fusco Financial Services — Independent wealth management, Wilton Manors, Florida",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
