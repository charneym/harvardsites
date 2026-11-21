/* The story scene (BL/BY/DB): the Kneevoice exam itself (kneevoice.com/what-is-kneevoice, "How Kneevoice Works"), as ONE continuous
   engraved scene. Left: a seated patient's knee in side view (femur, patella, tibia and fibula inside the leg's contour). Step 1 (Place):
   the two patented sensors settle onto the knee and their cable runs to the console. Step 2 (Flex): the lower leg swings through knee
   flexions while a counter climbs to 8, and the joint's sound and vibration trace writes itself along the bottom strip. Step 3 (Score):
   the score dial on the right draws in and its needle settles (illustrative; the report gives a cartilage score, kneevoice.com).
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,KX=230,KY=150,TL=185;
/* the joint-sound trace: bursts while the knee moves, seeded */
var TRACE=(function(){var s=510,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<=320;i++){var u=i/320,cyc=Math.abs(Math.sin(u*Math.PI*8)),env=.18+.82*Math.pow(cyc,1.6);a.push((R()*2-1)*env*(.55+.45*R()))}return a})();
function kneeScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="kclip"><rect x="-230" y="-134" width="760" height="356"/></clipPath></defs>';
  /* ---- base: frame rules, trace baseline and captions ---- */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M24 372H736"/>';
  g+='<path class="bl sD" d="M24 446H736"/>';
  g+='<text class="t" x="24" y="10">KNEE · SIDE VIEW</text>';
  g+='<text class="t" x="24" y="'+(SCH-6)+'">SOUND · VIBRATION · POSITION</text>';
  g+='</g>';
  /* ---- the leg: femur, patella and thigh contour stay put; the shank group rotates about the knee ---- */
  g+='<g id="scLeg" transform="translate('+KX+' '+KY+')"><g clip-path="url(#kclip)">';
  g+='<g class="thigh">';
  g+='<path class="sk sD" d="M-222 -62C-170 -66 -80 -60 -20 -54C18 -50 40 -34 46 -8"/>';
  g+='<path class="sk sD" d="M-222 58C-160 54 -90 50 -44 44"/>';
  g+='<path class="bn sD" d="M-222 -18L-46 -14C-30 -26 -8 -32 12 -28C34 -22 40 4 30 22C18 36 -16 38 -40 26C-44 22 -46 18 -48 14L-222 18"/>';
  g+='<path class="bn2 sD" d="M-190 -8L-60 -6M-190 8L-62 6"/>';
  g+='<ellipse class="pt sD" cx="40" cy="-20" rx="10" ry="21" transform="rotate(-18 40 -20)"/>';
  g+='</g>';
  g+='<g class="shank" id="shank">';
  g+='<path class="sk sD" d="M50 6C54 40 44 100 40 '+(TL-10)+'C38 '+(TL+4)+' 46 '+(TL+16)+' 66 '+(TL+22)+'"/>';
  g+='<path class="sk sD" d="M-40 40C-58 70 -46 120 -26 '+(TL-6)+'C-22 '+(TL+8)+' -18 '+(TL+18)+' -14 '+(TL+24)+'"/>';
  g+='<path class="bn sD" d="M-30 36L30 36C34 42 26 50 16 52L12 '+(TL-4)+'C16 '+(TL+4)+' 10 '+(TL+10)+' 0 '+(TL+10)+'C-10 '+(TL+10)+' -16 '+(TL+4)+' -12 '+(TL-4)+'L-16 52C-26 50 -34 42 -30 36Z"/>';
  g+='<path class="bn2 sD" d="M-26 60L-22 '+(TL-14)+'"/>';
  g+='<g class="sn" id="sn2" transform="translate(42 72)"><circle class="sb" r="11"/><circle class="si" r="5"/></g>';
  g+='</g>';
  g+='<g class="sn" id="sn1" transform="translate(58 -24)"><circle class="sb" r="13"/><circle class="si" r="6"/></g>';
  g+='<path class="cb" id="cbl" d="M70 -24C140 -30 190 -80 290 -96C360 -108 420 -92 470 -100"/>';
  g+='</g></g>';
  /* ---- the score dial (right): an arc of five grades, ticks, a needle ---- */
  var GX=o.mob?560:568,GY=250,GR=o.mob?118:124;
  g+='<g id="scDial" transform="translate('+GX+' '+GY+')">';
  g+='<path class="arc" d="M'+f(-GR)+' 0A'+GR+' '+GR+' 0 0 1 '+f(GR)+' 0"/>';
  for(i=0;i<5;i++){var a0=Math.PI*(1-(i+.08)/5),a1=Math.PI*(1-(i+.92)/5);
    g+='<path class="seg s'+i+'" d="M'+f(Math.cos(a0)*(GR-14))+' '+f(-Math.sin(a0)*(GR-14))+'A'+(GR-14)+' '+(GR-14)+' 0 0 1 '+f(Math.cos(a1)*(GR-14))+' '+f(-Math.sin(a1)*(GR-14))+'"/>';}
  for(i=0;i<=20;i++){var a=Math.PI*(1-i/20),r1=GR+4,r2=GR+(i%5?10:16);g+='<path class="tk" d="M'+f(Math.cos(a)*r1)+' '+f(-Math.sin(a)*r1)+'L'+f(Math.cos(a)*r2)+' '+f(-Math.sin(a)*r2)+'"/>';}
  g+='<g id="ndl"><path class="nd" d="M0 0L'+f(-(GR-30))+' 0"/><circle class="hub" r="6"/></g>';
  g+='<text class="t" x="0" y="34" text-anchor="middle">CARTILAGE SCORE</text>';
  g+='</g>';
  /* ---- the trace ---- */
  var x0=24,x1=736,pts=TRACE.map(function(v,i){return f(x0+(x1-x0)*i/(TRACE.length-1))+' '+f(446+v*(o.mob?40:36))});
  g+='<path class="tr" id="trc" d="M'+pts.join('L')+'"/>';
  /* ---- step labels ---- */
  g+='<g id="lb1"><text class="a" x="24" y="404">SENSORS PLACED ON THE KNEE</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="404">KNEE FLEXIONS · <tspan id="fcnt">0</tspan> / 8</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="404">SCORE REPORT · SOUND RECORDING</text></g>';
  return g+'</svg>';
}
function scene(){return kneeScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),leg:dl("#scLeg .sD"),
    shank:$("#shank",svg),sn1:$("#sn1",svg),sn2:$("#sn2",svg),cb:dl("#cbl")[0],tr:dl("#trc")[0],
    dial:dl("#scDial .seg"),arc:dl("#scDial .arc"),tk:$$("#scDial .tk",svg),ndl:$("#ndl",svg),dt:$("#scDial text",svg),
    fc:$("#fcnt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastN=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the leg engraves in first; the sensors settle onto the knee and the cable draws out to the console */
    draw(E.leg,b*seg(p,0,.16));
    var s1=seg(p,.12,.24),s2=seg(p,.16,.28);
    E.sn1.setAttribute("transform","translate(58 "+(-24-30*(1-s1)).toFixed(1)+")");op(E.sn1,b*s1);
    E.sn2.setAttribute("transform","translate("+(42+30*(1-s2)).toFixed(1)+" 72)");op(E.sn2,b*s2);
    draw([E.cb],b*seg(p,.22,.32));
    /* step 2: the shank swings forward and back through eight flexions while the trace writes */
    var fx=seg(p,.36,.66),ang=0,n=0;
    if(fx>0&&fx<1){var u=fx*8;n=Math.min(8,Math.floor(u)+1);ang=-62*(.5-.5*Math.cos((u%1)*Math.PI*2))}else if(fx>=1)n=8;
    E.shank.setAttribute("transform","rotate("+ang.toFixed(2)+")");
    if(n!==lastN){lastN=n;if(E.fc)E.fc.textContent=String(n)}
    draw([E.tr],b*fx);
    /* step 3: the dial draws in and the needle settles */
    var dI=seg(p,.7,.84),nI=seg(p,.78,.94);
    /* the dial's arc and ticks engrave in with the frame (so the frame is never half empty); its grades and needle come in step 3 */
    var aI=seg(p,0,.2);draw(E.arc,b*aI);E.tk.forEach(function(t,i){op(t,b*Math.min(1,Math.max(0,aI*1.6-i*.03))*(.45+.55*dI))});
    draw(E.dial,b*dI);op(E.ndl,b*dI);op(E.dt,b*(.5+.5*dI));
    E.ndl.setAttribute("transform","rotate("+(18+110*(1-Math.pow(1-nI,3))).toFixed(2)+")");
    op(E.l1,b*seg(p,.18,.26)*(1-seg(p,.32,.36)));op(E.l2,b*seg(p,.38,.44)*(1-seg(p,.66,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}
