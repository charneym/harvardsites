/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages; Contact scrolls) ================= */
function progs(){return '<ul class="pfr">'+PROGS.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Cell therapy protection<span class="nomob"> · An Arizona State University spinout</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A hydrogel shield</span><span class="l">for the cells that</span><span class="l">make <em>insulin.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ImmunoShield Therapeutics is developing technology to protect cell therapies, designed to help therapeutic cells survive and function after implantation, without chronic immunosuppression. We’re starting with type 1 diabetes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Rendered: a hydrogel injection-molded spiral device holding islets</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Insulin-secreting cell therapies could restore the body’s own control of blood sugar. We build <b class="w0">the device that lets them survive</b>, so type 1 diabetes becomes <em>a solved problem, not a chronic condition.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.1M</span><span class="k">In NIH SBIR awards from NIDDK since 2023, Phase I through Phase II</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">≥50%</span><span class="k">Faster to make complex device geometries by hydrogel injection molding than other leading methods</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.8M</span><span class="k">People in the United States living with type 1 diabetes</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Retrievable</span><p data-r>One non-degradable device isolates the graft from the patient and can be fully retrieved, a safety benefit loose microcapsules cannot offer.</p></div>'+
    '<div><span class="lab kick" data-r>Designed for oxygen</span><p data-r>Computational modeling guides thin, high surface-area geometries, so oxygen reaches the cells inside: the problem that held back earlier devices.</p></div>'+
    '<div><span class="lab kick" data-r>Made at scale</span><p data-r>Injection molding is highly reproducible, works with diverse hydrogels and is simple to implement, down to encapsulating islets in the clinic.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the device works</span><h2 class="d3">Protected from the immune system, <em>open to oxygen.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Seal</span><span>Shield</span><span>Exchange</span><span>Vessels</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Islets, sealed in hydrogel.</h2><p>Donor islets, or stem cell-derived insulin-secreting cells, are cast into a soft, non-degradable hydrogel device by injection molding: one implant that can be retrieved in full.</p></article>'+
     '<article class="step"><h2>The immune system stays out.</h2><p>The gel is a physical barrier to direct recognition of the graft by immune cells, so the cells can be protected without chronic, systemic immunosuppressive drugs.</p></article>'+
     '<article class="step"><h2>Oxygen in, insulin out.</h2><p>Glucose and oxygen diffuse in; insulin diffuses out. High surface-area geometries keep every islet close to its oxygen supply.</p></article>'+
     '<article class="step"><h2>Vessels grow to the surface.</h2><p>A degradable hydrogel guides new blood vessels to the outside of the device, to maximise oxygen access and limit fibrosis around it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From small animals <em>to the clinic.</em></h2></div><p data-r>Funded by the National Institute of Diabetes and Digestive and Kidney Diseases, on the way to engaging the FDA and completing IND-enabling studies.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Spun out of <em>Arizona State.</em></h2></div><p data-r>Backed by ASU, the Flinn Foundation, the Center for Entrepreneurial Innovation and the City of Phoenix.</p></div>'+
   '<div class="tgrid"><figure class="lab-ph" data-r><img src="data:image/webp;base64,__LAB__" alt="ImmunoShield scientists working at a biosafety cabinet" width="760" height="979"><figcaption class="lab">In the lab · photo: ImmunoShield Therapeutics</figcaption></figure>'+
   team()+'</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and coverage.</em></h2></div><p data-r>Federal awards, with the full record on NIH RePORTER, and stories about the company.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and cell-therapy developers</span>'+
   '<h2 class="big split">Give your cells <em>a shield.</em></h2>'+
   '<p class="sub" data-r>For partnering, investment or research collaboration, write to ImmunoShield Therapeutics directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email ImmunoShield '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>ImmunoShield Therapeutics, Inc.<br>Chandler, Arizona</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TELH+'">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>ImmunoShield Therapeutics, Inc.<br>Chandler, Arizona</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Funding</span><a class="ul" href="'+RPT+'11404899" target="_blank" rel="noopener">NIH RePORTER</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Roboto\',Arial,sans-serif;font-weight:700;font-size:60px;letter-spacing:.06em">IMMUN<tspan class="o">O</tspan>SHIELD</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ImmunoShield Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ImmunoShield Therapeutics — Hydrogel macroencapsulation for cell therapy, Arizona",x:"Home"};
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
