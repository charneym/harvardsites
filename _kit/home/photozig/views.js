/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[0])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function pubs(){return '<div class="pz-pubs"><p class="mh-label">Selected publications</p><ul>'+PUBS.map(function(p){return '<li><span class="lab yr">'+esc(p[0])+'</span><span class="ti">'+esc(p[1])+'</span><span class="lab jn">'+esc(p[2])+'</span></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Healthcare apps","Novel applications built on digital technology, video, photography and software, starting with self-paced programs that teach dementia caregivers skills they can use the same day.",'<rect x="17" y="6" width="22" height="44"/><path class="a" d="M23 42h10"/><path d="M22 16h12M22 22h12M22 28h8"/>'],
  ["Mobile software","Easy access to content, an experience designed for busy and stressed users, and innovative uses of digital media, delivered through the Apple App Store and Google Play.",'<circle cx="28" cy="28" r="20"/><path class="a" d="M28 8v40"/><path d="M8 28h40M13 17c9 5 21 5 30 0M13 39c9-5 21-5 30 0"/>'],
  ["Media production","Video training programs in several languages, healthcare videos for clinicians, such as CBT and ACT, and the telenovela and reminiscence films at the heart of Photozig’s research.",'<rect x="6" y="14" width="34" height="28"/><path class="a" d="M40 24l10-6v20l-10-6"/><path d="M17 22l10 6-10 6z"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Dementia caregiving<span class="nomob"> · Digital health</span> · Silicon Valley</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Support for</span><span class="l">the people who</span><span class="l"><em>give the care.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Photozig turns proven caregiving programs into mobile apps, video and AI that help family caregivers of people with Alzheimer’s disease and related dementia cope, understand difficult behaviors and reduce stress.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/programs">Our programs</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">More than 11 million Americans care for a family member with Alzheimer’s disease, often for years. Help exists, but it is scattered and hard to find. Photozig puts the right support <em>in their hands.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">11M+</span><span class="k">Family caregivers of people with Alzheimer’s disease in the US, with high rates of stress and depressive symptoms</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">10</span><span class="k">Research programs funded through NIH SBIR awards since 2004, from LifeZig to CaringGPT</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2002</span><span class="k">The year Photozig was founded, in the heart of Silicon Valley, near leading research and educational campuses</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work</span><h2 class="d3">From a proven program <em>to their phone.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Evidence</span><span>App</span><span>Trial</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start from what works.</h2><p>Each program begins with interventions already tested in clinical trials, such as Coping With Caregiving and Behavioral Activation, developed with partners including Stanford University.</p></article>'+
     '<article class="step"><h2>Translate it into an app.</h2><p>The curriculum becomes a self-paced mobile program: coping skills, practice responding to difficult behaviors and calming exercises, there whenever the caregiver needs it.</p></article>'+
     '<article class="step"><h2>Test it, then reach families.</h2><p>In an NIH-funded Phase II, a randomized clinical trial evaluates the program. The finished apps reach families through the Apple App Store and Google Play, at low cost.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we do</span><h2 class="d2 split">Technology that <em>improves quality of life.</em></h2></div><p data-r>Photozig creates, develops and researches new applications with a customer-centric approach: easy-to-use tools, practical solutions and helpful products.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Help for every <em>stage of caring.</em></h2></div><p data-r>From stress management and coping skills to culturally tailored programs in Spanish and Chinese, and now a Generative AI assistant built on content from proven interventions.</p></div>'+
   pipeRows(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="research" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research and team</span><h2 class="d2 split">Built with <em>centers of excellence.</em></h2></div><p data-r>Photozig works with universities and research groups across California and beyond, and publishes its results in peer-reviewed journals.</p></div>'+
   team()+
   pubs()+
   '<div class="bk"><span class="lab kick" data-r>Collaborators</span><p class="cr" data-r><span>Stanford University</span><i>·</i><span>UC Davis</span><i>·</i><span>UCSF</span><i>·</i><span>UCLA</span><i>·</i><span>University of Illinois at Chicago</span><i>·</i><span>Alzheimer’s Association</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>new programs.</em></h2></div><p data-r>Photozig’s research is funded by the National Institute on Aging.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Research, licensing and media</span>'+
   '<h2 class="big split">Talk to <em>Photozig.</em></h2>'+
   '<p class="sub" data-r>Research collaborations, partnerships for caregiving programs or video production: Photozig would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Photozig '+ARR+'</a><a class="btn" href="#/programs">See the programs</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Photozig, Inc.<br>Campbell, CA 95008</p></div>'+
    '<div><span class="lab" data-r>Mailing address</span><p data-r>NASA Research Park<br>PO Box 128, Moffett Field, CA 94035</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16506947496">+1 650 694 7496</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Campbell, CA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Apps</span><a class="ul" href="https://apps.apple.com/us/app/caring-light-for-caregivers/id1281831712" target="_blank" rel="noopener">Caring Light</a><br><a class="ul" href="https://apps.apple.com/us/app/caring-response-for-caregivers/id1314737683" target="_blank" rel="noopener">Caring Response</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 70" aria-hidden="true"><text x="280" y="54" text-anchor="middle" style="font-family:\'Fraunces\',Georgia,serif;font-style:italic;font-weight:400;font-size:66px;letter-spacing:-.02em">Photozig</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Photozig, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",approach:"story",platform:"platform",programs:"programs",research:"research",team:"research",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Photozig — Digital programs for dementia family caregivers, Campbell, CA",x:"Home"};
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
