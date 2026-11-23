/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+'">Investigational</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Tissue integration","In pre-clinical and clinical histology the EverMatrix shows full fibroblast colonisation and abundant collagen deposition, so it becomes an integral part of the surrounding tissue instead of being walled off by a scar capsule.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M14 22c6 4 22 4 28 0M14 34c6-4 22-4 28 0"/><circle class="f" cx="22" cy="28" r="2.4"/><circle class="f" cx="34" cy="28" r="2.4"/>'],
  ["Permanent support","Scaffolds and extracellular matrices are absorbed over time. The EverMatrix is non-degradable: it stays as a &#8220;rebar mesh&#8221; that lets living tissue hold a synthetic implant biomechanically, for good.",'<path d="M10 18h36M10 28h36M10 38h36"/><path class="a" d="M18 12v32M28 12v32M38 12v32"/>'],
  ["Made for surgeons","High tensile strength, flexible and durable, with a high suture pull-out force: a consistent, scalable alternative to donor tissue that physicians can handle with ease.",'<path d="M12 40c10-2 20-12 26-26"/><path class="a" d="M36 12l6 2-2 6"/><circle class="f" cx="12" cy="40" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The clinical record</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From corneat.com and CorNeat Vision&#8217;s release of 2 September 2025. All three products are investigational and not approved for commercial sale.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ophthalmic implants<span class="nomob"> · Ra&#8217;anana, Israel</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Sight restored,</span><span class="l"><em>no donor needed.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>CorNeat Vision makes synthetic implants that grow into the eye. The CorNeat KPro, an artificial cornea, integrates with the eye wall through its EverMatrix skirt, so blindness from corneal disease can be treated without donor tissue.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/products">The products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A global challenge</span>'+
   '<h2 class="txt" id="mani">Corneal disease is the second leading cause of blindness worldwide. For every 70 corneas needed there is <em>one donor cornea</em>, and up to a third of grafts fail.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">29.5M</span><p class="k">Patients with corneal disease worldwide</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2M</span><p class="k">New cases each year in need of a transplant, against about 185,000 transplants performed</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1/70</span><p class="k">Donor corneas available for every seventy needed</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the KPro works</span><h2 class="d3">A clear window, <em>held by the eye.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Scarred</span><span>Implanted</span><span>Integrated</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A scarred cornea blocks the light.</h2><p>When the cornea turns opaque, light no longer reaches the retina. A donor transplant is often the only remedy, yet there is one donor cornea for every seventy needed, and 20 to 30 percent of grafts fail.</p></article>'+
     '<article class="step"><h2>The KPro snaps into place.</h2><p>The scarred centre is trephined and the CorNeat KPro snaps into the opening, then is sutured to the eye with three non-degradable sutures. No delicate suturing of donor tissue, in a straightforward procedure of about 45 minutes.</p></article>'+
     '<article class="step"><h2>The eye wall takes hold.</h2><p>Its EverMatrix skirt sits beneath the conjunctiva, where the patient&#8217;s own cells grow into it and lay down collagen. The wide-aperture lens carries light straight to the retina, for immediate visual rehabilitation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">EverMatrix&#8482;, <em>embedded for life.</em></h2></div><p data-r>Every implant triggers a foreign body response: inflammation, then a scar capsule that isolates it. The EverMatrix, first developed to seal the KPro lens into the eye, mimics the native extracellular matrix, so tissue grows into it rather than rejecting it.</p></div>'+
   caps()+
   '<div class="bk light-bk"><span class="lab kick" data-r>Use cases</span><p class="cr" data-r><span>Attaching implants to tissue</span><i>·</i><span>Tissue repair and reinforcement</span><i>·</i><span>Concealing implants and sensors</span><i>·</i><span>Guided tissue and bone regeneration</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Three implants, <em>one material.</em></h2></div><p data-r>CorNeat Vision&#8217;s portfolio addresses unmet needs in cornea, glaucoma and ocular surface surgery. Each product is built on the EverMatrix and is at a different stage of research and clinical investigation.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Engineers, surgeons <em>and clinicians.</em></h2></div><p data-r>A Ra&#8217;anana team that puts the physician&#8217;s ease of use first, working with leading ophthalmologists in Israel, Europe, North America, Africa and Asia.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Scientific advisory board</span><p data-r>Noa Geffen, Eric Gabison, R. Doyle Stulting, Ehud Assia, Zuguo Liu, Joe Panarelli, David Rootman, Ike Ahmed and Zev Schulhof: cornea and glaucoma leaders with over 650 peer-reviewed papers between them.</p></div>'+
    '<div><span class="lab kick" data-r>Clinical sites</span><p data-r>Rabin Medical Center, Amsterdam UMC, CHU de Montpellier, the University of British Columbia, University Health Network in Toronto, Kenyatta National Hospital and Kwale Eye Hospital.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>A &#8364;2.5M grant from the European Innovation Council, three EU Horizon 2020 Seals of Excellence, the MIXiii BIOMED Startup of the Year award and ISO 13485 certification.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Milestones <em>and press.</em></h2></div><p data-r>From the first implantation in Israel to 20/20 vision in an eye no transplant could help.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Surgeons, partners and investors</span>'+
   '<h2 class="big split">Talk to <em>CorNeat Vision.</em></h2>'+
   '<p class="sub" data-r>Whether you treat corneal blindness or glaucoma, want to take part in a clinical study, or would like to partner on the EverMatrix platform, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email CorNeat Vision '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>CorNeat Vision<br>4 HaSheizaf St.<br>Ra&#8217;anana, Israel</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Please note</span><p data-r>The CorNeat KPro, EverPatch and eShunt are investigational and not approved for commercial sale.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>4 HaSheizaf St.<br>Ra&#8217;anana, Israel</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>CorNeat KPro · EverPatch · eShunt</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.08em">corneat vision</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CorNeat Vision</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",products:"products",pipeline:"products",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CorNeat Vision — tissue-integrating ophthalmic implants",x:"Home"};
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
