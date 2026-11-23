/* The story scene (DB): Galibra's own lead mechanism, drawn as ONE continuous engraved scene that fills the frame and
   is scrubbed by the pinned story. A cerebral capillary runs across the top — the blood-brain barrier — and a neuron
   fills the tissue below it. Step 1: inside the neuron, GABA metabolism runs GABA → succinic semialdehyde → succinate,
   and the SSADH step is blocked, so neuroactive metabolites accumulate. Step 2: AAV vector particles travel the
   capillary and cross the barrier into the tissue. Step 3: the delivered gene reaches the nucleus, the blocked step
   opens, the accumulation clears, and the readout records the intended direction — SSADH activity up, accumulated
   metabolites down (direction only, no invented values). Sources: galibraneuroscience.com (Our Science, pipeline and
   news), the August 2026 PR Newswire release on the FDA designations, and NIH STTR 1R41NS145933 "Developing Brain
   Penetrable AAV Gene Therapy for Succinic Semialdehyde Dehydrogenase Deficiency". */
var SCW=760,SCH=600;
var VT=42,VB=134,VM=(VT+VB)/2;              /* the capillary walls and its midline */
var SOMA=[272,286],SR=92,NUC=42;            /* the neuron */
var LBY=408;                                /* the step caption line */
var PY=474,PX=[112,330,548];                /* the metabolic pathway row */
var BY=534;                                 /* the readout */
function hexPts(cx,cy,r){var d="",i,a;for(i=0;i<6;i++){a=Math.PI/6+i*Math.PI/3;d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
var CAPS=[[52,-18],[138,12],[226,-10],[318,16],[408,-14],[500,10],[592,-16],[684,8]];
var CROSS=[1,3,5];                           /* the three that cross into the tissue */
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,a,x,y;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="galsoma"><circle cx="'+SOMA[0]+'" cy="'+SOMA[1]+'" r="'+SR+'"/></clipPath>'+
     '<clipPath id="galves"><rect x="0" y="'+VT+'" width="760" height="'+(VB-VT)+'"/></clipPath>'+
     '<clipPath id="galframe"><rect x="0" y="0" width="'+SCW+'" height="'+SCH+'"/></clipPath>'+
     '<clipPath id="galtis"><rect x="0" y="'+(VB+8)+'" width="'+SCW+'" height="'+(SCH-VB-8)+'"/></clipPath></defs>';
  g+='<g id="scBase"><path class="frm sD" d="M20 '+(BY-26)+'H740"/>'+
     '<text class="t" x="20" y="28">CEREBRAL CAPILLARY · BLOOD-BRAIN BARRIER</text></g>';
  /* the capillary: two engraved walls with endothelium hatched between them */
  g+='<g id="scVes">';
  g+='<path class="vw sD" d="M18 '+VT+'H742"/><path class="vw sD" d="M18 '+VB+'H742"/>';
  g+='<g clip-path="url(#galves)">';
  for(i=0;i<40;i++){x=4+i*20;g+='<path class="hat" d="M'+x+' '+VT+'L'+(x+15)+' '+VB+'"/>'}
  g+='</g></g>';
  /* the neuron: soma, nucleus, a wide dendritic tree and the axon across the frame */
  g+='<g id="scNeu" clip-path="url(#galtis)">';
  var DEN=[[-252,-52],[-198,-104],[-124,-124],[-26,-130],[76,-116],[-238,46],[-128,90],[8,102]];
  DEN.forEach(function(d,i){
    var ex=SOMA[0]+d[0],ey=SOMA[1]+d[1],mx=SOMA[0]+d[0]*.62+(i%2?16:-14),my=SOMA[1]+d[1]*.66;
    g+='<path class="den" d="M'+f(SOMA[0]+d[0]*.26)+' '+f(SOMA[1]+d[1]*.26)+'Q'+f(mx)+' '+f(my)+' '+f(ex)+' '+f(ey)+'"/>';
    g+='<path class="den dn2" d="M'+f(mx*.55+ex*.45)+' '+f(my*.55+ey*.45)+'l'+f(d[0]*.2)+' '+f(d[1]*.26)+'"/>';
    g+='<path class="den dn2" d="M'+f(mx*.55+ex*.45)+' '+f(my*.55+ey*.45)+'l'+f(d[0]*.26)+' '+f(d[1]*.06)+'"/>';
    g+='<path class="den dn2" d="M'+f(ex)+' '+f(ey)+'l'+f(d[0]*.12)+' '+f(d[1]*.14)+'"/>'});
  g+='<path class="axn" d="M'+(SOMA[0]+SR-6)+' '+(SOMA[1]+18)+'C420 352 520 288 724 322"/>';
  g+='<path class="den" d="M724 322l26-20M724 322l24 14M724 322l6 28"/>';
  g+='<circle class="nsm" cx="'+SOMA[0]+'" cy="'+SOMA[1]+'" r="'+SR+'"/>';
  g+='<g clip-path="url(#galsoma)">';
  for(i=0;i<34;i++){y=178+i*9;g+='<path class="hat" d="M166 '+y+'L392 '+(y-36)+'"/>'}
  g+='</g>';
  g+='<circle class="nuc" cx="'+SOMA[0]+'" cy="'+SOMA[1]+'" r="'+NUC+'"/>';
  g+='</g>';
  g+='<text class="t nl" x="740" y="178" text-anchor="end">NEURON · GABA METABOLISM</text>';
  /* the delivered gene, arriving in the nucleus */
  g+='<g id="scGene">';
  g+='<path class="gen" d="M'+(SOMA[0]-24)+' '+(SOMA[1]-18)+'q12 11 24 0t24 0"/>';
  g+='<path class="gen" d="M'+(SOMA[0]-24)+' '+(SOMA[1]+2)+'q12 11 24 0t24 0"/>';
  g+='<text class="t gl" x="'+SOMA[0]+'" y="'+(SOMA[1]+26)+'" text-anchor="middle">ALDH5A1</text>';
  g+='</g>';
  /* metabolites accumulating inside the soma, outside the nucleus */
  g+='<g id="scAcc">';
  for(i=0;i<18;i++){a=i*2.399;var rr=NUC+10+(SR-NUC-22)*Math.sqrt(((i%9)+1)/9);
    g+='<circle class="acc" data-i="'+i+'" cx="'+f(SOMA[0]+rr*Math.cos(a))+'" cy="'+f(SOMA[1]+rr*Math.sin(a))+'" r="5"/>'}
  g+='</g>';
  /* the AAV vector particles */
  g+='<g id="scCap" clip-path="url(#galframe)">';
  CAPS.forEach(function(c,i){
    g+='<g class="cp" data-i="'+i+'" data-cross="'+(CROSS.indexOf(i)>=0?1:0)+'">'+
       '<path class="cph" d="'+hexPts(c[0],VM+c[1],16)+'"/>'+
       '<path class="cpi" d="M'+(c[0]-9)+' '+(VM+c[1]-5)+'L'+c[0]+' '+(VM+c[1]+10)+'L'+(c[0]+9)+' '+(VM+c[1]-5)+'Z"/>'+
       '<circle class="cpd" cx="'+c[0]+'" cy="'+(VM+c[1])+'" r="2.8"/></g>'});
  g+='</g>';
  /* the pathway row: GABA -> succinic semialdehyde -> succinate, with the SSADH step */
  g+='<g id="scPath">';
  PX.forEach(function(px){g+='<circle class="pnd" cx="'+px+'" cy="'+PY+'" r="14"/>'});
  g+='<text class="t pl" x="'+PX[0]+'" y="'+(PY-30)+'" text-anchor="middle">GABA</text>';
  g+='<text class="t pl" x="'+PX[1]+'" y="'+(PY-30)+'" text-anchor="middle">SUCCINIC SEMIALDEHYDE</text>';
  g+='<text class="t pl" x="'+PX[2]+'" y="'+(PY-30)+'" text-anchor="middle">SUCCINATE</text>';
  g+='<path class="arw" d="M'+(PX[0]+22)+' '+PY+'H'+(PX[1]-28)+'m-10 -5l10 5-10 5"/>';
  g+='<text class="t en" x="'+((PX[0]+PX[1])/2)+'" y="'+(PY+30)+'" text-anchor="middle">GABA-T</text>';
  g+='<path class="arw a2" d="M'+(PX[1]+22)+' '+PY+'H'+(PX[2]-28)+'m-10 -5l10 5-10 5"/>';
  g+='<text class="t en" x="'+((PX[1]+PX[2])/2)+'" y="'+(PY+30)+'" text-anchor="middle">SSADH</text>';
  g+='<g id="scBlk"><path class="blk" d="M'+(((PX[1]+PX[2])/2)-12)+' '+(PY-12)+'l24 24m0-24l-24 24"/></g>';
  g+='<text class="t" x="'+(PX[2]+36)+'" y="'+(PY+5)+'">ALDH5A1</text>';
  g+='</g>';
  /* the readout: direction only */
  g+='<g id="scBar">';
  g+='<text class="t" x="20" y="'+BY+'">INTENDED EFFECT OF GENE REPLACEMENT</text>';
  g+='<text class="t lbk" x="20" y="'+(BY+32)+'">SSADH ACTIVITY</text>';
  g+='<text class="t lbi" x="20" y="'+(BY+60)+'">ACCUMULATED METABOLITES</text>';
  g+='<path class="bl sD" d="M300 '+(BY+12)+'V'+(BY+68)+'"/>';
  g+='<rect class="bk" x="300" y="'+(BY+20)+'" width="0" height="16"/>';
  g+='<rect class="bi" x="300" y="'+(BY+48)+'" width="0" height="16"/>';
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="20" y="'+LBY+'">SSADH IS ABSENT · METABOLITES ACCUMULATE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+LBY+'">BRAIN-PENETRABLE AAV CROSSES THE BARRIER</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+LBY+'">THE DELIVERED GENE RESTORES THE ENZYME</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD").concat(dl("#scBar .sD")),
    ves:dl("#scVes .vw"),den:dl(".den"),soma:dl(".nsm"),axn:dl(".axn"),
    fade:$$("#scBase text",svg),barTx:$$("#scBar text",svg),pathTx:$$("#scPath text",svg),
    hatV:$$("#scVes .hat",svg),hatS:$$("#scNeu .hat",svg),
    cap:$$("#scCap .cp",svg),acc:$$(".acc",svg),nuc:$(".nuc",svg),gene:$("#scGene",svg),
    neuLab:$("text.nl",svg),
    pnd:$$(".pnd",svg),arw:$$(".arw",svg),a2:$(".a2",svg),blk:$("#scBlk",svg),
    bk:$(".bk",svg),bi:$(".bi",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,BW=410;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var ink=seg(p,0,.12);
    draw(E.ves,Math.min(1,ink*1.2));draw(E.soma,Math.min(1,ink*1.3));
    draw(E.den,Math.min(1,seg(p,.02,.2)*1.1));draw(E.axn,Math.min(1,seg(p,.04,.22)*1.1));
    op(E.nuc,b*seg(p,.04,.16));op(E.neuLab,b*seg(p,.03,.14)*.9);
    E.hatV.forEach(function(h,i){op(h,b*Math.min(1,Math.max(0,ink*2-(i%14)*.05)))});
    E.hatS.forEach(function(h,i){op(h,b*Math.min(1,Math.max(0,seg(p,.03,.2)*1.6-i*.02))*.85)});
    /* the pathway, then the blocked SSADH step */
    var pa=seg(p,.08,.24);
    E.pnd.forEach(function(n,i){op(n,b*Math.min(1,Math.max(0,pa*2.2-i*.3)))});
    E.arw.forEach(function(ar,i){op(ar,b*Math.min(1,Math.max(0,pa*2-i*.4)))});
    E.pathTx.forEach(function(t,i){op(t,b*Math.min(1,Math.max(0,pa*1.9-i*.16))*.95)});
    var open=seg(p,.76,.9);
    op(E.blk,b*seg(p,.16,.28)*(1-open));
    if(E.a2)E.a2.setAttribute("class","arw a2"+(open>.5?" ok":""));
    /* metabolites build up, then clear */
    var acc=seg(p,.18,.36),clr=seg(p,.8,.95);
    E.acc.forEach(function(c,i){var gi=Math.min(1,Math.max(0,acc*2.2-i*.09));
      op(c,b*gi*(1-clr)*.92);c.setAttribute("r",(5*(.45+.55*gi)).toFixed(2))});
    /* the vector particles travel the capillary, then three cross into the tissue and reach the nucleus */
    var run=seg(p,.34,.6),cross=seg(p,.54,.76),land=seg(p,.68,.84);
    E.cap.forEach(function(gq,i){
      var k=i/8,appear=Math.min(1,Math.max(0,run*2.4-k*.9));
      var isC=gq.getAttribute("data-cross")==="1";
      var dx=-180*(1-Math.min(1,run*1.15))+(isC?0:30*run),dy=0,sc=1;
      if(isC){var cc=Math.min(1,Math.max(0,cross*1.55-(i===1?0:i===3?.18:.36)));
        dy=cc*(SOMA[1]-VM-10);dx+=cc*(SOMA[0]-CAPS[i][0]);sc=1-.55*cc}
      gq.setAttribute("transform","translate("+dx.toFixed(1)+" "+dy.toFixed(1)+") scale("+sc.toFixed(3)+")");
      gq.style.transformOrigin=CAPS[i][0]+"px "+(VM+CAPS[i][1])+"px";
      op(gq,b*appear*(isC?(1-land*.95):1));
    });
    op(E.gene,b*seg(p,.74,.88));
    var bar=seg(p,.8,.98);
    E.bk.setAttribute("width",(BW*bar).toFixed(1));
    E.bi.setAttribute("width",(BW*.24*(1-bar*.75)*(acc>0?1:0)).toFixed(1));
    op(E.bk,b*seg(p,.78,.86));op(E.bi,b*seg(p,.2,.34));
    E.barTx.forEach(function(el){op(el,b*(el.classList.contains('lbk')?.45+.55*bar:el.classList.contains('lbi')?.5+.5*acc:1))});
    op(E.l1,b*seg(p,.2,.28)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.76,.86));
  };
}
