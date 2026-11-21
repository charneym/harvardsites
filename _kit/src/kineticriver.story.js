/* the story scene: how a flow cytometer reads a particle, and how the Arno reads two dyes in one detector, drawn in fine line
   like an optics plate. Left, ONE flow cell kept on screen: the sheath funnel narrows the sample into a core stream and the
   particles rise in single file through the laser. Right, the readout of the step, with labelled axes.
   Step 1 single file (one pulse per particle); step 2 the laser: scatter for size, fluorescence for markers; step 3 two dyes
   land in one detector (spillover, which conventional instruments compensate); step 4 the Arno separates them by fluorescence
   lifetime, compensation-free. Facts: kineticriver.com (Arno, Delaware) and NIH award 5SB1GM157775. */
var KR_BY=196;
function krGauss(x0,y0,amps,w,len){/* a baseline with gaussian pulses at the given centres */
  var d="",n=120;for(var i=0;i<=n;i++){var x=i/n*len,y=0;amps.forEach(function(a){y+=a[1]*Math.exp(-Math.pow((x-a[0])/w,2))});d+=(i?"L":"M")+(x0+x).toFixed(1)+" "+(y0-y).toFixed(1)}return d}
function krSpec(x0,y0,c,w,h,len){var d="",n=90;for(var i=0;i<=n;i++){var x=i/n*len,t=(x-c)/w,y=h*Math.exp(-t*t*(t>0?.55:1.6));d+=(i?"L":"M")+(x0+x).toFixed(1)+" "+(y0-y).toFixed(1)}return d}
function krDecay(x0,y0,tau,h,len){var d="M"+x0+" "+y0,n=90,t0=22;d+="L"+(x0+t0-6)+" "+y0+"L"+(x0+t0)+" "+(y0-h);for(var i=1;i<=n;i++){var x=t0+i/n*(len-t0);d+="L"+(x0+x).toFixed(1)+" "+(y0-h*Math.exp(-(x-t0)/tau)).toFixed(1)}return d}
function krAxes(lx,ly){/* readout panel axes: x 440..760, baseline y 340 */
  return '<path class="kr-ax" d="M440 140V340H764"/><text x="764" y="368" text-anchor="end">'+lx+'</text><text x="440" y="124">'+ly+'</text>'}
