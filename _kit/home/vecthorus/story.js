/* The story scene (DB/BL): Vect-Horus' own mechanism, from vect-horus.com (Technology): the blood–brain barrier, "a unique
   highly selective vascular/endothelial system", "prevents the vast majority of (bio)therapeutics from penetrating into the
   nervous tissue"; VECTrans vectors "take advantage of endogenous cell-surface receptors naturally involved in
   Receptor-Mediated Transport (RMT)"; once "locked onto the appropriate receptor at the surface of BBB endothelial cells",
   the vector-payload complex "undergoes rapid internalisation" and reaches the brain "via transport and transcytosis".
   Drawn as ONE continuous fine-line section through a brain capillary that fills the frame: the far wall, the blood with
   its red cells, the near endothelial wall (cells, nuclei, tight junctions, receptors), the basement membrane with
   astrocyte end-feet, and the brain tissue with two neurons. Frame 0 is already complete.
   Step 1 (barrier): a drug on its own reaches the wall and is turned back.
   Step 2 (bind): a vector (V) carrying the drug locks onto a receptor and is taken up in a vesicle.
   Step 3 (cross): the vesicle crosses the cell and the complex travels on to a neuron; its track draws to its true end.
   Everything is driven by the scrubbed progress. Labels keep >= 8px clear of every stroke and dot (DR). */
var SCW=760,SCH=560;
var X0=156,X1=716,WT=88,LU=206,WB=262,BM=272;
var RX=470;/* the receptor the vector uses */
var JX=[300,440,600];/* tight junctions */
var NUC=[[226,238],[372,240],[528,236],[662,240]];
var RCP=[196,256,336,404,RX,540,644,700];
var RBC=[[214,128,0],[318,170,.6],[408,118,-.3],[520,160,.2],[640,126,-.5],[586,178,.1],[262,180,.4],[700,166,0]];
var NEU=[[598,428,15],[292,474,13]];
function neuron(n){var x=n[0],y=n[1],r=n[2],d='M'+(x+r)+' '+y+'A'+r+' '+r+' 0 1 0 '+(x-r)+' '+y+'A'+r+' '+r+' 0 1 0 '+(x+r)+' '+y;
  d+='M'+(x-r*.7)+' '+(y-r*.7)+'C'+(x-40)+' '+(y-40)+' '+(x-70)+' '+(y-60)+' '+(x-96)+' '+(y-70);
  d+='M'+(x-70)+' '+(y-60)+'l-6 -22';
  d+='M'+(x+r*.7)+' '+(y-r*.7)+'C'+(x+30)+' '+(y-40)+' '+(x+50)+' '+(y-66)+' '+(x+58)+' '+(y-96);
  d+='M'+(x+r)+' '+(y+4)+'C'+(x+50)+' '+(y+10)+' '+(x+80)+' '+(y+4)+' '+(x+104)+' '+(y+20);
  d+='M'+(x-4)+' '+(y+r)+'C'+(x-8)+' '+(y+40)+' '+(x+6)+' '+(y+60)+' '+(x-6)+' '+(y+74);
  return d}
function astro(x,y){var d='',k,A=[[-70,-92],[-22,-96],[34,-94],[78,-88],[-62,40],[60,46],[8,62]];
  for(k=0;k<A.length;k++){var ax=A[k][0],ay=A[k][1];d+='M'+(x+ax*.08)+' '+(y+ay*.08)+'Q'+(x+ax*.45+(k%2?8:-8))+' '+(y+ay*.5)+' '+(x+ax)+' '+(y+ay)}
  return d}
