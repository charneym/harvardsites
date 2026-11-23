/* The story scene (BL/BY/DB): how SleeveSense works, as ONE continuous fine-line scene. The upper arm, drawn in fine
   line, wears the stretch-mesh sleeve with its serpentine interconnect and round sensor pads (as in Senphonix's own
   product image). Step 1 (wear): the arm and sleeve draw in and the sleeve is named. Step 2 (sense): four traces run
   out of the sleeve, one per vital sign it captures: heart rate, respiration rate, skin temperature, movement. Step 3
   (share): the traces gather into the secure cloud and on into the EHR, pulled when clinicians review. Driven by the
   scrubbed progress. Facts: senphonix.com (Home, Solution), PR Newswire 2026-09-10 and 2026-10-13. */
var SCW=760,SCH=520,AX=160;
function sxHW(y){return 66-12*(y-24)/472+5*Math.sin(Math.PI*(y-24)/472)}
var BT=166,BB=334,ROWS=[112,196,280,364],TX0=300,TX1=560,CX=690,CY=238,CR=58;
function sxP(a){return a.map(function(p,i){return (i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('')}
function sxArm(){var l=[],r=[],y;for(y=24;y<=496;y+=8){l.push([AX-sxHW(y),y]);r.push([AX+sxHW(y),y])}
  return '<path class="ar sD" d="'+sxP(l)+'"/><path class="ar sD" d="'+sxP(r)+'"/>'}
function sxMesh(){var g='',k,i,y,t,ph;
  for(k=0;k<=8;k++){var y0=BT+(BB-BT)*k/8,a=[];for(t=0;t<=1.0001;t+=.04){var x=AX-sxHW(y0)+2*sxHW(y0)*t;a.push([x,y0+9*Math.sin(Math.PI*t)+(k&&k<8?1.6*Math.sin(t*22+k):0)])}
    g+='<path class="'+(k==0||k==8?'hm':'ms')+' sD" d="'+sxP(a)+'"/>'}
  for(i=1;i<12;i++){ph=Math.PI*i/12;var b=[];for(y=BT;y<=BB+.01;y+=6){var x2=AX-sxHW(y)*Math.cos(ph);b.push([x2+1.4*Math.sin(y/9+i),y+9*Math.sin(ph)])}g+='<path class="ms sD" d="'+sxP(b)+'"/>'}
  return g}
function sxSerp(){var a=[],y;for(y=182;y<=318;y+=1.5)a.push([AX-38+6*Math.sin((y-182)/17*Math.PI*2),y]);
  var h=[],x;for(x=AX-38;x<=AX+34;x+=1.5)h.push([x,250+9*Math.sin(Math.PI*(x-AX+38)/72)+3*Math.sin((x-AX+38)/6)]);
  return '<path class="sp sD" d="'+sxP(a)+'"/><path class="sp sD" d="'+sxP(h)+'"/>'}
var SXPADS=[[AX-12,258],[AX+8,259.5],[AX+28,256]];
function sxPads(){return SXPADS.map(function(p,i){return '<circle class="pd" cx="'+p[0]+'" cy="'+p[1]+'" r="'+(i==2?5:6.5)+'"/>'}).join('')}
/* the four vital-sign traces */
function sxWave(k,y0){var a=[],x,u,v;var s=5+k*3;function R(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}
  for(x=TX0;x<=TX1;x+=2){u=(x-TX0)/(TX1-TX0);
    if(k==0){var f=(u*8)%1;v=-13*(Math.exp(-Math.pow((f-.22)/.07,2))+.38*Math.exp(-Math.pow((f-.5)/.08,2)))+3}
    else if(k==1)v=-11*Math.sin(u*Math.PI*2*2.2);
    else if(k==2)v=-4*Math.sin(u*Math.PI*1.3)+3*u-1;
    else{var bu=Math.exp(-Math.pow((u-.3)/.07,2))+.7*Math.exp(-Math.pow((u-.74)/.05,2));v=(R()-.5)*26*bu+(R()-.5)*1.4}
    a.push([x,y0+v])}
  return sxP(a)}
var SXLAB=["HEART RATE","RESPIRATION RATE","SKIN TEMPERATURE","MOVEMENT"];
function sxEdge(y){var dx=CX-TX1,dy=CY-y,L=Math.hypot(dx,dy);return [CX-dx/L*CR,CY-dy/L*CR]}
function scene(){var mob=MOBILE()?1:0,g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs><linearGradient id="sxFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".2" stop-color="#fff"/><stop offset=".8" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
    '<mask id="sxM" maskUnits="userSpaceOnUse" x="0" y="0" width="'+SCW+'" height="'+SCH+'"><rect x="0" y="0" width="'+SCW+'" height="'+SCH+'" fill="url(#sxFade)"/></mask></defs>';
  g+='<g id="scBase"><g mask="url(#sxM)">'+sxArm()+'</g>'+sxMesh()+sxSerp()+'</g><g id="sxPads">'+sxPads()+'</g>';
  /* step 1 labels */
  g+='<g id="lb1"><path class="ld" d="M'+(AX+sxHW(190)+4).toFixed(1)+' 186L292 150"/><text x="300" y="154">STRETCH-MESH SLEEVE</text>'+
     '<path class="ld" d="M'+(SXPADS[2][0]+9)+' 256L292 256"/><text x="300" y="260">SENSOR PADS</text>'+
     '<text class="t2" x="300" y="346">NO ADHESIVES · NO STRAPS</text></g>';
  /* step 2: connectors from the sleeve, and the traces */
  g+='<g id="sxTr">';for(i=0;i<4;i++){g+='<path class="cn" d="M'+(AX+40)+' 256L'+(TX0-10)+' '+ROWS[i]+'"/><path class="tr" d="'+sxWave(i,ROWS[i])+'"/>'}g+='</g>';
  g+='<g id="lb2">';for(i=0;i<4;i++)g+='<text x="'+TX0+'" y="'+(ROWS[i]-26)+'">'+SXLAB[i]+'</text>';g+='</g>';
  /* step 3: the cloud and the record */
  g+='<g id="sxCl">';for(i=0;i<4;i++){var e=sxEdge(ROWS[i]);g+='<path class="cn2" d="M'+(TX1+6)+' '+ROWS[i]+'L'+e[0].toFixed(1)+' '+e[1].toFixed(1)+'"/>'}
  g+='<circle class="nd" cx="'+CX+'" cy="'+CY+'" r="'+CR+'"/><path class="cn2" d="M'+CX+' '+(CY+CR)+'L'+CX+' 384"/><rect class="nd" x="642" y="384" width="96" height="56"/></g>';
  g+='<g id="lb3"><text x="'+CX+'" y="'+(mob?CY+8:CY+5)+'" text-anchor="middle">CLOUD</text><text x="'+CX+'" y="'+(mob?421:417)+'" text-anchor="middle">EHR</text>'+
     '<text class="t2" x="'+(mob?650:600)+'" y="'+(mob?486:478)+'" text-anchor="middle">'+(mob?'ON REVIEW':'PULLED ON CLINICIAN REVIEW')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),pads:$("#sxPads",svg),cn:dl("#sxTr .cn"),tr:dl("#sxTr .tr"),cl:$("#sxCl",svg),cn2:dl("#sxCl .cn2"),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),ld1:dl("#lb1 .ld")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.pads,b)}
    var s1=seg(p,.04,.2),s2=sm2(seg(p,.36,.6)),s3=sm2(seg(p,.7,.9));
    /* step 1: name the sleeve */
    op(E.l1,b*(1-seg(p,.27,.34)));draw(E.ld1,b);
    /* step 2: connectors, then traces draw out to their ends */
    draw(E.cn,Math.min(1,s2*2.2));draw(E.tr,Math.max(0,Math.min(1,s2*1.3-.3)));op(E.l2,b*seg(p,.42,.52));
    /* step 3: the cloud and the record */
    op(E.cl,b*seg(p,.68,.74));draw(E.cn2,s3);op(E.l3,b*seg(p,.8,.88));
  };
}
function sm2(x){return x*x*(3-2*x)}
