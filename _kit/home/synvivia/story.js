/* The story scene (DB/BL/BY): Synvivia's own mechanism, from the NIH abstract for 5R44GM158472 — a vector
   packaging cell that releases mostly empty capsid; a ~50M-member cyclic peptide library expressed inside the
   cells by synthetic helper genes; a competitive enrichment that keeps the members which raise yield or quality;
   and the resulting batch, with far more full, functional vectors. ONE continuous scene that fills the frame:
   the packaging cell on the left, the batch it produces on the right, both on screen from the first frame.
   Step 1: capsids stream out and the batch fills; only two of the fifteen carry a genome.
   Step 2: cyclic peptides (rings of beads) appear inside the cell.
   Step 3: all but two fade; those two go to the accent — enrichment keeps what works.
   Step 4: the genomes fill in across the batch.
   Everything is driven by the scrubbed progress; nothing appears that the step text does not explain. */
var SCW=760,SCH=560;
function f1(v){return (Math.round(v*10)/10).toString()}
/* --- the packaging cell: one closed organic outline, and its nucleus --- */
var CELL={x:252,y:300,rx:170,ry:160};
var NUC={x:214,y:272,rx:72,ry:60};
/* one smooth closed outline: a cubic spline through gently modulated radii, so the membrane never
   kinks and never crosses itself. The same seed at a smaller radius gives a concentric inner line. */
function blob(cx,cy,rx,ry,seed,n){
  var P=[],i,a,r;
  for(i=0;i<n;i++){
    a=i/n*Math.PI*2;
    r=1+0.052*Math.sin(a*3+seed)+0.026*Math.sin(a*5-seed*1.7);
    P.push([cx+Math.cos(a)*rx*r,cy+Math.sin(a)*ry*r]);
  }
  var d="M"+f1(P[0][0])+" "+f1(P[0][1]);
  for(i=0;i<n;i++){
    var p0=P[(i-1+n)%n],p1=P[i],p2=P[(i+1)%n],p3=P[(i+2)%n];
    d+="C"+f1(p1[0]+(p2[0]-p0[0])/6)+" "+f1(p1[1]+(p2[1]-p0[1])/6)+
       " "+f1(p2[0]-(p3[0]-p1[0])/6)+" "+f1(p2[1]-(p3[1]-p1[1])/6)+
       " "+f1(p2[0])+" "+f1(p2[1]);
  }
  return d+"Z";
}
/* --- the capsid mark: the icosahedral silhouette of Synvivia's own logo, at batch scale --- */
function hexd(r){var p=[],i,a;for(i=0;i<6;i++){a=i/6*Math.PI*2-Math.PI/2;p.push(f1(Math.cos(a)*r)+" "+f1(Math.sin(a)*r))}
  return "M"+p.join("L")+"Z"}
