/* the story scene (BL/BY/DB): ONE engraved elevation of a gear train, in the language of a machinist's drawing, echoing the
   hero. Step 1 the company's gear stands alone; step 2 its management and sponsor partners mesh with it; step 3 GarMark's
   gear (in the accent) engages: the tailored junior capital; step 4 two add-on gears join and the whole train turns. Every
   gear is phase-locked to its neighbour, and the train turns with the scroll. Lines draw on scroll; labels fade in with
   their step. */
function gearD(N,m,cx,cy){
  var rp=m*N/2,ra=rp+m,rr=rp-1.25*m,p=2*Math.PI/N,hwR=.31*p,hwP=.25*p,hwA=.16*p,u1=(rp-rr)/(ra-rr);
  var qa=((hwA-hwR)-(hwP-hwR)/u1)/(1-u1),qb=(hwP-hwR)/u1-qa*u1,f=function(n){return n.toFixed(1)};
  function hw(r){var u=(r-rr)/(ra-rr);return hwR+qb*u+qa*u*u}
  function P(r,a){return f(cx+r*Math.cos(a))+' '+f(cy+r*Math.sin(a))}
  var d='',k,i,r;
  for(k=0;k<N;k++){var a0=k*p;d+=(k?'L':'M')+P(rr,a0-.5*p)+'L'+P(rr,a0-hwR);
    for(i=1;i<=5;i++){r=rr+(ra-rr)*i/5;d+='L'+P(r,a0-hw(r))}
    d+='A'+f(ra)+' '+f(ra)+' 0 0 1 '+P(ra,a0+hwA);
    for(i=4;i>=0;i--){r=rr+(ra-rr)*i/5;d+='L'+P(r,a0+hw(r))}
    d+='A'+f(rr)+' '+f(rr)+' 0 0 1 '+P(rr,a0+.5*p)}
  return d+'Z';
}
function circ(cx,cy,r){var f=function(n){return n.toFixed(1)};return 'M'+f(cx+r)+' '+f(cy)+'A'+f(r)+' '+f(r)+' 0 1 0 '+f(cx-r)+' '+f(cy)+'A'+f(r)+' '+f(r)+' 0 1 0 '+f(cx+r)+' '+f(cy)}
/* layout: gear 0 is the company; others mesh with a parent at angle phi (radians, canvas y-down) */
function trainLayout(o){
  var G=[{N:40,x:o.ax,y:o.ay,par:-1,phi:0,cls:"gA"},{N:24,par:0,phi:-.70,cls:"gB"},{N:16,par:0,phi:.44,cls:"gC"},{N:12,par:2,phi:-.26,cls:"gD"},{N:14,par:1,phi:.17,cls:"gD"}];
  G.forEach(function(g){if(g.par<0)return;var P=G[g.par],d=(P.N+g.N)*o.m/2;g.x=P.x+d*Math.cos(g.phi);g.y=P.y+d*Math.sin(g.phi)});
  return G;
}
function gearSvg(g,m,id,cls,dr){
  var f=function(n){return n.toFixed(1)},rp=m*g.N/2,rr=rp-1.25*m,hub=Math.max(m*1.9,rp*.28),web=rr-m*.9,s='';
  s+='<g class="rot" id="'+id+'" data-x="'+f(g.x)+'" data-y="'+f(g.y)+'">';
  s+='<path class="'+cls+' '+dr+'" d="'+gearD(g.N,m,g.x,g.y)+'"/>';
  s+='<path class="'+cls+'w '+dr+'" d="'+circ(g.x,g.y,web)+circ(g.x,g.y,hub)+'"/>';
  var nh=g.N>20?6:g.N>13?5:0,hc=(web+hub)/2,hr=Math.min((web-hub)*.32,hc*Math.sin(Math.PI/Math.max(nh,1))*.6),k;
  if(nh){var hd='';for(k=0;k<nh;k++){var a=k/nh*Math.PI*2;hd+=circ(g.x+hc*Math.cos(a),g.y+hc*Math.sin(a),hr)}s+='<path class="'+cls+'w '+dr+'" d="'+hd+'"/>'}
  var b=hub*.38;s+='<path class="'+cls+'w '+dr+'" d="'+circ(g.x,g.y,b)+'M'+f(g.x-b*.22)+' '+f(g.y-b*.97)+'v'+f(-b*.42)+'h'+f(b*.44)+'v'+f(b*.42)+'"/>';
  s+='</g>';
  /* fixed centre marks and the pitch circle */
  s+='<path class="cl" d="M'+f(g.x-hub*1.5)+' '+f(g.y)+'H'+f(g.x+hub*1.5)+'M'+f(g.x)+' '+f(g.y-hub*1.5)+'V'+f(g.y+hub*1.5)+'"/>';
  s+='<path class="pc" d="'+circ(g.x,g.y,rp)+'"/>';
  return s;
}
function train(o){
  var W=o.W,H=o.H,m=o.m,G=trainLayout(o),f=function(n){return n.toFixed(1)};
  var s='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true" data-m="'+m+'">';
  s+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="'+(W-1)+'" height="'+(H-1)+'"/>';
  s+=gearSvg(G[0],m,"gr0","gA","sD");
  s+='<path class="tbl" d="'+o.tbl+'"/><text x="'+o.tb[0]+'" y="'+o.tb[1]+'" class="t">'+o.tbT[0]+'</text><text x="'+o.tb[0]+'" y="'+(o.tb[1]+15)+'" class="t s">'+o.tbT[1]+'</text></g>';
  function lab(L,cls){var t='<text x="'+L[0]+'" y="'+L[1]+'" text-anchor="'+L[2]+'" class="'+(cls||"")+'">';L[3].split("|").forEach(function(x,i){t+='<tspan x="'+L[0]+'" dy="'+(i?17:0)+'">'+x+'</tspan>'});return t+'</text>'}
  function lead(d){return d?'<path class="ld" d="'+d+'"/>':''}
  s+='<g id="sc1">'+lab(o.l1)+lead(o.d1)+'</g>';
  s+='<g id="sc2">'+gearSvg(G[1],m,"gr1","gB","dr")+lab(o.l2)+lead(o.d2)+'</g>';
  s+='<g id="sc3">'+gearSvg(G[2],m,"gr2","gC","dr")+lab(o.l3,"a")+lead(o.d3)+'</g>';
  s+='<g id="sc4">'+gearSvg(G[3],m,"gr3","gD","dr")+gearSvg(G[4],m,"gr4","gD","dr")+lab(o.l4)+lead(o.d4)+'</g>';
  return s+'</svg>';
}
function scene(){
  if(MOBILE())return train({mob:1,W:400,H:440,m:3.7,ax:140,ay:236,
    tbl:"M248 398H392M248 398V432",tb:[256,414],tbT:["ELEVATION","NOT TO SCALE"],
    l1:[134,342,"middle","THE COMPANY"],l2:[231,100,"middle","PARTNERS"],l3:[244,366,"middle","GARMARK"],l4:[392,224,"end","ADD-ONS"],
    d1:"",d2:"",d3:"",d4:""});
  return train({W:800,H:520,m:7,ax:236,ay:296,
    tbl:"M612 476H788M612 476V508",tb:[620,490],tbT:["GEAR TRAIN · ELEVATION","NOT TO SCALE"],
    l1:[236,484,"middle","THE COMPANY"],l2:[618,58,"start","MANAGEMENT|AND SPONSORS"],l3:[618,404,"start","GARMARK|JUNIOR CAPITAL"],l4:[618,262,"start","ADD-ONS|AND GROWTH"],
    d1:"",d2:"M482 92L606 58",d3:"M470 412L606 404",d4:"M590 214L606 258M558 340L606 270"});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tbl, #scBase text, #scBase .cl, #scBase .pc",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)],
    l:[$("#sc2 .ld",svg),$("#sc3 .ld",svg),$("#sc4 .ld",svg)],ex:[$$("#sc2 .cl, #sc2 .pc",svg),$$("#sc3 .cl, #sc3 .pc",svg),$$("#sc4 .cl, #sc4 .pc",svg)]};
  var R=$$(".rot",svg).map(function(g){return {el:g,x:+g.getAttribute("data-x"),y:+g.getAttribute("data-y")}});
  var N=[40,24,16,12,14],PAR=[-1,0,0,2,1],PHI=[0,-.70,.44,-.26,.17];
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(list,v){list.forEach(function(el){if(el)el.style.opacity=v.toFixed(3)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.fade,b)}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* the train turns with the scroll; driven gears stay phase-locked so the teeth always interleave */
    var th=[];for(var i=0;i<5;i++){if(PAR[i]<0)th.push(p*1.6);else{var tp=th[PAR[i]];th.push(PHI[i]+Math.PI-Math.PI/N[i]-(tp-PHI[i])*N[PAR[i]]/N[i])}
      R[i].el.setAttribute("transform","rotate("+(th[i]*180/Math.PI).toFixed(2)+" "+R[i].x+" "+R[i].y+")")}
    E.g1.style.opacity=b.toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    E.t[0].style.opacity=String(Math.max(.0,1));
    op([E.t[1],E.l[0]],s2);op([E.t[2],E.l[1]],s3);op([E.t[3],E.l[2]],s4);
    op(E.ex[0],s2*.9);op(E.ex[1],s3*.9);op(E.ex[2],s4*.9);
  };
}
