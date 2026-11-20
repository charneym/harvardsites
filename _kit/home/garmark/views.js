/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function exLine(){return '<div class="exd"><span class="lab kick" data-r>Exited investments</span><p class="exl" data-r>'+EX.map(function(n){return '<span>'+esc(n)+'</span>'}).join(" ")+'</p></div>'}
function mhGroup(lab,list){return '<div class="mh-group"><p class="mh-label" data-r>'+lab+'</p><ul class="mh-list">'+list.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}
function team(){return '<section class="mh">'+mhGroup("Partners",TEAM.slice(0,4))+mhGroup("Investment team",TEAM.slice(4,6).concat([TEAM[7]]))+mhGroup("Finance and administration",[TEAM[6],TEAM[8]])+'</section>'}
function newsRows(list){return '<ul class="rows">'+list.map(function(n){return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><time class="lab" datetime="'+n.d+'">'+fd(n.d)+'</time><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mezzanine debt · Structured equity<span class="nomob"> · Stamford, Connecticut · Since 1997</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Flexible capital,</span><span class="l">structured for</span><span class="l"><em>each opportunity.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GarMark Partners provides mezzanine debt and structured equity capital to middle-market companies, across a wide range of transaction types, structures and industries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">Investment criteria '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About GarMark</span>'+
   '<h2 class="txt" id="mani">One of the longest-tenured managers of private junior debt and structured equity capital in <em>North America.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1997</span><span class="k">Founded; Fund I closed in 1998</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.4B</span><span class="k">Approximate capital invested</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90+</span><span class="k">Transactions completed</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Across the capital structure</span><p data-r>Investments range from debt to common equity co-investments, with an emphasis on mezzanine debt and structured equity.</p></div>'+
    '<div><span class="lab kick" data-r>Across situations</span><p data-r>Buyouts, recapitalizations, growth financings, restructurings and turnarounds, in sponsored and non-sponsored transactions.</p></div>'+
    '<div><span class="lab kick" data-r>Alongside our partners</span><p data-r>We invest alongside management teams, entrepreneurs, fundless sponsors and equity sponsors, and support their long-term objectives.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Investment approach</span><h2 class="d3">The right solution for each <em>opportunity.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Company</span><span>Partners</span><span>Structure</span><span>Growth</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A durable business.</h2><p>We back middle-market companies with a sustainable value proposition and a defensible market position, typically with $3 million to $25 million or more of annual EBITDA.</p></article>'+
     '<article class="step"><h2>Strong partners.</h2><p>We maintain close relationships with management teams and financial partners, investing alongside entrepreneurs, fundless sponsors and equity sponsors.</p></article>'+
     '<article class="step"><h2>A tailored structure.</h2><p>We bring flexibility in structuring securities: $5 million to $30 million or more, from senior debt to common equity, with an emphasis on mezzanine debt and structured equity.</p></article>'+
     '<article class="step"><h2>Room to grow.</h2><p>We help complete add-on acquisitions, growth financings and exit strategies, drawing on a network of operating executives to add value.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Customized for <em>each transaction.</em></h2></div><p data-r>We invest in a wide range of industries and customize every investment around a few general parameters.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Representative investments</span><h2 class="d2 split">Capital at work across <em>the middle market.</em></h2></div><p data-r>Current investments across industrial, business services, consumer, health and wellness, and building and forest products companies.</p></div>'+
   pfRows(PF)+exLine()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our people</span><h2 class="d2 split">Experience across the <em>capital structure.</em></h2></div><p data-r>Our investment professionals have deep expertise investing across the capital structure and in buyouts, growth capital, restructurings and turnarounds.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>activity.</em></h2></div><p data-r>September 2025: GarMark Partners and Energy Impact Partners provided financing and support for Hudson Glade’s acquisition of ComNet Communications, a nationwide low-voltage infrastructure services provider.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Management teams, sponsors and intermediaries</span>'+
   '<h2 class="big split">Let’s structure the <em>right solution.</em></h2>'+
   '<p class="sub" data-r>If you are financing a buyout, recapitalization, growth plan or turnaround for a middle-market company, we would be glad to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email GarMark '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Stamford</span><p data-r>One Landmark Square, Suite 400<br>Stamford, CT 06901<br><a class="ul" href="'+TELH+'">'+TEL+'</a></p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Vero Beach</span><p data-r>2770 Indian River Blvd., Suite 502<br>Vero Beach, FL 32960<br><a class="ul" href="'+TELH2+'">'+TEL2+'</a></p><a class="ul lk" href="'+MAP2+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email and investors</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+PORTAL+'" target="_blank" rel="noopener">Investor portal</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Stamford</span>One Landmark Square, Suite 400<br>Stamford, CT 06901</div>'+
   '<div class="c"><span class="lab">Vero Beach</span>2770 Indian River Blvd., Suite 502<br>Vero Beach, FL 32960</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Investments</a><br><a class="ul" href="#/team">People</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="'+PORTAL+'" target="_blank" rel="noopener">Investor portal</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:500;font-size:62px;letter-spacing:-.01em">GarMark Partners</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GarMark Advisors L.L.C.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",investments:"portfolio",team:"team",people:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GarMark Partners — Mezzanine debt and structured equity, Stamford, Connecticut",x:"Home"};
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
