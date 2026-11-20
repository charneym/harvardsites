/* the story scene (BL/BY/DB): ONE engraved synapse kept on screen for all three steps: an axon terminal with its vesicles above,
   a dendritic spine with NMDA receptors in its postsynaptic density, and the dendrite shaft with its microtubules below.
   Step 1 tau leaves the microtubules of the shaft and climbs the neck into the spine. Step 2 it brings Fyn to the postsynaptic
   density; amyloid-β gathers in the cleft and the receptors light (the toxic signal). Step 3 small-molecule inhibitors dock at
   the signalling complex and the signal goes quiet. Sources: Ittner et al., Cell 2010 (dendritic tau targets Fyn to the
   postsynapse, coupling Aβ to NMDA-receptor excitotoxicity; tau-deficient mice protected) and Ittner & Ittner, Neuron 2018,
   both cited on SynaptraBIO's About page; the inhibitor is drawn as a schematic (targets not disclosed). Driven by the scrubbed story progress. */
var SYN={
  shaft:{y0:404,y1:484},
  head:{cx:420,cy:268,rx:118,ry:62},
  neck:[[402,328],[438,328],[432,404],[408,404]],
  rec:[[372,206],[420,202],[468,206]],
  bout:{cx:420,cy:104,rx:150,ry:84}
};
/* tau: 12 dots on the shaft's microtubules; the first 7 climb into the spine */
var TAU=(function(){var a=[],xs=[90,170,250,310,360,480,540,600,660,720,140,690],ys=[424,444,464,424,464,444,424,464,444,424,464,444],i;
  var dest=[[372,236],[400,250],[440,250],[468,236],[386,282],[454,282],[420,298]];
  for(i=0;i<12;i++)a.push({x:xs[i],y:ys[i],d:i<7?dest[i]:null,o:i*.06});return a})();
