/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="sg-tl">'+HIST.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">Officers, Companies House</p><ul class="mh-list">'+TEAM.map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Springmaking machinery<span class="nomob"> · Redditch, England</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">Springmaking machines,</span> <span class="l"><em><span class="nw">designed and built</span> <span class="nw">in Redditch.</span></em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Bennett Mahler design, manufacture and assemble Maxicoil servo-driven spring coilers, a complete range of spring end grinders, auger coilers and wire benders, exported to over 50 countries.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/machines">Our machines '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1935</span>'+
   '<h2 class="txt" id="mani"><span class="nw">We design, manufacture</span> <span class="nw">and assemble</span> <span class="nw">our machines</span> <span class="nw">in our own factory</span> <span class="nw">in Redditch,</span> <em><span class="nw">one of the main centres</span> <span class="nw">for springmaking</span> <span class="nw">in the UK.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1945</span><p class="k">The first Bennett spring coiling machine. Spare parts are still available</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50+</span><p class="k">Countries our machines are exported to</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">60<sup>mm</sup></span><p class="k">The largest wire diameter our spring end grinders cover, from 0.2 mm up</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Bennett Maxicoil</span><h2 class="d3"><span class="nw">From the keyboard</span> <em class="nw">to a square end.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Set</span><span>Coil</span><span>Pitch</span><span>Grind</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Set at</span> <span class="nw">the keyboard.</span></h2><p>The servo-driven Maxicoil greatly “de-skills” springmaking: squareness of end coils, pitch and initial tension are all controlled directly from the keyboard.</p></article>'+
     '<article class="step"><h2><span class="nw">Coiled on</span> <span class="nw">the lathe.</span></h2><p>Wire from 0.2 mm up to 31 mm is wound into compression, tension and torsion springs, ideal for small and medium quantities. Overhead reel systems are one of the options.</p></article>'+
     '<article class="step"><h2><span class="nw">Pitch and end coils,</span> <span class="nw">under control.</span></h2><p>Pitch is held turn by turn and the end coils close for squareness. Six models, MC-3 to MC-25, each with a very wide wire range.</p></article>'+
     '<article class="step"><h2><span class="nw">Ground square</span> <span class="nw">at the ends.</span></h2><p>Bennett spring end grinders finish the spring: crash, downfeed, single end and water-cooled machines for wire diameters from 0.2 to 60 mm.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="machines" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Machines</span><h2 class="d2 split"><span class="nw">Coil, grind,</span> <em class="nw">chamfer and bend.</em></h2></div><p data-r>A complete range of springmaking machinery, made in our factory in Redditch and used to produce springs for aerospace, medical, nuclear, defence, agricultural and automotive work.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec dark" id="rebuilt" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Used and rebuilt</span><h2 class="d2 split"><span class="nw">Many makes,</span> <em class="nw">rebuilt in Redditch.</em></h2></div><p data-r>We have a department which rebuilds many makes and models of spring coiling and spring grinding machines, and we sell and refurbish used springmaking and wire bending machines.</p></div>'+
   '<div class="svc">'+
    '<div class="svc-c" data-r><span class="lab">Rebuilds</span><h3>Coilers, grinders, wire forming</h3><p>Only completed or almost completed machines are listed. Looking for something not listed, or selling old machinery? <a class="ul" href="#/contact">Contact us</a>.</p></div>'+
    '<div class="svc-c" data-r><span class="lab">UK representation</span><h3>Simplex Rapid and Numalliance</h3><p>Simplex Rapid spring coiling machines, and Numalliance wire and tube bending machines, for the UK market.</p></div>'+
    '<div class="svc-c" data-r><span class="lab">Spare parts</span><h3>Back to the first machine</h3><p>Spare parts are still available for the first Bennett spring coiling machine, produced in 1945.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">In Redditch</span> <em class="nw">since 1935.</em></h2></div><p data-r>A purpose-built factory close to the M42, less than 30 minutes from Birmingham International Airport. Bennett spring coiling and spring end grinding machines are exported all over the world.</p></div>'+
   hist()+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Latest from</span> <em class="nw">the factory.</em></h2></div><p data-r>Trade fairs and the latest rebuilt machines. Every entry links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Your springs,</span> <em class="nw">our machines.</em></h2>'+
   '<p class="sub" data-r>Tell us about the springs you make, the wire range and the quantities, and we will suggest the right coiler or grinder, new or rebuilt.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Bennett Mahler '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Factory</span><p data-r>Bennett Mahler Ltd<br>2 Merse Road North<br>Moons Moat Industrial Estate<br>Redditch, Worcs B98 9HL, UK</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Getting here</span><p data-r>Five minutes by car from the M42, exit 3 south. Thirty minutes from Birmingham International Airport and railway station.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Factory</span>Bennett Mahler Ltd<br>2 Merse Road North, Redditch B98 9HL</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/machines">Machines</a><br><a class="ul" href="#/maxicoil">Maxicoil</a><br><a class="ul" href="#/rebuilt">Used and rebuilt</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Range</span>Maxicoil MC-3 to MC-25<br>Spring end grinders · EC-1<br>CC-4 · Carlson · Maxibend</div>'+
  '</div><svg class="bigsvg flogo" viewBox="0 0 1000 104" aria-hidden="true"><text x="500" y="92" text-anchor="middle">BENNETT MAHLER</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Bennett Mahler Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",maxicoil:"story",machines:"machines",rebuilt:"rebuilt",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Bennett Mahler — Springmaking machinery, designed and built in Redditch",x:"Home"};
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
