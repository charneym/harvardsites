/* ================= VIEWS (home only: Technology / Program / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Metagenomic sample purification<span class="nomob"> · Camillus, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Every genome</span><span class="l">in the sample, <em>kept.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Syracuse BioLabs is turning the Syracuse Method into a kit: a simple, inexpensive way to separate human and microbial cells before DNA extraction, so no organism’s DNA is sacrificed on the way to the sequencer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology" data-to="story">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Rendered view: human cells resting on a 5-micron filter while bacteria pass through its pores.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">A microbiome study is only as good as its sample prep. Existing kits lose part of the DNA while they separate host from microbe. The Syracuse Method separates the cells first, <em>and keeps both.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5 µm</span><span class="k">Pore size of the filters that hold back human cells while bacteria pass through</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.26M</span><span class="k">In NIH NIGMS STTR awards since 2021, across Phase I and Phase II</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Separate fractions in the patented method: bacterial, plant and animal cells</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>With Syracuse University</span><p data-r>Developed with scientists at the university’s Forensic and National Security Sciences Institute, under an NIH STTR partnership.</p></div>'+
    '<div><span class="lab kick" data-r>Patented</span><p data-r>US Patent 12,344,834, granted to Syracuse University in July 2025, covers the separation and extraction method.</p></div>'+
    '<div><span class="lab kick" data-r>Better data</span><p data-r>Keeping every organism’s DNA means higher sequencing coverage and sensitivity, and more confidence in what is identified.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Sort first, <em>then extract.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Filter</span><span>Fractions</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One sample, many genomes.</h2><p>A metagenomic sample mixes human cells with bacteria and other organisms. Characterizing each one depends on separating them cleanly, for example removing human cells from the microbial fraction without losing either.</p></article>'+
     '<article class="step"><h2>Sorted by size, before anything is broken.</h2><p>The suspended sample passes through 5 µm filters before any lysis. Human cells are too large and stay on the filter; bacteria pass through the pores into their own fraction.</p></article>'+
     '<article class="step"><h2>Each fraction opened on its own terms.</h2><p>Lysis buffers matched to each cell type, lysozyme for bacterial walls and SDS detergent for animal cells, release the DNA of each fraction with little carryover, ready for qPCR or next-generation sequencing.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2 cmpx" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What changes</span><h2 class="d2 split">Nothing <em>sacrificed.</em></h2></div><p data-r>Host-depletion protocols in today’s purification kits give up part of the sample to enrich the rest. The Syracuse Method was built to keep it all.</p></div>'+
   '<div class="cmp">'+
    '<div class="cc"><span class="lab kick" data-r>Existing kit protocols</span><ul><li data-r>Some organismal DNA is lost or “sacrificed” in the first separation steps</li><li data-r>Lower sequencing coverage for what remains</li><li data-r>Less confidence in organismal characterization</li></ul></div>'+
    '<div class="cc on"><span class="lab kick" data-r>The Syracuse Method</span><ul><li data-r>All organismal DNA preserved through separation</li><li data-r>Higher sequencing coverage and higher sensitivity</li><li data-r>Simple and inexpensive, built toward fieldable modules</li></ul></div>'+
   '</div>'+
   '<div class="bk"><span class="lab kick" data-r>Where it applies</span><p class="cr" data-r>'+APPS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="program" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Program</span><h2 class="d2 split">From the lab bench <em>to a kit.</em></h2></div><p data-r>Funded by the National Institute of General Medical Sciences through the STTR program, in partnership with Syracuse University.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Chemistry and <em>forensic genomics.</em></h2></div><p data-r>The company works with the Syracuse University scientists who invented the method.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>a patent.</em></h2></div><p data-r>Milestones from the NIH record and the US Patent and Trademark Office.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Labs, partners and distributors</span>'+
   '<h2 class="big split">Keep every genome <em>in your data.</em></h2>'+
   '<p class="sub" data-r>Syracuse BioLabs works from Camillus, New York, with Syracuse University. To talk about the method, an evaluation or a partnership, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+RP3+'" target="_blank" rel="noopener">The NIH award</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Syracuse BioLabs, Inc.<br>Camillus, New York</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Research partner</span><p data-r>Syracuse University<br>Forensic and National Security Sciences Institute</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Syracuse BioLabs, Inc.<br>Camillus, New York</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/program">Program</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Host and microbial DNA,<br>separated and kept</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:600;font-size:72px;letter-spacing:-.01em"><tspan fill="#f1efe8">Syracuse</tspan><tspan fill="#c9a24e" dx="14" font-weight="500">BioLabs</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Syracuse BioLabs, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",program:"program",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Syracuse BioLabs — host and microbial DNA, separated and kept",x:"Home"};
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
