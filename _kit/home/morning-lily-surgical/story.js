/* the story scene (BL/BY/DB): ONE engraved drawing sheet kept on screen for all three steps (schematic, not the device's design).
   Left: a closed nitinol wire loop between two plates. Right: the alloy's superelastic stress-strain loop (loading plateau above,
   unloading plateau below). Step 1 the plates squeeze the loop and release it with the scroll, and a point traces the
   hysteresis loop in step. Step 2 a tray of identical commercial-grade units appears under the loop. Step 3 repeat test cycles
   overlay the curve and the milestone line lights to preclinical. Sources: NRC IRAP records 1023364 (biomechanical and
   pre-clinical testing of a nitinol implantation device) and 1034006 (commercial-grade units from a nitinol manufacturer,
   preclinical animal studies, regulatory submission). Driven by the scrubbed story progress. */
var LP={cx:210,cy:214,r:118};
var CH={o:[478,330]};
/* loading: elastic rise, upper plateau, final rise. unloading: elastic drop, lower plateau, return */
var LOAD=[[478,330],[514,236],[536,226],[690,212],[734,136]];
var UNLD=[[734,136],[706,286],[680,292],[548,302],[478,330]];
var MS=[["PROTOTYPE",64],["COMMERCIAL UNITS",292],["PRECLINICAL",520],["REGULATORY",736]];
function polyPt(P,u){var L=[],T=0,i;for(i=1;i<P.length;i++){var d=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);L.push(d);T+=d}
  var g=Math.max(0,Math.min(1,u))*T;for(i=0;i<L.length;i++){if(g<=L[i]||i===L.length-1){var k=L[i]?Math.min(1,g/L[i]):0;return [P[i][0]+(P[i+1][0]-P[i][0])*k,P[i][1]+(P[i+1][1]-P[i][1])*k]}g-=L[i]}return P[P.length-1]}
