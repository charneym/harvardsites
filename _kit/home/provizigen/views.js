/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Research partners</span><p data-r>'+PARTNERS.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Injectable protein hydrogel<span class="nomob"> · New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">After the injury,</span><span class="l"><em>before the arthritis.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ProViZiGen is developing HydroGEN, an injectable, protein-engineered hydrogel that sets inside an injured joint and releases a therapeutic protein over time, to stop post-traumatic osteoarthritis without major surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>COMPcc, the coiled-coil domain of the cartilage protein COMP, atom by atom (PDB 1VDF): the kind of block HydroGEN’s carrier is built from.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">After a joint injury, cartilage can wear down faster than in other forms of osteoarthritis. No approved treatment stops or alters that course, and many patients end up with a new joint. ProViZiGen wants <em>one injection to change it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5.6M</span><span class="k">Americans affected by post-traumatic osteoarthritis</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$11.8B</span><span class="k">Estimated direct cost of treating it each year</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10 min</span><span class="k">For the lead HydroGEN carrier to gel at body temperature</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Protein-engineered</span><p data-r>The carrier is built from engineered protein blocks, elastin-like and coiled-coil domains, then deimmunized: substitutions removed three predicted high-risk epitopes.</p></div>'+
    '<div><span class="lab kick" data-r>Liquid in, gel inside</span><p data-r>A thermoresponsive carrier: injected into the joint space, it gels and holds the therapeutic where the damage is.</p></div>'+
    '<div><span class="lab kick" data-r>Instead of surgery</span><p data-r>Joint replacement can need revision in about ten years, a poor outcome for young, active patients. HydroGEN aims to avoid it.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">One injection, <em>held in the joint.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Injury</span><span>Injection</span><span>Repair</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An injury inflames the joint.</h2><p>After a traumatic joint injury such as an ACL tear, the joint is unstable and pro-inflammatory cytokines rise. Together they wear the articular cartilage down far faster than in other osteoarthritis.</p></article>'+
     '<article class="step"><h2>HydroGEN gels where it lands.</h2><p>Injected as a liquid into the joint space, the protein carrier gels at body temperature, its lead construct within ten minutes, and stays in place as a depot.</p></article>'+
     '<article class="step"><h2>A slow release protects the cartilage.</h2><p>The gel releases an anti-inflammatory, chondroprotective protein over time. In a rabbit ACL transection model, HydroGEN prevented post-traumatic osteoarthritis and promoted the joint’s own cartilage repair.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the bench <em>toward the clinic.</em></h2></div><p data-r>HydroGEN is preclinical. NSF and the National Institute of Arthritis and Musculoskeletal and Skin Diseases fund its STTR development.</p></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Protein engineers <em>in New York.</em></h2></div><p data-r>ProViZiGen works with university partners in New York City, including NYU and the City University of New York.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, results <em>and the team.</em></h2></div><p data-r>Federal STTR awards from NIH and NSF have funded HydroGEN since 2023.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Keep injured joints <em>from wearing out.</em></h2>'+
   '<p class="sub" data-r>ProViZiGen is a biotherapeutics company in New York. To talk about HydroGEN, a partnership or an investment, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+NSF+'" target="_blank" rel="noopener">NSF award</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span class="bl">ProViZiGen LLC</span><span class="bl">New York, New York</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Hours</span><p data-r><span class="bl">Monday to Saturday</span><span class="bl">8:00 am to 5:00 pm</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>ProViZiGen LLC<br>New York, New York</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="https://twitter.com/provizigen" target="_blank" rel="noopener">X (Twitter)</a> · <a class="ul" href="https://www.instagram.com/provizigen/" target="_blank" rel="noopener">Instagram</a></div>'+
   '<div class="c"><span class="lab">Focus</span>An injectable hydrogel for<br>post-traumatic osteoarthritis</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Nunito\',system-ui,sans-serif;font-weight:800;font-size:76px;letter-spacing:0">ProViZiGen</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ProViZiGen LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ProViZiGen — an injectable protein hydrogel for post-traumatic osteoarthritis, New York",x:"Home"};
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
