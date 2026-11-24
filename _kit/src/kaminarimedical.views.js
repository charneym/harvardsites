/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function feats(){return '<div class="caps kmd-caps">'+FEAT.map(function(c,i){return '<div class="cap"><span class="lab">0'+(i+1)+'</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function pathRows(){return '<ul class="pfr kmd-path">'+PATH.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function people(label,list){
  return '<div class="mh-group"><p class="mh-label">'+esc(label)+'</p><ul class="mh-list">'+list.map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Intravascular imaging<span class="nomob"> · Rotterdam, the Netherlands</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Seeing plaque</span><span class="l"><em>in a new light.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kaminari Medical is developing an imaging catheter that combines ultrasound and photoacoustics, to show both the structure and the composition of the plaques that block the coronary arteries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap kmd-mani">'+
   '<div class="mani-in"><span class="lab kick" data-r>Erasmus MC spin-off, founded 2020</span>'+
   '<h2 class="txt" id="mani">Kaminari Medical is pioneering the next generation of intravascular imaging, <em>to give physicians deeper insight into vulnerable plaques during life-saving interventions.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">300M+</span><p class="k">People affected by coronary artery disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4M</span><p class="k">Patients assessed with intracoronary imaging each year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12%</span><p class="k">Return due to underassessment of unstable plaque</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Hearing the flash <em>of light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Flash</span><span>Sound</span><span>Image</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A flash of light inside the artery.</h2><p>From within the coronary artery, the catheter sends a short pulse of light into the vessel wall and the plaque around it.</p></article>'+
     '<article class="step"><h2>The plaque answers with sound.</h2><p>Where the light is absorbed, in lipid-rich plaque above all, the tissue sends back an ultrasound wave. The catheter hears the flash of light impact the plaque.</p></article>'+
     '<article class="step"><h2>Structure and composition, in one image.</h2><p>Intravascular ultrasound (IVUS) images the structure of the vessel wall; intravascular photoacoustics (IVPA) adds its composition. One system, both views, in real time.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Structure and composition, <em>from one catheter.</em></h2></div><p data-r>Kaminari Medical’s patented intravascular imaging technology combines photoacoustics and ultrasound to qualify plaque composition in real time, particularly the lipid-rich plaques that pose the greatest risk of rupture.</p></div>'+
   '<div class="kmd-tech"><figure class="kmd-fig" data-r><img src="p-catheter.webp" alt="A Kaminari Medical imaging catheter held over a sterile drape" width="1280" height="655" loading="lazy" decoding="async"></figure>'+
    '<div class="kmd-aims"><span class="lab kick" data-r>This aims to support</span><ul>'+AIMS.map(function(a){return '<li data-r>'+esc(a)+'</li>'}).join("")+'</ul></div></div>'+
   feats()+
   '<p class="kmd-disc" data-r>Clinical investigations are pending to cover these claims. Kaminari Medical products do not have CE or FDA clearance yet.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="development" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Growth journey</span><h2 class="d2 split">From the lab <em>to first-in-human.</em></h2></div><p data-r>Kaminari Medical was founded in 2020 as a spin-off of Erasmus Medical Centre in Rotterdam. The next step is a first-in-human study, in preparation with Erasmus MC.</p></div>'+
   pathRows()+
   '<div class="kmd-uq"><span class="lab kick" data-r>What makes Kaminari Medical unique</span><ul>'+UNIQUE.map(function(a){return '<li data-r>'+esc(a)+'</li>'}).join("")+'</ul></div>'+
   '<div class="bk"><span class="lab kick" data-r>Investors and grants include</span><p class="cr" data-r>'+BACK.map(function(n){return '<span>'+esc(n)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The team</span><h2 class="d2 split">Three decades <em>in intravascular imaging.</em></h2></div><p data-r>The inventors lead intravascular imaging research at the Thorax Center of Erasmus MC. The CEO has guided several vascular technologies through development to market. Advisors include interventional cardiologists and imaging scientists from Erasmus MC, Lund, Portsmouth, Columbia, Harvard and MIT, and Toronto.</p></div>'+
   '<div class="mh kmd-mh">'+people("Team",TEAM)+people("Advisory board",ADV)+'</div>'+
   '<p class="kmd-hire" data-r><b>Careers.</b> Kaminari Medical is hiring a Mechanical Engineer and an Electrical Engineer.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest <em>from Kaminari.</em></h2></div><p data-r>Grants, programmes and new people, from Rotterdam to Cedars-Sinai.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Interested in <em>our technology?</em></h2>'+
   '<p class="sub" data-r>Contact us for more information about the technology.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Kaminari Medical '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Kaminari Medical B.V.<br>Erasmus Medical Center<br>Dr Molewaterplein 40, Ba 595<br>3015 GD Rotterdam, the Netherlands</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@kaminarimedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+31653784755">+31 (0)6 53 784 755</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Erasmus Medical Center<br>Dr Molewaterplein 40, Ba 595<br>3015 GD Rotterdam</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@kaminarimedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/development">Development</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Note</span>Kaminari Medical products do not have CE or FDA clearance yet.</div>'+
  '</div><div class="bigsvg kmd-bw" aria-hidden="true"><img src="logo-w.svg" alt="" width="881" height="284"></div>'+
  '<div class="legal"><span class="lab">© 2026 Kaminari Medical B.V.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",development:"development",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kaminari Medical — intravascular photoacoustic and ultrasound imaging",x:"Home"};
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
