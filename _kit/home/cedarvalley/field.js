/* ================= HERO FIELD: the Cedar Valley at golden hour. The Cedar River winds out of a low sun through
   rolling Iowa farmland toward the viewer; eastern red cedars, the tree the valley is named for, stand on the near
   bluff with the light on their edges. The sky holds the firm's own logo gold over its charcoal. It animates on its
   own (light on the water, drifting haze, a few birds), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,RIV=[],GL=[],BIRDS=[],HZ=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.8):h;
    var hz=mob?U*.56:h*.6;
    var S=mob?w*.5:Math.min(cw*.3,h*.62);
    var cx=mob?w*.42:side+cw*.64;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,cx:cx,bot:mob?U:h,sun:cx+(mob?w*.06:S*.08)};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the river: d runs 0 (horizon, under the sun) to 1 (the near bank); perspective widens it and its bends */
  function riv(d){var hz=G.hz,B=G.bot,S=G.S,y=hz+(B-hz+S*.08)*Math.pow(d,1.55);
    var x=G.sun+S*(.95*d*Math.sin(d*7.4+.5)+.18*d)-S*.06*Math.sin(d*2.2);
    return [x,y,.6+S*(G.mob?.2:.24)*Math.pow(d,1.35)]}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,B=G.bot,A=mk(h),g=A[1];oTop=A[0];
    /* golden-hour sky: the logo's charcoal overhead, warming to its gold at the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#151312");sky.addColorStop(.28,"#231d18");sky.addColorStop(.52,"#4a3920");sky.addColorStop(.72,"#93692a");sky.addColorStop(.88,"#d9a23c");sky.addColorStop(1,"#f6d27a");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    var sy=hz-U*(G.mob?.05:.045),sr=Math.max(5,S*.045);
    var sg=g.createRadialGradient(G.sun,sy,0,G.sun,sy,Math.max(w*.45,S*1.7));sg.addColorStop(0,"rgba(255,232,160,.75)");sg.addColorStop(.12,"rgba(250,206,110,.42)");sg.addColorStop(.4,"rgba(226,160,60,.16)");sg.addColorStop(1,"rgba(200,130,50,0)");
    g.save();g.translate(G.sun,sy);g.scale(1,.6);g.translate(-G.sun,-sy);g.fillStyle=sg;g.fillRect(-w,-h,w*3,h*3);g.restore();
    g.fillStyle="rgba(255,244,214,.96)";g.beginPath();g.arc(G.sun,sy,sr,0,Math.PI*2);g.fill();
    /* long evening clouds, lit from beneath */
    var Rc=rng(11);for(var i=0;i<10;i++){var cy=hz*(.3+Rc()*.55),cx=Rc()*w,cwid=w*(.08+Rc()*.2),ch=U*(.008+Rc()*.012),a=.05+Rc()*.07;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(250,214,140,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(250,214,140,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* rolling hills, three bands, hazier with distance; a fringe of woods on the far crests */
    function hill(base,amp,col,seed,fr,trees){var Rr=rng(seed),ph=Rr()*6,yy=0,v=0;g.fillStyle=col;g.beginPath();g.moveTo(-4,B+4);
      for(var x=-4;x<=w+4;x+=3){var y=base-amp*(.5+.3*Math.sin(x*fr+ph)+.2*Math.sin(x*fr*2.7+ph*2));if(trees){v+=(Rr()-.5)*.6;v*=.9;yy+=(v-yy)*.15;y-=Math.max(0,trees*(.4+yy))}g.lineTo(x,y)}
      g.lineTo(w+4,B+4);g.closePath();g.fill()}
    hill(hz+U*.004,U*.035,"rgba(196,146,72,.55)",3,.0021,U*.006);
    hill(hz+U*.02,U*.03,"rgba(150,104,48,.7)",5,.0029,U*.008);
    /* the valley floor */
    var fl=g.createLinearGradient(0,hz,0,B);fl.addColorStop(0,"#a07336");fl.addColorStop(.14,"#6e5129");fl.addColorStop(.45,"#3e3120");fl.addColorStop(.8,"#262017");fl.addColorStop(1,"#1c1915");
    g.fillStyle=fl;g.beginPath();g.moveTo(-4,B+4);var Rf=rng(9),ph2=Rf()*6;
    for(var x=-4;x<=w+4;x+=3)g.lineTo(x,hz+U*.034-U*.012*(.6+.4*Math.sin(x*.0017+ph2)));g.lineTo(w+4,B+4);g.closePath();g.fill();
    /* farm fields: soft strips that crowd toward the horizon, lit along their tops */
    var Rs=rng(17);for(var k=0;k<14;k++){var d=Math.pow((k+1)/15,1.7),yk=hz+U*.036+(B-hz)*d*.9,hk=(B-hz)*.012*(.4+d*2);
      g.fillStyle="rgba("+(Rs()<.5?"214,168,86":"120,96,52")+","+(.07+.08*(1-d)).toFixed(3)+")";g.fillRect(0,yk,w,hk);
      g.fillStyle="rgba(250,210,130,"+(.09*(1-d)).toFixed(3)+")";g.fillRect(0,yk,w,1)}
    /* the Cedar River, mirroring the sky, with wooded banks */
    RIV=[];for(var j=0;j<=160;j++)RIV.push(riv(j/160));
    function edge(side){var p=[];RIV.forEach(function(r,j){var r2=RIV[Math.min(160,j+1)],r0=RIV[Math.max(0,j-1)],dx=r2[0]-r0[0],dy=r2[1]-r0[1],l=Math.sqrt(dx*dx+dy*dy)||1;p.push([r[0]-dy/l*r[2]*side,r[1]+dx/l*r[2]*side*.35])});return p}
    var L=edge(1),Rt=edge(-1);
    var wg=g.createLinearGradient(0,hz,0,B);wg.addColorStop(0,"#fbe2a0");wg.addColorStop(.1,"#e4b158");wg.addColorStop(.35,"#a87632");wg.addColorStop(.7,"#5a4426");wg.addColorStop(1,"#2e2619");
    g.fillStyle=wg;g.beginPath();L.forEach(function(p,j){j?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});for(var q=Rt.length-1;q>=0;q--)g.lineTo(Rt[q][0],Rt[q][1]);g.closePath();g.fill();
    /* sun path on the water */
    g.save();g.beginPath();L.forEach(function(p,j){j?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});for(q=Rt.length-1;q>=0;q--)g.lineTo(Rt[q][0],Rt[q][1]);g.closePath();g.clip();
    var sp=g.createLinearGradient(G.sun-S*.3,0,G.sun+S*.3,0);sp.addColorStop(0,"rgba(255,236,170,0)");sp.addColorStop(.5,"rgba(255,236,170,.45)");sp.addColorStop(1,"rgba(255,236,170,0)");g.fillStyle=sp;g.fillRect(G.sun-S*.3,hz,S*.6,(B-hz)*.55);
    var Rp2=rng(53);for(var yq=hz+2;yq<B;yq+=1.5+Math.pow((yq-hz)/(B-hz),1.4)*9){var dq=(yq-hz)/(B-hz);g.fillStyle="rgba(255,226,150,"+(.05+.12*(1-dq)*Rp2()).toFixed(3)+")";g.fillRect(0,yq,w,1);g.fillStyle="rgba(26,22,16,"+(.08+.22*dq*Rp2()).toFixed(3)+")";g.fillRect(0,yq+1+dq*3,w,1+dq*2)}
    var nr=g.createLinearGradient(0,hz+(B-hz)*.35,0,B);nr.addColorStop(0,"rgba(28,24,18,0)");nr.addColorStop(1,"rgba(28,24,18,.5)");g.fillStyle=nr;g.fillRect(0,hz,w,B-hz);g.restore();
    /* bank woods: low dark crowns along both banks, smaller with distance */
    function woods(P,seed,from,to,sd){var Rw=rng(seed),v=0,yy=0;g.fillStyle="rgba(34,28,19,.82)";g.beginPath();var j0=Math.round(from*160),j1=Math.round(to*160);
      for(var j=j0;j<=j1;j++){var p=P[j],d=j/160,s=1+S*.035*Math.pow(d,1.2);v+=(Rw()-.5)*.7;v*=.88;yy+=(v-yy)*.2;var y=p[1]-s*(.7+yy*.9);j>j0?g.lineTo(p[0],y):g.moveTo(p[0],y)}
      for(j=j1;j>=j0;j--){p=P[j];d=j/160;s=1+S*.035*Math.pow(d,1.2);g.lineTo(p[0]+sd*s*.8,p[1]+s*.25)}g.closePath();g.fill()}
    woods(L,21,.03,.42,1);woods(Rt,23,.03,.42,-1);
    /* the near bluff (right), with eastern red cedars */
    var bx=G.mob?G.cx+S*.55:G.cx+S*.62,bt=G.mob?B-U*.2:hz+(B-hz)*.42;
    g.fillStyle="#191612";g.beginPath();g.moveTo(bx-S*.5,B+4);var Rb=rng(31),yy=0,vv=0;
    for(var x2=bx-S*.5;x2<=w+4;x2+=3){var tt=sm((x2-(bx-S*.5))/(S*.9));vv+=(Rb()-.5)*.5;vv*=.9;yy+=(vv-yy)*.15;g.lineTo(x2,B-(B-bt)*tt-yy*U*.01)}
    g.lineTo(w+4,B+4);g.closePath();g.fill();
    g.strokeStyle="rgba(240,190,90,.28)";g.lineWidth=1;g.beginPath();Rb=rng(31);yy=0;vv=0;
    for(x2=bx-S*.5;x2<=w+4;x2+=3){tt=sm((x2-(bx-S*.5))/(S*.9));vv+=(Rb()-.5)*.5;vv*=.9;yy+=(vv-yy)*.15;var y2=B-(B-bt)*tt-yy*U*.01;x2>bx-S*.5?g.lineTo(x2,y2):g.moveTo(x2,y2)}g.stroke();
    /* the near-left bank, low and dark, so the copy sits on shadow */
    if(!G.mob){g.fillStyle="#171411";g.beginPath();g.moveTo(-4,B+4);var Rl=rng(37),y3=0,v3=0;for(var x3=-4;x3<=G.side+G.cw*.42;x3+=3){v3+=(Rl()-.5)*.5;v3*=.9;y3+=(v3-y3)*.15;var t3=x3/(G.side+G.cw*.42);g.lineTo(x3,B-(B-hz)*.2*(1-t3*t3)-y3*U*.008)}g.lineTo(G.side+G.cw*.46,B+4);g.closePath();g.fill()}
    function cedar(x,base,H,seed,rim,haze){var Rr=rng(seed),wd=H*.21,n=Math.max(16,Math.round(H/6)),Lp=[],Rp=[];
      for(var i=0;i<=n;i++){var u=i/n,prof=u<.2?.8+u:Math.pow((1-u)/.8,.8);var half=wd*prof,cl=(i%2?1:-.3);
        Lp.push([x-half*(1+cl*(.1+Rr()*.16)),base-H*u+(Rr()-.5)*H*.012]);Rp.push([x+half*(1+(-cl)*(.1+Rr()*.16)),base-H*u+(Rr()-.5)*H*.012])}
      var cg=g.createLinearGradient(x-wd,0,x+wd,0),lit="rgb("+[58+haze*60,46+haze*44,28+haze*26].map(Math.round).join(",")+")",dk="rgb("+[16+haze*60,13+haze*46,10+haze*30].map(Math.round).join(",")+")";
      if(rim<0){cg.addColorStop(0,lit);cg.addColorStop(.4,dk);cg.addColorStop(1,dk)}else{cg.addColorStop(0,dk);cg.addColorStop(.6,dk);cg.addColorStop(1,lit)}
      g.fillStyle=cg;g.beginPath();g.moveTo(x-wd*.1,base+2);
      for(var a=0;a<Lp.length-1;a++){var m=[(Lp[a][0]+Lp[a+1][0])/2,(Lp[a][1]+Lp[a+1][1])/2];g.quadraticCurveTo(Lp[a][0],Lp[a][1],m[0],m[1])}
      g.lineTo(x+(Rr()-.5)*wd*.1,base-H*1.03);
      for(a=Rp.length-1;a>0;a--){m=[(Rp[a][0]+Rp[a-1][0])/2,(Rp[a][1]+Rp[a-1][1])/2];g.quadraticCurveTo(Rp[a][0],Rp[a][1],m[0],m[1])}
      g.lineTo(x+wd*.1,base+2);g.closePath();g.fill();
      /* foliage tufts catching the low sun on the near edge */
      g.save();g.clip();var sx=rim<0?-1:1;for(var t=0;t<n*1.6;t++){var u2=.08+Rr()*.84,half2=wd*(u2<.2?.8+u2:Math.pow((1-u2)/.8,.8)),tx=x+sx*half2*(.25+Rr()*.75),ty=base-H*u2,tr=wd*(.12+Rr()*.14);
        g.fillStyle="rgba("+(rim<0?"210,160,80":"200,150,74")+","+(.05+Rr()*.09).toFixed(3)+")";g.beginPath();g.ellipse(tx,ty,tr*1.3,tr*.6,sx*-.5,0,Math.PI*2);g.fill()}g.restore()}
    function onBluff(x){var tt=sm((x-(bx-S*.5))/(S*.9));return B-(B-bt)*tt+2}
    var CED=G.mob?[[.1,.62],[.32,.86],[.5,.7],[.74,1]]:[[.06,.5],[.2,.76],[.33,.62],[.48,1],[.62,.84],[.78,.95],[.92,.7]];
    var Ht=G.mob?U*.36:h*.36;
    CED.map(function(cd,i){return [cd,i]}).sort(function(a,b){return a[0][1]-b[0][1]}).forEach(function(e){var cd=e[0],i=e[1],x4=bx-S*.25+(w-(bx-S*.25))*cd[0];cedar(x4,onBluff(x4),Ht*cd[1],41+i*7,-1,Math.max(0,(1-cd[1])*.35))});
    /* a few small cedars on the far-left bank, catching the light */
    if(!G.mob){var LC=[[.5,.12],[.56,.16],[.6,.1]];LC.forEach(function(cd,i){var p=L[Math.round(cd[0]*120)]||L[60];cedar(p[0]-S*.12-i*S*.05,p[1]+2,h*cd[1]*.5,61+i,1,.35)})}
    GL=[];var Rg=rng(19);for(var q2=0;q2<(G.mob?40:90);q2++)GL.push([Rg(),Rg(),Rg()*6.28,.5+Rg()]);
    BIRDS=[];var Rk=rng(43);for(var b=0;b<(G.mob?3:5);b++)BIRDS.push([Rk(),hz*(.35+Rk()*.35),.4+Rk()*.6,Rk()*6.28]);
    HZ=[];var Rh=rng(47);for(var m=0;m<5;m++)HZ.push([Rh(),hz+U*(.02+Rh()*.08),w*(.2+Rh()*.25),.004+Rh()*.006]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,B=G.bot;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* drifting low haze over the valley */
    for(var m=0;m<HZ.length;m++){var hzq=HZ[m],x=((hzq[0]+t*hzq[3]*.3)%1.4-.2)*w,yy=hzq[1],rw=hzq[2];
      c.save();c.translate(x,yy);c.scale(1,U*.012/rw);var hg=c.createRadialGradient(0,0,0,0,0,rw);hg.addColorStop(0,"rgba(250,214,150,.09)");hg.addColorStop(1,"rgba(250,214,150,0)");c.fillStyle=hg;c.beginPath();c.arc(0,0,rw,0,Math.PI*2);c.fill();c.restore()}
    /* light dancing on the river */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],d=Math.pow(gq[1],1.3)*.85,r=RIV[Math.round(d*160)],off=(gq[0]-.5)*1.5*r[2],ga=(.5+.5*Math.sin(t*gq[3]*1.8+gq[2]))*(1-d*.8)*.32,gl=2+S*.05*d;
      c.fillStyle="rgba(255,236,180,"+ga.toFixed(3)+")";c.fillRect(r[0]+off+Math.sin(t*.6+gq[2])*3,r[1],gl,1)}
    c.globalCompositeOperation="source-over";
    /* a few birds crossing the evening sky */
    c.strokeStyle="rgba(30,24,18,.7)";c.lineWidth=1.1;c.lineCap="round";
    for(var b=0;b<BIRDS.length;b++){var bd=BIRDS[b],bx=((bd[0]+t*.008*bd[2])%1.2-.1)*w,by=bd[1]+Math.sin(t*.4+bd[3])*U*.01,s=S*.014*(.7+bd[2]*.5),f=Math.sin(t*5*bd[2]+bd[3])*.5;
      c.beginPath();c.moveTo(bx-s,by-s*(.3+f));c.quadraticCurveTo(bx-s*.4,by-s*.5,bx,by);c.quadraticCurveTo(bx+s*.4,by-s*.5,bx+s,by-s*(.3+f));c.stroke()}
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(20,18,17,.6)");lv.addColorStop(1,"rgba(20,18,17,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    else{var mf=c.createLinearGradient(0,B-U*.18,0,B);mf.addColorStop(0,"rgba(28,26,25,0)");mf.addColorStop(1,"rgba(28,26,25,1)");c.fillStyle=mf;c.fillRect(0,B-U*.18,w,U*.18+1);c.fillStyle="#1c1a19";c.fillRect(0,B,w,h-B+1)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.sun,G.hz]:[w/2,h/2]}};
})();
