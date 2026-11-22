/* The story scene (BL/BY/DB): how the LCAPP works, after SummaCor's own diagram (summacorforlife.com/solution:
   descending aorta, nitinol frame, flow chamber, element, center core wire, drive shaft, anchor tube, kidneys) as ONE
   continuous fine-line scene. Step 1 (deploy): the catheter rises up the aorta and the nitinol frame opens above the
   renal arteries. Step 2 (fill): the element travels up the core wire and blood fills the chamber below it. Step 3
   (power stroke): on the ECG's R wave the element drives down and blood flows on to the kidneys and lower body.
   Driven by the scrubbed progress. */
var SCW=760,SCH=520,CX=380,AR=48,AI=42,Y0=140,Y1=330,TIPY=80,RY=410,FR=34;
function lcR(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};return R}
var LCD=(function(){var R=lcR(),a=[],i;for(i=0;i<26;i++){var side=i%3;a.push({o:R(),j:(R()-.5)*2,side:side})}return a})();
function lcHelix(ph,dir){var d='',i,n=48;for(i=0;i<=n;i++){var y=Y0+(Y1-Y0)*i/n,th=dir*(y-Y0)/(Y1-Y0)*Math.PI*2*2+ph;d+=(i?'L':'M')+(CX+FR*Math.sin(th)).toFixed(2)+' '+y.toFixed(1)}return d}
function lcKidney(cx,cy,flip){var f=flip?-1:1,p=function(x,y){return (cx+f*x).toFixed(1)+' '+(cy+y).toFixed(1)};
  return 'M'+p(48,-14)+'C'+p(58,-40)+' '+p(52,-78)+' '+p(10,-82)+'C'+p(-40,-86)+' '+p(-60,-40)+' '+p(-60,0)+'C'+p(-60,44)+' '+p(-40,86)+' '+p(10,82)+'C'+p(52,78)+' '+p(58,40)+' '+p(48,14)+'C'+p(36,10)+' '+p(36,-10)+' '+p(48,-14)+'Z'}
