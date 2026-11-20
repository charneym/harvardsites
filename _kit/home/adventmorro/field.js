/* ================= HERO FIELD: a garita of El Morro at golden hour. The domed stone sentry box on the walls of
   Castillo San Felipe del Morro, a short walk from the firm's office in Old San Juan, is the mark in Advent-Morro's own
   logo. Here it stands on the sandstone rampart above the Atlantic, lit from the west by the low sun, with the sea's glints,
   the surf at the foot of the wall, drifting cloud and a few gulls moving on their own (no pointer response, CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oFort=null,CL=[],GL=[],BIRDS=[],FOAM=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.82):h;
    var hz=mob?U*.6:h*.6;
    var S=mob?Math.min(U*.78,w*.5):Math.min(h*.6,cw*.36);
    var gx=mob?w*.64:side+cw*.76;
    var py=mob?U*.8:h*.74;
    var r=S*.17;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,gx:gx,py:py,r:r,sun:mob?w*.3:side+cw*.5,bot:mob?U*1.04:h};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function buildSky(){
    var hz=G.hz,U=G.U,A=mk(hz+2),g=A[1];oSky=A[0];
    var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#0f1219");sky.addColorStop(.28,"#1c2230");sky.addColorStop(.5,"#363a47");sky.addColorStop(.68,"#6b5d4f");sky.addColorStop(.84,"#b48f5e");sky.addColorStop(.95,"#dcb779");sky.addColorStop(1,"#ecd099");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    var R=Math.max(w*.5,G.S*1.8),sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,R);
    sg.addColorStop(0,"rgba(255,232,180,.75)");sg.addColorStop(.12,"rgba(246,204,140,.4)");sg.addColorStop(.45,"rgba(214,160,96,.14)");sg.addColorStop(1,"rgba(200,140,80,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.6);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,-hz*2,w,hz*4);g.restore();
    /* the sun itself, just touching the sea */
    var sr=Math.max(7,G.S*.045),sd=g.createRadialGradient(G.sun,hz-sr*.5,0,G.sun,hz-sr*.5,sr);sd.addColorStop(0,"rgba(255,246,220,1)");sd.addColorStop(.8,"rgba(255,226,166,.95)");sd.addColorStop(1,"rgba(255,214,150,0)");
    g.fillStyle=sd;g.beginPath();g.arc(G.sun,hz-sr*.5,sr,0,Math.PI*2);g.fill();
    /* a distant headland to the west, low in the haze */
    var Rr=rng(5);g.fillStyle="rgba(92,74,62,.55)";g.beginPath();g.moveTo(-4,hz+1);var y=0,v=0,xe=G.mob?w*.16:G.side+G.cw*.2;
    for(var x=-4;x<=xe;x+=3){v+=(Rr()-.5)*.4;v*=.9;y+=(v-y)*.15;var f=1-sm((x-xe*.55)/(xe*.45));g.lineTo(x,hz-U*(.012+y*.01)*f-U*.004*f)}g.lineTo(xe+4,hz+1);g.closePath();g.fill();
    /* thin evening cloud, built once and drifted in the frame */
    CL=[];var Rc=rng(11),n=G.mob?6:11;for(var i=0;i<n;i++){var cy=hz*(.22+Rc()*.62),cwid=w*(.08+Rc()*.18),ch=U*(.006+Rc()*.012);CL.push([Rc()*w*1.3,cy,cwid,ch,.05+Rc()*.08,.4+Rc()*.8])}
  }
  /* the garita: corbelled bell, moulded base, stone cylinder with a narrow lookout, cornice, dome and finial */
  function garita(g){
    var gx=G.gx,py=G.py,S=G.S,r=G.r;
    function cyl(y0,y1,rad,lit){var gr=g.createLinearGradient(gx-rad,0,gx+rad,0);
      gr.addColorStop(0,lit?"#efcf92":"#c9a56c");gr.addColorStop(.22,lit?"#e0b97c":"#b8935d");gr.addColorStop(.55,"#8d6e48");gr.addColorStop(.82,"#4c3d31");gr.addColorStop(1,"#2e2722");
      g.fillStyle=gr;g.beginPath();g.moveTo(gx-rad,y0);g.lineTo(gx-rad,y1);g.ellipse(gx,y1,rad,rad*.16,0,Math.PI,0,true);g.lineTo(gx+rad,y0);g.ellipse(gx,y0,rad,rad*.16,0,0,Math.PI,true);g.closePath();g.fill()}
    function ring(y,rad,hh){cyl(y-hh,y,rad,true);g.strokeStyle="rgba(40,30,24,.35)";g.lineWidth=Math.max(.6,S*.002);g.beginPath();g.ellipse(gx,y,rad,rad*.16,0,0,Math.PI);g.stroke()}
    /* corbel: an inverted bell hanging from the wall, stepped mouldings */
    var cb=S*.3,NP=24,pr=function(u){return r*(.26+.92*Math.pow(1-u,1.5))};
    var bg=g.createLinearGradient(gx-r*1.2,0,gx+r*1.2,0);bg.addColorStop(0,"#e6c486");bg.addColorStop(.25,"#c7a26a");bg.addColorStop(.6,"#7a6045");bg.addColorStop(1,"#2c2622");
    g.fillStyle=bg;g.beginPath();for(var k=0;k<=NP;k++){var u=k/NP;g.lineTo(gx-pr(u),py+cb*u)}for(k=NP;k>=0;k--){u=k/NP;g.lineTo(gx+pr(u),py+cb*u)}g.closePath();g.fill();
    g.lineWidth=Math.max(.7,S*.0025);[.16,.38,.62,.84].forEach(function(u){var y=py+cb*u,rad=pr(u);
      g.strokeStyle="rgba(36,28,22,.45)";g.beginPath();g.ellipse(gx,y,rad,rad*.16,0,0,Math.PI);g.stroke();
      g.strokeStyle="rgba(255,226,176,.32)";g.beginPath();g.ellipse(gx,y+S*.006,rad*.98,rad*.15,0,Math.PI*.55,Math.PI);g.stroke()});
    /* pendant knob */
    var kg=g.createRadialGradient(gx-r*.1,py+cb+r*.1,0,gx,py+cb+r*.14,r*.3);kg.addColorStop(0,"#dcb97e");kg.addColorStop(1,"#3a3029");g.fillStyle=kg;g.beginPath();g.arc(gx,py+cb+r*.14,r*.2,0,Math.PI*2);g.fill();
    ring(py+S*.012,r*1.2,S*.035);
    /* body */
    var b0=py-S*.02,b1=py-S*.42;cyl(b0,b1,r,true);
    /* weathered stone: faint courses on the cylinder */
    g.save();g.beginPath();g.rect(gx-r,b1,2*r,b0-b1);g.clip();g.strokeStyle="rgba(60,45,34,.16)";g.lineWidth=Math.max(.5,S*.0016);
    for(var yy=b0-S*.04;yy>b1;yy-=S*.045){g.beginPath();g.ellipse(gx,yy,r,r*.16,0,0,Math.PI);g.stroke()}g.restore();
    /* the lookout slit, as in their logo: a dark opening with a lit sandstone surround */
    var ww=r*.34,wy0=py-S*.36,wy1=py-S*.1,wx=gx-r*.18;
    g.fillStyle="#d8b679";g.fillRect(wx-ww*.5-r*.07,wy0-r*.07,ww+r*.14,wy1-wy0+r*.14);
    g.fillStyle="#7e6342";g.fillRect(wx+ww*.5,wy0-r*.07,r*.07,wy1-wy0+r*.14);
    g.fillStyle="#14161c";g.fillRect(wx-ww*.5,wy0,ww,wy1-wy0);
    /* a second slit turning out of view on the shadow side */
    g.fillStyle="rgba(20,22,28,.85)";g.fillRect(gx+r*.66,wy0+S*.02,r*.12,(wy1-wy0)*.8);
    ring(b1,r*1.22,S*.05);
    /* dome */
    var dy=b1-S*.05,dh=r*1.12,dg=g.createLinearGradient(gx-r,0,gx+r,0);dg.addColorStop(0,"#f1d396");dg.addColorStop(.3,"#d1aa6e");dg.addColorStop(.65,"#7f6343");dg.addColorStop(1,"#2e2722");
    g.fillStyle=dg;g.beginPath();g.moveTo(gx-r*1.04,dy);g.bezierCurveTo(gx-r*1.04,dy-dh*.62,gx-r*.6,dy-dh,gx,dy-dh);g.bezierCurveTo(gx+r*.6,dy-dh,gx+r*1.04,dy-dh*.62,gx+r*1.04,dy);g.ellipse(gx,dy,r*1.04,r*.16,0,0,Math.PI);g.closePath();g.fill();
    var hl=g.createRadialGradient(gx-r*.45,dy-dh*.62,0,gx-r*.45,dy-dh*.62,r*.7);hl.addColorStop(0,"rgba(255,236,190,.45)");hl.addColorStop(1,"rgba(255,236,190,0)");g.save();g.clip();g.fillStyle=hl;g.fillRect(gx-r*1.2,dy-dh*1.1,r*2.4,dh*1.2);g.restore();
    /* finial */
    var fy=dy-dh;g.fillStyle="#a8865a";g.fillRect(gx-r*.11,fy-S*.03,r*.22,S*.03);
    var fg=g.createRadialGradient(gx-r*.08,fy-S*.055,0,gx,fy-S*.05,r*.24);fg.addColorStop(0,"#f6dca4");fg.addColorStop(1,"#4a3b2e");g.fillStyle=fg;g.beginPath();g.arc(gx,fy-S*.05,r*.2,0,Math.PI*2);g.fill();
    /* west-light rim on the lit edge */
    g.strokeStyle="rgba(255,230,180,.55)";g.lineWidth=Math.max(.8,S*.003);g.beginPath();g.moveTo(gx-r+.5,b0);g.lineTo(gx-r+.5,b1);g.stroke();
  }
  function buildFort(){
    var A=mk(h),g=A[1];oFort=A[0];
    var gx=G.gx,py=G.py,S=G.S,r=G.r,bot=G.bot,ph=S*.07,xl=gx-r*2.1;
    /* the escarp: a battered sandstone wall dropping to the rocks, catching the low sun */
    var top=function(x){return py-(x-xl)*(G.mob?.035:.05)*(S/600)},foot=bot+4,xf=xl-(foot-py)*.42;
    var wg=g.createLinearGradient(xf,0,w,0);wg.addColorStop(0,"#b5925f");wg.addColorStop(.18,"#9a7a4f");wg.addColorStop(.5,"#6e5840");wg.addColorStop(1,"#3a3230");
    g.fillStyle=wg;g.beginPath();g.moveTo(xl,top(xl));g.lineTo(w+4,top(w+4));g.lineTo(w+4,foot);g.lineTo(xf,foot);g.closePath();g.fill();
    /* shade down the wall toward the sea */
    var vd=g.createLinearGradient(0,py,0,foot);vd.addColorStop(0,"rgba(25,28,35,0)");vd.addColorStop(1,"rgba(25,28,35,.55)");g.fillStyle=vd;g.fill();
    /* the battered west face, in full sun */
    var fg2=g.createLinearGradient(xf,0,xl,0);fg2.addColorStop(0,"#e2bd80");fg2.addColorStop(1,"#c9a26a");g.fillStyle=fg2;g.beginPath();g.moveTo(xl,top(xl));g.lineTo(xl+r*.5,top(xl+r*.5));g.lineTo(xf+r*.5,foot);g.lineTo(xf,foot);g.closePath();g.fill();
    /* ashlar courses and joints */
    g.save();g.beginPath();g.moveTo(xl,top(xl));g.lineTo(w+4,top(w+4));g.lineTo(w+4,foot);g.lineTo(xf,foot);g.closePath();g.clip();
    var Rj=rng(29),ch=Math.max(5,S*.028),lw=Math.max(.5,S*.0018);g.lineWidth=lw;
    for(var y=py+ph+ch,row=0;y<foot;y+=ch,row++){var xs=xl-(y-py)*.42;g.strokeStyle="rgba(50,38,28,"+(.18+.1*Rj()).toFixed(2)+")";g.beginPath();g.moveTo(xs,y-(w-xs)*0);g.lineTo(w+4,y-(w+4-xs)*(G.mob?.035:.05)*(S/600));g.stroke();
      var bw=ch*(2.2+Rj());for(var x=xs+((row%2)?bw*.5:0);x<w;x+=bw*(.8+Rj()*.5)){var yy=y-(x-xs)*(G.mob?.035:.05)*(S/600);g.beginPath();g.moveTo(x,yy);g.lineTo(x,yy-ch);g.stroke()}}
    /* weathering: soft darker patches */
    for(var q=0;q<(G.mob?18:40);q++){var px=xf+Rj()*(w-xf),pyy=py+Rj()*(foot-py),pr=S*(.03+Rj()*.08),pg=g.createRadialGradient(px,pyy,0,px,pyy,pr);pg.addColorStop(0,"rgba(40,32,26,"+(.06+Rj()*.08).toFixed(3)+")");pg.addColorStop(1,"rgba(40,32,26,0)");g.fillStyle=pg;g.fillRect(px-pr,pyy-pr,pr*2,pr*2)}
    g.restore();
    /* the garita's long shadow thrown east along the parapet and wall */
    g.save();g.globalAlpha=.2;g.fillStyle="#1d1a1c";g.beginPath();g.moveTo(gx+r*.2,py);g.lineTo(gx+r*1.1,py);g.lineTo(gx+r*4.2,py+S*.2);g.lineTo(gx+r*2.6,py+S*.24);g.closePath();g.fill();g.restore();
    /* parapet: a rounded coping with a lit top */
    var cp=g.createLinearGradient(0,py-ph*.1,0,py+ph);cp.addColorStop(0,"#efcd90");cp.addColorStop(.25,"#c9a46a");cp.addColorStop(1,"#6f5a42");
    g.fillStyle=cp;g.beginPath();g.moveTo(xl-r*.2,top(xl)+ph*.2);g.quadraticCurveTo(xl-r*.2,top(xl)-ph*.2,xl+r*.3,top(xl)-ph*.25);g.lineTo(w+4,top(w+4)-ph*.25);g.lineTo(w+4,top(w+4)+ph);g.lineTo(xl,top(xl)+ph);g.closePath();g.fill();
    g.strokeStyle="rgba(255,232,190,.5)";g.lineWidth=Math.max(.8,S*.003);g.beginPath();g.moveTo(xl+r*.3,top(xl)-ph*.25);g.lineTo(w+4,top(w+4)-ph*.25);g.stroke();
    garita(g);
    FOAM=[];var Rf=rng(43);for(var f=0;f<(G.mob?22:46);f++)FOAM.push([xf-S*.35+Rf()*S*1.1,Rf(),Rf()*6.28,.6+Rf()*.9]);
  }
  function build(){
    buildSky();buildFort();
    GL=[];var Rg=rng(19);for(var q=0;q<(G.mob?34:80);q++)GL.push([Rg(),Rg(),Rg()*6.28,.5+Rg()]);
    BIRDS=[];var Rb=rng(53);for(var b=0;b<(G.mob?3:5);b++)BIRDS.push([Rb(),G.hz*(.2+Rb()*.4),.6+Rb()*.6,Rb()*6.28,.7+Rb()*.6]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,bot=G.bot;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* drifting cloud */
    for(var i=0;i<CL.length;i++){var cl=CL[i],cx=((cl[0]+t*cl[5]*4)%(w*1.3+cl[2]*2))-cl[2];
      c.save();c.translate(cx,cl[1]);c.scale(1,cl[3]/cl[2]);var cg=c.createRadialGradient(0,0,0,0,0,cl[2]);cg.addColorStop(0,"rgba(246,214,170,"+cl[4].toFixed(3)+")");cg.addColorStop(1,"rgba(246,214,170,0)");c.fillStyle=cg;c.beginPath();c.arc(0,0,cl[2],0,Math.PI*2);c.fill();c.restore()}
    /* the Atlantic */
    var sg=c.createLinearGradient(0,hz,0,bot);sg.addColorStop(0,"#a98c62");sg.addColorStop(.06,"#5e5a58");sg.addColorStop(.3,"#2c3442");sg.addColorStop(1,"#171b24");
    c.fillStyle=sg;c.fillRect(0,hz,w,bot-hz+2);
    /* swell lines, closer together toward the horizon */
    c.lineWidth=1;for(var k=0;k<(G.mob?16:30);k++){var u=k/(G.mob?16:30),y=hz+Math.pow(u,1.8)*(bot-hz),ph=t*.35+k*1.7;
      c.strokeStyle="rgba(220,200,160,"+(.05+.05*(1-u)).toFixed(3)+")";c.beginPath();for(var x=0;x<=w;x+=16){var yy=y+Math.sin(x*.012/(.3+u)+ph)*(1+u*3);if(x===0)c.moveTo(x,yy);else c.lineTo(x,yy)}c.stroke()}
    /* the sun's road on the water */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],gy=hz+2+Math.pow(gq[1],1.5)*(bot-hz)*.9,spread=S*(.06+gq[1]*.6),gx=G.sun+(gq[0]-.5)*spread*2+Math.sin(t*.6+gq[2])*5,
      ga=(.5+.5*Math.sin(t*gq[3]*2+gq[2]))*(1-gq[1]*.8)*.32,gl=3+S*.05*(1-gq[1]*.6);
      c.fillStyle="rgba(255,214,150,"+ga.toFixed(3)+")";c.fillRect(gx-gl*.5,gy,gl,1.2)}
    c.globalCompositeOperation="source-over";
    /* fortress, garita and rocks */
    c.setTransform(1,0,0,1,0,0);c.drawImage(oFort,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* surf breaking along the foot of the wall */
    for(var f=0;f<FOAM.length;f++){var fo=FOAM[f],fa=Math.max(0,Math.sin(t*fo[3]*.9+fo[2]))*.4,fx=fo[0]+Math.sin(t*.4+fo[2])*6,fy=bot-S*(.01+fo[1]*.05),fw=S*(.03+fo[1]*.05);
      if(fa<.02)continue;var fgr=c.createRadialGradient(fx,fy,0,fx,fy,fw);fgr.addColorStop(0,"rgba(240,236,226,"+fa.toFixed(3)+")");fgr.addColorStop(1,"rgba(240,236,226,0)");c.fillStyle=fgr;c.save();c.translate(fx,fy);c.scale(1,.35);c.translate(-fx,-fy);c.fillRect(fx-fw,fy-fw,fw*2,fw*2);c.restore()}
    /* gulls riding the evening air */
    c.strokeStyle="rgba(30,30,36,.75)";c.lineWidth=Math.max(1,S*.0035);c.lineCap="round";
    for(var b=0;b<BIRDS.length;b++){var bd=BIRDS[b],bx=((bd[0]*w*1.2+t*bd[2]*14)%(w*1.2))-w*.1,by=bd[1]+Math.sin(t*.3+bd[3])*U*.02,sp=S*.022*bd[4],fl=Math.sin(t*3.2*bd[2]+bd[3])*.5;
      c.beginPath();c.moveTo(bx-sp,by-sp*(.2+fl*.5));c.quadraticCurveTo(bx-sp*.45,by-sp*(.55+fl*.4),bx,by);c.quadraticCurveTo(bx+sp*.45,by-sp*(.55+fl*.4),bx+sp,by-sp*(.2+fl*.5));c.stroke()}
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(15,18,25,.6)");lv.addColorStop(1,"rgba(15,18,25,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    else{var mb=c.createLinearGradient(0,G.U*.86,0,G.U*1.06);mb.addColorStop(0,"rgba(25,28,35,0)");mb.addColorStop(1,"rgba(25,28,35,1)");c.fillStyle=mb;c.fillRect(0,G.U*.86,w,h);}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.gx,G.py-G.S*.35]:[w/2,h/2]}};
})();
