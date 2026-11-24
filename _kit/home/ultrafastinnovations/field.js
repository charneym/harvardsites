/* ================= HERO FIELD: a crafted render (mirror.py) of one 1-inch UFI-style dispersive mirror on real alpha, set in the
   open area right of the headline, with a thin near-infrared laser beam striking the coated face and reflecting away, short
   pulses travelling along it, and a slow light sweep across the coating. The mirror itself does not follow the pointer (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[0,0];
  /* face centre and the face normal's screen direction, in image pixels (from mirror.json, cropped) */
  var FCX=479.2,FCY=433.1,NX=.985,NY=.172,IW=770,IH=854;
  var off=document.createElement("canvas"),oc=off.getContext("2d");
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (QA-2 framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),nd;while(nd=tw.nextNode()){if(!nd.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(nd);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  img.onload=function(){ok=true;IW=img.naturalWidth;IH=img.naturalHeight;off.width=IW;off.height=IH;frame(true)};img.src="data:image/webp;base64,__HERO__";
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);if(!running)frame(true)}
  function rot(x,y,a){var cs=Math.cos(a),sn=Math.sin(a);return [x*cs-y*sn,x*sn+y*cs]}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!ok)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=IN.v<0?0:IN.v>1?1:IN.v;e=e*e*(3-2*e);cv.style.opacity=shown?String(.5+.5*dim):"";
    var mob=w<861,s,x,y;
    if(!mob){
      /* desktop: the whole mirror sits between ~100px past the measured H1/lede end and the content's right margin,
         below the nav with headroom and above the fold, centred in that open area */
      var CR=w-Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2);try{var he=document.querySelector(".hero");if(he){var hr=he.getBoundingClientRect(),hp=parseFloat(getComputedStyle(he).paddingRight)||0;if(hr.width>0)CR=hr.right-hp}}catch(_){}
      var L0=Math.max(TXR()+110,w*.5),T0=130,B0=h-90;
      s=Math.min((CR-L0)*.62/IW,(B0-T0)/IH,1);
      x=L0+(CR-L0-IW*s)*.42;y=T0+(B0-T0-IH*s)/2;
    }else{
      var T=92,B=h*.375;try{var eb=document.querySelector('.hero .eyebrow');if(eb){var et=eb.getBoundingClientRect().top+(window.scrollY||0);if(et>T+100)B=et-30}}catch(_){}s=Math.min((B-T)/IH,w*.5/IW);x=w*.4-IW*s/2;y=T+(B-T-IH*s)/2;
    }
    y+=(RM?0:Math.sin(t*2*Math.PI/14)*3)-SP.v*h*.03;
    var hx=x+FCX*s,hy=y+FCY*s;FOC=[hx,hy];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    /* the mirror, with a soft band of light sweeping slowly across the coated face (kept inside the mirror's own alpha) */
    oc.globalCompositeOperation="source-over";oc.clearRect(0,0,IW,IH);oc.drawImage(img,0,0);
    if(!RM){var ph=(t/18)%1,sx=IW*(-.3+1.6*ph),sg=oc.createLinearGradient(sx-IW*.22,0,sx+IW*.22,IH*.2);
      sg.addColorStop(0,"rgba(255,246,232,0)");sg.addColorStop(.5,"rgba(255,246,232,.16)");sg.addColorStop(1,"rgba(255,246,232,0)");
      oc.globalCompositeOperation="source-atop";oc.fillStyle=sg;oc.fillRect(0,0,IW,IH);oc.globalCompositeOperation="source-over"}
    /* a faint cool glow behind the optic, so it sits in light rather than on a void */
    var gl=c.createRadialGradient(hx,hy,0,hx,hy,IH*s*.75);gl.addColorStop(0,"rgba(40,80,200,.16)");gl.addColorStop(1,"rgba(40,80,200,0)");c.fillStyle=gl;c.fillRect(hx-IH*s,hy-IH*s,IH*s*2,IH*s*2);
    c.drawImage(off,x,y,IW*s,IH*s);
    /* the beam: in from the upper right, out to the lower right, both fading out before the content edge */
    var A=.48,ui=rot(NX,NY,-A),uo=rot(NX,NY,A),Lb=Math.min(w-hx-24,IW*s*.95);
    if(Lb>40){
      c.save();c.lineCap="round";
      [[ui,0],[uo,1]].forEach(function(b){var ex=hx+b[0][0]*Lb,ey=hy+b[0][1]*Lb,gr=c.createLinearGradient(hx,hy,ex,ey);
        gr.addColorStop(0,"rgba(255,96,72,.75)");gr.addColorStop(.7,"rgba(255,96,72,.32)");gr.addColorStop(1,"rgba(255,96,72,0)");
        c.strokeStyle=gr;c.lineWidth=1.3;c.shadowColor="rgba(255,80,60,.8)";c.shadowBlur=8;c.beginPath();c.moveTo(hx,hy);c.lineTo(ex,ey);c.stroke();
        /* pulses: travelling in along the incoming beam, then out along the reflected one */
        if(!RM){for(var k=0;k<3;k++){var q=((t/2.6)+k/3)%1,d=b[1]?q*Lb:(1-q)*Lb,px=hx+b[0][0]*d,py=hy+b[0][1]*d,a=Math.sin(Math.PI*q)*(b[1]?1-q*.6:.4+.6*q);
          var pg=c.createRadialGradient(px,py,0,px,py,9);pg.addColorStop(0,"rgba(255,214,196,"+(.85*a).toFixed(3)+")");pg.addColorStop(1,"rgba(255,96,72,0)");c.shadowBlur=0;c.fillStyle=pg;c.fillRect(px-10,py-10,20,20)}}
      });
      c.shadowBlur=0;var sp=c.createRadialGradient(hx,hy,0,hx,hy,16);sp.addColorStop(0,"rgba(255,232,220,.9)");sp.addColorStop(.35,"rgba(255,110,84,.45)");sp.addColorStop(1,"rgba(255,96,72,0)");c.fillStyle=sp;c.fillRect(hx-16,hy-16,32,32);
      c.restore();
    }
    if(mob){var fb=y+IH*s+6,fg=c.createLinearGradient(0,fb,0,fb+60);fg.addColorStop(0,"rgba(7,11,20,0)");fg.addColorStop(1,"rgba(7,11,20,1)");c.fillStyle=fg;c.fillRect(0,fb,w,61);c.fillStyle="#070b14";c.fillRect(0,fb+60,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return FOC}};
})();
