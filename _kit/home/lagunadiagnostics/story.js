/* The story scene (DB/BL/BY): how Laguna's test works, as ONE continuous fine-line drawing that fills the frame
   (lagunadiagnostics.com, Home/About; release of 28 Apr 2026): a blood collection tube, a white blood cell with its
   lobed nucleus, the mRNA it carries, the gene-expression panel, the probability score and the time to an answer.
   Frame 0 is already a complete picture. Bar heights are drawn for illustration only (no data is implied).
   Step 1 (draw): the tube fills with blood.  Step 2 (read): mRNA leaves the cell, the panel's bars rise.
   Step 3 (score): the panel resolves to a probability score across SZ / BD / neither.
   Step 4 (report): days, set against the 1-3 years of today's route to a diagnosis.
   Labels sit in open space, at least 8px from any stroke (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var TUBE="M72 82V430A21 21 0 0 0 114 430V82";
var CAPP="M62 32H124V82H62Z";
var CELL=[292,212,80];
var NUC="M252 196C246 172 266 160 284 170C296 150 324 156 326 178C344 186 340 214 322 220C326 240 306 254 288 244C272 258 246 248 250 228C234 222 236 202 252 196Z";
var FLOW="M116 300C154 300 182 286 214 254";
var RNA=[184,212,240];
var BX0=452,BP=16.5,BW=9,BASE=300,NB=16;
var BH=[62,104,38,126,80,52,118,70,96,44,130,58,88,112,48,76];
var SC=[452,716,338,12];
var TL=[160,722,452,492];
function wave(y){var d="M376 "+y,x;for(x=376;x<436;x+=10)d+="Q"+(x+5)+" "+(y+(((x-376)/10)%2?6:-6))+" "+(x+10)+" "+y;return d}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="tclip"><path d="M73 83V430A20 20 0 0 0 113 430V83Z"/></clipPath></defs>';
  /* blood (rises in step 1) */
  g+='<g clip-path="url(#tclip)"><rect class="bl" id="bl" x="70" y="160" width="46" height="300"/></g>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+TUBE+'"/><path class="wl sD" d="'+CAPP+'"/><path class="wo sD" d="M62 46H124M62 60H124"/>';
  g+='<path class="wl sD" d="M'+(CELL[0]+CELL[2])+' '+CELL[1]+'A'+CELL[2]+' '+CELL[2]+' 0 1 1 '+(CELL[0]+CELL[2]-.01)+' '+(CELL[1]-.5)+'"/>';
  g+='<path class="wmd sD" d="'+NUC+'"/>';
  g+='<path class="wo sD" d="M440 '+BASE+'H724"/>';
  g+='<path class="wo sD" d="M'+SC[0]+' '+SC[2]+'H'+SC[1]+'V'+(SC[2]+SC[3])+'H'+SC[0]+'Z"/>';
  g+='<path class="wo sD" d="M540 '+SC[2]+'V'+(SC[2]+SC[3])+'M628 '+SC[2]+'V'+(SC[2]+SC[3])+'"/>';
  g+='<path class="wo sD" d="M'+TL[0]+' '+TL[2]+'H'+TL[1]+'"/>';
  g+='</g>';
  g+='<path class="am" id="flow" d="'+FLOW+'"/>';
  /* mRNA strands leaving the cell */
  g+='<g id="rna">';RNA.forEach(function(y){g+='<path class="rn" d="'+wave(y)+'"/>'});g+='</g>';
  /* the panel's bars */
  g+='<g id="bars">';for(i=0;i<NB;i++)g+='<rect class="br'+(i%3==1?' up':'')+'" x="'+(BX0+i*BP).toFixed(1)+'" y="'+(BASE-BH[i])+'" width="'+BW+'" height="'+BH[i]+'"/>';g+='</g>';
  /* the score: a segment lights and a marker settles over it */
  g+='<rect class="sg" id="sg" x="'+(SC[0]+1)+'" y="'+(SC[2]+1)+'" width="86" height="'+(SC[3]-2)+'"/>';
  g+='<path class="mk" id="mk" d="M0 0L-6 -10H6Z"/>';
  /* the time to an answer */
  g+='<path class="tl" id="tlL" d="M'+TL[0]+' '+TL[2]+'H'+TL[1]+'"/>';
  g+='<path class="ta" id="tlD" d="M'+TL[0]+' '+TL[3]+'H244"/>';
  if(!mob){
    g+='<g id="lTu"><text class="t" x="136" y="62">BLOOD SAMPLE</text></g>';
    g+='<g id="lCe"><text class="t" x="214" y="114">WHITE BLOOD CELL</text></g>';
    g+='<g id="lRn"><text class="t a2" x="386" y="168">mRNA</text></g>';
    g+='<g id="lPa"><text class="t" x="452" y="146">GENE EXPRESSION PANEL</text></g>';
    g+='<g id="lSc"><text class="t" x="466" y="376">SZ</text><text class="t" x="554" y="376">BD</text><text class="t" x="642" y="376">NEITHER</text><text class="t" x="452" y="402">PROBABILITY SCORE</text></g>';
    g+='<g id="lTl"><text class="t" x="590" y="438">TODAY · 1–3 YEARS</text></g>';
    g+='<g id="lDy"><text class="t a2" x="256" y="496">LAGUNA · DAYS</text></g>';
  }else{
    g+='<g id="lTu"></g><g id="lCe"></g><g id="lRn"></g><g id="lPa"></g>';
    g+='<g id="lSc"><text class="t" x="470" y="386">SZ</text><text class="t" x="558" y="386">BD</text></g>';
    g+='<g id="lTl"><text class="t" x="590" y="430">1–3 YEARS</text></g>';
    g+='<g id="lDy"><text class="t a2" x="258" y="500">DAYS</text></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ONE BLOOD DRAW':'ONE ROUTINE VENOUS BLOOD DRAW')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'mRNA EXPRESSION READ':'mRNA GENE EXPRESSION, READ FROM BLOOD CELLS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'AN OBJECTIVE SCORE':'ONE OBJECTIVE PROBABILITY SCORE')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'RESULTS IN DAYS':'RESULTS TO THE PHYSICIAN IN DAYS, NOT YEARS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),rna:dl("#rna .rn"),tlD:dl("#tlD"),bars:$$("#bars .br",svg),
    bl:$("#bl",svg),sg:$("#sg",svg),mk:$("#mk",svg),flow:$("#flow",svg),tlL:$("#tlL",svg),
    lTu:$("#lTu",svg),lCe:$("#lCe",svg),lRn:$("#lRn",svg),lPa:$("#lPa",svg),lSc:$("#lSc",svg),lTl:$("#lTl",svg),lDy:$("#lDy",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1. the tube fills: a third is there from the start, it rises to the fill line */
    var f=.35+.65*seg(p,.03,.2);E.bl.setAttribute("y",(452-292*f).toFixed(1));op(E.bl,b);
    op(E.flow,b*(.35+.65*seg(p,.15,.3)));op(E.tlL,b);
    op(E.lTu,b);op(E.lCe,b);op(E.lPa,b);op(E.lSc,b);op(E.lTl,b);
    /* 2. mRNA leaves the cell and the bars rise to their levels */
    draw(E.rna,seg(p,.27,.42));op(E.lRn,b*seg(p,.3,.38));
    E.bars.forEach(function(el,i){var v=.25+.75*seg(p,.3+.008*i,.46+.008*i);el.style.transform="scaleY("+v.toFixed(3)+")";op(el,b)});
    /* 3. the score resolves: the marker sweeps the scale and settles over the first segment */
    var s3=seg(p,.52,.7),mid=SC[0]+(SC[1]-SC[0])/2,end=SC[0]+44;
    var mx=(1-s3)*mid+s3*end+(1-s3)*s3*4*90*Math.sin(s3*Math.PI*2);
    E.mk.setAttribute("transform","translate("+mx.toFixed(1)+" "+(SC[2]-3)+")");op(E.mk,b*seg(p,.5,.56));
    op(E.sg,b*seg(p,.64,.72));
    /* 4. days, against today's years */
    draw(E.tlD,seg(p,.78,.9));op(E.lDy,b*seg(p,.84,.9));
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}
