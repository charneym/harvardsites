/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr prod">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk">Product area</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["DNA-inspired, non-lipid","A synthetic molecule modelled on DNA, rather than a lipid shell. JBNps fully encapsulate their cargo and can be customized for different treatment indications.",'<path d="M18 6c0 14 20 14 20 22s-20 8-20 22"/><path d="M38 6c0 14-20 14-20 22s20 8 20 22"/><path class="a" d="M22 14h12M22 42h12"/><path d="M20 28h16"/>'],
  ["Into dense tissue","Built to pass the barriers that turn other carriers away: articular cartilage, kidneys and ECM-rich solid tumors, with reduced systemic exposure and fewer side effects.",'<path d="M6 14c8-4 14 4 22 0s14 4 22 0M6 28c8-4 14 4 22 0s14 4 22 0M6 42c8-4 14 4 22 0s14 4 22 0"/><circle class="f" cx="28" cy="28" r="4.5"/><path class="a" d="M4 28h16"/>'],
  ["No cold chain","The cargo stays bioactive at room temperature for extended periods, so mRNA and other fragile payloads can ship and store without cold-chain requirements.",'<path d="M24 8v28a8 8 0 1 0 8 0V8a4 4 0 0 0-8 0z"/><circle class="f" cx="28" cy="43" r="4"/><path class="a" d="M28 39V22"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function cargo(){return '<div class="bk light-bk"><span class="lab kick" data-r>Cargoes</span><p class="cr" data-r>siRNA<i>·</i>mRNA<i>·</i>Cas9<i>·</i>Proteins<i>·</i>Peptides<i>·</i>Other drug agents</p></div>'}
function orbit(){var M=[
  ["Six missions","Eascra has completed six missions to the International Space Station in under three years, and anticipates six more over the next two as it scales toward commercial-stage manufacturing."],
  ["A first in orbit","The first commercial company to produce nanoparticles in space for medical use on Earth. Microgravity allows more rigorous upfront testing, which can streamline the path to approvals here."],
  ["NASA InSPA Phase 2","A $7.96 million In Space Production Applications contract (2026) to commercialize low Earth orbit manufacturing of JBNps, toward FDA clinical trials by 2028."]];
  return '<div class="plat">'+M.map(function(m){return '<div><span class="lab kick" data-r>'+esc(m[0])+'</span><p data-r>'+esc(m[1])+'</p></div>'}).join("")+'</div>'}
function partners(){return '<div class="bk"><span class="lab kick" data-r>Working with</span><p class="cr" data-r>NASA<i>·</i>ISS National Laboratory<i>·</i>Axiom Space<i>·</i>AFWERX<i>·</i>NSF<i>·</i>MassVentures</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nanomedicine<span class="nomob"> · Janus base nanoparticles</span> · Boston, MA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Delivery for</span><span class="l">the body’s hardest</span><span class="l"><em>to reach tissues.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Eascra’s DNA-inspired Janus base nanoparticles carry RNA, gene editing and protein therapeutics into cartilage, kidneys and solid tumors, stable at room temperature. Six missions to the International Space Station, and counting.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The JBNp platform '+ARR+'</a><a class="btn" href="#/space">Made in orbit</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Osteoarthritis affects one in four Americans and has no known cure. The tissue it destroys, articular cartilage, is dense and hard to penetrate. Eascra’s nanoparticles were made to get in, <em>and to travel without a cold chain.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Missions to the International Space Station, in under three years</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$7.96M</span><p class="k">NASA InSPA Phase 2 contract, awarded in August 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2028</span><p class="k">The goal for bringing the JBNp platform into FDA clinical trials</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a JBNp works</span><h2 class="d3">Inspired by DNA, <em>built to get through.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Assemble</span><span>Protect</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A molecule modelled on DNA.</h2><p>Janus base nanoparticles start from a synthetic, DNA-inspired molecule, not a lipid. They gather around a therapeutic cargo such as siRNA, mRNA or Cas9.</p></article>'+
     '<article class="step"><h2>The cargo, fully enclosed.</h2><p>The JBNp fully encapsulates its cargo. That shell keeps fragile payloads bioactive at room temperature for extended periods, without a cold chain.</p></article>'+
     '<article class="step"><h2>Into tissue others can’t reach.</h2><p>JBNps pass through “difficult-to-infiltrate” tissue barriers, such as the dense matrix of articular cartilage, and deliver their cargo where it is needed, with reduced systemic exposure.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">One platform, <em>many cargoes.</em></h2></div><p data-r>Eascra provides precision therapeutic delivery for hard-to-penetrate tissues. Its proprietary Janus base nanoparticles, invented by co-founder Dr. Yupeng Chen, are a versatile delivery option for partners’ therapeutics.</p></div>'+
   caps()+
   cargo()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Product areas</span><h2 class="d2 split">From delivery <em>to repair.</em></h2></div><p data-r>The first use cases are treatments for osteoarthritis, cartilage regeneration and direct delivery into solid tumors, with reduced systemic exposure for fewer side effects.</p></div>'+
   prodRows(PROD)+
  '</div></section>'+

  '<section class="sec dark" id="space" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>In space</span><h2 class="d2 split">Nanomedicine, <em>made in orbit.</em></h2></div><p data-r>Eascra works with NASA, the ISS National Laboratory and private space companies, using microgravity to develop and manufacture its nanoparticles.</p></div>'+
   orbit()+
   partners()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists, operators <em>and advisors.</em></h2></div><p data-r>A founder-led team with a laboratory in Worcester, Massachusetts, a chief scientific officer from AbbVie, and the inventor of the JBNp platform.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Contracts, awards <em>and milestones.</em></h2></div><p data-r>The latest from Eascra Biotech, from Fast Company’s Next Big Things in Tech to a NASA InSPA Phase 2 award.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners and investors</span>'+
   '<h2 class="big split">Deliver with <em>Eascra.</em></h2>'+
   '<p class="sub" data-r>Eascra is seeking commercial partnerships with life science companies that need targeted therapeutic delivery. Tell us about your delivery requirements.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Eascra '+ARR+'</a><a class="btn" href="#/technology">The platform</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>139A Charles St #315<br>Boston, MA 02114</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14012869828">401.286.9828</a></p></div>'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>Worcester, Massachusetts</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>139A Charles St #315<br>Boston, MA 02114</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14012869828">401.286.9828</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/space">In space</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>JBNp™ · Janus base nanoparticles for RNA, gene editing and protein delivery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:700;font-size:58px">eascra biotech</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Eascra Biotech</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",products:"products",space:"space",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Eascra Biotech — Janus base nanoparticles for the body’s hardest-to-reach tissues",x:"Home"};
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
