/* ================= VIEWS (home only: Cardiac arrest / Solution / Team / Get involved open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function team(){return '<ul class="ptg">'+TEAM.map(function(p){
  return '<li><figure class="pti" data-r><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" width="720" height="900" loading="lazy" onerror="this.style.visibility=\'hidden\'"></figure><h3 data-r>'+esc(p.name)+'</h3><span class="lab ptr" data-r>'+esc(p.title)+'</span><p data-r>'+esc(p.sum)+'</p></li>'}).join("")+'</ul>'}
function refs(){return '<ol class="rfs">'+REFS.map(function(r){return '<li data-r><span class="lab">'+r[0]+'</span><a class="ul" href="'+r[2]+'" target="_blank" rel="noopener">'+esc(r[1])+'</a></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Bystander ventilation for cardiac arrest<span class="nomob"> · Denmark</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Anyone can be</span><span class="l"><em>a lifesaver.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Anorit Medical is pioneering a ventilation device that lets laypersons give high-quality air during out-of-hospital cardiac arrest, simply and without direct contact with the patient.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/solution">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>The airway the device fills with air: trachea and bronchial tree (render).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="cardiac-arrest" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="txt" id="mani">Survival from cardiac arrest falls with every minute, and depends on the bystanders who step in. Even in Denmark, where laypersons step in often and well, it has plateaued for years. <em>This calls for a new tool in resuscitation.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">7M</span><span class="k">People worldwide suffer a cardiac arrest each year</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">8.8%</span><span class="k">Survive on average, and fewer with good neurological function</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">350k</span><span class="k">People in Europe have a cardiac arrest out of hospital every year</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our solution</span><h2 class="d3">Air for the patient, <em>without the barrier.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Arrest</span><span>CPR</span><span>Barrier</span><span>Air</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Every minute counts.</h2><p>When the heart stops outside hospital, survival depends on bystanders starting Basic Life Support at once, and it falls with every minute that passes.</p></article>'+
     '<article class="step"><h2>Compressions and a shock.</h2><p>Chest compressions and a shock from an AED are the essential tasks. Recent data show that correctly giving the patient air is also associated with better survival.</p></article>'+
     '<article class="step"><h2>The barrier.</h2><p>For laypersons the main way to give air is mouth-to-mouth. The direct contact is an intimacy barrier that discourages people, and the task is complex, so even when it is tried it often fails.</p></article>'+
     '<article class="step"><h2>Air, without contact.</h2><p>Anorit’s device removes the need for direct contact, simplifies the task and provides high-quality air, without interfering with chest compressions or the AED.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The evidence</span><h2 class="d2 split">Built on <em>resuscitation science.</em></h2></div><p data-r>The figures on this page come from the European Resuscitation Council, the American Heart Association and a multicentre study of ventilation in out-of-hospital cardiac arrest.</p></div>'+
   refs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The team</span><h2 class="d2 split">Three backgrounds, <em>one need.</em></h2></div><p data-r>The team formed in the BioMedical Design Novo Nordisk Foundation Fellowship Programme, where Sotiria, Minik and Andreas, with doctor and PhD Nanna Skytt Pilmark, identified a real need in healthcare and took the first steps towards a solution.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Affiliations</span><p class="cr" data-r>'+AFF.map(function(a){return '<span>'+esc(a)+'</span>'}).join("")+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="get-involved" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Get involved</span><h2 class="d2 split">Help save more lives <em>from cardiac arrest.</em></h2></div><p data-r>The device is still in development and is not yet CE-marked. Anorit is looking for people to test the prototype, and for anyone who wants to hear when it becomes available.</p></div>'+
   '<ul class="gin">'+
    '<li><span class="lab tg" data-r>User tests</span><h3 data-r>Test the prototype.</h3><p data-r>Sign up for the user tests and give feedback that shapes the device.</p><a class="lk" data-r href="https://forms.gle/HgXnee2SatQqadiu5" target="_blank" rel="noopener">Sign up for a user test '+ARR+'</a></li>'+
    '<li><span class="lab tg" data-r>Interest list</span><h3 data-r>Hear when it is ready.</h3><p data-r>A non-binding expression of interest, to be notified when the product becomes available.</p><a class="lk" data-r href="https://docs.google.com/forms/d/e/1FAIpQLSd9o6v51rfbu_JIEuujIBAjp1mmtvNJMFLwSjqZBgznUmAzOw/viewform" target="_blank" rel="noopener">Register interest '+ARR+'</a></li>'+
   '</ul>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and first responders</span>'+
   '<h2 class="big split">Make anyone <em>a lifesaver.</em></h2>'+
   '<p class="sub" data-r>To talk about the device, a user test, a partnership or an investment, write to the Anorit Medical team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/solution">Our solution</a></div>'+
   '<div class="cinfo cgrid">'+
    '<div><span class="lab" data-r>Company</span><p data-r>Anorit Medical<br>CVR 44914492</p></div>'+
    '<div><span class="lab" data-r>Based in</span><p data-r>Denmark<br>BII Venture Lab, 2026</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
   '<p class="ivd" data-r>The device is under development and is not CE-marked. It is not available for sale.</p>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Denmark<br>BII Venture Lab</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/cardiac-arrest">Cardiac arrest</a><br><a class="ul" href="#/solution">Solution</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/get-involved">Get involved</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="https://www.linkedin.com/company/anorit-medical/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Ventilation for out-of-hospital<br>cardiac arrest</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'DM Serif Display\',Georgia,serif;font-weight:400;font-size:68px;letter-spacing:0"><tspan fill="#f4f6fa">Anorit</tspan><tspan fill="#a6bfe8" dx="16">Medical</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Anorit Medical</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={"cardiac-arrest":"cardiac-arrest",solution:"story",evidence:"evidence",team:"team","get-involved":"get-involved",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Anorit Medical — a ventilation device for bystanders in cardiac arrest, Denmark",x:"Home"};
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
