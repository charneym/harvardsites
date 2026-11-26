/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll)
   v7 (client round 7): the v5/v6 gel surface behind a wide, type-led hero with LiMax's three pillars as its bottom band; then
   dark and bone grounds alternate: vision (bone), the seal-heal-deliver story (dark), technology as metric tiles (bone),
   programs as a pipeline (dark), team as a photo grid (bone), news (dark), contact (bone). Content is never hidden at rest:
   reveals only enhance (see the failsafe in site.js). ================= */
function tiles(){return '<div class="ptile-g">'+PROPS.map(function(c){
  return '<div class="ptile"><span class="pm'+(/^[0-9&]/.test(c[0])?'':' word')+'">'+c[0]+(c[1]?'<small>'+esc(c[1])+'</small>':'')+'</span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
function pipe(){return '<div class="pipe">'+
  '<div class="pipe-h" aria-hidden="true"><span class="lab">Program</span><span class="lab">About</span><span class="pipe-axis">'+STAGES.map(function(s){return '<span class="lab">'+s+'</span>'}).join("")+'</span></div>'+
  PROG.map(function(c,i){var pct=(c[3]/STAGES.length*100).toFixed(1);
  return '<article class="prow"><div class="pr-id"><span class="lab pr-n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(c[0])+'</h3><span class="pr-ind">'+esc(c[1])+'</span></div>'+
   '<p class="pr-d">'+esc(c[4])+'</p>'+
   '<div class="pr-st"><div class="pr-bar" role="img" aria-label="Stage: '+esc(STAGES[c[3]-1])+'"><i style="width:'+pct+'%"></i>'+STAGES.map(function(){return '<b></b>'}).join("")+'</div>'+
   '<div class="pr-meta"><span class="pr-stl">'+esc(c[2])+'</span><a class="lab ul lk2" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+' '+ARR+'</a></div></div></article>'}).join("")+'</div>'}
function team(){return '<div class="tg4">'+TEAM.map(function(p){
  return (function(){var m=p[0].split(/, (.+)/);return '<figure class="tm4"><div class="tm4-ph"><img src="'+p[3]+'" alt="'+esc(m[0])+'" width="480" height="600" loading="lazy" decoding="async"></div><figcaption><h3>'+esc(m[0])+'</h3><span class="lab">'+(m[1]?esc(m[1])+' · ':'')+esc(p[1])+'</span>'})()+(p[2]?'<p>'+esc(p[2])+'</p>':'')+'</figcaption></figure>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={seal:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 6.5C24.2 12.8 28.2 17 28.2 22.6a8.2 8.2 0 0 1-16.4 0C11.8 17 15.8 12.8 20 6.5Z"/><path d="M16.2 23.4a3.9 3.9 0 0 0 3.2 3.7"/></svg>',
 heal:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="4.2"/><circle cx="20" cy="9.6" r="3.1"/><circle cx="29" cy="14.8" r="3.1"/><circle cx="29" cy="25.2" r="3.1"/><circle cx="20" cy="30.4" r="3.1"/><circle cx="11" cy="25.2" r="3.1"/><circle cx="11" cy="14.8" r="3.1"/></svg>',
 drug:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="6" y="15" width="28" height="10" rx="5" transform="rotate(-45 20 20)"/><path d="M16.5 16.5l7 7"/></svg>'};
/* the brand gradient across a phrase as solid per-letter colours (teal -> cyan -> blue -> violet), so it reads and measures as
   real text colour (a gradient clipped to text reads as transparent to contrast checks and some renderers) */
function gtx(t){var S=[[47,181,165],[68,163,197],[58,123,213],[131,94,163],[138,79,214]],n=t.length-1;
  function c(u){var k=Math.min(S.length-2,Math.floor(u*(S.length-1))),f=u*(S.length-1)-k,a=S[k],b=S[k+1];return "#"+[0,1,2].map(function(i){return ("0"+Math.round(a[i]+(b[i]-a[i])*f).toString(16)).slice(-2)}).join("")}
  return '<span class="gt">'+t.split(" ").map(function(w,wi,ws){var off=ws.slice(0,wi).join(" ").length+(wi?1:0);
    return '<span class="gw">'+w.split("").map(function(ch,ci){return '<i style="color:'+c((off+ci)/n)+'">'+ch+'</i>'}).join("")+'</span>'}).join(" ")+'</span>'}
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Hydrogel technologies<span class="nomob"> · Boston, Massachusetts</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1">Engineering the<span class="bm"></span> future<span class="bd"></span> of<span class="bm"></span> '+gtx('hydrogel therapeutics.')+'</h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>Tough, slug-inspired hydrogels that bond to wet, moving tissue in seconds, inside or outside the body.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What our hydrogels do">'+
    '<li class="p1" data-r><span class="pic">'+ICO.seal+'</span><div><span class="lab">Seal leaks</span><p>HemoMax, our sealant, stops bleeding on wet, moving tissue.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.heal+'</span><div><span class="lab">Heal tissues</span><p>Bioadhesives that replace staples and sutures and protect the wound.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.drug+'</span><div><span class="lab">Deliver drugs</span><p>Local release that keeps a drug at the site it treats.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Vision</span>'+
   '<h2 class="txt" id="mani">We are changing the way the world thinks about biomaterials. Nearly 30% of surgical procedures still end in bleeding-related complications; <em>our hydrogels hold to wet, dynamic tissue where sealants and <span class="nw">sutures can’t.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">17+</span><p class="k">Publications in peer-reviewed research journals</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6,000+</span><p class="k">Citations of the science behind our hydrogels</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">Media outlets, among them Forbes, BBC, NPR and The Washington Post</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">What our hydrogels do</span><h2 class="d3"><span class="nw">One gel, <em>three jobs</em></span> <span class="nw"><em>in the wound.</em></span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Seal</span><span>Heal</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Seal the leak.</h2><p>Applied to a bleeding wound, the gel bonds to wet tissue within seconds, unaffected by blood or by the movement of vessels and organs, and the bleeding stops.</p></article>'+
     '<article class="step"><h2>Heal the tissue.</h2><p>In place of staples and sutures, the gel holds the wound edges together as a moist, protective barrier while new tissue knits across the gap beneath it.</p></article>'+
     '<article class="step"><h2>Deliver the drug.</h2><p>Loaded into the network, a drug is released locally into the tissue it treats, staying at the target site instead of circulating through the body.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A new way to design materials, <em>inspired by nature.</em></h2></div><p data-r>Our adhesives mimic the sticky, flexible mucus the Dusky Arion slug secretes when frightened, without using slugs. A dual polymer network stays tough and highly stretchable under stress while bonding to wet tissue within seconds.</p></div>'+
   tiles()+
  '</div></section>'+

  '<section class="sec dark" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Built for real, <em>unmet needs in surgery.</em></h2></div><p data-r>From postpartum hemorrhage, the leading cause of maternal death worldwide, to vascular, dural and tendon repair, with support from the NIH.</p></div>'+
   pipe()+
   '<div class="cred">'+
    '<div class="bk"><span class="lab kick" data-r>Funded by</span><p class="cr" data-r>'+lst(FUND)+'</p></div>'+
    '<div class="bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r>'+lst(AWARDS)+'</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded at the <em>Wyss Institute at Harvard.</em></h2></div><p data-r>A spinout of the Wyss Institute, founded in 2021 by the inventors of the technology, with scientists, business and regulatory advisors, and surgeons on our clinical advisory board.</p></div>'+
   team()+
   '<div class="cred">'+
    '<div class="bk"><span class="lab kick" data-r>Commercial and strategic advisors</span><p class="cr" data-r>'+lst(ADV)+'</p></div>'+
    '<div class="bk"><span class="lab kick" data-r>Clinical advisors</span><p class="cr" data-r>'+lst(CLIN)+'</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the bench <em>toward the clinic.</em></h2></div><p data-r>NIH support for HemoMax and HemoMax-PPH, new science in Nature Communications, and recognition from Harvard’s innovation challenge.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
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
