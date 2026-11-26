/* The story scene (BL/BY/DB): how a multistage thermoelectric cooler works, as tec-microsystems.com explains it
   (FAQ "Single-stage Thermoelectric Cooler Typical Construction": two ceramic plates, Bi-Te posts (pellets) between them,
   all connected by conductors, in most cases in series, and terminal wires; "Multistage Thermoelectric Coolers": "every
   previous stage cools down the next one. Thus the resulting dT between hot and cold sides is higher"; News, Jan 2026:
   MC06 multistage TECs reach "temperature levels down to 180..200K"). ONE side section kept on screen:
   Step 1 (Current): a DC current runs in through the wires and along the pellet chain of the first stage.
   Step 2 (Pellets): heat moves down through the pellets; the top ceramic turns cold, the heat sink warm.
   Step 3 (Stages): two more stages settle on top, each cooling the next.
   Step 4 (Cold side): a detector chip sits on the top ceramic; the gauge drops to 180-200 K.
   Pellet counts are illustrative. */
var SCW=800,SCH=520;
/* stages: [x0,x1,pellet top y,ceramic thickness, pellet count]; the stack grows upward from the heat sink */
var TST=[[150,600,10],[220,530,8],[290,460,6]],CT=15,PH=60,SY0=398;
function tcStageY(i){return SY0-i*(PH+CT)}            /* bottom of stage i's lower ceramic... top of the heat sink for i=0 */
function tcScene(o){
  var g='',mob=o.mob,i,k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="tcCer" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1f3f7"/><stop offset="1" stop-color="#b9c1cd"/></linearGradient>'+
     '<linearGradient id="tcP" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfd5de"/><stop offset=".5" stop-color="#eef1f5"/><stop offset="1" stop-color="#a9b2bf"/></linearGradient>'+
     '<linearGradient id="tcN" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5d6a80"/><stop offset=".5" stop-color="#8592a7"/><stop offset="1" stop-color="#4a566b"/></linearGradient></defs>';
  /* heat sink: a base plate with fins */
  g+='<g class="hs" id="tcHs"><rect class="hsb" x="120" y="'+SY0+'" width="510" height="22"/>';
  for(k=0;k<11;k++)g+='<rect class="fin" x="'+(130+k*45)+'" y="'+(SY0+22)+'" width="22" height="70"/>';
  g+='</g>';
  /* the three stages; stage 0 bottom ceramic sits on the heat sink */
  for(i=0;i<3;i++){
    var s=TST[i],yb=tcStageY(i),yc=yb-CT,yp=yc-PH,yt=yp-CT,n=s[2],pw=(s[1]-s[0]-40)/(n*1.55),gp=pw*.55,x;
    g+='<g class="stg" id="tcS'+i+'">';
    g+='<rect class="cer" x="'+s[0]+'" y="'+yc+'" width="'+(s[1]-s[0])+'" height="'+CT+'"/>';
    var cx0=s[0]+20+gp/2;
    /* conductors: bottom pairs (k,k+1) for odd links, top pairs for even links -> series chain */
    for(k=0;k<n;k++){x=cx0+k*(pw+gp);
      if(k%2===0&&k+1<n)g+='<rect class="cnd" x="'+(x-2).toFixed(1)+'" y="'+(yp-3)+'" width="'+(2*pw+gp+4).toFixed(1)+'" height="4"/>';
      if(k%2===1&&k+1<n)g+='<rect class="cnd" x="'+(x-2).toFixed(1)+'" y="'+(yc-1)+'" width="'+(2*pw+gp+4).toFixed(1)+'" height="4"/>';
      g+='<rect class="'+(k%2?"pn":"pp")+'" x="'+x.toFixed(1)+'" y="'+yp+'" width="'+pw.toFixed(1)+'" height="'+PH+'"/>'}
    /* end pads of the chain */
    g+='<rect class="cnd" x="'+(cx0-12).toFixed(1)+'" y="'+(yc-1)+'" width="'+(pw+12).toFixed(1)+'" height="4"/>';
    x=cx0+(n-1)*(pw+gp);g+='<rect class="cnd" x="'+x.toFixed(1)+'" y="'+(yc-1)+'" width="'+(pw+12).toFixed(1)+'" height="4"/>';
    g+='<rect class="cer top" id="tcT'+i+'" x="'+s[0]+'" y="'+yt+'" width="'+(s[1]-s[0])+'" height="'+CT+'"/>';
    /* heat drops travelling down through this stage's pellets */
    g+='<g class="heat" id="tcH'+i+'">';for(k=0;k<n;k++){x=cx0+k*(pw+gp)+pw/2;g+='<circle cx="'+x.toFixed(1)+'" cy="'+(yp+6)+'" r="3.2"/>'}g+='</g>';
    g+='</g>';
  }
  /* terminal wires into stage 0, black (-) and red (+), from the left */
  var wy=tcStageY(0)-CT-2;
  g+='<path class="wr wn" d="M20 '+(wy-26)+'H96L'+(TST[0][0]+8)+' '+(wy-2)+'"/><path class="wr wp" d="M20 '+(wy+12)+'H100L'+(TST[0][0]+8)+' '+(wy+4)+'"/>';
  g+='<g id="tcI">';for(k=0;k<7;k++)g+='<circle class="cur" r="3.4" cx="0" cy="0"/>';g+='</g>';
  /* detector chip on the top ceramic */
  var ty=tcStageY(2)-CT-PH-CT;
  g+='<g id="tcChip" class="chip"><rect x="330" y="'+(ty-22)+'" width="90" height="22"/><path d="M340 '+(ty-11)+'H410"/><rect class="die" x="357" y="'+(ty-18)+'" width="36" height="14"/></g>';
  /* temperature gauge, left, clear of the wires */
  var GY0=96,GY1=290;
  g+='<g class="gauge"><rect class="gb" x="52" y="'+GY0+'" width="14" height="'+(GY1-GY0)+'"/><rect id="tcGf" class="gf" x="55" y="'+(GY0+3)+'" width="8" height="'+(GY1-GY0-6)+'"/></g>';
  g+='<g id="tcLk"><text class="t" x="'+(mob?20:44)+'" y="'+(GY0-(mob?24:18))+'">'+(mob?"TEMP.":"COLD-SIDE TEMP.")+'</text></g>';
  g+='<g id="tcLg"><text class="t big" x="78" y="'+(mob?GY0+26:GY1)+'" id="tcLgt">180–200 K</text></g>';
  /* labels, right of the stack with leaders; on phones only cold and hot side */
  var lx=650;
  function lab(id,y,ax,ay,txt){return '<g id="'+id+'" class="lb"><path class="ld" d="M'+(ax+8)+' '+ay+'H'+(lx-10)+'V'+(y-4)+'"/><text class="t" x="'+lx+'" y="'+y+'">'+txt+'</text></g>'}
  g+='<g id="tcLc" class="lb">'+(mob?'':'<path class="ld" d=""/>')+'<text class="t" x="'+(mob?660:lx)+'" y="0">'+(mob?"COLD":"COLD SIDE")+'</text></g>';
  if(!mob){
    g+=lab("tcLp",tcStageY(0)-CT-PH/2+4,TST[0][1],tcStageY(0)-CT-PH/2,"BI-TE PELLETS");
    g+=lab("tcLh",SY0+16,TST[0][1]+30,SY0+11,"HEAT SINK");
    g+='<g id="tcLw"><text class="t" x="20" y="'+(wy-42)+'">TERMINAL WIRES</text></g>';
  }else{
    g+='<g id="tcLh" class="lb"><text class="t" x="660" y="'+(SY0+44)+'">HOT</text></g>';
  }
  return g+'</svg>';
}
function scene(){return tcScene({mob:MOBILE()?1:0})}
/* the series path of stage 0's current: along the wire, then up and down the pellets */
function tcCurPath(){
  var s=TST[0],n=s[2],pw=(s[1]-s[0]-40)/(n*1.55),gp=pw*.55,cx0=s[0]+20+gp/2,yb=tcStageY(0)-CT,yt=yb-PH,pts=[],wy=tcStageY(0)-CT-2,k,x;
  pts.push([20,wy+12],[100,wy+12],[s[0]+8,wy+4]);
  for(k=0;k<n;k++){x=cx0+k*(pw+gp)+pw/2;if(k%2===0){pts.push([x,yb-2],[x,yt+2])}else{pts.push([x,yt+2],[x,yb-2])}}
  pts.push([s[0]+8+ (s[1]-s[0]) -16,yb-2]);
  var L=[0];for(k=1;k<pts.length;k++)L.push(L[k-1]+Math.hypot(pts[k][0]-pts[k-1][0],pts[k][1]-pts[k-1][1]));
  return {pts:pts,L:L,T:L[L.length-1]};
}
function tcAt(P,d){d=((d%P.T)+P.T)%P.T;for(var k=1;k<P.L.length;k++)if(P.L[k]>=d){var u=(d-P.L[k-1])/(P.L[k]-P.L[k-1]||1);return [P.pts[k-1][0]+u*(P.pts[k][0]-P.pts[k-1][0]),P.pts[k-1][1]+u*(P.pts[k][1]-P.pts[k-1][1])]}return P.pts[0]}
function storyDraw(svg){
  var E={S:[$("#tcS0",svg),$("#tcS1",svg),$("#tcS2",svg)],T:[$("#tcT0",svg),$("#tcT1",svg),$("#tcT2",svg)],H:[$$("#tcH0 circle",svg),$$("#tcH1 circle",svg),$$("#tcH2 circle",svg)],
    hs:$("#tcHs",svg),I:$$("#tcI circle",svg),chip:$("#tcChip",svg),gf:$("#tcGf",svg),Lg:$("#tcLg",svg),Lk:$("#tcLk",svg),
    Lc:$("#tcLc",svg),Lp:$("#tcLp",svg),Lh:$("#tcLh",svg),Lw:$("#tcLw",svg),base:$$(".hs,.wr,.gauge,#tcS0",svg)};
  var P=tcCurPath(),lastB=-1,PH0=PH,GH=+E.gf.getAttribute("height"),GY=+E.gf.getAttribute("y");
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mix(a,b,u){return Math.round(a+(b-a)*u)}
  function col(c1,c2,u){return "rgb("+mix(c1[0],c2[0],u)+","+mix(c1[1],c2[1],u)+","+mix(c1[2],c2[2],u)+")"}
  var COLD=[143,195,255],NEU=[225,230,238],WARM=[224,122,80];
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)})}
    var s1=seg(p,.02,.2),s2=seg(p,.27,.45),s3a=seg(p,.52,.62),s3b=seg(p,.6,.72),s4=seg(p,.78,.94);
    /* current dots run along the series chain once step 1 starts, and keep running */
    var run=Math.max(s1,p>.2?1:0),phase=p*2600;
    E.I.forEach(function(c,k){var q=tcAt(P,phase+k*P.T/E.I.length);c.setAttribute("cx",q[0].toFixed(1));c.setAttribute("cy",q[1].toFixed(1));op(c,b*run*.95)});
    /* stages 2 and 3 settle onto the stack */
    [[1,s3a],[2,s3b]].forEach(function(a){var el=E.S[a[0]];op(el,b*(.16+.84*a[1]));el.setAttribute("transform","translate(0,"+(-36*(1-a[1])).toFixed(1)+")")});
    /* heat flows down through every visible stage from step 2 */
    var hv=s2,top=s3b>.5?2:s3a>.5?1:0;
    E.H.forEach(function(arr,i){var vis=i===0?hv:i===1?s3a*hv:s3b*hv;arr.forEach(function(c,k){var u=((p*9+k*.37+i*.21)%1);c.setAttribute("transform","translate(0,"+(u*(PH0-12)).toFixed(1)+")");op(c,b*vis*(1-Math.abs(u-.5)*1.2))})});
    /* the cold side: the top ceramic of the highest stage cools, the stage below it relaxes */
    var cold0=s2*(1-.55*s3a),cold1=s3a*s2*(1-.45*s3b),cold2=s3b*s2;
    E.T[0].style.fill=col(NEU,COLD,cold0*.85);E.T[1].style.fill=col(NEU,COLD,cold1*.9);E.T[2].style.fill=col(NEU,COLD,cold2);
    E.hs.style.color=col([150,162,182],WARM,s2*.9);
    /* the gauge drops in steps: room temperature, one stage, three stages, at the detector */
    var lv=1-.3*s2-.35*s3b-.2*s4;E.gf.setAttribute("height",(GH*lv).toFixed(1));E.gf.setAttribute("y",(GY+GH*(1-lv)).toFixed(1));E.gf.style.fill=col(WARM,COLD,1-lv>.3?1:(1-lv)/.3);
    op(E.chip,b*s4);E.chip.setAttribute("transform","translate(0,"+(-18*(1-s4)).toFixed(1)+")");
    op(E.Lg,b*s4);op(E.Lk,b*(.5+.5*seg(p,.24,.32)));
    op(E.Lw,b*(.45+.55*seg(p,0,.06)));op(E.Lp,b*(.45+.55*seg(p,0,.08)));op(E.Lh,b*(.45+.55*seg(p,.26,.32)));
    if(E.Lc){op(E.Lc,b*(.45+.55*seg(p,.3,.36)));
      var yt=tcStageY(top)-CT-PH-CT,tx=E.Lc.querySelector("text"),ld=E.Lc.querySelector("path"),mobS=svg.classList.contains("mob");
      if(mobS){tx.setAttribute("y",(yt+22).toFixed(1))}else{tx.setAttribute("y",(yt+11).toFixed(1));ld.setAttribute("d","M"+(TST[top][1]+8)+" "+(yt+7)+"H"+(650-10)+"V"+(yt+7))}}
  };
}
