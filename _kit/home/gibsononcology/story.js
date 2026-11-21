/* The story scene (BL/BY/DB/CX): how LMP744 works, drawn as ONE continuous engraved scene that stays on screen for all
   three steps. Top: a brain capillary wall (endothelial cells joined edge to edge, blood above, brain below); step 1 the
   drug molecules (the four fused rings of the indenoisoquinoline core) pass through it into the brain. Middle: a long DNA
   double helix; step 2 topoisomerase I closes round it as a clamp and nicks one strand, and a drug molecule wedges into the
   nick and holds the complex there. Right: at the MYC promoter a G-quadruplex (three stacked guanine tetrads) folds out of
   the strand; step 3 a drug molecule stacks onto it and the MYC transcription arrow fades. Sources: gibsononcology.com
   (Rationale; Lead Program; Publications: Pommier 2018, Marzi 2019, Wang 2019 "Indenoisoquinoline Topoisomerase
   Inhibitors Strongly Bind and Stabilize the MYC Promoter G-Quadruplex and Downregulate MYC"). */
var SCW=760,SCH=520;
var VY=96,HY=318,HA=30,HX0=40,HX1=720,TX=300,GX=566;
function ringPath(s){
  /* the indenoisoquinoline core: hexagon, hexagon, pentagon, hexagon, fused in a row, centred on 0,0 */
  var r3=Math.sqrt(3),pts=[],d='';
  function hex(cx,cy,rot){var p=[],i;for(i=0;i<6;i++){var a=rot+i*Math.PI/3;p.push([cx+s*Math.cos(a),cy+s*Math.sin(a)])}return p}
  function poly(p){return 'M'+p.map(function(q){return q[0].toFixed(1)+' '+q[1].toFixed(1)}).join('L')+'Z'}
  var A=hex(-s*r3*1.3,0,Math.PI/6),B=hex(-s*r3*.3,0,Math.PI/6);
  var e0=[B[0][0],B[0][1]],e1=[B[5][0],B[5][1]];
  var ap=s/(2*Math.tan(Math.PI/5)),pc=[e0[0]+ap,0],pr=s/(2*Math.sin(Math.PI/5)),P=[],i;
  for(i=0;i<5;i++){var a=Math.PI+i*2*Math.PI/5;P.push([pc[0]+pr*Math.cos(a),pc[1]+pr*Math.sin(a)])}
  var q0=P[1],q1=P[2],mx=(q0[0]+q1[0])/2,my=(q0[1]+q1[1])/2,nx=mx-pc[0],ny=my-pc[1],nl=Math.hypot(nx,ny);nx/=nl;ny/=nl;
  var hc=[mx+nx*s*r3/2,my+ny*s*r3/2],ang=Math.atan2(q0[1]-hc[1],q0[0]-hc[0]),D=hex(hc[0],hc[1],ang);
  return poly(A)+poly(B)+poly(P)+poly(D);
}
var MOLS=(function(){var a=[],i;for(i=0;i<5;i++)a.push({x:150+i*118+((i*37)%3-1)*14,d:i*.07});return a})();
function helix(x0,x1,y,amp,ph){var d='',x,st=6;for(x=x0;x<=x1;x+=st){var yy=y+amp*Math.sin((x-x0)/58+ph);d+=(x===x0?'M':'L')+x.toFixed(1)+' '+yy.toFixed(1)}return d}
function gibsonScene(o){
  var g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">LMP744 · MECHANISM</text><text class="t" x="742" y="14" text-anchor="end">INDENOISOQUINOLINE</text>';
  g+='<text class="t" x="18" y="'+(VY-44)+'">BLOOD</text><text class="t" x="18" y="'+(VY+62)+'">BRAIN</text></g>';
  /* the capillary wall: endothelial cells, edge to edge, with their nuclei */
  g+='<g id="scWall">';
  for(i=0;i<8;i++){var cx=58+i*92;
    g+='<path class="cell sD" d="M'+(cx-44)+' '+(VY-14)+'Q'+cx+' '+(VY-30)+' '+(cx+44)+' '+(VY-14)+'L'+(cx+44)+' '+(VY+14)+'Q'+cx+' '+(VY+24)+' '+(cx-44)+' '+(VY+14)+'Z"/>';
    g+='<ellipse class="nuc sD" cx="'+(cx+((i%3)-1)*8)+'" cy="'+(VY-2)+'" rx="15" ry="6"/>';}
  g+='</g>';
  /* drug molecules crossing the wall */
  g+='<g id="scMols">';MOLS.forEach(function(m,k){g+='<path class="mol" data-k="'+k+'" d="'+ringPath(6.2)+'"/>'});g+='</g>';
  /* the DNA double helix */
  g+='<g id="scDNA"><path class="st sD" id="s1" d="'+helix(HX0,HX1,HY,HA,0)+'"/><path class="st2 sD" d="'+helix(HX0,HX1,HY,HA,Math.PI)+'"/>';
  var rg='';for(x=HX0+8;x<HX1;x+=13){var a1=HY+HA*Math.sin((x-HX0)/58),a2=HY+HA*Math.sin((x-HX0)/58+Math.PI);if(Math.abs(a1-a2)>6)rg+='M'+x+' '+a1.toFixed(1)+'L'+x+' '+a2.toFixed(1)}
  g+='<path class="rung sD" d="'+rg+'"/></g>';
  /* topoisomerase I: a clamp that closes round the duplex */
  g+='<g id="scTop"><path class="clamp" id="clU" d="M'+(TX-62)+' '+(HY-10)+'C'+(TX-62)+' '+(HY-92)+' '+(TX+62)+' '+(HY-92)+' '+(TX+62)+' '+(HY-10)+'"/>';
  g+='<path class="clamp" id="clL" d="M'+(TX-62)+' '+(HY+10)+'C'+(TX-62)+' '+(HY+92)+' '+(TX+62)+' '+(HY+92)+' '+(TX+62)+' '+(HY+10)+'"/>';
  g+='<text class="t" x="'+TX+'" y="'+(HY-100)+'" text-anchor="middle" id="tTop">TOPOISOMERASE I</text>';
  g+='<path class="nick" id="nick" d="M'+(TX-3)+' '+(HY-36)+'L'+(TX+3)+' '+(HY-24)+'"/></g>';
  g+='<path class="mol mol2" id="mTop" d="'+ringPath(7)+'"/>';
  /* the MYC promoter G-quadruplex: three stacked tetrads folded out of the strand */
  g+='<g id="scG4"><path class="lm sD" d="M'+(GX-22)+' '+(HY+26)+'C'+(GX-30)+' '+(HY+60)+' '+(GX-26)+' '+(HY+84)+' '+(GX-18)+' '+(HY+96)+'M'+(GX+22)+' '+(HY+26)+'C'+(GX+30)+' '+(HY+60)+' '+(GX+26)+' '+(HY+84)+' '+(GX+18)+' '+(HY+96)+'"/>';
  for(i=0;i<3;i++){var ty=HY+104+i*24;g+='<path class="tet sD" d="M'+(GX-34)+' '+ty+'L'+GX+' '+(ty-12)+'L'+(GX+34)+' '+ty+'L'+GX+' '+(ty+12)+'Z"/>'}
  g+='<text class="t" x="'+(GX-48)+'" y="'+(HY+132)+'" text-anchor="end">MYC PROMOTER</text>';
  g+='<path class="arw" id="arw" d="M'+(GX-20)+' '+(HY-58)+'H'+(GX+90)+'M'+(GX+82)+' '+(HY-64)+'L'+(GX+90)+' '+(HY-58)+'L'+(GX+82)+' '+(HY-52)+'"/>';
  g+='<text class="a" x="'+(GX-20)+'" y="'+(HY-70)+'" id="tMyc">MYC</text></g>';
  g+='<path class="mol mol2" id="mG4" d="'+ringPath(7)+'"/>';
  g+='<g id="lb1"><text class="a" x="18" y="514">CROSSES THE BLOOD–BRAIN BARRIER</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">TOP1 TRAPPED ON THE CUT DNA</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">MYC G-QUADRUPLEX HELD · MYC DOWN</text></g>';
  return g+'</svg>';
}
function scene(){return gibsonScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),wall:dl("#scWall .sD"),dna:dl("#scDNA .sD"),
    mols:$$("#scMols .mol",svg),clU:$("#clU",svg),clL:$("#clL",svg),tTop:$("#tTop",svg),nick:$("#nick",svg),mTop:$("#mTop",svg),
    g4:dl("#scG4 .sD"),g4t:$$("#scG4 text",svg),arw:$("#arw",svg),mG4:$("#mG4",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function at(el,x,y,r,s){if(el)el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+r.toFixed(1)+") scale("+s.toFixed(3)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var wl=Math.min(1,Math.max(b*b,seg(p,0,.14)*1.2));draw(E.wall,wl);draw(E.dna,Math.min(1,Math.max(b*b,seg(p,.02,.2)*1.15)));
    /* step 1: molecules fall from the blood through the wall into the brain, then drift on toward the DNA */
    var cr=seg(p,.06,.34);
    E.mols.forEach(function(el,k){var m=MOLS[k],t=Math.min(1,Math.max(0,(cr-m.d)*1.4)),y=VY-58+t*112;
      at(el,m.x,y,(k*41+t*60)%360,1);op(el,b*Math.min(1,t*4+.25)*(1-seg(p,.44,.56)))});
    /* step 2: the clamp closes, the strand is nicked, a molecule wedges in */
    var cl=seg(p,.36,.5),wd=seg(p,.48,.62);
    if(E.clU){E.clU.setAttribute("transform","translate(0 "+(-34*(1-cl)).toFixed(1)+")");op(E.clU,b*Math.min(1,cl*1.5))}
    if(E.clL){E.clL.setAttribute("transform","translate(0 "+(34*(1-cl)).toFixed(1)+")");op(E.clL,b*Math.min(1,cl*1.5))}
    op(E.tTop,b*cl);op(E.nick,b*seg(p,.44,.5));
    at(E.mTop,TX+150*(1-wd),HY-40-20*(1-wd),90*(1-wd),1);op(E.mTop,b*seg(p,.44,.52));
    /* step 3: the G-quadruplex folds out, a molecule stacks on it, the MYC arrow fades */
    var gq=seg(p,.66,.8),st=seg(p,.78,.9),dn=seg(p,.86,.98);
    draw(E.g4,gq*b);E.g4t.forEach(function(el){op(el,b*gq*(el.id==="tMyc"?(1-.75*dn):1))});
    op(E.arw,b*gq*(1-.8*dn));
    at(E.mG4,GX+60*(1-st),HY+84-50*(1-st),70*(1-st),1);op(E.mG4,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.06,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.86,.94));
  };
}
