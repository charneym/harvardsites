/* ================= VIEWS (home only: Technology / Pipeline / Team / Instruments / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function progs(L){return '<ul class="pfr">'+(L||PROG).map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Non-opioid analgesics<span class="nomob"> · Redwood City, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Life-changing medicines</span><span class="l"><em>for pain and epilepsy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>AfaSci is a clinical-stage Bay Area biotech. Its lead, AFA-281, is one oral molecule that inhibits both T-type calcium channels and soluble epoxide hydrolase, and it has completed Phase I trials.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>The human T-type calcium channel Cav3.1, atom by atom (PDB 6KZO, cryo-EM), pore-lining atoms in gold. AFA-281 inhibits the Cav3 family.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Fewer than half of patients with chronic pain respond to current treatments, and many turn to opioids. AfaSci treats pain with one molecule aimed at two targets: <em>a nerve channel and an inflammatory enzyme.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100M</span><span class="k">People in the US affected by chronic pain; seizures affect about 4 million more</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">16</span><span class="k">Countries with issued composition-of-matter patents, assigned to AfaSci Therapeutics</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">81</span><span class="k">Off-targets screened; AFA-281 inhibits them 50 to 500 times more weakly</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Non-opioid, non-steroidal</span><p data-r>A new chemical entity with a novel mechanism, differentiated from current pain medicines and from other drugs in development.</p></div>'+
    '<div><span class="lab kick" data-r>Phase I complete</span><p data-r>No serious adverse events, and dosing reached the predicted human therapeutic range. The Phase II design and protocol for neuropathic pain are ready.</p></div>'+
    '<div><span class="lab kick" data-r>Self-sustained</span><p data-r>NIH funding and AfaSci’s own research tools and services business have carried the company for two decades.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">One molecule, <em>two targets.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Channel</span><span>Enzyme</span><span>AFA-281</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Nerves on overdrive.</h2><p>Tissue and nerve injury trigger inflammation and neuronal hyperexcitability. Cav3.2 T-type calcium channels in sensory nerves are upregulated and overactive, which worsens pain and touch sensitivity.</p></article>'+
     '<article class="step"><h2>Inflammation that feeds itself.</h2><p>Soluble epoxide hydrolase (sEH) breaks down the body’s own anti-inflammatory mediators, epoxy-fatty acids, into inflammatory diols.</p></article>'+
     '<article class="step"><h2>One pill, both targets.</h2><p>AFA-281 potently inhibits both Cav3.2 and sEH. In rodents it produces non-opioid analgesia and anti-inflammatory effects. As a single molecule, it could spare patients the pill burden and drug interactions of taking two.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One lead, <em>a rich pipeline.</em></h2></div><p data-r>AFA-281 leads in chronic neuropathic pain and epilepsy, with follow-on molecules for epilepsy, inflammatory and localized pain, and Alzheimer’s disease.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug discovery <em>meets pain medicine.</em></h2></div><p data-r>A multidisciplinary team that has run phenotypic drug discovery in house, advised by professors of anesthesiology and pain medicine.</p></div>'+
   team()+
   '<div class="adv"><span class="lab kick" data-r>Advisors</span><p data-r>'+ADV.map(function(a){return '<span>'+esc(a[0])+' <i>'+esc(a[1])+'</i></span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="instruments" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Instruments and services</span><h2 class="d2 split">Tools built <em>for our own lab.</em></h2></div><p data-r>AfaSci built its own instruments for in vivo drug screening and offers them, with electrophysiology and behavioural assay services, to the research community.</p></div>'+
   progs(INS)+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the clinic <em>and the NIH.</em></h2></div><p data-r>AfaSci’s programmes are supported by Small Business Innovation Research awards from NINDS, NIAAA and NIDA.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and researchers</span>'+
   '<h2 class="big split">Toward Phase II, <em>together.</em></h2>'+
   '<p class="sub" data-r>AfaSci is seeking investment and partnering or out-licensing to take AFA-281 into Phase II proof-of-concept studies. For quotes on instruments and services, write to the same address.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>AfaSci, Inc.<br>Redwood City, California</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+14154804138">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Redwood City,<br>California</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/instruments">Instruments</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14154804138">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Non-opioid medicines<br>for pain and epilepsy</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="76" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-style:italic;font-weight:400;font-size:96px;letter-spacing:-.02em"><tspan fill="#eef4f8">Afa</tspan><tspan fill="#a8d1e7">Sci</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AfaSci, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",instruments:"instruments",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"AfaSci — non-opioid medicines for pain and epilepsy, Redwood City",x:"Home"};
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
