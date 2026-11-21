/* ================= VIEWS (home only: Technology / Progress / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function caps(){return '<div class="plat caps">'+CAPS.map(function(a){return '<div><span class="lab kick" data-r>'+esc(a[0])+'</span><p data-r>'+esc(a[1])+'</p></div>'}).join("")+'</div>'}
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Optical tissue sensing for cardiac ablation<span class="nomob"> · Weston, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">See the gaps.</span><span class="l"><em>Close them</em></span><span class="l"><em>in the same procedure.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>LuxMed is building the first platform to combine real-time optical diagnostics with therapeutic ablation, so electrophysiologists can find the gaps in their lesions while the catheter is still in the heart.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>The optically enabled catheter tip: a window in the tip electrode lights the tissue it touches (render).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Pulsed field ablation is fast and safe, but physicians cannot see whether a lesion will last. Undetected gaps drive recurrence and repeat procedures. <em>LuxMed turns ablation from an open loop into a closed one.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">11</span><span class="k">Patients with cardiac arrhythmias, including AF, successfully ablated with the optically enabled RF catheter</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">61</span><span class="k">Issued patents, with more than 20 pending</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$6M+</span><span class="k">In NIH SBIR and STTR funding behind the technology</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Light that reads <em>the heart wall.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The gap</span><span>Light</span><span>Reading</span><span>Closing</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A gap you cannot see.</h2><p>Ablation draws a line of lesions through the heart wall to block stray electrical signals. Leave a gap of living muscle in that line and the arrhythmia can return.</p></article>'+
     '<article class="step"><h2>Light at the tip.</h2><p>LuxMed’s catheter interrogates the tissue it touches with light, reading tissue contact, composition and metabolic activity in real time.</p></article>'+
     '<article class="step"><h2>Living muscle, or lesion.</h2><p>A strong signal in the green band means active, viable heart muscle; in the yellow band, fibrotic scar. The optics see it even when the tissue is electrically stunned.</p></article>'+
     '<article class="step"><h2>Close it now.</h2><p>The gap is treated in the same procedure, with targeted therapy, instead of being found months later in a repeat procedure.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="capabilities" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Core capabilities</span><h2 class="d2 split">Six signals, <em>one catheter.</em></h2></div><p data-r>Proprietary optical sensing, originally developed at The George Washington University, built as a diagnostic catheter that fits existing mapping and ablation workflows.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark" id="progress" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Progress</span><h2 class="d2 split">From the first patients <em>to pulsed field.</em></h2></div><p data-r>LuxMed is commercializing optically enabled radiofrequency diagnostic catheters first, then expanding into pulsed field ablation.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Published data</span><p class="cr" data-r><span>Heart Rhythm Society</span><i>2015</i><i>2016</i><i>2019</i></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built by <em>electrophysiology veterans.</em></h2></div><p data-r>Founders who have launched EP products, formed startups and sat on EP company boards, with independent directors and leading electrophysiologists alongside.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Backed by <em>the NIH.</em></h2></div><p data-r>LuxMed’s catheter work is supported by SBIR Phase II funding from the National Heart, Lung, and Blood Institute.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, partners and investors</span>'+
   '<h2 class="big split">Transform <em>arrhythmia therapy.</em></h2>'+
   '<p class="sub" data-r>To talk about the optically enabled catheter, a clinical collaboration, a partnership or an investment, write to the LuxMed Systems team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>LuxMed Systems, Inc.<br>Weston, Massachusetts</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16173061061">'+TEL+'</a></p></div>'+
   '</div>'+
   '<p class="ivd" data-r>Investigational device. Limited by Federal (or United States) law to investigational use. Not available for sale.</p>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Weston,<br>Massachusetts</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/progress">Progress</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16173061061">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Optical sensing for<br>RF and pulsed field ablation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Sora\',system-ui,sans-serif;font-weight:400;font-size:66px;letter-spacing:-.02em"><tspan fill="#f2f4f8">LuxMed</tspan><tspan fill="#8da6ff" font-weight="300" dx="16">Systems</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 LuxMed Systems, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",capabilities:"capabilities",progress:"progress",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"LuxMed Systems — optical tissue sensing for cardiac ablation, Weston, Massachusetts",x:"Home"};
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
