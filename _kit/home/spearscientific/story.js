/* the story scene (BL/BY/DB): ONE engraved section through skin, kept on screen throughout; each step adds one part of
   optoacoustic mesoscopy as Spear and CORDIS describe it (spear-scientific.com Solutions; CORDIS MOSAIC 101186537, RSENSE):
   the skin as a window to the dermal microvasculature (capillary loops, superficial and deep plexus); nanosecond light pulses
   from the scan head; ultrasound rising from the vessels that absorb the light, picked up at the surface; the reconstructed
   3D vessel map at 10–30 µm. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?586:604;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"0 30 800 450":"0 0 800 560")+'" aria-hidden="true">';
  var T=function(a,b){return mob?b:a};
  var X0=24,X1=556,SURF=240,SP=300,DP=420,BOT=470;
  function f(n){return n.toFixed(1)}
  /* epidermis lower edge with rete ridges */
  var epi='M'+X0+' 262';for(var x=X0;x<=X1;x+=4){var yy=262+5*Math.sin((x-X0)/38*Math.PI*2+Math.PI/2);epi+='L'+x+' '+f(yy)}
  var sp='M'+X0+' '+SP;for(x=X0;x<=X1;x+=4){sp+='L'+x+' '+f(SP+4*Math.sin(x/61)+2*Math.sin(x/23))}
  var dp='M'+X0+' '+DP;for(x=X0;x<=X1;x+=4){dp+='L'+x+' '+f(DP+5*Math.sin(x/83+1)+2*Math.sin(x/31))}
  var loops='';for(x=X0+19;x<X1;x+=38){var top=257+5*Math.sin((x-X0)/38*Math.PI*2+Math.PI/2)-2;loops+='M'+(x-4)+' '+f(SP+4*Math.sin((x-4)/61)+2*Math.sin((x-4)/23))+'C'+(x-5)+' '+f(top+6)+' '+(x-3)+' '+f(top)+' '+x+' '+f(top)+'C'+(x+3)+' '+f(top)+' '+(x+5)+' '+f(top+6)+' '+(x+4)+' '+f(SP+4*Math.sin((x+4)/61)+2*Math.sin((x+4)/23))}
  var con='';[96,214,352,488].forEach(function(cx,i){var y0=SP+4*Math.sin(cx/61)+2*Math.sin(cx/23),y1=DP+5*Math.sin(cx/83+1)+2*Math.sin(cx/31);con+='M'+cx+' '+f(y0)+'C'+(cx+12*(i%2?1:-1))+' '+f(y0+40)+' '+(cx-12*(i%2?1:-1))+' '+f(y1-40)+' '+(cx+3)+' '+f(y1)});
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="skin" d="M'+X0+' '+SURF+'H'+X1+'V'+BOT+'H'+X0+'Z"/>';
  g+='<path class="wl sD" d="M'+X0+' '+BOT+'V'+SURF+'H'+X1+'V'+BOT+'"/><path class="wi sD" d="'+epi+'"/><path class="ld" d="M'+X0+' '+BOT+'H'+X1+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · SKIN</text><text x="558" y="538" class="t s">RSOM · SPEAR</text></g>';
  g+='</g>';
  /* 1 the window: the dermal microvasculature */
  g+='<g id="sc1"><path class="ves dr" d="'+loops+'"/><path class="ves dr" d="'+sp+'"/><path class="ves dr" d="'+con+'"/><path class="vesD dr" d="'+dp+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 250H'+(LX-8)+'"/><text x="'+LX+'" y="254" class="t c">EPIDERMIS</text>'+
     '<path class="ld2 dr" d="M'+(X1-8)+' 268L'+(X1+20)+' 282H'+(LX-8)+'"/><text x="'+LX+'" y="286" class="t c">'+T('CAPILLARY LOOPS','CAPILLARIES')+'</text>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 302L'+(X1+20)+' 316H'+(LX-8)+'"/><text x="'+LX+'" y="320" class="t c">'+T('SUPERFICIAL PLEXUS','PLEXUS')+'</text>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 424H'+(LX-8)+'"/><text x="'+LX+'" y="428" class="t c">DEEP PLEXUS</text>'+
     '<text x="40" y="60" class="a">THE WINDOW</text></g>';
  /* 2 the pulse: the scan head sends nanosecond light pulses into the skin */
  var HX=280;
  g+='<g id="sc2"><path class="head dr" d="M'+(HX-50)+' 120H'+(HX+50)+'V184L'+(HX+40)+' 194H'+(HX-40)+'L'+(HX-50)+' 184Z"/><path class="wi dr" d="M'+(HX-34)+' 194V188H'+(HX+34)+'V194"/>'+
     '<path class="ray dr" d="M'+(HX-24)+' 196L'+(HX-6)+' '+(SURF+46)+'M'+(HX+24)+' 196L'+(HX+6)+' '+(SURF+46)+'M'+(HX-12)+' 196L'+(HX-3)+' '+(SURF+52)+'M'+(HX+12)+' 196L'+(HX+3)+' '+(SURF+52)+'"/>'+
     '<path class="ld2 dr" d="M'+(HX+52)+' 150H'+(LX-8)+'"/><text x="'+LX+'" y="154" class="t c">SCAN HEAD</text>'+
     '<path class="ld2 dr" d="M'+(HX+20)+' 216L'+(X1+20)+' 206H'+(LX-8)+'"/><text x="'+LX+'" y="210" class="t c c2">LIGHT PULSE</text>'+
     '<text x="40" y="60" class="a">THE PULSE</text></g>';
  /* 3 the sound: the vessels that absorb the light ring with ultrasound, heard at the surface */
  function arcs(cx,cy,rs){return rs.map(function(r){var a0=Math.PI*1.18,a1=Math.PI*1.82;return 'M'+f(cx+r*Math.cos(a0))+' '+f(cy+r*Math.sin(a0))+'A'+r+' '+r+' 0 0 1 '+f(cx+r*Math.cos(a1))+' '+f(cy+r*Math.sin(a1))}).join("")}
  var s1y=SP+4*Math.sin(HX/61)+2*Math.sin(HX/23),s2y=DP+5*Math.sin(HX/83+1)+2*Math.sin(HX/31);
  g+='<g id="sc3"><path class="snd dr" d="'+arcs(HX,s1y,[14,28,42])+'"/><path class="snd dr" d="'+arcs(HX,s2y,[26,52,78,104])+'"/>'+
     '<circle class="src" cx="'+HX+'" cy="'+f(s1y)+'" r="3.4"/><circle class="src" cx="'+HX+'" cy="'+f(s2y)+'" r="3.4"/>'+
     '<path class="ld2 dr" d="M'+f(HX+104*Math.cos(Math.PI*1.82))+' '+f(s2y+104*Math.sin(Math.PI*1.82))+'L'+(X1+20)+' 456H'+(LX-8)+'"/><text x="'+LX+'" y="460" class="t c c3">ULTRASOUND</text>'+
     '<text x="40" y="60" class="a">THE SOUND</text></g>';
  /* 4 the image: the head scans across; the vessels are reconstructed as a 3D map */
  var ticks='';for(x=60;x<=500;x+=20)ticks+='M'+x+' 104v6';
  g+='<g id="sc4"><path class="scan dr" d="'+ticks+'M60 107H500"/><path class="scanh dr" d="M488 101L500 107L488 113"/>'+
     '<path class="img dr" d="'+loops+'"/><path class="img dr" d="'+sp+'"/><path class="img dr" d="'+con+'"/><path class="img dr" d="'+dp+'"/>'+
     '<path class="ld2 dr" d="M'+(X1-30)+' 360L'+(X1+20)+' 366H'+(LX-8)+'"/><text x="'+LX+'" y="362" class="t c c4">3D VESSEL MAP</text><text x="'+LX+'" y="'+T(382,390)+'" class="t c c4">'+T('10–30 µm RESOLUTION','10–30 µm')+'</text>'+
     '<text x="40" y="60" class="a">THE IMAGE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .skin, #scBase .ld",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    x:[$$("#sc1 circle",svg),$$("#sc2 circle",svg),$$("#sc3 circle",svg),$$("#sc4 circle",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one section; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
      E.x[i].forEach(function(el){el.style.opacity=Math.max(0,Math.min(1,s[i]*2-1)).toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
