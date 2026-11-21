/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Plug and play electrophysiology<span class="nomob"> · North Tonawanda, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Computers that</span><span class="l"><em>converse with cells.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The Cybercyte System joins in silico synthetic cells to live patch-clamped cells in real time: electronic “transfection” in seconds, not weeks, on the rig you already have.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Arrange a loaner</a></div></div>'+
   '<p class="lab hcap" data-r>The Cybercyte CIM and V10, rendered after Cytocybernetics’ own product photography.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Dynamic clamp used to demand programming, engineering and modeling skills. The Cybercyte is icon driven and plugs into your existing amplifier, so any patch-clamp lab can add, remove or swap an ion channel <em>in seconds.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+</span><p class="k">Validated ion channel models pre-installed on the Cybercyte</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8</span><p class="k">Patch-clamped cells on one multichannel Cybercyte MC1 system</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4 h</span><p class="k">Of recording with Cytovolt1 dye, without damaging the cell</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A University at Buffalo spinout</span><p data-r>Founded by physiologists at the Jacobs School of Medicine and Biomedical Sciences, and backed by NIH SBIR and STTR awards since 2015.</p></div>'+
    '<div><span class="lab kick" data-r>Heart cells and neurons</span><p data-r>Used with iPSC-derived cardiac myocytes for drug safety screening, and extended to neurons with support from the National Institute of Mental Health.</p></div>'+
    '<div><span class="lab kick" data-r>Works with your amplifier</span><p data-r>Compatible with all major electrophysiology amplifier systems, including Axon Instruments, Molecular Devices and HEKA.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Electronic transfection, <em>in real time.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Record</span><span>Model</span><span>Transfect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Patch the live cell.</h2><p>The Cybercyte connects to a whole-cell patch clamp through your existing amplifier and reads the cell’s membrane voltage. iPSC-derived cardiac myocytes lack the IK1 current, so on their own they beat spontaneously.</p></article>'+
     '<article class="step"><h2>Model the missing channel.</h2><p>From the live voltage, the system computes the current a synthetic in silico channel would carry, here IK1, using one of over 100 validated models or your own, built in CyberSolver.</p></article>'+
     '<article class="step"><h2>Feed it back, in real time.</h2><p>That current flows into the cell, which now behaves as if it expressed the channel: quiescent, firing a ventricular-type action potential when stimulated. The inverse current knocks a channel out instead.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Tools that make electrophysiology <em>easier.</em></h2></div><p data-r>Hardware, dyes, software and services, built to work together: models made in CyberSolver run directly on the Cybercyte.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Working with</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by <em>electrophysiologists.</em></h2></div><p data-r>Cytocybernetics was founded by two University at Buffalo scientists, who were later joined by a lead scientist for neuronal research.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the NIH <em>and the lab bench.</em></h2></div><p data-r>A new NIMH Phase II award brings NEURON models into live experiments, while Cybercyte users keep publishing.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Electrophysiology labs and drug developers</span>'+
   '<h2 class="big split">Try the Cybercyte <em>on your own rig.</em></h2>'+
   '<p class="sub" data-r>The Cybercyte is compatible with your existing amplifier. Write to arrange a loaner, request a quote or schedule a meeting about your experiments.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+YT+'" target="_blank" rel="noopener">Watch on YouTube</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Cytocybernetics, Inc.<br>North Tonawanda<br>New York 14120</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+18553516285">'+TEL+'</a><br><a class="ul" href="tel:+17163224222">'+TEL2+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>North Tonawanda<br>New York 14120</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18553516285">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Plug and play dynamic clamp<br>and voltage-sensitive dyes</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Instrument Sans\',system-ui,sans-serif;font-weight:500;font-style:italic;font-size:70px;letter-spacing:-.01em"><tspan fill="#f5f3fa">Cyto</tspan><tspan fill="#b4a6ff">cybernetics</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cytocybernetics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cytocybernetics — plug and play dynamic clamp and voltage-sensitive dyes, North Tonawanda, New York",x:"Home"};
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
