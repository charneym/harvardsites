/* The story scene (BL/BY/DB): how idrevloride works (Parion release 8 Sep 2023, "About Idrevloride"; NIH 4R44HL174235
   abstract), as ONE continuous scene: a cross-section of the airway surface. A row of epithelial cells along the bottom,
   their cilia standing in a thin watery layer, a layer of mucus above, and ENaC channels in each cell's top membrane.
   Step 1 (plugged): sodium is drawn down through ENaC, water follows it out, the mucus shrinks into a dense, sticky band
   pressed onto flattened cilia. Step 2 (block): idrevloride (drawn as the Parion diamond) caps every channel, and water
   from the hypertonic saline returns to the surface. Step 3 (clear): the mucus swells, lightens and moves off to the right,
   cleared by cough. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var BASE=318;              /* the cells' top membrane */
var NC=8,CW=84,X0=44;      /* cells */
function mucP(top,wav,ph){  /* the mucus layer: from y=top down to the cilia tips, with a soft wavy top */
  var d="M20 "+(BASE-58),x;
  for(x=20;x<=740;x+=20){var y=top+Math.sin((x/740)*Math.PI*3+ph)*wav+Math.sin((x/740)*Math.PI*7+ph*1.7)*wav*.35;d+="L"+x+" "+y.toFixed(1)}
  return d+"L740 "+(BASE-58)+"Z"}
