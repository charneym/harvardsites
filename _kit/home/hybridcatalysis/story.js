/* The story scene (DB/BL/BY): Hybrid Catalysis's own account of its metal silsesquioxanes (hybridcatalysis.com, "Conventional
   and innovative catalysts" and its POSS diagram: a thermally and chemically robust organic/inorganic framework; robust metal
   sites; R groups as modifiers/substrate receptors, functionalities for catalyst immobilisation, and solubilisation through
   unreactive groups), drawn in fine line as ONE silsesquioxane cage: silicon at the eight corners, oxygen on the twelve edges,
   an R group on each corner.
   Frame 0 is complete: the whole cage.
   Step 1 (framework): the Si–O framework lights; silicon and oxygen are named.
   Step 2 (metal site): one silicon corner gives way to the metal, in the logo's blue.
   Step 3 (tailored): the R groups light in the accent; three are named by their role.
   Everything is driven by the scrubbed progress. No dash-drawn path uses non-scaling-stroke (DR.4). */
var SCX=380,SCY=272,SCS=118;
function f1(v){return v.toFixed(1)}
function pj(p){var ya=-.62,pa=.36,x=p[0],y=p[1],z=p[2];
  var x1=x*Math.cos(ya)+z*Math.sin(ya),z1=-x*Math.sin(ya)+z*Math.cos(ya);
  var y1=y*Math.cos(pa)-z1*Math.sin(pa),z2=y*Math.sin(pa)+z1*Math.cos(pa);
  return [SCX+x1*SCS,SCY-y1*SCS,z2]}
var CUBE=(function(){var C=[],E=[],i,j,k;
  for(i=0;i<8;i++)C.push([i&1?1:-1,i&2?1:-1,i&4?1:-1]);
  for(i=0;i<8;i++)for(j=i+1;j<8;j++){var d=0;for(k=0;k<3;k++)if(C[i][k]!==C[j][k])d++;if(d===1)E.push([i,j])}
  return {C:C,E:E}})();
