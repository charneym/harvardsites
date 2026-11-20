/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk" href="'+c[3]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' on owictechnologies.com">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Optical wireless integrated circuits<span class="nomob"> · Ithaca, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Smart microsystems,</span><span class="l">powered by</span><span class="l"><em>light.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>OWiCs are the world’s smallest smart microsystems: electronics for intelligence, sensing and control, with optics for power and communication, in a package the size of a grain of sand.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/technology">How SPECS works</a></div></div>'+
   '<span class="lab cap">SPECS chip and microlink on a fingertip · OWiC</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>One platform</span>'+
   '<h2 class="txt" id="mani">Electrosynthesis can reach molecules other chemistry cannot, but its wired reactors never fit high-throughput discovery. <b class="w0">OWiC’s chips run the reaction on light alone, in every well of a standard plate.</b> <em>All you need is light.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 mm</span><span class="k">Across one SPECS device, small enough for the wells of a high-throughput plate</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25</span><span class="k">Silicon photodiodes strung together on each chip to drive the reaction</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.23M</span><span class="k">NIH NIGMS SBIR Phase II funding for SPECS, awarded August 2026</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">A reactor in every well, <em>powered by light.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Well</span><span>Chip</span><span>Light</span><span>Reaction</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The well.</h2><p>High-throughput chemistry runs in standard well plates, each well a small volume of reactant solution with a reaction of its own.</p></article>'+
     '<article class="step"><h2>The chip.</h2><p>A SPECS chip, about 2 mm square, drops into the well. It is built from 25 silicon photodiodes strung together, with electrodes on the chip.</p></article>'+
     '<article class="step"><h2>The light.</h2><p>Under visible light the photodiodes generate an electric current, wirelessly. No wires to each well, no racks of electronics.</p></article>'+
     '<article class="step"><h2>The reaction.</h2><p>The current passes from the on-chip electrodes through the solution and drives the electrochemical reaction, in every lit well at once.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">One platform, <em>four ways to use it.</em></h2></div><p data-r>From the drug-discovery bench to everyday products, every OWiC product is built on the same light-powered microsystems.</p></div>'+
   prodRows()+
   '<blockquote class="pq" data-r><p>“…an advance that is set to revolutionize the discovery and development of organic electrochemical reactions.”</p><cite class="lab">Thomas O’Brien &amp; Alastair Lennox · Nature, News &amp; Views, 2025</cite></blockquote>'+
   '<p class="ack" data-r>SPECS were described in Górski et al., Nature 637, 354–361 (2025). Research reported here is supported by the National Institute of General Medical Sciences of the National Institutes of Health under award R44GM161182.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by the people <em>who invented it.</em></h2></div><p data-r>A deep-tech team with a track record of building disruptive microsystems, in CMOS, optics and heterogeneous integration.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From Nature <em>to production.</em></h2></div><p data-r>The latest from OWiC Technologies and SPECS.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Chemists, partners and investors</span>'+
   '<h2 class="big split">Bring electrosynthesis <em>to every well.</em></h2>'+
   '<p class="sub" data-r>For SPECS, SENSE early access, microlinks or engineering partnerships, write to the OWiC Technologies team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Ithaca, New York</span><p data-r><span class="bl">350 Duffield Hall</span><span class="bl">Ithaca, NY 14853</span></p></div>'+
    '<div><span class="lab" data-r>Durham, North Carolina</span><p data-r><span class="bl">400 Park Offices Dr., Suite 201</span><span class="bl">Durham, NC 27713</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p data-r><a class="ul" href="mailto:specs@owictech.com">specs@owictech.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Ithaca</span>350 Duffield Hall<br>Ithaca, NY 14853</div>'+
   '<div class="c"><span class="lab">Durham</span>400 Park Offices Dr., Suite 201<br>Durham, NC 27713</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Red Hat Display\',system-ui,sans-serif;font-weight:400;font-size:58px;letter-spacing:.02em">OWiC Technologies</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 OWiC Technologies, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"OWiC Technologies — optical wireless integrated circuits, smart microsystems powered by light",x:"Home"};
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
