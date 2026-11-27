/* The story scene (BL/BY/DB): one Faraday rotation isolator, in the terms microharmonics.com uses (Isolators: Faraday
   rotation, "suppress standing waves", stepped twist, lowest insertion loss; FR034 datasheet: WR-3.4, 222-330 GHz, insertion
   loss 1.8 dB avg, isolation 23 dB typ min; every unit tested on a vector network analyzer). ONE figure kept on screen: the
   waveguide with its ferrite element beside the measured S-parameters.
   Step 1 (Enter): the forward wave enters, polarization vertical.
   Step 2 (Rotate): the ferrite turns the polarization; S21 (forward loss) is traced near 0 dB.
   Step 3 (Absorb): a reflected wave is turned the wrong way and absorbed; S12 (isolation) is traced far below.
   Step 4 (Test): the whole band is highlighted as measured for that unit.
   The traces are illustrative, shaped after the published FR034 figures. */
var SPX0=320,SPX1=720,SPY0=100,SPF0=220,SPF1=330,SPDB=40;
function spX(f){return SPX0+(f-SPF0)/(SPF1-SPF0)*(SPX1-SPX0)}
function spY(db){return SPY0+(-db)/SPDB*340}
function s21(f){return -1.8+.35*Math.sin(f*.21)+.2*Math.sin(f*.53)}
function s12(f){return -30+3.2*Math.sin(f*.17+1)+2.1*Math.sin(f*.41)+1.2*Math.sin(f*.9)}
function spPath(fn){var d='',f;for(f=SPF0;f<=SPF1;f+=1)d+=(f===SPF0?'M':'L')+spX(f).toFixed(1)+' '+spY(fn(f)).toFixed(1);return d}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">MICRO HARMONICS · FARADAY ROTATION ISOLATOR</text>';
    /* the isolator body in perspective with the waveguide channel and the ferrite element */
    g+='<g id="tsCh"><path class="cs" d="M70 180L104 156H264L230 180Z"/><path class="cs2" d="M230 180L264 156V300L230 324Z"/><rect class="cab" x="70" y="180" width="160" height="144"/>'+
       '<rect class="wg" x="70" y="232" width="160" height="40"/><rect class="fe" id="tsFe" x="128" y="236" width="44" height="32"/><text class="ax" x="150" y="350" text-anchor="middle">ferrite</text>'+
       '<text class="s3" x="150" y="384" text-anchor="middle">Isolator, WR-3.4</text><path class="pl" d="M40 400H290"/></g>';
    /* the forward wave, its polarization arrows in and out, and the reflected wave */
    g+='<path class="fw" id="tsGr" d="M30 252H70"/><path class="fw" id="tsGr2" d="M230 252H290"/>'+
       '<path class="pa" id="tsPin" d="M48 232V272"/><path class="pa" id="tsPout" d="M262 270L282 234"/>'+
       '<path class="rw" id="tsRw" d="M290 262H232"/><text class="ax" id="tsRl" x="290" y="290" text-anchor="end">absorbed</text>';
    g+='<text class="ro" id="tsRo" x="40" y="452">220 GHz</text><text class="ro2" id="tsRh" x="40" y="474">FORWARD</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">220 GHz</text><text class="ro2" id="tsRh" x="470" y="56">FORWARD</text>';
  }
  /* the S-parameters: S21 (insertion loss) near the top, S12 (isolation) far below */
  g+='<rect class="band" id="tsBand" x="'+spX(222).toFixed(1)+'" y="90" width="'+(spX(330)-spX(222)).toFixed(1)+'" height="350"/>';
  [[0,"0"],[-10,"−10"],[-20,"−20"],[-30,"−30"]].forEach(function(r){var y=spY(r[0]);g+='<path class="gl" d="M320 '+y.toFixed(1)+'H720"/><text class="ax" x="308" y="'+(y+4).toFixed(1)+'" text-anchor="end">'+r[1]+'</text>'});
  [[240,"240"],[280,"280"],[320,"320"]].forEach(function(r){g+='<text class="ax" x="'+spX(r[0]).toFixed(1)+'" y="'+(mob?470:462)+'" text-anchor="middle">'+r[1]+'</text>'});
  g+='<path class="axl" d="M320 90V440H720"/><text class="ax" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'GHz':'FREQUENCY · GHz')+'</text>'+(mob?'':'<text class="ax" x="308" y="76" text-anchor="end">dB</text>');
  g+='<path class="ms" id="tsMs" d="'+spPath(s21)+'"/><path class="ms ms2" id="tsMs2" d="'+spPath(s12)+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="100"/>';
  g+='<text class="bl" id="tsBl" x="712" y="'+(spY(-1.8)+30).toFixed(1)+'" text-anchor="end">S21 · insertion loss</text>';
  g+='<text class="bl" id="tsBl2" x="712" y="'+(spY(-16)).toFixed(1)+'" text-anchor="end">S12 · isolation</text>';
  var C=mob?["THE WAVE ENTERS","POLARIZATION TURNED","REFLECTION ABSORBED","FULL BAND, EVERY UNIT"]:["THE FORWARD WAVE ENTERS THE WAVEGUIDE","FERRITE ROTATES THE POLARIZATION · S21","THE REFLECTED WAVE IS ABSORBED · S12","MEASURED ACROSS THE FULL BAND, EVERY UNIT"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),ms2:q("#tsMs2"),hd:q("#tsHd"),band:q("#tsBand"),bl:q("#tsBl"),bl2:q("#tsBl2"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),pin:q("#tsPin"),pout:q("#tsPout"),rw:q("#tsRw"),rl:q("#tsRl"),
    cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  var L=E.ms.getTotalLength(),L2=E.ms2.getTotalLength(),lastT="",lastH="";
  E.ms.style.strokeDasharray=L+" "+L;E.ms.style.strokeDashoffset=L;E.ms2.style.strokeDasharray=L2+" "+L2;E.ms2.style.strokeDashoffset=L2;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(E.gr){op(E.gr,b*seg(p,.03,.1));op(E.pin,b*seg(p,.06,.14));op(E.gr2,b*seg(p,.3,.36));op(E.pout,b*seg(p,.32,.4));
      op(E.rw,b*seg(p,.53,.6)*(1-seg(p,.74,.78)*.5));op(E.rl,b*seg(p,.58,.64))}
    /* S21 traced in step 2, S12 in step 3 (simple x sweep; the traces are nearly flat so length ~ x) */
    var a=seg(p,.28,.47),c=seg(p,.53,.72),f;
    E.ms.style.strokeDashoffset=(L*(1-a)).toFixed(1);op(E.ms,b*seg(p,.28,.31));
    E.ms2.style.strokeDashoffset=(L2*(1-c)).toFixed(1);op(E.ms2,b*seg(p,.53,.56));
    if(p<.5){f=SPF0+(SPF1-SPF0)*a;E.hd.setAttribute("cy",spY(s21(f)).toFixed(1))}else{f=SPF0+(SPF1-SPF0)*c;E.hd.setAttribute("cy",spY(s12(f)).toFixed(1))}
    E.hd.setAttribute("cx",spX(f).toFixed(1));op(E.hd,b*(seg(p,.28,.31)*(1-seg(p,.47,.5))+seg(p,.53,.56)*(1-seg(p,.72,.75))));
    var ts=Math.round(f)+" GHz";if(p>=.77)ts="222–330 GHz";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"FORWARD":p<.52?"S21 · −1.8 dB":p<.77?"S12 · ISOLATED":"FULL BAND";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    op(E.bl,b*seg(p,.42,.48));op(E.bl2,b*seg(p,.66,.72));op(E.band,b*seg(p,.78,.86)*.9);
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
