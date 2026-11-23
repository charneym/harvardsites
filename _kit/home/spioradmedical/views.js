/* ================= VIEWS (home only: Technology / Progress / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function caps(){return '<div class="plat caps">'+CAPS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><p data-r>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Large-bore vascular closure<span class="nomob"> · Galway, Ireland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Simplifying</span><span class="l">the closure of</span><span class="l"><em>femoral artery access.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Spiorad Medical is developing a closure device for the large 12F–24F femoral artery access sites left by structural heart and vascular procedures such as TAVI and EVAR, built for ease of use, good outcomes and faster recovery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Render: a large-bore introducer sheath through the wall of the common femoral artery. Illustrative, not Spiorad’s device.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">TAVI, EVAR and other structural procedures now pass sheaths up to 8 mm wide through the femoral artery. At the end of every case, that opening has to be closed. <em>Spiorad is making that step simpler, faster and safer.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12–24F</span><p class="k">Femoral artery access sites the device is being designed to close</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€1.7M</span><p class="k">Disruptive Technologies Innovation Fund award to the Spiorad-led consortium, November 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,600+</span><p class="k">Applicants to the MedTech Innovator Accelerator 2024, which shortlisted Spiorad</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Closing a large hole, <em>simply.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Access</span><span>Opening</span><span>Seal</span><span>Recovery</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A large opening, by design.</h2><p>Transcatheter valve and aortic repair procedures pass sheaths of 12F to 24F, 4 to 8 mm across, through the wall of the common femoral artery.</p></article>'+
     '<article class="step"><h2>Then it has to be closed.</h2><p>When the sheath comes out, a large hole is left in an artery under full arterial pressure. Spiorad’s founders see today’s closure options as hard to use, with too many complications.</p></article>'+
     '<article class="step"><h2>A seal from the outside.</h2><p>Spiorad’s device is being developed to act like an external seal on the artery, stopping the bleeding quickly and safely. The drawing is a schematic, not the device’s design.</p></article>'+
     '<article class="step"><h2>Back on their feet sooner.</h2><p>Simple, reliable closure is meant to make life easier for interventionalists and to support the best clinical outcomes and faster patient recovery.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Design goals</span><h2 class="d2 split">Built for <em>the largest access sites.</em></h2></div><p data-r>Spiorad combines advanced medical intervention with device innovation to close large-bore femoral artery access, one of the most demanding steps in structural interventions.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="progress" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Progress</span><h2 class="d2 split">From a gap in the market <em>to a funded programme.</em></h2></div><p data-r>Founded in 2021, Spiorad is developing its device in Galway with academic and design partners, backed by Enterprise Ireland and the Irish Government.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Consortium</span><p class="cr" data-r><span>University of Galway</span><i>·</i><span>Dolmen Design and Innovation</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Clinicians and <em>medtech builders.</em></h2></div><p data-r>Founded by a vascular physiologist turned medtech commercial leader and a consultant interventional cardiologist with extensive experience of large-bore closure devices.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Backed <em>to accelerate.</em></h2></div><p data-r>Recent milestones for Spiorad Medical, from the MedTech Innovator shortlist to Government DTIF funding.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Simplify <em>large-bore closure.</em></h2>'+
   '<p class="sub" data-r>To talk about the device, a clinical collaboration, a partnership or an investment, write to the Spiorad Medical team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Business Innovation Centre<br>University of Galway, Ireland</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+3538526112124">'+TEL+'</a></p></div>'+
   '</div>'+
   '<p class="ivd" data-r>Device in development. Not available for sale.</p>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Business Innovation Centre,<br>University of Galway</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/progress">Progress</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+3538526112124">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Closure of large-bore<br>femoral artery access</div>'+
  '</div><div class="flogo" aria-hidden="true"><img src="data:image/png;base64,__LOGOBIG__" alt="" width="1181" height="256"></div>'+
  '<div class="legal"><span class="lab">© 2026 Spiorad Medical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",capabilities:"capabilities",progress:"progress",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Spiorad Medical — large-bore femoral artery closure, Galway, Ireland",x:"Home"};
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
