/* the story scene (BL/BY/DB): ONE engraved drawing, a gear train on a drawing sheet. Step one is the company itself, a
   single large spur gear drawn in full (teeth, web, lightening holes, hub and keyway) and centred in the frame. With the
   occasion for change (step two) it settles to its working position and a second wheel, the majority shareholder, meshes
   with it; partnership with management (step three) adds a third wheel; growth (step four) adds a pinion and the output
   shaft. Every wheel turns with the scroll at its true ratio, in mesh. Lines draw on scroll; one label per step. */
var GM=10,GEARS={A:{x:270,y:320,N:28},B:{N:16},C:{N:12},D:{N:8}};
(function(){var A=GEARS.A,B=GEARS.B,C=GEARS.C,D=GEARS.D;
  function at(P,Q,deg){var d=(P.N+Q.N)*GM/2,a=deg*Math.PI/180;Q.x=P.x+d*Math.cos(a);Q.y=P.y+d*Math.sin(a);Q.phi=a}
  at(A,B,-32);at(B,C,42);at(C,D,14)})();
function gearPath(N){
  var r=N*GM/2,ra=r+GM,rf=r-1.25*GM,p=2*Math.PI/N,s='';
  function P(rr,a){return (rr*Math.cos(a)).toFixed(2)+' '+(rr*Math.sin(a)).toFixed(2)}
  for(var k=0;k<N;k++){var c=k*p;
    s+=(k?'L':'M')+P(rf,c-.5*p)+'A'+rf+' '+rf+' 0 0 1 '+P(rf,c-.31*p)+'Q'+P(r*.995,c-.29*p)+' '+P(r,c-.25*p)+'Q'+P(ra*.985,c-.19*p)+' '+P(ra,c-.13*p)+'A'+ra+' '+ra+' 0 0 1 '+P(ra,c+.13*p)+'Q'+P(ra*.985,c+.19*p)+' '+P(r,c+.25*p)+'Q'+P(r*.995,c+.29*p)+' '+P(rf,c+.31*p)+'A'+rf+' '+rf+' 0 0 1 '+P(rf,c+.5*p)}
  return s+'Z';
}
function circ(x,y,r){return 'M'+(x-r).toFixed(2)+' '+y.toFixed(2)+'a'+r+' '+r+' 0 1 0 '+(2*r)+' 0a'+r+' '+r+' 0 1 0 '+(-2*r)+' 0'}
function gearBody(N){
  var r=N*GM/2,rf=r-1.25*GM,rim=rf-GM*1.1,hub=Math.max(14,r*.26),bore=Math.max(6,r*.11),s='',k='',h='';
  s+=gearPath(N)+circ(0,0,hub)+circ(0,0,bore);
  /* keyway in the bore */
  s+='M'+(-bore*.32).toFixed(2)+' '+(-bore*.95).toFixed(2)+'V'+(-bore*1.35).toFixed(2)+'H'+(bore*.32).toFixed(2)+'V'+(-bore*.95).toFixed(2);
  if(N>=12){k+=circ(0,0,rim);
    var nh=N>=24?6:N>=16?5:4,rr=(rim+hub)/2,hr=(rim-hub)*.34;for(var i=0;i<nh;i++){var a=i*2*Math.PI/nh+.3;s+=circ(rr*Math.cos(a),rr*Math.sin(a),hr)}}
  /* the pitch circle, dashed, and fine hatching on the hub face */
  h+=circ(0,0,r);
  for(var y=-hub+4;y<hub;y+=5){var xx=Math.sqrt(Math.max(0,hub*hub-y*y)),xb=Math.abs(y)<bore?Math.sqrt(bore*bore-y*y):0;if(xb){k+='M'+(-xx).toFixed(1)+' '+y+'H'+(-xb-1).toFixed(1)+'M'+(xb+1).toFixed(1)+' '+y+'H'+xx.toFixed(1)}else k+='M'+(-xx).toFixed(1)+' '+y+'H'+xx.toFixed(1)}
  return {s:s,k:k,h:h,r:r};
}
function gearSvg(id,cls){var g=GEARS[id],b=gearBody(g.N);
  return '<g id="g'+id+'" transform="translate('+g.x.toFixed(2)+' '+g.y.toFixed(2)+')"><g class="rot"><path class="gw" d="'+gearPath(g.N)+'"/><path class="bl '+cls+'" d="'+b.s+'"/><path class="kb '+cls+'" d="'+b.k+'"/></g><path class="pc" d="'+b.h+'"/>'+
    '<path class="cl" d="M'+(-b.r-16)+' 0H'+(b.r+16)+'M0 '+(-b.r-16)+'V'+(b.r+16)+'"/></g>'}
