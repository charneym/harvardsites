/* The story scene (BL/BY/DB): one pulse through a Tomco pulsed RF amplifier, in the terms tomco.com.au uses (BT01000-AlphaS:
   100 kHz-30 MHz, 1 kW peak, 20% max duty; very fast pulse rise/fall; +10 dBm overdrive without damage; robust VSWR protection
   and a load mismatch threshold). ONE figure kept on screen: the signal chain (input, gate, amplifier, load with forward and
   reflected couplers) beside the output waveform.
   Step 1 (Input): the low-level RF pulse arrives; drawn small on the chart.
   Step 2 (Gate): the gate signal is drawn.
   Step 3 (Pulse): the amplified burst is traced at full height.
   Step 4 (Protect): forward and reflected levels are marked; the reflected bar stays under the threshold line.
   The waveform is illustrative, not a measured trace. */
var SPX0=320,SPX1=720,SPYC=250,NW=420;
function env(t){var r=.06,a=.18,b=.82;if(t<a||t>b)return 0;if(t<a+r)return (t-a)/r;if(t>b-r)return (b-t)/r;return 1}
function wave(t,amp){return amp*env(t)*Math.sin(t*2*Math.PI*14)}
function wPath(amp){var d='',k;for(k=0;k<=NW;k++){var t=k/NW;d+=(k?'L':'M')+(SPX0+t*(SPX1-SPX0)).toFixed(1)+' '+(SPYC-wave(t,amp)).toFixed(1)}return d}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">TOMCO · PULSED RF AMPLIFIER CHAIN</text>';
    g+='<g id="tsCh"><rect class="wtr" x="40" y="160" width="60" height="44"/><text class="ax" x="70" y="226" text-anchor="middle">RF in</text>'+
       '<rect class="wtr" x="40" y="270" width="60" height="34"/><text class="ax" x="70" y="326" text-anchor="middle">gate</text>'+
       '<path class="cab" d="M128 140L228 232L128 324Z"/><text class="ax" x="160" y="352" text-anchor="middle">amplifier</text>'+
       '<rect class="lns" x="246" y="214" width="36" height="36"/><text class="ax" x="264" y="272" text-anchor="middle">load</text>'+
       '<text class="s3" x="160" y="392" text-anchor="middle">Solid-state, modular</text><path class="pl" d="M40 408H290"/></g>';
    g+='<path class="sc" id="tsGr" d="M100 182H150"/><path class="sc" id="tsGr2" d="M100 287H140V300"/><path class="lb" id="tsOut" d="M228 232H246"/>';
    g+='<text class="ro" id="tsRo" x="40" y="454">LOW LEVEL</text><text class="ro2" id="tsRh" x="40" y="476">INPUT</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">LOW LEVEL</text><text class="ro2" id="tsRh" x="480" y="56">INPUT</text>';
  }
  g+='<path class="gl" d="M320 '+SPYC+'H720"/><path class="axl" d="M320 90V440H720"/>';
  g+='<text class="ax" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'time':'TIME →')+'</text>'+(mob?'':'<text class="ax" x="308" y="96" text-anchor="end">RF</text>');
  g+='<path class="ms ms2" id="tsIn" d="'+wPath(14)+'"/>';
  g+='<path class="gate" id="tsGate" d="M320 430H'+(SPX0+.16*(SPX1-SPX0)).toFixed(1)+'V412H'+(SPX0+.84*(SPX1-SPX0)).toFixed(1)+'V430H720"/>';
  g+='<path class="ms" id="tsMs" d="'+wPath(140)+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="'+SPYC+'"/>';
  g+='<rect class="bar" id="tsFwd" x="658" y="300" width="20" height="100"/><rect class="bar rfl" id="tsRfl" x="694" y="388" width="20" height="12"/>';
  g+='<path class="thr" id="tsThr" d="M694 362H718"/><text class="ax el" id="tsBl" x="668" y="290" text-anchor="middle">FWD</text><text class="ax el" id="tsBl2" x="706" y="354" text-anchor="middle">LIMIT</text>';
  var C=mob?["A LOW-LEVEL PULSE","THE GATE OPENS","FULL POWER OUT","THE LOAD IS WATCHED"]:["A LOW-LEVEL RF PULSE ARRIVES","THE GATE ENABLES THE AMPLIFIER","THE PULSE LEAVES AT FULL POWER","FORWARD AND REFLECTED POWER WATCHED"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),inp:q("#tsIn"),gate:q("#tsGate"),hd:q("#tsHd"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),out:q("#tsOut"),
    fwd:q("#tsFwd"),rfl:q("#tsRfl"),thr:q("#tsThr"),bl:q("#tsBl"),bl2:q("#tsBl2"),cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  function dash(el){if(!el)return 0;var l=el.getTotalLength();el.style.strokeDasharray=l+" "+l;el.style.strokeDashoffset=l;return l}
  var L=dash(E.ms),LI=dash(E.inp),LG=dash(E.gate),lastT="",lastH="";
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(E.gr){op(E.gr,b*seg(p,.03,.1));op(E.gr2,b*seg(p,.28,.34));op(E.out,b*seg(p,.52,.58))}
    var a=seg(p,.04,.22);E.inp.style.strokeDashoffset=(LI*(1-a)).toFixed(1);op(E.inp,b*seg(p,.04,.07)*(1-seg(p,.5,.56)*.7));
    var g=seg(p,.28,.44);E.gate.style.strokeDashoffset=(LG*(1-g)).toFixed(1);op(E.gate,b*seg(p,.28,.31));
    var c=seg(p,.53,.72);E.ms.style.strokeDashoffset=(L*(1-c)).toFixed(1);op(E.ms,b*seg(p,.53,.56));
    E.hd.setAttribute("cx",(SPX0+c*(SPX1-SPX0)).toFixed(1));E.hd.setAttribute("cy",(SPYC-wave(c,140)).toFixed(1));op(E.hd,b*seg(p,.53,.56)*(1-seg(p,.72,.76)));
    op(E.fwd,b*seg(p,.78,.84)*.9);op(E.rfl,b*seg(p,.82,.88)*.9);op(E.thr,b*seg(p,.84,.9));op(E.bl,b*seg(p,.8,.86));op(E.bl2,b*seg(p,.86,.92));
    var ts=p<.27?"LOW LEVEL":p<.52?"GATE ON":p<.77?"1 kW PEAK":"VSWR OK";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"INPUT":p<.52?"ENABLED":p<.77?"20% DUTY MAX":"PROTECTED";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k2){op(cp,b*(k2===0?1:seg(p,w[k2][0],w[k2][0]+.04))*(k2===3?1:(1-seg(p,w[k2][1]-.04,w[k2][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
