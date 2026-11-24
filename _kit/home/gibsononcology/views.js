/* ================= VIEWS: the full site. Home, Science, Pipeline, Partners, Team, Investors, News, Contact, each a real route
   through the template's own router (route wipe with the page name, sub-page heads over the ghosted hero render: DT/DK).
   Component classes carry a g- prefix so none collides with a template rule (DM). ================= */
var ARRS='<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
function img(src,alt,w,h,cls){return '<img'+(cls?' class="'+cls+'"':'')+' src="'+IMG+src+'" alt="'+esc(alt)+'" width="'+w+'" height="'+h+'" loading="lazy" decoding="async">'}
function more(href,t){return '<a class="g-more" href="'+href+'">'+esc(t)+' '+ARRS+'</a>'}
/* the four partner marks, one tone, matched optical size (BW) */
function plogo(p){return '<img class="g-logo '+p.lh+'" src="'+IMG+p.logo+'" width="'+p.lw+'" height="'+p.lhh+'" alt="'+esc(p.inst)+' logo" decoding="async">'}
function heroMarks(){return '<div class="g-hm" data-r><span class="lab g-hm-l">Advancing Gibson’s drugs with their own resources</span><ul class="g-hm-row">'+
  PARTNERS.map(function(p){return '<li>'+plogo(p)+'</li>'}).join("")+'</ul></div>'}

/* (a) two commercially validated targets: the statement section */
function targets(){return '<section class="sec dark g-tt" id="targets" data-theme="dark"><div class="wrap">'+
  '<span class="lab kick">Two commercially validated targets</span>'+
  '<div class="g-tt-row">'+
   '<div class="g-tt-c"><h2 class="g-tt-w">TOPO 1</h2><span class="lab g-tt-l">Topoisomerase I</span><p>The enzyme that cuts DNA so it can unwind. Gibson’s drugs trap it on the cut, so the break cannot be resealed.</p></div>'+
   '<div class="g-tt-x" aria-hidden="true"><i></i><b>+</b><i></i></div>'+
   '<div class="g-tt-c"><h2 class="g-tt-w">cMYC</h2><span class="lab g-tt-l">The largest human oncogene</span><p>Overexpressed, it drives cancer. Gibson’s drugs reduce that overexpression, a target that resisted drugs for decades.</p></div>'+
  '</div>'+
  '<div class="g-tt-foot">'+
   '<div class="g-tt-80"><span class="g-tt-n">80%</span><p>of all human cancers are driven by cMYC, approximately.</p></div>'+
   '<div class="g-tt-one"><h3>One molecule hits both.</h3><ul><li><b>LMP744</b><span>Intravenous</span></li><li><b>LMP400</b><span>Oral and intravenous</span></li><li><b>Azas</b><span>Next generation, 700+ compounds</span></li></ul></div>'+
  '</div></div></section>'}

/* (b) proof of value: the four partners */
function partnerRows(full){return '<ol class="g-pt">'+PARTNERS.map(function(p){
  return '<li class="g-pt-r"><div class="g-pt-lg">'+plogo(p)+'</div>'+
   '<div class="g-pt-who"><h3>'+esc(p.inst)+'</h3><p class="g-pt-u">'+esc(p.unit)+'</p><p class="g-pt-pi">'+esc(p.pi)+'</p><span class="lab g-pt-d"><b>'+esc(p.drug)+'</b><i>'+esc(p.stage)+'</i></span></div>'+
   '<div class="g-pt-res"><span class="g-pt-big">'+esc(p.big)+'</span><p>'+esc(p.res)+'</p>'+(full?'<p class="g-pt-more">'+esc(p.more)+'</p>':'')+'</div></li>'}).join("")+'</ol>'+
  '<p class="note-s g-pt-note">All animal results are preclinical, in patient-derived xenograft (PDX) models. Licensing or acquisition is targeted on completion of Phase 2 human trials, three to four years out.</p>'}
