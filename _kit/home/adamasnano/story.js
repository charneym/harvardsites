/* The story scene (BL/BY/DB): one ODMR measurement on an NV diamond, in the terms adamasnano.com uses (Quantum Sensing:
   "the relationship between NV fluorescence and its electron spin states"; ODMR Instrumentation: "CW-ODMR spectrum and output
   of parameters (D, E, linewidth, contrast)", "temperature measurement (typical sensitivity limit: 50 mK)", "magnetic field
   vector from analysis of ODMR spectrum"). ONE figure kept on screen: an NV diamond plate under the laser beside the ODMR
   spectrum it produces.
   Step 1 (Excite): green light in, red fluorescence out; the fluorescence level is flat.
   Step 2 (Sweep): the microwave frequency steps across the band; the trace starts.
   Step 3 (Resonance): the fluorescence dips at the zero-field splitting, near 2.87 GHz.
   Step 4 (Read): a magnetic field splits the dip in two.
   The spectrum shape and the dot pattern are illustrative. */
var SPX0=320,SPX1=720,SPY0=150,SPF0=2800,SPF1=2940;
function spX(f){return SPX0+(f-SPF0)/(SPF1-SPF0)*(SPX1-SPX0)}
function spY(f,split){var L=function(m,w,d){return d/(1+Math.pow((f-m)/w,2))};
  var dip=split?L(2850,5,.11)+L(2890,5,.11):L(2870,5.5,.16);return SPY0+(dip*1500)}
