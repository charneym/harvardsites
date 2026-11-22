/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function studyRows(list){return '<ul class="pfr cs">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[1])+'</b><i>'+esc(c[2])+'</i></span><h3>'+esc(c[0])+'</h3>'+
   '<p>'+esc(c[3])+'</p><a class="lab lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[4])+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Biomimetic cell rolling","The chip surface mimics the way tumour cells interact with blood vessel walls. Cells roll instead of rushing past, which slows them and enriches them inside the flow chamber.",'<path d="M4 44h48"/><circle cx="22" cy="30" r="12"/><path class="a" d="M14 22a11 11 0 0 1 14-3M36 30h12M44 26l4 4-4 4"/><path d="M8 44v-4M16 44v-4M24 44v-4M32 44v-4M40 44v-4M48 44v-4"/>'],
  ["Dendrimer-mediated capture","Capture antibodies are carried on dendrimers, so many bind a cell at once. That multivalent grip holds tumour cells from the rolling population with high specificity and high capture efficiency.",'<path d="M4 46h48"/><circle cx="28" cy="20" r="12"/><path class="a" d="M16 46v-8l-3-4M16 38l3-4M28 46v-10l-3-4M28 36l3-4M40 46v-8l-3-4M40 38l3-4"/><circle class="f" cx="16" cy="44" r="2.6"/><circle class="f" cx="28" cy="44" r="2.6"/><circle class="f" cx="40" cy="44" r="2.6"/>'],
  ["Count them, or recover them","Captured cells can be stained for fluorescence imaging and enumeration (DAPI+/CK+/CD45−), or recovered for molecular analysis such as FISH, RNA-Seq and NGS. Capture antibodies can be changed for other target cells.",'<circle cx="28" cy="28" r="17"/><circle class="f" cx="28" cy="28" r="6"/><circle cx="28" cy="28" r="11"/><path class="a" d="M45 11l6-6M47 5h4v4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Liquid biopsy<span class="nomob"> · Oncology diagnostics</span> · Madison, Wisconsin</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Finding the cells</span><span class="l">that cancer</span><span class="l"><em>leaves in the blood.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Capio Biosciences develops CapioCyte, an ultra-sensitive platform that captures circulating tumor cells from whole blood by biomimetic cell rolling and dendrimer-mediated multivalent capture.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/studies">Clinical studies</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Clinical need</span>'+
   '<h2 class="txt" id="mani">Circulating tumor cells are robust biomarkers that may help oncologists make more informed treatment decisions. But today’s capture technologies may not be sensitive enough to realise their potential. We built one that is, to <em>improve cancer patient outcomes.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–100&times;</span><p class="k">Greater sensitivity in clinical samples than previously published data from other platforms</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">43</span><p class="k">Patients in a prospective study of CTC kinetics during radiation therapy (2023)</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2015</span><p class="k">Founded in Madison, Wisconsin; a second company, Capio Biosciences Korea</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Inside the CapioCyte flow chamber</span><h2 class="d3">Slow them down, <em>then hold on.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Roll</span><span>Capture</span><span>Analyse</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tumour cells start to roll.</h2><p>A blood sample passes through the flow chamber at a precisely controlled rate. On the treated chip surface, tumour cells roll as they would along a blood vessel wall, slowing down and gathering in the chamber.</p></article>'+
     '<article class="step"><h2>Dendrimers hold them fast.</h2><p>Capture antibodies on dendrimers bind each rolling tumour cell many times over. The captured cells stay on the chip while leukocytes are washed away.</p></article>'+
     '<article class="step"><h2>Every cell can be read.</h2><p>Captured cells are stained and imaged: DAPI-positive, cytokeratin-positive and CD45-negative cells are counted as CTCs. Or they are recovered intact for RNA-Seq, FISH and NGS.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Two ideas, <em>one chip.</em></h2></div><p data-r>CapioCyte uses proprietary chips inserted into a specially designed flow chamber. It combines biomimetic cell rolling with dendrimer-mediated multivalent capture to deliver high specificity and high capture efficiency of circulating tumor cells from whole blood.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="studies" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Clinical studies</span><h2 class="d2 split">CTCs, counted <em>through treatment.</em></h2></div><p data-r>With academic partners, the CapioCyte approach has followed patients’ circulating tumor cells before, during and after cancer therapy, across radiation, chemoradiation, targeted therapy and immunotherapy.</p></div>'+
   studyRows(STUDY)+
   '<p class="note-s" data-r>The CapioCyte System is currently under development and not for use in diagnostic procedures. Earlier development was supported by an NIH SBIR grant (2018) and by the Korea-Israel (KORIL) Industrial R&amp;D Foundation (2023).</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Nanomedicine meets <em>oncology.</em></h2></div><p data-r>Founded in 2015 by a pharmaceutical scientist at the University of Wisconsin–Madison and a radiation oncologist, with advisors from MIT, Dana-Farber, Duke and the UW Carbone Cancer Center.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, funding <em>and milestones.</em></h2></div><p data-r>Recent publications, partnerships and news from Madison and from Capio Biosciences Korea.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Collaborations and partnerships</span>'+
   '<h2 class="big split">Talk to <em>Capio.</em></h2>'+
   '<p class="sub" data-r>If you need more information, or are interested in a research collaboration or partnership, we are here to help.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="https://www.linkedin.com/company/capio-biosciences/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Madison</span><p data-r>Capio Biosciences, Inc.<br>505 S. Rosa Road, Suite 10C<br>Madison, WI 53719, USA</p></div>'+
    '<div><span class="lab" data-r>Korea</span><p data-r>Capio Biosciences Korea<br>Libertas Hall B422, 85 Songdogwahak-ro<br>Yeonsu-gu, Incheon 21983</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@capiobiosciences.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>505 S. Rosa Road, Suite 10C<br>Madison, WI 53719</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@capiobiosciences.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/studies">Studies</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>CapioCyte · circulating tumor cell capture</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="76" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:800;font-size:84px;letter-spacing:.04em">CAPIO</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Capio Biosciences, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",mechanism:"story",studies:"studies",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Capio Biosciences — ultra-sensitive capture of circulating tumor cells",x:"Home"};
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