function airScene(o){
  var g='',i,k;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="mucG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8b04f" stop-opacity=".9"/><stop offset="1" stop-color="#c9823d" stop-opacity=".75"/></linearGradient>'+
     '<linearGradient id="mucH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9cc7ee" stop-opacity=".42"/><stop offset="1" stop-color="#6fa3d6" stop-opacity=".3"/></linearGradient>'+
     '<clipPath id="aclip"><rect x="20" y="40" width="720" height="'+(BASE-40)+'"/></clipPath></defs>';
  /* ---- base: the epithelial cells, their nuclei, and captions ---- */
  g+='<g id="scBase">';
  for(i=0;i<NC;i++){var x=X0+i*CW;
    g+='<path class="cl sD" d="M'+(x+3)+' '+(BASE+150)+'V'+(BASE+8)+'Q'+(x+3)+' '+BASE+' '+(x+11)+' '+BASE+'H'+(x+CW-11)+'Q'+(x+CW-3)+' '+BASE+' '+(x+CW-3)+' '+(BASE+8)+'V'+(BASE+150)+'"/>';
    g+='<ellipse class="nu sD" cx="'+(x+CW/2)+'" cy="'+(BASE+86)+'" rx="18" ry="26"/>';}
  g+='<text class="t" x="20" y="'+(BASE+178)+'">AIRWAY EPITHELIUM · CROSS-SECTION</text>';
  g+='<text class="t" x="20" y="34">AIRWAY LUMEN</text>';
  g+='</g>';
  /* ---- cilia: 6 per cell; their tilt is set per frame (flattened under concentrated mucus, upright when hydrated) ---- */
  g+='<g id="scCil">';
  for(i=0;i<NC;i++)for(k=0;k<6;k++){var cx=X0+i*CW+16+k*10.4;g+='<path class="ci" data-x="'+cx.toFixed(1)+'" d="M'+cx.toFixed(1)+' '+BASE+'V'+(BASE-52)+'"/>'}
  g+='</g>';
  /* ---- the watery layer (periciliary) and the mucus ---- */
  g+='<path id="scPcl" class="pcl" d="M20 '+(BASE-54)+'H740V'+BASE+'H20Z"/>';
  g+='<g id="scMuc" clip-path="url(#aclip)"><path id="mucA" class="mu" d=""/><path id="mucB" class="mh" d=""/></g>';
  /* ---- ENaC channels in each cell's top membrane, with sodium ions drawn down through them ---- */
  g+='<g id="scCh">';
  for(i=0;i<NC;i++){var chx=X0+i*CW+CW/2;g+='<g class="ch"><rect x="'+(chx-9)+'" y="'+(BASE-6)+'" width="7" height="14"/><rect x="'+(chx+2)+'" y="'+(BASE-6)+'" width="7" height="14"/></g>'}
  g+='</g><g id="scNa">';
  for(i=0;i<NC;i++){var nx=X0+i*CW+CW/2;g+='<g class="na" data-x="'+nx+'" data-i="'+i+'"><circle r="5.5"/><text y="3.4">+</text></g>'}
  g+='</g>';
  /* ---- water: droplets that leave the surface (step 1) and return to it (step 2) ---- */
  g+='<g id="scW">';
  for(i=0;i<14;i++){g+='<path class="wd" data-i="'+i+'" d="M0 -7C3 -2 5 1 5 3.2A5 5 0 01-5 3.2C-5 1 -3 -2 0 -7Z"/>'}
  g+='</g>';
  /* ---- idrevloride: the Parion diamond that caps each channel ---- */
  g+='<g id="scDrug">';
  for(i=0;i<NC;i++){g+='<path class="dg" data-i="'+i+'" d="M0 -9L9 0 0 9 -9 0Z"/>'}
  g+='</g>';
  /* ---- clearance arrow over the mucus ---- */
  g+='<g id="scFlow"><path class="fl" d="M80 92H690M678 84L690 92 678 100"/></g>';
  /* ---- step labels, in the clear band at the top ---- */
  g+='<g id="lb1"><text class="a" x="20" y="64">SODIUM AND WATER ABSORBED · MUCUS CONCENTRATED</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="64">IDREVLORIDE BLOCKS ENaC · WATER RETURNS</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="64">MUCUS REHYDRATED · CLEARED BY COUGH</text></g>';
  return g+'</svg>';
}
function scene(){return airScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),ci:$$(".ci",svg),ch:$$(".ch",svg),na:$$(".na",svg),wd:$$(".wd",svg),dg:$$(".dg",svg),
    pcl:$("#scPcl",svg),mA:$("#mucA",svg),mB:$("#mucB",svg),fl:$("#scFlow",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.ch.forEach(function(el){op(el,b)})}
    var dry=seg(p,.04,.3),block=seg(p,.36,.56),wet=seg(p,.5,.72),go=seg(p,.72,.95);
    var hyd=Math.max(0,Math.min(1,1-dry+wet));          /* 1 = healthy/hydrated, 0 = concentrated */
    /* the watery layer thins as the surface dries, then returns */
    var pclT=BASE-20-34*hyd;E.pcl.setAttribute("d","M20 "+pclT.toFixed(1)+"H740V"+BASE+"H20Z");op(E.pcl,b*(.35+.65*hyd));
    /* cilia: flattened (tilted, shortened) under the dense mucus; upright when hydrated */
    var tilt=(1-hyd)*.95,len=52-16*(1-hyd);
    E.ci.forEach(function(el,i){var x=+el.getAttribute("data-x"),sw=Math.sin(i*1.7+p*40)*3*hyd,tx=x+Math.sin(tilt)*len+sw,ty=BASE-Math.cos(tilt)*len;
      el.setAttribute("d","M"+x+" "+BASE+"Q"+(x+(tx-x)*.25).toFixed(1)+" "+(BASE-len*.6).toFixed(1)+" "+tx.toFixed(1)+" "+ty.toFixed(1));op(el,b)});
    /* mucus: a thick hydrated layer at rest, a thin dense band when concentrated, swollen and moving off when cleared */
    var top=BASE-58-(120*hyd+30)+go*28, ph=p*6+go*5, shift=0;
    E.mA.setAttribute("d",mucP(BASE-58-36,4,ph));E.mA.setAttribute("transform","translate("+(shift).toFixed(1)+" 0) translate(0 "+((pclT-(BASE-54))).toFixed(1)+")");
    op(E.mA,b*(1-hyd)*(1-go));
    E.mB.setAttribute("d",mucP(top,8,ph));E.mB.setAttribute("transform","translate("+shift.toFixed(1)+" 0)");
    op(E.mB,b*hyd*.95);
    /* sodium drawn down through each channel while the surface dries (blocked once the drug arrives) */
    E.na.forEach(function(el,i){var x=+el.getAttribute("data-x"),cyc=((p*7+i*.37)%1),act=dry*(1-block);
      var y=BASE-40+cyc*80;el.setAttribute("transform","translate("+x+" "+y.toFixed(1)+")");op(el,b*act*Math.sin(cyc*Math.PI))});
    /* water: rising out of the surface layer into the cells during step 1, falling back onto the surface during step 2 */
    E.wd.forEach(function(el,i){var x=40+i*50+(i%3)*8,cyc=((p*5+i*.29)%1);
      var y1=BASE-30+cyc*90,y2=100+cyc*(BASE-150);var down=dry*(1-block),up=wet*(1-go);
      var y=down>up?y1:y2,a=Math.max(down,up)*Math.sin(cyc*Math.PI);
      el.setAttribute("transform","translate("+x+" "+y.toFixed(1)+")");op(el,b*a*.9)});
    /* idrevloride caps each channel */
    E.dg.forEach(function(el,i){var gi=Math.min(1,Math.max(0,block*1.5-(i%8)*.06)),x=X0+i*CW+CW/2,y=BASE-16-60*(1-gi);
      el.setAttribute("transform","translate("+x+" "+y.toFixed(1)+")");op(el,b*gi)});
    E.fl.setAttribute("transform","translate("+(go*30).toFixed(1)+" "+(top-120).toFixed(1)+")");op(E.fl,b*go);
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.8,.88));
  };
}
