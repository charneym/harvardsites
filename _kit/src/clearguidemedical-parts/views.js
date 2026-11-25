/*<R:views>*//* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){
  return '<ul class="cg-tm">'+TEAM.map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span><p class="kl-sum">'+esc(p.sum)+'</p></li>'}).join("")+'</ul>'}
function sitesLine(){return '<div class="kl-pa gc-sites"><span class="lab kick" data-r>Clinical studies at</span><ul data-r>'+SITES.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["FDA 510(k) cleared · CE marked","SCENERGY","AR-guided biopsies and ablations with MRI, CT and your own ultrasound: precision targeting with less need for intermediate imaging.",'<rect x="9" y="14" width="38" height="26"/><path d="M22 48h12M28 40v8"/><path class="a" d="M28 20v14M21 27h14"/><circle class="a" cx="28" cy="27" r="4.5"/>'],
  ["Patented transperineal guidance","SCENERGY TP","Rapid, accurate MR- or CT-guided needle placement through a lettered grid, so targeted biopsy and cryoablation fit in one session in the MRI suite.",'<rect x="12" y="8" width="32" height="34"/><g class="f"><circle cx="20" cy="16" r="1.6"/><circle cx="28" cy="16" r="1.6"/><circle cx="36" cy="16" r="1.6"/><circle cx="20" cy="25" r="1.6"/><circle cx="36" cy="25" r="1.6"/><circle cx="20" cy="34" r="1.6"/><circle cx="28" cy="34" r="1.6"/><circle cx="36" cy="34" r="1.6"/></g><circle class="a" cx="28" cy="25" r="4"/><path d="M18 42v8M38 42v8"/>'],
  ["Investigational device","LUMENA","Designed to use AI to detect the needle and AR to project guidance onto the patient, so the focus stays on the interventional site, not the screen.",'<path d="M8 40h40"/><path class="a" d="M14 40L28 14L42 40"/><circle class="f" cx="28" cy="14" r="2.4"/><path d="M28 18v22"/>'],
  ["Markers and instrument tags","VisiMARKERs & TipTAGs","Sterile on-patient markers register imaging automatically in under 10 seconds; TipTAGs let the cameras track each instrument tip, several at once.",'<rect x="8" y="10" width="18" height="18"/><rect class="f" x="12" y="14" width="5" height="5"/><rect class="f" x="18" y="20" width="4" height="4"/><path d="M34 46L46 12"/><rect class="a" x="36" y="30" width="10" height="10" transform="rotate(20 41 35)"/>']];
  return '<div class="caps gc-caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function partners(){return '<div class="kl-pa"><span class="lab kick" data-r>Backed by</span><ul data-r><li>R&amp;D funding from NIH and NSF</li><li>Maryland TEDCO</li><li>Johns Hopkins FastForward, first start-up</li></ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clear Guide Medical<span class="nomob"> · Baltimore, Maryland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">AR- and AI-</span><span class="l">guided</span><span class="l"><em>procedures.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Navigation for the needle: computer vision, artificial intelligence and augmented reality that make biopsies and ablations under MRI, CT and ultrasound more precise and efficient.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/technology">The solutions</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap cg-mrow">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why Clear Guide</span>'+
   '<h2 class="txt" id="mani">A Johns Hopkins spin-out in Baltimore, Clear Guide Medical makes image-guided interventions clearer: <em>precision targeting, with as little as one CT or MRI scan per procedure.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><p class="k">Patients in the SCENERGY TP clinical study at Mayo Clinic</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">FDA 510(k) clearances for Clear Guide systems since 2014</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;10s</span><p class="k">Automatic registration with VisiMARKERs, lasting the whole procedure</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From scan to target, <em>in one session.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Register</span><span>Target</span><span>Track</span><span>Treat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The images register themselves.</h2><p>Sterile VisiMARKERs on the patient show up in CT and MR images. The optical cameras find them and register the scan to the patient automatically, in under 10 seconds, for the whole procedure.</p></article>'+
     '<article class="step"><h2>Lock onto the target.</h2><p>The operator picks a target on the scan and the system locks onto it, so the probe can move for a better view or better access without losing the target’s location.</p></article>'+
     '<article class="step"><h2>See where the tip is.</h2><p>A TipTAG on the instrument lets the cameras track its tip live in ultrasound or in CT/MRI. Through the SCENERGY TP grid, the needle follows its planned path to the target.</p></article>'+
     '<article class="step"><h2>Biopsy and ablate together.</h2><p>Several instruments can be tracked at once, so targeted biopsy and treatment such as cryoablation can be combined in a single session in the MRI suite.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A suite for <em>guided needles.</em></h2></div><p data-r>Hardware, algorithms and instrumentation, protected by multiple international patents: from the cleared SCENERGY platform to LUMENA, the next generation now in clinical studies.</p></div>'+
   caps()+partners()+
   '<p class="note-s" data-r>LUMENA: CAUTION, investigational device. Limited by Federal (or United States) law to investigational use. LUMENA has not been cleared or approved by the FDA.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="procedures" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Procedures</span><h2 class="d2 split">Where the needle <em>has to be right.</em></h2></div><p data-r>Biopsies, ablations, nerve blocks and cannulations: Clear Guide systems have been studied across MRI, CT and ultrasound-guided procedures.</p></div>'+
   pipeRows(PIPE)+sitesLine()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers and <em>clinicians.</em></h2></div><p data-r>Computer vision, medical imaging, clinical care and medical-device sales: the people leading Clear Guide Medical.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Studies, meetings and publications: Clear Guide Medical in the record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">See guidance <em>in your suite.</em></h2>'+
   '<p class="sub" data-r>For a demo, product and sales information, research collaborations or investment opportunities, the Clear Guide Medical team would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to sales '+ARR+'</a><a class="btn" href="#/procedures">The procedures</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>3600 Clipper Mill Road, Suite 400<br>Baltimore, MD 21211, USA</p></div>'+
    '<div><span class="lab" data-r>Email · US and Europe</span><p data-r><a class="ul" href="'+MAIL+'">sales@clearguidemedical.com</a><br><a class="ul" href="mailto:eusales@clearguidemedical.com">eusales@clearguidemedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+14105046540">+1 410 504 6540</a> (office)<br><a class="ul" href="tel:+14432678116">+1 443 267 8116</a> (sales)</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Baltimore, Maryland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">sales@clearguidemedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/procedures">Procedures</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Status</span>ISO 13485:2016 certified; CE marked; SCENERGY is FDA 510(k) cleared.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Archivo\',sans-serif;font-weight:500;font-size:60px">CLEAR GUIDE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Clear Guide Medical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",procedures:"procedures",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Clear Guide Medical — AR- and AI-guided procedures",x:"Home"};
}
