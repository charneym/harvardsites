/* the story scene (DB): ONE engraved schematic of spectral flow cytometry, the method behind the firm's work (its Spectral
   Flow Cytometry page: a multispectral detector patented in 2004, a 32-channel photodetector in Cytometry A 2012).
   Step 1 sheath fluid focuses the cells into single file down the flow cell's channel; step 2 a laser crosses the stream
   and each cell flashes as it passes; step 3 the emitted light is collected, dispersed by a grating and spread across 32
   detector channels; step 4 the 32 readings form the cell's spectrum, and unmixing and classification sort cells into
   populations. Drawn in the site's fine-line language; colours from the logo's green and orange strands. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var CX=150,IY=292;
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* the flow cell: sheath chamber tapering into the square channel */
  g+='<path class="sD bl" d="M78 70L'+(CX-14)+' 176V520M222 70L'+(CX+14)+' 176V520"/>';
  g+='<path class="sD kb" d="M62 70H238M'+(CX-34)+' 58V70M'+(CX+34)+' 58V70M'+(CX-46)+' 58H'+(CX+46)+'"/>';
  g+='<path class="sD ht" d="M'+(CX-6)+' 40V150"/>';
  g+='<text x="'+(CX+70)+'" y="62" class="t">SHEATH</text><text x="'+(CX+28)+'" y="512" class="t">FLOW CELL</text>';
  /* the optics bench, drawn faintly with the base */
  g+='<path class="sD ht" d="M'+(CX+14)+' '+IY+'H262M300 '+IY+'H344"/>';
  g+='<g class="tb"><text x="24" y="540" class="t">SPECTRAL FLOW CYTOMETRY · SCHEMATIC</text></g>';
  g+='</g>';
  /* cells: start scattered in the sheath chamber, end in single file */
  var cells='';for(var i=0;i<11;i++)cells+='<g class="cell" id="c'+i+'"><circle r="7.5"/><circle class="nu" r="3"/></g>';
  g+='<g id="cells">'+cells+'</g>';
  /* step 2: the laser */
  g+='<g id="sc2"><path id="las" class="las dr2" d="M18 '+IY+'H'+(CX-14)+'"/><text x="24" y="'+(IY-14)+'" class="t a2">LASER</text>'+
     '<circle id="flash" class="flash" cx="'+CX+'" cy="'+IY+'" r="16"/></g>';
  /* step 3: collection lens, grating and the 32-channel detector */
  var rays='',det='';for(var k=0;k<32;k++){var y=120+k*10.6,col=spec(k/31);
    rays+='<path class="ray" d="M346 '+IY+'L452 '+y.toFixed(1)+'" style="stroke:'+col+'"/>';
    det+='<rect class="dc" x="456" y="'+(y-4.2).toFixed(1)+'" width="22" height="8.4" style="fill:'+col+'"/>'}
  g+='<g id="sc3"><path class="dr3 bl" d="M272 '+(IY-58)+'Q292 '+IY+' 272 '+(IY+58)+'Q252 '+IY+' 272 '+(IY-58)+'Z"/>'+
     '<path class="dr3 bl" d="M330 '+(IY-40)+'L356 '+(IY-40)+'L356 '+(IY+40)+'L330 '+(IY+40)+'Z"/><path class="dr3 ht" d="M334 '+(IY-34)+'V'+(IY+34)+'M338 '+(IY-34)+'V'+(IY+34)+'M342 '+(IY-34)+'V'+(IY+34)+'M346 '+(IY-34)+'V'+(IY+34)+'M350 '+(IY-34)+'V'+(IY+34)+'"/>'+
     '<path id="emit" class="emit" d="M'+(CX+14)+' '+IY+'H344"/>'+
     '<g id="rays">'+rays+'</g><path class="dr3 kb" d="M452 112H482V458H452Z"/><g id="det">'+det+'</g>'+
     '<text x="246" y="'+(IY+86)+'" class="t">LENS</text><text x="318" y="'+(IY+64)+'" class="t">GRATING</text><text x="420" y="100" class="t">32 CHANNELS</text></g>';
  /* step 4: the spectrum (32 bars) and the populations it resolves */
  var bars='';for(var b=0;b<32;b++)bars+='<rect class="br" x="'+(536+b*7.4).toFixed(1)+'" y="250" width="5.2" height="0" style="fill:'+spec(b/31)+'"/>';
  var dots='',R=function(s){s=Math.sin(s*127.1)*43758.5453;return s-Math.floor(s)};
  var C=[[596,410,"g"],[672,456,"o"],[728,384,"w"]];
  for(var d=0;d<84;d++){var cc=C[d%3],a=R(d+1)*6.283,r=Math.sqrt(R(d+7))*24;dots+='<circle class="dt '+cc[2]+'" cx="'+(cc[0]+Math.cos(a)*r*1.3).toFixed(1)+'" cy="'+(cc[1]+Math.sin(a)*r).toFixed(1)+'" r="2.6"/>'}
  g+='<g id="sc4"><path class="dr4 kb" d="M528 92V252H778M528 330V500H778"/><text x="532" y="80" class="t">EMISSION SPECTRUM · ONE CELL</text>'+
     '<g id="bars">'+bars+'</g><text x="532" y="318" class="t">UNMIXED POPULATIONS</text><g id="dots">'+dots+'</g></g>';
  g+='<text id="cap1" x="40" y="34" class="a">CELLS IN SINGLE FILE</text>';
  g+='<text id="cap2" x="40" y="34" class="a">CROSSING THE LASER</text>';
  g+='<text id="cap3" x="40" y="34" class="a">LIGHT SPREAD OVER 32 CHANNELS</text>';
  g+='<text id="cap4" x="40" y="34" class="a">A SPECTRAL FINGERPRINT</text>';
  return g+'</svg>';
}
/* a muted spectral ramp, violet to deep red */
function spec(t){var h=270-t*270,s=58,l=58-8*Math.abs(t-.5);return "hsl("+h.toFixed(0)+","+s+"%,"+l.toFixed(0)+"%)"}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase>text",svg),cells:$$("#cells .cell",svg),
    g2:$("#sc2",svg),las:dl("#sc2 .dr2"),flash:$("#flash",svg),g3:$("#sc3",svg),d3:dl("#sc3 .dr3"),rays:$$("#rays path",svg),det:$$("#det rect",svg),emit:$("#emit",svg),
    g4:$("#sc4",svg),d4:dl("#sc4 .dr4"),bars:$$("#bars rect",svg),dots:$$("#dots circle",svg),cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1,CX=150,IY=292;
  /* scattered start positions in the sheath chamber, and the single-file lane */
  var R=function(s){s=Math.sin(s*91.7)*43758.5453;return s-Math.floor(s)};
  var S=E.cells.map(function(_,i){return [100+R(i+3)*100,84+R(i+11)*66]});
  /* one cell's spectrum: two labels, the logo's green and orange (peaks near channels 9 and 19) plus autofluorescence */
  var SP=[];for(var k=0;k<32;k++)SP.push(.08+.92*Math.exp(-Math.pow((k-9)/3.2,2))+.66*Math.exp(-Math.pow((k-19)/3.8,2)));
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function cl(v){return Math.max(0,Math.min(1,v))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    var flow=(p*7)%1,fl=0;
    /* step 1: cells drift from the chamber into the lane, then keep flowing down with the scroll */
    E.cells.forEach(function(el,i){
      var laneY=176+((i/11+flow*s1)%1)*344,x=S[i][0]+(CX-S[i][0])*s1,y=S[i][1]+(laneY-S[i][1])*s1;
      var near=Math.max(0,1-Math.abs(y-IY)/18)*s2;if(near>fl)fl=near;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");el.style.opacity=b.toFixed(3);
      el.setAttribute("class","cell"+(near>.35?(i%2?" hit o":" hit g"):""))});
    /* step 2: the laser draws in; a cell flashes when it crosses */
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.las,s2);E.flash.style.opacity=(fl*.9).toFixed(3);
    /* step 3: lens and grating draw, the emitted light fans over 32 channels and the detector lights */
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);E.emit.style.opacity=s3.toFixed(3);
    E.rays.forEach(function(el,k){var v=cl(s3*1.6-k/32*.6);el.style.opacity=(v*(.3+.55*SP[k])).toFixed(3)});
    E.det.forEach(function(el,k){el.style.opacity=(.16+.84*cl(s3*1.6-k/32*.6)*Math.min(1,SP[k])).toFixed(3)});
    /* step 4: the spectrum builds bar by bar, then the populations resolve */
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    E.bars.forEach(function(el,k){var v=cl(s4*1.8-k/32*.8),hh=SP[k]/1.02*150*v;el.setAttribute("y",(250-hh).toFixed(1));el.setAttribute("height",hh.toFixed(1))});
    E.dots.forEach(function(el,k){el.style.opacity=cl((s4-.35)*2.4-(k%12)/24).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
