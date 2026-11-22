/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function progRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><div class="pgm"><h3>'+esc(c[1])+'</h3></div>'+
   '<p>'+esc(c[2])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Many biomarkers, one test","Our platform detects multiple glycoform biomarkers in a single test, improving diagnostic accuracy and reducing false alarms. Antibody-free assays keep it cost-efficient.",'<path d="M28 44V30M28 30l-9-9M28 30l9-9M19 21l-5-6M19 21l1-8M37 21l5-6M37 21l-1-8"/><rect class="f" x="24.5" y="40" width="7" height="7"/><circle class="f" cx="28" cy="30" r="3"/><circle cx="19" cy="21" r="3"/><circle cx="37" cy="21" r="3"/><path class="a" d="M14 15l-2.6-3.6h5.2z"/><path class="a" d="M42 15l-2.6-3.6h5.2z"/>'],
  ["No new equipment","Tests run on the clinical triple quadrupole mass spectrometers pathology labs already own, and integrate with LIMS and existing workflows.",'<rect x="8" y="16" width="40" height="26"/><path d="M8 34h40M14 16v-4h28v4"/><path class="a" d="M14 29l5-8 4 5 5-10 5 9 4-3 5 7"/>'],
  ["Built for regulation","Developed to meet global IVD standards, with clear pathways for FDA and TGA registration, and backed by peer-reviewed clinical studies.",'<path d="M28 7l17 7v12c0 11-7 19-17 23-10-4-17-12-17-23V14z"/><path class="a" d="M20 28l6 6 11-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function gloss(){return '<dl class="gls">'+[["Glycoprotein","A protein with sugars attached."],["Glycan","The sugar molecule itself."],["Glycoform","A specific variant of a glycoprotein, defined by its sugar pattern."]].map(function(g){return '<div><dt class="lab" data-r>'+g[0]+'</dt><dd data-r>'+g[1]+'</dd></div>'}).join("")+'</dl>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Feature publications</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r><a class="ul" href="'+e[2]+'" target="_blank" rel="noopener">'+esc(e[1])+'</a></dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Our ovarian cancer biomarkers are licensed from QIMR Berghofer and validated through peer-reviewed studies with leading universities and scientific agencies.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Glycoproteomic diagnostics<span class="nomob"> · Women’s health</span> · Brisbane</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Precision diagnostics</span><span class="l">for better <em>health.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A clinical diagnostics company advancing multi-biomarker blood tests for women’s health, starting with ovarian cancer. Our tests read the sugars on blood proteins that most tumour markers ignore.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/oc-triage">OC-Triage</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">For most women with a suspicious ovarian mass, the only way to know what it means is surgery, and most of those masses turn out to be benign. Proseek Bio exists to <em>close the diagnostic gap.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">80%</span><p class="k">Of surgeries for suspected ovarian cancer are ultimately benign</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300K+</span><p class="k">Women diagnosed with ovarian masses globally each year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10&thinsp;µL</span><p class="k">Of serum from a standard blood draw is all OC-Triage needs</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How OC-Triage works</span><h2 class="d3">From one blood draw <em>to a clear answer.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Capture</span><span>Measure</span><span>Report</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A standard blood draw.</h2><p>About ten microlitres of serum carries thousands of glycoproteins. As disease develops, the sugar structures on some of them change.</p></article>'+
     '<article class="step"><h2>Lectins catch the glycoforms.</h2><p>Our reagent kit uses lectins on magnetic beads, proteins that bind specific sugar patterns, to pull out the disease-specific glycoforms. No antibodies needed.</p></article>'+
     '<article class="step"><h2>The lab’s own mass spectrometer reads them.</h2><p>The captured proteins are measured on an existing clinical LC-MS (MRM), reading protein and glycan signals together as one multi-biomarker signature.</p></article>'+
     '<article class="step"><h2>A clear, actionable report.</h2><p>Secure OC-Triage software turns the signature into a high or low likelihood result, to guide whether surgery is truly needed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Revealing the full <em>picture of disease.</em></h2></div><p data-r>Our proprietary Lectin Magnetic Bead Array–Mass Spectrometry platform (LeMBA-MS) detects disease-specific glycoforms: the unique sugar structures on proteins that change as conditions develop. Altered glycoforms have been linked to cancers, inflammatory disorders and autoimmune diseases.</p></div>'+
   gloss()+caps()+
  '</div></section>'+

  '<section class="sec dark2" id="oc-triage" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>OC-Triage and pipeline</span><h2 class="d2 split">Ovarian cancer first, <em>women’s health next.</em></h2></div><p data-r>CA-125, today’s standard test, is decades-old technology with poor sensitivity and specificity for clinical triage. OC-Triage is built to tell benign from malignant before surgery, and the platform is designed to extend well beyond a single indication.</p></div>'+
   progRows(PROG)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by science. <em>Driven by purpose.</em></h2></div><p data-r>Founded by Associate Professor Michelle Hill to fix the diagnostic delay that is costing women their lives. We don’t just invent new tests: we make sure they work in the real world, are easy to adopt, and are backed by partners who care about impact.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Our supporters</span><p class="cr" data-r><span>Edale Capital</span><span>Scale Investors</span><span>AngelLoop</span><span>AusHealth</span><span>CSIRO ON</span><span>Advance Queensland</span><span>Brisbane Economic Development Agency</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Momentum across funding, <em>programs and people.</em></h2></div><p data-r>A seed round, a global accelerator cohort, and new board and clinical leadership: the latest from Proseek Bio.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Laboratories, clinicians and investors</span>'+
   '<h2 class="big split">Talk to <em>Proseek Bio.</em></h2>'+
   '<p class="sub" data-r>Whether you run a pathology lab, refer patients, or invest in women’s health and diagnostics, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/mechanism">How OC-Triage works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Proseek Bio Pty Ltd<br>Brisbane, Queensland<br>Australia</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Acknowledgment of Country</span><p class="ack" data-r>Proseek Bio acknowledges the Elders and Ancestors of the lands upon which we live and work, the Jagera and Turrbul peoples.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Brisbane, Queensland<br>Australia</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/oc-triage">OC-Triage</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead test</span>OC-Triage · glycoproteomic blood test for suspicious ovarian masses</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Roboto\',Arial,sans-serif;font-weight:400;font-size:84px;letter-spacing:-.02em">Proseek bio.</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Proseek Bio</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story","oc-triage":"oc-triage",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Proseek Bio — precision glycoproteomic diagnostics for women's health",x:"Home"};
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
