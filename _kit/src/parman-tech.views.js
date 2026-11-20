/* ================= VIEWS (home only: every nav item scrolls to its section on this page) ================= */
var SECS={technology:"story",applications:"applications",team:"team",news:"news",contact:"contact"},PEND=null;
function toSec(k,instant){var el=document.getElementById(SECS[k]);if(!el)return;
  var y=el.getBoundingClientRect().top+window.scrollY;if(el.parentNode&&el.parentNode.classList&&el.parentNode.classList.contains("pin-spacer"))y=el.parentNode.getBoundingClientRect().top+window.scrollY;
  if(lenis&&!instant)lenis.scrollTo(y,{duration:1.4});else window.scrollTo(0,y)}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var open=document.body.classList.contains("menu-open");if(open)closeMenu();
  if(curKey!=="home"){PEND=k;location.hash="#/";return}
  setTimeout(function(){toSec(k)},open?320:0)},true);
function people(label,list){return '<div class="mh-group"><p class="mh-label">'+esc(label)+'</p><ul class="mh-list" data-group>'+list.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div>'}
function apps(){return '<ul class="pf">'+APPS.map(function(r){return '<li><h3>'+esc(r.n)+'</h3><p>'+esc(r.i)+'</p>'+
  '<div class="st"><b>'+esc(r.s)+'</b><span class="lab">'+esc(r.sd)+'</span></div></li>'}).join("")+'</ul>'}
function refs(){return '<ul class="refs">'+PAPERS.map(function(p){return '<li><a class="ul" href="'+p.u+'" target="_blank" rel="noopener">'+esc(p.t)+'</a><span class="lab">'+esc(p.j)+(p.y?' · '+p.y:'')+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  if(PEND){var k=PEND;PEND=null;setTimeout(function(){toSec(k,true)},900)}
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>New tools for nanomedicine<span class="nomob"> · Loveland, Colorado</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Separating</span><span class="l">nanoparticles</span><span class="l"><em>with light.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Parman Tech is developing NanoSelect: a standing wave of laser light, set across a microfluidic channel, that takes one size of nanoparticle out of a mixed stream, continuously.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/applications">Applications</a></div></div>'+
   '<div class="hero-key lab" data-r aria-hidden="true"><span><i class="b"></i>Mixed stream in</span><span><i class="g"></i>Standing wave at 45°</span><span><i class="w"></i>Selected size out</span></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<p class="txt" id="mani">Viral vectors, lipid nanoparticles and vesicles must be purified and sorted by size, in steps that are hard to scale. Parman Tech sorts them with optical force, <em>in one continuous stream.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">45<sup>°</sup></span><span class="k">The angle between the standing wave of light and the particle flow</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2016</span><span class="k">The technology first published by its inventors at NIST, in Optics Express</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$305<sup>K</sup></span><span class="k">NSF SBIR Phase I award, 2026, to build the optical resonator instrument</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><span class="k">Application areas, from gene-therapy vectors to synthetic blood</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">A standing wave, <em>set at an angle.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Inlet</span><span>Wave</span><span>45°</span><span>Force</span><span>Select</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h3>A mixed stream enters.</h3><p>A heterogeneous stream of nanoparticles flows into a microfluidic capillary from the left: particles of many sizes, travelling together.</p></article>'+
     '<article class="step"><h3>Two beams make a standing wave.</h3><p>Counter-propagating laser beams, as in a Fabry–Perot cavity between two mirrors, create a standing wave of light across the channel: fixed bright fringes that exert optical force on every particle.</p></article>'+
     '<article class="step"><h3>Set at 45° to the flow.</h3><p>The standing wave crosses the flow at an acute angle, 45°. A particle meeting the fringes is pushed along the beam, out of the line it arrived in.</p></article>'+
     '<article class="step"><h3>Each particle moves its own distance.</h3><p>The displacement varies with particle size, density or index of refraction. Balancing the optical force against the flow rate sets how far each kind of particle is moved.</p></article>'+
     '<article class="step"><h3>A barrier takes the chosen size.</h3><p>At the end of the cavity a barrier isolates a specific size, or size range, of particles; the rest flow on. The input is continuous, so large volumes can be processed.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene"><canvas id="storyCv" aria-hidden="true"></canvas></div></div>'+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Wherever size is <em>the quality.</em></h2></div><p data-r>NanoSelect outputs a specific nanoparticle size, or range of sizes, from a polydisperse input mixture. Five areas where that matters now.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark" data-theme="dark"><div class="wrap"><div class="two">'+
   '<div><span class="lab kick" data-r>In development</span><h2 class="d2 split">A laser cavity <em>around a channel.</em></h2><p class="muted" style="margin-top:28px;max-width:44ch" data-r>The 2026 NSF SBIR project builds the key enabling component: a high-power optical cavity with an integrated microfluidic cell, frequency-locked, with circulating power high enough to change the trajectories of the particles used in nanomedicine.</p></div>'+
   '<dl class="facts" data-group>'+
    '<div><dt class="lab">The challenge</dt><dd>Anything placed inside an optical cavity, above all a channel of liquid, can disturb its resonance.</dd></div>'+
    '<div><dt class="lab">The approach</dt><dd>New materials and new geometries, for a stable cavity that is as short as possible.</dd></div>'+
    '<div><dt class="lab">Manufacturing</dt><dd>Explored with custom makers of optical components and microfluidic devices.</dd></div>'+
    '<div><dt class="lab">Beyond medicine</dt><dd>Semiconductor manufacturing, airborne and water-borne threat detection, rapid diagnosis.</dd></div>'+
   '</dl>'+
  '</div>'+
  '<div class="two" style="margin-top:var(--sec)"><div><span class="lab kick" data-r>Origin</span><h2 class="d3 split">Born at <em>NIST.</em></h2><p class="muted" style="margin-top:24px;max-width:42ch" data-r>The technology was first published in 2016 by scientists at the National Institute of Standards and Technology. Its distinguishing feature: it processes large volumes, continuously.</p></div>'+refs()+'</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light" style="background:var(--bone2)"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The inventors, <em>building it.</em></h2></div><p data-r>Founded in 2018, Parman Tech develops NIST-licensed technology for commercial markets. It is now making its second technical hire: a Ph.D.-level R&amp;D experimentalist with creativity and tenacity.</p></div>'+
   '<div class="mh">'+people("Founders",FOUNDERS)+people("Leadership",STAFF)+'</div>'+
   '<p class="hire" data-r><span class="lab">We’re hiring</span><a class="ul" href="mailto:'+MAIL+'?subject=R%26D%20experimentalist">R&amp;D experimentalist, Ph.D. level · Loveland, Colorado '+ARR+'</a></p>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Backing and news</span><h2 class="d2 split">From paper <em>to instrument.</em></h2></div><p data-r>In 2026 Parman Tech won an NSF SBIR Phase I award and was made “awardable” in DARPA’s ERIS marketplace, after a NIST SBIR Phase I award in 2025.</p></div>'+
   newsRows(NEWS)+
   '<div class="credit" data-r><span class="lab">Support</span><p><span>National Science Foundation</span><i>·</i><span>NIST</span><i>·</i><span>DARPA ERIS</span><i>·</i><span>TEDCO N-STEP</span><i>·</i><span>NSF I-Corps™</span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Developers, manufacturers and investors</span>'+
   '<h2 class="big split">Bring us <em>your particles.</em></h2>'+
   '<p class="sub" data-r>If you purify viral vectors, make lipid nanoparticles, isolate vesicles or need a narrow size distribution, we would like to hear from you.<span class="addr2" style="display:block">Parman Tech, Inc. · 815 14th Street SW, Suite 250, Loveland, Colorado 80537</span></p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email John Curry '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Lab</span>815 14th Street SW, Suite 250<br>Loveland, Colorado 80537</div>'+
   '<div class="c"><span class="lab">Origin</span>Technology licensed<br>from NIST</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-style:italic;font-weight:500;font-size:44px;letter-spacing:.01em">PARMAN TECH</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Parman Tech, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p.length&&SECS[p[0]]&&p.length===1)PEND=p[0];
  return {k:"home",v:vHome,t:"Parman Tech — Separating nanoparticles with light",x:"Home"};
}
