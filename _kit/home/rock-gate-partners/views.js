/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function newsRows(list){return '<ul class="pfr nw">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab tg">'+esc(n[0])+'</span><h3>'+esc(n[2])+'</h3><p>'+esc(n[1])+' <span class="ar" aria-hidden="true">↗</span></p></a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){return '<li><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lower middle market private equity<span class="nomob"> · Chicago, Illinois · since 2006</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">We build</span> <span class="l">great companies.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Rock Gate Partners invests in growing lower middle market companies that are mind share leaders in their niche markets, and builds them for the long term.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Mind share leaders</span>'+
   '<h2 class="txt" id="mani">We back companies with high brand awareness in their markets, often punching above their weight relative to their revenue.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2006</span><span class="k">Founded in Chicago, investing the capital of its principals, advisors and partners</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3–15M</span><span class="k">Sustainable EBITDA, with margins above 10%</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1957</span><span class="k">The year Blast Deflectors was founded; Rock Gate acquired it in October 2026</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>No fund cycle</span><p data-r>We are not under pressure to put money to work or to generate short-term gains, and we don’t manage investment horizons around fund cycles.</p></div>'+
    '<div><span class="lab kick" data-r>Execution</span><p data-r>We believe value is created through execution, not PowerPoint presentations.</p></div>'+
    '<div><span class="lab kick" data-r>Seller legacies</span><p data-r>We protect seller legacies by living up to our commitments, and take seriously our responsibility to employees and their families.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our mission</span><h2 class="d3">Built to last, stone by stone.</h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">People</span><span>Product</span><span>Process</span><span>Technology</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Investment in people.</h2><p>We partner with talented, driven managers and owners. Each year, well-performing team members and their families should be better off for their association with a Rock Gate company.</p></article>'+
     '<article class="step"><h2>Investment in product.</h2><p>Mind share leaders win on proprietary design, engineering and product innovation, not on price alone.</p></article>'+
     '<article class="step"><h2>Investment in process.</h2><p>Continuous improvement, from capacity expansion to better ways of working, is how value gets built.</p></article>'+
     '<article class="step"><h2>Investment in technology.</h2><p>The last stone in the arch: technology that lets a company grow to its true potential, sustainably.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split"><span class="nw">Leaders in</span> <span class="nw">niche markets.</span></h2></div><p data-r>Companies uniquely positioned relative to their competition, with a competitively advantaged cost structure and an entrepreneurial team that is passionate about the business.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform investments</span><h2 class="d2 split"><span class="nw">Companies we</span> <span class="nw">have built.</span></h2></div><p data-r>From jet blast deflectors in Reno to highway signage in Birmingham: niche leaders, built with their management teams.</p></div>'+
   pfRows(PF)+
   '<p class="fn" data-r>Non-control, minority investments: '+MIN.map(esc).join(", ")+'.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">Our senior</span> <span class="nw">investment team.</span></h2></div><p data-r>Principals with the skills to get in the trenches with management, supported by industry and functional specialists and an advisory board.</p></div>'+
   team()+
   '<figure class="qt"><blockquote data-r>“Looking back, I am most proud of Rock Gate’s efforts to maintain this culture while pursuing their growth objectives. All commitments made were met and friendships remain today.”</blockquote><figcaption class="lab" data-r>Henry A. Parker, former founder and CEO of Walpar</figcaption></figure>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Recent deals</span> <span class="nw">and news.</span></h2></div><p data-r>In October 2026 Rock Gate acquired Blast Deflectors, with Rock Gate providing the equity and mezzanine financing.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, management teams and intermediaries</span>'+
   '<h2 class="big split"><span class="nw">Let’s talk about</span> <span class="nw">your company.</span></h2>'+
   '<p class="sub" data-r>We are a good fit for owners and management teams who want long-term stability, with liquidity on a horizon that suits them.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Ken Ali '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Rock Gate Partners, LLC<br>35 East Wacker Drive, Suite 3300<br>Chicago, IL 60601</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Kenneth L. Ali</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13122830631">(312) 283-0631</a></p></div>'+
    '<div><span class="lab" data-r>Carl A. Stickel</span><p data-r><a class="ul" href="mailto:cstickel@rockgatepartners.com">cstickel@rockgatepartners.com</a><br><a class="ul" href="tel:+13122830636">(312) 283-0636</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>35 East Wacker Drive, Suite 3300<br>Chicago, IL 60601</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Why Rock Gate</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/investments">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:600;font-size:58px;letter-spacing:.08em">ROCK GATE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Rock Gate Partners, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",investments:"portfolio",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Rock Gate Partners — Lower middle market private equity, Chicago",x:"Home"};
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
