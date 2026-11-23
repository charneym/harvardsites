/* The story scene (BL/BY/DB): from graphene to grid (sindrimaterials.com home, About Graphene and collection pages), as ONE
   continuous fine-line drawing: a 300-mesh grid disc seen at a tilt, with a sheet of graphene (honeycomb) above it.
   Step 1 (grow): the graphene sheet grows outward from its centre, ring by ring.
   Step 2 (transfer): the sheet comes down and settles across the grid's holey-carbon windows.
   Step 3 (inspect): SEM quality control zooms in, 30x (the whole grid), 500x (windows of holey carbon) and 5,000x (single
   holes spanned by suspended graphene). Schematic. Every element is driven by the scrubbed story progress. */
var SCW=600,SCH=520;
var GC={x:300,y:362},GR=204,GRI=178,GA=Math.PI/6,GK=.5,GZ=168;
function gP(u,v,z){var ca=Math.cos(GA),sa=Math.sin(GA);return [GC.x+u*ca-v*sa,GC.y+(u*sa+v*ca)*GK-(z||0)]}
function gEll(r,z,a0,a1){var d='',n=96;a0=a0||0;a1=a1==null?Math.PI*2:a1;for(var i=0;i<=n;i++){var t=a0+(a1-a0)*i/n,p=gP(r*Math.cos(t),r*Math.sin(t),z);d+=(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}return d}
function gMesh(){var d='',s=22.2,n=Math.floor(GRI/s);for(var k=-n;k<=n;k++){var x=k*s,h=Math.sqrt(GRI*GRI-x*x);var a=gP(x,-h),b=gP(x,h),c=gP(-h,x),e=gP(h,x);
  d+='M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+b[0].toFixed(1)+' '+b[1].toFixed(1)+'M'+c[0].toFixed(1)+' '+c[1].toFixed(1)+'L'+e[0].toFixed(1)+' '+e[1].toFixed(1)}return d}
/* honeycomb bonds in flat coordinates, grouped in rings by distance from the centre (for the growth) */
var HEXR=(function(){var L=10,R=[],NB=7,lim=GRI+2;for(var i=0;i<NB;i++)R.push('');var dx=L*Math.sqrt(3),dy=L*1.5,seen={};
  function add(x1,y1,x2,y2){var k=[x1.toFixed(1),y1.toFixed(1),x2.toFixed(1),y2.toFixed(1)].join();if(seen[k])return;seen[k]=1;
    if(Math.hypot(x1,y1)>lim||Math.hypot(x2,y2)>lim)return;var r=Math.hypot((x1+x2)/2,(y1+y2)/2),b=Math.min(NB-1,Math.floor(r/lim*NB));
    var p=gP(x1,y1,GZ),q=gP(x2,y2,GZ);R[b]+='M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'L'+q[0].toFixed(1)+' '+q[1].toFixed(1)}
  for(var j=-14;j<=14;j++)for(var i=-12;i<=12;i++){var cx=i*dx+(j&1?dx/2:0),cy=j*dy,pts=[];for(var m=0;m<6;m++){var t=Math.PI/6+m*Math.PI/3;pts.push([cx+L*Math.cos(t),cy+L*Math.sin(t)])}
    for(m=0;m<6;m++){var a=pts[m],b=pts[(m+1)%6];add(a[0],a[1],b[0],b[1])}}
  return R})();
function zoomC(cx,cy,r,kind,id){var g='<g id="'+id+'" class="zc"><clipPath id="'+id+'c"><circle cx="'+cx+'" cy="'+cy+'" r="'+(r-1)+'"/></clipPath><circle class="zbg" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/><g clip-path="url(#'+id+'c)">',i,j,d='';
  if(kind===0){/* 30x: the whole grid */var R0=r*.78,RI=r*.66,s=7.4;g+='<circle class="zrim" cx="'+cx+'" cy="'+cy+'" r="'+((R0+RI)/2).toFixed(1)+'" stroke-width="'+(R0-RI).toFixed(1)+'"/>';
    for(var k=-9;k<=9;k++){var x=k*s;if(Math.abs(x)>=RI)continue;var h=Math.sqrt(RI*RI-x*x);d+='M'+(cx+x).toFixed(1)+' '+(cy-h).toFixed(1)+'v'+(2*h).toFixed(1)+'M'+(cx-h).toFixed(1)+' '+(cy+x).toFixed(1)+'h'+(2*h).toFixed(1)}g+='<path class="zm" d="'+d+'"/>'}
  else if(kind===1){/* 500x: windows of holey carbon between bars */var s=50,o=-8;for(i=-3;i<=3;i++){d+='M'+(cx+o+i*s)+' '+(cy-r)+'v'+(2*r)+'M'+(cx-r)+' '+(cy+o+i*s)+'h'+(2*r)}g+='<path class="zbar" d="'+d+'"/>';
    var hs='';for(i=-12;i<=12;i++)for(j=-12;j<=12;j++){var x=cx+i*6.6,y=cy+j*6.6,bx=((x-cx-o)%s+s)%s,by=((y-cy-o)%s+s)%s;if(bx<10||bx>s-10||by<10||by>s-10)continue;hs+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="1.9"/>'}g+='<g class="zh">'+hs+'</g>'}
  else{/* 5,000x: holes of the holey carbon, spanned by suspended graphene */var hs='',s=34;for(i=-3;i<=3;i++)for(j=-3;j<=3;j++)hs+='<circle cx="'+(cx+i*s+(j&1?s/2:0)).toFixed(1)+'" cy="'+(cy+j*s*.88).toFixed(1)+'" r="12.5"/>';g+='<g class="zho">'+hs+'</g>';
    var L=5.2,dx=L*Math.sqrt(3),dy=L*1.5;for(j=-16;j<=16;j++)for(i=-10;i<=10;i++){var hx=cx+i*dx+(j&1?dx/2:0),hy=cy+j*dy;d+='M'+(hx).toFixed(1)+' '+(hy-L).toFixed(1)+'l'+(dx/2).toFixed(2)+' '+(L/2).toFixed(2)+'v'+L.toFixed(2)+'M'+hx.toFixed(1)+' '+(hy-L).toFixed(1)+'l'+(-dx/2).toFixed(2)+' '+(L/2).toFixed(2)}g+='<path class="zg" d="'+d+'"/>'}
  return g+'</g><circle class="zo sD3" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/></g>'}
var ZC=[[96,96],[300,96],[504,96]],ZR=76;
function gridScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="gfill" d="'+gEll(GRI,0)+'Z"/>';
  g+='<path class="sk sD" d="'+gEll(GR,0)+'"/><path class="sk sD" d="'+gEll(GRI,0)+'"/>';
  g+='<path class="bm sD" d="'+gEll(GR,-7,0,Math.PI)+'"/>';
  var e0=gP(GR,0,0),e1=gP(-GR,0,0);
  g+='<path class="bm sD" d="M'+e0[0].toFixed(1)+' '+e0[1].toFixed(1)+'v7M'+e1[0].toFixed(1)+' '+e1[1].toFixed(1)+'v7"/>';
  g+='<path class="mesh sD" d="'+gMesh()+'"/>';
  if(!mob)g+='<text class="t" x="492" y="462">300-MESH GRID</text>';
  g+='</g>';
  /* the graphene sheet, grown ring by ring, then lowered onto the grid */
  g+='<g id="scSheet">';HEXR.forEach(function(d,k){g+='<path class="gr" data-k="'+k+'" d="'+d+'"/>'});
  g+='<path class="gre" d="'+gEll(GRI+2,GZ)+'"/>';
  if(!mob)g+='<text class="t" x="6" y="'+(GC.y-GZ+4)+'">GRAPHENE</text>';
  g+='</g>';
  /* SEM inspection */
  var sq=[gP(-11,-11,0),gP(11.2,-11,0),gP(11.2,11.2,0),gP(-11,11.2,0)];
  g+='<g id="scInsp"><path class="hi" d="M'+sq.map(function(p){return p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('L')+'Z"/>';
  var lk=ZC[0],ang=Math.atan2(sq[0][1]-lk[1],sq[0][0]-lk[0]),lx=lk[0]+Math.cos(ang)*ZR,ly=lk[1]+Math.sin(ang)*ZR;
  g+='<path class="ld sD3" d="M'+sq[0][0].toFixed(1)+' '+sq[0][1].toFixed(1)+'L'+lx.toFixed(1)+' '+ly.toFixed(1)+'"/>';
  g+='<path class="ld sD3" d="M'+(ZC[0][0]+ZR)+' '+ZC[0][1]+'H'+(ZC[1][0]-ZR)+'"/><path class="ld sD3" d="M'+(ZC[1][0]+ZR)+' '+ZC[1][1]+'H'+(ZC[2][0]-ZR)+'"/>';
  g+=zoomC(ZC[0][0],ZC[0][1],ZR,0,'z1')+zoomC(ZC[1][0],ZC[1][1],ZR,1,'z2')+zoomC(ZC[2][0],ZC[2][1],ZR,2,'z3');
  var ly2=ZC[0][1]+ZR+(mob?30:24);
  g+='<text class="a zl" id="zl1" x="'+ZC[0][0]+'" y="'+ly2+'" text-anchor="middle">30×</text><text class="a zl" id="zl2" x="'+ZC[1][0]+'" y="'+ly2+'" text-anchor="middle">500×</text><text class="a zl" id="zl3" x="'+ZC[2][0]+'" y="'+ly2+'" text-anchor="middle">5,000×</text>';
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="6" y="506">'+(mob?'GROW · GRAPHENE':'GROW · MONOLAYER GRAPHENE, IN-HOUSE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="6" y="506">'+(mob?'TRANSFER · ONTO THE GRID':'TRANSFER · ACROSS THE HOLEY CARBON')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="6" y="506">'+(mob?'INSPECT · EVERY LOT':'INSPECT · SEM, EVERY PRODUCTION LOT')+'</text></g>';
  return g+'</svg>';
}
function scene(){return gridScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .gfill",svg),gr:$$("#scSheet .gr",svg),gre:$("#scSheet .gre",svg),gt:$("#scSheet text",svg),sheet:$("#scSheet",svg),
    insp:$("#scInsp",svg),hi:$("#scInsp .hi",svg),ld:dl("#scInsp .ld"),zo:dl("#scInsp .zo"),z:[$("#z1",svg),$("#z2",svg),$("#z3",svg)],zl:[$("#zl1",svg),$("#zl2",svg),$("#zl3",svg)],
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.z.forEach(function(el){el.style.opacity=0});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var n=E.gr.length;E.gr.forEach(function(el,k){op(el,b*sm(seg(p,.03+k*.032,.09+k*.032)))});
    var grown=sm(seg(p,.2,.3)),down=sm(seg(p,.38,.6));
    op(E.gre,b*grown*(1-down*.6));op(E.gt,b*grown);
    E.sheet.setAttribute("transform","translate(0 "+(GZ*down).toFixed(1)+")");
    /* inspection: the window is marked, the leader draws, then each magnification opens in turn and draws to its end */
    op(E.hi,b*sm(seg(p,.66,.72)));
    var l0=sm(seg(p,.68,.74)),l1=sm(seg(p,.76,.8)),l2=sm(seg(p,.83,.87));
    E.ld[0][0].style.strokeDashoffset=(E.ld[0][1]*(1-l0)).toFixed(1);
    E.ld[1][0].style.strokeDashoffset=(E.ld[1][1]*(1-l1)).toFixed(1);
    E.ld[2][0].style.strokeDashoffset=(E.ld[2][1]*(1-l2)).toFixed(1);
    var zs=[seg(p,.72,.79),seg(p,.79,.86),seg(p,.86,.93)];
    E.z.forEach(function(el,k){op(el,b*sm(zs[k]*1.6))});
    E.zo.forEach(function(a,k){a[0].style.strokeDashoffset=(a[1]*(1-sm(zs[k]))).toFixed(1)});
    E.zl.forEach(function(el,k){op(el,b*sm(seg(p,.76+k*.07,.8+k*.07)))});
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
