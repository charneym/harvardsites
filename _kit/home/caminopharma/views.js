/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3>'+
   (c[7]?'':'<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span>')+'</div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Positive modulators","PAMs that turn mGlu2 up and reduce glutamate release, in development for substance use disorders: as an aid to smoking cessation, and for opioid, alcohol and methamphetamine use disorders.",'<path d="M10 28h36"/><path class="a" d="M28 10v36"/><circle cx="28" cy="28" r="18"/>'],
  ["Negative modulators","NAMs of mGlu2 and mGlu3 that raise glutamate signalling, with the potential for rapid-onset antidepressant activity like ketamine’s, without its dissociation and hallucinations.",'<circle cx="28" cy="28" r="18"/><path class="a" d="M10 28h36"/>'],
  ["Oral, brain-penetrant small molecules","Discovered at Sanford Burnham Prebys and designed to be taken by mouth: SBP-9330 is orally administered and reaches the brain, and SBP-9881 has fast-acting, long-lasting effects in vivo.",'<rect x="13" y="20" width="30" height="16" rx="0" transform="rotate(-35 28 28)"/><path class="a" d="M28 18.5L21.6 37.5" transform="rotate(-35 28 28) translate(0 0)"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function credits(){return '<div class="bk"><span class="lab kick" data-r>Collaborators<br>and funders</span><p class="cr" data-r><span>Sanford Burnham Prebys</span><i>·</i><span>UC San Diego School of Medicine</span><i>·</i><span>Wake Forest University School of Medicine</span><i>·</i><span>NIDA</span><i>·</i><span>NIAAA</span><i>·</i><span>NIMH</span></p></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage biotech<span class="nomob"> · Brain disorders</span> · San Diego</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Rebalancing glutamate</span><span class="l">to treat addiction</span><span class="l"><em>and depression.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Camino Pharma develops first-in-class small molecules that selectively modulate mGlu2, a receptor that keeps the brain’s glutamate in balance. Our lead, SBP-9330, is Phase 2-ready as an aid to smoking cessation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/pipeline">Our pipeline '+ARR+'</a><a class="btn" href="#/science">How it works</a></div></div>'+
   '<span class="lab hcap" aria-hidden="true">mGlu2 receptor pair, bound to glutamate and a PAM · PDB 7MTR</span>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Smoking is still the leading cause of preventable death in the US. Nearly 70% of adult smokers try to quit, yet existing medicines work less than 30% of the time over the long term. Camino’s drugs act through <em>a mechanism distinct from any available today.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1B+</span><p class="k">People worldwide who smoke tobacco</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;30%</span><p class="k">Long-term success of existing FDA-approved therapies for nicotine addiction</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$31.2M</span><p class="k">NIDA support for SBP-9330, across three consecutive U01 grants</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Science</span><h2 class="d3">Turning up the synapse’s <em>own brake.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Excess</span><span>mGlu2</span><span>Balance</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Too much glutamate.</h2><p>A large body of evidence links increased glutamate neurotransmission to nicotine- and cocaine-seeking and to relapse. At an overactive synapse, the nerve terminal floods the gap with glutamate.</p></article>'+
     '<article class="step"><h2>mGlu2, the built-in brake.</h2><p>mGlu2 receptors sit on the terminal itself, where they sense glutamate and keep its level in balance. They are a validated target, and Camino’s chemistry is built to modulate them selectively.</p></article>'+
     '<article class="step"><h2>A PAM turns it up.</h2><p>SBP-9330 is a positive allosteric modulator: it binds mGlu2 away from glutamate’s own site and strengthens the receptor’s response, so less glutamate is released. A new drug class for substance use disorders.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">Emerging biology, <em>innovative chemistry.</em></h2></div><p data-r>We integrate emerging biology with innovative chemistry to create novel compounds that selectively modulate validated targets, starting with an extensive portfolio of allosteric modulators of mGlu2.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the clinic <em>to Phase 2.</em></h2></div><p data-r>Medicines for psychiatric disorders that current drugs serve poorly, including substance use disorders and treatment-resistant depression. SBP-9330 has completed Phase 1 and is ready for a Phase 2a study in smokers.</p></div>'+
   pipeRows(PIPE)+
   credits()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug hunters <em>who reach the clinic.</em></h2></div><p data-r>Our leadership has proven expertise in the target biology and long experience taking first-in-class molecules from discovery into human studies.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Our mGlu2 modulators were all discovered at Sanford Burnham Prebys, by scientific founder Nicholas Cosford and his team.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>NIDA has backed SBP-9330 from preclinical work through the clinic; NIMH and NIAAA SBIR awards fund the depression and alcohol programmes.</p></div>'+
    '<div><span class="lab kick" data-r>Track record</span><p data-r>The founders have advanced molecules into human studies at CalciMedica, BrainCells, SIBIA Neurosciences and Merck.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, trials <em>and papers.</em></h2></div><p data-r>The latest from Camino Pharma and its collaborators, from first-in-human dosing to new preclinical science.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and collaborators</span>'+
   '<h2 class="big split">Talk to <em>Camino.</em></h2>'+
   '<p class="sub" data-r>If you are working on new treatments for addiction or depression, as a partner, an investor or a clinical collaborator, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Camino '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Camino Pharma, LLC<br>9920 Pacific Heights Blvd, Suite 150<br>San Diego, CA 92121</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r>SBP-9330, an mGlu2 PAM, Phase 2-ready for smoking cessation.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Camino Pharma, LLC<br>9920 Pacific Heights Blvd, Suite 150<br>San Diego, CA 92121</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead programme</span>SBP-9330 · mGlu2 PAM · Phase 2-ready</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Saira\',Arial,sans-serif;font-weight:400;font-size:62px">camino pharma</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Camino Pharma, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",science:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Camino Pharma — first-in-class mGlu2 medicines for addiction and depression",x:"Home"};
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
