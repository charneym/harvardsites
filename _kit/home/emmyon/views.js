/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Natural compounds","Ursolic acid, from apples and other fruits and herbs, and tomatidine, from tomatoes. Both act directly on skeletal muscle, increasing its quality, strength, mass and exercise capacity, and protect against atrophy in aging, malnutrition, inactivity and chronic disease.",'<circle cx="28" cy="31" r="17"/><path class="a" d="M28 14c0-5 3-8 8-9"/><path d="M20 24c4-3 12-3 16 0"/>'],
  ["Novel compounds","A medicinal chemistry programme led by Dr. John Talley turns the best natural leads into new molecules with improved pharmacologic properties, developed as medicines for muscle atrophy, obesity and type 2 diabetes.",'<path d="M28 8l15 8.5v17L28 42l-15-8.5v-17z"/><path class="a" d="M28 42v8M43 33.5l7 4M13 33.5l-7 4"/><circle class="f" cx="28" cy="25" r="3"/>'],
  ["Mechanisms","The same human signatures point to the molecular mechanisms of atrophy itself, which Emmyon tests genetically in mouse models: work that informs the small molecules and has uncovered several fundamental mechanisms.",'<path d="M10 46c8-16 28-20 36-36"/><path class="a" d="M10 10c8 16 28 20 36 36"/><path d="M17 22h22M17 34h22"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Ursolic acid in cancer cachexia</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Emmyon with collaborators at the University of Florida, American Journal of Physiology–Cell Physiology, June 2026 (doi 10.1152/ajpcell.00159.2026). Preclinical results in mouse models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Skeletal muscle<span class="nomob"> · Small molecules</span> · Rochester, MN</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Molecules that</span><span class="l">keep muscle</span><span class="l"><em>strong.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Emmyon investigates how aging, illness and injury cause muscle atrophy, then uses those data to discover small molecules that improve muscle strength, mass and metabolism: for food, for animal health, and as medicines for muscle atrophy, obesity and type 2 diabetes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How we discover '+ARR+'</a><a class="btn" href="#/applications">Our programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Muscle atrophy affects about 60 million people in the US alone. It brings weakness, falls and frailty, slows recovery from illness, and still has no pharmacologic therapy. Emmyon is finding the molecules that <em>protect muscle.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">60M</span><span class="k">People in the US affected by skeletal muscle atrophy, from aging, inactivity, chronic illness and some medications</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">27</span><span class="k">Granted patents on ursolic acid, tomatidine and other small molecules, with many more pending in major markets</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.02M</span><span class="k">NIDDK SBIR Phase II award, 2025, to develop novel therapeutics for obesity and type 2 diabetes</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we discover</span><h2 class="d3">Start with human muscle, <em>find the opposite.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signature</span><span>Search</span><span>Proof</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Read the atrophy in human muscle.</h2><p>Emmyon starts with biopsies from people with healthy muscle and with muscle atrophy, and determines the mRNA expression signature of atrophy: every gene expression change that comes with it.</p></article>'+
     '<article class="step"><h2>Search for the mirror image.</h2><p>Then it searches for small molecules whose own signatures are opposite to the atrophy signature. That unbiased screen found ursolic acid, from apples, and then tomatidine, from tomatoes.</p></article>'+
     '<article class="step"><h2>Prove it in muscle.</h2><p>Candidates go into mouse models of muscle atrophy. Those with outstanding safety and efficacy move toward products for people and animals, and lead a medicinal chemistry programme for new medicines.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Systems biology, <em>then chemistry.</em></h2></div><p data-r>One discovery platform, three kinds of result: natural compounds ready for nutrition, novel compounds for medicine, and new understanding of how muscle wastes away.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the pet aisle <em>to the clinic.</em></h2></div><p data-r>Ursolic acid and tomatidine act on mechanisms that evolution has conserved, so the same discoveries serve human health and animal health. Emmyon commercialises them through licensing and R&amp;D partnerships, from startups to Fortune 500 companies.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Muscle biology and <em>proven chemistry.</em></h2></div><p data-r>Emmyon is led by physician-scientists at Mayo Clinic and a medicinal chemist behind eight FDA-approved drugs, advised by leaders in muscle, metabolism and cancer cachexia.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Patents</span><p data-r>Granted ursolic acid coverage to 2034 in the US and 2031 elsewhere; tomatidine to 2033 in the US and 2032 elsewhere.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR and STTR awards from the National Institutes of Health: NIA, NIAMS, NCI and NIDDK.</p></div>'+
    '<div><span class="lab kick" data-r>Partners</span><p data-r>Virbac, a global leader in animal health, for URSOLYX™; academic collaborators at the University of Florida.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, products <em>and awards.</em></h2></div><p data-r>The latest from Emmyon and its partners.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Licensing and partnerships</span>'+
   '<h2 class="big split">Talk to <em>Emmyon.</em></h2>'+
   '<p class="sub" data-r>Pharmaceuticals, human nutrition, pets or livestock: Emmyon is open to further commercialisation partnerships and would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Emmyon '+ARR+'</a><a class="btn" href="#/applications">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Emmyon, Inc.<br>Rochester, MN 55902</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Rochester, MN</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Natural compounds</span>Ursolic acid · Tomatidine<br>27 granted patents</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:64px;letter-spacing:-.03em">Emmyon</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Emmyon, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Emmyon — Small molecules for skeletal muscle and metabolic health, Rochester, MN",x:"Home"};
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
