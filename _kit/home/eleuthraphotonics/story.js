/* the story scene (BL/BY/DB): ONE side view of the Tetraquant(TM) imaging geometry, kept on screen for all three steps.
   Step 1 the single excitation laser converges through the objective to one focal point inside a fresh, unstained tissue section.
   Step 2 the focus emits the four nonlinear signals (eleuthra.co Technology/Gallery: 2PF FAD 615 nm, 3PF NADH 440 nm, SHG collagen
   510 nm, THG boundaries 340 nm), which travel back up through the objective to the detectors. Step 3 the focus scans the section
   and the merged image builds line by line in the panel: Eleuthra's own merged Tetraquant(TM) image of freshly excised mouse muscle
   (eleuthra.co/gallery-2). Everything is driven by the scrubbed story progress. */
var CH=[["615","FAD","FAD, METABOLISM","#ff8a78"],["510","SHG","SHG, COLLAGEN","#8fe08a"],["440","NADH","NADH, METABOLISM","#7fb0ff"],["340","THG","THG, BOUNDARIES","#c6b2ff"]];
var OBJ={x:200,lens:208,fy:362,top:40};
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,j,X=OBJ.x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><linearGradient id="bm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0b01c" stop-opacity=".18"/><stop offset="1" stop-color="#ffd36a" stop-opacity=".75"/></linearGradient>'+
     '<radialGradient id="fg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff3cf" stop-opacity=".95"/><stop offset=".35" stop-color="#f0b01c" stop-opacity=".45"/><stop offset="1" stop-color="#f0b01c" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="slabc"><rect x="30" y="322" width="370" height="96"/></clipPath><clipPath id="pnc"><rect id="pnr" x="470" y="160" width="300" height="0"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* tissue section on a glass slide: round cells (adipocyte-like), nuclei, wavy collagen fibres */
  g+='<rect class="slab" x="30" y="322" width="370" height="96"/>';
  g+='<g clip-path="url(#slabc)">';var cells='',nuc='',fib='';
  for(j=0;j<3;j++)for(i=0;i<13;i++){var cx=40+i*30+(j%2)*15,cy=338+j*30,rx=13+((i*7+j*3)%5),ry=11+((i*5+j)%4);cells+='<ellipse class="cell sD" cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'"/>';if((i+j)%3===0)nuc+='<circle class="nuc" cx="'+(cx+5)+'" cy="'+(cy-3)+'" r="2.2"/>'}
  for(j=0;j<3;j++){var d='M24 '+(350+j*28);for(i=0;i<=20;i++){d+='L'+f(24+i*19)+' '+f(350+j*28+Math.sin(i*.9+j*2)*5)}fib+='<path class="fib sD" d="'+d+'"/>'}
  g+=cells+fib+nuc+'</g>';
  g+='<path class="slab-e sD" d="M30 322H400M30 418H400"/><path class="glass sD" d="M14 424H416M14 434H416"/>';
  /* the objective: engraved barrel, knurl lines, front lens */
  var bt=OBJ.top,bl=OBJ.lens;
  g+='<path class="obj sD" d="M'+(X-74)+' '+bt+'H'+(X+74)+'V'+(bt+70)+'L'+(X+52)+' '+(bt+108)+'V'+(bl-26)+'L'+(X+36)+' '+(bl-4)+'H'+(X-36)+'L'+(X-52)+' '+(bl-26)+'V'+(bt+108)+'L'+(X-74)+' '+(bt+70)+'Z"/>';
  var kn='';for(i=0;i<14;i++){var kx=X-66+i*10.2;kn+='M'+f(kx)+' '+(bt+10)+'V'+(bt+30)}g+='<path class="knl sD" d="'+kn+'"/>';
  g+='<path class="obj2 sD" d="M'+(X-74)+' '+(bt+40)+'H'+(X+74)+'M'+(X-52)+' '+(bt+128)+'H'+(X+52)+'"/>';
  g+='<path class="lensf sD" d="M'+(X-34)+' '+(bl-4)+'Q'+X+' '+(bl+10)+' '+(X+34)+' '+(bl-4)+'"/>';
  /* the image panel (frame corners); fills in step 3 */
  g+='<rect class="pnbg" x="470" y="160" width="300" height="300"/>';
  var cn='',P=[[470,160,1,1],[770,160,-1,1],[470,460,1,-1],[770,460,-1,-1]];P.forEach(function(q){cn+='M'+(q[0]+q[2]*22)+' '+q[1]+'H'+q[0]+'V'+(q[1]+q[3]*22)});
  g+='<path class="pnf sD" d="'+cn+'"/>';
  g+='<text class="t" x="784" y="546" text-anchor="end">IMAGING GEOMETRY · SCHEMATIC</text>';
  g+='</g>';
  /* moving parts */
  g+='<g id="scMove">';
  g+='<path id="beam" class="beam" d=""/>';
  g+='<g id="ems">';for(i=0;i<16;i++)g+='<circle class="ph" r="2.6" fill="'+CH[i%4][3]+'"/>';g+='</g>';
  g+='<circle id="fglow" cx="'+X+'" cy="'+OBJ.fy+'" r="34" fill="url(#fg)"/>';
  g+='<image id="pimg" href="data:image/webp;base64,__STORY__" x="470" y="160" width="300" height="300" clip-path="url(#pnc)" preserveAspectRatio="xMidYMid slice"/>';
  g+='<path id="scl" class="scl" d="M470 160H770"/>';
  g+='</g>';
  /* labels, one set per step (leader lines end at the thing they name) */
  g+='<g id="lb1">'+(mob?'<text class="a" x="24" y="500">LASER FOCUSED IN FRESH TISSUE</text>':
     '<text class="a" x="262" y="262">LASER FOCUS</text><path class="ldr" d="M258 268L'+(X+16)+' '+(OBJ.fy-30)+'"/><text class="a" x="30" y="478">FRESH TISSUE, NO STAIN</text><text class="t" x="30" y="498">NOT FIXED OR STAINED</text>')+'</g>';
  g+='<g id="lb2">';CH.forEach(function(c,k){var y=(mob?34:56)+k*(mob?32:28);g+='<rect x="470" y="'+(y-(mob?18:10))+'" width="'+(mob?16:10)+'" height="'+(mob?16:10)+'" fill="'+c[3]+'"/><text class="a ch" x="'+(mob?496:488)+'" y="'+y+'">'+c[0]+' NM · '+(mob?c[1]:c[2])+'</text>'});g+='</g>';
  g+='<g id="lb3"><text class="a" x="470" y="'+(mob?500:488)+'">MERGED, LABEL-FREE</text>'+(mob?'':'<text class="t" x="470" y="508">MOUSE MUSCLE, IMAGED ON TETRAQUANT™</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .slab, #scBase .nuc, #scBase .pnbg",svg),mv:$("#scMove",svg),beam:$("#beam",svg),fg:$("#fglow",svg),
    ph:$$(".ph",svg),pr:$("#pnr",svg),sl:$("#scl",svg),pi:$("#pimg",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,X=OBJ.x,ly=OBJ.lens+4,fy=OBJ.fy;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.36,.52),s3=seg(p,.68,.86),sc=seg(p,.7,.97);
    /* step 3: the focus scans the section left to right and back, line by line */
    var fx=X+(s3>0?Math.sin(sc*Math.PI*6)*120*Math.min(1,s3*2):0);
    E.beam.setAttribute("d","M"+(X-30)+" "+ly+"L"+(X+30)+" "+ly+"L"+fx.toFixed(1)+" "+fy+"Z");
    E.beam.style.opacity=(b*(.45+.55*s1)).toFixed(3);
    E.fg.setAttribute("cx",fx.toFixed(1));op(E.fg,b*(.35+.65*s1)*(1+.25*Math.sin(p*60)*s2));
    /* step 2: photons of the four signals rise from the focus back through the objective */
    E.ph.forEach(function(el,i){var u=((p*3.2)+i/16)%1,sx=(i%4-1.5)*7*u,x=fx+(X-fx)*u+sx,y=fy-(fy-ly+40)*u;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*s2*(1-.5*s3)*Math.min(1,Math.sin(u*Math.PI)*2.4))});
    /* step 3: the merged image builds row by row */
    var hh=300*sc;E.pr.setAttribute("height",hh.toFixed(1));op(E.pi,b);
    E.sl.setAttribute("d","M470 "+(160+hh).toFixed(1)+"H770");op(E.sl,b*(sc>0&&sc<1?1:0));
    op(E.l1,b*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.9,1)*0));op(E.l3,b*seg(p,.72,.82));
  };
}
