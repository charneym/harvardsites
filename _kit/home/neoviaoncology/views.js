/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Dual-mechanism conjugate","NEV-801 combines novel analogs related to irinotecan and etoposide, the Topoisomerase I and Topoisomerase II classes, within a single molecular construct: a drug-drug conjugate (DDC).",'<path d="M10 28h12"/><path d="M34 28h12"/><path class="a" d="M22 28h12"/><circle cx="12" cy="28" r="7"/><path d="M44 21l7 3.5v7L44 35l-7-3.5v-7z"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["Plasma-stable architecture","A plasma-stable linker system engineered for controlled release in tumor microenvironments, supporting extended exposure, tumor delivery and broader anti-tumor activity.",'<path d="M8 40c8-6 16-6 20 0s12 6 20 0"/><path class="a" d="M8 26c8-6 16-6 20 0s12 6 20 0"/><path d="M8 12c8-6 16-6 20 0s12 6 20 0"/><circle class="f" cx="28" cy="26" r="2.8"/>'],
  ["Catalytic, not interfacial","Independent studies by TopoGEN showed catalytic inhibition of both human Top1 and Top2α, with no confirmed interfacial-poison behavior. NEV-801 inhibits catalytic turnover rather than trapping the DNA cleavage complex.",'<path d="M6 34c6-4 10-4 16 0s10 4 16 0 8-4 12-2"/><path class="a" d="M18 34V20a10 10 0 0 1 20 0v14"/><circle class="f" cx="28" cy="20" r="2.8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase I(a) results · 2026</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>NEV-801 dose escalation, 20 to 600 mg/m², in 33 heavily pretreated patients with difficult-to-treat late-stage solid tumors (NCT02797795). Neovia release, 6 June 2026; results pending publication. NEV-801 is investigational and has not been approved by the FDA or any other regulatory authority.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage oncology<span class="nomob"> · NEV-801</span> · Newport Beach</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A different way</span><span class="l">to target both</span><span class="l"><em>topoisomerases.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Neovia Oncology is developing NEV-801, a drug-drug conjugate that inhibits Topoisomerase I and II by catalytic inhibition rather than as a conventional poison, for patients whose cancers no longer respond to existing treatments.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/program">The program</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">For decades, topoisomerase-directed drugs have been a mainstay of oncology. But toxicity, resistance and limited flexibility in combination have constrained them. The next advance is not simply more force. <em>It’s better design.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">33</span><p class="k">Heavily pretreated patients with advanced solid tumors in the completed Phase I(a) dose escalation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0</span><p class="k">Grade 3 or 4 treatment-related adverse events, and no neutropenia, across every dose level</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">22%</span><p class="k">Partial responses, more than 30% tumor size reduction, in the higher-dose cohorts</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The Neovia approach</span><h2 class="d3">Engineered to work <em>differently.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Poison</span><span>Conjugate</span><span>Catalytic</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Conventional drugs poison the enzyme.</h2><p>Many topoisomerase-directed therapies act as interfacial poisons: they trap the enzyme on DNA at the moment it cuts, turning a working enzyme into DNA damage, with the liabilities that brings.</p></article>'+
     '<article class="step"><h2>Two analogs in one molecule.</h2><p>NEV-801 joins novel analogs related to irinotecan and etoposide in a plasma-stable conjugate, engineered for controlled release in the tumor microenvironment.</p></article>'+
     '<article class="step"><h2>Both enzymes stop, the DNA is not trapped.</h2><p>Independent studies showed catalytic inhibition of both Top1 and Top2α: NEV-801 halts the enzymes’ catalytic turnover instead of trapping the DNA cleavage complex.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One construct, <em>two targets.</em></h2></div><p data-r>NEV-801 is a patented drug-drug conjugate with a newly clarified mechanism of action that may distinguish it from conventional topoisomerase poisons.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="program" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Program</span><h2 class="d2 split">From first patients <em>to many paths.</em></h2></div><p data-r>NEV-801 has shown potential as a biomarker-agnostic solid tumor therapy, a combination-enabled program and a foundation for future ADC payloads: several strategic paths from one core innovation.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Different backgrounds, <em>one objective.</em></h2></div><p data-r>Better options for patients facing drug-resistant cancers. Neovia’s leadership combines science, medicine, entrepreneurship, finance and global healthcare.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Founded</span><p data-r>2012, by Trevor G. Blake, to develop cancer therapies that address drug resistance while minimizing severe side effects.</p></div>'+
    '<div><span class="lab kick" data-r>Mechanism</span><p data-r>Catalytic inhibition of Top1 and Top2α confirmed by TopoGEN, an independent topoisomerase laboratory; new patent filed in 2026.</p></div>'+
    '<div><span class="lab kick" data-r>Partner</span><p data-r>Creatv Bio, whose LifeTracDx® liquid biopsy supports Neovia’s upcoming studies with biomarker data.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Phase I(a) <em>to a new mechanism.</em></h2></div><p data-r>The latest announcements from Neovia Oncology.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and enquiries</span>'+
   '<h2 class="big split">Talk to <em>Neovia.</em></h2>'+
   '<p class="sub" data-r>NEV-801 is advancing toward the next phase of development and strategic partnership. Detailed preclinical and clinical data are available under confidentiality.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Neovia '+ARR+'</a><a class="btn" href="#/program">See the program</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Neovia Oncology LLC<br>Newport Beach, California</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18666368423">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Neovia Oncology LLC<br>Newport Beach, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18666368423">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/program">Program</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead compound</span>NEV-801<br>Dual topoisomerase DDC</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Source Sans 3\',Arial,sans-serif;font-weight:600;font-size:70px;letter-spacing:.01em">neovia</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Neovia Oncology</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",technology:"technology",program:"program",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Neovia Oncology — A different way to target both topoisomerases",x:"Home"};
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