function scene(){
  var mob=MOBILE();
  var caps=["SINGLE FILE, ONE PULSE PER PARTICLE","SCATTER FOR SIZE, FLUORESCENCE FOR MARKERS","TWO DYES, ONE DETECTOR: SPILLOVER","SEPARATED BY LIFETIME: COMPENSATION-FREE"];
  var parts="";for(var i=0;i<7;i++)parts+='<circle class="kr-pt" r="6.5"/>';
  return '<svg viewBox="20 40 760 500" aria-hidden="true">'+
   /* flow cell */
   '<path class="kr-gl" d="M160 70H260V420H160Z"/><path class="kr-gl2" d="M168 78H252V412H168Z"/>'+
   '<path class="kr-ch" d="M204 70V420M216 70V420"/>'+
   '<path class="kr-fn" d="M112 500L204 420M308 500L216 420"/>'+
   '<path class="kr-sh" d="M140 492L196 436M280 492L224 436M176 500L206 446M244 500L214 446"/>'+
   '<path class="kr-core" d="M210 500V70"/>'+
   /* laser + interrogation */
   '<path class="kr-bm" id="krBm" d="M36 '+KR_BY+'H384"/>'+
   '<circle class="kr-spot" id="krSpot" cx="210" cy="'+KR_BY+'" r="16"/>'+
   '<path class="kr-fsc" id="krFsc" d="M232 '+(KR_BY-12)+'L388 '+(KR_BY-34)+'M232 '+(KR_BY+12)+'L388 '+(KR_BY+34)+'"/>'+
   '<path class="kr-fl" id="krFl" d="M214 '+(KR_BY-20)+'L276 104M226 '+(KR_BY-14)+'L318 128"/>'+
   '<g id="krPts">'+parts+'</g>'+
   '<text x="40" y="'+(KR_BY-14)+'" class="a" id="krLL">LASER</text>'+
   '<text x="40" y="474" id="krSL">SHEATH</text>'+
   '<text x="'+(mob?228:228)+'" y="462" id="krCL">CORE STREAM</text>'+
   '<text x="'+(mob?150:160)+'" y="60">FLOW CELL</text>'+
   '<text x="'+(mob?250:290)+'" y="'+(KR_BY+62)+'" id="krFscL">SCATTER</text>'+
   '<text class="o" x="'+(mob?282:300)+'" y="96" id="krFlL">FLUORESCENCE</text>'+
   /* readout 1: one pulse per particle */
   '<g id="krR1">'+krAxes("TIME","SIGNAL")+'<path class="kr-tr" d="'+krGauss(446,338,[[30,120],[96,96],[150,140],[224,110],[284,130]],8,316)+'"/></g>'+
   /* readout 2: scatter + fluorescence */
   '<g id="krR2">'+krAxes("TIME","SIGNAL")+'<path class="kr-tr" d="'+krGauss(446,338,[[30,120],[96,96],[150,140],[224,110],[284,130]],8,316)+'"/>'+
    '<path class="kr-tro" d="'+krGauss(446,338,[[30,46],[96,150],[150,24],[224,170],[284,70]],8,316)+'"/>'+
    '<text x="764" y="158" text-anchor="end">SCATTER</text><text class="o" x="764" y="180" text-anchor="end">FLUORESCENCE</text></g>'+
   /* readout 3: two emission spectra in one detector band */
   '<g id="krR3">'+krAxes("WAVELENGTH","EMISSION")+'<path class="kr-band" d="M548 150H636V340H548Z"/>'+
    '<path class="kr-tro" d="'+krSpec(446,338,104,34,170,318)+'"/><path class="kr-tra" d="'+krSpec(446,338,154,40,140,318)+'"/>'+
    '<text x="592" y="140" text-anchor="middle" class="o">ONE DETECTOR</text><text x="500" y="'+(mob?322:318)+'" text-anchor="middle">DYE A</text><text x="'+(mob?700:690)+'" y="'+(mob?322:300)+'" text-anchor="middle">DYE B</text></g>'+
   /* readout 4: two lifetimes after each laser pulse */
   '<g id="krR4">'+krAxes("TIME (NS)","INTENSITY")+'<path class="kr-tra" d="'+krDecay(446,338,110,180,318)+'"/><path class="kr-tro" d="'+krDecay(446,338,22,180,318)+'"/>'+
    '<text class="o" x="'+(mob?548:530)+'" y="'+(mob?260:250)+'">SHORT</text><text x="'+(mob?660:640)+'" y="'+(mob?222:214)+'">LONG</text></g>'+
   caps.map(function(t,i){return '<text class="cap" id="krC'+i+'" x="400" y="532" text-anchor="middle">'+t+'</text>'}).join("")+
  '</svg>';
}
function storyDraw(svg){
  var E={pts:$$("#krPts circle",svg),bm:$("#krBm",svg),spot:$("#krSpot",svg),fsc:$("#krFsc",svg),fl:$("#krFl",svg),fscL:$("#krFscL",svg),flL:$("#krFlL",svg),
    R:[1,2,3,4].map(function(i){return $("#krR"+i,svg)}),cap:[0,1,2,3].map(function(i){return $("#krC"+i,svg)})};
  return function(p,b){
    if(!E.bm.isConnected)return;
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* particles rise through the channel in single file; one sits in the beam at each step's rest point */
    var lit=0;
    E.pts.forEach(function(c,k){var y=480-((k*58+p*1160)%440);var inC=y<424;c.setAttribute("cx",inC?210:(210+(k%2?1:-1)*Math.min(40,(y-424)*.9)).toFixed(1));c.setAttribute("cy",y.toFixed(1));
      var d=Math.abs(y-KR_BY);if(d<14)lit=Math.max(lit,1-d/14);c.classList.toggle("hot",d<14);c.style.opacity=(y<74?Math.max(0,(y-58)/16):1).toFixed(3)});
    var s2=seg(p,.22,.3);
    E.bm.style.opacity=(.45+.55*s2).toFixed(3);
    E.spot.style.opacity=(b*(.25+.75*lit)*(.4+.6*s2)).toFixed(3);
    E.fsc.style.opacity=E.fscL.style.opacity=(b*s2).toFixed(3);
    E.fl.style.opacity=E.flL.style.opacity=(b*s2).toFixed(3);
    var W=[[0,0,.22,.27],[.22,.27,.47,.52],[.47,.52,.72,.77],[.72,.77,2,2]];
    W.forEach(function(w,k){var a=k===0?1:seg(p,w[0],w[1]),o=k===3?0:seg(p,w[2],w[3]),v=(b*a*(1-o)).toFixed(3);E.R[k].style.opacity=v;E.cap[k].style.opacity=v});
  };
}