function scene(){
  var mob=MOBILE(),A=GEARS.A,B=GEARS.B,C=GEARS.C,D=GEARS.D;
  var g='<svg viewBox="0 96 800 420" preserveAspectRatio="xMidYMid meet" class="'+(mob?'mob':'')+'" role="img" aria-label="Gravur eines Zahnradgetriebes: zuerst ein großes Zahnrad, dann greifen nacheinander drei weitere Räder ein und das Getriebe dreht sich">';
  g+='<g id="scBase"><rect class="neat" x="8" y="104" width="784" height="404"/><path class="neat" d="M8 128H32M8 484H32M768 104V128M768 484V508"/>';
  g+='<g class="tb"><path class="tbl" d="M24 474H262V500H24Z M150 474V500"/><text class="t" x="34" y="491">FINATEM · ANSATZ</text><text class="t s" x="160" y="491">SEIT 2000</text></g></g>';
  /* centre lines that tie the train together, drawn as each wheel arrives */
  g+='<g id="sc2"><path class="ln dr" d="M'+A.x+' '+A.y+'L'+B.x.toFixed(1)+' '+B.y.toFixed(1)+'"/>'+gearSvg('B','dr')+'<text class="a" x="776" y="478" text-anchor="end">MEHRHEITSBETEILIGUNG</text><text class="t" x="776" y="496" text-anchor="end">NACHFOLGE · KONZERN-SPIN-OFF</text></g>';
  g+='<g id="sc3"><path class="ln dr" d="M'+B.x.toFixed(1)+' '+B.y.toFixed(1)+'L'+C.x.toFixed(1)+' '+C.y.toFixed(1)+'"/>'+gearSvg('C','dr')+'<text class="a" x="776" y="478" text-anchor="end">PARTNER DES MANAGEMENTS</text><text class="t" x="776" y="496" text-anchor="end">INDUSTRIE-EXPERTEN · PROJEKTBEZOGEN</text></g>';
  var sx=D.x+D.N*GM/2+GM+8;
  g+='<g id="sc4"><path class="ln dr" d="M'+C.x.toFixed(1)+' '+C.y.toFixed(1)+'L'+D.x.toFixed(1)+' '+D.y.toFixed(1)+'"/>'+gearSvg('D','dr')+
     '<path class="bl dr" d="M'+D.x.toFixed(1)+' '+(D.y-7).toFixed(1)+'H'+(sx+14).toFixed(1)+'V'+(D.y+7).toFixed(1)+'H'+D.x.toFixed(1)+'"/>'+
     '<path class="dim dr" d="M'+(sx+22).toFixed(1)+' '+(D.y).toFixed(1)+'h26m-8 -5l8 5-8 5"/>'+
     '<text class="a" x="776" y="478" text-anchor="end">WACHSTUM</text><text class="t" x="776" y="496" text-anchor="end">FOLGEINVESTITIONEN</text></g>';
  g+='<g id="sc1">'+gearSvg('A','sD')+'<text class="a" x="776" y="478" text-anchor="end">DAS UNTERNEHMEN</text><text class="t" x="776" y="496" text-anchor="end">UMSATZ € 10–50 MIO. · EBITDA € 2–6 MIO.</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#sc1 .sD"),fade:$$("#scBase .neat, #scBase .tb, #gA .pc, #gA .cl, #gA .gw",svg),gA:$("#gA",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),f2:$$("#sc2 .pc, #sc2 .cl, #sc2 .gw",svg),f3:$$("#sc3 .pc, #sc3 .cl, #sc3 .gw",svg),f4:$$("#sc4 .pc, #sc4 .cl, #sc4 .gw",svg),
    rot:{A:$("#gA .rot",svg),B:$("#gB .rot",svg),C:$("#gC .rot",svg),D:$("#gD .rot",svg)},
    t:[$$("#sc1 text",svg),$$("#sc2 text",svg),$$("#sc3 text",svg),$$("#sc4 text",svg)]};
  var lastB=-1,A=GEARS.A,R2D=180/Math.PI;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(list,v){list.forEach(function(el){el.style.opacity=v.toFixed(3)})}
  /* mesh: each wheel's angle follows its driver at the tooth ratio, phased so a tooth sits in the driver's gap */
  function mesh(P,Q,thP){var pP=2*Math.PI/P.N,pQ=2*Math.PI/Q.N,phi=Q.phi;return phi+Math.PI+pQ*((phi-thP)/pP-.5)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.fade,b)}
    var s2=seg(p,.2,.42),s3=seg(p,.47,.68),s4=seg(p,.73,.94);
    /* the company wheel settles from the centre of the sheet to its working position */
    var k=1.22-.22*s2,x=400+(A.x-400)*s2,y=300+(A.y-300)*s2;
    E.gA.setAttribute("transform","translate("+x.toFixed(2)+" "+y.toFixed(2)+") scale("+k.toFixed(4)+")");
    var thA=p*Math.PI*1.1,thB=mesh(A,GEARS.B,thA),thC=mesh(GEARS.B,GEARS.C,thB),thD=mesh(GEARS.C,GEARS.D,thC);
    E.rot.A.setAttribute("transform","rotate("+(thA*R2D).toFixed(2)+")");E.rot.B.setAttribute("transform","rotate("+(thB*R2D).toFixed(2)+")");
    E.rot.C.setAttribute("transform","rotate("+(thC*R2D).toFixed(2)+")");E.rot.D.setAttribute("transform","rotate("+(thD*R2D).toFixed(2)+")");
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);op(E.f2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);op(E.f3,s3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);op(E.f4,s4);
    var h1=function(x){return seg(x,0,.5)},h2=function(x){return seg(x,.5,1)};
    op(E.t[0],b*(1-h1(s2)));op(E.t[1],h2(s2)*(1-h1(s3)));op(E.t[2],h2(s3)*(1-h1(s4)));op(E.t[3],h2(s4));
  };
}
