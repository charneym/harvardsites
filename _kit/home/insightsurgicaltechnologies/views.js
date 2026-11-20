/* ================= VIEWS (home only: Technology / Products / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pt"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function mhg(lab,L){return '<div class="mh-group"><p class="mh-label">'+lab+'</p><ul class="mh-list">'+L.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div>'}
function mh(){return '<div class="mh">'+mhg("Founders and board",TEAM)+mhg("Leadership and advisors",TEAM2)+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Surgical navigation<span class="nomob"> · Lebanon, New Hampshire</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Image guidance</span><span class="l">that keeps up</span><span class="l"><em>with the brain.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>InSight Surgical is developing technologies that update image guidance throughout brain tumor surgery, keeping navigation accurate, and quantitative fluorescence that detects tumor the eye cannot see.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>An operating microscope: the instrument I²UPDATE’s stereovision cameras are designed to mount on.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Navigation starts surgery accurate to 2 mm or better. Then the brain shifts, and the error grows to an average of 6 to 10 mm, as much as 2.5 cm. <em>InSight keeps the map true to the field.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.6 mm</span><span class="k">Mean accuracy with updating, against 7.3 mm for conventional guidance, in 20 tumor resections</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100×</span><span class="k">Up to this much more sensitive than seeing fluorescence by eye, with a prototype probe</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">21</span><span class="k">Granted patents under exclusive licence, with more applications pending</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Automatic</span><p data-r>Updating runs on demand throughout the case and does not interrupt the surgical workflow.</p></div>'+
    '<div><span class="lab kick" data-r>No extra scanning</span><p data-r>No intraoperative CT, MR or ultrasound: the field itself supplies the data.</p></div>'+
    '<div><span class="lab kick" data-r>Any navigation system</span><p data-r>Designed to integrate with the image-guidance systems hospitals already use.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Guidance that holds <em>to the last millimeter.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Plan</span><span>Shift</span><span>Update</span><span>Detect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The plan, registered.</h2><p>Before the first incision, the preoperative MRI is co-registered with the patient. The tumor contour lies exactly where the tumor is, much like GPS.</p></article>'+
     '<article class="step"><h2>Then the brain shifts.</h2><p>Once the skull and dura open, tissue sinks and deforms. The map stays put, and conventional guidance drifts an average of 6 to 10 mm from the anatomy.</p></article>'+
     '<article class="step"><h2>The microscope sees it.</h2><p>Stereovision cameras on the surgical microscope capture the exposed surface. A 3D model of the brain uses those sparse data to update the whole MRI volume, not just the surface.</p></article>'+
     '<article class="step"><h2>Then, the last cells.</h2><p>Quantitative fluorescence measures the PpIX that tumor accumulates after 5-ALA, mapping concentration across the field and at the probe tip, below what the eye can see.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Three instruments, <em>one surgical view.</em></h2></div><p data-r>In development for brain tumor resection, starting with high-grade glioma and extending to low-grade glioma, meningioma and metastasis. Not cleared by the FDA or any other regulator.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Built on</span><p class="cr" data-r><span>Dartmouth College</span><i>·</i><span>Thayer School of Engineering</span><i>·</i><span>Geisel School of Medicine</span><i>·</i><span>Tuck School of Business</span><i>·</i><span>University Health Network, Toronto</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>the science.</em></h2></div><p data-r>Founded in October 2017 by senior members of a long-running, NIH-funded collaboration between Dartmouth and University Health Network, Toronto.</p></div>'+
   mh()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded <em>to reach the clinic.</em></h2></div><p data-r>Five SBIR grants, more than $6.5 million in all, have funded the prototypes. The latest milestones, each on the public record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">See the tumor <em>where it is now.</em></h2>'+
   '<p class="sub" data-r>InSight Surgical Technologies is based near Dartmouth College in Lebanon, New Hampshire, close to Dartmouth Hitchcock Medical Center. To talk about the technology, a partnership or a role on the team, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email InSight Surgical '+ARR+'</a><a class="btn" href="'+RP+'" target="_blank" rel="noopener">The NCI award</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>InSight Surgical Technologies, Inc.<br>Lebanon, NH 03766</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>National Cancer Institute<br>SBIR Phase II</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>InSight Surgical Technologies, Inc.<br>Lebanon, New Hampshire 03766</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Note</span>Investigational technology, not available for sale and not cleared by the FDA.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="54" text-anchor="middle" style="font-family:\'Raleway\',system-ui,sans-serif;font-weight:400;font-size:66px;letter-spacing:.3em">INSIGHT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 InSight Surgical Technologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",technology:"story",products:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"InSight Surgical Technologies — image guidance that keeps up with the brain, Lebanon, New Hampshire",x:"Home"};
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
