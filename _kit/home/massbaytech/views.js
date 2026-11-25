/* ================= VIEWS (home only: Products / Capabilities / Quality / Company open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function prods(){return '<ul class="pfr">'+PROD.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function miles(){return '<ol class="mls">'+MILE.map(function(m){return '<li data-r><span class="yr">'+esc(m[0])+'</span><span class="mt">'+esc(m[1])+'</span></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var IC={
 iso:'<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="28" r="18"/><circle class="a" cx="32" cy="28" r="12"/><path class="a" d="M25 28l5 5 9-10"/><path d="M22 43l-5 15 8-4 4 7 3-12M42 43l5 15-8-4-4 7-3-12"/></svg>',
 scr:'<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="10" width="48" height="36"/><path class="a" d="M12 38c6 0 8-20 14-20s6 14 12 14 8-10 14-10"/><path d="M20 46v8M44 46v8M14 54h36"/></svg>',
 itar:'<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6l22 8v16c0 14-9 24-22 28C19 54 10 44 10 30V14z"/><path class="a" d="M32 16l13 5v10c0 8-5 14-13 17-8-3-13-9-13-17V21z"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>RF/microwave semiconductors<span class="nomob"> · Stoughton, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Microwave diodes,</span> <span class="l">made and screened</span> <span class="l"><em>under one roof.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Massachusetts Bay Technologies designs and builds discrete silicon and GaAs RF/microwave diodes, single layer ceramic capacitors and thin film parts in its own wafer fab, for frequencies from 100 Hz into millimetre wave.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the product line '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
   '<p class="lab hcap" data-r>A ceramic pill package, one of MBT’s diode package styles. Concept render.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="overview" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why MBT</span>'+
   '<h2 class="txt" id="mani">When an RF design depends on a diode nobody else still makes, MBT is the primary source: <em>current, hard-to-find and obsolete parts,</em> built to space-level reliability.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1999</span><p class="k">Founded in Stoughton, Massachusetts, by the brothers Brian and Charlie Fallon</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20,000<sup>+</sup></span><p class="k">Square feet of wafer processing fab, running since 2010</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40 GHz</span><p class="k">In-house test of standard, custom and build-to-print parts</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Capabilities</span><h2 class="d3"><span class="nw">From wafer</span> <em class="nw">to screened part.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fab</span><span>Assemble</span><span>Test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Processed</span> <span class="nw">in our own fab.</span></h2><p>Diffusion, LPCVD and oxidation furnaces, then metallisation, photolithography and etching, in a 20,000+ square foot wafer fab MBT built in under two years.</p></article>'+
     '<article class="step"><h2><span class="nw">Diced, bonded</span> <span class="nw">and packaged.</span></h2><p>Wafers are plated, diced and laser trimmed; die attach, wire and ribbon bonding and packaging follow in-house, in chip, beam lead, ceramic pill, surface-mount and glass axial styles.</p></article>'+
     '<article class="step"><h2><span class="nw">Tested to 40 GHz,</span> <span class="nw">screened to space level.</span></h2><p>Parts are tested to 40 GHz and environmentally screened on site, with high-reliability programmes at TX, TXV and S levels based on MIL-STD-19500 and MIL-STD-750.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Diodes, capacitors</span> <em class="nw">and thin film.</em></h2></div><p data-r>Semiconductor and passive components from 100 Hz up to and including millimetre wave, used in telecom, medical, industrial, space, aerospace and defence systems and in university research.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Package styles</span><p class="cr" data-r>'+PKG.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="quality" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Reliability,</span> <em class="nw">screened in.</em></h2></div><p data-r>Quality control at MBT covers design, development, manufacturing, testing and reliability screening of every semiconductor it makes, from incoming materials to calibrated test equipment and a company-wide ESD programme.</p></div>'+
   '<div class="pillars">'+
    '<div class="pl3" data-r>'+IC.iso+'<h3>ISO 9001:2015</h3><p>Certified by TÜV SÜD America for the manufacture and testing of microwave semiconductors at 378 Page Street. Certificate 951 19 4989, valid to August 2028.</p></div>'+
    '<div class="pl3" data-r>'+IC.scr+'<h3>TX, TXV and S</h3><p>Standard high-reliability test programmes for the entire product line, based on MIL-STD-19500 and MIL-STD-750, with electrical and environmental screening up to and including space level.</p></div>'+
    '<div class="pl3" data-r>'+IC.itar+'<h3>ITAR compliant</h3><p>Fabrication, assembly and reliability testing take place in one ITAR-compliant facility, which supports MBT’s military and space customers alongside its commercial work.</p></div>'+
   '</div>'+
   '<p class="crq" data-r><a class="lk" href="'+ISO+'" target="_blank" rel="noopener">ISO 9001:2015 certificate (PDF) '+ARR+'</a></p>'+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A Massachusetts</span> <em class="nw">diode maker.</em></h2></div><p data-r>Privately held and run by its founders, MBT brings more than fifty years of diode-industry experience to every request.</p></div>'+
   '<div class="abt">'+
    '<div class="abt-l">'+
     '<p data-r>The name comes from the Massachusetts Bay Colony, founded outside Boston nearly 150 years before the American Revolution. Brian and Charlie Fallon started Massachusetts Bay Technologies in Stoughton in March 1999 as a fabless company.</p>'+
     '<p data-r>In 2008 they decided a fabless model was not a reliable way to grow, and built their own wafer fab, which was running in 2010. Fabrication, assembly and reliability testing have been under one roof ever since.</p>'+
     '<ul class="ldr2">'+
      '<li data-r><b>Brian Fallon</b><span>Co-founder and President</span></li>'+
      '<li data-r><b>Charlie Fallon</b><span>Co-founder and Vice President</span></li></ul>'+
    '</div>'+
    '<div class="abt-r"><span class="lab kick" data-r>Milestones</span>'+miles()+'</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Stoughton</span> <em class="nw">to Munich.</em></h2></div><p data-r>Recent coverage, certification and trade-fair appearances.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Engineers, buyers and distributors</span>'+
   '<h2 class="big split"><span class="nw">Tell us the part</span> <em class="nw">you need.</em></h2>'+
   '<p class="sub" data-r>Send MBT a part number, a datasheet or a build-to-print drawing. Its engineers and sales team will come back on availability, screening and lead time.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email sales '+ARR+'</a><a class="btn" href="'+TEL+'">Call 781-344-8809</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters and fab</span><p data-r>Massachusetts Bay Technologies<br>378 Page Street<br>Stoughton, MA 02072</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Sales</span><p data-r><a class="ul" href="'+MAIL+'">'+EMAIL+'</a><br><a class="ul" href="'+TEL+'">781-344-8809</a><br>Fax 781-341-8177</p></div>'+
    '<div><span class="lab" data-r>Certified</span><p data-r>ISO 9001:2015 (TÜV SÜD)<br>ITAR compliant</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>378 Page Street<br>Stoughton, MA 02072</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/capabilities">Capabilities</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">'+EMAIL+'</a><br><a class="ul" href="'+TEL+'">781-344-8809</a></div>'+
   '<div class="c"><span class="lab">Focus</span>RF/microwave diodes, SLC capacitors<br>and thin film products</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',system-ui,sans-serif;font-weight:600;font-size:74px;letter-spacing:.02em">MASSBAY TECH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Massachusetts Bay Technologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={overview:"overview",products:"products",capabilities:"story",quality:"quality",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Massachusetts Bay Technologies — RF/microwave diodes, SLC capacitors and thin film, Stoughton MA",x:"Home"};
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
