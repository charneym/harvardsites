/* the story scene (DB/BY): ONE engraved schematic of a reflectron time-of-flight mass spectrometer, the instrument family
   Ionwerks builds (MSRI reflectron, ortho-TOF, MCP detectors, TDCx8 timing). The drawing stays on screen; each step moves
   the same three ion packets (light, medium, heavy) along one V-shaped flight path:
   step 1 a pulse leaves the sample (the start signal); step 2 the packets separate by mass down the drift region;
   step 3 they turn in the reflectron's ring stack, each mass packet spread out in energy and then refocused; step 4 they
   reach the MCP detector one mass after another and the spectrum inset gains a peak at each flight time. */
var TOF={S:[118,392],T:[664,276],D:[118,160]};
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* the vacuum housing: drift region and reflectron */
  g+='<path class="sD bl" d="M150 104H760V448H150"/>';
  g+='<path class="sD kb" d="M150 104V448"/>';
  /* sample plate and the extraction grids */
  g+='<path class="sD bl" d="M66 352H84V432H66Z"/><path class="sD ht" d="M70 360l10 -6M70 372l10 -6M70 384l10 -6M70 396l10 -6M70 408l10 -6M70 420l10 -6"/>';
  g+='<path class="sD grid" d="M104 350V434M126 350V434"/>';
  /* the pulsed primary beam (alkali ions or a laser) coming in at an angle */
  g+='<path class="sD pb" id="pbeam" d="M18 468L80 404"/><path class="pbh" id="pbh" d="M80 404l-12 3l7 7Z"/>';
  /* reflectron: a stack of rings at rising voltage */
  var rings='';for(var i=0;i<11;i++){var x=574+i*16;rings+='M'+x+' 128V188M'+x+' 364V424'}
  g+='<path class="sD rg" d="'+rings+'"/>';
  /* the MCP detector: a chevron pair of plates and the anode */
  g+='<path class="sD mcp" d="M86 120H96V200H86ZM100 120H110V200H100Z"/><path class="sD bl" d="M66 124H76V196H66Z"/>';
  /* the timing chain: start from the source pulse, stop from the anode, into the TDC */
  g+='<path class="sD kb" d="M71 124V82H196M75 352V300H30V50H239V66"/><path class="sD bl" d="M196 66H282V98H196Z"/>';
  g+='<text x="239" y="87" text-anchor="middle" class="t">TDCx8</text>';
  g+='<text x="140" y="44" class="t s dsk">START</text><text x="120" y="77" class="t s dsk">STOP</text>';
  /* labels */
  g+='<text x="64" y="458" class="t">SAMPLE</text>';
  g+='<text x="654" y="214" text-anchor="middle" class="t">REFLECTRON</text>';
  g+='<text x="128" y="222" class="t">MCP DETECTOR</text>';
  g+='<text x="360" y="438" text-anchor="middle" class="t s dsk">FIELD-FREE DRIFT</text>';
  /* the spectrum inset */
  g+='<path class="tbl" d="M300 470H776V544H300Z"/><path class="sD kb" d="M312 532H764"/><text x="300" y="464" class="t">MASS SPECTRUM</text><text x="776" y="464" text-anchor="end" class="t s dsk">FLIGHT TIME →</text>';
  g+='</g>';
  /* the flight path, drawn faintly as the ions travel it */
  g+='<path id="path1" class="fp" d="M'+TOF.S.join(" ")+'L'+TOF.T.join(" ")+'L'+TOF.D.join(" ")+'"/>';
  /* three packets: light, medium, heavy */
  var cls=["m1","m2","m3"];
  g+='<g id="ions">';for(var m=0;m<3;m++)for(var k=0;k<4;k++)g+='<circle class="ion '+cls[m]+'" r="'+(3.2+m*1.2)+'" cx="'+TOF.S[0]+'" cy="'+TOF.S[1]+'"/>';g+='</g>';
  g+='<g id="pks"><path class="pk m1" d="M0 0"/><path class="pk m2" d="M0 0"/><path class="pk m3" d="M0 0"/></g>';
  g+='<g id="pkl"><text class="t m1t" x="0" y="0" text-anchor="middle">LIGHT</text><text class="t m3t" x="0" y="0" text-anchor="middle">HEAVY</text></g>';
  /* step captions */
  g+='<text id="cap1" x="320" y="58" class="a">A PULSE LEAVES THE SAMPLE</text>';
  g+='<text id="cap2" x="320" y="58" class="a">SAME ENERGY, DIFFERENT SPEEDS</text>';
  g+='<text id="cap3" x="320" y="58" class="a">TURNED AND REFOCUSED</text>';
  g+='<text id="cap4" x="320" y="58" class="a">EACH ARRIVAL TIMED</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase text, #scBase .tbl, #pbh",svg),ions:$$("#ions circle",svg),pks:$$("#pks path",svg),
    pkl:$$("#pkl text",svg),fp:$("#path1",svg),cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var FPL=E.fp.getTotalLength();E.fp.style.strokeDasharray=FPL+" "+FPL;
  var S=TOF.S,T=TOF.T,D=TOF.D,L1=Math.hypot(T[0]-S[0],T[1]-S[1]),L2=Math.hypot(T[0]-D[0],T[1]-D[1]);
  var V=[1.3,1.0,.78];                      /* relative speeds, light to heavy (v ~ 1/sqrt(m)) */
  var J=[-1,-.35,.35,1];                     /* energy spread within each packet */
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function at(u){/* a point along the V path, u in [0,1] */var d=u*(L1+L2);if(d<=L1){var f=d/L1;return [S[0]+(T[0]-S[0])*f,S[1]+(T[1]-S[1])*f,(T[0]-S[0])/L1,(T[1]-S[1])/L1]}
    var f2=(d-L1)/L2;return [T[0]+(D[0]-T[0])*f2,T[1]+(D[1]-T[1])*f2,(D[0]-T[0])/L2,(D[1]-T[1])/L2]}
  function peak(i,h){var x=312+452*(.16+.62*(1/V[i]-1/V[0])/(1/V[2]-1/V[0])),w=10+i*3,y0=532,d='M'+(x-w*2.2).toFixed(1)+' '+y0;
    for(var k=-22;k<=22;k++){var xx=x+k*w/10,yy=y0-h*30*Math.exp(-Math.pow(k/9,2));d+='L'+xx.toFixed(1)+' '+yy.toFixed(1)}return [d,x]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* the clock: 0 at the pulse, running through the steps */
    var tau=.36*s2+.32*s3+.9*s4;
    E.fp.style.strokeDashoffset=(FPL*(1-Math.min(1,tau*1.1))).toFixed(1);E.fp.style.opacity=(b*.9).toFixed(3);
    var n=0;
    for(var m=0;m<3;m++){
      var u=Math.min(1,tau*V[m]),arrived=tau*V[m]>=1;
      /* the energy spread opens along the first leg and is refocused by the reflectron at the detector */
      var spread=(u<.5?u*2:(1-u)*2)*16;
      for(var k=0;k<4;k++){var el=E.ions[n++],uu=Math.max(0,Math.min(1,u+J[k]*spread/(L1+L2)*(u<.5?1:-.15))),q=at(uu),off=J[k]*3*(1-u);
        el.setAttribute("cx",(q[0]-q[3]*off).toFixed(1));el.setAttribute("cy",(q[1]+q[2]*off).toFixed(1));
        el.style.opacity=(b*(s1>0?1:0)*Math.min(1,s1*1.4)*(arrived?0:1)).toFixed(3)}
      var h=arrived?Math.min(1,(tau*V[m]-1)*6):0,pk=peak(m,h*(m===1?.75:m===2?.9:1));E.pks[m].setAttribute("d",pk[0]);E.pks[m].style.opacity=(b*(h>0?1:0)).toFixed(3);
      if(m===0){E.pkl[0].setAttribute("x",pk[1].toFixed(1));E.pkl[0].setAttribute("y","494");E.pkl[0].style.opacity=(b*h).toFixed(3)}
      if(m===2){E.pkl[1].setAttribute("x",pk[1].toFixed(1));E.pkl[1].setAttribute("y","494");E.pkl[1].style.opacity=(b*h).toFixed(3)}
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
