/* ================= VIEWS (home only: every nav item scrolls to its section on #/) ================= */
function pfRows(list){return '<ul class="pfr">'+list.map(function(c){return '<li><span class="lab tg">'+esc(c[2])+'</span><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><span class="lab lc">'+esc(c[3])+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Healthcare private equity<span class="nomob"> · Nashville, Tennessee</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A physician-led</span><span class="l">partner for</span><span class="l"><em>healthcare founders.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Tristela Capital Partners is a Nashville-based, physician-led independent sponsor firm looking to acquire healthcare services companies in the lower middle market.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/contact">Contact us</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Who we are</span>'+
   '<h2 class="txt" id="mani">A physician at the helm, <b class="w0">founders as partners,</b> and healthcare services companies built to <em>care for their communities.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">17</span><span class="k">Care locations in Tristela’s Louisiana pediatric platform: 14 outpatient, 3 inpatient</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">33</span><span class="k">Providers at Pediatric Group of Acadiana, acquired September 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">1994</span><span class="k">The year PGOA’s founder opened the practice in Lafayette, Louisiana</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Physician-led</span><p data-r>Founded by Lisa Piercey, MD, MBA, a board-certified pediatrician and former Tennessee Commissioner of Health.</p></div>'+
    '<div><span class="lab kick" data-r>Independent sponsor</span><p data-r>Tristela acquires companies alongside capital partners and its own principals: its Louisiana platform was financed with debt and equity from True West Capital Partners.</p></div>'+
    '<div><span class="lab kick" data-r>Founder-led businesses</span><p data-r>Tristela partners with founder-led healthcare services businesses in the lower middle market, and keeps the founder close to the work.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we partner</span><h2 class="d3">From a founder’s practice <em>to a platform.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Physician</span><span>Founder</span><span>Partner</span><span>Platform</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Physician-led.</h2><p>Tristela is led by a physician: its founder is a board-certified pediatrician who served as Tennessee’s Commissioner of Health.</p></article>'+
     '<article class="step"><h2>Founder-built.</h2><p>Tristela looks for healthcare services companies that founders have built, like Pediatric Group of Acadiana, founded in Lafayette in 1994.</p></article>'+
     '<article class="step"><h2>The founder stays.</h2><p>At PGOA, founder Dr. Jibran Atwi continues to see patients, and joins Tristela’s board after the acquisition.</p></article>'+
     '<article class="step"><h2>A rural platform.</h2><p>PGOA and its management services organization, IPS, form a pediatric rural healthcare platform across South Central Louisiana.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>What we look for</span><h2 class="d2 split">Healthcare services, <em>lower middle market.</em></h2></div><p data-r>Tristela acquires healthcare services companies and partners with the founders who built them. These are the parameters the firm publishes.</p></div>'+
   '<dl class="facts">'+CRIT.map(function(a){return '<div><dt class="lab">'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd></div>'}).join("")+'</dl>'+
  '</div></section>'+

  '<section class="sec dark" id="portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Care close <em>to home.</em></h2></div><p data-r>A platform acquisition announced in September 2026: pediatric primary care for rural families in South Central Louisiana.</p></div>'+
   pfRows(PF)+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Led by <em>a physician.</em></h2></div><p data-r>Clinical training, public health leadership and health-system operating experience, now applied to buying and building healthcare companies.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>activity.</em></h2></div><p data-r>Announcements from Tristela and its portfolio.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Founders, owners and intermediaries</span>'+
   '<h2 class="big split">Start a <em>conversation.</em></h2>'+
   '<p class="sub" data-r>If you own or advise a founder-led healthcare services company in the lower middle market, Tristela would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Tristela '+ARR+'</a><a class="btn" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>Tristela Capital Partners<br>Nashville, Tennessee</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Online</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Nashville, Tennessee</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">Email</a><br><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Healthcare services<br>Lower middle market</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 74" aria-hidden="true"><text x="260" y="58" text-anchor="middle" style="font-family:\'Figtree\',Arial,sans-serif;font-weight:800;font-size:96px;letter-spacing:-.035em">tristela</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Tristela Capital Partners</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",approach:"story",criteria:"criteria",portfolio:"portfolio",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Tristela Capital Partners — Physician-led healthcare private equity, Nashville",x:"Home"};
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
