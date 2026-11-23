/* the story scene: one engraved cross-section through a small pulmonary artery, drawn in fine line, that changes along the
   scrubbed timeline. Step 1: TXA2 and 8-iso-PGF2a (pale dots) reach TP receptors (cups on the inner face of the muscle
   layer) and the vessel constricts. Step 2: the muscle layer thickens inward (new smooth-muscle cells), the outer coat
   hatches with fibrosis and platelets clump in the narrowed lumen. Step 3: NTP42 (blue diamonds) takes the receptors and
   the agonists drift away. Step 4: constriction and remodelling ease, the hatching clears and the platelets disperse.
   Facts: atxatherapeutics.com our-pipeline (TP, TXA2, 8-iso-PGF2a, pro-inflammatory/-mitogenic/-fibrotic signalling, TP
   antagonists predicted to inhibit vasoconstriction, platelet aggregation, inflammation and fibrosis), our-challenge
   (PAH: artery walls thicken and stiffen). Schematic, not to scale. */
function axRng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
var AX={cx:320,cy:286,RA:226,RMo:190};
function scene(){
  var mob=MOBILE(),fs=mob?19:12,cs=mob?19:13,R=axRng(4242),cx=AX.cx,cy=AX.cy;
  var caps=["TXA2 SIGNALS THROUGH THE TP","CONSTRICTION · REMODELLING","NTP42 BLOCKS THE TP","ONE TARGET · MANY HALLMARKS"];
  var s='<svg viewBox="0 -10 640 610" role="img" aria-label="Engraved cross-section of a small lung artery: thromboxane signalling through TP receptors constricts and thickens the wall; NTP42 blocks the receptors">';
  /* outer coat (adventitia): fine radial collagen strokes, and a fibrosis cross-hatch for step 2 */
  var F='',Hh='';
  for(var k=0;k<150;k++){var a=k/150*Math.PI*2+R()*.02,r0=AX.RMo+5+R()*4,r1=AX.RA-3-R()*6;
    F+='<path class="xf" d="M'+(cx+Math.cos(a)*r0).toFixed(1)+' '+(cy+Math.sin(a)*r0).toFixed(1)+'L'+(cx+Math.cos(a)*r1).toFixed(1)+' '+(cy+Math.sin(a)*r1).toFixed(1)+'"/>'}
  for(var k2=0;k2<90;k2++){var a2=k2/90*Math.PI*2,rr=AX.RMo+8,r2=AX.RA-6;
    Hh+='<path class="xh" d="M'+(cx+Math.cos(a2)*rr).toFixed(1)+' '+(cy+Math.sin(a2)*rr).toFixed(1)+'L'+(cx+Math.cos(a2+.12)*r2).toFixed(1)+' '+(cy+Math.sin(a2+.12)*r2).toFixed(1)+'"/>'}
  s+='<g id="axAd">'+F+'</g><g id="axFi" opacity="0">'+Hh+'</g>';
  s+='<circle class="xs" cx="'+cx+'" cy="'+cy+'" r="'+AX.RA+'"/><circle class="xs" cx="'+cx+'" cy="'+cy+'" r="'+AX.RMo+'"/>';
  /* muscle layer: spindle cells with nuclei, positioned each frame (rings 0-2 always, ring 3 = proliferating cells) */
  var C='';
  for(var ring=0;ring<4;ring++){var n=ring===3?30:[30,28,26][ring];
    for(var i=0;i<n;i++){var th=(i+(ring%2?.5:0))/n*Math.PI*2+R()*.05;
      C+='<g class="axc" data-ring="'+ring+'" data-th="'+th.toFixed(4)+'"><ellipse class="xce" rx="15" ry="4.2"/><ellipse class="xnu" rx="4.4" ry="1.7"/></g>'}}
  s+='<g id="axCe">'+C+'</g>';
  s+='<circle id="axMi" class="xs" cx="'+cx+'" cy="'+cy+'" r="160"/><circle id="axLu" class="xlu2" cx="'+cx+'" cy="'+cy+'" r="150"/><circle id="axEn" class="xen" cx="'+cx+'" cy="'+cy+'" r="150"/>';
  /* TP receptors: cups on the inner face of the muscle layer, opening to the lumen */
  var Rc='';for(var j=0;j<12;j++){Rc+='<path class="xr" data-th="'+((j+.25)/12*Math.PI*2).toFixed(4)+'" d="M-7 -6L-7 2L7 2L7 -6"/>'}
  s+='<g id="axRc">'+Rc+'</g>';
  /* platelets */
  var P='';for(var q=0;q<10;q++)P+='<ellipse class="xpl2" rx="7" ry="3.6" data-a="'+(R()*Math.PI*2).toFixed(3)+'" data-r="'+(.2+.55*R()).toFixed(3)+'"/>';
  s+='<g id="axPl">'+P+'</g>';
  /* agonists (TXA2 / 8-iso-PGF2a) and NTP42 */
  var D='';for(var d=0;d<12;d++)D+='<circle class="xag" r="4.2" data-a="'+(R()*Math.PI*2).toFixed(3)+'" data-r="'+(.15+.6*R()).toFixed(3)+'"/>';
  var N='';for(var d2=0;d2<12;d2++)N+='<path class="xnt" d="M0 -5.5L5 0L0 5.5L-5 0Z" data-a="'+(R()*Math.PI*2).toFixed(3)+'" data-r="'+(.1+.35*R()).toFixed(3)+'"/>';
  s+='<g id="axAg">'+D+'</g><g id="axNt">'+N+'</g>';
  /* labels sit in the four corners, outside the vessel, so nothing they say can cross a stroke */
  s+='<g id="axL1"><text x="8" y="22" style="font-size:'+fs+'px">TXA2 · 8-ISO-PGF2α</text><text x="632" y="22" text-anchor="end" style="font-size:'+fs+'px">TP RECEPTOR</text></g>';
  s+='<g id="axL2"><text x="8" y="556" style="font-size:'+fs+'px">MEDIA THICKENS</text><text x="632" y="556" text-anchor="end" style="font-size:'+fs+'px">PLATELETS</text></g>';
  s+='<g id="axL3"><text class="xt2" x="632" y="22" text-anchor="end" style="font-size:'+fs+'px">NTP42</text><text x="8" y="22" style="font-size:'+fs+'px">TP BLOCKED</text></g>';
  s+='<g id="axL4"><text class="xt2" x="8" y="556" style="font-size:'+fs+'px">LESS CONSTRICTION</text><text class="xt2" x="632" y="556" text-anchor="end" style="font-size:'+fs+'px">LESS REMODELLING</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="axC'+i+'" x="320" y="'+(mob?596:592)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var q=function(sel){return [].slice.call(svg.querySelectorAll(sel))},cx=AX.cx,cy=AX.cy;
  var E={fi:$("#axFi",svg),mi:$("#axMi",svg),lu:$("#axLu",svg),en:$("#axEn",svg),ce:q("#axCe .axc"),rc:q("#axRc .xr"),pl:q("#axPl .xpl2"),
    ag:q("#axAg .xag"),nt:q("#axNt .xnt"),L:[1,2,3,4].map(function(i){return $("#axL"+i,svg)}),cap:[0,1,2,3].map(function(i){return $("#axC"+i,svg)})};
  var CE=E.ce.map(function(e){return [+e.getAttribute("data-ring"),+e.getAttribute("data-th")]}),RC=E.rc.map(function(e){return +e.getAttribute("data-th")});
  function rd(e){return [+e.getAttribute("data-a"),+e.getAttribute("data-r")]}
  var PL=E.pl.map(rd),AG=E.ag.map(rd),NT=E.nt.map(rd);
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!E.mi.isConnected)return;
    var s1=seg(p,.02,.18),s2=seg(p,.27,.47),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* lumen radius: constriction (1), remodelling (2), relief (4); the muscle layer's inner face follows it */
    var rL=150-22*s1-26*s2+30*s4,rMi=rL+9;
    E.lu.setAttribute("r",rL.toFixed(1));E.en.setAttribute("r",rL.toFixed(1));E.mi.setAttribute("r",rMi.toFixed(1));
    E.fi.setAttribute("opacity",(s2*(1-.85*s4)).toFixed(3));
    var con=s1*(1-s4*.8);
    CE.forEach(function(c,i){var ring=c[0],th=c[1]+(ring===3?0:.015*con),f=ring===3?.1:[.32,.6,.86][ring];
      var r=lerp(rMi+7,AX.RMo-6,ring===3?.12:f),sx=1-.18*con,o=ring===3?seg(s2,.15,.8)*(1-.75*s4):1;
      var x=cx+Math.cos(th)*r,y=cy+Math.sin(th)*r;
      E.ce[i].setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(th*180/Math.PI+90).toFixed(1)+") scale("+sx.toFixed(3)+" 1)");
      E.ce[i].style.opacity=o.toFixed(3)});
    RC.forEach(function(th,i){var r=rMi-1,x=cx+Math.cos(th)*r,y=cy+Math.sin(th)*r;
      E.rc[i].setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(th*180/Math.PI+90).toFixed(1)+")")});
    /* agonists: drift in the lumen, then each finds a receptor cup (1), stays (2), and leaves when NTP42 arrives (3) */
    AG.forEach(function(g,i){var th=RC[i],rc=rMi-6,fx=cx+Math.cos(g[0])*g[1]*rL,fy=cy+Math.sin(g[0])*g[1]*rL,
      tx=cx+Math.cos(th)*rc,ty=cy+Math.sin(th)*rc,k=seg(s1,i*.04,.5+i*.04),away=seg(s3,0,.6),
      x=lerp(lerp(fx,tx,k),fx*.6+cx*.4,away),y=lerp(lerp(fy,ty,k),fy*.6+cy*.4,away);
      E.ag[i].setAttribute("cx",x.toFixed(1));E.ag[i].setAttribute("cy",y.toFixed(1));E.ag[i].style.opacity=((.55+.45*s1)*(1-.92*seg(s3,.3,.9))).toFixed(3)});
    NT.forEach(function(g,i){var th=RC[i],rc=rMi-6,fx=cx+Math.cos(g[0])*g[1]*rL,fy=cy+Math.sin(g[0])*g[1]*rL,
      tx=cx+Math.cos(th)*rc,ty=cy+Math.sin(th)*rc,k=seg(s3,.1+i*.03,.6+i*.03),x=lerp(fx,tx,k),y=lerp(fy,ty,k);
      E.nt[i].setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(th*180/Math.PI+90).toFixed(1)+")");
      E.nt[i].style.opacity=seg(s3,0,.25).toFixed(3)});
    /* platelets: scattered, clump against the wall in step 2, disperse again in step 4 */
    var cl=s2*(1-s4),ca=3.5,cxr=cx+Math.cos(ca)*(rL*.55),cyr=cy+Math.sin(ca)*(rL*.55);
    PL.forEach(function(g,i){var fx=cx+Math.cos(g[0])*g[1]*rL,fy=cy+Math.sin(g[0])*g[1]*rL,a=i/PL.length*Math.PI*2,
      tx=cxr+Math.cos(a)*(5+7*(i%3)),ty=cyr+Math.sin(a)*(4+6*(i%3)),x=lerp(fx,tx,cl),y=lerp(fy,ty,cl);
      E.pl[i].setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(g[0]*57+cl*40).toFixed(1)+")")});
    E.L[0].style.opacity=(seg(s1,.2,.7)*(1-s2)).toFixed(3);
    E.L[1].style.opacity=(seg(s2,.3,.8)*(1-s3)).toFixed(3);
    E.L[2].style.opacity=(seg(s3,.3,.8)*(1-s4)).toFixed(3);
    E.L[3].style.opacity=seg(s4,.5,1).toFixed(3);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
