/* The story scene (BL/BY/DB): reconditioning a drawing die, as EDER describe it (eder-eng.com > Diamond / PCD die working
   equipment: "Working the die reduction cones ... is almost always performed ultrasonically ... USP range"; "Working the
   die bearings is usually performed with wire-type sizing/polishing machinery such as ... HGM, CGM, or UFW"; wire trade
   press 2024, Kurt G. Eder: repolish "as soon as the polish at the wire contact point in the drawing cone becomes cloudy"),
   drawn as ONE die in section, kept on screen for all three steps, in the manner of EDER's own process diagrams:
   Step 1 (Wear): casing and nib draw in; copper wire is drawn through, thick in, thin out; the contact point clouds.
   Step 2 (Cone): an ultrasonically vibrating work needle with abrasive comes down and re-profiles the cone.
   Step 3 (Bearing): a work wire with abrasive strokes through the rotating die and sizes the bearing. */
var SCW=760,SCH=520;
function cy(y){return y}
function edScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"138 40 520 476":"110 0 650 520")+'" aria-hidden="true">';
  g+='<defs><pattern id="edH" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,245,244,.16)" stroke-width="1"/></pattern><clipPath id="edC"><rect x="0" y="46" width="800" height="480"/></clipPath></defs>';
  g+='<text class="t" x="'+(mob?540:150)+'" y="'+(mob?128:30)+'">'+(mob?"SECTION":"DRAWING DIE, IN SECTION")+'</text>';
  /* casing halves (hatched steel) and nib halves (PCD / diamond) */
  g+='<g id="edB">'+
    '<path class="cs sD" d="M150 150H250V330H290V370H150Z"/><path class="cs sD" d="M510 150H410V330H370V370H510Z"/>'+
    '<path class="nb sD" d="M250 190H264L324 286V300L300 330H250Z"/><path class="nb sD" d="M410 190H396L336 286V300L360 330H410Z"/>'+
    '<path class="ax sD" d="M330 136V384"/>'+
    '</g>';
  /* the copper wire being drawn: 14 wide in, 10 wide out */
  g+='<path id="edW" class="cu" d="M323 18V282L325 292V502H335V292L337 282V18Z"/>';
  /* the cloudy contact point (wear) on both cone walls */
  g+='<g id="edWr"><path class="wr" d="M308 260L321.6 282"/><path class="wr" d="M352 260L338.4 282"/></g>';
  /* step 2: the ultrasonic work needle, its vibration marks and the abrasive in the gap */
  g+='<g clip-path="url(#edC)"><g id="edN"><path class="nd" d="M312 -60V255.6L330 284.4L348 255.6V-60Z"/></g></g>';
  g+='<g id="edU"><path class="us" d="M356 102Q362 112 356 122"/><path class="us" d="M364 98Q372 112 364 126"/><path class="us" d="M304 102Q298 112 304 122"/><path class="us" d="M296 98Q288 112 296 126"/></g>';
  g+='<g id="edA">';
  for(i=0;i<9;i++){var y=200+i*9.4,xl=264+(y-190)*.625+3.6,xr=660-xl;g+='<circle class="ab" cx="'+xl.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="1.7"/><circle class="ab" cx="'+xr.toFixed(1)+'" cy="'+(y+4.7).toFixed(1)+'" r="1.7"/>'}
  g+='</g>';
  g+='<g id="edP"><path class="po" d="M264 190L324 286"/><path class="po" d="M396 190L336 286"/></g>';
  /* step 3: the work wire, the stroke arrow, the sized bearing and the rotation */
  g+='<g id="edK"><path class="ww" d="M330 16V504"/></g>';
  g+='<g id="edS"><path class="ar" d="M300 58V118M294 66L300 58L306 66M294 110L300 118L306 110"/></g>';
  g+='<g id="edBr"><path class="po" d="M324 286V300"/><path class="po" d="M336 286V300"/></g>';
  g+='<g id="edR"><path class="ar" d="M222 404A108 17 0 0 0 438 404"/><path class="ar" d="M429 396L438 404L427 410"/></g>';
  /* labels, per step (8px+ clear of every stroke) */
  g+='<g id="edL1"><text class="t s1" x="350" y="64">'+"WIRE IN"+'</text><text class="t" x="540" y="276">'+(mob?"CONTACT":"CONTACT POINT")+'</text><text class="t s1" x="350" y="470">'+(mob?"WIRE OUT":"WIRE OUT, DRAWN THINNER")+'</text></g>';
  g+='<g id="edL2"><text class="t s1" x="362" y="64">'+(mob?"NEEDLE":"WORK NEEDLE")+'</text><text class="t" x="386" y="118">'+(mob?"ULTRASONIC":"ULTRASONIC VIBRATION")+'</text><text class="t" x="540" y="246">ABRASIVE</text></g>';
  g+='<g id="edL3"><text class="t s1" x="344" y="64">WORK WIRE</text><text class="t" x="288" y="94" text-anchor="end">STROKE</text><text class="t" x="540" y="297">BEARING</text><text class="t" x="452" y="410">ROTATION</text></g>';
  g+='<g id="edLs"><text class="t" x="540" y="214">'+(mob?"NIB":"NIB · PCD OR DIAMOND")+'</text><text class="t" x="540" y="356">CASING</text></g>';
  g+='<g id="lb1"><text class="a" x="150" y="508">1 · WEAR</text></g>';
  g+='<g id="lb2"><text class="a" x="150" y="508">2 · CONE</text></g>';
  g+='<g id="lb3"><text class="a" x="150" y="508">3 · BEARING</text></g>';
  return g+'</svg>';
}
function scene(){return edScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#edB .sD"),cs:$$("#edB .cs,#edB .nb",svg),W:$("#edW",svg),Wr:$("#edWr",svg),N:$("#edN",svg),U:$("#edU",svg),A:$("#edA",svg),P:$("#edP",svg),po:dl("#edP .po"),
    K:$("#edK",svg),ww:$("#edK .ww",svg),S:$("#edS",svg),Br:$("#edBr",svg),R:$("#edR",svg),rr:dl("#edR .ar"),
    L1:$("#edL1",svg),L2:$("#edL2",svg),L3:$("#edL3",svg),Ls:$("#edLs",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    /* step 1: the die draws in, the wire is drawn through it, the contact point clouds */
    draw(E.base,b*seg(p,0,.16));
    E.cs.forEach(function(c){c.style.fillOpacity=(seg(p,.08,.2)).toFixed(3)});
    var wi=seg(p,.06,.16)*(1-seg(p,.3,.38));op(E.W,b*wi);
    op(E.Wr,b*seg(p,.16,.26)*(1-seg(p,.5,.58)));
    op(E.Ls,b*seg(p,.1,.2));
    op(E.L1,b*seg(p,.14,.22)*(1-seg(p,.29,.34)));
    /* step 2: the needle comes down (p .36-.48), vibrates, re-profiles the cone, and lifts out again (p .62-.7) */
    var nd=seg(p,.36,.48)*(1-seg(p,.62,.7)),jit=Math.sin(p*900)*2.2*seg(p,.46,.5)*(1-seg(p,.6,.62));
    E.N.setAttribute("transform","translate(0 "+(-230*(1-nd)+jit).toFixed(1)+")");
    op(E.N,b*seg(p,.34,.4)*(1-seg(p,.66,.7)));
    op(E.U,b*seg(p,.47,.5)*(1-seg(p,.6,.63)));
    op(E.A,b*seg(p,.46,.5)*(1-seg(p,.62,.66)));
    op(E.P,b*seg(p,.5,.52));draw(E.po,b*seg(p,.5,.6));
    op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.62,.66)));
    /* step 3: the work wire strokes up and down through the rotating die; the bearing is sized */
    var kk=seg(p,.68,.74);op(E.K,b*kk);
    E.K.setAttribute("transform","translate(0 "+(Math.sin(p*60)*10*seg(p,.72,.76)).toFixed(1)+")");
    op(E.S,b*seg(p,.72,.78));op(E.Br,b*seg(p,.8,.86));
    op(E.R,b*seg(p,.74,.78));draw(E.rr,b*seg(p,.74,.86));
    op(E.L3,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
