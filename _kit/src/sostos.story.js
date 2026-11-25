/* the story scene (BL/BY/DB/DR): how CATOS-LU turns a tumor's gene expression into a treatment decision, in one drawing that
   stays on screen for all four steps (the whole figure is laid down faintly first, so no frame is empty; each step brings its
   part up to full strength):
   Step 1 (measure): the expression of the seven signature genes, as seven bars (qRT-PCR).
   Step 2 (model): a decision tree, drawn from its root, weighs the seven levels.
   Step 3 (stratify): its leaves resolve into the predicted-benefit and predicted-non-benefit groups.
   Step 4 (decide): in the predicted-benefit group, survival with adjuvant chemotherapy separates from survival without it.
   Source: Guo et al., "A Predictive 7-Gene Assay and Prognostic Protein Biomarkers for Non-small Cell Lung Cancer",
   EBioMedicine 2018 (qRT-PCR; decision trees; better disease-specific survival with adjuvant chemotherapy in the predicted
   benefit group). Schematic: bar heights and curves are illustrative, not data. Driven by the scrubbed story progress. */
var SXL={
 d:{vb:"10 22 750 372",lx:40,ly:58,la:"start",bx:56,bdx:25,bw:12,bb:318,bk:1,cA:[44,350],
    root:[398,128],mid:[[338,204],[458,204]],leaf:[[308,280],[368,280],[428,280],[488,280]],cB:[300,350],
    c:[560,738,116,318],cC:[560,350],k1:[248,232,282,232],k2:[506,232,546,232]},
 m:{vb:"0 0 400 446",lx:200,ly:30,la:"middle",bx:30,bdx:20,bw:10,bb:186,bk:.72,cA:[24,214],
    root:[300,72],mid:[[262,126],[338,126]],leaf:[[243,180],[281,180],[319,180],[357,180]],cB:[226,214],
    c:[52,384,262,404],cC:[52,434],k1:null,k2:null}};
