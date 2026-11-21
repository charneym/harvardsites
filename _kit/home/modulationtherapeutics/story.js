/* The story scene (BL/BY/DB/CX): how MTI-301 works, drawn as ONE continuous engraved cross-section of a tumour cell that
   stays on screen for all three steps. Step 1 the cell engraves in: membrane, nucleus, the folds of the endoplasmic
   reticulum, five SCD1 enzymes, and the kinked monounsaturated fatty-acid chains they make gathering as lipid droplets.
   Step 2 MTI-301 molecules (hexagons) cross the membrane and dock on each SCD1; the chains and droplets fade and the ER
   folds turn red with stress; calreticulin marks rise to the cell surface. Step 3 three cytotoxic T cells arrive from the
   right and engage the marked surface. Sources: NCI SBIR R44CA272064 abstract (NIH RePORTER) and the MTI-301 Phase 1
   announcement on modulationtherapeutics.com. */
var SCW=640,SCH=520,CX=300,CY=250,CR=204;
var ENZ=[[-112,-96],[-138,24],[-70,118],[54,128],[108,-112]];
var DRUG=ENZ.map(function(e,i){var a=Math.atan2(e[1],e[0]);return {e:e,a:a,d:i*.07}});
var DROP=[[-60,-140,9],[-160,-40,7],[-118,86,8],[0,160,7],[96,108,9],[146,-50,7],[40,-150,6],[-30,140,6]];
var CRT=(function(){var a=[],i;for(i=0;i<12;i++){var th=-1.05+i*(2.1/11);a.push(th)}return a})();
var TC=[{th:-.62,r:40,d:0},{th:0,r:44,d:.08},{th:.62,r:38,d:.16}];
function blob(r,n,j,seed){var p='',i;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,rr=r*(1+j*Math.sin(a*7+seed)+j*.6*Math.sin(a*13+seed*2));p+=(i?'L':'M')+(rr*Math.cos(a)).toFixed(1)+' '+(rr*Math.sin(a)).toFixed(1)}return p+'Z'}
function chain(x,y,a,kink){var f=function(n){return n.toFixed(1)},p='M'+f(x)+' '+f(y),i,dx=Math.cos(a),dy=Math.sin(a),nx=-dy,ny=dx,L=7.5;
  for(i=1;i<=7;i++){if(kink&&i===4){a+=.9;dx=Math.cos(a);dy=Math.sin(a);nx=-dy;ny=dx}x+=dx*L;y+=dy*L;var s=(i%2?3.2:-3.2);p+='L'+f(x+nx*s)+' '+f(y+ny*s)}return p}
function cellScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M622 24H520M18 496H120M622 496H520"/>';
  g+='<text class="t" x="18" y="14">TUMOUR CELL · CROSS-SECTION</text><text class="t tr" x="622" y="14" text-anchor="end">MTI-301</text></g>';
  /* the cell */
  g+='<g id="scCell"><circle class="cfill" cx="'+CX+'" cy="'+CY+'" r="'+CR+'"/>';
  g+='<circle class="mb sD" cx="'+CX+'" cy="'+CY+'" r="'+CR+'"/><circle class="mb2 sD" cx="'+CX+'" cy="'+CY+'" r="'+(CR-6)+'"/>';
  g+='<circle class="nu sD" cx="'+(CX+6)+'" cy="'+(CY-4)+'" r="58"/><circle class="nu2 sD" cx="'+(CX+18)+'" cy="'+(CY+6)+'" r="16"/></g>';
  /* the endoplasmic reticulum: folded arcs around the nucleus */
  g+='<g id="scER">';
  [[78,-2.6,-.4],[94,-2.8,-.9],[86,.3,1.9],[104,.5,2.5],[118,-2.3,-1.2],[122,1.0,2.0]].forEach(function(a){
    var p='',k,n=26;for(k=0;k<=n;k++){var t=a[1]+(a[2]-a[1])*k/n,rr=a[0]+4*Math.sin(k*1.6);p+=(k?'L':'M')+f(CX+6+rr*Math.cos(t))+' '+f(CY-4+rr*Math.sin(t))}
    g+='<path class="er sD" d="'+p+'"/>'});
  g+='</g>';
  /* SCD1 enzymes */
  g+='<g id="scEnz">';ENZ.forEach(function(e,k){g+='<g class="ez" transform="translate('+f(CX+e[0])+' '+f(CY+e[1])+')"><circle class="ez1" r="9"/><circle class="ez2" cx="9" cy="-4" r="6"/></g>'});g+='</g>';
  /* fatty-acid chains leaving each enzyme, and lipid droplets */
  g+='<g id="scFA">';ENZ.forEach(function(e,k){var a=Math.atan2(e[1],e[0])+(k%2?.7:-.7);g+='<path class="fa" d="'+chain(CX+e[0]+Math.cos(a)*14,CY+e[1]+Math.sin(a)*14,a,1)+'"/>'});g+='</g>';
  g+='<g id="scDrop">';DROP.forEach(function(d){g+='<circle class="dr" cx="'+f(CX+d[0])+'" cy="'+f(CY+d[1])+'" r="'+d[2]+'"/>'});g+='</g>';
  /* MTI-301 molecules */
  g+='<g id="scDrug">';DRUG.forEach(function(d,k){var s=10,p='',i2;for(i2=0;i2<6;i2++){var aa=i2*Math.PI/3;p+=(i2?'L':'M')+(s*Math.cos(aa)).toFixed(1)+' '+(s*Math.sin(aa)).toFixed(1)}g+='<g class="dg" data-k="'+k+'"><path d="'+p+'Z"/><path class="dgt" d="M10 0h7"/></g>'});g+='</g>';
  /* calreticulin marks on the surface (right-hand side, where the T cells will engage) */
  g+='<g id="scCrt">';CRT.forEach(function(th,k){g+='<circle class="ct" data-k="'+k+'" cx="'+f(CX+(CR+5)*Math.cos(th))+'" cy="'+f(CY+(CR+5)*Math.sin(th))+'" r="3.4"/>'});g+='</g>';
  /* cytotoxic T cells */
  g+='<g id="scT">';TC.forEach(function(T,k){g+='<g class="tc" data-k="'+k+'"><path class="tcb" d="'+blob(T.r,90,.035,k*1.7)+'"/><path class="tcs" d="'+blob(T.r*.72,70,.05,k+2)+'"/></g>'});g+='</g>';
  /* step labels in the clear band at the foot; only one is ever visible (CY) */
  g+='<g id="lb1"><text class="a" x="18" y="514">SCD1 · MONOUNSATURATED FATTY ACIDS</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">MTI-301 BLOCKS SCD1 · ER STRESS</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">T CELLS ENGAGE THE TUMOUR</text></g>';
  return g+'</svg>';
}
function scene(){return cellScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),cell:dl("#scCell .sD"),fill:$("#scCell .cfill",svg),er:dl("#scER .er"),
    ez:$$("#scEnz .ez",svg),fa:dl("#scFA .fa"),dr:$$("#scDrop .dr",svg),
    dg:$$(".dg",svg).map(function(el){return {el:el,d:DRUG[+el.getAttribute("data-k")]}}),
    ct:$$(".ct",svg),tc:$$(".tc",svg).map(function(el){return {el:el,t:TC[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.14),make=seg(p,.06,.26),dIn=seg(p,.34,.56),stress=seg(p,.5,.66),crt=seg(p,.58,.7),tIn=seg(p,.72,.94);
    var cg=Math.min(1,Math.max(b*b,grow*1.2));
    draw(E.cell,cg);draw(E.er,cg);op(E.fill,b);
    E.ez.forEach(function(z){op(z,b*Math.min(1,cg*1.3));z.classList.toggle("off",dIn>.8)});
    /* the chains are made, then fade once SCD1 is blocked */
    draw(E.fa,Math.max(b*b*.999,make));E.fa.forEach(function(a){a[0].style.opacity=(b*(1-.85*stress)).toFixed(3)});
    E.dr.forEach(function(d,i){op(d,b*Math.min(1,Math.max(b*b,make*1.4-i*.05))*(1-.9*stress))});
    svg.classList.toggle("stress",stress>.5);
    E.er.forEach(function(a){a[0].style.opacity=String(1)});
    /* MTI-301 crosses the membrane from the left edge and docks on each enzyme */
    E.dg.forEach(function(D){var t=Math.min(1,Math.max(0,(dIn-D.d.d)*1.5)),e=D.d.e;
      var sx=-CR-60-D.d.d*60,sy=e[1]*.6,ex=e[0]-19*Math.cos(D.d.a),ey=e[1]-19*Math.sin(D.d.a),q=1-Math.pow(1-t,2);
      var x=sx+(ex-sx)*q,y=sy+(ey-sy)*q;
      D.el.setAttribute("transform","translate("+(CX+x).toFixed(1)+" "+(CY+y).toFixed(1)+") rotate("+(D.d.a*180/Math.PI).toFixed(1)+")");
      op(D.el,b*Math.min(1,t*4))});
    E.ct.forEach(function(c,i){op(c,b*Math.min(1,Math.max(0,crt*1.6-i*.05)))});
    /* the T cells arrive and engage */
    E.tc.forEach(function(T){var t=Math.min(1,Math.max(0,(tIn-T.t.d)*1.3)),q=1-Math.pow(1-t,3),r1=CR+T.t.r-4,r0=r1+120,r=r0+(r1-r0)*q;
      T.el.setAttribute("transform","translate("+(CX+r*Math.cos(T.t.th)).toFixed(1)+" "+(CY+r*Math.sin(T.t.th)).toFixed(1)+")");op(T.el,b*Math.min(1,t*2.5))});
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}
