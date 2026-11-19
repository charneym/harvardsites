/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+TEAM.map(function(p){return '<article class="pt"><div class="ph"><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"></div>'+
  '<h3><span>'+esc(p.name)+'</span></h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.bio)+'</p><a class="tl ul" href="tel:+1'+p.tel.replace(/-/g,"")+'">'+p.tel+'</a></article>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Independent investment professionals<span class="nomob"> · Since 1994</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Dedication.</span><span class="l">Direction.</span><span class="l"><em>Discipline.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Fee-only investment management and financial planning from Middletown, Connecticut: consultative advice grounded in modern financial theory and empirical evidence.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="philosophy" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Dedication</span>'+
   '<p class="txt" id="mani">Investment management and financial planning for a limited number of clients is our only business, and every account is managed or overseen by <em>a principal.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1994</span><span class="k">Founded as Mullaney &amp; Associates, the forerunner of today’s firm</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Fee-only</span><span class="k">No commissions, referral fees or other compensation from anyone else</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Quarterly</span><span class="k">Portfolio reviews for rebalancing, and reports to every client</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we work with you</span><h2 class="d3">A course set together, held with <em>discipline.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Meet</span><span>Policy</span><span>Portfolio</span><span>Review</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>We start with you.</h2><p>In a first meeting we review your financial circumstances, needs and expectations, and explain how our philosophy could apply to you. You will never be pressured to become a client.</p></article>'+
     '<article class="step"><h2>An Investment Policy, written together.</h2><p>Your needs, goals, experience and tolerance for risk shape an Investment Policy, revised until you approve it. It is the roadmap for every investment decision that follows.</p></article>'+
     '<article class="step"><h2>A portfolio built on evidence.</h2><p>Low-cost, mostly passively managed funds, broadly diversified by company size, at home and abroad, and tilted toward value, with fixed income for predictable cash flows and lower volatility.</p></article>'+
     '<article class="step"><h2>Reviewed every quarter.</h2><p>We review your portfolio quarterly for rebalancing, mindful of taxes, report the results to you and stay in touch. No market timing: just the agreed policy, pursued with discipline.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split">Two services, one <em>relationship.</em></h2></div><p data-r>We are fee-only: our only income is the fees our clients pay us. With no commissions or referral fees, we have no reason to favor any investment product.</p></div>'+
   '<div class="kits"><div><span class="lab kick" data-r>Investment management</span>'+aims(IM)+'</div><div><span class="lab kick" data-r>Financial planning</span>'+aims(FP)+'</div></div>'+
   '<p class="note-s" data-r>For tax, legal and insurance questions we work alongside your existing advisors, and we accept no referral fees for introducing others.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="principles" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Fundamental principles</span><h2 class="d2 split">We believe that markets <em>work.</em></h2></div><p data-r>Current prices reflect all available information, so they are the best approximation of value. Rather than trying to beat the market, we build portfolios on what the evidence shows.</p></div>'+
   '<ul class="ind two2">'+AX.map(function(a){return '<li>'+esc(a)+'</li>'}).join("")+'</ul>'+
  '</div></section>'+

  '<section class="sec light" id="clients" data-theme="light"><div class="wrap"><div class="two">'+
   '<div><span class="lab kick" data-r>Who we serve</span><h2 class="d3 split">For people who want a <em>trusted advisor.</em></h2><p class="muted" data-r style="margin-top:26px;max-width:42ch">Our clients normally have a minimum of $1 million of investable assets available for management.</p></div>'+
   '<div>'+aims(WHO)+'<span class="lab kick acc-k" data-r>Accounts we manage</span><dl class="facts">'+ACC.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl></div>'+
  '</div></div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Experienced, and <em>personal.</em></h2></div><p data-r>Client accounts are managed or overseen by principals, with a direct line to each of us.</p></div>'+
   team()+
   '<div class="credit mem"><span class="lab" data-r>In memoriam</span><p data-r>Our founder, Thomas F. Mullaney, Jr., passed away in August 2024. He served on the board of Riverfront Recapture for nearly four decades, helping return the banks of the Connecticut River to the community; his family created The Mullaney Fund in his memory.</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="insights" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Insights</span><h2 class="d3 split">Notes on markets <em>and money.</em></h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Schedule an initial appointment</span>'+
   '<h2 class="big split">Start with a <em>conversation.</em></h2>'+
   '<p class="sub" data-r>You will never be pressured to become a client. In a first meeting we review your circumstances, needs and expectations, and explain how our philosophy could apply to you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+TELH+'">Call '+TEL+' '+ARR+'</a><a class="btn" href="'+CRS+'" target="_blank" rel="noopener">Form CRS (PDF)</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Mullaney, Keating &amp; Wright, Inc.<br>386 Main St, Suite 501<br>Middletown, CT 06457</p><a class="ul lk" href="'+DIR+'" target="_blank" rel="noopener" data-r>Directions (PDF)</a></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p><p class="dl" data-r>Tony Lynch <a class="ul" href="tel:+18605219901">9901</a> · Fran Carpentier <a class="ul" href="tel:+18605219902">9902</a> · Jessica Gilbert <a class="ul" href="tel:+18605219903">9903</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p data-r><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS relationship summary</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on the SEC’s adviser search</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>386 Main St, Suite 501<br>Middletown, CT 06457</div>'+
   '<div class="c"><span class="lab">Telephone</span><a class="ul" href="'+TELH+'">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/philosophy">Philosophy</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/insights">Insights</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:\'Big Shoulders Display\',Impact,sans-serif;font-weight:600;font-size:44px;letter-spacing:.08em">MULLANEY KEATING &amp; WRIGHT</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Mullaney, Keating &amp; Wright, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={philosophy:"philosophy",approach:"story",services:"services",principles:"principles",clients:"clients",team:"team",insights:"insights",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Mullaney Keating & Wright — Fee-only investment advisers, Middletown, Connecticut",x:"Home"};
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
