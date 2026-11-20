/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'+
  '<div class="adv"><span class="lab kick" data-r>Advisors</span><p data-r>'+ADVISORS.map(function(a){return '<span>'+esc(a)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Engineered tRNA therapeutics<span class="nomob"> · New Haven, Connecticut</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Cancer’s own RNA</span><span class="l">machinery, <em>turned on it.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Cloverleaf Bio, a Yale spinout, is developing a new class of RNA therapeutics: engineered tRNAs that inhibit the RNA-modifying enzymes cancer cells depend on as they grow.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A transfer RNA, atom by atom: yeast phenylalanine tRNA, from its 1.93 Å crystal structure (PDB 1EHZ).</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Liver cancer cells lean on a set of enzymes that modify their transfer RNAs. Cloverleaf builds tRNAs that look like the real thing, draw those enzymes in, and <em>do not let them go.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$33M</span><span class="k">Oversubscribed seed financing, led by 4BIO Capital, September 2026</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">7,000×</span><span class="k">Lower IC50 for CLB-001 than free 5-FU in liver cancer cells, in preclinical work</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;15%</span><span class="k">Five-year survival for patients with hepatocellular carcinoma today</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A Yale spinout</span><p data-r>Built on doctoral research into RNA modifications and tRNA-modifying enzymes in the Gilbert lab at Yale University.</p></div>'+
    '<div><span class="lab kick" data-r>One molecule, many targets</span><p data-r>A single engineered tRNA carrying 5-fluorouracil can inhibit several tRNA-modifying enzymes at once, which raises its potency.</p></div>'+
    '<div><span class="lab kick" data-r>Beyond oncology</span><p data-r>The platform could reach other cancers and, in the longer term, neurodegenerative and fibrotic diseases.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">A tRNA built <em>as a trap.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Dependence</span><span>Payload</span><span>Trap</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Tumors run on modified tRNA.</h2><p>Every tRNA folds into a cloverleaf, and enzymes chemically modify its loops. Liver cancer cells depend on high levels of several of these enzymes to proliferate and spread.</p></article>'+
     '<article class="step"><h2>An engineered tRNA, carrying 5-FU.</h2><p>Cloverleaf writes 5-fluorouracil, an FDA-approved chemotherapy, into an engineered tRNA at the positions those enzymes act on. To the enzymes, it looks like their natural substrate.</p></article>'+
     '<article class="step"><h2>Enzymes in, never out.</h2><p>The enzymes bind and are irreversibly inhibited, several at once from the same molecule. In preclinical studies the lead tRNA, CLB-001, was selective for cancer cells over healthy cells.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One platform, <em>three cancers.</em></h2></div><p data-r>The seed financing advances two lead programs; a third is funded by the National Cancer Institute. All are preclinical.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Out of the lab <em>that maps RNA.</em></h2></div><p data-r>Cloverleaf was founded by two Yale Ph.D.s and the professor whose lab trained them, with advisors from industry and Yale.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From grants <em>to a seed round.</em></h2></div><p data-r>Early research was supported by the National Cancer Institute’s SBIR/STTR program; the seed round closed in 2026.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and scientists</span>'+
   '<h2 class="big split">Bring the next tRNA <em>to patients.</em></h2>'+
   '<p class="sub" data-r>Cloverleaf Bio works from New Haven, Connecticut, and is hiring. To talk about the platform, a partnership or a role, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+JOBS+'" target="_blank" rel="noopener">Open roles</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Cloverleaf Bio, Inc.<br>101 College Street, Suite 210<br>New Haven, CT 06510</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Origins</span><p data-r>A Yale University spinout<br>Founded in New Haven</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>101 College Street, Suite 210<br>New Haven, Connecticut 06510</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+JOBS+'" target="_blank" rel="noopener">We are hiring</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Engineered tRNA therapeutics<br>for cancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Figtree\',system-ui,sans-serif;font-weight:600;font-size:76px;letter-spacing:-.01em"><tspan fill="#f7f3ec">Cloverleaf</tspan><tspan fill="#feae00" dx="6">Bio</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Cloverleaf Bio, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Cloverleaf Bio — engineered tRNA therapeutics for cancer, New Haven",x:"Home"};
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
