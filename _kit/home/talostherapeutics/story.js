/* The story scene (BL/BY/DB/CX): Talos's CK2 thesis drawn as ONE continuous engraved scene that stays on screen for all
   three steps. Top: the blood–brain barrier, a row of endothelial cells. Left: an astrocyte (glia) with one end-foot on
   the barrier; right: a pyramidal neuron with its axon and mitochondria. Step 1 the cells engrave in, inflammatory
   signals spread from the astrocyte and the neuron's mitochondria run dim. Step 2 CK2 (drawn as its alpha2-beta2
   tetramer) lights up inside both cells. Step 3 brain-permeable inhibitor molecules cross the barrier and reach both
   CK2 sites: the inflammation fades and the mitochondria brighten. Source: the project summary of NIH SBIR
   1R43AG099398-01 (CK2 as a target for blocking inflammation in glia and boosting mitochondrial function in neurons;
   a brain-permeable CK2 inhibitor). */
var SCW=760,SCH=520,AX=228,AY=318,NX=530,NY=262,BBY=74;
var f1=function(n){return (+n).toFixed(1)};
var INF=(function(){var a=[],i,n=22;for(i=0;i<n;i++){var th=i*(Math.PI*2/n)+((i*37)%7-3)*.05;a.push({th:th,r0:46+((i*53)%5)*6,r1:120+((i*29)%6)*12,s:2+((i*17)%3)*.7,d:(i%5)*.06})}return a})();
var MOL=(function(){var a=[],i;for(i=0;i<10;i++){var toA=i<5;a.push({x0:70+i*66+((i*31)%5)*4,tx:toA?AX+(i-2)*7:NX+(i-7)*7,ty:toA?AY:NY+8,d:(i%5)*.07,s:7})}return a})();
var BOMB=(function(){var p0=[NX,NY+30],p1=[NX+40,NY+168],p2=[NX+182,NY+204],a=[],k;
  for(k=0;k<7;k++){var t=.16+k*.12,mt=1-t,x=mt*mt*p0[0]+2*mt*t*p1[0]+t*t*p2[0],y=mt*mt*p0[1]+2*mt*t*p1[1]+t*t*p2[1],
    dx=2*mt*(p1[0]-p0[0])+2*t*(p2[0]-p1[0]),dy=2*mt*(p1[1]-p0[1])+2*t*(p2[1]-p1[1]);a.push({x:x,y:y,r:Math.atan2(dy,dx)*180/Math.PI})}
  return {p0:p0,p1:p1,p2:p2,mito:a}})();
