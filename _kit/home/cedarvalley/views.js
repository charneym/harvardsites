/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+TEAM.map(function(p){return '<article class="pt"><div class="ph"><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"></div>'+
  '<h3><span>'+esc(p.name)+'</span></h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.bio)+'</p><a class="tl ul" href="mailto:'+p.mail+'">'+(p.ext?'Ext. '+p.ext+' · ':'')+'Email</a></article>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Independent investment advice<span class="nomob"> · Cedar Falls, Iowa</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Planning and investing</span><span class="l">for the goals</span><span class="l"><em>of your life.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>We believe financial planning is not an event, but a process. Since we sell no products, our recommendations are focused on your needs, not on commissions.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="philosophy" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our philosophy</span>'+
   '<h2 class="txt" id="mani">Financial advice is plentiful, and everyone has “the right answer”. We are investors, not traders: we match your investments to your goals, and we don’t <em>play the market.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2001</span><span class="k">Independent investment advice since Bob Heaton began it within his CPA firm</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">No products</span><span class="k">Advice focused on your needs, never on commissions</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Annual</span><span class="k">Performance review against asset-class benchmarks, with quarterly reports</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with you</span><h2 class="d3">From Point A to <em>Point B.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Plan</span><span>Advise</span><span>Manage</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Where are you now? Where do you want to be?</h2><p>Financial planning starts with your resources, Point A, and your goals, Point B. A comfortable, vibrant retirement; helping kids, grandkids and community; a legacy for generations to come.</p></article>'+
     '<article class="step"><h2>A policy for every time horizon.</h2><p>Education, travel, a new business venture: each goal has its own horizon. We write clear, concise and measurable Investment Policies, with specific ranges for each asset class.</p></article>'+
     '<article class="step"><h2>Where the rubber hits the road.</h2><p>We manage your assets to the plan, with low-expense, low-turnover, broadly diversified funds designed to deliver specific asset-class returns. We don’t sell investments. Never have. Never will.</p></article>'+
     '<article class="step"><h2>Reviewed every year, revised when life changes.</h2><p>An annual report measures your progress against asset-class benchmarks. If your goals or horizons change, the plan is revised and the cycle begins again.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Four components, one <em>process.</em></h2></div><p data-r>Financial Planning, Investment Advice, Asset Management and Performance Review are the life-blood of our philosophy. Without a plan, no one can provide meaningful advice.</p></div>'+
   '<ol class="svc">'+SVC.map(function(s){return '<li><span class="n lab">'+s[0]+'</span><h3>'+esc(s[1])+'</h3><p>'+esc(s[2])+'</p></li>'}).join("")+'</ol>'+
   '<div class="also"><span class="lab kick" data-r>Also</span><p data-r><strong>401(k) rollovers.</strong> If you have a 401(k) from a former employer, we can help you transfer the balance to an IRA.</p><p data-r><strong>Tax &amp; accounting.</strong> Through our colleagues at <a class="ul" href="http://TouchstoneIowa.com" target="_blank" rel="noopener">Touchstone Tax &amp; Accounting</a>.</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="principles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Six investment principles</span><h2 class="d2 split">Don’t beat the market. <em>Be the market.</em></h2></div><p data-r>These are our investment principles. We don’t have others: not one set to win one client and another to win the next.</p></div>'+
   '<ol class="prin">'+PRIN.map(function(a,i){return '<li><span class="n lab">'+(i+1)+'</span><h3>'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p></li>'}).join("")+'</ol>'+
  '</div></section>'+

  '<section class="sec light" id="clients" data-theme="light"><div class="wrap"><div class="two">'+
   '<div><span class="lab kick" data-r>Who we serve</span><h2 class="d3 split">Individuals, families and <em>business owners.</em></h2><p class="muted" data-r style="margin-top:26px;max-width:42ch">We advise individuals, families, trusts, 401(k) participants and business owners. No minimum account size is required to engage our services.</p></div>'+
   '<div><span class="lab kick" data-r>Two levels of service</span><dl class="facts">'+
    '<div><dt class="lab">Portfolio Management Services</dt><dd>Financial planning and discretionary management of your taxable accounts.</dd></div>'+
    '<div><dt class="lab">IRA Fiduciary Advisors</dt><dd>Investment management for IRAs and Roth IRAs valued at $400,000 or less, without financial planning.</dd></div>'+
    '<div><dt class="lab">Both</dt><dd>Accounts monitored continuously, and formally reviewed at least once a year.</dd></div>'+
   '</dl></div>'+
  '</div></div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">It really comes down to <em>trust.</em></h2></div><p data-r>A small team in Cedar Falls, with a CPA heritage and a direct line to each of us.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact us</span>'+
   '<h2 class="big split">Lay out your <em>financial plan.</em></h2>'+
   '<p class="sub" data-r>Stop by and say hello. We can’t fix your camera, but we’ll be happy to offer you a cup of coffee and some sound advice on bringing order to your financial life.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Cedar Valley Wealth Advisors<br>411 Viking Road, Suite A<br>Cedar Falls, IA 50613</p><p class="dl" data-r>In the former Porter’s Camera warehouse.</p></div>'+
    '<div><span class="lab" data-r>Telephone &amp; email</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p><p class="dl" data-r>Fax 319-266-6601</p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p data-r><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS (ADV Part 3)</a><br><a class="ul" href="'+ADV2+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">SEC adviser record</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>411 Viking Road, Suite A<br>Cedar Falls, IA 50613</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email us</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/philosophy">Philosophy</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV2+'" target="_blank" rel="noopener">Form ADV Part 2A</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="35" text-anchor="middle" style="font-family:\'Urbanist\',system-ui,sans-serif;font-weight:600;font-size:40px;letter-spacing:-.01em">Cedar Valley Wealth Advisors</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cedar Valley Wealth Advisors</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={philosophy:"philosophy",approach:"story",services:"services",principles:"principles",clients:"clients",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cedar Valley Wealth Advisors — Independent financial planning and investment advice, Cedar Falls, Iowa",x:"Home"};
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
