/*<R:views>*//* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function teamGroup(g){
  return '<div class="gx-tg"><span class="lab kick" data-r>'+esc(g)+'</span><ul class="gx-tm">'+TEAM.filter(function(p){return p.g===g}).map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span>'+(p.sum?'<p class="kl-sum">'+esc(p.sum)+'</p>':'')+'</li>'}).join("")+'</ul></div>'}
function team(){return teamGroup("Leadership")+teamGroup("Founders")}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Architecture","Dual layer, high density","Soft nitinol and platinum in two layers: a high-density mesh that promotes faster early thrombosis¹.",'<circle cx="28" cy="27" r="19"/><circle class="a" cx="28" cy="29" r="12"/><path d="M28 46v6"/>'],
  ["Two unique shapes","ARC and BASE","ARC for deep aneurysms where height exceeds width, BASE for shallow ones: a broad range of morphologies.",'<ellipse cx="18" cy="28" rx="10" ry="14"/><ellipse class="a" cx="40" cy="32" rx="12" ry="7"/><path d="M8 48h40"/>'],
  ["Ultra soft","Oversize with confidence","Oversize² with confidence, for ultimate conformability inside the sac.",'<path d="M10 40C10 20 46 20 46 40"/><path class="a" d="M16 40C16 27 40 27 40 40"/><path d="M6 44h44"/>'],
  ["Atraumatic leading tip","No lead-in marker band","A soft entry into the aneurysm, for fast, easy placement.",'<path d="M28 52V24"/><path class="a" d="M22 24C22 14 34 14 34 24"/><circle class="f" cx="28" cy="10" r="2"/>'],
  ["Simple sizing","2–19 mm","Treat aneurysms from 2 to 19 mm wide from one short, simple sizing chart³.",'<path d="M8 40h40M8 36v8M48 36v8"/><path class="a" d="M14 30h28"/><path d="M20 26v8M28 24v12M36 26v8"/>'],
  ["Fully visible","Seen throughout","Fully visible as it is placed, for quick, easy placement.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="7"/><circle class="f" cx="28" cy="28" r="2.4"/>']];
  return '<div class="caps gx-caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Galaxy Therapeutics<span class="nomob"> · Milpitas, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Seal more</span><span class="l">with one</span><span class="l"><em>device.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SEAL™ is a dual-layer intrasaccular flow diverter for brain aneurysms from 2 to 19 mm: wide-neck bifurcation and sidewall, ruptured and unruptured. Now CE marked in Europe.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/technology">The device</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap gx-mrow">'+
   '<div class="mani-in"><span class="lab kick" data-r>Inspired by nature</span>'+
   '<h2 class="txt" id="mani">Founded and led by seasoned neurointerventionalists, Galaxy Therapeutics brings nature to the bedside: <em>inspired by the jellyfish, SEAL is built to transform the treatment of brain aneurysms.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">279</span><p class="k">Patients enrolled in the SEAL IT pivotal trial, across 50 US sites</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2–19</span><p class="k">Millimetres: the aneurysm widths one SEAL device can treat</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">CE</span><p class="k">Marked under the EU Medical Device Regulation, August 2026</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One device, <em>from neck to dome.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Size</span><span>Enter</span><span>Deploy</span><span>Divert</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Size the aneurysm.</h2><p>Two shapes cover the range: SEAL ARC for deep aneurysms, where height is greater than width, and SEAL BASE for shallow ones. Together they treat widths from 2 to 19 mm.</p></article>'+
     '<article class="step"><h2>Enter softly.</h2><p>Through the microcatheter, SEAL reaches the neck of the aneurysm. Its atraumatic leading tip has no lead-in marker band, for a soft entry and fast, easy placement.</p></article>'+
     '<article class="step"><h2>Deploy your way.</h2><p>Push out or unsheath: the technique is the physician’s choice. The ultra-soft dual layer opens and conforms to the sac, fully visible as it is placed.</p></article>'+
     '<article class="step"><h2>Divert the flow.</h2><p>The high-density mesh across the neck enhances flow diversion, so blood keeps to the parent vessels and the sac goes on to early thrombosis¹.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The SEAL™ <em>advantage.</em></h2></div><p data-r>The Saccular Endovascular Aneurysm Lattice redefines the power of one: a novel 3D spatial design with a dual-layer architecture, in one device for a diverse range of aneurysms.</p></div>'+
   caps()+
   '<div class="gx-notes" data-r><p class="note-s">European Union: the SEAL™ Embolization System is CE marked under Regulation (EU) 2017/745; product availability is subject to applicable local requirements. United States: CAUTION, investigational device. Limited by Federal (U.S.) law to investigational use only.</p>'+
   '<p class="note-s">1. Bench testing; results may vary and may not be indicative of clinical performance. 2. As compared with the WEB device; data on file. 3. See the instructions for use for sizing recommendations.</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">The evidence, <em>study by study.</em></h2></div><p data-r>From bench and animal models to first in human, a global registry and a US pivotal trial that has finished enrolling.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by <em>neurointerventionalists.</em></h2></div><p data-r>A clinical-phase company founded and led by physicians, supported by accomplished engineers and neurovascular experts.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>The CE mark, the pivotal trial and the registry: Galaxy Therapeutics in the record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Bring SEAL™ <em>to your patients.</em></h2>'+
   '<p class="sub" data-r>For local availability, distribution and physician training in Europe, clinical questions or investor relations, the Galaxy Therapeutics team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to the team '+ARR+'</a><a class="btn" href="#/clinical">The evidence</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Galaxy Therapeutics, Inc.<br>803 Ames Avenue<br>Milpitas, CA 95035, USA</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">Contact@gtseal.com</a></p></div>'+
    '<div><span class="lab" data-r>Instructions for use</span><p data-r>Paper copies of the IFU are available on request, by country and language.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Milpitas, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">Contact@gtseal.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Status</span>SEAL™ is CE marked in the EU; investigational in the United States.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Krona One\',sans-serif;font-weight:400;font-size:62px">GALAXY</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Galaxy Therapeutics</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Galaxy Therapeutics — SEAL™ for brain aneurysms",x:"Home"};
}
