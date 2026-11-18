/* ================= VIEWS (PE template: generic, driven by D; sections disappear when their data is empty) ================= */
function has(a){return a&&a.length>0}
function lk(u,l){return '<a class="ul" href="'+u+'"'+(/^(https?:|mailto:)/.test(u)&&!/^mailto:/.test(u)?' target="_blank" rel="noopener"':'')+'>'+l+'</a>'}
function shead(k,h,p,cls){return '<div class="shead"><div><span class="lab kick" data-r>'+k+'</span><h2 class="d2 split">'+h+'</h2></div>'+(p?'<p data-r>'+p+'</p>':'')+'</div>'}
function indList(L){return '<ul class="ind">'+L.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul>'}
function facts(L){return '<dl class="facts">'+L.map(function(f){return '<div><dt class="lab">'+esc(f[0])+'</dt><dd>'+esc(f[1])+'</dd></div>'}).join("")+'</dl>'}
var PHOTOS=has(D.team)&&D.team.filter(function(p){return p.img}).length>=Math.ceil(D.team.length/2);
var SHEETS=has(D.team)&&D.team.every(function(p){return has(p.bio)})?D.team:[];
var GROUPS=(function(){var G=[],g=null;(D.team||[]).forEach(function(p){if(p.grp!==g){g=p.grp;G.push([g,[]])}G[G.length-1][1].push(p)});return G})();
function grid(groups){return groups.map(function(g){return '<div class="grp">'+(groups.length>1||g[0]?'<span class="lab grp-l">'+esc(g[0]||"Team")+'</span>':'')+'<div class="pg">'+g[1].map(function(p){var link=SHEETS.length>0;
  var inner='<div class="ph'+(p.img?'':' noph')+'">'+(p.img?'<img src="'+p.img+'" alt="Portrait of '+esc(p.name)+'" loading="eager" onerror="this.parentNode.classList.add(\'noph\')">':'')+'<span class="ini" aria-hidden="true"></span>'+(link?'<span class="go" aria-hidden="true">'+ARR+'</span>':'')+'</div><h3><span>'+esc(p.name)+'</span></h3><p>'+esc(p.title)+'</p>';
  return link?'<a class="pt" href="#/team/'+p.slug+'" data-person aria-label="'+esc(p.name)+', '+esc(p.title)+'. Open profile">'+inner+'</a>':'<div class="pt">'+inner+'</div>'}).join("")+'</div></div>'}).join("")}
function peopleBlock(){if(!has(D.team))return "";return PHOTOS?grid(GROUPS):mhList(GROUPS.map(function(g){return [g[0]||"Team",g[1].map(function(p){return {name:p.name,title:p.title,sum:p.sum,slug:p.slug,bio:SHEETS.length?p.bio:null}})]}))}
function portList(L){return portRows(L.map(function(c){return {n:c.name,st:c.st,d:c.desc,l:c.links}}))}

/* home sections (the order comes from the layout variant) */
var SEC={
  thesis:function(cl){if(!D.thesis&&!has(D.stats))return "";return '<section class="sec mani '+cl+'" data-theme="dark"><div class="wrap">'+
    (D.thesis?'<div class="mani-in"><span class="lab kick" data-r>'+esc(D.thesis.kick||"Who we are")+'</span><p class="txt" id="mani">'+D.thesis.text+'</p></div>':'')+
    (has(D.stats)?'<div class="stats'+(D.thesis?'':' solo')+'">'+D.stats.map(function(s){return '<div class="stat"><span class="ln2"></span><span class="v">'+esc(s.v)+(s.sup?'<sup>'+esc(s.sup)+'</sup>':'')+'</span><span class="k">'+esc(s.k)+'</span></div>'}).join("")+'</div>':'')+
    '</div></section>'},
  story:function(){if(!D.story||!has(D.story.steps))return "";var S=D.story;return '<section class="story" id="story" data-theme="dark"><div class="story-pin">'+
    '<div class="story-l"><span class="lab kick">'+esc(S.kick||"How we invest")+'</span><h2 class="d3">'+S.title+'</h2>'+
    '<div class="rail" aria-hidden="true"><i class="prog" id="rprog"></i>'+S.steps.map(function(s,i){return '<span'+(i?'':' class="on"')+'>'+esc(s.tag)+'</span>'}).join("")+'</div>'+
    '<div class="steps">'+S.steps.map(function(s,i){return '<article class="step'+(i?'':' on')+'"><h3>'+esc(s.title)+'</h3><p>'+esc(s.text)+'</p></article>'}).join("")+'</div></div>'+
    '<div class="story-r"><div class="scene" id="scene">'+scene()+'</div></div></div></section>'},
  sectors:function(cl){var F=D.focus||{};if(!has(F.sectors))return "";return '<section class="sec '+cl+'" data-theme="'+(cl.indexOf("light")>=0?"light":"dark")+'"><div class="wrap">'+
    shead(esc(F.kick||"Focus"),F.homeTitle||'Where we <em>invest.</em>',esc(F.sectorsText||""))+indList(F.sectors.slice(0,9))+
    (ROUTES.focus?'<div class="more" data-r><a class="btn" href="#/focus">'+esc(has(F.criteria)?"Industries and criteria":"Our focus")+' '+ARR+'</a></div>':'')+'</div></section>'},
  portfolio:function(cl){var P=D.portfolio;if(!has(P))return "";var cur=P.filter(function(c){return c.cur}),L=(cur.length?cur:P).slice(0,5);return '<section class="sec '+cl+'" data-theme="'+(cl.indexOf("light")>=0?"light":"dark")+'"><div class="wrap">'+
    shead(esc(D.portTitle||"Portfolio"),D.portHome||'Companies we <em>back.</em>',esc(D.portIntro||""))+portList(L)+
    (P.length>L.length?'<div class="more" data-r><a class="btn" href="#/portfolio">All investments '+ARR+'</a></div>':'')+'</div></section>'},
  team:function(cl){if(!has(D.team))return "";return '<section class="sec '+cl+'" data-theme="'+(cl.indexOf("light")>=0?"light":"dark")+'"><div class="wrap">'+
    shead("Team",D.teamHome||'The people <em>behind the firm.</em>',esc(D.teamIntro||""))+peopleBlock()+
    '<div class="more" data-r><a class="btn" href="#/team">Meet the team '+ARR+'</a></div></div></section>'},
  news:function(cl){if(!has(D.news))return "";return '<section class="sec '+cl+'" data-theme="'+(cl.indexOf("light")>=0?"light":"dark")+'"><div class="wrap">'+
    '<div class="shead" style="margin-bottom:36px"><h2 class="d3 split">News</h2>'+(D.news.length>3?'<a class="btn" href="#/news" data-r>All news '+ARR+'</a>':'')+'</div>'+newsRows(D.news.slice(0,3))+'</div></section>'}
};
function vHome(){var H=D.home||{};
  return '<section class="hero" id="hero" data-field data-theme="dark">'+
   '<span class="lab eyebrow" data-r>'+esc(H.eyebrow||"Private equity")+'</span>'+
   '<h1 class="d1 hero-h" id="pageTitle" tabindex="-1">'+(H.title||[esc(SITE)]).map(function(l){return '<span class="l">'+l+'</span>'}).join("")+'</h1>'+
   '<div class="hero-foot">'+(H.lede?'<p class="s" data-r>'+esc(H.lede)+'</p>':'')+
   '<div class="act" data-r>'+(H.cta1?'<a class="btn solid" href="'+H.cta1[1]+'">'+esc(H.cta1[0])+' '+ARR+'</a>':'')+(H.cta2?'<a class="btn" href="'+H.cta2[1]+'">'+esc(H.cta2[0])+'</a>':'')+'</div></div>'+
  '</section>'+
  HOMEORDER.map(function(k){return SEC[k[0]](k[1])}).join("")+cta();
}
function cta(){var C=D.cta||{};
  return '<section class="sec light cta" data-theme="light"><div class="wrap">'+
   '<span class="lab kick" data-r>'+esc(C.kick||"For owners and advisors")+'</span>'+
   '<h2 class="big split">'+(C.title||'Start a <em>conversation.</em>')+'</h2>'+
   (C.text?'<p class="sub" data-r>'+esc(C.text)+'</p>':'')+
   '<div class="act" data-r><a class="btn solid" href="#/contact">'+esc(C.button||"Start a conversation")+' '+ARR+'</a>'+(D.email?'<a class="btn" href="mailto:'+D.email+'">'+esc(D.email)+'</a>':'')+'</div>'+
  '</div></section>';
}
function vFocus(){var F=D.focus||{};
  return head({k:"Focus",h:F.title||'What we <em>look for.</em>',p:F.intro?esc(F.intro):""})+
  (has(F.criteria)?'<section class="sec light first" data-theme="light"><div class="wrap">'+shead("Criteria",F.critTitle||'Investment <em>criteria.</em>',esc(F.critText||""))+facts(F.criteria)+'</div></section>':'')+
  (has(F.sectors)?'<section class="sec dark'+(has(F.criteria)?'':' first')+'" data-theme="dark"><div class="wrap">'+shead("Industries",F.sectorsTitle||'Where we <em>invest.</em>',esc(F.sectorsText||""))+indList(F.sectors)+
    (has(F.models)?'<div class="credit"><span class="lab" data-r>'+esc(F.modelsLabel||"Business models")+'</span><p data-r>'+esc(F.models.join(", "))+'.</p></div>':'')+'</div></section>':'')+
  (has(F.pillars)?'<section class="sec light" data-theme="light" style="background:var(--bone2)"><div class="wrap"><div class="pillars p'+F.pillars.length+'">'+F.pillars.map(function(p){return '<div class="pl3"><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></div>'}).join("")+'</div></div></section>':'')+cta();
}
function vPort(){var P=D.portfolio||[],cur=P.filter(function(c){return c.cur}),re=P.filter(function(c){return !c.cur});
  return head({k:"Portfolio",h:D.portPage||'Companies we <em>back.</em>',p:esc(D.portIntro||"")})+
  '<section class="sec light first" data-theme="light"><div class="wrap">'+
   (cur.length?'<span class="lab kick" data-r>'+(re.length?"Current investments":"Investments")+'</span>'+portList(cur):'')+
   (re.length?'<span class="lab kick" data-r'+(cur.length?' style="margin-top:clamp(64px,7vw,110px)"':'')+'>Realized investments</span>'+portList(re):'')+
  '</div></section>'+cta();
}
function vTeam(){return head({k:"Team",h:D.teamPage||'The people <em>behind the firm.</em>',p:esc(D.teamIntro||"")})+'<section class="sec light first" data-theme="light"><div class="wrap">'+peopleBlock()+'</div></section>'+cta()}
function vNews(){return head({k:"News",h:'News and <em>announcements.</em>',p:esc(D.newsIntro||"")})+'<section class="sec dark first" data-theme="dark"><div class="wrap"><span class="lab kick" data-r>Updates</span>'+newsRows(D.news||[])+'</div></section>'+cta()}
function fld(id,lab,type,req,w){return '<div class="fld'+(w?' w':'')+'"><label for="f-'+id+'">'+lab+(req?' *':'')+'</label>'+(type==="ta"?'<textarea id="f-'+id+'" name="'+id+'" rows="4"'+(req?' required aria-required="true"':'')+'></textarea>':'<input id="f-'+id+'" name="'+id+'" type="'+type+'"'+(req?' required aria-required="true"':'')+' autocomplete="'+(id==="email"?"email":id==="name"?"name":"organization")+'">')+'<i class="bar"></i><span class="err">Required</span></div>'}
function vContact(){var C=D.contact||{},O=D.offices||[];
  return head({k:"Contact",h:C.title||'Start a <em>conversation.</em>',p:esc(C.intro||"")})+
  '<section class="sec light first" data-theme="light"><div class="wrap"><div class="cgrid">'+
   '<div class="addr" data-r>'+(D.email?'<span class="lab">Email</span><br><a class="ml ul" href="mailto:'+D.email+'">'+esc(D.email)+'</a>':'')+(C.phone?'<br><span class="lab">Phone</span><br><a class="ml ul" href="tel:'+C.phone.replace(/[^0-9+]/g,"")+'">'+esc(C.phone)+'</a>':'')+
    (C.note?'<p>'+esc(C.note)+'</p>':'')+
    (O.length?'<div class="offs">'+O.map(function(o){return '<div><span class="lab">'+esc(o.label||"Office")+'</span><b>'+esc(o.city)+'</b>'+(o.lines?'<p class="ol">'+o.lines.map(esc).join("<br>")+'</p>':'')+'</div>'}).join("")+'</div>':'')+'</div>'+
   '<div class="formwrap" id="fw" data-r><form class="form" id="cform" novalidate>'+fld("name","Name","text",1)+fld("email","Email","email",1)+fld("org","Company","text",0,1)+fld("msg","Tell us about the business","ta",1,1)+
    '<div class="sub"><span class="lab">Front-end concept form · no data is sent</span><button class="btn solid" type="submit">Send message '+ARR+'</button></div></form>'+
    '<div class="thanks" id="thanks" tabindex="-1"><svg viewBox="-70 -70 140 140" aria-hidden="true"><rect x="-66" y="-66" width="132" height="132" rx="'+SHAPE_R+'"/><rect x="-46" y="-46" width="92" height="92" rx="'+(SHAPE_R*.7)+'"/><rect x="-26" y="-26" width="52" height="52" rx="'+(SHAPE_R*.4)+'"/></svg><h3 class="d3">Thank you.</h3><p class="muted" style="margin-top:16px;max-width:44ch">Your message is noted. On the live site this form would reach the '+esc(D.short||SITE)+' team directly.</p></div></div>'+
  '</div></div></section>';
}
function v404(){return head({k:"Not found",h:'This page <em>does not exist.</em>',p:'<a class="ul" href="#/">Return home →</a>'})}
function footer(){var O=D.offices||[],F=D.focus||{};
  var c2=has(F.criteria)?['Criteria',F.criteria.slice(0,2).map(function(f){return esc(f[1].length>44?f[0]:f[1])}).join("<br>")]:(has(F.sectors)?['Focus',F.sectors.slice(0,3).map(esc).join("<br>")]:null);
  return '<footer class="ftr" data-theme="dark" data-field><canvas class="fcv" aria-hidden="true"></canvas><div class="cols">'+
   '<div class="c"><span class="lab">'+(O.length>1?"Offices":"Office")+'</span>'+(O.length?O.map(function(o){return esc(o.city)}).join("<br>"):esc(D.hq||""))+'</div>'+
   (c2?'<div class="c"><span class="lab">'+c2[0]+'</span>'+c2[1]+'</div>':'')+
   '<div class="c"><span class="lab">Explore</span>'+NAV.map(function(n){return '<a class="ul" href="#/'+n[0]+'">'+n[1]+'</a>'}).join("<br>")+'</div>'+
   '<div class="c"><span class="lab">Contact</span>'+(D.email?'<a class="ul" href="mailto:'+D.email+'">'+esc(D.email)+'</a><br>':'')+'<a class="ul" href="#/contact">Send a message</a></div>'+
  '</div><svg class="bigsvg" viewBox="0 0 520 26" aria-hidden="true"><text x="260" y="21" text-anchor="middle">'+esc((D.wordmark||SITE).toUpperCase())+'</text></svg>'+
  '<div class="legal"><span class="lab">© 2026 '+esc(D.legal||SITE)+'</span><span class="lab">Concept website</span><a class="lab ul" href="#main" id="toTop">Back to top ↑</a></div></footer>';
}

/* ================= ROUTER ================= */
var ROUTES={focus:!!(D.focus&&(has(D.focus.criteria)||has(D.focus.sectors))),portfolio:has(D.portfolio),team:has(D.team),news:has(D.news)};
var NAV=[["focus","Focus"],["portfolio","Portfolio"],["team","Team"],["news","News"]].filter(function(n){return ROUTES[n[0]]});
function route(h){
  var p=(h||"").replace(/^#\/?/,"").split("/").filter(Boolean);
  if(!p.length)return {k:"home",v:vHome,t:(D.metaTitle||SITE),x:"Home"};
  if(p[0]==="focus"&&ROUTES.focus)return {k:"focus",v:vFocus,t:"Focus — "+SITE,x:"Focus"};
  if(p[0]==="portfolio"&&ROUTES.portfolio)return {k:"portfolio",v:vPort,t:"Portfolio — "+SITE,x:"Portfolio"};
  if(p[0]==="team"&&ROUTES.team){if(p[1]&&pBy(p[1])>=0)return {k:"team",v:vTeam,t:"Team — "+SITE,x:"Team",bio:p[1]};return {k:"team",v:vTeam,t:"Team — "+SITE,x:"Team"}}
  if(p[0]==="news"&&ROUTES.news)return {k:"news",v:vNews,t:"News — "+SITE,x:"News"};
  if(p[0]==="contact")return {k:"contact",v:vContact,t:"Contact — "+SITE,x:"Contact"};
  return {k:"404",v:v404,t:"Not found — "+SITE,x:"Not found"};
}
