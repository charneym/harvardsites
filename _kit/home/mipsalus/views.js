/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[6]?'<a class="ul" href="'+c[6]+'" target="_blank" rel="noopener">'+esc(c[7])+' '+ARR+'</a>':esc(c[8]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Antibody-like binding sites","Template molecules are built into a polymer matrix and then washed out. The cavities they leave are complementary to the template’s shape and chemistry, so they bind it, while closely related molecules are left untouched.",'<path d="M28 6l17 10v20L28 46 11 36V16z"/><path class="a" d="M28 18l7 4v8l-7 4-7-4v-8z"/>'],
  ["Inert and non-systemic","Phelimin is taken by mouth with a meal and works solely within the stomach and intestines. It is not altered and does not react with other substances, and leaves the body with the bound amino acid, so very few side effects are expected.",'<path d="M10 14c10 0 10 10 18 10s8-10 18-10"/><path d="M10 30c10 0 10 10 18 10s8-10 18-10"/><circle class="f" cx="28" cy="24" r="3"/>'],
  ["Dosed to the meal","The effect is dose dependent. People with PKU could tailor the dose to each meal, and so eat smaller and larger meals of normal food as they please, instead of a strict lifelong low-protein diet.",'<circle cx="28" cy="28" r="17"/><circle cx="28" cy="28" r="10"/><path class="a" d="M28 4v8M28 44v8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From mipsalus.dk and ClinicalTrials.gov (NCT07927608; EU CT 2024-519121-38-01).</p></div></div>'}
function partners(){return '<div class="bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r>'+PARTNERS.map(function(p,i){return (i?'<i>·</i>':'')+'<span>'+esc(p)+'</span>'}).join("")+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Molecularly imprinted polymers<span class="nomob"> · Phenylketonuria</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Medicines that let</span><span class="l">people with PKU</span><span class="l"><em>eat normally.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MipSalus turns molecularly imprinted polymers into non-systemic drugs for metabolic orphan diseases. Our lead, Phelimin, binds phenylalanine from food in the gut, before it can reach the blood.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why PKU</span>'+
   '<h2 class="txt" id="mani">People with PKU cannot metabolise phenylalanine, found in all dietary protein, and from birth follow a strict, lifelong low-protein diet. <em>Phelimin is built to bind it in the gut, so they can eat normally.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">50,000+</span><p class="k">Diagnosed patients under 40 in North America and the EU alone</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">250</span><p class="k">Protein substitute tablets a day, at most, that people with PKU may need to take</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">EMA · FDA</span><p class="k">Orphan Drug Designation for Phelimin from both agencies</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A binding site, <em>made to measure.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Imprint</span><span>Wash</span><span>Bind</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The polymer forms around a template.</h2><p>Functional monomers organise around template molecules of phenylalanine. Polymerisation then locks them together into a solid polymer.</p></article>'+
     '<article class="step"><h2>Washing leaves the imprint.</h2><p>The polymer is milled into small particles and washed to remove the templates. What remains are cavities that match phenylalanine’s shape and chemistry.</p></article>'+
     '<article class="step"><h2>In the gut, it binds phenylalanine.</h2><p>Taken with a meal, the particles capture phenylalanine from dietary protein and carry it out of the body, while other molecules pass untouched.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Molecularly imprinted polymers, <em>as medicine.</em></h2></div><p data-r>MipSalus has invented a platform technology for multiple medicinal products, based on molecularly imprinted polymers (MIPs). Patent families cover concept, production and use, and our improvements widen what MIPs can do in medicine.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One platform, <em>four metabolic diseases.</em></h2></div><p data-r>Each programme imprints a polymer for a different molecule the body cannot handle. Phelimin, for PKU and other hyperphenylalaninemias, is entering its first study in people.</p></div>'+
   pipeRows(PIPE)+
   evid()+
   partners()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A lean team at <em>DTU Science Park.</em></h2></div><p data-r>Founded by two biochemists, MipSalus is run by a lean core organisation in Hørsholm, north of Copenhagen, working closely with research institutes, medical professionals and subcontractors.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Into <em>the clinic.</em></h2></div><p data-r>Announcements on Phelimin’s clinical path, funding and the PKU community.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">We would love to <em>speak with you.</em></h2>'+
   '<p class="sub" data-r>MipSalus is located at Agern Allé in Hørsholm, about 25 km north of Copenhagen, in DTU Science Park.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to MipSalus '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>MipSalus ApS<br>Agern Allé 3<br>DK-2970 Hørsholm, Denmark</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@mipsalus.dk</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+4536921640">+45 36 92 16 40</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Agern Allé 3, Hørsholm</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@mipsalus.dk</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>Phelimin · phenylalanine-binding polymer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Poppins\',sans-serif;font-weight:500;font-size:64px">MIPSALUS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MipSalus ApS · CVR DK 26 99 68 48</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MipSalus — polymer medicines for metabolic orphan diseases",x:"Home"};
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
