/* The story scene (BL/BY/DB): one climatic test on a TAS Series 3 chamber, in the terms tasltd.co.uk uses (Series 3:
   "Thermal & Climatic cycling", "+180°C (+350ºC option)", "-40°C or -75°C (-120ºC option)", "10 to 98%rh"; News: the in-house
   touch-screen HMI with VNC, "chambers can be controlled and data downloaded from any remote location"). ONE figure kept on
   screen: the chamber front with its HMI readout beside the test profile.
   Step 1 (Programme): the setpoint profile appears as a dotted line; the HMI lights.
   Step 2 (Cold): the measured line follows the pull-down to -40 °C; the window frosts.
   Step 3 (Humidity): the climatic hold, with the 10 to 98 %rh band.
   Step 4 (Heat): the ramp to +180 °C and the dwell; the window warms.
   Times and the exact profile shape are illustrative. */
var TPX=[320,350,420,480,520,590,640,720],TPY=[321,321,400,400,321,321,110,110];
function tpY(x){for(var i=1;i<TPX.length;i++){if(x<=TPX[i]){var u=(x-TPX[i-1])/(TPX[i]-TPX[i-1]);return TPY[i-1]+(TPY[i]-TPY[i-1])*u}}return TPY[TPY.length-1]}
function tpT(y){return Math.round(20+(321-y)/(321-110)*160)}
function tsScene(o){
  var g='',mob=o.mob,i,d='M'+TPX[0]+' '+TPY[0];for(i=1;i<TPX.length;i++)d+='L'+TPX[i]+' '+TPY[i];
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">TAS SERIES 3 · CLIMATIC TEST PROFILE</text>';
    /* the chamber front: top panel with the HMI, the door with its window, the lower cabinet */
    g+='<g id="tsCh"><rect class="cab" x="60" y="66" width="190" height="404"/><path class="sm" d="M60 150H250M60 330H250"/>'+
       '<rect class="hmi" x="82" y="84" width="96" height="52"/><rect class="isol" x="216" y="94" width="14" height="24"/>'+
       '<rect class="door" x="70" y="156" width="170" height="168"/><rect class="win" x="108" y="186" width="94" height="104"/>'+
       '<rect class="wt" id="tsWc" x="108" y="186" width="94" height="104"/><rect class="wh" id="tsWh" x="108" y="186" width="94" height="104"/>'+
       '<rect class="hdl" x="224" y="222" width="8" height="36"/><text class="s3" x="155" y="410" text-anchor="middle">SERIES 3</text>'+
       '<path class="pl" d="M40 470H270"/></g>';
    g+='<text class="ro" id="tsRo" x="130" y="108" text-anchor="middle">+20 °C</text><text class="ro2" id="tsRh" x="130" y="127" text-anchor="middle">50 %rh</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">+20 °C</text><text class="ro2" id="tsRh" x="410" y="56">50 %rh</text>';
  }
  /* the profile chart: grid at +180 / +20 / -40, the humidity band, the setpoint (dotted) and the measured line */
  g+='<rect class="band" id="tsBand" x="520" y="90" width="70" height="340"/>'+
     '<text class="bl" id="tsBl" x="555" y="'+(mob?84:82)+'" text-anchor="middle">10–98 %rh</text>';
  [[110,"+180"],[321,"+20"],[400,"−40"]].forEach(function(r){g+='<path class="gl" d="M320 '+r[0]+'H720"/><text class="ax" x="308" y="'+(r[0]+4)+'" text-anchor="end">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" x="720" y="'+(mob?466:460)+'" text-anchor="end">TIME</text><text class="ax" x="308" y="90" text-anchor="end">'+(mob?'':'°C')+'</text>';
  g+='<path class="sp" id="tsSp" d="'+d+'"/><path class="ms" id="tsMs" d="'+d+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="321"/>';
  var C=mob?["PROFILE SET ON THE HMI","PULL-DOWN TO −40 °C","HOLD AT 10–98 %RH","HEAT TO +180 °C"]:["PROFILE PROGRAMMED ON THE TAS HMI","PULL-DOWN TO −40 °C","CLIMATIC HOLD · 10 TO 98 %RH","RAMP AND DWELL AT +180 °C"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:494)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={sp:q("#tsSp"),ms:q("#tsMs"),hd:q("#tsHd"),band:q("#tsBand"),bl:q("#tsBl"),ro:q("#tsRo"),rh:q("#tsRh"),wc:q("#tsWc"),wh:q("#tsWh"),
    cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  var L=E.ms.getTotalLength(),LS=E.sp.getTotalLength(),lastT="",lastH="";
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the setpoint appears; steps 2-4 trace the measured line along it */
    var s1=seg(p,.03,.2);op(E.sp,b*(.25+.75*s1));
    var xs=320;
    if(p>.25){var a=seg(p,.27,.47),c=seg(p,.52,.7),h=seg(p,.77,.95);xs=a<1?lerp(320,482,a):c<1?lerp(482,590,c):lerp(590,720,h)}
    var u=xs<=320?0:(xs>=720?1:null);
    /* length along the polyline up to xs */
    var len=0,i;for(i=1;i<TPX.length;i++){var x0=TPX[i-1],x1=TPX[i],y0=TPY[i-1],y1=TPY[i];if(xs<=x0)break;var xe=Math.min(xs,x1),f=(xe-x0)/(x1-x0);len+=Math.hypot(x1-x0,y1-y0)*f}
    E.ms.style.strokeDashoffset=(L-len*(L/LS)).toFixed(1);op(E.ms,b*seg(p,.25,.28));
    var y=tpY(xs);E.hd.setAttribute("cx",xs.toFixed(1));E.hd.setAttribute("cy",y.toFixed(1));op(E.hd,b*seg(p,.03,.12));
    var T=tpT(y),ts=(T>0?"+":T<0?"−":"")+Math.abs(T)+" °C";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var on3=seg(p,.5,.54)*(1-seg(p,.74,.78)),rh=Math.round(lerp(50,98,seg(p,.52,.62))*(1-seg(p,.74,.78))+lerp(0,10,seg(p,.74,.78))*seg(p,.74,.78)),hs=(p>.5?rh:(p>.25?Math.round(lerp(50,20,seg(p,.27,.47))):50))+" %rh";
    if(p>.78)hs="10 %rh";
    if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    op(E.band,b*on3*.9);op(E.bl,b*on3);
    op(E.wc,.42*b*seg(p,.3,.45)*(1-seg(p,.5,.6)));op(E.wh,.2*b*seg(p,.8,.95));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
