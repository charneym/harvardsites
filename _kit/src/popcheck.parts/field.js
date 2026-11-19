/* ================= HERO FIELD: night, at home after surgery. A patient's lower leg rests on a pillow on the bed, the
   thigh under the blanket, moonlight from a window on the wall. VenaCheck is strapped round the calf. Its stimulation pulses
   every few seconds: the calf muscle tightens, blood in the deep veins (teal, glowing through the skin) quickens toward the
   heart, and the device's signal arcs rise from the pod (their logo's check-and-signal). Animates on its own; no pointer (CZ). */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oA=null,oB=null,LEG=null,VEINS=[],PT=[],lastT=0;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  /* the leg in its own frame: u along the leg (knee = 0, ankle ~ .8, L = knee-to-ankle length), v across it (down = +) */
  var TOP=[[-.64,.05],[-.36,-.06],[-.15,-.142],[-.03,-.157],[.06,-.142],[.15,-.12],[.3,-.108],[.5,-.095],[.68,-.079],[.79,-.072],[.87,-.1],[.95,-.21],[1.02,-.33],[1.07,-.425],[1.105,-.47],[1.135,-.483]];
  var SOLE=[[1.16,-.466],[1.172,-.43],[1.165,-.39],[1.14,-.33],[1.085,-.2],[1.02,-.07],[.975,.03],[.93,.078],[.87,.086],[.81,.066],[.68,.074],[.52,.098],[.36,.136],[.22,.158],[.1,.152],[0,.142],[-.16,.165],[-.4,.25],[-.64,.33]];
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h,L,kx,bed;
    if(mob){L=w*.55;kx=w*.3;bed=U*.94}else{L=Math.min(cw*.4,h*.6);kx=side+cw*.565;bed=h*.8}
    return {mob:mob,side:side,cw:cw,U:U,L:L,kx:kx,bed:bed,ky:bed-.335*L,a:-.05};
  }
  function P(u,v){var a=G.a,L=G.L;return [G.kx+(u*Math.cos(a)-v*Math.sin(a))*L,G.ky+(u*Math.sin(a)+v*Math.cos(a))*L]}
  function spline(g,pts,closed){var n=pts.length;g.moveTo(pts[0][0],pts[0][1]);
    for(var i=0;i<(closed?n:n-1);i++){var p0=pts[(i-1+n)%n],p1=pts[i],p2=pts[(i+1)%n],p3=pts[(i+2)%n];if(!closed){if(i===0)p0=p1;if(i+2>=n)p3=p2}
      g.bezierCurveTo(p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6,p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6,p2[0],p2[1])}}
  function lerpC(arr,u){for(var i=0;i<arr.length-1;i++){var a=arr[i],b=arr[i+1];if((u-a[0])*(u-b[0])<=0){var k=(u-a[0])/((b[0]-a[0])||1);return a[1]+(b[1]-a[1])*k}}return arr[arr.length-1][1]}
  var CALF_TOP=TOP.slice(0,10),CALF_BOT=SOLE.slice(7).reverse();
  function vt(u){return lerpC(CALF_TOP,u)}function vb(u){return lerpC(CALF_BOT,u)}
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function legPath(){var pts=TOP.concat(SOLE).map(function(q){return P(q[0],q[1])});var p=new Path2D();spline(p,pts,true);p.closePath();return p}
  var B0=.355,B1=.475;
  function bandPath(g,e){var L=G.L,k=.012;
    var pts=[];for(var i=0;i<=8;i++){var u=B0+(B1-B0)*i/8;pts.push(P(u,vt(u)-e))}
    var q=P(B1+k,(vt(B1)+vb(B1))/2),r=P(B1,vb(B1)+e);g.moveTo(pts[0][0],pts[0][1]);for(i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);
    g.quadraticCurveTo(q[0],q[1],r[0],r[1]);
    for(i=8;i>=0;i--){var u2=B0+(B1-B0)*i/8,pp=P(u2,vb(u2)+e);g.lineTo(pp[0],pp[1])}
    var q2=P(B0+k,(vt(B0)+vb(B0))/2),s0=P(B0,vt(B0)-e);g.quadraticCurveTo(q2[0],q2[1],s0[0],s0[1]);g.closePath()}
  function podC(){return P((B0+B1)/2+.004,(vt((B0+B1)/2)+vb((B0+B1)/2))/2-.01)}
  function build(){
    var L=G.L,bed=G.bed,mob=G.mob,H=mob?G.U:h;
    var A=mk(H+2),g=A[1];oA=A[0];
    /* the bedroom wall at night */
    var wall=g.createLinearGradient(0,0,0,bed);wall.addColorStop(0,"#080f26");wall.addColorStop(.6,"#0f1a3d");wall.addColorStop(1,"#17244e");g.fillStyle=wall;g.fillRect(0,0,w,bed+2);
    /* moonlight through a window, cast on the wall: four soft panes */
    var wx=mob?w*.6:G.kx+L*.28,wy=mob?G.U*.08:h*.1,ww=mob?w*.32:L*.62,wh=mob?G.U*.36:h*.36,sk=ww*.16;
    g.save();g.filter="blur("+(mob?3:6)+"px)";
    for(var i=0;i<2;i++)for(var j=0;j<2;j++){var x0=wx+i*(ww/2+3),y0=wy+j*(wh/2+3),pw=ww/2-3,ph=wh/2-3,dx=sk*(j*(wh/2+3))/wh;
      var pg=g.createLinearGradient(x0,y0,x0+pw,y0+ph);pg.addColorStop(0,"rgba(176,196,240,.13)");pg.addColorStop(1,"rgba(176,196,240,.05)");g.fillStyle=pg;
      g.beginPath();g.moveTo(x0+dx,y0);g.lineTo(x0+pw+dx,y0);g.lineTo(x0+pw+dx+sk*ph/wh,y0+ph);g.lineTo(x0+dx+sk*ph/wh,y0+ph);g.closePath();g.fill()}
    g.restore();
    /* the bed: sheet under moonlight, darkening toward the viewer */
    var sh=g.createLinearGradient(0,bed,0,H);sh.addColorStop(0,"#2a3a6c");sh.addColorStop(.12,"#1d2b58");sh.addColorStop(.6,"#132049");sh.addColorStop(1,"#0e1631");
    g.fillStyle=sh;g.beginPath();g.moveTo(0,bed+3);for(var x=0;x<=w+10;x+=10)g.lineTo(x,bed+Math.sin(x*.006)*L*.006);g.lineTo(w,H+2);g.lineTo(0,H+2);g.closePath();g.fill();
    g.strokeStyle="rgba(170,190,235,.10)";g.lineWidth=1;g.beginPath();for(x=0;x<=w+10;x+=10){var yy=bed+Math.sin(x*.006)*L*.006;x?g.lineTo(x,yy):g.moveTo(x,yy)}g.stroke();
    var R=rng(7);g.strokeStyle="rgba(150,172,225,.05)";g.lineWidth=1.2;for(i=0;i<(mob?4:7);i++){var fy=bed+(H-bed)*(.15+R()*.7),fx=R()*w;g.beginPath();g.moveTo(fx-L*.4,fy);g.quadraticCurveTo(fx,fy-L*.03,fx+L*.45,fy+L*.01);g.stroke()}
    /* moonlight pooled on the sheet */
    var mp=g.createRadialGradient(G.kx+L*.7,bed+L*.08,0,G.kx+L*.7,bed+L*.08,L*.7);mp.addColorStop(0,"rgba(170,192,240,.10)");mp.addColorStop(1,"rgba(170,192,240,0)");g.save();g.translate(0,bed);g.scale(1,.3);g.translate(0,-bed);g.fillStyle=mp;g.fillRect(0,bed-L,w,L*3);g.restore();
    /* the pillow under the calf */
    var p1=P(-.04,.13),p2=P(.82,.06),pt=bed-(G.ky+.15*L);
    var pl=[[p1[0]-L*.03,bed],[p1[0]-L*.06,bed-pt*.45],[p1[0]+L*.02,p1[1]+L*.03],[(p1[0]+p2[0])/2,P(.4,.12)[1]+L*.03],[p2[0],p2[1]+L*.03],[p2[0]+L*.08,bed-pt*.4],[p2[0]+L*.05,bed]];
    var pg2=g.createLinearGradient(0,p1[1],0,bed);pg2.addColorStop(0,"#394b84");pg2.addColorStop(.5,"#2a3a6e");pg2.addColorStop(1,"#1b2752");
    g.fillStyle=pg2;g.beginPath();spline(g,pl,false);g.closePath();g.fill();
    g.strokeStyle="rgba(190,206,245,.16)";g.lineWidth=1.1;g.beginPath();spline(g,pl.slice(1,6),false);g.stroke();
    g.strokeStyle="rgba(8,12,30,.35)";g.lineWidth=1;g.beginPath();g.moveTo(p1[0]+L*.02,bed-pt*.35);g.quadraticCurveTo((p1[0]+p2[0])/2,bed-pt*.2,p2[0]+L*.02,bed-pt*.3);g.stroke();
    /* contact shadow of the leg on the pillow and bed */
    var cs=g.createLinearGradient(0,P(.3,.1)[1],0,P(.3,.1)[1]+L*.08);cs.addColorStop(0,"rgba(4,7,20,.55)");cs.addColorStop(1,"rgba(4,7,20,0)");
    g.save();g.fillStyle=cs;g.beginPath();var sp=CALF_BOT.filter(function(q){return q[0]>-.05&&q[0]<.95}).map(function(q){return P(q[0],q[1]-.02)});
    g.moveTo(sp[0][0],sp[0][1]);sp.forEach(function(q){g.lineTo(q[0],q[1])});for(i=sp.length-1;i>=0;i--)g.lineTo(sp[i][0],sp[i][1]+L*.07);g.closePath();g.fill();g.restore();
    /* the leg: moonlit skin, lit from the window above */
    LEG=legPath();
    var gt=P(.3,-.14),gb=P(.3,.17),sk2=g.createLinearGradient(gt[0],gt[1],gb[0],gb[1]);
    sk2.addColorStop(0,"#6a7aa9");sk2.addColorStop(.28,"#45558a");sk2.addColorStop(.7,"#26335f");sk2.addColorStop(1,"#141e43");
    g.fillStyle=sk2;g.fill(LEG);
    /* soft modelling: shin highlight, calf belly, the ankle bone, the shadow under the knee */
    g.save();g.clip(LEG);
    function blob(u,v,rx,ry,col,rot){var q=P(u,v);g.save();g.translate(q[0],q[1]);g.rotate(G.a+(rot||0));g.scale(1,ry/rx);var rg=g.createRadialGradient(0,0,0,0,0,rx*L);rg.addColorStop(0,col);rg.addColorStop(1,col.replace(/[\d.]+\)$/,"0)"));g.fillStyle=rg;g.beginPath();g.arc(0,0,rx*L,0,Math.PI*2);g.fill();g.restore()}
    blob(.42,-.08,.38,.035,"rgba(190,205,240,.22)");blob(-.01,-.11,.07,.05,"rgba(190,205,240,.18)");blob(.79,-.015,.035,.03,"rgba(190,205,240,.14)");
    blob(-.05,.12,.12,.05,"rgba(6,10,28,.35)");blob(1.0,-.2,.16,.05,"rgba(190,205,240,.12)",-1.05);
    g.restore();
    g.strokeStyle="rgba(215,226,250,.42)";g.lineWidth=1.2;g.beginPath();spline(g,TOP.slice(2).map(function(q){return P(q[0],q[1]+.002)}),false);g.stroke();
    g.strokeStyle="rgba(215,226,250,.12)";g.lineWidth=4;g.beginPath();spline(g,TOP.slice(3,12).map(function(q){return P(q[0],q[1]+.006)}),false);g.stroke();
    /* toes: a hint of the toe line on the forefoot */
    g.strokeStyle="rgba(8,12,30,.35)";g.lineWidth=1;g.beginPath();var t1=P(1.07,-.42),t2=P(1.12,-.39);g.moveTo(t1[0],t1[1]);g.quadraticCurveTo((t1[0]+t2[0])/2,t1[1]+L*.01,t2[0],t2[1]);g.stroke();
    /* layer B: VenaCheck's band and pod, and the blanket over the thigh */
    var Bk=mk(H+2),b=Bk[1];oB=Bk[0];
    var bt=P((B0+B1)/2,-.13),bb=P((B0+B1)/2,.16),bg=b.createLinearGradient(bt[0],bt[1],bb[0],bb[1]);
    bg.addColorStop(0,"#9aa3bd");bg.addColorStop(.25,"#6b7493");bg.addColorStop(.7,"#3a4363");bg.addColorStop(1,"#1f2744");
    b.fillStyle=bg;b.beginPath();bandPath(b,.006);b.fill();
    b.strokeStyle="rgba(235,240,252,.28)";b.lineWidth=1;b.beginPath();bandPath(b,.006);b.stroke();
    b.save();b.beginPath();bandPath(b,.006);b.clip();b.setLineDash([2,4]);b.strokeStyle="rgba(235,240,252,.22)";
    [B0+.012,B1-.012].forEach(function(u){var a1=P(u,vt(u)),a2=P(u,vb(u)),qq=P(u+.01,(vt(u)+vb(u))/2);b.beginPath();b.moveTo(a1[0],a1[1]);b.quadraticCurveTo(qq[0],qq[1],a2[0],a2[1]);b.stroke()});b.restore();
    var pc=podC(),pw2=L*.105,ph2=L*.07;b.save();b.translate(pc[0],pc[1]);b.rotate(G.a);
    b.shadowColor="rgba(4,8,22,.6)";b.shadowBlur=L*.03;b.shadowOffsetY=L*.01;
    var pg3=b.createLinearGradient(0,-ph2/2,0,ph2/2);pg3.addColorStop(0,"#e9ecf3");pg3.addColorStop(.5,"#b9c0d2");pg3.addColorStop(1,"#7d869f");b.fillStyle=pg3;
    b.beginPath();if(b.roundRect)b.roundRect(-pw2/2,-ph2/2,pw2,ph2,L*.012);else b.rect(-pw2/2,-ph2/2,pw2,ph2);b.fill();b.shadowColor="transparent";
    b.strokeStyle="rgba(255,255,255,.55)";b.lineWidth=1;b.beginPath();b.moveTo(-pw2/2+L*.01,-ph2/2+1);b.lineTo(pw2/2-L*.01,-ph2/2+1);b.stroke();
    b.fillStyle="#24356d";b.font="600 "+Math.max(5,L*.016).toFixed(1)+"px Manrope, sans-serif";b.textAlign="center";b.textBaseline="middle";b.fillText("VENACHECK",0,ph2*.18);
    b.restore();
    /* the blanket, folded back to the knee */
    var k0=P(-.08,-.2),bl=[[-40,bed+L*.02],[-40,bed-L*.1],[G.kx-L*.95,bed-L*.18],[G.kx-L*.45,G.ky-L*.1],[k0[0]-L*.05,k0[1]-L*.01],[k0[0]+L*.03,k0[1]+L*.06],[k0[0]+L*.035,G.ky+L*.2],[k0[0]+L*.06,bed+L*.03]];
    var blg=b.createLinearGradient(0,G.ky-L*.25,0,bed);blg.addColorStop(0,"#34477f");blg.addColorStop(.35,"#25356a");blg.addColorStop(1,"#18244f");
    b.fillStyle=blg;b.beginPath();b.moveTo(bl[0][0],bl[0][1]);spline(b,bl.slice(1),false);b.lineTo(bl[7][0],bed+L*.2);b.lineTo(-40,bed+L*.2);b.closePath();b.fill();
    b.strokeStyle="rgba(200,214,248,.22)";b.lineWidth=1.2;b.beginPath();spline(b,bl.slice(2,6),false);b.stroke();
    b.strokeStyle="rgba(200,214,248,.12)";b.lineWidth=Math.max(2,L*.012);b.beginPath();spline(b,[[k0[0]-L*.02,k0[1]],[k0[0]+L*.03,G.ky+L*.04],[k0[0]+L*.04,G.ky+L*.2]],false);b.stroke();
    var R2=rng(19);for(i=0;i<4;i++){var fx2=G.kx-L*(.16+i*.2+R2()*.04),fy2=G.ky+L*(.0+i*.05),ex2=fx2-L*(.3+R2()*.1),ey2=bed-L*(.02+R2()*.04);
      b.strokeStyle="rgba(200,214,248,"+(.08-i*.014).toFixed(3)+")";b.lineWidth=1.1;b.beginPath();b.moveTo(fx2,fy2);b.quadraticCurveTo((fx2+ex2)/2,fy2+L*.02,ex2,ey2);b.stroke();
      b.strokeStyle="rgba(6,10,28,.2)";b.lineWidth=2;b.beginPath();b.moveTo(fx2+2,fy2+5);b.quadraticCurveTo((fx2+ex2)/2+2,fy2+L*.03+5,ex2+2,ey2+5);b.stroke()}
    /* fade the blanket and bed out toward the copy on the left */
    b.globalCompositeOperation="destination-out";var fo=b.createLinearGradient(mob?0:G.kx-L*1.25,0,mob?w*.08:G.kx-L*.55,0);fo.addColorStop(0,"rgba(0,0,0,"+(mob?.2:.85)+")");fo.addColorStop(1,"rgba(0,0,0,0)");b.fillStyle=fo;b.fillRect(0,0,mob?w*.08:G.kx-L*.55,H);b.globalCompositeOperation="source-over";
    /* deep veins (posterior tibial and peroneal) up the calf to the popliteal vein behind the knee */
    VEINS=[[[.86,.03],[.72,.045],[.55,.06],[.38,.085],[.22,.095],[.08,.085],[-.02,.07],[-.2,.08]],[[.8,-.005],[.64,.015],[.48,.035],[.32,.06],[.18,.075],[.06,.078]]].map(function(v){
      var pts=v.map(function(q){return P(q[0],q[1])}),len=0,seg=[];for(var i=1;i<pts.length;i++){var d=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);seg.push(d);len+=d}return {pts:pts,seg:seg,len:len}});
    PT=[];var Rp=rng(5);VEINS.forEach(function(v,k){for(var i=0;i<(mob?12:22);i++)PT.push({v:k,s:Rp(),r:.6+Rp()*.8,a:.5+Rp()*.5})});
  }
  function along(v,s){var d=s*v.len;for(var i=0;i<v.seg.length;i++){if(d<=v.seg[i]){var k=d/v.seg[i],a=v.pts[i],b=v.pts[i+1];return [a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k,Math.atan2(b[1]-a[1],b[0]-a[0])]}d-=v.seg[i]}var l=v.pts[v.pts.length-1];return [l[0],l[1],0]}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0,T=3.6;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?1.2:(now-t0)/1000,dt=Math.min(.1,Math.max(0,t-lastT));lastT=t;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var L=G.L,ph=(t%T)/T,stim=ph<.26?Math.sin(Math.PI*ph/.26):0;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oA,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* inside the calf: the muscle tightens with each pulse, the veins glow and the blood quickens toward the knee */
    c.save();c.clip(LEG);
    var mc=P(.2-.02*stim,.075),mr=L*.2;c.save();c.translate(mc[0],mc[1]);c.rotate(G.a);c.scale(1,(.3+.05*stim));var mg=c.createRadialGradient(0,0,0,0,0,mr);
    mg.addColorStop(0,"rgba(150,175,232,"+(.12+.12*stim).toFixed(3)+")");mg.addColorStop(1,"rgba(150,175,232,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,mr,0,Math.PI*2);c.fill();c.restore();
    c.globalCompositeOperation="lighter";c.lineCap="round";c.lineJoin="round";
    VEINS.forEach(function(v,k){var gw=(k?.022:.03)*L;c.strokeStyle="rgba(10,182,204,"+(.10+.08*stim).toFixed(3)+")";c.lineWidth=gw;c.beginPath();spline(c,v.pts,false);c.stroke();
      c.strokeStyle="rgba(63,201,219,"+(.28+.2*stim).toFixed(3)+")";c.lineWidth=Math.max(1,gw*.22);c.beginPath();spline(c,v.pts,false);c.stroke()});
    var sp=.045+.33*stim;
    for(var i=0;i<PT.length;i++){var q=PT[i],v=VEINS[q.v];if(!RM)q.s+=sp*dt*(1.1-.2*q.r)*(q.v?1.12:1);if(q.s>1)q.s-=1;var o=along(v,q.s),fade=Math.min(1,q.s*8,(1-q.s)*6);
      var len=L*(.008+.03*stim)*q.r;c.save();c.translate(o[0],o[1]);c.rotate(o[2]+Math.PI);var pg=c.createLinearGradient(0,0,len*2,0);pg.addColorStop(0,"rgba(190,246,252,"+(q.a*fade*(.55+.45*stim)).toFixed(3)+")");pg.addColorStop(1,"rgba(63,201,219,0)");
      c.fillStyle=pg;c.fillRect(-len*.2,-Math.max(.8,L*.0035*q.r),len*2.2,Math.max(1.6,L*.007*q.r));c.restore()}
    c.globalCompositeOperation="source-over";c.restore();
    c.setTransform(1,0,0,1,0,0);c.drawImage(oB,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the pod's LED and its signal arcs (the check-and-signal of the PopCheck mark) */
    var pc=podC(),lx=pc[0]+L*.036,ly=pc[1]-L*.012,led=.35+.65*stim;
    c.globalCompositeOperation="lighter";
    var lg=c.createRadialGradient(lx,ly,0,lx,ly,L*.05);lg.addColorStop(0,"rgba(63,201,219,"+(.55*led).toFixed(3)+")");lg.addColorStop(1,"rgba(63,201,219,0)");c.fillStyle=lg;c.beginPath();c.arc(lx,ly,L*.05,0,Math.PI*2);c.fill();
    c.fillStyle="rgba(200,250,255,"+(.6+.4*led).toFixed(3)+")";c.beginPath();c.arc(lx,ly,Math.max(1.3,L*.0055),0,Math.PI*2);c.fill();
    c.fillStyle="rgba(230,211,128,.85)";c.beginPath();c.arc(pc[0]-L*.036,ly,Math.max(1,L*.003),0,Math.PI*2);c.fill();
    if(!RM)for(var k2=0;k2<3;k2++){var ap=(ph-.22-k2*.08);if(ap<0||ap>.55)continue;var ar=L*(.05+ap*.42),aa=Math.sin(Math.PI*ap/.55)*(.5-k2*.1);
      c.strokeStyle="rgba(120,220,234,"+aa.toFixed(3)+")";c.lineWidth=Math.max(1,L*.0028);c.beginPath();c.arc(lx,ly-L*.04,ar,-Math.PI*.78,-Math.PI*.22);c.stroke()}
    c.globalCompositeOperation="source-over";c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?podC():[w/2,h/2]}};
})();
