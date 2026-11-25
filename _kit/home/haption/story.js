/* The story scene (DB/BL/BY): Haption's own teleoperation loop (haption.com, TREX page: a Virtuose 6D force-feedback
   device, the TREX teleoperation controller, a third-party robot; "the robot faithfully replicates the movements of
   the manipulator"; "the operator feels the robot's dynamics and the forces it applies ... the weight of grasped
   objects and any potential collisions"), drawn as ONE fine-line side view that fills the frame:
   the Virtuose (base, dome, arm, handle) on the left, the TREX box in the middle, a robot arm and a workpiece right.
   Step 1 (hold): the handle lights.  Step 2 (follow): the handle moves, a signal runs device -> TREX -> robot and the
   robot mirrors the motion.  Step 3 (contact): the robot's tool meets the part, a contact ring and force arrows.
   Step 4 (feel): the force runs back to the device and arrows appear at the handle. Two-link IK for both arms, driven
   by scrubbed progress. No dash draws on non-scaling strokes (DR4; nssfix.js is inlined too). */
var HS=[190,372],HL1=148,HL2=146,RS=[600,414],RL1=150,RL2=138;
var CAB=[[258,462],[362,462],[430,462],[562,462]];
function ik(S,L1,L2,T,up){var dx=T[0]-S[0],dy=T[1]-S[1],d=Math.min(Math.hypot(dx,dy),L1+L2-.5),a=Math.atan2(dy,dx),
  c=Math.acos(Math.max(-1,Math.min(1,(L1*L1+d*d-L2*L2)/(2*L1*d)))),a1=a+(up?-c:c),E=[S[0]+L1*Math.cos(a1),S[1]+L1*Math.sin(a1)];
  var a2=Math.atan2(T[1]-E[1],T[0]-E[0]);return {E:E,T:[E[0]+L2*Math.cos(a2),E[1]+L2*Math.sin(a2)]}}
function lerp2(a,b,k){return [a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k]}
function polyAt(P,t){var L=[],tot=0;for(var i=1;i<P.length;i++){var l=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);L.push(l);tot+=l}
  var s=Math.max(0,Math.min(1,t))*tot;for(var j=0;j<L.length;j++){if(s<=L[j]||j===L.length-1)return lerp2(P[j],P[j+1],Math.min(1,s/L[j]));s-=L[j]}}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'96 176 640 396':'96 176 640 392')+'" aria-hidden="true"><g id="scG">';
  /* ground, the Virtuose base and dome, the TREX box, the robot plinth and the workpiece: static, drawn in */
  ["M70 480H730",
   "M122 470V448C122 437 258 437 258 448V470","M122 470C122 482 258 482 258 470","M122 448C122 459 258 459 258 448",
   "M142 442C140 392 160 372 190 372C220 372 240 392 238 442",
   "M362 476V446H430V476","M372 456H388","M372 464H400",
   "M560 478V446H640V478","M574 446L586 426H614L626 446"].forEach(function(d,i){g+='<path class="'+(i===0?'wo':'wl')+' sD" d="'+d+'"/>'});
