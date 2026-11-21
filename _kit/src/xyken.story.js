/* the story scene: one SnugFit O&P scan, drawn as an engraved side elevation of a lower leg and foot (medial view) with its
   cross-section contours, like a scan mesh on a drafting plate. A plain phone (no branding) moves round it.
   Step 1 the initial-position indicator frames the foot (corner brackets, the green shade of the app);
   step 2 the phone travels an arc round the foot while the contours fill in from the sole up (real-time capture);
   step 3 the finished mesh with its error map against an industrial ground truth (< 0.4 mm average on a foot model);
   step 4 one-click upload of scan and prescription, and the custom orthotic it becomes. One caption names each step. */
var XS_BACK=[[40,264],[100,246],[160,238],[220,250],[280,264],[320,268],[345,262]];/* [y, x] back of the leg */
var XS_FRONT=[[40,324],[120,331],[200,334],[260,340],[300,352],[330,372]];/* [y, x] shin */
var XS_TOP=[[236,392],[262,368],[300,352],[340,334],[400,346],[460,364],[520,384],[580,398],[620,407],[648,420]];/* [x, y] dorsum */
function xsI(T,v){if(v<=T[0][0])return T[0][1];for(var i=1;i<T.length;i++)if(v<=T[i][0]){var a=T[i-1],b=T[i],t=(v-a[0])/(b[0]-a[0]);return a[1]+(b[1]-a[1])*t}return T[T.length-1][1]}
function xsSole(x){var a=(x>330&&x<480)?Math.sin((x-330)/150*Math.PI)*7:0;return 440-a}
function xsOutline(){/* back of leg down, heel, sole, toe, dorsum, shin up */
  var d='M264 40C246 92 232 140 238 168C246 220 262 262 266 300C268 330 262 350 252 366C236 380 226 398 228 418C230 432 238 440 254 440';
  d+='L330 440C380 434 430 434 480 440L600 440C630 440 650 436 652 426C654 414 640 406 620 404C580 398 540 390 500 378C450 362 410 346 380 330C362 318 350 300 344 270C338 230 334 160 330 110L324 40';
  return d}
