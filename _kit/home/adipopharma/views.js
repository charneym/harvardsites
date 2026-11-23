/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function benRows(){return '<ul class="pfr pipe ben">'+BEN.map(function(c){
  return '<li><span class="lab tg"><b>PATAS</b><i>Pre-clinical</i></span><div class="pgm"><h3>'+esc(c[0])+'</h3></div><p>'+esc(c[1])+'</p><span class="lab lk av">In vitro · in vivo</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="tmg"><div class="tmg-list" role="list">'+TEAM.map(function(p){
    return '<div class="tmg-p" role="listitem"><figure><div class="tmg-ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="440" height="550" loading="lazy" decoding="async" onerror="this.style.visibility=\'hidden\'"></div><figcaption><span class="tmg-n">'+esc(p.name)+'</span><span class="tmg-r">'+esc(p.title)+'</span></figcaption></figure></div>'}).join("")+'</div></div>'+
  '<div class="bk lt"><span class="lab kick" data-r>Board of directors</span><p class="cr" data-r>'+BOARD.map(function(n){return '<span>'+esc(n)+'</span>'}).join('<i>·</i>')+'</p></div>'+
  '<div class="bk lt b2"><span class="lab kick" data-r>Scientific advisors</span><p class="cr" data-r>'+ADVISORS.map(function(n){return '<span>'+esc(n)+'</span>'}).join('<i>·</i>')+'</p></div>'}
function pubs(){return '<ul class="nws pubs">'+PUBS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'<span class="au">'+esc(n[2])+'</span></h3><span class="lab src">Read article '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The adipocyte, overlooked","Long considered mere storage, the adipocyte is essential for metabolic fitness. Adipose tissue absorbs only 10–15% of circulating glucose, yet the quality of what it makes from that glucose governs whole-body metabolic health.",'<circle cx="28" cy="28" r="20"/><circle cx="31" cy="27" r="14"/><path class="a" d="M12 22q2-6 7-9"/>'],
  ["Learned from a rare disease","Our work began with the genetic investigation of Alström syndrome, an ultra-rare disease of severe insulin resistance and early-onset type 2 diabetes, and led to a proprietary, targeted approach to the adipocyte.",'<path d="M18 6c0 11 20 11 20 22S18 39 18 50"/><path d="M38 6c0 11-20 11-20 22s20 11 20 22"/><path class="a" d="M21 14h14M21 42h14"/>'],
  ["Stapled peptides","Macrocyclic molecules that target a specific protein-protein interaction in the adipocyte, designed to restore its natural function and address the root cause of type 2 diabetes rather than its symptoms.",'<path d="M8 34q5-10 10 0t10 0t10 0t10 0"/><path class="a" d="M13 28Q28 8 43 28"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From adipopharma.com, ClinicalTrials.gov (NCT07223333) and AdipoPharma’s releases. Pre-clinical effects are to be confirmed in clinical trials.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>PATAS<span class="nomob"> · First-in-class insulin sensitizer</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treating type 2</span><span class="l">diabetes at</span><span class="l"><em>its root.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We are developing PATAS, a first-in-class insulin sensitizer that targets the adipocyte, to treat insulin resistance, type 2 diabetes and associated comorbidities.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How PATAS works '+ARR+'</a><a class="btn" href="#/science">Our science</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why the adipocyte</span>'+
   '<h2 class="txt" id="mani">Most diabetes drugs treat the symptoms. PATAS is designed to restore the fat cell, <em>and treat insulin resistance at its root.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">537M</span><p class="k">Adults living with diabetes worldwide, according to the IDF</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–15%</span><p class="k">Of circulating glucose is absorbed by adipose tissue, yet it governs whole-body metabolic fitness</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Phase 1</span><p class="k">First-in-human trial of PATAS under way in the US</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PATAS works</span><h2 class="d3">Reboot the fat cell, <em>restore insulin sensitivity.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Resist</span><span>Bind</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The adipocyte resists.</h2><p>In insulin resistance, glucose absorption in the diseased adipocyte fails, and unhealthy lipids such as the ceramides build up.</p></article>'+
     '<article class="step"><h2>PATAS binds ALMS1.</h2><p>PATAS, a stapled peptide, targets a specific protein-protein interaction of ALMS1 inside the adipocyte.</p></article>'+
     '<article class="step"><h2>Glucose flows in again.</h2><p>In pre-clinical studies PATAS triggers insulin-independent glucose absorption, restoring healthy lipid biosynthesis and reducing the ceramides.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Inspired by genetics, <em>aimed at the adipocyte.</em></h2></div><p data-r>We design innovative metabolic drugs from genetic-derived knowledge: macrocyclic molecules that target a specific protein-protein interaction in the adipocyte to restore its function.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="patas" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>PATAS</span><h2 class="d2 split">A first-in-class <em>insulin sensitizer.</em></h2></div><p data-r>PATAS is our stapled peptide, designed to act directly on the adipose tissue. By restoring glucose absorption in the diseased adipocyte, it gives back to the adipocyte its physiological glucose-based cellular fuel tropism.</p></div>'+
   benRows()+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From Strasbourg <em>to the clinic.</em></h2></div><p data-r>Founded in July 2022 by Dr. Vincent Marion, Deputy Director of the Laboratory of Medical Genetics of Strasbourg, whose team spent more than a decade on the adipocyte’s role in insulin resistance.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Peer-reviewed, <em>from cilia to PATAS.</em></h2></div><p data-r>Scientific publications and communications from Dr. Marion’s team on adipocyte biology and on PATAS.</p></div>'+
   pubs()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>AdipoPharma.</em></h2></div><p data-r>Announcements on PATAS, our clinical programme and our funding.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Get in <em>touch.</em></h2>'+
   '<p class="sub" data-r>For any questions about AdipoPharma or PATAS, feel free to write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/patas">About PATAS</a></div>'+
   '<div class="cinfo c4">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span class="cl">2 rue Marie Hamm</span><span class="cl">67000 Strasbourg, France</span></p></div>'+
    '<div><span class="lab" data-r>Offices</span><p data-r><span class="cl">Pittsburgh, Pennsylvania</span><span class="cl">Biopark Gosselies, Belgium</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">michael.fare@<wbr>adipopharma.us</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://fr.linkedin.com/company/adipopharma" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Strasbourg, France<br>Pittsburgh · Gosselies</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">michael.fare@adipopharma.us</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/patas">PATAS</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">Lead compound</span>PATAS · first-in-class insulin sensitizer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Figtree\',sans-serif;font-weight:500;font-size:70px">ADIPOPHARMA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AdipoPharma</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",patas:"patas",team:"team",publications:"publications",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AdipoPharma — treating type 2 diabetes at its root",x:"Home"};
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
