/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Preventive, not remediative","The industry has historically approached scarring after the fact, with revision surgery and therapy. Treysta is thinking preventively: treating the wound while it heals, before a scar has formed.",'<path d="M8 40c10-2 14-14 20-14s10 12 20 14"/><path class="a" d="M8 28c10-2 14-8 20-8s10 6 20 8"/><circle class="f" cx="28" cy="12" r="3"/>'],
  ["A first-in-class topical","TreystaCare is a topical drug that works to guide the healing process, encouraging the deposition of smoother, healthier, more natural-looking skin.",'<rect x="16" y="8" width="24" height="30"/><path class="a" d="M22 38v8h12v-8"/><path d="M16 18h24"/>'],
  ["Built into existing care","Applied during routine dressing changes in the first week after surgery, or across the first two to four weeks of burn care: no new procedure for clinicians to learn.",'<path d="M10 28h36"/><path class="a" d="M14 20h28v16H14z"/><path d="M22 12v8M34 12v8M22 36v8M34 36v8"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function need(){return '<div class="ev"><span class="lab kick" data-r>Scarring is more than cosmetic</span><div><dl>'+NEED.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'. <a class="ul src" href="'+e[3]+'" target="_blank" rel="noopener">'+esc(e[2])+'</a></dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Figures as cited on treystamedicaltechnologies.com, with the studies they come from.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Scar prevention<span class="nomob"> · Topical therapy</span> · Gainesville, FL</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Healing,</span><span class="l">without</span><span class="l"><em>the scar.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Treysta Medical Technologies is advancing a new class of therapies that reduce post-surgical scarring: TreystaCare, a first-in-class topical drug that guides the healing process toward smoother, healthier, more natural-looking skin.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/programmes">Our programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Even when care is perfect, surgeries and injuries leave behind a permanent reminder. For millions, scarring is functional, emotional and permanent. Treysta is on a mission to <em>safeguard quality of life.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 2</span><span class="k">People have a scar (Amici et al. 2022)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1.2M</span><span class="k">Cesarean deliveries a year in the US, the country’s most common surgery</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305K</span><span class="k">NSF SBIR Phase I award, 2025, to develop a burn care therapy that prevents fibrotic pathologies</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Switch off the <em>scar default.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Default</span><span>Intervene</span><span>Heal</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The body repairs in emergency mode.</h2><p>“Scarring is the body’s default emergency repair mode.” After a surgery or a burn, the wound closes, but the tissue laid down in it heals raised, tight or discoloured: a permanent reminder.</p></article>'+
     '<article class="step"><h2>Treat the wound while it heals.</h2><p>TreystaCare goes on during routine dressing changes, in the first week after a cesarean delivery or across the first weeks of burn care, and interrupts the scarring cascade.</p></article>'+
     '<article class="step"><h2>Skin that looks and feels like skin.</h2><p>The goal is healing that looks and feels much more like normal skin, preserving how people move, feel and see themselves one, five or ten years later.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>TreystaCare</span><h2 class="d2 split">A first-in-class <em>topical drug.</em></h2></div><p data-r>“We’re looking beyond initial surgical outcomes, to preserve how people move, feel, and see themselves 1, 5, or 10 years later.” Nathan Zarnstorff, CEO</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the delivery room <em>to the burn unit.</em></h2></div><p data-r>Treysta is charting a course to near-term impact where the need is greatest, after cesarean delivery, with a long-term vision to redefine recovery from serious burns.</p></div>'+
   pipeRows(PIPE)+
   need()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Quality engineering and <em>regenerative medicine.</em></h2></div><p data-r>Founded by a medtech quality engineer and a regenerative medicine inventor, and advised by clinicians in burn care, dermatology and emergency medicine.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NSF SBIR Phase I award 2528240, July 2025: $304,984 for the development of a burn care therapy to prevent fibrotic pathologies.</p></div>'+
    '<div><span class="lab kick" data-r>Burn care</span><p data-r>More than 11 million burn injuries need medical attention worldwide each year (World Health Organization).</p></div>'+
    '<div><span class="lab kick" data-r>Military medicine</span><p data-r>Severe burns were involved in 5 to 20 percent of casualties in Operations Iraqi Freedom and Enduring Freedom (US Department of Defense).</p></div>'+
   '</div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, surgeons and partners</span>'+
   '<h2 class="big split">Join the <em>Treysta mission.</em></h2>'+
   '<p class="sub" data-r>Treysta is seeking accredited capital partners with an appetite for clinically differentiated technologies, and clinical advisors from obstetrics and military burn care. We’d love to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Treysta '+ARR+'</a><a class="btn" href="#/programmes">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Treysta Medical Technologies Inc.<br>747 SW 2nd Ave, Suite 345<br>Gainesville, FL 32601</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">Nathan Zarnstorff, CEO</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r><a class="ul" href="'+NSF+'" target="_blank" rel="noopener">NSF SBIR Phase I</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Gainesville, FL</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email Treysta</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">TreystaCare</span>Acute™ · System™ for burns<br>In development</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Archivo\',Arial,sans-serif;font-weight:800;font-size:60px;letter-spacing:.12em">TREYSTA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Treysta Medical Technologies Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",programmes:"programmes",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Treysta Medical Technologies — Therapies that prevent scarring, Gainesville, FL",x:"Home"};
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
