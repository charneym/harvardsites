/* the story scene (BL/BY/DB): ONE engraved river chart, from where the client stands today down to the open water of
   their goals. Step 1 marks both ends; step 2 plots the course (the Investment Policy) between buoys of risk tolerance;
   step 3 launches the boat (the portfolio of low-cost, diversified funds); step 4 sails it down the course, passing
   a quarterly review mark each time. Each step changes one labelled part of the same chart. */
function crs(P,n){var o=[];for(var i=0;i<P.length-1;i++){var p0=P[Math.max(i-1,0)],p1=P[i],p2=P[i+1],p3=P[Math.min(i+2,P.length-1)];
  for(var k=0;k<n;k++){var t=k/n,t2=t*t,t3=t2*t;o.push([.5*((2*p1[0])+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),.5*((2*p1[1])+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)])}}
  o.push(P[P.length-1]);return o}
function chart(o){
  var C=crs(o.pts,14),N=C.length,F=o.fs,i,k;
  function hw(u){return o.hw0+(o.hw1-o.hw0)*u*u+(u>.84?Math.pow(u-.84,2)*o.sea:0)}
  function at(u){var j=Math.max(0,Math.min(N-1,Math.round(u*(N-1)))),a=C[Math.max(0,j-1)],b=C[Math.min(N-1,j+1)],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.sqrt(dx*dx+dy*dy)||1;return {x:C[j][0],y:C[j][1],nx:-dy/l,ny:dx/l,w:hw(j/(N-1))}}
  function off(d,side){var s=[];for(var j=0;j<N;j++){var q=at(j/(N-1)),r=q.w+d;s.push((q.x+q.nx*r*side).toFixed(1)+" "+(q.y+q.ny*r*side).toFixed(1))}return "M"+s.join("L")}
  function seg2(u0,u1){var s=[];for(var j=0;j<N;j++){var u=j/(N-1);if(u<u0||u>u1)continue;s.push(C[j][0].toFixed(1)+" "+C[j][1].toFixed(1))}return "M"+s.join("L")}
  function f(n){return n.toFixed(1)}
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+o.W+' '+o.H+'" aria-hidden="true"><defs><clipPath id="scClip"><rect x="0" y="0" width="'+o.W+'" height="'+o.H+'"/></clipPath></defs>';
  /* base chart: shore contours, banks, soundings, compass rose, neatline */
  g+='<g id="scBase"><g clip-path="url(#scClip)">';
  var wp=[];for(var j=0;j<N;j++){var q=at(j/(N-1));wp.push(f(q.x+q.nx*q.w)+" "+f(q.y+q.ny*q.w))}for(j=N-1;j>=0;j--){q=at(j/(N-1));wp.push(f(q.x-q.nx*q.w)+" "+f(q.y-q.ny*q.w))}
  g+='<path class="wat" d="M'+wp.join("L")+'Z"/>';
  for(k=3;k>=1;k--){g+='<path class="ct sD" style="opacity:'+(1-k*.24).toFixed(2)+'" d="'+off(k*o.gap,1)+'"/><path class="ct sD" style="opacity:'+(1-k*.24).toFixed(2)+'" d="'+off(k*o.gap,-1)+'"/>'}
  g+='<path class="bank sD" d="'+off(0,1)+'"/><path class="bank sD" d="'+off(0,-1)+'"/>';
  var R=function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}(23);
  for(i=0;i<(o.mob?46:90);i++){var u=.04+R()*.94,qq=at(u),d=(R()-.5)*1.3*qq.w;g+='<circle class="dot" cx="'+f(qq.x+qq.nx*d)+'" cy="'+f(qq.y+qq.ny*d)+'" r="'+(o.mob?1:1.1)+'"/>'}
  g+='</g>';
  var cx=o.cmp[0],cy=o.cmp[1],cr=o.cmp[2];
  g+='<g class="cmpg"><circle class="cmp" cx="'+cx+'" cy="'+cy+'" r="'+cr+'"/><circle class="cmp" cx="'+cx+'" cy="'+cy+'" r="'+f(cr*.8)+'"/>';
  for(i=0;i<32;i++){var a=i/32*Math.PI*2,l=i%8?(i%2?.06:.1):.16;g+='<path class="cmp" d="M'+f(cx+Math.sin(a)*cr)+' '+f(cy-Math.cos(a)*cr)+'L'+f(cx+Math.sin(a)*cr*(1-l))+' '+f(cy-Math.cos(a)*cr*(1-l))+'"/>'}
  var st=[];for(i=0;i<8;i++){var a2=i/8*Math.PI*2,rr=i%2?cr*.26:cr*.74;st.push(f(cx+Math.sin(a2)*rr)+" "+f(cy-Math.cos(a2)*rr))}
  g+='<path class="cmps" d="M'+st.join("L")+'Z"/><path class="cmp" d="M'+cx+' '+f(cy-cr*.74)+'V'+f(cy+cr*.74)+'M'+f(cx-cr*.74)+' '+cy+'H'+f(cx+cr*.74)+'"/><text x="'+cx+'" y="'+f(cy-cr-8)+'" text-anchor="middle" class="w">N</text></g>';
  g+='<rect class="neat" x=".5" y=".5" width="'+(o.W-1)+'" height="'+(o.H-1)+'"/></g>';
  /* step 1: where you stand, where you are going */
  var s0=at(.05),gl=at(.88),gs=o.goalSide,lx=gl.x+gl.nx*(gl.w+o.lhOff)*gs,ly=gl.y+gl.ny*(gl.w+o.lhOff)*gs,L=o.lh;
  g+='<g id="scStart"><circle class="mkr" cx="'+f(s0.x)+'" cy="'+f(s0.y)+'" r="'+(o.mob?10:12)+'"/><circle class="mk" cx="'+f(s0.x)+'" cy="'+f(s0.y)+'" r="4.5"/>'+
     '<text x="'+f(s0.x+o.today[0])+'" y="'+f(s0.y+o.today[1])+'" text-anchor="'+o.today[2]+'" class="w">TODAY</text></g>';
  g+='<g id="scGoal"><path class="beam" d="M'+f(lx)+' '+f(ly-29*L)+'L'+f(lx-34*L)+' '+f(ly-38*L)+'L'+f(lx-34*L)+' '+f(ly-21*L)+'Z M'+f(lx)+' '+f(ly-29*L)+'L'+f(lx+34*L)+' '+f(ly-38*L)+'L'+f(lx+34*L)+' '+f(ly-21*L)+'Z"/>'+
     '<g transform="translate('+f(lx)+' '+f(ly)+') scale('+L+')"><path class="lh" d="M-6 0L-3.6 -25H3.6L6 0Z"/><path class="lhs" d="M-5.2 -8H5.2M-4.4 -17H4.4"/><path class="lh" d="M-5.5 -25H5.5V-27H-5.5Z"/><rect class="lamp" x="-2.6" y="-32.5" width="5.2" height="5.5"/><path class="lh" d="M-3.8 -32.5L0 -36.5L3.8 -32.5Z"/><path class="lhs" d="M-10 0H10"/></g>'+
     '<text x="'+f(lx+o.goalT[0])+'" y="'+f(ly+o.goalT[1])+'" text-anchor="'+o.goalT[2]+'" class="w">YOUR GOALS</text></g>';
  /* step 2: the course, between the buoys of risk tolerance */
  g+='<path id="scCourse" class="course" d="'+seg2(.05,.9)+'"/>';
  g+='<g id="scBuoys">';o.buoys.forEach(function(u,n){var b=at(u),r=b.w*.62;
    g+='<rect class="buoy r" x="'+f(b.x+b.nx*r-3.5)+'" y="'+f(b.y+b.ny*r-4.5)+'" width="7" height="9"/><path class="buoy" d="M'+f(b.x-b.nx*r-4.5)+' '+f(b.y-b.ny*r+4)+'H'+f(b.x-b.nx*r+4.5)+'L'+f(b.x-b.nx*r)+' '+f(b.y-b.ny*r-5)+'Z"/>'});
  var bl=at(o.riskU),bs=o.riskSide,bx=bl.x+bl.nx*(bl.w+o.riskOff)*bs,by=bl.y+bl.ny*(bl.w+o.riskOff)*bs;
  g+='<text x="'+f(bx)+'" y="'+f(by)+'" text-anchor="'+o.riskA+'" class="a">RISK TOLERANCE</text></g>';
  var pl=at(o.polU),px=pl.x+pl.nx*(pl.w+o.polOff)*o.polSide,py=pl.y+pl.ny*(pl.w+o.polOff)*o.polSide;
  g+='<g id="scPolL"><path class="lead" d="M'+f(pl.x)+' '+f(pl.y)+'L'+f(px)+' '+f(py)+'"/><text x="'+f(px+o.polT[0])+'" y="'+f(py+o.polT[1])+'" text-anchor="'+o.polT[2]+'" class="a">INVESTMENT POLICY</text></g>';
  /* step 4 marks: a quarterly review across the course */
  g+='<g id="scQ">';o.qs.forEach(function(u,n){var q2=at(u),r2=q2.w*.42,tx=q2.x-q2.nx*(q2.w+o.qOff)*o.qSide,ty=q2.y-q2.ny*(q2.w+o.qOff)*o.qSide;
    g+='<g class="qg"><path class="qt" d="M'+f(q2.x+q2.nx*r2)+' '+f(q2.y+q2.ny*r2)+'L'+f(q2.x-q2.nx*r2)+' '+f(q2.y-q2.ny*r2)+'"/><text x="'+f(tx)+'" y="'+f(ty+4)+'" text-anchor="middle" class="q">Q'+(n+1)+'</text></g>'});
  g+='</g>';
  /* step 3: the boat */
  g+='<g id="scBoat"><g class="boat"><path class="sail" d="M1.5 -31L1.5 -4H17Z"/><path class="sail" d="M-1.5 -27L-1.5 -4H-13Z"/><path class="mast" d="M0 -33V0"/><path class="hull" d="M-16 -1H16L11 6H-11Z"/></g>'+
     '</g>';
  var lg=o.leg,B='<path class="sail" d="M1.5 -31L1.5 -4H17Z"/><path class="sail" d="M-1.5 -27L-1.5 -4H-13Z"/><path class="mast" d="M0 -33V0"/><path class="hull" d="M-16 -1H16L11 6H-11Z"/>';
  g+='<g id="scLeg1"><g class="boat" transform="translate('+(lg[0]+9)+' '+(lg[1]+3)+') scale(.5)">'+B+'</g><text x="'+(lg[0]+28)+'" y="'+(lg[1]+1)+'" class="w">'+o.legT[0]+'</text></g>';
  g+='<g id="scLeg2"><path class="qt" style="stroke:var(--accL)" d="M'+(lg[0]+9)+' '+(lg[1]+lg[2]-9)+'V'+(lg[1]+lg[2]+5)+'"/><text x="'+(lg[0]+28)+'" y="'+(lg[1]+lg[2]+1)+'" class="a">'+o.legT[1]+'</text></g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return chart({mob:1,W:400,H:420,fs:14,pts:[[18,46],[110,52],[196,104],[200,186],[250,252],[330,300],[396,370]],hw0:13,hw1:28,sea:0,gap:9,
    cmp:[338,74,34],today:[0,-22,"start"],goalSide:1,lhOff:26,lh:1.05,goalT:[-22,-12,"end"],buoys:[.16,.4,.86],riskU:.4,riskSide:1,riskOff:16,riskA:"end",
    polU:.16,polSide:-1,polOff:30,polT:[0,4,"start"],qs:[.28,.46,.6,.72],qSide:1,qOff:14,leg:[14,352,28],legT:["THE PORTFOLIO","QUARTERLY REVIEW"]});
  return chart({W:800,H:520,fs:12,pts:[[24,84],[190,92],[302,160],[344,262],[454,326],[604,356],[730,430],[800,470]],hw0:17,hw1:40,sea:0,gap:11,
    cmp:[704,104,50],today:[2,-24,"start"],goalSide:1,lhOff:34,lh:1.25,goalT:[-26,-14,"end"],buoys:[.16,.38,.86],riskU:.38,riskSide:1,riskOff:16,riskA:"end",
    polU:.17,polSide:-1,polOff:34,polT:[0,4,"start"],qs:[.28,.46,.6,.72],qSide:1,qOff:16,leg:[26,446,30],legT:["PORTFOLIO OF LOW-COST, DIVERSIFIED FUNDS","REVIEWED AND REBALANCED EVERY QUARTER"]});
}
function storyDraw(svg){
  var E={base:$$("#scBase .sD",svg),dots:$$("#scBase .dot, #scBase .cmpg, #scBase .wat, #scBase .neat",svg),st:$("#scStart",svg),gl:$("#scGoal",svg),course:$("#scCourse",svg),
    buoys:$("#scBuoys",svg),pol:$("#scPolL",svg),q:$$("#scQ .qg",svg),boat:$("#scBoat",svg),funds:$("#scLeg1",svg),rev:$("#scLeg2",svg)};
  var BL=E.base.map(function(p){return p.getTotalLength()}),CL=E.course.getTotalLength(),QF=[.28,.46,.6,.72],u0=.05,u1=.9;
    QF=QF.map(function(u){return (u-u0)/(u1-u0)});
  var lastB=-1;
  return function(p,b){
    if(!E.course.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el,k){el.style.strokeDasharray=BL[k];el.style.strokeDashoffset=(BL[k]*(1-b)).toFixed(1)});E.dots.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.14),s2=seg(p,.25,.46),s3=seg(p,.5,.64),s4=seg(p,.72,.97);
    E.st.style.opacity=(b*s1).toFixed(3);E.gl.style.opacity=(b*s1).toFixed(3);
    E.course.style.strokeDasharray=CL;E.course.style.strokeDashoffset=(CL*(1-s2)).toFixed(1);E.course.style.opacity=b;
    E.buoys.style.opacity=(b*s2).toFixed(3);E.pol.style.opacity=(b*s2).toFixed(3);
    var fr=(.14-u0)/(u1-u0)+s4*((.78-.14)/(u1-u0)),pt=E.course.getPointAtLength(CL*fr),sc=.7+.3*s3,k=svg.classList.contains("mob")?1:1.15;
    E.boat.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+(pt.y-2).toFixed(1)+") scale("+(k*sc).toFixed(3)+")");
    E.boat.style.opacity=(b*s3).toFixed(3);
    E.funds.style.opacity=(b*s3).toFixed(3);E.rev.style.opacity=(b*seg(p,.7,.8)).toFixed(3);
    E.q.forEach(function(q,n){q.style.opacity=(b*seg(p,.66,.74)).toFixed(3);q.classList.toggle("on",fr>=QF[n]-.005&&s4>0)});
  };
}
