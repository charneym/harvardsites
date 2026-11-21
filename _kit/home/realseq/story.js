/* the story scene (BL/BY/DB): ONE engraved RNA fragment kept on screen for all three steps.
   Step 1: an RNA fragment among others from a biofluid sample (the >90% of cfRNA that is fragmented).
   Step 2: a single adapter joins its end and the fragment closes into a circle (RealSeq's single-adapter
   circularization, which avoids two-adapter ligation bias). Step 3: the circle is sequenced and the reads line up
   on the transcript they came from. Sources: realseq.com RiboMarker platform and RNA fragmentomics pages.
   Schematic; lengths are illustrative. Driven by the scrubbed story progress. */
var RS={NF:16,NA:6,C:[400,250],R:150,y0:250,x0:100,x1:550};
function rsPos(i,c,sh){ /* c: 0 line -> 1 circle; sh: step-3 shift up and shrink */
  var n=RS.NF+RS.NA,lx,ly,ang,cx,cy,r=RS.R*(1-.3*sh);
  if(i<RS.NF){lx=RS.x0+i*(RS.x1-RS.x0)/(RS.NF-1);ly=RS.y0}else{lx=RS.x1+(i-RS.NF+1)*30;ly=RS.y0}
  ang=(RS.NF+(RS.NA-1)/2)/n*Math.PI*2-(i/n)*Math.PI*2;cx=RS.C[0]+r*Math.cos(ang);cy=RS.C[1]-84*sh-r*Math.sin(ang);
  var e=c*c*(3-2*c);
  return [lx+(cx-lx)*e,ly+(cy-ly)*e,ang];
}
var RSF=[[40,90,7,-.12],[560,440,7,.08],[60,430,6,.06],[580,80,6,-.08]]; /* other fragments: x,y,count,tilt */
var RSR=[[318,0],[296,1],[338,2],[308,3],[326,4]]; /* reads: x start, row */
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,n=RS.NF+RS.NA;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="rsg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f08f21" stop-opacity=".2"/><stop offset="1" stop-color="#f08f21" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase"><g id="rsOth">';
  RSF.forEach(function(o){var d='',dots='',k;for(k=0;k<o[2];k++){var x=o[0]+k*30,y=o[1]+k*30*o[3];d+=(k?'L':'M')+f(x)+' '+f(y);dots+='<circle class="nt o" cx="'+f(x)+'" cy="'+f(y)+'" r="7"/>'}
    g+='<path class="bb o sD" d="'+d+'"/>'+dots});
  g+='</g><text class="t" id="rsCap" x="784" y="546" text-anchor="end">RNA FRAGMENT · SCHEMATIC</text></g>';
  g+='<g id="scMove"><circle id="rsGlow" cx="400" cy="230" r="230" fill="url(#rsg)" opacity="0"/>';
  g+='<path class="bb" id="rsBB" d=""/>';
  for(i=0;i<n;i++)g+='<line class="bt'+(i>=RS.NF?' ad':'')+'" id="rsT'+i+'"/>';
  for(i=0;i<n;i++)g+='<circle class="nt'+(i>=RS.NF?' ad':'')+'" id="rsN'+i+'" r="9"/>';
  g+='<g id="rsRd"><path class="ref" d="M100 420H700"/>';
  for(i=0;i<=30;i++)g+='<path class="rt" d="M'+(100+i*20)+' 414V426"/>';
  RSR.forEach(function(r){var y=452+r[1]*18;g+='<path class="rd" d="M'+r[0]+' '+y+'H'+(r[0]+170)+'"/>'});
  g+='</g></g>';
  g+='<g id="lb1"><text class="a" x="100" y="'+(mob?318:310)+'">'+(mob?'RNA FRAGMENT':'ONE RNA FRAGMENT, 5′ TO 3′')+'</text>'+(mob?'':'<text class="t" x="100" y="332">SMALL, CELL-FREE, EASILY MISSED</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?780:760)+'" y="'+(mob?130:140)+'" text-anchor="end">'+(mob?'ADAPTER':'A SINGLE ADAPTER')+'</text><path class="ldr" id="lb2l" d=""/>'+
     '<text class="a" x="'+(mob?20:40)+'" y="'+(mob?70:80)+'">'+(mob?'CIRCLE':'CIRCULARIZED')+'</text><path class="ldr" id="lb2m" d=""/></g>';
  g+='<g id="lb3"><text class="a" x="100" y="'+(mob?398:402)+'">'+(mob?'TRANSCRIPT':'THE TRANSCRIPT IT CAME FROM')+'</text><text class="a" x="'+(mob?100:540)+'" y="'+(mob?548:490)+'">'+(mob?'READS':'SEQUENCING READS')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var n=RS.NF+RS.NA,N=[],T=[],i;for(i=0;i<n;i++){N.push($("#rsN"+i,svg));T.push($("#rsT"+i,svg))}
  var E={base:$$("#scBase .sD",svg).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]}),
    oth:$("#rsOth",svg),cap:$("#rsCap",svg),mv:$("#scMove",svg),bb:$("#rsBB",svg),gl:$("#rsGlow",svg),rd:$("#rsRd",svg),
    rds:$$("#rsRd .rd",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l2l:$("#lb2l",svg),l2m:$("#lb2m",svg)};
  var lastB=-1,f=function(v){return v.toFixed(1)};
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});op(E.cap,b);op(E.mv,b)}
    var s1=seg(p,0,.14),aIn=seg(p,.3,.42),circ=seg(p,.4,.56),s3=seg(p,.66,.84);
    op(E.oth,b*(.3+.7*s1)*(1-seg(p,.3,.42)));
    var d='',P=[],ce=circ*circ*(3-2*circ);
    for(i=0;i<n;i++){var q=rsPos(i,circ,s3);
      if(i>=RS.NF)q=[q[0]+(1-aIn)*60*(1-ce),q[1],q[2]];
      P.push(q);N[i].setAttribute("cx",f(q[0]));N[i].setAttribute("cy",f(q[1]));
      op(N[i],b*(i>=RS.NF?aIn:1));
      var ix=-Math.cos(q[2])*ce,iy=(1-ce)+Math.sin(q[2])*ce,L=Math.hypot(ix,iy)||1,k=1-.3*s3;
      T[i].setAttribute("x1",f(q[0]+ix/L*10));T[i].setAttribute("y1",f(q[1]+iy/L*10));T[i].setAttribute("x2",f(q[0]+ix/L*24*k));T[i].setAttribute("y2",f(q[1]+iy/L*24*k));
      op(T[i],b*.9*(i>=RS.NF?aIn:1))}
    var last=aIn<.02?RS.NF:n;
    for(i=0;i<last;i++)d+=(i?'L':'M')+f(P[i][0])+' '+f(P[i][1]);
    if(circ>.985)d+='Z';
    E.bb.setAttribute("d",d);
    op(E.gl,b*circ*.9);
    op(E.rd,b*s3);E.rds.forEach(function(r,j){var L=170,v=Math.max(0,Math.min(1,s3*1.6-j*.12));r.style.strokeDasharray=L+" "+L;r.style.strokeDashoffset=(L*(1-v)).toFixed(1)});
    var mob=svg.classList.contains("mob"),ad=P[RS.NF+1],tp=P[10];
    E.l2l.setAttribute("d","M"+(mob?740:700)+" "+(mob?144:154)+"L"+f(ad[0]+8)+" "+f(ad[1]-8));
    E.l2m.setAttribute("d","M"+(mob?60:100)+" "+(mob?84:94)+"L"+f(tp[0]-8)+" "+f(tp[1]-8));
    op(E.l1,b*s1*(1-seg(p,.26,.34)));op(E.l2,b*circ*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.72,.84));
  };
}
