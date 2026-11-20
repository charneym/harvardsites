/* ================= VIEWS (home only: Science / Tests / Team / News open build-out pages; Contact scrolls) ================= */
function progs(){return '<ul class="pfr">'+PROGS.map(function(c){return '<li><span class="lab tg">'+esc(c[1])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[2])+'</p>'+(c[3]?'<a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+'</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Epigenetic diagnostics<span class="nomob"> · Salt Lake City, Utah</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">The answer is</span><span class="l"><em>inherent</em> in</span><span class="l">our biology.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Inherent Biosciences reads DNA methylation in sperm to remove the guesswork from diagnosing and treating complex disease, starting in male reproductive health. Its Path Fertility division brings the SpermQT test to physicians and couples.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Photograph: a DNA double helix · Unsplash</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Trial-and-error medicine can lead to pain and lost time. We use what’s inherent in our biology <b class="w0">to take the guesswork out of diagnosis</b>, starting with <em>the men too often left out of fertility care.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$2M</span><span class="k">Two-year NICHD Direct to Phase II SBIR award in 2026, for a test for azoospermia and its cancer risk</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~50%</span><span class="k">Of infertility cases have a male factor, yet men are rarely tested beyond a semen analysis</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2 weeks</span><span class="k">From a sample collected at home or in the clinic to a SpermQT result</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Epigenetic, not genetic</span><p data-r>Epigenetics studies changes in how genes are expressed rather than changes to the genetic code itself. DNA methylation in sperm carries that signal.</p></div>'+
    '<div><span class="lab kick" data-r>Patterns found with AI</span><p data-r>Using AI, the team has identified patterns in the epigenetic marks of sperm that indicate fertility outcomes, with implications for other conditions.</p></div>'+
    '<div><span class="lab kick" data-r>Licensed science</span><p data-r>Epigenetics IP licensed from the University of Utah and Washington State University, read on Oxford Nanopore sequencing in the company’s labs.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How SpermQT works</span><h2 class="d3">A semen sample, <em>read for methylation.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sample</span><span>Methylation</span><span>Pattern</span><span>Path</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A sample, from home.</h2><p>A physician orders the test. The sample is collected at home or in the clinic and shipped to the lab, where DNA is taken from the sperm.</p></article>'+
     '<article class="step"><h2>The marks on the DNA.</h2><p>The test measures DNA methylation, chemical tags that switch genes on and off, at genes tied to sperm production, sperm maturation and embryo development.</p></article>'+
     '<article class="step"><h2>A pattern, not a count.</h2><p>Rather than counting sperm, SpermQT compares the methylation pattern with patterns linked to fertility outcomes, to see whether sperm can do what they need to do.</p></article>'+
     '<article class="step"><h2>A clearer path to treatment.</h2><p>Within two weeks the physician has a result that helps the couple choose a treatment, such as continuing with IUI or moving to IVF.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="tests" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Tests</span><h2 class="d2 split">Male fertility, <em>measured properly.</em></h2></div><p data-r>One test on the market through Path Fertility, two more in development with NIH funding, and one platform beneath them all.</p></div>'+
   '<div class="kit"><figure class="kit-ph" data-r><img src="data:image/webp;base64,__KIT__" alt="The Path SpermQT at-home collection kit: box, specimen cup, instructions and specimen bag" width="1200" height="1072"><figcaption class="lab">The Path SpermQT collection kit · photo: Inherent Biosciences</figcaption></figure>'+
    '<div class="kit-t"><span class="lab kick" data-r>Path Fertility · SpermQT</span><h3 data-r>Ordered by a physician, collected at home.</h3>'+
    '<dl class="kf">'+
     '<div data-r><dt class="lab">Measures</dt><dd>DNA methylation on genes linked to sperm function</dd></div>'+
     '<div data-r><dt class="lab">Sample</dt><dd>Collected at home or in the clinic, shipped to the lab</dd></div>'+
     '<div data-r><dt class="lab">Result</dt><dd>Within two weeks, to the ordering physician</dd></div>'+
     '<div data-r><dt class="lab">Partners</dt><dd>Genomic Prediction and Posterity Health</dd></div>'+
    '</dl></div></div>'+
   progs()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded in Utah <em>in 2019.</em></h2></div><p data-r>A woman-owned company, backed by Propel Bio Partners, Portfolia’s FemTech II Fund, Alliance of Angels and the NIH.</p></div>'+
   team()+
   '<div class="fac">'+
    '<div><span class="lab kick" data-r>Salt Lake City, Utah</span><p data-r>Headquarters of Inherent Biosciences and Path Fertility.</p></div>'+
    '<div><span class="lab kick" data-r>Spokane, Washington</span><p data-r>Lab and office space in the Ignite Building on Washington State University’s Spokane campus, supported by the Health Sciences and Services Authority of Spokane County.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Awards, partners <em>and research.</em></h2></div><p data-r>Releases, coverage and federal awards, each linking to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Physicians, partners and investors</span>'+
   '<h2 class="big split">Take the guesswork <em>out of fertility.</em></h2>'+
   '<p class="sub" data-r>To order SpermQT, partner with Path Fertility or talk to the founders, write to the team directly.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email the team '+ARR+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Inherent Biosciences, Inc.<br>Salt Lake City, Utah</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:'+TELH+'">'+TEL+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Inherent Biosciences, Inc.<br>Salt Lake City, Utah</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/tests">Tests</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Elsewhere</span><a class="ul" href="https://pathfertility.com" target="_blank" rel="noopener">Path Fertility</a><br><a class="ul" href="https://www.linkedin.com/company/inherent-biosciences-inc" target="_blank" rel="noopener">LinkedIn</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 60" aria-hidden="true"><text x="320" y="50" text-anchor="middle" style="font-family:\'Raleway\',Arial,sans-serif;font-weight:300;font-size:60px;letter-spacing:.04em">Inherent</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Inherent Biosciences, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",tests:"tests",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Inherent Biosciences — Epigenetic diagnostics for male reproductive health, Salt Lake City",x:"Home"};
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
