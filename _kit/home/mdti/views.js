/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b></span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p><a class="lab lk ul" href="'+c[3]+'" target="_blank" rel="noopener">Details '+ARR+'</a></li>'}).join("")+'</ul>'}
/* how MDTi works (mdti.co.uk > About, Strategic Partners, the NQA certificate and the product news pages), each with a small line icon */
function caps(){var C=[
  ["Clinician-led","Ideas from the NHS","The ideas behind MDTi’s products have predominantly come from NHS clinicians and their organisations: a nurse consultant, a hospital doctor, a nursing practitioner.",'<circle cx="28" cy="22" r="12"/><path d="M22 36H34V42H22Z"/><path class="a" d="M28 4V8M12 10L15 13M44 10L41 13M24 22L28 18L32 22"/><path d="M24 46H32"/>'],
  ["Protect","Intellectual property","An idea that is the result of years of research and hard work needs to be protected and effectively exploited, so that its full benefits reach those who contributed.",'<path d="M28 6L46 13V27C46 38 38 45 28 50C18 45 10 38 10 27V13Z"/><path class="a" d="M19 28L25 34L37 21"/>'],
  ["Invest","Direct investment","MDTi takes on the responsibility of commercialising intellectual property and getting product to market by directly investing, manufacturing and marketing.",'<path d="M8 46H48"/><path d="M14 46V34H22V46M26 46V26H34V46M38 46V16H46V46"/><path class="a" d="M10 26L22 16L30 20L44 8M38 8H44V14"/>'],
  ["Make","ISO 13485","A quality management system for medical devices certified by NQA under UKAS accreditation, with Molymer Moulding Services, part of the Nippon Molymer group, as strategic manufacturing partner.",'<path d="M8 16H48V26H8ZM8 30H48V40H8Z"/><path class="a" d="M20 21H36M20 35H36"/><path d="M28 40V48M20 48H36"/>'],
  ["Deliver","On time, to regulation","MDTi’s personnel, expertise and understanding of the market and the regulatory environments ensure that products are delivered in a timely manner.",'<path d="M6 18H34V40H6Z"/><path d="M34 26H44L50 32V40H34"/><circle class="a" cx="16" cy="42" r="4"/><circle class="a" cx="42" cy="42" r="4"/>'],
  ["Return","Shared benefit","Improved patient care in a cost-effective manner, while generating a financial return for both the clinician and their organisation.",'<path d="M10 28A18 18 0 0 1 44 20"/><path d="M46 28A18 18 0 0 1 12 36"/><path class="a" d="M38 14L44 20L48 13M18 42L12 36L8 43"/>']];
  return '<div class="caps six">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
var NEWS=[
 ["Oct 2021","Top placer and runner-up at the International Trade Council’s Go Global Awards","mdti.co.uk","https://www.mdti.co.uk/news/corporate-news/"],
 ["Apr 2021","MDTi’s CEO, Martin Levermore, appointed as the new Windrush independent adviser","gov.uk","https://www.gov.uk/government/news/martin-levermore-appointed-as-new-windrush-independent-adviser"],
 ["Aug 2020","West Midlands Health Technology Cluster takes its next step, with MDTi’s CEO as a director","gbslep.co.uk","https://gbslep.co.uk/news-and-events/news/west-midlands-health-technology-cluster-takes-next-step-towards-realisation"],
 ["Ortho-Glide","Ten Ortho-Glide donated to the Swindon Therapy MS and Neuro Therapy Centre","mdti.co.uk","https://www.mdti.co.uk/news/orthoglide-news/"],
 ["Femmax","Sponsoring Greater Manchester Cancer’s Gynaecology Late Effects of Pelvic Treatment event","mdti.co.uk","https://www.mdti.co.uk/news/femmax-news/"]];
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></a></li>'}).join("")+'</ul>'}
/* the company in six facts (Companies House, the NQA certificate, mdti.co.uk > Strategic Partners and Corporate News, Medilink Midlands) */
function hist(){var H=[
  ["WV1","Registered office at the Kace Building, Victoria Passage, Wolverhampton; company 04383577 in England and Wales."],
  ["UKAS","Its ISO 13485 certificate for medical devices is issued by NQA under UKAS accreditation."],
  ["Partners","NHS Supply Chain, Molymer Moulding Services of the Nippon Molymer group, and Medilink UK."],
  ["Medilink","A member of Medilink Midlands, the region’s health technology business network."],
  ["2021","Top placer and runner-up at the International Trade Council’s Go Global Awards."],
  ["CEO","Professor Martin Levermore MBE DL: a director of the West Midlands Health Technology Cluster and a Senior Associate of the Royal Society of Medicine."]];
  return '<ol class="hst">'+H.map(function(h){return '<li><span class="yr">'+h[0]+'</span><p>'+esc(h[1])+'</p></li>'}).join("")+'</ol>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Innovation · Investment · Improvement<span class="nomob"> · Wolverhampton</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Clinicians’ ideas,</span> <span class="l">brought to <em>patients.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>MDTi develops, manufactures and markets medical devices whose ideas have come from NHS clinicians and their organisations: simple products that benefit patients and practitioners alike.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/products">See the products '+ARR+'</a><a class="btn" href="#/contact">Get in touch</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>About MDTi</span>'+
   '<h2 class="txt" id="mani"><span class="nw">“MDTi is about being able</span> <span class="nw">to make things happen…</span> <em><span class="nw">good things that are</span> <span class="nw">not complicated</span></em> <span class="nw">but provide benefit</span> <span class="nw">to patients</span> <span class="nw">and practitioners alike.”</span></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">2003</span><p class="k">Medical Devices Technology International Ltd, registered under that name since October 2003</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">13485</span><p class="k">ISO 13485: the quality management system for medical devices, certified by NQA</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">6</span><p class="k">product ranges, from rehabilitation and treatment to women’s and men’s health</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Ortho-Glide · From idea to patient</span><h2 class="d3"><span class="nw">Every device</span> <em><span class="nw">begins as an idea.</span></em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Idea</span><span>Make</span><span>Market</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Idea.</h2><p>The Ortho-Glide lower limb exerciser was designed by a patient, for physiotherapists and patients undertaking lower leg rehabilitation. Most MDTi devices begin the same way, as an idea from someone who knows the need first-hand.</p></article>'+
     '<article class="step"><h2>Make.</h2><p>MDTi takes on the responsibility of commercialising the idea: it invests directly, protects the intellectual property and manufactures under an ISO 13485 quality system, with Molymer Moulding Services as strategic manufacturing partner.</p></article>'+
     '<article class="step"><h2>Market.</h2><p>The finished device goes to market: to hospitals through the NHS Supply Chain catalogue and distributors, and to patients at home through Amazon, eBay and MDTi’s own checkout.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="approach" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Approach</span><h2 class="d2 split"><span class="nw">From a clinician’s idea</span> <em><span class="nw">to the market.</span></em></h2></div><p data-r>MDTi works closely alongside healthcare professionals and their establishments, providing a complete business solution for ideas that can be readily translated into practical, commercial products.</p></div>'+
   caps()+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split"><span class="nw">Simple devices</span> <em><span class="nw">for real clinical needs.</span></em></h2></div><p data-r>Rehabilitation, general treatment, female and male health: six ranges, most of them sold under the MYAID name.</p></div>'+
   prods()+
   '<div class="bk"><span class="lab kick" data-r>Available through</span><p class="cr" data-r><span>NHS Supply Chain</span><span>Distributors</span><span>Amazon UK and USA</span><span>eBay</span><span>MDTi’s own checkout</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Made to happen</span> <em><span class="nw">in the West Midlands.</span></em></h2></div><p data-r>Medical Devices Technology International Ltd is based in Wolverhampton, led by its CEO, Professor Martin Levermore MBE DL, and works with partners across the NHS and the health technology sector.</p></div>'+
   hist()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split"><span class="nw">From the company</span> <em><span class="nw">and its products.</span></em></h2></div><p data-r>Awards, appointments and the people using MDTi devices, from the corporate and product news on mdti.co.uk.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Have an idea</span> <em><span class="nw">worth making?</span></em></h2>'+
   '<p class="sub" data-r>Clinicians with an invention, distributors and healthcare buyers: talk to the MDTi team in Wolverhampton.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">Registered office</span><p>Kace Building<br>Victoria Passage<br>Wolverhampton WV1 4LG</p></div>'+
    '<div><span class="lab">Contact</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br>Telephone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></p></div>'+
    '<div><span class="lab">Distributors</span><p>Interested in distributing MDTi products? Ask the team about becoming a distributor.</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Registered office</span>Kace Building, Victoria Passage<br>Wolverhampton WV1 4LG</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/company">Company</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Products</span>Ortho-Glide, RhinoPinch, Hook-It, Uflow, Femmax and Femmeze</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="52" text-anchor="middle" style="font-family:\'Source Serif 4\',Georgia,serif;font-weight:400;font-size:60px;letter-spacing:.14em">MDTi</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Medical Devices Technology International Ltd</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",approach:"approach",products:"products",company:"company",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"MDTi — Medical devices invented by NHS clinicians, from Wolverhampton",x:"Home"};
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
