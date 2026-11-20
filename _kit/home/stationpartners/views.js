/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){var nm=c[5]?'<a class="pfl" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[0])+'</a>':esc(c[0]);
  return '<li><span class="lab tg"><b class="'+(c[2]==="Active"?"on":"")+'">'+esc(c[2])+'</b> · '+esc(c[3])+'</span><h3>'+nm+'</h3><p>'+esc(c[1])+'</p><p class="st">'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function ppl(list,cls){return '<ul class="ppl '+cls+'">'+list.map(function(p){return '<li><div class="pf"><img src="'+PH[p.ph]+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" decoding="async"></div><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function nwRows(list){return '<ul class="nwr">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><span class="lab ty">'+esc(n[1])+'</span><h3>'+esc(n[2])+'</h3>'+ARRX+'</a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private equity<span class="nomob"> · Lower middle market</span> · Morristown, New Jersey</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Direction.</span><span class="l">Destination.</span><span class="l"><em>Defined.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>An entrepreneurial private equity firm making control investments in support of management teams operating established lower-middle market businesses with outsized potential.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>A value-based approach</span>'+
   '<h2 class="txt" id="mani">Our goal is long-term capital appreciation through value-based investments and portfolio company growth, <em>rather than financial engineering.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$91.9M</span><span class="k">Realized gross distributions to investors</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2.9X</span><span class="k">Gross distributions as a multiple of invested capital</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">26.3%</span><span class="k">Estimated IRR over the average investment hold period</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Transformation</span><p data-r>A focus on operational improvements, driven by a passion for growing good businesses into great enterprises.</p></div>'+
    '<div><span class="lab kick" data-r>Accelerating growth</span><p data-r>Implementing a proven business model, with clear and defined growth strategies that drive revenue.</p></div>'+
    '<div><span class="lab kick" data-r>Buy &amp; build</span><p data-r>Scaling through add-on acquisitions, building investments into middle market businesses.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our investment philosophy</span><h2 class="d3">Invest. Partner. <em>Build.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Invest</span><span>Partner</span><span>Build</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We like the lower middle market.</h2><p>A large universe of businesses means fewer buyers and lower intermediation. We invest in established, profitable companies with up to $40 million in revenue.</p></article>'+
     '<article class="step"><h2>Partnered with management.</h2><p>We implement a leadership system that incentivizes management to out-perform and drive revenue, with equity alignment from our management partners.</p></article>'+
     '<article class="step"><h2>Built into something larger.</h2><p>We build and grow investments into middle market businesses that demand greater interest from both strategic and financial buyers, often through add-on acquisitions.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Established businesses with <em>outsized potential.</em></h2></div><p data-r>Station employs a formulaic and value-based approach to buyouts, recapitalizations and growth investments, developing an individualized thesis for each company: industry trends, culture, business model and capitalization.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
   '<div class="ind"><span class="lab kick" data-r>Target industries</span><ul>'+IND.map(function(s){return '<li>'+esc(s)+'</li>'}).join("")+'<li class="more">And more</li></ul></div>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investments</span><h2 class="d2 split">Sharing our successes with <em>all stakeholders.</em></h2></div><p data-r>We make control investments in companies that exhibit consistent historic results, scalable business models and an established leadership system.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>The Station team</span><h2 class="d2 split">People-first, with institutional <em>discipline.</em></h2></div><p data-r>With nearly 50 years of combined lower middle market experience, the principals of Station invest their own capital, alongside a select group of industry pioneers, executive partners and investment advisors.</p></div>'+
   ppl(TEAM,"lead")+
   '<div class="icw"><span class="lab kick" data-r>Investment committee</span><p class="ich" data-r>Seasoned business and investment professionals who bring a depth of knowledge and experience to our portfolio and investment process.</p>'+ppl(IC,"ic")+'</div>'+
   '<figure class="qt"><blockquote data-r>“From the start of our partnership, Kreamer and the rest of the Station team have been true partners. They are collaborative, provide consistent guidance, outside the box thinking and are willing to roll up their sleeves.”</blockquote><figcaption class="lab" data-r>Justin Martin, President, Granite Hills Group</figcaption></figure>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Media</span><h2 class="d2 split">Recent <em>transactions.</em></h2></div><p data-r>Announcements from Station Partners and its portfolio companies.</p></div>'+
   nwRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, management teams and intermediaries</span>'+
   '<h2 class="big split">The opportunity <em>is here.</em></h2>'+
   '<p class="sub" data-r>We work with investment bankers, business brokers, M&amp;A advisors, accountants and attorneys, on a reputation of transparency and candor. Please do not hesitate to reach out.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Station '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Station Partners<br>161 Madison Avenue, Suite 315<br>Morristown, NJ 07960</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Investors</span><p data-r>Limited partners can reach the investor portal through <a class="ul" href="'+WEB+'" target="_blank" rel="noopener">stationpartners.com</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>161 Madison Avenue, Suite 315<br>Morristown, NJ 07960</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Investments</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">Media</a></div>'+
   '<div class="c"><span class="lab">Direction</span>Direction.<br>Destination.<br>Defined.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="54" text-anchor="middle" style="font-family:\'Spectral\',Georgia,serif;font-weight:400;font-size:62px;letter-spacing:.06em">STATION PARTNERS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Station Partners</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Station Partners — Lower middle-market private equity, Morristown, New Jersey",x:"Home"};
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
