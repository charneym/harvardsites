/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function platRows(){return '<div class="plat">'+PLAT.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function prodRows(){return '<ul class="pfr path">'+PRODUCTS.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[3])+'</p><a class="lab lk" href="'+c[4]+'" target="_blank" rel="noopener" aria-label="'+esc(c[1])+' datasheet (PDF) on bandwidth10.com">Datasheet '+ARR+'</a></li>'}).join("")+'</ul>'}
function appList(){return '<ul class="ind">'+APPS.map(function(a){return '<li>'+esc(a)+'</li>'}).join("")+'</ul>'}
function teamGrid(){return '<ul class="ex bwt">'+TEAM.map(function(p){return '<li><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></li>'}).join("")+'</ul>'}
function paperRows(){return '<ul class="rows">'+PAPERS.map(function(n){return '<li><a class="row-a" href="'+n[2]+'" target="_blank" rel="noopener"><span class="nm"><span class="lab">'+esc(n[0])+'</span></span><h3>'+esc(n[1])+'</h3><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tunable VCSELs<span class="nomob"> · Berkeley, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Tunable lasers,</span> <span class="l">made at <em>wafer scale.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Bandwidth10 brings wavelength-tunable VCSELs to market: swept sources from 720 nm to 1700 nm for OCT, fiber sensing, gas sensing, LIDAR and imaging, at a cost conventional technologies can’t reach.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/technology">How the HCG works</a></div></div>'+
   '<span class="lab cap">Seven-pin TO56 tunable VCSEL · render</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap"><div class="mrow">'+
   '<div class="mani-in"><span class="lab kick" data-r>Bandwidth10</span>'+
   '<h2 class="txt" id="mani">Founded in 2011 by a team out of UC Berkeley and industry veterans, Bandwidth10 has shipped tunable lasers since 2014. <b class="w0">Small, low-power and wavelength-stabilized, from the TO-can to the swept-source engine.</b></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2011</span><span class="k">Founded in Berkeley, a University of California spin-out</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">720–1700</span><span class="k">Nanometres covered by the company’s swept-source VCSELs</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2014</span><span class="k">The year Bandwidth10 began shipping products</span></div>'+
   '</div></div>'+
   platRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">One grating,</span> <em class="nw">a tunable laser.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cavity</span><span>Grating</span><span>Tuning</span><span>Sweep</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The cavity.</h2><p>A vertical-cavity surface-emitting laser sends its light out of the top of the chip. The light is generated in the active region and resonates between a bottom mirror and a top mirror.</p></article>'+
     '<article class="step"><h2>The grating.</h2><p>Bandwidth10’s top mirror is a High Contrast Grating: a single nanometre-scale layer of high-index material with a sub-wavelength period, reflecting a much broader band than a conventional DBR mirror.</p></article>'+
     '<article class="step"><h2>The tuning.</h2><p>Suspended over an air gap, the grating is a tunable mirror. A voltage moves it, the cavity length changes, and with it the wavelength: simple, voltage-controlled tuning from a wafer-scale, low-cost process.</p></article>'+
     '<article class="step"><h2>The sweep.</h2><p>Tuned fast, the laser becomes a swept source. The 1060 nm pigtailed TO sweeps faster than 200 kHz across more than 40 nm, for OCT, fiber sensing and imaging.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">From the TO-can</span> <em class="nw">to the engine.</em></h2></div><p data-r>A family of single-mode HCG VCSELs at 1060, 1550 and 1654 nm, each co-packaged with a thermo-electric cooler, and complete OEM swept sources built around them.</p></div>'+
   prodRows()+
  '</div></section>'+

  '<section class="sec dark" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">One laser family,</span> <em class="nw">many signals.</em></h2></div><p data-r>Swept-source VCSELs from 720 nm to 1700 nm, delivering cost-effective tunable solutions that are out of reach with conventional technologies.</p></div>'+
   appList()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">Berkeley founders,</span> <em class="nw">a global team.</em></h2></div><p data-r>Tunable VCSEL design, optoelectronic packaging and control electronics, with application engineering and sales across North America, Asia and Europe.</p></div>'+
   teamGrid()+
  '</div></section>'+

  '<section class="sec dark2" id="papers" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Papers</span><h2 class="d2 split"><span class="nw">The research</span> <em class="nw">behind it.</em></h2></div><p data-r>Papers on the HCG VCSEL and its applications, from the library on bandwidth10.com.</p></div>'+
   paperRows()+
   '<div class="credit"><span class="lab" data-r>Recently exhibited</span><p data-r><span>SPIE BiOS and Photonics West 2026, San Francisco</span><i>·</i><span>CIOE 2025, Shenzhen</span><i>·</i><span>LASER World of PHOTONICS 2025, Munich</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Sales in the USA, Asia and Europe</span>'+
   '<h2 class="big split"><span class="nw">Find your</span> <em class="nw">wavelength.</em></h2>'+
   '<p class="sub" data-r>Write to the Bandwidth10 team about a tunable VCSEL, a pigtailed module or an OEM swept source, with datasheets and application notes for each.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>USA · Berkeley</span><p data-r><span class="bl">2080 Addison Street, Suite 2</span><span class="bl">Berkeley, CA 94704</span></p><p data-r><a class="ul" href="tel:+15109906171">+1 510 990 6171</a></p></div>'+
    '<div><span class="lab" data-r>Taiwan · Taoyuan</span><p data-r><span class="bl">2F, Building B, No. 1, Ding’an Rd.</span><span class="bl">Zhongli Dist., Taoyuan City 320</span></p><p data-r><a class="ul" href="mailto:asia.sales@bandwidth10.com">asia.sales@bandwidth10.com</a></p></div>'+
    '<div><span class="lab" data-r>Europe · Berlin</span><p data-r><span class="bl">Berlin, Germany</span><span class="bl">+49 152 5244 3473</span></p><p data-r><a class="ul" href="mailto:eu.sales@bandwidth10.com">eu.sales@bandwidth10.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2080 Addison Street, Suite 2<br>Berkeley, CA 94704-1693</div>'+
   '<div class="c"><span class="lab">Offices</span>Taoyuan City, Taiwan<br>Berlin, Germany</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/papers">Papers</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15109908866">+1 510 990 8866</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Arimo\',Arial,sans-serif;font-weight:700;font-size:58px;letter-spacing:.02em"><tspan>BANDWIDTH</tspan><tspan fill="#ff5c52">10</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Bandwidth10</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",applications:"applications",team:"team",papers:"papers",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Bandwidth10 — wavelength-tunable VCSELs and swept sources, Berkeley",x:"Home"};
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