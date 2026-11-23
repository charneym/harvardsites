/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li'+(c[5]?' class="dim"':'')+'><span class="lab tg"><b class="nc'+(c[5]?' pz':'')+'">'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+c[4]+'</p><span class="lab lk'+(c[5]?'':' av')+'">'+(c[7]?'<a class="ul" href="'+RPT+c[7]+'" target="_blank" rel="noopener">'+c[7]+' '+ARR+'</a>':esc(c[6]))+'</span></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function caps(){var C=[
  ["A master switch, lost","In decompensated cirrhosis, the hepatocyte-specific transcriptional networks break down and liver cells lose their identity and function. Falling HNF4&#945; is consistently associated with worsening clinical outcomes.",'<rect x="10" y="20" width="36" height="16"/><circle class="f" cx="20" cy="28" r="5"/><path class="a" d="M34 28h6"/>'],
  ["Modified mRNA, by nanoparticle","A modified mRNA encoding HNF4&#945;, carried to the liver in a lipid nanoparticle, built on the modified-mRNA technology of co-founder and Nobel laureate Drew Weissman.",'<circle cx="28" cy="28" r="17"/><path class="a" d="M17 28c3-5 5-5 8 0s5 5 8 0 5-5 6 0"/>'],
  ["Function, restored","Re-expressing HNF4&#945; significantly improves hepatocyte function and promotes survival in human and animal models of decompensated cirrhosis and end-stage liver disease.",'<path d="M28 8l17 10v20L28 48 11 38V18z"/><path class="a" d="M20 28l6 6 11-12"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+c[0]+'</h3><p data-r>'+c[1]+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>The path to the clinic</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+e[1]+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>The aims of the NIDDK Direct-to-Phase II SBIR award (1R44DK148355), September 2026 to June 2028, from its published project summary.</p></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+n[1]+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r><span class="nc">HNF4&#945; mRNA</span> therapy<span class="nomob"> · End-stage liver disease</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Master transcription</span><span class="l">therapy to rescue</span><span class="l"><em>end-stage organs.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MasterSwitch Bio is developing an mRNA medicine that restores HNF4&#945;, a master transcription factor of the liver, to reverse decompensated cirrhosis and end-stage liver disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/program">The program</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>The need</span>'+
   '<h2 class="txt" id="mani">No FDA-approved medicine can halt or reverse the slide to liver failure. <em>A transplant is the only cure, and there are far too few organs.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Cirrhotic models in which the team has shown complete reversal of disease and cirrhosis: rat, human hepatocyte and whole explanted human livers</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.19M</span><p class="k">NIDDK SBIR Direct-to-Phase II award, from September 2026, to take the therapy toward clinical trials</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2023</span><p class="k">The year co-founder Drew Weissman shared the Nobel Prize for the modified-mRNA discoveries the therapy builds on</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Turning the liver&#8217;s <em>master switch back on.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Deliver</span><span>Translate</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Delivered to the liver cell.</h2><p>A lipid nanoparticle carries modified mRNA encoding HNF4&#945; from the blood into the hepatocyte, the liver&#8217;s working cell.</p></article>'+
     '<article class="step"><h2>The cell makes HNF4&#945;.</h2><p>Released inside the cell, the mRNA is read by the cell&#8217;s ribosomes, which build new HNF4&#945; protein.</p></article>'+
     '<article class="step"><h2>The liver program restarts.</h2><p>HNF4&#945; enters the nucleus and binds the DNA, re-establishing the hepatocyte&#8217;s transcriptional networks so the cell regains its identity and function.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Master transcription <em>therapy.</em></h2></div><p data-r>One of the molecular drivers of liver failure is the collapse of the transcriptional networks that make a hepatocyte a hepatocyte. Rather than treat each downstream defect, MasterSwitch restores the transcription factor at the top of the network.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="program" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Program</span><h2 class="d2 split">A first-of-its-kind <em>medicine for ESLD.</em></h2></div><p data-r>Decompensated cirrhosis and end-stage liver disease, from metabolic disease or chronic alcohol exposure, cause millions of deaths each year. Transplantation is not viable or accessible for many patients. MasterSwitch aims to reverse the disease instead.</p></div>'+
   pipeRows(PIPE)+
   evid()+
   '<div class="bk"><span class="lab kick" data-r>Support from</span><p class="cr" data-r><span>NIH · NIDDK SBIR</span><i>·</i><span>Hatch BioFund</span><i>·</i><span>Pennsylvania Biotechnology Center</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">mRNA pioneers and <em>liver scientists.</em></h2></div><p data-r>Founded in 2024 and based in Ambler, Pennsylvania, MasterSwitch works with laboratories at the University of Pennsylvania and the University of Pittsburgh.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Origins</span><p data-r>A joint spinout of the University of Pittsburgh and the University of Pennsylvania, co-founded by Nobel laureate Drew Weissman.</p></div>'+
    '<div><span class="lab kick" data-r>Recognition</span><p data-r>Winner of the Pennsylvania Biotechnology Center&#8217;s entrepreneur spotlight pitch competition in 2025, with a $250,000 investment from the Hatch BioFund.</p></div>'+
    '<div><span class="lab kick" data-r>Our mission</span><p data-r>Master transcription therapy to rescue end-stage organs, starting with the liver.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Recent <em>milestones.</em></h2></div><p data-r>Grants, launches and coverage of MasterSwitch Bio.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Talk to <em>MasterSwitch.</em></h2>'+
   '<p class="sub" data-r>Interested in HNF4&#945; mRNA therapy for end-stage liver disease, or in the company&#8217;s Series A? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Write to us '+ARR+'</a><a class="btn" href="#/program">See the program</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>MasterSwitch Bio<br>Ambler, Pennsylvania<br>USA</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r>Christina Galbraith<br>Chief Operating Officer<br><a class="ul" href="'+MAIL+'">christina@masterswitchbio.com</a></p></div>'+
    '<div><span class="lab" data-r>Disclosures</span><p data-r><a class="ul" href="https://masterswitchbio.com/assets/masterswitch-fcoi-policy.pdf" target="_blank" rel="noopener">Financial Conflict of Interest Policy</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Ambler, Pennsylvania<br>USA</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">christina@masterswitchbio.com</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/program">Program</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">Program</span>HNF4&#945; mRNA-LNP for end-stage liver disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="56" text-anchor="middle" style="font-family:\'Jura\',sans-serif;font-weight:500;font-size:68px">MasterSwitch</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 MasterSwitch, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"technology",story:"story",program:"program",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MasterSwitch Bio — master transcription therapy for end-stage liver disease",x:"Home"};
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
