/* the story scene: an engraved longitudinal section of the mechanism, drawn like a lab plate. Left, the device's nozzle with
   its driving diaphragm; right, the upper airway as a soft-walled channel with the throat narrowing where it collapses in
   obstructive sleep apnea; a pressure dial above. Step 1 the airway collapses; step 2 CPAP holds it open with continuous flow
   through a sealed mask (the seal drawn as flanges); step 3 the seal goes, and the device sends pulses, each a vortex ring
   (drawn in section: the ring's outline and its two rolled-up cores), which keep the airway pressurised; step 4 nights of home
   use logged under the plate (compliance monitoring, STTR aim 2). No values are drawn on the dial or the log. */
var AF_Y=236,AF_X0=236,AF_X1=780,AF_TX=580;
function afWall(c,sgn,off){/* airway wall: sgn -1 top, +1 bottom; c = collapse 0..1; off = tissue thickness */
  var d='';for(var x=AF_X0;x<=AF_X1;x+=6){var g=Math.exp(-Math.pow((x-AF_TX)/78,2)),y=AF_Y+sgn*(74+off-c*(62+(sgn>0?6:0))*g*(1-off/90))+sgn*5*Math.sin((x-AF_X0)/80);d+=(x===AF_X0?'M':'L')+x+' '+y.toFixed(1)}return d}
