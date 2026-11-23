/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Board and advisors</span><p data-r>'+BOARD.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Next generation medicines<span class="nomob"> · Boston, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Pioneering next</span><span class="l">generation <em>cancer</em></span><span class="l"><em>therapies.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Radiance Biopharma is building a pipeline of targeted antibodies and antibody-drug conjugates for liquid and solid tumors, led by an anti-ROR-1 ADC now in Phase 1.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/pipeline">Our pipeline '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Human Hsp70, the target of RB-203: its ATPase domain with bound ADP, atom by atom (PDB 1S3X, 1.84 Å).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Radiance develops a pipeline of next generation cancer therapies, and drugs for other high unmet medical needs, with a team that has built companies in <em>large pharma and biotech.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><p class="k">Programmes: three antibody-drug conjugates and a membrane Hsp70 antibody</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Phase 1</span><p class="k">RB-164, the anti-ROR-1 ADC, first patient dosed in April 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50–75%</span><p class="k">Of cancers carry Hsp70 on the cell surface, which healthy cells do not</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Antibody-drug conjugates</span><p data-r>Targeted ADCs against ROR-1, HER2/TROP2 and c-MET/EGFR, for blood cancers and advanced solid tumors.</p></div>'+
    '<div><span class="lab kick" data-r>Partnered development</span><p data-r>Phase 1 studies start with development partners in China, CSPC Pharmaceutical Group and Novatim; Radiance leads development in the U.S., Australia and Europe.</p></div>'+
    '<div><span class="lab kick" data-r>Theranostics</span><p data-r>RB-203 pairs a membrane Hsp70 antibody with a patented blood test that tracks the tumors it targets.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science · RB-203</span><h2 class="d3">A marker only tumors <em>wear outside.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Marker</span><span>Blood test</span><span>Antibody</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Hsp70, on the membrane.</h2><p>Heat shock protein 70 normally works inside cells. Many liquid and solid tumors also carry it on the cell membrane; healthy cells do not. Metastases carry even more than primary tumors.</p></article>'+
     '<article class="step"><h2>Shed into the blood.</h2><p>Tumors that express membrane Hsp70 release exosomes carrying it. Their levels reflect tumor size, response to therapy and recurrence, and a patented blood test measures them.</p></article>'+
     '<article class="step"><h2>RB-203 finds the tumor.</h2><p>RB-203, Radiance’s proprietary monoclonal antibody, recognizes membrane Hsp70 and selectively accumulates in tumors that express it, but not in healthy cells.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Four programmes, <em>one focus.</em></h2></div><p data-r>Three antibody-drug conjugates and a membrane Hsp70 antibody with its companion diagnostic, for liquid and solid tumors.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Partners</span><p class="cr" data-r><span>CSPC Pharmaceutical Group</span><i aria-hidden="true">·</i><span>Novatim Immune Therapeutics</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Industry veterans, <em>one mission.</em></h2></div><p data-r>Radiance’s board, management and advisors bring experience from large pharma and biotechnology startups, and are committed to transforming the lives of patients with cancer.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the clinic <em>to the summit.</em></h2></div><p data-r>A Phase 1 start, a new licence and investor presentations in 2025 and 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Next generation medicines, <em>together.</em></h2>'+
   '<p class="sub" data-r>Radiance Biopharma works from One Boston Place. To talk about the pipeline, a partnership or an investment, write or call us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="tel:+16176217143">'+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Radiance Biopharma, Inc.<br>One Boston Place, Ste. 2600<br>Boston, MA 02108</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+16176217143">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>One Boston Place, Suite 2600<br>Boston, Massachusetts 02108</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+16176217143">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Antibodies and ADCs<br>for liquid and solid tumors</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:700;font-size:64px;letter-spacing:.02em"><tspan fill="#f3f6f9">RADIANCE</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Radiance Biopharma, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Radiance Biopharma — next generation cancer therapies, Boston",x:"Home"};
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
