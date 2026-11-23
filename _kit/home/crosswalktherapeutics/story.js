/* the story scene (BL/BY/DB/DR): ONE cartilage cell, drawn once and kept on screen for all three steps.
   Step 1 (missing): a chondrocyte with its nucleus and lysosomes; with the enzyme missing, stored material (wavy chains) builds up inside them.
   Step 2 (construct): one engineered construct appears at left: an enzyme joined to a delivery module (Crosswalk's protein biodistribution platform).
   Step 3 (tissue): copies of the construct travel into the cell, each to a lysosome; the stored material fades there.
   Sources: crosswalktherapeutics.com; Crosswalk press releases of 15 July 2024 (platform, single construct, subcutaneous) and 16 January 2026
   (Morquio A: enzyme performance and delivery to bone and cartilage). Schematic. Driven by the scrubbed story progress. Labels live only in
   the clear band above the cell (DR3). */
var CX={cx:430,cy:272,rx:236,ry:160};
function cxR(a){return 1+.05*Math.sin(a*3+.7)+.035*Math.sin(a*5+2.2)+.02*Math.sin(a*7+.3)}
function blobPath(cx,cy,rx,ry,ph,n){var f=function(v){return (+v).toFixed(1)},d='';for(var k=0;k<=n;k++){var a=k/n*Math.PI*2,r=1+.07*Math.sin(a*3+ph)+.05*Math.sin(a*5+ph*2);d+=(k?'L':'M')+f(cx+Math.cos(a)*rx*r)+' '+f(cy+Math.sin(a)*ry*r)}return d+'Z'}
/* the construct: an enzyme (rounded lobed body) joined by a short linker to a small square delivery module */
function construct(cls){return '<g class="'+cls+'"><path class="enz" d="'+blobPath(0,0,27,20,1.3,48)+'"/><path class="lnk" d="M24 8L38 18"/><rect class="mod" x="36" y="16" width="14" height="14" transform="rotate(20 43 23)"/></g>'}
var LYS=[[330,214,30],[372,334,28],[468,182,26],[600,206,27],[586,346,29]];
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 720 470" aria-hidden="true">';
  /* the cell outline */
  var d='';for(k=0;k<=120;k++){var a=k/120*Math.PI*2,r=cxR(a);d+=(k?'L':'M')+f(CX.cx+Math.cos(a)*CX.rx*r)+' '+f(CX.cy+Math.sin(a)*CX.ry*r)}
  g+='<g id="cell"><path class="cfill" d="'+d+'Z"/><path class="cedge sD" d="'+d+'Z"/>';
  /* nucleus */
  g+='<path class="nuc sD" d="'+blobPath(478,268,52,40,.4,64)+'"/>';
  /* lysosomes, each holding stored material (short wavy chains) */
  LYS.forEach(function(L,i){var x=L[0],y=L[1],r=L[2];
    g+='<g class="ly" id="ly'+i+'"><circle class="lyf" cx="'+x+'" cy="'+y+'" r="'+r+'"/><circle class="lye sD" cx="'+x+'" cy="'+y+'" r="'+r+'"/><g class="sto">';
    for(var j=0;j<3;j++){var yy=y-r*.42+j*r*.42,x0=x-r*.62+(j%2)*4,x1=x+r*.58,s='M'+f(x0)+' '+f(yy);for(var t=1;t<=8;t++){var xx=x0+(x1-x0)*t/8;s+='L'+f(xx)+' '+f(yy+(t%2?-3.2:3.2))}g+='<path d="'+s+'"/>'}
    g+='</g></g>'});
  g+='</g>';
  /* step 2: the construct, at left of the cell */
  g+='<g id="con" transform="translate(92 268)">'+construct("cn0")+'</g>';
  /* step 3: copies travel along curved paths to three lysosomes */
  var TG=[0,1,3];g+='<g id="trav">';
  TG.forEach(function(li,j){var L=LYS[li];g+='<path class="tp" id="tp'+j+'" d="M92 268C170 '+(268+(j-1)*60)+' '+f(L[0]-120)+' '+f(L[1])+' '+f(L[0]-8)+' '+f(L[1])+'"/>'});
  TG.forEach(function(li,j){g+='<g class="cp" id="cp'+j+'">'+construct("cn1")+'</g>'});
  g+='</g>';
  /* labels, one per step, in the clear band above the cell */
  var lx=mob?360:CX.cx-CX.rx+10,ly=mob?46:54,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'STORAGE BUILDS UP':'ENZYME MISSING · STORAGE BUILDS UP')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'ENZYME + DELIVERY':'ENGINEERED ENZYME + DELIVERY MODULE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'INTO THE CELL':'INTO HARD-TO-REACH TISSUE')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#cell .sD"),cfill:$("#cell .cfill",svg),lyf:$$("#cell .lyf",svg),sto:$$("#cell .sto",svg),con:$("#con",svg),
    tp:$$("#trav .tp",svg),cp:$$("#trav .cp",svg),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg)},TG=[0,1,3],lastB=-1;
  var TL=E.tp.map(function(p){return p.getTotalLength()});
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.cfill,b)}
    var s1=seg(p,.05,.3),s2=seg(p,.36,.56),s3=seg(p,.66,.9),cl=seg(p,.8,.95);
    /* step 1: stored material builds up in each lysosome; step 3: it fades where a construct has arrived */
    E.sto.forEach(function(s,i){var hit=TG.indexOf(i)>=0;op(s,b*Math.max(.25,s1)*(1-(hit?cl*.92:cl*.55)))});
    E.lyf.forEach(function(s,i){var hit=TG.indexOf(i)>=0;s.style.fillOpacity=(.05+.20*(hit?cl:cl*.5)).toFixed(3)});
    /* step 2: the construct appears; it stays faintly as the source while copies travel */
    op(E.con,b*s2*(1-seg(p,.66,.72)*.6));E.con.setAttribute("transform","translate(92 268) scale("+(.9+.1*s2).toFixed(3)+")");
    /* step 3: copies travel along their paths into the cell */
    E.cp.forEach(function(c,j){var v=seg(s3,j*.12,.64+j*.12),pt=E.tp[j].getPointAtLength(TL[j]*v);c.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+pt.y.toFixed(1)+") scale(.62)");op(c,b*(v>0?Math.min(1,v*8):0))});
    E.tp.forEach(function(t,j){var v=seg(s3,j*.12,.64+j*.12);t.style.strokeDashoffset="0";op(t,b*.5*(v>0?1:0)*(1-cl*.6))});
    op(E.l0,b*(1-seg(p,.3,.38)));op(E.l1,b*seg(p,.38,.44)*(1-seg(p,.62,.68)));op(E.l2,b*seg(p,.7,.78));
  };
}
