/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function host(u){return u.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"")}
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><a href="'+c[3]+'" target="_blank" rel="noopener"><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><span class="lab ws">'+esc(host(c[3]))+' ↗</span></a></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+TEAM.map(function(p){return '<article class="pt"><div class="ph"><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"></div>'+
  '<h3><span>'+esc(p.name)+'</span></h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.bio)+'</p>'+
  '<p class="pl"><a class="ul" href="mailto:'+p.mail+'">'+esc(p.mail)+'</a><a class="ul" href="'+p.li+'" target="_blank" rel="noopener">LinkedIn</a></p></article>'}).join("")+'</div>'}
function news(){return '<ul class="nw">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[2])+'</h3><span class="lab src">'+esc(n[1])+' ↗</span></a></li>'}).join("")+'</ul>'}
function lst(a){return '<ul class="ck">'+a.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lower middle-market private equity<span class="nomob"> · Summit, New Jersey</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A fresh perspective</span><span class="l">for family and</span><span class="l"><em>founder-owned</em> companies.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A private equity firm providing liquidity solutions and strategic capital to closely-held manufacturing and business services companies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">Investment profile '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>sī-ˈdir-ē-əl (adj.) · of, relating to, or expressed in relation to the stars</span>'+
   '<h2 class="txt" id="mani">Strategic capital and a process-driven approach to accelerating the growth of historically <em>resource-constrained</em> companies.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$500M+</span><span class="k">Equity capital invested by the team, at Sidereal and predecessor firms</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">20</span><span class="k">Platform companies across that shared history</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$8–25M</span><span class="k">Equity invested per platform, as a control investor</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Growth mindset</span><p data-r>We relentlessly pursue continuous improvement within ourselves, our firm and the companies in which we invest.</p></div>'+
    '<div><span class="lab kick" data-r>Integrity</span><p data-r>A categorical commitment to transparency, authenticity and accountability in all of our interactions.</p></div>'+
    '<div><span class="lab kick" data-r>Inclusiveness</span><p data-r>We value each individual’s strengths and cultivate a safe environment for healthy debate and integrated thinking.</p></div>'+
    '<div><span class="lab kick" data-r>Prudence</span><p data-r>Judicious stewards of our resources: iterative, data-driven and focused on incremental, attainable goals.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">Catalysts of organizational <em>transformation.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Focus</span><span>Analysis</span><span>M&amp;A</span><span>Management</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Lower middle-market focus.</h2><p>We invest where we can have the greatest relative impact: smaller, fundamentally sound family and founder-owned businesses, often as their first institutional investor.</p></article>'+
     '<article class="step"><h2>Analytical discipline.</h2><p>Before any investment we work with management to set a clearly defined thesis and growth plan, backed by rigorous analysis of the core value drivers.</p></article>'+
     '<article class="step"><h2>Strategic M&amp;A.</h2><p>Once established in a segment, we buy and build: complementary acquisitions add scale, broaden the customer base and expand the product offering.</p></article>'+
     '<article class="step"><h2>Proactive management.</h2><p>As a control investor we support the move from owner-operator to institutional management: closing skill gaps, upgrading systems and governance, and cutting costs.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment profile</span><h2 class="d2 split">Niche leaders, ready for <em>their next stage.</em></h2></div><p data-r>We focus exclusively on lower middle-market companies operating in well-defined niches within the manufacturing and industrial services sectors.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
   '<div class="two"><div><span class="lab kick" data-r>Transaction profile</span>'+lst(DEALS)+'</div><div><span class="lab kick" data-r>Company attributes</span>'+lst(ATTR)+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Built in partnership with <em>management.</em></h2></div><p data-r>Current and realized investments in specialty manufacturing and business services companies across the United States and Canada.</p></div>'+
   '<span class="lab grp" data-r>Current investments</span>'+pfRows(PF)+
   '<span class="lab grp" data-r>Realized investments</span>'+pfRows(PFR)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A long history of working <em>together.</em></h2></div><p data-r>A cohesive team of investment professionals who have successfully executed this strategy together at Sidereal and at predecessor firms.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>announcements.</em></h2></div><p data-r>Acquisitions by Sidereal and its portfolio companies, as reported in the press.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, executives and intermediaries</span>'+
   '<h2 class="big split">Plan your company’s <em>next chapter.</em></h2>'+
   '<p class="sub" data-r>If you own, lead or advise a family or founder-owned manufacturing or business services company, we would be glad to talk in confidence.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Sidereal '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Sidereal Capital Group, LLC<br>350 Springfield Avenue, Suite 200<br>Summit, NJ 07901</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Connect</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>350 Springfield Avenue, Suite 200<br>Summit, NJ 07901</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Connect</span><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:500;font-size:62px;letter-spacing:.06em">SIDEREAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Sidereal Capital Group, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Sidereal Capital Group — Lower middle-market private equity, Summit, New Jersey",x:"Home"};
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
