/* ================= VIEWS (home only: Technology / Applications / Team / News open build-out pages via _kit/lib/buildout.js;
   Contact and the in-page CTAs scroll) ================= */
function work(){return '<ul class="awork">'+WORK.map(function(c){
  return '<li><span class="lab tag">'+esc(c[0])+'</span><div class="aimh"><h3>'+esc(c[1])+'</h3></div><p>'+esc(c[2])+'</p><a class="lab ul lk" href="'+c[3]+'" target="_blank" rel="noopener">'+esc(c[4])+'</a></li>'}).join("")+'</ul>'}
function apps(){return '<ul class="apl">'+APPS.map(function(c){
  return '<li><div class="apn"><h3>'+esc(c[0])+'</h3><span class="loc">'+esc(c[1])+'</span></div><span class="lab stg">'+esc(c[2])+'</span><p>'+esc(c[3])+'</p></li>'}).join("")+'</ul>'}
function team(){return '<ul class="tmr">'+TEAM.map(function(p){
  return '<li><div class="tn"><h3>'+esc(p[0])+'</h3><span class="lab rl">'+esc(p[1])+'</span></div><p>'+esc(p[2])+'</p>'+
  '<a class="lab ul lk" href="'+p[3]+'" target="_blank" rel="noopener">'+esc(p[4])+'</a></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Peptide discovery<span class="nomob"> · Richmond, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Taming peptide</span><span class="l"><em>discovery.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Onca Bio builds mRNA display libraries for macrocyclic peptides that carry diversity at every position in the ring — the two residues that close it included.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A macrocyclic peptide on its target, atom by atom: the cyclic peptide Ra30303 bound to the TE domain of human complement C5, from the 2.0 Å crystal structure PDB 9Y6C.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mrow">'+
    '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
    '<h2 class="txt" id="mani">An mRNA display library can search billions of macrocyclic peptides at once. But they are all built with the same two fixed residues, so every hit carries them too. Onca Bio is taking out <em>the fixed positions.</em></h2></div>'+
    '<div class="stats">'+
     '<div class="stat"><span class="ln2"></span><span class="v">$348,848</span><p class="k">NCATS SBIR Phase I award, September 2025, to expand peptide library diversity</p></div>'+
     '<div class="stat"><span class="ln2"></span><span class="v">10×</span><p class="k">The order-of-magnitude gain in chemical space coverage the award sets out to reach</p></div>'+
     '<div class="stat"><span class="ln2"></span><span class="v">2</span><p class="k">Positions in a standard mRNA display macrocycle library that carry zero diversity, by construction</p></div>'+
    '</div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>A codon table per position</span><p data-r>Segmented in vitro translation can reassign mRNA codons to different amino acids more than once inside a single transcript, so the codon table is defined locally by position rather than globally across the sequence.</p></div>'+
    '<div><span class="lab kick" data-r>Built for ultra-large libraries</span><p data-r>Taking the method from single sequences to libraries needs development in the method itself, in the design of the mRNA, and in the non-natural substrates that drive cyclization.</p></div>'+
    '<div><span class="lab kick" data-r>Measured by selection</span><p data-r>Library productivity is judged by running mRNA display selections against targets considered undruggable, and benchmarking against typical macrocycle libraries.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3">Two residues <em>no one could vary.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fixed</span><span>Segmented</span><span>Open</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Every macrocycle starts the same way.</h2><p>Precursor peptides are made with two fixed residues, a chloroacetyl and a thiol amino acid, that react with each other to close the ring. The library has zero diversity at those two positions, and every hit inherits them.</p></article>'+
     '<article class="step"><h2>Translate the message in segments.</h2><p>Segmented in vitro translation reassigns codons to different amino acids several times within one transcript. The codon table becomes local: it is set by position along the message, not once for the whole sequence.</p></article>'+
     '<article class="step"><h2>The ring closes on varied residues.</h2><p>Diversifying the cyclization positions gives hits that use all of their residues, and structure-activity datasets that are complete rather than blind at two places in the ring.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="technology" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">Segmented in vitro translation, <em>aim by aim.</em></h2></div><p data-r>Onca Bio’s NCATS SBIR Phase I has three stated aims. They are set out here as the award record states them.</p></div>'+
   work()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split">Macrocycles that <em>already reached patients.</em></h2></div><p data-r>mRNA display has been the starting point for macrocyclic peptide drugs in very different conditions. Each one took years of further screening to get from a display hit to a lead compound — the distance Onca Bio’s libraries are built to shorten.</p></div>'+
   apps()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The company, <em>as it is published.</em></h2></div><p data-r>Onca Bio publishes no team page. This is the person named in its public record, with the award and the thesis that stand behind the work.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">What is <em>on the record.</em></h2></div><p data-r>Two public items, each linking to its source.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Chemists, biologists and partners</span>'+
   '<h2 class="big split">Point a library <em>at a hard target.</em></h2>'+
   '<p class="sub" data-r>Onca Bio works from Richmond, Virginia. To talk about peptide discovery, the libraries or a role, write to us.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">'+MAIL+' '+ARR+'</a><a class="btn" href="'+RP+'" target="_blank" rel="noopener">The award record</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Onca Bio, Inc.<br>Richmond, Virginia<br>United States</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Focus</span><p data-r>mRNA display libraries<br>for macrocyclic peptides</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>Richmond, Virginia<br>United States</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="'+WEB+'" target="_blank" rel="noopener">oncabio.com</a></div>'+
   '<div class="c"><span class="lab">Focus</span>mRNA display libraries<br>for macrocyclic peptides</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Inter\',system-ui,sans-serif;font-weight:600;font-size:84px;letter-spacing:-.015em"><tspan fill="#f4f8fa">Onca</tspan><tspan fill="#2eaaff" dx="10">bio</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Onca Bio, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",technology:"technology",applications:"applications",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Onca Bio — taming peptide discovery, Richmond, Virginia",x:"Home"};
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
