/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function sysRows(){return '<div class="plat">'+SYS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function pathRows(){return '<ul class="pfr path">'+PATH.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function inv(){return '<p class="inv" data-r>'+INV.map(function(n,i){return '<span>'+esc(n)+(i===0?' <i>(lead, Series A)</i>':'')+'</span>'}).join('<b aria-hidden="true">·</b>')+'</p>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Colorectal surgery<span class="nomob"> · Clinical stage</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Finding a better way</span><span class="l">for patients facing</span><span class="l"><em>colorectal surgery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ColoSeal™ is a minimally invasive intraluminal colonic diversion system, designed to protect a colorectal anastomosis while it heals and to avoid the need for a temporary ostomy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div></div>'+
   '<span class="lab cap" aria-hidden="true">Render · ColoSeal™ ICD in place</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">Averto Medical is a privately held, clinical stage medical technology company focused on solutions for patients suffering from gastrointestinal diseases, <b class="w0">beginning with ColoSeal™,</b> <em>an alternative to the temporary ostomy.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">100,000+</span><span class="k">Patients a year undergoing colorectal surgery whom ColoSeal™ could help avoid a temporary diverting ostomy</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$30.5M</span><span class="k">Oversubscribed Series A, led by Cormorant Asset Management, 2024</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">250</span><span class="k">Patients planned in the randomized pivotal study against a protective diverting ostomy</span></div>'+
   '</div>'+
   sysRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Protection from the inside, <em>no ostomy.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Join</span><span>Ostomy</span><span>Anchor</span><span>Diversion</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The join.</h2><p>After a tumour or a diseased segment is removed, the surgeon reconnects the bowel. That join, the anastomosis, has to heal without contact from fecal flow.</p></article>'+
     '<article class="step"><h2>The ostomy.</h2><p>Today the join is usually protected by a temporary diverting ostomy, an opening through the abdomen into a bag. Reversing it later carries an 18% complication rate, and many patients keep it for life.</p></article>'+
     '<article class="step"><h2>The anchor.</h2><p>ColoSeal™ goes in transanally at the end of surgery. Its anchor is deployed in healthy bowel, ideally 10–20 cm above the join, and a vacuum around its circumference holds it in place.</p></article>'+
     '<article class="step"><h2>The diversion.</h2><p>A sheath carries fecal flow past the anastomosis and out to a collection bag for about ten days. After a leak test, the device comes out in about five minutes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="clinical" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From Breakthrough designation <em>to a pivotal trial.</em></h2></div><p data-r>By 2025 ColoSeal™ had been used in about 40 patients. A randomized pivotal study now compares it with a protective diverting ostomy, toward a de novo clearance.</p></div>'+
   pathRows()+
   '<p class="ack" data-r>Research is supported by the National Cancer Institute (R44CA287615) and the National Institute of Diabetes and Digestive and Kidney Diseases (R44DK143876) of the National Institutes of Health. ColoSeal™ is in clinical studies and is not cleared by the FDA.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Surgeons and builders, <em>backed for the long run.</em></h2></div><p data-r>Founded by a reconstructive surgeon who repaired ostomies, and chaired by a former gastroenterologist who cared for patients living with them.</p></div>'+
   team()+
   '<span class="lab sub-l pr" data-r>Investors</span>'+inv()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, designation <em>and financing.</em></h2></div><p data-r>Releases from Averto Medical and coverage of ColoSeal™.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Let’s make the ostomy <em>the exception.</em></h2>'+
   '<p class="sub" data-r>For clinical collaboration, partnership or investment in ColoSeal™, write to the Averto Medical team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Averto Medical '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Averto Medical, Inc.<br>1100 Island Drive, Suite 202<br>Redwood City, CA 94065</p></div>'+
    '<div><span class="lab" data-r>Product</span><p data-r>ColoSeal™ Intraluminal Colonic Diversion System</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Averto Medical, Inc.<br>1100 Island Drive, Suite 202<br>Redwood City, CA 94065</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Notice</span>ColoSeal™ is in clinical studies and is not cleared by the FDA. Formerly Savage Medical, Inc.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:600;font-size:62px;letter-spacing:.06em">AVERTO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Averto Medical, Inc.</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Averto Medical — ColoSeal™, a way through colorectal surgery without a temporary ostomy",x:"Home"};
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