function wallPath(){var d='M'+X0+' '+LU+'H'+X1+'M'+X0+' '+WB+'H'+X1;JX.forEach(function(x){d+='M'+x+' '+(LU+2)+'V'+(WB-2)});return d}
function feet(){var d='M'+X0+' '+(BM+12),x;for(x=X0;x<X1;x+=56)d+='Q'+(x+28)+' '+(BM-2)+' '+Math.min(x+56,X1)+' '+(BM+12);return d}
/* the vector's track: from the vesicle's exit at the base of the wall, through the tissue, to the first neuron */
var TRACK='M'+RX+' '+(WB+10)+'C'+(RX+10)+' 330 '+(RX+70)+' 352 '+(NEU[0][0]-24)+' '+(NEU[0][1]-20);
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'150 40 576 524':'40 40 690 520')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gRel"><stop offset="0" stop-color="#ff5a4c" stop-opacity=".30"/><stop offset="1" stop-color="#ff5a4c" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wo sD" d="M'+X0+' '+WT+'H'+X1+'"/>';
  g+='<path class="wl sD" d="'+wallPath()+'"/>';
  NUC.forEach(function(n){g+='<ellipse class="wo" cx="'+n[0]+'" cy="'+n[1]+'" rx="24" ry="7"/>'});
  g+='<path class="wmd sD" d="M'+X0+' '+BM+'H'+X1+'"/><path class="wo sD" d="'+feet()+'"/>';
  NEU.forEach(function(n){g+='<path class="wmd sD" d="'+neuron(n)+'"/><circle class="nuc" cx="'+n[0]+'" cy="'+n[1]+'" r="4"/>'});
  /* an astrocyte, whose processes end in the end-feet on the vessel wall */
  g+='<path class="wo sD" d="'+astro(430,372)+'"/><circle class="nuc" cx="430" cy="372" r="3"/>';
  g+='<path class="wo sD" d="M196 520C214 500 236 498 250 486M680 540C676 512 690 496 708 488M360 548C380 530 404 528 420 514"/>';
  g+='</g>';
  g+='<g id="scRbc">';RBC.forEach(function(r){g+='<g class="rbc" transform="translate('+r[0]+' '+r[1]+') rotate('+(r[2]*20).toFixed(1)+')"><ellipse rx="17" ry="7.5"/><path d="M-8 0H8"/></g>'});g+='</g>';
  g+='<g id="scRcp">';RCP.forEach(function(x){g+='<path class="rcp'+(x===RX?' rx':'')+'" d="M'+x+' '+LU+'V'+(LU-7)+'M'+(x-5)+' '+(LU-14)+'L'+x+' '+(LU-7)+'L'+(x+5)+' '+(LU-14)+'"/>'});g+='</g>';
  g+='<circle class="halo" id="hRel" cx="'+(NEU[0][0])+'" cy="'+(NEU[0][1])+'" r="70" fill="url(#gRel)"/>';
  g+='<path class="crv" id="scCrv" d="'+TRACK+'"/>';
  g+='<circle class="ves" id="scVes" cx="'+RX+'" cy="'+(LU+14)+'" r="17"/>';
  /* the free drug (step 1) and the vector-payload complex (steps 2-3) */
  g+='<circle class="drug" id="scFree" cx="200" cy="150" r="5.5"/>';
  g+='<g id="scCx"><g transform="scale(1.45)"><path class="vec" d="M-6 -2L0 7L6 -2"/><circle class="drug" cx="0" cy="-8" r="5.5"/></g></g>';
  if(!mob){
    g+='<text class="t" x="140" y="152" text-anchor="end">BLOOD</text>';
    g+='<text class="t" x="140" y="232" text-anchor="end">ENDOTHELIAL</text><text class="t" x="140" y="247" text-anchor="end">CELLS</text>';
    g+='<text class="t" x="140" y="420" text-anchor="end">BRAIN</text>';
  }
  var ly=72,lx=mob?160:X0;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ON ITS OWN: KEPT OUT':'ON ITS OWN, THE DRUG IS KEPT OUT')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'VECTOR BINDS A RECEPTOR':'THE VECTOR BINDS A TRANSPORT RECEPTOR')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TRANSCYTOSIS TO THE BRAIN':'TRANSCYTOSIS, INTO THE BRAIN')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),crv:dl("#scCrv")[0],free:$("#scFree",svg),cx:$("#scCx",svg),ves:$("#scVes",svg),rx:$("#scRcp .rx",svg),
    rbc:$$("#scRbc .rbc",svg),hR:$("#hRel",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.7,.94);
    /* blood flows left to right the whole way through */
    E.rbc.forEach(function(el,i){var r=RBC[i],x=r[0]+p*90;if(x>X1-18)x-=(X1-X0-36);el.setAttribute("transform","translate("+x.toFixed(1)+" "+r[1]+") rotate("+(r[2]*20).toFixed(1)+")")});
    /* 1. the free drug drifts to the wall and is turned back */
    var a=sm(s1/.55),bk=sm((s1-.55)/.45),fx=lerp(lerp(184,252,a),226,bk),fy=lerp(lerp(140,LU-8,a),170,bk);
    E.free.setAttribute("cx",fx.toFixed(1));E.free.setAttribute("cy",fy.toFixed(1));op(E.free,b*(1-seg(p,.32,.4)));
    /* 2. the vector-payload complex arrives and locks onto its receptor; a vesicle forms around it */
    var c2=sm(s2/.6),x=lerp(330,RX,c2),y=lerp(128,LU-26,c2),vs=sm((s2-.62)/.38);
    y=lerp(y,LU+14,vs);
    /* 3. the vesicle crosses the cell; the complex leaves at the base and follows its track to the neuron */
    var t3=sm(s3/.3),tr=sm((s3-.3)/.7);
    y=lerp(y,WB-14,t3);
    var cvx=x,cvy=y;
    if(E.crv){var L=E.crv[1];E.crv[0].style.strokeDashoffset=(L*(1-tr)).toFixed(1);op(E.crv[0],b*(s3>.3?1:0));
      if(tr>0){var pt=E.crv[0].getPointAtLength(L*tr);cvx=pt.x;cvy=pt.y}}
    E.cx.setAttribute("transform","translate("+cvx.toFixed(1)+" "+cvy.toFixed(1)+")");
    op(E.cx,b*seg(p,.36,.42));
    E.ves.setAttribute("cy",(y-2).toFixed(1));op(E.ves,b*vs*(1-sm((s3-.26)/.1)));
    if(E.rx)E.rx.classList.toggle("on",s2>.55&&s3<.3);
    op(E.hR,b*sm((tr-.75)/.25));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}
