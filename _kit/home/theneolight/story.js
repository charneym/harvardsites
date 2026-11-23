/* the story scene (BL/BY/DB): ONE engraved elevation kept on screen throughout: a swaddled newborn, in eye shields, lying on
   the Skylife pad (GelMat over the LED light array), seen from the side. Each step adds one part, as theneolight.com describes
   Skylife: bilirubin in the skin (jaundice); light from below, close to the skin through the GelMat; Spectral Power Treatment,
   a narrow 430–475 nm band matched to the bilirubin absorption spectrum; the 3D Light Array covering 40% of the body surface
   over 769 cm². The absorption curve is drawn schematically (peak near 460 nm); proportions are schematic. */
function scene(){
  /* the elevation is drawn in its own units and placed at K=1.25 (TX,TY0); labels and leaders sit outside it at the mapped points */
  var mob=MOBILE(),LX=640,TY=mob?100:60,K=1.25,TX=-35,TY0=-90;
  function T(x,y){return [+(x*K+TX).toFixed(1),+(y*K+TY0).toFixed(1)]}
  var G0='<g transform="translate('+TX+' '+TY0+') scale('+K+')">';
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"20 70 620 470":"0 0 800 560")+'" aria-hidden="true">';
  var pad='M84 396H496C512 396 520 404 520 414C520 424 512 430 496 430H84C68 430 60 424 60 414C60 404 68 396 84 396Z';
  var gel='M72 396V384C72 377 77 372 86 372H494C503 372 508 377 508 384V396';
  var body='M172 322C210 302 290 296 360 300C420 303 462 312 476 332C486 350 482 366 466 372H182C172 368 168 350 172 322Z';
  var folds='M262 302C280 330 288 352 284 372M382 302C364 330 356 352 360 372M210 312C222 334 226 354 224 372';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+=G0+'<path class="lf" id="nlGel" d="'+gel+'Z"/><path class="bf" id="nlBody" d="'+body+'"/>';
  g+='<path class="gl sD" d="M40 452H560"/>';
  g+='<path class="wl sD" d="'+pad+'"/><path class="wi sD" d="'+gel+'"/>';
  g+='<path class="wl sD" d="'+body+'"/><path class="wi sD" d="'+folds+'"/>';
  g+='<circle class="wl sD" cx="140" cy="336" r="36"/><path class="sh sD" d="M108 322Q136 306 168 316"/><path class="wi sD" d="M104 342Q100 350 106 356"/></g>';
  g+='<g class="tb"><path class="tbl" d="M548 14h228v52h-228Z M548 40h228"/><text x="558" y="32" class="t">SKYLIFE · SIDE ELEVATION</text><text x="558" y="58" class="t s">NEOLIGHT</text></g>';
  g+='</g>';
  /* 1 jaundice: bilirubin in the skin */
  var rnd=function(i){var x=Math.sin(i*12.9898+4.1)*43758.5453;return x-Math.floor(x)},dots='';
  for(var i=0,n=0;n<34&&i<400;i++){var x=186+rnd(i)*284,y=306+rnd(i+97)*62;
    var inb=y>302+(x>420?(x-420)*.35:0)+(x<220?(220-x)*.4:0)&&y<368&&x<470;if(!inb)continue;n++;dots+='<circle class="bl" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="2.2"/>'}
  var b1=T(482,334);
  g+='<g id="sc1">'+G0+dots+'</g><path class="ld2 dr" d="M'+b1[0]+' '+b1[1]+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(b1[1]+4)+'" class="t c">BILIRUBIN IN SKIN</text>'+
     '<text x="40" y="'+TY+'" class="a">JAUNDICE</text></g>';
  /* 2 light from below: the LED array lights, the GelMat brings it close */
  var leds='',ups='';for(var x2=96;x2<=484;x2+=24)leds+='<circle class="led" cx="'+x2+'" cy="413" r="3.2"/>';
  for(var x3=120;x3<=460;x3+=34)ups+='M'+x3+' 392V378M'+(x3-4)+' 382L'+x3+' 377L'+(x3+4)+' 382';
  var g1=T(510,384),l1=T(523,413);
  g+='<g id="sc2">'+G0+leds+'<path class="up dr" d="'+ups+'"/></g>'+
     '<path class="ld2 dr" d="M'+g1[0]+' '+g1[1]+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(g1[1]+4)+'" class="t c">GELMAT</text>'+
     '<path class="ld2 dr" d="M'+l1[0]+' '+l1[1]+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(l1[1]+4)+'" class="t c">LED LIGHT ARRAY</text>'+
     '<text x="40" y="'+TY+'" class="a">FROM BELOW</text></g>';
  /* 3 the spectrum: 430–475 nm band over the bilirubin absorption curve (schematic) */
  var X=function(nm){return 120+(nm-380)*340/140},cv='';
  for(var nm=384;nm<=516;nm+=4){var yv=228-100*Math.exp(-Math.pow((nm-460)/26,2));cv+=(nm===384?'M':'L')+X(nm).toFixed(1)+' '+yv.toFixed(1)}
  var ty=228-100*Math.exp(-Math.pow((492-460)/26,2));
  g+='<g id="sc3"><rect class="band" x="'+X(430).toFixed(1)+'" y="118" width="'+(X(475)-X(430)).toFixed(1)+'" height="110"/>'+
     '<path class="ax dr" d="M120 228H460"/><path class="ax dr" d="M'+X(400)+' 228v6M'+X(450)+' 228v6M'+X(500)+' 228v6"/>'+
     '<path class="cvl dr" d="'+cv+'"/>'+
     '<text x="'+X(400)+'" y="252" class="t m" text-anchor="middle">400</text><text x="'+X(450)+'" y="252" class="t m" text-anchor="middle">450</text><text x="'+X(500)+'" y="252" class="t m" text-anchor="middle">500 NM</text>'+
     '<path class="ld2 dr" d="M'+(X(475)+4).toFixed(1)+' 130H'+(LX-8)+'"/><text x="'+LX+'" y="134" class="t c">430–475 NM BAND</text>'+
     '<path class="ld2 dr" d="M'+(X(492)+6).toFixed(1)+' '+ty.toFixed(1)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(ty+4).toFixed(1)+'" class="t c">BILIRUBIN</text><text x="'+LX+'" y="'+(ty+22).toFixed(1)+'" class="t c">ABSORPTION</text>'+
     '<text x="40" y="'+TY+'" class="a">THE SPECTRUM</text></g>';
  /* 4 coverage: 40% of the body surface, 769 cm² irradiated */
  var d0=T(72,470),d1=T(508,470),dm=T(290,0),c4=T(360,298);
  g+='<g id="sc4"><path class="dim dr" d="M'+d0[0]+' '+d0[1]+'H'+d1[0]+'M'+d0[0]+' '+(d0[1]-8)+'V'+(d0[1]+8)+'M'+d1[0]+' '+(d1[1]-8)+'V'+(d1[1]+8)+'"/><text x="'+dm[0]+'" y="'+(d0[1]+30)+'" class="t c" text-anchor="middle">769 CM² IRRADIATED</text>'+
     '<path class="ld2 dr" d="M'+c4[0]+' '+(c4[1]-4)+'V268H'+(LX-8)+'"/><text x="'+LX+'" y="272" class="t c">40% OF THE BODY</text><text x="'+LX+'" y="290" class="t c">SURFACE IN LIGHT</text>'+
     '<text x="40" y="'+TY+'" class="a">COVERAGE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var gel=$("#nlGel",svg),bod=$("#nlBody",svg),bl=$$("#sc1 .bl",svg),led=$$("#sc2 .led",svg),band=$("#sc3 .band",svg);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      /* earlier labels quieten as the next part arrives */
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* the spectrum chart steps back once coverage is shown */
    E.g[2].style.opacity=(b*(s[2]>0?1:0)*(1-.75*s[3])).toFixed(3);
    /* bilirubin dots fade as the light works on them; the LEDs and GelMat light up */
    var lit=Math.max(s[1],s[3]);
    bl.forEach(function(el,k){el.style.opacity=(b*(1-.8*s[3]*(.6+.4*((k*37)%10)/10))).toFixed(3)});
    led.forEach(function(el){el.style.opacity=(.2+.8*lit).toFixed(3)});
    gel.style.opacity=(.85*s[1]).toFixed(3);
    bod.style.opacity=(s[3]*s[3]).toFixed(3);
    band.style.opacity=Math.min(1,s[2]*1.6).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
