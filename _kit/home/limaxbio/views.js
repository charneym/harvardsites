/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function props(){return '<ul class="pfr">'+PROPS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function progs(){return '<ul class="pfr pgr">'+PROG.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership and research</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={seal:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 7C24 13 28 17 28 22.5a8 8 0 0 1-16 0C12 17 16 13 20 7Z"/><path d="M11 33.5h18"/></svg>',
 heal:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="4.2"/><circle cx="20" cy="9.5" r="3.2"/><circle cx="29.1" cy="14.8" r="3.2"/><circle cx="29.1" cy="25.2" r="3.2"/><circle cx="20" cy="30.5" r="3.2"/><circle cx="10.9" cy="25.2" r="3.2"/><circle cx="10.9" cy="14.8" r="3.2"/></svg>',
 drug:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="6" y="15" width="28" height="10" rx="5" transform="rotate(-45 20 20)"/><path d="M16.5 16.5l7 7"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hydrogel technologies<span class="nomob"> · Boston, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Engineering the</span><span class="l">future of hydrogel</span><span class="l"><em>therapeutics.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>Tough, slug-inspired hydrogels that bond to wet, moving tissue in seconds, inside or outside the body: to seal leaks, heal tissues and deliver drugs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>Hydrogel network, rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Vision</span>'+
   '<h2 class="txt" id="mani">We are changing the way the world thinks about biomaterials. Nearly 30% of surgical procedures still end in bleeding-related complications; <em>our hydrogels hold to wet, dynamic tissue where sealants and sutures can’t.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2,000<small>J/m²</small></span><p class="k">Tough adhesion, 100 to 1,000 times that of sealants on the market</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20×</span><p class="k">Stretch, so the gel moves with the tissue it is bonded to</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;30<small>s</small></span><p class="k">To adhesion, and to stop a haemorrhage</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.seal+'</span><span class="lab kick" data-r>Seal leaks</span><p data-r>HemoMax, our sealant, is built to prevent bleeding complications with unprecedented toughness and wet adhesion.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.heal+'</span><span class="lab kick" data-r>Heal tissues</span><p data-r>Bioadhesives that replace staples and sutures, with a barrier that improves the healing interface, hydrates and protects against infection.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.drug+'</span><span class="lab kick" data-r>Deliver drugs</span><p data-r>Local delivery that keeps a drug at its target, minimises systemic side effects and removes the need for repeated doses.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">What our hydrogels do</span><h2 class="d3">One gel, <em>three jobs in the wound.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Seal</span><span>Heal</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Seal the leak.</h2><p>Applied to a bleeding wound, the gel bonds to wet tissue within seconds, unaffected by blood or by the movement of vessels and organs, and the bleeding stops.</p></article>'+
     '<article class="step"><h2>Heal the tissue.</h2><p>In place of staples and sutures, the gel holds the wound edges together as a moist, protective barrier while new tissue knits across the gap beneath it.</p></article>'+
     '<article class="step"><h2>Deliver the drug.</h2><p>Loaded into the network, a drug is released locally into the tissue it treats, staying at the target site instead of circulating through the body.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A new way to design materials, <em>inspired by nature.</em></h2></div><p data-r>Our adhesives mimic the sticky, flexible mucus the Dusky Arion slug secretes when frightened, without using slugs. A dual polymer network stays tough and highly stretchable under stress while bonding to wet tissue within seconds, through physical entanglement and electrostatic interactions instead of toxic chemical linkers.</p></div>'+
   props()+
  '</div></section>'+

  '<section class="sec dark" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Built for real, <em>unmet needs in surgery.</em></h2></div><p data-r>From postpartum hemorrhage, the leading cause of maternal death worldwide, to vascular, dural and tendon repair: programs backed by the NIH and by more than 17 peer-reviewed publications with over 6,000 citations.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r>'+lst(FUND)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r>'+lst(AWARDS)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded at the <em>Wyss Institute at Harvard.</em></h2></div><p data-r>A spinout of the Wyss Institute, founded in 2021 by the inventors of the technology, with scientists, business and regulatory advisors, and surgeons on our clinical advisory board.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Commercial and strategic advisors</span><p class="cr" data-r>'+lst(ADV)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Clinical advisors</span><p class="cr" data-r>'+lst(CLIN)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the bench <em>toward the clinic.</em></h2></div><p data-r>NIH support for HemoMax and HemoMax-PPH, new science in Nature Communications, and recognition from Harvard’s innovation challenge.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
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
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}if(BOK[r.sec]&&boOpen(r.sec))return;secGo(r.sec,true)},300)})()})();
