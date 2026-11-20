/* ================= VIEWS (home only; nav items open build-out pages via _kit/lib/buildout.js, in-page links scroll) ================= */
function platRows(){return '<div class="plat">'+PLAT.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><h3 data-r>'+esc(a[1])+'</h3><p data-r>'+esc(a[2])+'</p></div>'}).join("")+'</div>'}
function progRows(){return '<ul class="pfr path">'+PROG.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><span class="lab yr">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Digital health studio<span class="nomob"> · Lexington, Kentucky</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Games for</span><span class="l">flourishing,</span><span class="l"><em>together.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>RalphVR makes VRTogether: social virtual reality that brings older adults and the people who care for them together through music, play and shared worlds, built alongside NIH-funded research.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/contact">Contact</a></div></div>'+
   '<span class="lab cap" data-r>A VRTogether session with older adults</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">More than 15 million older adults in the United States live at home with mild cognitive impairment or dementia, and more than 8 million of them are cared for by family. <em>We make games they can share.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15M+</span><span class="k">Older adults in the US living at home with mild cognitive impairment or dementia</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.05M</span><span class="k">NIH National Institute on Aging SBIR Phase II award for DUET, 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2015</span><span class="k">Year founder Richard Hoagland’s Daydream Blue won gold at the Oculus VR Jam</span></div>'+
   '</div>'+
   platRows()+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Research</span><h2 class="d3">Two people, one world, <em>one song.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pair</span><span>World</span><span>Song</span><span>Study</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Two headsets.</h2><p>DUET is made for pairs: an older adult with memory loss and the family member who cares for them, each in a low-cost, commercially available headset.</p></article>'+
     '<article class="step"><h2>One shared world.</h2><p>VRTogether is networked, so both people stand in the same virtual space. In NSF-funded tests it felt much like being in the same room.</p></article>'+
     '<article class="step"><h2>Music and song.</h2><p>Sessions draw on music therapy: singing, familiar songs, light rhythmic movement and play, for cognitive stimulation, connection and shared achievement.</p></article>'+
     '<article class="step"><h2>Measured at home.</h2><p>A six-month study with 40 pairs tracks cognition on the NIH Toolbox Cognitive Battery, with depression, sleep, caregiver burden and neuropsychiatric symptoms.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="programmes" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">Clinical research, <em>one study at a time.</em></h2></div><p data-r>Since 2021 RalphVR has won federal SBIR awards from the NSF, the National Institute on Aging and the National Center for Complementary and Integrative Health.</p></div>'+
   progRows()+
   '<p class="ack" data-r>Research reported here is supported by the National Institute on Aging (award 2R44AG079739) and the National Center for Complementary and Integrative Health (award 1R43AT013038) of the National Institutes of Health, and by the National Science Foundation (award 2125984). DUET and Virtual PARTNER are in development.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Game makers, <em>in Lexington.</em></h2></div><p data-r>VRTogether is a team of developers with decades of experience in VR and game design, working with researchers, clinicians and care communities.</p></div>'+
   '<div class="fdr"><span class="lab fl" data-r>Founder</span><div class="fdr-b"><h3 class="fn" data-r>Richard Hoagland</h3><p class="fr" data-r>Founder &amp; Chief Executive Officer</p><p class="fs" data-r>Award-winning virtual reality artist who founded VRTogether in 2015, and principal investigator on the company’s NIH and NSF awards.</p></div></div>'+
   '<div class="fdr col"><span class="lab fl" data-r>Collaborators</span><p class="inv" data-r><span>University of Kentucky</span><b>·</b><span>Colorado State University</span><b>·</b><span>Masonic Homes, Louisville</span><b>·</b><span>Arc of Acadiana</span><b>·</b><span>Azalee Group, Tokyo</span></p></div>'+
   '<div class="fdr col"><span class="lab fl" data-r>Hiring</span><div class="fdr-b"><p class="fs hire" data-r>Two roles on DUET: a Senior VR Developer and a Human Factors Designer for its packaging, based in the US.</p><p data-r><a class="ul lk2" href="'+CAREERS+'" target="_blank" rel="noopener">Careers at VRTogether '+ARR+'</a></p></div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the studio <em>and the lab.</em></h2></div><p data-r>Awards, partnerships and writing from RalphVR and VRTogether.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, care partners and investors</span>'+
   '<h2 class="big split">Let’s bring people <em>together.</em></h2>'+
   '<p class="sub" data-r>For research collaboration, pilots in senior living or healthcare, custom VR applications or investment, write to the RalphVR team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email RalphVR '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r><span class="bl">RalphVR, Inc.</span><span class="bl">348 East Main Street</span><span class="bl">Lexington, KY 40507</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Games</span><p data-r><a class="ul" href="'+VRT+'" target="_blank" rel="noopener">vrtogether.us</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>RalphVR, Inc.<br>348 East Main Street<br>Lexington, KY 40507</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+VRT+'" target="_blank" rel="noopener">vrtogether.us</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Notice</span>DUET and Virtual PARTNER are research programmes in development. Supported by the NIH and the NSF.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="64" text-anchor="middle" style="font-family:\'Barlow Condensed\',\'Arial Narrow\',sans-serif;font-weight:600;font-size:82px;letter-spacing:.06em">RALPHVR</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RalphVR, Inc. · VRTogether</span><span class="lab">Concept site</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",how:"story",research:"story",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RalphVR — VRTogether, social virtual reality games for flourishing",x:"Home"};
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
