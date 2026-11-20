/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+TEAM.map(function(p){return '<article class="pt"><div class="ph'+(p.img?'':' noph')+'">'+(p.img?'<img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')">':'')+'<span class="ini" aria-hidden="true">'+esc(p.ini||p.name.split(" ").map(function(w){return w[0]}).join(""))+'</span></div>'+
  '<h3><span>'+esc(p.name)+'</span></h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.bio)+'</p>'+(p.lk?'<a class="tl ul" href="'+p.lk+'" target="_blank" rel="noopener">'+esc(p.lkT)+'</a>':'')+'</article>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Family-owned investment adviser<span class="nomob"> · Miami · Since 1987</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Committed to the</span><span class="l"><em>preservation</em></span><span class="l">of capital.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>An independent, SEC-registered firm offering personalized investment management, tax consulting and estate planning, with a disciplined, no-nonsense approach to investing.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">A family-owned, multi-generational firm, built on trust, transparency and accountability, and dedicated to helping clients achieve lasting <em>financial independence.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1987</span><span class="k">Founded in Miami by Clay Campbell; now in its second generation</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$303M</span><span class="k">Assets under discretionary management, across 265 accounts (Form ADV, March 2026)</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">24/7</span><span class="k">Answering client calls around the clock is ingrained in our culture</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with you</span><h2 class="d3">A portfolio built to <em>stand.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Allocate</span><span>Bonds</span><span>Stocks</span><span>Watch</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>It starts with a conversation.</h2><p>We meet with you to agree the percentages for each asset class (U.S. stocks, international stocks, mutual funds, bonds and cash) to fit your goals and the risk you are prepared to bear.</p></article>'+
     '<article class="step"><h2>A foundation of fixed income.</h2><p>FDIC-insured certificates of deposit, corporate and municipal bonds, bond funds and Treasuries, with maturities staggered and none longer than twenty years.</p></article>'+
     '<article class="step"><h2>Stocks, held for the long term.</h2><p>A diversified mix of stocks and funds, bought on the evidence of financial statements, not marketing brochures, and held rather than traded frequently. Our own money is invested alongside yours.</p></article>'+
     '<article class="step"><h2>Watched, every day.</h2><p>Accounts are reconciled daily and reviewed regularly, and we encourage you to stay with the allocation you chose, whatever the market does. And we answer the phone 24/7.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">We work so you <em>don’t have to.</em></h2></div><p data-r>As fee-based money managers, we work with you to develop an investment approach that fits your goals: a personalized wealth plan, and complete independence at every step.</p></div>'+
   '<div class="svc">'+SVC.map(function(v,i){return '<div class="sv"><span class="lab n" data-r>0'+(i+1)+'</span><h3 data-r>'+esc(v[0])+'</h3><p data-r>'+esc(v[1])+'</p></div>'}).join("")+'</div>'+
   '<div class="act" data-r style="margin-top:clamp(44px,4.6vw,64px)"><a class="btn solid" href="'+BOOK+'" target="_blank" rel="noopener">Schedule a consultation '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec dark" id="principles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Philosophy</span><h2 class="d2 split">Conservative investors who <em>love stocks.</em></h2></div><p data-r>Our team of CPAs and number-crunchers pores over financial statements and news reports. We treat our clients like family, because to us, they are.</p></div>'+
   '<ul class="ind two2">'+PRIN.map(function(a){return '<li>'+esc(a)+'</li>'}).join("")+'</ul>'+
  '</div></section>'+

  '<section class="sec light" id="clients" data-theme="light"><div class="wrap"><div class="two">'+
   '<div><span class="lab kick" data-r>Who we serve</span><h2 class="d3 split">Wealth grown like <em>our own.</em></h2><p class="muted" data-r style="margin-top:26px;max-width:42ch">We act in your best interest, and our only revenue is our management fee: usually 1.5% a year, charged quarterly in arrears. No performance fees, no wrap programs.</p></div>'+
   '<div><dl class="facts">'+WHO.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
   '<p class="cust" data-r>Accounts are held with National Financial Services (Fidelity) through LaSalle St. Securities, our partners for nearly 40 years. We manage accounts with discretion, but never withdraw funds or securities from them.</p></div>'+
  '</div></div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A family firm, <em>two generations on.</em></h2></div><p data-r>We manage our clients’ portfolios the same way we manage our own: true fiduciary alignment.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="letters" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Quarterly letters</span><h2 class="d3 split">Your window into <em>the economy.</em></h2></div><p data-r>Market trends, and the disciplined principles behind our approach, written to our clients every quarter since 2005.</p></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Schedule a consultation</span>'+
   '<h2 class="big split">Let’s talk about <em>your capital.</em></h2>'+
   '<p class="sub" data-r>Call the office, email us, or book a consultation online. Preservation of capital is our motto.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email '+MAIL+' '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Campbell Capital Management, Inc.<br>7301 SW 57th Ct, Suite 540<br>Miami, FL 33143</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p class="dl" data-r>Clients: <a class="ul" href="https://www.mystreetscape.com/auth/lasallest/login" target="_blank" rel="noopener">Wealthscape login</a> · <a class="ul" href="https://www.advyzon.com/main/index.html" target="_blank" rel="noopener">CCM client portal</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p data-r><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS relationship summary</a><br><a class="ul" href="'+BRO+'" target="_blank" rel="noopener">Form ADV Part 2A brochure</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on the SEC’s adviser search</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>7301 SW 57th Ct, Suite 540<br>Miami, FL 33143</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/about">About</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/letters">Letters</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+BRO+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">SEC adviser profile</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 44" aria-hidden="true"><text x="320" y="36" text-anchor="middle" style="font-family:\'Poppins\',system-ui,sans-serif;font-weight:500;font-size:44px;letter-spacing:.08em">CAMPBELL CAPITAL</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Campbell Capital Management, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",services:"services",philosophy:"principles",clients:"clients",team:"team",letters:"letters",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Campbell Capital Management — Independent investment adviser, Miami",x:"Home"};
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
