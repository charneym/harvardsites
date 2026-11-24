/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function gameRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk av">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["7 Gen Blocks","A game builder that guides teachers, parents and organizations through making a game to teach what they know, in about an hour, built on a decade of research into what keeps students playing.",'<path d="M8 30h16v16H8zM28 30h16v16H28zM18 12h16v16H18z"/><path class="a" d="M18 12h16v16H18z"/>'],
  ["Games made for you","We turn content in any format, from PDFs and worksheets to what is only in your head, into playable games that teach, test and track. Most cost $10,000–$30,000.",'<path d="M10 44V10"/><path class="a" d="M10 12h28l-6 8 6 8H10"/><path d="M4 44h20"/>'],
  ["Digital problem-solving support","A mobile app that supports problem-solving therapy, breaking major treatment and social needs into subtasks with information, prompts and in-app payment. Its efficacy is the subject of a registered study.",'<path d="M16 6h24v44H16z"/><path class="a" d="M22 18l3 3 6-6M22 30l3 3 6-6"/><path d="M34 18h2M34 30h2M24 43h8"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The evidence</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl></div></div>'+
  '<div class="ev pubs"><span class="lab kick" data-r>Published</span><div><dl>'+PUBS.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Results as reported by 7 Generation Games from three cycles of efficacy testing. The digital problem-solving app study is registered as <a class="ul" href="https://clinicaltrials.gov/study/NCT06346431" target="_blank" rel="noopener">NCT06346431</a>.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Educational games<span class="nomob"> · Minneapolis, Minnesota</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Games that</span><span class="l">make you</span><span class="l"><em>smarter.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>7 Generation Games makes immersive adventure games that teach math through Native American and Latino history and culture, in English and Spanish. With 7 Gen Blocks, anyone can make a game to teach what they know.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How a game teaches '+ARR+'</a><a class="btn" href="#/games">Our games</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why games</span>'+
   '<h2 class="txt" id="mani">No one learns from software they don’t use. <em>So we start with what players should learn, then add ten years of data on what keeps students playing.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30%</span><p class="k">Gain in math scores for students who played our games, in 10 weeks</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">51</span><p class="k">Games we’ve made, and counting</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">200K+</span><p class="k">Users whose data shows us why students keep playing</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How a game teaches</span><h2 class="d3">Math becomes a matter of <em>life or (virtual) death.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Learn</span><span>Play</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start with what players should learn.</h2><p>Every game begins with the standard it teaches: multiplication and division in grades 3–5, then fractions, ratios and statistics. Our games are made for players aged 8 to 14.</p></article>'+
     '<article class="step"><h2>Make the math a quest.</h2><p>The lesson becomes an adventure in real history and culture: gather the right number of herbs to save your village, bring enough arrows to hunt buffalo, canoe through the rapids. Students keep playing, so they keep learning.</p></article>'+
     '<article class="step"><h2>See what every student learns.</h2><p>Each student’s progress is tracked and charted, so teachers see which concepts are landing. Classes playing about 30 minutes, 2–3 times a week, gained 30% on tests of those standards in 10 weeks.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="games" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our games</span><h2 class="d2 split">Adventure games <em>kids ask to play.</em></h2></div><p data-r>Immersive 3-D worlds and quests that teach multiplication, division, fractions and statistics, set in historically accurate Native American and Latino history and culture. Played in schools and after-school programs across the country.</p></div>'+
   gameRows(GAMES)+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">Our experience, <em>baked into your game.</em></h2></div><p data-r>When a good educational game costs $250,000 to make, whole communities and subjects are left out. We build the tools that make learning games affordable, for under-served communities, overlooked markets and very specific content.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">Educational games <em>that work.</em></h2></div><p data-r>We’re not just about making educational video games. We test them: three cycles of efficacy testing so far, with results presented and published along the way.</p></div>'+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A family company <em>changing how math is learned.</em></h2></div><p data-r>7 Generation Games was founded in the hope of a world where parents never have to argue with their children about math homework again.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the <em>7 Gen blog.</em></h2></div><p data-r>Game design, classroom resources and Indigenous history, written by the team.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Let’s make <em>a game.</em></h2>'+
   '<p class="sub" data-r>For schools, licenses, custom games or 7 Gen Blocks, get in touch with the 7 Generation Games team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/games">See our games</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Write to</span><p data-r>7 Generation Games<br>2708 Dupont Ave S<br>Minneapolis, MN 55408</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@7generationgames.com</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+13108049553">(310) 804-9553</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Minneapolis, Minnesota</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@7generationgames.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/games">Games</a><br><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">We make</span>Games that make you smarter, and the tools to make them</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Fraunces\',serif;font-weight:500;font-size:58px">7 Generation Games</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 7 Generation Games</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",games:"games",platform:"platform",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"7 Generation Games — games that make you smarter",x:"Home"};
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
