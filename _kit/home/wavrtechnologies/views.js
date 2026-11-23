/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function useRows(list){return '<ul class="pfr pipe uses">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[1])+'</b></span><div class="pgm"><h3>'+esc(c[0])+'</h3></div>'+
   '<p>'+c[3]+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+p.sum+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function why(){var W=[
  ["Groundwater","Surface and groundwater depletion is accelerating."],
  ["Desalination","Effective, but centralized, energy-intensive and geographically limited."],
  ["Trucking","Water trucking is costly and unsustainable."],
  ["Existing AWGs","Existing atmospheric water systems typically require high humidity and extreme energy use."]];
  return '<div class="ev wy"><span class="lab kick" data-r>Why traditional solutions are not enough</span><div><dl>'+W.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>A new category is required: one that decentralizes water production, dramatically reduces energy requirements, and works where water is needed most.</p></div></div>'}
function caps(){var C=[
  ["Works in dry air","Down to 10% relative humidity, the kind of arid conditions where traditional atmospheric water generators cannot operate.",'<path d="M28 6C22 16 14 25 14 34a14 14 0 0 0 28 0c0-9-8-18-14-28z"/><path class="a" d="M8 50h40"/><path d="M8 50h7" class="a"/>'],
  ["Low energy","A low-energy process dramatically improves economics and sustainability.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M30 14l-8 16h9l-4 13 11-18h-9z"/>'],
  ["Built to scale","Designed from the start to scale up to industrial use cases, for reliability, not novelty.",'<rect x="8" y="34" width="12" height="14"/><rect x="22" y="22" width="12" height="26"/><rect class="a" x="36" y="10" width="12" height="38"/>'],
  ["High purity","High water purity, supporting high-spec water quality requirements.",'<path d="M28 8C22 18 16 26 16 34a12 12 0 0 0 24 0c0-8-6-16-12-26z"/><path class="a" d="M22 34l5 5 9-10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The company</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From wavrtechnologies.com and the National Science Foundation&#8217;s record of <a class="ul" href="'+NSF+'" target="_blank" rel="noopener">STTR Phase I award 2538242</a>.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Atmospheric water harvesting<span class="nomob"> · Las Vegas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A reliable source</span><span class="l">of <em>pure water.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>WAVR creates freshwater directly from the air, even in dry climates, delivering reliable, scalable and cost-effective water for industry, communities and agriculture. At scale. Onsite. Anywhere.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/contact">Discuss a deployment</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why WAVR</span>'+
   '<h2 class="txt" id="mani">The world needs a dependable supply of pure water that isn&#8217;t limited by geography, aging infrastructure, or depleting resources. <em>The atmosphere contains vast renewable water.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10%</span><p class="k">Relative humidity: WAVR&#8217;s process works in air this dry, where traditional atmospheric water generators cannot operate</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2024</span><p class="k">Founded as an NSF-funded UNLV startup, in one of the driest cities and states in the U.S.</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305K</span><p class="k">NSF STTR Phase I award, August 2026, for a modular, low-cost atmospheric water harvesting system</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Water, drawn <em>from dry air.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Capture</span><span>Release</span><span>Pure water</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Capture the moisture.</h2><p>An ultra high surface area air-to-desiccant interface captures ambient moisture passively, using chemistry: vapour is drawn out of the air into an ultra-saline solution.</p></article>'+
     '<article class="step"><h2>Release the water.</h2><p>A thermal process releases the captured water from the liquid desiccant as it passes through, with exceptionally low energy consumption.</p></article>'+
     '<article class="step"><h2>Pure water, in a loop.</h2><p>Freshwater leaves the system and the desiccant flows on in a continuous loop, ready to capture again. Water resilience, made practical.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="water" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Water stress</span><h2 class="d2 split">From a future risk to <em>a present constraint.</em></h2></div><p data-r>Droughts, shrinking aquifers, the ongoing thirst of industry amidst aging infrastructure, and climate volatility are converging into one reality: new sources of reliable freshwater are now a strategic necessity.</p></div>'+
   why()+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Inspired by nature, <em>built for industry.</em></h2></div><p data-r>Our scientists were fascinated by Australian tree frogs&#8217; ability to extract and retain moisture from extremely dry air. Our patent-pending system improves on nature&#8217;s architecture, with a liquid desiccant and a high surface area design that yields water at humidity levels where previous atmospheric water technologies fail.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Pure water, <em>within the fence.</em></h2></div><p data-r>Distributed, point-of-use water generation reduces risk, improves reliability and creates a flexible, adaptive supply. Just as distributed energy changed power resilience, decentralized water will redefine water security.</p></div>'+
   useRows(USES)+
   evid()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Science, engineering <em>and commercialization.</em></h2></div><p data-r>The WAVR team combines breakthrough scientific research with real-world engineering and commercialization expertise, working amid the realities of drought, rising temperatures and persistent water stress.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Deployments and partners</span>'+
   '<h2 class="big split">Let&#8217;s solve our <em>water challenges together.</em></h2>'+
   '<p class="sub" data-r>Together, let&#8217;s build the future of industrial water infrastructure. Tell us about your site and its water needs, or request technical information.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+CONTACT+'" target="_blank" rel="noopener">Discuss a deployment '+ARR+'</a><a class="btn" href="#/technology">Our technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>WAVR Technologies, Inc.<br>8400 W Sunset Rd, Suite 300<br>Las Vegas, Nevada 89113</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">wavrtechnologies.com/contact</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NSF STTR Phase I, <a class="ul" href="'+NSF+'" target="_blank" rel="noopener">award 2538242</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>8400 W Sunset Rd, Suite 300<br>Las Vegas, Nevada 89113</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/water">Water stress</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Uses</span>Medical · Industry · Agriculture · Communities</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Manrope\',sans-serif;font-weight:300;font-size:76px">WAVR TECHNOLOGIES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 WAVR Technologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",water:"water",technology:"technology",applications:"applications",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"WAVR Technologies — pure water, drawn from the air",x:"Home"};
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
