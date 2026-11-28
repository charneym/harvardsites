/* the story scene (BL/BY/DB): ONE topographic drawing of a peak, the firm's namesake, read as a route to a platform.
   Contour lines draw in with the section; on scroll a route climbs from the trailhead to the summit through four
   waypoints, one per step of the support redcloudcap.com > Our Approach lists (strategic planning, add-on acquisitions,
   ERP / reporting and executive recruiting, financing / growth capital). Each waypoint lights and labels as it is
   reached. The terrain is illustrative, not a survey of Redcloud Peak. */
var RC={cx:392,cy:206,N:9};
function rcRing(k){var P=[],n=72,r0=26+k*27,i;for(i=0;i<=n;i++){var t=i/n*Math.PI*2;
  var r=r0*(1+.13*Math.sin(3*t+k*.45)+.07*Math.sin(5*t+1.3+k*.2)+.05*Math.cos(2*t-.6))+k*k*.35;
  P.push([RC.cx+Math.cos(t)*r*1.32,RC.cy+Math.sin(t)*r*.9])}
  var d="M"+P[0][0].toFixed(1)+" "+P[0][1].toFixed(1);for(i=1;i<P.length;i++)d+="L"+P[i][0].toFixed(1)+" "+P[i][1].toFixed(1);return d+"Z"}
var RCW=[[78,468],[178,396],[262,330],[330,262],[392,206]];
function rcRoute(){var W=RCW,d="M"+W[0][0]+" "+W[0][1],i;for(i=1;i<W.length;i++){var a=W[i-1],b=W[i],mx=(a[0]+b[0])/2+(i%2?-26:22),my=(a[1]+b[1])/2+(i%2?-8:12);d+="Q"+mx+" "+my+" "+b[0]+" "+b[1]}return d}
function scene(){
  var mob=MOBILE(),g='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 610 450" aria-hidden="true">',k;
  g+='<g id="rcC">';for(k=RC.N-1;k>=0;k--)g+='<path class="ct'+(k%4===3?' ix':'')+'" d="'+rcRing(k)+'"/>';g+='</g>';
  g+='<path class="tk" d="M'+(RC.cx-5)+' '+(RC.cy+4)+'L'+RC.cx+' '+(RC.cy-5)+'L'+(RC.cx+5)+' '+(RC.cy+4)+'Z"/>';
  g+='<path id="rcR0" class="rt0" d="'+rcRoute()+'"/><path id="rcR" class="rt" d="'+rcRoute()+'"/>';
  var L=mob?["PLAN","ADD-ONS","SYSTEMS","CAPITAL"]:["STRATEGIC PLANNING","ADD-ON ACQUISITIONS","ERP · REPORTING · PEOPLE","GROWTH CAPITAL"];
  for(k=1;k<5;k++){var w=RCW[k];g+='<g class="wp" id="rcW'+k+'"><circle cx="'+w[0]+'" cy="'+w[1]+'" r="'+(k===4?7:5)+'"/>'+
    '<text class="t a" x="'+(w[0]+16)+'" y="'+(w[1]+(k===4?-14:5))+'">'+L[k-1]+'</text></g>'}
  g+='<text class="t s" x="'+(RCW[0][0]-6)+'" y="'+(RCW[0][1]+22)+'">TRAILHEAD</text>';
  g+='<text class="t s" id="rcE" x="'+(RC.cx+16)+'" y="'+(RC.cy+22)+'">'+(mob?"14,034 FT":"REDCLOUD PEAK · 14,034 FT")+'</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var C=$$("#rcC path",svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():800;p.style.strokeDasharray=L+" "+L;return [p,L]});
  var R=$("#rcR",svg),RL=R.getTotalLength?R.getTotalLength():700;R.style.strokeDasharray=RL+" "+RL;
  var W=[1,2,3,4].map(function(k){return $("#rcW"+k,svg)}),E=$("#rcE",svg),R0=$("#rcR0",svg);
  /* share of the route length at each waypoint */
  var F=[0,.22,.47,.72,1],lastB=-1;
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;C.forEach(function(a,i){var v=Math.max(0,Math.min(1,b*1.25-i*.03));a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)});R0.style.opacity=(b*.9).toFixed(3);E.style.opacity=b.toFixed(3)}
    /* step k (0..3) spans a quarter of the scroll and climbs the route from F[k] to F[k+1] */
    var q=Math.max(0,Math.min(1,p/.96)),st=Math.min(3,Math.floor(q*4)),loc=seg(q*4-st,.1,.75),f=F[st]+(F[st+1]-F[st])*loc;
    R.style.strokeDashoffset=(RL*(1-f)).toFixed(1);R.style.opacity=b.toFixed(3);
    W.forEach(function(w,i){var past=st>i,here=st===i&&loc>.98;w.style.opacity=(b*(here?1:past?.5:0)).toFixed(3);w.classList.toggle("on",here)});
  };
}
