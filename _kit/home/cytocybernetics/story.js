/* the story scene (BL/BY/DB): ONE engraved patch-clamp experiment kept on screen for all three steps: a patch pipette sealed
   onto an iPSC-derived cardiac myocyte, wired to the Cybercyte, with the membrane-voltage trace beside it.
   Step 1 the cell beats on its own (spontaneous action potentials; the voltage travels out to the Cybercyte).
   Step 2 synthetic in silico IK1 channels appear on the membrane and the computed IK1 current is drawn under the trace.
   Step 3 the current flows back into the cell: the trace settles to a quiet resting potential with one stimulated,
   ventricular-type action potential. Source: cytocybernetics.com dynamicclamp.html and cybercyte.html ("iPSCD Cardiac
   Myocytes lack Ik1 ... transforms [them] from a jumble of spontaneously beating cells into quiescent cells which respond to
   external stimulation with a ventricular-type action potential"). Schematic; waveforms illustrative. Driven by the scrubbed story progress. */
var CY=(function(){
  var X0=500,X1=776,Y0=176,K=1.9;            /* panel: 0 mV at Y0, K px per mV */
  function y(v){return Y0-v*K}
  function f(n){return (+n).toFixed(1)}
  function spont(){var s='',i,n=240;for(i=0;i<=n;i++){var t=i/n,ph=(t*3+.18)%1,v;
      if(ph<.56)v=-62+20*(ph/.56);                         /* slow diastolic depolarization */
      else if(ph<.6)v=-42+64*((ph-.56)/.04);               /* upstroke */
      else if(ph<.8)v=22-20*((ph-.6)/.2);                  /* plateau */
      else if(ph<.92)v=2-64*((ph-.8)/.12);                 /* repolarization */
      else v=-62;
      s+=(i?'L':'M')+f(X0+t*(X1-X0))+' '+f(y(v))}return s}
  function vent(){var s='',i,n=260;for(i=0;i<=n;i++){var t=i/n,v;
      if(t<.3)v=-84;
      else if(t<.315)v=-84+118*((t-.3)/.015);              /* upstroke to +34 */
      else if(t<.34)v=34-24*((t-.315)/.025);               /* notch */
      else if(t<.6)v=10-14*((t-.34)/.26);                  /* plateau */
      else if(t<.72){var q=(t-.6)/.12;v=-4-80*(q*q*(3-2*q))}/* repolarization */
      else v=-84;
      s+=(i?'L':'M')+f(X0+t*(X1-X0))+' '+f(y(v))}return s}
  function ik1(){var s='',i,n=200,B=452;for(i=0;i<=n;i++){var t=i/n,a;   /* outward current, small on the plateau, a hump on repolarization */
      if(t<.3)a=8;else if(t<.34)a=8-8*((t-.3)/.04);else if(t<.6)a=1;
      else if(t<.72){var q=(t-.6)/.12;a=1+30*Math.sin(q*Math.PI)*q}else if(t<.78)a=8+4*(1-(t-.72)/.06);else a=8;
      s+=(i?'L':'M')+f(X0+t*(X1-X0))+' '+f(B-a)}return s}
  return {X0:X0,X1:X1,y:y,spont:spont(),vent:vent(),ik1:ik1()};
})();
/* the myocyte: an elongated cell with a soft irregular outline; channels sit on it at these angles */
var CELL={c:[236,318],rx:168,ry:84};
function cellPt(a,k){var r=1+.05*Math.sin(3*a+.6)+.03*Math.cos(5*a+1.2);return [CELL.c[0]+CELL.rx*k*r*Math.cos(a),CELL.c[1]+CELL.ry*k*r*Math.sin(a)]}
function cellPath(k){var s='',i,n=96;for(i=0;i<=n;i++){var p=cellPt(i/n*Math.PI*2,k);s+=(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}return s+'Z'}
var CHA=[.5,1.15,1.75,2.45,2.9,3.6,4.25,5.0,5.65];
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="12 22 788 512" aria-hidden="true">';
  g+='<defs><radialGradient id="cyg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#b4a6ff" stop-opacity=".22"/><stop offset="1" stop-color="#b4a6ff" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* cell: double membrane, nucleus with contours, sarcomere striations */
  g+='<path class="mb sD" d="'+cellPath(1)+'"/><path class="mb2 sD" d="'+cellPath(.955)+'"/>';
  g+='<ellipse class="nu sD" cx="'+(CELL.c[0]+18)+'" cy="'+(CELL.c[1]+6)+'" rx="42" ry="27"/><ellipse class="nu2 sD" cx="'+(CELL.c[0]+20)+'" cy="'+(CELL.c[1]+7)+'" rx="26" ry="15"/>';
  var st='';for(i=0;i<15;i++){var xx=CELL.c[0]-138+i*20;if(Math.abs(xx-CELL.c[0]-18)<56)continue;var hh=Math.sqrt(Math.max(0,1-Math.pow((xx-CELL.c[0])/(CELL.rx*.92),2)))*CELL.ry*.78;st+='M'+f(xx)+' '+f(CELL.c[1]-hh)+'L'+f(xx+4)+' '+f(CELL.c[1]+hh)}
  g+='<path class="sr sD" d="'+st+'"/>';
  /* patch pipette: glass taper from the upper left, sealed on the membrane, with its silver wire */
  var tip=cellPt(-2.2,1.0);
  g+='<path class="gl sD" d="M42 92L'+f(tip[0]-5)+' '+f(tip[1]-3)+'M84 64L'+f(tip[0]+4)+' '+f(tip[1]-6)+'"/>';
  g+='<path class="wi sD" d="M63 78L'+f(tip[0]-6)+' '+f(tip[1]-22)+'"/>';
  /* the wire to the Cybercyte and on to the recording */
  g+='<path class="cb sD" id="cbw" d="M36 78C36 40 120 44 330 44M470 44H612C630 44 638 52 638 70V92"/>';
  /* voltage panel: axis, ticks, labels */
  g+='<path class="ax sD" d="M'+(CY.X0-14)+' '+f(CY.y(40))+'V'+f(CY.y(-92))+'H'+CY.X1+'"/>';
  [[0,'0 mV'],[-80,'−80 mV']].forEach(function(t){g+='<path class="tk sD" d="M'+(CY.X0-20)+' '+f(CY.y(t[0]))+'H'+(CY.X0-14)+'"/><text class="t" x="'+(CY.X0-26)+'" y="'+f(CY.y(t[0])+4)+'" text-anchor="end">'+t[1]+'</text>'});
  g+='<text class="t" x="'+(CY.X0-14)+'" y="'+f(CY.y(40)-12)+'">MEMBRANE VOLTAGE</text>';
  g+='<path class="ax sD" d="M'+(CY.X0-14)+' 410V462H'+CY.X1+'"/>';
  g+='<text class="t" x="400" y="49" text-anchor="middle" id="cyl">CYBERCYTE</text>';
  g+='<text class="t" x="'+(mob?18:784)+'" y="526" text-anchor="'+(mob?"start":"end")+'">PATCH-CLAMP EXPERIMENT · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<path class="tr" id="tr1" d="'+CY.spont+'"/><path class="tr tr3" id="tr3" d="'+CY.vent+'"/>';
  g+='<path class="ik" id="ik" d="'+CY.ik1+'"/>';
  /* stimulus mark on the step-3 trace */
  var sx=CY.X0+.3*(CY.X1-CY.X0);g+='<g id="stim"><path class="ldr" d="M'+f(sx)+' '+f(CY.y(-84)+30)+'V'+f(CY.y(-84)+8)+'M'+f(sx-4)+' '+f(CY.y(-84)+14)+'L'+f(sx)+' '+f(CY.y(-84)+8)+'L'+f(sx+4)+' '+f(CY.y(-84)+14)+'"/><text class="t" x="'+f(sx)+'" y="'+f(CY.y(-84)+46)+'" text-anchor="middle">STIMULUS</text></g>';
  /* synthetic channels on the membrane */
  CHA.forEach(function(a,j){var p=cellPt(a,.978),deg=a*180/Math.PI+90;
    g+='<g class="ch" transform="translate('+f(p[0])+' '+f(p[1])+') rotate('+f(deg)+')"><circle r="20" fill="url(#cyg)"/><rect x="-7" y="-9" width="5.5" height="18" rx="1.5"/><rect x="1.5" y="-9" width="5.5" height="18" rx="1.5"/><path class="cur" d="M0 -22V-12M-3 -16L0 -12L3 -16"/></g>'});
  /* signal pulses travelling along the wire */
  g+='<circle class="pu" id="puO" r="4"/><circle class="pu" id="puI" r="4"/>';
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  var c0=cellPt(2.2,1.02),tipL=cellPt(-2.2,1.0);
  g+='<g id="lb1"><text class="a" x="'+(mob?20:40)+'" y="'+(mob?500:478)+'">'+(mob?'iPSC MYOCYTE':'iPSC-DERIVED CARDIAC MYOCYTE')+'</text><path class="ldr" d="M'+(mob?110:120)+' '+(mob?476:462)+'L'+f(c0[0])+' '+f(c0[1]+4)+'"/>'+
     (mob?'':'<text class="t" x="40" y="498">NO IK1 · BEATS ON ITS OWN</text>')+
     '<text class="a" x="'+(mob?96:150)+'" y="'+(mob?128:120)+'">PATCH PIPETTE</text><path class="ldr" d="M'+(mob?150:200)+' '+(mob?140:128)+'L'+f(tipL[0]-14)+' '+f(tipL[1]-36)+'"/>'+
     '<text class="a" x="'+CY.X1+'" y="'+(mob?140:128)+'" text-anchor="end">'+(mob?'SPONTANEOUS':'SPONTANEOUS BEATING')+'</text></g>';
  var c2=cellPt(2.45,1.06);
  g+='<g id="lb2"><text class="a" x="'+(mob?20:40)+'" y="'+(mob?500:478)+'">'+(mob?'IN SILICO IK1':'IN SILICO IK1 CHANNELS')+'</text><path class="ldr" d="M'+(mob?110:130)+' '+(mob?476:462)+'L'+f(c2[0]-2)+' '+f(c2[1]+6)+'"/>'+
     (mob?'':'<text class="t" x="40" y="498">ADDED ELECTRONICALLY · NO TRANSFECTION</text>')+
     '<text class="a" x="'+CY.X1+'" y="'+(mob?404:400)+'" text-anchor="end">'+(mob?'IK1, COMPUTED':'IK1 CURRENT, COMPUTED LIVE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+CY.X1+'" y="'+(mob?404:128)+'" text-anchor="end">'+(mob?'VENTRICULAR AP':'VENTRICULAR-TYPE AP')+'</text>'+
     '<text class="a" x="'+(mob?20:40)+'" y="'+(mob?500:478)+'">'+(mob?'CURRENT FED BACK':'IK1 FED BACK INTO THE CELL')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),t1:$("#tr1",svg),t3:$("#tr3",svg),ik:$("#ik",svg),st:$("#stim",svg),
    ch:$$(".ch",svg),cur:$$(".ch .cur",svg),pO:$("#puO",svg),pI:$("#puI",svg),w:$("#cbw",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var tr=[E.t1,E.t3,E.ik].map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return L});
  var WL=E.w.getTotalLength(),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function at(el,u){var q=E.w.getPointAtLength(Math.max(0,Math.min(1,u))*WL);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.16),s2=seg(p,.36,.52),s3=seg(p,.68,.84);
    /* traces: spontaneous beats draw in, give way to the stimulated ventricular AP; the computed IK1 draws in step 2 */
    E.t1.style.strokeDashoffset=(tr[0]*(1-Math.max(b*.999,s1))).toFixed(1);op(E.t1,b*(1-s3));
    E.t3.style.strokeDashoffset=(tr[1]*(1-s3)).toFixed(1);op(E.t3,b*s3);
    E.ik.style.strokeDashoffset=(tr[2]*(1-s2)).toFixed(1);op(E.ik,b*s2);
    op(E.st,b*seg(p,.8,.88));
    E.ch.forEach(function(el,j){var d=seg(p,.38+j*.012,.48+j*.012);op(el,b*d);el.classList.toggle("live",s3>.5)});
    E.cur.forEach(function(el){op(el,s3)});
    /* pulses: voltage out to the Cybercyte (always, brightest in step 1), current back in (step 3) */
    var u=(p*9)%1;at(E.pO,u);at(E.pI,1-u);op(E.pO,b*(.35+.65*(1-s3))*Math.sin(u*Math.PI));op(E.pI,b*s3*Math.sin(u*Math.PI));
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.72,.82));
  };
}
