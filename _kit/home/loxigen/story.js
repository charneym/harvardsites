/* The story scene (BL/BY/DB): LoxiGen's mechanism (loxigen.com home, /cancer, /therapeutic-areas, and the 2024 Cell
   Chemical Biology paper on LXG6403), as ONE continuous engraved scene. Right: a cluster of tumour cells. Around it, a
   wall of collagen fibres. Left: chemotherapy (drug particles). Step 1: LOX crosslinks the fibres (green nodes appear,
   the wall tightens) and the drug piles up outside. Step 2: the LOX inhibitor cuts the crosslinks (nodes go out, the
   fibres relax and part). Step 3: the drug passes through the opened matrix into the tumour. Every element is driven
   by the scrubbed story progress. */
var SCW=760,SCH=520,TCX=500,TCY=262;
var STO=(function(){
  var s=6403,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},i,j;
  /* tumour cells: a packed cluster */
  var cells=[[0,0,30]],tries=0;
  while(cells.length<17&&tries<4000){tries++;var a=R()*Math.PI*2,r=R()*92,cr=17+R()*12,x=Math.cos(a)*r,y=Math.sin(a)*r*1.1,ok=true;
    for(j=0;j<cells.length;j++){var c=cells[j];if(Math.hypot(x-c[0],y-c[1])<c[2]+cr+3){ok=false;break}}
    if(ok&&Math.hypot(x,y)+cr<118)cells.push([x,y,cr])}
  /* fibres: 7 rings of wavy collagen around the cluster, each split into arcs */
  var fib=[],links=[];
  for(i=0;i<7;i++){var r0=136+i*13,n=5+(i%3),ph=R()*Math.PI*2;
    for(j=0;j<n;j++){var a0=ph+j*Math.PI*2/n+.08,a1=a0+Math.PI*2/n-.16-R()*.12;fib.push({r:r0,a0:a0,a1:a1,w:R()*6.28,k:i})}}
  /* crosslinks between neighbouring rings */
  for(i=0;i<6;i++)for(j=0;j<14;j++){links.push({k:i,a:R()*Math.PI*2,t:R()})}
  /* drug particles */
  var dr=[];for(i=0;i<46;i++){var tr=R(),ta=R()*Math.PI*2;
    dr.push({x0:30+R()*150,y0:70+R()*380,hx:TCX-236-R()*40,hy:TCY+(R()-.5)*300,tx:TCX+Math.cos(ta)*tr*100,ty:TCY+Math.sin(ta)*tr*108,d:R()})}
  return {cells:cells,fib:fib,links:links,dr:dr};
})();
function arcPath(F,rx,amp){var pts=[],n=36,i;for(i=0;i<=n;i++){var a=F.a0+(F.a1-F.a0)*i/n,r=rx+amp*Math.sin(a*9+F.w);
  pts.push((TCX+Math.cos(a)*r).toFixed(1)+" "+(TCY+Math.sin(a)*r*.92).toFixed(1))}return "M"+pts.join("L")}
function memScene(o){
  var g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/>';
  g+='<text class="t" x="24" y="10">TUMOUR MICROENVIRONMENT · SCHEMATIC</text></g>';
  g+='<g id="scCells">';
  STO.cells.forEach(function(c,k){g+='<g class="cl" data-k="'+k+'"><circle class="cm" cx="'+(TCX+c[0]).toFixed(1)+'" cy="'+(TCY+c[1]).toFixed(1)+'" r="'+c[2].toFixed(1)+'"/><circle class="cn" cx="'+(TCX+c[0]+c[2]*.15).toFixed(1)+'" cy="'+(TCY+c[1]-c[2]*.1).toFixed(1)+'" r="'+(c[2]*.36).toFixed(1)+'"/></g>'});
  g+='</g><g id="scFib">';
  STO.fib.forEach(function(F,k){g+='<path class="fb" data-k="'+k+'" d="'+arcPath(F,F.r,2)+'"/>'});
  g+='</g><g id="scLx">';
  STO.links.forEach(function(L,k){g+='<circle class="lx" data-k="'+k+'" cx="0" cy="0" r="3.4"/>'});
  g+='</g><g id="scDr">';
  STO.dr.forEach(function(d,k){g+='<circle class="dr" data-k="'+k+'" cx="'+d.x0.toFixed(1)+'" cy="'+d.y0.toFixed(1)+'" r="'+(o.mob?5:4)+'"/>'});
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="24" y="48">LOX CROSSLINKS THE COLLAGEN</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="48">LOX INHIBITOR · CROSSLINKS CUT</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="48">CHEMOTHERAPY PENETRATES</text></g>';
  g+='<text class="t k1" x="24" y="486">● CHEMOTHERAPY</text><text class="t k2" x="'+(o.mob?250:200)+'" y="486">● LOX CROSSLINK</text>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, .k1, .k2",svg),cells:$$(".cl",svg),
    fb:$$(".fb",svg).map(function(el){var F=STO.fib[+el.getAttribute("data-k")],L=el.getTotalLength();return {el:el,F:F,L:L}}),
    lx:$$(".lx",svg).map(function(el){return {el:el,L:STO.links[+el.getAttribute("data-k")]}}),
    dr:$$(".dr",svg).map(function(el){return {el:el,d:STO.dr[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastR=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.16),tight=seg(p,.1,.3),cut=seg(p,.38,.58),go=seg(p,.68,.92);
    E.cells.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,grow*2-i*.04)))});
    /* the fibres engrave in, tighten as LOX crosslinks them, then relax and part when the crosslinks are cut */
    var relax=cut,rr=Math.round(relax*60)/60;
    E.fb.forEach(function(f,i){var gi=Math.min(1,Math.max(0,grow*1.6-f.F.k*.06));
      if(rr!==lastR){var spread=(f.F.k-3)*9*relax,amp=2+5*relax;f.el.setAttribute("d",arcPath(f.F,f.F.r+spread,amp))}
      f.el.style.strokeDashoffset=(f.L*(1-gi)).toFixed(1);op(f.el,b*(1-.35*relax))});
    lastR=rr;
    E.lx.forEach(function(x){var L=x.L,ri=136+L.k*13+6.5+((L.k-3)*9+4.5)*relax,a=L.a;
      x.el.setAttribute("cx",(TCX+Math.cos(a)*ri).toFixed(1));x.el.setAttribute("cy",(TCY+Math.sin(a)*ri*.92).toFixed(1));
      var on=seg(tight,L.t*.7,L.t*.7+.3),off=seg(cut,L.t*.6,L.t*.6+.4);op(x.el,b*on*(1-off));x.el.setAttribute("r",(3.4*(1-.6*off)).toFixed(2))});
    /* drug: drifts in and piles up outside the wall (step 1), then flows through to the tumour (step 3) */
    var arr=seg(p,.06,.3);
    E.dr.forEach(function(x){var d=x.d,a=Math.min(1,Math.max(0,arr*1.4-d.d*.4)),g2=Math.min(1,Math.max(0,go*1.5-d.d*.5));
      var hx=d.x0+(d.hx-d.x0)*a,hy=d.y0+(d.hy-d.y0)*a,X=hx+(d.tx-hx)*g2,Y=hy+(d.ty-hy)*g2;
      x.el.setAttribute("cx",X.toFixed(1));x.el.setAttribute("cy",Y.toFixed(1));op(x.el,b*Math.min(1,arr*3))});
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
