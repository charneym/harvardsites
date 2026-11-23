/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function mil(list){return '<ul class="pfr mil tml">'+list.map(function(a){return '<li><span class="lab tg">'+esc(a[0])+'</span><h3>'+esc(a[1])+'</h3></li>'}).join("")+'</ul>'}
function facts(kick,list,note,cls){return '<div class="ev'+(cls?' '+cls:'')+'"><span class="lab kick" data-r>'+esc(kick)+'</span><div><dl>'+list.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  (note?'<p class="note-s" data-r>'+esc(note)+'</p>':'')+'</div></div>'}
function inv(){return '<ul class="pfr mil invr">'+INV.map(function(a,i){return '<li><span class="lab tg">0'+(i+1)+'</span><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p><span></span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tience®<span class="nomob"> · Regenerative tissue science</span> · Helsinki, Finland</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Redefining</span><span class="l"><em>regeneration.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Linio Biotech builds on a deep understanding of human adipose tissue. Tience®, our cell-free tissue product, is already used by clinicians in the Nordics, and made in our own licensed tissue establishment in Tampere.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How Tience works '+ARR+'</a><a class="btn" href="#/partnering">Partnering</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Unlocking potential</span>'+
   '<h2 class="txt" id="mani">Today’s solutions rely on synthetic products or invasive autologous procedures. Linio Biotech is designed to <em>activate the body’s own regenerative mechanisms, in a ready-to-use format.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">€10M+</span><p class="k">Raised to date through equity investments and public grants</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~40</span><p class="k">Leading healthcare clinics in the Nordics use Tience® technology</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~2,500</span><p class="k">Treated patients behind our post-market clinical data</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Tience works</span><h2 class="d3">From adipose tissue <em>to renewed skin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Treat</span><span>Renew</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Adipose tissue, studied since 2005.</h2><p>Our research began at Tampere University: how human adipose tissue regenerates, and how it supports skin health. Its bioactive substances are the foundation of Tience®.</p></article>'+
     '<article class="step"><h2>Cell-free, into the skin.</h2><p>Processed in our licensed tissue establishment, Tience® is a sterile, cell-free product with only bioactive substances. In our acne-scar study it is given as intradermal injections.</p></article>'+
     '<article class="step"><h2>The skin renews itself.</h2><p>Tience® naturally supports the skin’s repair and renewal, for long-lasting improvements in skin condition, structure and elasticity, without the burden of autologous methods.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="science" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">One platform, <em>multiple indications.</em></h2></div><p data-r>Tience® is a first-of-its-kind, cell-free tissue product that harnesses the regenerative potential of human adipose tissue. Each indication builds on the same biology, manufacturing and regulatory backbone.</p></div>'+
   pipeRows(PIPE)+
   '<span class="lab kick sub-l pr" data-r>Linio’s timeline</span>'+
   mil(MIL)+
  '</div></section>'+

  '<section class="sec light" id="establishment" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Tissue establishment</span><h2 class="d2 split">Licensed, in-house, <em>end to end.</em></h2></div><p data-r>Unlike most early-stage companies, Linio Biotech operates its own licensed tissue establishment: end-to-end control of tissue sourcing, processing, quality assurance and product release.</p></div>'+
   facts("The facility",EST,"Compliant with Commission Directives 2004/23/EC, 2006/17/EC and 2006/86/EC, the Finnish Act 101/2001 and Fimea Administrative Regulation 3/2014.","lt")+
  '</div></section>'+

  '<section class="sec dark" id="partnering" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Partnering</span><h2 class="d2 split">A large market, <em>shifting to regeneration.</em></h2></div><p data-r>Linio Biotech targets the global injectables market, where patients and physicians increasingly favour subtle, natural results and long-term tissue health. We are structured for licensing, co-development and acquisition.</p></div>'+
   facts("The market",[["$23.8B","Global injectables market, growing at about 11% CAGR"],["~20% a year","Projected growth of regenerative and biologically active injectables, the fastest-growing segment"]],"")+
   '<span class="lab kick sub-l pr" data-r>For investors</span>'+
   inv()+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">What if skin could <em>heal itself?</em></h2></div><p data-r>Scientists and builders driven by one hypothesis, with a board curated for commercialising next-generation products for global markets and a network of international clinical advisors.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Tience® <em>in the news.</em></h2></div><p data-r>Press features, recognition and the congresses where we meet customers, partners and experts.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investments, inquiries and partnerships</span>'+
   '<h2 class="big split">Interested in putting your <em>skin in the game?</em></h2>'+
   '<p class="sub" data-r>Our leaders and experts are ready to help with any question you might have about the cutting edge of skin and tissue regeneration.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+EMAIL+'">Email Linio Biotech '+ARR+'</a><a class="btn" href="#/science">See the science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Linio Biotech Oy<br>Tehtaankatu 27–29 A<br>00150 Helsinki, Finland</p></div>'+
    '<div><span class="lab" data-r>Tissue establishment</span><p data-r>Finn-Medi 5, Biokatu 12<br>33520 Tampere, Finland</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Tehtaankatu 27–29 A<br>00150 Helsinki, Finland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+EMAIL+'">'+EMAIL+'</a><br><a class="ul" href="https://www.linkedin.com/company/78853879/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/establishment">Tissue establishment</a><br><a class="ul" href="#/partnering">Partnering</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Product</span>Tience® · cell-free tissue product<br>Made in Tampere, Finland</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'DM Sans\',Arial,sans-serif;font-weight:500;font-size:86px;letter-spacing:-.01em">Linio Biotech</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Linio Biotech Oy</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",science:"science",establishment:"establishment",partnering:"partnering",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Linio Biotech — Redefining regeneration",x:"Home"};
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
