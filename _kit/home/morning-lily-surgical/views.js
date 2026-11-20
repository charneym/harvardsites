/* ================= VIEWS (home only: Technology / Programme / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[0])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[2])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Hernia repair device<span class="nomob"> · Sherwood Park, Alberta</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Inguinal hernia repair,</span><span class="l"><em>re-engineered.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Morning Lily Surgical Innovations is developing the Daisy Hernia System, a nitinol-based implantable device for repairing inguinal hernias.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The device '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Before an operation: instruments laid out on the sterile field.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Morning Lily set out to transform the treatment of inguinal hernias, aiming for shorter recovery, fewer secondary hernias and fewer complications after surgery. Its answer is a new implantable device, <em>built on nitinol.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$64,000</span><span class="k">NRC IRAP contribution from September 2025 to advance the device toward manufacture</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$30,000</span><span class="k">NRC IRAP support in 2024–25 for biomechanical and preclinical testing</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2021</span><span class="k">Incorporated in Alberta, based in Sherwood Park</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Nitinol-based</span><p data-r>The Daisy Hernia System is built on nitinol, the nickel-titanium alloy used across implantable medical devices.</p></div>'+
    '<div><span class="lab kick" data-r>Made for the groin</span><p data-r>A mesh implantation device designed specifically for inguinal hernias, the hernias of the groin.</p></div>'+
    '<div><span class="lab kick" data-r>Alberta health innovation</span><p data-r>A member company of the Health Innovation Hub at the University of Alberta, supported by the National Research Council of Canada.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">An alloy that <em>remembers.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Nitinol</span><span>Units</span><span>Testing</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Bent, then back to shape.</h2><p>Nitinol is a nickel-titanium alloy that is superelastic at body temperature: it can be deformed far beyond ordinary metal and still spring back to the shape it was set in. Morning Lily’s hernia repair device is built on it.</p></article>'+
     '<article class="step"><h2>From prototype to commercial grade.</h2><p>To validate the manufacturing approach of its current prototype, Morning Lily plans to contract an established nitinol medical device manufacturer to produce commercial-grade units.</p></article>'+
     '<article class="step"><h2>Tested for safety and efficacy.</h2><p>Those units go into biomechanical tests and preclinical animal studies, and the data support investment and a regulatory submission, on the way toward human trials.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split">One device, <em>step by step.</em></h2></div><p data-r>The Daisy Hernia System is in preclinical development, funded in two stages by the NRC Industrial Research Assistance Program.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r><span>NRC Industrial Research Assistance Program</span><i aria-hidden="true">·</i><span>Health Innovation Hub, University of Alberta</span><i aria-hidden="true">·</i><span>Applied Pharmaceutical Innovation</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">On the <em>public record.</em></h2></div><p data-r>Federal funding for the device and the company’s place in Alberta’s health innovation community.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">A better repair, <em>from Alberta.</em></h2>'+
   '<p class="sub" data-r>Morning Lily Surgical Innovations is preparing its device for preclinical studies. For updates on the Daisy Hernia System, join the list at morninglily.com.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+WEB+'" target="_blank" rel="noopener">Join the update list '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Morning Lily Surgical Innovations Inc.<br>Sherwood Park, Alberta<br>T8B 1M4, Canada</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">morninglily.com</a></p></div>'+
    '<div><span class="lab" data-r>Community</span><p data-r>Health Innovation Hub<br>University of Alberta, Edmonton</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Sherwood Park, Alberta<br>T8B 1M4, Canada</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Updates</span><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">morninglily.com</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Implantable devices<br>for inguinal hernia repair</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Fraunces\',Georgia,serif;font-weight:400;font-size:78px;letter-spacing:-.01em"><tspan fill="#f9f3ef">Morning</tspan><tspan fill="#faac85" dx="14" font-style="italic">Lily</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Morning Lily Surgical Innovations Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",programme:"programme",team:"about",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Morning Lily Surgical Innovations — the Daisy Hernia System, Sherwood Park, Alberta",x:"Home"};
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
