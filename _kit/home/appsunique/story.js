/* the story scene (BL/BY/DB): why PID sensors fail outdoors and what Heatwave™ does about it (appsunique.com: sensing
   technologies, "New Patent for Heatwave Issued"). ONE sensor stays on screen for all three steps, drawn once in fine line as a
   cross-section: filter on top, the ionisation chamber with its two electrodes, the lamp window and the VUV lamp, the base and
   pins; a signal plot on the right. Step 1 (ionise): gas molecules diffuse in through the filter, the lamp lights, they become
   ions and drift to the electrode, and a clean signal draws. Step 2 (condense): droplets gather on the electrodes and window and
   the signal wanders. Step 3 (Heatwave): the droplets go, gold heat lines run up the cell walls, and the signal is steady again.
   Schematic. Driven by the scrubbed story progress. */
var PS={x0:236,x1:436,y0:64,y1:318};
function psRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function psDrop(x,y,s){return '<path class="dr" transform="translate('+x+' '+y+') scale('+s+')" d="M0 -6C2.6 -2.4 4 .2 4 2.4A4 4 0 0 1 -4 2.4C-4 .2 -2.6 -2.4 0 -6Z"/>'}
function psWave(x,y0,y1,ph){var d='',i,n=40;for(i=0;i<=n;i++){var y=y0+(y1-y0)*i/n;d+=(i?'L':'M')+(x+4*Math.sin(i/n*Math.PI*6+ph)).toFixed(1)+' '+y.toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),g='',i,X0=PS.x0,X1=PS.x1,Y0=PS.y0,Y1=PS.y1;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'92 4 548 364':'128 4 504 364')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* can, inner wall, filter, chamber electrodes, window, lamp, base, pins */
  g+='<path class="tgf" d="M'+X0+' '+Y0+'H'+X1+'V'+(Y1-12)+'H'+X0+'Z"/>';
  g+='<path class="tg sD" d="M'+X0+' '+Y0+'H'+X1+'V'+(Y1-12)+'H'+X0+'Z"/>';
  g+='<path class="tc sD" d="M'+(X0+12)+' '+(Y0+16)+'V'+(Y1-24)+'M'+(X1-12)+' '+(Y0+16)+'V'+(Y1-24)+'"/>';
  var hz='';for(i=0;i<19;i++){var hx=X0+6+i*10.2;hz+='M'+hx.toFixed(1)+' '+(Y0+13)+'L'+(hx+7).toFixed(1)+' '+(Y0+3)}
  g+='<path class="tg sD" d="M'+X0+' '+(Y0+16)+'H'+X1+'"/><path class="tc sD" d="'+hz+'"/>';
  g+='<path class="tg sD" d="M272 98V188M400 98V188"/><path class="el sD" d="M266 98H278V188H266ZM394 98H406V188H394Z"/>';
  g+='<path class="tgf" d="M300 196H372V205H300Z"/><path class="tg sD" d="M300 196H372V205H300Z"/>';
  g+='<path class="tg sD" d="M304 205V276A32 22 0 0 0 368 276V205"/>';
  g+='<path class="tc sD" d="M318 214V268M354 214V268"/>';
  g+='<path class="tg sD" d="M'+X0+' '+(Y1-12)+'H'+X1+'V'+Y1+'H'+X0+'Z"/>';
  g+='<path class="tg sD" d="M282 '+Y1+'V352M336 '+Y1+'V352M390 '+Y1+'V352"/>';
  /* signal plot */
  g+='<path class="tc sD" d="M470 236H612M470 236V128"/><path class="tc sD" d="M406 143H470"/>';
  /* static labels, each >= 10px clear of any stroke */
  g+='<path class="tc sD" d="M232 143H266M232 252H304"/>';
  g+='<text class="t" x="222" y="'+(Y0+15)+'" text-anchor="end">FILTER</text>';
  g+='<text class="t" x="222" y="'+(mob?150:147)+'" text-anchor="end">ELECTRODE</text>';
  g+='<text class="t" x="222" y="'+(mob?259:256)+'" text-anchor="end">VUV LAMP</text>';
  g+='<text class="t" x="470" y="'+(mob?262:258)+'">SIGNAL</text>';
  g+='</g>';
  /* lamp glow and rays */
  g+='<g id="glow"><ellipse class="gl" cx="336" cy="244" rx="24" ry="30"/>';
  var rp='';for(i=0;i<5;i++){var rx=312+i*12;rp+='M'+rx+' 190V112'}
  g+='<path class="ray" d="'+rp+'"/></g>';
  /* molecules -> ions */
  g+='<g id="mol">';for(i=0;i<9;i++){var sx=262+i*19+psRand(i+3)*8,sy=46+psRand(i+11)*10,tx=296+psRand(i+21)*82,ty=110+psRand(i+31)*70;
    g+='<g class="m" data-s="'+sx.toFixed(1)+','+sy.toFixed(1)+'" data-t="'+tx.toFixed(1)+','+ty.toFixed(1)+'" transform="translate('+sx.toFixed(1)+' '+sy.toFixed(1)+')"><circle r="4.2"/><path d="M-2.2 0H2.2M0 -2.2V2.2"/></g>'}
  g+='</g>';
  /* droplets */
  g+='<g id="drops">'+psDrop(284,112,1.15)+psDrop(285,140,1)+psDrop(284,170,1.2)+psDrop(388,124,1.05)+psDrop(389,158,1.2)+psDrop(318,190,1)+psDrop(348,190,1.1)+psDrop(268,96,.95)+psDrop(404,96,.95)+'</g>';
  /* heat lines (Heatwave) */
  g+='<g id="heat"><path class="hw" d="'+psWave(X0+24,Y1-30,Y0+30,0)+'"/><path class="hw" d="'+psWave(X1-24,Y1-30,Y0+30,1.6)+'"/></g>';
  /* traces */
  g+='<path class="tr" id="tr1" d="M476 226C496 226 504 176 524 170S584 168 606 167"/>';
  g+='<path class="tr2" id="tr2" d="M476 226C490 222 496 178 512 182S528 150 540 160S556 204 570 190S588 140 606 150"/>';
  g+='<path class="tr3" id="tr3" d="M476 226C496 226 504 176 524 170S584 168 606 167"/>';
  /* step labels in the clear band above */
  var lyy=mob?30:30,lx2=mob?366:140,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a w" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'A PID SENSOR':'A PID SENSOR, IN SECTION')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'VUV LIGHT IONISES VOCS':'VUV LIGHT IONISES VOCS · IONS MAKE THE SIGNAL')+'</text></g>';
  g+='<g id="lb2"><text class="a w" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'MOISTURE CONDENSES':'MOISTURE CONDENSES · THE SIGNAL DRIFTS')+'</text></g>';
  g+='<g id="lb3"><text class="a g" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'HEATWAVE™ STOPS IT':'PATENTED HEATWAVE™ STOPS THE CONDENSATION')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .tgf",svg),glow:$("#glow",svg),mol:$("#mol",svg),ms:$$("#mol .m",svg),
    drops:$$("#drops .dr",svg),heat:dl("#heat .hw"),tr1:dl("#tr1"),tr2:dl("#tr2"),tr3:dl("#tr3"),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.ms.forEach(function(d){var s=d.getAttribute("data-s").split(","),t=d.getAttribute("data-t").split(",");d._s=[+s[0],+s[1]];d._t=[+t[0],+t[1]]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: molecules diffuse in, the lamp lights, they turn to ions and drift to the left electrode */
    var lamp=seg(p,.08,.16);op(E.glow,b*lamp);op(E.mol,b);
    E.ms.forEach(function(d,i){var v=seg(p,.02+i*.008,.14+i*.008),w=seg(p,.17+i*.01,.3+i*.008);
      var x=d._s[0]+(d._t[0]-d._s[0])*v,y=d._s[1]+(d._t[1]-d._s[1])*v;x+=(286-x)*w;
      d.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");d.classList.toggle("on",v>.9&&lamp>.5);
      d.style.opacity=(1-.75*w).toFixed(3)});
    draw(E.tr1,b*seg(p,.18,.32));op(E.tr1[0][0],1-seg(p,.36,.42));
    /* step 2: droplets gather, the signal wanders */
    var dIn=seg(p,.38,.52),dOut=seg(p,.68,.78);
    E.drops.forEach(function(c,i){var v=seg(p,.38+i*.014,.46+i*.014)*(1-dOut);c.style.opacity=v.toFixed(3);c.setAttribute("data-v",v>.5?1:0)});
    draw(E.tr2,seg(p,.42,.6));op(E.tr2[0][0],1-dOut);
    /* step 3: heat lines rise up the cell walls, the droplets go, the signal is steady */
    draw(E.heat,seg(p,.66,.8));draw(E.tr3,seg(p,.76,.9));
    op(E.l0,b*(1-seg(p,.03,.08)));op(E.l1,b*seg(p,.09,.14)*(1-seg(p,.33,.37)));op(E.l2,b*seg(p,.39,.44)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.71,.76));
  };
}
