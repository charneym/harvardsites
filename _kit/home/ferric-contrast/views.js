/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Iron-based MRI contrast agents<span class="nomob"> · Amherst, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The MRI contrast agent,</span><span class="l"><em>rebuilt around iron.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Ferric Contrast is a University at Buffalo spinout developing iron-based contrast agents that produce high-quality magnetic resonance images, as safer alternatives to gadolinium.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>An Fe(III) triazacyclononane complex with hydroxypropyl arms, the macrocyclic iron class in Ferric Contrast’s published work. Illustrative model.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Gadolinium is foreign to the body, and it can stay in the brain, bone and skin. Iron is not foreign: <em>the body already knows how to regulate it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%+</span><p class="k">Of clinical MRI procedures use a gadolinium-based contrast agent</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305K</span><p class="k">NCI STTR Phase I award for iron agents as alternatives to gadolinium, 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2017</span><p class="k">Founded at UB’s Incubator @ Baird, on chemistry from the Morrow lab</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>For patients left out</span><p data-r>People with impaired kidney function cannot tolerate today’s gadolinium agents, and people with frequent scans may accumulate it.</p></div>'+
    '<div><span class="lab kick" data-r>Images that hold up</span><p data-r>The lead iron complex produces T1 relaxivity that rivals clinical gadolinium complexes at 4.7 Tesla, in vitro and in live mice.</p></div>'+
    '<div><span class="lab kick" data-r>Abundant and domestic</span><p data-r>Iron is less expensive and more readily available in the USA than gadolinium, a rare earth metal whose supply international markets can limit.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Iron, held <em>in a macrocycle.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Chemistry</span><span>Contrast</span><span>Clearance</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Lock iron in place.</h2><p>Macrocyclic ligands, first patented by Professor Janet Morrow at UB, hold iron in the high-spin trivalent state a T1 agent needs, and keep it there: the complexes do not produce reactive oxygen species, even with ascorbate and peroxide present.</p></article>'+
     '<article class="step"><h2>Let water do the work.</h2><p>Water molecules exchange at the iron centre, and their protons relax faster, which brightens T1-weighted images. Ferric Contrast’s complexes rival clinical gadolinium agents in relaxivity, and in some organs of mice exceed them.</p></article>'+
     '<article class="step"><h2>Then clear it.</h2><p>The lead compounds are anionic and leave quickly through the kidneys in mice. Changing the ancillary group on the macrocycle steers clearance toward the kidneys or the liver, for organ-specific imaging.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One chemistry, <em>several organs.</em></h2></div><p data-r>Ferric Contrast is developing agents for imaging the brain, vasculature, liver and kidneys, and for detecting tumors. Every programme is preclinical, with pre-clinical imaging and toxicity work run with Roswell Park.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A UB lab, <em>built into a company.</em></h2></div><p data-r>Ferric Contrast was founded in 2017 by an entrepreneur and a UB chemistry professor, and works with the small animal imaging team at Roswell Park Comprehensive Cancer Center.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Backed by NSF, <em>then by the NCI.</em></h2></div><p data-r>Two National Science Foundation STTR awards carried the chemistry from Phase I to Phase II; in 2025 the National Cancer Institute funded the next generation.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Safer contrast, <em>made of iron.</em></h2>'+
   '<p class="sub" data-r>Ferric Contrast works from Baird Research Park in Amherst, New York. To talk about the iron agents, a partnership or an investment, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r class="adr"><span>Ferric Contrast, Inc.</span><span>Baird Research Park</span><span>1576 Sweet Home Road</span><span>Amherst, New York 14228</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>A University at Buffalo spinout<br>Founded in 2017</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Baird Research Park<br>Amherst, New York</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Iron-based MRI<br>contrast agents</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Raleway\',system-ui,sans-serif;font-weight:600;font-size:70px;letter-spacing:-.01em"><tspan fill="#f3eeea">Ferric</tspan><tspan fill="#68cdf5" font-weight="400" dx="16">Contrast</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ferric Contrast, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ferric Contrast — iron-based MRI contrast agents, Amherst, New York",x:"Home"};
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
