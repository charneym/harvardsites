/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Held in the stomach","Taken with food, the EVX-101 tablet swells too large to pass the pyloric sphincter, and for about eight hours delivers 5-HTP and carbidopa to the upper intestine, where 5-HTP is absorbed.",'<path d="M14 10c-4 10-6 22 2 32 8 10 26 10 32 0 4-7 2-15-6-18-6-2-10 2-14-2s-2-10-6-14"/><rect class="a" x="23" y="28" width="14" height="9" rx="1"/>'],
  ["Protected by carbidopa","Low-dose carbidopa blocks the enzyme in the intestinal wall that would turn 5-HTP into serotonin too early. In Phase 1 it raised 5-HTP bioavailability up to tenfold.",'<path d="M6 40h44"/><path d="M10 40V16M46 40V16" stroke-dasharray="2 3"/><circle class="f" cx="20" cy="28" r="3"/><circle class="f" cx="30" cy="22" r="3"/><circle class="f" cx="38" cy="30" r="3"/><path class="a" d="M14 46h28"/>'],
  ["Twice daily, at home","EVX-101 is an oral tablet taken with breakfast and dinner. It is expected to be free of abuse potential and not to cause dissociation or impairment.",'<circle cx="28" cy="28" r="18"/><path d="M28 16v12l8 6"/><path class="a" d="M10 48h36"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase 1b, September 2026</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Randomised, placebo-controlled PK/PD trial of EVX-301 (intravenous 5-HTP) in 18 depression patients on SSRI/SNRI therapy, PARC Clinical Research, Adelaide, as reported by Evecxia.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+BW+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Business Wire '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage neuroscience<span class="nomob"> · Research Triangle Park, NC</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Amplifying the</span><span class="l"><em>power within.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Evecxia is the first company dedicated to Serotonin Synthesis Amplification: drugs built on 5-HTP that raise the brain&#8217;s own serotonin production, for people with mental illness not helped enough by current treatments.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>From the Greek &#949;&#965;&#949;&#958;&#943;&#945;, well-being</span>'+
   '<h2 class="txt" id="mani">First-line antidepressants raise active serotonin only modestly, inconsistently and with a delay. <em>Evecxia&#8217;s drugs amplify the making of serotonin itself.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 in 3</span><p class="k">Patients with depression who respond inadequately to first-line antidepressants</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Published clinical studies reporting that serotonin synthesis amplification augments antidepressant efficacy</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~8h</span><p class="k">Sustained delivery of 5-HTP from each gastroretentive EVX-101 tablet</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the synapse</span><h2 class="d3">More serotonin, <em>made by the brain.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Brake</span><span>Precursor</span><span>Synthesis</span><span>Signal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The brake, released.</h2><p>SSRIs and SNRIs block the serotonin transporter, a natural brake on serotonin. But the transporter is scarce in the human cortex, so active serotonin rises only modestly, and inconsistently from patient to patient.</p></article>'+
     '<article class="step"><h2>The precursor, delivered.</h2><p>Evecxia&#8217;s drugs supply 5-HTP, the natural immediate precursor of serotonin, steadily and at a target plasma exposure of about 100 ng/mL. 5-HTP crosses into the brain.</p></article>'+
     '<article class="step"><h2>Synthesis, amplified.</h2><p>Inside serotonin neurons, 5-HTP is converted directly into serotonin. More serotonin is made and stored, ready for release: a stronger, more resilient serotonin system.</p></article>'+
     '<article class="step"><h2>The signal, strengthened.</h2><p>More serotonin is released into the synapse, beyond the SSRI effect, acting on the full complement of serotonin receptors, without the hallucinations or abuse potential of psychedelics.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Serotonin Synthesis <em>Amplification.</em></h2></div><p data-r>Studied since the 1970s and supported by dozens of clinical studies, yet never available as an approved drug: native 5-HTP is too short-acting and poorly absorbed. Evecxia&#8217;s lead candidate, EVX-101, is a gastroretentive, slow-release tablet of 5-HTP and low-dose carbidopa that makes it a practical medicine.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Two drug candidates, <em>one pharmacology.</em></h2></div><p data-r>EVX-101 is an oral, twice-daily adjunctive therapy; EVX-301 an intravenous infusion of 5-HTP for fast onset. Both are protected by issued and pending patents in the US, EU and major overseas markets.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by two <em>Duke scientists.</em></h2></div><p data-r>Evecxia was founded by the late Professor Marc Caron, PhD, and Jacob Jacobsen, PhD, two neuropharmacologists from Duke University, and is guided by a board and scientific advisors with deep CNS drug development experience.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Evecxia.</em></h2></div><p data-r>Recent press releases. Publications, posters and the full release archive are on the company&#8217;s news and publications page.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Evecxia.</em></h2>'+
   '<p class="sub" data-r>Evecxia Therapeutics is based at the First Flight Venture Center in Research Triangle Park, North Carolina. We will respond promptly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>First Flight Venture Center<br>2 Davis Drive</p></div>'+
    '<div><span class="lab" data-r>Mail</span><p data-r>PO Box 13169<br>Research Triangle Park, NC 27709</p></div>'+
    '<div><span class="lab" data-r>General inquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@evecxia.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Research Triangle Park<br>North Carolina</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@evecxia.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>EVX-101 · EVX-301</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:64px">EVECXIA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Evecxia Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Evecxia Therapeutics — Serotonin Synthesis Amplification",x:"Home"};
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
