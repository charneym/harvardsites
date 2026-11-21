/* ================= VIEWS (home only: The problem / The solution / Advantages / Team open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function rows(L){return '<ul class="pfr">'+L.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>At-home ovarian stimulation monitoring<span class="nomob"> · Modi’in, Israel</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Re-inventing</span><span class="l"><em>the fertility</em></span><span class="l"><em>experience.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>IMMA is developing a self-operated ultrasound system for IVF, so a woman can monitor her own follicles at home and share every scan with her medical team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/solution">How IMMA works '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
   '<p class="lab hcap" data-r>The IMMA device: an ultraportable, manipulation-free probe for scans at home. Image: IMMA Health.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="problem" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The problem</span>'+
   '<h2 class="d2 bo-only">The fertility crisis is <em>only beginning.</em></h2>'+
   '<h2 class="txt" id="mani">During IVF, ovarian stimulation means 8 to 12 days of injections at home and repeated trips to the clinic for scans. IMMA lets her <em>monitor her own follicles at home.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">15%</span><p class="k">Of couples, up to, will need medical help to conceive</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3–5</span><p class="k">IVF cycles in a fertility journey of two to three years</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$48B</span><p class="k">Fertility market by 2030, up from $33.2B in 2020</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>For the woman</span><p data-r>A fertility journey costs USD 60–100K and takes two to three years, with around 2 million social media posts a year about the psychological pain.</p></div>'+
    '<div><span class="lab kick" data-r>For the clinical team</span><p data-r>ART cycles grew 94.5% while clinics grew 4%, and US reproductive endocrinologists grow by about 2% a year: a supply constraint.</p></div>'+
    '<div><span class="lab kick" data-r>For the scan</span><p data-r>Follicle follow-up still needs the eye and the hand of a technician. IMMA’s question: how do we replace them?</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The solution</span><h2 class="d3">The follicle scan, <em>brought home.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Probe</span><span>Report</span><span>App</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A scan without a technician.</h2><p>The ultraportable probe is built for at-home use in non-expert hands. It is manipulation-free: ultrafast, high-quality acquisition of a large volume in a very short time, with no movement during the scan.</p></article>'+
     '<article class="step"><h2>An AI reads every image.</h2><p>Automated image analysis selects the planes with the right information and reconstructs the volume, producing a report with new sono markers for her physician.</p></article>'+
     '<article class="step"><h2>Her clinic, one tap away.</h2><p>A dedicated app gives timely access to doctor and data, with swift communication between the woman and her medical team, and fewer in-office visits.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="advantages" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Advantages</span><h2 class="d2 split">What IMMA brings <em>to everyone.</em></h2></div><p data-r>Moving follicle monitoring home serves the woman, her physician and the clinic at once, and it is the first vertical of a platform for women’s health.</p></div>'+
   rows(ADV)+
   '<div class="qts">'+
    '<blockquote data-r><p>“My hope is that this home monitoring ultrasound device will help alleviate some of the stress and anxiety.”</p><cite class="lab">Dr Janet Choi, MD · Chief Medical Officer, Progyny</cite></blockquote>'+
    '<blockquote data-r><p>“The new device would (…) save precious time and (…) thousands of productive working hours would be added to the economy.”</p><cite class="lab">Pr Holzer, MD · TRIO Fertility</cite></blockquote>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Founded by a pharmacist, <em>a fertility doctor and an engineer.</em></h2></div><p data-r>The founding team brings more than 70 years of business, fertility and engineering experience, with a medical advisory board from leading fertility centres in North America and France.</p></div>'+
   team()+
   '<div class="adv"><span class="lab kick" data-r>Medical advisory board</span><p data-r><span>Pr Hananel Holzer <i>· TRIO Fertility</i></span><span>Pietro Bortoletto <i>· Terra Fertility</i></span><span>Dr Charles Tibi <i>· Paris</i></span><span>Dr Martine Valière <i>· Paris</i></span><span>Pr John Petrozza <i>· Fertility Centers of New England</i></span></p></div>'+
   '<div class="adv"><span class="lab kick" data-r>Business team</span><p data-r><span>Daphné Seroussi <i>· CFO</i></span><span>Gila Tolub <i>· Ex-McKinsey Healthcare</i></span><span>Pr Jacob (Kobi) Glazer <i>· Health economics</i></span><span>Emma Karpel <i>· Development engineer</i></span><span>Deborah <i>· Quality manager</i></span></p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">IMMA <em>in the news.</em></h2></div><p data-r>Funding, grants and recognition for at-home ovarian stimulation monitoring.</p></div>'+
   news()+
   '<div class="bk"><span class="lab kick" data-r>Recognition</span><p class="cr" data-r><span>EIC Seal of Excellence <i>2024</i></span><span>VivaTech Top 30 Female Entrepreneur <i>2025</i></span><span>Biomed pitch winner <i>2025</i></span><span>Ventures Israel Best Team <i>2025</i></span><span>Women in Tech Israel winner <i>2024</i></span><span>VivaTech AI pitch winner <i>2023</i></span><span>MassChallenge Israel <i>2021</i></span></p></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinics, partners, investors and engineers</span>'+
   '<h2 class="big split">Come be <em>part of this.</em></h2>'+
   '<p class="sub" data-r>Write to IMMA about at-home monitoring for your clinic or a partnership. The team is also recruiting senior embedded software, AI and full-stack engineers in Modi’in.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/solution">How IMMA works</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Dam HaMacbim 38</span><br><span>Modi’in-Maccabim-Re’ut 7178604, Israel</span></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+972584228823">+972 58 422 88 23</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Modi’in,<br>Israel</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/problem">The problem</a><br><a class="ul" href="#/solution">The solution</a><br><a class="ul" href="#/advantages">Advantages</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+972584228823">+972 58 422 88 23</a><br><a class="ul" href="https://www.linkedin.com/company/imma-health/" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">The system</span>Probe<br>Ultrasound<br>AI report<br>App</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Jost\',\'Figtree\',system-ui,sans-serif;font-weight:300;font-size:68px;letter-spacing:.3em"><tspan fill="#faf1f4">IMMA</tspan><tspan fill="#fe3385" font-size="40" letter-spacing=".34em"> HEALTH</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 IMMA Health</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={problem:"problem",solution:"story",advantages:"advantages",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"IMMA Health — at-home ovarian stimulation monitoring for IVF",x:"Home"};
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
