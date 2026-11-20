/* the story scene (DB): ONE engraved cross-section of a direct-conversion flat-panel X-ray imager, the device in CapeSym's
   NIH NIBIB SBIR Phase II programme. Step 1 X-rays arrive at the panel (top electrode, perovskite sensor film, pixel
   electrodes, TFT backplane, glass); step 2 three X-rays are absorbed at different depths in the film and each frees a small
   cloud of charge; step 3 the bias field (dashed field lines) pulls each cloud straight down to the pixel beneath it, which
   lights; step 4 the pixel signals are read out as a profile under the panel. Labels sit right of the panel on desktop. */
var CS_PX=10,CS_X0=70,CS_P=50,CS_W=40;
var CS_HIT=[[2,252],[5,292],[7,268]];
function scene(){
  var mob=MOBILE();
  if(mob){CS_X0=56;CS_P=70;CS_W=56}else{CS_X0=70;CS_P=50;CS_W=40}
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var L=CS_X0-14,R=CS_X0+CS_PX*CS_P+4;
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* the panel: top electrode, film, pixel electrodes, backplane, glass */
  g+='<path class="sD gr" d="M'+L+' 200H'+R+'"/>';
  g+='<path class="sD bl" d="M'+L+' 204H'+R+'V330H'+L+'Z"/>';
  var hat='';for(var x=L;x<R-10;x+=11)hat+='M'+x+' 330L'+(x+10)+' 320';
  g+='<path class="sD ht" d="'+hat+'"/>';
  var px='';for(var i=0;i<CS_PX;i++){var x0=CS_X0+i*CS_P;px+='M'+x0+' 334H'+(x0+CS_W)+'V342H'+x0+'Z'}
  g+='<path class="sD kb" d="'+px+'"/>';
  g+='<path class="sD bl" d="M'+L+' 346H'+R+'V378H'+L+'Z"/>';
  var tft='';for(var j=0;j<CS_PX;j++){var x1=CS_X0+j*CS_P+CS_W/2;tft+='M'+x1+' 342V354M'+(x1-8)+' 354H'+(x1+8)+'V366H'+(x1-8)+'Z'}
  g+='<path class="sD kb" d="'+tft+'"/>';
  g+='<path class="sD kb" d="M'+L+' 382H'+R+'V398H'+L+'Z"/>';
  /* part labels with leaders (desktop) */
  if(!mob){
    g+='<path class="sD ld" d="M'+(R+4)+' 200H612M'+(R+4)+' 266H612M'+(R+4)+' 338H612M'+(R+4)+' 362H612M'+(R+4)+' 390H612"/>';
    g+='<text x="622" y="204" class="t">TOP ELECTRODE</text><text x="622" y="270" class="t">PEROVSKITE FILM</text><text x="622" y="342" class="t">PIXEL ELECTRODES</text><text x="622" y="366" class="t">TFT BACKPLANE</text><text x="622" y="394" class="t">GLASS</text>';
  }
  /* readout axis under the panel */
  g+='<path class="sD kb" d="M'+L+' 506H'+R+'"/>'+(mob?'<text x="'+L+'" y="540" class="t">PIXEL SIGNAL</text>':'<path class="sD ld" d="M'+(R+4)+' 506H612"/><text x="622" y="510" class="t">PIXEL SIGNAL</text>');
  if(!mob)g+='<g class="tb"><text x="24" y="544" class="t s">DIRECT-CONVERSION FLAT-PANEL X-RAY IMAGER · SCHEMATIC</text></g>';
  g+='</g>';
  /* step 1: X-rays arrive */
  var rays='';CS_HIT.forEach(function(h){var x=CS_X0+h[0]*CS_P+CS_W/2;rays+='<path class="xr dr" d="M'+x+' 84V'+h[1]+'"/><path class="xh" d="M'+(x-6)+' '+(h[1]-12)+'L'+x+' '+h[1]+'L'+(x+6)+' '+(h[1]-12)+'"/>'});
  var bg='';for(var k=0;k<CS_PX;k++){if(k===2||k===5||k===7)continue;var xb=CS_X0+k*CS_P+CS_W/2;bg+='<path class="xr2 dr" d="M'+xb+' 96V198"/>'}
  g+='<g id="sc1">'+bg+rays+'</g>';
  /* step 2: absorption flashes and charge clouds */
  var ab='';CS_HIT.forEach(function(h,n){var x=CS_X0+h[0]*CS_P+CS_W/2,y=h[1];
    ab+='<g class="hit"><path class="burst" d="M'+(x-11)+' '+y+'H'+(x+11)+'M'+x+' '+(y-11)+'V'+(y+11)+'M'+(x-7)+' '+(y-7)+'L'+(x+7)+' '+(y+7)+'M'+(x+7)+' '+(y-7)+'L'+(x-7)+' '+(y+7)+'"/>';
    for(var d=0;d<6;d++){var a=d/6*Math.PI*2,qx=(x+Math.cos(a)*9).toFixed(1),qy=(y+Math.sin(a)*7).toFixed(1);ab+='<circle class="q" r="2.6" cx="'+qx+'" cy="'+qy+'" data-x="'+qx+'" data-y="'+qy+'" data-tx="'+(x+(d-2.5)*4).toFixed(1)+'"/>'}
    ab+='</g>'});
  g+='<g id="sc2">'+ab+'</g>';
  /* step 3: the bias field and the lit pixels */
  var fl='';for(var m=0;m<CS_PX;m++){var xf=CS_X0+m*CS_P+CS_W/2;fl+='M'+xf+' 208V328'}
  var lit='';CS_HIT.forEach(function(h){var x0=CS_X0+h[0]*CS_P;lit+='<rect class="lit" x="'+x0+'" y="334" width="'+CS_W+'" height="8"/>'});
  g+='<g id="sc3"><path class="fld dr" d="'+fl+'"/>'+lit+(mob?'':'<text x="'+(R+18)+'" y="236" class="a fa">BIAS FIELD</text><path class="fa fav" d="M'+(R+30)+' 246V300M'+(R+24)+' 290L'+(R+30)+' 300L'+(R+36)+' 290"/>')+'</g>';
  /* step 4: the readout profile */
  var amp=[.08,.1,.86,.12,.09,1,.11,.7,.1,.07],bars='';
  for(var b2=0;b2<CS_PX;b2++){var xb2=CS_X0+b2*CS_P+6;bars+='<rect class="bar" data-h="'+(amp[b2]*84).toFixed(1)+'" x="'+xb2+'" y="506" width="'+(CS_W-12)+'" height="0"/>'}
  g+='<g id="sc4">'+bars+'</g>';
  g+='<text id="cap1" x="40" y="54" class="a">X-RAYS REACH THE PANEL</text>';
  g+='<text id="cap2" x="40" y="54" class="a">ABSORBED IN THE FILM</text>';
  g+='<text id="cap3" x="40" y="54" class="a">CHARGE DRIFTS TO ITS PIXEL</text>';
  g+='<text id="cap4" x="40" y="54" class="a">READ OUT AS AN IMAGE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase>text",svg),
    g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),d1:dl("#sc1 .dr"),d3:dl("#sc3 .dr"),
    xh:$$("#sc1 .xh",svg),bursts:$$("#sc2 .burst",svg),q:$$("#sc2 .q",svg),lit:$$("#sc3 .lit",svg),bars:$$("#sc4 .bar",svg),fa:$$("#sc3 .fa",svg),
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  E.bursts.forEach(function(el){el.style.transformBox="fill-box";el.style.transformOrigin="center"});
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    var s1v=Math.max(s1,b);
    /* step 1: the rays draw down to the panel (they stay, dimmed, afterwards) */
    E.g1.style.opacity=(b*(1-.55*s3)).toFixed(3);draw(E.d1,s1v);E.xh.forEach(function(el){el.style.opacity=(s1v>.96?1:0)});
    /* step 2: a flash at each absorption point, then a small cloud of charge */
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);
    E.bursts.forEach(function(el,i){var v=seg(s2,i*.12,.5+i*.12);el.style.opacity=(v*(1-.8*seg(s2,.6,1))*(1-s3)).toFixed(3);el.style.transform="scale("+(.4+.6*v).toFixed(3)+")"});
    /* step 3: the clouds drift straight down to the pixel beneath them, which lights */
    E.q.forEach(function(el){var x0=+el.getAttribute("data-x"),y0=+el.getAttribute("data-y"),tx=+el.getAttribute("data-tx"),k=s3*s3*(3-2*s3);
      el.setAttribute("cx",(x0+(tx-x0)*k).toFixed(1));el.setAttribute("cy",(y0+(338-y0)*k).toFixed(1));el.style.opacity=(seg(s2,.3,.7)*(1-seg(s3,.85,1))).toFixed(3)});
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.lit.forEach(function(el){el.style.opacity=seg(s3,.75,1).toFixed(3)});E.fa.forEach(function(el){el.style.opacity=(s3*(1-.5*s4)).toFixed(3)});
    /* step 4: the profile rises under the panel */
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);
    E.bars.forEach(function(el,i){var v=seg(s4,i*.04,.5+i*.04),hh=+el.getAttribute("data-h")*v;el.setAttribute("y",(506-hh).toFixed(1));el.setAttribute("height",hh.toFixed(1))});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
