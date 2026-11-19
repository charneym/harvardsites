/* the story scene: ChrononAI's own pipeline (Acquire -> Understand -> Decide), drawn as one microscope field.
   Step 1 the time-lapse frames stack up behind the field; step 2 the cell is segmented and tracked, its earlier
   edges appear coded by time and are encoded into a temporal embedding; step 3 the phenotype report fills in with
   the KPIs the platform computes. Each step changes one labelled part. */
function scWrap(a){while(a>Math.PI)a-=6.283;while(a<-Math.PI)a+=6.283;return a}
function scCell(cx,cy,R,hd,t){var n=72,pts=[];for(var i=0;i<n;i++){var f=i/n*6.283-Math.PI,cf=Math.cos(f),fr=cf>0?cf*cf:0,tb=scWrap(f-Math.PI);
  var r=R*(.8+.25*cf+.1*Math.cos(2*f)+fr*(.05*Math.sin(7*f+1.3*t)+.032*Math.sin(11*f-.9*t+1)+.05*Math.sin(3*f+.5*t))+.4*Math.exp(-(tb*tb)/.05)*.85+.032*Math.sin(4*f+.3*t+2)+.026*Math.sin(5*f-.23*t));
  pts.push([cx+Math.cos(f+hd)*r,cy+Math.sin(f+hd)*r])}
  var d="";for(var j=0;j<=n;j++){var a=pts[j%n],b=pts[(j+1)%n],mx=((a[0]+b[0])/2).toFixed(1),my=((a[1]+b[1])/2).toFixed(1);d+=j===0?"M"+mx+" "+my:"Q"+a[0].toFixed(1)+" "+a[1].toFixed(1)+" "+mx+" "+my}return d+"Z"}
