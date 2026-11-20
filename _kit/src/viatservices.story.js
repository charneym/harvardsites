/* the story scene: the spatial orientation task, drawn as an engraved plan of a virtual environment (fine-line landmarks on a
   compass ground, like a surveyor's plate). The landmarks are the ones in VIAT's own test scene (a house, a library, a car,
   a mailbox). Step 1 the participant stands in the scene and a ghost self appears elsewhere, facing another landmark (the
   imagined change of perspective); step 2 the headset's field of view and the body's own turn (vestibular, proprioceptive);
   step 3 the participant reorients and points to a target: the pointing ray, the true bearing and the angular error;
   step 4 an EEG trace and a real-world walking route (validation). One caption under the figure names each step. */
var VS_C=[400,250],VS_R=262,VS_SQ=.6;
function vsAt(b,r){r=r||VS_R;var a=b*Math.PI/180;return [VS_C[0]+Math.sin(a)*r,VS_C[1]-Math.cos(a)*r*VS_SQ]}
function vsAng(p,q){return Math.atan2(q[0]-p[0],-(q[1]-p[1]))*180/Math.PI}
var VS_L={house:vsAt(-42),lib:vsAt(44),mail:vsAt(108),car:vsAt(-118)};
var VS_G=vsAt(-150,130);/* the imagined (ghost) standpoint, near the car */
function vsHouse(){return '<path class="lm" d="M-26 12V-8L0-28L26-8V12Z"/><path class="lm2" d="M-26 -8H26M-6 12V-2H6V12M-19 -2h8v6h-8zM11 -2h8v6h-8zM-14-18v-8h6v3"/>'}
function vsLib(){return '<path class="lm" d="M-30 12V-12H30V12Z"/><path class="lm2" d="M-30-12L-24-20H24L30-12M-16-17H16M-24 12V-4H-12V12M12 12V-4H24V12M-5 12V0H5V12M-22 0H-14M-22 4H-14M14 0H22M14 4H22"/>'}
function vsMail(){return '<path class="lm" d="M-2 14V-6H2V14Z"/><path class="lm" d="M-12-6V-16C-12-21-8-24-3-24H8C12-24 14-21 14-16V-6Z"/><path class="lm2" d="M10-24V-34H18V-30H10M-12 14H12"/>'}
function vsCar(){return '<path class="lm" d="M-32 6V-4C-32-7-29-8-26-9L-16-11L-8-19H12L22-10L30-8C32-7 33-5 33-2V6Z"/><path class="lm2" d="M-12-11L-6-17H0V-11ZM3-11V-17H11L17-11ZM-36 6H36"/><circle class="lm" cx="-19" cy="6" r="6"/><circle class="lm" cx="20" cy="6" r="6"/>'}
function vsMe(cls){/* a person seen from above: shoulders, head, the headset on the face, a nose tick for heading */
  return '<g class="'+cls+'"><ellipse class="me" cx="0" cy="3" rx="19" ry="9"/><circle class="me" cx="0" cy="0" r="10"/><path class="hs" d="M-9-6H9V-12H-9Z"/><path class="me2" d="M0-12V-22"/></g>'}
