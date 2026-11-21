/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function phases(){return '<div class="phz" data-r><span class="lab kick">Development status</span><ol>'+PHASES.map(function(p){return '<li class="'+(p[1]?"dn":"")+'"><i></i><span class="lab">'+esc(p[0])+'</span></li>'}).join("")+'</ol></div>'}
function needs(){var C=[
  ["Opioid use","~25%","of all opioid prescriptions for children and young people (age 0–19) were dental related. Adolescents, the main patients for wisdom tooth surgery, are at increased risk of an opioid use disorder even after a single exposure."],
  ["Suboptimal pain relief",">90%","of patients in a proprietary survey of 348 people who had third molars extracted reported using “rescue” pain medication after surgery, and more than 90% said they would likely ask for a new pain medication if one were available."],
  ["The market","~3M","new patients a year in the US, from about 10 million wisdom teeth extracted annually. The average American loses 4–8 further teeth in a lifetime, and there are some 40 million canine tooth extractions a year worldwide."]];
  return '<div class="caps nd">'+C.map(function(c){return '<div class="cap"><span class="lab" data-r>'+esc(c[0])+'</span><span class="fig" data-r>'+esc(c[1])+'</span><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function quotes(){return '<div class="qts"><span class="lab kick" data-r>What oral surgeons told us</span><ul>'+QUOTES.map(function(q){return '<li><blockquote data-r>“'+esc(q[0])+'”</blockquote><span class="lab" data-r>'+esc(q[1])+'</span></li>'}).join("")+'</ul></div>'}
function feats(){var F=[
  ["Triple combination","Benzocaine, lidocaine and bupivacaine in one extended-release formulation, each with a different onset, potency and duration of action."],
  ["A gel","Not a pill, not an injection: no needle, administered directly into the extraction socket once, after surgery."],
  ["Local pain management","Oral surgeons prefer local pain management over systemic treatment whenever possible."]];
  return '<dl class="ft">'+F.map(function(f){return '<div><dt data-r>'+esc(f[0])+'</dt><dd data-r>'+esc(f[1])+'</dd></div>'}).join("")+'</dl>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase 1 topline results</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>As announced by Arcato on 19 August 2026. Safety was the primary endpoint; the efficacy findings come from exploratory analyses. Arcato is engaged with the FDA and aligned with its May 2026 draft guidance for developing non-opioid analgesics.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Oral surgery pain<span class="nomob"> · ARC-001 Gel</span> · Greenville, NC</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One gel, one dose,</span><span class="l">after wisdom teeth.</span><span class="l"><em>Non-opioid.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Arcato Laboratories is developing ARC-001 Gel: three non-addictive local anesthetics in a sustained-release gel, placed once into the tooth socket after extraction, with the potential for pain relief for up to seven days.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How ARC-001 works '+ARR+'</a><a class="btn" href="#/results">Phase 1 results</a></div></div>'+
   '<p class="hero-cap lab" aria-hidden="true">Panoramic dental X-ray · wisdom teeth</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">About a quarter of opioid prescriptions for young people are dental, and tooth extraction accounts for a rising share of them. Arcato is building a local alternative that <em>stays where the pain is.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~10M</span><span class="k">Wisdom teeth extracted in the US every year, about 3 million new patients</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Well-characterised, non-addictive anesthetics combined in a single gel: benzocaine, lidocaine and bupivacaine</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2×</span><span class="k">Placebo patients in Phase 1 self-reported needing opioids twice as often as those on ARC-001 Gel</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ARC-001 works</span><h2 class="d3">Placed once, <em>released for days.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Extraction</span><span>Placement</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The third molar comes out.</h2><p>About 10 million wisdom teeth are removed in the US each year. What is left is an open socket in the bone, and days of pain that are today often treated with opioids.</p></article>'+
     '<article class="step"><h2>The gel goes straight in.</h2><p>ARC-001 Gel is administered directly into the extraction socket, once, at the end of surgery. No pill, no injection, no needle.</p></article>'+
     '<article class="step"><h2>Three anesthetics, released over days.</h2><p>Benzocaine, lidocaine and bupivacaine each have a different onset, potency and duration of action. In a sustained-release gel, they target pain relief over five to seven days from a single dose.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="need" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Unmet need</span><h2 class="d2 split">Two problems after <em>third molar surgery.</em></h2></div><p data-r>Opioid use and suboptimal pain relief remain the two main unmet needs after wisdom tooth extraction. A 2025 paper on opioid prescribing by oral and maxillofacial surgeons, by experts from Harvard, the University of Maryland and Penn, concluded that “there remains much to be done.”</p></div>'+
   needs()+
   quotes()+
  '</div></section>'+

  '<section class="sec dark2" id="arc001" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>ARC-001 Gel</span><h2 class="d2 split">Not a pill, <em>not an injection.</em></h2></div><p data-r>A novel, proprietary, sustained-release gel that combines three anesthetics, targeting an efficacy profile of pain relief over 5–7 days from one single dose.</p></div>'+
   feats()+
   pipeRows(PIPE)+
   phases()+
   '<div id="results">'+evid()+'</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers <em>and a dentist.</em></h2></div><p data-r>Decades of formulation science, regulatory work and global biopharma experience, with oral and craniofacial research guiding the clinic.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Founded by Michael Jay, emeritus professor of molecular pharmaceuticals at UNC Chapel Hill; based in Greenville, North Carolina.</p></div>'+
    '<div><span class="lab kick" data-r>Grant support</span><p data-r>NIDCR STTR Phase I (2018) and SBIR Phase II (2021–22) awards for non-opiate topical formulations to treat pain after molar extractions.</p></div>'+
    '<div><span class="lab kick" data-r>Financing</span><p data-r>First financing round closed, fully subscribed, in August 2026, alongside the Phase 1 results.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Results, financing <em>and grants.</em></h2></div><p data-r>The latest on Arcato Laboratories and ARC-001 Gel.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Arcato.</em></h2>'+
   '<p class="sub" data-r>With Phase 1 complete and its first round closed, Arcato is preparing ARC-001 Gel for further Phase 2/3 development and would be glad to hear from partners, investors and oral surgeons.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Arcato '+ARR+'</a><a class="btn" href="#/results">See the Phase 1 results</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>1800 N Greene Street, Ste E<br>Greenville, NC 27834</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/arcato-laboratories-inc/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1800 N Greene Street, Ste E<br>Greenville, NC 27834</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/need">Unmet need</a><br><a class="ul" href="#/arc-001">ARC-001</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>ARC-001 Gel<br>Pain after third molar surgery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:400;font-size:60px;letter-spacing:-.01em">Arcato Laboratories</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Arcato Laboratories, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",need:"need","arc-001":"arc001",arc001:"arc001",results:"results",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Arcato Laboratories — ARC-001 Gel, non-opioid pain relief after wisdom tooth surgery, Greenville, NC",x:"Home"};
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
