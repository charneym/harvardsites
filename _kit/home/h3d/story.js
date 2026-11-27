/* The story scene (BL/BY/DB): how one H3D 3D CZT detector answers "what and where", in the terms h3dgamma.com uses
   ("Why H3D CZT is Different": 15 or 10 mm thick CZT, voxel-by-voxel calibration, <1.1% FWHM at 662 keV; H Series:
   Compton imaging 250 to 3000 keV, coded aperture down to 50 keV on the H420). ONE figure kept on screen: the CZT crystal
   with its voxel grid beside the energy spectrum it builds.
   Step 1 (Detect): a gamma ray enters the crystal and interacts; the spectrum starts to fill.
   Step 2 (Locate): the 3D readout fixes each interaction in its voxel (x, y, depth).
   Step 3 (Identify): the full-energy peak at 662 keV names the isotope (Cs-137).
   Step 4 (Image): the Compton cone points back toward the source; the peak is the region of interest.
   The spectrum shape and the interaction points are illustrative. */
var SPX0=320,SPX1=720,SPY0=440,SPE=800;
function spX(E){return SPX0+E/SPE*(SPX1-SPX0)}
function spH(E){var g=function(m,s,h){return h*Math.exp(-.5*Math.pow((E-m)/s,2))};
  var cont=(62+30*Math.pow(Math.min(E,477)/477,3))/(1+Math.exp((E-480)/7));
  return 46*Math.exp(-E/140)+cont+g(184,16,30)+g(662,4,300)+(E>480&&E<640?6:0)}