g+='<path class="cab" d="M'+CAB.map(function(p){return p.join(" ")}).join("L")+'"/>';
  g+='<path class="occ" d="M440 478V404L456 392H556V466L540 478Z"/>';
  ["M440 478V404H540V478","M440 404L456 392H556L540 404","M556 392V466L540 478"].forEach(function(d){g+='<path class="wl sD" d="'+d+'"/>'});
  g+='<g id="pulse"><circle class="sig" r="3.6"/><circle class="sig" r="3.6"/><circle class="sig" r="3.6"/></g>';
  /* the two arms: an outer soft body and an inner line, joints, the handle and the tool */
  g+='<path class="arm o" id="dA1"/><path class="arm i" id="dA2"/><path class="arm o" id="rA1"/><path class="arm i" id="rA2"/>';
  g+='<circle class="jn" id="dJ0" r="7"/><circle class="jn" id="dJ1" r="6"/><circle class="jn" id="rJ0" r="7.5"/><circle class="jn" id="rJ1" r="6"/>';
  g+='<path class="grip" id="grip"/><path class="tool" id="tool"/>';
  g+='<circle class="ring" id="ring" r="10"/><g id="fC"><path class="fa" d="M0 0V-34"/><path class="fa" d="M-6 -27L0 -36L6 -27"/></g>';
  g+='<g id="fH"><path class="fa" d="M0 0L-26 -24"/><path class="fa" d="M-26 -14L-28 -26L-16 -27"/></g>';
  g+='</g>';
  var fy=mob?522:516;
  g+='<g id="lCh"><text class="t" x="190" y="'+fy+'" text-anchor="middle">VIRTUOSE 6D</text><text class="t" x="396" y="'+fy+'" text-anchor="middle">TREX</text><text class="t" x="600" y="'+fy+'" text-anchor="middle">ROBOT</text></g>';
  var ly=mob?560:556,lx=mob?416:110,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'HAND ON THE HANDLE':'THE OPERATOR’S HAND ON THE HANDLE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'THE ROBOT FOLLOWS':'THE ROBOT REPLICATES THE MOVEMENT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'CONTACT':'THE TOOL MEETS THE PART')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'FORCE IN THE HAND':'THE FORCE COMES BACK TO THE HAND')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cab:$(".cab",svg),pz:$$("#pulse .sig",svg),dA1:$("#dA1",svg),dA2:$("#dA2",svg),rA1:$("#rA1",svg),rA2:$("#rA2",svg),
    dJ0:$("#dJ0",svg),dJ1:$("#dJ1",svg),rJ0:$("#rJ0",svg),rJ1:$("#rJ1",svg),grip:$("#grip",svg),tool:$("#tool",svg),ring:$("#ring",svg),fC:$("#fC",svg),fH:$("#fH",svg),
    lCh:$("#lCh",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  /* handle and tool targets per phase: rest -> moved (step 2) -> contact (step 3, held in step 4) */
  var D0=[300,236],D1=[314,256],D2=[316,280],T0=[484,330],T1=[494,368],T2=[500,397];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function P(p){return p[0].toFixed(1)+" "+p[1].toFixed(1)}
  function arm(o,i,S,K){var d="M"+P(S)+"L"+P(K.E)+"L"+P(K.T);o.setAttribute("d",d);i.setAttribute("d",d)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var mv=sm(seg(p,.28,.44)),ct=sm(seg(p,.52,.64)),bk=sm(seg(p,.76,.9));
    var D=lerp2(lerp2(D0,D1,mv),D2,ct),T=lerp2(lerp2(T0,T1,mv),T2,ct);
    /* in step 4 the handle is pushed back a little by the rendered force */
    D=[D[0]-4*bk,D[1]-5*bk];
    var KD=ik(HS,HL1,HL2,D,true),KR=ik(RS,RL1,RL2,[T[0],T[1]-30],false);
    arm(E.dA1,E.dA2,HS,KD);arm(E.rA1,E.rA2,RS,KR);
    var hp=KD.T,tp=KR.T;
    E.dJ0.setAttribute("cx",HS[0]);E.dJ0.setAttribute("cy",HS[1]);E.dJ1.setAttribute("cx",KD.E[0].toFixed(1));E.dJ1.setAttribute("cy",KD.E[1].toFixed(1));
    E.rJ0.setAttribute("cx",RS[0]);E.rJ0.setAttribute("cy",RS[1]);E.rJ1.setAttribute("cx",KR.E[0].toFixed(1));E.rJ1.setAttribute("cy",KR.E[1].toFixed(1));
    E.grip.setAttribute("d","M"+P(hp)+"L"+P([hp[0]+7,hp[1]+38]));
    E.tool.setAttribute("d","M"+P(tp)+"L"+P([tp[0],tp[1]+18])+"M"+P([tp[0]-8,tp[1]+30])+"L"+P([tp[0]-8,tp[1]+18])+"L"+P([tp[0]+8,tp[1]+18])+"L"+P([tp[0]+8,tp[1]+30]));
    var hl=sm(seg(p,.04,.14));E.grip.classList.toggle("on",hl>.5);
    [E.dA1,E.dA2,E.rA1,E.rA2,E.dJ0,E.dJ1,E.rJ0,E.rJ1,E.grip,E.tool].forEach(function(el){op(el,b)});
    op(E.cab,b);
    /* signal pulses: device -> robot while the robot follows (step 2), robot -> device as the force returns (step 4) */
    var fw=seg(p,.3,.5),rv=seg(p,.74,.94);
    E.pz.forEach(function(c,i){var t,on;
      if(rv>0&&rv<1){t=1-((rv*1.6-i*.22));on=t>=0&&t<=1}else{t=fw*1.6-i*.22;on=fw>0&&fw<1&&t>=0&&t<=1}
      var q=polyAt(CAB,Math.max(0,Math.min(1,t)));c.setAttribute("cx",q[0].toFixed(1));c.setAttribute("cy",q[1].toFixed(1));op(c,b*(on?1:0))});
    /* contact: a ring at the tool tip and the reaction force arrow on the part */
    var cp=[tp[0],tp[1]+30],rg=seg(p,.6,.72);
    E.ring.setAttribute("cx",cp[0].toFixed(1));E.ring.setAttribute("cy",cp[1].toFixed(1));E.ring.setAttribute("r",(6+16*rg).toFixed(1));op(E.ring,b*ct*(rg<1?(1-rg*.85):.15));
    E.fC.setAttribute("transform","translate("+(cp[0]+26).toFixed(1)+" "+(cp[1]-2).toFixed(1)+")");op(E.fC,b*sm(seg(p,.62,.7)));
    E.fH.setAttribute("transform","translate("+(hp[0]+2).toFixed(1)+" "+(hp[1]-8).toFixed(1)+")");op(E.fH,b*sm(seg(p,.86,.93)));
    op(E.lCh,b);
    op(E.l1,b*(1-seg(p,.2,.25)));op(E.l2,b*seg(p,.3,.36)*(1-seg(p,.45,.5)));op(E.l3,b*seg(p,.55,.61)*(1-seg(p,.7,.75)));op(E.l4,b*seg(p,.86,.92));
  };
}
