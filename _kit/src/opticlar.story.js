/* The story scene (BL/BY/DB, DR): ONE fine-line schematic of an Opticlar ophthalmoscope (head, neck, handle; outline only, no
   branding), kept on screen for all four steps (opticlar.co.uk home page "The advantages are clear", the TrueTone LED panel, and the
   Ophthalmology page):
   1 Light: the LED in the head lights up; its beam leaves the head, passes the cornea and lens and lands on the retina.
   2 Optics: the lens wheel in the head turns; beside it, the wheel enlarged: lenses, filters and apertures (no count is claimed).
   3 Power: the cells in the handle; runtimes per handle as bars (C 60 h, AA 60 h, ADAPT 20 h, E-Lithium 10 h).
   4 Life: LED life beyond 20,000 hours against a halogen bulb at 1/500 of it; ten-year LED warranty.
   Desktop captions top-left, above the beam; on phones one caption under the drawing. Every label sits >= 8px from strokes (DR3). */
function oc(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function orr(x,y,w,h,r){return "M"+(x+r)+" "+y+"H"+(x+w-r)+"Q"+(x+w)+" "+y+" "+(x+w)+" "+(y+r)+"V"+(y+h-r)+"Q"+(x+w)+" "+(y+h)+" "+(x+w-r)+" "+(y+h)+"H"+(x+r)+"Q"+x+" "+(y+h)+" "+x+" "+(y+h-r)+"V"+(y+r)+"Q"+x+" "+y+" "+(x+r)+" "+y+"Z"}
var RUN=[["C CELLS",60],["AA CELLS",60],["ADAPT RECHARGEABLE",20],["E-LITHIUM",10]];
function opScene(mob){
  var g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 60 580 470':'20 10 620 490')+'" aria-hidden="true">';
  /* 1 (behind): the beam, head to pupil, then fanning onto the retina */
  g+='<g id="opBeam"><path class="bm" d="M180 141L436 147L436 153L180 159Z"/><path class="bm" d="M446 147L566 116L566 184L446 153Z"/></g>';
  g+='<g id="opSpot"><ellipse class="fl" cx="564" cy="150" rx="7" ry="30"/></g>';
  /* the instrument: head, neck, handle, clip; sight hole, lens wheel, LED window */
  g+='<g id="opBody"><path class="bf" d="'+orr(70,60,110,150,22)+'"/><path class="bf" d="M108 210H142V228H108Z"/><path class="bf" d="'+orr(100,228,50,250,10)+'"/></g>';
  g+='<g id="opBase">'+
     '<path class="fm sD" d="'+orr(70,60,110,150,22)+'"/>'+
     '<path class="fm sD" d="M108 210V228M142 210V228"/>'+
     '<path class="fm sD" d="'+orr(100,228,50,250,10)+'"/>'+
     '<path class="fm sD" d="M150 246H160V326Q160 338 150 338"/>'+
     '<path class="cu sD" d="'+oc(125,80,6)+'"/>'+
     '<path class="cu sD" d="'+oc(125,128,28)+'"/>'+
     '<path class="cu sD" d="M164 136V164"/>'+
     '<path class="cu sD" d="M100 456H150"/>'+
     '</g>';
  /* the eye, side section: globe, cornea, lens, retina */
  g+='<g id="opEye">'+
     '<path class="ey sD" d="M440 107A72 72 0 1 1 440 193"/>'+
     '<path class="ey sD" d="M440 107Q414 150 440 193"/>'+
     '<path class="cu sD" d="M452 126Q440 150 452 174Q464 150 452 126"/>'+
     '<path class="rt sD" d="M545 94A72 72 0 0 1 545 206"/>'+
     '</g>';
  /* LED and its glow */
  g+='<g id="opLed"><circle class="gw" cx="168" cy="150" r="16"/><circle class="ld" cx="168" cy="150" r="4"/></g>';
  /* 2: the lens wheel turns in the head; beside it, enlarged */
  var wl='',big='';for(i=0;i<8;i++){var a=i*Math.PI/4;wl+='<circle class="ln" cx="'+(125+19*Math.cos(a)).toFixed(1)+'" cy="'+(128+19*Math.sin(a)).toFixed(1)+'" r="4"/>'}
  g+='<g id="opWheel"><g id="opWr">'+wl+'</g></g>';
  for(i=0;i<12;i++){var b2=i*Math.PI/6,x=420+64*Math.cos(b2),y=372+64*Math.sin(b2);
    big+=(i%4===1?'<circle class="lf" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="11"/>':'')+'<path class="ln2 sW" d="'+oc(+x.toFixed(1),+y.toFixed(1),11)+'"/>'}
  g+='<g id="opBig"><path class="fm sW" d="'+oc(420,372,90)+'"/><path class="cu sW" d="'+oc(420,372,10)+'"/><g id="opBr">'+big+'</g>'+
     '<path class="cu sW" d="M420 270V282"/></g>';
  /* 3: the cells in the handle, and runtime bars */
  g+='<g id="opCells"><path class="cell" d="'+orr(110,250,30,92,4)+'"/><path class="cell" d="'+orr(110,352,30,92,4)+'"/></g>';
  var rb='';RUN.forEach(function(r,k){var y=300+k*44;rb+='<text class="t" x="250" y="'+(y-10)+'">'+r[0]+' · '+r[1]+' H</text><path class="track" d="M250 '+(y+4)+'H580"/><path class="run sR" d="M250 '+(y+4)+'H'+(250+r[1]*5.5)+'"/>'});
  g+='<g id="opRun">'+rb+'</g>';
  /* 4: LED life against halogen */
  g+='<g id="opLife"><text class="t" x="250" y="300">TRUETONE LED · 20,000+ H</text><path class="track" d="M250 314H580"/><path class="life sL" d="M250 314H580"/>'+
     '<text class="t" x="250" y="356">HALOGEN · 1/500 OF THAT</text><path class="track" d="M250 370H580"/><path class="halo" d="M250 364V376"/>'+
     '<text class="dsp" x="250" y="438">10</text><text class="t" x="318" y="420">YEAR WARRANTY</text><text class="t" x="318" y="440">ON THE LED</text></g>';
  if(mob){
    var CM=["1 · LIGHT, NOT HEAT","2 · LENSES, FILTERS, APERTURES","3 · UP TO 60 HOURS","4 · 500× A HALOGEN BULB"];
    CM.forEach(function(c,k){g+='<text class="a gl" id="opG'+k+'" x="330" y="512" text-anchor="middle">'+c+'</text>'});
  }else{
    var CAP=[["TRUETONE LED","LIGHT TO THE RETINA, NOT HEAT"],["THE LENS WHEEL","LENSES, FILTERS AND APERTURES"],["RUNNING TIME","PER HANDLE, ON ONE SET OF CELLS"],["LED LIFE","BEYOND 20,000 HOURS"]];
    CAP.forEach(function(c,k){g+='<g class="gl" id="opG'+k+'"><text class="a" x="210" y="40">'+c[0]+'</text><text class="t" x="210" y="62">'+c[1]+'</text></g>'});
  }
  return g+'</svg>';
}
function scene(){return opScene(MOBILE()?1:0)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#opBase .sD"),eye:dl("#opEye .sD"),big:dl("#opBig .sW"),run:dl("#opRun .sR"),life:dl("#opLife .sL"),
    body:$("#opBody",svg),eyeG:$("#opEye",svg),led:$("#opLed",svg),beam:$("#opBeam",svg),spot:$("#opSpot",svg),wheel:$("#opWheel",svg),wr:$("#opWr",svg),
    bigG:$("#opBig",svg),br:$("#opBr",svg),cells:$("#opCells",svg),runG:$("#opRun",svg),lifeG:$("#opLife",svg),gl:[0,1,2,3].map(function(j){return $("#opG"+j,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.eye,b)}
    var g=seg(b,.35,1);
    op(E.body,g);op(E.eyeG,b);
    /* 1: LED on, beam out, spot on the retina (the light stays on afterwards) */
    op(E.led,g*seg(p,.02,.08));op(E.beam,g*seg(p,.05,.16));op(E.spot,g*seg(p,.12,.2));
    /* 2: the wheel turns; the enlarged wheel draws and turns with it */
    op(E.wheel,g*seg(p,.24,.28));var rot=(seg(p,.26,.5)*90).toFixed(2);
    if(E.wr)E.wr.setAttribute("transform","rotate("+rot+" 125 128)");if(E.br)E.br.setAttribute("transform","rotate("+rot+" 420 372)");
    op(E.bigG,g*seg(p,.26,.3)*(1-seg(p,.47,.5)));draw(E.big,seg(p,.27,.4));
    /* 3: cells and runtime bars */
    op(E.cells,g*seg(p,.52,.56)*(1-seg(p,.73,.76)));op(E.runG,g*seg(p,.52,.55)*(1-seg(p,.72,.75)));draw(E.run,seg(p,.55,.68));
    /* 4: lifetime */
    op(E.lifeG,g*seg(p,.77,.8));draw(E.life,seg(p,.79,.92));
    var W=[[0,0,.25],[1,.25,.5],[2,.5,.75],[3,.75,1.01]];
    W.forEach(function(w){var i=w[0],a=w[1],z=w[2],v=(i?seg(p,a,a+.05):1)*(i<3?1-seg(p,z-.03,z+.02):1);op(E.gl[i],g*v)});
  };
}