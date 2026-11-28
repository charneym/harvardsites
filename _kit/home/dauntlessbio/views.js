/* ================= VIEWS (home only; nav items scroll to sections, build-out pages via the kit's buildout module) =================
   Sources: dauntlessbiotherapeutics.com (the hero line, "Who we are", "What we're doing", "Explore the science", the footer
   address and email) and NIH RePORTER project 1R43CA306683-01A1 (abstract, narrative, award amount and date, and
   "Josh Gregorio, Principal Investigator, CEO"). The CD155 figures come from the cited PDB entries. Nothing else is claimed. */
function caps(){var C=[
  ["One antigen, two jobs","<span class=\"nw\">CD155 feeds</span> <span class=\"nw\">the tumour</span>","Beyond promoting tumour growth and invasion, CD155 suppresses anti-tumour immunity through several checkpoint pathways. Hitting it does two things at once.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M28 11v34M11 28h34"/>'],
  ["Expression","<span class=\"nw\">More than</span> <span class=\"nw\">60% of cases</span>","CD155 is expressed in more than 60% of breast cancers, across triple-negative, HER2-positive and HER2-low disease, and high expression tracks with advanced stage and poor survival.",'<rect x="8" y="30" width="9" height="18"/><rect class="a" x="22" y="16" width="9" height="32"/><rect x="36" y="24" width="9" height="24"/>'],
  ["Potency","<span class=\"nw\">Sub-nanomolar potency,</span> <span class=\"nw\">strictly selective</span>","Conjugated to clinically validated payloads, our antibodies reached sub-nanomolar potency in vitro with strict selectivity for CD155-positive tumours.",'<path d="M10 46C10 46 20 14 28 14s18 32 18 32"/><path class="a" d="M8 46h40"/><circle class="a" cx="28" cy="22" r="3"/>'],
  ["Translation","<span class=\"nw\">A clear path</span> <span class=\"nw\">to the clinic</span>","The antibodies cross-react with non-human primate CD155, which gives a clear path to translational safety studies.",'<path d="M8 44h40"/><path class="a" d="M12 44V20M24 44V12M36 44V26"/><circle cx="36" cy="26" r="3"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["Optimise the lead antibodies","Aim 1 of the Phase I: refine the lead antibodies for drug-like properties while keeping both the immune-blocking function and the non-human primate cross-reactivity."],
  ["Build the conjugates","Aim 2: generate CD155-targeted conjugates with clinically validated payloads and characterise them across breast cancer models with varying CD155 expression."],
  ["Prove it in vivo","Aim 3: establish efficacy, pharmacokinetics and tolerability in xenograft models, setting the benchmarks a candidate has to clear to advance."],
  ["Toward an IND","The seed round funds lead optimisation, in vivo work and non-GLP toxicity studies in preparation for an IND filing; Phase II would take the lead into IND-enabling development."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function hist(){var H=[
  ["Today","A private preclinical oncology company in San Diego, led and advised by a team of researchers and industry veterans."],
  ["Aug 2026","The National Cancer Institute awards $400,000 under SBIR Phase I to take the CD155 programme toward clinical translation."],
  ["Next","Lead optimisation, in vivo efficacy and non-GLP toxicity studies, in preparation for an IND filing."]];
  return '<ol class="hst">'+H.map(function(h){return '<li data-r><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero.webp" width="693" height="555" alt="Space-filling model of the human CD155 ectodomain from PDB 4FQP, its three domains coloured, the membrane-distal D1 domain at the top" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Preclinical oncology<span class="nomob"> · San Diego, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">An antibody that</span> <span class="l"><em class="nw">does two jobs.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Dauntless Biotherapeutics is building a CD155-targeted antibody-drug conjugate: it kills the tumour cell it binds, and it lifts the immune suppression that same antigen drives.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/target">The target '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Cancers of unmet need</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Antibody-drug conjugates</span> <span class="nw">work until the antigen</span> <span class="nw">runs out or the tumour</span> <span class="nw">learns to hide.</span> <em><span class="nw">We picked an antigen</span> <span class="nw">that can do neither.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">60%</span><p class="k">of breast cancers express CD155, including triple-negative, HER2-positive and HER2-low disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">42,000</span><p class="k">deaths a year in the United States from metastatic breast cancer, the leading cause of cancer death in women</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$400k</span><p class="k">NCI SBIR Phase I award, August 2026, to take the programme toward clinical translation</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3"><span class="nw">Bind, kill,</span> <em class="nw">then let go.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Suppress</span><span>Bind</span><span>Deliver</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">CD155 holds</span> <span class="nw">the immune system off.</span></h2><p>On the tumour cell, CD155 engages checkpoint receptors such as TIGIT on T and NK cells, suppressing the anti-tumour response while it drives growth and invasion.</p></article>'+
     '<article class="step"><h2><span class="nw">The antibody</span> <span class="nw">takes the site.</span></h2><p>Our CD155-targeting antibodies occupy that interaction, blocking the immune suppression — and they cross-react with non-human primate CD155, which keeps the safety path clear.</p></article>'+
     '<article class="step"><h2><span class="nw">The payload</span> <span class="nw">goes in with it.</span></h2><p>Conjugated to clinically validated ADC payloads, the same antibody carries cytotoxic drug into the cell it binds: sub-nanomolar potency in vitro, with strict selectivity for CD155.</p></article>'+
     '<article class="step"><h2><span class="nw">The brakes</span> <span class="nw">come off.</span></h2><p>Direct tumour killing and the reversal of immune suppression in one molecule. In breast cancer xenograft models, that combination induced tumour regression across payload classes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="target" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The target</span><h2 class="d2 split"><span class="nw">CD155 is sitting there,</span> <em class="nw">clinically unexploited.</em></h2></div><p data-r>HER2- and TROP2-directed conjugates help, but heterogeneous antigen expression, fast resistance and no durable immune engagement cap what they can do. CD155 is a clinically unexploited antigen whose own biology answers all three.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Expressed across</span><p class="cr" data-r><span>Triple-negative breast cancer</span><span>HER2-positive</span><span>HER2-low</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split"><span class="nw">Three aims</span> <em class="nw">between here and an IND.</em></h2></div><p data-r>The Phase I plan is specific: optimise the leads, build and characterise the conjugates, then show efficacy, pharmacokinetics and tolerability in vivo.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Partnering and investment</span><p>We are running a seed round to fund lead optimisation, in vivo work and non-GLP toxicity studies ahead of an IND filing. Whether you are interested in partnering, investing or a career here, we would be glad to hear from you.</p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About Dauntless</span><h2 class="d2 split"><span class="nw">A small company</span> <em class="nw">on one hard problem.</em></h2></div><p data-r>Dauntless Biotherapeutics is a private preclinical oncology company in San Diego, led and advised by a team of researchers and industry veterans.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span><ul>'+
     '<li data-r><span class="nm">Josh Gregorio</span><span class="lab rl">Chief Executive Officer and Principal Investigator</span></li>'+
    '</ul></div>'+
    '<div class="engpol"><span class="lab kick" data-r>Where we are</span>'+hist()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r><span>National Cancer Institute, NIH</span><span>SBIR Phase I</span><span>Seed round in progress</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="funding" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Funding and sources</span><h2 class="d2 split"><span class="nw">The record,</span> <em class="nw">with its receipts.</em></h2></div><p data-r>The award, the round and the published structures this page draws on. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Partnering, investing,</span> <em class="nw">or joining us?</em></h2>'+
   '<p class="sub" data-r>Email us. We are glad to talk about the programme, the seed round or a role here.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Dauntless '+ARR+'</a><a class="btn" href="#/programme">See the programme</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span>Dauntless Biotherapeutics, Inc.</span><br><span>6868 Nancy Ridge Drive</span><br><span>San Diego, California 92121</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Stage</span><p data-r><span>Preclinical</span><br><span>Seed round in progress</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Dauntless Biotherapeutics, Inc., 6868 Nancy Ridge Drive, San Diego, California 92121</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/target">The target</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/funding">Funding</a></div>'+
   '<div class="c"><span class="lab">Leveraging the power of antibodies</span>To treat cancers of unmet need.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:400;font-size:50px;letter-spacing:.09em">DAUNTLESS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Dauntless Biotherapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",target:"target",programme:"programme",about:"about",funding:"funding",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Dauntless Biotherapeutics — A CD155-targeted antibody-drug conjugate",x:"Home"};
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
