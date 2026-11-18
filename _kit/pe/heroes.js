/* PE hero library. Lifted from the approved live sites; each module is parameterised by colours + a few params.
   gen.js inlines SHELL plus ONE module (the text between its markers) into the src's field region.
   Module contract (browser side):
     HM.geo(L)            L={W,H,side,cw,mob,foot} -> geometry object G (focal point in G.fx,G.fy)
     HM.build(G,ST,E)     optional: precompute into ST (offscreen layers, particles). Called on resize / per footer size.
     HM.draw(c,S,E)       S={t,e,m:[mx,my],sp,G,w,h,pe,foot,ST}; E={R,sm,P,C,dpr}. C={fg,acc,hi,gr} rgb strings.
     HM.mask              false = the shell does not fade the art over the headline column (art already kept right).
   CU: every module draws a FILLED focal point. CW: on phones the canvas sits in a top band (CSS in the engine);
   geo() puts the focal point inside the top ~30% of the screen when L.mob. Footer bookend (BT/CV): paintTo()
   draws the same module at the footer's own size, so no clipped canvas edge can show. */

/*==SHELL==*/
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var m=[0,0],mT=[0,0],IN={v:1},dim=1,dimT=1,SP={v:0},G=null,PA=1,ST={};
  function R(i,k){var x=Math.sin(i*91.7+k*13.3)*43758.5453;return x-Math.floor(x)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function lay(W,H,foot){var side=foot?W*.08:Math.max(Math.min(72,Math.max(16,W*.042)),(W-1320)/2);return {W:W,H:H,side:side,cw:W-2*side,mob:!foot&&W<861,foot:!!foot}}
  function env(foot){return {R:R,sm:sm,P:HERO.params||{},C:foot?HERO.CF:HERO.C,dpr:dpr}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=HM.geo(lay(w,h));ST={};if(HM.build)HM.build(G,ST,env());if(!running)frame(true)}
  function frame(once){
    var t=RM?12:(performance.now()-t0)/1000;
    m[0]+=(mT[0]-m[0])*.05;m[1]+=(mT[1]-m[1])*.05;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.45+.55*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);
    var heroOn=window.scrollY<innerHeight*.85?1:0;PA+=(heroOn-PA)*.12;if(once)PA=heroOn;
    HM.draw(c,{t:t,e:e,m:G.mob?[0,0]:m,sp:G.mob?0:SP.v,G:G,w:w,h:h,pe:e*(.35+.65*PA),foot:0,ST:ST},env());
    /* keep the art in its own columns: fade it out over the headline column on desktop */
    if(!G.mob&&HM.mask!==false){var L=lay(w,h);c.globalCompositeOperation="destination-in";var mk=c.createLinearGradient(L.side+L.cw*.36,0,L.side+L.cw*.54,0);mk.addColorStop(0,"rgba(0,0,0,0)");mk.addColorStop(1,"rgba(0,0,0,1)");c.fillStyle=mk;c.fillRect(0,0,w,h);c.globalCompositeOperation="source-over"}
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  addEventListener("pointermove",function(e){mT[0]=(e.clientX/innerWidth-.5);mT[1]=(e.clientY/innerHeight-.5)},{passive:true});
  /* footer bookend (BT): the same module drawn at the footer canvas's own size, centred, quieter */
  var fG=null,fS={},fK="";
  function paintTo(ctx,W,H,d){var k=W+"x"+H;if(k!==fK){fK=k;fG=HM.geo(lay(W,H,1));fS={};if(HM.build)HM.build(fG,fS,env(1))}
    ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,W,H);HM.draw(ctx,{t:RM?12:(performance.now()-t0)/1000+6,e:1,m:[m[0],0],sp:0,G:fG,w:W,h:H,pe:1,foot:1,ST:fS},env(1))}
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=p},paintTo:paintTo,
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.fx,G.fy]:[w/2,h/2]}};
})();
/*==END==*/

/*==corridor==*/
/* Burlington: the firm's frame repeated in depth as a calm corridor, ending at its own mark, lit.
   params: lines ["FIRM","CAPITAL"] (text set on the lit mark), round (0..0.5 corner radius ratio, .5 = circle) */
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
/*==END==*/

/*==sun==*/
/* Fifth Ocean: the open sea at first light. Swell lines run to a low horizon; a low sun and its light path (CU). */
var HM={geo:function(L){
    if(L.foot)return {hy:L.H*.5,lx:L.W*.5,lw:L.W*.3,fx:L.W*.5,fy:L.H*.5};
    if(L.mob)return {hy:L.H*.21,lx:L.W*.62,lw:L.W*.5,fx:L.W*.62,fy:L.H*.21};
    var lx=L.side+L.cw*(L.W<1100?.7:.74);return {hy:L.H*.44,lx:lx,lw:L.cw*.36,fx:lx,fy:L.H*.5}},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,sm=E.sm,t=S.t,w=S.w,h=S.h,N=46;
    var hy=G.hy+S.m[1]*-10+S.sp*-30,lx=G.lx+S.m[0]*-30,lw=G.lw,mob=w<861&&!S.foot;
    var sg=c.createRadialGradient(lx,hy,0,lx,hy,Math.max(w,h)*.5);sg.addColorStop(0,"rgba("+C.acc+","+(.16*e)+")");sg.addColorStop(1,"rgba("+C.acc+",0)");c.fillStyle=sg;c.fillRect(0,0,w,h);
    var hg=c.createLinearGradient(0,0,w,0);hg.addColorStop(0,"rgba("+C.fg+",0)");hg.addColorStop(.35,"rgba("+C.fg+","+(.22*e)+")");hg.addColorStop(.75,"rgba("+C.fg+","+(.32*e)+")");hg.addColorStop(1,"rgba("+C.fg+",.05)");
    c.strokeStyle=hg;c.lineWidth=1;c.beginPath();c.moveTo(0,hy);c.lineTo(w,hy);c.stroke();
    var step=Math.max(10,w/150),bot=mob?h*.36:h*1.08;
    for(var i=1;i<=N;i++){var u=i/N,y0=hy+(bot-hy)*(1-1/(1+u*u*7))*1.33;if(y0>h+20)break;
      var amp=(2+u*u*16)*e*(mob?.5:1),ph=t*(.35+.12*Math.sin(i))+i*.7,k=.006+.012*(1-u),a=(.12+.38*(1-u))*sm(u*6)*e;
      c.beginPath();for(var x=-step;x<=w+step;x+=step){var y=y0+Math.sin(x*k+ph)*amp*.6+Math.sin(x*k*2.3-ph*1.3+i)*amp*.3+S.m[1]*u*12;x<=0?c.moveTo(x,y):c.lineTo(x,y)}
      var lg=c.createLinearGradient(0,0,w,0),cx=lx/w,bw=Math.min(.3,lw/w*(.35+u*.9));
      lg.addColorStop(0,"rgba("+C.fg+","+(a*.35).toFixed(3)+")");lg.addColorStop(Math.max(0,cx-bw),"rgba("+C.fg+","+(a*.6).toFixed(3)+")");
      lg.addColorStop(Math.min(1,Math.max(0,cx)),"rgba("+C.acc+","+Math.min(.85,a*2.6).toFixed(3)+")");lg.addColorStop(Math.min(1,cx+bw),"rgba("+C.fg+","+(a*.6).toFixed(3)+")");lg.addColorStop(1,"rgba("+C.fg+","+(a*.4).toFixed(3)+")");
      c.strokeStyle=lg;c.lineWidth=u>.6?1.2:1;c.stroke()}
    var rs=Math.max(22,Math.min(w,h)*(mob?.075:.055)),sy=hy-rs*.32;
    c.save();c.beginPath();c.rect(0,0,w,hy);c.clip();
    var g2=c.createRadialGradient(lx,sy,0,lx,sy,rs*3.4);g2.addColorStop(0,"rgba("+C.hi+","+(.32*e)+")");g2.addColorStop(1,"rgba("+C.hi+",0)");c.fillStyle=g2;c.beginPath();c.arc(lx,sy,rs*3.4,0,6.2832);c.fill();
    var sd=c.createLinearGradient(0,sy-rs,0,sy+rs);sd.addColorStop(0,"rgba("+C.hi+","+(.96*e)+")");sd.addColorStop(1,"rgba("+C.acc+","+(.85*e)+")");
    c.beginPath();c.arc(lx,sy,rs,0,6.2832);c.fillStyle=sd;c.fill();c.restore();
    for(var j=1;j<=70;j++){var uj=j/70,yj=hy+(bot-hy)*(1-1/(1+uj*uj*7))*1.33;if(yj>h)break;
      var spread=rs*(.9+uj*5.5),nd=3+Math.floor(uj*7);
      for(var q=0;q<nd;q++){var p2=Math.sin(j*12.9898+q*78.233)*43758.5453;p2=p2-Math.floor(p2);
        var xo=(p2-.5)*2*spread*(.6+.4*Math.sin(t*.7+j+q)),len=rs*(.25+uj*1.4)*(.5+.5*p2),fl=.5+.5*Math.sin(t*(1.3+p2)+j*1.7+q);
        var al=(.55-.35*uj)*fl*e*(1-Math.abs(xo)/(spread*1.05));if(al<.02)continue;
        c.strokeStyle="rgba("+C.hi+","+al.toFixed(3)+")";c.lineWidth=uj>.5?1.6:1.1;c.beginPath();c.moveTo(lx+xo-len/2,yj);c.lineTo(lx+xo+len/2,yj);c.stroke()}}
  }};
