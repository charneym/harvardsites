/* ================= VIEWS (home only: Science / Pipeline / Team / News open build-out pages via _kit/lib/buildout.js; Contact and in-page CTAs scroll) ================= */
function progs(){return '<ul class="pfr">'+PROG.map(function(c){
  return '<li><span class="lab tg">'+esc(c[2])+'</span><div class="pn"><h3>'+esc(c[1])+'</h3><span class="loc">'+esc(c[0])+'</span></div><p>'+esc(c[3])+'</p><a class="lab ul lk" href="'+c[4]+'" target="_blank" rel="noopener">'+esc(c[5])+'</a></li>'}).join("")+'</ul>'}
function team(){return '<ul class="ptm">'+TEAM.map(function(p){
  return '<li><figure><img src="'+p[2]+'" alt="'+esc(p[0])+'" width="480" height="600" loading="lazy" decoding="async"></figure><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p>'+(p[3]?'<p class="af">'+esc(p[3])+'</p>':'')+'</li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Microneedle immunotherapy<span class="nomob"> · Cambridge, Massachusetts</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Immune balance,</span> <span class="l"><em>restored at</em></span> <span class="l"><em>the source.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Lybra Bio is developing a hydrogel microneedle patch that expands the skin’s own regulatory T cells, for alopecia areata, vitiligo and psoriasis. Built on research at Harvard and MIT.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">How it works '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
   '<p class="lab hcap" data-r>A hydrogel microneedle patch: illustrative render.</p>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<h2 class="txt" id="mani">Today’s treatments for autoimmune skin disease suppress the whole immune system and bring temporary relief. Lybra treats the skin itself, to <em>rebalance immunity, not shut it down.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$306K</span><p class="k">NIH NIAID SBIR Phase I award, September 2025</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">90%+</span><p class="k">Of alopecia areata patients have focal disease, which still has no FDA-approved treatment</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">&gt;80%</span><p class="k">Relapse rates seen after JAK inhibitor therapy is stopped</p></div>'+
   '</div>'+
   '<div class="plat">'+
    '<div><span class="lab kick" data-r>Harvard and MIT roots</span><p data-r>Lybra’s therapeutic platform was developed at Harvard and MIT, in the labs of its academic co-founders.</p></div>'+
    '<div><span class="lab kick" data-r>Local, not systemic</span><p data-r>Therapy goes directly to the affected skin, with minimal systemic exposure and without injections.</p></div>'+
    '<div><span class="lab kick" data-r>At LabCentral</span><p data-r>A 2024 LabCentral Ignite Golden Ticket winner, now working from LabCentral in Kendall Square.</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">The science</span><h2 class="d3"><span class="nw">Back in balance,</span> <em class="nw">from the skin.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Imbalance</span><span>Delivery</span><span>Balance</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>The skin <span class="nw">loses its brakes.</span></h2><p>Regulatory T cells keep the immune system tolerant. In alopecia areata the skin is depleted of them, and effector T cells inflame the hair follicles until the hair falls out.</p></article>'+
     '<article class="step"><h2>A patch <span class="nw">delivers the signal.</span></h2><p>The LybraPatch’s hydrogel microneedles, made of hyaluronic acid, enter the skin and swell, releasing two cytokines, IL-2 and CCL22, right where the disease is.</p></article>'+
     '<article class="step"><h2><span class="nw">Tregs return,</span> <span class="nw">and so does the hair.</span></h2><p>Regulatory T cells gather and expand at the site and inflammation falls. In mouse models hair regrew and stayed for weeks after treatment ended, with no systemic immunosuppression.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">One patch, <em class="nw">three diseases.</em></h2></div><p data-r>Lybra’s first indication is alopecia areata, and the same Treg-based approach is aimed at vitiligo and psoriasis. All programs are preclinical.</p></div>'+
   progs()+
   '<div class="bk"><span class="lab kick" data-r>Supported by</span><p class="cr" data-r>'+PARTNERS.map(function(b){return '<span>'+esc(b)+'</span>'}).join('<i aria-hidden="true">·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split"><span class="nw">Who builds</span> <em class="nw">the patch.</em></h2></div><p data-r>Lybra was founded by Núria Puigmal with academic co-founders Natalie Artzi and Jamil R. Azzi of Harvard Medical School, and is led by CEO Michael Schrader.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the lab <em class="nw">to LabCentral.</em></h2></div><p data-r>Recent milestones, from the published research behind the patch to an NIH award to take it toward the clinic.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Patients, partners and investors</span>'+
   '<h2 class="big split">Bring tolerance back <em>to the skin.</em></h2>'+
   '<p class="sub" data-r>Lybra Bio works from LabCentral in Cambridge, Massachusetts. To talk about the platform, a partnership or an investment, send us a note.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+FORM+'" target="_blank" rel="noopener">Write to us '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Headquarters</span><p data-r>Lybra Bio<br>LabCentral, 700 Main Street<br>Cambridge, MA 02139</p><a class="ul lk" href="'+MAP+'" target="_blank" rel="noopener" data-r>Map</a></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a></p></div>'+
    '<div><span class="lab" data-r>Origins</span><p data-r>Research from Harvard and MIT<br>Founded in 2024</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>LabCentral, 700 Main Street<br>Cambridge, Massachusetts 02139</div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+FORM+'" target="_blank" rel="noopener">Contact form</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Regulatory T cell therapies<br>for autoimmune skin disease</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 74" aria-hidden="true"><text x="320" y="60" text-anchor="middle" style="font-family:\'Montserrat\',system-ui,sans-serif;font-weight:700;font-size:78px;letter-spacing:-.01em">Lybra Bio</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Lybra Bio</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section ================= */
var SECS={about:"about",science:"story",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Lybra Bio — microneedle immunotherapy for autoimmune skin disease, Cambridge",x:"Home"};
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
