/* the story scene (BL/BY/DB): ONE engraved knee joint in front view (femur with its two condyles, tibial plateau, fibula, menisci,
   articular cartilage, a torn anterior cruciate ligament), kept on screen for all three steps.
   Step 1 the injury: the torn ACL, inflammatory cytokines in the joint space, lesions in the cartilage.
   Step 2 the injection: a needle enters the joint space and HydroGEN spreads and gels there as a depot.
   Step 3 the release: the gel releases its therapeutic protein toward the cartilage; cytokines fade and the cartilage closes.
   Sources: NIH RePORTER abstract of R41AR083738 (PTOA after joint injury; proinflammatory cytokines; HydroGEN gels in the joint
   space and gives sustained delivery of an anti-inflammatory, chondroprotective molecule; rabbit ACL transection model) and the
   NSF 2335299 outcomes report (gelation within 10 minutes at 37 C). Schematic; anatomy simplified. Driven by the scrubbed story progress. */
var KN={
 fem:"M336 -10L336 128C336 168 302 184 272 199C236 217 226 262 243 292C260 322 312 331 345 317C370 306 383 291 400 291C417 291 430 306 455 317C488 331 540 322 557 292C574 262 564 217 528 199C498 184 464 168 464 128L464 -10",
 femc:"M241 286C256 322 312 333 346 319C371 308 384 294 400 294C416 294 429 308 454 319C488 333 544 322 559 286",
 tib:"M332 570L332 492C330 452 310 438 280 422C240 402 218 374 229 354C262 345 330 347 371 351C386 341 414 341 429 351C470 347 538 345 571 354C582 374 560 402 520 422C490 438 470 452 468 492L468 570",
 tibc:"M231 352C262 343 330 345 370 349M430 349C470 345 538 343 569 352",
 fib:"M552 432C566 424 590 428 592 446C594 458 586 466 584 476L582 570M562 570L564 476C556 466 546 446 552 432",
 menL:"M226 349C246 336 280 335 300 340C276 343 254 350 240 362Z",
 menR:"M574 349C554 336 520 335 500 340C524 343 546 350 560 362Z",
 acl1:"M414 296C410 306 404 314 398 320",acl2:"M386 332C382 338 380 343 378 348",
 gel:"M262 336C300 325 360 323 400 323C440 323 500 325 538 336C500 346 440 347 400 347C360 347 300 346 262 336Z",
 ndl:"M706 258L546 334",
 brl:"M703 249L816 195L828 220L715 274Z"
};
var CYT=[[262,326],[290,352],[318,330],[346,356],[372,334],[424,330],[452,354],[478,332],[506,350],[534,330],[300,312],[500,314],[420,360],[360,310],[440,312],[280,340],[520,342],[390,356]];
var LES=[[282,326],[336,322],[468,323],[520,327],[300,346],[352,348],[452,347],[506,346]];
/* release targets: alternating up to the femoral cartilage and down to the tibial cartilage */
var REL=[];(function(){for(var i=0;i<22;i++){var x=272+i*(256/21),up=i%2===0,dx=Math.abs(x-400);REL.push([x,up?(dx<60?300:322+dx*.01):349])}})();
var KS=1.3;function KT(x,y){return (400+(x-400)*KS).toFixed(1)+' '+(336+(y-336)*KS).toFixed(1)}
function scene(){
  var mob=MOBILE(),g='',i;KS=mob?1.5:1.3;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><linearGradient id="gelg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fd6ee" stop-opacity=".6"/><stop offset="1" stop-color="#5fd6ee" stop-opacity=".25"/></linearGradient>'+
     '<radialGradient id="infg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff6f9a" stop-opacity=".32"/><stop offset="1" stop-color="#ff6f9a" stop-opacity="0"/></radialGradient>'+
     '<pattern id="hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V6" stroke="rgba(244,241,251,.13)" stroke-width="1"/></pattern>'+
     '<linearGradient id="kfg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".16" stop-color="#fff"/><stop offset=".84" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
     '<mask id="kmk" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="560"><rect x="0" y="0" width="800" height="560" fill="url(#kfg)"/></mask></defs>';
  g+='<g mask="url(#kmk)"><g transform="translate(400 336) scale('+KS+') translate(-400 -336)">';
  g+='<g id="scBase">';
  g+='<path class="bn" d="'+KN.fem+'"/><path class="bn" d="'+KN.tib+'"/><path class="bn" d="'+KN.fib+'"/>';
  g+='<path class="bh" d="'+KN.fem+'"/><path class="bh" d="'+KN.tib+'"/>';
  g+='<path class="cg sD" d="'+KN.femc+'"/><path class="cg sD" d="'+KN.tibc+'"/>';
  g+='<path class="bo2 sD" d="'+KN.fem+'"/><path class="bo2 sD" d="'+KN.tib+'"/><path class="bo2 sD" d="'+KN.fib+'"/>';
  g+='<path class="mn sD" d="'+KN.menL+'"/><path class="mn sD" d="'+KN.menR+'"/>';
  /* trabecular texture inside the bone ends */
  var tr='';for(i=0;i<9;i++){tr+='M'+(262+i*31)+' '+(222+(i%3)*8)+'q14 16 6 40';if(i>0&&i<8)tr+='M'+(262+i*30)+' '+(392+(i%2)*10)+'q12 -10 26 4'}
  g+='<path class="trb sD" d="'+tr+'"/>';
  g+='<path class="acl sD" d="'+KN.acl1+'"/><path class="acl sD" d="'+KN.acl2+'"/>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<ellipse id="infl" cx="400" cy="336" rx="190" ry="70" fill="url(#infg)"/>';
  LES.forEach(function(p){g+='<circle class="les" cx="'+p[0]+'" cy="'+p[1]+'" r="4.2"/>'});
  g+='<g id="gelw"><path class="gel" d="'+KN.gel+'"/><path class="gelh" d="'+KN.gel+'"/></g>';
  CYT.forEach(function(p){g+='<g class="cyt" transform="translate('+p[0]+' '+p[1]+')"><circle r="3.4"/><path d="M-6 0H-3.4M3.4 0H6M0 -6V-3.4M0 3.4V6"/></g>'});
  REL.forEach(function(){g+='<circle class="rel" cx="400" cy="336" r="2.6"/>'});
  g+='<g id="syr"><path class="brl" d="'+KN.brl+'"/><path class="ndl" d="'+KN.ndl+'"/><path class="plg" d="M760 222L772 248M790 208L802 234"/></g>';
  g+='</g></g></g>';
  /* fixed labels sit outside the scaled anatomy so their type keeps its size */
  g+='<g id="scTx"><text class="t" x="400" y="110" text-anchor="middle">FEMUR</text><text class="t" x="400" y="520" text-anchor="middle">TIBIA</text>'+
     '<text class="t" x="784" y="552" text-anchor="end">KNEE, FRONT VIEW · SCHEMATIC</text></g>';
  /* labels, one set per step, in the clear space beside the shafts (leaders end at the thing they name) */
  var L1x=mob?16:40;
  g+='<g id="lb1"><text class="a" x="'+L1x+'" y="96">TORN ACL</text>'+(mob?'':'<text class="t" x="'+L1x+'" y="116">ANTERIOR CRUCIATE LIGAMENT</text>')+'<path class="ldr" d="M'+(L1x+8)+' '+(mob?112:128)+'L'+(L1x+8)+' 150L'+KT(392,322)+'"/>'+
     '<text class="a" x="'+L1x+'" y="'+(mob?520:500)+'">'+(mob?'CYTOKINES':'INFLAMMATORY CYTOKINES')+'</text><path class="ldr" d="M'+(L1x+8)+' '+(mob?496:484)+'L'+(L1x+8)+' 470L'+KT(282,352)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?784:760)+'" y="96" text-anchor="end">'+(mob?'GELS AT 37 °C':'HYDROGEN GELS AT 37 °C')+'</text>'+(mob?'':'<text class="t" x="760" y="116" text-anchor="end">A DEPOT IN THE JOINT SPACE</text>')+'<path class="ldr" d="M'+(mob?760:740)+' '+(mob?112:128)+'L'+(mob?760:740)+' 150L'+KT(520,334)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+L1x+'" y="96">'+(mob?'CARTILAGE KEPT':'CARTILAGE PROTECTED')+'</text>'+(mob?'':'<text class="t" x="'+L1x+'" y="116">SUSTAINED PROTEIN RELEASE</text>')+'<path class="ldr" d="M'+(L1x+8)+' '+(mob?112:128)+'L'+(L1x+8)+' 150L'+KT(290,327)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scTx text, #scBase .bn, #scBase .bh",svg),mv:$("#scMove",svg),cyt:$$(".cyt",svg),les:$$(".les",svg),rel:$$(".rel",svg),
    gel:$("#gelw",svg),syr:$("#syr",svg),inf:$("#infl",svg),acl:$$(".acl",svg),cg:$$(".cg",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.34,.5),s3=seg(p,.66,.84),inj=seg(p,.3,.4),gl=seg(p,.38,.56);
    /* step 1: inflammation, cytokines jitter, lesions open; in step 3 they fade and close */
    op(E.inf,b*s1*(1-s3*.9));
    E.cyt.forEach(function(el,j){var c=CYT[j],jx=Math.sin(p*38+j*1.7)*4,jy=Math.cos(p*31+j*2.3)*3;
      el.setAttribute("transform","translate("+(c[0]+jx).toFixed(1)+" "+(c[1]+jy).toFixed(1)+")");op(el,b*s1*(1-s3))});
    E.les.forEach(function(el,j){op(el,b*s1*(1-seg(p,.72+j*.012,.86+j*.012)))});
    E.acl.forEach(function(el){el.classList.toggle("hot",s1>.5&&s2<.5)});
    E.cg.forEach(function(el){el.classList.toggle("ok",s3>.6)});
    /* step 2: the needle comes in along its axis, the gel spreads from the tip and sets; the needle withdraws before step 3 */
    var ux=-.905,uy=.428,off=(1-inj)*140+seg(p,.6,.68)*140;
    E.syr.setAttribute("transform","translate("+(-ux*off).toFixed(1)+" "+(-uy*off).toFixed(1)+")");op(E.syr,b*inj*(1-seg(p,.6,.68)));
    E.gel.style.transformOrigin="540px 336px";E.gel.style.transform="scaleX("+(.04+.96*gl).toFixed(3)+") scaleY("+(.3+.7*gl).toFixed(3)+")";op(E.gel,b*Math.min(1,gl*2.2)*(1-s3*.3));
    E.gel.classList.toggle("set",gl>.95);
    /* step 3: therapeutic protein leaves the gel toward both cartilage surfaces */
    E.rel.forEach(function(el,j){var t=seg(p,.66+j*.006,.86+j*.006),q=REL[j];
      el.setAttribute("cx",q[0].toFixed(1));el.setAttribute("cy",(336+(q[1]-336)*t).toFixed(1));op(el,b*s3)});
    op(E.l1,b*s1*(1-seg(p,.26,.34)));op(E.l2,b*s2*(1-seg(p,.6,.68)));op(E.l3,b*seg(p,.72,.82));
  };
}
