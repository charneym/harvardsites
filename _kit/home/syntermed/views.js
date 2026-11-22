/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Automated Clinical Intelligence","Hundreds of evidence-based clinical rules applied automatically to every patient study: decades of validated clinical knowledge, at the moment of the read.",'<path d="M10 14h36M10 26h36M10 38h22"/><path class="a" d="M36 40l5 5 9-12"/>'],
  ["Integrated risk score","The Vall d’Hebron Risk Score (VHRS) is built into the read, so risk sits beside perfusion, function and flow in one place.",'<path d="M8 42a20 20 0 0 1 40 0"/><path class="a" d="M28 42L39 27"/><circle class="f" cx="28" cy="42" r="3"/>'],
  ["One-click justification","SmartReport turns segmental scores into a structured report and a natural-language finding, and shows the physician why, ready to review, edit and approve.",'<path d="M14 6h22l8 8v36H14z"/><path d="M20 22h18M20 30h18M20 38h10"/><path class="a" d="M36 6v8h8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Cardiac Toolbox modules</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>One fully integrated, multi-modality suite, with HIPAA-compliant cloud reading and reporting through Syntermed Live. All Syntermed solutions are 510(k) cleared, ISO certified and carry the CE mark.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nuclear medicine software<span class="nomob"> · Since 1999</span> · Atlanta, GA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Nuclear imaging,</span><span class="l"><em>in numbers.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Syntermed builds the software that quantifies SPECT, PET and CT images of the heart and brain: Cardiac Toolbox, NeuroQ, aPROMISE and Syntermed Live, used by cardiology, nuclear medicine and radiology labs worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/solutions">Our solutions '+ARR+'</a><a class="btn" href="#/cardiology">How a study is read</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What we do</span>'+
   '<h2 class="txt" id="mani">A nuclear scan shows how the heart and brain are working. Syntermed turns it into <em>numbers a physician can trust:</em> quantified, compared with validated normal databases, and reported.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1999</span><p class="k">Founded in Atlanta; privately held, serving labs worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1M</span><p class="k">Studies hosted on the Syntermed Live cloud platform</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25+</span><p class="k">Years as exclusive licensee of the Emory Cardiac Toolbox, acquired in 2025</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Cardiology</span><h2 class="d3">From the scan <em>to the report.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Process</span><span>Score</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Process the study.</h2><p>Cardiac Toolbox reads the SPECT or PET myocardial perfusion study and slices the left ventricle from base to apex, measuring the tracer in its wall, slice by slice.</p></article>'+
     '<article class="step"><h2>Score every segment.</h2><p>The slices unroll into one polar map, and Syntermed’s Intelligent Decision Support converts the study into segmental quantitative scores, compared against a normal database.</p></article>'+
     '<article class="step"><h2>Write the report, show the why.</h2><p>SmartReport propagates a structured report for perfusion, function and viability, with a natural-language defect phrase. The physician sees the justifications, then reviews, edits and approves.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Cardiac Toolbox</span><h2 class="d2 split">Decades of evidence, <em>in every read.</em></h2></div><p data-r>Cardiac Toolbox, built on the Emory Cardiac Toolbox developed by Ernest V. Garcia, PhD, at Emory University School of Medicine, is one of the most widely applied cardiac imaging systems in the world. Version 4 was the first nuclear cardiology AI platform to receive FDA 510(k) clearance, ISO certification and the CE mark.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>For readers</span><p data-r>Fewer clicks, fewer screens, faster reporting: Faster. Consistent. Explainable.</p></div>'+
    '<div><span class="lab kick" data-r>For labs</span><p data-r>Compatible with virtually any nuclear medicine workstation, or any PC or Mac that runs Microsoft Windows.</p></div>'+
    '<div><span class="lab kick" data-r>Worldwide</span><p data-r>Available through all major OEM imaging providers, leading value-added resellers and solution providers, and directly from Syntermed.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="solutions" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solutions</span><h2 class="d2 split">Heart, brain <em>and beyond.</em></h2></div><p data-r>Four product lines, one aim: to advance the value of nuclear imaging with quantitative, reproducible decision support across cardiology, neuroradiology and oncology.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Medicine and software, <em>in balance.</em></h2></div><p data-r>Syntermed’s executive and technical teams pair experience in medicine and in software. Its founders bring over 75 years of combined experience in developing and commercializing medical imaging software.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Emory University</span><p data-r>A collaboration of more than 25 years, which in 2025 became full ownership of the Cardiac Toolbox.</p></div>'+
    '<div><span class="lab kick" data-r>Quality</span><p data-r>Compliant with FDA Quality System and 510(k) regulations and with EU regulations: ISO 13485:2016 (FM 670241), CE Mark (696491).</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>Applications support, online demonstrations, learning resources and a free 30-day trial of NeuroQ for new labs.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Nuclear is evolving. <em>So are we.</em></h2></div><p data-r>From the acquisition of the Emory Cardiac Toolbox to new FDA clearances, and where to meet the team next.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Labs, partners and resellers</span>'+
   '<h2 class="big split">Talk to <em>Syntermed.</em></h2>'+
   '<p class="sub" data-r>For new inquiries, demonstrations and trials, write to Syntermed or call the Atlanta office. Existing clients reach support through the client help desk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Syntermed '+ARR+'</a><a class="btn" href="tel:+18882634446">(888) 263-4446</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Syntermed, Inc.<br>333 Sandy Springs Circle NE<br>Suite 107<br>Atlanta, GA 30328</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Tel (888) 263-4446<br>Fax (888) 216-7511</p></div>'+
    '<div><span class="lab" data-r>Next event</span><p data-r><a class="ul" href="https://eanm26.eanm.org/" target="_blank" rel="noopener">EANM 2026, Vienna</a><br>Booth 311</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>333 Sandy Springs Circle NE<br>Suite 107, Atlanta, GA 30328</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>(888) 263-4446</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/cardiology">Cardiology</a><br><a class="ul" href="#/solutions">Solutions</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Solutions</span>Cardiac Toolbox<br>NeuroQ<br>aPROMISE<br>Syntermed Live</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 700 62" aria-hidden="true"><text x="350" y="52" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:400;font-size:66px;letter-spacing:-.01em">Syntermed</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Syntermed, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",cardiology:"story",platform:"platform",solutions:"solutions",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Syntermed — Quantitative software for nuclear cardiology, brain imaging and PSMA PET/CT, Atlanta, GA",x:"Home"};
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