function hexd(s){var g='',i;for(i=0;i<6;i++){var a=-Math.PI/2+i*Math.PI/3;g+=(i?'L':'M')+f1(s*Math.cos(a))+' '+f1(s*Math.sin(a))}return g+'Z'}
function ck2(x,y,id){return '<g class="ck" id="'+id+'" transform="translate('+x+' '+y+')"><circle class="ckr" r="17"/><circle class="cka" cx="-6" cy="-6" r="5.2"/><circle class="cka" cx="6" cy="6" r="5.2"/><circle class="ckb" cx="6" cy="-6" r="3.8"/><circle class="ckb" cx="-6" cy="6" r="3.8"/><circle class="ckx" r="24"/></g>'}
function brainScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: corner ticks and the two standing captions ---- */
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">CK2 IN THE ALZHEIMER’S BRAIN</text><text class="t tr" x="742" y="14" text-anchor="end">TALOS THERAPEUTICS</text></g>';
  /* ---- the blood–brain barrier: a row of endothelial cells with their nuclei ---- */
  g+='<g id="scBbb">';var bb='',nu='';
  for(i=0;i<8;i++){var x0=34+i*87,x1=x0+83;bb+='M'+(x0+12)+' '+(BBY-12)+'H'+(x1-12)+'Q'+x1+' '+(BBY-12)+' '+x1+' '+BBY+'Q'+x1+' '+(BBY+12)+' '+(x1-12)+' '+(BBY+12)+'H'+(x0+12)+'Q'+x0+' '+(BBY+12)+' '+x0+' '+BBY+'Q'+x0+' '+(BBY-12)+' '+(x0+12)+' '+(BBY-12)+'Z';
    nu+='<ellipse class="bn" cx="'+(x0+41.5)+'" cy="'+BBY+'" rx="12" ry="4.2"/>'}
  g+='<path class="bc sD" d="'+bb+'"/>'+nu+'<text class="t" x="34" y="'+(BBY-24)+'">BLOOD</text><text class="t" x="34" y="'+(BBY+34)+'">BRAIN</text></g>';
  /* ---- the astrocyte: soma, branching processes, one end-foot on the barrier ---- */
  g+='<g id="scAst">';var ap='';
  for(i=0;i<9;i++){var a=(-Math.PI/2)+(i+1)*(Math.PI*2/10)+((i*13)%5-2)*.04,L=78+((i*41)%5)*9,
    sx=AX+28*Math.cos(a),sy=AY+28*Math.sin(a),ex=AX+L*Math.cos(a),ey=AY+L*Math.sin(a),
    mx=AX+(L*.55)*Math.cos(a+.12),my=AY+(L*.55)*Math.sin(a+.12),
    fx=AX+(L*.62)*Math.cos(a)+22*Math.cos(a+.7),fy=AY+(L*.62)*Math.sin(a)+22*Math.sin(a+.7),
    gx=AX+(L*.74)*Math.cos(a)+18*Math.cos(a-.75),gy=AY+(L*.74)*Math.sin(a)+18*Math.sin(a-.75);
    ap+='M'+f1(sx)+' '+f1(sy)+'Q'+f1(mx)+' '+f1(my)+' '+f1(ex)+' '+f1(ey);
    ap+='M'+f1(AX+(L*.62)*Math.cos(a))+' '+f1(AY+(L*.62)*Math.sin(a))+'L'+f1(fx)+' '+f1(fy);
    ap+='M'+f1(AX+(L*.74)*Math.cos(a))+' '+f1(AY+(L*.74)*Math.sin(a))+'L'+f1(gx)+' '+f1(gy);}
  ap+='M'+AX+' '+(AY-28)+'C'+(AX-6)+' '+(AY-110)+' '+(AX+14)+' '+(BBY+70)+' '+(AX+8)+' '+(BBY+20);
  ap+='M'+(AX-14)+' '+(BBY+16)+'Q'+(AX+8)+' '+(BBY+26)+' '+(AX+30)+' '+(BBY+16);
  g+='<path class="ap sD" d="'+ap+'"/><circle class="soma sD" cx="'+AX+'" cy="'+AY+'" r="28"/><circle class="sfill" cx="'+AX+'" cy="'+AY+'" r="27"/>';
  g+='<text class="t" x="'+(AX-108)+'" y="'+(AY+124)+'">ASTROCYTE · GLIA</text></g>';
  /* ---- inflammatory signals spreading from the astrocyte ---- */
  g+='<g id="scInf">';INF.forEach(function(d,k){g+='<circle class="inf" data-k="'+k+'" r="'+d.s+'" cx="'+AX+'" cy="'+AY+'"/>'});g+='</g>';
  /* ---- the neuron: pyramidal soma, apical and basal dendrites, axon with mitochondria ---- */
  var B=BOMB,np='';
  np+='M'+NX+' '+(NY-26)+'C'+(NX+6)+' '+(NY-80)+' '+(NX-4)+' '+(NY-118)+' '+(NX+6)+' '+(NY-152);
  np+='M'+(NX+2)+' '+(NY-92)+'Q'+(NX+30)+' '+(NY-112)+' '+(NX+58)+' '+(NY-128)+'M'+(NX+1)+' '+(NY-118)+'Q'+(NX-26)+' '+(NY-136)+' '+(NX-48)+' '+(NY-150);
  np+='M'+(NX+4)+' '+(NY-140)+'L'+(NX+30)+' '+(NY-158)+'M'+(NX-20)+' '+(NY+22)+'Q'+(NX-62)+' '+(NY+30)+' '+(NX-92)+' '+(NY+62)+'M'+(NX-56)+' '+(NY+32)+'L'+(NX-74)+' '+(NY+12);
  np+='M'+(NX+20)+' '+(NY+22)+'Q'+(NX+64)+' '+(NY+18)+' '+(NX+96)+' '+(NY-6)+'M'+(NX+66)+' '+(NY+14)+'L'+(NX+84)+' '+(NY+38);
  np+='M'+(NX-10)+' '+(NY+24)+'Q'+(NX-30)+' '+(NY+70)+' '+(NX-28)+' '+(NY+104);
  g+='<g id="scNeu"><path class="ap sD" d="'+np+'"/>';
  g+='<path class="ax sD" d="M'+B.p0[0]+' '+B.p0[1]+'Q'+B.p1[0]+' '+B.p1[1]+' '+B.p2[0]+' '+B.p2[1]+'"/>';
  g+='<path class="soma sD" d="M'+NX+' '+(NY-30)+'C'+(NX+10)+' '+(NY-10)+' '+(NX+30)+' '+(NY+14)+' '+(NX+26)+' '+(NY+24)+'C'+(NX+14)+' '+(NY+34)+' '+(NX-14)+' '+(NY+34)+' '+(NX-26)+' '+(NY+24)+'C'+(NX-30)+' '+(NY+14)+' '+(NX-10)+' '+(NY-10)+' '+NX+' '+(NY-30)+'Z"/>';
  g+='<path class="sfill" d="M'+NX+' '+(NY-28)+'C'+(NX+10)+' '+(NY-9)+' '+(NX+28)+' '+(NY+14)+' '+(NX+24)+' '+(NY+23)+'C'+(NX+13)+' '+(NY+32)+' '+(NX-13)+' '+(NY+32)+' '+(NX-24)+' '+(NY+23)+'C'+(NX-28)+' '+(NY+14)+' '+(NX-10)+' '+(NY-9)+' '+NX+' '+(NY-28)+'Z"/>';
  g+='<g id="scMito">';B.mito.forEach(function(m){g+='<g transform="translate('+f1(m.x)+' '+f1(m.y)+') rotate('+f1(m.r)+')"><ellipse class="mt" rx="9.5" ry="4"/><path class="mtc" d="M-6 0q1.5-3 3 0t3 0 3 0"/></g>'});g+='</g>';
  g+='<text class="t" x="'+(NX+70)+'" y="'+(NY-60)+'">NEURON</text><text class="t" x="'+(B.p2[0]-118)+'" y="'+(B.p2[1]+30)+'">MITOCHONDRIA</text></g>';
  /* ---- CK2 in both cells ---- */
  g+=ck2(AX,AY,"ckA")+ck2(NX,NY+8,"ckN");
  /* ---- brain-permeable inhibitor molecules ---- */
  g+='<g id="scMol">';MOL.forEach(function(m,k){g+='<g class="ml" data-k="'+k+'"><path class="mh" d="'+hexd(m.s)+'"/><circle class="mc" r="2.4"/></g>'});g+='</g>';
  /* ---- step labels, in the clear band at the foot; only one is ever visible (CY) ---- */
  g+='<g id="lb1"><text class="a" x="18" y="514">INFLAMED GLIA · ENERGY-STARVED NEURON</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">CK2 · ACTIVE IN BOTH CELLS</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">BRAIN-PERMEABLE INHIBITOR · CK2 BLOCKED</text></g>';
  return g+'</svg>';
}
function scene(){return brainScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    bbb:dl("#scBbb .sD"),bbx:$$("#scBbb ellipse,#scBbb text",svg),
    ast:dl("#scAst .sD"),neu:dl("#scNeu .sD"),fills:$$(".sfill",svg),lbls:$$("#scAst text,#scNeu text",svg),
    inf:$$(".inf",svg).map(function(el){return {el:el,d:INF[+el.getAttribute("data-k")]}}),
    mito:$$("#scMito > g",svg),
    ck:[$("#ckA",svg),$("#ckN",svg)],
    mol:$$(".ml",svg).map(function(el){return {el:el,m:MOL[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=Math.min(1,Math.max(b*b,seg(p,0,.18)*1.2));
    draw(E.bbb,grow);E.bbx.forEach(function(el){op(el,b*grow*.9)});
    draw(E.ast,grow);draw(E.neu,Math.min(1,grow*1.05));
    E.lbls.forEach(function(el){op(el,b*seg(p,.04,.2))});
    var heal=seg(p,.8,.96);
    E.fills.forEach(function(el){op(el,b*(.55+.45*grow))});
    /* inflammatory signals pulse outward from the astrocyte, then fade as CK2 is blocked */
    var on=Math.max(b>0?seg(p,.02,.16):0,0)*(1-heal);
    E.inf.forEach(function(I){var c=I.d,t=((p*3.2+c.d*4)%1),r=c.r0+(c.r1-c.r0)*t;
      I.el.setAttribute("cx",f1(AX+r*Math.cos(c.th)));I.el.setAttribute("cy",f1(AY+r*Math.sin(c.th)));
      op(I.el,b*on*(1-t*.75)*.95)});
    /* mitochondria: dim, then brighten */
    E.mito.forEach(function(m,i){op(m,b*grow*(.32+.68*Math.min(1,Math.max(0,heal*1.3-i*.04))));m.classList.toggle("lit",heal>.5)});
    /* CK2 appears in both cells; once blocked, its outer ring closes in the accent */
    var ckOn=seg(p,.34,.48),blk=seg(p,.84,.95);
    E.ck.forEach(function(c){if(!c)return;op(c,b*Math.max(ckOn*.999,0.0001));c.classList.toggle("blk",blk>.4);
      var x=c.querySelector(".ckx");if(x){x.setAttribute("r",f1(36-12*ckOn));x.style.opacity=(ckOn*(1-blk)*.8+blk).toFixed(3)}});
    /* inhibitor molecules come down, cross the barrier and reach CK2 */
    var mIn=seg(p,.6,.9);
    E.mol.forEach(function(M){var m=M.m,t=Math.min(1,Math.max(0,(mIn-m.d)*1.5)),x,y;
      if(t<.45){var u=t/.45;x=m.x0;y=20+(BBY+30-20)*u}else{var u2=(t-.45)/.55,e=u2*u2*(3-2*u2);x=m.x0+(m.tx-m.x0)*e;y=BBY+30+(m.ty-(BBY+30))*e}
      M.el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") rotate("+f1(t*120)+")");
      op(M.el,b*Math.min(1,t*5)*(1-Math.max(0,(t-.9)/.1)))});
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}
