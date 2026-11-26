/* The story scene (BL/BY/DB): an ETM motor tester seen from the side, as a schematic drawn from mav-germany.de (Produkte >
   Motorgeräte, Werkzeuge: Messpunktseite = starre Seite der Lastmesszelle, Abzugseite = beweglicher Lastschlitten; Bruchstopp,
   Kraft-Weg-Verläufe, RS232 / Ethernet). One machine stays on screen for all three steps:
   Step 1 (Einspannen): the machine draws, the crimped lug goes onto the measuring-side pin and the wire into the pull-side jaw.
   Step 2 (Ziehen): the load slide travels right, the wire tightens, the force-travel curve draws beneath.
   Step 3 (Auswerten): the crimp lets go at the peak, the slide stops (Bruchstopp), Fmax holds and the data go out.
   Schematic: no claims about the exact internal layout. */
var SCW=760,SCH=520;
function mvScene(o){
  var g='',mob=o.mob,T=function(x,y,s,c,a){return '<text class="t'+(c?" "+c:"")+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+=T(40,mob?40:38,mob?"ETM, SCHEMA":"ETM-MOTORGERÄT, SCHEMATISCHE SEITENANSICHT");
  /* machine: bed, load cell, spindle, motor */
  g+='<path class="hs sD" d="M40 236H720M40 236V256H720V236"/>';
  g+='<path class="hs sD" d="M60 236V128H140V236"/>';
  g+='<path class="hs sD" d="M520 206H690M520 214H690"/>';
  g+='<path class="hs sD" d="M690 160H720V236H690Z"/>';
  /* measuring-side pin and the crimped lug */
  g+='<path class="tool" d="M140 176H170V196H140Z"/><path class="pin" d="M156 160V212"/>';
  g+='<g id="mvLug"><path class="lug" d="M146 180A10 10 0 1 1 166 180V192A10 10 0 1 1 146 192Z"/><path class="lug" d="M166 182H196V190H166Z"/><path class="brl" d="M196 178H246V194H196Z"/><path class="cr" d="M210 178V194M226 178V194"/></g>';
  /* the wire: from the barrel to the pull-side jaw (its end follows the slide) */
  g+='<path id="mvW" class="wire" d="M246 186H430"/>';
  g+='<g id="mvS"><path class="slide" d="M420 206H520V236H420Z"/><path class="tool" d="M426 168H462V182H426ZM426 190H462V206H426Z"/><path class="hs" d="M520 210H540"/></g>';
  /* the force-travel chart */
  var X0=80,X1=700,Y0=470,Y1=300;
  g+='<path class="ax sD" d="M'+X0+' '+(Y1-12)+'V'+Y0+'H'+(X1+8)+'"/>';
  var pts=[],i,s,f;for(i=0;i<=120;i++){s=i/120;f=s<.76?(1-Math.exp(-s*4.2))/(1-Math.exp(-.76*4.2))*(1-.06*Math.sin(s*9)):s<.8?1-(s-.76)/.04*.92:.08*Math.max(0,1-(s-.8)/.05);pts.push([X0+s*(X1-X0),Y0-f*(Y0-Y1-14)])}
  g+='<path id="mvC" class="cv" d="M'+pts.map(function(p){return p[0].toFixed(1)+' '+p[1].toFixed(1)}).join("L")+'"/>';
  var px=X0+.76*(X1-X0),py=Y1+14;
  g+='<g id="mvPk"><path class="pk" d="M'+X0+' '+py+'H'+px+'"/><circle class="pkd" cx="'+px+'" cy="'+py+'" r="5"/>'+T(px+14,py+5,"F MAX","s1")+'</g>';
  g+=T(X0+8,Y1-2,mob?"F":"KRAFT F")+T(X1+8,Y0+26,mob?"s":"WEG s",null,"end");
  /* step labels and annotations */
  g+='<g id="mvL1">'+T(60,118,mob?"MESSPUNKT":"MESSPUNKTSEITE","s1")+(mob?"":T(100,276,"LASTMESSZELLE",null,"middle"))+'</g>';
  g+='<g id="mvL2">'+T(470,150,mob?"ABZUG":"ABZUGSEITE","s1","middle")+(mob?"":T(605,196,"SPINDEL",null,"middle"))+'</g>';
  g+='<g id="mvL3">'+T(mob?720:720,mob?118:118,mob?"RS232 · LAN":"RS232 · ETHERNET → mavSTAT","s1","end")+'</g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · EINSPANNEN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · ZIEHEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · AUSWERTEN</text></g>';
  return g+'</svg>';
}
function scene(){return mvScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fix:$$(".tool,.pin,.slide",svg),lug:$("#mvLug",svg),W:$("#mvW",svg),S:$("#mvS",svg),C:dl("#mvC"),pk:$("#mvPk",svg),
    L1:$("#mvL1",svg),L2:$("#mvL2",svg),L3:$("#mvL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.fix.forEach(function(el){op(el,b)})}
    /* step 1: the lug goes onto the pin, the wire into the jaw */
    var ins=seg(p,.06,.22);op(E.lug,b*ins);op(E.W,b*seg(p,.14,.26));
    op(E.L1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));
    /* step 2: the slide travels right while the curve draws; at the peak the crimp gives and the slide stops */
    var tr=seg(p,.4,.78),dx=Math.min(tr/.8,1)*70;
    E.S.setAttribute("transform","translate("+dx.toFixed(1)+" 0)");
    var brk=tr>=.8;
    E.W.setAttribute("d",brk?"M262 186H"+(430+dx).toFixed(1):"M246 186H"+(430+dx).toFixed(1));
    E.W.classList.toggle("brk",brk);
    draw(E.C,b*tr);
    op(E.L2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));
    /* step 3: Fmax holds, the data go out */
    op(E.pk,b*seg(p,.78,.86));op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
