/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+'</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage nanomedicine<span class="nomob"> · New Canaan, Connecticut</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Several targets.</span><span class="l"><em>One particle.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Immunova is a clinical stage oncology company, using proprietary nanotechnology to develop first in class medicines capable of attacking multiple targets at once. The result: better outcomes for patients.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Illustrative render, not to scale: a nanolipogel cut open, lipid shell around a hydrogel core.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The nanolipogel</span>'+
   '<h2 class="txt" id="mani">A lipid shell around a hydrogel core. Immunova uses it to carry <em>different medicines in one particle,</em> released together and over time.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$460K</span><span class="k">NIH SBIR Phase I award from the National Institute on Aging, September 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Yale</span><span class="k">The nanolipogel platform was invented in the lab of Dr. Tarek Fahmy at Yale and developed commercially by Immunova</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">UF</span><span class="k">A University of Florida startup, based in Connecticut</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Licensed from Yale</span><p data-r>Immunova is the licensee of Yale University’s rights in a family of nanolipogel patents, including vehicles for the controlled delivery of different pharmaceutical agents.</p></div>'+
    '<div><span class="lab kick" data-r>Built for combinations</span><p data-r>One particle can carry a protein, such as a cytokine, alongside a small-molecule drug, and release them in a sustained way.</p></div>'+
    '<div><span class="lab kick" data-r>Beyond oncology</span><p data-r>A second platform of lipid ether amide hybrids, funded by the NIH, aims to restore neurogenesis in the ageing brain.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Inside a <em>nanolipogel.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Shell</span><span>Core</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A lipid shell.</h2><p>On the outside, a nanolipogel is a lipid bilayer, like a liposome: a closed membrane around the particle.</p></article>'+
     '<article class="step"><h2>A hydrogel core.</h2><p>Inside, a crosslinked hydrogel holds the cargo. It can carry proteins such as cytokines alongside small-molecule drugs, which the core can hold with a cyclodextrin.</p></article>'+
     '<article class="step"><h2>Released together, over time.</h2><p>The agents leave the particle together and in a sustained way, so one medicine can attack several targets at once.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Nanomedicine, <em>and beyond.</em></h2></div><p data-r>Nanolipogel immunotherapies for cancer, built with partners, and a new class of lipid neurogenic compounds for the ageing brain.</p></div>'+
   '<div class="pl-grid">'+progs()+
   '<div class="bk"><span class="lab kick" data-r>Work with</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people <em>behind it.</em></h2></div><p data-r>Immunova is led from Connecticut, with science rooted at Yale University and the University of Florida.</p></div>'+
   '<ul class="tm">'+
    '<li><div class="tn"><h3>Brian Horsburgh, PhD</h3><span class="lab rl">Chief Executive Officer</span></div><p>Leads Immunova, including its long-standing collaboration with Portage Biotech and the 2024 letter of intent on iOx Therapeutics.</p></li>'+
    '<li><div class="tn"><h3>Stanislav I. Svetlov</h3><span class="lab rl">Chief Scientific Officer</span></div><p>Principal investigator on Immunova’s 2026 NIH SBIR award for lipid ether amide hybrids in age-related cognitive decline.</p></li>'+
   '</ul>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Funding, partnerships and proof of concept, as published by the NIH and our partners.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and collaborators</span>'+
   '<h2 class="big split">Talk to <em>Immunova.</em></h2>'+
   '<p class="sub" data-r>To talk about the nanolipogel platform, a partnership or our programmes, contact us for more information.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Immunova, LLC<br>New Canaan, Connecticut</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Immunova, LLC<br>New Canaan, Connecticut</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Nanolipogel technology<br>licensed from Yale University</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="64" text-anchor="middle" style="font-family:\'Roboto Slab\',Georgia,serif;font-weight:400;font-size:86px;letter-spacing:.0em">immunova</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Immunova, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Immunova — nanolipogel medicines that act on several targets at once",x:"Home"};
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
