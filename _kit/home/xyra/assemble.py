# XYRA home-only concept: assembled from the home-only engine (pumpinheart.src.html, itself firelight's regions + the
# home-only plumbing) with every region swapped for XYRA's own content, hero field and story.
import re,os,subprocess
K=os.path.dirname(os.path.abspath(__file__))+'/../..'
s=open(K+'/src/pumpinheart.src.html').read()
def put(n,body,html=False):
    global s
    a,b=(('<!--<R:%s>-->','<!--</R:%s>-->') if html else ('/*<R:%s>*/','/*</R:%s>*/'))
    i=s.index(a%n)+len(a%n);j=s.index(b%n);s=s[:i]+body+s[j:]

ACC='#b4462f'   # logo rust #bb4c39, deepened a touch for text/buttons on the light ground (>=4.5:1)
MARK='''<svg viewBox="86 12 706 750" aria-hidden="true"><g fill="#bb4c39"><circle cx="510.5" cy="481.5" r="275.5"/><circle cx="722" cy="287" r="66"/><circle cx="474.5" cy="92.5" r="77"/><circle cx="267.5" cy="86.5" r="56"/><circle cx="743" cy="136" r="25.5"/><circle cx="181" cy="203" r="18.5"/><circle cx="158.5" cy="360.5" r="69"/><circle cx="135" cy="516.5" r="36.5"/></g><path d="M345 490H422L467 318L515 622L568 412L600 490H683" fill="none" stroke="#fbdcd8" stroke-width="14" stroke-linejoin="miter" stroke-miterlimit="30"/></svg>'''
FAV="data:image/svg+xml,"+MARK.replace(' aria-hidden="true"',' xmlns="http://www.w3.org/2000/svg"').replace('"',"'").replace('#','%23').replace('<','%3C').replace('>','%3E')

