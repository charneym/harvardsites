/* ================= VIEWS (home only: About / TrachFlush / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function prods(){return '<ul class="pfr">'+PRODUCTS.map(function(p){
  return '<li data-r><span class="lab tg">'+esc(p[0])+'</span><div class="pn"><h3>'+esc(p[1])+'</h3>'+(p[3]?'<span class="loc">'+esc(p[3])+'</span>':'')+'</div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function mh(label,list){return '<div class="mhg"><p class="mh-label" data-r>'+label+'</p><ul class="mh-list">'+list.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li data-r><a href="'+WEB+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+n[0]+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">awtechnologies.dk '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function partners(){return '<div class="prt"><p class="lab prt-l" data-r>Distribution partners, 2024–2026</p><p class="prt-n" data-r>'+PARTNERS.map(function(n){return '<span>'+esc(n)+'</span>'}).join('')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>ICU airway management<span class="nomob"> · Nørresundby, Denmark</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Clear airways,</span><span class="l"><em>at the push</em></span><span class="l"><em>of a button.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AW Technologies develops TrachFlush™, a device that keeps the tracheal tube cuff at its set pressure and removes secretion from below and above the cuff without the need for suctioning.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/flush">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>TrachFlush™, the AW Technologies device (company product image).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About AW Technologies</span>'+
   '<h2 class="txt" id="mani">A Danish medical device company bringing disruptive, innovative airway solutions to <em>mechanically ventilated patients.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2018</span><span class="k">Founded in late November by intensivist Dr. Alberto Zanella and four MedTech entrepreneurs</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">CE · FDA</span><span class="k">CE marked in 2020; FDA clearance in April 2023, and a further 510(k) clearance in August 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">11</span><span class="k">Distribution partnerships announced since March 2024, from Japan to the United Kingdom</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Flush Control</span><h2 class="d3">The cuff seals. <em>TrachFlush clears.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The cuff</span><span>Pressure</span><span>Deflate</span><span>Flush</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Secretion the patient can’t cough up.</h2><p>The inflated cuff lets the ventilator do the breathing, but the patient can’t cough up secretion below it, and secretion that collects above it can be aspirated, a route to ventilator-associated pneumonia.</p></article>'+
     '<article class="step"><h2>The set pressure, held.</h2><p>Cuff Control maintains and adjusts the actual cuff pressure breath by breath, so the seal stays at the pressure the clinician sets.</p></article>'+
     '<article class="step"><h2>Deflated, as the breath goes in.</h2><p>When the Flush button is pushed, TrachFlush synchronises with the ventilator and deflates the cuff during the inspiratory cycle.</p></article>'+
     '<article class="step"><h2>Flushed up, into the mouth.</h2><p>The airflow from the lungs and the ventilator pushes the secretion from below and above the cuff up into the mouth. The cuff re-inflates before expiration, avoiding PEEP loss.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="trachflush" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>TrachFlush™</span><h2 class="d2 split">One device, <em>two features.</em></h2></div><p data-r>VAP prevention and tracheal secretion removal without the need for suctioning: invented by Dr. Alberto Zanella, developed by AW Technologies and on the market since mid-2020.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>TrachFlush.</em></h2></div><p data-r>Dr. Alberto Zanella spent years researching how to improve care for his ICU patients. In November 2018 he and four MedTech entrepreneurs founded AW Technologies to bring his invention to market.</p></div>'+
   '<div class="mh">'+mh("Leadership and founders",LEAD)+'</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">TrachFlush, <em>around the world.</em></h2></div><p data-r>The latest distribution partnerships, from the press releases on awtechnologies.dk.</p></div>'+
   news()+partners()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Hospitals, clinicians and distributors</span>'+
   '<h2 class="big split">Ask about <em>TrachFlush.</em></h2>'+
   '<p class="sub" data-r>For more information about AW Technologies or TrachFlush, or to distribute it, write to the team or call +45 7777 4048.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/trachflush">About TrachFlush</a></div>'+
   '<div class="cinfo cgrid">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Amalienborgvej 57<br>9400 Nørresundby, Denmark</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+4577774048">+45 7777 4048</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>AW Technologies ApS<br>Amalienborgvej 57<br>9400 Nørresundby, Denmark</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/about">About</a><br><a class="ul" href="#/trachflush">TrachFlush</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+4577774048">+45 7777 4048</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Airway management<br>for the ICU</div>'+
  '</div><div class="bigsvg flogo" aria-hidden="true">'+LOGO.replace(/awg/g,"awgf")+'</div>'+
  '<div class="legal"><span class="lab">© 2026 AW Technologies ApS</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",trachflush:"trachflush",flush:"story",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AW Technologies — TrachFlush airway management for the ICU, Denmark",x:"Home"};
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
