/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Specs '+ARR+'</a></li>'}).join("")+'</ul>'}
/* coatings (filaroptomaterials.com > Optical coating; coating specs on the Alexandrite and Nd:YAG pages) */
var COAT=[
 ["Anti-reflection","AR and BBAR","R below 0.15% at 1064 nm on Nd:YAG, a single MgF2 layer below 0.25% at 755 nm on alexandrite, and broadband AR from 710 to 830 nm."],
 ["High reflection","Mirrors and rod ends","HR above 99.8% at 755 nm and above 99.9% at 1064 nm, for resonator mirrors and rod ends, at angles of incidence from 0° to 45°."],
 ["Partial reflection","Output couplers","PR coatings and output couplers, for example 81.5% at 755 nm, and custom coatings for lateral or end-pumping designs."]];
function coat(){return '<div class="caps nwc tst">'+COAT.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var STOCK=["Alexandrite rods","Doped YAG rods","Slabs","Resonator mirrors","Filters","Lenses","Windows","Samarium and ceramic cavities"];
function stock(){return '<div class="bk cnd"><span class="lab kick" data-r>In stock, ready in 10 working days</span><p class="cr" data-r>'+STOCK.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* repair (filaroptomaterials.com > Optical repairing) */
var FIX=[
 ["Laser rods","Nd:YAG to ruby","Nd:YAG, CTH:YAG, Er:YAG, Yb:YAG, alexandrite and ruby rods reworked and recoated: an Nd:YAG rod 6.35 × 115 mm, AR/AR at 1064 nm, starts from €280 plus tax."],
 ["Cavities and heads","Assessment and refurbishment","Laser cavities and heads assessed and refurbished, with the metal holders glued back onto the rod ends after repair."],
 ["Fibres and mirrors","Patch cords and connectors","Mirrors and laser accessories, fibre optics, patch cords and connectors, repaired and shipped anywhere in the world."]];
function fix(){return '<div class="caps nwc tst">'+FIX.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* the site (filaroptomaterials.com > Home, About Us) */
var SITEF=[
 ["Tortolì, Sardinia","1 km from the port","In the industrial area of Tortolì, one kilometre from the port of Arbatax, in the middle of the Mediterranean Sea."],
 ["Two buildings","2,000 m² each","Crystal growth stations, optomechanical shaping machines and vacuum coating machines, on a 15,000 m² industrial site."],
 ["Certified","ISO 9001 · ISO 14001","Quality and environmental management, from solid-state laser components to ophthalmic optics."]];
function sitef(){return '<div class="caps nwc tst">'+SITEF.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* projects (filaroptomaterials.com > Projects & Collaborations; evencloser.eu > Consortium; LASER World of Photonics 2025 exhibitor list) */
var NEWS=[
 ["Now","EVEN CLOSER: a circular European value chain for semiconductors, recovering critical raw materials from e-waste","EU project","https://evencloser.eu/consortium/"],
 ["Jun 2025","LASER World of Photonics 2025, Munich: exhibitor","Trade fair","https://world-of-photonics.com/"],
 ["Ongoing","Single-crystal sapphire slices for space and solid-state electronics, with the University of Cagliari","Sardegna Ricerche",PW+"/projects-collaborations-rd/"],
 ["Ongoing","MASTER: a stratospheric airship for telecommunications","R&D",PW+"/projects-collaborations-rd/"],
 ["From 2012","MISSION: quantum cascade lasers, with the Italian Ministry of Defence","EU project",PW+"/projects-collaborations-rd/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1438" height="531" alt="Three laser crystal rods made by FILAR Optomaterials, lilac, pink and violet" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Laser crystals and optics<span class="nomob"> · Tortolì, Sardinia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Laser crystals,</span> <span class="l">grown in Sardinia.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Alexandrite, Nd:YAG, Er:YAG and other doped crystals as rods, slabs, discs and pixels, coated in-house, with laser rod repair: from our Tortolì facility since 1997.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/crystals">Our crystals '+ARR+'</a><a class="btn" href="#/contact">Ask for a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>FILAR Optomaterials</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Crystal growth,</span> <span class="nw">shaping and</span> <span class="nw">vacuum coating,</span> <span class="nw">on one site</span> <span class="nw">by the sea.</span> <em><span class="nw">Crystals made</span> <span class="nw">to your needs.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1997</span><p class="k">founded in Tortolì as Scimex, a family company ever since</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15,000 m²</span><p class="k">industrial site, with two 2,000 m² buildings for growth, shaping and coating</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 days</span><p class="k">from payment to dispatch for rods, slabs, mirrors, filters and cavities in stock</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a laser rod is made</span><h2 class="d3"><span class="nw">From the melt</span> <span class="nw">to the laser.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Grow</span><span>Map</span><span>Shape</span><span>Coat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Only the best</span> <span class="nw">of the melt.</span></h2><p>Ultra-pure gas and raw materials go into a tightly controlled process, and only about 20% of the melt is used, so the doping is even along every rod.</p></article>'+
     '<article class="step"><h2><span class="nw">Mapped</span> <span class="nw">for stress.</span></h2><p>Each boule is mapped with a double-pass interferometer to find its low-stress regions, and its uniform doping profile is certified and laser-marked.</p></article>'+
     '<article class="step"><h2><span class="nw">Cut, ground</span> <span class="nw">and polished.</span></h2><p>Rods from 2 to 12.7 mm across and 5 to 150 mm long: flat to λ/10, parallel to 10 arc seconds, chamfered at 45°, with a laser-marked serial number.</p></article>'+
     '<article class="step"><h2><span class="nw">Coated</span> <span class="nw">in-house.</span></h2><p>AR, HR and partially reflecting coatings go on right after end polishing, which keeps the cycle short and the layers clean and adherent.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="crystals" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Laser crystals</span><h2 class="d2 split"><span class="nw">Rods, slabs,</span> <span class="nw">discs and pixels.</span></h2></div><p data-r>Ingots, rods, slabs, discs and pixels, with flat, parallel, tilted, Brewster or radius ends, in standard sizes or shaped to your design.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="coatings" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Optical coating</span><h2 class="d2 split"><span class="nw">AR, HR, PR</span> <span class="nw">and custom.</span></h2></div><p data-r>Coatings for our own crystals and for your optics: lenses, windows, resonator mirrors, polarizers and filters, to your wavelength and angle.</p></div>'+
   coat()+stock()+
  '</div></section>'+

  '<section class="sec dark" id="repair" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Optical repairing</span><h2 class="d2 split"><span class="nw">Back in the laser</span> <span class="nw">in 2–3 weeks.</span></h2></div><p data-r>Send us your damaged parts: we examine them first, then quote on the damage, the size and shape, and the coating needed.</p></div>'+
   fix()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">A family company,</span> <span class="nw">since 1997.</span></h2></div><p data-r>Founded by Pier Giorgio Lorrai, a dentist with a lifelong passion for science, and run today with his son: FILAR turns single crystals into the working heart of a laser.</p></div>'+
   sitef()+
  '</div></section>'+

  '<section class="sec dark" id="projects" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Projects</span><h2 class="d2 split"><span class="nw">Our research</span> <span class="nw">and partners.</span></h2></div><p data-r>European and Sardinian research projects, from quantum cascade lasers to critical raw materials, and the trade fairs where you can meet us.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us the crystal</span> <span class="nw">you need.</span></h2>'+
   '<p class="sub" data-r>Send us your specification, from a single rod to a production run, or the parts you need repaired, and we will come back with a quote.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>FILAR Optomaterials S.r.l.</span><br><span>Zona Industriale Baccasara</span><br><span>08048 Tortolì (NU)</span><br><span>Italy</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Sales and quotes</span><br><a class="ul" href="mailto:'+MAIL2+'">'+MAIL2+'</a><br><span>Administration</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="tel:'+TEL2+'">'+TELT2+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Zona Industriale Baccasara<br>08048 Tortolì (NU), Italy</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/crystals">Crystals</a><br><a class="ul" href="#/coatings">Coatings</a><br><a class="ul" href="#/repair">Repair</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/projects">Projects</a></div>'+
   '<div class="c"><span class="lab">Products</span>Laser crystal rods<br>Optical coatings<br>Laser rod repair</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">FILAR</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 FILAR Optomaterials S.r.l.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",crystals:"crystals",coatings:"coatings",repair:"repair",about:"about",projects:"projects",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"FILAR Optomaterials — Laser crystals, optics and coatings, Tortolì, Sardinia",x:"Home"};
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
