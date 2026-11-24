/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+c[7]+'" target="_blank" rel="noopener">'+esc(c[8])+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function partners(){return PARTNERS.map(function(g){return '<div class="crd"><span class="lab kick" data-r>'+esc(g[0])+'</span><p class="crl" data-r>'+g[1].map(function(n){return '<span>'+esc(n)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}).join("")}
function caps(){var C=[
  ["Starts at closure","The Haermonics Pure System is designed for immediate intervention, from the moment the chest is closed, when the risk of obstructed drainage begins.",'<path d="M10 28h36"/><path class="a" d="M28 10v36"/><circle class="f" cx="28" cy="28" r="4"/>'],
  ["Keeps the tubes clear","A steady flow of saline through the pericardium prevents clots from forming, so the chest tubes stay open and residual blood keeps draining.",'<path d="M14 6v18c0 8 6 12 14 12s14-4 14-12V6"/><path class="a" d="M28 36v14"/><path class="a" d="M22 44l6 6 6-6"/>'],
  ["Real-time insight","The system shows the drained volume as it happens, giving clinical teams real-time insight and standardised support for the postoperative patient.",'<path d="M6 44h44"/><path class="a" d="M8 18c8 0 10 10 18 14s14 8 22 8"/><path d="M8 8v36"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>Pooled results</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Individual patient-data pooled analysis of 744 patients (Klautz, 38th EACTS Annual Meeting, Lisbon, 2024) and the FLUID randomised trial (Molenaar et al., J Clin Med, 2026), as reported by Haermonics. Usability study: ClinicalTrials.gov, NCT06521164.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Haermonics Pure System<span class="nomob"> · Continuous pericardial flushing</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">From crisis</span><span class="l">to <em>proactive</em></span><span class="l"><em>prevention.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>The Haermonics Pure System automates continuous postoperative pericardial flushing: a steady flow of saline that keeps chest tubes clear from the moment the chest is closed, to prevent bleeding complications after heart surgery.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/story">How it works '+ARR+'</a><a class="btn" href="#/evidence">The evidence</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Pure at heart</span>'+
   '<h2 class="txt" id="mani">Since 1875, cardiac drainage has remained largely unchanged despite the persistent risk of complications. We didn’t just think we could improve this standard. <em>We proved it.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">36%</span><p class="k">Of patients can see their chest tubes obstruct after open-heart surgery</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">744</span><p class="k">Patients in the pooled analysis behind continuous pericardial flushing</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">40%</span><p class="k">Fewer pericardial reinterventions with flushing, from 11.7% to 7.0%</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Keep the drainage <em>clear.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Drain</span><span>Flush</span><span>Monitor</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>After surgery, the tubes must drain.</h2><p>Recovery depends on chest tubes staying clear. In as many as 36% of patients they obstruct, and retained blood can lead to bleeding complications and a return to the operating room.</p></article>'+
     '<article class="step"><h2>A steady flow of saline.</h2><p>From the moment the chest is closed, the Haermonics Pure System gently flushes the pericardium with saline, preventing clots from forming and keeping the tubes open.</p></article>'+
     '<article class="step"><h2>Real-time insight at the bedside.</h2><p>The system measures what drains, giving clinical teams real-time insight and standardised support through the critical first hours of recovery.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">The Haermonics <em>Pure System.</em></h2></div><p data-r>We bring cardiac drainage into the 21st century by automating the solution surgeons already use in the operating room: continuous postoperative pericardial flushing, moving care from reactive emergency to proactive prevention.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical evidence</span><h2 class="d2 split">Clinically validated <em>performance.</em></h2></div><p data-r>The Haermonics Pure System rests on an extensive clinical history: a pilot study and three randomised trials with two generations of devices, pooled into one cohort of 744 patients.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Born in the <em>operating room.</em></h2></div><p data-r>“There is no successful heart surgery without successful post-operative care.” Our core team brings experience across the entire medical device lifecycle, guided by an advisory panel from across the cardiac surgery ecosystem.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="partners" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Partners</span><h2 class="d2 split">Strong <em>partnerships.</em></h2></div><p data-r>Haermonics works with leading Dutch heart centres, engineering partners and investors to bring continuous pericardial flushing to patients.</p></div>'+
   partners()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split">Join the <em>journey.</em></h2>'+
   '<p class="sub" data-r>For clinical, partnering or investment questions about the Haermonics Pure System, please get in touch with the Haermonics team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to Haermonics '+ARR+'</a><a class="btn" href="#/evidence">See the evidence</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Head office</span><p data-r>Haermonics BV<br>Microlab, Kastanjelaan 400<br>5616 LZ Eindhoven, the Netherlands</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@haermonics.com</a></p></div>'+
    '<div><span class="lab" data-r>Clinical study</span><p data-r><a class="ul" href="'+CTU+'" target="_blank" rel="noopener">USEPURE, NCT06521164</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Head office</span>Eindhoven, the Netherlands</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@haermonics.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/evidence">Clinical evidence</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/partners">Partners</a></div>'+
   '<div class="c"><span class="lab">The system</span>Haermonics Pure · continuous postoperative pericardial flushing</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Inter Tight\',sans-serif;font-weight:600;font-size:64px">HAERMONICS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Haermonics BV</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",technology:"technology",evidence:"evidence",team:"team",partners:"partners",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Haermonics — pure at heart",x:"Home"};
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
