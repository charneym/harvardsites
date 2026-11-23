/* ================= VIEWS (home only: Technology / Research / Team open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(A,cls){return '<ul class="pfr'+(cls?' '+cls:'')+'">'+A.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'')+'</li>'}).join("")+'</ul>'}
var ICO={drop:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 6C24.5 12.5 28.5 17 28.5 22.5a8.5 8.5 0 0 1-17 0C11.5 17 15.5 12.5 20 6Z"/><path d="M8 34h24"/></svg>',
 pil:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 33h28"/><path d="M10 33V14M17 33V14M24 33V14M31 33V14"/><path d="M8.5 14h3M15.5 14h3M22.5 14h3M29.5 14h3"/></svg>',
 cost:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M7 31h26"/><path d="M11 31V23M18 31V18M25 31V13"/><path d="M9 11l9 4 13-8"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wound-care medtech<span class="nomob"> · Ramsey, New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Self-powered</span><span class="l">stimulation, built</span><span class="l"><em>into the dressing.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>UltraMEND is developing micropillar scaffolds that generate their own low-level electrical current when activated by specific fluids, delivering stimulation right at the surface, with no external power or equipment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>A micropillar scaffold on its thin polymer base, rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our focus</span>'+
   '<h2 class="txt" id="mani">Chronic wounds, such as diabetic foot ulcers, need advanced care that costs less. <em>We are building the therapy into the dressing itself: a self-contained, low-intensity direct-current dressing.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305<small>K</small></span><p class="k">NSF SBIR Phase I award for the micropillar scaffold, starting October 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24/7</span><p class="k">Continuous therapy, self-contained in the dressing: the company’s aim</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12<small>mo</small></span><p class="k">The NSF Phase I project, October 2026 to September 2027</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.drop+'</span><span class="lab kick" data-r>Activated by fluid</span><p data-r>The current starts when specific fluids reach the scaffold: no battery to charge, no device to wear, no wires to the bedside.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.pil+'</span><span class="lab kick" data-r>Structure and signal</span><p data-r>One material does both jobs: a three-dimensional scaffold, and the self-powered electrical signalling that runs through it.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.cost+'</span><span class="lab kick" data-r>Cost-effective care</span><p data-r>Aimed at the gap between traditional wound healing and more expensive advanced wound-care therapies.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the scaffold works</span><h2 class="d3">From polymer pillar <em>to bioelectric signal.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Mould</span><span>Load</span><span>Wet</span><span>Scale</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Mould the pillars.</h2><p>Tall, slender polymer micropillars are formed on a thin base by thermocompression moulding, and checked for reproducible geometry.</p></article>'+
     '<article class="step"><h2>Load the metals.</h2><p>Nanoparticles of dissimilar metals are mixed into the polymer above the percolation threshold: enough to conduct, without weakening the pillars.</p></article>'+
     '<article class="step"><h2>Add fluid.</h2><p>When specific fluids reach the array, neighbouring pillars of different metals form a galvanic pair, and a low-level current flows between them.</p></article>'+
     '<article class="step"><h2>Scale the array.</h2><p>Current from single pillar pairs scales across arrays, delivering stimulation directly at the surface, with no external power.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A scaffold that <em>makes its own current.</em></h2></div><p data-r>A fundamental advance in electroactive biomaterial design: dissimilar metallic nanoparticles built into high-aspect-ratio polymer micropillars, so that the structure itself becomes a galvanic power source when it meets fluid.</p></div>'+
   rows(PROPS)+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Backed by the <em>National Science Foundation.</em></h2></div><p data-r>SBIR Phase I award 2604948, “3D Micropillar Scaffolds for Self-Powered Bioelectric Stimulation”: $305,000 from NSF’s Directorate for Technology, Innovation and Partnerships (Biomedical Engineering), October 2026 to September 2027.</p></div>'+
   rows(PROG,'pgr')+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Medical devices <em>meet nanofabrication.</em></h2></div><p data-r>UltraMEND pairs start-up medical device commercialisation with deep engineering experience in nanofabrication, MEMS and microfluidics.</p></div>'+
   rows(TEAM)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Let’s talk about <em>self-powered wound care.</em></h2>'+
   '<p class="sub" data-r>Write to us about the micropillar scaffold, research collaborations, or partnering with and investing in UltraMEND.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to UltraMEND '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>25 Highwood Road<br>Ramsey, NJ 07446</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Chief Executive</span><p data-r>John Phillips</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>25 Highwood Road<br>Ramsey, New Jersey 07446</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Self-powered bioelectric<br>scaffolds for wound care</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Archivo Black\',system-ui,sans-serif;font-weight:400;font-size:76px;letter-spacing:-1px"><tspan fill="#eef4f7">UltraMEND</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 UltraMEND, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",research:"research",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"UltraMEND — self-powered bioelectric wound care",x:"Home"};
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