function tauPos(t,s){if(!t.d)return [t.x,t.y];
  /* along the shaft to the neck foot, up the neck, then out to its place in the head */
  var foot=[420,436],top=[420,322],u=Math.max(0,Math.min(1,s*1.35-t.o)),a,b,k;
  if(u<.4){k=u/.4;a=[t.x,t.y];b=foot}else if(u<.7){k=(u-.4)/.3;a=foot;b=top}else{k=(u-.7)/.3;a=top;b=t.d}
  k=k*k*(3-2*k);return [a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k]}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,H=SYN.head,B=SYN.bout;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="rg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d24bc4" stop-opacity=".55"/><stop offset="1" stop-color="#d24bc4" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="tg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d24bc4" stop-opacity=".5"/><stop offset="1" stop-color="#d24bc4" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* dendrite shaft: two membranes with a slight sway, microtubules inside */
  var top='M-10 '+SYN.shaft.y0+' C200 398 330 410 402 404',top2='M438 404 C520 398 640 410 810 402',bot='M-10 '+SYN.shaft.y1+' C220 490 560 478 810 486';
  g+='<path class="mem sD" d="'+top+'"/><path class="mem sD" d="'+top2+'"/><path class="mem sD" d="'+bot+'"/>';
  [424,444,464].forEach(function(y){g+='<path class="mt sD" d="M10 '+y+' L790 '+y+'"/>'});
  /* small spines along the shaft (mushroom, thin, stubby), part of the same dendrite */
  g+='<path class="mem2 sD" d="M140 402 C138 380 132 366 126 352 C110 344 112 320 136 318 C160 316 166 340 152 352 C148 366 150 384 152 402"/>';
  g+='<path class="mem2 sD" d="M650 404 C652 390 646 378 652 368 C664 356 690 362 688 380 C686 394 676 398 674 404"/>';
  g+='<path class="mem2 sD" d="M250 486 C252 500 246 512 240 522 C232 538 256 548 266 534 C272 524 266 510 268 486"/>';
  g+='<path class="mem2 sD" d="M560 482 C562 498 560 512 566 524 C574 538 594 530 590 516 C586 504 580 496 582 482"/>';
  /* the main spine: neck and head */
  g+='<path class="mem sD" d="M402 404 C404 380 406 352 402 330 C350 326 300 298 304 262 C308 226 360 206 420 206 C480 206 532 226 536 262 C540 298 490 326 438 330 C434 352 436 380 438 404"/>';
  /* postsynaptic density */
  g+='<path class="psd sD" d="M352 222 C384 210 456 210 488 222"/>';
  /* axon terminal: the axon comes in from the top left and swells into the bouton */
  g+='<path class="mem sD" d="M188 -10 C214 26 248 44 276 60 C300 30 360 18 420 18 C500 18 570 50 570 104 C570 160 500 190 420 190 C340 190 280 168 270 130 C262 106 236 82 200 72 C170 62 150 34 140 -10"/>';
  for(i=0;i<9;i++){var vx=[330,368,404,440,478,514,352,456,404][i],vy=[92,72,96,70,94,78,130,130,148][i];g+='<circle class="ves sD" cx="'+vx+'" cy="'+vy+'" r="13"/>'}
  /* NMDA receptors spanning the spine membrane */
  SYN.rec.forEach(function(r,j){g+='<g class="rcp"><rect class="rc sD" x="'+(r[0]-7)+'" y="'+(r[1]-12)+'" width="14" height="24"/><path class="rc sD" d="M'+r[0]+' '+(r[1]-12)+'V'+(r[1]+12)+'"/></g>'});
  g+='<text class="t" x="'+(mob?24:24)+'" y="'+(mob?30:30)+'">AXON TERMINAL</text>';
  g+='<text class="t" x="24" y="'+(mob?394:390)+'">DENDRITE</text>';
  g+='<text class="t" x="784" y="546" text-anchor="end">SYNAPSE · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* amyloid-β in the cleft */
  for(i=0;i<9;i++){var ax=330+i*20+((i*37)%11)-5,ay=196+((i*53)%9)-4;g+='<g class="ab" transform="translate('+ax+' '+ay+')"><circle r="3.4" cx="-3"/><circle r="3.4" cx="3"/><circle r="3" cy="-4"/></g>'}
  /* receptor glow: the toxic signal */
  SYN.rec.forEach(function(r){g+='<circle class="rgl" cx="'+r[0]+'" cy="'+(r[1]+6)+'" r="34" fill="url(#rg)"/>'});
  /* Fyn: carried in by tau, docks under the receptors */
  SYN.rec.forEach(function(r,j){g+='<g class="fyn" data-j="'+j+'"><path d="M-11 -3 C-11 -10 -3 -12 3 -10 C11 -8 13 0 9 6 C5 11 -7 11 -10 5 Z"/></g>'});
  /* tau */
  TAU.forEach(function(t,j){g+='<g class="tau"><circle class="tg" r="13" fill="url(#tg)"/><circle class="tc" r="5.2"/></g>'});
  /* inhibitors: small engraved hexagons */
  SYN.rec.forEach(function(r,j){var s='';for(var k=0;k<6;k++){var a=Math.PI/3*k+Math.PI/6;s+=(k?'L':'M')+f(9*Math.cos(a))+' '+f(9*Math.sin(a))}g+='<g class="inh"><path d="'+s+'Z"/><circle r="2.4"/></g>'});
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="'+(mob?776:784)+'" y="'+(mob?300:300)+'" text-anchor="end">TAU</text>'+(mob?'':'<text class="t" x="784" y="320" text-anchor="end">LEAVES THE MICROTUBULES</text>')+'<path class="ldr" d="M'+(mob?712:640)+' '+(mob?290:292)+'L478 244"/></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+(mob?230:236)+'">'+(mob?'FYN · Aβ':'FYN · AMYLOID-β')+'</text>'+(mob?'':'<text class="t" x="24" y="256">TOXIC SIGNAL AT THE NMDA RECEPTOR</text>')+'<path class="ldr" d="M'+(mob?150:200)+' '+(mob?240:226)+'L358 214"/></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?776:784)+'" y="'+(mob?300:300)+'" text-anchor="end">'+(mob?'INHIBITOR':'SMALL-MOLECULE INHIBITOR')+'</text>'+(mob?'':'<text class="t" x="784" y="320" text-anchor="end">SCHEMATIC · TARGET NOT SHOWN</text>')+'<path class="ldr" d="M'+(mob?712:640)+' '+(mob?290:292)+'L494 252"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),tau:$$(".tau",svg),fyn:$$(".fyn",svg),ab:$$(".ab",svg),rgl:$$(".rgl",svg),
    inh:$$(".inh",svg),rcp:$$(".rcp",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,x,y,s){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(s?" scale("+s.toFixed(3)+")":""))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.38,.58),s3=seg(p,.7,.88);
    /* tau: bound to the shaft, then climbing into the spine (with a slight drift while it sits) */
    E.tau.forEach(function(el,j){var t=TAU[j],q=tauPos(t,s1),w=Math.sin(p*30+j*1.7)*1.4;tr(el,q[0]+w,q[1]+(t.d?0:Math.cos(p*24+j)*.8));
      op(el,.95);el.classList.toggle("in",!!t.d&&s1>.9)});
    /* Fyn rides in with the last tau and docks under each receptor in step 2 */
    E.fyn.forEach(function(el,j){var r=SYN.rec[j],sx=[386,420,454][j],sy=[282,298,282][j],x=sx+(r[0]-sx)*s2,y=sy+(r[1]+24-sy)*s2;
      tr(el,x,y,1);op(el,seg(p,.26,.36))});
    /* amyloid-β gathers in the cleft */
    E.ab.forEach(function(el,j){var d=(1-s2)*(30+j*6);var base=el.getAttribute("data-b");if(!base){base=el.getAttribute("transform");el.setAttribute("data-b",base)}
      var m=/translate\(([-\d.]+) ([-\d.]+)\)/.exec(base);tr(el,+m[1]+(j%2?d:-d)*.6,+m[2]-d*.5);op(el,s2*.95)});
    /* the toxic signal: receptors glow and pulse in step 2, then go quiet as the inhibitors dock */
    var pulse=.75+.25*Math.sin(p*60);
    E.rgl.forEach(function(el){op(el,s2*(1-s3)*pulse)});
    E.rcp.forEach(function(el){el.classList.toggle("hot",s2>.5&&s3<.5)});
    /* inhibitors come in from the right and dock beside Fyn */
    E.inh.forEach(function(el,j){var r=SYN.rec[j],k=seg(p,.7+j*.04,.86+j*.03),x=820+(r[0]+14-820)*k,y=150+(r[1]+40-150)*k;tr(el,x,y);op(el,k)});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}