var SXH=[112,74,150,96,134,60,122];
function sxCurve(x0,x1,y0,y1,drops){var d='M'+x0+' '+y0,x=x0,y=y0,n=drops.length,w=(x1-x0)/n;for(var i=0;i<n;i++){x=x0+w*(i+1);d+='H'+x.toFixed(1);if(i<n-1){y+=drops[i]*(y1-y0);d+='V'+y.toFixed(1)}}return [d,y]}
function sxFig(L,act){
  var g='',i,f=function(n){return (+n).toFixed(1)};
  /* seven expression bars */
  g+='<g'+(act?' id="sxA"':'')+'>';for(i=0;i<7;i++){var h=SXH[i]*L.bk,x=L.bx+i*L.bdx;g+='<rect class="bar" data-h="'+f(h)+'" data-b="'+L.bb+'" x="'+x+'" y="'+f(L.bb-h)+'" width="'+L.bw+'" height="'+f(h)+'"/>'}
  g+='<path class="ax sD" d="M'+(L.bx-8)+' '+L.bb+'H'+(L.bx+6*L.bdx+L.bw+8)+'"/></g>';
  /* the decision tree */
  var R=L.root,M=L.mid,F=L.leaf,tr='M'+R[0]+' '+R[1]+'L'+M[0][0]+' '+M[0][1]+'M'+R[0]+' '+R[1]+'L'+M[1][0]+' '+M[1][1]+
    'M'+M[0][0]+' '+M[0][1]+'L'+F[0][0]+' '+F[0][1]+'M'+M[0][0]+' '+M[0][1]+'L'+F[1][0]+' '+F[1][1]+'M'+M[1][0]+' '+M[1][1]+'L'+F[2][0]+' '+F[2][1]+'M'+M[1][0]+' '+M[1][1]+'L'+F[3][0]+' '+F[3][1];
  g+='<g'+(act?' id="sxB"':'')+'><path class="tr sD" d="'+tr+'"/>';
  [R,M[0],M[1]].forEach(function(c){g+='<circle class="nd" cx="'+c[0]+'" cy="'+c[1]+'" r="6"/>'});
  /* leaves: benefit (1st, 3rd) and non-benefit (2nd, 4th) */
  F.forEach(function(c,k){g+='<rect class="lf '+(k%2?'nb':'bf')+'" x="'+(c[0]-8)+'" y="'+(c[1]-8)+'" width="16" height="16"/>'});
  g+='</g>';
  /* survival in the predicted-benefit group */
  var C=L.c,a=sxCurve(C[0]+2,C[1],C[2]+6,C[3],[.05,.04,.06,.03,.05,.04,.03,0]),b=sxCurve(C[0]+2,C[1],C[2]+6,C[3],[.12,.10,.09,.08,.07,.06,.05,0]);
  g+='<g'+(act?' id="sxC"':'')+'><path class="ax sD" d="M'+C[0]+' '+C[2]+'V'+C[3]+'H'+C[1]+'"/><path class="cv sD" d="'+a[0]+'"/><path class="cv2 sD" d="'+b[0]+'"/>';
  if(act)g+='<text class="a" x="'+C[1]+'" y="'+f(a[1]+22)+'" text-anchor="end">CHEMO</text><text class="a g" x="'+C[1]+'" y="'+f(b[1]+22)+'" text-anchor="end">NO CHEMO</text>';
  g+='</g>';
  if(act&&L.k1){g+='<path class="lk sD" id="sxK1" d="M'+L.k1[0]+' '+L.k1[1]+'L'+L.k1[2]+' '+L.k1[3]+'"/><path class="lk sD" id="sxK2" d="M'+L.k2[0]+' '+L.k2[1]+'L'+L.k2[2]+' '+L.k2[3]+'"/>'}
  return g;
}
function scene(){
  var mob=MOBILE(),L=mob?SXL.m:SXL.d,g='',an=' text-anchor="'+L.la+'"';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+L.vb+'" aria-hidden="true">';
  g+='<g class="gh" id="sxG">'+sxFig(L,false)+'</g>';
  g+='<g class="act">'+sxFig(L,true)+'</g>';
  g+='<g id="sxCap"><text class="t" x="'+L.cA[0]+'" y="'+L.cA[1]+'">'+(mob?'7 GENES':'SEVEN-GENE EXPRESSION')+'</text><text class="t" x="'+L.cB[0]+'" y="'+L.cB[1]+'">'+(mob?'MODEL':'DECISION MODEL')+'</text><text class="t" x="'+L.cC[0]+'" y="'+L.cC[1]+'">'+(mob?'SURVIVAL · BENEFIT GROUP':'SURVIVAL · PREDICTED BENEFIT')+'</text></g>';
  g+='<g id="lb0"><text class="a"'+an+' x="'+L.lx+'" y="'+L.ly+'">'+(mob?'MEASURE SEVEN GENES':'MEASURE · THE EXPRESSION OF SEVEN GENES')+'</text></g>';
  g+='<g id="lb1"><text class="a"'+an+' x="'+L.lx+'" y="'+L.ly+'">'+(mob?'THE MODEL WEIGHS THEM':'MODEL · A DECISION TREE WEIGHS THEM TOGETHER')+'</text></g>';
  g+='<g id="lb2"><text class="a"'+an+' x="'+L.lx+'" y="'+L.ly+'">'+(mob?'BENEFIT OR NO BENEFIT':'STRATIFY · PREDICTED BENEFIT OR NO BENEFIT')+'</text></g>';
  g+='<g id="lb3"><text class="a"'+an+' x="'+L.lx+'" y="'+L.ly+'">'+(mob?'CHEMO WHERE IT HELPS':'DECIDE · CHEMOTHERAPY WHERE IT HELPS')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={gh:$("#sxG",svg),cap:$("#sxCap",svg),bars:$$("#sxA .bar",svg),aAx:dl("#sxA .sD"),tree:dl("#sxB .sD"),nd:$$("#sxB .nd",svg),lf:$$("#sxB .lf",svg),
    cAx:dl("#sxC .ax"),cv:dl("#sxC .cv,#sxC .cv2"),ct:$$("#sxC text",svg),k1:dl("#sxK1"),k2:dl("#sxK2"),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastA=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.gh,b);op(E.cap,b);draw(E.aAx,b)}
    /* step 1: the bars rise in turn as the story arrives, and stay lit while it is the active step */
    if(b!==lastA){lastA=b;E.bars.forEach(function(r,i){var v=Math.max(0,Math.min(1,(b*1.6-i*.09)/.7));v=v*v*(3-2*v);var h=+r.getAttribute("data-h"),y0=+r.getAttribute("data-b");
      r.setAttribute("height",(h*v).toFixed(1));r.setAttribute("y",(y0-h*v).toFixed(1))})}
    E.bars.forEach(function(r){r.classList.toggle("on",p<.27)});
    /* step 2: the tree draws from its root */
    draw(E.tree,seg(p,.27,.44));E.nd.forEach(function(n,i){op(n,seg(p,.28+i*.04,.34+i*.04))});draw(E.k1,seg(p,.25,.32));
    /* step 3: the leaves resolve into the two groups */
    var t3=seg(p,.52,.62);E.lf.forEach(function(l,i){op(l,seg(p,.42+i*.02,.48+i*.02));l.classList.toggle("on",t3>.5)});
    /* step 4: the survival curves */
    draw(E.k2,seg(p,.74,.8));draw(E.cAx,seg(p,.76,.84));draw(E.cv,seg(p,.8,.93));E.ct.forEach(function(t){op(t,seg(p,.9,.96))});
    op(E.l0,b*(1-seg(p,.2,.26)));op(E.l1,b*seg(p,.27,.33)*(1-seg(p,.45,.51)));op(E.l2,b*seg(p,.52,.58)*(1-seg(p,.7,.76)));op(E.l3,b*seg(p,.77,.83));
  };
}
