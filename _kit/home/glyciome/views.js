/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[3])+'</b><i>'+esc(c[0])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function founders(){return '<div class="fdr">'+TEAM.map(function(p){
  return '<article class="fdc"><div class="fdp"><img class="g" src="'+p.img+'" alt="" loading="lazy" onerror="this.closest(\'.fdp\').classList.add(\'noimg\')"><img class="c" src="'+p.img+'" alt="'+esc(p.name)+'" loading="lazy" onerror="this.remove()"></div>'+
   '<div class="fdt"><h3>'+esc(p.name)+'</h3><span class="lab">'+esc(p.title)+'</span><p>'+esc(p.sum)+'</p></div></article>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function pubs(){return '<div class="gpub"><span class="lab kick" data-r>Peer-reviewed abstracts</span><ul>'+PUBS.map(function(p){
  return '<li><a href="'+p[2]+'" target="_blank" rel="noopener"><span class="lab">'+esc(p[0])+'</span><span class="gpt">'+esc(p[1])+'</span>'+ARR+'</a></li>'}).join("")+'</ul>'+
  '<p class="note-s" data-r>Conducted with genital microbiome experts across the United States, including Raina Fichorova, MD, PhD, at Brigham and Women’s Hospital and Harvard Medical School.</p></div>'}
function caps(){var C=[
  ["Prebiotic science","Metabolomics and genital ecosystem physiology guide gels and cleansers that support the beneficial microbiome and healthy surface function, instead of disrupting them as preservatives, douches and many conventional lubricants can.",'<path d="M28 6c9 12 14 20 14 27a14 14 0 0 1-28 0c0-7 5-15 14-27z"/><path class="a" d="M21 34c2 4 6 6 10 5"/><circle class="f" cx="31" cy="27" r="2.2"/>'],
  ["Nanotechnology","A carbon nanotube biosensor in early development, for a rapid screen for bacterial vaginosis that people can run themselves.",'<path d="M8 28h40"/><path class="a" d="M12 20c4 0 4 16 8 16s4-16 8-16 4 16 8 16 4-16 8-16"/><circle cx="8" cy="28" r="2"/><circle cx="48" cy="28" r="2"/>'],
  ["Human-centred design","A plastic-free kraft-paper applicator and a mobile app, designed around patients and providers and the low-resource settings where cervical cancer risk is highest.",'<rect x="20" y="8" width="16" height="40"/><path class="a" d="M20 18h16"/><path d="M25 26h6M25 32h6M25 38h6"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Women-owned<span class="nomob"> · Prebiotic genital care</span> · Spokane, WA</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Changing</span><span class="l">genital care</span><span class="l"><em>paradigms.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Glyciome develops prebiotic medical devices and personal care that support a healthy genital ecosystem, starting with PreBioGyn: a preservative-free gel to prevent the common infection that raises the risk of cervical cancer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/pipeline">Our pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Common genital infections more than double the risk of genital cancers, and cervical cancer is the fourth most frequent cancer in women worldwide. Glyciome’s answer is prebiotic care that keeps the genital ecosystem <em>healthy in the first place.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 4</span><span class="k">Women in the US with bacterial vaginosis, the most common vaginal infection and a risk factor for cervical cancer</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.24M</span><span class="k">National Cancer Institute Phase II award, 2026, to bring PreBioGyn through manufacturing, biocompatibility and a clinical trial</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3.4M</span><span class="k">In grants by the end of 2025, including National Cancer Institute and Spokane County HSSA awards</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How PreBioGyn works</span><h2 class="d3">Support the ecosystem, <em>not just the symptom.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Balance</span><span>Disruption</span><span>Support</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A healthy genital ecosystem.</h2><p>Healthy vaginal cells and a beneficial microbiome protect the surface of the genital tract. That balance is shared between partners, and it matters at every age and stage of life.</p></article>'+
     '<article class="step"><h2>When the balance tips.</h2><p>In bacterial vaginosis, harmful bacteria take over. Through the microbiota–cancer axis, they and viral co-infections such as HPV drive cancer-promoting changes in cells. With current treatments, about 40% of cases come back.</p></article>'+
     '<article class="step"><h2>A prebiotic gel that restores support.</h2><p>PreBioGyn is a preservative-free prebiotic lubricant. Phase I lab studies established its safety for vaginal cells and the vaginal microbiome, compared with existing BV-relief lubricants. It is for anyone, whatever their HPV vaccination status.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">Three disciplines, <em>one ecosystem.</em></h2></div><p data-r>Glyciome’s patent portfolio combines metabolomics, nanotechnology and human-centred design, built on its founders’ decades in reproductive physiology. Its first US patent for prebiotic cervical cancer prevention issued in 2024, with more issued and filed in 2025.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">From the clinic <em>to the bathroom shelf.</em></h2></div><p data-r>PreBioGyn leads, funded by the National Cancer Institute through Phase I and Phase II, with a clinical trial planned in Spokane and Puerto Rico. Around it: a plastic-free applicator, an app, a diagnostic, and the prebiotic cleansers already on sale.</p></div>'+
   pipeRows(PIPE)+
   pubs()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Four decades in <em>reproductive health.</em></h2></div><p data-r>Glyciome was founded in 2017 by Joanna Ellington, Dennis Clifton and Rayne Ellington-Lawrence. Its founders have taken reproductive health products from the bench to FDA clearance and onto the shelves of national retailers.</p></div>'+
   founders()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Clinical partners</span><p data-r>University of Washington School of Medicine and Providence Sacred Heart Medical Center, with a third-party evaluation by the Fichorova lab at Harvard Medical School.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NCI Phase I and Phase II awards, NIH I-Corps, and a $455,000 matching grant from the Health Sciences &amp; Services Authority of Spokane County.</p></div>'+
    '<div><span class="lab kick" data-r>Home</span><p data-r>The first tenant at Evergreen Bioscience Innovation, Spokane’s new biotech incubator.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, patents <em>and a trial.</em></h2></div><p data-r>The latest from Glyciome and Wild &amp; Pure.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>Glyciome.</em></h2>'+
   '<p class="sub" data-r>Whether you work in women’s health, distribution or clinical research, Glyciome would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Glyciome '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>850 E Spokane Falls Blvd<br>Spokane, WA 99202</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+15098280655">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Shop</span><p data-r><a class="ul" href="https://wildandpure.com" target="_blank" rel="noopener">Wild &amp; Pure®</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>850 E Spokane Falls Blvd<br>Spokane, WA 99202</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>'+TEL+'</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Glyciome, LLC</span>Women-owned since 2017<br>Pronounced GLY-key-ome</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Mulish\',Arial,sans-serif;font-weight:400;font-size:64px;letter-spacing:-.01em">Glyciome</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Glyciome, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* founders: Leavitt-style hover (AC): lift, portrait scale, colour revealed through a circle opening from the pointer */
addEventListener("pointerover",function(e){var c=e.target.closest&&e.target.closest(".fdc");if(!c||c.contains(e.relatedTarget))return;var p=c.querySelector(".fdp"),r=p.getBoundingClientRect();
  p.style.setProperty("--mx",((e.clientX-r.left)/r.width*100).toFixed(1)+"%");p.style.setProperty("--my",((e.clientY-r.top)/r.height*100).toFixed(1)+"%")});

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Glyciome — Prebiotic genital care for cervical cancer prevention, Spokane, WA",x:"Home"};
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
