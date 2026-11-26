/* The story scene (BL/BY/DB): one cable assembly made in the steps sherwoodelectronics.co.uk describes ("In-House Production
   of Customer Drawing", "Rapid Prototyping - First Off Sample Approval"; the Wirmec AM310 Quattro "Cut, Strip and Terminate";
   crimp termination and "crimp pull test", the Cirris CR guided assembly; "continuity and short circuits at each connection,
   Dielectric withstand test / Hipot"). ONE side elevation of a three-wire assembly (the wires in the logo's blue, green and
   amber), kept on screen:
   Step 1 (Drawing): the outline and the length dimension are drawn.
   Step 2 (Strip): the wires are cut to length and both ends stripped to bare copper.
   Step 3 (Crimp): terminals slide onto the copper, then the connector housings close over them.
   Step 4 (Test): a test signal runs down each wire; continuity, shorts and hipot are ticked off.
   Sizes are illustrative. */
var SCW=760,SCH=520,WY=[160,250,340],X0=130,X1=630,SL=30,HX0=62,HX1=698,HT=112,HH=276;
function frScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="swsc'+(mob?" mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* step 1: the drawing (outline of wires and housings, dimension line with extension lines and arrows) */
  g+='<g id="swOl">';
  WY.forEach(function(y){g+='<rect class="ol" x="'+X0+'" y="'+(y-11)+'" width="'+(X1-X0)+'" height="22"/>'});
  g+='<rect class="ol" x="'+HX0+'" y="'+HT+'" width="'+(X0-HX0)+'" height="'+HH+'"/><rect class="ol" x="'+X1+'" y="'+HT+'" width="'+(HX1-X1)+'" height="'+HH+'"/></g>';
  g+='<path class="ext" id="swEx" d="M'+X0+' 58V104M'+X1+' 58V104"/>';
  g+='<path class="dim" id="swDm" d="M'+X0+' 72H'+X1+'"/>';
  g+='<g id="swAr"><path class="arr" d="M'+X0+' 72l11 -5v10z"/><path class="arr" d="M'+X1+' 72l-11 -5v10z"/></g>';
  g+='<g id="swLd"><text class="t" text-anchor="middle" x="'+((X0+X1)/2)+'" y="'+(mob?50:56)+'">LENGTH</text></g>';
  /* step 2: insulation, bare copper ends, blade marks */
  g+='<g id="swIn">';
  WY.forEach(function(y,k){g+='<path class="ins w'+k+'" d="M'+(X0+SL)+' '+y+'H'+(X1-SL)+'"/>'});
  g+='</g><g id="swCu">';
  WY.forEach(function(y){[X0,X1-SL].forEach(function(x){g+='<rect class="cu" x="'+x+'" y="'+(y-7)+'" width="'+SL+'" height="14"/>';
    for(i=0;i<3;i++)g+='<path class="st" d="M'+x+' '+(y-3.5+i*3.5)+'H'+(x+SL)+'"/>'})});
  g+='</g><g id="swBl"><path class="bl" d="M'+(X0+SL)+' 104V396M'+(X1-SL)+' 104V396"/></g>';
  /* step 3: terminals (left and right groups move in), then the housings */
  g+='<g id="swTl">';WY.forEach(function(y){g+='<rect class="tm" x="'+(X0-14)+'" y="'+(y-10)+'" width="'+(SL+26)+'" height="20"/><path class="tmb" d="M'+(X0+SL+2)+' '+(y-12)+'V'+(y+12)+'"/>'});g+='</g>';
  g+='<g id="swTr">';WY.forEach(function(y){g+='<rect class="tm" x="'+(X1-SL-12)+'" y="'+(y-10)+'" width="'+(SL+26)+'" height="20"/><path class="tmb" d="M'+(X1-SL-4)+' '+(y-12)+'V'+(y+12)+'"/>'});g+='</g>';
  g+='<g id="swHs"><rect class="hs" x="'+HX0+'" y="'+HT+'" width="'+(X0-HX0)+'" height="'+HH+'"/><rect class="hs" x="'+X1+'" y="'+HT+'" width="'+(HX1-X1)+'" height="'+HH+'"/>';
  WY.forEach(function(y){g+='<rect class="cav" x="'+(HX0+9)+'" y="'+(y-13)+'" width="'+(X0-HX0-18)+'" height="26"/><rect class="cav" x="'+(X1+9)+'" y="'+(y-13)+'" width="'+(HX1-X1-18)+'" height="26"/>'});
  g+='<path class="lat" d="M130 140h10v220h-10M630 140h-10v220h10"/></g>';
  /* step 4: test signal along each wire, ticks per wire, and the readout */
  WY.forEach(function(y,k){g+='<path class="sig" id="swS'+k+'" d="M'+X0+' '+y+'H'+X1+'"/>'});
  g+='<g id="swOk">';WY.forEach(function(y){g+='<path class="ok" d="M714 '+y+'l7 7l14 -15"/>'});g+='</g>';
  /* band labels for steps 1-3 and the step-4 readout (on phones in one column) */
  var BY=mob?440:452;
  g+='<g id="swB1"><text class="t" x="62" y="'+BY+'">DRAWING · FIRST-OFF SAMPLE</text></g>';
  g+='<g id="swB2"><text class="t" x="62" y="'+BY+'">CUT · STRIP · 26 TO 11 AWG</text></g>';
  g+='<g id="swB3"><text class="t" x="62" y="'+BY+'">CRIMP · PULL TEST · HOUSING</text></g>';
  var R=mob?[[62,440],[62,476],[62,512]]:[[62,452],[302,452],[502,452]],CK=mob?[300,300,300]:[0,0,0];
  g+='<g id="swRd">';["CONTINUITY","SHORTS","HIPOT"].forEach(function(s,k){var cx=mob?CK[k]:R[k][0]+(k===0?118:k===1?80:66);
    g+='<text class="t" x="'+R[k][0]+'" y="'+R[k][1]+'">'+s+'</text><path class="ok rk" d="M'+cx+' '+(R[k][1]-7)+'l5 5l10 -11"/>'});g+='</g>';
  return g+'</svg>';
}
function scene(){return frScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ol:q("#swOl"),ex:q("#swEx"),dm:q("#swDm"),ar:q("#swAr"),ld:q("#swLd"),ins:q("#swIn"),cu:q("#swCu"),bl:q("#swBl"),tl:q("#swTl"),tr:q("#swTr"),hs:q("#swHs"),
    ok:q("#swOk"),b1:q("#swB1"),b2:q("#swB2"),b3:q("#swB3"),rd:q("#swRd"),sg:[q("#swS0"),q("#swS1"),q("#swS2")],rk:[].slice.call(svg.querySelectorAll("#swRd .rk")),oks:[].slice.call(svg.querySelectorAll("#swOk .ok"))};
  var D=[E.dm,E.ex].concat(E.sg),len=D.map(function(c){return c.getTotalLength()});
  D.forEach(function(c,i){c.style.strokeDasharray=len[i]+" "+len[i];c.style.strokeDashoffset=len[i]});
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function dr(i,k){D[i].style.strokeDashoffset=(len[i]*(1-k)).toFixed(1)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1 (0-.25): outline and dimension draw in; they fade back once the real wires appear */
    var s1=seg(p,.02,.16),s1b=seg(p,.1,.22),out1=seg(p,.3,.4);
    op(E.ol,b*seg(p,0,.08)*(1-.75*out1));dr(1,s1);dr(0,s1b);op(E.ex,b*(1-.6*out1));op(E.dm,b*(1-.6*out1));op(E.ar,b*seg(p,.2,.23)*(1-.6*out1));op(E.ld,b*seg(p,.2,.24)*(1-seg(p,.27,.3)));
    op(E.b1,b*(1-seg(p,.24,.27)));
    /* step 2 (.25-.5): insulation, then the stripped copper and a blade flash */
    op(E.ins,b*seg(p,.27,.33));op(E.cu,b*seg(p,.34,.4));op(E.bl,b*seg(p,.33,.36)*(1-seg(p,.4,.44)));
    op(E.b2,b*seg(p,.27,.3)*(1-seg(p,.49,.52)));
    /* step 3 (.5-.75): terminals slide on, then the housings close */
    var t3=seg(p,.52,.62);
    E.tl.setAttribute("transform","translate("+(-40*(1-t3)).toFixed(1)+" 0)");E.tr.setAttribute("transform","translate("+(40*(1-t3)).toFixed(1)+" 0)");
    op(E.tl,b*seg(p,.51,.55));op(E.tr,b*seg(p,.51,.55));op(E.hs,b*seg(p,.64,.71));
    op(E.b3,b*seg(p,.52,.55)*(1-seg(p,.74,.77)));
    /* step 4 (.75-1): signal down each wire in turn, a tick at its end, then the readout */
    for(var k=0;k<3;k++){var sk=seg(p,.77+k*.05,.85+k*.05);dr(2+k,sk);op(E.sg[k],b*seg(p,.76,.78));op(E.oks[k],b*seg(p,.84+k*.05,.86+k*.05))}
    op(E.ok,b);op(E.rd,b*seg(p,.77,.8));
    E.rk.forEach(function(r,k){op(r,seg(p,.86+k*.03,.89+k*.03))});
  };
}
