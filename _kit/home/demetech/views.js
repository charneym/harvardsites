/* ================= VIEWS (home only: Products / Technology / Manufacturing / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Dark and bone grounds alternate: hero (dark, the needle-and-suture render), about (bone,
   statement + figures), the anatomy-of-a-suture story (dark), products (bone: the catalogue in two columns, the DemeLENE MESH
   specifications, applications), manufacturing (dark: their own headquarters photograph beside four services), news (bone),
   contact (dark). Content is never hidden at rest: reveals only enhance (failsafe in site.js). ================= */
function cat(list){return '<ul class="dcat">'+list.map(function(c){return '<li><span class="dc-c">'+esc(c[1])+'</span><span class="dc-b">'+esc(c[0])+'</span><span class="dc-m">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function mesh(){return '<div class="dmesh">'+MESH.map(function(m){
  return '<div class="dm"><span class="dm-code">'+esc(m[6])+'</span><h3>'+esc(m[0])+'</h3><span class="dm-use">'+esc(m[1])+'</span><dl>'+
   '<div><dt>Thickness</dt><dd>'+esc(m[2])+'</dd></div><div><dt>Pore size</dt><dd>'+esc(m[3])+'</dd></div><div><dt>Burst strength</dt><dd>'+esc(m[4])+'</dd></div><div><dt>Weight</dt><dd>'+esc(m[5])+'</dd></div></dl></div>'}).join("")+'</div>'}
