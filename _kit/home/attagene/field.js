/* ================= HERO FIELD: a crafted render of Attagene's own readout (HOME_BRIEF update, option c). A radial ATTAGRAPH™
   of the 48 human nuclear receptors (the trans-FACTORIAL™ panel) turns slowly; its profile morphs between activity signatures.
   Beneath it, the capillary-electrophoresis trace the profile comes from: one fluorescent peak per reporter, a detector glint
   scanning along it. The centre carries the logo's vertical dot column. Illustrative profiles, not data. No pointer response. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null;
  var NR=["AR","ERα","ERβ","GR","MR","PR","PPARα","PPARδ","PPARγ","RARα","RARβ","RARγ","RXRα","RXRβ","RXRγ","TRα","TRβ","VDR","PXR","CAR","LXRα","LXRβ","FXR","RORα",
          "RORβ","RORγ","ERRα","ERRβ","ERRγ","HNF4α","HNF4γ","Rev-erbα","Rev-erbβ","NURR1","NUR77","NOR1","SF-1","LRH-1","GCNF","TR2","TR4","TLX","PNR","COUP-TFI","COUP-TFII","EAR2","DAX1","SHP"];
  var N=NR.length;
  function R(i,k){var x=Math.sin(i*91.7+k*13.3)*43758.5453;return x-Math.floor(x)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* three illustrative signatures: a quiet baseline with a few strong, clustered responses */
  var SIG=[0,1,2].map(function(k){var a=[];for(var i=0;i<N;i++){var b=.2+.14*R(i,k+3);a.push(b)}
    var hot=[[5,8,22,40],[12,17,30,44],[0,9,26,35]][k];hot.forEach(function(j,q){for(var d=-2;d<=2;d++){var ix=(j+d+N)%N;a[ix]=Math.max(a[ix],(.95-.12*q)*(1-Math.abs(d)*.3)*(.85+.15*R(ix,k)))}});return a});
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(mob){var Rm=Math.min(w*.4,h*.2);return {mob:1,side:side,cx:w*.5,cy:Math.max(Rm+86,h*.25),R:Rm,ty:0}}
    var Rd=Math.min(h*.29,cw*.24);return {mob:0,side:side,cx:side+cw*.74,cy:h*.47,R:Rd,ty:h*.885,tx0:side,tx1:w-side}
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;
    cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function prof(t){var T=RM?0:t/9,k=Math.floor(T),f=sm((T-k)*1.6-.3),a=SIG[k%3],b=SIG[(k+1)%3],o=[];for(var i=0;i<N;i++)o.push(a[i]+(b[i]-a[i])*f);return o}
  function frame(once){
    var t=RM?0:(performance.now()-t0)/1000,e=IN.v;dim+=(dimT-dim)*.08;
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);
    var P=prof(t),cx=G.cx,cy=G.cy-(G.mob?0:SP.v*h*.05),Rr=G.R*(.94+.06*e),rot=-Math.PI/2+t*.012;
    /* soft fluorescence halo behind the plot */
    var hg=c.createRadialGradient(cx,cy,0,cx,cy,Rr*1.6);hg.addColorStop(0,"rgba(152,55,149,"+(.32*e).toFixed(3)+")");hg.addColorStop(.55,"rgba(152,55,149,"+(.1*e).toFixed(3)+")");hg.addColorStop(1,"rgba(152,55,149,0)");
    c.fillStyle=hg;c.fillRect(cx-Rr*1.7,cy-Rr*1.7,Rr*3.4,Rr*3.4);
    /* rings and spokes */
    c.lineWidth=1;
    for(var r=1;r<=5;r++){c.strokeStyle="rgba(246,242,246,"+((r===5?.2:.08)*e).toFixed(3)+")";c.beginPath();c.arc(cx,cy,Rr*r/5,0,6.2832);c.stroke()}
    c.strokeStyle="rgba(246,242,246,"+(.07*e).toFixed(3)+")";c.beginPath();
    for(var i=0;i<N;i++){var an=rot+i*6.2832/N;c.moveTo(cx+Math.cos(an)*Rr*.2,cy+Math.sin(an)*Rr*.2);c.lineTo(cx+Math.cos(an)*Rr*1.04,cy+Math.sin(an)*Rr*1.04)}c.stroke();
    /* receptor labels round the rim */
    if(!G.mob||w>360){c.font="500 "+(G.mob?8:10)+"px Figtree, system-ui, sans-serif";c.textBaseline="middle";
      for(i=0;i<N;i++){var a2=rot+i*6.2832/N,lx=cx+Math.cos(a2)*Rr*1.1,ly=cy+Math.sin(a2)*Rr*1.1,hot=P[i]>.6;
        c.fillStyle=hot?"rgba(216,160,214,"+(.85*e).toFixed(3)+")":"rgba(246,242,246,"+(.3*e).toFixed(3)+")";
        c.save();c.translate(lx,ly);var ra=a2;var flip=Math.cos(a2)<0;c.rotate(flip?ra+Math.PI:ra);c.textAlign=flip?"right":"left";c.fillText(NR[i],0,0);c.restore()}}
    /* the profile: radar polygon, filled and stroked, grown from the centre on load */
    var gr=sm(e*1.15);c.beginPath();
    for(i=0;i<=N;i++){var j=i%N,a3=rot+j*6.2832/N,rv=Rr*(.2+.8*P[j])*gr;i?c.lineTo(cx+Math.cos(a3)*rv,cy+Math.sin(a3)*rv):c.moveTo(cx+Math.cos(a3)*rv,cy+Math.sin(a3)*rv)}
    var pg=c.createRadialGradient(cx,cy,Rr*.1,cx,cy,Rr);pg.addColorStop(0,"rgba(152,55,149,.08)");pg.addColorStop(1,"rgba(196,104,192,.34)");c.fillStyle=pg;c.fill();
    c.lineJoin="round";c.strokeStyle="rgba(216,160,214,.35)";c.lineWidth=5;c.stroke();c.strokeStyle="rgba(244,214,243,.95)";c.lineWidth=1.4;c.stroke();
    for(i=0;i<N;i++){var a4=rot+i*6.2832/N,rv2=Rr*(.2+.8*P[i])*gr,px=cx+Math.cos(a4)*rv2,py=cy+Math.sin(a4)*rv2;c.fillStyle=P[i]>.6?"#fbe9fa":"rgba(216,160,214,.9)";c.beginPath();c.arc(px,py,P[i]>.6?2.6:1.7,0,6.2832);c.fill()}
    /* the logo's dot column through the centre */
    c.fillStyle="rgba(169,162,171,"+(.7*e).toFixed(3)+")";[-2,-1,1,2].forEach(function(k){c.beginPath();c.arc(cx,cy+k*Rr*.07,Math.max(1.6,Rr*.012),0,6.2832);c.fill()});
    c.fillStyle="rgba(246,242,246,"+e.toFixed(3)+")";c.beginPath();c.arc(cx,cy,Math.max(2,Rr*.016),0,6.2832);c.fill();
    /* the electropherogram: 48 peaks, heights from the same profile, scanned left to right */
    if(!G.mob){var x0=G.tx0,x1=G.tx1,yb=G.ty,ph=h*.085,span=x1-x0,sx=x0+span*((t*.06)%1),reveal=x0+span*sm(e*1.05);
      c.strokeStyle="rgba(246,242,246,"+(.12*e).toFixed(3)+")";c.lineWidth=1;c.beginPath();c.moveTo(x0,yb+.5);c.lineTo(x1,yb+.5);c.stroke();
      c.beginPath();var st=2;for(var x=x0;x<=Math.min(x1,reveal);x+=st){var u=(x-x0)/span*(N+1)-.5,y=0;var k0=Math.max(0,Math.floor(u-2)),k1=Math.min(N-1,Math.ceil(u+2));
        for(var q=k0;q<=k1;q++){var d=u-q;y+=P[q]*Math.exp(-d*d/.018)}y+=.025*R(Math.round(x),7);x===x0?c.moveTo(x,yb-y*ph):c.lineTo(x,yb-y*ph)}
      c.strokeStyle="rgba(216,160,214,.55)";c.lineWidth=1.1;c.stroke();
      var gl=c.createLinearGradient(sx-70,0,sx,0);gl.addColorStop(0,"rgba(244,214,243,0)");gl.addColorStop(1,"rgba(244,214,243,.1)");c.fillStyle=gl;c.fillRect(sx-70,yb-ph*1.1,70,ph*1.1);
      c.fillStyle="rgba(251,233,250,.8)";c.fillRect(sx,yb-ph*1.1,1,ph*1.1);
    }
    if(dim<.999){c.fillStyle="rgba(26,11,30,"+(1-dim).toFixed(3)+")";c.fillRect(0,0,w,h)}
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT,lw=0;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(function(){var nw=document.documentElement.clientWidth||innerWidth;if(nw===lw&&nw<861&&Math.abs(innerHeight-h)<140)return;lw=nw;size()},120)});lw=document.documentElement.clientWidth||innerWidth;size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:Math.max(1.4,d*.9),ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();
