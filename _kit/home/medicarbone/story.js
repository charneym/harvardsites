/* the story scene (BL/BY/DB): ONE engraved longitudinal section through a long bone, kept on screen throughout; each step adds
   one part of the MediCarbone device as medicarbone.com/our-technology and NSF awards 2322411/2600002 describe it: the reamed
   intramedullary cavity across a fracture; the two-layer sleeve (porous carbon fabric inside a non-porous polymer layer);
   resin injected and photocured through a diffusive light guide within ten minutes; after healing, the cured polymer broken
   up and removed through a minimally invasive procedure. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?574:592;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 70 800 420" aria-hidden="true">';
  var OT=208,IT=238,IB=332,OB=362,X0=104,X1=472,CY=285;
  g+='<defs><pattern id="mcHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(243,241,238,.16)" stroke-width="1"/></pattern>'+
     '<pattern id="mcBr" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M0 0L12 12M12 0L0 12" stroke="rgba(243,241,238,.42)" stroke-width=".8"/></pattern></defs>';
  /* the bone: a shaft with flared ends, its cortex hatched around the cavity */
  var outer='M'+X0+' '+OT+'H'+X1+'C504 '+OT+' 512 168 552 172C598 176 604 236 600 '+CY+'C604 334 598 394 552 398C512 402 504 '+OB+' '+X1+' '+OB+'H'+X0+'C72 '+OB+' 64 402 24 398C-14 394 -18 334 -16 '+CY+'C-18 236 -14 176 24 172C64 168 72 '+OT+' '+X0+' '+OT+'Z';
  var canal='M'+X0+' '+IT+'H'+X1+'C488 '+IT+' 492 '+(CY-22)+' 492 '+CY+'C492 '+(CY+22)+' 488 '+IB+' '+X1+' '+IB+'H'+X0+'C88 '+IB+' 84 '+(CY+22)+' 84 '+CY+'C84 '+(CY-22)+' 88 '+IT+' '+X0+' '+IT+'Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y="70.5" width="799" height="419"/>';
  g+='<g transform="translate(27.5 0) scale(.862 1)"><path class="hatch" fill-rule="evenodd" d="'+outer+canal+'"/><path class="wl sD" d="'+outer+'"/><path class="wi sD" d="'+canal+'"/>';
  g+='</g><g class="tb"><path class="tbl" d="M548 428h228v52h-228Z M548 454h228"/><text x="558" y="446" class="t">SECTION · LONG BONE</text><text x="558" y="472" class="t s">MEDICARBONE · IM SLEEVE</text></g>';
  g+='</g>';
  function X(x){return 27.5+x*.862}
  /* 1 the cavity across a fracture */
  var fr='M'+X(270)+' '+(OT-2)+'L'+X(282)+' '+(OT+12)+'L'+X(272)+' '+(OT+20)+'L'+X(284)+' '+(IT+2)+'M'+X(286)+' '+(IB-2)+'L'+X(274)+' '+(IB+12)+'L'+X(288)+' '+(IB+20)+'L'+X(278)+' '+(OB+2);
  g+='<g id="sc1"><path class="frac dr" d="'+fr+'"/>'+
     '<path class="ld2 dr" d="M'+X(290)+' '+(OT+8)+'L'+X(330)+' 150H'+(LX-8)+'"/><text x="'+LX+'" y="154" class="t c">FRACTURE</text>'+
     '<path class="ld2 dr" d="M'+X(420)+' '+(CY-30)+'L'+(LX-34)+' 250H'+(LX-8)+'"/><text x="'+LX+'" y="254" class="t c">INTRAMEDULLARY</text><text x="'+LX+'" y="272" class="t c">CAVITY</text>'+
     '<text x="24" y="100" class="a">THE CAVITY</text></g>';
  /* 2 the sleeve: polymer outer layer, carbon fabric inside it, through an entry at the bone end */
  var sl='M'+X(30)+' '+(CY-36)+'H'+X(462)+'Q'+X(476)+' '+(CY-36)+' '+X(476)+' '+(CY-22)+'V'+(CY+22)+'Q'+X(476)+' '+(CY+36)+' '+X(462)+' '+(CY+36)+'H'+X(30);
  var fab='M'+X(34)+' '+(CY-28)+'H'+X(460)+'Q'+X(468)+' '+(CY-28)+' '+X(468)+' '+(CY-20)+'V'+(CY+20)+'Q'+X(468)+' '+(CY+28)+' '+X(460)+' '+(CY+28)+'H'+X(34)+'Z';
  g+='<g id="sc2"><path class="brd" d="'+fab+'"/><path class="slv dr" d="'+sl+'"/>'+
     '<path class="ld2 dr" d="M'+X(380)+' '+(CY+36)+'L'+(LX-34)+' 392H'+(LX-8)+'"/><text x="'+LX+'" y="396" class="t c">POLYMER LAYER</text>'+
     '<path class="ld2 dr" d="M'+X(330)+' '+(CY+18)+'L'+(LX-34)+' 360H'+(LX-8)+'"/><text x="'+LX+'" y="364" class="t c c2">CARBON FABRIC</text>'+
     '<text x="24" y="100" class="a">THE SLEEVE</text></g>';
  /* 3 the cure: resin fills the sleeve; a diffusive light guide carries light along it */
  var rays='';for(var x=60;x<=440;x+=28){rays+='M'+X(x)+' '+(CY-6)+'L'+X(x-6)+' '+(CY-20)+'M'+X(x)+' '+(CY+6)+'L'+X(x-6)+' '+(CY+20)}
  g+='<g id="sc3"><path class="res" d="'+fab+'"/><path class="lg dr" d="M'+X(-8)+' '+CY+'H'+X(452)+'"/><path class="lgr dr" d="'+rays+'"/>'+
     '<path class="ld2 dr" d="M'+X(452)+' '+CY+'L'+(LX-34)+' 320H'+(LX-8)+'"/><text x="'+LX+'" y="324" class="t c c3">LIGHT GUIDE</text>'+
     '<path class="ld2 dr" d="M'+X(200)+' '+(CY-24)+'L'+X(240)+' 98H'+(LX-8)+'"/><text x="'+LX+'" y="102" class="t c c3">RESIN, CURED</text><text x="'+LX+'" y="120" class="t c c3">WITHIN 10 MIN</text>'+
     '<text x="24" y="100" class="a">THE CURE</text></g>';
  /* 4 the removal: the cured polymer broken up and drawn out through the entry */
  var fr2='';[[70,-14],[96,10],[124,-6],[150,14],[176,-12],[64,16],[110,-18],[140,0]].forEach(function(p,i){var x=X(p[0]),y=CY+p[1],s=5+(i%3)*2;fr2+='M'+(x-s)+' '+(y-s*.4)+'L'+(x+s*.3)+' '+(y-s)+'L'+(x+s)+' '+(y+s*.2)+'L'+(x-s*.2)+' '+(y+s)+'Z'});
  g+='<g id="sc4"><path class="frag dr" d="'+fr2+'"/><path class="out dr" d="M'+X(210)+' '+CY+'H'+X(-10)+'M'+X(2)+' '+(CY-7)+'L'+X(-10)+' '+CY+'L'+X(2)+' '+(CY+7)+'"/>'+
     '<path class="ld2 dr" d="M'+X(90)+' '+(CY+24)+'L'+X(120)+' 420H'+X(170)+'"/><text x="'+(X(174)+4)+'" y="424" class="t c c4">MINIMALLY INVASIVE REMOVAL</text>'+
     '<text x="24" y="100" class="a">THE REMOVAL</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    r:$$("#sc3 .res, #sc3 .lg, #sc3 .lgr",svg),t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
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
    E.r.forEach(function(el){el.style.opacity=(1-.88*s[3]).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