function apps(){return '<div class="dapps">'+APPS.map(function(a){return '<div class="da"><span class="lab kick">'+esc(a[0])+'</span><p>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function mfg(){return '<ol class="dmfg">'+MFG.map(function(m,i){return '<li><span class="dmf-n">'+String(i+1).padStart(2,"0")+'</span><div><h3>'+esc(m[0])+'</h3><p>'+esc(m[1])+'</p></div></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={needle:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 27A13 13 0 0 1 33 19"/><path d="M8 27c-1 4 1 7 5 8s8-1 11 1"/></svg>',
 mesh:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 12l6-4 6 4 6-4 6 4M8 12v8l6 4 6-4 6 4 6-4v-8M14 8v0M14 24v8M26 24v8M20 20v-8M8 20l6 4M32 20l-6 4M8 28l6 4 6-4 6 4 6-4"/></svg>',
 plant:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 33V18l8 5v-5l8 5v-5l8 5V8h4v25Z"/><path d="M12 33v-5h5v5M22 28h4"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Surgical sutures, mesh and bone wax<span class="nomob"> · Miami Lakes, Florida</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="nw">Wound closure,</span> <em class="nw">made in the USA.</em></h1>'+
    '<p class="s" data-r>DemeTECH makes surgical sutures, hernia mesh and bone wax in Miami Lakes, Florida, certified by the FDA, CE and ISO and used in more than 100 countries.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/products">Our products '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div>'+
   '</div>'+
   '<ul class="pil" aria-label="What we make">'+
    '<li class="p1" data-r><span class="pic">'+ICO.needle+'</span><div><span class="lab">Sutures</span><p>Seventeen suture materials, absorbable and nonabsorbable, on our own needles.</p></div></li>'+
    '<li class="p2" data-r><span class="pic">'+ICO.mesh+'</span><div><span class="lab">Mesh and bone wax</span><p>DemeLENE MESH for hernia repair in four weights, and DemeWAX bone wax.</p></div></li>'+
    '<li class="p3" data-r><span class="pic">'+ICO.plant+'</span><div><span class="lab">Contract manufacturing</span><p>R&amp;D, US production and regulatory support for new medical devices.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>About DemeTECH</span>'+
   '<h2 class="txt" id="mani">A world-renowned leader in surgical sutures, mesh and bone wax, headquartered in Miami, Florida. We make sutures of paramount quality <em>at a lower and more <span class="nw">reasonable cost.</span></em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+</span><p class="k">Countries where our products are distributed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">17</span><p class="k">Suture materials, absorbable and nonabsorbable</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">12</span><p class="k">Needle types, from round-bodied to micropoint spatula</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3"><span class="nw">Anatomy of</span> <em class="nw">a suture.</em></h2>'+
    '<p class="st-in">Point, swage and thread: what goes into every DemeTECH needle suture.</p>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Point</span><span>Swage</span><span>Thread</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The point.</h2><p>High-quality stainless steel, ground to the sharpness each tissue needs: slim without compromising strength, rigid enough to resist breaking, ductile enough to bend during surgery.</p></article>'+
     '<article class="step"><h2>The swage.</h2><p>Where needle meets thread, our production technology allows a closer ratio between the two without weakening the needle, so the body stays close to the suture’s diameter and bleeding and leakage are kept to a minimum.</p></article>'+
     '<article class="step"><h2>The thread.</h2><p>Seventeen materials, absorbable and nonabsorbable. DemeLENE polypropylene is dyed blue to stay visible in the body, and elicits only a minimal tissue reaction.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="products" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Seventeen sutures,</span> <em class="nw">one standard.</em></h2></div><p data-r>Every DemeTECH suture meets the requirements of the U.S. Pharmacopeia. Alongside them, DemeLENE MESH for hernia repair and DemeWAX bone wax.</p></div>'+
   '<div class="dcols"><div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Absorbable</span><span class="lab dn" data-r>08</span></div>'+cat(ABS)+'</div>'+
   '<div class="dcol"><div class="dcol-h"><span class="lab kick" data-r>Nonabsorbable</span><span class="lab dn" data-r>09</span></div>'+cat(NON)+'</div></div>'+
   '<div class="dmesh-h"><div><span class="lab kick" data-r>DemeLENE MESH</span><h3 data-r>Polypropylene mesh, <span class="nw">in four weights</span></h3></div><p data-r>Nonabsorbable mesh that reinforces or bridges hernia defects and stays soft and pliable while tissue grows through its pores. Trusted by doctors for more than 20 years.</p></div>'+
   mesh()+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="manufacturing" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Manufacturing</span><h2 class="d2 split"><span class="nw">From prototype</span> <em class="nw">to production,</em> <em class="nw">in the USA.</em></h2></div><p data-r>A complete one-stop shop for new medical devices: design, prototyping, US manufacturing and regulatory approval under one roof.</p></div>'+
   '<div class="dmf-g"><figure class="dhq" data-r><img src="hq.webp" alt="DemeTECH headquarters on Miami Lakes Drive, Miami Lakes, Florida" width="845" height="852" loading="lazy" decoding="async"><figcaption class="lab">Headquarters · 5980 Miami Lakes Drive, Florida</figcaption></figure>'+
   '<div class="dmf-r">'+mfg()+
   '<p class="dmask" data-r>When COVID-19 struck, we ramped up American-made surgical masks and N95 respirators: DemeMASK, made in the USA from the fabric to the packaging and the machinery.</p></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From Miami Lakes</span> <em class="nw">to Düsseldorf.</em></h2></div><p data-r>At MEDICA 2026, in new partnerships and in the press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, distributors and partners</span>'+
   '<h2 class="big split"><span class="nw">Let’s talk</span> <em class="nw">wound closure.</em></h2>'+
   '<p class="sub" data-r>Write to us about our sutures, mesh and bone wax, about distribution, or about manufacturing your medical device in the US.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to DemeTECH '+ARR+'</a><a class="btn" href="https://shop.demetech.us/" target="_blank" rel="noopener">Visit the shop</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>5980 Miami Lakes Dr<br>Miami Lakes, FL 33014</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13058241048">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Certified</span><p data-r>FDA, CE and ISO</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>DemeTECH Corporation<br>5980 Miami Lakes Dr<br>Miami Lakes, FL 33014</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/manufacturing">Manufacturing</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13058241048">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Surgical sutures, mesh<br>and bone wax, made in the USA</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="78" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:800;font-style:italic;font-size:118px;letter-spacing:-.02em"><tspan fill="#f3f7f8">DemeTECH</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DemeTECH Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/products, #/technology, #/manufacturing or #/news (the nav items) opens that item's build-out page, as a nav click does (buildout.js) ================= */
var BOK={products:1,technology:1,manufacturing:1,news:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",products:"products",technology:"story",manufacturing:"manufacturing",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DemeTECH — surgical sutures, mesh and bone wax, made in the USA",x:"Home"};
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
