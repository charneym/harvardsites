/* ================= VIEWS (home only: Technology / Programs / Team / News open build-out pages via _kit/lib/buildout.js;
   Contact and in-page CTAs scroll). Hero: a glass antibody-drug conjugate render right of a type-led headline (their tagline),
   their three technologies as its bottom band; then bone and dark grounds alternate: statement + stats (bone), the mechanism
   story (dark), technology tiles + the two glycoscience quotes from their site (bone), programmes (dark), team (bone), news
   (dark), contact (bone). Content is never hidden at rest (DW): reveals only enhance (see the failsafe in site.js). ================= */
function tiles(){return '<div class="ptile-g">'+PROPS.map(function(c){
  return '<div class="ptile"><span class="pm word">'+esc(c[0])+(c[1]?'<small>'+esc(c[1])+'</small>':'')+'</span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p></div>'}).join("")+'</div>'}
function prods(){return '<div class="sxp">'+PROD.map(function(c,i){
  return '<article class="sxr"><span class="lab sxn">'+String(i+1).padStart(2,"0")+'</span><div class="sxid"><h3>'+esc(c[0])+'</h3><span class="lab sxk">'+esc(c[1])+'</span></div>'+
   '<p class="sxd">'+esc(c[2])+'</p><div class="sxs"><span class="lab">Status</span><p>'+esc(c[3])+'</p><a class="lab ul lk2" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+' '+ARR+'</a></div></article>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
var ICO={gly:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 36V22M20 22L11 13M20 22L29 13M11 13V6M29 13V6"/><rect x="17" y="19" width="6" height="6"/><circle cx="11" cy="13" r="3"/><circle cx="29" cy="13" r="3"/><circle cx="11" cy="5" r="2.4"/><circle cx="29" cy="5" r="2.4"/></svg>',
 two:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 36V21M20 21L10 9M20 21L30 9"/><circle cx="8.5" cy="7" r="3"/><rect x="28" y="4" width="6" height="6"/></svg>',
 adc:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 36V21M20 21L10 9M20 21L30 9"/><path d="M20 29H27"/><circle cx="30" cy="29" r="3"/></svg>'};
function vHome(){
  var PR=MOBILE()?'':' data-r';setTimeout(pilReveal,60);
  return ''+
  '<section class="hero hx" id="hero" data-field data-theme="dark">'+
   '<div class="hx-copy">'+
    '<span class="lab eyebrow" data-r>Glycan-targeted ADCs<span class="nomob"> · South San Francisco</span></span>'+
    '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Exploiting cancer’s</span><span class="l"><em>glycan shield.</em></span></h1>'+
    '<i class="hrule" aria-hidden="true" data-r></i>'+
    '<div class="hx-foot"><p class="s" data-r>Antibody-drug conjugates that target cancer-specific glycans and glycoproteins in solid tumors, for targeted killing and restored immunity.</p>'+
    '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '</div>'+
   '<ul class="pil" aria-label="Our technology">'+
    '<li class="p1" data-r><span class="pic">'+ICO.gly+'</span><div><span class="lab">TegMiner™ platform</span><p>Finds tumor-specific glycan epitopes invisible to conventional approaches.</p></div></li>'+
    '<li class="p2"'+PR+'><span class="pic">'+ICO.two+'</span><div><span class="lab">2-Factor Antibody System</span><p>Binds only where a glycan and a protein appear together.</p></div></li>'+
    '<li class="p3"'+PR+'><span class="pic">'+ICO.adc+'</span><div><span class="lab">Antibody-drug conjugates</span><p>Potent payloads delivered directly to solid tumors.</p></div></li>'+
   '</ul>'+
  '</section>'+

  '<section class="sec mani light vis" id="about" data-theme="light"><div class="wrap">'+
   '<div class="vis-l"><span class="lab kick" data-r>Why glycans</span>'+
   '<h2 class="txt" id="mani">Tumor-associated glycans are highly prevalent in aggressive solid tumors, yet largely absent in healthy tissues. <em>We translate that cancer glycoscience into new therapies for patients.</em></h2></div>'+
   '<div class="stats vis-r">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Factors our antibodies must recognize together, a glycan and a protein, to bind a tumor cell</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Cancer targets possible in our research collaboration with Boehringer Ingelheim</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">17+</span><p class="k">Years our founder spent taking therapeutics to the clinic at Merck, Stemcentrx and AbbVie</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How our ADCs work</span><h2 class="d3">Two signals, <em>one precise strike.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Discover</span><span>Recognize</span><span>Deliver</span><span>Unshield</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Find the tumor’s glycans.</h2><p>Our TegMiner™ platform discovers glycan epitopes that are specific to tumors and invisible to conventional approaches.</p></article>'+
     '<article class="step"><h2>Bind only where both appear.</h2><p>The 2-Factor Antibody System requires a glycan and a protein together, sparing healthy cells that carry the protein alone.</p></article>'+
     '<article class="step"><h2>Deliver the payload.</h2><p>The antibody-drug conjugate carries a potent cell-killing payload directly into the tumor cell.</p></article>'+
     '<article class="step"><h2>Strip the shield.</h2><p>Removing the immunosuppressive glycan ligands exposes the tumor to the immune system again.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Precision oncology, <em>written in sugars.</em></h2></div><p data-r>We develop antibody-drug conjugates against cancer-specific glycans and glycoproteins, the markers that drive cancer aggressiveness and immune evasion.</p></div>'+
   tiles()+
   '<div class="tq">'+
    '<blockquote data-r><p>“The alteration in the pattern of sugar metabolism and function of cells in relation to the structural remodeling of glycolipids and glycoproteins are undoubtedly a key to open a secret box of malignancy.”</p><cite class="lab">Hakomori and Murakami, PNAS, 1967</cite></blockquote>'+
    '<blockquote data-r><p>“Glycoscience has been a blind spot in medicine and in biology and in biopharma.”</p><cite class="lab">Carolyn Bertozzi, 2022</cite></blockquote>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="programs" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programs</span><h2 class="d2 split">Glycan-targeted ADCs, <em>with leading partners.</em></h2></div><p data-r>An in-licensed ADC with exclusive global rights, a research collaboration with Boehringer Ingelheim, and our own discovery engine.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Scientists translating <em>cancer glycoscience.</em></h2></div><p data-r>TegMine is a team of dedicated scientists working to translate cancer glycoscience into meaningful new therapies for patients with unmet needs.</p></div>'+
   '<div class="tm">'+
    '<figure class="tm-ph" data-r><img src="bernstein.webp" width="760" height="760" alt="Jeff Bernstein, PhD" loading="lazy" decoding="async"></figure>'+
    '<div class="tm-tx"><span class="lab tm-r" data-r>Founder and CEO</span><h3 data-r>Jeff Bernstein, PhD</h3>'+
     '<p data-r>A biotech veteran with 17+ years at Merck, Stemcentrx and AbbVie, Jeff has a proven track record of taking therapeutics from the bench to the clinic, including the FDA-approved vaccine Vaxneuvance and ADCs targeting DLL3, SEZ6 and PTK7.</p>'+
     '<p class="tm-c lab" data-r>PhD, Biomedical Engineering, UCLA</p>'+
     '<div class="tm-o"><span class="lab kick" data-r>Working at TegMine</span><ul>'+OFFER.map(function(o){return '<li data-r><b>'+esc(o[0])+'</b><span>'+esc(o[1])+'</span></li>'}).join("")+'</ul></div>'+
    '</div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>A licensed glycan-targeting ADC, and a collaboration with Boehringer Ingelheim.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
/* phones: the pillar band sits below the fold, so it reveals on scroll (enhancement only: the site failsafe shows anything in view) */
function pilReveal(){if(!MOBILE()||RM||!window.ScrollTrigger)return;$$(".pil li:not([data-r])").forEach(function(li){if(li.getBoundingClientRect().top<innerHeight)return;
  gsap.set(li,{opacity:0,y:24});ScrollTrigger.create({trigger:li,start:"top 96%",once:true,onEnter:function(){gsap.to(li,{opacity:1,y:0,duration:.8,ease:"power2.out",clearProps:"transform,opacity"})}})})}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and scientists</span>'+
   '<h2 class="big split">Redefining <em>precision oncology.</em></h2>'+
   '<p class="sub" data-r>For partnerships, investment or to join the team, write to us in South San Francisco.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p class="al" data-r>329 Oyster Point Blvd., 3rd Floor</p><p class="al" data-r>South San Francisco, CA 94080</p></div>'+
    '<div><span class="lab" data-r>Email</span><p class="al" data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Social</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>329 Oyster Point Blvd., 3rd Floor<br>South San Francisco, CA 94080</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programs">Programs</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Glycan-targeted<br>antibody-drug conjugates</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 150" aria-hidden="true"><text x="320" y="124" text-anchor="middle" fill="#f3f6f9" style="font:500 132px \'Poppins\',sans-serif;letter-spacing:2px">TegMine</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 TegMine Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route. #/contact and #/about scroll to their section; a typed or linked #/technology,
   #/programs, #/team or #/news scrolls to its section; nav clicks open the build-out pages (buildout.js) ================= */
var BOK={technology:1,programs:1,team:1,news:1};
function boOpen(k){try{if(window.BuildOut&&BuildOut.open){BuildOut.open(k);return true}}catch(x){}return false}
var SECS={about:"about",technology:"technology",programs:"programs",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"TegMine Therapeutics — glycan-targeted antibody-drug conjugates",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){try{history.replaceState(null,"","#/")}catch(x){}secGo(r.sec,true)},300)})()})();
