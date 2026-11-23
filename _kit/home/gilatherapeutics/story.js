/* The story scene (DB/BL): Gila's own mechanism (gilatherapeutics.com, Technology: "Hormones bind to oral receptors
   resulting in rapid signaling to the brain. Direct neural connections deliver signals directly to the brainstem. Satiety
   centers in the brainstem and hypothalamus are stimulated without activating the nausea center."), drawn as ONE
   continuous fine-line scene that fills the frame: a head in profile (sagittal section) with the tongue, palate, brain,
   cerebellum and brainstem. Frame 0 is already complete, with the tablet on the tongue.
   Step 1 (tongue): the oral dissolving tablet melts and the peptide spreads through the saliva on the tongue.
   Step 2 (signal): the direct neural connection draws from the tongue to the brainstem and pulses run along it.
   Step 3 (satiety): the brainstem satiety center (NTS) and the hypothalamus light, the satiety path between them draws,
   and the nausea center stays dark. Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var HEAD="M378 516L374 452C372 430 362 412 342 410C310 408 278 404 262 388C252 374 256 360 252 344C248 338 244 332 248 324C252 318 250 314 244 308C246 302 252 296 248 288C232 286 220 280 222 272C224 262 236 250 248 232C254 222 258 214 262 200C266 186 270 168 276 140C288 78 340 36 420 36C500 34 572 80 592 156C608 214 604 262 584 300C566 334 548 352 546 392L549 516";
var BRAIN="M300 150C304 92 370 62 434 62C510 62 566 104 574 170C580 214 566 244 540 254C520 262 498 256 480 250C450 242 420 246 396 236C360 226 316 214 300 150Z";
var GYRI=["M330 132C352 110 384 104 410 116","M424 92C456 84 492 92 512 114","M352 176C380 160 414 162 440 176","M462 140C492 130 526 140 546 166","M404 210C430 198 462 202 488 216","M524 200C540 192 556 196 566 208"];
var CBL="M512 264C540 258 566 270 566 292C566 312 544 324 520 318C504 314 496 302 500 286C502 274 506 268 512 264Z";
var CBLF=["M508 282C524 278 544 280 560 288","M506 298C524 296 544 300 558 306"];
var STEM=["M462 250C468 290 472 330 476 372L478 512","M494 256C498 292 500 330 500 372L504 512"];
var PAL="M262 300C300 292 350 288 392 292C410 294 420 304 424 320";
var TONG="M262 322C290 312 330 304 370 306C402 308 422 326 424 350C426 374 410 392 390 400";
var JAWF="M266 340C300 348 344 362 390 400";
var NERVE="M352 314C378 352 424 378 458 366C474 360 482 348 486 334";
var SAT="M486 330C480 302 464 270 444 250";
var NTS=[486,330],HYP=[442,246],AP=[512,322],TAB=[312,302];
var NPT=16,NPU=4;
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'164 22 556 544':'0 0 '+SCW+' '+SCH)+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gsg"><stop offset="0" stop-color="#bcaff2" stop-opacity=".62"/><stop offset="1" stop-color="#bcaff2" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+HEAD+'"/>';
  g+='<path class="wmd sD" d="'+BRAIN+'"/><path class="wmd sD" d="'+CBL+'"/>';
  GYRI.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  CBLF.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  STEM.forEach(function(d){g+='<path class="wmd sD" d="'+d+'"/>'});
  g+='<path class="wmd sD" d="'+PAL+'"/><path class="wl sD" id="tongue" d="'+TONG+'"/><path class="wo sD" d="'+JAWF+'"/>';
  g+='</g>';
  /* the tablet and the saliva it disperses into */
  g+='<g id="tab"><ellipse class="tb" cx="'+TAB[0]+'" cy="'+TAB[1]+'" rx="15" ry="5"/></g>';
  g+='<g id="scPart">';for(i=0;i<NPT;i++)g+='<circle class="pt" r="1.8" cx="'+TAB[0]+'" cy="'+TAB[1]+'"/>';g+='</g>';
  /* the direct neural connection, its pulses, and the satiety path to the hypothalamus */
  g+='<path id="nerve" class="nv" d="'+NERVE+'"/>';
  g+='<g id="scPulse">';for(i=0;i<NPU;i++)g+='<circle class="pu" r="3.4" cx="352" cy="314"/>';g+='</g>';
  g+='<path id="sat" class="sa" d="'+SAT+'"/>';
  /* the centres */
  g+='<circle class="halo" id="hNts" cx="'+NTS[0]+'" cy="'+NTS[1]+'" r="30" fill="url(#gsg)"/><circle class="halo" id="hHyp" cx="'+HYP[0]+'" cy="'+HYP[1]+'" r="30" fill="url(#gsg)"/>';
  g+='<circle class="ce" id="cNts" cx="'+NTS[0]+'" cy="'+NTS[1]+'" r="5.5"/><circle class="ce" id="cHyp" cx="'+HYP[0]+'" cy="'+HYP[1]+'" r="5.5"/>';
  g+='<circle class="ap" id="cAp" cx="'+AP[0]+'" cy="'+AP[1]+'" r="4.5"/>';
  /* labels, each with a leader that stops short of its text (DR) */
  if(!mob){
    g+='<g id="lTab"><path class="ld" d="M296 304L214 315"/><text class="t" x="24" y="320">ORAL DISSOLVING TABLET</text></g>';
    g+='<g id="lNv"><path class="ld" d="M404 372L256 460"/><text class="t" x="40" y="476">DIRECT NEURAL CONNECTION</text></g>';
    g+='<g id="lNts"><path class="ld" d="M492 336L612 384"/><text class="t" x="622" y="388">BRAINSTEM</text><text class="t" x="622" y="404">SATIETY CENTER</text></g>';
    g+='<g id="lHyp"><path class="ld" d="M448 242L612 198"/><text class="t" x="622" y="202">HYPOTHALAMUS</text></g>';
    g+='<g id="lAp"><path class="ld" d="M518 320L612 304"/><text class="t" x="622" y="300">NAUSEA CENTER</text><text class="t q" x="622" y="316">NOT ACTIVATED</text></g>';
  }else{
    g+='<g id="lTab"></g>';
    g+='<g id="lNv"><path class="ld" d="M404 372L268 456"/><text class="t" x="174" y="476">NERVE</text></g>';
    g+='<g id="lNts"><path class="ld" d="M492 336L600 384"/><text class="t" x="610" y="392">SATIETY</text></g>';
    g+='<g id="lHyp"></g>';
    g+='<g id="lAp"><path class="ld" d="M518 320L600 300"/><text class="t" x="610" y="304">NAUSEA</text></g>';
  }
  var ly=SCH-4,lx=mob?174:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MELTS IN UNDER 3 SECONDS':'MELTS ON THE TONGUE IN UNDER THREE SECONDS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TONGUE TO BRAINSTEM':'ORAL RECEPTORS SIGNAL DIRECTLY TO THE BRAINSTEM')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SATIETY, NO NAUSEA':'SATIETY CENTERS ON · NAUSEA CENTER QUIET')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),nerve:dl("#nerve"),sat:dl("#sat"),
    tab:$("#tab",svg),parts:$$("#scPart .pt",svg),pul:$$("#scPulse .pu",svg),
    hN:$("#hNts",svg),hH:$("#hHyp",svg),cN:$("#cNts",svg),cH:$("#cHyp",svg),ap:$("#cAp",svg),
    lTab:$("#lTab",svg),lNv:$("#lNv",svg),lNts:$("#lNts",svg),lHyp:$("#lHyp",svg),lAp:$("#lAp",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var nv=$("#nerve",svg),NL=nv.getTotalLength();
  /* saliva spread targets: points along the tongue's upper surface either side of the tablet */
  var tong=$("#tongue",svg),TL=tong.getTotalLength();
  var t0=0,best=1e9;for(var k=0;k<=100;k++){var q=tong.getPointAtLength(TL*k/100),dd=Math.abs(q.x-TAB[0]);if(dd<best){best=dd;t0=k/100}}
  var TGT=E.parts.map(function(el,i){var f=t0+(i/(NPT-1)-.4)*.36;f=Math.max(.01,Math.min(.55,f));var q=tong.getPointAtLength(TL*f);return [q.x,q.y-4-((i*7)%4)]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1. the tablet melts; the peptide spreads along the tongue */
    op(E.tab,b*(1-s1));
    if(E.tab){E.tab.setAttribute("transform","translate("+TAB[0]+" "+TAB[1]+") scale("+(1-.55*s1).toFixed(3)+" "+(1-.7*s1).toFixed(3)+") translate("+(-TAB[0])+" "+(-TAB[1])+")")}
    E.parts.forEach(function(el,i){var t=TGT[i],x=TAB[0]+(t[0]-TAB[0])*s1,y=TAB[1]+(t[1]-TAB[1])*s1;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*Math.min(1,s1*2.5)*(1-.45*s3))});
    op(E.lTab,b*(1-seg(p,.36,.5)));
    /* 2. the neural connection draws to the brainstem; pulses run along the drawn part */
    draw(E.nerve,b*s2);
    E.pul.forEach(function(el,i){var f=s2*((i+.5)/NPU);var q=nv.getPointAtLength(NL*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*(s2>0?Math.min(1,s2*3):0)*(1-.5*s3))});
    op(E.lNv,b*seg(p,.48,.58));
    op(E.lNts,b*seg(p,.56,.64));
    /* 3. the satiety centres light, the path to the hypothalamus draws, the nausea centre stays dark */
    op(E.cN,b*(.3+.7*Math.max(seg(p,.58,.66),s3)));op(E.hN,b*s3);
    draw(E.sat,b*s3);op(E.cH,b*(.3+.7*s3));op(E.hH,b*s3);
    op(E.ap,b*.6);op(E.lHyp,b*seg(p,.76,.84));op(E.lAp,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
