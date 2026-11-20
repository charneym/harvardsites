/* ================= HERO FIELD: dawn at Cape Florida. The white brick tower of the Cape Florida Lighthouse (1825/1846) at the
   tip of Key Biscayne, across the bay from the firm's Miami office, stands among palms and sea grape as the sun comes up out of
   the Atlantic. Its lantern still turns, the bay mirrors the sky, pelicans glide by. It animates on its own (light, water,
   birds), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,ST=[],GL=[],BD=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*.86):h;
    var hz=mob?U*.8:h*.7;
    var Ht=mob?U*.6:Math.min(h*.5,cw*.3);
    var cx=mob?w*.62:side+cw*.76;
    var gy=hz-Ht*.045;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,Ht:Ht,cx:cx,gy:gy,top:gy-Ht,sun:mob?w*.3:side+cw*.5,spitL:cx-Ht*(mob?.95:1.05)};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* a coconut palm: a leaning, tapering trunk and a crown of arching fronds, each a spine with angled leaflets */
  function palm(g,x,y,H,lean,seed,col){
    var R=rng(seed),tx=x+lean*H,ty=y-H,cxp=x+lean*H*.15+H*.05*(R()-.5),cyp=y-H*.6;
    g.fillStyle=col;g.strokeStyle=col;g.lineCap="round";
    g.beginPath();var bw=H*.03,tw=H*.017;
    g.moveTo(x-bw,y);g.quadraticCurveTo(cxp-bw*.8,cyp,tx-tw,ty);g.lineTo(tx+tw,ty);g.quadraticCurveTo(cxp+bw*.8,cyp,x+bw,y);g.closePath();g.fill();
    var n=11+Math.floor(R()*3);
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(i/(n-1)-.5)*Math.PI*1.75+(R()-.5)*.22,L=H*(.34+R()*.14)*(1-.25*Math.abs(Math.sin(a+Math.PI/2))*0),up=-Math.sin(a);
      var dx=Math.cos(a),dy=Math.sin(a),droop=.35+R()*.25+(1-up)*.25,pts=[];
      for(var k=0;k<=18;k++){var u=k/18;pts.push([tx+dx*L*u,ty+dy*L*u+L*droop*u*u])}
      g.lineWidth=Math.max(.9,H*.007);g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(k=1;k<pts.length;k++)g.lineTo(pts[k][0],pts[k][1]);g.stroke();
      g.lineWidth=Math.max(.6,H*.0032);g.beginPath();
      for(k=1;k<pts.length;k++){var p=pts[k],q=pts[k-1],ex=p[0]-q[0],ey=p[1]-q[1],el=Math.sqrt(ex*ex+ey*ey)||1;ex/=el;ey/=el;var u2=k/18,ll=L*(.05+.2*Math.sin(Math.PI*Math.min(1,u2*1.1)));
        for(var sd=-1;sd<=1;sd+=2){var ca=Math.cos(.95*sd),sa=Math.sin(.95*sd),lx=ex*ca-ey*sa,ly=ex*sa+ey*ca;g.moveTo(p[0],p[1]);g.lineTo(p[0]+lx*ll,p[1]+ly*ll+ll*.45)}}
      g.stroke();
    }
    g.beginPath();g.arc(tx,ty+H*.012,H*.026,0,Math.PI*2);g.fill();
  }
  function build(){
    var hz=G.hz,U=G.U,Ht=G.Ht,A=mk(hz+4),g=A[1];oTop=A[0];
    /* dawn: deep navy overhead, the logo blue, then rose and gold at the horizon where the sun is about to rise */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#06102e");sky.addColorStop(.28,"#0f2462");sky.addColorStop(.52,"#2c4f98");sky.addColorStop(.7,"#7a86b8");sky.addColorStop(.84,"#d9a4a0");sky.addColorStop(.94,"#f4c49a");sky.addColorStop(1,"#ffe0b0");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+4);
    var sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,Math.max(w*.5,Ht*1.8));sg.addColorStop(0,"rgba(255,236,196,.85)");sg.addColorStop(.12,"rgba(255,206,160,.5)");sg.addColorStop(.4,"rgba(240,160,150,.18)");sg.addColorStop(1,"rgba(200,120,140,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.5);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,0,w,hz*2);g.restore();
    /* the sun's rim breaking the horizon */
    var sr=Math.max(10,Ht*.06);g.fillStyle="rgba(255,244,214,.95)";g.beginPath();g.arc(G.sun,hz+sr*.42,sr,Math.PI,0);g.fill();
    /* thin dawn clouds lit from below */
    var Rc=rng(11);for(var i=0;i<12;i++){var cy=hz*(.3+Rc()*.58),cx=Rc()*w,cwid=w*(.08+Rc()*.2),ch=U*(.008+Rc()*.014),warm=cy/hz,a=.05+Rc()*.08;
      var col=warm>.7?"255,196,170":"150,170,220";
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba("+col+","+a.toFixed(3)+")");cg.addColorStop(1,"rgba("+col+",0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* far shore: the low line of the mainland across the bay */
    var Rf=rng(5);g.fillStyle="rgba(70,80,130,.55)";g.beginPath();g.moveTo(0,hz+1);for(var x=0;x<=G.spitL;x+=4){g.lineTo(x,hz-U*.006-Rf()*U*.003-(x<w*.22?U*.004:0))}g.lineTo(G.spitL,hz+1);g.closePath();g.fill();
    /* Key Biscayne: sand, sea grape and palms, rising from the water to the right */
    var gy=G.gy,L0=G.spitL,land="#0b1740";
    var beachT=hz-Ht*.022;
    var sand=g.createLinearGradient(0,beachT,0,hz);sand.addColorStop(0,"#e2bfa6");sand.addColorStop(1,"#8f88a6");
    g.fillStyle=sand;g.beginPath();g.moveTo(L0-Ht*.25,hz+2);g.quadraticCurveTo(L0,beachT+Ht*.004,L0+Ht*.3,beachT);g.lineTo(w+4,beachT-Ht*.004);g.lineTo(w+4,hz+2);g.closePath();g.fill();
    /* sea grape and scrub: a mounded canopy rising toward the point's interior */
    (function(){var Rr=rng(61);g.fillStyle=land;g.beginPath();g.moveTo(L0+Ht*.12,gy+2);
      for(var x2=L0+Ht*.12;x2<=w+Ht*.1;){var rise=Math.min(1,(x2-L0-Ht*.12)/(Ht*.7)),r=Ht*(.012+.03*rise)*(.6+Rr()*.8),cy=gy-Ht*.004-r*(.35+Rr()*.5)*rise-Ht*.012*rise;
        g.moveTo(x2+r,gy+2);g.arc(x2,cy,r,0,Math.PI,true);g.lineTo(x2-r,gy+2);x2+=r*(.9+Rr()*.5)}
      g.fill();g.fillRect(L0+Ht*.1,gy-Ht*.006,w,beachT-gy+Ht*.006)})();
    /* keeper's cottage, to the left of the tower */
    var kx=G.cx-Ht*.34,kw=Ht*.2,kh=Ht*.075;
    g.fillStyle="#e9e4e6";g.fillRect(kx-kw/2,gy-kh,kw,kh);
    var kg=g.createLinearGradient(kx-kw/2,0,kx+kw/2,0);kg.addColorStop(0,"rgba(255,214,180,.5)");kg.addColorStop(1,"rgba(40,60,120,.45)");g.fillStyle=kg;g.fillRect(kx-kw/2,gy-kh,kw,kh);
    g.fillStyle="#7a2f2c";g.beginPath();g.moveTo(kx-kw*.58,gy-kh);g.lineTo(kx,gy-kh-Ht*.05);g.lineTo(kx+kw*.58,gy-kh);g.closePath();g.fill();
    g.fillStyle="#1c2a5c";for(var wi=0;wi<3;wi++)g.fillRect(kx-kw*.34+wi*kw*.28,gy-kh*.68,kw*.1,kh*.36);
    g.fillStyle="rgba(10,22,60,.8)";g.fillRect(kx-kw*.5-Ht*.01,gy-kh*.1,kw+Ht*.02,kh*.1);
    drawTower(g);
    /* palms: a grove on the point, tallest beside the tower */
    var PL=G.mob?[[.42,.36,-.12,3],[.62,.5,.1,7],[.86,.42,-.06,9],[1.2,.56,.14,13],[1.5,.4,-.1,17],[-.6,.44,.12,19]]:[[.42,.38,-.12,3],[.62,.52,.12,7],[.86,.44,-.06,9],[1.16,.6,.14,13],[1.42,.42,-.1,17],[1.66,.5,.08,21],[-.62,.46,.14,19],[-.86,.34,-.16,23],[2,.46,-.12,29]];
    PL.forEach(function(p){var px=G.cx+p[0]*Ht;if(px<L0+Ht*.2)return;palm(g,px,gy-Ht*.02,Ht*p[1],p[2],p[3],"#0a1436")});
    /* stars, fading toward the dawn */
    ST=[];var Rs=rng(3),n=G.mob?30:80;for(var s=0;s<n;s++){var sy=Math.pow(Rs(),1.6)*hz*.42;ST.push([Rs()*w,sy,.3+Rs()*.8,Rs()*6.28,.4+Rs()*1.2,1-sy/(hz*.42)])}
    GL=[];var Rg=rng(19);for(var q=0;q<(G.mob?30:70);q++)GL.push([Rg(),Rg(),Rg()*6.28,.5+Rg()]);
    BD=[];var Rb=rng(31);for(var b=0;b<(G.mob?3:5);b++)BD.push([Rb(),hz*(.3+Rb()*.35),.5+Rb()*.6,Rb()*6.28,.7+Rb()*.5]);
  }
  /* the tower: conical white brick, a black iron gallery and lantern, lit warm on its sunward side */
  function drawTower(g){
    var x=G.cx,b=G.gy,Ht=G.Ht,t=G.top,bw=Ht*.068,tw=Ht*.046;
    var body=g.createLinearGradient(x-bw,0,x+bw,0);body.addColorStop(0,"#ffe8d2");body.addColorStop(.35,"#f4ece6");body.addColorStop(.7,"#b8bfd8");body.addColorStop(1,"#7f8bb4");
    g.fillStyle=body;g.beginPath();g.moveTo(x-bw,b);g.lineTo(x-tw,t+Ht*.06);g.lineTo(x+tw,t+Ht*.06);g.lineTo(x+bw,b);g.closePath();g.fill();
    /* brick courses, barely there */
    g.strokeStyle="rgba(120,110,140,.12)";g.lineWidth=.6;g.beginPath();for(var k=1;k<40;k++){var yy=b-(b-t-Ht*.06)*k/40,hw=bw+(tw-bw)*k/40;g.moveTo(x-hw,yy);g.lineTo(x+hw,yy)}g.stroke();
    /* a door and two small windows on the face */
    g.fillStyle="#2a3566";g.fillRect(x-bw*.16,b-Ht*.05,bw*.32,Ht*.05);
    g.fillRect(x-tw*.12,b-Ht*.42,tw*.24,Ht*.03);g.fillRect(x-tw*.1,b-Ht*.72,tw*.2,Ht*.028);
    /* gallery: a deck, a railing */
    var gt=t+Ht*.06,gw=tw*1.55,iron="#141c3c";
    g.fillStyle=iron;g.fillRect(x-gw,gt-Ht*.008,gw*2,Ht*.014);
    g.strokeStyle=iron;g.lineWidth=Math.max(.7,Ht*.003);g.beginPath();g.moveTo(x-gw,gt-Ht*.035);g.lineTo(x+gw,gt-Ht*.035);
    for(var r=0;r<=10;r++){var rx=x-gw+gw*2*r/10;g.moveTo(rx,gt-Ht*.008);g.lineTo(rx,gt-Ht*.035)}g.stroke();
    /* lantern room: glazed, glowing, under a domed iron cap */
    var lw=tw*.78,lb=gt-Ht*.008,lt=lb-Ht*.05;
    g.fillStyle=iron;g.fillRect(x-lw,lb-Ht*.008,lw*2,Ht*.008);
    var glow=g.createLinearGradient(0,lt,0,lb);glow.addColorStop(0,"#ffe9b8");glow.addColorStop(1,"#ffc983");g.fillStyle=glow;g.fillRect(x-lw*.92,lt,lw*1.84,lb-lt-Ht*.008);
    g.strokeStyle=iron;g.lineWidth=Math.max(.6,Ht*.0025);g.beginPath();for(var m=0;m<=4;m++){var mx=x-lw*.92+lw*1.84*m/4;g.moveTo(mx,lt);g.lineTo(mx,lb)}g.stroke();
    g.fillStyle=iron;g.beginPath();g.moveTo(x-lw*1.08,lt);g.quadraticCurveTo(x-lw*.9,lt-Ht*.04,x,lt-Ht*.042);g.quadraticCurveTo(x+lw*.9,lt-Ht*.04,x+lw*1.08,lt);g.closePath();g.fill();
    g.fillRect(x-Ht*.002,lt-Ht*.062,Ht*.004,Ht*.022);g.beginPath();g.arc(x,lt-Ht*.064,Ht*.006,0,Math.PI*2);g.fill();
    G.lamp=[x,(lt+lb)/2,lw];
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,Ht=G.Ht,wb=G.mob?U*1.06:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    for(var i=0;i<ST.length;i++){var s=ST[i],a=s[5]*(.45+.55*Math.sin(t*s[4]+s[3]))*.55;if(a<.05)continue;c.fillStyle="rgba(236,242,255,"+a.toFixed(3)+")";c.fillRect(s[0],s[1],s[2],s[2])}
    /* the lantern's beam, turning: brightest as it swings toward us */
    var L=G.lamp,ang=t*.55,fc=Math.cos(ang),side=Math.sin(ang),len=Ht*(.2+1.1*Math.abs(side)),flash=Math.pow(Math.max(0,fc),6);
    c.globalCompositeOperation="lighter";
    var bx=L[0]+side*len,bg=c.createLinearGradient(L[0],L[1],bx,L[1]);bg.addColorStop(0,"rgba(255,226,170,"+(.24*(1-flash*.5)).toFixed(3)+")");bg.addColorStop(1,"rgba(255,226,170,0)");
    c.filter="blur("+Math.max(2,Ht*.008).toFixed(1)+"px)";c.fillStyle=bg;c.beginPath();c.moveTo(L[0],L[1]-L[2]*.5);c.lineTo(bx,L[1]-Ht*.04-Math.abs(side)*Ht*.03);c.lineTo(bx,L[1]+Ht*.03+Math.abs(side)*Ht*.03);c.lineTo(L[0],L[1]+L[2]*.5);c.closePath();c.fill();c.filter="none";
    var hr=Ht*(.05+.14*flash),hg=c.createRadialGradient(L[0],L[1],0,L[0],L[1],hr);hg.addColorStop(0,"rgba(255,236,196,"+(.5+.45*flash).toFixed(3)+")");hg.addColorStop(1,"rgba(255,200,140,0)");c.fillStyle=hg;c.fillRect(L[0]-hr,L[1]-hr,hr*2,hr*2);
    c.globalCompositeOperation="source-over";
    /* the bay: a deeper mirror of the sky */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#7d7fae");wg.addColorStop(.16,"#2c4384");wg.addColorStop(.6,"#0f1f52");wg.addColorStop(1,"#07102c");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz),sw=Math.round(w*dpr);c.globalAlpha=e*.5;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.12+t*1.2)*(.6+k*5)+Math.sin(y*.04-t*.6)*(k*3),sy=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(7,16,44,.08)");dkn.addColorStop(.5,"rgba(7,16,44,.45)");dkn.addColorStop(1,"rgba(7,16,44,.86)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* the sun's path across the water */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],gy=hz+Math.pow(gq[1],1.5)*(wb-hz)*.9+2,spread=Ht*(.12+gq[1]*.9),gx=G.sun+(gq[0]-.5)*spread*2,ga=(.5+.5*Math.sin(t*gq[3]*1.7+gq[2]))*(1-gq[1])*.3,gl=4+Ht*.06*(1-gq[1]);
      c.fillStyle="rgba(255,220,176,"+ga.toFixed(3)+")";c.fillRect(gx+Math.sin(t*.5+gq[2])*6,gy,gl,1.2)}
    /* the lamp's broken reflection */
    for(var r=0;r<6;r++){var ry=hz+(hz-L[1])*(.55+r*.25),rl=Ht*.02;if(ry>wb)break;var rx=L[0]+Math.sin(t*1.4+r*1.3)*(1+r*.8);c.fillStyle="rgba(255,214,160,"+((.2-r*.03)*(.6+.4*flash)).toFixed(3)+")";c.fillRect(rx-.8,ry,1.6,rl)}
    c.globalCompositeOperation="source-over";
    /* pelicans gliding along the shore */
    c.strokeStyle="rgba(10,20,54,.85)";c.lineWidth=Math.max(1,Ht*.0045);c.lineCap="round";
    for(var bI=0;bI<BD.length;bI++){var bd=BD[bI],bxp=((bd[0]+t*.012*bd[2])%1.2-.1)*w,byp=bd[1]+Math.sin(t*.4+bd[3])*Ht*.02,sz=Ht*.028*bd[4],fl=Math.sin(t*2.2*bd[4]+bd[3])*.35;
      if(!G.mob&&bxp<G.side+G.cw*.42)continue;
      c.beginPath();c.moveTo(bxp-sz,byp-sz*(.1+fl));c.quadraticCurveTo(bxp-sz*.45,byp-sz*(.35+fl*.5),bxp,byp);c.quadraticCurveTo(bxp+sz*.45,byp-sz*(.35+fl*.5),bxp+sz,byp-sz*(.1+fl));c.stroke()}
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(6,14,40,.5)");lv.addColorStop(1,"rgba(6,14,40,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.lamp[0],G.lamp[1]]:[w/2,h/2]}};
})();
