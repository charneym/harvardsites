/* The story scene (BL/BY/DB): how a four-side-seal sachet comes about on a GKS Siegelrandbeutelmaschine, using what
   gk-smb.de names ("Servo-angetriebene Siegelung und Folienabzug", "vertikale, intermittierende Funktionsweise", "Bahnen: 1...16",
   "kombinierbar mit Dosierpumpen", thermal sealing up to 1.600 ppm). ONE front view of a multi-lane film web kept on screen:
   Step 1 (Folie): the film runs down from the roll; the web draws in.
   Step 2 (Siegeln): the sealing jaws close the longitudinal seams; the web becomes four lanes, each with a bottom seam.
   Step 3 (Dosieren): a fill tube enters each lane and the product rises in the pocket.
   Step 4 (Trennen): the cross-seal jaw closes the top, the knife cuts, and four finished sachets drop free.
   Sizes are illustrative. */
var SCW=760,SCH=520,SN=4,SY0=64,SYB=446,SYE=460,SYT=300,SYK=308;
function gkScene(o){
  var g='',mob=o.mob,i,SLW=mob?120:80,X0=mob?140:100,WW=SN*SLW,XR=X0+WW,LX=mob?352:488;
  g+='<svg class="gksc'+(mob?" mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true" data-x0="'+X0+'" data-lw="'+SLW+'">';
  g+='<defs><pattern id="gkK" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#3b3d58"/><path d="M0 0V6M0 0H6" stroke="rgba(245,244,241,.42)" stroke-width="1"/></pattern>'+
     '<linearGradient id="gkF" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5d6074"/><stop offset=".35" stop-color="#b9bcc8"/><stop offset=".55" stop-color="#8b8ea0"/><stop offset="1" stop-color="#5a5d71"/></linearGradient>'+
     '<linearGradient id="gkR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b6e82"/><stop offset=".4" stop-color="#d7d9e0"/><stop offset="1" stop-color="#4c4f63"/></linearGradient>'+
     '<clipPath id="gkWc"><rect id="gkWcr" x="'+(X0-2)+'" y="'+SY0+'" width="'+(WW+4)+'" height="0"/></clipPath></defs>';
  /* the film roll, lying across the top */
  g+='<g id="gkRoll"><rect class="roll" x="'+(X0-22)+'" y="20" width="'+(WW+44)+'" height="44"/><path class="rl" d="M'+(X0-22)+' 31H'+(XR+22)+'M'+(X0-22)+' 53H'+(XR+22)+'"/><rect class="core" x="'+(X0-34)+'" y="36" width="12" height="12"/><rect class="core" x="'+(XR+22)+'" y="36" width="12" height="12"/></g>';
  /* the upper web (stays on the machine) and the lower block (becomes the sachets), clipped while the film draws down */
  g+='<g clip-path="url(#gkWc)">';
  g+='<rect class="web" x="'+X0+'" y="'+SY0+'" width="'+WW+'" height="'+(SYK-SY0)+'"/>';
  g+='<g id="gkLow">';
  for(i=0;i<SN;i++){var lx=X0+i*SLW;
    g+='<g class="sach" id="gkSa'+i+'"><rect class="web" x="'+lx+'" y="'+SYK+'" width="'+SLW+'" height="'+(SYE-SYK)+'"/>'+
       '<rect class="prod" id="gkP'+i+'" x="'+(lx+9)+'" y="'+SYB+'" width="'+(SLW-18)+'" height="0"/>'+
       '<rect class="seal bs" x="'+lx+'" y="'+SYB+'" width="'+SLW+'" height="'+(SYE-SYB)+'"/>'+
       '<rect class="seal ls" x="'+lx+'" y="'+SYK+'" width="7" height="'+(SYE-SYK)+'"/><rect class="seal ls" x="'+(lx+SLW-7)+'" y="'+SYK+'" width="7" height="'+(SYE-SYK)+'"/>'+
       '<rect class="seal ts" x="'+lx+'" y="'+SYK+'" width="'+SLW+'" height="8"/>'+
       '<rect class="sout" x="'+lx+'" y="'+SYK+'" width="'+SLW+'" height="'+(SYE-SYK)+'"/></g>'}
  g+='</g>';
  /* longitudinal seams on the upper web, and the upper half of the cross seam */
  for(i=0;i<=SN;i++){var sx=X0+i*SLW-(i===0?0:i===SN?14:7);
    g+='<rect class="seal ls up" x="'+sx+'" y="'+SY0+'" width="'+(i===0||i===SN?7:14)+'" height="'+(SYK-SY0)+'"/>'}
  g+='<rect class="seal" id="gkTs" x="'+X0+'" y="'+SYT+'" width="'+WW+'" height="'+(SYK-SYT)+'"/>';
  g+='<path class="wedge" d="M'+X0+' '+SY0+'V'+SYK+'M'+XR+' '+SY0+'V'+SYK+'"/>';
  g+='</g>';
  /* the web contour, drawn as the film runs down */
  g+='<path class="ctr" id="gkC0" d="M'+X0+' '+SY0+'V'+SYE+'"/><path class="ctr" id="gkC1" d="M'+XR+' '+SY0+'V'+SYE+'"/>';
  /* step 2: the longitudinal sealing jaws (one pair per seam) */
  g+='<g id="gkJaw">';for(i=0;i<=SN;i++){var jx=X0+i*SLW;g+='<rect class="jaw" x="'+(jx-8)+'" y="150" width="16" height="104"/>'}g+='</g>';
  /* step 3: fill tubes, one per lane */
  g+='<g id="gkTub">';for(i=0;i<SN;i++){var tx=X0+i*SLW+SLW/2;g+='<path class="tube" d="M'+(tx-4)+' -40V380H'+(tx+4)+'V-40"/><path class="tip" d="M'+(tx-4)+' 380L'+tx+' 388L'+(tx+4)+' 380"/>'}g+='</g>';
  /* step 4: the cross-seal jaw and the knife */
  g+='<rect class="jaw" id="gkXj" x="'+(X0-18)+'" y="'+(SYT-4)+'" width="'+(WW+36)+'" height="'+(SYK-SYT+16)+'"/>';
  g+='<path class="cut" id="gkCut" d="M'+(X0-2)+' '+SYK+'H'+(XR+2)+'"/>';
  g+='<path class="knife" id="gkKn" d="M0 -5H-30L-30 5H0L8 0Z"/>';
  /* labels, right of the machine, clear of every moving part */
  if(!mob){
  var fy=mob?14:0;
  g+='<g id="gkL1"><text class="t" x="'+LX+'" y="'+(48+fy/2)+'">FOLIENROLLE</text></g>';
  g+='<g id="gkL2"><text class="t" x="'+LX+'" y="'+(208)+'">SIEGELBACKEN</text></g>';
  g+='<g id="gkL3"><text class="t" x="'+LX+'" y="'+(mob?130:118)+'">DOSIERUNG</text></g>';
  g+='<g id="gkL4"><text class="t" x="'+LX+'" y="'+(SYT-(mob?20:14))+'">QUERSIEGELUNG</text></g>';
  g+='<g id="gkL5"><text class="t" x="'+LX+'" y="'+(SYK+(mob?44:32))+'">MESSER</text></g>';
  g+='<g id="gkL6"><text class="t" x="'+LX+'" y="'+(mob?480:470)+'">BEUTEL</text></g>';
  }
  return g+'</svg>';
}
function scene(){return gkScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)},qa=function(s){return [].slice.call(svg.querySelectorAll(s))};
  var X0=+svg.getAttribute("data-x0"),SLW=+svg.getAttribute("data-lw"),WW=SN*SLW;
  var E={wc:q("#gkWcr"),c0:q("#gkC0"),c1:q("#gkC1"),roll:q("#gkRoll"),jaw:q("#gkJaw"),tub:q("#gkTub"),xj:q("#gkXj"),ts:q("#gkTs"),cut:q("#gkCut"),kn:q("#gkKn"),
    ls:qa(".seal.ls"),bs:qa(".seal.bs"),tsl:qa(".seal.ts"),sout:qa(".sout"),sa:[],pr:[],L:[]};
  for(var i=0;i<SN;i++){E.sa.push(q("#gkSa"+i));E.pr.push(q("#gkP"+i))}
  for(i=1;i<=6;i++)E.L.push(q("#gkL"+i));/* null on phones: op() skips */
  var len=SYE-SY0,cl=WW+4;
  [E.c0,E.c1].forEach(function(c){c.style.strokeDasharray=len+" "+len});
  E.cut.style.strokeDasharray=cl+" "+cl;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.27,.45),s3=seg(p,.52,.7),s4a=seg(p,.76,.83),s4b=seg(p,.83,.89),s4c=seg(p,.9,.97);
    op(E.roll,b);
    /* step 1: the film runs down */
    E.wc.setAttribute("height",(len*s1+2+40*seg(p,.9,.97)).toFixed(1));
    E.c0.style.strokeDashoffset=(len*(1-s1)).toFixed(1);E.c1.style.strokeDashoffset=(len*(1-s1)).toFixed(1);
    op(E.L[0],b);
    /* step 2: jaws close, the longitudinal and bottom seams appear */
    var on2=seg(p,.25,.28)*(1-seg(p,.46,.5));op(E.jaw,b*on2);op(E.L[1],b*on2);
    E.ls.forEach(function(r){op(r,s2)});E.bs.forEach(function(r){op(r,s2)});
    /* step 3: fill tubes come down, product rises */
    var on3=seg(p,.49,.53)*(1-seg(p,.72,.76));op(E.tub,b*on3);op(E.L[2],b*on3);
    E.tub.setAttribute("transform","translate(0 "+(-70*(1-seg(p,.49,.55))).toFixed(1)+")");
    E.pr.forEach(function(r){var hgt=(SYB-SYK-22)*s3;r.setAttribute("y",(SYB-hgt).toFixed(1));r.setAttribute("height",hgt.toFixed(1))});
    /* step 4: the cross-seal jaw closes and leaves the seam; the knife cuts; the sachets drop free */
    var on4=seg(p,.74,.78)*(1-seg(p,.84,.88));op(E.xj,b*on4);
    op(E.ts,s4a);E.tsl.forEach(function(r){op(r,s4a)});
    op(E.L[3],b*seg(p,.74,.78));op(E.L[4],b*seg(p,.81,.84));op(E.L[5],b*seg(p,.9,.95));
    var kx=(X0-34)+(WW+38)*s4b;E.kn.setAttribute("transform","translate("+kx.toFixed(1)+" "+SYK+")");op(E.kn,b*seg(p,.81,.84)*(1-seg(p,.9,.93)));
    E.cut.style.strokeDashoffset=(cl*(1-s4b)).toFixed(1);op(E.cut,s4b>0?1-s4c:0);
    E.sout.forEach(function(r){op(r,s4c)});
    E.sa.forEach(function(g,i){var dx=(i-(SN-1)/2)*7*s4c,dy=30*s4c;g.setAttribute("transform","translate("+dx.toFixed(1)+" "+dy.toFixed(1)+")")});
  };
}
