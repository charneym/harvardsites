/* ================= HERO FIELD: a North Jutland beech wood in late-afternoon light. Stenseminde's own mark is a wreath of
   beech leaves (serrated, parallel-veined), so the hero is the place those leaves come from: a stand of tall, smooth grey
   beech trunks receding into a warm haze, the canopy a ceiling of green turning to gold and copper, a carpet of last
   year's leaves on the floor, and low sun breaking through from the right. Painted, not drawn: every trunk is shaded
   across its width (cool shadow side, warm rim on the lit side) with the mottled, lichen-flecked bark beech is known for;
   the canopy and the litter are thousands of soft dabs. It moves on its own (light shafts breathing, a few leaves falling,
   motes in the light), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBack=null,LEAF=[],MOTE=[],RAYS=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function mix(a,b,t){t=t<0?0:t>1?1:t;return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
  function rgba(k,a){return "rgba("+Math.round(k[0])+","+Math.round(k[1])+","+Math.round(k[2])+","+a.toFixed(3)+")"}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.max(300,Math.min(h*.44,w*1.05)):h;
    return {mob:mob,side:side,cw:cw,U:U,gy:mob?U*.8:h*.74,lx:mob?w*.78:side+cw*.74,ly:mob?U*.2:h*.24};
  }
  function mk(){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(h*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  var HAZE=[214,196,160],SKY=[246,230,188],SKYC=[168,184,170],INK=[18,19,15];
  var LEAFG=[[62,82,46],[88,106,56],[120,128,62],[160,146,70],[186,150,74],[170,108,52],[138,82,40]];
  function build(){
    var A=mk(),g=A[1];oBack=A[0];var R=rng(29),gy=G.gy,U=G.U,lx=G.lx,ly=G.ly,i,k,x,y;
    var B=G.mob?U:h;
    function layer(bl,fn){var A2=mk(),old=g;g=A2[1];fn();g=old;g.save();g.setTransform(1,0,0,1,0,0);g.filter='blur('+(bl*dpr).toFixed(2)+'px)';g.drawImage(A2[0],0,0);g.restore()}
    /* the light behind the wood: a warm haze, brightest where the low sun breaks through */
    var bg=g.createLinearGradient(0,0,0,gy);bg.addColorStop(0,"#3c4632");bg.addColorStop(.35,"#8f8e66");bg.addColorStop(.7,"#c9b88a");bg.addColorStop(1,"#a8946a");
    g.fillStyle=bg;g.fillRect(0,0,w,B);
    var sg=g.createRadialGradient(lx,ly,0,lx,ly,Math.max(w,B)*.75);sg.addColorStop(0,"rgba(252,240,200,.95)");sg.addColorStop(.18,"rgba(244,222,166,.6)");sg.addColorStop(.5,"rgba(210,186,130,.18)");sg.addColorStop(1,"rgba(120,120,80,0)");
    g.fillStyle=sg;g.fillRect(0,0,w,B);
    /* the far canopy: a soft, hazy ceiling of leaves with sky showing through */
    function dabs(n,y0,y1,size,cols,alpha,hz,seed,bl){var Rd=rng(seed);
      for(var j=0;j<n;j++){var px=Rd()*w,py=y0+Math.pow(Rd(),1.4)*(y1-y0),d=Math.hypot(px-lx,(py-ly)*1.4)/Math.max(w,B),lit=Math.max(0,1-d*2.2);
        var col=cols[Math.floor(Rd()*cols.length)];col=mix(col,HAZE,hz);col=mix(col,SKY,lit*.55);
        g.fillStyle=rgba(col,alpha*(.55+Rd()*.45));var sz=size*(.5+Rd()*.8),ro=Rd()*3.14;g.beginPath();g.ellipse(px,py,sz*1.3,sz*.62,ro,0,6.283);g.fill();
        if(Rd()<.5){g.beginPath();g.ellipse(px+Math.cos(ro)*sz*1.4,py+Math.sin(ro)*sz*1.4,sz*.9,sz*.45,ro+(Rd()-.5),0,6.283);g.fill()}}}
    var top=G.mob?-U*.02:-h*.02;
    layer(2.2,function(){dabs(G.mob?2600:6400,top,gy*.42,U*.008,LEAFG,.3,.6,3)});
    /* ground: last year's beech leaves, copper and russet, receding into haze toward the light */
    var fl=g.createLinearGradient(0,gy-U*.04,0,B);fl.addColorStop(0,"#b39a6c");fl.addColorStop(.25,"#8a6538");fl.addColorStop(.7,"#5a3d22");fl.addColorStop(1,"#2a1d12");
    g.fillStyle=fl;g.fillRect(0,gy-U*.03,w,B-gy+U*.03);
    var lp=g.createRadialGradient(lx-w*.08,gy+U*.04,0,lx-w*.08,gy+U*.04,w*.4);lp.addColorStop(0,"rgba(244,206,140,.55)");lp.addColorStop(1,"rgba(244,206,140,0)");
    g.save();g.translate(lx-w*.08,gy+U*.04);g.scale(1,.18);g.translate(-(lx-w*.08),-(gy+U*.04));g.fillStyle=lp;g.fillRect(0,gy-w*.5,w,w);g.restore();
    var Rl=rng(41);for(k=0;k<(G.mob?1400:3400);k++){var t=Math.pow(Rl(),.8),py2=gy-U*.02+t*(B-gy+U*.02),px2=Rl()*w,ss=U*(.002+t*.009),
      LC=[[176,112,56],[150,90,44],[120,72,36],[196,140,76],[96,60,32]][Math.floor(Rl()*5)],d2=Math.hypot(px2-lx,(py2-gy)*3)/w;
      g.fillStyle=rgba(mix(mix(LC,HAZE,(1-t)*.55),[250,214,150],Math.max(0,.5-d2)*.8),.5+Rl()*.4);g.beginPath();g.ellipse(px2,py2,ss*1.5,ss*.55,(Rl()-.5)*.8,0,6.283);g.fill()}
    /* trunks, far to near; each one shaded across its width with beech's smooth, mottled grey bark */
    function trunk(x0,wd,hz,seed,near){
      var Rt=rng(seed),lean=(Rt()-.5)*wd*.25,base=gy+(near?U*.06:0)+(hz<.5?U*.01*(1-hz):0)*0,yb=base+(near?U*.02*Rt():0),yt=-U*.05;
      var lit=x0<lx?1:-1,cool=mix([96,104,104],HAZE,hz),mid=mix([150,150,140],HAZE,hz),warm=mix([236,214,170],SKY,hz*.5);
      var gr=g.createLinearGradient(x0-wd/2,0,x0+wd/2,0);
      if(lit>0){gr.addColorStop(0,rgba(mix(cool,INK,.35*(1-hz)),1));gr.addColorStop(.45,rgba(mid,1));gr.addColorStop(.86,rgba(mix(mid,warm,.6),1));gr.addColorStop(1,rgba(warm,1))}
      else{gr.addColorStop(0,rgba(warm,1));gr.addColorStop(.14,rgba(mix(mid,warm,.6),1));gr.addColorStop(.55,rgba(mid,1));gr.addColorStop(1,rgba(mix(cool,INK,.35*(1-hz)),1))}
      g.fillStyle=gr;g.beginPath();
      var fl2=wd*(near?.55:.35);
      g.moveTo(x0-wd/2-fl2,yb);g.bezierCurveTo(x0-wd/2-fl2*.2,yb-wd*.2,x0-wd/2,yb-wd*.5,x0-wd/2+lean*.1,yb-wd*1.1);
      g.lineTo(x0-wd*.42+lean,yt);g.lineTo(x0+wd*.42+lean,yt);g.lineTo(x0+wd/2+lean*.1,yb-wd*1.1);
      g.bezierCurveTo(x0+wd/2,yb-wd*.5,x0+wd/2+fl2*.2,yb-wd*.2,x0+wd/2+fl2,yb);g.closePath();g.fill();
      if(wd>9){/* bark: soft mottling, pale lichen flecks and the dark "eyebrow" scars of shed branches */
        g.save();g.clip();var n=Math.round((yb-yt)/wd*(near?14:7));
        for(var m=0;m<n;m++){var my=yt+Rt()*(yb-yt),u=(Rt()-.5),mx=x0+lean*(1-(my-yt)/(yb-yt))+u*wd*.9,ms=wd*(.04+Rt()*.1);
          g.fillStyle=Rt()<.55?rgba(mix([200,200,186],HAZE,hz),.08+Rt()*.12):rgba(mix([62,66,60],HAZE,hz),.06+Rt()*.1);
          g.beginPath();g.ellipse(mx,my,ms*1.4,ms*.7,0,0,6.283);g.fill()}
        if(near||wd>20){var ne=near?7:3;for(m=0;m<ne;m++){var ey=yt+(.15+Rt()*.6)*(yb-yt),ex=x0+(Rt()-.5)*wd*.5,ew=wd*(.12+Rt()*.12);
          g.strokeStyle=rgba(mix([40,42,36],HAZE,hz),.55);g.lineWidth=Math.max(1,wd*.018);g.beginPath();g.moveTo(ex-ew,ey+ew*.2);g.quadraticCurveTo(ex,ey-ew*.35,ex+ew,ey+ew*.2);g.stroke()}}
        /* the light side keeps a warm rim; the shadow side gathers green algae near the foot */
        var al=g.createLinearGradient(0,yb-wd*3,0,yb);al.addColorStop(0,"rgba(70,92,52,0)");al.addColorStop(1,rgba(mix([70,92,52],HAZE,hz),.45));g.fillStyle=al;g.fillRect(x0-wd*1.5,yb-wd*3,wd*3,wd*3);
        g.restore()}
      /* contact shadow on the leaf litter, thrown away from the sun */
      var sh=g.createRadialGradient(x0-lit*wd*.6,yb,0,x0-lit*wd*.6,yb,wd*2.2);sh.addColorStop(0,rgba([40,26,14],.45*(1-hz)));sh.addColorStop(1,"rgba(40,26,14,0)");
      g.save();g.translate(x0,yb);g.scale(1,.22);g.translate(-x0,-yb);g.fillStyle=sh;g.fillRect(x0-wd*3,yb-wd*3,wd*6,wd*6);g.restore();
    }
    var Rf=rng(77),L=[];
    /* far stand */
    for(i=0;i<(G.mob?18:34);i++)L.push([Rf()*w,U*(.008+Rf()*.008),.72+Rf()*.12,0]);
    for(i=0;i<(G.mob?9:16);i++)L.push([Rf()*w,U*(.022+Rf()*.018),.45+Rf()*.15,0]);
    L.sort(function(a,b){return b[2]-a[2]});
    L.forEach(function(t){if(Math.abs(t[0]-lx)<w*.035&&t[2]<.6)t[0]+=w*.07});/* keep the brightest gap clear so the light reads */
    layer(1.3,function(){L.forEach(function(t,j){if(t[2]>=.6)trunk(t[0],t[1],t[2],100+j,false)})});
    layer(.6,function(){L.forEach(function(t,j){if(t[2]<.6)trunk(t[0],t[1],t[2],100+j,false)})});
    /* mid canopy layer, nearer, warmer, over the far trunks */
    layer(1.1,function(){dabs(G.mob?2000:4800,top,gy*.3,U*.0105,LEAFG,.48,.28,9)});
    /* the near trunks: two great beeches framing the light, and one at the far left edge */
    var NR=G.mob?[[w*.18,U*.11,.06],[w*.55,U*.075,.14],[w*.97,U*.13,.02]]:[[G.side+G.cw*.5,U*.06,.16],[G.side+G.cw*.88,U*.1,.04],[w*.03,U*.12,.08],[G.side+G.cw*.62,U*.035,.3]];
    NR.sort(function(a,b){return b[2]-a[2]}).forEach(function(t,j){trunk(t[0],t[1],t[2],500+j,true)});
    /* the near canopy: dense, darker overhead with sun catching its underside near the light */
    layer(.5,function(){dabs(G.mob?1800:4200,top,gy*.17,U*.013,LEAFG,.72,.06,15)});
    /* low ferns and beech seedlings along the floor, front edge */
    var Rg=rng(55);for(k=0;k<(G.mob?160:360);k++){var fx=Rg()*w,fy=B-Rg()*U*.12,fs=U*(.01+Rg()*.02),fc=mix([72,88,40],[200,170,90],Math.max(0,1-Math.hypot(fx-lx,fy-gy)/w*1.8)*.6);
      g.fillStyle=rgba(fc,.35+Rg()*.35);g.beginPath();g.ellipse(fx,fy,fs*1.1,fs*.45,(Rg()-.5)*1.4,0,6.283);g.fill()}
    /* atmosphere: a warm veil over everything far, cool shade low in the foreground */
    var av=g.createRadialGradient(lx,gy*.7,0,lx,gy*.7,w*.55);av.addColorStop(0,"rgba(255,236,190,.28)");av.addColorStop(1,"rgba(255,236,190,0)");g.fillStyle=av;g.fillRect(0,0,w,B);
    var fg=g.createLinearGradient(0,gy,0,B);fg.addColorStop(0,"rgba(18,19,15,0)");fg.addColorStop(1,"rgba(18,19,15,.55)");g.fillStyle=fg;g.fillRect(0,gy,w,B-gy);
    /* rays: fixed wedges from the light, each breathing on its own phase */
    RAYS=[];var Rr=rng(91);for(i=0;i<9;i++){var a=Math.PI*(.56+Rr()*.32),wa=.012+Rr()*.03;RAYS.push([a,wa,Rr()*6.28,.5+Rr()*.5])}
    /* falling leaves and motes */
    LEAF=[];var Rv=rng(13);for(i=0;i<(G.mob?7:14);i++)LEAF.push([Rv(),Rv(),.4+Rv()*.6,Rv()*6.28,LEAFG[3+Math.floor(Rv()*4)]]);
    MOTE=[];for(i=0;i<(G.mob?24:50);i++)MOTE.push([Rv(),Rv(),Rv()*6.28,.3+Rv()*.7]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var U=G.U,lx=G.lx,ly=G.ly,B=G.mob?U:h,i;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oBack,0,0);
    c.setTransform(dpr,0,0,dpr,0,0);
    /* light shafts through the canopy */
    c.globalCompositeOperation="lighter";
    var Lr=Math.hypot(w,B)*1.1;
    for(i=0;i<RAYS.length;i++){var r=RAYS[i],a=r[0],br=(.5+.5*Math.sin(t*.22+r[2]))*r[3]*.075,
      x1=lx+Math.cos(a-r[1])*Lr,y1=ly+Math.sin(a-r[1])*Lr,x2=lx+Math.cos(a+r[1])*Lr,y2=ly+Math.sin(a+r[1])*Lr;
      var rg=c.createLinearGradient(lx,ly,lx+Math.cos(a)*Lr*.8,ly+Math.sin(a)*Lr*.8);rg.addColorStop(0,"rgba(255,236,186,"+br.toFixed(3)+")");rg.addColorStop(1,"rgba(255,236,186,0)");
      c.fillStyle=rg;c.beginPath();c.moveTo(lx,ly);c.lineTo(x1,y1);c.lineTo(x2,y2);c.closePath();c.fill()}
    /* motes drifting in the light */
    for(i=0;i<MOTE.length;i++){var M=MOTE[i],mx=lx+(M[0]-.5)*w*.6+Math.sin(t*.2+M[2])*U*.02,my=ly+M[1]*(G.gy-ly)+Math.cos(t*.15+M[2])*U*.015,
      d=Math.hypot(mx-lx,my-ly)/(w*.4),aa=Math.max(0,.55-d*.5)*M[3]*(.6+.4*Math.sin(t*.9+M[2]));
      if(aa>.01){c.fillStyle="rgba(255,240,200,"+aa.toFixed(3)+")";c.beginPath();c.arc(mx,my,Math.max(.8,U*.0015),0,6.283);c.fill()}}
    c.globalCompositeOperation="source-over";
    /* a few beech leaves falling, turning as they go */
    for(i=0;i<LEAF.length;i++){var F=LEAF[i],sp=F[2],yy=((F[1]+t*.018*sp)%1)*(B*1.1)-B*.05,xx=(F[0]*w+Math.sin(t*.5*sp+F[3])*U*.05+t*4*sp)%(w+40)-20,
      rot=Math.sin(t*.9*sp+F[3])*1.1+F[3],sc=Math.max(5,U*.011)*(.7+sp*.4),flip=Math.cos(t*1.3*sp+F[3]);
      c.save();c.translate(xx,yy);c.rotate(rot);c.scale(1,Math.max(.15,Math.abs(flip)));
      c.fillStyle=rgba(mix(F[4],[250,220,150],flip>0?.25:0),.85);c.beginPath();c.moveTo(-sc,0);c.quadraticCurveTo(-sc*.2,-sc*.62,sc,0);c.quadraticCurveTo(-sc*.2,sc*.62,-sc,0);c.fill();
      c.strokeStyle="rgba(80,50,24,.5)";c.lineWidth=.6;c.beginPath();c.moveTo(-sc*1.15,0);c.lineTo(sc*.85,0);c.stroke();c.restore()}
    /* a quiet scrim behind the headline on desktop */
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(18,19,15,.62)");lv.addColorStop(.6,"rgba(18,19,15,.3)");lv.addColorStop(1,"rgba(18,19,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT,lw0=0;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(function(){var nw=document.documentElement.clientWidth||innerWidth;if(nw===lw0&&Math.abs(innerHeight-h)<120&&w<861)return;lw0=nw;size()},120)});lw0=document.documentElement.clientWidth||innerWidth;size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.lx,G.ly]:[w/2,h/2]}};
})();