function partnersSec(){return '<section class="sec g-deep" id="partners" data-theme="dark"><div class="wrap">'+
  '<div class="shead"><div><span class="lab kick">Proof of value</span><h2 class="d2 g-wide">Premier institutions chose to put <em>their own resources</em> behind Gibson’s drugs.</h2></div>'+
  '<p>They see a great many candidate cancer drugs. NIH, Mayo Clinic, Duke and Children’s National are each advancing LMP744 or LMP400 with their own investigators and resources.</p></div>'+
  partnerRows(false)+'<div class="g-act">'+more("#/partners","Partners and collaborators")+'</div></div></section>'}

/* letters of support: editorial pull quotes */
function letter(L,big,two){return '<figure class="g-q'+(big?' big':'')+'"><span class="g-qm" aria-hidden="true">“</span><blockquote>'+L.q.map(function(t){return '<p>'+esc(t)+'</p>'}).join("")+(two?'<p>'+esc(L.q2)+'</p>':'')+'</blockquote>'+
  '<figcaption><b>'+esc(L.name)+'</b><span>'+esc(L.title)+'</span><time>'+esc(L.date)+'</time></figcaption></figure>'}
function letters(full){return '<section class="sec light g-lt" id="letters" data-theme="light"><div class="wrap">'+
  '<div class="shead"><div><span class="lab kick">Letters of support</span><h2 class="d2">In their <em>own words.</em></h2></div><p>Excerpts from letters written to Gibson in September 2026 by the investigators studying its drugs.</p></div>'+
  letter(LETTERS[0],true,full)+'<div class="g-q2">'+letter(LETTERS[1],false,full)+letter(LETTERS[2],false,full)+'</div></div></section>'}

/* a full-bleed photograph, graded to the palette, with its own copy */
function band(o){return '<section class="g-band '+(o.cls||"")+'" data-theme="dark"><div class="g-band-m" aria-hidden="true">'+img(o.img,"",o.w,o.h)+'</div>'+
  '<div class="g-band-in"><span class="lab kick">'+o.k+'</span><h2 class="d2">'+o.h+'</h2>'+(o.p?'<p class="g-band-p">'+o.p+'</p>':'')+(o.stats?'<dl class="g-band-s">'+o.stats.map(function(s){return '<div><dt>'+esc(s[0])+'</dt><dd>'+esc(s[1])+'</dd></div>'}).join("")+'</dl>':'')+(o.src?'<p class="g-src">'+o.src+'</p>':'')+'</div></section>'}
function needBand(){return band({img:"band-brain.webp",w:2000,h:1500,k:"Glioblastoma",h:"It comes back in <em>nearly all patients.</em>",
  stats:[["3.27","U.S. cases per 100,000, age-adjusted"],["66","Median age at diagnosis"],["6–10 mo","Typical median survival once it recurs"]],src:"CBTRUS 2025; Penn Medicine, June 2025."})}

/* pipeline chart: stage bars across four phases */
function pipe(full){return '<div class="g-pipe"><div class="g-pipe-hd" aria-hidden="true"><span class="lab">Programme</span><div class="g-pipe-st">'+STAGES.map(function(s){return '<span class="lab">'+s+'</span>'}).join("")+'</div></div>'+
  PIPE.map(function(r){return '<div class="g-pr"><div class="g-pr-n"><h3>'+esc(r.drug)+'</h3><span class="lab">'+esc(r.route)+'</span></div>'+
   '<div class="g-pr-b"><p class="g-pr-i">'+esc(r.ind)+'</p><div class="g-bar" style="--r:'+r.reach+'" role="img" aria-label="'+esc(r.drug)+': '+esc(r.live)+'"><span class="g-bar-t"></span><span class="g-bar-f"></span><span class="lab g-bar-l">'+esc(r.live)+'</span></div>'+
   '<p class="g-pr-w">'+esc(r.who)+'</p>'+(full?'<p class="g-pr-x">'+esc(r.txt)+'</p>':'')+'</div></div>'}).join("")+'</div>'}
function pipeSec(){return '<section class="sec dark2" id="pipeline" data-theme="dark"><div class="wrap">'+
  '<div class="shead"><div><span class="lab kick">Pipeline</span><h2 class="d2">Brain tumours first, <em>then wider.</em></h2></div><p>Three drugs from one class. LMP744 is in Phase 2 at the NIH, LMP400 has finished Phase 1 and is headed for Phase 2 with Duke, and the Azas follow.</p></div>'+
  pipe(false)+'<div class="g-act">'+more("#/pipeline","The full pipeline")+'</div></div></section>'}

