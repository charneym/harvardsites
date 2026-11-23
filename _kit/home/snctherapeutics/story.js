/* The story scene (DB/BL): how SNC's rapamycin-loaded polymersomes work (snctherapeutics.com; NIH STTR 1R41DK142265
   abstract; Burke et al., Nature Nanotechnology 17:319-330, 2022), as ONE continuous fine-line scene that fills the
   frame: the skin in section at the left with the subcutaneous injection, the lymphatic vessel that drains it, and the
   draining lymph node at the right with an antigen-presenting cell and the T cells around it.
   Frame 0 is already a complete picture. Step 1 (inject): the needle enters and leaves a depot of polymersomes.
   Step 2 (drain): the polymersomes travel the vessel into the node. Step 3 (teach): the antigen-presenting cell takes
   them up, its surface changes, and the T cells it meets become regulatory. Everything is driven by story progress. */
var SCW=760,SCH=668;
var SKY=96;                                  /* the skin surface */
var DEP=[268,236];                           /* the subcutaneous depot */
var LYM="M284 250C352 276 366 332 390 374C412 412 434 428 464 438";   /* the draining lymphatic */
var NX=566,NY=462,NRX=172,NRY=146;           /* the lymph node */
var APC=[552,452];
var TC=(function(){var a=[],i,n=7;for(i=0;i<n;i++){var th=-2.4+i*(4.5/(n-1));a.push([APC[0]+Math.cos(th)*118,APC[1]+Math.sin(th)*96])}return a})();
var VES=[[246,214],[274,206],[292,232],[266,252],[240,242],[300,258],[254,186]];   /* the depot's vesicles */
var FAT=(function(){var a=[],i;for(i=0;i<10;i++){var x=18+i*42,y=SKY+80+(i%3)*24;
  if(Math.abs(x-DEP[0])<96&&Math.abs(y-DEP[1])<86)continue;a.push([x,y])}return a})();
function storyScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ngl"><stop offset="0" stop-color="#a9d24e" stop-opacity=".30"/><stop offset=".6" stop-color="#a9d24e" stop-opacity=".10"/><stop offset="1" stop-color="#a9d24e" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="ncl"><ellipse cx="'+NX+'" cy="'+NY+'" rx="'+(NRX-3)+'" ry="'+(NRY-3)+'"/></clipPath>'+
     '<path id="lymPath" d="'+LYM+'"/></defs>';
  g+='<g id="scBase">';
  /* the skin in section: surface, epidermis, dermis, and the loose subcutaneous layer the injection goes into */
  g+='<path class="wl sD" d="M0 '+SKY+'C90 '+(SKY-8)+' 190 '+(SKY+8)+' 300 '+(SKY-2)+'C390 '+(SKY-10)+' 470 '+(SKY+5)+' 540 '+(SKY-1)+'"/>';
  g+='<path class="wo sD" d="M0 '+(SKY+18)+'C90 '+(SKY+11)+' 190 '+(SKY+26)+' 300 '+(SKY+16)+'C390 '+(SKY+9)+' 470 '+(SKY+23)+' 540 '+(SKY+17)+'"/>';
  g+='<path class="wo sD" d="M0 '+(SKY+58)+'C100 '+(SKY+50)+' 200 '+(SKY+68)+' 312 '+(SKY+56)+'C392 '+(SKY+47)+' 462 '+(SKY+62)+' 520 '+(SKY+56)+'"/>';
  FAT.forEach(function(f){g+='<ellipse class="wo sD" cx="'+f[0]+'" cy="'+f[1]+'" rx="18" ry="14"/>'});
  /* the needle: barrel off-frame at the upper left, bevelled tip in the subcutaneous layer */
  g+='<g id="ndl"><path class="nd sD" d="M12 6L248 220"/><path class="nd sD" d="M26 -8L262 206"/><path class="nd sD" d="M248 220L262 206"/>'+
     '<path class="wl sD" d="M12 6L-40 -42M26 -8L-26 -56"/></g>';
  /* the lymphatic vessel: two walls, valves, running to the node */
  g+='<path class="wl sD" d="'+LYM+'"/>';
  g+='<path class="wl sD" d="M266 280C330 306 340 356 364 398C386 436 412 456 448 466"/>';
  [[340,308],[380,382],[424,438]].forEach(function(v){g+='<path class="en sD" d="M'+v[0]+' '+(v[1]-13)+'l11 13l-11 13"/>'});
  /* the node: capsule, hilum notch at the left, inner paracortex outline */
  g+='<ellipse class="wl sD" cx="'+NX+'" cy="'+NY+'" rx="'+NRX+'" ry="'+NRY+'"/>';
  g+='<path class="wo sD" d="M'+(NX-NRX+10)+' '+(NY+24)+'c26 -16 40 -2 54 8"/>';
  g+='<ellipse class="wo sD" cx="'+(NX+10)+'" cy="'+(NY-8)+'" rx="'+(NRX-48)+'" ry="'+(NRY-46)+'"/>';
  g+=T('t',18,52,'SKIN','start',1);
  g+=T('t',120,348,'LYMPHATIC VESSEL','start');
  g+=T('t',NX,NY-NRY-26,'DRAINING LYMPH NODE','middle',1);
  g+='</g>';
  /* the glow inside the node once the carriers arrive */
  g+='<g id="scGlow" clip-path="url(#ncl)"><circle class="gl" cx="'+APC[0]+'" cy="'+APC[1]+'" r="138" fill="url(#ngl)"/></g>';
  /* the antigen-presenting cell: body, nucleus, dendrites, surface markers */
  g+='<g id="scApc"><g id="apcBody"><path class="cl sD" d="M'+APC[0]+' '+(APC[1]-46)+'c29 0 50 20 50 46c0 28-21 48-50 48c-30 0-51-20-51-48c0-26 21-46 51-46Z"/>'+
     '<ellipse class="wo sD" cx="'+(APC[0]+5)+'" cy="'+(APC[1]+5)+'" rx="20" ry="16"/></g><g id="apcDen">';
  for(i=0;i<8;i++){var th=i*Math.PI/4+.2,x1=APC[0]+Math.cos(th)*48,y1=APC[1]+Math.sin(th)*48,x2=APC[0]+Math.cos(th+.24)*82,y2=APC[1]+Math.sin(th+.24)*70;
    g+='<path class="dn sD" d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+'Q'+((x1+x2)/2+9).toFixed(1)+' '+((y1+y2)/2-11).toFixed(1)+' '+x2.toFixed(1)+' '+y2.toFixed(1)+'"/>'}
  g+='</g><g id="apcMk">';
  for(i=0;i<7;i++){var tm=-1.9+i*.52,mx=APC[0]+Math.cos(tm)*50,my=APC[1]+Math.sin(tm)*48;
    g+='<path class="mk" data-k="'+i+'" d="M'+mx.toFixed(1)+' '+my.toFixed(1)+'l'+(Math.cos(tm)*12).toFixed(1)+' '+(Math.sin(tm)*12).toFixed(1)+'"/>'}
  g+='</g></g>';
  /* the T cells around it */
  g+='<g id="scT">';
  TC.forEach(function(c,k){g+='<g class="tc" data-k="'+k+'"><circle class="cl sD" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="21"/><circle class="tn" cx="'+(c[0]+4).toFixed(1)+'" cy="'+(c[1]-2).toFixed(1)+'" r="8"/></g>'});
  g+='</g>';
  /* the polymersomes: in the depot, then travelling the vessel */
  g+='<g id="scVes">';
  VES.forEach(function(v,k){g+='<g class="vs" data-k="'+k+'"><circle class="vo" cx="'+v[0]+'" cy="'+v[1]+'" r="10"/><circle class="vi" cx="'+v[0]+'" cy="'+v[1]+'" r="5"/></g>'});
  g+='</g><g id="scFlow">';
  for(i=0;i<6;i++){g+='<g class="fv" data-k="'+i+'"><circle class="vo" cx="0" cy="0" r="9"/><circle class="vi" cx="0" cy="0" r="4.5"/></g>'}
  g+='</g>';
  g+='<g class="leg">'+(o.mob?'':'<circle class="vo" cx="28" cy="556" r="9"/><circle class="vi" cx="28" cy="556" r="4.5"/>'+T('t',50,560,'POLYMERSOME, RAPAMYCIN IN ITS WALL')+
     '<circle class="cl lg2" cx="28" cy="592" r="10"/>'+T('t',50,596,'T CELL')+
     '<circle class="cl lg3" cx="28" cy="628" r="10"/>'+T('t',50,632,'REGULATORY T CELL'))+'</g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var path=$("#lymPath",svg),PL=path&&path.getTotalLength?path.getTotalLength():1;
  var E={base:dl("#scBase .sD"),cell:dl("#scApc .sD, #scT .sD"),fade:$$("#scBase text, .leg",svg),
    ndl:$("#ndl",svg),ves:$$("#scVes .vs",svg),flow:$$("#scFlow .fv",svg),den:$$("#apcDen .dn",svg),
    mk:$$("#apcMk .mk",svg),tc:$$("#scT .tc",svg),gl:$(".gl",svg),apc:$("#apcBody",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.cell,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var inj=seg(p,.04,.32),dr=seg(p,.36,.64),tea=seg(p,.68,.96);
    /* 1. the needle slides in along its own axis and the depot fills */
    if(E.ndl){var s=p<.04?1:Math.min(1,inj*1.6);E.ndl.setAttribute("transform","translate("+(-(1-s)*168).toFixed(1)+" "+(-(1-s)*152).toFixed(1)+")");op(E.ndl,b*(1-dr*.75))}
    E.ves.forEach(function(el,k){var t=Math.min(1,Math.max(0,(p<.04?1:inj)*1.5-k*.1));op(el,b*t*(1-dr));
      el.setAttribute("transform","scale("+(.5+.5*t).toFixed(3)+") translate("+((1-t)*VES[k][0]).toFixed(1)+" "+((1-t)*VES[k][1]).toFixed(1)+")")});
    /* 2. carriers travel the lymphatic into the node */
    E.flow.forEach(function(el,k){var t=Math.min(1,Math.max(0,dr*1.45-k*.09));op(el,b*(t>0&&t<1?1:t>=1?1:0)*(t>0?1:0)*(1-tea*.55));
      if(t<=0){op(el,0);return}var q=path.getPointAtLength(Math.min(PL,PL*t));
      el.setAttribute("transform","translate("+q.x.toFixed(1)+" "+q.y.toFixed(1)+")")});
    op(E.gl,b*Math.max(dr*.8,tea));
    /* 3. the cell's surface changes and the T cells it meets become regulatory */
    E.mk.forEach(function(el,k){var t=Math.min(1,Math.max(0,tea*1.4-k*.06));el.style.opacity=(b*t).toFixed(3);
      el.style.strokeWidth=(1+1.1*t).toFixed(2)});
    if(E.apc)E.apc.classList.toggle("on",tea>.25);
    E.den.forEach(function(el,k){el.style.opacity=(b*(.45+.55*Math.min(1,Math.max(0,tea*1.5-k*.05)))).toFixed(3)});
    E.tc.forEach(function(el,k){var t=Math.min(1,Math.max(0,tea*1.5-k*.12));el.classList.toggle("reg",t>.6)});
  };
}
