/* the story scene (BL/BY/DB): ONE engraved section through a single-use sensor, kept on screen throughout; each step adds
   one part as the sources describe it (NIH RePORTER R44HD107897, R44HD112243, SB1HD116629; NSF 1914240, 2111884):
   a single drop of whole blood on a consumable single-use sensor; a multilayer sensor whose modified materials eliminate
   blood components that could confound it, measuring directly in whole blood; a sensor reader (design-locked, safety-tested);
   a home result that prompts the patient to contact their medical team. Proportions and layer order are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?566:592,LG=mob?27:18,VH=440;
  /* a label of one or more lines, each line its own <text> so it fades with its step */
  function lab(x,y,lines,cls){return lines.map(function(t,i){return '<text x="'+x+'" y="'+(y+i*LG)+'" class="t c'+(cls?' '+cls:'')+'">'+t+'</text>'}).join("")}
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 '+VH+'" aria-hidden="true">';
  var X0=70,X1=548,S0=274,S1=304,E=262,F=252,WL=384,WR=530,CX=457,DT=122;
  g+='<defs><pattern id="sqHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(247,243,236,.16)" stroke-width="1"/></pattern></defs>';
  /* the sensor in section: substrate, printed electrodes, sensing layer in the well, cover film with an opening */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="'+(VH-1)+'"/>';
  g+='<path class="hatch" d="M'+X0+' '+S0+'H'+X1+'V'+S1+'H'+X0+'Z"/><path class="wl sD" d="M'+X0+' '+S0+'H'+X1+'V'+S1+'H'+X0+'Z"/>';
  g+='<path class="wi sD" d="M'+X0+' '+E+'H'+WL+'M'+WR+' '+E+'H'+X1+'M'+X0+' '+F+'H'+(WL-6)+'M'+(WR+6)+' '+F+'H'+X1+'M'+X0+' '+F+'V'+S0+'M'+X1+' '+F+'V'+S0+'"/>';
  g+='<path class="trace" d="M'+(X0+8)+' '+(E+5)+'H'+(WL+20)+'M'+(WR-20)+' '+(E+5)+'H'+(X1-30)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 378h228v48h-228Z M548 402h228"/><text x="558" y="395" class="t">SECTION · SINGLE-USE SENSOR</text><text x="558" y="419" class="t s">SEQUITUR HEALTH</text></g>';
  g+='</g>';
  /* 1 the drop: a single drop of whole blood resting in the sensor opening */
  var dp='M'+(WL-4)+' '+F+'C'+(WL-2)+' '+DT+' '+(WR+2)+' '+DT+' '+(WR+4)+' '+F;
  g+='<g id="sc1"><path class="blood" d="'+dp+'Z"/><path class="wl dr" d="'+dp+'"/>'+
     '<path class="hl dr" d="M'+(CX-46)+' 176C'+(CX-30)+' 162 '+(CX-6)+' 158 '+(CX+10)+' 159"/>'+
     '<path class="ld2 dr" d="M'+(WR-8)+' 190H'+(LX-8)+'"/>'+lab(LX,186,["ONE DROP OF","WHOLE BLOOD"])+
     '<path class="ld2 dr" d="M'+X1+' 290H'+(LX-8)+'"/>'+lab(LX,294,mob?["SINGLE-USE","SENSOR"]:["SINGLE-USE SENSOR"])+
     '<text x="40" y="50" class="a">THE DROP</text></g>';
  /* 2 the sensor: blood cells held back at the sensing layer, the metabolite passing through to the electrodes */
  var cells='';[[414,226],[440,202],[474,212],[452,230],[500,228],[468,180],[420,236],[494,200],[516,240],[438,178]].forEach(function(c){cells+='<ellipse class="cell" cx="'+c[0]+'" cy="'+c[1]+'" rx="11" ry="6"/>'});
  var dots='';[[408,256],[432,258],[460,255],[486,258],[512,256],[456,196],[488,218],[430,216],[506,186]].forEach(function(c){dots+='<circle class="met" cx="'+c[0]+'" cy="'+c[1]+'" r="3"/>'});
  g+='<g id="sc2"><path class="sens" d="M'+WL+' '+(F+1)+'H'+WR+'V'+E+'H'+WL+'Z"/><path class="wl dr" d="M'+WL+' '+(F+1)+'H'+WR+'"/>'+cells+dots+
     '<path class="ld2 dr" d="M'+(WR-12)+' 230L'+(X1+18)+' 118H'+(LX-8)+'"/>'+lab(LX,114,mob?["INTERFERENTS","KEPT OUT"]:["BLOOD COMPONENTS","KEPT OUT"],"c2")+
     '<path class="ld2 dr" d="M'+(WR-4)+' 258L'+(X1+18)+' '+(mob?360:344)+'H'+(LX-8)+'"/>'+lab(LX,mob?356:340,mob?["SENSING LAYER","+ ELECTRODES"]:["SENSING LAYER AND","ELECTRODES"],"c2")+
     '<text x="40" y="50" class="a">THE SENSOR</text></g>';
  /* 3 the reader: the sensor's contact end slides into a compact reader */
  var RX0=34,RX1=214,RY0=122,RY1=368;
  var rr='M'+(RX0+14)+' '+RY0+'H'+(RX1-14)+'Q'+RX1+' '+RY0+' '+RX1+' '+(RY0+14)+'V'+(RY1-14)+'Q'+RX1+' '+RY1+' '+(RX1-14)+' '+RY1+'H'+(RX0+14)+'Q'+RX0+' '+RY1+' '+RX0+' '+(RY1-14)+'V'+(RY0+14)+'Q'+RX0+' '+RY0+' '+(RX0+14)+' '+RY0+'Z';
  g+='<g id="sc3"><path class="rdr" d="'+rr+'"/><path class="wl dr" d="'+rr+'"/>'+
     '<path class="wi dr" d="M'+RX1+' '+(F-6)+'H'+(RX1-28)+'V'+(S1+6)+'H'+RX1+'M58 148H190V208H58Z"/>'+
     '<path class="ld2 dr" d="M124 '+RY1+'V388"/>'+lab(mob?40:60,410,["SENSOR READER"],"c3")+
     '<text x="40" y="50" class="a">THE READER</text></g>';
  /* 4 the result: a level on the display against a threshold, and the call to the medical team */
  g+='<g id="sc4"><path class="lvl dr" d="M72 196H158"/><path class="thr dr" d="M148 180V206"/><text x="72" y="174" class="t c c4">RESULT</text>'+
     '<path class="ld2 dr" d="M124 '+RY0+'V100"/>'+lab(mob?250:236,mob?84:80,mob?["IF ELEVATED,","CALL THE","MEDICAL TEAM"]:["IF ELEVATED, CALL","THE MEDICAL TEAM"],"c4")+'<path class="ld2 dr" d="M124 100H'+((mob?250:236)-8)+'"/>'+
     '<text x="40" y="50" class="a">THE RESULT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
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
