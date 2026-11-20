/* the story scene (BL/BY/DB): ONE engraved section through a row of a standard well plate, kept on screen throughout; each
   step adds one part of SPECS as the sources describe it (NIH RePORTER R44GM161182 abstract; Cornell Chronicle 2025-01-09):
   the wells with microlitre volumes of reactant solution; a SPECS chip about 2 mm square, 25 silicon photodiodes, with
   on-chip electrodes, sitting in the well; visible light that makes the photodiodes generate current, wirelessly; the
   current passing through the solution to drive the electrochemical reaction. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?586:604;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var W=[110,290,470],hw=66,TOP=200,BOT=432,LIQ=262,X0=24,X1=556,PB=476;
  g+='<defs><pattern id="owHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(244,242,239,.16)" stroke-width="1"/></pattern></defs>';
  /* the plate body, cut through three wells */
  var body='M'+X0+' '+TOP;W.forEach(function(c){body+='H'+(c-hw)+'V'+(BOT-14)+'Q'+(c-hw)+' '+BOT+' '+(c-hw+14)+' '+BOT+'H'+(c+hw-14)+'Q'+(c+hw)+' '+BOT+' '+(c+hw)+' '+(BOT-14)+'V'+TOP});
  body+='H'+X1+'V'+PB+'H'+X0+'Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="'+body+'"/><path class="wl sD" d="'+body+'"/>';
  g+='<path class="wi sD" d="M'+X0+' '+(TOP+8)+'H'+(W[0]-hw-8)+'M'+(X1)+' '+(TOP+8)+'H'+(W[2]+hw+8)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · WELL PLATE</text><text x="558" y="538" class="t s">SPECS · OWIC TECHNOLOGIES</text></g>';
  g+='</g>';
  /* 1 the wells: reactant solution with a meniscus */
  function liq(c){return 'M'+(c-hw+1)+' '+(LIQ-6)+'Q'+c+' '+(LIQ+6)+' '+(c+hw-1)+' '+(LIQ-6)+'V'+(BOT-14)+'Q'+(c+hw-1)+' '+(BOT-1)+' '+(c+hw-15)+' '+(BOT-1)+'H'+(c-hw+15)+'Q'+(c-hw+1)+' '+(BOT-1)+' '+(c-hw+1)+' '+(BOT-14)+'Z'}
  var C=W[2];
  g+='<g id="sc1">'+W.map(function(c){return '<path class="liq" d="'+liq(c)+'"/><path class="men dr" d="M'+(c-hw+1)+' '+(LIQ-6)+'Q'+c+' '+(LIQ+6)+' '+(c+hw-1)+' '+(LIQ-6)+'"/>'}).join("")+
     '<path class="ld2 dr" d="M'+(X1+2)+' '+TOP+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(TOP+4)+'" class="t c">WELL PLATE</text>'+
     '<path class="ld2 dr" d="M'+(C+30)+' 300L'+(X1+20)+' 280H'+(LX-8)+'"/><text x="'+LX+'" y="284" class="t c">REACTANT SOLUTION</text>'+
     '<text x="40" y="60" class="a">THE WELL</text></g>';
  /* 2 the chip: a 2 mm square of photodiodes on the floor of every well, electrode pads at its ends */
  function chip(c){var s='<path class="chp" d="M'+(c-40)+' '+(BOT-15)+'h80v14h-80Z"/>';
    for(var i=1;i<5;i++)s+='<path class="pd" d="M'+(c-30+i*12)+' '+(BOT-15)+'v14"/>';
    s+='<path class="pdt" d="M'+(c-30)+' '+(BOT-15)+'h60"/><rect class="pad" x="'+(c-40)+'" y="'+(BOT-19)+'" width="9" height="4"/><rect class="pad" x="'+(c+31)+'" y="'+(BOT-19)+'" width="9" height="4"/>';return s}
  g+='<g id="sc2">'+W.map(chip).join("")+
     '<path class="ld2 dr" d="M'+(C+42)+' '+(BOT-8)+'L'+(X1+20)+' 452H'+(LX-8)+'"/><text x="'+LX+'" y="448" class="t c">SPECS CHIP</text><text x="'+LX+'" y="468" class="t c c2">ABOUT 2 MM SQUARE</text>'+
     '<text x="40" y="60" class="a">THE CHIP</text></g>';
  /* 3 the light: visible light falls into every well; the photodiodes answer with current */
  var rays='';W.forEach(function(c){[-30,0,30].forEach(function(o){rays+='M'+(c+o-14)+' 70L'+(c+o)+' '+(BOT-24)})});
  var heads='';W.forEach(function(c){[-30,0,30].forEach(function(o){var x=c+o,y=BOT-24;heads+='M'+(x-5)+' '+(y-9)+'L'+x+' '+y+'L'+(x+4)+' '+(y-10)})});
  g+='<g id="sc3"><path class="ray dr" d="'+rays+'"/><path class="rayh dr" d="'+heads+'"/>'+
     W.map(function(c){return '<path class="glow" d="M'+(c-30)+' '+(BOT-15)+'h60"/>'}).join("")+
     '<path class="ld2 dr" d="M'+(C+44)+' 110H'+(LX-8)+'"/><text x="'+LX+'" y="114" class="t c">VISIBLE LIGHT</text>'+
     '<path class="ld2 dr" d="M'+(C+20)+' '+(BOT-16)+'L'+(X1+20)+' 392H'+(LX-8)+'"/><text x="'+LX+'" y="396" class="t c c3">25 PHOTODIODES</text>'+
     '<text x="40" y="60" class="a">THE LIGHT</text></g>';
  /* 4 the reaction: current from pad to pad through the solution, gas bubbling off the electrodes */
  function cur(c){return 'M'+(c-36)+' '+(BOT-20)+'C'+(c-36)+' '+(BOT-92)+' '+(c+36)+' '+(BOT-92)+' '+(c+36)+' '+(BOT-20)+'M'+(c-34)+' '+(BOT-20)+'C'+(c-30)+' '+(BOT-132)+' '+(c+30)+' '+(BOT-132)+' '+(c+34)+' '+(BOT-20)}
  var bub='';W.forEach(function(c){[[-36,-34,2.6],[-38,-58,2],[-34,-84,1.6],[36,-36,2.4],[38,-62,1.8],[35,-92,1.4]].forEach(function(b){bub+='<circle class="bub" cx="'+(c+b[0])+'" cy="'+(BOT+b[1])+'" r="'+b[2]+'"/>'})});
  g+='<g id="sc4">'+W.map(function(c){return '<path class="cur dr" d="'+cur(c)+'"/>'}).join("")+bub+
     '<path class="ld2 dr" d="M'+(C+10)+' '+(BOT-110)+'L'+(X1+20)+' 336H'+(LX-8)+'"/><text x="'+LX+'" y="340" class="t c c4">CURRENT THROUGH</text><text x="'+LX+'" y="358" class="t c c4">THE SOLUTION</text>'+
     '<text x="40" y="60" class="a">THE REACTION</text></g>';
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