/* designations and IP, beside the multi-well plate photograph */
function desig(){return '<dl class="g-ds">'+DESIG.map(function(d){return '<div><dt>'+esc(d[0])+'</dt><dd>'+esc(d[1])+'</dd></div>'}).join("")+'</dl>'}
function desigSec(){return '<section class="sec light g-split" id="designations" data-theme="light"><div class="wrap g-split-in">'+
  '<figure class="g-split-m">'+img("plate.webp","DNA samples in a multi-well plate in a research laboratory",2000,1500)+'</figure>'+
  '<div class="g-split-t"><span class="lab kick">Designations and protection</span><h2 class="d2">Recognised by the FDA, <em>protected for decades.</em></h2>'+desig()+'</div></div></section>'}

/* market and deals */
function marketStats(){return '<div class="g-mk">'+MARKET.slice(0,2).map(function(m,i){return '<div class="g-mk-c"><span class="g-mk-v">'+esc(m[0])+'</span><span class="g-mk-k">'+esc(m[1])+'</span></div>'+(i===0?'<div class="g-mk-a" aria-hidden="true">'+ARRS+'</div>':'')}).join("")+'</div>'}
function deals(){return '<ul class="g-dl">'+DEALS.map(function(d){return '<li><span class="lab">'+esc(d[0])+'</span><h3>'+esc(d[1])+' <i>/</i> '+esc(d[2])+'</h3><b>'+esc(d[3])+'</b></li>'}).join("")+'</ul>'}
function investSec(){return '<section class="sec dark" id="investors" data-theme="dark"><div class="wrap">'+
  '<div class="shead"><div><span class="lab kick">Investors</span><h2 class="d2">A market that will <em>double by 2035.</em></h2></div><p>Glioblastoma alone is a $3.2 billion market, and brain-tumour drugs have changed hands for up to $2.5 billion in the last six years.</p></div>'+
  marketStats()+'<div class="g-dl-w"><span class="lab g-sub">Recent brain-tumour transactions</span>'+deals()+'</div>'+
  '<p class="g-src">Emergen Research (market, CAGR 7.8%); transaction values from Gibson’s investor presentation, November 2026.</p>'+
  '<div class="g-act">'+more("#/investors","Investor overview")+'</div></div></section>'}

/* people: a uniform portrait grid (CI), duotone that warms to colour on hover */
function people(list,cls){return '<ul class="g-pp '+(cls||"")+'">'+list.map(function(p){return '<li><figure class="g-pp-ph">'+img(p.img,"Portrait of "+p.name,495,619)+'</figure><h3>'+esc(p.name)+'</h3><p>'+esc(p.title)+'</p></li>'}).join("")+'</ul>'}
function teamSec(){return '<section class="sec light" id="team" data-theme="light"><div class="wrap">'+
  '<div class="shead"><div><span class="lab kick">Leadership</span><h2 class="d2">Chemists, clinicians <em>and company builders.</em></h2></div><p>The team has built over a billion dollars in new companies, including others with drugs now approved to treat cancer. Its scientific founder designed the molecules.</p></div>'+
  people(TEAM)+'<div class="g-act">'+more("#/team","Team and collaborators")+'</div></div></section>'}

