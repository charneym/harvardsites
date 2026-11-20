/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+PILLARS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on rexortho.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function partners(){return '<div class="prt"><span class="lab kick" data-r>Partners</span><p class="inv" data-r>'+PARTNERS.map(function(n,i){return (i?'<b aria-hidden="true">·</b>':'')+'<span>'+esc(n)+'</span>'}).join("")+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Orthopaedic medtech<span class="nomob"> · Perth, Western Australia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A screw that grips</span><span class="l">poor-quality bone,</span><span class="l"><em>and still comes out.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The REX Screw is a removable, expandable orthopaedic screw: a platform technology to increase fixation strength and address unmet clinical needs in orthopaedics, starting with hip fractures.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
   '<span class="lab cap">REX Screw expanding in the femoral head · REX Ortho animation</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Lead indication · proximal femoral fractures</span>'+
   '<h2 class="txt" id="mani">In hip-fracture patients with poor-quality bone or severe fractures, a screw that loses its hold means revision surgery. <b class="w0">The REX Screw expands inside the bone to hold it, and can still be removed.</b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6–10%</span><span class="k">Cut-out occurrence in unstable hip fractures</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%</span><span class="k">Of patients don’t return to their presurgical mobility</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$100M</span><span class="k">Potential savings each year in the USA from a 0.1% reduction in cut-out</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Removable. <em>Expandable.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fracture</span><span>Screw</span><span>Expand</span><span>Remove</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The fracture.</h2><p>A proximal femoral fracture is fixed with a screw through the neck into the femoral head. In poor-quality bone, that screw can lose its fixation and cut out.</p></article>'+
     '<article class="step"><h2>The screw.</h2><p>The REX Screw goes in through the same route, fitting within the existing surgical workflow without increasing surgery time.</p></article>'+
     '<article class="step"><h2>The expansion.</h2><p>Once placed, the screw expands inside the femoral head. In testing, the F-REX Screw significantly improved fixation strength in a clinically relevant construct.</p></article>'+
     '<article class="step"><h2>The removal.</h2><p>The expansion reverses, so the screw can still come out. Safe removal was shown after medium-term in-vivo implantation in animal studies.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One mechanism, <em>a portfolio of screws.</em></h2></div><p data-r>REX Ortho is an orthopaedic development company building a portfolio of innovative products on the REX Screw technology.</p></div>'+
   prodRows()+
   '<p class="ack" data-r>Founded in 2017 after a team of surgeons and biomedical engineering researchers at Curtin University developed the removable, expandable screw to increase fixation strength, especially in osteoporotic bone.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Surgeons, engineers <em>and builders.</em></h2></div><p data-r>A team of researchers, engineers, surgeons and industry experts, who listen to and partner with surgeons to develop market-pull solutions.</p></div>'+
   team()+partners()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Curtin <em>to the clinic.</em></h2></div><p data-r>Grants and recognition for the REX Screw.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Shape the future <em>of orthopaedics.</em></h2>'+
   '<p class="sub" data-r>For partnerships, investment or careers, write to the REX Ortho team in Subiaco, Perth.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Perth office</span><p data-r><span class="bl">Suite 4, 245 Churchill Ave</span><span class="bl">Subiaco WA 6008</span></p></div>'+
    '<div><span class="lab" data-r>Mailing address</span><p data-r><span class="bl">PO Box 250</span><span class="bl">Subiaco WA 6904</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Perth office</span>Suite 4, 245 Churchill Ave<br>Subiaco WA 6008</div>'+
   '<div class="c"><span class="lab">Acknowledgement of Country</span><span class="aoc">REX Ortho recognises the First Peoples of this nation, and acknowledges the Whadjuk people of the Noongar nation as the traditional custodians of the land on which we work.</span></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Poppins\',system-ui,sans-serif;font-weight:300;font-size:58px;letter-spacing:.02em">REX Ortho</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 REX Ortho Pty Ltd</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"REX Ortho — the removable, expandable orthopaedic screw",x:"Home"};
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
