/* The story scene (DB/BL/BY): WAVR's own process as wavrtechnologies.com (Our Technology) and NSF award 2538242 describe
   it, drawn as ONE continuous fine-line system that fills the frame: humid air flows into a high-surface-area exchanger
   wetted by liquid desiccant; the desiccant drains to a thermal still; freshwater leaves the still and the regenerated
   desiccant returns to the exchanger in a continuous loop. Frame 0 is already complete.
   Step 1 (capture): vapour carried in the air is drawn into the desiccant on the exchanger's fins.
   Step 2 (release): the water-laden desiccant flows to the still, which warms and releases vapour.
   Step 3 (pure water): freshwater drips into the drop; the desiccant flows back round.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var LANES=[170,215,260,305,350];
function lane(y){var d="M40 "+y;for(var x=40;x<214;x+=29)d+="q7.25 -6 14.5 0t14.5 0";return d}
var EXR="M230 130H370V400H230Z";
var TROUGH="M222 400V412Q300 426 378 412V400";
var SUP="M300 419V450H520V400";
var RET="M490 190V92H300V118";
var HEADR="M226 118H374";
var STILL="M470 202Q470 190 482 190H598Q610 190 610 202V388Q610 400 598 400H482Q470 400 470 388Z";
var LIQ="M470 340q17.5 -5 35 0t35 0t35 0t35 0";
var COND="M610 232H672V300";
var DROP="M672 374C664 388 640 414 640 436A32 32 0 0 0 704 436C704 414 680 388 672 374Z";
var NV=14,NS=8,NK=3;
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'24 46 726 520':'24 40 724 524')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="wvGlow"><stop offset="0" stop-color="#7fb6ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fb6ff" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="wvFill"><rect id="wvFr" x="630" y="470" width="84" height="0"/></clipPath></defs>';
  g+='<g id="scBase">';
  LANES.forEach(function(y){g+='<path class="wo sD" d="'+lane(y)+'"/>'});
  g+='<path class="wl sD" d="'+EXR+'"/>';
  for(i=0;i<12;i++){var fx=244+i*10.2;g+='<path class="wo sD" d="M'+fx.toFixed(1)+' 140V390"/>'}
  g+='<path class="wmd sD" d="'+HEADR+'"/><path class="wl sD" d="'+TROUGH+'"/>';
  g+='<path class="wl sD" d="'+SUP+'"/><path class="wl sD" d="'+RET+'"/>';
  g+='<path class="wl sD" d="'+STILL+'"/><path class="wmd sD" d="'+LIQ+'"/>';
  g+='<path class="wl sD" d="'+COND+'"/><path class="wl sD" d="'+DROP+'"/>';
  g+='</g>';
  /* liquid in the still, the warm glow in it, the drop's fill */
  g+='<rect class="liq" x="471" y="341" width="138" height="58"/>';
  g+='<circle class="halo" id="hGlow" cx="540" cy="372" r="74" fill="url(#wvGlow)"/>';
  g+='<path class="fill" d="'+DROP+'" clip-path="url(#wvFill)"/>';
  /* lit copies: the fins while they capture, the pipes while they carry */
  g+='<g id="fins2">';for(i=0;i<12;i++){var fx2=244+i*10.2;g+='<path class="lit" d="M'+fx2.toFixed(1)+' 140V390"/>'}g+='</g>';
  g+='<path class="flow" id="fSup" d="'+SUP+'"/><path class="flow" id="fRet" d="'+RET+'"/><path class="flow" id="fCon" d="'+COND+'"/>';
  /* vapour in the air, vapour in the still, drips */
  g+='<g id="scVap">';for(i=0;i<NV;i++)g+='<circle class="vp" r="2.4" cx="40" cy="170"/>';g+='</g>';
  g+='<g id="scStm">';for(i=0;i<NS;i++)g+='<circle class="vp" r="2.2" cx="540" cy="330"/>';g+='</g>';
  g+='<g id="scDrip">';for(i=0;i<NK;i++)g+='<circle class="dp" r="3" cx="672" cy="306"/>';g+='</g>';
  /* fixed labels, each in clear space (>=8px from every stroke, DR3) */
  if(!mob){
    g+='<text class="t" x="40" y="142">HUMID AIR</text>';
    g+='<text class="t" x="395" y="72" text-anchor="middle">LIQUID DESICCANT</text>';
    g+='<text class="t" x="506" y="174">THERMAL RELEASE</text>';
    g+='<text class="t" x="672" y="500" text-anchor="middle">PURE WATER</text>';
  }else{
    g+='<text class="t" x="40" y="138">HUMID AIR</text>';
    g+='<text class="t" x="736" y="508" text-anchor="end">PURE WATER</text>';
  }
  var ly=SCH-4,lx=40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MOISTURE CAPTURED':'THE DESICCANT CAPTURES MOISTURE FROM THE AIR')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'WATER RELEASED BY HEAT':'A THERMAL PROCESS RELEASES THE WATER')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PURE WATER, LOOP CLOSED':'PURE WATER OUT, THE DESICCANT FLOWS BACK')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),vap:$$("#scVap .vp",svg),stm:$$("#scStm .vp",svg),drip:$$("#scDrip .dp",svg),
    fins:$("#fins2",svg),fS:$("#fSup",svg),fR:$("#fRet",svg),fC:$("#fCon",svg),glow:$("#hGlow",svg),fr:$("#wvFr",svg),
    liq:$(".liq",svg),fill:$(".fill",svg),txt:$$("text.t",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.txt.forEach(function(t){op(t,b)});op(E.liq,b)}
    var w1=seg(p,.03,.1)*(1-seg(p,.3,.37)),w2=seg(p,.34,.42)*(1-seg(p,.63,.7)),w3=seg(p,.66,.74);
    /* 1. vapour rides the air lanes into the exchanger and is taken up on the fins */
    E.vap.forEach(function(el,i){var ln=LANES[i%5],x=40+((p*1400+i*53)%180),y=ln-3.6*Math.sin((x-40)/29*Math.PI*2);
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*w1*Math.min(1,(222-x)/26))});
    op(E.fins,b*w1);
    /* 2. the desiccant runs to the still; the still warms and gives off vapour */
    var dash=(-p*900).toFixed(1);
    E.fS.style.strokeDashoffset=dash;op(E.fS,b*(w2+.6*w3));
    op(E.glow,b*(w2+.45*w3));
    E.stm.forEach(function(el,i){var k=((p*900+i*21)%130)/130;el.setAttribute("cx",(486+i*15.5+Math.sin(k*6+i)*3).toFixed(1));el.setAttribute("cy",(334-k*124).toFixed(1));op(el,b*(w2+.5*w3)*Math.min(1,k*5)*Math.min(1,(1-k)*5))});
    /* 3. freshwater drips into the drop, which fills; the regenerated desiccant flows back to the exchanger */
    E.fC.style.strokeDashoffset=dash;op(E.fC,b*w3);
    E.fR.style.strokeDashoffset=dash;op(E.fR,b*w3);
    E.drip.forEach(function(el,i){var k=((p*700+i*33)%100)/100;el.setAttribute("cy",(306+k*(376-306)).toFixed(1));op(el,b*w3*Math.min(1,k*6)*Math.min(1,(1-k)*6))});
    var fl=sm(seg(p,.72,.96));E.fr.setAttribute("y",(470-fl*98).toFixed(1));E.fr.setAttribute("height",(fl*98).toFixed(1));op(E.fill,b);
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
