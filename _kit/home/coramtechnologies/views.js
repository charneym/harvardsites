/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){var nm=c[5]?'<a class="pfl" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[0])+'</a>':esc(c[0]);
  return '<li><span class="lab tg"><b class="'+(c[2]==="Active"?"on":"")+'">'+esc(c[2])+'</b> · '+esc(c[3])+'</span><h3>'+nm+'</h3><p>'+esc(c[1])+'</p><p class="st">'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function ppl(list,cls){return '<ul class="ppl '+cls+'">'+list.map(function(p){return '<li><figure class="pc"><div class="pf"><img src="'+PH[p.ph]+'" alt="Portrait of '+esc(p.name)+'" decoding="async"></div><figcaption><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></figcaption></figure></li>'}).join("")+'</ul>'}
function nwRows(list){return '<ul class="nwr">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><span class="lab ty">'+esc(n[1])+'</span><h3>'+esc(n[2])+'</h3>'+ARRX+'</a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Medical device development<span class="nomob"> · Pikesville, Maryland</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Committed to people.</span><span class="l">Committed to</span><span class="l"><em>the future.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Coram Technologies develops new medical devices, from a defibrillator that works beside the MRI scanner to new, interactive ways of teaching CPR.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Company &amp; history</span>'+
   '<h2 class="txt" id="mani">Coram is the latest startup formed by Dr. Henry Halperin to commercialize new medical devices, <em>including CPR-related technologies and new, interactive educational approaches.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–12%</span><span class="k">Lower survival for each minute defibrillation is delayed</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">45M+</span><span class="k">MRI scans done each year in the United States</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.05M</span><span class="k">NIH NHLBI STTR Phase II award, August 2025</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Cardiologic Systems</span><p data-r>A previous startup of Dr. Halperin’s: venture funded, acquired by Zoll Medical, and now part of Zoll Temperature Management, which sells CPR devices based on his inventions.</p></div>'+
    '<div><span class="lab kick" data-r>Imricor Medical Systems</span><p data-r>Another of Dr. Halperin’s startups: angel funded at first, now publicly traded, selling interventional MRI products based on some of his inventions.</p></div>'+
    '<div><span class="lab kick" data-r>Licensed to Zoll Medical</span><p data-r>See-Thru CPR® and Real CPR Help®, developed by Dr. Halperin’s team, are sold by Zoll Medical on its defibrillators.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The MRI-conditional defibrillator</span><h2 class="d3">Defibrillation, <em>beside the magnet.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The delay</span><span>The device</span><span>The waveform</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Cardiac arrest in the scanner.</h2><p>A defibrillator cannot go near the magnet, so a patient in arrest is taken out of the scanner, moved onto an MRI-safe stretcher and wheeled to one. Each minute of delay can reduce survival by 10–12%.</p></article>'+
     '<article class="step"><h2>A defibrillator built for the MRI suite.</h2><p>Non-magnetic and MRI-conditional, it stands next to the scanner. The pads go on before the scan, under the surface coils, so a shock can be given without moving the patient.</p></article>'+
     '<article class="step"><h2>A shock without the jump.</h2><p>A low-voltage, ramped kilohertz pulse (rHFAC) first relaxes the skeletal muscles; the standard biphasic pulse then restores the heart rhythm, with far less patient motion.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the bench to <em>the bedside.</em></h2></div><p data-r>Coram’s current programmes are supported by Small Business Technology Transfer (STTR) grants from the National Institutes of Health; earlier work by Dr. Halperin’s team is sold today by Zoll Medical.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicians and <em>scientists.</em></h2></div><p data-r>Dr. Halperin helped secure Phase I and Phase II SBIR grants for both Cardiologic Systems and Imricor Medical Systems in the early stages of both companies.</p></div>'+
   ppl(TEAM,"lead")+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>awards.</em></h2></div><p data-r>Grants to Coram Technologies, each linked to its record on NIH RePORTER.</p></div>'+
   nwRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Have questions about what we do?</span>'+
   '<h2 class="big split">Get in touch <em>today.</em></h2>'+
   '<p class="sub" data-r>Questions about our programmes, our technology or working with us: write to the Coram team and we will be in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Coram '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>Coram Technologies, Inc.<br>Pikesville, Maryland 21208</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Compliance</span><p data-r>Coram’s Financial Conflict of Interest policy is published on <a class="ul" href="'+WEB+'policy/" target="_blank" rel="noopener">coramtechnologies.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>Pikesville, Maryland 21208</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/technology">Technology</a><br><a class="ul" href="#/more/programmes">Programmes</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Committed</span>To people.<br>To the future.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Ubuntu\',Arial,sans-serif;font-weight:700;font-size:64px;letter-spacing:.04em">CORAM TECHNOLOGIES</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Coram Technologies, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={technology:["Technology","technology"],programmes:["Programmes","programmes"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",technology:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Coram Technologies",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Coram Technologies — Medical device development, Pikesville, Maryland",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"",location.hash==="#/"?"#/":"#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