/* the batch: fifteen vectors, three columns of five, with the two that already carry a genome */
var BX=[566,638,710],BY=[128,216,304,392,480],CR=26;
var BATCH=[];(function(){for(var j=0;j<5;j++)for(var i=0;i<3;i++)BATCH.push([BX[i],BY[j]])})();
var FULL0=[4,11];                                     /* full and functional before the platform */
var GAIN=[0,2,3,5,6,7,8,9,10,12,13,14];               /* filled in once lead peptides are delivered */
/* --- the cyclic peptides inside the cell: closed rings of beads; the two the enrichment keeps --- */
var PEP=[[330,210],[376,286],[348,372],[286,406],[196,420],[142,352],[136,228],[228,176],[300,160]];
var KEEP=[4,1];
function ringd(r,n){var d="",i,a;for(i=0;i<n;i++){a=i/n*Math.PI*2-Math.PI/2;
  d+='<circle cx="'+f1(Math.cos(a)*r)+'" cy="'+f1(Math.sin(a)*r)+'" r="2.5"/>'}
  return '<circle class="rg" cx="0" cy="0" r="'+r+'"/>'+d}
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="64 24 700 536" aria-hidden="true">';
  g+='<defs><radialGradient id="gLit"><stop offset="0" stop-color="#9fc2e0" stop-opacity=".55"/><stop offset="1" stop-color="#9fc2e0" stop-opacity="0"/></radialGradient></defs>';
  /* base: the cell, its nucleus, and the empty slots of the batch — a complete picture in frame 0 */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+blob(CELL.x,CELL.y,CELL.rx,CELL.ry,0.8,28)+'"/>';
  g+='<path class="wo sD" d="'+blob(CELL.x,CELL.y,CELL.rx*0.915,CELL.ry*0.915,0.8,28)+'"/>';
  g+='<path class="wl sD" d="'+blob(NUC.x,NUC.y,NUC.rx,NUC.ry,1.6,24)+'"/>';
  g+='<path class="wo sD" d="M'+(NUC.x-46)+' '+(NUC.y+18)+'q30 -40 62 -32q26 6 38 -22"/>';
  g+='<path class="wo sD" d="M'+(NUC.x-30)+' '+(NUC.y+38)+'q34 -26 66 -44"/>';
  g+='<path class="wo sD" d="M'+(NUC.x+2)+' '+(NUC.y+42)+'q24 -20 44 -34"/>';
  g+='</g>';
  /* the fifteen vectors of one batch */
  g+='<g id="scCap">';
  BATCH.forEach(function(b,k){
    g+='<g class="cap" data-i="'+k+'" transform="translate('+b[0]+' '+b[1]+')">'+
       '<circle class="lit" cx="0" cy="0" r="30" fill="url(#gLit)"/>'+
       '<path class="cx" d="'+hexd(CR)+'"/>'+
       '<circle class="gn" cx="0" cy="0" r="8.5"/></g>'});
  g+='</g>';
  /* the cyclic peptide library */
  g+='<g id="scPep">';
  PEP.forEach(function(p,k){g+='<g class="pep" transform="translate('+p[0]+' '+p[1]+')">'+ringd(11,7)+'</g>'});
  g+='</g>';
  /* labels: each leader stops 8px short of its text, and no two labels share a band (DR.3, CY) */
  if(!mob){
    g+='<g id="lCell"><path class="ld" d="M140 82L180 152"/><text class="t" x="100" y="70">PACKAGING CELL</text></g>';
    g+='<g id="lBatch"><text class="t" x="540" y="82">ONE BATCH · FIFTEEN VECTORS</text></g>';
    g+='<g id="lPep"><path class="ld" d="M148 504L190 436"/><text class="t" x="112" y="516">CYCLIC PEPTIDE</text></g>';
    g+='<g id="lKeep"><path class="ld" d="M148 504L190 436"/><text class="t" x="112" y="516">KEPT BY ENRICHMENT</text></g>';
  }else{
    g+='<g id="lCell"></g><g id="lBatch"></g><g id="lPep"></g><g id="lKeep"></g>';
  }
  var ly=SCH-6,lx=76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MOST CAPSIDS CARRY NO GENOME':'MOST OF THE BATCH CARRIES NO USABLE GENOME')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'~50 MILLION CYCLIC PEPTIDES':'ROUGHLY 50 MILLION CYCLIC PEPTIDES, ONE PER CELL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ENRICHMENT KEEPS WHAT WORKS':'COMPETITIVE ENRICHMENT KEEPS WHAT WORKS')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MORE FULL, FUNCTIONAL VECTORS':'MORE FULL, FUNCTIONAL VECTORS PER BATCH')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),cap:$$("#scCap .cap",svg),pep:$$("#scPep .pep",svg),
    lCell:$("#lCell",svg),lBatch:$("#lBatch",svg),lPep:$("#lPep",svg),lKeep:$("#lKeep",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  E.cx=E.cap.map(function(c){return $(".cx",c)});
  E.gn=E.cap.map(function(c){return $(".gn",c)});
  E.lit=E.cap.map(function(c){return $(".lit",c)});
  var SRC=[CELL.x+CELL.rx*.84,CELL.y];     /* capsids leave the cell's right flank */
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.02,.20),s2=seg(p,.27,.45),s3=seg(p,.52,.70),s4=seg(p,.78,.94);
    /* 1. the batch fills as capsids travel from the cell to their slot */
    E.cap.forEach(function(el,k){
      var f=sm(Math.min(1,Math.max(0,(s1-k*.035)/.52)));
      var tx=BATCH[k][0],ty=BATCH[k][1];
      var x=SRC[0]+(tx-SRC[0])*f,y=SRC[1]+(ty-SRC[1])*f;
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") scale("+(.42+.58*f).toFixed(3)+")");
      op(el,b*(f>0?Math.min(1,f*4):0));
    });
    /* genomes: two are full from the start; the rest fill in once lead peptides are delivered */
    E.gn.forEach(function(el,k){
      var on=FULL0.indexOf(k)>=0?1:0;
      if(!on){var j=GAIN.indexOf(k);on=j<0?0:sm(Math.min(1,Math.max(0,(s4-j*.045)/.5)))}
      op(el,b*on)});
    E.lit.forEach(function(el,k){var j=GAIN.indexOf(k);
      op(el,b*(j<0?0:sm(Math.min(1,Math.max(0,(s4-j*.045)/.5)))*.85*(1-seg(p,.96,1))))});
    /* 2. the library appears inside the cell; 3. all but the kept members fade away */
    E.pep.forEach(function(el,k){
      var keep=KEEP.indexOf(k)>=0;
      var a=sm(Math.min(1,Math.max(0,(s2-k*.05)/.6)));
      if(!keep)a*= (1-s3);
      el.style.opacity=(b*a).toFixed(3);
      el.classList.toggle("on",keep&&s3>.45);
      var sc=keep?(1+.22*s3):1;
      el.setAttribute("transform","translate("+PEP[k][0]+" "+PEP[k][1]+") scale("+sc.toFixed(3)+")");
    });
    op(E.lCell,b*seg(p,.04,.12)*(1-seg(p,.84,.92)));
    op(E.lBatch,b*seg(p,.10,.18));
    op(E.lPep,b*seg(p,.30,.38)*(1-seg(p,.52,.58)));
    op(E.lKeep,b*seg(p,.60,.68)*(1-seg(p,.76,.82)));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.22,.27)));
    op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));
    op(E.l3,b*seg(p,.54,.61)*(1-seg(p,.72,.77)));
    op(E.l4,b*seg(p,.79,.86));
  };
}
