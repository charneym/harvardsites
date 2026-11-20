/* ================= VIEWS (home only; nav items open build-out pages, in-page CTAs scroll to their section) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){var ext=c[3].indexOf("bioinvision.com")<0;return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+(ext?'Read the release':'Learn more')+'</a></li>'}).join("")+'</ul>'}
function apps(){return '<ul class="pri">'+APPS.map(function(n){return '<li><span>'+esc(n)+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Pre-clinical imaging<span class="nomob"> · Cleveland, Ohio</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Every cell,</span><span class="l">in the <em>whole mouse.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Patented CryoViz™ cryo-imaging gives you 3D colour anatomy and multi-spectral fluorescence over mouse-sized specimens, with microscopic resolution and single-cell sensitivity.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How CryoViz™ works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">Render · a frozen specimen block under the CryoViz™ objective</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About BioInVision</span>'+
   '<h2 class="txt" id="mani">CryoViz™ imaging fills the gap between whole-animal in vivo imaging and histology, <b class="w0">from the mouse to the organ, the tissue and the cell,</b> <em>to answer one question: where did my cells go?</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">120 TB+</span><span class="k">Imaging data library</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">33 M+</span><span class="k">Images processed</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">75+</span><span class="k">Publications</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100+</span><span class="k">Contract imaging customers</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Origin</span><p data-r>Developed with researchers at Case Western Reserve University and licensed exclusively to BioInVision, a Cleveland spinout led by two of its co-inventors.</p></div>'+
    '<div><span class="lab kick" data-r>Scale</span><p data-r>Sequential block-face images build colour and fluorescence volumes that routinely exceed 60 GB, viewed through multi-scale, interactive 3D rendering.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>Several competitive awards from the NIH and other agencies, used to grow CryoViz™ applications in stem cells, toxicology and nanoparticle drug delivery.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Section, image, <em>rebuild in 3D.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Freeze</span><span>Section</span><span>Image</span><span>3D</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Freeze the specimen.</h2><p>A whole mouse, an embryo or an excised organ is embedded and frozen, and sits in a motorised cryostat held between 0 and −30 °C.</p></article>'+
     '<article class="step"><h2>Cut a thin section.</h2><p>The cryostat shaves the block at a programmable 2 to 200 microns, exposing a fresh face of tissue every pass.</p></article>'+
     '<article class="step"><h2>Image the block face.</h2><p>A bright-field and fluorescence microscope on a robotic positioner photographs each face: colour anatomy, with labelled cells and imaging agents registered in other colours.</p></article>'+
     '<article class="step"><h2>Rebuild it in 3D.</h2><p>Stacked faces become volumes of more than 60 GB. Software maps nearly every labelled cell, from the whole mouse down to sub-cellular detail.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="specs" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>CryoViz™ at a glance</span><h2 class="d2 split">Resolution, field of view, <em>contrast and sensitivity.</em></h2></div><p data-r>Explore your sample in the digital domain. In 3D. In real colour. With microscopic resolution. Plug-ins and scripting extend the software to your own needs.</p></div>'+
   '<dl class="facts">'+SPEC.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products and services</span><h2 class="d2 split">Buy the instrument, <em>or send us the sample.</em></h2></div><p data-r>CryoViz™ is sold as an instrument and as a service to academic and government labs, biotech and pharmaceutical companies, hospitals and reference laboratories.</p></div>'+
   pfRows(PROD)+
   '<span class="lab sub-l pr" data-r>Application areas</span>'+apps()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by the people <em>who invented it.</em></h2></div><p data-r>Two of BioInVision’s principals are co-inventors of the CryoViz™ technology.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">In the <em>news.</em></h2></div><p data-r>A $2.5M NIH SBIR Phase II grant to develop AI-based 3D microscopic imaging, and earlier coverage of CryoViz™.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Start a study</span>'+
   '<h2 class="big split">You ship us samples. <em>We deliver results.</em></h2>'+
   '<p class="sub" data-r>Tell us your application, fluorophore and region of interest, and an application engineer will help design the experiment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email BioInVision '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Cleveland</span><p data-r>781 Beta Dr., Ste E<br>Cleveland, OH 44143</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Applications and systems</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Imaging service</span><p data-r><a class="ul" href="mailto:'+SUPPORT+'">'+SUPPORT+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>781 Beta Dr., Ste E<br>Cleveland, OH 44143</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/technology">Technology</a><br><a class="ul" href="#/more/products">Products</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Origin</span>CryoViz™ imaging, developed with Case Western Reserve University</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Sora\',sans-serif;font-weight:600;font-size:62px;letter-spacing:-.03em">BioInVision</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 BioInVision Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={technology:["Technology","technology"],products:["Products","products"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",technology:"story",specs:"specs",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — BioInVision",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"BioInVision — CryoViz™ 3D cryo-imaging for pre-clinical research, Cleveland",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
