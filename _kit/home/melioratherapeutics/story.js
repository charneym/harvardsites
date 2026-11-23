/* the story scene (BL/BY/DB): ONE molecule, drawn once and kept on screen for all three steps (AnchorOmics, as Meliora describes it).
   Step 1 (molecule): the small molecule as a fine-line skeletal formula, with its reported target as a tag.
   Step 2 (fingerprint): the molecule is profiled; its molecular fingerprint, a strip of measured readouts, draws out beside it.
   Step 3 (atlas): the strip is read against the atlas of fingerprints from tens of thousands of compounds; the engine matches it,
   the reported target is struck through and the true target mechanism resolves.
   Source: Business Wire, 29 Sept 2022 and 12 Feb 2024. Schematic. Driven by the scrubbed story progress. */
var SX={};
function sxRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k;
  var VW=720,VH=mob?610:470;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+VW+' '+VH+'" aria-hidden="true">';
  var MX=mob?360:178,MY=mob?216:262,S=mob?34:36;
  function hexP(cx,cy,r,a0){var p=[];for(k=0;k<6;k++){var a=(a0+60*k)*Math.PI/180;p.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return p}
  function poly(p,cls){return '<path class="'+cls+'" d="M'+p.map(function(q){return f(q[0])+' '+f(q[1])}).join('L')+'Z"/>'}
  function ln(a,b,cls){return '<path class="'+cls+'" d="M'+f(a[0])+' '+f(a[1])+'L'+f(b[0])+' '+f(b[1])+'"/>'}
  /* core pyrimidine (vertex up), a pentagon fused on its lower-right edge, an anilino arm up-right, a piperazine down-left */
  var h1=hexP(MX,MY,S,-90);
  var e0=h1[1],e1=h1[2],p5=[e1,e0],x2=e0[0],y2=e0[1],a2=Math.atan2(e0[1]-e1[1],e0[0]-e1[0]);
  for(k=0;k<3;k++){a2+=72*Math.PI/180;x2+=S*Math.cos(a2);y2+=S*Math.sin(a2);p5.push([x2,y2])}
  var cIn=0;p5.forEach(function(q){if(Math.hypot(q[0]-MX,q[1]-MY)<S*.9)cIn++});
  if(cIn>2){p5=[e0,e1];x2=e1[0];y2=e1[1];a2=Math.atan2(e1[1]-e0[1],e1[0]-e0[0]);for(k=0;k<3;k++){a2+=72*Math.PI/180;x2+=S*Math.cos(a2);y2+=S*Math.sin(a2);p5.push([x2,y2])}}
  var top=h1[0],nh=[top[0],top[1]-S],c1=[nh[0]+S*Math.cos(-Math.PI/6),nh[1]+S*Math.sin(-Math.PI/6)];
  var phc=[c1[0]+S*Math.cos(-Math.PI/6),c1[1]+S*Math.sin(-Math.PI/6)],h2=hexP(phc[0],phc[1],S,150);
  var bl=h1[4],n1=[bl[0]+S*Math.cos(Math.PI*5/6),bl[1]+S*Math.sin(Math.PI*5/6)],pzc=[n1[0]+S*Math.cos(Math.PI*5/6),n1[1]+S*Math.sin(Math.PI*5/6)],h3=hexP(pzc[0],pzc[1],S,-30);
  g+='<g id="mol">'+poly(h1,"bd sD")+poly(p5,"bd sD")+poly(h2,"bd sD")+poly(h3,"bd sD")+ln(top,nh,"bd sD")+ln(nh,c1,"bd sD")+ln(bl,n1,"bd sD");
  function inner(p,cx,cy,a,b){var u=[p[a][0]+(cx-p[a][0])*.22,p[a][1]+(cy-p[a][1])*.22],v=[p[b][0]+(cx-p[b][0])*.22,p[b][1]+(cy-p[b][1])*.22];return ln(u,v,"bd sD")}
  g+=inner(h1,MX,MY,0,1)+inner(h1,MX,MY,2,3)+inner(h2,phc[0],phc[1],1,2)+inner(h2,phc[0],phc[1],3,4)+inner(h2,phc[0],phc[1],5,0);
  /* heteroatoms as coral dots, the hue of the hero model's nitrogens */
  [h1[3],h1[5],p5[2],p5[3],nh,n1,h3[3]].forEach(function(q){g+='<circle class="at" cx="'+f(q[0])+'" cy="'+f(q[1])+'" r="'+(mob?6:4.6)+'"/>'});
  g+='</g>';
  var all=h1.concat(p5,h2,h3),mB=Math.max.apply(null,all.map(function(q){return q[1]})),mL=Math.min.apply(null,all.map(function(q){return q[0]})),mR=Math.max.apply(null,all.map(function(q){return q[0]}));
  /* the reported target: a tag under the molecule that step 3 strikes through */
  var RX=mob?360:(mL+mR)/2,RY=mB+(mob?44:50);
  g+='<g id="rep"><text class="t" x="'+f(RX)+'" y="'+f(RY)+'" text-anchor="middle">REPORTED TARGET</text></g>';
  /* step 1: the molecule alone, large and centred in the frame; it settles to its place as the fingerprint draws (DB) */
  var mT=Math.min.apply(null,all.map(function(q){return q[1]})),cx0=(mL+mR)/2,cy0=(mT+mB)/2,k1=Math.min(1.5,(mob?400:330)/(mB-mT),(mob?560:520)/(mR-mL));
  SX.m=[cx0,cy0,k1,360,mob?310:262];
  /* fingerprint of the molecule: N readouts as bars (desktop: a vertical strip right of the molecule; phone: a row below it) */
  var N=mob?24:28,FX=mob?60:mR+56,FY=mob?RY+28:92,FW=mob?600:60,FH=mob?50:330,bars='';
  function val(j){return .18+.82*sxRand(j*7+3)}
  for(i=0;i<N;i++){var v=val(i);bars+=mob?'<rect class="fb" x="'+f(FX+i*FW/N+2)+'" y="'+f(FY+FH*(1-v))+'" width="'+f(FW/N-4)+'" height="'+f(FH*v)+'"/>':'<rect class="fb" x="'+f(FX)+'" y="'+f(FY+i*FH/N+1)+'" width="'+f(FW*v)+'" height="'+f(FH/N-3)+'"/>'}
  g+='<g id="fp"><path class="fax sD" d="'+(mob?'M'+FX+' '+f(FY+FH+.5)+'H'+(FX+FW):'M'+f(FX-.5)+' '+FY+'V'+(FY+FH))+'"/>'+bars+'</g>';
  /* the atlas: other compounds' fingerprints, faint; one matches */
  var atl='',AC=mob?3:4,MAT=mob?1:2,AX=mob?60:FX+FW+44,AW=mob?600:50,AG=mob?0:14,AY=mob?FY+FH+24:FY,AH=mob?28:FH,RH=mob?36:0;
  for(var c=0;c<AC;c++)for(i=0;i<N;i++){var s=c===MAT?Math.min(1,val(i)*(.97+.06*sxRand(i+c*31))):.12+.88*sxRand(i*13+c*101+5),cl='ab'+(c===MAT?' am':'');
    atl+=mob?'<rect class="'+cl+'" x="'+f(AX+i*AW/N+2)+'" y="'+f(AY+c*RH+AH*(1-s))+'" width="'+f(AW/N-4)+'" height="'+f(AH*s)+'"/>':'<rect class="'+cl+'" x="'+f(AX+c*(AW+AG))+'" y="'+f(AY+i*AH/N+1)+'" width="'+f(AW*s)+'" height="'+f(AH/N-3)+'"/>'}
  g+='<g id="atl">'+atl;
  var mx0=mob?AX-8:AX+MAT*(AW+AG)-7,my0=mob?AY+MAT*RH-6:AY-9,mw=mob?AW+16:AW+14,mh=mob?AH+12:AH+16;
  g+='<path class="mf" id="mf" d="M'+f(mx0)+' '+f(my0)+'h'+f(mw)+'v'+f(mh)+'h'+f(-mw)+'Z"/>';
  var TX=mob?360:mx0+mw/2,TY=mob?AY+AC*RH+34:my0+mh+36;
  g+='<g id="tru"><text class="a tr" x="'+f(TX)+'" y="'+f(TY)+'" text-anchor="middle">TRUE TARGET</text>'+(mob?'':'<text class="t" x="'+f(TX)+'" y="'+f(TY+22)+'" text-anchor="middle">MECHANISM OF ACTION</text>')+'</g>';
  g+='</g>';
  /* labels, one per step, in the clear band above the art */
  var lx=mob?360:40,ly=mob?46:44,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a l0" x="'+lx+'" y="'+ly+'"'+an+'>A SMALL MOLECULE</text></g>';
  g+='<g id="lb1"><text class="a l1" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'ITS FINGERPRINT':'PROFILED · A MOLECULAR FINGERPRINT')+'</text></g>';
  g+='<g id="lb2"><text class="a l2" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'MATCHED IN THE ATLAS':'READ AGAINST THE ATLAS · MATCHED')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={mol:dl("#mol .sD"),mg:$("#mol",svg),at:$$("#mol .at",svg),rep:$("#rep",svg),fax:dl("#fp .sD"),fb:$$("#fp .fb",svg),atl:$("#atl",svg),ab:$$("#atl .ab",svg),
    mf:dl("#mf"),tru:$("#tru",svg),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.mol,b);E.at.forEach(function(a){op(a,b)})}
    var s2=seg(p,.36,.62),s3=seg(p,.7,.92);
    var mv=seg(p,.3,.46),M=SX.m,k=M[2]+(1-M[2])*mv,tx=(M[3]-M[0]*M[2])*(1-mv),ty=(M[4]-M[1]*M[2])*(1-mv);
    E.mg.setAttribute("transform","translate("+tx.toFixed(1)+" "+ty.toFixed(1)+") scale("+k.toFixed(3)+")");
    /* the reported target appears once the molecule settles, and dims as the true target resolves */
    op(E.rep,seg(p,.42,.5)*(1-.7*seg(s3,.6,.9)));
    /* step 2: the fingerprint draws out, readout by readout */
    draw(E.fax,Math.min(1,s2*3));var n=E.fb.length;E.fb.forEach(function(r,i){op(r,seg(s2,i/n*.8,i/n*.8+.2))});
    /* step 3: the atlas fades up; the match frame draws and the true target resolves */
    op(E.atl,Math.min(1,s3*5));var m=E.ab.length;E.ab.forEach(function(r,i){op(r,seg(s3,.05+(i/m)*.35,.2+(i/m)*.35))});
    draw(E.mf,seg(s3,.5,.75));op(E.tru,seg(s3,.7,.9));
    op(E.l0,b*(1-seg(p,.3,.38)));op(E.l1,seg(p,.38,.44)*(1-seg(p,.64,.7)));op(E.l2,seg(p,.72,.8));
  };
}
