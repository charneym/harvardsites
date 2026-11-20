/* ================= VIEWS (home only; nav items open #/more/<item> build-out pages, home CTAs scroll) ================= */
function asRows(list){return '<ul class="asr">'+list.map(function(a){return '<li><span class="v">'+esc(a[2])+'</span><span class="lab k">'+esc(a[1])+'</span><h3>'+esc(a[0])+'</h3><p>'+esc(a[3])+'</p></li>'}).join("")+'</ul>'}
function flow(list){return '<ol class="flw">'+list.map(function(f,i){return '<li><span class="lab n">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(f[0])+'</h3><p>'+esc(f[1])+'</p></li>'}).join("")+'</ol>'}
function mileRows(list){return '<ul class="mlr">'+list.map(function(m){return '<li><span class="yr">'+esc(m[0])+'</span><p>'+esc(m[1])+'</p></li>'}).join("")+'</ul>'}
function ppl(list){return '<ul class="ppt">'+list.map(function(p){return '<li><span class="lab rl">'+esc(p.title)+'</span><h3>'+esc(p.name)+'</h3><p>'+esc(p.note)+'</p></li>'}).join("")+'</ul>'}
function nwRows(list){return '<ul class="nwr">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><span class="lab ty">'+esc(n[1])+'</span><h3>'+esc(n[2])+'</h3>'+ARRX+'</a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Life science<span class="nomob"> · Research Triangle Park, North Carolina</span> · Since 2001</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Many pathways.</span><span class="l"><em>One well.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Attagene’s patented FACTORIAL™ technology measures the activities of dozens of transcription factors and nuclear receptors in live cells, in a single assay, for drug development, toxicity testing and water safety.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How FACTORIAL works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Gene regulatory networks, in profile</span>'+
   '<h2 class="txt" id="mani">A cell answers its environment through the transcription factors that relay signals to its DNA. Measure them together, and you <em>read the cell’s response.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">90+</span><span class="k">Transcription factor families profiled by cis-FACTORIAL™</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">48</span><span class="k">Human nuclear receptors covered by trans-FACTORIAL™</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3,500+</span><span class="k">ToxCast™ compounds evaluated for the U.S. EPA</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>One well, many endpoints</span><p data-r>Simultaneous assessment of multiple endpoints in a single well of cells eliminates intra-assay variation and gives robust, highly reproducible activity profiles.</p></div>'+
    '<div><span class="lab kick" data-r>Validated at scale</span><p data-r>An assay provider to the U.S. Environmental Protection Agency’s ToxCast™ program since 2007, run in a high-throughput GLP facility.</p></div>'+
    '<div><span class="lab kick" data-r>Signatures that mean something</span><p data-r>Having evaluated thousands of compounds, Attagene found robust molecular signatures specifically associated with distinct biological activities.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The FACTORIAL™ platform</span><h2 class="d3">Identical reporters, <em>one readout.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Library</span><span>Signal</span><span>Digest</span><span>Profile</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A library of reporters.</h2><p>Each reporter transcription unit has a promoter specific to one transcription factor. All carry the same reporter sequence, differing only by the position of an HpaI site.</p></article>'+
     '<article class="step"><h2>The cell writes the result.</h2><p>Introduced into cells and exposed to a compound, each unit is transcribed as strongly as its transcription factor is active. The spectrum of reporter RNAs mirrors the network.</p></article>'+
     '<article class="step"><h2>One cut sorts them all.</h2><p>Reporter RNAs are amplified by RT-PCR, fluorescently labelled and digested by HpaI. Capillary electrophoresis resolves the fragments by length, each as its own peak.</p></article>'+
     '<article class="step"><h2>A signature, in profile.</h2><p>Peak intensities are proportional to transcription factor activity. Together they form the compound’s signature, plotted as a radial ATTAGRAPH™.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="assays" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The FACTORIAL™ assays</span><h2 class="d2 split">A family of assays, <em>one platform.</em></h2></div><p data-r>Built on the FACTORIAL™ platform and validated over years of contract research for biopharmaceutical companies, academia and regulatory agencies.</p></div>'+
   asRows(ASSAYS)+
  '</div></section>'+

  '<section class="sec dark" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Screening services</span><h2 class="d2 split">From study design <em>to signature.</em></h2></div><p data-r>The FACTORIAL™ assays are available through Attagene’s screening services for drugs, environmental chemicals, natural products and water samples. We assist customers in study design, data analysis and interpretation.</p></div>'+
   flow(FLOW)+
   '<div class="act svc-act" data-r><a class="btn solid" href="mailto:'+MAIL+'?subject=FACTORIAL%20screening%20services">Discuss a study '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="water" data-theme="light"><div class="wrap wsplit">'+
   '<div><span class="lab kick" data-r>Now in development · NIH NIEHS SBIR Phase II</span><h2 class="d2 split">Water safety, measured <em>by its biology.</em></h2></div>'+
   '<div class="wtx"><p data-r>Conventional water testing looks for a few known contaminants. WASANET, Attagene’s two-tier effect-based surveillance system, uses a high-throughput FACTORIAL assay to score the overall bioactivity of a water sample as an Aggregate Response Index.</p>'+
   '<p data-r>Tier I triages sources quickly to find hot spots. Tier II pairs the assay with targeted chemical analysis to pinpoint the contaminants driving the bioactivity. A prototype is being deployed with water authorities and researchers in California, North Carolina and Iowa.</p>'+
   '<a class="ul lk" data-r href="https://reporter.nih.gov/project-details/11261701" target="_blank" rel="noopener">Grant 1R44ES038062 on NIH RePORTER</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="milestones" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Milestones</span><h2 class="d2 split">Twenty-five years of <em>signal.</em></h2></div><p data-r>From the first FACTORIAL™ reporter systems to the EPA’s ToxCast™ program, a White House Tibbetts Award and new NIH programmes.</p></div>'+
   mileRows(MILE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leadership</span><h2 class="d2 split">The scientists behind <em>the signatures.</em></h2></div><p data-r>Attagene’s team has developed the FACTORIAL™ platform over more than two decades, in collaboration with the U.S. EPA, NIH-funded consortia and industry partners.</p></div>'+
   ppl(TEAM)+
   '<figure class="qt"><blockquote data-r>“Traditional genetic approaches deduce the bioactivity of chemicals by assessing changes in gene expression. … Instead, we assessed the cellular signaling pathways that regulate gene expression. As there are fewer pathways than genes, these signatures are easy to interpret.”</blockquote><figcaption class="lab" data-r>Dr. Sergei Makarov, 2018</figcaption></figure>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, papers <em>and awards.</em></h2></div><p data-r>Recent announcements and publications from Attagene.</p></div>'+
   nwRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Pharma, academia, regulators and water authorities</span>'+
   '<h2 class="big split">Profile your compounds <em>with us.</em></h2>'+
   '<p class="sub" data-r>Attagene provides research services for industry, academia and regulatory agencies. Tell us about your compounds or samples, and we will help design the study.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Attagene '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Laboratory</span><p data-r>Attagene, Inc.<br>7020 Kit Creek Road, Suite 260<br>Morrisville, NC 27560</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Mailing address</span><p data-r>Attagene, Inc.<br>PO Box 12054<br>RTP, NC 27709</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Local <a class="ul" href="'+TELH+'">'+TEL+'</a><br>Toll free <a class="ul" href="'+TFREEH+'">'+TFREE+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Laboratory</span>7020 Kit Creek Road, Suite 260<br>Morrisville, NC 27560</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/technology">Technology</a><br><a class="ul" href="#/more/services">Services</a><br><a class="ul" href="#/more/milestones">Milestones</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Signal transduction<br>Transcription factors<br>Drug discovery</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="54" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:500;font-size:64px;letter-spacing:.14em">ATTAGENE</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Attagene, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={technology:["Technology","technology"],services:["Services","services"],milestones:["Milestones","milestones"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",technology:"story",assays:"assays",services:"services",water:"water",milestones:"milestones",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Attagene",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Attagene — Transcription factor profiling in live cells, Research Triangle Park",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"",location.hash==="#/"?"#/":"#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
