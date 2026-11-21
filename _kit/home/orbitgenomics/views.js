/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="ogt">'+TEAM.map(function(p){
  return '<li><figure><img src="'+p[2]+'" alt="'+esc(p[0])+'" width="360" height="360" loading="lazy" decoding="async"></figure><div class="tx"><h3>'+esc(p[0])+'</h3><span class="rl">'+esc(p[1])+'</span></div></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Advisors</span><p data-r>'+ADV.map(function(a,i){return (i?'<i aria-hidden="true">·</i>':'')+'<span>'+esc(a[0])+' <em>'+esc(a[1])+'</em></span>'}).join("")+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>OrbiSeq™ precision genomics<span class="nomob"> · Boulder, Colorado</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new genomics engine</span><span class="l"><em>for precision healthcare.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Orbit Genomics reads short tandem repeats across the genome, a layer of biology conventional genomics cannot reach. Its first product is a blood test for the lung nodules a CT scan cannot diagnose.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How OrbiSeq works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>B-form DNA carrying a short tandem repeat, six CAG units in a row, the class of sequence OrbiSeq™ reads. Illustrative model.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A layer genomics missed</span>'+
   '<h2 class="txt" id="mani">For decades genomics has read genes and SNPs. OrbiSeq™ reads the short tandem repeats between them, <em>which capture inherited risk and active disease biology.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1M</span><p class="k">Short tandem repeats in the human genome, which conventional sequencing cannot read genome-wide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~2M</span><p class="k">Americans a year found to have an indeterminate pulmonary nodule on low-dose CT</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">99%</span><p class="k">Negative predictive value for benign vs malignant nodules in the prototype’s 138-sample test set</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Diagnosis</span><p data-r>OrbiSeq-L™ is the first blood test to achieve diagnostic-level accuracy in patients with indeterminate pulmonary nodules.</p></div>'+
    '<div><span class="lab kick" data-r>Prevention</span><p data-r>OrbiSeq-C, in development, is a single blood test for increased risk of multiple types of cancer.</p></div>'+
    '<div><span class="lab kick" data-r>Treatment</span><p data-r>Companion diagnostics that find the patients most likely to benefit from a treatment, and new therapeutic targets.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">OrbiSeq™ reads <em>the repeats.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Repeats</span><span>Profile</span><span>Answer</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Find the repeats.</h2><p>Short tandem repeats are runs of one to six bases, repeated: CAGCAGCAGCAGCAG is a CAG motif five times. They vary between people, and they help regulate genes, genome stability and DNA repair.</p></article>'+
     '<article class="step"><h2>Read them genome-wide.</h2><p>Conventional sequencing cannot accurately analyse STRs across the genome. OrbiSeq’s patented, AI-enabled platform can, and combines them with SNPs, so one profile holds inherited risk and active disease biology.</p></article>'+
     '<article class="step"><h2>Answer the clinical question.</h2><p>From a single blood draw, OrbiSeq-L™ tells benign from malignant pulmonary nodules: 96% PPV and 99% NPV in the prototype’s test set, without a biopsy or a year of waiting.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One platform, <em>many questions.</em></h2></div><p data-r>Lung cancer is the commercial beachhead. From the same genomics platform, Orbit Genomics is building products across diagnosis, prevention and treatment, extending well beyond oncology.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded on the research <em>of Dr. Skip Garner.</em></h2></div><p data-r>The leadership team brings experience across life sciences, bioinformatics, regulatory strategy, laboratory method development and company building, and a record of turning complex science into validated diagnostic tests.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From poster <em>to podium.</em></h2></div><p data-r>New data on the lung cancer blood test, a national startup prize, and an NCI Direct-to-Phase II SBIR award for lung cancer subtyping.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, collaborators and partners</span>'+
   '<h2 class="big split">Read the layer <em>genomics missed.</em></h2>'+
   '<p class="sub" data-r>To learn more about Orbit Genomics, our technology, products, collaborations and partnership opportunities, write to us in Boulder.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r class="adr"><span>Orbit Genomics, Inc.</span><span>4665 Nautilus Ct S, Ste 300</span><span>Boulder, Colorado 80301</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+17205150395">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>4665 Nautilus Ct S, Ste 300<br>Boulder, Colorado 80301</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+17205150395">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Platform</span>OrbiSeq™ short tandem<br>repeat genomics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="56" text-anchor="middle" style="font-family:\'Jost\',system-ui,sans-serif;font-weight:400;font-size:56px;letter-spacing:.12em"><tspan fill="#f3f1f7">ORBIT</tspan><tspan fill="#d68cdc" dx="22">GENOMICS</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Orbit Genomics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Orbit Genomics — OrbiSeq™ short tandem repeat genomics, Boulder, Colorado",x:"Home"};
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
