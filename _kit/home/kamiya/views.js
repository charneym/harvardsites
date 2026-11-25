/* ================= VIEWS (home only: Products / Technology / About / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, the ELISA microplate render), intro (bone,
   statement + figures), the inside-a-K-ASSAY story (dark), products (bone: K-ASSAY analyzer reagents beside the life-science
   lines, then quality and reach), about (dark: the history since 1983), news (bone), contact (dark). Content is never hidden at
   rest: reveals only enhance (failsafe in site.js). ================= */
function cat(list){return '<ul class="dcat">'+list.map(function(c){return '<li><span class="dc-c">'+esc(c[1])+'</span><span class="dc-b">'+esc(c[0])+'</span><span class="dc-m">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function lsl(list){return '<ul class="dcat kls">'+list.map(function(c){return '<li><a href="'+WEB+c[3]+'" target="_blank" rel="noopener"><span class="dc-c">'+esc(c[1])+'</span><span class="dc-b">'+esc(c[0])+'</span><span class="dc-m">'+esc(c[2])+'</span></a></li>'}).join("")+'</ul>'}
function apps(){return '<div class="dapps">'+APPS.map(function(a){return '<div class="da"><span class="lab kick">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function mfg(){return '<ol class="dmfg khist">'+MFG.map(function(m){return '<li><span class="dmf-n">'+esc(m[0])+'</span><div><h3>'+esc(m[1])+'</h3><p>'+esc(m[2])+'</p></div></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={vial:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M15 6h10M16 6v6l-6 18a3 3 0 0 0 3 4h14a3 3 0 0 0 3-4l-6-18V6"/><path d="M12 25h16"/></svg>',
 plate:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 10h30v20H5Z"/><circle cx="12" cy="16" r="2.2"/><circle cx="20" cy="16" r="2.2"/><circle cx="28" cy="16" r="2.2"/><circle cx="12" cy="24" r="2.2"/><circle cx="20" cy="24" r="2.2"/><circle cx="28" cy="24" r="2.2"/></svg>',
 ab:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 34V21M20 21l-9-9M20 21l9-9M11 12l-4-4M29 12l4-4M14 9l-6 6M26 9l6 6"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>K-ASSAY® reagents, ELISAs and antibodies<span class="nomob"> · Seattle, since 1983</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Assays for the</span> <span class="nw">analyzer you have,</span> <em class="nw">kits for the</em> <em class="nw">bench you run.</em></h1>'+
    '<p class="s" data-r>Kamiya Biomedical Company makes <span class="nw">K-ASSAY®</span> immunoassay reagents for almost all chemistry analyzers, and thousands of ELISA kits, antibodies and biochemicals for research.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.vial+'</span><div><span class="lab">Diagnostics</span><p>Liquid, ready-to-use <span class="nw">K-ASSAY®</span> reagents, used by hospitals and clinical labs since 1997.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.plate+'</span><div><span class="lab">ELISA kits</span><p>Thousands of human and animal biomarker assays, many found nowhere else.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.ab+'</span><div><span class="lab">Antibodies and biochemicals</span><p>More than 1,300 antibodies and 200 biochemicals for life-science research.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="intro" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Kamiya Biomedical Company</span>'+
   '<h2 class="txt" id="mani">Since 1983, supplying the life science and medical communities with <em>laboratory research and diagnostic tools of the <span class="nw">highest quality.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1983</span><p class="k">Founded by Kohji Kamiya; in Seattle since 1996</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,300+</span><p class="k">Monoclonal and polyclonal antibodies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">Biochemicals, from substrates to polymerases</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">Inside</span> <em class="nw">a K-ASSAY.</em></h2>'+
    '<p class="st-in">How a latex-enhanced immunoturbidimetric assay, such as <span class="nw">K-ASSAY® RF</span> (Ver.2), turns a sample into a number on a standard chemistry analyzer.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Reagent</span><span>Reaction</span><span>Reading</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The reagent.</h2><p>Latex particles coated with antibody, suspended in a liquid, ready-to-use reagent. Light passes through the cuvette almost untouched. Nothing to mix, dissolve or dilute.</p></article>'+
     '<article class="step"><h2>The reaction.</h2><p>The target in the patient’s serum or plasma binds the antibodies and links the particles together. The more target, the larger the clumps.</p></article>'+
     '<article class="step"><h2>The reading.</h2><p>The clumps scatter light, so the analyzer reads a rise in absorbance and converts it to a concentration against calibrators. For RF (Ver.2): quantitative from 6.65 to 600 IU/mL.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">From the clinical lab</span> <em class="nw">to the</em> <em class="nw">research bench.</em></h2></div><p data-r><span class="nw">K-ASSAY®</span> immunoassay reagents for automated chemistry analyzers, and one of the largest selections of ELISA kits in the world, with antibodies and biochemicals beside them.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>K-ASSAY® for chemistry analyzers</span></div>'+cat(DX)+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Life-science research</span></div>'+lsl(LS)+'</div></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split"><span class="nw">Since 1983,</span> <em class="nw">from California</em> <em class="nw">to Seattle.</em></h2></div><p data-r>Founded by Kohji Kamiya in Thousand Oaks, Kamiya Biomedical Company has supplied research and diagnostic tools to laboratories worldwide for more than four decades.</p></div>'+
   '<div class="dmf-g kab"><div class="kfig" data-r><span class="kfig-n">43</span><span class="lab">Years in business</span><p>From staurosporine, the first product, to the broadest line of liquid serum protein immunoassay reagents of any company in the U.S.</p></div>'+
   '<div class="dmf-r">'+mfg()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Seattle</span> <em class="nw">to Düsseldorf.</em></h2></div><p data-r>At MEDICA 2026, and in our newest reagents and antibodies.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Laboratories, distributors and partners</span>'+
   '<h2 class="big split"><span class="nw">Let’s talk</span> <em class="nw">assays.</em></h2>'+
   '<p class="sub" data-r>Write to us about application parameters for your analyzer, about ELISA kits, antibodies and biochemicals, or about distribution.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Kamiya '+ARR+'</a><a class="btn" href="'+WEB+'pdf/catalog/KAMIYA_Diagnostics_Catalog.pdf" target="_blank" rel="noopener">Diagnostics catalog</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>12779 Gateway Drive<br>Seattle, WA 98168</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12065758068">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Certified</span><p data-r>ISO 13485:2016 and CE</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Kamiya Biomedical Company<br>12779 Gateway Drive<br>Seattle, WA 98168</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/about">About</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+12065758068">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Diagnostic reagents, ELISAs,<br>antibodies and biochemicals</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="80" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:800;font-size:112px;letter-spacing:.06em"><tspan fill="#f6f3ef">KAMIYA</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kamiya Biomedical Company</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology, #/about or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={};/* typed or linked hashes scroll to their section; nav clicks open the build-out pages (buildout.js) */
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",intro:"intro",products:"products",technology:"story",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kamiya Biomedical Company — K-ASSAY® reagents, ELISAs and antibodies",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec&&BOK[r.sec]){try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/";boOpen(r.sec);return}
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}if(BOK[r.sec]&&boOpen(r.sec))return;secGo(r.sec,true)},300)})()})();
