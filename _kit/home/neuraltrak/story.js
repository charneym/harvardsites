/* The story scene (BL/BY/DB): NeuralTrak's pipeline in the terms of its NSF Phase I outcomes report (award 2433137):
   "~12 seconds of C-arm sweep", "pulsed fluoroscopy mode at 15 fps", reconstruction "from as few as 50-90 degrees of
   angular coverage", "real-time geometric calibration" for "hand-held C-arm motion", "full 3D volume generated in <40
   seconds", "vertebral bodies and pedicles were preserved". ONE figure kept on screen, a schematic axial view:
   Step 1: the source sweeps a 90 degree arc around the patient, the detector opposite, the fan between them.
   Step 2: the frame poses appear as markers; the jittered hand-held path settles onto the estimated geometry.
   Step 3: the reconstruction grid fills in. Step 4: a vertebra (body, pedicles, laminae, processes) resolves in it.
   Schematic only; sizes are illustrative. */
var NC=[360,258],NR=172,NA0=200,NA1=290;
function npt(a,r){a=a*Math.PI/180;return [NC[0]+Math.cos(a)*(r||NR),NC[1]-Math.sin(a)*(r||NR)]}
function ntScene(o){
  var g='',mob=o.mob,i,j;
  g+='<svg class="ntsc'+(mob?' mob':'')+'" viewBox="'+(mob?'120 18 480 472':'20 18 680 472')+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="40" y="40">AXIAL VIEW · SCHEMATIC</text>';
  g+='<circle class="orb" cx="'+NC[0]+'" cy="'+NC[1]+'" r="'+NR+'"/>';
  var a0=npt(NA0),a1=npt(NA1);
  g+='<path class="arc" id="ntArc" d="M'+a0[0].toFixed(1)+' '+a0[1].toFixed(1)+'A'+NR+' '+NR+' 0 0 0 '+a1[0].toFixed(1)+' '+a1[1].toFixed(1)+'"/>';
  /* reconstruction grid */
  g+='<g id="ntGrid">';for(i=0;i<8;i++)for(j=0;j<8;j++)g+='<rect class="vx" id="ntV'+(i*8+j)+'" x="'+(272+j*22)+'" y="'+(170+i*22)+'" width="20" height="20"/>';g+='</g>';
  /* the vertebra, axial */
  g+='<g id="ntVt"><path class="vt" id="ntB" d="M306 206C306 182 330 170 360 170C390 170 414 182 414 206C414 228 392 240 360 240C328 240 306 228 306 206Z"/>'+
     '<path class="vt" id="ntA" d="M332 238L324 262L280 254L276 268L326 282L350 306L360 346L370 306L394 282L444 268L440 254L396 262L388 238"/>'+
     '<path class="vt2" d="M338 246Q360 252 382 246L388 268Q376 290 360 292Q344 290 332 268Z"/></g>';
  /* frame markers (jittered, then settled) */
  for(i=0;i<10;i++){var a=NA0+(NA1-NA0)*i/9,jit=[7,-6,9,-4,6,-8,5,-7,8,-5][i],p=npt(a,NR+jit),q=npt(a);
    g+='<circle class="mk" id="ntK'+i+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="5" data-x0="'+p[0].toFixed(1)+'" data-y0="'+p[1].toFixed(1)+'" data-x1="'+q[0].toFixed(1)+'" data-y1="'+q[1].toFixed(1)+'"/>'}
  /* source, detector, fan */
  g+='<path class="fan" id="ntFan" d=""/><path class="detl" id="ntDet" d=""/><circle class="src" id="ntSrc" r="7" cx="0" cy="0"/>';
  var lx=mob?140:40,ly=mob?60:66;
  g+='<g class="lg"><circle class="src" cx="'+(lx+6)+'" cy="'+(ly-4)+'" r="5"/><text class="lb" x="'+(lx+22)+'" y="'+ly+'">X-RAY SOURCE</text>'+
     '<path class="detl" d="M'+lx+' '+(ly+20)+'h13"/><text class="lb" x="'+(lx+22)+'" y="'+(ly+24)+'">DETECTOR</text></g>';
  var C=mob?["SWEEP: 50–90°, ~12 S","POSES CALIBRATED","AI RECONSTRUCTION","3D VOLUME, <40 S"]:["C-ARM SWEEP · 50–90° · ~12 S AT 15 FPS","REAL-TIME GEOMETRIC CALIBRATION","PHYSICS-INFORMED AI RECONSTRUCTION","3D VOLUME IN UNDER 40 S"];
  for(i=0;i<4;i++)g+='<text class="cl" id="ntC'+i+'" x="'+(mob?140:40)+'" y="'+(mob?482:480)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return ntScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var arc=q("#ntArc"),fan=q("#ntFan"),det=q("#ntDet"),src=q("#ntSrc"),vt=q("#ntVt"),grid=q("#ntGrid"),
    V=[];for(var i=0;i<64;i++)V.push(q("#ntV"+i));
  var K=[];for(i=0;i<10;i++)K.push(q("#ntK"+i));
  var cap=[0,1,2,3].map(function(k){return q("#ntC"+k)});
  var LA=arc.getTotalLength();arc.style.strokeDasharray=LA+" "+LA;
  var vp=[q("#ntB"),q("#ntA")].map(function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;el.style.strokeDashoffset=L;return [el,L]});
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the source sweeps the arc (and keeps its place after) */
    var s=seg(p,.03,.22),a=NA0+(NA1-NA0)*s;arc.style.strokeDashoffset=(LA*(1-s)).toFixed(1);
    var S=npt(a),Dc=npt(a+180,NR*.62),t=[Math.sin(a*Math.PI/180)*74,Math.cos(a*Math.PI/180)*74],
      d0=[Dc[0]-t[0],Dc[1]-t[1]],d1=[Dc[0]+t[0],Dc[1]+t[1]];
    src.setAttribute("cx",S[0].toFixed(1));src.setAttribute("cy",S[1].toFixed(1));
    det.setAttribute("d","M"+d0[0].toFixed(1)+" "+d0[1].toFixed(1)+"L"+d1[0].toFixed(1)+" "+d1[1].toFixed(1));
    fan.setAttribute("d","M"+d0[0].toFixed(1)+" "+d0[1].toFixed(1)+"L"+S[0].toFixed(1)+" "+S[1].toFixed(1)+"L"+d1[0].toFixed(1)+" "+d1[1].toFixed(1)+"Z");
    var beam=1-seg(p,.5,.58);op(fan,b*beam);op(det,b*beam);op(src,b);
    /* step 2: the frame markers appear jittered, then settle on the estimated poses */
    var k1=seg(p,.27,.36),k2=seg(p,.38,.47);
    K.forEach(function(el,k){var x0=+el.dataset.x0,y0=+el.dataset.y0,x1=+el.dataset.x1,y1=+el.dataset.y1;
      el.setAttribute("cx",lerp(x0,x1,k2).toFixed(1));el.setAttribute("cy",lerp(y0,y1,k2).toFixed(1));op(el,b*seg(k1,k/12,k/12+.25))});
    /* step 3: the grid fills row by row */
    var gf=seg(p,.53,.72);V.forEach(function(el,k){var r=Math.floor(k/8);op(el,b*seg(gf,r/9,r/9+.2)*(1-.55*seg(p,.8,.9)))});
    /* step 4: the vertebra resolves */
    var vv=seg(p,.78,.94);vp.forEach(function(e){e[0].style.strokeDashoffset=(e[1]*(1-vv)).toFixed(1)});op(vt,b*seg(p,.77,.8));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
  };
}
