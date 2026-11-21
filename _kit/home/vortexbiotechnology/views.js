/* ================= VIEWS (home only: Technology / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tm">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Novel anti-cancer biotechnology<span class="nomob"> · Charleston, South Carolina</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Make the RNAs</span><span class="l">behind cancer <em>decay.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Vortex Biotechnology discovers novel anticancer targets and designs small molecules that block them. Its lead compound, VBT-34, is an oral stimulator of RNA degradation for hematological and solid tumors.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Pim-1 kinase, atom by atom: the human kinase domain from its crystal structure (PDB 1XWS). Pim-1 and Pim-3 are the kinases VBT-34 acts on.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our focus</span>'+
   '<h2 class="txt" id="mani">DNA makes RNA, and RNA makes the proteins that drive cancer. Vortex pursues novel targets that control specific classes of RNA, <em>stimulating their degradation or extending their half-life.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">NCI-designated Cancer Centers directed by the founder, Dr. Andrew Kraft</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">160+</span><span class="k">Scientific articles by Dr. Kraft on the control of cancer growth and signaling</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$400K</span><span class="k">Phase I SBIR grant from the National Cancer Institute, 2023</span></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Tumor-agnostic</span><p data-r>Unique targets that can be applied across multiple tumor types, for patients with unmet medical needs.</p></div>'+
    '<div><span class="lab kick" data-r>Structure-based design</span><p data-r>Proven structure-based drug design, from compelling biological validation and target structures to first-in-class candidates.</p></div>'+
    '<div><span class="lab kick" data-r>Built for the clinic</span><p data-r>Leadership with experience in the laboratory and in phase 1–3 trials, and close ties to the NCI, NCI Cancer Centers and biopharma.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Technology</span><h2 class="d3">Release the brake <em>on RNA decay.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">The brake</span><span>The pocket</span><span>The decay</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Pim kinases jam decapping.</h2><p>RNAs carry a protective 5′ cap. EDC3 is the scaffold protein needed to remove it, but in prostate cancer Pim-1 and Pim-3 kinases heavily phosphorylate EDC3, which blocks its ability to regulate decapping.</p></article>'+
     '<article class="step"><h2>VBT-34 fits a new pocket.</h2><p>Modeling shows VBT-34 fits a newly identified pocket in Pim-1 and Pim-3. It blocks EDC3 from binding the kinases, so the inhibitory phosphorylation stops.</p></article>'+
     '<article class="step"><h2>Cancer RNAs are destroyed.</h2><p>With EDC3 free, decapping resumes and a specific set of RNAs, regulators of cell adhesion, cytokine production and cell mobility, is destroyed. In prostate cancer models VBT-34 blocks growth and invasion.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One mechanism, <em>many tumors.</em></h2></div><p data-r>VBT-34 leads a pipeline of small molecules against RNA-regulating targets. All programs are preclinical.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Funding and partners</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Physicians who have <em>run the trials.</em></h2></div><p data-r>Top scientists and medical doctors who have discovered, developed and patented novel compounds and drugs.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Grants, and a new <em>partnership.</em></h2></div><p data-r>Support from the National Cancer Institute and the State of Colorado, and a collaboration with Sanford Burnham Prebys.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investigators and investors</span>'+
   '<h2 class="big split">Bring RNA decay <em>to the clinic.</em></h2>'+
   '<p class="sub" data-r>Vortex works closely with the National Cancer Institute, NCI Cancer Centers and biopharma. To talk about VBT-34 or a partnership, send us a note. We are not hiring at this time.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Write to Vortex '+ARR+'</a><a class="btn" href="#/pipeline">See the pipeline</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Vortex Biotechnology Corporation<br>Charleston, South Carolina</p></div>'+
    '<div><span class="lab" data-r>Leadership</span><p data-r>Andrew S. Kraft, M.D.<br>Founder and CEO</p></div>'+
    '<div><span class="lab" data-r>Funding</span><p data-r>National Cancer Institute SBIR<br>Colorado OEDIT</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Vortex Biotechnology Corporation<br>Charleston, South Carolina</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Write to Vortex</a><br>Not hiring at this time</div>'+
   '<div class="c"><span class="lab">Focus</span>Small molecules that regulate<br>RNA degradation in cancer</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:700;font-size:80px;letter-spacing:-.01em"><tspan fill="#f2f6fa">Vortex</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Vortex Biotechnology Corporation</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Vortex Biotechnology — small molecules that make cancer RNA decay",x:"Home"};
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
