/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">Visit site</a></li>'}).join("")+'</ul>'}
function arms(){return '<ul class="arms">'+ARMS.map(function(a,i){return '<li><span class="lab n">0'+(i+1)+'</span><h3>'+esc(a[0])+'</h3><span class="lab k">'+esc(a[1])+'</span><p>'+esc(a[2])+'</p></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Mergers and acquisitions<span class="nomob"> · Cannock, Staffordshire</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Creating growth,</span><span class="l">releasing capital,</span><span class="l"><em>since 2009.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Shilling buys established small and medium-sized businesses directly, with fully funded offers, then backs new management to develop and expand them for the next decade.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Open a discussion</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why we do it</span>'+
   '<h2 class="txt" id="mani">Owners of small businesses rarely have a natural exit. We <b class="w0">release</b> those wishing to move on, give <b class="w0">opportunity</b> to those driven to grow, and give new life to businesses <em>so lovingly built over many years.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2009</span><span class="k">The year Shilling began acquiring, developing and supporting businesses</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><span class="k">Shilling businesses: Acquisitions, Partners, Support and Money</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">No fees</span><span class="k">Charged to an owner who sells to Shilling. We are buyers, not brokers</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Funders and facilitators</span><p data-r>At our core we fund and facilitate acquisitions, providing everything needed to acquire, nurture, grow and breathe new life into a business.</p></div>'+
    '<div><span class="lab kick" data-r>Seller-friendly and discreet</span><p data-r>We never market your business, so the risk to confidential data is all but eliminated, and the process is built to keep both sides’ adviser costs down.</p></div>'+
    '<div><span class="lab kick" data-r>For the next decade</span><p data-r>Once a business is acquired, we put in new, creative and dynamic management and support it fully to develop and expand.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Selling to Shilling</span><h2 class="d3">From a working life’s effort <em>to a clean exit.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Review</span><span>Offer</span><span>Complete</span><span>Grow</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>An initial review.</h2><p>We look at your business as it is now and talk through your expectations and how to achieve them.</p></article>'+
     '<article class="step"><h2>A fully funded offer.</h2><p>Not a broker’s valuation: an offer ready to go, subject only to due diligence and contract. If the timing is wrong, we can repeat it next year.</p></article>'+
     '<article class="step"><h2>A quiet completion.</h2><p>A streamlined, seller-friendly process from due diligence to legal completion and payout, with almost no disruption to the business.</p></article>'+
     '<article class="step"><h2>The next decade.</h2><p>New management steps in with Shilling’s full support, to develop and expand the business you built.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we look for</span><h2 class="d2 split">Proven businesses, <em>ready for their next owner.</em></h2></div><p data-r>Shilling buys companies with a proven track record from owners ready to step back. Our full Acquisition Criteria are sent on request.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
   '<span class="lab sub-l" data-r>The Shilling businesses</span>'+arms()+
   '<p class="crq" data-r><a class="ul lk" href="https://shillinggroup.com/aquisition-criteria/" target="_blank" rel="noopener">Request the Acquisition Criteria '+ARR+'</a></p>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Built over decades, <em>backed for the next.</em></h2></div><p data-r>Recent acquisitions by the Group, as reported in the press. The Group holds its trading businesses as sole, majority or minority shareholder.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Buyers, not <em>brokers.</em></h2></div><p data-r>Shilling has acquired, developed and supported businesses since 2009, and knows what an owner puts in every day of every year to make one work.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Deals and <em>briefings.</em></h2></div><p data-r>Recent acquisitions, and the Shilling Summary, our daily digest of the news that matters to business owners.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, partners and advisers</span>'+
   '<h2 class="big split">Get what you want <em>out of your business.</em></h2>'+
   '<p class="sub" data-r>Whether you are thinking of selling, retiring, moving on, or are just curious, we can talk through your expectations and make an offer for your business as it is now.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Shilling '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Shilling Group<br>First Floor, Falcon Point<br>Park Plaza, Cannock WS12 2DE</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Hours</span><p data-r>Monday to Friday<br>9am to 5pm</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>First Floor, Falcon Point, Park Plaza<br>Cannock WS12 2DE</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/more/approach">Approach</a><br><a class="ul" href="#/more/criteria">Criteria</a><br><a class="ul" href="#/more/portfolio">Portfolio</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c"><span class="lab">Read</span><a class="ul" href="https://shillinggroup.com/shilling-summary/" target="_blank" rel="noopener">The Shilling Summary</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Jost\',Arial,sans-serif;font-weight:500;font-size:60px;letter-spacing:.14em">SHILLING</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Shilling Group</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= BUILD-OUT PAGES (HOME_BRIEF update 2026-11-20): every nav item except Contact opens #/more/<item> ================= */
var MORE={approach:"Approach",criteria:"Criteria",portfolio:"Portfolio",team:"Team",news:"News"};
function vMore(k){
  return '<section class="ph-head more" data-field data-theme="dark">'+
   '<span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1"><span class="nb">'+MORE[k]+',</span> <em class="nb">built out.</em></h1>'+
   '<p class="intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a><a class="more-k ul" href="#/'+k+'">Or keep scrolling the concept</a></div>'+
  '</section>';
}

/* ================= ROUTER: #/more/<item> is a page; #/<section> scrolls to that section on home ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var m=/^#\/more\/([a-z]+)$/.exec(h||"");
  if(m&&MORE[m[1]]){var k=m[1];return {k:"more-"+k,v:function(){return vMore(k)},t:MORE[k]+" — Shilling Group",x:MORE[k]}}
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Shilling Group — Mergers and acquisitions, Cannock, Staffordshire",x:"Home"};
}
function secEl(id){var el=document.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;if(lenis&&!instant)lenis.scrollTo(el,{offset:0,duration:1.5,force:true});else{var y=el.getBoundingClientRect().top+scrollY;if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var r=route(a.getAttribute("href"));if(r.k!=="home"||!r.sec)return;
  e.preventDefault();e.stopPropagation();
  if(curKey!=="home"){location.hash="#/";(function wait(n){if(curKey==="home"&&document.getElementById(r.sec)&&document.documentElement.style.overflow!=="hidden"){setTimeout(function(){secGo(r.sec)},450);return}if(n<200)setTimeout(function(){wait(n+1)},50)})(0);return}
  if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(function(){secGo(r.sec)},450)}else secGo(r.sec)},true);
addEventListener("hashchange",function(e){var r=route(location.hash);if(curKey!=="home"||r.k!=="home")return;e.stopImmediatePropagation();
  if(r.sec)secGo(r.sec);else if(lenis)lenis.scrollTo(0,{duration:1.4});else scrollTo(0,0);
  try{history.replaceState(null,"","#/")}catch(x){}prevHash="#/"});
(function(){var r=route(location.hash);if(r.k!=="home"||!r.sec)return;var n=0;(function wait(){if(++n>60)return;var lk=document.documentElement.style.overflow==="hidden"||!document.getElementById(r.sec);if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(r.sec,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();
