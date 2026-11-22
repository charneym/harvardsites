/* ================= VIEWS (home only: Research / Monitoring / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function servs(){return '<ul class="pfr">'+SERV.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Details</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership and science</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Preclinical hearing research<span class="nomob"> · Jacksonville, Illinois</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Scientific rigor</span><span class="l">with <em>global purpose.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Turner Scientific tests the efficacy of hearing treatments and a drug’s risk to patients’ hearing, for biotech, pharma, CROs and academia, and builds the patented Sensory Sentinel to watch every animal room, every second.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/research">Our research '+ARR+'</a><a class="btn" href="#/contact">Start a study</a></div></div>'+
   '<p class="lab hcap" data-r>Sensory Sentinel, Turner Scientific’s patented vivarium monitor, logging a mouse room around the clock.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our commitment</span>'+
   '<h2 class="txt" id="mani">We work to address hearing loss, tinnitus, vertigo and dizziness, helping sponsors determine both <em>the efficacy of otic treatments and the ototoxic potential of drugs.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%</span><span class="k">Of approved drugs acknowledge the potential for these four side effects</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60,000</span><span class="k">Square feet of laboratory on a 9 acre campus in Jacksonville, Illinois</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><span class="k">Animal models, from mice and rats to guinea pigs, chinchillas and minipigs</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Large and small models</span><p data-r>The industry’s only facility dedicated to auditory research in minipigs, a novel and efficient large animal model, alongside rodent models.</p></div>'+
    '<div><span class="lab kick" data-r>Pilot to GLP</span><p data-r>From novel experimental protocols to high-throughput standard assays, with advice from proof of concept to IND-enabling GLP studies.</p></div>'+
    '<div><span class="lab kick" data-r>Ethical by design</span><p data-r>Every animal facility is monitored continuously for noise, ultrasonic noise, vibration, temperature, humidity, light and human activity.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a study runs</span><h2 class="d3">Follow a drug <em>into the cochlea.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deliver</span><span>Measure</span><span>Count</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Deliver it to the ear.</h2><p>Orally, by injection or straight to the ear: transtympanic, through the round window membrane, or into the cochlea itself. Dr. Alec Salt’s FluidSim predicts how a drug distributes in the inner ear.</p></article>'+
     '<article class="step"><h2>Measure what it hears.</h2><p>The auditory brainstem response plays tones from low to high pitch and quiet to loud, and finds the threshold at each frequency. Reflex-based behavioral testing adds hearing thresholds and tinnitus.</p></article>'+
     '<article class="step"><h2>Count every hair cell.</h2><p>A cytocochleogram stains and counts the hair cells that are present, dead or sick after noise, chemical or drug exposure, so a sponsor sees where a treatment protects hearing, or harms it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Preclinical research</span><h2 class="d2 split">Thoughtful research and <em>drug development.</em></h2></div><p data-r>We function as the contract research and development team for biotech and pharma companies, with flexible study designs and a team of dedicated hearing researchers.</p></div>'+
   servs()+
   '<div class="bk"><span class="lab kick" data-r>Routes of administration</span><p class="cr" data-r>'+lst(ROUTES)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Noise exposure</span><p class="cr" data-r>'+lst(NOISE)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Animal models</span><p class="cr" data-r>'+lst(MODELS)+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="monitoring" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sensory Sentinel</span><h2 class="d2 split">Every second. <em>Every room.</em></h2></div><p data-r>Noise, vibration, light, temperature, humidity and staff activity, logged every second in the cage, room or lab, so disturbances never go unseen. Better reproducibility in research, and happier subjects.</p></div>'+
   '<div class="mon">'+
    '<figure class="monf" data-r><img src="pod.webp" alt="The Sensory Sentinel sensor pod on its coiled tether, beside its base station" width="1279" height="778" loading="lazy"><figcaption class="lab">The slim sensor pod on a coiled tether, for in-cage use</figcaption></figure>'+
    '<div class="mons"><ul class="sense">'+SENSE.map(function(s){return '<li data-r><span class="lab">'+esc(s[0])+'</span><span>'+esc(s[1])+'</span></li>'}).join("")+'</ul>'+
    '<p class="monp" data-r>Two systems: the new Sensory Sentinel for low-cost, continuous monitoring of every room and cage, and Sensory Sentinel PRO for spectral analysis, building commissioning and construction monitoring. Noise and vibration are measured for 18 species’ perceptual range.</p>'+
    '<a class="lab ul lk2" data-r href="'+WEB+'sensory-sentinel/" target="_blank" rel="noopener">See the Sensory Sentinel '+ARR+'</a></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light tmsec" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Hearing researchers, <em>unmatched.</em></h2></div><p data-r>A deep history of auditory research and laboratory environmental knowledge, enhanced by consultants from leading research universities throughout the Midwest, and beyond.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">A growing team, <em>a wider reach.</em></h2></div><p data-r>New leadership, UK representation for Sensory Sentinel, and NIH support for the minipig hearing model.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Sponsors, investigators and laboratories</span>'+
   '<h2 class="big split">Accelerate your <em>otic drug development.</em></h2>'+
   '<p class="sub" data-r>Tell us about your compound or device, or your vivarium. We advise from proof of concept and pilot research to IND-enabling GLP studies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Turner Scientific '+ARR+'</a><a class="btn" href="#/research">See our research</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Turner Scientific<br>1275 Sandusky Rd<br>Jacksonville, IL 62650</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+12176020306">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Turner Scientific<br>1275 Sandusky Rd<br>Jacksonville, IL 62650</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/monitoring">Monitoring</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12176020306">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Preclinical hearing research<br>and vivarium monitoring</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:600;font-size:72px;letter-spacing:.04em"><tspan fill="#f6f2f0">TURNER</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Turner Scientific</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",research:"services",monitoring:"monitoring",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Turner Scientific — hearing research, done with rigor",x:"Home"};
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
