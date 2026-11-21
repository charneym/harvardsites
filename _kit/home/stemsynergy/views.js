/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){var last="";return '<ul class="pfr">'+PROG.map(function(c){var pw=c[2]!==last;last=c[2];
  return '<li'+(pw?' class="pw"':'')+'><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><div class="pd"><p class="pind">'+esc(c[3])+'</p>'+(c[5]?'<p>'+esc(c[5])+'</p>':'')+'</div><span class="lab stg">'+esc(c[4])+'</span></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Small-molecule cancer therapeutics<span class="nomob"> · Miami, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Drugs for cancer’s</span><span class="l"><em>undrugged</em></span><span class="l"><em>pathways.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>StemSynergy discovers and develops first-in-class small molecules against Wnt, Notch and Myc, signaling pathways fundamental to cancer and to the stem cells that sustain it, for greater efficacy and minimal toxicity.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">Explore the science '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
   '<p class="lab hcap" data-r>β-catenin (grey) holding BCL9 (red) and TCF4 (white), atom by atom from its crystal structure (PDB 2GL7). SSTB-178 is designed to break the β-catenin–BCL9 contact.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About StemSynergy</span>'+
   '<h2 class="txt" id="mani">Wnt, Notch and Myc drive cancer and its stem cells, and have long resisted drugs. StemSynergy builds first-in-class molecules against them, <em>designed to spare healthy tissue.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$15.6M</span><p class="k">In NIH SBIR and STTR awards across 24 grants since 2010, most recently from the NCI in September 2026</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><p class="k">Lead series in the preclinical pipeline, across the Wnt, Notch and Myc pathways</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%+</span><p class="k">Of colorectal cancers carry constitutively active WNT signaling</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Wnt</span><p data-r>CK1α activators that restore the destruction of β-catenin, and inhibitors of the β-catenin transcriptional complex, for colorectal cancer, FAP and other WNT-driven cancers.</p></div>'+
    '<div><span class="lab kick" data-r>Notch</span><p data-r>Notch1-selective inhibitors that block assembly of the Notch transcription complex, without the gut toxicity typical of pan-Notch inhibition.</p></div>'+
    '<div><span class="lab kick" data-r>Myc</span><p data-r>Small-molecule degraders for cancers driven by c-Myc and N-Myc, a target that has long been considered undruggable.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science · Wnt program</span><h2 class="d3">Cutting the signal <em>at two nodes.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Healthy</span><span>Mutation</span><span>Nucleus</span><span>SSTI</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>β-catenin is made, then destroyed.</h2><p>Without a Wnt signal, a destruction complex of CK1α, GSK3, APC and AXIN tags β-catenin for degradation as fast as the cell makes it.</p></article>'+
     '<article class="step"><h2>A broken APC lets it build up.</h2><p>Mutations in APC, or in β-catenin itself, stop the destruction. Over 90% of colorectal cancers have constitutively active WNT signaling.</p></article>'+
     '<article class="step"><h2>In the nucleus, growth switches on.</h2><p>β-catenin moves into the nucleus and, with partners such as BCL9 and TCF, switches on the WNT transcriptional program that supports cancer and its stem cells.</p></article>'+
     '<article class="step"><h2>Two first-in-class answers.</h2><p>SSTI’s CK1α activators restart the destruction of β-catenin and lower Pygopus2 in the nucleus. Its SSTB-178 series breaks the β-catenin–BCL9 contact on which Wnt-driven cancers depend.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Seven lead series, <em>three pathways.</em></h2></div><p data-r>Through SSTI chemistry, a series of potent modulators of key signaling pathways that reduce tumor burden in vivo. Because their mechanisms and cellular targets are new, they represent first-in-class agents for cancer treatment.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Expanded access</span><p class="cr" data-r><span>Applications are open for Expanded Access Protocols in an upcoming clinical trial for patients with Wnt- and Notch-dependent cancers.</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by the scientists <em>who mapped these pathways.</em></h2></div><p data-r>The four founders hold faculty positions at major medical centers, with decades of research on Wnt, Notch and Myc. The SSTI team brings medicinal chemistry, drug development and cancer biology.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, results <em>and access.</em></h2></div><p data-r>In September 2026 the National Cancer Institute funded the next stage of SSTI’s Wnt inhibitor program for colorectal cancer.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Patients, partners and investors</span>'+
   '<h2 class="big split">Targeting the roots <em>of cancer.</em></h2>'+
   '<p class="sub" data-r>To ask about eligibility for the Expanded Access Protocols, a research partnership or an investment, write to StemSynergy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+RP26+'" target="_blank" rel="noopener">The 2026 NCI award</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters and R&amp;D</span><p data-r>StemSynergy Therapeutics, Inc.<br>1951 NW 7th Avenue, Suite 300<br>Miami, FL 33136</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+13056001048">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>1951 NW 7th Avenue, Suite 300<br>Miami, FL 33136</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+13056001048">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Wnt, Notch and Myc<br>small-molecule therapeutics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="62" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:300;font-size:76px;letter-spacing:.02em"><tspan fill="#f1f3f4">StemSynergy</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 StemSynergy Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"StemSynergy Therapeutics — first-in-class drugs for cancer’s undrugged pathways, Miami",x:"Home"};
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
