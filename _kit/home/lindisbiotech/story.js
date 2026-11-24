/* The story scene (DB/BL): the Triomab® mode of action, from lindisbiotech.com/science (Ruf & Lindhofer, Blood 98, 2001):
   "T-cells are redirected to and activated at the tumor cells in an MHC-independent manner by Triomab antibody-mediated
   crosslink of tumor-associated antigens (TAA) with CD3 (signal 1). Simultaneously or subsequently, accessory cells can be
   additionally bound via the Fc region" (macrophages, DCs, NK cells; costimulation, signal 2); "tumor cells are effectively
   destroyed by a concerted attack" (perforin/granzyme, ADCC, phagocytosis), and tumour particles are "phagocytosed,
   processed, and presented", which "can lead to ... a patient-specific and long-term anti-tumor immunization effect".
   Drawn as ONE fine-line scene that fills the frame: a tumour cell (EpCAM on its membrane), a T cell (CD3), an accessory
   cell (Fc-gamma receptors) and, between them, a Triomab antibody standing as a Y, the shape of the Lindis mark.
   Frame 0 is already complete (cells drawn, antibody waiting).
   Step 1 (signal 1): the two Fab arms reach the tumour cell and the T cell; both receptors light.
   Step 2 (signal 2): the Fc stem reaches the accessory cell; cytokines pass between it and the T cell.
   Step 3 (attack and memory): granules cross to the tumour cell, which breaks up quietly; its particles are taken up by
   the accessory cell, and the T cell multiplies. Every drawn stroke reaches its true end point.
   Labels keep >= 8px clear of every stroke and dot (DR). */
var SCW=760,SCH=560;
var TU=[220,200,105],TC=[566,186,66],AC=[390,474,44],HUB=[390,330];
function onCirc(c,tx,ty,d){var dx=tx-c[0],dy=ty-c[1],L=Math.sqrt(dx*dx+dy*dy);return [c[0]+dx/L*(c[2]+(d||0)),c[1]+dy/L*(c[2]+(d||0))]}
var AL=onCirc(TU,HUB[0],HUB[1],6),AR=onCirc(TC,HUB[0],HUB[1],6),AS=[AC[0],AC[1]-AC[2]-6];
function blob(c,n,amp,seed){var d='',k,pts=[];for(k=0;k<n;k++){var a=k/n*Math.PI*2,r=c[2]*(1+amp*Math.sin(a*3+seed)+amp*.6*Math.cos(a*5+seed*2));pts.push([c[0]+Math.cos(a)*r,c[1]+Math.sin(a)*r])}
  d='M'+pts[0][0].toFixed(1)+' '+pts[0][1].toFixed(1);for(k=0;k<n;k++){var p0=pts[k],p1=pts[(k+1)%n],m=[(p0[0]+p1[0])/2,(p0[1]+p1[1])/2];d+='Q'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+' '+m[0].toFixed(1)+' '+m[1].toFixed(1)}
  var p=pts[0],m0=[(pts[n-1][0]+p[0])/2,(pts[n-1][1]+p[1])/2];return 'M'+m0[0].toFixed(1)+' '+m0[1].toFixed(1)+d.slice(d.indexOf('Q'))+'Z'}
function ticks(c,angles,len,cls,hit){return angles.map(function(a){var r=a*Math.PI/180,x0=c[0]+Math.cos(r)*c[2],y0=c[1]+Math.sin(r)*c[2],x1=c[0]+Math.cos(r)*(c[2]+len),y1=c[1]+Math.sin(r)*(c[2]+len);
  return '<path class="'+cls+(hit===a?' hit':'')+'" d="M'+x0.toFixed(1)+' '+y0.toFixed(1)+'L'+x1.toFixed(1)+' '+y1.toFixed(1)+'"/>'}).join('')}
function ang(c,p){return Math.round(Math.atan2(p[1]-c[1],p[0]-c[0])*180/Math.PI)}
var aTU=ang(TU,HUB),aTC=ang(TC,HUB);
function dendrites(c){var d='',A=[200,240,300,340,20,160],k;for(k=0;k<A.length;k++){var a=A[k]*Math.PI/180,x0=c[0]+Math.cos(a)*c[2],y0=c[1]+Math.sin(a)*c[2],x1=c[0]+Math.cos(a)*(c[2]+22),y1=c[1]+Math.sin(a)*(c[2]+22);
  if(A[k]>250&&A[k]<290)continue;d+='M'+x0.toFixed(1)+' '+y0.toFixed(1)+'Q'+((x0+x1)/2+Math.sin(a)*6).toFixed(1)+' '+((y0+y1)/2-Math.cos(a)*6).toFixed(1)+' '+x1.toFixed(1)+' '+y1.toFixed(1)}return d}
