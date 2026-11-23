/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A tear protein that goes missing","Lacritin, a naturally occurring tear protein, is selectively deficient in most forms of ocular surface disease, and when it is reintroduced, health is restored.",'<path d="M28 6C20 18 14 26 14 34a14 14 0 0 0 28 0c0-8-6-16-14-28z"/><path class="a" d="M21 36a7 7 0 0 0 7 7"/>'],
  ["All of lacritin, in a short peptide","Lacripep preserves all of the biological activity of lacritin in a short, stable synthetic peptide that can be produced at scale, as a first-in-class topical therapy.",'<path d="M8 36c6-12 12-12 16 0s10 12 16 0 8-10 8-10"/><circle class="f" cx="8" cy="36" r="3"/><circle class="f" cx="24" cy="36" r="3"/><circle class="f" cx="40" cy="36" r="3"/>'],
  ["Nerves, tears and the cornea","Lacripep&#8217;s dual neurotrophic and prosecretory functions aim to resolve underlying nerve damage, reactivate basal tear secretion and restore health to the corneal epithelium.",'<path d="M6 40c10-22 34-22 44 0"/><path class="a" d="M14 40v-6M22 40v-9M30 40v-9M38 40v-6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Lacripep is an investigational new drug. It has not been approved by the US Food and Drug Administration for safety or effectiveness.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ocular surface disease<span class="nomob"> · Phase 2</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Restoring the eye&#8217;s</span><span class="l"><em>own tear protein.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>TearSolutions has developed Lacripep, a first-in-class peptide therapy derived from lacritin, a natural tear protein that is deficient in most forms of ocular surface disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why the tear film</span>'+
   '<h2 class="txt" id="mani">The quality of the tear film is critical for the survival of the cornea&#8217;s cells and nerves. Ocular surface disease is under-diagnosed and under-treated. <em>We are developing therapies that restore what the eye is missing.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~70M</span><p class="k">People in the United States with signs and/or symptoms of dry eye disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~17M</span><p class="k">People in the United States diagnosed with dry eye disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 weeks</span><p class="k">To improvement in corneal health and symptoms in the first-in-human trial of Lacripep</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Three layers, <em>one missing protein.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Tear film</span><span>Deficiency</span><span>Lacripep</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A tear film in three layers.</h2><p>Lipid on top to stop the film collapsing, an aqueous layer of nutrients, enzymes and growth factors, and mucin to spread it evenly over the eye.</p></article>'+
     '<article class="step"><h2>Without lacritin, it breaks down.</h2><p>Low or no lacritin brings tear film instability, pro-inflammatory cytokines, damage to the cells of the cornea and disrupted nerve signaling.</p></article>'+
     '<article class="step"><h2>Lacripep restores it.</h2><p>Added topically, Lacripep restored basal tearing without irritation and healed the corneal surface in preclinical models, with a balance of all three layers.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">From a tear protein <em>to a therapy.</em></h2></div><p data-r>Dr. Gordon Laurie&#8217;s lab at the University of Virginia discovered and named lacritin in an unbiased screen begun in 1992 to address the biological basis of dry eye, with NIH National Eye Institute funding. Lacripep followed as a synthetic peptide embodiment of all known lacritin activities.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Lacripep, from dry eye <em>to rare corneal disease.</em></h2></div><p data-r>After a first-in-human trial in primary Sj&#246;gren&#8217;s syndrome, Lacripep is now in a Phase 2 trial in neurotrophic keratitis, a rare, degenerative corneal disease that can lead to persistent epithelial defects and vision loss.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Experience and expertise <em>in ophthalmology.</em></h2></div><p data-r>Co-founded in 2013 by Dr. Gordon Laurie and Mark Logan, and led by a team with decades in eye care, drug development and regulatory affairs, with a board and a medical advisory board of leaders in the field.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>TearSolutions.</em></h2></div><p data-r>Press releases on our clinical programs, regulatory designations, financing and board.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and patients</span>'+
   '<h2 class="big split">Talk to <em>TearSolutions.</em></h2>'+
   '<p class="sub" data-r>Interested in Lacripep, our clinical trials or a partnership? We look forward to hearing from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to TearSolutions '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>TearSolutions, Inc.<br>315 Old Ivy Way, Suite 301<br>Charlottesville, Virginia 22903</p></div>'+
    '<div><span class="lab" data-r>Corporate contact</span><p data-r><a class="ul" href="'+MAIL+'">aasrani@tearsolutions.com</a><br><a class="ul" href="tel:+14349510444">434-951-0444</a></p></div>'+
    '<div><span class="lab" data-r>Important notice</span><p data-r>Lacripep is an investigational new drug and has not been approved by the FDA for safety or effectiveness.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>315 Old Ivy Way, Suite 301<br>Charlottesville, VA 22903</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">aasrani@tearsolutions.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Follow</span><a class="ul" href="https://www.linkedin.com/company/tearsolutions-llc/" target="_blank" rel="noopener">LinkedIn</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:400;font-size:82px">TEARSOLUTIONS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 TearSolutions, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"TearSolutions — Lacripep, restoring the tear film",x:"Home"};
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
