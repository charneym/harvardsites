/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function bens(){var B=[
  ["Virtual visits with a human feel","Families, friends and therapists appear on the robot’s screen and can steer it to face the resident, who never has to learn or operate any technology."],
  ["Telehealth at the bedside","Providers and therapists see residents in their rooms. For nursing homes telehealth through the robot is billable, which can cover the cost of every other use."],
  ["Group activities, even from bed","Bed-ridden residents join the community’s group activities, and families run Vigorous Mind games, albums, music and videos with them remotely."],
  ["Less work, lower infection risk","No tablets to set up and no staff scheduled into residents’ rooms; the robot also delivers newspapers, mail and packages of up to 6 lbs."]];
  return '<ol class="bens">'+B.map(function(b,i){return '<li><span class="lab n" data-r>0'+(i+1)+'</span><div><h3 data-r>'+esc(b[0])+'</h3><p data-r>'+esc(b[1])+'</p></div></li>'}).join("")+'</ol>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The science</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd><span class="ci" data-r>'+esc(e[2])+'</span></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>As cited by Vigorous Mind. The platform brings cognitive training, physical exercise, stress reduction and socialising together, to make the multidomain approach to brain health part of daily life.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Autonomous robots<span class="nomob"> · AI</span> · Senior care · Natick, MA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Robots that bring</span><span class="l">care to the</span><span class="l"><em>bedside.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The Vigorous Mind Robot drives itself to a resident’s room for a family visit, a telehealth call or a game, then home to be disinfected. Backed by five research awards from the National Institute on Aging, Vigorous Mind is taking it into falls detection and delirium prevention.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/visit">See how it works '+ARR+'</a><a class="btn" href="#/programmes">Our research</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Social isolation harms older adults as much as smoking, obesity or high blood pressure, and care staff are stretched thin. Vigorous Mind builds robots and activities that keep people <em>connected, engaged and well.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">SBIR awards from the National Institute on Aging since 2017, for loneliness, exercise, falls and delirium</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.9M</span><p class="k">In NIH research funding, including $499,981 in 2025 for robot-delivered delirium prevention</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6 min</span><p class="k">To disinfect the robot with UV light between visits, with no staff involved at any stage</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a visit works</span><h2 class="d3">The robot goes <em>to them.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Schedule</span><span>Visit</span><span>Return</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A family member books a visit.</h2><p>A visitor (family, a friend or a therapist) schedules time with a resident on a website and receives a Zoom link. Nobody on staff has to set up a tablet.</p></article>'+
     '<article class="step"><h2>The robot drives itself to the room.</h2><p>At the set time the robot is dispatched to the resident’s room. The visitor appears on its screen, steers it into view, and can play games, share albums or music together.</p></article>'+
     '<article class="step"><h2>Back to the dock, disinfected.</h2><p>When the visit ends the robot navigates back to its station, where the cabinet checks that nothing live is inside, closes and disinfects it with UV light in six minutes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="robot" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The Vigorous Mind Robot</span><h2 class="d2 split">Built on temi, <em>made for care.</em></h2></div><p data-r>temi is an intelligent mobile robot that uses AI, sensors and cameras to find its way around a nursing home or senior living community. Vigorous Mind adds what those facilities need: scheduled virtual visits, automatic dispatching and its own activities.</p></div>'+
   '<div class="rbt">'+
    '<figure class="rfig" data-r><img src="visit.webp" alt="An older woman in a wheelchair talks with her daughter on the screen of the Vigorous Mind Robot" width="796" height="601" loading="lazy" decoding="async"><figcaption class="lab">A virtual visit. Photo: Vigorous Mind</figcaption></figure>'+
    bens()+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="plt">'+
    '<figure class="pfig" data-r><img src="group.webp" alt="An activity director leads a Vigorous Mind group session for residents in a senior living lounge" width="1400" height="1054" loading="lazy" decoding="async"><figcaption class="lab">A group session in senior living. Photo: Vigorous Mind</figcaption></figure>'+
    '<div class="pltx"><span class="lab kick" data-r>The activities platform</span><h2 class="d2 split">Games, memories <em>and each other.</em></h2>'+
     '<p data-r>A large selection of group activities adapted to the interests and abilities of independent living, assisted living and memory care residents, and of senior centres; and at home, science-based brain exercises whose challenge adapts to each user.</p>'+
     '<ul class="tl"><li data-r>Community book that matches residents of similar background and interests</li><li data-r>Monthly, weekly and daily calendars that build their own digital signage</li><li data-r>Attendance and engagement records for memory care, with reporting for compliance and families</li></ul>'+
     '<blockquote class="qt" data-r><p>“Utilizing the program with my residents and watching them become competitive, more social, and seeing their self-esteem increase, is truly priceless!”</p><cite class="lab">Gina Saunders · Maplewood Senior Living, Danbury, CT</cite></blockquote>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">From loneliness <em>to delirium.</em></h2></div><p data-r>Five Small Business Innovation Research awards from the National Institute on Aging, each taking the platform and the robot a step further into care for people living with dementia.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Software, medicine <em>and ageing.</em></h2></div><p data-r>Vigorous Mind is led by healthcare technology founders, a neuropsychologist and a radiologist, and advised by leading researchers in Alzheimer’s disease and cognitive aging and by leaders in geriatric care.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>Five SBIR awards from the National Institute on Aging, part of the National Institutes of Health.</p></div>'+
    '<div><span class="lab kick" data-r>Research partners</span><p data-r>The Consortium on Technology for Proactive Care at Northeastern University.</p></div>'+
    '<div><span class="lab kick" data-r>Where it works</span><p data-r>Nursing homes, independent, assisted living and memory care, senior centres, and older adults at home.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and studies.</em></h2></div><p data-r>The latest research awards from the National Institutes of Health.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Demos and partnerships</span>'+
   '<h2 class="big split">See the robot <em>in your community.</em></h2>'+
   '<p class="sub" data-r>Nursing homes, senior living, hospitals and research partners: ask Vigorous Mind for a demo of the robot and the activities platform.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'?subject=Demo">Request a demo '+ARR+'</a><a class="btn" href="#/visit">How a visit works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Vigorous Mind, Inc.<br>209 West Central Street, Suite 104<br>Natick, MA 01760</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Toll free</span><p data-r><a class="ul" href="tel:+18887696463">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>209 West Central Street<br>Natick, MA 01760</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+18887696463">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/robot">Robot</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Funded by</span>National Institute on Aging<br>SBIR, 2017–2025</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 70" aria-hidden="true"><text x="280" y="60" text-anchor="middle" style="font-family:\'Big Shoulders Display\',\'Arial Narrow\',sans-serif;font-weight:800;font-size:72px;letter-spacing:.01em">Vigorous Mind</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vigorous Mind, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",visit:"story",robot:"robot",platform:"platform",research:"research",programmes:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vigorous Mind — Autonomous robots and AI for health and senior care, Natick, MA",x:"Home"};
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
