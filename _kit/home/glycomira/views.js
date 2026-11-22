/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","Pre-clinical","IND","Phase 1"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   (c[7]?'':'<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span>')+'</div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'NIH-funded':(c[4]>=3?'IND accepted':'Pre-clinical'))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["From the body’s own sugars","GM-1111 belongs to a new class of innate immune modulators built on polysaccharides that occur naturally within the body: glycosaminoglycans, the basis of GlycoMira’s proprietary compounds.",'<path d="M6 34l7-4 7 4 7-4 7 4 7-4 7 4"/><circle class="f" cx="13" cy="30" r="3"/><circle class="f" cx="27" cy="30" r="3"/><circle class="f" cx="41" cy="30" r="3"/><path d="M13 30v-10M27 30v-10M41 30v-10"/>'],
  ["Acts at the earliest stage","Most oncology drugs target molecules late in disease progression. GM-1111 potently inhibits the activation of innate immune receptors at the very start, before inflammation can amplify.",'<path d="M28 46V30M28 30L18 18M28 30l10-12"/><path class="a" d="M10 12l36 0"/><circle cx="28" cy="30" r="3"/>'],
  ["Several targets at once","In the tumor microenvironment GM-1111 inhibits multiple molecular factors behind tumor growth and treatment resistance, and emerging evidence suggests it inhibits cancer stem cells.",'<circle cx="28" cy="28" r="17"/><circle cx="28" cy="28" r="6"/><path class="a" d="M28 4v10M28 42v10M4 28h10M42 28h10"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>National Institutes of Health</span><i>·</i><span>Private investors</span><i>·</i><span>US Patent No. 12,109,225</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Pre-clinical<br>evidence</span><div><dl>'+
  [["Oral mucositis","In an animal model of radiation-induced oral mucositis, GM-1111 significantly reduced the development of tongue lesions, in a dose-dependent manner"],
   ["Radiation therapy","In a mouse model of human head and neck cancer, GM-1111 with radiation produced a highly significant reduction in tumor volume versus radiation alone"],
   ["Mechanism","GM-1111 targets pattern recognition receptor-mediated inflammatory signaling, reducing the factors and immune cells tumors need to grow"],
   ["Other cancers","Pre-clinical studies suggest GM-1111 inhibits tumor growth in colorectal, renal, breast and lung cancer models"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Pulsipher et al., PLoS One, 2021; GlycoMira releases of November 2024 and February 2025. GM-1111 is an investigational drug and has not been approved by the FDA.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biopharma<span class="nomob"> · GM-1111</span> · Salt Lake City</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">From the body’s own sugars,</span><span class="l">a new way to improve</span><span class="l"><em>cancer therapy.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>GlycoMira Therapeutics is developing a new class of innate immune modulators built on polysaccharides that occur naturally in the body. Its lead, GM-1111, has FDA clearance for its first-in-human trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/pipeline">Pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">More than 80% of patients receiving chemoradiation for head and neck cancer develop severe oral mucositis, and it often forces treatment to be cut back or stopped. GlycoMira’s mission is to improve the standard of care, <em>and outcomes, for patients with cancer.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">80%+</span><p class="k">Of head and neck cancer patients develop severe oral mucositis during treatment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">70,000+</span><p class="k">New head and neck cancer cases each year in the United States</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><p class="k">FDA accepts the IND for GM-1111’s first-in-human Phase 1a trial</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How GM-1111 works</span><h2 class="d3">Stop inflammation <em>where it starts.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Damage</span><span>Amplify</span><span>Block</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Radiation damages the lining.</h2><p>Radiation and chemotherapy injure the rapidly dividing cells that line the mouth. The damaged cells release molecules that set off a toxic immune response through innate immune receptors.</p></article>'+
     '<article class="step"><h2>Inflammation amplifies.</h2><p>Activated receptors drive more inflammatory signals and draw immune cells into the tissue, destroying healthy neighboring cells until painful ulcers form: oral mucositis.</p></article>'+
     '<article class="step"><h2>GM-1111 blocks the first step.</h2><p>GM-1111 potently inhibits the activation of these innate immune receptors at the earliest stage, so inflammation cannot amplify. In pre-clinical models, lesions fell in a dose-dependent manner.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A mechanism-based, <em>multi-target drug.</em></h2></div><p data-r>Many cancers have become heterogeneous, therapy-resistant diseases with an inflammatory origin. GlycoMira’s answer is one molecule that acts on several of the factors at once, from the first step.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One lead asset, <em>two ways to help.</em></h2></div><p data-r>GM-1111 is moving into Phase 1a in combination with radiation, both to treat head and neck cancers and to protect patients from radiation-induced oral mucositis.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Glycoscience founders, <em>serial builders.</em></h2></div><p data-r>Co-founded by two leading experts in glycosaminoglycan chemistry and biology, and led by a founder whose first company reached two FDA approvals.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Awards from the National Institutes of Health, including $2.8M in 2021 to complete the pre-clinical studies for the IND, alongside private investment.</p></div>'+
    '<div><span class="lab kick" data-r>Collaboration</span><p data-r>Dr. Stephen Sonis, Professor of Oral Medicine at Harvard, joined in 2021 as a collaborator to help accelerate GM-1111 into the clinic.</p></div>'+
    '<div><span class="lab kick" data-r>Intellectual property</span><p data-r>US Patent No. 12,109,225, issued in November 2024, covers GlycoMira’s first-in-class anti-tumor therapeutic and adds to a strong IP portfolio.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Patents, papers <em>and the IND.</em></h2></div><p data-r>The latest from GlycoMira, from NIH support to FDA clearance for the clinic.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and clinicians</span>'+
   '<h2 class="big split">Talk to <em>GlycoMira.</em></h2>'+
   '<p class="sub" data-r>For investment, partnering, licensing or business development, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email GlycoMira '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>675 Arapeen Dr., Suite 302<br>Salt Lake City, UT 84108</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18019003835">+1 (801) 900-3835</a></p></div>'+
    '<div><span class="lab" data-r>Clinical stage</span><p data-r>GM-1111 cleared by the FDA for first-in-human Phase 1a trials.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>675 Arapeen Dr., Suite 302<br>Salt Lake City, UT 84108</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18019003835">+1 (801) 900-3835</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead asset</span>GM-1111 · First-in-class innate immune modulator</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:700;font-style:italic;font-size:64px">GlycoMira</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 GlycoMira Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"GlycoMira Therapeutics — glycosaminoglycan immune modulators for cancer therapy",x:"Home"};
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
