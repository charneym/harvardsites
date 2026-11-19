/* the story scene: Aeon's own optical bench, drawn as one engraved diagram. An eye in cross-section (cornea, iris,
   lens, the retina at the back), a beam splitter, the projector that paints near-infrared lines and the CMOS sensor
   whose rolling shutter reads them. Step 1 the lines go in and step across the retina; step 2 the light returns and
   the sensor's active rows build the image band by band; step 3 the read band slides off the line and drusen appear
   in the scattered light; step 4 the projector shows an acuity target, a tunable lens enters the path and the light
   passes a small pupil in Maxwellian view. Each step changes one labelled part. */
function scP(L,u){var f=(u-.5)*.84;return [L.ex-L.rr*Math.cos(f),L.ey+L.rr*Math.sin(f)]}
function scBuild(L){
  var s='',ex=L.ex,ey=L.ey,r=L.r,ay=ey,cx=L.cx;
  /* the eye */
  var ca=.62,x1=ex+r*Math.cos(ca),y1=ey-r*Math.sin(ca),y2=ey+r*Math.sin(ca);
  s+='<g id="scEye"><path class="globe" d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+'A'+r+' '+r+' 0 1 0 '+x1.toFixed(1)+' '+y2.toFixed(1)+'"/>';
  s+='<path class="globe" d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+'Q'+(cx+r*.12)+' '+ey+' '+x1.toFixed(1)+' '+y2.toFixed(1)+'"/>';
  var ix=L.ix;s+='<path class="iris" d="M'+ix+' '+(ey-r*.62)+'V'+(ey-L.pu)+'M'+ix+' '+(ey+L.pu)+'V'+(ey+r*.5)+'"/>';
  s+='<ellipse class="lens" cx="'+(ix-r*.1)+'" cy="'+ey+'" rx="'+(r*.09)+'" ry="'+(r*.28)+'"/>';
  var ra=.62,rr=L.rr;s+='<path class="retina" d="M'+(ex-rr*Math.cos(ra)).toFixed(1)+' '+(ey-rr*Math.sin(ra)).toFixed(1)+'A'+rr+' '+rr+' 0 0 0 '+(ex-rr*Math.cos(ra)).toFixed(1)+' '+(ey+rr*Math.sin(ra)).toFixed(1)+'"/>';
  s+='<path class="ln-a" d="M'+(ex-r)+' '+(ey-r*.08)+'H'+(ex-r-L.nv)+'M'+(ex-r)+' '+(ey+r*.08)+'H'+(ex-r-L.nv)+'"/></g>';
  /* the beam splitter */
  s+='<path class="bs" d="'+L.bs+'"/>';
  /* projector (source) */
  s+='<g id="scSrc"><rect class="box" x="'+L.sx+'" y="'+L.sy+'" width="'+L.sw+'" height="'+L.sh+'"/>';
  for(var i=0;i<5;i++)s+='<path class="lines" d="M'+(L.sx+8)+' '+(L.sy+8+i*(L.sh-16)/4).toFixed(1)+'H'+(L.sx+L.sw-8)+'"/>';
  s+='<text id="scE" class="eopt" x="'+(L.sx+L.sw/2)+'" y="'+(L.sy+L.sh/2+L.sh*.24).toFixed(1)+'" text-anchor="middle" style="font-size:'+(L.sh*.62).toFixed(0)+'px">E</text>';
  s+='<text x="'+L.slx+'" y="'+L.sly+'" class="sm"'+(L.sla?' text-anchor="'+L.sla+'"':'')+'>PROJECTOR</text></g>';
  /* incoming beam: source to splitter to cornea */
  s+='<path id="scIn" class="beam" d="'+L.pin+'"/>';
  /* focused into a line on the retina (two rays to the scan point) */
  s+='<path id="scF1" class="beam"/><path id="scF2" class="beam"/>';
  s+='<circle id="scDotG" class="dotg" r="'+(r*.09).toFixed(1)+'"/><circle id="scDot" class="dot" r="3.2"/>';
  /* return to the sensor */
  s+='<path id="scRet" class="ret"/>';
  /* Maxwellian view: through a small pupil, spreading over the retina */
  var p0=scP(L,.02),p1=scP(L,.98);
  s+='<path id="scMx" class="mx" d="M'+L.lx+' '+(ey-L.lh*.6)+'L'+ix+' '+ey+'L'+p0[0].toFixed(1)+' '+p0[1].toFixed(1)+'M'+L.lx+' '+(ey+L.lh*.6)+'L'+ix+' '+ey+'L'+p1[0].toFixed(1)+' '+p1[1].toFixed(1)+'"/>';
  /* tunable lens */
  s+='<g id="scTl"><path class="tl" d="M'+L.lx+' '+(ey-L.lh)+'Q'+(L.lx+L.lh*.32)+' '+ey+' '+L.lx+' '+(ey+L.lh)+'Q'+(L.lx-L.lh*.32)+' '+ey+' '+L.lx+' '+(ey-L.lh)+'Z"/></g>';
  /* sensor and the image it reads */
  var qx=L.qx,qy=L.qy,qw=L.qw,qh=L.qh,rows=L.rows,rh=qh/rows;
  s+='<defs><clipPath id="scClip"><rect id="scRev" x="'+qx+'" y="'+qy+'" width="'+qw+'" height="0"/></clipPath></defs>';
  s+='<rect class="frm2" x="'+qx+'" y="'+qy+'" width="'+qw+'" height="'+qh+'"/>';
  var dcx=qx+qw*.74,dcy=qy+qh*.46,dr=qh*.07,mcx=qx+qw*.38,mcy=qy+qh*.5;
  s+='<g clip-path="url(#scClip)"><rect class="img" x="'+qx+'" y="'+qy+'" width="'+qw+'" height="'+qh+'"/>';
  var VS=[[-.5,-.9,-1.1,-.9,-1.3,-.2],[-.5,.9,-1.1,.9,-1.3,.2],[.5,-1.2,.9,-1.6,1.4,-1.9],[.5,1.2,.9,1.6,1.4,1.9],[-.6,-.3,-1,-.5,-1.4,-.6],[-.6,.3,-1,.5,-1.4,.6]];
  VS.forEach(function(v,k){var sc=qh*.42;s+='<path class="ves'+(k<2?' big':'')+'" d="M'+dcx+' '+dcy+'C'+(dcx+v[0]*sc).toFixed(1)+' '+(dcy+v[1]*sc*.5).toFixed(1)+' '+(dcx+v[2]*sc).toFixed(1)+' '+(dcy+v[3]*sc*.5).toFixed(1)+' '+(dcx+v[4]*sc).toFixed(1)+' '+(dcy+v[5]*sc*.5).toFixed(1)+'"/>'});
  s+='<circle class="disc" cx="'+dcx+'" cy="'+dcy+'" r="'+dr.toFixed(1)+'"/><circle class="mac" cx="'+mcx+'" cy="'+mcy+'" r="'+(qh*.12).toFixed(1)+'"/>';
  s+='<g id="scDr">';var Rd=(function(sd){return function(){sd=(sd*16807)%2147483647;return (sd-1)/2147483646}})(9);
  for(var d=0;d<26;d++){var a=Rd()*6.283,rd=Math.sqrt(Rd())*qh*.2;s+='<circle class="dru" cx="'+(mcx+Math.cos(a)*rd*1.3).toFixed(1)+'" cy="'+(mcy+Math.sin(a)*rd).toFixed(1)+'" r="'+(1.4+Rd()*1.8).toFixed(1)+'"/>'}
  s+='</g></g>';
  for(var k=1;k<rows;k++)s+='<path class="row" d="M'+qx+' '+(qy+k*rh).toFixed(1)+'H'+(qx+qw)+'"/>';
  s+='<rect id="scLine" class="lnrow" x="'+qx+'" y="'+qy+'" width="'+qw+'" height="'+rh.toFixed(1)+'"/>';
  s+='<rect id="scBand" class="band" x="'+qx+'" y="'+qy+'" width="'+qw+'" height="'+rh.toFixed(1)+'"/>';
  s+='<rect class="frm" x="'+qx+'" y="'+qy+'" width="'+qw+'" height="'+qh+'"/>';
  s+='<text x="'+qx+'" y="'+(qy-12)+'" class="sm">CMOS · ROLLING SHUTTER</text>';
  s+='<text x="'+L.rlx+'" y="'+L.rly+'" class="sm">RETINA</text>';
  /* one caption per step */
  var CAP=["NEAR-INFRARED LINES","ACTIVE ROWS = CONFOCAL APERTURE","APERTURE OFFSET · DRUSEN","TUNABLE LENS · 3 MM PUPIL"];
  CAP.forEach(function(t,k){s+='<text class="a cap" x="'+L.capx+'" y="'+L.capy+'">'+t+'</text>'});
  return s;
}
var SC_L=null;
function scene(){
  var mob=MOBILE();
  if(mob){SC_L={ex:112,ey:138,r:92,cx:228,ix:200,pu:9,rr:86,nv:10,bs:"M282 120L318 156",sx:338,sy:112,sw:56,sh:52,slx:394,sly:100,sla:"end",
    pin:"M338 132H300M338 144H300M300 132H228M300 144H228",lx:258,lh:24,qx:20,qy:258,qw:370,qh:150,rows:10,rlx:8,rly:24,ret0:[300,138],ret1:[300,258],capx:20,capy:440};
    return '<svg class="mob" viewBox="0 0 400 452" aria-hidden="true">'+scBuild(SC_L)+'</svg>'}
  SC_L={ex:200,ey:290,r:175,cx:393,ix:362,pu:14,rr:165,nv:18,bs:"M512 318L568 262",sx:500,sy:70,sw:80,sh:66,slx:500,sly:58,
    pin:"M528 136V280M552 136V300M528 280H393M552 300H393",lx:452,lh:44,qx:610,qy:170,qw:186,qh:240,rows:16,rlx:20,rly:520,ret0:[540,290],ret1:[610,290],capx:420,capy:520};
  return '<svg viewBox="0 40 800 500" aria-hidden="true">'+scBuild(SC_L)+'</svg>';
}
function storyDraw(svg){
  var L=SC_L;
  var E={inb:$("#scIn",svg),f1:$("#scF1",svg),f2:$("#scF2",svg),dot:$("#scDot",svg),dg:$("#scDotG",svg),ret:$("#scRet",svg),mx:$("#scMx",svg),tl:$("#scTl",svg),
    rev:$("#scRev",svg),band:$("#scBand",svg),line:$("#scLine",svg),dr:$$("#scDr .dru",svg),cap:$$(".cap",svg),eo:$("#scE",svg),lines:$$("#scSrc .lines",svg),eye:$("#scEye",svg)};
  var LI=E.inb.getTotalLength(),LM=E.mx.getTotalLength();
  function dash(p,Lh,q){p.style.strokeDasharray=Lh.toFixed(1);p.style.strokeDashoffset=(Lh*(1-q)).toFixed(1)}
  var rh=L.qh/L.rows;
  return function(p,b){
    if(!E.eye.isConnected)return;
    var s1=seg(p,0,.2),s2=seg(p,.25,.48),s3=seg(p,.52,.72),s4=seg(p,.77,.96);
    var st=p<.25?0:p<.5?1:p<.75?2:3;
    svg.style.opacity=b;
    /* scan position: steps across in step 1, runs top to bottom with the read-out in step 2, repeats in step 3 */
    var u=st===0?(s1*2)%1:st===1?s2:st===2?(s3*1.5)%1:.5;
    var P=scP(L,u),cin=s1*(1-s4);
    dash(E.inb,LI,s1);E.inb.style.opacity=(1-.65*s4).toFixed(3);
    var fx=L.ix-L.r*.1;
    E.f1.setAttribute("d","M"+L.cx+" "+(L.ey-L.pu*.8)+"L"+fx+" "+(L.ey-L.pu*.5)+"L"+P[0].toFixed(1)+" "+P[1].toFixed(1));
    E.f2.setAttribute("d","M"+L.cx+" "+(L.ey+L.pu*.8)+"L"+fx+" "+(L.ey+L.pu*.5)+"L"+P[0].toFixed(1)+" "+P[1].toFixed(1));
    E.f1.style.opacity=E.f2.style.opacity=seg(s1,.6,1)*(1-s4);
    E.dot.setAttribute("cx",P[0].toFixed(1));E.dot.setAttribute("cy",P[1].toFixed(1));E.dg.setAttribute("cx",P[0].toFixed(1));E.dg.setAttribute("cy",P[1].toFixed(1));
    E.dot.style.opacity=E.dg.style.opacity=(seg(s1,.6,1)*(1-s4)).toFixed(3);
    /* return path */
    E.ret.setAttribute("d","M"+P[0].toFixed(1)+" "+P[1].toFixed(1)+"L"+fx+" "+L.ey+"L"+L.ret0[0]+" "+L.ret0[1]+"L"+L.ret1[0]+" "+L.ret1[1]);
    E.ret.style.opacity=(Math.min(1,s2*3)*(1-s4)).toFixed(3);
    /* the sensor reads band by band */
    var rev=st===0?0:st===1?s2:1;E.rev.setAttribute("height",(L.qh*rev).toFixed(1));
    var by=L.qy+Math.min(L.rows-1,Math.floor(u*L.rows))*rh;
    var off=st>=2?Math.round(2*Math.min(1,s3*3))*rh:0;
    E.line.setAttribute("y",by.toFixed(1));E.line.style.opacity=(st>=1&&st<3?1:0)*(st===2?1:.0001);
    var byb=Math.min(L.qy+L.qh-rh,by+off);E.band.setAttribute("y",byb.toFixed(1));
    E.band.style.opacity=(st===1||st===2?1:0).toString();
    E.dr.forEach(function(d,k){d.style.opacity=(seg(s3,.25+(k%13)*.04,.45+(k%13)*.04)).toFixed(3)});
    /* acuity target and Maxwellian view */
    E.eo.style.opacity=s4.toFixed(3);E.lines.forEach(function(l){l.style.opacity=(1-s4).toFixed(3)});
    E.tl.style.opacity=seg(s4,0,.4).toFixed(3);
    dash(E.mx,LM,seg(s4,.2,.8));E.mx.style.opacity=s4>0?1:0;
    E.cap.forEach(function(c,k){c.style.opacity=(k===st?1:0).toString()});
  };
}
