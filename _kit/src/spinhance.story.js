/* the story scene: an engraved lab plate in two halves. Left, the source of the signal: first an alveolus in section (airspace,
   the alveolar membrane, a capillary with red blood cells) with inhaled xenon atoms, then the phantom in section (pressurised
   xenon gas in a 3D-printed polymer mesh, plus polymer compartments), then the phantom inside two scanner bores. Right, the
   xenon spectrum it produces: the three signatures the NIBIB abstract names (gas in airspaces, xenon dissolved in the membrane,
   xenon bound in red blood cells), drawn qualitatively with no ppm values. Step 3 overlays the phantom's trace on the lung's;
   step 4 shows two sites' traces offset (the bias the multi-site tests quantify). */
var SH_X0=440,SH_X1=770,SH_BASE=330;
function shSpec(gas,mem,rbc,shift,amp){/* sum of Lorentzians; RBC and membrane at left (higher shift), gas at right */
  var d='',P=[[500,rbc,9],[548,mem,11],[712,gas,8]];amp=amp||1;
  for(var x=SH_X0;x<=SH_X1;x+=2){var y=0;P.forEach(function(q){var c=q[0]+shift,w=q[2];y+=q[1]/(1+Math.pow((x-c)/w,2))});d+=(x===SH_X0?'M':'L')+x+' '+(SH_BASE-y*170*amp).toFixed(1)}return d}
