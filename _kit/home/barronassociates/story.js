/* The story scene (BL/BY/DB/CX): Barron Associates' own method, "measure, model, predict and control complex systems"
   (barron-associates.com), drawn as ONE continuous engraved plan view of an aircraft that stays on screen for all three steps.
   Step 1 the airframe engraves in and its sensors (nose, wings, engines, tail) light with live signal traces. Step 2 a
   probabilistic prediction fans out ahead of the nose (a central path and its spread). Step 3 an actuator fault on the left
   aileron is flagged, the flight path wavers toward the edge, and a run-time assurance corridor holds it inside the safe
   envelope. Sources: the firm's services (control system design, diagnostics and prognostics, modeling and simulation),
   its AURA-Sim probabilistic computation product, and the AFRL run-time assurance award (September 2026). Illustrative, no data. */
var SCW=760,SCH=520,AX=196,AY=262,AS=1.25;
/* half outline of the airframe (upper side, nose at +x), mirrored for the lower side */
var HALF=[[132,0],[124,-5],[110,-9.5],[86,-11],[30,-11],[-30,-124],[-44,-125],[-20,-11],[-92,-9],[-102,-8],[-126,-50],[-138,-51],[-128,-6],[-140,-3],[-144,0]];
function apt(p,sgn){return [(AX+p[0]*AS).toFixed(1),(AY+sgn*p[1]*AS).toFixed(1)]}
function airframe(){var d='M'+apt(HALF[0],1).join(' '),i;for(i=1;i<HALF.length;i++)d+='L'+apt(HALF[i],1).join(' ');for(i=HALF.length-2;i>=0;i--)d+='L'+apt(HALF[i],-1).join(' ');return d+'Z'}
/* trailing edge of a wing, root (-20,-11) to tip (-44,-125); the aileron is its outer part */
function teAt(t,sgn){return apt([-20+(-44+20)*t,-11+(-125+11)*t],sgn)}
var SENS=[[124,0],[-36,-112],[-36,112],[10,-50],[10,50],[-132,-40],[-132,40],[40,0]];
var FAN=[-3,-2,-1,0,1,2,3];
function pth(k,wob,cor){ /* a path ahead of the nose to x=742; k = lateral spread, wob = fault excursion (0..1), cor = corridor side (+1/-1) */
  var x0=AX+136*AS,y0=AY,g='',i,n=32;
  for(i=0;i<=n;i++){var u=i/n,x=x0+(742-x0)*u,y;
    if(cor)y=y0+cor*(36+26*u);
    else y=y0+k*u*u*92+wob*Math.sin(Math.min(1,u*1.7)*Math.PI)*(-27);
    g+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}
  return g}
function planeScene(o){
  var g='',i,j;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M740 24H638M18 470H120M740 470H638"/>';
  g+='<text class="t" x="18" y="14">MEASURE · MODEL · PREDICT · CONTROL</text>';
  g+='<text class="t tr" x="742" y="14" text-anchor="end">PLAN VIEW</text></g>';
  /* the assurance corridor (step 3), beneath the paths */
  g+='<g id="scCor"><path class="cor sD" d="'+pth(0,0,-1)+'"/><path class="cor sD" d="'+pth(0,0,1)+'"/></g>';
  /* the prediction fan (step 2) */
  g+='<g id="scFan">';FAN.forEach(function(k){g+='<path class="fn'+(k===0?' c0':'')+' sD" d="'+pth(k*.16,0)+'"/>'});g+='</g>';
  /* the flight path with its fault excursion (step 3) */
  g+='<path id="scPath" class="fp sD" d="'+pth(0,1)+'"/>';
  /* the airframe */
  g+='<g id="scAir"><path class="af sD" d="'+airframe()+'"/>';
  g+='<path class="af2 sD" d="M'+apt([110,-9.5],1).join(' ')+'L'+apt([110,9.5],1).join(' ')+'M'+apt([30,-11],1).join(' ')+'L'+apt([30,11],1).join(' ')+'M'+apt([-20,-11],1).join(' ')+'L'+apt([-20,11],1).join(' ')+'"/>';
  [-1,1].forEach(function(s){var a=apt([28,-50],s),b=apt([-6,-50],s);g+='<path class="af2 sD" d="M'+a[0]+' '+(+a[1]-5)+'L'+b[0]+' '+(+b[1]-5)+'L'+b[0]+' '+(+b[1]+5)+'L'+a[0]+' '+(+a[1]+5)+'Z"/>'});
  [-1,1].forEach(function(s){var p=teAt(.58,s),q=teAt(.92,s);g+='<path class="ail'+(s>0?' fl':'')+'" d="M'+p.join(' ')+'L'+q.join(' ')+'"/>'});
  g+='</g>';
  /* sensors with their pulse rings (step 1) */
  g+='<g id="scSen">';SENS.forEach(function(p,k){var c=apt(p,1);g+='<g class="sn" data-k="'+k+'"><circle class="sr" cx="'+c[0]+'" cy="'+c[1]+'" r="9"/><circle class="sd" cx="'+c[0]+'" cy="'+c[1]+'" r="3"/></g>'});g+='</g>';
  /* the live traces, top right */
  g+='<g id="scTr">';for(i=0;i<3;i++){var y=72+i*30,d='M540 '+y;for(j=1;j<=40;j++){d+='L'+(540+j*5)+' '+(y+Math.sin(j*.7+i*1.9)*7*Math.sin(j*.13+i)).toFixed(1)}g+='<path class="tr sD" d="'+d+'"/>'}
  g+='<text class="t" x="540" y="50">SENSOR STREAMS</text></g>';
  /* the fault marker on the left (upper in plan) aileron */
  var fm=teAt(.75,1);g+='<g id="scFault"><circle class="fr" cx="'+fm[0]+'" cy="'+fm[1]+'" r="16"/><text class="a fx" x="'+(+fm[0]+26)+'" y="'+(+fm[1]-18)+'">ACTUATOR FAULT</text></g>';
  g+='<g id="lb1"><text class="a" x="18" y="500">SENSORS LIVE · SIGNALS PROCESSED</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="500">LEARNED MODEL · PREDICTION AND SPREAD</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="500">FAULT COMPENSATED · HELD IN THE ENVELOPE</text></g>';
  return g+'</svg>';
}
function scene(){return planeScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),air:dl("#scAir .sD"),ail:$$("#scAir .ail",svg),
    sen:$$(".sn",svg),tr:dl("#scTr .sD"),trt:$("#scTr text",svg),fan:dl("#scFan .sD"),cor:dl("#scCor .sD"),path:dl("#scPath"),
    fault:$("#scFault",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.16),sen=seg(p,.06,.3),fan=seg(p,.36,.6),fanOut=seg(p,.66,.76),cor=seg(p,.68,.84),path=seg(p,.72,.98),flt=seg(p,.68,.76);
    draw(E.air,Math.min(1,Math.max(b*b,grow*1.2)));
    E.ail.forEach(function(a){op(a,b*Math.max(b*b,grow))});
    E.sen.forEach(function(s,i){op(s,b*Math.min(1,Math.max(0,sen*1.6-i*.08)))});
    draw(E.tr,b*sen);op(E.trt,b*sen);
    E.fan.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-fan)).toFixed(1);op(a[0],b*(1-fanOut*.75))});
    draw(E.cor,b*cor);draw(E.path,b*path);
    op(E.fault,b*flt);svg.classList.toggle("flt",flt>.5);
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}
