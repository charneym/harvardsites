/* ================= VIEWS (home only; nav items scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk xt2">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the program (NIH RePORTER 2R44NS132623, Phase I accomplishments and Phase II objectives) */
var APPS=[
 ["Phase I: the light source","A small, programmable, wirelessly controlled stimulator: wireless power across at least 1 cm, over 2 hours of stimulation, and a charge held for over a week."],
 ["Phase I: pain relief","In rodent models of inflammatory pain, switching on spinal GABAergic neurons cut quantified pain behaviours by 73.54% on average, against a 20% milestone."],
 ["Phase II: toward an IND","IND-enabling preclinical studies: over 70% transfection efficiency, safety in non-human primates, and an automated transfection device."]];
function apps(){return '<div class="caps nwc tst">'+APPS.map(function(c,i){return '<div class="cap"><span class="lab" data-r>Program</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var TAGS=["Non-viral","Gold nanorods","Multi-Characteristic Opsin","Low-power laser","Red LED","Wireless","Programmable","GABAergic neurons","Spinal cord"];
function bones(){return '<div class="bk cnd"><span class="lab kick" data-r>The platform, in short</span><p class="cr" data-r>'+TAGS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* the approach (opsinbio.com home: an alternative to opioids and spinal cord stimulators) */
var ICO={
 v:'<svg viewBox="0 0 56 56"><rect x="12" y="23" width="32" height="10" rx="5"/><path class="a" d="M8 12L48 44"/></svg>',
 t:'<svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="10"/><path class="a" d="M28 8V16M28 40V48M8 28H16M40 28H48"/></svg>',
 l:'<svg viewBox="0 0 56 56"><path d="M14 40H42V46H14Z"/><path class="a" d="M20 34L16 22M28 34V18M36 34L40 22"/></svg>',
 o:'<svg viewBox="0 0 56 56"><path d="M10 30C16 20 22 40 28 30C34 20 40 40 46 30"/><path class="a" d="M18 14L38 46M38 14L18 46"/></svg>'};
var SURG=[
 ["v","Non-viral delivery","No viral vector","Gold nanorods and light carry the gene in, instead of a virus."],
 ["t","Targeted","Only where it is lit","The MCO gene enters neurons where the laser falls, with very small or no detectable expression in off-target tissues in Phase I."],
 ["l","Low power","A red LED, on demand","A small implanted light source switches the neurons on, wirelessly and programmably."],
 ["o","Opioid-free","An alternative","For patients who suffer despite drugs and devices: an alternative to opioids and spinal cord stimulators."]];
function surg(){return '<div class="caps svc">'+SURG.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
/* the record: the NIH award and the posters (opsinbio.com News; NIH RePORTER) */
var EVID=[
 ["NIH NINDS · 2026","SBIR Phase II award, $1.11 million: Optogenetic Neuromodulation for Chronic Pain (2R44NS132623-02)",NIH,"NIH RePORTER"],
 ["ASGCT · 2023","Poster at the American Society of Gene and Cell Therapy annual meeting","https://www.asgct.org/","ASGCT"],
 ["ASPN · 2023","Poster at the American Society of Pain and Neuroscience annual conference","https://aspnpain.com/","ASPN"]];
function evid(){return '<ul class="nws">'+EVID.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1465" height="821" alt="Functionalized gold nanorods, the non-viral carriers of the Opsin gene therapy (illustrative render)" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Non-viral optogenetics<span class="nomob"> · Bedford, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Gene therapy</span> <span class="l">for chronic pain.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Opsin Biotherapeutics makes the spinal neurons that block pain sensitive to light, delivering a light-sensitive opsin gene with gold nanorods, so a small red LED can switch them on.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Optogenetic neuromodulation</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Over 50 million Americans</span> <span class="nw">live with chronic pain.</span> <span class="nw">Many still suffer</span> <span class="nw">on today’s drugs</span> <span class="nw">and devices.</span> <em><span class="nw">We switch on the neurons</span> <span class="nw">that block it, with light.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">73.5%</span><p class="k">average reduction in quantified pain behaviours in Phase I rodent models</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.11M</span><p class="k">NIH NINDS SBIR Phase II award, September 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;70%</span><p class="k">transfection efficiency, the Phase II target for non-viral delivery</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the therapy works</span><h2 class="d3"><span class="nw">Gold, a gene</span> <em class="nw">and red light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Encode</span><span>Bind</span><span>Light</span><span>Express</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Nanorods carry</span> <span class="nw">the gene.</span></h2><p>Functionalized gold nanorods are paired with plasmids encoding the Multi-Characteristic Opsin (MCO) gene.</p></article>'+
     '<article class="step"><h2><span class="nw">They bind</span> <span class="nw">to the neuron.</span></h2><p>After a spinal injection, the fGNRs bind to the surface of the target, pain-inhibiting GABAergic neurons.</p></article>'+
     '<article class="step"><h2><span class="nw">Light lets</span> <span class="nw">the gene in.</span></h2><p>A low-power laser on the bound nanorods delivers the MCO gene into the neuron, without a viral vector.</p></article>'+
     '<article class="step"><h2><span class="nw">Switched on,</span> <span class="nw">pain blocked.</span></h2><p>The neuron now expresses MCO; a wireless, implanted red LED turns it on, and it blocks the pain signal.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Four parts,</span> <em class="nw">one therapy.</em></h2></div><p data-r>A licensed opsin gene, a non-viral carrier, a light-based delivery step and a light source to activate it: together, a way to turn on the body’s own pain-blocking neurons.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="program" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Program</span><h2 class="d2 split"><span class="nw">From Phase I</span> <em class="nw">toward an IND.</em></h2></div><p data-r>Supported by the NIH National Institute of Neurological Disorders and Stroke through the SBIR program, now in Phase II.</p></div>'+
   apps()+bones()+
  '</div></section>'+

  '<section class="sec dark" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split"><span class="nw">Beyond opioids</span> <em class="nw">and stimulators.</em></h2></div><p data-r>Rather than masking pain or stimulating the spinal cord broadly, the therapy recruits the neurons that already inhibit pain, and lets light control them.</p></div>'+
   surg()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split"><span class="nw">Devices meet</span> <em class="nw">gene therapy.</em></h2></div><p data-r>Opsin Biotherapeutics joins decades of medical-device development with the science of light-sensitive opsins, from Bedford, Texas.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>NIH NINDS</span><h3 data-r>SBIR Phase II</h3><p data-r>$1,113,701 awarded in September 2026 for Optogenetic Neuromodulation for Chronic Pain. <a class="ul" href="'+NIH+'" target="_blank" rel="noopener">See the NIH record</a></p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Presented</span><h3 data-r>ASGCT and ASPN</h3><p data-r>Posters at the 2023 meetings of the American Society of Gene and Cell Therapy and the American Society of Pain and Neuroscience.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Status</span><h3 data-r>Investigational</h3><p data-r>The therapy is in preclinical development and has not been approved by the FDA or any other regulator.</p></div>'+
   '</div>'+
  '</div></section>'+
  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New funding,</span> <em class="nw">recent posters.</em></h2></div><p data-r>The latest support for the program, and where the work has been presented.</p></div>'+
   evid()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Interested in</span> <em><span class="nw">pain relief</span> <span class="nw">by light?</span></em></h2>'+
   '<p class="sub" data-r>For investors, partners and researchers: write to the Opsin Biotherapeutics team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Opsin Biotherapeutics</span><p data-r>1312 Brown Trail<br>Bedford, Texas 76022</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIH NINDS SBIR<br>2R44NS132623</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Opsin Biotherapeutics</span>Bedford, Texas</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/program">Program</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Therapy</span>MCO gene<br>Gold nanorods<br>Red LED</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">opsin</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Opsin Biotherapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={intro:"intro",story:"story",technology:"technology",program:"program",approach:"approach",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Opsin Biotherapeutics — Non-viral optogenetic gene therapy for chronic pain",x:"Home"};
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
