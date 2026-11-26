/* The story scene (BL/BY/DB): a GIMAC micro-plant for tubes up to 3 layers, drawn as a side elevation in fine line, as
   gimac.com > Prodotti > "Micro impianto per tubi fino a 3 strati" describes it (3 micro-extruders Ø12, 1 head, 1 vacuum
   calibrating unit with cooling unit, 1 haul-off; OD 1 to 4 mm). ONE plant kept on screen:
   Step 1 (Granuli): pellets drop from the hopper into the screw.
   Step 2 (Fusione): the three heater bands warm up; the melt fills the barrel.
   Step 3 (Testa): the two co-extruders feed the head; three layers leave it; the 3-layer section appears.
   Step 4 (Calibro): the tube runs through the vacuum calibration tank and the haul-off. */
var SCW=760,SCH=520,TY=255,X0=40,X1=720,HX=470,HX2=540;
function gmScene(o){
  var g='',mob=o.mob,i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g class="lbt"><text class="t" x="'+X0+'" y="46">'+(mob?"MICRO-ESTRUSORE Ø12":"MICRO-ESTRUSORE Ø12 · 3 ZONE")+'</text></g>';
  /* heater glow (step 2), first so every stroke sits above it */
  var hz=[[180,250],[270,340],[360,430]],hg='';
  hz.forEach(function(z){hg+='<rect class="hglow" x="'+(z[0]-6)+'" y="'+(TY-44)+'" width="'+(z[1]-z[0]+12)+'" height="88"/>'});
  g+='<g id="gmHeat">'+hg+'</g>';
  /* melt filling the bore (step 2), and the three layers through the head and out (step 3-4) */
  g+='<rect id="gmMelt" class="melt" x="230" y="'+(TY-13)+'" width="0" height="26"/>';
  g+='<g id="gmCo" class="co"><path id="gmCoA" d="M505 130V'+(TY-30)+'Q505 '+(TY-8)+' '+HX2+' '+(TY-8)+'"/><path id="gmCoB" d="M505 380V'+(TY+30)+'Q505 '+(TY+8)+' '+HX2+' '+(TY+8)+'"/></g>';
  g+='<g id="gmTube" class="tube"><path id="gmT1" d="M'+HX2+' '+(TY-12)+'H'+HX2+'"/><path id="gmT2" d="M'+HX2+' '+(TY+12)+'H'+HX2+'"/><path id="gmT3" class="mid" d="M'+HX2+' '+(TY-7)+'H'+HX2+'"/><path id="gmT4" class="mid" d="M'+HX2+' '+(TY+7)+'H'+HX2+'"/></g>';
  /* the plant in line: hopper, feed throat, barrel and bore, three finned heater bands, head, co-extruders, tank, haul-off */
  g+='<g class="wall">';
  g+='<path d="M92 92H176L148 168H120Z"/>';
  g+='<path d="M104 168H164V'+(TY-26)+'H104Z"/>';
  g+='<path d="M60 '+(TY-26)+'H'+HX+'M60 '+(TY+26)+'H'+HX+'M60 '+(TY-26)+'V'+(TY+26)+'"/>';
  g+='<path class="thin" d="M104 '+(TY-14)+'H'+HX+'M104 '+(TY+14)+'H'+HX+'"/>';
  hz.forEach(function(z){g+='<path d="M'+z[0]+' '+(TY-40)+'H'+z[1]+'V'+(TY-26)+'M'+z[0]+' '+(TY-40)+'V'+(TY-26)+'M'+z[0]+' '+(TY+40)+'H'+z[1]+'V'+(TY+26)+'M'+z[0]+' '+(TY+40)+'V'+(TY+26)+'"/>';
    var fn='';for(x=z[0]+10;x<z[1];x+=10)fn+='M'+x+' '+(TY-40)+'V'+(TY-30)+'M'+x+' '+(TY+40)+'V'+(TY+30);g+='<path class="thin" d="'+fn+'"/>'});
  g+='<path d="M'+HX+' '+(TY-50)+'H'+HX2+'V'+(TY+50)+'H'+HX+'Z"/>';
  g+='<path d="M490 90H520V'+(TY-50)+'M490 90V'+(TY-50)+'M490 '+(SCH-100)+'H520V'+(TY+50)+'M490 '+(SCH-100)+'V'+(TY+50)+'"/>';
  g+='</g>';
  /* the screw flight inside the bore (turns, as a running dash) */
  var sf='M112 '+(TY-12);for(x=126;x<=HX-6;x+=14)sf+='L'+x+' '+(((x-112)/14)%2?TY+12:TY-12);
  g+='<path id="gmScrew" class="screw" d="'+sf+'"/>';
  /* pellets (step 1) */
  var pl='';for(i=0;i<9;i++)pl+='<rect class="pel" width="7" height="7" x="0" y="0"/>';
  g+='<g id="gmPel">'+pl+'</g>';
  /* vacuum calibration tank and haul-off (step 4) */
  g+='<g id="gmCal" class="cal"><path d="M572 '+(TY-34)+'H672V'+(TY+34)+'H572Z"/><path class="w" d="M576 '+(TY+24)+'Q590 '+(TY+19)+' 604 '+(TY+24)+'T632 '+(TY+24)+'T660 '+(TY+24)+'"/></g>';
  g+='<g id="gmHo" class="cal"><rect x="686" y="'+(TY-36)+'" width="34" height="18"/><rect x="686" y="'+(TY+18)+'" width="34" height="18"/></g>';
  /* the 3-layer section (step 3 on), top right, clear of every stroke */
  g+='<g id="gmX" class="xs"><circle class="o" cx="650" cy="118" r="42"/><circle class="m" cx="650" cy="118" r="31"/><circle class="i" cx="650" cy="118" r="20"/></g>';
  /* labels, all in the free band below the drawing (8px+ clear of every stroke) */
  var S=[mob?"E POLVERI":"GRANULI O POLVERI","3 ZONE",mob?"3 STRATI":"FINO A 3 STRATI",mob?"OD 1–4 MM":"OD DA 1 A 4 MM"];
  S.forEach(function(t,k){g+='<g id="gs'+(k+1)+'"><text class="ok" x="'+X1+'" y="490" text-anchor="end">'+t+'</text></g>'});
  var L=["1 · GRANULI","2 · FUSIONE","3 · TESTA","4 · CALIBRO"];
  L.forEach(function(t,k){g+='<g id="lb'+(k+1)+'"><text class="a" x="'+X0+'" y="490">'+t+'</text></g>'});
  return g+'</svg>';
}
function scene(){return gmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={Heat:$("#gmHeat",svg),Melt:$("#gmMelt",svg),Co:$("#gmCo",svg),CoA:$("#gmCoA",svg),CoB:$("#gmCoB",svg),Tube:$("#gmTube",svg),T:[1,2,3,4].map(function(k){return $("#gmT"+k,svg)}),
    Screw:$("#gmScrew",svg),Pel:$$("#gmPel rect",svg),PelG:$("#gmPel",svg),Cal:$("#gmCal",svg),Ho:$("#gmHo",svg),X:$("#gmX",svg),
    st:[1,2,3,4].map(function(k){return $("#gs"+k,svg)}),lb:[1,2,3,4].map(function(k){return $("#lb"+k,svg)}),base:$$(".wall,.lbt,.screw",svg)};
  var LA=E.CoA.getTotalLength(),LB=E.CoB.getTotalLength();E.CoA.style.strokeDasharray=LA+" "+LA;E.CoB.style.strokeDasharray=LB+" "+LB;
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)})}
    E.Screw.style.strokeDashoffset=(-p*900).toFixed(1);
    /* pellets: drop through the throat, then ride the screw a little way before melting */
    op(E.PelG,b*(1-seg(p,.36,.46)));
    E.Pel.forEach(function(r,k){var ph=((p*7+k/9)%1),x,y;if(ph<.55){x=127+((k*37)%13)-6;y=120+ph/.55*(TY-120-4)}else{x=127+(ph-.55)/.45*90;y=TY-4+((k*5)%7)-3}
      r.setAttribute("x",x.toFixed(1));r.setAttribute("y",y.toFixed(1));r.style.opacity=(ph<.04?ph/.04:ph>.9?(1-ph)/.1:1).toFixed(2)});
    op(E.Heat,b*seg(p,.24,.34));
    E.Melt.setAttribute("width",(240*seg(p,.27,.47)).toFixed(1));op(E.Melt,b*seg(p,.26,.3));
    var c=seg(p,.5,.62);E.CoA.style.strokeDashoffset=(LA*(1-c)).toFixed(1);E.CoB.style.strokeDashoffset=(LB*(1-c)).toFixed(1);op(E.Co,b*seg(p,.5,.52));
    var xe=HX2+(X1-HX2)*(.32*seg(p,.56,.7)+.68*seg(p,.76,.92));
    E.T.forEach(function(el,k){var y=TY+[-12,12,-7,7][k];el.setAttribute("d","M"+HX2+" "+y+"H"+xe.toFixed(1))});op(E.Tube,b*seg(p,.55,.58));
    op(E.X,b*seg(p,.6,.68));
    op(E.Cal,b*seg(p,.75,.8));op(E.Ho,b*seg(p,.8,.85));
    for(var k=0;k<4;k++){var v=b*seg(p,k*.25,k*.25+.05)*(k<3?(1-seg(p,(k+1)*.25-.03,(k+1)*.25+.01)):1);op(E.lb[k],v);op(E.st[k],v)}
  };
}
