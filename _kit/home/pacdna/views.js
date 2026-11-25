/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function recog(){return '<div class="rec">'+REC.map(function(r){return '<a class="rc" href="'+r[2]+'" target="_blank" rel="noopener"><span class="lab">'+esc(r[0])+'</span><h3>'+esc(r[1])+'</h3><span class="go" aria-hidden="true">'+ARR+'</span></a>'}).join("")+'</div>'}
function caps(){var C=[
  ["Delivery beyond the liver","Brushield™ boosts biodistribution in otherwise hard-to-deliver sites, making it possible to develop therapies for diseases that are currently out of reach.",'<path d="M28 6c10 12 16 20 16 28a16 16 0 0 1-32 0c0-8 6-16 16-28z"/><path class="a" d="M20 36c2 5 6 7 10 7"/>'],
  ["Lasting potency","The technology promotes tissue retention for up to several months, with the potential for smaller, less frequent doses.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M28 14v14l9 6"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["Fewer side effects","It mitigates toxicities and almost all other side effects that stem from unwanted nucleic acid–protein interactions.",'<path d="M28 6l18 7v13c0 12-8 20-18 24C18 46 10 38 10 26V13z"/><path class="a" d="M20 28l6 6 11-12"/>'],
  ["No anti-carrier immunity","A non-immunogenic design, with favourable safety and fewer side effects from the carrier itself.",'<circle cx="28" cy="28" r="9"/><path d="M28 6v8M28 42v8M6 28h8M42 28h8M12.4 12.4l5.7 5.7M37.9 37.9l5.7 5.7M43.6 12.4l-5.7 5.7M18.1 37.9l-5.7 5.7"/><path class="a" d="M10 46L46 10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Brushield™ oligonucleotide enhancer<span class="nomob"> · Boston</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Expanding the</span><span class="l">horizon of oligonucleotide</span><span class="l"><em>therapeutics.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>More potent clinical leads with fewer side effects, delivered to non-liver sites. pacDNA’s molecular brush shields the oligonucleotide, so more of it reaches the tissue that needs it, and stays there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How Brushield works '+ARR+'</a><a class="btn" href="#/programmes">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">We aim to transform oligonucleotide therapeutics with safer and more potent medicines that address diseases <em>outside the liver.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3M+</span><p class="k">In federal grants, including a National Cancer Institute STTR award</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2023</span><p class="k">Founded by Prof. Ke Zhang as a Northeastern University spinout, based in Boston</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Months</span><p class="k">Of tissue retention that Brushield™ can promote, for lasting potency from smaller doses</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The delivery dilemma</span><h2 class="d3">A shield that <em>widens the window.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Unshielded</span><span>Brushield™</span><span>Delivered</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cleared before it can work.</h2><p>Conventional gene regulation agents accumulate poorly in tissue and are rapidly cleared by the liver and kidney. Larger doses follow, and with them toxicity and inflammatory or immune responses.</p></article>'+
     '<article class="step"><h2>The brush closes around the strand.</h2><p>Brushield™ surrounds the oligonucleotide with a dense polymer brush that holds proteins at bay, mitigating the side effects that stem from unwanted nucleic acid–protein interactions.</p></article>'+
     '<article class="step"><h2>More reaches the target, and stays.</h2><p>Shielded strands reach otherwise hard-to-deliver, non-liver sites and are retained there for up to several months: lasting potency from smaller, less frequent doses.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">What is <em>Brushield™?</em></h2></div><p data-r>An oligonucleotide enhancer technology that makes the active component more efficacious while suppressing side effects. Its research data point to a highly translatable route to non-hepatic gene regulation, a key challenge for viable oligonucleotide therapeutics.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Built for partners, <em>and our own pipeline.</em></h2></div><p data-r>pacDNA uses Brushield™ to bring life-changing medicines to patients: through partnership and out-licensing, and through internal assets with favourable development pathways and significant unmet need.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Polymer chemistry meets <em>drug development.</em></h2></div><p data-r>A Northeastern University spinout founded in 2023, pairing Prof. Ke Zhang’s career of joining synthetic polymers and nucleic acids with decades of drug development leadership.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="recognition" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Recognition</span><h2 class="d2 split">Early backing <em>from Boston and beyond.</em></h2></div><p data-r>Awards, accelerators and collaborations behind pacDNA, alongside more than $3M in federal grants.</p></div>'+
   recog()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and contact</span>'+
   '<h2 class="big split">Talk to <em>pacDNA.</em></h2>'+
   '<p class="sub" data-r>pacDNA is seeking partnership and out-licensing opportunities for Brushield™, to accelerate lead-to-IND development of oligonucleotides for clients and partners.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email pacDNA '+ARR+'</a><a class="btn" href="#/how">How Brushield works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Company</span><p data-r>pacDNA, Inc.<br>Boston, MA, USA</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/pacdna-inc/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Company</span>pacDNA, Inc.<br>Boston, MA, USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="https://www.linkedin.com/company/pacdna-inc/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/recognition">Recognition</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Brushield™<br>Oligonucleotide enhancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Inter\',Arial,sans-serif;font-weight:500;font-size:66px;letter-spacing:-.01em">pacDNA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 pacDNA, Inc.</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={mission:"about",how:"story",technology:"technology",programmes:"pipeline",pipeline:"pipeline",team:"team",recognition:"recognition",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"pacDNA — Brushield™ oligonucleotide therapeutics beyond the liver, Boston",x:"Home"};
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
