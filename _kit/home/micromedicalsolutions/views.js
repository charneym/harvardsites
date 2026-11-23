/* ================= VIEWS (home only: CLTI / MicroStent / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function team(){return '<ul class="ptg">'+TEAM.map(function(p){
  return '<li><figure class="pti" data-r><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" width="560" height="560" loading="lazy" onerror="this.style.visibility=\'hidden\'"></figure><h3 data-r>'+esc(p.name)+'</h3><span class="lab ptr" data-r>'+esc(p.title)+'</span><p data-r>'+esc(p.sum)+'</p></li>'}).join("")+'</ul>'}
function lead2(){return '<div class="mh"><div><p class="mh-label" data-r>Leadership team</p><ul class="mh-list">'+LEAD2.map(function(p){
  return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div></div>'}
function specs(){var S=[
  ["Platform architecture","48-strand braided nitinol","A continuous braided architecture designed to conform to vessel anatomy while maintaining consistent wall apposition."],
  ["Visibility","Platinum-core technology","An integrated platinum core in each ultra-low-profile round nitinol strand (under 50 microns), plus radiopaque shaft markers for placement."],
  ["Vessel preservation","Low chronic outward force","Gentle, continuous vessel support designed to minimise chronic stress on the vessel wall."],
  ["Mechanical performance","Optimised radial resistive force","Engineered to resist compression while keeping long-term support in highly complex vessel anatomy."]];
  return '<ul class="pfr">'+S.map(function(r){return '<li><span class="lab tg" data-r>'+esc(r[0])+'</span><h3 data-r>'+esc(r[1])+'</h3><p data-r>'+esc(r[2])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Below-the-knee interventions<span class="nomob"> · Woburn, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Leave the</span><span class="l"><em>right thing</em> behind.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Micro Medical Solutions is committed to reducing the number of preventable amputations, and the morbidity, mortality and burden of critical limb-threatening ischemia in people living with peripheral arterial disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/microstent">The MicroStent '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>The MicroStent™: a self-expanding stent braided from 48 nitinol strands (render).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="clti" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Against the impact of CLTI</span>'+
   '<h2 class="txt" id="mani">Critical limb-threatening ischemia brings a poor quality of life, mortality above every other form of occlusive cardiovascular disease, and a spiralling cost to the healthcare system. <em>Amputation remains, far too often, the default.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">21M+</span><span class="k">People in the U.S. living with peripheral arterial disease</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.0–3.4M</span><span class="k">People in the U.S. living with CLTI</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150K</span><span class="k">Amputations a year in the U.S.; 44–85% of those related to diabetes may be preventable</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The procedure</span><h2 class="d3">Built for the vessels <em>below the knee.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Ischemia</span><span>Access</span><span>Deploy</span><span>Scaffold</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Blood flow, blocked.</h2><p>Below-the-knee vessels are small, tortuous and unforgiving for rigid implants. When they close, the foot loses its blood supply, and without timely revascularization about a quarter of CLTI patients lose the limb within a year.</p></article>'+
     '<article class="step"><h2>A low-profile approach.</h2><p>The MicroStent™ System fits a 4 Fr introducer sheath and an 0.014″ guidewire, so it reaches distal anatomy from an antegrade, retrograde or pedal approach while minimising access trauma.</p></article>'+
     '<article class="step"><h2>Precise placement.</h2><p>A simple pin &amp; pull delivery system gives precise control, and radiopaque shaft markers, with a platinum core in every strand, help place the stent at the desired location.</p></article>'+
     '<article class="step"><h2>A permanent scaffold.</h2><p>The self-expanding, 48-strand woven nitinol stent conforms to the vessel and stays: crush-resistant support with low chronic outward force, designed to keep the lumen open in the lower leg.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="microstent" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The MicroStent™ System</span><h2 class="d2 split">Purpose-built for <em>below-the-knee</em> interventions.</h2></div><p data-r>Every aspect of the MicroStent™ Peripheral Vascular Stent System is engineered for the clinical demands of below-the-knee anatomy, balancing flexibility, visibility, deliverability and vessel support.</p></div>'+
   specs()+
   '<div class="plat kf">'+
    '<div><span class="v" data-r>48</span><span class="lab" data-r>Woven nitinol strands</span></div>'+
    '<div><span class="v" data-r>0.014″</span><span class="lab" data-r>Guidewire compatible</span></div>'+
    '<div><span class="v" data-r>4 Fr</span><span class="lab" data-r>Introducer sheath</span></div>'+
    '<div><span class="v" data-r>40 / 120 cm</span><span class="lab" data-r>Shaft lengths</span></div>'+
   '</div>'+
   '<p class="szs" data-r>Sixteen sizes for the target vessels below the knee: diameters of 3.0, 3.5, 4.0 and 4.5 mm, each in lengths of 15, 25, 40 and 60 mm.</p>'+
   '<p class="ivd dk" data-r>CAUTION: This device is the subject of a pending PMA application and has not been approved by the U.S. Food and Drug Administration. It is not available for commercial distribution in the United States.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our people</span><h2 class="d2 split">A team that has <em>brought devices to market.</em></h2></div><p data-r>Micro Medical Solutions is led by executives from AVE, Medtronic, Guidant, Volcano, Boston Scientific and Penumbra, with clinical, regulatory and commercial experience in vascular devices.</p></div>'+
   team()+lead2()+
   '<div class="bk"><span class="lab kick" data-r>Board of Directors</span><p class="cr" data-r>'+BOARD.map(function(a){return '<span>'+esc(a[0])+' <i>'+esc(a[1])+'</i></span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">On the way to <em>approval.</em></h2></div><p data-r>From FDA Breakthrough Device Designation and the STAND pivotal trial to the HEAL registry and a new leadership team.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, partners and investors</span>'+
   '<h2 class="big split">Fewer preventable <em>amputations.</em></h2>'+
   '<p class="sub" data-r>To talk about the MicroStent™ Peripheral Vascular Stent System, write to or call the Micro Medical Solutions team in Woburn.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/microstent">The MicroStent</a></div>'+
   '<div class="cinfo cgrid">'+
    '<div><span class="lab" data-r>Address</span><p data-r>175 New Boston Street, Suite H<br>Woburn, MA 01801</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+18777600677">877-760-0677</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>175 New Boston Street, Suite H<br>Woburn, MA 01801</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/clti">CLTI</a><br><a class="ul" href="#/microstent">MicroStent</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18777600677">877-760-0677</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Critical limb-threatening ischemia<br>below the knee</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:Roboto,system-ui,sans-serif;font-style:italic;font-weight:700;font-size:66px;letter-spacing:-1.5px"><tspan fill="#f5f5f5">micro medical</tspan><tspan fill="#ee5a61" dx="14" style="font-weight:300">solutions</tspan></text></svg>'+
  '<p class="lab fcau">CAUTION: The MicroStent™ is the subject of a pending PMA application and has not been approved by the U.S. FDA. It is not available for commercial distribution in the United States.</p>'+
  '<div class="legal"><span class="lab">© 2026 Micro Medical Solutions</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={clti:"clti",procedure:"story",microstent:"microstent",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Micro Medical Solutions — the MicroStent™ for below-the-knee interventions, Woburn, MA",x:"Home"};
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
