/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function sysRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var I=[
  '<rect x="10" y="14" width="36" height="28"/><path d="M10 22h36"/><path class="a" d="M20 34h16"/>',
  '<path d="M28 6l18 7v13c0 12-8 20-18 24C18 46 10 38 10 26V13z"/><path class="a" d="M20 27l6 6 11-12"/>',
  '<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16v24M34 20h-9a4 4 0 000 8h6a4 4 0 010 8h-10"/>',
  '<path d="M14 44C14 24 26 12 46 10c0 20-10 34-32 34z"/><path class="a" d="M14 44L34 24"/>'];
  return '<div class="caps c4">'+WHY.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+I[i]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function detail(){return '<div class="ev"><span class="lab kick" data-r>Good to Go!</span><div><dl>'+DETAIL.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Both GoPLF! and GoLIF! are certified for use in Europe (CE mark) and cleared for use by the US FDA 510(k).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Good to Go!<span class="nomob"> · Sterile spinal fusion kits</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Spine surgery,</span><span class="l">sterile and</span><span class="l"><em>Good to Go!</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GetSet Surgical makes sterile-packed, ready-to-use implants and instruments for spinal fusion. Every set arrives brand new, with 100% complete inventory guaranteed for every surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">The systems</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our vision</span>'+
   '<h2 class="txt" id="mani">A future where unnecessary surgical risk has been eliminated, and surgeons treat patients with <em>upgraded, ready-to-use instruments.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">Sterile and new: complete inventory guaranteed for every surgery</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Systems, GoPLF! and GoLIF!, CE-marked and cleared by the US FDA</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><p class="k">Fewer transportation requirements than traditional metal trays</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From the box to the field, <em>nothing to reprocess.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Arrive</span><span>Open</span><span>Operate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Arrives complete.</h2><p>Each Good to Go! set reaches the hospital sterile packed and ready for use, with every instrument and implant the surgery needs. Nothing to check, count or inspect.</p></article>'+
     '<article class="step"><h2>Opens without a touch.</h2><p>Transparent packs allow a visual check from the sterile field, and implants move from the non-sterile to the sterile field in a no-touch transfer.</p></article>'+
     '<article class="step"><h2>Brand new, every time.</h2><p>Instruments are new and sharp for every surgery and never reprocessed: no washing, no steam sterilising, and no heavy metal trays shipped back and forth.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="goodtogo" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Good to Go!</span><h2 class="d2 split">Why choose <em>Good to Go!</em></h2></div><p data-r>Unlike most of the spine market, GetSet’s products arrive in the hospital ready for use. The business model and the products are designed to create value throughout the whole surgical chain.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Sterile solutions for <em>stabilization and fusion.</em></h2></div><p data-r>Two complete systems, each with Good to Go! sterile implants and instruments and a streamlined, repeatable surgical technique, with brand-new instrumentation for every surgery.</p></div>'+
   '<figure class="trays" data-r><img src="trays.webp" alt="Two Good to Go! instrument trays" width="1388" height="428" loading="lazy"></figure>'+
   sysRows(SYS)+
   detail()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split">Swiss-made, <em>since 2016.</em></h2></div><p data-r>GetSet Surgical is a Swiss company, established in 2016 to disrupt the traditional spine market with a new approach to manufacturing and distributing sterile-packed implants and instrument sets for spinal surgery. Since 2026 it is part of the Demetra group.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Good to Go! <em>in the U.S. and Europe.</em></h2></div><p data-r>Clearances, first surgeries and the company’s place in the Demetra group, from the sources.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Get set for <em>surgery.</em></h2>'+
   '<p class="sub" data-r>For product information, surgeon enquiries or distribution of GetSet Surgical products, write to our team in Epalinges.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+CONTACT+'" target="_blank" rel="noopener">Contact GetSet '+ARR+'</a><a class="btn" href="'+DISTRIB+'" target="_blank" rel="noopener">Become a distributor</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>GetSet Surgical SA<br>Route de la Corniche 4<br>1066 Epalinges, Switzerland</p></div>'+
    '<div><span class="lab" data-r>Write to us</span><p data-r><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
    '<div><span class="lab" data-r>Distribution</span><p data-r><a class="ul" href="'+DISTRIB+'" target="_blank" rel="noopener">Distributor enquiries</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Route de la Corniche 4, 1066 Epalinges, Switzerland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+CONTACT+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/goodtogo">Good to Go!</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">About us</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Systems</span>GoPLF! · GoLIF!</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-style:italic;font-size:58px">GetSet Surgical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GetSet Surgical SA · Epalinges</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",goodtogo:"goodtogo",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GetSet Surgical — sterile, ready-to-use spinal fusion kits",x:"Home"};
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
