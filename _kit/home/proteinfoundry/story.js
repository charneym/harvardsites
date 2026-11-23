/* The story scene (DB/BL): how Protein Foundry makes a vial of chemokine (proteinfoundry.com Quality Assurance and
   Custom Production), as ONE continuous scene in fine line, filling the frame: the plasmid and the E. coli culture that
   expresses the protein, the chromatography column it is refolded and purified through, and the verification bench where
   the lot is checked before it ships. Frame 0 is already complete. Step 1 (express): the plasmid feeds the culture and
   cells fill the flask. Step 2 (refold): material runs down the column and the unfolded chain closes into the chemokine
   fold with its two disulfides. Step 3 (verify): the chromatogram draws a single sharp peak, the five checks tick, and the
   vial fills. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
/* --- plasmid --- */
var PLX=96,PLY=92,PLR=38;
/* --- flask --- */
var FX=166,FNT=152,FNB=206,FBY=470,FHW=116,FNW=17;
/* --- column --- */
var CX=382,CTY=126,CBY=446,CHW=34,CBED=214;
var TBX=382,TBY=466,TBW=17,TBH=62;        /* fraction tube under the column */
/* --- verification bench --- */
var PRX=610,PRY=178,PRS=1.3;             /* the folded chemokine */
var TRX0=506,TRX1=748,TRY=352;            /* chromatogram baseline */
var CKX=506,CKY=406,CKD=21;               /* the five checks */
var VLX=700,VLY=430,VLW=40,VLH=76;        /* the vial */
var CHK=["PURITY","IDENTITY","FOLD","ACTIVITY","ENDOTOXIN"];
var NCELL=14;
var CELL=(function(){var s=29,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<NCELL;i++){var u=R(),v=R();a.push({u:u,v:v,ph:R()*6.283})}return a})();
var NDROP=7;
function arrow(x1,y1,x2,y2,cls){ /* a beta strand drawn as a flat arrow */
  var dx=x2-x1,dy=y2-y1,L=Math.sqrt(dx*dx+dy*dy),ux=dx/L,uy=dy/L,nx=-uy,ny=ux,w=5.5,hw=11,hl=17;
  var bx=x2-ux*hl,by=y2-uy*hl;
  var P=[[x1+nx*w,y1+ny*w],[bx+nx*w,by+ny*w],[bx+nx*hw,by+ny*hw],[x2,y2],[bx-nx*hw,by-ny*hw],[bx-nx*w,by-ny*w],[x1-nx*w,y1-ny*w]];
  return '<path class="'+(cls||'st')+'" d="M'+P.map(function(q){return q[0].toFixed(1)+' '+q[1].toFixed(1)}).join('L')+'Z"/>';
}
function helix(x,y){ /* the C-terminal helix, drawn as a coil */
  var g='',i,n=4;
  for(i=0;i<n;i++){var cx=x+i*15,cy=y-i*5;
    g+='<path class="hx" d="M'+cx+' '+cy+'c6 -13 20 -13 15 1c-5 14 9 15 15 2"/>'}
  return g;
}
function foldPath(){ /* the chemokine fold: N-terminal tail, a three-stranded antiparallel sheet and the C-terminal helix */
  return '<path class="wl tl" d="M-104 -36c16 4 22 18 20 30c-2 12 6 16 16 14"/>'+
   arrow(-66,6,6,-20)+
   '<path class="wl lp" d="M6 -20c14 2 18 12 10 20"/>'+
   arrow(16,0,-48,26)+
   '<path class="wl lp" d="M-48 26c-8 8-6 18 6 22"/>'+
   arrow(-42,50,26,24)+
   helix(30,18)+
   '<path class="ss" d="M-84 -6l26 10"/><path class="ss" d="M-30 -4l18 12"/>';
}
function chainPath(){ /* the same polypeptide, unfolded */
  return '<path class="wl ch" d="M-96 8c12-22 26 22 38 0c12-22 26 22 38 0c12-22 26 22 38 0c12-22 26 22 38 0"/>';
}
function vesScene(o){
  var g='',i;
  /* on phones the frame is a third of the width: keep only the labels that carry the story (CY) */
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* ---- the plasmid, with the engineered chemokine gene marked ---- */
  g+='<circle class="wl sD" cx="'+PLX+'" cy="'+PLY+'" r="'+PLR+'"/>';
  g+='<circle class="wo sD" cx="'+PLX+'" cy="'+PLY+'" r="'+(PLR-7)+'"/>';
  g+='<path class="am sD" d="M'+(PLX-26)+' '+(PLY-22)+'a36 36 0 0 1 48 6"/>';
  g+=T('t',24,42,o.mob?'PLASMID':'PLASMID · NATIVE N-TERMINUS',null,1);
  /* ---- the feed into the flask ---- */
  g+='<path class="wo sD" d="M'+PLX+' '+(PLY+PLR)+'V'+(FNT-16)+'"/>';
  /* ---- the culture flask ---- */
  g+='<path class="wl sD" d="M'+(FX-FNW)+' '+FNT+'V'+FNB+'L'+(FX-FHW)+' '+(FBY-16)+'q0 16 16 16h'+(2*FHW-32)+'q16 0 16-16L'+(FX+FNW)+' '+FNB+'V'+FNT+'"/>';
  g+='<path class="wo sD" d="M'+(FX-FNW-9)+' '+FNT+'h'+(2*FNW+18)+'"/>';
  g+='<path class="en sD" d="M'+(FX-86)+' '+(FBY-74)+'h172"/>';
  g+=T('t',24,506,'E. COLI CULTURE',null,1);
  /* ---- the transfer line into the column ---- */
  g+='<path class="wo sD" d="M'+(FX+FNW)+' '+(FNT+2)+'C262 '+(FNT+2)+' 300 96 '+CX+' 96"/>';
  g+='<path class="wl sD" d="M'+CX+' 96V'+(CTY-6)+'"/>';
  /* ---- the chromatography column: wall, resin bed, outlet ---- */
  g+='<path class="wl sD" d="M'+(CX-CHW)+' '+CTY+'V'+(CBY-18)+'q0 18 '+CHW+' 18q'+CHW+' 0 '+CHW+' -18V'+CTY+'"/>';
  g+='<path class="wo sD" d="M'+(CX-CHW)+' '+(CTY+CBED)+'h'+(2*CHW)+'"/>';
  for(i=0;i<7;i++)g+='<path class="en sD" d="M'+(CX-CHW+4)+' '+(CTY+CBED+10+i*14)+'h'+(2*CHW-8)+'"/>';
  g+='<path class="wl sD" d="M'+CX+' '+CBY+'V'+(TBY-8)+'"/>';
  g+=T('t',CX,78,'ION EXCHANGE · RP-HPLC','middle',1);
  /* ---- the fraction tube ---- */
  g+='<path class="wl sD" d="M'+(TBX-TBW)+' '+TBY+'v'+(TBH-14)+'q0 14 '+TBW+' 14q'+TBW+' 0 '+TBW+'-14V'+TBY+'"/>';
  g+=T('t',TBX-26,TBY+TBH-14,'PURIFIED FRACTION','end');
  /* ---- the verification bench: chromatogram axes, checks and vial ---- */
  g+='<path class="wo sD" d="M'+TRX0+' '+(TRY-80)+'V'+TRY+'H'+TRX1+'"/>';
  g+=T('t',TRX0,TRY+36,'QUALITY CONTROL',null,1);
  g+=T('t',TRX0,104,o.mob?'NATIVE FOLD':'NATIVE FOLD · DISULFIDES PAIRED',null,1);
  g+='<path class="wl sD" d="M'+VLX+' '+VLY+'v'+(VLH-12)+'q0 12 '+(VLW/2)+' 12q'+(VLW/2)+' 0 '+(VLW/2)+'-12V'+VLY+'"/>';
  g+='<path class="wo sD" d="M'+(VLX-5)+' '+VLY+'h'+(VLW+10)+'"/>';
  g+=T('t',VLX+VLW/2,VLY+VLH+28,'SHIPPED','middle');
  g+='</g>';
  /* ---- the folded chemokine and the unfolded chain (step 2) ---- */
  g+='<g id="scFold" transform="translate('+PRX+' '+PRY+') scale('+PRS+')">';
  g+='<g class="ch-u">'+chainPath()+'</g>';
  g+='<g class="ch-f">'+foldPath()+'</g>';
  g+='</g>';
  /* ---- cells growing in the flask ---- */
  g+='<g id="scCell">';
  for(i=0;i<NCELL;i++)g+='<g class="cl" data-k="'+i+'"><ellipse rx="7.5" ry="4.2"/></g>';
  g+='</g>';
  /* ---- drops running down the column ---- */
  g+='<g id="scDrop">';
  for(i=0;i<NDROP;i++)g+='<circle class="dp" data-k="'+i+'" r="3.4"/>';
  g+='</g>';
  /* ---- the chromatogram trace ---- */
  g+='<path id="scTrace" class="tr" d="M'+TRX0+' '+TRY+'h96c11 0 13-6 18-6c6 0 7 6 16 6h5c10 0 11-74 22-74c11 0 12 74 22 74h63"/>';
  /* ---- the five checks ---- */
  g+='<g id="scChk">';
  for(i=0;i<5;i++){var cy=CKY+i*CKD;
    g+='<g class="ck" data-k="'+i+'"><path class="bx" d="M'+CKX+' '+(cy-9)+'h12v12h-12Z"/><path class="tk" d="M'+(CKX+2)+' '+(cy-3)+'l4 4l7-9"/>'+
      ((o.mob)?'':'<text class="t" x="'+(CKX+22)+'" y="'+(cy+1)+'">'+CHK[i]+'</text>')+'</g>'}
  g+='</g>';
  /* ---- what the vial holds ---- */
  g+='<path id="scFill" class="fl" d="M'+(VLX+2)+' '+(VLY+VLH-14)+'h'+(VLW-4)+'"/>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">EXPRESSED IN E. COLI · NATIVE N-TERMINUS</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">REFOLDED · NATIVE DISULFIDE PAIRINGS RESTORED</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">PURITY · IDENTITY · FOLD · ACTIVITY · ENDOTOXIN</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var tr=$("#scTrace",svg),trL=tr&&tr.getTotalLength?tr.getTotalLength():0;
  if(tr){tr.style.strokeDasharray=trL+" "+trL}
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    cell:$$("#scCell .cl",svg),drop:$$("#scDrop .dp",svg),chk:$$("#scChk .ck",svg),
    fu:$("#scFold .ch-u",svg),ff:$("#scFold .ch-f",svg),fill:$("#scFill",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,.06,.3),flow=seg(p,.32,.64),check=seg(p,.66,.96);
    /* 1. the culture fills with cells, swimming gently */
    E.cell.forEach(function(a,k){var d=CELL[k],t=Math.min(1,Math.max(0,grow*1.5-k*.055));
      var lw=FHW-26,x=FX-lw*.88+d.u*lw*1.76,yTop=FBY-104,y=yTop+d.v*86,
      sx=Math.sin(p*5+d.ph)*5,sy=Math.cos(p*4+d.ph*1.7)*3.5;
      /* keep every cell inside the flask walls: the body tapers towards the neck */
      var span=FHW-16;
      x=Math.max(FX-span+10,Math.min(FX+span-10,x));
      a.setAttribute("transform","translate("+x.toFixed(1)+" "+(y+sy).toFixed(1)+") rotate("+(sx*4).toFixed(1)+")");
      op(a,b*t*(1-flow*.55))});
    /* 2. material runs down the column and the chain closes into the fold */
    E.drop.forEach(function(el,k){var t=flow*1.5-k*.12;
      if(t<=0||t>=1.08){op(el,0);return}
      t=Math.min(1,t);
      var y=CTY+16+(TBY+TBH-26-(CTY+16))*t,x=CX+Math.sin(t*9+k)*(t<.78?5:0);
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));
      op(el,b*(t<.08?t/.08:1)*(t>.92?(1-t)/.08:1))});
    var fold=seg(p,.4,.66);
    op(E.fu,b*seg(p,.2,.36)*(1-fold));
    op(E.ff,b*fold);
    if(E.ff)E.ff.setAttribute("transform","scale("+(.86+.14*fold).toFixed(3)+")");
    /* 3. the chromatogram draws its single sharp peak, the checks tick, the vial fills */
    if(tr){tr.style.strokeDashoffset=(trL*(1-seg(p,.66,.86))).toFixed(1);op(tr,b)}
    E.chk.forEach(function(el,k){var t=Math.min(1,Math.max(0,check*1.5-k*.14));
      op(el,b*Math.min(1,t*4));el.classList.toggle("on",t>.6)});
    if(E.fill){var f=seg(p,.8,.98);op(E.fill,b*f);
      E.fill.setAttribute("transform","translate(0 "+(-(VLH-26)*f).toFixed(1)+")")}
    op(E.l1,b*seg(p,.1,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
