/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Oncology therapeutics<span class="nomob"> · Yadkinville, North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Chemotherapy’s</span><span class="l">backbone, <em>rebuilt.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Deep Creek Pharma, a Wake Forest University School of Medicine spinout, is developing CF10, a next-generation fluoropyrimidine designed to improve on fluorouracil, first in metastatic colorectal cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How CF10 works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Human thrombin (green) bound to the thrombin-binding aptamer (blue), PDB 4DIH: the scaffold of the TBA-EFPREX program.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">For more than sixty years, fluorouracil has been the backbone of chemotherapy for colorectal and other solid tumors. Most of each dose is broken down before it can act. CF10 is built to <em>deliver the active form directly.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~1,000×</span><span class="k">More potent than fluorouracil, per the company</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><span class="k">Survival at 90 days on CF10 in a published mouse study, against 0% by day 37 on 5-FU</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.9M</span><span class="k">In NCI STTR awards to the company since 2021</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A Wake Forest spinout</span><p data-r>Built on two decades of fluoropyrimidine polymer research in the Gmeiner lab at Wake Forest University School of Medicine.</p></div>'+
    '<div><span class="lab kick" data-r>Two ways to kill</span><p data-r>In published work, CF10 inhibits thymidylate synthase and poisons topoisomerase 1, causing replication stress and cell death.</p></div>'+
    '<div><span class="lab kick" data-r>Toward the clinic</span><p data-r>The company is in late preclinical development, with metastatic colorectal cancer with liver metastases as its first indication.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">The active drug, <em>delivered as one strand.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">5-FU</span><span>CF10</span><span>Inside</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Most of the dose is lost.</h2><p>Fluorouracil must be converted into its active metabolites to work. A widely cited review reports that ~80–85% of each dose is broken down to inactive products, and only ~1–3% is tied to the drug’s cytotoxic effect.</p></article>'+
     '<article class="step"><h2>CF10 is the active form, polymerized.</h2><p>CF10 links FdUMP, the active metabolite of 5-FU, into a short single strand of DNA, chemically modified to resist enzymatic breakdown. It reaches the tumor as the drug, not as a precursor.</p></article>'+
     '<article class="step"><h2>Two targets inside the cell.</h2><p>Released inside the cancer cell, CF10 inhibits thymidylate synthase and traps topoisomerase 1 on DNA. In a rat liver metastasis model it reduced tumor progression by about 90% compared with 5-FU.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One chemistry, <em>three programs.</em></h2></div><p data-r>All three build on fluoropyrimidine nucleotides written into DNA. All are preclinical, and two are funded by the National Cancer Institute.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the lab <em>that made CF10.</em></h2></div><p data-r>Deep Creek Pharma was founded to carry fluoropyrimidine polymers from the Gmeiner lab at Wake Forest into the clinic.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and publications</span><h2 class="d2 split">Grants and <em>peer-reviewed data.</em></h2></div><p data-r>Recent NCI awards to the company and the latest papers on CF10 in colorectal cancer liver metastasis.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Take CF10 <em>into the clinic.</em></h2>'+
   '<p class="sub" data-r>Deep Creek Pharma is preparing CF10 for early-phase clinical testing in metastatic colorectal cancer. To talk about the data, a partnership or financing, write to the founder.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the founder '+ARR+'</a><a class="btn" href="'+PUB25+'" target="_blank" rel="noopener">Latest paper</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Deep Creek Pharma, LLC<br>Yadkinville, North Carolina</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origins</span><p data-r>Spun out of Wake Forest University School of Medicine</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Deep Creek Pharma, LLC<br>Yadkinville, North Carolina</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="#/contact">Get in touch</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Next-generation fluoropyrimidines<br>for colorectal cancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Public Sans\',system-ui,sans-serif;font-weight:600;font-size:66px;letter-spacing:-.02em"><tspan fill="#f2f4ef">Deep Creek</tspan><tspan fill="#4cc18e" dx="14" style="font-weight:400">Pharma</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Deep Creek Pharma, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Deep Creek Pharma — next-generation fluoropyrimidines for colorectal cancer",x:"Home"};
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
