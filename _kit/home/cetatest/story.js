/* The story scene (BL/BY/DB): the four phases of a CETA differential-pressure leak test, exactly as cetatest.com >
   Informationen > Dichtheitsprüfung describes them ("1) die Füllphase, in der das Prüfteil auf den Zieldruck gefüllt
   wird, 2) die Stabilisierphase bei abgetrenntem Füllventil ... 3) die eigentliche Messphase, in der die
   Differenzdruckmesszelle in den Messkreis geschaltet wird ... 4) der Entlüftphase"; the registered pressure loss is
   compared with the set limits, inside them the part is a Gutteil). Drawn as ONE pressure record kept on screen:
   Step 1 (Füllen): the pressure in the part climbs to the target pressure.
   Step 2 (Beruhigen): with the fill valve closed the fill transients settle.
   Step 3 (Messen): the differential-pressure band draws in; the slow loss shows as a rising Δp, staying under its limit.
   Step 4 (Entlüften): the part is vented and the result reads i. O. (Gutteil). */
var SCW=760,SCH=520,X0=40,X1=720,XF=200,XS=360,XM=600,PB=290,PT=120,DB=462,DL=396;
function ctP(x){
  if(x<=XF){var t=(x-X0)/(XF-X0);return PB-(PB-PT+6)*(1-Math.pow(1-t,2.6))}
  if(x<=XS){var u=(x-XF)/(XS-XF);return PT-6+(6+8*u)*(1-Math.exp(-u*3))+9*Math.exp(-u*3.2)*Math.sin(u*Math.PI*4.5)}
  var y3=ctP(XS);
  if(x<=XM){return y3+10*(x-XS)/(XM-XS)}
  var y4=y3+10;return PB-(PB-y4)*Math.exp(-(x-XM)/24)}
