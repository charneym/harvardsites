/* the story scene (BL/BY/DB): ONE engraved chest view, kept on screen for all three steps: both lungs drawn in fine line, the
   pulmonary vessel tree branching through them, and ProCA particles (a protein outline holding a lit gadolinium site).
   Step 1 particles enter and travel the vessel tree (gadolinium held tight). Step 2 the whole vessel tree brightens: blood-pool
   contrast with high T1 and T2 relaxivity. Step 3 the tree settles and the collagen-targeted particles gather at three sub-millimetre
   nodules, which light. Sources: inlighta.com (Products; Investors overview), the 2026 Science Advances paper as reported by Emory
   Winship (all 18 nodules found, some under 1 mm). Schematic; positions are illustrative. Driven by the scrubbed story progress. */
var LG=(function(){
  var V=[],P=[];
  /* deterministic branching tree from a root point */
  function br(x,y,a,len,d,side,k){
    var x2=x+Math.cos(a)*len,y2=y+Math.sin(a)*len;V.push([x,y,x2,y2,d]);P.push([x,y,x2,y2,d]);
    if(d>=5)return;
    var j=.18*Math.sin(k*12.9898+d*3.1);
    br(x2,y2,a-.40-j,len*.78,d+1,side,k*2+1);
    br(x2,y2,a+.36+j,len*.74,d+1,side,k*2+2);
  }
  br(400,166,Math.PI/2+.78,84,1,-1,1);   /* left pulmonary artery (viewer's left) */
  br(400,166,Math.PI/2-.78,84,1,1,2);    /* right */
  return {V:V};
})();
var NOD=[[226,300],[566,262],[548,412]];
function lungPath(s){/* s=-1 viewer's left lung, 1 right; drawn as one outline with a hilum notch */
  var X=function(x){return 400+s*x};
  return 'M'+X(46)+' 118C'+X(70)+' 70 '+X(150)+' 58 '+X(196)+' 92C'+X(270)+' 150 '+X(318)+' 300 '+X(316)+' 440C'+X(314)+' 486 '+X(290)+' 510 '+X(250)+' 506'+
    'C'+X(196)+' 500 '+X(130)+' 470 '+X(70)+' 478C'+X(52)+' 480 '+X(40)+' 466 '+X(44)+' 446C'+X(56)+' 360 '+X(30)+' 270 '+X(52)+' 214C'+X(60)+' 186 '+X(40)+' 150 '+X(46)+' 118Z';
}
function procaG(r){/* a small protein outline with its lit gadolinium site */
  var s='',i,n=28;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r*(1+.14*Math.sin(3*t+1)+.08*Math.cos(5*t));s+=(i?'L':'M')+(rr*Math.cos(t)).toFixed(1)+' '+(rr*Math.sin(t)).toFixed(1)}
  return '<path class="pp" d="'+s+'Z"/><circle class="gd" r="'+(r*.34).toFixed(1)+'"/>';
}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="ndg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#80cc48" stop-opacity=".7"/><stop offset="1" stop-color="#80cc48" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="vsg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#7ebec5" stop-opacity=".10"/><stop offset="1" stop-color="#7ebec5" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="lo sD" d="'+lungPath(-1)+'"/><path class="lo sD" d="'+lungPath(1)+'"/>';
  g+='<path class="li sD" d="'+lungPath(-1)+'" transform="translate(400 300) scale(.9) translate(-400 -300)"/><path class="li sD" d="'+lungPath(1)+'" transform="translate(400 300) scale(.9) translate(-400 -300)"/>';
  /* trachea and the heart's shadow between the lungs */
  g+='<path class="tr sD" d="M392 22V128M408 22V128M392 128L358 160M408 128L442 160"/>';
  for(i=0;i<7;i++)g+='<path class="tr2 sD" d="M392 '+(34+i*14)+'H408"/>';
  g+='<path class="ht sD" d="M372 300C340 330 330 400 372 452C410 496 482 476 500 432C516 388 470 340 430 316C412 304 390 290 372 300Z"/>';
  g+='<text class="t" x="784" y="546" text-anchor="end">CHEST · SCHEMATIC</text>';
  g+='</g>';
  /* vessel tree: a dim base copy, and a bright copy that is drawn on for blood-pool contrast */
  var vd='';LG.V.forEach(function(v){vd+='M'+f(v[0])+' '+f(v[1])+'L'+f(v[2])+' '+f(v[3])});
  g+='<g id="scMove"><ellipse cx="400" cy="300" rx="300" ry="230" fill="url(#vsg)" id="vglow" opacity="0"/>';
  LG.V.forEach(function(v){g+='<path class="vs" style="stroke-width:'+(3.4-v[4]*.5).toFixed(2)+'" d="M'+f(v[0])+' '+f(v[1])+'L'+f(v[2])+' '+f(v[3])+'"/>'});
  LG.V.forEach(function(v){g+='<path class="vb" style="stroke-width:'+(3.6-v[4]*.5).toFixed(2)+'" d="M'+f(v[0])+' '+f(v[1])+'L'+f(v[2])+' '+f(v[3])+'"/>'});
  /* nodules: a fine collagen hatch, a core, and the glow they take on in step 3 */
  NOD.forEach(function(n,j){g+='<g class="nd" transform="translate('+n[0]+' '+n[1]+')"><circle class="ng" r="34" fill="url(#ndg)"/>'+
    '<circle class="nc" r="7"/><path class="nh" d="M-11 -4C-4 -9 4 -9 11 -3M-10 4C-3 9 5 8 11 3M-6 -10C-9 -2 -8 6 -4 11M6 -10C9 -2 8 6 4 11"/></g>'});
  g+='</g>';
  /* ProCA particles: positioned along the vessel tree by the driver */
  g+='<g id="scPart">';for(i=0;i<18;i++)g+='<g class="pc0" id="pq'+i+'" opacity="0">'+procaG(mob?11:8)+'</g>';g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?40:44)+'">'+(mob?'ProCA® AGENT':'ProCA® · GADOLINIUM HELD IN THE PROTEIN')+'</text><path class="ldr" d="M'+(mob?60:80)+' '+(mob?52:54)+'L'+(mob?250:300)+' 236"/>'+
     (mob?'':'<text class="t" x="40" y="64">ENGINEERED METAL-BINDING SITES</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?776:760)+'" y="'+(mob?40:44)+'" text-anchor="end">'+(mob?'BLOOD POOL':'BLOOD-POOL CONTRAST · ProCA32')+'</text><path class="ldr" d="M'+(mob?700:690)+' '+(mob?52:54)+'L'+(mob?600:560)+' '+(mob?230:214)+'"/>'+
     (mob?'':'<text class="t" x="760" y="64" text-anchor="end">HIGH RELAXIVITY IN T1 AND T2</text>')+'</g>';
  var n0=NOD[0];
  g+='<g id="lb3"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?548:540)+'">'+(mob?'NODULES UNDER 1 MM':'COLLAGEN-TARGETED · NODULES UNDER 1 MM')+'</text><path class="ldr" d="M'+(mob?80:110)+' '+(mob?526:522)+'L'+(n0[0]-8)+' '+(n0[1]+12)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),vs:$$(".vs",svg),vb:dl(".vb"),vg:$("#vglow",svg),nd:$$(".nd",svg),
    pq:$$("#scPart > g",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var V=LG.V,lastB=-1;
  /* each particle follows one root-to-leaf path through the tree */
  var kids={};V.forEach(function(v,i){V.forEach(function(u,j){if(j!==i&&Math.abs(u[0]-v[2])<.01&&Math.abs(u[1]-v[3])<.01){(kids[i]=kids[i]||[]).push(j)}})});
  var roots=[];V.forEach(function(v,i){if(v[4]===1)roots.push(i)});
  var paths=[];for(var q=0;q<E.pq.length;q++){var cur=roots[q%2],seq=[cur],k=q;while(kids[cur]){cur=kids[cur][(k>>1)%2];k=Math.floor(k*1.7)+1;seq.push(cur)}paths.push(seq)}
  var tgt=E.pq.map(function(_,q){return NOD[q%3]});
  function along(seq,u){var tot=0,L=seq.map(function(i){var v=V[i];var l=Math.hypot(v[2]-v[0],v[3]-v[1]);tot+=l;return l}),d=u*tot,i;
    for(i=0;i<seq.length;i++){if(d<=L[i]||i===seq.length-1){var v=V[seq[i]],r=Math.min(1,d/L[i]);return [v[0]+(v[2]-v[0])*r,v[1]+(v[3]-v[1])*r]}d-=L[i]}}
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.2),s2=seg(p,.34,.5),s3=seg(p,.66,.84);
    E.vs.forEach(function(el){op(el,b*(.55-.2*s3))});
    draw(E.vb,s2);E.vb.forEach(function(a){op(a[0],b*s2*(1-.7*s3))});
    op(E.vg,b*s2*(1-.6*s3));
    E.nd.forEach(function(el,j){op(el,b*(.55+.45*s3));var g=el.querySelector(".ng");op(g,s3*(.8+.2*Math.sin(p*30+j)));el.classList.toggle("lit",s3>.5)});
    /* particles: travel the tree (steps 1-2), then home to the nodules (step 3) */
    E.pq.forEach(function(el,q){var ph=(q*.137)%1,u=Math.max(0,Math.min(1,s1*1.3-ph*.3)),
      v=u*(.62+.38*(.5+.5*Math.sin(p*14+q*1.7))),pos=along(paths[q],v),T=tgt[q],ang=q*2.4,R=14+(q%4)*4,
      hx=T[0]+Math.cos(ang)*R,hy=T[1]+Math.sin(ang)*R,x=pos[0]+(hx-pos[0])*s3,y=pos[1]+(hy-pos[1])*s3;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*Math.min(1,s1*3-ph)*(1-.15*s2))});
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.6,.68)));op(E.l3,b*seg(p,.72,.84));
  };
}
