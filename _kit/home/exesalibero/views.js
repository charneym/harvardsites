/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function pipeRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[2])+'</b><i>'+esc(c[3])+'</i></span><h3>'+esc(c[1])+'<span class="loc">'+esc(c[0])+'</span></h3><p>'+esc(c[4])+'</p><a class="lab ul lk" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+'</a></li>'}).join("")+'</ul>'}
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["The cell","Osteoclasts are the cells that resorb bone. In rheumatoid arthritis, multiple myeloma and other diseases they are overproduced, and bone erosion follows: severe pain, lesions and debilitation that disables millions of people each year.",'<path d="M6 44c10-4 18-4 22 0s14 4 22 0"/><path class="a" d="M14 38c0-10 6-18 14-18s14 8 14 18"/><circle class="f" cx="22" cy="31" r="2.2"/><circle class="f" cx="28" cy="27" r="2.2"/><circle class="f" cx="34" cy="31" r="2.2"/>'],
  ["The target","Ion channels in the cell membrane carry the calcium signals behind the final maturation of osteoclasts. ExesaLibero and its collaborators identified TRPC channels as critical mediators of inflammatory bone erosion.",'<path d="M6 20h44M6 36h44"/><path class="a" d="M22 14v28M34 14v28"/><circle class="f" cx="28" cy="10" r="2.4"/><circle class="f" cx="28" cy="47" r="2.4"/>'],
  ["The molecule","ELP-004, a haloanilide (N-methyl-3,4-dichloropropionaniline), is an ion-channel antagonist that preferentially inhibits TRPC channels and suppresses osteoclast maturation without the side effects of bisphosphonates.",'<path d="M28 8l15 8.5v17L28 42l-15-8.5v-17z"/><path class="a" d="M43 16.5l8-4.5M13 33.5l-7 4"/><circle class="f" cx="51" cy="12" r="2.6"/><circle class="f" cx="6" cy="37.5" r="2.6"/>']];
  return '<div class="caps">'+C.map(function(c,i){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<div class="ev"><span class="lab kick" data-r>ELP-004 in preclinical testing</span><div><dl>'+EVID.map(function(e){return '<div><dt class="lab" data-r>'+esc(e[0])+'</dt><dd data-r>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'+
  '<p class="note-s" data-r>McCall et al., Pharmacology Research &amp; Perspectives, 2024 (doi 10.1002/prp2.1230), and Ray et al., Science Advances, 2025 (doi 10.1126/sciadv.abm9843). Preclinical results in mice and cell models.</p></div></div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Bone disease<span class="nomob"> · Small molecules</span> · Morgantown, WV</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Stopping the cells</span><span class="l">that erode <em>bone.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>ExesaLibero Pharma is developing ELP-004, a small-molecule ion-channel antagonist that suppresses osteoclast maturation, to control the bone erosion of rheumatoid arthritis, multiple myeloma and other debilitating diseases.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/technology">How ELP-004 works '+ARR+'</a><a class="btn" href="#/programmes">Our programmes</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Bone erosion comes with cancer, trauma, infection and arthritis, and most cases are idiopathic. There is still no small-molecule drug to treat arthritis bone erosion specifically. ExesaLibero is developing <em>one.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">None</span><span class="k">Small-molecule drugs available today to treat arthritis bone erosion specifically</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2</span><span class="k">Mouse models of arthritis in which ELP-004 strongly suppressed bone erosion, even after symptoms were measurable</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$1.88M</span><span class="k">In NIH NIAMS STTR and SBIR awards since 2019, most recently for osteogenesis imperfecta in 2026</span></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How ELP-004 works</span><h2 class="d3">Block the channel, <em>spare the bone.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Erosion</span><span>Signal</span><span>Block</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Inflammation builds bone-eating cells.</h2><p>In arthritis, signals such as TNFα drive myeloid precursor cells to fuse into mature osteoclasts. Too many of them, and they resorb bone faster than it can be rebuilt.</p></article>'+
     '<article class="step"><h2>Calcium carries the signal.</h2><p>The final maturation of osteoclasts depends on calcium entering the cell through ion channels in its membrane. ExesaLibero and its collaborators showed that TRPC channels are critical to inflammatory bone erosion.</p></article>'+
     '<article class="step"><h2>ELP-004 closes the channel.</h2><p>ELP-004 preferentially inhibits TRPC channels. Osteoclast maturation driven by inflammation is suppressed, normal RANKL-driven maturation is minimally affected, and in mice the bone is spared.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="platform" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Our technology</span><h2 class="d2 split">One pathway, <em>many bone diseases.</em></h2></div><p data-r>ExesaLibero is working on a new approach to bone erosion based on a common pathway in the cell that infiltrates bone and joints, so a single molecule could serve arthritis, cancer and rare bone disease.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="programmes" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Programmes</span><h2 class="d2 split">From the mouse model <em>to the IND.</em></h2></div><p data-r>One lead candidate, ELP-004, in preclinical development for diseases where bone erosion is the problem, with the toxicology and pharmacokinetic studies that lead to an IND application with the FDA.</p></div>'+
   pipeRows(PIPE)+
   evid()+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Extensive experience, <em>focused outcomes.</em></h2></div><p data-r>ExesaLibero is led by immunologists from West Virginia University School of Medicine, with a board and a scientific advisory board drawn from pharmacy, rheumatology, orthopaedics, pathology and chemistry.</p></div>'+
   team()+
   '<div class="plat light-plat">'+
    '<div><span class="lab kick" data-r>Collaborations</span><p data-r>West Virginia University, the University of Kansas Medical Center and the University of Pittsburgh.</p></div>'+
    '<div><span class="lab kick" data-r>Funding</span><p data-r>STTR Phase I and II and SBIR Phase I awards from the National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS).</p></div>'+
    '<div><span class="lab kick" data-r>Advisers</span><p data-r>Spilman Thomas &amp; Battle, Charleston, legal counsel; Baker Tilly, Morgantown, accounting.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Papers, awards <em>and a launch.</em></h2></div><p data-r>The latest from ExesaLibero, from the Science Advances paper to ELP-004 chemistry aboard the International Space Station.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Invest in humanity</span>'+
   '<h2 class="big split">Restore <em>the balance.</em></h2>'+
   '<p class="sub" data-r>Investors, partners and collaborators: ExesaLibero would be glad to talk about ELP-004 and the road to the clinic.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email ExesaLibero '+ARR+'</a><a class="btn" href="#/programmes">See the programmes</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>ExesaLibero Pharma<br>781 Chestnut Ridge Road, Suite 400<br>Morgantown, WV 26505</p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14122963200">'+TEL+'</a></p></div>'+
    '<div><span class="lab" data-r>Elsewhere</span><p data-r><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>781 Chestnut Ridge Road, Suite 400<br>Morgantown, WV 26505</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+14122963200">'+TEL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/technology">Technology</a><br><a class="ul" href="#/programmes">Programmes</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Lead candidate</span>ELP-004<br>Ion-channel antagonist</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 62" aria-hidden="true"><text x="320" y="52" text-anchor="middle" style="font-family:\'Inter\',Arial,sans-serif;font-weight:700;font-size:62px;letter-spacing:-.03em">ExesaLibero</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 ExesaLibero Pharma</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",technology:"story",platform:"platform",programmes:"programmes",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"ExesaLibero Pharma — Small-molecule drugs for bone erosion, Morgantown, WV",x:"Home"};
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
