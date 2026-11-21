/* the story scene (BL/BY/DB): how BurnHeal works, drawn in fine engraved line as ONE cross-section kept on screen for all three steps.
   The skin (epidermis over dermis) with a second-degree burn through the epidermis into the dermis, and the printed dressing in section:
   alternating layers of hydrogel filament (strands cut across read as circles, strands along the cut as bars), pores between them.
   Step 1 the nozzle prints the last layer of the dressing above the skin. Step 2 the dressing lies on the wound: only the filament
   undersides touch it (porous, non-adhesive contact), and the pull-off force is spread across the whole interface. Step 3 the gel keeps
   the wound hydrated, bioactive molecules and trace copper and zinc pass into the wound bed, new vessels grow and new epithelium closes
   the wound. Sources: lfprintech.com BurnHeal page; NSF award 2507525 abstract. Schematic, not to scale. Driven by the scrubbed story progress. */
var SK={top:372,epi:402,der:500,w0:282,w1:518,dep:426,x0:50,x1:750,hov:226};
function crater(h){var d=SK.dep-(SK.dep-SK.top-4)*h,a=SK.w0,b=SK.w1,f=function(n){return n.toFixed(1)};
  return 'M'+a+' '+SK.top+'C'+f(a+22)+' '+SK.top+' '+f(a+30)+' '+f(d)+' '+f(a+62)+' '+f(d)+'L'+f(b-62)+' '+f(d)+'C'+f(b-30)+' '+f(d)+' '+f(b-22)+' '+SK.top+' '+b+' '+SK.top}
