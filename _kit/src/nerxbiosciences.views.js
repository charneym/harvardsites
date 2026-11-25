/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and
   in-page CTAs scroll). Hero: the NĒRx helix render right of a type-led headline, their three "competitive advantage" pillars as
   its bottom band; then dark and bone grounds alternate: clinical need (bone), the sense-and-block story (dark), science tiles
   (bone), pipeline (dark), team photos (bone), news (dark), contact (bone). Content is never hidden at rest (DW): reveals only
   enhance (see the failsafe in site.js). ================= */
function tiles(){return '<div class="ptile-g">'+PROPS.map(function(c){
  return '<div class="ptile"><span class="pm word">'+esc(c[0])+(c[1]?'<small>'+esc(c[1])+'</small>':'')+'</span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
function pipe(){return '<div class="pipe nxp">'+
  '<div class="pipe-h" aria-hidden="true"><span class="lab">Program</span><span class="lab">About</span><span class="pipe-axis">'+STAGES.map(function(s){return '<span class="lab">'+s+'</span>'}).join("")+'</span></div>'+
  PROG.map(function(c,i){var pct=(c[3]*100).toFixed(1);
  return '<article class="prow"><div class="pr-id"><span class="lab pr-n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(c[0])+'</h3><span class="pr-ind">'+esc(c[1])+' · '+esc(c[2])+'</span></div>'+
   '<p class="pr-d">'+esc(c[5])+'</p>'+
   '<div class="pr-st"><div class="pr-bar" role="img" aria-label="Progress across discovery, lead optimization and IND-enabling studies"><i style="width:'+pct+'%"></i>'+STAGES.map(function(){return '<b></b>'}).join("")+'</div>'+
   '<span class="pr-stl"><span class="lab">Next milestone</span> '+esc(c[4])+'</span><a class="lab ul lk2" href="'+c[6]+'" target="_blank" rel="noopener">'+esc(c[7])+' '+ARR+'</a></div></article>'}).join("")+'</div>'}
function team(){return '<div class="tg4">'+TEAM.map(function(p){
  return '<figure class="tm4"><div class="tm4-ph"><img src="'+p[3]+'" alt="'+esc(p[0])+'" width="400" height="500" loading="lazy" decoding="async"></div><figcaption><h3>'+esc(p[0])+'</h3><span class="lab">'+esc(p[1])+'</span>'+(p[2]?'<p>'+esc(p[2])+'</p>':'')+'</figcaption></figure>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={tgt:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="6.5"/><circle cx="20" cy="20" r="1.6"/></svg>',
 moa:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 14C12 14 14 26 20 26S28 14 34 14"/><path d="M6 26C12 26 14 14 20 14S28 26 34 26"/><path d="M20 5V11M20 29V35"/></svg>',
 chem:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 7L31.3 13.5V26.5L20 33L8.7 26.5V13.5Z"/><path d="M20 12.5L26.5 16.2V23.8L20 27.5L13.5 23.8V16.2Z"/></svg>'};
function vHome(){
  var PR=MOBILE()?'':' data-r';setTimeout(pilReveal,60);
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>DNA damage response therapeutics<span class="nomob"> · Indianapolis</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Innovation</span><span class="l"><span class="gt">uncompromised.</span></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>A new generation of targeted cancer therapeutics: first-in-class small molecules that block the proteins that sense DNA damage.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/technology">Our science '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Our competitive advantage">'+
    '<li class="p1"'+PR+'><span class="pic">'+ICO.tgt+'</span><div><span class="lab">Novel targets</span><p>The DNA damage sensors RPA and Ku, upstream of the DDR kinases.</p></div></li>'+
    '<li class="p2"'+PR+'><span class="pic">'+ICO.moa+'</span><div><span class="lab">Novel mechanism</span><p>Inhibitors that stop a sensor from binding damaged DNA.</p></div></li>'+
    '<li class="p3"'+PR+'><span class="pic">'+ICO.chem+'</span><div><span class="lab">Novel chemistry</span><p>First-in-class small molecules from two decades of DNA repair research.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>The clinical need</span>'+
   '<h2 class="txt" id="mani">For many of the most common and most aggressive cancers, including lung and ovarian, most patients will still die from their disease. <em>We are developing therapies to change that.</em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">130,810</span><p class="k">Lung cancer deaths each year, the number one cancer killer of men and women</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">22%</span><p class="k">Five-year survival for lung cancer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12,810</span><p class="k">Ovarian cancer deaths each year, with less than a 50% chance of five-year survival</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How our lead works</span><h2 class="d3">Switch off the sensor, <em>stop the repair.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Damage</span><span>Sense</span><span>Repair</span><span>Block</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Therapy damages tumor DNA.</h2><p>Chemotherapy and radiation work by damaging the DNA of cancer cells. Where a strand breaks away, a stretch of single-stranded DNA is left exposed.</p></article>'+
     '<article class="step"><h2>A sensor finds the damage.</h2><p>DNA damage sensors detect it first. RPA, Replication Protein A, binds and coats the exposed single strand; Ku grips the ends of broken DNA.</p></article>'+
     '<article class="step"><h2>The kinases start repair.</h2><p>The sensors recruit the DNA damage response kinases, which set the repair pathways in motion, and the cancer cell can recover from its treatment.</p></article>'+
     '<article class="step"><h2>NĒRx-329 blocks the sensor.</h2><p>Our lead is a competitive inhibitor of RPA’s DNA binding. Unable to hold the strand, the sensor cannot start the response upstream of the kinases, and the damage stays unrepaired.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">DNA damage sensors, <em>the guardians of the genome.</em></h2></div><p data-r>Since the approval of PARP inhibitors, the DNA damage response is a validated target. We intervene upstream of the DDR kinases, at specific sensors: proteins with no biologic redundancy, whose unique DNA-protein interactions allow unprecedented specificity, for more effective and less toxic therapies.</p></div>'+
   tiles()+
  '</div></section>'+

  '<section class="sec dark" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Four programs, <em>one strategy.</em></h2></div><p data-r>Small molecule inhibitors of DNA damage sensors and repair, from our lead RPA program, ready for IND-enabling work with NIH support, to undisclosed targets in discovery.</p></div>'+
   pipe()+
   '<div class="cred">'+
    '<div class="bk"><span class="lab kick" data-r>Grant support</span><p class="cr" data-r>'+lst(GRANTS)+'</p></div>'+
    '<div class="bk"><span class="lab kick" data-r>Investors and partners</span><p class="cr" data-r>'+lst(INVEST)+'</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Two decades of DNA repair science, <em>built toward the clinic.</em></h2></div><p data-r>Founded in 2009 by John Turchi, PhD, and Robert Feltgen, on discoveries from Dr. Turchi’s lab at Indiana University School of Medicine, which NĒRx holds under exclusive license.</p></div>'+
   team()+
   '<div class="cred">'+
    '<div class="bk"><span class="lab kick" data-r>Clinical and scientific advisors</span><p class="cr" data-r>'+lst(ADV)+'</p></div>'+
    '<div class="bk"><span class="lab kick" data-r>Legal</span><p class="cr" data-r>'+lst(LEGAL)+'</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>NIH funding for our RPA program, and a new home in the labs of the Indiana Biosciences Research Institute.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
/* phones: the pillar band sits below the fold, so it reveals on scroll (enhancement only: the site failsafe shows anything in view) */
function pilReveal(){if(!MOBILE()||RM||!window.ScrollTrigger)return;$$(".pil li").forEach(function(li){if(li.getBoundingClientRect().top<innerHeight)return;
  gsap.set(li,{opacity:0,y:24});ScrollTrigger.create({trigger:li,start:"top 96%",once:true,onEnter:function(){gsap.to(li,{opacity:1,y:0,duration:.8,ease:"power2.out",clearProps:"transform,opacity"})}})})}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and collaborators</span>'+
   '<h2 class="big split">Take a first-in-class <em>RPA inhibitor to the clinic.</em></h2>'+
   '<p class="sub" data-r>We are seeking a partner in oncology to accelerate NĒRx-329 through IND to first-in-human studies. Write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to NĒRx '+ARR+'</a><a class="btn" href="#/technology">See the science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Corporate</span><p data-r>6151 Central Ave., Suite 120<br>Indianapolis, IN 46220</p></div>'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>1220 Waterway Blvd.<br>Indianapolis, IN 46202</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Corporate</span>6151 Central Ave., Suite 120<br>Indianapolis, IN 46220</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Inhibitors of DNA damage sensors<br>for lung, ovarian and other cancers</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 150" aria-hidden="true"><text x="320" y="138" text-anchor="middle" fill="#f4f5f8" style="font:600 150px \'Open Sans\',sans-serif;letter-spacing:10px">NERx</text><rect class="fmac" x="0" y="11" width="0" height="10" fill="#f4f5f8"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 NĒRx BioSciences Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* the footer wordmark's macron sits over the E, measured from the rendered glyphs (font-independent) */
function fMacron(){var sv=document.querySelector(".ftr .bigsvg");if(!sv)return;var t=sv.querySelector("text"),r=sv.querySelector(".fmac");if(!t||!r||!t.getStartPositionOfChar)return;
  try{var x=t.getStartPositionOfChar(1).x,a=150*.558;r.setAttribute("x",(x+a*.16).toFixed(1));r.setAttribute("width",(a*.74).toFixed(1));r.setAttribute("y","11")}catch(e){}}
var _fm=0,_fmi=setInterval(function(){fMacron();if(++_fm>20)clearInterval(_fmi)},700);addEventListener("load",function(){setTimeout(fMacron,300)});

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/technology,
   #/pipeline, #/team or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={technology:1,pipeline:1,team:1,news:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NĒRx BioSciences — first-in-class inhibitors of DNA damage sensors for cancer",x:"Home"};
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
