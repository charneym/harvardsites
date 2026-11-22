/* ================= HERO FIELD: a crafted render of Sage Science's own product mechanism (HOME_BRIEF update, option c):
   a precast Pippin agarose gel cassette, seen from above at an angle. Smoky moulded body with buffer reservoirs and platinum
   electrode wires at both ends, five separate gel lanes (one marker ladder, four samples), the blue 470 nm detection strip, and
   on each lane the branched elution arm with its membrane-bound collection chamber. DNA glows green (525 nm emission) as it
   migrates; the programmed size range is diverted at the branch into the elution chamber, which slowly fills with light, while
   the rest runs on. Facts: sagescience.com/our-technology and the Pippin/PippinHT spec pages. Drawn on the page ink (no box,
   DJ/DP); placed in the open area right of the measured headline (>=130px clear); slow drift; no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null;
  var INK="#061428",A=-.34,K=.72,CA=Math.cos(A),SA=Math.sin(A),LX=600,LY=300,TH=22;
  var LANES=[48,99,150,201,252],BR=448,DET=424,X0=92,XE=556;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.4:h;
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+140,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:U,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  /* projected extent of the cassette in local units (computed from its corners) */
  var EXT=(function(){var xs=[],ys=[];[[0,0],[LX,0],[0,LY],[LX,LY]].forEach(function(p){var u=p[0]-LX/2,v=p[1]-LY/2;xs.push(u*CA-v*SA);ys.push((u*SA+v*CA)*K)});
    return {w:Math.max.apply(0,xs)-Math.min.apply(0,xs),h:Math.max.apply(0,ys)-Math.min.apply(0,ys)+TH}})();
  function place(t,e){
    var k=.5-.5*Math.cos(t*Math.PI*2/40),s,cx,cy;
    if(!G.mob){s=Math.min(G.ow*1.02/EXT.w,(h-230)*.9/EXT.h,1.9);cx=G.ox;cy=96+(h-96)*.5}
    else{s=Math.min(w*.88/EXT.w,(G.bh-92-36)/EXT.h);cx=w*.5;cy=92+(G.bh-92-36)/2}
    s*=(1+.025*k)*(1+.05*(1-e));
    return {k:k,s:s,cx:cx,cy:cy};
  }
  var P=null;
  function plane(z){/* local (x,y) on the plane at height z -> screen */
    var s=P.s;c.setTransform(dpr*s*CA,dpr*s*SA*K,-dpr*s*SA,dpr*s*CA*K,dpr*(P.cx-(LX/2*CA-LY/2*SA)*s),dpr*(P.cy-((LX/2*SA+LY/2*CA)*K)*s-z*s+TH*s*.5))}
  function pt(x,y,z){var u=x-LX/2,v=y-LY/2,s=P.s;return [P.cx+(u*CA-v*SA)*s,P.cy+((u*SA+v*CA)*K)*s-z*s+TH*s*.5]}
  function rr(x,y,ww,hh,r){c.beginPath();c.moveTo(x+r,y);c.lineTo(x+ww-r,y);c.quadraticCurveTo(x+ww,y,x+ww,y+r);c.lineTo(x+ww,y+hh-r);c.quadraticCurveTo(x+ww,y+hh,x+ww-r,y+hh);c.lineTo(x+r,y+hh);c.quadraticCurveTo(x,y+hh,x,y+hh-r);c.lineTo(x,y+r);c.quadraticCurveTo(x,y,x+r,y);c.closePath()}
  function band(x,y,len,hw,a,blur){/* a soft glowing band across a lane, in plane space */
    if(a<=.003)return;var g=c.createLinearGradient(x-len-blur,0,x+len+blur,0);
    g.addColorStop(0,"rgba(96,255,150,0)");g.addColorStop(.5,"rgba(150,255,170,"+a.toFixed(3)+")");g.addColorStop(1,"rgba(96,255,150,0)");
    c.fillStyle=g;c.fillRect(x-len-blur,y-hw,2*(len+blur),2*hw)}
  /* fragment populations per sample lane: size-rank r in [0,1] (0 = smallest, runs fastest), and the selected window */
  var POP=[null,{n:90,sel:[.42,.58],seed:1},{n:90,sel:[.26,.4],seed:2},{n:90,sel:[.58,.72],seed:3},{n:90,sel:[.36,.5],seed:4}];
  POP.forEach(function(p){if(!p)return;p.f=[];var r=p.seed*9301+49297;for(var i=0;i<p.n;i++){r=(r*9301+49297)%233280;var q=r/233280;
    var rk=i/(p.n-1);p.f.push({r:rk,i:.35+.65*Math.exp(-Math.pow((rk-.48)/.3,2))*(0.7+.3*q)})}});
  var LAD=[.08,.2,.33,.47,.62,.8,.95];
  var lastF=0,T=18;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?6.5:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    P=place(t,e);var s=P.s;
    c.globalAlpha=e;
    /* the cool light pool the instrument's blue LEDs throw under the cassette */
    var R=EXT.w*s*.62,gl=c.createRadialGradient(P.cx,P.cy+EXT.h*s*.08,0,P.cx,P.cy+EXT.h*s*.08,R);
    gl.addColorStop(0,"rgba(46,104,190,.26)");gl.addColorStop(.5,"rgba(30,70,140,.1)");gl.addColorStop(1,"rgba(6,20,40,0)");
    c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
    /* visible side walls (y=LY and x=0 faces), smoky moulded plastic */
    function quad(a,b,col){var p1=pt(a[0],a[1],TH),p2=pt(b[0],b[1],TH),p3=pt(b[0],b[1],0),p4=pt(a[0],a[1],0);c.setTransform(dpr,0,0,dpr,0,0);
      c.beginPath();c.moveTo(p1[0],p1[1]);c.lineTo(p2[0],p2[1]);c.lineTo(p3[0],p3[1]);c.lineTo(p4[0],p4[1]);c.closePath();c.fillStyle=col;c.fill();
      c.strokeStyle="rgba(170,200,240,.16)";c.lineWidth=1;c.beginPath();c.moveTo(p4[0],p4[1]);c.lineTo(p3[0],p3[1]);c.stroke()}
    quad([0,LY],[LX,LY],"rgba(20,44,78,.92)");quad([0,0],[0,LY],"rgba(14,32,60,.95)");
    /* top face */
    plane(TH);
    rr(0,0,LX,LY,12);var tg=c.createLinearGradient(0,0,LX,LY);tg.addColorStop(0,"rgba(34,66,110,.96)");tg.addColorStop(.55,"rgba(20,44,80,.97)");tg.addColorStop(1,"rgba(16,36,68,.98)");
    c.fillStyle=tg;c.fill();
    c.lineWidth=1.4/s;c.strokeStyle="rgba(190,215,250,.42)";c.stroke();
    rr(6,6,LX-12,LY-12,9);c.lineWidth=1/s;c.strokeStyle="rgba(190,215,250,.12)";c.stroke();
    /* a soft specular sheen across the moulding */
    var sh=c.createLinearGradient(80,0,360,LY);sh.addColorStop(0,"rgba(255,255,255,0)");sh.addColorStop(.48,"rgba(220,235,255,.07)");sh.addColorStop(.52,"rgba(220,235,255,.07)");sh.addColorStop(1,"rgba(255,255,255,0)");
    rr(0,0,LX,LY,12);c.fillStyle=sh;c.fill();
    /* buffer reservoirs with platinum electrode wires */
    [[18,48],[566,588]].forEach(function(b){rr(b[0],20,b[1]-b[0],LY-40,4);c.fillStyle="rgba(8,22,44,.9)";c.fill();c.strokeStyle="rgba(150,190,240,.28)";c.lineWidth=1/s;c.stroke();
      var mx=(b[0]+b[1])/2;c.strokeStyle="rgba(232,226,210,.75)";c.lineWidth=1.3/s;c.beginPath();c.moveTo(mx,26);c.lineTo(mx,LY-26);c.stroke();
      c.fillStyle="rgba(120,170,240,.07)";c.fillRect(b[0]+2,22,b[1]-b[0]-4,LY-44)});
    /* detection strip: blue LED light under the gel at the detector */
    var dg=c.createLinearGradient(DET-14,0,DET+14,0);dg.addColorStop(0,"rgba(70,140,255,0)");dg.addColorStop(.5,"rgba(90,160,255,.55)");dg.addColorStop(1,"rgba(70,140,255,0)");
    c.fillStyle=dg;c.fillRect(DET-14,24,28,LY-48);
    /* lanes */
    LANES.forEach(function(y,li){
      c.fillStyle="rgba(4,14,30,.85)";rr(X0-30,y-14,XE-X0+30,28,3);c.fill();
      var gg=c.createLinearGradient(X0-24,0,XE,0);gg.addColorStop(0,"rgba(120,170,255,.16)");gg.addColorStop(.62,"rgba(120,175,255,.22)");gg.addColorStop(.66,"rgba(140,190,255,.34)");gg.addColorStop(.7,"rgba(120,175,255,.2)");gg.addColorStop(1,"rgba(120,170,255,.12)");
      c.fillStyle=gg;c.fillRect(X0-24,y-10,XE-X0+24,20);
      c.strokeStyle="rgba(170,205,255,.32)";c.lineWidth=.9/s;c.strokeRect(X0-24,y-10,XE-X0+24,20);
      /* sample well */
      c.fillStyle="rgba(2,8,20,.95)";c.fillRect(X0-6,y-8,10,16);c.strokeStyle="rgba(190,215,250,.4)";c.strokeRect(X0-6,y-8,10,16);
      if(li>0){/* elution arm and chamber (on the sample lanes) */
        c.fillStyle="rgba(120,175,255,.2)";c.fillRect(BR,y+10,14,9);
        rr(BR-6,y+17,46,14,2);c.fillStyle="rgba(4,14,30,.9)";c.fill();c.strokeStyle="rgba(170,205,255,.4)";c.stroke();
        c.strokeStyle="rgba(235,240,250,.6)";c.lineWidth=1.2/s;c.beginPath();c.moveTo(BR-4,y+30);c.lineTo(BR+38,y+30);c.stroke();c.lineWidth=.9/s}
    });
    /* DNA: green fluorescence (lighter blend) */
    c.globalCompositeOperation="lighter";
    var tau=(t%T)/T,fade=sm(tau/.06)*(1-sm((tau-.9)/.1));
    /* marker ladder in lane 0 */
    LAD.forEach(function(r,j){var sp=1-.72*r,x=X0+4+(XE-X0)*sp*tau*1.25;if(x>XE-6)return;var a=(.5+.4*(j%2))*fade;
      band(x,LANES[0],1.6,8.5,a*.35,7);band(x,LANES[0],1.2,8,a,1.5)});
    POP.forEach(function(p,li){if(!p)return;var y=LANES[li],col=0;
      p.f.forEach(function(f){var sp=1-.72*f.r,x=X0+4+(XE-X0)*sp*tau*1.25,a=f.i*fade*.3;
        var inSel=f.r>=p.sel[0]&&f.r<=p.sel[1];
        if(inSel&&x>BR+4){/* diverted: down the arm into the chamber */
          var over=(x-BR-4)/26;if(over<1){c.save();var yy=y+over*20;band(BR+7,yy,1.4,6,a*.9,3);c.restore()}else col+=f.i;return}
        if(x>XE-6)return;
        band(x,y,2.2,9.5,a*.3,10);band(x,y,1.8,8,a,3.5)});
      /* the collected fraction glows in the elution chamber */
      if(col>0){var ca=Math.min(.75,col*.09)*fade;var cg=c.createRadialGradient(BR+17,y+24,0,BR+17,y+24,26);cg.addColorStop(0,"rgba(150,255,170,"+ca.toFixed(3)+")");cg.addColorStop(1,"rgba(90,255,140,0)");
        c.fillStyle=cg;c.fillRect(BR-12,y+8,58,32)}
    });
    c.globalCompositeOperation="source-over";
    c.setTransform(dpr,0,0,dpr,0,0);c.globalAlpha=1;
    if(!G.mob){
      var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.5,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(4,12,26,.7)");lv.addColorStop(.6,"rgba(4,12,26,.3)");lv.addColorStop(1,"rgba(4,12,26,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(6,20,40,0)");bv.addColorStop(1,"rgba(6,20,40,.7)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
    }else{
      var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh);mv.addColorStop(0,"rgba(6,20,40,0)");mv.addColorStop(.55,"rgba(6,20,40,.55)");mv.addColorStop(1,"rgba(6,20,40,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
      c.fillStyle=INK;c.fillRect(0,G.bh,w,h-G.bh+1);
    }
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){if(!G)return [w/2,h/2];var Q=place(0,1);return [Q.cx,Q.cy]}};
})();
