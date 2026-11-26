/* The story scene (BL/BY/DB): a RAV fully welded ball valve in section, seen from above along the stem, as
   rav-valve.com > Produkte > Vollverschweißte Kugelhähne and Sicherheit und Technik describe it ("Zapfengelagerte
   Kugel", "Angefederte Sitzringe", "Metallisch- oder weichdichtend", "Ausblassichere Schaltwelle"; Fire-Safe: "metallische
   Dichtungssitze – ergänzt durch hitzebeständige Dichtungswerkstoffe – übernehmen die Notabdichtung", above +650 °C).
   ONE valve kept on screen:
   Step 1 (Offen): the ball's bore lines up with the line; the medium flows through.
   Step 2 (Drehen): the stem turns the ball through 90°; the downstream flow stops.
   Step 3 (Dichten): the two seat rings against the ball light up.
   Step 4 (Fire-Safe): heat rises around the shell; the soft inserts go, the metal seats keep sealing. */
var SCW=760,SCH=520,CX=380,CY=250,RO=150,RI=136,RB=104,HB=46,HW=58,X0=40,X1=720;
function rvScene(o){
  var g='',mob=o.mob,f=function(v){return (+v).toFixed(1)};
  var xo=Math.sqrt(RO*RO-HW*HW),xi=Math.sqrt(RI*RI-HB*HB),xb=Math.sqrt(RB*RB-HB*HB);
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g class="lbt"><text class="t" x="'+X0+'" y="70">'+(mob?"EINLASS":"EINLASS · DRUCKSEITE")+'</text><text class="t" x="'+X1+'" y="70" text-anchor="end">AUSLASS</text></g>';
  /* heat halo (step 4), drawn first so every stroke sits above it */
  g+='<g id="rvHeat"><circle class="heat" cx="'+CX+'" cy="'+CY+'" r="'+(RO+22)+'"/><circle class="heat2" cx="'+CX+'" cy="'+CY+'" r="'+(RO+40)+'"/></g>';
  /* flow (amber dashes), upstream / through the ball / downstream */
  g+='<path id="rvFa" class="flow" d="M'+(X0+14)+' '+CY+'H'+(CX-xb-18)+'"/>';
  g+='<path id="rvFb" class="flow" d="M'+(CX-xb+8)+' '+CY+'H'+(CX+xb-8)+'"/>';
  g+='<path id="rvFc" class="flow" d="M'+(CX+xb+18)+' '+CY+'H'+(X1-14)+'"/>';
  /* pipe walls and the welded shell */
  g+='<g class="wall">';
  g+='<path d="M'+X0+' '+(CY-HW)+'H'+f(CX-xo)+'M'+X0+' '+(CY+HW)+'H'+f(CX-xo)+'M'+f(CX+xo)+' '+(CY-HW)+'H'+X1+'M'+f(CX+xo)+' '+(CY+HW)+'H'+X1+'"/>';
  g+='<path d="M'+X0+' '+(CY-HB)+'H'+(CX-110)+'M'+X0+' '+(CY+HB)+'H'+(CX-110)+'M'+(CX+110)+' '+(CY-HB)+'H'+X1+'M'+(CX+110)+' '+(CY+HB)+'H'+X1+'"/>';
  g+='<path d="M'+X0+' '+(CY-HW)+'V'+(CY-HB)+'M'+X0+' '+(CY+HB)+'V'+(CY+HW)+'M'+X1+' '+(CY-HW)+'V'+(CY-HB)+'M'+X1+' '+(CY+HB)+'V'+(CY+HW)+'"/>';
  g+='<path d="M'+f(CX-xo)+' '+(CY-HW)+'A'+RO+' '+RO+' 0 0 1 '+f(CX+xo)+' '+(CY-HW)+'M'+f(CX-xo)+' '+(CY+HW)+'A'+RO+' '+RO+' 0 0 0 '+f(CX+xo)+' '+(CY+HW)+'"/>';
  g+='<path class="thin" d="M'+f(CX-xi)+' '+(CY-HB)+'A'+RI+' '+RI+' 0 0 1 '+f(CX+xi)+' '+(CY-HB)+'M'+f(CX-xi)+' '+(CY+HB)+'A'+RI+' '+RI+' 0 0 0 '+f(CX+xi)+' '+(CY+HB)+'"/>';
  g+='</g>';
  /* seat rings (sections above and below the bore, each side), with their soft inserts against the ball */
  var seats='',ins='';
  [[CX-110,CX-94],[CX+94,CX+110]].forEach(function(s,k){
    [[CY-HB-18,CY-HB],[CY+HB,CY+HB+18]].forEach(function(v){
      seats+='<rect x="'+s[0]+'" y="'+v[0]+'" width="'+(s[1]-s[0])+'" height="'+(v[1]-v[0])+'"/>';
      var ix=k?s[0]:s[1]-6;ins+='<rect x="'+ix+'" y="'+(v[0]+5)+'" width="6" height="8"/>';
    })});
  g+='<g class="seat">'+seats+'</g><g id="rvSeatOn" class="seatOn">'+seats+'</g><g id="rvIns" class="ins">'+ins+'</g>';
  /* the ball (rotates about the stem): two solid segments around the through bore, the stem drive on top */
  g+='<g id="rvBall"><path class="ball" d="M'+f(CX-xb)+' '+(CY-HB)+'A'+RB+' '+RB+' 0 0 1 '+f(CX+xb)+' '+(CY-HB)+'ZM'+f(CX-xb)+' '+(CY+HB)+'A'+RB+' '+RB+' 0 0 0 '+f(CX+xb)+' '+(CY+HB)+'Z"/>';
  g+='<rect class="drv" x="'+(CX-9)+'" y="'+(CY-26)+'" width="18" height="52"/></g>';
  g+='<circle class="stem" cx="'+CX+'" cy="'+CY+'" r="30"/>';
  /* upstream pressure held against the closed ball (step 2 on) */
  var ch='';for(var i=0;i<3;i++){var x=X0+40+i*44;ch+='<path d="M'+x+' '+(CY-12)+'L'+(x+12)+' '+CY+'L'+x+' '+(CY+12)+'"/>'}
  g+='<g id="rvPr" class="chev">'+ch+'</g>';
  /* labels, all in the free bands above and below the drawing (8px+ clear of every stroke) */
  g+='<g id="rvSo"><text class="ok" x="'+X1+'" y="470" text-anchor="end">OFFEN</text></g>';
  g+='<g id="rvSc"><text class="ok" x="'+X1+'" y="470" text-anchor="end">GESCHLOSSEN</text></g>';
  g+='<g id="rvSf"><text class="ok" x="'+X1+'" y="470" text-anchor="end">'+(mob?"&gt; 650 °C":"ÜBER +650 °C")+'</text></g>';
  var L=["1 · OFFEN","2 · DREHEN","3 · SITZRINGE","4 · FIRE-SAFE"];
  L.forEach(function(t,k){g+='<g id="lb'+(k+1)+'"><text class="a" x="'+X0+'" y="470">'+t+'</text></g>'});
  return g+'</svg>';
}
function scene(){return rvScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var mob=svg.classList.contains("mob");
  var E={ball:$("#rvBall",svg),Fa:$("#rvFa",svg),Fb:$("#rvFb",svg),Fc:$("#rvFc",svg),Pr:$("#rvPr",svg),On:$("#rvSeatOn",svg),Ins:$("#rvIns",svg),Heat:$("#rvHeat",svg),
    So:$("#rvSo",svg),Sc:$("#rvSc",svg),Sf:$("#rvSf",svg),lb:[1,2,3,4].map(function(k){return $("#lb"+k,svg)}),base:$$(".wall,.seat,.stem,.lbt",svg)};
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)});op(E.ball,b)}
    var th=90*seg(p,.28,.45);
    E.ball.setAttribute("transform","rotate("+th.toFixed(2)+" "+CX+" "+CY+")");
    var off=(-p*640).toFixed(1);[E.Fa,E.Fb,E.Fc].forEach(function(el){el.style.strokeDashoffset=off});
    op(E.Fa,b*seg(p,.02,.08)*(1-seg(p,.34,.42)));var dn=b*seg(p,.02,.08)*(1-seg(p,.28,.4));op(E.Fb,dn);op(E.Fc,dn);
    op(E.Pr,b*seg(p,.42,.5));
    op(E.On,b*seg(p,.52,.6));
    op(E.Ins,b*(1-seg(p,.8,.88)));
    op(E.Heat,b*seg(p,.77,.86));
    op(E.So,b*(1-seg(p,.27,.31)));op(E.Sc,b*seg(p,.42,.46)*(1-seg(p,.77,.81)));op(E.Sf,b*seg(p,.81,.86));
    for(var k=0;k<4;k++)op(E.lb[k],b*seg(p,k*.25,k*.25+.05)*(k<3?(1-seg(p,(k+1)*.25-.03,(k+1)*.25+.01)):1));
  };
}
