/* ================= HERO FIELD: the hills of Middle Tennessee at first light, outside Nashville. Ridge after ridge of
   rolling country fading into blue haze, mist lying in the hollows, a farmhouse and barn with a lit window on a far
   slope, a fence line and a lone oak on the near hill, and the morning star (the four-point star of Tristela's mark)
   still bright above the dawn. Painted in soft layers (haze, rim light, grain) rather than flat shapes. It animates
   on its own (mist drift, the star's glint, birds), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oA=null,oB=null,oC=null,oM=null,grain=null,WIN=[],RID=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*.95):h,Hb=mob?U*1.04:h;
    return {mob:mob,side:side,cw:cw,U:U,Hb:Hb,S:mob?U*.9:Math.min(h,cw*.62),
      sx:mob?w*.58:side+cw*.7,stx:mob?w*.6:side+cw*.84,sty:mob?U*.3:h*.18,fx:mob?w*.3:side+cw*.56,ox:mob?w*.84:side+cw*.86};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function blob(g,x,y,rx,ry,col){g.save();g.translate(x,y);g.scale(1,ry/rx);var gr=g.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,col);gr.addColorStop(1,col.replace(/[\d.]+\)$/,"0)"));g.fillStyle=gr;g.beginPath();g.arc(0,0,rx,0,Math.PI*2);g.fill();g.restore()}
  /* ridge profiles, far (0) to near (5) */
  var COL=[["#a9bfd2","#9bb3c9"],["#86a3bf","#7896b3"],["#62819f","#557591"],["#47647f","#3a566f"],["#2a4359","#203749"],["#172c42","#0e1f31"]];
  function ridges(){
    RID=[];var Hb=G.Hb;
    for(var i=0;i<6;i++){var R=rng(31+i*17),fs=[],n=4;for(var k=0;k<n;k++)fs.push([(1.2+k*1.9+R()*1.4)*(1+i*.15),R()*6.28,1/(1+k*.8)]);
      RID.push({base:Hb*(.57+i*.073),amp:Hb*(.045+i*.024),fs:fs,i:i})}
  }
  function ry(L,x){var s=0,a=0;for(var k=0;k<L.fs.length;k++){var F=L.fs[k];s+=Math.sin(x/w*F[0]*6.283+F[1])*F[2];a+=F[2]}
    var n=.5+.5*s/a;
    if(L.i<3)n*=1-.55*Math.exp(-Math.pow((x-G.sx)/(w*.13),2));        /* a saddle in the far hills where the dawn shows */
    if(L.i===5)n=n*.5+.5*sm((x-(G.mob?w*.45:G.side+G.cw*.55))/(G.mob?w*.5:G.cw*.45));   /* the near hill rises to the oak */
    if(L.i===3)n=n*.7+.3*Math.exp(-Math.pow((x-G.fx)/(w*.14),2));       /* the farm sits on a rounded rise */
    return L.base-L.amp*n}
  function paintRidge(g,L){
    var Hb=G.Hb,i=L.i,step=Math.max(2,w/320);
    g.beginPath();g.moveTo(-4,Hb+4);for(var x=-4;x<=w+4;x+=step)g.lineTo(x,ry(L,x));g.lineTo(w+4,Hb+4);g.closePath();
    var top=L.base-L.amp,gr=g.createLinearGradient(0,top,0,Math.min(Hb,L.base+Hb*.12));gr.addColorStop(0,COL[i][0]);gr.addColorStop(1,COL[i][1]);g.fillStyle=gr;g.fill();
    /* tree crowns along the crest on the nearer ridges, a soft painterly edge */
    if(i>=2){var R=rng(101+i),r=Hb*(.0035+.0026*(i-2));
      for(var x2=-r;x2<w+r;x2+=r*(.9+R()*.7)){var yy=ry(L,x2);g.fillStyle=COL[i][0];g.beginPath();g.arc(x2,yy+r*.35,r*(.6+R()*.7),0,6.283);g.fill()}
      /* scattered clumps of trees and hedgerows down the slope */
      var nC=Math.round(w/(i===5?90:60));for(var q=0;q<nC;q++){var cx=R()*w,cy=ry(L,cx)+L.amp*(.25+R()*.9);if(cy>Hb)continue;var cr=r*(.8+R());
        for(var b=0;b<4;b++){g.fillStyle=i===5?"rgba(6,14,24,.55)":"rgba(18,34,50,.35)";g.beginPath();g.arc(cx+(b-1.5)*cr*.9,cy-R()*cr*.4,cr*(.6+R()*.5),0,6.283);g.fill()}}}
    /* pasture strokes: faint, brushed horizontals */
    if(i>=2&&i<=4){var R2=rng(7+i);g.save();g.globalAlpha=.07;g.strokeStyle="#cfe0ea";g.lineWidth=1;
      for(var s=0;s<40;s++){var px=R2()*w,py=ry(L,px)+L.amp*(.3+R2()*1.2);if(py>Hb)continue;g.beginPath();g.moveTo(px,py);g.lineTo(px+w*(.02+R2()*.05),py+R2()*2);g.stroke()}g.restore()}
    /* rim light where the crest faces the dawn (far ridges only) */
    if(i<3){var rim=g.createLinearGradient(G.sx-w*.45,0,G.sx+w*.45,0),ra=(.55-i*.08).toFixed(3);
    rim.addColorStop(0,"rgba(255,224,170,0)");rim.addColorStop(.5,"rgba(255,224,170,"+ra+")");rim.addColorStop(1,"rgba(255,224,170,0)");
    g.strokeStyle=rim;g.lineWidth=i<3?1:1.4;g.beginPath();for(var x3=-4;x3<=w+4;x3+=step){var y3=ry(L,x3);x3<0?g.moveTo(x3,y3):g.lineTo(x3,y3)}g.stroke()}
    /* haze settling over the lower slopes */
    var hz=g.createLinearGradient(0,L.base-L.amp*.3,0,L.base+Hb*.06);hz.addColorStop(0,"rgba(200,218,232,0)");hz.addColorStop(1,"rgba(200,218,232,"+(.22-.035*i).toFixed(3)+")");
    g.save();g.globalCompositeOperation="source-atop";g.fillStyle=hz;g.fillRect(0,L.base-L.amp,w,Hb);g.restore();
  }
  function farm(g){
    var L=RID[3],S=G.S,x=G.fx,y=ry(L,x)+S*.006,u=S*.0015;
    /* barn: muted red, gambrel roof */
    var bx=x+u*34,bw=u*42,bh=u*22;
    g.fillStyle="#5b3a3c";g.fillRect(bx,y-bh,bw,bh);
    g.fillStyle="#2c2a33";g.beginPath();g.moveTo(bx-u*2,y-bh);g.lineTo(bx+u*6,y-bh-u*12);g.lineTo(bx+bw/2,y-bh-u*17);g.lineTo(bx+bw-u*6,y-bh-u*12);g.lineTo(bx+bw+u*2,y-bh);g.closePath();g.fill();
    g.fillStyle="rgba(30,20,24,.8)";g.fillRect(bx+bw*.38,y-bh*.7,bw*.24,bh*.7);
    g.strokeStyle="rgba(232,214,200,.35)";g.lineWidth=Math.max(.6,u*.8);g.strokeRect(bx+bw*.38,y-bh*.7,bw*.24,bh*.7);
    /* farmhouse: white clapboard, dark roof, porch, a chimney, one lit window */
    var hw=u*30,hh=u*16;
    g.fillStyle="#dfe3e4";g.fillRect(x,y-hh,hw,hh);
    var sh=g.createLinearGradient(x,0,x+hw,0);sh.addColorStop(0,"rgba(255,230,190,.25)");sh.addColorStop(1,"rgba(40,60,80,.35)");g.fillStyle=sh;g.fillRect(x,y-hh,hw,hh);
    g.fillStyle="#253342";g.beginPath();g.moveTo(x-u*3,y-hh);g.lineTo(x+hw*.5,y-hh-u*13);g.lineTo(x+hw+u*3,y-hh);g.closePath();g.fill();
    g.fillRect(x+hw*.72,y-hh-u*13,u*3,u*7);
    g.fillStyle="#2c3a48";g.fillRect(x-u*1,y-hh*.42,hw+u*2,u*1.4);
    var wins=[[x+hw*.16,y-hh*.78,1],[x+hw*.64,y-hh*.78,.0],[x+hw*.16,y-hh*.34,.0],[x+hw*.64,y-hh*.34,1]];
    wins.forEach(function(W){var ww=u*5,wh=u*4.5;g.fillStyle=W[2]?"#ffd58e":"#55687a";g.fillRect(W[0],W[1],ww,wh);if(W[2])WIN.push([W[0]+ww/2,W[1]+wh/2,u])});
    /* a pair of trees beside the house */
    [[x-u*12,u*11],[x-u*4,u*8]].forEach(function(T){g.fillStyle="#1f3346";g.beginPath();g.arc(T[0],y-T[1],T[1]*.75,0,6.283);g.fill();g.beginPath();g.arc(T[0]+T[1]*.4,y-T[1]*.7,T[1]*.55,0,6.283);g.fill()});
  }
  function oak(g){
    var L=RID[5],S=G.S,x=G.ox,y=ry(L,x)+S*.01,Ht=G.mob?G.U*.38:S*.34,R=rng(57);
    /* fence along the near crest, leading toward the tree */
    var fx0=G.mob?w*.42:G.side+G.cw*.6,fx1=x-Ht*.25,ps=Math.max(10,Ht*.11);
    g.strokeStyle="rgba(6,12,20,.9)";g.lineWidth=Math.max(1,Ht*.008);g.beginPath();
    for(var px=fx0;px<fx1;px+=ps){var py=ry(L,px)+Ht*.03;g.moveTo(px,py);g.lineTo(px,py-Ht*.075)}g.stroke();
    g.lineWidth=Math.max(.8,Ht*.005);[.06,.035].forEach(function(o){g.beginPath();for(var px2=fx0;px2<fx1;px2+=ps/3){var py2=ry(L,px2)+Ht*.03-Ht*o;px2===fx0?g.moveTo(px2,py2):g.lineTo(px2,py2)}g.stroke()});
    /* trunk and limbs: the limbs end inside the crown */
    var cy=y-Ht*.66,cwid=Ht*.56,chg=Ht*.27;
    g.strokeStyle="#07111c";g.lineCap="round";
    var limbs=[[-.42,-.6,.03],[.4,-.58,.028],[-.16,-.74,.022],[.18,-.78,.022],[-.6,-.58,.016],[.6,-.6,.016]];
    limbs.forEach(function(l){g.lineWidth=Ht*l[2];g.beginPath();g.moveTo(x,y-Ht*.3);g.quadraticCurveTo(x+cwid*l[0]*.5,y-Ht*.46,x+cwid*l[0]*1.05,y+Ht*l[1]);g.stroke()});
    g.fillStyle="#07111c";g.beginPath();g.moveTo(x-Ht*.06,y+2);g.quadraticCurveTo(x-Ht*.03,y-Ht*.2,x-Ht*.035,y-Ht*.36);g.lineTo(x+Ht*.035,y-Ht*.36);g.quadraticCurveTo(x+Ht*.035,y-Ht*.2,x+Ht*.07,y+2);g.closePath();g.fill();
    /* the crown: hundreds of small brush dabs inside an irregular, broad live-oak silhouette */
    var ph=[R()*6.28,R()*6.28,R()*6.28];
    function edge(a){return 1+.12*Math.sin(a*3+ph[0])+.08*Math.sin(a*7+ph[1])+.05*Math.sin(a*13+ph[2])}
    var lit=x>G.sx?-1:1,N=G.mob?520:900;
    for(var k=0;k<N;k++){var a=R()*6.283,rr=Math.sqrt(R())*edge(a),px=x+Math.cos(a)*cwid*rr,py=cy-Math.sin(a)*chg*rr*(Math.sin(a)<0?.55:1);
      var d=Ht*(.012+R()*.02),sh=Math.sin(a)<0?0:Math.sin(a);var v=8+Math.round(R()*10+sh*8);
      g.fillStyle="rgb("+v+","+(v+14)+","+(v+28)+")";g.beginPath();g.ellipse(px,py,d*1.3,d,R()*3,0,6.283);g.fill()}
    /* dawn light catching the upper, sunward leaves */
    for(var k2=0;k2<(G.mob?160:280);k2++){var a2=Math.PI*(.15+R()*.7),rr2=(.7+R()*.3)*edge(a2),px2=x+Math.cos(a2)*cwid*rr2,py2=cy-Math.sin(a2)*chg*rr2;
      if((px2-x)*lit<-cwid*.2)continue;var d2=Ht*(.006+R()*.012);g.fillStyle="rgba("+(150+R()*50|0)+","+(150+R()*30|0)+","+(140+R()*20|0)+","+(.1+R()*.14).toFixed(2)+")";g.beginPath();g.ellipse(px2,py2,d2*1.4,d2,R()*3,0,6.283);g.fill()}
    /* a few sky holes through the canopy */
    g.fillStyle="rgba(80,110,140,.55)";for(var k3=0;k3<9;k3++){var a3=R()*Math.PI,rr3=.3+R()*.4;g.beginPath();g.arc(x+Math.cos(a3)*cwid*rr3,cy-Math.sin(a3)*chg*rr3*.8,Ht*(.006+R()*.006),0,6.283);g.fill()}
  }
  function build(){
    ridges();WIN=[];var Hb=G.Hb,U=G.U;
    var A=mk(Hb+2),g=A[1];oA=A[0];
    /* dawn sky: deep navy overhead, the logo blue, a pale band and warm gold at the horizon */
    var hz=RID[0].base;var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#081727");sky.addColorStop(.28,"#12355a");sky.addColorStop(.52,"#2b5f8c");sky.addColorStop(.72,"#7aa3c1");sky.addColorStop(.88,"#d9d3b8");sky.addColorStop(1,"#f5dea0");
    g.fillStyle=sky;g.fillRect(0,0,w,Hb+2);
    g.save();g.translate(G.sx,hz);g.scale(1,.38);var sg=g.createRadialGradient(0,0,0,0,0,w*.5);sg.addColorStop(0,"rgba(255,228,160,.85)");sg.addColorStop(.25,"rgba(250,206,150,.32)");sg.addColorStop(1,"rgba(220,180,160,0)");g.fillStyle=sg;g.fillRect(-w,-hz*3,w*2,hz*6);g.restore();
    /* long, brushed dawn clouds lit from below */
    var Rc=rng(9);for(var i=0;i<22;i++){var cy=hz*(.18+Rc()*.66),cx=Rc()*w,cwd=w*(.05+Rc()*.15),low=cy>hz*.55,a=.05+Rc()*.1;
      blob(g,cx,cy,cwd,U*(.004+Rc()*.01),low?"rgba(255,214,176,"+a.toFixed(3)+")":"rgba(150,180,210,"+(a*.8).toFixed(3)+")")}
    /* a few faint stars left in the deep blue */
    var Rs=rng(3);for(var s=0;s<(G.mob?18:40);s++){var sx=Rs()*w,sy=Rs()*hz*.4;g.fillStyle="rgba(240,240,230,"+(.15+Rs()*.35).toFixed(2)+")";g.fillRect(sx,sy,1,1)}
    g.save();g.filter="blur("+Math.max(.6,U*.0016).toFixed(1)+"px)";paintRidge(g,RID[0]);g.restore();paintRidge(g,RID[1]);
    var B=mk(Hb+2),gb=B[1];oB=B[0];paintRidge(gb,RID[2]);paintRidge(gb,RID[3]);farm(gb);
    var C=mk(Hb+2),gc=C[1];oC=C[0];paintRidge(gc,RID[4]);paintRidge(gc,RID[5]);oak(gc);
    /* mist: long soft banks, tiled twice the width so they can drift */
    var mh=Hb*.12,M=document.createElement("canvas");M.width=Math.round(w*2*dpr);M.height=Math.round(mh*dpr);var gm=M.getContext("2d");gm.setTransform(dpr,0,0,dpr,0,0);
    var Rm=rng(77);for(var m=0;m<70;m++){var mx=Rm()*w*2,my=mh*(.35+Rm()*.3),mr=w*(.05+Rm()*.12);[mx,mx-w*2,mx+w*2].forEach(function(xx){blob(gm,xx,my,mr,mh*(.12+Rm()*.14),"rgba(226,234,240,"+(.18+Rm()*.2).toFixed(3)+")")})}
    oM=[M,mh];
    /* grain tile */
    var T=document.createElement("canvas");T.width=T.height=160;var gt=T.getContext("2d"),id=gt.createImageData(160,160),Rg=rng(5);
    for(var p=0;p<id.data.length;p+=4){var v=Rg()*255|0;id.data[p]=id.data[p+1]=id.data[p+2]=v;id.data[p+3]=14}gt.putImageData(id,0,0);grain=c.createPattern(T,"repeat");
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  function mist(y,t,sp,a){var M=oM[0],mh=oM[1],off=((t*sp)%(w))*dpr;c.globalAlpha=a;
    c.setTransform(1,0,0,1,0,0);c.drawImage(M,off,0,w*dpr,mh*dpr,0,Math.round((y-mh*.5)*dpr),w*dpr,mh*dpr);c.setTransform(dpr,0,0,dpr,0,0)}
  function star(x,y,t){
    var U=G.U,s=U*(G.mob?.05:.042),tw=.82+.18*Math.sin(t*1.3)+.06*Math.sin(t*3.7);
    c.globalCompositeOperation="lighter";
    blob(c,x,y,s*1.6,s*1.6,"rgba(255,236,170,"+(.22*tw).toFixed(3)+")");
    c.save();c.translate(x,y);c.fillStyle="rgba(255,244,200,"+(.92*tw).toFixed(3)+")";
    var r=s*tw,k=r*.13;c.beginPath();c.moveTo(0,-r);c.quadraticCurveTo(k,-k,r,0);c.quadraticCurveTo(k,k,0,r);c.quadraticCurveTo(-k,k,-r,0);c.quadraticCurveTo(-k,-k,0,-r);c.fill();
    c.fillStyle="rgba(255,255,245,.95)";c.beginPath();c.arc(0,0,Math.max(1.2,s*.08),0,6.283);c.fill();c.restore();
    c.globalCompositeOperation="source-over";
  }
  var lastF=0,BR=null;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var Hb=G.Hb,sw=Math.round(w*dpr),sh=Math.round((Hb+2)*dpr);
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);
    if(G.mob){c.fillStyle="#0a1a2b";c.fillRect(0,0,cv.width,cv.height)}
    c.globalAlpha=e;c.drawImage(oA,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    star(G.stx,G.sty,t);
    /* birds crossing the dawn, slowly */
    if(!BR){var Rb=rng(41);BR=[];for(var b=0;b<5;b++)BR.push([Rb(),Rb()*.5,.5+Rb()*.5])}
    c.strokeStyle="rgba(10,24,38,.6)";c.lineWidth=Math.max(1,G.U*.0016);
    BR.forEach(function(B,i){var bx=((B[0]+t*.006*B[2])%1.2-.1)*w,by=RID[0].base*(.42+B[1]*.4)+Math.sin(t*.8+i)*4,bs=G.U*.008*B[2],fl=Math.sin(t*5+i*2)*bs*.5;
      c.beginPath();c.moveTo(bx-bs,by-fl);c.quadraticCurveTo(bx-bs*.4,by-bs*.3,bx,by);c.quadraticCurveTo(bx+bs*.4,by-bs*.3,bx+bs,by-fl);c.stroke()});
    c.globalAlpha=e;mist(RID[1].base+Hb*.01,t,6,e*.85);
    c.globalAlpha=e;c.setTransform(1,0,0,1,0,0);c.drawImage(oB,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the farmhouse window, warm and steady */
    c.globalCompositeOperation="lighter";WIN.forEach(function(W){blob(c,W[0],W[1],W[2]*14,W[2]*12,"rgba(255,206,130,.35)")});c.globalCompositeOperation="source-over";
    mist(RID[3].base+Hb*.015,t,10,e*.7);
    c.globalAlpha=e;c.setTransform(1,0,0,1,0,0);c.drawImage(oC,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* grain, then a quiet scrim on the text side */
    c.globalAlpha=e;c.fillStyle=grain;c.fillRect(0,0,w,Hb);
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(8,20,34,.66)");lv.addColorStop(.55,"rgba(8,20,34,.32)");lv.addColorStop(1,"rgba(8,20,34,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(10,26,43,0)");bv.addColorStop(1,"rgba(10,26,43,.5)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3)}
    else{var mv=c.createLinearGradient(0,Hb*.8,0,Hb);mv.addColorStop(0,"rgba(10,26,43,0)");mv.addColorStop(1,"rgba(10,26,43,1)");c.fillStyle=mv;c.fillRect(0,Hb*.8,w,Hb*.2+2)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.sx,RID[0].base]:[w/2,h/2]}};
})();
