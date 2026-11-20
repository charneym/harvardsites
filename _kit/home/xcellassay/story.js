/* the story scene (BL/BY/DB): ONE schematic of a single well of a 384-well dish seen from above, redrawn every frame as it
   moves through XCellAssay's method (home page "How it works" + NIH SBIR abstract R44ES036049). 1 Sample: a thin stream of a
   mailed 2 mL water sample falls into the well and ripples out. 2 Sensors: engineered BioAssay cells settle across the well
   floor, each nucleus carrying a nuclear receptor sensor. 3 Multiplex: the cells take their bar-code colours (four co-plated
   BioAssays) and the dish they sit in is shown. 4 Read: the cells of one sensor light up and the readout bars rise against a
   dashed toxicologic threshold. One figure, continuous morph. Colours: logo teal, the site's pale blue and lilac, bone. */
var SC_COL=["#5fb3cf","#9fcce4","#cf91de","#e9eef1"];
var SC_CELLS=(function(){var out=[],s=7,R=function(){s=(s*16807)%2147483647;return (s-1)/2147483646},n=0;
  while(out.length<34&&n<4000){n++;var a=R()*Math.PI*2,r=Math.sqrt(R())*168,x=330+r*Math.cos(a),y=290+r*Math.sin(a),ok=true;
    for(var i=0;i<out.length;i++){var dx=out[i].x-x,dy=out[i].y-y;if(dx*dx+dy*dy<46*46){ok=false;break}}
    if(ok)out.push({x:x,y:y,r:17+R()*5,ph:R()*6.28,g:out.length%4,d:R()})}
  return out})();
