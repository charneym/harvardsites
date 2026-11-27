/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr prod">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["BIOPOT3","Wireless biopotential","A customisable, clinical-grade wearable platform: up to 24 channels of EEG/EMG with bio-impedance and an accelerometer over Bluetooth Low Energy. Built into fabric headbands, arm wearables, around-the-ear EEG or sub-hairline stickers.",
   '<path d="M6 34C14 34 16 20 22 20S30 44 36 44 42 26 50 26"/><path class="a" d="M6 46H50"/><circle class="f" cx="22" cy="20" r="2.6"/>'],
  ["BIOCHEM","Electrochemical sensing","A multi-sensor wearable that couples electrochemistry with biopotentials: a potentiostat, up to 2 channels of EEG/EMG, bio-impedance, PPG and an accelerometer, to read chemical and electrical signals together.",
   '<path d="M20 8V24L9 44a3 3 0 0 0 3 4H44a3 3 0 0 0 3-4L36 24V8"/><path d="M17 8H39"/><path class="a" d="M14 36H42"/><circle class="f" cx="28" cy="41" r="2.6"/>'],
  ["BIOSTIM","Closed-loop stimulation","Built on BIOCHEM to deliver accurate electrical stimulation driven by other readings or preset settings, with customised current waveforms, closed-loop control, a software kit and demonstration electrode systems.",
   '<path d="M6 30H16V18H26V38H36V30H50"/><path class="a" d="M6 46H50"/><circle class="f" cx="26" cy="38" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neuro product development<span class="nomob"> · Nazareth, Israel</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Democratizing</span><span class="l">neuro</span><span class="l"><em>technologies.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SensoMedical designs, qualifies and manufactures the electrodes, wearables and active implants that turn neuroscience research into commercial products, all under one roof. Its <span class="nw">Wovyn Depth Electrode</span> received FDA 510(k) clearance in April 2026.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we build it '+ARR+'</a><a class="btn" href="#/products">The products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><h2 class="lab kick mk-h" data-r>Why SensoMedical</h2>'+
   '<p class="txt" id="mani">Inventing a breakthrough neurotechnology is only the first step. SensoMedical takes it the rest of the way, from design and regulatory work <em>to mass production.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">FDA 510(k) clearances for its SEEG depth electrodes: SENSOSEEG in 2023 and Wovyn in 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24</span><p class="k">Channels of wireless EEG/EMG on BIOPOT3, its wearable development platform</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6 mo</span><p class="k">From neuro innovation to product on BIOPOT3, against the usual one to two years</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From concept to cleared product</span><h2 class="d3">One electrode, <em>built in-house.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Design</span><span>Qualify</span><span>Clear</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Designed around the signal.</h2><p>Every electrode starts from what it must record or stimulate. On the Wovyn Depth Electrode that means 4 to 16 platinum/iridium contacts, 1.5 to 3 mm long, on a jacket 0.8 to 2.0 mm across.</p></article>'+
     '<article class="step"><h2>Qualified under one roof.</h2><p>Each contact runs on its own conductor back to the connector. SensoMedical tests in-house, from mechanical and microscopic inspection to impedance, charge injection and aging simulation.</p></article>'+
     '<article class="step"><h2>Cleared, and made to scale.</h2><p>A stylet guides placement, and the electrode is supplied sterile for single use up to 30 days. Wovyn was cleared by the FDA on 17 April 2026, and SensoMedical takes production from first batches to scale-up.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Platforms that <em>start ahead.</em></h2></div><p data-r>Near-clinical, modular hardware for biopotential, neurostimulation and electrophysiology products. Use a platform as it is, have it tailored to your requirements, or start a new device from scratch, backed by engineering, quality and regulatory teams.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the scalp <em>to the deep brain.</em></h2></div><p data-r>Cleared depth electrodes, wearable EEG kits, and custom electrodes and active implants that SensoMedical develops and manufactures for its clients as OEM products.</p></div>'+
   prodRows(PROD)+
   '<div class="bk"><span class="lab kick" data-r>Applications</span><p class="cr" data-r>'+APPS.map(function(a,i){return '<span>'+esc(a)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Every discipline, <em>one team.</em></h2></div><p data-r>A neuro product needs electrode design, electronics, software, materials and regulatory work at once. SensoMedical brings them together with a founder who has built neuroscience devices for more than two decades.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Expertise</span><p class="cr" data-r>'+DISC.map(function(a,i){return '<span>'+esc(a)+'</span>'}).join("")+'</p></div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Israel</span><p data-r>Headquarters, R&amp;D, manufacturing, marketing and sales, at the Industrial Park on Mount Precipice in Nazareth.</p></div>'+
    '<div><span class="lab kick" data-r>United States</span><p data-r>SensoMedical Inc., in Boston, for marketing, sales and customer support across the USA and Canada.</p></div>'+
    '<div><span class="lab kick" data-r>United Kingdom</span><p data-r>Represented by Nova Bioelectrics Ltd. at Cardiff Medicentre, Heath Park, Cardiff.</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, startups and device companies</span>'+
   '<h2 class="big split">Bring us <em>your idea.</em></h2>'+
   '<p class="sub" data-r>Whether you are at pre-seed proof of concept or ready for production, SensoMedical will help you get your neuro project on the road.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email SensoMedical '+ARR+'</a><a class="btn" href="#/technology">See the platforms</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>SensoMedical Labs Ltd.<br>Industrial Park Building, Mount Precipice<br>P.O. Box 2653, Nazareth 1612102, Israel</p></div>'+
    '<div><span class="lab" data-r>Israel</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+97246800668">+972 4 680 0668</a></p></div>'+
    '<div><span class="lab" data-r>USA and Canada</span><p data-r><a class="ul" href="mailto:'+UMAIL+'">'+UMAIL+'</a><br>265 Franklin Street, Suite 1702, Boston, MA 02110</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Mount Precipice<br>Nazareth, Israel</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/about">About</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">FDA cleared</span>Wovyn Depth Electrode<br>SENSOSEEG Depth Electrodes</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:400;font-size:58px;letter-spacing:.16em">SENSOMEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SensoMedical Labs Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",technology:"technology",products:"products",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SensoMedical — neuro electrodes, wearables and implants, from concept to cleared product · Nazareth, Israel",x:"Home"};
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
