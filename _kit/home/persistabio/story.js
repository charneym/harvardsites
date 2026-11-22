/* The story scene (DB/BL/BY): how the O2Line system works (persistabio.com Technology; Nature Communications 2025 release),
   as ONE continuous cross-section in fine line, filling the frame: the skin above, the implantable electrochemical oxygen
   generator (iEOG), the oxygen line running through the middle of the capsule, the islets packed around it inside the
   immunoisolating membrane, and a capillary below. Frame 0 is already complete.
   Step 1 (oxygen): water from the tissue enters the iEOG, oxygen runs down the line and reaches the islets, which light.
   Step 2 (shield): immune cells arrive at the membrane and stop there; the membrane lights.
   Step 3 (regulate): glucose rises from the capillary into the capsule; the islets answer with insulin, which passes out into
   the blood. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var CX0=178,CX1=724,CT=222,CB=346,CR=62;        /* capsule outer wall */
var LY=284,LX0=126,LX1=676;                     /* oxygen line: centre y, from the iEOG to its tip */
var GX0=30,GX1=126,GT=232,GB=336;               /* iEOG */
var VT=424,VB=470;                              /* capillary walls */
var ISL=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<9;i++){a.push({x:232+i*52+R()*10,y:252+R()*4,r:15+R()*3});a.push({x:252+i*50+R()*10,y:318-R()*4,r:15+R()*3})}
  return a.filter(function(q){return q.x<682})})();
