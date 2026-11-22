/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b'+(c[5]?' class="pz"':'')+'>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk'+(c[3].indexOf("Available")===0?' av':'')+'">'+(c[3].indexOf("Available")===0?'For licensing':c[5]?'Next':'In development')+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["SDALib™ antibody generation","Self-diversifying yeast libraries display camelid VHH domains and mature them in vivo against the target, so antibodies against established and emerging targets are raised without animals.",'<circle cx="28" cy="34" r="14"/><path class="a" d="M28 20v-6M28 14l-5-5M28 14l5-5"/><path d="M20 44a12 12 0 0 0 16 0"/>'],
  ["SDALib™ optimisation","A patented inducible triple-mode system switches between in vivo affinity maturation, surface display and secretion, with FACS sorting selecting on affinity, pH-dependence, solubility and developability at once.",'<path d="M12 40V16M12 16l8 6M12 16l-8 6"/><path class="a" d="M24 40c0-12 8-20 20-20"/><circle class="f" cx="44" cy="20" r="3"/><path d="M24 44h24"/>'],
  ["Abz2™ bispecifics","A plug-and-play process turns an existing IgG into a well-expressing bispecific with a completely normal IgG structure, and VHH modules link into multi-specific and CAR constructs.",'<path d="M28 44V28"/><path d="M28 28 16 12M28 28l12-16"/><path class="a" d="M16 12h-6M40 12h6"/><circle class="f" cx="28" cy="44" r="3"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The platform behind them</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>From abzymetx.com (Technology Overview, Services Overview and Who We Are), Abzyme press releases and the public NIH award record.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Single-domain antibody discovery and engineering<span class="nomob"> · Pennsylvania</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Small domains.</span><span class="l"><em>Big impact.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Abzyme Therapeutics discovers and engineers camelid VHH single-domain antibodies — small enough to reach epitopes conventional antibodies cannot, and to be built into bispecifics, CAR constructs and therapies that cross the blood-brain barrier.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">Our technology '+ARR+'</a><a class="btn" href="#/pipeline">The pipeline</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why single domains</span>'+
   '<h2 class="txt" id="mani">A conventional antibody is large, hard to fold and blind to cryptic epitopes. A VHH is one small domain, encoded by one gene — a <em>building block</em> for the molecules a target really needs.</h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">60+</span><p class="k">Proprietary and partnered programmes in development across oncology, ophthalmology, inflammation and CNS disorders</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2×</span><p class="k">Blood-brain barrier penetration for the RVG29-modified anti-C1q nanobody, versus the unmodified nanobody</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">Weeks</span><p class="k">From receipt of a target to optimised antibodies in several formats, in one discovery cycle</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How the platform works</span><h2 class="d3">One target in, <em>modules out.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Display</span><span>Mature</span><span>Build</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A library that diversifies itself.</h2><p>Yeast cells carry a self-diversifying library of camelid VHH domains on their surface. No animal is immunised: the library meets the target in vitro, including non-immunogenic and highly toxic antigens that conventional routes cannot reach.</p></article>'+
     '<article class="step"><h2>Maturation, then sorting.</h2><p>The patented triple-mode system induces in vivo affinity maturation inside the yeast, and FACS single-cell sorting selects the cells that bind hardest — screening in real time for epitope diversity, pH-dependence, solubility and expressibility.</p></article>'+
     '<article class="step"><h2>Modules into molecules.</h2><p>Switched to secretion mode, the selected domain is produced and linked by flexible Gly-Ser linkers into bispecifics, T-cell engagers, CAR constructs or half-life-extended formats — or plugged into an existing IgG as an Abz2 bispecific.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Three platforms, <em>one engine.</em></h2></div><p data-r>Abzyme is a biopharmaceutical discovery and service company in the Philadelphia biotechnology hub, built on a proprietary eukaryotic antibody discovery and optimisation platform: yeast display, self-diversifying libraries and target-directed affinity maturation, read out by single-cell sorting.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Programmes and <em>modules to license.</em></h2></div><p data-r>Abzyme develops its own candidates and partners the rest. Lead programmes run in progressive multiple sclerosis and retinal neovascular disease under NIH awards; the immuno-oncology modules are available for licensing or co-development.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Antibody engineers <em>by training.</em></h2></div><p data-r>A small team whose careers run through antibody engineering, humanisation and cell-line development at GSK, Centocor and Rockland Immunochemicals, and through the NIH.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>NIH SBIR and STTR awards since 2011, from NEI, NINDS, NIAID, NIGMS and others, together with Department of Defense support.</p></div>'+
    '<div><span class="lab kick" data-r>Collaborators</span><p data-r>Dartmouth Hitchcock Medical Center and the Geisel School of Medicine, the University of Cincinnati and the Medical University of South Carolina.</p></div>'+
    '<div><span class="lab kick" data-r>Services</span><p data-r>Fee-for-service VHH discovery and development, screening of pre-immunised llama libraries against 100+ therapeutic targets, and conditionally-active antibody engineering.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Publications, patents <em>and awards.</em></h2></div><p data-r>The latest from Abzyme, the peer-reviewed literature and the NIH record.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, licensees and research groups</span>'+
   '<h2 class="big split">Talk to <em>Abzyme.</em></h2>'+
   '<p class="sub" data-r>Whether you need antibodies against a difficult target, want to license a module, or are looking for a partner to take a candidate forward, we would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Abzyme '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Abzyme Therapeutics, LLC<br>Pottstown, Pennsylvania<br>Greater Philadelphia, USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>610-205-9650</p></div>'+
    '<div><span class="lab" data-r>Services</span><p data-r>VHH discovery, engineering and optimisation, and Abz2 plug-and-play bispecifics, run as fee-for-service programmes.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Pottstown, Pennsylvania<br>Greater Philadelphia, USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Platforms</span>SDALib™ generation · SDALib™ optimisation · Abz2™ bispecifics</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 62" aria-hidden="true"><text x="380" y="50" text-anchor="middle" style="font-family:\'Montserrat\',Arial,sans-serif;font-weight:300;font-size:58px;letter-spacing:.1em">abzyme</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Abzyme Therapeutics, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",platform:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Abzyme Therapeutics — single-domain antibodies, engineered to reach",x:"Home"};
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
