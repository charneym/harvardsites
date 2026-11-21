/* The story scene (BL/BY/DB/CX): Young Therapeutics' own subject, myocardial ischemia–reperfusion injury, drawn as ONE
   continuous engraved scene that stays on screen for all three steps. Centre: the heart seen from the front in fine line,
   with its great vessels, engraved contour lines and its coronary tree (the left anterior descending artery and its
   diagonal branches, and the right coronary artery). Step 1 the heart engraves in, the LAD is blocked and the territory it
   feeds is hatched as at risk while the flow stops at the block. Step 2 the block clears, blood flows on, and a scatter of
   free-radical bursts appears across the reperfused territory. Step 3 inhibitor particles ride in with the flow, the bursts
   die away and the hatched territory shrinks to a small core. Sources: NIH RePORTER R44HL160338 (YT-002 / YT-004, infarct
   size and cardiac function after myocardial I/R) and PCOM (PKC inhibitors and the oxygen free radicals of reperfusion). */
var SCW=760,SCH=520;
var HEART="M262 182C238 214 230 280 250 326C282 380 362 424 452 444C478 450 496 436 496 408C500 346 484 266 450 216C434 194 414 182 394 180L292 176C278 176 268 178 262 182Z";
var CONT=["M276 214C262 250 262 296 280 330C308 372 370 404 440 420","M300 238C290 270 292 304 308 332C334 368 386 392 444 400","M462 246C478 290 486 350 482 404","M440 232C458 274 466 334 462 392","M326 262C320 288 324 312 338 334C358 360 396 378 438 384"];
var LAD="M384 198C394 258 410 328 440 398C450 422 462 436 474 442";
var BR=["M397 262C414 268 438 276 458 292","M410 316C428 322 452 332 474 350","M426 362C442 368 462 380 482 394","M392 236C380 252 372 270 368 290","M404 296C392 312 386 330 384 350"];
var RCA="M300 196C266 226 252 284 268 326C288 362 330 386 372 398";
var TERR="M400 262C432 270 470 292 488 334C496 376 492 420 474 440C456 432 444 414 436 394C420 352 406 306 400 262Z";
var CORE="M418 330C436 338 452 352 458 370C460 386 456 398 450 404C442 398 436 388 432 376C426 360 420 346 418 330Z";
var SPK=(function(){var a=[],i,pts=[[420,300],[446,296],[468,318],[430,334],[456,346],[478,362],[440,372],[466,392],[452,414],[476,420],[414,280],[486,388]];for(i=0;i<pts.length;i++)a.push({x:pts[i][0],y:pts[i][1],d:(i%5)*.05,s:5+(i*7)%4});return a})();
function vessels(){
  var g='';
  /* aorta (arch), pulmonary trunk, superior vena cava: drawn as tubes, two lines each */
  g+='<path class="vs sD" d="M330 178V128C330 98 352 82 382 82C414 82 432 100 434 128V146"/>';
  g+='<path class="vs sD" d="M352 178V132C352 112 364 102 382 102C400 102 412 112 413 132V146"/>';
  g+='<path class="vs sD" d="M366 179C374 160 392 146 418 140L456 132"/><path class="vs sD" d="M392 180C398 168 414 160 432 158L462 154"/>';
  g+='<path class="vs sD" d="M266 182V96"/><path class="vs sD" d="M292 178V96"/>';
  g+='<path class="vs sD" d="M356 82V62M382 80V56M406 84V64"/>';
  return g;
}
function heartScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="tclip"><path d="'+TERR+'"/></clipPath>';
  g+='<pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)"><path d="M0 0V7" class="ht"/></pattern></defs>';
  /* ---- base: corner ticks and the two standing captions ---- */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">MYOCARDIAL ISCHEMIA–REPERFUSION</text>';
  g+='<text class="t tr" x="742" y="14" text-anchor="end">ANTERIOR VIEW</text>';
  g+='</g>';
  g+='<g id="scAll" transform="translate(-86 -58) scale(1.24)">';
  /* ---- the heart: outline, great vessels, engraved contours ---- */
  g+='<g id="scHeart"><path class="hf" d="'+HEART+'"/><path class="ho sD" d="'+HEART+'"/>'+vessels();
  CONT.forEach(function(d){g+='<path class="hc sD" d="'+d+'"/>'});
  g+='</g>';
  /* ---- the territory at risk (hatched) and the core that remains ---- */
  g+='<g id="scTerr"><path class="tf" d="'+TERR+'"/><path class="th" d="'+TERR+'" fill="url(#hatch)"/><path class="tl" d="'+TERR+'"/></g>';
  g+='<g id="scCore"><path class="cf" d="'+CORE+'"/></g>';
  /* ---- coronary arteries ---- */
  g+='<g id="scCor"><path class="ca sD" id="lad" d="'+LAD+'"/>';
  BR.forEach(function(d,k){g+='<path class="cb sD" d="'+d+'"/>'});
  g+='<path class="ca sD" d="'+RCA+'"/></g>';
  /* ---- the block in the LAD ---- */
  g+='<g id="scBlock"><path class="bk1" d="M386 254L410 248"/><circle class="bk2" cx="398" cy="252" r="9"/></g>';
  /* ---- blood flow and inhibitor particles along the LAD ---- */
  g+='<g id="scFlow">';for(i=0;i<9;i++)g+='<circle class="fl" r="2.6" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="scInh">';for(i=0;i<7;i++)g+='<g class="ih"><circle r="5.2"/><path d="M-3 0H3M0 -3V3"/></g>';g+='</g>';
  /* ---- free-radical bursts ---- */
  g+='<g id="scSpk">';SPK.forEach(function(s){g+='<path class="sp" d="M0 '+(-s.s)+'L1.4 -1.4L'+s.s+' 0L1.4 1.4L0 '+s.s+'L-1.4 1.4L'+(-s.s)+' 0L-1.4 -1.4Z" transform="translate('+s.x+' '+s.y+')"/>'});g+='</g>';
  /* ---- callouts, right of the heart; one per step, in the clear band (CY) ---- */
  g+='<g id="cl1"><path class="cl" d="M410 250H536"/><text class="c" x="542" y="246">LAD BLOCKED</text><text class="c2" x="542" y="264">territory at risk</text></g>';
  g+='<g id="cl2"><path class="cl" d="M488 330H536"/><text class="c" x="542" y="326">REFLOW</text><text class="c2" x="542" y="344">free-radical burst</text></g>';
  g+='<g id="cl3"><path class="cl" d="M456 372H536"/><text class="c" x="542" y="368">PKC INHIBITOR</text><text class="c2" x="542" y="386">injury contained</text></g>';
  g+='</g>';
  /* ---- step labels in the foot band; only one is ever visible ---- */
  g+='<g id="lb1"><text class="a" x="18" y="514">ISCHEMIA · ARTERY BLOCKED</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">REPERFUSION · OXYGEN RETURNS</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">PROTECTION · GIVEN AT REFLOW</text></g>';
  return g+'</svg>';
}
function scene(){return heartScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var lad=$("#lad",svg),LL=lad?lad.getTotalLength():1;
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),heart:dl("#scHeart .sD"),hf:$("#scHeart .hf",svg),cor:dl("#scCor .sD"),
    terr:$("#scTerr",svg),core:$("#scCore",svg),blk:$("#scBlock",svg),
    fl:$$("#scFlow .fl",svg),ih:$$("#scInh .ih",svg),sp:$$("#scSpk .sp",svg),
    c1:$("#cl1",svg),c2:$("#cl2",svg),c3:$("#cl3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,BLK=.28;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function at(t){var q=lad.getPointAtLength(LL*t);return q.x.toFixed(1)+" "+q.y.toFixed(1)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.16),risk=seg(p,.14,.28),clear=seg(p,.36,.44),burst=seg(p,.42,.6),inh=seg(p,.66,.9),calm=seg(p,.74,.94);
    draw(E.heart,Math.min(1,Math.max(b*b,grow*1.15)));op(E.hf,b);
    draw(E.cor,Math.min(1,Math.max(b*b*.9,seg(p,.04,.2)*1.1)));
    /* the block appears, then clears at reflow */
    op(E.blk,b*seg(p,.1,.18)*(1-clear));
    /* territory at risk, shrinking to a small core once the inhibitor arrives */
    op(E.terr,b*risk*(1-calm*.92));op(E.core,b*calm*.9);
    /* blood flow: stops at the block during ischemia, runs to the apex after reflow */
    var lim=clear>0?BLK+(1-BLK)*clear:BLK;
    E.fl.forEach(function(c,i){var t=((p*3.2+i/E.fl.length)%1);var tt=t*lim;
      c.setAttribute("transform","translate("+at(tt)+")");op(c,b*seg(p,.06,.14)*(1-Math.max(0,(t-.9)/.1))*.9)});
    /* free-radical bursts across the reperfused territory, dying away under the inhibitor */
    E.sp.forEach(function(el,i){var s=SPK[i],t=Math.min(1,Math.max(0,(burst-s.d)*1.6));op(el,b*t*(1-calm))});
    /* inhibitor particles ride in with the flow */
    E.ih.forEach(function(g,i){var t=Math.min(1,Math.max(0,inh*1.25-i*.04));var u=(t+i/E.ih.length*.62)%1;if(t<=0)u=0;
      g.setAttribute("transform","translate("+at(.04+u*.92)+")");op(g,b*Math.min(1,t*4)*(1-Math.max(0,(u-.92)/.08)))});
    op(E.c1,b*seg(p,.14,.22)*(1-seg(p,.32,.38)));op(E.c2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.c3,b*seg(p,.78,.86));
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}
