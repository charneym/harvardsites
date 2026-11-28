/* ================= VIEWS (home only; nav items scroll to sections) ================= */
function devs(){return '<ul class="pfr pipe np">'+DEV.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab lk xt2">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
/* the evidence (abstherapeutics.com > Home, Science: what we have shown) */
var APPS=[
 ["Human genetics","ABS founders showed how the rs6897932 variant changes IL7R splicing and raises sIL7R production, in Nature Genetics (2007), RNA (2013, 2021, 2022) and Cell (2017)."],
 ["Treatment response in RA","In the BRASS study at Brigham and Women’s Hospital, patients without the CC genotype were 5.6 times more likely to reach a good response after a therapy switch."],
 ["Animal models","Adding sIL7R made disease worse in mouse models of rheumatoid arthritis and multiple sclerosis; in the EAE model, ABS-2103 mitigated that worsening and the loss of motor function."]];
function apps(){return '<div class="caps nwc tst">'+APPS.map(function(c,i){return '<div class="cap"><span class="lab" data-r>What we have shown</span><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
var TAGS=["sIL7R","rs6897932","CC genotype","ABS-2103","Monoclonal antibody","Rheumatoid arthritis","Lupus nephritis","Type 1 diabetes","CLIA-validated assays"];
function bones(){return '<div class="bk cnd"><span class="lab kick" data-r>The programme, in short</span><p class="cr" data-r>'+TAGS.map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</p></div>'}
/* patients (abstherapeutics.com > Home, Science) */
var ICO={
 p:'<svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="18"/><path class="a" d="M28 10A18 18 0 0 1 45 22L28 28Z"/></svg>',
 s:'<svg viewBox="0 0 56 56"><path d="M10 20H40"/><path class="a" d="M34 14L40 20L34 26"/><path d="M46 36H16"/><path class="a" d="M22 30L16 36L22 42"/></svg>',
 a:'<svg viewBox="0 0 56 56"><circle cx="22" cy="28" r="10"/><circle cx="34" cy="28" r="10"/><path class="a" d="M28 22V34"/></svg>',
 g:'<svg viewBox="0 0 56 56"><path d="M18 8C18 22 38 34 38 48M38 8C38 22 18 34 18 48"/><path class="a" d="M22 16H34M22 40H34"/></svg>'};
var SURG=[
 ["p","The problem","30 to 50+ percent","Across major autoimmune diseases, that share of patients has an incomplete or inadequate response to standard of care."],
 ["s","Second line","A better chance","When methotrexate falls short and a biologic such as adalimumab or infliximab follows, many still respond poorly."],
 ["a","Add-on, not replace","Immuno-corrective","Designed to be added to standard treatment, without the risks of combining two immunosuppressive drugs."],
 ["g","Precision","The right patients","Genotype and sIL7R levels together select the patients most likely to benefit, starting with rheumatoid arthritis."]];
function surg(){return '<div class="caps svc">'+SURG.map(function(c){return '<div class="cap">'+ICO[c[0]]+'<span class="lab" data-r>'+esc(c[1])+'</span><h3 data-r>'+esc(c[2])+'</h3><p data-r>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
/* news (abstherapeutics.com > News; PRNewswire) */
var BLOG="https://www.abstherapeutics.com/blog";
var EVID=[
 ["May 2026","$1M seed extension, bringing total seed capital to $3.1 million, anchored by Eos BioInnovation and family offices",PRN,"PRNewswire"],
 ["July 2026","CEO Eugene Williams on precision medicine in rheumatoid arthritis, in a Force Family Office webinar",BLOG,"News"],
 ["June 2026","Co-founder Mariano A. Garcia-Blanco elected President of the RNA Society",BLOG,"News"],
 ["May 2026","Co-founder Mariano A. Garcia-Blanco inducted into the National Academy of Sciences",BLOG,"News"]];
function evid(){return '<ul class="nws">'+EVID.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[3])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="985" height="1117" alt="An IgG monoclonal antibody, the class of ABS-2103 (illustrative render)" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Autoimmune disease<span class="nomob"> · Houston and Cambridge</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">When treatment</span> <span class="l">falls short.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Autoimmunity BioSolutions is developing ABS-2103, an antibody against a genetically elevated immune protein, to help patients respond to the treatments they already receive.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Immuno-corrective</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Many people with autoimmune disease</span> <span class="nw">do not respond to standard treatment.</span> <span class="nw">For about half of them,</span> <span class="nw">a common gene variant is part of why.</span> <em><span class="nw">We correct it,</span> <span class="nw">rather than suppress the immune system.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~50%</span><p class="k">of people carry the CC genotype that raises soluble IL-7 receptor</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~3×</span><p class="k">more sIL7R on average in CC carriers than in TT</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5.6×</span><p class="k">likelier good response after a switch for non-CC patients in the BRASS study</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ABS-2103 works</span><h2 class="d3"><span class="nw">One variant,</span> <em class="nw">one receptor.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Genotype</span><span>Excess</span><span>Bind</span><span>Respond</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">A common</span> <span class="nw">variant.</span></h2><p>The CC form of the IL7R variant rs6897932 shifts splicing toward a soluble form of the IL-7 receptor.</p></article>'+
     '<article class="step"><h2><span class="nw">Too much</span> <span class="nw">in the blood.</span></h2><p>CC carriers make about three times more sIL7R, which prolongs IL-7 signalling and can amplify the autoimmune attack.</p></article>'+
     '<article class="step"><h2><span class="nw">Bound,</span> <span class="nw">selectively.</span></h2><p>ABS-2103 binds only the soluble receptor and lowers it; the receptor on immune cells is spared.</p></article>'+
     '<article class="step"><h2><span class="nw">Treatment</span> <span class="nw">gets a chance.</span></h2><p>With sIL7R brought toward healthy levels, standard therapies have the chance to work as well as they do for low-sIL7R patients.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="antibody" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>ABS-2103</span><h2 class="d2 split"><span class="nw">A drug and</span> <em class="nw">a test, together.</em></h2></div><p data-r>A selective monoclonal antibody in preclinical development, paired with biomarker assays that find the patients it is built for.</p></div>'+
   devs()+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split"><span class="nw">From genetics</span> <em class="nw">to a mechanism.</em></h2></div><p data-r>Growing evidence points to sIL7R as a driver of severe disease and poor treatment response across several autoimmune diseases.</p></div>'+
   apps()+bones()+
  '</div></section>'+

  '<section class="sec dark" id="patients" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Patients</span><h2 class="d2 split"><span class="nw">Helping standard</span> <em class="nw">treatment work.</em></h2></div><p data-r>Much of today’s innovation targets patients after first-line treatment fails. ABS wants second-line treatment to succeed for everyone.</p></div>'+
   surg()+
  '</div></section>'+

  '<section class="sec light" id="about" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>About</span><h2 class="d2 split"><span class="nw">Founded on</span> <em class="nw">two decades of RNA biology.</em></h2></div><p data-r>The founders described the sIL7R mechanism themselves. The team pairs that science with rheumatology and Genzyme immunology experience.</p></div>'+
   team()+
   '<div class="ozs">'+
    '<div class="oz-site"><span class="lab" data-r>Seed</span><h3 data-r>$3.1 million</h3><p data-r>Including a $1M extension in May 2026 anchored by Eos BioInnovation, with Independent Capital, Elmstead Partners and NewTech Investment Holdings. <a class="ul" href="'+PRN+'" target="_blank" rel="noopener">Read the release</a></p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Locations</span><h3 data-r>Houston and Cambridge</h3><p data-r>In Houston, Texas, and Cambridge, Massachusetts.</p></div>'+
    '<div class="oz-site"><span class="lab" data-r>Status</span><h3 data-r>Preclinical</h3><p data-r>ABS-2103 is in preclinical development and has not been approved by the FDA or any other regulator.</p></div>'+
   '</div>'+
  '</div></section>'+
  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">New funding,</span> <em class="nw">new honours.</em></h2></div><p data-r>The latest financing, and recognition for the science behind ABS.</p></div>'+
   evid()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Working on</span> <em><span class="nw">treatment response?</span></em></h2>'+
   '<p class="sub" data-r>We are meeting researchers, clinicians and partners who want to improve treatment response in autoimmune disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/science">The science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Autoimmunity BioSolutions</span><p data-r>Houston, Texas<br>Cambridge, Massachusetts</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r>ABS-2103<br>Rheumatoid arthritis</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Autoimmunity BioSolutions</span>Houston and Cambridge</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/antibody">ABS-2103</a><br><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/patients">Patients</a><br><a class="ul" href="#/about">About</a></div>'+
   '<div class="c"><span class="lab">Programme</span>sIL7R<br>Genotype-guided<br>Rheumatoid arthritis</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 1000 214" aria-hidden="true"><text class="bmx" x="500" y="176" text-anchor="middle" textLength="980" lengthAdjust="spacing">autoimmunity</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Autoimmunity BioSolutions</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={intro:"intro",story:"story",antibody:"antibody",science:"science",patients:"patients",about:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Autoimmunity BioSolutions — Correcting a genetic cause of poor treatment response",x:"Home"};
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
