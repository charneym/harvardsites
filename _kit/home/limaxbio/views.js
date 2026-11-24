/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll)
   v5 (client round 5): type leads. A full-bleed living gel surface behind a large two-line headline, LiMax's own three pillars
   along the hero's foot, then an editorial rhythm on a 12-column grid: one statement line, a split (copy + a macro of the same
   gel), a numbers band, programs as large cards, team, news and the contact CTA. ================= */
function progs(){return '<div class="prg">'+PROG.map(function(c,i){
  return '<article class="pcard" data-r><div class="pcard-top"><span class="lab">'+String(i+1).padStart(2,"0")+'</span><span class="lab">'+esc(c[1])+'</span></div>'+
   '<h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk2" href="'+c[3]+'" target="_blank" rel="noopener">'+(/reporter/.test(c[3])?'NIH RePORTER':'Publications')+' '+ARR+'</a></article>'}).join("")+'</div>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership and research</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={seal:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 6.5C24.2 12.8 28.2 17 28.2 22.6a8.2 8.2 0 0 1-16.4 0C11.8 17 15.8 12.8 20 6.5Z"/><path d="M16.2 23.4a3.9 3.9 0 0 0 3.2 3.7"/></svg>',
 heal:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="4.2"/><circle cx="20" cy="9.6" r="3.1"/><circle cx="29" cy="14.8" r="3.1"/><circle cx="29" cy="25.2" r="3.1"/><circle cx="20" cy="30.4" r="3.1"/><circle cx="11" cy="25.2" r="3.1"/><circle cx="11" cy="14.8" r="3.1"/></svg>',
 drug:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="6" y="15" width="28" height="10" rx="5" transform="rotate(-45 20 20)"/><path d="M16.5 16.5l7 7"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Hydrogel technologies<span class="nomob"> · Boston, Massachusetts</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Engineering the future</span><span class="l">of <span class="gt">hydrogel therapeutics.</span></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hero-foot"><p class="s" data-r>Tough, slug-inspired hydrogels that bond to wet, moving tissue in seconds.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What our hydrogels do">'+
    '<li class="p1" data-r><span class="pic">'+ICO.seal+'</span><div><span class="lab">Seal leaks</span><p>Tough sealants that stop bleeding on wet, moving tissue.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.heal+'</span><div><span class="lab">Heal tissues</span><p>Bioadhesives that replace staples and sutures and protect the wound.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.drug+'</span><div><span class="lab">Deliver drugs</span><p>Local release that keeps a drug at the site it treats.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec dark stmt" id="about" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Inspired by nature</span>'+
   '<h2 class="big2 split">Modelled on the mucus of the Dusky Arion slug, <em>built to hold to wet, moving tissue.</em></h2>'+
  '</div></section>'+

  '<section class="sec dark2 tech" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="sp-copy">'+
    '<span class="lab kick" data-r>Technology</span>'+
    '<h2 class="d2 split">A dual polymer network, <em>tough and stretchable.</em></h2>'+
    '<p class="sp-lede" data-r>Our hydrogels stay tough and highly stretchable under mechanical stress while bonding to wet tissue within seconds. They rely on physical entanglement and electrostatic interactions, instead of the toxic chemical linkers used in many existing adhesives.</p>'+
    '<ul class="feat">'+
     '<li data-r><span class="lab">Wet adhesion</span><p>A durable bond in spite of blood and other body fluids.</p></li>'+
     '<li data-r><span class="lab">Inside and outside the body</span><p>Adheres to wet, dynamically moving surfaces: vessels, organs, skin.</p></li>'+
     '<li data-r><span class="lab">Biocompatible</span><p>Promotes healing without triggering adverse reactions.</p></li>'+
    '</ul>'+
   '</div>'+
   '<figure class="sp-media" data-r><canvas class="gelp" aria-hidden="true"></canvas></figure>'+
  '</div></section>'+

  '<section class="sec dark numb" id="numbers" data-theme="dark"><div class="wrap">'+
   '<div class="nb">'+
    '<div class="n" data-r><span class="v">2,000<small>J/m²</small></span><p class="k">Tough adhesion, 100 to 1,000 times that of sealants on the market</p></div>'+
    '<div class="n" data-r><span class="v">20×</span><p class="k">Stretch, so the gel moves with the tissue it is bonded to</p></div>'+
    '<div class="n" data-r><span class="v">&lt;30<small>s</small></span><p class="k">To adhesion, and to stop a haemorrhage</p></div>'+
    '<div class="n" data-r><span class="v">6,000+</span><p class="k">Citations across more than 17 peer-reviewed publications</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Built for real, <em>unmet needs in surgery.</em></h2></div><p data-r>From postpartum hemorrhage, the leading cause of maternal death worldwide, to vascular, dural and tendon repair, with support from the NIH.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r>'+lst(FUND)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r>'+lst(AWARDS)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded at the <em>Wyss Institute at Harvard.</em></h2></div><p data-r>A spinout of the Wyss Institute, founded in 2021 by the inventors of the technology, with scientists, business and regulatory advisors, and surgeons on our clinical advisory board.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Commercial and strategic advisors</span><p class="cr" data-r>'+lst(ADV)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Clinical advisors</span><p class="cr" data-r>'+lst(CLIN)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the bench <em>toward the clinic.</em></h2></div><p data-r>NIH support for HemoMax and HemoMax-PPH, new science in Nature Communications, and recognition from Harvard’s innovation challenge.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Let’s seal, heal <em>and deliver, together.</em></h2>'+
   '<p class="sub" data-r>Write to us about our hydrogel adhesives, partnerships or careers at LiMax.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to LiMax '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>LiMax Biosciences<br>Boston, MA 02115</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origin</span><p data-r>A spinout of the Wyss Institute at Harvard University</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>LiMax Biosciences<br>Boston, MA 02115</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Hydrogel adhesives to seal leaks,<br>heal tissues and deliver drugs</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="68" text-anchor="middle" style="font-family:\'Krona One\',system-ui,sans-serif;font-weight:400;font-size:84px;letter-spacing:.04em"><tspan fill="#f4f6fb">LIMAX</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 LiMax Biosciences</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/technology,
   #/programs, #/team or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={technology:1,programs:1,team:1,news:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",technology:"technology",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"LiMax Biosciences — engineering the future of hydrogel therapeutics",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec&&BOK[r.sec]){try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/";boOpen(r.sec);return}
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>200)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}if(BOK[r.sec]&&boOpen(r.sec))return;secGo(r.sec,true)},300)})()})();
