/* The story scene (DB/BL): how Abzyme's platform works (abzymetx.com Technology Overview, Services Overview, Who We Are),
   as ONE continuous scene in fine line, filling the frame: a yeast cell carrying a self-diversifying VHH library on its
   surface; the single-cell sorter that reads each cell and deflects the binders out of the stream; and the IgG the selected
   domain is built onto. Frame 0 is already complete. Step 1 (display): antigen drifts in and the domains that bind it light.
   Step 2 (mature): cells run down the stream, and past the plates the binders deflect into the collection vial while the
   rest fall to waste. Step 3 (build): two copies of the selected domain are secreted and dock on the IgG's arms.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
/* --- the yeast cell --- */
var YX=136,YY=248,YR=112,BX=228,BY=132,BR=46;
/* --- the sorter --- */
var NZX=392,NZT=74,NZA=126;                 /* nozzle: x, top, apex */
var PLT=244,PLB=330,PLL=336,PLR=426,PLW=22; /* deflection plates */
var SVX=452,SVY=408,SVW=84,SVH=70;          /* collection vial (selected) */
var WVX=256,WVY=408,WVW=76,WVH=54;          /* waste cup */
/* --- the assembled molecule --- */
var AX=648,AHY=312,AFY=410,ALX=578,ARX=716,ATY=224;
var NDOM=11;
var DOM=(function(){var a=[],i;for(i=0;i<NDOM;i++){var th=-154+i*(262/(NDOM-1));a.push({th:th,bind:i%3===1})}return a})();
var ANT=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<5;i++)a.push({x:16+R()*58,y:92+R()*72});return a})();
function vhh(sc){ /* a single VHH domain: a small beta-barrel with its long CDR3 loop */
  return '<g transform="scale('+(sc||1)+')"><path d="M-9 7a9 11 0 0 1 0-14a9 11 0 0 1 18 0a9 11 0 0 1 0 14Z"/><path class="cd" d="M-6 -11c2-6 10-6 12-1"/></g>';
}
function antigen(){return '<path d="M0 -7L7 0L0 7L-7 0Z"/>';}
function chain(x1,y1,x2,y2,cls){ /* a polypeptide chain drawn with heft: two parallel strands plus two Ig domains */
  var dx=x2-x1,dy=y2-y1,L=Math.sqrt(dx*dx+dy*dy),nx=-dy/L*5,ny=dx/L*5,g='',i;
  g+='<path class="'+cls+'" d="M'+(x1+nx).toFixed(1)+' '+(y1+ny).toFixed(1)+'L'+(x2+nx).toFixed(1)+' '+(y2+ny).toFixed(1)+'"/>';
  g+='<path class="'+cls+'" d="M'+(x1-nx).toFixed(1)+' '+(y1-ny).toFixed(1)+'L'+(x2-nx).toFixed(1)+' '+(y2-ny).toFixed(1)+'"/>';
  for(i=1;i<=2;i++){var u=i/3,cx=x1+dx*u,cy=y1+dy*u,an=Math.atan2(dy,dx)*180/Math.PI;
    g+='<ellipse class="'+cls+'" cx="0" cy="0" rx="15" ry="9" transform="translate('+cx.toFixed(1)+' '+cy.toFixed(1)+') rotate('+an.toFixed(0)+')"/>'}
  return g;
}
function vesScene(o){
  var g='',i;
  /* on phones the frame is a third of the width: keep only the three labels that carry the story (CY) */
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* ---- the yeast cell: wall, membrane, nucleus, vacuole, bud ---- */
  g+='<circle class="wl sD" cx="'+YX+'" cy="'+YY+'" r="'+YR+'"/>';
  g+='<circle class="wo sD" cx="'+YX+'" cy="'+YY+'" r="'+(YR-11)+'"/>';
  g+='<circle class="wl sD" cx="'+BX+'" cy="'+BY+'" r="'+BR+'"/>';
  g+='<circle class="wo sD" cx="'+(YX-22)+'" cy="'+(YY+26)+'" r="42"/>';
  g+='<circle class="en sD" cx="'+(YX-22)+'" cy="'+(YY+26)+'" r="13"/>';
  g+='<circle class="wo sD" cx="'+(YX+40)+'" cy="'+(YY-52)+'" r="26"/>';
  g+='<path class="en sD" d="M'+(YX-74)+' '+(YY-36)+'c22-26 52-22 66 2"/>';
  g+='<path class="en sD" d="M'+(YX-56)+' '+(YY+86)+'c26 16 60 10 76-14"/>';
  g+=T('t',24,76,o.mob?'VHH LIBRARY':'SELF-DIVERSIFYING VHH LIBRARY',null,1);
  g+=T('t',24,420,'ONE CELL · ONE DOMAIN');
  /* ---- the feed into the sorter, the nozzle and the stream ---- */
  g+='<path class="wo sD" d="M'+(YX+YR+10)+' '+(YY-78)+'C300 '+(YY-78)+' 306 94 '+(NZX-36)+' '+NZT+'"/>';
  g+='<path class="wl sD" d="M'+(NZX-38)+' '+NZT+'L'+(NZX-8)+' '+NZA+'M'+(NZX+38)+' '+NZT+'L'+(NZX+8)+' '+NZA+'"/>';
  g+='<path class="wo sD" d="M'+(NZX-8)+' '+NZA+'V'+(PLT-14)+'M'+(NZX+8)+' '+NZA+'V'+(PLT-14)+'"/>';
  /* ---- the deflection plates ---- */
  g+='<path class="wl sD" d="M'+PLL+' '+PLT+'h'+PLW+'v'+(PLB-PLT)+'h-'+PLW+'Z"/>';
  g+='<path class="wl sD" d="M'+PLR+' '+PLT+'h'+PLW+'v'+(PLB-PLT)+'h-'+PLW+'Z"/>';
  g+=T('t',PLL+PLW/2,PLT-14,'−','middle');
  g+=T('t',PLR+PLW/2,PLT-14,'+','middle');
  g+=T('t',NZX,56,'SINGLE-CELL SORT','middle',1);
  /* the two outlet guides */
  g+='<path class="am gt" d="M'+NZX+' '+(PLB+6)+'L'+(SVX+SVW*.5)+' '+(SVY-10)+'"/>';
  g+='<path class="wo sD" d="M'+NZX+' '+(PLB+6)+'L'+(WVX+WVW*.5)+' '+(WVY-8)+'"/>';
  /* ---- the vials ---- */
  g+='<path class="wl sD" d="M'+SVX+' '+SVY+'v'+SVH+'h'+SVW+'V'+SVY+'"/>';
  g+='<path class="wo sD" d="M'+(SVX+8)+' '+(SVY+SVH-14)+'h'+(SVW-16)+'"/>';
  g+='<path class="wl sD" d="M'+WVX+' '+WVY+'v'+WVH+'h'+WVW+'V'+WVY+'"/>';
  g+=T('t',SVX+SVW/2,SVY+SVH+28,'SELECTED','middle');
  g+=T('t',WVX+WVW/2,WVY+WVH+28,'DISCARDED','middle');
  /* ---- the molecule: an IgG with two docking sites (Abz2) ---- */
  g+=chain(AX,AFY,AX,AHY,'wl sD');
  g+=chain(AX,AHY,ALX,ATY,'wl sD');
  g+=chain(AX,AHY,ARX,ATY,'wl sD');
  g+='<path class="en sD" d="M'+(AX-16)+' '+(AFY-4)+'h32"/>';
  g+='<path class="en sD" d="M'+(AX-10)+' '+(AHY+8)+'h20"/>';
  g+=T('t',AX,176,'ABZ2 BISPECIFIC','middle',1);
  g+=T('t',AX,AFY+40,'COMPLETELY NORMAL IgG','middle');
  g+='</g>';
  /* ---- displayed domains around the cell wall ---- */
  g+='<g id="scDom">';
  DOM.forEach(function(d,k){var th=d.th*Math.PI/180,x=YX+Math.cos(th)*(YR+15),y=YY+Math.sin(th)*(YR+15);
    g+='<g class="md dm" data-k="'+k+'" transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+(d.th+90).toFixed(0)+') scale(.86)">'+vhh()+'</g>'});
  g+='</g>';
  /* ---- antigen drifting in ---- */
  g+='<g id="scAnt">';
  ANT.forEach(function(a,k){g+='<g class="md ag" data-k="'+k+'">'+antigen()+'</g>'});
  g+='</g>';
  /* ---- cells travelling down the stream ---- */
  g+='<g id="scCell">';
  for(i=0;i<6;i++)g+='<g class="cl" data-k="'+i+'"><circle r="10"/></g>';
  g+='</g>';
  /* ---- the two modules that dock on the arms ---- */
  g+='<g id="scMod"><g class="md mo" data-k="0">'+vhh(.95)+'</g><g class="md mo" data-k="1">'+vhh(.95)+'</g></g>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">DOMAINS DISPLAYED · ANTIGEN BOUND IN VITRO</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">MATURED IN VIVO · SORTED CELL BY CELL</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">SECRETED AND BUILT INTO MULTI-SPECIFICS</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .gt, #scBase ellipse",svg),
    dom:$$("#scDom .dm",svg),ant:$$("#scAnt .ag",svg),cell:$$("#scCell .cl",svg),mod:$$("#scMod .mo",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var bind=seg(p,.08,.3),flow=seg(p,.34,.66),build=seg(p,.66,.96);
    /* 1. the displayed domains appear, and the binders light as antigen docks */
    E.dom.forEach(function(el,k){var d=DOM[k],t=Math.min(1,Math.max(0,b*1.1-k*.035));
      op(el,t*(1-build*.72));el.classList.toggle("on",d.bind&&bind>.55)});
    E.ant.forEach(function(el,k){var a=ANT[k],t=Math.min(1,Math.max(0,bind*1.5-k*.14)),d=DOM[(k*3+1)%NDOM],
      th=d.th*Math.PI/180,tx=YX+Math.cos(th)*(YR+31),ty=YY+Math.sin(th)*(YR+31),
      x=a.x+(tx-a.x)*t,y=a.y+(ty-a.y)*t,bob=Math.sin(k*1.9+p*8)*3.5*(1-t);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+(y+bob).toFixed(1)+") rotate("+(40*(1-t)).toFixed(0)+")");
      op(el,b*(1-build*.8));el.classList.toggle("on",t>.9)});
    /* 2. cells run down the stream; past the plates the binders deflect into the vial, the rest fall to waste */
    E.cell.forEach(function(el,k){var keep=k%2===0,t=flow*1.4-k*.13;
      if(t<=0||t>=1.1){op(el,0);return}
      t=Math.min(1,t);
      var x,y;
      if(t<.58){var u=t/.58;x=NZX;y=NZA-34+(PLB+6-(NZA-34))*u}
      else{var v=(t-.58)/.42,ex=keep?SVX+SVW*.5:WVX+WVW*.5,ey=keep?SVY+SVH-22:WVY+WVH-16;
        x=NZX+(ex-NZX)*v;y=PLB+6+(ey-(PLB+6))*v*v}
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      op(el,b*(t<.06?t/.06:1)*(keep?1:1-Math.max(0,(t-.8)/.2))*(1-build));
      el.classList.toggle("on",keep&&t>.6)});
    /* 3. the selected domain is secreted and docks on both arms */
    E.mod.forEach(function(el,k){var t=Math.min(1,Math.max(0,build*1.25-k*.2)),
      x0=SVX+SVW*.5,y0=SVY+SVH-26,x1=k?ARX:ALX,y1=ATY,
      x=x0+(x1-x0)*t,y=y0+(y1-y0)*t-Math.sin(Math.PI*t)*62;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+((k?30:-30)*t).toFixed(0)+")");
      op(el,b*t);el.classList.toggle("on",t>.92)});
    op(E.l1,b*seg(p,.1,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
