/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rg-tm">'+gs.map(function(g){return '<div class="rg-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul>'+by[g].map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span>'+(p.sum?'<p class="kl-sum">'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["The target","TG2","Transglutaminase 2 crosslinks matrix proteins like a glue and activates key fibrotic growth factors. Crosslinked tissue resists remodelling, so normal repair is compromised and scar builds up.",'<path d="M6 18c12-6 32-6 44 0"/><path d="M6 38c12 6 32 6 44 0"/><path class="a" d="M18 20l-3 4 3 4-3 4 3 4M28 21l-3 4 3 4-3 4 3 4M38 20l-3 4 3 4-3 4 3 4"/>'],
  ["The modality","Oral small molecules","Through a £2.1 million MRC DPFS research programme, the team developed a new series of TG2 inhibitors with good druggable properties and real potential as an oral treatment.",'<path d="M28 8l17 10v20L28 48 11 38V18z"/><path class="a" d="M28 18l8.7 5v10L28 38l-8.7-5V23z"/><circle class="f" cx="28" cy="28" r="2.6"/>'],
  ["The platform","Many fibrotic diseases","Crosslinked matrix is a hallmark of fibrostenosing Crohn’s disease, cardiac fibrosis, chronic kidney disease and idiopathic pulmonary fibrosis: one mechanism, many chronic, life-limiting conditions.",'<circle cx="16" cy="16" r="7"/><circle cx="40" cy="16" r="7"/><circle cx="16" cy="40" r="7"/><circle cx="40" cy="40" r="7"/><circle class="f" cx="28" cy="28" r="3.4"/><path class="a" d="M21 21l4.5 4.5M35 21l-4.5 4.5M21 35l4.5-4.5M35 35l-4.5-4.5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function partners(){return '<div class="kl-pa"><span class="lab kick" data-r>Supported by</span><ul data-r>'+PARTNERS.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function invest(){return '<div class="rg-co">'+
  '<div class="rg-cc"><span class="lab kick" data-r>Lead programme</span><h3 data-r>Fibrostenosing Crohn’s disease</h3><p data-r>Our lead programme addresses a clear opportunity for a fibrosis-modifying medicine.</p>'+
   '<ul data-r><li>A large, underserved global market</li><li>A clear biological mechanism</li><li>A high-value inflection point at IND</li><li>Strong interest from pharma in fibrosis-modifying assets</li></ul></div>'+
  '<div class="rg-cc"><span class="lab kick" data-r>Opportunities</span><h3 data-r>We welcome discussions</h3><p data-r>With investors and partners interested in a first-in-class oral TG2 inhibitor platform. Kleis is SEIS and EIS eligible.</p>'+
   '<ul data-r><li>Pre-Series A opportunities</li><li>Strategic partnerships</li><li>Co-development or licensing pathways</li><li>SEIS and EIS eligible</li></ul>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'?subject=Investment%20enquiry">Investment enquiries '+ARR+'</a></div></div>'+
  '</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Kleis Therapeutics<span class="nomob"> · Birmingham, UK</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treating fibrotic</span><span class="l">disease, <em>restoring</em></span><span class="l"><em>organ function.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Kleis develops oral therapies that stop fibrosis at its source: small-molecule inhibitors of TG2, the enzyme that crosslinks tissue into scar the body cannot break down.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why fibrosis</span>'+
   '<h2 class="txt" id="mani">Proteins crosslinked by TG2 resist natural breakdown and build up in tissue. For patients with these diseases the outlook is surgery, or organ failure leading to transplant or death. <em>Kleis is working towards a future where fibrosis can be reversed.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">£2.1M</span><p class="k">MRC DPFS research programme behind Kleis’s new series of TG2 inhibitors</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">£328k</span><p class="k">Innovate UK project on an oral TG2 inhibitor for pulmonary fibrosis, 2025–2027</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">Publications by founder Prof. Martin Griffin, over four decades of transglutaminase research</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Fibrosis, stopped <em>at its source.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Renew</span><span>Crosslink</span><span>Inhibit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A matrix that renews itself.</h2><p>In healthy tissue, the extracellular matrix is constantly broken down and replaced, so organs keep their shape and their function.</p></article>'+
     '<article class="step"><h2>TG2 glues it in place.</h2><p>The enzyme TG2 crosslinks matrix proteins like a glue. Crosslinked tissue resists natural breakdown and builds up as scar, a hallmark of fibrotic disease.</p></article>'+
     '<article class="step"><h2>An oral TG2 inhibitor.</h2><p>Kleis’s small-molecule inhibitors block TG2, aiming to stop the crosslinking at its source and let tissue return to healthy turnover.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">One enzyme behind <em>many fibroses.</em></h2></div><p data-r>Fibrosis drives many chronic, life-limiting diseases, affecting hundreds of millions of people worldwide. Kleis targets the process itself, building on nearly six decades of world-leading experience in TG2.</p></div>'+
   caps()+partners()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">A first-in-class <em>TG2 platform.</em></h2></div><p data-r>A lead programme in fibrostenosing Crohn’s disease, a funded project in idiopathic pulmonary fibrosis, and an oral inhibitor platform with the potential to reach further fibrotic diseases.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades of <em>TG2 research.</em></h2></div><p data-r>Founded by transglutaminase researchers and led by an experienced technology-transfer and spinout team, building on nearly six decades of world-leading experience in TG2.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="investors" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investors</span><h2 class="d2 split">Built to <em>transform treatment.</em></h2></div><p data-r>Kleis Therapeutics is developing a first-in-class TG2 inhibitor platform with the potential to transform treatment across multiple fibrotic diseases.</p></div>'+
   invest()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Towards fibrosis that <em>can be reversed.</em></h2>'+
   '<p class="sub" data-r>For investment information, partnerships, licensing or research collaboration, our team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Kleis '+ARR+'</a><a class="btn" href="#/investors">For investors</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Kleis Therapeutics Ltd<br>Birmingham B4 7ET, UK</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@kleistherapeutics.co.uk</a></p></div>'+
    '<div><span class="lab" data-r>Investors</span><p data-r>Pre-Series A<br>SEIS and EIS eligible</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Birmingham, United Kingdom</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@kleistherapeutics.co.uk</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/investors">Investors</a></div>'+
   '<div class="c"><span class="lab">Supported by</span>Innovate UK and UKRI MRC</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Oswald\',sans-serif;font-weight:500;font-size:60px">KLEIS THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kleis Therapeutics Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",pipeline:"pipeline",team:"team",investors:"investors",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kleis Therapeutics — oral TG2 inhibitors for fibrotic disease",x:"Home"};
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