put('fonts','/*@fonts Poppins:300,300i,400,500,600,700*/')
put('root''',''':root{
  --ink:#faf7f4;--inkr:250,247,244;--boner:41,36,36;--accr:180,70,47;--ink2:#f3eeea;--ink3:#ebe4df;--deep:#fcfaf8;
  --bone:#292424;--bone2:#312b2b;--bone3:#3a3333;
  --stone:#6c6362;--stoneD:#bfb5b1;
  --acc:#b4462f;--accL:#b0432d;--accD:#f0a493;--rd:#f0a493;--rdL:#f0a493;--gy:#8a8282;
  --hair:rgba(41,36,36,.14);--hairD:rgba(250,247,244,.16);
  --disp:'Poppins','Helvetica Neue',Arial,sans-serif;
  --serif:'Poppins','Helvetica Neue',Arial,sans-serif;
  --sans:'Poppins',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Poppins',system-ui,-apple-system,'Segoe UI',sans-serif;
  --deco:'Poppins',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
@media (min-width:1800px){:root{--maxw:1600px}}
''')
put('fieldbg','''
.fieldbg{position:fixed;inset:0;z-index:0;background:#faf7f4}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}
''')
put('logocss','''
.brand{display:flex;align-items:center;gap:11px;height:56px;color:var(--bone);text-decoration:none}
.brand .lg{display:block;height:40px;aspect-ratio:706/750;flex:none}
.brand .lg svg,.xwm .lg svg{display:block;width:100%;height:100%}
.brand .wt,.xwm .wt{font-family:var(--disp);font-weight:700;letter-spacing:.01em;line-height:1;color:var(--bone);white-space:nowrap}
.brand .wt{font-size:23px}
.brand .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
@media (max-width:420px){.brand .lg{height:34px}.brand .wt{font-size:20px}}
''')
SCENECSS='''
/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:14ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#6c6362;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #a39a97;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(220px,30vh,300px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:300;font-size:clamp(26px,2.3vw,38px);line-height:1.12;letter-spacing:-.03em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(72vh,660px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .my{fill:#f3dcd5}
.scene .cv{fill:#fbf2ee}
.scene .w{fill:none;stroke:rgba(var(--boner),.7);stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}
.scene .w2{fill:none;stroke:rgba(var(--boner),.36);stroke-width:1;stroke-linecap:round}
.scene .ax{fill:none;stroke:rgba(var(--boner),.3);stroke-width:1}
.scene .gr{fill:none;stroke:rgba(var(--boner),.09);stroke-width:1}
.scene .af{fill:none;stroke:#b0432d;stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}
.scene .sr{fill:none;stroke:#2f6b5e;stroke-width:1.7;stroke-linejoin:round;stroke-linecap:round}
.scene .fb{fill:none;stroke:#b0432d;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}
.scene .sn{fill:none;stroke:#2f6b5e;stroke-width:1.4}
.scene .ep{fill:rgba(180,70,47,.22);stroke:#b0432d;stroke-width:1}
.scene .ep2{fill:rgba(47,107,94,.22);stroke:#2f6b5e;stroke-width:1}
.scene .th{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1;stroke-dasharray:4 4}
.scene .ds{fill:none;stroke:#b0432d;stroke-width:2.2;stroke-linejoin:miter;stroke-linecap:square}
.scene .dc{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1;stroke-dasharray:3 5}
.scene .dt{fill:#b0432d}
.scene .ld{fill:none;stroke:rgba(var(--boner),.45);stroke-width:1}
.scene text{font-family:var(--mono);font-weight:600;font-size:12px;letter-spacing:.12em;fill:#4a4343}
.scene text.a{fill:#b0432d}
.scene text.g{fill:#2f6b5e}
.scene text.t{font-size:10.5px;font-weight:500;letter-spacing:.14em;fill:#5f5858}
.scene #xl1,.scene #xl2,.scene #xl3,.scene #xyFb,.scene #xySr,.scene #xyEp2,.scene #xySn{opacity:0}
'''
put('scenecss',SCENECSS)
put('site','var SITE="XYRA";\nvar PK="xyra";\n')
put('content','''
var FONTS=['300 1em "Poppins"','italic 300 1em "Poppins"','400 1em "Poppins"','500 1em "Poppins"','600 1em "Poppins"','700 1em "Poppins"'];
var EMAIL="press@xyra.us";
var LI="https://www.linkedin.com/company/81294620/";
/* xyra.us Team page (names and titles), HARBOR-AF release of 31 Aug 2026 (COO, advisor, principal investigator). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Managing members",name:"Dr Peter G Milner",title:"Founder and Managing Member",sum:"MD, FACC. Founder of XYRA."},
 {g:"Managing members",name:"Dr Pascal J Druzgala",title:"Managing Member",sum:""},
 {g:"Operations",name:"Charlie Rampersaud",title:"Chief Operating Officer",sum:""},
 {g:"Members",name:"Dr Margaret Ziola",title:"Member",sum:""},
 {g:"Members",name:"Dr Christian D Flynn",title:"Member",sum:""},
 {g:"Members",name:"Dr Stephen McKeever",title:"Member",sum:""},
 {g:"Members",name:"Dr Samuel G Latham",title:"Member",sum:""},
 {g:"Advisor and investigator",name:"Prof A. John Camm, MD",title:"City St George's, University of London",sum:"Emeritus Professor of Clinical Cardiology; long-standing advisor to the budiodarone programme."},
 {g:"Advisor and investigator",name:"Prof Andrzej Przybylski, MD",title:"University of Rzeszów, Poland",sum:"Head of Cardiology; principal investigator at the first activated HARBOR-AF site."}];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 2026","First patient dosed in Europe in the Phase 2/3 HARBOR-AF study of budiodarone in paroxysmal and persistent AF","PharmaShots","https://newswire.pharmashots.com/?p=4990"],
 ["March 2026","US patent issued to reduce the risk of heart failure or stroke by reducing the number and duration of atrial fibrillations","Newswire","https://www.newswire.ca/news-releases/xyra-announces-issuance-of-us-patent-to-reduce-the-risk-of-heart-failure-or-strokes-by-reducing-the-number-and-duration-of-atrial-fibrillations-816987382.html"],
 ["April 2025","A fifth new US patent in the series protecting the use of budiodarone in AF management until after 2040","PR Newswire","https://www.prnewswire.com/news-releases/xyra-announces-the-issuance-of-a-fifth-new-us-patent-in-a-series-of-patents-which-protect-the-use-of-budiodarone-in-the-management-of-atrial-fibrillation-till-after-2040-302436581.html"],
 ["February 2024","Successful FDA End of Phase 2 meeting and agreement on endpoints for approval of budiodarone","PR Newswire","https://prnewswire.com/news-releases/xyra-announces-successful-fda-end-of-phase-2-meeting-and-agreement-on-endpoints-for-approval-of-budiodarone-for-the-management-of-atrial-fibrillation-302070506.html"]];
var SHEETS=[];
''')
put('views',r'''/* ================= VIEWS (home only; nav items open build-out pages via the kit's buildout module, in-page CTAs scroll to sections) ================= */
function team(){var gs=[],by={};TEAM.forEach(function(p){if(!by[p.g]){by[p.g]=[];gs.push(p.g)}by[p.g].push(p)});
  return '<div class="mh">'+gs.map(function(g){return '<div class="mh-group"><p class="mh-label">'+esc(g)+'</p><ul class="mh-list">'+by[g].map(function(p){
    return '<li><div class="mh-row"><span class="mh-name">'+esc(p.name)+'</span><span class="mh-role">'+esc(p.title)+'</span><span class="mh-sum">'+esc(p.sum)+'</span><span></span></div></li>'}).join("")+'</ul></div>'}).join("")+'</div>'}
function news(){return '<ul class="nws">'+NEWS.map(function(n){return '<li><a href="'+n[3]+'" target="_blank" rel="noopener"><span class="lab dt">'+esc(n[0])+'</span><h3>'+esc(n[1])+'</h3><span class="lab src">'+esc(n[2])+' '+ARR+'</span></a></li>'}).join("")+'</ul>'}
function caps(){var C=[
  ["Mixed ion channel blocker","Budiodarone is a potentially first-in-class mixed ion channel blocker. In Phase 2 it reduced AF symptoms, AF burden and long episodes of AF, and helped maintain sinus rhythm.",'<path d="M8 20h40M8 36h40"/><path d="M18 20v16M38 20v16"/><path class="a" d="M28 10v36M24 16l4-6 4 6"/>'],
  ["Cleared by esterases","It is metabolised by esterases, so its half-life is significantly shorter than that of amiodarone.",'<path d="M8 46C14 18 22 10 28 10S42 18 48 46"/><path class="a" d="M8 46h40"/><circle class="f" cx="28" cy="10" r="2.6"/>'],
  ["No accumulation","To date there is no evidence of accumulation in human or animal studies.",'<rect x="12" y="10" width="32" height="36"/><path class="a" d="M12 38h32"/><path d="M20 22h16M20 30h10"/>']];
  return '<div class="caps">'+C.map(function(c){return '<div class="cap"><svg viewBox="0 0 56 56" aria-hidden="true">'+c[2]+'</svg><h3 data-r>'+esc(c[0])+'</h3><p data-r>'+esc(c[1])+'</p></div>'}).join("")+'</div>'}
function trials(){var T=[
  ["CLN-209","Phase 2/3","HARBOR-AF","Open-label, dose escalation","About 600 subjects with symptomatic paroxysmal or persistent AF. It begins as a 100-subject Phase 2 feasibility study in the EU (first patient dosed in Poland, August 2026) and extends to US sites in 2027.","https://clinicaltrials.gov/study/NCT07792239","NCT07792239"],
  ["CLN-210","Planned","Randomised study","Placebo-controlled","A randomised, placebo-controlled study of budiodarone, planned to follow in 2027.","",""],
  ["FDA","Feb 2024","End of Phase 2","Agreement on endpoints","FDA agreed the studies and endpoints for approval, and that no large long-term cardiovascular outcomes study is required before or after approval. Wearable AF monitoring is to be part of the label.","https://prnewswire.com/news-releases/xyra-announces-successful-fda-end-of-phase-2-meeting-and-agreement-on-endpoints-for-approval-of-budiodarone-for-the-management-of-atrial-fibrillation-302070506.html","Release"]];
  return '<ul class="pfr pipe">'+T.map(function(t){return '<li><span class="lab tg"><b>'+esc(t[0])+'</b><i>'+esc(t[1])+'</i></span><div class="pgm"><h3>'+esc(t[2])+'</h3><span class="loc">'+esc(t[3])+'</span></div><p>'+esc(t[4])+'</p>'+(t[5]?'<a class="lab lk" href="'+t[5]+'" target="_blank" rel="noopener">'+esc(t[6])+' '+ARR+'</a>':'<span></span>')+'</li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Budiodarone<span class="nomob"> · Atrial fibrillation</span> · Los Altos, California</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">A novel</span><span class="l">antiarrhythmic,</span><span class="l"><em>guided by</em></span><span class="l"><em>wearables.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>XYRA is developing budiodarone for atrial fibrillation: a dose that the physician adjusts against rhythm data from implantable and wearable AF monitors. It is now in the Phase 2/3 HARBOR-AF study.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/how">How it works '+ARR+'</a><a class="btn" href="#/pipeline">HARBOR-AF</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" id="about" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Our aim</span>'+
   '<h2 class="txt" id="mani">To manage atrial fibrillation the way doctors manage hypertension and high cholesterol: <em>an effective drug, increased step by step, and tracked with simple, widely available monitoring.</em></h2></div>'+
   '<div class="stats">'+
    '<div class="stat"><span class="ln2"></span><span class="v">~600</span><p class="k">Subjects planned in HARBOR-AF, the Phase 2/3 study of budiodarone</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">5</span><p class="k">New US patents protecting budiodarone in AF management until after 2040</p></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2026</span><p class="k">First patient dosed in Europe, at a site in Poland</p></div>'+
   '</div>'+
  '</div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How it works</span><h2 class="d3">Dosed by <em>the rhythm.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Monitor</span><span>Titrate</span><span>Safe harbor</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Read the rhythm.</h2><p>Pacemakers, implantable loop recorders, patches and wristbands record every episode of atrial fibrillation. The ones that matter most are long episodes of AF (LEAF), lasting more than 5 hours.</p></article>'+
     '<article class="step"><h2>Adjust the dose.</h2><p>Budiodarone starts at 200 mg twice daily. Each month the treating physician can raise it in 200 mg steps, up to 800 mg twice daily, guided by what the monitor records.</p></article>'+
     '<article class="step"><h2>Reach a safe harbor.</h2><p>The goal is no AF episode longer than 5 hours, with the AF burden kept under 5 hours in any rolling 24 hours, to control symptoms and reduce the risk that comes with long episodes.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="science" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Science</span><h2 class="d2 split">Budiodarone, <em>a mixed ion channel blocker.</em></h2></div><p data-r>An oral antiarrhythmic for the long-term management of symptomatic paroxysmal and persistent atrial fibrillation, designed to be dosed with the help of the AF monitors patients already wear.</p></div>'+
   caps()+
   '<div class="ev lt"><span class="lab kick" data-r>Works with</span><dl>'+
    '<div><dt class="lab" data-r>Implantable monitors</dt><dd data-r>Pacemakers and implantable loop recorders.</dd></div>'+
    '<div><dt class="lab" data-r>Wearable monitors</dt><dd data-r>Patches and wristbands that record AF episodes.</dd></div>'+
   '</dl></div>'+
   '<p class="note-s tnote" data-r>Budiodarone is an investigational drug in clinical development. It is not approved for any use.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="pipeline" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Pipeline</span><h2 class="d2 split">Clinical development, <em>agreed with FDA.</em></h2></div><p data-r>The endpoints are symptom control and the share of patients who eliminate AF episodes longer than 5 hours in the final four weeks, as measured by wearable monitors.</p></div>'+
   trials()+
  '</div></section>'+

  '<section class="sec dark2" id="team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">The people behind <em>budiodarone.</em></h2></div><p data-r>XYRA LLC is a private biopharmaceutical company in Los Altos, California, developing new treatments for cardiac rhythm disorders with high unmet need.</p></div>'+
   team()+
  '</div></section>'+

  '<section class="sec dark" id="news" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>News</span><h2 class="d2 split">From the clinic <em>and the patent office.</em></h2></div><p data-r>Releases on HARBOR-AF, the budiodarone patent series and the FDA End of Phase 2 agreement.</p></div>'+
   news()+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>Clinicians, media and investors</span>'+
   '<h2 class="big split">Talk to <em>XYRA.</em></h2>'+
   '<p class="sub" data-r>For media and investor relations, and for questions about budiodarone and the HARBOR-AF study, write to the XYRA team.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+EMAIL+'">Email us '+ARR+'</a><a class="btn" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="cinfo">'+
    '<div><span class="lab" data-r>Company</span><p data-r>XYRA LLC<br>Los Altos, California</p></div>'+
    '<div><span class="lab" data-r>Media and investor relations</span><p data-r><a class="ul" href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></div>'+
    '<div><span class="lab" data-r>Clinical trial</span><p data-r><a class="ul" href="https://clinicaltrials.gov/study/NCT07792239" target="_blank" rel="noopener">HARBOR-AF, NCT07792239</a></p></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Company</span>XYRA LLC<br>Los Altos, California</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="mailto:'+EMAIL+'">Email us</a><br><a class="ul" href="'+LI+'" target="_blank" rel="noopener">LinkedIn</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/science">Science</a><br><a class="ul" href="#/pipeline">Pipeline</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">In development</span>Budiodarone is investigational and not approved for any use</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 760 92" aria-hidden="true"><text x="380" y="78" text-anchor="middle" style="font-family:\'Poppins\',Arial,sans-serif;font-weight:700;font-size:92px;letter-spacing:.06em">XYRA</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 XYRA LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER: one route; #/<section> scrolls to that section (build-out pages: lib/buildout.js) ================= */
var SECS={about:"about",how:"story",science:"science",pipeline:"pipeline",team:"team",news:"news",contact:"contact"};
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  return {k:"home",v:vHome,sec:p.length?(SECS[p[0]]||null):null,t:"XYRA — budiodarone, a novel antiarrhythmic guided by wearables",x:"Home"};
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
''')
AR=open(K+'/home/xyra/hero.ar').read().strip()
put('field','''/* ================= HERO FIELD: XYRA's own molecule, budiodarone (PubChem CID 9833332, 3D conformer), as a glossy
   ball-and-stick model ray-traced offline by _kit/home/xyra/render.py (soft shadows, ambient occlusion) and baked with real
   alpha, so it sits on the page ink with no box or seam (DJ/DP). Carbon graphite, oxygen in the logo rust, nitrogen slate,
   the two iodines plum. Shown whole, at or below native size, centred in the open area right of the text (DO), in a slow
   breathing drift. It moves on its own, so no pointer response (CZ). On phones it sits in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#faf7f4",AR=%s;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(240,Math.min(ebt-14,h*.46)):h;
    var top=mob?78:118,iw=mob?Math.min(w*.92,(U*.8-top)*AR):Math.min(cw*.45,(h-top-70)*AR,960),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.73,ky=mob?top+(U*.8-top)*.5:top+(h-top-40)*.5;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1-.02*k)*(1+.035*(1-e)),rt=(k-.5)*.018;
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-k*G.ih*.012-SP.v*G.ih*.05;
      c.save();c.translate(cx,cy);c.rotate(rt);c.globalAlpha=e;c.drawImage(img,-dw*.5,-dh*.5,dw,dh);c.restore();c.globalAlpha=1;
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh*.78,0,G.bh);mv.addColorStop(0,"rgba(250,247,244,0)");mv.addColorStop(1,"rgba(250,247,244,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();
'''%AR)
put('story',open(K+'/home/xyra/story.js').read())
put('meta','''<title>XYRA — budiodarone, a novel antiarrhythmic guided by wearables</title>
<meta name="description" content="XYRA LLC, Los Altos, California, is developing budiodarone, a mixed ion channel blocker for atrial fibrillation, dose-adjusted against rhythm data from implantable and wearable AF monitors. Now in the Phase 2/3 HARBOR-AF study.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#faf7f4">
<link rel="icon" href="%s">
'''%FAV,True)
put('seen','<script>try{if(sessionStorage.getItem("xyra-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>',True)
put('pre','''<div id="pre" aria-hidden="true">
  <div class="pc">
    <span class="wm"><span class="xwm"><span class="lg">%s</span><span class="wt">XYRA</span></span></span>
  </div>
  <span class="lab pl">Budiodarone · Atrial fibrillation · Los Altos, California</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>'''%MARK,True)
