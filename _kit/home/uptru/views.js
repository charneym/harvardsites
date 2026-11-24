/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Identifies substitution","UPTru’s patented methodology identifies 100% of specimens falsified by specimen substitution, so a result can be trusted as the patient’s own.",'<rect x="14" y="10" width="14" height="36"/><rect x="30" y="10" width="14" height="36"/><path class="a" d="M17 30h8v13h-8z"/><path d="M33 30h8"/>'],
  ["A safe, approved marker","The method is based on fluorescein sodium, a safe and effective compound already approved for a range of clinical indications, taken by mouth in a drink.",'<path d="M16 12h24l-4 36H20z"/><path class="a" d="M18.5 26h19"/><circle class="f" cx="28" cy="36" r="3.4"/>'],
  ["Simple at the point of care","Authenticity is confirmed in an inexpensive and timely manner, in the clinic or the workplace, while respecting patients’ right to privacy.",'<rect x="10" y="16" width="36" height="28"/><path d="M10 24h36"/><path class="a" d="M19 35l6 5 12-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The opportunity</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Figures as published by UPTru. Trial details from ClinicalTrials.gov, NCT07356349 and NCT04071080.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Harnessing fluorescence<span class="nomob"> · urine drug testing</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A urine drug test</span><span class="l">you can <em>trust</em></span><span class="l"><em>is the patient’s own.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>UPTru’s patented point-of-care method uses fluorescein sodium, a safe, approved compound taken in a drink, to confirm that a urine sample is authentic, and to identify specimens falsified by substitution.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/trials">The Phase III trial</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">“In the construction of recovery any imperfection, no matter how small, in the foundation threatens the whole project. <em>Success depends on true and accurate information.</em>”</h2>'+
   '<p class="attr" data-r>Mark Dubé, MD, Founder and President</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">7%</span><p class="k">Of all urine drug tests may be invalidated by covert substitution of the sample</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$8.5B</span><p class="k">Estimated annual cost of point-of-care urine drug testing</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">100%</span><p class="k">Of specimens falsified by substitution identified by UPTru’s method</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A sample that <em>proves itself.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Swap</span><span>Mark</span><span>Confirm</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A sample can be swapped.</h2><p>Despite major advances in drug testing technology, a urine sample can be covertly substituted, and the falsified result is estimated to affect as many as 7% of all tests.</p></article>'+
     '<article class="step"><h2>The patient drinks the marker.</h2><p>Before giving the sample, the patient drinks 100 mg of fluorescein sodium in a sports drink, then water. Within fifteen minutes the marker labels their own urine.</p></article>'+
     '<article class="step"><h2>Its fluorescence confirms it.</h2><p>Under blue light in a fluorometer, the patient’s own sample fluoresces. A substituted specimen stays dark, so it is identified on the spot.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Fluorescence that <em>confirms authenticity.</em></h2></div><p data-r>UPTru is developing new ways to improve the clinical utility of urine drug testing by reducing the impact of specimen substitution and alteration on the validity of results. Our lead innovation is a patented point-of-care methodology based on fluorescein sodium.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="trials" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Trials</span><h2 class="d2 split">From Phase I <em>to Phase III.</em></h2></div><p data-r>UPTru works with leading experts and organisations to integrate the method into clinical and laboratory urine drug testing protocols, with the support of the Northern Ontario Heritage Fund Corporation (NOHFC).</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Addiction medicine meets <em>laboratory medicine.</em></h2></div><p data-r>Together, Mark Dubé and Ian Dubé bring UPTru more than 75 years of experience in addiction medicine, clinical laboratory testing, academic medicine, clinical research and business management.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">ATTESTED <em>in the clinic.</em></h2></div><p data-r>The latest on our Phase III trial and published research, from the trial registry and our partners.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">We’re ready. <em>Let’s talk.</em></h2>'+
   '<p class="sub" data-r>For clinical, laboratory, workplace or partnering questions about UPTru’s method and the ATTESTED trial, please get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to UPTru '+ARR+'</a><a class="btn" href="#/trials">See the trials</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Company</span><p data-r>UPTru Inc.<br>Ontario, Canada</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@uptru.com</a></p></div>'+
    '<div><span class="lab" data-r>Phase III trial</span><p data-r><a class="ul" href="'+CTG+'" target="_blank" rel="noopener">NCT07356349</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Ontario, Canada</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@uptru.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/trials">Trials</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Method</span>Oral fluorescein sodium · urine specimen authenticity</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="64" text-anchor="middle" style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:72px">UPTru</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 UPTru Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",trials:"trials",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"UPTru — confirming the authenticity of point-of-care urine drug tests",x:"Home"};
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
