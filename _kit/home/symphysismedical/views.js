/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh tm">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Independence","Putting control in patients’ hands and reducing reliance on others to manage symptoms.",'<circle cx="28" cy="15" r="7"/><path d="M14 48c0-9 6-16 14-16s14 7 14 16"/><path class="a" d="M38 26l5 5 9-10"/>'],
  ["Innovation","Reimagining pleural effusion management with extensive input from patients and clinicians.",'<path d="M20 10c-8 4-12 14-12 24 0 8 4 12 10 12 5 0 8-4 8-10V12"/><path d="M36 10c8 4 12 14 12 24 0 8-4 12-10 12-5 0-8-4-8-10V12"/><path class="a" d="M26 12h4"/>'],
  ["Intuitive design","Designed for independent drainage at home, with one-touch activation and a unique approach to dressings.",'<path d="M12 18h32a10 10 0 0 1 0 20H12a10 10 0 0 1 0-20z"/><path class="a" d="M33 23l9 5-9 5z"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r><a class="ul" href="'+e[2]+'" target="_blank" rel="noopener">'+esc(e[1])+'</a></dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>*releaze™ is not currently for sale within the United States or the European Union.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pleural effusion drainage<span class="nomob"> · Galway, Ireland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Independence</span><span class="l">through</span><span class="l"><em>innovation.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SymPhysis Medical is reimagining pleural effusion drainage for the way you live. The releaze™ Drainage System* aims to reduce the invasiveness, streamline the process and enhance comfort over current systems.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/releaze">Meet releaze™ '+ARR+'</a><a class="btn" href="#/mechanism">How it works</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead bo-head" aria-hidden="true"><div><span class="lab kick">About SymPhysis Medical</span><h2 class="d2">Comfort and independence, <em>when it matters most.</em></h2></div><p>An award-winning medical device company in Galway, founded to enhance the lives of people with pleural effusions and the families who support them.</p></div>'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Malignant pleural effusion causes significant shortness of breath and chest pain in up to half of all late-stage cancer patients. releaze™ is designed to put control and independence <em>back in the hands of patients.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~90%</span><p class="k">Of patients with mesothelioma are affected by malignant pleural effusion</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~35%</span><p class="k">Of patients with lung cancer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~16%</span><p class="k">Of patients with breast cancer</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How releaze™ works</span><h2 class="d3">Drainage at home, <em>in one touch.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Access</span><span>Drain</span><span>Breathe</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Port-like access.</h2><p>Fluid builds up in the pleural space between the lung and the chest wall, pressing on the lung. releaze™ reaches it through novel ‘port’-like access, with a unique approach to dressings.</p></article>'+
     '<article class="step"><h2>One touch, at home.</h2><p>The patient connects the line and starts drainage with intuitive one-touch control, designed for independent drainage at home rather than relying on others.</p></article>'+
     '<article class="step"><h2>Room to breathe.</h2><p>As the fluid leaves the pleural space, the lung has room to re-expand. The goal: for a person with advanced cancer to breathe more easily at home and spend less time in hospital.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="releaze" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The releaze™ Drainage System*</span><h2 class="d2 split">Designed for <em>the way you live.</em></h2></div><p data-r>Malignant pleural effusion is still managed in ways that are invasive for patients and demanding on hospital services. releaze™ pairs novel port-like access and a new approach to dressings with one-touch control, shaped with patients and clinicians.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="milestones" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Path to patients</span><h2 class="d2 split">From Galway <em>to the first patients.</em></h2></div><p data-r>Backed by Irish investors, Enterprise Ireland and the state-backed Rhode Island Life Science Hub, with a manufacturing partner in Donegal and clinical relationships built over years with leaders in cancer care.</p></div>'+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Patient experience <em>at the forefront.</em></h2></div><p data-r>SymPhysis Medical’s goal is to develop innovative technologies that treat a range of chronic diseases, putting the patient experience at the forefront of design to improve quality of life.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>Emerging Technology Innovation of the Year <i>2026</i></span><span>Future Health Summit Innovation Award <i>2025</i></span><span>Life Sciences Patient Impact Award <i>2025</i></span><span>Life Science Innovation Award <i>2023</i></span><span>MedTech Innovator cohort <i>2022</i></span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, funding <em>and the road to the US.</em></h2></div><p data-r>The latest from SymPhysis Medical: recognition at home, new investment, and the work toward first regulatory clearance.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>SymPhysis.</em></h2>'+
   '<p class="sub" data-r>We are always interested in hearing from industry partners and key opinion leaders, and from investors who want to support the future of Irish medtech.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="mailto:'+INVEST+'">Investor enquiries</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Galway</span><p data-r>SymPhysis Medical<br>Unit 5, ATU Innovation Hubs<br>Dublin Road, Galway H91 DCH9</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+INVEST+'">'+INVEST+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+35391752632">+353 (0)91 752 632</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Unit 5, ATU Innovation Hubs<br>Dublin Road, Galway H91 DCH9, Ireland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+353 (0)91 752 632</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/about">About</a><br><a class="ul" href="#/releaze">releaze™</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">releaze™</span>*Not currently for sale within the United States or the European Union.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Sofia Sans\',Arial,sans-serif;font-weight:300;font-size:74px;letter-spacing:.06em">SYMPHYSIS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SymPhysis Medical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",releaze:"releaze",mechanism:"story",milestones:"milestones",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SymPhysis Medical — releaze™ pleural effusion drainage",x:"Home"};
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
