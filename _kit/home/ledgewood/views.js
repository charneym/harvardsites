/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function facts(list){return '<dl class="facts">'+list.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'}
function team(){return '<div class="tg">'+TEAM.map(function(p){var ini=p.name.split(" ").filter(function(x){return !/\./.test(x)}).map(function(x){return x[0]}).join("");
  return '<article class="tp"><span class="ini" aria-hidden="true">'+ini+'</span><h3>'+esc(p.name)+'</h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.bio)+'</p></article>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Investment advisers · Exeter, New Hampshire<span class="nomob"> · Since 2000</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Your future.</span><span class="l">Your family.</span><span class="l"><em>First.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Portfolio management and financial planning for individuals, families, trusts and businesses, built on long relationships and open, honest conversation.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="philosophy" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our first priority</span>'+
   '<h2 class="txt" id="mani">Helping you take care of yourself and your family: learning your situation, your dreams and goals, and your tolerance for risk, then staying with you for <em>the long term.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2000</span><span class="k">The year Ledgewood was founded; an SEC-registered investment adviser</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$216.8M</span><span class="k">Regulatory assets under management, as of December 31, 2025</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0</span><span class="k">Commissions: we are not paid for the sale of securities or other products</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with you</span><h2 class="d3">A plan built on <em>solid ground.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Listen</span><span>Policy</span><span>Allocate</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We start with your situation.</h2><p>We learn about your personal situation, your dreams and goals, and your tolerance for risk, and if you ask, we provide a comprehensive review of your finances and a financial plan.</p></article>'+
     '<article class="step"><h2>Your objectives, in writing.</h2><p>Every client signs an Investment Policy Statement that records their objectives and the strategy they want. You may change your objectives at any time, and place reasonable restrictions on your account.</p></article>'+
     '<article class="step"><h2>An allocation built for you.</h2><p>We recommend an asset allocation across equities, fixed income, cash and, where appropriate, alternatives, and manage it directly through individual securities, chosen on fundamental analysis, or mutual funds.</p></article>'+
     '<article class="step"><h2>Watched continuously, reviewed together.</h2><p>Your portfolio is monitored continuously and re-allocated to keep its intended diversity and risk. We review it with you at least once a year, and whenever markets, tax law or your own life change.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Two services, tailored to <em>you.</em></h2></div><p data-r>Financial planning is usually part of our investment advisory relationship, and is also available on its own. Either way, the advice starts from your objectives.</p></div>'+
   '<div class="kits"><div><span class="lab kick" data-r>Investment advisory services</span>'+aims(IA)+'</div><div><span class="lab kick" data-r>Financial planning</span>'+aims(FP)+'</div></div>'+
   '<div class="fees"><span class="lab kick" data-r>How we are paid</span><p data-r>An asset-based advisory fee, from 1.50% down to 0.40% a year as assets grow, billed quarterly in advance. Standalone planning is billed hourly ($100 to $250) or as a fixed fee ($3,000 to $15,000). No commissions, and no performance-based fees.</p><a class="ul lk" href="'+BRO+'" target="_blank" rel="noopener" data-r>Full fee schedule in our Form ADV Part 2A</a></div>'+
  '</div></section>'+

  '<section class="sec dark" id="clients" data-theme="dark"><div class="wrap"><div class="two">'+
   '<div><span class="lab kick" data-r>Who we serve</span><h2 class="d3 split">Individuals, families, and the entities they <em>build.</em></h2><p class="muted" data-r style="margin-top:26px;max-width:42ch">We consider each prospective client individually, and tailor our advisory services to each client’s needs.</p></div>'+
   '<div>'+facts(WHO)+'<span class="lab kick acc-k" data-r>Working with us</span>'+facts(TERMS)+'</div>'+
  '</div></div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Run by its <em>owners.</em></h2></div><p data-r>Ledgewood is owned by the two people who run it.</p></div>'+
   team()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Get in touch</span>'+
   '<h2 class="big split">Start with a <em>conversation.</em></h2>'+
   '<p class="sub" data-r>Send us a note with any question about your investments or your plans, and we will get back to you quickly with a thoughtful answer.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Ledgewood Wealth Advisors, LLC<br>92 Portsmouth Avenue, Suite 15<br>Exeter, NH 03833</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p class="dl" data-r><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS relationship summary</a><br><a class="ul" href="'+BRO+'" target="_blank" rel="noopener">Form ADV Part 2A brochure</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Our record on the SEC’s adviser search</a><br><a class="ul" href="'+BC+'" target="_blank" rel="noopener">FINRA BrokerCheck</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>92 Portsmouth Avenue, Suite 15<br>Exeter, NH 03833</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/philosophy">Philosophy</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/clients">Clients</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+BRO+'" target="_blank" rel="noopener">Form ADV Part 2A</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">SEC adviser record</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Libre Caslon Text\',Georgia,serif;font-weight:400;font-size:62px;letter-spacing:.12em">LEDGEWOOD</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Ledgewood Wealth Advisors, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={philosophy:"philosophy",approach:"story",services:"services",clients:"clients",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Ledgewood Wealth Advisors — Investment advice and financial planning, Exeter, New Hampshire",x:"Home"};
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
