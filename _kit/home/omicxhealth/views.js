/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){var p=TEAM[0];return '<div class="fdr"><div class="fdr-n"><span class="lab kick" data-r>Founder</span><h3 data-r>'+esc(p[0])+'</h3><span class="lab rl" data-r>'+esc(p[1])+'</span></div><p data-r>'+esc(p[2])+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Early cancer detection<span class="nomob"> · San Francisco Bay Area</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Sequence once.</span><span class="l"><em>Detect many.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OmicXScreen is a blood test for early cancer detection. The whole genome is sequenced once and analysed entirely in software, starting with liver cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A nucleosome, atom by atom (PDB 1KX5): DNA wrapped on a histone spool, the form cell-free DNA takes in blood.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Cancer is most curable, and most affordable to treat, when it is found early. OmicXScreen reads several cancer signals from one blood draw, and gets better with every model update <em>without redesigning the assay.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%<i>vs</i>14%</span><span class="k">Five-year survival across all cancers, localized versus distant stage (NCI SEER)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~90%</span><span class="k">Accuracy detecting liver cancer (HCC) in preliminary work on public datasets</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">Cancer types in the platform’s multi-cancer proof of concept</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Patent-pending</span><p data-r>A “Sequence Once, Analyze Many Times” method extracts several signals from one moderate-depth whole-genome bisulfite sequencing run.</p></div>'+
    '<div><span class="lab kick" data-r>Software-defined</span><p data-r>All proprietary value lives in software, on off-the-shelf reagents and sequencing, with transparent, signal-level results.</p></div>'+
    '<div><span class="lab kick" data-r>Capital-efficient</span><p data-r>No owned lab, even at volume: after regulatory approval the test can be licensed to large laboratories.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One blood draw, <em>read many ways.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Draw</span><span>Sequence</span><span>Analyse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tumors shed DNA into the blood.</h2><p>Fragments of cell-free DNA (cfDNA) circulate in plasma. A single blood draw collects them, and with them the earliest molecular traces of a cancer.</p></article>'+
     '<article class="step"><h2>The whole genome, sequenced once.</h2><p>Whole-genome bisulfite sequencing reads every fragment and its methylation: methylated cytosines read as C, unmethylated ones as T. Abnormal methylation is one of the earliest signs of cancer.</p></article>'+
     '<article class="step"><h2>Analysed many times, in software.</h2><p>Methylation, fragment length and copy-number changes come from the same run. Machine-learning models for each cancer read them, so a new cancer ships as a model update.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Liver first, <em>then many cancers.</em></h2></div><p data-r>OmicXScreen starts with hepatocellular carcinoma, where today’s ultrasound and AFP surveillance has low sensitivity, and extends to further cancers from the same sequencing data.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Software people, <em>cancer genomics.</em></h2></div><p data-r>OmicXHealth brings together specialists in bioinformatics, cancer genomics and AI/ML, led by a founder who has spent a career building data platforms.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">A busy <em>2026.</em></h2></div><p data-r>A National Cancer Institute award, a place in the Startup Battlefield 200 and new data at the year’s largest liver meeting.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Catch cancer early. <em>Save lives.</em></h2>'+
   '<p class="sub" data-r>OmicXHealth is looking for clinical partners, advisors and investors who share the goal of non-invasive early detection, and keeps an interest list for early access to the test.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span>OmicXHealth, Inc.</span><br><span>San Ramon, California</span><br><span>San Francisco Bay Area</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Validation</span><p data-r><span>Blinded liver cancer study</span><br><span>at UT Southwestern</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>San Ramon, California<br>San Francisco Bay Area</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Early cancer detection<br>from a single blood draw</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Caudex\',Georgia,serif;font-weight:700;font-size:74px;letter-spacing:-.005em"><tspan fill="#f2f5fa">OmicX</tspan><tspan fill="#6aa6f5">Health</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OmicXHealth, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OmicXHealth — OmicXScreen, a blood test for early cancer detection",x:"Home"};
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
