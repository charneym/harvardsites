/* The story scene (DB/BL/BY): Tellus's mechanism as ONE continuous fine-line drawing that fills the frame
   (tellustherapeutics.com, Science; Chao, Benner et al., Cell Stem Cell 2023): three nerve fibres (axons) in the white
   matter and, at left, a neural stem cell of the brain's own niche. Frame 0 is already a complete picture.
   Step 1 (injury): progenitor cells are lost (dashed outlines fade); the axons are bare.
   Step 2 (signal): TT-20, an oxysterol from breast milk, reaches the stem cell as a steady stream; the cell lights.
   Step 3 (renewal): new oligodendrocyte progenitors leave the stem cell and settle among the axons.
   Step 4 (myelin): each new oligodendrocyte reaches out and wraps two segments of axon in myelin, with nodes between.
   Labels sit in open space, >=8px from every stroke (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var AXY=[160,280,400],AX0=250,AX1=744;
var STEM=[120,280];
var OPC=[[432,220,0,1,392,472],[616,220,0,1,576,656],[340,340,1,2,300,380],[524,340,1,2,484,564]];
var TTP="M14 18C30 110 60 196 98 254";
var STERO="M-7.2 -1.6L-4.8 -5.6H0L2.4 -1.6L0 2.4H-4.8ZM2.4 -1.6L4.8 -5.6H9.6L12 -1.6L9.6 2.4H4.8Z";
function storyScene(o){
  var g='',i,mob=o.mob,S=STEM;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="sglow"><stop offset="0" stop-color="#4fd08f" stop-opacity=".45"/><stop offset="1" stop-color="#4fd08f" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="sh" cx="'+S[0]+'" cy="'+S[1]+'" r="96" fill="url(#sglow)"/>';
  /* the white matter around them: fainter fibres behind, at other depths */
  [96,248,316,466].forEach(function(y,k){var x0=AX0+[40,90,20,70][k];g+='<path class="bgx" d="M'+x0+' '+y+'C'+(x0+150)+' '+(y+5)+' '+(AX1-170)+' '+(y-5)+' '+(AX1-[0,30,10,40][k])+' '+y+'"/>'});
  AXY.forEach(function(y){g+='<path class="axt" d="M'+AX0+' '+y+'C'+(AX0+160)+' '+(y-6)+' '+(AX1-180)+' '+(y+6)+' '+AX1+' '+y+'"/>'});
  g+='<g id="scBase">';
  AXY.forEach(function(y){g+='<path class="wl sD" d="M'+AX0+' '+y+'C'+(AX0+160)+' '+(y-6)+' '+(AX1-180)+' '+(y+6)+' '+AX1+' '+y+'"/>'});
  g+='<path class="wmd sD" d="M'+(S[0]+36)+' '+S[1]+'C'+(S[0]+36)+' '+(S[1]+24)+' '+(S[0]+18)+' '+(S[1]+38)+' '+S[0]+' '+(S[1]+36)+'C'+(S[0]-22)+' '+(S[1]+34)+' '+(S[0]-36)+' '+(S[1]+18)+' '+(S[0]-35)+' '+S[1]+'C'+(S[0]-34)+' '+(S[1]-22)+' '+(S[0]-18)+' '+(S[1]-36)+' '+S[0]+' '+(S[1]-35)+'C'+(S[0]+22)+' '+(S[1]-34)+' '+(S[0]+36)+' '+(S[1]-22)+' '+(S[0]+36)+' '+S[1]+'Z"/>';
  g+='<path class="wo sD" d="M'+(S[0]+15)+' '+(S[1]+2)+'A15 15 0 1 1 '+(S[0]+14.99)+' '+(S[1]+1.5)+'"/>';
  g+='</g>';
  /* progenitors lost to injury */
  g+='<g id="lost">';OPC.forEach(function(c){g+='<circle class="lost" cx="'+c[0]+'" cy="'+c[1]+'" r="11"/>'});g+='</g>';
  /* TT-20 stream: small sterol glyphs */
  g+='<path id="ttP" class="gd" d="'+TTP+'"/>';
  g+='<g id="tt">';for(i=0;i<7;i++)g+='<g class="tt"><path d="'+STERO+'"/></g>';g+='</g>';
  /* new progenitors and their paths from the stem cell */
  g+='<g id="opcs">';OPC.forEach(function(c){var sx=S[0]+34,sy=S[1]+(c[1]<S[1]?-10:10);
    g+='<path class="gd op-p" d="M'+sx+' '+sy+'C'+(sx+90)+' '+sy+' '+(c[0]-120)+' '+c[1]+' '+c[0]+' '+c[1]+'"/><circle class="opc" r="9" cx="'+sx+'" cy="'+sy+'"/>'});g+='</g>';
  /* processes and myelin sheaths */
  g+='<g id="my">';OPC.forEach(function(c){var m=(c[4]+c[5])/2;[c[2],c[3]].forEach(function(a){
    var up=AXY[a]<c[1];g+='<path class="pr" d="M'+c[0]+' '+(c[1]+(up?-9:9))+'C'+c[0]+' '+(c[1]+(up?-30:30))+' '+m+' '+(AXY[a]+(up?24:-24))+' '+m+' '+(AXY[a]+(up?6:-6))+'"/>';
    g+='<path class="mys" d="M'+(c[4]+6)+' '+AXY[a]+'L'+(c[5]-6)+' '+AXY[a]+'"/>'})});g+='</g>';
  /* labels */
  var L=mob?{st:[22,376,"STEM CELL"],ax:[612,128,"AXONS"],tt:[60,64,"TT-20"],mid:[262,512]}:{st:[50,354,"NEURAL STEM CELL"],ax:[664,134,"AXONS"],tt:[60,66,"TT-20 · OXYSTEROL"],mid:[300,508]};
  g+='<g id="lSt"><text class="t" x="'+L.st[0]+'" y="'+L.st[1]+'">'+L.st[2]+'</text></g>';
  g+='<g id="lAx"><text class="t" x="'+L.ax[0]+'" y="'+L.ax[1]+'">'+L.ax[2]+'</text></g>';
  g+='<g id="lTt"><text class="t a2" x="'+L.tt[0]+'" y="'+L.tt[1]+'">'+L.tt[2]+'</text></g>';
  g+='<g id="lLo">'+(mob?'':'<text class="t" x="'+L.mid[0]+'" y="'+L.mid[1]+'">PROGENITORS LOST</text>')+'</g>';
  g+='<g id="lNw">'+(mob?'':'<text class="t a2" x="'+L.mid[0]+'" y="'+L.mid[1]+'">NEW PROGENITORS</text>')+'</g>';
  g+='<g id="lMy">'+(mob?'':'<text class="t a2" x="'+L.mid[0]+'" y="'+L.mid[1]+'">MYELIN SHEATHS</text>')+'</g>';
  var ly=SCH-8,lx=mob?22:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'AXONS LEFT BARE':'INFLAMMATION AND HYPOXIA · PROGENITORS LOST')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'AN OXYSTEROL SIGNAL':'TT-20 REACHES THE NEURAL STEM CELLS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PROGENITORS RENEWED':'GLI-DEPENDENT OLIGODENDROGENESIS')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MYELIN RESTORED':'OLIGODENDROCYTES WRAP THE AXONS IN MYELIN')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),pr:dl("#my .pr"),ms:dl("#my .mys"),lost:$$("#lost .lost",svg),tt:$$("#tt .tt",svg),
    opp:$$("#opcs .op-p",svg),opc:$$("#opcs .opc",svg),sh:$("#sh",svg),
    lSt:$("#lSt",svg),lAx:$("#lAx",svg),lTt:$("#lTt",svg),lLo:$("#lLo",svg),lNw:$("#lNw",svg),lMy:$("#lMy",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var ttP=$("#ttP",svg),TL=ttP.getTotalLength();var OL=E.opp.map(function(p){return p.getTotalLength()});
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1. progenitors lost: dashed outlines fade away */
    E.lost.forEach(function(el,k){op(el,b*(1-seg(p,.06+.03*k,.18+.03*k)))});
    op(E.lSt,b);op(E.lAx,b);op(E.lLo,b*seg(p,.03,.09)*(1-seg(p,.22,.27)));
    /* 2. the TT-20 stream reaches the stem cell, which lights */
    var on2=seg(p,.25,.32)*(1-seg(p,.62,.7));
    E.tt.forEach(function(el,i){var f=((i/7)+p*6)%1;var q=ttP.getPointAtLength(TL*f);el.setAttribute("transform","translate("+q.x.toFixed(1)+" "+q.y.toFixed(1)+")");op(el,b*on2*Math.min(1,f*6)*Math.min(1,(1-f)*6))});
    op(E.lTt,b*seg(p,.28,.35)*(1-seg(p,.62,.68)));
    op(E.sh,b*seg(p,.34,.46)*(1-seg(p,.9,1)*.4));
    /* 3. new progenitors travel out and settle */
    E.opc.forEach(function(el,k){var s=seg(p,.52+.03*k,.66+.03*k),q=E.opp[k].getPointAtLength(OL[k]*s*s*(3-2*s));el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*seg(p,.5+.03*k,.54+.03*k))});
    op(E.lNw,b*seg(p,.56,.62)*(1-seg(p,.72,.76)));
    /* 4. processes reach out, sheaths wrap the axons */
    draw(E.pr,b*seg(p,.77,.86));draw(E.ms,b*seg(p,.82,.95));
    op(E.lMy,b*seg(p,.86,.92));
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}
