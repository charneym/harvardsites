/* ================= HERO FIELD: a full moon rising over a flooded marsh at night. Luna is the moon; leptospirosis
   is carried by water after rain and floods. The sky runs from deep night to the logo blue, with a faint violet glow
   from their own site at the horizon; a treeline on the far shore, the moon's glitter path on still water, mist, and
   cattails and reeds in the foreground. It animates on its own (shimmer, sway, drifting mist), no pointer response (CZ). */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oFar=null,ST=[],RD=[],GL=[],MS=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h,hz=mob?U*.66:h*.6;
    var R=mob?U*.15:Math.max(34,Math.min(h*.1,w*.062));
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,R:R,mx:mob?w*.68:side+cw*.76,my:mob?U*.33:h*.27};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function build(){
    var hz=G.hz,U=G.U,A=mk(hz+2),g=A[1];oSky=A[0];
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#05070f");sky.addColorStop(.35,"#0a1029");sky.addColorStop(.68,"#16234f");sky.addColorStop(.88,"#283a78");sky.addColorStop(.97,"#3d3f7e");sky.addColorStop(1,"#4a4682");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    /* faint violet glow low on the horizon (the magenta of their site, much quieter) */
    var vg=g.createRadialGradient(w*.3,hz,0,w*.3,hz,w*.6);vg.addColorStop(0,"rgba(150,72,190,.16)");vg.addColorStop(1,"rgba(150,72,190,0)");g.fillStyle=vg;g.fillRect(0,0,w,hz+2);
    /* moon halo */
    var mx=G.mx,my=G.my,R=G.R;
    var ha=g.createRadialGradient(mx,my,R*.9,mx,my,R*7.5);ha.addColorStop(0,"rgba(206,218,255,.26)");ha.addColorStop(.18,"rgba(170,190,250,.12)");ha.addColorStop(.5,"rgba(120,146,226,.05)");ha.addColorStop(1,"rgba(110,140,220,0)");
    g.fillStyle=ha;g.fillRect(0,0,w,hz+2);
    /* thin clouds catching moonlight */
    var Rc=rng(7);for(var i=0;i<6;i++){var cy=my+R*(1.2+Rc()*2.4)*(Rc()<.5?-1:1)*.6+R*.8,cx=mx+(Rc()-.5)*w*.5,cwid=w*(.1+Rc()*.16),ch=R*(.08+Rc()*.1);
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);var a=.05+Rc()*.06;cg.addColorStop(0,"rgba(190,204,240,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(190,204,240,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* the moon: lit disc, limb darkening, the maria, a few bright craters */
    g.save();g.beginPath();g.arc(mx,my,R,0,Math.PI*2);g.clip();
    var md=g.createRadialGradient(mx-R*.25,my-R*.25,R*.1,mx,my,R);md.addColorStop(0,"#fbf9f1");md.addColorStop(.7,"#ebe9e3");md.addColorStop(1,"#c9ccd8");g.fillStyle=md;g.fillRect(mx-R,my-R,R*2,R*2);
    var MA=[[-.32,-.3,.34,.24],[.05,-.36,.26,.2],[.3,-.08,.24,.3],[-.12,.06,.3,.2],[-.42,.12,.2,.28],[.12,.3,.2,.14],[.38,.32,.12,.12]];
    for(var m=0;m<MA.length;m++){var q=MA[m],gx=mx+q[0]*R,gy=my+q[1]*R,rr=Math.max(q[2],q[3])*R;g.save();g.translate(gx,gy);g.scale(q[2]/Math.max(q[2],q[3]),q[3]/Math.max(q[2],q[3]));
      var mg=g.createRadialGradient(0,0,0,0,0,rr);mg.addColorStop(0,"rgba(122,128,150,.42)");mg.addColorStop(.7,"rgba(130,136,158,.26)");mg.addColorStop(1,"rgba(140,146,168,0)");g.fillStyle=mg;g.beginPath();g.arc(0,0,rr,0,Math.PI*2);g.fill();g.restore()}
    var Rk=rng(41);for(var k=0;k<14;k++){var a2=Rk()*6.28,d2=Math.sqrt(Rk())*R*.85,kx=mx+Math.cos(a2)*d2,ky=my+Math.sin(a2)*d2,kr=R*(.02+Rk()*.045);
      g.fillStyle="rgba(255,255,250,.35)";g.beginPath();g.arc(kx,ky,kr,0,Math.PI*2);g.fill();g.strokeStyle="rgba(120,126,150,.25)";g.lineWidth=Math.max(.5,kr*.35);g.beginPath();g.arc(kx+kr*.2,ky+kr*.2,kr,0,Math.PI*2);g.stroke()}
    var ld=g.createRadialGradient(mx,my,R*.55,mx,my,R*1.02);ld.addColorStop(0,"rgba(60,70,110,0)");ld.addColorStop(1,"rgba(60,70,110,.32)");g.fillStyle=ld;g.fillRect(mx-R,my-R,R*2,R*2);
    g.restore();
    ST=[];var Rs=rng(3),n=G.mob?50:150;for(var s=0;s<n;s++){var sx=Rs()*w,sy=Math.pow(Rs(),1.4)*hz*.8,dm=Math.hypot(sx-mx,sy-my)/(R*5);if(dm<1)continue;ST.push([sx,sy,.3+Rs()*.9,Rs()*6.28,.4+Rs()*1.3,(1-sy/(hz*.8))*Math.min(1,dm-1+.2)])}
    /* far shore: low hills and a ragged treeline, cool and dark */
    var B=mk(h+2);oFar=B[0];var f=B[1],Rt=rng(19);
    f.fillStyle="#0c1230";f.beginPath();f.moveTo(0,hz);for(var x=0;x<=w+10;x+=10)f.lineTo(x,hz-U*(.018+.016*Math.sin(x*.0021+1)+.01*Math.sin(x*.0063)));f.lineTo(w,hz+1);f.lineTo(0,hz+1);f.closePath();f.fill();
    f.fillStyle="#070b1d";f.beginPath();f.moveTo(0,hz+1);var tx=0;while(tx<=w+20){var th=U*(.012+Rt()*.022)*(Rt()<.12?1.9:1),tw=U*(.008+Rt()*.016);
      f.lineTo(tx,hz-th*.4);f.quadraticCurveTo(tx+tw*.5,hz-th*1.25,tx+tw,hz-th*.5);tx+=tw*(.7+Rt()*.5)}f.lineTo(w,hz+1);f.closePath();f.fill();
    /* the water: the sky reflected, darker */
    var wg=f.createLinearGradient(0,hz,0,h);wg.addColorStop(0,"#1b2554");wg.addColorStop(.12,"#121a3d");wg.addColorStop(.5,"#0b1128");wg.addColorStop(1,"#070a17");f.fillStyle=wg;f.fillRect(0,hz+1,w,h-hz);
    var rh=f.createLinearGradient(0,hz,0,hz+U*.05);rh.addColorStop(0,"rgba(7,11,29,.9)");rh.addColorStop(1,"rgba(7,11,29,0)");f.fillStyle=rh;f.fillRect(0,hz+1,w,U*.05);
    /* the halo's reflection, a soft column under the moon */
    var rc=f.createRadialGradient(mx,hz,0,mx,hz,(h-hz)*1.1);rc.addColorStop(0,"rgba(170,190,250,.12)");rc.addColorStop(1,"rgba(170,190,250,0)");f.save();f.translate(mx,hz);f.scale(.38,1);f.translate(-mx,-hz);f.fillStyle=rc;f.fillRect(mx-(h-hz)*1.2,hz+1,(h-hz)*2.4,h-hz);f.restore();
    /* glitter path, reeds, mist */
    GL=[];var Rg=rng(29),gn=G.mob?140:340,bot=G.mob?U:h;for(var gi=0;gi<gn;gi++){var u=Math.pow(Rg(),1.15);GL.push([u,(Rg()-.5),Rg()*6.28,.6+Rg()*1.6,Rg()])}
    RD=[];var Rr=rng(13);
    function clump(cx,base,nb,hmax,spread,front){for(var r2=0;r2<nb;r2++){var cat=Rr()<.3;RD.push({x:cx+(Rr()-.5)*spread,b:base+Rr()*U*.02,hgt:hmax*(.45+Rr()*.55),lean:(Rr()-.5)*.22,ph:Rr()*6.28,cat:cat,wd:front?1.6:1.1,col:front?"#04060e":"#080c1c"})}}
    if(G.mob){clump(w*.06,bot,18,U*.4,w*.2,1);clump(w*.94,bot,16,U*.34,w*.18,1);clump(w*.32,hz+U*.06,8,U*.07,w*.12,0)}
    else{clump(G.side+G.cw*.9,h*1.0,34,h*.36,w*.16,1);clump(w*.99,h*1.0,22,h*.44,w*.08,1);clump(G.side+G.cw*.55,h*.995,16,h*.16,w*.12,1);
      clump(G.side+G.cw*.42,hz+h*.06,12,h*.05,w*.1,0);clump(G.side+G.cw*.98,hz+h*.1,10,h*.07,w*.08,0);clump(G.side+G.cw*.1,h*1.0,18,h*.2,w*.14,1)}
    RD.sort(function(a,b){return a.b-b.b});
    MS=[];var Rm=rng(31);for(var mi=0;mi<(G.mob?5:9);mi++)MS.push([Rm(),hz+(Rm()-.35)*U*.05,w*(.18+Rm()*.28),U*(.012+Rm()*.018),.04+Rm()*.06,.004+Rm()*.006])
  }
  function reed(r,t){var sw=Math.sin(t*.55+r.ph)*r.hgt*.025+Math.sin(t*1.3+r.ph*2)*r.hgt*.006,tx=r.x+r.lean*r.hgt+sw,ty=r.b-r.hgt,mx=r.x+r.lean*r.hgt*.4+sw*.4,my=r.b-r.hgt*.55;
    c.strokeStyle=r.col;c.fillStyle=r.col;c.lineWidth=r.wd;c.lineCap="round";c.beginPath();c.moveTo(r.x,r.b);c.quadraticCurveTo(mx,my,tx,ty);c.stroke();
    if(r.cat){var dx=tx-mx,dy=ty-my,dl=Math.hypot(dx,dy)||1,ux=dx/dl,uy=dy/dl,L=r.hgt*.13,W2=Math.max(2,r.hgt*.02);
      c.save();c.translate(tx-ux*L*1.2,ty-uy*L*1.2);c.rotate(Math.atan2(uy,ux));c.beginPath();c.ellipse(0,0,L*.5,W2,0,0,Math.PI*2);c.fill();c.restore();
      c.beginPath();c.moveTo(tx-ux*L*.6,ty-uy*L*.6);c.lineTo(tx+ux*L*.35,ty+uy*L*.35);c.stroke()}
    else{c.lineWidth=r.wd*.8;c.beginPath();c.moveTo(r.x,r.b-r.hgt*.15);c.quadraticCurveTo(r.x+r.lean*r.hgt*.9+sw*1.2-r.hgt*.12,r.b-r.hgt*.45,r.x+r.lean*r.hgt*1.3+sw*1.4-r.hgt*.22,r.b-r.hgt*.42);c.stroke()}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,mx=G.mx,R=G.R,bot=G.mob?U:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.drawImage(oFar,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    for(var i=0;i<ST.length;i++){var s=ST[i],a=s[5]*(.45+.55*Math.sin(t*s[4]+s[3]))*.85;if(a<.05)continue;c.fillStyle="rgba(232,238,255,"+a.toFixed(3)+")";c.fillRect(s[0],s[1],s[2],s[2])}
    /* ripples across the water */
    for(var l=0;l<(G.mob?14:26);l++){var k=(l+.5)/(G.mob?14:26),ly=hz+(bot-hz)*Math.pow(k,1.6),lx=((t*(5+l%3*3)*(l%2?1:-1)+l*211)%w+w)%w,lw=w*(.06+.1*(1-k)),la=.06*(1-k*.5);
      c.fillStyle="rgba(170,186,236,"+la.toFixed(3)+")";c.fillRect(lx-lw/2,ly,lw,1)}
    /* the moon's glitter path: short bright dashes that shimmer, widening toward the viewer */
    c.globalCompositeOperation="lighter";
    for(var g2=0;g2<GL.length;g2++){var q=GL[g2],u=q[0],gy=hz+3+(bot-hz-3)*u,spread=R*(.7+u*3.4),gx=mx+q[1]*spread*2+Math.sin(t*.9+q[2])*R*.12*(.4+u),
      fl=.5+.5*Math.sin(t*q[3]*2.2+q[2]),al=(1-u*.75)*fl*(1-Math.abs(q[1])*1.4);if(al<=.02)continue;var dl=R*(.12+u*.5)*(.5+q[4]);
      c.fillStyle="rgba(226,232,255,"+(al*.55).toFixed(3)+")";c.fillRect(gx-dl/2,gy,dl,Math.max(1,u*2))}
    c.globalCompositeOperation="source-over";
    /* low mist drifting along the far shore */
    for(var mi=0;mi<MS.length;mi++){var ms=MS[mi],mxp=((ms[0]+t*ms[5])%1.4-.2)*w,mg=c.createRadialGradient(0,0,0,0,0,ms[2]);
      c.save();c.translate(mxp,ms[1]);c.scale(1,ms[3]/ms[2]);mg.addColorStop(0,"rgba(176,190,236,"+ms[4].toFixed(3)+")");mg.addColorStop(1,"rgba(176,190,236,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,ms[2],0,Math.PI*2);c.fill();c.restore()}
    /* reeds and cattails, far ones first */
    for(var r=0;r<RD.length;r++)reed(RD[r],t);
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mx,G.my+G.R*1.6]:[w/2,h/2]}};
})();