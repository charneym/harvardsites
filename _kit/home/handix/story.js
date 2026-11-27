/* The story scene (BL/BY/DB): one POPS measurement, in the terms handixscientific.com > POPS uses (405 nm laser, ~70 mW;
   sample flow 0.05-0.35 LPM through a 1/8" inlet; scattered light collected over 38°-142°; single particles sized 0.13-3 µm in
   user-specified channels; 1 Hz logging to micro-SD). ONE figure kept on screen: the optical chamber with inlet, laser,
   collecting mirror and detector beside the detector signal that becomes the size distribution.
   Step 1 (Sample): sample air is drawn down through the inlet.
   Step 2 (Laser): the 405 nm beam crosses the particle stream.
   Step 3 (Pulse): each particle scatters a flash; the detector signal is traced, one pulse per particle.
   Step 4 (Size): pulse heights are binned into size channels, 130 nm to 3 µm.
   The pulse train and the distribution are illustrative. */
var SPX0=320,SPX1=720,SPY0=440,NB=24;
var PUL=[[.06,120],[.13,46],[.19,210],[.24,70],[.31,34],[.37,150],[.43,58],[.5,96],[.55,40],[.62,250],[.68,64],[.74,30],[.8,120],[.86,52],[.93,180]];
function bx(i){return SPX0+i*(SPX1-SPX0)/NB}
function sig(t){var v=0;PUL.forEach(function(q){v+=q[1]*Math.exp(-Math.pow((t-q[0])/.009,2))});return v}
function psd(i){return 250*Math.exp(-.5*Math.pow((i-5)/3.2,2))+55*Math.exp(-.5*Math.pow((i-16)/3.5,2))+8}
function sgPath(){var d='',k;for(k=0;k<=400;k++){var t=k/400;d+=(k?'L':'M')+(SPX0+t*(SPX1-SPX0)).toFixed(1)+' '+(SPY0-10-sig(t)).toFixed(1)}return d}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">HANDIX · POPS OPTICAL CHAMBER</text>';
    /* the chamber, the inlet nozzle from above, the collecting mirror below and the detector above it */
    g+='<g id="tsCh"><rect class="cab" x="56" y="150" width="220" height="200"/>'+
       '<path class="cab" d="M156 96H176V170L170 182H162L156 170Z"/><text class="ax" x="186" y="112">inlet</text>'+
       '<path class="lns" d="M106 304Q166 356 226 304Q166 330 106 304Z"/><text class="ax" x="166" y="372" text-anchor="middle">mirror · 38°–142°</text>'+
       '<rect class="wtr" x="228" y="178" width="38" height="30"/><text class="ax" x="247" y="168" text-anchor="middle">detector</text>'+
       '<text class="s3" x="166" y="406" text-anchor="middle">Portable Optical Particle Spectrometer</text><path class="pl" d="M40 422H290"/></g>';
    for(i=0;i<5;i++)g+='<path class="rg" id="tsRg'+i+'" d="M166 250L'+[112,138,166,194,220][i]+' 312"/>';
    [[166,196],[166,214],[166,232],[166,270],[166,290]].forEach(function(p,k){g+='<circle class="pt" id="tsP'+k+'" cx="'+p[0]+'" cy="'+p[1]+'" r="'+(k%2?2.4:3.6)+'"/>'});
    g+='<path class="lb" id="tsGr" d="M40 250H276"/><text class="ax" id="tsLl" x="40" y="232">405 nm</text><path class="sc" id="tsGr2" d="M166 250L232 206"/>';
    g+='<text class="ro" id="tsRo" x="40" y="462">0 particles</text><text class="ro2" id="tsRh" x="40" y="484">SAMPLE FLOW</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">0 particles</text><text class="ro2" id="tsRh" x="500" y="56">SAMPLE FLOW</text>';
  }
  /* the chart: the detector signal (one pulse per particle), then the size distribution as 24 channels */
  for(i=0;i<NB;i++){var h=psd(i);g+='<rect class="bar" id="tsB'+i+'" x="'+(bx(i)+1.5).toFixed(1)+'" y="'+(SPY0-h).toFixed(1)+'" width="'+((SPX1-SPX0)/NB-3).toFixed(1)+'" height="'+h.toFixed(1)+'"/>'}
  [[0,"0.13"],[8,"0.4"],[16,"1"],[24,"3"]].forEach(function(r){g+='<text class="ax tk" id="tsK'+r[0]+'" x="'+bx(r[0]).toFixed(1)+'" y="'+(mob?470:462)+'" text-anchor="middle">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" id="tsXl" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'µm':'DIAMETER · µm')+'</text><text class="ax" id="tsXt" x="720" y="'+(mob?470:462)+'" text-anchor="end">TIME →</text>';
  g+='<path class="ms" id="tsMs" d="'+sgPath()+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="430"/>';
  g+='<text class="bl" id="tsBl" x="712" y="110" text-anchor="end">detector signal · one pulse per particle</text>';
  g+='<text class="bl" id="tsBl2" x="712" y="110" text-anchor="end">size distribution, logged at 1 Hz</text>';
  var C=mob?["AIR DRAWN IN","A 405 nm LASER","ONE PULSE, ONE PARTICLE","130 nm TO 3 µm"]:["SAMPLE AIR DRAWN THROUGH THE INLET","A 405 nm LASER CROSSES THE STREAM","SCATTERED LIGHT · ONE PULSE PER PARTICLE","PULSE HEIGHTS BINNED · 130 nm TO 3 µm"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),hd:q("#tsHd"),bl:q("#tsBl"),bl2:q("#tsBl2"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),ll:q("#tsLl"),xl:q("#tsXl"),xt:q("#tsXt"),tk:[0,8,16,24].map(function(k){return q("#tsK"+k)}),
    rg:[0,1,2,3,4].map(function(k){return q("#tsRg"+k)}),pt:[0,1,2,3,4].map(function(k){return q("#tsP"+k)}),bar:[],cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  for(var i=0;i<NB;i++)E.bar.push(q("#tsB"+i));
  /* the signal is a dense x sweep: map progress to length through a cumulative-length table */
  var CU=[0],px=SPX0,py=SPY0-10-sig(0);for(var k0=1;k0<=400;k0++){var x=SPX0+k0/400*(SPX1-SPX0),y=SPY0-10-sig(k0/400);CU.push(CU[k0-1]+Math.hypot(x-px,y-py));px=x;py=y}
  var L=E.ms.getTotalLength(),CT=CU[400],lastT="",lastH="";
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(E.gr){
      /* particles fall down the stream through step 1 and keep moving */
      var fl=seg(p,.02,.98);E.pt.forEach(function(el,k){var y0=[196,214,232,270,290][k],y=196+((y0-196+fl*420)%110);el.setAttribute("cy",y.toFixed(1));op(el,b*seg(p,.03+k*.02,.08+k*.02)*.9)});
      op(E.gr,b*seg(p,.28,.34));op(E.ll,b*seg(p,.3,.36));op(E.gr2,b*seg(p,.52,.58));
      E.rg.forEach(function(r,k){op(r,b*seg(p,.5+k*.02,.55+k*.02)*.8)})}
    var c=seg(p,.52,.73),ci=c*400,i0=Math.min(400,Math.floor(ci)),i1=Math.min(400,i0+1),f=(CU[i0]+(CU[i1]-CU[i0])*(ci-i0))/CT;
    E.ms.style.strokeDashoffset=(L*(1-f)).toFixed(1);op(E.ms,b*seg(p,.52,.55)*(1-seg(p,.75,.81)));
    var sz=seg(p,.78,.84);E.tk.forEach(function(t){op(t,b*sz)});op(E.xl,b*sz);op(E.xt,b*seg(p,.5,.55)*(1-seg(p,.75,.78)));
    E.hd.setAttribute("cx",(SPX0+c*(SPX1-SPX0)).toFixed(1));E.hd.setAttribute("cy",(SPY0-10-sig(c)).toFixed(1));op(E.hd,b*seg(p,.52,.55)*(1-seg(p,.73,.77)));
    E.bar.forEach(function(r,j){op(r,b*seg(p,.77+j*.004,.82+j*.004)*.9)});
    var n=0;PUL.forEach(function(qq){if(c>=qq[0])n++});
    var ts=p<.77?n+(n===1?" particle":" particles"):"0.13–3 µm";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"SAMPLE FLOW":p<.52?"LASER ON · 405 nm":p<.77?"COUNTING":"SIZE CHANNELS";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    op(E.bl,b*seg(p,.58,.64)*(1-seg(p,.77,.8)));op(E.bl2,b*seg(p,.84,.9));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k2){op(cp,b*(k2===0?1:seg(p,w[k2][0],w[k2][0]+.04))*(k2===3?1:(1-seg(p,w[k2][1]-.04,w[k2][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
