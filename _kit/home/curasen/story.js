/* the story scene (BL/BY/DB): ONE brain, drawn once in fine line and kept on screen for all three steps.
   Step 1 (signal): a lateral view of the brain; from the locus coeruleus in the brain stem, noradrenergic fibres draw up and out
   through the limbic and cortical regions, each ending in a lit terminal.
   Step 2 (decline): the locus coeruleus degenerates; the fibres withdraw toward it and their terminals go dark.
   Step 3 (restore): CuraSen's agonists act directly at adrenoceptors on the cells that relied on the lost signal: receptor
   sites across the cortex light up, while the locus coeruleus stays dim. Source: curasen.com/science. Schematic, scrubbed by the story. */
var BR={dy:14,lc:[424,352]};
var BRT=[[176,152],[226,100],[312,72],[408,68],[506,98],[584,170],[588,250],[250,262],[336,250],[468,236]];
function scene(){
  var mob=MOBILE(),g='',lc=BR.lc;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'80 0 560 480':'0 0 720 480')+'" aria-hidden="true"><g id="brn" transform="translate(0 '+BR.dy+')">';
  /* brain: cerebrum, cerebellum, brain stem (lateral view, frontal lobe to the left) */
  var CB='M216 262C180 262 148 250 126 226C98 196 98 128 176 84C240 46 362 38 444 58C534 80 612 130 620 214C624 262 598 296 552 304C514 311 470 318 440 330C412 340 392 338 372 332C330 342 272 338 240 320C214 306 198 290 200 278C202 270 208 264 216 262Z';
  g+='<path class="bfill" d="'+CB+'"/>';
  g+='<path class="bedge bD" d="'+CB+'"/>';
  g+='<path class="bedge bD" d="M452 332C474 314 520 306 558 308C596 312 606 346 588 370C566 394 512 398 478 386C454 376 442 354 452 332Z"/>';
  g+='<path class="bedge bD" d="M392 336C399 362 401 404 398 456M446 342C437 372 433 410 434 456"/>';
  /* sulci and folia, finer */
  ['M398 62C384 108 398 150 376 204','M216 262C264 238 334 228 420 240','M214 120C250 100 290 96 330 108','M190 196C226 170 268 164 300 176','M462 100C500 124 520 160 512 200','M540 150C566 176 580 206 572 240','M300 140C326 160 344 182 340 206','M262 300C300 290 340 290 380 300','M470 354C504 342 546 340 592 346','M478 374C512 364 548 364 580 368'].forEach(function(d){g+='<path class="sul bD" d="'+d+'"/>'});
  /* noradrenergic fibres from the locus coeruleus to their terminals */
  g+='<g id="fib">';
  BRT.forEach(function(t,j){var c1x=lc[0]-6-j*2,c1y=lc[1]-70,c2x=t[0]*.62+lc[0]*.38,c2y=t[1]+60+(j%3)*8;
    g+='<path class="fb" d="M'+lc[0]+' '+lc[1]+'C'+c1x+' '+c1y+' '+c2x.toFixed(0)+' '+c2y+' '+t[0]+' '+t[1]+'"/>'});
  g+='</g><g id="term">';BRT.forEach(function(t){g+='<circle class="tm" cx="'+t[0]+'" cy="'+t[1]+'" r="4"/>'});g+='</g>';
  /* receptor sites (step 3): a filled core and a ring at each terminal */
  g+='<g id="rcp">';BRT.forEach(function(t,j){g+='<g class="rc" id="rc'+j+'"><circle class="rr" cx="'+t[0]+'" cy="'+t[1]+'" r="11"/><circle class="rk" cx="'+t[0]+'" cy="'+t[1]+'" r="4.5"/></g>'});g+='</g>';
  /* the locus coeruleus */
  g+='<circle class="lcg" id="lcg" cx="'+lc[0]+'" cy="'+lc[1]+'" r="16"/><circle class="lcd" id="lcd" cx="'+lc[0]+'" cy="'+lc[1]+'" r="6.5"/>';
  if(!mob)g+='<text class="t" id="lct" x="378" y="400" text-anchor="end">LOCUS COERULEUS</text>';
  g+='</g>';
  /* one label per step, in the clear band above the brain */
  var lx=mob?360:150,an=mob?' text-anchor="middle"':'',ly=mob?34:30;
  g+='<g id="lb0"><text class="a l0" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'LOCUS COERULEUS → CORTEX':'NOREPINEPHRINE FROM THE LOCUS COERULEUS')+'</text></g>';
  g+='<g id="lb1"><text class="a l1" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'THE SIGNAL ERODES':'THE LOCUS COERULEUS DEGENERATES')+'</text></g>';
  g+='<g id="lb2"><text class="a l2" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'RECEPTORS ACTIVATED':'ADRENOCEPTORS ACTIVATED DIRECTLY')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#brn .bD"),fill:$("#brn .bfill",svg),fib:dl("#fib .fb"),fibG:$("#fib",svg),tm:$$("#term .tm",svg),rc:$$("#rcp .rc",svg),
    lcg:$("#lcg",svg),lcd:$("#lcd",svg),lct:$("#lct",svg),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg)},lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.fill,b)}
    var s1=seg(p,.03,.26),dc=seg(p,.38,.6),rs=seg(p,.7,.92);
    /* step 1: fibres draw out from the locus coeruleus to their end points; step 2: they withdraw toward it (a faint trace stays) */
    E.fib.forEach(function(a,j){var v=seg(s1,j*.04,.6+j*.04)*(1-.82*dc);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)});
    op(E.fibG,b*(1-.45*dc));
    E.tm.forEach(function(t,j){op(t,b*seg(s1,.55+j*.04,.64+j*.04)*(1-dc))});
    op(E.lcd,b*(1-.55*dc));op(E.lcg,b*(.9-.75*dc));
    E.lcd.classList.toggle("dim",dc>.5);
    op(E.lct,b);
    /* step 3: receptor sites light up across the cortex, in turn */
    E.rc.forEach(function(r,j){op(r,seg(rs,j*.06,.4+j*.06))});
    op(E.l0,b*(1-seg(p,.3,.38)));op(E.l1,b*seg(p,.38,.44)*(1-seg(p,.64,.7)));op(E.l2,b*seg(p,.72,.8));
  };
}
