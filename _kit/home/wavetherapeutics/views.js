/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+SRC+'" target="_blank" rel="noopener">Wave</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Alternating pressure","Cells inflate and deflate in turn, so the load on any one patch of skin keeps moving. The goal is to eliminate pressure “hot spots” and reperfuse the tissue before damage starts.",'<path d="M6 40h44"/><circle class="a" cx="12" cy="31" r="7"/><circle cx="28" cy="34" r="4"/><circle class="a" cx="44" cy="31" r="7"/>'],
  ["Sequential compression","A microprocessor-controlled peristaltic pump runs a wave through the cushion that improves return blood flow to the heart and lungs, to lower the risk of adverse clotting, leg pain and cramping.",'<path d="M6 40h44"/><circle cx="12" cy="34" r="4"/><circle cx="24" cy="33" r="5"/><circle class="a" cx="37" cy="31" r="7"/><path class="a" d="M8 14h34M36 9l6 5-6 5"/>'],
  ["Smart, portable, affordable","Automatic operation on battery or mains power, with a washable cover. Smart cushions provide key metrics and analytics to anticipate problems; future versions add malfunction alarms and wireless staff alerts.",'<rect x="10" y="14" width="36" height="26"/><path class="a" d="M16 32l7-8 6 5 9-10"/><circle class="f" cx="38" cy="19" r="2.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pressure injury prevention<span class="nomob"> · Medical devices</span> · Nashville, IN</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new wave</span><span class="l">of comfort</span><span class="l">and <em>health.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Wave Therapeutics is developing the Wave Therapeutic Cushion: an active wheelchair cushion that combines alternating pressure and sequential compression to reduce the risk of pressure injuries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Our founder was inspired to build the Wave cushion after caring for a military veteran near death from infected bed sores, who couldn’t afford the treatment he had been prescribed. Wave makes <em>prevention affordable to all.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">60,000+</span><span class="k">US deaths each year attributed to bed sores, as cited by Wave (2020)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$500K</span><span class="k">Raised from investors in January 2020 to bring the cushion to market</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Clinical studies authorized by the VHA Innovation Ecosystem</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A wave that keeps <em>the skin alive.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pressure</span><span>Alternate</span><span>Flow</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Sitting makes hot spots.</h2><p>Hours in a wheelchair concentrate the body’s weight on a few points over the bones. Starved of blood, the tissue there breaks down into a pressure injury.</p></article>'+
     '<article class="step"><h2>The cells take turns.</h2><p>A microprocessor-controlled peristaltic pump inflates and deflates the cushion’s air cells in turn, moving the load so that no patch of skin carries it for long.</p></article>'+
     '<article class="step"><h2>A wave moves the blood.</h2><p>Sequential compression runs a wave through the cells toward the body, reperfusing tissue and improving return blood flow to the heart and lungs.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Two proven therapies, <em>one cushion.</em></h2></div><p data-r>The patent-pending Wave cushion is a hybrid of two clinically tested and validated therapies, combined in a novel manner, and built efficiently to make the technology affordable to all.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">A fleet of products <em>for every seat.</em></h2></div><p data-r>The first product to market is the Wave Therapeutic Cushion. Wave is designing a fleet of products to reduce the risk of pressure injuries everywhere.</p></div>'+
   pipeRows(PIPE)+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Veterans Health Administration</span><p data-r>A Cooperative Research and Development Agreement with the VHA, finalized in February 2021, and two clinical studies authorized by the VHA Innovation Ecosystem.</p></div>'+
    '<div><span class="lab kick" data-r>Testing</span><p data-r>ISO product testing planned with funding from the University of Pittsburgh’s Human Engineering Research Laboratories.</p></div>'+
    '<div><span class="lab kick" data-r>Certification</span><p data-r>SBA-certified Economically Disadvantaged Women-Owned Small Business. Wave Therapeutics is a Bussert Medical, Inc. company.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by a nurse, <em>backed by a surgeon.</em></h2></div><p data-r>An emergency room nurse and inventor, a vascular surgeon with two decades of pressure injury care, and a manufacturing CEO who has scaled companies before.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Brown County, <em>Indiana.</em></h2></div><p data-r>Leadership, partnerships and funding from Wave Therapeutics.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, care facilities and investors</span>'+
   '<h2 class="big split">Make the next wave <em>with us.</em></h2>'+
   '<p class="sub" data-r>Wave is working to ensure future patients have access to the tools that reduce the risk of pressure injury, while saving medical facilities money. We’d like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Wave '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Wave Therapeutics<br>PO Box 1842<br>Nashville, IN 47448</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18123696969">812-369-6969</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>A Bussert Medical, Inc. company</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Nashville, IN</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email Wave</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">The Wave cushion</span>Alternating pressure ·<br>sequential compression</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Literata\',Georgia,serif;font-weight:400;font-size:62px;letter-spacing:.02em">wave therapeutics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Wave Therapeutics · Bussert Medical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Wave Therapeutics — Active cushions that help prevent pressure injuries, Nashville, IN",x:"Home"};
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
