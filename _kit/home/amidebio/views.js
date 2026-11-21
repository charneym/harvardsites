/* ================= VIEWS (home only: Technology / Pipeline / Peptides / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<div class="pgh" aria-hidden="true"><span></span><div class="pgs">'+STAGES.map(function(s){return '<span class="lab">'+s+'</span>'}).join("")+'</div><span></span><span></span></div><ul class="pfr">'+PROG.map(function(c){
  var bar=c[3]==null?'<div class="pb pb-x"><span class="lab">'+esc(c[2])+'</span></div>':'<div class="pb"><i style="--w:'+c[3]+'%"></i><span class="lab">'+esc(c[2])+'</span></div>';
  var lk=c[5]?'<a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+' ↗</a>':'<span class="lab lk lk-n">'+esc(c[6])+'</span>';
  return '<li><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div>'+bar+'<p>'+esc(c[4])+'</p>'+lk+'</li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Board of Directors</span><p data-r>'+BOARD.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'<i aria-hidden="true">·</i><span>Pawel Fludzinski, PhD</span><i aria-hidden="true">·</i><span>Michael H. B. Stowell, PhD</span></p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function plat(){var C=[
  ["01","In-silico design","Advanced computational techniques to design novel peptides intelligently, and to build a robust structure-activity tree for a target.",'<path d="M28 4L50 16V40L28 52L6 40V16Z"/><circle class="a" cx="28" cy="28" r="6"/><path class="a" d="M28 4V22M50 40L33 31M6 40L23 31"/>'],
  ["02","BioPure™ process","A proprietary recombinant-chemical hybrid process: fewer batch inconsistencies, less waste, from bench-scale milligrams to multi-gram scale, for peptides of any length.",'<path d="M20 4h16M23 4v16L8 46a4 4 0 0 0 4 6h32a4 4 0 0 0 4-6L33 20V4"/><path class="a" d="M14 36h28"/><circle class="a" cx="24" cy="44" r="2.5"/><circle class="a" cx="33" cy="41" r="2"/>'],
  ["03","Rapid testing","Testing schemes that quickly assess biological activity, so the best candidates move forward toward the clinic.",'<path d="M4 46H52M4 46V6"/><path class="a" d="M8 38C16 38 18 14 26 14S36 30 42 26 48 20 52 20"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+c[0]+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Peptide therapeutics for metabolic disease<span class="nomob"> · Louisville, Colorado</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Insulin that</span><span class="l">knows <em>when</em></span><span class="l"><em>to stop.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AmideBio designs novel peptide drug candidates for diabetes in silico and makes them with its own BioPure™ process. Its lead program is an insulin that lowers glucose without the risk of hypoglycemia.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
   '<p class="lab hcap" data-r>The human insulin hexamer, atom by atom: six insulin molecules around two zinc ions (PDB 1ZNJ).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">For people living with diabetes, too much insulin can be as dangerous as too little. AmideBio designs peptides that <em>lower glucose and guard against the fall.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">20–25%</span><span class="k">Of people with type 1 diabetes live with impaired awareness of hypoglycemia</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.93M</span><span class="k">Direct-to-Phase 2 SBIR grant from the NIDDK for the dual agonist insulin, 2024</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;99%</span><span class="k">Purity of BioPure peptides, where other manufacturers strive for 97%</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Since 2009</span><p data-r>Founded in Colorado to commercialize the BioPure platform; developing its own therapeutics for metabolic disease since 2016.</p></div>'+
    '<div><span class="lab kick" data-r>Diabetes drug developers</span><p data-r>Led by veterans of insulin and peptide research and development at Eli Lilly and Amgen, with the University of Colorado Boulder.</p></div>'+
    '<div><span class="lab kick" data-r>Built to partner</span><p data-r>The goal is to license drug candidates at or before the Investigational New Drug (IND) stage, backed by a strong IP position.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology · dual agonist insulin</span><h2 class="d3">One molecule, <em>both signals.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Insulin</span><span>Overdose</span><span>Dual agonist</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Insulin brings glucose down.</h2><p>After a meal, regular insulin moves glucose out of the blood and returns it to the normal range. The dose has to be right: insulin keeps working whether glucose needs lowering or not.</p></article>'+
     '<article class="step"><h2>Too much, and nothing warns you.</h2><p>With impaired awareness of hypoglycemia (IAH), symptoms only start when glucose is very low, often after thinking is impaired. It affects 20–25% of people with type 1 diabetes and 10% of insulin-treated type 2.</p></article>'+
     '<article class="step"><h2>Glucagon, built into the insulin.</h2><p>AmideBio’s dual agonist insulin-glucagon biologic is designed to act like regular insulin, but without the risk of hypoglycemia if an overdose occurs: in essence, a molecular artificial pancreas.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Five programs, <em>one disease area.</em></h2></div><p data-r>A preclinical pipeline of insulins and glucagons for metabolic disease, funded in part by the National Institute of Diabetes and Digestive and Kidney Diseases.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec dark" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Peptides · BioPure™</span><h2 class="d2 split">Difficult peptides, <em>made pure.</em></h2></div><p data-r>The same platform that builds AmideBio’s pipeline supplies researchers: custom synthesis, and a catalog of peptides made under U.S. Patent No. 8,796,431, for research use only.</p></div>'+
   plat()+
   '<div class="svc">'+
    '<div><span class="lab kick" data-r>Custom synthesis</span><p data-r>High purity, low cost peptides and peptide libraries designed and made to order, including insulins and glucagons.</p></div>'+
    '<div><span class="lab kick" data-r>Peptide catalog</span><p data-r>Insulins, proinsulins, oxyntomodulin, amyloid peptides, Bowman-Birk inhibitors and more, consistently above 99% purity.</p><a class="lab ul lk" href="'+WEB+'shop/" target="_blank" rel="noopener">Browse the catalog ↗</a></div>'+
    '<div><span class="lab kick" data-r>Orders and quotes</span><p data-r><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a></p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades of diabetes <em>drug development.</em></h2></div><p data-r>Peptide chemists, molecular biologists and drug developers from Eli Lilly, Amgen and the University of Colorado Boulder.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded by the NIH, <em>year after year.</em></h2></div><p data-r>Grants from the NIDDK and FDA designations have carried AmideBio’s programs toward the clinic.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and researchers</span>'+
   '<h2 class="big split">Partner on a safer <em>insulin.</em></h2>'+
   '<p class="sub" data-r>AmideBio works from Louisville, Colorado. To talk about licensing a program, a partnership, or peptides for your research, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="tel:+13036040296">'+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>AmideBio, LLC<br>331 South 104th Street<br>Louisville, CO 80027-9713</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+13036040296">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>331 South 104th Street<br>Louisville, Colorado 80027</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/peptides">Peptides</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SALES+'">'+SALES+'</a><br><a class="ul" href="tel:+13036040296">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Novel peptides targeting<br>metabolic disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Questrial\',system-ui,sans-serif;font-weight:400;font-size:70px;letter-spacing:.16em">AMIDEBIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AmideBio, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",peptides:"platform",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AmideBio — novel peptides targeting metabolic disease, Louisville, Colorado",x:"Home"};
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