function newsRowsG(list){return '<ul class="nws">'+list.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function newsSec(){return '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
  '<div class="shead"><div><span class="lab kick">News</span><h2 class="d2">Trials, designations <em>and science.</em></h2></div><p>The latest from the Phase 2 trial, the FDA and the laboratories behind Gibson’s drugs.</p></div>'+
  newsRowsG(NEWS.slice(0,3))+'<div class="g-act">'+more("#/news","All news")+'</div></div></section>'}

function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick">Partnering and investment</span>'+
   '<h2 class="big">Talk to <em>Gibson.</em></h2>'+
   '<p class="sub">Data on blood-brain barrier transmission and on the design of the Phase 2 trial are available under a confidentiality agreement. Gibson welcomes clinicians, partners and investors.</p>'+
   '<div class="act"><a class="btn solid" href="mailto:'+CEOMAIL+'">Email the CEO '+ARR+'</a><a class="btn" href="#/investors">Investor overview</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab">President and CEO</span><p>Randall B. Riggs<br><a class="ul" href="mailto:'+CEOMAIL+'">'+CEOMAIL+'</a></p></div>'+
    '<div><span class="lab">General enquiries</span><p><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></p></div>'+
    '<div><span class="lab">Headquarters</span><p>7772 Fisher Drive<br>Miami, FL 33109</p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Headquarters</span>7772 Fisher Drive<br>Miami, FL 33109</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a><br><a class="ul" href="mailto:'+CEOMAIL+'">'+CEOMAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/partners">Partners</a><br><a class="ul" href="#/team">Team</a></div>'+
   '<div class="c"><span class="lab">More</span><a class="ul" href="#/investors">Investors</a><br><a class="ul" href="#/news">News</a><br><a class="ul" href="#/contact">Contact</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 560 62" aria-hidden="true"><text x="280" y="52" text-anchor="middle" style="font-family:\'Manrope\',system-ui,sans-serif;font-weight:600;font-size:60px;letter-spacing:-.03em">Gibson Oncology</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Gibson Oncology</span><span class="lab">Tough on cancer. Not on patients.</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= HOME ================= */
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Clinical-stage oncology<span class="nomob"> · Brain tumours</span> · Miami, FL</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Two targets.</span><span class="l"><em>One molecule.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>LMP744, LMP400 and the next-generation Azas hit topoisomerase 1 and reduce overexpression of cMYC, the oncogene behind about 80% of all human cancers. Brain tumours come first.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/science">The science '+ARR+'</a><a class="btn" href="#/partners">Our partners</a></div></div>'+
   heroMarks()+
  '</section>'+
  targets()+
  partnersSec()+
  letters(false)+
  needBand()+
  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How LMP744 works</span><h2 class="d3">Into the brain, <em>onto the DNA.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Barrier</span><span>TOPO 1</span><span>cMYC</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Through the barrier.</h2><p>The blood-brain barrier keeps most cancer drugs out of the brain, and its efflux transporters pump out many that get in. LMP744 crosses it easily, is not pumped back out, and stays in the brain for up to 24 hours after a single dose.</p></article>'+
     '<article class="step"><h2>Trap TOPO 1 on the DNA.</h2><p>Topoisomerase I clamps round DNA and nicks one strand to let it unwind. LMP744 wedges into the nick and holds the complex there, so the break cannot be resealed. Cancer cells that are poor at repairing DNA are hit hardest.</p></article>'+
     '<article class="step"><h2>Turn down cMYC.</h2><p>Upstream of the MYC oncogene, the DNA can fold into a G-quadruplex. The indenoisoquinolines bind and stabilise it, and MYC expression falls: the second target, hit by the same molecule.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+
  pipeSec()+
  desigSec()+
  investSec()+
  teamSec()+
  newsSec()+
  cta();
}

