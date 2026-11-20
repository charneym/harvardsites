/* ================= VIEWS (home only: Science / Program / Company / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Inflammatory disease<span class="nomob"> · Melbourne, Victoria</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Calm the fire,</span><span class="l">spare <em>the patient.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Aleris Therapeutics is a Melbourne biotech developing a novel therapy for inflammatory diseases, exploring anti-inflammatory mechanisms designed to avoid the side effects of today’s standards of care.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our approach '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A macrophage, one of the immune cells that drive inflammation, imaged by scanning electron microscope.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Inflammation is how the body defends itself. In inflammatory disease it does not switch off, and the medicines that hold it down bring burdens of their own. <em>Aleris is looking for another way.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.5M</span><span class="k">CUREator+ award, announced August 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 of 6</span><span class="k">Australian health innovators funded in the round</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><span class="k">Founded in Melbourne, Victoria</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Novel mechanisms</span><p data-r>Aleris is exploring anti-inflammatory mechanisms that differ from those behind today’s standards of care.</p></div>'+
    '<div><span class="lab kick" data-r>Fewer trade-offs</span><p data-r>The aim is a therapy that calms inflammation while avoiding the side effects that come with current treatment.</p></div>'+
    '<div><span class="lab kick" data-r>Built to milestones</span><p data-r>Non-dilutive CUREator+ funding, released in tranches as the program reaches agreed milestones.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">Treat the inflammation, <em>not the whole body.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Disease</span><span>Today</span><span>Aleris</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A defence that won’t stand down.</h2><p>Immune cells gather in a tissue and keep sending out inflammatory signals. In inflammatory disease the response persists long after it is useful, and the tissue itself is harmed.</p></article>'+
     '<article class="step"><h2>Relief, at a price.</h2><p>Today’s standards of care can hold inflammation down, but their reach goes beyond the disease, and patients live with the side effects.</p></article>'+
     '<article class="step"><h2>A different mechanism.</h2><p>Aleris is exploring novel anti-inflammatory mechanisms, designed to quiet the inflammation while avoiding the side effects of current treatment.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="program" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Program</span><h2 class="d2 split">One focus: <em>inflammatory disease.</em></h2></div><p data-r>Aleris’s program is a novel therapy for inflammatory diseases, backed by the Medical Research Future Fund through CUREator+.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">A Melbourne biotech, <em>built to translate.</em></h2></div><p data-r>Aleris Therapeutics was founded in 2025 in Victoria to take a new approach to inflammatory disease from the laboratory toward patients.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab" data-r>Company</dt><dd data-r>Aleris Therapeutics Pty Ltd</dd></div>'+
    '<div><dt class="lab" data-r>Based in</dt><dd data-r>Melbourne, Victoria, Australia</dd></div>'+
    '<div><dt class="lab" data-r>Focus</dt><dd data-r>A novel therapy for inflammatory diseases</dd></div>'+
    '<div><dt class="lab" data-r>Funding</dt><dd data-r>$2.5 million CUREator+ award, delivered by Brandon BioCatalyst with ANDHealth and supported by the Australian Government’s Medical Research Future Fund</dd></div>'+
   '</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Backed to take <em>the next step.</em></h2></div><p data-r>In August 2026 Aleris was one of six Australian startups to share $13.5 million in the second CUREator+ round.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, clinicians and investors</span>'+
   '<h2 class="big split">A new answer to <em>inflammation.</em></h2>'+
   '<p class="sub" data-r>Aleris Therapeutics is based in Melbourne. To talk about the program or a partnership, write to the team through the contact form on our current site.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+WEB+'" target="_blank" rel="noopener">Write to the team '+ARR+'</a><a class="btn" href="'+BBC+'" target="_blank" rel="noopener">Read the CUREator+ news</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Aleris Therapeutics Pty Ltd<br>Melbourne, Victoria<br>Australia</p></div>'+
    '<div><span class="lab" data-r>Focus</span><p data-r>A novel therapy for<br>inflammatory diseases</p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>CUREator+ award<br>Medical Research Future Fund</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Melbourne<br>Victoria, Australia</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/program">Program</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>A novel therapy for<br>inflammatory diseases</div>'+
   '<div class="c"><span class="lab">Supported by</span>CUREator+<br>Medical Research Future Fund</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="52" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:500;font-size:60px;letter-spacing:.3em">ALERIS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Aleris Therapeutics Pty Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",program:"program",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Aleris Therapeutics — a novel therapy for inflammatory diseases, Melbourne",x:"Home"};
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
