/* Southeast Acquisition Capital: "every employee an owner". Their mark is a solid square with a small square cut from
   its lower-right corner. Here that square is built from hundreds of small tiles, one per owner. On arrival the tiles
   fill outward from the corner cut-out (ownership passing from the founder to everyone), then a slow wave of light keeps
   travelling out from that corner across the whole company. It moves on its own, so no pointer response (CZ).
   params: n (tiles per side), corner (tiles in the cut-out, as in the logo). */
var HM={geo:function(L){var W=L.W,H=L.H;
    if(L.foot){var nar=W<700,s0=nar?Math.min(H*.15,W*.24):Math.min(H*.66,W*.3),y=nar?H*.63:H*.5;return {W:W,H:H,s:s0,cx:W*.5,cy:y,fx:W*.5,fy:y,foot:1}}
    if(L.mob){var s1=Math.min(W*.46,H*.2);return {W:W,H:H,s:s1,cx:W*.64,cy:H*.2,fx:W*.64,fy:H*.2,mob:1}}
    var s2=Math.min(H*.5,L.cw*.27);return {W:W,H:H,s:s2,cx:L.side+L.cw*.82,cy:H*.53,fx:L.side+L.cw*.82,fy:H*.53}},
  build:function(G,ST,E){var P=E.P,n=G.mob?16:(P.n||22),k=Math.round(n*(P.corner||5)/22),T=[],R=E.R;
    for(var j=0;j<n;j++)for(var i=0;i<n;i++){var ci=n-2-i,cj=n-2-j;if(ci>=0&&ci<k&&cj>=0&&cj<k)continue;
      var dx=n-1-i,dy=n-1-j;T.push({i:i,j:j,d:Math.sqrt(dx*dx+dy*dy)/(n*1.414),v:R(i*31+j,7)})}
    ST.T=T;ST.n=n;ST.k=k},
  draw:function(c,S,E){var G=S.G,ST=S.ST,C=E.C,e=S.e,t=S.t,sm=E.sm,n=ST.n,q=G.s/n,g=q*.14,x0=G.cx-G.s/2,y0=G.cy-G.s/2+(G.mob||G.foot?0:-S.sp*G.H*.05);
    var fade=G.foot?.55:1;
    /* soft shadow-light under the square so it sits on the page */
    var gl=c.createRadialGradient(G.cx,y0+G.s/2,0,G.cx,y0+G.s/2,G.s*.95);gl.addColorStop(0,"rgba("+C.acc+","+(.12*e*fade).toFixed(3)+")");gl.addColorStop(1,"rgba("+C.acc+",0)");c.fillStyle=gl;c.fillRect(0,0,G.W,G.H);
    var wv=(t*.07)%1.6-.3;
    for(var a=0;a<ST.T.length;a++){var T=ST.T[a],ar=sm((e*1.5-T.d)*3.2);if(ar<.01)continue;
      var w=Math.exp(-Math.pow((T.d-wv)/.09,2)),tone=.62+.34*T.v;
      var x=x0+T.i*q+g/2,y=y0+T.j*q+g/2,sz=(q-g)*(.6+.4*ar);
      x+=(q-g-sz)/2;y+=(q-g-sz)/2;
      c.fillStyle="rgba("+C.fg+","+(tone*ar*fade*(1-.55*w)).toFixed(3)+")";c.fillRect(x,y,sz,sz);
      if(w>.04){c.fillStyle="rgba("+C.acc+","+(w*.9*ar*fade).toFixed(3)+")";c.fillRect(x,y,sz,sz)}}
    /* the corner cut-out, as in their mark: outlined by a fine accent frame once the tiles have filled */
    var k=ST.k,cx=x0+(n-1-k)*q,cy=y0+(n-1-k)*q,ce=sm(e*1.4-.3);
    if(ce>.01){c.strokeStyle="rgba("+C.acc+","+(.7*ce*fade).toFixed(3)+")";c.lineWidth=1;c.strokeRect(cx+g/2+.5,cy+g/2+.5,k*q-g-1,k*q-g-1)}}};
