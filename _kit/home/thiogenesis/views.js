/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function newsUnused(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A prodrug, not a reformulation","TTI-0102 is a patented new chemical entity: a cysteamine-pantetheine mixed disulfide, converted in the gut into two molecules of cysteamine and one of pantothenic acid (vitamin B5).",'<circle cx="18" cy="28" r="9"/><circle cx="40" cy="28" r="9"/><path class="a" d="M27 28h4"/><circle class="f" cx="29" cy="28" r="2.6"/>'],
  ["Released continuously","It delivers cysteamine over time for a flatter pharmacokinetic profile, avoiding the sharp spike that drives GI side effects and body odour with current treatments.",'<path d="M6 46h44M6 46V8"/><path d="M8 44C12 40 13 14 17 14S22 40 28 44" stroke-dasharray="2 3"/><path class="a" d="M8 40C16 28 22 26 30 26S44 28 50 30"/>'],
  ["Once a day, as a powder","A water-soluble oral powder with no enteric coating, designed for once-daily dosing in place of a daily regimen of multiple capsules.",'<path d="M16 22h24l-3 24H19z"/><path d="M14 22h28"/><path class="a" d="M22 34c4-3 8 3 12 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Phase 1, healthy volunteers</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Dose-escalation trial of TTI-0102 against generic cysteamine, as reported on thiogenesis.com.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+NR+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Release (PDF) '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biopharma<span class="nomob"> · TSXV: TTI · OTCQB: TTIPF</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Cysteamine,</span><span class="l"><em>without the spike.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Thiogenesis is developing TTI-0102, a patented cysteamine prodrug designed for once-daily dosing, for nephropathic cystinosis and mitochondrial disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Thiols for inherited disease</span>'+
   '<h2 class="txt" id="mani">Cysteamine works. It has been approved twice for cystinosis. <em>The burden of taking it is what TTI-0102 is designed to remove.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">24h+</span><p class="k">Therapeutic cysteamine levels after a single dose in Phase 1, the basis for once-daily dosing</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4&#215;</span><p class="k">The standard 600 mg cysteamine dose reached in Phase 1, with no GI side effects reported</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">75,000</span><p class="k">Estimated U.S. patients with primary mitochondrial disease, the wider family beyond Leigh syndrome</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the cell</span><h2 class="d3">From the lysosome <em>to the mitochondrion.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Trapped</span><span>Released</span><span>Cleared</span><span>Restored</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cystine, trapped.</h2><p>In nephropathic cystinosis, mutations in the CTNS gene disable cystinosin, the lysosome&#8217;s cystine exporter. Cystine builds up inside the cell and progressively damages the kidneys.</p></article>'+
     '<article class="step"><h2>Cysteamine, steadily.</h2><p>TTI-0102 is converted in the gut into two molecules of cysteamine and one of vitamin B5, and releases cysteamine continuously instead of in one sharp spike.</p></article>'+
     '<article class="step"><h2>Cystine, cleared.</h2><p>Cysteamine depletes the toxic cystine stored in the lysosome, the effect behind both approved cysteamine drugs, measured in white blood cells as the surrogate endpoint.</p></article>'+
     '<article class="step"><h2>Redox, restored.</h2><p>Cysteamine raises intracellular cysteine, the rate-limiting precursor of glutathione, and is metabolised into taurine and coenzyme A, defending mitochondria from oxidative damage.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A next-generation <em>cysteamine prodrug.</em></h2></div><p data-r>Cysteamine is a thiol studied for decades for its antioxidant, anti-inflammatory and mitochondrial-protective properties. Its reach has been limited by a short half-life, GI side effects and body odour. TTI-0102 keeps the biology and changes the delivery.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One molecule, <em>four rare diseases.</em></h2></div><p data-r>TTI-0102 is in late-stage development for nephropathic cystinosis and holds an FDA-cleared IND in Leigh syndrome spectrum. As a prodrug it is eligible for the expedited 505(b)(2) pathway in the U.S. and its hybrid equivalent in Europe.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people who <em>approved Procysbi.</em></h2></div><p data-r>A leadership team experienced in orphan drug development, including the CEO and Chairman behind the U.S. and European approval of delayed-release cysteamine for cystinosis, with advisors from Stanford, MIT and Michigan State.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Thiogenesis.</em></h2></div><p data-r>Company news releases. The full archive, financial statements and AGM materials are on the investor page and SEDAR+.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Patients, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>Thiogenesis.</em></h2>'+
   '<p class="sub" data-r>Operations are based in San Diego, California, and the corporate head office in Toronto. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Operations</span><p data-r>San Diego, California<br>USA</p></div>'+
    '<div><span class="lab" data-r>Corporate office</span><p data-r>4 King Street West, Suite 401<br>Toronto, Ontario M5H 1B6</p></div>'+
    '<div><span class="lab" data-r>General inquiries</span><p data-r><a class="ul" href="'+MAIL+'">info@thiogenesis.com</a><br><a class="ul" href="tel:+18882239165">(888) 223-9165</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Operations</span>San Diego, California<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@thiogenesis.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Listed</span>TSXV: TTI · OTCQB: TTIPF</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:600;font-size:64px">THIOGENESIS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Thiogenesis Therapeutics, Corp.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Thiogenesis Therapeutics — cysteamine, re-engineered",x:"Home"};
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