var MI=3;
function storyScene(o){
  var g='',mob=o.mob;
  var P=CUBE.C.map(pj);
  var zs=P.map(function(p){return p[2]}),zmin=Math.min.apply(0,zs),zmax=Math.max.apply(0,zs);
  function back(i){return (P[i][2]-zmin)/(zmax-zmin)>.62}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'80 14 600 548':'20 14 720 548')+'" aria-hidden="true">';
  var RP=[];
  g+='<g id="scR">';
  CUBE.C.forEach(function(c,i){
    var a=pj(c.map(function(v){return v*1.08})),b=pj(c.map(function(v){return v*1.46}));RP.push(b);
    g+='<g class="rg'+(back(i)?' bk':'')+(i===MI?' rm':'')+'"><path class="sRb sD" d="M'+f1(a[0])+' '+f1(a[1])+'L'+f1(b[0])+' '+f1(b[1])+'"/><circle class="sRr" cx="'+f1(b[0])+'" cy="'+f1(b[1])+'" r="10"/></g>';
  });
  g+='</g>';
  g+='<g id="scE">';
  CUBE.E.forEach(function(e){var a=P[e[0]],b=P[e[1]],bk=back(e[0])||back(e[1]);
    g+='<path class="sE sD'+(bk?' bk':'')+'" d="M'+f1(a[0])+' '+f1(a[1])+'L'+f1(b[0])+' '+f1(b[1])+'"/>'});
  g+='</g>';
  g+='<g id="scO">';
  CUBE.E.forEach(function(e){var a=P[e[0]],b=P[e[1]],bk=back(e[0])||back(e[1]);
    g+='<circle class="sO'+(bk?' bk':'')+'" cx="'+f1((a[0]+b[0])/2)+'" cy="'+f1((a[1]+b[1])/2)+'" r="6"/>'});
  g+='</g>';
  g+='<g id="scSi">';
  P.forEach(function(p,i){g+='<circle class="sSi'+(back(i)?' bk':'')+(i===MI?' sm':'')+'" cx="'+f1(p[0])+'" cy="'+f1(p[1])+'" r="9"/>'});
  g+='</g>';
  var M=P[MI];
  g+='<g id="scM" style="transform-origin:'+f1(M[0])+'px '+f1(M[1])+'px"><circle class="sMg" cx="'+f1(M[0])+'" cy="'+f1(M[1])+'" r="30"/><circle class="sM" cx="'+f1(M[0])+'" cy="'+f1(M[1])+'" r="15"/></g>';
  if(!mob){
    var si=P[LBL.si],oa=P[LBL.o[0]],ob=P[LBL.o[1]],ox=[(oa[0]+ob[0])/2,(oa[1]+ob[1])/2];
    g+=lab("lSi",si,LBL.siD,"SILICON","");
    g+=lab("lO",ox,LBL.oD,"OXYGEN","");
    g+=lab("lM",M,LBL.mD,"METAL SITE"," o2",22);
    g+=lab("lR1",RP[LBL.r1],LBL.r1D,"SUBSTRATE RECEPTOR"," o",14);
    g+=lab("lR2",RP[LBL.r2],LBL.r2D,"IMMOBILISATION"," o",16);
    g+=lab("lR3",RP[LBL.r3],LBL.r3D,"SOLUBILITY"," o",16);
  }else{g+='<g id="lSi"></g><g id="lO"></g><g id="lM"></g><g id="lR1"></g><g id="lR2"></g><g id="lR3"></g>'}
  var ly=mob?548:550,lx=mob?SCX:34,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'A SILICON–OXYGEN CAGE':'A ROBUST SILICON–OXYGEN FRAMEWORK')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'A METAL AT ONE CORNER':'A WELL-DEFINED METAL SITE AT ONE CORNER')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'R GROUPS, TAILORED':'R GROUPS TAILORED TO THE APPLICATION')+'</text></g>';
  return g+'</svg>';
}
/* label layout: corner index, leader direction [dx,dy] (unit-ish) and length; text sits past the leader's end */
var LBL={si:6,siD:[-1,.25,48],o:[6,4],oD:[-1,0,62],mD:[1,.3,56],r1:6,r1D:[0,-1,28,"start"],r2:1,r2D:[0,1,24,"middle"],r3:4,r3D:[0,1,24,"middle"]};
function lab(id,p,d,txt,cls,r0){
  r0=r0||14;var n=Math.sqrt(d[0]*d[0]+d[1]*d[1]),ux=d[0]/n,uy=d[1]/n;
  var x0=p[0]+ux*r0,y0=p[1]+uy*r0,x1=p[0]+ux*(r0+d[2]),y1=p[1]+uy*(r0+d[2]);
  var an=d[3]||(ux<0?"end":"start"),tx,ty;
  if(an==="middle"){tx=x1;ty=y1+(uy>0?17:-9)}
  else if(an==="start"&&Math.abs(ux)<.2){tx=x1+8;ty=y1+4}
  else{tx=x1+(ux<0?-8:8);ty=y1+4}
  return '<g id="'+id+'" class="lbl"><path class="ld" d="M'+f1(x0)+' '+f1(y0)+'L'+f1(x1)+' '+f1(y1)+'"/><text class="t'+cls+'" x="'+f1(tx)+'" y="'+f1(ty)+'"'+(an!=="start"?' text-anchor="'+an+'"':'')+'>'+txt+'</text></g>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),o:$("#scO",svg),si:$("#scSi",svg),sm:$(".sSi.sm",svg),m:$("#scM",svg),rm:$(".rg.rm",svg),
    lSi:$("#lSi",svg),lO:$("#lO",svg),lM:$("#lM",svg),lR1:$("#lR1",svg),lR2:$("#lR2",svg),lR3:$("#lR3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.o,b);op(E.si,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    svg.classList.toggle("fw",s1>.3&&s2<.5);
    var mm=sm((s2-.1)/.6);
    op(E.sm,1-mm);op(E.rm,b*(1-mm));op(E.m,b*mm);
    if(E.m)E.m.style.transform="scale("+(.6+.4*mm).toFixed(3)+")";
    svg.classList.toggle("rl",s3>.3);
    op(E.lSi,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));op(E.lO,b*seg(p,.12,.2)*(1-seg(p,.3,.36)));
    op(E.lM,b*seg(p,.48,.56)*(1-seg(p,.64,.7)));
    op(E.lR1,b*seg(p,.76,.84));op(E.lR2,b*seg(p,.78,.86));op(E.lR3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
