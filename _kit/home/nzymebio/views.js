/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Pepsin is the target","Pepsin, detected in the airway of patients with LPR, causes inflammation and promotes disease independent of gastric acid., which makes it a key therapeutic target.",'<circle cx="28" cy="28" r="17"/><path d="M28 11c-5 6-5 12 0 17s5 11 0 17"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["A known safety profile","Repurposing and reformulating a drug with a good safety and tolerability profile allows expeditious assessment in a clinical trial.",'<path d="M28 7l17 6v13c0 11-7 19-17 23-10-4-17-12-17-23V13z"/><path class="a" d="M20 28l6 6 11-12"/>'],
  ["Delivered where it acts","A new prolonged-release oral formulation and a dry powder inhaler for local delivery of a low dose are expected to significantly improve drug delivery and efficacy for reflux.",'<rect x="14" y="20" width="28" height="16" rx="8"/><path d="M28 20v16"/><path class="a" d="M28 4v10M23 9l5 5 5-5"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From nzymebio.com and N-Zyme&#8217;s releases. The NIH award is National Institute on Aging Award Number 1R01AG097515-01.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Laryngopharyngeal reflux<span class="nomob"> · Phase 2</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The first pepsin</span><span class="l">inhibitor <em>for reflux.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>N-Zyme Biomedical is developing safe, effective and efficient treatments for laryngopharyngeal reflux, a disease with no effective medical therapy that reportedly affects 10&#8211;30% of the U.S. population.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why LPR</span>'+
   '<h2 class="txt" id="mani">Chronic cough, throat clearing, hoarseness, a lump in the throat. Despite the burden, there is no effective medical therapy for LPR. <em>We aim to create the world&#8217;s first pepsin inhibitor.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10&#8211;30%</span><p class="k">Of the U.S. population reportedly affected by laryngopharyngeal reflux</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$26B</span><p class="k">Spent each year on proton pump inhibitors for LPR, though placebo-controlled trials failed to show efficacy</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10%</span><p class="k">Of all visits to otolaryngologists are estimated to involve LPR</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Stop the enzyme, <em>spare the throat.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Reflux</span><span>Pepsin</span><span>Inhibit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Reflux reaches the throat.</h2><p>In LPR, gastric contents flow back up the esophagus into the larynx and pharynx, irritating the airway and the digestive tract.</p></article>'+
     '<article class="step"><h2>Pepsin does the damage.</h2><p>Pepsin, a digestive enzyme detected in the airway of patients with LPR, causes inflammation and promotes disease independent of gastric acid.</p></article>'+
     '<article class="step"><h2>Inhibit the enzyme.</h2><p>Fosamprenavir binds to and inhibits pepsin, preventing pepsin-mediated laryngeal inflammation and damage in an in vivo model of LPR.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A new class of <em>reflux medicine.</em></h2></div><p data-r>Our research shows that fosamprenavir binds to and inhibits pepsin. In support, patients taking HIV protease inhibitors have a significantly lower incidence of LPR than the general population.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Oral and inhaled, <em>for LPR and GERD.</em></h2></div><p data-r>A systemic program of oral pepsin inhibitors for LPR and GERD, and an aerosolized program for local, low-dose delivery to the throat. NZYM-001 is now in a Phase 2 trial, and a Series A closed in July 2026 funds two Phase 2 programs, in LPR and PPI-refractory GERD.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Reflux scientists and <em>drug developers.</em></h2></div><p data-r>Founded by Franco Vigile, an entrepreneur, and Nikki Johnston, PhD, who has dedicated her career to LPR research, with an advisory board from the business, science and medical communities.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>N-Zyme.</em></h2></div><p data-r>Press releases on our clinical program, financing, grants and intellectual property.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors and partners</span>'+
   '<h2 class="big split">Talk to <em>N-Zyme.</em></h2>'+
   '<p class="sub" data-r>Interested in investing and/or partnering? We look forward to hearing from you, and can share our investor presentation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to N-Zyme '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Offices</span><p data-r>N-Zyme Biomedical, Inc.<br>Newark, Delaware<br>and Wauwatosa, Wisconsin</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@nzymebio.com</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trials</span><p data-r>Contacting us about trial participation? Send only an email address or phone number, and we will forward it to the trial coordinator.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Offices</span>Newark, Delaware<br>Wauwatosa, Wisconsin</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@nzymebio.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programs</span>NZYM-001 · NZYM-002 · NZYM-003</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:400;font-size:76px">N&#183;ZYME BIOMEDICAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 N-Zyme Biomedical, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"N-Zyme Biomedical — the first pepsin inhibitor for reflux",x:"Home"};
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
