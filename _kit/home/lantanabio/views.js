/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var G=[];TEAM.forEach(function(p){if(G.indexOf(p.g)<0)G.push(p.g)});
  return '<div class="mh">'+G.map(function(g){return '<div class="mh-group"><p class="mh-label" data-r>'+esc(g)+'</p><ul class="mh-list">'+TEAM.filter(function(p){return p.g===g}).map(function(p){
    return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Brewed, not farmed","Plants hold these compounds at milligrams per kilogram, so extraction needs arable land, water, agrochemicals, transport and processing. Lantana replaces it with fermentation, similar to brewing beer.",'<path d="M16 8h24M19 8v12L9 46a4 4 0 0 0 4 5h30a4 4 0 0 0 4-5L37 20V8"/><path class="a" d="M13 38h30"/><circle class="f" cx="24" cy="44" r="2.4"/><circle class="f" cx="33" cy="42" r="1.8"/>'],
  ["The missing piece, found","A key plant enzyme had kept the anthocyanin pathway from working in micro-organisms. Lantana’s founders found the missing piece and filed a patent; a 2023 paper in Nature Catalysis describes its role.",'<path d="M28 6l19 11v22L28 50 9 39V17z"/><path class="a" d="M28 15l11 6.5v13L28 41l-11-6.5v-13z"/>'],
  ["A safe, familiar host","Baker’s yeast, Saccharomyces cerevisiae, has fermented bread, beer and wine for centuries and has GRAS status. Lantana’s process removes any trace of yeast, so the product is a natural ingredient.",'<ellipse cx="23" cy="32" rx="15" ry="13"/><ellipse class="a" cx="41" cy="18" rx="7.5" ry="6.5"/><circle cx="21" cy="33" r="4.5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function backers(){return '<div class="bk"><span class="lab kick" data-r>Supported by</span><div><p class="cr" data-r><span>Toulouse White Biotechnology</span><i>·</i><span>Biotope by VIB</span><i>·</i><span>European Union, Horizon Europe</span><i>·</i><span>Bpifrance</span><i>·</i><span>France 2030</span><i>·</i><span>AD’OCC Région Occitanie</span></p>'+
  '<p class="note-s" data-r>Lantana joined Toulouse White Biotechnology in 2021 and the Biotope by VIB incubation programme in 2024, with a €250,000 investment. It is a partner in two Horizon Europe projects: deCYPher, from 2023, and the UPsYDe doctoral network, from 2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Bioactive aromatic compounds<span class="nomob"> · Toulouse</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The art of</span><span class="l">sustainable</span><span class="l"><em>brewing.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Lantana Bio engineers baker’s yeast to make anthocyanins, the natural pigments behind the reds, purples and blues of flowers and berries, by precision fermentation, at levels generally 100 to 1,000 times higher than in plants.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Lantana</span>'+
   '<h2 class="txt" id="mani">Lantana takes its name from Lantana camara, whose flower colours come from flavonoids and anthocyanins. <em>We now make those bright molecules by precision fermentation of yeast.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2019</span><p class="k">Founded, with a patent-pending pathway, and based in Toulouse</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">GRAS</span><p class="k">Status of baker’s yeast, the organism Lantana engineers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Horizon Europe projects with Lantana as a partner</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From sugar <em>to colour.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Brew</span><span>Build</span><span>Purify</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Yeast is fed, as in brewing.</h2><p>Cultures of baker’s yeast ferment simple sugars in tanks, a process much like brewing beer, instead of relying on fields of plant raw material.</p></article>'+
     '<article class="step"><h2>Plant genes build the pigment.</h2><p>Inside each cell, an engineered plant pathway turns the aromatic amino acids phenylalanine and tyrosine into flavonoids, then anthocyanins.</p></article>'+
     '<article class="step"><h2>Purified, with no yeast left.</h2><p>The pigment is purified and every trace of yeast removed, giving a natural ingredient at levels generally 100 to 1,000 times higher than in plants.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Plant compounds, <em>made by yeast.</em></h2></div><p data-r>Lantana engineers single-cell organisms, notably baker’s yeast, to produce bioactive plant compounds. Its focus is the aromatic compounds derived from phenylalanine and tyrosine, including the flavonoids and anthocyanins.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Natural ingredients, <em>for partners.</em></h2></div><p data-r>Lantana’s compounds are made to be used as ingredients by partners and customers in three industries. Its current focus is the anthocyanins, natural colorants for red, purple and blue.</p></div>'+
   pipeRows(PIPE)+
   backers()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>the yeast.</em></h2></div><p data-r>Lantana was founded in 2019 by five co-founders with backgrounds in yeast engineering, polyphenol metabolism, industrial biotechnology and intellectual property. Its laboratory is on the INSA campus in Toulouse.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Lantana.</em></h2></div><p data-r>Research projects, publications and programmes, from the Toulouse White Biotechnology accelerator to Horizon Europe.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>us.</em></h2>'+
   '<p class="sub" data-r>For partnerships, ingredients, investment or careers, please get in touch with the Lantana Bio team in Toulouse.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Lantana '+ARR+'</a><a class="btn" href="#/technology">Our technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Campus INSA, Bâtiment 50<br>135 Avenue de Rangueil<br>31077 Toulouse Cedex 4, France</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">contact@lantanabio.com</a></p><p class="sm" data-r>Careers: <a class="ul" href="mailto:jobs@lantanabio.com">jobs@lantanabio.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r>+33 6 33 84 40 50<br>+33 5 61 28 55 84</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Toulouse, Occitanie, France</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">contact@lantanabio.com</a><br><a class="ul" href="https://www.linkedin.com/company/lantana-bio/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Anthocyanins and flavonoids by precision fermentation of baker’s yeast</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:64px">LANTANA BIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Lantana Bio</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Lantana Bio — natural colours, brewed by yeast",x:"Home"};
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