function spPath(split){var d='',f;for(f=SPF0;f<=SPF1;f+=1)d+=(f===SPF0?'M':'L')+spX(f).toFixed(1)+' '+spY(f,split).toFixed(1);return d}
function spCum(){var c=[0],f,px=spX(SPF0),py=spY(SPF0,0);for(f=SPF0+1;f<=SPF1;f+=1){var x=spX(f),y=spY(f,0);c.push(c[c.length-1]+Math.hypot(x-px,y-py));px=x;py=y}return c}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">ADÁMAS · ODMR ON AN NV DIAMOND PLATE</text>';
    /* the plate in perspective, with a sparse pattern of NV centres, on a microwave loop */
    g+='<g id="tsCh"><path class="cs" d="M60 300L150 260H290L200 300Z"/><path class="cs2" d="M200 300L290 260V276L200 316Z"/><path class="cab" d="M60 300H200V316H60Z"/>';
    [[100,288],[132,280],[170,286],[196,272],[226,280],[150,270],[118,294],[250,268],[214,290],[176,298]].forEach(function(p){g+='<circle class="nv" cx="'+p[0]+'" cy="'+p[1]+'" r="2.6"/>'});
    g+='<ellipse class="mw" id="tsMw" cx="175" cy="330" rx="110" ry="14"/><text class="ax" id="tsMl" x="175" y="368" text-anchor="middle">microwave loop</text>'+
       '<text class="s3" x="130" y="400" text-anchor="middle">NV diamond plate</text><path class="pl" d="M40 414H300"/></g>';
    /* the green excitation beam down onto the plate and the red fluorescence back up to the detector */
    g+='<path class="gb" id="tsGr" d="M175 70V276"/><path class="rf" id="tsGr2" d="M190 276L250 110"/><rect class="det" x="232" y="82" width="44" height="26"/><text class="ax" x="254" y="74" text-anchor="middle">detector</text>'+
       '<text class="ax" x="166" y="62" text-anchor="end">green laser</text>';
    g+='<text class="ro" id="tsRo" x="40" y="452">2.800 GHz</text><text class="ro2" id="tsRh" x="40" y="474">EXCITING</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">2.800 GHz</text><text class="ro2" id="tsRh" x="470" y="56">EXCITING</text>';
  }
  /* the spectrum: fluorescence against microwave frequency */
  g+='<rect class="band" id="tsBand" x="'+spX(2840).toFixed(1)+'" y="90" width="'+(spX(2900)-spX(2840)).toFixed(1)+'" height="350"/>';
  [[2820,"2.82"],[2870,"2.87"],[2920,"2.92"]].forEach(function(r){var x=spX(r[0]);g+='<path class="gl" d="M'+x.toFixed(1)+' 90V440"/><text class="ax" x="'+x.toFixed(1)+'" y="'+(mob?470:462)+'" text-anchor="middle">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'GHz':'MICROWAVE · GHz')+'</text>'+(mob?'':'<text class="ax" x="308" y="96" text-anchor="end">PL</text>');
  g+='<path class="fl" id="tsFl" d="M'+SPX0+' '+SPY0+'H'+SPX1+'"/>';
  g+='<path class="ms" id="tsMs" d="'+spPath(0)+'"/><path class="ms ms2" id="tsMs2" d="'+spPath(1)+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="150"/>';
  g+='<text class="bl" id="tsBl" x="'+(spX(2870)+14).toFixed(1)+'" y="'+(spY(2870,0)+6).toFixed(1)+'">D ≈ 2.87 GHz</text>';
  g+='<text class="bl" id="tsBl2" x="'+spX(2870).toFixed(1)+'" y="'+(spY(2850,1)+40).toFixed(1)+'" text-anchor="middle">split by B</text>';
  var C=mob?["GREEN IN, RED OUT","SWEEPING THE MICROWAVES","THE RESONANCE DIP","SPLIT BY A FIELD"]:["GREEN EXCITATION · RED FLUORESCENCE","MICROWAVE SWEEP, FLUORESCENCE RECORDED","ODMR DIP AT THE ZERO-FIELD SPLITTING","ZEEMAN SPLITTING · FIELD MEASURED"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),ms2:q("#tsMs2"),fl:q("#tsFl"),hd:q("#tsHd"),band:q("#tsBand"),bl:q("#tsBl"),bl2:q("#tsBl2"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),mw:q("#tsMw"),ml:q("#tsMl"),
    cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  var L=E.ms.getTotalLength(),CU=spCum(),CT=CU[CU.length-1],lastT="",lastH="",GL=E.gr?E.gr.getTotalLength():0,GL2=E.gr2?E.gr2.getTotalLength():0;
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;
  if(E.gr){E.gr.style.strokeDasharray=GL+" "+GL;E.gr2.style.strokeDasharray=GL2+" "+GL2}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the beam goes in and the fluorescence comes out; step 2 on: the microwaves are on */
    if(E.gr){var g1=seg(p,.03,.12),g2=seg(p,.1,.2);E.gr.style.strokeDashoffset=(GL*(1-g1)).toFixed(1);E.gr2.style.strokeDashoffset=(GL2*(1-g2)).toFixed(1);
      op(E.gr,b*seg(p,.02,.05));op(E.gr2,b*seg(p,.1,.13));op(E.mw,b*seg(p,.27,.34));op(E.ml,b*seg(p,.29,.36))}
    op(E.fl,b*seg(p,.08,.16)*(1-seg(p,.28,.34))*.7);
    /* the sweep: the trace runs across the band through steps 2 and 3 */
    var fq=SPF0+(SPF1-SPF0)*seg(p,.28,.68),x=spX(fq),ci=fq-SPF0,i0=Math.min(CU.length-1,Math.floor(ci)),i1=Math.min(CU.length-1,i0+1),f=(CU[i0]+(CU[i1]-CU[i0])*(ci-i0))/CT;
    var sp=seg(p,.77,.88);
    E.ms.style.strokeDashoffset=(L*(1-f)).toFixed(1);op(E.ms,b*seg(p,.28,.31)*(1-sp));op(E.ms2,b*sp);
    E.hd.setAttribute("cx",x.toFixed(1));E.hd.setAttribute("cy",spY(fq,0).toFixed(1));op(E.hd,b*seg(p,.28,.32)*(1-seg(p,.7,.74)));
    var ts=(fq/1000).toFixed(3)+" GHz";if(p>=.52&&p<.77)ts="2.870 GHz";if(p>=.77)ts="2.850 · 2.890";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"EXCITING":p<.52?"SWEEPING":p<.77?"RESONANCE":"FIELD READ";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    op(E.bl,b*seg(p,.54,.6)*(1-sp));op(E.bl2,b*seg(p,.84,.9));op(E.band,b*seg(p,.8,.88)*.9);
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
