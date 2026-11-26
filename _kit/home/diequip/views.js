/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function rows(L){return '<ul class="pfr pipe np">'+L.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+c[1].split('|').map(function(x){return '<span class="nw">'+esc(x)+'</span>'}).join(' ')+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">More '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Electroplated","Plated pins and wheels","Cylindrical and conical pins in diamond or CBN, electroplated onto ground tool-steel blanks: American made, and custom made to your specification.",'<path d="M10 28H34"/><path class="a" d="M34 20L48 25V31L34 36Z"/><circle class="f" cx="41" cy="28" r="2.2"/>'],
  ["Bonded","Three bonds, 100 to 3000 grit","Resinoid for general carbide grinding, copper for a mirror finish on carbide and ceramic, carbide bond for tool steels. Pins sit on tungsten-carbide shanks.",'<path d="M8 28H30"/><path class="a" d="M30 18H46V38H30Z"/><path d="M34 18V38M38 18V38M42 18V38"/>'],
  ["Polishing","Copper bonded wheels","Polish ground dies to a mirror finish faster than diamond compound and a stick by hand, without the ovality of hand polishing.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="10"/><circle class="f" cx="28" cy="28" r="2.4"/>'],
  ["Compound","Diamond compound","Formulated for the mold and die industries, with a stable carrier that keeps the diamond in suspension and in the working area.",'<path d="M16 44H40L36 18H20Z"/><path class="a" d="M18 30H38"/><circle class="f" cx="28" cy="12" r="2.4"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3><span class="nw">'+esc(c[1])+'</span></h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function exps(){var X=[
  ["Training on our machines","At our facility before shipment, or at your factory once the equipment is installed: proper die making technique for new and experienced operators."],
  ["The Die Making Handbook","Supplied with every new machine: the formulas, tooling specifications, die design theory and die materials a die maker needs."],
  ["Die design theory","Die Quip authored the die making chapters in the Wire Association’s Steel Wire and Non-ferrous handbooks, and teaches why dies fail."],
  ["Wire Drawer’s Guide to Dies","A one-hour program on site for drawing operators and foremen: how the die works, and practical problem solving, with a handout."]];
  return '<ol class="exps e4">'+X.map(function(x,i){return '<li><span class="lab">'+('0'+(i+1)).slice(-2)+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Die finishing machines<span class="nomob"> · Bethel Park, Pennsylvania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Rigid machines</span> <span class="l">for carbide dies,</span> <span class="l acc">and the knowledge</span> <span class="l acc">behind them.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1974, Die Quip has built the equipment that grinds and polishes tungsten-carbide dies for the wire, bar and tube drawing industries, and taught the die design that makes them last.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/machines">See the machines '+ARR+'</a><a class="btn" href="#/contact">Request a quote</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Die Quip Corporation</span>'+
   '<h2 class="txt" id="mani">Judge a die by the cost per ton it draws, <em>not by the price you paid for it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1974</span><p class="k">Founded by Tom Maxwell after 20 years in a die shop; run today by his sons</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">152 mm</span><p class="k">Internal grinding up to 6″ on the BG/10; the MGF-200 starts at .020″</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3×</span><p class="k">The work of traditional equipment, on the robotic Die Flex XA</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the die</span><h2 class="d3"><span class="nw">From ground carbide</span> <em class="nw">to drawn wire.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Grind</span><span>Polish</span><span>Draw</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Grind the angle.</h2><p>A BG grinder plunge-grinds the carbide nib at .020″ per minute. Preset machine settings hold the die geometry, so every die comes out the same from one operator to the next.</p></article>'+
     '<article class="step"><h2>Polish to a mirror.</h2><p>Copper bonded wheels polish the ground die to a mirror finish, faster than diamond compound and a stick by hand, and without the ovality of hand polishing.</p></article>'+
     '<article class="step"><h2>Draw more tons.</h2><p>A smoother surface reduces drawing friction. The die that lasts longer in production lowers the cost per ton, which is the number that counts.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="machines" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Die finishing machines</span><h2 class="d2 split"><span class="nw">Built tough</span> <em class="nw">for heavy cutting.</em></h2></div><p data-r>Time-tested machining principles, sound work holding and a rigid platform for heavy cuts and long service life, across the widest diameter range in the industry.</p></div>'+
   rows(MACH)+
  '</div></section>'+

  '<section class="sec light" id="tooling" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Diamond tooling</span><h2 class="d2 split"><span class="nw">The pins and wheels</span> <em class="nw">that cut the die.</em></h2></div><p data-r>Die Quip stocks plated and bonded pins and wheels, polishing compounds and accessories, and can custom manufacture any pin or wheel to your specification.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="measuring" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Wire cutting and measuring</span><h2 class="d2 split"><span class="nw">Cut it clean,</span> <em class="nw">measure it right.</em></h2></div><p data-r>Cutting tools for tough wire, and a complete line of measuring products for die shop operators and the quality control lab, from a micrometer to a video microscope.</p></div>'+
   rows(MEAS)+
  '</div></section>'+

  '<section class="sec light" id="education" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Education and training</span><h2 class="d2 split"><span class="nw">Anyone can polish a die.</span> <em class="nw">Make it last.</em></h2></div><p data-r>What makes the difference is how long a die lasts in production. Die Quip has the design knowledge, education materials and on-site training to show results in the die shop and on the shop floor.</p></div>'+
   exps()+
  '</div></section>'+

  '<section class="sec dark2" id="company" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">A family company,</span> <em class="nw">since 1974.</em></h2></div><p data-r>Tom Maxwell founded Die Quip as an equipment builder. His sons Tom and Scott Maxwell have run the business since his retirement, with sales agents across Europe and the Americas.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Agents</span><p class="cr ag" data-r>'+AGENTS.map(function(a){return '<span>'+esc(a)+'</span>'}).join("")+'</p></div>'+
   '<div class="bk"><span class="lab kick" data-r>Trade fair</span><p class="cr" data-r><span>wire 2026</span><span>Düsseldorf, April 2026</span><a class="ul" href="https://www.wire-tradefair.com/vis/v1/en/exhibitors/wire2026.3059979" target="_blank" rel="noopener">In the exhibitor directory</a></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <em class="nw">your dies.</em></h2>'+
   '<p class="sub" data-r>For quotes, machine questions, training or a die problem on the drawing floor, reach the team in Bethel Park directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Die Quip '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Die Quip Corporation<br>5360 Enterprise Blvd.<br>Bethel Park, PA 15102, USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Fax '+FAXT+'</p></div>'+
    '<div><span class="lab" data-r>Shop</span><p data-r><a class="ul" href="http://www.wirecutterstore.com" target="_blank" rel="noopener">Wire cutter store</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Die Quip Corporation<br>5360 Enterprise Blvd., Bethel Park, PA 15102</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/machines">Machines</a><br><a class="ul" href="#/tooling">Tooling</a><br><a class="ul" href="#/measuring">Measuring</a><br><a class="ul" href="#/education">Education</a></div>'+
   '<div class="c"><span class="lab">Since 1974</span>Die finishing, wire cutting and measuring for the wire, bar and tube drawing industries</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo Black\',Arial,sans-serif;font-weight:400;font-size:64px;letter-spacing:.16em">DIE QUIP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Die Quip Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",process:"story",machines:"machines",tooling:"tooling",measuring:"measuring",education:"education",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Die Quip — Die finishing, wire cutting and measuring, Bethel Park, PA",x:"Home"};
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
