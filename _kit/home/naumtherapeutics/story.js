/* The story scene (BL/BY/DB/CX): Naum's mechanism as the NIH award abstract describes it (1R43AG099483-01A1), drawn as ONE
   continuous engraved scene that stays on screen for all three steps. A presynaptic bouton with its vesicles sits over a
   mushroom spine on a dendritic shaft; the target receptors stand on the spine head beside the postsynaptic density.
   Step 1 the synapse engraves in, a smaller neighbouring spine beside it. Step 2 Abeta42 oligomers drift in and dock on the
   receptors: the spine head shrinks and the neighbouring spine is lost. Step 3 small molecules occupy the receptors, the
   oligomers fall away, the head recovers and spines grow back along the shaft. */
var SCW=760,SCH=520,SX=380,SB=332,HRX=74,HRY=50;
var REC=(function(){var a=[],i,n=5;for(i=0;i<n;i++)a.push({th:Math.PI*(1.18+i*.16)});return a})();
var OLI=(function(){var a=[],i,st=[[96,230],[660,250],[150,350],[640,370],[250,214]];
  for(i=0;i<5;i++)a.push({x0:st[i][0],y0:st[i][1],d:i*.06,r:(i*47)%360});return a})();
function recPos(R,k){/* receptor base on the head ellipse (centre SX, SB-HRY*k), pointing outward */
  var cy=SB-HRY*k,ca=Math.cos(R.th),sa=Math.sin(R.th);
  return {x:SX+HRX*k*ca,y:cy+HRY*k*sa,ang:Math.atan2(HRY*sa,HRX*ca)*180/Math.PI}}
