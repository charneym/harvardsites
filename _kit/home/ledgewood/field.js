/* ================= HERO FIELD: a granite ledge and white pines above a New Hampshire tidal river at first light.
   "Ledgewood" taken literally: the firm works from Exeter, on the Squamscott, where pine-topped granite meets the water.
   The sky runs from the firm's logo navy down to a pale dawn; the river mirrors the ledge and the pines. It moves on its
   own (water, drifting mist, the last stars), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,ST=[],GL=[],MI=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h;
    var hz=mob?U*.74:h*.66;
    var S=mob?U*.6:Math.min(h*.44,cw*.32);           /* ledge height scale */
    var lx=mob?w*.42:side+cw*.6;                    /* where the ledge leaves the water */
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,lx:lx,sun:mob?w*.2:side+cw*.34};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the ledge profile, left to right: a rounded granite nose out of the water, a shoulder, then the long glaciated crown
     running off the right edge; smoothed so it reads as weathered rock, not masonry */
  function ledgePts(){
    var S=G.S,x=G.lx,hz=G.hz,R=rng(11),C=[[x-S*.12,hz+2],[x-S*.02,hz-S*.03],[x+S*.06,hz-S*.2],[x+S*.12,hz-S*.36],[x+S*.22,hz-S*.46],[x+S*.34,hz-S*.5],
      [x+S*.46,hz-S*.58],[x+S*.62,hz-S*.66],[x+S*.82,hz-S*.7]];
    var lx=x+S*.82;for(var k=1;lx<w+S*.3;k++){lx=x+S*.82+k*S*.22;C.push([lx,hz-S*(.7+.035*Math.sin(k*1.9)+R()*.025)])}
    var P=[];for(var i=0;i<C.length-1;i++){var p0=C[Math.max(i-1,0)],p1=C[i],p2=C[i+1],p3=C[Math.min(i+2,C.length-1)];
      for(var t=0;t<1;t+=.125){var t2=t*t,t3=t2*t;P.push([.5*((2*p1[0])+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),
        .5*((2*p1[1])+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)])}}
    P.push(C[C.length-1]);P.push([w+20,hz+2]);return P}
  function path(g,P){g.beginPath();P.forEach(function(p,k){k?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});g.closePath()}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(hz+4),g=A[1];oTop=A[0];
    /* first light: logo navy overhead, slate through the middle sky, pale silver-gold at the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#0b1230");sky.addColorStop(.3,"#18235a");sky.addColorStop(.55,"#3a4682");sky.addColorStop(.75,"#7c86b3");sky.addColorStop(.9,"#c3c2d4");sky.addColorStop(1,"#efe0c6");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+4);
    var sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,Math.max(w*.5,S*1.8));sg.addColorStop(0,"rgba(255,232,196,.62)");sg.addColorStop(.3,"rgba(240,214,196,.2)");sg.addColorStop(1,"rgba(200,190,220,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.5);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,0,w,hz*2);g.restore();
    var Rc=rng(7);for(var i=0;i<11;i++){var cy=hz*(.3+Rc()*.5),cx=Rc()*w,cwid=w*(.1+Rc()*.22),ch=U*(.01+Rc()*.014),a=.04+Rc()*.06;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(236,224,236,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(236,224,236,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    function hill(base,amp,col,seed){var Rr=rng(seed),ph=Rr()*6;g.fillStyle=col;g.beginPath();g.moveTo(-4,hz+2);
      for(var x=-4;x<=w+6;x+=6){g.lineTo(x,base-amp*(.55+.3*Math.sin(x*.0018+ph)+.15*Math.sin(x*.0057+ph*2)))}g.lineTo(w+6,hz+2);g.closePath();g.fill()}
    function trees(base,amp,col,seed,x1){var Rr=rng(seed),y=0,v=0;g.fillStyle=col;g.beginPath();g.moveTo(-4,hz+2);
      for(var x=-4;x<=x1;x+=2){v+=(Rr()-.5)*.6;v*=.92;y+=(v-y)*.14;var spire=Rr()<.04?amp*(.5+Rr()*.8):0;g.lineTo(x,base-Math.max(amp*.25,amp*(1+.4*Math.sin(x*.005+seed))+y*amp*1.5)-spire)}
      g.lineTo(x1,hz+2);g.closePath();g.fill()}
    hill(hz,U*.07,"rgba(96,104,150,.42)",3);
    hill(hz,U*.04,"rgba(64,72,118,.55)",5);
    trees(hz,U*.018,"#2a3360",9,G.lx);
    /* the granite ledge */
    var P=ledgePts(),x=G.lx;
    var lg=g.createLinearGradient(x-S*.1,0,x+S*1.3,0);lg.addColorStop(0,"#525b84");lg.addColorStop(.25,"#363f69");lg.addColorStop(.7,"#222a52");lg.addColorStop(1,"#1a2147");
    g.fillStyle=lg;path(g,P);g.fill();
    g.save();path(g,P);g.clip();
    /* dawn on the rounded west faces, shadow pooling toward the water */
    var dl=g.createRadialGradient(x+S*.05,hz-S*.32,0,x+S*.05,hz-S*.32,S*.55);dl.addColorStop(0,"rgba(226,220,230,.34)");dl.addColorStop(1,"rgba(226,220,230,0)");g.fillStyle=dl;g.fillRect(x-S*.2,hz-S,S*1.2,S);
    var d2=g.createRadialGradient(x+S*.5,hz-S*.6,0,x+S*.5,hz-S*.6,S*.4);d2.addColorStop(0,"rgba(214,210,226,.16)");d2.addColorStop(1,"rgba(214,210,226,0)");g.fillStyle=d2;g.fillRect(x,hz-S,S*1.2,S);
    var vs=g.createLinearGradient(0,hz-S*.7,0,hz);vs.addColorStop(0,"rgba(10,14,34,0)");vs.addColorStop(.6,"rgba(10,14,34,.18)");vs.addColorStop(1,"rgba(10,14,34,.62)");g.fillStyle=vs;g.fillRect(x-S*.2,hz-S,w,S+4);
    /* sheet joints: curved partings that follow the crown, as glaciated granite does */
    var Rf=rng(31);g.lineCap="round";
    for(var sj=0;sj<5;sj++){var dd=S*(.07+sj*.085),from=2+Math.floor(Rf()*6),to=P.length-2-Math.floor(Rf()*20);
      g.strokeStyle="rgba(8,12,30,"+(.5-sj*.06).toFixed(2)+")";g.lineWidth=Math.max(.8,S*.0045);g.beginPath();var on=false;
      for(var q=from;q<to;q++){var pp=P[q],yy=pp[1]+dd+Math.sin(q*.6+sj)*S*.006;if(pp[0]<x-S*.04+dd*.5){continue}
        if(Rf()<.06){on=false;continue}on?g.lineTo(pp[0],yy):g.moveTo(pp[0],yy);on=true}
      g.stroke();
      g.strokeStyle="rgba(220,216,232,"+(.14-sj*.02).toFixed(2)+")";g.lineWidth=Math.max(.6,S*.0025);g.beginPath();on=false;
      for(var q2=from;q2<to;q2++){var p2=P[q2],y2=p2[1]+dd-S*.006+Math.sin(q2*.6+sj)*S*.006;if(p2[0]<x-S*.04+dd*.5)continue;on?g.lineTo(p2[0],y2):g.moveTo(p2[0],y2);on=true}g.stroke()}
    /* a few vertical cracks, each with a lit lip */
    for(var j=0;j<(G.mob?3:5);j++){var fx=x+S*(.3+Rf()*1.2),top=crownY(P,fx)+S*.03,len=S*(.12+Rf()*.22),bend=(Rf()-.5)*S*.04;
      g.strokeStyle="rgba(8,12,30,.38)";g.lineWidth=Math.max(.8,S*.004);g.beginPath();g.moveTo(fx,top);g.quadraticCurveTo(fx+bend,top+len*.5,fx+bend*.4,top+len);g.stroke();
      g.strokeStyle="rgba(220,216,232,.12)";g.lineWidth=Math.max(.6,S*.0025);g.beginPath();g.moveTo(fx-S*.006,top);g.quadraticCurveTo(fx+bend-S*.006,top+len*.5,fx+bend*.4-S*.006,top+len);g.stroke()}
    /* lichen and weathering: soft dark blotches */
    for(var lb=0;lb<(G.mob?10:24);lb++){var bx=x+S*(Rf()*1.6),by=crownY(P,bx)+S*(.06+Rf()*.5),br=S*(.02+Rf()*.05);var bg=g.createRadialGradient(bx,by,0,bx,by,br);bg.addColorStop(0,"rgba(10,14,34,.22)");bg.addColorStop(1,"rgba(10,14,34,0)");g.fillStyle=bg;g.fillRect(bx-br,by-br,br*2,br*2)}
    g.restore();
    /* a rim of light along the crown */
    g.strokeStyle="rgba(236,226,214,.5)";g.lineWidth=Math.max(.7,S*.004);g.beginPath();var rimEnd=P.length*.55|0;for(var r=1;r<rimEnd;r++){r>1?g.lineTo(P[r][0],P[r][1]):g.moveTo(P[r][0],P[r][1])}g.stroke();
    /* blueberry and juniper scrub on the crown */
    var Rs=rng(41);g.fillStyle="#141a38";for(var s=0;s<(G.mob?14:30);s++){var sx=x+S*(.18+Rs()*1.7),sy=crownY(P,sx)+2,sr=S*(.01+Rs()*.018);g.beginPath();g.ellipse(sx,sy,sr*1.8,sr,0,Math.PI,0);g.fill()}
    /* eastern white pines: tall, open, wind-flagged, tiers of needle tufts */
    var pines=G.mob?[[.3,.8,-.02,0],[.56,1.12,.02,1],[.8,.7,-.03,0],[1.05,1.0,.03,1]]:[[.26,.78,-.03,0],[.44,1.14,.01,1],[.6,.66,.03,0],[.86,1.24,-.02,1],[1.08,.86,.02,0],[1.3,1.06,-.02,1],[1.56,.8,.03,0]];
    pines.forEach(function(p,k){var px=x+S*p[0];if(px>w+S*.25)return;pine(g,px,crownY(P,px)+4,S*.6*p[1],p[2],101+k*17,p[3])});
    ST=[];var Rt=rng(3),n=G.mob?24:70;for(var t=0;t<n;t++){var syy=Math.pow(Rt(),1.6)*hz*.4;ST.push([Rt()*w,syy,.3+Rt()*.8,Rt()*6.28,.4+Rt()*1.2,1-syy/(hz*.4)])}
    GL=[];var Rg=rng(19);for(var gq=0;gq<(G.mob?30:70);gq++)GL.push([Rg(),Rg(),Rg()*6.28,.5+Rg()]);
    MI=[];var Rm=rng(23);for(var m=0;m<(G.mob?4:7);m++)MI.push([Rm(),Rm(),.4+Rm()*.6,.3+Rm()*.7]);
  }
  function crownY(P,px){for(var k=1;k<P.length-1;k++){if(P[k][0]<=px&&P[k+1][0]>=px){var u=(px-P[k][0])/(P[k+1][0]-P[k][0]||1);return P[k][1]+(P[k+1][1]-P[k][1])*u}}return G.hz-G.S*.7}
  /* a tuft of needles: many short strokes fanned from a twig, denser at the centre, flat on the underside */
  function tuft(g,x,y,rw,rh,R){
    g.beginPath();var n=Math.max(10,rw*1.4|0);
    for(var i=0;i<n;i++){var u=(R()-.5)*2,ox=x+u*rw,oy=y+(R()-.6)*rh*(1-Math.abs(u)*.5),L=rh*(.5+R()*.6),a=-Math.PI/2+u*.9+(R()-.5)*.6;
      g.moveTo(ox,oy+rh*.3);g.lineTo(ox+Math.cos(a)*L,oy+Math.sin(a)*L)}
    g.stroke();
    g.beginPath();g.ellipse(x,y,rw*.92,rh*.5,0,0,Math.PI*2);g.fill()}
  function pine(g,x,y,H,lean,seed,flag){
    var R=rng(seed),tx=x+H*lean,tw=Math.max(1.2,H*.016),col="#0d1229";
    g.strokeStyle=col;g.fillStyle=col;g.lineCap="round";
    g.lineWidth=tw;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+H*lean*.4,y-H*.5,tx,y-H);g.stroke();
    g.lineWidth=tw*.55;g.beginPath();g.moveTo(tx,y-H);g.lineTo(tx+H*.006,y-H*1.04);g.stroke();
    var tiers=5+Math.floor(R()*3),wind=flag?1:(R()<.5?1:-1);
    for(var i=0;i<tiers;i++){var u=.34+i/tiers*.66;if(R()<.14&&i>0&&i<tiers-1)continue;
      var cy=y-H*u,cx=x+H*lean*u,reach=H*(.3*(1-u)+.08)*(.7+R()*.5);
      [1,-1].forEach(function(sd){var d=sd*wind,len=reach*(sd>0?1:(flag?.25:.6));if(len<H*.04)return;
        /* limb, rising a little toward the tip */
        g.lineWidth=Math.max(.8,tw*.45);g.beginPath();g.moveTo(cx,cy);g.quadraticCurveTo(cx+d*len*.5,cy+H*.006,cx+d*len,cy-len*.12);g.stroke();
        g.lineWidth=Math.max(.5,H*.0028);
        var nt=Math.max(2,Math.round(len/(H*.045)));for(var k=0;k<nt;k++){var v=(k+.6)/nt,tx2=cx+d*len*v,ty2=cy-len*.12*v*v+H*.004;tuft(g,tx2,ty2-H*.012,H*(.03+.018*(1-v))*(.8+R()*.5),H*(.018+.008*(1-v)),R)}})}
    /* the crown: a small flat tuft cap */
    g.lineWidth=Math.max(.5,H*.0028);tuft(g,tx,y-H*1.0,H*.035,H*.02,R);
    /* first light catching the tops of the tufts */
    g.save();g.globalCompositeOperation="source-atop";var lt=g.createLinearGradient(0,y-H*1.05,0,y-H*1.05+H*.04);g.restore();
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,wb=G.mob?U*1.05:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    for(var i=0;i<ST.length;i++){var s=ST[i],a=s[5]*(.45+.55*Math.sin(t*s[4]+s[3]))*.6;if(a<.05)continue;c.fillStyle="rgba(236,238,255,"+a.toFixed(3)+")";c.fillRect(s[0],s[1],s[2],s[2])}
    /* the river */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#5d6592");wg.addColorStop(.12,"#323c6c");wg.addColorStop(.6,"#18204a");wg.addColorStop(1,"#0e1530");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz),sw=Math.round(w*dpr);c.globalAlpha=e*.5;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.12+t*1.2)*(.5+k*4.5)+Math.sin(y*.041-t*.6)*(k*2.6),sy=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(14,21,48,.1)");dkn.addColorStop(.5,"rgba(14,21,48,.46)");dkn.addColorStop(1,"rgba(14,21,48,.86)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* a bright seam of light on the water under the dawn */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],gy=hz+Math.pow(gq[1],1.6)*(wb-hz)*.8+2,spread=S*(.4+gq[1]*1.4),gx=G.sun+(gq[0]-.5)*spread*2,ga=(.5+.5*Math.sin(t*gq[3]*1.6+gq[2]))*(1-gq[1])*.2,gl=4+S*.05*(1-gq[1]);
      c.fillStyle="rgba(255,236,206,"+ga.toFixed(3)+")";c.fillRect(gx+Math.sin(t*.5+gq[2])*6,gy,gl,1)}
    c.globalCompositeOperation="source-over";
    /* morning mist drifting low over the water and the foot of the ledge */
    for(var m=0;m<MI.length;m++){var mi=MI[m],mx=((mi[0]*w*1.4+t*(6+mi[3]*8))%(w*1.4))-w*.2,my=hz-S*.02+mi[1]*S*.08,mw=w*(.18+mi[2]*.2),mh=S*.05;
      c.save();c.translate(mx,my);c.scale(1,mh/mw);var mg=c.createRadialGradient(0,0,0,0,0,mw);mg.addColorStop(0,"rgba(214,218,236,"+(.09*mi[2]).toFixed(3)+")");mg.addColorStop(1,"rgba(214,218,236,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,mw,0,Math.PI*2);c.fill();c.restore()}
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(10,15,36,.5)");lv.addColorStop(1,"rgba(10,15,36,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.lx+G.S*.6,G.hz-G.S*.8]:[w/2,h/2]}};
})();
