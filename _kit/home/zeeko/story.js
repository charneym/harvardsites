/* The story scene (BL/BY/DB): corrective polishing with a Zeeko IRP (zeeko.co.uk > Products, Metrology Toolkit,
   Stitching Toolkit, Zeeko TPG, Precessions), ONE fine-line schematic kept on screen:
   Step 1 (Measure): the instrument measures the surface; the error map appears (exaggerated).
   Step 2 (Plan): TPG / Precessions turn it into a spiral tool path (top view inset).
   Step 3 (Polish): the tool works across the part where it is high.
   Step 4 (Converge): the error flattens toward the target form (lambda/20 P-V, 2-3 A). */
var SCW=760,SCH=520;
function zkProfile(amp){var d="",i,x,y,n=80;for(i=0;i<=n;i++){x=120+i*(460/n);var t=(x-350)/230;y=360+70*t*t-70+amp*(Math.sin(i*.42)*9+Math.sin(i*.17+1)*7);d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d}
function zkSpiral(cx,cy,r){var d="",a,k=0;for(a=0;a<=6*Math.PI*2;a+=.18){var rr=r*a/(12*Math.PI);d+=(k++?"L":"M")+(cx+rr*Math.cos(a)).toFixed(1)+" "+(cy+rr*Math.sin(a)).toFixed(1)}return d}
function zkScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">CORRECTIVE POLISHING, SCHEMATIC</text>';
  /* the part: a lens blank, its target form (dashed) and its measured surface */
  g+='<g id="zkP"><path class="edge sPt" d="M120 360Q350 220 580 360V430H120Z"/><path class="tgt" d="'+zkProfile(0)+'"/></g>';
  /* step 1: the measuring instrument, its probe beams, the error map */
  g+='<g id="zkM"><path class="edge sIn" d="M290 70H410V120H290Z"/><path class="beam sBm" d="M310 122V280M350 122V276M390 122V280"/><path class="err" id="zkErr" d="'+zkProfile(1)+'"/></g>';
  /* step 2: the tool path, top view */
  g+='<g id="zkT"><path class="edge sTc" d="M666 132m-62 0a62 62 0 1 0 124 0a62 62 0 1 0 -124 0"/><path class="path sSp" d="'+zkSpiral(666,132,58)+'"/></g>';
  /* step 3: the polishing tool on its spindle */
  g+='<g id="zkTool"><path class="edge" d="M-9 -120H9V-40H-9Z"/><path class="head" d="M-26 -40H26Q26 -6 0 -6Q-26 -6 -26 -40Z"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="zkL1"><text class="t s2" x="290" y="'+(mob?56:58)+'">'+(mob?'METROLOGY':'METROLOGY INSTRUMENT')+'</text><text class="t" x="120" y="'+(mob?462:458)+'">'+(mob?'ERROR MAP':'MEASURED ERROR (EXAGGERATED)')+'</text></g>';
  g+='<g id="zkL2"><text class="t s2" x="604" y="'+(mob?224:222)+'">'+(mob?'TOOL PATH':'SPIRAL TOOL PATH')+'</text><text class="t" x="604" y="'+(mob?252:242)+'">'+(mob?'TPG':'TPG · PRECESSIONS')+'</text></g>';
  g+='<g id="zkL3"><text class="t s2" x="120" y="'+(mob?462:458)+'">'+(mob?'POLISH':'IRP POLISHING TOOL')+'</text></g>';
  g+='<g id="zkL4"><text class="t s2" x="120" y="'+(mob?462:458)+'">'+(mob?'λ/20 P-V':'FORM λ/20 P-V · FINISH 2–3 Å')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · MEASURE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · PLAN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · POLISH</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · CONVERGE</text></g>';
  return g+'</svg>';
}
function scene(){return zkScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={P:$("#zkP",svg),pt:dl(".sPt"),tg:$("#zkP .tgt",svg),
    M:$("#zkM",svg),inn:dl(".sIn"),bm:dl(".sBm"),err:$("#zkErr",svg),
    T:$("#zkT",svg),tc:dl(".sTc"),sp:dl(".sSp"),tool:$("#zkTool",svg),
    L1:$("#zkL1",svg),L2:$("#zkL2",svg),L3:$("#zkL3",svg),L4:$("#zkL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  var lastA=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* the part is there from the start */
    op(E.P,b);draw(E.pt,b*seg(p,0,.08));op(E.tg,b*seg(p,.06,.12));
    /* step 1: instrument, beams, the error appears */
    op(E.M,b);draw(E.inn,b*seg(p,.04,.1));draw(E.bm,b*seg(p,.08,.16));op(E.err,b*seg(p,.12,.2));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the tool path inset */
    op(E.T,b);draw(E.tc,b*seg(p,.26,.32));draw(E.sp,b*seg(p,.3,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 + 4: the tool travels and the error flattens */
    var tv=seg(p,.52,.9),x=150+400*tv,t=(x-350)/230,y=360+70*t*t-70;
    if(E.tool){E.tool.setAttribute("transform","translate("+x.toFixed(1)+" "+(y-8).toFixed(1)+")");op(E.tool,b*seg(p,.5,.56)*(1-seg(p,.9,.96)))}
    var amp=1-.92*seg(p,.55,.92);if(E.err&&Math.abs(amp-lastA)>.004){E.err.setAttribute("d",zkProfile(amp));lastA=amp}
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
