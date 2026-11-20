/* the story scene (BL/BY/DB): the firm's own metaphor, "planning your family's financial future is like putting together a
   puzzle". ONE set of nine fine-line pieces, each a part of the plan named on their site, moves through the four steps of
   "Working With Us": scattered (Discover), drawn together with the links between them (Diagnose), locked into the
   diamond of the firm's mark (Design: the Financial Plan and Investment Policy Statement), and crossed by the mark's
   rising green arrow, ticked each quarter (Deliver). */
var PZ=[["ESTATE",0,0],["GIVING",0,1],["TAXES",0,2],["RETIREMENT",1,0],["PORTFOLIO",1,1],["BUDGET",1,2],["EDUCATION",2,0],["INSURANCE",2,1],["RISK",2,2]];
var PZL=[[4,3],[4,5],[4,8],[1,0],[1,2]];
function pzEdge(P,Q,n,k,s){if(!k)return "L"+Q[0].toFixed(1)+" "+Q[1].toFixed(1);
  var D=[[.35,0],[.40,0],[.42,.04],[.39,.09],[.34,.17],[.42,.26],[.5,.26],[.58,.26],[.66,.17],[.61,.09],[.58,.04],[.60,0],[.65,0]];
  function m(p){return (P[0]+(Q[0]-P[0])*p[0]+n[0]*p[1]*k*s).toFixed(1)+" "+(P[1]+(Q[1]-P[1])*p[0]+n[1]*p[1]*k*s).toFixed(1)}
  var o="L"+m(D[0]);for(var i=1;i<13;i+=3)o+="C"+m(D[i])+" "+m(D[i+1])+" "+m(D[i+2]);return o+"L"+Q[0].toFixed(1)+" "+Q[1].toFixed(1)}
function pzPath(r,c,s){var H=[[1,-1,1],[-1,1,-1]],V=[[1,-1],[-1,1],[1,-1]],h=s/2;
  var kt=r?-H[r-1][c]:0,kb=r<2?H[r][c]:0,kr=c<2?V[r][c]:0,kl=c?-V[r][c-1]:0;
  return "M"+(-h)+" "+(-h)+pzEdge([-h,-h],[h,-h],[0,-1],kt,s)+pzEdge([h,-h],[h,h],[1,0],kr,s)+pzEdge([h,h],[-h,h],[0,1],kb,s)+pzEdge([-h,h],[-h,-h],[-1,0],kl,s)+"Z"}
