/* the story scene (BL/BY/DB): how FUSION works, drawn in fine engraved line. ONE glucose trace stays in the frame for all three steps.
   Step 1 Sense: a continuous glucose monitor reading lands every five minutes along the trace (dots), the trace draws on.
   Step 2 Decide: the physician's prescribed range (100–140 mg/dL, the example on idealmedtech.com) lights up, and the rate of change
   is read as a tangent at the latest reading.
   Step 3 Infuse: the insulin and dextrose infusion rates, reset every five to ten minutes, draw as two step lines under the trace
   while the glucose settles into the range. Sources: idealmedtech.com How it Works and home page. Schematic; the curve and the
   rates are illustrative, not study data. Driven by the scrubbed story progress. */
var GX={x0:96,x1:752,y0:300,top:46,n:140};
function gy(v){return GX.y0-(v-40)*(GX.y0-GX.top)/200}
function gTrace(){
  /* an illustrative day: high on admission, brought into range, three unannounced meals pulled back toward the middle */
  var P=[],i,t,v;
  for(i=0;i<=GX.n;i++){t=i/GX.n;
    v=120+82*Math.exp(-t/.07);
    [[.3,44],[.56,38],[.8,40]].forEach(function(m){var d=t-m[0];if(d>0)v+=m[1]*(d/.03)*Math.exp(1-d/.03)});
    v+=3.2*Math.sin(t*41)+2*Math.sin(t*97+1);
    P.push([GX.x0+(GX.x1-GX.x0)*t,v])}
  return P;
}
function gRates(P){
  /* rates follow the error and the trend, held for two readings (ten minutes) at a time */
  var ins=[],dex=[],k,v,dv,ri=0,rd=0;
  for(k=0;k<P.length;k++){v=P[k][1];dv=k?P[k][1]-P[k-1][1]:0;
    if(k%2===0){ri=Math.max(0,Math.min(1,(v-112)/70+dv/12));rd=Math.max(0,Math.min(1,(122-v)/22-dv/10))}
    ins.push([P[k][0],ri]);dex.push([P[k][0],rd])}
  return {ins:ins,dex:dex};
}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,P=gTrace(),R=gRates(P),L1=398,L2=494,LH=52;
  function step(A,base){var d='M'+f(A[0][0])+' '+f(base-A[0][1]*LH);for(var k=1;k<A.length;k++){d+='H'+f(A[k][0])+'V'+f(base-A[k][1]*LH)}return d}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><clipPath id="gclip"><rect id="gcr" x="0" y="0" width="'+GX.x0+'" height="560"/></clipPath>'+
     '<linearGradient id="gband" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9ccb5e" stop-opacity=".05"/><stop offset=".5" stop-color="#9ccb5e" stop-opacity=".16"/><stop offset="1" stop-color="#9ccb5e" stop-opacity=".05"/></linearGradient></defs>';
  /* base: axis, grid at 40-240 mg/dL, the 70 and 180 lines, the lanes' baselines */
  g+='<g id="scBase">';
  [40,70,100,140,180,240].forEach(function(v){var y=gy(v),key=(v===70||v===180);
    g+='<path class="'+(key?"gk":"gl")+' sD" d="M'+GX.x0+' '+f(y)+'H'+GX.x1+'"/>';
    g+='<text class="t" x="'+(GX.x0-14)+'" y="'+f(y+4)+'" text-anchor="end">'+v+'</text>'});
  g+='<path class="ax sD" d="M'+GX.x0+' '+GX.top+'V'+GX.y0+'"/>';
  for(i=0;i<=24;i+=3){var x=GX.x0+(GX.x1-GX.x0)*i/24;g+='<path class="ax sD" d="M'+f(x)+' '+GX.y0+'v6"/>'}
  g+='<text class="t" x="'+GX.x0+'" y="'+(GX.top-18)+'">'+(mob?'MG/DL':'GLUCOSE · MG/DL')+'</text>';
  g+='<text class="t" x="'+GX.x1+'" y="'+(GX.y0+26)+'" text-anchor="end">'+(mob?'24 H':'24 HOURS')+'</text>';
  g+='<path class="lb sD" d="M'+GX.x0+' '+L1+'H'+GX.x1+'"/><path class="lb sD" d="M'+GX.x0+' '+L2+'H'+GX.x1+'"/></g>';
  /* step 2: the prescribed range */
  g+='<g id="band"><rect x="'+GX.x0+'" y="'+f(gy(140))+'" width="'+(GX.x1-GX.x0)+'" height="'+f(gy(100)-gy(140))+'" fill="url(#gband)"/>'+
     '<path class="bd" d="M'+GX.x0+' '+f(gy(140))+'H'+GX.x1+'M'+GX.x0+' '+f(gy(100))+'H'+GX.x1+'"/>'+
     '<path class="ldr" d="M'+(GX.x1-40)+' '+f(gy(140))+'V'+f(gy(208)+8)+'"/><text class="a" x="'+(GX.x1)+'" y="'+f(gy(208))+'" text-anchor="end">'+(mob?'RANGE 100–140':'PRESCRIBED RANGE · 100–140 MG/DL')+'</text></g>';
  /* the trace and its CGM readings, revealed left to right through one clip */
  g+='<g clip-path="url(#gclip)"><path class="tr" d="M'+P.map(function(p){return f(p[0])+' '+f(gy(p[1]))}).join('L')+'"/>';
  for(i=0;i<P.length;i+=2)g+='<circle class="rd" cx="'+f(P[i][0])+'" cy="'+f(gy(P[i][1]))+'" r="'+(mob?3.4:2.6)+'"/>';
  g+='</g>';
  /* the latest reading and its label (step 1), the tangent (step 2) */
  g+='<g id="now"><circle class="nw" id="nwc" r="'+(mob?9:7)+'"/><g id="nwlab"><path class="ldr" id="nwl"/><text class="a" id="nwt">'+(mob?'EVERY 5 MIN':'CGM READING · EVERY 5 MIN')+'</text></g></g>';
  g+='<g id="tan"><path class="tg" id="tgl"/><text class="a" id="tgt" text-anchor="middle">'+(mob?'TREND':'RATE OF CHANGE')+'</text></g>';
  /* step 3: the two infusion lanes */
  g+='<g id="lanes"><g clip-path="url(#gclip)"><path class="ri" d="'+step(R.ins,L1)+'"/><path class="rx" d="'+step(R.dex,L2)+'"/></g>'+
     '<text class="li" x="'+GX.x0+'" y="'+(L1-LH-14)+'">'+(mob?'INSULIN':'INSULIN · IV RATE')+'</text>'+
     '<text class="lx" x="'+GX.x0+'" y="'+(L2-LH-14)+'">'+(mob?'DEXTROSE':'DEXTROSE · IV RATE')+'</text>'+
     '<text class="t" x="'+GX.x1+'" y="'+(L2+28)+'" text-anchor="end">'+(mob?'RESET EVERY 5–10 MIN':'BOTH RATES RESET EVERY 5–10 MINUTES')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var P=gTrace(),E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),cr:$("#gcr",svg),band:$("#band",svg),now:$("#now",svg),nwlab:$("#nwlab",svg),nwc:$("#nwc",svg),nwl:$("#nwl",svg),nwt:$("#nwt",svg),
    tan:$("#tan",svg),tgl:$("#tgl",svg),tgt:$("#tgt",svg),lanes:$("#lanes",svg)};
  var lastB=-1,mob=svg.classList.contains("mob");
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* how much of the day is drawn: to ~45% in step 1, held in step 2, to the end in step 3 */
    var tr=.08+.37*seg(p,.02,.3)+.55*seg(p,.68,.95),k=Math.min(P.length-1,Math.round(tr*(P.length-1))),q=P[k],x=q[0],y=gy(q[1]);
    E.cr.setAttribute("width",(x+3).toFixed(1));
    E.nwc.setAttribute("cx",x.toFixed(1));E.nwc.setAttribute("cy",y.toFixed(1));
    /* the reading's label sits above the trace, leaning left near the right edge */
    var lx=Math.min(x+24,560),ly=Math.max(30,y-(mob?70:58));
    E.nwl.setAttribute("d","M"+x.toFixed(1)+" "+(y-9).toFixed(1)+"L"+(lx-8).toFixed(1)+" "+(ly+8).toFixed(1));
    E.nwt.setAttribute("x",lx.toFixed(1));E.nwt.setAttribute("y",ly.toFixed(1));
    op(E.now,b);op(E.nwlab,1-seg(p,.3,.36));
    /* step 2 */
    var s2=seg(p,.36,.46),o2=1-seg(p,.62,.68);
    op(E.band,b*s2);
    var k0=Math.max(0,k-3),k1=Math.min(P.length-1,k+3),dx=P[k1][0]-P[k0][0],dy=gy(P[k1][1])-gy(P[k0][1]),n=Math.hypot(dx,dy)||1,len=70;
    E.tgl.setAttribute("d","M"+(x-dx/n*len).toFixed(1)+" "+(y-dy/n*len).toFixed(1)+"L"+(x+dx/n*len).toFixed(1)+" "+(y+dy/n*len).toFixed(1));
    E.tgt.setAttribute("x",x.toFixed(1));E.tgt.setAttribute("y",Math.min(gy(40)-14,y+(mob?64:52)).toFixed(1));
    op(E.tan,b*seg(p,.42,.5)*o2);
    /* step 3 */
    op(E.lanes,b*(.32+.68*seg(p,.66,.74)));
  };
}