function scene(){
  var mob=MOBILE(),fs=mob?22:12.5,cs=mob?24:13.5;
  var caps=["IMAGINE A CHANGE OF PERSPECTIVE","IMMERSIVE: THE BODY TURNS WITH THE SCENE","REORIENTATION ANGLE · POINTING ERROR","EEG AND REAL-WORLD NAVIGATION"];
  var s='<svg viewBox="0 0 800 560" role="img" aria-label="Plan of a virtual test environment: a participant reorients and points to a landmark">';
  /* the compass ground: rings, bearing ticks every 10 degrees, faint survey grid */
  var g='';for(var i=1;i<=5;i++)g+='<ellipse class="rg'+(i===5?' r5':'')+'" cx="'+VS_C[0]+'" cy="'+VS_C[1]+'" rx="'+(i*64)+'" ry="'+(i*64*VS_SQ).toFixed(1)+'"/>';
  for(var b=0;b<360;b+=10){var p0=vsAt(b,320),p1=vsAt(b,b%30?311:298);g+='<path class="tk" d="M'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+'L'+p1[0].toFixed(1)+' '+p1[1].toFixed(1)+'"/>'}
  for(var gx=40;gx<=760;gx+=40)g+='<path class="gd" d="M'+gx+' 30V470"/>';for(var gy=30;gy<=470;gy+=40)g+='<path class="gd" d="M40 '+gy+'H760"/>';
  s+='<g id="vsGround">'+g+'</g>';
  var N=vsAt(0,346);s+='<text class="nm2" x="'+N[0]+'" y="'+(N[1]+4)+'" text-anchor="middle" style="font-size:'+fs+'px">N</text>';
  /* landmarks with their labels */
  var LM=[["house",vsHouse(),"HOUSE",0,-38],["lib",vsLib(),"LIBRARY",0,-30],["mail",vsMail(),"MAILBOX",0,38],["car",vsCar(),"CAR",0,36]];
  LM.forEach(function(l){var p=VS_L[l[0]];s+='<g id="vsL_'+l[0]+'" class="lmk" transform="translate('+p[0].toFixed(1)+' '+p[1].toFixed(1)+') scale(1.3)">'+l[1]+'<text x="'+l[3]+'" y="'+l[4]+'" text-anchor="middle" style="font-size:'+fs+'px">'+l[2]+'</text></g>'});
  /* step 1: ghost self and its sightline */
  s+='<path id="vsSight" class="pth" d="M'+VS_G[0].toFixed(1)+' '+VS_G[1].toFixed(1)+'L'+VS_L.house[0].toFixed(1)+' '+(VS_L.house[1]+16).toFixed(1)+'"/>';
  s+='<g id="vsGhost" transform="translate('+VS_G[0].toFixed(1)+' '+VS_G[1].toFixed(1)+') rotate('+vsAng(VS_G,VS_L.house).toFixed(1)+') scale(1.4)">'+vsMe("gh")+'</g>';
  /* step 2: field of view wedge and the body-turn arc */
  s+='<path id="vsFov" class="fov" d="M0 0L-84-204A220 220 0 0 1 84-204Z"/>';
  s+='<path id="vsTurn" class="arcA" d=""/><path id="vsTurnH" class="arcA" d=""/>';
  /* step 3: true bearing (dashed), pointing ray (accent), error arc */
  s+='<path id="vsTrue" class="pth2" d=""/><path id="vsRay" class="ray" d=""/><path id="vsErr" class="err" d=""/>';
  s+='<text id="vsErrT" class="a" x="0" y="0" text-anchor="end" style="font-size:'+fs+'px">ERROR</text>';
  /* the participant */
  s+='<g id="vsMe" transform="translate('+VS_C[0]+' '+VS_C[1]+') scale(1.4)">'+vsMe("you")+'</g>';
  /* step 4: walking route between landmarks and an EEG trace under the plan */
  var R=[VS_C,vsAt(-170,90),vsAt(-140,150),[VS_L.car[0]+52,VS_L.car[1]+30],vsAt(-80,200),[VS_L.house[0]-14,VS_L.house[1]+48]];
  var rd='M'+R[0][0]+' '+R[0][1];for(var j=1;j<R.length;j++){var m=[(R[j-1][0]+R[j][0])/2,(R[j-1][1]+R[j][1])/2];rd+='Q'+R[j-1][0].toFixed(1)+' '+R[j-1][1].toFixed(1)+' '+m[0].toFixed(1)+' '+m[1].toFixed(1)}rd+='T'+R[R.length-1][0].toFixed(1)+' '+R[R.length-1][1].toFixed(1);
  s+='<path id="vsRoute" class="route" d="'+rd+'"/>';
  var ed='',ry=496;for(var x=110;x<=690;x+=2){var u=(x-110)/580,v=Math.sin(x*.21)*5+Math.sin(x*.067+1)*7*Math.sin(u*3.14)+Math.sin(x*.53)*2.2+(Math.abs(x-470)<14?-16*Math.cos((x-470)/14*1.57):0);ed+=(x===110?'M':'L')+x+' '+(ry+v).toFixed(1)}
  s+='<g id="vsEEG"><path class="eegb" d="M110 '+ry+'H690"/><path id="vsEEGp" class="eeg" d="'+ed+'"/><text x="110" y="'+(ry-20)+'" style="font-size:'+fs+'px">EEG</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="vsC'+i+'" x="400" y="'+(mob?552:550)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={me:$("#vsMe",svg),gh:$("#vsGhost",svg),sight:$("#vsSight",svg),fov:$("#vsFov",svg),turn:$("#vsTurn",svg),turnH:$("#vsTurnH",svg),tru:$("#vsTrue",svg),ray:$("#vsRay",svg),err:$("#vsErr",svg),errT:$("#vsErrT",svg),route:$("#vsRoute",svg),eeg:$("#vsEEG",svg),eegp:$("#vsEEGp",svg),lib:$("#vsL_lib",svg),house:$("#vsL_house",svg),cap:[0,1,2,3].map(function(i){return $("#vsC"+i,svg)})};
  var RL=E.route.getTotalLength(),EL=E.eegp.getTotalLength();
  var hHouse=vsAng(VS_C,VS_L.house),hLib=vsAng(VS_C,VS_L.lib),hMail=vsAng(VS_C,VS_L.mail);
  function pol(r,a){var t=a*Math.PI/180;return [VS_C[0]+Math.sin(t)*r,VS_C[1]-Math.cos(t)*r]}
  function arc(r,a0,a1){var p=pol(r,a0),q=pol(r,a1),L=Math.abs(a1-a0)>180?1:0,sw=a1>a0?1:0;return "M"+p[0].toFixed(1)+" "+p[1].toFixed(1)+"A"+r+" "+r+" 0 "+L+" "+sw+" "+q[0].toFixed(1)+" "+q[1].toFixed(1)}
  return function(p,b){
    if(!E.me.isConnected)return;
    var s1=seg(p,.03,.16),s2=seg(p,.28,.44),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* the participant: faces the house, turns (step 2) toward the mailbox, then reorients and points (step 3) */
    var head=hHouse+(hMail-hHouse)*s2*(1-s3*.55);
    E.me.setAttribute("transform","translate("+VS_C[0]+" "+VS_C[1]+") rotate("+head.toFixed(1)+") scale(1.4)");
    E.gh.style.opacity=(b*s1*(1-.75*s2)).toFixed(3);E.sight.style.opacity=(b*.9*s1*(1-.75*s2)).toFixed(3);
    E.house.style.opacity=(1-.0*s1).toFixed(3);
    /* field of view rides the head */
    E.fov.setAttribute("transform","translate("+VS_C[0]+" "+VS_C[1]+") rotate("+head.toFixed(1)+")");
    E.fov.style.opacity=(b*.95*s2*(1-.6*s4)).toFixed(3);
    /* the body-turn arc, drawn as the head turns */
    var a1=hHouse+(hMail-hHouse)*s2;E.turn.setAttribute("d",s2>.01?arc(62,hHouse,a1):"");E.turn.style.opacity=(b*(1-s3)).toFixed(3);
    E.turnH.setAttribute("d",s2>.01?arc(72,hHouse,hHouse+(a1-hHouse)*.999):"");E.turnH.style.opacity=(b*.35*(1-s3)).toFixed(3);
    /* step 3: the true bearing to the library, the participant's pointing ray (off by ~14 degrees), the error arc */
    var pt=pol(236,hLib),pr=pol(250*s3+.01,hLib+14);
    E.tru.setAttribute("d","M"+VS_C[0]+" "+VS_C[1]+"L"+pt[0].toFixed(1)+" "+pt[1].toFixed(1));E.tru.style.opacity=(b*s3*(1-.7*s4)).toFixed(3);
    E.ray.setAttribute("d","M"+VS_C[0]+" "+VS_C[1]+"L"+pr[0].toFixed(1)+" "+pr[1].toFixed(1));E.ray.style.opacity=(b*Math.min(1,s3*2)*(1-.6*s4)).toFixed(3);
    var ea=seg(p,.64,.72);E.err.setAttribute("d",ea>.01?arc(150,hLib,hLib+14*ea):"");E.err.style.opacity=(b*(1-.6*s4)).toFixed(3);
    var et=pol(150,hLib-4);E.errT.setAttribute("x",(et[0]-10).toFixed(1));E.errT.setAttribute("y",(et[1]-6).toFixed(1));E.errT.style.opacity=(b*ea*(1-.6*s4)).toFixed(3);
    E.lib.style.opacity=(1).toFixed(3);
    /* step 4: the walking route draws on, the EEG trace sweeps in */
    E.route.style.strokeDasharray=RL.toFixed(1)+" "+RL.toFixed(1);E.route.style.strokeDashoffset=(RL*(1-s4)).toFixed(1);E.route.style.opacity=(b*Math.min(1,s4*3)).toFixed(3);
    E.eeg.style.opacity=(b*Math.min(1,s4*2.5)).toFixed(3);E.eegp.style.strokeDasharray=EL.toFixed(1)+" "+EL.toFixed(1);E.eegp.style.strokeDashoffset=(EL*(1-seg(p,.8,.97))).toFixed(1);
    /* one caption at a time, matched to the step */
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
