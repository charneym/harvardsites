/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[6]?' class="dim"':'')+'><span class="lab tg"><b'+(c[6]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[5])+'</p><span class="lab lk">'+esc(c[4])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Drawn into early decay","An early lesion keeps its surface but opens micropores, and its interior carries a negative charge. GreenMark’s particles are small and positively charged, so they are pulled into those microchannels and adhere inside.",'<path d="M6 16h44"/><path d="M14 16v30M24 16v30M34 16v30M44 16v30"/><circle class="f" cx="29" cy="30" r="4"/><path class="a" d="M29 4v8M25 8h8"/>'],
  ["Made from food-grade starch","Starch was chosen because it is non-toxic and readily degraded by the amylase enzymes in saliva. The particles are fully bio-resorbed; no special tools are needed.",'<circle cx="28" cy="28" r="17"/><circle cx="22" cy="24" r="3"/><circle cx="33" cy="22" r="2.4"/><circle cx="31" cy="34" r="3.4"/><circle cx="21" cy="34" r="2"/><path class="a" d="M8 48l8-8M48 48l-8-8"/>'],
  ["Mineral where it is needed","Loaded with calcium and phosphate ions, the building blocks of hydroxyapatite, the particles rebuild mineral inside the tooth. Fluoride can be included to form more acid-resistant fluorapatite.",'<path d="M28 8l17 10v20L28 48 11 38V18z"/><path class="a" d="M28 8v40M11 18l34 20M45 18L11 38"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>National Institutes of Health (NIDCR)</span><i>·</i><span>University of Michigan</span><i>·</i><span>US Patents 10,987,434 · 11,666,515 · 12,023,388</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Science and<br>recognition</span><div><dl>'+
  [["Detection","Functionalized starch particles developed with collaborators at the University of Michigan were first shown to selectively detect dental caries in vitro, in Advanced Healthcare Materials"],
   ["In the clinic","LumiCare™ marks incipient caries by glowing under a standard dental curing lamp, viewed through orange glasses, a paddle or loupe inserts"],
   ["Scientific honors","Best scientific poster at the 9th annual American Academy of Cariology conference in 2025: “Targeted Biopolymer Particles: A System for No-Drill Dentistry”"],
   ["Research award","Dr. Steven Bloembergen received the 2025 Shils Entrepreneurial Fund “Excellence in Research” Award at the NYU College of Dentistry"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From greenmark.bio and GreenMark releases of 2025 and 2026. LumiVision™ is in development and not available for sale.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Dental biotech<span class="nomob"> · Since 2016</span> · East Lansing, Michigan</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Targeted minerals</span><span class="l">that rebuild enamel</span><span class="l"><em>from the inside out.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GreenMark’s patented starch particles slip into the micropores of early tooth decay, to light it up for the dentist or to deliver the calcium and phosphate that restore the mineral within.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/products">Products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Every cavity begins as a small spot of lost mineral. GreenMark’s mission is to enable oral healthcare professionals to <em>preserve teeth through early diagnosis and treatment.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">95%+</span><p class="k">Of Americans are affected by caries over their lifetimes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">74%</span><p class="k">Of Americans may be affected by dental sensitivity</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">NIH grants awarded to GreenMark in 2025</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How CrystLCare™ works</span><h2 class="d3">Repair that starts <em>beneath the surface.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Release</span><span>Rebuild</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Particles find the lesion.</h2><p>In early decay the enamel surface stays intact while acid opens micropores beneath it. The small, positively charged starch particles are drawn into those pores by the negative charge inside the lesion.</p></article>'+
     '<article class="step"><h2>Saliva releases the minerals.</h2><p>Natural amylase enzymes in saliva break down the starch, so each particle releases its load of calcium and phosphate ions, and fluoride where it is included, deep in the subsurface.</p></article>'+
     '<article class="step"><h2>New crystals form.</h2><p>The ions form hydroxyapatite, the mineral that makes enamel the hardest surface in the body, filling the porous lesion from within and occluding the exposed channels behind sensitivity.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One particle platform, <em>to find and to repair.</em></h2></div><p data-r>GreenMark’s bioresorbable starch particles target tooth porosities. Tagged with a fluorescent dye they reveal early lesions; loaded with minerals they treat them, without drilling.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Detect early, <em>treat without the drill.</em></h2></div><p data-r>Dissolvable CrystLCare™ strips for sensitivity and early caries, the LumiCare™ rinse that makes early lesions visible, and a camera to read them.</p></div>'+
   prodRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Biomaterials builders <em>and clinicians.</em></h2></div><p data-r>Founded in Michigan in 2016 by a biomaterials entrepreneur whose first company built starch nanoparticle production at industrial scale, with dentists and physicians in the lead.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH/NIDCR SBIR awards, including $300,000 in late 2025, and Translational Resource Center funding of up to $297,615 more in 2026.</p></div>'+
    '<div><span class="lab kick" data-r>Collaboration</span><p data-r>Developed with the University of Michigan; Prof. Brian Clarkson of the U-M School of Dentistry is co-inventor and Co-PI.</p></div>'+
    '<div><span class="lab kick" data-r>Two sites</span><p data-r>Offices in East Lansing and a laboratory on the University of Michigan’s North Campus Research Complex in Ann Arbor.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, awards <em>and the science.</em></h2></div><p data-r>The latest from GreenMark, from NIH support to honors for its research in cariology.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Dentists, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>GreenMark.</em></h2>'+
   '<p class="sub" data-r>For samples, distribution, partnering or investment, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email GreenMark '+ARR+'</a><a class="btn" href="#/products">The products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>325 E. Grand River Avenue, Suite 314<br>East Lansing, MI 48823</p></div>'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>1600 Huron Parkway, Building 520<br>Ann Arbor, MI 48109</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18018990710">(801) 899-0710</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>325 E. Grand River Avenue, Suite 314<br>East Lansing, MI 48823</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18018990710">(801) 899-0710</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>CrystLCare™ · LumiCare™ · LumiKids™</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Cinzel\',Georgia,serif;font-weight:500;font-size:62px">GreenMark</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GreenMark Biomedical Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GreenMark Biomedical — targeted minerals for early caries and dental sensitivity",x:"Home"};
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
