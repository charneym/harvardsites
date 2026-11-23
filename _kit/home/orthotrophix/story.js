/* The story scene (DB/BL): OrthoTrophix's own mechanism (orthotrophix.com, TPX-100: "the bone shape of the knee undergoes
   unidirectional and irreversible change over time, with a much greater rate of change in osteoarthritic knees";
   "TPX-100-treated knees demonstrated statistically significant reductions in pathological 3D bone shape change of the
   femur as compared to placebo-treated knees"), drawn as ONE fine-line front view of the knee that fills the frame:
   femur, tibia and fibula head. Frame 0 is already complete (a healthy knee).
   Step 1 (change): the femoral and tibial outlines begin to spread and flatten (OA bone-shape change); the healthy
   outline stays behind as a faint dashed ghost.
   Step 2 (inject): TPX-100 (logo blue) enters the joint space and glows along it (intra-articular injection).
   Step 3 (hold): the treated outline holds its shape and lights blue, while a dashed placebo outline keeps changing.
   Everything is driven by the scrubbed progress. Shapes are a schematic, not patient data. */
var SCW=760,SCH=560,KX=110;
var FH=[[338,24],[334,120],[322,175],[290,212],[264,246],[258,276],[270,298],[296,308],[326,302],[348,286],[366,276],[380,274],[394,276],[412,286],[434,302],[464,308],[490,298],[502,276],[496,246],[470,212],[438,175],[426,120],[422,24]];
var FO=[[338,24],[334,120],[320,175],[284,210],[250,244],[238,278],[250,300],[288,311],[326,306],[350,293],[366,283],[380,281],[394,283],[410,293],[434,306],[472,311],[510,300],[522,278],[510,244],[476,210],[440,175],[426,120],[422,24]];
var TH=[[340,512],[338,460],[330,404],[300,372],[262,352],[248,336],[252,325],[290,319],[330,321],[360,319],[372,308],[380,302],[388,308],[400,319],[430,321],[470,319],[508,325],[512,336],[498,352],[460,372],[430,404],[422,460],[420,512]];
var TO=[[340,512],[338,460],[330,404],[296,372],[252,354],[236,338],[240,325],[288,322],[330,324],[360,322],[372,311],[380,306],[388,311],[400,322],[430,324],[472,322],[520,325],[524,338],[506,354],[464,372],[430,404],[422,460],[420,512]];
function mix(A,B,k){return A.map(function(p,i){return [p[0]+(B[i][0]-p[0])*k+KX,p[1]+(B[i][1]-p[1])*k]})}
/* Catmull-Rom through the points, as cubic Beziers */
function crd(P){var d="M"+P[0][0].toFixed(1)+" "+P[0][1].toFixed(1),i,p0,p1,p2,p3;
  for(i=0;i<P.length-1;i++){p0=P[Math.max(0,i-1)];p1=P[i];p2=P[i+1];p3=P[Math.min(P.length-1,i+2)];
    d+="C"+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+" "+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)+" "+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+" "+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)+" "+p2[0].toFixed(1)+" "+p2[1].toFixed(1)}
  return d}
