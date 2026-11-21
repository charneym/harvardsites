/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  ''}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>iPSC muscle stem cell therapy<span class="nomob"> · Saint Paul, Minnesota</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Muscle that</span><span class="l">can <em>rebuild itself.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Myogenica, a University of Minnesota spinout, is developing MyoPAXon: muscle stem cells made from induced pluripotent stem cells, for Duchenne and other muscular dystrophies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Donor-derived human muscle fibres expressing dystrophin (white) in a transplanted, dystrophin-deficient mouse.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Muscular dystrophy wastes muscle that the body can no longer repair. MyoPAXon brings in new muscle stem cells that restore missing proteins such as dystrophin, and <em>stay to repair the muscle again.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">12+ mo</span><span class="k">Regenerative capacity still shown at least 12 months after a single treatment, in preclinical studies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$10M+</span><span class="k">Grant funding behind MyoPAXon’s development over ten years</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 INDs</span><span class="k">Cleared by the FDA: Duchenne in July 2024, limb girdle muscular dystrophy in November 2026</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A University of Minnesota spinout</span><p data-r>Formed in 2022 to develop MyoPAXon, on the work of its inventors at the University of Minnesota.</p></div>'+
    '<div><span class="lab kick" data-r>Not mutation-specific</span><p data-r>Effective in models of Duchenne, limb girdle and facioscapulohumeral muscular dystrophy (FSHD).</p></div>'+
    '<div><span class="lab kick" data-r>One frozen, cGMP product</span><p data-r>Homogeneous muscle stem cells, made from a GMP iPSC bank and frozen ready for clinical studies.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">From one cell bank <em>to new muscle.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bank</span><span>PAX7</span><span>CD54</span><span>Engraft</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A GMP stem cell bank.</h2><p>MyoPAXon starts from a bank of induced pluripotent stem cells (iPSCs) made under GMP: one source, able to become any cell type.</p></article>'+
     '<article class="step"><h2>PAX7 switched on.</h2><p>The bank is modified to express PAX7, a gene otherwise found only in muscle stem cells, or satellite cells. As the cells differentiate, they become muscle progenitors.</p></article>'+
     '<article class="step"><h2>Purified on CD54.</h2><p>A cGMP-compliant process keeps only the cells carrying the proprietary CD54 marker. Expanded, they make MyoPAXon: homogeneous muscle stem cells, frozen for clinical use.</p></article>'+
     '<article class="step"><h2>Transplanted, they rebuild.</h2><p>The cells restore dystrophin to existing fibres and improve muscle function. They also leave a pool of muscle stem cells that regenerates muscle after future injury.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One cell product, <em>several dystrophies.</em></h2></div><p data-r>MyoPAXon is in a Phase I study in Duchenne muscular dystrophy, with an FDA IND for limb girdle muscular dystrophy and a systemic form in IND-enabling studies.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The inventors, <em>and a builder.</em></h2></div><p data-r>Myogenica’s co-founders bring together muscle regeneration, stem cell biology and cell and gene therapy development.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em>to the clinic.</em></h2></div><p data-r>An FDA-cleared Phase I study, a second IND and continued NIH support for systemic delivery.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Muscle stem cells, <em>to patients.</em></h2>'+
   '<p class="sub" data-r>Myogenica works from Saint Paul, Minnesota. To talk about MyoPAXon, a partnership or an investment, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+FLYER+'" target="_blank" rel="noopener">Phase I study</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Myogenica Inc.<br>Saint Paul, Minnesota 55114</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Patients and families</span><p data-r>The University of Minnesota is seeking Duchenne patients for the Phase I study: <a class="ul" href="mailto:'+TRIAL+'">'+TRIAL+'</a></p></div>'+
   '</div>'+
   '<p class="coi" data-r>The University of Minnesota holds equity in, and has rights to potential royalties from, Myogenica, which has licensed this trial’s stem cell therapy from the University. These interests are reviewed and managed under the University’s conflict of interest policies.</p>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Saint Paul, Minnesota 55114</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>iPSC-derived muscle stem cells<br>for muscular dystrophy</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="74" text-anchor="middle" style="font-family:\'Poppins\',system-ui,sans-serif;font-weight:600;font-size:108px;letter-spacing:-.02em"><tspan fill="#f6f3ee">myo</tspan><tspan fill="#f4543d">gênica</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Myogenica Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Myogenica — iPSC muscle stem cell therapy for muscular dystrophy, Saint Paul",x:"Home"};
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
