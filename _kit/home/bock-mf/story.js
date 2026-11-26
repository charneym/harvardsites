/* The story scene (BL/BY/DB): how a Bock pointing-roll machine (Anspitzwalzmaschine Typ DSM) makes a Ziehangel, as bock-mf.de >
   Produkte > Anspitzmaschinen > Draht describes it ("zur Herstellung von Ziehangeln an Drähten ... Die Typen (+ v) werden
   zusätzlich mit einem vertikalen Walzenpaar ausgestattet, wenn ein Drehen des Drahtes nicht möglich ist ... Individuelle
   Kalibrierungen sind möglich ... Richtwerk, mit dem das Drahtende 1-2 Meter gerichtet werden kann, um so das Anspitzen zu
   erleichtern"). ONE side view kept on screen, with the roll calibres seen from the front below it:
   Step 1 (Richten): the bent wire end runs through the straightening rolls and comes out straight.
   Step 2 (Einführen): the end enters the pointing rolls, in the largest calibre.
   Step 3 (Anspitzen): the rolls turn; calibre by calibre the end gets thinner (stepped point).
   Step 4 (Ziehen): the pointed end passes through the drawing die.
   Calibre count and sizes are illustrative. */
var SCW=760,SCH=520,WY=236,RCX=450,RR=62,DX0=636,DX1=700,TIP0=286,TIP1=478,TIP2=724;
var CAL=[[328,17],[380,13.5],[426,10.5],[466,8.2],[501,6.4],[532,4.8]];
function bkScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="bkW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef0f3"/><stop offset=".45" stop-color="#b9bfc8"/><stop offset="1" stop-color="#6d747e"/></linearGradient></defs>';
  /* the wire ring the end comes from */
  g+='<g class="coil">';for(i=0;i<5;i++)g+='<ellipse cx="'+(46+i*5)+'" cy="'+WY+'" rx="26" ry="88"/>';g+='</g>';
  /* straightening unit: staggered rolls */
  g+='<g class="sr"><rect class="frm" x="96" y="'+(WY-56)+'" width="164" height="112"/>';
  [[120,-1],[178,-1],[236,-1],[149,1],[207,1]].forEach(function(r){g+='<circle cx="'+r[0]+'" cy="'+(WY+r[1]*20)+'" r="13"/><circle class="hub" cx="'+r[0]+'" cy="'+(WY+r[1]*20)+'" r="3"/>'});
  g+='</g>';
  g+='<g id="bkLs"><text class="t" x="96" y="'+(WY-(mob?82:72))+'">RICHTWERK</text></g>';
  /* the wire (drawn per frame) */
  g+='<path id="bkWire" class="wire" d=""/>';
  /* pointing rolls, side view */
  g+='<g class="rolls">';[-1,1].forEach(function(s){var cy=WY+s*(RR+4);
    g+='<circle cx="'+RCX+'" cy="'+cy+'" r="'+RR+'"/><circle class="hub" cx="'+RCX+'" cy="'+cy+'" r="12"/>';
    g+='<g class="spk" id="bkSp'+(s<0?0:1)+'">';for(var k=0;k<6;k++){var a=k*Math.PI/3;g+='<path d="M'+(RCX+Math.cos(a)*18).toFixed(1)+' '+(cy+Math.sin(a)*18).toFixed(1)+'L'+(RCX+Math.cos(a)*50).toFixed(1)+' '+(cy+Math.sin(a)*50).toFixed(1)+'"/>'}g+='</g>'});
  g+='</g>';
  g+='<g id="bkLr"><text class="t" x="'+(RCX+RR+16)+'" y="'+(WY-RR-34)+'">'+(mob?"WALZEN":"KALIBERWALZEN")+'</text></g>';
  /* drawing die */
  g+='<g class="die"><path d="M'+DX0+' '+(WY-64)+'H'+DX1+'V'+(WY-4.6)+'H684L'+DX0+' '+(WY-17)+'Z"/><path d="M'+DX0+' '+(WY+64)+'H'+DX1+'V'+(WY+4.6)+'H684L'+DX0+' '+(WY+17)+'Z"/></g>';
  g+='<g id="bkLd"><text class="t" text-anchor="end" x="'+DX1+'" y="'+(WY+64+(mob?36:24))+'">ZIEHSTEIN</text></g>';
  /* calibres, front view of the two rolls */
  g+='<g class="cal"><rect x="300" y="404" width="262" height="36"/><rect x="300" y="440" width="262" height="36"/>';
  CAL.forEach(function(c){g+='<circle cx="'+c[0]+'" cy="440" r="'+c[1]+'"/>'});g+='</g>';
  g+='<circle id="bkCr" class="cring" cx="'+CAL[0][0]+'" cy="440" r="'+CAL[0][1]+'"/><circle id="bkCs" class="csec" cx="'+CAL[0][0]+'" cy="440" r="'+(CAL[0][1]-3)+'"/>';
  g+='<g id="bkLc"><text class="t" x="'+(mob?300:150)+'" y="'+(mob?512:444)+'">KALIBER</text></g>';
  return g+'</svg>';
}
function scene(){return bkScene({mob:MOBILE()?1:0})}
/* the stepped point: half-width by distance from the tip once fully pointed (6 = full wire) */
function bkPt(d){
  if(d>=84)return 6;if(d>=80)return 6-.8*(84-d)/4;if(d>=62)return 5.2;if(d>=58)return 5.2-.8*(62-d)/4;
  if(d>=42)return 4.4;if(d>=38)return 4.4-1.2*(42-d)/4;return 3.2}