function spCum(){var c=[0],E,px=spX(10),py=SPY0-spH(10);for(E=12;E<=SPE;E+=2){var x=spX(E),y=SPY0-spH(E);c.push(c[c.length-1]+Math.hypot(x-px,y-py));px=x;py=y}return c}
function spPath(){var d='',E;for(E=10;E<=SPE;E+=2)d+=(E===10?'M':'L')+spX(E).toFixed(1)+' '+(SPY0-spH(E)).toFixed(1);return d}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">H3D · 3D CZT DETECTOR AND SPECTRUM</text>';
    /* the crystal: front face with a 4 x 4 voxel grid, top and side faces in perspective */
    g+='<g id="tsCh"><path class="cs" d="M80 170L120 130H280L240 170Z"/><path class="cs2" d="M240 170L280 130V290L240 330Z"/>'+
       '<rect class="cab" x="80" y="170" width="160" height="160"/>';
    for(i=1;i<4;i++)g+='<path class="sm" d="M'+(80+i*40)+' 170V330M80 '+(170+i*40)+'H240"/>';
    g+='<rect class="vx" id="tsVx" x="120" y="210" width="40" height="40"/><rect class="vx" id="tsVx2" x="200" y="290" width="40" height="40"/>'+
       '<text class="s3" x="160" y="360" text-anchor="middle">CdZnTe · 15 mm</text><path class="pl" d="M40 408H270"/></g>';
    /* the gamma ray, its two interactions, the readout cross-hairs and the Compton cone */
    g+='<path class="gr" id="tsGr" d="M30 92L148 228"/><path class="gr2" id="tsGr2" d="M148 228L218 304"/>'+
       '<path class="xh" id="tsXh" d="M148 170V228H80M218 170V304H240"/><text class="ax" id="tsXl" x="160" y="386" text-anchor="middle">x · y · depth, per voxel</text>'+
       '<path class="cone" id="tsCn" d="M148 228L28 150M148 228L74 66"/><path class="cone2" id="tsCa" d="M28 150Q38 92 74 66"/>'+
       '<circle class="ip" id="tsA" r="6" cx="148" cy="228"/><circle class="ip" id="tsB" r="5" cx="218" cy="304"/>';
    g+='<text class="ro" id="tsRo" x="40" y="452">0 keV</text><text class="ro2" id="tsRh" x="40" y="474">COUNTING</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">0 keV</text><text class="ro2" id="tsRh" x="460" y="56">COUNTING</text>';
  }
  /* the spectrum: axes, energy ticks, the region of interest around the peak, and the measured line */
  g+='<rect class="band" id="tsBand" x="'+(spX(640)).toFixed(1)+'" y="90" width="'+(spX(684)-spX(640)).toFixed(1)+'" height="350"/>';
  [[0,"0"],[200,"200"],[400,"400"],[662,"662"]].forEach(function(r){var x=spX(r[0]);g+='<path class="gl" d="M'+x.toFixed(1)+' 90V440"/><text class="ax" x="'+x.toFixed(1)+'" y="'+(mob?470:462)+'" text-anchor="middle">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" x="720" y="'+(mob?470:482)+'" text-anchor="end">'+(mob?'keV':'ENERGY · keV')+'</text>'+(mob?'':'<text class="ax" x="308" y="96" text-anchor="end">COUNTS</text>');
  g+='<path class="ms" id="tsMs" d="'+spPath()+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="400"/>';
  g+='<text class="bl" id="tsBl" x="'+(spX(662)-12).toFixed(1)+'" y="'+(SPY0-spH(662)-14).toFixed(1)+'" text-anchor="end">662 keV · Cs-137</text>';
  var C=mob?["A GAMMA RAY INTERACTS","3D POSITION, PER VOXEL","PEAK AT 662 KEV","SOURCE DIRECTION"]:["A GAMMA RAY ENTERS THE CZT","EACH INTERACTION LOCATED IN 3D","FULL-ENERGY PEAK · CS-137","COMPTON CONE · SOURCE DIRECTION"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),hd:q("#tsHd"),band:q("#tsBand"),bl:q("#tsBl"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),a:q("#tsA"),b:q("#tsB"),
    vx:q("#tsVx"),vx2:q("#tsVx2"),xh:q("#tsXh"),xl:q("#tsXl"),cn:q("#tsCn"),ca:q("#tsCa"),cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  var L=E.ms.getTotalLength(),CU=spCum(),CT=CU[CU.length-1],lastT="",lastH="",GL=E.gr?E.gr.getTotalLength():0,GL2=E.gr2?E.gr2.getTotalLength():0;
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;
  if(E.gr){E.gr.style.strokeDasharray=GL+" "+GL;E.gr2.style.strokeDasharray=GL2+" "+GL2}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the gamma ray enters and interacts; the spectrum fills from low energy through steps 1 to 3 */
    if(E.gr){var g1=seg(p,.03,.16),g2=seg(p,.27,.36);E.gr.style.strokeDashoffset=(GL*(1-g1)).toFixed(1);E.gr2.style.strokeDashoffset=(GL2*(1-g2)).toFixed(1);
      op(E.gr,b*seg(p,.02,.05));op(E.gr2,b*seg(p,.27,.3));op(E.a,b*seg(p,.14,.2));op(E.b,b*seg(p,.34,.4));
      op(E.vx,b*seg(p,.36,.44)*.9);op(E.vx2,b*seg(p,.4,.48)*.9);op(E.xh,b*seg(p,.38,.46));op(E.xl,b*seg(p,.4,.48));
      op(E.cn,b*seg(p,.77,.88));op(E.ca,b*seg(p,.8,.9))}
    var en=SPE*seg(p,.05,.68),x=spX(Math.max(10,en)),ci=Math.max(0,(en-10)/2),i0=Math.min(CU.length-1,Math.floor(ci)),i1=Math.min(CU.length-1,i0+1),f=(CU[i0]+(CU[i1]-CU[i0])*(ci-i0))/CT;
    E.ms.style.strokeDashoffset=(L*(1-f)).toFixed(1);op(E.ms,b*seg(p,.05,.08));
    E.hd.setAttribute("cx",x.toFixed(1));E.hd.setAttribute("cy",(SPY0-spH(Math.max(10,en))).toFixed(1));op(E.hd,b*seg(p,.05,.1)*(1-seg(p,.7,.74)));
    var ts=Math.round(en)+" keV";if(p>=.52)ts="662 keV";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"COUNTING":p<.52?"3D READOUT":p<.77?"CS-137":"IMAGING";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    op(E.bl,b*seg(p,.52,.58));op(E.band,b*seg(p,.77,.85)*.9);
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