/*==END==*/

/*==ridges==*/
/* Snow Peak: ridgelines in atmospheric perspective, the highest summit set back on the right with a snow cap and
   a fine snow hatch under the crest; a slow, sparse snowfall. params: peak (0..1 x of summit in the art column) */
var HM={mask:false,geo:function(L){var Ln=6;
    if(L.foot)return {W:L.W,H:L.H,c:.5,b0:.98,b1:.02,a0:.8,a1:.3,fx:L.W*.5,fy:L.H*.5,L:Ln};
    if(L.mob)return {W:L.W,H:L.H,c:.62,b0:.3,b1:.04,a0:.17,a1:.05,fx:L.W*.62,fy:L.H*.16,L:Ln};
    return {W:L.W,H:L.H,c:(L.side+L.cw*.74)/L.W,b0:.8,b1:.08,a0:.44,a1:.16,fx:L.side+L.cw*.74,fy:L.H*.42,L:Ln,fade:1}},
  build:function(G,ST,E){var R=E.R,n=Math.round(Math.min(140,G.W*G.H/9000));ST.f=[];for(var i=0;i<n;i++)ST.f.push({x:R(i,1)*G.W,y:R(i,2)*G.H,r:.6+R(i,3)*1.5,v:7+R(i,4)*12,s:.4+R(i,5)*.8,ph:R(i,6)*6.28,z:R(i,7)});ST.lt=0},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,R=E.R,L=G.L,P=E.P;
    function tri(x){x=x-Math.floor(x);return 1-Math.abs(2*x-1)}
    function base(t){return G.H*(G.b0+G.b1*t)}function amp(t){return G.H*(G.a0-G.a1*t)}
    var pk=P.peak!=null&&!S.foot&&G.fade?(G.c-.1+.2*P.peak):G.c;
    function mass(k,x){var t=k/(L-1),u=x/G.W;var main=Math.exp(-Math.pow((u-pk+(t-.4)*.22)/(.13+.12*t),2))*(1-.4*t);
      var n=.2*tri(u*2.3*(1+.25*k)+R(k,1))+.11*tri(u*5.9*(1+.2*k)+R(k,2))+.045*tri(u*13.7+R(k,3));return main*.95+n*(.5+.5*main)+.08}
    function Y(k,x,ox,oy){var t=k/(L-1);return base(t)-mass(k,x-ox)*amp(t)+oy}
    var px=S.m[0]*-18,py=S.m[1]*-6+S.sp*G.H*.06,lines=S.foot;
    for(var k=0;k<L;k++){var t=k/(L-1),rise=(1-e)*(30+50*t),ox=px*(.3+t),oy=py*(.2+.6*t)+rise;
      c.beginPath();for(var x=-20;x<=G.W+20;x+=6){var y=Y(k,x,ox,oy);x===-20?c.moveTo(x,y):c.lineTo(x,y)}
      if(!lines){c.lineTo(G.W+20,G.H+40);c.lineTo(-20,G.H+40);c.closePath();
        c.fillStyle="rgba("+C.gr+","+e+")";c.fill();c.fillStyle="rgba("+C.fg+","+((.025+.06*t)*e).toFixed(3)+")";c.fill();
        c.lineWidth=.8+.7*t;c.strokeStyle="rgba("+(k===0?C.acc:C.fg)+","+((.22+.45*t)*e).toFixed(3)+")";c.stroke();
        if(k<2){var top=Y(k,G.c*G.W,ox,oy);c.save();c.clip();
          /* the snow cap (CU: a filled summit), then the snow hatch under the crest */
          c.beginPath();for(x=0;x<=G.W;x+=6){var yy=Y(k,x,ox,oy),ms=mass(k,x-ox);if(ms>.7){c.moveTo(x,yy);c.lineTo(x,yy+(ms-.7)*G.H*.09)}}
          c.lineWidth=6.4;c.strokeStyle="rgba("+C.hi+","+((k?.32:.55)*e).toFixed(3)+")";c.stroke();
          c.beginPath();for(x=0;x<=G.W;x+=9){var y2=Y(k,x,ox,oy),m2=mass(k,x-ox);if(m2>.55){c.moveTo(x,y2+3);c.lineTo(x+3,y2+3+(m2-.55)*26)}}
          c.lineWidth=.7;c.strokeStyle="rgba("+C.fg+","+(.22*e).toFixed(3)+")";c.stroke();c.restore()}
      }else{c.lineWidth=.8+.6*t;c.strokeStyle="rgba("+C.fg+","+(.12+.22*t).toFixed(3)+")";c.stroke()}}
    if(!S.foot){var now=performance.now(),dt=Math.min(.05,(now-(S.ST.lt||now))/1000);S.ST.lt=now;
      c.fillStyle="rgba("+C.fg+","+(.3*e).toFixed(3)+")";c.beginPath();
      S.ST.f.forEach(function(f){if(!RM){f.y+=f.v*dt*(1+f.z);f.x+=Math.sin(S.t*f.s+f.ph)*dt*6;if(f.y>G.H+4){f.y=-4;f.x=Math.random()*G.W}}c.moveTo(f.x+f.r,f.y);c.arc(f.x,f.y,f.r*(.7+.5*f.z),0,6.283)});c.fill();
      if(G.fade){c.globalCompositeOperation="destination-in";var fx=c.createLinearGradient(0,0,G.W*.5,0);fx.addColorStop(0,"rgba(0,0,0,.25)");fx.addColorStop(1,"rgba(0,0,0,1)");c.fillStyle=fx;c.fillRect(0,0,G.W,G.H);c.globalCompositeOperation="source-over"}}
  }};
