/* The story scene (BL/BY/DB): one forced exhalation, read three ways, as ONE continuous chart with real axes
   (volume in litres against time in seconds). Sources: spiromatics.com (Spirometry), the NIH RePORTER abstract for
   1R41LM015295 and the Harbert Institute story (the proprietary method analyses the shape of the volume curve).
   Step 1 (exhale): the patient's volume-time curve draws from 0 to 6 s.
   Step 2 (ratio): FEV1 at one second and FVC at the plateau are marked; the ratio is the standard test.
   Step 3 (shape): the whole curve is sampled point by point and compared with a healthy reference curve.
   The curves are illustrative (an obstructed and a healthy pattern), not patient data. Every element is driven by
   the scrubbed story progress. */
var SCW=600,SCH=520;
var X0=78,X1=572,Y0=430,Y1=96,TM=6,VM=5;
function sx(t){return X0+t/TM*(X1-X0)}
function sy(v){return Y0-v/VM*(Y0-Y1)}
function curve(F,tau){var d="",i;for(i=0;i<=120;i++){var t=i/120*TM,v=F*(1-Math.exp(-t/tau));d+=(i?"L":"M")+sx(t).toFixed(1)+" "+sy(v).toFixed(1)}return d}
var PF=3.6,PT=1.23,HF=4.4,HT=.587;        /* illustrative: obstructed (FEV1/FVC ~0.56) and healthy (~0.82) */
function pv(t){return PF*(1-Math.exp(-t/PT))}
function spiroScene(o){
  var g='',i,m=o.mob;
  g+='<svg class="'+(m?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="ax sD" d="M'+X0+' '+(Y1-14)+'V'+Y0+'H'+X1+'"/>';
  for(i=0;i<=TM;i++)g+='<path class="tk sD" d="M'+sx(i).toFixed(1)+' '+Y0+'v7"/>';
  for(i=1;i<=VM;i++)g+='<path class="tk sD" d="M'+X0+' '+sy(i).toFixed(1)+'h-7"/>';
  for(i=(m?2:1);i<=TM;i+=(m?2:1))g+='<text class="t" x="'+sx(i).toFixed(1)+'" y="'+(Y0+(m?32:26))+'" text-anchor="middle">'+i+'</text>';
  for(i=1;i<=VM;i+=(m?2:1))g+='<text class="t" x="'+(X0-17)+'" y="'+(sy(i)+(m?6:4)).toFixed(1)+'" text-anchor="end">'+i+'</text>';
  g+='<text class="t" x="'+X1+'" y="'+(Y0+(m?66:56))+'" text-anchor="end">TIME (S)</text>';
  g+='<text class="t" x="'+(X0-17)+'" y="'+(Y1-34)+'">VOLUME (L)</text>';
  g+='</g>';
  /* the area under the patient's curve, for the shape step */
  g+='<path id="scArea" class="ar" d="'+curve(PF,PT)+'L'+X1+' '+Y0+'L'+X0+' '+Y0+'Z"/>';
  /* healthy reference */
  g+='<path id="scRef" class="rf" d="'+curve(HF,HT)+'"/>';
  g+='<text id="scRefL" class="t rfl" x="'+sx(3).toFixed(1)+'" y="'+(sy(HF)+(m?38:32)).toFixed(1)+'">HEALTHY REFERENCE</text>';
  /* the patient's curve */
  g+='<path id="scCur" class="cu" d="'+curve(PF,PT)+'"/>';
  /* FEV1 and FVC markers */
  var f1=sy(pv(1)),fv=sy(PF);
  g+='<g id="scFev"><path class="mk1" d="M'+sx(1).toFixed(1)+' '+Y0+'V'+f1.toFixed(1)+'"/><path class="mk2" d="M'+X0+' '+f1.toFixed(1)+'H'+sx(1).toFixed(1)+'"/><circle class="dt" cx="'+sx(1).toFixed(1)+'" cy="'+f1.toFixed(1)+'" r="5"/>'+
     '<text class="a2" x="'+(sx(1)+14).toFixed(1)+'" y="'+(f1+(m?40:30)).toFixed(1)+'">FEV₁</text></g>';
  g+='<g id="scFvc"><path class="mk2" d="M'+X0+' '+fv.toFixed(1)+'H'+X1+'"/><circle class="dt" cx="'+sx(5.6).toFixed(1)+'" cy="'+sy(pv(5.6)).toFixed(1)+'" r="5"/>'+
     '<text class="a2" x="'+X1+'" y="'+(fv+(m?40:30)).toFixed(1)+'" text-anchor="end">FVC</text></g>';
  /* the shape: sample points all along the curve */
  g+='<g id="scPts">';for(i=0;i<24;i++){var t=.12+Math.pow(i/23,1.35)*5.7;g+='<circle class="pt" data-k="'+i+'" cx="'+sx(t).toFixed(1)+'" cy="'+sy(pv(t)).toFixed(1)+'" r="3.2"/>'}g+='</g>';
  g+='<g id="lb1"><text class="a" x="6" y="30">'+(m?'EXHALE · VOLUME OVER TIME':'EXHALE · VOLUME OVER TIME')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="6" y="30">'+(m?'THE RATIO · FEV₁ / FVC':'THE STANDARD TEST · FEV₁ / FVC')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="6" y="30">'+(m?'THE SHAPE · THE WHOLE CURVE':'THE SHAPE · THE WHOLE CURVE, READ IN FULL')+'</text></g>';
  return g+'</svg>';
}
function scene(){return spiroScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),cur:dl("#scCur"),ref:dl("#scRef"),refL:$("#scRefL",svg),area:$("#scArea",svg),
    fev:$("#scFev",svg),fvc:$("#scFvc",svg),fevL:dl("#scFev path"),fvcL:dl("#scFvc path"),pts:$$(".pt",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the curve is complete by the end of step 1, and stays complete */
    var c=.35+.65*sm(seg(p,0,.26));
    draw(E.cur,b*c);
    var mk=sm(seg(p,.38,.5)),mkOut=sm(seg(p,.64,.72));
    op(E.fev,b*mk*(1-mkOut));op(E.fvc,b*sm(seg(p,.44,.56))*(1-mkOut));
    draw(E.fevL,mk);draw(E.fvcL,sm(seg(p,.44,.56)));
    E.pts.forEach(function(el,k){op(el,b*sm((seg(p,.68,.86)*24-k)*.6+.0))});
    op(E.area,b*.9*sm(seg(p,.7,.82)));
    draw(E.ref,b*sm(seg(p,.78,.94)));op(E.refL,b*sm(seg(p,.88,.96)));
    op(E.l1,b*(1-sm(seg(p,.3,.36))));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
