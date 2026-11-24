/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk av"><a class="ul" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+' '+ARR+'</a></span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Design","RF coil design","RF hardware for high-field and ultra-high field MRI and spectroscopy, with the know-how to prototype rapidly for the research community.",'<path d="M12 40c0-9 7-16 16-16s16 7 16 16"/><path class="a" d="M18 40c0-6 4.5-10 10-10s10 4 10 10"/><circle class="f" cx="28" cy="40" r="2.4"/><path d="M6 44h44"/>'],
  ["Integration","Hardware and installation","WaveTronica builds and installs RF hardware for MRI research, including system integration, with an established network among the leading MRI producers.",'<rect x="8" y="12" width="40" height="32"/><path d="M8 28h40"/><path class="a" d="M20 28c0-4.5 3.6-8 8-8s8 3.5 8 8"/><path d="M14 50h28"/>'],
  ["Safety","RF safety and phantoms","(Multi-transmit) SAR simulations, RF safety assessments, and phantoms built for MRI safety validation.",'<path d="M20 8h16M23 8v12L12 44a4 4 0 0 0 4 6h24a4 4 0 0 0 4-6L33 20V8"/><path class="a" d="M16 38h24"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>RF coils for MRI<span class="nomob"> · Spin-off of UMC Utrecht</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">MRI hardware</span><span class="l">for metabolic</span><span class="l"><em>cancer imaging.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>WaveTronica designs, builds and installs RF coils for high-field and ultra-high field MRI and spectroscopy, and is bringing the MIRACLE breast coil, a virtual biopsy of chemotherapy response, to the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How MIRACLE works '+ARR+'</a><a class="btn" href="#/projects">Projects</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Between research and the clinic</span>'+
   '<h2 class="txt" id="mani">WaveTronica bridges the gap between researchers demanding beyond state-of-the-art MRI and the large companies that provide clinical systems, <em>with the hardware, system integration and safety assessments to image patients in new ways.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2018</span><p class="k">Founded as a spin-off company from UMC Utrecht</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><p class="k">Partners in ILLUMINATE, a Horizon Europe IHI consortium on metabolic MRI and theranostics</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">14 T</span><p class="k">DYNAMIC: the world’s first MRI scanner for human use at 14 tesla, a €19 million NWO Roadmap project</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology · MIRACLE</span><h2 class="d3">A virtual biopsy, <em>without a needle.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Add on</span><span>Detect</span><span>Decide</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A coil added to the scanner.</h2><p>The MIRACLE coil is a plug-and-play add-on for existing 7 tesla MRI scanners, adaptable to Philips, Siemens and GE systems.</p></article>'+
     '<article class="step"><h2>Phosphorus signals, resolved.</h2><p>Using 7T phosphorus signal detection, the coil reads the tumour’s metabolism. Where the standard shows a single low-resolution peak, MIRACLE resolves several biomarker peaks.</p></article>'+
     '<article class="step"><h2>An answer after one or two rounds.</h2><p>Today chemotherapy efficacy is judged on tumour size after six rounds. MIRACLE determines it from biomarkers after one to two, so care can change course sooner.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="expertise" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we do</span><h2 class="d2 split">RF hardware for <em>ultra-high field.</em></h2></div><p data-r>WaveTronica is an MRI company that builds and installs RF hardware for MRI research. Our aim is to assist researchers in reaching their goals with state-of-the-art technical solutions.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="projects" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Projects</span><h2 class="d2 split">Funded work, <em>in consortium.</em></h2></div><p data-r>WaveTronica works inside European and Dutch research consortia, from metabolic MRI for cancer treatment to the world’s first 14 tesla MRI for human use.</p></div>'+
   pipeRows(PROJ)+
   '<div class="bk"><span class="lab kick" data-r>Consortium partners</span><p class="cr" data-r>'+PARTNERS.map(function(p){return '<span>'+esc(p)+'</span>'}).join('<i>·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Coil engineers <em>in Geldermalsen.</em></h2></div><p data-r>WaveTronica was founded in 2018 as a spin-off from UMC Utrecht, and works from Geldermalsen with partners across Europe.</p></div>'+
   '<div class="wt-team">'+
    '<figure class="wt-ph" data-r><img src="team.webp" alt="The WaveTronica MIRACLE team outside the office in Geldermalsen" width="1600" height="900" loading="lazy"><figcaption class="lab">The MIRACLE team of WaveTronica at the office in Geldermalsen</figcaption></figure>'+
    '<article class="wt-ceo"><div class="wt-pt" data-r><img src="aidin.webp" alt="Aidin Ali-Haghnejad" width="480" height="600" loading="lazy"></div>'+
     '<div><h3 data-r>Aidin Ali-Haghnejad</h3><p class="wt-ttl" data-r>Chief Executive Officer</p>'+
     '<p data-r>Many years of experience in RF coil engineering. His career started at the UMC Utrecht 7T lab, working on state-of-the-art RF coils for clinical applications such as phosphorus spectroscopy and arterial spin labelling, with extensive practical experience building phantoms for MRI safety validation.</p></div></article>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>WaveTronica.</em></h2></div><p data-r>First scans, consortia and conferences, from the MIRACLE breast coil to metabolic MRI for theranostics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, clinicians and partners</span>'+
   '<h2 class="big split">Talk to <em>WaveTronica.</em></h2>'+
   '<p class="sub" data-r>We look forward to working with you on all MRI hardware related projects.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email WaveTronica '+ARR+'</a><a class="btn" href="#/projects">See the projects</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Visiting address</span><p data-r>WaveTronica B.V.<br>Oudenhof 2F<br>4191 NW Geldermalsen</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@wavetronica.com</a></p></div>'+
    '<div><span class="lab" data-r>Registration</span><p data-r>The Netherlands<br>KVK 72808446</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Visiting address</span>Oudenhof 2F<br>4191 NW Geldermalsen<br>The Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@wavetronica.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/projects">Projects</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Projects</span>ILLUMINATE · MIRACLE · FEM-SCAN · MRI Selfscan · DYNAMIC 14 T</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Sora\',sans-serif;font-weight:300;font-size:74px">WaveTronica</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 WaveTronica B.V.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",expertise:"expertise",projects:"projects",team:"team",news:"news",contact:"contact"};
