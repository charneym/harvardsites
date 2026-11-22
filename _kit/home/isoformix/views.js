/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function assayRows(){return '<ul class="pfr asy">'+ASSAYS.map(function(c,i){
  return '<li><span class="lab tg"><b>'+String(i+1).padStart(2,"0")+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[0])+'</h3><span class="loc">Plasma · Serum · CSF</span></div>'+
   '<p>'+esc(c[2])+'</p><span class="lab lk">Mass spec'+(c[0]==="SAA"?' · ELISA':'')+'</span></li>'}).join("")+'</ul>'}
function prices(){return '<div class="prc"><span class="lab kick" data-r>Pricing<br>per assay</span><div><dl>'+PRICE.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Serum amyloid A by ELISA: $50 per assay, plus a one-time $500 assay set-up fee. These assays are for Research Use Only (RUO). They have not been cleared or approved by the U.S. Food and Drug Administration and are not intended for use in diagnostic procedures or patient management.</p></div></div>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Isoform-resolved","Each assay measures the intact protein, so isoforms, truncations, glycoforms and allelic variants show up side by side, and their ratios can be read directly.",'<path d="M6 46h44"/><path d="M14 46L17 24 20 46"/><path class="a" d="M24 46L27 10 30 46"/><path d="M36 46L38 32 40 46"/>'],
  ["Plate capture, MALDI readout","An antibody-coated well captures one protein from the sample; MALDI-TOF mass spectrometry then weighs every form the antibody retrieved. Simple, robust and cost-effective.",'<path d="M12 12v22a16 16 0 0 0 32 0V12"/><path class="a" d="M22 30l6 -6 6 6M28 24v-10"/>'],
  ["Proven in large cohorts","The assays have been demonstrated and used in larger cohorts, including the Multi-Ethnic Study of Atherosclerosis and Alzheimer’s disease cohorts with matched CSF and plasma.",'<circle cx="18" cy="20" r="6"/><circle cx="38" cy="20" r="6"/><circle class="a" cx="28" cy="36" r="6"/><path d="M8 48c2-8 18-8 20 0M28 48c2-8 18-8 20 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>National Institute on Aging</span><i>·</i><span>National Institute of General Medical Sciences</span><i>· NIH SBIR awards since 2018</i></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Protein isoform assays<span class="nomob"> · Alzheimer’s disease</span> · Sugar Land, TX</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Protein isoforms,</span><span class="l">measured. New targets</span><span class="l"><em>for Alzheimer’s.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Isoformix develops mass spectrometry assays for protein isoform biomarkers, from the apoE isoforms to clusterin glycoforms, and works with clinical researchers around the world to discover new therapeutic targets for Alzheimer’s disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/assays">Our assays '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div></div>'+
   '<span class="lab hcap" aria-hidden="true">Apolipoprotein E4, N-terminal domain · PDB 1GS9<br><b>Arg112</b> and <b>Arg158</b> set E2, E3 and E4 apart</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why isoforms</span>'+
   '<h2 class="txt" id="mani">A single gene can make many forms of a protein, and the differences matter. ApoE comes as E2, E3 and E4, and E4 is the strongest genetic risk factor for late-onset Alzheimer’s. Isoformix measures each form, <em>glycans and all.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Apolipoprotein isoform assays, from plasma, serum and cerebrospinal fluid</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">E2 E3 E4</span><p class="k">ApoE isoforms and their glycoforms, resolved in a single mass spectrum</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">NIH SBIR awards to Isoformix since 2018, from NIA and NIGMS</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How an isoform assay works</span><h2 class="d3">Capture the protein, <em>then weigh every form.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Capture</span><span>Weigh</span><span>Read out</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Capture, in the well.</h2><p>Plasma, serum or CSF goes into an antibody-coated 96-well plate. The antibody pulls one protein out of the sample, apoE for instance, in all of its forms, and everything else is rinsed away.</p></article>'+
     '<article class="step"><h2>Weigh it, intact.</h2><p>The captured protein is eluted onto a MALDI target. A laser pulse lifts the molecules into the time-of-flight mass spectrometer, and each form reaches the detector according to its mass.</p></article>'+
     '<article class="step"><h2>Read every form.</h2><p>One spectrum shows each isoform the antibody retrieved, and every glycosylated form of each. Their signals give the ratios, reported as relative abundance: here, an E3/E4 carrier.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Mass spectrometry, <em>with an immunoassay’s simplicity.</em></h2></div><p data-r>Isoformix combines the best of enzyme immunoassays, plate-based antibody capture, with the direct detection of MALDI-TOF mass spectrometry. Instead of a reporter antibody, the mass of the protein itself identifies it.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="assays" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Assays and services</span><h2 class="d2 split">Six apolipoproteins, <em>every form counted.</em></h2></div><p data-r>Isoformix analyses apolipoproteins from human plasma, serum and cerebrospinal fluid with its mass spectrometry-based assays, as a service to research groups.</p></div>'+
   assayRows()+
   prices()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Three decades of <em>protein assays.</em></h2></div><p data-r>Isoformix was founded in 2017 to commercialise protein isoform assays, and more recently to discover new targets for the treatment of Alzheimer’s disease.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Before Isoformix</span><p data-r>Dr. Nedelkov spent fifteen years at Intrinsic Bioprobes, leading early commercialisation of targeted proteomics until its acquisition by Thermo Scientific, then the Molecular Biomarkers Unit at ASU’s Biodesign Institute.</p></div>'+
    '<div><span class="lab kick" data-r>Track record</span><p data-r>More than 100 peer-reviewed articles, more than 60 scientific meetings, four issued patents, and principal investigator on more than ten NIH grants.</p></div>'+
    '<div><span class="lab kick" data-r>Collaboration</span><p data-r>Isoformix works with clinical researchers around the world, using its proprietary technology and assays to bring new insight into the pathophysiology of Alzheimer’s disease.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Recent work, <em>with our collaborators.</em></h2></div><p data-r>Peer-reviewed papers and preprints from Isoformix and its clinical partners, on apoE glycosylation in Alzheimer’s disease and apolipoprotein proteoforms in cardiometabolic risk.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Research groups, cohorts and partners</span>'+
   '<h2 class="big split">Send us your <em>samples.</em></h2>'+
   '<p class="sub" data-r>Whether you run a cohort study, a clinical lab or a drug programme, we would be glad to talk about apolipoprotein isoform analysis and collaboration.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Isoformix '+ARR+'</a><a class="btn" href="#/assays">See the assays</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>Isoformix Inc.<br>202 Industrial Blvd., Suite 404<br>Sugar Land, TX 77478</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Samples</span><p data-r>Human plasma, serum and cerebrospinal fluid. Research Use Only.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>Isoformix Inc.<br>202 Industrial Blvd., Suite 404<br>Sugar Land, TX 77478</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/assays">Assays</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Protein isoform assays and new therapeutic targets for Alzheimer’s disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="78" text-anchor="middle" style="font-family:\'Oswald\',\'Arial Narrow\',sans-serif;font-weight:300;font-size:84px;letter-spacing:.06em">ISOFORMIX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Isoformix Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",mechanism:"story",technology:"technology",assays:"assays",team:"team",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Isoformix — protein isoform assays and new targets for Alzheimer’s disease",x:"Home"};
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
