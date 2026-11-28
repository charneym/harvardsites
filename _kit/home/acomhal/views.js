/* ================= VIEWS (home only; nav items scroll to sections, build-out pages via the kit's buildout module) =================
   Sources: acomhal.com (home, About Us leadership list, Our Research, the six indication pages, the footer address and
   email) and NIH RePORTER projects 1R41CA306619-01A1, 1R41CA250874-01 and 1R41CA217503-01 (abstracts, amounts, dates,
   and Samy Lamouille as principal investigator). The hero model is PDB 7F94, credited on the page. Nothing else is claimed. */
function caps(){var C=[
  ["The cells that survive","<span class=\"nw\">Recurrence has</span> <span class=\"nw\">a source</span>","Glioblastoma comes back from a therapy-resistant subpopulation of glioblastoma stem cells, which evade chemotherapy and radiotherapy and then regenerate the tumour mass.",'<circle cx="28" cy="28" r="18"/><circle class="a" cx="28" cy="28" r="6"/>'],
  ["A second job for Cx43","<span class=\"nw\">Not the channel,</span> <span class=\"nw\">the tail</span>","We identified a tumour-promoting role for connexin43 that has nothing to do with its channel: its cytoplasmic tail binds microtubules inside the cell.",'<path d="M8 28h40"/><path class="a" d="M14 18v20M24 18v20M34 18v20M44 18v20"/>'],
  ["JM2","<span class=\"nw\">A peptide that</span> <span class=\"nw\">breaks the grip</span>","JM2 is a connexin43 mimetic peptide that disrupts that interaction and specifically kills glioblastoma stem cells, leaving normal brain cells unaffected.",'<path d="M10 38C18 20 38 20 46 38"/><path class="a" d="M24 14L32 42"/>'],
  ["No approved option","<span class=\"nw\">Nothing targets</span> <span class=\"nw\">them today</span>","There are no FDA-approved therapies that specifically target glioblastoma stem cells, and median survival remains about fourteen months with standard of care.",'<path d="M12 12L44 44M44 12L12 44"/><circle class="a" cx="28" cy="28" r="18"/>']];
  return '<div class="caps c4">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+c[0]+'</span><h3 data-r>'+c[1]+'</h3><p data-r>'+c[2]+'</p></div>'}).join("")+'</div>'}
function svc(){var S=[
  ["Deliver the peptide where it is needed","The Phase I question is delivery: an alphavirus vector that expresses the connexin43 mimetic peptide inside the tumour, rather than dosing the peptide itself."],
  ["Show it reaches the stem cells","Our preliminary data show JM2 reduces glioblastoma stem cell populations in vivo in patient-derived models."],
  ["Keep normal brain cells out of it","Selectivity is the point. JM2 kills the resistant stem cell population without affecting normal brain cells."],
  ["Build toward a therapy for recurrence","Glioblastoma recurs in essentially every patient. A treatment that removes the cells driving recurrence is what the programme is for."]];
  return '<ul class="svl">'+S.map(function(s,i){return '<li data-r><span class="lab ix">0'+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'}
function team(){var T=[
  ["Samy Lamouille, PhD","Principal investigator on the NCI awards"],
  ["Robert Gourdie, PhD","Leadership"],
  ["Craig T. Ramey, PhD","Leadership"],
  ["Kevin Bloomfield","Leadership"],
  ["Ralph Whatley, MD","Leadership"]];
  return '<ul>'+T.map(function(t){return '<li data-r><span class="nm">'+esc(t[0])+'</span><span class="lab rl">'+esc(t[1])+'</span></li>'}).join("")+'</ul>'}
function pipeline(){var P=[
  ["Glioblastoma","Lead","Our peptide has been shown to target and eliminate aggressive, chemo-resistant glioblastoma cells in in vitro and in vivo studies."],
  ["Breast cancer","Research","A connexin43 mimetic was studied for the inhibition of breast cancer cell metastases under an earlier NCI award."],
  ["Lung, colon, pancreatic, melanoma","Research","The same approach is aimed at other aggressive, chemo-resistant cancers listed in our research programme."]];
  return '<ol class="hst">'+P.map(function(p){return '<li data-r><span class="yr">'+esc(p[1])+'</span><p><strong>'+esc(p[0])+'.</strong> '+esc(p[2])+'</p></li>'}).join("")+'</ol>'}
function news(){return '<ul class="nws news-l">'+NEWS.map(function(n){
  return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero.webp" width="700" height="494" alt="Space-filling model of a connexin43 gap junction channel from cryo-EM structure PDB 7F94, two connexons docked end to end" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>Treatment-resistant cancer<span class="nomob"> · Roanoke, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l nw">The tumour grows back</span> <span class="l"><em class="nw">from what is left.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Acomhal Research is developing JM2, a connexin43 mimetic peptide that kills the glioblastoma stem cells chemotherapy and radiation leave behind, without touching normal brain cells.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="intro" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why recurrence</span>'+
   '<h2 class="txt" id="mani"><span class="nw">Surgery, radiation</span> <span class="nw">and chemotherapy</span> <span class="nw">take the tumour.</span> <em><span class="nw">They leave the cells</span> <span class="nw">that know how</span> <span class="nw">to rebuild it.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~14 mo</span><p class="k">median survival in glioblastoma, despite standard-of-care treatment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">None</span><p class="k">FDA-approved therapies that specifically target glioblastoma stem cells</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$400k</span><p class="k">NCI STTR Phase I award, September 2026, for vector-delivered JM2</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How JM2 works</span><h2 class="d3"><span class="nw">Break one grip,</span> <em class="nw">lose one cell.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Resist</span><span>Bind</span><span>Disrupt</span><span>Clear</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">The stem cells</span> <span class="nw">survive treatment.</span></h2><p>A subpopulation of glioblastoma stem cells evades chemotherapy and radiotherapy, then regenerates the tumour mass. No approved therapy targets them.</p></article>'+
     '<article class="step"><h2><span class="nw">Connexin43 holds</span> <span class="nw">the microtubules.</span></h2><p>Inside those cells, the cytoplasmic tail of connexin43 binds microtubules. This role is channel-independent: it is not about what passes between cells.</p></article>'+
     '<article class="step"><h2><span class="nw">JM2 takes</span> <span class="nw">that place.</span></h2><p>JM2, a connexin43 mimetic peptide, disrupts the interaction between the tail and the microtubule, and the stem cell cannot maintain it.</p></article>'+
     '<article class="step"><h2><span class="nw">The resistant cells</span> <span class="nw">go, the rest stay.</span></h2><p>JM2 specifically kills glioblastoma stem cells without affecting normal brain cells, and reduced stem cell populations in vivo in patient-derived models.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The science</span><h2 class="d2 split"><span class="nw">A protein doing</span> <em class="nw">a second job.</em></h2></div><p data-r>Connexin43 is known for the channels it forms between cells. We found it doing something else in glioblastoma stem cells, inside the cell, and that is what JM2 interrupts.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Shown so far</span><p class="cr" data-r><span>Kills glioblastoma stem cells in vitro</span><span>Reduces them in vivo in patient-derived models</span><span>Spares normal brain cells</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="programme" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programme</span><h2 class="d2 split"><span class="nw">The next question</span> <em class="nw">is delivery.</em></h2></div><p data-r>The current NCI award funds an alphavirus vector that expresses the peptide inside the tumour, rather than dosing the peptide itself.</p></div>'+
   svc()+
   '<div class="trn" data-r><span class="lab kick">Partnering and investment</span><p>We are a preclinical-stage biopharmaceutical company developing targeted therapies for treatment-resistant cancers, and we are glad to hear from partners and investors.</p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split"><span class="nw">Glioblastoma first,</span> <em class="nw">then the rest.</em></h2></div><p data-r>The lead programme is glioblastoma. The same connexin43 approach has been studied in breast cancer under an earlier award, and our research programme lists other aggressive, chemo-resistant cancers.</p></div>'+
   '<div class="engco">'+
    '<div class="engm"><span class="lab kick" data-r>Leadership</span>'+team()+'</div>'+
    '<div class="engpol"><span class="lab kick" data-r>Where the work is</span>'+pipeline()+'</div></div>'+
   '<div class="qual"><span class="lab kick" data-r>Based in</span><p class="cr" data-r><span>Roanoke, Virginia</span><span>Preclinical stage</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Funding and sources</span><h2 class="d2 split"><span class="nw">Three awards,</span> <em class="nw">one idea.</em></h2></div><p data-r>The NCI awards behind this work, newest first, and the published structure this page draws on. Each item links to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Partnering,</span> <em class="nw">or want the data?</em></h2>'+
   '<p class="sub" data-r>Email us about the glioblastoma programme, the vector work, or investment.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Acomhal '+ARR+'</a><a class="btn" href="#/programme">See the programme</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span>Acomhal Research, Inc.</span><br><span>709 S Jefferson Street</span><br><span>Roanoke, Virginia 24016</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Hero model</span><p data-r><span>PDB 7F94, a connexin43 channel</span><br><span>Lee, Cha et al., Nat Commun 2023</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>Acomhal Research, Inc., 709 S Jefferson Street, Roanoke, Virginia 24016</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">The science</a><br><a class="ul" href="#/programme">Programme</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/news">Funding</a></div>'+
   '<div class="c"><span class="lab">Advancing care, inspiring hope</span>Targeted therapies for treatment-resistant cancers.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Source Sans 3\',Arial,sans-serif;font-weight:600;font-size:54px;letter-spacing:.01em">Acomhal Research</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Acomhal Research, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={intro:"intro",story:"story",science:"science",programme:"programme",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Acomhal Research — A peptide that kills the cells chemotherapy leaves behind",x:"Home"};
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
