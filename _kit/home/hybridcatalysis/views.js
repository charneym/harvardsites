/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function equip(){return '<ul class="pfr eq">'+EQUIP.map(function(e){return '<li><h3>'+esc(e[0])+'</h3><span class="lab tg"><b>'+esc(e[1])+'</b></span><p>'+esc(e[2])+'</p></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Fixed rates, clear deliverables","Consider us an extension of your own research organisation. Every quotation lists clear deliverables and lead times, and every proposal carries what you need to manage progress and budget.",'<path d="M10 6h28l8 8v36H10z"/><path d="M38 6v8h8"/><path class="a" d="M18 26h20M18 34h20M18 42h12"/>'],
  ["Confidential, exclusive, royalty-free","Projects are handled strictly confidentially from the first inquiry. Wherever we can, we work on an exclusive basis: all IP generated belongs to the customer, free of royalties.",'<path d="M14 26h28v24H14z"/><path d="M19 26v-8a9 9 0 0118 0v8"/><path class="a" d="M28 34v8"/>'],
  ["Short lead times","Projects run from a few weeks to six months. A small company acts fast: we change our infrastructure when required, and for larger projects we invest in equipment ourselves.",'<circle cx="28" cy="30" r="20"/><path class="a" d="M28 18v12l8 6"/><path d="M22 6h12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function fig(src,w,h,cap,cls){return '<figure class="hfig'+(cls?' '+cls:'')+'" data-r><img src="'+src+'" alt="" width="'+w+'" height="'+h+'" loading="lazy" decoding="async"><figcaption class="lab">'+cap+'</figcaption></figure>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Contract catalysis R&D<span class="nomob"> · Eindhoven, since 2005</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Your partner</span><span class="l">for catalysis and</span><span class="l"><em>industrial chemistry.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Hybrid Catalysis offers custom synthesis, catalysis and process R&D. Our services are cost effective and exclusive, and include royalty-free transfer of project IP.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/capabilities">Our laboratory</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A passion for innovation</span>'+
   '<h2 class="txt" id="mani">From a state-of-the-art laboratory in Eindhoven, we make, optimise and test virtually any catalyst, ligand or compound. <em>Custom-built process skids and a kilolab take it beyond the bench.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2005</span><p class="k">Founded, to offer cost-effective and highly competitive catalysis R&D</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">150 bar</span><p class="k">Autoclaves and flow reactors for work under pressure</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">900 °C</span><p class="k">Plug flow reactors for gas-phase catalysis, with on-line GC and MS</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our own catalysts</span><h2 class="d3">Metal silsesquioxanes, <em>well defined.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Framework</span><span>Metal site</span><span>Tailored</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A robust cage.</h2><p>Silicon and oxygen form a thermally and chemically robust organic/inorganic framework: a well-defined cage, the basis of decades of pioneering work.</p></article>'+
     '<article class="step"><h2>A metal at one corner.</h2><p>A metal takes the place of one silicon corner. Held in the framework, it becomes a robust, well-defined metal site.</p></article>'+
     '<article class="step"><h2>Tuned for the job.</h2><p>Groups on the outer corners add solubility, substrate receptors or a handle for immobilisation. The catalysts serve transesterification, epoxidation, olefin metathesis and polymer curing.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">Your project <em>is in good hands.</em></h2></div><p data-r>At the bench, your project is carried out by a motivated, PhD-level team with experience in synthetic chemistry, high-throughput screening, chemical engineering, flow chemistry, catalyst shaping, informatics, scale-up and custom setups.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capabilities</span><h2 class="d2 split">Tools for synthesis <em>and screening.</em></h2></div><p data-r>We have the equipment, or we will set it up, customised for your project. Our laboratory is equipped for chemicals, gases and pressure reactors, and we have access to any technique for catalyst characterisation.</p></div>'+
   '<p class="sub-l lab" data-r>Multipurpose equipment</p>'+
   equip()+
   '<div class="eng"><div class="eng-t"><span class="lab kick" data-r>Engineering</span><h3 data-r>Setups you cannot buy.</h3><p data-r>Many projects require setups that are not commercially available. Fully automated process skids with on-line analytics serve gas-phase process development; batch, fed-batch and flow reactors serve liquid and gas/liquid work. A network of subcontracted experts provides glass blowing, pipe fitting, metal machining, electronic assembly and custom software.</p></div>'+
    '<div class="eng-f">'+fig("skids.webp",648,583,"Automated process skids with on-line analytics")+fig("reactors.webp",711,475,"Batch, fed-batch and flow reactors")+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="projects" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Projects</span><h2 class="d2 split">Public–private ventures, <em>across Europe.</em></h2></div><p data-r>As an SME we complement the pioneering work of universities, in EU projects that contribute to the energy transition and to the use of renewable feedstocks.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A team that is <em>easy to work with.</em></h2></div><p data-r>Our senior scientists’ joint expertise covers almost any topic and technique in catalysis, with a scientific advisor in heterogeneous catalysis.</p></div>'+
   '<div class="tm">'+team()+fig("team.webp",868,401,"The Hybrid Catalysis team","tf")+'</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Please <em>bother us.</em></h2>'+
   '<p class="sub" data-r>You are invited to visit our laboratory on the TU/e campus in Eindhoven. Tell us about your project, and we will reply with a clear proposal.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Hybrid Catalysis '+ARR+'</a><a class="btn" href="#/capabilities">See the laboratory</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>Hybrid Catalysis B.V.<br>Helix STW 4.43, Groene Loper 3<br>5612 AE Eindhoven, the Netherlands</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@hybridcatalysis.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+31402474927">+31 40 247 4927</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>Helix, TU/e campus<br>Eindhoven, the Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@hybridcatalysis.com</a><br><a class="ul" href="tel:+31402474927">+31 40 247 4927</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/projects">Projects</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://www.linkedin.com/company/hybrid-catalysis-bv" target="_blank" rel="noopener">LinkedIn</a><br><a class="ul" href="https://www.beup-project.eu/" target="_blank" rel="noopener">Be-UP project</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 120" aria-hidden="true"><text x="450" y="98" text-anchor="middle" style="font-family:\'Jost\',sans-serif;font-weight:400;font-size:112px">Hybrid Catalysis</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Hybrid Catalysis B.V.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",approach:"approach",capabilities:"capabilities",projects:"projects",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Hybrid Catalysis — contract catalysis R&D, Eindhoven",x:"Home"};
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
