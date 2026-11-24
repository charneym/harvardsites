/* The story scene (DB/BY): how GAMMA's radar measures motion, drawn as ONE fine-line elevation: the GAMMA Portable
   Radar Interferometer on its tripod at left, facing an alpine slope at right.
   Frame 0 is complete: valley floor, mountain, the radar and its three antennas, the unstable patch outlined.
   Step 1 (scan): the narrow beam sweeps up the slope and settles on the patch.
   Step 2 (compare): interferometric fringes draw in, ring by ring, inside the patch.
   Step 3 (map): the patch fills as a displacement map and an arrow shows the downslope motion. Driven by scrubbed progress. */
var SCW=760,SCH=560;
var RAD=[160,356];
var MTN="M232 470C300 424 344 382 384 330C424 278 452 238 482 198C512 158 540 128 562 106C578 120 594 146 614 168C644 200 684 232 744 262";
var MTNC=MTN+"L744 470Z";
var PC=[482,344],PRX=70,PRY=28,PROT=-48;
function f1(v){return v.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="20 40 730 540" aria-hidden="true">';
  g+='<defs><clipPath id="mclip"><path d="'+MTNC+'"/></clipPath><radialGradient id="pg"><stop offset="0" stop-color="#34dca2" stop-opacity=".6"/><stop offset=".7" stop-color="#34dca2" stop-opacity=".22"/><stop offset="1" stop-color="#34dca2" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="bmg" gradientUnits="userSpaceOnUse" x1="160" y1="356" x2="460" y2="300"><stop offset="0" stop-color="#34dca2" stop-opacity=".55"/><stop offset="1" stop-color="#34dca2" stop-opacity=".14"/></linearGradient></defs>';
  g+='<g id="scBase">';
  /* valley floor and the mountain */
  g+='<path class="wl sD" d="M28 470H744"/>';
  g+='<path class="wl sD" d="'+MTN+'"/>';
  /* strata on the faces, kept clear of the labels and the patch */
  [[300,452,336,428],[350,420,372,398],[520,182,540,160],[596,190,620,214],[640,232,672,250],[660,440,712,432],[520,250,548,228]].forEach(function(s){g+='<path class="tx sD" d="M'+s[0]+' '+s[1]+'L'+s[2]+' '+s[3]+'"/>'});
  /* snow line under the peak */
  g+='<path class="tx sD" d="M536 138C548 146 558 140 570 150C580 158 590 156 600 164"/>';
  /* the radar: tripod, frame, box, three antennas */
  g+='<g id="gpri"><path class="wl sD" d="M120 404L94 470M120 404L146 470M120 404V470"/>';
  g+='<path class="wl sD" d="M112 326V404M128 326V404M112 326H128M112 404H128"/>';
  g+='<path class="wl sD" d="M110 344h20v24h-20z"/>';
  [334,356,378].forEach(function(y){g+='<path class="an sD" d="M74 '+(y-3)+'H166V'+(y+3)+'H74Z"/>'});
  g+='</g>';
  /* the unstable patch, outlined */
  g+='<g transform="translate('+PC[0]+' '+PC[1]+') rotate('+PROT+')"><ellipse class="po sD" rx="'+PRX+'" ry="'+PRY+'"/></g>';
  g+='</g>';
  /* step 1: the beam */
  g+='<path id="beam" class="bm" d="M0 0"/>';
  /* step 2: fringes inside the patch; step 3: the displacement fill */
  g+='<g clip-path="url(#mclip)"><g transform="translate('+PC[0]+' '+PC[1]+') rotate('+PROT+')">';
  g+='<ellipse id="pfill" rx="'+PRX+'" ry="'+PRY+'" fill="url(#pg)"/>';
  [.86,.68,.5,.32,.14].forEach(function(k,i){g+='<ellipse class="fr" id="fr'+i+'" rx="'+f1(PRX*k)+'" ry="'+f1(PRY*k)+'"/>'});
  g+='</g></g>';
  /* step 3: the motion arrow, downslope */
  g+='<path id="arr" class="ar" d="M508 324L456 378M456 378l2 -14M456 378l14 -2"/>';
  /* labels: >=8px clear of every stroke */
  g+='<text class="t" x="120" y="'+(mob?306:312)+'" text-anchor="middle">GPRI</text>';
  var lx=mob?548:560,ly=mob?416:404;
  g+='<text class="t pl" id="pl0" x="'+lx+'" y="'+ly+'">'+(mob?'SLOPE':'UNSTABLE SLOPE')+'</text>';
  g+='<text class="t pl" id="pl1" x="'+lx+'" y="'+ly+'">FRINGES</text>';
  g+='<text class="t pl" id="pl2" x="'+lx+'" y="'+ly+'">'+(mob?'MOTION':'MOVING AREA')+'</text>';
  var cy=SCH+4,cx=40;
  g+='<g id="lb1"><text class="a" x="'+cx+'" y="'+cy+'">'+(mob?'THE BEAM SWEEPS THE SLOPE':'A KU-BAND BEAM SWEEPS THE SLOPE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+cx+'" y="'+cy+'">'+(mob?'PHASE CHANGE, AS FRINGES':'A CHANGE IN PHASE SHOWS AS FRINGES')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+cx+'" y="'+cy+'">'+(mob?'MOTION, TO THE MILLIMETRE':'DISPLACEMENT MAPPED TO THE MILLIMETRE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),tx:$$("text.t",svg).filter(function(t){return !t.classList.contains("pl")}),beam:$("#beam",svg),fill:$("#pfill",svg),arr:$("#arr",svg),
    fr:dl(".fr"),pl:[0,1,2].map(function(i){return $("#pl"+i,svg)}),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var AL=E.arr.getTotalLength();E.arr.style.strokeDasharray=AL+" "+AL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* a point on the slope face, from its foot (u=0) to near the peak (u=1) */
  function onSlope(u){return [262+290*u,452-326*u]}
  function beamPath(T,half){var dx=T[0]-RAD[0],dy=T[1]-RAD[1],L=Math.sqrt(dx*dx+dy*dy),nx=-dy/L*half,ny=dx/L*half;
    return 'M'+RAD[0]+' '+RAD[1]+'L'+f1(T[0]+nx)+' '+f1(T[1]+ny)+'L'+f1(T[0]-nx)+' '+f1(T[1]-ny)+'Z'}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tx.forEach(function(t){op(t,b)})}
    var s1=seg(p,.03,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    /* the beam sweeps from the foot towards the peak, then settles on the patch's centre */
    var up=sm(s1/.6),back=sm((s1-.6)/.4),T=onSlope(.1+.75*up);
    T=[T[0]*(1-back)+PC[0]*back,T[1]*(1-back)+PC[1]*back];
    E.beam.setAttribute("d",beamPath(T,9+9*back));
    op(E.beam,b*(.35+.65*seg(p,0,.06))*(1-.55*s3));
    /* fringes ring in from the outside */
    E.fr.forEach(function(a,i){var v=sm((s2-i*.14)/.44);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(v>0?1:0)*(1-.35*s3))});
    op(E.fill,b*s3);
    E.arr.style.strokeDashoffset=(AL*(1-sm((s3-.3)/.7))).toFixed(1);op(E.arr,b*(s3>.3?1:0));
    /* the patch label names what the step shows */
    var w0=1-seg(p,.33,.38),w1=seg(p,.36,.42)*(1-seg(p,.65,.7)),w2=seg(p,.68,.74);
    op(E.pl[0],b*w0);op(E.pl[1],b*w1);op(E.pl[2],b*w2);
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.74,.82));
  };
}
