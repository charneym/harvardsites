/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Needles, not screws","Thin needle electrodes are pressed into the skull at predetermined locations, and hook-shaped needles along the sides hold the implant. No skull drilling, no screw placement: the whole surgery takes under 15 minutes.",'<path d="M8 40c6-14 34-14 40 0"/><path class="a" d="M20 14v20M28 12v22M36 14v20"/><path d="M14 30c-4 2-6 6-4 10M42 30c4 2 6 6 4 10"/>'],
  ["No commutator, no swivel","The mouse carries its connection in a small container on a cable that slides and rotates along an aluminium rail over the cage. Electrical, optical and fluid lines reach it without a commutator, swivel or rotary joint.",'<path d="M6 10h44"/><circle class="f" cx="30" cy="10" r="3"/><path class="a" d="M30 13c0 10-8 12-8 22"/><rect x="16" y="35" width="12" height="10" rx="2"/><path d="M8 48h40"/>'],
  ["Read sleep in real time","Closed-loop software acquires EEG and EMG, calculates thresholds automatically and stages sleep as it happens, with EEG power-spectrum analysis, so stimulation can follow the brain state.",'<path d="M4 30l5-6 4 10 5-18 4 22 5-14 4 8 5-4 4 6 5-8 4 4"/><path class="a" d="M4 46h48"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tools for animal research<span class="nomob"> · EEG, optical &amp; fluid · Chestnut Hill, MA</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">EEG implants</span><span class="l">for mice, placed</span><span class="l">in <em>minutes.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Neurotargeting Systems makes needle-based implants that are minimally invasive and placed within minutes, and apparatus that connects a mouse electrically, optically or by fluid line without a commutator, swivel or fiber optic rotary joint.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">EEG shows how a drug changes arousal and sleep, but implanting electrodes in a mouse has meant long surgeries and costly materials. Our tools make the interface with a small animal <em>quick, gentle and reliable.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;15 min</span><p class="k">For the entire EEG implant surgery with needle electrodes, against more than half an hour with screws</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">28 g</span><p class="k">A container of over an ounce on the cable still does not substantially reduce the mouse’s movement</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">NIH SBIR projects since the company was founded in 2012</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From implant to signal, <em>in one sitting.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Place</span><span>Fix</span><span>Record</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Press the needles in.</h2><p>Under anaesthesia, thin needle electrodes are pressed gently against the skull at predetermined coordinates from bregma: EEG, reference and ground. No drilling, no screws.</p></article>'+
     '<article class="step"><h2>Hook and fix.</h2><p>Hook-shaped needles along the sides of the skull hold the implant, EMG electrodes go under the skin onto the neck muscles, and light-curable composite secures the multipin connector.</p></article>'+
     '<article class="step"><h2>Record EEG and EMG.</h2><p>The mouse recovers and moves freely on the container-cable, while closed-loop software stages sleep in real time. In studies, needle recordings were not inferior to screw electrodes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A faster, gentler <em>interface.</em></h2></div><p data-r>Every part is designed to cut surgery time, free the animal from tethers and weights, and make each study more accurate and efficient, for the welfare of research animals and for neuroscientists running drug discovery studies.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Implants, connections <em>and software.</em></h2></div><p data-r>A complete system for mice or any other small animal: implants, animal connections, cage components and software, which fit most standardised mouse housing cages, with hardware and software customisation on request.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Methods, papers <em>and grants.</em></h2></div><p data-r>The science behind the tools, from the needle-electrode method published in MethodsX in 2026 to earlier work on telemetric polysomnography and real-time sleep analysis in mice.</p></div>'+
   news()+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Researchers building <em>for researchers.</em></h2></div><p data-r>Neurotargeting Systems works closely with customers to ensure accurate and reliable research outcomes. Staffed by experienced researchers, the team invests time and energy to provide viable research solutions and optimise every experiment.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Founded</span><p data-r>In 2012, to identify, improve and bring modern, useful neuroscience technologies into the commercial marketplace.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Self-funded, with NIH SBIR grants from the NINDS, the Office of the Director and the NIMH.</p></div>'+
    '<div><span class="lab kick" data-r>Mission</span><p data-r>User-friendly tools that benefit the welfare of research animals and let neuroscientists finish projects faster and at lower cost.</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Needle vs. screw EEG</span><div><dl>'+
  [["Rapid","The entire implant surgery is completed in under 15 minutes"],["Minimally invasive","No skull drilling and no screw placement"],["Equivalent signal","Needle EEG recordings were not inferior to screw-electrode recordings"],["Welfare","Designed to improve animal welfare while raising study accuracy and efficiency"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Zou, Xie and Gerashchenko, “Simplified method for EEG recordings in mice”, MethodsX 17 (2026) 104004. Supported by an NIH SBIR grant.</p></div></div>'}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Orders and custom builds</span>'+
   '<h2 class="big split">Talk to <em>Neurotargeting.</em></h2>'+
   '<p class="sub" data-r>Planning an EEG, optogenetics or infusion study in mice? Ask about implants, connections and software, or about customising hardware and software for your experiment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Neurotargeting Systems, Inc.<br>45 Gerry Road<br>Chestnut Hill, MA 02467</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16173270234">+1 617 327 0234</a></p></div>'+
    '<div><span class="lab" data-r>Resources</span><p data-r><a class="ul" href="'+NTS+'documentation" target="_blank" rel="noopener">Documentation</a><br><a class="ul" href="'+PAPER+'" target="_blank" rel="noopener">MethodsX 2026</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>45 Gerry Road<br>Chestnut Hill, MA 02467</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16173270234">+1 617 327 0234</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/publications">Publications</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Tools</span>Needle EEG/EMG implants<br>Container-cable assemblies<br>Closed-loop software</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 70" aria-hidden="true"><text x="450" y="58" text-anchor="middle" style="font-family:\'Archivo Black\',Arial,sans-serif;font-weight:400;font-size:74px;letter-spacing:-.01em">Neurotargeting</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Neurotargeting Systems, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",technology:"technology",products:"products",publications:"publications",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Neurotargeting Systems — needle-based EEG implants and tether tools for mouse research, Chestnut Hill, MA",x:"Home"};
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
