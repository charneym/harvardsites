/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function prods(){return '<ul class="pfr">'+PRODS.map(function(c){
  return '<li><span class="lab tg">'+esc(c[1])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3></div><p>'+esc(c[2])+'</p><span class="lab prc">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tagless protein purification<span class="nomob"> · Columbus, Ohio</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Capture</span><span class="l">the protein,</span><span class="l"><em>lose the tag.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>iCapTag is a self-removing affinity tag. One column captures your protein; a small change in pH releases it, tagless. One platform from early discovery to manufacturing.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/products">See the products</a></div></div>'+
   '<p class="lab hcap" data-r>An intein, the self-cleaving protein segment the technology is built on, from its crystal structure (PDB 2IMZ). Splice junctions in red.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Inteins are protein segments that cut themselves out of the proteins they sit in. iCapTag puts that to work, so a single column gives you the protein you designed, <em>and nothing attached to it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">95–99%</span><span class="k">Purity in a single purification step, after a small pH change</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20+ yrs</span><span class="k">Of research on intein technologies behind the platform</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.7M+</span><span class="k">In grant support for the work that led to iCapTag</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Discovery to manufacturing</span><p data-r>The same chemistry runs in R&amp;D labs and in manufacturing facilities, so a process does not have to change platforms on the way to the clinic.</p></div>'+
    '<div><span class="lab kick" data-r>Beyond antibodies</span><p data-r>The first product on the market that can purify tagless non-mAb proteins for both research and manufacturing.</p></div>'+
    '<div><span class="lab kick" data-r>Patented at Ohio State</span><p data-r>Developed and patented by Dr. David W. Wood and his team at The Ohio State University, after work at Princeton University.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One column, <em>three moves.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Capture</span><span>Wash</span><span>Release</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The tag finds its partner.</h2><p>Your protein is expressed with the iCapTag tag. Load the lysate and the tag binds its partner on the resin, holding your protein on the column while everything else flows past.</p></article>'+
     '<article class="step"><h2>Everything else washes out.</h2><p>A wash carries away host proteins and other impurities. Only the tagged target stays behind, bound to the resin.</p></article>'+
     '<article class="step"><h2>A pH shift, and it lets go.</h2><p>Shift the pH and wait: the intein cuts itself away from your protein, which elutes tagless. The tag stays on the column, and the resin is stripped and reused.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Columns, resin <em>and beads.</em></h2></div><p data-r>iCapTag comes prepacked for FPLC and gravity workflows or as bulk resin, and iCapMag brings the same tag to magnetic beads. Sold online since 2021; custom volumes on request.</p></div>'+
   '<p class="crq top" data-r><a class="lk" href="'+STORE+'" target="_blank" rel="noopener">Order from the online store '+ARR+'</a></p>'+
   '<figure class="shot" data-r><img src="products.webp" alt="iCapTag 1 mL and 5 mL columns and 10 mL and 25 mL bottles of iCapTag resin" width="1600" height="1067" loading="lazy"><figcaption class="lab">iCapTag columns and resin, as shipped</figcaption></figure>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+["State of Ohio","Ohio Third Frontier","Ohio Development Services Agency","Rev1 Ventures","The Ohio State University"].map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by people <em>who purify proteins.</em></h2></div><p data-r>Protein Capture Science was founded in 2018 in Columbus, Ohio, by experts in protein purification and product development.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the bench <em>to the podium.</em></h2></div><p data-r>Talks, posters and papers on self-removing affinity tags, from protocols for the lab to validating tag removal in GMP manufacturing.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Scientists, process teams and partners</span>'+
   '<h2 class="big split">Purify your next protein <em>without the tag.</em></h2>'+
   '<p class="sub" data-r>We are scientists like you. Write to us about your target protein, a custom order or a collaboration, and we will set up a time to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="tel:'+TEL+'">855-PCS-TAGS</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Protein Capture Science<br>1275 Kinnear Road, Suite 264<br>Columbus, OH 43212</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+SUPPORT+'">'+SUPPORT+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r>855-727-8247<br>Monday to Friday, 9 am to 5 pm</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1275 Kinnear Road, Suite 264<br>Columbus, Ohio 43212</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">855-727-8247</a></div>'+
   '<div class="c"><span class="lab">Platform</span>iCapTag™ and iCapMag™<br>tagless protein purification</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="46" text-anchor="middle" style="font-family:\'Playfair Display\',Georgia,serif;font-weight:400;font-size:46px;letter-spacing:.02em"><tspan fill="#f4f2ee">Protein Capture</tspan><tspan fill="#ff4d42" dx="12" font-style="italic">Science</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Protein Capture Science</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Protein Capture Science — tagless protein purification, Columbus, Ohio",x:"Home"};
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
