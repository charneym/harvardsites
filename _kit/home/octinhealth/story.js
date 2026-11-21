/* the story scene (BL/BY/DB): how Elika changes arch surgery, drawn in the fine engraved line of the Octin Health logo.
   ONE aortic arch stays at the centre for all three steps (ascending aorta, arch, the three branches, descending aorta).
   Step 1 today: the body is cooled to about 18°C and the circulation stops (the flow fades out, the dial falls, 20-90 min).
   Step 2 Elika: with the bypass machine, flow is kept to the brain (up the arch branches) and to the lower body (down the
   descending aorta). Step 3: flow and occlusion together let the arch be isolated as a bloodless field.
   Sources: octinhealth.com, HITLAB (2025-06-10), Twin Cities Business (2026-09-17). Schematic, not the device design. */
var ARCH={asc:"M300 540C300 470 296 380 300 300C306 196 360 150 420 150C486 150 534 200 540 282C546 370 544 460 544 540",
  br:[["M356 176C346 140 336 104 322 58","b1"],["M322 92C298 78 268 70 228 72","b2"],["M418 152C420 116 422 80 424 34","b3"],["M478 166C496 130 520 100 560 84C584 74 612 70 640 72","b4"]],
  arch:"M300 300C306 196 360 150 420 150C486 150 534 200 540 282"};
