#!/usr/bin/env python3
"""Assemble _kit/src/waconacapital.src.html from the firelight engine regions (HOME-ONLY format).
Never hand-edit the big file: rerun this script, then node _kit/build.js."""
import re, os, sys
K = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(K, 'src', 'firelight.src.html'), encoding='utf-8').read()

def reg(name, body):
    global src
    pats = [(r'/\*<R:%s>\*/' % name, r'/\*</R:%s>\*/' % name, '/*<R:%s>*/' % name, '/*</R:%s>*/' % name),
            (r'<!--<R:%s>-->' % name, r'<!--</R:%s>-->' % name, '<!--<R:%s>-->' % name, '<!--</R:%s>-->' % name)]
    for a, b, A, B in pats:
        m = re.search(a + r'.*?' + b, src, re.S)
        if m:
            src = src[:m.start()] + A + body + B + src[m.end():]
            return
    sys.exit('region not found: ' + name)

INK = '#121a16'
TRI = 'M3.2 4.2h33.6c1.5 0 2.4 1.6 1.7 2.9L21.7 36.1c-.8 1.3-2.6 1.3-3.4 0L1.5 7.1C.8 5.8 1.7 4.2 3.2 4.2Z'
MARK = '<svg class="mark" viewBox="0 0 40 40" aria-hidden="true"><path class="tri" d="' + TRI + '"/></svg>'

reg('meta', '''<title>Wacona Capital — Lower middle-market private equity, Charlottesville, Virginia</title>
<meta name="description" content="Based in Charlottesville, Virginia, Wacona Capital is a private equity firm partnering with leading founder and family owned companies in the lower middle market: majority recapitalizations, growth capital and management buyouts of $20 million to $100 million.">
<meta name="theme-color" content="#121a16">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23121a16'/%3E%3Cpath fill='%23a8c196' d='M8 10h24L20 31Z'/%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts Spectral:400,400i; Public Sans:400,500,600; Josefin Sans:400,600*/")
reg('root', ''':root{
  --ink:#121a16;--inkr:18,26,22;--boner:243,242,236;--accr:168,193,150;--ink2:#17211c;--ink3:#1f2b25;--deep:#0c120f;
  --bone:#f3f2ec;--bone2:#e9e8e0;--bone3:#dddcd2;
  --stone:#a9b3ab;--stoneD:#4b5650;
  --acc:#566e57;--accL:#a8c196;--accD:#566e57;
  --hair:rgba(243,242,236,.14);--hairD:rgba(18,26,22,.16);
  --disp:'Spectral',Georgia,'Times New Roman',serif;
  --serif:'Spectral',Georgia,serif;
  --sans:'Public Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Josefin Sans','Public Sans',system-ui,sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#5a5240 0%,#b49a6a 34%,#d8c69c 46%,#8a8670 60%,#2e3328 82%,#121a16 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:11px;height:56px;color:var(--bone)}
.brand svg.mark{width:26px;height:26px;flex:none;overflow:visible;margin-top:2px}
.mark .tri{fill:var(--accL)}
.brand .wt{display:flex;flex-direction:column;gap:5px;line-height:1}
.brand .wt b{font:600 21px/1 var(--mono);letter-spacing:.16em;color:var(--bone)}
.brand .wt small{font:400 9.5px/1 var(--mono);letter-spacing:.42em;color:var(--accL);padding-left:1px}
@media (max-width:420px){.brand .wt b{font-size:19px}}''')

reg('seen', '<script>try{if(sessionStorage.getItem("wac-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 40 40"><path d="''' + TRI + '''"/></svg>
    <div class="wm"><span>WACONA</span></div>
  </div>
  <span class="lab pl">Private equity · Charlottesville, Virginia</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="Wacona Capital, home">' + MARK + '<span class="wt"><b>WACONA</b><small>CAPITAL</small></span></a>')
reg('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/more/approach">Approach</a>
    <a class="nl ul" href="#/more/criteria">Criteria</a>
    <a class="nl ul" href="#/more/portfolio">Portfolio</a>
    <a class="nl ul" href="#/more/team">Team</a>
    <a class="nl ul" href="#/more/news">News</a>
    <a class="btn" href="#/contact">Contact ''' + ARRS + '''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/more/approach">Approach</a></li>
    <li><a href="#/more/criteria">Criteria</a></li>
    <li><a href="#/more/portfolio">Portfolio</a></li>
    <li><a href="#/more/team">Team</a></li>
    <li><a href="#/more/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>300 West Main Street, Suite 201<br>Charlottesville, Virginia</div>
    <div><span class="lab">Phone</span><br><a href="tel:+14349220726">(434) 922-0726</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Wacona Capital</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="Wacona Capital";\nvar PK="wac";')

# ---------------- content (waconacapital.com fetched 2026-11-20; Business Wire 2024-09-19 and 2026-07-30; Kirkland 2026-07; deal databases for prior-firm holdings) ----------------
reg('content', r'''var FONTS=['400 1em "Spectral"','italic 400 1em "Spectral"','400 1em "Public Sans"','500 1em "Public Sans"','600 1em "Josefin Sans"','400 1em "Josefin Sans"'];
var TEL="+14349220726",TELT="(434) 922-0726",MAIL="admin@waconacapital.com";
var SHEETS=[],GROUPS=[];
/* current Wacona investments: [name, description, detail, years, link label, link] */
var CURRENT=[
 ["Mid-Atlantic Power Specialists","Specialty electrical services, with a primary focus on data center clients in the Mid-Atlantic. Wacona’s inaugural investment, made in partnership with MAPS President Andrew Kuhlman.","Virginia · Recapitalization","2024 – present","Announcement","https://www.waconacapital.com/wacona-capital-announces-recapitalization-of-mid-atlantic-power-specialists"],
 ["Core States Group","Engineering, architectural and design services firm founded in 1999, supporting national multisite programs for Fortune 500 companies, with about 650 people across 24 offices.","Single-asset continuation vehicle","2026 – present","Announcement","https://www.businesswire.com/news/home/20260730435716/en/Wacona-Capital-Closes-%24210-Million-Continuation-Vehicle-of-Core-States-Group-Painswick-Capital-Serves-as-Lead-Investor"]
];
/* select prior experience of the team at predecessor firms (logos on waconacapital.com): [name, description, place] */
var PRIOR=[
 ["A&A Transfer","Industrial rigging, storage and hauling serving Washington, DC, Virginia and Maryland.","Mid-Atlantic"],
 ["Marianna Industries","Contract manufacturer of hair, skin and beauty products, founded in 1968.","Omaha, Nebraska"]
];
var NEWS=[
 {d:"2026-07-30",s:"Continuation vehicle",t:"Wacona Capital closes $210 million continuation vehicle of Core States Group; Painswick Capital serves as lead investor",u:"https://www.businesswire.com/news/home/20260730435716/en/Wacona-Capital-Closes-%24210-Million-Continuation-Vehicle-of-Core-States-Group-Painswick-Capital-Serves-as-Lead-Investor"},
 {d:"2025-06-25",s:"Firm",t:"Wacona announces move to new office location at 300 West Main Street, and the addition of a new team member",u:"https://www.waconacapital.com/wacona-announces-move-to-new-office-location-addition-of-new-team-member"},
 {d:"2024-10-21",s:"Investment",t:"Wacona Capital announces recapitalization of Mid-Atlantic Power Specialists, its inaugural investment",u:"https://www.waconacapital.com/wacona-capital-announces-recapitalization-of-mid-atlantic-power-specialists"},
 {d:"2024-09-19",s:"Financing",t:"Brightwood Capital partners with Wacona Capital to support acquisition of Mid-Atlantic Power Specialists",u:"https://www.businesswire.com/news/home/20240919352747/en/Brightwood-Capital-Partners-with-Wacona-Capital-to-Support-Acquisition-of-Mid-Atlantic-Power-Specialists"}
];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",criteria:"s-criteria",portfolio:"s-portfolio",team:"s-team",news:"s-news",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();
  if(typeof curKey!=="undefined"&&curKey!=="home"){navByClick=true;location.hash="#/";(function wait(n){if(curKey==="home"&&!busy){setTimeout(function(){var el=document.getElementById(SECS[k]);if(!el)return;var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));if(lenis)lenis.scrollTo(y,{duration:1.4});else window.scrollTo(0,y)},350);return}if(n<200)setTimeout(function(){wait(n+1)},50)})(0);return}
  var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function cur(){return '<ul class="pfc">'+CURRENT.map(function(c){return '<li><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><p class="mt"><span class="lab">'+esc(c[2])+'</span><span class="lab yr">'+esc(c[3])+'</span></p><div class="w"><a class="ul" href="'+c[5]+'" target="_blank" rel="noopener">'+c[4]+' '+ARR+'</a></div></li>'}).join("")+'</ul>'}
