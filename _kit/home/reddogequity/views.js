/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRow(c){return '<li><div class="nm"><h3>'+esc(c.n)+'</h3><span class="lab">'+esc(c.s)+'</span></div><p>'+esc(c.d)+'</p><span class="lab yr">'+esc(c.y)+'</span>'+
  '<a class="go" href="'+c.u+'" target="_blank" rel="noopener" aria-label="'+esc(c.n)+' website">Visit '+ARR+'</a></li>'}
function team(){return '<div class="tm">'+TEAM.map(function(p){var ini=p.name.split(" ").map(function(x){return x[0]}).join("");
  return '<article><div class="ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"><span class="ini" aria-hidden="true">'+ini+'</span></div>'+
   '<h3>'+esc(p.name)+'</h3><p class="ttl">'+esc(p.title)+'</p><p class="sm">'+esc(p.bg)+'</p></article>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lower-middle-market private equity<span class="nomob"> · Atlanta, Georgia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">We seek to partner</span><span class="l">with <em>Red Dogs.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Red Dog Equity invests in lower-middle-market companies poised for strong growth, in partnership with driven, entrepreneurial business leaders.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What is a Red Dog?</span>'+
   '<h2 class="txt" id="mani">A driven, entrepreneurial force of nature, laser-focused on growing the business: relentless, with a never-ending will to win and <em>determined to persevere.</em></h2>'+
   '<p class="src" data-r>Our name comes from a passage in Tom Wolfe’s novel <i>A Man in Full</i>.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2–20M</span><span class="k">EBITDA of the lower-middle-market companies we typically back</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+ yrs</span><span class="k">Founders’ experience in private equity, corporate development, M&amp;A and operations</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100s</span><span class="k">Acquisitions completed by Red Dog Equity’s founders</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">Built span by span, <em>with the leader.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Leader</span><span>Partner</span><span>Grow</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Back a Red Dog.</h2><p>Every investment starts with a business leader who has real skin in the game: a substantial personal investment in the company they run.</p></article>'+
     '<article class="step"><h2>Support, don’t meddle.</h2><p>We bring support and resources without meddling in day-to-day operations: an active board with value-additive outside members, and generous, transparent equity incentives for management.</p></article>'+
     '<article class="step"><h2>Grow by acquisition.</h2><p>Growth by acquisition is central to how we create value. At ADL Final Mile, Sonic, Henry Industries, DMC Logistics and Xcel Delivery have joined the platform since 2024.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment strategy</span><h2 class="d2 split">What we look for in <em>a partnership.</em></h2></div><p data-r>We source lower-middle-market opportunities through the contacts our founders built over their careers, among executives, intermediaries and advisors. We look for these characteristics.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
   '<div class="indw"><span class="lab kick" data-r>Circle of competence</span><ul class="ind">'+IND.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul></div>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Companies we <em>build with.</em></h2></div><p data-r>Platforms led by Red Dogs, growing through add-on acquisitions in transportation, consumer, environmental and technical services.</p></div>'+
   '<span class="lab sub-h" data-r>Current investments</span><ul class="pfc">'+PF.map(pfRow).join("")+'</ul>'+
   '<span class="lab sub-h" data-r>Realized investment</span><ul class="pfc rl">'+RLZ.map(pfRow).join("")+'</ul>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Investors and operators, <em>in Atlanta.</em></h2></div><p data-r>We know all things are possible if we don’t care who gets the credit. We take our responsibilities as board members, managers and fiduciaries seriously. We do not take ourselves seriously.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>transactions.</em></h2></div><p data-r>Platform investments, add-ons and exits, as announced by Red Dog Equity and its portfolio companies.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, founders and intermediaries</span>'+
   '<h2 class="big split">Are you a <em>Red Dog?</em></h2>'+
   '<p class="sub" data-r>If you lead a growing company with $2–20 million of EBITDA and want a partner for an ambitious growth plan, we would be glad to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+TELH+'">Call '+TEL+' '+ARR+'</a><a class="btn" href="'+MAP+'" target="_blank" rel="noopener">Find our office</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Red Dog Equity LLC<br>4401 Northside Parkway, Suite 100<br>Atlanta, GA 30327</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Write to us</span><p data-r>Red Dog Equity takes enquiries through the contact form on <a class="ul" href="'+WEB+'contact" target="_blank" rel="noopener">reddogequity.com</a>.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>4401 Northside Parkway, Suite 100<br>Atlanta, GA 30327</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Industries</span>Transportation · Business · Consumer · Industrial · Environmental services</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 64" aria-hidden="true"><text x="320" y="52" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:600;font-size:62px;letter-spacing:.04em">RED DOG EQUITY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Red Dog Equity LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Red Dog Equity — Lower-middle-market private equity, Atlanta",x:"Home"};
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
