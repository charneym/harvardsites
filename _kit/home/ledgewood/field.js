/* ================= HERO FIELD: a granite ledge and white pines above a New Hampshire tidal river at first light.
   "Ledgewood" taken literally: the firm works from Exeter, on the Squamscott, where pine-topped granite meets the water.
   The sky runs from the firm's logo navy down to a pale dawn; the river mirrors the ledge and the pines. It moves on its
   own (water, drifting mist, the last stars), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,oFg=null,ST=[],GL=[],MI=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h;
    var hz=mob?U*.74:h*.66;
    var S=mob?U*.6:Math.min(h*.44,cw*.32);           /* ledge height scale */
    var lx=mob?w*.42:side+cw*.6;                    /* where the ledge leaves the water */
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,lx:lx,sun:mob?w*.2:side+cw*.34};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the ledge profile, left to right: a rounded granite nose out of the water, a shoulder, then the long glaciated crown
     running off the right edge; smoothed so it reads as weathered rock, not masonry */
  function ledgePts(){
    var S=G.S,x=G.lx,hz=G.hz,R=rng(11);
    var D=[[-.14,.0],[-.09,-.05],[-.02,-.09],[.0,-.1],[.03,-.25],[.11,-.27],[.13,-.39],[.25,-.42],[.27,-.5],[.41,-.53],[.44,-.61],[.6,-.64],[.63,-.7],[.84,-.72]];
    var K=D.map(function(d){return [x+d[0]*S,hz+d[1]*S]});
    var lx=x+S*.84;for(var k=1;lx<w+S*.3;k++){lx=x+S*.84+k*S*.2;var up=k%2?.03:0;K.push([lx-S*.02,hz-S*(.72+up+R()*.02)]);K.push([lx,hz-S*(.74+up+R()*.02)])}
    K[0][1]=hz+2;G.K=K;var P=K.slice();P.push([w+20,hz+2]);return P}
  function path(g,P){g.beginPath();P.forEach(function(p,k){k?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});g.closePath()}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(hz+4),g=A[1];oTop=A[0];
    /* first light: logo navy overhead, slate through the middle sky, pale silver-gold at the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#0b1230");sky.addColorStop(.3,"#18235a");sky.addColorStop(.55,"#3a4682");sky.addColorStop(.75,"#7c86b3");sky.addColorStop(.9,"#c3c2d4");sky.addColorStop(1,"#efe0c6");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+4);
    var sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,Math.max(w*.5,S*1.8));sg.addColorStop(0,"rgba(255,232,196,.62)");sg.addColorStop(.3,"rgba(240,214,196,.2)");sg.addColorStop(1,"rgba(200,190,220,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.5);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,0,w,hz*2);g.restore();
    var Rc=rng(7);for(var i=0;i<11;i++){var cy=hz*(.3+Rc()*.5),cx=Rc()*w,cwid=w*(.1+Rc()*.22),ch=U*(.01+Rc()*.014),a=.04+Rc()*.06;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(236,224,236,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(236,224,236,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    function hill(base,amp,col,seed){var Rr=rng(seed),ph=Rr()*6;g.fillStyle=col;g.beginPath();g.moveTo(-4,hz+2);
      for(var x=-4;x<=w+6;x+=6){g.lineTo(x,base-amp*(.55+.3*Math.sin(x*.0018+ph)+.15*Math.sin(x*.0057+ph*2)))}g.lineTo(w+6,hz+2);g.closePath();g.fill()}
    function trees(base,amp,col,seed,x1){var Rr=rng(seed),y=0,v=0;g.fillStyle=col;g.beginPath();g.moveTo(-4,hz+2);
      for(var x=-4;x<=x1;x+=2){v+=(Rr()-.5)*.6;v*=.92;y+=(v-y)*.14;var spire=Rr()<.04?amp*(.5+Rr()*.8):0;g.lineTo(x,base-Math.max(amp*.25,amp*(1+.4*Math.sin(x*.005+seed))+y*amp*1.5)-spire)}
      g.lineTo(x1,hz+2);g.closePath();g.fill()}
    hill(hz,U*.07,"rgba(96,104,150,.42)",3);
    hill(hz,U*.04,"rgba(64,72,118,.55)",5);
    trees(hz,U*.018,"#2a3360",9,G.lx);
    /* the granite ledge: stepped blocks split by vertical joints and sheet partings */
    var P=ledgePts(),x=G.lx;
    var lg=g.createLinearGradient(x,hz-S*.75,x+S*.6,hz);lg.addColorStop(0,"#2f375f");lg.addColorStop(.5,"#212849");lg.addColorStop(1,"#151b38");
    g.fillStyle=lg;path(g,P);g.fill();
    g.save();path(g,P);g.clip();
    var Rf=rng(31),K=G.K;
    for(var i2=0;i2<K.length-1;i2++){var p0=K[i2],p1=K[i2+1],dx=p1[0]-p0[0],dy=p1[1]-p0[1],steep=Math.abs(dy)>Math.abs(dx)*.9;
      if(steep){/* a west face turned to the dawn: lit plane, fading downward */
        var fg=g.createLinearGradient(p0[0],p1[1],p0[0]+S*.06,p0[1]+S*.2);fg.addColorStop(0,"rgba(206,204,222,.5)");fg.addColorStop(.5,"rgba(150,154,190,.22)");fg.addColorStop(1,"rgba(120,126,170,.04)");
        g.fillStyle=fg;g.beginPath();g.moveTo(p0[0],p0[1]);g.lineTo(p1[0],p1[1]);g.lineTo(p1[0]+S*.05,p1[1]+S*.02);g.lineTo(p0[0]+S*.04+S*.02,Math.min(hz,p0[1]+S*.22));g.lineTo(p0[0]-S*.01,Math.min(hz,p0[1]+S*.22));g.closePath();g.fill()}
      else{/* a top plane: thin lit band, then the shadowed front of the block below it */
        g.fillStyle="rgba(196,196,220,.26)";g.beginPath();g.moveTo(p0[0],p0[1]);g.lineTo(p1[0],p1[1]);g.lineTo(p1[0],p1[1]+S*.022);g.lineTo(p0[0]+S*.02,p0[1]+S*.026);g.closePath();g.fill();
        /* irregular blocks: each slab between joints has its own tone, joints of uneven length and angle */
        var cuts=[p0[0]],cx2=p0[0];while(true){cx2+=S*(.06+Rf()*.12);if(cx2>p1[0]-S*.03)break;cuts.push(cx2)}cuts.push(p1[0]);
        for(var cb=0;cb<cuts.length-1;cb++){var c0=cuts[cb],c1=cuts[cb+1],ty0=p0[1]+dy*((c0-p0[0])/dx),bh=S*(.12+Rf()*.32),tone=Rf();
          g.fillStyle=tone<.5?"rgba(170,174,206,"+(.04+tone*.12).toFixed(3)+")":"rgba(6,9,24,"+((tone-.5)*.3).toFixed(3)+")";g.beginPath();g.moveTo(c0,ty0+S*.02);g.lineTo(c1,ty0+S*.02+dy*((c1-c0)/dx));g.lineTo(c1+(Rf()-.5)*S*.02,ty0+bh);g.lineTo(c0,ty0+bh*(.8+Rf()*.3));g.closePath();g.fill();
          if(cb>0){var jl=S*(.06+Rf()*.36),ang=(Rf()-.5)*S*.05;g.strokeStyle="rgba(6,9,24,.62)";g.lineWidth=Math.max(1,S*.006);g.beginPath();g.moveTo(c0,ty0+S*.01);g.lineTo(c0+ang*.4,ty0+jl*.5);g.lineTo(c0+ang,ty0+jl);g.stroke();
            g.strokeStyle="rgba(206,204,222,.14)";g.lineWidth=Math.max(.6,S*.003);g.beginPath();g.moveTo(c0-S*.006,ty0+S*.012);g.lineTo(c0-S*.006+ang*.4,ty0+jl*.45);g.stroke()}
          /* an occasional diagonal fracture across the slab */
          if(Rf()<.35){var fx0=c0+(c1-c0)*Rf(),fy0=ty0+S*(.05+Rf()*.12);g.strokeStyle="rgba(6,9,24,.45)";g.lineWidth=Math.max(.8,S*.004);g.beginPath();g.moveTo(fx0,fy0);g.lineTo(fx0+(c1-c0)*.5*(Rf()<.5?-1:1),fy0+S*(.04+Rf()*.06));g.stroke()}}
        /* lichen and water streaks running down from the lip */
        for(var lk=0;lk<Math.max(2,dx/(S*.05));lk++){var lx2=p0[0]+Rf()*dx,ly2=p0[1]+S*.02,ll=S*(.08+Rf()*.25),lw2=S*(.006+Rf()*.014),lgr=g.createLinearGradient(0,ly2,0,ly2+ll);lgr.addColorStop(0,"rgba(6,9,24,.34)");lgr.addColorStop(1,"rgba(6,9,24,0)");g.fillStyle=lgr;g.fillRect(lx2,ly2,lw2,ll)}}}
    /* granular speckle */
    for(var sp=0;sp<(G.mob?600:1800);sp++){var spx=x+Rf()*(w-x),spy=hz-Rf()*S*.75;g.fillStyle=Rf()<.5?"rgba(220,220,236,.07)":"rgba(4,6,20,.16)";g.fillRect(spx,spy,1,1)}
    var vs=g.createLinearGradient(0,hz-S*.3,0,hz);vs.addColorStop(0,"rgba(8,12,30,0)");vs.addColorStop(1,"rgba(8,12,30,.55)");g.fillStyle=vs;g.fillRect(x-S*.2,hz-S*.3,w,S*.3+4);
    g.restore();
    /* rim of dawn along the lips */
    g.strokeStyle="rgba(240,228,214,.55)";g.lineWidth=Math.max(.8,S*.004);g.beginPath();for(var r=0;r<K.length*.6;r++){r?g.lineTo(K[r][0],K[r][1]):g.moveTo(K[r][0],K[r][1])}g.stroke();
    /* talus: fallen blocks heaped at the waterline */
    var Rb=rng(53);for(var tb=0;tb<(G.mob?16:34);tb++){var u=Rb(),bx=x-S*.18+u*S*(G.mob?.9:1.3),br=S*(.014+Rb()*.035)*(1.2-u*.5),by=hz+br*.3-Rb()*S*.035;boulder(g,bx,by,br,Rb)}
    /* scrub on the crown */
    var Rs=rng(41);g.fillStyle="#121834";for(var s2=0;s2<(G.mob?14:30);s2++){var sx=x+S*(.12+Rs()*1.7),sy2=crownY(P,sx)+2,sr=S*(.01+Rs()*.016);g.beginPath();g.ellipse(sx,sy2,sr*1.8,sr,0,Math.PI,0);g.fill()}
    /* eastern white pines */
    var pines=G.mob?[[.2,.72,-.03,1],[.48,1.08,.04,1],[.74,.66,.02,0],[1.0,.96,.05,1]]:[[.18,.7,-.03,1],[.4,1.1,.05,1],[.58,.62,.02,0],[.84,1.2,.06,1],[1.08,.84,.03,0],[1.32,1.04,.05,1],[1.58,.78,.02,0]];
    pines.forEach(function(p,k){var px=x+S*p[0];if(px>w+S*.25)return;pine(g,px,crownY(P,px)+4,S*.55*p[1],p[2],101+k*17,p[3])});
    /* the near shore, for the foreground layer: dark rocks and marsh grass along the bottom edge */
    var FG=mk(h+2);oFg=FG[0];var f=FG[1],wb=G.mob?U*1.05:h,fy=G.mob?wb:h,Rn=rng(77);
    var gx0=G.mob?w*.5:G.side+G.cw*.5;
    f.fillStyle="#0a1028";f.beginPath();f.moveTo(gx0-S*.2,fy+2);for(var nx=gx0-S*.2;nx<=w+4;nx+=4){f.lineTo(nx,fy-S*(.03+.07*sm((nx-gx0)/(S*.7)))-Math.sin(nx*.02)*S*.008)}f.lineTo(w+4,fy+2);f.closePath();f.fill();
    /* dawn along the top of the near bank, and a wet reflection band below it */
    f.strokeStyle="rgba(206,202,222,.28)";f.lineWidth=Math.max(.8,S*.004);f.beginPath();for(var nx2=gx0-S*.15;nx2<=w+4;nx2+=4){var ny2=fy-S*(.03+.07*sm((nx2-gx0)/(S*.7)))-Math.sin(nx2*.02)*S*.008;nx2>gx0-S*.15?f.lineTo(nx2,ny2):f.moveTo(nx2,ny2)}f.stroke();
    for(var nb=0;nb<(G.mob?4:7);nb++){var rx=gx0+S*(.1+Rn()*1.4),rr=S*(.03+Rn()*.05);if(rx>w)continue;boulder(f,rx,fy-S*.06,rr,Rn)}
    f.lineCap="round";for(var gr=0;gr<(G.mob?160:420);gr++){var bxx=gx0-S*.1+Rn()*(w-gx0+S*.1),hh=S*(.06+Rn()*.16)*sm((bxx-gx0+S*.1)/(S*.5)),lean=(Rn()-.3)*.5;if(hh<2)continue;
      f.strokeStyle=Rn()<.38?"rgba(196,190,204,.55)":"rgba(10,14,34,.95)";f.lineWidth=Math.max(.6,S*.0028);f.beginPath();f.moveTo(bxx,fy-S*.03*sm((bxx-gx0)/(S*.7))-S*.01);f.quadraticCurveTo(bxx+lean*hh*.3,fy-hh*.6,bxx+lean*hh,fy-hh);f.stroke()}
    ST=[];var Rt=rng(3),n=G.mob?24:70;for(var t=0;t<n;t++){var syy=Math.pow(Rt(),1.6)*hz*.4;ST.push([Rt()*w,syy,.3+Rt()*.8,Rt()*6.28,.4+Rt()*1.2,1-syy/(hz*.4)])}
    GL=[];var Rg=rng(19);for(var gq=0;gq<(G.mob?30:70);gq++)GL.push([Rg(),Rg(),Rg()*6.28,.5+Rg()]);
    MI=[];var Rm=rng(23);for(var m=0;m<(G.mob?6:11);m++)MI.push([Rm(),Rm(),.4+Rm()*.6,.3+Rm()*.7]);
  }
  function boulder(g,x,y,r,R){var n=6+Math.floor(R()*3),pts=[];for(var i=0;i<n;i++){var a=Math.PI+i/(n-1)*Math.PI,rr=r*(.75+R()*.4);pts.push([x+Math.cos(a)*rr*1.3,y+Math.sin(a)*rr*(.7+R()*.2)])}
    var bg=g.createLinearGradient(x-r,y-r,x+r,y);bg.addColorStop(0,"#3e4670");bg.addColorStop(.45,"#1e2548");bg.addColorStop(1,"#0d1229");g.fillStyle=bg;g.beginPath();g.moveTo(x+r*1.3,y+r*.15);pts.reverse().forEach(function(p){g.lineTo(p[0],p[1])});g.lineTo(x-r*1.3,y+r*.15);g.closePath();g.fill();
    g.strokeStyle="rgba(232,224,220,.18)";g.lineWidth=Math.max(.6,r*.04);g.beginPath();var q=pts.slice().reverse();q.slice(0,Math.ceil(n*.55)).forEach(function(p,k){k?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});g.stroke()}
  function crownY(P,px){for(var k=1;k<P.length-1;k++){if(P[k][0]<=px&&P[k+1][0]>=px){var u=(px-P[k][0])/(P[k+1][0]-P[k][0]||1);return P[k][1]+(P[k+1][1]-P[k][1])*u}}return G.hz-G.S*.7}
  /* a soft plume of needles: overlapping flattened masses, rim-lit on the dawn (left, upper) side */
  function plume(g,x,y,rw,rh,R,rim){
    var n=6+Math.floor(R()*5),B=[];for(var i=0;i<n;i++){var ox=(R()-.5)*2;B.push([x+ox*rw,y+(R()-.6)*rh*(1-Math.abs(ox)*.5),rw*(.22+R()*.3),rh*(.35+R()*.35)])}
    if(rim){g.fillStyle="rgba(222,214,214,.3)";B.forEach(function(b){g.beginPath();g.ellipse(b[0]-b[2]*.12,b[1]-b[3]*.3,b[2],b[3],0,0,Math.PI*2);g.fill()})}
    g.fillStyle="#0c1128";B.forEach(function(b){g.beginPath();g.ellipse(b[0],b[1],b[2],b[3],0,0,Math.PI*2);g.fill()});
    /* needle fringe on the edges */
    g.strokeStyle="#0c1128";g.lineWidth=Math.max(.5,rh*.06);g.beginPath();for(var k=0;k<n*5;k++){var b2=B[k%n],an=R()*Math.PI*2,ex=b2[0]+Math.cos(an)*b2[2],ey=b2[1]+Math.sin(an)*b2[3];g.moveTo(ex,ey);g.lineTo(ex+Math.cos(an)*rh*.5,ey+Math.sin(an)*rh*.4)}g.stroke()}
  function pine(g,x,y,H,lean,seed,flag){
    var R=rng(seed),col="#0c1128",tw=Math.max(1.4,H*.018);
    /* trunk: leaning, with a slight dog-leg */
    var mx=x+H*lean*.35+H*.02*(R()-.5),tx=x+H*lean,ty=y-H;
    g.strokeStyle=col;g.lineCap="round";g.lineWidth=tw;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(mx,y-H*.55,tx,ty);g.stroke();
    function tp(u){var a=1-u;return [a*a*x+2*a*u*mx+u*u*tx,a*a*y+2*a*u*(y-H*.55)+u*u*ty]}
    /* white pine habit: a long bare bole, then a few wide, widely spaced tiers swept to leeward, needles massed at the branch ends */
    var tiers=[.5,.62,.73,.83,.92].filter(function(u,i){return i===4||R()>.22});
    tiers.forEach(function(u,i){var P0=tp(u),reachL=H*(.34*(1-u)+.1)*(.75+R()*.55),reachW=reachL*(flag?.22:.55)*(.5+R()*.7),droop=H*.012;
      [[1,reachL],[-1,reachW]].forEach(function(sd){var d=sd[0],L=sd[1];if(L<H*.05)return;
        g.strokeStyle=col;g.lineWidth=Math.max(.8,tw*.42);var ex=P0[0]+d*L,ey=P0[1]-L*.14;g.beginPath();g.moveTo(P0[0],P0[1]);g.quadraticCurveTo(P0[0]+d*L*.55,P0[1]+droop,ex,ey);g.stroke();
        var np=1+Math.floor(R()*2)+(L>H*.18?1:0);for(var k=0;k<np;k++){var v=1-k*(.22+R()*.12),px=P0[0]+d*L*v,py=P0[1]+droop*v*(1-v)*4-L*.14*v*v-H*.012;
          plume(g,px-d*H*.02,py,H*(.055+R()*.035),H*(.02+R()*.01),R,true)}})});
    /* the crown: a broad flat-topped plume, leaning with the wind */
    plume(g,tx+H*.03,ty+H*.01,H*.07,H*.03,R,true);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,wb=G.mob?U*1.05:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    for(var i=0;i<ST.length;i++){var s=ST[i],a=s[5]*(.45+.55*Math.sin(t*s[4]+s[3]))*.6;if(a<.05)continue;c.fillStyle="rgba(236,238,255,"+a.toFixed(3)+")";c.fillRect(s[0],s[1],s[2],s[2])}
    /* the river */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#5d6592");wg.addColorStop(.12,"#323c6c");wg.addColorStop(.6,"#18204a");wg.addColorStop(1,"#0e1530");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz),sw=Math.round(w*dpr);c.globalAlpha=e*.62;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.12+t*1.2)*(.5+k*4.5)+Math.sin(y*.041-t*.6)*(k*2.6),sy=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(14,21,48,.1)");dkn.addColorStop(.5,"rgba(14,21,48,.32)");dkn.addColorStop(1,"rgba(14,21,48,.6)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* a bright seam of light on the water under the dawn */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],gy=hz+Math.pow(gq[1],1.6)*(wb-hz)*.8+2,spread=S*(.4+gq[1]*1.4),gx=G.sun+(gq[0]-.5)*spread*2,ga=(.5+.5*Math.sin(t*gq[3]*1.6+gq[2]))*(1-gq[1])*.2,gl=4+S*.05*(1-gq[1]);
      c.fillStyle="rgba(255,236,206,"+ga.toFixed(3)+")";c.fillRect(gx+Math.sin(t*.5+gq[2])*6,gy,gl,1)}
    c.globalCompositeOperation="source-over";
    /* morning mist drifting low over the water and the foot of the ledge */
    for(var m=0;m<MI.length;m++){var mi=MI[m],mx=((mi[0]*w*1.4+t*(6+mi[3]*8))%(w*1.4))-w*.2,my=hz-S*.02+Math.pow(mi[1],1.3)*(wb-hz)*.85,mw=w*(.18+mi[2]*.2),mh=S*.05;
      c.save();c.translate(mx,my);c.scale(1,mh/mw);var mg=c.createRadialGradient(0,0,0,0,0,mw);mg.addColorStop(0,"rgba(214,218,236,"+(.16*mi[2]).toFixed(3)+")");mg.addColorStop(1,"rgba(214,218,236,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,mw,0,Math.PI*2);c.fill();c.restore()}
    /* ripple lines across the lower water */
    c.strokeStyle="rgba(200,206,236,.06)";c.lineWidth=1;c.beginPath();for(var rl=0;rl<(G.mob?14:30);rl++){var rk=(rl+.5)/(G.mob?14:30),ry=hz+(wb-hz)*(.2+rk*.75),rx=((rl*197.3+t*(4+rl%3*2))%(w*1.2))-w*.1,rw=w*(.04+.1*rk);c.moveTo(rx,ry);c.lineTo(rx+rw,ry)}c.stroke();
    c.drawImage(oFg,0,0,w,h+2);
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(10,15,36,.5)");lv.addColorStop(1,"rgba(10,15,36,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.lx+G.S*.6,G.hz-G.S*.8]:[w/2,h/2]}};
})();