function storyScene(o){
  var g='',mob=o.mob,J=[380+KX,313];
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'290 -50 400 580':'64 0 700 568')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gJs"><stop offset="0" stop-color="#5aa8ec" stop-opacity=".7"/><stop offset=".6" stop-color="#2f7fd0" stop-opacity=".22"/><stop offset="1" stop-color="#2f7fd0" stop-opacity="0"/></radialGradient></defs>';
  g+='<ellipse class="halo" id="hJs" cx="'+J[0]+'" cy="'+J[1]+'" rx="190" ry="34" fill="url(#gJs)"/>';
  /* ghosts: the healthy outline (step 1) and the placebo outline (step 3) */
  g+='<g id="gH" class="gh"><path d="'+crd(mix(FH,FH,0))+'"/><path d="'+crd(mix(TH,TH,0))+'"/></g>';
  g+='<g id="gP" class="gh gp"><path id="gPf"/><path id="gPt"/></g>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" id="kF" d="'+crd(mix(FH,FO,0))+'"/>';
  g+='<path class="wl sD" id="kT" d="'+crd(mix(TH,TO,0))+'"/>';
  /* fibula head and shaft, and the patella seen through the femur (fine, quiet line) */
  g+='<path class="wl sD" d="M'+(498+KX)+' 512L'+(500+KX)+' 404C'+(497+KX)+' 392 '+(499+KX)+' 378 '+(514+KX)+' 374C'+(530+KX)+' 372 '+(538+KX)+' 386 '+(532+KX)+' 400L'+(524+KX)+' 512"/>';
  g+='<path class="wo sD" d="M'+(380+KX)+' 168C'+(414+KX)+' 168 '+(424+KX)+' 196 '+(420+KX)+' 222C'+(414+KX)+' 248 '+(394+KX)+' 262 '+(380+KX)+' 264C'+(366+KX)+' 262 '+(346+KX)+' 248 '+(340+KX)+' 222C'+(336+KX)+' 196 '+(346+KX)+' 168 '+(380+KX)+' 168"/>';
  g+='</g>';
  /* TPX-100: drops that travel along the joint space from the side */
  g+='<g id="scDr">';for(var i=0;i<5;i++)g+='<circle class="dr" r="4.4" cx="'+(J[0]-230)+'" cy="'+J[1]+'"/>';g+='</g>';
  /* the joint-facing bone edges, lit once the shape holds */
  g+='<path class="lit" id="litF"/><path class="lit" id="litT"/>';
  if(!mob){
    g+='<g id="lFe"><path class="ld" d="M'+(318+KX)+' 120L'+(232+KX)+' 120"/><text class="t" x="'+(224+KX)+'" y="124" text-anchor="end">FEMUR</text></g>';
    g+='<g id="lTi"><path class="ld" d="M'+(326+KX)+' 470L'+(232+KX)+' 470"/><text class="t" x="'+(224+KX)+'" y="474" text-anchor="end">TIBIA</text></g>';
    g+='<g id="lHe"><path class="ld" d="M'+(232+KX)+' 232L'+(150+KX)+' 196"/><text class="t" x="'+(142+KX)+'" y="184" text-anchor="end">HEALTHY</text><text class="t q" x="'+(142+KX)+'" y="200" text-anchor="end">SHAPE</text></g>';
    g+='<g id="lJs"><text class="t" x="'+(560+KX)+'" y="'+(J[1]-30)+'">JOINT SPACE</text></g>';
    g+='<g id="lPl"><path class="ld" d="M'+(532+KX)+' 262L'+(572+KX)+' 232"/><text class="t" x="'+(580+KX)+'" y="222">PLACEBO</text><text class="t q" x="'+(580+KX)+'" y="238">KEEPS CHANGING</text></g>';
  }else{
    g+='<g id="lFe"></g><g id="lTi"></g><g id="lHe"></g><g id="lJs"></g><g id="lPl"></g>';
  }
  var ly=mob?-14:SCH-12,lx=mob?490:490,an=' text-anchor="middle"';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'BONE SHAPE CHANGES':'THE BONE’S 3D SHAPE STARTS TO CHANGE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'TPX-100 IN THE JOINT':'TPX-100 GOES INTO THE JOINT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'SHAPE CHANGE SLOWED':'BONE SHAPE CHANGE IS SLOWED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;return [p,L]})};
  var E={base:dl("#scBase .sD"),kF:$("#kF",svg),kT:$("#kT",svg),gH:$("#gH",svg),gP:$("#gP",svg),gPf:$("#gPf",svg),gPt:$("#gPt",svg),
    dr:$$("#scDr .dr",svg),hJ:$("#hJs",svg),litF:$("#litF",svg),litT:$("#litT",svg),
    lFe:$("#lFe",svg),lTi:$("#lTi",svg),lHe:$("#lHe",svg),lJs:$("#lJs",svg),lPl:$("#lPl",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastK=-1,lastQ=-1,J=[380+KX,313];
  function draw(list,v){list.forEach(function(a){var p=a[0];if(v>=1){p.style.strokeDasharray="none";p.style.strokeDashoffset="0";return}
    var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=(L*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* treated outline: changes in step 1, then holds */
    var k=.42*sm(seg(p,.08,.3));
    if(Math.abs(k-lastK)>.002||b!==lastB){lastK=k;E.kF.setAttribute("d",crd(mix(FH,FO,k)));E.kT.setAttribute("d",crd(mix(TH,TO,k)));
      E.litF.setAttribute("d",crd(mix(FH,FO,k).slice(4,19)));E.litT.setAttribute("d",crd(mix(TH,TO,k).slice(4,19)))}
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* placebo outline: keeps changing through step 3 */
    var q=k+(1-k)*sm(seg(p,.7,.92));
    if(Math.abs(q-lastQ)>.002){lastQ=q;E.gPf.setAttribute("d",crd(mix(FH,FO,q)));E.gPt.setAttribute("d",crd(mix(TH,TO,q)))}
    op(E.gH,b*seg(p,.1,.2)*(1-seg(p,.62,.7)));
    op(E.gP,b*seg(p,.68,.76));
    /* 2. TPX-100 enters along the joint space and glows there */
    E.dr.forEach(function(el,i){var f=sm((seg(p,.38,.56)-i*.08)/.68),x=J[0]-230+(190+i*34-((i%2)?40:0))*f,y=J[1]+(i%2?2:-2)*f;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(f>0?Math.min(1,f*4):0)*(1-seg(p,.6,.7)))});
    op(E.hJ,b*seg(p,.48,.62)*(1-.45*seg(p,.8,.94)));
    op(E.litF,b*seg(p,.72,.84));op(E.litT,b*seg(p,.72,.84));
    op(E.lFe,b*(1-seg(p,.06,.12)));op(E.lTi,b*(1-seg(p,.06,.12)));
    op(E.lHe,b*seg(p,.14,.22)*(1-seg(p,.34,.4)));
    op(E.lJs,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));
    op(E.lPl,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
