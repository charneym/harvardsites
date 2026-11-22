/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[6]==="Available"?' av':'')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["No puff, no touch","Photonic IOP Biomonitoring measures intraocular pressure without anaesthetic drops, an air puff or a probe on the eye, and without a clinician interpreting the reading.",'<path d="M8 28c6-10 14-15 20-15s14 5 20 15c-6 10-14 15-20 15S14 38 8 28Z"/><circle class="f" cx="28" cy="28" r="5"/><path class="a" d="M6 10l8 6M50 10l-8 6"/>'],
  ["Sound, light and speckle","A sound wave sets the sclera oscillating, a laser speckle pattern tracks how quickly the oscillation dies away, and a physical model with machine learning turns that damping into pressure.",'<path d="M8 28h6"/><path class="a" d="M18 20a11 11 0 0 1 0 16M23 15a18 18 0 0 1 0 26"/><circle cx="40" cy="28" r="9"/><circle class="f" cx="37" cy="25" r="1.6"/><circle class="f" cx="43" cy="30" r="1.6"/><circle class="f" cx="39" cy="33" r="1.2"/>'],
  ["Worn like glasses","Miniaturised into monoculars or eyeglasses, the tonometer lets patients take real-time readings at home, relayed through the app to their physician for treatment decisions.",'<circle cx="17" cy="30" r="9"/><circle cx="39" cy="30" r="9"/><path d="M26 30h4M8 30 4 24M48 30l4-6"/><circle class="f" cx="28" cy="22" r="2.4"/><path class="a" d="M28 18v-6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The NIH Phase I plan</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the public abstract of NEI award 1R43EY037593-01, "New, Non-Invasive (No-Puff, No-Touch), Tonometry Method", September 2025 to May 2027.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Digital glaucoma healthcare<span class="nomob"> · La Quinta, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Eye pressure, read</span><span class="l"><em>without a touch.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>eyecbetter is pioneering digital glaucoma healthcare: a no-touch, no-air-puff tonometer built to be worn like glasses, connected to a patient app and to the glaucoma specialist between clinic visits — for a lifetime of vision.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/platform">The platform</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Glaucoma has no cure and its damage is irreversible. Eye pressure is the factor that matters most, yet most patients have it measured <em>a few times a year</em>, while it can swing by up to 10 mmHg in a single day.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100M+</span><p class="k">People affected by glaucoma worldwide today, the leading cause of irreversible blindness</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">160M+</span><p class="k">Expected by 2050, based on global prevalence</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;50%</span><p class="k">Of people with glaucoma don\'t know they have it</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the measurement works</span><h2 class="d3">Sound in, <em>pressure out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sound</span><span>Speckle</span><span>Connect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A sound wave, not a puff.</h2><p>The wearable sensor sends a brief sound wave toward the eye. Nothing touches the cornea and no air is blown at it: the sound simply sets the white of the eye, the sclera, gently oscillating.</p></article>'+
     '<article class="step"><h2>Light reads the ring-down.</h2><p>A low-power laser lights the sclera and a camera follows the speckle pattern it returns. When the sound stops, the oscillation dies away, and how quickly it is damped depends on the pressure inside the eye. A physical model and machine learning turn that damping into IOP.</p></article>'+
     '<article class="step"><h2>Every reading, connected.</h2><p>Each measurement goes to the patient app and on to the glaucoma specialist, so treatment and medication decisions can rest on pressure taken often, at home, rather than a few times a year in the clinic.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Tonometry, <em>without the touch.</em></h2></div><p data-r>Today\'s eye-pressure tests touch the eye, need anaesthetic drops and a trained professional to read them. eyecbetter holds an exclusive worldwide licence from BIRAD Research and Development and the Universitat de València to technology that uses optical sensors, sound waves and speckle patterns instead: 24 granted patents and two pending.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">One connected <em>glaucoma programme.</em></h2></div><p data-r>eyecbetter combines a medical device with digital technology. The patient app and care coordinators keep people engaged in a lifelong treatment journey; the wearable tonometer, now funded by the National Eye Institute, will feed them the one number that matters most.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by a <em>glaucoma surgeon.</em></h2></div><p data-r>Founded by a fellowship-trained glaucoma specialist, with medical-device builders, a physicist, patient advocates and an advisory board of ophthalmologists and healthcare founders.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH National Eye Institute SBIR award 1R43EY037593-01, and a Regulation CF crowdfunding round on StartEngine.</p></div>'+
    '<div><span class="lab kick" data-r>Licensed science</span><p data-r>BIRAD Research and Development Company and the Universitat de València: optical, acoustic and speckle-based IOP measurement.</p></div>'+
    '<div><span class="lab kick" data-r>Research options</span><p data-r>The University of Pittsburgh, for a solitary-wave-based trans-lid tonometer.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, licences <em>and milestones.</em></h2></div><p data-r>The latest from eyecbetter and the public NIH record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Providers, partners, investors and patients</span>'+
   '<h2 class="big split">Talk to <em>eyecbetter.</em></h2>'+
   '<p class="sub" data-r>Whether you treat glaucoma, want to bring remote monitoring to your patients, or would like to partner on the technology, we would love to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email eyecbetter '+ARR+'</a><a class="btn" href="#/platform">See the platform</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Eye C Better Corp.<br>47474 Washington St<br>La Quinta, California 92253</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>513-544-3129</p></div>'+
    '<div><span class="lab" data-r>For providers</span><p data-r>Remote glaucoma monitoring offered through providers, organisations and health plans, per patient, per month.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>47474 Washington St<br>La Quinta, California 92253</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Mission</span>Empowering people with glaucoma to take part in their therapy and enjoy a lifetime of vision.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 72" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:500;font-size:66px;letter-spacing:-.01em">eye<tspan fill="#26a9e1">c</tspan>better</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Eye C Better Corp.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",how:"story",platform:"platform",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"eyecbetter — eye pressure, read without a touch",x:"Home"};
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
