/* ================= HERO FIELD: a crafted render of the object NXT measures (HOME_BRIEF update 2c): one coated silicon
   wafer whose colours are real thin-film interference (render.py: Fresnel reflectance of a ~120-250 nm film on Si, CIE
   colour matching), the deposition non-uniformity showing as the blue-to-gold shift NXT's systems map
   (nxt91.com > OLED > Xelas SCAN: x-y mappings). Baked to hero.webp with real alpha; here it breathes in a slow Ken Burns
   drift, and a measurement spot steps through a standard wafer map, each measured point staying as a faint dot. It moves
   on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#06111d";
  /* wafer top-face ellipse in image units (render.py) */
  var WX=.5,WY=400/820,WRX=530/1200,WRY=275/820;
  /* a 1 + 8 + 16 point wafer map (centre, two rings), visited in order */
  var PTS=[[0,0]];(function(){var i;for(i=0;i<8;i++)PTS.push([.42*Math.cos(i/8*Math.PI*2-Math.PI/2),.42*Math.sin(i/8*Math.PI*2-Math.PI/2)]);for(i=0;i<16;i++)PTS.push([.78*Math.cos(i/16*Math.PI*2-Math.PI/2),.78*Math.sin(i/16*Math.PI*2-Math.PI/2)])})();
  var STEP=1.15,CYC=PTS.length*STEP+3.5;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=1200/820;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?88:Math.max(118,h*.15),bot=mob?Math.max(250,eyT-40):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var ih=mob?Math.min(bot-top,(w-24)/AR):Math.min(bot-top,2*A.half/AR)*1.0,iw=ih*AR;
    var kx=mob?w*.5:A.cx,ky=(top+bot)/2;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,top:top};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~3% and drift up a touch over ~44s (scaled about the image centre) */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008-SP.v*G.ih*.05;
      /* a low blue glow across the WHOLE canvas (never inside the image rect alone), so no edge can read as a box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.45:h*.5,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(10,48,78,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(8,32,54,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,17,29,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the measurement: a spot steps through the wafer map; measured points stay as faint dots */
      var be=e*sm((t-.8)/1.4);
      if(be>.01){
        var cx=x+dw*WX,cy=y+dh*WY,rx=dw*WRX,ry=dh*WRY,ct=RM?PTS.length*STEP:(t%CYC),idx=Math.min(PTS.length-1,Math.floor(ct/STEP)),ph=(ct-idx*STEP)/STEP,fade=1-sm((ct-PTS.length*STEP-1.5)/2);
        c.save();c.globalCompositeOperation="lighter";
        var dr=Math.max(1.4,dw*.0032);
        for(var i=0;i<=idx;i++){
          var px=cx+PTS[i][0]*rx,py=cy+PTS[i][1]*ry,a=(i<idx||ct>=PTS.length*STEP?1:sm(ph*3))*.75*be*fade;
          if(a<.01)continue;
          c.fillStyle="rgba(235,248,255,"+a.toFixed(3)+")";c.beginPath();c.ellipse(px,py,dr,dr*.55,0,0,Math.PI*2);c.fill();
        }
        if(ct<PTS.length*STEP){
          /* the probe light: a soft vertical column from above onto the current point, with a small bright footprint */
          var q=PTS[idx],sx=cx+q[0]*rx,sy=cy+q[1]*ry,pulse=sm(ph*4)*(1-sm((ph-.7)/.3)),bt=Math.max(G.top-20,y-dh*.18);
          var cg=c.createLinearGradient(0,bt,0,sy);cg.addColorStop(0,"rgba(180,230,255,0)");cg.addColorStop(1,"rgba(180,230,255,"+(.26*pulse*be).toFixed(3)+")");
          c.fillStyle=cg;var bw=Math.max(3,dw*.008);c.beginPath();c.moveTo(sx-bw*.35,bt);c.lineTo(sx+bw*.35,bt);c.lineTo(sx+bw,sy);c.lineTo(sx-bw,sy);c.closePath();c.fill();
          var fr=dw*.035,fg=c.createRadialGradient(sx,sy,0,sx,sy,fr);fg.addColorStop(0,"rgba(255,255,255,"+(.7*pulse*be).toFixed(3)+")");fg.addColorStop(1,"rgba(255,255,255,0)");
          c.fillStyle=fg;c.beginPath();c.ellipse(sx,sy,fr,fr*.55,0,0,Math.PI*2);c.fill();
        }
        c.restore();
      }
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(4,12,21,.95)");lv.addColorStop(.6,"rgba(4,12,21,.55)");lv.addColorStop(1,"rgba(4,12,21,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(4,12,21,.6)");tv.addColorStop(1,"rgba(4,12,21,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(6,17,29,0)");bv.addColorStop(1,"rgba(6,17,29,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(4,12,21,.6)");tv2.addColorStop(1,"rgba(4,12,21,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-46,0,G.bh);mv.addColorStop(0,"rgba(6,17,29,0)");mv.addColorStop(1,"rgba(6,17,29,1)");c.fillStyle=mv;c.fillRect(0,G.bh-46,w,47);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  try{document.fonts.ready.then(function(){setTimeout(size,60)})}catch(_){}setTimeout(size,1800);setTimeout(size,4200);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();
