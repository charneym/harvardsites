/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk av"><a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a></span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["Health dashboards","Make life easier for behavioral health treatment professionals: risk shown in a clear, user-friendly way, so providers can respond in time.",'<path d="M8 12h40v28H8z"/><path d="M20 48h16M28 40v8"/><path class="a" d="M13 33l9-7 7 4 14-11"/>'],
  ["Predictive models","Machine learning and artificial intelligence algorithms predict when patients are at a higher risk of leaving treatment early or relapsing.",'<path d="M8 46h40M8 46V10"/><path d="M8 20h40" stroke-dasharray="2 3"/><path class="a" d="M10 42c10-1 16-6 22-14s10-12 16-14"/><circle class="a" cx="38" cy="20" r="3"/>'],
  ["Digital motivation","A digital motivation platform for motivation to stay sober from substance use disorders, built on the mind and brain psychology behind them.",'<path d="M6 46L22 16l9 17"/><path d="M24 46L36 22l14 24z"/><path d="M6 46h44"/><path class="a" d="M36 22V8l8 3-8 3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function focus(){var F=["Tech and the human connection","Emotion and stress data analysis","Data viz and wrist wearable devices","Virtual reality"];
  return '<div class="foc"><span class="lab kick" data-r>Focus areas</span><ul class="ind c4">'+F.map(function(f){return '<li>'+f+'</li>'}).join("")+'</ul></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Recognition</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From biomotivate.com and NIH RePORTER. Earlier support: NIH SBIR grant 1R43DA051279 and its 2021 supplement, from the National Institute on Drug Abuse.</p></div></div>'}
function credit(){return '<div class="credit"><span class="lab" data-r>Worked with</span><p data-r>'+PARTNERS.map(function(p){return '<span>'+p+'</span>'}).join(' <i>·</i> ')+'</p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Behavioral health technology<span class="nomob"> · Pittsburgh</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Proactive care</span><span class="l">for <em>addiction</em></span><span class="l"><em>recovery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Biomotivate analyzes behavioral risk trends for proactive addiction treatment, so care teams can see when a patient is at risk of leaving treatment early or relapsing, and act in time.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/programs">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Providers often rely on intuition to tell when someone is about to leave treatment, and that often happens too late. <em>We combine physiological and behavioral data to see the risk sooner.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$613K</span><p class="k">In NIH SBIR funding from the National Institute on Drug Abuse since 2020, across three awards</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">National Institute on Drug Abuse challenges won, in 2019 and 2021</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2025</span><p class="k">The PEACE Platform funded by NIDA, running to July 2027</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">From the wrist <em>to the care team.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sense</span><span>Predict</span><span>Support</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Signals from the wrist.</h2><p>Wrist wearable devices capture physiological data, including signs of emotion and stress, which Biomotivate combines with behavioral data from treatment.</p></article>'+
     '<article class="step"><h2>Risk, seen early.</h2><p>Machine learning and artificial intelligence algorithms predict when a patient is at a higher risk of leaving treatment early or relapsing.</p></article>'+
     '<article class="step"><h2>Support, in time.</h2><p>Health dashboards show the risk in a user-friendly way, so providers can support patients to remain in treatment with timely intervention.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Data that keeps <em>patients in care.</em></h2></div><p data-r>Understanding the mind and brain psychology behind substance use disorders, and turning physiological and behavioral data into insight that treatment professionals can use.</p></div>'+
   caps()+focus()+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Funded by NIDA, <em>built for treatment.</em></h2></div><p data-r>Two NIH Small Business Innovation Research programs from the National Institute on Drug Abuse, both for people in treatment for opioid use disorder.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A Pittsburgh team, <em>with partners.</em></h2></div><p data-r>Led by CEO Jeremy Guttman, with team members from Carnegie Mellon University and Penn State, and partners across Pittsburgh&#8217;s universities and health community.</p></div>'+
   team()+credit()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Support recovery <em>with us.</em></h2>'+
   '<p class="sub" data-r>Help us understand addiction, recovery and treatment. Treatment providers, researchers and partners: we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Biomotivate '+ARR+'</a><a class="btn" href="#/programs">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Biomotivate, LLC<br>213 Smithfield Street<br>Pittsburgh, PA</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@biomotivate.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+14122297607">412-229-7607</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>213 Smithfield Street<br>Pittsburgh, PA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@biomotivate.com</a><br><a class="ul" href="tel:+14122297607">412-229-7607</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Programs</span>PEACE Platform · Project Motivate</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="74" text-anchor="middle" style="font-family:\'Domine\',Georgia,serif;font-weight:700;font-size:96px;letter-spacing:0">Biomotivate</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Biomotivate, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",programs:"programs",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Biomotivate — proactive addiction treatment, powered by data",x:"Home"};
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