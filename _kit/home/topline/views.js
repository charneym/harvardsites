/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+''+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(C){return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
var TECH=[
  ["Copper-core columns","A copper core inside lead-free solder, patented by TopLine (US 10,937,752; CN 114055006): a tunable thermal and mechanical structure for packages that keep growing.",'<path d="M6 48h44M6 8h44"/><rect x="20" y="8" width="16" height="40"/><path class="a" d="M28 8v40"/>'],
  ["Braided columns","Copper braided solder columns (US 10,477,698; CN 111822899): non-collapsible, compliant joints that take up the stress of CTE mismatch.",'<path d="M6 48h44M6 8h44"/><path d="M22 8v40M34 8v40"/><path class="a" d="M22 12l12 6M22 20l12 6M22 28l12 6M22 36l12 6"/>'],
  ["Superconducting columns","Indium-niobium solder columns for cryogenic and quantum computers, granted in 2026 (US 12,526,920), with PIN-PACK® and FLIP-PACK® tooling to place a full array.",'<path d="M6 48h44M6 8h44"/><path d="M22 8v40M34 8v40"/><path class="a" d="M14 22l-4 6 4 6M42 22l4 6-4 6"/><circle class="f" cx="28" cy="28" r="2.6"/>']];
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Solder columns · daisy chain<span class="nomob"> · since 1989</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Columns for</span><span class="l"><em>the thermal cliff.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>TopLine makes the solder columns that keep large chip packages connected through heat and strain, and the daisy chain test components engineers use to prove an assembly before it ships.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How daisy chain testing works '+ARR+'</a><a class="btn" href="#/products">Our products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About TopLine</span>'+
   '<h2 class="txt" id="mani">We started in 1989 as the original one-stop shop for daisy chain components. <em>Today we also make patented solder columns for defence, aerospace and AI hardware.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1,000+</span><p class="k">Dummy packages and practice kits in our 160-page catalogue</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M</span><p class="k">Copper-wrapped solder columns delivered for CCGA packages by 2018</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">17</span><p class="k">Patents in column grid arrays and vibration dampers, as of 2024</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How daisy chain testing works</span><h2 class="d3">One loop, <em>pass or fail.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Mount</span><span>Stress</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Mounted on a test board.</h2><p>A daisy chain package goes onto a test vehicle board with matching circuitry. Together they form one continuous loop through every joint, typically 50 mΩ or less between test points T1 and T2.</p></article>'+
     '<article class="step"><h2>Stressed until a joint gives.</h2><p>The board is dropped, vibrated, frozen and heated, cycle after cycle, until a connection breaks. Dummy parts stand in for live devices, so the test costs little.</p></article>'+
     '<article class="step"><h2>Read with an ohm-meter.</h2><p>A broken joint opens the loop, and the reading jumps to infinity. That simple go or no-go result points engineers to the cause, and to a better assembly process.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Columns for packages <em>that outgrew the ball.</em></h2></div><p data-r>AI chip packages already exceed 70 mm and are heading toward 300 mm. They warp more, see larger CTE mismatch and, under immersion cooling, sharp thermal swings. Our patented columns give each joint the height and compliance a solder ball lacks.</p></div>'+
   caps(TECH)+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Parts to build with, <em>and parts to test with.</em></h2></div><p data-r>Most items ship the same day. Our application engineers help you pick the right daisy chain, column or kit for the job.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec dark" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split">A niche maker <em>since 1989.</em></h2></div><p data-r>TopLine has helped thousands of customers worldwide define and refine their SMT and microelectronics assembly processes, from our headquarters in Georgia and our column plant in California.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Milestones</span><p class="cr" data-r>1995 BGA and flip chips <i>·</i> 2013 column manufacturing in California <i>·</i> 2014 and 2016 NASA technology transfers <i>·</i> 2019 column plant space quadrupled <i>·</i> 2025 glass components for underfill development</p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Tell us what <em>you need to test.</em></h2>'+
   '<p class="sub" data-r>Ask for a quotation, a custom kit or test board, or advice on columns for a large package. Our application engineers are ready to help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:sales@topline.tv?subject=Request%20for%20Quotation">Request a quotation '+ARR+'</a><a class="btn" href="#/products">See our products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>TopLine Corporation<br>95 Highway 22 W<br>Milledgeville, GA 31061, USA</p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+18007769888">(800) 776-9888</a> toll free<br><a class="ul" href="tel:+14784515000">+1 478 451 5000</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">sales@topline.tv</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Visit</span>95 Highway 22 W<br>Milledgeville, GA 31061</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">sales@topline.tv</a><br><a class="ul" href="tel:+18007769888">(800) 776-9888</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/contact">Contact</a></div>'+
   '<div class="c"><span class="lab">Since 1989</span>TopLine Corporation, a niche maker of semiconductor test and interconnect components</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="62" text-anchor="middle" style="font-family:\'Rubik\',sans-serif;font-weight:700;font-size:80px">TopLine</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 TopLine Corporation</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",products:"products",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"TopLine — CCGA solder columns, daisy chain test components and bonding wire",x:"Home"};
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
