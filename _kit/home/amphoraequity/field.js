/* ================= HERO FIELD: a terracotta amphora on a limestone parapet above the sea at blue hour. The firm takes its
   name and its mark (a footed, two-handled amphora) from the vessel the ancient world used to carry oil, wine and grain:
   packaged food and beverage, in its first form. The jar is shaded per pixel as a true surface of revolution (warm low sun
   from the left, cool sky fill, a rim of sea light), painted bands and throwing rings follow its curvature, and the sky runs
   from the firm's logo navy (#0e263b) to a pale dusk. The sea glitters and swells on its own; no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oFg=null,GL=[],BIRD=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function cl(x,a,b){return x<a?a:x>b?b:x}
  /* half-width of the jar (in jar heights) from lip (0) to foot (1) */
  var PR=[[-.02,.104],[0,.106],[.022,.113],[.045,.09],[.1,.077],[.19,.081],[.25,.12],[.31,.205],[.39,.268],[.47,.287],[.56,.276],[.67,.222],[.77,.158],[.85,.106],[.9,.078],[.935,.084],[.965,.113],[1,.118],[1.02,.118]];
  function R(t){if(t<=PR[0][0])return PR[0][1];for(var i=1;i<PR.length;i++)if(t<=PR[i][0]){var a=PR[Math.max(0,i-2)],b=PR[i-1],d=PR[i],e=PR[Math.min(PR.length-1,i+1)],u=(t-b[0])/(d[0]-b[0]),u2=u*u,u3=u2*u;
    var m1=(d[1]-a[1])/(d[0]-a[0]||1)*(d[0]-b[0]),m2=(e[1]-b[1])/(e[0]-b[0]||1)*(d[0]-b[0]);
    return (2*u3-3*u2+1)*b[1]+(u3-2*u2+u)*m1+(-2*u3+3*u2)*d[1]+(u3-u2)*m2}return PR[PR.length-1][1]}
  function noise2(seed){var Rr=rng(seed),N=64,g=[];for(var i=0;i<N*N;i++)g.push(Rr());
    return function(x,y){var xi=Math.floor(x),yi=Math.floor(y),fx=x-xi,fy=y-yi;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);
      var a=g[((yi&63)*N+(xi&63))],b=g[((yi&63)*N+((xi+1)&63))],c2=g[(((yi+1)&63)*N+(xi&63))],d=g[(((yi+1)&63)*N+((xi+1)&63))];
      return a+(b-a)*fx+(c2-a)*fy+(a-b-c2+d)*fx*fy}}
  var NZ=noise2(7),NZ2=noise2(31);
  function fbm(x,y){return NZ(x,y)*.55+NZ(x*2.1,y*2.1)*.28+NZ2(x*4.3,y*4.3)*.17}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.round(h*.37):h;
    var hz=mob?U*.5:h*.585;
    var ly=mob?U*.84:h*.8;
    var A=mob?Math.min(U*.66,w*.5):Math.min(h*.58,cw*.34);
    var cx=mob?w*.68:side+cw*.76;
    var px0=mob?w*.38:side+cw*.5;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,ly:ly,A:A,cx:cx,px0:px0,sun:mob?w*.16:side+cw*.2};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* ---- the jar, shaded per pixel at device resolution ---- */
  function jar(Ah,tone,seed){
    var pad=Math.round(Ah*.06*dpr),H=Math.round(Ah*dpr),W=Math.round(Ah*.68*dpr),o=document.createElement("canvas");o.width=W;o.height=H+pad*2;var g=o.getContext("2d");
    var img=g.createImageData(W,H+pad*2),D=img.data,cx=W/2,tilt=.2;
    var L=[-.62,-.5,.6],Ln=Math.hypot(L[0],L[1],L[2]);L=[L[0]/Ln,L[1]/Ln,L[2]/Ln];
    var F=[.72,-.42,.45],Fn=Math.hypot(F[0],F[1],F[2]);F=[F[0]/Fn,F[1]/Fn,F[2]/Fn];
    var Hh=[L[0],L[1],L[2]+1],Hn=Math.hypot(Hh[0],Hh[1],Hh[2]);Hh=[Hh[0]/Hn,Hh[1]/Hn,Hh[2]/Hn];
    var Rr=rng(seed);
    for(var py=0;py<H;py++){
      var t=py/H,r=R(t)*H,dr=(R(t+.002)-R(t-.002))/.004;
      if(r<1)continue;
      for(var px=Math.max(0,Math.floor(cx-r-1));px<=Math.min(W-1,Math.ceil(cx+r+1));px++){
        var dx=px+.5-cx,a=cl(r-Math.abs(dx)+.5,0,1);if(a<=0)continue;
        var u=cl(dx/r,-.999,.999),s=Math.sqrt(1-u*u);
        var nx=u,ny=-dr,nz=s,nn=Math.hypot(nx,ny,nz);nx/=nn;ny/=nn;nz/=nn;
        var to=t-tilt*R(t)*s;               /* the ring this pixel belongs to, seen from a little above */
        var ang=Math.asin(u);               /* around the jar */
        /* terracotta albedo: low patina, throwing rings, fine grain */
        var pat=fbm(ang*2.2+3,to*9),ring=Math.sin(to*H/dpr*.42+fbm(ang*1.3,to*4)*5)*.011*(.5+fbm(ang*3,to*7)),gr=(Rr()-.5)*.045;
        var k=1+(pat-.5)*.26+ring+gr;
        var ar=168*k,ag=90*k,ab=58*k;
        /* painted decoration in dark slip: a shoulder band pair, a wave band, a belly band, and the black foot */
        var band=0;
        if(Math.abs(to-.262)<.006||Math.abs(to-.286)<.0035)band=1;
        if(to>.33&&to<.355){var wv=.3425+.009*Math.sin(ang*14);if(Math.abs(to-wv)<.0042)band=1}
        if(Math.abs(to-.705)<.008||Math.abs(to-.727)<.0035)band=1;
        if(to>.905)band=.92;
        if(to<.03)band=.15;
        if(band){var wear=cl(.86-(fbm(ang*6+9,to*30)-.5)*.8,0,1)*band;ar=ar*(1-wear)+34*wear;ag=ag*(1-wear)+22*wear;ab=ab*(1-wear)+17*wear}
        /* light: warm low sun from the left, cool sky fill from the right, a little sea light round the rim */
        var dl=Math.max(0,nx*L[0]+ny*L[1]+nz*L[2]),df=Math.max(0,nx*F[0]+ny*F[1]+nz*F[2]);
        dl=Math.pow(dl,1.15);
        var sp=Math.pow(Math.max(0,nx*Hh[0]+ny*Hh[1]+nz*Hh[2]),22)*(band?.5:.22);
        var occ=1-.55*sm((.06-t)/.04)*(t<.06?1:0)-.35*sm((t-.88)/.1)-.18*sm((.24-t)/.06)*(t>.1?1:0);
        var rim=Math.pow(1-s,2.6)*(u>0?1:.35);
        var bounce=Math.max(0,ny)*.22;
        var lr=1.22*dl*tone,lg=.94*dl*tone,lb=.68*dl*tone,sky=Math.max(0,-ny)*.5+.5;
        var R0=ar*(lr+.1*df+.07*sky+bounce*.7)*occ+sp*255+rim*44,G0=ag*(lg+.17*df+.1*sky+bounce*.55)*occ+sp*225+rim*70,B0=ab*(lb+.34*df+.2*sky+bounce*.45)*occ+sp*190+rim*104;
        var i4=((py+pad)*W+px)*4;D[i4]=cl(R0,0,255);D[i4+1]=cl(G0,0,255);D[i4+2]=cl(B0,0,255);D[i4+3]=Math.round(a*255);
      }
    }
    g.putImageData(img,0,0);g.translate(0,pad);
    /* the mouth: an ellipse of the lip with the dark inside */
    var r0=R(0)*H,ry=r0*tilt;
    var ig=g.createLinearGradient(0,-ry,0,ry);ig.addColorStop(0,"#120b08");ig.addColorStop(1,"#3a2216");
    g.fillStyle=ig;g.beginPath();g.ellipse(cx,0,r0*.86,ry*.86,0,0,Math.PI*2);g.fill();
    g.lineWidth=Math.max(1,r0*.13);var lg2=g.createLinearGradient(cx-r0,0,cx+r0,0);lg2.addColorStop(0,"rgba(236,168,120,"+(.95*tone).toFixed(2)+")");lg2.addColorStop(.55,"rgba(150,80,50,.95)");lg2.addColorStop(1,"rgba(92,70,78,.95)");
    g.strokeStyle=lg2;g.beginPath();g.ellipse(cx,0,r0*.93,ry*.93,0,0,Math.PI*2);g.stroke();
    /* two handles, from under the lip to the shoulder: shaded tubes */
    [-1,1].forEach(function(sd){
      var x0=cx+sd*R(.07)*H*.92,y0=.07*H,x1=cx+sd*R(.3)*H*.86,y1=.3*H,ox=cx+sd*.215*H;
      var path=function(){g.beginPath();g.moveTo(x0,y0);g.bezierCurveTo(ox,y0-.035*H,ox+sd*.03*H,y1-.12*H,x1,y1)};
      var th=.03*H;
      g.lineCap="round";g.lineWidth=th;g.strokeStyle=sd<0?"rgba(150,72,40,1)":"rgba(70,40,34,1)";path();g.stroke();
      g.lineWidth=th*.5;g.strokeStyle=sd<0?"rgba(226,146,96,"+(.9*tone).toFixed(2)+")":"rgba(112,82,92,.9)";g.save();g.translate(-sd*th*.18,-th*.12);path();g.stroke();g.restore();
      g.lineWidth=th*.16;g.strokeStyle=sd<0?"rgba(255,206,160,"+(.55*tone).toFixed(2)+")":"rgba(150,170,200,.35)";g.save();g.translate(-sd*th*.3,-th*.2);path();g.stroke();g.restore();
    });
    return [o,W/dpr,(H+pad*2)/dpr,pad/dpr];
  }
  function build(){
    var hz=G.hz,U=G.U,A=G.A,mob=G.mob,wb=mob?U*1.04:h;
    /* ---- sky + distant land ---- */
    var S1=mk(w,hz+4),g=S1[1];oSky=S1[0];
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#071624");sky.addColorStop(.3,"#0e263b");sky.addColorStop(.58,"#2c4d70");sky.addColorStop(.8,"#7d98b4");sky.addColorStop(.93,"#c3c3bd");sky.addColorStop(1,"#e2cba8");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+4);
    var sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,Math.max(w*.55,U*.9));sg.addColorStop(0,"rgba(255,206,150,.7)");sg.addColorStop(.25,"rgba(240,170,130,.26)");sg.addColorStop(.6,"rgba(190,140,140,.08)");sg.addColorStop(1,"rgba(160,120,130,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.55);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,0,w,hz*2.2);g.restore();
    /* long, thin evening clouds lit from below */
    var Rc=rng(11);g.save();g.filter="blur("+Math.max(2,U*.006).toFixed(1)+"px)";
    for(var i=0;i<16;i++){var cy=hz*(.18+Rc()*.62),cxx=Rc()*w*1.2-w*.1,cw2=w*(.12+Rc()*.3),chh=Math.max(2,U*(.005+Rc()*.012)),near=(cy/hz);
      var warm=Math.max(0,1-Math.abs(cxx-G.sun)/(w*.6))*near;
      g.fillStyle="rgba("+Math.round(70+150*warm)+","+Math.round(92+100*warm)+","+Math.round(124+60*warm)+","+(.18+.32*near).toFixed(2)+")";
      g.beginPath();g.ellipse(cxx,cy,cw2,chh,0,0,Math.PI*2);g.fill();
      g.fillStyle="rgba(255,214,176,"+(.22*warm).toFixed(2)+")";g.beginPath();g.ellipse(cxx,cy+chh*.6,cw2*.8,chh*.5,0,0,Math.PI*2);g.fill()}
    g.restore();
    /* the sun just gone: a bright sliver of afterglow on the horizon */
    var ag=g.createRadialGradient(G.sun,hz,0,G.sun,hz,U*.05);ag.addColorStop(0,"rgba(255,236,200,.9)");ag.addColorStop(1,"rgba(255,220,170,0)");g.fillStyle=ag;g.fillRect(G.sun-U*.06,hz-U*.06,U*.12,U*.07);
    /* far headlands in haze, nearer cape darker */
    function land(base,amp,col,seed,x0,x1,rough){var Rl=rng(seed),y=0,v=0;g.fillStyle=col;g.beginPath();g.moveTo(x0,hz+2);
      for(var x=x0;x<=x1;x+=3){var k=(x-x0)/(x1-x0),env=Math.sin(Math.PI*Math.min(1,k*1.15))*.9+.1;v+=(Rl()-.5)*rough;v*=.94;y=hz-base*env-amp*(NZ(x*.01+seed,1)-.4)*env+v;g.lineTo(x,Math.min(hz+2,y))}
      g.lineTo(x1,hz+2);g.closePath();g.fill()}
    land(U*.035,U*.03,"rgba(92,116,146,.75)",3,w*.42,w*.86,.6);
    land(U*.022,U*.014,"rgba(120,138,160,.6)",9,-w*.05,w*.3,.4);
    land(U*.07,U*.05,"rgba(38,62,88,.95)",5,w*.74,w*1.12,.8);
    /* a scatter of first stars high up */
    var Rs=rng(21);for(var s2=0;s2<70;s2++){var sx=Rs()*w,sy=Rs()*hz*.4,sa=Rs()*.5*(1-sy/(hz*.4));g.fillStyle="rgba(230,236,245,"+sa.toFixed(2)+")";g.fillRect(sx,sy,Rs()<.15?1.4:.9,Rs()<.15?1.4:.9)}
    /* ---- foreground: parapet + jars ---- */
    var S2=mk(w,wb+2),f=S2[1];oFg=S2[0];
    var ly=G.ly,x0=G.px0,top=mob?U*.03:h*.032,fr=wb;
    /* front face */
    var ff=f.createLinearGradient(0,ly+top,0,fr);ff.addColorStop(0,"#6a625c");ff.addColorStop(.3,"#3e414a");ff.addColorStop(1,"#101e2d");
    f.fillStyle=ff;f.fillRect(x0,ly+top,w-x0,fr-ly-top);
    /* end face of the corner block, turned towards the light */
    var ew=mob?w*.05:Math.max(18,G.cw*.03);
    var ef=f.createLinearGradient(0,ly,0,fr);ef.addColorStop(0,"#9a8672");ef.addColorStop(.3,"#5f564f");ef.addColorStop(1,"#162231");
    f.fillStyle=ef;f.beginPath();f.moveTo(x0-ew,ly+top*.4);f.lineTo(x0,ly+top);f.lineTo(x0,fr);f.lineTo(x0-ew,fr);f.closePath();f.fill();
    /* top surface, lit low from the left */
    var tf=f.createLinearGradient(x0,0,w,0);tf.addColorStop(0,"#ecd0a8");tf.addColorStop(.5,"#c4a88a");tf.addColorStop(1,"#7a7070");
    f.fillStyle=tf;f.beginPath();f.moveTo(x0-ew,ly+top*.4);f.lineTo(w+2,ly+top*.4-1);f.lineTo(w+2,ly+top);f.lineTo(x0,ly+top);f.closePath();f.fill();
    f.beginPath();f.moveTo(x0-ew,ly+top*.4);f.lineTo(w+2,ly+top*.4-1);f.lineTo(w+2,ly);f.lineTo(x0-ew+ew*.4,ly);f.closePath();
    var tf2=f.createLinearGradient(0,ly,0,ly+top*.4);tf2.addColorStop(0,"#c7b195");tf2.addColorStop(1,"#d9c19f");f.fillStyle=tf2;f.fill();
    /* stone texture: pitted limestone, block joints, a lit arris */
    var img=f.getImageData(0,0,oFg.width,oFg.height),D=img.data,W2=oFg.width,Rn=rng(5);
    for(var py=Math.round((ly-2)*dpr);py<Math.min(oFg.height,Math.round(fr*dpr));py++)for(var px=Math.max(0,Math.round((x0-ew)*dpr));px<W2;px++){var i4=(py*W2+px)*4;if(!D[i4+3])continue;
      var n=fbm(px/dpr*.06,py/dpr*.06)-.5,n2=(Rn()-.5)*.09,kk=1+n*.32+n2;D[i4]=cl(D[i4]*kk,0,255);D[i4+1]=cl(D[i4+1]*kk,0,255);D[i4+2]=cl(D[i4+2]*kk,0,255)}
    f.putImageData(img,0,0);
    f.strokeStyle="rgba(20,24,30,.45)";f.lineWidth=1;f.beginPath();
    var bw=mob?w*.22:Math.max(120,G.cw*.17);for(var jx=x0+bw*.7;jx<w;jx+=bw){f.moveTo(jx,ly+top+1);f.lineTo(jx,fr);f.moveTo(jx+bw*.08,ly+top*.4);f.lineTo(jx+bw*.06,ly+top)}f.stroke();
    f.strokeStyle="rgba(255,232,200,.55)";f.lineWidth=1.2;f.beginPath();f.moveTo(x0-ew,ly+top*.4);f.lineTo(x0,ly+top);f.lineTo(w,ly+top);f.stroke();
    f.strokeStyle="rgba(255,236,206,.35)";f.beginPath();f.moveTo(x0-ew,ly+top*.4);f.lineTo(x0-ew+ew*.4,ly);f.lineTo(w,ly);f.stroke();
    /* the jars: a smaller one behind in shade, the main one forward */
    var fy=ly+top*.72;
    function place(Ah,x,yb,tone,seed){var J=jar(Ah,tone,seed),jw=J[1],jh=J[2],pd=J[3];
      /* long shadow to the right on the stone, and a contact shadow */
      f.save();f.globalAlpha=.55;f.fillStyle="rgba(18,16,20,1)";f.filter="blur("+Math.max(2,Ah*.02).toFixed(1)+"px)";
      f.beginPath();f.ellipse(x+Ah*.42,yb-Ah*.004,Ah*.48,Ah*.028,0,0,Math.PI*2);f.fill();f.restore();
      f.save();f.globalAlpha=.7;f.fillStyle="#140f0e";f.filter="blur("+Math.max(1,Ah*.006).toFixed(1)+"px)";f.beginPath();f.ellipse(x,yb,Ah*.13,Ah*.016,0,0,Math.PI*2);f.fill();f.restore();
      f.drawImage(J[0],x-jw/2,yb-Ah-pd,jw,jh)}
    place(A*.66,G.cx-A*(mob?.36:.4),fy-top*.3,.62,4);
    place(A,G.cx,fy,1,8);
    /* sea glints along the sun's path, and two gulls */
    var Rg=rng(13);GL=[];for(var q=0;q<(mob?90:180);q++)GL.push([Rg(),Rg(),Rg()*6.28,.6+Rg()*1.4]);
    BIRD=[[.18,.42,1,.3],[.24,.47,.85,2.1]];
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,mob=G.mob,wb=mob?U*1.04:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    if(mob){c.fillStyle="#0e263b";c.fillRect(0,0,cv.width,cv.height)}
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the sea: a darker mirror of the sky, with slow swell */
    var sg=c.createLinearGradient(0,hz,0,wb);sg.addColorStop(0,"#a8b2bb");sg.addColorStop(.06,"#5f7d9b");sg.addColorStop(.35,"#24425f");sg.addColorStop(1,"#0b1d2e");
    c.fillStyle=sg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz),sw=Math.round(w*dpr);c.globalAlpha=e*.26;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.11+t*1.1)*(.6+k*6)+Math.sin(y*.035-t*.5)*(k*4),sy2=Math.max(0,Math.round((hz-6-y*.35)*dpr));
      c.drawImage(oSky,0,sy2,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    /* swell lines */
    c.strokeStyle="rgba(200,214,228,.07)";c.lineWidth=1;c.beginPath();
    for(var j=1;j<22;j++){var yy=hz+Math.pow(j/22,1.7)*(wb-hz),ph=t*.35+j*1.7;c.moveTo(0,yy);for(var x=0;x<=w;x+=40)c.lineTo(x,yy+Math.sin(x*.006+ph)*(1+j*.18))}c.stroke();
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(8,24,39,0)");dkn.addColorStop(.5,"rgba(8,24,39,.3)");dkn.addColorStop(1,"rgba(8,24,39,.7)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* glints in the afterglow's path */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],gy=hz+Math.pow(gq[1],1.7)*(wb-hz)*.9+2,spread=U*(.04+gq[1]*.4),gx=G.sun+(gq[0]-.5)*spread*2,ga=(.5+.5*Math.sin(t*gq[3]*1.6+gq[2]))*(1-gq[1])*.3,gl=3+U*.03*(1-gq[1]);
      c.fillStyle="rgba(255,214,170,"+ga.toFixed(3)+")";c.fillRect(gx+Math.sin(t*.45+gq[2])*5,gy,gl,1)}
    c.globalCompositeOperation="source-over";
    /* two gulls riding home */
    c.strokeStyle="rgba(226,232,240,.7)";c.lineWidth=1.1;c.beginPath();
    for(var bi=0;bi<BIRD.length;bi++){var B=BIRD[bi],bx=((B[0]+t*.006*B[2])%1)*w,by=hz*B[1]+Math.sin(t*.35+B[3])*U*.01,fl2=Math.sin(t*2.6*B[2]+B[3])*2.6,bs=Math.max(4,U*.008);
      c.moveTo(bx-bs,by-fl2*.4);c.quadraticCurveTo(bx-bs*.4,by-bs*.5-fl2,bx,by);c.quadraticCurveTo(bx+bs*.4,by-bs*.5-fl2,bx+bs,by-fl2*.4)}c.stroke();
    /* the parapet and the jars, rising a touch faster than the sea as you scroll */
    var py=-SP.v*(mob?0:h*.05);
    c.setTransform(1,0,0,1,0,Math.round(py*dpr));c.drawImage(oFg,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    if(mob){var mf=c.createLinearGradient(0,U*.93,0,wb+2);mf.addColorStop(0,"rgba(14,38,59,0)");mf.addColorStop(1,"rgba(14,38,59,1)");c.fillStyle=mf;c.fillRect(0,U*.93,w,wb-U*.93+2)}
    else{var lv=c.createLinearGradient(0,0,G.side+G.cw*.55,0);lv.addColorStop(0,"rgba(6,18,30,.62)");lv.addColorStop(1,"rgba(6,18,30,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(6,18,30,0)");bv.addColorStop(1,"rgba(6,18,30,.3)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.ly-G.A*.5]:[w/2,h/2]}};
})();
