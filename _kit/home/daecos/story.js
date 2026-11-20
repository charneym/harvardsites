/* The story scene (BL/BY/DB): Daecos's Demand/Capacity/Mismatch idea (R. L. Mehta, ICU Management & Practice 2023; Daecos
   Predictor docs), as ONE continuous scene on one chart for one illustrative ICU patient. Left: the inputs the algorithm
   reads from the record (demographics, clinical characteristics, routine labs). Right: the kidney's capacity and the demand
   placed on it over ICU hours. Step 1 the data flow in from the record; step 2 demand and capacity draw and the gap where
   demand exceeds capacity fills (the mismatch); step 3 the alert fires now, ahead of the mismatch, inside a 96-hour
   window; step 4 kidney support adds capacity and the mismatch closes. Every element is driven by the scrubbed progress.
   The curves are illustrative, not patient data. */
var SCW=760,SCH=520;
var CX0=262,CX1=736,CY0=72,CY1=392,UX=.8;
function cap(u){return 132+148*u}
function dem(u){return 384-172*Math.pow(u,1.5)}
var UC=(function(){var a=0,b=1;for(var i=0;i<40;i++){var m=(a+b)/2;if(dem(m)>cap(m))a=m;else b=m}return (a+b)/2})();
function ux(u){return CX0+(CX1-CX0)*u}
var UNOW=UC-96/144;          /* the axis spans 144 h; the alert fires 96 h before the mismatch */
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the chart's axes, hour ticks and captions ---- */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M24 20H736"/>';
  g+='<path class="bl sD" d="M'+CX0+' '+CY0+'V'+CY1+'H'+CX1+'"/>';
  for(var hh=0;hh<=144;hh+=24){var x=ux(hh/144);g+='<path class="bl sD" d="M'+f(x)+' '+CY1+'v6"/><text class="t" x="'+f(x)+'" y="'+(CY1+26)+'" text-anchor="middle">'+(hh?hh:'ADMIT')+'</text>'}
  g+='<text class="t" x="'+CX1+'" y="'+(CY1+52)+'" text-anchor="end">HOURS IN THE ICU</text>';
  g+='<text class="t" x="24" y="10">ONE ICU PATIENT · ILLUSTRATIVE</text>';
  g+='<text class="t" x="24" y="'+(CY1+52)+'">INPUTS FROM THE RECORD</text>';
  g+='</g>';
  /* ---- inputs: three groups of data points, each wired to the chart's axis ---- */
  var IN=[["DEMOGRAPHICS",150],["CLINICAL DATA",232],["ROUTINE LABS",314]];
  g+='<g id="scIn">';
  IN.forEach(function(r){
    g+='<text class="t in" x="24" y="'+(r[1]-16)+'">'+r[0]+'</text>';
    for(var k=0;k<6;k++)g+='<rect class="dp" x="'+(24+k*14)+'" y="'+(r[1]-4)+'" width="8" height="8"/>';
    g+='<path class="wire" d="M118 '+r[1]+'H'+(CX0-14)+'"/>';
    g+='<circle class="pk" r="3.2" cx="118" cy="'+r[1]+'"/>';
  });
  g+='</g>';
  /* ---- the curves, the mismatch and the support ---- */
  g+='<path id="mmA" class="mm" d=""/>';
  g+='<path id="cvC" class="cv cc" d=""/><path id="cvD" class="cv cd" d=""/>';
  g+='<text id="lbC" class="a2" x="'+f(ux(.42))+'" y="'+f(cap(.42)-16)+'">CAPACITY</text>';
  g+='<text id="lbD" class="a2 dm" x="'+f(ux(.42))+'" y="'+f(dem(.42)+28)+'">DEMAND</text>';
  g+='<text id="lbM" class="a" x="'+f(ux(1)+0)+'" y="'+f(cap(1)+30)+'" text-anchor="end">MISMATCH</text>';
  /* ---- the alert: now, and the 96-hour window ahead of the mismatch ---- */
  var xn=ux(UNOW),xc=ux(UC);
  g+='<g id="scAl"><path class="al" d="M'+f(xn)+' '+CY0+'V'+CY1+'"/><circle class="ad" cx="'+f(xn)+'" cy="'+f(dem(UNOW))+'" r="5"/>';
  g+='<path class="br" d="M'+f(xn)+' 52V44H'+f(xc)+'V52"/><text class="a" x="'+f((xn+xc)/2)+'" y="36" text-anchor="middle">96 H AHEAD</text>';
  g+='<text class="a" x="'+f(xn+12)+'" y="'+(CY0+20)+'">ALERT</text></g>';
  g+='<g id="scSu"><path class="al su" d="M'+f(ux(UX+.02))+' '+CY0+'V'+CY1+'"/><text class="a2" x="'+f(ux(UX+.02)-12)+'" y="'+(CY0+20)+'" text-anchor="end">DIALYSIS</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),wires:dl("#scIn .wire"),inT:$$("#scIn text",svg),dp:$$("#scIn .dp",svg),pk:$$("#scIn .pk",svg),
    cC:$("#cvC",svg),cD:$("#cvD",svg),mm:$("#mmA",svg),lC:$("#lbC",svg),lD:$("#lbD",svg),lM:$("#lbM",svg),al:$("#scAl",svg),su:$("#scSu",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cap2(u,s){var k=(u-UX)/.16;k=k<0?0:k>1?1:k;k=k*k*(3-2*k);return cap(u)-118*k*s}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: inputs appear and flow in along their wires */
    var ii=seg(p,0,.1),fl=seg(p,.03,.2);
    E.inT.forEach(function(t){op(t,b*Math.max(ii,.0))});
    E.dp.forEach(function(d,i){op(d,b*Math.min(1,Math.max(0,ii*2.2-(i%6)*.16)))});
    draw(E.wires,b*Math.max(fl,.0));
    E.pk.forEach(function(c,i){var q=(p*7+i*.33)%1;c.setAttribute("cx",(118+(CX0-14-118)*q).toFixed(1));op(c,b*fl*(q<.92?1:0))});
    /* step 2: demand and capacity draw across the ICU stay; where demand exceeds capacity, the mismatch fills */
    var dr=seg(p,.2,.42),su=seg(p,.78,.92),n=60,dc="",dd="",i,u;
    var um=Math.max(.001,dr);
    for(i=0;i<=n;i++){u=um*i/n;dc+=(i?"L":"M")+ux(u).toFixed(1)+" "+cap2(u,su).toFixed(1);dd+=(i?"L":"M")+ux(u).toFixed(1)+" "+dem(u).toFixed(1)}
    E.cC.setAttribute("d",dc);E.cD.setAttribute("d",dd);op(E.cC,b*(dr>0?1:0));op(E.cD,b*(dr>0?1:0));
    op(E.lC,b*seg(p,.22,.28));op(E.lD,b*seg(p,.22,.28));
    var mi=seg(p,.38,.48),top="",bot="",any=false;
    if(dr>UC){for(i=0;i<=40;i++){u=UC+(dr-UC)*i/40;var yc=cap2(u,su),yd=dem(u);if(yd>yc)yd=yc;top+=(top?"L":"M")+ux(u).toFixed(1)+" "+yd.toFixed(1);bot="L"+ux(u).toFixed(1)+" "+yc.toFixed(1)+bot;any=true}}
    E.mm.setAttribute("d",any?top+bot+"Z":"");op(E.mm,b*mi);
    op(E.lM,b*mi*(1-su));
    /* step 3: the alert, now, 96 hours ahead of the mismatch */
    op(E.al,b*seg(p,.52,.6)*(1-.5*su));
    /* step 4: kidney support adds capacity; the mismatch closes */
    op(E.su,b*seg(p,.8,.88));
  };
}
