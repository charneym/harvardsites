/* The story scene (BL/BY/DB): AKA Optics' adaptive optics closed loop (akaoptics.com > Products > Adaptive Optics
   Closed Loop Systems, Bimorph Deformable Mirrors, Wavefront Sensors), drawn as ONE beam on ONE bimorph mirror kept on
   screen for all three steps:
   Step 1 (Measure): an aberrated beam strikes the mirror; the Shack-Hartmann sensor's spots stray from their grid.
   Step 2 (Correct): the electrodes under the glass are polarised and the mirror bends to the conjugate shape.
   Step 3 (Focus): the reflected wavefront is flat, the spots sit on the grid, and the beam comes to a focus.
   Schematic, no measured values. Nothing is dash-drawn (DR4). */
var SCW=760,SCH=520;
var AK={MX:380,MY:404,HW:150,BW:46,IN:[96,112],OUT:[664,112],INS:[302,34,156,156]};
function akScene(o){
  var g='',mob=o.mob,I=AK.INS,k='',sp='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="akB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cedc1c" stop-opacity=".10"/><stop offset="1" stop-color="#cedc1c" stop-opacity=".22"/></linearGradient>'+
    '<radialGradient id="akF" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#eef59a" stop-opacity="1"/><stop offset=".35" stop-color="#cedc1c" stop-opacity=".55"/><stop offset="1" stop-color="#cedc1c" stop-opacity="0"/></radialGradient></defs>';
  /* the two beams (filled bands, recomputed per frame) and their wavefronts */
  g+='<path id="akBi" class="band"/><path id="akBo" class="band"/>';
  g+='<g id="akWi"></g><g id="akWo"></g>';
  /* the bimorph mirror, edge on: glass sheet with coating, piezoceramic disk, electrodes underneath */
  g+='<path id="akGl" class="glass"/><path id="akCo" class="coat"/>';
  g+='<path class="piezo" d="M'+(AK.MX-AK.HW)+' '+(AK.MY+12)+'H'+(AK.MX+AK.HW)+'V'+(AK.MY+30)+'H'+(AK.MX-AK.HW)+'Z"/>';
  for(var i=0;i<9;i++){var x=AK.MX-AK.HW+6+i*(2*AK.HW-12)/9;k+='<rect class="el" x="'+(x+2).toFixed(1)+'" y="'+(AK.MY+34)+'" width="'+((2*AK.HW-12)/9-4).toFixed(1)+'" height="6"/>'}
  g+='<g id="akEl">'+k+'</g>';
  /* the Shack-Hartmann sensor: lenslet grid and spots */
  g+='<path class="frm" d="M'+I[0]+' '+I[1]+'H'+(I[0]+I[2])+'V'+(I[1]+I[3])+'H'+I[0]+'Z"/>';
  for(var r=1;r<5;r++){sp+='<path class="grd" d="M'+(I[0]+r*I[2]/5)+' '+I[1]+'V'+(I[1]+I[3])+'M'+I[0]+' '+(I[1]+r*I[3]/5)+'H'+(I[0]+I[2])+'"/>'}
  g+=sp+'<g id="akSp"></g>';
  /* the focus */
  g+='<circle id="akFo" cx="'+AK.OUT[0]+'" cy="'+AK.OUT[1]+'" r="26" fill="url(#akF)"/>';
  /* labels, per step */
  g+='<text class="t" x="'+(I[0]+I[2]+14)+'" y="'+(I[1]+12)+'">'+(mob?"SENSOR":"WAVEFRONT")+'</text>'+(mob?'':'<text class="t" x="'+(I[0]+I[2]+14)+'" y="'+(I[1]+28)+'">SENSOR</text>');
  g+='<text class="t" x="'+AK.MX+'" y="'+(AK.MY+70)+'" text-anchor="middle">'+(mob?"MIRROR":"BIMORPH MIRROR")+'</text>';
  g+='<g id="akL1"><text class="t s1" x="36" y="'+(mob?318:330)+'">ABERRATED</text>'+(mob?'':'<text class="t s1" x="36" y="346">WAVEFRONT</text>')+'</g>';
  g+='<g id="akL2"><text class="t s1" x="'+(AK.MX+AK.HW+16)+'" y="'+(AK.MY+42)+'">'+(mob?"":"ELECTRODES")+'</text></g>';
  g+='<g id="akL3"><text class="t s1" x="724" y="'+(mob?318:330)+'" text-anchor="end">CORRECTED</text>'+(mob?'':'<text class="t s1" x="724" y="346" text-anchor="end">WAVEFRONT</text>')+'<text class="t s1" x="'+(AK.OUT[0]+2)+'" y="'+(AK.OUT[1]-38)+'" text-anchor="middle">FOCUS</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · MEASURE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · CORRECT</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · FOCUS</text></g>';
  return g+'</svg>';
}
function scene(){return akScene({mob:MOBILE()?1:0})}
/* the aberration: a fixed low-order shape across the beam, w in [-1,1] */
function akAb(w){return .55*Math.sin(w*2.3+.4)+.35*(w*w-.4)}
function storyDraw(svg){
  var $i=function(id){return svg.querySelector("#"+id)};
  var E={Bi:$i("akBi"),Bo:$i("akBo"),Wi:$i("akWi"),Wo:$i("akWo"),Gl:$i("akGl"),Co:$i("akCo"),El:$$("#akEl rect",svg),Sp:$i("akSp"),Fo:$i("akFo"),
    L1:$i("akL1"),L2:$i("akL2"),L3:$i("akL3"),l1:$i("lb1"),l2:$i("lb2"),l3:$i("lb3")};
  var NW=6,ns="http://www.w3.org/2000/svg";
  function mk(par,n,cls){var a=[];for(var i=0;i<n;i++){var p=document.createElementNS(ns,"path");p.setAttribute("class",cls);par.appendChild(p);a.push(p)}return a}
  var WI=mk(E.Wi,NW,"wf"),WO=mk(E.Wo,NW,"wf"),SP=[];
  var I=AK.INS,JIT=[];for(var i=0;i<25;i++){JIT.push([Math.sin(i*12.9898)*.5,Math.cos(i*78.233)*.5])}
  for(var j=0;j<25;j++){var c=document.createElementNS(ns,"circle");c.setAttribute("class","spot");c.setAttribute("r","3.2");E.Sp.appendChild(c);SP.push(c)}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  /* beam geometry: from the mirror centre M out to end P; unit u along, v across */
  function geo(P){var dx=P[0]-AK.MX,dy=P[1]-AK.MY,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L;return {L:L,ux:ux,uy:uy,vx:-uy,vy:ux}}
  var Gi=geo(AK.IN),Go=geo(AK.OUT);
  /* the mirror surface: y offset (bend) across x in [-HW,HW] */
  function mirY(x,bend){var w=x/AK.HW;return AK.MY-bend*7*akAb(w)}
  function band(G,half,conv){/* half-width at the mirror, shrinking to (1-conv) at the far end */
    var a=[];[[0,1],[1,1],[1,-1],[0,-1]].forEach(function(q){var s=q[0]*G.L*.98,h=half*(1-conv*q[0])*q[1];var hx=G.vx*h*(G.vy>0?1:1);
      var x=AK.MX+G.ux*s+G.vx*h,y=AK.MY+G.uy*s+G.vy*h;a.push(x.toFixed(1)+" "+y.toFixed(1))});return "M"+a.join("L")+"Z"}
  function wave(G,s,half,amp){var d="";for(var k=0;k<=16;k++){var w=-1+k/8,o=amp*10*akAb(w),x=AK.MX+G.ux*(s+o)+G.vx*w*half,y=AK.MY+G.uy*(s+o)+G.vy*w*half;d+=(k?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d}
  var lastB=-1;
  return function(p,b){
    if(!svg.isConnected)return;
    var bend=ease(seg(p,.40,.62)),corr=bend,conv=ease(seg(p,.70,.88)),foc=seg(p,.82,.92),ph=(p*3.2)%1;
    /* beams */
    E.Bi.setAttribute("d",band(Gi,AK.BW,0));E.Bo.setAttribute("d",band(Go,AK.BW,conv*.9));
    op(E.Bi,b);op(E.Bo,b);
    /* wavefronts travel in along the incoming beam and out along the reflected one */
    for(var i=0;i<NW;i++){
      var f=((i+ph)/NW),si=Gi.L*(.92-.78*f),so=Go.L*(.14+.78*f);
      var hw=AK.BW*.92;WI[i].setAttribute("d",wave(Gi,si,hw,1));
      var ho=AK.BW*.92*(1-conv*.9*(so/Go.L));WO[i].setAttribute("d",wave(Go,so,ho,1-corr));
      var fade=Math.min(1,Math.min(f,1-f)*6);op(WI[i],b*fade);op(WO[i],b*fade*(1-conv*seg(so/Go.L,.7,.95)))
    }
    /* mirror: glass sheet and coating bend to the conjugate shape */
    var top="",bot="";for(var k=0;k<=20;k++){var x=-AK.HW+k*(2*AK.HW)/20,y=mirY(x,bend);top+=(k?"L":"M")+(AK.MX+x).toFixed(1)+" "+y.toFixed(1)}
    for(var k2=20;k2>=0;k2--){var x2=-AK.HW+k2*(2*AK.HW)/20;bot+="L"+(AK.MX+x2).toFixed(1)+" "+(mirY(x2,bend)+10).toFixed(1)}
    E.Gl.setAttribute("d",top+bot+"Z");E.Co.setAttribute("d",top);
    var eo=seg(p,.36,.46);E.El.forEach(function(r,i){var w=-1+(i+.5)*2/9,v=Math.abs(akAb(w));r.style.fillOpacity=(.18+.82*eo*Math.min(1,v*1.4)).toFixed(3)});
    /* sensor spots: stray in step 1, back on the grid once corrected */
    SP.forEach(function(c,i){var gx=i%5,gy=Math.floor(i/5),cx=I[0]+(gx+.5)*I[2]/5,cy=I[1]+(gy+.5)*I[3]/5,a=(1-corr)*11;
      c.setAttribute("cx",(cx+JIT[i][0]*a*1.6+a*.5*Math.sin(gy*1.3)).toFixed(1));c.setAttribute("cy",(cy+JIT[i][1]*a*1.6+a*.4*Math.cos(gx*1.1)).toFixed(1))});
    if(b!==lastB){lastB=b;$$(".frm,.grd,.piezo,text.t:not(.s1)",svg).forEach(function(e){op(e,b)});op(E.Sp,b);op(E.Gl,b);op(E.Co,b)}
    op(E.Fo,b*foc);
    op(E.L1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.L2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.L3,b*seg(p,.72,.8));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
