/* The story scene (BL/BY/DB): one LISST-200X laser-diffraction measurement, in the terms sequoiasci.com uses (LISST =
   Laser In-situ Scattering and Transmissometry; LISST-200X: VSF 0.039°–13.8° at 36 angles, particle size 1–500 µm in 36
   size ranges, volume concentration at 0.1 µL/L, beam attenuation). ONE figure kept on screen: the open sample path with
   its laser, particles and ring detector beside the measured curve that becomes the size distribution.
   Step 1 (Laser): the beam crosses the open path through the water.
   Step 2 (Scatter): particles scatter light forward at small angles.
   Step 3 (Rings): the ring detector records light at 36 angles; the scattering curve is traced.
   Step 4 (Sizes): the curve is inverted into a size distribution in 36 classes.
   The curve and the distribution are illustrative. */
var SPX0=320,SPX1=720,SPY0=440,NB=36;
function bx(i){return SPX0+i*(SPX1-SPX0)/NB}
function scatY(i){return 120+i*6.2+40*Math.exp(-Math.pow((i-14)/5,2))}
function psd(i){return 230*Math.exp(-.5*Math.pow((i-19)/5.2,2))+40*Math.exp(-.5*Math.pow((i-8)/3,2))}
function scPath(){var d='',i;for(i=0;i<NB;i++)d+=(i?'L':'M')+(bx(i)+5.5).toFixed(1)+' '+scatY(i).toFixed(1);return d}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">SEQUOIA · LISST-200X SAMPLE PATH</text>';
    /* laser housing, the open water path with particles, the receiving lens and the ring detector */
    g+='<g id="tsCh"><rect class="cab" x="40" y="214" width="56" height="64"/><text class="ax" x="68" y="300" text-anchor="middle">laser</text>'+
       '<rect class="wtr" x="96" y="200" width="110" height="92"/><text class="ax" x="151" y="318" text-anchor="middle">open path · water</text>'+
       '<path class="lns" d="M214 206Q224 246 214 286Q204 246 214 206Z"/>'+
       '<rect class="cab" x="240" y="196" width="36" height="100"/><text class="ax" x="258" y="318" text-anchor="middle">rings</text>';
    for(i=0;i<5;i++)g+='<path class="rg" id="tsRg'+i+'" d="M244 '+(246-10-i*8)+'A'+(10+i*8)+' '+(10+i*8)+' 0 0 1 244 '+(246+10+i*8)+'"/>';
    [[120,232],[138,262],[160,226],[178,256],[150,244],[190,234],[126,276],[170,280]].forEach(function(p,k){g+='<circle class="pt" cx="'+p[0]+'" cy="'+p[1]+'" r="'+(k%3?2.6:4.2)+'"/>'});
    g+='<text class="s3" x="160" y="372" text-anchor="middle">Laser diffraction, in situ</text><path class="pl" d="M40 392H290"/></g>';
    g+='<path class="lb" id="tsGr" d="M96 246H244"/><path class="sc" id="tsGr2" d="M150 244L244 226M150 244L244 266M178 256L244 236M126 276L244 258"/>';
    g+='<text class="ro" id="tsRo" x="40" y="452">0.039°</text><text class="ro2" id="tsRh" x="40" y="474">BEAM ON</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">0.039°</text><text class="ro2" id="tsRh" x="460" y="56">BEAM ON</text>';
  }
  /* the chart: scattered light per ring, then the size distribution as 36 bars */
  for(i=0;i<NB;i++){var h=psd(i);g+='<rect class="bar" id="tsB'+i+'" x="'+(bx(i)+1.5).toFixed(1)+'" y="'+(SPY0-h).toFixed(1)+'" width="'+((SPX1-SPX0)/NB-3).toFixed(1)+'" height="'+h.toFixed(1)+'"/>'}
  [[0,"1"],[12,"10"],[24,"100"],[35,"500"]].forEach(function(r){g+='<text class="ax" x="'+(bx(r[0])+5.5).toFixed(1)+'" y="'+(mob?470:462)+'" text-anchor="middle">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" id="tsXl" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'µm':'RING ANGLE → SIZE · µm')+'</text>';
  g+='<path class="ms" id="tsMs" d="'+scPath()+'"/><circle class="hd" id="tsHd" r="5" cx="325" cy="120"/>';
  g+='<text class="bl" id="tsBl" x="712" y="110" text-anchor="end">scattered light per ring</text>';
  g+='<text class="bl" id="tsBl2" x="712" y="110" text-anchor="end">volume distribution, 36 classes</text>';
  var C=mob?["THE BEAM CROSSES THE WATER","PARTICLES SCATTER FORWARD","36 RINGS, 36 ANGLES","SIZES 1 TO 500 µm"]:["A LASER BEAM CROSSES THE OPEN PATH","PARTICLES SCATTER LIGHT FORWARD","36 RINGS RECORD 0.039° TO 13.8°","INVERTED INTO 36 SIZE CLASSES, 1–500 µm"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),hd:q("#tsHd"),bl:q("#tsBl"),bl2:q("#tsBl2"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),
    rg:[0,1,2,3,4].map(function(k){return q("#tsRg"+k)}),bar:[],cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  for(var i=0;i<NB;i++)E.bar.push(q("#tsB"+i));
  var L=E.ms.getTotalLength(),lastT="",lastH="";
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(E.gr){op(E.gr,b*seg(p,.03,.1));op(E.gr2,b*seg(p,.28,.38));E.rg.forEach(function(r,k){op(r,b*seg(p,.5+k*.03,.56+k*.03))})}
    var c=seg(p,.52,.72),f=c*(NB-1);
    E.ms.style.strokeDashoffset=(L*(1-c)).toFixed(1);op(E.ms,b*seg(p,.52,.55)*(1-seg(p,.78,.86)*.75));
    var k=Math.min(NB-1,Math.floor(f));E.hd.setAttribute("cx",(bx(k)+5.5).toFixed(1));E.hd.setAttribute("cy",scatY(k).toFixed(1));op(E.hd,b*seg(p,.52,.55)*(1-seg(p,.72,.76)));
    E.bar.forEach(function(r,j){op(r,b*seg(p,.77+j*.003,.82+j*.003)*.9)});
    var ang=0.039*Math.pow(13.8/0.039,c),ts=p<.77?(ang<1?ang.toFixed(3):ang.toFixed(1))+"°":"1–500 µm";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"BEAM ON":p<.52?"SCATTERING":p<.77?"RING "+(k+1)+" OF 36":"36 SIZE CLASSES";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    op(E.bl,b*seg(p,.6,.66)*(1-seg(p,.77,.8)));op(E.bl2,b*seg(p,.84,.9));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k2){op(cp,b*(k2===0?1:seg(p,w[k2][0],w[k2][0]+.04))*(k2===3?1:(1-seg(p,w[k2][1]-.04,w[k2][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
