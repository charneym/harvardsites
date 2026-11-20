/* ================= HERO FIELD: a Lowcountry salt marsh at first light, near Toomer's home in Mount Pleasant,
   South Carolina. A live oak hung with Spanish moss stands on the far bank; a tidal creek winds out of the dawn
   glow through the spartina; small ripples cross the water in threes, like the waves of Toomer's mark. The moss,
   grass, ripples, mist and a few birds move on their own, with no pointer response (CZ). The landscape and the oak
   are painted once; each frame composites them and draws only the moving parts. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBg=null,oMist=null,MOSS=[],GR=[],RIP=[],BIRDS=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.37,w*.86):h,hz=mob?U*.6:h*.6;
    var S=mob?U*.6:Math.min(h*.62,cw*.4);
    var ox=mob?w*.64:side+cw*.82,oy=hz+(mob?U*.05:h*.035);
    var sx=mob?w*.3:side+cw*.44;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,ox:ox,oy:oy,sx:sx,ground:U};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the creek: centre line and half width at depth u (0 at the horizon, 1 at the bottom of the art) */
  function creek(u){var cw=G.cw,x0=G.mob?w*.36:G.side+cw*.4,
      x=x0+(G.mob?w:cw)*(.09*Math.sin(u*6.4+.2)*Math.min(1,u*2.4)+(G.mob?.04:.16)*u*u),
      hw=1.2+Math.pow(u,1.9)*(G.mob?w*.3:cw*.2)*(.72+.28*Math.sin(u*9+1));
    return [x,hw]}
  function yAt(u){return G.hz+(G.ground-G.hz)*Math.pow(u,1.35)}
  function uAt(y){var v=(y-G.hz)/(G.ground-G.hz);return v<=0?0:Math.pow(v,1/1.35)}
  function inCreek(x,y,m){if(y<G.hz)return false;var q=creek(uAt(y));return Math.abs(x-q[0])<q[1]-(m||0)}
  function build(){
    var W=w,H=h,GH=G.ground,hz=G.hz,A=mk(W,H+2),g=A[1],sx=G.sx;oBg=A[0];
    /* sky: blue hour lifting to a pale, warm horizon */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#0b1016");sky.addColorStop(.36,"#16212c");sky.addColorStop(.62,"#3a5068");sky.addColorStop(.82,"#8aa6c0");sky.addColorStop(.95,"#c9d6e6");sky.addColorStop(1,"#ecdccb");
    g.fillStyle=sky;g.fillRect(0,0,W,hz+2);
    var sun=g.createRadialGradient(sx,hz,0,sx,hz,Math.max(W,GH)*.6);sun.addColorStop(0,"rgba(255,226,196,.75)");sun.addColorStop(.08,"rgba(246,206,176,.38)");sun.addColorStop(.3,"rgba(200,190,200,.12)");sun.addColorStop(1,"rgba(165,203,234,0)");
    g.fillStyle=sun;g.fillRect(0,0,W,hz+2);
    /* thin stratus, lit from below */
    var rc=rng(17);for(var k=0;k<(G.mob?6:11);k++){var cy=hz*(.42+rc()*.42),cx=rc()*W,cl=W*(.12+rc()*.28),ch=2+rc()*5,near=1-Math.min(1,Math.abs(cx-sx)/(W*.6));
      var cg=g.createLinearGradient(0,cy-ch,0,cy+ch);cg.addColorStop(0,"rgba(120,140,170,"+(.1+rc()*.1).toFixed(3)+")");cg.addColorStop(1,"rgba(250,214,190,"+(.12+near*.3).toFixed(3)+")");
      g.fillStyle=cg;g.beginPath();g.ellipse(cx,cy,cl/2,ch,0,0,6.283);g.fill()}
    /* the far treeline of the maritime forest, hazy blue */
    function trees(base,amp,col,seed,step){var r=rng(seed);g.fillStyle=col;g.beginPath();g.moveTo(0,hz+2);var x=0;
      var lvl=.6;while(x<=W+step){lvl+=(r()-.5)*.35;lvl=lvl<.25?.25:lvl>1?1:lvl;var pine=false,ht=amp*lvl*(pine?1.9:(.8+r()*.4)),wd=step*(pine?.5:(.4+r()*1.3));
        if(pine){g.lineTo(x+wd*.45,base-ht*.7);g.lineTo(x+wd*.2,base-ht*.72);g.lineTo(x+wd*.5,base-ht);g.lineTo(x+wd*.8,base-ht*.72);g.lineTo(x+wd*.55,base-ht*.7);g.lineTo(x+wd,base-amp*lvl*.8)}
        else g.quadraticCurveTo(x+wd*.5,base-ht*1.25,x+wd,base-amp*lvl*(.75+r()*.3));x+=wd}
      g.lineTo(W,hz+2);g.closePath();g.fill()}
    trees(hz,GH*.03,"rgba(92,112,134,.55)",5,G.mob?10:16);
    trees(hz+1,GH*.018,"rgba(56,70,84,.85)",9,G.mob?8:12);
    /* the marsh plain */
    var md=g.createLinearGradient(0,hz,0,GH);md.addColorStop(0,"#5d6660");md.addColorStop(.12,"#4a5040");md.addColorStop(.45,"#2c3226");md.addColorStop(1,"#141a16");
    g.fillStyle=md;g.fillRect(0,hz,W,GH-hz+2);
    var gl=g.createRadialGradient(sx,hz,0,sx,hz,W*.45);gl.addColorStop(0,"rgba(236,200,160,.3)");gl.addColorStop(1,"rgba(236,200,160,0)");g.fillStyle=gl;g.fillRect(0,hz,W,GH-hz);
    /* the creek, reflecting the sky upside down: the bright horizon near, the dark zenith in the foreground */
    var N=90,L=[],Rr=[];for(var i=0;i<=N;i++){var u=i/N,q=creek(u),y=yAt(u);L.push([q[0]-q[1],y]);Rr.push([q[0]+q[1],y])}
    g.beginPath();g.moveTo(L[0][0],L[0][1]);for(var a=1;a<=N;a++)g.lineTo(L[a][0],L[a][1]);for(var b=N;b>=0;b--)g.lineTo(Rr[b][0],Rr[b][1]);g.closePath();
    var wg=g.createLinearGradient(0,hz,0,GH);wg.addColorStop(0,"#efe0cf");wg.addColorStop(.08,"#c9d3de");wg.addColorStop(.3,"#7f98b0");wg.addColorStop(.62,"#2e4152");wg.addColorStop(1,"#121c24");
    g.save();g.fillStyle=wg;g.fill();g.clip();
    var sg=g.createLinearGradient(sx-W*.05,0,sx+W*.05,0);sg.addColorStop(0,"rgba(255,230,200,0)");sg.addColorStop(.5,"rgba(255,230,200,.35)");sg.addColorStop(1,"rgba(255,230,200,0)");g.fillStyle=sg;g.globalAlpha=.9;var sv=g.createLinearGradient(0,hz,0,hz+(GH-hz)*.5);sv.addColorStop(0,"rgba(255,230,200,.3)");sv.addColorStop(1,"rgba(255,230,200,0)");g.fillStyle=sv;g.fillRect(sx-W*.04,hz,W*.08,(GH-hz)*.5);g.globalAlpha=1;
    /* the treeline mirrored in the far water */
    g.fillStyle="rgba(60,76,92,.35)";g.fillRect(0,hz,W,(GH-hz)*.012);
    g.restore();
    /* wet mud glinting along both banks */
    g.lineWidth=G.mob?1:1.4;g.strokeStyle="rgba(236,214,190,.32)";[L,Rr].forEach(function(P){g.beginPath();g.moveTo(P[0][0],P[0][1]);for(var k=1;k<P.length;k++)g.lineTo(P[k][0],P[k][1]);g.stroke()});
    /* spartina: fine blades catching the low light, golden far away, dark near */
    var rg=rng(41),n=G.mob?1600:4800;g.lineCap="round";
    for(var k2=0;k2<n;k2++){var gy=hz+Math.pow(rg(),1.25)*(GH-hz),gx=rg()*W;if(inCreek(gx,gy+2,2+dep*5))continue;var dep=(gy-hz)/(GH-hz),len=(3+rg()*7)*(.3+dep*3.2)*(G.mob?.7:1),lean=(rg()-.5)*len*.35,lit=Math.max(0,1-Math.abs(gx-sx)/(W*.55))*(1-dep*.7);
      g.strokeStyle="rgba("+(70+lit*150|0)+","+(74+lit*112|0)+","+(52+lit*62|0)+","+(.28+rg()*.4).toFixed(3)+")";g.lineWidth=.5+dep*1.1;g.beginPath();g.moveTo(gx,gy);g.quadraticCurveTo(gx+lean*.3,gy-len*.6,gx+lean,gy-len);g.stroke()}
    /* the live oak */
    oak(g);
    /* phones: the dark below the art band, so the copy sits on ink */
    if(G.mob){var bd=g.createLinearGradient(0,GH-2,0,H);bd.addColorStop(0,"#141a16");bd.addColorStop(.25,"#0e1418");bd.addColorStop(1,"#0e1418");g.fillStyle=bd;g.fillRect(0,GH-2,W,H-GH+4)}
    /* a soft mist bank over the marsh, drawn separately so it can drift */
    var M=mk(W*1.5,GH*.12),mg=M[1];oMist=M[0];var rm=rng(61);
    for(var m=0;m<(G.mob?10:18);m++){var mx=rm()*W*1.5,my=GH*.06,mr=W*(.08+rm()*.12);var mm=mg.createRadialGradient(mx,my,0,mx,my,mr);mm.addColorStop(0,"rgba(214,224,232,"+(.1+rm()*.08).toFixed(3)+")");mm.addColorStop(1,"rgba(214,224,232,0)");mg.save();mg.translate(0,my);mg.scale(1,.18);mg.translate(0,-my);mg.fillStyle=mm;mg.fillRect(mx-mr,my-mr,mr*2,mr*2);mg.restore()}
    /* near grass, ripples, birds */
    GR=[];RIP=[];BIRDS=[];
    var rgr=rng(23);for(var q=0;q<(G.mob?60:150);q++){var gx2=rgr()*w;if(inCreek(gx2,GH-4)&&rgr()<.85)continue;GR.push([gx2,GH+4,(G.mob?G.U*.13:h*.11)*(.35+rgr()*.9),(rgr()-.5)*.45,rgr()*6,.7+rgr()*1.3])}
    var rr=rng(29);for(var r=0;r<(G.mob?9:16);r++){var u2=.12+rr()*.8,cq=creek(u2);RIP.push([u2,(rr()-.5)*1.2*cq[1],rr()*6,.5+rr()*.5])}
    var rb=rng(11);for(var bb=0;bb<3;bb++)BIRDS.push([rb(),hz*(.3+rb()*.3),(G.mob?5:8)*(.7+rb()*.6),.008+rb()*.006,rb()*6]);
  }
  /* a live oak: a short, buttressed trunk; massive limbs that leave it almost level, dip and rise again; a broad,
     layered crown of small leaf clusters; backlit by the dawn, so it reads as a dark, detailed silhouette */
  function oak(g){
    var S=G.S,ox=G.ox,oy=G.oy,r=rng(7);MOSS=[];var LEAF=[],SEGS=[];
    var bark="#11181a";
    function branch(x,y,ang,len,wd,dep,droop){
      var n=Math.max(4,Math.round(len/(S*.03))),px=x,py=y,a=ang;
      for(var i=1;i<=n;i++){var t=i/n;a+=(r()-.5)*.16+droop*(t<.5?1:-1.1)*.06;var nx=px+Math.cos(a)*len/n,ny=py+Math.sin(a)*len/n,ww=wd*(1-t*.45);
        g.strokeStyle=bark;g.lineCap="round";g.lineWidth=Math.max(.7,ww);g.beginPath();g.moveTo(px,py);g.lineTo(nx,ny);g.stroke();
        if(dep>=1&&r()<.5)SEGS.push([nx,ny,ww]);px=nx;py=ny}
      if(dep<=0||wd<1.1){LEAF.push([px,py]);return}
      var kids=dep>2?3:2+(r()<.5?1:0);
      for(var k=0;k<kids;k++){var da=(k-(kids-1)/2)*(.5+r()*.35)+(r()-.5)*.25,na=a+da;if(na>-.05&&na<Math.PI*.5)na=-.05-r()*.2;if(na<-Math.PI-.05&&na>-Math.PI*1.5)na=-Math.PI+.05+r()*.2;
        branch(px,py,na,len*(.62+r()*.16),wd*.62,dep-1,droop*.4)}
      if(dep<=2)LEAF.push([px,py])}
    /* trunk */
    var tw=S*.06,fy=oy-S*.15;
    var tg=g.createLinearGradient(ox-tw*1.4,0,ox+tw*1.4,0);tg.addColorStop(0,"#2a302e");tg.addColorStop(.3,"#151b1c");tg.addColorStop(1,"#0d1213");
    g.fillStyle=tg;g.beginPath();g.moveTo(ox-tw*1.9,oy+3);g.bezierCurveTo(ox-tw*1.1,oy-S*.015,ox-tw*.95,oy-S*.06,ox-tw*.85,fy+S*.04);g.lineTo(ox-tw*1.2,fy-S*.02);g.lineTo(ox+tw*1.3,fy-S*.02);g.lineTo(ox+tw*.9,fy+S*.04);g.bezierCurveTo(ox+tw,oy-S*.06,ox+tw*1.2,oy-S*.015,ox+tw*2,oy+3);g.closePath();g.fill();
    /* the great limbs: angle (radians, 0 = right), length, width, droop */
    var LB=[[-2.98,S*.3,tw*.7,1],[-2.6,S*.27,tw*.62,.6],[-2.1,S*.24,tw*.58,.2],[-1.57,S*.22,tw*.55,0],[-1.05,S*.24,tw*.58,-.2],[-.55,S*.27,tw*.62,-.6],[-.16,S*.3,tw*.7,-1]];
    LB.forEach(function(L,i){branch(ox+(i-3)*tw*.25,fy+(Math.abs(i-3)>1?S*.01:0),L[0],L[1],L[2],4,L[3])});
    /* crown: leaf clusters at the twigs; a faint warm rim first, then the dark mass, then light flecks on top */
    var CL=[];LEAF.forEach(function(q){var nn=3+(r()*4|0);for(var k=0;k<nn;k++)CL.push([q[0]+(r()-.5)*S*.07,q[1]+(r()-.62)*S*.04,S*(.018+r()*.03)])});
    function blob(x,y,R,col){g.fillStyle=col;g.beginPath();g.ellipse(x,y,R*1.45,R*.78,(r()-.5)*.3,0,6.283);g.fill()}
    CL.forEach(function(q){blob(q[0]-q[2]*.18,q[1]-q[2]*.2,q[2]*1.12,"rgba(226,200,176,.06)")});
    CL.forEach(function(q){blob(q[0],q[1],q[2],r()<.5?"#121a1b":"#0f1617")});
    CL.forEach(function(q){if(r()<.6){var k=2+(r()*4|0);for(var j=0;j<k;j++){g.fillStyle="rgba(128,146,136,"+(.08+r()*.14).toFixed(3)+")";g.beginPath();g.ellipse(q[0]+(r()-.5)*q[2]*2,q[1]-q[2]*(.2+r()*.4),.8+r()*1.6,.6+r()*.9,0,0,6.283);g.fill()}}});
    /* Spanish moss hangs from the limbs and under the crown */
    SEGS.forEach(function(q){if(r()<.55)MOSS.push([q[0],q[1]+q[2]*.4,S*(.035+r()*.09),r()*6,.4+r()*.6])});
    CL.forEach(function(q){if(r()<.07)MOSS.push([q[0],q[1]+q[2]*.6,S*(.03+r()*.07),r()*6,.3+r()*.5])});
    /* grass closes over the roots */
    var rg=rng(3);g.lineCap="round";for(var k3=0;k3<(G.mob?40:90);k3++){var gx=ox+(rg()-.5)*tw*7,gy=oy+rg()*S*.02,ln=S*(.008+rg()*.018);g.strokeStyle="rgba(22,28,22,.55)";g.lineWidth=1;g.beginPath();g.moveTo(gx,gy);g.lineTo(gx+(rg()-.5)*ln*.5,gy-ln);g.stroke()}
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var par=G.mob?0:-SP.v*h*.05;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oBg,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* birds gliding across the dawn */
    c.strokeStyle="rgba(20,28,34,.75)";c.lineWidth=1.2;c.lineCap="round";
    for(var b=0;b<BIRDS.length;b++){var B=BIRDS[b],bx=((B[0]+t*B[3])%1.2-.1)*w,by=B[1]+Math.sin(t*.3+B[4])*6,f=Math.sin(t*3+B[4])*.35,s=B[2];
      c.beginPath();c.moveTo(bx-s,by-s*(.25+f));c.quadraticCurveTo(bx-s*.4,by-s*(.45+f*.5),bx,by);c.quadraticCurveTo(bx+s*.4,by-s*(.45+f*.5),bx+s,by-s*(.25+f));c.stroke()}
    /* mist drifting over the marsh */
    var mw=w*1.5,mo=-((t*6)%(w*.5));c.globalAlpha=e*.9;c.drawImage(oMist,mo,G.hz-G.ground*.05,mw,G.ground*.12);c.globalAlpha=e;
    /* ripples in threes on the creek */
    c.lineCap="round";
    for(var r=0;r<RIP.length;r++){var Q=RIP[r],u=Q[0],q=creek(u),y=yAt(u),x=q[0]+Q[1]+Math.sin(t*.35+Q[2])*q[1]*.12,len=Math.max(6,q[1]*.32),a=(.14+.16*Math.sin(t*.6+Q[2])*.5+.08)*Q[3]*(.4+u);
      c.strokeStyle="rgba(232,238,244,"+a.toFixed(3)+")";c.lineWidth=.8+u*.9;
      for(var k=0;k<3;k++){var yy=y+k*(2.2+u*5),ph=t*1.1+Q[2]+k;c.beginPath();c.moveTo(x-len/2,yy);c.bezierCurveTo(x-len/6,yy-1.6*Math.sin(ph)-1,x+len/6,yy+1.6*Math.sin(ph)+1,x+len/2,yy);c.stroke()}}
    c.translate(0,par*.4);
    /* Spanish moss swaying in the breeze: grey-green wisps */
    for(var m=0;m<MOSS.length;m++){var M=MOSS[m],sw=Math.sin(t*.6+M[3])*M[2]*.12+Math.sin(t*1.5+M[3]*2)*M[2]*.03;
      c.strokeStyle="rgba(138,152,142,"+(.18+.22*M[4]).toFixed(3)+")";c.lineWidth=G.mob?.6:.8;c.beginPath();
      for(var k2=0;k2<4;k2++){var dx=(k2-1.5)*M[2]*.05,ln=M[2]*(1-k2*.15),x0=M[0]+dx*.3,y0=M[1];c.moveTo(x0,y0);
        for(var j=1;j<=4;j++){var f=j/4;c.lineTo(x0+dx*f*1.6+sw*f*f+(j&1?1:-1)*M[2]*.012,y0+ln*f)}}
      c.stroke()}
    c.translate(0,-par*.4);c.translate(0,par);
    /* near grasses, dark against the water and the light */
    for(var g2=0;g2<GR.length;g2++){var q2=GR[g2],sw2=Math.sin(t*.8+q2[4])*q2[2]*.05;c.strokeStyle="rgba(10,14,12,.92)";c.lineWidth=q2[5];c.beginPath();c.moveTo(q2[0],q2[1]);c.quadraticCurveTo(q2[0]+q2[3]*q2[2]*.3,q2[1]-q2[2]*.6,q2[0]+q2[3]*q2[2]+sw2,q2[1]-q2[2]);c.stroke()}
    c.setTransform(1,0,0,1,0,0);c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.ox,G.oy-G.S*.4]:[w/2,h/2]}};
})();