function prior(){return '<ul class="rlz">'+PRIOR.map(function(c){return '<li><h4>'+esc(c[0])+'</h4><span class="lab pl">'+esc(c[2])+'</span><p>'+esc(c[1])+'</p></li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private equity<span class="nomob"> · Charlottesville, Virginia</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Powering the</span><span class="l"><em>next chapter</em></span><span class="l">of growth.</span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>For founder and family owned businesses in the lower middle market: majority recapitalizations, growth capital and management buyouts of $20 to $100 million.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/portfolio">Our portfolio</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Wacona · pronounced way-koh-nuh</span>'+
   '<p class="txt" id="mani">Through strategic guidance and operational support, we collaborate with business leaders to develop a shared vision of success, and <em>a plan on how to get there.</em></p></div>'+
   '<div class="stats s4">'+
    '<div class="stat"><span class="ln2"></span><span class="v">$20–100M</span><span class="k">Transaction size, across the United States</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">2024</span><span class="k">Founded in Charlottesville, Virginia</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">15</span><span class="k">Years our Managing Partner spent at Harren Equity Partners</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$210M</span><span class="k">Continuation vehicle closed for Core States Group, 2026</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we partner</span><h2 class="d3">A shared vision, <em>and the route.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Partner</span><span>Plan</span><span>Grow</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Partner with the owners.</h2><p>We back leading founder and family owned companies in the lower middle market, through majority recapitalizations, growth capital and management buyouts across the United States.</p></article>'+
     '<article class="step"><h2>Plan the climb together.</h2><p>With strategic guidance and operational support, we work alongside business leaders to agree a shared vision of success, and a plan on how to get there.</p></article>'+
     '<article class="step"><h2>Reach the next chapter.</h2><p>Our first platform, Mid-Atlantic Power Specialists, serves data center clients across the Mid-Atlantic. In 2026 we closed a $210 million continuation vehicle to keep backing Core States Group.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Leading companies, <em>ready for more.</em></h2></div><p data-r>Wacona seeks opportunities to invest in businesses where we can leverage our depth of experience to provide our partners with the tools and resources necessary for the next chapter of growth.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Transaction size</dt><dd>$20 million to $100 million.</dd></div>'+
    '<div><dt class="lab">Structures</dt><dd>Majority recapitalizations, growth capital and management buyouts.</dd></div>'+
    '<div><dt class="lab">Partners</dt><dd>Leading founder and family owned companies in the lower middle market.</dd></div>'+
    '<div><dt class="lab">Geography</dt><dd>United States.</dd></div>'+
    '<div><dt class="lab">Add-ons</dt><dd>We are actively seeking new platform investments, as well as add-on opportunities on behalf of our portfolio companies.</dd></div>'+
   '</dl>'+
  '</div></section>'+

  '<section class="sec dark2" id="s-portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Partnerships, <em>in progress.</em></h2></div><p data-r>Investments currently managed by Wacona Capital, alongside select investments made by our team during their tenure with predecessor firms.</p></div>'+
   '<span class="lab sub-h" data-r>Wacona Capital</span>'+cur()+
   '<span class="lab sub-h" data-r>Select prior experience</span>'+prior()+
   '<p class="fn" data-r>Prior experience refers to co-investments undertaken by our team members during their tenure with predecessor firms. Shown for illustrative and informational purposes only, and not an indication of future performance.</p>'+
  '</div></section>'+

  '<section class="sec dark" id="s-team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Fifteen years in the <em>lower middle market.</em></h2></div><p data-r>For more information on the Wacona team, please contact us.</p></div>'+
   '<article class="tm1">'+
    '<div class="who" data-r><h3>C. Joel Carter</h3><p class="ttl">Managing Partner</p>'+
     '<p class="cn"><a class="ul" href="tel:+14349220388">(434) 922-0388</a><br><a class="ul" href="https://www.linkedin.com/in/joel-carter-81a15a17/" target="_blank" rel="noopener">LinkedIn</a></p></div>'+
    '<div class="bio">'+
     '<p class="lead" data-r>Joel founded Wacona in 2024 after fifteen years at Harren Equity Partners, most recently as a Partner and member of the firm’s Investment Committee, where he established and led Harren’s Industrial Services practice.</p>'+
     '<dl class="kv" data-r><div><dt class="lab">Boards</dt><dd>Core States Group · Mid-Atlantic Power Specialists</dd></div><div><dt class="lab">Earlier</dt><dd>Investment Banking Group, Merrill Lynch &amp; Co., New York</dd></div><div><dt class="lab">Education</dt><dd>B.S. Business Administration &amp; Accounting, Washington and Lee University</dd></div></dl>'+
     '<details data-r><summary>Background</summary><p>At Harren, Joel worked with several lower middle market businesses across a variety of industries. His responsibilities included managing all aspects of the deal execution process and actively monitoring investments, including serving on several boards.</p><p>Joel serves on the Vestry for Church of the Good Shepherd in Charlottesville, and coaches youth sports for Virginia Basketball Academy and McIntire Little League.</p></details>'+
    '</div>'+
   '</article>'+
  '</div></section>'+

  '<section class="sec dark2" id="s-news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">Recent <em>announcements.</em></h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For founders, families and intermediaries</span>'+
   '<h2 class="big split">Write the <em>next chapter.</em></h2>'+
   '<p class="sub" data-r>Considering a recapitalization, growth investment or management buyout? We would be glad to hear about your business.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Wacona '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Office</span><h3>Charlottesville, Virginia</h3><p>Wacona Capital, LLC<br>300 West Main Street, Suite 201<br>Charlottesville, VA 22903</p></div>'+
    '<div class="offs" data-r><div><span class="lab">General enquiries</span><b class="em"><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></b></div><div><span class="lab">C. Joel Carter · Managing Partner</span><b class="em"><a class="ul" href="tel:+14349220388">(434) 922-0388</a></b></div></div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c" data-r><span class="lab">Office</span>300 West Main Street, Suite 201<br>Charlottesville, VA 22903</div>'+
   '<div class="c" data-r><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c" data-r><span class="lab">Explore</span><a class="ul" href="#/more/approach">Approach</a><br><a class="ul" href="#/more/criteria">Criteria</a><br><a class="ul" href="#/more/portfolio">Portfolio</a><br><a class="ul" href="#/more/team">Team</a><br><a class="ul" href="#/more/news">News</a></div>'+
   '<div class="c" data-r><span class="lab">Focus</span>Founder and family owned businesses in the lower middle market, $20 million to $100 million.</div>'+
  '</div><svg class="bigsvg" data-r viewBox="0 0 640 50" aria-hidden="true"><text x="320" y="41" text-anchor="middle" style="font-family:\'Josefin Sans\',sans-serif;font-weight:600;font-size:46px;letter-spacing:.14em">WACONA CAPITAL</text></svg>'+
  '<div class="legal" data-r><span class="lab">© 2026 Wacona Capital, LLC</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
var MORE={approach:"Approach",criteria:"Criteria",portfolio:"Portfolio",team:"Team",news:"News"};
function vMore(k){
  return '<section class="ph-head more" data-field data-theme="dark">'+
   '<span class="lab eyebrow">Concept preview</span>'+
   '<h1 class="d1" id="pageTitle" tabindex="-1">'+MORE[k]+', <em>built out.</em></h1>'+
   '<p class="intro" data-r>This is a concept for the home page. If you like the direction, I’d build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/">Back to the home page '+ARR+'</a><a class="more-k ul" href="#/'+k+'">Or keep scrolling the concept</a></div>'+
  '</section>'+cta();
}
function route(h){var m=/^#\/more\/([a-z]+)$/.exec(h||"");if(m&&MORE[m[1]]){var k=m[1];return {k:"more-"+k,v:function(){return vMore(k)},t:MORE[k]+" — Wacona Capital",x:MORE[k]}}
  return {k:"home",v:vHome,t:"Wacona Capital — Lower middle-market private equity, Charlottesville, Virginia",x:"Home"}}''')

# ---------------- hero field: real photograph (Unsplash, licence allows commercial use without attribution) ----------------
import base64
HERO = base64.b64encode(open(os.path.join(K, 'home', 'waconacapital', 'hero.webp'), 'rb').read()).decode()
reg('field', r"""/* ================= HERO FIELD: a real photograph of the Blue Ridge at sunrise over a sea of valley fog, from
   Shenandoah National Park (Taylor Wright, unsplash.com/photos/U90aRaMeBjE; source recorded in the dossier). Graded to the
   firm's forest/sage palette at build time, drawn cover-fit with a slow Ken Burns drift and a softly breathing sun.
   No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false;
  var FX=.55,FY=.39;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  img.onload=function(){ok=true;frame(true)};img.src="data:image/webp;base64,__HERO__";
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!ok)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var mob=w<861,iw=img.naturalWidth,ih=img.naturalHeight,H=mob?h*.42:h;
    /* slow drift: a 50s breathing zoom with a gentle sideways travel, settling a touch as you scroll */
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/50)),sc=Math.max(w/iw,H/ih)*(1.04+.05*k)*(1+.03*SP.v);
    var dw=iw*sc,dh=ih*sc,fx=FX*dw,fy=FY*dh;
    var x=w*(mob?.5:.62)-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.012),y=H*.42-fy+SP.v*H*.04;
    x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* the sun breathes */
    var sx=x+fx,sy=y+fy,R=Math.min(w,H)*.12,pulse=.85+.15*Math.sin(t*.5);
    c.globalCompositeOperation="lighter";var g=c.createRadialGradient(sx,sy,0,sx,sy,R);g.addColorStop(0,"rgba(255,236,190,"+(.1*pulse).toFixed(3)+")");g.addColorStop(1,"rgba(255,226,170,0)");c.fillStyle=g;c.fillRect(sx-R,sy-R,R*2,R*2);
    c.globalCompositeOperation="source-over";
    /* legibility: a dark forest scrim from the left behind the copy, and a band behind the header; the sunrise stays warm on the right */
    if(!mob){var lg=c.createLinearGradient(0,0,w,0);lg.addColorStop(0,"rgba(14,22,18,.9)");lg.addColorStop(.3,"rgba(14,22,18,.78)");lg.addColorStop(.48,"rgba(14,22,18,.48)");lg.addColorStop(.62,"rgba(14,22,18,.14)");lg.addColorStop(.75,"rgba(14,22,18,0)");c.fillStyle=lg;c.fillRect(0,0,w,H)}
    var tb=c.createLinearGradient(0,0,0,mob?120:170);tb.addColorStop(0,"rgba(14,22,18,.78)");tb.addColorStop(1,"rgba(14,22,18,0)");c.fillStyle=tb;c.fillRect(0,0,w,mob?120:170);
    /* fade into the page ink below the photo on phones */
    if(mob){var fg=c.createLinearGradient(0,H*.7,0,H);fg.addColorStop(0,"rgba(18,26,22,0)");fg.addColorStop(1,"rgba(18,26,22,1)");c.fillStyle=fg;c.fillRect(0,H*.7-1,w,H*.3+2);c.fillStyle="#121a16";c.fillRect(0,H-1,w,h-H+2)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return [w*.62,h*.42]}};
})();""".replace("__HERO__", HERO))

# ---------------- story: an engraved Blue Ridge panorama with a trail: partner / plan / grow ----------------
reg('story', r'''/* the story scene: the same ridges as the hero, engraved in fine line. A faint ghost of the whole view is always there.
   Step 1 the valley farm inks in (founder and family owned businesses; the three deal structures). Step 2 the trail is
   plotted up the mountain, waypoint by waypoint (strategic guidance, operational support, a shared plan). Step 3 the ridges
   ink in, the sun clears the far ridge and both summits light in the accent: MAPS (2024) and Core States Group (2026 CV). */
var BR=(function(){
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function gs(x,c,wd){return Math.exp(-Math.pow((x-c)/wd,2))}
  var F=[
    function(x){return 200-60*gs(x,300,220)-40*gs(x,760,120)+4*Math.sin(x/37)+2*Math.sin(x/13)},
    function(x){return 320-170*gs(x,690,190)-60*gs(x,220,180)+5*Math.sin(x/41+1)+2*Math.sin(x/11)},
    function(x){return 420-205*gs(x,540,260)-30*gs(x,150,120)+4*Math.sin(x/29+2)+1.5*Math.sin(x/9)}
  ];
  var RID=F.map(function(f){var P=[];for(var x=0;x<=800;x+=8)P.push([x,f(x)]);return P});
  /* hatching: short slanted strokes under each ridge, on the slopes facing away from the sun */
  var R=rng(2024),HATCH=F.map(function(f,k){var H=[];for(var x=6;x<800;x+=k===2?7:9){var sl=f(x+4)-f(x-4);if(sl<-1.5)continue;var n=k===2?3:2;for(var j=0;j<n;j++){var y=f(x)+6+j*9+R()*5,l=7+R()*5;H.push([x,y,x+l*.5,y+l])}}return H});
  var TRAIL=[[196,462],[300,444],[250,412],[384,392],[330,362],[468,332],[512,280],[540,F[2](540)+2]];
  return {F:F,RID:RID,HATCH:HATCH,TRAIL:TRAIL};
})();
function ridgeSVG(mob){
  var s=mob?.5:1,oy=mob?58:0;
  function X(x){return (x*s).toFixed(1)}function Y(y){return (y*s+oy).toFixed(1)}
  function pl(P){return P.map(function(p,i){return (i?'L':'M')+X(p[0])+' '+Y(p[1])}).join('')}
  var bot=Y(580);
  function view(){var o='';
    function PP(c,d,x){return '<path class="g '+c+'" d="'+d+'"'+(x||'')+'/><path class="i '+c+'" d="'+d+'"'+(x||'')+'/>'}
    o+='<g class="sun i"><circle cx="'+X(382)+'" cy="'+Y(152)+'" r="'+(24*s).toFixed(1)+'"/>'+[-150,-120,-90,-60,-30,0,-180].map(function(a){var r=a*Math.PI/180;return '<path d="M'+X(382+Math.cos(r)*34)+' '+Y(152+Math.sin(r)*34)+'L'+X(382+Math.cos(r)*50)+' '+Y(152+Math.sin(r)*50)+'"/>'}).join('')+'</g>';
    BR.RID.forEach(function(P,k){o+='<path class="fl" d="'+pl(P)+'L'+X(800)+' '+bot+'L'+X(0)+' '+bot+'Z"/>'+
      PP('rd r'+k,pl(P))+'<path class="i ht h'+k+'" d="'+BR.HATCH[k].map(function(q){return 'M'+X(q[0])+' '+Y(q[1])+'L'+X(q[2])+' '+Y(q[3])}).join('')+'"/>'});
    /* the valley: field rows running toward the foot of the mountain, a fence, the farmstead */
    var rows='';for(var i=-6;i<=12;i++){var x0=400+i*70,x1=400+i*14;rows+='M'+X(x0)+' '+Y(580)+'L'+X(x1+(x0-x1)*.18)+' '+Y(452)}
    o+='<path class="fl" d="M'+X(0)+' '+Y(440)+'L'+X(800)+' '+Y(440)+'L'+X(800)+' '+bot+'L'+X(0)+' '+bot+'Z"/>';
    o+=PP('vl','M'+X(0)+' '+Y(442)+'C'+X(240)+' '+Y(452)+' '+X(560)+' '+Y(436)+' '+X(800)+' '+Y(446));
    o+=PP('fr',rows,' clip-path="url(#vclip'+(mob?'m':'')+')"');
    var fence='M'+X(20)+' '+Y(500)+'L'+X(330)+' '+Y(488);for(var f=20;f<=330;f+=22){var fy=500-(f-20)*12/310;fence+='M'+X(f)+' '+Y(fy)+'L'+X(f)+' '+Y(fy-9)}
    o+=PP('fe',fence);
    /* farmhouse with chimney, barn with gambrel roof, silo, two trees */
    o+=PP('fm','M'+X(150)+' '+Y(478)+'V'+Y(458)+'L'+X(170)+' '+Y(444)+'L'+X(190)+' '+Y(458)+'V'+Y(478)+'ZM'+X(176)+' '+Y(449)+'V'+Y(440)+'H'+X(182)+'V'+Y(453)+'M'+X(158)+' '+Y(478)+'V'+Y(466)+'H'+X(166)+'V'+Y(478)+'M'+X(174)+' '+Y(462)+'H'+X(184)+'V'+Y(470)+'H'+X(174)+'Z'+
      'M'+X(204)+' '+Y(478)+'V'+Y(456)+'L'+X(210)+' '+Y(446)+'L'+X(226)+' '+Y(440)+'L'+X(242)+' '+Y(446)+'L'+X(248)+' '+Y(456)+'V'+Y(478)+'ZM'+X(218)+' '+Y(478)+'V'+Y(462)+'H'+X(234)+'V'+Y(478)+'M'+X(218)+' '+Y(462)+'L'+X(234)+' '+Y(478)+'M'+X(234)+' '+Y(462)+'L'+X(218)+' '+Y(478)+
      'M'+X(254)+' '+Y(478)+'V'+Y(436)+'Q'+X(261)+' '+Y(428)+' '+X(268)+' '+Y(436)+'V'+Y(478)+'M'+X(254)+' '+Y(448)+'H'+X(268)+'M'+X(254)+' '+Y(462)+'H'+X(268)+
      'M'+X(122)+' '+Y(478)+'V'+Y(462)+'M'+X(122)+' '+Y(464)+'C'+X(106)+' '+Y(462)+' '+X(106)+' '+Y(440)+' '+X(122)+' '+Y(438)+'C'+X(138)+' '+Y(440)+' '+X(138)+' '+Y(462)+' '+X(122)+' '+Y(464)+
      'M'+X(286)+' '+Y(476)+'V'+Y(464)+'M'+X(286)+' '+Y(466)+'C'+X(274)+' '+Y(464)+' '+X(275)+' '+Y(448)+' '+X(286)+' '+Y(446)+'C'+X(297)+' '+Y(448)+' '+X(298)+' '+Y(464)+' '+X(286)+' '+Y(466));
    o+=PP('tr',pl(BR.TRAIL));
    o+=BR.TRAIL.slice(1,-1).map(function(p,i){return i%2?'':'<circle class="i wp" cx="'+X(p[0])+'" cy="'+Y(p[1])+'" r="'+(mob?2.5:3.5)+'"/>'}).join('');
    o+='<g class="i pk"><circle cx="'+X(540)+'" cy="'+Y(BR.F[2](540))+'" r="'+(mob?3:4.5)+'"/><circle cx="'+X(690)+'" cy="'+Y(BR.F[1](690))+'" r="'+(mob?3:4.5)+'"/></g>';
    return o}
  /* labels: [text, x, y, anchor, leader target [x,y] (story space) or null, step] */
  var p1=[540,BR.F[2](540)],p2=[690,BR.F[1](690)];
  var LB=mob?[
    ["FOUNDER & FAMILY OWNED",200,362,"middle",null,1],["MAJORITY RECAPITALIZATIONS",200,382,"middle",null,1],["GROWTH CAPITAL · MANAGEMENT BUYOUTS",200,402,"middle",null,1],
    ["STRATEGIC GUIDANCE",200,362,"middle",null,2],["OPERATIONAL SUPPORT",200,382,"middle",null,2],["A SHARED PLAN",200,402,"middle",null,2],
    ["CORE STATES GROUP · 2026",200,20,"middle",null,3],["MID-ATLANTIC POWER SPECIALISTS · 2024",200,40,"middle",null,3],["$210M CONTINUATION VEHICLE",200,382,"middle",null,3]
  ]:[
    ["FOUNDER & FAMILY OWNED",40,556,"start",[170,478],1],["MAJORITY RECAPITALIZATIONS",780,516,"end",null,1],["GROWTH CAPITAL",780,540,"end",null,1],["MANAGEMENT BUYOUTS",780,564,"end",null,1],
    ["STRATEGIC GUIDANCE",236,404,"end",BR.TRAIL[2],2],["A SHARED PLAN",316,354,"end",BR.TRAIL[4],2],["OPERATIONAL SUPPORT",484,336,"start",BR.TRAIL[5],2],
    ["MAPS · 2024",540,190,"middle",p1,3],["CORE STATES · 2026",792,100,"end",p2,3],["$210M CONTINUATION VEHICLE",792,120,"end",null,3]
  ];
  var labs=LB.map(function(l){var o='<g class="lb s'+l[5]+'">';
    if(l[4]){var px=l[4][0],py=l[4][1],ex,ey;
      if(l[5]===1){ex=px;ey=py+6;o+='<path class="ld" d="M'+px+' '+(py+4)+'L'+px+' '+(l[2]-16)+'L'+(l[1]+6)+' '+(l[2]-16)+'"/>'}
      else if(l[5]===2){o+='<path class="ld" d="M'+(px+(l[3]==="end"?-6:6))+' '+py.toFixed(1)+'L'+(l[1]+(l[3]==="end"?6:-6))+' '+(l[2]-4)+'"/>'}
      else if(l[3]==="middle"){o+='<path class="ld" d="M'+px+' '+(py-7).toFixed(1)+'L'+px+' '+(l[2]+6)+'"/>'}
      else{o+='<path class="ld" d="M'+px+' '+(py-7).toFixed(1)+'L'+px+' '+(l[2]+30)+'L'+(l[1]-120)+' '+(l[2]+30)+'"/>'}}
    return o+'<text x="'+l[1]+'" y="'+l[2]+'" text-anchor="'+l[3]+'" class="w">'+l[0]+'</text></g>'}).join("");
  return '<svg'+(mob?' class="mob"':'')+' viewBox="'+(mob?'0 0 400 412':'0 0 800 580')+'" aria-hidden="true"><defs><clipPath id="vclip'+(mob?'m':'')+'"><rect x="0" y="'+Y(440)+'" width="'+X(800)+'" height="'+(140*s).toFixed(1)+'"/></clipPath></defs>'+view()+labs+'</svg>';
}
function scene(){return ridgeSVG(MOBILE())}
function storyDraw(svg){
  function I(c){return $$(".i."+c,svg)}
  var E={vl:I("vl"),fr:I("fr"),fe:I("fe"),fm:I("fm"),tr:I("tr"),rd:I("rd"),ht:I("ht"),wp:I("wp"),pk:$(".i.pk",svg),sun:$(".i.sun",svg),
    l1:$$(".lb.s1",svg),l2:$$(".lb.s2",svg),l3:$$(".lb.s3",svg)};
  function prep(list){return list.map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return L})}
  var LL={};["vl","fr","fe","fm","tr","rd"].forEach(function(k){LL[k]=prep(E[k])});
  function draw(k,s){E[k].forEach(function(p,i){p.style.strokeDashoffset=(LL[k][i]*(1-s)).toFixed(1)})}
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!svg.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.36,.56),s3=seg(p,.7,.9),o1=s1*(1-seg(p,.3,.36)),o2=s2*(1-seg(p,.64,.7));
    svg.style.setProperty("--gh",(b*(1-.45*s3)).toFixed(3));svg.style.setProperty("--ib",b.toFixed(3));
    draw("vl",s1);draw("fr",s1);draw("fe",s1);draw("fm",s1);
    draw("tr",s2);E.wp.forEach(function(c,i){c.style.opacity=(b*seg(s2,.2+i*.25,.4+i*.25)).toFixed(3)});
    E.rd.forEach(function(r,i){var q=i===2?s2:seg(s3,i*.25,.6+i*.2);r.style.strokeDashoffset=(LL.rd[i]*(1-q)).toFixed(1)});
    E.ht.forEach(function(t,i){t.style.opacity=(b*(i===2?seg(s2,.5,1):seg(s3,.3+i*.15,.7+i*.1))).toFixed(3)});
    E.sun.style.opacity=(b*seg(s3,.4,1)).toFixed(3);E.pk.style.opacity=(b*seg(s3,.6,1)).toFixed(3);
    show(E.l1,b*o1);show(E.l2,b*o2);show(E.l3,b*s3);
  };
}''')

reg('scenecss', r'''/* story (pinned, one continuous scene) */
.story{background:var(--ink2);padding:0;overflow:hidden}
.story-pin{height:100vh;height:100svh;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:var(--gap);align-items:center;padding:80px var(--side) 64px;position:relative}
.story-l{position:relative;align-self:center}
.story-l .kick{margin-bottom:18px}
.story-l .d3{margin-bottom:clamp(26px,3.4vh,44px);max-width:12ch}
.rail{display:flex;margin-bottom:clamp(22px,3vh,36px);position:relative}
.rail::before{content:"";position:absolute;left:0;right:0;top:4px;height:1px;background:var(--hair)}
.rail .prog{position:absolute;left:0;right:0;top:4px;height:1px;background:var(--accL);transform-origin:left;transform:scaleX(0)}
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#a2ada6;transition:color .35s var(--eo)}
.rail span::before{content:"";position:absolute;left:0;top:0;width:9px;height:9px;border-radius:0;background:var(--ink2);border:1px solid #63736a;transition:background .35s,border-color .35s}
.rail span.on{color:var(--bone)}
.rail span:last-child{flex:0 0 auto;text-align:right}
.rail span:last-child::before{left:auto;right:0}
.rail span.done::before,.rail span.on::before{background:var(--accL);border-color:var(--accL)}
.steps{position:relative;min-height:clamp(230px,31vh,310px)}
.step{position:absolute;left:0;top:0;right:0;opacity:0;visibility:hidden}
.step.on{opacity:1;visibility:visible}
.step h3,.step h2{font-family:var(--disp);font-weight:400;font-size:clamp(28px,2.4vw,40px);line-height:1.1;letter-spacing:-.015em;margin:0 0 16px}
.step p{color:rgba(var(--boner),.8);max-width:44ch;margin:0;font-size:16px}
.story-r{position:relative;height:min(74vh,680px);align-self:center}
.scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.scene svg{width:100%;height:100%;overflow:visible}
.scene .g{fill:none;stroke:rgba(var(--boner),.2);stroke-width:1!important;opacity:var(--gh,0)}
.scene .fl{fill:var(--ink2);stroke:none}
.scene .i{opacity:var(--ib,0)}
.scene path.i{fill:none;stroke:rgba(var(--boner),.82);stroke-linecap:round;stroke-linejoin:round}
.scene .i.rd{stroke-width:1.4}.scene .i.r0{stroke:rgba(var(--boner),.45)}.scene .i.r1{stroke:rgba(var(--boner),.62)}
.scene .i.ht{stroke:rgba(var(--boner),.28);stroke-width:1;opacity:0}
.scene .i.vl{stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .i.fr{stroke:rgba(var(--boner),.24);stroke-width:1}
.scene .i.fe{stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .i.fm{stroke-width:1.2}
.scene .i.tr{stroke:var(--accL);stroke-width:1.6}
.scene .i.wp{fill:var(--ink2);stroke:var(--accL);stroke-width:1.4;opacity:0}
.scene .pk circle{fill:var(--accL)}.scene .i.pk{opacity:0}
.scene .i.sun{opacity:0}.scene .sun circle{fill:rgba(var(--accr),.12);stroke:var(--accL);stroke-width:1.2}.scene .sun path{fill:none;stroke:var(--accL);stroke-width:1.2}
.scene .ld{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .s3 .ld{stroke:var(--accL)}
.scene text{font-family:var(--mono);font-weight:600;font-size:12.5px;letter-spacing:.14em;fill:#b9c2bc;paint-order:stroke;stroke:var(--ink2);stroke-width:5px;stroke-linejoin:round}
.scene text.w{fill:var(--bone)}
.scene .s3 text.w{fill:var(--accL)}
.scene .lb{opacity:0}''')

src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(18,26,22,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a2ada6}.rail span::before{background:var(--ink2);border-color:#63736a}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#b9c2bc}')
src = src.replace('font-weight:300', 'font-weight:400').replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */', '/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== Wacona Capital: Blue Ridge dawn ground, bone pages, the sage and forest of their mark ===== */
.d1,.d2,.d3,.lede,.mani .txt,.cta .big,.stat .v{font-weight:400}
.d1{letter-spacing:-.02em}.hero-h{font-size:clamp(50px,7vw,130px);letter-spacing:-.025em;line-height:.98}
.d2{letter-spacing:-.02em}.d3{letter-spacing:-.016em}.mani .txt{letter-spacing:-.016em}.cta .big{letter-spacing:-.028em}.stat .v{letter-spacing:-.03em}
.lab{font-family:var(--mono);font-weight:600;letter-spacing:.16em}
#pre .mk path{fill:none;stroke:var(--accL);stroke-width:.6}
#pre .wm{font-family:var(--mono);font-weight:600;letter-spacing:.2em;color:var(--bone)}
.hero .eyebrow{color:var(--accL)}
.btn{border-radius:0}.btn.solid{color:var(--ink)}.btn.solid:hover{color:var(--ink)}
.light .btn.solid{color:var(--bone)}
.ftr .bigsvg{color:var(--bone)}
.ftr .fcv{opacity:.2!important}
.stats.s4{grid-template-columns:repeat(4,minmax(0,1fr))}
.stats.s4 .stat .v{font-size:clamp(44px,4.4vw,84px);white-space:nowrap}
@media (max-width:1024px){.stats.s4{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:48px}}
@media (max-width:480px){.stats.s4 .stat .v{font-size:clamp(34px,10vw,44px)}}
.light .kick{color:var(--acc)}
.sub-h{display:block;margin:0 0 18px;color:var(--accL)}
/* current investments: DH rule draws across on hover */
.pfc{list-style:none;margin:0 0 clamp(64px,7vw,110px);padding:0;border-top:1px solid var(--hair)}
.pfc li{display:grid;grid-template-columns:minmax(0,3.4fr) minmax(0,5fr) minmax(0,2.6fr) minmax(0,1.5fr);column-gap:var(--gap);align-items:center;padding:14px 0;border-bottom:1px solid var(--hair);position:relative}
.pfc li::after,.rlz li::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:right;transition:transform .45s cubic-bezier(.22,.61,.36,1);pointer-events:none}
.pfc li:hover::after,.rlz li:hover::after{transform:scaleX(1);transform-origin:left}
.pfc h3{font-family:var(--disp);font-weight:400;font-size:clamp(26px,2.2vw,36px);line-height:1.08;letter-spacing:-.02em;margin:0;transition:color .3s}
.pfc li:hover h3{color:var(--accL)}
.pfc p{margin:0;font-size:16px;line-height:1.55;color:var(--stone)}
.pfc .mt .lab{display:block}.pfc .mt .yr{opacity:.8;margin-top:6px}
.pfc .w{justify-self:end}
.pfc .w a{font:600 11.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;display:inline-flex;gap:10px;align-items:center;padding:10px 0}
.pfc .w svg{width:14px;height:10px;transition:transform .3s var(--eo)}
.pfc .w a:hover svg{transform:translateX(4px)}
@media (max-width:860px){.pfc li{grid-template-columns:1fr;row-gap:8px}.pfc .w{justify-self:start}}
.rlz{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:clamp(28px,4vw,64px);border-top:1px solid var(--hair)}
.rlz li{display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:16px;row-gap:6px;align-items:baseline;padding:20px 0;border-bottom:1px solid var(--hair);position:relative}
.rlz h4{font-family:var(--disp);font-weight:400;font-size:clamp(22px,1.7vw,27px);line-height:1.2;letter-spacing:-.01em;margin:0;transition:color .3s}
.rlz li:hover h4{color:var(--accL)}
.rlz p{grid-column:1/3;margin:0;font-size:15px;line-height:1.5;color:var(--stone)}
.rlz .pl{color:var(--stone);text-align:right;white-space:nowrap}
@media (max-width:960px){.rlz{grid-template-columns:1fr}}
.fn{margin:28px 0 0;max-width:80ch;font-size:13px;line-height:1.6;color:rgba(var(--boner),.56)}
/* team: one partner, text-only, inline expand */
.tm1{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);column-gap:var(--gap);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hair)}
.tm1 h3{font-family:var(--disp);font-weight:400;font-size:clamp(36px,3.4vw,56px);line-height:1.06;letter-spacing:-.02em;margin:0 0 12px}
.tm1 .ttl{font:600 12px/1.4 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--accL);margin:0 0 22px}
.tm1 .cn{margin:0;font-size:15px;line-height:1.9}
.tm1 .cn a{color:var(--bone)}
.tm1 .lead{font-family:var(--disp);font-size:clamp(21px,1.75vw,27px);line-height:1.4;letter-spacing:-.01em;margin:0 0 28px;color:var(--bone)}
.kv{margin:0 0 8px}
.kv>div{display:grid;grid-template-columns:8.5em minmax(0,1fr);gap:var(--gap);padding:14px 0;border-top:1px solid var(--hair);align-items:baseline}
.kv dt{color:var(--stone)}.kv dd{margin:0;font-size:15.5px;line-height:1.5;color:rgba(var(--boner),.88)}
.tm1 details{border-top:1px solid var(--hair);border-bottom:1px solid var(--hair)}
.tm1 summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:16px 0;font:600 12px/1 var(--mono);letter-spacing:.16em;text-transform:uppercase}
.tm1 summary::-webkit-details-marker{display:none}
.tm1 summary::after{content:"+";font-size:18px;line-height:1;color:var(--accL);transition:transform .3s var(--eo)}
.tm1 details[open] summary::after{transform:rotate(45deg)}
.tm1 details p{font-size:15px;line-height:1.65;color:var(--stone);margin:0 0 14px;max-width:62ch}
@media (max-width:860px){.tm1{grid-template-columns:1fr;row-gap:28px}.kv>div{grid-template-columns:1fr;gap:4px}}
.more .intro{font-size:clamp(17px,1.35vw,20px);line-height:1.6;color:rgba(var(--boner),.86)}
.more .act{display:flex;flex-wrap:wrap;align-items:center;gap:22px 30px;margin-top:clamp(30px,3.4vw,48px)}
.more .more-k{font:600 12px/1 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:rgba(var(--boner),.78);padding:12px 0}
.more .more-k:hover{color:var(--accL)}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD)}
.cta .addr h3{margin-top:12px}
.cta>.wrap>.cx{grid-column:1/-1}
.cta .offs{margin-top:0;grid-template-columns:1fr 1fr}
@media (max-width:640px){.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:46vh;height:46svh}.scene svg.mob text{font-size:11.5px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = re.findall(r'(?i)firelight|fort lauderdale|rick@|charter oak', src)
open(os.path.join(K, 'src', 'waconacapital.src.html'), 'w', encoding='utf-8').write(src)
print('wrote src; leftovers:', len(leftover), set(leftover))
