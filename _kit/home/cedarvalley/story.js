/* the story scene (BL/BY/DB): ONE engraved county map, the firm's own metaphor: "identifying your Resources (Point A)
   and your Goals (Point B) and determining how to get from your Point A to your Point B; creating a financial roadmap".
   Step 1 marks both points and draws the road between them; step 2 sets a milepost for each goal's time horizon;
   step 3 puts the car on the road ("where the rubber hits the road"); step 4 drives on, through an annual review
   each year, to Point B. Each step changes one labelled part of the same map. */
function crs(P,n){var o=[];for(var i=0;i<P.length-1;i++){var p0=P[Math.max(i-1,0)],p1=P[i],p2=P[i+1],p3=P[Math.min(i+2,P.length-1)];
  for(var k=0;k<n;k++){var t=k/n,t2=t*t,t3=t2*t;o.push([.5*((2*p1[0])+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),.5*((2*p1[1])+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)])}}
  o.push(P[P.length-1]);return o}
function rmap(o){
  var R=crs(o.road,16),N=R.length,V=crs(o.river,16),M=V.length,i,j,k;
  function f(n){return n.toFixed(1)}
  function pl(P){return "M"+P.map(function(p){return f(p[0])+" "+f(p[1])}).join("L")}
  function at(P,u){var n=P.length,j=Math.max(0,Math.min(n-1,Math.round(u*(n-1)))),a=P[Math.max(0,j-1)],b=P[Math.min(n-1,j+1)],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.sqrt(dx*dx+dy*dy)||1;return {x:P[j][0],y:P[j][1],nx:-dy/l,ny:dx/l}}
  function off(P,d){return pl(P.map(function(p,j){var q=at(P,j/(P.length-1));return [p[0]+q.nx*d,p[1]+q.ny*d]}))}
  var W=o.W,H=o.H,rw=o.rw,vw=o.vw;
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true"><defs><clipPath id="scClip"><rect x="0" y="0" width="'+W+'" height="'+H+'"/></clipPath></defs>';
  /* base map: section-line grid, valley contours, the Cedar River, a compass, the neatline */
  g+='<g id="scBase"><g clip-path="url(#scClip)">';
  for(k=o.grid;k<W;k+=o.grid)g+='<path class="grd" d="M'+k+' 0V'+H+'"/>';
  for(k=o.grid;k<H;k+=o.grid)g+='<path class="grd" d="M0 '+k+'H'+W+'"/>';
  for(k=1;k<=3;k++){g+='<path class="ct sD" style="opacity:'+(1-k*.22).toFixed(2)+'" d="'+off(V,vw+k*o.gap)+'"/><path class="ct sD" style="opacity:'+(1-k*.22).toFixed(2)+'" d="'+off(V,-vw-k*o.gap)+'"/>'}
  var wp=V.map(function(p,j){var q=at(V,j/(M-1));return f(p[0]+q.nx*vw)+" "+f(p[1]+q.ny*vw)}),wq=[];for(j=M-1;j>=0;j--){var q=at(V,j/(M-1));wq.push(f(V[j][0]-q.nx*vw)+" "+f(V[j][1]-q.ny*vw))}
  g+='<path class="wat" d="M'+wp.join("L")+"L"+wq.join("L")+'Z"/>';
  g+='<path class="bank sD" d="'+off(V,vw)+'"/><path class="bank sD" d="'+off(V,-vw)+'"/>';
  /* stands of cedar along the river: small engraved cones */
  var Rr=function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}(29);
  for(i=0;i<(o.mob?16:30);i++){var u=.03+Rr()*.94,qq=at(V,u),sd=Rr()<.5?1:-1,dd=vw+o.gap*(1.4+Rr()*2.2),tx=qq.x+qq.nx*dd*sd,ty=qq.y+qq.ny*dd*sd,th=o.mob?7:8;
    if(Math.abs(tx-o.road[0][0])<30&&Math.abs(ty-o.road[0][1])<30)continue;
    g+='<path class="tree" d="M'+f(tx)+' '+f(ty-th)+'L'+f(tx+th*.34)+' '+f(ty)+'H'+f(tx-th*.34)+'Z"/>'}
  g+='</g>';
  g+='<text x="'+o.rvT[0]+'" y="'+o.rvT[1]+'" class="rv" transform="rotate('+o.rvT[2]+' '+o.rvT[0]+' '+o.rvT[1]+')">CEDAR RIVER</text>';
  var cx=o.cmp[0],cy=o.cmp[1],cr=o.cmp[2];
  g+='<g class="cmpg"><circle class="cmp" cx="'+cx+'" cy="'+cy+'" r="'+cr+'"/>';
  for(i=0;i<16;i++){var a=i/16*Math.PI*2,l=i%4?.1:.2;g+='<path class="cmp" d="M'+f(cx+Math.sin(a)*cr)+' '+f(cy-Math.cos(a)*cr)+'L'+f(cx+Math.sin(a)*cr*(1-l))+' '+f(cy-Math.cos(a)*cr*(1-l))+'"/>'}
  g+='<path class="cmps" d="M'+cx+' '+f(cy-cr*.72)+'L'+f(cx+cr*.16)+' '+cy+'L'+cx+' '+f(cy+cr*.72)+'L'+f(cx-cr*.16)+' '+cy+'Z"/><text x="'+cx+'" y="'+f(cy-cr-8)+'" text-anchor="middle" class="w">N</text></g>';
  g+='<rect class="neat" x=".5" y=".5" width="'+(W-1)+'" height="'+(H-1)+'"/></g>';
  /* step 1: the road (the plan) between Point A and Point B, with its bridge over the river */
  g+='<g id="scRoad"><path class="rdb" d="'+pl(R)+'" style="stroke-width:'+(rw*2)+'"/><path class="rde" d="'+off(R,rw)+'"/><path class="rde" d="'+off(R,-rw)+'"/></g>';
  g+='<path id="scRoadC" class="rdc" d="'+pl(R)+'"/>';
  var X=null;for(i=1;i<N&&!X;i++){for(k=1;k<M;k++){var p1=R[i-1],p2=R[i],p3=V[k-1],p4=V[k],d=(p2[0]-p1[0])*(p4[1]-p3[1])-(p2[1]-p1[1])*(p4[0]-p3[0]);if(!d)continue;
    var ua=((p3[0]-p1[0])*(p4[1]-p3[1])-(p3[1]-p1[1])*(p4[0]-p3[0]))/d,ub=((p3[0]-p1[0])*(p2[1]-p1[1])-(p3[1]-p1[1])*(p2[0]-p1[0]))/d;if(ua>=0&&ua<=1&&ub>=0&&ub<=1){X={u:(i-1+ua)/(N-1)};break}}}
  if(X){var b0=at(R,Math.max(0,X.u-.035)),b1=at(R,Math.min(1,X.u+.035)),r2=rw+3;
    g+='<g id="scBridge"><path class="brg" d="M'+f(b0.x+b0.nx*r2)+' '+f(b0.y+b0.ny*r2)+'L'+f(b1.x+b1.nx*r2)+' '+f(b1.y+b1.ny*r2)+'M'+f(b0.x-b0.nx*r2)+' '+f(b0.y-b0.ny*r2)+'L'+f(b1.x-b1.nx*r2)+' '+f(b1.y-b1.ny*r2)+'"/></g>'}
  var A=o.road[0],B=o.road[o.road.length-1],s=o.mob?1:1.15;
  g+='<g id="scA"><g transform="translate('+A[0]+' '+A[1]+') scale('+s+')"><path class="hs" d="M-10 -4V-15L0 -23L10 -15V-4Z"/><path class="hsl" d="M-3 -4V-10H3V-4M-13 -13L0 -25L13 -13"/></g><circle class="mk" cx="'+A[0]+'" cy="'+A[1]+'" r="3.5"/>'+
     '<text x="'+(A[0]+o.aT[0])+'" y="'+(A[1]+o.aT[1])+'" text-anchor="'+o.aT[2]+'" class="w">POINT A</text><text x="'+(A[0]+o.aT[0])+'" y="'+(A[1]+o.aT[1]+o.lh)+'" text-anchor="'+o.aT[2]+'" class="s">YOUR RESOURCES</text></g>';
  g+='<g id="scB"><g transform="translate('+B[0]+' '+B[1]+') scale('+s+')"><path class="pole" d="M0 0V-34"/><path class="flag" d="M0 -34H18L13 -28.5L18 -23H0Z"/></g><circle class="mk" cx="'+B[0]+'" cy="'+B[1]+'" r="3.5"/>'+
     '<text x="'+(B[0]+o.bT[0])+'" y="'+(B[1]+o.bT[1])+'" text-anchor="'+o.bT[2]+'" class="w">POINT B</text><text x="'+(B[0]+o.bT[0])+'" y="'+(B[1]+o.bT[1]+o.lh)+'" text-anchor="'+o.bT[2]+'" class="s">YOUR GOALS</text></g>';
  /* step 2: a milepost for each goal's time horizon */
  g+='<g id="scMP">';o.mps.forEach(function(m){var q=at(R,m[0]),sd=m[2],px=q.x+q.nx*(rw+5)*sd,py=q.y+q.ny*(rw+5)*sd;
    g+='<g class="mpg"><path class="mp" d="M'+f(px)+' '+f(py)+'V'+f(py-16)+'"/><rect class="mpb" x="'+f(px-3.5)+'" y="'+f(py-22)+'" width="7" height="8"/><text x="'+f(px+m[3])+'" y="'+f(py+m[4])+'" text-anchor="'+m[5]+'" class="a">'+m[1]+'</text></g>'});
  g+='</g>';
  /* step 4: an annual review across the road each year */
  g+='<g id="scQ">';o.qs.forEach(function(m,n){var q=at(R,m[0]),r3=rw+6,sd=m[1],tx=q.x+q.nx*(rw+o.qOff)*sd,ty=q.y+q.ny*(rw+o.qOff)*sd;
    g+='<g class="qg"><path class="qt" d="M'+f(q.x+q.nx*r3)+' '+f(q.y+q.ny*r3)+'L'+f(q.x-q.nx*r3)+' '+f(q.y-q.ny*r3)+'"/><text x="'+f(tx)+'" y="'+f(ty+4)+'" text-anchor="middle" class="q">YEAR '+(n+1)+'</text></g>'});
  g+='</g>';
  /* step 3: the car */
  var CAR='<path class="body" d="M-14 -3H14V-8.5L9.5 -9.5L5.5 -15H-6.5L-10.5 -9.5H-14Z"/><path class="win" d="M-5.5 -13.6H-.8V-9.8H-8.6ZM.8 -13.6H4.8L7.6 -9.8H.8Z"/><circle class="whl" cx="-7.5" cy="-3" r="3"/><circle class="whl" cx="7.5" cy="-3" r="3"/>';
  g+='<g id="scCar"><g class="car">'+CAR+'</g></g>';
  var lg=o.leg;
  g+='<g id="scLeg1"><path class="mp" d="M'+(lg[0]+6)+' '+(lg[1]+5)+'V'+(lg[1]-9)+'"/><rect class="mpb" x="'+(lg[0]+2.5)+'" y="'+(lg[1]-13)+'" width="7" height="7"/><text x="'+(lg[0]+24)+'" y="'+(lg[1]+1)+'" class="w">'+o.legT[0]+'</text></g>';
  g+='<g id="scLeg2"><g class="car" transform="translate('+(lg[0]+6)+' '+(lg[1]+lg[2]+4)+') scale(.55)">'+CAR+'</g><text x="'+(lg[0]+24)+'" y="'+(lg[1]+lg[2]+1)+'" class="w">'+o.legT[1]+'</text></g>';
  g+='<g id="scLeg3"><path class="qt on" d="M'+(lg[0]+6)+' '+(lg[1]+2*lg[2]-9)+'V'+(lg[1]+2*lg[2]+5)+'"/><text x="'+(lg[0]+24)+'" y="'+(lg[1]+2*lg[2]+1)+'" class="a">'+o.legT[2]+'</text></g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return rmap({mob:1,W:400,H:462,grid:50,gap:7,rw:5,vw:9,lh:15,
    road:[[48,318],[96,300],[150,262],[196,214],[250,190],[292,150],[332,112],[352,74]],
    river:[[-10,120],[70,140],[150,190],[220,250],[300,282],[410,300]],rvT:[24,118,10],
    cmp:[356,224,24],aT:[-8,30,"start"],bT:[-10,-38,"end"],
    mps:[[.2,"EDUCATION",-1,-10,-12,"end"],[.56,"TRAVEL",-1,-10,-12,"end"],[.76,"RETIREMENT",-1,-10,-12,"end"]],
    qs:[[.46,1],[.66,1],[.86,1]],qOff:28,
    leg:[16,406,24],legT:["A HORIZON FOR EACH GOAL","LOW-COST, DIVERSIFIED FUNDS","ANNUAL REVIEW"]});
  return rmap({W:800,H:520,grid:64,gap:9,rw:6,vw:12,lh:17,
    road:[[96,384],[190,370],[266,318],[330,262],[420,236],[500,188],[570,140],[650,112],[716,86]],
    river:[[-10,150],[120,170],[250,224],[350,286],[470,330],[600,352],[810,370]],rvT:[40,154,7],
    cmp:[740,262,32],aT:[-10,34,"start"],bT:[-12,-40,"end"],
    mps:[[.2,"EDUCATION",-1,-12,-14,"end"],[.56,"TRAVEL",-1,-12,-14,"end"],[.76,"RETIREMENT",-1,-12,-14,"end"]],
    qs:[[.46,1],[.66,1],[.86,1]],qOff:30,
    leg:[28,462,24],legT:["INVESTMENT POLICY: A HORIZON FOR EACH GOAL","LOW-EXPENSE, BROADLY DIVERSIFIED FUNDS","PERFORMANCE REVIEWED EVERY YEAR"]});
}
function storyDraw(svg){
  var E={base:$$("#scBase .sD",svg),dots:$$("#scBase .grd, #scBase .tree, #scBase .rv, #scBase .cmpg, #scBase .wat, #scBase .neat",svg),a:$("#scA",svg),b:$("#scB",svg),
    road:$$("#scRoad .rde",svg),rdb:$("#scRoad .rdb",svg),rc:$("#scRoadC",svg),br:$("#scBridge",svg),mp:$$("#scMP .mpg",svg),q:$$("#scQ .qg",svg),car:$("#scCar",svg),
    l1:$("#scLeg1",svg),l2:$("#scLeg2",svg),l3:$("#scLeg3",svg)};
  var BL=E.base.map(function(p){return p.getTotalLength()}),RL=E.road.map(function(p){return p.getTotalLength()}),CL=E.rc.getTotalLength(),QF=[.46,.66,.86],mob=svg.classList.contains("mob");
  
  var lastB=-1;
  return function(p,b){
    if(!E.rc.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el,k){el.style.strokeDasharray=BL[k];el.style.strokeDashoffset=(BL[k]*(1-b)).toFixed(1)});E.dots.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.08),sr=seg(p,.02,.2),s2=seg(p,.26,.44),s3=seg(p,.5,.6),dr3=seg(p,.53,.72),s4=seg(p,.76,.97);
    E.a.style.opacity=(b*s1).toFixed(3);E.b.style.opacity=(b*seg(p,.12,.2)).toFixed(3);
    E.road.forEach(function(el,k){el.style.strokeDasharray=RL[k];el.style.strokeDashoffset=(RL[k]*(1-sr)).toFixed(1);el.style.opacity=b});
    E.rdb.style.opacity=(b*sr).toFixed(3);E.rc.style.opacity=(b*seg(p,.12,.22)).toFixed(3);if(E.br)E.br.style.opacity=(b*seg(p,.08,.16)).toFixed(3);
    E.mp.forEach(function(m,n){m.style.opacity=(b*seg(p,.26+n*.05,.36+n*.05)).toFixed(3)});E.l1.style.opacity=(b*s2).toFixed(3);
    var fr=.02+dr3*.36+s4*.58,pt=E.rc.getPointAtLength(CL*fr),pt2=E.rc.getPointAtLength(Math.min(CL,CL*fr+2)),ang=Math.atan2(pt2.y-pt.y,pt2.x-pt.x)*180/Math.PI,k=mob?1.45:1.7;
    ang=Math.max(-28,Math.min(28,ang));
    E.car.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+(pt.y+2).toFixed(1)+") rotate("+ang.toFixed(1)+") scale("+(k*(.75+.25*s3)).toFixed(3)+")");
    E.car.style.opacity=(b*s3).toFixed(3);E.l2.style.opacity=(b*s3).toFixed(3);
    E.l3.style.opacity=(b*seg(p,.74,.82)).toFixed(3);
    E.q.forEach(function(q,n){q.style.opacity=(b*seg(p,.74,.82)).toFixed(3);q.classList.toggle("on",fr>=QF[n]-.005&&s4>0)});
  };
}
