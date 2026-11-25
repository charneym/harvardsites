/*<R:views>*//* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){
  function grp(g){return TEAM.filter(function(p){return p.g===g}).map(function(p){
    return '<li data-r><span class="rg-nm">'+esc(p.name)+'</span><span class="rg-rl">'+esc(p.title)+'</span></li>'}).join("")}
  return '<div class="lm-tg"><span class="lab kick" data-r>Management</span><ul class="lm-tm n3">'+grp("Management")+'</ul></div>'+
   '<div class="lm-tg"><span class="lab kick" data-r>Board of directors</span><ul class="lm-tm">'+grp("Board")+'</ul></div>'}
function sitesLine(){return '<div class="kl-pa gc-sites"><span class="lab kick" data-r>Highest-enrolling PREVENT sites</span><ul data-r>'+SITES.map(function(p){return '<li>'+esc(p)+'</li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li data-r><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Non-invasive","Transcutaneous electrodes","Stimulation is applied through the skin by two electrodes on the abdominal wall: no needles, no implant.",'<rect x="10" y="12" width="14" height="26"/><rect x="32" y="12" width="14" height="26"/><path class="a" d="M17 38v10h22V38"/>'],
  ["Breath-synchronised","Times every exhalation","A flow sensor between the endotracheal tube and the ventilator’s Y-piece tells the control unit when each exhalation starts and ends.",'<path d="M6 28h44"/><path class="a" d="M6 28c5-14 10-14 15 0c4 10 10 12 15 6c4-5 9-6 14-6"/>'],
  ["From day one","No patient effort needed","Electrical stimulation does not require patient cooperation, so therapy can begin on the first day of ventilation, while patients are sedated or delirious.",'<rect x="9" y="12" width="38" height="34"/><path d="M9 22h38M18 8v8M38 8v8"/><path class="a" d="M21 34l5 5 10-10"/>'],
  ["Quick and simple","Built for the ICU","Designed to be quick and simple to use at the bedside, alongside the ventilator the patient is already on.",'<rect x="8" y="14" width="40" height="28"/><rect class="a" x="14" y="19" width="22" height="14"/><circle class="f" cx="42" cy="26" r="2.2"/><circle class="f" cx="42" cy="34" r="2.2"/>']];
  return '<div class="caps gc-caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function regs(){return '<div class="kl-pa"><span class="lab kick" data-r>Regulatory</span><ul data-r><li>FDA Breakthrough Device Designation, 2019</li><li>CE marked, 2019</li><li>FDA Emergency Use Authorization, 2020</li></ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Liberate Medical<span class="nomob"> · Crestwood, Kentucky</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stimulate</span><span class="l">to <em>liberate.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>VentFree contracts the abdominal wall muscles in time with each exhalation, so patients on mechanical ventilation can start preparing to wean from day one.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/clinical">The PREVENT trial</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap cg-mrow">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Mechanical ventilation keeps critically ill patients alive, but prolonged use weakens the expiratory muscles they need to come off it. Liberate Medical develops non-invasive neuromuscular electrical stimulation <em>to keep those muscles working from day one.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">250</span><p class="k">Patients enrolled in the global PREVENT pivotal trial</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">800k+</span><p class="k">US ICU admissions a year that use mechanical ventilation</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$45B</span><p class="k">Estimated annual burden of prolonged ventilation on US healthcare</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">In time with every breath, <em>from day one.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sense</span><span>Time</span><span>Stimulate</span><span>Repeat</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A sensor reads every breath.</h2><p>The VentFree flow sensor sits between the patient’s endotracheal tube and the Y-piece of the ventilator, and sends the flow signal to the control unit.</p></article>'+
     '<article class="step"><h2>The unit finds each exhalation.</h2><p>The control unit monitors the flow signal and switches stimulation on between the start and the end of expiratory flow, breath after breath.</p></article>'+
     '<article class="step"><h2>The abdominal muscles contract.</h2><p>Two stimulation electrodes on the abdominal wall deliver non-invasive, transcutaneous stimulation, so the muscles that drive exhalation keep working.</p></article>'+
     '<article class="step"><h2>Twice a day, while ventilated.</h2><p>In the PREVENT study, VentFree is applied for 30 minutes twice a day, at least five days a week, until ICU discharge or 28 days, to keep the expiratory muscles strong for weaning.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The VentFree Respiratory <em>Muscle Stimulator.</em></h2></div><p data-r>The first and only non-invasive, breath-synchronised neuromuscular electrical stimulator designed to reduce the duration of mechanical ventilation by improving expiratory muscle strength and cough.</p></div>'+
   caps()+regs()+
   '<p class="note-s" data-r>VentFree is CE marked and available for sale in the European Economic Area. In the USA it has Emergency Use Authorization and has not been cleared or approved by the FDA; the device used in the PREVENT study is for investigational use only.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">Evidence, built <em>trial by trial.</em></h2></div><p data-r>Two randomised pilot trials in Europe and Australia, and now PREVENT: a 250-patient pivotal trial at intensive care units around the world, funded in part by the US Department of Defense.</p></div>'+
   pipeRows(PIPE)+sitesLine()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>VentFree.</em></h2></div><p data-r>Engineering, clinical affairs and a board with deep medical-device experience, leading Liberate Medical from Crestwood, Kentucky.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Trials, funding and regulatory steps: Liberate Medical in the record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to us about <em>VentFree.</em></h2>'+
   '<p class="sub" data-r>For questions about VentFree, the PREVENT study, partnerships or investment, the Liberate Medical team is here to help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/clinical">The PREVENT trial</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Liberate Medical, LLC</p><p data-r>6400 Westwind Way, Suite A</p><p data-r>Crestwood, KY 40014, USA</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@liberatemedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+18332034663">+1 (833) 203-4663</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Crestwood, Kentucky</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@liberatemedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Status</span>VentFree is CE marked and has FDA Breakthrough Device Designation and Emergency Use Authorization.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Figtree\',sans-serif;font-weight:400;font-size:60px">LIBERATE MEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Liberate Medical, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Liberate Medical — VentFree Respiratory Muscle Stimulator",x:"Home"};
}
