/* the story scene (BL/BY/DB): ONE continuous scene, kept on screen for all four steps, drawn in fine line from Myogenica's own
   process (myogenica.com/science and its process graphic): a cGMP iPSC bank (a colony in a culture well) -> PAX7 switched on
   (nuclei light in the logo's coral) -> purification on the CD54 marker (CD54+ cells ringed and kept, the rest fall away) ->
   transplanted into a muscle cross-section (polygonal fibres, geometry from fibres.py -> fibres.js, prepended by assemble.py),
   where the cells settle at the fibre edges as new muscle stem cells and fibres light white with dystrophin, as in the
   company's own micrograph. Schematic; counts and positions are illustrative. Driven by the scrubbed story progress. */
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="mgl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f4543d" stop-opacity=".55"/><stop offset="1" stop-color="#f4543d" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="wgl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#6f9cc2" stop-opacity=".16"/><stop offset="1" stop-color="#6f9cc2" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<g id="fibs">';FIB.forEach(function(q,k){g+='<path class="fb'+(DYS.indexOf(k)>=0?' dy':'')+'" d="'+q[0]+'"/>'});g+='</g>';
  g+='<g id="well"><circle cx="400" cy="282" r="196" fill="url(#wgl)"/><circle class="wl sD" cx="400" cy="282" r="150"/><circle class="wl2 sD" cx="400" cy="282" r="158"/></g>';
  g+='<text class="t" x="784" y="546" text-anchor="end">'+(mob?'SCHEMATIC':'MYOPAXON · SCHEMATIC')+'</text>';
  g+='</g>';
  g+='<g id="scMove">';
  CELLS.forEach(function(c,k){var r=8.6*c[5];
    g+='<g class="cl'+(c[2]?' pos':' neg')+'" transform="translate('+f(c[0])+' '+f(c[1])+')">'+
      '<circle class="gl" r="'+f(r*2.2)+'" fill="url(#mgl)"/>'+
      '<ellipse class="mb" rx="'+f(r)+'" ry="'+f(r)+'"/>'+
      (c[2]?'<circle class="cd" r="'+f(r+5)+'"/>':'')+
      '<circle class="nu" r="'+f(r*.42)+'"/></g>'});
  g+='</g>';
  /* one label per step, in a fixed corner so nothing collides (CY) */
  var L=[["iPSC COLONY","cGMP MASTER CELL BANK"],["PAX7 ON","THE MUSCLE STEM CELL GENE"],["CD54+ CELLS KEPT","PURIFIED ON A cGMP PROCESS"],["DYSTROPHIN RESTORED","AND A NEW STEM CELL POOL"]];
  L.forEach(function(l,k){g+='<g id="lb'+(k+1)+'" class="lbx"><text class="a" x="'+(mob?16:24)+'" y="'+(mob?40:34)+'">'+l[0]+'</text>'+(mob?'':'<text class="t" x="24" y="56">'+l[1]+'</text>')+'</g>'});
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fibs:$$(".fb",svg),dys:$$(".fb.dy",svg),well:$("#well",svg),mv:$("#scMove",svg),
    cl:$$(".cl",svg),lb:[1,2,3,4].map(function(k){return $("#lb"+k,svg)})};
  E.cl.forEach(function(el,k){el._c=CELLS[k];el._mb=$(".mb",el);el._nu=$(".nu",el);el._cd=$(".cd",el);el._gl=$(".gl",el)});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s2=seg(p,.17,.3),s3=seg(p,.42,.56),s4=seg(p,.67,.84),s5=seg(p,.76,.94);
    /* the tissue: faint while the cells are in culture, then it comes forward and the engrafted fibres light with dystrophin */
    var fo=b*(.18+.34*s4);E.fibs.forEach(function(el){el.style.opacity=fo.toFixed(3)});
    E.dys.forEach(function(el,k){var d=sm(s5*1.6-(k%7)*.09);el.style.opacity=(b*(.18+.34*s4+.48*d)).toFixed(3);el.classList.toggle("lit",d>.5)});
    op(E.well,b*(1-s4));
    E.cl.forEach(function(el,k){var c=el._c,mig=c[2]?sm(s4*1.25-(k%9)*.03):0,
      x=c[0]+(c[3]-c[0])*mig,y=c[1]+(c[4]-c[1])*mig,st=s2*(1-mig),rot=c[6]*57.3,
      sx=1+.32*st-.35*mig,sy=1-.12*st-.35*mig;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+rot.toFixed(0)+")");
      el._mb.setAttribute("transform","scale("+sx.toFixed(3)+" "+sy.toFixed(3)+")");
      op(el._nu,.55+.45*s2);el._nu.classList.toggle("on",s2>.4);
      op(el._gl,s2*(c[2]?1:1-s3)*(1-.5*mig));
      if(el._cd)op(el._cd,s3*(1-.6*mig));
      op(el,c[2]?1:1-s3)});
    op(E.lb[0],b*(1-seg(p,.12,.18)));op(E.lb[1],seg(p,.19,.26)*(1-seg(p,.37,.43)));op(E.lb[2],seg(p,.44,.5)*(1-seg(p,.62,.68)));op(E.lb[3],seg(p,.72,.8));
  };
}
