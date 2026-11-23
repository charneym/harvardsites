/* The story scene (DB/BL/BY): the Palmetto System procedure as ReValve describes it (Business Wire, 1 Nov 2021 and 30 Nov 2023:
   "a complete mitral valve replacement delivered transfemoral-transseptally", "four-point securement and a low-profile valve
   frame", "designed to avoid disturbing the left ventricular outflow tract", "allows future replacement through a dedicated
   product line"), drawn as ONE continuous fine-line heart in section that stays on screen. Calm line art only (DT).
   Frame 0 is already complete: the four chambers, the native mitral valve, the veins and the aorta.
   Step 1: a catheter rises from the femoral vein through the right atrium and crosses the atrial septum.
   Step 2: the valve opens in the mitral annulus and is secured at four points on the native leaflets.
   Step 3: the catheter is withdrawn; the outflow path to the aorta draws in, left clear by the low frame.
   Step 4: a future valve seats inside the first one.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560,MV=[514,292];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 -44 760 604" aria-hidden="true">';
  g+='<defs><linearGradient id="gFl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#7cc3d9" stop-opacity="0"/><stop offset=".3" stop-color="#7cc3d9" stop-opacity=".9"/><stop offset="1" stop-color="#7cc3d9"/></linearGradient></defs>';
  g+='<g id="scBase">';
  /* veins and aorta (behind, quieter) */
  g+='<path class="wo sD" d="M200 26C204 64 206 92 210 116"/><path class="wo sD" d="M252 26C254 62 254 88 256 106"/>';
  g+='<path class="wo sD" d="M64 556C74 446 104 338 146 266"/><path class="wo sD" d="M118 556C126 456 150 360 186 300"/>';
  g+='<path class="wo sD" d="M392 282C384 206 386 124 400 26"/><path class="wo sD" d="M452 280C458 204 456 124 458 26"/>';
  g+='<path class="wo sD" d="M396 252C410 262 428 262 448 250"/>';
  /* outer wall */
  g+='<path class="wl sD" d="M360 108C300 92 190 96 150 140C112 182 118 248 150 286C150 360 210 450 300 500C350 528 400 540 432 528C500 508 600 420 640 330C660 290 664 280 652 270C668 220 660 140 620 112C580 86 420 92 360 108Z"/>';
  /* atrial septum (with the thin fossa ovalis) and the ventricular septum */
  g+='<path class="wl sD" d="M360 110C358 150 360 178 362 188"/><path class="wl sD" d="M363 214C366 236 370 256 372 274"/>';
  g+='<path class="wmd sD" d="M362 188C366 196 366 206 363 214"/>';
  g+='<path class="wl sD" d="M368 284C372 380 394 460 428 514"/><path class="wl sD" d="M394 286C398 372 414 448 434 506"/>';
  /* inner wall of the left and right ventricles */
  g+='<path class="wmd sD" d="M600 286C596 360 540 440 446 500"/><path class="wmd sD" d="M168 296C176 370 232 444 340 492"/>';
  /* atrioventricular plane: tricuspid and native mitral leaflets */
  g+='<path class="wmd sD" d="M150 286L206 282M330 282L366 282"/><path class="wl sD" d="M206 282C214 304 222 320 236 334"/><path class="wl sD" d="M330 282C320 304 312 318 298 332"/>';
  g+='<path class="wmd sD" d="M394 282L414 280M582 278L654 272"/>';
  g+='</g>';
  /* the native mitral leaflets move: open at rest, gathered against the frame once it is secured */
  g+='<path class="wl nl" id="nlA" d="M414 280C424 306 436 324 452 338"/><path class="wl nl" id="nlP" d="M582 278C572 304 560 322 544 336"/>';
  /* outflow path to the aorta */
  g+='<path class="fl" id="flow" d="M548 446C496 424 432 386 412 336C402 306 414 200 424 70"/><path class="flh" id="flowH" d="M414 84L424 64L434 84"/>';
  /* the catheter */
  g+='<path class="cath" id="cath" d="M91 560C100 436 128 330 186 256C236 198 318 186 362 200C420 218 502 198 514 236L514 '+(MV[1]-30)+'"/>';
  /* the Palmetto valve in side view: atrial rim, low frame, leaflets and four securement points */
  var x0=MV[0],y0=MV[1];
  var zz=function(w,h,n,dy){var s='M'+(x0-w)+' '+(y0-h+dy);for(var i=1;i<=n;i++){var x=x0-w+2*w*i/n,y=(i%2?y0+h:y0-h)+dy;s+='L'+x.toFixed(1)+' '+y}return s};
  g+='<g id="vlv"><path class="vf" d="M'+(x0-78)+' '+(y0-20)+'C'+(x0-50)+' '+(y0-28)+' '+(x0+50)+' '+(y0-28)+' '+(x0+78)+' '+(y0-20)+'"/>'+
     '<path class="vf" d="'+zz(66,14,8,0)+'"/><path class="vf" d="M'+(x0-66)+' '+(y0-14)+'L'+(x0-58)+' '+(y0+20)+'M'+(x0+66)+' '+(y0-14)+'L'+(x0+58)+' '+(y0+20)+'"/>'+
     '<path class="vf q" d="M'+(x0-58)+' '+(y0+20)+'C'+(x0-32)+' '+(y0+34)+' '+(x0-10)+' '+(y0+36)+' '+x0+' '+(y0+26)+'C'+(x0+10)+' '+(y0+36)+' '+(x0+32)+' '+(y0+34)+' '+(x0+58)+' '+(y0+20)+'"/>';
  [[-50,25],[-19,32],[19,32],[50,25]].forEach(function(a){g+='<circle class="anc" cx="'+(x0+a[0])+'" cy="'+(y0+a[1])+'" r="4.4"/>'});
  g+='</g>';
  /* a future valve, seated inside the first */
  g+='<g id="vlv2"><path class="vf2" d="'+zz(48,10,6,-2)+'"/><path class="vf2" d="M'+(x0-48)+' '+(y0-12)+'L'+(x0-44)+' '+(y0+14)+'M'+(x0+48)+' '+(y0-12)+'L'+(x0+44)+' '+(y0+14)+'"/></g>';
  if(!mob){
    g+='<g id="lRA"><text class="t" x="262" y="150" text-anchor="middle">RIGHT ATRIUM</text></g>';
    g+='<g id="lLA"><text class="t" x="540" y="160" text-anchor="middle">LEFT ATRIUM</text></g>';
    g+='<g id="lLV"><text class="t" x="520" y="374" text-anchor="middle">LEFT VENTRICLE</text></g>';
    g+='<g id="lAo"><text class="t" x="476" y="130">TO THE AORTA</text></g>';
  }else{g+='<g id="lRA"></g><g id="lLA"></g><g id="lLV"></g><g id="lAo"></g>'}
  var cx=380,cy=-12;
  g+='<g id="lb1"><text class="a" x="'+cx+'" y="'+cy+'" text-anchor="middle">TRANSFEMORAL, TRANSSEPTAL</text></g>';
  g+='<g id="lb2"><text class="a" x="'+cx+'" y="'+cy+'" text-anchor="middle">FOUR-POINT SECUREMENT</text></g>';
  g+='<g id="lb3"><text class="a" x="'+cx+'" y="'+cy+'" text-anchor="middle">OUTFLOW LEFT CLEAR</text></g>';
  g+='<g id="lb4"><text class="a" x="'+cx+'" y="'+cy+'" text-anchor="middle">ROOM FOR A FUTURE VALVE</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),cath:dl("#cath")[0],flow:dl("#flow")[0],flowH:$("#flowH",svg),nl:$$(".nl",svg),vlv:$("#vlv",svg),anc:$$("#vlv .anc",svg),vlv2:$("#vlv2",svg),
    lRA:$("#lRA",svg),lLA:$("#lLA",svg),lLV:$("#lLV",svg),lAo:$("#lAo",svg),l:[1,2,3,4].map(function(i){return $("#lb"+i,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1. the catheter draws up from the femoral vein, across the septum, to the mitral plane; withdrawn in step 3 */
    var c=seg(p,.03,.21);E.cath[0].style.strokeDashoffset=(E.cath[1]*(1-c)).toFixed(1);op(E.cath[0],b*(c>0?1:0)*(1-seg(p,.5,.58)));
    /* 2. the valve opens from a crimped width, then the four securement points light */
    var v=seg(p,.27,.4),sx=.3+.7*v;
    E.vlv.setAttribute("transform","translate("+MV[0]+" "+MV[1]+") scale("+sx.toFixed(3)+" 1) translate("+(-MV[0])+" "+(-MV[1])+")");op(E.vlv,b*Math.min(1,v*4));
    E.anc.forEach(function(el,i){el.classList.toggle("on",p>.38+i*.02)});
    /* the native leaflets gather against the frame once it is secured */
    var k=seg(p,.36,.46);E.nl.forEach(function(el,i){var cx=i?582:414,cy=i?278:280;el.setAttribute("transform","translate("+cx+" "+cy+") rotate("+((i?1:-1)*-16*k).toFixed(2)+") scale(1 "+(1-.12*k).toFixed(3)+") translate("+(-cx)+" "+(-cy)+")");op(el,b)});
    /* 3. the outflow path draws in beside the low frame */
    var f=seg(p,.54,.68);E.flow[0].style.strokeDashoffset=(E.flow[1]*(1-f)).toFixed(1);op(E.flow[0],b*(f>0?1:0));op(E.flowH,b*seg(p,.64,.69));
    /* 4. a future valve seats inside */
    var w=seg(p,.79,.92);E.vlv2.setAttribute("transform","translate(0 "+(-46*(1-w)).toFixed(1)+")");op(E.vlv2,b*w);
    op(E.lRA,b*(1-seg(p,.2,.27)));op(E.lLA,b*(1-seg(p,.2,.27)));op(E.lLV,b*(1-seg(p,.2,.27)));
    op(E.lAo,b*seg(p,.6,.66)*(1-seg(p,.76,.8)));
    var R=[[.03,.1,.21,.25],[.28,.34,.46,.5],[.53,.59,.71,.75],[.78,.84,2,3]];
    E.l.forEach(function(el,i){var r=R[i];op(el,b*seg(p,r[0],r[1])*(1-seg(p,r[2],r[3])))});
  };
}
