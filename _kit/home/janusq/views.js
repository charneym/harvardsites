/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["A common thread","A common thread in many early neurodegeneration etiologies is mitochondrial dysfunction, which accelerates disease progression and cognitive decline.",'<ellipse cx="28" cy="28" rx="22" ry="12"/><path d="M14 22v10M21 18v14M28 24v14M35 18v14M42 24v10"/>'],
  ["Small peptides","Our peptides target proteins that play major roles in stabilizing and promoting the normal physiology of mitochondria.",'<circle cx="10" cy="28" r="4"/><circle cx="22" cy="22" r="4"/><circle cx="34" cy="28" r="4"/><circle class="f" cx="46" cy="22" r="4"/><path d="M14 26l4-2M26 24l4 2M38 26l4-2"/>'],
  ["Early molecular events","Rather than the hypothesized causative agents, our approach addresses early molecular events in the pathogenesis of AD, HD and PD.",'<path d="M6 44h44"/><path class="a" d="M10 44C18 44 20 14 28 14s10 30 18 30"/><circle class="f" cx="16" cy="34" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>NIH support</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Small Business Innovation Research awards to JanusQ, LLC, as listed on NIH RePORTER.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mitochondrial dysfunction<span class="nomob"> · Neurodegeneration</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Peptides that keep</span><span class="l">mitochondria <em>whole.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>JanusQ is developing peptide-based therapies that target mitochondrial dysfunction in Alzheimer&#8217;s, Huntington&#8217;s and Parkinson&#8217;s diseases.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why mitochondria</span>'+
   '<h2 class="txt" id="mani">Therapies aimed at the hypothesized causes of Alzheimer&#8217;s, Huntington&#8217;s and Parkinson&#8217;s have not seen clinical success. <em>We go after an earlier event: mitochondrial dysfunction.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Lead peptides, each showing strong efficacy in animal models of AD, HD or PD</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">NIH SBIR awards to JanusQ since 2020, from the NIA and the NINDS</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~6M</span><p class="k">Americans whose memory and cognition are eroded by Alzheimer&#8217;s disease</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Block the bond, <em>keep the mitochondrion.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Energy</span><span>Stress</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Mitochondria power neurons.</h2><p>Healthy mitochondria keep their shape and their DNA intact, and supply the energy that neurons need to survive.</p></article>'+
     '<article class="step"><h2>Disease proteins pull them apart.</h2><p>In Alzheimer&#8217;s, the mitochondrial protein ATAD3A binds the fission enzyme Drp1, and the mitochondrion fragments. Mutant huntingtin does similar damage through VCP.</p></article>'+
     '<article class="step"><h2>A peptide blocks the bond.</h2><p>DA1, the peptide behind JQ-A1, prevents ATAD3A from associating with Drp1, reduces mitochondrial fragmentation and reduces deficits in mouse models of AD.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Small peptides, <em>one common thread.</em></h2></div><p data-r>Spun out of Case Western Reserve University, JanusQ uses a peptide-based strategy that targets the proteins that stabilize mitochondria and promote their normal physiology.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three lead peptides, <em>three diseases.</em></h2></div><p data-r>With three lead peptides showing strong efficacy in animal models of Alzheimer&#8217;s, Huntington&#8217;s and Parkinson&#8217;s diseases, JanusQ is driving towards the clinic.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physiologists and <em>drug developers.</em></h2></div><p data-r>Founded by scientists from the Department of Physiology &amp; Biophysics at Case Western Reserve University, with decades of experience in pharmacology and finance.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants and <em>milestones.</em></h2></div><p data-r>NIH Small Business Innovation Research awards supporting JanusQ&#8217;s peptide programs.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors and partners</span>'+
   '<h2 class="big split">Talk to <em>JanusQ.</em></h2>'+
   '<p class="sub" data-r>Questions about our peptides or our programs? Write to us, or drop by our lab at the Cleveland Clinic Global Cardiovascular Innovation Center.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to JanusQ '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Lab</span><p data-r>10000 Cedar Ave, GCIC2-113<br>Cleveland, OH 44106</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">george.farr@janusq.com</a></p></div>'+
    '<div><span class="lab" data-r>Hours</span><p data-r>Monday to Friday<br>9:00 am to 5:00 pm</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Lab</span>10000 Cedar Ave, GCIC2-113<br>Cleveland, OH 44106</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">george.farr@janusq.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programs</span>JQ-A1 · JQ-H3 · JQ-P2</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 120" aria-hidden="true"><text x="380" y="104" text-anchor="middle" style="font-family:\'Cabin\',sans-serif;font-weight:400;font-size:136px">JanusQ</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 JanusQ, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"JanusQ — peptides that protect mitochondria in neurodegeneration",x:"Home"};
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
