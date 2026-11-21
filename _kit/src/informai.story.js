/* the story scene: one RadOncAI head & neck plan, drawn as an engraved axial slice through the neck (as on a planning CT):
   the body contour with its fine offset lines, the mandible, airway, vertebral body and spinal cord, both parotid glands and
   the tumour target. Step 1 the contoured planning CT (target and organs at risk, labelled); step 2 the AI predicts the dose,
   isodose lines growing out from the target and bending away from the spinal cord and the nearer parotid; step 3 the plan as
   IMRT fields converging on the target and a VMAT arc round it; step 4 the clinician reviews the plan and its dose-volume
   curves (target high, organs at risk low). One caption names each step. Facts: informai.com/solutions and the July 2026
   510(k) release (clinician co-pilot, head & neck, minutes not hours, IMRT/VMAT). Drawing is schematic, not patient data. */
var IA_C=[470,196],IA_T=[418,226],IA_CORD=[470,352],IA_PL=[352,318],IA_PR=[590,318];
function iaBody(sc,dx,dy){/* superellipse neck contour, a little flatter in front */
  var d='',N=96;for(var i=0;i<=N;i++){var t=i/N*Math.PI*2,c=Math.cos(t),s=Math.sin(t);
    var x=Math.sign(c)*Math.pow(Math.abs(c),.78)*196*sc,y=Math.sign(s)*Math.pow(Math.abs(s),.86)*(s<0?148:166)*sc;
    d+=(i?'L':'M')+(IA_C[0]+x+(dx||0)).toFixed(1)+' '+(IA_C[1]+y+(dy||0)).toFixed(1)}return d+'Z'}
function iaTr(t){return 40+7*Math.sin(3*t+.6)+5*Math.cos(2*t+1.1)+3*Math.sin(5*t)}
function iaTarget(){var d='';for(var i=0;i<=72;i++){var t=i/72*Math.PI*2,r=iaTr(t);d+=(i?'L':'M')+(IA_T[0]+Math.cos(t)*r).toFixed(1)+' '+(IA_T[1]+Math.sin(t)*r).toFixed(1)}return d+'Z'}
function iaIso(m){/* an isodose line: the target grown by margin m, held off the cord and the near parotid */
  var N=144,R=[],i;
  for(i=0;i<N;i++){var t=i/N*Math.PI*2,c=Math.cos(t),s=Math.sin(t),r=iaTr(t)+m;
    for(var k=0;k<60;k++){var x=IA_T[0]+c*r,y=IA_T[1]+s*r;
      var dc=Math.hypot(x-IA_CORD[0],y-IA_CORD[1])-(24+m*.12),dp=Math.hypot((x-IA_PL[0])/1,(y-IA_PL[1])/1.25)-(30+m*.08);
      if(dc>0&&dp>0)break;r-=2}
    R.push(Math.max(r,iaTr(t)+4))}
  var S=R.map(function(r,j){var a=0;for(var q=-3;q<=3;q++)a+=R[(j+q+N)%N];return a/7}),d='';
  for(i=0;i<=N;i++){var j=i%N,tt=j/N*Math.PI*2;d+=(i?'L':'M')+(IA_T[0]+Math.cos(tt)*S[j]).toFixed(1)+' '+(IA_T[1]+Math.sin(tt)*S[j]).toFixed(1)}return d+'Z'}
