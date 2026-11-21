/* ================= VIEWS (home only: Platform / Products / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[1])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Board and advisors</span><p data-r>'+BOARD.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>RNA fragmentomics<span class="nomob"> · Santa Cruz, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The RNA others</span><span class="l">miss, <em>read in full.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RealSeq Biosciences builds the RiboMarker® platform and library preparation kits that capture the RNA fragments conventional sequencing cannot see, to discover biomarkers for next-generation diagnostics.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/platform">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>RNA, atom by atom: a 19-base-pair RNA duplex (PDB 1QC0) with two shorter RNA fragments.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why RNA fragments</span>'+
   '<h2 class="txt" id="mani">Most of the RNA circulating in blood is broken into fragments, and most sequencing preparations throw that information away. RealSeq was founded to <em>read the other ninety per cent.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;90%</span><span class="k">Of cell-free RNA is fragmented, and missed by current methods</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10,000×</span><span class="k">Under-detection of some small RNAs by common library preparations</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.02M</span><span class="k">NIH NHGRI SBIR Phase II award in fiscal 2025, continued in 2026</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Complete transcriptomics</span><p data-r>RNA fragments carry dynamic information: how far a disease has progressed, not only whether it is present.</p></div>'+
    '<div><span class="lab kick" data-r>Complementary to DNA</span><p data-r>Alongside the DNA analysis common in liquid biopsies, RNA fragmentomics adds insight that DNA alone cannot give.</p></div>'+
    '<div><span class="lab kick" data-r>Built on NIH funding</span><p data-r>Founded in 2019, a 2022 BioTools Innovator finalist, seed-funded, and backed by NIH Phase I and II grants.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The RiboMarker® platform</span><h2 class="d3">One adapter, <em>one circle.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fragment</span><span>Circle</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Most RNA arrives in pieces.</h2><p>Cell-free RNA in a biofluid is mostly short fragments of miRNA, mRNA, lncRNA and tRNA. Standard preparations attach two adapters, one to each end, and that sequence-dependent step under-detects many fragments.</p></article>'+
     '<article class="step"><h2>A single adapter, then a circle.</h2><p>RealSeq attaches one adapter and closes the fragment into a circle. This, the company’s key breakthrough, nearly eliminates incorporation bias in library preparation.</p></article>'+
     '<article class="step"><h2>Sequenced, then modelled.</h2><p>Next-generation sequencing quantifies the whole fragmentome, and RealSeq’s AI models read degradation, splicing, mutations and base modifications from it, many biomarkers in one experiment.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products and services</span><h2 class="d2 split">Kits and services <em>for every lab.</em></h2></div><p data-r>RealSeq’s patented library preparation kits are available to order online or by purchase order, with sequencing and bioinformatics services alongside.</p></div>'+
   progs()+
   '<div class="apps"><span class="lab kick" data-r>Where RiboMarker® applies</span><ul>'+APPS.map(function(a){return '<li data-r><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p></li>'}).join("")+'</ul></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Three founders, <em>since 2019.</em></h2></div><p data-r>RealSeq was founded in 2019 by two RNA scientists and an operator, with a board and scientific advisor alongside.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From a kit launch <em>to Phase II.</em></h2></div><p data-r>Recent awards, collaborations and launches, with links to the full announcements.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, researchers and investors</span>'+
   '<h2 class="big split">Bring RNA fragmentomics <em>to the clinic.</em></h2>'+
   '<p class="sub" data-r>RealSeq is looking for industry and research collaborations to discover new RNA biomarkers and tie them to clinical outcomes and traits. To talk about a project, a kit or a partnership, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email RealSeq '+ARR+'</a><a class="btn" href="'+WEB+'ngs-products" target="_blank" rel="noopener">Order kits</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>RealSeq Biosciences<br>2125 Delaware Ave, Suite B<br>Santa Cruz, CA 95060</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18312050127">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Founded</span><p data-r>2019, Santa Cruz<br>NIH SBIR funded</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2125 Delaware Ave, Suite B<br>Santa Cruz, California 95060</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email RealSeq</a><br><a class="ul" href="tel:+18312050127">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>RNA fragmentomics<br>for next-generation diagnostics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Source Sans 3\',system-ui,sans-serif;font-weight:600;font-style:italic;font-size:78px;letter-spacing:-.01em"><tspan fill="#f4f1e8">Real</tspan><tspan fill="#a6d158">Seq</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RealSeq Biosciences</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",platform:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RealSeq Biosciences — RNA fragmentomics, Santa Cruz",x:"Home"};
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
