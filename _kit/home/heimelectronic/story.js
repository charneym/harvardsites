/* The story scene (BL/BY/DB): Heim Electronic's High Power Laser Diode Driver DL60-250 (heim-electronic.de > Produkte >
   Spezialnetzteile), drawn as ONE oscilloscope frame kept on screen for all three steps, from the firm's own description:
   Step 1 (Mehrkanal): several switching channels run offset; their sum is a high current with a very low, fast ripple (2 MHz).
   Step 2 (Puls / CW): the output drives the laser diode with rectangular pulses or in CW mode.
   Step 3 (Schutz): on overtemperature (or overcurrent / overvoltage) the converter stops, the output is shorted to ground
   and "Power good" is deactivated. Schematic, no measured data. */
var SCW=760,SCH=520;
function heScene(o){
  var g='',mob=o.mob,i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<text class="t" x="20" y="30">'+(mob?"DL60-250":"DL60-250, SCHEMATISCH")+'</text>';
  /* the scope frame and grid */
  g+='<g class="gd">';for(i=0;i<=8;i++)g+='<path d="M40 '+(50+i*50)+'H740"/>';for(i=0;i<=10;i++)g+='<path d="M'+(40+i*70)+' 50V450"/>';g+='</g>';
  g+='<path class="fr sD" d="M40 50H740V450H40Z"/>';
  /* step 1: three offset channels (triangle ripple) and their sum */
  var P=120,cls=["c1","c2","c3"];
  g+='<g id="hS1">';
  for(var k=0;k<3;k++){var d="",ph=k*P/3;for(x=60;x<=720;x+=2){var u=((x-60+ph)%P)/P,tri=u<.5?u*2:2-u*2;d+=(x===60?"M":"L")+x+" "+(190-60*tri).toFixed(1)}g+='<path class="tr '+cls[k]+'" d="'+d+'"/>'}
  var sd="";for(x=60;x<=720;x+=2){sd+=(x===60?"M":"L")+x+" "+(380+3*Math.sin((x-60)/(P/3)*Math.PI*2)).toFixed(2)}
  g+='<path class="tr sum" d="'+sd+'"/>';
  g+='<text class="t" x="56" y="94">'+(mob?"KANÄLE":"KANÄLE, VERSETZT")+'</text><text class="t" x="56" y="318">SUMME</text><text class="t s1" x="'+(mob?520:560)+'" y="350">RIPPLE 2 MHz</text>';
  g+='</g>';
  /* step 2: rectangular pulses, then CW */
  var pd="M60 400";for(x=80;x<440;x+=90){pd+="H"+x+"V180H"+(x+50)+"V400"}pd+="H520V180H720";
  g+='<g id="hS2"><path class="tr out" d="'+pd+'"/><path class="ref" d="M480 120V430"/>'+
    '<text class="t" x="56" y="94">'+(mob?"STROM":"LASERSTROM")+'</text><text class="t s1" x="80" y="158">'+(mob?"PULSE":"RECHTECKPULSE")+'</text><text class="t s1" x="540" y="158">CW</text></g>';
  /* step 3: temperature rises, the converter stops, the output is shorted, Power good drops */
  var td="";for(x=60;x<=720;x+=4){var y=x<=470?190-80*Math.pow((x-60)/410,1.6):110+28*(1-Math.exp(-(x-470)/90));td+=(x===60?"M":"L")+x+" "+y.toFixed(1)}
  g+='<g id="hS3"><path class="tr c3" d="'+td+'"/><path class="tr out" d="M60 256H470V300H720"/><path class="tr pg" d="M60 372H470V414H720"/><path class="ref" d="M470 100V430"/>'+
    '<text class="t" x="56" y="94">TEMPERATUR</text><text class="t" x="56" y="234">STROM</text><text class="t" x="56" y="352">POWER GOOD</text><text class="t s1" x="486" y="'+(mob?250:262)+'">'+(mob?"STOPP":"ABSCHALTUNG")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · MEHRKANAL</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · PULS / CW</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · SCHUTZ</text></g>';
  return g+'</svg>';
}
function scene(){return heScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),gd:$(".gd",svg),s1:$("#hS1",svg),s2:$("#hS2",svg),s3:$("#hS3",svg),d1:dl("#hS1 .tr"),d2:dl("#hS2 .tr"),d3:dl("#hS3 .tr"),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.gd,b)}
    /* step 1: channels draw in, then the sum */
    op(E.s1,b*(1-seg(p,.32,.37)));draw(E.d1.slice(0,3),b*seg(p,0,.14));draw(E.d1.slice(3),b*seg(p,.12,.26));
    /* step 2: pulses, then CW */
    op(E.s2,b*seg(p,.36,.41)*(1-seg(p,.64,.69)));draw(E.d2,b*seg(p,.38,.58));
    /* step 3: the fault sequence; every trace reaches its end point */
    op(E.s3,b*seg(p,.68,.73));draw(E.d3,b*seg(p,.7,.9));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.32,.37)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.64,.69)));op(E.l3,b*seg(p,.68,.74));
  };
}
