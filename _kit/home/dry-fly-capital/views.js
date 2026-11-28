/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){return '<li><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lower middle market private equity<span class="nomob"> · Denver, Colorado</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Casting vision.</span> <span class="l">Expanding legacies.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Operators partnering with owners who are moving into their next phase of life, and want the legacy of the company they built to carry on.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Dry Fly Capital</span>'+
   '<h2 class="txt" id="mani">We are operators who have built multiple companies, and we are intimately involved in every business we acquire.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10+</span><span class="k">Years of operating history: we look for legacy businesses</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2–10M</span><span class="k">Multi-year positive EBITDA</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Realized investments: Tri-Arc in 2021, Westland in 2023, Serpentix in 2026</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>The customer journey</span><p data-r>Modern sales and marketing strategies, focused on the customer.</p></div>'+
    '<div><span class="lab kick" data-r>Expansion</span><p data-r>Expansion plans for greater customer reach and brand recognition.</p></div>'+
    '<div><span class="lab kick" data-r>Technology</span><p data-r>Technology that brings operational efficiency and a competitive advantage.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our strategy</span><h2 class="d3">How we cast the line.</h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Brand</span><span>Digital</span><span>Sales</span><span>Systems</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Honor the brand.</h2><p>While honoring the legacy of each business, we update its brand and position it to stand out.</p></article>'+
     '<article class="step"><h2>Go digital.</h2><p>Digital marketing strategies increase brand awareness and generate demand.</p></article>'+
     '<article class="step"><h2><span class="nw">Build the</span> <span class="nw">sales team.</span></h2><p>We recruit, train and deploy a sales team and strategy to expand market share and reach.</p></article>'+
     '<article class="step"><h2><span class="nw">Fund the</span> <span class="nw">next stage.</span></h2><p>Infrastructure for the customer life cycle, and funding for production, new locations and talent.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split"><span class="nw">Legacy businesses,</span> <span class="nw">ready to grow.</span></h2></div><p data-r>We look for companies with a passionate team and a legacy worth carrying on, whose owners are ready for their next phase of life.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split"><span class="nw">Companies we</span> <span class="nw">have backed.</span></h2></div><p data-r>From cleaning machines and aluminum sign blanks to modular conveyors and manufactured-housing supplies.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Meet the partners</span><h2 class="d2 split"><span class="nw">Operators who have</span> <span class="nw">built companies.</span></h2></div><p data-r>Founders, operators and a corporate finance veteran who have built companies through organic growth and strategic acquisition.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Strategy</span><h2 class="d2 split"><span class="nw">Five ways</span> <span class="nw">we grow companies.</span></h2></div><p data-r>We love working with great people to widen the breadth of each company’s go-to-market strategy.</p></div>'+
   '<ul class="inv">'+STRAT.map(function(t){return '<li data-r><b>'+esc(t[0])+'</b><span>'+esc(t[1])+'</span></li>'}).join("")+'</ul>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners and advisers</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <span class="nw">your legacy.</span></h2>'+
   '<p class="sub" data-r>If you own a distribution, wholesale, manufacturing or service business with ten years behind it, we would be glad to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Dry Fly '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>5901 S Middlefield Rd., Suite 100<br>Littleton, CO 80123</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>5901 S Middlefield Rd., Suite 100<br>Littleton, CO 80123</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">About</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/investments">Portfolio</a><br><a class="ul" href="#/team">Partners</a><br><a class="ul" href="#/strategy">Strategy</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Open Sans\',sans-serif;font-weight:700;font-size:50px;letter-spacing:.12em">DRY FLY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Dry Fly Capital</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={strategy:"news",partners:"team",about:"about",approach:"story",focus:"criteria",criteria:"criteria",investments:"portfolio",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Dry Fly Capital — Lower middle market private equity, Denver",x:"Home"};
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
