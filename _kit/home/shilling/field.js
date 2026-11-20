/* ================= HERO FIELD: sunrise over Cannock Chase. Shilling's office is on the edge of the Chase, the heath and
   pine plantations above Cannock. The scene is that landscape at first light: low sun on the horizon, rolling ridges of
   conifer plantation fading into haze, a sandy track running across purple-brown heather towards the sun, and a stand of
   silver birch in autumn gold with a Scots pine beside it. Painted in soft layers (haze, grain, glow), not flat shapes.
   It animates on its own (clouds, mist, the sun, birds, light in the leaves), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oCloud=null,oLand=null,oGrain=null,GL=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.95):h;
    var hz=mob?U*.62:h*.6;
    var S=mob?U*.9:Math.min(h*.62,cw*.46);
    var sx=mob?w*.62:side+cw*.7;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,sx:sx,sy:hz-S*.015,wb:mob?U*1.04:h};
  }
  function mk(H,W){var o=document.createElement("canvas");W=W||w;o.width=Math.round(W*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function blob(g,x,y,rx,ry,col){if(rx<=0)return;g.save();g.translate(x,y);g.scale(1,ry/rx);var gr=g.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,col);gr.addColorStop(1,col.replace(/[\d.]+\)$/,"0)"));g.fillStyle=gr;g.beginPath();g.arc(0,0,rx,0,Math.PI*2);g.fill();g.restore()}
  /* a rolling ridge line: smooth noise from a few sines */
  function ridgeY(x,base,amp,k,ph){return base-amp*(.55*Math.sin(x*k+ph)+.3*Math.sin(x*k*2.3+ph*1.7)+.15*Math.sin(x*k*5.1+ph*.6))}
  function ridge(g,base,amp,k,ph,col,trees,tcol,th,R){
    var step=3,pts=[];for(var x=-10;x<=w+10;x+=step)pts.push([x,ridgeY(x,base,amp,k,ph)]);
    g.fillStyle=col;g.beginPath();g.moveTo(-10,G.wb+2);pts.forEach(function(p){g.lineTo(p[0],p[1])});g.lineTo(w+10,G.wb+2);g.closePath();g.fill();
    if(!trees)return;
    /* conifer plantation along the crest: small spires, denser in blocks, painted with a soft alpha */
    g.fillStyle=tcol;
    for(var x2=-6;x2<w+6;x2+=th*(.32+R()*.3)){
      var blk=Math.sin(x2*.006+ph*3)+Math.sin(x2*.017+ph);if(blk<-.6)continue;
      var y=ridgeY(x2,base,amp,k,ph)+th*.15,hh=th*(.7+R()*.6)*(blk>.8?1.15:1),ww=hh*(.22+R()*.08);
      g.globalAlpha=.75+R()*.25;g.beginPath();g.moveTo(x2,y-hh);
      for(var j=1;j<=4;j++){var yy=y-hh+hh*j/4,wj=ww*j/4;g.lineTo(x2+wj,yy);g.lineTo(x2+wj*.45,yy)}
      g.lineTo(x2-ww*.45,y);for(var j2=4;j2>=1;j2--){var yy2=y-hh+hh*j2/4,wj2=ww*j2/4;g.lineTo(x2-wj2*.45,yy2);g.lineTo(x2-wj2,yy2)}
      g.closePath();g.fill()}
    g.globalAlpha=1;
  }
  function birch(g,x,base,H,lean,R,lit){
    /* trunk: a slim tapering white column, lit on the sun side, with dark lenticel marks and a darker foot */
    var top=base-H,wB=H*.024,wT=H*.006,cx=function(y){var k=(base-y)/H;return x+lean*H*k*k};
    g.beginPath();for(var i=0;i<=20;i++){var y=base-H*i/20,k=i/20;g.lineTo(cx(y)-(wB+(wT-wB)*k),y)}for(var i2=20;i2>=0;i2--){var y2=base-H*i2/20,k2=i2/20;g.lineTo(cx(y2)+(wB+(wT-wB)*k2),y2)}g.closePath();
    var tg=g.createLinearGradient(x-wB,0,x+wB,0);tg.addColorStop(0,lit?"#b9b0ab":"#8d8487");tg.addColorStop(.5,lit?"#efe7dc":"#cfc6bf");tg.addColorStop(1,lit?"#f6d9b4":"#a69c99");g.fillStyle=tg;g.fill();
    var fg=g.createLinearGradient(0,base-H*.2,0,base);fg.addColorStop(0,"rgba(40,32,36,0)");fg.addColorStop(1,"rgba(40,32,36,.85)");g.fillStyle=fg;g.fill();
    g.fillStyle="rgba(38,32,36,.78)";
    for(var m=0;m<H/7;m++){var my=base-H*(.12+R()*.8),k3=(base-my)/H,ww=wB+(wT-wB)*k3,mx=cx(my);g.fillRect(mx-ww+(R()<.5?0:ww*.6*R()),my,ww*(.5+R()*.9),Math.max(1,H*.004*(.6+R())))}
    /* branches: fine dark lines that rise then droop, birch fashion */
    g.strokeStyle="rgba(46,38,42,.75)";g.lineCap="round";
    var tips=[];
    for(var b=0;b<16;b++){var by=base-H*(.38+R()*.58),bx=cx(by),dir=R()<.5?-1:1,L=H*(.12+R()*.2)*(1-(base-by)/H*.4);
      g.lineWidth=Math.max(.6,H*.0035*(1-(base-by)/H*.6));g.beginPath();g.moveTo(bx,by);
      var ex=bx+dir*L,ey=by-L*(.15+R()*.25)+L*.35;g.quadraticCurveTo(bx+dir*L*.45,by-L*.45,ex,ey);g.stroke();tips.push([bx+dir*L*.5,by-L*.2],[ex,ey])}
    tips.push([cx(top),top+H*.04]);
    /* foliage: autumn gold, many small leaves in loose drooping clusters, backlit on the sun side */
    var cols=["rgba(214,166,84,","rgba(186,132,64,","rgba(150,112,58,","rgba(232,196,120,","rgba(120,96,58,"];
    tips.forEach(function(p){var n=Math.round(H*.3);for(var q=0;q<n;q++){var a=R()*Math.PI*2,r=Math.pow(R(),.7)*H*.07,lx=p[0]+Math.cos(a)*r*1.2,ly=p[1]+Math.sin(a)*r+r*.35;
      var col=cols[(R()*cols.length)|0],s=Math.max(.8,H*.0036*(.6+R()*.8));g.fillStyle=col+(.45+R()*.45).toFixed(2)+")";g.beginPath();g.ellipse(lx,ly,s,s*.7,R()*3,0,Math.PI*2);g.fill();
      if(lit&&R()<.025)GL.push([lx,ly,R()*6,s])}});
  }
  function pine(g,x,base,H,R){
    /* Scots pine: tall bare trunk, warm orange-brown up top, flat-topped dark canopy pads */
    var top=base-H;g.lineCap="round";
    var tg=g.createLinearGradient(0,top,0,base);tg.addColorStop(0,"#b0644a");tg.addColorStop(.5,"#6e463e");tg.addColorStop(1,"#2b2427");
    g.strokeStyle=tg;g.lineWidth=H*.018;g.beginPath();g.moveTo(x,base);g.bezierCurveTo(x+H*.02,base-H*.4,x-H*.03,base-H*.7,x+H*.01,top+H*.1);g.stroke();
    g.strokeStyle="rgba(70,48,44,.9)";g.lineWidth=H*.006;
    var pads=[[-.13,.12,.15],[.1,.17,.13],[-.04,.04,.17],[.16,.27,.1],[-.15,.3,.1],[.05,.36,.08]];
    pads.forEach(function(pd){var px=x+pd[0]*H,py=top+pd[1]*H;g.beginPath();g.moveTo(x,py+H*.04);g.quadraticCurveTo((x+px)/2,py,px,py);g.stroke()});
    pads.forEach(function(pd){var px=x+pd[0]*H,py=top+pd[1]*H,rw=pd[2]*H;
      /* each pad: a flat-topped dome of needle tufts, dark below, the top edge warmed by the low sun */
      for(var q=0;q<Math.round(rw*2.2);q++){var u=R()*2-1,ox=u*rw*.8,dome=Math.sqrt(Math.max(0,1-u*u)),oy=-dome*rw*.22+R()*rw*.16,tl=rw*(.05+R()*.05);
        g.strokeStyle="rgba("+(R()<.5?"28,32,28":"40,44,36")+","+(.6+R()*.4).toFixed(2)+")";g.lineWidth=Math.max(.7,rw*.016);
        for(var nn=0;nn<5;nn++){var an=-Math.PI/2+(R()-.5)*2.2;g.beginPath();g.moveTo(px+ox,py+oy);g.lineTo(px+ox+Math.cos(an)*tl,py+oy+Math.sin(an)*tl*.7);g.stroke()}}
      for(var q2=0;q2<Math.round(rw*.6);q2++){var u2=R()*2-1,dm=Math.sqrt(Math.max(0,1-u2*u2));g.fillStyle="rgba(214,150,96,"+(.18+R()*.25).toFixed(2)+")";g.fillRect(px+u2*rw*.75,py-dm*rw*.26-rw*.02,Math.max(1,rw*.03),Math.max(1,rw*.012))}});
  }
  function build(){
    var hz=G.hz,S=G.S,wb=G.wb,R=rng(31),A,g;GL=[];
    /* sky: charcoal overhead (the logo's grey), warming through mauve and rose to the logo red softened at the horizon */
    A=mk(hz+S*.1);oSky=A[0];g=A[1];
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#17161a");sky.addColorStop(.28,"#2b2630");sky.addColorStop(.5,"#57434f");sky.addColorStop(.68,"#93626a");sky.addColorStop(.82,"#cf8a7a");sky.addColorStop(.93,"#eeb38b");sky.addColorStop(1,"#f6d1a0");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+S*.1);
    g.save();g.translate(G.sx,hz);g.scale(1,.5);var sg=g.createRadialGradient(0,0,0,0,0,w*.7);sg.addColorStop(0,"rgba(255,222,170,.75)");sg.addColorStop(.18,"rgba(246,170,130,.35)");sg.addColorStop(.5,"rgba(200,110,110,.12)");sg.addColorStop(1,"rgba(200,110,110,0)");g.fillStyle=sg;g.fillRect(-w*1.5,-w*1.5,w*3,w*3);g.restore();
    /* clouds: long horizontal streaks, plum above, lit rose and gold underneath; drawn 1.5 screens wide so they can drift */
    A=mk(hz,w*1.5);oCloud=A[0];g=A[1];var cw2=w*1.5;
    for(var i=0;i<(G.mob?40:90);i++){var cy=hz*(.12+Math.pow(R(),.8)*.68),cx=R()*cw2,len=S*(.25+R()*.7),th=S*(.012+R()*.03);
      var nearH=cy/hz;
      blob(g,cx,cy,len,th,"rgba(70,52,66,"+(.18+.2*(1-nearH)).toFixed(2)+")");
      blob(g,cx+len*.05,cy+th*.55,len*.85,th*.5,"rgba(244,"+(150+(nearH*60|0))+",120,"+(.12+.3*nearH).toFixed(2)+")")}
    /* the land (transparent above the hills) */
    A=mk(h);oLand=A[0];g=A[1];
    ridge(g,hz-S*.02,S*.035,.004,1.2,"rgba(150,112,122,.55)",true,"rgba(132,98,110,.55)",S*.045,R);
    ridge(g,hz+S*.02,S*.05,.0032,2.6,"#6b5059",true,"#5d4550",S*.06,R);
    ridge(g,hz+S*.075,S*.06,.0026,4.1,"#47363e",true,"#3c2d34",S*.08,R);
    /* the heath: from the last ridge down, darker and warmer as it nears */
    var hb=hz+S*.1;var hg=g.createLinearGradient(0,hb-S*.06,0,wb);hg.addColorStop(0,"#4b3940");hg.addColorStop(.35,"#3a2c31");hg.addColorStop(1,"#1f1b1e");
    g.fillStyle=hg;g.beginPath();g.moveTo(-10,wb+2);for(var x=-10;x<=w+10;x+=4)g.lineTo(x,ridgeY(x,hb,S*.025,.002,5.3));g.lineTo(w+10,wb+2);g.closePath();g.fill();
    /* the sandy track, from the foreground up the slope towards the sun, catching the light */
    var px0=G.mob?w*.42:G.side+G.cw*.5,pw0=G.mob?w*.4:S*.6,px1=G.sx-S*.04,py1=hb+S*.005;
    var path=new Path2D();var N=40,L=[],Rt=[];
    for(var k=0;k<=N;k++){var u=k/N,e=Math.pow(u,.55),y=wb+(py1-wb)*e,xc=px0+(px1-px0)*u+Math.sin(u*Math.PI*1.6)*S*.12*(1-u),wd=pw0*(1-e)*.5+S*.003;L.push([xc-wd,y]);Rt.push([xc+wd,y])}
    path.moveTo(L[0][0],L[0][1]);L.forEach(function(p){path.lineTo(p[0],p[1])});for(var k2=Rt.length-1;k2>=0;k2--)path.lineTo(Rt[k2][0],Rt[k2][1]);path.closePath();
    var pg=g.createLinearGradient(0,py1,0,wb);pg.addColorStop(0,"rgba(246,206,160,.85)");pg.addColorStop(.3,"rgba(196,150,122,.6)");pg.addColorStop(1,"rgba(110,84,74,.55)");g.fillStyle=pg;g.fill(path);
    /* heather and grass: short strokes, bigger and denser towards the viewer, warm tips where the sun reaches */
    var hc=["128,74,102","150,88,110","112,70,64","148,92,66","92,86,60","84,60,76"];
    var n=Math.round(w*(wb-hb)/(G.mob?26:20));g.lineCap="round";
    for(var j=0;j<n;j++){var yy=hb+Math.pow(R(),.75)*(wb-hb),xx=R()*w,d=(yy-hb)/(wb-hb),sz=S*(.004+d*d*.03)*(.6+R()*.8);
      if(g.isPointInPath(path,xx*dpr,yy*dpr)&&R()<.85)continue;
      var col=hc[(R()*hc.length)|0];g.strokeStyle="rgba("+col+","+(.35+R()*.45).toFixed(2)+")";g.lineWidth=Math.max(.7,sz*.28);
      g.beginPath();g.moveTo(xx,yy);g.lineTo(xx+(R()-.5)*sz*.8,yy-sz);g.stroke();
      var near=1-Math.min(1,Math.abs(xx-G.sx)/(w*.5));if(R()<.18*near+.02){g.fillStyle="rgba(250,196,150,"+(.25+near*.4).toFixed(2)+")";g.beginPath();g.arc(xx+(R()-.5)*sz*.3,yy-sz,Math.max(.6,sz*.18),0,7);g.fill()}}
    /* the trees: a stand of birch in autumn gold and a Scots pine, off to the right of the track */
    if(G.mob){pine(g,w*.9,wb*.98,S*.95,R);birch(g,w*.74,wb*.99,S*.8,-.05,R,true);birch(g,w*.82,wb,S*.68,.06,R,false)}
    else{pine(g,G.side+G.cw*.96,h*1.02,S*1.15,R);birch(g,G.side+G.cw*.84,h*.99,S*.98,-.04,R,true);birch(g,G.side+G.cw*.9,h*1.01,S*.82,.07,R,false);birch(g,G.side+G.cw*.78,hb+S*.36,S*.45,.03,R,true)}
    /* bracken in the foreground */
    for(var f=0;f<(G.mob?30:70);f++){var fx=R()*w,fy=wb-R()*S*.12,fs=S*(.03+R()*.05);g.strokeStyle="rgba("+(R()<.5?"120,70,48":"70,48,44")+",.6)";g.lineWidth=Math.max(.8,fs*.05);
      g.beginPath();g.moveTo(fx,fy+fs*.3);g.quadraticCurveTo(fx+fs*.2,fy-fs*.6,fx+fs*(R()<.5?.9:-.6),fy-fs*.3);g.stroke()}
    var Gr=mk(h),gg=Gr[1],Rn=rng(97);oGrain=Gr[0];var ng=Math.round(w*h/(G.mob?60:40));
    for(var z=0;z<ng;z++){gg.fillStyle=Rn()<.5?"rgba(255,240,225,.035)":"rgba(10,8,10,.06)";gg.fillRect(Rn()*w,Rn()*h,1,1)}
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0,BR=[[0,.25,.31],[1.7,.31,.27],[3.1,.22,.35],[5.3,.36,.24]];
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,S=G.S,wb=G.wb;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;c.setTransform(dpr,0,0,dpr,0,0);
    c.drawImage(oSky,0,0,w,hz+S*.1);
    /* the sun: rising a touch as the page scrolls, with a slow breathing halo */
    var sy=G.sy-S*.05*(1-e)-S*.08*SP.v,br=.9+.1*Math.sin(t*.6);
    c.globalCompositeOperation="lighter";
    var hg=c.createRadialGradient(G.sx,sy,0,G.sx,sy,S*.42);hg.addColorStop(0,"rgba(255,226,180,"+(.55*br).toFixed(3)+")");hg.addColorStop(.12,"rgba(255,190,140,"+(.28*br).toFixed(3)+")");hg.addColorStop(1,"rgba(230,120,110,0)");c.fillStyle=hg;c.fillRect(G.sx-S*.42,sy-S*.42,S*.84,S*.84);
    c.globalCompositeOperation="source-over";
    c.fillStyle="rgba(255,236,206,.96)";c.beginPath();c.arc(G.sx,sy,S*.045,0,Math.PI*2);c.fill();
    /* clouds drift slowly left */
    var off=(t*S*.004)%(w*.5);c.globalAlpha=e*.95;c.drawImage(oCloud,-off,0,w*1.5,hz);c.globalAlpha=e;
    c.drawImage(oLand,0,0,w,h);
    /* mist lying in the valleys between the ridges */
    for(var m=0;m<7;m++){var mx=((m*.19+t*.004*(1+m*.2))%1.3-.15)*w,my=hz+S*(.03+(m%3)*.035);blob(c,mx,my,S*(.5+(m%2)*.3),S*.025,"rgba(236,196,186,"+(.16+.06*Math.sin(t*.3+m)).toFixed(3)+")")}
    /* light catching the birch leaves */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gl=GL[q],a=Math.max(0,Math.sin(t*1.4+gl[2]));if(a<.05)continue;c.fillStyle="rgba(255,214,150,"+(a*.35).toFixed(3)+")";c.beginPath();c.arc(gl[0],gl[1],gl[3]*.9,0,7);c.fill()}
    c.globalCompositeOperation="source-over";
    /* a few birds crossing the sky */
    c.strokeStyle="rgba(40,30,36,.7)";c.lineWidth=Math.max(1,S*.0028);c.lineCap="round";
    for(var b=0;b<BR.length;b++){var B=BR[b],u=((t*.012+B[0]*.13)%1.4)-.2,bx=w*(1-u),by=hz*(B[1]+.05*Math.sin(u*6+B[0])),bs=S*.012*(1+B[2]),fl=Math.sin(t*6+B[0]*3)*.6;
      if(bx<-20||bx>w+20)continue;c.beginPath();c.moveTo(bx-bs,by-bs*fl);c.quadraticCurveTo(bx-bs*.4,by-bs*.2,bx,by);c.quadraticCurveTo(bx+bs*.4,by-bs*.2,bx+bs,by-bs*fl);c.stroke()}
    /* grain over everything; then a quiet scrim on the text side and a fade into the page */
    c.globalAlpha=e*.9;c.drawImage(oGrain,0,0,w,h);c.globalAlpha=e;
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(20,19,21,.74)");lv.addColorStop(.55,"rgba(20,19,21,.4)");lv.addColorStop(1,"rgba(20,19,21,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(28,27,29,0)");bv.addColorStop(1,"rgba(28,27,29,.55)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var mv=c.createLinearGradient(0,wb*.8,0,wb);mv.addColorStop(0,"rgba(28,27,29,0)");mv.addColorStop(1,"rgba(28,27,29,1)");c.fillStyle=mv;c.fillRect(0,wb*.8,w,wb*.2+1);c.fillStyle="#1c1b1d";c.fillRect(0,wb,w,h-wb+1)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.sx,G.sy]:[w/2,h/2]}};
})();