var IMM=[{x:470,y:110},{x:560,y:96},{x:650,y:118},{x:600,y:528},{x:680,y:520}];
function islet(q,k){ /* an islet: a cluster of cells inside its boundary */
  var g='<g class="isl" data-k="'+k+'" transform="translate('+q.x.toFixed(1)+' '+q.y.toFixed(1)+')"><circle class="ib" r="'+q.r.toFixed(1)+'"/>',i;
  for(i=0;i<6;i++){var a=i*Math.PI/3+k,rr=q.r*.52;g+='<circle class="ic" cx="'+(Math.cos(a)*rr).toFixed(1)+'" cy="'+(Math.sin(a)*rr).toFixed(1)+'" r="'+(q.r*.36).toFixed(1)+'"/>'}
  return g+'<circle class="ic" r="'+(q.r*.34).toFixed(1)+'"/></g>';
}
function capPath(x0,y0,x1,y1,r){return 'M'+(x0+r)+' '+y0+'H'+(x1-r)+'A'+r+' '+r+' 0 0 1 '+(x1-r)+' '+y1+'H'+(x0+r)+'A'+r+' '+r+' 0 0 1 '+(x0+r)+' '+y0+'Z'}
function vesScene(o){
  var g='',i;
  /* on phones the frame is a third of the width: keep only the labels that carry the story (CY) */
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* ---- skin: the surface, the epidermis and a few dermal fibres ---- */
  g+='<path class="wl sD" d="M0 46C90 38 150 54 240 46S400 36 490 46 650 54 760 44"/>';
  g+='<path class="wo sD" d="M0 66C80 74 140 58 230 66S390 76 480 66 650 58 760 68"/>';
  g+='<path class="en sD" d="M40 82c40 6 70 2 110 6M300 86c50-4 90 4 140 0M560 84c40 4 80-2 150 4"/>';
  g+=T('t',24,30,'SKIN',null,1);
  g+=T('t',24,124,'TISSUE UNDER THE SKIN');
  /* ---- the iEOG ---- */
  g+='<path class="wl sD" d="M'+GX0+' '+GT+'H'+GX1+'V'+GB+'H'+GX0+'Z"/>';
  g+='<path class="en sD" d="M'+(GX0+26)+' '+(GT+16)+'V'+(GB-16)+'M'+(GX1-26)+' '+(GT+16)+'V'+(GB-16)+'"/>';
  g+='<path class="wo sD" d="M'+(GX0+12)+' '+(GT+16)+'H'+(GX0+26)+'M'+(GX1-26)+' '+(GT+16)+'H'+(GX1-12)+'"/>';
  g+=T('t',GX0,GT-30,'iEOG',null,1);
  g+=T('t',GX0,GT-14,'OXYGEN GENERATOR');
  /* ---- the capsule: outer wall and inner face of the membrane ---- */
  g+='<path class="wl sD" id="mOut" d="'+capPath(CX0,CT,CX1,CB,CR)+'"/>';
  g+='<path class="wo sD" d="'+capPath(CX0+10,CT+10,CX1-10,CB-10,CR-10)+'"/>';
  /* ---- the oxygen line ---- */
  g+='<path class="wl sD" d="M'+LX0+' '+(LY-8)+'H'+LX1+'A8 8 0 0 1 '+LX1+' '+(LY+8)+'H'+LX0+'"/>';
  g+=T('t',CX0+10,CT-16,'IMMUNOISOLATING MEMBRANE');
  g+=T('t',CX0+40,CB+34,o.mob?'ISLETS':'ISLETS AROUND THE OXYGEN LINE',null,1);
  /* ---- the capillary below, with a few red cells ---- */
  g+='<path class="wl sD" d="M0 '+VT+'C150 '+(VT-8)+' 300 '+(VT+8)+' 450 '+VT+'S650 '+(VT-6)+' 760 '+(VT+2)+'"/>';
  g+='<path class="wl sD" d="M0 '+VB+'C150 '+(VB-8)+' 300 '+(VB+8)+' 450 '+VB+'S650 '+(VB-6)+' 760 '+(VB+2)+'"/>';
  [70,190,330,470,610,720].forEach(function(x,k){g+='<ellipse class="rbc" cx="'+x+'" cy="'+(VT+23+(k%2?4:-3))+'" rx="13" ry="7"/>'});
  g+=T('t',24,VB+30,'CAPILLARY',null,1);
  g+='</g>';
  /* ---- islets ---- */
  g+='<g id="scIsl">';ISL.forEach(function(q,k){g+=islet(q,k)});g+='</g>';
  /* ---- moving particles: water into the iEOG, oxygen down the line, immune cells, glucose and insulin ---- */
  g+='<g id="scH2o">';for(i=0;i<4;i++)g+='<g class="pt h2o"><path d="M0 -6C3 -2 4 1 4 2.5A4 4 0 0 1 -4 2.5C-4 1 -3 -2 0 -6Z"/></g>';g+='</g>';
  g+='<g id="scO2">';for(i=0;i<14;i++)g+='<g class="pt o2"><circle r="3.4"/></g>';g+='</g>';
  g+='<g id="scImm">';IMM.forEach(function(){g+='<g class="imm"><circle class="mb" r="15"/><circle class="nu" cx="2" cy="-1" r="7"/></g>'});g+='</g>';
  g+='<g id="scGlu">';for(i=0;i<7;i++)g+='<g class="pt glu"><path d="M-5 -3L0 -6L5 -3L5 3L0 6L-5 3Z"/></g>';g+='</g>';
  g+='<g id="scIns">';for(i=0;i<9;i++)g+='<g class="pt ins"><circle r="3"/></g>';g+='</g>';
  /* ---- step labels, in the clear band at the foot of the scene ---- */
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="'+(o.mob?20:300)+'" y="'+ly+'">OXYGEN FROM TISSUE MOISTURE</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(o.mob?20:300)+'" y="'+ly+'">NO IMMUNOSUPPRESSION NEEDED</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(o.mob?20:300)+'" y="'+ly+'">GLUCOSE IN · INSULIN OUT</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .rbc",svg),isl:$$("#scIsl .isl",svg),
    h2o:$$("#scH2o .pt",svg),o2:$$("#scO2 .pt",svg),imm:$$("#scImm .imm",svg),glu:$$("#scGlu .pt",svg),ins:$$("#scIns .pt",svg),
    mem:$("#mOut",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function at(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  function cl(t){return t<0?0:t>1?1:t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var ox=seg(p,.06,.32),sh=seg(p,.36,.62),rg=seg(p,.68,.96);
    /* islets are always drawn; they light as oxygen reaches them, and again when they answer the glucose */
    E.isl.forEach(function(el,k){var q=ISL[k],reach=(q.x-CX0)/(LX1-CX0);op(el,b);
      el.classList.toggle("on",(ox*1.25-reach*.9>.25&&sh<.05)||rg>.42)});
    /* 1. water drops into the iEOG; oxygen runs down the line, then out to the islets */
    E.h2o.forEach(function(el,k){var t=cl(ox*1.6-k*.18);var x=GX0+18+k*20,y=GT-60+t*70;at(el,x,y);op(el,b*(t>0&&t<1?Math.min(1,t*5,(1-t)*5):0))});
    E.o2.forEach(function(el,k){var t=cl(ox*1.5-k*.05);
      if(t<=0||sh>.9){op(el,0);return}
      var u=Math.min(1,t/.7),x=GX1+(LX1-12-GX1)*((k/14)*.85+.08)*u+ (1-u)*0,y=LY,side=k%2?1:-1,w=cl((t-.7)/.3);
      x=GX1+((k+1)/15)*(LX1-12-GX1)*u;y=LY+side*w*24;at(el,x,y);op(el,b*(1-sh)*(w<1?1:.6))});
    /* 2. immune cells arrive and stop at the membrane */
    E.imm.forEach(function(el,k){var q=IMM[k],t=cl(sh*1.4-k*.07),top=q.y<300,ty=top?CT-19:CB+19;
      var y=q.y+(ty-q.y)*(1-Math.pow(1-t,3));at(el,q.x,y);op(el,b*Math.min(1,t*4)*(1-rg));el.classList.toggle("on",t>.95)});
    if(E.mem)E.mem.classList.toggle("on",sh>.62&&rg<.05);
    /* 3. glucose rises from the capillary into the capsule; insulin falls from the islets into the blood */
    E.glu.forEach(function(el,k){var t=cl(rg*1.6-k*.08),x=240+k*66,y0=VT+22,y1=CB-26;at(el,x,y0+(y1-y0)*t);op(el,b*(t>0?Math.min(1,t*6,(1-t)*8+.2):0))});
    E.ins.forEach(function(el,k){var t=cl(rg*1.8-.45-k*.05),q=ISL[(k*2+1)%ISL.length],x=q.x,y0=q.y+10,y1=VT+26+(k%3)*6;
      at(el,x+Math.sin(k+t*3)*4,y0+(y1-y0)*t);op(el,b*(t>0?Math.min(1,t*6):0))});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.32,.37)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
