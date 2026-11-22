/* the story scene: ZEPART in the hand, drawn as an engraved skeletal schematic of the right hand and wrist (palm view): radius and
   ulna, the carpal bones, the five metacarpals and their phalanges, with the thumb's carpometacarpal (CMC) joint, where the first
   metacarpal meets the trapezium, at its base. Step 1 the joint (labelled); step 2 osteoarthritis: worn cartilage, bone spurs and
   an inflamed glow at the CMC joint; step 3 the trapezium is removed and ZEPART, a stemmed implant that replaces the trapezium
   completely, takes its place in the same geometry; step 4 what it is designed for: grip strength, range of motion and an end to
   symptoms (motion arcs at the thumb, the pinch). Facts: sandiamedicaltechnologies.com (medical and patient overviews, the
   ZEPART placement figure). Schematic, not to scale; the implant's stem is not drawn because its seating is not published. */
var SM_CMC=[214,392];
function smBone(x1,y1,x2,y2,wb,wh,ws){/* a long bone from base (x1,y1) to head (x2,y2): flared base, waisted shaft, rounded head */
  var dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,nx=-uy,ny=ux,N=28,Lp=[],Rp=[];
  for(var i=0;i<=N;i++){var t=i/N,w=ws+(wb-ws)*Math.pow(Math.max(0,1-t/.26),2)+(wh-ws)*Math.pow(Math.max(0,(t-.74)/.26),2),px=x1+dx*t,py=y1+dy*t;
    Lp.push([px+nx*w,py+ny*w]);Rp.push([px-nx*w,py-ny*w])}
  var d='M'+Lp[0][0].toFixed(1)+' '+Lp[0][1].toFixed(1);for(i=1;i<=N;i++)d+='L'+Lp[i][0].toFixed(1)+' '+Lp[i][1].toFixed(1);
  d+='A'+wh+' '+wh+' 0 0 0 '+Rp[N][0].toFixed(1)+' '+Rp[N][1].toFixed(1);
  for(i=N-1;i>=0;i--)d+='L'+Rp[i][0].toFixed(1)+' '+Rp[i][1].toFixed(1);
  d+='A'+wb+' '+(wb*.55)+' '+(Math.atan2(ny,nx)*180/Math.PI).toFixed(1)+' 0 0 '+Lp[0][0].toFixed(1)+' '+Lp[0][1].toFixed(1)+'Z';return d}
function smBlob(cx,cy,rx,ry,rot,j){/* a carpal bone: a softly irregular rounded shape */
  var d='',N=40,c=Math.cos(rot*Math.PI/180),s=Math.sin(rot*Math.PI/180);
  for(var i=0;i<=N;i++){var t=i/N*Math.PI*2,k=1+(j||.05)*Math.sin(3*t+cx*.01)+(j||.05)*.6*Math.cos(2*t+cy*.02),x=Math.cos(t)*rx*k,y=Math.sin(t)*ry*k;
    d+=(i?'L':'M')+(cx+x*c-y*s).toFixed(1)+' '+(cy+x*s+y*c).toFixed(1)}return d+'Z'}
function smRoughen(cx,cy,rx,ry,rot){/* the arthritic joint margin: the same outline, jagged, with small spurs */
  var d='',N=60,c=Math.cos(rot*Math.PI/180),s=Math.sin(rot*Math.PI/180);
  for(var i=0;i<=N;i++){var t=i/N*Math.PI*2,k=1.04+.07*Math.sin(11*t)+.05*Math.cos(17*t+1)+(Math.abs(Math.sin(2.5*t))>.97?.22:0),x=Math.cos(t)*rx*k,y=Math.sin(t)*ry*k;
    d+=(i?'L':'M')+(cx+x*c-y*s).toFixed(1)+' '+(cy+x*s+y*c).toFixed(1)}return d+'Z'}
