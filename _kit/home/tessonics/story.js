/* the story scene (BL/BY/DB): ONE engraved cross-section through a resistance spot weld, kept on screen throughout; each step adds
   one part of the inspection as tessonics.com describes RSWA / F2 / F1-R: two or three sheets 0.6-2.4 mm joined by a fused nugget;
   a multi-channel ultrasonic matrix transducer set on the weld; data collected from the surface and from inside the nugget
   (echoes from the far side where the sheets are fused, from the gap where they are not); the reconstructed C-scan image and the
   nugget-diameter estimate compared with the minimum. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?586:604;
  var X0=40,X1=560,C=300,T=310,I=360,B=410,R=50;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"28 28 772 524":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><pattern id="tsHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(238,241,243,.17)" stroke-width="1"/></pattern></defs>';
  var top='M'+X0+' '+T+'H'+(C-92)+'C'+(C-66)+' '+T+' '+(C-62)+' '+(T+5)+' '+(C-48)+' '+(T+5)+'H'+(C+48)+'C'+(C+62)+' '+(T+5)+' '+(C+66)+' '+T+' '+(C+92)+' '+T+'H'+X1;
  var bot='M'+X1+' '+B+'H'+(C+92)+'C'+(C+66)+' '+B+' '+(C+62)+' '+(B-5)+' '+(C+48)+' '+(B-5)+'H'+(C-48)+'C'+(C-62)+' '+(B-5)+' '+(C-66)+' '+B+' '+(C-92)+' '+B+'H'+X0;
  var body=top+'V'+B+bot.replace(/^M[^H]*/,'')+'Z';
  body=top+'L'+X1+' '+B+bot.slice(bot.indexOf('H'))+'Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="'+body+'"/><path class="wl sD" d="'+top+'"/><path class="wl sD" d="'+bot+'"/>';
  g+='<path class="wl sD" d="M'+X0+' '+T+'V'+B+'M'+X1+' '+T+'V'+B+'"/>';
  g+='<path class="wi sD" d="M'+X0+' '+I+'H'+(C-R-2)+'M'+(C+R+2)+' '+I+'H'+X1+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · SPOT WELD</text><text x="558" y="538" class="t s">RSWA · TESSONICS</text></g>';
  g+='</g>';
  /* 1 the weld: the fused nugget between the sheets */
  var nug='M'+(C-R)+' '+I+'C'+(C-R)+' '+(I-36)+' '+(C+R)+' '+(I-36)+' '+(C+R)+' '+I+'C'+(C+R)+' '+(I+36)+' '+(C-R)+' '+(I+36)+' '+(C-R)+' '+I+'Z';
  g+='<g id="sc1"><path class="nug" d="'+nug+'"/><path class="nugl dr" d="'+nug+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 334H'+(LX-8)+'"/><text x="'+LX+'" y="338" class="t c">STEEL SHEETS</text><text x="'+LX+'" y="358" class="t c">0.6 TO 2.4 MM</text>'+
     '<path class="ld2 dr" d="M'+(C+R-6)+' '+(I+4)+'L'+(X1+20)+' 404H'+(LX-8)+'"/><text x="'+LX+'" y="408" class="t c">WELD NUGGET</text>'+
     '<text x="40" y="60" class="a">THE WELD</text></g>';
  /* 2 the probe: a multi-channel matrix transducer set on the weld */
  var els='';for(var k=0;k<10;k++){els+='<rect class="pad" x="'+(C-57+k*12)+'" y="'+(T-9)+'" width="8" height="5"/>'}
  g+='<g id="sc2"><path class="wi dr" d="M'+C+' 34V112"/>'+
     '<path class="chp dr" d="M'+(C-58)+' 112H'+(C+58)+'V206H'+(C-58)+'Z"/>'+
     '<path class="chp dr" d="M'+(C-50)+' 206H'+(C+50)+'L'+(C+62)+' '+(T-4)+'H'+(C-62)+'Z"/>'+
     '<path class="wi dr" d="M'+(C-44)+' 130H'+(C+44)+'M'+(C-44)+' 146H'+(C+44)+'"/>'+els+
     '<path class="ld2 dr" d="M'+(C+60)+' 188H'+(LX-8)+'"/><text x="'+LX+'" y="192" class="t c">MATRIX TRANSDUCER</text>'+
     '<path class="ld2 dr" d="M'+(C+64)+' '+(T-8)+'L'+(X1+20)+' 226H'+(LX-8)+'"/><text x="'+LX+'" y="230" class="t c c2">MANY ELEMENTS</text>'+
     '<text x="40" y="60" class="a">THE PROBE</text></g>';
  /* 3 the echoes: through the nugget to the far side; back from the gap beside it */
  var rays='',heads='';
  for(var k=0;k<10;k++){var x=C-53+k*12,thru=Math.abs(x-C)<R-6,yE=thru?B-3:I-2;
    rays+='M'+x+' '+(T-3)+'V'+yE;
    heads+='M'+(x-3.5)+' '+(yE-8)+'L'+x+' '+(yE-12)+'L'+(x+3.5)+' '+(yE-8);}
  g+='<g id="sc3"><path class="ray dr" d="'+rays+'"/><path class="rayh dr" d="'+heads+'"/>'+
     '<path class="ld2 dr" d="M'+(C+58)+' '+(I-6)+'L'+(X1+20)+' 270H'+(LX-8)+'"/><text x="'+LX+'" y="274" class="t c c3">ECHO FROM GAP</text>'+
     '<path class="ld2 dr" d="M'+(C+8)+' '+(B+4)+'L'+(X1+20)+' 466H'+(LX-8)+'"/><text x="'+LX+'" y="470" class="t c c3">FAR-SIDE ECHO</text>'+
     '<text x="40" y="60" class="a">THE ECHOES</text></g>';
  /* 4 the image: the reconstructed C-scan with the nugget diameter */
  var GX=420,GY=40,S=16,cells='';
  for(var i=0;i<8;i++)for(var j=0;j<8;j++){var cx=GX+i*S+S/2,cy=GY+j*S+S/2,d=Math.hypot(cx-(GX+64),cy-(GY+64));
    cells+='<rect class="'+(d<41?"cs1":d<53?"cs2":"cs0")+'" x="'+(GX+i*S+1)+'" y="'+(GY+j*S+1)+'" width="'+(S-2)+'" height="'+(S-2)+'"/>'}
  g+='<g id="sc4">'+cells+'<path class="tbl dr" d="M'+GX+' '+GY+'h128v128h-128Z"/>'+
     '<circle class="cur" cx="'+(GX+64)+'" cy="'+(GY+64)+'" r="46"/>'+
     '<path class="ld dr" d="M'+(C+58)+' 128H'+(GX-6)+'"/>'+
     '<path class="ld2 dr" d="M'+(GX+130)+' 64H'+(LX-8)+'"/><text x="'+LX+'" y="68" class="t c c4">C-SCAN IMAGE</text>'+
     '<path class="ld2 dr" d="M'+(GX+110)+' 112H'+(LX-8)+'"/><text x="'+LX+'" y="116" class="t c c4">NUGGET DIAMETER</text>'+
     '<text x="40" y="60" class="a">THE IMAGE</text></g>';
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
    /* the parts accumulate on the one weld; earlier labels quieten as the next part arrives */
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
