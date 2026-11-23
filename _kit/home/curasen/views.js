/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function props(){return '<ul class="pfr">'+PROPS.map(function(c,i){
  return '<li><span class="lab tg">'+String(i+1).padStart(2,"0")+'</span><div class="pn"><h3>'+c[0]+'</h3><span class="loc">'+esc(c[1])+'</span></div><p>'+c[2]+'</p></li>'}).join("")+'</ul>'}
function pipe(){
  return '<div class="ppl"><div class="ppl-h" aria-hidden="true"><span></span><div class="ppl-ph">'+PHASES.map(function(p){return '<span class="lab">'+p+'</span>'}).join("")+'</div></div>'+
  '<ul class="ppl-l">'+PIPE.map(function(r){
    return '<li><div class="ppl-n"><h3>'+esc(r[0])+'</h3><p class="pind">'+esc(r[1])+'</p><p class="lab moa">'+r[2]+'</p></div>'+
     '<div class="ppl-t"><div class="ppl-g" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><div class="ppl-b" style="--w:'+r[3]+'%"><i></i></div>'+
     '<p class="ppl-m"><span class="lab">'+PHASES[Math.min(4,Math.floor(r[3]/20))]+'</span>'+(r[4]?'<span class="nt">'+esc(r[4])+'</span>':'')+'</p></div></li>'}).join("")+'</ul>'+
  '<p class="lab ppl-f">nOH: neurogenic orthostatic hypotension · NCE: new chemical entity · AR: adrenoceptor</p></div>'}
function team(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Management</p><ul class="mh-list">'+TEAM.map(function(p){
  return '<li><div class="mh-row"><span class="mh-name">'+esc(p[0])+'</span><span class="mh-role">'+esc(p[1])+'</span><span class="mh-sum">'+esc(p[2])+'</span></div></li>'}).join("")+'</ul></div></div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function lst(a){return a.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')}
