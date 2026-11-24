/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rg-tm">'+gs.map(function(g){return '<div class="rg-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul>'+by[g].map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span>'+(p.sum?'<p class="kl-sum">'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Efficiency and ease of use","Peel, stick and go.","A unique silicone gasket self-seals to minimize the risk of leaks. Pre-assembled, with no moving parts, batteries, buttons or pressure settings to adjust.",'<rect x="8" y="10" width="26" height="38" rx="3"/><rect class="a" x="13" y="15" width="16" height="28" rx="1.5"/><path d="M34 29h6c4 0 6 2 6 6v4"/><rect x="40" y="38" width="12" height="10" rx="5"/>'],
  ["Safety","No settings, no over-pressure.","There is nothing to set, so no risk of over-pressure. If pressure is lost it defaults to an advanced wound dressing, and a super-absorbent pad locks in fluid while letting clinicians see the exudate.",'<path d="M28 6l18 7v13c0 12-8 20-18 24-10-4-18-12-18-24V13z"/><path class="a" d="M20 28l6 6 11-12"/>'],
  ["Comfort","Silent, light and discreet.","Silent operation, a lightweight, compact and contoured design that fits the body, and an all-in-one system suited to hospital use and the transition home.",'<path d="M10 28c6-10 12-10 18 0s12 10 18 0"/><path class="a" d="M10 38c6-6 12-6 18 0s12 6 18 0"/><circle class="f" cx="28" cy="16" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function surg(){return '<div class="kl-pa"><span class="lab kick" data-r>NPWT has been used on closed incisions after</span><ul data-r>'+SURG.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Aatru Medical<span class="nomob"> · Cleveland, Ohio</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Negative pressure,</span><span class="l"><em>without the pump.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>npSIMS is a single-use negative pressure wound therapy system for closed surgical incisions. A solid-state chemical reaction, not a motor, holds the pressure for up to seven days.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/evidence">The evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Aatru means healing</span>'+
   '<h2 class="txt" id="mani">Incisional NPWT is estimated to reduce surgical site infections by up to 40% across specialties. Aatru built npSIMS to widen affordable access to it: <em>clinically effective, safe, simple and economical.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">−80</span><p class="k">mmHg of consistent negative pressure (±20), delivered by npSIMS</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><p class="k">Days of continuous NPWT from a single device</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6.3</span><p class="k">Days of negative pressure on average in the first-in-human study</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">The Ideal Gas Law, <em>at the incision.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Seal</span><span>Activate</span><span>Hold</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Sealed over the incision.</h2><p>The pre-assembled dressing goes on in one step. Its unique silicone gasket self-seals, so a reliable vacuum seal is maintained around the closed incision.</p></article>'+
     '<article class="step"><h2>Oxygen, scavenged.</h2><p>A patented easy activation starts a solid-state oxygen scavenger inside the device. As it consumes the oxygen in the sealed space, the pressure drops: no motor, no battery, no noise.</p></article>'+
     '<article class="step"><h2>Held for seven days.</h2><p>The system delivers consistent negative pressure of −80 mmHg ±20 for up to seven days, while a super-absorbent pad locks in fluid. Simple visual indicators guide and alert on performance.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="npsims" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>npSIMS</span><h2 class="d2 split">The first true NPWT innovation <em>in over ten years.</em></h2></div><p data-r>The npSIMS Negative Pressure Surgical Incision Management System delivers NPWT through a unique application of the Ideal Gas Law: a patented mechanism of action with no moving parts. Its oxygen scavenger is invented and supplied by Exothermix, an Aatru company.</p></div>'+
   caps()+surg()+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">From the bench <em>to the operating room.</em></h2></div><p data-r>From an in vivo porcine incision model at the University of Miami to a peer-reviewed first-in-human study, npSIMS has been tested at every step to clearance and beyond.</p></div>'+
   pipeRows(EVID)+
   '<div class="act tr-act" data-r><a class="btn solid" href="'+PMC+'" target="_blank" rel="noopener">Read the clinical study '+ARR+'</a><a class="btn" href="'+UP+'2025/08/Patient-and-Practitioner-Instructions.pdf" target="_blank" rel="noopener">Instructions for use</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Inventors, surgeons <em>and operators.</em></h2></div><p data-r>Aatru Medical is a privately held medical device company in Cleveland, led by the co-inventors of npSIMS with a trauma surgeon as Chief Medical Officer.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">npSIMS and Aatru <em>in the news.</em></h2></div><p data-r>Milestones from FDA submission and clearance to the published clinical study.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Learn more, and <em>try npSIMS.</em></h2>'+
   '<p class="sub" data-r>For hospitals and surgical centers: an economical NPWT system with efficiencies in training, application, operating room time and disposal.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'?subject=npSIMS">Write to Aatru '+ARR+'</a><a class="btn" href="tel:+12163036063">216-303-6063</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Aatru Medical, LLC<br>1301 East 9th Street, Suite 1414<br>Cleveland, OH 44114</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="'+MAIL+'">tlash@aatru.com</a><br><a class="ul" href="tel:+12163036063">216-303-6063</a></p></div>'+
    '<div><span class="lab" data-r>Instructions for use</span><p data-r><a class="ul" href="'+UP+'2025/08/Patient-and-Practitioner-Instructions.pdf" target="_blank" rel="noopener">For clinicians</a><br><a class="ul" href="'+UP+'2025/08/Patient-and-Caregiver-Instructions.pdf" target="_blank" rel="noopener">For patients and caregivers</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Cleveland, Ohio</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">tlash@aatru.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/npsims">npSIMS</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Group</span>Aatru Medical, parent of Exothermix</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:64px">AATRU MEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aatru Medical, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",npsims:"npsims",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Aatru Medical — negative pressure, without the pump",x:"Home"};
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
