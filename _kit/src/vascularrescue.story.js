/* the story scene: the four AVAD subsystems on one engraved longitudinal section through skin, tissue, a vein and the artery
   beside it. Step 1 colour-flow ultrasound finds the vein and a crosshair confirms the target; step 2 the needle advances on a
   fixed trajectory and depth; step 3 puncture is detected at the tip and the Doppler traces tell vein from artery; step 4 the
   guidewire threads along the lumen and the sheath follows it over: a secured access point. The probe is drawn generically
   (no invented device styling). One caption names each step. */
var VR_T=[262,326];/* target on the vein axis */
var VR_E=[470,86];/* needle entry from the device side */
function vrVein(x){return 326+10*Math.sin((x-40)/520*Math.PI*1.4)}
function vrArt(x){return 432+6*Math.sin((x-40)/520*Math.PI*1.1+1)}
function vrPath(f,off,x0,x1){var d="";for(var x=x0;x<=x1;x+=10)d+=(x===x0?"M":"L")+x+" "+(f(x)+off).toFixed(1);return d}
function vrBand(f,r){var d='',x;for(x=40;x<=560;x+=10)d+=(x===40?'M':'L')+x+' '+(f(x)-r).toFixed(1);for(x=560;x>=40;x-=10)d+='L'+x+' '+(f(x)+r).toFixed(1);return d+'Z'}
function scene(){
  var mob=MOBILE(),fs=mob?20:12,cs=mob?22:13;
  var caps=["COLOUR-FLOW ULTRASOUND · TARGET CONFIRMED","CONTROLLED ANGLE AND DEPTH, EVERY TIME","PUNCTURE DETECTED · VEIN, NOT ARTERY","GUIDEWIRE AND SHEATH · ACCESS SECURED"];
  var s='<svg viewBox="20 20 560 540" role="img" aria-label="Section through skin, a vein and an artery, showing ultrasound targeting, needle insertion, puncture detection and guidewire cannulation">';
  var g='';for(var gx=40;gx<=560;gx+=40)g+='<path class="vg" d="M'+gx+' 40V520"/>';for(var gy=40;gy<=520;gy+=40)g+='<path class="vg" d="M40 '+gy+'H560"/>';
  s+='<g>'+g+'</g>';
  /* skin and tissue layers */
  s+='<path class="vsk" d="M30 160C140 154 260 166 380 158S520 156 570 162"/>';
  s+='<path class="vly" d="M30 204C150 198 270 210 390 202S520 200 570 206"/><path class="vly" d="M30 250C160 246 280 256 400 248S520 246 570 252"/>';
  s+='<text x="44" y="150" style="font-size:'+fs+'px">SKIN</text>';
  /* the ultrasound fan (step 1) */
  s+='<path id="vrFan" class="vfan" d="M330 162L370 162L520 500L180 500Z"/>';
  /* vein and artery */
  s+='<path id="vrVf" class="vvf" d="'+vrBand(vrVein,24)+'"/>';
  s+='<path class="vvn" d="'+vrPath(vrVein,-24,40,560)+'"/><path class="vvn" d="'+vrPath(vrVein,24,40,560)+'"/>';
  s+='<path id="vrVflow" class="vflow" d="'+vrPath(vrVein,0,40,560)+'"/>';
  s+='<path id="vrAf" class="vaf" d="'+vrBand(vrArt,14)+'"/>';
  s+='<path id="vrA1" class="var" d="'+vrPath(vrArt,-14,40,560)+'"/><path id="vrA2" class="var" d="'+vrPath(vrArt,14,40,560)+'"/>';
  s+='<path id="vrAflow" class="vaflow" d="'+vrPath(vrArt,0,40,560)+'"/>';
  s+='<text x="44" y="'+(vrVein(44)-34)+'" style="font-size:'+fs+'px">VEIN</text><text class="vpk" x="44" y="'+(vrArt(44)+38)+'" style="font-size:'+fs+'px">ARTERY</text>';
  /* the probe on the skin (generic) */
  s+='<g id="vrPr"><path class="vpr" d="M322 160V112C322 100 330 92 342 92H358C370 92 378 100 378 112V160Z"/><path class="vpr2" d="M326 160H374"/></g>';
  /* crosshair (step 1) */
  s+='<g id="vrX"><circle class="vx" cx="'+VR_T[0]+'" cy="'+VR_T[1]+'" r="30"/><path class="vx" d="M'+(VR_T[0]-46)+' '+VR_T[1]+'H'+(VR_T[0]-14)+'M'+(VR_T[0]+14)+' '+VR_T[1]+'H'+(VR_T[0]+46)+'M'+VR_T[0]+' '+(VR_T[1]-46)+'V'+(VR_T[1]-14)+'M'+VR_T[0]+' '+(VR_T[1]+14)+'V'+(VR_T[1]+46)+'"/>'+
    '<text class="vac" x="'+(VR_T[0]-50)+'" y="'+(VR_T[1]-58)+'" style="font-size:'+fs+'px">TARGET</text></g>';
  /* trajectory guide and needle (step 2) */
  s+='<path id="vrTr" class="vtr" d="M'+VR_E[0]+' '+VR_E[1]+'L'+VR_T[0]+' '+VR_T[1]+'"/>';
  s+='<path id="vrN" class="vnd" d="M'+VR_E[0]+' '+VR_E[1]+'L'+VR_T[0]+' '+VR_T[1]+'"/>';
  s+='<g id="vrAng"><path class="vx" d="M'+(VR_T[0]+120)+' '+(VR_T[1]-125)+'A60 60 0 0 1 '+(VR_T[0]+140)+' '+(VR_T[1]-58)+'"/><text class="vac" x="'+(VR_T[0]+150)+'" y="'+(VR_T[1]-82)+'" style="font-size:'+fs+'px">ANGLE · DEPTH</text></g>';
  /* puncture flash and Doppler traces (step 3) */
  s+='<g id="vrHit"><circle class="vhit" cx="'+VR_T[0]+'" cy="'+VR_T[1]+'" r="12"/><circle class="vhit2" cx="'+VR_T[0]+'" cy="'+VR_T[1]+'" r="24"/></g>';
  var vw='',aw='';for(var x=0;x<=150;x+=3){vw+=(x?"L":"M")+(400+x)+" "+(470-6*Math.sin(x/150*Math.PI*2)-2).toFixed(1);var ph=(x%50)/50;aw+=(x?"L":"M")+(400+x)+" "+(520-(ph<.18?ph/.18*26:26*Math.exp(-(ph-.18)*7))).toFixed(1)}
  s+='<g id="vrDop"><rect class="vdp" x="388" y="430" width="174" height="108"/><text x="396" y="448" style="font-size:'+(fs-1)+'px">DOPPLER</text>'+
    '<path class="vdv" d="'+vw+'"/><path class="vda" d="'+aw+'"/><text class="vac" x="554" y="470" text-anchor="end" style="font-size:'+(fs-1)+'px">VEIN ✓</text></g>';
  /* guidewire and sheath (step 4) */
  var wd='M'+VR_T[0]+' '+VR_T[1];for(var wx=VR_T[0]-10;wx>=90;wx-=10)wd+='L'+wx+' '+vrVein(wx).toFixed(1);s+='<path id="vrW" class="vwr" d="'+wd+'"/>';
  s+='<path id="vrSh" class="vsh" d="M'+(VR_E[0]-60)+' '+(VR_E[1]+66)+'L'+VR_T[0]+' '+VR_T[1]+'L'+(VR_T[0]-60)+' '+vrVein(VR_T[0]-60).toFixed(1)+'"/>';
  s+='<text id="vrOk" class="vac" x="96" y="'+(vrVein(96)+58)+'" style="font-size:'+fs+'px">SECURED · READY TO USE</text>';
  caps.forEach(function(t,i){s+='<text class="cap" id="vrC'+i+'" x="300" y="'+(mob?558:556)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var q=function(id){return $("#"+id,svg)};
  var E={fan:q("vrFan"),x:q("vrX"),tr:q("vrTr"),n:q("vrN"),ang:q("vrAng"),hit:q("vrHit"),dop:q("vrDop"),w:q("vrW"),sh:q("vrSh"),ok:q("vrOk"),vf:q("vrVf"),af:q("vrAf"),vfl:q("vrVflow"),afl:q("vrAflow"),
    cap:[0,1,2,3].map(function(i){return q("vrC"+i)})};
  var NL=E.n.getTotalLength(),WL=E.w.getTotalLength(),SL=E.sh.getTotalLength();
  var t0=performance.now();
  return function(p,b){
    if(!E.n.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.46),s3=seg(p,.53,.68),s4=seg(p,.77,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    var t=(performance.now()-t0)/1000;
    /* flow inside the vessels never stops */
    E.vfl.style.strokeDashoffset=(-(t*14)%40).toFixed(1);E.afl.style.strokeDashoffset=(-(t*34)%40).toFixed(1);
    E.fan.style.opacity=(s1*(1-.55*s4)).toFixed(3);
    E.vf.style.opacity=(.25+.75*s1).toFixed(3);E.af.style.opacity=(.25+.75*s1).toFixed(3);
    E.x.style.opacity=(s1*(1-.75*s2)).toFixed(3);
    E.tr.style.opacity=(Math.min(1,s1*1.5)*(1-s3)).toFixed(3);
    /* needle advances in step 2, withdraws as the sheath goes on in step 4 */
    var nIn=s2*(1-seg(p,.86,.95));
    E.n.style.strokeDasharray=NL.toFixed(1)+" "+NL.toFixed(1);E.n.style.strokeDashoffset=(NL*(1-nIn)).toFixed(1);
    E.n.style.opacity=(s2>0?1:0).toFixed(3);
    E.ang.style.opacity=(s2*(1-s3)).toFixed(3);
    E.hit.style.opacity=(s3*(1-seg(p,.74,.8))).toFixed(3);E.hit.setAttribute("transform","translate("+VR_T[0]+" "+VR_T[1]+") scale("+(.6+.4*s3).toFixed(3)+") translate("+(-VR_T[0])+" "+(-VR_T[1])+")");
    E.dop.style.opacity=(s3*(1-.6*s4)).toFixed(3);
    var w=seg(p,.77,.88);E.w.style.strokeDasharray=WL.toFixed(1)+" "+WL.toFixed(1);E.w.style.strokeDashoffset=(WL*(1-w)).toFixed(1);E.w.style.opacity=(w>0?1:0);
    var shv=seg(p,.84,.95);E.sh.style.strokeDasharray=SL.toFixed(1)+" "+SL.toFixed(1);E.sh.style.strokeDashoffset=(SL*(1-shv)).toFixed(1);E.sh.style.opacity=(shv>0?1:0);
    E.ok.style.opacity=seg(p,.9,.96).toFixed(3);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
