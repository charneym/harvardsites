/* ================= VIEWS (home only: Technology / Product / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function props(){return '<ul class="pfr">'+PROPS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function progs(){return '<ul class="pfr pgr">'+PROG.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership and research</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={slide:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="4" y="13" width="32" height="14"/><path d="M11 13v14"/><path d="M19 17.5c3-1.6 7-1.4 9.5.6c1.4 1.6.4 4-2.4 4.6c-2.6.6-5.6.3-7.4-1c-1.3-1-1.3-3.1.3-4.2Z"/></svg>',
 risk:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 33.5h28"/><path d="M10 33.5v-8"/><path d="M20 33.5v-15"/><path d="M30 33.5v-24"/></svg>',
 flow:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="5" y="8" width="12" height="9"/><rect x="23" y="23" width="12" height="9"/><path d="M17 12.5h6.5a4 4 0 0 1 4 4V23"/><path d="M24.5 20l3 3 3-3"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>AI digital pathology<span class="nomob"> · Oslo, Norway</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Personalized cancer</span><span class="l">treatment, delivered</span><span class="l"><em>with AI.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>Histotype Px® Colorectal reads the routine H&amp;E slide of a resected tumour and predicts the patient’s outcome, to show who will benefit from adjuvant chemotherapy and who will do better without.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/product">Histotype Px® '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>An H&amp;E-stained section of colorectal adenocarcinoma on a glass slide, rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The need</span>'+
   '<h2 class="txt" id="mani">Surgery is the standard of care in stage II and III colorectal cancer, often followed by chemotherapy in a one-size-fits-all approach. Most patients are cured by surgery alone; <em>we built a biomarker to tell them apart.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4,500</span><p class="k">Patient samples used to train and test the algorithm</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90<small>M</small></span><p class="k">Image tiles analysed in its development</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">9.47</span><p class="k">Hazard ratio, high vs. low risk, in the QUASAR 2 trial (The Lancet Oncology)</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.slide+'</span><span class="lab kick" data-r>Routine tissue</span><p data-r>Works from routine H&amp;E-stained histology slides, scanned for digital pathology.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.risk+'</span><span class="lab kick" data-r>Distinct risk groups</span><p data-r>Low, intermediate and high risk, to escalate or de-escalate adjuvant chemotherapy for each patient.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.flow+'</span><span class="lab kick" data-r>Inside the workflow</span><p data-r>Available on leading digital pathology platforms, so pathology teams use it where they already work.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Histotype Px works</span><h2 class="d3">From one slide <em>to one decision.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Slide</span><span>Tiles</span><span>Risk</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A routine slide.</h2><p>After surgery, the tumour is sectioned, stained with haematoxylin and eosin and scanned, exactly as in every pathology lab today.</p></article>'+
     '<article class="step"><h2>Read tile by tile.</h2><p>A deep neural network, trained on 4,500 patients and 90 million image tiles, analyses the whole section and scores what it sees.</p></article>'+
     '<article class="step"><h2>A risk group.</h2><p>Each patient falls into a distinct low, intermediate or high-risk group, to guide whether to give adjuvant chemotherapy.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Deep learning on <em>routine histology.</em></h2></div><p data-r>DoMore Diagnostics is a pioneer in using artificial intelligence to raise the prognostic and predictive value of cancer tissue biopsies. Based on extensive research at top universities, our fully automated histotyping provides objective, precise prognostic information, and can make cancer drug development more effective as well.</p></div>'+
   props()+
  '</div></section>'+

  '<section class="sec dark" id="product" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Product</span><h2 class="d2 split">Histotype Px® <em>Colorectal.</em></h2></div><p data-r>Colorectal cancer is the third most common and second most deadly cancer worldwide. In stage II and III, adjuvant chemotherapy gives no benefit to most patients: 96–98% in stage II and 80% in stage III. Histotype Px identifies who is likely to benefit, and who will do better without.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Available on</span><p class="cr" data-r>'+lst(PLATF)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Clinical collaborations</span><p class="cr" data-r>'+lst(COLLAB)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicians, scientists <em>and builders.</em></h2></div><p data-r>DoMore grew from research at Oslo University Hospital, Oxford University and University College London: a Lighthouse project of the Research Council of Norway, led by the late Prof. Håvard Danielsen, to reduce over- and undertreatment in cancer.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Board of directors</span><p class="cr" data-r>'+lst(BOARD)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Scientific advisory board</span><p class="cr" data-r>'+lst(SAB)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Evidence, partners <em>and patents.</em></h2></div><p data-r>New clinical data at ESMO and ASCO GI, validation studies across Europe and the US, and a growing patent estate. The company has also received funding from the European Innovation Council (EIC) Accelerator.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, partners and investors</span>'+
   '<h2 class="big split">Let’s personalize <em>cancer treatment, together.</em></h2>'+
   '<p class="sub" data-r>DoMore Diagnostics is open to both academic and commercial collaborations. Tell us about your project or goals and we’ll take the conversation from there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to DoMore '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Visiting address</span><p data-r>DoMore Diagnostics AS<br>Tordenskiolds gate 2<br>0160 Oslo, Norway</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></p></div>'+
    '<div><span class="lab" data-r>Postal address</span><p data-r>Ullernchausséen 64<br>0379 Oslo, Norway<br>Org. 925 769 681</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>Tordenskiolds gate 2<br>0160 Oslo, Norway</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/product">Product</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>AI digital biomarkers for<br>personalized cancer treatment</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="68" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:400;font-size:88px;letter-spacing:-.02em"><tspan fill="#f6f2fb">DoMore</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DoMore Diagnostics AS</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",product:"product",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DoMore Diagnostics — personalized cancer treatment, delivered with AI",x:"Home"};
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