function ctD(x){return DB-38*(x-XS)/(XM-XS)}
function ctPath(f,xa,xb){var d="",x;for(x=xa;x<=xb+.01;x+=2)d+=(d?"L":"M")+x.toFixed(1)+" "+f(Math.min(x,xb)).toFixed(1);return d}
function ctScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<text class="t" x="'+X0+'" y="34">'+(mob?"PRÜFDRUCK":"PRÜFDRUCK IM PRÜFTEIL")+'</text>';
  /* frames of the two bands and the phase boundaries, inside the bands only, so no label ever sits on a line */
  g+='<g class="gr"><path d="M'+X0+' 86H'+X1+'M'+X0+' 314H'+X1+'M'+X0+' 366H'+X1+'M'+X0+' 474H'+X1+'M'+X0+' 86V314M'+X1+' 86V314M'+X0+' 366V474M'+X1+' 366V474"/>';
  g+='<path d="M'+XF+' 86V314M'+XS+' 86V314M'+XM+' 86V314M'+XS+' 366V474M'+XM+' 366V474"/></g>';
  g+='<path class="z" d="M'+X0+' '+PB+'H'+X1+'"/>';
  g+='<path id="ctT" class="z tg" d="M'+X0+' '+PT+'H'+XM+'"/>';
  g+='<rect id="ctMz" class="mz" x="'+XS+'" y="86" width="'+(XM-XS)+'" height="228"/>';
  g+='<path id="ctP1" class="u sD" d="'+ctPath(ctP,X0,XF)+'"/>';
  g+='<path id="ctP2" class="u sD" d="'+ctPath(ctP,XF,XS)+'"/>';
  g+='<path id="ctP3" class="ud sD" d="'+ctPath(ctP,XS,XM)+'"/>';
  g+='<path id="ctP4" class="u sD" d="'+ctPath(ctP,XM,X1)+'"/>';
  /* the differential-pressure band (step 3 on) */
  g+='<g id="ctDb"><path class="z" d="M'+X0+' '+DB+'H'+X1+'"/><path class="lim" d="M'+XS+' '+DL+'H'+X1+'"/>';
  g+='<rect class="mz" x="'+XS+'" y="366" width="'+(XM-XS)+'" height="108"/></g>';
  g+='<path id="ctD" class="ud sD" d="'+ctPath(ctD,XS,XM)+'"/>';
  /* labels (8px+ clear of every stroke: above the pressure band, or in the gap between the bands) */
  var ph=[["FÜLLEN",(X0+XF)/2],["BERUHIGEN",(XF+XS)/2],["MESSEN",(XS+XM)/2],["ENTLÜFTEN",(XM+X1)/2]];
  ph.forEach(function(q,k){g+='<g id="ctL'+(k+1)+'"><text class="t s1" x="'+q[1]+'" y="70" text-anchor="middle">'+q[0]+'</text></g>'});
  g+='<g id="ctLt">'+(mob?'':'<text class="t" x="'+(X1-8)+'" y="'+(PT-12)+'" text-anchor="end">ZIELDRUCK</text>')+'</g>';
  g+='<g id="ctLd"><text class="t" x="'+X0+'" y="346">'+(mob?"DIFFERENZDRUCK":"DIFFERENZDRUCK Δp")+'</text><text class="t s1" x="'+X1+'" y="346" text-anchor="end">GRENZWERT</text></g>';
  g+='<g id="ctOk"><text class="ok" x="'+X1+'" y="510" text-anchor="end">'+(mob?"i. O.":"i. O. · GUTTEIL")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+X0+'" y="510">1 · FÜLLEN</text></g>';
  g+='<g id="lb2"><text class="a" x="'+X0+'" y="510">2 · BERUHIGEN</text></g>';
  g+='<g id="lb3"><text class="a" x="'+X0+'" y="510">3 · MESSEN</text></g>';
  g+='<g id="lb4"><text class="a" x="'+X0+'" y="510">4 · ENTLÜFTEN</text></g>';
  return g+'</svg>';
}
function scene(){return ctScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var mob=svg.classList.contains("mob");
  var E={p1:dl("#ctP1"),p2:dl("#ctP2"),p3:dl("#ctP3"),p4:dl("#ctP4"),d:dl("#ctD"),T:$("#ctT",svg),Mz:$("#ctMz",svg),Db:$("#ctDb",svg),
    L:[1,2,3,4].map(function(k){return $("#ctL"+k,svg)}),lb:[1,2,3,4].map(function(k){return $("#lb"+k,svg)}),Lt:$("#ctLt",svg),Ld:$("#ctLd",svg),Ok:$("#ctOk",svg),t0:svg.querySelector("text.t"),gr:$(".gr",svg),z:svg.querySelector("path.z")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);a[0].style.opacity=v>.002?"1":"0"})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b);op(E.gr,b);op(E.z,b)}
    /* step 1: fill to the target pressure */
    op(E.T,b*seg(p,.02,.1));op(E.Lt,b*seg(p,.12,.18));draw(E.p1,b*seg(p,.03,.19));
    /* step 2: the transients settle */
    draw(E.p2,b*seg(p,.27,.44));
    /* step 3: the measuring window, the Δp band and its trace */
    op(E.Mz,b*seg(p,.5,.56));op(E.Db,b*seg(p,.51,.57));op(E.Ld,b*seg(p,.53,.59));draw(E.p3,b*seg(p,.54,.7));draw(E.d,b*seg(p,.54,.7));
    /* step 4: vent; the result reads i. O. */
    draw(E.p4,b*seg(p,.77,.9));op(E.Ok,b*seg(p,.86,.93));
    var on=[seg(p,.08,.14),seg(p,.3,.36),seg(p,.55,.61),seg(p,.79,.85)];
    for(var k=0;k<4;k++){var v=on[k];if(mob&&k<3)v*=1-seg(p,(k+1)*.25+.01,(k+1)*.25+.05);op(E.L[k],b*v);
      op(E.lb[k],b*seg(p,k*.25,k*.25+.05)*(k<3?(1-seg(p,(k+1)*.25-.03,(k+1)*.25+.01)):1))}
  };
}
