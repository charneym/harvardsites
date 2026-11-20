/* the story scene (BL/BY/DB): ONE engraved stone viaduct over a river, the whole bridge ghosted from the first frame.
   Step 1 inks the first span (the platform, led by a Red Dog with skin in the game). Step 2 raises timber centering under
   the next spans: support that holds the work up without carrying the load (an active outside board, management equity).
   Step 3 sets the remaining arches, each keystone named for a real ADL Final Mile add-on (Sonic and Henry 2024, DMC 2025,
   Xcel 2026), lays the road across, and the centering comes away. Lines draw on scroll; labels fade in with their step. */
function viaduct(o){
  var W=o.W,H=o.H,f=function(n){return n.toFixed(1)},n=5,x0=o.x0,x1=W-o.x0,pw=o.pw,sp=(x1-x0-pw*(n+1))/n,deck=o.deck,spr=o.spr,rv=o.rv,rise=sp*.5,i,k;
  var g='<svg viewBox="0 0 '+W+' '+H+'" class="'+(o.mob?'mob':'')+'" aria-hidden="true">';
  function arch(cx,r){return 'M'+f(cx-r)+' '+f(spr)+'A'+f(r)+' '+f(r)+' 0 0 1 '+f(cx+r)+' '+f(spr)}
  var A=[];for(i=0;i<n;i++){var l=x0+pw*(i+1)+sp*i;A.push({l:l,r:l+sp,c:l+sp/2})}
  /* one span: its masonry outline, voussoirs, keystone and spandrel courses */
  function span(i,cls){var a=A[i],r=sp/2,s='',pl=a.l-pw,pr=a.r+pw;
    s+='<path class="'+cls+'" d="'+arch(a.c,r)+'M'+f(a.l)+' '+f(spr)+'V'+f(rv)+'M'+f(a.r)+' '+f(spr)+'V'+f(rv)+'"/>';
    s+='<path class="'+cls+'" d="'+arch(a.c,r+o.vd)+'"/>';
    var vs='';for(k=1;k<o.nv;k++){var th=Math.PI*k/o.nv;vs+='M'+f(a.c-Math.cos(th)*r)+' '+f(spr-Math.sin(th)*r)+'L'+f(a.c-Math.cos(th)*(r+o.vd))+' '+f(spr-Math.sin(th)*(r+o.vd))}
    s+='<path class="'+cls+' vs" d="'+vs+'"/>';
    var cr='';for(var y=deck+o.cs;y<spr-4;y+=o.cs){var dy=spr-y,hw=dy<r+o.vd?Math.sqrt(Math.max(0,(r+o.vd)*(r+o.vd)-dy*dy)):0;
      cr+='M'+f(pl+2)+' '+f(y)+'H'+f(a.c-hw-2)+(hw?'M'+f(a.c+hw+2)+' '+f(y)+'H'+f(pr-2):'')}
    s+='<path class="'+cls+' cs" d="'+cr+'"/>';
    return s}
  function piers(cls){var s='';for(i=0;i<=n;i++){var px=x0+i*(pw+sp);s+='<path class="'+cls+'" d="M'+f(px)+' '+f(rv+2)+'V'+f(deck)+'M'+f(px+pw)+' '+f(rv+2)+'V'+f(deck)+'M'+f(px-3)+' '+f(rv-6)+'H'+f(px+pw+3)+'"/>'}return s}
  function deckP(a,b){return 'M'+f(a)+' '+f(deck)+'H'+f(b)+'M'+f(a)+' '+f(deck-o.par)+'H'+f(b)+'M'+f(a)+' '+f(deck+5)+'H'+f(b)}
  /* base: hills, pines, river, banks and the ghost of the finished bridge */
  g+='<g id="scBase">';
  var hl='M0 '+f(o.hz);for(var x=0;x<=W;x+=8)hl+='L'+f(x)+' '+f(o.hz-o.ha*(.5+.3*Math.sin(x*.011+1)+.2*Math.sin(x*.031)));
  g+='<path class="hl sD" d="'+hl+'"/>';
  var pn='';for(x=14;x<W;x+=o.pg){var by=o.hz-o.ha*(.5+.3*Math.sin(x*.011+1)+.2*Math.sin(x*.031)),ht=o.ph*(.7+.3*Math.sin(x*1.7));
    pn+='M'+f(x)+' '+f(by)+'V'+f(by-ht)+'M'+f(x-ht*.18)+' '+f(by-ht*.62)+'L'+f(x)+' '+f(by-ht)+'L'+f(x+ht*.18)+' '+f(by-ht*.62)+'M'+f(x-ht*.13)+' '+f(by-ht*.78)+'L'+f(x+ht*.13)+' '+f(by-ht*.78)}
  g+='<path class="pn sD" d="'+pn+'"/>';
  g+='<path class="gr sD" d="M0 '+f(rv-8)+'L'+f(x0-6)+' '+f(rv-8)+'L'+f(x0)+' '+f(rv)+'H'+f(x1)+'L'+f(x1+6)+' '+f(rv-8)+'H'+W+'"/>';
  var rp='';for(k=0;k<o.nr;k++){var yy=rv+8+k*o.rs,inset=k*o.ri;for(x=x0+inset;x<x1-inset;x+=o.rl*2.2){var ln=o.rl*(.5+.5*Math.abs(Math.sin(x*.37+k)));rp+='M'+f(x)+' '+f(yy)+'h'+f(ln)}}
  g+='<path class="rp sD" d="'+rp+'"/>';
  g+='<g class="ghost">'+piers('gh');for(i=0;i<n;i++)g+=span(i,'gh');g+='<path class="gh" d="'+deckP(x0-10,x1+10)+'"/></g>';
  g+='</g>';
  /* step 1: the first span inked, abutment and road onto it */
  g+='<g id="sc1">'+span(0,'bl dr')+'<path class="bl dr" d="M'+f(x0)+' '+f(rv)+'V'+f(deck)+'M'+f(x0+pw)+' '+f(rv)+'V'+f(deck)+'M'+f(A[0].r)+' '+f(rv)+'V'+f(deck)+'M'+f(A[0].r+pw)+' '+f(rv)+'V'+f(deck)+'"/>'+
    '<path class="bl dr" d="'+deckP(0,A[0].r+pw)+'"/>'+
    '<path class="ks dr" d="M'+f(A[0].c-o.kw)+' '+f(spr-sp/2-o.vd-2)+'L'+f(A[0].c-o.kw*.7)+' '+f(spr-sp/2+1)+'H'+f(A[0].c+o.kw*.7)+'L'+f(A[0].c+o.kw)+' '+f(spr-sp/2-o.vd-2)+'Z"/>'+
    '<path class="ld" d="M'+f(A[0].c)+' '+f(o.l1[1]+6)+'V'+f(deck-o.par-6)+'"/><text x="'+f(o.l1[0])+'" y="'+f(o.l1[1])+'" text-anchor="'+o.l1[2]+'" class="a">'+o.l1[3]+'</text>'+
    '<text x="'+f(A[0].c)+'" y="'+f(spr+o.ky)+'" text-anchor="middle" class="t">PLATFORM</text></g>';
  /* step 2: timber centering under the next four spans, and the piers rising */
  g+='<g id="sc2">';for(i=1;i<n;i++){var a=A[i],r=sp/2,tc=arch(a.c,r-3)+'M'+f(a.l+2)+' '+f(spr)+'H'+f(a.r-2);
    for(k=1;k<6;k++){var th=Math.PI*k/6;tc+='M'+f(a.c)+' '+f(spr+o.tp)+'L'+f(a.c-Math.cos(th)*(r-3))+' '+f(spr-Math.sin(th)*(r-3))}
    tc+='M'+f(a.c-r*.6)+' '+f(spr)+'L'+f(a.c-r*.5)+' '+f(rv)+'M'+f(a.c+r*.6)+' '+f(spr)+'L'+f(a.c+r*.5)+' '+f(rv)+'M'+f(a.c)+' '+f(spr+o.tp)+'V'+f(rv);
    g+='<path class="tc dr" d="'+tc+'"/>'}
  g+=piers('pr dr');
  g+='<path class="ld" d="M'+f(A[2].c)+' '+f(o.l2[1]+6)+'V'+f(spr-sp/2+6)+'"/><text x="'+f(o.l2[0])+'" y="'+f(o.l2[1])+'" text-anchor="'+o.l2[2]+'" class="a">'+o.l2[3]+'</text>'+
    '<path class="ld" d="M'+f(A[3].c)+' '+f(rv-4)+'V'+f(o.l2b[1]-14)+'"/><text x="'+f(o.l2b[0])+'" y="'+f(o.l2b[1])+'" text-anchor="'+o.l2b[2]+'" class="a">'+o.l2b[3]+'</text></g>';
  /* step 3: the arches set, keystones named for the add-ons, the road laid across */
  g+='<g id="sc3">';for(i=1;i<n;i++){g+=span(i,'bl dr');var c=A[i].c;
    g+='<path class="ks dr" d="M'+f(c-o.kw)+' '+f(spr-sp/2-o.vd-2)+'L'+f(c-o.kw*.7)+' '+f(spr-sp/2+1)+'H'+f(c+o.kw*.7)+'L'+f(c+o.kw)+' '+f(spr-sp/2-o.vd-2)+'Z"/>';
    g+='<text x="'+f(c)+'" y="'+f(spr+o.ky)+'" text-anchor="middle" class="t w">'+o.add[i-1][0]+'</text><text x="'+f(c)+'" y="'+f(spr+o.ky+o.kl)+'" text-anchor="middle" class="t">'+o.add[i-1][1]+'</text>'}
  g+='<path class="bl dr" d="'+deckP(A[0].r+pw,W)+'"/>';
  g+='<text x="'+f(o.l3[0])+'" y="'+f(o.l3[1])+'" text-anchor="'+o.l3[2]+'" class="a">'+o.l3[3]+'</text></g>';
  return g+'</svg>';
}
function scene(){
  var ADD=[["SONIC","2024"],["HENRY","2024"],["DMC","2025"],["XCEL","2026"]];
  if(MOBILE())return viaduct({mob:1,W:400,H:440,x0:12,pw:10,deck:118,spr:214,rv:368,par:12,vd:9,nv:9,cs:12,tp:12,kw:5,ky:22,kl:14,
    hz:92,ha:20,ph:16,pg:15,nr:4,rs:13,ri:16,rl:8,add:ADD,
    l1:[16,30,"start","PLATFORM · A RED DOG IN CHARGE"],l2:[16,30,"start","SUPPORT · ACTIVE OUTSIDE BOARD"],l2b:[384,422,"end","ALIGNMENT · MANAGEMENT EQUITY"],l3:[16,30,"start","ADL FINAL MILE · FOUR ADD-ONS"]});
  return viaduct({W:800,H:520,x0:28,pw:16,deck:120,spr:262,rv:448,par:16,vd:13,nv:11,cs:14,tp:18,kw:8,ky:26,kl:16,
    hz:96,ha:26,ph:20,pg:19,nr:4,rs:14,ri:30,rl:12,add:ADD,
    l1:[40,30,"start","PLATFORM · LED BY A RED DOG WITH SKIN IN THE GAME"],l2:[40,30,"start","SUPPORT · AN ACTIVE, VALUE-ADDING OUTSIDE BOARD"],l2b:[772,510,"end","ALIGNMENT · EQUITY INCENTIVES FOR MANAGEMENT"],
    l3:[40,30,"start","ADL FINAL MILE · FOUR ADD-ONS, 2024–2026"]});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),ghost:$("#scBase .ghost",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),t1:$$("#sc1 text, #sc1 .ld",svg),t2:$$("#sc2 text, #sc2 .ld",svg),t3:$$("#sc3 text",svg),tc:$$("#sc2 .tc",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(list,v){list.forEach(function(el){el.style.opacity=v.toFixed(3)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.ghost.style.opacity=b.toFixed(3)}
    /* the first span is already drawn when the section pins (first frame is a complete picture) */
    var s1=b,s2=seg(p,.37,.58),s3=seg(p,.7,.92);
    E.g1.style.opacity=b.toFixed(3);draw(E.d1,s1);
    op(E.t1,b*(1-seg(p,.3,.36)));
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);op(E.tc,1-s3);draw(E.d2,s2);op(E.t2,s2*(1-seg(p,.62,.69)));
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);op(E.t3,seg(p,.7,.92)*seg(p,.69,.76));
  };
}
