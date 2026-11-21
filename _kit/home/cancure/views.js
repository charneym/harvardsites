/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  (ADVISORS.length?'<div class="adv"><span class="lab kick" data-r>Advisors</span><p data-r>'+ADVISORS.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>':'')}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>First-in-class cancer immunotherapeutics<span class="nomob"> · Washington</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Revive the immune</span><span class="l">cells <em>cancer silences.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CanCure, doing business as CanZx Biotherapeutics, develops immunotherapies that restore patients’ own NK and T cells against cancer. Its lead antibody, CZX-11, targets sMIC, a molecule tumours shed to switch those cells off.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>An IgG antibody, atom by atom: the first intact IgG crystal structure (PDB 1IGT). CZX-11 is a humanized antibody of this class.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Many tumours cut a stress signal called MIC from their surface and release it as sMIC, which wears down the NK and CD8 T cells sent to kill them. CanCure’s antibody clears sMIC and <em>puts those cells back to work.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2.2M</span><span class="k">National Cancer Institute SBIR and STTR funding since 2016, per NIH RePORTER</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 mg/kg</span><span class="k">Dose at which CB-10 worked as a single agent in the company’s mouse studies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><span class="k">Programmes: the lead antibody, an NK cell therapy partnership and a new cell-expansion agent</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Two targets, one antibody</span><p data-r>CZX-11 binds the soluble sMIC that circulates in patients and the MIC that stays on tumour cells.</p></div>'+
    '<div><span class="lab kick" data-r>Built to combine</span><p data-r>In published preclinical work, clearing sMIC let sMIC-positive tumours respond to PD-1/PD-L1 blockade and enhanced CTLA-4 blockade.</p></div>'+
    '<div><span class="lab kick" data-r>Ready for cell therapy</span><p data-r>CanCure is extending the approach to NK cell therapy with CHA Biotech, and to the expansion of NK and CD8 T cells.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Take away the decoy, <em>free the killers.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Shed</span><span>Silence</span><span>Clear</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tumours shed their own alarm.</h2><p>Stressed and cancerous cells carry MIC, a signal that NK and CD8 T cells recognise through their NKG2D receptor. Many tumours cut MIC off their surface and release it into the blood as soluble MIC, or sMIC.</p></article>'+
     '<article class="step"><h2>sMIC wears the defenders down.</h2><p>Free sMIC engages the immune cells away from the tumour. Over time it impairs NK cell survival and function and blunts the CD8 T cells that checkpoint drugs rely on.</p></article>'+
     '<article class="step"><h2>CZX-11 clears it away.</h2><p>CanCure’s antibody binds sMIC and clears it, and also targets MIC left on tumour cells. In preclinical models, NK and CD8 T cells recovered and tumours were eliminated.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One target, <em>three ways in.</em></h2></div><p data-r>All of CanCure’s programmes are preclinical. Each is supported by a National Cancer Institute award or a partner agreement.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Work with</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built on <em>the science of sMIC.</em></h2></div><p data-r>CanCure was co-founded by Jennifer D. Wu, Ph.D. These are the scientists named on the company’s National Cancer Institute awards.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From an NCI grant <em>to a cell-therapy partner.</em></h2></div><p data-r>CanCure’s research has been supported by the National Cancer Institute since 2016.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Help bring CZX-11 <em>to patients.</em></h2>'+
   '<p class="sub" data-r>CanCure works from Shoreline, Washington, with an Illinois office in Chicago. To talk about a partnership, licensing or investment, write to the team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Washington</span><p data-r>CanCure, LLC<br>1531 NE 172nd St.<br>Shoreline, WA 98155</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Illinois</span><p data-r>680 N. Lake Shore Dr., Unit 1203<br>Chicago, IL 60611</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Washington</span>1531 NE 172nd St.<br>Shoreline, Washington 98155</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Doing business as</span>CanZx Biotherapeutics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'IBM Plex Sans\',system-ui,sans-serif;font-weight:600;font-size:80px;letter-spacing:-.01em"><tspan fill="#f2f5f9">Can</tspan><tspan fill="#5fa8f0">Cure</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CanCure, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CanCure — first-in-class cancer immunotherapeutics, Washington",x:"Home"};
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
