/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Upstream, not downstream","Cytokine antagonists and JAK inhibitors only partially mitigate the drivers of inflammation, and B-cell depletion leaves other inflammatory cells behind. Rarefied acts upstream, where immune activation begins.",'<path d="M6 46L22 20l8 10 8-18 12 34"/><circle class="f" cx="38" cy="12" r="4"/><path class="a" d="M38 20v10"/>'],
  ["A pill, once a day","Most existing autoimmune treatments are injections or infusions. RB201 is an oral, once-daily medicine, and the first and only oral medicine of its kind in clinical development for autoimmunity.",'<rect x="14" y="20" width="28" height="14" rx="7"/><path class="a" d="M28 20v14"/><path d="M10 44h36"/>'],
  ["Defences left intact","Broad immune suppression creates a risk of infection. RB201 gently re-tunes overactive T and B cells while maintaining healthy immune defences, for durable control without systemic risk.",'<path d="M28 8l16 6v12c0 10-7 18-16 22-9-4-16-12-16-22V14z"/><path class="a" d="M21 28l5 5 10-11"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>RB201 at a glance</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From rarefiedbio.com and the public record of NIH award 1R43AI189037.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Oral therapies for autoimmune disease<span class="nomob"> · Santa Monica, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Solving autoimmunity</span><span class="l"><em>at the source.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Rarefied Biosciences is advancing first-in-class, oral therapies that re-tune overactive immune cells without compromising the body&#8217;s natural defences. Our lead programme, RB201, has completed its Phase 1 human trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/difference">The Rarefied difference '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A new approach to autoimmunity</span>'+
   '<h2 class="txt" id="mani">Every autoimmune drug today fights the avalanche at the bottom of the mountain. <em>We&#8217;re stopping it at the top.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1×</span><p class="k">A day, by mouth: RB201 is an oral, once-daily medicine, and it has completed its Phase 1 human trial</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">Publications from our founder&#8217;s twenty years as a clinical immunologist and physician-scientist</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$313K</span><p class="k">NIH SBIR award (2025) to test MALT1 inhibitors in a rare paediatric inborn error of immunity</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The Rarefied difference</span><h2 class="d3">Stop the avalanche <em>at the top.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Avalanche</span><span>Re-tune</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It starts at the summit.</h2><p>When a T or B cell is switched on, its signal runs through one complex of three proteins: CARD11, BCL10 and MALT1, the protease that works alongside CARD11.</p></article>'+
     '<article class="step"><h2>Downhill, it gathers.</h2><p>From there the signal snowballs into the inflammation that injures tissue. Cytokine blockers, JAK inhibitors and B-cell depletion all act down the slope, so they only partly control it.</p></article>'+
     '<article class="step"><h2>Re-tuned at the source.</h2><p>Rarefied&#8217;s oral MALT1 inhibitor acts at the top, restoring immune regulation upstream of the inflammation while the body&#8217;s healthy defences stay intact.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="difference" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The Rarefied difference</span><h2 class="d2 split">A new way <em>to think.</em></h2></div><p data-r>Autoimmune disease is complex. The immune system misfires and attacks the body it is meant to protect. Existing therapies focus downstream, so they are inherently limited, and they compromise safety by creating a risk of infection. Rarefied takes a different path.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">The next <em>generation.</em></h2></div><p data-r>Rarefied is building a pipeline around a new approach to rebalancing the immune system, from rheumatoid arthritis and lupus to inflammatory bowel disease and psoriasis, and a rare paediatric disease with no cure.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Immunologists, chemists <em>and builders.</em></h2></div><p data-r>A physician-scientist founder, a laboratory led by a T-cell immunologist, and advisors with decades in drug chemistry, toxicology, regulatory affairs, company building and biotech law.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where it began</span><p data-r>Rarefied acquired its orally available small-molecule MALT1 inhibitor from Rheos Medicines, which had focused on autoimmunity, and carried it into the clinic.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborator</span><p data-r>Dr. Andrew Snow, who discovered CARD11 gain-of-function disease, works with Rarefied on MALT1 inhibition as a precision therapy for it.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>A Phase I SBIR award from the National Institute of Allergy and Infectious Diseases, 2025. UCLA has no relationship with and does not endorse Rarefied Biosciences.</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Rarefied.</em></h2>'+
   '<p class="sub" data-r>Our goal is to translate precise, upstream control of immune activation into meaningful therapies across a spectrum of autoimmune diseases. If you would like to work with us on that, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Write to Rarefied '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Rarefied Biosciences, Inc.<br>Santa Monica, California<br>USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">rarefiedbio.com contact form</a></p></div>'+
    '<div><span class="lab" data-r>Please note</span><p data-r>Do not send any personal health information.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Santa Monica, California<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/difference">The Difference</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>RB201 · RB202 · CARD11 gain of function</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Roboto Mono\',monospace;font-weight:400;font-size:52px">RAREFIED BIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Rarefied Biosciences, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",difference:"difference",story:"story",pipeline:"pipeline",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Rarefied Bio — solving autoimmunity at the source",x:"Home"};
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
