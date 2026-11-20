/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages; Contact scrolls) ================= */
function progs(){return '<ul class="pfr">'+PROGS.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+RPT+c[3]+'" target="_blank" rel="noopener">NIH RePORTER</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Multi-target therapy<span class="nomob"> · Gainesville, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A multi-target</span><span class="l">treatment for</span><span class="l"><em>Friedreich’s ataxia.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AnekaBio develops multi-target drug treatment for neurological disorders. Its lead, QTE therapy, is being developed with the University of Florida for the most common inherited ataxia.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/pipeline">See the pipeline '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Rendered: a cerebellar neuron in green fluorescence</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Friedreich’s ataxia damages the nervous system and the heart. QTE therapy is <b class="w0">built to address the disease’s complex molecular mechanisms together</b>, <em>for a safer, more effective treatment.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$454K</span><span class="k">NIH NINDS STTR Phase I award to AnekaBio, September 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">NIH grants for QTE therapy since 2025, to AnekaBio and the University of Florida</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">35</span><span class="k">The age by which Friedreich’s ataxia often takes a patient’s life</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Multi-target by design</span><p data-r>Rather than a single pathway, QTE therapy is designed to address the complex molecular mechanisms that underlie Friedreich’s ataxia.</p></div>'+
    '<div><span class="lab kick" data-r>Ahead of the standard</span><p data-r>In preclinical studies in FRDAkd mice, QTE therapy outperformed omaveloxolone, the first FDA-approved treatment for the disease.</p></div>'+
    '<div><span class="lab kick" data-r>Measured for the clinic</span><p data-r>Efficacy biomarkers in blood and muscle, found with proteomic and transcriptomic technologies, to track the therapy’s effect in future trials.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One disease, <em>several targets at once.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cause</span><span>Proteins</span><span>Heart</span><span>Survival</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Too little frataxin.</h2><p>Friedreich’s ataxia is inherited. Cells make too little frataxin, a mitochondrial protein; iron builds up, and nerve and heart cells degenerate.</p></article>'+
     '<article class="step"><h2>Target proteins restored.</h2><p>In FRDAkd mice, a model of the disease, QTE therapy significantly enhanced critical FRDA target proteins.</p></article>'+
     '<article class="step"><h2>Less iron, a stronger heart.</h2><p>Treated mice showed reduced iron overload and improved cardiac function, the heart disease that shortens patients’ lives.</p></article>'+
     '<article class="step"><h2>Longer survival.</h2><p>QTE therapy dramatically increased survival in FRDAkd mice, outperforming omaveloxolone in the same preclinical studies.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From mouse model <em>to the clinic.</em></h2></div><p data-r>QTE therapy for Friedreich’s ataxia is AnekaBio’s lead program, supported by the National Institutes of Health through its Small Business Technology Transfer program and an award to the University of Florida.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Rooted in <em>Friedreich’s ataxia research.</em></h2></div><p data-r>AnekaBio is based in Gainesville, Florida, and works in partnership with the University of Florida, where the science behind QTE therapy was developed.</p></div>'+
   '<div class="fnd"><div class="fnd-a"><span class="lab kick" data-r>Principal investigator</span><h3 class="fn" data-r>Vijayendran Chandran</h3><p class="fr lab" data-r>NIH STTR contact PI · University of Florida</p></div>'+
    '<p class="fb" data-r>Vijayendran Chandran leads AnekaBio’s NIH STTR program and a laboratory in the Department of Pediatrics at the University of Florida, working on Friedreich’s ataxia, nervous-system regeneration, and bioinformatics and systems biology. He is first author of the 2017 eLife paper describing the FRDAkd mouse, an inducible and reversible model of the disease.</p></div>'+
   '<div class="fac">'+
    '<div><span class="lab kick" data-r>Academic partner</span><p data-r>The University of Florida, Gainesville, home of the preclinical work on QTE therapy and of an NIH NCATS award to optimize its dose and formulation.</p></div>'+
    '<div><span class="lab kick" data-r>Patients and industry</span><p data-r>A commercial strategy to be built with a patient advocacy group and with firms experienced in rare diseases, alongside experts in regulatory strategy, manufacturing and clinical trials.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded, published, <em>moving forward.</em></h2></div><p data-r>Federal awards for QTE therapy, with the full record on NIH RePORTER, and the Friedreich’s ataxia research behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and collaborators</span>'+
   '<h2 class="big split">Let’s talk about <em>QTE therapy.</em></h2>'+
   '<p class="sub" data-r>For partnering, investment or research collaboration on Friedreich’s ataxia, write to AnekaBio’s principal investigator directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email AnekaBio '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>AnekaBio, LLC<br>Gainesville, Florida</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>NIH NINDS STTR<br>1R41NS143585</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>AnekaBio, LLC<br>Gainesville, Florida</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Funding</span><a class="ul" href="'+RPT+'11186306" target="_blank" rel="noopener">NIH RePORTER</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 60" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.2em">ANEKABIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AnekaBio, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AnekaBio — Multi-target therapy for Friedreich’s ataxia, Gainesville, Florida",x:"Home"};
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
