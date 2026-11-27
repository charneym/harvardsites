/* The story scene (BL/BY/DB): one AOTF-NIR measurement, in the terms brimrose.com uses (AO Devices: "an AOTF is a
   solid-state acousto-optic device that uses radio-frequency (RF) acoustic waves inside a crystal to separate a single
   wavelength of light from a broadband or multi-color source ... without any moving parts"; Luminar 4010: fiber optics
   from a probe or flow cell; applications: drying, blending). ONE figure kept on screen: the AOTF crystal with its RF
   transducer beside the NIR spectrum it builds.
   Step 1 (Light): broadband light from the sample enters the crystal.
   Step 2 (Tune): the transducer launches an acoustic wave; one wavelength leaves at an angle.
   Step 3 (Scan): the RF steps; the spectrum is built wavelength by wavelength.
   Step 4 (Read): the water band is the region of interest, a moisture reading.
   The spectrum shape is illustrative (water bands near 1450 and 1940 nm). */
var SPX0=320,SPX1=720,SPY0=440,SPL0=1100,SPL1=2300;
function spX(l){return SPX0+(l-SPL0)/(SPL1-SPL0)*(SPX1-SPX0)}
function spH(l){var g=function(m,s,h){return h*Math.exp(-.5*Math.pow((l-m)/s,2))};
  return 40+40*(l-SPL0)/(SPL1-SPL0)+g(1200,30,18)+g(1450,45,110)+g(1730,28,30)+g(1940,55,210)+g(2140,60,60)}
function spPath(){var d='',l;for(l=SPL0;l<=SPL1;l+=4)d+=(l===SPL0?'M':'L')+spX(l).toFixed(1)+' '+(SPY0-spH(l)).toFixed(1);return d}
function spCum(){var c=[0],l,px=spX(SPL0),py=SPY0-spH(SPL0);for(l=SPL0+4;l<=SPL1;l+=4){var x=spX(l),y=SPY0-spH(l);c.push(c[c.length-1]+Math.hypot(x-px,y-py));px=x;py=y}return c}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">BRIMROSE · AOTF-NIR MEASUREMENT</text>';
    /* the crystal (a slanted block) with its RF transducer and acoustic absorber */
    g+='<g id="tsCh"><path class="cs" d="M96 196L126 176H256L226 196Z"/><path class="cs2" d="M226 196L256 176V276L226 296Z"/><rect class="cab" x="96" y="196" width="130" height="100"/>'+
       '<rect class="tr" x="96" y="296" width="130" height="16"/><text class="ax" x="161" y="332" text-anchor="middle">RF transducer</text>';
       ;
    for(i=0;i<6;i++)g+='<path class="aw" id="tsW'+i+'" d="M100 '+(286-i*16)+'H222"/>';
    g+='<text class="s3" x="161" y="372" text-anchor="middle">Acousto-optic tunable filter</text><path class="pl" d="M40 392H290"/></g>';
    /* the fiber input (broadband), the transmitted beam and the selected wavelength leaving at an angle */
    g+='<path class="bb" id="tsGr" d="M30 246H96"/><text class="ax" x="30" y="232">sample</text>'+
       '<path class="bt" id="tsT" d="M226 246H290"/><path class="sel" id="tsGr2" d="M226 238L292 212"/><text class="ax" id="tsSl" x="262" y="170">one λ</text>';
    g+='<text class="ro" id="tsRo" x="40" y="452">1100 nm</text><text class="ro2" id="tsRh" x="40" y="474">BROADBAND</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">1100 nm</text><text class="ro2" id="tsRh" x="470" y="56">BROADBAND</text>';
  }
  /* the spectrum: absorbance against wavelength, with the water band as region of interest */
  g+='<rect class="band" id="tsBand" x="'+spX(1840).toFixed(1)+'" y="90" width="'+(spX(2040)-spX(1840)).toFixed(1)+'" height="350"/>';
  [[1200,"1200"],[1600,"1600"],[2000,"2000"]].forEach(function(r){var x=spX(r[0]);g+='<path class="gl" d="M'+x.toFixed(1)+' 90V440"/><text class="ax" x="'+x.toFixed(1)+'" y="'+(mob?470:462)+'" text-anchor="middle">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'nm':'WAVELENGTH · nm')+'</text>'+(mob?'':'<text class="ax" x="308" y="96" text-anchor="end">ABS</text>');
  g+='<path class="ms" id="tsMs" d="'+spPath()+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="400"/>';
  g+='<text class="bl" id="tsBl" x="'+(spX(1940)+0).toFixed(1)+'" y="'+(SPY0-spH(1940)-16).toFixed(1)+'" text-anchor="middle">water band</text>';
  var C=mob?["LIGHT FROM THE SAMPLE","RF SELECTS ONE λ","SCANNING THE NIR","MOISTURE READ"]:["BROADBAND NIR ENTERS THE AOTF","AN ACOUSTIC WAVE SELECTS ONE WAVELENGTH","RF STEPPED · SPECTRUM BUILT","WATER BAND · MOISTURE ON THE LINE"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),hd:q("#tsHd"),band:q("#tsBand"),bl:q("#tsBl"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),t:q("#tsT"),sl:q("#tsSl"),
    w:[0,1,2,3,4,5].map(function(k){return q("#tsW"+k)}),cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  var L=E.ms.getTotalLength(),CU=spCum(),CT=CU[CU.length-1],lastT="",lastH="",GL=E.gr?E.gr.getTotalLength():0,GL2=E.gr2?E.gr2.getTotalLength():0;
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;
  if(E.gr){E.gr.style.strokeDasharray=GL+" "+GL;E.gr2.style.strokeDasharray=GL2+" "+GL2}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(E.gr){var g1=seg(p,.03,.14),g2=seg(p,.3,.4);E.gr.style.strokeDashoffset=(GL*(1-g1)).toFixed(1);E.gr2.style.strokeDashoffset=(GL2*(1-g2)).toFixed(1);
      op(E.gr,b*seg(p,.02,.05));op(E.t,b*seg(p,.12,.18)*.8);op(E.gr2,b*seg(p,.3,.33));op(E.sl,b*seg(p,.36,.42));
      /* the acoustic wave fronts rise from the transducer in step 2 and stay */
      E.w.forEach(function(w,k){op(w,b*seg(p,.27+k*.025,.31+k*.025)*.85)})}
    var lm=SPL0+(SPL1-SPL0)*seg(p,.3,.7),x=spX(lm),ci=(lm-SPL0)/4,i0=Math.min(CU.length-1,Math.floor(ci)),i1=Math.min(CU.length-1,i0+1),f=(CU[i0]+(CU[i1]-CU[i0])*(ci-i0))/CT;
    E.ms.style.strokeDashoffset=(L*(1-f)).toFixed(1);op(E.ms,b*seg(p,.3,.33));
    E.hd.setAttribute("cx",x.toFixed(1));E.hd.setAttribute("cy",(SPY0-spH(lm)).toFixed(1));op(E.hd,b*seg(p,.3,.34)*(1-seg(p,.72,.76)));
    var ts=Math.round(lm/10)*10+" nm";if(p>=.77)ts="1940 nm";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"BROADBAND":p<.52?"RF TUNING":p<.77?"SCANNING":"MOISTURE";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    op(E.bl,b*seg(p,.8,.86));op(E.band,b*seg(p,.78,.86)*.9);
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
