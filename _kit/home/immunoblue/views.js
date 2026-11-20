/* ================= VIEWS (home only; nav items open #/more/<item> build-out pages, Contact scrolls) ================= */
function pgRows(list){return '<ul class="pfr">'+list.map(function(c){
  return '<li><span class="lab tg"><b class="on">'+esc(c[1])+'</b></span><h3><a class="pfl" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[0])+'</a></h3><p>'+esc(c[2])+'</p><p class="st">'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function mhList(list){var gs=[],by={};list.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function nwRows(list){return '<ul class="nwr">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><span class="lab ty">'+esc(n[1])+'</span><h3>'+esc(n[2])+'</h3>'+ARRX+'</a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Nanoimmunotherapies<span class="nomob"> · Cell therapy</span> · Baltimore, Maryland</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Engineered</span><span class="l">nanoimmunotherapies</span><span class="l">for <em>cancer.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ImmunoBlue engineers novel nanoimmunotherapies by combining the principles of nanotechnology and immunotherapy to treat cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How IB-T cells work '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Nanomedicine meets immunotherapy</span>'+
   '<h2 class="txt" id="mani">Light-activated nanoparticles turn a patient’s own tumor into the instructions for their T cells: <em>personalized, multi-targeted and tumor-specific.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">7.1%</span><span class="k">Five-year relative survival in glioblastoma, the most common primary brain tumor</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">n=6</span><span class="k">Patients whose cells yielded glioblastoma-specific IB-T cells in STTR Phase I</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><span class="k">Awarded US patents, with two more applications pending</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How IB-T cells are made</span><h2 class="d3">From the tumor, <em>for the patient.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Surgery</span><span>Light</span><span>Expand</span><span>Return</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It starts with the tumor itself.</h2><p>Tumor cells are taken from the patient during standard-of-care surgery.</p></article>'+
     '<article class="step"><h2>Light turns the tumor into a signal.</h2><p>Prussian blue nanoparticles and a laser deliver photothermal therapy. It causes immunogenic cell death, releasing tumor antigens and immune adjuvants.</p></article>'+
     '<article class="step"><h2>Many targets at once.</h2><p>With the patient’s own dendritic cells, those antigens expand personalized tumor-specific IB-T cells, without choosing a single antigen in advance.</p></article>'+
     '<article class="step"><h2>Back to the tumor bed.</h2><p>For a Phase 1 trial, ImmunoBlue envisions giving IB-T cells as an adjuvant therapy directly into the tumor bed, through an Ommaya reservoir, after surgery.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Personalized, multi-targeted, <em>tumor-specific T cells.</em></h2></div><p data-r>ImmunoBlue harnesses the advantages of nanomedicine and immunotherapy for treating brain malignancies and other solid tumors, for use in autologous adoptive T cell therapy.</p></div>'+
   '<dl class="facts">'+TECH.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="program" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">From preclinical validation to <em>clinical readiness.</em></h2></div><p data-r>The STTR Phase II program addresses GMP manufacturing, efficacy and safety testing as ImmunoBlue prepares an IND application with the FDA.</p></div>'+
   pgRows(PG)+
   '<div class="cred"><span class="lab kick" data-r>Funded and partnered with</span><p data-r><span>National Cancer Institute, NIH</span><span>The George Washington University</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Nanomedicine, immunoengineering and <em>drug development.</em></h2></div><p data-r>The executive team has deep domain expertise in nanomedicine, immunoengineering and drug development for oncology, with advisors across neurosurgery, neuro-oncology and cell therapy.</p></div>'+
   mhList(PEOPLE)+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and research</span><h2 class="d2 split">Awards and <em>publications.</em></h2></div><p data-r>NIH funding for the IB-T program and selected peer-reviewed work from the ImmunoBlue team.</p></div>'+
   nwRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, clinicians and partners</span>'+
   '<h2 class="big split">Toward a Phase 1 trial <em>for glioblastoma.</em></h2>'+
   '<p class="sub" data-r>ImmunoBlue and George Washington University are taking IB-T cells from preclinical validation to clinical readiness. Want to get in touch? Write to the team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email ImmunoBlue '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>ImmunoBlue, LLC<br>Baltimore, Maryland 21201</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Policy</span><p data-r><a class="ul" href="'+FCOI+'" target="_blank" rel="noopener">Financial conflict of interest policy</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>ImmunoBlue, LLC<br>Baltimore, Maryland</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="'+FCOI+'" target="_blank" rel="noopener">FCOI policy</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/technology">Technology</a><br><a class="ul" href="#/more/program">Program</a><br><a class="ul" href="#/more/publications">IP &amp; Publications</a><br><a class="ul" href="#/more/team">Team</a></div>'+
   '<div class="c"><span class="lab">ImmunoBlue</span>Engineered<br>nanoimmunotherapies<br>for cancer.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="54" text-anchor="middle" style="font-family:\'Hanken Grotesk\',system-ui,sans-serif;font-weight:600;font-size:76px;letter-spacing:-.01em">ImmunoBlue</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ImmunoBlue, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={technology:["Technology","technology"],program:["Program","program"],publications:["IP & Publications","news"],team:["Team","team"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",approach:"story",technology:"technology",program:"program",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — ImmunoBlue",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ImmunoBlue — Engineered nanoimmunotherapies for cancer, Baltimore, Maryland",x:"Home"};
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
