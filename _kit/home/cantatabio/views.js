/* ================= VIEWS (home only: Technology / Applications / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function apps(){return '<ul class="pfr">'+APPS.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+LP+'" target="_blank" rel="noopener">LinkPrep™</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Genomics solutions<span class="nomob"> · Scotts Valley, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Long-range genomics,</span><span class="l"><em>on short reads.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cantata Bio, the parent company of Dovetail Genomics and Arc Bio, develops next-generation sequencing products and services for researchers and clinicians, from genetic variation to 3D chromatin architecture and genome assembly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How LinkPrep works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A nucleosome, atom by atom: 147 base pairs of DNA wrapped around a histone core, from its 1.9 Å crystal structure (PDB 1KX5).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Short reads are accurate and affordable, but each sees only a fragment. LinkPrep™ chemistry brings long-range genomic information to standard short-read sequencing, in <em>a single, same-day assay.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 day</span><span class="k">From sample to sequencing-ready libraries, without specialized expertise or sequencing platforms</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100×</span><span class="k">Better structural variant detection than traditional whole-genome sequencing, as Dovetail reported in 2024</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2M</span><span class="k">NHGRI SBIR award to take LinkPrep into oncology samples, including FFPE tissue</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Dovetail Genomics</span><p data-r>Linked-read technologies, streamlined bioinformatics and expert scientific support for genetic variation, 3D genomics and genome assembly.</p></div>'+
    '<div><span class="lab kick" data-r>Arc Bio</span><p data-r>Metagenomic next-generation sequencing on the Omni ID™ platform, for broad-range, single-test assays in laboratories of all sizes.</p></div>'+
    '<div><span class="lab kick" data-r>From sample to insight</span><p data-r>The cloud-based Dovetail Analysis Portal turns linked-read FASTQ files into interactive reports, with no in-house bioinformatics needed.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">The genome, read <em>in three dimensions.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Folded</span><span>Linked</span><span>Read</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>DNA is folded in the nucleus.</h2><p>Chromatin folds into compartments, domains and loops, so sequences that lie far apart along the strand can sit side by side in the nucleus.</p></article>'+
     '<article class="step"><h2>Neighbors are linked.</h2><p>LinkPrep chemistry captures DNA that lies close together and links it. Unlike restriction-enzyme Hi-C, it gives highly uniform coverage across the genome.</p></article>'+
     '<article class="step"><h2>Short reads, long-range answers.</h2><p>The libraries run on standard short-read sequencers. The links reveal structural variants, chromatin loops and haplotype-resolved, chromosome-scale assemblies.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">One assay, <em>many applications.</em></h2></div><p data-r>LinkPrep powers three core areas of genomic discovery, from SNVs to chromosome-scale assemblies, across blood, cells, tissues, plant material and FFPE specimens.</p></div>'+
   apps()+
   '<div class="bk"><span class="lab kick" data-r>Portfolio</span><p class="cr" data-r>'+KITS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists who <em>build the tools.</em></h2></div><p data-r>A small team of scientists and business professionals in Scotts Valley, part of EdenRoc Sciences, a group of life-science companies based in Worcester, Massachusetts.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, people <em>and discovery.</em></h2></div><p data-r>Recent awards from the National Human Genome Research Institute, company updates and coverage of 3D genomics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, clinicians and partners</span>'+
   '<h2 class="big split">Ask the genome <em>a bigger question.</em></h2>'+
   '<p class="sub" data-r>To talk about LinkPrep, a project, a distribution partnership or a role on the team, write to us or call the Scotts Valley office.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+JOBS+'" target="_blank" rel="noopener">Open roles</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Cantata Bio LLC<br>100 Enterprise Way, Suite A-101<br>Scotts Valley, CA 95066</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18317134465">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Companies</span><p data-r><a class="ul" href="'+DOV+'" target="_blank" rel="noopener">Dovetail Genomics</a><br><a class="ul" href="'+ARC+'" target="_blank" rel="noopener">Arc Bio</a><br>A subsidiary of <a class="ul" href="'+EDEN+'" target="_blank" rel="noopener">EdenRoc Sciences</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>100 Enterprise Way, Suite A-101<br>Scotts Valley, California 95066</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18317134465">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Companies</span><a class="ul" href="'+DOV+'" target="_blank" rel="noopener">Dovetail Genomics</a><br><a class="ul" href="'+ARC+'" target="_blank" rel="noopener">Arc Bio</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:400;font-size:76px;letter-spacing:-.015em"><tspan fill="#f5f8f1">Cantata</tspan><tspan fill="#87c600" dx="18">Bio</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cantata Bio LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cantata Bio — genomics solutions, Scotts Valley, California",x:"Home"};
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