var SC_RAMP=["#ecf6f8","#b2e2ec","#8cd6e2","#6ab8e6","#4a96de","#2f7fcc","#166fba","#14559e","#143c8c"];
function scBuild(L){
  var s='';
  /* time-lapse frames stacked behind the field */
  s+='<g id="scSt">';for(var k=3;k>=1;k--){s+='<g class="sSt"><rect class="frm2 fbk" x="'+(L.px+L.so*k)+'" y="'+(L.py-L.so*k)+'" width="'+L.pw+'" height="'+L.ph+'"/><rect class="frm fb" x="'+(L.px+L.so*k)+'" y="'+(L.py-L.so*k)+'" width="'+L.pw+'" height="'+L.ph+'"/></g>'}s+='</g>';
  s+='<rect class="fbk0" x="'+L.px+'" y="'+L.py+'" width="'+L.pw+'" height="'+L.ph+'"/>';
  /* earlier edges, coded by time (oldest first) */
  var cx=L.cx,cy=L.cy,R=L.R,hd=L.hd,dx=Math.cos(hd),dy=Math.sin(hd);
  s+='<g id="scCt">';for(var c=8;c>=1;c--){var st=L.st*c,bx=cx-dx*st+Math.sin(c*.9)*L.R*.05,by=cy-dy*st;s+='<path class="ctr" style="stroke:'+SC_RAMP[c]+'" d="'+scCell(bx,by,R,hd-c*.025,10-c*1.1)+'"/>'}s+='</g>';
  /* track of the centroid */
  var tk="M"+cx.toFixed(1)+" "+cy.toFixed(1),dots="";for(var q=1;q<=8;q++){var x=cx-dx*L.st*q,y=cy-dy*L.st*q;tk+="L"+x.toFixed(1)+" "+y.toFixed(1);dots+='<circle class="tkd" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="2"/>'}
  /* the cell now */
  s+='<g id="scCell"><path class="cell" d="'+scCell(cx,cy,R,hd,10)+'"/>';
  var nx=cx-dx*R*.2,ny=cy-dy*R*.2;s+='<ellipse class="nuc" cx="'+nx.toFixed(1)+'" cy="'+ny.toFixed(1)+'" rx="'+(R*.36).toFixed(1)+'" ry="'+(R*.27).toFixed(1)+'" transform="rotate('+(hd*57.3).toFixed(1)+' '+nx.toFixed(1)+' '+ny.toFixed(1)+')"/>';
  s+='<circle class="nlo" cx="'+(nx+dx*R*.08).toFixed(1)+'" cy="'+(ny+dy*R*.08-R*.04).toFixed(1)+'" r="'+(R*.05).toFixed(1)+'"/></g>';
  s+='<g id="scTk"><path class="trk" d="'+tk+'"/>'+dots+'</g>';
  s+='<path id="scSeg" class="seg" d="'+scCell(cx,cy,R*1.05,hd,10)+'"/>';
  s+='<rect class="frm" x="'+L.px+'" y="'+L.py+'" width="'+L.pw+'" height="'+L.ph+'"/>';
  s+='<text x="'+(L.px+14)+'" y="'+(L.py+24)+'" class="sm">LIVE CELL</text>';
  s+='<text id="scSegL" x="'+(L.px+14)+'" y="'+(L.py+L.ph-14)+'" class="a sm">SEGMENTED · TRACKED</text>';
  s+='<text id="scStL" x="'+L.px+'" y="'+L.lab1+'" class="a">TIME-LAPSE · OME-TIFF</text>';
  /* temporal embedding */
  s+='<path id="scJ1" class="join" d="'+L.j1+'"/>';
  s+='<g id="scEm"><text x="'+L.ex+'" y="'+(L.ey-16)+'" class="a">'+(L.el||"TEMPORAL EMBEDDING")+'</text>';var EC=L.ec||8;
  var V=[.9,.35,.6,.15,.75,.45,.95,.25,.55,.8,.2,.65,.4,.85,.3,.7];
  for(var v=0;v<16;v++){var col=v%EC,row=v/EC|0;s+='<rect class="emb" x="'+(L.ex+col*(L.es+L.eg))+'" y="'+(L.ey+row*(L.es+L.eg))+'" width="'+L.es+'" height="'+L.es+'" style="fill-opacity:'+(.12+V[v]*.78).toFixed(2)+'"/>'}
  if(L.tl)s+='<text x="'+L.ex+'" y="'+L.tl+'" class="sm">TIME-SERIES TRANSFORMER</text>';
  s+='</g>';
  /* phenotype report */
  s+='<path id="scJ2" class="join" d="'+L.j2+'"/>';
  var rx=L.rx,ry=L.ry,rw=L.rw,rh=L.rh,pad=16;
  s+='<g id="scRp"><rect class="sheet" x="'+rx+'" y="'+ry+'" width="'+rw+'" height="'+rh+'"/><text x="'+(rx+pad)+'" y="'+(ry+26)+'" class="w">PHENOTYPE REPORT</text>';
  var K=[["WOUND CLOSURE RATE",.68],["MOTILITY PERSISTENCE",.42]],gy=ry+L.k0;
  K.forEach(function(kk,i){var y=gy+i*L.kd;s+='<g class="kpi"><text x="'+(rx+pad)+'" y="'+y+'" class="sm">'+kk[0]+'</text><path class="kr0" d="M'+(rx+pad)+' '+(y+13)+'H'+(rx+rw-pad)+'"/><path class="kr" d="M'+(rx+pad)+' '+(y+13)+'H'+(rx+pad+(rw-2*pad)*kk[1]).toFixed(1)+'"/><circle class="km" cx="'+(rx+pad+(rw-2*pad)*kk[1]).toFixed(1)+'" cy="'+(y+13)+'" r="3.5"/></g>'});
  var yc=gy+2*L.kd;s+='<g class="kpi"><text x="'+(rx+pad)+'" y="'+yc+'" class="sm">PHENOTYPE CLUSTERS</text>';
  var CL=[[.18,"#6ab8e6"],[.5,"#8cd6e2"],[.82,"#166fba"]],Rr=(function(sd){return function(){sd=(sd*16807)%2147483647;return (sd-1)/2147483646}})(5);
  CL.forEach(function(cl){var ccx=rx+pad+(rw-2*pad)*cl[0],ccy=yc+L.cy0;for(var d=0;d<9;d++){var a=Rr()*6.283,rr=Math.sqrt(Rr())*L.cr;s+='<circle class="cd" cx="'+(ccx+Math.cos(a)*rr*1.4).toFixed(1)+'" cy="'+(ccy+Math.sin(a)*rr).toFixed(1)+'" r="2.6" style="fill:'+cl[1]+'"/>'}});
  s+='</g></g>';
  return s;
}
function scene(){
  var mob=MOBILE();
  if(mob)return '<svg class="mob" viewBox="0 0 400 418" aria-hidden="true">'+scBuild({px:4,py:34,pw:232,ph:216,so:8,cx:122,cy:144,R:46,hd:-.45,st:8,lab1:270,
    j1:"M236 140H252",ex:254,ey:56,es:30,eg:5,ec:4,el:"EMBEDDING",tl:0,j2:"M322 192V284",rx:4,ry:284,rw:392,rh:132,k0:48,kd:30,cy0:20,cr:7})+'</svg>';
  return '<svg viewBox="0 20 800 460" aria-hidden="true">'+scBuild({px:24,py:72,pw:440,ph:362,so:16,cx:256,cy:246,R:84,hd:-.42,st:12,lab1:462,
    j1:"M464 253C496 253 494 156 520 156",ex:522,ey:108,es:26,eg:5,tl:196,j2:"M764 172V262",rx:522,ry:262,rw:256,rh:196,k0:62,kd:46,cy0:30,cr:10})+'</svg>';
}
function storyDraw(svg){
  var E={st:$$("#scSt .sSt",svg),stL:$("#scStL",svg),ct:$$("#scCt .ctr",svg),tk:$("#scTk",svg),trk:$("#scTk .trk",svg),seg:$("#scSeg",svg),segL:$("#scSegL",svg),cell:$("#scCell",svg),
    j1:$("#scJ1",svg),em:$("#scEm",svg),emb:$$("#scEm .emb",svg),j2:$("#scJ2",svg),rp:$("#scRp",svg),kr:$$("#scRp .kr",svg),km:$$("#scRp .km",svg),cd:$$("#scRp .cd",svg)};
  function len(p){return p.getTotalLength()}
  var LS=len(E.seg),LT=len(E.trk),L1=len(E.j1),L2=len(E.j2),LK=E.kr.map(len);
  function dash(p,L,q){p.style.strokeDasharray=L.toFixed(1);p.style.strokeDashoffset=(L*(1-q)).toFixed(1)}
  return function(p,b){
    if(!E.cell.isConnected)return;
    var s1=seg(p,0,.18),s2=seg(p,.36,.6),s3=seg(p,.7,.94);
    E.cell.style.opacity=b;
    E.st.forEach(function(g,k){var q=seg(s1,k*.2,.5+k*.2);g.style.opacity=(b*q*(1-.6*s2)).toFixed(3);g.style.transform="translate("+(-10*(1-q)).toFixed(1)+"px,"+(10*(1-q)).toFixed(1)+"px)"});
    E.stL.style.opacity=(b*s1).toFixed(3);
    E.ct.forEach(function(c,k){var q=seg(s2,(7-k)*.06,.5+(7-k)*.06);c.style.opacity=(b*q).toFixed(3)});
    E.tk.style.opacity=(b*s2).toFixed(3);dash(E.trk,LT,s2);
    E.seg.style.opacity=(b*Math.min(1,s2*3)).toFixed(3);dash(E.seg,LS,s2);E.segL.style.opacity=(b*s2).toFixed(3);
    dash(E.j1,L1,seg(s2,.3,1));E.j1.style.opacity=b;
    E.em.style.opacity=(b*seg(s2,.4,1)).toFixed(3);
    E.emb.forEach(function(r,k){var q=seg(s2,.4+k*.03,.6+k*.03);r.style.opacity=q.toFixed(3)});
    dash(E.j2,L2,seg(s3,0,.4));E.j2.style.opacity=b;
    E.rp.style.opacity=(b*seg(s3,.15,.5)).toFixed(3);
    E.kr.forEach(function(r,k){dash(r,LK[k],seg(s3,.3+k*.12,.75+k*.12))});
    E.km.forEach(function(m,k){m.style.opacity=seg(s3,.7+k*.12,.85+k*.12).toFixed(3)});
    E.cd.forEach(function(d,k){d.style.opacity=seg(s3,.55+(k%9)*.04,.75+(k%9)*.04).toFixed(3)});
  };
}
