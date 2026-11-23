/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+p.sum+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Screen","Co-culture with human myeloid phagocytes","Our CHoMP&#8482; platform runs CRISPR screens across tumor cells and primary human macrophages and other innate immune effector cells, to find the signals that decide whether a cancer cell is eaten.",'<circle cx="20" cy="30" r="12"/><circle cx="20" cy="30" r="4"/><path d="M34 22c6-6 14-6 18 0M34 38c6 6 14 6 18 0"/><circle class="f" cx="33" cy="30" r="2.6"/>'],
  ["Discover","Unbiased, systematic targets","Instead of signals found by chance, the screens surface &#8220;don&#8217;t eat me&#8221; (DEM) and &#8220;eat me&#8221; (EM) signals systematically, in a way that can scale. DEM-TXX emerged from a CRISPRa screen of tumor cells.",'<path d="M10 46h36"/><path d="M14 46V30M22 46V22M30 46V34M38 46V14"/><path class="a" d="M38 14l6-6"/><circle class="f" cx="38" cy="14" r="3"/>'],
  ["Drug","First-in-class medicines","Each validated target becomes a medicine designed to attack the tumor cell and its microenvironment. The first is DEM301, an antibody-drug conjugate against DEM-TXX.",'<path d="M28 48V30M28 30L16 14M28 30l12-16"/><path d="M13 18l6-8M43 18l-6-8"/><circle class="f" cx="22" cy="40" r="2.6"/><circle class="f" cx="34" cy="40" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>DEM301 at ASCO GI 2026</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Presented by Sarah Carden, PhD, on January 10, 2026, in San Francisco. DEM-TXX emerged from our scientific founders&#8217; functional genomics screen and was validated by DEM BioPharma.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Novel targets for solid tumors<span class="nomob"> · Cambridge, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">First-in-class</span><span class="l">cancer medicines,</span><span class="l"><em>from new targets.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>DEM BioPharma discovers novel therapeutic targets for solid tumors with a proprietary CRISPR-based screening platform. Our lead, DEM301, is a first-in-class antibody-drug conjugate for colorectal and other GI cancers.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Don&#8217;t eat me</span>'+
   '<h2 class="txt" id="mani">Tumors survive by telling the immune system &#8220;don&#8217;t eat me.&#8221; <em>We find those signals systematically, and turn them into medicines.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$70M</span><p class="k">Initial financing at launch in 2022, led by Longwood Fund and Alta Partners</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Cancer types in which DEM-TXX is notably overexpressed, among them colorectal, gastric and pancreatic</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2H 2026</span><p class="k">Planned start of a Phase 1a/1b clinical study of DEM301, as of January 2026</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From signal to medicine</span><h2 class="d3">A hidden signal, <em>turned against the tumor.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Target</span><span>Attack</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>&#8220;Don&#8217;t eat me.&#8221;</h2><p>DEM-TXX is a plasma membrane glycoprotein that tumor cells overexpress. It surfaced as a &#8220;don&#8217;t eat me&#8221; signal in a CRISPRa screen, and it helps hold suppressed myeloid cells at bay.</p></article>'+
     '<article class="step"><h2>DEM301 finds the target.</h2><p>DEM301 is an afucosylated antibody against DEM-TXX, carrying a clinically validated linker-payload. It is designed to bind tumor cells that express DEM-TXX.</p></article>'+
     '<article class="step"><h2>Two ways to kill.</h2><p>The payload is delivered into the tumor cell, while the afucosylated Fc engages FcγRIIIa on immune cells: direct cytotoxic delivery and immune-mediated killing in one molecule.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Functional genomics, <em>at the tumor&#8217;s edge.</em></h2></div><p data-r>Our proprietary CRISPR-based functional genomic screening platform identifies unique strategies to attack tumor cells and the tumor microenvironment (TME), built on the research of our scientific co-founders.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">DEM301, <em>toward the clinic.</em></h2></div><p data-r>DEM-TXX is notably overexpressed in colorectal, gastric, liver, pancreatic, cervical and testicular cancers, and its expression is negatively correlated with disease progression. DEM301 is built to reach it.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug developers and <em>world-class founders.</em></h2></div><p data-r>An experienced leadership and operating team, scientific founders from MIT, Stanford and the Whitehead Institute, and advisors who have built immuno-oncology and ADC medicines.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>DEM BioPharma.</em></h2></div><p data-r>Announcements, presentations and appointments. Media contact: Kari Watson, Owl&#8217;s Head Strategies.</p></div>'+
   news()+
   '<div class="bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r>'+BACK.map(function(b,i){return '<span>'+esc(b)+'</span>'}).join('<i>·</i>')+'</p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and scientists</span>'+
   '<h2 class="big split">Talk to <em>DEM Bio.</em></h2>'+
   '<p class="sub" data-r>To learn more about DEM301, our platform or careers at DEM BioPharma, write to us. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to DEM '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Where to find us</span><p data-r>DEM BioPharma, Inc.<br>730 Main Street<br>Cambridge, MA 02139</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">contact@dembiopharma.com</a></p></div>'+
    '<div><span class="lab" data-r>Media</span><p data-r>Kari Watson<br><a class="ul" href="mailto:kari@owlsheadstrategies.com">kari@owlsheadstrategies.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Find us</span>730 Main Street<br>Cambridge, MA 02139</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">contact@dembiopharma.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead program</span>DEM301 · anti-DEM-TXX ADC</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:600;font-size:70px">DEM BIOPHARMA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 DEM BioPharma, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"DEM BioPharma — novel targets for solid tumors",x:"Home"};
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