var ICO={lc:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 20c0-8 7-13 15-13s13 5 13 11c0 5-4 8-9 8h-3l-1 8"/><circle cx="21.5" cy="26" r="2.2"/></svg>',
 rec:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 16h32M4 24h32"/><path d="M12 10v20M17 10v20M22 10v20M27 10v20"/></svg>',
 bp:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 26h7l3-9 5 15 4-20 3 14h10"/></svg>'};
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Neuroscience therapeutics<span class="nomob"> · San Carlos, California</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Rethinking</span><span class="l">brain disease.</span><span class="l"><em>Think, again.</em></span></h1>'+
   '<i class="hrule" aria-hidden="true" data-r></i>'+
   '<div class="hero-foot"><p class="s" data-r>CuraSen develops first-in-class adrenergic medicines that restore the brain’s noradrenergic signal, the transmitter function that declines earliest in neurodegenerative disease.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/pipeline">Our pipeline '+ARR+'</a><a class="btn" href="#/science">The science</a></div></div>'+
   '<p class="lab hcap" data-r>A translucent model of the human brain.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Millions live with Parkinson’s, Alzheimer’s and related diseases, and most approved drugs act slowly, help modestly and leave many symptoms untreated. <em>We are restoring the signal the degenerating brain loses first.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">10–20</span><p class="k">mmHg higher standing systolic blood pressure on CuraAX vs. placebo, Phase 2a</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">3</span><p class="k">Clinical programmes, each charted at Phase 2a</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$54.5<small>M</small></span><p class="k">Series A, led by industry veterans, 2018</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div class="p1"><span class="pic">'+ICO.lc+'</span><span class="lab kick" data-r>An early loss</span><p data-r>Locus coeruleus decline drives the loss of noradrenergic signalling across the brain.</p></div>'+
    '<div class="p2"><span class="pic">'+ICO.rec+'</span><span class="lab kick" data-r>Direct activation</span><p data-r>Our compounds selectively activate key adrenoceptors, compensating for the lost stimulus.</p></div>'+
    '<div class="p3"><span class="pic">'+ICO.bp+'</span><span class="lab kick" data-r>Clinical proof</span><p data-r>CuraAX met its Phase 2a primary endpoint in neurogenic orthostatic hypotension.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Our approach</span><h2 class="d3">One small nucleus, <em>the whole brain.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Signal</span><span>Decline</span><span>Restore</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A signal from the brain stem.</h2><p>The locus coeruleus sends norepinephrine up through the limbic and cortical regions, activating higher brain functions and supporting the health of neurons, glia and vessels.</p></article>'+
     '<article class="step"><h2>The first to fade.</h2><p>In Alzheimer’s, Parkinson’s and related diseases, the locus coeruleus degenerates early. The signal erodes, and arousal, mood, memory and autonomic control decline with it.</p></article>'+
     '<article class="step"><h2>Restored at the receptor.</h2><p>CuraSen’s compounds directly and selectively activate adrenoceptors: β<sub>2</sub> in the brain, restoring the stimulus to the cells that depend on it, and α<sub>1A</sub> in the periphery, to hold blood pressure on standing.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="science" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Activating the brain’s own <em>homeostatic pathways.</em></h2></div><p data-r>CuraSen rethinks the prevailing dogma in brain disease. Instead of chasing protein pathology, we restore the key transmitter function that declines earliest: noradrenergic signalling, lost as the locus coeruleus deteriorates. Our focus is the β<sub>2</sub> and α<sub>1A</sub> adrenoceptors.</p></div>'+
   props()+
  '</div></section>'+

  '<section class="sec dark" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Three programmes, <em>all in Phase 2a.</em></h2></div><p data-r>CuraAX, an oral, selective α<sub>1A</sub> adrenoceptor partial agonist, is designed to prevent the drop in blood pressure on standing in nOH without spiking it when lying down. Two β<sub>2</sub> agonist combinations target cognition, mood and progression in neurodegenerative disease.</p></div>'+
   pipe()+
   '<div class="bk"><span class="lab kick" data-r>Backed by</span><p class="cr" data-r>'+lst(INVEST)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2 tmsec" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Drug hunters who have <em>done it before.</em></h2></div><p data-r>CuraSen’s team is deeply experienced in neuroscience, adrenergic pharmacology, chemistry and clinical development in psychiatric and neurodegenerative disease. Several of its founders built Afferent Pharmaceuticals, acquired by Merck in 2016.</p></div>'+
   team()+
   '<div class="bk"><span class="lab kick" data-r>Board of directors</span><p class="cr" data-r>'+lst(BOARD)+'</p></div>'+
   '<div class="bk bk2"><span class="lab kick" data-r>Scientific advisors</span><p class="cr" data-r>'+lst(SAB)+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From first patient <em>to primary endpoint.</em></h2></div><p data-r>CuraAX moved from its first Phase 1 subject in February 2025 to positive Phase 2a data in November 2026, presented as a late-breaker in San Diego. The planned Phase 2b dose range is 5–20 mg.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec dark2 cta" id="contact" data-theme="dark"><div class="wrap">'+
   '<span class="lab kick" data-r>Partners, investors and clinicians</span>'+
   '<h2 class="big split">Let’s help patients <em>think, again.</em></h2>'+
   '<p class="sub" data-r>Write to CuraSen about our programmes, partnering or careers, and the right person on the team will take the conversation from there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Write to CuraSen '+ARR+'</a><a class="btn" href="#/science">See the science</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Office</span><p data-r>CuraSen Therapeutics, Inc.<br>733 Industrial Road<br>San Carlos, CA 94070</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+16504752842">650-475-2842</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Location</span>733 Industrial Road<br>San Carlos, CA 94070</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL.replace("@","<wbr>@")+'</a><br><a class="ul" href="tel:+16504752842">650-475-2842</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Adrenergic medicines for<br>neurodegenerative disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 82" aria-hidden="true"><text x="320" y="68" text-anchor="middle" style="font-family:\'Work Sans\',system-ui,sans-serif;font-weight:400;font-size:88px;letter-spacing:-.02em"><tspan fill="#f2f5f9">CuraSen</tspan></text></svg>'+
  '<div class="legal"><span class="lab">© 2026 CuraSen Therapeutics, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"CuraSen Therapeutics — rethinking brain disease",x:"Home"};
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
