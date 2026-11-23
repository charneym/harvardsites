/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["High-Definition tDCS","The only technology platform that allows tolerated non-invasive delivery of therapeutic current to desired brain regions, through proprietary High-Definition electrodes. Invented at The City College of New York.",'<circle cx="28" cy="28" r="20"/><circle class="f" cx="28" cy="28" r="3.4"/><circle cx="28" cy="13" r="2.6"/><circle cx="43" cy="28" r="2.6"/><circle cx="28" cy="43" r="2.6"/><circle cx="13" cy="28" r="2.6"/><path class="a" d="M28 28L28 16M28 28L40 28M28 28L28 40M28 28L16 28"/>'],
  ["tDCS-LTE","Limited Total Energy tDCS: the only tDCS platform optimized for robust low-energy stimulation, through proprietary adaptive limiting of the voltage and power it requires, for clinics, field work and the home.",'<rect x="12" y="16" width="32" height="24"/><path d="M44 24h4v8h-4"/><path class="a" d="M18 34l6-8 5 5 9-11"/>'],
  ["Neurotargeting","Individualized brain current-flow modeling and patented targeting algorithms that show how to place and energize HD electrodes on each head, in the HD-Explore and HD-Targets software.",'<path d="M28 8c11 0 19 8 19 19s-8 21-19 21S9 38 9 27 17 8 28 8z"/><path d="M28 9v38"/><circle class="a" cx="21" cy="22" r="6"/><circle class="f" cx="21" cy="22" r="2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From soterixmedical.com and Soterix Medical&#8217;s press releases. Some systems and accessories are investigational, limited by U.S. federal law to investigational use.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neuromodulation<span class="nomob"> · Brain monitoring</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Better, smarter</span><span class="l"><em>brain stimulation.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Soterix Medical develops non-invasive neuromodulation and integrated brain monitoring technology, from High-Definition tDCS for research to SPRY TMS Therapy, cleared by the FDA in 2026 for major depression.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How HD-tDCS works '+ARR+'</a><a class="btn" href="#/systems">Our systems</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Engineering serving humanity</span>'+
   '<h2 class="txt" id="mani">We are committed to bringing the most advanced medical technology into the hands of people who need it, <em>from the most targeted clinical systems to the most portable units.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2008</span><p class="k">Founded to develop High-Definition transcranial electrical stimulation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,200+</span><p class="k">Medical centers in the U.S. and worldwide working with Soterix Medical</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><p class="k">FDA clearance of SPRY TMS Therapy for major depressive disorder</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How HD-tDCS works</span><h2 class="d3">Current, <em>where it is needed.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Model</span><span>Target</span><span>Stimulate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Model each head.</h2><p>Individualized brain current-flow modeling shows how current will pass through the scalp, skull and fluid to reach the brain.</p></article>'+
     '<article class="step"><h2>Place the HD electrodes.</h2><p>Patented targeting algorithms indicate how to place and energize small High-Definition electrodes on the head, such as a 4&#215;1 ring around the target.</p></article>'+
     '<article class="step"><h2>Deliver targeted current.</h2><p>Proprietary HD electrodes allow safe and tolerated passage of current, focused on the desired brain region rather than spread across the head.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Exclusive technology, <em>invented at CCNY.</em></h2></div><p data-r>Soterix Medical has licensed and developed a comprehensive intellectual property portfolio, including High-Definition tDCS, Limited Total Energy tDCS, neurotargeting and improving the precision of transcranial magnetic stimulation.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="systems" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Systems</span><h2 class="d2 split">For clinics, labs <em>and the home.</em></h2></div><p data-r>Clinical systems for depression and surgery, and research systems chosen by advanced centers for neuromodulation trials and human performance testing, with US-based support and training.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by a co-inventor <em>of HD-tDCS.</em></h2></div><p data-r>Founded in 2008 and based in the New York tri-state area, with international distributors in all major markets. The leadership named in our recent releases:</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Soterix Medical.</em></h2></div><p data-r>Press releases on clearances, launches and clinical trials.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, researchers and partners</span>'+
   '<h2 class="big split">Talk to <em>Soterix Medical.</em></h2>'+
   '<p class="sub" data-r>Our award-winning support team is happy to help, by phone, email or Zoom: product information, demonstrations, training, and the SPRY TMS Partnership program for psychiatrists.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/systems">See the systems</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Soterix Medical Inc.<br>Aspen Corporate Park<br>1480 US Highway 9 North, 204<br>Woodbridge, NJ 07095</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">contact@soterixmedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+18889908327">1.888.990.TDCS</a><br>(1.888.990.8327)</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Woodbridge, New Jersey</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">contact@soterixmedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/systems">Systems</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>HD-tDCS · tDCS-LTE · SPRY TMS</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:400;font-size:76px">SOTERIX MEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Soterix Medical Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",systems:"systems",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Soterix Medical — non-invasive neuromodulation and brain monitoring",x:"Home"};
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
