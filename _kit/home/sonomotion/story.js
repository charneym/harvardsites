/* the story scene (BL/BY/DB): how Break Wave works, drawn in fine engraved line. ONE probe, ONE kidney and ONE stone stay on screen for all three steps.
   Step 1 locate: the therapy probe on the skin with the imaging probe at its centre; the imaging beam finds the stone in the renal pelvis (labelled).
   Step 2 break: bursts of focused ultrasound converge on the stone (arcs travel inward) and it parts into small fragments.
   Step 3 clear: Stone Clear repositions the fragments; they travel down the ureter to pass naturally; a dial marks the 15-minute procedure.
   Sources: sonomotion.com home page; PR Newswire releases of Jan 21 and May 14, 2026. Schematic, not to scale. Driven by the scrubbed story progress. */
var SCN={fx:392,fy:356,sh:[[-14,-8],[10,-12],[16,6],[-4,14],[-20,8],[2,-2]]};
function scene(){
  var mob=MOBILE(),g='',i,X=mob?30:36;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="kglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#8ab8e3" stop-opacity=".16"/><stop offset="1" stop-color="#8ab8e3" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ab8e3" stop-opacity=".22"/><stop offset="1" stop-color="#8ab8e3" stop-opacity=".02"/></linearGradient>'+
     '<clipPath id="cone"><path d="M318 176L466 176L'+(SCN.fx+40)+' '+(SCN.fy+30)+'L'+(SCN.fx-40)+' '+(SCN.fy+30)+'Z"/></clipPath></defs>';
  g+='<g id="scBase"><circle class="pg" cx="420" cy="360" r="250" fill="url(#kglow)"/>';
  /* skin surface and a hint of the flank beneath */
  g+='<path class="skin sD" d="M20 196C160 178 280 172 392 172C520 172 640 180 780 200"/><path class="skin2 sD" d="M20 214C160 198 280 192 392 192C520 192 640 198 780 218"/>';
  /* the kidney: outline with the hilum facing down-left, inner cortex line, calyces and pelvis */
  g+='<path class="kid sD" d="M352 270C390 232 470 226 528 252C582 276 604 334 588 390C574 438 530 466 478 466C440 466 420 446 404 428C392 414 372 410 350 414C318 420 296 404 296 372C296 330 316 300 352 270Z"/>';
  g+='<path class="kid2 sD" d="M364 290C398 260 462 256 512 276C556 296 574 340 562 384C552 420 518 444 480 444C452 444 436 430 424 416"/>';
  g+='<path class="kid2 sD" d="M402 382C430 352 458 318 480 296M416 392C452 378 494 366 532 358M408 404C440 410 478 422 508 432"/>';
  g+='<path class="pelv sD" d="M330 386C350 356 384 346 410 360C428 372 430 394 414 410C396 426 362 426 340 414"/>';
  /* the ureter, down to the bladder (off frame) */
  g+='<path class="ure sD" id="ureP" d="M338 412C322 440 314 470 312 500C310 524 314 544 318 560"/><path class="ure2 sD" d="M352 418C338 444 330 472 328 500C326 524 330 544 334 560"/>';
  /* the therapy probe: dish housing on the skin, the imaging probe in its centre, cables up and away */
  g+='<g id="probe"><path class="prb sD" d="M318 172C318 118 338 84 392 84C446 84 466 118 466 172Z"/><path class="prb2 sD" d="M326 150H458"/>'+
     '<path class="prb sD" d="M374 172V58C374 46 382 40 392 40C402 40 410 46 410 58V172"/><path class="prb2 sD" d="M380 164H404"/>'+
     '<path class="cab sD" d="M392 40C392 18 404 0 430 0"/><path class="cab sD" d="M446 96C470 70 476 40 500 0"/></g>';
  g+='</g>';
  /* the stone: one piece in steps 1, parts into fragments in step 2 */
  g+='<g id="stone">';
  var shapes=['M-12 -10L2 -16L8 -6L0 0L-14 -2Z','M2 -16L16 -12L18 0L8 -6Z','M8 -6L18 0L16 10L4 8L0 0Z','M0 0L4 8L-2 16L-12 12Z','M-14 -2L0 0L-12 12L-20 4Z','M-2 16L4 8L16 10L8 18Z'];
  for(i=0;i<6;i++)g+='<path class="st" d="'+shapes[i]+'" transform="translate('+SCN.fx+' '+SCN.fy+')"/>';
  g+='</g>';
  /* step 1: the imaging beam and the labels */
  g+='<g id="s1"><path class="bm" d="M378 176L'+(SCN.fx-14)+' '+(SCN.fy-18)+'L'+(SCN.fx+14)+' '+(SCN.fy-18)+'L406 176Z"/>';
  g+='<path class="ldr" d="M330 128L250 104H'+X+'"/><text class="a" x="'+X+'" y="92">'+(mob?'THERAPY':'THERAPY PROBE')+'</text>';
  g+='<path class="ldr" d="M376 64L250 40H'+X+'"/><text class="a" x="'+X+'" y="28">'+(mob?'IMAGING':'IMAGING PROBE')+'</text>';
  g+='<path class="ldr" d="M'+(SCN.fx+22)+' '+(SCN.fy-4)+'L640 300H'+(800-X)+'"/><text class="a" x="'+(800-X)+'" y="288" text-anchor="end">STONE</text>';
  g+='<path class="ldr" d="M586 380L640 420H'+(800-X)+'"/><text class="a" x="'+(800-X)+'" y="408" text-anchor="end">KIDNEY</text>';
  g+='<text class="t" x="'+(800-X)+'" y="92" text-anchor="end">'+(mob?'LIVE ULTRASOUND':'REAL-TIME ULTRASOUND GUIDANCE')+'</text></g>';
  /* step 2: bursts of focused ultrasound converging on the stone */
  g+='<g id="s2"><path class="cn" d="M318 176L'+SCN.fx+' '+SCN.fy+'L466 176"/><g clip-path="url(#cone)">';
  for(i=0;i<5;i++)g+='<circle class="wv" cx="'+SCN.fx+'" cy="'+SCN.fy+'" r="100"/>';
  g+='</g><text class="a" x="'+(800-X)+'" y="92" text-anchor="end">'+(mob?'ULTRASOUND':'LOW-PRESSURE FOCUSED ULTRASOUND')+'</text>'+
     '<path class="ldr" d="M'+(SCN.fx+26)+' '+(SCN.fy+6)+'L640 300H'+(800-X)+'"/><text class="a" x="'+(800-X)+'" y="288" text-anchor="end">FRAGMENTS</text>'+
     '<text class="t" x="'+(800-X)+'" y="116" text-anchor="end">'+(mob?'PATIENT AWAKE':'PATIENT AWAKE · NO ANESTHESIA')+'</text></g>';
  /* step 3: Stone Clear moves the fragments down the ureter; a dial marks the 15-minute procedure */
  g+='<g id="s3"><path class="cn2" d="M330 176L330 400"/><circle class="dtr" cx="'+(mob?660:680)+'" cy="96" r="50"/><path class="dfl" d="M'+(mob?660:680)+' 46A50 50 0 1 1 '+((mob?660:680)-.1)+' 46"/>';
  for(i=0;i<12;i++){var aa=i*30*Math.PI/180,cx=mob?660:680;g+='<path class="dtk" d="M'+(cx+42*Math.sin(aa)).toFixed(1)+' '+(96-42*Math.cos(aa)).toFixed(1)+'L'+(cx+35*Math.sin(aa)).toFixed(1)+' '+(96-35*Math.cos(aa)).toFixed(1)+'"/>'}
  g+='<text class="big" x="'+(mob?660:680)+'" y="106" text-anchor="middle">15 min</text><text class="t" x="'+(800-X)+'" y="182" text-anchor="end">'+(mob?'STONE CLEAR':'STONE CLEAR · IN THE OFFICE')+'</text>'+
     '<path class="ldr" d="M330 500L640 500H'+(800-X)+'"/><text class="a" x="'+(800-X)+'" y="488" text-anchor="end">'+(mob?'TO PASS':'URETER · PASSED NATURALLY')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .pg",svg),s1:$("#s1",svg),l1:dl("#s1 .ldr"),s2:$("#s2",svg),wv:$$("#s2 .wv",svg),
    s3:$("#s3",svg),df:dl("#s3 .dfl"),st:$$("#stone .st",svg),stg:$("#stone",svg),ure:$("#ureP",svg)};
  var UL=E.ure&&E.ure.getTotalLength?E.ure.getTotalLength():0,lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    op(E.stg,seg(b,.5,.9));
    /* step 1 */
    var o1=1-seg(p,.28,.36);op(E.s1,seg(b,.6,1)*o1);draw(E.l1,seg(b,.6,1));
    /* step 2: the arcs travel inward to the focus; the stone parts */
    var o2=1-seg(p,.62,.7);op(E.s2,b*seg(p,.34,.44)*o2);
    E.wv.forEach(function(el,k){var r=((k*40+(1-((p*6)%1))*200)%200)+6;el.setAttribute("r",r.toFixed(1));el.style.opacity=(Math.min(1,r/40)*(1-r/206)).toFixed(3)});
    var br=seg(p,.44,.6),mv=seg(p,.72,.94);
    /* step 3: fragments gather and travel down the ureter */
    var pt=null;if(UL&&mv>0){pt=E.ure.getPointAtLength(UL*.06+UL*.86*mv)}
    E.st.forEach(function(el,k){var d=SCN.sh[k],sx=SCN.fx+d[0]*1.1*br,sy=SCN.fy+d[1]*1.1*br,sc=1-.42*br;
      if(pt){var ox=(pt.x+(d[0]*.5))-sx,oy=(pt.y+d[1]*.7+k*3)-sy,q=Math.min(1,mv*1.4-k*.05);q=q<0?0:q;sx+=ox*(mv>0?Math.min(1,mv*1.2):0);sy+=oy*(mv>0?Math.min(1,mv*1.2):0)}
      el.setAttribute("transform","translate("+sx.toFixed(1)+" "+sy.toFixed(1)+") scale("+sc.toFixed(3)+")")});
    op(E.s3,b*seg(p,.68,.76));draw(E.df,seg(p,.74,.94));
  };
}