/* ================= SCIENCE ================= */
function caps(){var C=[
  ["It reaches the brain","Any drug for brain cancer has to cross the blood-brain barrier first. LMP744 and LMP400 cross it easily, are not pumped back out by the efflux transporters that guard it, and stay in the brain for up to 24 hours after a single dose.",'<path d="M6 18h44M6 38h44"/><path class="a" d="M28 6v44"/><circle class="f" cx="28" cy="28" r="4"/><path d="M14 18v20M42 18v20"/>'],
  ["It traps TOPO 1","Topoisomerase I nicks DNA so it can unwind. The indenoisoquinolines wedge into that nick and hold the enzyme there, a non-camptothecin mechanism that is most potent in cancers with homologous recombination deficiency or high SLFN11, and works with PARP inhibitors.",'<path d="M6 28c6-10 12-10 18 0s12 10 18 0 8-6 8-6"/><path d="M6 28c6 10 12 10 18 0s12-10 18 0 8 6 8 6"/><path class="a" d="M17 12c0-6 22-6 22 0M17 44c0 6 22 6 22 0"/><rect class="f" x="25" y="24.5" width="6" height="7"/>'],
  ["It reduces cMYC","cMYC, the largest human oncogene, drives about 80% of all human cancers and has long been called undruggable. The same molecules bind and stabilise the G-quadruplex in the MYC promoter and lower MYC expression.",'<path d="M10 22l18-8 18 8-18 8z"/><path d="M10 31l18-8 18 8-18 8z"/><path class="a" d="M10 40l18-8 18 8-18 8z"/><circle class="f" cx="28" cy="10" r="3.4"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function evid(){return '<dl class="g-ev">'+EVID.map(function(e){return '<div><dt class="lab">'+esc(e[0])+'</dt><dd>'+esc(e[1])+'.</dd></div>'}).join("")+'</dl>'}
function vScience(){return head({k:"Science",h:"Two targets, <em>one molecule.</em>",p:"Gibson’s indenoisoquinolines cross the blood-brain barrier, trap topoisomerase 1 on the DNA and reduce overexpression of cMYC. Two commercially validated targets, hit by the same small molecule."})+
  '<section class="sec light" data-theme="light"><div class="wrap"><div class="shead"><div><span class="lab kick">Three properties</span><h2 class="d2">Built for <em>brain cancer.</em></h2></div><p>LMP744 and LMP400 were designed by Mark Cushman’s group at Purdue University and taken through Phase 1 by the National Cancer Institute. When Gibson found that LMP744 crosses the blood-brain barrier, the NIH began its brain cancer research.</p></div>'+caps()+'</div></section>'+
  '<section class="sec dark2 g-split" data-theme="dark"><div class="wrap g-split-in">'+
   '<figure class="g-fig">'+img("fig-dual-action.webp","Gibson’s diagram of the dual action: the drug stabilises the MYC promoter G-quadruplex, switching MYC transcription off, and inhibits topoisomerase 1",873,463)+'<figcaption class="lab">Dual action attack on cancer: stabilise the cMYC promoter, inhibit TOPO 1</figcaption></figure>'+
   '<div class="g-split-t"><span class="lab kick">The second target</span><h2 class="d2">cMYC, <em>turned down.</em></h2><p class="g-p">Upstream of the MYC gene, the DNA can fold into a four-stranded knot called a G-quadruplex. The indenoisoquinolines bind and stabilise it, and MYC transcription falls.</p>'+
   '<blockquote class="g-mini"><p>“In vitro studies showed a marked reduction in MYC expression following treatment, indicating that MYC may present a key therapeutic target of this compound.”</p><footer>Yanxin Pei, PhD, Children’s National Research Institute</footer></blockquote></div></div></section>'+
  band({img:"lab-study.webp",w:2000,h:1333,cls:"g-band-r",k:"Origins",h:"Invented at the NIH and Purdue, <em>licensed to Gibson.</em>",p:"Three indenoisoquinolines, LMP744, LMP400 and LMP776, came out of Mark Cushman’s laboratory at Purdue and the National Cancer Institute, which took them through Phase 1. Gibson holds the worldwide commercial rights, and to the next-generation azaindenoisoquinolines."})+
  '<section class="sec dark g-split" data-theme="dark"><div class="wrap g-split-in"><figure class="g-split-m">'+img("gel.webp","A scientist analysing DNA gel electrophoresis results",2000,1500)+'</figure><div class="g-split-t"><span class="lab kick">The clinical record</span><h2 class="d2">Tested in people <em>before the brain.</em></h2><p class="g-p">LMP744 reached its Phase 2 trial in glioblastoma on the strength of two National Cancer Institute Phase 1 trials.</p>'+evid()+
   '<p class="g-src">Purdue University, “Gibson Oncology, NIH to begin Phase 2 trials of LMP744 for treatment of first-time recurrent glioblastoma”, 25 February 2026; gibsononcology.com.</p></div></div></section>'+cta()}

/* ================= PIPELINE ================= */
function drugCards(){return '<div class="g-dc">'+PIPE.slice(0,2).map(function(r){return '<article class="g-dc-c"><figure class="g-dc-s">'+img(r.img,"Chemical structure of "+r.drug,r.drug==="LMP744"?384:282,r.drug==="LMP744"?251:243)+'</figure>'+
  '<div><span class="lab kick">'+esc(r.route)+'</span><h3>'+esc(r.drug)+'</h3><p class="g-dc-i">'+esc(r.ind)+'</p><p>'+esc(r.txt)+'</p></div></article>'}).join("")+'</div>'}
function compete(){return '<ul class="g-cp">'+COMPETE.map(function(c){return '<li'+(c[0]==="Gibson Oncology"?' class="me"':'')+'><span class="lab">'+esc(c[0])+'</span><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></li>'}).join("")+'</ul>'}
function vPipeline(){return head({k:"Pipeline",h:"Brain tumours first, <em>then wider.</em>",p:"LMP744 is in a Phase 2 trial at the NIH. LMP400 has completed Phase 1 and is headed for Phase 2 with Duke. Over 700 next-generation Azas follow."})+
  '<section class="sec dark2" data-theme="dark"><div class="wrap"><div class="shead"><div><span class="lab kick">Programmes</span><h2 class="d2">Three drugs, <em>one class.</em></h2></div><p>Each acts on TOPO 1 and cMYC. The path to market targets brain tumours, where competition is low; doctors can then use the drugs in other cancers as merited.</p></div>'+pipe(false)+'</div></section>'+
  '<section class="sec light" data-theme="light"><div class="wrap"><div class="shead"><div><span class="lab kick">The molecules</span><h2 class="d2">Small molecules, <em>through Phase 1.</em></h2></div><p>Both lead drugs have completed Phase 1 at the National Cancer Institute, where they were well tolerated.</p></div>'+drugCards()+'</div></section>'+
  '<section class="sec dark g-split" data-theme="dark"><div class="wrap g-split-in">'+
   '<figure class="g-split-m">'+img("pipette.webp","Pipetting samples into a tray for DNA testing",2000,1500)+'</figure>'+
   '<div class="g-split-t"><span class="lab kick">LMP744 · Phase 2 at NINDS</span><h2 class="d2">A trial that may <em>register the drug.</em></h2>'+evid()+'</div></div></section>'+
  '<section class="sec dark2" data-theme="dark"><div class="wrap"><div class="shead"><div><span class="lab kick">Designations and protection</span><h2 class="d2">Orphan, rare paediatric, <em>and patented.</em></h2></div><p>The FDA designations shorten the road; the patents protect what lies at the end of it.</p></div>'+desig()+'</div></section>'+
  '<section class="sec light" data-theme="light"><div class="wrap"><div class="shead"><div><span class="lab kick">Competitive position</span><h2 class="d2">All gliomas, <em>not one mutation.</em></h2></div><p>Recent glioma drugs target specific mutations and smaller markets. LMP744 and LMP400 address all glioma brain tumours.</p></div>'+compete()+'</div></section>'+cta()}

/* ================= PARTNERS ================= */
function vPartners(){return head({k:"Partners",h:"Chosen by the institutions <em>that see the most.</em>",p:"NIH, Mayo Clinic, Duke and Children’s National see a great many candidate cancer drugs. Each chose to deploy its own resources on Gibson’s."})+
  '<section class="sec g-deep" data-theme="dark"><div class="wrap"><div class="shead"><div><span class="lab kick">Strategic partners</span><h2 class="d2">Four institutions, <em>two drugs.</em></h2></div><p>NINDS and Mayo Clinic are advancing LMP744; Duke and Children’s National, LMP400.</p></div>'+partnerRows(true)+'</div></section>'+
  letters(true)+
  '<section class="sec dark" data-theme="dark"><div class="wrap"><div class="shead"><div><span class="lab kick">Scientific collaborators</span><h2 class="d2">Senior scientists <em>across the field.</em></h2></div><p>From the National Institute of Neurological Disorders and Stroke, the National Cancer Institute, Duke, Purdue, the University of Maryland and Miami Cancer Institute.</p></div>'+people(COLLAB,"c3")+'</div></section>'+cta()}

/* ================= TEAM ================= */
function vTeam(){return head({k:"Team",h:"Chemists, clinicians <em>and company builders.</em>",p:"A leadership team that has built over a billion dollars in new companies, including others with drugs now approved to treat cancer, with the chemist who designed the molecules as a founder."})+
  '<section class="sec light" data-theme="light"><div class="wrap"><div class="shead"><div><span class="lab kick">Leadership and board</span><h2 class="d2">The people <em>behind Gibson.</em></h2></div><p>Mark Cushman, Distinguished Professor Emeritus in Purdue University’s College of Pharmacy, has been inducted into the American Chemical Society Division of Medicinal Chemistry Hall of Fame.</p></div>'+people(TEAM)+'</div></section>'+
  band({img:"clinical-lab.webp",w:2000,h:1316,k:"How Gibson works",h:"A lean company, <em>a large network.</em>",p:"Working with NINDS, Duke and Children’s National keeps Gibson’s annual burn rate very low, while some of the leading brain-tumour investigators in the country advance its drugs."})+
  '<section class="sec dark" data-theme="dark"><div class="wrap"><div class="shead"><div><span class="lab kick">Scientific collaborators</span><h2 class="d2">Senior scientists <em>across the field.</em></h2></div><p>Significant parts of the Gibson pipeline were studied under preclinical and clinical agreements with these investigators and their institutions.</p></div>'+people(COLLAB,"c3")+'</div></section>'+cta()}

/* ================= INVESTORS ================= */
function reasons(){return '<ol class="g-rs">'+REASONS.map(function(r){return '<li><h3>'+esc(r[0])+'</h3><p>'+esc(r[1])+'</p></li>'}).join("")+'</ol>'}
function vInvestors(){return head({k:"Investors",h:"Why invest <em>in Gibson.</em>",p:"Two commercially validated targets, four premier institutions deploying their own resources, orphan designations and patents beyond 2041, at a very low burn rate."})+
  '<section class="sec light" data-theme="light"><div class="wrap"><div class="shead"><div><span class="lab kick">The case</span><h2 class="d2">Six reasons, <em>in brief.</em></h2></div><p>From Gibson’s November 2026 investor presentation.</p></div>'+reasons()+'</div></section>'+
  '<section class="sec dark" data-theme="dark"><div class="wrap"><div class="shead"><div><span class="lab kick">The market</span><h2 class="d2">Glioblastoma, <em>$6.9 billion by 2035.</em></h2></div><p>Glioblastoma recurs in nearly all patients, and survival once it does is typically six to ten months.</p></div>'+marketStats()+
   '<div class="g-dl-w"><span class="lab g-sub">Recent brain-tumour transactions</span>'+deals()+'</div><p class="g-src">Emergen Research; CBTRUS 2025; Penn Medicine, June 2025; Gibson investor presentation, November 2026.</p></div></section>'+
  '<section class="sec light g-split" data-theme="light"><div class="wrap g-split-in">'+
   '<figure class="g-split-m">'+img("research.webp","A researcher holding results in the laboratory",2000,1333)+'</figure>'+
   '<div class="g-split-t"><span class="lab kick">The path</span><h2 class="d2">Licensing or acquisition <em>after Phase 2.</em></h2><p class="g-p">Gibson targets licensing or acquisition on completion of Phase 2 human trials, three to four years out. Its partners carry much of the clinical cost: NINDS is paying the majority of the LMP744 Phase 2 trial, and Duke has filed a $15 million SPORE grant for LMP400.</p>'+
   '<dl class="g-ds g-ds-s"><div><dt>Randall B. Riggs</dt><dd>President and Chief Executive Officer · <a class="ul" href="mailto:'+CEOMAIL+'">'+CEOMAIL+'</a></dd></div><div><dt>Theodore C. Solomon</dt><dd>Founder and Chief Financial Officer · via <a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></dd></div><div><dt>Mark C. Rogers, MD, MBA</dt><dd>Founder and Executive Chair</dd></div></dl></div></div></section>'+
  '<section class="sec dark2" data-theme="dark"><div class="wrap"><div class="shead"><div><span class="lab kick">Competitive position</span><h2 class="d2">All gliomas, <em>not one mutation.</em></h2></div><p>The recent glioma drugs that changed hands each target a specific mutation and a smaller market.</p></div>'+compete()+'</div></section>'+cta()}

/* ================= NEWS ================= */
function vNews(){return head({k:"News",h:"Trials, designations <em>and science.</em>",p:"The Phase 2 trial, the FDA’s designations and the research behind Gibson’s drugs, linked to the original reports."})+
  '<section class="sec dark first" data-theme="dark"><div class="wrap">'+newsRowsG(NEWS)+'</div></section>'+cta()}

/* ================= CONTACT ================= */
function vContact(){return head({k:"Contact",h:"Talk to <em>Gibson.</em>",p:"Clinicians, partners and investors are welcome. Data on blood-brain barrier transmission and the Phase 2 design are available under a confidentiality agreement."})+
  '<section class="sec light g-split" data-theme="light"><div class="wrap g-split-in">'+
   '<figure class="g-split-m tall">'+img("microscope-v.webp","A scientist studying samples under a microscope",1333,2000)+'</figure>'+
   '<div class="g-split-t"><span class="lab kick">Get in touch</span><h2 class="d2">Write to the <em>CEO directly.</em></h2>'+
   '<dl class="g-ds g-ds-s"><div><dt>Randall B. Riggs, President and CEO</dt><dd><a class="ul" href="mailto:'+CEOMAIL+'">'+CEOMAIL+'</a></dd></div><div><dt>General enquiries</dt><dd><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></dd></div><div><dt>Headquarters</dt><dd>Gibson Oncology, 7772 Fisher Drive, Miami, FL 33109</dd></div><div><dt>Follow</dt><dd><a class="ul" href="https://www.linkedin.com/company/gibson-oncology" target="_blank" rel="noopener">LinkedIn</a> · <a class="ul" href="https://x.com/GibsonOncology" target="_blank" rel="noopener">X</a></dd></div></dl>'+
   '<div class="act g-act-l"><a class="btn solid" href="mailto:'+CEOMAIL+'">Email the CEO '+ARR+'</a><a class="btn" href="mailto:'+MAIL+'">General enquiries</a></div></div></div></section>'}
function v404(){return head({k:"Not found",h:"This page <em>does not exist.</em>",p:"The link may be out of date."})+'<section class="sec dark" data-theme="dark"><div class="wrap"><a class="btn" href="#/">Back to the home page '+ARR+'</a></div></section>'}

/* ================= ROUTER ================= */
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(!p.length)return {k:"home",v:vHome,t:"Gibson Oncology — Two targets, one molecule: TOPO 1 and cMYC in brain cancer",x:"Home"};
  var R={science:[vScience,"Science"],pipeline:[vPipeline,"Pipeline"],partners:[vPartners,"Partners"],team:[vTeam,"Team"],investors:[vInvestors,"Investors"],news:[vNews,"News"],contact:[vContact,"Contact"]};
  var r=R[p[0]];if(r&&p.length===1)return {k:p[0],v:r[0],t:r[1]+" — "+SITE,x:r[1]};
  return {k:"404",v:v404,t:"Not found — "+SITE,x:"Not found"};
}
/* site motion on top of the template's reveals: photo bands drift slowly (transform only, on a wrapper the reveal never touches),
   pipeline bars draw to their phase when they enter */
var _initView=initView;
initView=function(k,first){_initView(k,first);if(RM)return;var view=$("#view");
  $$(".g-band",view).forEach(function(b){var m=$(".g-band-m",b);if(!m)return;gsap.fromTo(m,{yPercent:-7},{yPercent:7,ease:"none",scrollTrigger:{trigger:b,start:"top bottom",end:"bottom top",scrub:true}})});
  $$(".g-bar-f",view).forEach(function(f,i){gsap.fromTo(f,{scaleX:0},{scaleX:1,duration:1.5,ease:"flow",delay:.25+i*.1,scrollTrigger:{trigger:f.closest(".g-pipe"),start:"top 80%"}})});
  if(k==="home"&&MOBILE()){var hm=$(".g-hm-row",view);if(hm&&hm.getBoundingClientRect().top>innerHeight*.85)gsap.from($$(".g-hm-row li",view),{opacity:0,y:20,duration:.9,ease:"silk",stagger:.05,scrollTrigger:{trigger:hm,start:"top 92%"}})}
  $$(".g-tt-x i",view).forEach(function(l){gsap.fromTo(l,{scaleY:0},{scaleY:1,duration:1.2,ease:"flow",scrollTrigger:{trigger:l,start:"top 85%"}})});
};