function scene(){
  var mob=MOBILE(),i;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD tk" d="M24 40H40M24 40V56M776 40H760M776 40V56M24 520H40M24 520V504M776 520H760M776 520V504"/>';
  g+='<circle class="sD wellR" cx="330" cy="290" r="206"/><circle class="sD wellI" cx="330" cy="290" r="194"/>';
  g+='<text x="44" y="536" class="t">SCHEMATIC · ONE WELL, TOP VIEW</text></g>';
  g+='<circle class="water" id="scWat" cx="330" cy="290" r="194"/>';
  g+='<g id="scRip"><circle class="rip" cx="330" cy="290" r="10"/><circle class="rip" cx="330" cy="290" r="10"/><circle class="rip" cx="330" cy="290" r="10"/></g>';
  g+='<g id="scCells">';
  for(i=0;i<SC_CELLS.length;i++){var c=SC_CELLS[i],d="";for(var k=0;k<=12;k++){var a=k/12*Math.PI*2,rr=c.r*(1+.13*Math.sin(a*3+c.ph)+.06*Math.sin(a*5+c.ph*2));d+=(k?"L":"M")+(c.x+rr*Math.cos(a)).toFixed(1)+" "+(c.y+rr*.86*Math.sin(a)).toFixed(1)}
    g+='<g class="cl" data-g="'+c.g+'"><path class="cb" d="'+d+'Z"/><ellipse class="nu" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" rx="'+(c.r*.42).toFixed(1)+'" ry="'+(c.r*.36).toFixed(1)+'"/><circle class="rc" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" r="'+(c.r*.58).toFixed(1)+'"/></g>'}
  g+='</g>';
  g+='<g id="scDrop"><path class="strm" d="M330 16V58"/><path class="drp" id="scDrp" d=""/><path class="ldr" d="M338 120h40"/><text class="t" x="384" y="124">2 ML WATER SAMPLE</text></g>';
  /* the dish, top right: 16 x 24 wells, one highlighted */
  g+='<g id="scPlate"><rect class="plt" x="586" y="70" width="186" height="128"/>';
  for(var r=0;r<16;r++)for(var q=0;q<24;q++)g+='<circle class="pw" cx="'+(594+q*7.4).toFixed(1)+'" cy="'+(78+r*7.4).toFixed(1)+'" r="2.3"/>';
  var hx=594+9*7.4,hy=78+6*7.4;
  g+='<circle class="pwOn" cx="'+hx.toFixed(1)+'" cy="'+hy.toFixed(1)+'" r="3.4"/><path class="ldr" d="M'+(hx-3).toFixed(1)+' '+(hy+3).toFixed(1)+'L500 160"/>';
  g+='<text class="t" x="586" y="216">384-WELL DISH</text></g>';
  /* bar-code legend */
  g+='<g id="scLeg">';for(i=0;i<4;i++)g+='<circle class="lg" cx="594" cy="'+(262+i*24)+'" r="6" style="stroke:'+SC_COL[i]+'"/><text class="t" x="610" y="'+(266+i*24)+'">BIOASSAY '+(i+1)+'</text>';g+='</g>';
  /* readout */
  g+='<g id="scBars"><path class="axis" d="M586 486H772"/>';for(i=0;i<4;i++)g+='<rect class="bar" id="scB'+i+'" x="'+(596+i*44)+'" y="486" width="26" height="0" style="fill:'+SC_COL[i]+'"/>';
  g+='<path class="thr" d="M586 420H772"/><text class="t" x="586" y="410">THRESHOLD</text><text class="t hi" id="scHi" x="772" y="398" text-anchor="end">ABOVE</text></g>';
  g+='<text x="44" y="64" class="a" id="st1">1 · A 2 ML SAMPLE</text><text x="44" y="64" class="a" id="st2">2 · SENSOR CELLS</text>'+
     '<text x="44" y="64" class="a" id="st3">3 · MANY SENSORS, ONE WELL</text><text x="44" y="64" class="a" id="st4">4 · READ THE RESPONSE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var f=function(n){return n.toFixed(2)};
  var E={base:$$("#scBase .sD",svg),fade:$$("#scBase .neat, #scBase text",svg),wat:$("#scWat",svg),rip:$$("#scRip .rip",svg),drop:$("#scDrop",svg),drp:$("#scDrp",svg),
    cells:$$("#scCells .cl",svg),plate:$("#scPlate",svg),leg:$("#scLeg",svg),bars:$("#scBars",svg),hi:$("#scHi",svg),st:[$("#st1",svg),$("#st2",svg),$("#st3",svg),$("#st4",svg)]};
  var B=[0,1,2,3].map(function(i){return $("#scB"+i,svg)}),BH=[34,48,96,26];
  E.base.forEach(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p._L=L});
  E.cells.forEach(function(el,i){el._c=SC_CELLS[i];el._b=el.querySelector(".cb");el._n=el.querySelector(".nu");el._r=el.querySelector(".rc")});
  return function(p,b){
    if(!svg.isConnected)return;
    E.base.forEach(function(el){el.style.strokeDashoffset=f(el._L*(1-b))});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});
    var s1=seg(p,0,.2),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* 1: the drop falls, the ripples spread; the water tint stays */
    E.wat.style.opacity=(b*(.3+.7*s1)).toFixed(3);
    var dOut=1-s2;E.drop.style.opacity=(b*dOut).toFixed(3);
    var dy=70+200*s1;E.drp.setAttribute("d","M330 "+f(dy-14)+"C336 "+f(dy-2)+" 338 "+f(dy+6)+" 330 "+f(dy+10)+"C322 "+f(dy+6)+" 324 "+f(dy-2)+" 330 "+f(dy-14)+"Z");
    E.drp.style.opacity=(1-seg(s1,.85,1)).toFixed(3);
    E.rip.forEach(function(c,i){var t=Math.max(0,Math.min(1,.15+s1*1.2-i*.25));c.setAttribute("r",f(12+176*t));c.style.opacity=(b*dOut*(.15+.75*(1-t))).toFixed(3)});
    /* 2: cells settle in, staggered by their own delay; 3: bar-code colour; 4: BioAssay 3 responds */
    E.cells.forEach(function(el){var c=el._c,t=Math.max(0,Math.min(1,(s2*1.5-c.d*.5)));
      el.style.opacity=(b*t).toFixed(3);el.style.transform="translate(0,"+f((1-t)*6)+"px)";
      var col=SC_COL[c.g];el._r.style.stroke=col;el._r.style.opacity=(s3*.95).toFixed(3);
      if(s3>.02)el._n.style.fill=col;else el._n.style.fill="";
      var on=c.g===2?s4:0,off=c.g!==2?s4:0;el._n.style.fillOpacity=(.3+.3*s3+.4*on-.15*off).toFixed(3);
      el._b.style.opacity=(1-.35*off).toFixed(3);el.classList.toggle("lit",on>.5)});
    E.plate.style.opacity=(b*s3).toFixed(3);E.leg.style.opacity=(b*s3*(1-s4*.3)).toFixed(3);
    E.bars.style.opacity=(b*s4).toFixed(3);
    B.forEach(function(r,i){var hh=BH[i]*s4;r.setAttribute("y",f(486-hh));r.setAttribute("height",f(hh))});
    E.hi.style.opacity=seg(s4,.7,1).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.st[0].style.opacity=(b*O(s2)).toFixed(3);E.st[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.st[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.st[3].style.opacity=I(s4).toFixed(3);
  };
}
