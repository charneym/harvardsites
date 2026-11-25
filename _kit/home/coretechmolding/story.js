/* the story scene (BL/BY/DB): how a part is made at Core Technology, drawn once in fine line as a side elevation of an injection
   molding press: hopper, barrel with its screw and heater bands, nozzle, and a two-plate mold whose cavity is a syringe plunger rod
   (one of the medical parts they list). Step 1 (design): the cavity is drawn in, with its dimension lines and the mold-flow path.
   Step 2 (mold): resin pellets drop from the hopper, the screw drives forward and the melt fills the cavity from the gate.
   Step 3 (release): the moving half opens, the part stands free and a CMM probe touches it down. Driven by the scrubbed story progress. */
var CT={px:470};
function ctR(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function ctPart(dx){var f=function(n){return (+n).toFixed(1)},x=CT.px+(dx||0);
  return 'M'+f(x-30)+' 118H'+f(x+30)+'V130H'+f(x+9)+'V262H'+f(x+20)+'V274H'+f(x-20)+'V262H'+f(x-9)+'V130H'+f(x-30)+'Z'}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 8 616 364':'20 0 640 372')+'" aria-hidden="true">';
  g+='<defs><clipPath id="ctClip"><path d="'+ctPart(0)+'"/></clipPath></defs>';
  /* the press, drawn in */
  g+='<g id="scBase">';
  g+='<path class="mf" d="M60 330H630"/>';
  g+='<path class="m sD" d="M118 78H182L166 136H134Z"/><path class="m sD" d="M142 136V170M158 136V170"/>';
  g+='<path class="m sD" d="M84 170H404V222H84Z"/>';
  for(i=0;i<5;i++)g+='<path class="mh2 sD" d="M'+(196+i*40)+' 166V226H'+(220+i*40)+'V166Z"/>';
  g+='<path class="m sD" d="M404 184L420 190V202L404 208"/>';
  g+='<path class="m sD" d="M60 178H84V214H60Z"/><path class="m sD" d="M60 196H40"/>';
  g+='<path class="m sD" d="M420 96H470V300H420Z"/>';
  g+='<path class="mf sD" d="M470 106H604M470 290H604"/><path class="m sD" d="M604 86H624V310H604Z"/>';
  g+='<path class="mf sD" d="M420 300V330M614 310V330M100 222V330M380 222V330"/>';
  g+='<text class="t" x="134" y="352" text-anchor="middle">BARREL</text><text class="t" x="490" y="352" text-anchor="middle">MOLD</text></g>';
  /* the screw, which drives forward in step 2 */
  var s='M100 196';for(i=0;i<14;i++){var x=108+i*20;s+='L'+(x)+' 180L'+(x+10)+' 212'}s+='L392 196';
  g+='<g id="scr"><path class="sw" d="M96 196H396"/><path class="sw" d="'+s+'"/></g>';
  /* pellets in the hopper, falling into the barrel in step 2 */
  g+='<g id="pel">';for(i=0;i<16;i++){var px=132+ctR(i+5)*36,py=92+ctR(i+9)*38;g+='<circle class="pl" data-y="'+f(py)+'" cx="'+f(px)+'" cy="'+f(py)+'" r="3.2"/>'}g+='</g>';
  /* the moving half of the mold (opens in step 3) */
  g+='<g id="mov"><path class="m" d="M470 96H520V300H470Z"/></g>';
  /* step 1: the cavity and its dimensions; the gate and runner */
  g+='<g id="cav"><path class="cv sD" id="cvl" d="'+ctPart(0)+'"/><path class="rn sD" id="rnl" d="M420 196H461"/>'+
     '<path class="dm" d="M'+(CT.px-30)+' 110V102M'+(CT.px+30)+' 110V102M'+(CT.px-30)+' 106H'+(CT.px+30)+'"/>'+
     '<path class="dm" d="M'+(CT.px+44)+' 118H'+(CT.px+52)+'M'+(CT.px+44)+' 274H'+(CT.px+52)+'M'+(CT.px+48)+' 118V274"/></g>';
  /* step 2: the melt fills the cavity from the gate */
  g+='<g id="melt"><path class="ml" id="mlr" d="M404 196H461"/><g clip-path="url(#ctClip)"><rect id="mlf" class="mfill" x="'+(CT.px-32)+'" y="196" width="64" height="0"/></g></g>';
  /* step 3: the released part and the CMM probe */
  g+='<g id="rel"><path class="pt" d="'+ctPart(0)+'"/><path class="pr" id="prb" d="M'+CT.px+' 40V44"/><circle class="prb" id="prt" cx="'+CT.px+'" cy="48" r="4"/></g>';
  /* labels, one per step, in the clear band above the press */
  var lyy=mob?44:34,lx2=mob?250:40,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a w" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'A TWO-PLATE MOLD':'AN INJECTION PRESS AND ITS MOLD')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'CAVITY AND GATE':'THE CAVITY, ITS GATE AND TOLERANCES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'MELT FILLS THE MOLD':'RESIN MELTS AND FILLS THE CAVITY')+'</text></g>';
  g+='<g id="lb3"><text class="a g" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'MEASURED PART':'THE MOLD OPENS · THE PART IS MEASURED')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .mf",svg),scr:$("#scr",svg),pel:$("#pel",svg),pl:$$("#pel .pl",svg),mov:$("#mov",svg),
    cav:$("#cav",svg),cvl:dl("#cvl,#rnl"),dm:$$("#cav .dm",svg),melt:$("#melt",svg),mlf:$("#mlf",svg),rel:$("#rel",svg),prb:$("#prb",svg),prt:$("#prt",svg),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.pl.forEach(function(c,i){c._y=+c.getAttribute("data-y");c._d=ctR(i+40)});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.scr,b);op(E.mov,b)}
    /* step 1: the cavity outline and runner draw in, then the dimension lines */
    var c1=seg(p,.04,.22);op(E.cav,b);draw(E.cvl,c1);E.dm.forEach(function(d){op(d,seg(p,.16,.24)*(1-seg(p,.36,.42)))});
    /* step 2: pellets fall, the screw drives forward, the melt fills the cavity outward from the gate */
    op(E.pel,b*(1-seg(p,.6,.66)));
    E.pl.forEach(function(c){var v=seg(p,.34+c._d*.1,.44+c._d*.1);c.setAttribute("cy",(c._y+v*(196-c._y)).toFixed(1));c.style.opacity=(1-seg(p,.42+c._d*.1,.46+c._d*.1)).toFixed(3)});
    var dr=seg(p,.42,.6);E.scr.setAttribute("transform","translate("+(dr*16).toFixed(1)+" 0)");
    op(E.melt,b*seg(p,.4,.44)*(1-seg(p,.7,.74)));
    var fl=seg(p,.44,.62),hy=fl*80;E.mlf.setAttribute("y",(196-hy).toFixed(1));E.mlf.setAttribute("height",(hy*2).toFixed(1));
    /* step 3: the mold opens (moving half slides right); the part stands free and the probe touches it */
    var o=seg(p,.68,.8);E.mov.setAttribute("transform","translate("+(o*66).toFixed(1)+" 0)");
    op(E.rel,b*seg(p,.7,.74));E.rel.setAttribute("transform","translate("+(o*33).toFixed(1)+" 0)");
    var pd=seg(p,.8,.9);E.prb.setAttribute("d","M"+CT.px+" 40V"+(44+pd*64).toFixed(1));E.prt.setAttribute("cy",(48+pd*64).toFixed(1));
    op(E.cav,b*(1-seg(p,.7,.74)));
    op(E.l0,b*(1-seg(p,.04,.1)));op(E.l1,b*seg(p,.11,.17)*(1-seg(p,.32,.37)));op(E.l2,b*seg(p,.39,.45)*(1-seg(p,.64,.69)));op(E.l3,b*seg(p,.74,.8));
  };
}
