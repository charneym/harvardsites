/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Change the cell, not the vector","Synvivia applies chemical control over cell behavior. Instead of re-engineering the vector, we change the state of the packaging cell that builds it, so the vector a manufacturer already makes stays the vector they make.",'<path d="M28 46c-9.9 0-18-8.1-18-18S18.1 10 28 10s18 8.1 18 18-8.1 18-18 18"/><circle class="f" cx="28" cy="28" r="6.4"/>'],
  ["Found, not guessed","A massively multiplexed strategy: roughly 50 million cyclic peptides compete inside packaging cells at once. The molecules that help are discovered by enrichment rather than predicted one at a time.",'<path d="M10 14h36M10 24h36M10 34h36M10 44h36"/><circle class="f" cx="19" cy="14" r="3.4"/><circle class="f" cx="33" cy="34" r="3.4"/>'],
  ["Inside your own process","Methods and materials differ from one manufacturer to the next. Enrichment runs in the manufacturer’s own vector manufacturing process, which is how the platform gets past that industry-wide problem.",'<rect x="10" y="16" width="36" height="26"/><path d="M10 26h36"/><path class="a" d="M28 4v10M23 9l5 5 5-5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the NIH record and abstract for SBIR award 5R44GM158472 (NIGMS), the Y Combinator company page and the UC Berkeley IPIRA startup record. Figures quoted on this page are the preliminary data stated in that abstract.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cyclic peptide discovery<span class="nomob"> · AAV vector manufacturing</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Molecules that</span><span class="l"><em>reprogram</em> the cells</span><span class="l">that build vectors.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Synvivia engineers molecules to reprogram cells. Our discovery platform finds the cyclic peptides that make a manufacturer’s own packaging cells release more full, functional AAV vectors per batch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/platform">The platform</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">The complexity and cost of manufacturing is the barrier between AAV gene therapy and the patients it could reach. <em>So we work on the cell that makes the vector, not on the vector itself.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~50M</span><p class="k">Members in the cyclic peptide Discovery Library, screened inside packaging cells by competitive enrichment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10×</span><p class="k">Increase in physical and functional titre from most of the 36 peptides characterised so far, in preliminary work</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90–95%</span><p class="k">Of full but non-functional capsids eliminated, lifting transduction efficiency by up to 17-fold</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Find the molecule, <em>fix the batch.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Produce</span><span>Library</span><span>Enrich</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The packaging cell is the bottleneck.</h2><p>AAV manufacturing is held back by the scalability of cell culture, by low yields of functional vector and by losses downstream. Much of what a packaging cell releases is capsid that carries no usable genome.</p></article>'+
     '<article class="step"><h2>Fifty million molecules, inside the cell.</h2><p>Synthetic helper genes express a cyclic peptide inside the packaging cells: roughly 50 million different peptides across the population, each one a different change to the cell’s state.</p></article>'+
     '<article class="step"><h2>Enrichment keeps what works.</h2><p>A competitive enrichment process selects the library members that raise vector yield or quality, run inside the manufacturer’s own process rather than in a generic model system.</p></article>'+
     '<article class="step"><h2>More full, functional vectors.</h2><p>Lead peptides are then delivered to the packaging cells in that process. In preliminary work most of the 36 peptides characterised raised titre by up to tenfold and removed 90 to 95 per cent of full but non-functional capsids.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Chemical control over <em>cell behaviour.</em></h2></div><p data-r>A massively multiplexed synthetic helper gene strategy: identify and deliver the molecules that put a vector packaging cell into a better state for biomanufacturing.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">One library, <em>many processes.</em></h2></div><p data-r>Synvivia is validating the platform against the three things manufacturers asked to see first: breadth across serotypes, leads that hold up in vitro and in vivo, and gains that survive the move to bioreactor scale.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A small team out of <em>UC Berkeley.</em></h2></div><p data-r>Synvivia was founded in 2015 on technology co-invented at UC Berkeley, joined Y Combinator in 2016, and works from Emeryville, California.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">On the <em>record.</em></h2></div><p data-r>Every item below links to the public record it comes from.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering</span>'+
   '<h2 class="big split">Let’s talk about <em>your process.</em></h2>'+
   '<p class="sub" data-r>The platform runs inside a manufacturer’s own vector manufacturing process, so the first conversation is about how yours is built. Write to us about a partnership, or about investment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Synvivia '+ARR+'</a><a class="btn" href="#/platform">See the platform</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Synvivia, Inc.<br>Emeryville, California</p></div>'+
    '<div><span class="lab" data-r>Partnering</span><p data-r><a class="ul" href="'+MAIL+'">partnership@synvivia.com</a></p></div>'+
    '<div><span class="lab" data-r>Investors</span><p data-r><a class="ul" href="mailto:investors@synvivia.com">investors@synvivia.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Emeryville, California</div>'+
   '<div class="c"><span class="lab">Partnering</span><a class="ul" href="'+MAIL+'">partnership@synvivia.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>AAV vector manufacturing · cyclic peptide discovery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:600;font-size:64px">SYNVIVIA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Synvivia, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",platform:"platform",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Synvivia — chemical control over the cells that build gene therapy vectors",x:"Home"};
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
