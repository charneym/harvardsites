/* ================= VIEWS (home only: Platform / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function props(){return '<ul class="pfr">'+PROPS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function progs(){return '<ul class="pfr pgr">'+PROG.map(function(c,i){
  return '<li><span class="lab tg">'+(c[3]?esc(c[3]):String(i+1).padStart(2,"0"))+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[2])+'</p>'+(i===0?'<span class="lab st1">IND cleared</span>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Leadership</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={bind:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 36V22"/><path d="M20 22L10 10"/><path d="M20 22L30 10"/><path d="M7 13l6-6"/><path d="M27 7l6 6"/><path d="M4 4h32"/></svg>',
 pay:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="12"/><circle cx="20" cy="20" r="3"/><path d="M20 3v5M20 32v5M3 20h5M32 20h5"/></svg>',
 imm:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 22c0-8 5-15 12-15s13 6 13 13-5 13-12 13c-5 0-8-2-10-4"/><circle cx="21" cy="20" r="5"/><path d="M5 26l6-1"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Antibody-drug conjugates<span class="nomob"> · New York</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Unleashing</span><span class="l">the power</span><span class="l"><em>of antibodies.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>Medicovestor develops first-in-class chemoimmunotherapy ADCs that kill tumour cells with their payload and with the antibody itself. Our lead, MC001 for pancreatic cancer, is cleared by the FDA to enter the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/platform">Our platforms '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>The ADoBind backbone, rendered: two IgG1 antibodies joined at their Fc, carrying payloads (schematic). Antibody coordinates from PDB 1IGT.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The gap</span>'+
   '<h2 class="txt" id="mani">Today’s ADCs lean on the payload to kill, invite chemoresistance and work only where tumours carry many antigen molecules. <em>We supercharge ADCs to kill with the antibody backbone too.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Novel ADC platforms: ADoBind™ and ADoTope™</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">Programmes in the pipeline, in cancer, endometriosis and autoimmune disease</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">US patents issued or approved for the platform and a novel ADC target</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.bind+'</span><span class="lab kick" data-r>More binding</span><p data-r>More antibody molecules on each tumour antigen, functionally raising antigen density.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.pay+'</span><span class="lab kick" data-r>Payload kill</span><p data-r>A cytotoxic payload kills the tumour cell, with bystander effects on its neighbours.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.imm+'</span><span class="lab kick" data-r>Immune kill</span><p data-r>The IgG1 backbone recruits the immune system: ADCC, ADCP and complement.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ADoBind works</span><h2 class="d3">One antibody, <em>two ways to kill.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Bind</span><span>Deliver</span><span>Recruit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Bind more.</h2><p>The dimeric ADoBind antibody binds FRα on the tumour cell and associates more antibody molecules with each antigen, so tumours with few antigen copies come into reach.</p></article>'+
     '<article class="step"><h2>Deliver the payload.</h2><p>Taken into the cell, the conjugate releases its cytotoxic payload, which kills the tumour cell and, as free payload, its neighbours.</p></article>'+
     '<article class="step"><h2>Recruit the immune system.</h2><p>The IgG1 backbone engages immune effector cells and complement, adding ADCC, ADCP and CDC, which may also reach quiescent tumour cells that are not dividing.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="platform" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Platform</span><h2 class="d2 split">Two novel <em>ADC platforms.</em></h2></div><p data-r>We use our proprietary high-affinity human antibodies to deliver chemotherapy, and design innovative mutant antibodies that harness the host’s immune mechanisms, to bridge the efficacy gaps of current ADCs and widen the tumours they can treat.</p></div>'+
   props()+
  '</div></section>'+

  '<section class="sec dark" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From pancreatic cancer <em>to the clinic.</em></h2></div><p data-r>Pancreatic cancer is among the most aggressive malignancies, with five-year survival under 10%. MC001, our first clinical candidate, leads a pipeline of antibodies against FRα, CT22 and CD38, in cancer and beyond.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Milestones</span><p class="cr" data-r>'+lst(MILESTONES)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Experts in <em>cancer antibodies.</em></h2></div><p data-r>Our mission is to supercharge ADCs for tumour killing, not only by the payload but by the intrinsic killing functions of the antibody backbone. The team works from New York, with operations in China and Malaysia.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Fast Track, IND <em>and new data.</em></h2></div><p data-r>Regulatory milestones for MC001, new preclinical data at AACR and ACOG, and recognition for the platform in Boston.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Let’s bring better ADCs <em>to patients.</em></h2>'+
   '<p class="sub" data-r>Parties interested in strategic collaboration or investment are welcome to reach out. Physicians and patients asking about access to MC001 can read our expanded access policy.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to Medicovestor '+ARR+'</a><a class="btn" href="'+WEB+'expanded-access-policy" target="_blank" rel="noopener">Expanded access policy</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Medicovestor, Inc.<br>New York, NY<br>United States</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></p></div>'+
    '<div><span class="lab" data-r>Operations</span><p data-r>China<br>Malaysia</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Medicovestor, Inc.<br>New York, NY</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/platform">Platform</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Chemoimmunotherapy<br>antibody-drug conjugates</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="66" text-anchor="middle" style="font-family:\'Poppins\',system-ui,sans-serif;font-weight:300;font-size:72px;letter-spacing:.02em"><tspan fill="#f3f6fb">MEDICOVESTOR</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Medicovestor, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Medicovestor — chemoimmunotherapy antibody-drug conjugates",x:"Home"};
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
