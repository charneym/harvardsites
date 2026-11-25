/*<R:story>*//* The story scene (DB/BL/BY): how SEAL treats an aneurysm (galaxytherapeutics.com: two shapes, ARC for deep and BASE for
   shallow aneurysms, 2–19 mm; atraumatic leading tip with no lead-in marker band; push out or unsheath; ultra-soft dual
   layer that conforms to the sac; high-density mesh across the neck for flow diversion and early thrombosis), drawn as ONE
   calm fine-line diagram that fills the frame: a parent artery dividing into two branches, the aneurysm sac at the fork.
   Frame 0 is complete: vessel walls, sac and the blood flow swirling into the sac.
   Step 1 (size): width and height dimension lines measure the sac.
   Step 2 (enter): the microcatheter draws up the parent artery to the neck.
   Step 3 (deploy): the dual-layer lattice opens from its hub and fills the sac.
   Step 4 (divert): flow turns into the branches, the swirl in the sac fades and the sac settles (a soft tint).
   No dash draws on non-scaling strokes (DR4; nssfix.js is inlined too). Labels keep >=8px clear of every stroke (DR3). */
var GX_T='translate(330 330) scale(1.3) translate(-330 -400)';
function gxLoops(cx,hy,ry,rx,n,cls){
  /* lattice loops through the hub (cx,hy): lens-shaped meridians fanning across the dome, as in the SEAL braid */
  var g='',top=hy-2*ry;
  for(var i=0;i<n;i++){var k=-1+2*i/(n-1),a=rx*k;
    g+='<path class="'+cls+'" d="M'+cx+' '+hy+'C'+(cx+a*1.5).toFixed(1)+' '+(hy-ry*.35).toFixed(1)+' '+(cx+a*1.25).toFixed(1)+' '+(top+ry*.05).toFixed(1)+' '+cx+' '+top.toFixed(1)+'"/>'}
  return g;
}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'100 4 460 616':'0 22 760 596')+'" aria-hidden="true"><g id="scG" transform="'+GX_T+'">';
  /* the sac settles: a soft tint that grows in step 4 */
  g+='<path class="tint" id="tint" d="M300 340C230 300 240 160 330 160C420 160 430 300 360 340Z"/>';
  /* vessel walls and the sac */
  g+='<path class="wl sD" d="M310 588L310 440C310 410 296 396 270 382L150 316"/>';
  g+='<path class="wl sD" d="M350 588L350 440C350 410 364 396 390 382L510 316"/>';
  g+='<path class="wl sD" d="M300 340L170 268"/><path class="wl sD" d="M360 340L490 268"/>';
  g+='<path class="wl sD" d="M300 340C230 300 240 160 330 160C420 160 430 300 360 340"/>';
  g+='<path class="wo sD" d="M150 316L170 268M510 316L490 268"/>';
  /* blood flow: up the trunk and swirling into the sac (frame 0) */
  g+='<path class="fl sF" d="M322 580L322 452"/><path class="fl sF" d="M338 580L338 452"/>';
  g+='<path class="sw" id="sw" d="M330 330C268 300 270 196 330 194C392 196 392 300 344 318"/>';
  /* step 1: dimension lines */
  g+='<g id="dims"><path class="dm sM" d="M262 250H398"/><path class="dm" d="M262 244v12M398 244v12"/>';
  g+='<path class="dm sM" d="M226 162V338"/><path class="dm" d="M220 162h12M220 338h12"/></g>';
  /* step 2: the microcatheter */
  g+='<path class="cth sC" d="M330 588L330 346"/><circle class="tip" id="tip" cx="330" cy="344" r="3"/>';
  /* step 3: the dual-layer lattice, opening from its hub */
  g+='<g id="dev"><path class="lo" d="M330 334C262 326 254 186 330 184C406 186 398 326 330 334Z"/>'+gxLoops(330,334,75,52,9,'lo')+
    '<path class="li" d="M330 334C282 326 278 228 330 226C382 228 378 326 330 334Z"/>'+gxLoops(330,334,54,34,7,'li')+
    '<rect class="hb" x="325" y="332" width="10" height="8"/></g>';
  /* step 4: flow diverted into the branches */
  g+='<path class="fd sV" d="M322 452C320 418 304 400 280 386L180 330"/><path class="fd sV" d="M338 452C340 418 356 400 380 386L480 330"/>';
  g+='</g>';
  if(!mob){g+='<g id="lCh"><path class="ld" d="M244 52H164"/><text class="t" x="24" y="56">ANEURYSM SAC</text>'+
    '<path class="ld" d="M366 560H586"/><text class="t" x="596" y="564">PARENT ARTERY</text></g>'+
    '<g id="lMs"><path class="ld" d="M430 135H586"/><text class="t" x="596" y="139">WIDTH 2–19 MM</text>'+
    '<path class="ld" d="M196 135H164"/><text class="t" x="24" y="139">HEIGHT</text></g>'+
    '<g id="lCt"><path class="ld" d="M366 470H586"/><text class="t" x="596" y="474">MICROCATHETER</text></g>'+
    '<g id="lDv"><path class="ld" d="M424 200H586"/><text class="t" x="596" y="204">DUAL-LAYER LATTICE</text></g>'+
    '<g id="lFl"><text class="t" x="596" y="300">FLOW TO THE BRANCHES</text></g>'}
  else{g+='<g id="lCh"></g><g id="lMs"></g><g id="lCt"></g><g id="lDv"></g><g id="lFl"></g>'}
  var ly=mob?612:610,lx=mob?108:24;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ARC OR BASE, 2–19 MM':'TWO SHAPES COVER WIDTHS FROM 2 TO 19 MM')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A SOFT, ATRAUMATIC TIP':'A SOFT ENTRY: NO LEAD-IN MARKER BAND')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PUSH OUT OR UNSHEATH':'PUSH OUT OR UNSHEATH; THE DUAL LAYER CONFORMS')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FLOW DIVERTED':'FLOW DIVERTED ACROSS THE NECK')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fl:dl(".sF"),ms:dl(".sM"),ct:dl(".sC"),fd:dl(".sV"),
    dims:$("#dims",svg),sw:$("#sw",svg),tip:$("#tip",svg),dev:$("#dev",svg),tint:$("#tint",svg),
    lCh:$("#lCh",svg),lMs:$("#lMs",svg),lCt:$("#lCt",svg),lDv:$("#lDv",svg),lFl:$("#lFl",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.fl,b)}
    op(E.lCh,b);
    /* step 1: the dimension lines draw across the sac, then fade once the catheter arrives */
    var m=sm(seg(p,.02,.14)),mo=1-sm(seg(p,.3,.38));draw(E.ms,b*m);op(E.dims,b*Math.min(1,m*1.4)*mo);op(E.lMs,b*m*mo);
    /* step 2: the microcatheter climbs the parent artery to the neck */
    var c=sm(seg(p,.28,.44));draw(E.ct,b*c);op(E.tip,b*sm(seg(p,.4,.46)));op(E.lCt,b*c*(1-sm(seg(p,.74,.8))));
    /* step 3: the lattice opens from its hub and fills the sac */
    var d=sm(seg(p,.52,.68)),sc=.08+.92*d;
    E.dev.setAttribute("transform","translate(330 334) scale("+sc.toFixed(3)+") translate(-330 -334)");op(E.dev,b*Math.min(1,d*3));op(E.lDv,b*d);
    /* step 4: flow turns into the branches; the swirl fades and the sac settles */
    var v=sm(seg(p,.76,.9));draw(E.fd,b*v);op(E.sw,b*(1-v));op(E.tint,b*sm(seg(p,.82,.96)));op(E.lFl,b*v);
    op(E.l1,b*(1-seg(p,.2,.25)));op(E.l2,b*seg(p,.28,.34)*(1-seg(p,.45,.5)));op(E.l3,b*seg(p,.53,.59)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.86));
  };
}/*</R:story>*/
