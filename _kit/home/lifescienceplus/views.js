/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the eCMC technology (lifescienceplus.com home, Medical/Surgical and BloodSTOP iX pages), each with a small line icon */
var ICO={
 p:'<svg viewBox="0 0 56 56"><path d="M28 50V24"/><path class="a" d="M28 30C28 18 36 10 48 8C48 20 40 28 28 30Z"/><path d="M28 36C28 26 20 20 9 19C10 29 17 35 28 36Z"/></svg>',
 g:'<svg viewBox="0 0 56 56"><path d="M6 40H50"/><path class="a" d="M10 40C10 30 18 26 28 26S46 30 46 40"/><path d="M14 18L18 22M28 12V18M42 18L38 22"/></svg>',
 c:'<svg viewBox="0 0 56 56"><circle cx="18" cy="20" r="6"/><circle cx="36" cy="16" r="5"/><circle cx="30" cy="34" r="7"/><path class="a" d="M23 23L26 29M34 21L32 27"/><circle cx="44" cy="38" r="4"/></svg>',
 h:'<svg viewBox="0 0 56 56"><path d="M6 44H50"/><path d="M6 34H50"/><path class="a" d="M12 34V24M20 34V18M28 34V22M36 34V14M44 34V20"/></svg>'};
var TECH=[
 ["p","eCMC","100% plant-based","Purified, water-soluble, etherified carboxymethyl cellulose: natural, pH balanced and biocompatible, with no animal-based components."],
 ["g","Gel seal","Turns into a gel","On contact with blood and exudates the matrix absorbs fluid and becomes a translucent, adhesive gel that seals the wound and lets it be monitored."],
 ["c","Hemostasis","Activates the cascade","It binds and activates platelets and activates the intrinsic coagulation cascade, supporting rapid clot formation, also in patients on anticoagulants."],
 ["h","Healing","A moist environment","A moist field for granulation and tissue regeneration; water-soluble, so it washes off without disrupting the wound surface."]];
function tech(){return '<div class="caps svc">'+TECH.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
/* applications (lifescienceplus.com > Applications) */
var APPS=[
 ["Trauma surgery","Damage control surgery and first response: rapid control of major bleeding, and stable hemostasis through transport, with negative pressure wound therapy where needed.",LW+"/applications/trauma-surgery/"],
 ["Burn surgery","Hemostasis after excision and debridement and at skin graft donor sites, with less ligation and cauterisation and a moist field that does not interfere with graft uptake.",LW+"/applications/burn/"],
 ["Medical and surgical","Fast temporary hemostasis for surface wounds, from general surgery and the emergency room to dialysis and catheter exit sites.",LW+"/applications/medical/"]];
function apps(){return '<div class="caps nwc tst">'+APPS.map(function(c){return '<div class="cap"><span class="lab" data-r>Application</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p><a class="lab lk ul" data-r href="'+c[2]+'" target="_blank" rel="noopener"><span>Read more</span> '+ARR+'</a></div>'}).join("")+'</div>'}
var AREAS=["Cath labs and IR","Emergency room","Chronic wound care","Prehospital wound care","Dentistry and oral surgery","Sports medicine","Ear, nose and throat","General surgery","Consumer first aid"];
function areas(){return '<div class="bk cnd"><span class="lab kick" data-r>Also used in</span><p class="cr" data-r>'+AREAS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1295" height="976" alt="BloodSTOP iX Trauma Matrix pouches with a Z-folded and a square matrix" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Hemostasis and wound healing<span class="nomob"> · Mountain View, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Bleeding control,</span> <span class="l">from a plant.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>BloodSTOP iX is a plant-based matrix that turns into a gel on contact, seals the wound and supports healing, for surgery, trauma, burns and everyday care.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Request a sample</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Total wound care</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Hemostasis, sealant,</span> <span class="nw">moist dressing,</span> <span class="nw">contamination prevention</span> <span class="nw">and tissue growth,</span> <em><span class="nw">in one plant-based</span> <span class="nw">matrix.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;1 min</span><p class="k">to hemostasis with BloodSTOP iX, from minor to larger wounds</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">plant-based eCMC: natural, pH balanced, fully biocompatible</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Class III</span><p class="k">EU CE certification as an absorbable implant for BloodSTOP iX</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How BloodSTOP iX works</span><h2 class="d3"><span class="nw">From matrix</span> <em class="nw">to seal.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Apply</span><span>Gel</span><span>Clot</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Lay the matrix</span> <span class="nw">on the wound.</span></h2><p>A dry, woven matrix of plant cellulose. It conforms to any wound, small, large or irregular, and can be cut, packed or layered.</p></article>'+
     '<article class="step"><h2><span class="nw">It turns</span> <span class="nw">into a gel.</span></h2><p>On contact with blood and exudates it absorbs the fluid and becomes a translucent, adhesive gel that seals and protects the wound.</p></article>'+
     '<article class="step"><h2><span class="nw">The clot</span> <span class="nw">forms faster.</span></h2><p>The gel binds and activates platelets and the intrinsic coagulation cascade, supporting clot formation, including in patients on blood thinners.</p></article>'+
     '<article class="step"><h2><span class="nw">A moist field</span> <span class="nw">to heal.</span></h2><p>The seal keeps a moist environment for tissue growth. Water-soluble, it is rinsed away without disturbing the wound.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">The BloodSTOP</span> <em class="nw">family.</em></h2></div><p data-r>A new generation of wound care for surgery, emergency trauma care, paramedics, ulcers and dental wounds, all built on the same eCMC technology.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">From the field</span> <em class="nw">to the OR.</em></h2></div><p data-r>BloodSTOP iX is used by trauma, burn and acute care surgeons, by first responders, and in many other specialty care areas.</p></div>'+
   apps()+areas()+
  '</div></section>'+

  '<section class="sec dark" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Plant cellulose,</span> <em class="nw">engineered.</em></h2></div><p data-r>Each sterile piece is sodium carboxymethyl cellulose, oxidised and etherified into a hydrophilic, water-soluble, bioresorbable matrix.</p></div>'+
   tech()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Next generation</span> <em class="nw">wound care.</em></h2></div><p data-r>LifeScience PLUS develops and markets total wound care solutions from Mountain View, California, for medical professionals in hospitals, in surgery and in the field.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Studies, clearances</span> <em class="nw">and the clinic.</em></h2></div><p data-r>New clearances, preclinical and clinical findings, and where BloodSTOP iX is being used next.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Would you like</span> <em><span class="nw">a sample?</span></em></h2>'+
   '<p class="sub" data-r>Consumers, medical practitioners and distributors: tell us what you need, and we will route your enquiry and get back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>LifeScience PLUS, Inc.<br>2520-A Wyandotte Street<br>Mountain View, CA 94043</p></div>'+
    '<div><span class="lab" data-r>Information</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TELIH+'">'+TELI+'</a></p></div>'+
    '<div><span class="lab" data-r>Orders</span><p data-r><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>2520-A Wyandotte Street<br>Mountain View, CA 94043</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">BloodSTOP</span>BloodSTOP iX<br>Trauma Matrix<br>DonorSeal<br>WoundFLEX</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">LifeScience PLUS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 LifeScience PLUS, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",applications:"applications",technology:"technology",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"LifeScience PLUS — BloodSTOP iX plant-based hemostatic and wound healing matrix, Mountain View",x:"Home"};
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
