/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Protein engineering</span><p data-r>'+ADVISORS.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'+
  '<div class="awd"><span class="lab kick" data-r>Recognition</span><ul data-r>'+AWARDS.map(function(a){return '<li><a class="ul" href="'+a[2]+'" target="_blank" rel="noopener">'+esc(a[0])+'</a> <i>'+esc(a[1])+'</i></li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Programmable antibody therapeutics<span class="nomob"> · Los Angeles, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Control switches</span><span class="l">for <em>antibodies.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>An antibody’s grip on its target is fixed the moment it is given. Mabswitch builds antibodies whose affinity can be turned down or up inside the patient, so a therapy can be regulated after it is administered.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How the switch works '+ARR+'</a><a class="btn" href="#/pipeline">Pipeline</a></div></div>'+
   '<p class="lab hcap" data-r>An antibody binding site gripping its antigen, atom by atom, from the crystal structure PDB 1VFB: light chain in grey, heavy chain in the Mabswitch red, antigen in gold.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Introduction</span>'+
   '<h2 class="txt" id="mani">Antibodies bind their target and hold on. That grip is what makes them work, and what makes them hard to control. Mabswitch is building the layer that lets you <em>change it, in the patient.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">NIH SBIR Phase I awards since 2023, from the National Cancer Institute and NCATS</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">NCI awards in September 2026 alone, for SMART-ADC™ and remote-controlled PC-CAR T cells</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">ON<span class="sl">/</span>OFF</span><p class="k">The UNASMA™ switch module is built in both directions, triggered by a small molecule</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Plug and play</span><p data-r>The switch module is inserted between the two domains of the binding site. The antibody domains themselves are untouched, so the module can be added to billions of different antibody sequences.</p></div>'+
    '<div><span class="lab kick" data-r>Physiological conditions</span><p data-r>The switch is triggered by adding or removing a small molecule. No change in pH, ion concentration or any other biochemical parameter is required.</p></div>'+
    '<div><span class="lab kick" data-r>Fully human</span><p data-r>All of the allosteric switch modules are fully human proteins. Combined with human antibody variable regions, a very low immunogenicity is expected.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">The switch, <em>step by step.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Binding site</span><span>Switch module</span><span>Trigger</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An antibody holds its target.</h2><p>An antibody binding site is made of two protein domains, one from the light chain and one from the heavy chain. Their geometry is what grips the antigen, and once the antibody is given to a patient, that geometry is fixed.</p></article>'+
     '<article class="step"><h2>A switch is inserted between them.</h2><p>Mabswitch places an allosteric modulator domain, the Universal Allosteric-linker and Switch Module for Antibodies, between the two domains. The antibody domains are not changed, so the module can be added by plug and play.</p></article>'+
     '<article class="step"><h2>A small molecule flips it.</h2><p>The modulator can itself be modulated: a small molecular entity is added or removed. Its presence changes the structure of the antigen binding site by allosteric modulation, at physiological conditions.</p></article>'+
     '<article class="step"><h2>Affinity changes on command.</h2><p>The geometry of the binding site shifts, and the antibody’s affinity for its target moves to or from an active state. The change is repeatable, reversible, and controlled in time and place: ON switches and OFF switches alike.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One switch, <em>many modalities.</em></h2></div><p data-r>Mabswitch is applying programmable target engagement across antibody-drug conjugates, T-cell engagers and engineered cell therapies, and to the purification of the fragile vectors that gene therapies depend on. Every programme below is supported by an NIH SBIR award.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funding and laboratories</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people who <em>invented the switch.</em></h2></div><p data-r>Mabswitch was founded to develop and commercialize the invention of affinity switches for antibodies. It is led by a business developer who has signed more than seventy biopharmaceutical partnerships, and by the scientist who invented the switch.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Two NCI awards, <em>one month.</em></h2></div><p data-r>In September 2026 the National Cancer Institute funded two Mabswitch programmes: an affinity-tunable antibody-drug conjugate for ovarian cancer, and a remote-controlled Peptide-Centric CAR T-cell therapy for solid tumors.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering, co-development and licensing</span>'+
   '<h2 class="big split">Switch on <em>a conversation.</em></h2>'+
   '<p class="sub" data-r>Mabswitch invites pharmaceutical companies, clinics, manufacturing CROs and suppliers of affinity chromatography materials to discuss what an affinity switch could do for their antibody-based therapies and products. The company is open for partnering, co-development or licensing.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Mabswitch, Inc.<br>Van Nuys, Los Angeles<br>California</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Technology</span><p data-r>UNASMA™ switch modules<br>for antibodies</p><a class="ul lk" href="'+TECH+'" target="_blank" rel="noopener" data-r>Current site</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Mabswitch, Inc.<br>Van Nuys, Los Angeles<br>California</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Programmable antibody<br>therapeutics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:300;font-size:80px;letter-spacing:.2em"><tspan fill="#f3f1ee">MABSWITCH</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Mabswitch, Inc. Mabswitch® is a registered trademark.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Mabswitch — control switches for antibodies, Los Angeles",x:"Home"};
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
