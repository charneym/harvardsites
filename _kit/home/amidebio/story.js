/* the story scene (BL/BY/DB): ONE engraved glucose chart kept on screen for all three steps, with the insulin molecule drawn
   above it. Step 1 regular insulin brings glucose from a post-meal high back into the normal range. Step 2 an overdose: the
   trace keeps falling into hypoglycemia, and with IAH nothing warns the patient. Step 3 AmideBio's dual agonist: glucagon
   activity in the same biologic, and the overdose trace levels off above the hypoglycemia line. Sources: the 2024-09-11
   release ("time-action profile similar to regular insulin but without the risk of hypoglycemia if an overdose occurs";
   "molecular artificial pancreas"; IAH definition and prevalence) and NIH RePORTER 1R44DK141357. The molecule glyph shows
   human insulin's A chain (21 residues) and B chain (30) with its three disulfide bonds, and glucagon (29 residues); how
   AmideBio joins the two activities is not published, so they are drawn side by side. Curves are schematic, not data. */
var GT=112,GX=function(t){return 96+t/8*664},GY=function(g){return 512-(g-30)/(260-30)*(512-GT)};
var CRV=[function(t){return 108+92*Math.exp(-t/1.25)},function(t){return 200-158*(1-Math.exp(-t/1.7))},function(t){return 200-112*(1-Math.exp(-t/1.15))-6*Math.exp(-Math.pow(t-2.6,2)/1.2)}];
function crvD(fn){var s='',i;for(i=0;i<=80;i++){var t=i/10;s+=(i?'L':'M')+GX(t).toFixed(1)+' '+GY(fn(t)).toFixed(1)}return s}
function beads(pts,cls,r){return pts.map(function(p){return '<circle class="'+cls+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+r+'"/>'}).join("")}
function chainPts(n,x0,y0,dx,amp,per,ph){var a=[],i;for(i=0;i<n;i++)a.push([x0+i*dx,y0+amp*Math.sin(i/per*Math.PI*2+ph)]);return a}
function scene(){
  var mob=MOBILE(),g='',f=function(n){return (+n).toFixed(1)};GT=mob?256:112;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><linearGradient id="hyg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2a65a" stop-opacity=".05"/><stop offset="1" stop-color="#f2a65a" stop-opacity=".2"/></linearGradient></defs>';
  /* chart frame */
  g+='<g id="scBase">';
  g+='<rect class="nb" x="'+GX(0)+'" y="'+f(GY(180))+'" width="664" height="'+f(GY(70)-GY(180))+'"/>';
  g+='<rect class="hz" x="'+GX(0)+'" y="'+f(GY(70))+'" width="664" height="'+f(GY(30)-GY(70))+'" fill="url(#hyg)"/>';
  var grid='';[70,180].forEach(function(v){grid+='M'+GX(0)+' '+f(GY(v))+'H'+GX(8)});g+='<path class="gl sD" d="'+grid+'"/>';
  var gr2='';[40,100,140,220,260].forEach(function(v){gr2+='M'+GX(0)+' '+f(GY(v))+'H'+GX(8)});g+='<path class="g2 sD" d="'+gr2+'"/>';
  g+='<path class="ax sD" d="M'+GX(0)+' '+f(GY(260))+'V'+f(GY(30))+'H'+GX(8)+'"/>';
  var tk='';for(var t=0;t<=8;t+=2)tk+='M'+f(GX(t))+' '+f(GY(30))+'v8';g+='<path class="ax sD" d="'+tk+'"/>';
  [70,180,260].forEach(function(v){g+='<text class="t" x="'+(GX(0)-12)+'" y="'+f(GY(v)+4)+'" text-anchor="end">'+v+'</text>'});
  for(t=0;t<=8;t+=2)g+='<text class="t" x="'+f(GX(t))+'" y="'+f(GY(30)+28)+'" text-anchor="middle">'+t+'h</text>';
  g+='<text class="t" x="'+GX(0)+'" y="'+f(GY(260)-16)+'">BLOOD GLUCOSE · mg/dL</text>';
  if(!mob)g+='<text class="t" x="'+GX(8)+'" y="'+f(GY(30)+28)+'" text-anchor="end" dx="0" dy="22">SCHEMATIC, NOT DATA</text>';
  g+='<text class="t nr" x="'+(GX(8)-10)+'" y="'+f(GY(180)+20)+'" text-anchor="end">NORMAL RANGE</text>';
  g+='<text class="t hy" x="'+(GX(8)-10)+'" y="'+f(GY(30)-12)+'" text-anchor="end">HYPOGLYCEMIA</text>';
  g+='</g>';
  /* the three traces */
  g+='<g id="scMove">';
  g+='<path class="cv c1" id="cv1" d="'+crvD(CRV[0])+'"/><path class="cv c2" id="cv2" d="'+crvD(CRV[1])+'"/><path class="cv c3" id="cv3" d="'+crvD(CRV[2])+'"/>';
  g+='<circle class="dot d1" id="dt1" r="5"/><circle class="dot d2" id="dt2" r="5"/><circle class="dot d3" id="dt3" r="5"/>';
  g+='</g>';
  /* the molecules, upper right (the traces are high only on the left) */
  var mx=mob?110:430,my=mob?62:92;
  var B=chainPts(30,mx,my+34,9.6,9,11,0),A=chainPts(21,mx+48,my-4,9.6,6,7,1.2);
  var ss='M'+f(A[6][0])+' '+f(A[6][1])+'L'+f(B[6][0])+' '+f(B[6][1])+'M'+f(A[19][0])+' '+f(A[19][1])+'L'+f(B[18][0])+' '+f(B[18][1])+'M'+f(A[5][0])+' '+f(A[5][1])+'Q'+f(A[8][0])+' '+f(A[8][1]-26)+' '+f(A[10][0])+' '+f(A[10][1]);
  var lineOf=function(P){return P.map(function(p,i){return (i?'L':'M')+f(p[0])+' '+f(p[1])}).join('')};
  g+='<g id="scIns"><path class="ss" d="'+ss+'"/><path class="bk" d="'+lineOf(B)+'"/><path class="bk" d="'+lineOf(A)+'"/>'+beads(B,"bB",3.9)+beads(A,"bA",3.9)+
     '<text class="a" x="'+mx+'" y="'+(my-30)+'">INSULIN</text>'+(mob?'':'<text class="t" x="'+(mx+82)+'" y="'+(my-30)+'">A CHAIN · B CHAIN · 3 DISULFIDES</text>')+'</g>';
  var G=chainPts(29,mx+30,my+(mob?78:86),9.6,7,3.6,0);
  g+='<g id="scGlu"><path class="bk gk" d="'+lineOf(G)+'"/>'+beads(G,"bG",3.9)+'<text class="a g" x="'+(mx+30)+'" y="'+(my+(mob?124:118))+'">+ GLUCAGON ACTIVITY</text>'+
     '<path class="br" d="M'+(mx-14)+' '+(my-8)+'v'+(102)+'"/></g>';
  /* labels, one set per step (leaders end at the thing they name) */
  var p1=[GX(5.2),GY(CRV[0](5.2))],p2=[GX(5.6),GY(CRV[1](5.6))],p3=[GX(4.6),GY(CRV[2](4.6))];
  g+='<g id="lb1"><text class="a" x="'+f(p1[0]-60)+'" y="'+f(p1[1]-56)+'">'+(mob?'BACK IN RANGE':'REGULAR INSULIN · BACK IN RANGE')+'</text><path class="ldr" d="M'+f(p1[0])+' '+f(p1[1]-48)+'V'+f(p1[1]-9)+'"/></g>';
  g+='<g id="lb2"><text class="a w" x="'+f(GX(2.1))+'" y="'+f(GY(52)+4)+'" text-anchor="end">'+(mob?'NO WARNING':'OVERDOSE · NO WARNING WITH IAH')+'</text><path class="ldr" d="M'+f(GX(2.2))+' '+f(GY(52))+'H'+f(p2[0]-10)+'V'+f(p2[1]-4)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+f(p3[0]-40)+'" y="'+f(p3[1]-44)+'">'+(mob?'LEVELS OFF':'DUAL AGONIST · LEVELS OFF ABOVE 70')+'</text><path class="ldr" d="M'+f(p3[0])+' '+f(p3[1]-36)+'V'+f(p3[1]-9)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase rect",svg),cv:[1,2,3].map(function(i){var p=$("#cv"+i,svg),L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]}),
    dt:[1,2,3].map(function(i){return $("#dt"+i,svg)}),ins:$("#scIns",svg),glu:$("#scGlu",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function trace(k,v,o){var a=E.cv[k];a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],o);var d=E.dt[k];
    if(v>.002){var q=a[0].getPointAtLength(a[1]*v);d.setAttribute("cx",q.x.toFixed(1));d.setAttribute("cy",q.y.toFixed(1));op(d,o*(v<.999?1:.0))}else op(d,0)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.2),s2=seg(p,.36,.58),s3=seg(p,.68,.9);
    trace(0,s1,b*(1-.62*s2));
    trace(1,s2,b*(1-.55*s3));
    trace(2,s3,b);
    op(E.ins,b);op(E.glu,b*s3);
    op(E.l1,b*seg(p,.1,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.48,.58)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}
