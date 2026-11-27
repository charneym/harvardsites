/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prods(){return '<ul class="pfr pipe np">'+PRODS.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><h3>'+esc(c[2])+'</h3><p>'+esc(c[3])+'</p><a class="lab lk ul" href="'+c[4]+'" target="_blank" rel="noopener">'+"Details"+' '+ARR+'</a></li>'}).join("")+'</ul>'}
function team(){return '<div class="engm"><span class="lab kick" data-r>Family-held since 1966</span><ul>'+TEAM.map(function(p){
    return '<li data-r><span class="nm">'+esc(p.name)+'</span><span class="lab rl">'+esc(p.title)+'</span></li>'}).join("")+'</ul>'+
    '<p class="offs" data-r>Industrial members of TWI, The Welding Institute, and of BINDT, the British Institute of Non-Destructive Testing.</p></div>'}
/* applications (ebpglobal.com > Applications: Aerospace; Instrumentation & Medical; Oil & Gas Subsea) */
function caps(){var C=[
  ["Aerospace","Critical rotating parts","Combustion chambers, blades and nozzle guide vanes, duct work, gear and shaft assemblies and bearing assemblies in dissimilar materials, plus component salvage and repair.",'<circle cx="28" cy="28" r="20"/><circle cx="28" cy="28" r="7"/><path class="a" d="M28 8V21M28 35V48M8 28H21M35 28H48"/><circle class="f" cx="28" cy="28" r="2"/>'],
  ["Instrumentation and medical","Sealed and precise","Pressure-sensitive devices, bellows and diaphragms, glass-to-metal feedthroughs, fabricated titanium sensor carriers, precision enclosures and replacement hip and elbow joints.",'<path d="M16 10H40V18H16Z"/><path d="M18 18V46H38V18"/><path class="a" d="M18 26H38M18 32H38M18 38H38"/><path d="M28 46V52"/>'],
  ["Oil and gas subsea","Built for pressure","Deep-section welds up to 20 mm in titanium and Inco 718, enclosures with heat-sensitive components inside, and “unmachinable” products fabricated from precision-machined parts.",'<path d="M12 14H44V42H12Z"/><path class="a" d="M12 28H44"/><circle class="f" cx="28" cy="28" r="2.2"/><path d="M20 42V50M36 42V50"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero blackband" id="hero" data-field data-theme="dark">'+
   '<div class="hero-ph"><figure data-r><img src="hero-cut.webp" width="1006" height="969" alt="A polished stainless vessel with welded branches and a flanged port, made by EBP" decoding="async" fetchpriority="high"></figure></div>'+
   '<span class="lab eyebrow" data-r>EBP Manufacturing Solutions<span class="nomob"> · Woking, since 1966</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l"><span class="nw">Making challenging</span></span> <span class="l"><span class="nw">products cost effective.</span></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Europe’s most experienced electron beam welding specialist, with X-ray and non-destructive testing, hard metal CNC machining and design for manufacture under one roof in Woking.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/services">Our services '+ARR+'</a><a class="btn" href="#/contact">Send us a drawing</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark redband" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Working with EBP</span>'+
   '<h2 class="txt" id="mani"><span class="nw">The cost of manufacture</span> <span class="nw">is largely fixed by the design.</span> <span class="nw">Send us the details,</span> <span class="nw">whether or not it includes</span> <span class="nw">EB welding.</span> <em><span class="nw">We work with you,</span> <span class="nw">not for you.</span></em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">&lt;5 %</span><p class="k">of the heat input of a comparable TIG weld, so finish-machined parts stay true</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">0.5 mm</span><p class="k">spot into which the beam focuses 4 kW, melting a deep, narrow keyhole</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50 %</span><p class="k">cost reduction on an Alloy 718 part through an EBP design for manufacture exercise</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story blackband" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How an EB weld is made</span><h2 class="d3"><span class="nw">Two finished parts,</span> <em class="nw">one weld.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Fit up</span><span>Weld</span><span>X-ray</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2><span class="nw">Fitted up</span> <span class="nw">in vacuum.</span></h2><p>Finish-machined parts are fitted together and the chamber is pumped down. The weld is made in vacuum, with no filler material, so it is clean and repeatable.</p></article>'+
     '<article class="step"><h2><span class="nw">Welded by</span> <span class="nw">the beam.</span></h2><p>The gun focuses 4 kW into a 0.5 mm spot. The metal melts to a vapour hole surrounded by liquid, and the weld runs at 1–2 metres a minute, deep and narrow.</p></article>'+
     '<article class="step"><h2><span class="nw">Proved</span> <span class="nw">by X-ray.</span></h2><p>The joint is radiographed in one of two in-house X-ray bays, with dye penetrant and leak testing where specified, under Nadcap welding and NDT accreditation.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="services" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Services</span><h2 class="d2 split"><span class="nw">Welded, tested</span> <em><span class="nw">and machined in-house.</span></em></h2></div><p data-r>Two ways to work with us: as an approved special process provider for EB, TIG and NDT, quoted within a few days of your file, or as a make complete partner for the whole product.</p></div>'+
   prods()+
  '</div></section>'+

  '<section class="sec light" id="applications" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Applications</span><h2 class="d2 split"><span class="nw">Where the weld</span> <em class="nw">has to be perfect.</em></h2></div><p data-r>Minimal distortion, dissimilar materials and exceptional repeatability make EB welding the answer for parts that conventional welding would ruin.</p></div>'+
   caps()+
   '<div class="qual"><span class="lab kick" data-r>Also for</span><p class="cr" data-r><span>Power transmission</span><span>Gear to shaft assemblies</span><span>Defence</span><span>Motorsport</span><span>Industrial</span><span>Salvage and repair</span><span>Additive manufacturing</span></p></div>'+
  '</div></section>'+

  '<section class="sec dark blackband" id="quality" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Quality</span><h2 class="d2 split"><span class="nw">Approved for</span> <em class="nw">critical parts.</em></h2></div><p data-r>High-tech OEMs require international and OEM-specific approvals. EBP holds them for welding, inspection and critical rotating parts, with staff approved to EN4179, ISO 9712, SNT-TC-1A and PCN.</p></div>'+
   '<div class="ev"><span class="lab kick" data-r>Approvals</span><dl>'+
    '<div data-r><dt class="lab">AS9100 Rev D</dt><dd>Aerospace quality management, with ISO 9001</dd></div>'+
    '<div data-r><dt class="lab">Nadcap welding</dt><dd>AC7110 accreditation for aerospace welding</dd></div>'+
    '<div data-r><dt class="lab">Nadcap NDT</dt><dd>Aerospace non-destructive testing accreditation</dd></div>'+
    '<div data-r><dt class="lab">ISO 14001</dt><dd>Environmental management, with Cyber Essentials</dd></div>'+
   '</dl></div>'+
   '<div class="bk"><span class="lab kick" data-r>Materials</span><p class="cr" data-r><span>Alloy 718</span><span>Alloy 625</span><span>C263</span><span>Ti 6Al-4V</span><span>Hastelloy</span><span>Haynes</span><span>Dissimilar pairs</span></p></div>'+
  '</div></section>'+

  '<section class="sec light" id="company" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Company</span><h2 class="d2 split"><span class="nw">Over fifty years</span> <em class="nw">of EB welding.</em></h2></div><p data-r>Customers asked EBP to supply the hardware as well as the weld, so the company grew from welding specialist into EBP Manufacturing Solutions: machining, design for manufacture and make complete work.</p></div>'+
   '<div class="engco">'+team()+
    '<div class="engpol"><span class="lab kick" data-r>Milestones</span><ul>'+
     '<li data-r><b class="yr">1966</b>Electron Beam Processes Ltd is incorporated on 2 February, in Surrey.</li>'+
     
     
     '<li data-r><b class="yr">2024</b>Nadcap aerospace welding certificate issued, audit 224008.</li>'+
     '<li data-r><b class="yr">2026</b>Nadcap aerospace non-destructive testing accreditation, audit 238952, and Cyber Essentials certification.</li>'+
     
     '<li data-r><b class="yr">2027</b><a class="ul" href="https://www.southern-manufacturing-electronics.com/exhibitors/electron-beam-processes-ltd-239372/" target="_blank" rel="noopener">Exhibiting at Southern Manufacturing &amp; Electronics</a>, Farnborough, 2–4 February, stand N275.</li>'+
     '<li data-r><b class="yr">3D printing</b>EB welding joins additive manufactured titanium bodies to parts turned from bar, beyond the build envelope of the printer.</li>'+
     '<li data-r><b class="yr">Today</b>Unit 4, Octimum, Woking: EB and TIG welding, two X-ray bays, a CMM-equipped inspection room and ten CNC machines.</li>'+
    '</ul></div></div>'+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Contact</span>'+
   '<h2 class="big split"><span class="nw">Ping us a file,</span> <em class="nw">we’ll respond in days.</em></h2>'+
   '<p class="sub" data-r>Tell us the specifications and quantities for a part that includes EB, TIG or NDT, or send the details of a product you want to take cost out of.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email your enquiry '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call 0844 241 4257</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r><span>Electron Beam Processes Ltd</span><br><span>Unit 4, Octimum, Forsyth Road</span><br><span>Woking, Surrey GU21 5SF, UK</span></p></div>'+
    '<div><span class="lab" data-r>Contact</span><p data-r><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><span>Phone <a class="ul" href="tel:'+TEL+'">'+TELT+'</a></span></p></div>'+
    '<div><span class="lab" data-r>Approvals</span><p data-r><span>AS9100 Rev D · ISO 9001</span><br><span>Nadcap welding and NDT</span></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr blackband" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>Electron Beam Processes Ltd<br>Unit 4, Octimum, Forsyth Road, Woking, Surrey GU21 5SF, UK</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:'+TEL+'">'+TELT+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/services">Services</a><br><a class="ul" href="#/applications">Applications</a><br><a class="ul" href="#/quality">Quality</a><br><a class="ul" href="#/company">Company</a></div>'+
   '<div class="c"><span class="lab">Services</span>Electron beam and TIG welding, X-ray and non-destructive testing, hard metal CNC machining, design for manufacture, total manufacture, assembly and test.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 900 62" aria-hidden="true"><text x="450" y="54" text-anchor="middle" style="font-family:\'Archivo\',system-ui,sans-serif;font-weight:600;font-size:64px;letter-spacing:.32em">EBP</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Electron Beam Processes Ltd · Company No. 00870286</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",story:"story",services:"services",applications:"applications",quality:"quality",company:"company",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"Electron Beam Processes — electron beam welding, NDT and hard metal machining, Woking, since 1966",x:"Home"};
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
