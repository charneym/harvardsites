/* ================= VIEWS (home only: Science / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Executive team</span><p data-r>'+EXEC.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '<div class="adv"><span class="lab kick" data-r>Scientific advisory board</span><p data-r>'+SAB.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Parmodulins for inflammation-driven disease<span class="nomob"> · Milwaukee, Wisconsin</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Modifying the receptors</span><span class="l">that drive <em>inflammation.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Parmodulins are small molecules that selectively block certain aspects of inflammation while promoting the protective, anti-inflammatory signals of protease-activated receptor 1. Function Therapeutics is developing them for diseases with no approved treatment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How parmodulins work '+ARR+'</a><a class="btn" href="#/programs">Programs</a></div></div>'+
   '<p class="lab hcap" data-r>Human protease-activated receptor 1 (PAR1), atom by atom, from the crystal structure PDB 3VW7, coloured along its chain from red to blue.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Introduction</span>'+
   '<h2 class="txt" id="mani">Protease-activated receptors transmit and amplify inflammatory signals after injury or infection. In some diseases those signals do the damage. Function Therapeutics has found a class of drugs acting at PAR1 that can <em>redirect the signal</em> to a protective one.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">competitive research grants won since the company started operations in 2022</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">NIH institutes funding parmodulin programs through SBIR awards: NINDS, NIDDK and NHLBI</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">pipeline programs, FTX-1 to FTX-4, from chronic kidney disease to neurodegenerative disease</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A decade of foundations</span><p data-r>Founded in 2021 after more than ten years of studies of protease-activated receptors, on a partnership between the labs of Dr. Robert Flaumenhaft (Harvard Medical School) and Dr. Chris Dockendorff.</p></div>'+
    '<div><span class="lab kick" data-r>Selective, not blunt</span><p data-r>Parmodulins inhibit inflammatory responses in several cell types, particularly the endothelial cells that line blood vessels, while promoting protective responses to thrombin.</p></div>'+
    '<div><span class="lab kick" data-r>Built with collaborators</span><p data-r>Sixteen collaborating labs and consultants, from Harvard Medical School and Leipzig University to the Medical College of Wisconsin and Michigan State University.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">One receptor, <em>two signals.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Activation</span><span>Inflammation</span><span>Parmodulin</span><span>Protection</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A receptor switched on by a cut.</h2><p>Protease-activated receptors are G protein-coupled receptors with an unusual trigger: they are activated when proteases such as thrombin and trypsin cleave their N-terminal end.</p></article>'+
     '<article class="step"><h2>The signal drives inflammation.</h2><p>PAR1 plays critical roles in clotting, immune response and inflammation. Under injury or infection it transmits and amplifies inflammatory signals, and in certain disease states those signals promote the damage.</p></article>'+
     '<article class="step"><h2>A parmodulin acts at PAR1.</h2><p>Work from the labs of Dr. Robert Flaumenhaft and Dr. Chris Dockendorff identified small molecules that selectively inhibit and activate specific signalling pathways governed by PAR1. They are called parmodulins.</p></article>'+
     '<article class="step"><h2>The signal is redirected.</h2><p>Inflammatory responses are blocked, particularly in the endothelial cells that line blood vessels, while protective, anti-inflammatory signals are promoted: the basis for treating thromboinflammation in kidney disease, sepsis and beyond.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Where inflammation <em>does the damage.</em></h2></div><p data-r>Function Therapeutics and its collaborators are working to understand PAR signalling in detail and to use it against conditions of high unmet need, from the kidney and the liver to the vasculature and the nervous system. All programs are preclinical.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funding and partners</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Medicinal chemists, <em>drug developers.</em></h2></div><p data-r>An integrated team of executives, consultants and collaborators with decades of experience in disease biology, structural biology, medicinal chemistry and pharmacology, built on the partnership that discovered parmodulins.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Six grants <em>since 2022.</em></h2></div><p data-r>The National Institute of Neurological Disorders and Stroke is funding parmodulins without abuse potential for neuropathic pain, and continued the award into a second year in September 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Collaborations, partnering and investment</span>'+
   '<h2 class="big split">Change the <em>signal with us.</em></h2>'+
   '<p class="sub" data-r>Function Therapeutics welcomes inquiries regarding collaborations, partnering opportunities and potential future investments in its parmodulin programs.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Function Therapeutics, Inc.<br>Milwaukee<br>Wisconsin</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Science</span><p data-r>Parmodulins: modulators<br>of PAR1 signalling</p><a class="ul lk" href="'+WEB+'science" target="_blank" rel="noopener" data-r>Current site</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Function Therapeutics, Inc.<br>Milwaukee<br>Wisconsin</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>PAR1-targeting<br>anti-inflammatories</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-style:italic;font-weight:300;font-size:84px;letter-spacing:-.01em"><tspan fill="#f2f3f6">function</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Function Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Function Therapeutics — modifying the function of PAR1, Milwaukee",x:"Home"};
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
