/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+c[0]+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Stabilized Type I collagen","Extracted, reconstituted Type I collagen, stabilized to resist rapid proteolysis so it is not digested prematurely in the wound bed. Biocompatible, cell friendly, and sterilized to SAL 10<sup>&#8722;6</sup>.",'<path d="M10 40c8-2 10-22 18-24s10 18 18 16"/><path d="M10 30c8-2 10-22 18-24s10 18 18 16"/><path class="a" d="M10 50c8-2 10-22 18-24s10 18 18 16"/>'],
  ["Conformable and absorbent","Conforms easily for maximum contact with the wound bed, and its hydrophilic scaffold rapidly absorbs fluid, 0.5 cc per square centimetre, while maintaining moisture balance.",'<path d="M8 22h40"/><path d="M8 22c4 14 12 22 20 22s16-8 20-22"/><circle class="f" cx="20" cy="34" r="2.2"/><circle class="f" cx="28" cy="38" r="2.2"/><circle class="f" cx="36" cy="34" r="2.2"/>'],
  ["Porous and remodelable","A porous matrix enables host cell infiltration, and the collagen is remodelable, supporting full closure of hard-to-heal wounds with minimal repeat application.",'<rect x="10" y="12" width="36" height="32"/><circle cx="20" cy="22" r="3.4"/><circle cx="34" cy="21" r="4"/><circle cx="27" cy="33" r="3.6"/><circle class="f" cx="39" cy="36" r="2.4"/><circle class="f" cx="16" cy="37" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Why bio-ConneKt</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From mlmbiologics.com. For complete indications and instructions, see the bio-ConneKt<sup>&#174;</sup> package insert.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>bio-ConneKt<sup>&#174;</sup> Wound Matrix<span class="nomob"> · FDA-cleared</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Wound closure,</span><span class="l">not just wound</span><span class="l"><em>management.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MLM Biologics makes bio-ConneKt<sup>&#174;</sup> Wound Matrix, an all-collagen, FDA-cleared dressing for hard-to-heal wounds, produced in an ISO 13485-certified facility in Alachua, Florida.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/product">The products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>More for Less for Many</span>'+
   '<h2 class="txt" id="mani">Founded on a modern reading of Gandhi&#8217;s economic principle, MLM uses its expertise in the chemistry and biology of scaffolds, and a proprietary processing platform, <em>to deliver evidence-based solutions for wound care.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6 yr</span><p class="k">Shelf life, stored dry at room temperature, with minimal preparation at the point of use</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.5 cc</span><p class="k">Of fluid absorbed per square centimetre by the hydrophilic collagen scaffold</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150+</span><p class="k">Combined years of medical device experience in the MLM team</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A scaffold the body <em>builds into.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Conform</span><span>Infiltrate</span><span>Close</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It conforms and absorbs.</h2><p>The matrix conforms easily to ensure maximum contact with the wound bed, and its hydrophilic scaffold rapidly absorbs fluid, 0.5 cc per square centimetre.</p></article>'+
     '<article class="step"><h2>Host cells move in.</h2><p>The porous matrix enables host cell infiltration, and its stabilized collagen resists premature digestion in the wound bed.</p></article>'+
     '<article class="step"><h2>The wound closes.</h2><p>The collagen is remodelable and supports wound closure, the goal MLM designs for, rather than wound management alone.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="product" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Product</span><h2 class="d2 split">All collagen, <em>built to close.</em></h2></div><p data-r>bio-ConneKt<sup>&#174;</sup> Wound Matrix is a next-generation, all-biologic, FDA 510(k)-cleared wound dressing of reconstituted Type I collagen, made by MLM in its own ISO 13485-certified facility.</p></div>'+
   caps()+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec dark2" id="clinicians" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinicians</span><h2 class="d2 split">High-tech, <em>low-touch.</em></h2></div><p data-r>bio-ConneKt<sup>&#174;</sup> succeeds at chronic wound resolution where other treatments fail, at times as a last resort, and has assisted in reducing the need for amputations, while lowering the total cost of wound healing.</p></div>'+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The Wound <em>Closure team.</em></h2></div><p data-r>The team runs product development, manufacturing, quality control and distribution, assisted by a core group of consultants on regulatory, quality, clinical and reimbursement work, with more than 150 combined years in medical devices.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>MLM.</em></h2></div><p data-r>Clearances, partnerships and awards for MLM Biologics and bio-ConneKt<sup>&#174;</sup>.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Patients, clinicians and partners</span>'+
   '<h2 class="big split">Talk to <em>MLM.</em></h2>'+
   '<p class="sub" data-r>Whether you are a patient, a doctor or a distributor, or exploring a collaborative partnership around MLM&#8217;s technology platform, contact us. We respond within one business day.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to MLM '+ARR+'</a><a class="btn" href="#/product">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>MLM Biologics, Inc.<br>13700 Progress Blvd<br>Alachua, FL 32615</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="'+MAIL+'">customerservice@mlmbiologics.com</a><br>1-844-4-MLM-BIO</p></div>'+
    '<div><span class="lab" data-r>U.S. orders</span><p data-r>BioWound Solutions, Inc.<br>Las Vegas, Nevada<br><a class="ul" href="mailto:contact@biowound.com">contact@biowound.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>13700 Progress Blvd<br>Alachua, FL 32615</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">customerservice@mlmbiologics.com</a><br>1-844-4-MLM-BIO</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/product">Product</a><br><a class="ul" href="#/clinicians">Clinicians</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>bio-ConneKt<sup>&#174;</sup> · epi-ConneKt&#8482;</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Barlow\',sans-serif;font-weight:500;font-size:76px">MLM BIOLOGICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MLM Biologics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",product:"product",clinicians:"clinicians",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MLM Biologics — collagen wound matrices for wound closure",x:"Home"};
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
