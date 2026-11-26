/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Made to specification","Pure or alloyed, 99.5% to 99.999%","Every product is manufactured to client specification, in pure form or alloyed with other precious metals. Annealing is offered at no additional charge on many products.",'<path d="M10 40L28 48L46 40L28 32Z"/><path class="a" d="M10 32L28 40L46 32L28 24Z"/><path d="M10 24L28 32L46 24L28 16Z"/><circle class="f" cx="28" cy="24" r="2.2"/>'],
  ["Product design team","Free consultations, with a metallurgist","Product consultations are always free. Our metallurgist, with over 30 years of manufacturing experience, offers technical advice and makes sure every product is to specification.",'<circle cx="24" cy="22" r="12"/><path d="M32 31L44 44"/><circle class="a" cx="24" cy="22" r="5"/><circle class="f" cx="24" cy="22" r="2.2"/>'],
  ["Reclamation","Metal returned as credit","Items can be reclaimed so that a future purchase may be credited. Our general policy is to credit 90% of the metal value, minus a reclamation fee.",'<path d="M14 30A14 14 0 0 1 40 22"/><path class="a" d="M42 26A14 14 0 0 1 16 34"/><path d="M36 16L40 22L33 24"/><path class="a" d="M20 40L16 34L23 32"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Precious-metal products<span class="nomob"> · Las Vegas, since 1986</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Precious metals,</span> <span class="l nw">made to your</span> <span class="l nw"><em>exact specification.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Refining Systems fabricates precious-metal products for the industrial and scientific community: sputtering targets, tubing, wire, bands, sheets and foils, from 99.5% to 99.999% pure.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the product line '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Experience. Quality. Reliability.</span>'+
   '<h2 class="txt" id="mani">Since 1986, Refining Systems has made precious-metal products for high-tech industries, research facilities and laboratories, built on <em class="nw">honesty and dependability.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1986</span><p class="k">The year Refining Systems began manufacturing precious-metal products</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">99.999%</span><p class="k">The highest purity we make, from a range that starts at 99.5%</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+ yrs</span><p class="k">Manufacturing experience of the metallurgist on our design team</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a part is made</span><h2 class="d3">From melt <em class="nw">to specification.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Melt</span><span>Roll</span><span>Finish</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Melted, pure or alloyed.</h2><p>Each part starts as metal melted to the purity you specify, from 99.5% to 99.999%, in pure form or alloyed with other precious metals.</p></article>'+
     '<article class="step"><h2>Rolled and drawn.</h2><p>Rolling, wire drawing and stamping bring the metal to sheet, foil, wire or tubing at the size you need. Annealing is offered at no additional charge on many products.</p></article>'+
     '<article class="step"><h2>Turned, lapped, polished.</h2><p>Turning, surface grinding, flat lapping and polishing finish the part to your drawing, such as a sputtering target on its backing plate.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Your vision, <em>made real.</em></h2></div><p data-r>We offer a wide range of custom services. Contact us for a free consultation, and if we can’t make the part you need, chances are we know someone who can.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Capabilities</span><p class="cr" data-r>'+CAPS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">The product line, <em>made to order.</em></h2></div><p data-r>Our product line is tailored to the needs of high-tech industries, research facilities, mining laboratories and countless other trades. Quotations follow current metal rates.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Also made</span><p class="cr" data-r>'+MORE.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Our reputation <em>speaks for itself.</em></h2></div><p data-r>We offer an unconditional guarantee on all of our products. If you are not satisfied with our service, we will do everything in our power to make it right.</p></div>'+
   '<div class="pq">'+
    '<figure><span class="lab" data-r>A word from our President</span><blockquote data-r>“I would like to thank all our current and past clients for choosing to do business with Refining Systems, Inc. Your dedication to the worldwide industrial and scientific community has been critical to our continued success.”</blockquote><figcaption data-r><b>Abe Dayani</b>President</figcaption></figure>'+
    '<figure class="sm"><span class="lab" data-r>A few words from our clients</span><blockquote data-r>“We continue to order from Refining Systems because your pricing has always been consistent with the market rates and our orders have always been to specification.”</blockquote><figcaption data-r><b>Kris Bastian</b>Client</figcaption></figure>'+
   '</div>'+
   '<ul class="keys">'+
    '<li><span class="lab" data-r>Guarantee</span><p data-r>We guarantee satisfaction on every order.</p></li>'+
    '<li><span class="lab" data-r>Fair pricing</span><p data-r>Quotations are based on current market rates, for competitive and fair pricing.</p></li>'+
    '<li><span class="lab" data-r>On time</span><p data-r>We dedicate the resources needed, and streamline their use, to meet order deadlines.</p></li>'+
    '<li><span class="lab" data-r>Reliable</span><p data-r>A reliable and honest organization that stands behind its products.</p></li>'+
   '</ul>'+
   '<div class="bk"><span class="lab kick" data-r>On the show floor</span><p class="cr" data-r><a class="ul" href="https://mdmwest26.mapyourshow.com/8_0/exhibitor/exhibitor-details.cfm?exhid=248636" target="_blank" rel="noopener">MD&amp;M West 2026, Anaheim · Booth 555</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Tell us what <em>you need made.</em></h2>'+
   '<p class="sub" data-r>For questions, consultations or to place an order, call or email us. We are open Monday through Friday, closed on major holidays.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the sales team '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Mailing address</span><p data-r>Refining Systems, Inc.<br>P.O. Box 72466<br>Las Vegas, NV 89170</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Hours</span><p data-r>Monday to Friday<br>Closed on major holidays</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Mailing address</span>Refining Systems, Inc.<br>P.O. Box 72466, Las Vegas, NV 89170</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/process">Process</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Products</span>Sputtering targets<br>Tubing and wire<br>Bands, sheets and foils<br>Crucibles and powders</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Gelasio\',Georgia,serif;font-weight:700;font-size:56px;letter-spacing:-.01em">REFINING SYSTEMS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Refining Systems, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",products:"products",services:"services",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Refining Systems, Inc. — Precious-metal products made to specification, Las Vegas",x:"Home"};
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
