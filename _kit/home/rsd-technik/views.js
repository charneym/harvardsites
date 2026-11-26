/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">More '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Material","Premium stainless steel","Cylinders are manufactured from custom-made premium quality stainless steel.",'<path d="M10 22H46V34H10Z"/><path class="a" d="M10 28H46"/><circle class="f" cx="46" cy="28" r="2.4"/>'],
  ["Surface","Laser-engraved, hardened","Laser-engraved hardened steel surfaces give a longer life time and excellent print quality.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 4V18"/><circle class="f" cx="28" cy="18" r="2.4"/>'],
  ["Stock","Standard cylinders in stock","A variety of standard printing cylinders is kept in stock for the most common printing machines.",'<path d="M10 16H46M10 28H46M10 40H46"/><path class="a" d="M10 28H30"/><circle class="f" cx="30" cy="28" r="2.4"/>'],
  ["Delivery","5 to 10 working days","Engraving in Germany, Spain, the USA and China keeps delivery at 5 to 10 working days, artwork included.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16V28L36 34"/><circle class="f" cx="36" cy="34" r="2.4"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
/* Ziraba SA, Pamplona: printing forms and industrial embossing (rsd-technik.de > Printing forms; About us) */
function mats(){var M=[["Printing form","Rotogravure cylinders"],["Printing form","Flexographic printing forms"],["Printing form","Photopolymer plates"],["Technology","Industrial embossing"],["Application","Packaging"],["Application","Decorative surfaces"]];
  return '<ul class="kmat k3">'+M.map(function(m){return '<li><span class="lab">'+esc(m[0])+'</span><b>'+esc(m[1])+'</b></li>'}).join("")+'</ul>'}
/* the RSD Group sites (rsd-technik.de > About us) */
function qual(){var Q=[
  ["Germany","RSD Technik GmbH","The headquarters in Efringen-Kirchen: direct and indirect printing machines for cable, tube and profile applications, and laser-engraved rolls, wheels and segments for pharmaceuticals, food, cables and hoses."],
  ["USA","RSD Technologies LLC","Formerly Gillies Technologies, in Worcester, Massachusetts: print wheels, contact printers, inkjet marking systems, inks and extenders, and engraved pharmaceutical printing cylinders."],
  ["China","RSD Hi-Tech Industrial","In Shanghai and Shenzhen: printing wheels, printing machines and pharmaceutical cylinders, and photopolymer plates with artwork services from the flexographic department in Shanghai."],
  ["India","RSD Hi-Tech Industrial (Mumbai)","The newest subsidiary, offering the whole RSD range for wire, cable, hose, tube and pharmaceutical applications."],
  ["Spain","Ziraba S.A.","In Pamplona: rotogravure cylinders, flexographic printing forms and embossing technology."]];
  return '<ol class="exps">'+Q.map(function(x,i){return '<li><span class="lab">'+esc(x[0])+'</span><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>RSD Group<span class="nomob"> · Marking &amp; Printing</span> · Efringen-Kirchen</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Marked at line speed,</span> <span class="l acc">engraved in steel.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RSD Technik, headquarters of the RSD Group, builds printing and laser marking machines for cables, wires and hoses, and laser-engraves the wheels and cylinders that print on them and on pharmaceutical capsules.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/marking">Our product range '+ARR+'</a><a class="btn" href="#/contact">Send a request</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>RSD Technik GmbH · RSD Group</span>'+
   '<h2 class="txt" id="mani"><em>Direct and indirect printing</em> for the cable, wire, hose, pharmaceutical, food, textile and <span class="nw">packaging industries.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1500</span><p class="k">m/min: top print speed of the CP 4R and CP 1E direct printers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">500</span><p class="k">m/min: fibre laser marking on the fly with the CP LM 1064 V500</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5–10</span><p class="k">working days for pharmaceutical printing cylinders, artwork included</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">On the line</span><h2 class="d3"><span class="nw">From the wheel</span> <em class="nw">to the cable.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Engrave</span><span>Print</span><span>Laser</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Engraved by laser,</span> <span class="nw">checked in house.</span></h2><p>Print, indent and embossing wheels are laser-engraved at RSD’s own facilities, with production control from raw material through surface finishing to inspection.</p></article>'+
     '<article class="step"><h2><span class="nw">Printed at</span> <span class="nw">line speed.</span></h2><p>The CP 4R carries four revolving printing stations, so print wheels change without stopping production, at up to 1500 m/min, watched by a synchronized inline stroboscope.</p></article>'+
     '<article class="step"><h2><span class="nw">Or marked by laser,</span> <span class="nw">on the fly.</span></h2><p>The CP LM 1064 V500 marks cables, hoses, tubes and profiles with fibre laser technology at up to 500 m/min. RSD runs test markings on your own samples.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="marking" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Wire, cable and hose</span><h2 class="d2 split"><span class="nw">Printing on wires,</span> <em class="nw">cables and hoses.</em></h2></div><p data-r>The full range for marking wires, cables, hoses and tubes: printing machines, laser marking, printing and embossing wheels, inks, spare and wear parts, artwork and accessories.</p></div>'+
   rows(PRODS)+
  '</div></section>'+

  '<section class="sec light" id="pharma" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pharma</span><h2 class="d2 split"><span class="nw">Printing cylinders</span> <em class="nw">for pharmaceuticals.</em></h2></div><p data-r>One of the world’s leading engraving companies for pharmaceutical printing cylinders, with artwork, engraving and manufacturing for hard and soft gelatine capsules, pills, dragées and sugar-coated candy, compatible with Ackley, Hartnett and Markem printers.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="forms" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Printing forms</span><h2 class="d2 split"><span class="nw">Printing forms</span> <em class="nw">and embossing.</em></h2></div><p data-r>Ziraba S.A. in Pamplona, a member of the RSD Group, brings expertise in rotogravure cylinders, flexographic printing forms and industrial embossing technology. Send your technical specifications for advice and a quotation.</p></div>'+
   mats()+
  '</div></section>'+

  '<section class="sec light" id="group" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>RSD Group</span><h2 class="d2 split"><span class="nw">One group,</span> <em class="nw">five countries.</em></h2></div><p data-r>A global manufacturer of direct and indirect printing systems, headquartered in Germany, with sites in Europe, China, India and the USA, and agencies from Brazil to Korea.</p></div>'+
   qual()+
  '</div></section>'+

  '<section class="sec dark2" id="people" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Management</span><h2 class="d2 split"><span class="nw">Management at</span> <em class="nw">the headquarters.</em></h2></div><p data-r>RSD Technik GmbH is the headquarters of the RSD Group, an ISO-certified manufacturer of printing machines for cable, tube and profile applications.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Trade fairs</span><p class="cr" data-r><span>wire 2026, Düsseldorf</span><span>Exhibitor, April 2026</span><a class="ul" href="https://www.wire-tradefair.com/vis/v1/en/exhibitors/wire2026.3040534" target="_blank" rel="noopener">Exhibitor directory</a></p>'+
   '<p class="cr" data-r><span>wire India, Mumbai</span><span>30 Nov – 2 Dec 2026</span><span>wire Mexico, Monterrey, 23–25 Feb 2027</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us what</span> <em class="nw">you need marked.</em></h2>'+
   '<p class="sub" data-r>Send your technical specifications, artwork, or cable, hose and tube samples. RSD Technik will advise you and quote, and for laser marking run a feasibility study and test marking.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write an email '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>RSD Technik GmbH<br>Walter-Wetzel-Str. 2<br>79588 Efringen-Kirchen, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Downloads</span><p data-r><a class="ul" href="'+RG+'marking-and-printing/printing-wheels?view=featured" target="_blank" rel="noopener">Printing wheel data sheets and order forms</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>RSD Technik GmbH<br>Walter-Wetzel-Str. 2, 79588 Efringen-Kirchen</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/marking">Marking</a><br><a class="ul" href="#/pharma">Pharma</a><br><a class="ul" href="#/forms">Printing forms</a><br><a class="ul" href="#/group">Group</a></div>'+
   '<div class="c"><span class="lab">Register</span>Amtsgericht Freiburg, 412963<br>VAT DE 812 666 789<br>Managing Director: Martin Rasenberger</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:66px;letter-spacing:.3em">RSD GROUP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RSD Technik</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",line:"story",marking:"marking",pharma:"pharma",forms:"forms",group:"group",people:"people",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RSD Technik — Marking and printing for cable, wire, hose and pharma",x:"Home"};
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
