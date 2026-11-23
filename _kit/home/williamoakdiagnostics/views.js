/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Convenient","Accurate testing outside of a lab, allowing for deficiency tests by a healthcare professional, or for self-testing in adults.",'<path d="M10 26L28 11l18 15"/><path d="M15 22v24h26V22"/><path class="a" d="M24 46V34h8v12"/>'],
  ["Simple","With our patent-pending technology, sample collection and testing are extremely simple, at the push of a button.",'<rect x="12" y="14" width="32" height="30"/><ellipse class="a" cx="28" cy="29" rx="7" ry="9"/><path d="M28 4v6"/>'],
  ["Bespoke","Conventional blood collection for micronutrient deficiencies can be invasive and uncomfortable. Our low-volume test, using capillary blood collection, makes it easier and more comfortable for children as well as adults.",'<path d="M20 50V30c0-5 3-8 8-8s8 3 8 8v20"/><path d="M24 30h8"/><path class="f" d="M28 4c3 4 5 7 5 9a5 5 0 0 1-10 0c0-2 2-5 5-9z"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function approach(){var A=[
  ["01","Targeted","A novel algorithm uses macro-testing data to target those most in need, reducing unnecessary testing."],
  ["02","Connected","Results upload automatically to patient healthcare records, for fast-track and referral if needed."],
  ["03","Personal thresholds","Deficiency thresholds can change with prognostic factors such as age, diet or ethnicity."],
  ["04","Closer to home","Testing at home, or in pharmacies, will free up GP appointments and reduce anxiety for patients."]];
  return '<ul class="apr">'+A.map(function(r){return '<li><span class="lab n">'+r[0]+'</span><h3>'+esc(r[1])+'</h3><p>'+esc(r[2])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Point-of-care micronutrient testing<span class="nomob"> · Cambridge, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Micronutrient tests,</span><span class="l">at the push</span><span class="l"><em>of a button.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>William Oak Diagnostics, a University of Cambridge spin-out, is developing a point-of-care test with integrated blood collection that identifies micronutrient deficiencies from a low-volume capillary sample, in the clinic, in pharmacies or at home.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/test">How the test works '+ARR+'</a><a class="btn" href="#/approach">Our approach</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our vision</span>'+
   '<h2 class="txt" id="mani">To eliminate micronutrient deficiencies and allow people to live healthier, longer lives, by empowering clinicians and individuals to <em>better monitor and treat them.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3×</span><p class="k">Nutritional deficiencies have tripled in the UK over the last ten years</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">57k</span><p class="k">Emergency admissions to UK hospitals each year are caused by iron-deficiency anaemia</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2,500</span><p class="k">Square feet of laboratory and office space at the Bertarelli Building, Bourn, from July 2025</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our test · point of care</span><h2 class="d3">From a fingertip <em>to a result.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Collect</span><span>Push</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Capillary blood, collected in the test.</h2><p>Traditional micronutrient testing sends a relatively large volume of blood to a central lab: slow, invasive and costly. Our test collects a low-volume capillary sample in its own integrated blood collector.</p></article>'+
     '<article class="step"><h2>One push of a button.</h2><p>With our patent-pending technology, sample collection and testing are extremely simple: one push of a button, by a healthcare professional or, for adults, as a self-test.</p></article>'+
     '<article class="step"><h2>Deficiencies, read on the spot.</h2><p>The test identifies key micronutrient deficiency markers at the point of care, and results can upload automatically to the patient’s healthcare record for fast-track and referral if needed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Accurate testing, <em>outside the lab.</em></h2></div><p data-r>Our innovative point-of-care test with integrated blood collection simplifies the identification of numerous micronutrient deficiencies. With just a push of a button, we are making testing of key deficiency markers accessible.</p></div>'+
   caps()+
   '<p class="note-s tnote" data-r>William Oak’s point-of-care test is in development. Figures: williamoakdiagnostics.com; laboratory space: Eddisons, via Commercial News Media, July 2025.</p>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">Empowerment through <em>at-home testing.</em></h2></div><p data-r>Micronutrient deficiencies can have devastating effects across numerous clinical groups, with maternal, child and elderly populations most at risk. Our approach is built around the people who need testing most.</p></div>'+
   approach()+
   '<div class="ev light-ev"><span class="lab kick" data-r>Programme</span><dl>'+
    '<div><dt class="lab">Project</dt><dd>A point-of-care diagnostic for vitamin K deficiency in neonates</dd></div>'+
    '<div><dt class="lab">Funding</dt><dd>NIHR Invention for Innovation (i4i) FAST, awarded October 2022</dd></div>'+
    '<div><dt class="lab">Aim</dt><dd>Identify newborns at high risk of vitamin K deficiency bleeding early, so clinicians can prevent it</dd></div>'+
    '<div><dt class="lab">Why newborns</dt><dd>Babies are born with very low vitamin K levels and gut bacteria that cannot yet make enough of it</dd></div>'+
   '</dl></div>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Lateral flow, assays <em>and device design.</em></h2></div><p data-r>A University of Cambridge spin-out founded by Dr Alexander Patto and Tim Dwyer, with decades of experience in lateral flow, immunoassays and medical device development, now in laboratories at the Bertarelli Building in Bourn, South Cambridgeshire.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Partners, funders and collaborators</span><p class="cr" data-r><span>NIHR</span><span>Medical Research Council</span><span>Wellcome Trust</span><span>Innovate UK</span><span>SBRI</span><span>MedTech SuperConnector</span><span>Synnovis</span><span>Norfolk and Norwich University Hospitals</span><span>NHS Scotland</span><span>Imperial College London</span><span>University of East Anglia</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, people <em>and a new lab.</em></h2></div><p data-r>The latest from William Oak Diagnostics, from NIHR funding for a newborn vitamin K test to the move into laboratories at Bourn.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>William Oak.</em></h2>'+
   '<p class="sub" data-r>Whether you care for patients at risk of micronutrient deficiencies, want to collaborate on point-of-care testing, or are interested in investing, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+EMAIL+'">Email us '+ARR+'</a><a class="btn" href="#/test">How the test works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>Bertarelli Building<br>Bourn, South Cambridgeshire</p></div>'+
    '<div><span class="lab" data-r>Registered address</span><p data-r>14 Station Road<br>Chatteris, PE16 6AG</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+EMAIL+'">alex@<wbr>williamoakdiagnostics.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>Bertarelli Building<br>Bourn, South Cambridgeshire</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+EMAIL+'">Email us</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/test">Our test</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">In development</span>Point-of-care micronutrient testing with integrated blood collection</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Fraunces\',Georgia,serif;font-weight:300;font-size:76px;letter-spacing:.01em">William Oak</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 William Oak Diagnostics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",test:"story",technology:"technology",approach:"approach",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"William Oak Diagnostics — point-of-care micronutrient testing, Cambridge",x:"Home"};
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
