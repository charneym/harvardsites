/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["True to target","A patented, coaxially centred biopsy needle that virtually eliminates needle deflection, for consistent target accuracy in MRI–ultrasound fusion guided targeted biopsy.",'<path d="M6 46L46 10"/><circle class="a" cx="46" cy="10" r="7"/><path class="a" d="M46 1v5M46 14v5M37 10h5M50 10h5"/>'],
  ["More tissue, higher quality","Larger tissue cores that minimise fragmentation, tortuosity and crush artifact, with less sample-to-sample variability.",'<path d="M6 22h44M6 34h44"/><path class="a" d="M10 28c6-3 12 3 18 0s12-3 18 0"/>'],
  ["Touch and Go","coreCARE takes the core straight from the needle onto its cradle: minimal handling, with tissue integrity and orientation preserved.",'<path d="M6 36h44v10H6z"/><path d="M10 36v-4M16 36v-6M22 36v-4M28 36v-6M34 36v-4M40 36v-6M46 36v-4"/><path class="a" d="M12 22h32"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>In pathology</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>coreCARE compared with current tissue transfer methods, as described by URO-1. SUREcore and coreCARE are FDA-cleared for soft tissue biopsy (Urology Times, February 2026).</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>SUREcore<span class="nomob"> · Prostate biopsy instruments</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Bigger, better</span><span class="l">cores for <em>prostate</em></span><span class="l"><em>biopsy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>URO-1 makes the SUREcore biopsy needle and the coreCARE specimen cradle: true to target, with more tissue volume and higher tissue quality, to reduce diagnostic ambiguity in prostate and soft tissue biopsy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">The products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Not enough tissue and poor tissue quality can impede accurate diagnosis and genomic profiling, and lead to diagnostic delay and repeat procedures. <em>Size matters for prostate biopsy.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3,000+</span><p class="k">Prostate biopsy cores in which SUREcore and coreCARE have been clinically validated</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">72%</span><p class="k">Of SUREcore and coreCARE samples intact, against 40% with the standard of care</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12–21%</span><p class="k">More tissue volume by weight in transrectal and transperineal diagnostic biopsies</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From the target <em>to the pathologist.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Target</span><span>Stay on target</span><span>Preserve</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Find the lesion.</h2><p>In MRI–ultrasound fusion guided targeted biopsy, MRI identifies and risk-stratifies suspicious lesions, and is fused with ultrasound during the procedure to target them.</p></article>'+
     '<article class="step"><h2>Fly straight.</h2><p>A standard needle is prone to deflect. SUREcore’s patented coaxially centred needle rarely, if ever, deflects, so it stays on target and brings back more tissue.</p></article>'+
     '<article class="step"><h2>Keep the core whole.</h2><p>With coreCARE’s “Touch and Go” transfer, the core goes straight onto the cradle and stays attached, intact and oriented, all the way to pathology.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A needle that flies <em>straight every time.</em></h2></div><p data-r>The SUREcore needle and the coreCARE tissue transfer cradle work together: larger, higher-quality cores, taken on target and kept intact, simplify histologic preparation and visual analysis by pathology.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">The SUREcore platform <em>and coreCARE.</em></h2></div><p data-r>Instruments for prostate biopsy, by transrectal and transperineal approach and in targeted biopsy, with soft tissue biopsy in interventional radiology to follow.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by a survivor, <em>for better diagnosis.</em></h2></div><p data-r>URO-1 is a portfolio company of the North Carolina Biotechnology Center. Our goal is for SUREcore and coreCARE to be the standard of care for prostate and all other soft tissue biopsies.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">URO-1 <em>in the news.</em></h2></div><p data-r>Clinical adoption, our multicentre study and the story behind the company, as covered by the urology and business press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Schedule an <em>evaluation.</em></h2>'+
   '<p class="sub" data-r>For an evaluation of SUREcore and coreCARE at your practice or institution, or for company inquiries, please get in touch with our team in Greensboro.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to URO-1 '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>URO-1, Inc.<br>3703-A Alliance Dr.<br>Greensboro, NC 27407</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@uro1medical.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+13369305464">(336) 930-5464</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Greensboro, North Carolina</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@uro1medical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>SUREcore® biopsy needle · coreCARE® specimen retrieval</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 120" aria-hidden="true"><text x="380" y="104" text-anchor="middle" style="font-family:\'EB Garamond\',serif;font-weight:400;font-size:132px">URO-1</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 URO-1, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"URO-1 — SUREcore and coreCARE prostate biopsy instruments",x:"Home"};
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
