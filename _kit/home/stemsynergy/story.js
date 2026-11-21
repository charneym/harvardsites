/* the story scene (BL/BY/DB): ONE engraved cell section kept on screen for all four steps, drawn from stemsynergy.com (Science,
   Wnt Inhibitor Program) and the abstract of NCI SBIR 1R43CA310499-01A1. Left: the membrane with Frizzled receptors; centre: the
   destruction complex (CK1α, GSK3, APC, AXIN) above a proteasome; right: the nucleus with DNA and TCF. Step 1 beta-catenin is made
   and destroyed. Step 2 APC is mutated, beta-catenin builds up. Step 3 it enters the nucleus and, with BCL9 and TCF, switches on
   WNT target genes. Step 4 CK1α activators (SST-1034) restart destruction and SSTB-178 breaks the beta-catenin/BCL9 contact.
   Schematic; not to scale. Driven by the scrubbed story progress. */
var SG={C:[300,200],P:[356,352],D:[352,240],N:[612,300],NR:[148,196],DY:400};
SG.S=[0,1,2,3,4,5].map(function(i){return [150+(i%2)*26,132+i*58]});
SG.CR=[[196,330],[432,206],[424,300],[226,446],[424,446],[178,214]];
SG.NB=[[548,368],[616,368],[684,368],[588,226],[662,206],[700,276]];
function sgCat(){/* beta-catenin: an armadillo crescent of six repeats */
  var g='',i;for(i=0;i<6;i++){var a=(-70+i*28)*Math.PI/180;g+='<ellipse class="rp" cx="'+(18*Math.cos(a)).toFixed(1)+'" cy="'+(18*Math.sin(a)).toFixed(1)+'" rx="5.4" ry="8.2" transform="rotate('+(-70+i*28)+' '+(18*Math.cos(a)).toFixed(1)+' '+(18*Math.sin(a)).toFixed(1)+')"/>'}return g}
function sgHex(r){var d='',i;for(i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}return '<path class="hx" d="'+d+'Z"/>'}
function sgDNA(){var t='',b='',r='',x;for(x=470;x<=756;x+=4){var y1=SG.DY+11*Math.sin((x-470)/18),y2=SG.DY-11*Math.sin((x-470)/18);t+=(x===470?'M':'L')+x+' '+y1.toFixed(1);b+=(x===470?'M':'L')+x+' '+y2.toFixed(1)}
  for(x=474;x<=752;x+=14){var a=11*Math.sin((x-470)/18);r+='M'+x+' '+(SG.DY-a).toFixed(1)+'V'+(SG.DY+a).toFixed(1)}
  return '<path class="dn sD" d="'+t+'"/><path class="dn sD" d="'+b+'"/><path class="dr" d="'+r+'"/>'}