function scene(){
  var mob=MOBILE(),fs=mob?19:12,cs=mob?20:13;
  var caps=["THE THUMB CMC JOINT · BASE OF THE THUMB","OSTEOARTHRITIS · PAIN, LOST GRIP AND MOTION","ZEPART · COMPLETE REPLACEMENT OF THE TRAPEZIUM","DESIGNED FOR GRIP, MOTION AND NO SYMPTOMS"];
  var s='<svg viewBox="20 -30 600 640" role="img" aria-label="Engraved skeletal drawing of the hand and wrist: the thumb CMC joint, osteoarthritis at the joint, the ZEPART implant replacing the trapezium, and the thumb moving freely">';
  s+='<defs><radialGradient id="smG" cx="'+SM_CMC[0]+'" cy="'+SM_CMC[1]+'" r="78" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff9a6a" stop-opacity=".55"/><stop offset=".5" stop-color="#fbb153" stop-opacity=".2"/><stop offset="1" stop-color="#fbb153" stop-opacity="0"/></radialGradient>'+
    '<linearGradient id="smM" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eef4f6"/><stop offset=".45" stop-color="#9fb0b6"/><stop offset=".7" stop-color="#d9e3e6"/><stop offset="1" stop-color="#6f8288"/></linearGradient>'+
    '<radialGradient id="smT" cx="'+SM_CMC[0]+'" cy="'+(SM_CMC[1]+22)+'" r="90" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3cc3d9" stop-opacity=".3"/><stop offset="1" stop-color="#3cc3d9" stop-opacity="0"/></radialGradient>'+
    '<linearGradient id="smF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".86" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="smK"><rect x="0" y="-40" width="660" height="660" fill="url(#smF)"/></mask></defs>';
  var g='';for(var gx=40;gx<=600;gx+=40)g+='<path class="sg" d="M'+gx+' -20V580"/>';for(var gy=-20;gy<=580;gy+=40)g+='<path class="sg" d="M40 '+gy+'H600"/>';
  s+='<g mask="url(#smK)">'+g;
  /* forearm and carpus */
  s+='<g id="smArm"><path class="sb" d="M148 610C150 560 168 528 214 514C262 502 330 504 380 516C404 522 414 540 416 560L418 610"/>'+
    '<path class="sb" d="M446 610C444 576 448 548 462 532C476 518 498 520 506 538C512 556 508 584 508 610"/>'+
    '<path class="sb" d="'+smBlob(290,478,46,25,-22)+'"/><path class="sb" d="'+smBlob(358,486,30,24,0)+'"/><path class="sb" d="'+smBlob(414,470,25,22,10)+'"/><path class="sb" d="'+smBlob(452,446,12,12,0)+'"/>'+
    '<path class="sb" d="'+smBlob(298,418,25,24,-10)+'"/><path class="sb" d="'+smBlob(356,420,28,40,4)+'"/><path class="sb" d="'+smBlob(418,412,27,36,10)+'"/></g>';
  /* fingers: metacarpals and phalanges */
  var F=[[300,390,318,176,17,15,9],[358,380,372,160,18,16,9.5],[418,374,430,190,16,14,8.5],[468,378,488,226,15,13,8]],P=[[320,160,330,48,13,11,7],[374,144,382,20,13,11,7],[432,174,440,66,12,10,6.5],[490,212,500,124,11,9,6]],FG='';
  F.forEach(function(b){FG+='<path class="sb" d="'+smBone(b[0],b[1],b[2],b[3],b[4],b[5],b[6])+'"/>'});
  P.forEach(function(b){FG+='<path class="sb" d="'+smBone(b[0],b[1],b[2],b[3],b[4],b[5],b[6])+'"/>'});
  FG+='<path class="sb" d="'+smBone(331,38,334,-24,10,8,6)+'"/><path class="sb" d="'+smBone(441,56,444,-6,9,8,5.5)+'"/><path class="sb" d="'+smBone(501,114,504,66,8,7,5)+'"/>';
  s+='<g id="smFing">'+FG+'</g>';
  /* the thumb, which moves in step 4 (rotates about the CMC joint) */
  s+='<g id="smThumb"><path class="sb sth" d="'+smBone(206,376,140,252,19,15,9.5)+'"/><path class="sb sth" d="'+smBone(133,238,96,144,14,11,7)+'"/><path class="sb sth" d="'+smBone(91,132,74,76,11,8,6)+'"/></g>';
  /* the trapezium (fades out in step 3), the glow and the worn margin of step 2 */
  s+='<path id="smGlow" d="M120 300H310V490H120Z" fill="url(#smG)"/>';
  s+='<path id="smTrap" class="sb str" d="'+smBlob(232,424,32,27,-32,.04)+'"/>';
  s+='<g id="smOA"><path class="sjag" d="'+smRoughen(232,424,32,27,-32)+'"/><path class="sjag" d="M184 384L172 376M196 372L190 360M236 392L246 380M178 404L164 404"/>'+
    '<path class="sjag" d="M198 380C204 388 214 392 226 392" stroke-dasharray="3 4"/></g>';
  /* ZEPART in the trapezium's place: the block with its window, as in Sandia's placement figure */
  s+='<path id="smHalo" d="M130 330H330V520H130Z" fill="url(#smT)"/>';
  s+='<g id="smImp" transform="rotate(-32 232 424)"><path class="simp" d="M202 404C202 396 206 394 214 394H252C260 394 264 398 264 406V444C264 452 258 456 250 456H214C206 456 200 452 200 444Z"/>'+
    '<path class="simw" d="M218 412H248V440H218Z"/><circle class="simw" cx="228" cy="426" r="3.4"/><circle class="simw" cx="238" cy="426" r="3.4"/></g>';
  /* labels */
  s+='<g id="smLab1"><path class="scl" d="M'+SM_CMC[0]+' '+SM_CMC[1]+'L150 420H40"/><text class="sa" x="40" y="410" style="font-size:'+fs+'px">CMC JOINT</text>'+
    '<path class="scl" d="M226 446L170 500H40"/><text x="40" y="490" style="font-size:'+fs+'px">TRAPEZIUM</text>'+
    '<path class="scl" d="M166 300L120 330H40"/><text x="40" y="320" style="font-size:'+fs+'px">1ST METACARPAL</text></g>';
  s+='<g id="smLab2"><path class="scl" d="M'+SM_CMC[0]+' '+SM_CMC[1]+'L150 420H40"/><text class="so" x="40" y="410" style="font-size:'+fs+'px">WORN CARTILAGE</text>'+
    '<path class="scl" d="M250 384L300 300H360"/><text class="so" x="364" y="304" style="font-size:'+fs+'px">BONE SPURS</text></g>';
  s+='<g id="smLab3"><path class="scl" d="M222 446L170 500H40"/><text class="sa" x="40" y="490" style="font-size:'+fs+'px">ZEPART</text>'+
    '<text x="40" y="'+(510+fs)+'" style="font-size:'+(fs-1)+'px">REPLACES THE TRAPEZIUM</text></g>';
  /* step 4: range of motion arc at the thumb tip and the pinch toward the index finger */
  s+='<g id="smMo"><path id="smArc" class="sarc" d="M58 150A190 190 0 0 1 150 66"/><path class="sarc" d="M146 58l6 8-10 2"/>'+
    '<text class="sa" x="40" y="44" style="font-size:'+fs+'px">RANGE OF MOTION</text>'+
    '<path id="smPin" class="sarc" d="M100 112C170 92 240 92 300 110"/><path class="sarc" d="M292 102l8 8-10 4"/><text class="sa" x="190" y="84" text-anchor="middle" style="font-size:'+fs+'px">GRIP STRENGTH</text></g>';
  s+='</g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="smC'+i+'" x="320" y="'+(mob?604:600)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={bones:[].slice.call(svg.querySelectorAll(".sb")),trap:$("#smTrap",svg),glow:$("#smGlow",svg),oa:$("#smOA",svg),imp:$("#smImp",svg),halo:$("#smHalo",svg),
    thumb:$("#smThumb",svg),mo:$("#smMo",svg),arc:$("#smArc",svg),pin:$("#smPin",svg),l1:$("#smLab1",svg),l2:$("#smLab2",svg),l3:$("#smLab3",svg),cap:[0,1,2,3].map(function(i){return $("#smC"+i,svg)})};
  var BL=E.bones.map(function(e){return e.getTotalLength()}),AL=E.arc.getTotalLength(),PL=E.pin.getTotalLength();
  return function(p,b){
    if(!E.trap.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.47),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.bones.forEach(function(e,i){var L=BL[i],q=Math.max(.45,seg(s1,(i%9)*.04,.62+(i%9)*.04));e.style.strokeDasharray=L.toFixed(1)+" "+L.toFixed(1);e.style.strokeDashoffset=(L*(1-q)).toFixed(1)});
    E.l1.style.opacity=(s1*(1-s2)).toFixed(3);
    E.glow.style.opacity=(s2*(1-s3)).toFixed(3);E.oa.style.opacity=(s2*(1-s3)).toFixed(3);E.l2.style.opacity=(s2*(1-s3)).toFixed(3);
    E.trap.style.opacity=(1-s3*.92).toFixed(3);
    E.imp.style.opacity=s3.toFixed(3);E.imp.setAttribute("transform","rotate(-32 232 424) translate("+(-46*(1-s3)).toFixed(1)+" "+(36*(1-s3)).toFixed(1)+")");
    E.halo.style.opacity=(s3*(1-.4*s4)).toFixed(3);E.l3.style.opacity=(s3*(1-s4)).toFixed(3);
    /* step 4: the thumb swings gently about the CMC joint, then pinches in */
    var sw=s4>0?Math.sin(s4*Math.PI*1.5)*10:0;E.thumb.setAttribute("transform","rotate("+sw.toFixed(2)+" "+SM_CMC[0]+" "+SM_CMC[1]+")");
    E.mo.style.opacity=s4.toFixed(3);E.arc.style.strokeDasharray=AL.toFixed(1)+" "+AL.toFixed(1);E.arc.style.strokeDashoffset=(AL*(1-s4)).toFixed(1);
    E.pin.style.strokeDasharray=PL.toFixed(1)+" "+PL.toFixed(1);E.pin.style.strokeDashoffset=(PL*(1-seg(s4,.3,1))).toFixed(1);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
