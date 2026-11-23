/* ================= VIEWS (home only: Technology / Clinical / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function rows(A,cls){return '<ul class="pfr'+(cls?' '+cls:'')+'">'+A.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a>':'')+'</li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={cath:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 32c6 0 8-4 10-9s5-11 12-11h6"/><circle cx="34" cy="12" r="2"/></svg>',
 cinch:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 34c-9-6-14-11-14-18a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 7-5 12-14 18Z"/><path d="M13 20h14M23 16l4 4-4 4"/></svg>',
 gap:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 30h9M25 30h9"/><path d="M15 30V18M25 30V18"/><path d="M16 22h8"/></svg>'};
function mast(lab,A){return '<div class="mh-group"><p class="mh-label" data-r>'+lab+'</p><ul class="mh-list">'+A.map(function(m){return '<li data-r><div class="mh-row"><span class="mh-name">'+esc(m[0])+'</span><span class="mh-role">'+esc(m[1])+'</span><span class="mh-sum">'+esc(m[2])+'</span><span></span></div></li>'}).join("")+'</ul></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Heart failure<span class="nomob"> · Santa Clara, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Restoring the</span><span class="l">failing heart,</span><span class="l"><em>from within.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>The AccuCinch<sup>®</sup> Ventricular Restoration System is the only completely transcatheter device designed to treat the enlarged left ventricle. FDA Breakthrough Device Designation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The AccuCinch System '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>The AccuCinch implant: spacers and anchors on one cable, rendered. Investigational device.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why we exist</span>'+
   '<h2 class="txt" id="mani">Despite advances in treatment, heart failure keeps sending people back to hospital. <em>We are building new options to help people with heart failure feel better and live longer.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">26M</span><p class="k">People estimated to be living with heart failure across the globe</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><p class="k">Of people who develop heart failure die within five years of diagnosis, at worst</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">400</span><p class="k">Patients, at up to 80 centers worldwide, in the CORCINCH-HF pivotal trial</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.cath+'</span><span class="lab kick" data-r>Transcatheter</span><p data-r>Minimally invasive: the left ventricle is reached through the aortic valve, with no open-heart surgery.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.cinch+'</span><span class="lab kick" data-r>Restores structure</span><p data-r>Designed to treat the enlarged left ventricle itself: to restore its structure and function, not only manage symptoms.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.gap+'</span><span class="lab kick" data-r>Fills a gap</span><p data-r>For HFrEF patients still symptomatic on medication or pacemakers, before an LVAD or a heart transplant.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the AccuCinch System works</span><h2 class="d3">Access, deliver, <em>cinch.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Access</span><span>Delivery</span><span>Cinch</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Access.</h2><p>The left ventricle is reached through the aortic valve with the AccuCinch Guide catheter, and a guide wire is placed within it, behind the chordae, using the AccuCinch NavCath.</p></article>'+
     '<article class="step"><h2>Delivery.</h2><p>The TracCath is advanced over the wire as a template. A series of anchors, each separated by a spacer to distribute force, is delivered over a cable into the LV wall.</p></article>'+
     '<article class="step"><h2>Cinch.</h2><p>The AccuCinch Implant is then cinched and secured with a nitinol lock, reducing the size of the left ventricle.</p></article>'+
     '<article class="step"><h2>Restore.</h2><p>The goal: a smaller ventricle with less wall stress, support for its wall, and a process of reverse remodeling that improves how the heart pumps.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The AccuCinch System, <em>a different kind of therapy.</em></h2></div><p data-r>A fundamentally different, device-based therapy designed to improve the structure and function of the heart in patients with heart failure with reduced ejection fraction (HFrEF). Investigational device, limited by United States law to investigational use.</p></div>'+
   rows(GOALS)+
  '</div></section>'+

  '<section class="sec dark" id="clinical" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical</span><h2 class="d2 split">Building the evidence, <em>one heart at a time.</em></h2></div><p data-r>Early clinical data has shown the potential to improve quality of life and functional capacity, and to start reverse remodeling. The randomized CORCINCH-HF pivotal trial is now evaluating the benefits for heart failure patients.</p></div>'+
   rows(PROG,'pgr')+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades of experience, <em>one team.</em></h2></div><p data-r>At Ancora Heart, we are building on decades of medical device experience, from Perclose and Guidant to Medtronic and Johnson &amp; Johnson, to help people with heart failure live more comfortably.</p></div>'+
   '<section class="mh">'+mast("Leadership",LEAD)+mast("Board of directors",BOARD)+'</section>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From first enrollment <em>to two-year results.</em></h2></div><p data-r>The pivotal trial passing its first enrollment milestone, sustained two-year results in Structural Heart, and the financing behind CORCINCH-HF.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, patients and partners</span>'+
   '<h2 class="big split">Let’s change the course <em>of heart failure.</em></h2>'+
   '<p class="sub" data-r>Write to us about the AccuCinch System, the CORCINCH-HF study or becoming a study site.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Ancora Heart '+ARR+'</a><a class="btn" href="#/clinical">See the clinical studies</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>4001 Burton Drive<br>Santa Clara, CA 95054</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r>'+TEL+'</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>4001 Burton Drive<br>Santa Clara, CA 95054</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/clinical">Clinical</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>'+TEL+'</div>'+
   '<div class="c"><span class="lab">Caution</span>Investigational device. Limited by<br>United States law to investigational use.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:500;font-size:74px;letter-spacing:.02em"><tspan fill="#f2f6f8">ANCORA</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ancora Heart, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"technology",clinical:"clinical",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ancora Heart — the AccuCinch Ventricular Restoration System for heart failure",x:"Home"};
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
