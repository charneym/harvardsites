/* the story scene (BL/BY/DB): ONE engraved multivalent drug conjugate, kept on screen for all three steps, beside the membrane of a
   prostate cancer cell studded with PSMA. Step 1 the taxane payload (a schematic of the fused taxane rings with its oxetane) and its
   linker. Step 2 the arms branch out generation by generation and the PSMA-targeting molecules light at the tips: 2, then 4, then 8.
   Step 3 the conjugate docks, several arms on several PSMA at once, and free drug is released into the cell. Sources: Our First
   Focus (paramitatherapeutics.com) and NIH RePORTER 1R43CA306207-01. Schematic; geometry is illustrative. Driven by the scrubbed
   story progress. */
var MDC=(function(){
  var C=[268,280],DX=104,M={c:[1010,280],r:420},T=[],G2=[],G1=[],i;
  function memX(y){return M.c[0]-Math.sqrt(M.r*M.r-(y-M.c[1])*(y-M.c[1]))}
  /* the 8 docking points on the membrane, then the undocked tip positions (shifted left by DX) */
  var Y=[96,150,206,256,304,354,410,464];
  for(i=0;i<8;i++){var y=Y[i],x=memX(y)-18;T.push({dock:[x,y],tip:[x-DX,y],rec:[memX(y),y]})}
  for(i=0;i<4;i++){var a=T[2*i].tip,b=T[2*i+1].tip;G2.push([C[0]+(.5*(a[0]+b[0])-C[0])*.66,C[1]+(.5*(a[1]+b[1])-C[1])*.7])}
  for(i=0;i<2;i++){var p=G2[2*i],q=G2[2*i+1];G1.push([C[0]+(.5*(p[0]+q[0])-C[0])*.58,C[1]+(.5*(p[1]+q[1])-C[1])*.6])}
  return {C:C,DX:DX,M:M,T:T,G2:G2,G1:G1,memX:memX};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=MDC.C,M=MDC.M;
  function arm(a,b){var mx=a[0]+(b[0]-a[0])*.55,my=b[1];return 'M'+f(a[0])+' '+f(a[1])+'Q'+f(mx)+' '+f(my)+' '+f(b[0])+' '+f(b[1])}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="pyg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#be2c2e" stop-opacity=".55"/><stop offset="1" stop-color="#be2c2e" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="lgg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#b4cdb8" stop-opacity=".5"/><stop offset="1" stop-color="#b4cdb8" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="fadeV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".1" stop-color="#fff"/><stop offset=".9" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
     '<linearGradient id="fadeH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff"/><stop offset=".86" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient>'+
     '<mask id="cellm" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="560"><rect width="800" height="560" fill="url(#fadeV)"/><rect width="800" height="560" fill="url(#fadeH)" style="mix-blend-mode:multiply"/></mask>'+
     '<clipPath id="cellc"><circle cx="'+M.c[0]+'" cy="'+M.c[1]+'" r="'+(M.r-10)+'"/></clipPath></defs>';
  g+='<g id="scBase"><g mask="url(#cellm)">';
  /* the cell: lipid bilayer (two arcs with heads), engraved cytoplasm contours, the edge of the nucleus */
  g+='<circle class="mb sD" cx="'+M.c[0]+'" cy="'+M.c[1]+'" r="'+M.r+'"/><circle class="mb2 sD" cx="'+M.c[0]+'" cy="'+M.c[1]+'" r="'+(M.r-11)+'"/>';
  for(i=0;i<5;i++)g+='<circle class="ct sD" cx="'+M.c[0]+'" cy="'+M.c[1]+'" r="'+(M.r-48-i*34)+'"/>';
  g+='<circle class="nu sD" cx="'+(M.c[0]+60)+'" cy="'+(M.c[1]+20)+'" r="'+(M.r-250)+'"/><circle class="nu2 sD" cx="'+(M.c[0]+60)+'" cy="'+(M.c[1]+20)+'" r="'+(M.r-262)+'"/>';
  var hd='';for(i=0;i<=64;i++){var an=Math.PI+(-0.78+i/64*1.56),x=M.c[0]+M.r*Math.cos(an),y=M.c[1]+M.r*Math.sin(an);if(y<-10||y>570)continue;
    hd+='<circle class="lh" cx="'+f(x)+'" cy="'+f(y)+'" r="2.1"/>'}
  g+=hd+'</g>';
  /* PSMA on the membrane: a paired, dimeric protein outline at each docking point */
  MDC.T.forEach(function(t,k){var x=t.rec[0],y=t.rec[1],an=Math.atan2(y-M.c[1],x-M.c[0])*180/Math.PI+180;
    g+='<g class="ps" transform="translate('+f(x)+' '+f(y)+') rotate('+f(an)+')"><path class="sD" d="M2 -3C-6 -4 -14 -9 -16 -2C-18 4 -10 4 -4 2M2 3C-6 4 -14 9 -16 2"/><path class="sD" d="M3 0H9"/></g>'});
  /* the payload: a schematic of the taxane core (6-8-6 fused rings and the oxetane) */
  var cx=C[0]-92,cy=C[1],K=1.75;
  function poly(x,y,r,n,rot){var s='';for(var j=0;j<n;j++){var a=rot+j*2*Math.PI/n;s+=(j?'L':'M')+f(x+r*Math.cos(a))+' '+f(y+r*Math.sin(a))}return s+'Z'}
  g+='<g id="pay"><circle cx="'+cx+'" cy="'+cy+'" r="120" fill="url(#pyg)" class="pg"/>'+
     '<path class="py sD" d="'+poly(cx-30*K,cy-2*K,14*K,6,0)+poly(cx,cy,19*K,8,Math.PI/8)+poly(cx+31*K,cy+4*K,14*K,6,0)+poly(cx+44*K,cy+21*K,7*K,4,Math.PI/4)+'"/>'+
     '<path class="py2 sD" d="M'+f(cx-30*K)+' '+f(cy-16*K)+'L'+f(cx-36*K)+' '+f(cy-30*K)+'M'+f(cx+8*K)+' '+f(cy-18*K)+'L'+f(cx+12*K)+' '+f(cy-32*K)+'M'+f(cx-44*K)+' '+f(cy+5*K)+'L'+f(cx-58*K)+' '+f(cy+10*K)+'M'+f(cx-6*K)+' '+f(cy+19*K)+'L'+f(cx-10*K)+' '+f(cy+33*K)+'"/></g>';
  /* the linker from payload to the branching core */
  g+='<path class="lk sD" d="M'+f(cx+45*K)+' '+f(cy+4*K)+'L'+C[0]+' '+C[1]+'"/>';
  g+='<text class="t" x="16" y="546">MULTIVALENT DRUG CONJUGATE · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove"><g id="mdc">';
  g+='<circle class="hub" cx="'+C[0]+'" cy="'+C[1]+'" r="5"/>';
  MDC.G1.forEach(function(p,k){g+='<path class="ar a1" d="'+arm(C,p)+'"/>'});
  MDC.G2.forEach(function(p,k){g+='<path class="ar a2" d="'+arm(MDC.G1[k>>1],p)+'"/>'});
  MDC.T.forEach(function(t,k){g+='<path class="ar a3" d="'+arm(MDC.G2[k>>1],t.tip)+'"/>'});
  MDC.G1.forEach(function(p){g+='<g class="lg l1"><circle r="15" fill="url(#lgg)"/><circle class="lgc" r="5"/></g>'.replace('<g ','<g transform="translate('+f(p[0])+' '+f(p[1])+')" ')});
  MDC.G2.forEach(function(p){g+='<g class="lg l2"><circle r="15" fill="url(#lgg)"/><circle class="lgc" r="5"/></g>'.replace('<g ','<g transform="translate('+f(p[0])+' '+f(p[1])+')" ')});
  MDC.T.forEach(function(t){g+='<g class="lg l3"><circle r="15" fill="url(#lgg)"/><circle class="lgc" r="5"/></g>'.replace('<g ','<g transform="translate('+f(t.tip[0])+' '+f(t.tip[1])+')" ')});
  g+='</g>';
  /* free drug released inside the cell (step 3) */
  g+='<g clip-path="url(#cellc)">';
  var FD=[[660,150],[700,236],[676,330],[724,402],[752,186],[650,446],[748,300],[770,420]];
  FD.forEach(function(d,k){g+='<path class="fd" data-k="'+k+'" d="'+poly(d[0],d[1],5,6,0)+'"/>'});
  g+='</g>';
  g+='<text class="cnt a" id="mcnt" x="'+C[0]+'" y="'+(mob?520:528)+'" text-anchor="middle">×2</text>';
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="'+(mob?16:30)+'" y="'+(mob?148:150)+'">'+(mob?'TAXANE PAYLOAD':'PACLITAXEL / DOCETAXEL PAYLOAD')+'</text><path class="ldr" d="M'+(mob?80:90)+' '+(mob?164:182)+'L'+f(cx-30*K)+' '+f(cy-22*K)+'"/>'+
     (mob?'':'<text class="t" x="30" y="170">THE STANDARD-OF-CARE DRUG CLASS</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?16:30)+'" y="'+(mob?54:52)+'">'+(mob?'PSMA-TARGETING ARMS':'WATER-SOLUBLE, PSMA-TARGETING ARMS')+'</text><path class="ldr" d="M'+(mob?120:150)+' '+(mob?70:84)+'L'+f(MDC.T[0].tip[0]-14)+' '+f(MDC.T[0].tip[1]-6)+'"/>'+
     (mob?'':'<text class="t" x="30" y="72">MULTIVALENCY SET BY DESIGN: 2, 4 OR 8</text>')+'</g>';
  var r0=MDC.T[0].rec;
  g+='<g id="lb3"><text class="a" x="'+(mob?16:30)+'" y="'+(mob?54:52)+'">'+(mob?'PSMA ON THE CELL':'PSMA ON A PROSTATE CANCER CELL')+'</text><path class="ldr" d="M'+(mob?150:200)+' '+(mob?70:66)+'L'+f(r0[0]-22)+' '+f(r0[1]-8)+'"/>'+
     (mob?'':'<text class="a fdl" x="784" y="528" text-anchor="end">FREE DRUG</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .lh, #scBase .pg",svg),mv:$("#scMove",svg),mdc:$("#mdc",svg),
    a1:dl(".a1"),a2:dl(".a2"),a3:dl(".a3"),l1:$$(".l1",svg),l2:$$(".l2",svg),l3:$$(".l3",svg),hub:$(".hub",svg),fd:$$(".fd",svg),cnt:$("#mcnt",svg),
    b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg),ps:$$(".ps",svg)};
  var lastB=-1,lastC="";
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.12),g1=seg(p,.3,.4),g2=seg(p,.4,.5),g3=seg(p,.5,.6),s3=seg(p,.68,.84),rel=seg(p,.8,.96);
    op(E.hub,b*Math.max(s1,g1));
    draw(E.a1,g1);draw(E.a2,g2);draw(E.a3,g3);
    /* ligands sit at the outermost generation drawn so far: 2, then 4, then 8 */
    E.l1.forEach(function(el){op(el,b*seg(g1,.7,1)*(1-seg(g2,.6,1)*.85))});
    E.l2.forEach(function(el){op(el,b*seg(g2,.7,1)*(1-seg(g3,.6,1)*.85))});
    E.l3.forEach(function(el){op(el,b*seg(g3,.7,1))});
    var c=g3>.7?"×8":g2>.7?"×4":"×2";if(c!==lastC){lastC=c;E.cnt.textContent=c}
    op(E.cnt,b*seg(p,.3,.36)*(1-seg(p,.66,.72)));
    /* dock: the whole conjugate moves right until its 8 tips meet PSMA */
    E.mdc.setAttribute("transform","translate("+(MDC.DX*s3).toFixed(1)+" 0)");
    E.ps.forEach(function(el,k){el.classList.toggle("on",s3>.92)});
    E.fd.forEach(function(el,k){var q=seg(rel,k*.08,k*.08+.4);op(el,b*q);el.setAttribute("transform","translate("+(-26*(1-q)).toFixed(1)+" 0)")});
    op(E.b1,b*s1*(1-seg(p,.26,.32)));op(E.b2,b*seg(p,.36,.44)*(1-seg(p,.64,.7)));op(E.b3,b*seg(p,.72,.82));
  };
}
