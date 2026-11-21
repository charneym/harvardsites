/* the story scene (BL/BY/DB): how COPA works, drawn in fine engraved line. ONE device stays at the centre for all three steps,
   drawn from the key-parts figure on berkshirebiomedical.com (screen, dentition sensor, fingerprint scanner, security cap + smart cap,
   standard amber bottle behind a drug label window).
   Step 1 the pharmacy fills it: the amber bottle rises into the clear sleeve under its security cap and smart cap.
   Step 2 two biometrics: the screen asks for a finger, the fingerprint scanner reads, then the bite on the dentition sensor; confirmed.
   Step 3 the dose is reported: the device signals the cloud database and the care team's dose log fills; a missed dose is flagged.
   Schematic; the dose log is illustrative, not real data. Driven by the scrubbed story progress. */
function scene(){
  var mob=MOBILE(),g='',i,r,TR=' transform="translate(330 300) scale(1.2) translate(-330 -300)"';
  function T(full,short){return mob?short:full}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="-30 0 830 600" aria-hidden="true">';
  g+='<defs><radialGradient id="bglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff7546" stop-opacity=".10"/><stop offset=".6" stop-color="#6fb1bb" stop-opacity=".05"/><stop offset="1" stop-color="#6fb1bb" stop-opacity="0"/></radialGradient></defs>';
  /* the device, front elevation (drawn at 1x, shown at 1.2x about its centre) */
  g+='<g id="scBase"><ellipse cx="330" cy="300" rx="290" ry="300" fill="url(#bglow)" class="pg"/><g'+TR+'>';
  g+='<path class="bd sD" d="M276 352V124C276 92 300 70 330 70C360 70 384 92 384 124V352Z"/>';
  g+='<path class="bd2 sD" d="M286 344V128C286 100 306 80 330 80C354 80 374 100 374 128V344"/>';
  g+='<path class="scr sD" d="M294 98H366V182H294Z"/><circle class="led sD" cx="330" cy="88" r="2.6"/>';
  g+='<path class="mp sD" d="M244 212H416L410 248H250Z"/><path class="gr sD" d="M262 230H398"/>';
  g+='<circle class="fp sD" cx="330" cy="292" r="15"/><path class="gr sD" d="M276 330H384"/>';
  g+='<path class="slv sD" d="M270 352V500C270 512 280 520 292 520H368C380 520 390 512 390 500V352"/><path class="win sD" d="M282 372V502"/>';
  for(i=0;i<9;i++)g+='<path class="hat sD" d="M'+(378-i*0.4)+' '+(132+i*24)+'l-6 10"/>';
  g+='</g><text class="t" x="330" y="594" text-anchor="middle">'+T('COPA™ · SCHEMATIC','COPA™')+'</text></g>';
  /* screen states */
  g+='<g class="sct" id="s1"'+TR+'><text x="330" y="134" text-anchor="middle">QTY 30/30</text><text class="sm" x="330" y="158" text-anchor="middle">FILLED</text></g>';
  g+='<g class="sct" id="s2"'+TR+'><text x="330" y="134" text-anchor="middle">ID FINGER</text><text class="sm" x="330" y="158" text-anchor="middle">1 OF 2</text></g>';
  g+='<g class="sct" id="s3"'+TR+'><text x="330" y="134" text-anchor="middle">BITE</text><text class="sm" x="330" y="158" text-anchor="middle">2 OF 2</text></g>';
  g+='<g class="sct" id="s4"'+TR+'><text class="ok" x="330" y="134" text-anchor="middle">DOSE</text><text class="sm" x="330" y="158" text-anchor="middle">READY</text></g>';
  g+='<g class="sct" id="s5"'+TR+'><text x="330" y="134" text-anchor="middle">QTY 29/30</text><text class="sm" x="330" y="158" text-anchor="middle">SENT</text></g>';
  /* step 1: the bottle rises into the sleeve */
  g+='<g id="fl"><g'+TR+'><g id="btl"><path class="cap" d="M308 356H352V378H308Z"/><path class="cap2" d="M308 367H352"/><path class="bt" d="M314 378H346V390H314Z"/><path class="bt" d="M302 390H358V506H302Z"/><path class="lbl" d="M308 420H352V480H308Z"/><path class="lbl2" d="M314 436H346M314 448H340M314 460H344"/></g></g>';
  g+='<path class="ldr" d="M200 342H218L300 374"/><text class="a" x="194" y="346" text-anchor="end">'+T('SECURITY CAP + SMART CAP','SMART CAP')+'</text>';
  g+='<path class="ldr" d="M200 482H294"/><text class="a" x="194" y="486" text-anchor="end">'+T('STANDARD AMBER BOTTLE','BOTTLE')+'</text>';
  g+=(mob?'':'<path class="ldr" d="M200 540H272"/><text class="t2" x="194" y="544" text-anchor="end">DRUG LABEL WINDOW</text>')+'</g>';
  /* step 2: fingerprint, then dentition */
  g+='<g id="cf"><g'+TR+'><g id="rp">';for(i=0;i<3;i++)g+='<circle class="rip" cx="330" cy="292" r="15"/>';g+='</g>';
  g+='<path class="fpr" d="M322 292C322 286 338 286 338 292M318 296C318 280 342 280 342 296M326 300C326 293 334 293 334 300"/>';
  g+='<path class="mpH" d="M244 212H416L410 248H250Z"/></g>';
  g+='<path class="ldr" d="M438 216H466"/><text class="a" x="474" y="220">'+T('DENTITION SENSOR','BITE')+'</text>';
  g+='<path class="ldr" d="M352 290H466"/><text class="a" x="474" y="294">'+T('FINGERPRINT SCANNER','FINGER')+'</text>';
  g+='<path class="ck" id="ck1" d="M'+(mob?620:660)+' 282l7 7 12-15"/><path class="ck" id="ck2" d="M'+(mob?620:634)+' 208l7 7 12-15"/></g>';
  /* step 3: report to the care team */
  g+='<g id="rpt"><g'+TR+'><path class="sig" d="M398 100A22 22 0 0 1 406 124"/><path class="sig" d="M408 88A38 38 0 0 1 420 128"/><path class="sig" d="M418 76A54 54 0 0 1 434 132"/></g>';
  g+='<path class="ldr dsh" d="M462 64C524 64 494 190 520 190"/>';
  g+='<text class="a" x="516" y="168">'+T('DOSE LOG · CARE TEAM','DOSE LOG')+'</text>';
  for(r=0;r<2;r++)for(i=0;i<7;i++){var miss=(r===1&&i===3);g+='<circle class="dot'+(miss?' miss':'')+'" cx="'+(526+i*38)+'" cy="'+(210+r*40)+'" r="9"/>'}
  g+='<path class="ldr" d="M640 262V292"/><text class="ms" x="640" y="'+(mob?322:314)+'" text-anchor="middle">'+T('MISSED DOSE ALERT','MISSED')+'</text>';
  g+=(mob?'':'<text class="t2" x="516" y="370">HIPAA-COMPLIANT CLOUD DATABASE</text><text class="t2" x="516" y="392">PHYSICIANS · PHARMACISTS · CAREGIVERS</text>')+'</g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg",svg),fl:$("#fl",svg),btl:$("#btl",svg),flx:$$("#fl > .ldr, #fl > text",svg),cf:$("#cf",svg),rip:$$("#rp .rip",svg),fpr:$("#cf .fpr",svg),
    mpH:dl("#cf .mpH"),ck1:dl("#ck1"),ck2:dl("#ck2"),rpt:$("#rpt",svg),sig:$$("#rpt .sig",svg),dots:$$("#rpt .dot",svg),ms:$("#rpt .ms",svg),
    sc:[1,2,3,4,5].map(function(k){return $("#s"+k,svg)})};
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* screen: one state at a time */
    var st=p<.34?0:p<.47?1:p<.6?2:p<.7?3:4;E.sc.forEach(function(el,k){op(el,k===st?b:0)});
    /* step 1: the bottle rises; its labels then step back but the bottle stays */
    op(E.fl,b);var up=seg(p,.02,.2);E.btl.setAttribute("transform","translate(0 "+(110*(1-up)*(1-up)).toFixed(1)+")");E.btl.style.opacity=seg(p,0,.08).toFixed(3);
    E.flx.forEach(function(el){op(el,seg(p,.1,.18)*(1-seg(p,.3,.36)))});
    /* step 2: finger (ripples), then bite (sensor outline), checks */
    op(E.cf,b*seg(p,.34,.4)*(1-seg(p,.66,.72)));
    var fr=seg(p,.38,.48);E.rip.forEach(function(c,k){var q=fr*1.6-k*.25;q=q<0?0:q>1?1:q;c.setAttribute("r",(15+30*q).toFixed(1));c.style.opacity=(q>0&&q<1?(1-q)*.9:0).toFixed(3)});
    op(E.fpr,seg(p,.4,.46));var c1=seg(p,.46,.5);draw(E.ck1,c1);op(E.ck1[0][0],c1>.01?1:0);
    draw(E.mpH,seg(p,.5,.6));var c2=seg(p,.58,.62);draw(E.ck2,c2);op(E.ck2[0][0],c2>.01?1:0);
    /* step 3 */
    op(E.rpt,b*seg(p,.68,.74));
    E.sig.forEach(function(el,k){op(el,seg(p,.72+k*.03,.76+k*.03))});
    E.dots.forEach(function(el,k){op(el,seg(p,.74+k*.012,.77+k*.012))});
    op(E.ms,seg(p,.86,.92));
  };
}
