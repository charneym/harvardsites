/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Text-to-speech","Listen to any word or sentence, with optional voices and speed settings to suit each reader.",'<path d="M10 22v12h9l11 9V13l-11 9z"/><path class="a" d="M37 21c3 4 3 10 0 14M42 16c6 7 6 17 0 24"/>'],
  ["Contextualized definitions","Natural language processing gives an accurate definition for each word based on how it is used in the phrase; custom definitions set a common vocabulary.",'<rect x="8" y="10" width="40" height="28"/><path d="M18 38l-4 9 12-9"/><path class="a" d="M16 20h24M16 28h15"/>'],
  ["Word-by-word translation","On-demand oral and written translation for any word, in 15+ languages, with an anonymous record of translated words.",'<path d="M8 12h22M19 8v4M12 12c2 8 8 14 16 17M26 12c-2 8-8 14-15 17"/><path class="a" d="M30 48l8-20 8 20M33 41h10"/>'],
  ["Reader-friendly formatting","Proprietary formatting that requires less concentration, for readers with dyslexia, visual processing impairments or macular degeneration.",'<path d="M10 14h36M10 24h22M10 34h30M10 44h16"/><path class="a" d="M38 21v6"/>'],
  ["Comprehension activities","No-fail comprehension questions give the reader an instant check and the organisation a detailed record of progress and mastery.",'<rect x="9" y="9" width="38" height="38"/><path class="a" d="M18 28l7 7 13-14"/>'],
  ["Built-in literacy program","Short, optional mini-lessons in phonics and English phonemic awareness that adjust to an adult&#8217;s reading level and progress.",'<path d="M28 15c-6-4-13-5-20-4v31c7-1 14 0 20 4 6-4 13-5 20-4V11c-7-1-14 0-20 4z"/><path class="a" d="M28 15v31"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From NIH RePORTER (projects 1R43NR020340 and 2R44NR020340) and the Star Tribune.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Assistive-reading technology<span class="nomob"> · Minneapolis</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">We remove</span><span class="l">barriers to</span><span class="l"><em>understanding.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GogyUp converts existing documents into interactive information resources for adults with limited literacy skills, impaired vision, dyslexia or beginning English proficiency, at work, in the clinic and in daily life.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/research">Our research</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Millions of adults cannot read the documents they need to train at work, support their children in school or manage their health care. <em>Our vision: every adult understands what they need to know, in the moment.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">38M</span><p class="k">U.S. adults unable to read the documents required to train properly at work or to manage their health care</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5&#8211;10%</span><p class="k">Of adults have access to the literacy instruction they need</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.2T</span><p class="k">In annual income lost in the U.S. to limited literacy</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How GogyUp works</span><h2 class="d3">Your documents, <em>made understandable.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Convert</span><span>Access</span><span>Understand</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Quick conversion.</h2><p>Set up is as simple as sending your existing print or digital documents to your GogyUp account.</p></article>'+
     '<article class="step"><h2>Instantly accessible.</h2><p>GogyUp converts your content into interactive information, securely available on mobile devices and the web: tap any word to hear it, see it defined or translate it.</p></article>'+
     '<article class="step"><h2>Deeper understanding.</h2><p>Readers have an in-pocket tutor and no-fail comprehension questions; GogyUp then provides progress data to validate comprehension.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">An in-pocket tutor <em>for every reader.</em></h2></div><p data-r>Assistive-reading features give each adult personalised, in-the-moment help with the text in front of them, and build reading skills over time as they use GogyUp at work and in daily life.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Where reading <em>matters most.</em></h2></div><p data-r>With NIH support, GogyUp is developing the GogyUp Instant Assistant for patients managing type 2 diabetes at home, alongside its products for employers, educators and individuals.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built in <em>Minneapolis.</em></h2></div><p data-r>GogyUp Inc is a Minneapolis company, led by its co-founders and working with researchers on its NIH-funded trial.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>GogyUp.</em></h2></div><p data-r>Grants, press and writing on literacy, health and work.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Employers, clinics and educators</span>'+
   '<h2 class="big split">Talk to <em>GogyUp.</em></h2>'+
   '<p class="sub" data-r>Let&#8217;s discuss how GogyUp can help you, your organisation, your employees, your patients and your learners.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to GogyUp '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>GogyUp Inc<br>825 Washington Ave SE, Suite 220<br>Minneapolis, MN 55414</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@gogyup.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16124605358">+1 612-460-5358</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>825 Washington Ave SE<br>Minneapolis, MN 55414</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@gogyup.com</a><br>+1 612-460-5358</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>GogyUp Reader · Snap Reader · Learning Manager</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Poppins\',sans-serif;font-weight:500;font-size:80px">GOGYUP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GogyUp Inc</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GogyUp — assistive-reading technology",x:"Home"};
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
