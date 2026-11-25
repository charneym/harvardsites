/* the story scene (BL/BY/DB): ONE engraved myPatch®sl on its adult electrode with a two-channel ECG strip, kept on screen for all three steps.
   Step 1 the recorder snaps into the disposable electrode. Step 2 two channels of ECG record (up to 14 days, IP68: water runs off).
   Step 3 the strip becomes a colour-coded full-disclosure report (a ventricular ectopic beat and a pause are flagged).
   Sources: dms-service.com home, Sales, Electrodes, Holter Scanning Service and FAQ pages. Schematic; shapes and rhythm are illustrative. */
var EK=(function(){
  var X0=150,X1=740,B1=440,B2=500,RR=46;
  /* beat list for channel timing: normal beats, one premature ventricular beat (VE) with its compensatory pause, and one pause */
  var bt=[],x=X0+6,n=0,ve=-1,pa=null;
  while(x<X1-40){var t="n";if(n===4){t="v";ve=x}bt.push([x,t]);
    var nx=x+(t==="v"?RR*1.45:n===3?RR*.62:RR);if(n===8){pa=[x+50,x+RR*2.3];nx=x+RR*2.3}x=nx;n++}
  function trace(base,a){var d="M"+X0+" "+base;bt.forEach(function(b){var x=b[0],y=base;
    if(b[1]==="n")d+="L"+x+" "+y+"q4 "+(-6*a).toFixed(1)+" 8 0L"+(x+16)+" "+y+"L"+(x+18)+" "+(y+4*a).toFixed(1)+"L"+(x+22)+" "+(y-40*a).toFixed(1)+"L"+(x+26)+" "+(y+10*a).toFixed(1)+"L"+(x+29)+" "+y+"L"+(x+34)+" "+y+"q6 "+(-10*a).toFixed(1)+" 12 0";
    else d+="L"+(x+10)+" "+y+"L"+(x+15)+" "+(y-50*a).toFixed(1)+"L"+(x+24)+" "+(y+20*a).toFixed(1)+"L"+(x+30)+" "+y+"q7 "+(12*a).toFixed(1)+" 15 0"});
    return d+"L"+X1+" "+base}
  return {X0:X0,X1:X1,B1:B1,B2:B2,ve:ve,pa:pa,t1:trace(B1,1),t2:trace(B2,.55)};
})();
function scene(){
  var mob=MOBILE(),g='',i;
  var EL="M170 150C170 122 192 104 220 102L505 72C540 69 566 88 572 120L604 292C610 322 590 346 560 348C534 350 516 334 511 310L486 180L226 200C194 203 170 182 170 150Z";
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="40 0 720 540" aria-hidden="true">';
  g+='<defs><pattern id="weave" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r=".9" fill="rgba(246,248,250,.2)"/></pattern>'+
     '<clipPath id="elc"><path d="'+EL+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* the disposable electrode: its nonwoven face (a fine dot weave), outline, two gel contacts and the lead-wire snap */
  g+='<rect class="wv" x="160" y="60" width="460" height="300" fill="url(#weave)" clip-path="url(#elc)"/>';
  g+='<path class="el sD" d="'+EL+'"/>';
  g+='<path class="el2 sD" d="M186 150C186 131 200 119 220 118L500 88C528 86 548 100 554 124L587 290C591 312 578 330 560 331C543 332 531 322 527 305L500 170L228 184C204 186 186 172 186 150Z"/>';
  g+='<circle class="ct sD" cx="216" cy="152" r="16"/><circle class="ct2 sD" cx="216" cy="152" r="9"/>';
  g+='<circle class="ct sD" cx="566" cy="312" r="16"/><circle class="ct2 sD" cx="566" cy="312" r="9"/>';
  g+='<circle class="ct sD" cx="540" cy="252" r="8"/><circle class="ct2 sD" cx="540" cy="252" r="3.4"/>';
  /* the ECG strip: two channel baselines, channel names and the wear window */
  g+='<path class="gl sD" d="M'+EK.X0+' '+EK.B1+'H'+EK.X1+'M'+EK.X0+' '+EK.B2+'H'+EK.X1+'"/>';
  g+='<text class="c" x="60" y="'+(EK.B1+5)+'">CH 1</text><text class="c" x="60" y="'+(EK.B2+5)+'">CH 2</text>';
  g+='<text class="c" x="'+EK.X0+'" y="534">DAY 1</text><text class="c" x="'+EK.X1+'" y="534" text-anchor="end">DAY 14</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* report flags (step 3): a ventricular ectopic beat and a pause, colour-coded as on the full-disclosure report */
  var vx=EK.ve,px=EK.pa;
  g+='<g id="flags"><rect class="fv" x="'+(vx+4)+'" y="'+(EK.B1-58)+'" width="38" height="'+(EK.B2-EK.B1+86)+'"/>'+
     '<rect class="fp" x="'+px[0]+'" y="'+(EK.B1-58)+'" width="'+(px[1]-px[0]-4)+'" height="'+(EK.B2-EK.B1+86)+'"/>'+
     '<text class="a fvt" x="'+(vx+23)+'" y="'+(EK.B1-68)+'" text-anchor="middle">VE</text>'+
     '<text class="a fpt" x="'+((px[0]+px[1]-4)/2).toFixed(0)+'" y="'+(EK.B1-68)+'" text-anchor="middle">PAUSE</text></g>';
  /* the two recorded channels */
  g+='<path class="ecg" id="ecg1" d="'+EK.t1+'"/><path class="ecg e2" id="ecg2" d="'+EK.t2+'"/>';
  /* water running off (IP68) */
  for(i=0;i<6;i++)g+='<path class="dr" data-i="'+i+'" d="M0 -9C3 -4 5 -1 5 2A5 5 0 0 1 -5 2C-5 -1 -3 -4 0 -9Z"/>';
  /* the recorder pod: snaps into the electrode */
  g+='<g id="pod"><circle class="rp" cx="475" cy="138" r="76"/><rect class="pd" x="420" y="70" width="110" height="136" rx="22"/>'+
     '<rect class="pd2" x="428" y="78" width="94" height="120" rx="17"/>'+
     '<path class="hrt" d="M458 132c-6-4-9-7.4-9-11.2 0-2.7 2-4.6 4.5-4.6 2 0 3.6 1.1 4.5 2.8 1-1.7 2.6-2.8 4.6-2.8 2.5 0 4.5 1.9 4.5 4.6 0 3.8-3 7.2-9.1 11.2z"/>'+
     '<rect class="pbt" x="451" y="178" width="48" height="14" rx="7"/></g>';
  g+='</g>';
  /* labels, one set per step, in the clear band above the drawing (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="60" y="44">'+(mob?'ELECTRODE':'DISPOSABLE ELECTRODE')+'</text>'+
     '<path class="ldr" d="M'+(mob?110:120)+' '+(mob?56:54)+'L203 107"/>'+
     (mob?'':'<text class="a" x="740" y="44" text-anchor="end">RECORDER SNAPS IN</text><path class="ldr" d="M660 54L534 96"/>')+'</g>';
  g+='<g id="lb2"><text class="a" x="60" y="44">'+(mob?'UP TO 14 DAYS':'2 CHANNELS · UP TO 14 DAYS')+'</text>'+
     (mob?'':'<text class="a" x="740" y="44" text-anchor="end">IP68 · SHOWER-PROOF</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="60" y="44">'+(mob?'COLOUR-CODED':'COLOUR-CODED FULL DISCLOSURE')+'</text>'+
     (mob?'':'<text class="a" x="740" y="44" text-anchor="end">MOST MAJOR HOLTER SYSTEMS</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .wv",svg),mv:$("#scMove",svg),ecg:dl(".ecg"),pod:$("#pod",svg),rp:$("#pod .rp",svg),
    dr:$$(".dr",svg),flags:$("#flags",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,DX=[440,458,476,494,512,526];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,.03,.16),rp=seg(p,.15,.27),s2=seg(p,.36,.62),wv=seg(p,.37,.43)*(1-seg(p,.6,.66)),s3=seg(p,.7,.82);
    /* step 1: the recorder comes down and snaps in, with one ripple */
    E.pod.setAttribute("transform","translate(0 "+(-64*(1-s1)).toFixed(1)+")");op(E.pod,.15+.85*s1);
    E.rp.setAttribute("r",(70+30*rp).toFixed(1));op(E.rp,rp*(1-rp)*2.4);
    /* step 2: both channels record across the wear window */
    draw(E.ecg,s2);
    E.dr.forEach(function(d,i){var t=(p*7+i*.37)%1,y=6+t*58;d.setAttribute("transform","translate("+DX[i]+" "+y.toFixed(1)+")");op(d,b*wv*Math.min(1,t*5)*(1-seg(t,.7,1)))});
    /* step 3: flagged events on the full-disclosure report */
    op(E.flags,b*s3);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.27,.33)));op(E.l2,b*seg(p,.4,.47)*(1-seg(p,.63,.69)));op(E.l3,b*seg(p,.74,.82));
  };
}
