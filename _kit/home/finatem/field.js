/* ================= HERO FIELD: the Taunus at first light, seen from Bad Homburg vor der Höhe ("before the heights").
   Ridge behind ridge of beech and spruce forest climbs to the Großer Feldberg, its mast on the skyline; mist lies in the
   valleys and drifts slowly; the sun clears the far ridge in a sky that runs from the logo navy (#07223d) to the mark's
   pale blue (#91cae5). Ridges are painted, not outlined: haze deepens with distance, crowns of trees catch the low sun on
   their left flanks, and a fine paint grain sits on every surface. The mist and birds move on their own; no pointer
   response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oFar=null,oMid=null,oNear=null,oMist=[],BIRD=[],GRT=null;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function cl(x,a,b){return x<a?a:x>b?b:x}
  function mix(a,b,k){return [a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k,a[2]+(b[2]-a[2])*k]}
  function rgb(a,al){return "rgba("+Math.round(a[0])+","+Math.round(a[1])+","+Math.round(a[2])+","+(al==null?1:al)+")"}
  function noise1(seed){var Rr=rng(seed),g=[];for(var i=0;i<512;i++)g.push(Rr());return function(x){var i=Math.floor(x),f=x-i;f=f*f*(3-2*f);return g[i&511]+(g[(i+1)&511]-g[i&511])*f}}
  function noise2(seed){var Rr=rng(seed),N=64,g=[];for(var i=0;i<N*N;i++)g.push(Rr());
    return function(x,y){var xi=Math.floor(x),yi=Math.floor(y),fx=x-xi,fy=y-yi;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);
      var a=g[((yi&63)*N+(xi&63))],b=g[((yi&63)*N+((xi+1)&63))],c2=g[(((yi+1)&63)*N+(xi&63))],d=g[(((yi+1)&63)*N+((xi+1)&63))];
      return a+(b-a)*fx+(c2-a)*fy+(a-b-c2+d)*fx*fy}}
  var NZ=noise2(11),N1=noise1(5);
  function fbm(x,y){return NZ(x,y)*.55+NZ(x*2.1+7,y*2.1)*.28+NZ(x*4.3,y*4.3+3)*.17}
  function f1(x,s){return N1(x+s)*.55+N1(x*2.3+s*3)*.28+N1(x*5.1+s*7)*.17}
  /* sky and haze colours */
  var TOP=[4,22,41],MID=[26,66,104],LOW=[143,190,214],GLOW=[246,226,186],SUNC=[255,244,214];
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.round(h*.4):h;
    var hz=mob?U*.56:h*.56;
    var sx=mob?w*.62:side+cw*.66,sy=hz-U*.075;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,sx:sx,sy:sy,fx:mob?w*.4:side+cw*.5};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* a tile of paint grain, laid over every painted surface */
  function grainTile(){var o=document.createElement("canvas"),N=256;o.width=o.height=N;var g=o.getContext("2d"),im=g.createImageData(N,N),D=im.data,Rr=rng(3);
    for(var y=0;y<N;y++)for(var x=0;x<N;x++){var v=fbm(x*.09,y*.035)*.7+Rr()*.3,i=(y*N+x)*4,k=Math.round(v*255);D[i]=D[i+1]=D[i+2]=k;D[i+3]=255}
    g.putImageData(im,0,0);return o}
  /* the sky, per pixel at a coarse scale (it is all soft light) */
  function sky(){
    var S=4,W=Math.ceil(w/S),H=Math.ceil(h/S),o=document.createElement("canvas");o.width=W;o.height=H;var g=o.getContext("2d"),im=g.createImageData(W,H),D=im.data;
    var hz=G.hz,U=G.U,sx=G.sx,sy=G.sy;
    for(var y=0;y<H;y++){var Y=y*S,k=cl(Y/(hz),0,1.2);
      var base=k<.5?mix(TOP,MID,sm(k/.5)):mix(MID,LOW,sm((k-.5)/.5));
      for(var x=0;x<W;x++){var X=x*S,dx=(X-sx)/U,dy=(Y-sy)/U,d=Math.sqrt(dx*dx*.55+dy*dy*1.6);
        var gl=Math.exp(-d*3.2)*.85+Math.exp(-d*9)*.5,hb=Math.exp(-Math.abs(Y-hz)/(U*.11))*Math.exp(-Math.abs(dx)*1.1)*.6;
        var col=mix(base,GLOW,cl(gl*.8+hb,0,1));
        /* thin stratus, lit from below near the sun */
        var cn=fbm(X/U*1.6,Y/U*9),band=sm((cn-.56)/.2)*sm((Y-hz*.28)/(hz*.2))*(1-sm((Y-hz*.86)/(hz*.12)));
        if(band>0){var lit=cl(Math.exp(-d*2.2)*1.3,0,1);col=mix(col,mix([40,72,108],[252,222,178],lit),band*.55)}
        var i=(y*W+x)*4;D[i]=col[0];D[i+1]=col[1];D[i+2]=col[2];D[i+3]=255}}
    g.putImageData(im,0,0);
    var S2=mk(w,h),f=S2[1];f.imageSmoothingQuality="high";f.drawImage(o,0,0,w,h);
    /* the sun just above the far ridge */
    var r=Math.max(9,U*.026);var sg=f.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,r*1.25);sg.addColorStop(0,rgb(SUNC));sg.addColorStop(.75,rgb(SUNC,.95));sg.addColorStop(1,rgb(SUNC,0));
    f.fillStyle=sg;f.beginPath();f.arc(G.sx,G.sy,r*1.25,0,Math.PI*2);f.fill();
    return S2[0];
  }
  /* one ridge, painted per pixel: a rolling silhouette from layered noise with a ragged treeline, a forest canopy whose
     crowns are lit on the side facing the sun, haze deepening towards its foot where the valley mist lies, paint grain */
  function ridge(f,o){
    var U=G.U,q=Math.min(dpr,1.5),W=Math.ceil(w*q),bot=o.bottom,tops=new Float32Array(W),cs=o.cs,mn=1e9;
    for(var x=0;x<W;x++){var X=x/q,u=X/w;
      var r=.62*f1(u*o.fr,o.seed)+.38*(1-Math.abs(2*f1(u*o.fr*2.2,o.seed+9)-1));
      var y=o.base-o.amp*(r-.4)-(o.bump?o.bump(X):0);
      if(cs)y-=cs*(.55*Math.pow(N1(X/cs*.9+o.seed),1.4)+.35*N1(X/(cs*.38)+o.seed*2)+.18*N1(X/(cs*.15)+o.seed*3));
      tops[x]=y;if(y<mn)mn=y}
    var y0=Math.max(0,Math.floor(mn*q)-1),H=Math.max(1,Math.ceil(bot*q)-y0),o2=document.createElement("canvas");o2.width=W;o2.height=H;
    var g=o2.getContext("2d"),im=g.createImageData(W,H),D=im.data,Rr=rng(o.seed+1),sx=G.sx,sun=[255,226,180];
    for(var x=0;x<W;x++){var X=x/q,top=tops[x],dir=X<sx?1:-1,near=Math.exp(-Math.abs(X-sx)/(U*o.lr));
      for(var py=0;py<H;py++){var Y=(py+y0)/q,cov=cl(Y+1/q-top,0,1);if(cov<=0)continue;
        var d=cl((Y-top)/(bot-top),0,1),base=mix(o.c0,o.c1,sm(Math.min(1,d*1.6)));
        var shade=0;
        if(cs){var u2=X/(cs*.42),v2=Y/(cs*.36),n=fbm(u2,v2),gx=fbm(u2+.35,v2)-fbm(u2-.35,v2),gy=fbm(u2,v2+.35)-fbm(u2,v2-.35);
          var n2=fbm(u2*.31+5,v2*.31);shade=(gx*dir*.9-gy*.6)*o.lit+(n-.5)*.32+(n2-.5)*.3}
        else shade=(fbm(X/(U*.05),Y/(U*.02))-.5)*.3;
        var lit=cl(.55+shade,0,1.4),k=.78+.44*shade;
        var col=[base[0]*k,base[1]*k,base[2]*k];
        var warm=near*o.la*lit*(1-.6*d);col=mix(col,sun,cl(warm,0,.85));
        /* light catching the very rim */
        var rim=Math.exp(-(Y-top)/(1.6))*o.rim*near;col=mix(col,[255,236,204],cl(rim,0,1));
        var hz=sm((d-(1-o.hz))/o.hz)*o.ma;col=mix(col,o.mc,hz);
        var gr=1+(Rr()-.5)*.05,i=(py*W+x)*4;D[i]=cl(col[0]*gr,0,255);D[i+1]=cl(col[1]*gr,0,255);D[i+2]=cl(col[2]*gr,0,255);D[i+3]=Math.round(cov*255)}}
    g.putImageData(im,0,0);
    f.save();f.imageSmoothingQuality="high";if(o.blur)f.filter="blur("+o.blur+"px)";f.drawImage(o2,0,y0/q,w,H/q);f.restore();
    var pts=[];for(var j=0;j<W;j+=2)pts.push([j/q,tops[j]]);
    return pts;
  }
  /* a broadleaf (beech) on the near crest, painted leaf-clump by leaf-clump: dark against the mist, the sun side warmed */
  function tree(f,x,y,s,seed){
    var Rr=rng(seed),dir=x<G.sx?1:-1,warmK=Math.exp(-Math.abs(x-G.sx)/(G.U*.8));
    f.save();f.strokeStyle="rgba(6,18,30,.96)";f.lineCap="round";
    function limb(x0,y0,a,l,wd,dep){if(dep>4||l<s*.05)return;var x1=x0+Math.cos(a)*l,y1=y0+Math.sin(a)*l;f.lineWidth=wd;f.beginPath();f.moveTo(x0,y0);f.quadraticCurveTo((x0+x1)/2+(Rr()-.5)*l*.2,(y0+y1)/2,x1,y1);f.stroke();
      limb(x1,y1,a-.35-Rr()*.3,l*(.62+Rr()*.12),wd*.62,dep+1);limb(x1,y1,a+.3+Rr()*.3,l*(.6+Rr()*.12),wd*.62,dep+1)}
    limb(x,y+2,-Math.PI/2+(Rr()-.5)*.08,s*.5,s*.075,0);
    var cx=x,cy=y-s*1.02,R=s*.82,n=Math.round(260+s*3);
    for(var j=0;j<n;j++){var a=Rr()*Math.PI*2,rr=Math.pow(Rr(),.6)*R,ex=cx+Math.cos(a)*rr*1.08,ey=cy+Math.sin(a)*rr*.74+(Rr()-.5)*s*.05;
      var edge=rr/R;if(edge>.85&&Rr()<.4)continue;
      var r=s*(.035+Rr()*.05),side=cl(.5+((ex-cx)/R)*dir*.55-((ey-cy)/R)*.4,0,1);
      var col=mix([6,19,31],[18,40,54],Rr()*.6);if(side>.7)col=mix(col,mix([44,70,84],[176,150,112],warmK),(side-.7)*1.4);
      f.fillStyle=rgb(col,.9);f.beginPath();f.ellipse(ex,ey,r,r*.72,Rr()*3,0,Math.PI*2);f.fill()}
    f.restore();
  }
  function mist(seed,H,col,al){
    var W=Math.round(w*1.6),S2=mk(W,H),f=S2[1],Rr=rng(seed);
    for(var i=0;i<46;i++){var x=Rr()*W,y=H*(.35+Rr()*.5),rx=(.08+Rr()*.18)*w,ry=H*(.1+Rr()*.18);
      var g=f.createRadialGradient(x,y,0,x,y,rx);g.addColorStop(0,rgb(col,al*(.5+Rr()*.5)));g.addColorStop(1,rgb(col,0));
      f.save();f.translate(x,y);f.scale(1,ry/rx);f.translate(-x,-y);f.fillStyle=g;f.beginPath();f.arc(x,y,rx,0,Math.PI*2);f.fill();f.restore()}
    return S2[0];
  }
  function build(){
    var U=G.U,hz=G.hz,mob=G.mob,wb=mob?U*1.04:h;
    if(!GRT)GRT=grainTile();
    oSky=sky();
    /* far: the Feldberg massif and the ridges either side, in haze */
    var S1=mk(w,wb+2),f=S1[1];oFar=S1[0];
    var fx=G.fx,fb=function(x){var d=(x-fx)/(U*.7);return Math.exp(-d*d)*U*.07};
    var feld=ridge(f,{seed:2,base:hz-U*.05,amp:U*.07,fr:2.4,bump:fb,bottom:wb+2,c0:[124,162,190],c1:[104,142,172],lc:0,la:.5,lr:.5,lit:0,mc:[196,218,230],ma:.45,hz:.35,rim:.6,cs:U*.004,blur:.6});
    /* the mast on the Großer Feldberg: the highest point of the far ridge */
    var top=feld[0];feld.forEach(function(p){if(p[1]<top[1]&&Math.abs(p[0]-fx)<U*.3)top=p});
    var mh=U*.05,mx=top[0],my=top[1]+2;f.fillStyle="rgba(100,138,168,.95)";f.fillRect(mx-1,my-mh,2.2,mh);f.fillRect(mx-2.6,my-mh*.62,5.2,mh*.08);f.fillRect(mx-.6,my-mh*1.25,1.2,mh*.27);
    f.fillRect(mx+U*.035,my-mh*.32,2.6,mh*.32);
    ridge(f,{seed:7,base:hz+U*.01,amp:U*.08,fr:3.2,bottom:wb+2,c0:[88,124,156],c1:[70,104,136],la:.45,lr:.45,lit:.5,mc:[192,212,226],ma:.6,hz:.45,rim:.45,cs:U*.007,blur:.4});
    var S3=mk(w,wb+2),m=S3[1];oMid=S3[0];
    ridge(m,{seed:13,base:hz+U*.09,amp:U*.11,fr:2.7,bottom:wb+2,c0:[50,80,106],c1:[34,60,86],la:.42,lr:.42,lit:1,mc:[168,194,212],ma:.55,hz:.5,rim:.35,cs:U*.011});
    ridge(m,{seed:19,base:hz+U*.2,amp:U*.13,fr:2.2,bottom:wb+2,c0:[28,52,72],c1:[16,36,56],la:.36,lr:.4,lit:1.2,mc:[132,164,188],ma:.45,hz:.5,rim:.3,cs:U*.017});
    /* near: the wooded hillside at our feet, rising to the right, with a few trees standing on its crest */
    var S4=mk(w,wb+40),n=S4[1];oNear=S4[0];
    var nb=hz+U*(mob?.34:.34),rise=function(x){return sm((x-w*.45)/(w*.55))*U*.16};
    var near=ridge(n,{seed:29,base:nb,amp:U*.06,fr:1.4,bump:rise,bottom:wb+40,c0:[14,34,52],c1:[6,20,34],la:.3,lr:.36,lit:1.3,mc:[6,20,34],ma:0,hz:.2,rim:.4,cs:U*.03});
    function crest(x){var b=near[0];for(var i=0;i<near.length;i++)if(Math.abs(near[i][0]-x)<Math.abs(b[0]-x))b=near[i];return b[1]}
    var TR=mob?[[.74,.1],[.93,.13]]:[[.66,.075],[.81,.12],[.92,.09]];
    TR.forEach(function(t,i){var x=w*t[0];tree(n,x,crest(x)+U*.012,U*t[1],40+i*7)});
    oMist=[mist(4,U*.16,[226,236,240],.55),mist(9,U*.2,[214,228,236],.5),mist(15,U*.14,[236,226,210],.45)];
    BIRD=[[.2,.36,1,.4],[.26,.4,.8,2.3],[.62,.3,.9,1.1]];
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var U=G.U,hz=G.hz,mob=G.mob,wb=mob?U*1.04:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    if(mob){c.fillStyle="#07223d";c.fillRect(0,0,cv.width,cv.height)}
    c.drawImage(oSky,0,0);
    /* the sun breathes a little through the haze */
    c.setTransform(dpr,0,0,dpr,0,0);
    c.globalCompositeOperation="lighter";var pul=.1+.03*Math.sin(t*.6),hg=c.createRadialGradient(G.sx,G.sy,0,G.sx,G.sy,U*.22);hg.addColorStop(0,"rgba(255,236,200,"+pul.toFixed(3)+")");hg.addColorStop(1,"rgba(255,236,200,0)");c.fillStyle=hg;c.fillRect(G.sx-U*.22,G.sy-U*.22,U*.44,U*.44);
    c.globalCompositeOperation="source-over";
    /* parallax on scroll: nearer layers rise faster */
    var sp=mob?0:SP.v*h;
    function lay(img,k){c.setTransform(1,0,0,1,0,Math.round(-sp*k*dpr));c.drawImage(img,0,0);c.setTransform(dpr,0,0,dpr,0,0)}
    function mst(i,y,spd,k){var o=oMist[i],W=o.width/dpr,x=-((t*spd)%(W-w));c.setTransform(dpr,0,0,dpr,0,-sp*k);c.drawImage(o,x,y,W,o.height/dpr);c.setTransform(dpr,0,0,dpr,0,0)}
    lay(oFar,.02);
    mst(0,hz-U*.07,4,.03);
    lay(oMid,.05);
    mst(1,hz+U*.06,6,.06);mst(2,hz+U*.15,8.5,.08);
    /* birds over the valley */
    c.strokeStyle="rgba(14,30,46,.6)";c.lineWidth=1.1;c.beginPath();
    for(var bi=0;bi<BIRD.length;bi++){var B=BIRD[bi],bx=((B[0]+t*.005*B[2])%1)*w,by=hz*B[1]+Math.sin(t*.3+B[3])*U*.01,fl=Math.sin(t*2.4*B[2]+B[3])*2.4,bs=Math.max(4,U*.008);
      c.moveTo(bx-bs,by-fl*.4);c.quadraticCurveTo(bx-bs*.4,by-bs*.5-fl,bx,by);c.quadraticCurveTo(bx+bs*.4,by-bs*.5-fl,bx+bs,by-fl*.4)}c.stroke();
    lay(oNear,.1);
    if(mob){var mf=c.createLinearGradient(0,U*.9,0,wb+2);mf.addColorStop(0,"rgba(7,34,61,0)");mf.addColorStop(1,"rgba(7,34,61,1)");c.fillStyle=mf;c.fillRect(0,U*.9,w,wb-U*.9+2);c.fillStyle="#07223d";c.fillRect(0,wb+1,w,h)}
    else{var lv=c.createLinearGradient(0,0,G.side+G.cw*.58,0);lv.addColorStop(0,"rgba(4,18,34,.66)");lv.addColorStop(1,"rgba(4,18,34,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(4,18,34,0)");bv.addColorStop(1,"rgba(4,18,34,.55)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.sx,G.hz]:[w/2,h/2]}};
})();