/*==END==*/

/*==topo==*/
/* Hidden River: a winding river as a topographic map; contours follow its bends; a slow current runs along it;
   a filled marker sits on the river at the focal bend (CU). params: label (text by the marker, optional) */
var HM={mask:false,geo:function(L){var W=L.W,H=L.H;
    if(L.foot)return {p0:[W*1.05,-H*.1],p1:[-W*.05,H*1.1],A:H*.12,sp:Math.max(12,H*.035),f:1.4,fx:W*.5,fy:H*.5,mk:.5};
    if(L.mob)return {p0:[W*1.08,H*.02],p1:[-W*.05,H*.3],A:H*.05,sp:W*.04,f:1.5,fx:W*.55,fy:H*.18,mk:.42};
    var xr=L.side+L.cw;return {p0:[xr+L.side*.6,-H*.08],p1:[L.side+L.cw*.5,H*1.08],A:Math.min(L.cw*.09,H*.12),sp:Math.max(16,H*.03),f:1.7,fx:L.side+L.cw*.76,fy:H*.5,mk:.46}},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,t=S.t,P=E.P;
    var p0=G.p0,p1=G.p1,dx=p1[0]-p0[0],dy=p1[1]-p0[1],L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,nx=-uy,ny=ux;
    var ox=S.m[0]*-18,oy=S.m[1]*-12-S.sp*40,N=120;
    function pt(s,off,amp){var ph=s*Math.PI*2*G.f+.6,d=off+amp*(Math.sin(ph)+.28*Math.sin(ph*2.1+1.3));return [p0[0]+ux*L*s+nx*d+ox,p0[1]+uy*L*s+ny*d+oy]}
    for(var sd=-1;sd<=1;sd+=2)for(var i=1;i<=16;i++){var off=sd*(i*G.sp+G.sp*.4),amp=G.A*Math.max(.12,1-i*.055)*(1+.02*Math.sin(t*.3+i)),a=(.34-i*.017)*e;if(a<=0)continue;
      c.beginPath();for(var k=0;k<=N;k++){var q=pt(k/N,off,amp);k?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1])}
      c.strokeStyle="rgba("+(i%5===0?C.acc:C.fg)+","+a.toFixed(3)+")";c.lineWidth=i%5===0?1.2:1;c.stroke()}
    c.beginPath();for(var k2=0;k2<=N;k2++){var r=pt(k2/N,0,G.A);k2?c.lineTo(r[0],r[1]):c.moveTo(r[0],r[1])}
    c.lineCap="round";c.lineJoin="round";
    c.strokeStyle="rgba("+C.acc+","+(.26*e)+")";c.lineWidth=Math.max(14,G.sp*1.05);c.stroke();
    c.strokeStyle="rgba("+C.acc+","+(.8*e)+")";c.lineWidth=1.6;c.stroke();
    c.setLineDash([2,14]);c.lineDashOffset=-t*14;c.strokeStyle="rgba("+C.fg+","+(.7*e)+")";c.lineWidth=2.2;c.stroke();c.setLineDash([]);
    var mp=pt(G.mk,0,G.A),b=.5+.5*Math.sin(t*1.3),rr=S.foot?6:8;
    c.beginPath();c.arc(mp[0],mp[1],rr*2.2+rr*b,0,6.283);c.fillStyle="rgba("+C.acc+","+((.22-.1*b)*e).toFixed(3)+")";c.fill();
    c.beginPath();c.arc(mp[0],mp[1],rr,0,6.283);c.fillStyle="rgba("+C.hi+","+e+")";c.fill();c.lineWidth=1.5;c.strokeStyle="rgba("+C.acc+","+e+")";c.stroke();
    if(P.label&&!S.foot){c.font="400 11px "+HERO.mono;c.textAlign="left";c.fillStyle="rgba("+C.fg+","+(.8*e)+")";c.fillText(String(P.label).toUpperCase(),mp[0]+rr*2.6,mp[1]+4)}
    if(!S.foot){c.globalCompositeOperation="destination-in";var hm=c.createLinearGradient(0,0,0,130);hm.addColorStop(0,"rgba(0,0,0,0)");hm.addColorStop(1,"rgba(0,0,0,1)");c.fillStyle=hm;c.fillRect(0,0,S.w,S.h);c.globalCompositeOperation="source-over"}
  }};
/*==END==*/

