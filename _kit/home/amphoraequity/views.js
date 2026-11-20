/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function newsRows(list){return '<ul class="pfr nw">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab tg">'+esc(n[0])+'</span><h3>'+esc(n[2])+'</h3><p>'+esc(n[1])+' <span class="ar" aria-hidden="true">↗</span></p></a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){return '<li><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Packaged food &amp; beverage<span class="nomob"> · Control investments · Greenwich, Connecticut</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Well-established brands,</span><span class="l"><em>carried forward.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A private investor making control investments in North American packaged food and beverage businesses, and backing the management teams who run them.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Amphora</span>'+
   '<h2 class="txt" id="mani">We invest in well-established branded products and contract manufacturing businesses, and support their management teams to drive <em>real value creation.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><span class="k">Founded in Greenwich, Connecticut, by consumer products investors Nick DiCarlo and David West</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><span class="k">Brands at Violet Foods: Don Pepino, Sclafani, Fattoria Fresca and Muir Glen</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$5B+</span><span class="k">The combined U.S. tomato sauce and canned tomato market Violet Foods serves</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Branded products</span><p data-r>Well-established branded products across North American packaged food and beverage.</p></div>'+
    '<div><span class="lab kick" data-r>Contract manufacturing</span><p data-r>Contract manufacturing businesses, where operational excellence drives value.</p></div>'+
    '<div><span class="lab kick" data-r>Control, in partnership</span><p data-r>Control investments made alongside management, with innovative growth strategies built together.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we invest</span><h2 class="d3">Brands, plants, people and <em>growth.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Brands</span><span>Control</span><span>Operations</span><span>Growth</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Well-established brands.</h2><p>We look for branded products with real heritage, like Don Pepino and Sclafani, which Violet Foods acquired from B&amp;G Foods in May 2025.</p></article>'+
     '<article class="step"><h2>Control, with management.</h2><p>Amphora makes control investments, then supports the management team. Violet Foods is led by its president, Jim Mitchell.</p></article>'+
     '<article class="step"><h2>Operational excellence.</h2><p>Value is made on the plant floor: Violet Foods packs its fresh-pack tomato products at its own facility in Williamstown, New Jersey.</p></article>'+
     '<article class="step"><h2>Innovative growth.</h2><p>Complementary brands extend the platform. In January 2026 Violet Foods acquired Muir Glen, the organic tomato brand, from General Mills.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment focus</span><h2 class="d2 split">Food and beverage, <em>in focus.</em></h2></div><p data-r>Amphora is a private investor focused on one sector. We back established businesses and their management teams, and help them grow through operational excellence and innovative growth strategies.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">One platform, <em>four brands.</em></h2></div><p data-r>Violet Foods was formed by Amphora in May 2025 and has since brought together four tomato brands, from Northeast pizza-sauce favorites to a national organic label.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Consumer products investors, <em>in Greenwich.</em></h2></div><p data-r>Amphora was founded by Nick DiCarlo and David West, both veterans of consumer products investing.</p></div>'+
   team()+
   '<figure class="qt"><blockquote data-r>“We are grateful to General Mills for their collaboration throughout the transaction process. We are eager to build on the momentum that they created with this incredible brand.”</blockquote><figcaption class="lab" data-r>David West, Managing Partner, on Muir Glen</figcaption></figure>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the <em>record.</em></h2></div><p data-r>Announcements and coverage of Amphora and its portfolio.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, corporate sellers and intermediaries</span>'+
   '<h2 class="big split">Your brand’s next <em>chapter.</em></h2>'+
   '<p class="sub" data-r>If you own, are carving out or advise an established packaged food or beverage business in North America, we would be glad to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Amphora '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Amphora Equity Partners<br>411 W. Putnam Ave., Suite 320<br>Greenwich, CT 06830</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p data-r><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on the SEC’s adviser search</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>411 W. Putnam Ave., Suite 320<br>Greenwich, CT 06830</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:600;font-size:60px;letter-spacing:.08em">AMPHORA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Amphora Equity Partners</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Amphora Equity Partners — Packaged food and beverage, Greenwich, Connecticut",x:"Home"};
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
