/* ================= HERO FIELD: the firm's own product render (HOME_BRIEF update 2a/2c): the Aortix pump from
   procyrion.com (Aortix Pump.png, real alpha), tilted along a gentle diagonal with its catheter easing out into the ink,
   so no image edge can exist (DP/DJ). Faint crimson streamlines pass along it in the direction of aortic flow (inlet
   struts to outlet), slow and sparse (DS). It never follows the pointer (CZ). On phones it sits in the top band above the
   text and fades into the ink (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#1a1e21",AR=1800/879,TH=17.3*Math.PI/180;
  /* the pump's axis in image fractions: catheter tail, body centre, strut tip */
  var AX={tx:.026,ty:.962,mx:.556,my:.65,px:.943,py:.379};
  var NS=13,ST=[];for(var i=0;i<NS;i++)ST.push({o:((i*7)%NS)/(NS-1)-.5,ph:(i*.618)%1,sp:.055+.03*((i*5)%NS)/NS,len:.12+.1*((i*3)%NS)/NS});
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
        /* the pump, whole, in the open area right of the text (DO/DP); never larger than its native 1800px */
    var iw=mob?Math.min(w*.9,560):Math.min(cw*.45,h*.66*AR,900),ih=iw/AR;
    var kx=mob?w*.52:side+cw*.75,ky=mob?96+ih*.5:Math.max(h*.52,110+ih*.5);
    var U=mob?ky+ih*.5+40:h;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow float: drift ~0.8% along the axis and back over ~36s */
      var k=.5-.5*Math.cos(t*Math.PI*2/36);
      var dw=G.iw,dh=G.ih,x0=G.kx-dw*.5,y0=G.ky-dh*.5-k*dh*.02-SP.v*dh*.12+(1-e)*dh*.04;
      x0+=(1-e)*dw*.03;
      /* axis in page space */
      var ax=x0+AX.tx*dw,ay=y0+AX.ty*dh,bx=x0+AX.px*dw,by=y0+AX.py*dh,mx=x0+AX.mx*dw,my=y0+AX.my*dh;
      var L=Math.hypot(bx-ax,by-ay),ux=(bx-ax)/L,uy=(by-ay)/L,nx=-uy,ny=ux;
      /* a quiet ground: a cool lift and a faint crimson warmth behind the body, eased out over a long radius */
      var R=dw*.62,gr=c.createRadialGradient(mx,my,0,mx,my,R);
      [[0,.085],[.3,.06],[.55,.03],[.8,.009],[1,0]].forEach(function(q){gr.addColorStop(q[0],"rgba(198,41,76,"+q[1]*e+")")});
      c.fillStyle=gr;c.fillRect(mx-R,my-R,R*2,R*2);
      /* streamlines along the aorta, from the inlet struts toward the catheter, fading at both ends */
      c.globalCompositeOperation="lighter";c.lineCap="round";
      ST.forEach(function(s){
        var off=s.o*dh*.95,f=(s.ph+t*s.sp)%1;
        var a0=1.08-f*1.25,a1=a0+s.len;   /* fraction along the axis (1 = strut tip) */
        var al=sm((1.08-a0)/.18)*sm((a0-.05)/.25)*e*(.5+.5*(1-Math.abs(s.o)*1.6));
        if(al<=.003)return;
        var sx=ax+ux*L*a0+nx*off,sy=ay+uy*L*a0+ny*off,ex=ax+ux*L*a1+nx*off,ey=ay+uy*L*a1+ny*off;
        var lg=c.createLinearGradient(sx,sy,ex,ey);lg.addColorStop(0,"rgba(238,96,115,"+(.34*al)+")");lg.addColorStop(1,"rgba(238,96,115,0)");
        c.strokeStyle=lg;c.lineWidth=1.1;c.beginPath();c.moveTo(sx,sy);c.lineTo(ex,ey);c.stroke();
      });
      c.globalCompositeOperation="source-over";
      c.globalAlpha=e;c.drawImage(img,x0,y0,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(18,21,24,.9)");lv.addColorStop(.6,"rgba(18,21,24,.45)");lv.addColorStop(1,"rgba(18,21,24,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.5],[.2,.32],[.4,.18],[.6,.08],[.8,.02],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(18,21,24,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.02],[.4,.08],[.6,.2],[.8,.42],[1,.8]].forEach(function(q){bv.addColorStop(q[0],"rgba(26,30,33,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,84);[[0,.5],[.5,.2],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(18,21,24,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,84);
        var mv=c.createLinearGradient(0,G.bh-56,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(26,30,33,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh-56,w,57);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();
