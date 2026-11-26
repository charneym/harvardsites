/* The story scene (BL/BY/DB): how a Starna reference is made (starna.com home, About Starna Group, Certified Reference
   Materials, Accreditations), drawn as ONE fine-line elevation kept on screen for all four steps: a rectangular quartz cell.
   Step 1 (Polish): the cell draws in; light glints across its polished windows.
   Step 2 (Seal): the reference liquid fills it and the neck is closed by heat fusion (the Starna process).
   Step 3 (Calibrate): a beam passes through the window and the reference's absorbance spectrum draws on the right.
   Step 4 (Qualify): the certified peaks are marked with their tolerance, the values a lab checks its instrument against. */
var SCW=760,SCH=520;
var ST_PK=[[392,104,9],[452,186,13],[516,82,9],[592,226,15],[662,132,11]];
function stSpec(x){var a=0;ST_PK.forEach(function(q){a+=q[1]*Math.exp(-Math.pow((x-q[0])/q[2],2)/2)});return a}
function stScene(o){
  var g='',mob=o.mob,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* the cell: outer walls, inner walls, the neck (always on screen) */
  g+='<path class="body" d="M120 120H220V440H120Z"/>';
  g+='<path class="edge sD" d="M152 120V64Q152 40 170 40Q188 40 188 64V120"/><path class="edge sD" d="M120 120H220V440H120Z"/><path class="in sD" d="M132 120V428H208V120"/>';
  /* step 1: glints across the polished window */
  g+='<g id="stGl"><path class="gl" d="M140 150L168 122M146 176L200 122M150 214L204 160"/><path class="gl" d="M140 400L176 364M150 418L204 364"/></g>';
  /* step 2: the reference liquid, its meniscus, the fused seal */
  g+='<g id="stLq"><path class="lq" id="stLqR" d="M132 428H208V428H132Z"/><path class="men" id="stMen" d="M132 428Q170 428 208 428"/></g>';
  g+='<g id="stSl"><path class="seal" d="M158 52Q170 30 182 52"/><path class="heat" id="stHt" d="M170 26V12M154 30L146 18M186 30L194 18"/></g>';
  /* step 1, magnified: the cell seen from above, four polished walls around the 10 mm pathlength */
  g+='<g id="stTop"><path class="edge" d="M420 150H640V370H420Z"/><path class="in" d="M440 170H620V350H440Z"/>'+
     '<path class="gl" d="M452 196L484 170M452 236L520 170M580 350L620 312"/><path class="dim" d="M440 404H620M440 396V412M620 396V412"/></g>';
  /* step 2, magnified: the neck closed by heat fusion */
  g+='<g id="stNk"><path class="edge" d="M480 400V250Q480 190 530 190Q580 190 580 250V400"/><path class="in" d="M494 400V252Q494 206 530 206Q566 206 566 252V400"/>'+
     '<path class="seal" d="M494 236Q530 168 566 236"/><path class="lq" d="M494 330H566V400H494Z"/><path class="heat" id="stHt2" d="M530 160V132M496 170L480 148M564 170L580 148"/></g>';
  /* step 3: the beam and the spectrum */
  g+='<g id="stBm"><path class="bmh" d="M20 330H300"/><path class="beam sB" d="M20 330H300"/></g>';
  var sp="";for(x=340;x<=712;x+=2){sp+=(x===340?"M":"L")+x+" "+(420-stSpec(x)).toFixed(1)}
  g+='<g id="stAx"><path class="axis" d="M330 430H720M330 430V140"/></g><path class="spec sS" id="stSp" d="'+sp+'"/>';
  /* step 4: the certified peaks, each with a tolerance bracket */
  g+='<g id="stPk">';ST_PK.forEach(function(q){var px=q[0],py=420-stSpec(px);
    g+='<path class="pk" d="M'+px+' '+(py-12).toFixed(1)+'V430"/><path class="tol" d="M'+(px-8)+' '+(py-16).toFixed(1)+'V'+(py-22).toFixed(1)+'H'+(px+8)+'V'+(py-16).toFixed(1)+'"/>'});
  g+='</g>';
  /* labels, per step, in the band above the plot, >= 8px clear of every stroke (DR3) */
  var LX=330;
  if(!mob)g+='<g id="stDm"><text class="t" x="530" y="440" text-anchor="middle">10 MM PATHLENGTH</text></g>';
  g+='<g id="stL1"><text class="t s2" x="'+LX+'" y="'+(mob?62:70)+'">'+(mob?'QUARTZ CELL':'QUARTZ OR GLASS CELL')+'</text><text class="t" x="'+LX+'" y="'+(mob?94:94)+'">POLISHED WINDOWS</text></g>';
  g+='<g id="stL2"><text class="t s2" x="'+LX+'" y="'+(mob?62:70)+'">HEAT-FUSION SEAL</text><text class="t" x="'+LX+'" y="'+(mob?94:94)+'">'+(mob?'NO EVAPORATION':'NOTHING CAN EVAPORATE')+'</text></g>';
  g+='<g id="stL3"><text class="t s2" x="'+LX+'" y="'+(mob?62:70)+'">'+(mob?'ABSORBANCE':'ABSORBANCE SPECTRUM')+'</text><text class="t" x="'+LX+'" y="'+(mob?94:94)+'">'+(mob?'TRACEABLE TO NIST':'TRACEABLE TO NIST, UKAS-ACCREDITED')+'</text></g>';
  g+='<g id="stL4"><text class="t s2" x="'+LX+'" y="'+(mob?62:70)+'">CERTIFIED PEAKS</text><text class="t" x="'+LX+'" y="'+(mob?94:94)+'">'+(mob?'± TOLERANCE':'WAVELENGTH ± TOLERANCE')+'</text></g>';
  if(!mob)g+='<text class="t ax" x="720" y="458" text-anchor="end">WAVELENGTH</text>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · POLISH</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · SEAL</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · CALIBRATE</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · QUALIFY</text></g>';
  return g+'</svg>';
}
function scene(){return stScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),gl:$("#stGl",svg),lq:$("#stLq",svg),lqr:$("#stLqR",svg),men:$("#stMen",svg),sl:$("#stSl",svg),ht:$("#stHt",svg),top:$("#stTop",svg),dm:$("#stDm",svg),nk:$("#stNk",svg),ht2:$("#stHt2",svg),bm:$("#stBm",svg),beam:dl(".sB"),ax:$("#stAx",svg),sp:dl(".sS"),spE:$("#stSp",svg),pk:$("#stPk",svg),pks:$$("#stPk path",svg),ax2:svg.querySelector("text.ax"),
    L1:$("#stL1",svg),L2:$("#stL2",svg),L3:$("#stL3",svg),L4:$("#stL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1,lastF=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.body,b);
    /* step 1: glints on the polished windows */
    op(E.gl,b*seg(p,.04,.1)*(1-.75*seg(p,.24,.28)));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    op(E.top,b*seg(p,.05,.11)*(1-seg(p,.22,.25)));op(E.dm,b*seg(p,.07,.12)*(1-seg(p,.22,.25)));
    op(E.nk,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));op(E.ht2,seg(p,.38,.42)*(1-seg(p,.46,.5)));
    /* step 2: the liquid rises, the neck is fused shut */
    var f=Math.round(seg(p,.28,.4)*200)/200;
    if(f!==lastF){lastF=f;var y=(428-198*f).toFixed(1);
      if(E.lqr)E.lqr.setAttribute("d","M132 "+y+"H208V428H132Z");
      if(E.men)E.men.setAttribute("d","M132 "+y+"Q170 "+(428-198*f+8*f).toFixed(1)+" 208 "+y)}
    op(E.lq,b*seg(p,.27,.3));
    op(E.sl,b*seg(p,.4,.45));op(E.ht,seg(p,.4,.44)*(1-seg(p,.48,.52)));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the beam passes through, the spectrum draws */
    op(E.bm,b*seg(p,.52,.55));draw(E.beam,b*seg(p,.52,.58));
    op(E.ax,b*seg(p,.53,.57));op(E.ax2,b*seg(p,.53,.57));op(E.spE,b*seg(p,.55,.57));draw(E.sp,b*seg(p,.56,.7));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: the certified peaks are marked */
    op(E.pk,b*seg(p,.77,.8));
    E.pks.forEach(function(t,i){var k=Math.floor(i/2);op(t,seg(p,.78+k*.02,.81+k*.02))});
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
