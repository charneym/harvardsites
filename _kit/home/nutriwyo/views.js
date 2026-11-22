/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","Pre-clinical","IND","Clinical"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   (c[7]?'':'<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span>')+'</div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Services':'Pre-clinical')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Target the protease","Chronic diabetic wounds are highly proteolytic. Cathepsin K, the most potent collagen-degrading enzyme known in mammals, is raised in diabetic skin while collagen is lowered.",'<path d="M8 40c8-6 14-6 20 0s12 6 20 0"/><path d="M8 28c8-6 14-6 20 0s12 6 20 0"/><path class="a" d="M22 10l12 36M34 10L22 46"/>'],
  ["Repurpose a known inhibitor","Nutriwyo uses a potent and selective cathepsin K inhibitor that has already been through clinical trials for another application, given by intradermal injection into the wound.",'<circle cx="28" cy="28" r="17"/><path d="M28 11v34"/><path class="a" d="M17 28h22"/>'],
  ["Prove it where it counts","Efficacy is tested in a translationally relevant diabetic pig model of wound healing, measuring wound closure, new skin cover, collagen and blood-vessel growth.",'<path d="M8 44h40"/><path d="M14 44V30M24 44V22M34 44V16"/><path class="a" d="M44 44V8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk light-bk"><span class="lab kick" data-r>Funding and collaborators</span><p class="cr" data-r><span>NIH · NIDDK (STTR Phase I)</span><i>·</i><span>University of Wyoming</span><i>·</i><span>University of Colorado Anschutz Medical Campus</span></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Pre-clinical<br>evidence</span><div><dl>'+
  [["Diabetic pigs","Odanacatib, a cathepsin K inhibitor, given by intradermal injection significantly accelerated wound closure, promoting epithelialization and extracellular-matrix stability"],
   ["Diabetic mice","Mice without the cathepsin K gene healed better than wild-type controls after diabetes was induced"],
   ["Skin cells","Under high-glucose conditions, odanacatib increased the migration of cultured skin fibroblasts and keratinocytes"],
   ["A first","The first study to show that inhibiting cathepsin K, genetically or pharmacologically, improves diabetic wound healing"]].map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Chenchar et al., ACS Pharmacology &amp; Translational Science, 2025 (with Nutriwyo, the University of Wyoming, the University of Colorado and the University of Arizona). Investigational; not approved by the FDA for wound healing.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Wound-healing therapeutics<span class="nomob"> · NIH-funded</span> · Laramie, Wyoming</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Helping diabetic</span><span class="l">wounds <em>heal again.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Nutriwyo is developing a new treatment for diabetic foot ulcers: blocking cathepsin K, the body’s most potent collagen-degrading enzyme, so a stalled wound can rebuild and close.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/mechanism">How it works '+ARR+'</a><a class="btn" href="#/science">The science</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Diabetic foot ulcers are the major cause of amputations in the United States, yet there are few effective drugs to treat them. Nutriwyo was founded to change people’s lives, <em>starting with wounds that will not heal.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.6M</span><p class="k">People in the United States living with a diabetic foot ulcer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$15B</span><p class="k">Approximate annual cost of treating diabetic foot ulcers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~25%</span><p class="k">Of people with diabetes are affected by non-healing wounds</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the approach works</span><h2 class="d3">Protect the collagen, <em>let it close.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Wound</span><span>Breakdown</span><span>Repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A wound that stalls.</h2><p>In diabetes, a wound can sit open for months. Its environment is highly proteolytic: enzymes keep breaking down the extracellular matrix faster than the body can lay it down.</p></article>'+
     '<article class="step"><h2>Cathepsin K cuts the scaffold.</h2><p>Cathepsin K is the most potent collagen-degrading enzyme known in mammals. Diabetic skin carries more of it and less collagen, so new tissue has nothing stable to grow on.</p></article>'+
     '<article class="step"><h2>Block it, and the skin rebuilds.</h2><p>A selective cathepsin K inhibitor keeps the collagen intact. In diabetic pigs, wounds closed faster, with new skin cover and a stable matrix beneath it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">A known inhibitor, <em>a new use.</em></h2></div><p data-r>There are few approved agents that effectively help diabetic wounds heal. Nutriwyo’s strategy is pharmacological: stop the runaway breakdown of collagen in the wound, with a drug whose safety has already been studied in people.</p></div>'+
   caps()+
   backers()+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Therapeutics, and <em>the research behind them.</em></h2></div><p data-r>Nutriwyo works in two areas: developing new therapeutics for diabetic foot ulcers, and serving the health and nutraceutical industry as a preclinical and clinical research organization.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From pharmacy <em>to wound surgery.</em></h2></div><p data-r>Founded by a board-certified geriatric pharmacist, with a pharmacology professor as co-founder and wound-healing surgeons and large-animal experts as advisors and collaborators.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>A Phase I STTR grant from NIH-NIDDK (1R41DK125213) to test the cathepsin K inhibitor in a porcine model of diabetic wound healing.</p></div>'+
    '<div><span class="lab kick" data-r>Collaboration</span><p data-r>Research with the University of Wyoming and the wound-healing laboratory of the University of Colorado Anschutz Medical Campus.</p></div>'+
    '<div><span class="lab kick" data-r>From the founder</span><p data-r>“At Nutriwyo we strive to bridge the gap between innovative science and chronic care for older adults.” Rama Nair, CEO</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, grants <em>and milestones.</em></h2></div><p data-r>The latest from Nutriwyo, from NIH support to the first published evidence for cathepsin K as a wound-healing target.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and industry</span>'+
   '<h2 class="big split">Talk to <em>Nutriwyo.</em></h2>'+
   '<p class="sub" data-r>For partnering, licensing, investment or research services for your product, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Nutriwyo '+ARR+'</a><a class="btn" href="#/programs">Our programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Wyoming Technology Business Center<br>1938 E. Harney St, Suite 210<br>Laramie, WY 82072</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13073998760">+1 (307) 399-8760</a></p></div>'+
    '<div><span class="lab" data-r>Focus</span><p data-r>Preclinical and early-stage clinical drug development for chronic ailments.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>1938 E. Harney St, Suite 210<br>Laramie, WY 82072</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13073998760">+1 (307) 399-8760</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead program</span>Cathepsin K inhibition · diabetic foot ulcers</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="60" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:900;font-style:italic;font-size:64px">NUTRIWYO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Nutriwyo LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Nutriwyo — a new treatment for diabetic wounds",x:"Home"};
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
