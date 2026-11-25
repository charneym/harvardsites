/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function apps(){return '<ul class="pfr pipe np">'+APPS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+EX+'applicationsservices.html" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
function pubs(){return '<ul class="nws">'+PUBS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function hist(){return '<ol class="sg-tl">'+HIST.map(function(h){return '<li data-r><span class="y">'+esc(h[0])+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function team(){
  return '<div class="mh"><div class="mh-group"><p class="mh-label">The team</p><ul class="mh-list">'+TEAM.map(function(t){
   return '<li><div class="mh-row cg-r"><span class="mh-name">'+esc(t[0])+'</span><span class="mh-role">'+esc(t[1])+'</span><span class="mh-sum">'+esc(t[2])+'</span></div></li>'}).join("")+
  '</ul></div></div>'}
function caps(){var C=[
  ["Flow culture","Tissue kept alive, the way blood flow does it","Stagnant culture depletes O₂, builds up waste and is hard to sample or dose. In the BaroFuse a steady flow keeps tissue oxygenated in its native structure and delivers test compounds precisely.",'<path d="M20 6V50M36 6V50"/><path class="a" d="M28 44V14M23 19L28 14L33 19"/><circle class="f" cx="28" cy="30" r="2.2"/>'],
  ["Real-time readout","Several parameters, continuously","Oxygen consumption and lactate production in real time, with outflow fractions collected for hormones, metabolites, neurotransmitters and cytokines.",'<path d="M8 46L20 30L30 36L48 14"/><path class="a" d="M8 50H48M8 50V10"/><circle class="f" cx="48" cy="14" r="2.2"/>'],
  ["Dissolved gases","O₂, CO₂ and trace gas signals under control","Control of dissolved gas equilibration for studies of O₂, CO₂ and H₂S, with rapid changes in the inflow while oxygen consumption is measured.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M20 34Q24 22 28 28T36 22"/><circle class="f" cx="28" cy="28" r="2.2"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="light">'+
   '<span class="lab eyebrow" data-r>Tissue perifusion<span class="nomob"> · Seattle, Washington</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Live tissue,</span><span class="l"><em>measured in real time.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The BaroFuse is a pumpless multichannel fluidics instrument that keeps tissue alive and functioning while it continuously measures its oxygen consumption and collects what it secretes.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/barofuse">How the BaroFuse works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Analytical tools for investigating metabolic, signalling and secretory function in <em>live tissue.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">8–16</span><p class="k">channels per instrument, each with its own tissue sample</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;1 h</span><p class="k">setup time for every collaborating laboratory (Cell Reports Methods, 2023)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2013</span><p class="k">founded as an instrument company, funded by the NIH and the NSF</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The BaroFuse</span><h2 class="d3">Flow in, <em>function out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Equilibrate</span><span>Perifuse</span><span>Measure</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Gas set in the media.</h2><p>The inflow media is equilibrated with a set gas composition: O₂ and CO₂, or trace signalling gases such as H₂S. The dissolved gas can be changed rapidly during the experiment.</p></article>'+
     '<article class="step"><h2>Pressure drives the flow.</h2><p>Without a pump, pressure drives the media up through a chamber holding the tissue: slices, islets or a needle biopsy. The flow keeps it oxygenated and carries test compounds to it.</p></article>'+
     '<article class="step"><h2>Measured in and out.</h2><p>Sensors read dissolved O₂ before and after the tissue. The difference gives its oxygen consumption rate in real time, while outflow fractions are collected for lactate, hormones and more.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The benefits of fluidics, <em>for drug effects on tissue.</em></h2></div><p data-r>Animal studies are expensive, slow and low throughput, and they do not show intracellular mechanisms. Live tissue from humans or animals balances in vivo function with detailed measurement, and the BaroFuse keeps it working while it is measured.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Features</span><p class="cr" data-r><span>Tissue in its native structure</span><span>Small samples, including needle biopsies</span><span>8–16 channels</span><span>Protocols of hours to days</span><span>Enclosure and fraction collector modules</span><span>BaroFuse UI software</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications and services</span><h2 class="d2 split">Protocols, <em>run for you or by you.</em></h2></div><p data-r>EnTox sells the BaroFuse instrument and runs experiments as a fee for service. Preliminary data is a good way to see whether the BaroFuse fits your research and development needs.</p></div>'+
   apps()+
   '<div class="bk"><span class="lab kick" data-r>Tissues</span><p class="cr" data-r><span>Retina</span><span>Pancreatic islets</span><span>Liver</span><span>Hypothalamus</span><span>Brown adipose tissue</span><span>Lung endothelial cells</span><span>RPE and INS-1 cells</span><span>Tumour needle biopsies</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Instrument builders <em>and physiologists.</em></h2></div><p data-r>EnTox works closely with Dr. Ian Sweet’s laboratory at the University of Washington, a collaboration supported by STTR grants from the NIH and the NSF.</p></div>'+
   hist()+
   team()+
   '<div class="qual"><span class="lab kick" data-r>Careers</span><p class="cr" data-r><span>Design Engineer, Seattle</span><a class="ul" href="mailto:'+JOBS+'">'+JOBS+'</a></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="publications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Publications</span><h2 class="d2 split">Published with <em>the BaroFuse.</em></h2></div><p data-r>Studies by EnTox, the Sweet laboratory and collaborating groups on retina, islets, liver and hypothalamus, from tissue metabolism to dissolved gases.</p></div>'+
   pubs()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Talk to us about <em>your tissue.</em></h2>'+
   '<p class="sub" data-r>For more information about the BaroFuse and our fee-for-service experiments, or to discuss protocols and experimental design, get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Sales: '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>EnTox Sciences, Inc.<br>Seattle, Washington</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Sales <a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br>Technical <a class="ul" href="tel:'+TELTECH+'">'+TELTECHT+'</a></p></div>'+
    '<div><span class="lab" data-r>Resources</span><p data-r><a class="ul" href="'+EX+'documents.html" target="_blank" rel="noopener">BaroFuse documents</a><br><a class="ul" href="'+EX+'software.html" target="_blank" rel="noopener">BaroFuse software</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>EnTox Sciences, Inc.<br>Seattle, Washington</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/publications">Publications</a></div>'+
   '<div class="c"><span class="lab">The BaroFuse</span>Enclosure module<br>Fraction collector module<br>BaroFuse UI<br>Fee-for-service experiments</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 120" aria-hidden="true"><text x="450" y="100" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',Arial,sans-serif;font-weight:600;font-size:118px;letter-spacing:.02em">EnTox Sciences</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 EnTox Sciences, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",barofuse:"story",technology:"technology",applications:"applications",team:"team",publications:"publications",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"EnTox Sciences — the BaroFuse: live tissue, measured in real time",x:"Home"};
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
