/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function prior(){return '<ul class="pri">'+PRIOR.map(function(n){return '<li><span>'+esc(n)+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private equity<span class="nomob"> · Montréal, Québec</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Flexible,</span><span class="l">entrepreneurial</span><span class="l"><em>partners.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Champlain Financial Corporation invests in Canadian small and mid-market companies, creating value through an actively involved, relationship-based approach.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">Direction, expertise, creative ideas and capital, with an <em>unwavering commitment</em> to the growth and success of our portfolio companies.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2004</span><span class="k">Year Pierre Simard founded Champlain Financial Corporation in Montréal</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$3–20M</span><span class="k">EBITDA range of a typical Champlain investment</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">25</span><span class="k">Companies in the current portfolio, from packaging to seafood</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Entrepreneurial</span><p data-r>A dynamic team of investment professionals using a highly entrepreneurial approach, focused on small and mid-sized companies.</p></div>'+
    '<div><span class="lab kick" data-r>Actively involved</span><p data-r>We enhance the strategy, operations and finances of our portfolio companies, with the goal of rendering them best-in-class in all these areas.</p></div>'+
    '<div><span class="lab kick" data-r>Built over time</span><p data-r>A diverse portfolio, several successful exits, and a stable of companies and pipeline of prospects that keeps growing.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">How we grow sales <em>and profitability.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Plan</span><span>Streamline</span><span>Develop</span><span>Acquire</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Effective strategic planning.</h2><p>We look for businesses with solid industry fundamentals and identifiable opportunities to grow, and set out a plan with management.</p></article>'+
     '<article class="step"><h2>Streamlined operations.</h2><p>Hands-on, operation-oriented partners work alongside the team to improve how the business runs.</p></article>'+
     '<article class="step"><h2>Business development.</h2><p>Improving how the company finds and serves customers, growing organically from where it stands today.</p></article>'+
     '<article class="step"><h2>A structured acquisition program.</h2><p>Add-on acquisitions that turn a strong company into a platform, as Équipement St-Germain did with Location Alary in 2026.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Capital, and <em>a partner.</em></h2></div><p data-r>We adopt a flexible and opportunistic approach to investing. These criteria best describe our typical investment targets.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Companies with <em>a growth story.</em></h2></div><p data-r>We seek out companies with a unique growth story and solid industry fundamentals, across Quebec, the rest of Canada and the United States.</p></div>'+
   '<span class="lab sub-l" data-r>Current portfolio</span>'+pfRows(PF)+
   '<span class="lab sub-l pr" data-r>Illustrative exits</span>'+prior()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Investors who have <em>run companies.</em></h2></div><p data-r>Partners from McKinsey, Lazard and BCG, and operating partners who have led St-Hubert, Mountain Equipment Co-op and Champlain portfolio companies.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>transactions.</em></h2></div><p data-r>New partnerships and add-on acquisitions across the portfolio.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, managers and intermediaries</span>'+
   '<h2 class="big split">Let’s build <em>the next chapter.</em></h2>'+
   '<p class="sub" data-r>If you lead or advise a Canadian company looking for capital and an operation-oriented partner, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Champlain '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Montréal</span><p data-r>1000, rue Sherbrooke Ouest<br>Bureau 1700<br>Montréal, Québec H3A 3G4</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Vancouver</span><p data-r>301-850 W Hastings<br>Vancouver, British Columbia<br>V6C 3J1</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><a class="ul lk" href="https://champlaincanada.firmex.com" target="_blank" rel="noopener" data-r>Investors access</a></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Montréal</span>1000, rue Sherbrooke Ouest, bureau 1700<br>Montréal, Québec H3A 3G4</div>'+
   '<div class="c"><span class="lab">Vancouver</span>301-850 W Hastings<br>Vancouver, BC V6C 3J1</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/approach">Approach</a><br><a class="ul" href="#/more/criteria">Criteria</a><br><a class="ul" href="#/more/portfolio">Portfolio</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="https://champlaincanada.firmex.com" target="_blank" rel="noopener">Investors access</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 70" aria-hidden="true"><text x="260" y="56" text-anchor="middle" style="font-family:\'Spectral\',Georgia,serif;font-weight:400;font-size:82px;letter-spacing:-.01em">Champlain</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Champlain Financial Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item but Contact opens #/more/<item> ================= */
var MORE={approach:["Approach","approach"],criteria:["Criteria","criteria"],portfolio:["Portfolio","portfolio"],team:["Team","team"],news:["News","news"]};
function vMore(id){var m=MORE[id];
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(m[0])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act more-act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a></div>'+
   '<a class="ul more-lk" data-r href="#/'+m[1]+'">Or keep scrolling the concept</a></section>';
}

/* ================= ROUTER: #/ is the home page; #/<section> scrolls to that section; #/more/<item> is a build-out page ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more-"+p[1],v:function(){return vMore(p[1])},t:MORE[p[1]][0]+" — Champlain Financial Corporation",x:MORE[p[1]][0]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Champlain Financial Corporation — Private equity for Canadian small and mid-market companies",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
/* on the home page, section links scroll in place */
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a||curKey!=="home")return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"",location.hash==="#/"?"#/":"#/")}catch(x){}prevHash="#/"});
/* arriving at a section from a build-out page (or a cold link): wait for the home view, then jump to the section */
function secAfter(sec){var n=0;(function wait(){if(++n>80)return;var lk=document.documentElement.style.overflow==="hidden"||curKey!=="home"||busy||!document.getElementById(sec);if(lk){setTimeout(wait,120);return}
  setTimeout(function(){secGo(sec,true);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},250)})()}
addEventListener("hashchange",function(){var r=route(location.hash);if(curKey!=="home"&&r.k==="home"&&r.sec)secAfter(r.sec)});
(function(){var r=route(location.hash);if(r.k==="home"&&r.sec)secAfter(r.sec)})();
