/* the story scene (DB/DR): ONE engraved elevation of a tubing extrusion line, kept on screen throughout; each step adds one part
   exactly as ndhmedical.com/html/extrusion.htm explains the process: the extruder mixes, melts and meters the plastic; the melt is
   pumped through the desired shape die; the formed extrudate is cooled and supported by the water bath; the haul-off pulls it
   through the bath, and the solid tubing is cut or spooled. Proportions are simplified for legibility. */
function scene(){
  var mob=MOBILE();
  var TX=mob?40:40,TY=mob?104:60;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"14 74 786 410":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><pattern id="ndHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,243,238,.16)" stroke-width="1"/></pattern></defs>';
  /* base: the floor, the extruder (drive, barrel, cabinet), the water-bath trough on its legs, the haul-off stand */
  g+='<g id="scBase">'+(mob?'':'<rect class="neat" x=".5" y=".5" width="799" height="559"/>');
  g+='<path class="wl sD" d="M24 430H792"/>';
  g+='<path class="hatch" d="M40 232H100V330H40Z"/><path class="wl sD" d="M40 232H100V330H40Z"/>';
  g+='<path class="wl sD" d="M100 255H330V295H100Z"/>';
  g+='<path class="wl sD" d="M112 300H320V430H112Z"/><path class="wi sD" d="M126 318H306 M126 412H306"/>';
  g+='<path class="wl sD" d="M400 255V320H620V255"/><path class="wl sD" d="M416 320V430 M604 320V430"/>';
  g+='<path class="wl sD" d="M652 306H718V430H652Z"/>';
  g+='</g>';
  if(!mob)g+='<g class="tb"><path class="tbl" d="M548 486h228v44h-228Z M548 508h228"/><text x="558" y="502" class="t">TUBING EXTRUSION LINE</text><text x="558" y="524" class="t s">NDH MEDICAL · NOT TO SCALE</text></g>';
  /* 1 the extruder: hopper with pellets, the screw inside the barrel, heater bands */
  var scr='M104 275';for(var i=0;i<22;i++){var x=108+i*10;scr+='L'+(x+5)+' '+(i%2?262:288)}
  var pel='';[[128,196],[140,204],[152,198],[164,206],[146,214],[134,222],[158,222],[150,232],[172,196],[122,206]].forEach(function(p){pel+='<circle class="pel" cx="'+p[0]+'" cy="'+p[1]+'" r="3.2"/>'});
  g+='<g id="sc1"><path class="wl dr" d="M135 255V240L108 180H192L165 240V255"/>'+pel+
     '<path class="scr dr" d="'+scr+'"/><path class="hb dr" d="M176 252V298 M226 252V298 M276 252V298"/>'+
     '<path class="ld2 dr nm" d="M196 186H214"/><text x="222" y="190" class="t c nm">HOPPER</text>'+
     '<text x="216" y="456" class="t c" text-anchor="middle">EXTRUDER</text><text x="216" y="474" class="t c s nm" text-anchor="middle">MIX · MELT · METER</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE EXTRUDER</text></g>';
  /* 2 the die: the die head at the end of the barrel, with an inset of the multi-lumen profile it forms */
  g+='<g id="sc2"><path class="chp dr" d="M330 248H356L374 262V288L356 302H330Z"/>'+
     '<path class="ld2 dr" d="M352 246V200"/><circle class="ring dr" cx="352" cy="152" r="44"/>'+
     '<circle class="prf dr" cx="352" cy="152" r="30"/><circle class="prh dr" cx="352" cy="145" r="14"/><circle class="prh dr" cx="337" cy="166" r="6"/><circle class="prh dr" cx="352" cy="172" r="6"/><circle class="prh dr" cx="367" cy="166" r="6"/>'+
     '<text x="410" y="148" class="t c">DIE</text><text x="410" y="168" class="t c s nm">MULTI-LUMEN PROFILE</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE DIE</text></g>';
  /* 3 the water bath: water, support rollers, the extrudate running through */
  g+='<g id="sc3"><path class="ext dr" d="M374 275H636"/><path class="wat dr" d="M402 262Q421 257 440 262T478 262T516 262T554 262T592 262T618 262"/>'+
     '<circle class="rol dr" cx="452" cy="288" r="7"/><circle class="rol dr" cx="510" cy="288" r="7"/><circle class="rol dr" cx="568" cy="288" r="7"/>'+
     '<text x="510" y="456" class="t c" text-anchor="middle">WATER BATH</text><text x="510" y="474" class="t c s nm" text-anchor="middle">COOL · SUPPORT</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE WATER BATH</text></g>';
  /* 4 the haul-off belts pull the tubing; the cutter cuts it to length */
  g+='<g id="sc4"><path class="wl dr" d="M656 246H714A9 9 0 0 1 714 264H656A9 9 0 0 1 656 246Z M656 286H714A9 9 0 0 1 714 304H656A9 9 0 0 1 656 286Z"/>'+
     '<path class="ext dr" d="M636 275H750 M758 275H774 M782 275H796"/><path class="awa2 dr" d="M664 226H704M698 221L705 226L698 231"/>'+
     '<path class="wl dr" d="M754 234V266 M746 240L754 266L762 240"/>'+
     '<text x="685" y="456" class="t c" text-anchor="middle">HAUL-OFF</text><text x="754" y="222" class="t c" text-anchor="middle">CUT</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">HAUL-OFF AND CUT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t, #sc1 .pel",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the line builds up left to right; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.45*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
