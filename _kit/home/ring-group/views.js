/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function dq(A,cls){
  return '<dl class="drq'+(cls?' '+cls:'')+'">'+A.map(function(q){return '<div data-r><dt class="lab">'+esc(q[0])+'</dt><dd>'+(q.length>2?'<b>'+esc(q[1])+'</b>':'')+'<span>'+esc(q[q.length-1])+'</span></dd></div>'}).join("")+'</dl>'}
function co(){return '<ul class="pfr pipe np pl2">'+CO.map(function(c){
  return '<li><span class="lab tg"><b>Ring Group</b></span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function loc(){return '<ul class="locs">'+LOC.map(function(l){return '<li data-r><b>'+esc(l[0])+'</b><span>'+esc(l[1])+'</span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1376" height="1170" alt="Ring hole-pipe perforating machine with its guarding, feed rolls and control panel" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Perforating and punching machines<span class="nomob"> · Pirmasens, since 1921</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Perforating and</span></span> <span class="l"><span class="nw">punching machines,</span></span> <span class="l"><span class="nw">made in Pirmasens.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>For more than a hundred years the Ring Group has built perforating, die-cutting and shoe machines, special machines and the tools that go in them, and perforates and embosses material to order for leather, automotive, furniture and fashion.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/machines">See the machines '+ARR+'</a><a class="btn" href="#/perforating">Contract perforation</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Family owned, 3rd and 4th generation</span>'+
   '<h2 class="txt" id="mani"><span class="nwp">Machines, tools,</span> <span class="nwp">design development,</span> <span class="nwp">contract perforation</span> <span class="nwp">and service,</span> <span class="nwp">all from a single source</span> <span class="nwp">and all made in Germany.</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1921</span><p class="k">the Ring Group’s start in Pirmasens; specialised in perforation for more than a century</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">product lines from one works: perforating, die cutting, tooling, footwear, special machines, service</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">continents with Ring sites, close to the leather, shoe and automotive industries</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From hole pattern to finished part</span><h2 class="d3"><span class="nw">Perforated</span> <span class="nw">to the pattern.</span></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pattern</span><span>Tool</span><span>Machine</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">The</span> <span class="nw">pattern.</span></h2><p>Perfect perforation begins with design development. The prototype team works out custom hole patterns with the customer, from the first concept to a pattern that is ready for production.</p></article>'+
     '<article class="step"><h2><span class="nw">The</span> <span class="nw">tool.</span></h2><p>The tool room builds punching and perforating tools matched to the material and the machine, from cutting dies in wooden plate to massive tools for technical industry.</p></article>'+
     '<article class="step"><h2><span class="nw">The</span> <span class="nw">machine.</span></h2><p>Perforating machines from ME and ME-Q technology to the HD XL, built in Pirmasens, alongside hydraulic die-cutting presses and machines for the footwear industry.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="machines" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Machines</span><h2 class="d2 split"><span class="nw">Six product lines,</span> <em class="nw">one works.</em></h2></div><p data-r>Standard machines and machines built to your specification, with our own design department, tool making, service, spare parts and training.</p></div>'+
   dq(LINES,"dq3")+
  '</div></section>'+

  '<section class="sec dark2" id="perforating" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Contract perforation</span><h2 class="d2 split"><span class="nw">Your material, our pattern,</span> <em class="nw">perforated to order.</em></h2></div><p data-r>Through our contract perforation service we perforate and emboss virtually every kind of material to your pattern and specification, and develop designs for bags, apparel and home accessories.</p></div>'+
   dq(CONTRACT,"dq4")+
  '</div></section>'+

  '<section class="sec light" id="locations" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About us</span><h2 class="d2 split"><span class="nw">Nearby,</span> <em class="nw">on four continents.</em></h2></div><p data-r>The Ring Group has specialised in perforation for more than a century: a regionally rooted, internationally active family business, run today by the third and fourth generations of the founding family. Headquarters, tool making and contract perforation are in Pirmasens.</p></div>'+
   loc()+
   '<span class="lab kick sub-l" data-r>The companies</span>'+
   co()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Shows, open days</span> <em class="nw">and news.</em></h2></div><p data-r>Where to meet us next and what happened at the last events; each entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Talk to us about</span> <em class="nw">your next machine.</em></h2>'+
   '<p class="sub" data-r>Sales, service and contract perforation are run from our headquarters in Pirmasens. Tell us about your material and your process, and the right person will get back to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Ring Group '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Ring Maschinenbau GmbH<br>Blocksbergstraße 151<br>66955 Pirmasens<br><span>Germany</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span></p></div>'+
    '<div><span class="lab" data-r>Group</span><p data-r>Ring Maschinenbau, PKM Automation,<br><span>Ring &amp; Vester, ALKOMA</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Blocksbergstraße 151<br>66955 Pirmasens, Germany</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/machines">Machines</a><br><a class="ul" href="#/perforating">Contract perforation</a><br><a class="ul" href="#/locations">About us</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Ring Group</span>Family owned since 1921<br>Made in Germany, serviced worldwide</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 70" aria-hidden="true"><text x="500" y="56" text-anchor="middle" style="letter-spacing:.16em">RING GROUP · PIRMASENS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ring Group</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",machines:"machines",perforating:"perforating",locations:"locations",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ring Group — perforating and punching machines, made in Pirmasens",x:"Home"};
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
