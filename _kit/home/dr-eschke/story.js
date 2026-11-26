/* The story scene (BL/BY/DB): one test cycle on a CT3xx combination tester, in the steps dr-eschke.de names (CT350 Comet T:
   "ICT-Testpunkte max. 2736", "schneller Adapter-Kassettenwechsel"; "In-Circuit Test, Funktionstest ... in einem einzigen
   Kompakttester"; "Mixed Signal-Tests, 1500 MS/s digital, 5 GS/s analog"; "Logging- und Statistik-Funktionen", "ParetoX-Diagramm",
   "papierlose Reparaturstation"). ONE side elevation of a populated board under the probe adapter, kept on screen:
   Step 1 (Adapter): the probe plate comes down and its spring probes land on the test pads.
   Step 2 (ICT): a measuring path runs through two probes across the resistor, then across the capacitor.
   Step 3 (Funktion): a digital pulse train and an analog wave are drawn in the band below the board.
   Step 4 (Logging): the waves give way to a Pareto chart with its cumulative line.
   Sizes and values are illustrative. */
var SCW=760,SCH=520,PX=[130,162,214,250,286,434,470,512,564],BTY=330;
function frScene(o){
  var g='',mob=o.mob,i,TX=mob?250:160;
  g+='<svg class="frsc'+(mob?" mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="esAl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6f7782"/><stop offset=".45" stop-color="#d9dde2"/><stop offset="1" stop-color="#6a727c"/></linearGradient>'+
     '<linearGradient id="esAu" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a6a2e"/><stop offset=".5" stop-color="#e9c77a"/><stop offset="1" stop-color="#7d5f28"/></linearGradient></defs>';
  /* board (green solder mask on FR4), pads, parts */
  g+='<rect class="brd" x="70" y="'+BTY+'" width="620" height="18"/><path class="brdt" d="M70 '+BTY+'H690"/>';
  PX.forEach(function(x){g+='<rect class="pad" x="'+(x-9)+'" y="'+(BTY-3)+'" width="18" height="3"/>'});
  g+='<rect class="chip" x="170" y="316" width="36" height="14"/><rect class="cap1" x="168" y="316" width="6" height="14"/><rect class="cap1" x="202" y="316" width="6" height="14"/>';
  g+='<rect class="chip" x="520" y="316" width="36" height="14"/><rect class="cap1" x="518" y="316" width="6" height="14"/><rect class="cap1" x="552" y="316" width="6" height="14"/>';
  g+='<rect class="ic" x="300" y="302" width="110" height="24"/>';
  for(i=0;i<8;i++)g+='<path class="lead" d="M'+(308+i*13.5)+' 326V'+BTY+'"/>';
  g+='<path class="can" d="M604 '+BTY+'V250Q604 240 614 240H646Q656 240 656 250V'+BTY+'Z"/><path class="canb" d="M604 258H656"/>';
  /* the adapter: plate, gold barrels, steel plungers with pointed tips (moves as one group) */
  g+='<g id="esAd"><rect class="plate" x="100" y="58" width="490" height="32"/>';
  PX.forEach(function(x){g+='<rect class="bar" x="'+(x-4.5)+'" y="90" width="9" height="140"/><rect class="col" x="'+(x-6)+'" y="226" width="12" height="6"/><path class="plu" d="M'+x+' 232V318"/><path class="tip" d="M'+(x-2.6)+' 318L'+x+' 327L'+(x+2.6)+' 318Z"/>'});
  g+='</g>';
  /* contact flashes on the pads */
  g+='<g id="esCt">';PX.forEach(function(x){g+='<circle class="ct" cx="'+x+'" cy="'+(BTY-2)+'" r="5"/>'});g+='</g>';
  /* ICT measuring paths */
  g+='<path class="cur" id="esM1" d="M162 232V322H214V232"/><path class="cur" id="esM2" d="M512 232V322H564V232"/>';
  g+='<g id="esLR"><text class="t" text-anchor="middle" x="188" y="'+(mob?296:302)+'">R</text></g><g id="esLC"><text class="t" text-anchor="middle" x="538" y="'+(mob?296:302)+'">C</text></g>';
  /* functional test band */
  var dw='M'+TX+' 420',x=TX,hi=false,steps=[18,18,36,18,18,18,54,18,36,18,18,36,18,18,36,18,54];
  steps.forEach(function(s){if(x+s>690)s=690-x;if(s<=0)return;x+=s;dw+='H'+x;hi=!hi;if(x<690)dw+='V'+(hi?396:420)});
  var aw='M'+TX+' 468';for(i=1;i<=60;i++){var xx=TX+(690-TX)*i/60;aw+='L'+xx.toFixed(1)+' '+(468-22*Math.sin(i/60*Math.PI*6)*Math.exp(-i/90)).toFixed(1)}
  g+='<path class="base" d="M'+TX+' 500H690"/>';
  g+='<path class="dig" id="esDg" d="'+dw+'"/><path class="ana" id="esAn" d="'+aw+'"/>';
  /* pareto */
  var H=[88,60,40,26,16,10],bw=mob?52:62,gp=mob?14:18,cum=0,tot=240,pl='';
  g+='<g id="esPa">';
  H.forEach(function(h,k){var bx=TX+k*(bw+gp);g+='<rect class="pb'+(k?'':' f')+'" x="'+bx+'" y="'+(500-h)+'" width="'+bw+'" height="'+h+'"/>';cum+=h;
    pl+=(k?'L':'M')+(k?bx+bw/2:bx+bw)+' '+(500-108*cum/tot).toFixed(1)});
  g+='</g><path class="cum" id="esCu" d="'+pl+'"/>';
  /* labels: band labels left of the traces; board and adapter labels on desktop only */
  g+='<g id="esL3"><text class="t" x="70" y="'+(mob?418:414)+'">DIGITAL</text><text class="t" x="70" y="'+(mob?474:472)+'">ANALOG</text></g>';
  g+='<g id="esL4"><text class="t" x="70" y="'+(mob?418:414)+'">PARETO</text><text class="t" x="70" y="'+(mob?474:472)+'">FEHLER</text></g>';
  if(!mob){g+='<g id="esLa"><text class="t" x="604" y="80">ADAPTER</text></g><g id="esLb"><text class="t" text-anchor="end" x="690" y="372">PRÜFLING</text></g>'}
  return g+'</svg>';
}
function scene(){return frScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ad:q("#esAd"),ct:q("#esCt"),m1:q("#esM1"),m2:q("#esM2"),LR:q("#esLR"),LC:q("#esLC"),dg:q("#esDg"),an:q("#esAn"),pa:q("#esPa"),cu:q("#esCu"),
    L3:q("#esL3"),L4:q("#esL4"),La:q("#esLa"),Lb:q("#esLb"),bars:[].slice.call(svg.querySelectorAll("#esPa rect"))};
  var D=[E.m1,E.m2,E.dg,E.an,E.cu],len=D.map(function(c){return c.getTotalLength()});
  D.forEach(function(c,i){c.style.strokeDasharray=len[i]+" "+len[i];c.style.strokeDashoffset=len[i]});
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function dr(i,k){D[i].style.strokeDashoffset=(len[i]*(1-k)).toFixed(1)}
  return function(p,b){
    if(!svg.isConnected)return;
    var s1=seg(p,.02,.2),s2a=seg(p,.27,.36),s2b=seg(p,.36,.45),s3a=seg(p,.52,.62),s3b=seg(p,.6,.7),s4=seg(p,.77,.9),s4c=seg(p,.86,.96);
    /* step 1: the adapter comes down; the pads flash on contact */
    E.ad.setAttribute("transform","translate(0 "+(-58*(1-s1)).toFixed(1)+")");
    op(E.ct,b*seg(p,.17,.2)*(1-seg(p,.24,.27)));
    /* step 2: measuring paths across R, then C */
    var on2=seg(p,.25,.27)*(1-seg(p,.48,.51));
    dr(0,s2a);dr(1,s2b);op(E.m1,b*on2);op(E.m2,b*on2);op(E.LR,b*seg(p,.25,.28));op(E.LC,b*seg(p,.34,.37));
    /* step 3: the waves draw in */
    var on3=seg(p,.5,.53)*(1-seg(p,.74,.77));
    dr(2,s3a);dr(3,s3b);op(E.dg,b*on3);op(E.an,b*on3);op(E.L3,b*on3);
    /* step 4: the pareto bars rise, then the cumulative line */
    var on4=seg(p,.75,.78);op(E.pa,b*on4);op(E.L4,b*on4);op(E.cu,b*on4);
    E.bars.forEach(function(r,k){var kk=seg(s4,k*.12,k*.12+.4);r.setAttribute("transform","translate(0 "+((1-kk)*0).toFixed(1)+")");r.style.opacity=kk.toFixed(3)});
    dr(4,s4c);
    if(b!==lastB){lastB=b;op(E.La,b);op(E.Lb,b)}
  };
}
