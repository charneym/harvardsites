/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function impactRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[2])+'</i></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="ptg">'+TEAM.map(function(p){
  return '<figure class="pt-t"><div class="ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="350" height="466" loading="lazy"></div><figcaption><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span><span class="sm">'+esc(p.sum)+'</span></figcaption></figure>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Individually tailored messaging","People Designs has been developing and delivering individually tailored health interventions since 1995: each person receives the messages that fit their needs, situation and readiness.",'<circle cx="16" cy="14" r="5"/><path d="M7 30c0-6 4-9 9-9s9 3 9 9"/><path class="a" d="M30 12h20M30 20h14M30 28h18"/><circle class="f" cx="16" cy="44" r="3"/><path d="M24 44h24"/>'],
  ["Web-based health applications","Websites that work more like software applications, built primarily on open-source technology, with privacy, confidentiality and information security designed in from the start.",'<rect x="6" y="10" width="44" height="32"/><path d="M6 18h44"/><path class="a" d="M14 26h16M14 32h22"/><circle class="f" cx="42" cy="29" r="3"/><path d="M20 48h16"/>'],
  ["Many languages, many cultures","Interventions in multiple languages and character sets, including Arabic, Spanish, Tagalog, Portuguese, Chinese, French, Vietnamese, Khmer, Russian, Korean, Armenian and Farsi.",'<circle cx="28" cy="28" r="20"/><path d="M8 28h40M28 8c-7 6-7 34 0 40M28 8c7 6 7 34 0 40"/><path class="a" d="M12 18c10 3 22 3 32 0M12 38c10-3 22-3 32 0"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function areas(){var A=["Dementia","Cancer survivorship","Advance care planning","Pain management","Vaccination uptake","Obesity","Physical activity","Healthy eating and nutrition","Health inequities","Financial toxicity","Patient-provider communication","Tobacco and smoking cessation","Breast cancer screening and treatment","Colorectal cancer screening","Cervical cancer screening","Diabetes prevention and treatment","Lay helping","Reproductive and sexual health","Pregnancy health"];
  return '<div class="bk ar"><span class="lab kick" data-r>Content areas</span><p class="cr" data-r>'+A.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i>·</i>')+'</p></div>'}
function clients(){return '<div class="bk"><span class="lab kick" data-r>Selected clients</span><p class="cr" data-r>'+CLIENTS.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i>·</i>')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Health communications R&amp;D<span class="nomob"> · Since 1995</span> · Durham, NC</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Health communication,</span><span class="l">designed for</span><span class="l"><em>people.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>People Designs develops, studies and delivers theory-driven, empirically grounded health communication interventions for diverse audiences: individually tailored, web-based and in many languages.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How we work '+ARR+'</a><a class="btn" href="#/impact">Our impact</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">A trusted partner for institutions developing health communication interventions, grounded in public health theory, creative in communication and design, and expert in the technology that <em>delivers them.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">200+</span><p class="k">Health promotion projects completed since 1995</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40+</span><p class="k">Large-scale research interventions, resulting in hundreds of peer-reviewed publications</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+</span><p class="k">Research institutions have studied People Designs interventions</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work</span><h2 class="d3">From a sketch <em>to every reader.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Explore</span><span>Tailor</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start with the people.</h2><p>Projects begin with exploratory discussions about your health issue, your population and any solutions already conceived. The goal is a sketch of a successful health communication intervention.</p></article>'+
     '<article class="step"><h2>Tailor every message.</h2><p>We select and develop the communication strategies that fit, so each person receives messages suited to them, adapted with care for culture and language. Every solution we develop is unique.</p></article>'+
     '<article class="step"><h2>Deliver it, and study it.</h2><p>The intervention goes live as a web or mobile application, and is studied: more than 40 large-scale research interventions so far, by over 30 research institutions.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="expertise" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Areas of expertise</span><h2 class="d2 split">Specialists in <em>health communication.</em></h2></div><p data-r>Our expertise could apply to many fields, but we concentrate on health communications, which lets us offer the specialised knowledge and experience our health-focused clients need.</p></div>'+
   caps()+
   areas()+
  '</div></section>'+

  '<section class="sec dark2" id="impact" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Impact</span><h2 class="d2 split">Enormous reach <em>for our size.</em></h2></div><p data-r>Hundreds of peer-reviewed publications have furthered the science of health promotion, and more than a dozen early-stage public health researchers have built careers on programmes we helped them create and study.</p></div>'+
   impactRows(IMPACT)+
   clients()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Small, and highly <em>productive.</em></h2></div><p data-r>A team of four staff, working with many long-term associates who bring specialised skills project by project: content development for specific issues and populations, video, photography, illustration, animation, marketing and commercialisation.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Recent <em>publications.</em></h2></div><p data-r>Recent peer-reviewed papers on interventions People Designs has helped build and study, with academic partners in cancer survivorship, pain and dementia care.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Work with us</span>'+
   '<h2 class="big split">Let’s build a <em>great intervention.</em></h2>'+
   '<p class="sub" data-r>Projects usually begin with an exploratory conversation. If it is a good fit, we develop an initial cost and timeline, and if you don’t have funding yet, we can help with your grant application.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email People Designs '+ARR+'</a><a class="btn" href="#/how">How we work</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>People Designs, Inc.<br>1304 Broad Street<br>Durham, NC 27705</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19194336452">+1 919 433 6452</a></p></div>'+
    '<div><span class="lab" data-r>Contributors</span><p data-r>Individuals and small businesses who deliver very high-quality work are always welcome to write.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1304 Broad Street<br>Durham, NC 27705</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19194336452">+1 919 433 6452</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/expertise">Expertise</a><br><a class="ul" href="#/impact">Impact</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/research">Research</a></div>'+
   '<div class="c"><span class="lab">Since 1995</span>Theory-driven, empirically grounded<br>health communication</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 66" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:400;font-size:66px;letter-spacing:-.02em">People Designs</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 People Designs, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",approach:"story",expertise:"expertise",impact:"impact",work:"impact",clients:"impact",team:"team",research:"research",news:"research",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"People Designs — Health communications R&D, Durham, NC",x:"Home"};
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
