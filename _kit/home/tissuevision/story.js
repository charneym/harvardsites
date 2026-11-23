/* The story scene (DB/BL): TissueVision's own method, Serial Two-Photon Tomography on the TissueCyte (tissuevision.com:
   "These automated imaging systems integrate serial sectioning with 2-photon multichannel imaging to acquire full volumetric
   datasets"; "Simple Agar Embedding", "4th Gen FlexureSlice Microtome"; "it saves each tissue section for secondary analyses
   that can be mapped back onto the 3D model"; registration to the Allen Mouse Brain Reference Atlas), drawn as ONE
   continuous fine-line scene that fills the frame: a whole mouse brain embedded in an agar block under the two-photon
   objective, and on the right the stack of saved sections. Frame 0 is already complete.
   Step 1 (image): the focal cone reaches the block face and the face is imaged tile by tile.
   Step 2 (section): the microtome blade crosses the block face and each imaged section lifts onto the stack.
   Step 3 (rebuild): the sections align into one 3D dataset and the atlas regions draw in.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
/* the agar block: front face x 60..340, y 300..470; depth offset (70,-45) */
var BLK=[[60,300],[340,300],[410,255],[130,255]];
var BLOCK="M60 300H340V470H60Z M60 300L130 255H410L340 300 M340 470L410 425V255";
/* a whole mouse brain seen from the side, inside the block (olfactory bulb left, cerebellum right) */
var BRAIN="M98 402C94 386 104 372 120 370C130 352 156 334 192 326C232 318 270 324 292 344C308 358 316 378 312 398C322 404 324 420 314 430C302 444 278 446 262 440C240 448 206 450 176 444C152 440 130 432 118 420C106 418 100 412 98 402Z";
var BRAIN2="M292 344C282 370 280 404 288 438 M120 370C126 384 126 404 118 420 M150 398C190 392 236 394 280 404";
/* the two-photon objective above the block face, focused at its centre (235,278) */
var OBJ="M205 60H265V160H205Z M205 160L218 198H252L265 160 M205 84H265 M205 92H265";
var CONE="M220 198L235 276L250 198Z";
/* the microtome blade, at rest right of the block face */
var BLADE="M424 290H484L468 300H408Z";
/* the section stack, top right: section i sits at (470, 330-24i), a 170-wide slab seen in perspective */
var NSEC=8,SX=502,SY=330,SDY=24;
function slab(x,y){return "M"+x+" "+y+"h170l50 -34h-170z"}
var COR="M-55 0C-55 -30 -30 -35 -4 -30L0 -26L4 -30C30 -35 55 -30 55 0C55 22 40 34 22 34C12 34 6 30 0 34C-6 30 -12 34 -22 34C-40 34 -55 22 -55 0Z";
var ATL="M0 -26V34 M-42 -4C-40 -20 -22 -25 -5 -21 M42 -4C40 -20 22 -25 5 -21 M-30 6C-18 14 -8 14 0 10C8 14 18 14 30 6";
function lerp(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
function tile(i,j,n,m){var u0=i/n,u1=(i+1)/n,v0=j/m,v1=(j+1)/m;
  function P(u,v){var f=lerp(BLK[0],BLK[1],u),b=lerp(BLK[3],BLK[2],u);return lerp(f,b,v)}
  var a=P(u0,v0),b=P(u1,v0),c=P(u1,v1),d=P(u0,v1);
  return "M"+a.map(Math.round).join(" ")+"L"+b.map(Math.round).join(" ")+"L"+c.map(Math.round).join(" ")+"L"+d.map(Math.round).join(" ")+"Z"}
var TN=5,TM=3;
function storyScene(o){
  var g='',i,j,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'44 44 690 516':'28 36 704 524')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+BLOCK+'"/>';
  g+='<path class="wl sD" d="'+BRAIN+'"/><path class="wo sD" d="'+BRAIN2+'"/>';
  g+='<path class="wl sD" d="'+OBJ+'"/>';
  g+='<path class="wmd sD" d="'+BLADE+'" id="blade"/>';
  g+='</g>';
  /* the block face imaged tile by tile */
  g+='<g id="scTiles">';for(j=0;j<TM;j++)for(i=0;i<TN;i++)g+='<path class="tl" d="'+tile(i,j,TN,TM)+'"/>';g+='</g>';
  g+='<path class="cone" id="cone" d="'+CONE+'"/><circle class="fp" id="fp" cx="235" cy="278" r="3.4"/>';
  /* the section stack: empty slots first, then the saved sections lift into them */
  g+='<g id="scSlots">';for(i=0;i<NSEC;i++)g+='<path class="slot" d="'+slab(SX,SY-i*SDY)+'"/>';g+='</g>';
  g+='<g id="scSec">';for(i=0;i<NSEC;i++){var x=SX,y=SY-i*SDY,cx=x+110,cy=y-17;
    g+='<g class="sec" data-i="'+i+'"><path class="sl" d="'+slab(x,y)+'"/><g transform="matrix(.92 0 -.62 .46 '+cx+' '+cy+')"><path class="co" d="'+COR+'"/><path class="at" d="'+ATL+'"/></g></g>'}
  g+='</g>';
  /* labels: each clear of every stroke (DR3) */
  if(!mob){
    g+='<g id="lObj"><text class="t" x="190" y="100" text-anchor="end">TWO-PHOTON</text><text class="t" x="190" y="116" text-anchor="end">OBJECTIVE</text></g>';
    g+='<g id="lBlk"><text class="t" x="60" y="500">WHOLE BRAIN IN AGAR</text></g>';
    g+='<g id="lCut"><text class="t" x="60" y="500">FLEXURESLICE MICROTOME</text></g>';
    g+='<g id="lSec"><text class="t" x="502" y="366">SECTIONS SAVED FOR</text><text class="t" x="502" y="382">SECONDARY ANALYSIS</text></g>';
    g+='<g id="l3d"><text class="t" x="502" y="366">ALIGNED 3D DATASET,</text><text class="t" x="502" y="382">REGISTERED TO AN ATLAS</text></g>';
  }else{g+='<g id="lObj"></g><g id="lBlk"></g><g id="lCut"></g><g id="lSec"></g><g id="l3d"></g>'}
  var ly=SCH-8,lx=mob?56:60;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IMAGE THE BLOCK FACE':'IMAGE THE BLOCK FACE, TILE BY TILE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CUT AND SAVE A SECTION':'CUT A SECTION AND SAVE IT, THEN REPEAT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'REBUILD THE WHOLE ORGAN':'REBUILD THE WHOLE ORGAN IN 3D')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),tiles:$$("#scTiles .tl",svg),secs:$$("#scSec .sec",svg),slots:$("#scSlots",svg),
    cone:$("#cone",svg),fp:$("#fp",svg),blade:$("#blade",svg),
    lObj:$("#lObj",svg),lBlk:$("#lBlk",svg),lCut:$("#lCut",svg),lSec:$("#lSec",svg),l3d:$("#l3d",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var ats=E.secs.map(function(s){return $(".at",s)}),cos=E.secs.map(function(s){return $(".co",s)});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1. the focal cone reaches the face; tiles light up in a raster, row by row */
    op(E.cone,b*seg(p,.02,.1)*(1-.7*seg(p,.36,.44)));op(E.fp,b*seg(p,.06,.12)*(1-seg(p,.36,.44)));
    var nT=E.tiles.length;
    E.tiles.forEach(function(el,i){var f=seg(s1,i/nT*.85,i/nT*.85+.15);op(el,b*f*(1-.75*s2))});
    op(E.lObj,b*seg(p,.06,.14)*(1-seg(p,.34,.4)));op(E.lBlk,b*seg(p,.1,.18)*(1-seg(p,.34,.4)));
    /* 2. the blade crosses the face, sections lift onto the stack one by one */
    var bx=-400*sm(seg(p,.38,.52))*(1-sm(seg(p,.54,.62)));if(E.blade)E.blade.setAttribute("transform","translate("+bx.toFixed(1)+" 0)");
    E.secs.forEach(function(el,i){var f=sm(seg(p,.4+i*.025,.5+i*.025)),tx=SX+110,ty=SY-i*SDY-17;
      var dx=(235-tx)*(1-f),dy=(278-ty)*(1-f)-Math.sin(f*Math.PI)*40;
      el.setAttribute("transform","translate("+dx.toFixed(1)+" "+dy.toFixed(1)+")");op(el,b*Math.min(1,f*3))});
    op(E.slots,b*(1-seg(p,.6,.7)));
    op(E.lCut,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.lSec,b*seg(p,.5,.58)*(1-seg(p,.64,.7)));
    /* 3. one aligned dataset: the outlines take the accent and the atlas regions draw in */
    ats.forEach(function(el,i){op(el,b*seg(p,.7+i*.015,.8+i*.015))});
    cos.forEach(function(el){el.classList.toggle("on",s3>.15)});
    op(E.l3d,b*seg(p,.78,.86));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
