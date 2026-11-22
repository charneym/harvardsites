/* The story scene (DB/BL): how Manhattan BioSolutions' conjugates work (manhattanbiosolutions.com Scientific Platforms: ADCs;
   April 2025 release), as ONE continuous scene in fine line, filling the frame: a capillary carrying the ADCs, and a cancer
   cell with its tumour antigens, endosome, lysosome (legumain), mitochondria, ER and nucleus with its DNA. Frame 0 is
   already complete. Step 1 (bind): ADCs flow intact through the vessel and one docks on an antigen. Step 2 (enter): it is
   taken in, in an endosome that carries it to the lysosome. Step 3 (release): legumain cuts the linker, the two payloads
   cross to the nucleus and the DNA breaks where they land. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var CX=452,CY=318,CRX=290,CRY=196;           /* the cancer cell */
var LX=384,LY=300,LR=48;                      /* lysosome */
var NX=598,NY=356,NR=98;                      /* nucleus */
var VT=30,VB=94,VR=360;                       /* the vessel: top and bottom walls, right end */
var RANG=[-170,-154,-138,-122,-106];          /* antigens on the membrane (ellipse angles) */
var DOCK=2;
function ell(th){var t=th*Math.PI/180,x=CX+CRX*Math.cos(t),y=CY+CRY*Math.sin(t),nx=Math.cos(t)/CRX,ny=Math.sin(t)/CRY,L=Math.sqrt(nx*nx+ny*ny);return {x:x,y:y,nx:nx/L,ny:ny/L}}
function adc(){ /* an IgG in fine line, arms up, two payloads on its linkers */
  return '<g class="ab"><path d="M0 2V16"/><path d="M-2.4 2V16" class="h"/><path d="M0 2L-9 -9M0 2L9 -9"/><path d="M-9 -9l-3 -4M9 -9l3 -4"/>'+
    '<path class="lk" d="M-4 9l-7 3M4 9l7 3"/><circle class="py" cx="-12.5" cy="12.6" r="3.1"/><circle class="py" cx="12.5" cy="12.6" r="3.1"/></g>';
}
function helix(x0,x1,ph){ /* a stretch of DNA: two strands and their rungs */
  var a='',b='',r='',x,y1,y2,i=0;
  for(x=x0;x<=x1;x+=3){y1=NY+9*Math.sin((x+ph)/9);y2=NY-9*Math.sin((x+ph)/9);a+=(x===x0?'M':'L')+x.toFixed(1)+' '+y1.toFixed(1);b+=(x===x0?'M':'L')+x.toFixed(1)+' '+y2.toFixed(1);
    if(i++%3===0&&Math.abs(y1-y2)>4)r+='M'+x.toFixed(1)+' '+y1.toFixed(1)+'V'+y2.toFixed(1)}
  return '<path class="dn" d="'+a+'"/><path class="dn" d="'+b+'"/><path class="dr" d="'+r+'"/>';
}
function vesScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep,mtxt){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+(o.mob&&mtxt?mtxt:txt)+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* ---- the capillary ---- */
  g+='<path class="wl sD" d="M0 '+VT+'H'+(VR-40)+'C'+(VR-12)+' '+VT+' '+VR+' '+(VT+14)+' '+VR+' '+(VT+32)+'"/>';
  g+='<path class="wl sD" d="M0 '+VB+'H'+(VR-40)+'C'+(VR-12)+' '+VB+' '+VR+' '+(VB-14)+' '+VR+' '+(VB-32)+'"/>';
  g+='<path class="wo sD" d="M0 '+(VT+8)+'H'+(VR-48)+'M0 '+(VB-8)+'H'+(VR-48)+'"/>';
  [[40,48],[118,74],[206,52],[292,70]].forEach(function(r){g+='<ellipse class="rb" cx="'+r[0]+'" cy="'+r[1]+'" rx="13" ry="6"/>'});
  g+=T('t',0,18,'BLOODSTREAM');
  /* ---- the cancer cell: membrane (double line), antigens ---- */
  g+='<ellipse class="wl sD" cx="'+CX+'" cy="'+CY+'" rx="'+CRX+'" ry="'+CRY+'"/>';
  g+='<ellipse class="wo sD" cx="'+CX+'" cy="'+CY+'" rx="'+(CRX-7)+'" ry="'+(CRY-7)+'"/>';
  RANG.forEach(function(th){var e=ell(th),tx=e.x+e.nx*17,ty=e.y+e.ny*17,px=-e.ny*5,py=e.nx*5;
    g+='<path class="wl sD" d="M'+e.x.toFixed(1)+' '+e.y.toFixed(1)+'L'+tx.toFixed(1)+' '+ty.toFixed(1)+'"/>';
    g+='<path class="rc sD" d="M'+(tx+px).toFixed(1)+' '+(ty+py).toFixed(1)+'L'+(tx-px).toFixed(1)+' '+(ty-py).toFixed(1)+'"/>'});
  g+=T('t',0,152,'TUMOUR ANTIGEN',null,1,'ANTIGEN');
  g+=T('t',96,500,'CANCER CELL');
  /* ---- organelles ---- */
  g+='<circle class="wl sD" cx="'+LX+'" cy="'+LY+'" r="'+LR+'"/>';
  g+='<circle class="wo sD" cx="'+LX+'" cy="'+LY+'" r="'+(LR-6)+'"/>';
  g+=T('t',LX-14,LY+LR+24,'LYSOSOME · LEGUMAIN','middle',1,'LYSOSOME');
  g+='<circle class="wl sD" cx="'+NX+'" cy="'+NY+'" r="'+NR+'"/>';
  g+='<circle class="wo sD" cx="'+NX+'" cy="'+NY+'" r="'+(NR-7)+'"/>';
  g+='<path class="en sD" d="M'+(NX-NR-20)+' '+(NY-60)+'c-14 30 -14 90 6 122M'+(NX-NR-34)+' '+(NY-40)+'c-10 26 -8 70 8 96M'+(NX-26)+' '+(NY+NR+16)+'c40 6 76 -6 98 -30"/>';
  [[250,268,-20],[300,420,24],[470,190,8],[700,250,58],[220,370,-60]].forEach(function(m){
    g+='<g transform="translate('+m[0]+' '+m[1]+') rotate('+m[2]+')"><ellipse class="wo sD" cx="0" cy="0" rx="24" ry="10"/><path class="en sD" d="M-16 0l5 -6 5 12 5 -12 5 12 5 -6"/></g>'});
  g+='<path class="en sD" d="M520 160c18 -8 40 -8 58 2M516 172c22 -8 48 -8 66 4M522 184c18 -6 38 -6 54 2"/>';
  g+=T('t',NX,NY-NR+34,'NUCLEUS · DNA','middle',1,'NUCLEUS');
  g+='</g>';
  /* ---- the DNA, in three stretches that part where the payloads land ---- */
  g+='<g id="scDna"><g class="ds" data-k="0">'+helix(NX-74,NX-26,0)+'</g><g class="ds" data-k="1">'+helix(NX-22,NX+22,0)+'</g><g class="ds" data-k="2">'+helix(NX+26,NX+74,0)+'</g>'+
    '<g class="bk" data-k="0" transform="translate('+(NX-24)+' '+NY+')"><path d="M-6 -16l3 7M6 -16l-3 7M-6 16l3 -7M6 16l-3 -7"/></g>'+
    '<g class="bk" data-k="1" transform="translate('+(NX+24)+' '+NY+')"><path d="M-6 -16l3 7M6 -16l-3 7M-6 16l3 -7M6 16l-3 -7"/></g></g>';
  /* ---- legumain, waiting in the lysosome ---- */
  g+='<g id="scLeg">';
  [[-22,-14,20],[18,-20,140],[24,14,250],[-16,20,320]].forEach(function(q,k){
    g+='<g class="lg" data-k="'+k+'" transform="translate('+(LX+q[0])+' '+(LY+q[1])+') rotate('+q[2]+')"><path d="M0 0L6.5 -3.8A7.5 7.5 0 1 0 6.5 3.8Z"/></g>'});
  g+='</g>';
  /* ---- the ADCs in the vessel, the docking ADC, its endosome and the two freed payloads ---- */
  g+='<g id="scAdc">';
  for(i=0;i<4;i++)g+='<g class="ad" data-k="'+i+'">'+adc()+'</g>';
  g+='</g>';
  g+='<circle id="scEndo" class="es" r="22"/>';
  g+='<g id="scDock">'+adc()+'</g>';
  g+='<g id="scPay"><circle class="fp" r="3.4"/><circle class="fp" r="3.4"/></g>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="0" y="'+ly+'">INTACT IN THE BLOOD · BOUND AT THE CELL</text></g>';
  g+='<g id="lb2"><text class="a" x="0" y="'+ly+'">INTERNALISED · CARRIED TO THE LYSOSOME</text></g>';
  g+='<g id="lb3"><text class="a" x="0" y="'+ly+'">LINKER CUT · PAYLOAD BREAKS THE DNA</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .rb, #scDna .ds",svg),
    adc:$$("#scAdc .ad",svg),dock:$("#scDock",svg),endo:$("#scEndo",svg),pay:$$("#scPay .fp",svg),leg:$$("#scLeg .lg",svg),
    dna:$$("#scDna .ds",svg),brk:$$("#scDna .bk",svg),dpy:$$("#scDock .py",svg),dlk:$$("#scDock .lk",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,D=ell(RANG[DOCK]);
  var tip={x:D.x+D.nx*17,y:D.y+D.ny*17},rot=Math.atan2(D.ny,D.nx)*180/Math.PI+90;   /* arms toward the cell */
  var dockC={x:tip.x+D.nx*13,y:tip.y+D.ny*13},inC={x:D.x-D.nx*30,y:D.y-D.ny*30};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tr(el,x,y,r,s){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(r?" rotate("+r.toFixed(0)+")":"")+(s&&s!==1?" scale("+s.toFixed(3)+")":""))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var bind=seg(p,.06,.3),enter=seg(p,.36,.64),rel=seg(p,.68,.96);
    /* 1. ADCs flow intact along the vessel; one leaves it and docks on an antigen */
    E.adc.forEach(function(el,k){var x=((k*104+p*260+40)%420)-30,y=(VT+VB)/2+Math.sin(k*2.1+p*9)*9;
      tr(el,x,y,90+Math.sin(k+p*6)*16,.95);op(el,b*Math.min(1,Math.max(0,(x+20)/30))*Math.min(1,Math.max(0,(VR-10-x)/30)))});
    var s0={x:250,y:(VT+VB)/2},dx,dy,dr;
    if(enter<=0){dx=s0.x+(dockC.x-s0.x)*bind;dy=s0.y+(dockC.y-s0.y)*bind-Math.sin(Math.PI*bind)*10;dr=90+(rot-90)*bind}
    else{var u=enter<.4?enter/.4:1,v=enter<.4?0:(enter-.4)/.6;
      var ex=inC.x+(LX-inC.x)*v,ey=inC.y+(LY-inC.y)*v;
      dx=dockC.x+(inC.x-dockC.x)*u+(ex-inC.x);dy=dockC.y+(inC.y-dockC.y)*u+(ey-inC.y);dr=rot+(-rot+rot*(1-v))*0;
      tr(E.endo,inC.x+(ex-inC.x),inC.y+(ey-inC.y)+0,0,1);}
    tr(E.dock,dx,dy,dr,1);op(E.dock,b*(enter<=0?1:1-rel*.55));
    E.dock.classList.toggle("on",bind>.96);
    /* 2. the endosome pinches off around it and carries it to the lysosome, fusing as it arrives */
    if(enter<=0)tr(E.endo,inC.x,inC.y,0,1);
    op(E.endo,b*Math.min(1,enter*3)*(1-seg(enter,.85,1)));
    /* 3. legumain cuts the linker: the payloads leave the antibody and cross to the DNA, which breaks where they land */
    E.leg.forEach(function(el,k){el.classList.toggle("on",rel>.05&&rel<.5);op(el,b)});
    E.dpy.forEach(function(el){op(el,rel>.12?0:1)});E.dlk.forEach(function(el){op(el,rel>.12?.25:1)});
    E.pay.forEach(function(el,k){var t=Math.min(1,Math.max(0,(rel-.12-k*.08)/.6)),x0=LX+(k?10:-10),y0=LY+8,x1=NX+(k?24:-24),y1=NY,
      x=x0+(x1-x0)*t,y=y0+(y1-y0)*t-Math.sin(Math.PI*t)*28;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(rel>.12?1:0))});
    var brk=seg(rel,.72,.96);
    E.dna.forEach(function(el,k){var d=(k-1)*brk*6;el.setAttribute("transform","translate("+d.toFixed(1)+" 0) rotate("+((k-1)*brk*5).toFixed(1)+" "+NX+" "+NY+")")});
    E.brk.forEach(function(el){op(el,b*brk)});
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
