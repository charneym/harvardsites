/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function crit(){return '<ol class="crit">'+CRIT.map(function(c,i){return '<li><span class="lab n">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ol>'}
function port(){return '<ul class="pf">'+PORT.map(function(c){return '<li><a class="pfa" href="'+c.u+'" target="_blank" rel="noopener"><h3>'+esc(c.n)+'</h3><p>'+esc(c.w)+'</p><p class="m"><span class="lab">'+esc(c.y)+'</span><span>'+esc(c.d)+'</span></p><span class="c4">'+ARR+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+TEAM.map(function(p){return '<article class="pt"><div class="ph"><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"></div>'+
  '<div class="tx"><h3><span>'+esc(p.name)+'</span></h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.bio)+'</p><p class="tl"><a class="ul" href="'+p.telh+'">'+p.tel+'</a><a class="ul" href="mailto:'+p.mail+'">'+p.mail+'</a></p></div></article>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mutual Capital Investment Fund, LP<span class="nomob"> · Wyalusing, Pennsylvania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Capital that</span><span class="l">keeps mutuals</span><span class="l"><em>mutual.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Growth capital for mutual insurance companies and mutual holding companies, raised from the mutual community and invested in a manner that is “mutual-friendly.”</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How the Fund works '+ARR+'</a><a class="btn" href="#/contact">Talk to us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>We believe in the mutual industry</span>'+
   '<h2 class="txt" id="mani">One of the greatest needs mutual insurers face is access to strategic growth capital. Formed by Mutual Capital Group, the Fund brings a mutual heritage of almost <em>150 years</em> to meeting it.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$56.25M</span><span class="k">Capital commitment from a multi-billion dollar institutional investment manager, 2022</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">45%</span><span class="k">The cap that investor accepted, so the mutual community can provide the majority of capital</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">~150 yrs</span><span class="k">Mutual heritage behind the Fund’s sponsor, Mutual Capital Group</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the Fund works</span><h2 class="d3">Raised by mutuals, built for <em>mutuals.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Raise</span><span>Invest</span><span>Report</span><span>Partner</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A foundation laid by the mutual community.</h2><p>The Fund raises capital primarily from the mutual community. Its institutional investor agreed to limit its participation to 45%, so mutuals provide the majority.</p></article>'+
     '<article class="step"><h2>Growth capital, raised on your frame.</h2><p>MCIF makes minority investments in mutual insurance companies and mutual holding companies, growth capital provided in a manner that is mutual-friendly.</p></article>'+
     '<article class="step"><h2>Built to statutory standards.</h2><p>A Fund investment is structured as an admitted asset for statutory purposes, with quarterly reporting of Fund value supported by an independent valuation firm.</p></article>'+
     '<article class="step"><h2>A patient partner for the long term.</h2><p>With co-investment interest from its institutional investor, MCIF can evaluate and lead a mutual transaction of virtually any size, and remain a patient, mutual-friendly source of capital.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment focus</span><h2 class="d2 split">Where the Fund <em>invests.</em></h2></div><p data-r>No longer do mutuals need to face a lack of access to capital. The Fund focuses on companies that mutual investors understand, and on transactions that further the preservation of the mutual industry.</p></div>'+
   crit()+
   '<div class="two how"><div><span class="lab kick" data-r>For our investors</span><h3 class="d3 split">An alternative investment mutuals <em>understand.</em></h3></div><div>'+aims(HOW)+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Capital at <em>work.</em></h2></div><p data-r>Investments the Fund and its counterparties have announced publicly.</p></div>'+
   port()+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Leadership</span><h2 class="d2 split">Deep roots in the <em>mutual industry.</em></h2></div><p data-r>The Fund’s management company is Mutual Capital Investment Advisors, LLC. Its sponsor is Mutual Capital Group, Inc., of Wyalusing, Pennsylvania.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">Know the <em>news.</em></h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Capital, investment, or both</span>'+
   '<h2 class="big split">Yes, let’s <em>talk.</em></h2>'+
   '<p class="sub" data-r>Whether your company is looking for additional capital or for a unique investment opportunity, or both, Mutual Capital Investment Fund is here to serve. In person, by video conference or by telephone.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Jason Wolfe '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Mutual Capital Investment Advisors, LLC<br>41908 Route 6, PO Box 7<br>Wyalusing, PA 18853</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r>Jason K. Wolfe<br><a class="ul" href="'+TELH+'">'+TEL+'</a></p><p class="dl" data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p class="dl" data-r>Offers to invest in MCIF are made only by means of a private placement memorandum and related documents, in accordance with applicable securities laws.</p><p class="dl" data-r><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on the SEC’s adviser search</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>41908 Route 6, PO Box 7<br>Wyalusing, PA 18853</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Mutual Capital Group</span><a class="ul" href="https://mutualcapitalgrp.com/" target="_blank" rel="noopener">mutualcapitalgrp.com</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="35" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:600;font-size:40px;letter-spacing:.02em">Mutual Capital</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Mutual Capital Investment Advisors, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Mutual Capital Investment Fund — Mutual-friendly growth capital for the mutual insurance industry",x:"Home"};
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
