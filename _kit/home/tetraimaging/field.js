/* ================= HERO FIELD: a crafted render of Tetraimaging's own device, the multilayer strip ionization chamber (MLSIC):
   66 thin chamber layers stacked along the beam (the first two read x and y with 128 strips, the other 64 read depth with
   32 strips each), reading a scanned proton pencil beam spot by spot. The spot steps through a serpentine grid; each energy
   layer stops at a different depth, so the lit strips trace a Bragg curve that peaks just before the beam stops.
   Drawn live in true 3D perspective on a transparent canvas over the page ink (no image panel, no box edge). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},FOC=[0,0];
  var NL=66,D=3.1,YAW=-0.98,PIT=0.3,FD=9;
  var cy=Math.cos(YAW),sy=Math.sin(YAW),cp=Math.cos(PIT),sp=Math.sin(PIT);
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p,.hero .eyebrow");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),nd;while(nd=tw.nextNode()){if(!nd.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(nd);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  /* world: x along the beam (0..D, centred), y up, z across. Plates span y,z in [-1,1]. */
  function P(x,y,z){x-=D/2;var X=x*cy+z*sy,Z=-x*sy+z*cy,Y=y*cp-Z*sp,Z2=y*sp+Z*cp,f=FD/(FD+Z2);return [X*f,-Y*f,Z2]}
  /* projected extent at unit scale, for fitting */
  var BB=(function(){var a=[1e9,1e9,-1e9,-1e9];for(var i=0;i<2;i++)for(var j=-1;j<2;j+=2)for(var k=-1;k<2;k+=2){var p=P(i*D,j*1.12,k);a[0]=Math.min(a[0],p[0]);a[1]=Math.min(a[1],p[1]);a[2]=Math.max(a[2],p[0]);a[3]=Math.max(a[3],p[1])}return a})();
  var S=1,OX=0,OY=0;
  function scr(x,y,z){var p=P(x,y,z);return [OX+p[0]*S,OY+p[1]*S]}
  /* pencil-beam scan: a 5 x 5 serpentine of spots per energy layer, energy (range) changes each layer */
  var NS=5,DW=.42,RNG=[.56,.68,.8,.62,.74,.5,.86];
  function spot(t){var n=Math.floor(t/DW),lay=Math.floor(n/(NS*NS)),k=n%(NS*NS),r=Math.floor(k/NS),cI=k%NS;if(r%2)cI=NS-1-cI;
    return {y:(r-(NS-1)/2)*.32,z:(cI-(NS-1)/2)*.32,R:RNG[lay%RNG.length],f:(t/DW)%1,n:n}}
  function bragg(u,R){if(u>R+.05)return 0;var pk=Math.exp(-Math.pow((u-R)/.028,2));return u<=R?Math.min(1,.2+.22*Math.pow(u/R,3)+.85*pk):pk}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);if(!running)frame(true)}
  var lastF=0;
  function fit(){
    var mob=w<861,bw=BB[2]-BB[0],bh=BB[3]-BB[1],L0,R0,T0,B0;
    if(mob){L0=20;R0=w-20;T0=92;B0=Math.max(T0+180,h*.34-6)}
    else{var CR=w-Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2);try{var he=document.querySelector(".hero");if(he){var hr=he.getBoundingClientRect(),hp=parseFloat(getComputedStyle(he).paddingRight)||0;if(hr.width>0)CR=hr.right-hp}}catch(_){}
      L0=Math.max(TXR()+110,w*.5);R0=CR;T0=Math.max(130,h*.16);B0=h-Math.max(80,h*.11)}
    S=Math.min((R0-L0)/bw,(B0-T0)/bh);if(!mob)S=Math.min(S,h*.36);
    OX=(L0+R0)/2-(BB[0]+bw/2)*S;OY=(T0+B0)/2-(BB[1]+bh/2)*S+SP.v*h*.03;
  }
  function quad(a,b,cc,d){c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.lineTo(cc[0],cc[1]);c.lineTo(d[0],d[1]);c.closePath()}
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?3.3:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    fit();
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);
    var sp0=spot(t),sw=RM?0:Math.sin(t*2*Math.PI/40)*.035;
    /* a faint floor glow under the stack, eased out radially (no edge) */
    var fc=scr(D/2,-1.25,0),fr=S*2.1;var fg=c.createRadialGradient(fc[0],fc[1],0,fc[0],fc[1],fr);fg.addColorStop(0,"rgba(73,216,221,"+(.07*e).toFixed(3)+")");fg.addColorStop(.55,"rgba(73,216,221,"+(.025*e).toFixed(3)+")");fg.addColorStop(1,"rgba(73,216,221,0)");
    c.save();c.translate(fc[0],fc[1]);c.scale(1,.32);c.translate(-fc[0],-fc[1]);c.fillStyle=fg;c.fillRect(fc[0]-fr,fc[1]-fr,fr*2,fr*2);c.restore();
    /* frame rails: the four long edges that hold the layers */
    c.lineWidth=1;c.strokeStyle="rgba(190,214,218,"+(.26*e).toFixed(3)+")";
    [[-1.06,-1.06],[-1.06,1.06],[1.06,-1.06],[1.06,1.06]].forEach(function(q){var a=scr(-.04,q[0],q[1]),b=scr(D+.04,q[0],q[1]);c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke()});
    /* layers, painted back to front; each appears in sequence during the intro */
    var beamU=sm(Math.min(1,sp0.f*5));
    for(var ii=NL-1;ii>=0;ii--){
      var u=ii/(NL-1),x=u*D,vis=sm((e*1.25-u*.25)*1.0);if(vis<=0)continue;
      var a=scr(x,1,-1),b=scr(x,1,1),cc=scr(x,-1,1),d=scr(x,-1,-1);
      var front=ii<2,depthA=.55+.45*(1-u);
      quad(a,b,cc,d);c.fillStyle="rgba(120,200,210,"+((front?.05:.016)*vis).toFixed(3)+")";c.fill();
      var mod=ii%11===0;c.strokeStyle="rgba(208,228,232,"+((front?.62:mod?.34:.1+.1*depthA)*vis).toFixed(3)+")";c.lineWidth=front?1.2:mod?1:.7;c.stroke();
      /* the strip pattern: x/y layers (first two) dense; depth layers 32 strips, drawn faint on every fourth layer */
      if(front||ii%4===0){var ns=front?40:16;c.strokeStyle="rgba(73,216,221,"+((front?.2:.05)*vis).toFixed(3)+")";c.lineWidth=.6;c.beginPath();
        for(var s=1;s<ns;s++){var v=-1+2*s/ns,p1=ii===0?scr(x,v,-1):scr(x,1,v),p2=ii===0?scr(x,v,1):scr(x,-1,v);c.moveTo(p1[0],p1[1]);c.lineTo(p2[0],p2[1])}c.stroke()}
      /* the dose this layer reads for the current spot: its strip under the spot lights, brightest at the Bragg peak */
      var dv=bragg(u,sp0.R+sw)*beamU*e;
      if(dv>.02&&!RM||dv>.02&&RM){
        var vert=ii%2===0,q1=vert?scr(x,1,sp0.z):scr(x,sp0.y,-1),q2=vert?scr(x,-1,sp0.z):scr(x,sp0.y,1);
        c.strokeStyle="rgba(120,236,240,"+(Math.min(1,dv*.9)).toFixed(3)+")";c.lineWidth=1+dv*1.4;c.beginPath();c.moveTo(q1[0],q1[1]);c.lineTo(q2[0],q2[1]);c.stroke();
        var sc=scr(x,sp0.y,sp0.z),gr=S*(.06+.16*dv),g=c.createRadialGradient(sc[0],sc[1],0,sc[0],sc[1],gr);
        g.addColorStop(0,"rgba(205,252,252,"+(Math.min(1,dv)).toFixed(3)+")");g.addColorStop(.35,"rgba(73,216,221,"+(.45*dv).toFixed(3)+")");g.addColorStop(1,"rgba(73,216,221,0)");
        c.globalCompositeOperation="lighter";c.fillStyle=g;c.fillRect(sc[0]-gr,sc[1]-gr,gr*2,gr*2);c.globalCompositeOperation="source-over";
      }
    }
    /* the pencil beam: enters from the left, fades in over a long run, stops at its range */
    if(e>.2){var R=Math.min(1,sp0.R+sw+.03),b0=scr(-.55,sp0.y,sp0.z),b1=scr(0,sp0.y,sp0.z),b2=scr(R*D,sp0.y,sp0.z);
      var bl=c.createLinearGradient(b0[0],b0[1],b1[0],b1[1]);bl.addColorStop(0,"rgba(160,244,246,0)");bl.addColorStop(1,"rgba(160,244,246,"+(.75*beamU*e).toFixed(3)+")");
      c.globalCompositeOperation="lighter";c.strokeStyle=bl;c.lineWidth=1.6;c.beginPath();c.moveTo(b0[0],b0[1]);c.lineTo(b1[0],b1[1]);c.stroke();
      var bi=c.createLinearGradient(b1[0],b1[1],b2[0],b2[1]);bi.addColorStop(0,"rgba(160,244,246,"+(.55*beamU*e).toFixed(3)+")");bi.addColorStop(.85,"rgba(200,252,252,"+(.7*beamU*e).toFixed(3)+")");bi.addColorStop(1,"rgba(160,244,246,0)");
      c.strokeStyle=bi;c.lineWidth=1.3;c.beginPath();c.moveTo(b1[0],b1[1]);c.lineTo(b2[0],b2[1]);c.stroke();c.globalCompositeOperation="source-over"}
    /* the spots already delivered in this energy layer, as dim marks on the front (x/y) layer */
    var n0=sp0.n-(sp0.n%(NS*NS));c.fillStyle="rgba(73,216,221,"+(.5*e).toFixed(3)+")";
    for(var m=n0;m<sp0.n;m++){var s2=spot(m*DW+.01),pp=scr(0,s2.y,s2.z);c.beginPath();c.arc(pp[0],pp[1],Math.max(1.2,S*.012),0,7);c.fill()}
    FOC=scr(D*.6,0,0);
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return FOC}};
})();
