/* The story scene (BL/BY/DB): inside an OsTech diode laser system, as ostech.de/en > Products and Company Profile describe it
   ("electronic control systems for laser diodes ... laser current sources, controls for peltier coolers as well as cooler
   blocks", "CW and various pulse modes (digital or analog modulation, single pulses or bursts)", "All diode laser systems are
   fibre coupled"). ONE side view kept on screen, drawn in fine line:
   Step 1 (Current): the driver's reading climbs and current runs down the cable into the diode.
   Step 2 (Cooling): the TEC under the diode works; the temperature trace settles onto its set point.
   Step 3 (Pulses): the scope strip draws CW, then single pulses, then a burst.
   Step 4 (Fibre): light runs along the fibre to the SMA connector.
   The display reading echoes the 50.00 A on OsTech's own product photograph; traces are illustrative. */
var SCW=760,SCH=520;
var FIB="M520 232C596 232 604 124 680 124L700 124";
function otScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="otWc"><rect id="otWr" x="40" y="384" width="0" height="84"/></clipPath><radialGradient id="otGl"><stop offset="0" stop-color="#ffd29a" stop-opacity=".95"/><stop offset=".35" stop-color="#eb891b" stop-opacity=".55"/><stop offset="1" stop-color="#eb891b" stop-opacity="0"/></radialGradient></defs>';
  /* the laser driver, front panel */
  g+='<g class="drv"><rect class="box" x="30" y="150" width="220" height="170"/><rect class="disp" x="50" y="170" width="134" height="66"/>';
  for(i=0;i<5;i++)g+='<rect class="key" x="'+(52+i*26)+'" y="252" width="16" height="16"/>';
  g+='<circle class="est" cx="218" cy="196" r="13"/><circle class="knob" cx="218" cy="252" r="9"/><path class="ft" d="M44 320V330H70V320M210 320V330H236V320"/></g>';
  g+='<text class="dl" x="58" y="188">I LASER</text><text class="dr" id="otRd" x="176" y="222" text-anchor="end">0.00 A</text>';
  g+='<g id="otLd"><text class="t" x="30" y="'+(mob?132:136)+'">'+(mob?"DRIVER":"LASER DRIVER")+'</text></g>';
  /* cable to the diode, with the current running in it */
  g+='<g class="cab"><path d="M250 230H396"/><path d="M250 242H396"/></g><path id="otFl" class="flow" d="M250 236H396"/>';
  /* the diode package on its TEC on the heatsink */
  g+='<g class="hsk"><rect x="380" y="274" width="156" height="22"/>';for(i=0;i<11;i++)g+='<rect class="fin" x="'+(386+i*14)+'" y="296" width="6" height="96"/>';g+='</g>';
  g+='<g class="tec"><rect x="400" y="260" width="116" height="14"/>';for(i=0;i<13;i++)g+='<path d="M'+(408+i*8.4).toFixed(1)+' 262V272"/>';g+='</g>';
  g+='<g class="pkg"><rect x="396" y="204" width="124" height="56"/><rect id="otCh" class="chip" x="442" y="222" width="34" height="20"/></g>';
  g+='<g id="otLp"><text class="t" x="396" y="'+(mob?186:188)+'">LASER DIODE</text></g>';
  g+='<g id="otLt"><text class="t" x="556" y="'+(mob?266:269)+'">TEC</text></g>';
  g+='<g id="otLh"><text class="t" x="380" y="'+(mob?420:414)+'">HEATSINK</text></g>';
  /* temperature trace settling on its set point */
  g+='<g class="tmp"><path class="ax" d="M572 312V392H740"/><path class="sp" d="M572 352H740"/></g><path id="otTt" class="tt" d=""/>';
  g+='<g id="otLm"><text class="t" x="572" y="'+(mob?298:296)+'">'+(mob?"TEMP.":"TEMPERATURE")+'</text></g>';
  /* scope strip: CW, single pulses, a burst */
  g+='<g class="scp"><rect x="30" y="380" width="300" height="92"/><path class="ax" d="M40 462H320"/></g>';
  var w='M40 462V404H120V462H136V404H150V462H174V404H188V462H212V404H226V462H250';for(i=0;i<6;i++){var x=250+i*11;w+='V404H'+(x+5)+'V462H'+(x+11)}w+='H320';
  g+='<path class="wave" clip-path="url(#otWc)" d="'+w+'"/>';
  g+='<g id="otLs"><text class="t" x="30" y="'+(mob?362:366)+'">'+(mob?"PULSES":"PULSE MODES")+'</text></g>';
  /* fibre and SMA connector, with the light */
  g+='<path class="fib" d="'+FIB+'"/><path id="otFb" class="fibl" d="'+FIB+'"/>';
  g+='<g class="sma"><rect x="700" y="116" width="22" height="16"/><rect x="722" y="119" width="12" height="10"/></g><circle id="otBm" cx="740" cy="124" r="26" fill="url(#otGl)"/>';
  g+='<g id="otLf"><text class="t" x="'+(mob?600:560)+'" y="'+(mob?84:92)+'">'+(mob?"FIBRE":"FIBRE · 100–600 µm")+'</text></g>';
  return g+'</svg>';
}
function scene(){return otScene({mob:MOBILE()?1:0})}
function otTemp(s){
  /* the probe temperature: from warm and wobbling toward the set point line (y 352) */
  var d="M572 "+(326).toFixed(1),x;
  for(x=572;x<=740;x+=4){var u=(x-572)/168,k=Math.min(1,s*1.25),env=Math.exp(-u*4.2*(.35+k)),y=352-26*env*Math.cos(u*16)*(1-.15*k);d+="L"+x+" "+y.toFixed(1)}
  return d;
}
function storyDraw(svg){
  var Q=function(s){return svg.querySelector(s)};
  var E={rd:Q("#otRd"),fl:Q("#otFl"),ch:Q("#otCh"),tt:Q("#otTt"),wr:Q("#otWr"),fb:Q("#otFb"),bm:Q("#otBm"),
    L:[Q("#otLd"),Q("#otLp"),Q("#otLt"),Q("#otLh"),Q("#otLm"),Q("#otLs"),Q("#otLf")],
    drv:Q(".drv"),tec:Q(".tec"),pkg:Q(".pkg"),scp:Q(".scp"),fib:Q(".fib"),base:[].slice.call(svg.querySelectorAll(".drv,.cab,.hsk,.tec,.pkg,.tmp,.scp,.fib,.sma,.dl,.dr"))};
  var lastB=-1,FL=E.fl.getTotalLength?146:146;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function hi(el,on){if(el)el.classList.toggle("hi",on)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)})}
    var s1=seg(p,.03,.2),s2=seg(p,.28,.45),s3=seg(p,.53,.72),s4=seg(p,.78,.95);
    E.rd.textContent=(50*s1).toFixed(2)+" A";
    /* current: a bright segment travels the cable while the reading climbs, then the cable stays live */
    var t=(p*9)%1;E.fl.style.strokeDasharray="28 "+FL;E.fl.style.strokeDashoffset=(28-t*(FL+28)).toFixed(1);op(E.fl,b*s1);
    op(E.ch,b*(.25+.75*s1));
    E.tt.setAttribute("d",otTemp(s2));op(E.tt,b*seg(p,.24,.3));
    E.wr.setAttribute("width",(280*s3).toFixed(1));
    op(E.fb,b*s4);E.fb.style.strokeDasharray=(s4*260).toFixed(1)+" 400";op(E.bm,b*seg(p,.9,.97));
    var on=[seg(p,0,.06),seg(p,0,.06),seg(p,.26,.32),seg(p,.26,.32),seg(p,.26,.32),seg(p,.5,.56),seg(p,.76,.82)];
    E.L.forEach(function(el,i){op(el,b*(.45+.55*on[i]))});
    hi(E.drv,p<.26);hi(E.tec,p>=.26&&p<.5);hi(E.pkg,p<.26||p>=.76);hi(E.scp,p>=.5&&p<.76);hi(E.fib,p>=.76);
  };
}
