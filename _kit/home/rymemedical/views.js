/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+p.sum+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function partners(){return '<ul class="pfr prt">'+PARTNERS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[1])+'</b></span><div class="pgm"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[2])+'</span></div>'+
   '<p>'+c[3]+'</p><span class="lab lk"><a class="ul" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+' '+ARR+'</a></span></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Targeted lung denervation","A non-surgical, bronchoscopically guided procedure designed to target the overactive nerves that may contribute to airway narrowing, mucus production and exacerbations.",'<path d="M28 6v16M28 22c-4 6-12 8-16 16M28 22c4 6 12 8 16 16"/><path class="a" d="M12 46c3-2 5-4 6-8M44 46c-3-2-5-4-6-8"/>'],
  ["A balloon catheter and console","A small flexible tube with a balloon at the end, and a console that lets the physician control and monitor balloon inflation and apply the treatment.",'<path d="M4 28h14M38 28h14"/><ellipse cx="28" cy="28" rx="11" ry="8"/><path class="a" d="M10 20l-6 8 6 8"/>'],
  ["Cold, delivered precisely","The console delivers cold gas (nitrous oxide) to the balloon to freeze the nerves, then the balloon thaws and deflates before moving to the next area.",'<path d="M28 8v40M11 18l34 20M11 38l34-20"/><path class="a" d="M23 11l5 5 5-5M23 45l5-5 5 5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From ClinicalTrials.gov (NCT07361653, NCT05967091) and the UK Health Research Authority&#8217;s research summary of the pilot study.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Targeted lung denervation<span class="nomob"> · COPD</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Revolutionizing</span><span class="l">the treatment</span><span class="l"><em>of COPD.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ryme Medical is developing a catheter-based therapy that seeks to reduce symptoms and improve long-term outcomes in patients with chronic obstructive pulmonary disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/clinical">The REVIVE study</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why COPD</span>'+
   '<h2 class="txt" id="mani">Chronic inflammation of the airways makes it hard to breathe, and many patients cannot be adequately managed with today&#8217;s medications and pulmonary rehabilitation. <em>Our vision is clear: to reduce the suffering of patients with COPD.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">400M+</span><p class="k">People worldwide affected by COPD</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$50B+</span><p class="k">Spent each year in the U.S. treating COPD</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">300</span><p class="k">Patients planned for the REVIVE pivotal study</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Quiet the nerves <em>around the airway.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Nerves</span><span>Balloon</span><span>Freeze</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Overactive nerves.</h2><p>Nerves running along the airways may contribute to airway narrowing and mucus production, making it more difficult to breathe and causing exacerbations.</p></article>'+
     '<article class="step"><h2>A balloon in the airway.</h2><p>Guided by bronchoscope, a balloon catheter is placed in the airway, and the console inflates the balloon against the airway wall.</p></article>'+
     '<article class="step"><h2>Freeze the nerves.</h2><p>The console delivers cold gas to the balloon to freeze the nerves. After a few minutes the balloon thaws and deflates, and moves to the next area.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The Ryme Lung <em>Denervation System.</em></h2></div><p data-r>A catheter-based therapy for patients with COPD: targeted lung denervation, performed through the airways with a cryo balloon catheter and a controlling console.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From first in human <em>to a pivotal study.</em></h2></div><p data-r>A first-in-human pilot study across Europe, the UK, Georgia and Australia, followed by REVIVE: a global, randomized, double-blind, sham-controlled pivotal study in moderate and severe symptomatic COPD.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Small team. <em>Big vision.</em></h2></div><p data-r>A seasoned team with years of experience and a history of success developing new therapeutic products, committed to integrity, quality, rapid device iteration and evidence-based medicine.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="partners" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Partners</span><h2 class="d2 split">Backed by seasoned <em>MedTech partners.</em></h2></div><p data-r>Great companies need more than a great idea and a great team. Ryme Medical is supported by four of the most seasoned and successful groups in the MedTech industry.</p></div>'+
   partners()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to <em>Ryme Medical.</em></h2>'+
   '<p class="sub" data-r>For partnerships, careers and general enquiries, write to our Mountain View office. Clinical sites and investigators can reach our clinical team directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Ryme '+ARR+'</a><a class="btn" href="#/clinical">See the studies</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>2495 Hospital Drive, Suite 300<br>Mountain View, CA 94040</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@rymemedical.com</a></p></div>'+
    '<div><span class="lab" data-r>Clinical studies</span><p data-r><a class="ul" href="mailto:ryme_clinical@rymemedical.com">ryme_clinical@<wbr>rymemedical.com</a><br>+1 (888) 862-1143</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>2495 Hospital Drive, Suite 300<br>Mountain View, CA 94040</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@rymemedical.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/partners">Partners</a></div>'+
   '<div class="c"><span class="lab">Caution</span>Investigational device. Limited by Federal (or United States) law to investigational use.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Jost\',sans-serif;font-weight:500;font-size:76px">RYME MEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ryme Medical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",team:"team",partners:"partners",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ryme Medical — targeted lung denervation for COPD",x:"Home"};
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