/*==compass==*/
/* Northern Shore: a compass card that swings and settles, bearing ticks, numerals and a filled rose (CU). */
var HM={mask:false,geo:function(L){
    if(L.foot)return {vx:L.W*.5,vy:L.H*.85,R:Math.min(L.W*.3,L.H*.75),fx:L.W*.5,fy:L.H*.85};
    if(L.mob)return {vx:L.W*.5,vy:L.H*.185,R:Math.min(L.W*.28,L.H*.105),fx:L.W*.5,fy:L.H*.185};
    var vx=L.side+L.cw*(L.W<1100?.79:.82);return {vx:vx,vy:L.H*.5,R:Math.min(L.H*.3,L.cw*.16),fx:vx,fy:L.H*.5}},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,t=S.t,INK=C.fg,ACC=C.acc;
    var vx=G.vx+S.m[0]*-14,vy=G.vy+S.m[1]*-10,R=G.R*(.94+.06*e);
    var swing=(1-e)*40+Math.exp(-t*.45)*14*Math.sin(t*1.6)+Math.sin(t*.23)*1.6+S.m[0]*6+S.sp*18,rot=swing*Math.PI/180;
    c.lineWidth=1;
    for(var k=1;k<=5;k++){c.beginPath();c.arc(vx,vy,R*(1+k*.42),0,6.2832);c.strokeStyle="rgba("+INK+","+((.075-k*.011)*e).toFixed(3)+")";c.stroke()}
    var g=c.createRadialGradient(vx,vy,0,vx,vy,R*1.1);g.addColorStop(0,"rgba("+ACC+","+(.2*e)+")");g.addColorStop(1,"rgba("+ACC+",0)");c.fillStyle=g;c.beginPath();c.arc(vx,vy,R*1.1,0,6.2832);c.fill();
    c.save();c.translate(vx,vy);c.rotate(-rot);
    for(var d=0;d<360;d+=(R<90?2:1)){var a=d*Math.PI/180-Math.PI/2,big=d%10===0,mid=d%5===0,Ln=big?R*.09:(mid?R*.055:R*.03);
      c.beginPath();c.moveTo(Math.cos(a)*R,Math.sin(a)*R);c.lineTo(Math.cos(a)*(R-Ln),Math.sin(a)*(R-Ln));
      c.strokeStyle="rgba("+(d===0?ACC:INK)+","+((big?.55:mid?.38:.2)*e).toFixed(3)+")";c.lineWidth=d===0?2:1;c.stroke()}
    c.beginPath();c.arc(0,0,R,0,6.2832);c.strokeStyle="rgba("+INK+","+(.42*e)+")";c.lineWidth=1;c.stroke();
    c.beginPath();c.arc(0,0,R*.74,0,6.2832);c.strokeStyle="rgba("+INK+","+(.16*e)+")";c.stroke();
    var fs=Math.max(9,Math.round(R*.045));c.font="400 "+fs+"px "+HERO.mono;c.textAlign="center";c.textBaseline="middle";
    for(d=0;d<360;d+=30){var a2=d*Math.PI/180-Math.PI/2,lb=d===0?"N":d===90?"E":d===180?"S":d===270?"W":String(d);
      c.save();c.translate(Math.cos(a2)*R*.83,Math.sin(a2)*R*.83);c.rotate(a2+Math.PI/2);c.fillStyle="rgba("+(d===0?ACC:INK)+","+((d%90===0?.75:.4)*e).toFixed(3)+")";c.fillText(lb,0,0);c.restore()}
    function arm(a,len,wd,col,al){c.save();c.rotate(a);c.beginPath();c.moveTo(0,-len);c.lineTo(wd,0);c.lineTo(0,wd*.6);c.lineTo(-wd,0);c.closePath();c.fillStyle="rgba("+col+","+(al*(col===ACC?.9:.45)*e).toFixed(3)+")";c.fill();c.strokeStyle="rgba("+col+","+(al*e).toFixed(3)+")";c.lineWidth=1;c.stroke();c.restore()}
    for(var q=1;q<8;q+=2)arm(q*Math.PI/4,R*.36,R*.05,INK,.28);
    arm(Math.PI/2,R*.58,R*.08,INK,.42);arm(Math.PI,R*.58,R*.08,INK,.42);arm(-Math.PI/2,R*.58,R*.08,INK,.42);arm(0,R*.66,R*.09,ACC,.85);
    c.beginPath();c.arc(0,0,R*.03,0,6.2832);c.fillStyle="rgba("+ACC+","+e+")";c.fill();c.restore();
    c.beginPath();c.moveTo(vx,vy-R-R*.16);c.lineTo(vx,vy-R-R*.04);c.strokeStyle="rgba("+ACC+","+(.8*e)+")";c.lineWidth=1.5;c.stroke();
  }};
/*==END==*/

/*==network==*/
/* Heartland: the network on a map. A dot matrix fills the region; the firm's locations (portfolio companies,
   offices) send fine accent arcs home to HQ, with pulses travelling home; HQ is a filled, breathing mark (CU).
   params: hq [lat,lon,"LABEL"], points [["LABEL",lat,lon],...] (real places only), labels (default true) */
var HM={mask:false,geo:function(L){var P=HERO.params||{},pts=(P.points||[]).concat([[P.hq[2],P.hq[0],P.hq[1]]]);
    var la0=1e9,la1=-1e9,lo0=1e9,lo1=-1e9;pts.forEach(function(p){la0=Math.min(la0,p[1]);la1=Math.max(la1,p[1]);lo0=Math.min(lo0,p[2]);lo1=Math.max(lo1,p[2])});
    var pad=Math.max(1.2,(la1-la0)*.35,(lo1-lo0)*.25);la0-=pad;la1+=pad;lo0-=pad*1.3;lo1+=pad*1.3;var K=Math.cos((la0+la1)/2*Math.PI/180);
    var bx,by,bw,bh;if(L.foot){bx=L.W*.18;by=L.H*.04;bw=L.W*.64;bh=L.H*.96}else if(L.mob){bx=8;by=L.H*.085;bw=L.W-16;bh=L.H*.22}else{bx=L.side+L.cw*.52;by=L.H*.15;bw=L.W-bx-L.side*.4;bh=L.H*.72}
    var s=Math.min(bw/((lo1-lo0)*K),bh/(la1-la0)),ox=bx+(bw-(lo1-lo0)*K*s)/2,oy=by+(bh-(la1-la0)*s)/2;
    var Pf=function(la,lo){return [ox+(lo-lo0)*K*s,oy+(la1-la)*s]},hq=Pf(P.hq[0],P.hq[1]);
    return {W:L.W,H:L.H,s:s,la0:la0,la1:la1,lo0:lo0,lo1:lo1,P:Pf,cx:ox+(lo1-lo0)*K*s/2,cy:oy+(la1-la0)*s/2,rx:(lo1-lo0)*K*s/2,ry:(la1-la0)*s/2,fx:hq[0],fy:hq[1],mob:L.mob}},
  build:function(G,ST,E){var o=document.createElement("canvas"),d=E.dpr;o.width=Math.round(G.W*d);o.height=Math.round(G.H*d);var x=o.getContext("2d");x.setTransform(d,0,0,d,0,0);
    var r=Math.max(.7,Math.min(1.6,G.s*.012*4)),dl=(G.la1-G.la0)/34,dn=(G.lo1-G.lo0)/46;x.fillStyle="rgba("+E.C.fg+",.34)";x.beginPath();
    for(var la=G.la0;la<G.la1;la+=dl)for(var lo=G.lo0;lo<G.lo1;lo+=dn){var p=G.P(la,lo),q=Math.pow((p[0]-G.cx)/G.rx,2)+Math.pow((p[1]-G.cy)/G.ry,2);if(q>1)continue;var a=E.R(Math.round(la*97),Math.round(lo*89));if(a<.18*q)continue;x.moveTo(p[0]+r,p[1]);x.arc(p[0],p[1],r,0,6.283)}
    x.fill();x.save();x.globalCompositeOperation="destination-in";x.translate(G.cx,G.cy);x.scale(1,G.ry/G.rx);var gr=x.createRadialGradient(0,0,G.rx*.5,0,0,G.rx*1.02);gr.addColorStop(0,"rgba(0,0,0,1)");gr.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=gr;x.fillRect(-G.rx*2,-G.rx*2,G.rx*4,G.rx*4);x.restore();ST.off=o},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,P=E.P,t=S.t,sm=E.sm,px=S.m[0]*-10,py=S.m[1]*-6-S.sp*G.H*.05,lab=P.labels!==false&&!S.foot,fs=G.mob?10:11;
    c.globalAlpha=e;c.drawImage(S.ST.off,px,py,G.W,G.H);c.globalAlpha=1;c.save();c.translate(px*1.3,py*1.3);
    var hq=G.P(P.hq[0],P.hq[1]);
    function arcPt(a,b,u){var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2-Math.hypot(b[0]-a[0],b[1]-a[1])*.22,v=1-u;return [v*v*a[0]+2*v*u*mx+u*u*b[0],v*v*a[1]+2*v*u*my+u*u*b[1]]}
    var boxes=[],fsz=fs;function place(lt,x,y,big){c.font=(big?"500 "+(fsz+3)+"px "+HERO.font:"400 "+fsz+"px "+HERO.mono);var tw=c.measureText(lt).width,th=big?fsz+3:fsz,o=big?16:10;
      var C2=[[x+o,y+th*.35,"left"],[x-o-tw,y+th*.35,"right"],[x-tw/2,y-o,"center"],[x-tw/2,y+o+th,"center"],[x+o,y-o*.6,"left"],[x-o-tw,y-o*.6,"right"],[x+o,y+o+th*.6,"left"],[x-o-tw,y+o+th*.6,"right"]];
      for(var k=0;k<C2.length;k++){var q=C2[k],bx=[q[0]-3,q[1]-th-2,q[0]+tw+3,q[1]+3];if(bx[0]<14||bx[2]>G.W-14)continue;
        if(!boxes.some(function(r){return !(bx[2]<r[0]||bx[0]>r[2]||bx[3]<r[1]||bx[1]>r[3])})){boxes.push(bx);return [q[0],q[1]]}}return null}
    var pts=(P.points||[]).map(function(cy){return G.P(cy[1],cy[2])});
    pts.forEach(function(a){boxes.push([a[0]-5,a[1]-5,a[0]+5,a[1]+5])});boxes.push([hq[0]-12,hq[1]-12,hq[0]+12,hq[1]+12]);
    var hqL=lab?place(String(P.hq[2]).toUpperCase(),hq[0],hq[1],1):null;
    (P.points||[]).forEach(function(cy,i){var a=pts[i],dr=sm((t-.3-i*.18)/1.6)*e;if(dr<=0)return;
      c.beginPath();for(var k=0;k<=40;k++){var q=arcPt(a,hq,k/40*dr);k?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1])}c.lineWidth=1.1;c.strokeStyle="rgba("+C.acc+",.8)";c.stroke();
      if(dr>=.99&&!RM){var ph=((t*.16+i*.29)%1),pp=arcPt(a,hq,sm(ph));c.beginPath();c.arc(pp[0],pp[1],2.6,0,6.283);c.fillStyle="rgba("+C.acc+","+Math.sin(ph*Math.PI).toFixed(3)+")";c.fill()}
      c.beginPath();c.arc(a[0],a[1],3.6,0,6.283);c.fillStyle="rgba("+C.fg+","+e+")";c.fill();
      if(lab){var lt=String(cy[0]).toUpperCase(),pl=place(lt,a[0],a[1]);if(pl){c.textAlign="left";c.fillStyle="rgba("+C.fg+","+(.8*e).toFixed(3)+")";c.fillText(lt,pl[0],pl[1])}}});
    /* HQ: a filled, breathing mark (CU). params.hqShape: circle (default) | hex | square */
    var b=.5+.5*Math.sin(t*1.4),hr=G.mob?7:10,sh=P.hqShape||"circle";
    function mk(r){c.beginPath();if(sh==="hex"){for(var k=0;k<6;k++){var an=Math.PI/6+k*Math.PI/3;k?c.lineTo(hq[0]+Math.cos(an)*r,hq[1]+Math.sin(an)*r):c.moveTo(hq[0]+Math.cos(an)*r,hq[1]+Math.sin(an)*r)}c.closePath()}else if(sh==="square"){c.rect(hq[0]-r*.85,hq[1]-r*.85,r*1.7,r*1.7)}else c.arc(hq[0],hq[1],r,0,6.283)}
    mk(hr*2.2+hr*b);c.fillStyle="rgba("+C.acc+","+((.26-.12*b)*e).toFixed(3)+")";c.fill();
    mk(hr*1.5);c.lineWidth=1;c.strokeStyle="rgba("+C.acc+","+(.5*e).toFixed(3)+")";c.stroke();
    mk(hr);c.fillStyle="rgba("+C.acc+","+e+")";c.fill();c.lineWidth=1.4;c.strokeStyle="rgba("+C.hi+","+e+")";c.stroke();
    if(hqL){c.font="500 "+(fsz+3)+"px "+HERO.font;c.textAlign="left";c.fillStyle="rgba("+C.fg+","+e+")";c.fillText(String(P.hq[2]).toUpperCase(),hqL[0],hqL[1])}
    c.restore();
  }};
