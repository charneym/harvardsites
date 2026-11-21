/* The story scene (BL/BY/DB): what the clinician sees on the video laryngoscope's screen during a soiled-airway intubation,
   drawn as ONE continuous fine-line scene, the glottic view IVOS shows on its own site (AIRWAY-CLEAN image and the two
   narrated videos on ivosmedical.com): the epiglottis lifted by the blade tip at the top, the vocal cords in a V around the
   dark glottic opening, the arytenoids below. Step 1: fluids from the oral cavity spread over the camera window and the view
   is lost. Step 2: with the BOSS G4 on the blade, gas flow streams across the window and the suction channel draws the
   fluid away; the view clears. Step 3: the endotracheal tube passes between the cords: first pass. Every element is driven
   by the scrubbed story progress. Sources: ivosmedical.com home page (product videos and their timed captions). */
var SCW=760,SCH=520;
function blobPath(cx,cy,r,seed,n){
  var s=seed,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},pts=[],i;
  n=n||9;for(i=0;i<n;i++){var a=i/n*Math.PI*2,rr=r*(.72+.5*R());pts.push([cx+Math.cos(a)*rr,cy+Math.sin(a)*rr*.82])}
  var d='',f=function(v){return v.toFixed(1)};
  for(i=0;i<n;i++){var p0=pts[(i-1+n)%n],p1=pts[i],p2=pts[(i+1)%n],p3=pts[(i+2)%n];
    if(!i)d+='M'+f(p1[0])+' '+f(p1[1]);
    d+='C'+f(p1[0]+(p2[0]-p0[0])/6)+' '+f(p1[1]+(p2[1]-p0[1])/6)+' '+f(p2[0]-(p3[0]-p1[0])/6)+' '+f(p2[1]-(p3[1]-p1[1])/6)+' '+f(p2[0])+' '+f(p2[1])}
  return d+'Z';
}
/* fluid on the lens: [cx, cy, r, seed] */
var BLOBS=[[318,214,62,11],[452,250,74,23],[380,330,58,37],[262,312,46,41],[520,170,40,53],[236,170,34,61],[548,332,44,71],[388,150,36,83],[300,402,40,97],[478,404,38,101]];
function memScene(o){
  var g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="vclip"><rect x="40" y="34" width="680" height="440"/></clipPath>'+
     '<radialGradient id="vglo" cx="50%" cy="56%" r="62%"><stop offset="0" stop-color="#2c6f7e" stop-opacity=".55"/><stop offset=".55" stop-color="#15495a" stop-opacity=".35"/><stop offset="1" stop-color="#082834" stop-opacity="0"/></radialGradient></defs>';
  /* ---- the screen ---- */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M40 34H720V474H40Z"/>';
  g+='<path class="frm sD" d="M40 34h22M40 34v22M720 34h-22M720 34v22M40 474h22M40 474v-22M720 474h-22M720 474v-22" style="stroke-width:2.2"/>';
  g+='<text class="t" x="40" y="20">VIDEO LARYNGOSCOPE · CAMERA VIEW</text>';
  g+='<text class="t rt" x="720" y="20" text-anchor="end">LIVE</text>';
  g+='</g>';
  g+='<g clip-path="url(#vclip)">';
  g+='<rect id="scGlo" x="40" y="34" width="680" height="440" fill="url(#vglo)"/>';
  /* ---- anatomy, engraved: contour lines of the laryngeal inlet, epiglottis, aryepiglottic folds, cords, arytenoids ---- */
  g+='<g id="scAna">';
  [0,1,2,3].forEach(function(k){var s=1+k*.13;
    g+='<path class="sv-ct sD" d="M'+(380-150*s).toFixed(1)+' '+(150-10*k)+'C'+(380-185*s).toFixed(1)+' '+(250)+' '+(380-150*s).toFixed(1)+' '+(400+12*k)+' 380 '+(440+14*k)+'C'+(380+150*s).toFixed(1)+' '+(400+12*k)+' '+(380+185*s).toFixed(1)+' 250 '+(380+150*s).toFixed(1)+' '+(150-10*k)+'"/>'});
  g+='<path class="sv-ep sD" d="M246 132C262 92 320 74 380 74C440 74 498 92 514 132C500 118 446 106 380 106C314 106 260 118 246 132Z"/>';
  g+='<path class="sv-fo sD" d="M252 136C250 220 268 330 318 392M508 136C510 220 492 330 442 392"/>';
  g+='<path class="sv-gl" d="M380 168L332 360C356 376 404 376 428 360Z"/>';
  g+='<path class="sv-vc sD" d="M380 166L322 362M380 166L438 362"/>';
  g+='<path class="sv-vc2 sD" d="M372 176L318 352M388 176L442 352"/>';
  g+='<path class="sv-tr sD" d="M352 300C366 306 394 306 408 300M346 330C362 338 398 338 414 330"/>';
  g+='<path class="sv-ar sD" d="M296 398C300 372 330 362 346 380C352 396 334 414 314 414C302 414 294 408 296 398ZM464 398C460 372 430 362 414 380C408 396 426 414 446 414C458 414 466 408 464 398Z"/>';
  g+='</g>';
  /* ---- the blade tip at the top of the view, lifting the epiglottis; the BOSS suction port on it ---- */
  g+='<g id="scBl"><path class="sv-bl" d="M268 34C290 58 334 66 380 66C426 66 470 58 492 34Z"/><path class="sv-blE sD" d="M268 34C290 58 334 66 380 66C426 66 470 58 492 34"/>'+
     '<circle class="sv-pt" cx="300" cy="46" r="5"/><circle class="sv-pt" cx="460" cy="46" r="5"/></g>';
  /* ---- step 2: gas flow streaming across the window, and the suction draw toward the port ---- */
  g+='<g id="scFlow">';
  [0,1,2,3,4,5].forEach(function(k){var y=96+k*58,x0=470,cx=600;
    g+='<path class="sv-fl" d="M460 48C'+(520+k*12)+' '+(70+k*22)+' '+(cx-k*20)+' '+(y-10)+' '+(560-k*40)+' '+(y+30)+'"/>'});
  [0,1,2,3].forEach(function(k){g+='<path class="sv-su" d="M'+(180+k*40)+' '+(400-k*30)+'C'+(220+k*10)+' '+(240-k*20)+' 260 110 300 50"/>'});
  g+='</g>';
  /* ---- step 3: the endotracheal tube, entering from lower right and passing between the cords ---- */
  g+='<g id="scTube"><g id="scTubeIn">'+
     '<path class="sv-tb" d="M412 300C440 340 520 420 640 520L720 520L720 470C600 400 470 330 440 288Z"/>'+
     '<path class="sv-tbE" d="M412 300C440 340 520 420 640 520M440 288C470 330 600 400 720 470"/>'+
     '<path class="sv-tbL" d="M426 296C454 336 548 414 680 504"/>'+
     '<path class="sv-cuff" d="M470 352C486 344 500 330 506 316M500 380C518 372 532 356 538 342"/>'+
     '</g></g>';
  /* ---- step 1: fluid on the camera window ---- */
  g+='<g id="scFluid">';
  BLOBS.forEach(function(b,i){g+='<path class="sv-fd" data-i="'+i+'" data-cx="'+b[0]+'" data-cy="'+b[1]+'" d="'+blobPath(b[0],b[1],b[2],b[3],9)+'"/>'});
  g+='<rect id="scFog" x="40" y="34" width="680" height="440"/>';
  g+='</g>';
  g+='</g>';
  /* ---- step labels in the band under the screen ---- */
  g+='<g id="lb1"><text class="a" x="40" y="504">VIEW OBSCURED · FLUIDS ON THE LENS</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="504">BOSS G4 · GAS FLOW AND SUCTION CLEAR IT</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="504">TUBE THROUGH THE CORDS · FIRST PASS</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),ana:dl("#scAna .sD"),anaF:$$("#scAna .sv-gl",svg),glo:$("#scGlo",svg),
    bl:$("#scBl",svg),fl:dl("#scFlow .sv-fl"),su:dl("#scFlow .sv-su"),
    fd:$$(".sv-fd",svg).map(function(el){return {el:el,i:+el.getAttribute("data-i"),cx:+el.getAttribute("data-cx"),cy:+el.getAttribute("data-cy")}}),
    fog:$("#scFog",svg),tube:$("#scTubeIn",svg),tubeG:$("#scTube",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the anatomy engraves in first, then stays for all three steps */
    var an=seg(p,0,.14);draw(E.ana,b*an);E.anaF.forEach(function(el){op(el,b*an)});op(E.glo,b*an);op(E.bl,b*an);
    /* step 1: fluid spreads over the window; step 2: it is drawn away toward the port at the top left as the flow runs */
    var fIn=seg(p,.1,.26),clr=seg(p,.36,.54);
    E.fd.forEach(function(F){
      var gi=Math.min(1,Math.max(0,fIn*1.8-F.i*.07)),go=Math.min(1,Math.max(0,clr*1.7-(9-F.i)*.06));
      var s=(.3+.7*gi)*(1-.85*go),dx=(300-F.cx)*go*.5,dy=(50-F.cy)*go*.5;
      F.el.setAttribute("transform","translate("+(F.cx+dx).toFixed(1)+" "+(F.cy+dy).toFixed(1)+") scale("+s.toFixed(3)+") translate("+(-F.cx)+" "+(-F.cy)+")");
      op(F.el,b*gi*(1-go));
    });
    op(E.fog,b*fIn*(1-clr)*.55);
    var flw=seg(p,.32,.44)*(1-seg(p,.56,.62));
    draw(E.fl,b*seg(p,.32,.44));E.fl.forEach(function(a){op(a[0],b*flw)});
    draw(E.su,b*seg(p,.34,.46));E.su.forEach(function(a){op(a[0],b*flw)});
    /* step 3: the tube slides in along its own axis, from the lower right corner to between the cords */
    var tIn=seg(p,.6,.78),k=1-tIn;
    E.tube.setAttribute("transform","translate("+(260*k).toFixed(1)+" "+(200*k).toFixed(1)+")");op(E.tubeG,b*seg(p,.58,.62));
    op(E.l1,b*seg(p,.14,.2)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.38,.44)*(1-seg(p,.54,.58)));op(E.l3,b*seg(p,.68,.74));
  };
}
