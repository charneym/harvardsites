/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function lines(){return '<ul class="pfr pipe np">'+LINES.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Panels '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the Biocheck Imaging Software (polycheck.de > BIS Software), each with a small line icon */
var ICO={
 r:'<svg viewBox="0 0 56 56"><path d="M8 10H48V46H8Z"/><path d="M14 16V40M20 16V40M26 16V40M32 16V40M38 16V40"/><path class="a" d="M4 28H52"/></svg>',
 s:'<svg viewBox="0 0 56 56"><path d="M6 30H50V42H6Z"/><path d="M10 30L14 20H42L46 30"/><path class="a" d="M12 36H32"/><path d="M40 36H44"/></svg>',
 l:'<svg viewBox="0 0 56 56"><path d="M12 6H36L44 14V50H12Z"/><path d="M36 6V14H44"/><path class="a" d="M18 24H26M18 31H34M18 38H30"/></svg>'};
var SOFT=[
 ["r","Panel recognition","Read by colour and code","The one-for-all software recognises each panel automatically by its colour and identifiers, then gives quantitative results for every parameter on it."],
 ["s","PC and flatbed scanner","It only takes a scanner","A recommended flatbed CCD scanner or a CCD camera and a PC with Windows 7 or higher (.NET Framework 3.5) are all the reading station needs."],
 ["l","Report and archive","Printed or sent to your LIS","Results print in numerous languages as an easy-to-read report, and are stored or transferred to a central LIS together with the raw data image."]];
function soft(){return '<div class="caps svc">'+SOFT.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Nov 2026","Polycheck exhibited at MEDICA 2026 in Düsseldorf","MEDICA","https://www.medica-tradefair.com/vis/v1/en/exhibitors/medica2026.3075249"],
 ["20.11.2026","Biocheck GmbH is hiring: laboratory production staff (m/f/d)","Polycheck",PW+"/news/mitarbeiter-m-w-d-produktion-im-labor-gesucht-fur-biocheck-gmbh/"],
 ["13.01.2026","Interested in distributing Polycheck® diagnostic kits?","Polycheck",PW+"/news/are-you-interested-in-distributing-polycheck-diagnostic-kits/"],
 ["12.01.2026","Distributors: get an online account for marketing material and ordering","Polycheck",PW+"/news/are-you-distributing-polycheck-products-2/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<div class="hero-ph"><figure data-r><img src="hero-photo.webp" width="1240" height="646" alt="Polycheck allergy test strips in a colour-coded tray, held in two hands" decoding="async" fetchpriority="high"><figcaption>Polycheck allergy test strips</figcaption></figure></div>'+
   '<span class="lab eyebrow" data-r>In vitro diagnostics<span class="nomob"> · Made in Germany</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Many allergens,</span><span class="l"><em>one serum sample.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Polycheck® multiparameter immunoassays quantify allergen-specific IgE and autoimmune IgG and IgA in a single test: up to 30 allergens from 200 µl of serum, read by a flatbed scanner and the Biocheck Imaging Software.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the panels '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1999 in Münster</span>'+
   '<h2 class="txt" id="mani">A blood sample instead of a prick test: the patient is never directly exposed to allergens, so Polycheck® is <em><span class="nw">safe even for</span> <span class="nw">children under six.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1999</span><p class="k">Polycheck® established, a brand of Biocheck GmbH</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><p class="k">allergens on a single panel, from only 200 µl of serum</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">48</span><p class="k">tests run at once on the automated system, in about 4.5 hours</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a test runs</span><h2 class="d3"><span class="nw">One cassette,</span> <em class="nw">four steps.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Serum</span><span>Incubate</span><span>Develop</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">200 µl of serum</span> <span class="nw">per panel.</span></h2><p>Serum from a simple blood sample is pipetted onto the cassette, whose membranes each carry a different allergen or antigen composition.</p></article>'+
     '<article class="step"><h2><span class="nw">Timed incubation</span> <span class="nw">on a shaker.</span></h2><p>Incubation times and conditions follow the test protocol, on a rocking shaker from the standard lab equipment.</p></article>'+
     '<article class="step"><h2><span class="nw">Wash, then</span> <span class="nw">let it develop.</span></h2><p>The membranes are washed thoroughly several times; the AP substrate reaction then precipitates on each line that found its antibodies.</p></article>'+
     '<article class="step"><h2><span class="nw">Scan it,</span> <span class="nw">read it.</span></h2><p>A flatbed scanner and the Biocheck Imaging Software recognise the panel and give a quantitative result for every parameter.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="system" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The Polycheck® system</span><h2 class="d2 split"><span class="nw">Any size</span> <em class="nw">of laboratory.</em></h2></div><p data-r>A platform technology for multiparameter testing in human and veterinary medicine: many parameters, screened quantitatively in one test approach.</p></div>'+
   '<div class="sys">'+
    '<figure class="sys-ph"><img src="lab.webp" width="1000" height="905" alt="A Polycheck cassette of blue panels being pipetted in the laboratory" loading="lazy"></figure>'+
    '<div class="sys-t">'+
     '<div class="oz-site"><span class="lab" data-r>Manual testing</span><h3 data-r>Inexpensive and easy</h3><p data-r>A rocking shaker, pipettes, a timer and a refrigerator for the test; a PC with a flatbed scanner for the analysis. Ideal for any size of laboratory.</p></div>'+
     '<div class="oz-site"><span class="lab" data-r>Automated testing</span><h3 data-r>High throughput, hands-off</h3><p data-r>For large laboratories: up to 48 tests run simultaneously in about 4.5 hours, including the imaging analysis, and finish with clear documentation.</p></div>'+
    '</div>'+
   '</div>'+
   '<div class="qual"><span class="lab kick" data-r>Short facts</span><p class="cr" data-r><span>Produced in Germany</span><span>Brand of Biocheck GmbH</span><span>Distributed in 30 countries</span><span>EN ISO 13485:2016</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Product lines</span><h2 class="d2 split"><span class="nw">Allergy, autoimmune</span> <em class="nw">and veterinary.</em></h2></div><p data-r>Different panels for different questions: inhalation, food, paediatric and insect allergens, components and recombinant allergens, general and organ-related autoimmune screening, and panels for dogs, cats and horses.</p></div>'+
   lines()+
   '<p class="disc" data-r>Polycheck® kits are available from regional distributors. The 2027 catalogue lists every panel and its parameters.</p>'+
  '</div></section>'+

  '<section class="sec light" id="software" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Biocheck Imaging Software</span><h2 class="d2 split"><span class="nw">It only takes</span> <em class="nw">a PC and a scanner.</em></h2></div><p data-r>The free one-for-all software evaluates every Polycheck® test precisely and documents it digitally or on paper. Correct panel recognition matters, so it works with a list of recommended scanners.</p></div>'+
   soft()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Münster</span> <em class="nw">to the world.</em></h2></div><p data-r>Trade fairs, vacancies and news for laboratories and distributors.</p></div>'+
   news()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">The people</span> <em class="nw">behind the panels.</em></h2></div><p data-r>Biocheck GmbH develops and produces Polycheck® in vitro diagnostics in Münster, certified to EN ISO 13485:2016. Each product line has its own specialist.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Bring Polycheck®</span> <em class="nw">to your laboratory.</em></h2>'+
   '<p class="sub" data-r>Laboratories get detailed information and a contact to their regional distributor; distributors get access to the online portal and the order form.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Biocheck GmbH<br>Vorbergweg 41<br>48159 Münster, Germany</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Distributors</span><p data-r><a class="ul" href="'+PW+'/distributor/" target="_blank" rel="noopener">Distributor portal</a><br><a class="ul" href="'+PW+'/bis-software/" target="_blank" rel="noopener">Software download</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Biocheck GmbH<br>Vorbergweg 41, 48159 Münster</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/system">System</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/software">Software</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Certified</span>EN ISO 13485:2016<br>Diagnostics made in Germany</div>'+
  '</div><svg class="bigsvg pyb" viewBox="0 0 600 70" aria-hidden="true"><rect class="b1" x="0" y="4" width="11" height="62"/><rect class="b2" x="16" y="4" width="11" height="62"/><rect class="b3" x="32" y="4" width="11" height="62"/><rect class="b4" x="48" y="4" width="11" height="62"/><rect class="b5" x="64" y="4" width="11" height="62"/><text x="92" y="66" style="font-family:Barlow,sans-serif;font-weight:400;font-size:84px;letter-spacing:.01em">POLYCHECK<tspan dy="-46" style="font-size:24px">®</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Biocheck GmbH</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",test:"story",system:"system",products:"products",software:"software",news:"news",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Polycheck® — Multiparameter allergy and autoimmune diagnostics, made in Germany",x:"Home"};
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
