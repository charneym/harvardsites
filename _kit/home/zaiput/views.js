/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages; Contact scrolls) ================= */
function lines(){return '<ul class="pfr">'+LINES.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Details</a></li>'}).join("")+'</ul>'}
function firsts(){return '<ol class="frs">'+FIRSTS.map(function(a){return '<li><span class="y">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></li>'}).join("")+'</ol>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Continuous flow equipment<span class="nomob"> · Waltham, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Separation,</span><span class="l">made simple</span><span class="l"><em>and continuous.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Zaiput Flow Technologies, an MIT spin-out, builds membrane separators, extraction platforms, reactors and crystallizers that scale from the bench to the plant, in batch or in flow.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the products '+ARR+'</a><a class="btn" href="#/contact">Talk to an engineer</a></div></div>'+
   '<p class="lab hcap" data-r>Pictured: Zaiput separators, production and development scale</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">Continuous equipment for <b class="w0">process intensification</b> in batch and flow chemistry: <em>scalable, modular and high performing.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3,000</span><span class="k">mL/min across three development-scale separator modules</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 MPa</span><span class="k">Inline pressure rating of the metal-shell separators, 290 psi</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">11</span><span class="k">Tanks in series inside one KryZr continuous crystallizer</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Independent of density</span><p data-r>Separation relies on wetting and surface forces, so it works with any liquid-liquid system, even liquids of the same density, and breaks emulsions.</p></div>'+
    '<div><span class="lab kick" data-r>Inherently safe</span><p data-r>No electricity, no headspace and minimal internal volume, so air-sensitive separations and rapid quenches become simple.</p></div>'+
    '<div><span class="lab kick" data-r>Lab to plant</span><p data-r>Well-characterised, plug-and-play devices that keep the same geometry from development to pilot and production scale.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a Zaiput separator works</span><h2 class="d3">Two liquids, parted <em>by a membrane.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stream</span><span>Wetting</span><span>Pressure</span><span>Outlets</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A biphasic stream.</h2><p>A mixed stream of two immiscible phases, an aqueous liquid and an organic one, or a gas and a liquid, flows into the separator straight from the reactor or extractor.</p></article>'+
     '<article class="step"><h2>One phase wets the pores.</h2><p>With a hydrophobic membrane in place, the organic phase has an affinity for it and fills the pores. The aqueous phase is repelled and stays on the retentate side.</p></article>'+
     '<article class="step"><h2>Just enough pressure.</h2><p>Zaiput’s patented internal pressure controller holds a constant differential across the membrane: enough to push the wetting phase through, never enough to force the other phase into the pores.</p></article>'+
     '<article class="step"><h2>Two clean outlets.</h2><p>Organic leaves through the permeate, aqueous through the retentate, continuously. Because it runs on surface forces, it worked as well on the International Space Station as on Earth.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the fume hood <em>to the plant.</em></h2></div><p data-r>Membrane-based separators, multistage extraction, reactors for hydrogenation and other heterogeneous catalysis, crystallizers and back pressure regulators, machined in chemically resistant materials.</p></div>'+
   lines()+
  '</div></section>'+

  '<section class="sec dark" id="firsts" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Milestones</span><h2 class="d2 split">The sky is <em>not the limit.</em></h2></div><p data-r>From the Jensen group at MIT to the International Space Station, and federal funding for the next steps in continuous pharmaceutical manufacturing.</p></div>'+
   firsts()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers of <em>continuous flow.</em></h2></div><p data-r>Founded by Dr. Andrea Adamo, the developer of Zaiput’s core technologies, and advised by leaders in flow chemistry and technology strategy.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">On the road, <em>and in the lab.</em></h2></div><p data-r>New funding, conferences across Europe and Asia, and a grant that puts a KryZr crystallizer in academic labs.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Chemists and process engineers</span>'+
   '<h2 class="big split">Bring us your <em>hardest separation.</em></h2>'+
   '<p class="sub" data-r>Product questions, quotes, membrane selection and separation or extraction optimisation services: the Zaiput team answers directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratories and offices</span><p data-r>Zaiput Flow Technologies<br>101a First Ave, Suite 100<br>Waltham, MA 02451</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SUP+'">'+SUP+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratories and offices</span>101a First Ave, Suite 100<br>Waltham, Massachusetts 02451</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+INFO+'">'+INFO+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://www.linkedin.com/company/zaiput-flow-technologies" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://www.zaiput.com/literature-with-zaiput/" target="_blank" rel="noopener">Literature</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Inter Tight\',Arial,sans-serif;font-style:italic;font-weight:700;font-size:60px;letter-spacing:.02em">Zaiput</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Zaiput Flow Technologies</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",firsts:"firsts",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Zaiput Flow Technologies — continuous separation, extraction and reactors, Waltham, Massachusetts",x:"Home"};
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
