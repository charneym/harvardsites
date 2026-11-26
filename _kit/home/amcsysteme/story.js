/* The story scene (BL/BY/DB): AMC iFactoryX, "Vom Sensor zur Visualisierung" (amc-systeme.de > AMC iFactoryX and the
   iFactoryX training of that name), drawn as ONE line drawing kept on screen for all three steps:
   Step 1 (Erfassen): an electric motor on its foot with a vibration sensor on the housing; the sensor's signal draws in.
   Step 2 (Übertragen): the reading travels by radio (LoRaWAN) to an edge-IoT gateway on its DIN rail, which passes it on.
   Step 3 (Visualisieren): a web dashboard on an industrial monitor draws the vibration trace and the OEE bars. */
var SCW=760,SCH=520;
function amScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="16 78 744 440" aria-hidden="true"><defs>'+
    '<linearGradient id="amBd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5f3ee" stop-opacity=".14"/><stop offset=".5" stop-color="#f5f3ee" stop-opacity=".04"/><stop offset="1" stop-color="#f5f3ee" stop-opacity=".1"/></linearGradient></defs>';
  g+='<text class="t" x="36" y="98">'+(mob?"SCHEMATISCH":"IFACTORYX, SCHEMATISCH")+'</text>';
  /* the motor: housing with cooling fins, end shield, shaft, foot */
  g+='<path class="body" d="M50 300H250V420H50Z"/>';
  var fins="";for(i=0;i<14;i++){var fx=62+i*13.5;fins+="M"+fx.toFixed(1)+" 304V416"}
  g+='<path class="fin sD" d="'+fins+'"/>';
  g+='<path class="edge sD" d="M50 300H250V420H50Z"/><path class="edge sD" d="M250 316H276V404H250"/><path class="edge sD" d="M276 348H318V372H276"/>';
  g+='<path class="edge sD" d="M70 420L60 446H240L230 420"/><path class="edge sD" d="M36 446H264"/>';
  /* the sensor on the housing, with its cable up to a small radio module */
  g+='<path class="sen sD" d="M138 300V292H162V300M142 292V262H158V292M145 262V250H155V262"/>';
  /* step 1: the vibration signal beside the sensor */
  var sw="M176 236";for(i=0;i<=40;i++){var sx=176+i*3,sy=236-15*Math.sin(i*.9)*Math.exp(-i/30);sw+="L"+sx.toFixed(1)+" "+sy.toFixed(1)}
  g+='<path id="amSig" class="sig" d="'+sw+'"/>';
  /* step 2: radio arcs from the sensor, the packet path, the gateway on its DIN rail */
  g+='<g id="amRad"><path class="rad" d="M138 232A16 16 0 0 1 162 232"/><path class="rad" d="M130 222A28 28 0 0 1 170 222"/><path class="rad" d="M122 212A40 40 0 0 1 178 212"/></g>';
  g+='<path id="amPath" class="pth" d="M150 196C200 120 300 120 372 176"/>';
  g+='<circle id="amPk" class="pk" cx="0" cy="0" r="5"/>';
  g+='<path class="body" d="M372 150H476V262H372Z"/>';
  g+='<path class="edge sD" d="M372 150H476V262H372Z"/><path class="edge sD" d="M352 270H496M352 280H496"/><path class="edge sD" d="M384 262V270M464 262V270"/><path class="edge sD" d="M460 150V112"/>';
  g+='<path class="fin sD" d="M386 170H444M386 180H444M386 190H444"/>';
  g+='<g id="amLed"><circle class="led" cx="392" cy="236" r="3.5"/><circle class="led" cx="406" cy="236" r="3.5"/><circle class="led" cx="420" cy="236" r="3.5"/></g>';
  g+='<path id="amPath2" class="pth" d="M476 206H540"/>';
  /* step 3: the monitor with the dashboard */
  g+='<path class="body" d="M540 120H740V290H540Z"/>';
  g+='<path class="edge sD" d="M540 120H740V290H540Z"/><path class="edge sD" d="M628 290V320M652 290V320M600 324H680"/>';
  var tr="M556 184";for(i=0;i<=56;i++){var tx=556+i*3,ty=184-(14*Math.sin(i*.75)+7*Math.sin(i*2.1+1))*(.55+.45*Math.sin(i*.12));tr+="L"+tx.toFixed(1)+" "+ty.toFixed(1)}
  g+='<path id="amTr" class="trc" d="'+tr+'"/><path id="amAx" class="ax" d="M556 214H724"/>';
  g+='<g id="amBars">';var BH=[38,30,44,26,40,34,46,36];BH.forEach(function(v,j){g+='<rect class="bar" x="'+(560+j*20)+'" y="'+(276-v)+'" width="11" height="'+v+'"/>'});g+='</g>';
  /* labels, per step (below their objects, clear of every stroke) */
  g+='<g id="amL1"><text class="t" x="36" y="474">'+(mob?"MOTOR":"MOTOR · ANLAGE")+'</text><text class="t s1" x="36" y="'+(mob?500:496)+'">'+(mob?"BIS 3 kHz":"SENSOR · BIS 3 kHz")+'</text></g>';
  g+='<g id="amL2"><text class="t" x="352" y="306">'+(mob?"GATEWAY":"EDGE-IOT-GATEWAY")+'</text><text class="t s1" x="352" y="'+(mob?332:328)+'">'+(mob?"LoRaWAN":"LoRaWAN · MQTT · OPC UA")+'</text></g>';
  g+='<g id="amL3"><text class="t" x="540" y="110">DASHBOARD</text><text class="t s1" x="540" y="'+(mob?358:350)+'">'+(mob?"OEE":"OEE · ALARME · PHM")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+(mob?400:470)+'" y="508">1 · ERFASSEN</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?400:470)+'" y="508">2 · ÜBERTRAGEN</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?400:470)+'" y="508">3 · VISUALISIEREN</text></g>';
  return g+'</svg>';
}
function scene(){return amScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),bodies:$$(".body",svg),sig:dl("#amSig"),sigEl:$("#amSig",svg),rad:$("#amRad",svg),path:dl("#amPath"),pathEl:$("#amPath",svg),pk:$("#amPk",svg),
    led:$("#amLed",svg),path2:dl("#amPath2"),path2El:$("#amPath2",svg),tr:dl("#amTr"),trEl:$("#amTr",svg),ax:$("#amAx",svg),bars:$$("#amBars rect",svg),
    L1:$("#amL1",svg),L2:$("#amL2",svg),L3:$("#amL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var PL=E.pathEl.getTotalLength(),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    E.bodies.forEach(function(el){op(el,b)});
    /* step 1: the sensor's signal draws in, and stays */
    op(E.sigEl,b*seg(p,.03,.08));draw(E.sig,b*seg(p,.04,.26));
    op(E.L1,b*seg(p,.02,.1));
    /* step 2: radio arcs, a packet along the path to the gateway, the LEDs, on to the monitor */
    op(E.rad,b*seg(p,.36,.42));
    op(E.pathEl,b*seg(p,.36,.4));draw(E.path,b*seg(p,.38,.54));
    var k=seg(p,.4,.58),pt=E.pathEl.getPointAtLength(PL*k);
    E.pk.setAttribute("cx",pt.x.toFixed(1));E.pk.setAttribute("cy",pt.y.toFixed(1));op(E.pk,b*seg(p,.4,.43)*(1-seg(p,.56,.6)));
    op(E.led,b*seg(p,.56,.6));
    op(E.path2El,b*seg(p,.58,.6));draw(E.path2,b*seg(p,.58,.64));
    op(E.L2,b*seg(p,.38,.46));
    /* step 3: the dashboard draws the trace and the bars */
    op(E.trEl,b*seg(p,.68,.72));draw(E.tr,b*seg(p,.69,.88));op(E.ax,b*seg(p,.68,.74));
    E.bars.forEach(function(r,j){var v=seg(p,.72+j*.02,.8+j*.02);r.style.opacity=(b*v).toFixed(3);r.style.transformOrigin="center bottom";r.style.transformBox="fill-box";r.style.transform="scaleY("+v.toFixed(3)+")"});
    op(E.L3,b*seg(p,.68,.76));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
