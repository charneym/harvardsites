/* ================= VIEWS (home-only: every nav item scrolls to its section on #/) ================= */
var SHEETS=[];
function toLink(id,lab,cls){return '<a class="'+(cls||"btn")+'" href="#/" data-to="'+id+'">'+lab+'</a>'}
function people(){return '<div class="mh"><div class="mh-group"><p class="mh-label">Founders and leadership</p><ul class="mh-list">'+PEOPLE.map(function(p){return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span class="mh-arrow" aria-hidden="true"></span></div></li>'}).join("")+'</ul></div></div>'}
function prog(){return '<ul class="pf lp">'+PROG.map(function(c){return '<li><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><p><span class="lab" style="display:block">'+esc(c[2])+'</span><span class="lab" style="display:block;opacity:.85">'+esc(c[3])+'</span></p><div class="w"><a class="ul" href="'+c[4]+'" target="_blank" rel="noopener">NIH record '+ARR+'</a></div></li>'}).join("")+'</ul>'}
function sci(){return '<dl class="facts">'+
    '<div><dt class="lab">The discovery</dt><dd>The Vinetz laboratory at Yale found that leptospiral Virulence Modifying (VM) proteins act as cytotoxins: circulating exotoxins at the centre of how the disease does harm.</dd></div>'+
    '<div><dt class="lab">The platform</dt><dd>Luna identifies its candidates with a platform that exploits microbial genomics, which yields diverse targets for vaccines, diagnostics and therapeutics.</dd></div>'+
    '<div><dt class="lab">The evidence</dt><dd>In published animal data, as few as two recombinant VM proteins gave robust cross-serovar protection from lethal <i>L. interrogans</i> challenge in mice.</dd></div>'+
    '<div><dt class="lab">The path</dt><dd>Animal health first: a VM protein vaccine for dogs, with revenue from animal health markets helping to fund vaccines and tests for people.</dd></div>'+
   '</dl>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Yale spin-out · New Haven, Connecticut<span class="nomob"> · Infectious disease</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Protection from</span><span class="l"><em>leptospirosis.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Luna Bioscience turns microbial genomics into vaccines and rapid tests for infectious disease, beginning with leptospirosis, for human and animal health.</p>'+
   '<div class="act" data-r>'+toLink("technology",'Our science '+ARR,"btn solid")+toLink("pipeline","The pipeline")+'</div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Why it matters</span>'+
   '<p class="txt" id="mani">Leptospirosis strikes more than a million people a year, with a case fatality rate as high as twenty percent. There is no safe, effective human vaccine and no accurate, actionable test. <em>Luna is building both.</em></p></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1M<sup>+</sup></span><span class="k">People affected by leptospirosis each year, by conservative estimate</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5–20%</span><span class="k">Estimated case fatality rate of the disease</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">4</span><span class="k">NIH-funded STTR projects since 2023, from the NIAID</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">One toxin, <em>two answers.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Pathogen</span><span>Toxin</span><span>Vaccine</span><span>Test</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>A neglected bacterial disease.</h2><p>Leptospirosis is caused by <i>Leptospira</i>, spiral bacteria carried by animals. Its first sign, an undifferentiated fever, is easily missed, and severe cases bring shock, haemorrhage and kidney failure.</p></article>'+
     '<article class="step"><h2>The VM proteins.</h2><p>The bacteria release Virulence Modifying proteins into the blood. Discovered as cytotoxins in the Vinetz laboratory at Yale, they attack host cells and drive the disease.</p></article>'+
     '<article class="step"><h2>A vaccine against the toxin.</h2><p>Luna’s vaccine uses recombinant VM proteins so the body makes antibodies that block them. In mice, as few as two VM proteins protected across serovars.</p></article>'+
     '<article class="step"><h2>A test for the first days.</h2><p>The same proteins power rapid tests. In preliminary data, Luna’s VM protein ELISA identified acute infection better than culture, the standard agglutination test and PCR.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="technology" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Technology</span><h2 class="d2 split">From genome to <em>product.</em></h2></div><p data-r>A spin-out from the Vinetz laboratory at Yale, Luna translates microbial genomics into products for infectious disease, starting with the leptospiral VM proteins.</p></div>'+
   sci()+
  '</div></section>'+

  '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Four programs, <em>one target.</em></h2></div><p data-r>A vaccine and the tools to prove it works, alongside rapid tests for referral laboratories and the point of care. Each is supported by the National Institute of Allergy and Infectious Diseases.</p></div>'+
   prog()+
  '</div></section>'+

  '<section class="sec dark" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Built on <em>Yale science.</em></h2></div><p data-r>A company founded to carry a Yale discovery out of the laboratory, toward vaccines and tests for people and their animals.</p></div>'+
   people()+
  '</div></section>'+

  '<section class="sec dark2" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">Latest news</h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For partners, collaborators and investors</span>'+
   '<h2 class="big split">Work with <em>Luna.</em></h2>'+
   '<p class="sub" data-r>Working on leptospirosis, animal health or infectious disease diagnostics, or interested in what we are building? We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email us '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="caddr"><div data-r><span class="lab">Office</span><p>101 College Street, Second Floor<br>New Haven, CT 06510</p></div><div data-r><span class="lab">Telephone</span><p><a class="ul" href="tel:+19175457262">'+TEL+'</a></p></div></div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>101 College Street, Second Floor<br>New Haven, CT 06510</div>'+
   '<div class="c"><span class="lab">Focus</span>Leptospirosis vaccines<br>Rapid diagnostics</div>'+
   '<div class="c"><span class="lab">Explore</span>'+toLink("technology","Technology","ul")+'<br>'+toLink("pipeline","Pipeline","ul")+'<br>'+toLink("team","Team","ul")+'<br>'+toLink("news","News","ul")+'</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="tel:+19175457262">'+TEL+'</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 44" aria-hidden="true"><text x="260" y="36" text-anchor="middle" style="font-family:Newsreader,Georgia,serif;font-weight:300;font-size:46px;letter-spacing:.02em">Luna Bioscience</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Luna Bioscience, Inc.</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
/* nav items scroll to their section on the one page (capture phase, ahead of the router's own link handler) */
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-to]");if(!a)return;
  e.preventDefault();e.stopImmediatePropagation();
  var go2=function(){var t=document.getElementById(a.getAttribute("data-to"));if(!t)return;
    if(lenis)lenis.scrollTo(t,{duration:1.5,force:true});else t.scrollIntoView({behavior:RM?"auto":"smooth"})};
  if(document.body.classList.contains("menu-open")){closeMenu();setTimeout(go2,380)}else go2()},true);
function route(h){return {k:"home",v:vHome,t:"Luna Bioscience — Vaccines and rapid tests for leptospirosis",x:"Home"}}