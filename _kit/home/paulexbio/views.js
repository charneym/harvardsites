/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The root cause","Beta cells make insulin in response to food. Too little functional beta cell mass, lost to autoimmune attack in type 1 or to declining function and mass in type 2, is a key driver of both forms of diabetes.",'<circle cx="28" cy="28" r="18"/><circle class="f" cx="28" cy="28" r="6"/><circle class="a" cx="17" cy="20" r="1.8"/><circle class="a" cx="39" cy="22" r="1.8"/><circle class="a" cx="20" cy="38" r="1.8"/><circle class="a" cx="37" cy="37" r="1.8"/>'],
  ["Taking the brake off","DYRK1A acts as a molecular brake on human beta cell proliferation. PAL-119 selectively inhibits it, so the transcription factor NFAT can return to the nucleus and switch dormant regenerative programmes back on.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M14 42 42 14"/><path d="M22 28h12M28 22v12"/>'],
  ["Dual action, by mouth","An oral small molecule from Mount Sinai research, engineered for target selectivity and much lower brain exposure than harmine, that also supports glucose sensing and insulin secretion through protein kinase A signalling.",'<rect x="12" y="20" width="32" height="16" rx="8"/><path d="M28 20v16"/><circle class="f" cx="20" cy="28" r="2.4"/><path class="a" d="M48 12l-6 6M8 44l6-6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Preclinical record</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the public abstract of NIDDK award 1R42DK148220-01, "Preclinical Development of Paulex-4 for Human Trials for Beta Cell Regeneration to treat Diabetes", September 2026.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Beta cell regeneration<span class="nomob"> · San Diego, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Helping the body</span><span class="l">rebuild its own</span><span class="l"><em>insulin-making cells.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Paulex Bio is developing PAL-119, an investigational oral small molecule designed to regenerate the pancreatic beta cells that make insulin and restore their response to glucose, in type 1 and type 2 diabetes. It is now in a Phase 1/2a trial.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The PAL-119 trial</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Diabetes is managed, not cured. Today\'s medicines replace insulin or stimulate its secretion, while the loss of insulin-producing beta cells, a central driver of <em>both type 1 and type 2</em>, goes untreated.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">828M</span><p class="k">People living with diabetes worldwide, about 38.4 million of them in the United States</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">250M</span><p class="k">People worldwide who depend on insulin</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10+ yrs</span><p class="k">Of life expectancy lost in both types of diabetes</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PAL-119 is designed to work</span><h2 class="d3">Release the brake, <em>regrow the cells.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Brake</span><span>Release</span><span>Regenerate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A brake on beta cells.</h2><p>Inside every human beta cell, the kinase DYRK1A tags the transcription factor NFAT and keeps it out of the nucleus. The genes for cell division, beta cell identity and insulin stay quiet, and the regenerative capacity of early life fades from puberty on.</p></article>'+
     '<article class="step"><h2>PAL-119 lifts it.</h2><p>Taken by mouth, PAL-119 selectively inhibits DYRK1A. NFAT returns to the nucleus and switches those programmes back on: cell-cycle entry, the maintenance of beta cell identity, and insulin synthesis.</p></article>'+
     '<article class="step"><h2>More cells, answering glucose.</h2><p>Beta cells divide again in a controlled way, rebuilding the mass that diabetes destroys. Through protein kinase A signalling the same molecule supports glucose sensing, so the new cells release insulin when the body needs it.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Regeneration, <em>once thought impossible.</em></h2></div><p data-r>More than a decade ago, researchers at the Icahn School of Medicine at Mount Sinai identified DYRK1A as a regulator of human beta cell proliferation, overturning the belief that adult beta cells could not meaningfully regenerate. Paulex holds exclusive worldwide rights to PAL-119 and related compounds, including composition-of-matter patent families.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">PAL-119, now <em>in the clinic.</em></h2></div><p data-r>A randomised, multipart Phase 1/2a first-in-human trial (NCT07901595) at clinical sites in Australia, in healthy volunteers and in adults with type 1 or type 2 diabetes, with C-peptide as a marker of the body\'s own insulin production. An NIH Fast-Track STTR grant supports the programme.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by the team <em>behind TZIELD®.</em></h2></div><p data-r>Paulex was founded in 2024 by Dr. Miguel Sanjuan and Dr. Francisco Leon, who helped bring TZIELD®, the first disease-modifying therapy for type 1 diabetes, to approval in 2022. The company is named for Paula and Alex, a co-founder\'s niece and nephew, who both live with type 1 diabetes.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Licensed science</span><p data-r>Exclusive worldwide rights from the Icahn School of Medicine at Mount Sinai to PAL-119 and related compounds.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH NIDDK Fast-Track STTR award 1R42DK148220, with Miguel Sanjuan as principal investigator.</p></div>'+
    '<div><span class="lab kick" data-r>Track record</span><p data-r>Leaders from Provention Bio, acquired by Sanofi for $2.9 billion in 2023, and from Pfizer, Diamyd Medical and City of Hope.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the bench <em>to the clinic.</em></h2></div><p data-r>The latest from Paulex Bio, the public NIH record and the research it builds on.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors, clinicians and the diabetes community</span>'+
   '<h2 class="big split">Talk to <em>Paulex Bio.</em></h2>'+
   '<p class="sub" data-r>Whether you would like to partner on beta cell regeneration, invest in the programme or follow the PAL-119 trial, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Paulex Bio '+ARR+'</a><a class="btn" href="#/pipeline">See the trial</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Paulex Bio, Inc.<br>La Jolla, San Diego<br>California</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Investors and media</span><p data-r>Tiberend Strategic Advisors<br><a class="ul" href="mailto:dirish@tiberend.com">dirish@tiberend.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>La Jolla, San Diego<br>California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Mission</span>To eliminate the root cause of diabetes, and create a world without it.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 214 59" aria-hidden="true"><path d="'+LOGO_W+'" fill="currentColor"/><path d="'+LOGO_G+'" fill="#7fbb3a"/></svg>'+
  '<div class="legal"><span class="lab">© 2026 Paulex Bio, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",how:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Paulex Bio — regenerating the body's own beta cells",x:"Home"};
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
