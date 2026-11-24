/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Crescent-shaped frame","A crescent frame that follows the posterior side of the mitral annulus, carrying a new posterior leaflet in place of the native one.",'<path d="M6 20C10 40 22 48 28 48S46 40 50 20"/><path class="a" d="M10 22l5 10 5-8 4 10 4-8 4 10 4-8 4 10 5-8"/>'],
  ["Tri-leaflet valve design","Three prosthetic leaflets form a nature-inspired posterior leaflet, designed to coapt with the native anterior leaflet.",'<path d="M6 34C12 22 18 22 22 34M22 34C26 20 30 20 34 34M34 34C38 22 44 22 50 34"/><path class="a" d="M6 18C18 10 38 10 50 18"/>'],
  ["Supra-annular anchoring","Anchored at the annulus from the atrial side, eliminating MR without obstructing the left ventricular outflow tract.",'<path d="M4 30H52"/><path class="a" d="M14 30V18H42V30"/><path d="M28 36v14M23 45l5 5 5-5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>First in human</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>The Sutra Hemi-Valve is an investigational device, for clinical investigation use only and not for sale in the US or outside the US.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Sutra Hemi-Valve<span class="nomob"> · Transcatheter mitral therapy</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new posterior</span><span class="l">leaflet for the</span><span class="l"><em>mitral valve.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Sutra Medical develops transcatheter heart valves. The Sutra Hemi-Valve replaces the posterior leaflet and coapts with the native anterior leaflet, to eliminate mitral regurgitation while preserving left ventricular outflow.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The clinical need</span>'+
   '<h2 class="txt" id="mani">Mitral regurgitation is the most common valvular heart disease, and most patients are never treated. <em>The Hemi-Valve is designed for the anatomies that today’s options leave behind.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6M</span><p class="k">Existing patients with mitral regurgitation in the US</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">250K</span><p class="k">New patients each year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60K</span><p class="k">Patients treated each year</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Half a valve, <em>fully closed.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The leak</span><span>Replace</span><span>Coapt</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The valve leaks.</h2><p>In mitral regurgitation the mitral valve fails to close properly, and blood leaks back into the left atrium. Untreated, it can lead to heart failure.</p></article>'+
     '<article class="step"><h2>A new posterior leaflet.</h2><p>Delivered transfemorally and across the septum, the Hemi-Valve’s crescent frame anchors above the annulus and carries three prosthetic leaflets in place of the posterior leaflet.</p></article>'+
     '<article class="step"><h2>Closed, with the outflow open.</h2><p>The new leaflets coapt with the native anterior leaflet, eliminating the leak without obstructing the left ventricular outflow tract.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The Sutra Hemi-Valve <em>TMVR system.</em></h2></div><p data-r>Advancing mitral valve technology with posterior leaflet replacement: a nature-inspired design that works with the native anterior leaflet instead of replacing the whole valve.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From the bench <em>to the first patient.</em></h2></div><p data-r>The Hemi-Valve, its delivery system and our pulmonary valve programme, and the first-in-human study now under way in New Zealand.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Heart valve engineers, <em>with clinical advisors.</em></h2></div><p data-r>A management team from heart valve biomechanics, advised by interventional cardiologists and cardiac surgeons.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Sutra Medical <em>news.</em></h2></div><p data-r>The first-in-human milestones of the Sutra Hemi-Valve, and the company behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s <em>talk.</em></h2>'+
   '<p class="sub" data-r>For research, media, suppliers and OEMs, employment or the first-in-human study, please get in touch with our team in Lake Forest, California.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Sutra Medical '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Sutra Medical, Inc.<br>20532 Crescent Bay, Ste 102<br>Lake Forest, CA 92630</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">cmartin@sutramedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+19493173672">(949) 317-3672</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Lake Forest, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">cmartin@sutramedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Note</span>The Sutra Hemi-Valve is an investigational device, not for sale in the US or outside the US.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 120" aria-hidden="true"><text x="380" y="98" text-anchor="middle" style="font-family:\'Roboto\',sans-serif;font-weight:700;font-size:104px">Sutra Medical</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sutra Medical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sutra Medical — the Sutra Hemi-Valve for mitral regurgitation",x:"Home"};
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
