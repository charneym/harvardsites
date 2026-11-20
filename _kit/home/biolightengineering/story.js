/* the story scene (BL/BY/DB): ONE engraved cross-section of an infant's eye facing a fundus camera, kept on screen for all
   four steps, in fine bone lines with the navy-site's light blue for light and a copper for the retina (the hero's tone).
   Step 1 a conventional camera: light in and image out share the pupil, a <=130 deg field. Step 2 PedCam's trans-pars-planar
   illuminator touches at the pars plana and the inside of the eye fills with light. Step 3 the full pupil carries the image
   out: a 200 deg field. Step 4 the peripheral retina (where ROP often involves) and the captured widefield image.
   Sources: NIH RePORTER abstract of 1R44EY039153-01 (<=130 deg, dilation, 200 deg, trans-pars-planar, peripheral retina,
   point-of-care and remote screening) and US 11,154,193 (light delivered through the pars plana). Schematic, not to scale.
   Everything is driven by the scrubbed story progress. */
var EC=[500,280],ER=200;
function EP(d,r){var a=d*Math.PI/180;r=r||ER;return [EC[0]+r*Math.cos(a),EC[1]+r*Math.sin(a)]}
function f1(v){return v.toFixed(1)}
function earc(d0,d1,r){var a=EP(d0,r),b=EP(d1,r),lg=Math.abs(d1-d0)>180?1:0;return 'M'+f1(a[0])+' '+f1(a[1])+'A'+r+' '+r+' 0 '+lg+' 1 '+f1(b[0])+' '+f1(b[1])}
var PUP=[338,280];
function scene(){
  var mob=MOBILE(),g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="ig" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#82aad3" stop-opacity=".05"/><stop offset=".7" stop-color="#82aad3" stop-opacity=".16"/><stop offset="1" stop-color="#c98a5e" stop-opacity=".34"/></radialGradient>'+
     '<radialGradient id="tg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#cfe0f2" stop-opacity=".95"/><stop offset=".35" stop-color="#82aad3" stop-opacity=".55"/><stop offset="1" stop-color="#82aad3" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="cn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#82aad3" stop-opacity=".34"/><stop offset="1" stop-color="#82aad3" stop-opacity=".06"/></linearGradient>'+
     '<clipPath id="eyec"><circle cx="'+EC[0]+'" cy="'+EC[1]+'" r="'+(ER-14)+'"/></clipPath><clipPath id="thc"><circle cx="128" cy="452" r="60"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* globe: sclera, choroid line, retina (to the ora serrata), cornea, iris, lens, ciliary body, optic nerve */
  g+='<path class="scl sD" d="'+earc(-152,152,ER)+'"/>';
  g+='<path class="cho sD" d="'+earc(-140,140,ER-8)+'"/>';
  g+='<path class="ret sD" d="'+earc(-130,130,ER-14)+'"/>';
  var a=EP(-152),b=EP(152);
  g+='<path class="cor sD" d="M'+f1(a[0])+' '+f1(a[1])+'A120 120 0 0 0 '+f1(b[0])+' '+f1(b[1])+'"/>';
  g+='<path class="iri sD" d="M326 194L'+PUP[0]+' 246M326 366L'+PUP[0]+' 314"/>';
  g+='<path class="len sD" d="M362 220C386 236 386 324 362 340C338 324 338 236 362 220Z"/>';
  g+='<path class="cil sD" d="M330 196L356 214M330 364L356 346"/>';
  var n1=EP(4,ER),n2=EP(16,ER);
  g+='<path class="nrv sD" d="M'+f1(n1[0])+' '+f1(n1[1])+'L784 '+f1(n1[1]+22)+'M'+f1(n2[0])+' '+f1(n2[1])+'L784 '+f1(n2[1]+30)+'"/>';
  /* the camera: barrel and front lens */
  g+='<path class="cam sD" d="M44 244H150L172 256V304L150 316H44Z"/><path class="cam2 sD" d="M150 244V316M172 262V298"/>';
  g+='<text class="t" x="784" y="546" text-anchor="end">SCHEMATIC · NOT TO SCALE</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* step 1: a conventional illumination cone through the pupil, and the <=130 deg field it reaches */
  var r1=EP(-65,ER-14),r2=EP(65,ER-14);
  g+='<path id="cone" class="cone" d="M172 262L'+PUP[0]+' 254L'+f1(r1[0])+' '+f1(r1[1])+'A'+(ER-14)+' '+(ER-14)+' 0 0 1 '+f1(r2[0])+' '+f1(r2[1])+'L'+PUP[0]+' 306L172 298Z"/>';
  g+='<path id="a130" class="rf" d="'+earc(-65,65,ER-14)+'"/>';
  /* step 2: the illuminator's two light guides reach the pars plana from the camera; light fills the eye */
  var t1=EP(-141,ER+10),t2=EP(141,ER+10);
  g+='<path id="prb" class="prb" d="M150 244C170 190 250 150 '+f1(t1[0]-6)+' '+f1(t1[1]-4)+'M150 316C170 370 250 410 '+f1(t2[0]-6)+' '+f1(t2[1]+4)+'"/>';
  g+='<g clip-path="url(#eyec)"><circle id="ig" cx="'+EC[0]+'" cy="'+EC[1]+'" r="'+(ER-14)+'" fill="url(#ig)"/>';
  var lr='',p1=EP(-141,ER-10),p2=EP(141,ER-10);
  [-40,-10,20,50,80].forEach(function(d){var q=EP(d,ER-14);lr+='M'+f1(p1[0])+' '+f1(p1[1])+'L'+f1(q[0])+' '+f1(q[1])});
  [40,10,-20,-50,-80].forEach(function(d){var q=EP(d,ER-14);lr+='M'+f1(p2[0])+' '+f1(p2[1])+'L'+f1(q[0])+' '+f1(q[1])});
  g+='<path id="lr" class="lr" d="'+lr+'"/></g>';
  g+='<circle id="tg1" cx="'+f1(t1[0])+'" cy="'+f1(t1[1])+'" r="26" fill="url(#tg)"/><circle id="tg2" cx="'+f1(t2[0])+'" cy="'+f1(t2[1])+'" r="26" fill="url(#tg)"/>';
  /* step 3: the 200 deg field, and image rays converging through the full pupil to the camera */
  g+='<path id="a200" class="rf2" d="'+earc(-100,100,ER-14)+'"/>';
  var ir='';[-100,-64,-30,0,30,64,100].forEach(function(d,k){var q=EP(d,ER-14),cy=280+(k-3)*9;ir+='M'+f1(q[0])+' '+f1(q[1])+'L'+PUP[0]+' '+(280+(k-3)*7)+'L172 '+cy});
  g+='<path id="ir" class="ir" d="'+ir+'"/>';
  g+='<path id="ang" class="ang" d="'+earc(-100,100,ER+22)+'"/>';
  /* step 4: the peripheral retina, and the captured widefield image */
  g+='<path id="per" class="per" d="'+earc(-100,-62,ER-14)+earc(62,100,ER-14)+'"/>';
  g+='<g id="th"><path class="lnk" d="M96 316V384"/><image href="data:image/webp;base64,__THUMB__" x="66" y="390" width="124" height="124" clip-path="url(#thc)" preserveAspectRatio="xMidYMid slice"/><circle class="thr" cx="128" cy="452" r="60"/></g>';
  g+='</g>';
  /* labels, one set per step */
  g+='<g id="lb1"><text class="a" x="40" y="'+(mob?96:104)+'">'+(mob?'ONE SHARED PUPIL':'LIGHT IN, IMAGE OUT: ONE PUPIL')+'</text><text class="t" x="40" y="128">'+(mob?'':'DILATING DROPS · 130° OR LESS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="'+(mob?96:104)+'">'+(mob?'PARS PLANA LIGHT':'LIGHT THROUGH THE PARS PLANA')+'</text><text class="t" x="40" y="128">'+(mob?'':'TRANS-PARS-PLANAR ILLUMINATION')+'</text></g>';
  var lp=EP(-24,ER+36);
  g+='<g id="lb3"><text class="a" x="40" y="'+(mob?96:104)+'">'+(mob?'FULL PUPIL · 200°':'THE FULL PUPIL FOR IMAGING')+'</text><text class="g" x="'+f1(lp[0])+'" y="'+f1(lp[1])+'">200°</text></g>';
  g+='<g id="lb4"><text class="a" x="40" y="'+(mob?96:104)+'">'+(mob?'THE PERIPHERY':'THE PERIPHERAL RETINA, REACHED')+'</text><text class="t" x="66" y="540">'+(mob?'':'WIDEFIELD IMAGE · FOR REMOTE READING')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),cone:$("#cone",svg),a130:dl("#a130")[0],prb:dl("#prb")[0],
    ig:$("#ig",svg),lr:dl("#lr")[0],tg:[$("#tg1",svg),$("#tg2",svg)],a200:dl("#a200")[0],ir:dl("#ir")[0],ang:dl("#ang")[0],per:$("#per",svg),th:$("#th",svg),
    l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],ret:$("#scBase .ret",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){if(a)a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.12),s2=seg(p,.27,.42),s3=seg(p,.52,.68),s4=seg(p,.77,.92),o2=seg(p,.22,.3),o3=seg(p,.47,.55);
    /* step 1: the cone through the pupil, its limited field on the retina */
    op(E.cone,b*(.35+.65*s1)*(1-o2));
    dr(E.a130,b*(.3+.7*s1));op(E.a130[0],b*(1-o3));
    /* step 2: light guides draw to the pars plana, tips glow, the eye fills with light */
    dr(E.prb,seg(p,.22,.34));op(E.prb[0],b);
    E.tg.forEach(function(el){op(el,b*seg(p,.3,.4)*(1-.35*s3))});
    op(E.ig,b*s2*(1-.45*s4));
    dr(E.lr,seg(p,.3,.44));op(E.lr[0],b*.9*(1-s3*.7));
    /* step 3: the 200 deg field and the image rays through the full pupil */
    dr(E.a200,s3);op(E.a200[0],b);
    dr(E.ir,seg(p,.55,.7));op(E.ir[0],b*(1-s4*.6));
    dr(E.ang,seg(p,.56,.7));op(E.ang[0],b*(1-s4));
    /* step 4: the periphery glows, the captured image appears */
    op(E.per,b*s4);
    op(E.th,b*s4);E.th.setAttribute("transform","translate(0 "+f1((1-s4)*14)+")");
    op(E.l[0],b*(1-seg(p,.2,.26)));op(E.l[1],b*s2*(1-seg(p,.46,.52)));op(E.l[2],b*s3*(1-seg(p,.72,.77)));op(E.l[3],b*s4);
  };
}
