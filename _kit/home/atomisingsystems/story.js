/* the story scene (BL/BY/DB): ONE engraved section through an atomiser, kept on screen throughout; each step adds one part of
   the process as atomising.co.uk and metal-powder.co.uk describe it: the melt in the crucible (30 kg batches to 750 kg melts),
   the single melt stream, the gas or water jets at the nozzle that break it into droplets in the spray chamber, and the powder
   that collects below, sized by sieving and laser diffraction. The inset is the log-normal cumulative size curve on
   log-probability paper that ASL's own mark is drawn from. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?560:592,CX=330;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="aslHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(244,242,239,.16)" stroke-width="1"/></pattern></defs>';
  /* the chamber: a tall vessel with a conical base and an outlet, on its floor */
  var ch='M226 196H434V420L362 486V516H298V486L226 420Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="M150 528H510V544H150Z"/><path class="wl sD" d="M150 528H510"/>';
  g+='<path class="wl sD" d="'+ch+'"/><path class="wi sD" d="M234 204H426V416L356 481V516M304 516V481L234 416Z"/>';
  g+='<path class="wi sD" d="M248 420V528M412 420V528"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · ATOMISER</text><text x="558" y="538" class="t s">ATOMISING SYSTEMS · SHEFFIELD</text></g>';
  g+='</g>';
  /* 1 the melt: a crucible of molten metal above the chamber */
  g+='<g id="sc1"><path class="liq" d="M276 92Q330 99 384 92L370 136H290Z"/><path class="wl dr" d="M266 70H394L374 142H286Z"/>'+
     '<path class="men dr" d="M276 92Q330 99 384 92"/>'+
     '<path class="ld2 dr" d="M396 78H'+(LX-8)+'"/><text x="'+LX+'" y="82" class="t c">CRUCIBLE</text>'+
     '<path class="ld2 dr" d="M368 116H'+(LX-8)+'"/><text x="'+LX+'" y="120" class="t c">MOLTEN METAL</text>'+
     '<text x="40" y="60" class="a">THE MELT</text></g>';
  /* 2 the stream: one stream of melt down through the nozzle bore */
  g+='<g id="sc2"><path class="wi dr" d="M322 142V172M338 142V172"/><path class="strm dr" d="M330 140V230"/>'+
     '<path class="ld2 dr" d="M336 158H'+(LX-8)+'"/><text x="'+LX+'" y="162" class="t c">MELT STREAM</text>'+
     '<text x="40" y="60" class="a">THE STREAM</text></g>';
  /* 3 the jets: the atomising die either side of the stream; jets converge below it and the spray opens into the chamber */
  var jets='';[-1,1].forEach(function(s){[0,6,12].forEach(function(o){jets+='M'+(CX+s*(14+o))+' '+(184+o*.4)+'L'+(CX+s*2)+' '+(222+o*.5)})});
  var dr='',seed=7;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  for(var i=0;i<70;i++){var yy=232+rnd()*180,f=(yy-222)/200,xx=CX+(rnd()*2-1)*(14+f*80);dr+='<circle class="drp" cx="'+xx.toFixed(1)+'" cy="'+yy.toFixed(1)+'" r="'+(1+rnd()*1.6).toFixed(1)+'"/>'}
  g+='<g id="sc3"><path class="die dr" d="M282 174H318V190H290ZM342 174H378L370 190H342Z"/><path class="jet dr" d="'+jets+'"/>'+
     '<path class="cone"d="M330 224L262 410M330 224L398 410"/>'+dr+
     '<path class="ld2 dr" d="M380 182H'+(LX-8)+'"/><text x="'+LX+'" y="186" class="t c c3">ATOMISING NOZZLE</text>'+
     '<path class="ld2 dr" d="M338 218L'+(LX-28)+' 222H'+(LX-8)+'"/><text x="'+LX+'" y="226" class="t c c3">GAS OR WATER JETS</text>'+
     '<path class="ld2 dr" d="M436 300H'+(LX-8)+'"/><text x="'+LX+'" y="304" class="t c c3">SPRAY CHAMBER</text>'+
     '<text x="40" y="60" class="a">THE JETS</text></g>';
  /* 4 the powder: it settles in the cone and leaves by the outlet; the inset plots its size distribution */
  var pw='';seed=19;for(var j=0;j<46;j++){var py=452+rnd()*60,half=py<486?(36+(486-py)*1.6):30,px=CX+(rnd()*2-1)*(half-6);pw+='<circle class="pwd" cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="'+(1.2+rnd()*1.2).toFixed(1)+'"/>'}
  var IX=40,IY=332,IW=150,IH=118,grid='';[.2,.4,.56,.68,.78,.87,.94].forEach(function(v){grid+='M'+(IX+v*IW).toFixed(1)+' '+IY+'V'+(IY+IH)});for(var k=1;k<8;k++)grid+='M'+IX+' '+(IY+k*IH/8).toFixed(1)+'H'+(IX+IW);
  var cv='M'+IX+' '+(IY+IH*.95)+'C'+(IX+IW*.26)+' '+(IY+IH*.89)+' '+(IX+IW*.31)+' '+(IY+IH*.8)+' '+(IX+IW*.38)+' '+(IY+IH*.66)+'C'+(IX+IW*.46)+' '+(IY+IH*.5)+' '+(IX+IW*.5)+' '+(IY+IH*.36)+' '+(IX+IW*.58)+' '+(IY+IH*.25)+'C'+(IX+IW*.66)+' '+(IY+IH*.14)+' '+(IX+IW*.74)+' '+(IY+IH*.075)+' '+(IX+IW)+' '+(IY+IH*.04);
  g+='<g id="sc4"><path class="pile" d="M262 440Q330 452 398 440L362 486V516H298V486Z"/>'+pw+
     '<path class="ig" d="'+grid+'"/><path class="ifr dr" d="M'+IX+' '+IY+'H'+(IX+IW)+'V'+(IY+IH)+'H'+IX+'Z"/><path class="icv dr" d="'+cv+'"/>'+
     '<text x="'+IX+'" y="'+(IY+IH+26)+'" class="t c c4">PARTICLE SIZE</text>'+
     '<path class="ld2 dr" d="M392 462H'+(LX-8)+'"/><text x="'+LX+'" y="466" class="t c c4">METAL POWDER</text>'+
     '<text x="40" y="60" class="a">THE POWDER</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    f:[$$("#sc1 .liq",svg),[],$$("#sc3 .drp, #sc3 .cone",svg),$$("#sc4 .pile, #sc4 .pwd, #sc4 .ig",svg)],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one atomiser; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0,dv=i===0?b*s[0]:s[i];
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],dv);
      E.f[i].forEach(function(el){el.style.opacity=Math.max(0,Math.min(1,dv*1.6-.4)).toFixed(3)});
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
