/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
/* forest-plot rows: Sun et al. (2024), as quoted on peri-pear.com/product. Log axis 0.1 to 10, the line of no effect at 1. */
function fx(v){return (Math.log(v)/Math.LN10+1)/2*100}
function rrRows(){return '<ul class="pfr fp">'+RR.map(function(r){
  var a=fx(r[2]),b=fx(r[3]),p=fx(r[1]);
  return '<li><span class="lab tg">'+esc(r[4])+'</span><div class="pgm"><h3>'+esc(r[0])+'</h3></div>'+
   '<span class="fpl" aria-hidden="true"><span class="ax"><i class="one"></i><i class="fci" style="left:'+a.toFixed(1)+'%;width:'+(b-a).toFixed(1)+'%"></i><i class="fpt" style="left:'+p.toFixed(1)+'%"></i></span>'+
   '<span class="tk"><span>0.1</span><span>1</span><span>10</span></span></span>'+
   '<span class="lab lk">95% CI '+r[2].toFixed(2)+'–'+r[3].toFixed(2)+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Warmth that holds","Efficient heat storage through the whole second stage of labour, from full dilation to the birth of the baby, with controlled warmth instead of a cloth that has to be re-dipped and held in place.",'<path d="M10 40c6-3 6-9 0-12s-6-9 0-12"/><path d="M22 44c6-3 6-9 0-12s-6-9 0-12"/><path d="M34 40c6-3 6-9 0-12s-6-9 0-12"/><path class="a" d="M6 50h44"/>'],
  ["Made for the labour ward","Applied to the perineum during labour by the clinician or the patient, positioned gently to the skin, effective in a wet and dynamic environment and exceptionally gentle to remove.",'<rect x="12" y="14" width="32" height="28"/><path d="M12 22h32"/><path class="a" d="M20 32h16M28 24v16"/>'],
  ["Safe by design","Constructed from medical-grade, hypoallergenic materials, with built-in safety features. Comfortable for the woman, and simple for the midwife or obstetrician to use.",'<path d="M28 6l18 7v13c0 12-8 20-18 24C18 46 10 38 10 26V13Z"/><path class="a" d="M20 28l6 6 11-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Systematic reviews</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r><a class="ul" href="'+e[2]+'" target="_blank" rel="noopener">'+esc(e[1])+'</a></dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Next: a first-in-human study with the National University Health System (NUHS), Singapore, planned for the second half of 2027, and an application for an NIHR-funded randomised controlled trial. Peripear is an investigational device. It is not cleared or approved for sale in any market and is not available to buy.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Midwife-led medtech<span class="nomob"> · Perineal tear prevention</span> · Oxford</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Birth should</span><span class="l">empower,</span><span class="l"><em>not injure.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Peripear is a wearable device, created by a midwife, that gives gentle, consistent warmth to the perineum during birth. It puts the evidence for warm compresses into everyday care, to reduce tearing, pain and episiotomy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The device '+ARR+'</a><a class="btn" href="#/evidence">The evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A neglected part of birth care</span>'+
   '<h2 class="txt" id="mani">Most women who give birth vaginally sustain some perineal trauma, and many live with it for years. A warm compress is known to help, yet it is rarely used on the labour ward. <em>We are here to change that.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">85%</span><p class="k">Of women sustain some degree of perineal trauma during vaginal birth (Kettle &amp; Tohill, 2008)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 3</span><p class="k">Have ongoing pain, incontinence or sexual dysfunction months after birth (Sartore et al., 2004; Andrews et al., 2021)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&pound;180M</span><p class="k">Estimated annual cost to the NHS of perineal injury-related care (NHS Resolution, 2024)</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">From the evidence to the ward</span><h2 class="d3">An old remedy, <em>built for today.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Remedy</span><span>Evidence</span><span>Device</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Warm water and a cloth.</h2><p>Midwives have held a warm compress to the perineum for over two thousand years. Soranus of Ephesus recorded it in the 2nd century AD, to ease pain and help the tissues stretch around the baby’s head.</p></article>'+
     '<article class="step"><h2>The evidence is strong.</h2><p>A 2024 systematic review found warm compresses cut second-degree tears (RR 0.40) and third- and fourth-degree tears (RR 0.34), with less pain and fewer episiotomies. In practice, they are rarely used.</p></article>'+
     '<article class="step"><h2>Warmth, held steady.</h2><p>Peripear is a purpose-built wearable that stores heat through the whole second stage of labour, from full dilation to birth, so every woman can have the evidence without a midwife improvising.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A midwife-led <em>solution.</em></h2></div><p data-r>The clinical evidence for warm compresses in the second stage of labour is clear, but practical challenges keep it off the ward. We asked why, and built a comfortable, purpose-designed compress that gives consistent warmth and support, leaving the woman confident and empowered.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">Built on existing <em>clinical evidence.</em></h2></div><p data-r>Warm compresses on the perineum in the second stage of labour, pooled across randomised trials by Sun et al. (2024). A risk ratio below 1 means fewer events with the compress; for an intact perineum, above 1 is better.</p></div>'+
   rrRows()+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Designed by experts, <em>backed by experience.</em></h2></div><p data-r>A midwife who saw the impact of preventable birth injuries first-hand, and a medtech entrepreneur and startup operator, building the device together with product, clinical and finance expertise.</p></div>'+
   team()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r><span>HERmesa</span><span>SyndicateRoom Access</span><span>Zinc VC</span><span>SIE Ventures</span><span>Innovate UK</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Funding, awards <em>and the road to the ward.</em></h2></div><p data-r>A £1.2M pre-seed and grant round, the Innovate UK Women in Innovation Award, and coverage of the work so far.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Women, midwives, obstetricians and investors</span>'+
   '<h2 class="big split">Let’s <em>change this.</em></h2>'+
   '<p class="sub" data-r>Made by a midwife, for women, midwives and obstetricians. Whether you are pregnant, work on a labour ward, or want to back the next stage, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/evidence">Read the evidence</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Company</span><p data-r>Peripear Ltd<br>Oxford, England<br>Company no. 15418398</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">social@peri-pear.com</a></p></div>'+
    '<div><span class="lab" data-r>Next milestone</span><p data-r>First-in-human study with NUHS Singapore, H2 2027</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Oxford, England</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">social@peri-pear.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Regulatory</span>Investigational device. Not cleared or approved for sale in any market.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 160" aria-hidden="true"><text x="380" y="112" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:400;font-size:150px;letter-spacing:-.01em">peripear</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Peripear Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Peripear — warmth at birth, to prevent perineal tearing",x:"Home"};
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
