/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The product","A prefilled syringe of NKA Bio&#8217;s anti-shock antibody, for injection by EMS during their standard treatment protocols, to prepare the patient for transport.",'<path d="M14 42l22-22"/><path d="M30 14l12 12"/><path d="M36 8l12 12"/><path class="a" d="M14 42l-6 6"/><path d="M19 37l4 4M24 32l4 4"/><circle class="f" cx="25" cy="31" r="2.2"/>'],
  ["Built for the field","Temperature stable and low volume, for use by EMS to stabilise trauma patients at once and buy more time for transport to a trauma centre.",'<path d="M6 36h30V22H24l-6 8H6z"/><path d="M36 26h8l6 8v2H36"/><circle cx="16" cy="40" r="4"/><circle cx="42" cy="40" r="4"/><path class="a" d="M14 15h8M18 11v8"/>'],
  ["Progress to date","Proof of concept in vivo with a prototype, and a lead candidate selected. With the right funding and support, NKA01 is less than 18 months from the clinic.",'<circle cx="28" cy="30" r="18"/><path d="M24 8h8M28 8v4"/><path class="a" d="M28 30V18"/><circle class="f" cx="28" cy="30" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function eco(){return '<div class="bk"><span class="lab kick" data-r>Support</span><p class="cr" data-r><span>US Air Force &#183; AFWERX SBIR</span><i>&#183;</i><span>Techstars Industries of the Future</span><i>&#183;</i><span>LifeBridge Health BioIncubator</span></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Trauma resuscitation<span class="nomob"> · Baltimore, Maryland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Press pause</span><span class="l">on death.</span><span class="l"><em>Buy more time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NKA Bio is developing new medicines for critically ill patients. Its lead, NKA01, is an antibody given by EMS at the point of injury, to buy more time for transport and life-saving surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Introducing NKA01 '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">People don&#8217;t die from car crashes or gunshots. They die from their body&#8217;s response to the injury, a state known as shock. <em>Shock is the #1 cause of death for people aged 1&#8211;44 in the United States.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">990,000</span><p class="k">Patients transported by ambulance to trauma centres every year</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">210,000</span><p class="k">So injured they require ICU care to be stabilised</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">44,000</span><p class="k">Die at trauma centres despite receiving the best care</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Minutes count. <em>NKA01 buys hours.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Shock</span><span>Pause</span><span>Care</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The clock starts.</h2><p>A crash or a gunshot starts it. The injury itself is rarely what kills; what follows is a race to reach a trauma centre and surgery.</p></article>'+
     '<article class="step"><h2>Shock sets in.</h2><p>The body&#8217;s response to the injury takes over. Every year, 90,000 trauma patients don&#8217;t live long enough to get to a hospital.</p></article>'+
     '<article class="step"><h2>Press pause.</h2><p>EMS give NKA01 at the point of injury, during their standard protocols: a low-volume injection from a prefilled syringe, temperature stable for use in the field.</p></article>'+
     '<article class="step"><h2>Time to reach care.</h2><p>NKA01 is designed to press pause on death and buy more time for transport and life-saving surgery. When minutes count, the antibody buys hours.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our solution</span><h2 class="d2 split">Introducing <em>NKA01.</em></h2></div><p data-r>A low-volume injection at the point of injury, to buy more time for transport and surgery. Antibody discovery runs on the Smol mAb Platform, in NKA Bio&#8217;s Baltimore R&amp;D facilities equipped for antibody engineering and assay development.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One shock pipeline, <em>four programmes.</em></h2></div><p data-r>Built on the life&#8217;s work of Dr. Donald S. Gann in trauma care and research. The lead, NKA01 in trauma resuscitation, is backed by US Air Force SBIR support.</p></div>'+
   pipeRows(PIPE)+
   eco()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded on <em>trauma science.</em></h2></div><p data-r>NKA Bio was founded on research by the first Director of Emergency Medicine at Johns Hopkins, and is led by his family together with a research team and clinical advisors in trauma and military medicine.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News &amp; media</span><h2 class="d2 split">In the <em>news.</em></h2></div><p data-r>Awards, interviews and coverage of NKA Bio&#8217;s work, from the Air Force SBIR Phase II contract to the Techstars Industries of the Future accelerator.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>NKA Bio.</em></h2>'+
   '<p class="sub" data-r>NKA Bio works from the LifeBridge Health BioIncubator in Baltimore. With the right funding and support, NKA01 is less than 18 months from the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/technology">Introducing NKA01</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>2401 West Belvedere Ave, Lab 317<br>Baltimore, MD 21215</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+MAIL+'">'+MAILA.replace("@","@<wbr>")+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>LifeBridge Health BioIncubator<br>2401 West Belvedere Ave, Lab 317<br>Baltimore, MD 21215</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">Write to us</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Supported by</span>US Air Force SBIR<br>Techstars</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:64px">NKA BIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NKA Bio, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NKA Bio — press pause on death, buy time for life-saving care",x:"Home"};
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
