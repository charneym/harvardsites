#!/usr/bin/env python3
"""Assemble _kit/src/charteroak-equity.src.html from the firelight engine regions (HOME-ONLY format).
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

INK = '#0f1b16'
LEAF = 'M12 2C13.6 3 14.1 4.4 13.5 5.7C15.3 5 16.8 5.9 16.5 7.5C15.9 8.5 15 8.9 14.3 9.1C16.1 8.9 18 9.6 17.8 11.5C17 12.7 15.6 12.9 14.6 12.9C16 13.5 17 14.9 16.2 16.3C15 16.9 13.7 16.3 13 15.7L12.5 19.2V22H11.5V19.2L11 15.7C10.3 16.3 9 16.9 7.8 16.3C7 14.9 8 13.5 9.4 12.9C8.4 12.9 7 12.7 6.2 11.5C6 9.6 7.9 8.9 9.7 9.1C9 8.9 8.1 8.5 7.5 7.5C7.2 5.9 8.7 5 10.5 5.7C9.9 4.4 10.4 3 12 2Z'
MARK = ('<svg class="mark" viewBox="0 0 48 48" aria-hidden="true"><path class="ring" d="M40.5 12.5A20.5 20.5 0 1 0 40.5 35.5" fill="none" stroke-width="3.2"/>'
        '<circle class="disc" cx="24" cy="24" r="15.5"/><g transform="translate(13.2 12.4) scale(.9)"><path class="leaf" d="' + LEAF + '"/></g></svg>')

reg('meta', '''<title>Charter Oak Equity — Lower middle-market private equity, Westport, Connecticut</title>
<meta name="description" content="Charter Oak Equity and its predecessor funds have invested in private equity since 1992, making control-oriented investments in niche manufacturing, packaging, medical, specialty chemical, consumer and financial services companies up to $150 million in enterprise value.">
<meta name="theme-color" content="#0f1b16">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%230f1b16'/%3E%3Cpath d='M40.5 12.5A20.5 20.5 0 1 0 40.5 35.5' fill='none' stroke='%234fae82' stroke-width='3.2'/%3E%3Ccircle cx='24' cy='24' r='15.5' fill='%23231f20'/%3E%3Cg transform='translate(13.2 12.4) scale(.9)'%3E%3Cpath fill='%23f2f1ec' d='M12 2C13.6 3 14.1 4.4 13.5 5.7C15.3 5 16.8 5.9 16.5 7.5C15.9 8.5 15 8.9 14.3 9.1C16.1 8.9 18 9.6 17.8 11.5C17 12.7 15.6 12.9 14.6 12.9C16 13.5 17 14.9 16.2 16.3C15 16.9 13.7 16.3 13 15.7L12.5 19.2V22H11.5V19.2L11 15.7C10.3 16.3 9 16.9 7.8 16.3C7 14.9 8 13.5 9.4 12.9C8.4 12.9 7 12.7 6.2 11.5C6 9.6 7.9 8.9 9.7 9.1C9 8.9 8.1 8.5 7.5 7.5C7.2 5.9 8.7 5 10.5 5.7C9.9 4.4 10.4 3 12 2Z'/%3E%3C/g%3E%3C/svg%3E">''')

reg('fonts', "/*@fonts Newsreader:400,400i; Hanken Grotesk:400,500,600*/")
reg('root', ''':root{
  --ink:#0f1b16;--inkr:15,27,22;--boner:242,241,236;--accr:79,174,130;--ink2:#13231c;--ink3:#1b2e25;--deep:#0a130f;
  --bone:#f2f1ec;--bone2:#e8e7e0;--bone3:#dcdbd2;
  --stone:#a7b2ab;--stoneD:#4a5751;
  --acc:#006940;--accL:#4fae82;--accD:#006940;
  --hair:rgba(242,241,236,.14);--hairD:rgba(15,27,22,.16);
  --disp:'Newsreader',Georgia,'Times New Roman',serif;
  --serif:'Newsreader',Georgia,serif;
  --sans:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'Hanken Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}''')
reg('fieldbg', '''.fieldbg{position:fixed;inset:0;z-index:0;background:linear-gradient(180deg,#0b1612 0%,#16302a 38%,#56614a 62%,#2a3a2c 70%,#101d16 84%,#0f1b16 100%)}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}''')
reg('logocss', '''.brand{display:flex;align-items:center;gap:12px;height:56px;color:var(--bone)}
.brand svg.mark{width:38px;height:38px;flex:none;overflow:visible}
.mark .ring{stroke:var(--accL)}.mark .disc{fill:#231f20;stroke:rgba(242,241,236,.18);stroke-width:.8}.mark .leaf{fill:var(--bone)}
.brand .wt{font:500 19px/1 var(--sans);letter-spacing:.005em;color:var(--bone);white-space:nowrap}
@media (max-width:420px){.brand .wt{font-size:17px}.brand svg.mark{width:34px;height:34px}}''')

reg('seen', '<script>try{if(sessionStorage.getItem("coe-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>')
reg('pre', '''<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 24 24"><path d="''' + LEAF + '''"/></svg>
    <div class="wm"><span>CHARTER OAK</span></div>
  </div>
  <span class="lab pl">Private equity · Westport, Connecticut</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>''')
ARRS = '<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
reg('brand', '<a href="#/" class="brand" id="brand" aria-label="Charter Oak Equity, home">' + MARK + '<span class="wt">Charter Oak Equity</span></a>')
reg('navmenu', '''<nav class="nav" aria-label="Primary">
    <a class="nl ul" href="#/approach">Approach</a>
    <a class="nl ul" href="#/criteria">Criteria</a>
    <a class="nl ul" href="#/portfolio">Portfolio</a>
    <a class="nl ul" href="#/team">Team</a>
    <a class="nl ul" href="#/news">News</a>
    <a class="btn" href="#/contact">Contact ''' + ARRS + '''</a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
    <li><a href="#/approach">Approach</a></li>
    <li><a href="#/criteria">Criteria</a></li>
    <li><a href="#/portfolio">Portfolio</a></li>
    <li><a href="#/team">Team</a></li>
    <li><a href="#/news">News</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">Office</span><br>Westport, Connecticut</div>
    <div><span class="lab">Phone</span><br><a href="tel:+12032214752">(203) 221-4752</a></div>
  </div>
</div>''')
reg('xc', '''<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">Charter Oak Equity</span><div class="t" id="xtt"></div></div>''')
reg('site', 'var SITE="Charter Oak Equity";\nvar PK="coe";')

# ---------------- content (all from charteroak-equity.com, fetched 2026-11-19) ----------------
reg('content', r'''var FONTS=['400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"'];
var TEL="+12032214752",TELT="(203) 221-4752",MAIL="proughan@charteroak-equity.com";
var SHEETS=[],GROUPS=[];
var PH="https://www.charteroak-equity.com/site/assets/files/1221/";
/* [name, title, photo, email, summary, background] (charteroak-equity.com/team and /contact) */
var TEAM=[
 ["Paul Roughan","Managing Partner",PH+"paul-roughan.jpg","proughan@charteroak-equity.com",
  "Founded Charter Oak Equity in 2006, after joining Charter Oak Capital Partners in 1999 as an Operating Principal. Serves on the boards of CGA Holdings and LicaFlex.",
  "Before Charter Oak, Paul spent five years on two turnaround assignments, including one as CEO; five years with McKinsey & Co. specializing in operations improvement and merger integration; and eleven years with GE, where he began his career, in operating roles with GE Plastics and GE Corporate. BS Chemical Engineering and MBA Operations Research, Rensselaer Polytechnic Institute."],
 ["Zubin Avari","Managing Partner",PH+"zubin-avarii.jpg","zavari@charteroak-equity.com",
  "With Charter Oak Equity and its predecessor fund since 1998. Serves on the board of LicaFlex and is a member of the Financial Accounting Standards Board’s Private Company Council.",
  "Zubin has served in operational roles at portfolio companies, including executive chairman and interim CFO. Before Charter Oak he spent three years at Crowe Chizek (now Crowe Horwath) as a CPA in its audit, tax and mergers and acquisitions departments. B.S. in Accounting, magna cum laude, Illinois Wesleyan University."],
 ["Mark Ullman","Managing Partner",PH+"mark-ullman.jpg","mullman@charteroak-equity.com",
  "Joined Charter Oak Equity in 2006 as a General Partner. Has led or co-led investments in CGA Holdings, ChemRes, Smart Tuition, Smartcare, ShelterLogic and EiKO Global, among others.",
  "Mark spent the bulk of his career with McKinsey & Co., most recently as a Senior Partner. Over seventeen years he worked with a wide variety of industrial and healthcare companies, founded McKinsey’s Medical Device and Private Equity Practices, and led the New York-based Corporate Finance Practice. BS in Operations Research and MBA, both with Distinction, Cornell University."],
 ["Doni Perl","Principal",PH+"doni-pearl.jpg","dperl@charteroak-equity.com",
  "Joined Charter Oak Equity in 2017. Serves on the board of CGA Holdings, and previously served on the board of ChemRes.",
  "Before Charter Oak, Doni spent four years at Quadrangle Group, investing in the communications and media sectors, and two years with Sanabe & Associates, an investment banking boutique providing M&A, restructuring and strategic advice in building products, paper and packaging, and renewable energy."]
];
/* [name, industry focus, relevant experience] (charteroak-equity.com/advisors) */
var ADVISORS=[
 ["David Charles","Metals · General industrial","CEO, Revere Industries; SVP, Aleris International"],
 ["Larry Derose","Medical devices · Medical engineering","Co-founder, Cirtec Medical; co-founder and President, Advastim and EBTEC Corp."],
 ["Jeffrey Hoos, DMD","Dental","President, Novadent"],
 ["Jerry Lundquist","Aerospace · Defense","Senior Partner Emeritus, McKinsey & Co.; former head of its Global Aerospace & Defense Practice"],
 ["John Margherio","Chemicals","President, Hunt Imaging; VP, Arch Chemicals"],
 ["Mike Miller","Medical devices · Metal processing","CEO, Orchid Orthopedics; CEO, Stealth Medical"]
];
/* current investments: [name, description, place, years, site] */
var CURRENT=[
 ["MP Design","Award-winning architecture, engineering and surveying firm serving clients across the Southeast United States.","Biloxi, Mississippi","2026 – present","https://www.mpdesigngroup.us/"],
 ["CGA Holdings","Operates nurse registries and home health agencies serving the senior population in Florida.","Boca Raton, Florida","2022 – present","https://www.cga-holdings.com/"],
 ["LicaFlex Packaging","Extruder and printer of flexible packaging solutions serving the food and beverage sectors.","Saint-Laurent, Quebec","2018 – present","https://www.licaflex.com/"]
];
/* realized: [name, description, place, years] */
var REALIZED=[
 ["Seaboard Folding Box","Paperboard boxes for the specialty food and pharmacy markets.","Fitchburg, MA","2014 – 2022"],
 ["ChemRes","Compounder and distributor of high-performance specialty polymers.","Princeton, NJ","2019 – 2021"],
 ["Smartcare","SaaS billing and daycare center management tools.","Las Vegas, NV","2016 – 2020"],
 ["EiKO Global","Distributor and marketer of lighting products.","Kansas City, KS","2013 – 2018"],
 ["ShelterLogic","Manufacturer of outdoor canopies and garage shelters.","Watertown, CT","2011 – 2018"],
 ["Brook & Whittle","Pressure-sensitive and shrink sleeve labels for consumer products.","North Branford, CT","2009 – 2017"],
 ["Cirtec Medical Systems","Outsourced design and manufacturing for neuro-stimulation and cardiovascular devices.","East Longmeadow, MA","2007 – 2017"],
 ["The Crown Group","Coating services for automotive and industrial applications.","Warren, MI","2013 – 2017"],
 ["Smart Tuition","Billing and collection services for private K-12 schools.","Woodbridge, NJ","2006 – 2015"],
 ["Milwaukee Gear Company","Large industrial gears and heat treatment services.","Milwaukee, WI","2008 – 2012"],
 ["Aylward Enterprises","Pharmaceutical packaging equipment for bottles and blister packs.","New Bern, NC","2007 – 2010"],
 ["Revere Industries","Processor and stamper of aluminum and plastic products.","Clyde, OH","2000 – 2009"],
 ["Daisy Manufacturing","The oldest and best known maker of air guns and BB guns.","Rogers, AR","1993 – 2006"],
 ["Metal Powder Products","Custom engineered powdered metal parts.","Indianapolis, IN","1998 – 2005"],
 ["Ross Aluminum Foundries","Aluminum foundry for heavy duty truck and aerospace.","Sidney, OH","2000 – 2005"],
 ["Stealth Medical Technologies","Near-net forging of exotic alloys for orthopedic implants.","Holt, MI","2000 – 2005"],
 ["Titan Plastics Group","Custom engineered injection-molded plastic parts.","Kalamazoo, MI","1995 – 2005"],
 ["Integrated DisAbility Resources","Disability insurance services.","Bloomfield, CT","2001 – 2004"],
 ["GEO Specialty Chemicals","Specialty chemicals for water treatment, construction and electronics.","Cleveland, OH","1997 – 2002"]
];
var NEWS=[
 {d:"2026-06",s:"Investment",t:"Charter Oak and Mereo Capital Partners announce a joint investment in MP Design Group of Biloxi, Mississippi",u:"https://www.charteroak-equity.com/news/"},
 {d:"2021-08",s:"Realization",t:"Charter Oak Equity exits ChemRes with sale to Benvic, a portfolio company of Investindustrial",u:"https://www.prnewswire.com/news-releases/charter-oak-equity-exits-chemres-with-sale-to-benvic-301357109.html"},
 {d:"2019-09",s:"Add-on",t:"Licaplast Industries, a Charter Oak Equity and Fonds de solidarité FTQ portfolio company, acquires M’Plast",u:"https://newswire.ca/news-releases/licaplast-industries-a-charter-oak-equity-and-fonds-de-solidarite-ftq-portfolio-company-acquires-m-plast-inc--841321559.html"},
 {d:"2018-10",s:"Investment",t:"Charter Oak Equity and Fonds de solidarité FTQ complete the recapitalization of Licaplast Industries",u:"https://prnewswire.com/news-releases/charter-oak-equity-and-fonds-de-solidarite-ftq-complete-recapitalization-of-licaplast-industries-300738202.html"}
];
var INDS=["Packaging","Chemicals","Medical devices & engineering","Niche industrial","Metal processing","Pharmaceutical-related","Value added distribution","Specialty financial services","Business services"];''')

# ---------------- views ----------------
reg('views', r'''/* ================= VIEWS (home only; nav items scroll to sections) ================= */
var SECS={approach:"story",criteria:"s-criteria",portfolio:"s-portfolio",team:"s-team",news:"s-news",contact:"s-contact"};
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#/']");if(!a)return;var k=a.getAttribute("href").slice(2);if(!SECS[k])return;
  e.preventDefault();e.stopImmediatePropagation();var el=document.getElementById(SECS[k]);if(!el)return;
  var inMenu=document.body.classList.contains("menu-open");if(inMenu)closeMenu();
  function jump(){var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;var y=Math.max(0,t.getBoundingClientRect().top+window.scrollY-(k==="approach"?0:64));
    if(lenis)lenis.scrollTo(y,{duration:1.5});else window.scrollTo({top:y,behavior:RM?"auto":"smooth"})}
  inMenu?setTimeout(jump,380):jump()},true);
function cur(){return '<ul class="pfc">'+CURRENT.map(function(c){return '<li><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p><p class="mt"><span class="lab">'+esc(c[2])+'</span><span class="lab yr">'+esc(c[3])+'</span></p><div class="w"><a class="ul" href="'+c[4]+'" target="_blank" rel="noopener">Website '+ARR+'</a></div></li>'}).join("")+'</ul>'}
function realized(){return '<ul class="rlz">'+REALIZED.map(function(c){return '<li><span class="yr lab">'+esc(c[3])+'</span><h4>'+esc(c[0])+'</h4><p>'+esc(c[1])+'</p><span class="lab pl">'+esc(c[2])+'</span></li>'}).join("")+'</ul>'}
function team(){return '<div class="tm">'+TEAM.map(function(p){var ini=p[0].split(" ").map(function(x){return x[0]}).slice(0,2).join("");
  return '<article><div class="ph"><img src="'+p[2]+'" alt="'+esc(p[0])+'" loading="lazy" onerror="this.parentNode.classList.add(\'noph\')"><span class="ini" aria-hidden="true">'+ini+'</span></div>'+
   '<h3>'+esc(p[0])+'</h3><p class="ttl">'+esc(p[1])+'</p><p class="sm">'+esc(p[4])+'</p>'+
   '<details><summary>Background</summary><p>'+esc(p[5])+'</p><p><a class="ul" href="mailto:'+p[3]+'">'+esc(p[3])+'</a></p></details></article>'}).join("")+'</div>'}
function advisors(){return '<ul class="adv">'+ADVISORS.map(function(a){return '<li><h4>'+esc(a[0])+'</h4><span class="lab">'+esc(a[1])+'</span><p>'+esc(a[2])+'</p></li>'}).join("")+'</ul>'}
function inds(){return '<ul class="ind">'+INDS.map(function(c){return '<li>'+esc(c)+'</li>'}).join("")+'</ul>'}
function vHome(){
  return ''+
  '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>Private equity since 1992<span class="nomob"> · Westport, Connecticut</span></span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1"><span class="l">Focused.</span><span class="l">Committed.</span><span class="l"><em>Driven.</em></span></h1>'+
   '<div class="hero-foot"><p class="s" data-r>Control-oriented investments in established, profitable lower middle-market companies, up to $150 million in enterprise value.</p>'+
   '<div class="act" data-r><a class="btn solid" href="#/criteria">What we look for '+ARR+'</a><a class="btn" href="#/portfolio">Our portfolio</a></div></div>'+
  '</section>'+

  '<section class="sec mani dark" data-theme="dark"><div class="wrap">'+
   '<div class="mani-in"><span class="lab kick" data-r>Working with management</span>'+
   '<p class="txt" id="mani">All of our partners have run companies, but it is not our intent to run the companies we acquire. We create the most value by combining our operational acumen, financial expertise and capital with <em>management’s industry knowledge.</em></p></div>'+
   '<div class="stats s4">'+
    '<div class="stat"><span class="ln2"></span><span class="v">1992</span><span class="k">Investing in private equity, with our predecessor funds, since</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">$500M<sup>+</sup></span><span class="k">Of control-oriented capital invested</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">30</span><span class="k">Portfolio companies</span></div>'+
    '<div class="stat"><span class="ln2"></span><span class="v">50<sup>+</sup></span><span class="k">Acquisitions completed across them</span></div>'+
   '</div></div></section>'+

  '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
   '<div class="story-l"><span class="lab kick">How we invest</span><h2 class="d3">Strong roots, <em>room to grow.</em></h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i><span class="on">Rooted</span><span>Partnered</span><span>Grown</span></div>'+
    '<div class="steps">'+
     '<article class="step on"><h2>Rooted in an established business.</h2><p>We take control positions in privately-held, often family-owned companies or non-core divisions of larger companies, with established products and a history of profitable operations. Not start-ups, not turnarounds.</p></article>'+
     '<article class="step"><h2>Partnered with management.</h2><p>Our partners invest in every one of our deals, and we invite management to invest alongside us. When a company reaches an inflection point, we take a hands-on role in helping the team work through its options.</p></article>'+
     '<article class="step"><h2>Grown by acquisition.</h2><p>Many of our companies grow by consolidating a fragmented market. Revere Industries, for one, diversified into new industrial sectors through its 2005 merger with Metal Powder Products, Ross Aluminum Foundries and Titan Plastics.</p></article>'+
    '</div></div>'+
   '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div>'+
  '</div></section>'+

  '<section class="sec light" id="s-criteria" data-theme="light"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Investment criteria</span><h2 class="d2 split">Established companies, <em>ready to grow.</em></h2></div><p data-r>Small and middle-market companies are a very large market. Many operate in large markets with small shares, and have potentially huge growth prospects but limited means to finance them.</p></div>'+
   '<dl class="facts">'+
    '<div><dt class="lab">Size</dt><dd>$25 million to $150 million of enterprise value.</dd></div>'+
    '<div><dt class="lab">Control</dt><dd>We only pursue transactions where we can take a control position.</dd></div>'+
    '<div><dt class="lab">Sellers</dt><dd>Often family-owned, privately-held companies, or non-core divisions of larger companies.</dd></div>'+
    '<div><dt class="lab">Position</dt><dd>Strategically attractive markets and a sustainable competitive position, with products or services well established in their market and a history of profitable operations.</dd></div>'+
    '<div><dt class="lab">Growth</dt><dd>The capability to grow by leveraging its products or services, or by consolidating a fragmented market. We are not interested in start-up or turnaround situations.</dd></div>'+
   '</dl>'+
   '<div class="indw"><span class="lab kick" data-r>Target industries</span>'+inds()+'</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="s-portfolio" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Portfolio</span><h2 class="d2 split">Thirty companies, <em>since 1992.</em></h2></div><p data-r>Over $500 million invested across 30 portfolio companies. Select current and exited investments of Charter Oak Equity and its predecessor funds.</p></div>'+
   '<span class="lab sub-h" data-r>Current investments</span>'+cur()+
   '<figure class="qt" data-r><span class="lab qk">From our portfolio</span><blockquote>“It is great working with Charter Oak. They are not just finance guys. They really understand what it takes to build a successful business through first-hand experience.”</blockquote><figcaption class="lab">Steve Stewart, CEO · Brook &amp; Whittle</figcaption></figure>'+
   '<span class="lab sub-h" data-r>Realized investments</span>'+realized()+
  '</div></section>'+

  '<section class="sec dark" id="s-team" data-theme="dark"><div class="wrap">'+
   '<div class="shead"><div><span class="lab kick" data-r>Team</span><h2 class="d2 split">Operators, <em>and investors.</em></h2></div><p data-r>Our general partners average nearly twenty years of private equity experience, with deep operational, financial and consulting expertise, and have personally invested in all of the firm’s transactions.</p></div>'+
   team()+
   '<div class="advw"><div class="shead sm"><div><span class="lab kick" data-r>Advisors</span><h3 class="d3 split">Senior executives, <em>on call.</em></h3></div><p data-r>They help with due diligence, serve on our boards of directors and advise where their expertise can help our companies meet their goals.</p></div>'+advisors()+'</div>'+
  '</div></section>'+

  '<section class="sec dark2" id="s-news" data-theme="dark"><div class="wrap">'+
   '<div class="shead" style="margin-bottom:36px"><div><span class="lab kick" data-r>News</span><h2 class="d3 split">Recent <em>headlines.</em></h2></div></div>'+newsRows(NEWS)+
  '</div></section>'+
  cta();
}
function cta(){
  return '<section class="sec light cta" id="s-contact" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>For owners, corporate parents and intermediaries</span>'+
   '<h2 class="big split">Plant the <em>next one.</em></h2>'+
   '<p class="sub" data-r>Considering a sale or recapitalization of a family-owned company, or a non-core division? Partnering with Charter Oak can present a substantial growth opportunity. We would be glad to hear from you.</p>'+
   '<div class="act" data-r><a class="btn solid" href="mailto:'+MAIL+'">Email Paul Roughan '+ARR+'</a><a class="btn" href="tel:'+TEL+'">Call '+TELT+'</a></div>'+
   '<div class="cgrid cx">'+
    '<div class="addr" data-r><span class="lab">Office</span><h3>Westport, Connecticut</h3><p>Charter Oak Equity, LP<br>274 Riverside Avenue, Second Floor<br>Westport, CT 06880</p></div>'+
    '<div class="offs" data-r>'+TEAM.map(function(p){return '<div><span class="lab">'+esc(p[0])+' · '+esc(p[1])+'</span><b class="em"><a class="ul" href="mailto:'+p[3]+'">'+esc(p[3])+'</a></b></div>'}).join("")+'</div>'+
   '</div>'+
  '</div></section>';
}
function footer(){
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">Office</span>274 Riverside Avenue, Second Floor<br>Westport, CT 06880</div>'+
   '<div class="c"><span class="lab">Contact</span><a class="ul" href="tel:'+TEL+'">'+TELT+'</a><br><a class="ul" href="mailto:'+MAIL+'">'+MAIL+'</a></div>'+
   '<div class="c"><span class="lab">Explore</span><a class="ul" href="#/approach">Approach</a><br><a class="ul" href="#/criteria">Criteria</a><br><a class="ul" href="#/portfolio">Portfolio</a><br><a class="ul" href="#/team">Team</a><br><a class="ul" href="#/news">News</a></div>'+
   '<div class="c"><span class="lab">Focus</span>Niche manufacturing, packaging, medical products &amp; services, specialty chemicals, consumer products and financial services.</div>'+
  '</div><svg class="bigsvg" viewBox="0 0 640 50" aria-hidden="true"><text x="320" y="40" text-anchor="middle" style="font-family:Newsreader,Georgia,serif;font-weight:400;font-size:52px;letter-spacing:-.01em">Charter Oak Equity</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 Charter Oak Equity, LP</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}
function route(h){return {k:"home",v:vHome,t:"Charter Oak Equity — Lower middle-market private equity, Westport, Connecticut",x:"Home"}}''')

# ---------------- hero field: a great white oak at dusk ----------------
reg('field', r'''/* ================= HERO FIELD: a great white oak alone in a Connecticut meadow at dusk, the firm's namesake and
   the leaf in its mark. Broad, low limbs and a wide crown, backlit by the sun setting just behind it over the far hills; light
   glows through the gaps in the leaves. It moves on its own (the crown breathes in a slow breeze, fireflies rise over the
   meadow, the sun's glow pulses) with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oLand=null,oTree=null,FLY=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var S=mob?Math.max(250,h*.38):h,T,tx,gy;
    if(mob){T=Math.min(S*.56,w*.5);tx=w*.55;gy=S*.95}
    else{T=Math.min(S*.5,cw*.33);tx=side+cw*.67;gy=S*.84}
    var hz=gy-T*.13;
    return {mob:mob,side:side,cw:cw,S:S,T:T,tx:tx,gy:gy,hz:hz,sx:tx-T*.3,sy:hz-T*.035,R:T*.05};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the tree: a short massive trunk, broad near-horizontal lower limbs, a wide rounded crown (white oak habit) */
  function grow(){
    var R=rng(1955),T=G.T,tx=G.tx,gy=G.gy,B=[],TIPS=[];
    function br(x,y,a,len,wd,d){
      var bend=(R()-.5)*.9,ex=x+Math.cos(a)*len,ey=y+Math.sin(a)*len,mx=x+Math.cos(a+bend*.5)*len*.5,my=y+Math.sin(a+bend*.5)*len*.5;
      B.push([x,y,mx,my,ex,ey,wd,d]);
      if(d>=6||len<T*.022){TIPS.push([ex,ey,d]);return}
      var n=R()<.35?3:2;
      for(var k=0;k<n;k++){var sp=(k-(n-1)/2)*(.5+R()*.35)+(R()-.5)*.25,na=a+sp;
        /* keep growth up and out, never hanging below the limb line */
        if(Math.sin(na)>.25)na=a-.2;na+= (-Math.PI/2-na)*.12;
        br(ex,ey,na,len*(.62+R()*.22),wd*.66,d+1)}
    }
    var top=gy-T*.27;
    /* limbs: [end x, end y (in T units from the trunk base), start height, width] */
    var L=[[-.74,-.4,.15,.052],[-.56,-.68,.22,.044],[-.3,-.88,.29,.04],[-.02,-.99,.31,.046],[.28,-.9,.27,.04],[.55,-.72,.2,.044],[.76,-.44,.17,.05]];
    L.forEach(function(l,i){var sx=tx+(l[0]<0?-1:1)*T*.012,sy=gy-T*l[2],ex=tx+l[0]*T*.62,ey=gy+l[1]*T*.62,a=Math.atan2(ey-sy,ex-sx),len=Math.hypot(ex-sx,ey-sy);
      B.push([sx,sy,sx+(ex-sx)*.35,sy+(ey-sy)*.75-T*.09*Math.abs(l[0]),ex,ey,T*l[3],0]);
      br(ex,ey,a+(l[0]<0?.18:-.18)*(Math.abs(l[0])>.5?1:.4),T*.17,T*l[3]*.7,1);
      br(ex,ey,a+(l[0]<0?-.35:.35),T*.15,T*l[3]*.6,2);
      /* a side branch from the middle of each limb */
      br(sx+(ex-sx)*.55,sy+(ey-sy)*.62-T*.05*Math.abs(l[0]),a+(l[0]<0?.55:-.55),T*.13,T*l[3]*.5,2)});
    return {B:B,TIPS:TIPS,top:top};
  }
  function build(){
    var S=G.S,hz=G.hz,T=G.T,A=mk(S+2),g=A[1];oSky=A[0];
    /* dusk sky: deep forest-green night overhead to a low warm band on the horizon, brightest behind the tree */
    var sky=g.createLinearGradient(0,0,0,hz+T*.04);
    sky.addColorStop(0,"#081310");sky.addColorStop(.32,"#11261f");sky.addColorStop(.6,"#294438");sky.addColorStop(.8,"#6f7656");sky.addColorStop(.93,"#c9a86c");sky.addColorStop(1,"#e8c88a");
    g.fillStyle=sky;g.fillRect(0,0,w,S+2);
    var gl=g.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,T*1.4);gl.addColorStop(0,"rgba(255,224,160,.6)");gl.addColorStop(.22,"rgba(236,196,128,.24)");gl.addColorStop(1,"rgba(236,196,128,0)");
    g.fillStyle=gl;g.fillRect(0,0,w,S+2);
    /* a few thin clouds lit from below */
    var R=rng(9);for(var k=0;k<(G.mob?4:8);k++){var cy=hz-(hz*.12+R()*hz*.5),cx=R()*w,cwid=w*(.08+R()*.18),ch=T*(.006+R()*.01),near=1-Math.min(1,Math.abs(cx-G.sx)/(w*.55)),a=.04+.12*near;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(240,206,150,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(240,206,150,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* land: far wooded hills in haze, then the meadow rolling toward us */
    var Bc=mk(S+2),l=Bc[1];oLand=Bc[0];
    function hill(base,amp,wl,seed,col,col2,tree){var Rh=rng(seed),p1=Rh()*6.28,p2=Rh()*6.28;var gr=l.createLinearGradient(0,base-amp,0,S);gr.addColorStop(0,col);gr.addColorStop(1,col2);l.fillStyle=gr;l.beginPath();l.moveTo(-4,S+2);
      for(var x=-4;x<=w+6;x+=3){var y=base-amp*(.5+.5*(.6*Math.sin(x/wl+p1)+.4*Math.sin(x/(wl*.43)+p2)));if(tree){var tc=T*.035,u=((x%tc)+tc)%tc/tc,ci=Math.floor(x/tc);y-=T*.014*Math.sqrt(Math.max(0,1-(2*u-1)*(2*u-1)))*(.55+.45*Math.sin(ci*1.7+p1))}l.lineTo(x,y)}l.lineTo(w+6,S+2);l.closePath();l.fill()}
    hill(hz+T*.005,T*.05,w*.16+120,3,"#5d6a52","#46553f",true);
    hill(hz+T*.035,T*.035,w*.2+140,5,"#334434","#25362a",true);
    /* the warm light across the far hills */
    l.save();l.globalCompositeOperation="source-atop";var sw=l.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,T*1.5);sw.addColorStop(0,"rgba(255,214,150,.42)");sw.addColorStop(1,"rgba(255,214,150,0)");l.fillStyle=sw;l.fillRect(0,0,w,S+2);l.restore();
    hill(G.gy-T*.02,T*.03,w*.3+200,8,"#1a2a1f","#0f1b16",false);
    /* meadow light, then the grass along the near edge */
    l.save();l.globalCompositeOperation="source-atop";var mg=l.createRadialGradient(G.sx,G.gy,0,G.sx,G.gy,T*1.1);mg.addColorStop(0,"rgba(214,186,120,.22)");mg.addColorStop(1,"rgba(214,186,120,0)");l.fillStyle=mg;l.fillRect(0,0,w,S+2);l.restore();
    var Rg=rng(31);l.strokeStyle="rgba(10,20,15,.9)";l.lineCap="round";
    for(var q=0;q<(G.mob?260:700);q++){var gx=Rg()*w,gb=G.gy+T*(.04+Rg()*.25),gh=T*(.015+Rg()*.035)*(1+(gb-G.gy)/T),lean=(Rg()-.5)*gh*.6;if(gb>S+4)continue;
      l.lineWidth=.6+Rg()*.9;l.beginPath();l.moveTo(gx,gb);l.quadraticCurveTo(gx+lean*.3,gb-gh*.6,gx+lean,gb-gh);l.stroke()}
    /* the oak */
    var Tc=mk(S+2),tg=Tc[1];oTree=Tc[0];var TR=grow(),T2=G.T,tx=G.tx,gy=G.gy,Rl=rng(77);
    /* shadow pooled under the crown */
    tg.save();tg.translate(tx+T2*.05,gy+T2*.015);tg.scale(1,.09);var sg=tg.createRadialGradient(0,0,0,0,0,T2*.75);sg.addColorStop(0,"rgba(6,12,9,.7)");sg.addColorStop(1,"rgba(6,12,9,0)");tg.fillStyle=sg;tg.beginPath();tg.arc(0,0,T2*.75,0,Math.PI*2);tg.fill();tg.restore();
    /* trunk with a flared base */
    var bw=T2*.09,tw=T2*.05,ty=gy-T2*.27;tg.fillStyle="#0b1410";tg.beginPath();tg.moveTo(tx-bw*1.25,gy+T2*.008);
    tg.bezierCurveTo(tx-bw*.6,gy-T2*.02,tx-tw*.9,gy-T2*.08,tx-tw*.75,ty);tg.lineTo(tx+tw*.75,ty);tg.bezierCurveTo(tx+tw*.9,gy-T2*.08,tx+bw*.6,gy-T2*.02,tx+bw*1.3,gy+T2*.008);tg.closePath();tg.fill();
    /* limbs and branches */
    tg.strokeStyle="#0b1410";tg.lineCap="round";tg.lineJoin="round";
    TR.B.forEach(function(b){tg.lineWidth=Math.max(.7,b[6]);tg.beginPath();tg.moveTo(b[0],b[1]);tg.quadraticCurveTo(b[2],b[3],b[4],b[5]);tg.stroke()});
    /* foliage: thousands of small leaf dabs in clumps at the branch ends, leaving sky between the clumps */
    var D=[];TR.TIPS.forEach(function(p){var n=G.mob?9:16,rr=T2*(.045+Rl()*.03);for(var k=0;k<n;k++){var an=Rl()*6.283,rd=Math.sqrt(Rl())*rr;D.push([p[0]+Math.cos(an)*rd,p[1]+Math.sin(an)*rd*.8-rr*.15,T2*(.007+Rl()*.012),p[0],p[1],rr])}});
    D.forEach(function(d){var s=Rl();tg.fillStyle=s<.5?"#0c1913":s<.85?"#10221a":"#14291f";tg.beginPath();tg.ellipse(d[0],d[1],d[2]*1.25,d[2],Rl()*3.14,0,Math.PI*2);tg.fill()});
    /* the sun behind: the crown glows where it is thin, and each clump gets a warm rim on the sun side */
    tg.save();tg.globalCompositeOperation="source-atop";var lg=tg.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,T2*.9);lg.addColorStop(0,"rgba(236,198,120,.55)");lg.addColorStop(.35,"rgba(150,150,86,.22)");lg.addColorStop(1,"rgba(120,140,90,0)");tg.fillStyle=lg;tg.fillRect(0,0,w,S+2);
    D.forEach(function(d){var vx=d[0]-d[3],vy=d[1]-d[4],ux=G.sx-d[3],uy=G.sy-d[4],lu=Math.hypot(ux,uy)||1,dot=(vx*ux+vy*uy)/(lu*d[5]);if(dot<.55||Rl()<.7)return;
      var near=Math.max(0,1-Math.hypot(d[0]-G.sx,d[1]-G.sy)/(T2*1.3));tg.fillStyle="rgba(200,184,116,"+(.05+.22*near*dot).toFixed(3)+")";tg.beginPath();tg.ellipse(d[0]+ux/lu*d[2]*.4,d[1]+uy/lu*d[2]*.4,d[2]*.6,d[2]*.45,0,0,Math.PI*2);tg.fill()});
    tg.restore();
    FLY=[];var Rf=rng(5);for(var f=0;f<(G.mob?9:22);f++)FLY.push([Rf(),Rf(),Rf()*6.28,.5+Rf()*.8,Rf()]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?30:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var S=G.S,T=G.T;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the sun, low behind the tree, its glow breathing slowly */
    var pulse=.9+.1*Math.sin(t*.6),sx=G.sx,sy=G.sy+SP.v*T*.04;
    c.globalCompositeOperation="lighter";
    var hg=c.createRadialGradient(sx,sy,G.R*.5,sx,sy,G.R*8);hg.addColorStop(0,"rgba(255,214,140,"+(.3*pulse).toFixed(3)+")");hg.addColorStop(1,"rgba(255,190,110,0)");c.fillStyle=hg;c.fillRect(sx-G.R*8,sy-G.R*8,G.R*16,G.R*16);
    c.globalCompositeOperation="source-over";
    var dg=c.createRadialGradient(sx,sy-G.R*.2,0,sx,sy,G.R);dg.addColorStop(0,"#fff6dc");dg.addColorStop(.7,"#ffe2a6");dg.addColorStop(1,"#f3c77a");c.fillStyle=dg;c.beginPath();c.arc(sx,sy,G.R,0,Math.PI*2);c.fill();
    c.setTransform(1,0,0,1,0,0);c.drawImage(oLand,0,0);
    /* the crown sways a little in a slow breeze; the trunk base stays put */
    var sk=RM?0:(.006*Math.sin(t*.45)+.003*Math.sin(t*1.1+1.3));
    c.setTransform(1,0,sk,1,-sk*G.gy*dpr,0);c.drawImage(oTree,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* fireflies over the meadow and under the crown */
    c.globalCompositeOperation="lighter";
    for(var f=0;f<FLY.length;f++){var F=FLY[f],fx=G.tx+(F[0]-.5)*T*2.1+Math.sin(t*.13*F[3]+F[2])*T*.12,fy=G.gy-T*(.02+F[1]*.42)+Math.sin(t*.21*F[3]+F[2]*2)*T*.05,bl=Math.max(0,Math.sin(t*(.6+F[4]*.7)+F[2]));
      if(fx<-20||fx>w+20)continue;var fr=T*.018,a=.55*bl*bl;if(a<.02)continue;
      var fg=c.createRadialGradient(fx,fy,0,fx,fy,fr);fg.addColorStop(0,"rgba(236,240,150,"+a.toFixed(3)+")");fg.addColorStop(.25,"rgba(200,226,120,"+(a*.4).toFixed(3)+")");fg.addColorStop(1,"rgba(160,210,110,0)");c.fillStyle=fg;c.fillRect(fx-fr,fy-fr,fr*2,fr*2)}
    c.globalCompositeOperation="source-over";c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.tx,G.gy-G.T*.5]:[w/2,h/2]}};
})();''')

# ---------------- story: an oak in fine line, rooted / partnered / grown ----------------
reg('story', r'''/* the story scene: the firm's namesake oak, engraved in fine line. A faint ghost of the whole tree is always there.
   Step 1 the roots and trunk ink in (an established, profitable business, held with control). Step 2 the bark and the first
   limbs (partners and management invested together). Step 3 the crown fills out, and three limbs light up in the accent:
   Revere Industries' 2005 merger with Metal Powder Products, Ross Aluminum Foundries and Titan Plastics (charteroak-equity.com). */
var OAK=(function(){
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  var R=rng(1992),L=[],BR=[],ROOT=[],BARK=[];
  /* tree space: trunk base at 0,0; height about 1.05 */
  var LIM=[[-.68,-.56,.17,.05,1],[-.4,-.84,.25,.04,0],[.02,-.86,.29,.046,2],[.38,-.86,.24,.04,0],[.68,-.56,.19,.05,3]];
  function br(x,y,a,len,wd,d,acc){var ex=x+Math.cos(a)*len,ey=y+Math.sin(a)*len,bend=(R()-.5)*.4;
    BR.push({d:[x,y,x+Math.cos(a+bend)*len*.5,y+Math.sin(a+bend)*len*.5,ex,ey],w:wd,acc:acc});
    if(d>=3)return;
    for(var k=0;k<2;k++){var na=a+(k?.42:-.42)+(R()-.5)*.25;if(Math.sin(na)>.2)na=a-.25;br(ex,ey,na,len*.74,wd*.68,d+1,acc)}}
  LIM.forEach(function(l){var sx=l[0]<0?-.012:.012,sy=-l[2],ex=l[0],ey=l[1];
    L.push({d:[sx,sy,sx+(ex-sx)*.3,sy+(ey-sy)*.78-.1*Math.abs(ex),ex,ey],w:l[3],acc:l[4]});
    var a=Math.atan2(ey-sy,ex-sx);br(ex,ey,a+(ex<0?.3:-.3),.15,l[3]*.6,1,l[4]);br(ex,ey,a+(ex<0?-.4:.4),.13,l[3]*.55,1,l[4]);
    br(sx+(ex-sx)*.5,sy+(ey-sy)*.66-.05*Math.abs(ex),a+(ex<0?.6:-.6),.11,l[3]*.45,2,0)});
  /* the crown: one scalloped contour around the whole mass, a few inner scallop lines for depth, and leaf ticks */
  function scal(cx,cy,rx,ry,n,a0,a1,flat,seed){var Rs=rng(seed),P=[];for(var i=0;i<=n;i++){var an=a0+(a1-a0)*i/n,j=1+(Rs()-.5)*.12,x=cx+Math.cos(an)*rx*j,y=cy+Math.sin(an)*ry*j;if(flat!=null&&y>flat)y=flat+(y-flat)*.25;P.push([x,y])}
    var segs=[];for(var k=0;k<n;k++){var p=P[k],q=P[k+1],mx=(p[0]+q[0])/2,my=(p[1]+q[1])/2,dx=mx-cx,dy=my-cy,dl=Math.hypot(dx,dy)||1,bl=Math.hypot(q[0]-p[0],q[1]-p[1])*(.45+Rs()*.2);segs.push([p[0],p[1],mx+dx/dl*bl,my+dy/dl*bl,q[0],q[1]])}return segs}
  var CROWN=scal(0,-.62,.84,.5,30,Math.PI*.98,Math.PI*3.02,-.3,7);
  var INNER=[scal(-.34,-.7,.34,.24,9,Math.PI*1.05,Math.PI*1.95,null,11),scal(.3,-.72,.36,.25,9,Math.PI*1.05,Math.PI*1.95,null,13),scal(.02,-.9,.3,.18,8,Math.PI*1.08,Math.PI*1.92,null,17),scal(-.5,-.46,.22,.14,6,Math.PI*1.05,Math.PI*1.95,null,19),scal(.52,-.46,.22,.14,6,Math.PI*1.05,Math.PI*1.95,null,23)];
  var TICK=[],Rt=rng(31);for(var t=0;t<170;t++){var an=Rt()*Math.PI*2,rr=Math.sqrt(Rt()),x=Math.cos(an)*rr*.76,y=-.62+Math.sin(an)*rr*.44;if(y>-.34)continue;var ta=-1.2+Rt()*.9;TICK.push([x,y,x+Math.cos(ta)*.028,y+Math.sin(ta)*.028])}
  [[-.3,.09],[-.17,.15],[0,.19],[.16,.14],[.31,.08]].forEach(function(r,k){ROOT.push([k<2?-.03:k>2?.03:0,0,r[0]*.5,r[1]*.7,r[0],r[1]]);
    ROOT.push([r[0]*.55,r[1]*.55,r[0]*.75,r[1]*.95,r[0]*.8+(k-2)*.02,r[1]*1.2])});
  for(var b=0;b<5;b++){var bx=-.03+b*.015;BARK.push([bx,-.01,bx+(R()-.5)*.01,-.13,bx*.8,-.25])}
  return {L:L,BR:BR,CROWN:CROWN,INNER:INNER,TICK:TICK,ROOT:ROOT,BARK:BARK};
})();
function oakSVG(mob){
  var cx=mob?200:400,gy=mob?298:418,k=mob?176:325;
  function X(x){return (cx+x*k).toFixed(1)}function Y(y){return (gy+y*k).toFixed(1)}
  function q(d){return 'M'+X(d[0])+' '+Y(d[1])+'Q'+X(d[2])+' '+Y(d[3])+' '+X(d[4])+' '+Y(d[5])}
  function sw(wd){return Math.min(3.2,Math.max(.9,wd*k*.26)).toFixed(2)}
  function qs(list){return list.map(function(d,i){return (i?'':'M'+X(d[0])+' '+Y(d[1]))+'Q'+X(d[2])+' '+Y(d[3])+' '+X(d[4])+' '+Y(d[5])}).join('')}
  var trunk='M'+X(-.1)+' '+Y(0)+'C'+X(-.05)+' '+Y(-.02)+' '+X(-.048)+' '+Y(-.1)+' '+X(-.04)+' '+Y(-.26)+'M'+X(.1)+' '+Y(0)+'C'+X(.05)+' '+Y(-.02)+' '+X(.048)+' '+Y(-.1)+' '+X(.04)+' '+Y(-.26);
  function tree(cls){return '<g class="'+cls+'">'+
    '<path class="gr" d="M'+(mob?8:60)+' '+Y(0)+'H'+(mob?392:740)+'"/>'+
    OAK.ROOT.map(function(r){return '<path class="rt" d="'+q(r)+'"/>'}).join("")+
    '<path class="tk" d="'+trunk+'"/>'+
    OAK.BARK.map(function(r){return '<path class="bk" d="'+q(r)+'"/>'}).join("")+
    OAK.L.map(function(l){return '<path class="lm'+(l.acc?' a'+l.acc:'')+'" style="stroke-width:'+sw(l.w)+'" d="'+q(l.d)+'"/>'}).join("")+
    OAK.BR.map(function(l){return '<path class="br'+(l.acc?' a'+l.acc:'')+'" style="stroke-width:'+sw(l.w)+'" d="'+q(l.d)+'"/>'}).join("")+
    '<path class="cr" d="'+qs(OAK.CROWN)+'"/>'+OAK.INNER.map(function(c){return '<path class="ci" d="'+qs(c)+'"/>'}).join("")+
    '<path class="tc" d="'+OAK.TICK.map(function(t){return 'M'+X(t[0])+' '+Y(t[1])+'L'+X(t[2])+' '+Y(t[3])}).join("")+'"/></g>'}
  /* labels: [text, x, y, anchor, leader from x,y (tree space) or null, step] */
  var LB=mob?[
    ["CONTROL POSITION",8,352,"start",[-.3,.09],1],["PROFITABLE HISTORY",392,352,"end",[.31,.08],1],["$25M – $150M ENTERPRISE VALUE",200,398,"middle",null,1],
    ["PARTNERS INVEST IN EVERY DEAL",200,352,"middle",null,2],["MANAGEMENT CO-INVESTS",200,398,"middle",null,2],
    ["METAL POWDER PRODUCTS",8,30,"start",[-.68,-.56],3],["TITAN PLASTICS",392,30,"end",[.68,-.56],3],["ROSS ALUMINUM FOUNDRIES",200,62,"middle",[.02,-.86],3],["REVERE INDUSTRIES · 2005",200,398,"middle",null,3]
  ]:[
    ["CONTROL POSITION",250,532,"end",[-.3,.09],1],["PROFITABLE HISTORY",550,532,"start",[.31,.08],1],["$25M – $150M ENTERPRISE VALUE",400,568,"middle",null,1],
    ["PARTNERS INVEST IN EVERY DEAL",348,360,"end",[-.045,-.15],2],["MANAGEMENT CO-INVESTS",452,388,"start",[.045,-.12],2],
    ["METAL POWDER PRODUCTS",8,96,"start",[-.68,-.56],3],["TITAN PLASTICS",792,96,"end",[.68,-.56],3],["ROSS ALUMINUM FOUNDRIES",400,14,"middle",[.02,-.86],3],["REVERE INDUSTRIES · 2005",400,568,"middle",null,3]
  ];
  var labs=LB.map(function(l){var o='<g class="lb s'+l[5]+'">';
    if(l[4]){var px=+X(l[4][0]),py=+Y(l[4][1]),tx=l[1],ty=l[2]+(l[2]<py?8:-16),ex=l[3]==="end"?tx+6:l[3]==="start"?tx-6:tx;
      if(l[3]==="middle")ty=l[2]+8;if(l[5]===2){ex=l[3]==="end"?tx+8:tx-8;ty=l[2]-4}
      if(l[5]===1){ex=l[3]==="end"?tx+10:tx-10;ty=l[2]-5}
      if(l[5]===3&&l[3]!=="middle"){ex=l[3]==="start"?tx+60:tx-60;ty=l[2]+10}
      o+='<path class="ld" d="M'+px.toFixed(1)+' '+py.toFixed(1)+'L'+ex.toFixed(1)+' '+ty.toFixed(1)+'"/><circle class="dt" cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="3"/>'}
    return o+'<text x="'+l[1]+'" y="'+l[2]+'" text-anchor="'+l[3]+'" class="w">'+l[0]+'</text></g>'}).join("");
  return '<svg'+(mob?' class="mob"':'')+' viewBox="'+(mob?'0 0 400 412':'0 0 800 580')+'" aria-hidden="true"><g class="ghost">'+tree("t0")+'</g><g class="ink">'+tree("t1")+'</g>'+labs+'</svg>';
}
function scene(){return oakSVG(MOBILE())}
function storyDraw(svg){
  var ink=$(".ink",svg),E={gr:$$(".gr",ink),rt:$$(".rt",ink),tk:$$(".tk",ink),bk:$$(".bk",ink),lm:$$(".lm",ink),br:$$(".br",ink),cr:$$(".cr",ink),ci:$$(".ci",ink),tc:$$(".tc",ink),ac:$$(".lm.a1,.lm.a2,.lm.a3,.br.a1,.br.a2,.br.a3",ink),
    l1:$$(".lb.s1",svg),l2:$$(".lb.s2",svg),l3:$$(".lb.s3",svg),gh:$(".ghost",svg)};
  function prep(list){return list.map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return L})}
  var LL={};["gr","rt","tk","bk","lm","br","cr","ci"].forEach(function(k){LL[k]=prep(E[k])});
  function draw(k,s,stag){E[k].forEach(function(p,i){var q=stag?seg(s,i/E[k].length*.5,.5+i/E[k].length*.5):s;p.style.strokeDashoffset=(LL[k][i]*(1-q)).toFixed(1)})}
  function show(list,a){list.forEach(function(g){g.style.opacity=a.toFixed(3)})}
  return function(p,b){
    if(!ink.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.36,.56),s3=seg(p,.7,.9),o1=s1*(1-seg(p,.3,.36)),o2=s2*(1-seg(p,.64,.7));
    E.gh.style.opacity=(b*(1-.5*s3)).toFixed(3);ink.style.opacity=b.toFixed(3);
    draw("gr",Math.max(s1,.999*b));draw("rt",s1,true);draw("tk",s1);
    draw("bk",s2,true);draw("lm",s2,true);
    draw("br",s3,true);
    draw("cr",seg(s3,.2,.85));draw("ci",seg(s3,.4,1),true);E.tc.forEach(function(t){t.style.opacity=seg(s3,.6,1).toFixed(3)});
    E.ac.forEach(function(a){a.classList.toggle("on",s3>.5)});
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
.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:#a2ada6;transition:color .35s var(--eo)}
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
.scene .ghost{opacity:0}
.scene .ghost path{fill:none;stroke:rgba(var(--boner),.13);stroke-width:1!important}
.scene .ghost .tc{display:none}
.scene .ink path{fill:none;stroke:rgba(var(--boner),.82);stroke-linecap:round;stroke-linejoin:round}
.scene .ink .gr{stroke:rgba(var(--boner),.4);stroke-width:1}
.scene .ink .rt{stroke-width:1.3}
.scene .ink .tk{stroke-width:1.6}
.scene .ink .bk{stroke:rgba(var(--boner),.45);stroke-width:1}
.scene .ink .lm,.scene .ink .br{transition:stroke .5s ease-out}
.scene .ink .on{stroke:var(--accL)}
.scene .ink .cr{stroke:rgba(var(--boner),.78);stroke-width:1.3;fill:rgba(var(--accr),.035)}
.scene .ink .ci{stroke:rgba(var(--boner),.38);stroke-width:1}
.scene .ink .tc{stroke:rgba(var(--accr),.7);stroke-width:1.1;opacity:0}
.scene .ld{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene .s3 .ld{stroke:var(--accL)}
.scene .dt{fill:var(--accL)}
.scene text{font-family:var(--mono);font-weight:600;font-size:12.5px;letter-spacing:.14em;fill:#b9c2bc}
.scene text.w{fill:var(--bone)}
.scene .lb{opacity:0}''')

# ---------------- global swaps outside regions (colours / weights) ----------------
src = src.replace('#120e0b', INK).replace('rgba(18,14,11,.12)', 'rgba(15,27,22,.12)')
src = src.replace('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#a2ada6}.rail span::before{background:var(--ink2);border-color:#63736a}')
src = src.replace('.scene text{fill:#c2b6a4}', '.scene text{fill:#b9c2bc}')
src = src.replace('font-weight:300', 'font-weight:400').replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */', '/* ===== engine palette overrides ===== */')

EXTRA = r'''
/* ===== Charter Oak Equity: forest-dusk ground, warm bone pages, the green of their mark as the accent ===== */
.d1,.d2,.d3,.lede,.mani .txt,.cta .big,.stat .v{font-weight:400}
.d1{letter-spacing:-.02em}.hero-h{font-size:clamp(52px,7.4vw,138px);letter-spacing:-.025em;line-height:.96}
.d2{letter-spacing:-.02em}.d3{letter-spacing:-.016em}.mani .txt{letter-spacing:-.016em}.cta .big{letter-spacing:-.028em}.stat .v{letter-spacing:-.03em}
.lede{line-height:1.3}
#pre .mk path{fill:none;stroke:var(--accL);stroke-width:.5}
#pre .wm{font-family:var(--sans);font-weight:500;color:var(--bone)}
.hero .eyebrow{color:var(--accL)}
.btn.solid{color:var(--bone)}.btn.solid:hover{color:var(--ink)}
.ftr .bigsvg{color:var(--bone)}
.ftr .fcv{opacity:.22!important}
.stats.s4{grid-template-columns:repeat(4,minmax(0,1fr))}
.stats.s4 .stat .v{font-size:clamp(50px,5vw,92px)}
@media (max-width:1024px){.stats.s4{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:48px}}
.indw{margin-top:clamp(56px,6vw,96px)}
.indw .kick{display:block;margin-bottom:22px}
.ind li::before{border-radius:0}
@media (max-width:860px){.ind{grid-template-columns:1fr 1fr}}
@media (max-width:520px){.ind{grid-template-columns:1fr}}
.sub-h{display:block;margin:0 0 18px;color:var(--accL)}
/* current investments: DH rule draws across on hover */
.pfc{list-style:none;margin:0 0 clamp(64px,7vw,110px);padding:0;border-top:1px solid var(--hair)}
.pfc li{display:grid;grid-template-columns:minmax(0,3.4fr) minmax(0,5fr) minmax(0,2.6fr) minmax(0,1.3fr);column-gap:var(--gap);align-items:center;padding:14px 0;border-bottom:1px solid var(--hair);position:relative}
.pfc li::after,.rlz li::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:var(--accL);transform:scaleX(0);transform-origin:right;transition:transform .45s cubic-bezier(.22,.61,.36,1);pointer-events:none}
.pfc li:hover::after,.rlz li:hover::after{transform:scaleX(1);transform-origin:left}
.pfc h3{font-family:var(--disp);font-weight:400;font-size:clamp(26px,2.2vw,36px);line-height:1.08;letter-spacing:-.02em;margin:0;transition:color .3s}
.pfc li:hover h3{color:var(--accL)}
.pfc p{margin:0;font-size:16px;line-height:1.55;color:var(--stone)}
.pfc .mt .lab{display:block}.pfc .mt .yr{opacity:.8;margin-top:4px}
.pfc .w{justify-self:end}
.pfc .w a{font:500 11px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;display:inline-flex;gap:10px;align-items:center;padding:10px 0}
.pfc .w svg{width:14px;height:10px;transition:transform .3s var(--eo)}
.pfc .w a:hover svg{transform:translateX(4px)}
@media (max-width:860px){.pfc li{grid-template-columns:1fr;row-gap:8px}.pfc .w{justify-self:start}}
.rlz{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:clamp(28px,4vw,64px);border-top:1px solid var(--hair)}
.rlz li{display:grid;grid-template-columns:7.2em minmax(0,1fr) auto;column-gap:16px;row-gap:2px;align-items:baseline;padding:16px 0;border-bottom:1px solid var(--hair);position:relative}
.rlz .yr{grid-row:1/3;color:var(--stone)}
.rlz h4{font-family:var(--disp);font-weight:400;font-size:clamp(19px,1.5vw,23px);line-height:1.2;letter-spacing:-.01em;margin:0;transition:color .3s}
.rlz li:hover h4{color:var(--accL)}
.rlz p{grid-column:2/4;margin:0;font-size:14.5px;line-height:1.5;color:var(--stone)}
.rlz .pl{grid-column:3;grid-row:1;color:var(--stone);text-align:right;white-space:nowrap}
@media (max-width:960px){.rlz{grid-template-columns:1fr}}
@media (max-width:480px){.rlz li{grid-template-columns:1fr auto}.rlz .yr{grid-row:auto;grid-column:1/3}.rlz h4{grid-column:1}.rlz .pl{grid-column:2;grid-row:2}.rlz p{grid-column:1/3}}
.qt{margin:0 0 clamp(64px,7vw,110px);display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);column-gap:var(--gap);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hair)}
.qt .qk{color:var(--accL);grid-row:1/3}
.qt blockquote{margin:0 0 18px;font-family:var(--disp);font-style:italic;font-size:clamp(24px,2.4vw,38px);line-height:1.3;letter-spacing:-.012em;padding-left:clamp(20px,2.4vw,40px);border-left:1px solid var(--accL)}
.qt figcaption{color:var(--stone);padding-left:clamp(20px,2.4vw,40px);grid-column:2}
@media (max-width:860px){.qt{grid-template-columns:1fr}.qt .qk{grid-row:auto;margin-bottom:18px}.qt figcaption{grid-column:1}}
/* team portraits (inline expand only, no bio sheets) */
.tm{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(36px,3.4vw,56px) var(--gap)}
.tm article{min-width:0}
.tm .ph{position:relative;aspect-ratio:4/5;overflow:hidden;background:var(--ink3);margin-bottom:22px}
.tm .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 20%;filter:grayscale(1) contrast(1.04);transition:filter .45s ease-out,transform .7s var(--eo)}
.tm article:hover .ph img{filter:grayscale(0);transform:scale(1.03)}
.tm .ph .ini{position:absolute;inset:0;display:none;place-items:center;font-family:var(--disp);font-size:64px;color:var(--stone)}
.tm .ph.noph img{display:none}.tm .ph.noph .ini{display:grid}
.tm h3{font-family:var(--disp);font-weight:400;font-size:clamp(26px,2vw,32px);line-height:1.08;letter-spacing:-.012em;margin:0 0 6px}
.tm .ttl{font-size:14.5px;color:var(--accL);margin:0 0 14px}
.tm .sm{font-size:15px;line-height:1.6;color:rgba(var(--boner),.84);margin:0 0 14px}
.tm details{border-top:1px solid var(--hair)}
.tm summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;padding:14px 0;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase}
.tm summary::-webkit-details-marker{display:none}
.tm summary::after{content:"+";font-size:18px;line-height:1;color:var(--accL);transition:transform .3s var(--eo)}
.tm details[open] summary::after{transform:rotate(45deg)}
.tm details p{font-size:14.5px;line-height:1.6;color:var(--stone);margin:0 0 10px}
.tm details a{color:var(--bone);overflow-wrap:anywhere}
@media (max-width:1100px){.tm{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.tm{grid-template-columns:1fr}.tm .ph{aspect-ratio:1/1}}
.advw{margin-top:clamp(88px,9vw,140px)}
.shead.sm{margin-bottom:clamp(32px,3.6vw,56px)}
.adv{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:var(--gap);border-top:1px solid var(--hair)}
.adv li{padding:22px 0 24px;border-bottom:1px solid var(--hair);position:relative}
.adv h4{font-family:var(--disp);font-weight:400;font-size:clamp(21px,1.6vw,25px);letter-spacing:-.01em;margin:0 0 8px}
.adv .lab{color:var(--accL)}
.adv p{margin:10px 0 0;font-size:14.5px;line-height:1.55;color:var(--stone);max-width:36ch}
@media (max-width:960px){.adv{grid-template-columns:1fr 1fr}}
@media (max-width:560px){.adv{grid-template-columns:1fr}}
.cta .cx{margin-top:clamp(56px,6vw,96px);padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--hairD)}
.cta .addr h3{margin-top:12px}
.cta>.wrap>.cx{grid-column:1/-1}
.cta .offs{margin-top:0;grid-template-columns:1fr 1fr}
@media (max-width:640px){.cta .offs{grid-template-columns:1fr}}
@media (max-width:860px){.story-r{height:44vh;height:44svh}.scene svg.mob text{font-size:12.5px;letter-spacing:.08em}.fieldbg{background:var(--ink)}}
'''
src = src.replace('</style>\n</head>', EXTRA + '</style>\n</head>', 1)

leftover = re.findall(r'(?i)firelight|fort lauderdale|rick@', src)
open(os.path.join(K, 'src', 'charteroak-equity.src.html'), 'w', encoding='utf-8').write(src)
print('wrote src; leftovers:', len(leftover), set(leftover))
