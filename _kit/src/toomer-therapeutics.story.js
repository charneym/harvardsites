/* the story scene: ARIH1, drawn as engraved protein surfaces (contour-hatched, like a structural model in print).
   Step 1 an E2 enzyme carrying a ubiquitin chain docks on the E3 ligase ARIH1, and the chain passes to hnRNP E1;
   step 2 the tagged hnRNP E1 is broken down; step 3 a small molecule wedges into the E3–E2 interface and the E2
   (still loaded) falls away; step 4 hnRNP E1 is spared, intact. A caption under the figure names each step. */
var SC_E3=[410,312,136],SC_E2D=[238,184],SC_E2A=[150,108],SC_E2R=[128,392],SC_T=[652,200,74],SC_PK=[300,232];
function rng2(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function scBlob(cx,cy,R,seed,k,sq){var r=rng2(seed),o1=r()*6,o2=r()*6,o3=r()*6,d="";sq=sq||1;
  for(var i=0;i<=72;i++){var a=i/72*6.283,rr=R*k*(1+.09*Math.sin(3*a+o1)+.05*Math.sin(5*a+o2)+.035*Math.sin(8*a+o3));d+=(i?"L":"M")+(cx+Math.cos(a)*rr).toFixed(1)+" "+(cy+Math.sin(a)*rr*sq).toFixed(1)}return d+"Z"}
function scProt(cx,cy,R,seed,cls,sq){var r=rng2(seed+3),s='<path class="pb" d="'+scBlob(cx,cy,R,seed,1,sq)+'"/>';
  [.82,.64,.46,.28].forEach(function(k,i){s+='<path class="pc" d="'+scBlob(cx-R*.07*(i+1)*.5,cy-R*.07*(i+1)*.5,R,seed,k,sq)+'"/>'});
  for(var j=0;j<Math.round(R*.5);j++){var a=r()*6.283,d=Math.sqrt(r())*R*.88;s+='<circle class="pd" cx="'+(cx+Math.cos(a)*d).toFixed(1)+'" cy="'+(cy+Math.sin(a)*d*(sq||1)).toFixed(1)+'" r="'+(.8+r()*1.1).toFixed(1)+'"/>'}
  return s}
function scUb(){var P=[[0,0],[-22,-14],[-46,-20],[-70,-18]],s="";
  for(var i=1;i<P.length;i++)s+='<path class="lnk" d="M'+P[i-1][0]+' '+P[i-1][1]+'L'+P[i][0]+' '+P[i][1]+'"/>';
  return s+P.map(function(p,i){return '<path class="ub" d="'+scBlob(p[0],p[1],12,40+i,1)+'"/>'}).join("")}
function scInh(){/* two fused rings and a side chain: a small molecule, drawn as a skeletal formula */
  function hex(cx,cy,r){var d="";for(var i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?"L":"M")+(cx+Math.cos(a)*r).toFixed(1)+" "+(cy+Math.sin(a)*r).toFixed(1)}return d+"Z"}
  return '<path class="inh" d="'+hex(-9,0,12)+'"/><path class="inh" d="'+hex(11.8,0,12)+'"/><path class="inhl" d="M22 -6L34 -14L46 -8M-19 6L-30 14"/><circle class="inhl" cx="46" cy="-8" r="3"/>'}
