/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Adjustable height and lordosis","From a small 4.5 mm starting height, HiJAK AC gives 2.5 mm of continuous anterior and 1.25 mm of posterior expansion, for up to 20° of lordotic correction and indirect decompression.",'<path d="M12 44h32"/><path class="a" d="M12 12l32 6"/><path d="M14 44V14M42 44V18"/>'],
  ["Unobstructed graft chamber","An open graft chamber that can be packed after expansion, on an anatomically contoured cephalad endplate, in small and large footprint options.",'<path d="M10 14h36v28H10z"/><path d="M20 22h16v12H20z"/><circle class="f" cx="25" cy="27" r="1.6"/><circle class="f" cx="31" cy="29" r="1.6"/><circle class="f" cx="27" cy="31" r="1.4"/>'],
  ["Proprietary surface","A subtractive process creates an irregular nano- and micro-scale surface with “hook like” features, supportive to bony apposition. The same kind of structure has been used for decades in dental implants.",'<path d="M8 38h40"/><path class="a" d="M8 38l4-8 3 5 4-10 3 7 4-9 3 6 4-11 3 8 4-6 4 9"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>FDA 510(k) clearances</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Atlas Spine, Inc., Jupiter, Florida, in the FDA 510(k) database.</p></div></div>'}
function voices(){return '<div class="vox"><span class="lab kick" data-r>Surgeons on Atlas systems</span><ul>'+VOICES.map(function(v){return '<li><blockquote data-r>“'+esc(v[0])+'”</blockquote><p class="vn" data-r><b>'+esc(v[1])+'</b><span>'+esc(v[2])+'</span></p></li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Expandable spinal implants<span class="nomob"> · Jupiter, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Height and lordosis,</span><span class="l"><em>dialed in.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Atlas Spine designs, manufactures and markets minimally invasive implants and instrument systems for the spine, led by HiJAK, the first expandable cervical interbody with adjustable height and lordosis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How HiJAK works '+ARR+'</a><a class="btn" href="#/products">Our systems</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Fusing science with simplicity</span>'+
   '<h2 class="txt" id="mani">Working closely with some of today’s top spine surgeons, Atlas develops innovative, cost-effective, high-quality and clinically efficacious systems, and has served as a trusted design resource for <em>some of the largest players in the medical device industry.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4.5 mm</span><p class="k">HiJAK AC starting height, before expansion</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20°</span><p class="k">Up to 20 degrees of lordotic correction, dialed in level by level</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">FDA 510(k) clearances since November 2024</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How HiJAK works</span><h2 class="d3">Expand in place, <em>restore the curve.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Insert</span><span>Expand</span><span>Pack</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Insert it small.</h2><p>HiJAK AC goes into the disc space at a 4.5 mm starting height, so less cortical endplate has to be removed and less impaction force is needed to seat it.</p></article>'+
     '<article class="step"><h2>Expand, more at the front.</h2><p>2.5 mm of continuous anterior and 1.25 mm of posterior expansion restore height and lordosis together, up to 20°, with indirect decompression. Each level can be adjusted to dial in overall balance.</p></article>'+
     '<article class="step"><h2>Pack the graft after.</h2><p>The unobstructed graft chamber is packed after expansion, between endplates with Atlas’ proprietary subtractive surface.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Built for <em>sagittal balance.</em></h2></div><p data-r>Clinical studies have shown short- and long-term benefits of restoring sagittal balance to the cervical spine. HiJAK lets the surgeon adjust each implant to the patient instead of choosing a fixed angle up front, and rely less on distraction pins for higher lordotic angles.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">An expandable <em>platform.</em></h2></div><p data-r>From the cervical spine to lateral lumbar fusion and corpectomy, alongside Rebar and Stature spacers, Verteview plates, Apelo and Apelo MIS pedicle screws and the Back-Pak discectomy set.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Design, manufacturing, <em>distribution.</em></h2></div><p data-r>Atlas Spine creates, manufactures and markets its own systems from Jupiter, Florida, and has established a reputation as an innovator in the spine implant industry.</p></div>'+
   team()+
   voices()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Atlas.</em></h2></div><p data-r>Clearances and launches across the expandable platform.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, hospitals and distributors</span>'+
   '<h2 class="big split">Talk to <em>Atlas Spine.</em></h2>'+
   '<p class="sub" data-r>Atlas welcomes inquiries for distribution of its growing product portfolio and hospital affiliations. Write to us or call 561-741-1108.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Atlas '+ARR+'</a><a class="btn" href="#/products">See the systems</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Atlas Spine, Inc.<br>1555 Jupiter Park Drive<br>Jupiter, FL 33458</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">sales@atlasspine.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r>561-741-1108</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1555 Jupiter Park Drive<br>Jupiter, FL 33458</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">sales@atlasspine.com</a><br>561-741-1108</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Systems</span>HiJAK AC · HiJAK SA · HiJAK LLIF · HiRISE · V3</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:500;font-size:62px;letter-spacing:4px">ATLAS SPINE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Atlas Spine, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Atlas Spine — expandable spinal implants",x:"Home"};
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
