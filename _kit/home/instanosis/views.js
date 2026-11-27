/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) =================
   Sources: instanosis.com (home, Technology, News, product pages, Contact), FDA 510(k) K240295, NIH RePORTER (NIDA SBIR awards),
   NIH SEED portfolio showcase. Nothing else is claimed. */
function caps(){var C=[
  ["FDA-cleared · OTC · CLIA-waived","<span class=\"nw\">InstaStrip</span> <span class=\"nw\">Fentanyl</span>","A dipstick test for the qualitative detection of fentanyl in human urine, at a cutoff of 1 ng/mL. FDA 510(k) K240295.",'<rect x="22" y="6" width="12" height="44"/><path class="a" d="M22 30H34M22 36H34"/>'],
  ["Harm reduction and forensic","<span class=\"nw\">FXN 3-in-1</span> <span class=\"nw\">test strip</span>","Fentanyl, xylazine and nitazene at the same time, from powder or liquid: cutoffs of 2, 10 and 50 ng/mL.",'<rect x="10" y="6" width="9" height="44"/><rect x="24" y="6" width="9" height="44"/><rect x="38" y="6" width="9" height="44"/><path class="a" d="M10 32H19M24 32H33M38 32H47"/>'],
  ["FDA Breakthrough Device","<span class=\"nw\">Xylazine</span> <span class=\"nw\">rapid test</span>","The Xylazine Rapid Test (Urine) was granted Breakthrough Device designation in February 2026, the company&#39;s second.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M18 29L25 36L39 21"/>'],
  ["Reagents","<span class=\"nw\">Anti-fentanyl</span> <span class=\"nw\">antibody H16</span>","A monoclonal rabbit anti-fentanyl antibody for ELISA and lateral-flow assays in urine and saliva.",'<path d="M28 50V30M28 30L14 12M28 30L42 12"/><path class="a" d="M10 16L18 8M38 8L46 16"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["Hospitals and health systems","CLIA-waived, FDA-cleared diagnostics for rapid triage and overdose response, anywhere in the health system."],
  ["Harm reduction and outreach","Test strips and field kits for outreach, shelters, syringe services and mobile programs, now also in vending machines."],
  ["Forensic and law enforcement","Fast, accurate detection of fentanyl, xylazine and nitazene in the field, with no lab required."],
  ["GPOs and distributors","FDA-cleared, CLIA-waived diagnostics made in the U.S., deployed system-wide in minutes."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["2024","FDA clears InstaStrip Fentanyl (510(k) K240295): CLIA-waived and OTC. NIH fast-track and Blueprint MedTech SBIR awards follow."],
  ["2025","An NIH NIDA SBIR award for an instrument-free oral fluid fentanyl test, and an award for xylazine detection technology."],
  ["2026","A second FDA Breakthrough Device designation, and a first FDA inspection passed with zero observations."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1134" height="655" alt="The Instanosis Fentanyl / Xylazine / Nitazene test strip kit with two single-strip pouches" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Rapid drug detection<span class="nomob"> · King of Prussia, PA</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Hospital-grade</span> <span class="l"><em class="nw">drug detection,</em></span> <span class="l"><em class="nw">anywhere.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Instanosis makes FDA-cleared, CLIA-waived rapid tests and field strips for fentanyl, xylazine and nitazene: high-sensitivity lateral flow, read by eye, with no instrument.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our tests '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Bringing high-performance diagnostics to the patient&#39;s side</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Drug supplies change</span> <span class="nw">faster than labs can.</span> <em><span class="nw">We put lab-grade</span> <span class="nw">sensitivity on a strip,</span> <span class="nw">wherever the decision</span> <span class="nw">is made.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 ng/mL</span><p class="k">fentanyl cutoff of InstaStrip Fentanyl in urine, FDA-cleared, OTC and CLIA-waived</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200×</span><p class="k">more sensitive than another xylazine strip in an independent CFSRE evaluation, with 100% specificity</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,000+</span><p class="k">urine samples in clinical validation</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a strip reads</span><h2 class="d3"><span class="nw">Dip, wait,</span> <em class="nw">read by eye.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Dip</span><span>Flow</span><span>Read</span><span>Three in one</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Dip the strip</span> <span class="nw">in the sample.</span></h2><p>Urine for InstaStrip Fentanyl; for the field strips, a sample of powder or liquid dissolved in water. No instrument, no lab.</p></article>'+
     '<article class="step"><h2><span class="nw">The sample flows</span> <span class="nw">up the strip.</span></h2><p>A lateral-flow immunoassay: the sample wicks along the membrane past antibody reagents tuned for the target drug.</p></article>'+
     '<article class="step"><h2><span class="nw">A sharp,</span> <span class="nw">clear readout.</span></h2><p>InstaStrip technology gives a drastic contrast between negative and positive readouts and a sharp transition at the cutoff, at or below 1 ng/mL.</p></article>'+
     '<article class="step"><h2><span class="nw">Three drugs,</span> <span class="nw">one test.</span></h2><p>The FXN 3-in-1 strip checks fentanyl, xylazine and nitazene at once, with cutoffs of 2, 10 and 50 ng/mL.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Tests that see</span> <em class="nw">trace amounts.</em></h2></div><p data-r>Our diagnostics are hundreds of times more sensitive than the state of the art, for clinical care, harm reduction, forensic work and clinical trials. Made in the U.S.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Services</span><p class="cr" data-r><span>Lateral-flow development</span><span>Contract manufacturing</span><span>Nanobody development</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">From the ER</span> <em class="nw">to the street.</em></h2></div><p data-r>The same high-sensitivity technology, packaged for each setting where a fast, reliable answer changes what happens next.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Research</span><p>Peer-reviewed work with the University of Pennsylvania, Mayo Clinic and others, from a chemiluminescence fentanyl assay (Clinical Chemistry, 2024) to quantitative lateral flow without an instrument (ACS Applied Bio Materials, 2026).</p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">Diagnostics,</span> <em class="nw">made portable.</em></h2></div><p data-r>A start-up diagnostic company focused on bringing high-performance diagnostics to the patient&#39;s side, starting with the rapid detection of emerging drug substances.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Dr. Ping Wang</span><span class="lab rl">Co-founder</span></li>'+
     '<li data-r><span class="nm">Dr. Xiaofeng Xia</span><span class="lab rl">Principal investigator, NIH SBIR</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r><span>NIH</span><span>National Institute on Drug Abuse</span><span>SBIR</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Zero observations,</span> <em class="nw">first time.</em></h2></div><p data-r>Clearances, designations, funding and research. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Have any</span> <em class="nw">questions?</em></h2>'+
   '<p class="sub" data-r>Health systems, outreach programs, forensic teams, distributors and development partners: tell us what you need to detect.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Instanosis '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Instanosis Inc.</span><br><span>1004 W 9th Avenue</span><br><span>King of Prussia, PA 19406</span></p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>'+TELT+'</span></p></div>'+
    '<div><span class="lab" data-r>Regulatory</span><p data-r><span>FDA-cleared, CLIA-waived</span><br><span>Made in the U.S.</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Instanosis Inc., 1004 W 9th Avenue, King of Prussia, PA 19406</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Made in the U.S.</span>Rapid, high-sensitivity tests for fentanyl, xylazine and nitazene.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:600;font-size:52px;letter-spacing:.06em">INSTANOSIS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Instanosis Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",products:"products",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Instanosis — Hospital-grade drug detection, anywhere",x:"Home"};
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
