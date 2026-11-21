/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage oncology<span class="nomob"> · Barcelona</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Autophagy,</span><span class="l"><em>turned against cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AbilityPharma develops first-in-class oral drugs that kill cancer cells by driving them into cytotoxic autophagy. Its lead, ibrilatazar (ABTL0812), has completed a phase 2b trial in metastatic pancreatic cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Ibrilatazar (ABTL0812), 2-hydroxy-linoleic acid, C<sub>18</sub>H<sub>32</sub>O<sub>3</sub>. Model from its PubChem 3D conformer.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why autophagy</span>'+
   '<h2 class="txt" id="mani">Autophagy is how a cell recycles its own parts. Pushed hard enough, it becomes the way a cell dies: ibrilatazar pushes cancer cells there, <em>selectively.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">140</span><p class="k">Patients with metastatic pancreatic cancer in the phase 2b PanC-ASAP trial, at 23 sites in four countries</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">22.5 mo</span><p class="k">Median overall survival in squamous lung cancer with ibrilatazar and chemotherapy, against 11.3 in historical controls</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€8.5M</span><p class="k">EU Cancer Mission project PHOENIX, taking ibrilatazar to children with high-risk solid tumours from 2026</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>First in class, by mouth</span><p data-r>Ibrilatazar is a first-in-class oral lipid analogue, 2-hydroxy-linoleic acid, given its international name by the WHO in 2024.</p></div>'+
    '<div><span class="lab kick" data-r>Gentle enough to stay on</span><p data-r>In the first-in-human trial no dose-limiting toxicity was reached. In phase 2, patients stayed on ibrilatazar as maintenance after chemotherapy.</p></div>'+
    '<div><span class="lab kick" data-r>Tested at leading centres</span><p data-r>Trials have run at Vall d’Hebron, Institut Gustave Roussy, the University of Cincinnati Cancer Center and Sheba Medical Center.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">One molecule, <em>two signals to die.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Receptors</span><span>Signals</span><span>Autophagy</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Switch on PPARα and PPARγ.</h2><p>Ibrilatazar enters the cancer cell and binds the nuclear receptors PPARα and PPARγ, activating their transcriptional activity.</p></article>'+
     '<article class="step"><h2>Stress the ER, block Akt.</h2><p>That activation sets off stress in the endoplasmic reticulum and blocks the activation of Akt, the central kinase of the PI3K/Akt/mTOR growth pathway.</p></article>'+
     '<article class="step"><h2>Autophagy, to the end.</h2><p>The two signals converge on robust cytotoxic autophagy: the cancer cell wraps and digests its own contents until it dies. The mechanism was published in Clinical Cancer Research (2016) and Autophagy (2020).</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One drug, <em>four cancers.</em></h2></div><p data-r>Ibrilatazar has been studied with chemotherapy as first-line therapy in pancreatic, lung and endometrial cancer, and now enters its first trial in children.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The team behind <em>ibrilatazar.</em></h2></div><p data-r>The management team brings together cancer biology, drug development, partnering and finance, at the Parc Tecnològic del Vallès north of Barcelona.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From ASCO <em>to the EU Cancer Mission.</em></h2></div><p data-r>Results from three phase 2 trials, a WHO name for the drug, a new financing round and a paediatric study funded by Horizon Europe.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Real medicine <em>for real life.</em></h2>'+
   '<p class="sub" data-r>AbilityPharma works from the Parc Tecnològic del Vallès in Cerdanyola, Barcelona. To talk about ibrilatazar, licensing or a partnership, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r class="adr"><span>Ability Pharmaceuticals, SA</span><span>Centre d’Empreses de Noves Tecnologies</span><span>Avinguda Parc Tecnològic, 3</span><span>08290 Cerdanyola del Vallès (Barcelona), Spain</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Clinical-stage biopharmaceutical company<br>Catalonia, Spain</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Parc Tecnològic del Vallès<br>Cerdanyola (Barcelona), Spain</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Autophagy-inducing<br>cancer drugs</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Open Sans\',system-ui,sans-serif;font-style:italic;font-weight:700;font-size:70px;letter-spacing:-.02em"><tspan fill="#ec5254">Ability</tspan><tspan fill="#f4f6f9" font-weight="600">Pharma</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ability Pharmaceuticals, SA</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AbilityPharma — autophagy-inducing cancer drugs, Barcelona",x:"Home"};
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
