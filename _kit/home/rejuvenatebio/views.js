/* ================= VIEWS (home only; nav items scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk xt2">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the pipeline (rejuvenatebio.com > Pipeline, Trials, Press Releases) */
var APPS=[
 ["RJB-0402 · Human","Liver-directed gene therapy delivering FGF21. In a model of arrhythmogenic cardiomyopathy, a single dose improved cardiac function, preserved cardiac structure and brought premature ventricular contractions back to normal levels."],
 ["Canine mitral valve disease","A cardio-protective gene therapy to stop the progression of heart failure in dogs. The first safety study in dogs with MMVD showed a strong safety profile, and promising echocardiogram data."],
 ["With Merck Animal Health","A strategic research and development collaboration on a novel gene therapy program in animal health, announced with the 2026 financing."]];
function apps(){return '<div class="caps nwc tst">'+APPS.map(function(c,i){return '<div class="cap"><span class="lab" data-r>Program</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var TAGS=["FGF21","AAV capsids","Liver-directed","Single dose","Secreted protein","Companion animals","Mitral valve disease","Cardiomyopathy","Osteoarthritis"];
function bones(){return '<div class="bk cnd"><span class="lab kick" data-r>The platform, in short</span><p class="cr" data-r>'+TAGS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* animal health (rejuvenatebio.com home, Trials FAQ) */
var ICO={
 d:'<svg viewBox="0 0 56 56"><path d="M12 40C12 28 18 22 28 22S44 28 44 40"/><path class="a" d="M20 18L16 10M36 18L40 10"/></svg>',
 h:'<svg viewBox="0 0 56 56"><path d="M28 44C20 38 12 32 12 24C12 18 16 14 21 14C24 14 26 16 28 19C30 16 32 14 35 14C40 14 44 18 44 24C44 32 36 38 28 44Z"/><path class="a" d="M16 28H24L27 22L31 34L34 28H40"/></svg>',
 n:'<svg viewBox="0 0 56 56"><path d="M18 8C18 22 38 34 38 48M38 8C38 22 18 34 18 48"/><path class="a" d="M22 16H34M22 40H34"/></svg>',
 t:'<svg viewBox="0 0 56 56"><path d="M8 28H40"/><path class="a" d="M32 20L40 28L32 36"/><circle cx="46" cy="28" r="4"/></svg>'};
var SURG=[
 ["d","Living longer","A new set of diseases","With advances in veterinary care, dogs live longer; osteoarthritis, heart disease and cancer are now the main limits on their healthspan."],
 ["h","Mitral valve disease","Heart failure in dogs","A therapy to stop scar tissue building up in the heart, developed with the support of the American Cavalier King Charles Spaniel Club."],
 ["n","No genome editing","A new piece of DNA","The therapy adds DNA that makes a beneficial protein. It does not edit the genome, is not passed on, and is not transmissible between dogs."],
 ["t","Proven in animals","Then in people","Data in companion animals lead the way toward the same approach for chronic, age-related disease in humans."]];
function surg(){return '<div class="caps svc">'+SURG.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
/* the record (rejuvenatebio.com > Press Releases; PRNewswire; PNAS) */
var EVID=[
 ["June 2026","$6 million financing led by VCapital, and a strategic R&D collaboration with Merck Animal Health",PRN,"PRNewswire"],
 ["February 2024","Partnership with a leading animal health company to develop a gene therapy for canine osteoarthritis","https://rejuvenatebio.com/press-releases","Press release"],
 ["October 2023","Preclinical data for RJB-0402 in arrhythmogenic cardiomyopathy","https://rejuvenatebio.com/press-releases","Press release"],
 ["PNAS","A single combination gene therapy treats multiple age-related diseases","https://www.pnas.org/doi/10.1073/pnas.1910073116","PNAS"]];
function evid(){return '<ul class="nws">'+EVID.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="992" height="1080" alt="An adeno-associated virus capsid, the liver-tropic vector of Rejuvenate Bio’s gene therapies (illustrative render)" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Gene therapy<span class="nomob"> · San Diego, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">One treatment</span> <span class="l">for chronic disease.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Rejuvenate Bio develops one-time, liver-directed gene therapies for chronic, age-related disease: in companion animals first, and in people.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Targeting the root causes of aging</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Six in ten Americans</span> <span class="nw">live with a chronic disease,</span> <span class="nw">and our dogs now live</span> <span class="nw">long enough to share them.</span> <em><span class="nw">We treat them once,</span> <span class="nw">and for the long term.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 dose</span><p class="k">a single treatment, designed for durable expression</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">85%</span><p class="k">less scar tissue in the hearts of treated mice with heart failure, versus placebo</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6M</span><p class="k">financing led by VCapital, with Merck Animal Health, June 2026</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the therapy works</span><h2 class="d3"><span class="nw">A capsid,</span> <em class="nw">the liver, the heart.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Package</span><span>Deliver</span><span>Secrete</span><span>Protect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">The gene,</span> <span class="nw">packed.</span></h2><p>The gene for FGF21, a protective hormone, is packed into a liver-tropic adeno-associated virus capsid.</p></article>'+
     '<article class="step"><h2><span class="nw">One dose,</span> <span class="nw">to the liver.</span></h2><p>A single dose; the capsids home to the liver, and the gene enters the nucleus of the liver cells.</p></article>'+
     '<article class="step"><h2><span class="nw">The liver</span> <span class="nw">makes the medicine.</span></h2><p>The liver cells produce FGF21 and secrete it into the blood, reaching tissues throughout the body.</p></article>'+
     '<article class="step"><h2><span class="nw">Protection</span> <span class="nw">that lasts.</span></h2><p>In mice with heart failure, treatment left up to 85% less scar tissue in the heart than a placebo.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split"><span class="nw">Built for</span> <em class="nw">chronic disease.</em></h2></div><p data-r>The ideal treatment for chronic disease would remove compliance problems, match the disease’s durability and be well tolerated. That is the profile the platform is built around.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="pipeline" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split"><span class="nw">For people</span> <em class="nw">and their dogs.</em></h2></div><p data-r>One platform, developed in parallel for human disease and for chronic disease in companion animals.</p></div>'+
   apps()+bones()+
  '</div></section>'+

  '<section class="sec dark" id="animals" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Animal health</span><h2 class="d2 split"><span class="nw">Longer lives,</span> <em class="nw">healthier years.</em></h2></div><p data-r>Our canine companions live longer than ever, and chronic disease has become the main challenge to their quality of life.</p></div>'+
   surg()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split"><span class="nw">From the Church lab</span> <em class="nw">to the clinic.</em></h2></div><p data-r>Rejuvenate Bio launched out of George Church’s lab at Harvard Medical School and the Wyss Institute for Biologically Inspired Engineering.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Financing</span><h3 data-r>$6 million</h3><p data-r>Led by VCapital, with Merck Animal Health, Connecticut Innovations and Digitalis, in June 2026. <a class="ul" href="'+PRN+'" target="_blank" rel="noopener">Read the release</a></p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Published</span><h3 data-r>PNAS and more</h3><p data-r>Work in PNAS, Heart Rhythm, Cellular Reprogramming and Protein and Cell on combination gene therapy, FGF21 and reprogramming.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Status</span><h3 data-r>Investigational</h3><p data-r>The therapies described here are in development and have not been approved by the FDA or any other regulator.</p></div>'+
   '</div>'+
  '</div></section>'+
  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New funding,</span> <em class="nw">new partners.</em></h2></div><p data-r>The latest financing, partnerships and data.</p></div>'+
   evid()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Interested in</span> <em><span class="nw">one-time</span> <span class="nw">gene therapy?</span></em></h2>'+
   '<p class="sub" data-r>For partners, investors and veterinarians: write to the Rejuvenate Bio team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Rejuvenate Bio</span><p data-r>San Diego<br>California 92121</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origins</span><p data-r>Harvard Medical School<br>Wyss Institute</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Rejuvenate Bio</span>San Diego, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/animals">Animal health</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Platform</span>FGF21<br>AAV capsids<br>One dose</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">rejuvenate</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Rejuvenate Bio</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={intro:"intro",story:"story",technology:"technology",pipeline:"pipeline",animals:"animals",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Rejuvenate Bio — Gene therapy for chronic, age-related disease",x:"Home"};
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
