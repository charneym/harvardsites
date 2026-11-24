/* The story scene (DB/BY): CDO2's current density imaging (cdo2.com; Sussex release 2021; GtR Q-MOTION), drawn as ONE
   fine-line pouch cell seen from above that stays on screen and fills the frame.
   Step 1 (flow): current enters at the two tabs and spreads across the electrode (flow lines draw, small charges move).
   Step 2 (sense): the magnetometer array appears over the cell, outside it, and its sensors pulse as they read the field.
   Step 3 (image): each sensor tile fills with the current density it reads (brand purple ramp); one local defect is marked. */
var SC={x0:170,x1:550,y0:96,y1:516,tabs:[.26,.74],tw:44,th:42,cols:10,rows:11};
function scJ(u,v){var jx=0,jy=0;SC.tabs.forEach(function(t){var dx=u-t,dy=v*1.1+.025,r2=dx*dx+dy*dy;jx+=dx/r2;jy+=dy/r2});
  /* the local defect: a small extra sink of current near the lower right (illustrative) */
  var ddx=u-.66,ddy=(v-.68)*1.1,d2=ddx*ddx+ddy*ddy+.002;jx-=ddx/d2*.06;jy-=ddy/d2*.06;return [jx,jy]}
function scFlow(){var W=SC.x1-SC.x0,H=SC.y1-SC.y0,out=[];
  SC.tabs.forEach(function(t,ti){for(var k=0;k<7;k++){var a=Math.PI*(.1+.8*k/6),u=t+.02*Math.cos(a),v=.02*Math.sin(a)+.004,d="M"+(SC.x0+t*W).toFixed(1)+" "+SC.y0;
    for(var s=0;s<700;s++){var j=scJ(u,v),m=Math.hypot(j[0],j[1]);u+=j[0]/m*.004;v+=j[1]/m*.004;
      if(u<.05||u>.95||v>.95||v<0)break;if(s%3===0)d+="L"+(SC.x0+u*W).toFixed(1)+" "+(SC.y0+v*H).toFixed(1)}
    out.push(d)}});return out}
function scRamp(x){var R=[[0,[40,14,44]],[.35,[110,30,108]],[.6,[146,39,143]],[.8,[208,124,203]],[1,[250,226,246]]];x=Math.max(0,Math.min(1,x));
  for(var i=1;i<R.length;i++)if(x<=R[i][0]){var a=R[i-1],b=R[i],f=(x-a[0])/(b[0]-a[0]);return "rgb("+a[1].map(function(c,k){return Math.round(c+(b[1][k]-c)*f)}).join(",")+")"}return "rgb(250,226,246)"}
