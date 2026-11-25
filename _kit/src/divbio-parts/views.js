/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function prodRows(list){return '<ul class="pfr pipe">'+list.map(function(c){
  return '<li><span class="lab tg"><b>'+esc(c[0])+'</b><i>'+esc(c[1])+'</i></span><div class="pgm"><h3>'+esc(c[2])+'</h3><span class="loc">'+esc(c[3])+'</span></div>'+
   '<p>'+esc(c[4])+'</p><span class="lab lk av"><a class="ul" href="'+c[5]+'" target="_blank" rel="noopener">'+esc(c[6])+' '+ARR+'</a></span></li>'}).join("")+'</ul>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Sustainably sourced","Sugarcane, not petroleum","Planet-Safe® is made from polylactic acid, a bio-resin from Bonsucro-certified sugarcane, supplied by TotalEnergies Corbion. Its cradle-to-gate carbon emissions are 90% lower, largely thanks to the CO₂ the cane absorbs as it grows.",'<path d="M28 52V10"/><path d="M24 22h8M24 34h8M24 46h8"/><path class="a" d="M28 18c-8-6-16-6-20-2M28 28c8-7 16-7 21-3M28 40c-7-5-14-5-18-1"/>'],
  ["Outstanding cell binding","No coating needed","The PLA surface binds cells without additional surface coatings: on average 42% more cells than a typical TC-treated surface 24 hours after seeding, with indistinguishable growth rate and morphology across adherent and suspension lines.",'<ellipse cx="28" cy="30" rx="22" ry="10"/><path d="M6 30v6c0 5.5 9.8 10 22 10s22-4.5 22-10v-6"/><circle class="f" cx="20" cy="29" r="2.2"/><circle class="f" cx="29" cy="26" r="2.2"/><circle class="f" cx="36" cy="31" r="2.2"/><circle class="f" cx="27" cy="33" r="2.2"/>'],
  ["Commercially compostable","Certified end of life","ASTM D6400 certified to compost fully in an industrial facility and ASTM D6002 certified non-phytotoxic once composted. When lab waste must be incinerated, Planet-Safe® releases no harmful compounds.",'<path d="M8 46c6-12 14-16 20-16s14 4 20 16z"/><path class="a" d="M28 30V16"/><path class="a" d="M28 22c-4-6-10-7-14-5 2 5 8 7 14 5zM28 19c3-6 9-8 14-6-2 5-8 8-14 6z"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[3]+'</svg><span class="lab" data-r>'+esc(c[0])+'</span><h3 data-r>'+esc(c[1])+'</h3><p data-r>'+esc(c[2])+'</p></div>'}).join("")+'</div>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Dedham, Massachusetts<span class="nomob"> · Since 1984</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Cell culture,</span><span class="l">grown from</span><span class="l"><em>sugarcane.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Diversified Biotech designs and makes the everyday tools of the life science lab, from Cryo-Tags® labels to benchtop sample cooling. Planet-Safe® is its 100% plant-based labware: commercially compostable, petroleum-free cell cultureware.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/planetsafe">How Planet-Safe® works '+ARR+'</a><a class="btn" href="#/products">Products</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Since 1984</span>'+
   '<h2 class="txt" id="mani">Diversified Biotech designs, manufactures and markets unique products that help the laboratory technician and researcher streamline everyday tasks, <em>and now makes cell cultureware from plants instead of petroleum.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1984</span><p class="k">Developing and manufacturing research products in Dedham, Massachusetts</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">83%</span><p class="k">Lower carbon footprint than polystyrene for Planet-Safe® labware</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">42%</span><p class="k">More cells on average than a typical TC-treated surface, 24 hours after seeding</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">Planet-Safe® · Sustainable labware</span><h2 class="d3">From the field, <em>to the bench, to compost.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Source</span><span>Culture</span><span>Return</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Grown, not drilled.</h2><p>Planet-Safe® starts as Bonsucro-certified sugarcane. Starch extracted from the cane becomes polylactic acid (PLA), a bio-resin supplied by TotalEnergies Corbion, in place of petroleum-based polystyrene.</p></article>'+
     '<article class="step"><h2>Clear labware cells bind to.</h2><p>Clear, temperature-resistant PLA is made into culture dishes and microplates. Without any added coating, the surface holds on average 42% more cells than a typical TC-treated surface after 24 hours.</p></article>'+
     '<article class="step"><h2>Back to compost.</h2><p>Planet-Safe® is ASTM D6400 certified to compost in an industrial facility: culture dishes reach full disintegration before day 84, and the compost is certified non-phytotoxic (ASTM D6002).</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="advantages" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Sustainability</span><h2 class="d2 split">The Planet-Safe® <em>advantage.</em></h2></div><p data-r>A 100% plant-based alternative to petroleum-based labware, made from sustainably and ethically produced sugarcane, and a practical way for labs to cut Scope 3 emissions.</p></div>'+
   caps()+
   '<div class="bk"><span class="lab kick" data-r>Certified and recognised</span><p class="cr" data-r>'+CREDITS.map(function(p){return '<span>'+esc(p)+'</span>'}).join('<i>·</i>')+'</p></div>'+
  '</div></section>'+

  '<section class="sec dark2" id="products" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Products</span><h2 class="d2 split">Made for <em>everyday lab work.</em></h2></div><p data-r>Diversified Biotech specialises in cryogenic and freezer labels for long-term storage, with solutions for microplates, pipetting, liquid handling and benchtop sample cooling, and the Planet-Safe® line.</p></div>'+
   prodRows(PROD)+
  '</div></section>'+

  '<section class="sec light" id="news" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">Latest from <em>Diversified Biotech.</em></h2></div><p data-r>Trade fairs, certifications and awards for Planet-Safe®, the plant-based labware line.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Researchers, labs and distributors</span>'+
   '<h2 class="big split">Talk to <em>Diversified Biotech.</em></h2>'+
   '<p class="sub" data-r>We value your comments. Get in touch with questions about our labels, cooling and liquid handling products, or a Planet-Safe® sample.</p>'+
   '<div class="act" data-r><a class="btn solid" href="'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="#/products">See the products</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Address</span><p data-r>Diversified Biotech, Inc.<br>65 Commerce Way<br>Dedham, MA 02026</p></div>'+
    '<div><span class="lab" data-r>Email</span><p data-r><a class="ul" href="'+MAIL+'">info@divbio.com</a></p></div>'+
    '<div><span class="lab" data-r>Phone</span><p data-r><a class="ul" href="tel:+18007969199">800-796-9199</a><br>Fax 781-326-5611</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Address</span>65 Commerce Way<br>Dedham, MA 02026<br>United States</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="'+MAIL+'">info@divbio.com</a><br><a class="ul" href="tel:+18007969199">800-796-9199</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/planetsafe">Planet-Safe®</a><br><a class="ul" href="#/products">Products</a><br><a class="ul" href="#/sustainability">Sustainability</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Product lines</span>Labels · Planet-Safe® · Sample cooling · Liquid handling · Tissue culture</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 66" aria-hidden="true"><text x="380" y="58" text-anchor="middle" style="font-family:\'Barlow Semi Condensed\',sans-serif;font-weight:400;font-size:74px">Diversified Biotech</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Diversified Biotech, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",planetsafe:"story",sustainability:"advantages",products:"products",news:"news",contact:"contact"};
