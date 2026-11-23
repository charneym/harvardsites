/* The story scene (BL/BY/DB): how PReduction works, as ONE continuous fine-line drawing of a cut-away heart (as in
   Pumpinheart's own render: four chambers, the anchor in the left atrium, the pump through the mitral valve into the
   left ventricle). Step 1: the delivery catheter rises from the femoral vein through the right atrium and the
   interatrial septum, and the anchor and pump deploy. Step 2: the pump is gated to the ECG and runs in diastole,
   moving blood out of the left atrium into the ventricle, so left atrial pressure falls. Step 3: the catheter is gone;
   a torque cable runs from the subdermal unit below the left clavicle through the subclavian vein, and TETS powers the
   unit through the skin. Driven by the scrubbed progress. Source: pumpinheart.com (home page device description). */
var PHX=372,PHY=196;
function phScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="96 0 664 520" aria-hidden="true">',i;
  var OUT='M196 140C150 140 116 176 114 226C112 268 124 300 146 330C196 404 300 462 404 480C444 487 466 466 466 430C470 352 462 270 444 214C432 176 410 150 378 146C350 142 318 150 296 152C270 150 230 140 196 140Z';
  var RA='M200 154C160 156 132 186 130 226C129 250 134 262 142 270L276 258C280 230 278 190 274 160C252 154 226 152 200 154Z';
  var LA='M300 162C330 156 372 154 400 162C426 172 438 196 442 226L302 236C298 210 298 186 300 162Z';
  var RV='M150 284L284 272C290 320 312 380 352 432C274 410 196 360 160 314C154 304 150 294 150 284Z';
  var LV='M304 250L444 240C452 300 452 380 446 420C442 446 428 456 412 450C360 410 318 330 304 250Z';
  g+='<defs><clipPath id="phPc"><rect x="366" y="226" width="14" height="124" rx="7"/></clipPath></defs>';
  /* the heart: myocardium, chambers, vessels, valves */
  g+='<g id="phHt"><path class="my" d="'+OUT+'"/><path class="cv" d="'+RA+LA+RV+LV+'"/>';
  g+='<path class="w sD" d="'+OUT+'"/><path class="w2 sD" d="'+RA+'"/><path class="w2 sD" d="'+LA+'"/><path class="w2 sD" d="'+RV+'"/><path class="w2 sD" d="'+LV+'"/>';
  g+='<path class="w sD" d="M168 140V28M198 140V28"/>';
  g+='<path class="w sD" d="M262 150C252 92 268 46 318 38C368 30 410 52 424 96C430 116 432 130 430 140"/><path class="w sD" d="M292 152C286 104 296 72 324 66C356 60 384 76 394 104C398 116 400 126 398 136"/>';
  g+='<path class="w sD" d="M128 312V520M152 334V520"/>';
  g+='<path class="vl sD" d="M330 240C340 262 344 276 342 290M420 238C412 258 406 272 402 284M170 266C176 284 180 296 178 308M260 260C256 280 252 292 252 302"/>';
  g+='<path class="ch sD" d="M342 290L330 360M342 290L352 366M402 284L414 372M402 284L396 362"/></g>';
  /* the delivery catheter (step 1) and the torque cable (step 3) */
  g+='<path class="cth" id="phCt" d="M140 520V330C140 290 168 238 220 222C250 212 276 205 300 201C318 198 332 197 344 196"/>';
  g+='<path class="cbl" id="phCb" d="M560 110C520 110 500 22 430 16C340 8 230 8 183 28V150C183 190 200 212 236 214C262 214 280 206 300 201C318 198 332 197 344 196"/>';
  /* the device: anchor cage in the left atrium, pump through the mitral valve */
  g+='<g id="phDv"><g class="cg"><circle cx="'+PHX+'" cy="'+PHY+'" r="28"/><ellipse cx="'+PHX+'" cy="'+PHY+'" rx="14" ry="28"/><ellipse cx="'+PHX+'" cy="'+PHY+'" rx="28" ry="11"/><path d="M'+(PHX-24)+' '+(PHY-14)+'L'+(PHX+24)+' '+(PHY+14)+'M'+(PHX-24)+' '+(PHY+14)+'L'+(PHX+24)+' '+(PHY-14)+'"/></g>';
  g+='<rect class="pm" x="366" y="226" width="14" height="124" rx="7"/><g clip-path="url(#phPc)"><g id="phHx">';
  for(i=-2;i<20;i++)g+='<path class="hx" d="M364 '+(226+i*8)+'L382 '+(236+i*8)+'"/>';
  g+='</g></g><path class="pm2" d="M366 238H380M366 338H380"/></g>';
  /* flow out of the pump into the ventricle (step 2) */
  g+='<g id="phFl"><path class="fl" d="M373 356C376 378 386 394 404 404M398 396L406 405L394 408"/><path class="fl" d="M373 356C366 380 352 396 334 404M342 396L332 405L344 409"/><path class="fl" d="M373 170V150M367 160L373 148L379 160" transform="rotate(180 373 160)"/></g>';
  /* the ECG strip with the diastole windows (step 2) */
  var ecg='M500 452',x=500,beats=[[512,0],[592,0],[672,0]];
  beats.forEach(function(b){var q=b[0];ecg+='H'+(q-6)+'L'+(q-3)+' 456L'+q+' 404L'+(q+4)+' 464L'+(q+8)+' 452H'+(q+22)+'C'+(q+26)+' 440 '+(q+34)+' 440 '+(q+38)+' 452'});ecg+='H740';
  g+='<g id="phEg"><rect class="ds" x="554" y="412" width="36" height="48"/><rect class="ds" x="634" y="412" width="36" height="48"/><rect class="ds" x="714" y="412" width="24" height="48"/><path class="eg" id="phEc" d="'+ecg+'"/></g>';
  /* the subdermal unit, the skin and TETS (step 3) */
  g+='<g id="phUn"><path class="sk" d="M548 72C610 64 690 64 750 72"/><rect class="un" x="560" y="92" width="130" height="36" rx="6"/><path class="un2" d="M578 100V120M592 100V120M606 100V120M630 104H672M630 116H660"/>';
  g+='<ellipse class="co" cx="625" cy="34" rx="40" ry="9"/><ellipse class="co" cx="625" cy="34" rx="27" ry="6"/><ellipse class="co" cx="625" cy="34" rx="14" ry="3"/>';
  g+='<g id="phEn"><path class="en" d="M603 52Q625 60 647 52"/><path class="en" d="M603 76Q625 84 647 76"/></g></g>';
  /* labels */
  g+='<g id="pl1"><path class="ld" d="M404 186H486"/><text class="a" x="496" y="190">ANCHOR</text><path class="ld" d="M386 300H486"/><text class="a" x="496" y="304">PUMP</text><text class="t" x="166" y="510">FEMORAL VEIN</text></g>';
  g+='<g id="pl2"><path class="ld" d="M404 186H486"/><text class="a" x="496" y="182">LOWER LEFT</text><text class="a" x="496" y="204">ATRIAL PRESSURE</text><text class="t" x="500" y="392">ECG-GATED</text><text class="t" x="554" y="488">DIASTOLE</text></g>';
  g+='<g id="pl3"><text class="a" x="560" y="156">SUBDERMAL UNIT</text><text class="t" x="560" y="178">BELOW LEFT CLAVICLE</text><text class="a" x="680" y="38">TETS</text></g>';
  return g+'</svg>';
}
function scene(){return phScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#phHt .sD"),ct:dl("#phCt")[0],cb:dl("#phCb")[0],ec:dl("#phEc")[0],dv:$("#phDv",svg),hx:$("#phHx",svg),fl:$("#phFl",svg),eg:$("#phEg",svg),
    un:$("#phUn",svg),en:$("#phEn",svg),ds:$$(".ds",svg),l1:$("#pl1",svg),l2:$("#pl2",svg),l3:$("#pl3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the catheter rises from the femoral vein, crosses the septum; the anchor and pump deploy */
    var ct=seg(p,.02,.17),dep=seg(p,.15,.26),gone=seg(p,.64,.72);
    dr(E.ct,ct);op(svg.querySelector("#phCt"),b*(1-gone));
    E.dv.setAttribute("transform","translate(0 "+(-18*(1-dep)).toFixed(1)+")");op(E.dv,b*dep);
    /* step 2: ECG-gated; the rotor turns and blood flows from the atrium into the ventricle */
    dr(E.ec,seg(p,.36,.52));op(E.eg,b*(seg(p,.34,.38)*(1-.6*seg(p,.66,.72))));
    E.ds.forEach(function(r,j){op(r,seg(p,.46+j*.03,.5+j*.03)*(1-.6*seg(p,.66,.72)))});
    E.hx.setAttribute("transform","translate(0 "+((p*400)%8).toFixed(2)+")");
    op(E.fl,b*seg(p,.48,.56)*(1-seg(p,.66,.7)));
    /* step 3: the cable from the subdermal unit; TETS through the skin */
    op(E.un,b*seg(p,.66,.74));dr(E.cb,seg(p,.7,.86));op(svg.querySelector("#phCb"),b*seg(p,.69,.71));op(E.en,b*seg(p,.84,.92));
    op(E.l1,b*seg(p,.2,.26)*(1-seg(p,.31,.35)));op(E.l2,b*seg(p,.44,.5)*(1-seg(p,.64,.67)));op(E.l3,b*seg(p,.78,.84));
  };
}
