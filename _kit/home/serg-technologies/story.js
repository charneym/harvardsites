/* the story scene (BL/BY/DB): ONE engraved drawing of a DBS programming session as SERG describes StimSense (sergtechnologies.com home;
   HRA summary SERG ONE DBS): the stimulator and its lead with four contacts and a stimulation field; the IMU-MMG wearable streaming
   motion (IMU) and muscle activity (MMG) wirelessly; StimSense scoring tremor, bradykinesia and rigidity; algorithmic search closing the
   loop back to the next setting on the lead. Proportions are schematic. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="sgHt" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V7" stroke="rgba(243,243,250,.18)" stroke-width="1"/></pattern></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<g class="tb"><path class="tbl" d="M516 14h268v52h-268Z M516 40h268"/><text x="528" y="32" class="t">SECTION · DBS PROGRAMMING</text><text x="528" y="58" class="t s">STIMSENSE · SERG TECHNOLOGIES</text></g>';
  g+='</g>';
  /* 1 the stimulator: pulse generator, extension, the lead with four ring contacts, the field around the active contact */
  var LX=230;
  var lead='M'+(LX-6)+' 112V398Q'+(LX-6)+' 410 '+LX+' 410Q'+(LX+6)+' 410 '+(LX+6)+' 398V112';
  var ct='';[312,336,360,384].forEach(function(y){ct+='<rect class="ctc" x="'+(LX-6)+'" y="'+y+'" width="12" height="11"/>'});
  g+='<g id="sc1"><path class="wl dr" d="M100 452V160Q100 104 156 104H'+(LX-14)+'Q'+LX+' 104 '+LX+' 118"/>'+
     '<path class="dev" d="M58 452h84q12 0 12 12v52q0 12-12 12h-84q-12 0-12-12v-52q0-12 12-12Z"/><path class="wl dr" d="M58 452h84q12 0 12 12v52q0 12-12 12h-84q-12 0-12-12v-52q0-12 12-12Z"/>'+
     '<path class="wi dr" d="M70 470h60M70 482h60M70 494h40"/>'+
     '<path class="hatch" d="'+lead+'Z"/><path class="wl dr" d="'+lead+'"/>'+ct+
     '<ellipse class="fld dr" cx="'+LX+'" cy="341" rx="34" ry="24"/><ellipse class="fld f2 dr" cx="'+LX+'" cy="341" rx="56" ry="40"/>'+
     '<path class="ld2 dr" d="M'+(LX+8)+' 200H292"/><text x="300" y="204" class="t c">DBS LEAD</text>'+
     (mob?'<path class="ld2 dr" d="M'+(LX+50)+' 362L292 426"/><text x="300" y="440" class="t c">STIMULATION</text><text x="300" y="460" class="t c">FIELD</text>':'<path class="ld2 dr" d="M'+(LX+58)+' 360L300 380"/><text x="300" y="392" class="t c">STIMULATION</text><text x="300" y="410" class="t c">FIELD</text>')+
     '<text x="46" y="550" class="t c">STIMULATOR</text>'+
     '<text x="40" y="60" class="a">THE STIMULATOR</text></g>';
  /* 2 the sensors: the IMU-MMG wearable on its strap; motion and muscle traces streamed wirelessly */
  var imu='M400 250';for(var i=1;i<=60;i++){var x=400+i*3;imu+='L'+x+' '+(250+Math.sin(i*.78)*16).toFixed(1)}
  var mmg='M400 330';for(var j=1;j<=90;j++){var x2=400+j*2,env=Math.exp(-Math.pow((j-30)/9,2))+.8*Math.exp(-Math.pow((j-70)/8,2)),r=Math.sin(j*12.9898)*43758.5453;r=r-Math.floor(r)-.5;mmg+='L'+x2+' '+(330+r*env*44).toFixed(1)}
  g+='<g id="sc2"><path class="wi dr" d="M386 136H424M516 136H560M386 166H424M516 166H560"/>'+
     '<path class="hatch" d="M436 124h68q12 0 12 12v30q0 12-12 12h-68q-12 0-12-12v-30q0-12 12-12Z"/><path class="wl dr" d="M436 124h68q12 0 12 12v30q0 12-12 12h-68q-12 0-12-12v-30q0-12 12-12Z"/>'+
     '<circle class="ctc" cx="500" cy="138" r="3"/>'+
     '<path class="ld dr" d="M470 186V218"/><path class="wi dr" d="M456 206q14-10 28 0M462 214q8-6 16 0"/>'+
     '<path class="tr dr" d="'+imu+'"/><path class="tr dr" d="'+mmg+'"/>'+
     '<text x="'+(mob?400:424)+'" y="104" class="t c">'+(mob?'IMU-MMG ×2':'IMU-MMG WEARABLE ×2')+'</text>'+
     '<text x="400" y="290" class="t c">IMU · MOTION</text><text x="400" y="372" class="t c">'+(mob?'MMG · MUSCLE':'MMG · MUSCLE ACTIVITY')+'</text>'+
     '<text x="40" y="60" class="a">THE SENSORS</text></g>';
  /* 3 the score: three arcs, one per cardinal symptom, scored on one scale */
  var CX=690,CY=330,LS=mob?23:18;
  function arc(r,a0,a1){var p0=[CX+r*Math.cos(a0),CY+r*Math.sin(a0)],p1=[CX+r*Math.cos(a1),CY+r*Math.sin(a1)];return 'M'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+'A'+r+' '+r+' 0 '+((a1-a0)>Math.PI?1:0)+' 1 '+p1[0].toFixed(1)+' '+p1[1].toFixed(1)}
  var tk='';for(var k=0;k<=4;k++){var a=Math.PI+k*Math.PI/4;tk+='M'+(CX+86*Math.cos(a)).toFixed(1)+' '+(CY+86*Math.sin(a)).toFixed(1)+'L'+(CX+96*Math.cos(a)).toFixed(1)+' '+(CY+96*Math.sin(a)).toFixed(1)}
  g+='<g id="sc3"><path class="ld dr" d="M584 250Q604 250 612 290M584 330Q600 330 612 312"/>'+
     '<path class="arc dr" d="'+arc(78,Math.PI,2*Math.PI)+'"/><path class="arc dr" d="'+arc(62,Math.PI,2*Math.PI)+'"/><path class="arc dr" d="'+arc(46,Math.PI,2*Math.PI)+'"/>'+
     '<path class="wi dr" d="'+tk+'"/>'+
     '<path class="arcv dr" d="'+arc(78,Math.PI,Math.PI*1.72)+'"/><path class="arcv v2 dr" d="'+arc(62,Math.PI,Math.PI*1.48)+'"/><path class="arcv v3 dr" d="'+arc(46,Math.PI,Math.PI*1.31)+'"/>'+
     '<path class="key dr" d="M'+(CX-96)+' '+(352)+'h12"/><path class="key k2 dr" d="M'+(CX-96)+' '+(352+LS)+'h12"/><path class="key k3 dr" d="M'+(CX-96)+' '+(352+2*LS)+'h12"/>'+
     '<text x="'+(CX-78)+'" y="356" class="t c">TREMOR</text><text x="'+(CX-78)+'" y="'+(356+LS)+'" class="t c">BRADYKINESIA</text><text x="'+(CX-78)+'" y="'+(356+2*LS)+'" class="t c">RIGIDITY</text>'+
     '<text x="'+(CX-96)+'" y="'+(mob?428:420)+'" class="t s">'+(mob?'r = 0.74':'r = 0.74 WITH SPECIALIST')+'</text>'+
     '<text x="40" y="60" class="a">THE SCORE</text></g>';
  /* 4 the programme: algorithmic search closes the loop to the next setting on the lead */
  g+='<g id="sc4"><path class="loop dr" d="M'+CX+' 436V470Q'+CX+' 488 '+(CX-18)+' 488H'+(LX+40)+'Q'+(LX+22)+' 488 '+(LX+22)+' 470V352"/>'+
     '<path class="looph dr" d="M'+(LX+15)+' 362L'+(LX+22)+' 350L'+(LX+29)+' 362"/>'+
     '<rect class="glow" x="'+(LX-6)+'" y="336" width="12" height="11"/>'+
     '<text x="300" y="512" class="t c">'+(mob?'NEXT SETTING':'ALGORITHMIC SEARCH · NEXT SETTING')+'</text><text x="300" y="532" class="t a2">'+(mob?'UNDER 90 MINUTES':'FULL AUTOMATIC PROGRAMMING UNDER 90 MIN')+'</text>'+
     '<text x="40" y="60" class="a">THE PROGRAMME</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),
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
    /* the parts accumulate into one loop; earlier labels quieten as the next part arrives */
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
