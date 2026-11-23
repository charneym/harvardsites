/* ================= VIEWS (home only: Approach / Beta-cell health / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function props(){return '<ul class="pfr">'+PROPS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function acts(){return '<ul class="pfr acts">'+ACTS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3></div><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function people(lbl,a){return '<div class="mh-group"><p class="mh-label">'+esc(lbl)+'</p><ul class="mh-list">'+a.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div>'}
function team(){return '<div class="mh">'+people("Management team",MGMT)+people("Technical delivery team",TECH)+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={design:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 30C10 22 14 22 16 26S22 30 24 22 30 12 34 10"/><circle cx="6" cy="30" r="2.6"/><circle cx="16" cy="26" r="2.6"/><circle cx="24" cy="22" r="2.6"/><circle cx="34" cy="10" r="2.6"/></svg>',
 target:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 31H36"/><path d="M14 31V22M14 22L9 15M14 22L19 15"/><path d="M27 31V22M27 22L22 15M27 22L32 15"/><circle cx="27" cy="10" r="3"/></svg>',
 cell:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5L32 11.5V26.5L20 34L8 26.5V11.5Z"/><circle cx="20" cy="19.5" r="4.6"/><circle cx="13.5" cy="25" r="1.2"/><circle cx="26.5" cy="13.5" r="1.2"/><circle cx="26" cy="25.5" r="1.2"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Peptide therapeutics<span class="nomob"> · Coleraine, Northern Ireland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Treating metabolic</span><span class="l">disease progression,</span><span class="l"><em>rather than symptoms.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We develop peptide therapeutics that act on the insulin-producing beta-cell, to halt the progressive decline of type 2 diabetes and obesity, with more sustainable, quality weight loss.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">Our approach '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>A helical peptide, rendered. Illustrative, not a DBL candidate.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our vision</span>'+
   '<h2 class="txt" id="mani">Current medicines can manage blood glucose in the short term. <em>None of them slows or prevents the progressive loss of insulin-producing beta-cells.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">537<small>M</small></span><p class="k">Adults living with diabetes worldwide, predicted to reach 642 million by 2040</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90<small>%</small></span><p class="k">Of cases worldwide are type 2 diabetes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$966<small>bn</small></span><p class="k">The global cost of diabetes in 2021, over 80% of it from avoidable complications</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.design+'</span><span class="lab kick" data-r>'+PILL[0][0]+'</span><p data-r>'+PILL[0][1]+'</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.target+'</span><span class="lab kick" data-r>'+PILL[1][0]+'</span><p data-r>'+PILL[1][1]+'</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.cell+'</span><span class="lab kick" data-r>'+PILL[2][0]+'</span><p data-r>'+PILL[2][1]+'</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Beta-cell rescue</span><h2 class="d3">Rest, restore <em>and rebuild the islet.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Rest</span><span>Function</span><span>Mass</span><span>Structure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Rest the beta-cells.</h2><p>In type 2 diabetes, beta-cells are forced to work ever harder until they burn out. Our peptides act at receptors on the beta-cell surface, preventing further burnout of a dwindling cell mass.</p></article>'+
     '<article class="step"><h2>Improve their function.</h2><p>Rested beta-cells rebuild their releasable insulin stores, and overall sensitivity improves.</p></article>'+
     '<article class="step"><h2>Increase cell mass.</h2><p>The candidates promote beta-cell proliferation, reduce apoptosis and improve beta-cell identity, so lost cells are replaced.</p></article>'+
     '<article class="step"><h2>Reverse the decline.</h2><p>In rodent models, 28 days of treatment with a DBL peptide returned distorted islets to their normal, circular, pre-diabetic structure: true disease modification.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our approach</span><h2 class="d2 split">Nature’s activators, <em>re-engineered.</em></h2></div><p data-r>When a receptor of interest is identified, we intensively study its natural, hormonal activator and reverse-engineer it to improve its therapeutic potential. Candidates then pass through our discovery platform of industry-standard techniques and models to find lead compounds.</p></div>'+
   props()+
   '<div class="bk"><span class="lab kick" data-r>Pipeline</span><p class="cr" data-r><span>Three therapeutic peptides progressing through preclinical development in tandem; the lead programme is in IND-enabling toxicology.</span></p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Origin</span><p class="cr" data-r><span>The official commercial vehicle of the Diabetes Research Group at Ulster University, Coleraine</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="science" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Beta-cell health</span><h2 class="d2 split">Protect the cells <em>that make insulin.</em></h2></div><p data-r>Insulin is released from beta-cells in the pancreatic islets. As type 2 diabetes progresses, beta-cells work ever harder until they burn out and die, and current medications do not address that decline, so many patients ultimately need insulin. Our candidates act at previously untapped receptors on the beta-cell surface to prevent and reverse it.</p></div>'+
   acts()+
   '<div class="bk"><span class="lab kick" data-r>Validated in</span><p class="cr" data-r><span>Cellular models of diabetes</span><i aria-hidden="true">·</i><span>Rodent models of diabetes</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Over 100 years <em>of drug discovery.</em></h2></div><p data-r>A spin-out of Ulster University’s Diabetes Research Group, founded in 2022 on more than 30 years of translational research, with a team of extensive scientific and commercial experience.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Scientific committee</span><p class="cr" data-r>'+lst(SCI)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Seed investors</span><p class="cr" data-r>'+lst(INV)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Ulster’s labs <em>toward the clinic.</em></h2></div><p data-r>The AIMS Summit 2026 Shark Tank, a €1.4M raise, an MBE for Prof. Peter Flatt, and overall victory at INVENT 2024.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and scientists</span>'+
   '<h2 class="big split">Science is <em>a collaborative effort.</em></h2>'+
   '<p class="sub" data-r>To learn more about our technology, discuss collaboration or join our team, write to us. We would be delighted to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Dia Beta Labs '+ARR+'</a><a class="btn" href="#/approach">See our approach</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Postal address</span><p data-r>Dia Beta Labs Ltd<br>4 Murray House, Murray Street<br>Belfast BT1 6DN</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Laboratories</span><p data-r>Diabetes Research Group, Ulster University, Coleraine</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Dia Beta Labs Ltd<br>4 Murray House, Murray Street<br>Belfast BT1 6DN</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/beta-cell-health">Beta-cell health</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Peptide therapeutics for<br>type 2 diabetes and obesity</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="68" text-anchor="middle" style="font-family:\'Roboto Slab\',Georgia,serif;font-weight:600;font-size:84px;letter-spacing:-.01em"><tspan fill="#f2f6f6">Dia Beta</tspan><tspan fill="#43b9c1" dx="22" style="font-family:\'Open Sans\',sans-serif;font-weight:500;font-size:40px;letter-spacing:.3em">LABS</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Dia Beta Labs Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"approach","beta-cell-health":"science",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Dia Beta Labs — treating metabolic disease progression, rather than symptoms",x:"Home"};
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
