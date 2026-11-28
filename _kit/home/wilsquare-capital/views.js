/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfGrid(list){return '<ul class="pfg">'+list.map(function(n){return '<li data-r><span>'+esc(n[0])+'</span><small>'+esc(n[1])+'</small></li>'}).join("")+'</ul>'}
function newsRows(list){return '<ul class="pfr nw">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab tg">'+esc(n[0])+'</span><h3>'+esc(n[2])+'</h3><p>'+esc(n[1])+' <span class="ar" aria-hidden="true">↗</span></p></a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){return '<li><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lower-middle market private equity<span class="nomob"> · St. Louis, Missouri</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Building businesses.</span> <span class="l">Preserving legacies.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A St. Louis private equity firm acquiring and growing lower-middle market businesses in the Midwest and Southern U.S., in business services, niche manufacturing, distribution and technology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A Midwestern firm with Midwestern values</span>'+
   '<h2 class="txt" id="mani">We are a heartland business ourselves, and we believe the currency of success is accountability and dependability.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><span class="k">Years of experience each partner brings, in private equity and in business ownership</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">17</span><span class="k">Current investments, from Minneapolis to Tuscaloosa</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">≥10%</span><span class="k">EBITDA margins, on $3–10 million of EBITDA</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Built over generations</span><p data-r>Businesses built over decades, often generations, that are the backbone of their local communities.</p></div>'+
    '<div><span class="lab kick" data-r>Squared around two principles</span><p data-r>Accountability and dependability, ingrained in our day-to-day work for our partners.</p></div>'+
    '<div><span class="lab kick" data-r>So legacies live on</span><p data-r>A track record of guiding lower-middle market companies through growth, transitions and change.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">A platform, squared</span><h2 class="d3">Four distributors, one square.</h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">2023</span><span>2024</span><span>2025</span><span>2026</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Automotive Color</span> <span class="nw">&amp; Supply.</span></h2><p>In 2023 WILsquare acquired ACS, a regional distributor of automotive and industrial paint and supplies in Indiana and Illinois.</p></article>'+
     '<article class="step"><h2>Paint Works.</h2><p>In 2024 Paint Works of Tyler, Texas joined, extending the platform into the South.</p></article>'+
     '<article class="step"><h2>Smetzer Paint &amp; Supply.</h2><p>In 2025 Smetzer, of Milan, Ohio, expanded the footprint.</p></article>'+
     '<article class="step"><h2>Ohio Paint Supply.</h2><p>In 2026 the fourth acquisition: ACS now serves Illinois, Indiana, Ohio, Arkansas, Texas and Louisiana.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Focus</span><h2 class="d2 split"><span class="nw">What we look</span> <span class="nw">for in a partner.</span></h2></div><p data-r>The attributes of businesses we consider for partnership, and the growth opportunities we like to pursue with them.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split"><span class="nw">Where we are</span> <span class="nw">invested today.</span></h2></div><p data-r>Space efficiency, heating, quilting and crafting brands, a digital marketing platform and an automotive paint distribution platform.</p></div>'+
   pfGrid(PF)+
   '<p class="fn" data-r>Exited investments: '+EXIT.map(esc).join("; ")+'.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">The people</span> <span class="nw">of WILsquare.</span></h2></div><p data-r>Private equity and operating executives, dedicating financial capital and operating experience to lower-middle market companies.</p></div>'+
   team()+
   '<figure class="qt"><blockquote data-r>“We continue to see meaningful opportunities to partner with distributors that share ACS’s service-first approach and commitment to customer relationships.”</blockquote><figcaption class="lab" data-r>Jack Randazzo, Managing Director, on Ohio Paint Supply</figcaption></figure>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Recent deals</span> <span class="nw">and news.</span></h2></div><p data-r>GRO Marketing was the fifth acquisition in the digital marketing platform, after OuterBox, Trinity Insight, TopSpot and Accelerated Digital Media.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, management teams and intermediaries</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <span class="nw">your business.</span></h2>'+
   '<p class="sub" data-r>If you own or advise a Midwest or Southern business with $3–10 million of EBITDA, or an add-on of any size, we would be glad to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Bill Willhite '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>WILsquare Capital LLC<br>Three CityPlace Drive, Suite 1090<br>Saint Louis, MO 63141</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Bill Willhite</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>General</span><p data-r><a class="ul" href="mailto:'+INFO+'">'+INFO+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Three CityPlace Drive, Suite 1090<br>Saint Louis, MO 63141</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+INFO+'">Email</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">About</a><br><a class="ul" href="#/criteria">Focus</a><br><a class="ul" href="#/investments">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:Montserrat,sans-serif;font-weight:300;font-size:56px;letter-spacing:.06em">WILsquare</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 WILsquare Capital LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",focus:"criteria",criteria:"criteria",investments:"portfolio",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"WILsquare Capital — Lower-middle market private equity, St. Louis",x:"Home"};
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