function scene(){
  var mob=MOBILE(),g='',i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="30 80 740 480" aria-hidden="true">';
  /* the skin in section: surface and epidermis broken by the burn, rete ridges, dermis hatching and a few cells */
  g+='<g id="skB">';
  g+='<path class="sk sD" d="M'+SK.x0+' '+SK.top+'H'+SK.w0+'M'+SK.w1+' '+SK.top+'H'+SK.x1+'"/>';
  var rete=function(a,b){var s='M'+a+' '+SK.epi;for(x=a;x<b;x+=20)s+='Q'+(x+10)+' '+(SK.epi+9)+' '+Math.min(b,x+20)+' '+SK.epi;return s};
  g+='<path class="sk2 sD" d="'+rete(SK.x0,SK.w0+8)+'"/><path class="sk2 sD" d="'+rete(SK.w1-8,SK.x1)+'"/>';
  g+='<path class="sk3 sD" d="M'+SK.x0+' '+SK.der+'H'+SK.x1+'"/>';
  for(x=SK.x0+14;x<SK.x1-10;x+=26){var y0=SK.epi+22+((x*7)%23);g+='<path class="hat sD" d="M'+x+' '+y0+'l12 -9"/>'}
  [[150,388],[190,385],[230,389],[560,387],[610,388],[650,385]].forEach(function(c){g+='<ellipse class="cel sD" cx="'+c[0]+'" cy="'+c[1]+'" rx="7" ry="4"/>'});
  g+='<path class="wnd sD" id="crat" d="'+crater(0)+'"/>';
  for(i=0;i<9;i++){x=SK.w0+44+i*19;g+='<path class="burn sD" d="M'+x+' '+(SK.dep-2)+'l9 -14"/>'}
  g+='<text class="t" x="'+(SK.x1)+'" y="'+(SK.top-12)+'" text-anchor="end">'+(mob?'':'EPIDERMIS')+'</text>';
  g+='<text class="t" x="'+(SK.x1)+'" y="'+(SK.der-14)+'" text-anchor="end">'+(mob?'':'DERMIS')+'</text></g>';

  /* healing parts (step 3): new vessels in the dermis, the new epithelium across the wound bed */
  g+='<g id="vsl">';
  [[318,492,'C330 470 352 462 360 444'],[400,494,'C396 474 410 458 404 440'],[482,492,'C470 470 450 462 442 444']].forEach(function(v){g+='<path class="ves" d="M'+v[0]+' '+v[1]+v[2]+'"/>'});
  g+='</g><path class="epi" id="epiN" d=""/>';

  /* the dressing in section, built from its contact plane (y=0) upward */
  g+='<g id="drs" transform="translate(0 '+SK.hov+')">';
  var D0=160,D1=640;
  g+='<g id="dL">';
  for(x=D0+10;x<=D1-10;x+=22)g+='<circle class="fil c0" cx="'+x+'" cy="-8" r="7.5"/>';
  g+='<rect class="fil" x="'+D0+'" y="-28" width="'+(D1-D0)+'" height="13" rx="6.5"/>';
  for(x=D0+21;x<=D1-21;x+=22)g+='<circle class="fil" cx="'+x+'" cy="-36" r="7.5"/>';
  g+='</g><path class="fil top" id="dTop" d="M'+(D0+6.5)+' -50H'+(D1-6.5)+'"/>';
  g+='</g>';
  /* the print nozzle (step 1) */
  g+='<g id="noz"><path class="nz" d="M-15 -140V-96L-4 -66V-58H4V-66L15 -96V-140"/><path class="nz2" d="M-15 -124H15M-15 -108H15"/></g>';

  /* step 1 labels */
  g+='<g id="l1"><path class="ldr" d="M60 '+(SK.hov+78)+'H150L'+(D0+10)+' '+(SK.hov+1)+'"/><text class="a" x="60" y="'+(SK.hov+68)+'">'+(mob?'GEL FILAMENT':'HYDROGEL FILAMENT')+'</text>'+
     '<path class="ldr" d="M740 '+(SK.hov+78)+'H650L'+(D1-21)+' '+(SK.hov-9)+'"/><text class="a" x="740" y="'+(SK.hov+68)+'" text-anchor="end">PORES</text></g>';
  /* step 2: spread pull-off force, contact and wound labels */
  g+='<g id="l2">';
  for(x=D0+28;x<=D1-20;x+=56)g+='<path class="frc" d="M'+x+' '+(SK.top-66)+'V'+(SK.top-96)+'M'+(x-5)+' '+(SK.top-90)+'L'+x+' '+(SK.top-97)+'L'+(x+5)+' '+(SK.top-90)+'"/>';
  g+='<text class="a" x="400" y="'+(SK.top-112)+'" text-anchor="middle">'+(mob?'FORCE SPREAD':'PULL-OFF FORCE, SPREAD ACROSS THE CONTACT')+'</text>';
  g+='<path class="ldr" d="M60 '+(SK.top+150)+'H120L'+(D0+34)+' '+(SK.top+2)+'"/><text class="a" x="60" y="'+(SK.top+178)+'">'+(mob?'POROUS CONTACT':'POROUS, NON-ADHESIVE CONTACT')+'</text>';
  g+='<path class="ldr" d="M740 '+(SK.top+150)+'H690L'+(SK.w1-40)+' '+(SK.dep-6)+'"/><text class="a" x="740" y="'+(SK.top+178)+'" text-anchor="end">'+(mob?'BURN':'SECOND-DEGREE BURN')+'</text></g>';
  /* step 3: moisture, copper and zinc, new epithelium and vessels */
  g+='<g id="l3">';
  [[330,0],[372,.25],[414,.5],[456,.75],[352,.6],[436,.15]].forEach(function(d){g+='<path class="drop" data-x="'+d[0]+'" data-o="'+d[1]+'" d=""/>'});
  [[344,'cu',.1],[388,'zn',.4],[430,'cu',.7],[470,'zn',.25]].forEach(function(d){g+='<circle class="ion '+d[1]+'" data-x="'+d[0]+'" data-o="'+d[2]+'" r="4.5"/>'});
  g+='<path class="ldr" d="M60 '+(SK.top-120)+'H118L326 '+(SK.top+12)+'"/><text class="a" x="60" y="'+(SK.top-130)+'">MOISTURE</text>';
  g+='<path class="ldr" d="M740 '+(SK.top-120)+'H684L470 '+(SK.top+14)+'"/><text class="a" x="740" y="'+(SK.top-130)+'" text-anchor="end">'+(mob?'Cu · Zn':'COPPER · ZINC · BIOACTIVES')+'</text>';
  g+='<path class="ldr" d="M60 '+(SK.top+150)+'H120L300 '+(SK.top+10)+'"/><text class="a" x="60" y="'+(SK.top+178)+'">'+(mob?'NEW SKIN':'NEW EPITHELIUM')+'</text>';
  g+='<path class="ldr" d="M740 '+(SK.top+150)+'H690L484 486"/><text class="a" x="740" y="'+(SK.top+178)+'" text-anchor="end">NEW VESSELS</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#skB .sD"),fade:$$("#skB text",svg),crat:$("#crat",svg),drs:$("#drs",svg),dL:$("#dL",svg),top:$("#dTop",svg),noz:$("#noz",svg),
    l1:$("#l1",svg),l2:$("#l2",svg),l3:$("#l3",svg),ves:dl("#vsl .ves"),epi:$("#epiN",svg),drops:$$("#l3 .drop",svg),ions:$$("#l3 .ion",svg),burn:$$("#skB .burn",svg)};
  var TL=E.top.getTotalLength(),D0=160+6.5,D1=640-6.5,lastB=-1;E.top.style.strokeDasharray=TL+" "+TL;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    op(E.dL,seg(b,.3,.9));
    /* step 1: the nozzle prints the top layer left to right */
    var pr=seg(p,.02,.26);E.top.style.strokeDashoffset=(TL*(1-pr)).toFixed(1);
    var nzx=D0+(D1-D0)*pr,down=seg(p,.34,.5),dy=SK.hov+(SK.top-SK.hov)*down;
    E.drs.setAttribute("transform","translate(0 "+dy.toFixed(1)+")");
    E.noz.setAttribute("transform","translate("+nzx.toFixed(1)+" "+(SK.hov+8-30*seg(p,.27,.34)).toFixed(1)+")");op(E.noz,b*(1-seg(p,.27,.34)));
    op(E.l1,b*seg(b,.6,1)*(1-seg(p,.27,.33)));
    /* step 2 */
    op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));
    /* step 3: hydration, ions, healing */
    var s3=seg(p,.7,.78);op(E.l3,b*s3);
    var hl=seg(p,.76,.98);
    E.crat.setAttribute("d",crater(hl*.82));
    E.burn.forEach(function(el){el.style.opacity=(b*(1-hl)).toFixed(3)});
    draw(E.ves,seg(p,.74,.94));
    var dep=SK.dep-(SK.dep-SK.top-4)*hl*.82;
    if(hl>0.001){E.epi.setAttribute("d",'M'+(SK.w0+8)+' '+(SK.top+3)+'C'+(SK.w0+40)+' '+(dep-4).toFixed(1)+' '+(SK.w0+60)+' '+(dep-4).toFixed(1)+' 400 '+(dep-4).toFixed(1)+'C'+(SK.w1-60)+' '+(dep-4).toFixed(1)+' '+(SK.w1-40)+' '+(dep-4).toFixed(1)+' '+(SK.w1-8)+' '+(SK.top+3));
      var L=E.epi.getTotalLength();E.epi.style.strokeDasharray=L+" "+L;E.epi.style.strokeDashoffset=(L*(1-hl)).toFixed(1);E.epi.style.opacity="1"}else E.epi.style.opacity="0";
    var t=(p-.7)/.3;
    E.drops.forEach(function(el){var x=+el.getAttribute("data-x"),o=+el.getAttribute("data-o"),q=((t*2.2+o)%1+1)%1,y=SK.top+2+(dep-SK.top-10)*q,s=4.2;
      el.setAttribute("d","M"+x+" "+(y-s*1.6).toFixed(1)+"C"+(x+s)+" "+(y-.3*s).toFixed(1)+" "+(x+s)+" "+(y+s).toFixed(1)+" "+x+" "+(y+s).toFixed(1)+"C"+(x-s)+" "+(y+s).toFixed(1)+" "+(x-s)+" "+(y-.3*s).toFixed(1)+" "+x+" "+(y-s*1.6).toFixed(1)+"Z");
      el.style.opacity=(s3*Math.sin(Math.PI*q)).toFixed(3)});
    E.ions.forEach(function(el){var x=+el.getAttribute("data-x"),o=+el.getAttribute("data-o"),q=((t*1.6+o)%1+1)%1;
      el.setAttribute("cx",(x+6*Math.sin(q*6.3)).toFixed(1));el.setAttribute("cy",(SK.top+4+(dep+30-SK.top)*q).toFixed(1));el.style.opacity=(s3*Math.sin(Math.PI*q)).toFixed(3)});
  };
}
