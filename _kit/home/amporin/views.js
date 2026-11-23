/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+c[0]+'</b><i>'+c[3]+'</i></span><div class="pgm"><h3>'+c[1]+'</h3></div>'+
   '<p>'+c[2]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+c[4]+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+p.name+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+p.sum+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Target the pore itself","Rather than the misfolded oligomers that build them, Amporin&#8217;s oral small molecules are designed to block or eliminate the toxic pores that have already formed in cell and mitochondrial membranes.",'<ellipse cx="28" cy="28" rx="20" ry="8"/><ellipse class="a" cx="28" cy="28" rx="7" ry="3"/><path d="M8 28v6c0 4.4 9 8 20 8s20-3.6 20-8v-6"/>'],
  ["Rescue viable cells","Many affected cells stay viable but dysfunctional for long periods. Stopping the calcium leak lets mitochondria recover, so function may return in cells that are still there.",'<circle cx="28" cy="28" r="19"/><path class="a" d="M17 30c4-7 8 3 12-4s7 2 10-3"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["Rapid proof of concept","Recovery of cellular function can be measured directly with established biomarkers, creating the potential for fast proof of mechanism in preclinical and clinical studies.",'<path d="M6 46h44M6 46V8"/><path class="a" d="M8 42C16 40 20 30 26 24S40 12 50 10"/><circle class="f" cx="26" cy="24" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function fut(){return '<div class="bk"><span class="lab kick" data-r>Future programmes</span><p class="cr" data-r>'+FUT.map(function(f){return '<span>'+f+'</span>'}).join('<i>·</i>')+'</p></div>'}
function recog(){return '<div class="bk lt"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>Venture Kick, final stage</span><i>·</i><span>Kickfund</span><i>·</i><span>Venture Leaders Biotech 2025</span><i>·</i><span>3rd place, Venture 2022</span></p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+NEWSURL+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">amporin.com '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Swiss biotech<span class="nomob"> · Basel, founded 2024</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Repairing membranes,</span><span class="l"><em>rescuing mitochondria.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Amporin is developing the first class of oral small-molecule drugs designed to target the toxic membrane pores formed by misfolded protein oligomers, starting with Parkinson&#8217;s disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A new therapeutic paradigm</span>'+
   '<h2 class="txt" id="mani">Toxic pores link protein misfolding to cell death across many degenerative diseases. <em>Amporin is built to target the pores themselves.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Drug discovery programmes, in Parkinson&#8217;s, Alzheimer&#8217;s and Type 2 diabetes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">80+</span><p class="k">Years of collective R&amp;D leadership among the three co-founders</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2024</span><p class="k">Incorporated in Basel, Switzerland, as Amporin Pharmaceuticals AG</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">At the membrane</span><h2 class="d3">From a leaking membrane <em>to a working cell.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pores</span><span>Calcium</span><span>Blocked</span><span>Recovery</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Oligomers form pores.</h2><p>Misfolded protein oligomers, such as &#945;-synuclein in Parkinson&#8217;s, insert into cell and mitochondrial membranes and assemble into toxic pores.</p></article>'+
     '<article class="step"><h2>Calcium floods in.</h2><p>The pores create an ionic short circuit. Uncontrolled calcium influx overloads the mitochondria, driving oxidative stress, loss of homeostasis and progressive cell death.</p></article>'+
     '<article class="step"><h2>The pore is blocked.</h2><p>Amporin&#8217;s small molecules are designed to block or eliminate the toxic pores, restoring membrane integrity and stopping the calcium leak at its source.</p></article>'+
     '<article class="step"><h2>Mitochondria recover.</h2><p>Relieved of chronic calcium stress, mitochondria can restore energy production, and with it cellular homeostasis and normal function in cells that are still viable.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Repair the puncture, <em>not the road.</em></h2></div><p data-r>Clearing debris from the road or inflating your tyres will not help if you already have a puncture. Most approaches act upstream or downstream of the damage; Amporin is designed to repair the membrane damage caused by toxic pores, the point that links misfolding to degeneration.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One mechanism, <em>many diseases.</em></h2></div><p data-r>Three early drug discovery programmes built on Amporin&#8217;s proprietary pore-targeting platforms. The lead programme targets &#945;-synuclein pores in Parkinson&#8217;s disease; the Alzheimer&#8217;s and diabetes programmes are open for partnering or licensing.</p></div>'+
   pipeRows(PIPE)+
   fut()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades of <em>CNS drug discovery.</em></h2></div><p data-r>Founded in 2024 by Kelvin Stott, Herv&#233; Schaffhauser and Daniel Umbricht, with experience across Roche, Novartis, Merck, Lundbeck, biotech start-ups, consulting and venture capital.</p></div>'+
   team()+
   recog()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Amporin.</em></h2></div><p data-r>Company news, partnerships and appointments. The full archive, back to the company&#8217;s incorporation in 2024, is on amporin.com.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and researchers</span>'+
   '<h2 class="big split">Talk to <em>Amporin.</em></h2>'+
   '<p class="sub" data-r>We welcome enquiries from investors, pharmaceutical and biotech companies, CROs and academic researchers, and are seeking partners for our Alzheimer&#8217;s and Type 2 diabetes programmes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Tech Park Basel<br>Hochbergerstrasse 60C<br>4057 Basel, Switzerland</p></div>'+
    '<div><span class="lab" data-r>Registered office</span><p data-r>Oberwilerstrasse 54<br>4054 Basel, Switzerland</p></div>'+
    '<div><span class="lab" data-r>General enquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@amporin.com</a><br><a class="ul" href="'+TEL+'">+41 78 749 49 36</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Tech Park Basel<br>Basel, Switzerland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@amporin.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Company</span>Amporin Pharmaceuticals AG<br>UID CHE-337.200.500</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:64px">AMPORIN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Amporin Pharmaceuticals AG</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Amporin Pharmaceuticals — repairing membranes to rescue mitochondria",x:"Home"};
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