function scene(){
  var mob=MOBILE(),fs=mob?20:12,cs=mob?22:13;
  var caps=["PLANNING CT · TARGET AND ORGANS AT RISK","AI DOSE PREDICTION · HEAD &amp; NECK","IMRT / VMAT · SHAPED TO THE TARGET","CLINICIAN REVIEW · MINUTES, NOT HOURS"];
  var s='<svg viewBox="180 -34 580 600" role="img" aria-label="Engraved axial slice through the neck with a radiation dose plan: target, organs at risk, isodose lines and converging beams">';
  s+='<defs><radialGradient id="iaW" cx="'+IA_T[0]+'" cy="'+IA_T[1]+'" r="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffcf7a" stop-opacity=".34"/><stop offset=".45" stop-color="#f08f86" stop-opacity=".16"/><stop offset="1" stop-color="#8d9cff" stop-opacity="0"/></radialGradient></defs>';
  var g='';for(var gx=200;gx<=740;gx+=40)g+='<path class="ig" d="M'+gx+' 10V520"/>';for(var gy=10;gy<=520;gy+=40)g+='<path class="ig" d="M200 '+gy+'H740"/>';
  s+='<g>'+g+'</g>';
  /* fine engraved offset lines inside the body contour (soft tissue) */
  var E='';for(var k=1;k<=6;k++)E+='<path class="ie" d="'+iaBody(1-k*.034,0,k*1.2)+'"/>';
  s+='<g id="iaEng">'+E+'</g><path id="iaBody" class="ib" d="'+iaBody(1)+'"/>';
  /* anatomy */
  s+='<g id="iaAn">'+
    '<path class="ia" d="M330 214C338 160 392 122 470 118C548 122 602 160 610 214"/><path class="ia" d="M346 214C354 172 402 138 470 134C538 138 586 172 594 214"/>'+
    '<ellipse class="iair" cx="470" cy="214" rx="24" ry="15"/>'+
    '<path class="ia" d="M432 300C436 282 452 274 470 274C488 274 504 282 508 300C510 318 498 330 470 330C442 330 430 318 432 300Z"/>'+
    '<path class="ia" d="M446 336L436 366M494 336L504 366M454 384C460 398 480 398 486 384"/>'+
    '<circle class="icord" cx="'+IA_CORD[0]+'" cy="'+IA_CORD[1]+'" r="12"/>'+
    '<ellipse class="ipar" cx="'+IA_PL[0]+'" cy="'+IA_PL[1]+'" rx="28" ry="38" transform="rotate(-14 '+IA_PL[0]+' '+IA_PL[1]+')"/>'+
    '<ellipse class="ipar" cx="'+IA_PR[0]+'" cy="'+IA_PR[1]+'" rx="28" ry="38" transform="rotate(14 '+IA_PR[0]+' '+IA_PR[1]+')"/>'+
    '<path class="ia" d="M300 196C300 300 306 340 322 372M640 196C640 300 634 340 618 372"/></g>';
  /* dose wash + isodose lines */
  var M=[64,44,26,12],IL='';M.forEach(function(m,i){IL+='<path class="iso i'+i+'" d="'+iaIso(m)+'"/>'});
  s+='<path id="iaWash" d="'+iaIso(70)+'" fill="url(#iaW)"/><g id="iaIso">'+IL+'</g>';
  s+='<path id="iaTgt" class="itg" d="'+iaTarget()+'"/>';
  /* labels (step 1) */
  s+='<g id="iaLab">'+
    '<path class="icl" d="M396 196L330 92H236"/><text class="ia2" x="236" y="82" style="font-size:'+fs+'px">TARGET</text>'+
    '<path class="icl" d="M482 358L560 452H700"/><text x="700" y="442" text-anchor="end" style="font-size:'+fs+'px">SPINAL CORD</text>'+
    '<path class="icl" d="M610 290L652 178H726"/><text x="726" y="168" text-anchor="end" style="font-size:'+fs+'px">PAROTID</text></g>';
  /* isodose legend (step 2) */
  s+='<g id="iaLeg" transform="translate(668 2)">'+[0,1,2,3].map(function(i){return '<path class="iso i'+(3-i)+'" d="M0 '+(i*20)+'H22"/><text x="32" y="'+(i*20+4)+'" style="font-size:'+(fs-1)+'px">'+["95%","80%","60%","40%"][i]+'</text>'}).join('')+'</g>';
  /* beams (step 3): fields from nine gantry angles converging on the target, and a VMAT arc */
  var B='';for(var a=0;a<9;a++){var t=(a*40-90)*Math.PI/180,R0=214,w=.075;
    var x1=IA_T[0]+Math.cos(t-w)*R0,y1=IA_T[1]+Math.sin(t-w)*R0,x2=IA_T[0]+Math.cos(t+w)*R0,y2=IA_T[1]+Math.sin(t+w)*R0,
        x3=IA_T[0]+Math.cos(t+.22)*30,y3=IA_T[1]+Math.sin(t+.22)*30,x4=IA_T[0]+Math.cos(t-.22)*30,y4=IA_T[1]+Math.sin(t-.22)*30;
    B+='<path class="ibm" d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x4.toFixed(1)+' '+y4.toFixed(1)+'L'+x3.toFixed(1)+' '+y3.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'Z"/>'+
       '<rect class="ihd" x="-9" y="-4" width="18" height="8" transform="translate('+(IA_T[0]+Math.cos(t)*224).toFixed(1)+' '+(IA_T[1]+Math.sin(t)*224).toFixed(1)+') rotate('+(a*40)+')"/>'}
  s+='<g id="iaBm">'+B+'</g><path id="iaArc" class="iarc" d="M'+(IA_T[0]+Math.cos(-2.6)*196).toFixed(1)+' '+(IA_T[1]+Math.sin(-2.6)*196).toFixed(1)+'A196 196 0 0 1 '+(IA_T[0]+Math.cos(-.54)*196).toFixed(1)+' '+(IA_T[1]+Math.sin(-.54)*196).toFixed(1)+'"/>';
  s+='<text id="iaArcT" class="ia2" x="'+(IA_T[0]+Math.cos(-.54)*196+10).toFixed(1)+'" y="'+(IA_T[1]+Math.sin(-.54)*196-8).toFixed(1)+'" style="font-size:'+fs+'px">VMAT ARC</text>';
  /* step 4: dose-volume curves and the review mark */
  var DX=548,DY=430,DW=180,DH=82;
  s+='<g id="iaDvh"><rect class="idb" x="'+(DX-14)+'" y="'+(DY-30)+'" width="'+(DW+28)+'" height="'+(DH+50)+'"/>'+
    '<path class="iax" d="M'+DX+' '+DY+'V'+(DY+DH)+'H'+(DX+DW)+'"/>'+
    '<path id="iaD0" class="idv d0" d="M'+DX+' '+(DY+4)+'H'+(DX+DW*.62)+'C'+(DX+DW*.7)+' '+(DY+4)+' '+(DX+DW*.72)+' '+(DY+DH)+' '+(DX+DW*.8)+' '+(DY+DH)+'H'+(DX+DW)+'"/>'+
    '<path id="iaD1" class="idv d1" d="M'+DX+' '+(DY+4)+'C'+(DX+DW*.1)+' '+(DY+40)+' '+(DX+DW*.22)+' '+(DY+DH-6)+' '+(DX+DW*.42)+' '+(DY+DH)+'H'+(DX+DW)+'"/>'+
    '<path id="iaD2" class="idv d2" d="M'+DX+' '+(DY+4)+'C'+(DX+DW*.06)+' '+(DY+56)+' '+(DX+DW*.14)+' '+(DY+DH-2)+' '+(DX+DW*.3)+' '+(DY+DH)+'H'+(DX+DW)+'"/>'+
    '<text x="'+DX+'" y="'+(DY-12)+'" style="font-size:'+(fs-1)+'px">DVH</text>'+
    '<text class="ia2" x="'+(DX+DW)+'" y="'+(DY-12)+'" text-anchor="end" style="font-size:'+(fs-1)+'px">REVIEW ✓</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="iaC'+i+'" x="470" y="'+(mob?552:550)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={body:$("#iaBody",svg),eng:$("#iaEng",svg),an:$("#iaAn",svg),tgt:$("#iaTgt",svg),lab:$("#iaLab",svg),leg:$("#iaLeg",svg),wash:$("#iaWash",svg),
    iso:[].slice.call(svg.querySelectorAll("#iaIso .iso")),bm:[].slice.call(svg.querySelectorAll("#iaBm .ibm")),hd:[].slice.call(svg.querySelectorAll("#iaBm .ihd")),
    arc:$("#iaArc",svg),arcT:$("#iaArcT",svg),dvh:$("#iaDvh",svg),dv:[0,1,2].map(function(i){return $("#iaD"+i,svg)}),cap:[0,1,2,3].map(function(i){return $("#iaC"+i,svg)})};
  var BL=E.body.getTotalLength(),TL=E.tgt.getTotalLength(),AL=E.arc.getTotalLength(),IL=E.iso.map(function(e){return e.getTotalLength()}),DL=E.dv.map(function(e){return e.getTotalLength()});
  return function(p,b){
    if(!E.body.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.47),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.body.style.strokeDasharray=BL.toFixed(1)+" "+BL.toFixed(1);E.body.style.strokeDashoffset=(BL*(1-Math.max(.4,s1))).toFixed(1);
    E.eng.style.opacity=(.35+.65*s1).toFixed(3);E.an.style.opacity=(.3+.7*s1).toFixed(3);
    E.tgt.style.strokeDasharray=TL.toFixed(1)+" "+TL.toFixed(1);E.tgt.style.strokeDashoffset=(TL*(1-Math.max(.25,s1))).toFixed(1);
    E.lab.style.opacity=(s1*(1-s2)).toFixed(3);
    /* step 2: isodose lines grow out from the target, innermost first */
    E.iso.forEach(function(e,i){var q=seg(s2,(3-i)*.18,(3-i)*.18+.46);e.style.strokeDasharray=IL[i].toFixed(1)+" "+IL[i].toFixed(1);e.style.strokeDashoffset=(IL[i]*(1-q)).toFixed(1);e.style.opacity=(q>0?1-.35*s4:0).toFixed(3)});
    E.wash.style.opacity=(s2*(1-.4*s4)).toFixed(3);E.leg.style.opacity=(s2*(1-s3)).toFixed(3);
    /* step 3: fields converge, then the arc sweeps round */
    E.bm.forEach(function(e,i){var q=seg(s3,i*.05,i*.05+.4);e.style.opacity=(q*(1-.8*s4)).toFixed(3)});
    E.hd.forEach(function(e,i){var q=seg(s3,i*.05,i*.05+.4);e.style.opacity=(q*(1-.8*s4)).toFixed(3)});
    var aq=seg(s3,.45,1);E.arc.style.strokeDasharray=AL.toFixed(1)+" "+AL.toFixed(1);E.arc.style.strokeDashoffset=(AL*(1-aq)).toFixed(1);E.arc.style.opacity=(aq>0?1-.6*s4:0).toFixed(3);
    E.arcT.style.opacity=(seg(s3,.8,1)*(1-s4)).toFixed(3);
    /* step 4: the review panel and its curves */
    E.dvh.style.opacity=Math.min(1,s4*2).toFixed(3);
    E.dv.forEach(function(e,i){var q=seg(s4,.1+i*.12,.6+i*.12);e.style.strokeDasharray=DL[i].toFixed(1)+" "+DL[i].toFixed(1);e.style.strokeDashoffset=(DL[i]*(1-q)).toFixed(1)});
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
