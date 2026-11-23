/* ================= VIEWS (home only: Technology / Clinical / Investors / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(A,cls){return '<ul class="pfr'+(cls?' '+cls:'')+'">'+A.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'')+'</li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={drop:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 6C24.5 12.5 28.5 17 28.5 22.5a8.5 8.5 0 0 1-17 0C11.5 17 15.5 12.5 20 6Z"/><path d="M8 34h24"/></svg>',
 cure:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5v6M11 8.5l3 5M29 8.5l-3 5"/><path d="M8 33h24"/><path d="M13 33c0-5 3-8 7-8s7 3 7 8"/></svg>',
 grow:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 31h28"/><path d="M6 25h9M25 25h9"/><path d="M15 25c1.5 2.5 3.5 3.5 5 3.5s3.5-1 5-3.5"/><circle cx="20" cy="16" r="3"/><circle cx="13" cy="19.5" r="2"/><circle cx="27" cy="19.5" r="2"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Regenerative medicine<span class="nomob"> · Herzliya, Israel</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Knee cartilage,</span><span class="l">repaired with</span><span class="l"><em>one hydrogel.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>GelrinC is a cell-free, off-the-shelf implant: applied as a liquid into a cartilage lesion, cured in place with UV light, then resorbed as new cartilage grows in.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>GelrinC filling a cartilage lesion on the knee end of the thighbone, rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our vision</span>'+
   '<h2 class="txt" id="mani">Knee cartilage does not usually heal by itself. <em>We develop tissue repair therapies that offer patients shortened recovery times and improved quality of life.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~10<small>min</small></span><p class="k">A single, simple procedure that fits into existing arthroscopic workflows</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~2<small>weeks</small></span><p class="k">Average recovery in the company’s experience, versus about six for cell-based therapies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">470K</span><p class="k">U.S. knee arthroscopies a year that involve cartilage damage</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.drop+'</span><span class="lab kick" data-r>Off the shelf</span><p data-r>No cell harvesting, no lab expansion, no second surgery: a ready-to-use hydrogel, where current cell-based procedures need two operations.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.cure+'</span><span class="lab kick" data-r>Cured in place</span><p data-r>Applied as a liquid, GelrinC fills the whole lesion, then a UV beam cures it into a soft, rubbery implant that covers the entire wound.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.grow+'</span><span class="lab kick" data-r>Native cartilage</span><p data-r>Unlike microfracture, which tends to produce fibrous cartilage, treatment with GelrinC has been shown to grow hyaline cartilage, the patient’s own.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The GelrinC procedure</span><h2 class="d3">From lesion <em>to new cartilage.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fill</span><span>Cure</span><span>Resorb</span><span>Repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Fill the lesion.</h2><p>A delivery membrane covers the cartilage lesion and GelrinC is introduced with a syringe, as a liquid that fills the defect completely.</p></article>'+
     '<article class="step"><h2>Cure it in place.</h2><p>Once the lesion is filled, a UV beam cures GelrinC into a soft, rubbery implant, flush with the surrounding cartilage.</p></article>'+
     '<article class="step"><h2>Recede, as cartilage grows.</h2><p>As the implant resorbs from its surface, cells at the rim of the lesion form aggregates and new cartilage fills the space it leaves behind.</p></article>'+
     '<article class="step"><h2>New cartilage.</h2><p>Within six to nine months the implant is fully resorbed, and new cartilage covers the treated lesion.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Gelrin, a hydrogel <em>that steps aside for tissue.</em></h2></div><p data-r>A patented family of hydrogels originally developed at the Technion – Israel Institute of Technology by Prof. Dror Seliktar. Its receding body stimulates the body’s natural healing, guiding the migration and organisation of the cells involved in repair, gradually, over time.</p></div>'+
   rows(PROPS)+
  '</div></section>'+

  '<section class="sec dark" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">Toward the first off-the-shelf <em>cartilage repair in the U.S.</em></h2></div><p data-r>About 100 GelrinC procedures to date. CE marked in Europe, and in a pivotal trial for FDA approval, where no comparable ready-to-use product supported by prospective clinical data exists today.</p></div>'+
   rows(PROG,'pgr')+
  '</div></section>'+

  '<section class="sec dark2" id="investors" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investors</span><h2 class="d2 split">Listed on <em>NYSE American: RGNT.</em></h2></div><p data-r>Upcoming catalysts: completing enrollment in the U.S. pivotal trial by about the end of 2026, commercialisation in Europe, and starting the FDA approval submission process by the end of 2027.</p></div>'+
   rows(INV)+
   '<div class="bk"><span class="lab kick" data-r>Leadership and science</span><p class="cr" data-r>'+lst(LEAD)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Investor relations</span><p class="cr" data-r><a class="ul" href="'+IR+'" target="_blank" rel="noopener">investors.regentis.co.il</a><i aria-hidden="true">·</i><span>+972 9 960 1917</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the pivotal trial <em>to European clinics.</em></h2></div><p data-r>Enrollment progress in the U.S., a new manufacturing process approved in Europe, surgeon interest at ICRS, and a first distribution agreement in Israel.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Let’s restore <em>the knee, together.</em></h2>'+
   '<p class="sub" data-r>Write to us about GelrinC, clinical partnerships, distribution in Europe or investing in Regentis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Regentis '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>60 Medinat Hayehudim St., Entrance C<br>Herzliya Pituach 4676652, Israel</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r>+972 9 960 1917</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>60 Medinat Hayehudim St.<br>Herzliya Pituach, Israel</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/investors">Investors</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>+972 9 960 1917</div>'+
   '<div class="c"><span class="lab">Focus</span>GelrinC, an off-the-shelf hydrogel<br>for knee cartilage repair</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Barlow\',system-ui,sans-serif;font-weight:300;font-size:80px;letter-spacing:0"><tspan fill="#f1f5f4">Regentis</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Regentis Biomaterials Ltd.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",clinical:"clinical",investors:"investors",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Regentis Biomaterials — GelrinC, off-the-shelf knee cartilage repair",x:"Home"};
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
