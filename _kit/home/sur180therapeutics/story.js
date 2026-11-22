/* the story scene (BL/BY/DB): how SUR180's approach works, drawn in fine engraved line. ONE pelvic scene stays on screen for all three
   steps: the uterus with its tubes and ovaries, three endometriosis lesions on the surrounding peritoneum, adhesion bands tying two
   lesions to the uterus, and CRHR1 receptors (small Y forks) on each lesion.
   Step 1 stress axis: CRH (pink dots) descends from the stress (HPA) axis and binds CRHR1 on the lesions; the lesions flare, pain
   radiates, the adhesions hold.
   Step 2 block CRHR1: oral pexacerfont (bone hexagons) rises from below and caps every receptor; the CRH dots can no longer bind and fade.
   Step 3 relief: the lesions calm, the pain marks go, the adhesion bands shrink to half, and the ovaries light up: reproductive hormones
   untouched. Sources: sur180therapeutics.com (Our Approach, HPA/gonadal axis figure) and the Biology of Reproduction post. Schematic. */
var LES=[[268,352],[540,372],[628,446]];
function rcp(L){var o=[];[-2.2,-1.57,-.9].forEach(function(t){o.push([L[0]+Math.cos(t)*21,L[1]+Math.sin(t)*17,t])});return o}
var RC=[];LES.forEach(function(L){RC=RC.concat(rcp(L))});
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="pglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e760bb" stop-opacity=".1"/><stop offset="1" stop-color="#e760bb" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase"><ellipse class="pg" cx="400" cy="320" rx="340" ry="230" fill="url(#pglow)"/>';
  /* peritoneal floor */
  g+='<path class="vl sD" d="M40 470C180 530 620 530 760 470"/><path class="vl sD" d="M90 500C230 548 570 548 710 500"/>';
  /* uterus: body, cavity, cervix */
  g+='<path class="vw sD" d="M332 214C332 168 468 168 468 214C468 276 442 320 426 360L426 418C426 432 374 432 374 418L374 360C358 320 332 276 332 214Z"/>';
  g+='<path class="vl sD" d="M370 224C385 214 415 214 430 224C421 262 409 292 400 318C391 292 379 262 370 224Z"/>';
  g+='<path class="vl sD" d="M386 380H414M388 396H412"/>';
  /* tubes with fimbriae */
  g+='<path class="vw sD" d="M336 204C292 178 252 168 214 186C192 196 180 214 174 236"/><path class="vw sD" d="M464 204C508 178 548 168 586 186C608 196 620 214 626 236"/>';
  g+='<path class="vl sD" d="M174 236l-14 8M174 236l-8 14M174 236l2 16M626 236l14 8M626 236l8 14M626 236l-2 16"/>';
  /* ligaments and ovaries with follicles */
  g+='<path class="vl sD" d="M232 272C278 276 314 258 338 240"/><path class="vl sD" d="M568 272C522 276 486 258 462 240"/>';
  [[200,268,-18],[600,268,18]].forEach(function(o){g+='<g transform="translate('+o[0]+' '+o[1]+') rotate('+o[2]+')"><ellipse class="vw sD" rx="36" ry="23"/><circle class="vl sD" cx="-12" cy="-4" r="6"/><circle class="vl sD" cx="6" cy="6" r="5"/><circle class="vl sD" cx="14" cy="-7" r="4"/></g>'});
  g+='<text class="t" x="34" y="548">'+(mob?'UTERUS · OVARIES':'UTERUS · OVARIES · PERITONEUM')+'</text></g>';
  /* ovaries lit in step 3 */
  g+='<g id="ovl">';[[200,268,-18],[600,268,18]].forEach(function(o){g+='<ellipse class="ovg" transform="translate('+o[0]+' '+o[1]+') rotate('+o[2]+')" rx="36" ry="23"/>'});g+='</g>';
  /* adhesion bands: full (steps 1-2) and halved (step 3) */
  g+='<g id="adh"><path class="ad" d="M282 340C304 322 326 306 344 296"/><path class="ad" d="M276 348C300 334 324 318 348 306"/><path class="ad" d="M526 362C496 352 466 344 438 338"/><path class="ad" d="M528 370C498 362 466 356 434 352"/></g>';
  g+='<g id="adh2"><path class="ad" d="M282 340C292 332 300 326 308 320"/><path class="ad" d="M526 362C512 358 500 354 488 352"/></g>';
  /* lesions: outline, flared fill, calm fill */
  LES.forEach(function(L){var x=L[0],y=L[1],d='M'+(x-20)+' '+(y+2)+'C'+(x-22)+' '+(y-14)+' '+(x-6)+' '+(y-19)+' '+(x+4)+' '+(y-15)+'C'+(x+18)+' '+(y-18)+' '+(x+24)+' '+(y-4)+' '+(x+19)+' '+(y+6)+'C'+(x+16)+' '+(y+18)+' '+(x-2)+' '+(y+17)+' '+(x-9)+' '+(y+13)+'C'+(x-17)+' '+(y+12)+' '+(x-21)+' '+(y+8)+' '+(x-20)+' '+(y+2)+'Z';
    g+='<path class="les" d="'+d+'"/><path class="lesh" d="'+d+'"/><path class="lesc" d="'+d+'"/>'});
  /* pain marks */
  g+='<g id="pain">';LES.forEach(function(L){[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(function(s){var x=L[0]+s[0]*30,y=L[1]+s[1]*26;
    g+='<path class="pn2" d="M'+x+' '+y+'l'+(s[0]*6)+' '+(s[1]*-3)+'l'+(s[0]*3)+' '+(s[1]*7)+'l'+(s[0]*6)+' '+(s[1]*-3)+'"/>'})});g+='</g>';
  /* CRHR1 receptors */
  RC.forEach(function(r){var dx=Math.cos(r[2]),dy=Math.sin(r[2]),x2=r[0]+dx*8,y2=r[1]+dy*8;
    g+='<path class="rc" d="M'+f(r[0])+' '+f(r[1])+'L'+f(x2)+' '+f(y2)+'M'+f(x2)+' '+f(y2)+'l'+f(dx*5-dy*4)+' '+f(dy*5+dx*4)+'M'+f(x2)+' '+f(y2)+'l'+f(dx*5+dy*4)+' '+f(dy*5-dx*4)+'"/>'});
  /* CRH dots and pexacerfont hexagons, one per receptor */
  g+='<g id="crh">';RC.forEach(function(){g+='<circle class="crh" r="4.6"/>'});g+='</g>';
  g+='<g id="pex">';RC.forEach(function(){g+='<path class="pex" d="M-6 0L-3 -5.2H3L6 0L3 5.2H-3Z"/>'});g+='</g>';
  /* labels, one set per step */
  g+='<g id="l1"><path class="ldr" d="M400 54V104"/><text class="a" x="400" y="40" text-anchor="middle">'+(mob?'CRH · STRESS AXIS':'CRH FROM THE STRESS (HPA) AXIS')+'</text>'+
    '<path class="ldr" d="M654 348L700 316H770"/><text class="a" x="770" y="302" text-anchor="end">'+(mob?'CRHR1':'CRHR1 ON LESIONS')+'</text></g>';
  g+='<g id="l2"><path class="ldr" d="M566 400L620 486H770"/><text x="770" y="474" text-anchor="end">'+(mob?'PEXACERFONT':'ORAL PEXACERFONT')+'</text>'+
    '<path class="ldr" d="M654 348L700 316H770"/><text class="a" x="770" y="302" text-anchor="end">'+(mob?'BLOCKED':'RECEPTOR BLOCKED')+'</text></g>';
  g+='<g id="l3"><path class="ldr" d="M634 252L680 210H770"/><text class="a" x="770" y="196" text-anchor="end">'+(mob?'HORMONES INTACT':'HORMONES · FERTILITY INTACT')+'</text>'+
    '<path class="ldr" d="M296 324L240 296H34"/><text x="34" y="282">'+(mob?'ADHESIONS ½':'ADHESION SCORES HALVED')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),rc:dl(".rc"),les:dl(".les"),fade:$$("#scBase text, #scBase .pg",svg),lesh:$$(".lesh",svg),lesc:$$(".lesc",svg),
    adh:$("#adh",svg),adh2:$("#adh2",svg),pain:$("#pain",svg),ovl:$("#ovl",svg),crh:$$("#crh circle",svg),pex:$$("#pex path",svg),
    rcs:$$(".rc",svg),l1:$("#l1",svg),l2:$("#l2",svg),l3:$("#l3",svg)};
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ez(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.les,b);draw(E.rc,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var calm=seg(p,.74,.9),blk=seg(p,.38,.6);
    /* step 1: CRH falls from the top onto each receptor; step 2: knocked off and fading as the drug caps the receptor */
    E.crh.forEach(function(el,k){var r=RC[k],m=ez(seg(p,.03+k*.018,.2+k*.018)),dx=Math.cos(r[2]),dy=Math.sin(r[2]);
      var tx=r[0]+dx*16,ty=r[1]+dy*16,sx=400+(k%3-1)*14,sy=108;
      var x=sx+(tx-sx)*m,y=sy+(ty-sy)*m;
      var off=ez(seg(blk,k/9*.5,k/9*.5+.5));x+=dx*24*off;y+=dy*24*off;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*seg(p,.02+k*.018,.06+k*.018)*(1-off))});
    var flare=seg(p,.12,.3)*(1-calm);
    E.lesh.forEach(function(el){op(el,b*flare)});E.lesc.forEach(function(el){op(el,b*calm)});
    op(E.pain,b*seg(p,.18,.3)*(1-seg(p,.72,.82)));
    E.pex.forEach(function(el,k){var r=RC[k],m=ez(seg(blk,k/9*.5,k/9*.5+.5)),dx=Math.cos(r[2]),dy=Math.sin(r[2]);
      var tx=r[0]+dx*15,ty=r[1]+dy*15,sx=tx+(k%2?30:-30),sy=560;
      el.setAttribute("transform","translate("+(sx+(tx-sx)*m).toFixed(1)+" "+(sy+(ty-sy)*m).toFixed(1)+") rotate("+(m*120).toFixed(0)+")");op(el,b*seg(blk,k/9*.5,k/9*.5+.12))});
    E.rcs.forEach(function(el){el.classList.toggle("off",blk>.6)});
    op(E.adh,b*(1-calm));op(E.adh2,b*calm);op(E.ovl,seg(p,.8,.92));
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.34)));op(E.l2,seg(p,.46,.54)*(1-seg(p,.66,.7)));op(E.l3,seg(p,.8,.88));
  };
}
