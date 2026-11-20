/* The story scene (BL/BY/DB): the mPancreas biochip in cross-section, as ONE continuous scene. Three layers, as Micromedics
   describes them (Tech Briefs 2020 entry): a capillary-like channel sealed by a semipermeable membrane above, the central
   reservoir holding the islets, and a second membrane-sealed channel below; under it, the patient's blood glucose.
   Step 1: the islets settle into the reservoir. Step 2: flow runs through both channels and oxygen and nutrients cross the
   membranes to the islets (NSF 2537342: thin permeable membranes and controlled channels regulate oxygen, nutrients and
   metabolic products). Step 3: glucose rises, the islets release insulin into the channels and the trace comes back down
   (Tech Briefs 2025: biosensors for glucose, oxygen and lactate; insulin when high, glucagon when low). Every element is
   driven by the scrubbed story progress. Schematic proportions. */
var SCW=760,SCH=520;
var MP=(function(){
  var s=26062026,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  /* islets: clusters of cells resting on the lower membrane (y=282) */
  var isl=[],xs=[72,160,248,336,424,512,600,688];
  xs.forEach(function(x0,i){var r=28+R()*12,cx=x0+(R()-.5)*12,cy=282-r-2,cells=[],n=Math.round(r*1.5);
    for(var k=0;k<n;k++){var a=R()*Math.PI*2,d=Math.sqrt(R())*(r-6);cells.push([cx+Math.cos(a)*d,cy+Math.sin(a)*d*.92,4.2+R()*3.2])}
    isl.push({cx:cx,cy:cy,r:r,cells:cells,d:i/xs.length})});
  /* particles: oxygen and nutrients from the channels to the islets (o), insulin from the islets to the channels (n) */
  var o=[],n=[];
  for(var k=0;k<34;k++){var up=k%2===0,I=isl[Math.floor(R()*isl.length)],x=I.cx+(R()-.5)*90;
    o.push({x0:x,y0:up?68:326,x1:I.cx+(R()-.5)*I.r*1.2,y1:I.cy+(R()-.5)*I.r*.8,ph:R()})}
  for(k=0;k<26;k++){var J=isl[Math.floor(R()*isl.length)],dn=R()<.5;
    n.push({x0:J.cx+(R()-.5)*J.r,y0:J.cy+(R()-.5)*J.r*.6,x1:J.cx+(R()-.5)*120,y1:dn?326:68,ph:R()})}
  return {isl:isl,o:o,n:n};
})();
function memScene(o){
  var f=function(v){return (+v).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the three layers, the membranes, the glucose axis ---- */
  g+='<g id="scBase">';
  g+='<rect class="band" x="24" y="40" width="712" height="56"/><rect class="band" x="24" y="298" width="712" height="56"/>';
  g+='<rect class="lum" x="24" y="56" width="712" height="24"/><rect class="lum" x="24" y="314" width="712" height="24"/>';
  g+='<rect class="res" x="24" y="104" width="712" height="186"/>';
  g+='<path class="frm sD" d="M24 40H736M24 96H736M24 298H736M24 354H736"/>';
  g+='<path class="mb sD" d="M24 104H736M24 290H736"/>';
  g+='<path class="bl sD" d="M24 486H736"/>';
  g+='<path class="tgt sD" d="M24 452H736"/>';
  g+='<text class="t" x="24" y="30">CAPILLARY-LIKE CHANNEL</text>';
  g+='<text class="t" x="736" y="124" text-anchor="end">ISLET RESERVOIR</text>';
  g+='<text class="t" x="24" y="374">CAPILLARY-LIKE CHANNEL</text>';
  g+='<text class="t" x="24" y="'+(SCH-8)+'">BLOOD GLUCOSE</text>';
  g+='</g>';
  /* ---- flow in the channels: short strokes that travel with the scroll ---- */
  g+='<g id="scFlow">';
  for(i=0;i<16;i++){g+='<path class="fl" data-i="'+i+'" d="M0 68h26"/><path class="fl" data-i="'+i+'" d="M0 326h26"/>'}
  g+='</g>';
  /* ---- the islets ---- */
  g+='<g id="scIsl">';
  MP.isl.forEach(function(I,k){g+='<g class="isl" data-k="'+k+'" transform="translate('+f(I.cx)+' '+f(I.cy)+')"><circle class="ib" r="'+f(I.r)+'"/>';
    I.cells.forEach(function(c){g+='<circle class="ic" cx="'+f(c[0]-I.cx)+'" cy="'+f(c[1]-I.cy)+'" r="'+f(c[2])+'"/>'});g+='</g>'});
  g+='</g>';
  /* ---- particles ---- */
  g+='<g id="scPt">';
  MP.o.forEach(function(){g+='<circle class="po" r="3"/>'});
  MP.n.forEach(function(){g+='<circle class="pn" r="3.4"/>'});
  g+='</g>';
  /* ---- the glucose trace: rises after a meal, then the insulin brings it back to the target band ---- */
  var pts=[],N=60;for(i=0;i<=N;i++){var x=24+712*i/N,t=i/N,y=466-50*Math.exp(-Math.pow((t-.34)/.15,2))*(t<.34?1:1)+ (t>.34?8*Math.exp(-Math.pow((t-.7)/.12,2)):0);pts.push(f(x)+' '+f(y))}
  g+='<path class="gl" id="scGl" d="M'+pts.join('L')+'"/>';
  /* ---- step labels, in the clear band between the lower channel and the trace ---- */
  g+='<g id="lb1"><text class="a" x="24" y="408">HUMAN ISLETS · CENTRAL RESERVOIR</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="408">OXYGEN AND NUTRIENTS ACROSS THE MEMBRANES</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="408">GLUCOSE HIGH · INSULIN RELEASED</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase rect",svg),
    isl:$$(".isl",svg).map(function(el){var k=+el.getAttribute("data-k");return {el:el,I:MP.isl[k]}}),
    fl:$$(".fl",svg),po:$$(".po",svg),pn:$$(".pn",svg),gl:dl("#scGl")[0],
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mv(c,x,y){c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the islets settle in, one after another, from a little above */
    var sIn=seg(p,.02,.26);
    E.isl.forEach(function(F,i){var gi=Math.min(1,Math.max(0,sIn*1.9-F.I.d*.9));
      F.el.setAttribute("transform","translate("+F.I.cx.toFixed(1)+" "+(F.I.cy-26*(1-gi)).toFixed(1)+") scale("+(.7+.3*gi).toFixed(3)+")");op(F.el,b*gi)});
    /* step 2: flow runs in both channels, and oxygen and nutrients cross to the islets */
    var fIn=seg(p,.34,.46),run=p*9;
    E.fl.forEach(function(el,i){var k=(+el.getAttribute("data-i")/16+run*.18)%1,x=24+k*686;el.setAttribute("transform","translate("+x.toFixed(1)+" 0)");op(el,b*fIn*Math.min(1,Math.min(k,1-k)*8))});
    var oIn=seg(p,.38,.5)*(1-.6*seg(p,.72,.86));
    E.po.forEach(function(c,i){var P=MP.o[i],k=(P.ph+run*.22)%1,e=k*k*(3-2*k);mv(c,P.x0+(P.x1-P.x0)*e,P.y0+(P.y1-P.y0)*e);op(c,b*oIn*Math.min(1,Math.min(k,1-k)*6))});
    /* step 3: glucose rises, the islets answer with insulin, and the trace comes back down */
    var gIn=seg(p,.66,.94);if(E.gl)E.gl[0].style.strokeDashoffset=(E.gl[1]*(1-gIn)).toFixed(1);
    var nIn=seg(p,.72,.84);
    E.pn.forEach(function(c,i){var P=MP.n[i],k=(P.ph+run*.24)%1,e=k*k*(3-2*k);mv(c,P.x0+(P.x1-P.x0)*e,P.y0+(P.y1-P.y0)*e);op(c,b*nIn*Math.min(1,Math.min(k,1-k)*6))});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
