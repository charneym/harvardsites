/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="rvt">'+gs.map(function(g){return '<div class="rvt-g"><p class="lab rvt-l" data-r>'+esc(g)+'</p><ul class="rvt-list">'+by[g].map(function(p){
    return '<li class="rvt-p"><figure><img src="ppl/'+p.img+'.webp" alt="'+esc(p.name)+'" width="520" height="520" loading="lazy"></figure><h3 data-r>'+esc(p.name)+'</h3><p class="rvt-r" data-r>'+esc(p.title)+(p.org?'<br><span>'+esc(p.org)+'</span>':'')+'</p></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Transfemoral, transseptal","A complete mitral valve replacement delivered through a catheter from the femoral vein, crossing the atrial septum to reach the mitral valve.",'<path d="M10 50C14 34 22 24 34 20"/><path class="a" d="M34 20C40 18 44 22 44 28"/><circle class="f" cx="44" cy="30" r="3"/>'],
  ["Four points, a low frame","Four-point securement and a low-profile valve frame, designed to avoid disturbing the left ventricular outflow tract and to preserve basal left ventricular function.",'<path d="M8 22h40"/><path d="M12 22l4 14h24l4-14"/><circle class="f" cx="16" cy="36" r="2.6"/><circle class="f" cx="24" cy="38" r="2.6"/><circle class="f" cx="32" cy="38" r="2.6"/><circle class="f" cx="40" cy="36" r="2.6"/>'],
  ["Built for lifelong care","If needed, the design allows future valve replacement through a dedicated product line, without compromising the orifice area.",'<path d="M12 18l4 22h24l4-22z"/><path class="a" d="M19 24l3 12h12l3-12z"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Transcatheter mitral valve replacement</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Re-imagining</span><span class="l">the treatment of</span><span class="l"><em>structural heart</em></span><span class="l"><em>disease.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ReValve Solutions develops the Palmetto System, a complete mitral valve replacement delivered by catheter, designed to work with the natural movement of the heart.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/clinical">Clinical progress</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Repair · Replace · ReValve</span>'+
   '<h2 class="txt" id="mani">Developed around the idea that less is more, our solutions are intuitively engineered for anatomical conformity and adaptive performance, <em>and allow for early intervention and ongoing treatment options.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4-point</span><p class="k">Securement, with a low-profile frame that keeps clear of the outflow tract</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;1 hr</span><p class="k">Procedure time in the 2023 first-in-human case, with regurgitation reduced to trace</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><p class="k">Patients planned in the PALMETTO early feasibility study</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One catheter, <em>one complete valve.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Cross</span><span>Secure</span><span>Clear</span><span>Renew</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>In through the femoral vein.</h2><p>The Palmetto System is delivered transfemoral-transseptally: a catheter rises through the right atrium and crosses the atrial septum to the mitral valve.</p></article>'+
     '<article class="step"><h2>Secured at four points.</h2><p>The valve opens in the native mitral valve and is held by four-point securement on the native leaflets.</p></article>'+
     '<article class="step"><h2>The outflow stays clear.</h2><p>A low-profile frame is designed to avoid disturbing the left ventricular outflow tract and to preserve basal left ventricular function.</p></article>'+
     '<article class="step"><h2>Ready for what comes next.</h2><p>If needed, the valve allows a future replacement through a dedicated product line, without compromising the orifice area.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The Palmetto <em>System.</em></h2></div><p data-r>Our approach to transcatheter mitral valve replacement is unique in that we work with the natural movement of the heart. The Palmetto System is investigational and not available for sale.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">From first-in-human <em>to PALMETTO.</em></h2></div><p data-r>After first human use in 2021 and a first-in-human case with the next-generation system in 2023, the PALMETTO early feasibility study will evaluate the safety and performance of the ReValve System.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built on <em>collaboration.</em></h2></div><p data-r>ReValve Solutions was formed around the belief that constructive collaborations result in outcomes far greater than the sum of the parts, accelerating discovery and the implementation of truly innovative solutions.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Find out more</span>'+
   '<h2 class="big split">Contact <em>us.</em></h2>'+
   '<p class="sub" data-r>For clinical, partnering or general enquiries about ReValve Solutions and the Palmetto System, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to ReValve '+ARR+'</a><a class="btn" href="#/technology">See the technology</a></div>'+
   '<div class="cinfo cgrid">'+
    '<div><span class="lab" data-r>Office</span><p data-r>ReValve Solutions, Inc.<br>Irvine, California</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@revalvesolutions.com</a></p></div>'+
    '<div><span class="lab" data-r>Study</span><p data-r><a class="ul" href="https://clinicaltrials.gov/study/NCT07885839" target="_blank" rel="noopener">PALMETTO, NCT07885839</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Irvine, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@revalvesolutions.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Device</span>Palmetto System · investigational transcatheter mitral valve replacement</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',sans-serif;font-weight:500;font-size:70px">REVALVE SOLUTIONS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ReValve Solutions, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",clinical:"clinical",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ReValve Solutions — re-imagining the treatment of structural heart disease",x:"Home"};
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
