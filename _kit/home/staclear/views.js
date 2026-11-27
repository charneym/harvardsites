/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Order '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the technology (staclear.com FAQ and home) */
var TECH=[
 ["TriboLink-Si","A patented coating process that fixes silicone onto the syringe barrel: the lubricating qualities of silicone without liquid silicone oil."],
 ["Better than silicone-free","A 3-part design with a rubber piston: more precise dosing and smoother plunger movement than silicone-free syringes with a plastic piston and wax."],
 ["USP <789> tested","Every lot is tested for USP <789> compliance, to ensure low levels of particles in sensitive ophthalmic injections."]];
function tech(){return '<div class="caps nwc tst">'+TECH.map(function(c,i){return '<div class="cap"><span class="lab" data-r>0'+(i+1)+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var USERS=["Ophthalmologists","Retina specialists","Outsourcing facilities","Compounding pharmacies","Ophthalmic drug companies","FDA 510(k) cleared","CE marked under EU MDR","Approved in Canada","Approved in Australia"];
function users(){return '<div class="bk cnd"><span class="lab kick" data-r>Designed for, and cleared in</span><p class="cr" data-r>'+USERS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* the backstory (staclear.com home: Why invent an intravitreal syringe?) */
var ICO={
 a:'<svg viewBox="0 0 56 56"><path d="M28 6L50 46H6Z"/><path class="a" d="M28 20V34M28 39V41"/></svg>',
 g:'<svg viewBox="0 0 56 56"><path d="M12 8H38L44 14V48H12Z"/><path class="a" d="M18 24H38M18 32H38M18 40H30"/></svg>',
 n:'<svg viewBox="0 0 56 56"><path d="M6 28C14 16 42 16 50 28C42 40 14 40 6 28Z"/><circle class="a" cx="28" cy="28" r="7"/></svg>',
 c:'<svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="20"/><path class="a" d="M19 28L25 34L37 22"/></svg>'};
var BACK=[
 ["a","The alert","Floaters and IOP","The ASRS sends an alert about increased floaters and IOP risk linked to liquid silicone oil in syringes; insurers ask patients to sign waivers."],
 ["g","The guidance","Stricter compounding","The FDA issues stricter guidelines for compounding intraocular injection drugs, and the industry comes to StaClear for help."],
 ["n","The design","With the NEI","With R&D support from the National Eye Institute, StaClear designs the first low-particulate syringe for retina specialists."],
 ["c","The clearance","FDA 510(k)","The Attached Needle syringe is cleared by the FDA; the Luer Slip and Luer Lock follow, in tray and unit packs."]];
function back(){return '<div class="caps svc">'+BACK.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1402" height="1488" alt="StaClear Attached Needle, Luer Slip and Luer Lock syringes" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Ophthalmic syringes<span class="nomob"> · Raleigh, North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The low-particulate</span> <span class="l">ophthalmic syringe.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>StaClear fixes its silicone lubricant to the barrel with the patented TriboLink-Si coating instead of liquid silicone oil, and tests every lot for USP&nbsp;&lt;789&gt; compliance.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/syringes">Our syringes '+ARR+'</a><a class="btn" href="#/contact">Order samples</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Trusted by retina specialists</span>'+
   '<h2 class="txt" id="mani"><span class="nw">The first low-particulate</span> <span class="nw">syringe designed</span> <span class="nw">with retina specialists</span> <span class="nw">in mind.</span> <em><span class="nw">Built with R&amp;D support</span> <span class="nw">from the National</span> <span class="nw">Eye Institute.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.25 mL</span><p class="k">fillable, single-use intravitreal syringes, in three types</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.025 mL</span><p class="k">graduation mark on the Luer Lock, for precision dosing</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;789&gt;</span><p class="k">USP compliance tested on every lot, for low levels of particles</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the barrel</span><h2 class="d3"><span class="nw">Silicone that</span> <em class="nw">stays put.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Oil</span><span>Particles</span><span>Coating</span><span>Clean</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Generic syringes</span> <span class="nw">use liquid oil.</span></h2><p>A film of liquid silicone oil lubricates the barrel so the plunger moves smoothly.</p></article>'+
     '<article class="step"><h2><span class="nw">Oil sheds</span> <span class="nw">into the drug.</span></h2><p>Liquid silicone oil can leave the wall as particles; the ASRS has linked it to increased floaters and IOP risk after intravitreal injection.</p></article>'+
     '<article class="step"><h2><span class="nw">StaClear anchors</span> <span class="nw">the silicone.</span></h2><p>The patented TriboLink-Si process crosslinks the silicone and fixes it to the barrel wall, with a rubber piston for smooth, precise action.</p></article>'+
     '<article class="step"><h2><span class="nw">Low particles,</span> <span class="nw">every lot.</span></h2><p>Each lot is tested for USP&nbsp;&lt;789&gt; compliance before it ships to a retina practice or compounding pharmacy.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="syringes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Syringes</span><h2 class="d2 split"><span class="nw">Three syringes,</span> <em class="nw">one standard.</em></h2></div><p data-r>Three types of fillable, single-use intravitreal syringe, each in tray and unit packs.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">The lubricity of silicone,</span> <em class="nw">without the oil.</em></h2></div><p data-r>Not silicone-free, and not a generic syringe: the silicone is crosslinked and immobilized to reduce particle generation, for sensitive applications like ophthalmic injections.</p></div>'+
   tech()+users()+
  '</div></section>'+

  '<section class="sec dark" id="backstory" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Backstory</span><h2 class="d2 split"><span class="nw">Why invent an</span> <em class="nw">intravitreal syringe?</em></h2></div><p data-r>Because retina specialists, pharmacies and regulators were asking for one.</p></div>'+
   back()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split"><span class="nw">Made for</span> <em class="nw">the retina practice.</em></h2></div><p data-r>StaClear, Inc. is based in Raleigh, North Carolina. “Excellent marking and smooth action: excellent choice delivering intravitreal agents!” says Dr. Yugen Wang, MD, of the Oregon Retina Center.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Raleigh</span> <em class="nw">to Montreal.</em></h2></div><p data-r>Trade fairs, approvals and the pharmacies already using StaClear.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Try StaClear</span> <em><span class="nw">in your practice.</span></em></h2>'+
   '<p class="sub" data-r>Order sample quantities of any StaClear syringe; we typically reply within one business day.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>StaClear, Inc.<br>7250 ACC Blvd<br>Raleigh, NC 27617</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>7250 ACC Blvd<br>Raleigh, NC 27617</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/syringes">Syringes</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/backstory">Backstory</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Syringes</span>Attached Needle SC250AN<br>Luer Slip SC250LS<br>Luer Lock SC250LL</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">StaClear</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 StaClear, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",syringes:"syringes",technology:"technology",backstory:"backstory",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"StaClear — The first low-particulate ophthalmic syringe",x:"Home"};
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