var SC_FR=[];(function(){var r=rng2(5);for(var i=0;i<14;i++){var a=r()*6.283,d=SC_T[2]*(.2+r()*.75);SC_FR.push([Math.cos(a)*d,Math.sin(a)*d*.85,Math.cos(a),Math.sin(a),2+r()*4])}})();
function scene(){
  var mob=MOBILE();
  var caps=["AN E2 HANDS UBIQUITIN TO THE E3","hnRNP E1 IS TAGGED AND DEGRADED","AN INHIBITOR BLOCKS E3–E2 BINDING","hnRNP E1 IS SPARED"];
  return '<svg viewBox="20 30 760 500" aria-hidden="true">'+
   '<path class="pth" id="scPth" d="M226 108Q420 30 590 128"/>'+
   '<g id="scE3">'+scProt(SC_E3[0],SC_E3[1],SC_E3[2],3,"",.94)+'<text class="nm" x="'+(SC_E3[0]+6)+'" y="'+(SC_E3[1]+6)+'" text-anchor="middle">ARIH1</text><text x="'+(SC_E3[0]+6)+'" y="'+(SC_E3[1]+(mob?46:34))+'" text-anchor="middle">E3 LIGASE</text></g>'+
   '<g class="tg" id="scT"><g id="scTb">'+scProt(SC_T[0],SC_T[1],SC_T[2],9,"",.86)+'<text class="nm s" x="'+SC_T[0]+'" y="'+(SC_T[1]+8)+'" text-anchor="middle">hnRNP E1</text></g>'+
    '<circle class="halo" id="scHalo" cx="'+SC_T[0]+'" cy="'+SC_T[1]+'" r="'+(SC_T[2]+20)+'"/>'+
    SC_FR.map(function(f){return '<circle class="frag" cx="0" cy="0" r="'+f[4].toFixed(1)+'"/>'}).join("")+'</g>'+
   '<g class="e2" id="scE2"><g>'+scProt(0,0,76,21,"",1)+'<text class="nm s" x="0" y="8" text-anchor="middle">E2</text></g></g>'+
   '<g id="scUb">'+scUb()+'</g>'+
   '<g id="scInh">'+scInh()+'</g>'+
   '<text class="a" id="scInhL" x="'+(SC_PK[0]-44)+'" y="'+(SC_PK[1]-22)+'" text-anchor="end">INHIBITOR</text>'+
   '<text class="a" id="scUbL" x="'+(mob?420:420)+'" y="'+(mob?52:58)+'" text-anchor="middle">UBIQUITIN</text>'+
   caps.map(function(t,i){return '<text class="cap" id="scC'+i+'" x="400" y="'+(mob?516:508)+'" text-anchor="middle">'+t+'</text>'}).join("")+
  '</svg>';
}
function storyDraw(svg){
  var E={e2:$("#scE2",svg),ub:$("#scUb",svg),ubl:$("#scUbL",svg),pth:$("#scPth",svg),tb:$("#scTb",svg),halo:$("#scHalo",svg),fr:$$("#scT .frag",svg),inh:$("#scInh",svg),inhl:$("#scInhL",svg),cap:[0,1,2,3].map(function(i){return $("#scC"+i,svg)})};
  var PL=E.pth.getTotalLength();
  function tr(el,x,y,rot){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(rot?" rotate("+rot.toFixed(1)+")":""))}
  return function(p,b){
    if(!E.e2.isConnected)return;
    var s1=seg(p,.03,.13),u1=seg(p,.11,.22),s2=seg(p,.29,.44),s3=seg(p,.53,.68),s4=seg(p,.78,.92);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* E2: approaches and docks, then is pushed off by the inhibitor */
    var ex,ey;if(s3>0){ex=lerp(SC_E2D[0],SC_E2R[0],s3);ey=lerp(SC_E2D[1],SC_E2R[1],s3)}else{ex=lerp(SC_E2A[0],SC_E2D[0],s1);ey=lerp(SC_E2A[1],SC_E2D[1],s1)}
    tr(E.e2,ex,ey,s3*-14);
    /* the ubiquitin chain: rides the E2, travels to hnRNP E1, is lost with it; a fresh chain stays on the stranded E2 */
    var ux,uy,uo;
    if(p<.5){if(u1<=0){ux=ex-6;uy=ey-80;uo=1}else{var pt=E.pth.getPointAtLength(PL*u1);ux=pt.x;uy=pt.y;uo=1}uo*=1-.92*s2}
    else{ux=ex-6;uy=ey-80;uo=s3}
    tr(E.ub,ux,uy,0);E.ub.style.opacity=uo.toFixed(3);
    E.pth.style.strokeDasharray="2 6";E.pth.style.opacity=(b*.8*s1*(1-u1)).toFixed(3);
    E.ubl.style.opacity=(b*seg(p,.05,.1)*(1-seg(p,.22,.26))).toFixed(3);
    /* hnRNP E1: tagged, broken down, then spared */
    var deg=s2*(1-s4);E.tb.style.opacity=(1-.82*deg).toFixed(3);
    E.fr.forEach(function(f,k){var q=SC_FR[k],d=deg*(14+k*1.5);f.setAttribute("cx",(SC_T[0]+q[0]+q[2]*d).toFixed(1));f.setAttribute("cy",(SC_T[1]+q[1]+q[3]*d).toFixed(1));f.style.opacity=(deg*.9).toFixed(3)});
    E.halo.style.opacity=(b*s4).toFixed(3);E.halo.setAttribute("r",(SC_T[2]+lerp(8,22,s4)).toFixed(1));
    /* the inhibitor slides into the interface */
    tr(E.inh,lerp(SC_PK[0]-110,SC_PK[0],s3),lerp(SC_PK[1]-120,SC_PK[1],s3),lerp(-40,-36,s3));E.inh.style.opacity=(b*Math.min(1,s3*1.5)).toFixed(3);
    E.inhl.style.opacity=(b*seg(p,.62,.7)).toFixed(3);
    /* one caption at a time, matched to the step */
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
