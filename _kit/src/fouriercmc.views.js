/* ================= VIEWS (home only: Technology / Applications / Team / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Hero: Fourier's own photograph of a thermoformed ceramic sheet on a circuit board, right of a
   type-led headline; the three properties as its bottom band; then dark and bone grounds alternate: statement + stats (bone), the
   thermoforming story (dark), technology tiles (bone), applications (dark), team masthead (bone), news (dark), contact (bone).
   Content is never hidden at rest (DW): reveals only enhance (see the failsafe in site.js). ================= */
function tiles(){return '<div class="ptile-g">'+PROPS.map(function(c){
  return '<div class="ptile"><span class="pm word">'+esc(c[0])+(c[1]?'<small>'+esc(c[1])+'</small>':'')+'</span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
function apps(){return '<div class="fxa">'+APPS.map(function(c,i){
  return '<article class="fxr"><span class="lab fxn">'+String(i+1).padStart(2,"0")+'</span><div class="fxid"><h3>'+esc(c[0])+'</h3><span class="lab fxk">'+esc(c[1])+'</span></div>'+
   '<p class="fxd">'+esc(c[2])+'</p><div class="fxs"><span class="lab">Status</span><p>'+esc(c[3])+'</p></div></article>'}).join("")+'</div>'}
function mhList(label,arr){return '<div class="mh-group"><p class="mh-label">'+label+'</p><ul class="mh-list">'+arr.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={heat:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 30H34"/><path d="M13 25c-3-4 3-7 0-12M20 25c-3-4 3-7 0-12M27 25c-3-4 3-7 0-12"/><path d="M10 11l3-4 3 4M17 11l3-4 3 4M24 11l3-4 3 4"/></svg>',
 ins:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 20H15M25 20H35"/><path d="M15 10V30M25 10V30"/><path d="M19 15l2 5-2 5"/></svg>',
 rf:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 26H36"/><path d="M12 14a11 11 0 0 1 16 0M8 10a17 17 0 0 1 24 0"/><path d="M20 30V18"/><circle cx="20" cy="18" r="2"/></svg>'};
function vHome(){
  var PR=MOBILE()?'':' data-r';setTimeout(pilReveal,60);
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Thermoformable ceramics<span class="nomob"> · Burlington, Massachusetts</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Heat out.</span><span class="l"><em>Signal through.</em></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>Fourier forms fully sintered ceramic sheets, like sheet metal, into thin parts that fit the electronics they cool: thermally conductive, electrically insulating and transparent to RF.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Request the data sheet</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What the material does">'+
    '<li class="p1" data-r><span class="pic">'+ICO.heat+'</span><div><span class="lab">Thermally conductive</span><p>Through the plane and within it, to pull heat off hot components.</p></div></li>'+
    '<li class="p2"'+PR+'><span class="pic">'+ICO.ins+'</span><div><span class="lab">Electrically insulating</span><p>A strong dielectric: heat passes through, current does not.</p></div></li>'+
    '<li class="p3"'+PR+'><span class="pic">'+ICO.rf+'</span><div><span class="lab">RF transparent</span><p>Low dielectric loss, so signals pass where a metal heat sink would interfere.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Why Fourier</span>'+
   '<h2 class="txt" id="mani">More than half of all electronic failures come down to heat. Our ceramics carry it away, <em>and extend the life of the device.</em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">55%</span><p class="k">Of all electronic failures are attributed to a lack of heat dissipation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">16.5%</span><p class="k">Reduction in thermally driven failure rates shown by our ceramics so far; our goal is 50%</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.2 mm</span><p class="k">Minimum feature size of a thermoformed part, held within ±0.016 mm</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How thermoforming works</span><h2 class="d3">A ceramic sheet, <em>formed to fit.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sheet</span><span>Heat</span><span>Form</span><span>Cool</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start from a finished sheet.</h2><p>A thin, fully sintered ceramic: aligned hexagonal boron nitride platelets held in a boron oxide matrix.</p></article>'+
     '<article class="step"><h2>Heat it until it gives.</h2><p>Above about 450 °C the boron oxide matrix softens; between 500 and 700 °C the whole sheet can be shaped.</p></article>'+
     '<article class="step"><h2>Form it to the part.</h2><p>Pressure or vacuum draws the sheet down over the mold, or the board itself, holding features as fine as 0.2 mm.</p></article>'+
     '<article class="step"><h2>Heat out, signal through.</h2><p>Cooled, the part hugs every component: it carries their heat away, insulates them electrically and lets RF pass.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A new class <em>of ceramics.</em></h2></div><p data-r>Strong dielectric ceramics that also conduct heat well are hard and costly to machine, mold or print, above all in thin parts. Thermoforming makes them in a single, low-cost, scalable step.</p></div>'+
   tiles()+
   '<div class="cred one"><div class="bk"><span class="lab kick" data-r>Also</span><p class="cr" data-r>'+lst(ALSO)+'</p></div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">From the chip <em>to the enclosure.</em></h2></div><p data-r>Where size, weight, power, cost and cooling are all constrained, and a strong dielectric must also move heat.</p></div>'+
   apps()+
   '<div class="cred one"><div class="bk"><span class="lab kick" data-r>Markets</span><p class="cr" data-r>'+lst(MKTS)+'</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Born in a lab, <em>built to ship.</em></h2></div><p data-r>Fourier was founded in 2022 by Jason Hoffman-Bice, inventor of thermoformable ceramics, a discovery that grew out of PhD research at Northeastern University with Professor Randall Erb.</p></div>'+
   '<div class="mh" data-r>'+mhList("Company",LEAD)+mhList("Co-founder",ADV)+'</div>'+
   '<div class="cred one"><div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+lst(BACK)+'</p></div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em>to the show floor.</em></h2></div><p data-r>The discovery, the paper, and Fourier’s ceramics formed live at IMS 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
/* phones: the pillar band sits below the fold, so it reveals on scroll (enhancement only: the site failsafe shows anything in view) */
function pilReveal(){if(!MOBILE()||RM||!window.ScrollTrigger)return;$$(".pil li:not([data-r])").forEach(function(li){if(li.getBoundingClientRect().top<innerHeight)return;
  gsap.set(li,{opacity:0,y:24});ScrollTrigger.create({trigger:li,start:"top 96%",once:true,onEnter:function(){gsap.to(li,{opacity:1,y:0,duration:.8,ease:"power2.out",clearProps:"transform,opacity"})}})})}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Engineers and partners</span>'+
   '<h2 class="big split">Bring us your <em>hottest board.</em></h2>'+
   '<p class="sub" data-r>For samples, partnerships or our technical data sheet, write to our founder and CEO.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Jason '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'?subject=Technical%20data%20sheet">Request the data sheet</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p class="al" data-r>Fourier LLC</p><p class="al" data-r>Burlington, Massachusetts, USA</p></div>'+
    '<div><span class="lab" data-r>Founder and CEO</span><p class="al" data-r>Jason Hoffman-Bice, PhD</p><p class="al" data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Focus</span><p class="al" data-r>Thermoformable ceramics</p><p class="al" data-r>for thermal management</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Fourier LLC<br>Burlington, Massachusetts</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Thermoformable ceramics<br>for thermal management</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 150" aria-hidden="true"><text x="320" y="128" text-anchor="middle" fill="#f4f2ee" style="font:600 italic 138px \'Exo 2\',sans-serif;letter-spacing:8px">FOURIER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Fourier LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/technology,
   #/applications, #/team or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={technology:1,applications:1,team:1,news:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",technology:"technology",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Fourier — thermoformable ceramics for thermal management",x:"Home"};
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
