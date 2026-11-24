/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["FlexStep Technology","Multiple short, rigid scaffolds are placed in series with spaces between them. The spaces combine flexibility with support, so the long, twisting arteries of the leg can bend with skeletal movement.",'<path d="M6 22h10v12H6zM23 22h10v12H23zM40 22h10v12H40z"/><path class="a" d="M16 28h7M33 28h7"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["Balloon-expandable","High radial strength allows a more complete expansion of the artery at the index procedure, restoring the vessel to its normal diameter. In EFEMORAL I, mean residual stenosis was 1%.",'<circle cx="28" cy="28" r="19"/><circle class="a" cx="28" cy="28" r="11"/><path d="M28 3v6M28 47v6M3 28h6M47 28h6"/>'],
  ["Drug-eluting, bioresorbable","Long-term sirolimus elution aims to prevent restenosis across all lesion lengths and morphologies. Then the scaffolds dissolve, leaving no permanent implant behind.",'<path d="M8 20h40v16H8z"/><path class="a" d="M14 14v-4M24 14v-6M34 14v-4M44 14v-6"/><circle class="f" cx="18" cy="44" r="2"/><circle class="f" cx="30" cy="47" r="2"/><circle class="f" cx="41" cy="44" r="2"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>EFEMORAL I · three-year results</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>First 40 patients treated with the EVSS for femoropopliteal disease; 85% of lesions in the mid-to-distal superficial femoral artery, 50% total occlusions. Presented by Prof. Andrew Holden at the Charing Cross Symposium, London; Efemoral release, 21 April 2026. The EVSS is an investigational device.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Peripheral artery disease<span class="nomob"> · Medical technology</span> · Los Altos</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Open the leg’s arteries.</span><span class="l"><em>Leave nothing behind.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Efemoral Medical is developing the Efemoral Vascular Scaffold System: short, balloon-expandable, drug-eluting scaffolds that restore blood flow, flex with the leg, and then dissolve.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How it works '+ARR+'</a><a class="btn" href="#/clinical">Clinical results</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Peripheral artery disease affects more than 200 million people. After a balloon, about half of patients need another procedure within six months, and a stent is a permanent metal implant. Efemoral is building a durable treatment <em>that leaves no implant behind.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">97%</span><p class="k">Primary patency at three years in the first 40 patients of the EFEMORAL I study</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1%</span><p class="k">Mean residual stenosis after the procedure, the lowest reported in a femoropopliteal trial</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2024</span><p class="k">FDA Breakthrough Device designation, for below-the-knee arteries in chronic limb-threatening ischemia</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Support the artery, <em>then step away.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Narrowing</span><span>Scaffolding</span><span>Resorption</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Plaque narrows the artery.</h2><p>In peripheral artery disease, plaque builds up in the long arteries of the leg and starves it of blood. Balloons alone are often only temporarily effective, and metal stents struggle in arteries that twist and bend with every step.</p></article>'+
     '<article class="step"><h2>Short scaffolds, spaced to flex.</h2><p>One balloon expands several short, rigid scaffolds in series. Their radial strength restores the vessel to its normal diameter, and the FlexStep spaces between them let the artery bend with the leg.</p></article>'+
     '<article class="step"><h2>Then nothing is left behind.</h2><p>The scaffolds elute sirolimus over the long term to prevent restenosis, then dissolve. The artery keeps its restored lumen, with no permanent implant.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Drug-eluting strength, <em>bioresorbable by design.</em></h2></div><p data-r>The Efemoral Vascular Scaffold System addresses the anatomy and complex biomechanics of athero-occlusive disease in the leg, bringing the drug-eluting, balloon-expandable approach proven in other vascular beds to its long arteries.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From first patient <em>to three-year data.</em></h2></div><p data-r>The EVSS for above-the-knee disease is in the EFEMORAL I first-in-human study, a second device is in development for below the knee, and NIH-funded pre-clinical work studies how it works.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Device builders, <em>vascular specialists.</em></h2></div><p data-r>Founded by a medical device executive and a vascular surgeon from Abbott Vascular, and advised by leading interventional cardiologists and radiologists in peripheral intervention.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Patents</span><p data-r>Ten issued patents, the tenth in December 2023, for an intravascular stent in the treatment of peripheral arterial disease.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Series A1 funding, December 2022, alongside a Phase II SBIR award from the National Heart, Lung, and Blood Institute.</p></div>'+
    '<div><span class="lab kick" data-r>Status</span><p data-r>The Efemoral Vascular Scaffold System is an investigational device, outside the United States only.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones, <em>in their words.</em></h2></div><p data-r>The latest press releases from Efemoral Medical.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and enquiries</span>'+
   '<h2 class="big split">Talk to <em>Efemoral.</em></h2>'+
   '<p class="sub" data-r>For more information on Efemoral Medical and the Efemoral Vascular Scaffold System, the team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Efemoral '+ARR+'</a><a class="btn" href="#/clinical">See the results</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Efemoral Medical, Inc.<br>Los Altos, California</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical study</span><p data-r>EFEMORAL I<br>New Zealand and Australia</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Efemoral Medical, Inc.<br>Los Altos, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Device</span>Efemoral Vascular Scaffold System<br>with FlexStep Technology</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.14em">EFEMORAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Efemoral Medical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",technology:"platform",clinical:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Efemoral Medical — Bioresorbable scaffolds for peripheral artery disease, Los Altos",x:"Home"};
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