var SC_DEF=[6,7];
function storyScene(o){
  var g='',mob=o.mob,W=SC.x1-SC.x0,H=SC.y1-SC.y0,tw=W/SC.cols,th=H/SC.rows;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'140 -4 440 588':'100 -4 640 588')+'" aria-hidden="true">';
  /* the cell: sealed flange, body, tabs with their sealant bands */
  g+='<g id="scCell"><path class="wo sD" d="M'+(SC.x0-14)+' '+(SC.y0-14)+'H'+(SC.x1+14)+'V'+(SC.y1+14)+'H'+(SC.x0-14)+'Z"/>';
  g+='<path class="wl sD" d="M'+SC.x0+' '+SC.y0+'H'+SC.x1+'V'+SC.y1+'H'+SC.x0+'Z"/>';
  SC.tabs.forEach(function(t){var cx=SC.x0+t*W;g+='<path class="wl sD" d="M'+(cx-SC.tw/2)+' '+(SC.y0-14)+'V'+(SC.y0-14-SC.th)+'H'+(cx+SC.tw/2)+'V'+(SC.y0-14)+'"/><path class="wo sD" d="M'+(cx-SC.tw/2-3)+' '+(SC.y0-24)+'H'+(cx+SC.tw/2+3)+'"/>'});
  g+='</g>';
  /* step 3: the image tiles (under the flow lines) */
  g+='<g id="scImg">';var mx=0,V=[];
  for(var r=0;r<SC.rows;r++)for(var c=0;c<SC.cols;c++){var u=(c+.5)/SC.cols,v=(r+.5)/SC.rows,j=scJ(u,v),m=Math.log(Math.hypot(j[0],j[1]));var bd=(c-SC_DEF[0])*(c-SC_DEF[0])+(r-SC_DEF[1])*(r-SC_DEF[1]);m+=1.6*Math.exp(-bd/.7);V.push([c,r,m]);mx=Math.max(mx,m)}
  var mn=Math.min.apply(null,V.map(function(q){return q[2]}));
  V.forEach(function(q){var f=(q[2]-mn)/(mx-mn);g+='<rect class="tile" data-r="'+q[1]+'" x="'+(SC.x0+q[0]*tw+1).toFixed(1)+'" y="'+(SC.y0+q[1]*th+1).toFixed(1)+'" width="'+(tw-2).toFixed(1)+'" height="'+(th-2).toFixed(1)+'" fill="'+scRamp(.12+.88*Math.pow(f,1.3))+'"/>'});
  g+='</g>';
  /* step 1: current flow lines from the tabs */
  g+='<g id="scFlow">'+scFlow().map(function(d){return '<path class="fl" d="'+d+'"/>'}).join("")+'</g><g id="scPk"></g>';
  /* step 2: the sensor array over the cell (a frame just outside the cell, one sensor per tile) */
  g+='<g id="scArr"><path class="arr" d="M'+(SC.x0-26)+' '+(SC.y0-4)+'H'+(SC.x1+26)+'V'+(SC.y1+26)+'H'+(SC.x0-26)+'Z"/>';
  for(var r2=0;r2<SC.rows;r2++)for(var c2=0;c2<SC.cols;c2++)g+='<rect class="sn" x="'+(SC.x0+(c2+.5)*tw-3).toFixed(1)+'" y="'+(SC.y0+(r2+.5)*th-3).toFixed(1)+'" width="6" height="6"/>';
  g+='</g>';
  /* the defect marker */
  var dx=SC.x0+(SC_DEF[0]+.5)*tw,dy=SC.y0+(SC_DEF[1]+.5)*th;
  g+='<g id="scDef"><circle class="ring" cx="'+dx.toFixed(1)+'" cy="'+dy.toFixed(1)+'" r="26"/>'+(mob?'':'<path class="lk" d="M'+(dx+26).toFixed(1)+' '+dy.toFixed(1)+'H'+(SC.x1+40)+'"/><text class="t o" x="'+(SC.x1+48)+'" y="'+(dy+4).toFixed(1)+'">LOCAL DEFECT</text>')+'</g>';
  /* labels, all outside the cell's strokes */
  SC.tabs.forEach(function(t,i){g+='<text class="t" x="'+(SC.x0+t*W)+'" y="'+(SC.y0-14-SC.th-12)+'" text-anchor="middle">'+(i?'TAB −':'TAB +')+'</text>'});
  if(!mob)g+='<g id="lArr"><text class="t o" x="'+(SC.x1+48)+'" y="'+(SC.y0+40)+'">SENSOR ARRAY</text><text class="t q" x="'+(SC.x1+48)+'" y="'+(SC.y0+58)+'">OUTSIDE THE CELL</text></g>';
  else g+='<g id="lArr"></g>';
  var ly=570,lx=mob?(SC.x0+SC.x1)/2:(SC.x0+SC.x1)/2;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="middle">CURRENT SPREADS FROM THE TABS</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="middle">'+(mob?'MAGNETOMETERS READ THE FIELD':'MAGNETOMETERS READ ITS FIELD, NO CONTACT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="middle">A CURRENT DENSITY IMAGE</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var NS="http://www.w3.org/2000/svg",pk=$("#scPk",svg);
  var E={base:dl(".sD"),fl:dl("#scFlow .fl"),arr:dl("#scArr .arr")[0],sn:$$("#scArr .sn",svg),tiles:$$("#scImg .tile",svg),def:$("#scDef",svg),
    lArr:$("#lArr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var P=[];for(var i=0;i<14;i++){var c=document.createElementNS(NS,"circle");c.setAttribute("r","2.4");c.setAttribute("class","pkt");pk.appendChild(c);P.push(c)}
  var lastB=-1,R=SC.rows;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.02,.28),s2=seg(p,.36,.6),s3=seg(p,.68,.9);
    /* step 1: flow lines draw, then stay (dimmer once the image forms) */
    E.fl.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-sm((s1-(i%7)*.03)/.7))).toFixed(1);op(a[0],b*(1-.55*s3))});
    P.forEach(function(c,i){var a=E.fl[i%E.fl.length],f=(p*3+i*.37)%1,q=a[0].getPointAtLength(a[1]*f);c.setAttribute("cx",q.x.toFixed(1));c.setAttribute("cy",q.y.toFixed(1));
      op(c,b*sm((s1-.6)/.3)*(1-s3)*Math.min(1,Math.sin(f*Math.PI)*3))});
    /* step 2: the array frame draws, sensors appear and pulse in a sweep */
    E.arr[0].style.strokeDashoffset=(E.arr[1]*(1-s2)).toFixed(1);op(E.arr[0],b);
    E.sn.forEach(function(el,i){var r=Math.floor(i/SC.cols),on=sm((s2*1.3-r/R*.5)/.4),pu=.5+.5*Math.sin(p*40-r*.6);op(el,b*on*(1-.6*s3)*(.55+.45*pu))});
    op(E.lArr,b*sm((s2-.3)/.4));
    /* step 3: tiles fill row by row from the tabs down; the defect is marked */
    E.tiles.forEach(function(el){var r=+el.getAttribute("data-r");op(el,b*.92*sm((s3*1.4-r/R*.5)/.35))});
    op(E.def,b*sm((s3-.75)/.25));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
