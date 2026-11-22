/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Discovery","Preclinical","IND-enabling","Phase 1"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   '<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span></div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Partnering':(c[1]==='Lead candidate'?'NIH funded':'Planned'))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["An NAD+ precursor","MP-04 is a proprietary intravenous formulation of NRH (dihydronicotinamide riboside), a recently identified, highly potent precursor of NAD+, the molecule cells need for mitochondrial oxidation and energy.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M28 16v24M16 28h24"/>'],
  ["Liver and kidney together","Alcohol depletes NAD+ in both organs. NRH raises intracellular NAD+ in liver and kidney, with the potential to reverse or prevent progression of hepatorenal syndrome alongside the standard of care.",'<path d="M8 30c0-12 10-18 22-18 8 0 14 4 14 10 0 10-14 16-26 18-6 1-10-3-10-10z"/><path class="a" d="M40 34c4 0 8 3 8 8s-4 8-8 8-6-3-6-8"/>'],
  ["Calming the inflammation","Beyond energy, NRH acts as a highly potent immune modulator that dampens the systemic inflammatory response driving progressive organ failure.",'<path d="M28 8v8M28 40v8M8 28h8M40 28h8M14 14l6 6M36 36l6 6M42 14l-6 6M14 42l6-6"/><circle class="f" cx="28" cy="28" r="5"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The science of NRH</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From MitoPower’s NIH project abstract (5U44AA029833, National Institute on Alcohol Abuse and Alcoholism), drawing on tissue culture and animal studies.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mitochondrial medicine<span class="nomob"> · MP-04</span> · Palo Alto, CA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Power back</span><span class="l">to failing</span><span class="l"><em>organs.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MitoPower develops therapeutics for patients with severe mitochondrial dysfunction. Our lead candidate, MP-04, is a small molecule that enhances mitochondrial function, in development for end-stage liver disease and the kidney failure that can follow it.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Our science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">In severe alcoholic liver disease, the liver and then the kidneys fail as their cells run out of energy. Hepatorenal syndrome has no therapy that addresses that cellular dysfunction. MP-04 is built to <em>restore it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">400K</span><p class="k">Hospitalisations a year in the US from alcoholic liver disease (NIH project abstract)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50%</span><p class="k">Mortality rates in hepatorenal syndrome reach 50%, with many patients needing dialysis or a liver transplant</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6.5M</span><p class="k">NIH SBIR Fast Track award from NIAAA for MP-04, 2021 to 2027</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How MP-04 works</span><h2 class="d3">Refill the cell, <em>restart the power.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Depletion</span><span>Restore</span><span>Recover</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Alcohol drains NAD+.</h2><p>In alcoholic liver disease, NAD+ levels fall in liver and kidney cells. Mitochondrial oxidation stalls, oxidative stress builds, and a systemic inflammatory response pushes the organs toward failure.</p></article>'+
     '<article class="step"><h2>MP-04 restores it.</h2><p>Given intravenously, MP-04 delivers NRH, a highly potent NAD+ precursor that is stable in serum and raises NAD+ inside liver and kidney cells further than nicotinamide riboside.</p></article>'+
     '<article class="step"><h2>The mitochondria recover.</h2><p>With NAD+ restored, mitochondrial oxidation and biogenesis improve, and NRH dampens the inflammation. The aim: reverse or prevent the progression of hepatorenal syndrome.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our science</span><h2 class="d2 split">Energy is the <em>missing therapy.</em></h2></div><p data-r>MitoPower is focused on diseases associated with severe mitochondrial dysfunction. Rather than supporting a failing organ from outside, MP-04 targets the cellular dysfunction itself.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One molecule, <em>two failing organs.</em></h2></div><p data-r>MP-04 is in IND-enabling development under an NIH Fast Track award, with a first-in-human Phase 1 trial of safety and tolerability to follow.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The team behind <em>landmark liver drugs.</em></h2></div><p data-r>MitoPower’s leaders developed some of the best-known therapies in viral hepatitis and liver disease at Gilead Sciences, and now bring that experience to mitochondrial medicine.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Founded</span><p data-r>Established in Palo Alto in 2017 to develop novel therapies for disorders associated with mitochondrial dysfunction.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborations</span><p data-r>Academic collaborations in energy metabolism, liver biology and immune function, and working relationships with leading CROs.</p></div>'+
    '<div><span class="lab kick" data-r>Advisors</span><p data-r>Expertise in medicinal chemistry, pharmacology, toxicology and regulatory matters.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards and <em>announcements.</em></h2></div><p data-r>The latest on MP-04 from the National Institutes of Health and MitoPower.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>MitoPower.</em></h2>'+
   '<p class="sub" data-r>Whether you are a hepatologist, a nephrologist, an investor or a potential partner for MP-04, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email MitoPower '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>MitoPower LLC<br>2671 Marshall Drive<br>Palo Alto, CA 94303</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>Supported by the National Institute on Alcohol Abuse and Alcoholism under award U44 AA029833.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>2671 Marshall Drive<br>Palo Alto, CA 94303</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>MP-04 · An NAD+ precursor for hepatorenal syndrome</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Open Sans\',Arial,sans-serif;font-weight:400;font-size:56px;letter-spacing:.06em">Mito<tspan style="font-weight:600">Power</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MitoPower LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"science",mechanism:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MitoPower — Restoring mitochondrial function in severe liver and kidney disease",x:"Home"};
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
