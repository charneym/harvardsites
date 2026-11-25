/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function lead(){var p=TEAM[0];
  return '<div class="lead"><div class="lead-n"><span class="lab kick" data-r>Founder</span><h3 class="split">'+esc(p.name)+'</h3><p class="lab rl" data-r>'+esc(p.title)+'</p></div>'+
   '<div class="lead-b"><p data-r>'+esc(p.sum)+'</p><p class="aff" data-r>Founded Serpin Pharma to develop SERPIN-derived peptides that restore immune balance.</p></div></div>'}
function mast(){var gs=[],by={};TEAM.slice(1).forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<section class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label" data-r>'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</section>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>LRP1-targeted peptides<span class="nomob"> · Manassas, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Resolve inflammation,</span><span class="l"><em>protect the tissue.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Serpin Pharma develops SP16, a first-in-class peptide drawn from the natural SERPIN protein AAT. It activates the LRP1 receptor, the body’s own switch for shutting down excess inflammation, now in clinical trials for kidney injury and nerve pain.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How SP16 works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A peptide chain, schematic, in Serpin Pharma’s colours.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Steroids and cytokine blockers calm inflammation by holding back the immune response that healing needs. <em>SP16 works with it,</em> clearing the triggers and switching on the cell’s own repair.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">300×</span><span class="k">More potent than AAT, the natural protein SP16 is drawn from</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13/14</span><span class="k">Patent applications granted, covering composition of matter and use</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">120</span><span class="k">Patients in EASE-AKI, the Phase II kidney trial in Germany</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Targeted</span><p data-r>A selective, precise mechanism that restores inflammatory balance, with no off-target effects seen in clinical trials so far.</p></div>'+
    '<div><span class="lab kick" data-r>Potent</span><p data-r>In heart attack, a single injection preserved heart function and reduced biomarkers of cardiac injury.</p></div>'+
    '<div><span class="lab kick" data-r>Made, not harvested</span><p data-r>A synthetic peptide, not isolated from plasma, which makes it cost-effective to produce.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">Inflammation, <em>resolved from within.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Inflamed</span><span>Bound</span><span>Resolved</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A cell under attack.</h2><p>Injury or disease puts inflammatory triggers on the cell surface. Pathways such as NF-κB switch on and the cell pours out cytokines, harming the tissue it should protect.</p></article>'+
     '<article class="step"><h2>SP16 finds LRP1.</h2><p>SP16 is the active stretch of the SERPIN protein AAT, modified to bind more tightly to LRP1, a receptor that restores balance to the cell.</p></article>'+
     '<article class="step"><h2>Triggers cleared, repair on.</h2><p>Harmful triggers are pulled from the surface. Survival pathways ERK and AKT switch on, NF-κB quietens, and the cytokine output comes back into balance.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One peptide, <em>four indications.</em></h2></div><p data-r>SP16 is a platform technology with the potential to treat a wide range of inflammatory diseases. Two programmes have reached the clinic and a third is cleared to start.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Working with</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers <em>and physicians.</em></h2></div><p data-r>A founder with decades in biopharma, a board and a scientific advisory board drawn from Stanford, Cornell, Johns Hopkins and the FDA.</p></div>'+
   lead()+mast()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the bench <em>to the clinic.</em></h2></div><p data-r>Trials, clearances, grants and partnerships, each linked to the original release.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Put inflammation <em>back in balance.</em></h2>'+
   '<p class="sub" data-r>Serpin Pharma is based in Manassas, Virginia. To talk about SP16, a trial or a partnership, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="'+MAP+'" target="_blank" rel="noopener">Find us in Manassas</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Serpin Pharma, Inc.</p><p data-r>9501 Discovery Blvd, Suite 120</p><p data-r>Manassas, VA 20109</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:'+TEL+'">(571) 379-4933</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>9501 Discovery Blvd, Suite 120<br>Manassas, Virginia 20109</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">(571) 379-4933</a></div>'+
   '<div class="c"><span class="lab">Lead molecule</span>SP16, an LRP1-targeted<br>anti-inflammatory peptide</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Titillium Web\',sans-serif;font-style:italic;font-weight:300;font-size:80px;letter-spacing:.01em">SERPIN</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Serpin Pharma, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Serpin Pharma — LRP1-targeted peptides that resolve inflammation, Manassas, Virginia",x:"Home"};
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
