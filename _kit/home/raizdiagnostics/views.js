/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pt"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function mh(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership and investigators</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lymphoma diagnostics<span class="nomob"> · Boston, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">World-class expertise,</span><span class="l"><em>built into the method.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>An end-to-end, treatment-defining lymphoma diagnosis. LymphomaDx reads the gene expression of a standard core needle biopsy to call both the presence and the subtype of lymphoma, the same day.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How the assay works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A stained tissue section, seen through the microscope: the view expert diagnosis depends on today.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Lymphoma is potentially curable, yet diagnosing it takes rounds of immunohistochemistry, expert interpretation and weeks, and many hospitals have no hematopathologist. <em>Raiz puts that expertise into the assay itself.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;20%</span><span class="k">Diagnostic discordance in today’s standard lymphoma workup</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">94%</span><span class="k">Concordance of LymphomaDx with expert consensus in preliminary data</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.29M</span><span class="k">In National Cancer Institute SBIR Phase II funding since 2025</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Same day, low cost</span><p data-r>A molecular answer in hours rather than weeks, at a cost built for community hospitals and resource-constrained settings.</p></div>'+
    '<div><span class="lab kick" data-r>From the tissue labs keep</span><p data-r>Runs on formalin-fixed, paraffin-embedded core needle biopsies, and works even with low-input tissue.</p></div>'+
    '<div><span class="lab kick" data-r>On existing instruments</span><p data-r>Uses infrastructure already present in most clinical labs, with a path from CLIA test to IVD kit.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">From biopsy to subtype, <em>in one assay.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Biopsy</span><span>Ligate</span><span>Read</span><span>Call</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The biopsy every lab already has.</h2><p>A core needle biopsy, formalin-fixed and embedded in paraffin: the standard FFPE block. LymphomaDx starts from its RNA, even when there is little tissue to spare.</p></article>'+
     '<article class="step"><h2>Probe pairs find each gene.</h2><p>Two probes bind side by side on a target gene’s RNA and are chemically joined only where both match. This is chemical ligation probe amplification, CLPA.</p></article>'+
     '<article class="step"><h2>Amplified and read out.</h2><p>Only joined probes are copied by PCR, so each gene’s signal reflects its expression. The readout runs on standard lab instruments; the published assay used capillary electrophoresis.</p></article>'+
     '<article class="step"><h2>A diagnosis and a subtype.</h2><p>A locked machine-learning algorithm reads the expression pattern and calls whether lymphoma is present and which subtype, without a morphology review.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From assay <em>to kit.</em></h2></div><p data-r>The National Cancer Institute’s SBIR Phase II award funds three aims, with access to more than 2,500 annotated biopsy specimens across multiple institutions and exclusive rights to the core IP.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Published</span><p class="cr" data-r><a class="ul" href="'+PAPER+'" target="_blank" rel="noopener">Valvert, Silva, Solórzano-Ortiz et al., “Low-cost transcriptional diagnostic to accurately categorize lymphomas in low- and middle-income countries,” <em>Blood Advances</em> 5(10), 2021</a></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people <em>behind the method.</em></h2></div><p data-r>Raiz Diagnostics is led by the investigators who built and published the transcriptional approach to lymphoma diagnosis.</p></div>'+
   mh()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded <em>to scale.</em></h2></div><p data-r>The National Cancer Institute’s awards, and the study the assay builds on, each on the public record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pathologists, laboratories and partners</span>'+
   '<h2 class="big split">Expert diagnosis, <em>wherever the biopsy is.</em></h2>'+
   '<p class="sub" data-r>Raiz Diagnostics is based in Boston. To talk about LymphomaDx, the limited beta or a partnership, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Raiz Diagnostics '+ARR+'</a><a class="btn" href="'+BETA+'" target="_blank" rel="noopener">Limited beta access</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Raiz Diagnostics, Inc.<br>Boston, MA 02111</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>National Cancer Institute<br>SBIR Phase II</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Raiz Diagnostics, Inc.<br>Boston, Massachusetts 02111</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+BETA+'" target="_blank" rel="noopener">Limited beta access</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Gene expression diagnosis<br>of lymphoma from FFPE biopsies</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="54" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:400;font-size:66px;letter-spacing:.34em">RAIZ</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Raiz Diagnostics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Raiz Diagnostics — same-day lymphoma diagnosis from the biopsy’s own gene expression, Boston",x:"Home"};
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
