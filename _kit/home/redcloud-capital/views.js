/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfGrid(list){return '<ul class="pfg">'+list.map(function(n){return '<li data-r><span>'+esc(n)+'</span></li>'}).join("")+'</ul>'}
function newsRows(list){return '<ul class="pfr nw">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab tg">'+esc(n[0])+'</span><h3>'+esc(n[2])+'</h3><p>'+esc(n[1])+' <span class="ar" aria-hidden="true">↗</span></p></a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){return '<li><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Lower middle market private equity<span class="nomob"> · Denver, Colorado · since 2004</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Building great</span> <span class="l">companies.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A Denver private equity firm partnering with dynamic, growth-minded entrepreneurs and management teams to build lower middle market companies with differentiated growth strategies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>People first</span>'+
   '<h2 class="txt" id="mani">Solid strategies and sound business models are essential, but it is the people who drive superior results.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2004</span><span class="k">Founded in Denver, with more than twenty years of investing in entrepreneur-owned businesses</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13</span><span class="k">Platform investments, with 14 add-on acquisitions behind them¹</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$450MM</span><span class="k">Capital deployed across RedCloud and affiliated investments¹</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Getting to know you</span><p data-r>We invest significant time in getting to know our partners. Trust and mutual respect lead to high performing partnerships and lasting relationships.</p></div>'+
    '<div><span class="lab kick" data-r>Your vision</span><p data-r>Growth strategies should be built around the management team’s vision and objectives, while preserving the entrepreneurial culture.</p></div>'+
    '<div><span class="lab kick" data-r>Value-added partner</span><p data-r>Our role is to be collaborative and supportive, offering our help in a thoughtful and responsive manner.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we support our companies</span><h2 class="d3">The route to a platform.</h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Plan</span><span>Add-ons</span><span>Systems</span><span>Capital</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Strategic planning.</h2><p>Every partnership starts with a plan built around the management team’s own vision and objectives.</p></article>'+
     '<article class="step"><h2>Add-on acquisitions.</h2><p>For founders who want to be a platform, we support the add-on acquisitions that extend their reach.</p></article>'+
     '<article class="step"><h2>ERP, reporting and people.</h2><p>Reporting systems and executive recruiting give a growing company the structure to keep scaling.</p></article>'+
     '<article class="step"><h2>Financing and growth capital.</h2><p>Capital for the next stage, from new markets to new capabilities, as with APS Environmental in 2026.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Founders who want to be a platform.</h2></div><p data-r>We invest in lower middle market businesses with a compelling value proposition, a differentiated growth strategy and a team that wants to build.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investments</span><h2 class="d2 split"><span class="nw">Companies we</span> <span class="nw">have backed.</span></h2></div><p data-r>From environmental services to consumer brands and agriculture, RedCloud and affiliated investments¹.</p></div>'+
   pfGrid(PF)+
   '<p class="fn" data-r>¹ Includes affiliated investments made by Kevin Mitchell while at a prior firm, Lariat Partners, where he was a co-founder and managing partner and one member of a two-person investment committee. All Lariat investment decisions required the unanimous approval of both members.</p>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Decades of deal execution.</h2></div><p data-r>Deal execution and operational experience, from the founder to the analyst bench.</p></div>'+
   team()+
   '<figure class="qt"><blockquote data-r>“APS has built a differentiated platform with an exceptional management team in a specialized, high-barrier niche.”</blockquote><figcaption class="lab" data-r>Kevin Mitchell, Founder, on APS Environmental</figcaption></figure>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">Recent deals</span> <span class="nw">and news.</span></h2></div><p data-r>In September 2026 RedCloud partnered with APS Environmental Group, a fast-growing environmental testing, inspection, consulting and abatement provider in New England and the Mid-Atlantic.</p></div>'+
   newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Founders, owners and intermediaries</span>'+
   '<h2 class="big split"><span class="nw">Let’s talk</span> <span class="nw">about partnering.</span></h2>'+
   '<p class="sub" data-r>If you run or advise a lower middle market business with $4–15MM of EBITDA and a plan to grow, reach out.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email RedCloud '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>RedCloud Capital, LLC<br>1225 17th Street, Suite 2725<br>Denver, CO 80202</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab" data-r>Criteria</span><p data-r>$4–15MM EBITDA<br>Control transactions</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>1225 17th Street, Suite 2725<br>Denver, CO 80202</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/investments">Investments</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Criteria</span>$4–15MM EBITDA<br>Control transactions</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Archivo Black\',\'Arial Black\',sans-serif;font-size:54px;letter-spacing:.04em">REDCLOUD</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 RedCloud Capital, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",investments:"portfolio",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"RedCloud Capital — Lower middle market private equity, Denver",x:"Home"};
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