function lcEcg(x0,y0,w){var d='',k,beat=w/3;for(k=0;k<3;k++){var b=x0+k*beat;d+=(k?'L':'M')+b.toFixed(1)+' '+y0+'L'+(b+beat*.18).toFixed(1)+' '+y0+'Q'+(b+beat*.23).toFixed(1)+' '+(y0-6)+' '+(b+beat*.28).toFixed(1)+' '+y0+'L'+(b+beat*.36).toFixed(1)+' '+y0+'L'+(b+beat*.39).toFixed(1)+' '+(y0+5)+'L'+(b+beat*.43).toFixed(1)+' '+(y0-30)+'L'+(b+beat*.47).toFixed(1)+' '+(y0+9)+'L'+(b+beat*.5).toFixed(1)+' '+y0+'L'+(b+beat*.62).toFixed(1)+' '+y0+'Q'+(b+beat*.7).toFixed(1)+' '+(y0-10)+' '+(b+beat*.78).toFixed(1)+' '+y0+'L'+(b+beat).toFixed(1)+' '+y0}return d}
function lcScene(o){
  var g='',i,L=CX-AR,Rr=CX+AR;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* aorta lumen and walls, with the two renal arteries running out to the kidneys */
  g+='<path class="lum" d="M'+(CX-AI)+' 0V'+(RY-8)+'Q'+(CX-90)+' '+(RY-6)+' 210 '+(RY-2)+'V'+(RY+14)+'Q'+(CX-90)+' '+(RY+14)+' '+(CX-AI)+' '+(RY+12)+'V'+SCH+'H'+(CX+AI)+'V'+(RY+12)+'Q'+(CX+90)+' '+(RY+14)+' 550 '+(RY+14)+'V'+(RY-2)+'Q'+(CX+90)+' '+(RY-6)+' '+(CX+AI)+' '+(RY-8)+'V0Z"/>';
  g+='<path class="aw sD" d="M'+L+' 0V'+(RY-12)+'Q'+(CX-96)+' '+(RY-11)+' 206 '+(RY-6)+'"/><path class="aw sD" d="M206 '+(RY+18)+'Q'+(CX-96)+' '+(RY+18)+' '+L+' '+(RY+16)+'V'+SCH+'"/>';
  g+='<path class="aw sD" d="M'+Rr+' 0V'+(RY-12)+'Q'+(CX+96)+' '+(RY-11)+' 554 '+(RY-6)+'"/><path class="aw sD" d="M554 '+(RY+18)+'Q'+(CX+96)+' '+(RY+18)+' '+Rr+' '+(RY+16)+'V'+SCH+'"/>';
  g+='<path class="aw2 sD" d="M'+(CX-AI)+' 0V'+(RY-8)+'"/><path class="aw2 sD" d="M'+(CX+AI)+' 0V'+(RY-8)+'"/><path class="aw2 sD" d="M'+(CX-AI)+' '+(RY+12)+'V'+SCH+'"/><path class="aw2 sD" d="M'+(CX+AI)+' '+(RY+12)+'V'+SCH+'"/>';
  g+='<path class="kd sD" d="'+lcKidney(140,RY+6,0)+'"/><path class="kd sD" d="'+lcKidney(620,RY+6,1)+'"/>';
  g+='<path class="kd2 sD" d="'+lcKidney(140,RY+6,0).replace(/[\d.]+ [\d.]+/g,function(m){var q=m.split(' ');return ((+q[0]-140)*.72+140).toFixed(1)+' '+((+q[1]-RY-6)*.72+RY+6).toFixed(1)})+'"/>';
  g+='<path class="kd2 sD" d="'+lcKidney(620,RY+6,1).replace(/[\d.]+ [\d.]+/g,function(m){var q=m.split(' ');return ((+q[0]-620)*.72+620).toFixed(1)+' '+((+q[1]-RY-6)*.72+RY+6).toFixed(1)})+'"/>';
  /* the ECG the pump is gated to */
  g+='<path class="ecg0 sD" d="'+lcEcg(470,64,270)+'"/>';
  g+='<text class="t" x="470" y="26">ECG</text>';
  g+='<text class="t" x="'+(CX-AR-14)+'" y="40" text-anchor="end">DESCENDING AORTA</text>';
  g+='<text class="t" x="140" y="'+(RY+118)+'" text-anchor="middle">KIDNEY</text>';
  g+='<text class="t" x="620" y="'+(RY+118)+'" text-anchor="middle">KIDNEY</text>';
  g+='</g>';
  g+='<path class="ecg" id="ecgHi" d="'+lcEcg(470,64,270)+'"/><circle class="cur" id="ecgCur" r="3.6" cx="470" cy="64"/>';
  /* the device: drive shaft and anchor tube, then the nitinol frame (cage + flow chamber) and the element */
  g+='<defs><clipPath id="lcClip"><rect x="0" y="0" width="'+SCW+'" height="'+SCH+'"/></clipPath></defs><g clip-path="url(#lcClip)"><g id="dev">';
  g+='<path class="shaft" id="shaft" d="M'+CX+' '+SCH+'V'+(Y1+18)+'"/>';
  g+='<g id="frame">';
  g+='<path class="fab" d="M'+(CX-FR)+' '+Y0+'V'+Y1+'H'+(CX+FR)+'V'+Y0+'Z"/>';
  for(i=0;i<6;i++){g+='<path class="nw" d="'+lcHelix(i/6*Math.PI*2,1)+'"/><path class="nw" d="'+lcHelix(i/6*Math.PI*2,-1)+'"/>'}
  for(i=0;i<6;i++){var xs=CX+FR*Math.sin(i/6*Math.PI*2+.26);g+='<path class="cg" d="M'+xs.toFixed(1)+' '+Y0+'C'+xs.toFixed(1)+' '+(Y0-26)+' '+CX+' '+(TIPY+22)+' '+CX+' '+(TIPY+6)+'"/>';
    g+='<path class="cg" d="M'+xs.toFixed(1)+' '+Y1+'C'+xs.toFixed(1)+' '+(Y1+10)+' '+CX+' '+(Y1+8)+' '+CX+' '+(Y1+18)+'"/>'}
  g+='<path class="core" d="M'+CX+' '+(TIPY+6)+'V'+(Y1+18)+'"/>';
  g+='<rect class="tip" x="'+(CX-3)+'" y="'+(TIPY-6)+'" width="6" height="12" rx="3"/>';
  g+='</g>';
  g+='<path class="el" id="el" d="M-17 6L0 -14L17 6Z"/>';
  g+='</g></g>';
  g+='<g id="scFlow">';LCD.forEach(function(){g+='<circle class="bl" r="3"/>'});g+='</g>';
  g+='<g id="lb1"><path class="ld" d="M'+(CX+FR+8)+' '+(Y0+30)+'H'+(CX+150)+'"/><text x="'+(CX+156)+'" y="'+(Y0+34)+'">NITINOL FRAME</text><path class="ld" d="M'+(CX+8)+' '+(Y1+38)+'H'+(CX+150)+'"/><text x="'+(CX+156)+'" y="'+(Y1+42)+'">DRIVE SHAFT</text></g>';
  g+='<g id="lb2"><path class="ld" d="M'+(CX+FR+8)+' '+(Y0+90)+'H'+(CX+150)+'"/><text x="'+(CX+156)+'" y="'+(Y0+94)+'">FLOW CHAMBER FILLS</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(CX+156)+'" y="'+(Y1-56)+'">POWER STROKE</text><text x="'+(CX+156)+'" y="'+(Y1-36)+'">ON THE R WAVE</text></g>';
  return g+'</svg>';
}
function scene(){return lcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .lum",svg),dev:$("#dev",svg),frame:$("#frame",svg),shaft:$("#shaft",svg),el:$("#el",svg),bl:$$(".bl",svg),
    ecg:$("#ecgHi",svg),cur:$("#ecgCur",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var eL=E.ecg.getTotalLength();E.ecg.style.strokeDasharray=eL+" "+eL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var rise=sm2(seg(p,.02,.16)),open=sm2(seg(p,.14,.28)),up=sm2(seg(p,.36,.6)),down=sm2(seg(p,.7,.8)),flow=seg(p,.7,.97);
    /* deploy: the catheter rises up the aorta, then the frame opens from its sheathed width */
    E.dev.setAttribute("transform","translate(0 "+((1-rise)*300).toFixed(1)+")");op(E.dev,b*Math.min(1,rise*3));
    var sx=.18+.82*open;E.frame.setAttribute("transform","translate("+CX+" 0) scale("+sx.toFixed(3)+" 1) translate("+(-CX)+" 0)");
    /* the element: parked low, draws back up the core wire, then drives down on the R wave */
    var ey=Y1-14-(Y1-Y0-30)*up*(1-down);E.el.setAttribute("transform","translate("+CX+" "+ey.toFixed(1)+") scale("+(.3+.7*open).toFixed(3)+" 1)");op(E.el,open);
    /* ECG: the trace sweeps along with the story; the cursor rides it to the R wave of the third beat at the power stroke */
    var ep=Math.min(1,p*1.0/.76*.81);E.ecg.style.strokeDashoffset=(eL*(1-ep)).toFixed(1);var pt=E.ecg.getPointAtLength(eL*ep);E.cur.setAttribute("cx",pt.x.toFixed(1));E.cur.setAttribute("cy",pt.y.toFixed(1));
    op(E.ecg,b);op(E.cur,b);
    /* blood: falls into the chamber during fill, then is driven on to the kidneys and lower body */
    E.bl.forEach(function(el,i){var d=LCD[i],x,y,a;
      if(p<.7){var f=Math.max(0,Math.min(1,up*1.15-d.o*.15));x=CX+d.j*22;y=-10+(Y0+40-(-10))*(d.o*.55+f*.45)+(Y1-Y0-60)*f*d.o;a=b*seg(p,.36,.42)}
      else{var q=sm2(Math.max(0,Math.min(1,(flow-d.o*.35)/.65))),x0=CX+d.j*22,y0=Y0+30+(Y1-Y0-50)*d.o,tx=d.side===0?214:d.side===1?546:CX+d.j*14,ty=d.side===2?SCH+10:RY+5,cy0=d.side===2?(y0+ty)/2:RY+5;
        var u=1-q;x=u*u*x0+2*u*q*(d.side===2?x0:CX+d.j*10)+q*q*tx;y=u*u*y0+2*u*q*cy0+q*q*ty;a=b*(1-seg(q,.85,1))}
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,a)});
    op(E.l1,b*seg(p,.22,.28)*(1-seg(p,.32,.36)));op(E.l2,b*seg(p,.42,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.8));
  };
}
function sm2(x){return x*x*(3-2*x)}
