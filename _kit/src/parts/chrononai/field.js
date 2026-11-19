/* ================= HERO FIELD: a living cell under the microscope, crawling. ChrononAI's own subject (the Lee
   Laboratory's time-coded cell-edge images): a migrating cell with its ruffling leading edge, nucleus, actin fibres
   and granules, and behind it the edge it traced moments earlier, coded by time from deep blue (earlier) to
   white (now). Out-of-focus neighbours sit in the dark field. It animates on its own; no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBg=null,GR=[],FB=[],NC=26,DT=1.35,NP=132;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(mob){var top=74,bot=h*.34-58,R=Math.min((bot-top)*.42,w*.22);return {mob:mob,cx:w*.58,cy:(top+bot)/2+R*.08,R:R,A:R*.42,B:R*.2}}
    var R=Math.max(70,Math.min(h*.2,cw*.13));return {mob:mob,cx:side+cw*.7,cy:h*.5,R:R,A:R*.62,B:R*.3};
  }
  function size(){dpr=Math.min(devicePixelRatio||1,2);w=cv.clientWidth||innerWidth;h=cv.clientHeight||innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();frame(true)}
  function build(){
    var o=document.createElement("canvas");o.width=cv.width;o.height=cv.height;var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);
    var bg=g.createRadialGradient(G.cx,G.cy,0,G.cx,G.cy,Math.max(w,h)*.8);bg.addColorStop(0,"#0d2e30");bg.addColorStop(.45,"#08201f");bg.addColorStop(1,"#041312");
    g.fillStyle=bg;g.fillRect(0,0,w,h);
    /* out-of-focus neighbour cells: soft, large, very faint */
    var R=rng(7),n=G.mob?4:7;
    for(var i=0;i<n;i++){var a=R()*6.283,d=G.R*(2.2+R()*2.6),x=G.cx+Math.cos(a)*d*(G.mob?1.5:1.25),y=G.cy+Math.sin(a)*d*.8,rr=G.R*(.55+R()*.5);
      g.save();g.translate(x,y);g.rotate(R()*3);g.scale(1,.6+R()*.3);
      var cg=g.createRadialGradient(0,0,0,0,0,rr);cg.addColorStop(0,"rgba(70,150,160,.10)");cg.addColorStop(.55,"rgba(60,130,150,.06)");cg.addColorStop(.85,"rgba(90,170,200,.07)");cg.addColorStop(1,"rgba(60,130,150,0)");
      g.fillStyle=cg;g.beginPath();g.arc(0,0,rr,0,6.283);g.fill();
      var ng=g.createRadialGradient(-rr*.1,0,0,-rr*.1,0,rr*.3);ng.addColorStop(0,"rgba(60,120,200,.10)");ng.addColorStop(1,"rgba(60,120,200,0)");g.fillStyle=ng;g.beginPath();g.arc(-rr*.1,0,rr*.3,0,6.283);g.fill();g.restore()}
    /* eyepiece vignette */
    var vg=g.createRadialGradient(G.cx,G.cy,Math.min(w,h)*.3,G.cx,G.cy,Math.max(w,h)*.75);vg.addColorStop(0,"rgba(4,19,18,0)");vg.addColorStop(1,"rgba(4,19,18,.75)");g.fillStyle=vg;g.fillRect(0,0,w,h);
    oBg=o;
    var Rg=rng(19);GR=[];for(var k=0;k<46;k++){var ang=Rg()*6.283,rd=Math.sqrt(Rg());GR.push([ang,rd,.6+Rg()*1.3,Rg()*6.283])}
    var Rf=rng(23);FB=[];for(var f=0;f<13;f++)FB.push([(f/12-.5)*1.1+(Rf()-.5)*.08,(Rf()-.5)*.25,.05+Rf()*.08])
  }
  /* where the cell is and which way it is heading, at time t (s): a slow elliptical wander */
  var W=2*Math.PI/95;
  function pos(t){return [G.cx+G.A*Math.cos(W*t),G.cy+G.B*Math.sin(W*t)]}
  function head(t){return Math.atan2(G.B*Math.cos(W*t),-G.A*Math.sin(W*t))}
  function wrap(a){while(a>Math.PI)a-=6.283;while(a<-Math.PI)a+=6.283;return a}
  /* radius of the cell edge at angle f from the heading */
  function rad(f,t){var R=G.R,cf=Math.cos(f),fr=cf>0?cf*cf:0,tb=wrap(f-Math.PI);
    return R*(.8+.25*cf+.1*Math.cos(2*f)
      +fr*(.05*Math.sin(7*f+1.3*t)+.032*Math.sin(11*f-.9*t+1)+.05*Math.sin(3*f+.5*t))
      +.4*Math.exp(-(tb*tb)/.05)*(.7+.3*Math.sin(.35*t))
      +.032*Math.sin(4*f+.3*t+2)+.026*Math.sin(5*f-.23*t))}
  function edge(t){var p=pos(t),hd=head(t),pts=[];for(var i=0;i<NP;i++){var f=i/NP*6.283-Math.PI,r=rad(f,t);pts.push([p[0]+Math.cos(f+hd)*r,p[1]+Math.sin(f+hd)*r])}return pts}
  function path(pts){c.beginPath();for(var i=0;i<=pts.length;i++){var a=pts[i%pts.length],b=pts[(i+1)%pts.length],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;if(i===0)c.moveTo(mx,my);else c.quadraticCurveTo(a[0],a[1],mx,my)}c.closePath()}
  function ramp(a){/* 0 = now, 1 = oldest: white -> cyan -> logo blue -> deep blue */
    var S=[[0,[236,246,248]],[.18,[140,214,226]],[.5,[74,150,222]],[.78,[22,111,186]],[1,[20,60,140]]];
    for(var i=1;i<S.length;i++)if(a<=S[i][0]){var u=(a-S[i-1][0])/(S[i][0]-S[i-1][0]),A=S[i-1][1],B=S[i][1];return [A[0]+(B[0]-A[0])*u|0,A[1]+(B[1]-A[1])*u|0,A[2]+(B[2]-A[2])*u|0]}return S[4][1]}
  function frame(once){
    var t=(performance.now()-t0)/1000+40;dim+=(dimT-dim)*.08;var e=IN.v*dim;
    c.setTransform(dpr,0,0,dpr,0,0);c.globalAlpha=1;c.globalCompositeOperation="source-over";
    if(oBg)c.drawImage(oBg,0,0,w,h);
    c.globalAlpha=e;
    /* the edge it traced: time-coded contours, oldest first */
    c.globalCompositeOperation="lighter";c.lineWidth=G.mob?.9:1.05;
    for(var k=NC;k>=1;k--){var a=k/NC,col=ramp(a),al=Math.pow(1-a,1.1)*.62;
      c.strokeStyle="rgba("+col[0]+","+col[1]+","+col[2]+","+al.toFixed(3)+")";path(edge(t-k*DT));c.stroke()}
    /* the track of the centroid */
    c.setLineDash([2,5]);c.strokeStyle="rgba(140,200,230,.32)";c.beginPath();for(var q=0;q<=NC;q++){var pp=pos(t-q*DT);q?c.lineTo(pp[0],pp[1]):c.moveTo(pp[0],pp[1])}c.stroke();c.setLineDash([]);
    c.globalCompositeOperation="source-over";
    /* the cell now */
    var P=pos(t),hd=head(t),E=edge(t),R=G.R;
    c.save();path(E);
    var cg=c.createRadialGradient(P[0]-Math.cos(hd)*R*.15,P[1]-Math.sin(hd)*R*.15,0,P[0],P[1],R*1.25);
    cg.addColorStop(0,"rgba(70,150,165,.42)");cg.addColorStop(.6,"rgba(46,120,150,.26)");cg.addColorStop(1,"rgba(80,170,210,.30)");
    c.fillStyle=cg;c.fill();c.clip();
    /* lamellipodium: a brighter rim inside the edge, strongest at the front */
    c.lineWidth=R*.2;c.strokeStyle="rgba(150,215,235,.12)";path(E);c.stroke();
    c.lineWidth=R*.09;c.strokeStyle="rgba(190,232,245,.12)";path(E);c.stroke();
    /* actin stress fibres along the axis of travel */
    c.translate(P[0],P[1]);c.rotate(hd);c.lineWidth=.8;
    for(var f=0;f<FB.length;f++){var fb=FB[f],y0=fb[0]*R*.8,cu=fb[1]*R;c.strokeStyle="rgba(170,225,240,"+(fb[2]*e).toFixed(3)+")";
      c.beginPath();c.moveTo(-R*1.05,y0*.5);c.quadraticCurveTo(0,y0+cu,R*1.1,y0*1.15);c.stroke()}
    /* granules around the nucleus */
    for(var gi=0;gi<GR.length;gi++){var gr=GR[gi],ga=gr[0]+Math.sin(t*.4+gr[3])*.06,gd=R*(.32+gr[1]*.38);
      c.fillStyle="rgba(200,236,240,"+(.22+.12*Math.sin(t*.9+gr[3])).toFixed(3)+")";c.beginPath();c.arc(-R*.18+Math.cos(ga)*gd*1.1,Math.sin(ga)*gd*.75,gr[2]*(G.mob?.7:1),0,6.283);c.fill()}
    /* nucleus */
    var nx=-R*.2,nb=Math.sin(t*.5)*.02;
    c.save();c.translate(nx,0);c.scale(1+nb,1-nb);
    var ng=c.createRadialGradient(-R*.06,-R*.05,0,0,0,R*.36);ng.addColorStop(0,"rgba(120,180,240,.62)");ng.addColorStop(.7,"rgba(40,120,200,.5)");ng.addColorStop(1,"rgba(22,111,186,.42)");
    c.fillStyle=ng;c.beginPath();c.ellipse(0,0,R*.36,R*.27,0,0,6.283);c.fill();
    c.strokeStyle="rgba(170,215,250,.55)";c.lineWidth=1;c.stroke();
    c.strokeStyle="rgba(190,225,255,.16)";c.lineWidth=.8;
    for(var ch=0;ch<5;ch++){c.beginPath();c.ellipse(R*(ch*.05-.1),R*(ch%2?.05:-.06),R*(.08+ch*.025),R*.05,ch*.7,0,4);c.stroke()}
    c.fillStyle="rgba(10,50,110,.55)";c.beginPath();c.arc(R*.08,-R*.06,R*.045,0,6.283);c.fill();c.beginPath();c.arc(-R*.1,R*.07,R*.034,0,6.283);c.fill();
    c.restore();
    c.restore();
    /* the membrane, glowing */
    c.shadowColor="rgba(106,174,230,.7)";c.shadowBlur=G.mob?10:16;c.lineWidth=G.mob?1.2:1.5;c.strokeStyle="rgba(232,246,250,.92)";path(E);c.stroke();c.shadowBlur=0;
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){if(!G)return [w/2,h/2];var p=pos((performance.now()-t0)/1000+40);return [p[0],p[1]]}};
})();