function pth(P,dx,dy){dx=dx||0;dy=dy||0;return P.map(function(q,i){return (i?'L':'M')+(q[0]+dx).toFixed(1)+' '+(q[1]+dy).toFixed(1)}).join('')}
function hatch(x,y,w,h){var s='';for(var i=-h;i<w;i+=9){var x1=Math.max(x,x+i),y1=y+(x1-(x+i)),x2=Math.min(x+w,x+i+h),y2=y+(x2-(x+i));s+='M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)}return s}
function scene(){
  var mob=MOBILE(),g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="mlg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#faac85" stop-opacity=".22"/><stop offset="1" stop-color="#faac85" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* drawing-sheet registration marks */
  g+='<path class="lr sD" d="M24 24h22M24 24v22M776 24h-22M776 24v22M24 506h22M24 506v-22M776 506h-22M776 506v-22"/>';
  /* chart axes and ticks */
  var o=CH.o;g+='<path class="bp sD" d="M'+o[0]+' '+(o[1])+'H770M'+o[0]+' '+o[1]+'V84"/>';
  var tk='';for(i=1;i<=6;i++)tk+='M'+(o[0]+i*48)+' '+o[1]+'v6';for(i=1;i<=5;i++)tk+='M'+o[0]+' '+(o[1]-i*48)+'h-6';g+='<path class="bp sD" d="'+tk+'"/>';
  g+='<path class="lr sD" d="M'+o[0]+' 212H770M'+o[0]+' 302H770"/>';
  g+='<path class="cv sD" d="'+pth(LOAD)+'"/><path class="cv cu sD" d="'+pth(UNLD)+'"/>';
  g+='<text class="t" x="'+(o[0]+10)+'" y="96">STRESS</text><text class="t" x="770" y="352" text-anchor="end">STRAIN</text>';
  /* milestone line */
  g+='<path class="bp sD" d="M64 470H736"/>';
  g+='<text class="t" x="776" y="532" text-anchor="end">NITINOL · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<circle cx="'+LP.cx+'" cy="'+LP.cy+'" r="'+(LP.r*1.5)+'" fill="url(#mlg)" id="lpGlow"/>';
  /* the two plates (engraved, hatched) */
  g+='<g id="jawT"><rect class="jw" x="66" y="-14" width="288" height="14"/><path class="jh" d="'+hatch(66,-14,288,14)+'"/></g>';
  g+='<g id="jawB"><rect class="jw" x="66" y="0" width="288" height="14"/><path class="jh" d="'+hatch(66,0,288,14)+'"/></g>';
  /* the wire loop: outer line, inner line, a highlight */
  g+='<ellipse class="wo" id="wo" cx="'+LP.cx+'" cy="'+LP.cy+'" rx="'+LP.r+'" ry="'+LP.r+'"/><ellipse class="wi" id="wi" cx="'+LP.cx+'" cy="'+LP.cy+'" rx="'+(LP.r-7)+'" ry="'+(LP.r-7)+'"/>';
  /* test cycles (step 3) */
  g+='<g id="cyc"><path class="cy" d="'+pth(LOAD,0,5)+pth(UNLD,0,5)+'"/><path class="cy" d="'+pth(LOAD,0,10)+pth(UNLD,0,10)+'"/></g>';
  g+='<circle class="dot" id="dot" cx="'+o[0]+'" cy="'+o[1]+'" r="6"/>';
  /* tray of units (step 2) */
  g+='<g id="tray"><path class="tr" d="M54 384H366V446H54Z"/><path class="tr2" d="M60 390H360V440H60Z"/>';
  for(i=0;i<5;i++){var ux=94+i*58;g+='<ellipse class="un" cx="'+ux+'" cy="415" rx="19" ry="19"/><ellipse class="un2" cx="'+ux+'" cy="415" rx="14" ry="14"/>'}g+='</g>';
  /* milestones */
  MS.forEach(function(m,j){g+='<circle class="ms" id="ms'+j+'" cx="'+m[1]+'" cy="470" r="7"/><text class="t mt" x="'+m[1]+'" y="'+(mob?504:496)+'" text-anchor="'+(j===0?"start":j===3?"end":"middle")+'" dx="'+(j===0?-7:j===3?7:0)+'">'+m[0]+'</text>'});
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="'+(mob?772:770)+'" y="'+(mob?60:62)+'" text-anchor="end">'+(mob?'SUPERELASTIC':'SUPERELASTIC PLATEAU')+'</text><path class="ldr" d="M'+(mob?690:690)+' '+(mob?72:72)+'L612 204"/></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?54:54)+'" y="'+(mob?374:372)+'">'+(mob?'UNITS':'COMMERCIAL-GRADE UNITS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="770" y="'+(mob?396:390)+'" text-anchor="end">'+(mob?'TEST CYCLES':'BIOMECHANICAL TEST CYCLES')+'</text><path class="ldr" d="M'+(mob?700:690)+' '+(mob?372:376)+'L672 '+(mob?306:304)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),wo:$("#wo",svg),wi:$("#wi",svg),jt:$("#jawT",svg),jb:$("#jawB",svg),
    dot:$("#dot",svg),cyc:$("#cyc",svg),tray:$("#tray",svg),ms:$$(".ms",svg),mt:$$(".mt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),gl:$("#lpGlow",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.36,.52),s3=seg(p,.68,.86);
    /* squeeze cycles with the scroll: load on the first half of each cycle, release on the second */
    var cyc=(p*3.4)%1,load=cyc<.5,s=load?cyc*2:2-cyc*2;s=s*s*(3-2*s);
    var rx=LP.r*(1+.34*s),ry=LP.r*(1-.6*s);
    E.wo.setAttribute("rx",rx.toFixed(1));E.wo.setAttribute("ry",ry.toFixed(1));
    E.wi.setAttribute("rx",(rx-7).toFixed(1));E.wi.setAttribute("ry",Math.max(2,ry-7).toFixed(1));
    E.jt.setAttribute("transform","translate(0 "+(LP.cy-ry-2).toFixed(1)+")");E.jb.setAttribute("transform","translate(0 "+(LP.cy+ry+2).toFixed(1)+")");
    var q=load?polyPt(LOAD,s):polyPt(UNLD,1-s);E.dot.setAttribute("cx",q[0].toFixed(1));E.dot.setAttribute("cy",q[1].toFixed(1));
    op(E.dot,b);op(E.gl,b*(.5+.5*s));
    op(E.tray,b*s2);op(E.cyc,b*s3);
    var lit=[1,s2,s3,0];E.ms.forEach(function(el,j){el.classList.toggle("lit",lit[j]>.5)});
    E.mt.forEach(function(el,j){el.classList.toggle("lit",lit[j]>.5)});
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.72,.82));
  };
}
