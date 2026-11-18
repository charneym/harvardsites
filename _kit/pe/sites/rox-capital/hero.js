/* Rox Capital Partners: the hexagon of the Rox mark, at architectural scale. A honeycomb lattice builds outward from
   it; the ring of cells around the mark holds Rox's eleven investments (current ones lit, realized ones set), and a slow
   light circles the lattice. CU: the mark is a solid, lit hexagon with the logo's inner hexagon engraved into it.
   params: current (count), realized (count) — from the portfolio page. */
var HM={geo:function(L){var cx,cy,Rb;
    if(L.foot){cx=L.W*.5;cy=L.H*.62;Rb=Math.min(L.H*.26,L.W*.085)}
    else if(L.mob){cx=L.W*.5;cy=L.H*.19;Rb=Math.min(L.W*.15,L.H*.07)}
    else{cx=L.side+L.cw*.81;cy=L.H*.5;Rb=Math.min(L.H*.165,L.cw*.1)}
    return {cx:cx,cy:cy,Rb:Rb,r:Rb/2.3,fx:cx,fy:cy,W:L.W,H:L.H,mob:L.mob,foot:L.foot}},
  build:function(G,ST,E){var r=G.r,dx=Math.sqrt(3)*r,dy=1.5*r,nx=Math.ceil(G.W/dx)+2,ny=Math.ceil(G.H/dy)+2,cells=[];
    for(var j=-ny;j<=ny;j++)for(var i=-nx;i<=nx;i++){var x=G.cx+(i+(((j%2)+2)%2)*.5)*dx,y=G.cy+j*dy;if(x<-dx||x>G.W+dx||y<-dy||y>G.H+dy)continue;
      var d=Math.hypot(x-G.cx,y-G.cy)/r;if(d<2.6)continue;cells.push({x:x,y:y,d:d,a:Math.atan2(y-G.cy,x-G.cx),k:E.R(i+60,j+60)})}
    var P=E.P,n=(P.current||0)+(P.realized||0),ring=cells.filter(function(c){return c.d<3.7}).sort(function(a,b){var T=Math.PI*2;return (a.a+Math.PI/2.4+T)%T-(b.a+Math.PI/2.4+T)%T});
    ring.slice(0,n).forEach(function(c,i){c.port=i<(P.current||0)?2:1;c.dl=i*.12});ST.cells=cells},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,sm=E.sm,t=S.t,r=G.r,ox=S.m[0]*-16,oy=S.m[1]*-10-S.sp*G.H*.04;
    function hex(x,y,R){c.beginPath();for(var k=0;k<6;k++){var an=-Math.PI/2+k*Math.PI/3,px=x+Math.cos(an)*R,py=y+Math.sin(an)*R;k?c.lineTo(px,py):c.moveTo(px,py)}c.closePath()}
    var cx=G.cx+ox,cy=G.cy+oy;
    var gl=c.createRadialGradient(cx,cy,0,cx,cy,G.Rb*4);gl.addColorStop(0,"rgba("+C.acc+","+(.16*e)+")");gl.addColorStop(1,"rgba("+C.acc+",0)");c.fillStyle=gl;c.fillRect(0,0,S.w,S.h);
    var maxD=G.foot?7:G.mob?6:9,sw=(t*.22)%(Math.PI*2)-Math.PI;
    c.lineWidth=1;
    S.ST.cells.forEach(function(q){if(q.d>maxD&&!q.port)return;var ap=sm(e*2.2-q.d/maxD*1.2);if(ap<.01)return;var x=q.x+ox*(1+q.d*.02),y=q.y+oy*(1+q.d*.02);
      var da=Math.abs(((q.a-sw+Math.PI*3)%(Math.PI*2))-Math.PI),lit=Math.exp(-da*da*3);
      if(q.port){var g=sm((e*2.2-.9-q.dl*.5));hex(x,y,r*.9*(.85+.15*g));
        c.fillStyle=q.port===2?"rgba("+C.acc+","+(.92*g).toFixed(3)+")":"rgba("+C.fg+","+((.12+.1*lit)*g).toFixed(3)+")";c.fill();
        c.strokeStyle="rgba("+(q.port===2?C.hi:C.acc)+","+((.55+.3*lit)*g).toFixed(3)+")";c.lineWidth=1.2;c.stroke();c.lineWidth=1;return}
      var a=Math.max(0,.2-q.d/maxD*.17)*(1+lit*1.6)*ap*(.7+.3*q.k);hex(x,y,r*.94);c.strokeStyle="rgba("+(lit>.5?C.acc:C.fg)+","+a.toFixed(3)+")";c.stroke()});
    /* the mark: a solid, lit hexagon with the logo's inner hexagon engraved */
    var pe=S.pe,R=G.Rb*(.94+.06*e)*(1+.012*Math.sin(t*.7));
    var lg=c.createLinearGradient(cx,cy-R,cx,cy+R);lg.addColorStop(0,"rgba("+C.hi+","+(.96*pe)+")");lg.addColorStop(1,"rgba("+C.acc+","+(.9*pe)+")");
    c.save();c.shadowColor="rgba("+C.acc+","+(.4*pe)+")";c.shadowBlur=R*.6;hex(cx,cy,R);c.fillStyle=lg;c.fill();c.restore();
    hex(cx,cy,R*.62);c.lineWidth=Math.max(2,R*.07);c.strokeStyle="rgba("+C.gr+","+(.55*pe)+")";c.stroke();
    hex(cx,cy,R*.3);c.fillStyle="rgba("+C.gr+","+(.18*pe)+")";c.fill();c.lineWidth=1;
  }};
