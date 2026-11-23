/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){return '<div class="tmg"><ul class="tmg-list">'+TEAM.map(function(p){
    return '<li class="tmg-p"><figure><div class="tmg-ph"><img src="'+p.img+'" alt="'+esc(p.name)+'" width="560" height="560" loading="lazy" decoding="async" onerror="this.style.visibility=\'hidden\'"></div><figcaption><span class="tmg-n" data-r>'+esc(p.name)+'</span><span class="tmg-r" data-r>'+esc(p.title)+'</span></figcaption></figure></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Medication reminders","Smart reminders make sure medication is taken on time, with confirmation by voice.",'<rect x="10" y="20" width="36" height="16" rx="0"/><path d="M28 20v16"/><path class="a" d="M14 46l5 5 10-10"/>'],
  ["Regular health screening","Routine digital check-ins look for early signs of a decline in health.",'<path d="M6 30h10l5-12 7 24 6-16 4 4h12"/><circle class="f" cx="50" cy="30" r="2.4"/>'],
  ["Alerts","Instant alerts go to caregivers and family in case of concern.",'<path d="M16 38V26a12 12 0 0 1 24 0v12l4 5H12z"/><path class="a" d="M24 48a4 4 0 0 0 8 0"/>'],
  ["Daily care plans","Personalised care routines, adapted to each person’s needs.",'<path d="M12 10h32v38H12z"/><path d="M18 20h14M18 29h20M18 38h12"/><path class="a" d="M36 18l2 2 4-4"/>'],
  ["AI companion","Conversational AI that supports engagement, reminders and companionship.",'<path d="M8 14h32v20H22l-8 7v-7H8z"/><path class="a" d="M26 40v6h10l8 6v-6h4V26h-4"/>'],
  ["Voice biomarker analysis","Detects changes in speech patterns to identify early health risks.",'<path d="M8 28h4M16 20v16M22 14v28M28 22v12M34 10v36M40 18v20M46 24v8"/><path class="a" d="M8 44c10-6 18 2 26-4s10-2 14-4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function prog(){var S=[
  ["Origin","Built at the ADAPT Centre, Trinity College Dublin","Started in 2024 as a research project at ADAPT, the Research Ireland centre for AI-driven digital content technology, with Prof. Vinny Wade, chair of AI at Trinity, as research lead."],
  ["Funding","Commercialisation funding","More than €500,000 from Enterprise Ireland’s Commercialisation Fund, with support from Trinity Innovation KnEx, to build the product and the team."],
  ["Clinical","Clinical trials in Ohio","Clinical trials set to begin in Ohio, in the United States, as Amethyst Care looks to expand there."],
  ["Growth","Preparing a €2.5M raise","A team of ten in September 2025, planned to grow to seventeen in 2026, with investors sought through the EIT Health Innovators Community."]];
  return '<ul class="pfr spec">'+S.map(function(s){return '<li><span class="lab tg" data-r>'+esc(s[0])+'</span><h3 data-r>'+esc(s[1])+'</h3><p data-r>'+esc(s[2])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>AI voice companion<span class="nomob"> for care at home</span> · Dublin, Ireland</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Care that</span><span class="l">checks in,</span><span class="l"><em>by voice.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Amethyst Care is the AI voice technology companion that helps care for older people at home, keeping them independent for longer: daily check-ins, medication reminders and two-way conversation, with alerts and long-term insights for families and clinicians.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/contact">Book a demo</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Many older adults want to stay at home, but struggle with medication, loneliness and a lack of monitoring, and full-time care can cost thousands a month. Amethyst Care is a digital companion and safety net that <em>keeps people independent for longer.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">€500k+</span><p class="k">From Enterprise Ireland’s Commercialisation Fund to build Amethyst Care</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">€6,000</span><p class="k">A month: what a nursing home place can cost, the move Amethyst Care helps delay</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Ohio</span><p class="k">Where clinical trials of the companion are set to begin, in the United States</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A day with <em>Amethyst Care.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Check in</span><span>Remind</span><span>Listen</span><span>Alert</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A check-in, every day.</h2><p>Amethyst Care checks in to see how they are feeling, and they answer by simply talking back. A voice-first interface: no screens, no complexity.</p></article>'+
     '<article class="step"><h2>Medication, on time.</h2><p>Smart reminders prompt each dose, and the reply confirms it by voice. Personalised daily care plans adapt the routine to each person.</p></article>'+
     '<article class="step"><h2>Listening for change.</h2><p>Voice biomarker analysis looks for changes in speech patterns, and passive tracking of wellbeing builds a long-term picture, to catch early signs of decline.</p></article>'+
     '<article class="step"><h2>Family and clinicians, in the loop.</h2><p>In case of concern, alerts reach family and caregivers in real time, and clinicians see long-term insights that help them step in before a hospital admission.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="solution" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Solution</span><h2 class="d2 split">Safety, independence <em>and simplicity.</em></h2></div><p data-r>A voice-based AI companion that acts as a smart assistant, a health monitor and support for caregivers, so people can live independently at home for longer, without needing to move into full-time care.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="partners" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Progress and partners</span><h2 class="d2 split">From Trinity research <em>to clinical trials.</em></h2></div><p data-r>Amethyst Care grew out of Rebecca McManus’s experience caring for both of her parents, and was developed with ADAPT and Enterprise Ireland at Trinity College Dublin.</p></div>'+
   prog()+
   '<div class="bk"><span class="lab kick" data-r>Partners and supporters</span><p class="cr" data-r><span>ADAPT</span><span>Trinity College Dublin</span><span>Enterprise Ireland</span><span>New Frontiers</span><span>EIT Health</span><span>AWS</span><span>Ohio Living</span><span>Western Reserve Area Agency on Aging</span><span>Patient Innovation</span><span>RelateCare</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Care, AI <em>and engineering.</em></h2></div><p data-r>Building tools to support people with cognitive and motor impairments: a founder who cared for her own parents, with leads in AI, technology, product and finance, and advisors in AI research and healthcare systems.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Amethyst Care <em>in the news.</em></h2></div><p data-r>Interviews and coverage, from ADAPT to Silicon Republic.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Families, care providers and partners</span>'+
   '<h2 class="big split">Book a <em>demo.</em></h2>'+
   '<p class="sub" data-r>Want to hear more about Amethyst Care, keep up to date with your loved ones, or get involved? Get in touch for a demo.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+DEMO+'" target="_blank" rel="noopener">Book a demo '+ARR+'</a><a class="btn" href="#/how">How it works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based at</span><p data-r>ADAPT Centre, O’Reilly Institute<br>Trinity College Dublin, Dublin 2</p></div>'+
    '<div><span class="lab" data-r>Demo and enquiries</span><p data-r><a class="ul" href="'+DEMO+'" target="_blank" rel="noopener">amethystcare.ie</a></p></div>'+
    '<div><span class="lab" data-r>Join the team</span><p data-r>Want to help people with cognitive and motor impairment? Drop us a line.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based at</span>ADAPT Centre, Trinity College Dublin, Dublin 2, Ireland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+DEMO+'" target="_blank" rel="noopener">Book a demo</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/solution">Solution</a><br><a class="ul" href="#/partners">Partners</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Amethyst Care</span>The AI voice technology companion for care at home.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 124" aria-hidden="true"><text x="450" y="100" text-anchor="middle" style="font-family:\'Figtree\',Arial,sans-serif;font-weight:500;font-size:122px;letter-spacing:-.02em">Amethyst Care</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Amethyst Care</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",solution:"solution",partners:"partners",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Amethyst Care — the AI voice companion for care at home",x:"Home"};
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