function scene(){
  var mob=MOBILE(),fs=mob?21:12,cs=mob?23:13;
  var caps=["INITIAL POSITION · GREEN SHADE OR HAPTICS","REAL-TIME CAPTURE · MOVE FREELY, 5–25 S","AVERAGE ERROR < 0.4 MM ON A FOOT MODEL","SCAN + PRESCRIPTION, ONE CLICK"];
  var s='<svg viewBox="180 0 580 560" role="img" aria-label="Side elevation of a lower leg and foot being 3D scanned by a phone, with its mesh contours">';
  var g='';for(var gx=200;gx<=740;gx+=40)g+='<path class="xg" d="M'+gx+' 24V504"/>';for(var gy=24;gy<=504;gy+=40)g+='<path class="xg" d="M200 '+gy+'H740"/>';
  s+='<g>'+g+'</g><path class="xgr" d="M190 440H740"/>';
  /* contours: rings across the leg, then across the foot; each carries its height for the sweep */
  var R='';
  for(var y=52;y<=326;y+=17){var xb=xsI(XS_BACK,y),xf=xsI(XS_FRONT,y),cx=(xb+xf)/2,rx=(xf-xb)/2;R+='<ellipse class="xr" data-h="'+(440-y)+'" cx="'+cx.toFixed(1)+'" cy="'+y+'" rx="'+rx.toFixed(1)+'" ry="'+(rx*.2).toFixed(1)+'"/>'}
  for(var x=252;x<=640;x+=19){var yt=xsI(XS_TOP,x),yb=xsSole(x),cy=(yt+yb)/2,ry=(yb-yt)/2;R+='<ellipse class="xr" data-h="'+(440-yt)*.5+'" cx="'+x+'" cy="'+cy.toFixed(1)+'" rx="'+(ry*.24).toFixed(1)+'" ry="'+ry.toFixed(1)+'"/>'}
  s+='<g id="xsR">'+R+'</g>';
  s+='<path id="xsOut" class="xo" d="'+xsOutline()+'"/>';
  /* sweep line */
  s+='<path id="xsSw" class="xsw" d="M200 0H690"/>';
  /* step 1: the initial-position frame (corner brackets and the green shade) */
  var B=[214,26,672,452],k=26;
  s+='<g id="xsBox"><rect class="xbf" x="'+B[0]+'" y="'+B[1]+'" width="'+(B[2]-B[0])+'" height="'+(B[3]-B[1])+'"/>'+
    '<path class="xb" d="M'+B[0]+' '+(B[1]+k)+'V'+B[1]+'H'+(B[0]+k)+'M'+(B[2]-k)+' '+B[1]+'H'+B[2]+'V'+(B[1]+k)+'M'+B[2]+' '+(B[3]-k)+'V'+B[3]+'H'+(B[2]-k)+'M'+(B[0]+k)+' '+B[3]+'H'+B[0]+'V'+(B[3]-k)+'"/>'+
    '<text class="xg2" x="'+(B[2]-4)+'" y="'+(B[1]-10)+'" text-anchor="end" style="font-size:'+fs+'px">AFO · READY</text></g>';
  /* the phone and its field of view */
  s+='<path id="xsFov" class="xfov" d=""/><g id="xsPh"><rect class="xph" x="-17" y="-32" width="34" height="64" rx="5"/><rect class="xps" x="-13" y="-26" width="26" height="50" rx="2"/><circle class="xpc" cx="0" cy="-29" r="1.6"/></g>';
  /* step 3: error ticks along the outline and the callout */
  var T='';var EP=[[240,170,1],[262,300,2],[232,404,1],[300,440,0],[420,436,1],[560,440,0],[648,424,2],[560,392,1],[440,356,0],[348,262,1],[332,130,0]];
  EP.forEach(function(e){T+='<circle class="xe e'+e[2]+'" cx="'+e[0]+'" cy="'+e[1]+'" r="4.2"/>'});
  s+='<g id="xsErr">'+T+'<path class="xcl" d="M560 392L600 300H700"/><text class="xa" x="700" y="290" text-anchor="end" style="font-size:'+fs+'px">&lt; 0.4 MM</text><text x="700" y="318" text-anchor="end" style="font-size:'+fs+'px">VS GROUND TRUTH</text>'+
    '<g transform="translate(470 82)"><rect class="xe e0" x="0" y="0" width="14" height="6"/><rect class="xe e1" x="16" y="0" width="14" height="6"/><rect class="xe e2" x="32" y="0" width="14" height="6"/><text x="56" y="7" style="font-size:'+fs+'px">ERROR MAP</text></g></g>';
  /* step 4: the orthotic it becomes, and the upload */
  s+='<g id="xsOrth"><path id="xsIns" class="xin" d="M246 470C238 486 252 500 290 500L560 498C612 497 646 490 648 478C650 466 620 462 580 462L420 464C380 456 340 458 300 462C268 462 252 462 246 470Z"/>'+
    '<path class="xin2" d="M270 480C300 474 340 472 380 476M440 474C490 470 560 470 610 476"/><text class="xa" x="660" y="492" style="font-size:'+fs+'px">ORTHOTIC</text></g>';
  s+='<path id="xsUp" class="xup" d=""/><text id="xsUpT" class="xa" x="0" y="0" text-anchor="middle" style="font-size:'+fs+'px">UPLOAD</text>';
  caps.forEach(function(t,i){s+='<text class="cap" id="xsC'+i+'" x="470" y="'+(mob?548:546)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={out:$("#xsOut",svg),sw:$("#xsSw",svg),box:$("#xsBox",svg),fov:$("#xsFov",svg),ph:$("#xsPh",svg),err:$("#xsErr",svg),orth:$("#xsOrth",svg),ins:$("#xsIns",svg),up:$("#xsUp",svg),upT:$("#xsUpT",svg),
    rings:[].slice.call(svg.querySelectorAll(".xr")),cap:[0,1,2,3].map(function(i){return $("#xsC"+i,svg)})};
  var OL=E.out.getTotalLength(),IL=E.ins.getTotalLength();
  var C=[450,270],RAD=[250,236];
  function ph(a){var t=a*Math.PI/180;return [C[0]+Math.cos(t)*RAD[0],C[1]+Math.sin(t)*RAD[1]]}
  return function(p,b){
    if(!E.out.isConnected)return;
    var s1=seg(p,.02,.15),s2=seg(p,.27,.47),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* outline draws on in step 1 */
    E.out.style.strokeDasharray=OL.toFixed(1)+" "+OL.toFixed(1);E.out.style.strokeDashoffset=(OL*(1-Math.max(.35,s1))).toFixed(1);
    E.box.style.opacity=(s1*(1-s2)).toFixed(3);
    /* step 2: the sweep rises; rings below it fill in */
    var H=-10+s2*420;
    E.rings.forEach(function(r){var hh=+r.getAttribute("data-h");var o=Math.max(0,Math.min(1,(H-hh)/30));r.style.opacity=(.06+.94*o).toFixed(3)});
    E.sw.setAttribute("transform","translate(0 "+(440-H).toFixed(1)+")");E.sw.style.opacity=(s2>0&&s2<1?Math.min(1,s2*6,(1-s2)*6):0).toFixed(3);
    /* the phone: at the start position, then travels round the foot, then rests up and left */
    var a=s2<=0?205:s2>=1?255:205+s2*130-(s2>.5?(s2-.5)*2*80:0);
    var P=ph(a);if(s3>0)P=[P[0],P[1]];
    var rot=a+90;
    E.ph.setAttribute("transform","translate("+P[0].toFixed(1)+" "+P[1].toFixed(1)+") rotate("+(rot-180).toFixed(1)+")");
    var po=Math.min(1,s1*2)*(1-.6*s3);E.ph.style.opacity=po.toFixed(3);
    /* field of view: two rays to the foot's extent */
    var A1=[300,120+s2*0],A2=[600,430];
    E.fov.setAttribute("d","M"+P[0].toFixed(1)+" "+P[1].toFixed(1)+"L"+A1[0]+" "+A1[1]+"L"+A2[0]+" "+A2[1]+"Z");
    E.fov.style.opacity=(Math.min(1,s1*2)*(1-s3)*.9).toFixed(3);
    E.err.style.opacity=(s3*(1-.55*s4)).toFixed(3);
    /* step 4: the upload arc and the orthotic */
    var u0=[P[0],P[1]],u1=[690,150];
    E.up.setAttribute("d","M"+u0[0].toFixed(1)+" "+u0[1].toFixed(1)+"Q"+((u0[0]+u1[0])/2).toFixed(1)+" "+(Math.min(u0[1],u1[1])-80).toFixed(1)+" "+u1[0]+" "+u1[1]);
    var UL=E.up.getTotalLength();E.up.style.strokeDasharray="5 6";E.up.style.opacity=(seg(p,.78,.84)*1).toFixed(3);
    E.upT.setAttribute("x",u1[0]);E.upT.setAttribute("y",u1[1]+26);E.upT.style.opacity=seg(p,.8,.86).toFixed(3);
    E.orth.style.opacity=Math.min(1,s4*2).toFixed(3);E.ins.style.strokeDasharray=IL.toFixed(1)+" "+IL.toFixed(1);E.ins.style.strokeDashoffset=(IL*(1-s4)).toFixed(1);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