put('brand','<a href="#/" class="brand" id="brand" aria-label="XYRA, home"><span class="lg" aria-hidden="true">%s</span><span class="wt" aria-hidden="true">XYRA</span><span class="sr">XYRA</span></a>'%MARK,True)
put('navmenu','''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/science">Science</a>
    <a class="nl ul" href="#/pipeline">Pipeline</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/science">Science</a></li>
    <li><a href="#/pipeline">Pipeline</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Company</span><br>XYRA LLC, Los Altos, California</div>
    <div><span class="lab">Media and investors</span><br>press@xyra.us</div>
  </div>
</div>''',True)
put('xc','''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">XYRA</span><div class="t" id="xtt"></div></div>''',True)

# the engine's shared CSS block: recolour to XYRA, swap the loader logo sizing, drop pumpinheart-only rules
for a,b in [('#b83436',ACC),('#b23234','#b0432d'),('#f8f6f4','#faf7f4'),('#d04a4b','#bb4c39'),('248,246,244','250,247,244'),
            ('/* Pumpinheart additions */','/* XYRA additions */'),('/* Pumpinheart */','/* XYRA */'),
            ('#pre .wm .lg{display:block;height:clamp(40px,4.6vw,66px);width:auto;aspect-ratio:880.5/122;max-width:calc(100vw - 48px)}','#pre .xwm{display:inline-flex;align-items:center;gap:clamp(14px,1.4vw,20px);white-space:nowrap}#pre .xwm .lg{display:block;height:clamp(62px,6vw,84px);aspect-ratio:706/750;flex:none}#pre .xwm .wt{font-size:clamp(46px,4.6vw,66px)}'),
            ('#pre .wm .lg svg{display:block;width:100%;height:100%}',''),
            ('@media (max-width:520px){#pre .wm .lg{height:auto;width:calc(100vw - 40px)}}','@media (max-width:520px){#pre .xwm .lg{height:60px}#pre .xwm .wt{font-size:44px}}')]:
    s=s.replace(a,b)
