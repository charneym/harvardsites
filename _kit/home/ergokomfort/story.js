/* The story scene (BL/BY/DB): what the mat does, drawn as ONE continuous scene kept on screen for all three steps
   (ergokomfort.de home and /arbeitsplatzmatten/studie). Top: a schematic ground-reaction curve over one stance phase.
   Below: a section through the floor. Step 1: standing on a hard concrete floor, a sharp force curve. Step 2: the
   ERGOKOMFORT FN-PLUS (12 mm foamed PUR, flat buttons, bevelled edges) is laid on the floor, the curve softens.
   Step 3: the study: the load-response phase is marked, with the measured knee result. Every element is driven by the
   scrubbed story progress. */
var SCW=760,SCH=520;
var EKG0=60,EKG1=700,EKGY=196;
function ekCurve(k){/* schematic stance-phase force curve; k=0 hard floor, k=1 on the mat (first peak lower and later) */
  var a=70+18*k,ax=140+22*k,b=150-6*k,bx=300,c=72+6*k,cx=470;
  return "M"+EKG0+" "+EKGY+"C"+(EKG0+40+30*k)+" "+EKGY+" "+(ax-34-6*k)+" "+a+" "+ax+" "+a+"S"+(bx-80)+" "+b+" "+bx+" "+b+"S"+(cx-40)+" "+c+" "+cx+" "+c+"S"+(EKG1-80)+" "+EKGY+" "+(EKG1-40)+" "+EKGY}
function ekMat(){/* the mat in section: bevelled ramps both ends, a row of flat buttons on top */
  var x0=150,x1=610,yb=330,yt=310,bv=28,d="M"+x0+" "+yb+"L"+(x0+bv)+" "+yt,x,p=16;
  for(x=x0+bv+6;x+10<x1-bv-4;x+=p){d+="L"+x+" "+yt+"L"+(x+1.5)+" "+(yt-3.5)+"L"+(x+8.5)+" "+(yt-3.5)+"L"+(x+10)+" "+yt}
  return d+"L"+(x1-bv)+" "+yt+"L"+x1+" "+yb+"Z"}
function ekScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: graph axes and the floor slab ---- */
  g+='<g id="scBase">';
  g+='<path class="ax sD" d="M'+EKG0+' 54V'+EKGY+'H'+EKG1+'"/>';
  g+='<path class="slab sD" d="M40 332H720"/>';
  for(i=0;i<17;i++)g+='<path class="hat sD" d="M'+(54+i*40)+' 362L'+(74+i*40)+' 336"/>';
  g+='<path class="slab sD" d="M40 364H720"/>';
  g+='<text class="t" x="'+EKG0+'" y="36">'+(mob?"KRAFT · SCHEMA":"BODENREAKTIONSKRAFT · SCHEMA")+'</text>';
  g+='<text class="t" x="'+EKG1+'" y="222" text-anchor="end">'+(mob?"STÜTZPHASE":"ZEIT IN DER STÜTZPHASE")+'</text>';
  g+='<text class="t" x="40" y="392">'+(mob?"BETON":"BETONBODEN, FLIESEN")+'</text>';
  g+='</g>';
  /* ---- step 1: the hard-floor curve, and the load arrow landing on concrete ---- */
  g+='<path class="cv1 sC" id="cv1" d="'+ekCurve(0)+'"/>';
  g+='<g id="ar"><path class="arw" d="M380 240V326"/><path class="arw" d="M372 316l8 10 8-10"/></g>';
  /* ---- step 2: the mat is laid on the floor; the curve on the mat draws in ---- */
  g+='<g id="mt"><path class="mat" d="'+ekMat()+'"/><text class="t s2" x="610" y="392" text-anchor="end">'+(mob?"FN-PLUS · 12 MM":"ERGOKOMFORT FN-PLUS · 12 MM PUR")+'</text></g>';
  g+='<path class="cv2 sC" id="cv2" d="'+ekCurve(1)+'"/>';
  /* ---- step 3: the load-response phase marked on the curve ---- */
  g+='<g id="lr"><rect class="band" x="'+EKG0+'" y="54" width="120" height="'+(EKGY-54)+'"/><text class="t s1" x="'+EKG0+'" y="222">'+(mob?"BELASTUNG":"BELASTUNGSANTWORT")+'</text></g>';
  /* ---- the state, under the section ---- */
  g+='<g id="m1"><text class="t s3" x="40" y="440">'+(mob?"HARTE, STEILE BELASTUNG":"HARTER BODEN: STEILE, HARTE BELASTUNG")+'</text></g>';
  g+='<g id="m2"><text class="t s2" x="40" y="440">'+(mob?"DIE MATTE FEDERT AB":"DIE MATTE GIBT NACH, DIE BELASTUNG STEIGT SANFTER")+'</text></g>';
  g+='<g id="m3"><text class="t s1" x="40" y="440">'+(mob?"KNIE: 4,3° STATT 4,0°":"KNIEGELENK: 4,3° AUF DER MATTE, 4,0° AUF DEM BODEN (P = .001)")+'</text></g>';
  /* ---- step captions, in the clear band under the scene ---- */
  g+='<g id="lb1"><text class="a" x="40" y="500">STEHEN AUF HARTEM BODEN</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="500">'+(mob?"EINE WEICHE UNTERLAGE":"EINE WEICHE UNTERLAGE FÜR HOHEN KOMFORT")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="500">'+(mob?"DER GANG STABILISIERT SICH":"DER GANG STABILISIERT SICH, MESSBAR")+'</text></g>';
  return g+'</svg>';
}
function scene(){return ekScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),cv1:dl("#cv1"),cv2:dl("#cv2"),c1:$("#cv1",svg),ar:$("#ar",svg),mt:$("#mt",svg),lr:$("#lr",svg),
    m1:$("#m1",svg),m2:$("#m2",svg),m3:$("#m3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tf(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the hard-floor curve draws, the load arrow drops onto the concrete */
    draw(E.cv1,b*seg(p,.04,.22));
    var arIn=seg(p,.08,.2);op(E.ar,b*arIn);
    /* step 2: the mat slides in from the left; the arrow now stops on the mat; the floor curve fades back, the mat curve draws */
    var mIn=seg(p,.36,.5);op(E.mt,b*mIn);tf(E.mt,-60*(1-mIn),0);
    tf(E.ar,0,(1-arIn)*-20-mIn*22);
    if(E.c1)E.c1.style.opacity=(1-.68*seg(p,.46,.56)).toFixed(3);
    draw(E.cv2,b*seg(p,.46,.62));
    /* step 3: the load-response phase is marked */
    op(E.lr,b*seg(p,.72,.82));
    op(E.m1,b*seg(p,.1,.18)*(1-seg(p,.3,.34)));op(E.m2,b*seg(p,.5,.56)*(1-seg(p,.64,.68)));op(E.m3,b*seg(p,.84,.9));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.8,.88));
  };
}
