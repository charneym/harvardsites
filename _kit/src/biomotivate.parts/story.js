/* The story scene (DB/BY): Biomotivate's own mechanism, as NIH RePORTER and biomotivate.com describe it ("combine
   physiological and behavioral data from disparate sources in order to predict when an individual is at risk of early
   departure from OUD treatment ... displayed in a user-friendly manner so that providers can ... intervene"; focus areas
   "Emotion and Stress Data Analysis", "Data Viz and Wrist Wearable Devices"). ONE fine-line scene that fills the frame:
   a wrist wearable on a forearm (left) and a risk chart (right) with its axes and threshold. Frame 0 is already complete.
   Step 1 (sense): the band's sensor lights and a heart-rate / stress trace runs out of it.
   Step 2 (predict): the predicted risk curve draws across the chart and rises toward the threshold.
   Step 3 (support): where the curve crosses the threshold a marker rings and an alert goes to the care team.
   Every label keeps clear space from every stroke (DR3). Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var BAND_T="M100 300A150 58 0 0 0 400 300",BAND_B="M100 346A150 58 0 0 0 400 346",BAND_L="M100 300V346",BAND_R="M400 300V346";
var ARM=["M114 324C117 250 121 180 127 100","M386 324C383 250 379 180 373 100","M112 369C110 420 107 460 104 500","M388 369C390 420 393 460 396 500"];
var MOD="M198 349Q250 360 302 349L304 405Q250 417 196 405Z",SCR="M210 358Q250 367 290 358L291 396Q250 406 209 396Z";
var AXY="M440 300V122",AXX="M440 300H724",THR="M440 172H724";
var RISK="M444 286C520 282 566 252 604 214S668 150 720 132";
function wavePath(){var d="M418 380",x;for(x=420;x<=724;x+=2){var m=(x-418)%46,a=12+14*(x-418)/306;
  var y=380-a*Math.exp(-Math.pow((m-14)/3.2,2))+a*.32*Math.exp(-Math.pow((m-21)/3.6,2))-a*.18*Math.exp(-Math.pow((m-34)/6,2));d+="L"+x+" "+y.toFixed(1)}return d}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'72 56 664 504':'64 24 660 536')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="armG" gradientUnits="userSpaceOnUse" x1="0" y1="96" x2="0" y2="500"><stop offset="0" stop-color="#f4f0e7" stop-opacity="0"/><stop offset=".26" stop-color="#f4f0e7" stop-opacity=".5"/><stop offset=".74" stop-color="#f4f0e7" stop-opacity=".5"/><stop offset="1" stop-color="#f4f0e7" stop-opacity="0"/></linearGradient>'+
     '<radialGradient id="gLed"><stop offset="0" stop-color="#f08b77" stop-opacity=".75"/><stop offset="1" stop-color="#f08b77" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gAl"><stop offset="0" stop-color="#e05a47" stop-opacity=".45"/><stop offset="1" stop-color="#e05a47" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  ARM.forEach(function(d){g+='<path class="arm sD" d="'+d+'"/>'});
  g+='<path class="wl sD" d="'+BAND_T+'"/><path class="wl sD" d="'+BAND_B+'"/><path class="wl sD" d="'+BAND_L+'"/><path class="wl sD" d="'+BAND_R+'"/>';
  g+='<path class="mod sD" d="'+MOD+'"/><path class="wo sD" d="'+SCR+'"/>';
  g+='<path class="ax sD" d="'+AXY+'"/><path class="ax sD" d="'+AXX+'"/>';
  g+='</g>';
  g+='<path class="thr" id="scThr" d="'+THR+'"/>';
  g+='<circle id="scLedG" cx="250" cy="381" r="34" fill="url(#gLed)" opacity="0"/><circle class="led" id="scLed" cx="250" cy="381" r="4"/>';
  g+='<path class="wv" id="scWave" d="'+wavePath()+'"/>';
  g+='<path class="rk" id="scRisk" d="'+RISK+'"/>';
  g+='<circle id="scAlG" cx="0" cy="172" r="40" fill="url(#gAl)" opacity="0"/><circle class="ring" id="scRing" cx="0" cy="172" r="12"/><circle class="mk2" id="scMk" cx="0" cy="172" r="5"/>';
  g+='<path class="ld" id="scAlL" d="M0 0"/>';
  if(!mob){
    g+='<text class="t" id="lWear" x="250" y="448" text-anchor="middle">WRIST WEARABLE</text>';
    g+='<text class="t" id="lHr" x="430" y="430">HEART RATE · STRESS</text>';
    g+='<text class="t" id="lAx" x="440" y="326">RISK OF EARLY DEPARTURE, OVER TIME</text>';
    g+='<text class="t q" id="lThr" x="448" y="160">HIGHER RISK</text>';
    g+='<text class="t w" id="lAl" x="724" y="92" text-anchor="end">ALERT THE CARE TEAM</text>';
  }else{
    g+='<text class="t" id="lWear" x="250" y="456" text-anchor="middle">WEARABLE</text>';
    g+='<g id="lHr"></g><g id="lAx"></g>';
    g+='<text class="t q" id="lThr" x="460" y="158">HIGHER RISK</text>';
    g+='<text class="t w" id="lAl" x="724" y="96" text-anchor="end">ALERT CARE TEAM</text>';
  }
  var ly=SCH-6,lx=mob?84:76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SENSE: SIGNALS FROM THE WRIST':'THE BAND CAPTURES PHYSIOLOGICAL SIGNALS OF STRESS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PREDICT: RISK RISING':'MACHINE LEARNING PREDICTS RISING RISK')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SUPPORT: ACT IN TIME':'PROVIDERS STEP IN BEFORE THE PATIENT LEAVES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var wave=$("#scWave",svg),risk=$("#scRisk",svg);
  var E={base:dl("#scBase .sD"),wave:[wave,wave.getTotalLength()],risk:[risk,risk.getTotalLength()],thr:$("#scThr",svg),led:$("#scLed",svg),ledG:$("#scLedG",svg),
    alG:$("#scAlG",svg),ring:$("#scRing",svg),mk:$("#scMk",svg),alL:$("#scAlL",svg),
    lWear:$("#lWear",svg),lHr:$("#lHr",svg),lAx:$("#lAx",svg),lThr:$("#lThr",svg),lAl:$("#lAl",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  [E.wave,E.risk].forEach(function(a){a[0].style.strokeDasharray=a[1]+" "+a[1];a[0].style.strokeDashoffset=a[1]});
  /* where the predicted risk crosses the threshold (y=172) */
  var cx=600;(function(){var lo=0,hi=E.risk[1];for(var i=0;i<30;i++){var m=(lo+hi)/2;if(risk.getPointAtLength(m).y>172)lo=m;else hi=m}cx=risk.getPointAtLength(lo).x})();
  [E.alG,E.ring,E.mk].forEach(function(el){el.setAttribute("cx",cx.toFixed(1))});
  E.alL.setAttribute("d","M"+cx.toFixed(1)+" 154V108");var aL=E.alL.getTotalLength();E.alL.style.strokeDasharray=aL+" "+aL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.9);
    op(E.thr,b);op(E.lWear,b);op(E.lAx,b);op(E.lThr,b);
    /* 1. the sensor lights; the trace runs out of the band */
    var pu=.5+.5*Math.sin(p*60);op(E.led,b*(.35+.65*s1));op(E.ledG,b*s1*(.55+.45*pu)*(1-.5*s3));
    E.wave[0].style.strokeDashoffset=(E.wave[1]*(1-s1)).toFixed(1);op(E.wave[0],b);op(E.lHr,b*seg(p,.14,.24));
    /* 2. the predicted risk curve draws and rises */
    E.risk[0].style.strokeDashoffset=(E.risk[1]*(1-s2)).toFixed(1);op(E.risk[0],b);
    /* 3. the crossing rings; the alert rises to the care team */
    op(E.mk,b*seg(p,.66,.72));var r=seg(p,.7,.82);op(E.ring,b*r);E.ring.setAttribute("r",(22-10*r).toFixed(2));op(E.alG,b*s3);
    E.alL.style.strokeDashoffset=(aL*(1-seg(p,.74,.84))).toFixed(1);op(E.alL,b);op(E.lAl,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