/*==END==*/

/*==growth==*/
/* Auxo: a planted field at first light. Furrows run across rolling ground in perspective; rows of seedlings rise
   in a slow wave that spreads from a low, filled light above the horizon (CU), and sway with the pointer. */
var HM={mask:false,geo:function(L){var W=L.W,H=L.H;
    if(L.foot)return {W:W,H:H,x0:-20,x1:W+20,hy:H*.3,by:H*1.05,lx:W*.5,ly:H*.24,fx:W*.5,fy:H*.5,mob:0,s:.8};
    if(L.mob)return {W:W,H:H,x0:-20,x1:W+20,hy:H*.16,by:H*.38,lx:W*.66,ly:H*.12,fx:W*.5,fy:H*.2,mob:1,s:.8};
    return {W:W,H:H,x0:L.side+L.cw*(W<1100?.3:.36),x1:W+20,hy:H*.36,by:H*1.02,lx:L.side+L.cw*.78,ly:H*.3,fx:L.side+L.cw*.72,fy:H*.55,mob:0,s:Math.max(.75,Math.min(1.25,H/900))}},
  build:function(G,ST,E){var R=E.R,sm=E.sm,C=E.C,d=E.dpr,W=G.W,H=G.H;
    function rowY(r,x){var k=Math.pow(r,1.9),y=G.hy+(G.by-G.hy)*k,hl=Math.sin(x/(W*.23)+1.3)*.6+Math.sin(x/(W*.11)+.4)*.4;return y-hl*(10+28*k)*G.s}
    G.rowY=rowY;var o=document.createElement("canvas");o.width=Math.round(W*d);o.height=Math.round(H*d);var x2=o.getContext("2d");x2.setTransform(d,0,0,d,0,0);
    var sp=[],N=G.mob?22:38,x;
    x2.lineWidth=1;x2.strokeStyle="rgba("+C.fg+",.24)";x2.beginPath();for(x=G.x0;x<=G.x1;x+=6){var yy=rowY(0,x);x===G.x0?x2.moveTo(x,yy):x2.lineTo(x,yy)}x2.stroke();
    for(var i=1;i<=N;i++){var r=i/N;x2.beginPath();for(x=G.x0;x<=G.x1;x+=5){var y=rowY(r,x);x===G.x0?x2.moveTo(x,y):x2.lineTo(x,y)}
      x2.lineWidth=.5+.9*r;x2.strokeStyle="rgba("+C.fg+","+(.05+.2*r).toFixed(3)+")";x2.stroke();
      if(r>.1){var dx=(18+64*r*r)*G.s,ph=R(i,2)*dx,q=0;for(x=G.x0+ph;x<G.x1;x+=dx){q++;if(R(q,i*3)<.38)continue;var xx=x+(R(q,i)-.5)*dx*.7,dd=Math.hypot(xx-G.lx,(rowY(r,xx)-G.ly)*1.6)/Math.max(W,H);
        sp.push({x:xx,r:r,h:(5+20*r*r)*G.s*(.6+.7*R(q,i+5)),lean:(R(q,i+9)-.5)*.3,lf:.7+.6*R(q,i+11),dl:.25+dd*2.4+R(i,q)*.4,ph:R(q,i+7)*6.28})}}}
    x2.globalCompositeOperation="destination-in";var fx=x2.createLinearGradient(G.x0,0,G.x1,0);fx.addColorStop(0,"rgba(0,0,0,0)");fx.addColorStop(G.mob?.08:.2,"rgba(0,0,0,1)");fx.addColorStop(1,"rgba(0,0,0,1)");x2.fillStyle=fx;x2.fillRect(0,0,W,H);
    ST.off=o;ST.sp=sp},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,sm=E.sm,t=S.t,px=S.m[0]*12,py=S.m[1]*6;
    var rs=Math.max(16,Math.min(G.W,G.H)*(G.mob?.05:.045)),hy=G.rowY(0,G.lx);
    var gl=c.createRadialGradient(G.lx,hy,0,G.lx,hy,Math.max(G.W,G.H)*.5);gl.addColorStop(0,"rgba("+C.acc+","+(.24*e)+")");gl.addColorStop(.35,"rgba("+C.acc+","+(.07*e)+")");gl.addColorStop(1,"rgba("+C.acc+",0)");c.fillStyle=gl;c.fillRect(0,0,G.W,G.H);
    c.save();c.beginPath();c.rect(0,0,G.W,hy);c.clip();var sd=c.createLinearGradient(0,hy-rs*1.6,0,hy);sd.addColorStop(0,"rgba("+C.hi+","+(.95*e)+")");sd.addColorStop(1,"rgba("+C.acc+","+(.9*e)+")");c.beginPath();c.arc(G.lx,hy+rs*.25,rs,0,6.283);c.fillStyle=sd;c.fill();c.restore();
    c.globalAlpha=e;c.drawImage(S.ST.off,px*.4,py*.4,G.W,G.H);c.globalAlpha=1;
    var sway=S.m[0]*.35,tt=t+S.sp*4,sp=S.ST.sp;
    for(var b=0;b<3;b++){c.beginPath();var lo=b/3,hi=(b+1)/3,any=false;
      for(var i=0;i<sp.length;i++){var s=sp[i];if(s.r<lo||s.r>=hi)continue;var g=S.foot?1:sm((tt-s.dl)/1.8);if(g<.02)continue;any=true;
        var x=s.x+px*.4*(1+s.r),y=G.rowY(s.r,s.x)+py*.4*(1+s.r),H=s.h*g,a=s.lean+(Math.sin(t*.7+s.ph+s.x*.004)*.07+sway*(.4+s.r))*g,tx=x+Math.sin(a)*H,ty=y-Math.cos(a)*H;
        c.moveTo(x,y);c.quadraticCurveTo(x+Math.sin(a)*H*.3,y-H*.6,tx,ty);
        if(s.r>.32&&g>.45){var Ln=H*.42*s.lf*Math.min(1,(g-.45)*2.2),a1=a-.95,a2=a+.95;
          c.moveTo(tx,ty);c.quadraticCurveTo(tx+Math.sin(a1-.5)*Ln*.7,ty-Math.cos(a1-.5)*Ln*.7,tx+Math.sin(a1)*Ln,ty-Math.cos(a1)*Ln);
          c.moveTo(tx,ty);c.quadraticCurveTo(tx+Math.sin(a2+.5)*Ln*.7,ty-Math.cos(a2+.5)*Ln*.7,tx+Math.sin(a2)*Ln,ty-Math.cos(a2)*Ln)}}
      if(!any)continue;c.lineWidth=.7+b*.5;c.strokeStyle="rgba("+C.acc+","+((.36+b*.24)*e).toFixed(3)+")";c.stroke()}
  }};
