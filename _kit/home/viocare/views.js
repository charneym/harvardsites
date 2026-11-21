/* ================= VIEWS (home only: Products / Research / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nutrition assessment software<span class="nomob"> · Princeton, New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Ninety days of eating,</span><span class="l"><em>measured in</em></span><span class="l"><em>twenty minutes.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Viocare builds VioScreen and ProNutra, validated dietary assessment software developed with NIH funding, for nutrition researchers, clinicians and wellness programmes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How VioScreen works '+ARR+'</a><a class="btn" href="#/contact">Request a demo</a></div></div>'+
   '<p class="lab hcap" data-r>Squash, spinach, quinoa, chickpeas and avocado: the everyday detail a food frequency questionnaire captures.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1993</span>'+
   '<h2 class="txt" id="mani">Diet interviews are slow and paper questionnaires come back incomplete. VioScreen asks with pictures and returns <em>a validated nutrient analysis in real time.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$12M+</span><p class="k">In NIH-funded research, through more than 25 grants and contracts</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20 min</span><p class="k">For the validated equivalent of 90 days of nutrition tracking</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">Research facilities that have run feeding studies on ProNutra</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>English and Spanish</span><p data-r>Subjects answer on any computer or tablet, in either language, and don’t need a high reading level to finish.</p></div>'+
    '<div><span class="lab kick" data-r>Built on the NCC database</span><p data-r>Analysis draws on the Food and Nutrient Database of the University of Minnesota’s Nutrition Coordinating Center.</p></div>'+
    '<div><span class="lab kick" data-r>Trusted in trials</span><p data-r>VioScreen has been the dietary intake reporting method to the FDA for a worldwide type 1 diabetes Phase III trial.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How VioScreen works</span><h2 class="d3">A diet history, <em>asked in pictures.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Questions</span><span>Portions</span><span>Analysis</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>One food at a time.</h2><p>A graphical, self-administered food frequency questionnaire asks how often each food is eaten. Branching logic updates the questions from earlier answers, and memory probes prompt for more detail.</p></article>'+
     '<article class="step"><h2>Choose the portion you ate.</h2><p>Instead of estimating ounces or cups, subjects pick the image that shows how much food was on the plate, which greatly improves the quality of portion-size reporting.</p></article>'+
     '<article class="step"><h2>Results in real time.</h2><p>Answers are analysed as soon as the questionnaire ends: nutrients, food groups, eating patterns and the Healthy Eating Index, as reports and exportable data sets.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">From the study <em>to the clinic.</em></h2></div><p data-r>The same validated assessment engine runs research studies, clinical care and wellness programmes, and powers partners’ products under their own name.</p></div>'+
   rows(PROD)+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Research is <em>in our DNA.</em></h2></div><p data-r>Viocare works with government, academic and corporate partners on NIH-funded projects that extend dietary assessment to children, diabetes care and food security.</p></div>'+
   rows(RES)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineering <em>meets nutrition.</em></h2></div><p data-r>Viocare is a privately held technology company led by its founder, a Bell Labs-trained engineer, and a chief executive with three decades in healthcare.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>from Viocare.</em></h2></div><p data-r>Grants, partnerships and recognition for VioScreen and the research behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, clinicians and partners</span>'+
   '<h2 class="big split">Let’s measure <em>what matters.</em></h2>'+
   '<p class="sub" data-r>Planning a study with dietary endpoints, a nutrition service or an NIH grant that includes diet? Ask for a demo, or write to us about collaborating.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">How VioScreen works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Mail</span><p data-r><span>PO Box 327</span><br><span>Princeton, NJ 08542</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16094974600">609.497.4600</a><br><span>Fax 609.497.0660</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Princeton,<br>New Jersey</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16094974600">609.497.4600</a></div>'+
   '<div class="c"><span class="lab">Products</span>VioScreen Research<br>VioScreen Clinical<br>ProNutra</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:500;font-size:64px;letter-spacing:.3em"><tspan fill="#a9d13a">VIO</tspan><tspan fill="#f2f5ef">CARE</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Viocare, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Viocare — validated dietary assessment software, Princeton, NJ",x:"Home"};
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
