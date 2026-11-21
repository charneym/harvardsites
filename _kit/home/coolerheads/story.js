/* the story scene (BL/BY/DB): how Amma works, drawn in fine engraved line. ONE patient and ONE unit stay on screen for all three steps.
   Step 1 the fit: Cooling Wrap on the scalp, Neoprene Strap, Compression Cap (labelled); cooling starts 30 minutes before chemotherapy.
   Step 2 cooling: the Portable Cooling Unit circulates a chilled solution through the wrap (flow along the tube and the wrap channels);
   an inset of the scalp shows the vessels beside a follicle narrowing and the follicle resting.
   Step 3 out of the chair: the unit rolls with the patient; a dial marks the 2 to 3 hours of cooling after the infusion.
   Sources: coolerheads.com home FAQ, Why Amma and Providers pages. Schematic, not to scale. Driven by the scrubbed story progress. */
function scene(){
  var mob=MOBILE(),g='',i,X=mob?48:40;
  function chan(o){return 'M'+(204+o*.55)+' 300C'+(200+o*.5)+' '+(222+o*.6)+' '+(242+o*.2)+' '+(172+o)+' 300 '+(172+o)+'C'+(358-o*.2)+' '+(172+o)+' '+(400-o*.5)+' '+(222+o*.6)+' '+(396-o*.55)+' 300'}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="cglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9fd0d6" stop-opacity=".14"/><stop offset="1" stop-color="#9fd0d6" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="inclip"><circle cx="640" cy="132" r="82"/></clipPath></defs>';
  g+='<g id="scBase"><circle class="pg" cx="300" cy="300" r="240" fill="url(#cglow)"/>';
  /* shoulders and neck */
  g+='<path class="body sD" d="M262 404C262 430 258 448 250 458C214 470 168 482 140 506C124 520 116 540 112 560"/><path class="body sD" d="M338 404C338 430 342 448 350 458C386 470 432 482 460 506C476 520 484 540 488 560"/>';
  g+='<path class="body2 sD" d="M250 458C268 478 332 478 350 458"/>';
  /* face */
  g+='<path class="face sD" d="M226 300C226 380 262 428 300 428C338 428 374 380 374 300"/>';
  g+='<path class="face2 sD" d="M290 338Q300 346 310 338"/><path class="face2 sD" d="M282 372Q300 386 318 372"/><path class="face2 sD" d="M262 304Q272 298 282 304"/><path class="face2 sD" d="M318 304Q328 298 338 304"/>';
  /* the compression cap: dome, ear flaps and chin strap (filled, so the face line stops under it) */
  g+='<path class="cap sD" d="M198 312C192 214 238 156 300 156C362 156 408 214 402 312L392 318C384 296 376 284 368 280C360 232 334 214 300 214C266 214 240 232 232 280C224 284 216 296 208 318Z"/>';
  g+='<path class="cap sD" d="M208 318L216 384C226 410 252 424 268 428L266 398C252 390 240 372 236 344L232 282Z"/><path class="cap sD" d="M392 318L384 384C374 410 348 424 332 428L334 398C348 390 360 372 364 344L368 282Z"/>';
  g+='<path class="strap sD" d="M268 428C286 446 314 446 332 428L334 404C314 418 286 418 266 404Z"/>';
  /* the cooling wrap's channels, inside the dome */
  for(i=0;i<3;i++)g+='<path class="ch sD" d="'+chan(18+i*14)+'"/>';
  /* tube from the cap to the unit */
  g+='<path class="tube sD" d="M402 300C450 304 470 330 500 360C530 390 560 392 592 392"/><path class="tube2 sD" d="M402 308C452 312 468 338 496 366C526 396 560 400 592 400"/>';
  /* the portable cooling unit: body, display, vents, telescoping handle, wheels */
  g+='<g id="unit"><path class="unit sD" d="M592 352H708V482H592Z"/><path class="unit2 sD" d="M604 366H696V402H604Z"/><path class="unit2 sD" d="M612 384H630M636 384H654M660 384H672"/>'+
     '<path class="unit2 sD" d="M604 418H696M604 434H696M604 450H696"/><path class="unit sD" d="M620 352V262H680V352"/><path class="unit2 sD" d="M612 262H688"/>'+
     '<circle class="unit sD" cx="612" cy="494" r="12"/><circle class="unit sD" cx="688" cy="494" r="12"/></g>';
  g+='<path class="floor sD" d="M540 506H770"/>';
  g+='</g>';
  /* step 1: the three parts of the cap, and when cooling starts */
  g+='<g id="s1">';
  g+='<path class="ldr" d="M232 186L180 120H'+X+'"/><text class="a" x="'+X+'" y="108">'+(mob?'CAP':'COMPRESSION CAP')+'</text>';
  g+='<path class="ldr" d="M246 238L170 238L150 218H'+X+'"/><text class="a" x="'+X+'" y="206">'+(mob?'WRAP':'COOLING WRAP')+'</text>';
  g+='<path class="ldr" d="M282 436L170 470H'+X+'"/><text class="a" x="'+X+'" y="458">'+(mob?'STRAP':'NEOPRENE STRAP')+'</text>';
  g+='<text class="t" x="650" y="232" text-anchor="middle">'+(mob?'30 MIN BEFORE':'STARTS 30 MIN BEFORE CHEMO')+'</text></g>';
  /* step 2: flowing coolant, and an inset of the scalp: skin, a follicle, the vessels beside it narrowing */
  g+='<g id="s2"><path class="flow" d="M402 304C451 308 469 334 498 363C528 393 560 396 592 396"/>';
  for(i=0;i<3;i++)g+='<path class="flow fc" d="'+chan(18+i*14)+'"/>';
  g+='<path class="ldr" d="M350 182L560 146"/><circle class="inr" cx="640" cy="132" r="82"/>';
  g+='<g clip-path="url(#inclip)"><path class="skin" d="M552 92C590 86 690 86 730 92"/><path class="skin2" d="M552 104C590 98 690 98 730 104"/>'+
     '<path class="hair" d="M640 40V150"/><path class="foll" d="M630 112C630 160 626 178 640 186C654 178 650 160 650 112"/><ellipse class="foll" cx="640" cy="186" rx="13" ry="10"/>'+
     '<path class="ves" d="M592 214C600 170 604 140 606 96"/><path class="ves" d="M688 214C680 170 676 140 674 96"/></g>';
  g+='<text class="a" x="640" y="246" text-anchor="middle">'+(mob?'FOLLICLE RESTS':'VESSELS NARROW · FOLLICLE RESTS')+'</text></g>';
  /* step 3: a dial of the 2 to 3 hours after the infusion, and the unit's travel along the floor */
  g+='<g id="s3"><circle class="dtr" cx="650" cy="164" r="64"/><path class="dfl" d="M650 100A64 64 0 1 1 649.9 100"/>';
  for(i=0;i<12;i++){var aa=i*30*Math.PI/180;g+='<path class="dtk" d="M'+(650+54*Math.sin(aa)).toFixed(1)+' '+(164-54*Math.cos(aa)).toFixed(1)+'L'+(650+46*Math.sin(aa)).toFixed(1)+' '+(164-46*Math.cos(aa)).toFixed(1)+'"/>'}
  g+='<text class="big" x="650" y="174" text-anchor="middle">2–3 h</text><text class="t" x="650" y="258" text-anchor="middle">'+(mob?'AFTER INFUSION':'OF COOLING AFTER THE INFUSION')+'</text>'+
     '<path class="trail" d="M548 520H744"/></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .pg",svg),s1:$("#s1",svg),l1:dl("#s1 .ldr"),s2:$("#s2",svg),fl:$$("#s2 .flow",svg),v:$$("#s2 .ves",svg),
    fo:$$("#s2 .foll",svg),s3:$("#s3",svg),df:dl("#s3 .dfl"),unit:$("#unit",svg)};
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1 */
    var o1=1-seg(p,.28,.36);op(E.s1,seg(b,.6,1)*o1);draw(E.l1,seg(b,.6,1));
    /* step 2: the coolant flows (dashes travel), the vessels narrow and the follicle dims */
    var o2=1-seg(p,.62,.7);op(E.s2,b*seg(p,.34,.44)*o2);
    E.fl.forEach(function(el){el.style.strokeDashoffset=(-p*900).toFixed(1)});
    var nv=seg(p,.42,.58);E.v.forEach(function(el){el.style.strokeWidth=(9-6*nv).toFixed(2)});E.fo.forEach(function(el){el.style.opacity=(1-.45*nv).toFixed(3)});
    /* step 3: the dial fills and the unit rolls along the floor */
    op(E.s3,b*seg(p,.68,.76));draw(E.df,seg(p,.74,.94));
    E.unit.setAttribute("transform","translate("+(36*seg(p,.72,.92)).toFixed(1)+" 0)");
  };
}
