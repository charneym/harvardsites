/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Visit '+esc(c[0])+'</a></li>'}).join("")+'</ul>'}
function prior(){return '<ul class="pri">'+PRIOR.map(function(n){return '<li><span>'+esc(n)+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Consumer private equity<span class="nomob"> · Westport, Connecticut</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Exceptional,</span><span class="l">highly recognizable</span><span class="l"><em>consumer brands.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tengram Capital Partners invests in branded consumer products and retail companies, backing strong brands alongside strong management teams.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>What’s in a name</span>'+
   '<h2 class="txt" id="mani"><b class="w0">Ten:</b> one deserving the highest rating. <b class="w0">Engram:</b> the memory of a word, an image, or a <em>great consumer experience.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$320M</span><span class="k">Final close of Tengram Capital Partners Fund II, June 2015</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7</span><span class="k">Consumer segments in focus, from apparel to food and beverage</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3 decades</span><span class="k">Combined experience of the founding partners in branded consumer companies</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Seasoned management</span><p data-r>Proven operators and investors with over three decades of combined experience investing in branded consumer product companies.</p></div>'+
    '<div><span class="lab kick" data-r>Return-enhancing strategy</span><p data-r>Consumer or retail companies with underdeveloped or growing brands, at attractive valuations, in strong segments of the consumer space.</p></div>'+
    '<div><span class="lab kick" data-r>A catalyst for growth</span><p data-r>Tengram invests in strong brands alongside strong management teams, and believes it can act as a catalyst to drive the growth of the companies it backs.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Investment principles</span><h2 class="d3">How a brand earns a place <em>on the shelf.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Brand</span><span>Risk</span><span>Team</span><span>Growth</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Exceptional brands.</h2><p>Brands with a high potential for growth, or significant untapped value: the kind a consumer remembers.</p></article>'+
     '<article class="step"><h2>Risk management.</h2><p>Due diligence, proper structuring and vetted brand extensions all reduce the risk of an investment.</p></article>'+
     '<article class="step"><h2>Strong management.</h2><p>Backing exceptional management teams, merchants and designers leads to value creation.</p></article>'+
     '<article class="step"><h2>Kinetic growth.</h2><p>Every investment must have the potential to grow from where it stands today, whether a growth or a restructuring story.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split">Strong brands, <em>strong teams.</em></h2></div><p data-r>Tengram seeks to invest in and partner with companies across the consumer sector. Its principals bring significant consumer expertise to a focused set of segments.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Brands people <em>remember.</em></h2></div><p data-r>Current investments across wellness, beauty and apparel, and a record of prior investments in recognizable consumer and retail names.</p></div>'+
   '<span class="lab sub-l" data-r>Current investments</span>'+pfRows(PF)+
   '<span class="lab sub-l pr" data-r>Prior investments</span>'+prior()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Operators and <em>investors.</em></h2></div><p data-r>A team that has spent careers building, managing and investing in consumer brands, from Windsong and Joe Boxer to Bain & Company.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the <em>portfolio.</em></h2></div><p data-r>Fund news and portfolio company announcements.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Founders, owners and intermediaries</span>'+
   '<h2 class="big split">Build a brand worth <em>remembering.</em></h2>'+
   '<p class="sub" data-r>If you lead or advise a branded consumer products or retail company with room to grow, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Tengram '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Tengram Capital Partners<br>15 Riverside Avenue, First Floor<br>Westport, CT 06880</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Partners</span><p data-r><a class="ul" href="https://icx.efrontcloud.com/tengramcapital" target="_blank" rel="noopener">Partner login</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>15 Riverside Avenue, First Floor<br>Westport, CT 06880</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/approach">Approach</a><br><a class="ul" href="#/more/criteria">Criteria</a><br><a class="ul" href="#/more/portfolio">Portfolio</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Partners</span><a class="ul" href="https://icx.efrontcloud.com/tengramcapital" target="_blank" rel="noopener">Partner login</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:700;font-size:66px;letter-spacing:-.02em">TENGRAM</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tengram Capital Partners</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item except Contact opens #/more/<item> ================= */
var MORE={approach:"Approach",criteria:"Criteria",portfolio:"Portfolio",team:"Team",news:"News"};
function vMore(k){return function(){
  return '<section class="ph-head more" data-field data-theme="dark"><span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+esc(MORE[k])+', <em>built out.</em></h1>'+
   '<p class="lede intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a><a class="ul lk2" href="#/'+k+'">Or keep scrolling the concept</a></div>'+
  '</section>'}}
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(p[0]==="more"&&MORE[p[1]])return {k:"more",v:vMore(p[1]),t:MORE[p[1]]+" — Tengram Capital Partners",x:MORE[p[1]]};
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tengram Capital Partners — Consumer private equity, Westport, Connecticut",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(!r.sec)return;
  if(curKey!=="home"){pendSec(r.sec);return}
  e.preventDefault();e.stopPropagation();if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
/* "keep scrolling the concept": once the home view is back and the transition has cleared, glide to the section */
function pendSec(id){var n=0;(function wait(){if(++n>80)return;var ok=curKey==="home"&&!busy&&document.getElementById(id)&&document.documentElement.style.overflow!=="hidden";if(!ok){setTimeout(wait,120);return}
  setTimeout(function(){secGo(id);try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"},350)})()}
