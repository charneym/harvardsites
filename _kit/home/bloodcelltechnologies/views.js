/* ================= VIEWS (home only: Science / Programmes / Company / News open build-out pages; Contact scrolls) ================= */
function progs(){return '<ul class="pfr">'+PROGS.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+RPT+c[3]+'" target="_blank" rel="noopener">NIH RePORTER</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>CRAC channel therapeutics<span class="nomob"> · San Diego, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Calming the cells</span><span class="l">that drive chronic</span><span class="l"><em>inflammation.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Vivreon Biosciences develops new small molecules against the CRAC calcium channel, for the large numbers of patients who do not respond to today’s anti-inflammatory therapies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/programmes">See the programmes '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Rendered: a microglial cell, the brain’s resident immune cell</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Inflammation drives disease progression across many indications. We develop <b class="w0">new chemical entities against novel targets</b> to reach <em>the patients existing therapies leave behind.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">8</span><span class="k">Indications in development, each supported by NIH SBIR funding</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;1 nM</span><span class="k">Potency at the CRAC channel of our asthma development candidate</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2014</span><span class="k">Founded in San Diego by five entrepreneurs</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Selective, not suppressive</span><p data-r>Our CRAC modulators inhibit neurotoxic microglial inflammation while promoting the beneficial phagocytic and survival functions of the same cells.</p></div>'+
    '<div><span class="lab kick" data-r>Delivered where it matters</span><p data-r>Gut-restricted oral drugs for colitis, intranasal delivery for asthma, injection into the joint for osteoarthritis and topical formulations for the skin.</p></div>'+
    '<div><span class="lab kick" data-r>One platform</span><p data-r>A single, genetically supported target, operating in microglia, macrophages, T cells, airway smooth muscle and sweat glands.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a CRAC channel works</span><h2 class="d3">A calcium gate <em>that keeps inflammation running.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Sensor</span><span>Channel</span><span>Block</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A signal arrives.</h2><p>A receptor on an immune cell is triggered, by an antigen or, in the Alzheimer’s brain, by amyloid-β and debris from dying cells. The cell releases calcium from its internal store, the endoplasmic reticulum.</p></article>'+
     '<article class="step"><h2>The store calls for more.</h2><p>Calcium sensors in the store’s membrane, STIM1, register the drop. They gather just beneath the cell surface, where they reach up and open Orai1, the pore of the CRAC channel.</p></article>'+
     '<article class="step"><h2>Calcium floods in.</h2><p>Sustained calcium entry activates the NFAT and NF-κB transcription factors, which switch on the genes of chronic, damaging inflammation.</p></article>'+
     '<article class="step"><h2>A small molecule closes the gate.</h2><p>A Vivreon CRAC modulator blocks the channel. The damaging response quietens, while beneficial work, such as clearing debris, carries on.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">One target, <em>eight diseases.</em></h2></div><p data-r>From the brain to the gut, the airways, the joints and the skin, each programme is funded by the National Institutes of Health through its Small Business Innovation Research programme.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">Built in San Diego <em>since 2014.</em></h2></div><p data-r>Vivreon was founded to create a platform therapeutics company for chronic inflammatory disease, with a team of industry veterans and academic experts in drug discovery and development.</p></div>'+
   '<div class="fnd"><div class="fnd-a"><span class="lab kick" data-r>Leadership</span><h3 class="fn" data-r>Milton L. Greenberg, PhD</h3><p class="fr lab" data-r>President</p></div>'+
    '<p class="fb" data-r>Dr. Greenberg earned his PhD in biomedical sciences at the University of California, Irvine School of Medicine, in physiology and biophysics in the laboratory of Michael Cahalan, and completed his postdoctoral training at UC Irvine. He is the principal investigator on each of Vivreon’s NIH programmes.</p></div>'+
   '<div class="fac">'+
    '<div><span class="lab kick" data-r>Wet lab</span><p data-r>A 3,000 square foot facility with lab benches and a tissue-culture room for in vitro research.</p></div>'+
    '<div><span class="lab kick" data-r>Vivarium</span><p data-r>An AAALAC-accredited, USDA-licensed commercial vivarium with a 192-cage mouse rack, procedure room and expert animal husbandry.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funded to reach <em>the clinic.</em></h2></div><p data-r>Recent federal awards, with the full project record on NIH RePORTER.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and collaborators</span>'+
   '<h2 class="big split">Let’s talk about <em>CRAC.</em></h2>'+
   '<p class="sub" data-r>For partnering, investment or research collaboration, write to Vivreon Biosciences directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Vivreon '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Vivreon Biosciences, LLC<br>4940 Carroll Canyon Road, Suite 110<br>San Diego, CA 92121</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Founded</span><p data-r>May 2014<br>San Diego, California</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>4940 Carroll Canyon Road, Suite 110<br>San Diego, California 92121</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Funding</span><a class="ul" href="https://reporter.nih.gov/search/0OOkz8lplkqV_X96Ch4-oQ/projects" target="_blank" rel="noopener">NIH RePORTER</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 60" aria-hidden="true"><text x="280" y="50" text-anchor="middle" style="font-family:\'Manrope\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.2em">VIVREON</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vivreon Biosciences, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",programmes:"programmes",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vivreon Biosciences — CRAC channel therapeutics for chronic inflammation, San Diego",x:"Home"};
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
