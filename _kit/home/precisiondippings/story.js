/* The story scene (BL/BY/DB): how a dip-moulded part is made, as precisiondippings.co.uk describes it (drawing board, tooling,
   prototypes, production), drawn as ONE side elevation of a dipping line kept on screen for all four steps:
   1 Design: the former (the tool the rubber forms on, here for a dry suit neck seal) as a technical drawing, centre line and dimensions.
   2 Tooling: the former is made: it fills in as metal on its mounting plate, rod and carriage under the line's rail.
   3 Dip: the former goes down into the latex tank and comes back up with an even coat; a last drip falls back.
   4 Production: two more coated formers on the same rail, for low or high volume.
   Schematic, not to scale. */
var FRM="M245 170H355V262C355 284 322 286 322 300V338Q322 348 300 348Q278 348 278 338V300C278 286 245 284 245 262Z";
var COAT="M240.5 184H359.5V262C359.5 288 326.5 290 326.5 302V338Q326.5 353 300 353Q273.5 353 273.5 338V302C273.5 290 240.5 288 240.5 262Z";
function pdFormer(x,coat,id){
  return '<g'+(id?' id="'+id+'"':'')+' transform="translate('+x+' 0)"><path class="plt" d="M232 160H368V170H232Z"/><path class="fmt" d="'+FRM+'"/>'+
    (coat?'<path class="coat" d="'+COAT+'"/>':'')+'</g>';
}
function surf(a){var y=400,s="M178 "+y;for(var i=0;i<=8;i++){var x=178+i*30.5;s+=(i?"Q"+(x-15.25).toFixed(1)+" "+(y+(i%2?-a:a)).toFixed(1)+" ":"L")+x.toFixed(1)+" "+y}return s}
function pdScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"40 20 520 590":"0 0 600 620")+'" aria-hidden="true"><defs>'+
    '<linearGradient id="pdMet" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7d8ea2"/><stop offset=".38" stop-color="#eef3f8"/><stop offset=".62" stop-color="#c3cfdb"/><stop offset="1" stop-color="#6b7c90"/></linearGradient>'+
    '<linearGradient id="pdCoat" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1b86cf"/><stop offset=".4" stop-color="#6fcbfb"/><stop offset=".65" stop-color="#33acf2"/><stop offset="1" stop-color="#156fae"/></linearGradient>'+
    '<linearGradient id="pdLiq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#33acf2" stop-opacity=".9"/><stop offset="1" stop-color="#0f5f99" stop-opacity=".96"/></linearGradient>'+
    '<clipPath id="pdTop"><path d="M0 0H600V401H0Z"/></clipPath></defs>';
  /* the rail of the dipping line and its carriage */
  g+='<path class="sD rl" d="M40 70H560"/>';
  g+='<g id="pdRig"><path class="crg" d="M268 60H332V84H268Z"/><path class="rod" id="pdRod" d="M300 84V160"/></g>';
  /* the side formers (production), already coated */
  g+='<g id="pdSide">'+pdFormer(-150,1)+'<path class="crg" d="M118 60H182V84H118Z"/><path class="rod" d="M150 84V160"/>'+pdFormer(150,1)+'<path class="crg" d="M418 60H482V84H418Z"/><path class="rod" d="M450 84V160"/></g>';
  /* the tank: back wall, the main former (it travels down), the latex, the front edge */
  g+='<path class="tkb" d="M178 380H422V600H178Z"/>';
  g+='<g id="pdMain"><g id="pdFill" opacity="0">'+pdFormer(0,0)+'</g><path class="coat" id="pdCoat" d="'+COAT+'" opacity="0"/>'+
    '<path class="sD dw" d="'+FRM+'"/><path class="sD dw" d="M232 160H368V170H232Z"/></g>';
  g+='<circle class="drp" id="pdDrp" cx="300" cy="360" r="3.6" opacity="0"/>';
  g+='<path class="liq" d="M178 400H422V600H178Z"/><path class="srf" id="pdSrf" d="'+surf(0)+'"/>';
  g+='<path class="sD tk" d="M170 380V606H430V380"/>';
  /* the drawing: centre line and dimension lines (step 1) */
  g+='<g id="pdDim"><path class="cl" d="M300 120V372"/><path class="dm" d="M245 132H355M245 126V138M355 126V138M249 129L245 132L249 135M351 129L355 132L351 135"/>'+
    '<path class="dm" d="M278 372H322M278 366V378M322 366V378M282 369L278 372L282 375M318 369L322 372L318 375"/>'+
    '<path class="dm" d="M378 170V348M372 170H384M372 348H384M375 174L378 170L381 174M375 344L378 348L381 344"/></g>';
  /* labels (desktop): each sits clear of every stroke (DR3) */
  if(!mob){
    g+='<g id="pdLf"><path class="ld" d="M362 226H392"/><text class="t" x="400" y="230">FORMER</text></g>';
    g+='<g id="pdLl"><path class="ld" d="M422 470H446"/><text class="t" x="454" y="474">LATEX</text></g>';
    g+='<g id="pdLc"><path class="ld" d="M372 300H392"/><text class="t" x="400" y="304">EVEN COAT</text></g>';
  }
  /* the step name, top left, above the rail */
  ["1 · DESIGN","2 · TOOLING","3 · DIP","4 · PRODUCTION"].forEach(function(c,k){g+='<text class="a" id="pdC'+k+'" x="'+(mob?60:40)+'" y="'+(mob?52:40)+'" opacity="0">'+c+'</text>'});
  return g+'</svg>';
}
function scene(){return pdScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return svg.querySelector(s)};
  var E={base:dl(".sD"),dw:$$(".dw",svg),rig:q("#pdRig"),rod:q("#pdRod"),side:q("#pdSide"),main:q("#pdMain"),fill:q("#pdFill"),coat:q("#pdCoat"),
    drp:q("#pdDrp"),srf:q("#pdSrf"),dim:q("#pdDim"),lf:q("#pdLf"),ll:q("#pdLl"),lc:q("#pdLc"),C:[0,1,2,3].map(function(k){return q("#pdC"+k)}),
    still:$$(".liq,.tkb,.srf",svg)};
  var lastB=-1,lastA=-99;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.setAttribute("opacity",Math.max(0,Math.min(1,v)).toFixed(3))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.still.forEach(function(e){op(e,b)})}
    var w=[1-seg(p,.23,.27),seg(p,.23,.27)*(1-seg(p,.48,.52)),seg(p,.48,.52)*(1-seg(p,.73,.77)),seg(p,.73,.77)];
    E.C.forEach(function(c,k){op(c,b*w[k])});
    /* 1 design: the drawing (outline, centre line, dimensions) */
    op(E.dim,b*(1-seg(p,.3,.38)));
    /* 2 tooling: the former fills in as metal, with its plate, rod and carriage */
    var tool=seg(p,.27,.37);op(E.fill,b*tool);op(E.rig,b*tool);
    E.dw.forEach(function(d){d.style.opacity=(1-.75*tool).toFixed(3)});
    op(E.lf,b*seg(p,.34,.4)*(1-seg(p,.5,.54)));
    /* 3 dip: down into the latex, a short dwell, back up coated; the surface ripples as it enters and leaves */
    var dn=seg(p,.52,.6),up=seg(p,.64,.71),dy=228*(dn-up);
    E.main.setAttribute("transform","translate(0 "+dy.toFixed(1)+")");E.rod.setAttribute("d","M300 84V"+(160+dy).toFixed(1));
    op(E.coat,b*seg(p,.56,.6));
    var a=Math.round(7*(Math.sin(Math.PI*seg(p,.55,.62))+Math.sin(Math.PI*seg(p,.63,.72)))*4)/4;
    if(a!==lastA){lastA=a;E.srf.setAttribute("d",surf(a))}
    var dr=seg(p,.71,.76);E.drp.setAttribute("cy",(358+38*dr).toFixed(1));op(E.drp,b*(dr>0&&dr<1?1:0));
    op(E.ll,b*seg(p,.5,.55)*(1-seg(p,.75,.79)));op(E.lc,b*seg(p,.69,.73)*(1-seg(p,.75,.79)));
    /* 4 production: two more coated formers on the same rail */
    var pr=seg(p,.77,.86);op(E.side,b*pr);E.side.setAttribute("transform","translate(0 "+(-14*(1-pr)).toFixed(1)+")");
  };
}
