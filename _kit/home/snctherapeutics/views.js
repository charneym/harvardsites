/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+c[0]+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk">'+(c[5]?'Platform':'In development')+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="tgr">'+TEAM.map(function(p){
  return '<article class="tcd"><div class="tph"><img class="g" src="'+p.img+'" alt="" loading="lazy" width="640" height="800"><span class="cl"><img class="c" src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy" width="640" height="800"></span></div>'+
   '<div class="tct"><h3>'+esc(p.name)+'</h3><span class="lab">'+p.title+'</span><p>'+p.sum+'</p></div></article>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+n[2]+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Tolerance, not suppression","Free rapamycin suppresses lymphocytes across the body. Carried in a polymersome and given under the skin, the same drug reaches antigen-presenting cells instead, and teaches the immune system to leave one set of antigens alone.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M20 28.5l5.4 5.4L37 22.4"/><circle class="f" cx="28" cy="11" r="2.4"/>'],
  ["No autoantigen hunt","Tolerance to several antigens at once is raised without co-administering them, and without first having to identify which autoantigens matter in a given patient.",'<circle cx="18" cy="24" r="7"/><circle cx="36" cy="20" r="5"/><circle cx="31" cy="37" r="6"/><path class="a" d="M24.4 26.6l5.4 5M24 21.6l6.6-1"/>'],
  ["An injection, not an infusion","Many immunomodulatory drugs need costly intravenous infusions. A short course of subcutaneous injections lowers the cost of treatment and makes it easier to keep to.",'<path d="M12 44l7-7M16.5 39.5l-3.5 7.5 7.5-3.5"/><path class="a" d="M21 35l10-10 8 8-10 10Z"/><path d="M33 19l6-6 6 6-6 6Z"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>What the published work showed</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Burke et al., Nature Nanotechnology 17, 319&#8211;330 (2022), and the public NIH award record for 1R41DK142265.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tolerogenic nanotherapy<span class="nomob"> · Evanston, Illinois</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Teach the immune</span><span class="l">system <em>one lesson.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>SNC Therapeutics builds synthetic nanocarriers that carry a drug to the cells which decide what the immune system attacks &#8212; so tolerance can be raised against one set of antigens, without suppressing the rest.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/pipeline">Programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why prevention</span>'+
   '<h2 class="txt" id="mani">For type 1 diabetes the only treatment is a lifetime of insulin. The disease itself is the harm, so the goal is <em>to delay its onset</em> in the people who are heading for it.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">+200%</span><p class="k">The raised risk of cardiovascular disease carried by people living with type&#160;1 diabetes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$350K</span><p class="k">NIH STTR Phase&#160;I award, July 2025, to take the nanotherapy towards an IND</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2022</span><p class="k">Founded on the laboratory research behind the Nature Nanotechnology paper</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the nanotherapy works</span><h2 class="d3">Under the skin, <em>into the node.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Inject</span><span>Drain</span><span>Teach</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A short course, under the skin.</h2><p>Rapamycin is packed into the wall of a polymersome, a vesicle built from block copolymer. Injected subcutaneously, the carrier takes the drug out of the bloodstream and into the lymphatic route instead.</p></article>'+
     '<article class="step"><h2>It drains to the lymph node.</h2><p>Vesicles of this size travel the lymphatics to the draining node, where antigen-presenting cells take them up. The drug arrives in the cells that set the response, not in every lymphocyte in the body.</p></article>'+
     '<article class="step"><h2>Those cells teach tolerance.</h2><p>The treated cells raise MHC&#160;II and lower their costimulatory signal. T&#160;cells meeting that combination are not activated; regulatory T cells are. Tolerance follows for the antigens on show &#8212; and only those.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">A carrier that <em>changes the lesson.</em></h2></div><p data-r>SNC Therapeutics employs a drug and nonviral gene delivery platform for rational immunotherapy. Its synthetic nanocarriers permit scalable, versatile and controlled delivery to, and transfection of, diverse cell populations, while minimising toxicity and side effects.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One carrier, <em>several lessons.</em></h2></div><p data-r>The lead programme takes rapamycin-loaded polymersomes towards an IND for delaying the onset of type 1 diabetes. The same carrier has already shown donor-specific tolerance in islet transplantation, and the platform extends to nonviral gene delivery.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Immunoengineers <em>and formulators.</em></h2></div><p data-r>SNC Therapeutics was founded in 2022 out of the laboratory research behind its platform, through Northwestern University&#8217;s Innovation and New Ventures Office.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where it came from</span><p data-r>The nanocarrier research of the founder&#8217;s laboratory, published in Nature Nanotechnology in 2022 and commercialised through Northwestern&#8217;s Innovation and New Ventures Office.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>An NIH Phase&#160;I STTR award from the National Institute of Diabetes and Digestive and Kidney Diseases, made in July 2025.</p></div>'+
    '<div><span class="lab kick" data-r>Where it is going</span><p data-r>Dosing optimised against the standard of care in the non-obese diabetic model, and polymer synthesis and formulation scaled up under Good Laboratory Practice, towards an IND.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and publications.</em></h2></div><p data-r>The public record: the NIH award, the peer-reviewed work behind the platform, and the company&#8217;s founding.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Collaborators, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>SNC Therapeutics.</em></h2>'+
   '<p class="sub" data-r>Whether you work on type 1 diabetes or transplantation, formulate and manufacture nanomedicines, or invest in immunology at this stage, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email SNC Therapeutics '+ARR+'</a><a class="btn" href="#/pipeline">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>SNC Therapeutics, Inc.<br>Evanston, Illinois<br>United States</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>On the north shore</span><p data-r>Next to Northwestern University, where the platform was invented and the company was formed.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Evanston, Illinois<br>United States</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Synthetic nanocarriers · Tolerogenic nanotherapy · Nonviral gene delivery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 72" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Outfit\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.06em">SNC THERAPEUTICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SNC Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* portraits: colour opens from the pointer (CI/CO) */
addEventListener("pointerover",function(e){var c=e.target.closest&&e.target.closest(".tcd");if(!c||c.contains(e.relatedTarget))return;var p=c.querySelector(".tph"),r=p.getBoundingClientRect();
  p.style.setProperty("--mx",((e.clientX-r.left)/r.width*100).toFixed(1)+"%");p.style.setProperty("--my",((e.clientY-r.top)/r.height*100).toFixed(1)+"%")});

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SNC Therapeutics — tolerogenic nanotherapy for type 1 diabetes",x:"Home"};
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
