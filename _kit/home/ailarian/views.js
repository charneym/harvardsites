/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="ptg">'+TEAM.map(function(p){
  return '<figure><div class="ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="640" height="800" loading="lazy" decoding="async"></div><figcaption><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></figcaption></figure>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(C){return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
var TECH=[
  ["Performance","Highly conductive, at 300 mΩ/sq/mil or better, with adhesion to both paper and plastic substrates.",'<path d="M6 40h44"/><path class="a" d="M6 28h12l5-10 8 20 5-10h14"/><circle class="f" cx="50" cy="28" r="2.6"/>'],
  ["Sustainability","A design-for-recycling approach: up to 75% lower Scope-3 emissions than other silver inks.",'<path d="M28 8C14 18 10 32 14 46c14-2 26-12 28-30-4-4-9-7-14-8z"/><path class="a" d="M14 46L34 22"/>'],
  ["Circularity","Recovered silver goes into the formulation of new conductive ink, for a closed loop that also reduces cost.",'<path d="M44 22A17 17 0 1 0 45 34"/><path class="a" d="M38 14l7 8-9 3"/><circle class="f" cx="28" cy="28" r="3"/>']];
var PACK=[
  ["Paper-based circuit inserts","Fully paper-based electronic circuit inserts bring illumination and interactive features to conventional packaging, for shelf presence, unboxing and anti-counterfeiting.",'<rect x="8" y="14" width="40" height="28"/><path class="a" d="M14 34h8v-10h12v10h8"/><circle class="f" cx="28" cy="24" r="2.6"/>'],
  ["Recovered by magnets","The circuits are ferromagnetic, so they can be separated using the magnets already in place at recycling centres, with staples and other magnetic materials.",'<path d="M16 10v18a12 12 0 0 0 24 0V10"/><path d="M16 10h7v18a5 5 0 0 0 10 0V10h7"/><path class="a" d="M20 48l3-4M28 50v-5M36 48l-3-4"/>'],
  ["Made for new rules","Designed as a removable insert that is easily separated by hand, for Extended Producer Responsibility in the UK and the EU Packaging and Packaging Waste Regulation.",'<path d="M10 46V18l18-8 18 8v28z"/><path class="a" d="M20 30l6 6 11-12"/>']];
function caps(C){return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Recyclable silver conductive inks<span class="nomob"> · South Wales</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Silver ink,</span><span class="l">designed to be</span><span class="l"><em>used again.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ail Arian makes patented conductive silver inks for printed electronics that can be magnetically recovered at the end of a product’s life, so the silver is recycled into new ink.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How recovery works '+ARR+'</a><a class="btn" href="#/products">Our inks</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Ail Arian</span>'+
   '<h2 class="txt" id="mani">“Ail Arian” means “recycled silver” in Welsh. <em>We are building the first circular ecosystem for printed electronics.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">75%</span><p class="k">Up to 75% lower Scope-3 emissions than other silver inks</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300</span><p class="k">mΩ/sq/mil or better: highly conductive, on paper and plastic</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2024</span><p class="k">Established as a Swansea University spin-out</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How recovery works</span><h2 class="d3">Print it, recover it, <em>print it again.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Print</span><span>Recover</span><span>Reuse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The circuit is printed in Resilver ink.</h2><p>Conductive silver tracks are printed onto paper or plastic like any conventional ink, to power LEDs, sensors and other printed electronic features.</p></article>'+
     '<article class="step"><h2>At end of life, magnets pull it out.</h2><p>The ink is ferromagnetic, so the circuit is separated from the waste stream by the magnets already in place at recycling centres, and the paper goes on to be recycled.</p></article>'+
     '<article class="step"><h2>The silver becomes new ink.</h2><p>The recovered silver is processed and formulated into new conductive ink, reducing reliance on newly sourced silver and closing the loop.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Conductive silver, <em>designed for recycling.</em></h2></div><p data-r>Valuable materials such as silver are hard to recover from printed products and are often lost at the end of their life. Our patented inks consider recovery from the outset, while keeping the performance printed electronics need.</p></div>'+
   caps(TECH)+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">The Resilver <em>range.</em></h2></div><p data-r>Silver conductive inks for sustainable printed electronics, water-based and solvent-based, for paper and plastic substrates, and cheaper than standard silver conductive inks.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="packaging" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Packaging</span><h2 class="d2 split">Smart packaging, <em>still recyclable.</em></h2></div><p data-r>We are applying our inks to a new generation of smart, interactive packaging, from illuminated packaging for greater shelf presence to future sensors and authentication, while keeping the packaging recyclable.</p></div>'+
   caps(PACK)+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>Ail Arian.</em></h2></div><p data-r>A multidisciplinary team in South Wales, with expertise in materials science, printed electronics, engineering, business and marketing, taking Ail Arian from research to real-world applications.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>Wales StartUp Awards, Engineering and Manufacturing StartUp of the Year 2025 and 2026</span><i>·</i><span>Advanced Engineering Enabling Innovation winners 2025</span><i>·</i><span>Swansea Bay Business Awards, Highly Commended 2026</span><i>·</i><span>Great British Entrepreneur Awards finalists 2025</span><i>·</i><span>LOPEC Start Up Awards finalists 2025</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Ail Arian.</em></h2></div><p data-r>Support from Innovate UK’s ICURe programme and the Welsh Government, and a StartUp of the Year award.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Try our ink in <em>your application.</em></h2>'+
   '<p class="sub" data-r>Get in touch to find the right product for your application, to request a sample, or for technical support.</p>'+
   '<div class="act" data-r><a class="btn solid" href="https://www.ailarian.co.uk/request-a-sample/" target="_blank" rel="noopener">Request a sample '+ARR+'</a><a class="btn" href="'+MAIL+'" target="_blank" rel="noopener">Contact the team</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Registered office</span><p data-r>Ail Arian (AILARIAN LTD)<br>Bay Technology Centre, Central Avenue<br>Baglan, Port Talbot SA12 7AX, Wales</p></div>'+
    '<div><span class="lab" data-r>Write</span><p data-r><a class="ul" href="'+MAIL+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
    '<div><span class="lab" data-r>Samples</span><p data-r><a class="ul" href="https://www.ailarian.co.uk/request-a-sample/" target="_blank" rel="noopener">Request a sample or design guide</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Registered office</span>Bay Technology Centre<br>Baglan, Port Talbot SA12 7AX</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="https://www.ailarian.co.uk/request-a-sample/" target="_blank" rel="noopener">Request a sample</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/packaging">Packaging</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Since</span>2024, a Swansea University spin-out<br>AILARIAN LTD</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Outfit\',sans-serif;font-weight:500;font-size:80px">Ail Arian</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 AILARIAN LTD</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",packaging:"packaging",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ail Arian — recyclable silver conductive inks for printed electronics",x:"Home"};
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
