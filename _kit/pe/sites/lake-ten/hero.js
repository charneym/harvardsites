/* Lake Ten Capital Partners: "Ten, on the lake." Their logo carries a large ghosted "10" behind the wordmark; here that
   numeral is engraved into a still lake. Hundreds of fine horizontal water lines run across the right of the hero; where
   they cross the numeral they lift into a relief (banknote engraving) and brighten, so the "10" is a filled, detailed
   focal point made of the water itself. A slow glint of light travels along the lines and the surface ripples gently.
   The art moves on its own, so it does not follow the pointer (CZ). params: glyph (the numeral, from their logo). */
var HM={geo:function(L){var W=L.W,H=L.H;
    if(L.foot){var gh=Math.min(H*.66,W*.2);return {W:W,H:H,fx:W*.5,fy:H*.5,gh:gh,xa:0,xb:W,ya:0,yb:H,sp:7,foot:1}}
    if(L.mob){var g2=Math.min(H*.17,W*.38);return {W:W,H:H,fx:W*.6,fy:H*.205,gh:g2,xa:0,xb:W,ya:0,yb:H*.36,sp:5,mob:1}}
    var g3=Math.min(H*.52,L.cw*.3);return {W:W,H:H,fx:L.side+L.cw*.78,fy:H*.54,gh:g3,xa:L.side+L.cw*.3,xb:W,ya:0,yb:H,sp:6}},
  build:function(G,ST,E){
    /* the numeral is drawn as a path (a flagged classical "1" and a stressed "0", as in their logo), not a font glyph */
    var k=.5,u=G.gh*k,bw=Math.ceil(G.gh*1.7),bh=Math.ceil(G.gh*1.5),mw=Math.ceil(bw*k),mh=Math.ceil(bh*k);
    var A=document.createElement("canvas");A.width=mw;A.height=mh;var a=A.getContext("2d");a.fillStyle="#fff";
    var x0=mw/2-u*.58,y0=mh/2-u*.5;function P(pts){a.beginPath();pts.forEach(function(q,i){a[i?"lineTo":"moveTo"](x0+q[0]*u,y0+q[1]*u)});a.closePath();a.fill()}
    P([[.15,.035],[.29,0],[.29,1],[.15,1]]);P([[.15,.035],[.29,0],[.27,.09],[.02,.215],[0,.17]]);
    P([[0,.955],[.11,.94],[.33,.94],[.44,.955],[.44,1],[0,1]]);
    a.beginPath();a.ellipse(x0+.85*u,y0+.5*u,.32*u,.5*u,0,0,6.2832);a.ellipse(x0+.85*u,y0+.5*u,.185*u,.425*u,0,0,6.2832);a.fill("evenodd");
    var B=document.createElement("canvas");B.width=mw;B.height=mh;var b=B.getContext("2d");b.filter="blur("+Math.max(2,u*.035)+"px)";b.drawImage(A,0,0);
    var da=a.getImageData(0,0,mw,mh).data,db=b.getImageData(0,0,mw,mh).data,S=new Float32Array(mw*mh),Bl=new Float32Array(mw*mh);
    for(var i=0;i<mw*mh;i++){S[i]=da[i*4+3]/255;Bl[i]=db[i*4+3]/255}
    ST.S=S;ST.B=Bl;ST.mw=mw;ST.mh=mh;ST.k=k;ST.ox=G.fx-bw/2;ST.oy=G.fy-bh/2},
  draw:function(c,S,E){var G=S.G,ST=S.ST,C=E.C,e=S.e,t=S.t,d=E.dpr||1,oy=G.mob||G.foot?0:-S.sp*G.H*.05;
    /* the engraving is rendered once (build); each frame only moves narrow vertical strips of it up and down (the
       ripple) and lays a travelling glint over the lines, so the hero costs almost nothing on slow machines */
    if(!ST.cv||ST.d!==d){ST.d=d;ST.cv=document.createElement("canvas");ST.cv.width=Math.ceil(G.W*d);ST.cv.height=Math.ceil(G.H*d);
      var x=ST.cv.getContext("2d");x.setTransform(d,0,0,d,0,0);HM.paint(x,{G:G,ST:ST,e:1,t:0},E)}
    var fade=G.foot?.62:1,cw=10,x0=Math.max(0,Math.floor(G.xa/cw)*cw);
    c.save();c.globalAlpha=E.sm(e)*fade;
    for(var x=x0;x<G.xb;x+=cw){var dy=Math.sin(x*.017+t*.5)*.8+Math.sin(x*.0063-t*.27)*1.2;
      c.drawImage(ST.cv,x*d,0,cw*d,G.H*d,x,dy*(.4+.6*E.sm(e))+oy+(1-E.sm(e))*10,cw,G.H)}
    c.globalAlpha=1;c.globalCompositeOperation="source-atop";
    var span=G.xb-G.xa,gx=G.xa+span*(.5+.42*Math.sin(t*.11)),gg=c.createLinearGradient(gx-span*.25,0,gx+span*.25,0);
    gg.addColorStop(0,"rgba("+C.hi+",0)");gg.addColorStop(.5,"rgba("+C.hi+","+(.5*e*fade).toFixed(3)+")");gg.addColorStop(1,"rgba("+C.hi+",0)");
    c.fillStyle=gg;c.fillRect(gx-span*.25,0,span*.5,G.H);c.restore()},
  paint:function(c,S,E){var G=S.G,ST=S.ST,C=E.C,e=S.e,t=S.t,sm=E.sm;
    var sp=G.sp,amp=sp*2.7*sm(e*1.25),k=ST.k,mw=ST.mw,mh=ST.mh,SS=ST.S,BB=ST.B,ox=ST.ox,oyy=ST.oy,bx1=ox+mw/k,by1=oyy+mh/k;
    var fade=G.foot?.62:1;
    /* a soft light behind the numeral: the focal point is lit, never an empty frame (CU) */
    var gl=c.createRadialGradient(G.fx,G.fy,0,G.fx,G.fy,G.gh*1.05);gl.addColorStop(0,"rgba("+C.acc+","+(.2*e*fade).toFixed(3)+")");gl.addColorStop(1,"rgba("+C.acc+",0)");
    c.fillStyle=gl;c.fillRect(G.xa,G.ya,G.xb-G.xa,G.yb-G.ya);
    var base=new Path2D(),glyph=new Path2D(),fine=2.5,coarse=5;
    for(var y0=G.ya+sp*.5,j=0;y0<G.yb;y0+=sp,j++){var inG=false,first=true,rowIn=y0>=oyy&&y0<by1;
      for(var x=G.xa;x<=G.xb+coarse;){
        var r=Math.sin(x*.017+t*.5+j*.41)*.75+Math.sin(x*.0063-t*.27+j*.13)*1.15;
        var mx=((x-ox)*k)|0,my=((y0-oyy)*k)|0,h=0,s=0;
        if(mx>=0&&my>=0&&mx<mw&&my<mh){var ii=my*mw+mx;h=BB[ii];s=SS[ii]}
        var y=y0-h*amp+r*(1-.7*h);
        if(first){base.moveTo(x,y);first=false}else base.lineTo(x,y);
        var on=s>.5&&e>.02;
        if(on&&!inG){glyph.moveTo(x,y);inG=true}else if(on){glyph.lineTo(x,y)}else if(inG){glyph.lineTo(x,y);inG=false}
        x+=rowIn&&x>=ox-coarse&&x<bx1?fine:coarse;
      }}
    /* the water: one stroke, lit by a slow travelling glint */
    var gx=G.xa+(G.xb-G.xa)*(.5+.42*Math.sin(t*.11)),gg=c.createLinearGradient(G.xa,0,G.xb,0),span=G.xb-G.xa;
    function st2(x,a){gg.addColorStop(Math.max(0,Math.min(1,(x-G.xa)/span)),"rgba("+C.fg+","+(a*e*fade).toFixed(3)+")")}
    st2(G.xa,.12);st2(G.xb,.12);
    c.lineWidth=.8;c.strokeStyle=gg;c.stroke(base);
    /* the numeral: the same lines, lifted and brightened */
    c.lineWidth=G.foot?1.1:1.35;c.strokeStyle="rgba("+C.hi+","+(.9*e*fade).toFixed(3)+")";c.stroke(glyph);
    /* fade the surface out at the top and bottom of its band */
    c.save();c.globalCompositeOperation="destination-in";var vf=c.createLinearGradient(0,G.ya,0,G.yb);
    if(G.mob){vf.addColorStop(0,"rgba(0,0,0,.35)");vf.addColorStop(.12,"rgba(0,0,0,1)");vf.addColorStop(.72,"rgba(0,0,0,1)");vf.addColorStop(1,"rgba(0,0,0,0)")}
    else{vf.addColorStop(0,"rgba(0,0,0,0)");vf.addColorStop(.16,"rgba(0,0,0,1)");vf.addColorStop(.84,"rgba(0,0,0,1)");vf.addColorStop(1,"rgba(0,0,0,0)")}
    c.fillStyle=vf;c.fillRect(0,0,G.W,G.H);c.restore()}};
