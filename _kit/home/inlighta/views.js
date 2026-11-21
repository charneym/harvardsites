/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div>'+(p[2]?'<p>'+esc(p[2])+'</p>':'<p class="nob" aria-hidden="true"></p>')+'</li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Advisors</span><p data-r>'+ADVISORS.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Precision MRI contrast agents<span class="nomob"> · Atlanta, Georgia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Brighter images,</span><span class="l"><em>better results.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>InLighta BioSciences develops ProCA®, protein-based MRI contrast agents that hold gadolinium tightly and are designed to show cancer and fibrosis earlier than today’s scans.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Human α-parvalbumin, atom by atom (PDB 1RJV): the protein scaffold of ProCA32. Its two metal sites, lit, are the kind ProCA32 re-engineers to hold gadolinium.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Too many patients are found when disease is already advanced, because today’s scans cannot see it start. InLighta builds contrast agents that let MRI <em>see it sooner.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;0.25&thinsp;mm</span><span class="k">Liver tumors imaged with ProCA32, the company’s blood-pool agent</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;40×</span><span class="k">More sensitive for liver tumors than commonly used, clinically approved agents</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">18/18</span><span class="k">Lung nodules found by the collagen-targeted agent in a 2026 mouse study, some under 1 mm</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Built for safety</span><p data-r>ProCA agents bind gadolinium so selectively that calcium, magnesium and zinc cannot displace it, an improvement over current clinical agents that lowers toxicity risk.</p></div>'+
    '<div><span class="lab kick" data-r>Two signals, one scan</span><p data-r>High relaxivity in both T1 and T2 gives a dual imaging method, made for smaller, earlier abnormalities that current agents miss.</p></div>'+
    '<div><span class="lab kick" data-r>A patented platform</span><p data-r>An exclusive agreement with Georgia State University covers a patent portfolio on targeted and non-targeted protein contrast agents in the US and abroad.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">A protein that makes MRI <em>see more.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Scaffold</span><span>Contrast</span><span>Target</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Gadolinium, held tight.</h2><p>Each ProCA is a human protein scaffold with engineered metal-binding sites. Injected into a vein, it carries gadolinium through the bloodstream without letting it go.</p></article>'+
     '<article class="step"><h2>Brighter in T1 and T2.</h2><p>As a blood-pool agent, ProCA32 gives full-body contrast with high relaxivity on both MRI signals, so vessels and small liver tumors stand out sharply.</p></article>'+
     '<article class="step"><h2>Aimed at the disease.</h2><p>Add a targeting moiety and the agent gathers where disease is. The collagen-targeted version lit up lung nodules under 1 mm and hidden metastases in preclinical studies.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One scaffold, <em>many targets.</em></h2></div><p data-r>The ProCA® series: a blood-pool agent available for laboratory use, and targeted agents for specific disease biomarkers. All are preclinical.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by a pioneer <em>of contrast media.</em></h2></div><p data-r>InLighta was founded by Dr. Jenny J. Yang, whose lab created the ProCA platform, with advisors from Georgia State, Emory and industry.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Tiny tumors, <em>seen in 2026.</em></h2></div><p data-r>A Science Advances study and continued NIH funding moved the collagen-targeted agent toward the clinic this autumn.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and imaging centres</span>'+
   '<h2 class="big split">See disease <em>at its start.</em></h2>'+
   '<p class="sub" data-r>For product availability and pricing, collaborations or investment opportunities, write to Dr. Jenny J. Yang.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="tel:+14044291434">'+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>InLighta BioSciences L.L.C.<br>Atlanta, GA 30303</p></div>'+
    '<div><span class="lab" data-r>Email and phone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14044291434">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origins</span><p data-r>Protein contrast agents from<br>Georgia State University</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>InLighta BioSciences L.L.C.<br>Atlanta, Georgia 30303</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14044291434">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Protein MRI contrast agents<br>for earlier detection</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Lato\',system-ui,sans-serif;font-style:italic;font-weight:700;font-size:70px;letter-spacing:-.005em"><tspan fill="#f4f7f2">InLighta</tspan><tspan fill="#80cc48" font-weight="400" dx="14">BioSciences</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 InLighta BioSciences L.L.C.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"InLighta BioSciences — protein MRI contrast agents for earlier disease detection, Atlanta",x:"Home"};
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