function f1(n){return (+n).toFixed(1)}
function synScene(o){
  var g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">SYNAPSE · SCHEMATIC</text>';
  g+='<text class="t tr" x="742" y="14" text-anchor="end">Aβ42 · TARGET · SMALL MOLECULE</text>';
  g+='</g>';
  /* the axon and presynaptic bouton with vesicles */
  g+='<g id="scPre"><path class="gr sD" d="M18 86C110 92 190 104 268 122"/><path class="gr2 sD" d="M18 104C104 110 178 122 262 146"/>';
  g+='<path class="gr sD" d="M268 122C300 84 350 70 392 72C452 74 500 104 502 150C504 194 466 214 420 216L342 216C296 214 258 190 262 146"/>';
  g+='<path class="oz sD" d="M330 214C350 220 410 220 432 214"/>';
  var V=[[318,140],[346,118],[378,104],[410,116],[470,150],[338,170],[372,150],[404,146],[436,170],[364,188],[398,186],[424,196],[302,176],[452,192]];
  g+='<ellipse class="lm sD" cx="452" cy="104" rx="30" ry="13" transform="rotate(18 452 104)"/><path class="lm sD" d="M430 98l6 10l6-12l6 12l6-12l6 12l6-8" transform="rotate(18 452 104)"/>';
  V.forEach(function(v){g+='<circle class="ves sD" cx="'+v[0]+'" cy="'+v[1]+'" r="8.5"/>'});
  g+='</g>';
  /* the dendritic shaft */
  g+='<g id="scDen"><path class="gr sD" d="M18 420C200 412 560 412 742 422"/><path class="gr sD" d="M18 486C200 478 560 478 742 488"/>';
  g+='<path class="dsh2 sD" d="M18 440C200 433 560 433 742 442"/><path class="dsh2 sD" d="M18 452C200 446 560 446 742 454"/><path class="dsh2 sD" d="M18 466C200 460 560 460 742 468"/>';
  /* more spines along the shaft, each under its own small bouton */
  [[82,26,16,360],[292,22,14,372],[478,24,15,366],[676,26,16,358]].forEach(function(q){var x=q[0];
    g+='<path class="gr2 sD" d="M'+(x-5)+' 416L'+(x-4)+' '+(q[3]+q[2])+'M'+(x+5)+' 416L'+(x+4)+' '+(q[3]+q[2])+'"/><ellipse class="gr2 sD" cx="'+x+'" cy="'+q[3]+'" rx="'+q[1]+'" ry="'+q[2]+'"/>';
    var by=q[3]-q[2]-10-q[2]*1.5,bx=x+(x%3-1)*6;
    g+='<ellipse class="lm sD" cx="'+bx+'" cy="'+by+'" rx="'+(q[1]*1.25)+'" ry="'+(q[2]*1.5)+'"/><circle class="ves sD" cx="'+(bx-7)+'" cy="'+(by-3)+'" r="5"/><circle class="ves sD" cx="'+(bx+7)+'" cy="'+(by+4)+'" r="5"/>';});
  g+='</g>';
  /* the mushroom spine: neck + head (head scales about its base) */
  g+='<g id="scSp"><path class="gr sD" d="M368 416C370 384 372 356 370 '+SB+'M392 416C390 384 388 356 390 '+SB+'"/>';
  g+='<g id="scHead"><ellipse class="gfill" cx="'+SX+'" cy="'+(SB-HRY)+'" rx="'+HRX+'" ry="'+HRY+'"/><ellipse class="gr sD" cx="'+SX+'" cy="'+(SB-HRY)+'" rx="'+HRX+'" ry="'+HRY+'"/>';
  g+='<path class="psd sD" d="M'+(SX-40)+' '+(SB-HRY*2+8)+'Q'+SX+' '+(SB-HRY*2-6)+' '+(SX+40)+' '+(SB-HRY*2+8)+'"/></g></g>';
  /* the receptors (the target) on the head */
  g+='<g id="scRec">';REC.forEach(function(R,k){g+='<g class="rc" data-k="'+k+'"><path class="rcs" d="M0 0L0 -13M0 -13L-6 -21M0 -13L6 -21"/></g>'});g+='</g>';
  /* a neighbouring spine (lost in step 2, back in step 3) and a new one (grows in step 3) */
  g+='<g id="scSp2"><path class="gr2" d="M196 416L198 372M210 416L208 372"/><ellipse class="gr2 gfill" cx="203" cy="356" rx="26" ry="18"/></g>';
  g+='<g id="scSp3"><path class="gr2" d="M556 416L558 382M568 416L566 382"/><ellipse class="gr2 gfill" cx="562" cy="368" rx="22" ry="15"/></g>';
  /* Abeta42 oligomers */
  g+='<g id="scOli">';OLI.forEach(function(O,k){g+='<g class="ol" data-k="'+k+'"><circle cx="-5" cy="-4" r="5"/><circle cx="5" cy="-4" r="5"/><circle cx="0" cy="5" r="5"/><circle cx="9" cy="5" r="4"/></g>'});g+='</g>';
  /* the small molecules */
  g+='<g id="scDrug">';REC.forEach(function(R,k){g+='<g class="dg" data-k="'+k+'"><path d="M0 -7L6 -3.5L6 3.5L0 7L-6 3.5L-6 -3.5Z"/></g>'});g+='</g>';
  /* step labels, in the clear band at the foot; only one is ever visible (CY) */
  g+='<g id="lb1"><text class="a" x="18" y="514">SYNAPSE · STRENGTHENS AND WEAKENS</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">Aβ42 BOUND · SYNAPSE WEAKENS</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">TARGET BLOCKED · SYNAPSE KEPT</text></g>';
  return g+'</svg>';
}
function scene(){return synScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),pre:dl("#scPre .sD"),den:dl("#scDen .sD"),sp:dl("#scSp .sD"),
    fill:$("#scHead .gfill",svg),head:$("#scHead",svg),
    rec:$$(".rc",svg).map(function(el){return {el:el,R:REC[+el.getAttribute("data-k")]}}),
    oli:$$(".ol",svg).map(function(el){return {el:el,O:OLI[+el.getAttribute("data-k")]}}),
    drug:$$(".dg",svg).map(function(el){return {el:el,R:REC[+el.getAttribute("data-k")]}}),
    sp2:$("#scSp2",svg),sp3:$("#scSp3",svg),pg:$("#scPre",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.2),oIn=seg(p,.34,.58),weak=seg(p,.44,.64),dIn=seg(p,.68,.86),back=seg(p,.76,.96);
    var built=Math.min(1,Math.max(b*b,grow*1.2));
    draw(E.pre,built);draw(E.den,built);draw(E.sp,built);
    /* the head shrinks while Abeta42 is bound and recovers once the target is blocked */
    var k=1-.3*weak+.3*back;
    if(E.head)E.head.setAttribute("transform","translate("+SX+" "+SB+") scale("+k.toFixed(3)+") translate("+(-SX)+" "+(-SB)+")");
    op(E.fill,b*(.9-.45*weak+.45*back));
    op(E.pg,1-.35*weak+.35*back);
    /* receptors ride on the head surface */
    E.rec.forEach(function(Rc,i){var P=recPos(Rc.R,k);Rc.el.setAttribute("transform","translate("+f1(P.x)+" "+f1(P.y)+") rotate("+f1(P.ang+90)+")");op(Rc.el,b*seg(p,.06+i*.02,.2+i*.02))});
    /* oligomers drift in and dock on the receptor tips, then fall away as the small molecule takes the sites */
    E.oli.forEach(function(Oc,i){var t=Math.min(1,Math.max(0,(oIn-Oc.O.d)*1.4)),P=recPos(REC[i],k),a=(P.ang+90)*Math.PI/180;
      var tx=P.x+Math.sin(a)*30,ty=P.y-Math.cos(a)*30,x=Oc.O.x0+(tx-Oc.O.x0)*t,y=Oc.O.y0+(ty-Oc.O.y0)*t;
      var away=dIn;x+=(Oc.O.x0-tx)*.55*away;y+=(Oc.O.y0-ty)*.55*away-20*away;
      Oc.el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") rotate("+f1(Oc.O.r+90*t)+")");
      op(Oc.el,b*Math.min(1,t*2.2)*(1-away*.85))});
    /* the small molecules occupy the receptors */
    E.drug.forEach(function(Dc,i){var t=Math.min(1,Math.max(0,(dIn-i*.05)*1.35)),P=recPos(Dc.R,k),a=(P.ang+90)*Math.PI/180;
      var tx=P.x+Math.sin(a)*19,ty=P.y-Math.cos(a)*19,sx=tx+Math.sin(a)*120,sy=ty-Math.cos(a)*120;
      Dc.el.setAttribute("transform","translate("+f1(sx+(tx-sx)*t)+" "+f1(sy+(ty-sy)*t)+")");op(Dc.el,b*Math.min(1,t*2))});
    /* the neighbouring spine is lost, then returns; a new one grows */
    var s2=Math.max(.001,1-seg(p,.46,.62)+seg(p,.8,.96));
    if(E.sp2){E.sp2.setAttribute("transform","translate(203 416) scale("+Math.min(1,s2).toFixed(3)+") translate(-203 -416)");op(E.sp2,Math.min(1,s2*1.4)*built)}
    var s3=Math.max(.001,seg(p,.84,1));
    if(E.sp3){E.sp3.setAttribute("transform","translate(562 416) scale("+s3.toFixed(3)+") translate(-562 -416)");op(E.sp3,b*Math.min(1,s3*1.4))}
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.82,.9));
  };
}
