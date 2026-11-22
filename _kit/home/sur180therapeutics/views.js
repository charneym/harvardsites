/* ================= VIEWS (home only: Approach / Pipeline / Evidence / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function pipe(){return '<div class="ppl"><div class="ppl-h" aria-hidden="true"><span class="lab">Compound · Indication</span>'+STAGES.map(function(s){return '<span class="lab">'+esc(s)+'</span>'}).join("")+'</div>'+
  '<ul class="ppl-l">'+PIPE.map(function(r,k){return '<li><div class="ppl-n"><span class="lab tg">CRHR1 antagonist · '+esc(r[2])+'</span><h3>'+esc(r[0])+'</h3></div>'+
   '<div class="ppl-b" role="img" aria-label="'+esc(r[0])+': '+esc(STAGES[r[1]-1])+(r[1]>1?' completed into IND-enabling studies':'')+'"><i class="ppl-f'+(k?' s':'')+'" style="--w:'+(r[1]/4*100)+'%"></i></div>'+
   '<p>'+esc(r[3])+'</p></li>'}).join("")+'</ul></div>'}
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p>'+(c[4]?'<a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function mh(label,L){return '<div class="mh-group"><p class="mh-label" data-r>'+esc(label)+'</p><ul class="mh-list">'+L.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span><span></span></div></li>'}).join("")+'</ul></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Non-hormonal endometriosis care<span class="nomob"> · NIH-funded</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A new direction</span><span class="l">in endometriosis</span><span class="l"><em>treatment.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We are developing a non-hormonal oral treatment for the 190 million women living with endometriosis worldwide, backed by NIH-funded, peer-reviewed science.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">Our science '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>Pexacerfont (C<sub>18</sub>H<sub>24</sub>N<sub>6</sub>O), the oral CRHR1 antagonist in our 2026 Biology of Reproduction study. Nitrogen in pink. 3D structure: PubChem CID 9884366.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="need" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The unmet need</span>'+
   '<h2 class="txt" id="mani">Years of pelvic pain, often dismissed or misdiagnosed. And when a diagnosis comes, today’s treatments can only be prescribed <em>for twelve months at a time.</em></h2>'+
   '<p class="mani-s" data-r>Endometriosis brings chronic pelvic pain, fatigue, digestive problems and the toll of anxiety and depression. Current hormonal options carry serious side effects, including bone density loss and suicidal ideation, and all of them affect fertility.</p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1 in 10</span><p class="k">Women of reproductive age live with endometriosis globally</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7–10 yrs</span><p class="k">Average diagnostic delay from symptom onset</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0</span><p class="k">Approved oral treatments that address the disease without affecting fertility</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">The root cause, <em>not the symptoms.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Stress axis</span><span>Block CRHR1</span><span>Relief</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The stress axis feeds the lesions.</h2><p>Our research found that the corticotropin-releasing hormone receptor 1 (CRHR1), part of the hypothalamic-pituitary-adrenal stress axis, plays a fundamental role in the inflammation, pain and growth of endometriosis lesions.</p></article>'+
     '<article class="step"><h2>An oral drug blocks the receptor.</h2><p>Instead of the gonadal hormone pathway, we target CRHR1 with a non-hormonal, orally available drug candidate: a molecule already known to be safe, repositioned for a new gynecologic use.</p></article>'+
     '<article class="step"><h2>Less pain. Fertility intact.</h2><p>In preclinical studies, blocking CRHR1 reduced endometriosis pain and cut adhesion scores in half, without altering reproductive hormones or compromising fertility, so it could be used long term.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One compound, <em>three indications.</em></h2></div><p data-r>By repositioning a molecule already known to be safe, SUR180 cuts development costs compared with a novel compound: a more capital-efficient path to market, and potential savings for insurers and patients.</p></div>'+
   pipe()+
   '<div class="bk"><span class="lab kick" data-r>Protected by</span><p class="cr" data-r><span>U.S. Patent US10729693B2 (exclusive licence)</span><i>·</i><span>U.S. Application 63/688,026 (joint ownership)</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="evidence" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Evidence</span><h2 class="d2 split">Built on <em>published science.</em></h2></div><p data-r>More than 20 years of translational research in neuroscience, gastroenterology and molecular biology, peer-reviewed and supported by a competitive NIH grant.</p></div>'+
   rows(EVID)+
   '<div class="bk"><span class="lab kick" data-r>Funded and supported by</span><p class="cr" data-r><span>National Institutes of Health</span><i>·</i><span>NIH NICHD</span><i>·</i><span>Puerto Rico Science, Technology and Research Trust</span><i>·</i><span>Ponce Health Sciences University</span><i>·</i><span>Ponce Research Institute</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">From women, <em>for women.</em></h2></div><p data-r>Sur means “south” in Spanish: the roots of our founding team and our base in South Texas and Puerto Rico. 180 is our philosophy: real progress means turning in a new direction.</p></div>'+
   '<div class="fgrid"><figure class="fnd" data-r><img src="founders.webp" alt="The three co-founders of SUR180 Therapeutics, Caroline B. Appleyard, Annelyn Torres-Reverón and Idhaliz Flores" width="1676" height="943" loading="lazy"><figcaption class="lab">From left: Caroline B. Appleyard, Annelyn Torres-Reverón, Idhaliz Flores</figcaption></figure>'+
   '<div class="mh">'+mh("Founders",FOUND)+'</div></div>'+
   '<div class="mh">'+mh("Board & advisors",BOARD)+'</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Science <em>in motion.</em></h2></div><p data-r>Publications, partnerships and conferences from the SUR180 team.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Investors, partners, clinicians</span>'+
   '<h2 class="big split">A treatment women <em>have waited for.</em></h2>'+
   '<p class="sub" data-r>We welcome conversations with investors and partners who see the opportunity at the intersection of women’s health, unmet clinical need and validated science. To receive our company deck or meet our CEO, get in touch.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/approach">Our approach</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Based in</span><p data-r><span>McAllen, Texas</span><br><span>Ponce, Puerto Rico</span></p></div>'+
    '<div><span class="lab" data-r>E-mail</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="tel:+19567141499">+1 956 714 1499</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Based in</span>South Texas<br>and Puerto Rico</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/evidence">Evidence</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19567141499">+1 956 714 1499</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Endometriosis<br>CRHR1 antagonism<br>Non-hormonal, oral</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 96" aria-hidden="true"><text x="320" y="76" text-anchor="middle" style="font-family:\'DM Sans\',system-ui,sans-serif;font-weight:600;font-size:100px;letter-spacing:-.01em"><tspan fill="#f7f3f5">SUR</tspan><tspan fill="#e760bb">180</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 SUR180 Therapeutics</span><span class="lab">Site concept</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={need:"need",approach:"story",pipeline:"pipeline",evidence:"evidence",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"SUR180 Therapeutics — a non-hormonal oral treatment for endometriosis",x:"Home"};
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
