/* ================= HERO FIELD: the NanoSelect cell, seen from above and in front. A glass microfluidic chip with an
   etched capillary that widens into a cavity; two mirrors outside the chip hold a green laser standing wave across the
   cavity at 45 degrees to the flow. A mixed stream of particles (logo blue, steel, pale) flows in from the left; at the
   fringes the larger particles are carried along the beam, and a barrier at the right sends them to their own outlet.
   Palette: logo navy, logo green (laser), logo blue (small particles), bone. ================= */
var CHIP=(function(){
  var KX=.2,KY=.74,KZ=.92,DEPTH=14,ZP=-7;
  var BONE="236,241,240",GRN="76,190,149",GRNL="132,230,190",BLUE="91,143,208";
  function R(i,k){var x=Math.sin(i*91.7+k*13.3)*43758.5453;return x-Math.floor(x)}
  function cl(x){return x<0?0:x>1?1:x}
  function sm(x){x=cl(x);return x*x*(3-2*x)}
  function P(x,y,z){return [x+y*KX,y*KY-(z||0)*KZ]}
  /* channel outline in the chip plane: inlet, chamfer, cavity, chamfer, outlet */
  var CH=[[-660,-42],[-196,-42],[-146,-128],[146,-128],[196,-86],[660,-86],[660,86],[196,86],[146,128],[-146,128],[-196,42],[-660,42]];
  var SEPT=[[226,-18],[256,-23],[660,-23],[660,-13],[256,-13]];
  var A=[-272,272],B=[272,-272],U=[.7071,-.7071],NM=[.7071,.7071],BW=17;
  /* particles: small (blue), medium (steel), large (pale); the large are the ones the cavity is tuned to select */
  var PS=[];(function(){for(var i=0;i<58;i++){var q=R(i,1),k=q<.42?0:q<.76?1:2;
    PS.push({i:i,k:k,y0:-4+36*R(i,2),off:R(i,3)*1320,v:.92+.16*R(i,4),r:[2.3,3.7,6.1][k]*(.9+.2*R(i,5)),D:[5,13,92][k],ph:R(i,6)*6.28})}})();
  function ppos(p,t,L,sep){
    var xf=-660+((t*58*p.v+p.off)%1320),q=xf+p.y0,s=sm((q+16)/130),d=p.D*L*sep*s;
    var x=xf+d*.42,y=p.y0-d*.72+Math.sin(t*1.3+p.ph)*1.1;
    var g=L*cl(1-Math.abs(x+y)/(1.414*(BW+4)));
    var fade=cl((xf+660)/50)*cl((660-xf)/50);
    return {x:x,y:y,g:g,f:fade}}
  function poly(c,T,pts,z){c.beginPath();for(var i=0;i<pts.length;i++){var s=T(pts[i][0],pts[i][1],z);i?c.lineTo(s[0],s[1]):c.moveTo(s[0],s[1])}c.closePath()}
  /* a mirror on its post: a short slab across the beam, its silvered face toward the cavity */
  function mirror(c,T,M,face,al,L,S){
    /* face: +1 when the silvered side looks along +U (toward the other mirror) */
    var hw=46,dep=12,zl=-30,zh=26;
    function W(a,b){return [M[0]+NM[0]*a+U[0]*b,M[1]+NM[1]*a+U[1]*b]}
    var bk=-face*dep,c00=W(-hw,0),c01=W(hw,0),c10=W(-hw,bk),c11=W(hw,bk);
    /* post down to the bench */
    var pb=W(0,bk/2),q0=T(pb[0],pb[1],zl),q1=T(pb[0],pb[1],zl-110);
    c.strokeStyle="rgba("+BONE+","+(.2*al).toFixed(3)+")";c.lineWidth=Math.max(1,5*S);c.beginPath();c.moveTo(q0[0],q0[1]);c.lineTo(q1[0],q1[1]);c.stroke();
    var faces=[{q:[c00,c01],silver:true},{q:[c10,c11]},{q:[c00,c10]},{q:[c01,c11]}];
    faces.forEach(function(F){F.my=(F.q[0][1]+F.q[1][1])/2});faces.sort(function(a,b){return a.my-b.my});
    c.lineWidth=1;c.strokeStyle="rgba("+BONE+","+(.32*al).toFixed(3)+")";
    faces.forEach(function(F){var a=F.q[0],b=F.q[1],p0=T(a[0],a[1],zh),p1=T(b[0],b[1],zh),p2=T(b[0],b[1],zl),p3=T(a[0],a[1],zl);
      c.beginPath();c.moveTo(p0[0],p0[1]);c.lineTo(p1[0],p1[1]);c.lineTo(p2[0],p2[1]);c.lineTo(p3[0],p3[1]);c.closePath();
      if(F.silver){var g=c.createLinearGradient(p0[0],p0[1],p2[0],p2[1]);g.addColorStop(0,"rgba(220,232,236,"+(.7*al)+")");g.addColorStop(.45,"rgba(128,158,174,"+(.6*al)+")");g.addColorStop(1,"rgba(52,86,106,"+(.8*al)+")");c.fillStyle=g}
      else c.fillStyle="rgba(14,50,72,"+(.96*al)+")";
      c.fill();c.stroke()});
    var t0=T(c00[0],c00[1],zh),t1=T(c01[0],c01[1],zh),t2=T(c11[0],c11[1],zh),t3=T(c10[0],c10[1],zh);
    c.beginPath();c.moveTo(t0[0],t0[1]);c.lineTo(t1[0],t1[1]);c.lineTo(t2[0],t2[1]);c.lineTo(t3[0],t3[1]);c.closePath();c.fillStyle="rgba(40,84,108,"+(.95*al)+")";c.fill();c.stroke();
    if(L>.01){var cc=T(M[0],M[1],ZP),rr=Math.max(4,30*S);var gg=c.createRadialGradient(cc[0],cc[1],0,cc[0],cc[1],rr);gg.addColorStop(0,"rgba("+GRNL+","+(.6*L*al)+")");gg.addColorStop(1,"rgba("+GRN+",0)");
      c.save();c.globalCompositeOperation="lighter";c.fillStyle=gg;c.beginPath();c.arc(cc[0],cc[1],rr,0,6.283);c.fill();c.restore()}
  }
  /* o: {S,ox,oy,cx,cy,al,t,L,sep} ; returns {toScreen, parts} */
  function draw(c,o){
    var S=o.S,al=o.al==null?1:o.al,L=o.L==null?1:o.L,sep=o.sep==null?1:o.sep,t=o.t||0;
    function T(x,y,z){var p=P(x,y,z);return [o.ox+(p[0]-o.cx)*S,o.oy+(p[1]-o.cy)*S]}
    c.lineJoin="round";
    /* back mirror first (it stands behind the chip) */
    mirror(c,T,[B[0]+U[0]*14,B[1]+U[1]*14],-1,al,L,S);
    /* glass slab: front face, top face */
    var X0=-700,X1=700,Y0=-226,Y1=226,TH=30;
    var f0=T(X0,Y1,0),f1=T(X1,Y1,0),f2=T(X1,Y1,-TH),f3=T(X0,Y1,-TH);
    c.beginPath();c.moveTo(f0[0],f0[1]);c.lineTo(f1[0],f1[1]);c.lineTo(f2[0],f2[1]);c.lineTo(f3[0],f3[1]);c.closePath();
    var gf=c.createLinearGradient(0,f0[1],0,f3[1]);gf.addColorStop(0,"rgba("+BONE+","+(.13*al)+")");gf.addColorStop(1,"rgba("+BONE+","+(.03*al)+")");c.fillStyle=gf;c.fill();
    poly(c,T,[[X0,Y0],[X1,Y0],[X1,Y1],[X0,Y1]],0);
    var t0=T(0,Y0,0),t1=T(0,Y1,0),gt=c.createLinearGradient(t0[0],t0[1],t1[0],t1[1]);
    gt.addColorStop(0,"rgba("+BONE+","+(.02*al)+")");gt.addColorStop(.7,"rgba("+BONE+","+(.05*al)+")");gt.addColorStop(1,"rgba("+BONE+","+(.08*al)+")");c.fillStyle=gt;c.fill();
    c.strokeStyle="rgba("+BONE+","+(.2*al)+")";c.lineWidth=1;c.stroke();
    /* channel: floor (liquid), then walls at the top surface */
    poly(c,T,CH,-DEPTH);var lq0=T(0,-128,-DEPTH),lq1=T(0,128,-DEPTH),gl=c.createLinearGradient(lq0[0],lq0[1],lq1[0],lq1[1]);
    gl.addColorStop(0,"rgba(62,119,188,"+(.30*al)+")");gl.addColorStop(1,"rgba(62,119,188,"+(.16*al)+")");c.fillStyle=gl;c.fill();
    c.strokeStyle="rgba("+BONE+","+(.13*al)+")";c.stroke();
    /* the back walls of the etched channel (visible inner faces) */
    c.fillStyle="rgba("+BONE+","+(.07*al)+")";
    for(var i=0;i<CH.length;i++){var a=CH[i],b=CH[(i+1)%CH.length];if(a[1]>0||b[1]>0)continue;
      var p0=T(a[0],a[1],0),p1=T(b[0],b[1],0),p2=T(b[0],b[1],-DEPTH),p3=T(a[0],a[1],-DEPTH);
      c.beginPath();c.moveTo(p0[0],p0[1]);c.lineTo(p1[0],p1[1]);c.lineTo(p2[0],p2[1]);c.lineTo(p3[0],p3[1]);c.closePath();c.fill()}
    /* barrier: a thin raised wall that splits the outlet */
    poly(c,T,SEPT,-DEPTH);c.fillStyle="rgba("+BONE+","+(.16*al)+")";c.fill();
    poly(c,T,SEPT,0);c.fillStyle="rgba(150,180,196,"+(.32*al)+")";c.fill();c.strokeStyle="rgba("+BONE+","+(.5*al)+")";c.lineWidth=1;c.stroke();
    /* particles, back to front */
    var parts=PS.map(function(p){var q=ppos(p,t,L,sep);q.p=p;return q}).sort(function(a,b){return a.y-b.y});
    for(i=0;i<parts.length;i++){var q=parts[i],p=q.p,s=T(q.x,q.y,ZP),r=Math.max(.9,p.r*S),a2=al*q.f;if(a2<.01)continue;
      q.sx=s[0];q.sy=s[1];q.sr=r;
      if(q.g>.02){var gr=c.createRadialGradient(s[0],s[1],0,s[0],s[1],r*4);gr.addColorStop(0,"rgba("+GRNL+","+(.55*q.g*a2)+")");gr.addColorStop(1,"rgba("+GRN+",0)");c.fillStyle=gr;c.beginPath();c.arc(s[0],s[1],r*4,0,6.283);c.fill()}
      var col=p.k===0?BLUE:p.k===1?"150,176,192":"226,236,232";
      var gp=c.createRadialGradient(s[0]-r*.35,s[1]-r*.4,r*.1,s[0],s[1],r);gp.addColorStop(0,"rgba(255,255,255,"+(.9*a2)+")");gp.addColorStop(.35,"rgba("+col+","+a2+")");gp.addColorStop(1,"rgba("+col+","+(.55*a2)+")");
      c.fillStyle=gp;c.beginPath();c.arc(s[0],s[1],r,0,6.283);c.fill()}
    /* the laser: soft glow, the beam, then the standing-wave fringes */
    if(L>.005){c.save();c.globalCompositeOperation="lighter";
      var a0=[A[0]-U[0]*14,A[1]-U[1]*14],b0=[B[0]+U[0]*14,B[1]+U[1]*14],mid=T(0,0,ZP);
      function band(w,a){var e0=T(a0[0]+NM[0]*w,a0[1]+NM[1]*w,ZP),e1=T(b0[0]+NM[0]*w,b0[1]+NM[1]*w,ZP),e2=T(b0[0]-NM[0]*w,b0[1]-NM[1]*w,ZP),e3=T(a0[0]-NM[0]*w,a0[1]-NM[1]*w,ZP);
        var k0=T(NM[0]*w,NM[1]*w,ZP),k1=T(-NM[0]*w,-NM[1]*w,ZP),g=c.createLinearGradient(k0[0],k0[1],k1[0],k1[1]);
        g.addColorStop(0,"rgba("+GRN+",0)");g.addColorStop(.5,"rgba("+GRNL+","+(a*L*al)+")");g.addColorStop(1,"rgba("+GRN+",0)");
        c.fillStyle=g;c.beginPath();c.moveTo(e0[0],e0[1]);c.lineTo(e1[0],e1[1]);c.lineTo(e2[0],e2[1]);c.lineTo(e3[0],e3[1]);c.closePath();c.fill()}
      band(70,.07);band(BW,.34);
      var lenB=Math.hypot(b0[0]-a0[0],b0[1]-a0[1]);
      for(var sft=-lenB/2;sft<=lenB/2;sft+=8.5){var cx0=U[0]*sft,cy0=U[1]*sft;
        var inside=Math.abs(cy0)<226?1:.45,fl=.75+.25*Math.sin(t*1.7+sft*.05);
        var e0=T(cx0+NM[0]*BW*.85,cy0+NM[1]*BW*.85,ZP),e1=T(cx0-NM[0]*BW*.85,cy0-NM[1]*BW*.85,ZP);
        c.strokeStyle="rgba(196,255,226,"+(.3*L*al*inside*fl)+")";c.lineWidth=Math.max(.7,1.3*S);c.beginPath();c.moveTo(e0[0],e0[1]);c.lineTo(e1[0],e1[1]);c.stroke()}
      var s0=T(a0[0],a0[1],ZP),s1=T(b0[0],b0[1],ZP);c.strokeStyle="rgba(210,255,232,"+(.35*L*al)+")";c.lineWidth=Math.max(.6,.9*S);c.beginPath();c.moveTo(s0[0],s0[1]);c.lineTo(s1[0],s1[1]);c.stroke();
      c.restore()}
    /* the top surface: bright front edge and a soft specular streak across the glass */
    c.strokeStyle="rgba("+BONE+","+(.42*al)+")";c.lineWidth=1.1;poly(c,T,CH,0);c.stroke();
    var e0=T(X0,Y1,0),e1=T(X1,Y1,0);c.strokeStyle="rgba("+BONE+","+(.5*al)+")";c.beginPath();c.moveTo(e0[0],e0[1]);c.lineTo(e1[0],e1[1]);c.stroke();
    /* front mirror last (it stands in front of the chip) */
    mirror(c,T,[A[0]-U[0]*14,A[1]-U[1]*14],1,al,L,S);
    return {toScreen:function(x,y,z){return T(x,y,z==null?ZP:z)},parts:parts,P:P};
  }
  return {draw:draw,P:P,A:A,B:B,U:U,NM:NM,SEPT:SEPT};
})();
var field=(function(){
  var LAST=null,cv=$("#field"),c=cv.getContext("2d"),dpr=1,W=0,H=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,TX=0;
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);if(!running)frame(true)}
  function layout(){
    /* the cell lives right of the text column, in the SAME container as the header and the text; the chip runs off both sides */
    var gut=Math.max(16,Math.min(72,W*.042)),side=Math.max(gut,(W-1320)/2),cw=W-2*side;
    if(W<861){var Sm=Math.min(W/490,H*.28/300);return {S:Sm,ox:W*.5,oy:H*.25,cx:-50,cy:56}}
    var x0=TX?TX+120:side+cw*.47,x1=W-side*.4,rw=Math.max(240,x1-x0);
    var S=Math.min(H*.8/470,rw/600);
    return {S:S,ox:(x0+x1)/2,oy:H*.5,cx:10,cy:-8};
  }
  function frame(once){
    var t=RM?14:(performance.now()-t0)/1000;
    dim+=(dimT-dim)*.08;
    var Lr=layout();LAST=Lr;var e=IN.v*IN.v*(3-2*IN.v);
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,W,H);
    /* CW: on phones the art lives in its own band above the eyebrow, scrolls with the page and fades out before the text */
    var band=0,sy=0;if(W<861){var eb=document.querySelector("#view .hero .eyebrow");sy=window.scrollY;band=eb?eb.getBoundingClientRect().top-22:H*.4;
      if(band<=0)return next(once);c.save();c.beginPath();c.rect(0,0,W,band);c.clip()}
    CHIP.draw(c,{S:Lr.S*(.97+.03*e),ox:Lr.ox,oy:Lr.oy-sy+(1-e)*16,cx:Lr.cx,cy:Lr.cy,al:dim*e,t:t,L:e,sep:1});
    if(!band&&TX>0){c.save();c.globalCompositeOperation="destination-out";c.fillStyle="#000";c.fillRect(0,0,TX+30,H);
      var xg=c.createLinearGradient(TX+30,0,TX+150,0);xg.addColorStop(0,"rgba(0,0,0,1)");xg.addColorStop(1,"rgba(0,0,0,0)");c.fillStyle=xg;c.fillRect(TX+30,0,120,H);c.restore()}
    if(band){c.restore();c.save();c.globalCompositeOperation="destination-out";var fg=c.createLinearGradient(0,band-70,0,band);fg.addColorStop(0,"rgba(0,0,0,0)");fg.addColorStop(1,"rgba(0,0,0,1)");c.fillStyle=fg;c.fillRect(0,band-70,W,70);c.restore()}
    next(once);
  }
  function next(once){
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var mT2;addEventListener("resize",function(){size();clearTimeout(mT2);mT2=setTimeout(meas,400)});size();setTimeout(meas,1600);
  return {start:start,stop:stop,once:function(){frame(true)},
   intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},
   setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},
   measure:meas,setScroll:function(){},running:function(){return running},
   focus:function(){var L=LAST||layout();return [L.ox,L.oy]}};
  /* right edge of the first-screen text column, measured from the glyphs themselves */
  function meas(){TX=0;if(innerWidth<861)return;var els=$$("#view .hero .eyebrow, #view .hero h1 .l, #view .hero .hero-foot .s, #view .hero .hero-foot .btn");
     els.forEach(function(el){var rg=document.createRange();rg.selectNodeContents(el);[].forEach.call(rg.getClientRects(),function(q){if(q.width>0&&q.right>TX)TX=q.right})});
     if(!running)frame(true)}
})();
