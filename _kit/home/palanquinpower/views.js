/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){return '<div class="pp">'+TEAM.map(function(p){
  return '<article><div class="ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy" style="object-position:'+p.pos+'"></div><div>'+
   '<h3 data-r>'+esc(p.name)+'</h3><p class="ttl" data-r>'+esc(p.title)+'</p><p class="bio" data-r>'+esc(p.bio)+'</p>'+
   '<div class="cr" data-r><a class="ul" href="'+p.li+'" target="_blank" rel="noopener">LinkedIn '+ARR+'</a></div></div></article>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Servers in series","Instead of feeding every server from its own full converter, the servers in a rack are connected in series across a high-voltage DC bus, so each one sees its usual input of about 50 V.",'<rect x="16" y="6" width="24" height="10"/><rect x="16" y="23" width="24" height="10"/><rect x="16" y="40" width="24" height="10"/><path class="a" d="M8 2v52"/><path d="M8 11h8M8 45h8"/>'],
  ["Only the difference","Small differential converters between neighbouring servers process only the mismatch between their loads, not the full power, which is what keeps losses so low.",'<rect x="10" y="10" width="20" height="14"/><rect x="10" y="32" width="20" height="14"/><rect class="f" x="38" y="22" width="10" height="12"/><path class="a" d="M30 17h13v5M30 39h13v-5"/>'],
  ["AC or high-voltage DC","Two interfaces to the main data center buses: an isolated three-phase AC power factor correction stage for legacy AC distribution, and fault-tolerant control for emerging 400/800 V DC.",'<path d="M4 20c4-8 8-8 12 0s8 8 12 0 8-8 12 0 8 8 12 0"/><path class="a" d="M4 40h48"/><path d="M4 46h48" stroke-dasharray="3 4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function results(){var R=[["Power","8+ kW delivered to a series stack of real servers"],["Efficiency","98.5+% power delivery, stable under dynamic server loads"],["Scale","The highest-power differential power processing system ever built, to our knowledge"],["Buses","From 400/800 V DC distribution down to the 50 V DC typical of server inputs"]];
  return '<div class="ev"><span class="lab kick" data-r>Phase I results</span><div><dl>'+R.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Experimental testbed built under NSF SBIR Phase I award 2528149; outcomes as reported to NSF in October 2026.</p></div></div>'}
function facts(){var F=[["200 billion kWh","Used by US data centers in 2022, roughly 4% of total domestic energy consumption."],["$2.9 billion","The estimated market for server power supplies."],["Several points","The gain in data center efficiency that large-scale deployment of the approach may bring."]];
  return '<div class="fx">'+F.map(function(f){return '<div class="fxi"><span class="ln2"></span><h3 data-r>'+f[0]+'</h3><p data-r>'+f[1]+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+BACK.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Rack-level power conversion<span class="nomob"> · Golden, Colorado</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><em>Ultra-efficient</em></span><span class="l">power conversion</span><span class="l">for data centers.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Palanquin Power develops novel power conversion architectures that cut the losses in rack-level power conversion. A spin-out from the University of Texas at Austin, supported by the National Renewable Energy Laboratory.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Data centers are enormous consumers of energy, and their demand for power is expected to grow rapidly. <em>Reducing losses in power conversion is a huge opportunity.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">99<sup>+%</sup></span><p class="k">Palanquin rack-level power conversion efficiency</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8<sup>+ kW</sup></span><p class="k">Delivered to real servers in the Phase I testbed, at 98.5+% efficiency</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1000<sup>TWh</sup></span><p class="k">Projected data center power consumption by 2030</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Process only <em>the difference.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Convert</span><span>Stack</span><span>Balance</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Every watt, converted.</h2><p>Inside a data center, power passes through a series of conversion steps on its way from the utility to the processors, each with its own losses. In a conventional rack, every server’s full power runs through its own converter.</p></article>'+
     '<article class="step"><h2>Servers in series.</h2><p>Palanquin connects the servers of a rack in series across a 400 or 800 V DC bus. The stack itself divides the voltage, so each server sees about 50 V without a full conversion stage.</p></article>'+
     '<article class="step"><h2>Only the difference.</h2><p>Small differential converters, each with its own local controller, balance neighbouring servers by processing only the mismatch between their loads, for high-efficiency power delivery.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Differential power processing, <em>at kilowatt scale.</em></h2></div><p data-r>The approach has been demonstrated at low power in academia, but never deployed in real-world, kilowatt-scale systems. Palanquin develops the converter hardware, the control schemes and the interfaces that bring it to the data center rack.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="results" data-theme="dark"><div class="wrap">'+
   results()+
  '</div></section>'+

  '<section class="sec dark" id="impact" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Impact</span><h2 class="d2 split">Less load on the grid, <em>more room for AI.</em></h2></div><p data-r>Data center growth is straining utilities’ ability to serve new facilities and existing customers, so demand-side efficiency can have an outsized impact, and may enable the deployment of power-hungry and economically critical AI.</p></div>'+
   facts()+
   backers()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Power electronics, <em>out of the lab.</em></h2></div><p data-r>An early-stage startup in Golden, Colorado, spun out of the University of Texas at Austin and supported by the National Renewable Energy Laboratory.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The train keeps <em>on rolling.</em></h2></div><p data-r>Grants, awards and programs since Palanquin joined NREL West Gate in 2024.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Get in <em>touch.</em></h2>'+
   '<p class="sub" data-r>Interested in learning more about ultra-efficient rack-level power conversion, a pilot, or a partnership? Write to Michael Solomentsev in Golden, Colorado.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>2300 Ford St., Unit A, Golden, CO 80401</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">michael@palanquinpower.com</a></p></div>'+
    '<div><span class="lab" data-r>Origins</span><p data-r>UT Austin spin-out</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Golden, Colorado</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">michael@palanquinpower.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/impact">Impact</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">What we build</span>Ultra-efficient power conversion for data centers</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:500;font-size:60px">PALANQUIN POWER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Palanquin Power Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",results:"results",impact:"impact",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Palanquin Power — ultra-efficient power conversion for data centers",x:"Home"};
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
