/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function testRows(list){return '<ul class="pfr tst">'+list.map(function(c,i){
  return '<li'+(i===0?' class="lead"':'')+'><span class="lab tg"><b>'+esc(c[0])+'</b><i>compounds</i></span><div class="pgm"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div>'+
   '<p>'+esc(c[3])+'</p><span class="lab lk'+(i===0?' av':'')+'">'+(i===0?'Broadest screen':'Quantitative')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function rows(list,cls){return '<ul class="nws'+(cls?' '+cls:'')+'">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Worn, not mounted","Stationary “grab samples” capture one place at one time and can miss important exposure events. The wristband goes wherever you go, so it records your own exposure.",'<ellipse cx="28" cy="24" rx="18" ry="7"/><path d="M10 24v8c0 4 8 7 18 7s18-3 18-7v-8"/><path class="a" d="M28 46v6"/><circle class="f" cx="28" cy="24" r="2.6"/>'],
  ["No pumps, no power","No electronics, air pumps or filters: the silicone samples passively, needs no training, energy or maintenance, and is comfortable 24 hours a day.",'<path d="M12 40c6-14 26-14 32 0"/><path class="a" d="M28 10v14M22 18l6 6 6-6"/><path d="M8 46h40"/>'],
  ["Anyone can wear it","Instantly familiar, for one day, one week or one month: a child, an office worker, a mechanic, a pilot, a member of the Armed Forces.",'<circle cx="28" cy="16" r="7"/><path d="M14 48c0-10 6-17 14-17s14 7 14 17"/><path class="a" d="M17 40h22"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function aims(){var A=[
  ["A focused list","Validate a focused list of high-impact chemicals, to make a new analysis simpler and cheaper"],
  ["Skin or air","Determine whether dermal contact is a significant share of exposure, in a field study of 300 people"],
  ["Predictive models","Optimise and validate models that predict the dominant route of exposure"],
  ["A clear report","Create a new chemical exposure report, with expert partners such as ICF and Silent Spring"]];
  return '<div class="ev sci"><span class="lab kick" data-r>NIH SBIR Phase 2</span><div><dl>'+A.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Development of a Route of Exposure Model Using Silicone Wristbands as Personal Samplers, NIEHS project 5R44ES033586, Principal Investigator Steven G. O’Connell. Paired “traditional” and “air-only” wristbands, screened for over 1,500 compounds.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Personal environmental monitoring</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Making the</span><span class="l">invisible <em>visible.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MyExposome makes a simple, lightweight silicone wristband that records your exposure to chemicals as you go about your day, then screens it in the laboratory for over 1,500 compounds.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/tests">The tests</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Exposing your exposome</span>'+
   '<h2 class="txt" id="mani">Everyone is exposed to thousands of chemicals every day. The vast majority are beneficial or benign, <em>but not all of them.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,500+</span><p class="k">Compounds in our full quantitative screen, from one wristband</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70+</span><p class="k">Publications using silicone wristbands as personal samplers, with thousands of participants</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">US patents on the core wristband technology, 9,757,774 and 9,849,489</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One wristband, <em>your whole day.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wear</span><span>Absorb</span><span>Screen</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Wear it.</h2><p>A familiar silicone wristband, worn for a day, a week or a month: at home, at work and where children play, while you sleep, jog, eat, swim or read a book.</p></article>'+
     '<article class="step"><h2>It records your exposure.</h2><p>The silicone passively takes up organic chemicals from the air around you and from what touches your skin, with no pumps, batteries or training.</p></article>'+
     '<article class="step"><h2>We screen it.</h2><p>Sealed back in its Teflon bag, the band returns to the laboratory, where it is screened for over 1,500 compounds, from pesticides and flame retardants to phthalates and fragrances.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">Lightweight, simple <em>wristbands.</em></h2></div><p data-r>The best way to measure one person’s actual environmental exposure is to have something on that person record everything that happens as they move through the day. Ideally it is portable, non-intrusive and comfortable.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="tests" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Tests</span><h2 class="d2 split">Many chemicals, <em>one band.</em></h2></div><p data-r>Wristbands can test for many things at once. Each test is quantitative, with a published list of every compound and its CAS number.</p></div>'+
   testRows(TESTS)+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">From research tool <em>to everyone’s wrist.</em></h2></div><p data-r>Silicone wristbands are an established research sampler. With funding from the National Institutes of Health, we are working to make them affordable, interpretable and available beyond the laboratory.</p></div>'+
   aims()+
   '<span class="lab sub-l pr" data-r>Recent studies using silicone wristbands</span>'+
   rows(PUBS,"lt")+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Fifteen years of <em>passive sampling.</em></h2></div><p data-r>Our team has a history of more than fifteen years with advanced passive sampling technology, from Oregon State University’s laboratories to software and data.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Wristbands <em>in the news.</em></h2></div><p data-r>From firefighters to farmworkers, silicone wristbands are showing people what they are exposed to.</p></div>'+
   rows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Want to <em>order one?</em></h2>'+
   '<p class="sub" data-r>Write to us about anything. If you are interested in wristbands and their chemical analysis, please include your contact details and the quantity you need, and we will get back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to MyExposome '+ARR+'</a><a class="btn" href="#/tests">See the tests</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Corvallis, Oregon</span><p data-r>5060 SW Philomath Blvd. #501<br>Corvallis, OR 97333</p></div>'+
    '<div><span class="lab" data-r>Philadelphia, Pennsylvania</span><p data-r>1024 Spruce Street<br>Philadelphia, PA 19107</p></div>'+
    '<div><span class="lab" data-r>Email and telephone</span><p data-r><a class="ul" href="'+MAIL+'">info@myexposome.com</a><br><a class="ul" href="tel:+15413210688">541-321-0688</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>Corvallis, Oregon<br>Philadelphia, Pennsylvania</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@myexposome.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/tests">Tests</a><br><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">The wristband</span>Personal environmental monitoring, screened for over 1,500 compounds</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Sora\',sans-serif;font-weight:300;font-size:64px">MYEXPOSOME</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MyExposome, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",approach:"approach",tests:"tests",science:"science",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MyExposome — personal environmental monitoring with a silicone wristband",x:"Home"};
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
