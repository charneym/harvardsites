/* The story scene (BL/BY/DB): one VSM measurement in a Cryogenic CFMS, in the terms cryogenic.co.uk uses (cryogen-free
   superconducting magnet with integrated variable temperature sample space, 1.6 K - 400 K, magnet and VTI on a single
   cryocooler; configurations up to +/-18 T; top-loading measurement modules, VSM first among them). ONE figure kept on
   screen: the cryostat in section (cryocooler, magnet, sample and pick-up coils) beside the measured loop.
   Step 1 (Cool): the cryocooler cools magnet and sample space; the readout counts down in kelvin.
   Step 2 (Field): the magnet ramps; the field readout sweeps.
   Step 3 (Vibrate): the sample oscillates between the pick-up coils; the loop is traced as the field is swept.
   Step 4 (Loop): coercivity and remanence are marked on the finished loop.
   The loop is illustrative (a generic ferromagnet), not a measured sample. */
var SPX0=320,SPX1=720,SPY0=90,SPY1=440,HM=9,MS=1;
function hx(h){return (SPX0+SPX1)/2+h/HM*(SPX1-SPX0)/2}
function my(m){return (SPY0+SPY1)/2-m/MS*(SPY1-SPY0)/2*.86}
var HC=2.2;
function br(h,up){return Math.tanh((h+(up?-HC:HC))/1.6)}
function loopPts(){var p=[],h;for(h=HM;h>=-HM;h-=.1)p.push([h,br(h,false)]);for(h=-HM;h<=HM;h+=.1)p.push([h,br(h,true)]);return p}
function loopPath(){return loopPts().map(function(q,i){return (i?'L':'M')+hx(q[0]).toFixed(1)+' '+my(q[1]).toFixed(1)}).join('')}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">CRYOGENIC · CFMS IN SECTION</text>';
    /* cryostat with the cryocooler on top, the magnet coils either side of the sample space, the sample rod and pick-up coils */
    g+='<g id="tsCh"><rect class="wtr" x="70" y="120" width="190" height="250"/><rect class="cab" x="140" y="74" width="50" height="46"/><text class="ax" x="200" y="92">cryocooler</text>'+
       '<rect class="cab" x="84" y="180" width="40" height="140"/><rect class="cab" x="206" y="180" width="40" height="140"/><text class="ax" x="104" y="342" text-anchor="middle">magnet</text>'+
       '<path class="pl" d="M150 120V330M180 120V330"/><path class="axl" id="tsRod" d="M165 96V246"/>'+
       '<rect class="lns" x="148" y="226" width="34" height="10"/><rect class="lns" x="148" y="262" width="34" height="10"/><text class="ax" x="226" y="352" text-anchor="middle">pick-up coils</text>'+
       '<text class="s3" x="165" y="394" text-anchor="middle">Cryogen Free Measurement System</text><path class="pl" d="M40 410H290"/></g>';
    g+='<circle class="smp" id="tsSmp" cx="165" cy="249" r="6"/>';
    for(i=0;i<5;i++)g+='<path class="rg" id="tsRg'+i+'" d="M'+(92+i*8)+' 186V314"/>';
    g+='<path class="lb" id="tsGr" d="M165 120V176"/><path class="sc" id="tsGr2" d="M150 250H124M180 250H206"/>';
    g+='<text class="ro" id="tsRo" x="40" y="454">300 K</text><text class="ro2" id="tsRh" x="40" y="476">COOLING</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">300 K</text><text class="ro2" id="tsRh" x="480" y="56">COOLING</text>';
  }
  /* the chart: moment against field, centred axes */
  g+='<path class="gl" d="M320 '+my(0).toFixed(1)+'H720M'+hx(0).toFixed(1)+' 90V440"/>';
  [[-9,"−9"],[-4.5,"−4.5"],[4.5,"4.5"],[9,"9"]].forEach(function(r){g+='<text class="ax" x="'+hx(r[0]).toFixed(1)+'" y="'+(mob?470:462)+'" text-anchor="middle">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'T':'FIELD · TESLA')+'</text>'+(mob?'':'<text class="ax" x="308" y="96" text-anchor="end">M</text>');
  g+='<path class="ms" id="tsMs" d="'+loopPath()+'"/><circle class="hd" id="tsHd" r="5" cx="'+hx(HM).toFixed(1)+'" cy="'+my(br(HM,false)).toFixed(1)+'"/>';
  g+='<circle class="mk" id="tsMk1" r="6" cx="'+hx(-HC).toFixed(1)+'" cy="'+my(0).toFixed(1)+'"/><circle class="mk" id="tsMk2" r="6" cx="'+hx(0).toFixed(1)+'" cy="'+my(br(0,false)).toFixed(1)+'"/>';
  g+='<text class="bl el" id="tsBl" x="'+(hx(-HC)-12).toFixed(1)+'" y="'+(my(0)+28).toFixed(1)+'" text-anchor="end">coercivity</text>';
  g+='<text class="bl el" id="tsBl2" x="'+hx(.9).toFixed(1)+'" y="'+my(.42).toFixed(1)+'" text-anchor="middle">remanence</text>';
  var C=mob?["COOLED BY A CRYOCOOLER","THE FIELD SWEEPS","THE SAMPLE VIBRATES","THE LOOP, MEASURED"]:["A CRYOCOOLER COOLS MAGNET AND SAMPLE","THE SUPERCONDUCTING MAGNET RAMPS","THE SAMPLE VIBRATES IN THE PICK-UP COILS","MOMENT AGAINST FIELD · THE HYSTERESIS LOOP"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),hd:q("#tsHd"),bl:q("#tsBl"),bl2:q("#tsBl2"),mk1:q("#tsMk1"),mk2:q("#tsMk2"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),sm:q("#tsSmp"),
    rg:[0,1,2,3,4].map(function(k){return q("#tsRg"+k)}),cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  var P=loopPts(),CU=[0];for(var i=1;i<P.length;i++)CU.push(CU[i-1]+Math.hypot(hx(P[i][0])-hx(P[i-1][0]),my(P[i][1])-my(P[i-1][1])));
  var L=E.ms.getTotalLength(),CT=CU[CU.length-1],lastT="",lastH="";
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(E.gr){op(E.gr,b*seg(p,.03,.1));E.rg.forEach(function(r,k){op(r,b*seg(p,.28+k*.03,.33+k*.03)*.8)});op(E.gr2,b*seg(p,.52,.58));
      op(E.sm,b);E.sm.setAttribute("cy",(249+(p>.5&&p<.77?Math.sin(p*900)*7:0)).toFixed(1))}
    var c=seg(p,.54,.74),fi=c*(P.length-1),k=Math.min(P.length-1,Math.floor(fi)),f=CU[k]/CT;
    E.ms.style.strokeDashoffset=(L*(1-f)).toFixed(1);op(E.ms,b*seg(p,.54,.57));
    E.hd.setAttribute("cx",hx(P[k][0]).toFixed(1));E.hd.setAttribute("cy",my(P[k][1]).toFixed(1));op(E.hd,b*seg(p,.54,.57)*(1-seg(p,.74,.78)));
    op(E.mk1,b*seg(p,.8,.84));op(E.bl,b*seg(p,.81,.86));op(E.mk2,b*seg(p,.84,.88));op(E.bl2,b*seg(p,.85,.9));
    var ts,hs;
    if(p<.27){ts=Math.round(300-298.4*seg(p,.04,.22))+" K";if(p>=.22)ts="1.6 K"}
    else if(p<.52){ts=(9*seg(p,.3,.46)).toFixed(1)+" T"}
    else if(p<.77){ts=P[k][0].toFixed(1)+" T"}
    else ts="LOOP";
    if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    hs=p<.27?"COOLING · NO HELIUM":p<.52?"FIELD RAMPING":p<.77?"VSM · MEASURING":"LOOP TRACED";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k2){op(cp,b*(k2===0?1:seg(p,w[k2][0],w[k2][0]+.04))*(k2===3?1:(1-seg(p,w[k2][1]-.04,w[k2][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
