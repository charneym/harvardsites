/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function svcRows(){return '<ul class="pfr svc">'+SVC.map(function(c,i){
  return '<li><span class="lab tg"><b>0'+(i+1)+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><p class="st">'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function pubs(){return '<ul class="nws">'+PUBS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function why(){var W=[
  ["Throughput and resolution","Our CD-MS technology delivers the highest throughput and resolution for mass measurement of large molecules."],
  ["PhD interpretation","Every result is analyzed and interpreted by PhD experts in CD-MS, who can also assist with data interpretation and drug filing preparations."],
  ["Fast turnaround","Some of the fastest turnaround times in the industry, with extensive experience in method optimization and in developing self-assembled particles."]];
  return '<div class="lab-row"><figure class="labph"><img src="lab.webp" alt="A Megadalton scientist at a CD-MS instrument in the Bloomington laboratory" width="1500" height="1000" loading="lazy" decoding="async"></figure>'+
   '<div class="whys">'+W.map(function(x){return '<div class="why"><h3 data-r>'+esc(x[0])+'</h3><p data-r>'+esc(x[1])+'</p></div>'}).join("")+'</div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CD-MS analytical services<span class="nomob"> · Bloomington, Indiana</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Accurate mass</span><span class="l">for the largest</span><span class="l"><em>molecules in medicine.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Charge detection mass spectrometry weighs intact AAV, mRNA, VLPs, vaccines and nanoparticles one ion at a time, with every result interpreted by PhD experts in CD-MS.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/services">Our services '+ARR+'</a><a class="btn" href="#/cd-ms">How CD-MS works</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What is Megadalton Solutions?</span>'+
   '<h2 class="txt" id="mani">Megadalton Solutions grew out of Martin Jarrold’s pioneering work advancing CD-MS at Indiana University. Today it measures mass, structure and purity across modalities, <em>for some of the hardest problems in biophysical characterization.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">22</span><p class="k">Patents from the CD-MS research behind the company</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60+</span><p class="k">Publications in the field</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24 h</span><p class="k">To respond to a new enquiry</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How CD-MS works</span><h2 class="d3">One ion at a time, <em>charge and mass.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Trap</span><span>Read</span><span>Weigh</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Trap a single ion.</h2><p>Conventional mass spectrometry struggles with intact particles of millions of daltons. CD-MS measures ions individually: each one is reflected back and forth through a detection cylinder inside an electrostatic ion trap.</p></article>'+
     '<article class="step"><h2>Read charge and m/z together.</h2><p>Every pass through the cylinder induces a charge signal. Its height gives the ion’s charge; the frequency of its oscillation gives its mass-to-charge ratio.</p></article>'+
     '<article class="step"><h2>Weigh, ion by ion.</h2><p>Multiply the two and you have the mass of that particle. Thousands of ions later, the distribution separates empty, partial and full AAV capsids, truncated genomes or assembly intermediates.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our solutions</span><h2 class="d2 split">Mass, structure and purity, <em>across modalities.</em></h2></div><p data-r>CD-MS methods for gene therapy vectors, nucleic acids, self-assembled particles, vaccines and non-viral nanoparticles, on multiple instruments including the new Waters Xevo CDMS.</p></div>'+
   svcRows()+
  '</div></section>'+

  '<section class="sec dark2" id="why" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Why Megadalton CD-MS</span><h2 class="d2 split">Built by the people <em>who advanced CD-MS.</em></h2></div><p data-r>The instruments, the methods and the interpretation come from one team in Bloomington.</p></div>'+
   why()+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Recent publications</span><h2 class="d2 split">Methods, <em>published.</em></h2></div><p data-r>Peer-reviewed work by the Megadalton team, from intact mRNA with Pfizer to end-to-end AAV manufacturing.</p></div>'+
   pubs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Meet the team</span><h2 class="d2 split">PhD experts <em>in CD-MS.</em></h2></div><p data-r>Results are analyzed and interpreted by the team that develops the technique.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Request a demo analysis</span>'+
   '<h2 class="big split">Getting started with CD-MS <em>is easier than you think.</em></h2>'+
   '<p class="sub" data-r>Email us to kick off a conversation. We will respond within 24 hours.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Contact an expert '+ARR+'</a><a class="btn" href="#/services">Our services</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>3139 N Westbury Village Dr., Suite H<br>Bloomington, IN 47404</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/megadalton/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>3139 N Westbury Village Dr., Suite H<br>Bloomington, IN 47404</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/cd-ms">CD-MS</a><br><a class="ul" href="#/publications">Publications</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Technique</span>Charge detection mass spectrometry for megadalton particles</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',Arial,sans-serif;font-weight:600;font-size:64px;letter-spacing:-1.5px">Megadalton</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Megadalton Solutions Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about","cd-ms":"story",services:"services",why:"why",publications:"publications",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Megadalton Solutions — CD-MS analytical services for AAV, mRNA, VLPs and nanoparticles",x:"Home"};
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
