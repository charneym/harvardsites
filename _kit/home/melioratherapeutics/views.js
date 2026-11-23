/* ================= VIEWS (home only: Platform / Research / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function props(){return '<ul class="pfr">'+PROPS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function progs(){return '<ul class="pfr pgr">'+PROG.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Paper</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Founders and leadership</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={mol:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M14 8l8 4.6v9.2l-8 4.6-8-4.6v-9.2Z"/><path d="M22 21.8l8 4.6v7"/><circle cx="30" cy="35" r="2"/><path d="M22 12.6l7-4"/><circle cx="31" cy="7.4" r="2"/></svg>',
 fp:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M7 6v28M12 6v28M15 6v28M21 6v28M24 6v28M30 6v28M33 6v28"/></svg>',
 tgt:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="6.5"/><circle cx="20" cy="20" r="1.6"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Small-molecule oncology<span class="nomob"> · San Francisco and Cambridge, MA</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><em>21st century</em></span><span class="l">oncology drug</span><span class="l">development.</span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>Meliora discovers and develops small-molecule therapies for high-value cancer targets, with AnchorOmics: a machine-learning platform built to decipher what a drug truly does in a cancer cell.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/platform">The platform '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>A small-molecule drug, as a ball-and-stick model. Rendered; illustrative.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why mechanism matters</span>'+
   '<h2 class="txt" id="mani">A cancer drug is only as good as our understanding of how it works, and that understanding is often wrong. <em>We are building an atlas of what drugs really do.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2021</span><p class="k">Founded by Jason Sheltzer, Joan Smith and David Li</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$11<small>M</small></span><p class="k">Seed financing, led by HOF Capital and ZhenFund</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1p36</span><p class="k">The chromosomal deletion the team linked to sensitivity to CDK11 inhibition (Nature Communications, 2026)</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.mol+'</span><span class="lab kick" data-r>Small molecules</span><p data-r>Small-molecule therapies, discovered and developed for high-value cancer targets.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.fp+'</span><span class="lab kick" data-r>Molecular fingerprints</span><p data-r>Multimodal profiles of tens of thousands of compounds, the data AnchorOmics learns from.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.tgt+'</span><span class="lab kick" data-r>True mechanisms</span><p data-r>Each molecule paired with the target mechanism it really acts through, on target and off.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How AnchorOmics works</span><h2 class="d3">From one molecule <em>to its true mechanism.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Molecule</span><span>Fingerprint</span><span>Atlas</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A small molecule.</h2><p>Every oncology drug comes with a reported target. Our scientific co-founder’s research showed that the reported mechanism of action is often not the real one.</p></article>'+
     '<article class="step"><h2>Its fingerprint.</h2><p>Each compound is profiled into a multimodal molecular fingerprint. Meliora has built them for tens of thousands of compounds.</p></article>'+
     '<article class="step"><h2>Its true target.</h2><p>An inference engine reads the fingerprint against the atlas and identifies the small-molecule and target mechanism-of-action pair.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">Machine learning, <em>built on mechanism.</em></h2></div><p data-r>Meliora is a machine-learning company pioneering a platform to decipher oncology drugs’ true mechanisms of action. AnchorOmics lets researchers develop a precise understanding of what a drug does, and turns that understanding into new small-molecule therapies.</p></div>'+
   props()+
  '</div></section>'+

  '<section class="sec dark" id="research" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Research</span><h2 class="d2 split">CDK11, <em>on target.</em></h2></div><p data-r>CDK11 is an understudied kinase, the subject of conflicting reports about its function in cancer. In Nature Communications (October 2026), Meliora and academic collaborators combined genetic and pharmacological approaches to define what inhibiting it does, in cells and in vivo. Meliora has filed patents on CDK11 inhibitors.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Investors</span><p class="cr" data-r>'+lst(INVEST)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug hunters <em>and machine-learning builders.</em></h2></div><p data-r>Founded in 2021 by Jason Sheltzer, Joan Smith and David Li, Meliora runs its drug discovery from Bayer’s Co.Lab in Kendall Square, led by a CSO whose earlier work led to the approval of a targeted lung-cancer drug.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Board of directors</span><p class="cr" data-r>'+lst(BOARD)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, people <em>and financing.</em></h2></div><p data-r>The latest from Meliora: new peer-reviewed biology on CDK11, an expanded board and leadership team, and the seed round that launched the mechanism-of-action atlas.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, scientists and investors</span>'+
   '<h2 class="big split">Better medicines start with <em>the true mechanism.</em></h2>'+
   '<p class="sub" data-r>Interested in AnchorOmics, our research or a partnership? Write to us and we’ll take the conversation from there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Meliora '+ARR+'</a><a class="btn" href="#/platform">See the platform</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Drug discovery</span><p data-r>Bayer Co.Lab, Kendall Square<br>238 Main Street<br>Cambridge, MA, USA</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></p></div>'+
    '<div><span class="lab" data-r>Also in</span><p data-r>San Francisco, CA, USA</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>238 Main Street<br>Cambridge, MA, USA</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/research">Research</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Small-molecule oncology,<br>by mechanism of action</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="66" text-anchor="middle" style="font-family:\'IBM Plex Mono\',ui-monospace,monospace;font-weight:600;font-size:74px;letter-spacing:.2em"><tspan fill="#f4f9ff">MELIORA</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Meliora Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",platform:"platform",research:"research",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Meliora Therapeutics — 21st century oncology drug development",x:"Home"};
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