function scene(){
  var mob=MOBILE(),g='',i,L=function(x,y,full,short,cls,anc){return '<text class="'+(cls||'')+'" x="'+x+'" y="'+y+'"'+(anc?' text-anchor="'+anc+'"':'')+'>'+(mob?short:full)+'</text>'};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="nug" cx=".5" cy=".5" r=".5"><stop offset=".6" stop-color="#a9c7d1" stop-opacity="0"/><stop offset=".9" stop-color="#a9c7d1" stop-opacity=".07"/><stop offset="1" stop-color="#a9c7d1" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="rdg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ef3e52" stop-opacity=".45"/><stop offset="1" stop-color="#ef3e52" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="mfd" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="560"><stop offset="0" stop-color="#f1f3f4" stop-opacity="0"/><stop offset=".2" stop-color="#f1f3f4"/><stop offset=".8" stop-color="#f1f3f4"/><stop offset="1" stop-color="#f1f3f4" stop-opacity="0"/></linearGradient></defs>';
  g+='<g id="sgBase">';
  /* membrane with three Frizzled receptors */
  g+='<path class="mb sD" d="M92 14Q40 280 92 546"/><path class="mb2 sD" d="M104 14Q52 280 104 546"/>';
  [150,280,410].forEach(function(y){var x=y===280?66:74;g+='<path class="fz sD" d="M'+(x-18)+' '+(y-10)+'C'+(x-6)+' '+(y-16)+' '+(x-6)+' '+(y+16)+' '+(x+6)+' '+(y+10)+'S'+(x+18)+' '+(y-16)+' '+(x+30)+' '+(y-10)+'"/>'});
  /* nucleus: double envelope, pores, faint nucleoplasm contour */
  g+='<ellipse cx="'+SG.N[0]+'" cy="'+SG.N[1]+'" rx="'+(SG.NR[0]+40)+'" ry="'+(SG.NR[1]+40)+'" fill="url(#nug)"/>';
  g+='<ellipse class="ne sD" cx="'+SG.N[0]+'" cy="'+SG.N[1]+'" rx="'+SG.NR[0]+'" ry="'+SG.NR[1]+'"/><ellipse class="ne2 sD" cx="'+SG.N[0]+'" cy="'+SG.N[1]+'" rx="'+(SG.NR[0]-9)+'" ry="'+(SG.NR[1]-9)+'"/>';
  for(i=0;i<10;i++){var a=i/10*Math.PI*2+.2;g+='<circle class="np" cx="'+(SG.N[0]+(SG.NR[0]-4.5)*Math.cos(a)).toFixed(1)+'" cy="'+(SG.N[1]+(SG.NR[1]-4.5)*Math.sin(a)).toFixed(1)+'" r="3.4"/>'}
  g+='<ellipse class="nc" cx="'+(SG.N[0]+30)+'" cy="'+(SG.N[1]-70)+'" rx="34" ry="24"/>';
  g+=sgDNA();
  /* TCF on the DNA */
  SG.NB.slice(0,3).forEach(function(q){g+='<path class="tcf sD" d="M'+(q[0]-15)+' '+(SG.DY-17)+'h30v-12h-30z"/>'});
  /* destruction complex and proteasome */
  var C=SG.C,P=SG.P;
  g+=L(SG.N[0],86,'NUCLEUS','NUCLEUS','','middle')+L(SG.N[0],446,'DNA · WNT TARGET GENES','DNA','t2','middle');
  g+='</g>';
  /* moving parts */
  g+='<g id="sgMove">';
  g+='<g id="sgMut"><circle class="mu" cx="'+(C[0]+8)+'" cy="'+(C[1]+50)+'" r="31"/><path class="mux" d="M'+(C[0]+44)+' '+(C[1]+66)+'l14 14M'+(C[0]+58)+' '+(C[1]+66)+'l-14 14"/></g>';
  g+='<circle id="sgCKg" cx="'+(C[0]-48)+'" cy="'+(C[1]-30)+'" r="46" fill="url(#rdg)"/><g id="sgD1" transform="translate('+(C[0]-84)+' '+(C[1]-58)+')">'+sgHex(9)+'</g>';
  /* transcripts leaving the active genes */
  for(i=0;i<3;i++){var q=SG.NB[i],d='';for(var k=0;k<=24;k++){d+=(k?'L':'M')+(q[0]+6*Math.sin(k*.9)).toFixed(1)+' '+(SG.DY-30-k*4.2).toFixed(1)}g+='<path class="mr" id="sgM'+i+'" d="'+d+'"/>'}
  for(i=0;i<6;i++){g+='<g class="bc" id="sgB'+i+'">'+sgCat()+(i<3?'<path class="b9" d="M16 -2C21 -8 26 -2 31 -8S39 -8 43 -13"/>':'')+'</g>'}
  for(i=0;i<3;i++){g+='<g class="d2" id="sgD2'+i+'">'+sgHex(7.5)+'</g>'}
  g+='</g>';
  g+='<g id="sgTop">';
g+='<g id="sgCx"><circle class="cx sD" cx="'+C[0]+'" cy="'+C[1]+'" r="34"/><circle class="cx sD" id="sgCK" cx="'+(C[0]-48)+'" cy="'+(C[1]-30)+'" r="27"/><circle class="cx sD" cx="'+(C[0]+50)+'" cy="'+(C[1]-22)+'" r="25"/><circle class="cx sD" id="sgAPC" cx="'+(C[0]+8)+'" cy="'+(C[1]+50)+'" r="27"/>'+
     '<text class="in" x="'+C[0]+'" y="'+(C[1]+4)+'" text-anchor="middle">AXIN</text><text class="in" x="'+(C[0]-48)+'" y="'+(C[1]-26)+'" text-anchor="middle">CK1α</text><text class="in" x="'+(C[0]+50)+'" y="'+(C[1]-18)+'" text-anchor="middle">GSK3</text><text class="in" id="sgAPCt" x="'+(C[0]+8)+'" y="'+(C[1]+54)+'" text-anchor="middle">APC</text></g>';
g+='<g id="sgPr">';for(i=0;i<4;i++)g+='<ellipse class="pr sD" cx="'+P[0]+'" cy="'+(P[1]-18+i*12)+'" rx="22" ry="7"/>';g+='<path class="pr2 sD" d="M'+(P[0]-22)+' '+(P[1]-18)+'V'+(P[1]+18)+'M'+(P[0]+22)+' '+(P[1]-18)+'V'+(P[1]+18)+'"/></g>';
  g+=L(C[0],126,'DESTRUCTION COMPLEX','COMPLEX','','middle')+L(P[0],398,'PROTEASOME','','','middle');
  g+='</g>';
  /* step captions */
  var cap=mob?['β-CATENIN DESTROYED','APC MUTATED','WNT GENES ON','TWO NODES CUT']:['NO WNT SIGNAL · β-CATENIN IS DESTROYED','APC MUTATED · β-CATENIN BUILDS UP','β-CATENIN + BCL9 + TCF · WNT TARGET GENES ON','CK1α ACTIVATED · β-CATENIN–BCL9 CONTACT BROKEN'];
  cap.forEach(function(t,k){g+='<text class="cap" id="sgC'+k+'" x="400" y="'+(mob?548:542)+'" text-anchor="middle">'+t+'</text>'});
  g+='<g id="sgL1">'+L(150,mob?62:104,'β-CATENIN','β-CATENIN','a','start')+'</g>';
  g+='<g id="sgL4">'+L(C[0]-62,mob?52:76,'SST-1034 · CK1α ACTIVATOR','SST-1034','a','middle')+L(SG.N[0]+4,mob?304:316,'SSTB-178','SSTB-178','a','middle')+'</g>';
  g+='<g id="sgL3">'+L(SG.N[0]+4,316,'BCL9','BCL9','a','middle')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#sgBase .sD, #sgTop .sD"),fade:$$("#sgBase text, #sgTop text, #sgBase .np, #sgBase .nc, #sgBase .dr",svg),mv:$("#sgMove",svg),mut:$("#sgMut",svg),ckg:$("#sgCKg",svg),d1:$("#sgD1",svg),
    B:[0,1,2,3,4,5].map(function(i){return $("#sgB"+i,svg)}),D2:[0,1,2].map(function(i){return $("#sgD2"+i,svg)}),M:[0,1,2].map(function(i){return $("#sgM"+i,svg)}),
    C:[0,1,2,3].map(function(i){return $("#sgC"+i,svg)}),l1:$("#sgL1",svg),l3:$("#sgL3",svg),l4:$("#sgL4",svg),apct:$("#sgAPCt",svg)};
  var B9=E.B.slice(0,3).map(function(el){return $(".b9",el)}),ML=E.M.map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return L}),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function lp(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.12),s2=seg(p,.26,.4),s3=seg(p,.5,.64),s4=seg(p,.75,.89);
    /* APC breaks in step 2 and stays broken */
    op(E.mut,b*s2);E.apct.style.fill=s2>.5?"#ef3e52":"";
    /* CK1α lights up with the activator in step 4 */
    op(E.ckg,b*s4*(.75+.25*Math.sin(p*40)));op(E.d1,b*s4);
    E.B.forEach(function(el,i){
      var u=((p*4.2)+i/6)%1,fl,fo,fs=1;
      if(u<.5){fl=lp(SG.S[i],[SG.D[0]+((i%3)-1)*6,SG.D[1]+((i%2)?5:-5)],sm(u/.5));fo=Math.min(1,u*8)}
      else if(u<.8){fl=lp(SG.D,[SG.P[0],SG.P[1]-30],sm((u-.5)/.3));fo=1;fs=1-.25*sm((u-.5)/.3)}
      else{fl=[SG.P[0]+(i-2.5)*4,SG.P[1]-30+20*sm((u-.8)/.2)];fo=1-sm((u-.8)/.2);fs=.75-.4*sm((u-.8)/.2)}
      var bound=i<3,a=bound?s2:s2*(1-s4),rest=lp(SG.CR[i],SG.NB[i],s3),x=fl[0]+(rest[0]-fl[0])*a,y=fl[1]+(rest[1]-fl[1])*a;
      var o=(fo*(1-a)+a)*(bound?1-.45*s4:1),sc=fs*(1-a)+a;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale("+(sc*1.3).toFixed(3)+")");op(el,b*o*Math.max(s1,a));
    });
    /* BCL9 joins the bound beta-catenin in step 3 and is pushed off by SSTB-178 in step 4 */
    B9.forEach(function(el,i){op(el,b*s3);el.setAttribute("transform","translate("+(10*s4).toFixed(1)+" "+(-12*s4).toFixed(1)+")")});
    E.D2.forEach(function(el,i){var q=SG.NB[i];el.setAttribute("transform","translate("+(q[0]+18).toFixed(1)+" "+(q[1]-14).toFixed(1)+")");op(el,b*seg(p,.8+i*.02,.86+i*.02))});
    /* transcripts flow from the active genes in step 3, stop in step 4 */
    E.M.forEach(function(el,i){var on=s3*(1-s4);el.style.strokeDashoffset=(ML[i]*(1-seg(p,.54+i*.02,.66+i*.02))).toFixed(1);op(el,b*on)});
    var W=[[0,0,.22,.25],[.25,.28,.47,.5],[.5,.53,.72,.75],[.75,.78,2,2]];
    E.C.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);op(el,b*a*(1-o))});
    op(E.l1,b*(1-s2));op(E.l3,b*s3*(1-seg(p,.71,.75)));op(E.l4,b*s4);
  };
}
