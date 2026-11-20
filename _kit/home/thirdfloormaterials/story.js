/* the story scene (BL/BY/DB): ONE engraved section through the imager, kept on screen throughout; each step adds one part as
   the sources describe it (NIH RePORTER 1R43GM165166 abstract; thirdfloormaterials.com R&D): a fluorescent sample with
   overlapping emission; a plasmonic filter array bonded to the CMOS sensor, a different transmission on neighbouring pixels;
   one exposure recording a filtered intensity at every pixel; the emission spectra recovered algorithmically and unmixed.
   Proportions and curves are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?586:604;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var X0=40,X1=540,N=10,PW=(X1-X0)/N,FY=300,FH=16,SY=FY+FH,SH=40;
  g+='<defs><pattern id="tfHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(243,245,249,.15)" stroke-width="1"/></pattern></defs>';
  /* the base: sensor die in section, its pixel wells, the package below */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  var pk='M'+(X0-14)+' '+SY+'H'+(X1+14)+'V'+(SY+SH+14)+'H'+(X0-14)+'Z';
  g+='<path class="hatch" d="M'+X0+' '+(SY+SH*.55)+'H'+X1+'V'+(SY+SH)+'H'+X0+'Z"/><path class="wl sD" d="'+pk+'"/>';
  var wells='';for(var i=0;i<N;i++){var x=X0+i*PW;wells+='M'+(x+5)+' '+SY+'V'+(SY+SH*.55)+'H'+(x+PW-5)+'V'+SY}
  g+='<path class="wi sD" d="'+wells+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · sHSI IMAGER</text><text x="558" y="538" class="t s">THIRD FLOOR MATERIALS</text></g>';
  g+='<path class="ld2 dr0" d="M'+(X1+16)+' '+(SY+30)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(SY+34)+'" class="t c b0">CMOS SENSOR</text>';
  g+='</g>';
  /* 1 the sample: a slide with fluorescent cells, three overlapping emissions fanning down */
  var cells='';[[110,96,15],[176,102,11],[248,94,17],[322,101,12],[392,95,15],[462,100,12]].forEach(function(c,k){cells+='<ellipse class="cell c'+(k%3)+'" cx="'+c[0]+'" cy="'+c[1]+'" rx="'+c[2]+'" ry="'+(c[2]*.62)+'"/><circle class="nuc" cx="'+(c[0]+2)+'" cy="'+c[1]+'" r="'+(c[2]*.28)+'"/>'});
  var em=['','',''];for(var j=0;j<N;j++){var cx=X0+j*PW+PW/2;em[j%3]+='M'+cx+' 122L'+(cx+(j%3-1)*5)+' '+(FY-14)}
  g+='<g id="sc1"><path class="slide dr" d="M'+X0+' 78H'+X1+'V116H'+X0+'Z"/>'+cells+
     '<path class="em e0 dr" d="'+em[0]+'"/><path class="em e1 dr" d="'+em[1]+'"/><path class="em e2 dr" d="'+em[2]+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 97H'+(LX-8)+'"/><text x="'+LX+'" y="101" class="t c">FLUORESCENT SAMPLE</text>'+
     '<path class="ld2 dr" d="M'+(X1-36)+' 146H'+(LX-8)+'"/><text x="'+LX+'" y="150" class="t c">OVERLAPPING EMISSION</text>'+
     '<text x="40" y="44" class="a">THE SAMPLE</text></g>';
  /* 2 the filters: a plasmonic film over every pixel, each with its own nanostructure period */
  var fl='';for(var k=0;k<N;k++){var x0=X0+k*PW+3,per=4+(k*7%10)*1.1,s='';for(var xx=x0+per/2;xx<x0+PW-6;xx+=per)s+='M'+xx.toFixed(1)+' '+(FY+3)+'v'+(FH-6);
    fl+='<rect class="flt f'+(k%4)+'" x="'+x0+'" y="'+FY+'" width="'+(PW-6)+'" height="'+FH+'"/><path class="nano" d="'+s+'"/>'}
  g+='<g id="sc2">'+fl+
     '<path class="ld2 dr" d="M'+(X1+2)+' '+(FY+8)+'L'+(X1+30)+' 266H'+(LX-8)+'"/><text x="'+LX+'" y="270" class="t c">PLASMONIC FILTER ARRAY</text><text x="'+LX+'" y="288" class="t c c2">ONE FILTER PER PIXEL</text>'+
     '<text x="40" y="44" class="a">THE FILTERS</text></g>';
  /* 3 the snapshot: each pixel records one filtered intensity, all in one exposure */
  var lv=[.62,.35,.82,.5,.28,.74,.44,.9,.38,.6],br='';
  lv.forEach(function(v,k){var x=X0+k*PW+PW/2;br+='<rect class="int" x="'+(x-PW*.26)+'" y="'+(SY+SH+30+(1-v)*56).toFixed(1)+'" width="'+(PW*.52).toFixed(1)+'" height="'+(v*56).toFixed(1)+'"/>'});
  g+='<g id="sc3"><path class="flash dr" d="M'+X0+' '+(FY-6)+'H'+X1+'"/>'+br+
     '<path class="axis dr" d="M'+X0+' '+(SY+SH+86)+'H'+X1+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' '+(SY+SH+60)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(SY+SH+64)+'" class="t c c3">ONE INTENSITY</text><text x="'+LX+'" y="'+(SY+SH+82)+'" class="t c c3">PER PIXEL</text>'+
     '<text x="40" y="44" class="a">THE SNAPSHOT</text></g>';
  /* 4 the spectrum: emission spectra recovered and unmixed, drawn over a wavelength axis */
  var AX=X0,AY=246,AW=X1-X0,AH=64;
  function pk2(mu,sg,a){var d='';for(var t=0;t<=60;t++){var x=AX+AW*t/60,u=(t/60-mu)/sg,y=AY-AH*a*Math.exp(-u*u/2);d+=(t?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d}
  g+='<g id="sc4"><rect class="veil" x="'+(X0-6)+'" y="'+(AY-AH-26)+'" width="'+(AW+12)+'" height="'+(AH+40)+'"/><path class="axis dr" d="M'+AX+' '+AY+'H'+(AX+AW)+'"/>'+
     '<path class="sp s0 dr" d="'+pk2(.28,.09,.95)+'"/><path class="sp s1 dr" d="'+pk2(.47,.1,.7)+'"/><path class="sp s2 dr" d="'+pk2(.7,.11,.85)+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' '+(AY-30)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(AY-26)+'" class="t c c4">SPECTRUM AT</text><text x="'+LX+'" y="'+(AY-8)+'" class="t c c4">EVERY PIXEL, UNMIXED</text>'+
     '<text x="'+(AX+AW)+'" y="'+(AY+18)+'" class="t s" text-anchor="end">WAVELENGTH →</text>'+
     '<text x="40" y="44" class="a">THE SPECTRUM</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch, #scBase .b0, #scBase .dr0",svg),
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
