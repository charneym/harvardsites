/* The story scene (DB/BL): MuscleMetrix's own mechanism (musclemetrix.com: "precise sensing of muscle dynamics within the
   amputated limb using small magnetic implants, external magnetic sensing arrays, and advanced tracking algorithms";
   ClinicalTrials.gov NCT07195461: the Magnetic Bead Tracking system with a bionic external prosthesis for persons with
   transtibial amputation), drawn as ONE continuous fine-line scene that fills the frame: a residual lower limb in side
   view (knee, shin, tibia, calf muscle) seated in a socket, the pylon and a bionic ankle and foot below.
   Frame 0 is already complete.
   Step 1 (implant): two magnetic beads appear in the calf muscle, along its fibres.
   Step 2 (sense): the external array behind the calf lights and reads the beads; the muscle contracts and the bead gap
   (its length) shortens.
   Step 3 (control): the tracking signal runs down to the ankle, and the prosthetic foot follows the muscle.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var LEGF="M398 26C402 90 396 160 388 230C384 270 382 300 380 318";            /* shin (front) */
var LEGB="M262 26C246 70 236 120 240 170C244 220 266 270 286 318";          /* calf (back) */
var STUMP="M286 318C300 342 366 344 380 318";
var KNEE="M262 26C300 18 360 18 398 26";
var TIB1="M352 34C354 120 350 220 344 304",TIB2="M372 34C374 120 372 220 366 306";
var MUS="M292 46C262 92 254 186 300 266C320 186 322 92 292 46Z";
var FIB=["M292 60C278 110 276 180 298 250","M292 60C304 110 306 180 300 250","M292 60C286 110 288 180 299 254"];
var SOCK="M232 176C236 262 262 352 330 376C388 362 396 270 394 176";
var PYL1="M326 376L326 450",PYL2="M340 376L340 450";
var ANK="M312 450h44v30h-44z";
var FOOT="M308 486L424 498C440 500 450 508 452 520L300 520C296 506 300 492 308 486Z";
var SIG="M214 236C214 330 270 420 310 462";
var B1=[290,112],B2=[296,206];
var SENS=[];(function(){for(var y=92;y<=228;y+=24)SENS.push(y)})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'176 14 340 574':'40 10 680 560')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wo sD" d="'+KNEE+'"/><path class="wl sD" d="'+LEGF+'"/><path class="wl sD" d="'+LEGB+'"/><path class="wl sD" d="'+STUMP+'"/>';
  g+='<path class="wo sD" d="'+TIB1+'"/><path class="wo sD" d="'+TIB2+'"/>';
  g+='<path class="pr sD" d="'+SOCK+'"/><path class="pr sD" d="'+PYL1+'"/><path class="pr sD" d="'+PYL2+'"/>';
  g+='</g>';
  g+='<path class="ms" id="mus" d="'+MUS+'"/>';
  FIB.forEach(function(d){g+='<path class="fb" d="'+d+'"/>'});
  g+='<path class="prf" d="'+ANK+'"/>';
  g+='<g id="foot"><path class="prf" d="'+FOOT+'"/></g>';
  /* the external sensing array behind the calf */
  g+='<g id="arr">';SENS.forEach(function(y){g+='<rect class="sa" x="206" y="'+y+'" width="14" height="14"/><rect class="sn" x="210" y="'+(y+4)+'" width="6" height="6"/>'});g+='</g>';
  /* field reads (array to beads), the bead gap, the beads */
  g+='<path class="fl" id="fl1" d="M222 '+(B1[1])+'L'+(B1[0]-10)+' '+B1[1]+'"/><path class="fl" id="fl2" d="M222 '+(B2[1])+'L'+(B2[0]-10)+' '+B2[1]+'"/>';
  g+='<path class="gap" id="gap" d="M'+B1[0]+' '+B1[1]+'L'+B2[0]+' '+B2[1]+'"/>';
  g+='<circle class="bd" id="bd1" r="6" cx="'+B1[0]+'" cy="'+B1[1]+'"/><circle class="bd" id="bd2" r="6" cx="'+B2[0]+'" cy="'+B2[1]+'"/>';
  g+='<path class="sig" id="sig" d="'+SIG+'"/>';
  /* labels, each with a leader that stops short of its text (DR) */
  if(!mob){
    g+='<g id="lBead"><path class="ld" d="M300 112L470 112"/><text class="t" x="480" y="116">MAGNETIC BEADS</text></g>';
    g+='<g id="lArr"><path class="ld" d="M202 160L120 160"/><text class="t" x="110" y="156" text-anchor="end">SENSING</text><text class="t" x="110" y="172" text-anchor="end">ARRAY</text></g>';
    g+='<g id="lLen"><path class="ld" d="M302 170L470 190"/><text class="t" x="480" y="186">MUSCLE LENGTH</text><text class="t q" x="480" y="202">BEAD TO BEAD</text></g>';
    g+='<g id="lAnk"><path class="ld" d="M360 466L470 466"/><text class="t" x="480" y="470">BIONIC ANKLE</text></g>';
  }else{
    g+='<g id="lBead"><path class="ld" d="M300 112L414 112"/><text class="t" x="422" y="118">BEADS</text></g>';
    g+='<g id="lArr"></g>';
    g+='<g id="lLen"><path class="ld" d="M302 172L414 172"/><text class="t" x="422" y="178">LENGTH</text></g>';
    g+='<g id="lAnk"><path class="ld" d="M360 466L414 466"/><text class="t" x="422" y="472">ANKLE</text></g>';
  }
  var ly=mob?580:SCH+2,lx=mob?160:56;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TWO BEADS IN THE MUSCLE':'TWO SMALL MAGNETIC BEADS IN THE CALF MUSCLE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE ARRAY READS THE GAP':'THE ARRAY READS THE BEADS AS THE MUSCLE CONTRACTS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE ANKLE FOLLOWS':'THE BIONIC ANKLE FOLLOWS THE MUSCLE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),sig:dl("#sig"),b1:$("#bd1",svg),b2:$("#bd2",svg),gap:$("#gap",svg),f1:$("#fl1",svg),f2:$("#fl2",svg),
    arr:$("#arr",svg),foot:$("#foot",svg),mus:$("#mus",svg),lBead:$("#lBead",svg),lArr:$("#lArr",svg),lLen:$("#lLen",svg),lAnk:$("#lAnk",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(2)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1. the beads appear in the muscle */
    var k1=sm(seg(p,.06,.2)),k2=sm(seg(p,.12,.26));
    op(E.b1,b*k1);op(E.b2,b*k2);E.b1.setAttribute("r",(6*(.4+.6*k1)).toFixed(2));E.b2.setAttribute("r",(6*(.4+.6*k2)).toFixed(2));
    op(E.lBead,b*seg(p,.16,.26)*(1-seg(p,.36,.42)));
    /* 2. the array lights and reads; the muscle contracts (it shortens and bulges a touch), the bead gap shortens */
    op(E.arr,b*seg(p,.36,.46));op(E.lArr,b*seg(p,.4,.5)*(1-seg(p,.66,.72)));
    op(E.f1,b*seg(p,.42,.5)*(1-.6*s3));op(E.f2,b*seg(p,.44,.52)*(1-.6*s3));
    var c=sm(seg(p,.5,.62))*(1-.35*sm(seg(p,.86,.96))),y2=B2[1]-22*c;
    E.b2.setAttribute("cy",y2.toFixed(1));E.gap.setAttribute("d","M"+B1[0]+" "+B1[1]+"L"+B2[0]+" "+y2.toFixed(1));
    E.f2.setAttribute("d","M222 "+y2.toFixed(1)+"L"+(B2[0]-10)+" "+y2.toFixed(1));
    E.mus.setAttribute("transform","translate(292 46) scale("+(1+.08*c).toFixed(3)+" "+(1-.07*c).toFixed(3)+") translate(-292 -46)");
    op(E.gap,b*seg(p,.46,.54));op(E.lLen,b*seg(p,.5,.58)*(1-seg(p,.66,.72)));
    /* 3. the signal runs down to the ankle; the foot follows the muscle (plantarflexes) */
    draw(E.sig,sm(seg(p,.68,.8)));op(E.sig.length?E.sig[0][0]:null,b*seg(p,.68,.7));
    var f=sm(seg(p,.78,.9));E.foot.setAttribute("transform","rotate("+(9*f).toFixed(2)+" 334 484)");
    op(E.lAnk,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
