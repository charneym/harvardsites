/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+esc(c[6])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["NNMT, the enzyme","Nicotinamide N-methyltransferase converts nicotinamide (vitamin B3) into 1-methylnicotinamide, using SAM as the methyl donor. Elevated NNMT activity in fat cells is correlated with obesity, insulin resistance and blood glucose.",'<path d="M10 40c0-16 8-28 18-28s18 12 18 28c0 6-8 8-18 8s-18-2-18-8z"/><path class="a" d="M22 12v8a4 4 0 0 0 8 0v-8"/><circle class="f" cx="38" cy="20" r="2.6"/>'],
  ["Two cycles, one lever","Each methylation drains nicotinamide from the NAD+ cycle and lowers the SAM/SAH balance, the methylation potential of the cell, which steers other methyltransferases involved in gene regulation.",'<circle cx="18" cy="28" r="11"/><circle cx="40" cy="28" r="11"/><path class="a" d="M14 17.6l4 .4-1.2 3.8M44 38.4l-4-.4 1.2-3.8"/>'],
  ["Bisubstrate inhibitors","Cantoni’s inhibitors bind both the SAM and the nicotinamide pockets of NNMT. Unlike nicotinamide-competitive inhibitors, they do not depend on either substrate, so local SAM and nicotinamide levels barely affect them.",'<path d="M10 44V22l8-6 8 6v22M30 44V22l8-6 8 6v22"/><path class="a" d="M18 30h20"/><circle class="f" cx="18" cy="30" r="3"/><circle class="f" cx="38" cy="30" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Global obesity prevalence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>World Health Organization and World Obesity Federation figures, as cited on cantonitx.nl.</p></div></div>'}
function backers(){return '<div class="bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r>'+
  ['Libertatis Ergo Holding <i>lead investor</i>','BOM, Brabant Development Agency','Brabant Startup Fund','Novo Nordisk <i>validatioNN grant</i>','NWO <i>Open Technology grant</i>'].map(function(s){return '<span>'+s+'</span>'}).join("")+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[2]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">Read more '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Leiden University spin-out<span class="nomob"> · Oss, the Netherlands</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A non-incretin</span><span class="l">path in <em>obesity.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cantoni Therapeutics develops small-molecule bisubstrate inhibitors of NNMT, a novel target for obesity and its cardiometabolic complications.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/indications">Indications</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why NNMT</span>'+
   '<h2 class="txt" id="mani">Incretin drugs showed that effective obesity medicines are possible. Cantoni is working on a different lever: <em>in preclinical studies, its NNMT inhibitors reduced fat mass while sparing lean mass.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">65%</span><p class="k">Of patients stop incretin-based treatment within the first year, followed by rapid weight regain</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Binding pockets of NNMT, SAM and nicotinamide, that Cantoni’s bisubstrate inhibitors occupy at once</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2022</span><p class="k">Founded to take the NNMT inhibitors discovered at Leiden University towards the clinic</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the fat cell</span><h2 class="d3">One enzyme, <em>two pockets.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Enzyme</span><span>Drain</span><span>Block</span><span>Effect</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>NNMT, overexpressed.</h2><p>NNMT is mainly a liver enzyme, but it is also overexpressed in fat cells. Elevated NNMT activity is correlated with obesity, insulin resistance and blood glucose levels.</p></article>'+
     '<article class="step"><h2>Two cycles, drained.</h2><p>NNMT moves a methyl group from SAM onto nicotinamide. The MNA formed is excreted, taking nicotinamide away from the NAD+ cycle, and SAM becomes SAH, lowering the cell’s methylation potential.</p></article>'+
     '<article class="step"><h2>Both pockets, blocked.</h2><p>Cantoni’s bisubstrate inhibitors bind in the SAM and the nicotinamide pockets at once. With tight binding kinetics, they hold on regardless of local substrate levels.</p></article>'+
     '<article class="step"><h2>Fat mass down, lean mass kept.</h2><p>In preclinical studies, Cantoni’s NNMT inhibitors reduced fat mass without negatively impacting lean mass, and improved metabolic health through increased energy expenditure.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Best-in-class <em>NNMT inhibitors.</em></h2></div><p data-r>NNMT acts on both the NAD+ cycle and the methionine cycle. Cantoni has developed a portfolio of bisubstrate inhibitors of the enzyme, the most potent NNMT inhibitors described to date.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="indications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Indications</span><h2 class="d2 split">Obesity and <em>its comorbidities.</em></h2></div><p data-r>Incretin-based drugs bring gastrointestinal side effects, loss of muscle mass and limited efficacy in some patients. The need is for additional, differentiated treatments, and NNMT inhibition works by a different mechanism.</p></div>'+
   pipeRows(PIPE)+
   evid()+
   backers()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From the lab that <em>pioneered NNMT inhibitors.</em></h2></div><p data-r>Founded by the Leiden University chemists behind the first potent and selective NNMT inhibitors, led by a drug developer with more than 20 years of experience, and advised by leading obesity and metabolism scientists.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News &amp; events</span><h2 class="d2 split">Latest from <em>Cantoni.</em></h2></div><p data-r>Financing, scientific meetings and partnering events. Each item links to the full post on the company’s site.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and scientists</span>'+
   '<h2 class="big split">Talk to <em>Cantoni.</em></h2>'+
   '<p class="sub" data-r>Cantoni Therapeutics is based at Pivot Park in Oss, the Netherlands. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/science">See the science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>Pivot Park, RK-Building<br>Kloosterstraat 9<br>5349 AB Oss, the Netherlands</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+MAIL+'">info@cantonitx.nl</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>Pivot Park, Kloosterstraat 9<br>5349 AB Oss, the Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@cantonitx.nl</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/indications">Indications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Origin</span>A spin-out of Leiden University, founded 2022</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',sans-serif;font-weight:600;font-size:64px">CANTONI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cantoni Therapeutics B.V.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",story:"story",indications:"indications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cantoni Therapeutics — NNMT inhibitors for obesity",x:"Home"};
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
