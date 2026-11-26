/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function divs(){return '<ul class="pfr pipe np">'+DIVS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function brands(){return '<div class="svc four">'+BRANDS.map(function(b){
  return '<div class="svc-c" data-r><span class="lab">'+esc(b[1])+'</span><h3>'+esc(b[0])+'</h3><p>'+esc(b[2])+'</p></div>'}).join("")+'</div>'}
function hist(){return '<ol class="sg-tl">'+HIST.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">People to talk to</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Gordon Ellis &amp; Co<span class="nomob"> · Since 1863</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">From the tool</span></span> <span class="l"><em><span class="nw">to the finished part.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A family manufacturer in Castle Donington since 1863: home healthcare safety products, rotational moulding, precision machining of wood and composites, and street furniture.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/divisions">Our divisions '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Four businesses, one way of working</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Investment in</span> <span class="nw">the very latest machinery,</span> <span class="nw">genuinely new products</span> <span class="nw">for our customers,</span> <em><span class="nw">competitive pricing</span> <span class="nw">and dependable service.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1863</span><p class="k">Established, and still run by the Ellis family today</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12</span><p class="k">Rotational moulding machines in Castle Donington</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3,000<sup>mm</sup></span><p class="k">Largest moulding diameter, from 100 mm upwards</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The rotomoulding process</span><h2 class="d3"><span class="nw">One tool,</span> <em class="nw">turning slowly.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fill</span><span>Heat</span><span>Cool</span><span>Finish</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A measured shot</span> <span class="nw">of powder.</span></h2><p>The hollow metal tool is filled with a measured amount of plastic powder or pellets, the shot weight: PP, LDPE, MDPE or nylon. Metal inserts, threads and logos can be moulded in at this stage.</p></article>'+
     '<article class="step"><h2><span class="nw">Into the oven,</span> <span class="nw">on two axes.</span></h2><p>The closed tool moves on its arm into an oven heated as high as 360 °C, turning about ten times a minute around both axes, so the softened plastic coats the walls in an even layer.</p></article>'+
     '<article class="step"><h2><span class="nw">Cooled,</span> <span class="nw">still turning.</span></h2><p>Out of the oven, the arm keeps rotating while fans or a cooling chamber set the plastic solid. The moulding comes out quickly onto a cooling jig, so it holds its form.</p></article>'+
     '<article class="step"><h2><span class="nw">Trimmed, fitted</span> <span class="nw">and packed.</span></h2><p>Holes are drilled, sensors, pipes and fixtures fitted, and coatings sprayed in our own spray shop. Then we pack, store and even send it straight to your customer.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="divisions" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Divisions</span><h2 class="d2 split"><span class="nw">Four specialist businesses,</span> <em class="nw">one family.</em></h2></div><p data-r>Each one benefits from investment in the latest machinery, and each helps customers bring brand new products and concepts to market.</p></div>'+
   divs()+
  '</div></section>'+

  '<section class="sec dark" id="healthcare" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Healthcare</span><h2 class="d2 split"><span class="nw">Living with independence,</span> <em class="nw">dignity and safety.</em></h2></div><p data-r>Our award-winning daily living aids were made possible by working closely with professionals and listening to our customers. They help people back into their homes sooner, with small adaptations rather than bigger, costlier equipment.</p></div>'+
   brands()+
   '<div class="act hc-act" data-r><a class="btn solid" href="'+GH+'" target="_blank" rel="noopener">Visit Gordon Ellis Healthcare '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A family business</span> <em class="nw">since 1863.</em></h2></div><p data-r>The principles of quality and craftsmanship set in our first wood shop still hold. We are ISO 9001:2015 certified with BSI accredited quality control, and members of the BPF, the BHTA and British Furniture Manufacturers.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From the workshop</span> <em class="nw">and the show floor.</em></h2></div><p data-r>A new brand, a new machine and a stand at Farnborough. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Send us your drawing,</span> <em class="nw">sketch or brief.</em></h2>'+
   '<p class="sub" data-r>Tell us about your idea, a moulded or machined part, or a healthcare product. Documents we receive are handled in full commercial confidence.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Gordon Ellis '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r>Gordon Ellis &amp; Co<br>Trent Lane, Castle Donington<br>Derby DE74 2AT<br>England</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Registered</span><p data-r>Registered in England, company no. 00231734. A family company, operated by the Ellis family to this day.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>Gordon Ellis &amp; Co<br>Trent Lane, Castle Donington, Derby DE74 2AT</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/divisions">Divisions</a><br><a class="ul" href="#/process">Process</a><br><a class="ul" href="#/healthcare">Healthcare</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Divisions</span>Home healthcare safety products<br>Rotational moulding<br>Precision woodworking<br>Street furniture</div>'+
  '</div><svg class="bigsvg flogo" viewBox="12 11 412 213" aria-hidden="true"><path class="gm" fill-rule="evenodd" d="'+GEM+'"/><path class="gw" fill-rule="evenodd" d="'+GEW+'"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 Gordon Ellis &amp; Co</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",process:"story",divisions:"divisions",healthcare:"healthcare",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Gordon Ellis & Co — Healthcare, rotational moulding and precision woodworking since 1863",x:"Home"};
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