function afSpiral(cx,cy,r,dir){var d='';for(var i=0;i<=46;i++){var t=i/46,a=dir*t*Math.PI*4.2,rr=r*(1-t*.92);d+=(i?'L':'M')+(cx+Math.cos(a)*rr).toFixed(1)+' '+(cy+Math.sin(a)*rr).toFixed(1)}return d}
function afRing(i){return '<g class="vr" id="afR'+i+'"><ellipse class="vro" cx="0" cy="0" rx="13" ry="54"/><path class="vrc" d="'+afSpiral(0,-54,12,1)+'"/><path class="vrc" d="'+afSpiral(0,54,12,-1)+'"/></g>'}
function scene(){
  var mob=MOBILE(),fs=mob?21:12.5,cs=mob?22:13.5;
  var caps=["OBSTRUCTIVE SLEEP APNEA · THE AIRWAY COLLAPSES","CPAP · CONTINUOUS FLOW THROUGH A SEALED MASK","VORTEXPAP · PULSED VORTEX RINGS · NO SEAL","HOME USE · EACH NIGHT LOGGED"];
  var s='<svg viewBox="0 0 800 500" role="img" aria-label="Section drawing: a nozzle sends pulsed vortex rings across an open gap into the upper airway, holding it open without a sealed mask">';
  var g='';for(var gx=40;gx<=760;gx+=40)g+='<path class="gd" d="M'+gx+' 20V440"/>';for(var gy=20;gy<=440;gy+=40)g+='<path class="gd" d="M40 '+gy+'H760"/>';s+=g;
  /* the device: housing, outlet lip, driving diaphragm */
  s+='<path class="dv" d="M30 136H150L184 196V276L150 336H30Z"/><path class="dv2" d="M150 136V336M48 154H132M48 318H132"/>';
  s+='<path id="afDia" class="dia" d="M90 160Q90 236 90 312"/><path class="dv2" d="M184 196H192M184 276H192"/>';
  s+='<text x="30" y="118" style="font-size:'+fs+'px">DEVICE</text>';
  /* the airway: soft wall (two lines, hatched tissue between) */
  s+='<path id="afT1" class="aw" d=""/><path id="afT2" class="aw2" d=""/><path id="afB1" class="aw" d=""/><path id="afB2" class="aw2" d=""/>';
  s+='<text x="'+AF_X0+'" y="360" style="font-size:'+fs+'px">UPPER AIRWAY</text>';
  s+='<text id="afThr" class="a" x="'+AF_TX+'" y="360" text-anchor="middle" style="font-size:'+fs+'px">THROAT</text>';
  /* the seal (step 2) and the open gap (step 3) */
  s+='<g id="afSeal"><path class="seal" d="M186 186H242V198H192ZM186 286H242V274H192Z"/><text class="nm2" x="214" y="170" text-anchor="middle" style="font-size:'+fs+'px">SEAL</text></g>';
  s+='<g id="afGap"><path class="gap" d="M198 150V322M232 150V322"/><text class="a" x="215" y="138" text-anchor="middle" style="font-size:'+fs+'px">NO SEAL</text></g>';
  /* continuous flow lines (step 2) */
  var fl='';[-36,-12,12,36].forEach(function(o){fl+='<path class="flow" d="M192 '+(AF_Y+o)+'H'+(AF_X1-10)+'"/>'});s+='<g id="afFlow">'+fl+'</g>';
  /* the vortex rings (step 3) */
  for(var i=0;i<4;i++)s+=afRing(i);
  /* pressure dial */
  var dl='<circle class="dial" cx="736" cy="62" r="36"/>';for(var a=-120;a<=120;a+=20){var t=a*Math.PI/180,r0=a%60?31:27;dl+='<path class="tk" d="M'+(736+Math.sin(t)*32).toFixed(1)+' '+(62-Math.cos(t)*32).toFixed(1)+'L'+(736+Math.sin(t)*(r0-2)).toFixed(1)+' '+(62-Math.cos(t)*(r0-2)).toFixed(1)+'"/>'}
  s+=dl+'<path id="afNeedle" class="ndl" d="M736 62V36"/><circle class="hub" cx="736" cy="62" r="3"/><text x="688" y="66" text-anchor="end" style="font-size:'+fs+'px">AIRWAY PRESSURE</text><path class="dv2" d="M736 98V150" stroke-dasharray="2 4"/>';
  /* nights of home use (step 4) */
  var nl='<g id="afLog"><text x="236" y="394" style="font-size:'+fs+'px">NIGHTS OF HOME USE</text>';for(var n=0;n<7;n++){var x=236+n*78;nl+='<path class="lgb" d="M'+x+' 408H'+(x+66)+'V436H'+x+'Z"/><path class="lgf" id="afN'+n+'" d="M'+x+' 408H'+(x+66)+'V436H'+x+'Z"/>'}
  s+=nl+'</g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="afC'+i+'" x="400" y="'+(mob?484:480)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={t1:$("#afT1",svg),t2:$("#afT2",svg),b1:$("#afB1",svg),b2:$("#afB2",svg),seal:$("#afSeal",svg),gap:$("#afGap",svg),flow:$("#afFlow",svg),
    dia:$("#afDia",svg),ndl:$("#afNeedle",svg),log:$("#afLog",svg),thr:$("#afThr",svg),
    R:[0,1,2,3].map(function(i){return $("#afR"+i,svg)}),N:[0,1,2,3,4,5,6].map(function(i){return $("#afN"+i,svg)}),cap:[0,1,2,3].map(function(i){return $("#afC"+i,svg)})};
  return function(p,b){
    if(!E.t1.isConnected)return;
    var s1=seg(p,.02,.13),s2=seg(p,.22,.36),s3=seg(p,.48,.62),s4=seg(p,.74,.88);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* the throat collapses in step 1 and is held open from step 2 on */
    var c=.12+.86*s1*(1-s2*.9);
    E.t1.setAttribute("d",afWall(c,-1,0));E.t2.setAttribute("d",afWall(c,-1,18));E.b1.setAttribute("d",afWall(c,1,0));E.b2.setAttribute("d",afWall(c,1,18));
    E.thr.style.opacity=(b*(.4+.6*s1)).toFixed(3);
    /* step 2: seal + continuous flow; step 3: both go, the gap opens */
    E.seal.style.opacity=(b*s2*(1-s3)).toFixed(3);E.flow.style.opacity=(b*.9*s2*(1-s3)).toFixed(3);
    E.flow.style.strokeDashoffset=(-p*900).toFixed(1);
    E.gap.style.opacity=(b*s3).toFixed(3);
    /* the rings: launched from the lip, travelling with the scroll, growing a little, fading at the far end */
    E.R.forEach(function(el,i){var u=((p*5.5)+i/4)%1,x=200+u*(AF_X1-236),sc=.8+.35*u,o=b*s3*Math.min(1,u*6)*Math.min(1,(1-u)*4);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+AF_Y+") scale("+sc.toFixed(3)+")");el.style.opacity=o.toFixed(3)});
    var pulse=s3*Math.max(0,Math.sin(p*5.5*4*Math.PI*2));E.dia.setAttribute("d","M90 160Q"+(90+20*pulse).toFixed(1)+" 236 90 312");
    /* dial: low while collapsed, up with CPAP, held with VortexPAP */
    var ang=-100+150*Math.max(s2,0)-10*s1*(1-s2)+6*s3*Math.sin(p*90);E.ndl.setAttribute("transform","rotate("+ang.toFixed(1)+" 736 62)");
    E.log.style.opacity=(b*s4).toFixed(3);
    E.N.forEach(function(el,k){el.style.opacity=(seg(p,.8+k*.022,.83+k*.022)).toFixed(3)});
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
