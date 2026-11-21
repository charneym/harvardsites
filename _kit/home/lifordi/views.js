/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
var STG=["Discovery","Lead opt.","Preclinical","Phase 1","Phase 2"];
function pipe(L){return '<ul class="pfr lpipe pgrid">'+L.map(function(c){
  var m='<div class="stg" aria-label="Stage: '+esc(c[2])+'"><div class="trk"><i style="--w:'+((c[6]+1)/STG.length*100).toFixed(1)+'%"></i></div><div class="sl">'+STG.map(function(s,k){return '<span'+(k<=c[6]?' class="on"':'')+'>'+s+'</span>'}).join("")+'</div></div>';
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><div class="pd"><p>'+esc(c[3])+'</p>'+m+'</div><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Antibody-drug conjugates<span class="nomob"> · Burlington, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The power of steroids,</span><span class="l"><em>delivered only</em></span><span class="l"><em>to immune cells.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Lifordi is a clinical-stage company developing antibody-drug conjugates that carry anti-inflammatory payloads straight to immune cells, to treat autoimmune and inflammatory disorders with precision.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology" data-to="story">How LFD-200 works '+ARR+'</a><a class="btn" href="#/contact">Partner with us</a></div></div>'+
   '<p class="lab hcap" data-r>Illustrative model: an IgG antibody (crystal structure PDB 1IGT) carrying eight glucocorticoid payloads, as LFD\u2011200 does.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Targeted delivery</span>'+
   '<h2 class="txt" id="mani">Glucocorticoids calm inflammation, but at high doses or over long periods they reach far beyond their target. Lifordi borrows the precision of ADCs from oncology to deliver them <em>to immune cells, and only there.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">8</span><p class="k">Glucocorticoid payload molecules carried by each LFD-200 antibody</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~30 h</span><p class="k">Serum half-life of the ADC in Phase 1, consistent with active uptake into VISTA+ cells</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 wks+</span><p class="k">Free payload exposure persisting in tissue beyond ADC detection, the data suggest</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Subcutaneous</span><p data-r>A convenient injection under the skin; Phase 1 plasma exposures support dosing every two weeks or monthly.</p></div>'+
    '<div><span class="lab kick" data-r>Cortisol unaffected</span><p data-r>No effect on serum cortisol, a sensitive marker of systemic steroid toxicity, at doses up to 12 mg/kg in healthy participants.</p></div>'+
    '<div><span class="lab kick" data-r>Backed by</span><p data-r>ARCH Venture Partners, 5AM Ventures, Atlas Venture and Sanofi Ventures.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How LFD-200 works</span><h2 class="d3">One antibody, <em>a steroid inside.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bind</span><span>Internalize</span><span>Persist</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It finds VISTA.</h2><p>LFD-200 binds VISTA, a protein selectively and highly expressed on the surface of immune cells, including myeloid cells, T cells and plasma B cells. The antibody has no other biological function.</p></article>'+
     '<article class="step"><h2>It goes inside.</h2><p>VISTA internalizes rapidly, so the bound conjugate is drawn into the cell. Its glucocorticoid payload accumulates in lysosomes and is released inside the immune cell, where it acts.</p></article>'+
     '<article class="step"><h2>Gone from blood, still at work.</h2><p>The ADC clears serum in about 30 hours, not the days typical of many ADCs, while the freed payload stays in immune tissue for two weeks or more. Little drug is left circulating to cause systemic toxicity.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One target, <em>many payloads.</em></h2></div><p data-r>LFD-200 is in Phase 1. Behind it, Lifordi is using the same VISTA targeting to carry antisense oligonucleotides, siRNAs and small-molecule inhibitors to immune cells.</p></div>'+
   pipe(PIPE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Experienced <em>drug developers.</em></h2></div><p data-r>Immunologists, clinicians and ADC manufacturing specialists with a strong partnering track record, from Shire, Homology Medicines, Intellia, Aligos and Magenta.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">The latest <em>from Lifordi.</em></h2></div><p data-r>Clinical data, financing and coverage of LFD-200 and the platform behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and press</span>'+
   '<h2 class="big split">Let’s talk <em>targeted delivery.</em></h2>'+
   '<p class="sub" data-r>Many opportunities exist to develop ADCs with diverse payloads that control immune cell function. If you’d like to discuss a partnership, or sign up for news alerts, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology" data-to="story">How LFD-200 works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r><span>1 Van de Graaff Drive, Suite 400</span><br><span>Burlington, MA 01803</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="'+CT+'" target="_blank" rel="noopener">NCT07207954</a><br><span>LFD-200 in rheumatoid arthritis</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Burlington,<br>Massachusetts</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Programmes</span>LFD-200 · Phase 1<br>ASO ADC · lead optimization</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Oswald\',\'Jost\',sans-serif;font-weight:500;font-size:68px;letter-spacing:.22em" fill="#f4f2ea">LIF<tspan fill="#f0af1b">O</tspan>RDI</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Lifordi Immunotherapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Lifordi Immunotherapeutics — antibody-drug conjugates for autoimmune disease",x:"Home"};
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