function bkWireD(tipX,bend,tap){
  /* the wire from the coil to tipX: the end right of the straightener is bent upward while bend>0; it steps down toward the tip as tap goes 0->1 */
  var top=[],bot=[],x,x0=58,st=4;
  function cy(x){if(x<=262)return WY;var u=(x-262)/Math.max(40,tipX-262);return WY-bend*34*u*u}
  function hw(x){return 6-tap*(6-bkPt(tipX-x))}
  for(x=x0;x<tipX;x+=st){top.push([x,cy(x)-hw(x)]);bot.push([x,cy(x)+hw(x)])}
  top.push([tipX,cy(tipX)-hw(tipX)]);bot.push([tipX,cy(tipX)+hw(tipX)]);
  var d="M"+top.map(function(p){return p[0].toFixed(1)+" "+p[1].toFixed(2)}).join("L");
  d+="L"+bot.reverse().map(function(p){return p[0].toFixed(1)+" "+p[1].toFixed(2)}).join("L")+"Z";
  return d;
}
function storyDraw(svg){
  var E={wire:$("#bkWire",svg),Ls:$("#bkLs",svg),Lr:$("#bkLr",svg),Ld:$("#bkLd",svg),Lc:$("#bkLc",svg),Cr:$("#bkCr",svg),Cs:$("#bkCs",svg),
    Sp:[$("#bkSp0",svg),$("#bkSp1",svg)],sr:$(".sr",svg),rolls:$(".rolls",svg),die:$(".die",svg),cal:$(".cal",svg),base:$$(".coil,.sr,.rolls,.die,.cal,#bkWire",svg)};
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function hi(el,on){if(el)el.classList.toggle("hi",on)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)})}
    var s1=seg(p,.03,.2),s2=seg(p,.27,.42),s3=seg(p,.5,.7),s4=seg(p,.76,.94);
    var tip=TIP0+18*s1+(TIP1-TIP0-18)*s2+(TIP2-TIP1)*s4;
    E.wire.setAttribute("d",bkWireD(tip,1-s1,s3));
    /* labels: each stage is named while it works, and stays */
    op(E.Ls,b*(.45+.55*seg(p,0,.06)));op(E.Lr,b*(.45+.55*seg(p,.26,.32)));op(E.Ld,b*(.45+.55*seg(p,.74,.8)));op(E.Lc,b*(.45+.55*seg(p,.3,.36)));
    hi(E.sr,p<.25);hi(E.rolls,p>=.25&&p<.74);hi(E.die,p>=.74);hi(E.cal,p>=.25&&p<.74);
    /* the rolls turn while pointing */
    var ang=(s3*240+s4*120).toFixed(1);E.Sp[0].setAttribute("transform","rotate("+ang+" "+RCX+" "+(WY-RR-4)+")");E.Sp[1].setAttribute("transform","rotate("+(-ang)+" "+RCX+" "+(WY+RR+4)+")");
    /* the wire section steps through the calibres, largest to smallest */
    var ci=Math.min(CAL.length-1,Math.floor(s3*CAL.length*.999)),c=CAL[ci];
    E.Cr.setAttribute("cx",c[0]);E.Cr.setAttribute("r",c[1]);E.Cs.setAttribute("cx",c[0]);E.Cs.setAttribute("r",Math.max(2.6,c[1]-3));
    op(E.Cr,b*seg(p,.3,.36));op(E.Cs,b*seg(p,.3,.36));
  };
}