function shMesh(){/* a gyroid-like section: rows of offset wavy struts inside the vessel */
  var d='';for(var r=0;r<9;r++){var y=182+r*21,ph=(r%2)*Math.PI;d+='M120 '+y;for(var x=120;x<=300;x+=4)d+='L'+x+' '+(y+6*Math.sin((x-120)/14+ph)).toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),fs=mob?20:12.5,cs=mob?21:13.5;
  var caps=["INHALED XENON · GAS IN THE AIRSPACES","DISSOLVED · ALVEOLAR MEMBRANE · RED BLOOD CELLS","THE PHANTOM · THE SAME THREE SIGNATURES","ONE PHANTOM · DIFFERENT SCANNERS · BIAS MEASURED"];
  var s='<svg viewBox="0 0 800 500" role="img" aria-label="Lab plate: inhaled xenon in an alveolus and in a polymer-mesh phantom, with the three-peak xenon spectrum each produces">';
  var g='';for(var gx=40;gx<=760;gx+=40)g+='<path class="gd" d="M'+gx+' 20V440"/>';for(var gy=20;gy<=440;gy+=40)g+='<path class="gd" d="M40 '+gy+'H760"/>';s+=g;
  /* --- alveolus (steps 1-2) --- */
  s+='<g id="shAlv"><circle class="aw" cx="210" cy="230" r="128"/><circle class="aw2" cx="210" cy="230" r="114"/>';
  s+='<path class="cap2" d="M64 392C120 360 300 360 356 392"/><path class="cap2" d="M64 424C120 392 300 392 356 424"/>';
  for(var i=0;i<6;i++){var x=96+i*46;s+='<ellipse class="rbc" cx="'+x+'" cy="'+(400-6*Math.sin(i))+'" rx="15" ry="7"/>'}
  s+='<text x="210" y="84" text-anchor="middle" style="font-size:'+fs+'px">ALVEOLUS</text><text x="372" y="408" style="font-size:'+fs+'px">CAPILLARY</text>';
  s+='<g id="shAtoms">';var A=[[170,180],[240,200],[200,260],[150,240],[262,268],[214,150],[128,196],[284,214],[180,306],[238,312]];
  A.forEach(function(a,k){s+='<circle class="xe" id="shA'+k+'" cx="'+a[0]+'" cy="'+a[1]+'" r="4.5"/>'});
  s+='</g><g id="shDis">';[[96,300],[322,300],[140,354],[278,354]].forEach(function(a){s+='<circle class="xe2" cx="'+a[0]+'" cy="'+a[1]+'" r="4"/>'});
  [96,188,280].forEach(function(x){s+='<circle class="xe" cx="'+x+'" cy="'+(400-6*Math.sin((x-96)/46))+'" r="4"/>'});s+='</g></g>';
  /* --- phantom (steps 3-4) --- */
  s+='<g id="shPh"><path class="dv" d="M96 150H324V170H96ZM96 386H324V406H96Z"/><path class="dv2" d="M110 170V386M310 170V386"/>';
  s+='<path class="mesh" d="'+shMesh()+'"/><path class="dv" d="M196 128H224V150H196Z"/>';
  s+='<rect class="poly" x="120" y="350" width="80" height="28"/><rect class="poly2" x="220" y="350" width="80" height="28"/>';
  s+='<text x="210" y="116" text-anchor="middle" style="font-size:'+fs+'px">PRESSURISED XENON</text>'+(mob?'<text x="334" y="278" style="font-size:'+fs+'px">MESH</text>':'<text x="334" y="270" style="font-size:'+fs+'px">3D-PRINTED</text><text x="334" y="'+(270+fs*1.4)+'" style="font-size:'+fs+'px">MESH</text>')+'';
  s+='<text class="a" x="160" y="'+(406+fs*2)+'" text-anchor="middle" style="font-size:'+fs+'px">TPU</text><text class="a" x="260" y="'+(406+fs*2)+'" text-anchor="middle" style="font-size:'+fs+'px">PDMS</text></g>';
  s+='<g id="shBore"><ellipse class="bore" cx="210" cy="278" rx="168" ry="196"/><text class="nm2" x="56" y="70" style="font-size:'+fs+'px">SITE A</text><text class="nm2" x="364" y="70" text-anchor="end" style="font-size:'+fs+'px">SITE B</text></g>';
  /* --- spectrum --- */
  s+='<path class="ax" d="M'+SH_X0+' '+SH_BASE+'H'+SH_X1+'"/><text x="'+SH_X1+'" y="'+(SH_BASE+fs*(mob?3.4:2))+'" text-anchor="end" style="font-size:'+fs+'px">CHEMICAL SHIFT</text>';
  s+='<text x="'+SH_X0+'" y="84" style="font-size:'+fs+'px">XENON SPECTRUM</text>';
  s+='<path id="shS0" class="sp" d=""/><path id="shS1" class="sp2" d=""/>';
  s+='<text id="shLg" class="a" x="712" y="120" text-anchor="middle" style="font-size:'+fs+'px">GAS</text>';
  s+='<text id="shLr" class="a" x="492" y="186" text-anchor="middle" style="font-size:'+fs+'px">RBC</text>';
  s+='<text id="shLm" class="a" x="'+(mob?586:572)+'" y="'+(mob?232:222)+'" text-anchor="middle" style="font-size:'+fs+'px">MEMBRANE</text>';
  s+='<g id="shBias"><path class="bias" d="M500 350H524M500 344V356M524 344V356"/><text class="nm2" x="534" y="'+(354+fs*.35)+'" style="font-size:'+fs+'px">BIAS</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="shC'+i+'" x="400" y="'+(mob?484:480)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={alv:$("#shAlv",svg),dis:$("#shDis",svg),ph:$("#shPh",svg),bore:$("#shBore",svg),s0:$("#shS0",svg),s1:$("#shS1",svg),
    lg:$("#shLg",svg),lr:$("#shLr",svg),lm:$("#shLm",svg),bias:$("#shBias",svg),
    A:[0,1,2,3,4,5,6,7,8,9].map(function(i){return $("#shA"+i,svg)}),cap:[0,1,2,3].map(function(i){return $("#shC"+i,svg)})};
  var A0=E.A.map(function(a){return [+a.getAttribute("cx"),+a.getAttribute("cy")]});
  return function(p,b){
    if(!E.s0.isConnected)return;
    var s1=seg(p,.02,.14),s2=seg(p,.24,.38),s3=seg(p,.48,.62),s4=seg(p,.74,.88);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.alv.style.opacity=(b*(1-s3)).toFixed(3);E.ph.style.opacity=(b*s3).toFixed(3);E.bore.style.opacity=(b*s4).toFixed(3);
    E.dis.style.opacity=(b*s2).toFixed(3);
    E.A.forEach(function(el,k){var a=A0[k],ph=p*40+k*1.7;el.setAttribute("cx",(a[0]+7*Math.sin(ph)).toFixed(1));el.setAttribute("cy",(a[1]+7*Math.cos(ph*1.3)).toFixed(1));el.style.opacity=(seg(p,.0+k*.01,.06+k*.01)).toFixed(3)});
    /* the lung's spectrum: gas first, then the two dissolved peaks */
    var gas=.95*s1,mem=.34*s2,rbc=.24*s2;
    E.s0.setAttribute("d",shSpec(gas,mem,rbc,0));
    /* step 3: the phantom's trace lands on it; step 4: a second site's trace, shifted (bias) */
    var sh=s4*24;E.s1.setAttribute("d",shSpec(gas,mem,rbc,sh,.98));E.s1.style.opacity=(b*Math.max(s3,0)).toFixed(3);
    E.lg.style.opacity=(b*s1).toFixed(3);E.lr.style.opacity=(b*s2).toFixed(3);E.lm.style.opacity=(b*s2).toFixed(3);
    E.bias.style.opacity=(b*s4).toFixed(3);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
