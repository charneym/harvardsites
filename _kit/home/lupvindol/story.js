/* the story scene (BL/BY/DB): ONE engraved plate, kept on screen throughout; each step adds one part of Lupvindol's approach as
   lupvindol.com and its October 2025 press releases describe it: a corticosteroid (cortisone, the molecule their own site shows),
   cannabidiol as the steroid-sparing partner (skeletal formulas drawn to the real structures), the patented fixed-dose
   combination aimed at a much lower steroid dose (their "around 80%"), and the two open INADs (canine IBD, equine OA) leading
   toward human use. Layout is schematic. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var S3=Math.sqrt(3);
  function P(x,y){return x.toFixed(1)+' '+y.toFixed(1)}
  function hex(cx,cy,b){var v=[];for(var k=0;k<6;k++){var a=(-90+60*k)*Math.PI/180;v.push([cx+b*Math.cos(a),cy+b*Math.sin(a)])}return v}
  function poly(v){return 'M'+v.map(function(p){return P(p[0],p[1])}).join('L')+'Z'}
  function ln(a,b){return 'M'+P(a[0],a[1])+'L'+P(b[0],b[1])}
  function off(a,d,deg){var r=deg*Math.PI/180;return [a[0]+d*Math.cos(r),a[1]+d*Math.sin(r)]}
  /* a parallel inner bond (double bond), drawn shortened toward the ring centre or to one side */
  function dbl(a,b,c,k){k=k||.18;var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=c[0]-mx,dy=c[1]-my,L=Math.hypot(dx,dy);dx/=L;dy/=L;var o=6;
    var a2=[a[0]+(b[0]-a[0])*k+dx*o,a[1]+(b[1]-a[1])*k+dy*o],b2=[b[0]+(a[0]-b[0])*k+dx*o,b[1]+(a[1]-b[1])*k+dy*o];return ln(a2,b2)}
  function par(a,b,sd){var dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy),nx=-dy/L*5*sd,ny=dx/L*5*sd;return ln([a[0]+nx,a[1]+ny],[b[0]+nx,b[1]+ny])}
  function atom(p,t,l){return '<text x="'+(p[0]+(l?8:0)).toFixed(1)+'" y="'+(p[1]+5).toFixed(1)+'" class="atom" text-anchor="middle">'+t+'</text>'}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="ld sD" d="M40 366H760"/>';
  g+='<g class="tb"><path class="tbl" d="M548 16h228v52h-228Z M548 42h228"/><text x="558" y="34" class="t">PLATE I · THE COMBINATION</text><text x="558" y="60" class="t s">LUPVINDOL BIOSCIENCES</text></g>';
  g+='</g>';
  /* 1 cortisone: rings A, B, C (six) and D (five), 3- and 11-keto, delta-4, 17-OH, the C20 ketone and C21 OH, two angular methyls */
  var b=44,A=[112,278],B=[A[0]+b*S3,A[1]],C=[B[0]+b*S3/2,B[1]-1.5*b];
  var hA=hex(A[0],A[1],b),hB=hex(B[0],B[1],b),hC=hex(C[0],C[1],b);
  var ex=C[0]+b*S3/2,R=b/(2*Math.sin(36*Math.PI/180)),Pc=[ex+b/(2*Math.tan(36*Math.PI/180)),C[1]];
  var pv=[144,216,288,0,72].map(function(d){return off(Pc,R,d)});/* 0 C14, 1 C13, 2 C17, 3 C16, 4 C15 */
  var st=poly(hA)+poly(hB)+poly(hC)+ln(pv[1],pv[2])+ln(pv[2],pv[3])+ln(pv[3],pv[4])+ln(pv[4],pv[0]);
  /* C3 = A v150? the leftmost lower vertex; carbonyl outward */
  var C3=hA[4],O3=off(C3,b*.95,150);
  var C4=hA[3],C5=hA[2];
  var C10=hA[1],Me19=off(C10,b*.9,-90);
  var C11=hC[5],O11=off(C11,b*.95,210);
  var C13=pv[1],Me18=off(C13,b*.9,-90);
  var C17=pv[2],C20=off(C17,b,-60),C21=off(C20,b,0);
  var sub=ln(C3,off(C3,b*.62,150))+ln(C10,Me19)+ln(C11,off(C11,b*.62,210))+ln(C13,Me18)+ln(C17,C20)+ln(C20,off(C20,b*.6,-120))+ln(C20,C21)+ln(C21,off(C21,b*.55,-60))+ln(C17,off(C17,b*.55,20));
  var dbs=dbl(C4,C5,A)+par(C3,off(C3,b*.62,150),1)+
    par(C11,off(C11,b*.62,210),1)+
    par(C20,off(C20,b*.6,-120),1);
  g+='<g id="sc1"><path class="mol dr" d="'+st+sub+'"/><path class="mol2 dr" d="'+dbs+'"/>'+
     atom(off(C3,b*.92,150),'O')+atom(off(C11,b*.92,210),'O')+atom(off(C20,b*.92,-120),'O')+atom(off(C21,b*.9,-60),'OH',1)+atom(off(C17,b*.9,20),'OH',1)+
     '<text x="40" y="352" class="t c">'+(mob?'CORTISONE':'CORTICOSTEROID · CORTISONE SHOWN')+'</text>'+
     '<text x="40" y="60" class="a">THE CORTICOSTEROID</text></g>';
  /* 2 cannabidiol: the resorcinol ring (two OH, pentyl chain) joined to the menthene ring (methyl, isopropenyl) */
  var b2=36,Ar=[584,252],hR=hex(Ar[0],Ar[1],b2),j=hR[5],k1=off(j,b2,210),Cy=[k1[0]-b2*S3/2,k1[1]-b2/2],hY=hex(Cy[0],Cy[1],b2);
  var oh1=off(hR[0],b2*.62,-90),oh2=off(hR[4],b2*.62,150);
  var p1=off(hR[2],b2,30),p2=off(p1,b2,-30),p3=off(p2,b2,30),p4=off(p3,b2,-30),p5=off(p4,b2,30);
  var me=off(hY[0],b2*.85,-90),i8=off(hY[3],b2,90),i9=off(i8,b2*.85,150),i10=off(i8,b2*.7,70);
  var cbd=poly(hR)+ln(j,k1)+poly(hY)+ln(hR[0],oh1)+ln(hR[4],oh2)+ln(hR[2],p1)+ln(p1,p2)+ln(p2,p3)+ln(p3,p4)+ln(p4,p5)+ln(hY[0],me)+ln(hY[3],i8)+ln(i8,i9)+ln(i8,i10);
  var cd=dbl(hR[0],hR[1],Ar)+dbl(hR[2],hR[3],Ar)+dbl(hR[4],hR[5],Ar)+dbl(hY[0],hY[5],Cy)+par(i8,i9,-1);
  g+='<g id="sc2"><path class="mol dr" d="'+cbd+'"/><path class="mol2 dr" d="'+cd+'"/>'+
     atom(off(hR[0],b2*.92,-90),'OH')+atom(off(hR[4],b2*.95,150),'HO')+
     '<text x="760" y="352" class="t c" text-anchor="end">'+(mob?'CBD':'CANNABIDIOL (CBD)')+'</text>'+
     '<text x="40" y="60" class="a">THE STEROID-SPARING PARTNER</text></g>';
  /* 3 the fixed-dose combination: both flow into one scored tablet; the steroid dose it aims for, as a pair of bars */
  var TX=400,TY=440;
  g+='<g id="sc3"><path class="flow dr" d="M200 374C210 416 290 422 '+(TX-60)+' '+(TY-6)+'M600 374C590 416 510 422 '+(TX+60)+' '+(TY-6)+'"/>'+
     '<path class="tab" d="M'+(TX-62)+' '+TY+'v12a62 22 0 0 0 124 0v-12"/><ellipse class="tab" cx="'+TX+'" cy="'+TY+'" rx="62" ry="22"/><path class="wi dr" d="M'+(TX-50)+' '+TY+'H'+(TX+50)+'"/>'+
     '<text x="'+TX+'" y="'+(TY+64)+'" class="t c" text-anchor="middle">'+(mob?'ONE FIXED DOSE':'FIXED-DOSE COMBINATION')+'</text>'+
     '<text x="'+TX+'" y="'+(TY+84)+'" class="t s tb" text-anchor="middle">PATENTED · OPTIMISED RATIO</text>'+
     '<text x="40" y="402" class="t">'+(mob?'STEROID':'STEROID ALONE')+'</text><path class="bar0 dr" d="M40 416H230"/>'+
     '<text x="40" y="452" class="t">'+(mob?'COMBINED':'IN COMBINATION')+'</text><path class="bar1 dr" d="M40 466H78"/>'+
     '<text x="40" y="500" class="t c">'+(mob?'~80% LOWER':'AIM: ~80% LOWER STEROID DOSE')+'</text>'+
     '<text x="40" y="60" class="a">ONE FIXED DOSE</text></g>';
  /* 4 the programmes: from the tablet to dogs, horses, then people */
  g+='<g id="sc4"><path class="up dr" d="M'+(TX+66)+' '+(TY-2)+'C520 '+(TY-2)+' 520 392 568 392M'+(TX+66)+' '+(TY+6)+'H568M'+(TX+66)+' '+(TY+14)+'C520 '+(TY+14)+' 520 490 568 490"/>'+
     '<text x="578" y="390" class="t c">'+(mob?'DOGS · IBD':'CANINE IBD')+'</text><text x="578" y="408" class="t s tb">'+(mob?'INAD OPEN':'INAD OPEN · OCT 2025')+'</text>'+
     '<text x="578" y="444" class="t c">'+(mob?'HORSES · OA':'EQUINE OSTEOARTHRITIS')+'</text><text x="578" y="462" class="t s tb">'+(mob?'INAD OPEN':'INAD OPEN · OCT 2025')+'</text>'+
     '<text x="578" y="494" class="t c">'+(mob?'PEOPLE':'HUMAN MEDICINE')+'</text><text x="578" y="512" class="t s tb">'+(mob?'NEXT':'PLANNED NEXT')+'</text>'+
     '<text x="40" y="60" class="a">ANIMALS FIRST, THEN PEOPLE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t, #sc1 text.atom",svg),$$("#sc2 text.t, #sc2 text.atom",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one pair of glasses; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
