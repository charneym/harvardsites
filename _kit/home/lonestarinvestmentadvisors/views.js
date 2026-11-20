/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function crit(){return '<ol class="crit">'+CRIT.map(function(c,i){return '<li><span class="lab n">0'+(i+1)+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ol>'}
function port(){return '<ul class="pf">'+PORT.map(function(c){return '<li><a class="pfa" href="'+c.u+'" target="_blank" rel="noopener"><h3>'+esc(c.n)+'</h3><p>'+esc(c.w)+'</p><p class="m"><span class="lab">'+esc(c.y)+'</span><span>'+esc(c.d)+'</span></p><span class="c4">'+ARR+'</span></a></li>'}).join("")+'</ul>'}
function team(){return '<section class="mh"><div class="mh-group"><p class="mh-label">Management team</p><ul class="mh-list">'+TEAM.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span></div></li>'}).join("")+'</ul></div></section>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lone Star Investment Advisors<span class="nomob"> · Dallas, Texas</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Private equity</span><span class="l">rooted in Texas</span><span class="l"><em>communities.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Leveraged acquisitions and recapitalizations of strategically viable middle-market companies, in the low- to moderate-income communities of the state of Texas.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">Our approach '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What we do</span>'+
   '<h2 class="txt" id="mani">For more than thirty years, Lone Star has invested in low-income areas of Texas, backing companies that create jobs where they are located, and serving a <em>dual bottom line</em> of community development and top-quartile returns.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">30+ yrs</span><span class="k">Investing in the low-income areas of Texas</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">35+</span><span class="k">Companies backed by the Fund’s managers through affiliated funds</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.6x</span><span class="k">Return on investment of the Lone Star CRA Fund partnership, with a 13.6% IRR (2025)</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">From the community to the <em>exit.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Communities</span><span>Companies</span><span>Commitment</span><span>Exit</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Rooted in Texas communities.</h2><p>From its Dallas office, the Lone Star family of funds makes equity and equity-oriented investments in middle-market companies located in low- to moderate-income communities in the state of Texas.</p></article>'+
     '<article class="step"><h2>Strategically viable companies.</h2><p>Leveraged acquisitions and recapitalizations of businesses with strong potential for growth, across manufacturing, industrial, distribution, business services and energy.</p></article>'+
     '<article class="step"><h2>An ongoing commitment.</h2><p>Resources committed to company growth pay returns for every stakeholder. With Lone Star, Alsay grew revenue at a 25% compound annual rate for five years; Green Energy brought 150 jobs to Fairfield.</p></article>'+
     '<article class="step"><h2>All the way through the exit.</h2><p>Lone Star works with management on the best approach to exit, drawing on a vast network of intermediaries: a 6.24x cash-on-cash return on Petroplex in 2012, and 2.1x on Alsay in 2025.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Where Lone Star <em>invests.</em></h2></div><p data-r>Lone Star specializes in investments that create employment opportunities in the communities in which companies are located, and maintains a strong reputation for driving economic growth in low-income areas.</p></div>'+
   crit()+
   '<div class="two how"><div><span class="lab kick" data-r>The Lone Star funds</span><h3 class="d3 split">Community development, <em>and returns.</em></h3></div><div>'+aims(HOW)+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Texas companies, <em>built to grow.</em></h2></div><p data-r>A selection of investments announced publicly by Lone Star, its funds and their counterparties.</p></div>'+
   port()+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>Lone Star.</em></h2></div><p data-r>With over twenty years of private equity experience, the Fund’s managers have invested in over 35 companies through affiliated funds.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">News and <em>announcements.</em></h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, management teams and intermediaries</span>'+
   '<h2 class="big split">Let’s build in <em>Texas.</em></h2>'+
   '<p class="sub" data-r>If your company is a strategically viable, middle-market Texas business with strong potential for growth, we would like to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Lone Star '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Lone Star Investment Advisors, LLC<br>4455 LBJ Freeway, Suite 300<br>Dallas, TX 75244</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br>Fax (972) 702-7391</p><p class="dl" data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p class="dl" data-r>Lone Star Investment Advisors, LLC is an SEC-registered investment adviser. Nothing on this site is an offer to sell or a solicitation of an offer to buy any security.</p><p class="dl" data-r><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on the SEC’s adviser search</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>4455 LBJ Freeway, Suite 300<br>Dallas, TX 75244</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Investors</span><a class="ul" href="https://services.intralinks.com/branding/5089327766/?clientID=5089327766" target="_blank" rel="noopener">Investor login</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-weight:500;font-size:44px;letter-spacing:.04em">LONE STAR</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Lone Star Investment Advisors, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Lone Star Investment Advisors — Dallas private equity for Texas communities",x:"Home"};
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
