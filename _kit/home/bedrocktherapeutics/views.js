/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Capsids that get through","Bedrock engineers AAV capsids in human tissue rather than in mouse cells, then selects the ones that still work in the presence of human neutralising antibodies. BDRK001 (AAV mutant LP2-10) came out of the liver of chimeric mice carrying human hepatocytes, selected against pooled human immunoglobulin.",'<path d="M28 7l18.2 10.5v21L28 49 9.8 38.5v-21z"/><path class="a" d="M28 7v10.5M28 49V38.5M46.2 17.5L37 23M9.8 17.5L19 23M46.2 38.5L37 33M9.8 38.5L19 33"/><circle class="f" cx="28" cy="28" r="4.6"/>'],
  ["Single-chain immune modulators","The scIM transgene mimics the structure and function of the HLA-G homodimer, the protein behind the eye's immune privilege and behind a mother's tolerance of a developing fetus. It is secreted, so one transduced tissue can hold back both inflammation and new blood vessels around it.",'<path d="M14 40c0-9 6-14 14-14s14-5 14-14"/><path class="a" d="M14 16c0 9 6 14 14 14s14 5 14 14"/><circle class="f" cx="28" cy="28" r="3.2"/><path d="M18 11h20M18 45h20"/>'],
  ["Given where the problem is","The cornea can be treated in the dish, before it is ever in a patient: one dose on the donor graft, then surgery as usual. Elsewhere the same payloads go in locally too, into the vitreous for macular degeneration and into muscle for rheumatoid arthritis.",'<ellipse cx="28" cy="28" rx="21" ry="13"/><circle cx="28" cy="28" r="8.2"/><circle class="f" cx="28" cy="28" r="3.4"/><path class="a" d="M28 6v7M7 28h-4M53 28h-4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The study behind BDRK-401</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>Gilger, Hasegawa, Sutton, Bower, Li and Hirsch, “A chimeric anti-vascularization immunomodulator prevents high-risk corneal transplantation rejection via ex vivo gene therapy”, Molecular Therapy, 6 November 2024 (PMID 39245940); reported by UNC Ophthalmology, 18 March 2025. Preclinical results in mouse and rabbit models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>AAV gene therapy<span class="nomob"> · UNC spinout</span> · Chapel Hill, NC</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Give the graft</span><span class="l">its own</span><span class="l"><em>immune privilege.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Bedrock Therapeutics develops AAV gene therapies that let a tissue protect itself. The lead programme treats the donor cornea once, in the dish, before a high-risk transplant.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">About 180,000 corneal transplants are performed worldwide each year. More than a fifth are high-risk, and in those eyes every graft is rejected within ten years despite the standard of care. Bedrock treats <em>the graft, not the patient.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">180,000</span><span class="k">Corneal transplants performed worldwide each year, more than 50,000 of them in the United States</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3.4M</span><span class="k">NIH SBIR and STTR funding awarded to Bedrock across nine project years since 2020</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Six</span><span class="k">NIH-funded programmes: the cornea, the retina, ocular graft-versus-host disease, the joint and the liver</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How BDRK-401 works</span><h2 class="d3">Treated in the dish, <em>protected in the eye.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Graft</span><span>Dose</span><span>Protection</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Start with the donor cornea.</h2><p>A corneal graft sits in the dish before surgery, outside any patient. In high-risk eyes, which are more than a fifth of transplants, this tissue is what the immune system will later reject and what new vessels will grow into.</p></article>'+
     '<article class="step"><h2>One dose, on the bench.</h2><p>AAV carrying the single-chain immune modulator is applied to the graft ex vivo, in a protocol optimised for a hospital setting. The cornea takes up the gene and begins to secrete the scIM protein itself.</p></article>'+
     '<article class="step"><h2>The graft defends itself.</h2><p>Transplanted, the graft keeps secreting. The scIM mimics HLA-G, which gives the eye its natural immune privilege, and holds off both the immune response and the new vessels. In a rabbit model, treated grafts were completely protected from acute rejection.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Two parts, <em>one dose.</em></h2></div><p data-r>A capsid selected to reach human tissue past neutralising antibodies, and a secreted immune modulator built on the molecule that makes the eye immune-privileged. Everything else is a question of where the dose goes.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the cornea <em>outward.</em></h2></div><p data-r>Five NIH-funded programmes, all built from the same two parts: the lead ex vivo therapy for high-risk corneal transplantation in Phase II, and Phase I work in the retina, in ocular graft-versus-host disease, in rheumatoid arthritis and in the liver.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A gene therapy lab, <em>spun out.</em></h2></div><p data-r>Bedrock is a UNC-Chapel Hill spinout co-founded by the ocular gene therapy and veterinary ophthalmology groups behind the work, and run by the same people who publish it.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Where</span><p data-r>Chapel Hill, North Carolina, alongside the UNC Gene Therapy Center and the NC State College of Veterinary Medicine.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>SBIR and STTR awards from the National Institutes of Health: NEI, NIAMS, NIDDK and NHLBI.</p></div>'+
    '<div><span class="lab kick" data-r>Published</span><p data-r>Molecular Therapy (2024) on the single-chain immunomodulator; Molecular Therapy — Methods &amp; Clinical Development (2020) on the capsid variants.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards <em>and papers.</em></h2></div><p data-r>Bedrock’s grant record and the peer-reviewed work behind it.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partnering and investment</span>'+
   '<h2 class="big split">Talk to <em>Bedrock.</em></h2>'+
   '<p class="sub" data-r>Ocular gene therapy, capsid engineering or a programme of your own: Bedrock is glad to hear from clinicians, partners and investors as BDRK-401 moves toward the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Bedrock '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Bedrock Therapeutics, Inc.<br>Chapel Hill, NC 27514</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Lead programme</span><p data-r><a class="ul" href="'+RP+'11180103" target="_blank" rel="noopener">NIH RePORTER</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Chapel Hill, NC</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platform</span>Engineered AAV capsids<br>Single-chain immune modulators</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Newsreader\',Georgia,serif;font-weight:400;font-size:64px;letter-spacing:-.01em">bedrock</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Bedrock Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"platform",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Bedrock Therapeutics — AAV gene therapy for local immune privilege, Chapel Hill, NC",x:"Home"};
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
