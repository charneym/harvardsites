/* ================= VIEWS (home only: Technology / Evidence / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(A,cls){return '<ul class="pfr'+(cls?' '+cls:'')+'">'+A.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'')+'</li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
function team(){return '<section class="mh">'+[["Leadership",LEADS],["Board of directors",BOARD]].map(function(gp){return '<div class="mh-group"><p class="mh-label">'+gp[0]+'</p><ul class="mh-list">'+gp[1].map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</section>'}
var ICO={oct:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M15 6h10l9 9v10l-9 9H15l-9-9V15Z"/><circle cx="15" cy="6" r="1.6"/><circle cx="25" cy="6" r="1.6"/><circle cx="34" cy="15" r="1.6"/><circle cx="34" cy="25" r="1.6"/><circle cx="25" cy="34" r="1.6"/><circle cx="15" cy="34" r="1.6"/><circle cx="6" cy="25" r="1.6"/><circle cx="6" cy="15" r="1.6"/></svg>',
 lumen:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 12h32M4 28h32"/><path d="M14 12v16M26 12v16"/><path d="M20 5v8M20 27v8M17 10l3 3 3-3"/></svg>',
 clear:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5 33 10v9c0 8-6 13-13 16C13 32 7 27 7 19v-9Z"/><path d="m14 20 4 4 8-9"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Magnetic anastomosis<span class="nomob"> · Canton, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Join the bowel</span><span class="l">with magnets,</span><span class="l"><em>not staples.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>Flexagon self-forming magnets create a sutureless, staple-free anastomosis by compression, with an immediately patent lumen, delivered laparoscopically or endoscopically.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>A Flexagon self-forming magnet, assembled into its octagon. Rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">Staplers and sutures have joined the bowel for decades. <em>We are engineering the first significant breakthrough in anastomosis in over 40 years, for less invasive surgery.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">129<small>mmHg</small></span><p class="k">Average burst pressure of magnetic anastomoses in a preclinical study, versus 79.4 for staples</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12<small>min</small></span><p class="k">Median magnet placement in the first-in-human study</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">FDA 510(k) clearances for the Flexagon system, January 2025 to October 2026</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.oct+'</span><span class="lab kick" data-r>Self-forming</span><p data-r>Delivered laparoscopically or endoscopically, each Flexagon magnet forms its octagon inside the bowel and aligns itself with its partner across the wall.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.lumen+'</span><span class="lab kick" data-r>Immediately patent</span><p data-r>With the OTOLoc access system, the enterotomy is captured between the magnets, so the new connection carries flow from the start.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.clear+'</span><span class="lab kick" data-r>FDA cleared</span><p data-r>Cleared by the FDA for magnetic compression anastomosis, a self-aligning technology that leaves behind no foreign material.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a magnetic anastomosis forms</span><h2 class="d3">Two loops of bowel, <em>one new opening.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deliver</span><span>Couple</span><span>Open</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Deliver the magnets.</h2><p>A Flexagon magnet is delivered into each of the two segments to be joined, laparoscopically or endoscopically, and self-forms into an octagon.</p></article>'+
     '<article class="step"><h2>Let them find each other.</h2><p>The magnets self-align across the two walls and draw together, compressing the tissue between them, serosa to serosa.</p></article>'+
     '<article class="step"><h2>Open at once.</h2><p>The OTOLoc device captures and controls the enterotomy between the magnets, so content flows through the anastomosis immediately.</p></article>'+
     '<article class="step"><h2>Heal, with nothing left behind.</h2><p>The tissue fuses around the new opening, and the magnets and device pass naturally: no staples, no sutures, no foreign material left in place.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The Flexagon system, <em>from delivery to healing.</em></h2></div><p data-r>A new treatment category: magnetic anastomoses created with less invasive delivery of self-forming magnets, for minimally invasive surgery and endoluminal surgery, designed to reduce operative time and standardise anastomotic technique.</p></div>'+
   rows(PROPS)+
  '</div></section>'+

  '<section class="sec dark" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">Stronger than staples, <em>first in human.</em></h2></div><p data-r>Preclinical studies show superior healing at the anastomosis compared with traditional staplers, and recent clinical publications highlight its ease of use and efficiency in the operating room.</p></div>'+
   rows(PROG,'pgr')+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Leaders who have brought <em>new devices to market.</em></h2></div><p data-r>GI Windows is a spin-out of Beacon Endoscopic, acquired by Covidien in 2014, backed by investors including Orlando Health Ventures, Rex Health Ventures and Johnson & Johnson Innovation–JJDC.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Series B <em>to FDA clearance.</em></h2></div><p data-r>A $37 million Series B in November 2024, a first-in-human study in 2025, and five FDA 510(k) clearances since.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Rethink the anastomosis <em>with us.</em></h2>'+
   '<p class="sub" data-r>Write to us about Flexagon and OTOLoc, clinical collaboration, partnership or investing in GI Windows Surgical.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to GI Windows '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>480 Neponset Street, Suite 11-B1<br>Canton, MA 02021</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Media</span><p data-r><a class="ul" href="mailto:'+MEDIA+'">'+MEDIA+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>480 Neponset Street, Suite 11-B1<br>Canton, Massachusetts</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+MEDIA+'">'+MEDIA+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Flexagon self-forming magnets<br>for magnetic anastomosis</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Exo\',system-ui,sans-serif;font-weight:500;font-size:74px;letter-spacing:0"><tspan fill="#f2f2f0">GI Windows</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GI Windows Surgical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GI Windows Surgical — Flexagon self-forming magnets for anastomosis",x:"Home"};
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
