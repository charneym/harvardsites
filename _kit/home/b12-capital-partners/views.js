/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function holdRows(list){return '<ul class="pfr hd">'+list.map(function(h){return '<li><span class="lab tg">'+h[1].length+' companies</span><h3>'+esc(h[0])+'</h3><p>'+h[1].map(esc).join(" · ")+'</p></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){return '<li><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Ownership transition capital<span class="nomob"> · Shawnee, Kansas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">We understand,</span> <span class="l">because we’ve been there.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A private capital firm partnering with the owners and managers of manufacturing and distribution companies with $5 to $50 million in revenue, from our Midwest base.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Financial and operating experience</span>'+
   '<h2 class="txt" id="mani">More art than science: a good acquisition is about the relationships with everyone inside and outside the company.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><span class="k">Long-term vertical holding companies, built buy-and-build</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">21</span><span class="k">Operating companies across those holding companies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$5–50M</span><span class="k">Revenue of the manufacturers and distributors we partner with</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>For business owners</span><p data-r>A fair price for the foundation you laid, an honest and ethical process, and no need for major changes while the business performs.</p></div>'+
    '<div><span class="lab kick" data-r>For managers</span><p data-r>You keep day-to-day operational control, with real ownership incentives tied to the company’s success.</p></div>'+
    '<div><span class="lab kick" data-r>Investment partners</span><p data-r>Former and current owners and executives in our focus industries, who join due diligence and mentor portfolio CEOs.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Transaction types</span><h2 class="d3">From one company to a holding company.</h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Sale</span><span>Recap</span><span>Add-ons</span><span>Holdings</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Change of</span> <span class="nw">ownership.</span></h2><p>Owners who want to sell and retire can look to B12 to partner with the remaining management team and buy the company.</p></article>'+
     '<article class="step"><h2>Recapitalization.</h2><p>An owner who wants to diversify can stay on as a minority investor and share in the next round of growth.</p></article>'+
     '<article class="step"><h2><span class="nw">Growth through</span> <span class="nw">strategic acquisitions.</span></h2><p>B12 knows the opportunities and pitfalls of strategic acquisitions, and of integrating them once they close.</p></article>'+
     '<article class="step"><h2><span class="nw">Holding companies</span> <span class="nw">for the long term.</span></h2><p>Companies in the same vertical are built into holding companies for the long term: six of them today, with 21 companies.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment parameters</span><h2 class="d2 split"><span class="nw">Proven business,</span> <span class="nw">sound position.</span></h2></div><p data-r>A proven business model, a sustainable competitive position and identifiable growth prospects. We avoid start-ups and companies with significant technology or regulatory risk.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split"><span class="nw">Built for</span> <span class="nw">the long term.</span></h2></div><p data-r>Six vertical holding companies, from attachments and work tools to fire and life safety: manufacturers and distributors built together.</p></div>'+
   holdRows(HOLD)+
   '<p class="fn" data-r>Other noteworthy past and present investments: '+OTHER.map(esc).join(", ")+'.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Managing partners</span><h2 class="d2 split"><span class="nw">Owners, buyers</span> <span class="nw">and sellers before.</span></h2></div><p data-r>Both partners have been business owners, buyers and sellers, members of management teams through ownership changes, and private capital managers.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio company involvement</span><h2 class="d2 split"><span class="nw">Rolling up</span> <span class="nw">our sleeves.</span></h2></div><p data-r>Management keeps operational control. We help with customers, suppliers and at the board level, sharing the responsibility for meeting the plan.</p></div>'+
   '<ul class="inv">'+INV.map(function(t){return '<li data-r>'+esc(t)+'</li>'}).join("")+'</ul>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Business owners, managers and advisers</span>'+
   '<h2 class="big split"><span class="nw">Tell us about</span> <span class="nw">your company.</span></h2>'+
   '<p class="sub" data-r>A win-win-win for key management, your legacy and our investors.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Greg Gaeddert '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Mailing address</span><p data-r>P.O. Box 3279<br>Shawnee, KS 66203</p></div>'+
    '<div><span class="lab" data-r>Gregory L. Gaeddert</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Michael D. Wedel</span><p data-r><a class="ul" href="mailto:'+MAIL2+'">'+MAIL2+'</a><br><a class="ul" href="tel:'+TEL2+'">'+TELT2+'</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Mail</span>P.O. Box 3279<br>Shawnee, KS 66203</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Parameters</a><br><a class="ul" href="#/investments">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/involvement">Involvement</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="52" text-anchor="middle" style="font-family:\'Roboto Slab\',Rockwell,serif;font-weight:700;font-size:58px;letter-spacing:.02em">B12 CAPITAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 B12 Capital Partners, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={parameters:"criteria",involvement:"news",about:"about",approach:"story",focus:"criteria",criteria:"criteria",investments:"portfolio",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"B12 Capital Partners — Ownership transition capital, Kansas City",x:"Home"};
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