function pzConf(){
  if(MOBILE())return {mob:1,W:400,H:500,s:78,D:[200,230],k:1.17,sc:.76,
    scat:[[72,78,-16],[200,74,12],[328,84,-10],[70,232,18],[204,240,-6],[330,236,14],[76,392,8],[204,398,-20],[330,390,-12]],
    plan:[200,438,["FINANCIAL PLAN","+ INVESTMENT POLICY STATEMENT"]],q:[200,486,"start"],qT:["MEASURED QUARTERLY VS. BENCHMARK"],fs:13};
  return {W:800,H:560,s:112,D:[380,272],k:1.42,sc:.82,
    scat:[[110,110,-18],[340,96,12],[590,112,-10],[176,290,20],[430,282,-6],[690,292,16],[118,460,8],[388,464,-22],[650,456,-14]],
    plan:[380,546,["FINANCIAL PLAN + INVESTMENT POLICY STATEMENT"]],q:[0,0,"start"],qT:["MEASURED EVERY QUARTER","AGAINST YOUR BENCHMARK"],fs:12};
}
function pzHome(o,r,c,k){var s=o.s*(k||1),gx=(c-1)*s,gy=(r-1)*s,a=Math.SQRT1_2;return [o.D[0]+(gx-gy)*a,o.D[1]+(gx+gy)*a]}
function pzArrow(o){var HD=1.5*o.s*Math.SQRT2,D=o.D;return {p0:[D[0]-.56*HD,D[1]+.3*HD],p1:[D[0]+.12*HD,D[1]+.12*HD],p2:[D[0]+.62*HD,D[1]-.6*HD],HD:HD}}
function scene(){
  var o=pzConf(),g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+o.W+' '+o.H+'" aria-hidden="true">',HD=1.5*o.s*Math.SQRT2,D=o.D,f=function(n){return n.toFixed(1)};
  /* the diamond's outer rim, drawn as the pieces lock */
  g+='<path id="pzRim" class="rim" d="M'+f(D[0])+' '+f(D[1]-HD)+'L'+f(D[0]+HD)+' '+f(D[1])+'L'+f(D[0])+' '+f(D[1]+HD)+'L'+f(D[0]-HD)+' '+f(D[1])+'Z"/>';
  g+='<g id="pzP">';PZ.forEach(function(p){g+='<path class="pc" d="'+pzPath(p[1],p[2],o.s)+'"/>'});g+='</g>';
  g+='<g id="pzL">';PZL.forEach(function(){g+='<path class="lk" d="M0 0L1 1"/>'});g+='</g>';
  /* Design: the plan under the diamond */
  g+='<g id="pzPlan">';o.plan[2].forEach(function(t,i){g+='<text class="a" x="'+o.plan[0]+'" y="'+(o.plan[1]+i*(o.fs+7))+'" text-anchor="middle">'+t+'</text>'});g+='</g>';
  /* Deliver: the rising arrow from the firm's mark, with a tick for each quarter */
  var A=pzArrow(o);
  g+='<path id="pzA" class="arr" d="M'+f(A.p0[0])+' '+f(A.p0[1])+'Q'+f(A.p1[0])+' '+f(A.p1[1])+' '+f(A.p2[0])+' '+f(A.p2[1])+'"/><path id="pzAh" class="arh" d="M0 -9L18 0L0 9Z"/>';
  g+='<g id="pzQ">';for(var i=0;i<4;i++)g+='<circle class="qd" r="'+(o.mob?4:4.5)+'"/>';g+='</g>';
  g+='<g id="pzT">';PZ.forEach(function(p){g+='<text class="w" text-anchor="middle" style="font-size:'+o.fs+'px">'+p[0]+'</text>'});g+='</g>';
  var qx=o.mob?o.q[0]:A.p2[0]+28,qy=o.mob?o.q[1]:A.p2[1]+30;
  g+='<g id="pzQT">';o.qT.forEach(function(t,i){g+='<text class="a" x="'+f(qx)+'" y="'+f(qy+i*(o.fs+7))+'" text-anchor="'+(o.mob?"middle":"start")+'">'+t+'</text>'});g+='</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var o=pzConf(),P=$$("#pzP .pc",svg),T=$$("#pzT text",svg),L=$$("#pzL .lk",svg),rim=$("#pzRim",svg),plan=$("#pzPlan",svg),ar=$("#pzA",svg),ah=$("#pzAh",svg),Q=$$("#pzQ .qd",svg),qt=$("#pzQT",svg);
  var RL=rim.getTotalLength(),AL=ar.getTotalLength(),lastB=-1;
  var HOME=PZ.map(function(p){return pzHome(o,p[1],p[2])}),LOOSE=PZ.map(function(p){return pzHome(o,p[1],p[2],o.k)});
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!ar.isConnected)return;
    var m1=seg(p,.17,.33),m2=seg(p,.42,.58),lk=seg(p,.26,.34)*(1-seg(p,.44,.52)),pl=seg(p,.56,.64),aw=seg(p,.68,.9),fill=seg(p,.5,.66);
    var X=[];
    PZ.forEach(function(pz,i){var S=o.scat[i],x=lerp(lerp(S[0],LOOSE[i][0],m1),HOME[i][0],m2),y=lerp(lerp(S[1],LOOSE[i][1],m1),HOME[i][1],m2),
      rot=lerp(lerp(S[2],45+(i%2?6:-6),m1),45,m2),sc=lerp(o.sc,1,Math.max(m1*.6,m2));X.push([x,y]);
      P[i].setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+rot.toFixed(2)+") scale("+sc.toFixed(3)+")");
      P[i].style.opacity=b.toFixed(3);P[i].style.fillOpacity=(.06+.94*fill).toFixed(3);
      T[i].setAttribute("x",x.toFixed(1));T[i].setAttribute("y",(y+o.fs*.36).toFixed(1));T[i].style.opacity=b.toFixed(3)});
    PZL.forEach(function(l,j){var a=X[l[0]],c=X[l[1]];L[j].setAttribute("d","M"+a[0].toFixed(1)+" "+a[1].toFixed(1)+"L"+c[0].toFixed(1)+" "+c[1].toFixed(1));L[j].style.opacity=(b*lk).toFixed(3)});
    rim.style.strokeDasharray=RL;rim.style.strokeDashoffset=(RL*(1-seg(p,.52,.66))).toFixed(1);rim.style.opacity=b;
    plan.style.opacity=(b*pl).toFixed(3);
    ar.style.strokeDasharray=AL;ar.style.strokeDashoffset=(AL*(1-aw)).toFixed(1);ar.style.opacity=(b*Math.min(1,aw*8)).toFixed(3);
    var e=ar.getPointAtLength(AL*Math.max(.001,aw)),e0=ar.getPointAtLength(Math.max(0,AL*aw-6)),an=Math.atan2(e.y-e0.y,e.x-e0.x)*180/Math.PI;
    ah.setAttribute("transform","translate("+e.x.toFixed(1)+" "+e.y.toFixed(1)+") rotate("+an.toFixed(1)+")");ah.style.opacity=(b*seg(aw,.02,.12)).toFixed(3);
    Q.forEach(function(q,n){var u=(n+1)/4.6,pt=ar.getPointAtLength(AL*u);q.setAttribute("cx",pt.x.toFixed(1));q.setAttribute("cy",pt.y.toFixed(1));q.style.opacity=(b*(aw>=u?1:0)).toFixed(3)});
    qt.style.opacity=(b*seg(p,.84,.92)).toFixed(3);
  };
}
