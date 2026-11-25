/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[2])+'</i></span><h3>'+esc(c[0])+'<span class="loc">'+esc(c[1])+'</span></h3><p>'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["One local injection","PAX-001 is given once, locally, into the tendon or ligament during repair surgery. It is not a systemic drug, and the doses are orders of magnitude smaller than those used for other indications, even vaccines.",'<path d="M10 44L36 18"/><path d="M33 13l10 10"/><path d="M38 8l10 10"/><path class="a" d="M10 44l-4 4"/><circle class="f" cx="22" cy="32" r="3"/>'],
  ["A proven vector","AAV2 is already licensed as a vector for a number of products, including for use in children, and is widely used in clinical trials. The approval pathway for this approach is well accepted.",'<path d="M28 7L46 17.5V38.5L28 49L10 38.5V17.5Z"/><path d="M28 7V28M10 38.5L28 28L46 38.5"/><circle class="f" cx="28" cy="28" r="3.4"/>'],
  ["Just for the healing phase","Tendons have few cells, so the growth factor is expressed locally for 12 to 16 weeks and then does not persist. In animal studies it was no longer detected by 16 weeks, after healing was complete.",'<circle cx="28" cy="28" r="19"/><path class="a" d="M28 9A19 19 0 0 1 45.5 35.5"/><path d="M28 17v11l7 5"/><circle class="f" cx="28" cy="28" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Progression to the clinic</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>PAX is raising funds and completing documentation to file the IND. Even a relatively small Phase 1 study will be able to demonstrate safety and indicate benefit.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Gene delivery for tendon repair<span class="nomob"> · Preclinical · Providence, R.I.</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The future of</span><span class="l">tendon and ligament</span><span class="l"><em>repair is here.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>PAX Therapeutics brings gene delivery out of the lab and into the clinic, so patients with tendon and ligament injuries can use their joints sooner and with better outcomes. Its first candidate, <span class="nw">PAX-001</span>, is preparing to enter human trials.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How PAX-001 works '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Tendons have among the poorest healing potential of any tissue in the body, and no effective intervention exists to optimise their healing. PAX-001 is designed to change that <em>from the first day of repair.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">368%</span><p class="k">Stronger tendons at four weeks with PAX-001, in the best preclinical animal model</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8 wks</span><p class="k">To normal tendon strength in preclinical studies, with no to minimal adhesions</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 5</span><p class="k">Flexor tendon repairs can re-rupture with surgery alone, leading to significant disability</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PAX-001 works</span><h2 class="d3">Heal with the <em>right collagen.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Repair</span><span>Injection</span><span>Healing</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Surgery alone heals with scar.</h2><p>After a tendon is repaired, the body first lays down Type 3 collagen, scar collagen, in a loose and disordered mesh. It has to be replaced by strong Type 1 collagen over months, and repairs can re-rupture or stiffen with adhesions meanwhile.</p></article>'+
     '<article class="step"><h2>One injection at the repair.</h2><p>During the same surgery, PAX-001 is injected into the tendon. The AAV2 vector carries the gene for a growth factor, VEGF, into the tendon’s own cells, which produce it right at the repair for the 12 to 16 weeks of healing.</p></article>'+
     '<article class="step"><h2>Type 1 collagen from the start.</h2><p>The growth factor steers healing to lay down the desired Type 1 collagen from the beginning. In preclinical studies, tendons were 368% stronger at four weeks and reached normal strength by eight, with no to minimal adhesions.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Gene delivery, <em>kept local.</em></h2></div><p data-r>PAX-001 is an adeno-associated virus type 2 (AAV2) vector encoding a growth factor. It grew out of more than 15 years of research in the founder’s lab at Rhode Island Hospital, a teaching affiliate of Brown University’s medical school.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One therapy, <em>many injuries.</em></h2></div><p data-r>PAX-001 starts with ruptured hand tendons, the fastest route to proof of concept, and is designed for tendons and ligaments in people and, later, in animals.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Gene therapy pioneers <em>and hand surgeons.</em></h2></div><p data-r>A leadership team with decades in gene delivery and company building, advised by surgeons from Brown University and leading figures in hand and tendon surgery.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>PAX spun out of the labs of Dr. Paul Liu at Rhode Island Hospital, where 15 years of research led to the specific combination of vector, growth factor gene and mechanism of healing.</p></div>'+
    '<div><span class="lab kick" data-r>In memoriam</span><p data-r>Paul Liu, MD, co-founder, was Chair and Professor of Plastic Surgery at Brown University and Past President of the Wound Healing Society.</p></div>'+
    '<div><span class="lab kick" data-r>Values</span><p data-r>Scientific innovation, integrity, value and excellence: never accepting current approaches and outcomes, and always putting the patient first.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Providence <em>to the clinic.</em></h2></div><p data-r>PAX in the news, and in invited lectures from the Gordon Research Conference to the Karolinska Institutet, Brown Invents and the Newport Investor Summit.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and medical enquiries</span>'+
   '<h2 class="big split">Talk to <em>PAX.</em></h2>'+
   '<p class="sub" data-r>To learn more about PAX-001, about investing in the company, or with any other medical enquiry, the team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email PAX Therapeutics '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>PAX Therapeutics, Inc.<br>Ocean State Labs<br>150 Richmond Street<br>Providence, Rhode Island</p></div>'+
    '<div><span class="lab" data-r>General enquiries</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Investors</span><p data-r><a class="ul" href="mailto:'+IMAIL+'">'+IMAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Ocean State Labs<br>Providence, Rhode Island</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>PAX-001<br>Flexor tendon repair</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.14em">PAX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 PAX Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"PAX Therapeutics — PAX-001, gene delivery for tendon and ligament repair, Providence, Rhode Island",x:"Home"};
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