var CYT='M'+(TC[0]-30)+' '+(TC[1]+60)+'Q'+(TC[0]-10)+' 370 '+(AC[0]+40)+' '+(AC[1]-36);
var PERF='M'+(TC[0]-62)+' '+(TC[1]+4)+'Q 440 160 '+(TU[0]+102)+' '+(TU[1]-14);
var FRAG=[[250,230],[200,170],[180,240],[260,160],[230,270]];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'100 10 560 540':'96 16 624 524')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="tu sD" id="tuOut" d="'+blob(TU,22,.035,.7)+'"/>';
  g+='<path class="wo sD" d="'+blob([TU[0]-14,TU[1]+8,34],12,.05,1.3)+'"/>';
  g+='<path class="wl sD" d="M'+(TC[0]+TC[2])+' '+TC[1]+'A'+TC[2]+' '+TC[2]+' 0 1 0 '+(TC[0]-TC[2])+' '+TC[1]+'A'+TC[2]+' '+TC[2]+' 0 1 0 '+(TC[0]+TC[2])+' '+TC[1]+'"/>';
  g+='<path class="wo sD" d="'+blob([TC[0]+6,TC[1]-4,30],10,.04,2.1)+'"/>';
  g+='<path class="wl sD" d="M'+(AC[0]+AC[2])+' '+AC[1]+'A'+AC[2]+' '+AC[2]+' 0 1 0 '+(AC[0]-AC[2])+' '+AC[1]+'A'+AC[2]+' '+AC[2]+' 0 1 0 '+(AC[0]+AC[2])+' '+AC[1]+'"/>';
  g+='<path class="wo sD" d="'+dendrites(AC)+'"/>';
  g+='<path class="wo sD" d="'+blob([AC[0]+4,AC[1]+4,18],9,.06,.4)+'"/>';
  g+='</g>';
  g+='<g id="scRcp">'+ticks(TU,[aTU-40,aTU-20,aTU,aTU+20,aTU+40,aTU+150,aTU+175,aTU-150,aTU-120,aTU+110,aTU-80,aTU+70],9,'ep',aTU)+ticks(TC,[aTC-30,aTC,aTC+30,aTC+90,aTC-90,aTC+150,aTC-150],8,'cd',aTC)+ticks(AC,[-90,-60,-120],7,'fc',-90)+'</g>';
  /* the Triomab antibody: a Y with a hub, two Fab arms (one per specificity) and the Fc stem */
  g+='<g id="scAb"><path class="abW" id="armL" d="M'+HUB[0]+' '+HUB[1]+'L'+AL[0].toFixed(1)+' '+AL[1].toFixed(1)+'"/><path class="abR" id="armR" d="M'+HUB[0]+' '+HUB[1]+'L'+AR[0].toFixed(1)+' '+AR[1].toFixed(1)+'"/><path class="abW" id="stem" d="M'+HUB[0]+' '+HUB[1]+'L'+AS[0]+' '+AS[1]+'"/><circle class="hub" cx="'+HUB[0]+'" cy="'+HUB[1]+'" r="4.5"/></g>';
  g+='<path class="cyt" id="scCyt" d="'+CYT+'"/>';
  g+='<g id="scCd">';for(var k=0;k<5;k++)g+='<circle class="cdot" r="3.4"/>';g+='</g>';
  g+='<g id="scPf">';for(k=0;k<6;k++)g+='<circle class="pdot" r="3"/>';g+='</g>';
  g+='<g id="scFr">';FRAG.forEach(function(f,i){g+='<circle class="frag" cx="'+f[0]+'" cy="'+f[1]+'" r="'+(5-i%2)+'"/>'});g+='</g>';
  g+='<g id="scClone"><circle class="clone" cx="'+(TC[0]+82)+'" cy="'+(TC[1]+56)+'" r="22"/><circle class="clone" cx="'+(TC[0]+40)+'" cy="'+(TC[1]+96)+'" r="18"/></g>';
  if(!mob){
    g+='<text class="t" x="'+TU[0]+'" y="'+(TU[1]+TU[2]+34)+'" text-anchor="middle">TUMOUR CELL · EpCAM</text>';
    g+='<text class="t" x="'+(TC[0]+TC[2]+18)+'" y="'+(TC[1]-46)+'">T CELL</text><text class="t" x="'+(TC[0]+TC[2]+18)+'" y="'+(TC[1]-31)+'">CD3</text>';
    g+='<text class="t" x="'+(AC[0]+AC[2]+40)+'" y="'+(AC[1]+18)+'">ACCESSORY CELL</text><text class="t" x="'+(AC[0]+AC[2]+40)+'" y="'+(AC[1]+33)+'">Fcγ RECEPTOR</text>';
  }
  var ly=38,lx=mob?112:106;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SIGNAL 1: CROSSLINKED':'SIGNAL 1 · TUMOUR CELL AND T CELL CROSSLINKED')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SIGNAL 2: VIA THE Fc':'SIGNAL 2 · ACCESSORY CELL BOUND VIA THE Fc')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ATTACK AND MEMORY':'CONCERTED ATTACK, THEN IMMUNE MEMORY')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),armL:dl("#armL")[0],armR:dl("#armR")[0],stem:dl("#stem")[0],cyt:$("#scCyt",svg),cd:$$("#scCd .cdot",svg),pf:$$("#scPf .pdot",svg),
    fr:$$("#scFr .frag",svg),cl:$$("#scClone .clone",svg),tu:$("#tuOut",svg),ep:$("#scRcp .ep.hit",svg),cdh:$("#scRcp .cd.hit",svg),fch:$("#scRcp .fc.hit",svg),hub:$("#scAb .hub",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var cytL=E.cyt.getTotalLength(),pfP=document.createElementNS("http://www.w3.org/2000/svg","path");pfP.setAttribute("d",PERF);var pfL=pfP.getTotalLength();
  var lastB=-1;
  function draw(a,v){if(a)a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(2)}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){draw(a,b)})}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.7,.94);
    /* 1. the Fab arms reach the tumour cell and the T cell (both arms reach their true end points) */
    var a1=sm(s1/.7);draw(E.armL,a1);draw(E.armR,a1);op(E.hub,b);
    if(E.ep)E.ep.classList.toggle("on",a1>.98);if(E.cdh)E.cdh.classList.toggle("on",a1>.98);
    /* 2. the Fc stem reaches the accessory cell; cytokines pass between it and the T cell */
    var a2=sm(s2/.5);draw(E.stem,a2);if(E.fch)E.fch.classList.toggle("on",a2>.98);
    var cy=sm((s2-.45)/.55)*(1-seg(p,.86,.94));
    E.cd.forEach(function(c,i){var u=((p*6+i/E.cd.length)%1),pt=E.cyt.getPointAtLength(cytL*(i%2?u:1-u));c.setAttribute("cx",pt.x.toFixed(1));c.setAttribute("cy",pt.y.toFixed(1));op(c,b*cy*Math.sin(u*Math.PI))});
    /* 3. granules cross to the tumour cell, which breaks up quietly; the accessory cell takes up its particles; the T cell multiplies */
    var g3=sm(s3/.45),br=sm((s3-.35)/.4),up=sm((s3-.55)/.45);
    E.pf.forEach(function(c,i){var u=Math.max(0,Math.min(1,g3*1.4-i*.08)),pt=pfP.getPointAtLength(pfL*u);c.setAttribute("cx",pt.x.toFixed(1));c.setAttribute("cy",pt.y.toFixed(1));op(c,b*(u>0&&u<1?1:0)*(1-br))});
    if(E.tu){E.tu.style.opacity=(1-.72*br).toFixed(3);E.tu.classList.toggle("brk",br>.02)}
    E.fr.forEach(function(f,i){var fx=FRAG[i][0],fy=FRAG[i][1],t=sm((up-i*.08)/.6),x=lerp(fx,AC[0]-10+i*5,t),y=lerp(fy,AC[1]-8+i*3,t);f.setAttribute("cx",x.toFixed(1));f.setAttribute("cy",y.toFixed(1));op(f,b*br*(1-sm((t-.85)/.15)))});
    E.cl.forEach(function(c,i){op(c,b*sm((up-.2-i*.25)/.4))});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}
