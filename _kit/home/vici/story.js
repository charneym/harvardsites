/* The story scene (BL/BY/DB): how a six port two position injection valve works, the core product of Valco
   (vici.com > Valve applications, two position valves). ONE valve kept on screen for all three steps:
   Step 1 (Load): rotor grooves join pump to column; the sample flows through the external loop to vent.
   Step 2 (Inject): the rotor turns 60°, joining the pump to the loop; the carrier pushes the sample plug onto the column.
   Step 3 (Separate): the plug splits into bands on the column and the detector draws a peak for each.
   Schematic, no measured values. Nothing is dash-drawn (DR4): every moving trace is a sub-path recomputed per frame. */
var SCW=760,SCH=520;
var VV={C:[330,260],RS:100,RP:70,LX:46,LT:110,LB:430};
function vAng(k){return [210,270,330,30,90,150][k]*Math.PI/180}
function vPort(k,r){var a=vAng(k),R=r||VV.RP;return [VV.C[0]+R*Math.cos(a),VV.C[1]+R*Math.sin(a)]}
/* polyline helpers */
function vArc(a0,a1,r){var p=[],n=14;for(var i=0;i<=n;i++){var a=(a0+(a1-a0)*i/n)*Math.PI/180;p.push([VV.C[0]+r*Math.cos(a),VV.C[1]+r*Math.sin(a)])}return p}
function vCoilV(x,y0,y1,r,turns){var p=[],n=turns*28;for(var i=0;i<=n;i++){var f=i/n,ph=f*turns*Math.PI*2;p.push([x-r*Math.sin(ph),y0+(y1-y0)*f-r*.55*(1-Math.cos(ph))*(i>0&&i<n?1:0)])}return p}
function vCoilH(x0,x1,y,r,turns){var p=[],n=turns*28;for(var i=0;i<=n;i++){var f=i/n,ph=f*turns*Math.PI*2;p.push([x0+(x1-x0)*f-r*.55*Math.sin(ph),y-r*Math.sin(ph+Math.PI/2)+r])}return p}
function vCat(){var o=[];for(var i=0;i<arguments.length;i++){var a=arguments[i];for(var j=0;j<a.length;j++){var q=a[j],l=o[o.length-1];if(!l||Math.hypot(l[0]-q[0],l[1]-q[1])>.01)o.push(q)}}return o}
function vLen(P){var L=[0];for(var i=1;i<P.length;i++)L.push(L[i-1]+Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]));return L}
function vAt(P,L,s){s=Math.max(0,Math.min(L[L.length-1],s));var i=1;while(i<L.length-1&&L[i]<s)i++;var t=(s-L[i-1])/((L[i]-L[i-1])||1);return [P[i-1][0]+(P[i][0]-P[i-1][0])*t,P[i-1][1]+(P[i][1]-P[i-1][1])*t]}
function vSub(P,L,s0,s1){var T=L[L.length-1];s0=Math.max(0,Math.min(T,s0));s1=Math.max(0,Math.min(T,s1));if(s1-s0<.5)return "";var a=vAt(P,L,s0),d="M"+a[0].toFixed(1)+" "+a[1].toFixed(1);for(var i=0;i<P.length;i++){if(L[i]>s0&&L[i]<s1)d+="L"+P[i][0].toFixed(1)+" "+P[i][1].toFixed(1)}var b=vAt(P,L,s1);return d+"L"+b[0].toFixed(1)+" "+b[1].toFixed(1)}
function vD(P){return P.map(function(q,i){return (i?"L":"M")+q[0].toFixed(1)+" "+q[1].toFixed(1)}).join("")}
/* fixed tubing */
var VG=(function(){
  var P=[0,1,2,3,4,5].map(function(k){return vPort(k)});
  var C=VV.C,LX=VV.LX;
  var loop=vCat([P[1]],[[C[0],VV.LT],[LX+40,VV.LT]],[[LX,VV.LT+34]],vCoilV(LX,VV.LT+52,VV.LB-52,13,5),[[LX,VV.LB-34],[LX+40,VV.LB],[C[0],VV.LB],P[4]]);
  var sin=[[150,P[0][1]],P[0]],vent=[P[5],[150,P[5][1]]];
  var pump=[[440,64],[440,P[2][1]],P[2]];
  var col=vCat([P[3],[440,P[3][1]],[440,382]],vCoilH(458,622,382,16,6),[[640,400],[660,400]]);
  return {P:P,loop:loop,sin:sin,vent:vent,pump:pump,col:col};
})();
function vScene(o){
  var g='',mob=o.mob,C=VV.C,P=VG.P;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="vcS" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#2a3668"/><stop offset="1" stop-color="#121a3c"/></radialGradient></defs>';
  /* tubing, quiet */
  g+='<path class="tb" d="'+vD(VG.loop)+'"/><path class="tb" d="'+vD(VG.sin)+'"/><path class="tb" d="'+vD(VG.vent)+'"/><path class="tb" d="'+vD(VG.pump)+'"/><path class="tb" d="'+vD(VG.col)+'"/>';
  /* stator */
  g+='<circle class="stator" cx="'+C[0]+'" cy="'+C[1]+'" r="'+VV.RS+'" fill="url(#vcS)"/><circle class="ring" cx="'+C[0]+'" cy="'+C[1]+'" r="'+(VV.RP+14)+'"/>';
  /* rotor grooves (rotated as one) */
  g+='<g id="vRot">'+[[210,270],[330,390],[90,150]].map(function(a){return '<path class="gr" d="'+vD(vArc(a[0]+7,a[1]-7,VV.RP))+'"/>'}).join("")+'</g>';
  /* the live flows */
  g+='<path id="vFc" class="fc"/><path id="vFs" class="fs"/><path id="vLf" class="lf"/><g id="vBd"><path class="bd b0"/><path class="bd b1"/><path class="bd b2"/></g>';
  /* ports */
  g+=P.map(function(q){return '<circle class="pt" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="7"/>'}).join("");
  /* detector and chromatogram */
  g+='<rect class="det" x="660" y="384" width="54" height="32"/><circle id="vDl" class="dl" cx="687" cy="400" r="5"/>';
  g+='<path class="ax" d="M500 190H740M500 190V44"/><path id="vTr" class="tr"/>';
  /* labels */
  g+='<text class="t" x="134" y="'+(P[0][1]+5)+'" text-anchor="end">SAMPLE</text><text class="t" x="134" y="'+(P[5][1]+5)+'" text-anchor="end">VENT</text>';
  g+='<text class="t" x="440" y="46" text-anchor="middle">'+(mob?"PUMP":"CARRIER")+'</text>';
  g+='<text class="t" x="188" y="'+(VV.LB+30)+'" text-anchor="middle">'+(mob?"LOOP":"SAMPLE LOOP")+'</text>';
  g+='<text class="t" x="540" y="'+(mob?462:452)+'" text-anchor="middle">COLUMN</text><text class="t" x="687" y="'+(mob?462:452)+'" text-anchor="middle">'+(mob?"DET.":"DETECTOR")+'</text>';
  g+='<text class="t" x="740" y="'+(mob?222:212)+'" text-anchor="end">'+(mob?"PEAKS":"SIGNAL")+'</text>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · LOAD</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · INJECT</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SEPARATE</text></g>';
  return g+'</svg>';
}
function scene(){return vScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var $i=function(id){return svg.querySelector("#"+id)};
  var E={Rot:$i("vRot"),Fc:$i("vFc"),Fs:$i("vFs"),Lf:$i("vLf"),B:$$("#vBd path",svg),Dl:$i("vDl"),Tr:$i("vTr"),l1:$i("lb1"),l2:$i("lb2"),l3:$i("lb3")};
  var P=VG.P,RP=VV.RP;
  function ar(a0,a1){return vArc(a0,a1,RP)}
  /* flow paths in each position */
  var loadC=vCat(VG.pump,ar(330,390),VG.col);
  var loadS=vCat(VG.sin,ar(210,270),VG.loop,ar(90,150),VG.vent);
  var injC=vCat(VG.pump,ar(330,270),VG.loop,ar(90,30),VG.col);
  var injS=vCat(VG.sin,ar(210,150),VG.vent);
  var LL=vLen(VG.loop),Lloop=LL[LL.length-1];
  var Lc=vLen(loadC),Ls=vLen(loadS),Ic=vLen(injC),Is=vLen(injS);
  var LOOP0=Lc[0]; /* the loop's start along injC */
  var pumpLen=vLen(vCat(VG.pump,ar(330,270)));LOOP0=pumpLen[pumpLen.length-1];
  var colStart=LOOP0+Lloop+vLen(ar(90,30))[14];
  var TOT=Ic[Ic.length-1],DET=TOT-20;
  var loopS0=vLen(vCat(VG.sin,ar(210,270)));loopS0=loopS0[loopS0.length-1];
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  var T=[.30,.55,.80],A=[.55,1,.7];
  function sig(t){var y=0;for(var i=0;i<3;i++){var z=(t-T[i])/.045;y+=A[i]*Math.exp(-z*z)}return y}
  return function(p,b){
    if(!svg.isConnected)return;
    var rot=ease(seg(p,.36,.47)),fill=seg(p,.03,.28),push=ease(seg(p,.48,.64)),sep=seg(p,.68,.95);
    E.Rot.setAttribute("transform","rotate("+(60*rot).toFixed(2)+" "+VV.C[0]+" "+VV.C[1]+")");
    var inj=rot>.5;
    /* carrier and sample routes for the current position */
    E.Fc.setAttribute("d",vD(inj?injC:loadC));E.Fs.setAttribute("d",vD(inj?injS:loadS));
    op(E.Fc,b*(rot>0&&rot<1?.25:.75));op(E.Fs,b*(rot>0&&rot<1?.15:.5)*(inj?.6:1));
    /* step 1: the loop fills with sample; step 2: the plug is pushed along the carrier path onto the column */
    if(!inj){E.Lf.setAttribute("d",vSub(VG.loop,LL,0,Lloop*fill));op(E.Lf,b)}
    else{var d=(colStart-LOOP0)*push;E.Lf.setAttribute("d",vSub(injC,Ic,LOOP0+d,LOOP0+Lloop+d));op(E.Lf,b*(1-seg(p,.66,.70)))}
    /* step 3: the plug splits into three bands that elute at different times */
    var s0=colStart+Lloop*.5;
    E.B.forEach(function(el,i){var tt=sep/T[i],c=s0+(DET-s0)*Math.min(tt,1.08),w=Lloop*.10;
      el.setAttribute("d",vSub(injC,Ic,c-w,c+w));op(el,b*seg(p,.66,.70)*(1-seg(tt,1.0,1.08)))});
    /* the chromatogram: the trace drawn up to now */
    var d2="",n=96,tN=sep;for(var k=0;k<=n;k++){var t=k/n*tN;d2+=(k?"L":"M")+(500+240*t).toFixed(1)+" "+(188-128*sig(t)).toFixed(1)}
    E.Tr.setAttribute("d",tN>0?d2:"");op(E.Tr,b);
    var lit=0;for(var j=0;j<3;j++){var z=(sep-T[j])/.04;lit=Math.max(lit,Math.exp(-z*z))}op(E.Dl,b*(.25+.75*lit));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
