/* ================= VIEWS (home only: Approach / Programs / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function props(){return '<ul class="pfr">'+PROPS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function progs(){return '<ul class="pfr pgr">'+PROG.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Source</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={dna:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M13 4c0 8 14 10 14 16s-14 8-14 16"/><path d="M27 4c0 8-14 10-14 16s14 8 14 16"/><path d="M15 9h10M15 31h10M17 14.5h6M17 25.5h6"/></svg>',
 enz:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 22c-2-7 3-14 10-14c4 0 6 2 9 2c4 0 7 3 6 8c-1 4-4 5-4 9c0 4-4 6-9 5c-4-1-5-3-8-4c-3-1-3-3-4-6Z"/><path d="M26 24l6 6"/><rect x="31" y="29" width="5" height="5"/></svg>',
 path:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 34L12 6"/><path d="M14 34L22 6"/><path d="M24 34L32 6"/><path d="M34 34l2-7"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Rare disease therapeutics<span class="nomob"> · Cambridge, MA</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Relentlessly</span><span class="l">pursuing <em>functional</em></span><span class="l"><em>cures.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>Crosswalk Therapeutics engineers enzyme therapies built to reach the tissues today’s treatments leave behind, starting with lysosomal storage diseases: Fabry, Pompe and Morquio A.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/programs">Our programs '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>Human GALNS, the enzyme missing in Morquio A syndrome, rendered from its crystal structure (PDB 4FDI).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">We are a seed-stage biotech company dedicated to relentlessly pursuing functional cures for rare disease patients and their families, <em>starting with rare diseases and, in time, genetically defined common diseases.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">80<small>%+</small></span><p class="k">Of rare diseases have genetic origins</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Lead programs: Morquio A, Fabry and Pompe disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Therapeutic areas of team expertise</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.dna+'</span><span class="lab kick" data-r>Validated targets</span><p data-r>Clinically identified and pre-clinically validated genetic targets, to raise the odds of program success.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.enz+'</span><span class="lab kick" data-r>Engineered enzymes</span><p data-r>Improved enzymes, combined with a protein biodistribution platform in a single construct.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.path+'</span><span class="lab kick" data-r>Patient-centric</span><p data-r>Subcutaneous dosing designed to ease the burden of therapy for patients, caregivers and families.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the platform works</span><h2 class="d3">From a missing enzyme <em>to the tissue it never reached.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Missing</span><span>Construct</span><span>Tissue</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A missing enzyme.</h2><p>In a lysosomal storage disease one enzyme is missing or faulty, so the material it should break down builds up inside the cell’s lysosomes.</p></article>'+
     '<article class="step"><h2>One engineered construct.</h2><p>Crosswalk combines an engineered enzyme with its protein biodistribution platform in a single construct, given by subcutaneous dosing.</p></article>'+
     '<article class="step"><h2>Into hard-to-reach tissue.</h2><p>The construct is designed to reach tissues such as bone and cartilage that current infusions leave under-treated, and to work where the storage builds up.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="approach" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">Patient-centric <em>innovation.</em></h2></div><p data-r>Our approach is technology-neutral: we start from the disease and choose the modality it needs. Our strengths are functional replacements for loss-of-function diseases and engineering solutions for toxic gain-of-function diseases.</p></div>'+
   props()+
  '</div></section>'+

  '<section class="sec dark" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Enzyme therapies, <em>best in class.</em></h2></div><p data-r>Patients with lysosomal storage diseases often face burdensome, frequent enzyme replacement infusions that save lives but leave residual disease in the tissues they don’t reach. Our programs are built to change that.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Therapeutic areas</span><p class="cr" data-r>'+lst(AREAS)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A rare disease team, <em>reunited.</em></h2></div><p data-r>Crosswalk is founded by a team with extensive experience in rare diseases. Collectively, the team has spent hundreds of years developing therapies for rare disease patients, achieving significant success in previous roles.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Where we built therapies</span><p class="cr" data-r>'+lst(ROOTS)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, assets <em>and milestones.</em></h2></div><p data-r>From engineered Fabry and Pompe enzymes acquired from Codexis to a National MPS Society grant for Morquio A: the latest from Crosswalk.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, patients and investors</span>'+
   '<h2 class="big split">Let’s cross the gap <em>to functional cures.</em></h2>'+
   '<p class="sub" data-r>We work with patient communities, research partners and investors who share our commitment to rare disease patients and their families. Write to us and we’ll take the conversation from there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Crosswalk '+ARR+'</a><a class="btn" href="#/approach">See our approach</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Location</span><p data-r>790 Memorial Drive, Suite 302<br>Cambridge, MA 02139<br>United States</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></p></div>'+
    '<div><span class="lab" data-r>Focus</span><p data-r>Lysosomal storage diseases<br>and inborn errors of metabolism</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>790 Memorial Drive, Suite 302<br>Cambridge, MA 02139</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Functional cures for<br>rare disease patients</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="68" text-anchor="middle" style="font-family:\'Alegreya\',Georgia,serif;font-weight:400;font-size:86px;letter-spacing:.04em"><tspan fill="#f4f6fb">CROSSWALK</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Crosswalk Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"approach",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Crosswalk Therapeutics — functional cures for rare disease patients",x:"Home"};
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
