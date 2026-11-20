/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function aims(list){return '<ul class="aims">'+list.map(function(a){return '<li><span>'+esc(a)+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="pg">'+TEAM.map(function(p){return '<article class="pt"><div class="ph"><img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"></div>'+
  '<h3><span>'+esc(p.name)+'</span></h3><p class="ttl">'+esc(p.title)+'</p><p class="bio">'+esc(p.bio)+'</p></article>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Independent wealth managers<span class="nomob"> · Coral Gables, Florida</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Collaboration.</span><span class="l">Stewardship.</span><span class="l">Proactive <em>service.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Since 1999, a boutique registered investment adviser for high-achieving individuals and families who require sophisticated wealth management strategies.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/approach">How we work '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="philosophy" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our mission</span>'+
   '<h2 class="txt" id="mani">To help our clients achieve financial independence, and enjoy the freedom of moving the management of their wealth from their shoulders to <em>ours.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1999</span><span class="k">Founded by Mary D. Kirtland, an economics professor turned financial planner</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$396M</span><span class="k">Client assets managed at December 31, 2025, per our Form ADV</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Quarterly</span><span class="k">Performance reports against the benchmark set in your Investment Policy Statement</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Working with us</span><h2 class="d3">Every piece of the plan, in <em>its place.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Discover</span><span>Diagnose</span><span>Design</span><span>Deliver</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Discover.</h2><p>We ask questions that reveal your core concerns, values, interests and goals, and your past experience with investing and money, before our engagement formally begins.</p></article>'+
     '<article class="step"><h2>Diagnose.</h2><p>Together we identify and prioritise your goals and reveal the risks you are exposed to. Every piece is linked: your portfolio depends on your retirement plan, budget and tolerance for risk.</p></article>'+
     '<article class="step"><h2>Design.</h2><p>A big-picture, interactive Financial Plan and a customised Investment Policy Statement that sets realistic goals and documents what we have agreed, updated each year as life changes.</p></article>'+
     '<article class="step"><h2>Deliver.</h2><p>Your portfolio is managed proactively, guided by your Investment Policy Statement, and measured every quarter against the benchmark that best fits your asset allocation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="services" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we do</span><h2 class="d2 split">Comprehensive wealth <em>management.</em></h2></div><p data-r>Planning a family’s financial future is like putting together a puzzle: every piece must be studied and put in place to see the big picture. For our fee-based advisory clients, one flat fee covers all of it, so there is no clock running when you call.</p></div>'+
   '<ul class="svc">'+SERV.map(function(s){return '<li><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join("")+'</ul>'+
  '</div></section>'+

  '<section class="sec dark" id="difference" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What makes us different</span><h2 class="d2 split">A boutique firm, by <em>design.</em></h2></div><p data-r>Our goal has never been to be a large firm. We want to be big enough to provide the full spectrum of wealth management, yet small enough to keep the loyalty, intimacy and personal service we treasure.</p></div>'+
   '<div class="dif">'+DIFF.map(function(d){return '<div><span class="ln2"></span><h3>'+esc(d[0])+'</h3><p>'+esc(d[1])+'</p></div>'}).join("")+'</div>'+
  '</div></section>'+

  '<section class="sec light" id="clients" data-theme="light"><div class="wrap"><div class="two">'+
   '<div><span class="lab kick" data-r>Who we serve</span><h2 class="d3 split">Families who count on us to know their finances <em>best.</em></h2><p class="muted" data-r style="margin-top:26px;max-width:44ch">Our standard minimum for new clients is $500,000. We waive it for family of current clients and for individuals under 35, and we will consider other exceptions.</p></div>'+
   '<div>'+aims(WHO)+'<span class="lab kick acc-k" data-r>How you will see your progress</span><dl class="facts">'+REPORT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl></div>'+
  '</div></div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our team</span><h2 class="d2 split">Unlimited access to <em>our team.</em></h2></div><p data-r>Our professionals provide outstanding service to clients who count on us to understand their financial situation better than anyone else, and to make recommendations with competence and impartiality.</p></div>'+
   team()+
   '<p class="bcheck" data-r>Check the background of our investment professionals on <a class="ul" href="'+BC+'" target="_blank" rel="noopener">FINRA’s BrokerCheck</a>.</p>'+
  '</div></section>'+

  '<section class="sec dark2" id="resources" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>Resources</span><h2 class="d3 split">For clients, and those <em>getting to know us.</em></h2></div></div>'+
   '<ul class="rows res">'+RES.map(function(n){return '<li><a class="row-a" href="'+n.u+'" target="_blank" rel="noopener"><span class="nm"><span class="lab">'+esc(n.s)+'</span></span><h3>'+esc(n.t)+'</h3><span class="rd">'+esc(n.d)+'</span><span class="c4">'+ARRX+'</span></a></li>'}).join("")+'</ul>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>A complimentary second opinion</span>'+
   '<h2 class="big split">Start with a <em>conversation.</em></h2>'+
   '<p class="sub" data-r>We are always willing to review your current portfolio at no cost: an educational “x-ray” of what you own, not a sales presentation. It helps you know what to ask, and whether you are taking more risk than you realise.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+TELH+'">Call '+TEL+' '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">Email Brett Hixon</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Kirtland Financial Management, Inc.<br>100 Almeria Avenue, Suite 302<br>Coral Gables, FL 33134</p></div>'+
    '<div><span class="lab" data-r>Telephone</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a></p><p class="dl" data-r>Toll free <a class="ul" href="tel:+18773841051">877-384-1051</a> · Fax 305-648-1800<br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p data-r><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS relationship summary</a><br><a class="ul" href="'+ADV2+'" target="_blank" rel="noopener">Form ADV Part 2A brochure</a><br><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Our SEC adviser record</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>100 Almeria Avenue, Suite 302<br>Coral Gables, FL 33134</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email us</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/philosophy">Philosophy</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/resources">Resources</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+CRS+'" target="_blank" rel="noopener">Form CRS</a><br><a class="ul" href="'+ADV2+'" target="_blank" rel="noopener">Form ADV</a><br><a class="ul" href="'+BC+'" target="_blank" rel="noopener">BrokerCheck</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Playfair Display\',Georgia,serif;font-weight:500;font-size:62px;letter-spacing:.12em">KIRTLAND</text></svg>'+
  '<p class="disc">Investment advisory services offered through Kirtland Financial Management, Inc., an SEC-registered investment adviser, independent of Raymond James. Securities offered through Raymond James Financial Services, Inc., member FINRA/SIPC.</p>'+
  '<div class="legal"><span class="lab">© 2026 Kirtland Financial Management, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={philosophy:"philosophy",approach:"story",services:"services",difference:"difference",clients:"clients",team:"team",resources:"resources",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Kirtland Financial Management — Independent wealth managers, Coral Gables, Florida",x:"Home"};
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
