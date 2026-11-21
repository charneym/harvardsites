/* the story scene (BL/BY/DB): ONE engraved anatomical plate of the digestive tract, kept on screen for all three steps:
   stomach, the coiled small intestine, and the colon framing them. Step 1: a BKR-017 tablet (butyrate in a sustained-release
   core under the Phloral(TM) colon-targeting coating) passes the stomach and small intestine intact. Step 2: in the colon the
   coating opens (colonic amylase and pH above 7.4) and butyrate is released over hours. Step 3: butyrate stimulates the L-cells
   of the lower gut, which secrete GLP-1 and other gut hormones (PYY, GLP-2, oxyntomodulin) into the circulation.
   Sources: biokier.com (Our Approach, Formulation). Schematic; geometry is illustrative. Driven by the scrubbed story progress. */
var GUT=(function(){
  /* small intestine centreline: duodenum down from the pylorus, then six serpentine rows, then to the caecum */
  var SI=[[392,104],[352,128],[330,170],[336,214],[380,226],[590,226]];
  var rows=[226,268,310,352,394,436],i,y,x0=214,x1=590;
  var siD='M426 69C380 96 326 150 332 196S356 226 400 226';
  for(i=0;i<rows.length;i++){y=rows[i];var L=(i%2===0);
    siD+=L?'L'+x1+' '+y:'L'+x0+' '+y;
    if(i<rows.length-1){var yn=rows[i+1];siD+=L?'C'+(x1+28)+' '+y+' '+(x1+28)+' '+yn+' '+x1+' '+yn:'C'+(x0-28)+' '+y+' '+(x0-28)+' '+yn+' '+x0+' '+yn}}
  /* last row runs right-to-left (i=5 is odd), then to the caecum */
  siD+='C176 436 150 452 132 470';
  var coD='M118 488C112 470 110 452 110 430L110 182C110 160 124 148 146 148L664 148C686 148 698 160 698 182L698 430C698 470 680 500 640 508C600 516 572 500 556 520';
  var stD='M520 0L520 26C520 40 548 44 590 46C640 50 666 74 660 106C654 140 610 150 556 140C500 130 450 118 412 108L392 104';
  var stO='M508 0L508 24C506 34 488 40 470 46C430 58 404 78 396 96L388 112C404 120 440 128 500 140C560 152 640 162 676 118C700 88 690 52 656 36C628 24 588 22 556 22L532 22L532 0';
  return {siD:siD,coD:coD,stD:stD,stO:stO};
})();
/* the stomach sits above the transverse colon: drawn smaller and lifted */
var STK=.74,STX=136,STY=-8,STT='translate('+STX+' '+STY+') scale('+STK+')';
function scene(){
  var mob=MOBILE(),g='',i,G=GUT;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="bkg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9cbdea" stop-opacity=".75"/><stop offset="1" stop-color="#9cbdea" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="bkh" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff8a80" stop-opacity=".8"/><stop offset="1" stop-color="#ff8a80" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the colon: a wide tube with haustra */
  g+='<path class="tw sD" d="'+G.coD+'" stroke-width="52"/><path class="ti" d="'+G.coD+'" stroke-width="49"/>';
  g+='<path class="hs" d="'+G.coD+'" stroke-width="49" stroke-dasharray="1.4 26"/>';
  /* stomach, drawn as an outlined bag with rugae */
  g+='<g transform="'+STT+'"><path class="bag sD" d="'+G.stO+'"/>';
  for(i=0;i<5;i++)g+='<path class="ru sD" d="M'+(430+i*44)+' '+(70+i*2)+'c18 14 6 34 26 50"/>';
  g+='</g>';
  /* small intestine: a narrow tube coiled inside the colon frame */
  g+='<path class="tw sD" d="'+G.siD+'" stroke-width="25"/><path class="ti" d="'+G.siD+'" stroke-width="22.5"/>';
  g+='<path class="cl" d="'+G.siD+'"/>';
  /* L-cells: small cells in the colon lining (they light up in step 3) */
  g+='<g id="lcs"></g>';
  if(!mob){
    g+='<path class="ldr sD" d="M662 50L732 50"/><text x="740" y="54">STOMACH</text>';
    g+='<path class="ldr sD" d="M402 310V532H436"/><text x="444" y="536">SMALL INTESTINE</text>';
    g+='<path class="ldr sD" d="M724 300H760"/><text x="760" y="290" text-anchor="end">COLON</text>';
  }else{
    g+='<text x="780" y="104" text-anchor="end">STOMACH</text>';
    g+='<text x="780" y="548" text-anchor="end">SMALL INTESTINE</text>';
    g+='<text x="24" y="548">COLON</text>';
  }
  g+='</g>';
  g+='<g id="scMove">';
  /* butyrate released in the colon */
  for(i=0;i<36;i++)g+='<circle class="bu" r="2.6"/>';
  /* hormones leaving the L-cells */
  for(i=0;i<22;i++)g+='<circle class="hm" r="3"/>';
  /* the tablet: a caplet with its coating */
  g+='<g id="tab"><circle class="tgl" r="26" fill="url(#bkg)"/><rect class="tco" x="-15" y="-7.5" width="30" height="15" rx="7.5"/><rect class="tcr" x="-12.5" y="-5" width="25" height="10" rx="5"/></g>';
  g+='<text class="a" id="lb1" x="24" y="'+(mob?-14:36)+'">BKR-017 · COATING INTACT</text>';
  g+='<text class="a" id="lb2" x="24" y="'+(mob?-14:36)+'">PHLORAL™ OPENS · BUTYRATE RELEASED</text>';
  g+='<text class="r" id="lb3" x="24" y="'+(mob?-14:36)+'">L-CELLS · GLP-1 AND PYY SECRETED</text>';
  g+='</g></svg>';
  return g;
}
function storyDraw(svg){
  var NS="http://www.w3.org/2000/svg",dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var si=$$("#scBase .ti",svg)[1],co=$$("#scBase .ti",svg)[0],st=document.createElementNS(NS,"path");
  st.setAttribute("d",GUT.stD);
  var LS=si.getTotalLength(),LC=co.getTotalLength(),LT=st.getTotalLength();
  /* L-cells along the ascending and transverse colon, on the inner wall */
  var lcG=$("#lcs",svg),LC_=[],i;
  for(i=0;i<16;i++){var s=.06+i*.044,pt=co.getPointAtLength(LC*s),p2=co.getPointAtLength(LC*s+1),dx=p2.x-pt.x,dy=p2.y-pt.y,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l,side=i%2?1:-1;
    var cx=pt.x+nx*side*19,cy=pt.y+ny*side*19,c=document.createElementNS(NS,"ellipse");
    c.setAttribute("cx",cx.toFixed(1));c.setAttribute("cy",cy.toFixed(1));c.setAttribute("rx","4.2");c.setAttribute("ry","3");c.setAttribute("class","lc");
    c.setAttribute("transform","rotate("+(Math.atan2(dy,dx)*57.3).toFixed(1)+" "+cx.toFixed(1)+" "+cy.toFixed(1)+")");lcG.appendChild(c);
    LC_.push({el:c,x:cx,y:cy,nx:nx*side,ny:ny*side})}
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .ti, #scBase .hs, #scBase .cl",svg),mv:$("#scMove",svg),tab:$("#tab",svg),tco:$(".tco",svg),tgl:$(".tgl",svg),
    bu:$$(".bu",svg),hm:$$(".hm",svg),b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg)};
  var BU=E.bu.map(function(el,i){return {s:.05+(i*.618)%1*.5,o:((i*.37)%1-.5)*30,d:(i*.29)%1}});
  var HM=E.hm.map(function(el,i){var c=LC_[(i*5)%LC_.length];return {c:c,d:(i*.41)%1,r:30+((i*.73)%1)*40}});
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ez(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
  function at(path,L,t){var a=path.getPointAtLength(L*t),b=path.getPointAtLength(Math.min(L,L*t+1.5));return [a.x,a.y,Math.atan2(b.y-a.y,b.x-a.x)*57.3]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=ez(seg(p,.03,.3)),s2=ez(seg(p,.34,.62)),dis=seg(p,.42,.6),s3=seg(p,.66,.95),q;
    /* route: oesophagus and stomach (0-.18), small intestine (.18-1) in step 1; then the colon in step 2 */
    if(s2<=0){if(s1<.18){q=at(st,LT,s1/.18);q=[STX+q[0]*STK,STY+q[1]*STK,q[2]]}else q=at(si,LS,(s1-.18)/.82)}
    else q=at(co,LC,.02+s2*.36);
    E.tab.setAttribute("transform","translate("+q[0].toFixed(1)+" "+q[1].toFixed(1)+") rotate("+q[2].toFixed(1)+")");
    op(E.tab,b*seg(p,.0,.05)*(1-seg(p,.6,.7)));
    op(E.tco,1-dis);op(E.tgl,.5+.5*dis);
    E.bu.forEach(function(el,i){var B=BU[i],t=seg(dis,B.d*.5,B.d*.5+.5),pos=.02+s2*.36-t*B.s*.3+t*B.s*.35,pt=co.getPointAtLength(LC*Math.max(.01,Math.min(.62,pos))),
      p2=co.getPointAtLength(LC*Math.max(.01,Math.min(.62,pos))+1),dx=p2.x-pt.x,dy=p2.y-pt.y,l=Math.hypot(dx,dy)||1;
      el.setAttribute("cx",(pt.x-dy/l*B.o*t).toFixed(1));el.setAttribute("cy",(pt.y+dx/l*B.o*t).toFixed(1));
      op(el,b*t*(1-.55*s3))});
    LC_.forEach(function(c,i){var on=seg(s3,i*.03,i*.03+.25);c.el.style.fill=on>.5?"#ff8a80":"";c.el.style.opacity=(b*(.55+.45*on)).toFixed(3)});
    E.hm.forEach(function(el,i){var H=HM[i],t=seg(s3,.15+H.d*.45,.15+H.d*.45+.4);
      el.setAttribute("cx",(H.c.x+H.c.nx*H.r*t).toFixed(1));el.setAttribute("cy",(H.c.y+H.c.ny*H.r*t).toFixed(1));op(el,b*Math.min(1,t*5)*(1-seg(t,.8,1)*.6))});
    op(E.b1,b*seg(p,.02,.08)*(1-seg(p,.3,.34)));op(E.b2,b*seg(p,.36,.42)*(1-seg(p,.63,.67)));op(E.b3,b*seg(p,.69,.76));
  };
}
