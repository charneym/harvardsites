/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+''+'">'+(c[5]?'Next':'In progress')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Encapsulation","An immunoisolating capsule protects the cells from the immune system while letting glucose and nutrients in and insulin out, so no anti-rejection drugs are needed.",'<rect x="6" y="18" width="44" height="20" rx="10"/><rect class="a" x="11" y="23" width="34" height="10" rx="5"/><circle class="f" cx="20" cy="28" r="2.6"/><circle class="f" cx="29" cy="28" r="2.6"/><circle class="f" cx="38" cy="28" r="2.6"/>'],
  ["Implanted oxygenation","An implantable electrochemical oxygen generator makes oxygen from the moisture in the surrounding tissue, for healthier cells and a longer-lasting treatment that does not impede daily life.",'<path d="M4 28h48"/><path class="a" d="M4 24h48M4 32h48"/><circle class="f" cx="14" cy="28" r="1.8"/><circle class="f" cx="26" cy="28" r="1.8"/><circle class="f" cx="38" cy="28" r="1.8"/><path d="M10 14c4-4 8 4 12 0s8 4 12 0 8 4 12 0"/>'],
  ["Higher cell density","Oxygen on site lets the capsule hold densely packed cells, so a therapeutic dose fits in a smaller, patient-friendly implant.",'<circle cx="17" cy="20" r="7"/><circle cx="31" cy="17" r="7"/><circle cx="41" cy="30" r="7"/><circle cx="24" cy="33" r="7"/><circle class="a" cx="28" cy="26" r="21"/>'],
  ["Soft, flexible, biocompatible","A core-shell nanofibrous design reduces the dense scar tissue that forms around implants, so the capsule keeps working, and can be placed and retrieved under the skin.",'<path d="M6 36c8-14 14-14 22 0s14 14 22 0"/><path class="a" d="M6 28c8-14 14-14 22 0s14 14 22 0"/><path d="M6 20c8-14 14-14 22 0s14 14 22 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Milestones</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From Persista Bio news releases (persistabio.com/news), Pham et al., Nature Communications 2025 (DOI 10.1038/s41467-025-62271-2) and the public NIH award record.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Implantable cell therapy for Type 1 diabetes<span class="nomob"> · Ithaca, New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Cell therapy,</span><span class="l"><em>oxygenated.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The Persista Bio O2Line™ system is a long-term cell implant that regulates blood sugar the way the pancreas does: it shields insulin-secreting cells from the immune system and gives them the oxygen they need, without immunosuppression.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/challenge">The challenge</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="challenge" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The challenge</span>'+
   '<h2 class="txt" id="mani">Stem cell therapies for Type 1 diabetes work. Implanting them is <em>the problem.</em></h2>'+
   '<p class="mani-p" data-r>Patients still need lifelong immunosuppression, which limits their lives and raises the risk of infection and cancer, and most encapsulation strategies leave out the oxygen the densely packed cells need to keep working.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">9M+</span><p class="k">People worldwide living with Type 1 diabetes</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~$100K</span><p class="k">A year for the immunosuppression drugs today’s cell therapies need, which also raise the risk of infection and cancer</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90 days</span><p class="k">Of normal blood glucose in diabetic rats with the O2Line prototype, without immunosuppression</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How O2Line works</span><h2 class="d3">Oxygen in, <em>insulin out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Oxygen</span><span>Shield</span><span>Regulate</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Oxygen, made where it is needed.</h2><p>An implantable electrochemical oxygen generator, the iEOG, uses moisture from the surrounding tissue to make oxygen, and an oxygen line carries it through the middle of the capsule to the densely packed cells.</p></article>'+
     '<article class="step"><h2>A wall the immune system cannot cross.</h2><p>A core-shell nanofibrous membrane surrounds the islet compartment. Immune cells stay outside, so the implant needs no anti-rejection drugs, and its soft, flexible design limits the scar tissue that would cut the cells off.</p></article>'+
     '<article class="step"><h2>Blood sugar, regulated by the cells.</h2><p>Glucose and nutrients pass in; the encapsulated pancreatic cells sense the glucose level and release the insulin the body needs, which passes out into the bloodstream. No injections, pumps, finger sticks or sensors.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Four answers to <em>one roadblock.</em></h2></div><p data-r>O2Line combines implantable oxygenation technology licensed from Giner, Inc. with macroencapsulation technology licensed from Cornell University: an implanted, fast-response, high-capacity capsule that avoids immune rejection. The result is healthier cells, a longer-lasting implant and no repercussions from anti-rejection drugs.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Type 1 diabetes first, <em>then a platform.</em></h2></div><p data-r>Persista Bio is a preclinical, seed-stage company. Its first indication is Type 1 diabetes; next come large-animal studies, product development and partnering with stem cell providers, and the same system can carry other cells for other chronic diseases.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Encapsulation and electrochemistry, <em>under one roof.</em></h2></div><p data-r>An experienced team that has launched other ventures, with deep experience in cell encapsulation and electrochemical technologies, now taking established science and prototypes into product development.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Licensed from</span><p data-r>Cornell University, for the macroencapsulation technology of the Minglin Ma lab, and Giner, Inc., for the implantable oxygenation technology.</p></div>'+
    '<div><span class="lab kick" data-r>Supported by</span><p data-r>The NIH’s National Institute of Diabetes and Digestive and Kidney Diseases, Breakthrough T1D, and FuzeHub with Empire State Development’s NYSTAR division.</p></div>'+
    '<div><span class="lab kick" data-r>Based at</span><p data-r>Cornell University’s Center for Life Science Ventures in Ithaca, New York.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Results, grants <em>and regulators.</em></h2></div><p data-r>The latest from Persista Bio, the peer-reviewed literature and the NIH record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners and cell-therapy developers</span>'+
   '<h2 class="big split">Innovate with <em>Persista Bio.</em></h2>'+
   '<p class="sub" data-r>To talk about investment, partnerships or licensing, or to join the team as we fight diabetes and other diseases, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Get in touch '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">Media enquiries</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Persista Bio, Inc.<br>Ithaca, New York, USA</p></div>'+
    '<div><span class="lab" data-r>Media</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Licensors</span><p data-r>Cornell University and Giner, Inc.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Ithaca, New York, USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="mailto:'+MAIL+'">Media enquiries</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/challenge">The Challenge</a><br><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>The O2Line™ oxygenated cell therapy system</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:56px;letter-spacing:.1em">persista bio</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Persista Bio, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={challenge:"challenge",technology:"story",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Persista Bio — Cell therapy, oxygenated",x:"Home"};
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