/*==END==*/

/*==wedge==*/
/* Arkview: a filled wedge (a right triangle, square corner top-left) with oblique hatching across the art column;
   a slow light passes along the hatch; a bright slash crosses the wedge. params: angle (deg, default 58) */
var HM={mask:false,geo:function(L){
    if(L.foot)return {x0:L.W*.2,x1:L.W*.82,y0:L.H*.06,y1:L.H*.98,fx:L.W*.5,fy:L.H*.5};
    if(L.mob)return {x0:L.W*.1,x1:L.W*.96,y0:L.H*.085,y1:L.H*.28,fx:L.W*.5,fy:L.H*.18};
    return {x0:L.side+L.cw*(L.W<1100?.44:.5),x1:L.side+L.cw+Math.min(L.side,40),y0:L.H*.16,y1:L.H*.86,fx:L.side+L.cw*.72,fy:L.H*.5}},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,t=S.t,ANG=(E.P.angle||58)*Math.PI/180;
    var X0=G.x0,X1=G.x1,Y0=G.y0,Y1=G.y1,W=X1-X0,H=Y1-Y0,A=[X0+W*.04,Y0],B=[X1,Y0],Cc=[X0+W*.04,Y1];
    var gl=c.createLinearGradient(X0,Y0,X1,Y1);gl.addColorStop(0,"rgba("+C.acc+","+(.34*e)+")");gl.addColorStop(.6,"rgba("+C.acc+","+(.14*e)+")");gl.addColorStop(1,"rgba("+C.acc+",.03)");
    c.beginPath();c.moveTo(A[0],A[1]);c.lineTo(B[0],B[1]);c.lineTo(Cc[0],Cc[1]);c.closePath();c.fillStyle=gl;c.fill();c.lineWidth=1;c.strokeStyle="rgba("+C.fg+","+(.34*e)+")";c.stroke();
    var dx=Math.cos(ANG),dy=-Math.sin(ANG),gap=Math.max(6,W/130),n=Math.ceil((W+H/Math.tan(ANG))/gap)+2;
    var lx=X0+W*(.25+.55*((Math.sin(t*.12)+1)/2))+S.m[0]*120+S.sp*W*.4,lw=W*.16;
    for(var i=-2;i<n;i++){var sx=X0+i*gap,sy=Y1,len=H/Math.sin(ANG),ex=sx+dx*len,ey=sy+dy*len,mid=(sx+ex)/2,d=(mid-lx)/lw,lit=Math.exp(-d*d);
      var a=((mid>A[0]&&mid<B[0])?(.2+.4*lit):(.035+.12*lit))*e;if(sx>X1+40)break;
      var g=c.createLinearGradient(sx,sy,ex,ey),col=lit>.5?C.acc:C.fg;g.addColorStop(0,"rgba("+C.fg+",0)");g.addColorStop(.25,"rgba("+col+","+a.toFixed(3)+")");g.addColorStop(.8,"rgba("+col+","+a.toFixed(3)+")");g.addColorStop(1,"rgba("+C.fg+",0)");
      c.strokeStyle=g;c.beginPath();c.moveTo(sx,sy);c.lineTo(ex,ey);c.stroke()}
    var s0=[X0+W*.42,Y1],s1=[s0[0]+dx*H/Math.sin(ANG),Y0];
    var sg=c.createLinearGradient(s0[0],s0[1],s1[0],s1[1]);sg.addColorStop(0,"rgba("+C.hi+","+(.05*e)+")");sg.addColorStop(.5,"rgba("+C.hi+","+(.7*e)+")");sg.addColorStop(1,"rgba("+C.hi+","+(.1*e)+")");
    c.lineWidth=1.6;c.strokeStyle=sg;c.beginPath();c.moveTo(s0[0],s0[1]);c.lineTo(s1[0],s1[1]);c.stroke();
  }};
