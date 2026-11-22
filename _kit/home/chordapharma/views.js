/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
var PHS=["Formula","Trial","Launch","Amazon"];
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[7]?' class="dim"':'')+'><span class="lab tg"><b'+(c[7]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span>'+
   (c[7]?'':'<span class="stg" aria-hidden="true"><span class="tr"><i class="p" style="width:'+(c[5]/4*100)+'%"></i><i style="width:'+(c[4]/4*100)+'%"></i></span><span class="ph">'+PHS.map(function(p){return '<span>'+p+'</span>'}).join("")+'</span></span>')+'</div>'+
   '<p>'+esc(c[6])+'</p><span class="lab lk">'+(c[7]?'Next':'Available now')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["No burn, clinically","Capsaicin’s burning and skin irritation have long limited its use. In a placebo-controlled trial, Capsadyn’s burning was statistically equal to a placebo cream, even at maximum strength.",'<path d="M28 8c8 10 12 17 12 24a12 12 0 0 1-24 0c0-7 4-14 12-24z"/><path class="a" d="M14 46L42 18"/>'],
  ["Maximum strength","0.25% capsaicin, the maximum the FDA allows for over-the-counter topical analgesics and 2.5 times typical OTC creams. Highly concentrated: each jar holds about 50 applications.",'<path d="M10 44h36"/><path d="M16 44V32M24 44V26M32 44V18"/><path class="a" d="M40 44V10"/>'],
  ["Opioid-free, for the long term","No NSAIDs, steroids, anesthetics or opioids, and non-addictive. Safe to use with oral medications such as NSAIDs, and made in the United States under FDA rules for external analgesics.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M16 40L40 16"/><path d="M22 28h12"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function buy(){return '<div class="bk light-bk"><span class="lab kick" data-r>Where to buy</span><p class="cr" data-r><a class="ul" href="https://capsadyn.com" target="_blank" rel="noopener">Capsadyn.com</a><i>·</i><a class="ul" href="https://www.amazon.com/dp/B0G2TCNTSV" target="_blank" rel="noopener">Amazon</a><i>· #1 New Release in Arthritis Pain Relief Medications</i></p></div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Clinical trial<br>NCT05649228</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Burning reported on a 0–10 visual analog scale every 10 minutes for an hour, then in a next-day interview. Top-line results, Chorda Pharma release of March 15, 2024. Capsadyn is for the temporary relief of minor arthritis, joint and muscle pain.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Non-opioid pain relief<span class="nomob"> · Capsadyn®</span> · Roanoke, VA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Chronic pain relief,</span><span class="l">without opioids,</span><span class="l"><em>without the burn.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Chorda Pharma is developing a pipeline of proprietary, opioid-free analgesics for chronic pain. The first, Capsadyn®, is a maximum-strength capsaicin cream, clinically shown not to burn.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/capsadyn">Meet Capsadyn '+ARR+'</a><a class="btn" href="#/evidence">The clinical trial</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Arthritis is the number one cause of disability in America. Corticosteroids, NSAIDs and acetaminophen are not considered safe for long-term use, and opioids have fed a public health emergency. Chorda’s medications are opioid-free, <em>for relief that can last.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">54M+</span><p class="k">People in America afflicted with arthritis</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.25%</span><p class="k">Capsaicin in Capsadyn, the maximum allowed by the FDA for over-the-counter topical analgesics</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0 of 10</span><p class="k">Median peak burn with Capsadyn in its clinical trial, the same as placebo</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How Capsadyn works</span><h2 class="d3">The chili’s molecule, <em>minus the fire.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Apply</span><span>Quiet</span><span>No burn</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Capsaicin, into the skin.</h2><p>Capsaicin is the molecule that makes chili peppers burn, and its analgesic properties are well known. A fingernail-sized dab of Capsadyn absorbs fast, without grease or odour, carrying it to the nerve endings under the surface.</p></article>'+
     '<article class="step"><h2>Quiet the receptors.</h2><p>Capsadyn gradually desensitizes overactive pain receptors in the nerve endings that drive persistent discomfort from arthritis, joint pain and muscle soreness. Relief builds with continued use.</p></article>'+
     '<article class="step"><h2>Without the burn.</h2><p>The burning has always been capsaicin’s catch. In Chorda’s trial, Capsadyn at maximum strength burned no more than a placebo cream, while a 0.1% capsaicin cream scored a median 5 out of 10.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="capsadyn" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Capsadyn®</span><h2 class="d2 split">Maximum-strength capsaicin, <em>non-burning.</em></h2></div><p data-r>Chorda’s first drug is an over-the-counter topical cream for minor arthritis, joint and muscle pain: a proprietary, patented formulation that keeps capsaicin’s relief and loses its sting.</p></div>'+
   caps()+
   buy()+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence and pipeline</span><h2 class="d2 split">Tested at Carilion, <em>now on the market.</em></h2></div><p data-r>Capsadyn was studied in a double-blind clinical trial at Carilion Clinic before its launch, and it is the first in a pipeline of opioid-free analgesics.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Pharmaceutical science, <em>Roanoke-built.</em></h2></div><p data-r>Founded by a career drug-discovery scientist and led by a serial founder, with directors from Carilion Clinic.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Partnership</span><p data-r>Since 2021, Chorda has partnered with Carilion Clinic to develop, test and market non-opioid medications for chronic pain.</p></div>'+
    '<div><span class="lab kick" data-r>Support</span><p data-r>A $75,000 Commonwealth Commercialization Fund grant from the Virginia Innovation Partnership Corporation helped fund testing, pilot manufacturing and marketing.</p></div>'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>Chorda is a graduate of the RAMP regional accelerator, part of the Roanoke Valley’s growing cluster of health sciences start-ups.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Launches, trials <em>and milestones.</em></h2></div><p data-r>The latest from Chorda Pharma, from the partnership with Carilion to Capsadyn on Amazon.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Chorda.</em></h2>'+
   '<p class="sub" data-r>Whether you are a clinician, a retailer, a partner or an investor in non-opioid pain relief, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Chorda '+ARR+'</a><a class="btn" href="#/capsadyn">About Capsadyn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Chorda Pharma Inc.<br>Roanoke, Virginia</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15406320008">+1 540-632-0008</a></p></div>'+
    '<div><span class="lab" data-r>The Roanoke Valley</span><p data-r>In the Blue Ridge Mountains, home of Carilion Clinic and the Fralin Biomedical Research Institute.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Chorda Pharma Inc.<br>Roanoke, Virginia</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15406320008">+1 540-632-0008</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/capsadyn">Capsadyn</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">First product</span>Capsadyn® · Non-burning capsaicin cream, 0.25%</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 74" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Comfortaa\',Arial,sans-serif;font-weight:400;font-size:60px">chorda pharma</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Chorda Pharma Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",capsadyn:"capsadyn",mechanism:"story",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Chorda Pharma — opioid-free analgesics for chronic pain, starting with Capsadyn®",x:"Home"};
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
