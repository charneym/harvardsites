/* The story scene (BL/BY/DB): Targefrin's mechanism as ONE continuous engraved scene, from the Phase II abstract and the
   UC Riverside release of Sep 2025. A cancer cell membrane (lipid bilayer) runs across the frame, studded with EphA2
   receptors: ligand-binding domain above, fibronectin repeats, transmembrane helix, kinase domain below.
   Step 1: the receptors rise in, overexpressed and unliganded; their kinase domains light (pro-migratory signalling).
   Step 2: Targefrin-dimers descend; each half seats on a receptor's ligand-binding domain and the dimer draws two
   receptors together into a pair. Step 3: each pair is pulled inward, the membrane dips and a vesicle closes around it,
   and the receptors are degraded (fade), leaving the surface clear. Every element follows the scrubbed story progress. */
var SCW=760,SCH=520,MY=0,SY=232,SK=1.55,NP=2,DN=104;
var RX=[136,286,474,624];  /* receptor x; pairs (0,1) (2,3); drawn at SK about the membrane line SY */
function recG(i){
  return '<g class="rc" data-i="'+i+'" transform="translate('+RX[i]+' '+SY+') scale('+SK+')">'+
   '<path class="st" d="M0 '+(MY-14)+'V'+(MY-50)+'"/>'+
   '<ellipse class="fn" cx="0" cy="'+(MY-36)+'" rx="9" ry="11"/>'+
   '<ellipse class="fn" cx="0" cy="'+(MY-60)+'" rx="9" ry="11"/>'+
   '<path class="lbd" d="M-24 '+(MY-92)+'c0-16 10-26 24-26s24 10 24 26c0 12-9 20-24 20s-24-8-24-20z"/>'+
   '<path class="pk" d="M-8 '+(MY-112)+'q8 8 16 0"/>'+
   '<path class="tm" d="M0 '+(MY-14)+'V'+(MY+14)+'"/>'+
   '<path class="st" d="M0 '+(MY+14)+'V'+(MY+34)+'"/>'+
   '<rect class="kd" x="-17" y="'+(MY+34)+'" width="34" height="40"/>'+
   '<path class="kl" d="M-9 '+(MY+46)+'h18M-9 '+(MY+54)+'h18M-9 '+(MY+62)+'h12"/>'+
  '</g>'}
function memScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<text class="t" x="736" y="'+(SY-34)+'" text-anchor="end">OUTSIDE</text>';
  g+='<text class="t" x="736" y="'+(SY+46)+'" text-anchor="end">INSIDE</text>';
  g+='</g>';
  /* the bilayer: two leaflets of lipid heads with tails; it dips under each pair in step 3 */
  g+='<g id="scMem">';
  for(i=0;i<34;i++){var x=(10+i*20).toFixed(1),xa=(+x-2.4).toFixed(1),xb=(+x+2.4).toFixed(1);
    g+='<g class="lp" data-x="'+x+'"><circle class="hd" cx="'+x+'" cy="'+(SY-18)+'" r="6.2"/><path class="tl" d="M'+xa+' '+(SY-12)+'v12M'+xb+' '+(SY-12)+'v12"/>'+
         '<circle class="hd" cx="'+x+'" cy="'+(SY+18)+'" r="6.2"/><path class="tl" d="M'+xa+' '+(SY+12)+'v-12M'+xb+' '+(SY+12)+'v-12"/></g>'}
  g+='</g>';
  /* vesicles that close around each pair in step 3 */
  g+='<g id="scVes">';[0,1].forEach(function(k){var cx=(RX[2*k]+RX[2*k+1])/2;g+='<circle class="ves" data-k="'+k+'" cx="'+cx+'" cy="'+(SY+DN-24)+'" r="165"/>'});g+='</g>';
  g+='<g id="scRec">';for(i=0;i<RX.length;i++)g+=recG(i);g+='</g>';
  /* signalling arrows beside the kinase domains (step 1) */
  g+='<g id="scSigA">';RX.forEach(function(x){var y=SY+60*SK;g+='<path class="sa" d="M'+(x+32)+' '+y+'h28M'+(x+54)+' '+(y-6)+'l6 6-6 6"/>'});g+='</g>';
  /* the Targefrin-dimers: two ephrin-mimetic halves joined by a linker */
  g+='<g id="scTg">';[0,1].forEach(function(k){g+='<g class="tg" data-k="'+k+'"><path class="lk2" d="M-46 0H46"/><circle class="hf" cx="-46" cy="0" r="12"/><circle class="hf" cx="46" cy="0" r="12"/></g>'});g+='</g>';
  var ly=o.mob?26:22;
  g+='<g id="lb1"><text class="a" x="24" y="'+ly+'">EPHA2 · OVEREXPRESSED, UNLIGANDED</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+ly+'">TARGEFRIN-DIMER · EPHRIN MIMETIC</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+ly+'">EPHA2 INTERNALISED · DEGRADED</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={fade:$$("#scBase text",svg),lp:$$("#scMem .lp",svg).map(function(el){return {el:el,x:+el.getAttribute("data-x")}}),
    rc:$$(".rc",svg).map(function(el){return {el:el,i:+el.getAttribute("data-i"),kd:$(".kd",el)}}),
    sa:$$("#scSigA .sa",svg),tg:$$(".tg",svg),ves:$$(".ves",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.ves.forEach(function(v){var L=v.getTotalLength();v.style.strokeDasharray=L+" "+L;v.style.strokeDashoffset=L;v._L=L});
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  return function(p,b){
    if(!svg.isConnected)return;
    E.fade.forEach(function(el){op(el,b)});
    var mem=seg(p,0,.1),rin=seg(p,.04,.24),sig=seg(p,.14,.3)*(1-seg(p,.42,.52));
    var tin=seg(p,.36,.54),pair=seg(p,.5,.66),dn=seg(p,.7,.9),gone=seg(p,.86,.98);
    E.lp.forEach(function(L,i){var gi=cl(mem*2.2-i*.025),dy=0;
      [0,1].forEach(function(k){var cx=(RX[2*k]+RX[2*k+1])/2,dd=Math.abs(L.x-cx);dy+=Math.max(0,1-dd/100)*34*dn*(1-gone*.85)});
      L.el.setAttribute("transform","translate(0 "+dy.toFixed(1)+")");op(L.el,b*gi)});
    E.rc.forEach(function(R,j){var i=R.i,k=i>>1,side=i%2?-1:1,cx=(RX[2*k]+RX[2*k+1])/2;
      var gi=cl(rin*1.8-j*.12);
      var x=RX[i]+(cx-side*46-RX[i])*pair;
      var y=SY+(1-gi)*22+dn*DN;
      R.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale("+SK+")");
      op(R.el,b*gi*(1-gone*.88));
      R.kd.style.fill="rgba(217,165,74,"+(.08+.5*sig*gi).toFixed(3)+")"});
    E.sa.forEach(function(a,j){op(a,b*cl(sig*1.6-j*.08))});
    E.tg.forEach(function(T,k){var cx=(RX[2*k]+RX[2*k+1])/2,ti=cl(tin*1.6-k*.18);
      var y=-20+(SY-110*SK+20)*ti+dn*DN;
      T.setAttribute("transform","translate("+cx+" "+y.toFixed(1)+")");op(T,b*Math.min(1,ti*3)*(1-gone*.88))});
    E.ves.forEach(function(v,k){var vi=cl(dn*1.4-k*.1);v.style.strokeDashoffset=(v._L*(1-vi)).toFixed(1);op(v,b*vi*(1-gone*.6))});
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.8,.88));
  };
}