/*==END==*/

/*==moon==*/
/* Enceladus: a lit sphere (moon/planet) lit from the upper left, its night side falling into the ground colour,
   fine fractures and soft craters on the surface, slow plumes rising from fissures, a starfield. params: plumes (default true) */
var HM={mask:false,geo:function(L){
    if(L.foot)return {W:L.W,H:L.H,cx:L.W/2,cy:L.H+L.W*.42,r:L.W*.5,pole:-Math.PI/2,foot:1,fx:L.W/2,fy:L.H*.6};
    if(L.mob){var rm=Math.min(L.W*.3,L.H*.12);return {W:L.W,H:L.H,cx:L.W*.6,cy:L.H*.2,r:rm,pole:1.15,fx:L.W*.6,fy:L.H*.2}}
    var r=Math.min(L.H*.31,L.cw*.24);return {W:L.W,H:L.H,cx:L.side+L.cw*.77,cy:L.H*.44,r:r,pole:1.2,fx:L.side+L.cw*.77,fy:L.H*.44}},
  build:function(G,ST,E){var R=E.R,C=E.C,d=E.dpr;ST.P=[];for(var i=0;i<(G.W<861?160:260);i++)ST.P.push({s:(R(i,11)-.5)*.5,v:.5+R(i,12)*.9,ph:R(i,13),sz:.6+R(i,14)*1.3,k:Math.floor(R(i,15)*4)});
    var o=document.createElement("canvas");o.width=Math.round(G.W*d);o.height=Math.round(G.H*d);var x=o.getContext("2d");x.setTransform(d,0,0,d,0,0);
    if(!G.foot)for(i=0;i<90;i++){var sx=R(i,21)*G.W,sy=R(i,22)*G.H;if(Math.hypot(sx-G.cx,sy-G.cy)<G.r*1.1)continue;x.beginPath();x.arc(sx,sy,.4+R(i,23)*.8,0,6.283);x.fillStyle="rgba("+C.fg+","+(.12+R(i,24)*.3).toFixed(3)+")";x.fill()}
    var cx=G.cx,cy=G.cy,r=G.r;x.save();x.beginPath();x.arc(cx,cy,r,0,6.283);x.clip();x.fillStyle="rgb("+C.gr+")";x.fillRect(cx-r,cy-r,2*r,2*r);
    var lit=x.createRadialGradient(cx-r*.5,cy-r*.52,r*.04,cx-r*.36,cy-r*.36,r*1.12);lit.addColorStop(0,"rgba("+C.hi+",.97)");lit.addColorStop(.3,"rgba("+C.hi+",.86)");lit.addColorStop(.58,"rgba("+C.acc+",.6)");lit.addColorStop(.82,"rgba("+C.acc+",.18)");lit.addColorStop(1,"rgba("+C.acc+",0)");x.fillStyle=lit;x.fillRect(cx-r,cy-r,2*r,2*r);
    var nt=x.createRadialGradient(cx+r*.55,cy+r*.5,r*.1,cx+r*.4,cy+r*.36,r*1.15);nt.addColorStop(0,"rgba("+C.gr+",.85)");nt.addColorStop(.55,"rgba("+C.gr+",.45)");nt.addColorStop(1,"rgba("+C.gr+",0)");x.fillStyle=nt;x.fillRect(cx-r,cy-r,2*r,2*r);
    for(i=0;i<46;i++){var a=R(i,1)*6.283,dd=R(i,2)*r*.95,px=cx+Math.cos(a)*dd,py=cy+Math.sin(a)*dd,len=r*(.12+R(i,3)*.35),an=R(i,4)*3.14;
      x.beginPath();x.moveTo(px-Math.cos(an)*len/2,py-Math.sin(an)*len/2);x.quadraticCurveTo(px+Math.sin(an)*len*.12,py-Math.cos(an)*len*.12,px+Math.cos(an)*len/2,py+Math.sin(an)*len/2);x.lineWidth=.6;x.strokeStyle="rgba("+C.gr+","+(.06+R(i,5)*.08).toFixed(3)+")";x.stroke()}
    for(i=0;i<16;i++){var a2=-2.7+R(i,6)*2.0,d2=(.25+R(i,7)*.6)*r,x2=cx+Math.cos(a2)*d2,y2=cy+Math.sin(a2)*d2,cr=r*(.02+R(i,8)*.035);var cg=x.createRadialGradient(x2+cr*.3,y2+cr*.3,0,x2,y2,cr*1.3);cg.addColorStop(0,"rgba("+C.gr+",.18)");cg.addColorStop(1,"rgba("+C.gr+",0)");x.fillStyle=cg;x.beginPath();x.arc(x2,y2,cr*1.3,0,6.283);x.fill()}
    var ppx=cx+Math.cos(G.pole)*r*.78,ppy=cy+Math.sin(G.pole)*r*.78,tx=-Math.sin(G.pole),ty=Math.cos(G.pole);
    for(var k=-1.5;k<=1.5;k++){var ox=ppx+Math.cos(G.pole)*k*r*.055,oy=ppy+Math.sin(G.pole)*k*r*.055,Ln=r*(.3-Math.abs(k)*.045);x.beginPath();x.moveTo(ox-tx*Ln/2,oy-ty*Ln/2);x.quadraticCurveTo(ox+Math.cos(G.pole)*r*.03,oy+Math.sin(G.pole)*r*.03,ox+tx*Ln/2,oy+ty*Ln/2);x.lineWidth=1.1;x.strokeStyle="rgba("+C.acc+",.6)";x.stroke()}
    x.restore();x.beginPath();x.arc(cx,cy,r,0,6.283);x.lineWidth=1;x.strokeStyle="rgba("+C.fg+",.28)";x.stroke();
    var hl=x.createRadialGradient(cx,cy,r,cx,cy,r*1.35);hl.addColorStop(0,"rgba("+C.acc+",.18)");hl.addColorStop(1,"rgba("+C.acc+",0)");x.fillStyle=hl;x.beginPath();x.arc(cx,cy,r*1.35,0,6.283);x.arc(cx,cy,r,0,6.283,true);x.fill();ST.off=o},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,t=S.t+8,px=S.m[0]*-14,py=S.m[1]*-9-S.sp*G.H*.06,sc=.97+.03*e;
    c.save();c.globalAlpha=e;c.translate(G.cx+px,G.cy+py);c.scale(sc,sc);c.translate(-G.cx,-G.cy);c.drawImage(S.ST.off,0,0,G.W,G.H);c.restore();
    if(E.P.plumes===false)return;
    var r=G.r,ux=Math.cos(G.pole),uy=Math.sin(G.pole),tx=-uy,ty=ux,al=S.foot?(G.W<600?.18:.5):.7;c.save();c.translate(px,py);c.fillStyle="rgba("+C.hi+",1)";
    for(var i=0;i<S.ST.P.length;i++){var q=S.ST.P[i],life=((t*.06*q.v+q.ph)%1),d=life*r*(.95+q.v*.5),spr=q.s*(.25+life*.9);
      var bx=G.cx+ux*r*.97+tx*(q.k-1.5)*r*.05,by=G.cy+uy*r*.97+ty*(q.k-1.5)*r*.05,x=bx+(ux+tx*spr)*d,y=by+(uy+ty*spr)*d,a=Math.sin(Math.PI*Math.min(1,life*1.4))*(1-life)*al*e;
      if(a<.01)continue;c.globalAlpha=a;c.beginPath();c.arc(x,y,q.sz*(1+life),0,6.283);c.fill()}
    c.restore();c.globalAlpha=1;
  }};
