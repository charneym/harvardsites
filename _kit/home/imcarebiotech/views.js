/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function pipeRows(){return '<ul class="pfr path">'+PIPE.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+', source">Source '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Liver cancer diagnostics<span class="nomob"> · Doylestown, Pennsylvania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Finding liver cancer</span><span class="l">early, in a simple</span><span class="l"><em>blood sample.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ImCare Biotech develops Seravue®, a blood test built on LC-SPIK, a protein specific to liver cancer, for earlier detection of hepatocellular carcinoma.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/pipeline">Our pipeline '+ARR+'</a><a class="btn" href="#/technology">How Seravue® works</a></div></div>'+
   '<span class="lab cap">Blood samples · photograph, National Cancer Institute</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Hepatocellular carcinoma is one of the deadliest cancers, and survival depends on catching it early. <b class="w0">LC-SPIK reflects a distinct side of liver cancer biology, adding what AFP and DCP may miss.</b> <em>Earlier answers, from one blood draw.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,200+</span><span class="k">Patients across multiple cohorts in ImCare’s aggregated LC-SPIK data</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Markers in Seravue AI: LC-SPIK with AFP and DCP, combined by an algorithm</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2011</span><span class="k">Founded by Dr. Xuanyong Lu, formerly of Drexel University</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">From a liver tumour <em>to one clear result.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Liver</span><span>Sample</span><span>Assay</span><span>Algorithm</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The liver.</h2><p>People at risk, such as patients with cirrhosis or hepatitis B, need regular surveillance for hepatocellular carcinoma (HCC), the most common primary liver cancer.</p></article>'+
     '<article class="step"><h2>The sample.</h2><p>Malignant liver cells release LC-SPIK, a liver cancer-specific form of the protein SPIK, into the blood, so a simple blood sample can carry the signal.</p></article>'+
     '<article class="step"><h2>The assay.</h2><p>Seravue® measures LC-SPIK quantitatively: in each well, capture antibodies hold the protein so its level can be read.</p></article>'+
     '<article class="step"><h2>The algorithm.</h2><p>Seravue AI adds AFP and DCP, the established markers, and combines all three with clinical information through an AI algorithm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Diagnose earlier, <em>then treat.</em></h2></div><p data-r>Two diagnostics built on LC-SPIK, and a drug programme that targets SPIK itself, all aimed at liver cancer.</p></div>'+
   pipeRows()+
   '<p class="ack" data-r>LC-SPIK is described in Lu et al., Clinical and Translational Gastroenterology 11(12), e00271 (2020) and Diagnostics 14(7), 725 (2024). Seravue® development has been supported by SBIR awards from the National Cancer Institute, including a Phase IIB Bridge Award of up to $4M (2021).</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Science and commerce, <em>in one team.</em></h2></div><p data-r>The inventor of LC-SPIK, with leaders from assay development, AI engineering and finance, taking Seravue® from the lab to patients.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the bench <em>to the clinic.</em></h2></div><p data-r>The latest from ImCare Biotech, LC-SPIK and Seravue®.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Help bring liver cancer <em>into view sooner.</em></h2>'+
   '<p class="sub" data-r>To evaluate the LC-SPIK research use only kit, or to talk about partnerships, write to the ImCare Biotech team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>R&amp;D centre</span><p data-r><span class="bl">3805 Old Easton Road</span><span class="bl">Doylestown, PA 18902</span></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+12154894906">(+1) 215-489-4906</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Doylestown</span>3805 Old Easton Road<br>Doylestown, PA 18902, USA</div>'+
   '<div class="c"><span class="lab">Phone</span><a class="ul" href="tel:+12154894906">(+1) 215-489-4906</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:400;font-size:62px;letter-spacing:.01em">ImCare Biotech</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ImCare Biotech, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ImCare Biotech — Seravue® LC-SPIK blood test for the early detection of liver cancer",x:"Home"};
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
