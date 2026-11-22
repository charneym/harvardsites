/* The story scene (BL/BY/DB): how Archimedes works, after Simergent's own description (510(k) summary K250523: gravity
   fill/drain via software-controlled valves, scales for fluid measurement, aluminium heater tray, mobile cart, drain
   containers; shrouded connectors). ONE continuous fine-line elevation of the Archimedes cart, drawn from their product
   photograph, beside a schematic peritoneal cavity. Step 1 (connect): the connector shroud closes over the bag line and the
   screen confirms. Step 2 (fill): the valve opens and warmed dialysate runs downhill from the bag to the cavity, which fills.
   Step 3 (drain): the cavity empties downhill into the drain containers in the base. Driven by the scrubbed progress. */
var SCW=760,SCH=520;
var SGF="M372 140H392M404 140C470 140 522 168 552 226L585 296";
var SGD="M585 300C566 360 528 428 474 448H276";
function sgScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="34 78 700 440" aria-hidden="true">';
  g+='<defs><clipPath id="sgBag"><path d="M190 128q0-14 14-16h130q14 2 14 16z"/></clipPath><clipPath id="sgCav"><ellipse cx="600" cy="300" rx="108" ry="69"/></clipPath><clipPath id="sgDr"><rect x="143" y="408" width="124" height="56"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* cart: base frame, wheels, drain containers */
  g+='<path class="br sD" d="M120 470H330V482H120Z"/>';
  [150,300].forEach(function(x){g+='<circle class="wh sD" cx="'+x+'" cy="500" r="12"/><circle class="wh2 sD" cx="'+x+'" cy="500" r="4"/><path class="ln sD" d="M'+x+' 482V488"/>'});
  g+='<path class="ln sD" d="M140 405H270V467H140Z"/><path class="ln2 sD" d="M140 436H270"/><path class="ln2 sD" d="M152 405V398H170V405M240 405V398H258V405"/>';
  /* mast, controller with touch screen, handle */
  g+='<path class="ln sD" d="M300 470C300 432 262 414 262 380V302"/><path class="ln2 sD" d="M310 470C310 428 272 410 272 380V302"/>';
  g+='<path class="ln sD" d="M200 250H320V302H200Z"/><path class="sc sD" d="M258 258H310V294H258Z"/><path class="ln2 sD" d="M212 268H244M212 276H236"/>';
  g+='<path class="ln sD" d="M262 250V172M272 250V172"/><path class="ln2 sD" d="M272 232H322a9 8 0 0 1 0 16H272"/>';
  /* blue scale unit, aluminium heater tray, solution bag */
  g+='<path class="br sD" d="M170 150H360V172H170Z"/><path class="ln sD" d="M160 150L176 128H372L366 150Z"/>';
  g+='<path class="bag sD" d="M190 128q0-14 14-16h130q14 2 14 16z"/>';
  /* schematic peritoneal cavity */
  g+='<ellipse class="ln sD" cx="600" cy="300" rx="118" ry="78"/><ellipse class="ln2 sD" cx="600" cy="300" rx="108" ry="69"/>';
  /* tubing */
  g+='<path class="tb sD" id="sgF" d="'+SGF+'"/><path class="tb sD" id="sgD" d="'+SGD+'"/>';
  g+='<text class="t" x="160" y="96">HEATER TRAY · SCALE</text>';
  g+='<text class="t" x="190" y="282" text-anchor="end">TOUCH SCREEN</text>';
  g+='<text class="t" x="132" y="426" text-anchor="end">DRAIN</text><text class="t" x="132" y="447" text-anchor="end">CONTAINERS</text>';
  g+='<text class="t" x="630" y="208" text-anchor="middle">PERITONEAL CAVITY</text>';
  g+='</g>';
  /* moving parts */
  g+='<g clip-path="url(#sgBag)"><rect class="fl" id="sgBagL" x="186" y="108" width="170" height="22"/></g>';
  g+='<g clip-path="url(#sgCav)"><rect class="fl" id="sgCavL" x="490" y="370" width="220" height="0"/></g>';
  g+='<g clip-path="url(#sgDr)"><rect class="fd" id="sgDrL" x="143" y="464" width="124" height="0"/></g>';
  g+='<g id="sgCup"><path class="cn" d="M0 -9H14V9H0M14 -4H20V4H14"/></g><path class="cn" d="M384 140H392"/>';
  g+='<path class="ok" id="sgOk" d="M274 276l6 6 14-14"/>';
  g+='<g id="sgDotsF">';for(var i=0;i<12;i++)g+='<circle class="df" r="3"/>';g+='</g>';
  g+='<g id="sgDotsD">';for(i=0;i<12;i++)g+='<circle class="dd" r="3"/>';g+='</g>';
  g+='<g id="lb1"><text class="a" x="730" y="100" text-anchor="end">SHROUDED CONNECTOR</text></g>';
  g+='<g id="lb2"><text class="a" x="730" y="124" text-anchor="end">NO PUMP · LOW PRESSURE</text></g>';
  g+='<g id="lb3"><text class="a" x="730" y="482" text-anchor="end">GENTLE DRAIN · WEIGHED</text></g>';
  return g+'</svg>';
}
function scene(){return sgScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),bag:$("#sgBagL",svg),cav:$("#sgCavL",svg),dr:$("#sgDrL",svg),cup:$("#sgCup",svg),ok:$("#sgOk",svg),
    pf:$("#sgF",svg),pd:$("#sgD",svg),df:$$(".df",svg),dd:$$(".dd",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var LF=E.pf.getTotalLength(),LD=E.pd.getTotalLength(),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function dots(list,path,L,p0,q,b){list.forEach(function(el,i){var u=((i/list.length)+p0*3)%1,pt=path.getPointAtLength(u*L);el.setAttribute("cx",pt.x.toFixed(1));el.setAttribute("cy",pt.y.toFixed(1));op(el,b*q*Math.min(1,Math.min(u,1-u)*8))})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var con=sm2(seg(p,.06,.24)),fill=sm2(seg(p,.38,.62)),drn=sm2(seg(p,.7,.94));
    /* the shroud slides over the bag spike, then the screen confirms */
    E.cup.setAttribute("transform","translate("+(392+16*(1-con)).toFixed(1)+" 140)");op(E.cup,b);op(E.ok,b*seg(p,.22,.28));
    /* fill: the bag empties as the cavity fills; drain: the cavity empties into the base containers */
    var bagH=22*(1-.65*fill);E.bag.setAttribute("y",(130-bagH).toFixed(1));E.bag.setAttribute("height",bagH.toFixed(1));op(E.bag,b);
    var cv=fill*(1-.9*drn),ch=138*cv;E.cav.setAttribute("y",(370-ch).toFixed(1));E.cav.setAttribute("height",ch.toFixed(1));op(E.cav,b);
    var dh=30*drn;E.dr.setAttribute("y",(464-dh).toFixed(1));E.dr.setAttribute("height",dh.toFixed(1));op(E.dr,b);
    dots(E.df,E.pf,LF,p,seg(p,.36,.42)*(1-seg(p,.6,.66)),b);
    dots(E.dd,E.pd,LD,p,seg(p,.68,.74)*(1-seg(p,.92,.98)),b);
    op(E.l1,b*seg(p,.08,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.8));
  };
}
function sm2(x){return x*x*(3-2*x)}
