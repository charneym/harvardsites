/* ================= VIEWS (home only: Technology / Applications / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+esc(c[3])+'</p>'+(c[4]?'<a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a>':'<span class="lab lk st">'+esc(c[5])+'</span>')+'</li>'}).join("")+'</ul>'}
function people(list){return '<ul class="tm">'+list.map(function(p){
  return '<li><figure class="ph"><img src="'+p[3]+'" alt="'+esc(p[0])+'" loading="lazy" decoding="async" onerror="this.closest(\'figure\').classList.add(\'noimg\')"></figure>'+
  '<div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span><p>'+esc(p[2])+'</p></div></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Traceless peptide ligation<span class="nomob"> · Nuth, The Netherlands</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">An enzyme that joins</span><span class="l"><em>peptides in water.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>EnzyTag develops improved synthetic routes to peptide-based new chemical entities, small proteins and peptide-containing (bio)conjugates, using the peptiligase technology it licenses worldwide.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">The technology '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>Thymoligase, a tailored peptiligase variant, drawn from its published crystal structure (PDB 5OX2). The catalytic residues are picked out in amber.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Peptide medicines are built one residue at a time, in solvent, and the longer the chain the more of it is lost. <em>An enzyme can simply join two finished pieces.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">Water</span><p class="k">The ligation runs in aqueous conditions at near-neutral pH</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2018</span><p class="k">Founded in December 2018 as a spin-out of EnzyPep, in Nuth</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><p class="k">Signed into FlexCAT, a Horizon Europe doctoral network</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Traceless</span><p data-r>The enzyme leaves no linker, tag or scar at the junction: the product is the peptide sequence itself, not a modified version of it.</p></div>'+
    '<div><span class="lab kick" data-r>Selective</span><p data-r>Ligation is regio- and stereoselective, so side reactions are avoided and the purity of the product improves.</p></div>'+
    '<div><span class="lab kick" data-r>Scalable</span><p data-r>EnzyTag describes the route as green and sustainable, with efficient scaling to commercial volumes and lower cost of goods.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The technology</span><h2 class="d3">Two pieces, <em>one chain.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fragments</span><span>Ligation</span><span>Product</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Make the halves separately.</h2><p>Each half of the target is assembled by ordinary solid-phase synthesis, which is efficient over short stretches. One carries an activated ester at its C-terminus; the other presents a free N-terminus.</p></article>'+
     '<article class="step"><h2>Let the ligase join them.</h2><p>Peptiligase, an engineered subtilisin variant, binds both pieces in its active site and forms the peptide bond between them in water at near-neutral pH, rather than hydrolysing what it has just made.</p></article>'+
     '<article class="step"><h2>Nothing is left behind.</h2><p>The enzyme releases one continuous chain with no linker and no scar at the junction. EnzyTag reports higher yields than solid-phase synthesis alone over long or complex sequences, and the same chemistry can close a chain end to end.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="applications" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">One ligase, <em>several molecule classes.</em></h2></div><p data-r>EnzyTag holds a worldwide exclusive licence to use peptiligases for new chemical entities, and offers the technology to partners under licence. The enzymes themselves are patented by EnzyPep B.V., part of Fresenius Kabi.</p></div>'+
   progs()+
   '<div class="crq"><a class="lab ul lk" href="#/contact">Talk to us about a target '+ARR+'</a></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">A small company, <em>a long record.</em></h2></div><p data-r>EnzyTag is a private investment and venture-capital-backed company in Nuth, in the south of the Netherlands, next to the Chemelot campus.</p></div>'+
   people(TEAM)+
   '<span class="lab sub-l" data-r>Scientific Advisory Board</span>'+
   people(SAB)+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News and references</span><h2 class="d2 split">Published work, <em>and what is next.</em></h2></div><p data-r>The peptiligase technology is described in the peer-reviewed literature; in June 2026 EnzyTag was named a partner in a Horizon Europe doctoral training network.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, licensees and clients</span>'+
   '<h2 class="big split">Peptides, joined <em>without a trace.</em></h2>'+
   '<p class="sub" data-r>EnzyTag is open to further discussions on technology licensing for commercial purposes. Write to us, or call the office in Nuth.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="#/technology">The technology</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r class="adr"><span>EnzyTag B.V.</span><span>Daelderweg 9</span><span>NL-6361 HK Nuth</span><span>The Netherlands</span></p></div>'+
    '<div><span class="lab" data-r>Email and telephone</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>'+TEL+'</p></div>'+
    '<div><span class="lab" data-r>Company</span><p data-r>Founded in December 2018<br>A spin-out of EnzyPep</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>Daelderweg 9<br>Nuth, The Netherlands</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>'+TEL+'</div>'+
   '<div class="c"><span class="lab">Focus</span>Traceless peptide<br>ligation</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="58" text-anchor="middle" style="font-family:\'Source Sans 3\',system-ui,sans-serif;font-size:70px;letter-spacing:-.01em"><tspan fill="#f4f2f8" font-weight="400">Enzy</tspan><tspan fill="#f4f2f8" font-weight="600">Tag</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 EnzyTag B.V.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",technology:"story",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"EnzyTag — traceless peptide ligation, Nuth, The Netherlands",x:"Home"};
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
