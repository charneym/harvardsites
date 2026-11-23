/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+CT+c[7]+'" target="_blank" rel="noopener">'+c[7]+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Signaled, not circulated","Placing a very small hormone dose on the tongue activates the brain&#8217;s satiety centers through oral receptors and direct neural connections, with no systemic exposure.",'<path d="M10 40c6-10 14-14 22-14s12 4 14 10"/><circle class="f" cx="24" cy="34" r="3.5"/><path class="a" d="M30 28C34 18 40 12 46 10"/>'],
  ["Satiety without nausea","Satiety centers in the brainstem and hypothalamus are stimulated without activating the brain&#8217;s nausea center, the side effect that limits systemically delivered hormones.",'<path d="M28 8c11 0 18 8 18 17 0 7-4 11-9 14v9H21v-9c-5-3-9-7-9-14 0-9 7-17 16-17z"/><path class="a" d="M21 26l5 5 10-10"/>'],
  ["Natural hormones, micro-dosed","Natural peptide hormones, delivered noninvasively in a micro-dose. Systemic delivery needs far greater amounts of hormone and exposes other regions of the body and brain.",'<ellipse cx="28" cy="30" rx="16" ry="7"/><path d="M12 30v4c0 4 7 7 16 7s16-3 16-7v-4"/><path class="a" d="M28 8v10M23 13l5 5 5-5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Topical Lingual PYY at a glance</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From gilatherapeutics.com. No side effects are expected, and none were seen in extensive toxicology, preclinical studies or the Phase I trial.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Topical lingual signaling platform<span class="nomob"> · Clinical stage</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Obesity medicine,</span><span class="l">by way of <em>the tongue.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Gila is pioneering a newly discovered biological pathway, the tongue-brain connection, to develop safer and more effective treatments for obesity and cardiometabolic disorders.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/programs">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A first-of-its-kind technology</span>'+
   '<h2 class="txt" id="mani">The first and only company using the tongue-brain connection for any indication. <em>A very small dose on the tongue, and the brain&#8217;s satiety centers respond.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;3s</span><p class="k">For the oral dissolving tablet to melt on the tongue, evenly dispersing the peptide in saliva</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Zero</span><p class="k">Treatment-related adverse events in the Phase I trial of Topical Lingual PYY</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.1B</span><p class="k">People living with obesity worldwide, a crisis that worsens heart, liver and kidney disease and diabetes</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The tongue-brain connection</span><h2 class="d3">From the tongue <em>to the brainstem.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tongue</span><span>Signal</span><span>Satiety</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It melts on the tongue.</h2><p>A micro-dose of a natural hormone, in an oral dissolving tablet that melts in under three seconds and disperses the peptide evenly in saliva.</p></article>'+
     '<article class="step"><h2>A direct line to the brain.</h2><p>The hormones bind to oral receptors, and direct neural connections carry the signal straight to the brainstem. Nothing needs to enter the bloodstream.</p></article>'+
     '<article class="step"><h2>Satiety, not nausea.</h2><p>Satiety centers in the brainstem and hypothalamus are stimulated, while the nausea center that systemic hormones reach stays quiet.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Topical lingual, <em>neural signaling.</em></h2></div><p data-r>Our platform activates the specific brain regions responsible for metabolic regulation with natural peptide hormones, delivered noninvasively. Typical therapeutic hormones travel throughout the body; ours signal from the tongue.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Metabolic hormones, <em>on the tongue.</em></h2></div><p data-r>Gila&#8217;s first program, Topical Lingual PYY, has completed Phase I. A topical-lingual GLP-1 study is now recruiting, and further hormone targets, including amylin and leptin, are in development.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers and <em>obesity scientists.</em></h2></div><p data-r>An experienced leadership team and board, and scientific advisors renowned globally for pioneering work in endocrinology, neuroscience and metabolic nephrology.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Partnerships</span><p data-r>Collaborations with research universities and pharmaceutical companies, among them the University of Pennsylvania, the University of Florida and Eli Lilly.</p></div>'+
    '<div><span class="lab kick" data-r>Our mission</span><p data-r>To bring the world&#8217;s first Topical Lingual PYY and GLP-1 to market.</p></div>'+
    '<div><span class="lab kick" data-r>The need</span><p data-r>About 75% of the U.S. population is diagnosed with overweight, and more than a third with obesity (CDC).</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Gila.</em></h2>'+
   '<p class="sub" data-r>Interested in learning more about Gila Therapeutics and the tongue-brain connection? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Gila '+ARR+'</a><a class="btn" href="#/programs">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Gila Therapeutics, Inc.<br>Minneapolis, Minnesota<br>USA</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@gilatherapeutics.com</a></p></div>'+
    '<div><span class="lab" data-r>Please note</span><p data-r>Gila is not actively recruiting staff. If a recruiter has contacted you, please confirm by email.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Minneapolis, Minnesota<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@gilatherapeutics.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>Topical Lingual PYY · T-L Semaglutide</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Barlow Condensed\',sans-serif;font-weight:600;font-size:76px">GILA THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Gila Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",programs:"programs",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Gila Therapeutics — the tongue-brain connection",x:"Home"};
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
