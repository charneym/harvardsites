/* The story scene (BL/BY/DB): how budiodarone is meant to be used, as ONE continuous fine-line drawing. A heart with its
   atria (left), a wearable AF monitor's rhythm strip (top right), the 24-hour AF burden (middle right) and the dose
   over six months (bottom). Step 1: the strip shows atrial fibrillation and a long episode (LEAF, over 5 hours).
   Step 2: the dose steps up monthly from 200 mg twice daily, in 200 mg steps, toward the 800 mg ceiling.
   Step 3: sinus rhythm returns, no episode lasts 5 hours: the "safe harbor". Driven by the scrubbed progress.
   Source: XYRA's HARBOR-AF release (31 Aug 2026) and FDA End of Phase 2 release (26 Feb 2024). */
function xyAF(){ /* irregular R-R, no P waves, fibrillatory baseline */
  var q=[292,318,366,385,436,462,522,548,596],d="M270 140",x=270,i,j;
  function fw(a,b){var s="";for(var t=a+3;t<b;t+=4){var y=140+((t*7)%5-2)*1.1*Math.sin(t*.9);s+="L"+t+" "+y.toFixed(1)}return s}
  for(i=0;i<q.length;i++){d+=fw(x,q[i]-5)+"L"+(q[i]-3)+" 144L"+q[i]+" 96L"+(q[i]+4)+" 152L"+(q[i]+8)+" 140";x=q[i]+8}
  return d+fw(x,620)+"L620 140";
}
function xySR(){ /* regular sinus rhythm: P, QRS, T */
  var d="M270 140",q=[294,352,410,468,526,584];
  q.forEach(function(r){d+="H"+(r-20)+"C"+(r-17)+" 133 "+(r-12)+" 133 "+(r-9)+" 140H"+(r-4)+"L"+(r-2)+" 144L"+r+" 96L"+(r+4)+" 152L"+(r+7)+" 140H"+(r+14)+"C"+(r+18)+" 127 "+(r+28)+" 127 "+(r+32)+" 140"});
  return d+"H620";
}
function xyScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="10 10 630 490" aria-hidden="true">',i;
  /* the heart, front view: myocardium, the four chambers, great vessels */
  var OUT='M92 92C66 92 44 112 40 142C36 176 50 210 74 238C102 270 140 292 170 300C186 304 198 298 206 284C228 246 240 200 234 160C230 126 214 100 188 92C170 86 150 90 136 98C124 92 108 90 92 92Z';
  var RA='M58 120C70 106 92 102 112 108L118 172L54 182C48 160 50 136 58 120Z';
  var LA='M144 104C168 96 196 104 210 124C216 136 218 150 218 162L150 168Z';
  var RV='M56 196L120 186C126 220 140 252 160 280C126 266 92 246 72 224C64 214 58 206 56 196Z';
  var LV='M152 182L220 176C222 214 214 250 198 276C190 288 180 286 172 276C160 254 154 220 152 182Z';
  g+='<g id="xyHt"><path class="my" d="'+OUT+'"/><path class="cv" d="'+RA+LA+RV+LV+'"/>';
  g+='<path class="w sD" d="'+OUT+'"/><path class="w2 sD" d="'+RA+'"/><path class="w2 sD" d="'+LA+'"/><path class="w2 sD" d="'+RV+'"/><path class="w2 sD" d="'+LV+'"/>';
  g+='<path class="w sD" d="M78 94V36M98 92V40"/><path class="w sD" d="M120 98C114 62 130 36 158 32C188 28 210 44 214 70C216 80 216 88 214 96"/><path class="w sD" d="M140 98C138 74 146 60 162 58C178 56 192 66 194 82"/>';
  g+='</g>';
  /* fibrillation in the atria (step 1), the sinus node's calm wavefront (step 3) */
  g+='<g id="xyFb"><path class="fb" d="M64 136l7-6 5 9 6-10 4 8 7-7 5 9 6-8M66 156l6-7 6 8 5-9 6 9 6-8 6 7M156 124l6-7 5 9 6-9 5 8 6-8 6 9 5-7M158 146l6-8 6 9 5-8 6 8 6-9 6 8"/></g>';
  g+='<g id="xySn"><circle cx="80" cy="122" r="3.5" class="dt" style="fill:#2f6b5e"/><circle class="sn" cx="80" cy="122" r="9"/><circle class="sn" cx="80" cy="122" r="15" style="opacity:.45"/></g>';
  /* the wearable monitor's rhythm strip */
  g+='<g id="xyStrip"><path class="gr sD" d="M270 80H620M270 200H620'+(function(){var s="";for(i=0;i<=7;i++)s+="M"+(270+i*50)+" 80V200";return s})()+'"/></g>';
  g+='<text class="t" x="270" y="66">WEARABLE AF MONITOR</text>';
  g+='<path class="af" id="xyAf" d="'+xyAF()+'"/><path class="sr" id="xySr" d="'+xySR()+'"/>';
  /* the 24-hour AF burden */
  g+='<path class="ax sD" d="M270 300H620M270 294V306M620 294V306M357.5 297V303M445 297V303M532.5 297V303"/>';
  g+='<text class="t" x="270" y="330">24 HOURS</text>';
  g+='<rect class="ep" id="xyEp" x="300" y="276" width="0" height="24"/>';
  g+='<g id="xyEp2"><rect class="ep2" x="372" y="286" width="8" height="14"/><rect class="ep2" x="498" y="286" width="12" height="14"/></g>';
  /* the dose over six months */
  g+='<path class="ax sD" d="M40 470H620"/><path class="dc sD" d="M40 380H620"/>';
  g+='<text class="t" x="40" y="496">MONTH 1</text><text class="t" x="620" y="496" text-anchor="end">MONTH 6</text>';
  g+='<path class="ds" id="xyDs" d="M40 455H136.7V435H233.3V415H330V415H620"/>';
  /* labels */
  g+='<g id="xl1"><text class="a" x="300" y="262">LONG EPISODE &gt; 5 H</text><text class="a" x="270" y="230">ATRIAL FIBRILLATION</text></g>';
  g+='<g id="xl2"><text class="a" x="40" y="442">200 MG</text><text class="t" x="620" y="368" text-anchor="end">800 MG CEILING</text><text class="a" x="340" y="405">TWICE DAILY</text></g>';
  g+='<g id="xl3"><text class="g" x="270" y="230">SINUS RHYTHM</text><text class="g" x="300" y="262">NO EPISODE &gt; 5 H</text></g>';
  return g+'</svg>';
}
function scene(){return xyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),af:dl("#xyAf")[0],sr:dl("#xySr")[0],ds:dl("#xyDs")[0],ep:$("#xyEp",svg),ep2:$("#xyEp2",svg),fb:$("#xyFb",svg),sn:$("#xySn",svg),
    l1:$("#xl1",svg),l2:$("#xl2",svg),l3:$("#xl3",svg),afp:$("#xyAf",svg),srp:$("#xySr",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var calm=seg(p,.66,.76);
    /* step 1: AF on the strip, fibrillation in the atria, a long episode in the day */
    dr(E.af,seg(p,.02,.18));op(E.afp,b*(1-calm));
    op(E.fb,b*seg(p,.04,.12)*(1-calm));E.fb.setAttribute("transform","translate("+(Math.sin(p*90)*1.2).toFixed(2)+" "+(Math.cos(p*70)*1).toFixed(2)+")");
    E.ep.setAttribute("width",(Math.max(0,190*seg(p,.1,.22)*(1-calm))).toFixed(1));
    /* step 2: the dose steps up month by month */
    dr(E.ds,seg(p,.36,.58));
    /* step 3: sinus rhythm, short episodes only */
    dr(E.sr,seg(p,.7,.86));op(E.srp,b*seg(p,.69,.71));op(E.sn,b*seg(p,.74,.82));op(E.ep2,b*seg(p,.78,.84));
    op(E.l1,b*seg(p,.18,.24)*(1-seg(p,.62,.67)));op(E.l2,b*seg(p,.44,.5));op(E.l3,b*seg(p,.82,.88));
  };
}