/*==END==*/

/*==emblem==*/
/* Blackford: the firm's own mark at architectural scale. Rows of hairline bars grow outward and part around a ring;
   inside the ring the emblem (redrawn from their logo SVG path) is engraved in the same hairlines over a solid fill (CU:
   the ring is never empty). params: path (SVG path "d" of the mark), box [w,h] (its viewBox size); without a path the
   firm's short name (HERO.word) is set in the ring and engraved instead. */
var HM={mask:false,geo:function(L){
    if(L.foot){var Rf=Math.min(L.H*.36,L.W*.14);return {cx:L.W*.5,cy:L.H*.58,R:Rf,x0:L.W*.06,x1:L.W*.94,y0:L.H*.08,y1:L.H*.98,step:10,fx:L.W*.5,fy:L.H*.58}}
    if(L.mob){var Rm=Math.min(L.W*.24,L.H*.1);return {cx:L.W*.64,cy:L.H*.2,R:Rm,x0:-4,x1:L.W+4,y0:L.H*.06,y1:L.H*.34,step:10,mob:1,fx:L.W*.64,fy:L.H*.2}}
    var R=Math.min(L.H*.26,L.cw*.16);return {cx:L.side+L.cw*.78,cy:L.H*.5,R:R,x0:L.side+L.cw*.5,x1:L.W-Math.max(0,L.side-48),y0:L.H*.1,y1:L.H*.9,step:Math.max(10,Math.round(L.H/72)),fx:L.side+L.cw*.78,fy:L.H*.5}},
  draw:function(c,S,E){var G=S.G,e=S.e,C=E.C,P=E.P,sm=E.sm,t=S.t,d=E.dpr;
    var cx=G.cx+S.m[0]*18,cy=G.cy+S.m[1]*12,R=G.R*(1+.012*Math.sin(t*.55)+.22*S.sp),gap=R+Math.max(12,G.R*.1);
    var span=G.x1-G.x0,sw=G.x0+span*((t*.06)%1.4-.2),gr=c.createLinearGradient(G.x0,0,G.x1,0);
    [0,.16,.5,.92,1].forEach(function(s){var x=G.x0+span*s,a=G.mob?(s===0||s===1?.6:1):(s===0?0:s===.16?1:s===1?.7:1),hl=Math.exp(-Math.pow((x-sw)/(span*.12),2));gr.addColorStop(s,"rgba("+C.acc+","+(a*(.46+.42*hl)).toFixed(3)+")")});
    c.strokeStyle=gr;var n=Math.floor((G.y1-G.y0)/G.step);
    for(var j=0;j<=n;j++){var y=Math.round(G.y0+j*G.step+S.m[1]*4)+.5,ent=(G.mob?1-sm((y-G.y1+G.step*8)/(G.step*8)):1)*sm((y-G.y0)/(G.step*5))*sm((G.y1-y)/(G.step*5));if(ent<.02)continue;
      var grow=sm(e*1.7-(Math.abs(y-cy)/(G.y1-G.y0))*.7);c.globalAlpha=(j%4===0?1:.6)*ent;c.lineWidth=j%4===0?1.6:1;var dy=y-cy;c.beginPath();
      if(Math.abs(dy)<gap){var hw=Math.sqrt(gap*gap-dy*dy),lx=cx-hw,rx=cx+hw;c.moveTo(lx,y);c.lineTo(lx-(lx-G.x0)*grow,y);c.moveTo(rx,y);c.lineTo(rx+(G.x1-rx)*grow,y)}
      else{c.moveTo(cx,y);c.lineTo(cx-(cx-G.x0)*grow,y);c.moveTo(cx,y);c.lineTo(cx+(G.x1-cx)*grow,y)}c.stroke()}
    c.globalAlpha=1;
    var gl=c.createRadialGradient(cx,cy,0,cx,cy,R*1.25);gl.addColorStop(0,"rgba("+C.acc+","+(.14*e).toFixed(3)+")");gl.addColorStop(1,"rgba("+C.acc+",0)");c.fillStyle=gl;c.beginPath();c.arc(cx,cy,R*1.25,0,6.2832);c.fill();
    c.beginPath();c.arc(cx,cy,R,0,6.2832);c.lineWidth=1.2;c.strokeStyle="rgba("+C.fg+","+(.5*e).toFixed(3)+")";c.stroke();
    var hs=Math.max(2.2,R/56);
    function hatch(x,ox,oy){x.strokeStyle="rgba("+C.hi+",.82)";x.lineWidth=1;var hn=Math.ceil((2*R+4)/hs);
      for(var q=0;q<=hn;q++){var yy=Math.round(cy-R-2+q*hs)+.5,hg=sm(e*1.8-.25-Math.abs(yy-cy)/R*.5);if(hg<.01)continue;x.globalAlpha=(.6+.4*Math.exp(-Math.pow((cx-sw)/(span*.18),2)))*hg;x.beginPath();x.moveTo(cx-R*1.02*hg-ox,yy-oy);x.lineTo(cx+R*1.02*hg-ox,yy-oy);x.stroke()}x.globalAlpha=1}
    if(P.path){c.save();var tf=c.getTransform();if(!HM._p)HM._p=new Path2D(P.path);var bw=(P.box||[100,100])[0],bh=(P.box||[100,100])[1],k=R*1.5/Math.max(bw,bh);
      c.translate(cx-bw*k/2,cy-bh*k/2);c.scale(k,k);c.globalAlpha=e;c.fillStyle="rgba("+C.acc+",.42)";c.fill(HM._p);c.clip(HM._p);c.setTransform(tf);hatch(c,0,0);c.restore()}
    else{var wd=String(HERO.word||"").slice(0,4),fs=R*(wd.length>2?.62:.95),ff=function(x){x.font="400 "+fs+"px "+HERO.font;x.textAlign="center";x.textBaseline="middle"};ff(c);
      while(c.measureText(wd).width>R*1.6&&fs>8){fs*=.92;ff(c)}
      c.globalAlpha=e;c.fillStyle="rgba("+C.acc+",.42)";c.fillText(wd,cx,cy);c.globalAlpha=1;
      var o=S.ST.wc||(S.ST.wc=document.createElement("canvas")),B=R*2.4,sz=Math.ceil(B*d);if(o.width!==sz){o.width=o.height=sz}
      var x=o.getContext("2d");x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,B,B);hatch(x,cx-B/2,cy-B/2);
      x.globalCompositeOperation="destination-in";ff(x);x.fillStyle="#000";x.fillText(wd,B/2,B/2);x.globalCompositeOperation="source-over";
      c.drawImage(o,cx-B/2,cy-B/2,B,B)}
  }};
/*==END==*/
