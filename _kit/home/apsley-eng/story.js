/* The story scene (BL/BY/DB): one component made in a single set-up, as Apsley describe it (apsleyeng.co.uk > Services:
   "multi-axis CNC machinery with sub spindle and 4th axis capability remove the need for secondary machining operations
   allowing components to be completed in a single operation"; Production machining: "CNC CMM inspection ... directly
   against an electronic model of the design"), drawn as ONE part in elevation, kept on screen for all three steps:
   Step 1 (Turn): bar in the main-spindle chuck; the turning tool runs along and leaves the stepped profile.
   Step 2 (Mill): a driven end mill comes down and drills the cross hole; the sub-spindle slides in and takes the part.
   Step 3 (Measure): the machine falls away; a CMM stylus touches off the diameters and the tolerance is called out. */
var SCW=760,SCH=520;
/* turned profile radius at x (axis y=270) */
function apR(x){if(x<290)return 44;if(x<350)return 34;if(x<362)return 30;if(x<430)return 34;if(x<542)return 26;if(x<550)return 26-(x-542);return 18}
function apScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="122 64 532 452" aria-hidden="true">';
  g+='<defs><pattern id="apH" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(243,245,247,.16)" stroke-width="1"/></pattern><clipPath id="apC"><rect x="0" y="64" width="800" height="176"/></clipPath></defs>';
  g+='<text class="t" x="650" y="506" text-anchor="end">'+(mob?"ELEVATION":"MILL-TURN PART, IN ELEVATION")+'</text>';
  /* main spindle chuck (hatched) and jaws */
  g+='<g id="apK"><path class="cs sD" d="M130 160H172V380H130Z"/><path class="cs sD" d="M172 200H214V226H172Z"/><path class="cs sD" d="M172 314H214V340H172Z"/></g>';
  /* the bar stock before turning */
  g+='<path id="apS" class="stk" d="M214 226H604V314H214"/>';
  /* the turned profile (one path, drawn in) and the axis */
  g+='<g id="apP"><path class="pr sD" d="M214 226H290V236H350V240H362V236H430V244H542L550 252V288L542 296H430V304H362V300H350V304H290V314H214"/><path class="ax sD" d="M200 270H600"/></g>';
  g+='<path id="apF" class="pf" d="M214 226H290V236H350V240H362V236H430V244H542L550 252V288L542 296H430V304H362V300H350V304H290V314H214Z"/>';
  /* turning tool (from below) */
  g+='<g id="apT"><path class="tl" d="M0 0L14 16H40V96H14V16"/><path class="ti" d="M0 0L14 16L-6 16Z"/></g>';
  /* step 2: driven end mill and the cross hole; sub-spindle */
  g+='<g clip-path="url(#apC)"><g id="apM"><path class="ml" d="M388 -40H404V236H388Z"/><path class="fl" d="M388 200L404 186M388 172L404 158M388 144L404 130M388 116L404 102M388 88L404 74"/></g></g>';
  g+='<g id="apX"><path class="hd" d="M388 236V304M404 236V304"/><path class="hd2" d="M388 236H404"/></g>';
  g+='<g id="apU"><path class="cs" d="M600 180H648V360H600Z"/><path class="cs" d="M556 214H600V244H556Z"/><path class="cs" d="M556 296H600V326H556Z"/></g>';
  g+='<g id="apR"><path class="ar" d="M372 150A26 8 0 1 0 420 150"/><path class="ar" d="M413 144L420 150L412 155"/></g>';
  /* step 3: CMM stylus and touch points; dimension lines */
  g+='<g clip-path="url(#apC)"><g id="apQ"><path class="sy" d="M318 -40H330V180H318Z"/><path class="st" d="M324 180V223"/><circle class="rb" cx="324" cy="229" r="6"/></g></g>';
  g+='<g id="apD">';
  var pts=[[252,226],[324,236],[470,244],[252,314],[400,304],[500,296]];
  for(i=0;i<pts.length;i++)g+='<circle class="tp" cx="'+pts[i][0]+'" cy="'+pts[i][1]+'" r="3"/>';
  g+='</g>';
  g+='<g id="apDim"><path class="dm" d="M214 380V400M550 380V400M214 392H550"/><path class="dm" d="M222 388L214 392L222 396M542 388L550 392L542 396"/></g>';
  /* labels, per step (8px+ clear of every stroke) */
  var R=560;
  g+='<g id="apL1"><text class="t" x="'+(mob?140:130)+'" y="410">'+(mob?"CHUCK":"MAIN SPINDLE")+'</text><text class="t s1" x="'+R+'" y="212">'+(mob?"BAR":"BAR STOCK")+'</text><text class="t" x="'+(mob?300:470)+'" y="'+(mob?470:452)+'">TURNING TOOL</text></g>';
  g+='<g id="apL2"><text class="t s1" x="420" y="118">'+(mob?"END MILL":"DRIVEN END MILL")+'</text><text class="t" x="'+(mob?440:432)+'" y="150">'+(mob?"C AXIS":"C AXIS INDEX")+'</text><text class="t" x="'+(mob?520:548)+'" y="384">SUB-SPINDLE</text></g>';
  g+='<g id="apL3"><text class="t s1" x="340" y="134">'+(mob?"STYLUS":"CMM STYLUS")+'</text><text class="t" x="340" y="'+(mob?184:174)+'">'+(mob?"TOUCH POINTS":"RUBY BALL · TOUCH POINTS")+'</text><text class="t s1" x="382" y="430" text-anchor="middle">TYPICALLY ± 0.005 MM</text></g>';
  g+='<g id="lb1"><text class="a" x="130" y="506">1 · TURN</text></g>';
  g+='<g id="lb2"><text class="a" x="130" y="506">2 · MILL</text></g>';
  g+='<g id="lb3"><text class="a" x="130" y="506">3 · MEASURE</text></g>';
  return g+'</svg>';
}
function scene(){return apScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={K:$("#apK",svg),kc:$$("#apK .cs",svg),kd:dl("#apK .sD"),S:$("#apS",svg),P:$("#apP",svg),pr:dl("#apP .sD"),F:$("#apF",svg),T:$("#apT",svg),M:$("#apM",svg),X:$("#apX",svg),U:$("#apU",svg),R:$("#apR",svg),rr:dl("#apR .ar"),
    Q:$("#apQ",svg),D:$("#apD",svg),tp:$$("#apD .tp",svg),Dm:$("#apDim",svg),dd:dl("#apDim .dm"),
    L1:$("#apL1",svg),L2:$("#apL2",svg),L3:$("#apL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    /* step 1: chuck and bar in; the tool runs right to left and the profile draws behind it */
    draw(E.kd,b*seg(p,0,.1));
    E.kc.forEach(function(c){c.style.fillOpacity=(seg(p,.06,.14)).toFixed(3)});
    var tv=seg(p,.1,.3);
    op(E.S,b*seg(p,.02,.08)*(1-seg(p,.26,.32)));
    draw(E.pr,b*tv);op(E.F,b*seg(p,.24,.32));
    var tx=600-(600-214)*tv,ty=270+apR(tx)+1;
    E.T.setAttribute("transform","translate("+tx.toFixed(1)+" "+(ty+60*(1-seg(p,.06,.12))+60*seg(p,.3,.36)).toFixed(1)+")");
    op(E.T,b*seg(p,.06,.12)*(1-seg(p,.3,.36)));
    op(E.L1,b*seg(p,.1,.16)*(1-seg(p,.3,.34)));
    /* step 2: end mill comes down (p .38-.46), drills the cross hole, lifts (p .56-.62); the sub-spindle slides in */
    var md=seg(p,.38,.46)*(1-seg(p,.56,.62)),dz=seg(p,.46,.54)*68,jit=Math.sin(p*900)*1.2*seg(p,.46,.48)*(1-seg(p,.53,.54));
    E.M.setAttribute("transform","translate("+jit.toFixed(1)+" "+(-200*(1-md)+dz*(1-seg(p,.56,.62))).toFixed(1)+")");
    op(E.M,b*seg(p,.36,.4)*(1-seg(p,.6,.64)));
    op(E.X,b*seg(p,.48,.54));
    op(E.R,b*seg(p,.4,.46)*(1-seg(p,.62,.66)));draw(E.rr,b*seg(p,.4,.5));
    E.U.setAttribute("transform","translate("+(120*(1-seg(p,.52,.6))).toFixed(1)+" 0)");
    op(E.U,b*seg(p,.5,.56)*(1-seg(p,.7,.74)));
    op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.62,.66)));
    /* step 3: chuck falls away; stylus comes down, touch points appear, the tolerance is called out */
    op(E.K,b*(1-seg(p,.68,.74)));
    var qd=seg(p,.72,.8);E.Q.setAttribute("transform","translate(0 "+(-200*(1-qd)).toFixed(1)+")");op(E.Q,b*seg(p,.7,.74));
    op(E.D,b*seg(p,.78,.8));E.tp.forEach(function(c,i){c.style.opacity=seg(p,.79+i*.016,.81+i*.016).toFixed(3)});
    op(E.Dm,b*seg(p,.84,.88));draw(E.dd,b*seg(p,.84,.92));
    op(E.L3,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
