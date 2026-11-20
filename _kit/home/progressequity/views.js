/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){var nm=c[3]?'<a class="pl" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[0])+ARRX+'</a>':esc(c[0]);
  return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+nm+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+TEAM.map(function(p){return '<article class="pt"><div class="ph"><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"></div>'+
  '<h3><span>'+esc(p.name)+'</span></h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.note)+'</p></article>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Entrepreneurial private equity<span class="nomob"> · Denver, Colorado · Since 2006</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Progress</span><span class="l">through <em>growth.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We acquire majority control of lower-middle-market companies, typically from their founders: liquidity today, and a partner to take the business to its next stage of growth.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Progress Equity</span>'+
   '<h2 class="txt" id="mani">We give entrepreneurs the opportunity to gain liquidity while partnering with us to transition their business for <em>future growth.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$800M+</span><span class="k">Total realized proceeds across the partners’ track record</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><span class="k">Platform transactions over more than 25 years</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2006</span><span class="k">Progress Equity formed; the partners have worked on deals together since the 1990s</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Our own capital</span><p data-r>Each partner invests personal capital in every investment, alongside a select group of individuals, including founders of companies we have previously acquired.</p></div>'+
    '<div><span class="lab kick" data-r>A flexible hold</span><p data-r>Without the restrictive parameters of an institutional fund, we can hold for the long term and time the exit in partnership with management.</p></div>'+
    '<div><span class="lab kick" data-r>Senior attention</span><p data-r>Our principals bring meaningful operating, financial and transactional experience, and deliver senior attention to every investment.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we create growth</span><h2 class="d3">Founder-run to <em>professionally managed.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Partner</span><span>Build</span><span>Grow</span><span>Exit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Partner with the founder.</h2><p>A leveraged recapitalization gives the founder meaningful liquidity while they retain a significant equity stake for future upside, and, if desired, a reduced management role. We do not take over day-to-day management.</p></article>'+
     '<article class="step"><h2>Build the organisation.</h2><p>Active board involvement in setting strategy, an experienced management team with aligned interests, and the financial reporting and controls that remove the key-person risk of a founder-run company.</p></article>'+
     '<article class="step"><h2>Grow, by design.</h2><p>We source, evaluate and execute add-on acquisitions, arrange and negotiate the financing to support growth, and attract industry-knowledgeable directors to the board.</p></article>'+
     '<article class="step"><h2>Exit together.</h2><p>A professionally managed company is worth more and draws a much larger universe of buyers. We create the exit strategy, and time it, in partnership with management.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Profitable, scalable, <em>founder-built.</em></h2></div><p data-r>We invest in a wide variety of industries. Our investments generally share these characteristics, and situations like these suit our experience well.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Companies we are <em>growing now.</em></h2></div><p data-r>The partners’ track record spans over 25 years and 30 platform transactions. Our current portfolio includes:</p></div>'+
   pfRows(PF)+
   '<div class="credit"><span class="lab" data-r>Select realized investments</span><p data-r>'+REAL.map(esc).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Partners who invest <em>alongside you.</em></h2></div><p data-r>The partners started working together on deals in the 1990s and formed Progress Equity in 2006. Every partner invests personal capital in every investment.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>activity.</em></h2></div><p data-r>Announcements from Progress Equity and its portfolio companies.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Founders, owners and intermediaries</span>'+
   '<h2 class="big split">Ready for the <em>next stage?</em></h2>'+
   '<p class="sub" data-r>If you own or advise a profitable, founder-built company with at least $2 million of EBITDA, anywhere in the United States, we would be glad to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Progress Equity '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Denver office</span><p data-r>Progress Equity Partners, LLC<br>6400 S Fiddlers Green Circle, Suite 440<br>Greenwood Village, CO 80111</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:steve@progressequity.com">steve@progressequity.com</a><br><a class="ul" href="mailto:paul@progressequity.com">paul@progressequity.com</a><br><a class="ul" href="mailto:carolina@progressequity.com">carolina@progressequity.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>6400 S Fiddlers Green Circle, Suite 440<br>Greenwood Village, CO 80111</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/about">About</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Investing since</span>The partners, 1990s<br>Progress Equity, 2006</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 76" aria-hidden="true"><text x="450" y="60" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:600;font-size:74px;letter-spacing:.02em;font-variant:small-caps">Progress Equity</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Progress Equity Partners, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Progress Equity Partners — Entrepreneurial private equity, Denver, Colorado",x:"Home"};
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
