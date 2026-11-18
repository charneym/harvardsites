/* Watchtower Capital: the lookout. Their W mark (redrawn from the logo) stands high on the right as a solid, lit
   beacon; below it a ground plane recedes to the horizon, and a slow beam sweeps across it. On the plane sit Watchtower's
   two platforms (Ally Services, Fence Builders) with their add-ons tied to them; each glints as the beam passes.
   params: platforms [["LABEL", addOnCount], ...] (from the portfolio page), path/box (the W mark). */
var HM={mask:false,geo:function(L){var W=L.W,H=L.H;
    if(L.foot)return {W:W,H:H,mx:W*.5,my:H*.3,Rm:Math.min(H*.12,W*.05),hy:H*.52,x0:W*.12,x1:W*.88,by:H*1.02,fx:W*.5,fy:H*.5};
    if(L.mob)return {W:W,H:H,mx:W*.66,my:H*.105,Rm:Math.min(W*.075,H*.035),hy:H*.17,x0:-10,x1:W+10,by:H*.33,fx:W*.6,fy:H*.18,mob:1};
    var x0=L.side+L.cw*.5;return {W:W,H:H,mx:L.side+L.cw*.8,my:H*.27,Rm:Math.min(H*.1,L.cw*.065),hy:H*.5,x0:x0,x1:W+10,by:H*1.02,fx:L.side+L.cw*.78,fy:H*.5}},
  build:function(G,ST,E){var R=E.R,P=E.P,pl=P.platforms||[],M=[],at=[[-.42,.42],[.38,.7],[0,.55]];
    pl.forEach(function(p,i){var a=at[i%3];M.push({u:a[0],v:a[1],pl:1,lb:p[0]});for(var k=0;k<p[1];k++){var an=R(i*13+k,3)*6.283,rr=.1+R(i*13+k,4)*.12;M.push({u:a[0]+Math.cos(an)*rr*1.3,v:Math.max(.12,Math.min(.98,a[1]+Math.sin(an)*rr)),of:M.length-1-k})}});
    M.forEach(function(m,i){if(m.of==null&&!m.pl)m.of=0});ST.M=M;ST.path=P.path?new Path2D(P.path):null},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,P=E.P,sm=E.sm,t=S.t,ox=S.m[0]*-14,oy=S.m[1]*-8-S.sp*G.H*.05;
    var hy=G.hy+oy,vx=G.mx+ox*.6,W=G.x1-G.x0;
    function pt(u,v){var k=v*v;return [vx+u*(W*.62)*(.18+.82*k)+ox*k,hy+(G.by+oy-hy)*k]}
    /* horizon glow and line */
    var gl=c.createRadialGradient(vx,hy,0,vx,hy,W*.6);gl.addColorStop(0,"rgba("+C.acc+","+(.14*e)+")");gl.addColorStop(1,"rgba("+C.acc+",0)");c.fillStyle=gl;c.fillRect(G.x0-40,0,W+80,G.H);
    var hg=c.createLinearGradient(G.x0,0,G.x1,0);hg.addColorStop(0,"rgba("+C.fg+",0)");hg.addColorStop(.3,"rgba("+C.fg+","+(.3*e)+")");hg.addColorStop(1,"rgba("+C.fg+","+(.12*e)+")");
    c.strokeStyle=hg;c.lineWidth=1;c.beginPath();c.moveTo(G.x0,hy);c.lineTo(G.x1,hy);c.stroke();
    /* the ground plane: receding rays and depth lines, drawn in as the page arrives */
    var dr=sm(e*1.4);c.lineWidth=1;
    for(var i=-8;i<=8;i++){var a=pt(i/8*1.4,.02),b=pt(i/8*1.4,1);c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(a[0]+(b[0]-a[0])*dr,a[1]+(b[1]-a[1])*dr);c.strokeStyle="rgba("+C.fg+","+(.09*e).toFixed(3)+")";c.stroke()}
    for(var k=1;k<=12;k++){var v=k/12,l=pt(-1.4,v),r=pt(1.4,v);if(v>dr)break;c.beginPath();c.moveTo(Math.max(G.x0,l[0]),l[1]);c.lineTo(r[0],r[1]);c.strokeStyle="rgba("+C.fg+","+((.05+.07*v)*e).toFixed(3)+")";c.stroke()}
    if(!S.foot){c.save();c.globalCompositeOperation="destination-in";var fx=c.createLinearGradient(G.x0,0,G.x0+W*.22,0);fx.addColorStop(0,"rgba(0,0,0,0)");fx.addColorStop(1,"rgba(0,0,0,1)");c.fillStyle=fx;c.fillRect(0,0,G.W,G.H);c.restore()}
    /* the beam: a slow sweep from the beacon down across the plane */
    var ang=Math.sin(t*.32)*.62+S.m[0]*.2,bw=.1,by=G.by,L=(by-G.my)/Math.cos(ang);
    var bx0=vx,by0=G.my+oy+G.Rm*.9;
    var bg=c.createLinearGradient(bx0,by0,bx0+Math.sin(ang)*L,by0+Math.cos(ang)*L);bg.addColorStop(0,"rgba("+C.acc+","+(.22*e)+")");bg.addColorStop(1,"rgba("+C.acc+",0)");
    c.beginPath();c.moveTo(bx0,by0);c.lineTo(bx0+Math.sin(ang-bw)*L,by0+Math.cos(ang-bw)*L);c.lineTo(bx0+Math.sin(ang+bw)*L,by0+Math.cos(ang+bw)*L);c.closePath();c.fillStyle=bg;c.fill();
    /* the platforms and their add-ons */
    var M=S.ST.M,pos=M.map(function(m){return pt(m.u,m.v)});
    M.forEach(function(m,i){if(m.pl)return;var a=pos[i],b=pos[m.of],g=sm(e*2-.6-i*.04);if(g<.01)return;c.beginPath();c.moveTo(b[0],b[1]);c.lineTo(b[0]+(a[0]-b[0])*g,b[1]+(a[1]-b[1])*g);c.strokeStyle="rgba("+C.acc+","+(.45*e).toFixed(3)+")";c.stroke()});
    M.forEach(function(m,i){var p=pos[i],an=Math.atan2(p[0]-bx0,p[1]-by0),d=(an-ang)/.09,lit=Math.exp(-d*d),g=sm(e*2-.5-i*.04);if(g<.01)return;var sz=(m.pl?10:4)*(.55+.45*M[i].v)*(1+lit*.6);
      if(lit>.05){c.beginPath();c.arc(p[0],p[1],sz*3.2,0,6.283);c.fillStyle="rgba("+C.hi+","+(.28*lit*e).toFixed(3)+")";c.fill()}
      if(m.pl){c.save();c.translate(p[0],p[1]);c.rotate(Math.PI/4);c.fillStyle="rgba("+C.acc+","+(g*e)+")";c.fillRect(-sz,-sz,sz*2,sz*2);c.restore();
        if(!G.mob&&!S.foot){c.font="400 11px "+HERO.mono;c.textAlign="left";c.fillStyle="rgba("+C.fg+","+(.78*g*e).toFixed(3)+")";c.fillText(m.lb,p[0]+sz+16,p[1]+sz+16)}}
      else{c.beginPath();c.arc(p[0],p[1],sz,0,6.283);c.fillStyle="rgba("+C.fg+","+((.6+.4*lit)*g*e).toFixed(3)+")";c.fill()}});
    /* the beacon: the W mark, solid, with a soft light behind it (CU) */
    var pe=S.pe,mx=vx,my=G.my+oy,Rm=G.Rm*(.96+.04*e);
    var hl=c.createRadialGradient(mx,my,0,mx,my,Rm*3);hl.addColorStop(0,"rgba("+C.acc+","+(.3*pe)+")");hl.addColorStop(1,"rgba("+C.acc+",0)");c.fillStyle=hl;c.beginPath();c.arc(mx,my,Rm*3,0,6.283);c.fill();
    if(S.ST.path){var bx=(P.box||[400,266]),kk=Rm*2.2/bx[0];c.save();c.translate(mx-bx[0]*kk/2,my-bx[1]*kk/2);c.scale(kk,kk);c.fillStyle="rgba("+C.fg+","+(.95*pe)+")";c.fill(S.ST.path);c.restore()}
  }};
