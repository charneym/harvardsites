/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Transmit and receive","Coils that both send the radiofrequency pulse and listen to the signal that returns, such as the 2Tx-28Rx knee and the 16-channel transmit-receive knee and hand-wrist coils.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 4v8M28 44v8M4 28h8M44 28h8"/><circle class="f" cx="28" cy="28" r="3.5"/>'],
  ["Ultra-high field","Arrays for 7 tesla, with up to eight independent transmit channels, with parallel transmit, and as many as 30 receive elements.",'<path d="M10 44V20M20 44V14M30 44V24M40 44V10"/><path class="a" d="M6 48h44"/><circle class="f" cx="40" cy="10" r="3"/>'],
  ["Low-noise electronics","NIH-funded SBIR research on miniature low-noise, high-quality MRI preamplifiers, and NIH contracts for dedicated pediatric cardiac MRI receive coils.",'<path d="M14 16l26 12-26 12z"/><path class="a" d="M4 28h10M40 28h12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Quality</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From qedinnovations.com. Product clearances from the U.S. FDA 510(k) database.</p></div></div>'}
function vals(){return '<div class="bk"><span class="lab kick" data-r>Our values</span><p class="cr" data-r>'+VALUES.map(function(v,i){return (i?'<i>·</i>':'')+'<span>'+v+'</span>'}).join("")+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>MRI radiofrequency coils<span class="nomob"> · Mayfield Village, Ohio</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Engineering</span><span class="l">the antennas</span><span class="l">of <em>MRI.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Quality Electrodynamics (QED) designs and manufactures radiofrequency coils, the antennas of magnetic resonance imaging, for the world’s leading MRI system makers and researchers.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How a coil works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">Every MR image begins as a faint radio signal from the body. Since 2006, QED has engineered the coils that send and receive it, <em>for MRI systems from Canon, GE and Siemens Healthineers.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2006</span><p class="k">Founded in Mayfield Village, Ohio, by research physicist Dr. Hiroyuki Fujita</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7 T</span><p class="k">Ultra-high-field arrays with up to 8 transmit and 30 receive channels</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">77,000</span><p class="k">Square feet of innovation and manufacturing space in Mayfield Village</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a coil works</span><h2 class="d3">From a radio pulse <em>to an image.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Transmit</span><span>Receive</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The coil sends a pulse.</h2><p>Inside the scanner’s magnet, the hydrogen nuclei in the body align with the field. A transmit coil sends a short radiofrequency pulse that tips them out of alignment.</p></article>'+
     '<article class="step"><h2>The array listens.</h2><p>As the nuclei relax they give off a faint radio signal. An array of small receive elements, shaped close to the anatomy, picks it up, each through its own low-noise preamplifier.</p></article>'+
     '<article class="step"><h2>Channels become an image.</h2><p>The scanner combines the signals from every channel into the image. More elements, closer to the body, mean a stronger signal over noise and faster scans.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">RF coils, from research <em>to production.</em></h2></div><p data-r>QED applies innovation to new MRI technology for radiofrequency antennas and coils, and covers it with its own patents in the United States, Japan and China.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Coils for the systems <em>hospitals use.</em></h2></div><p data-r>QED supplies leading MRI makers and researchers around the world. Operator manuals for the Canon, GE and Siemens Healthineers devices QED manufactures are published online.</p></div>'+
   pipeRows(PROD)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by a <em>research physicist.</em></h2></div><p data-r>Scientists, engineers and operations specialists, supported by a world-class organizational infrastructure and led by Dr. Hiroyuki Fujita, with a board of medical, business and manufacturing leaders.</p></div>'+
   team()+vals()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Clearances <em>and milestones.</em></h2></div><p data-r>Recent FDA clearances and company news, linked to their sources.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>QED.</em></h2>'+
   '<p class="sub" data-r>We welcome all inquiries, by telephone Monday to Friday, 8:00 AM to 5:00 PM Eastern, or through our online form.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+TEL+'">Call QED '+ARR+'</a><a class="btn" href="'+FORM+'" target="_blank" rel="noopener">Online form</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Quality Electrodynamics<br>6655 Beta Dr., Suite 100<br>Mayfield Village, OH 44143</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TEL+'">+1 (440) 638-5106</a></p></div>'+
    '<div><span class="lab" data-r>Hours</span><p data-r>Monday – Friday<br>8:00 AM – 5:00 PM ET</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>6655 Beta Dr., Suite 100<br>Mayfield Village, OH 44143</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TEL+'">+1 (440) 638-5106</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Certified</span>ISO 13485:2016 (BSI FM 702781) · MDSAP 683565</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Source Sans 3\',sans-serif;font-weight:400;font-size:52px">QUALITY ELECTRODYNAMICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Quality Electrodynamics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Quality Electrodynamics (QED) — MRI radiofrequency coils, Mayfield Village, Ohio",x:"Home"};
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
