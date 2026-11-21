/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
var TEAMG=[
 ["Management team",[
  ["Ronnie Maitra, PhD","Founder and President","Founded Artiam on CB1 technology developed in his laboratory over more than a decade."],
  ["Herb Seltzman, PhD","Vice President","A medicinal chemist with over 40 years in cannabinoid research at RTI and 200+ publications; co-developer of the technology."]]],
 ["Key members",[
  ["Robert Willette, PhD","Board of Directors, Chief Technology Advisor","Former GSK lead in metabolic diseases, with a background in neuropharmacology."],
  ["Marilyn Thompson, BA","CFO and Financial Services","More than thirty years of experience in corporate finance."],
  ["Joshua Higgin, PhD, JD","Legal services","Patent and freedom-to-operate analyses and corporate counsel; PhD, University of Wisconsin, JD, Wake Forest."]]],
 ["Scientific advisors",[
  ["Brad Walters, MD, PhD, MBA","Former CMO, RTI International","Background in venture capital, biotechnology start-ups and Phase I and II clinical trials."],
  ["Ryan Vandrey, PhD","Professor, Johns Hopkins University","Behavioral pharmacology of cannabis; a key opinion leader in cannabis use disorders."],
  ["Mike Statnick, PhD","Pharma executive","20+ years in metabolic, addiction and mood disorders, with leadership roles at Eli Lilly, Recursion and Novo Nordisk."],
  ["Arun Sanyal, MD","Professor, Virginia Commonwealth University","Chair of the NIH NASH Clinical Research Network, with over 500 research publications."]]]];
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[0])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh">'+TEAMG.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g[0])+'</p><ul class="mh-list">'+g[1].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Type 1 cannabinoid receptor therapeutics<span class="nomob"> · North Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Refined blockers</span><span class="l">for the <em>CB1 receptor.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Blocking CB1 is a clinically proven strategy, but the first generation of blockers caused psychiatric side effects. Artiam Bio is developing refined CB1 antagonists designed to keep the benefits without them, for NASH, cannabis and alcohol use disorders and Prader-Willi syndrome.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Pipeline</a></div></div>'+
   '<p class="lab hcap" data-r>The human CB1 receptor with an antagonist (orange) in its binding pocket, from crystal structure PDB 5TGZ.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Introduction</span>'+
   '<h2 class="txt" id="mani">The CB1 receptor helps run hunger, metabolism, inflammation and reward. Blocking it works, and the first blockers proved it. Artiam’s compounds keep the receptor’s basal activity intact, and are built to <em>block it gently.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">400+</span><p class="k">Small molecules in Artiam’s patented portfolio</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">NIH institutes funding Artiam projects since 2021: NIDDK, NIDA, NIAAA and NIA</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~6%</span><p class="k">Of patients had adverse psychiatric effects on first-generation CB1 blockers</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Partial, not full</span><p data-r>First-generation blockers such as rimonabant were full inverse agonists that shut the receptor down completely. Artiam’s are high-affinity partial inverse agonists and neutral antagonists.</p></div>'+
    '<div><span class="lab kick" data-r>Basal activity preserved</span><p data-r>The intrinsic activity of the CB1 receptor is needed for emotional welfare. Artiam’s compounds are designed to leave it in place, reducing the potential for adverse neuropsychiatric events.</p></div>'+
    '<div><span class="lab kick" data-r>Limited brain exposure</span><p data-r>Lead compounds are designed with limited brain penetration, so they act on the receptors in peripheral tissues such as the liver. In rodent studies, the lead produced no dysphoria or anhedonia.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Blocking CB1, <em>without the cost.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">At rest</span><span>Switched on</span><span>Shut down</span><span>Refined</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The body’s regulatory dashboard.</h2><p>CB1 receptors sit in the central nervous system and in peripheral tissues. Through them, the endocannabinoid system regulates hunger and satiety, glucose, adiposity, inflammation, pain, sleep and reward. Even at rest, the receptor keeps up a quiet basal signal.</p></article>'+
     '<article class="step"><h2>Too much signal.</h2><p>The receptor is switched on by the body’s own endocannabinoids, and by THC, the main psychoactive component of marijuana. Over-activation has been implicated in obesity, liver disease and diabetes, and in addiction.</p></article>'+
     '<article class="step"><h2>The first blockers went too far.</h2><p>Rimonabant, a full inverse agonist, reversed fatty liver and was approved in Europe for obesity. But it silenced even the receptor’s basal activity and caused adverse psychiatric effects in about 6% of users, which led to its discontinuation.</p></article>'+
     '<article class="step"><h2>Artiam’s blockers leave a floor.</h2><p>Artiam’s second-generation compounds block over-activation while preserving basal activity, with limited brain exposure. In animal studies they keep the benefits of blocking CB1 without the adverse psychiatric effects.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One receptor, <em>several diseases.</em></h2></div><p data-r>Artiam is developing its CB1 blockers for three major indications with sizeable patient populations and no FDA-approved therapy, NASH, cannabis use disorder and Prader-Willi syndrome, and for alcohol use disorder. It also holds an NIH award to validate APT101 in scleroderma lung disease.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by the National Institutes of Health</span><p class="cr" data-r>'+FUNDERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades inside <em>cannabinoid science.</em></h2></div><p data-r>Artiam’s drug discovery programmes are led by experts in chemistry, cannabinoid pharmacology, clinical research and biotechnology: the scientists who developed the technology, with advisors from Johns Hopkins, VCU, RTI and the pharmaceutical industry.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded by <em>four NIH institutes.</em></h2></div><p data-r>Artiam’s programmes have been supported by NIH SBIR and STTR awards since 2021. The latest, from the National Institute on Aging, was renewed in June 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Programmes, partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Artiam Bio.</em></h2>'+
   '<p class="sub" data-r>Learn more about Artiam’s programmes and its patented portfolio of small-molecule CB1 receptor antagonists, and its progress toward bringing them to patients.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+WEB+'contact-artiam-bio/" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Mailing address</span><p data-r>Artiam Bio Inc.<br>P.O. Box 624<br>Morrisville, NC 27560</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Focus</span><p data-r>Type 1 cannabinoid receptor<br>(CB1) antagonists</p><a class="ul lk" href="'+WEB+'" target="_blank" rel="noopener" data-r>Current site</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Mailing address</span>Artiam Bio Inc.<br>P.O. Box 624<br>Morrisville, NC 27560</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Refined CB1 receptor<br>antagonists</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Krona One\',system-ui,sans-serif;font-weight:400;font-size:66px;letter-spacing:.08em"><tspan fill="#f2f0ea">ARTIAM</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Artiam Bio Inc. All rights reserved.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Artiam Bio — refined CB1 receptor blockers, North Carolina",x:"Home"};
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
