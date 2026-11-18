/* Burlington Capital Partners (the approved site, re-expressed as a hero module): the firm's frame repeated in depth
   as a calm corridor, ending at its own mark, lit. Example only: every new firm gets its own concept. */
var HM={geo:function(L){
    if(L.foot)return {vx:L.W*.5,vy:L.H*.62,S:Math.max(L.W,L.H)*.42,fx:L.W*.5,fy:L.H*.62};
    if(L.mob)return {vx:L.W*.5,vy:L.H*.19,S:Math.max(L.W*.62,L.H*.3),fx:L.W*.5,fy:L.H*.19};
    var vx=L.side+L.cw*(L.W<1100?.7:.735);return {vx:vx,vy:L.H*.48,S:Math.max(L.W,L.H)*.62,fx:vx,fy:L.H*.48}},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,P=E.P,sm=E.sm,t=S.t,rd=P.round==null?.1:P.round;
    function rr(x,y,s,r){r=Math.min(r,s/2);c.beginPath();c.moveTo(x+r,y);c.arcTo(x+s,y,x+s,y+s,r);c.arcTo(x+s,y+s,x,y+s,r);c.arcTo(x,y+s,x,y,r);c.arcTo(x,y,x+s,y,r);c.closePath()}
    var vx=G.vx+S.m[0]*-26,vy=G.vy+S.m[1]*-16,Sz=G.S;
    var gl=c.createRadialGradient(vx,vy,0,vx,vy,Sz*.55);gl.addColorStop(0,"rgba("+C.acc+","+(.1*e)+")");gl.addColorStop(1,"rgba("+C.acc+",0)");c.fillStyle=gl;c.fillRect(0,0,S.w,S.h);
    c.lineWidth=1;
    for(var q=0;q<4;q++){var dx=q&1?1:-1,dy=q&2?1:-1;var g=c.createLinearGradient(vx,vy,vx+dx*Sz*1.4,vy+dy*Sz*1.4);g.addColorStop(0,"rgba("+C.fg+",0)");g.addColorStop(.35,"rgba("+C.fg+","+(.08*e)+")");g.addColorStop(1,"rgba("+C.fg+",0)");
      c.strokeStyle=g;c.beginPath();c.moveTo(vx,vy);c.lineTo(vx+dx*Sz*1.4,vy+dy*Sz*1.4);c.stroke()}
    var N=30,flow=(t*.022+S.sp*.35)%1;
    for(var i=0;i<N;i++){var u=(i/N+flow)%1,z=10-9.3*u,s=Sz*2.2/z*(.08+.92*e)*(1/(1+(1-e)*3));
      var a=sm(u/.25)*(1-sm((u-.78)/.22));if(a<.004)continue;var acc=(i%6===0);
      rr(vx-s/2,vy-s/2,s,s*rd);c.lineWidth=acc?1.2:1;
      c.strokeStyle="rgba("+(acc?C.acc:C.fg)+","+(a*e*(acc?.65:.36)*(.55+.45*u)).toFixed(3)+")";c.stroke()}
    var pe=S.pe,ms=Math.max(S.foot?60:90,Sz*.24)*(.92+.08*e),mx=vx-ms/2,my=vy-ms/2;
    var lg=c.createLinearGradient(mx,my,mx+ms,my+ms);lg.addColorStop(0,"rgba("+C.hi+","+(.95*pe)+")");lg.addColorStop(1,"rgba("+C.acc+","+(.85*pe)+")");
    c.save();c.shadowColor="rgba("+C.acc+","+(.35*pe)+")";c.shadowBlur=ms*.5;rr(mx,my,ms,ms*rd);c.fillStyle=lg;c.fill();c.restore();
    var lines=P.lines||[];c.fillStyle="rgba("+C.gr+","+(.92*pe)+")";c.font="400 "+(ms*.124).toFixed(1)+"px "+HERO.font;c.textBaseline="alphabetic";
    var y0=.56-(lines.length-1)*.07;lines.forEach(function(r,k){c.fillText(r,mx+ms*.09,my+ms*(y0+k*.14))});
  }};
