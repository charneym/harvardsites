/* the story scene (BL/BY/DB): ONE engraved front view of a child's glasses, kept on screen throughout; each step adds one
   labelled part of AmblyoGo as the NIH abstract describes it (1R44EY039171): the occlusion patch with its small embedded
   magnet; the clip-on sensor on the glasses with dual magnetometers that detect it; Bluetooth to a base station; the cloud
   platform that gives parents and clinicians real-time monitoring and feedback. Placement of the parts is schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?600:648;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  /* the glasses: two rounded lenses, a keyhole bridge, hinges and the temples running back */
  var L=[214,250],R=[426,250],rx=88,ry=72;
  function lens(c,o){var x=c[0],y=c[1],a=rx-o,b=ry-o;return 'M'+(x-a)+' '+(y-6)+'C'+(x-a)+' '+(y-b-4)+' '+(x-a*.55)+' '+(y-b)+' '+x+' '+(y-b)+'C'+(x+a*.62)+' '+(y-b)+' '+(x+a)+' '+(y-b+6)+' '+(x+a)+' '+(y-4)+'C'+(x+a)+' '+(y+b*.72)+' '+(x+a*.5)+' '+(y+b)+' '+x+' '+(y+b)+'C'+(x-a*.55)+' '+(y+b)+' '+(x-a)+' '+(y+b*.66)+' '+(x-a)+' '+(y-6)+'Z'}
  function eye(c){var x=c[0],y=c[1]+6;return 'M'+(x-42)+' '+y+'C'+(x-22)+' '+(y-22)+' '+(x+22)+' '+(y-22)+' '+(x+42)+' '+y+'C'+(x+22)+' '+(y+18)+' '+(x-22)+' '+(y+18)+' '+(x-42)+' '+y+'Z'}
  function iris(c){return 'M'+(c[0]-13)+' '+(c[1]+6)+'a13 13 0 1 0 26 0a13 13 0 1 0 -26 0'}
  function brow(c){return 'M'+(c[0]-50)+' '+(c[1]-38)+'C'+(c[0]-20)+' '+(c[1]-52)+' '+(c[0]+22)+' '+(c[1]-52)+' '+(c[0]+50)+' '+(c[1]-40)}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="wi sD" d="'+eye(L)+eye(R)+'"/><path class="wi sD" d="'+brow(L)+brow(R)+'"/><path class="iris" d="'+iris(L)+iris(R)+'"/>';
  g+='<path class="fr sD" d="'+lens(L,0)+lens(R,0)+'"/><path class="wi sD" d="'+lens(L,7)+lens(R,7)+'"/>';
  g+='<path class="fr sD" d="M302 236C310 218 330 218 338 236M302 246C312 232 328 232 338 246"/>';
  g+='<path class="fr sD" d="M126 236H108L52 226M514 236H532L588 226"/>';
  g+='<path class="glint" d="M168 206C176 196 190 190 204 188"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">FRONT VIEW · CHILD’S GLASSES</text><text x="558" y="538" class="t s">AMBLYOGO · EDGE EYE LABS</text></g>';
  g+='</g>';
  /* 1 the patch: an occlusion patch over the stronger eye, with a small magnet embedded in it */
  var PX=R[0],PY=R[1]+4;
  function oval(o){return 'M'+(PX-70+o)+' '+PY+'C'+(PX-70+o)+' '+(PY-58+o)+' '+(PX-34)+' '+(PY-64+o)+' '+PX+' '+(PY-64+o)+'C'+(PX+40)+' '+(PY-64+o)+' '+(PX+72-o)+' '+(PY-54+o)+' '+(PX+72-o)+' '+(PY-2)+'C'+(PX+72-o)+' '+(PY+48-o)+' '+(PX+38)+' '+(PY+60-o)+' '+PX+' '+(PY+60-o)+'C'+(PX-38)+' '+(PY+60-o)+' '+(PX-70+o)+' '+(PY+46-o)+' '+(PX-70+o)+' '+PY+'Z'}
  g+='<g id="sc1"><path class="patch" d="'+oval(0)+'"/><path class="pst dr" d="'+oval(9)+'"/>'+
     '<circle class="mag" cx="'+(PX+30)+'" cy="'+(PY-26)+'" r="9"/><path class="magp" d="M'+(PX+30)+' '+(PY-35)+'V'+(PY-17)+'"/>'+
     '<path class="ld2 dr" d="M'+(PX+42)+' '+(PY-26)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(PY-22)+'" class="t c">MAGNET</text>'+
     '<path class="ld2 dr" d="M'+(PX+40)+' '+(PY+40)+'L'+(PX+80)+' 340H'+(LX-8)+'"/><text x="'+LX+'" y="344" class="t c">OCCLUSION PATCH</text>'+
     '<text x="40" y="60" class="a">THE PATCH</text></g>';
  /* 2 the sensor: a clip-on housing over the top of the rim, two magnetometers inside, the field it reads from the magnet */
  var SX=R[0]+30,SY=R[1]-86;
  g+='<g id="sc2"><path class="sens" d="M'+(SX-36)+' '+(SY-14)+'H'+(SX+36)+'V'+(SY+10)+'H'+(SX-36)+'Z"/>'+
     '<path class="clip dr" d="M'+(SX-24)+' '+(SY+10)+'V'+(SY+22)+'M'+(SX+24)+' '+(SY+10)+'V'+(SY+22)+'"/>'+
     '<rect class="chip" x="'+(SX-26)+'" y="'+(SY-7)+'" width="14" height="10"/><rect class="chip" x="'+(SX+12)+'" y="'+(SY-7)+'" width="14" height="10"/>'+
     '<path class="fld dr" d="M'+(SX-19)+' '+(SY+14)+'C'+(SX-30)+' '+(SY+40)+' '+(SX-14)+' '+(SY+56)+' '+(SX-2)+' '+(SY+62)+'M'+(SX+19)+' '+(SY+14)+'C'+(SX+28)+' '+(SY+34)+' '+(SX+20)+' '+(SY+50)+' '+(SX+6)+' '+(SY+60)+'"/>'+
     '<path class="ld2 dr" d="M'+(SX+42)+' '+SY+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(SY-4)+'" class="t c">CLIP-ON SENSOR</text><text x="'+LX+'" y="'+(SY+16)+'" class="t c c2">DUAL MAGNETOMETERS</text>'+
     '<text x="40" y="60" class="a">THE SENSOR</text></g>';
  /* 3 the base station: Bluetooth from the sensor to a small station */
  var BX=214,BY=440;
  g+='<g id="sc3"><path class="stn" d="M'+(BX-64)+' '+(BY+36)+'L'+(BX-52)+' '+(BY-10)+'H'+(BX+52)+'L'+(BX+64)+' '+(BY+36)+'Z"/><path class="wi" d="M'+(BX-72)+' '+(BY+36)+'H'+(BX+72)+'"/><circle class="led" cx="'+BX+'" cy="'+(BY+12)+'" r="4"/>'+
     '<path class="bt dr" d="M'+(SX-38)+' '+(SY-6)+'C'+(SX-150)+' '+(SY-60)+' 30 120 64 300C80 380 110 420 '+(BX-56)+' '+(BY+6)+'"/>'+
     '<path class="wave dr" d="M'+(BX-10)+' '+(BY-22)+'a14 14 0 0 1 20 0M'+(BX-18)+' '+(BY-32)+'a26 26 0 0 1 36 0"/>'+
     '<text x="'+BX+'" y="'+(BY+62)+'" class="t c" text-anchor="middle">BASE STATION</text>'+
     '<text x="92" y="352" class="t c c3">BLUETOOTH</text>'+
     '<text x="40" y="60" class="a">THE BASE STATION</text></g>';
  /* 4 the record: station to the cloud platform, then on to parents and clinicians */
  var CX=528,CY=440;
  g+='<g id="sc4"><path class="cloud" d="M'+(CX-56)+' '+(CY+22)+'C'+(CX-76)+' '+(CY+22)+' '+(CX-78)+' '+(CY-6)+' '+(CX-56)+' '+(CY-8)+'C'+(CX-54)+' '+(CY-34)+' '+(CX-18)+' '+(CY-40)+' '+(CX-6)+' '+(CY-18)+'C'+(CX+10)+' '+(CY-38)+' '+(CX+48)+' '+(CY-30)+' '+(CX+46)+' '+(CY-4)+'C'+(CX+70)+' '+(CY-4)+' '+(CX+70)+' '+(CY+22)+' '+(CX+48)+' '+(CY+22)+'Z"/>'+
     '<text x="'+CX+'" y="'+(CY-50)+'" class="t c c4" text-anchor="middle">SECURE CLOUD</text>'+
     '<path class="up dr" d="M'+(BX+70)+' '+(BY+6)+'H'+(CX-80)+'"/>'+
     '<path class="up dr" d="M'+(CX+68)+' '+(CY+2)+'C'+(CX+92)+' '+(CY+2)+' '+(CX+92)+' '+(CY-26)+' '+(CX+114)+' '+(CY-26)+'M'+(CX+68)+' '+(CY+12)+'C'+(CX+92)+' '+(CY+12)+' '+(CX+92)+' '+(CY+38)+' '+(CX+114)+' '+(CY+38)+'"/>'+
     '<text x="'+(CX+122)+'" y="'+(CY-22)+'" class="t c c4">PARENTS</text>'+
     '<text x="'+(CX+122)+'" y="'+(CY+42)+'" class="t c c4">CLINICIANS</text>'+
     '<text x="40" y="60" class="a">THE RECORD</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .iris, #scBase .glint",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one pair of glasses; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
