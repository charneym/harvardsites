/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function techRows(){return '<ul class="pfr">'+TECH.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function progs(){return '<ul class="pfr pgr">'+PROG.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'<span class="stg lab">'+esc(c[3])+'</span></p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">Source</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Founders</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={dec:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 26c4-8 8-8 12 0s8 8 12 0 6-6 8-3"/><path d="M8 22v-5M12 20v-6M20 30v-6M24 31v-5M32 24v-5"/><circle cx="20" cy="11" r="5"/><path d="M23.6 14.6L28 19"/></svg>',
 aso:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M3 25h34"/><path d="M7 25v-5M11 25v-5M15 25v-5M19 25v-5M23 25v-5M27 25v-5M31 25v-5M35 25v-5"/><path class="o" d="M11 15h20"/><path class="o" d="M13 15v4M17 15v4M21 15v4M25 15v4M29 15v4"/></svg>',
 tune:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 33V7M6 33h28"/><path d="M12 27l6-6 5 3 9-11"/><path d="M28 13h4v4"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>AI-powered RNA targeting<span class="nomob"> · Cambridge, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Decoding RNA</span><span class="l">to make every target</span><span class="l"><em>druggable.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>We control how proteins are made by targeting RNA. An AI-based platform finds the druggable angle; our smart RNA-targeting drugs then turn a protein up or down, on or off.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>An antisense oligonucleotide (orange) bound to its target messenger RNA, rendered.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Riboway Therapeutics</span>'+
   '<h2 class="txt" id="mani">We decode RNA to precisely control protein expression and function, so that targets once called undruggable <em>can finally be reached.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5<small>of 5</small></span><p class="k">Targets attempted, all successfully validated</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20<small>+</small></span><p class="k">INDs our team has advanced, contributing to five approved drugs</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1<small>year</small></span><p class="k">From our lead SCA2 program to IND, upon funding</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.dec+'</span><span class="lab kick" data-r>Decode</span><p data-r>AI reads how a target’s RNA is regulated and identifies the angles from which it can be drugged.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.aso+'</span><span class="lab kick" data-r>Target</span><p data-r>A smart antisense oligonucleotide binds that site and works through the cell’s own RNA regulatory pathways.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.tune+'</span><span class="lab kick" data-r>Control</span><p data-r>The protein is upregulated, downregulated, activated or inhibited, whichever the disease calls for.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From RNA <em>to the right amount of protein.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Decode</span><span>Bind</span><span>Control</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Decode the RNA.</h2><p>Every protein is made from a messenger RNA. Our AI-based platform reads how a target’s RNA is regulated and pinpoints a druggable angle on it.</p></article>'+
     '<article class="step"><h2>Bind the angle.</h2><p>A smart antisense oligonucleotide, designed for that site, pairs with the RNA there and engages the cell’s own regulatory pathways.</p></article>'+
     '<article class="step"><h2>Set the protein level.</h2><p>Depending on therapeutic need, the target protein is upregulated or downregulated, activated or inhibited, without touching the protein itself.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Smart RNA targeting, <em>driven by AI.</em></h2></div><p data-r>We specialise in controlling how proteins are made by targeting RNA. Our AI-based platform decodes RNA regulation to identify druggable angles, and our smart RNA-targeting technology then moves the target protein in whichever direction therapy needs.</p></div>'+
   techRows()+
  '</div></section>'+

  '<section class="sec dark" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Assets in neurodegenerative <em>and metabolic disease.</em></h2></div><p data-r>Our lead program targets the genetic cause of Spinocerebellar Ataxia Type 2 and is a year to IND upon funding. Alongside it is a first-ever ASO designed to activate a previously undruggable transcription factor.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>Winner, seed category, BIO 2025 Start-Up Stadium</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers <em>and RNA scientists.</em></h2></div><p data-r>Founded in Cambridge, Massachusetts, by a team that has advanced more than 20 INDs and contributed to five approved drugs.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Redefining <em>the undruggable.</em></h2></div><p data-r>Riboway won the seed category of the BIO 2025 Start-Up Stadium at the BIO International Convention in Boston.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Let’s make every target <em>druggable, together.</em></h2>'+
   '<p class="sub" data-r>To receive a copy of our deck, or to get in touch with our team, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'?subject=Riboway%20Deck%20Request">Request our deck '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>Riboway Therapeutics<br>700 Main Street North<br>Cambridge, MA 02139</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Focus</span><p data-r>Neurodegenerative and metabolic diseases</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>700 Main Street North<br>Cambridge, MA 02139</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>AI-powered RNA targeting<br>to make every target druggable</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="68" text-anchor="middle" style="font-family:\'Libre Franklin\',system-ui,sans-serif;font-weight:700;font-size:96px;letter-spacing:-.01em"><tspan fill="#56b6de">RIBO</tspan><tspan fill="#f2f6fb" font-style="italic">WAY</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Riboway Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Riboway Therapeutics — AI-powered RNA targeting to make every target druggable",x:"Home"};
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
