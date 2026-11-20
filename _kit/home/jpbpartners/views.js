/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function reRows(list){return '<ul class="pfr re">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[0])+'</span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[2])+'</span></h3><p>'+esc(c[3])+'</p><p class="st">'+esc(c[4])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){return '<li><span class="nm">'+esc(p.name)+'</span><span class="rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private equity · Real estate<span class="nomob"> · Hanover, Maryland · Since 1995</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Driven by hunger.</span><span class="l">Defined by speed.</span><span class="l"><em>Grounded in humility.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>A Maryland family office and private investment firm, backing lower-middle-market businesses and income-producing real estate across the Mid-Atlantic and Southeast.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About JPB</span>'+
   '<h2 class="txt" id="mani">We bring capital, strategic support and a partnership-driven mindset to help businesses <em>scale and succeed.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1995</span><span class="k">Founded, and headquartered in Hanover, Maryland</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$300M+</span><span class="k">Capital invested across private equity and real estate</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13 yrs</span><span class="k">Average tenure across the JPB team</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Private equity</span><p data-r>Lower-middle-market buyouts of multi-unit and multi-location businesses, particularly franchise systems and companies in fragmented, consumer-facing industries.</p></div>'+
    '<div><span class="lab kick" data-r>Real estate</span><p data-r>Acquiring, developing and managing income-producing residential and commercial properties in high-growth secondary and tertiary markets.</p></div>'+
    '<div><span class="lab kick" data-r>Family office</span><p data-r>JPB serves as the lead investor, with select opportunities open to other family offices, institutional investors and high-net-worth individuals.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we create value</span><h2 class="d3">Strategy, structure, systems and <em>people.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Strategy</span><span>Structure</span><span>Systems</span><span>People</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Enhancing strategy.</h2><p>We work closely with portfolio company CEOs, starting with strategy: businesses with attractive growth potential and room to expand their market niche.</p></article>'+
     '<article class="step"><h2>The right structure.</h2><p>Buyouts, recapitalizations and growth equity for family and operator owned companies and corporate carve-outs, with platforms and add-ons built around a proven model.</p></article>'+
     '<article class="step"><h2>Systems that scale.</h2><p>Our team brings institutional discipline, advanced infrastructure and deep industry expertise, optimizing the systems a multi-location business needs to grow.</p></article>'+
     '<article class="step"><h2>Investing in people.</h2><p>Active, collaborative partnerships with strong, growth-minded management teams, investing in people to accelerate long-term growth.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Established, profitable, <em>led well.</em></h2></div><p data-r>JPB Private Equity invests in established, profitable businesses led by strong, growth-minded management teams, taking a long-term, partnership-focused approach.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Partnerships that shaped <em>who we are.</em></h2></div><p data-r>A representative selection of current and realized private equity investments, made in partnership with exceptional management teams.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec dark2" id="real-estate" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Real estate</span><h2 class="d2 split">Investments that stand the <em>test of time.</em></h2></div><p data-r>For nearly 30 years JPB has developed, owned and managed real estate across asset classes, from 55+ active adult communities to office, retail and residential land.</p></div>'+
   reRows(RE)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Family by name, or by <em>shared purpose.</em></h2></div><p data-r>With an average tenure of over 13 years, the JPB team reflects a deep commitment to our mission and values, united in driving long-term value for our partners, portfolio companies and communities.</p></div>'+
   team()+
   '<figure class="qt"><blockquote data-r>“Family and legacy guide everything we do at JPB Partners. It’s not just about returns. It’s about building something enduring for future generations.”</blockquote><figcaption class="lab" data-r>JP Bolduc, Founder &amp; Chairman</figcaption></figure>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Owners, intermediaries and co-investors</span>'+
   '<h2 class="big split">Let’s build something <em>enduring.</em></h2>'+
   '<p class="sub" data-r>If you own or advise a profitable, growing business in the Mid-Atlantic or Southeast, or a property with strong fundamentals, we would be glad to talk.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email JPB '+ARR+'</a><a class="btn" href="'+TELH+'">Call '+TEL+'</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>JPB Partners, LLC<br>7556 Teague Road, Suite 310<br>Hanover, MD 21076</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p data-r><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV on the SEC’s adviser search</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>7556 Teague Road, Suite 310<br>Hanover, MD 21076</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+TELH+'">'+TEL+'</a><br><a class="ul" href="mailto:'+MAIL+'">Email</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/real-estate">Real Estate</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Disclosures</span><a class="ul" href="'+ADV+'" target="_blank" rel="noopener">Form ADV</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 60" aria-hidden="true"><text x="260" y="50" text-anchor="middle" style="font-family:\'Figtree\',Arial,sans-serif;font-weight:800;font-size:58px;letter-spacing:-.02em">JPB PARTNERS</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 JPB Partners, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio","real-estate":"real-estate",team:"team",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"JPB Partners — Private equity and real estate, Hanover, Maryland",x:"Home"};
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
