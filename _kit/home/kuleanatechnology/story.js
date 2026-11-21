/* The story scene (BL/BY/DB): Kuleana's water-free hemodialysis loop as ONE continuous scene, drawn in fine line.
   Left: a hollow-fibre dialyser (blood in at the top, out at the bottom; dialysate counter-current around the fibres).
   Right: the POUR cell (Photo-Oxidation Urea Removal), a serpentine channel coated with TiO2 under a row of lamps.
   Step 1: urea (crimson dots) crosses the fibre membranes into the dialysate. Step 2: the spent dialysate carries it to the
   POUR cell, the lamps come on and the urea leaves as CO2 and N2 bubbles. Step 3: the clean dialysate flows back to the
   dialyser: a small closed loop instead of a water supply. Sources: kuleanatechnology.com; NIH RePORTER R41/R44 DK137677
   abstracts (2 litres of dialysate, TiO2 photo-activated catalyst, urea to CO2 and N2 with 99% efficiency). */
var SCW=760,SCH=520;
var UR=(function(){var s=1977,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<16;i++){var f=i%6;a.push({fx:139+f*13,y:112+R()*290,dx:(R()<.5?-1:1)*6.5,ph:R()})}return a})();
var BUB=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<14;i++)a.push({x:490+R()*170,y0:300+R()*40,ph:R(),r:2.2+R()*2.2});return a})();
var P_S="M222 110H404Q432 110 432 138V214H462",
    P_C="M462 214H668V244H482V274H668V304H482V334H690",
    P_R="M690 334H722V476H250Q222 476 222 448V420";
function memScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="dz sD" d="M128 62H212Q222 62 222 72V448Q222 458 212 458H128Q118 458 118 448V72Q118 62 128 62Z"/>';
  g+='<path class="bl sD" d="M118 84H222M118 436H222"/>';
  for(i=0;i<6;i++){var x=139+i*13;g+='<path class="fbl sD" d="M'+x+' 84V436"/>'}
  g+='<path class="bl sD" d="M170 14V62M170 458V506"/>';
  g+='<path class="dz sD" d="M456 190H696V356H456Z"/>';
  g+='<path class="bl sD" d="M474 120H680V134H474Z"/>';
  g+='</g>';
  g+='<path class="ar" d="M165 52L170 61L175 52M165 496L170 505L175 496"/>';
  g+='<g id="scRay">';for(i=0;i<8;i++){var rx=492+i*25;g+='<path class="ry" d="M'+rx+' 140V180"/>'}g+='</g>';
  g+='<path class="pth" id="pS" d="'+P_S+'"/>';
  g+='<path class="chn" id="pC" d="'+P_C+'"/>';
  g+='<path class="pth" id="pR" d="'+P_R+'"/>';
  g+='<path class="flw" id="fS" d="'+P_S+'"/><path class="flw" id="fR" d="'+P_R+'"/>';
  g+='<g id="scUr">';UR.forEach(function(u){g+='<circle class="ur" r="3.6" cx="'+u.fx+'" cy="'+u.y.toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scBb">';BUB.forEach(function(b){g+='<circle class="bb" r="'+b.r.toFixed(1)+'" cx="'+b.x.toFixed(1)+'" cy="'+b.y0.toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scCap">';
  g+='<text class="t" x="184" y="34">BLOOD IN</text><text class="t" x="184" y="500">BLOOD OUT</text>';
  g+='<text class="t" transform="translate(98 260) rotate(-90)" text-anchor="middle">HOLLOW-FIBRE DIALYSER</text>';
  g+='<text class="t" x="576" y="384" text-anchor="middle">POUR CELL · TiO₂</text>';
  g+='<text class="t" x="577" y="108" text-anchor="middle">LIGHT</text>';
  g+='</g>';
  var y2=o.mob?324:318;
  g+='<g id="lb1"><text class="a" x="250" y="298">UREA CROSSES</text><text class="a" x="250" y="'+y2+'">THE MEMBRANE</text></g>';
  g+='<g id="lb2"><text class="a" x="250" y="298">PHOTO-OXIDATION</text><text class="a" x="250" y="'+y2+'">UREA → CO₂ + N₂</text></g>';
  g+='<g id="lb3"><text class="a" x="250" y="298">CLEAN DIALYSATE</text><text class="a" x="250" y="'+y2+'">~2 L CLOSED LOOP</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var pS=$("#pS",svg),pC=$("#pC",svg),LS=pS.getTotalLength(),LC=pC.getTotalLength();
  var E={base:dl("#scBase .sD"),pth:dl("#pS,#pC,#pR"),cap:$("#scCap",svg),arr:$(".ar",svg),ray:$$("#scRay .ry",svg),
    ur:$$("#scUr .ur",svg),bb:$$("#scBb .bb",svg),fS:$("#fS",svg),fR:$("#fR",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.cap,b);op(E.arr,b)}
    draw(E.pth,b);
    /* step 1: urea leaves the fibres for the dialysate around them; step 2 it rides the spent line into the cell */
    var cross=seg(p,.1,.32),go=seg(p,.36,.66);
    E.ur.forEach(function(el,i){var u=UR[i],x,y,o=1,k=cl(go*1.7-i*.045);
      if(k<=0){x=u.fx+u.dx*cross;y=u.y}
      else if(k<.18){var t=k/.18;x=u.fx+u.dx+(222-u.fx-u.dx)*t;y=u.y+(110-u.y)*t}
      else{var d=(k-.18)/.82*(LS+LC*.85),pt=d<LS?pS.getPointAtLength(d):pC.getPointAtLength(d-LS);x=pt.x;y=pt.y;if(d>LS)o=1-cl((d-LS)/(LC*.85))}
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*o)});
    /* step 2: the lamps come on and the urea leaves as gas */
    var lamp=seg(p,.4,.5);E.ray.forEach(function(r,i){op(r,b*lamp*(.55+.45*cl(lamp*2-i*.08)))});
    var gas=seg(p,.5,.6)*(1-.6*seg(p,.9,1));
    E.bb.forEach(function(el,i){var B=BUB[i],t=((p*3.2+B.ph)%1);el.setAttribute("cy",(B.y0-t*(B.y0-196)).toFixed(1));op(el,b*gas*Math.sin(t*Math.PI))});
    /* the fluid moves: spent toward the cell, clean back to the dialyser */
    var sfl=seg(p,.36,.46),rfl=seg(p,.66,.76);
    E.fS.style.strokeDashoffset=(-p*900).toFixed(1);op(E.fS,b*sfl*(1-.5*rfl));
    E.fR.style.strokeDashoffset=(-p*900).toFixed(1);op(E.fR,b*rfl);
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.63,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
