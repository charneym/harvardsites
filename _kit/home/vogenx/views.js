/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Acts in the gut","Mizagliflozin is minimally absorbed and designed to act locally in the small intestine, where SGLT1 is the primary transporter for dietary glucose. Unlike SGLT2 inhibitors, it does not act systemically in the kidney.",'<path d="M8 20c8-6 12 6 20 0s12-6 20 0"/><path d="M8 36c8-6 12 6 20 0s12-6 20 0"/><circle class="f" cx="28" cy="28" r="3.2"/>'],
  ["Slower glucose, less GIP","By reducing and delaying glucose absorption after a meal, it lowers postprandial glucose and reduces secretion of insulin and of GIP, which may drive 60&#8211;80% of the postprandial insulin effect.",'<path d="M8 44h40"/><path d="M10 40C18 40 20 14 28 14s10 26 18 26"/><path class="a" d="M10 40c10 0 12-12 18-12s10 12 18 12"/>'],
  ["A known safety record","More than 500 subjects across 10 clinical studies, in healthy volunteers, people with type 2 diabetes and patients with PBH, well tolerated with no drug-related serious adverse events.",'<path d="M28 7l17 6v13c0 11-7 19-17 23-10-4-17-12-17-23V13z"/><path class="a" d="M20 28l6 6 11-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Results to date</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+e[0]+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From vogenx.com and the Vogenx release of 15 October 2026. VGX-001-012 was a single-blind, randomized, placebo-controlled, ascending-dose crossover study in 15 participants with PBH. Mizagliflozin is investigational.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Post-bariatric hypoglycemia<span class="nomob"> · Phase 2b</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Slowing glucose</span><span class="l"><em>where it enters.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Vogenx is a clinical-stage biopharmaceutical company developing mizagliflozin, a first-in-class oral SGLT1 inhibitor that acts in the small intestine, for post-bariatric hypoglycemia and gastroparesis.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why PBH</span>'+
   '<h2 class="txt" id="mani">After bariatric surgery, glucose can be absorbed too fast. Insulin overshoots, and blood sugar falls dangerously low. There are no FDA-approved therapies for PBH. <em>Mizagliflozin acts at the start of that chain.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">25&#8211;75%</span><p class="k">Of bariatric surgery patients wearing glucose monitors exhibited PBH in recent studies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">500+</span><p class="k">Subjects have received mizagliflozin across 10 clinical studies</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5M+</span><p class="k">Estimated individuals with gastroparesis in the United States as of 2024</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Slow the inflow, <em>soften the crash.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Absorb</span><span>Overshoot</span><span>Inhibit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Glucose floods in.</h2><p>Bariatric surgery patients have been shown to overexpress SGLT1 in the small intestine, which increases the quantity and rate of glucose absorbed after a meal.</p></article>'+
     '<article class="step"><h2>Insulin overshoots.</h2><p>The rush of glucose stimulates GIP and insulin. The resulting hyperinsulinemia drives blood glucose down into hypoglycemia, often one to three hours after eating.</p></article>'+
     '<article class="step"><h2>Inhibit SGLT1 in the gut.</h2><p>Mizagliflozin blocks SGLT1 in the intestinal lumen, reducing and delaying glucose uptake. In PBH trials it lowered glucose and insulin peaks and raised the glucose nadir.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">An SGLT1 inhibitor <em>that stays in the gut.</em></h2></div><p data-r>SGLT1 is the primary glucose and galactose transporter in the human small intestine and governs postprandial glucose absorption. Inhibiting it blunts the glucose spike and the incretin response that follows.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One molecule, <em>several metabolic diseases.</em></h2></div><p data-r>Mizagliflozin is in development for post-bariatric hypoglycemia and gastroparesis, debilitating diseases with high unmet need, and is being evaluated in GIP-dependent Cushing&#8217;s syndrome. VGX-2857 follows for metabolic disease.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers and <em>metabolism experts.</em></h2></div><p data-r>A management team with decades in clinical-stage drug development, and scientific advisors from Joslin, Duke, Mayo Clinic, Stanford and other leading centres in endocrinology and gastroenterology.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Vogenx.</em></h2></div><p data-r>Press releases on our clinical program and results.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and investigators</span>'+
   '<h2 class="big split">Talk to <em>Vogenx.</em></h2>'+
   '<p class="sub" data-r>Questions about mizagliflozin, our studies or the company? We look forward to hearing from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Vogenx '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Vogenx, Inc.<br>3901 Barrett Drive, Suite 300<br>Raleigh, North Carolina 27619</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@vogenx.com</a><br>Investors: <a class="ul" href="mailto:IR@vogenx.com">IR@vogenx.com</a></p></div>'+
    '<div><span class="lab" data-r>Clinical studies</span><p data-r>Patients and investigators: <a class="ul" href="mailto:investigator.inquiries@vogenx.com">investigator.inquiries@vogenx.com</a><br>(+1) 919.659.5677</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>3901 Barrett Drive, Suite 300<br>Raleigh, NC 27619</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@vogenx.com</a><br>(+1) 919.659.5677</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Programs</span>Mizagliflozin · VGX-2857</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:400;font-size:84px;letter-spacing:6px">VOGENX</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vogenx, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vogenx — mizagliflozin for post-bariatric hypoglycemia",x:"Home"};
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
