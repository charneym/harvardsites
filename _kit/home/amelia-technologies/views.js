/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via buildout.js; Contact scrolls) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+RP+c[4]+'" target="_blank" rel="noopener">NIH RePORTER</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>DNA damage and repair<span class="nomob"> · Genotoxicity</span> · Washington, DC</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">What the sun and</span><span class="l">chemicals do to DNA,</span><span class="l"><em>measured.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Amelia Technologies develops technologies that quantify DNA damage in cells, to show what ultraviolet light, sunscreens, nanomaterials and topical chemicals really do to human skin.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How damage is measured '+ARR+'</a><a class="btn" href="#/contact">Work with us</a></div></div>'+
   '<p class="lab hcap" data-r>Pictured: an electrophoresis set-up in the Amelia laboratory</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">A molecular biotechnology company that builds and optimizes diagnostic platforms measuring <b class="w0">DNA damage and repair,</b> so that carcinogens, aging and new products can be judged by <em>what they do to the genome.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.04M</span><span class="k">NIH NIEHS SBIR Phase II award for EcoWell, June 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8</span><span class="k">NIH SBIR and STTR projects awarded to Amelia Technologies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2018</span><span class="k">Founded, in the Maryland, DC and Virginia biotechnology corridor</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Four areas of research</span><p data-r>Carcinogenesis, aging and associated diseases, genome editing protocols, and emerging diagnostics platforms.</p></div>'+
    '<div><span class="lab kick" data-r>Human cells, not animals</span><p data-r>Isogenic donor-derived skin cells and reconstructed human epidermis, in 2D and 3D, in place of animal models for screening.</p></div>'+
    '<div><span class="lab kick" data-r>Clients and collaborators</span><p data-r>Academia, industry and government organizations, in the United States and abroad.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The comet assay</span><h2 class="d3">Broken DNA travels further, <em>so damage can be counted.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Capture</span><span>Expose</span><span>Lyse</span><span>Run</span><span>Score</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One cell per well.</h2><p>Human skin cells are captured in an array of tiny wells set in agarose, so thousands can be tested side by side under the same conditions.</p></article>'+
     '<article class="step"><h2>Exposed.</h2><p>The cells meet ultraviolet light, a sunscreen ingredient or a topical chemical. Where the DNA is damaged, its strands break.</p></article>'+
     '<article class="step"><h2>Opened up.</h2><p>Lysis dissolves the cell membrane and an alkaline bath unwinds the DNA, leaving each genome as a tight bundle in the gel.</p></article>'+
     '<article class="step"><h2>Pulled by a field.</h2><p>Under electrophoresis, intact DNA stays put, while broken fragments migrate out of the bundle and form a tail, like a comet.</p></article>'+
     '<article class="step"><h2>Scored, cell by cell.</h2><p>Stained and imaged, each comet is measured: the more DNA in the tail, the more damage that cell carries.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programs" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">From skin cells <em>to the classroom.</em></h2></div><p data-r>NIH-funded platforms for measuring how ultraviolet light and chemicals affect living cells, from high-throughput genotoxicity screens to a teaching incubator.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people <em>at the bench.</em></h2></div><p data-r>Scientists and operators running our own cell culture, imaging and molecular laboratory, with Cytation5 imaging and NanoString nCounter MAX systems.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and publications</span><h2 class="d2 split">Grants <em>and papers.</em></h2></div><p data-r>Recent NIH awards and peer-reviewed work from the Amelia laboratory on UV, skin and DNA damage.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Industry, academia and government</span>'+
   '<h2 class="big split">Bring us a question <em>about DNA damage.</em></h2>'+
   '<p class="sub" data-r>Testing a sunscreen formulation, a topical ingredient or a nanomaterial, or bringing EcoWell into a classroom: write to the Amelia team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Amelia '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Amelia Technologies LLC<br>1121 5th Street NW<br>Washington, DC 20001</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1121 5th Street NW<br>Washington, DC 20001</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Research</span>DNA damage and repair<br>Genotoxicity screening</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Manrope\',Arial,sans-serif;font-weight:600;font-size:64px;letter-spacing:-.01em">Amelia</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Amelia Technologies LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Amelia Technologies — measuring DNA damage and repair, Washington, DC",x:"Home"};
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
