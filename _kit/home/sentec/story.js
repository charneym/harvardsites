/* the story scene (BL/BY/DB): ONE TRANSMITRON-T set-up drawn as an engraved diagram and kept on screen for all three steps:
   the interrogation unit (Abfrageeinheit) with its antenna on the left, the passive SAW sensor on the right (a crystal die seen
   from above: the interdigital transducer in the middle, a reflector grating either side, its own antenna).
   Step 1 (Abfrage): a 433 MHz burst leaves the unit's antenna. Step 2 (Resonanz): the transducer turns it into a surface
   acoustic wave that runs between the reflectors. Step 3 (Antwort): the sensor rings down and its echo returns; the unit's
   display shows the damped oscillation it evaluates. Sources: sentec-elektronik.de SAW-Sensorik, Abfrageeinheit and
   SAW-Sensoren pages. Schematic. Driven by the scrubbed story progress. */
function scene(){
  var mob=MOBILE(),g='',i,x;
  var R0=mob?20:40,R1=mob?150:230,RA=R1-(mob?40:50),S0=mob?196:400,S1=mob?410:700,XA=(S0+S1)/2,T0=320,T1=470,AY=226,B0=320,B1=480,DY=(T0+T1)/2;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'8 166 412 380':'20 166 700 380')+'" aria-hidden="true">';
  g+='<defs><clipPath id="stcD"><rect x="'+S0+'" y="'+T0+'" width="'+(S1-S0)+'" height="'+(T1-T0)+'"/></clipPath></defs>';
  /* base: the unit and its display, both antennas, the die outline, transducer fingers and reflector gratings */
  g+='<g id="scBase">';
  g+='<path class="sD ol" d="M'+R0+' '+B0+'H'+R1+'V'+B1+'H'+R0+'Z"/><path class="sD dw" d="M'+(R0+18)+' '+(B0+20)+'H'+(R1-18)+'V'+(B0+96)+'H'+(R0+18)+'Z"/>';
  g+='<path class="sD ol" d="M'+(R0+18)+' '+(B1-30)+'H'+(R0+46)+(mob?'':'M'+(R0+60)+' '+(B1-30)+'H'+(R0+88))+'"/>';
  g+='<path class="sD an" d="M'+RA+' '+B0+'V'+(AY+6)+'"/><circle class="anb" cx="'+RA+'" cy="'+AY+'" r="4.5"/>';
  g+='<path class="sD an" d="M'+XA+' '+T0+'V'+(AY+6)+'"/><circle class="anb" cx="'+XA+'" cy="'+AY+'" r="4.5"/>';
  g+='<path class="sD ol" d="M'+S0+' '+T0+'H'+S1+'V'+T1+'H'+S0+'Z"/>';
  var f='',r='';
  /* interdigital transducer: two bus bars, fingers alternating from top and bottom */
  f+='M'+(XA-44)+' '+(T0+10)+'H'+(XA+44)+'M'+(XA-44)+' '+(T1-10)+'H'+(XA+44);
  for(i=0;i<13;i++){x=XA-42+i*7;f+=(i%2?'M'+x+' '+(T0+10)+'V'+(T1-24):'M'+x+' '+(T0+24)+'V'+(T1-10))}
  /* reflector gratings */
  for(x=S0+14;x<=XA-58;x+=6)r+='M'+x+' '+(T0+12)+'V'+(T1-12);
  for(x=XA+58;x<=S1-14;x+=6)r+='M'+x+' '+(T0+12)+'V'+(T1-12);
  g+='<path class="sD fg" d="'+f+'"/><path class="rfl" d="'+r+'"/>';
  g+='<text class="a" x="'+(R0+(R1-R0)/2)+'" y="'+(B1+32)+'" text-anchor="middle">'+(mob?'ABFRAGE-<tspan x="'+(R0+(R1-R0)/2)+'" dy="20">EINHEIT</tspan>':'ABFRAGEEINHEIT')+'</text>';
  g+='<text class="a" x="'+S0+'" y="'+(T0-16)+'">'+(mob?'SENSOR':'SAW-SENSOR')+'</text>';
  g+='</g>';
  /* step 1: the 433 MHz burst leaves the unit's antenna, and shows as a pulse on its display */
  var A1='';[28,54,80].forEach(function(rr){var a=0.62;A1+='M'+(RA+rr*Math.cos(a)).toFixed(1)+' '+(AY-rr*Math.sin(a)).toFixed(1)+'A'+rr+' '+rr+' 0 0 1 '+(RA+rr*Math.cos(a)).toFixed(1)+' '+(AY+rr*Math.sin(a)).toFixed(1)});
  var PY=B0+58,q0=R0+(mob?40:56),qs=mob?5:6,P1='M'+(R0+26)+' '+PY+'H'+q0;for(i=0;i<11;i++)P1+='L'+(q0+2+i*qs)+' '+(PY+(i%2?11:-11));P1+='L'+(q0+4+11*qs)+' '+PY+'H'+(R1-26);
  g+='<g id="st1"><path class="sD1 wv" d="'+A1+'"/><path class="sD1 dsig" d="'+P1+'"/><text class="a" x="'+(RA+(mob?100:92))+'" y="'+(mob?AY+6:296)+'">433 MHZ</text></g>';
  /* step 2: the surface acoustic wave runs across the crystal between the reflectors */
  var W2='M'+(S0+10)+' '+DY;for(x=S0+10;x<=S1-10;x+=2){W2+='L'+x+' '+(DY+16*Math.sin((x-S0)/9)).toFixed(1)}
  g+='<g id="st2"><g clip-path="url(#stcD)"><path class="sD2 sw" d="'+W2+'"/></g><text class="a" x="'+XA+'" y="'+(T1+32)+'" text-anchor="middle">'+(mob?'OBERFLÄCHENWELLE':'AKUSTISCHE OBERFLÄCHENWELLE')+'</text></g>';
  /* step 3: the echo returns to the unit; its display shows the damped ring-down it evaluates */
  var A3='';[28,54,80].forEach(function(rr){var a=0.62;A3+='M'+(XA-rr*Math.cos(a)).toFixed(1)+' '+(AY-rr*Math.sin(a)).toFixed(1)+'A'+rr+' '+rr+' 0 0 0 '+(XA-rr*Math.cos(a)).toFixed(1)+' '+(AY+rr*Math.sin(a)).toFixed(1)});
  var P3='M'+(R0+26)+' '+PY;for(x=0;x<=(R1-R0-52);x+=1.5){P3+='L'+(R0+26+x).toFixed(1)+' '+(PY-24*Math.exp(-x/40)*Math.sin(x/4)).toFixed(1)}
  g+='<g id="st3"><path class="sD3 wv" d="'+A3+'"/><path class="sD3 dsig" d="'+P3+'"/><text class="a" x="'+(XA-(mob?96:100))+'" y="'+(AY+5)+'" text-anchor="end">ECHO</text>'+
     '<text class="rd" x="'+(R1-20)+'" y="'+(B1-20)+'" text-anchor="end">°C</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .rfl, #scBase .anb",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the burst stays through the resonance, then gives way to the echo */
    var i1=seg(p,0,.1),o1=seg(p,.62,.68),i2=seg(p,.35,.45),i3=seg(p,.68,.88);
    op(E.s1,b*i1*(1-o1));draw(E.c1,i1);
    op(E.s2,b*i2);draw(E.c2,i2);
    op(E.s3,b*Math.min(1,i3*6));draw(E.c3,i3);
  };
}
