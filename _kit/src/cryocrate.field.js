/* ================= HERO FIELD: a crafted render of CryoCrate's real subject (HOME_BRIEF update, option c): one hexagonal
   ice crystal, the stellar dendrite that forms when ordinary aqueous solutions freeze, the very structure C80EZ keeps small.
   Built here with exact six-fold symmetry (spine, side branches, sub-branches, sectored centre plate, plate tips), then lit like
   a macro photograph of real ice on black: a translucent ice body, a bright upper-left rim, a cooler lower-right rim, an inner
   thickness rim, the central ridges, and a soft cyan halo. A slow glint crosses the facets; the crystal turns a few degrees
   and back. On load it grows out from the centre (freezing). The ground is the page ink exactly, so there is no box (DP/DJ).
   Desktop: centred in the open area right of the text (~70%); phones: in the top band, fading out above the text (CW).
   It moves on its own, so no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),ctx=cv.getContext("2d"),w=0,h=0,dpr=1,running=false,raf=0,t0=performance.now(),shown=false,G=null;
  var IN={v:1},dim=1,dimT=1,SP={v:0};
  var INK="#071523";
  var B=null,GL=null,MK=null,TMP=null,SZ=0;/* crystal bitmap, halo, mask, glint scratch; bitmap side in px */
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* ---- geometry in unit radius, one arm along +x, mirrored and repeated six times ---- */
  function arm(){
    var P=[];/* each: polygon [[x,y],...] */
    function bar(x0,y0,x1,y1,w0,w1,tip){var dx=x1-x0,dy=y1-y0,L=Math.sqrt(dx*dx+dy*dy),nx=-dy/L,ny=dx/L,ux=dx/L,uy=dy/L;
      var t=tip||0;P.push([[x0+nx*w0,y0+ny*w0],[x1+nx*w1,y1+ny*w1],[x1+ux*t,y1+uy*t],[x1-nx*w1,y1-ny*w1],[x0-nx*w0,y0-ny*w0]])}
    function hex(cx,cy,r,rot){var a=[];for(var i=0;i<6;i++){var t=(rot||0)+i*Math.PI/3;a.push([cx+Math.cos(t)*r,cy+Math.sin(t)*r])}P.push(a)}
    /* spine */
    bar(.12,0,.97,0,.036,.017,.03);
    /* plate tip (a little sectored plate at the end of the arm) */
    hex(.9,0,.052,Math.PI/6);
    /* side branches at 60 degrees, both sides; sub-branches run parallel to the spine */
    var BR=[[.3,.13],[.4,.215],[.5,.25],[.6,.22],[.69,.17],[.78,.12],[.85,.065]];
    var a60=Math.PI/3;
    BR.forEach(function(b,k){var x=b[0],L=b[1];
      [1,-1].forEach(function(s){var ex=x+Math.cos(a60)*L,ey=s*Math.sin(a60)*L;
        bar(x,0,ex,ey,.02,.008,.014);
        if(L>.15){[.42,.7].forEach(function(f,j){var sx=x+Math.cos(a60)*L*f,sy=s*Math.sin(a60)*L*f,sl=L*(j?.22:.34);
          bar(sx,sy,sx+sl,sy,.011,.005,.01)})}
        if(L>.2){var sx2=x+Math.cos(a60)*L*.56,sy2=s*Math.sin(a60)*L*.56;bar(sx2,sy2,sx2-L*.16*.5,sy2+s*L*.16*.866,.009,.004,.008)}
      })});
    return P}
  function ridges(){/* centre lines (drawn lighter): spine, branch centres */
    var L=[[.2,0,.92,0]];
    [[.3,.13],[.4,.215],[.5,.25],[.6,.22],[.69,.17],[.78,.12]].forEach(function(b){[1,-1].forEach(function(s){L.push([b[0],0,b[0]+Math.cos(Math.PI/3)*b[1]*.92,s*Math.sin(Math.PI/3)*b[1]*.92])})});
    return L}
  function build(){
    var D=Math.max(64,Math.round(G.R*2*dpr*1.2));if(D===SZ&&B)return;SZ=D;var R=D/2/1.2,c=D/2;
    var A=document.createElement("canvas");A.width=A.height=D;var a=A.getContext("2d");
    var P=arm(),RL=ridges();
    function each(fn){for(var k=0;k<6;k++)for(var m=0;m<2;m++)fn(k*Math.PI/3-Math.PI/2+Math.PI/6,m?-1:1)}
    function poly(g,pts,rot,mir){var co=Math.cos(rot),si=Math.sin(rot);g.beginPath();pts.forEach(function(p,i){var x=p[0],y=p[1]*mir;var X=c+(x*co-y*si)*R,Y=c+(x*si+y*co)*R;i?g.lineTo(X,Y):g.moveTo(X,Y)});g.closePath();g.fill()}
    /* mask: arms + the sectored centre plate */
    a.fillStyle="#fff";
    each(function(rot,mir){P.forEach(function(p){poly(a,p,rot,mir)})});
    function hexAt(g,r,rot){g.beginPath();for(var i=0;i<6;i++){var t=rot+i*Math.PI/3;var X=c+Math.cos(t)*r*R,Y=c+Math.sin(t)*r*R;i?g.lineTo(X,Y):g.moveTo(X,Y)}g.closePath()}
    hexAt(a,.2,-Math.PI/2+Math.PI/6);a.fill();
    MK=A;
    function shifted(dx,dy){var C=document.createElement("canvas");C.width=C.height=D;var g=C.getContext("2d");g.drawImage(A,0,0);g.globalCompositeOperation="destination-out";g.drawImage(A,dx,dy);return C}
    function tint(C,col){var g=C.getContext("2d");g.globalCompositeOperation="source-in";g.fillStyle=col;g.fillRect(0,0,D,D);return C}
    var s=Math.max(1.2,R*.006);
    var rimL=tint(shifted(s*1.3,s*1.5),"rgba(244,251,255,1)"),rimD=tint(shifted(-s,-s*1.2),"rgba(90,190,245,.75)"),rimS=tint(shifted(s*.5,s*.6),"rgba(255,255,255,.9)");
    var rimI=tint(shifted(s*4,s*4.4),"rgba(190,226,252,.2)"),rimJ=tint(shifted(-s*3.4,-s*3.8),"rgba(40,130,200,.18)");
    var F=document.createElement("canvas");F.width=F.height=D;var f=F.getContext("2d");
    /* the ice body: translucent, denser towards the centre */
    f.drawImage(A,0,0);f.globalCompositeOperation="source-in";
    var gr=f.createRadialGradient(c,c,0,c,c,R);gr.addColorStop(0,"rgba(214,236,252,.5)");gr.addColorStop(.25,"rgba(150,200,236,.3)");gr.addColorStop(.6,"rgba(110,172,224,.2)");gr.addColorStop(1,"rgba(150,205,240,.3)");
    f.fillStyle=gr;f.fillRect(0,0,D,D);f.globalCompositeOperation="source-over";
    f.drawImage(rimI,0,0);f.drawImage(rimJ,0,0);f.drawImage(rimD,0,0);f.drawImage(rimL,0,0);f.globalCompositeOperation="lighter";f.drawImage(rimS,0,0);f.globalCompositeOperation="source-over";
    /* centre plate: concentric hexagonal ridges and the six radial ridges, the relief of a real sectored plate */
    f.lineJoin="miter";
    [[.155,.5,1.1],[.11,.34,1],[.062,.42,1],[.03,.6,1]].forEach(function(q){hexAt(f,q[0],-Math.PI/2+Math.PI/6);f.strokeStyle="rgba(228,244,255,"+q[1]+")";f.lineWidth=q[2]*s;f.stroke()});
    f.strokeStyle="rgba(228,244,255,.32)";f.lineWidth=s*.9;
    each(function(rot,mir){if(mir<0)return;RL.forEach(function(l,i){var co=Math.cos(rot),si=Math.sin(rot);var x0=l[0],y0=l[1],x1=l[2],y1=l[3];
      f.globalAlpha=i?.55:.9;f.beginPath();f.moveTo(c+(x0*co-y0*si)*R,c+(x0*si+y0*co)*R);f.lineTo(c+(x1*co-y1*si)*R,c+(x1*si+y1*co)*R);f.stroke()})});
    f.globalAlpha=1;
    /* a few trapped air bubbles near the centre, as real crystals show */
    [[.05,.02,.012],[-.035,.05,.008],[.02,-.07,.01],[-.06,-.03,.007]].forEach(function(b){f.beginPath();f.arc(c+b[0]*R,c+b[1]*R,b[2]*R,0,7);f.strokeStyle="rgba(230,246,255,.5)";f.lineWidth=s*.8;f.stroke()});
    B=F;
    /* halo: a blurred copy, cyan */
    var H=document.createElement("canvas");H.width=H.height=D;var hx=H.getContext("2d");
    try{hx.filter="blur("+Math.round(R*.05)+"px)"}catch(e){}hx.drawImage(A,0,0);hx.filter="none";hx.globalCompositeOperation="source-in";hx.fillStyle="rgba(40,160,225,.5)";hx.fillRect(0,0,D,D);
    GL=H;
    TMP=document.createElement("canvas");TMP.width=TMP.height=D;
  }
  /* drifting ice specks, right part of the hero only, never behind the text (DI) */
  var SPK=[];for(var i=0;i<46;i++)SPK.push({x:Math.random(),y:Math.random(),r:.5+Math.random()*1.6,v:.004+Math.random()*.01,p:Math.random()*6.3,b:Math.random()<.12});
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){var eb=document.querySelector(".hero .eyebrow"),bot=eb?eb.getBoundingClientRect().top+window.scrollY-18:h*.36;
      bot=Math.max(180,Math.min(bot,h*.56));var top=70,ub=bot-58;var R=Math.min((ub-top)*.5,w*.4);
      return {mob:true,side:side,cw:cw,U:bot,R:R,kx:w*.5,ky:top+(ub-top)*.5}}
    var R=Math.min(h*.36,cw*.205);
    return {mob:false,side:side,cw:cw,U:h,R:R,kx:side+cw*.71,ky:Math.max(h*.54,96+R+20)}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!G||!B)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;var e=sm(IN.v);
    cv.style.opacity=shown?String(.55+.45*dim):"";
    ctx.setTransform(1,0,0,1,0,0);ctx.globalCompositeOperation="source-over";ctx.globalAlpha=1;
    ctx.fillStyle=INK;ctx.fillRect(0,0,cv.width,cv.height);
    var sy=G.mob?(window.scrollY||0):SP.v*h*.06;
    var cx=G.kx*dpr,cy=(G.ky-sy)*dpr,D=SZ;
    /* specks */
    var x0=G.mob?0:(G.side+G.cw*.52)*dpr,xw=G.mob?cv.width:cv.width-x0;
    SPK.forEach(function(s){var yy=((s.y+t*s.v)%1)*cv.height,xx=x0+((s.x+Math.sin(t*.2+s.p)*.01)%1)*xw;
      var a=(.18+.22*Math.sin(t*.7+s.p))*e;if(a<=0)return;ctx.globalAlpha=a;ctx.fillStyle=s.b?"rgba(120,200,245,1)":"rgba(220,240,255,1)";
      ctx.beginPath();ctx.arc(xx,yy,(s.b?s.r*2.4:s.r)*dpr,0,7);ctx.fill()});
    ctx.globalAlpha=1;
    /* the crystal: grows out from the centre on load, then turns a few degrees and back */
    var rot=(RM?0:.06*Math.sin(t*Math.PI*2/40))+(1-e)*-.25;
    ctx.save();ctx.translate(cx,cy);ctx.rotate(rot);
    if(e<1){ctx.beginPath();ctx.arc(0,0,D*.46*e,0,7);ctx.clip()}
    var pulse=.82+.18*Math.sin(t*.6);
    ctx.globalAlpha=.55*pulse*e;ctx.drawImage(GL,-D/2,-D/2);
    ctx.globalAlpha=1;ctx.drawImage(B,-D/2,-D/2);
    /* the glint: a soft band of light crossing the facets every ~11 s, only where there is ice */
    if(!RM){var ph=(t/11)%1,gx=(-0.7+ph*2.4)*D;var g=TMP.getContext("2d");g.globalCompositeOperation="source-over";g.clearRect(0,0,D,D);
      var lg=g.createLinearGradient(gx-D*.18,gx*.3-D*.18,gx+D*.18,gx*.3+D*.18);lg.addColorStop(0,"rgba(255,255,255,0)");lg.addColorStop(.5,"rgba(225,245,255,.5)");lg.addColorStop(1,"rgba(255,255,255,0)");
      g.fillStyle=lg;g.fillRect(0,0,D,D);g.globalCompositeOperation="destination-in";g.drawImage(MK,0,0);
      ctx.globalCompositeOperation="lighter";ctx.drawImage(TMP,-D/2,-D/2);ctx.globalCompositeOperation="source-over"}
    ctx.restore();
    /* phones: the band fades out before the text (CW) */
    if(G.mob){var yb=(G.U-sy)*dpr;var fg=ctx.createLinearGradient(0,yb-46*dpr,0,yb+8*dpr);fg.addColorStop(0,"rgba(7,21,35,0)");fg.addColorStop(1,INK);ctx.fillStyle=fg;ctx.fillRect(0,yb-46*dpr,cv.width,54*dpr);ctx.fillStyle=INK;ctx.fillRect(0,yb+8*dpr,cv.width,cv.height)}
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();setTimeout(size,900);addEventListener("load",function(){setTimeout(size,300)});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d*1.6,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();
