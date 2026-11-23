/* The story scene (BL/BY/DB): how closed-loop vasopressor control works, as ONE continuous fine-line scene: an arterial
   pressure trace (beat by beat, illustrative) runs across a monitor-style strip above the vasopressor infusion rate. Step 1
   (set): the strip, its time grid and the clinician's target range draw in. Step 2 (sense): the trace is written left to
   right and pressure starts to fall below the range. Step 3 (titrate): the infusion rate steps up as the fall begins, the
   pressure comes back into range and both traces run to the end of the strip. Driven by the scrubbed progress.
   Facts: perceptivemedical.com (home, treating-hypotension, clinical-studies), UCI Beall Applied Innovation 2023. */
var SCW=760,SCH=520,PX0=60,PX1=720;
var PY0=92,PY1=326,RY0=410,RY1=494;   /* pressure strip and rate strip */
function pmY(mm){return PY1-(mm-45)/(115-45)*(PY1-PY0)}
var BAND=[72,88];
/* mean pressure over the strip (q 0..1): steady in range, a fall that starts at q .30, caught by the loop, back by q .52 */
function pmMap(q){var m=80+2.2*Math.sin(q*17)+1.2*Math.sin(q*41+1);
  var dip=q<.3?0:q<.40?(q-.3)/.1:q<.52?1-(q-.40)/.12:0;dip=dip<0?0:dip;dip=dip*dip*(3-2*dip);return m-15*dip}
function pmRate(q){var r=.30+.02*Math.sin(q*13);var up=q<.33?0:q<.43?(q-.33)/.1:1;up=up*up*(3-2*up);var dn=q<.56?0:q<.75?(q-.56)/.19:1;dn=dn*dn*(3-2*dn);return r+.42*up-.22*dn}
/* arterial pulse: sharp upstroke, dicrotic notch, decay */
function pmWy(i){var q=i/660,ph=(i%24)/24;
  var pu=ph<.1?Math.sin(ph/.1*Math.PI/2):ph<.32?1-.45*Math.pow((ph-.1)/.22,.8):ph<.38?.55+.07*Math.sin((ph-.32)/.06*Math.PI):.55*Math.pow(1-(ph-.38)/.62,1.4);
  return pmY(pmMap(q)-8+18*pu)}
function pmTrace(){var d='';for(var i=0;i<=660;i++)d+=(i?'L':'M')+(PX0+i)+' '+pmWy(i).toFixed(1);return d}
function pmRateP(){var d='';for(var i=0;i<=660;i+=4){var q=i/660,v=pmRate(q),y=RY1-v*(RY1-RY0);d+=(i?'L':'M')+(PX0+i)+' '+y.toFixed(1)}return d}
function pmScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>';
  g+='<clipPath id="pmC"><rect id="pmCR" x="'+(PX0-4)+'" y="0" width="0" height="'+SCH+'"/></clipPath></defs><g id="scBase">';
  /* strip frames and time grid */
  g+='<path class="fm sD" d="M'+PX0+' '+(PY0-8)+'H'+PX1+'M'+PX0+' '+(PY1+8)+'H'+PX1+'M'+PX0+' '+(RY0-8)+'H'+PX1+'M'+PX0+' '+(RY1+8)+'H'+PX1+'"/>';
  var gr='';for(i=0;i<=12;i++){var x=PX0+i*55;gr+='M'+x+' '+(PY0-8)+'V'+(PY1+8)+'M'+x+' '+(RY0-8)+'V'+(RY1+8)}
  g+='<path class="gd sD" d="'+gr+'"/>';
  var mt='';for(i=0;i<=60;i++){var x2=PX0+i*11;mt+='M'+x2+' '+(PY1+8)+'v-4M'+x2+' '+(RY1+8)+'v-4'}
  g+='<path class="tk sD" d="'+mt+'"/>';
  g+='<text class="t" x="'+PX0+'" y="'+(PY0-24)+'">'+(mob?'ARTERIAL PRESSURE':'ARTERIAL PRESSURE · ILLUSTRATIVE')+'</text>';
  g+='<text class="t" x="'+PX0+'" y="'+(RY0-24)+'">VASOPRESSOR RATE</text>';
  g+='</g>';
  /* the clinician's target range */
  var b0=pmY(BAND[1]),b1=pmY(BAND[0]);
  g+='<g id="pmBand"><rect class="bd" x="'+PX0+'" y="'+b0.toFixed(1)+'" width="'+(PX1-PX0)+'" height="'+(b1-b0).toFixed(1)+'"/><path class="be" d="M'+PX0+' '+b0.toFixed(1)+'H'+PX1+'M'+PX0+' '+b1.toFixed(1)+'H'+PX1+'"/></g>';
  g+=mob?'<g id="lb1"><rect class="sw" x="'+(PX1-196)+'" y="'+(PY0-42)+'" width="16" height="16"/><text x="'+PX1+'" y="'+(PY0-24)+'" text-anchor="end">SET TARGET</text></g>'
   :'<g id="lb1"><rect class="sw" x="458" y="'+(PY0-34)+'" width="12" height="12"/><text x="478" y="'+(PY0-24)+'">TARGET · SET BY CLINICIAN</text></g>';
  /* the traces, written left to right */
  g+='<g clip-path="url(#pmC)"><path class="tr" id="pmTr" d="'+pmTrace()+'"/><path class="rt" id="pmRt" d="'+pmRateP()+'"/></g>';
  g+='<path class="cur" id="pmCur" d="M0 '+(PY0-8)+'V'+(RY1+8)+'"/>';
  g+='<circle class="hd" id="pmHd" r="4" cx="0" cy="0"/><circle class="hd" id="pmHr" r="3.4" cx="0" cy="0"/>';
  g+='<g id="lb2"><text x="'+PX1+'" y="'+(RY0-24)+'" text-anchor="end">'+(mob?'AUTO-TITRATED':'ADJUSTED AUTOMATICALLY')+'</text></g>';
  return g+'</svg>';
}
function scene(){return pmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),band:$("#pmBand",svg),cr:$("#pmCR",svg),cur:$("#pmCur",svg),hd:$("#pmHd",svg),hr:$("#pmHr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var band=sm2(seg(p,.02,.2));
    /* how far the traces are written: to q .22 in step 1, to .42 in step 2 (the fall begins), to the end in step 3 */
    var q=.22*sm2(seg(p,.04,.28))+.20*sm2(seg(p,.36,.6))+.58*sm2(seg(p,.68,.96));
    var x=PX0+(PX1-PX0)*q;
    E.cr.setAttribute("width",(x-PX0+4+(q>=.999?6:0)).toFixed(1));
    op(E.band,b*band);op(E.l1,b*band);
    var live=b*seg(p,.03,.08)*(1-seg(p,.965,.995));
    E.cur.setAttribute("transform","translate("+x.toFixed(1)+" 0)");op(E.cur,live*.7);
    E.hd.setAttribute("cx",x.toFixed(1));E.hd.setAttribute("cy",pmWy(Math.round(q*660)).toFixed(1));op(E.hd,live);
    E.hr.setAttribute("cx",x.toFixed(1));E.hr.setAttribute("cy",(RY1-pmRate(q)*(RY1-RY0)).toFixed(1));op(E.hr,live);
    op(E.l2,b*seg(p,.70,.78));
  };
}
function sm2(x){return x*x*(3-2*x)}
