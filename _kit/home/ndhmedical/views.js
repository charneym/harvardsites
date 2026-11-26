/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function platRows(){return '<div class="plat">'+PLAT.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function tubeRows(){return '<ul class="pfr path nt">'+TUBES.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function matRows(){return '<ul class="nmat">'+MATS.map(function(m){return '<li><h3>'+esc(m[0])+'</h3><p>'+esc(m[1])+'</p></li>'}).join("")+'</ul>'}
function valRows(){return '<ul class="ex nval">'+VALUES.map(function(v){return '<li><span class="lab">'+esc(v[1])+'</span><h3>'+esc(v[0])+'</h3><p>'+esc(v[2])+'</p></li>'}).join("")+'</ul>'}
function showRows(){return '<ul class="rows">'+SHOWS.map(function(n){return '<li><a class="row-a" href="'+n[3]+'" target="_blank" rel="noopener"><span class="nm"><span class="lab">'+esc(n[0])+'</span></span><span class="rt"><h3>'+esc(n[1]).split(", ").map(function(x){return '<span class="nw">'+x+'</span>'}).join(", ")+'</h3><span class="loc">'+esc(n[2])+'</span></span><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Contract manufacturing<span class="nomob"> · St. Petersburg, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Medical tubing,</span> <span class="l"><em>extruded to order.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NDH Medical is an ISO 13485:2016 certified contract manufacturer of single-use medical devices: custom single-lumen, multi-lumen, coextruded, taper and braid-reinforced tubing, with molding, assembly and packaging under one roof.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capabilities">Our capabilities '+ARR+'</a><a class="btn" href="#/process">How extrusion works</a></div></div>'+
   '<span class="lab cap">Striped multi-lumen tubing · render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap"><div class="mrow">'+
   '<div class="mani-in"><span class="lab kick" data-r>NDH Medical · Working Together for Life</span>'+
   '<h2 class="txt" id="mani"><span class="nw">From development trials</span> <span class="nw">to high-volume production,</span> <span class="nw">NDH Medical extrudes</span> <span class="nw">custom tubing for</span> <span class="nw">the medical device industry.</span> <b class="w0"><span class="nw">Its tooling is designed</span> <span class="nw">and built in-house,</span> <span class="nw">for quick turnaround</span> <span class="nw">on orders and trials.</span></b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">13485</span><p class="k">ISO 13485:2016 certified, with a quality system that complies with FDA Quality System Regulations</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150 t</span><p class="k">Thermoplastic injection and insert molding on machines up to 150 ton</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">14</span><p class="k">Polymer families on NDH’s materials sheet, from CAP and EVA to TPE and TPU</p></div>'+
   '</div></div>'+
   platRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Process</span><h2 class="d3"><span class="nw">Pellet in,</span> <em class="nw">tubing out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Melt</span><span>Die</span><span>Bath</span><span>Haul-off</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The extruder.</h2><p>Extrusion is a continuous process. Plastic pellets feed from the hopper into the extruder, whose screw mixes, melts and meters the plastic.</p></article>'+
     '<article class="step"><h2>The die.</h2><p>The melted plastic is pumped through a die of the desired shape: here the profile of a multi-lumen tube. NDH designs and builds its dies in-house.</p></article>'+
     '<article class="step"><h2>The water bath.</h2><p>Once the formed extrudate leaves the die, it is cooled and supported by the water bath, which sets its size and shape.</p></article>'+
     '<article class="step"><h2>Haul-off and cut.</h2><p>The haul-off pulls the extrudate through the bath. Leaving it, the plastic is solid, and is cut to length or spooled.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="capabilities" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split"><span class="nw">Simple components</span> <em class="nw">to complex devices.</em></h2></div><p data-r>World-class custom extrusions and contract manufacturing services for the medical device industry, with product development, packaging, sterilization management and order fulfillment.</p></div>'+
   tubeRows()+
  '</div></section>'+

  '<section class="sec dark" id="materials" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Materials</span><h2 class="d2 split"><span class="nw">The resins</span> <em class="nw">we run.</em></h2></div><p data-r>Some of the materials NDH Medical routinely processes, by generic name and tradename. The list is not exhaustive: new materials are evaluated on an ongoing basis.</p></div>'+
   matRows()+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Quality involves</span> <em class="nw">every employee.</em></h2></div><p data-r>NDH Medical’s quality management system complies with the FDA Quality System Regulations and conforms to ISO 13485 (certificate FM 620542).</p></div>'+
   '<div class="quote nq"><blockquote data-r>“All products sold by NDH Medical will have been demonstrated to be capable of proper function in terms of their <em>intended use.</em>”</blockquote>'+
    '<div class="meta"><span class="lab" data-r>Quality policy</span><p data-r><b>Geary A. Havran</b>, President</p><p data-r>Each product shall conform to the requirements specified by the customer, under an unending commitment to continual improvement.</p></div></div>'+
   valRows()+
  '</div></section>'+

  '<section class="sec dark2" id="shows" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Trade shows</span><h2 class="d2 split"><span class="nw">Meet us</span> <em class="nw">on the show floor.</em></h2></div><p data-r>NDH Medical exhibits its products and services at the industry’s leading trade shows. Bring your requirements to its staff at the next one.</p></div>'+
   showRows()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Quotations and samples</span>'+
   '<h2 class="big split"><span class="nw">Send us</span> <em class="nw">your profile.</em></h2>'+
   '<p class="sub" data-r>Ask for a tubing quotation, literature or your nearest sales representative. For a more complex project, write or call NDH Medical directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters and plant</span><p data-r><span class="bl">11001 Roosevelt Blvd. N., Suite 800</span><span class="bl">St. Petersburg, FL 33716-2338</span></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+17275702293">727-570-2293</a></p><p data-r class="fx">Facsimile 727-570-3793</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p data-r><a class="ul" href="https://www.linkedin.com/company/ndhmedical/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>11001 Roosevelt Blvd. N., Suite 800<br>St. Petersburg, FL 33716-2338</div>'+
   '<div class="c"><span class="lab">Certified</span>ISO 13485:2016<br>Certificate FM 620542</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/process">Process</a><br><a class="ul" href="#/materials">Materials</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/shows">Trade shows</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+17275702293">727-570-2293</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.02em"><tspan fill="#b4d544">NDH</tspan><tspan dx="18">MEDICAL</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NDH Medical, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",process:"story",capabilities:"capabilities",materials:"materials",quality:"quality",shows:"shows",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NDH Medical — custom medical tubing extrusion and contract manufacturing, St. Petersburg, Florida",x:"Home"};
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
