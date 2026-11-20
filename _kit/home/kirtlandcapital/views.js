/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function pf(list){return '<ul class="pf">'+list.map(function(c){return '<li><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><p><span class="lab" style="display:block">'+esc(c[2])+'</span><span class="lab" style="display:block;opacity:.85">'+esc(c[3])+'</span></p><div class="w"><a class="ul" href="'+c[4]+'" target="_blank" rel="noopener">Website '+ARR+'</a></div></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+TEAM.map(function(p){return '<article class="pt"><div class="ph"><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"></div>'+
  '<h3><span>'+esc(p.name)+'</span></h3><p class="ttl">'+esc(p.title)+'</p><p class="yr lab">Joined '+p.y+'</p>'+(p.em?'<a class="tl ul" href="mailto:'+p.em+'">Email '+esc(p.name.split(" ")[0])+'</a>':'')+'</article>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private equity · Cleveland, Ohio<span class="nomob"> · Since 1977</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Relationships</span><span class="l"><em>matter.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We are business builders. Kirtland partners with founder and family-owned companies and helps them break through the barriers that stand between them and growth.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Start a conversation</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About Kirtland</span>'+
   '<h2 class="txt" id="mani">Midwestern values: the belief that strong relationships, hard work, discipline, experience and a proven process drive <em>long-term investing success.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1977</span><span class="k">Founded in Cleveland as a pledge fund, building and growing businesses ever since</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Three</span><span class="k">Verticals: precision machining and engineered products, business services, branded food and beverage</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15+ years</span><span class="k">Our partners working together, through four recessionary periods</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we build</span><h2 class="d3">The business you built, <em>built further.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Partner</span><span>Invest</span><span>Reach</span><span>Expand</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We start with your company.</h2><p>You have worked hard to build your business. We invest in founder and family-owned companies and work with management to tailor a growth strategy to the needs of each one.</p></article>'+
     '<article class="step"><h2>Leadership and infrastructure.</h2><p>We support our management teams by making the investments a growing company needs: in leadership, and in business infrastructure.</p></article>'+
     '<article class="step"><h2>Sales and marketing.</h2><p>Kirtland has helped companies grow by enhancing sales and marketing efforts and developing external sales forces, reaching customers they could not reach before.</p></article>'+
     '<article class="step"><h2>Acquisitions and new sites.</h2><p>Growth by acquisition, greenfield sites and a presence abroad. In June 2025 Actron Engineering added Crabil Manufacturing, a precision machining provider in St. Petersburg, Florida.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Incredible companies, <em>ready to grow.</em></h2></div><p data-r>Our goal is to partner with founder and family-owned businesses to build and grow them, in three preferred verticals.</p></div>'+
   '<ol class="vert">'+VERT.map(function(v,i){return '<li data-r><span class="n lab">0'+(i+1)+'</span><h3>'+esc(v[0])+'</h3><p>'+esc(v[1])+'</p></li>'}).join("")+'</ol>'+
   '<div class="kits"><div><span class="lab kick" data-r>Company attributes</span>'+aims(ATTR)+'</div><div><span class="lab kick" data-r>Financial attributes</span><dl class="facts">'+FIN.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl></div></div>'+
   '<div class="spon"><div><span class="lab kick" data-r>Independent sponsors</span><h3 class="d3 split">We’ve been in <em>your shoes.</em></h3></div><div><p data-r>Kirtland began in 1977 as a pledge fund. Today we support independent sponsor-led transactions as the control-equity investor, and have partnered with independent sponsors on three investments in our current fund: Arch Global Precision, Acme Cosmetic Components and EnviroScience.</p><p data-r>We pay buy-side fees and work collaboratively with investment banks, business brokers, executives, lawyers, accountants, commercial bankers and consultants.</p></div></div>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Current portfolio</span><h2 class="d2 split">The companies we are <em>building now.</em></h2></div><p data-r>Each partnership supports the existing management team, and each company is exploring growth through strategic acquisitions.</p></div>'+
   pf(PORT)+
   '<div class="prior"><span class="lab kick" data-r>Prior investments include</span><p data-r>'+PRIOR.map(function(n){return '<span class="pn">'+esc(n)+'</span>'}).join(' <i>·</i> ')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="people" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>People</span><h2 class="d2 split">One of the most experienced teams <em>in our market.</em></h2></div><p data-r>We work together in a collegial environment that promotes teamwork and mutual respect.</p></div>'+
   team()+
   '<div class="board"><div><span class="lab kick" data-r>Operating Board</span><p data-r>Successful business executives who counsel Kirtland and its portfolio companies, and serve on its Valuation Committee.</p></div><ul>'+BOARD.map(function(b){return '<li data-r><span class="bn">'+esc(b[0])+'</span><span class="bt">'+esc(b[1])+'</span></li>'}).join("")+'</ul></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">Recent from the <em>portfolio.</em></h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>A confidential conversation</span>'+
   '<h2 class="big split">The beginning of another <em>relationship.</em></h2>'+
   '<p class="sub" data-r>If you like what you hear, give us a call and we can have a confidential conversation about your goals.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:tlittman@kirtlandcapital.com">Email Tom Littman '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Kirtland Capital Partners<br>200 Park Avenue, Suite 225<br>Orange Village, Ohio 44122</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Business owners</span><p data-r>Tom Littman, Chairman</p><p class="dl" data-r><a class="ul" href="mailto:tlittman@kirtlandcapital.com">tlittman@kirtlandcapital.com</a></p></div>'+
    '<div><span class="lab" data-r>Deal sources and sponsors</span><p data-r>Corrie Menary · Patrick Chang</p><p class="dl" data-r><a class="ul" href="mailto:cmenary@kirtlandcapital.com">cmenary@kirtlandcapital.com</a><br><a class="ul" href="mailto:pchang@kirtlandcapital.com">pchang@kirtlandcapital.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>200 Park Avenue, Suite 225<br>Orange Village, Ohio 44122</div>'+
   '<div class="c"><span class="lab">Telephone</span><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/about">About</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/people">People</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Investors</span><a class="ul" href="'+FACT+'" target="_blank" rel="noopener">Fact sheet (PDF)</a><br><a class="ul" href="https://services.intralinks.com/login/" target="_blank" rel="noopener">Partner login</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 44" aria-hidden="true"><text x="280" y="36" text-anchor="middle" style="font-family:\'Cinzel\',Georgia,serif;font-weight:500;font-size:40px;letter-spacing:.1em">KIRTLAND CAPITAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Kirtland Capital Partners</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",people:"people",team:"people",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kirtland Capital Partners — Private equity for founder and family-owned businesses, Cleveland, Ohio",x:"Home"};
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
/* the stacked wordmark: every line set to the same measure, as in the firm's logo */
function fitStack(){$$(".brand .stk").forEach(function(s){var L=$$(":scope>span",s),M=[],B=[];
  L.forEach(function(l){l.style.letterSpacing="";l.style.marginRight="";var r=document.createRange();r.selectNodeContents(l);M.push(r.getBoundingClientRect().width);B.push(parseFloat(getComputedStyle(l).letterSpacing)||0)});
  var T=Math.max.apply(null,M.map(function(m,i){return m-B[i]}));
  L.forEach(function(l,i){var n=l.textContent.length;if(n<2)return;var ls=(T-(M[i]-n*B[i]))/(n-1);l.style.letterSpacing=ls.toFixed(2)+"px";l.style.marginRight=(-ls).toFixed(2)+"px"})})}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitStack);else fitStack();