s=re.sub(r'/\* ===== Pumpinheart: palette[^\n]*\*/','/* ===== XYRA: palette from their logo (rust #bb4c39, deepened to #b4462f/#b0432d for text and buttons on the light ground; the pale pink of the pulse lifted to #f0a493 for accents on the charcoal bands; Poppins, as on xyra.us) */',s)
s+=''
# XYRA-specific CSS appended into the engine block (before </style> of the main sheet)
EXTRA='''
/* ===== XYRA additions ===== */
.hero-h{font-size:clamp(40px,4.1vw,76px);font-weight:300;letter-spacing:-.035em;line-height:1.04}\n@media (max-width:560px){.hero-h{font-size:11vw}}
.d1,.d2,.d3,.mani .txt,.step h2,.cta .big,.xt .t,.mm li a{letter-spacing:-.03em}
.stat .v{font-weight:300;letter-spacing:-.04em}
.lab,.nav a.nl,.btn,.burger,.rail span{font-weight:500}
.hero-foot .s{max-width:46ch}
.mh-sum:empty{display:none}
.pipe .lk{white-space:nowrap;display:inline-flex;align-items:center;gap:10px}
.pipe .lk svg{width:16px;height:10px;flex:none}
.scene svg.mob text{font-size:22px;letter-spacing:.02em}
.scene svg.mob text.t{font-size:19px;letter-spacing:.03em}
@media (max-width:860px){.story-r{height:calc((100vw - 2*var(--gut)) * .82);min-height:240px}}
'''
i=s.index('/* ===== XYRA: palette');j=s.index('</style>',i);s=s[:j]+EXTRA+s[j:]
assert 'umpinheart' not in s.replace('pumpinheart.src.html',''), [m.start() for m in re.finditer('umpinheart',s)][:5]
open(K+'/src/xyra.src.html','w').write(s)
print(subprocess.run(['node',K+'/build.js',K+'/src/xyra.src.html',K+'/../xyra/index.html'],capture_output=True,text=True).stdout)
