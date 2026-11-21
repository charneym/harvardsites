/* the story scene (DB): ONE engraved schematic of the AutoPlexer principle as Cascade Metrix and its NIH abstract describe it.
   Step 1 the closed loop is connected to the patient's central venous line; step 2 blood is drawn automatically along the
   channel into the flow cell and fills the three sensor wells; step 3 the whole-blood sensors read lactate, glucose and
   hematocrit and the three trends draw; step 4 the sample continues round the loop and back to the patient (no blood lost). */
var LOOP="M96 470V200H640Q660 200 660 220V330Q660 350 640 350H126V470";
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var W=[330,450,570],LB=["LACTATE","GLUCOSE","HCT"];
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* the flow cell body, its electrode leads to the edge contacts, and the hollow channel */
  g+='<path class="sD bl" d="M220 150H680V400H220Z"/>';
  g+='<path class="sD kb" d="M232 162H668V388H232Z"/>';
  W.forEach(function(x){g+='<path class="sD kb" d="M'+x+' 174V150M'+(x-18)+' 182L'+(x-30)+' 150M'+(x+18)+' 182L'+(x+30)+' 150"/>'});
  g+='<path class="ch0" d="'+LOOP+'"/><path class="ch1" d="'+LOOP+'"/>';
  W.forEach(function(x){g+='<circle class="sD gr" cx="'+x+'" cy="200" r="26"/>'});
  /* catheter hub at the patient end */
  g+='<path class="sD gr" d="M80 470H142V500H80Z"/><path class="sD kb" d="M111 500V536"/>';
  /* readout panels */
  [220,380,540].forEach(function(x,i){g+='<path class="tbl" d="M'+x+' 430H'+(x+140)+'V520H'+x+'Z"/><text x="'+(x+10)+'" y="452" class="t">'+LB[i]+'</text>'});
  g+='<text x="156" y="492" class="t">CENTRAL LINE</text>';
  g+='<g class="tb"><text x="776" y="546" text-anchor="end" class="t">CLOSED-LOOP SAMPLING · SCHEMATIC</text></g>';
  g+='</g>';
  /* the blood: drawn along the loop with the scroll */
  g+='<path id="bld" class="bld" d="'+LOOP+'"/>';
  W.forEach(function(x,i){g+='<circle class="wl" id="wl'+i+'" cx="'+x+'" cy="200" r="20"/><circle class="sr" id="sr'+i+'" cx="'+x+'" cy="200" r="34"/>'});
  /* trends in the panels */
  var TR=["M230 505C256 503 270 494 290 488S326 470 350 466","M230 480C250 490 266 474 284 482S322 470 350 476","M230 486C258 486 280 488 300 487S332 489 350 488"];
  g+='<g id="sc3">'+[220,380,540].map(function(x,i){return '<path class="trd dr" transform="translate('+(x-220)+' 0)" d="'+TR[i]+'"/>'}).join("")+'</g>';
  /* flow direction chevrons */
  g+='<g id="chv"><path class="chv" d="M89 330L96 320L103 330M200 193L210 200L200 207"/></g>';
  g+='<g id="chv2"><path class="chv" d="M600 343L590 350L600 357M119 410L126 420L133 410"/><text x="156" y="420" class="a">NO BLOOD LOST</text></g>';
  g+='<text id="cap1" x="40" y="58" class="a">ATTACHED TO THE CENTRAL LINE</text>';
  g+='<text id="cap2" x="40" y="58" class="a">SAMPLED ON SCHEDULE</text>';
  g+='<text id="cap3" x="40" y="58" class="a">MEASURED IN WHOLE BLOOD</text>';
  g+='<text id="cap4" x="40" y="58" class="a">RETURNED TO THE PATIENT</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase>text, #scBase .tbl, #scBase .ch0, #scBase .ch1",svg),
    bld:$("#bld",svg),wl:[0,1,2].map(function(i){return $("#wl"+i,svg)}),sr:[0,1,2].map(function(i){return $("#sr"+i,svg)}),
    tr:dl("#sc3 .dr"),g3:$("#sc3",svg),chv:$("#chv",svg),chv2:$("#chv2",svg),cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var BL=E.bld.getTotalLength();E.bld.style.strokeDasharray=BL+" "+BL;
  /* where along the loop each well sits (fraction of the length) */
  var FW=[(270+234)/BL,(270+354)/BL,(270+474)/BL],F2=(270+520)/BL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: a short column of blood at the hub; step 2 it runs up and over the wells; step 4 round and back */
    var pr=.06*b+(F2-.06)*s2+(1-F2)*s4;
    E.bld.style.strokeDashoffset=(BL*(1-pr)).toFixed(1);E.bld.style.opacity=b.toFixed(3);
    E.wl.forEach(function(el,i){el.style.opacity=(b*Math.max(0,Math.min(1,(pr-FW[i])*BL/30))).toFixed(3)});
    E.chv.style.opacity=(b*(s2>0?1:0)*(1-s4*.6)).toFixed(3);
    /* step 3: the sensor rings light one after another and the trends draw */
    E.sr.forEach(function(el,i){var v=Math.max(0,Math.min(1,s3*3-i));el.style.opacity=(b*v*(1-.5*s4)).toFixed(3)});
    draw(E.tr,s3);E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);
    E.chv2.style.opacity=(b*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