function scene(){
  var mob=MOBILE(),g='',i;
  function tubeP(d,w,cls){return '<path class="tw sD '+cls+'" d="'+d+'" stroke-width="'+w+'"/><path class="tf" d="'+d+'" stroke-width="'+(w-3)+'"/><path class="tc sD" d="'+d+'" stroke-width="'+(w*0.62)+'"/><path class="tf" d="'+d+'" stroke-width="'+(w*0.62-2.2)+'"/>'}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="20 0 760 600" aria-hidden="true">';
  g+='<defs><radialGradient id="oglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ec7b67" stop-opacity=".12"/><stop offset="1" stop-color="#ec7b67" stop-opacity="0"/></radialGradient>'+
     '<pattern id="ohat" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V7" stroke="#ec7b67" stroke-width="1.3"/></pattern></defs>';
  g+='<g id="scBase"><circle cx="420" cy="300" r="290" fill="url(#oglow)" class="pg"/>';
  /* branches first so the arch wall sits over their roots */
  ARCH.br.forEach(function(b){g+=tubeP(b[0],b[1]==="b2"?26:30,"")});
  g+=tubeP(ARCH.asc,78,"");
  g+='<text class="t" x="300" y="'+(mob?590:584)+'" text-anchor="middle">ASCENDING</text><text class="t" x="544" y="'+(mob?590:584)+'" text-anchor="middle">DESCENDING</text></g>';
  /* flow: dashes running along the vessels' centre lines */
  g+='<g id="flw"><path class="fl up" d="M300 540C300 470 296 380 300 300C306 196 360 150 420 150"/>';
  ARCH.br.forEach(function(b){g+='<path class="fl br" d="'+b[0]+'"/>'});
  g+='<path class="fl dn" d="M420 150C486 150 534 200 540 282C546 370 544 460 544 540"/></g>';
  /* step 1: temperature dial and the arrest */
  var C=[118,430],R=64;
  g+='<g id="cold"><path class="dtr" d="M'+(C[0]-R)+' '+C[1]+'A'+R+' '+R+' 0 0 1 '+(C[0]+R)+' '+C[1]+'"/>';
  for(i=0;i<=8;i++){var a=Math.PI+i*Math.PI/8;g+='<path class="dtk" d="M'+(C[0]+(R-12)*Math.cos(a)).toFixed(1)+' '+(C[1]+(R-12)*Math.sin(a)).toFixed(1)+'L'+(C[0]+(R-4)*Math.cos(a)).toFixed(1)+' '+(C[1]+(R-4)*Math.sin(a)).toFixed(1)+'"/>'}
  g+='<path class="ndl" id="ndl" d="M'+C[0]+' '+C[1]+'L'+C[0]+' '+(C[1]-R+16)+'"/><circle class="hub" cx="'+C[0]+'" cy="'+C[1]+'" r="5"/>';
  g+='<text class="big" id="deg" x="'+C[0]+'" y="'+(C[1]+40)+'" text-anchor="middle">37°C</text>';
  g+='<text class="a" x="'+C[0]+'" y="'+(C[1]+66)+'" text-anchor="middle">'+(mob?'COOLED':'BODY COOLED')+'</text>';
  g+='<text class="a cl" x="'+(mob?30:40)+'" y="'+(mob?36:88)+'">'+(mob?'FLOW STOPPED':'CIRCULATION STOPPED')+'</text><text class="t lft" x="'+(mob?30:40)+'" y="'+(mob?64:112)+'">'+(mob?'20–90 MIN':'FOR 20 TO 90 MINUTES')+'</text></g>';
  /* step 2: where the flow goes */
  g+='<g id="keep"><path class="ldr" d="M330 46L262 22H'+(mob?96:150)+'"/><text class="a" x="'+(mob?96:150)+'" y="14">TO THE BRAIN</text>';
  g+='<path class="ldr" d="M552 470L650 470"/><text class="a" x="660" y="'+(mob?462:466)+'">'+(mob?'TO THE':'TO THE LOWER')+'</text><text class="a" x="660" y="'+(mob?490:486)+'">'+(mob?'BODY':'BODY')+'</text>';
  g+='<text class="t lft" x="'+(mob?30:40)+'" y="330">'+(mob?'WITH':'WORKING WITH')+'</text><text class="t lft" x="'+(mob?30:40)+'" y="'+(mob?356:352)+'">'+(mob?'BYPASS':'THE BYPASS MACHINE')+'</text></g>';
  /* step 3: the isolated, bloodless arch */
  g+='<g id="iso"><path class="hk" d="'+ARCH.arch+'" stroke-width="46"/><path class="hf" d="'+ARCH.arch+'" stroke-width="44"/>';
  g+='<path class="occ sD" d="M268 306L332 300"/><path class="occ sD" d="M508 286L572 280"/>';
  g+='<path class="ldr" d="M420 210L420 232"/><text class="a" x="420" y="'+(mob?262:256)+'" text-anchor="middle">'+(mob?'BLOODLESS':'BLOODLESS FIELD')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg, #scBase .tf",svg),flw:$("#flw",svg),fl:$$("#flw .fl",svg),cold:$("#cold",svg),
    ndl:$("#ndl",svg),deg:$("#deg",svg),keep:$("#keep",svg),iso:$("#iso",svg),occ:dl("#iso .occ"),tw:$$("#scBase .tw",svg)};
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the flow slows and fades out while the dial falls from 37 to 18 */
    var c1=seg(p,.04,.24),o1=1-seg(p,.28,.36);op(E.cold,b*seg(p,0,.06)*o1);
    var T=37-19*c1;E.deg.textContent=Math.round(T)+"°C";E.ndl.setAttribute("transform","rotate("+(-90+180*(T-10)/30-90+90).toFixed(1)+" 118 430)");
    svg.classList.toggle("chill",p<.34&&c1>.5);
    /* step 2: flow returns and keeps running, to the brain and to the lower body */
    var f=(p<.34?1-c1:seg(p,.36,.46));op(E.flw,b*Math.max(.0,f));
    var off=(-p*2600).toFixed(1);E.fl.forEach(function(el){el.style.strokeDashoffset=off});
    op(E.keep,b*seg(p,.38,.46)*(1-seg(p,.62,.7)));
    /* step 3: occlusion marks and the bloodless arch */
    op(E.iso,b*seg(p,.68,.76));draw(E.occ,seg(p,.7,.8));
  };
}
