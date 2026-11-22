/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Multiline braille","Several lines of braille keep the layout, spacing, indentation and headings that give written text its meaning, and open the door to music notation, mathematics and spreadsheets.",'<g class="f"><circle cx="12" cy="12" r="2.6"/><circle cx="12" cy="20" r="2.6"/><circle cx="20" cy="12" r="2.6"/><circle cx="32" cy="12" r="2.6"/><circle cx="40" cy="20" r="2.6"/><circle cx="12" cy="36" r="2.6"/><circle cx="20" cy="44" r="2.6"/><circle cx="32" cy="36" r="2.6"/><circle cx="32" cy="44" r="2.6"/><circle cx="40" cy="36" r="2.6"/></g><path d="M4 28H52"/>'],
  ["Tactile graphics","Bar charts, plots, graphs and diagrams, raised in real time. With touch sensing, a blind user can create, edit and interact with spatial content, not just read it.",'<path d="M6 50H50M6 50V6"/><path class="a" d="M10 42L20 30L30 36L46 14"/><g class="f"><circle cx="20" cy="30" r="2.4"/><circle cx="30" cy="36" r="2.4"/><circle cx="46" cy="14" r="2.4"/></g>'],
  ["Maps and media","Tactile maps of the surroundings on demand, and websites whose spatial layout survives the trip to the fingertips.",'<path d="M6 12L20 6L36 12L50 6V44L36 50L20 44L6 50Z"/><path d="M20 6V44M36 12V50"/><path class="a" d="M12 38C18 28 26 34 30 24S42 18 44 14"/><circle class="f" cx="44" cy="14" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function spec(){return '<div class="ev"><span class="lab kick" data-r>Codex at a glance</span><div><dl>'+SPEC.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From the Codex specifications at newhaptics.com/codex. Codex is offered at $9,995 plus shipping and taxes.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Tactile displays<span class="nomob"> · Multiline braille</span> · Ann Arbor, MI</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The screen,</span><span class="l"><em>by touch.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>NewHaptics builds refreshable braille and tactile graphics displays, so people who are blind can read, explore and work with digital information through their fingertips. Codex puts four lines of braille under your hands today.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/codex">Meet Codex '+ARR+'</a><a class="btn" href="#/technology">How it works</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Blind students and professionals still rely on embossed paper, at $5 to $10 a page, or a single line of braille. NewHaptics is building the large-area tactile screen that gives them <em>true access to digital information.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">128</span><p class="k">Braille characters on Codex at once: four lines of 32</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2018</span><p class="k">Spun off from the University of Michigan’s “Holy Braille Project”</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$4M+</span><p class="k">In NIH awards from the National Eye Institute since 2019</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A page of braille, <em>moved by air.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fabricate</span><span>Drive</span><span>Render</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Made like chips, not parts.</h2><p>Tactile display components are batch manufactured in a process similar to how computer chips are made: thousands of tiny tactile dots are fabricated together in a single component. A small set of components covers a large-area screen.</p></article>'+
     '<article class="step"><h2>A few valves, thousands of pins.</h2><p>Air drives the braille pins. Microfluidic chips process and store pneumatic signals from a small number of electronic valves and route them, through a layered board like a circuit board, to a large number of tactile dots.</p></article>'+
     '<article class="step"><h2>Braille and graphics, in real time.</h2><p>Like pixels on a screen, the dots rise and fall to render lines of braille and tactile graphics. Because the pins run on air pressure, they refresh right under your fingers.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What a tactile screen opens</span><h2 class="d2 split">More than a line <em>of text.</em></h2></div><p data-r>Single-line braille displays and audio tools give only a narrow window onto digital content. A large-area tactile display carries the formats blind readers already depend on in hardcopy, on demand, in the classroom, at work and at home.</p></div>'+
   caps()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Scales up</span><p data-r>Unlike the technology in today’s braille displays, the approach scales to thousands of small, tightly packed dots in a compact, low-profile device.</p></div>'+
    '<div><span class="lab kick" data-r>Costs less</span><p data-r>Driving pins with air and building them in batches tackles the size and cost hurdles that have kept multiline braille out of reach.</p></div>'+
    '<div><span class="lab kick" data-r>Built with users</span><p data-r>Blind co-designers and user studies shape the interaction design, alongside support from screen-reader developers.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="codex" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Codex and what comes next</span><h2 class="d2 split">Four lines today, <em>a full page next.</em></h2></div><p data-r>Codex is designed on one idea: computers are more intuitive with multiple lines of braille. Behind it, NewHaptics is developing larger displays for braille, graphics and touch, funded by the National Eye Institute and the National Science Foundation.</p></div>'+
   pipeRows(PIPE)+
   spec()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Haptics research, <em>lived experience.</em></h2></div><p data-r>NewHaptics grew out of the Holy Braille Project at the University of Michigan, funded by the National Science Foundation, and spun off in 2018. Its team joins haptics engineering, microfluidics and assistive technology with blind users’ own experience of braille.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>The Holy Braille Project at the University of Michigan, researching technology for a full-page tactile display.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH and NSF SBIR awards, state grants, and venture funding from the Accelerate Blue Fund in 2023.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>The University of Michigan, and the University of Illinois Urbana-Champaign on audio-tactile data tools.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, prototypes <em>and progress.</em></h2></div><p data-r>From the first multiline prototypes to a product on the market, NewHaptics’ progress is on the record of the National Institutes of Health, the National Science Foundation and the assistive technology community.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Readers, educators, partners and investors</span>'+
   '<h2 class="big split">Get in touch <em>with NewHaptics.</em></h2>'+
   '<p class="sub" data-r>Questions about Codex, the full-page display or working together? NewHaptics would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email NewHaptics '+ARR+'</a><a class="btn" href="#/codex">See Codex</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>NewHaptics Corp.<br>2890 Carpenter Road<br>Ann Arbor, MI 48108</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Follow</span><p data-r><a class="ul" href="https://www.linkedin.com/company/newhaptics/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2890 Carpenter Road<br>Ann Arbor, MI 48108</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/codex">Codex</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Displays</span>Multiline braille<br>Tactile graphics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 70" aria-hidden="true"><text x="280" y="54" text-anchor="middle" style="font-family:\'Comfortaa\',\'Figtree\',Arial,sans-serif;font-weight:600;font-size:76px;letter-spacing:0">newhaptics</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 NewHaptics Corp.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",codex:"codex",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"NewHaptics — Multiline braille and tactile graphics displays, Ann Arbor, MI",x:"Home"};
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
