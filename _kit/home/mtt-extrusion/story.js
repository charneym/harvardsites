/* The story scene (BL/BY/DB): one screw in its barrel, drawn as a longitudinal section in fine line, following what MTT
   offers for screws and barrels (mtt-germany.com: "Schnecken / Zylinder: Vermessen, Design-Empfehlung, Herstellung";
   wire 2026 profile: "inklusive Vermessen und Zeichnungserstellung", "Verschleiß- und Optimierungsanalysen von
   Plastifiziereinheiten"; stand poster: "Microfinish ... zur Minimierung der Polymeranhaftung"). ONE screw stays on screen:
   Step 1 (Vermessen): dimension lines for the bore and the pitch draw in.
   Step 2 (Analyse): the flight lands in the metering zone are worn, the gap to the bore shows, a wear profile draws.
   Step 3 (Zeichnung): the three zones are dimensioned under the barrel.
   Step 4 (Fertigung): the new screw: full lands again, the surface re-traced in the accent (Microfinish). */
var SCW=760,SCH=520,TY=240,X0=40,X1=720,BL=50,BR=710,RB=60,RO=58;
var ZF=[70,260],ZC=[260,470],ZM=[470,700],PCH=58,FL0=96,FL1=650;
function mtRoot(x){return x<ZC[0]?30:x>ZC[1]?46:30+16*(x-ZC[0])/(ZC[1]-ZC[0])}
function mtFl(xf,od){od=+od;xf=+xf;var a=xf,b=xf+9,s=PCH/2;return 'M'+a+' '+(TY-od)+'H'+b+'L'+(b+s)+' '+(TY+od)+'H'+(a+s)+'Z'}
function mtScene(o){
  var g='',mob=o.mob,x,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g class="lbt"><text class="t" x="'+X0+'" y="46">'+(mob?"SCHNECKE · ZYLINDER":"SCHNECKE UND ZYLINDER · LÄNGSSCHNITT")+'</text></g>';
  /* the gap between worn lands and the bore (step 2), first so every stroke sits above it */
  g+='<rect id="mtGap" class="gap" x="'+ZM[0]+'" y="'+(TY-RB)+'" width="'+(FL1+40-ZM[0])+'" height="'+(RB-RO+8)+'"/>';
  g+='<rect id="mtGap2" class="gap" x="'+ZM[0]+'" y="'+(TY+RO-8)+'" width="'+(FL1+40-ZM[0])+'" height="'+(RB-RO+8)+'"/>';
  /* barrel in section: bore lines, outer lines, hatched walls */
  g+='<g class="wall">';
  g+='<path d="M'+BL+' '+(TY-RB)+'H'+BR+'M'+BL+' '+(TY+RB)+'H'+BR+'M'+BL+' '+(TY-RB-24)+'H'+BR+'M'+BL+' '+(TY+RB+24)+'H'+BR+
     'M'+BL+' '+(TY-RB-24)+'V'+(TY-RB)+'M'+BL+' '+(TY+RB)+'V'+(TY+RB+24)+'M'+BR+' '+(TY-RB-24)+'V'+(TY-RB)+'M'+BR+' '+(TY+RB)+'V'+(TY+RB+24)+'"/>';
  var ht='';for(x=BL+8;x<BR;x+=14){ht+='M'+x+' '+(TY-RB-2)+'L'+(x+20)+' '+(TY-RB-22)+'M'+x+' '+(TY+RB+22)+'L'+(x+20)+' '+(TY+RB+2)}
  g+='<path class="thin" d="'+ht+'"/>';
  g+='</g>';
  /* the screw: shank, root (rising through the compression zone), tip */
  var rt='M'+BL+' '+(TY-22)+'H'+ZF[0],rb='M'+BL+' '+(TY+22)+'H'+ZF[0];
  for(x=ZF[0];x<=670;x+=10){rt+='L'+x+' '+(TY-mtRoot(x)).toFixed(1);rb+='L'+x+' '+(TY+mtRoot(x)).toFixed(1)}
  g+='<g class="scr">';
  g+='<path d="M14 '+(TY-22)+'H'+BL+'M14 '+(TY+22)+'H'+BL+'M14 '+(TY-22)+'V'+(TY+22)+'M'+ZF[0]+' '+(TY-30)+'V'+(TY-22)+'M'+ZF[0]+' '+(TY+22)+'V'+(TY+30)+'"/>';
  g+='<path class="thin" d="M22 '+(TY-22)+'V'+(TY-14)+'H44V'+(TY-22)+'"/>';
  g+='<path id="mtRt" d="'+rt+'L700 '+TY+'"/><path id="mtRb" d="'+rb+'L700 '+TY+'"/>';
  g+='</g>';
  /* flights: the feed and compression ones fixed, the metering ones redrawn as they wear and are renewed */
  var ff='',fm='';
  for(x=FL0;x<=FL1;x+=PCH){if(x<ZM[0])ff+=mtFl(x,RO);else fm+='<path class="fm" data-x="'+x+'" d="'+mtFl(x,RO)+'"/>'}
  g+='<g class="flt"><path d="'+ff+'"/>'+fm+'</g>';
  /* Microfinish: the root re-traced in the accent (step 4) */
  g+='<g id="mtFin" class="fin"><path id="mtF1" d="'+rt+'L700 '+TY+'"/><path id="mtF2" d="'+rb+'L700 '+TY+'"/></g>';
  /* step 1: dimension lines (bore at the right end, pitch above the barrel) */
  var a=6;
  g+='<g id="mtDim" class="dim"><path d="M714 '+(TY-RB)+'H744M714 '+(TY+RB)+'H744"/><path id="mtD1" d="M736 '+(TY-RB+2)+'V'+(TY+RB-2)+'"/>'+
     '<path class="ah" d="M736 '+(TY-RB+1)+'l-'+a/2+' '+a*1.6+'h'+a+'zM736 '+(TY+RB-1)+'l-'+a/2+' -'+a*1.6+'h'+a+'z"/>'+
     '<path d="M'+(FL0+PCH*5)+' '+(TY-RB-30)+'V'+(TY-RB-58)+'M'+(FL0+PCH*6)+' '+(TY-RB-30)+'V'+(TY-RB-58)+'"/><path id="mtD2" d="M'+(FL0+PCH*5+2)+' '+(TY-RB-48)+'H'+(FL0+PCH*6-2)+'"/>'+
     '<path class="ah" d="M'+(FL0+PCH*5+1)+' '+(TY-RB-48)+'l'+a*1.6+' -'+a/2+'v'+a+'zM'+(FL0+PCH*6-1)+' '+(TY-RB-48)+'l-'+a*1.6+' -'+a/2+'v'+a+'z"/></g>';
  /* step 2: the wear profile along the screw, above the barrel */
  g+='<g id="mtWear" class="wr"><path class="base" d="M'+ZF[0]+' 122H'+ZM[1]+'"/><path id="mtW" d="M'+ZF[0]+' 121C220 121 330 120 '+ZM[0]+' 112S610 84 '+ZM[1]+' 80"/></g>';
  /* step 3: the three zones dimensioned under the barrel */
  var yb=TY+RB+50,Z=[ZF,ZC,ZM],ZN=["EINZUG","KOMPRESSION","METERING"];
  var zg='';Z.forEach(function(z,k){zg+='<path d="M'+(z[0]+3)+' '+(yb-8)+'V'+(yb+8)+'M'+(z[1]-3)+' '+(yb-8)+'V'+(yb+8)+'M'+(z[0]+3)+' '+yb+'H'+(z[1]-3)+'"/>'});
  g+='<g id="mtZn" class="zn">'+zg;
  Z.forEach(function(z,k){g+='<text x="'+((z[0]+z[1])/2)+'" y="'+(yb+40)+'" text-anchor="middle">'+ZN[k]+'</text>'});
  g+='</g>';
  /* labels, all in the free band below the drawing (8px+ clear of every stroke) */
  var S=["12–200 MM","VERSCHLEISS","DESIGN",mob?"MICROFINISH":"NEU MIT MICROFINISH"];
  S.forEach(function(t,k){g+='<g id="gs'+(k+1)+'"><text class="ok" x="'+X1+'" y="490" text-anchor="end">'+t+'</text></g>'});
  var L=["1 · VERMESSEN","2 · ANALYSE","3 · ZEICHNUNG","4 · FERTIGUNG"];
  L.forEach(function(t,k){g+='<g id="lb'+(k+1)+'"><text class="a" x="'+X0+'" y="490">'+t+'</text></g>'});
  return g+'</svg>';
}
function scene(){return mtScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={Gap:[$("#mtGap",svg),$("#mtGap2",svg)],Fm:$$(".fm",svg),Fin:$("#mtFin",svg),F:[$("#mtF1",svg),$("#mtF2",svg)],Dim:$("#mtDim",svg),
    D:[$("#mtD1",svg),$("#mtD2",svg)],Wear:$("#mtWear",svg),W:$("#mtW",svg),Zn:$("#mtZn",svg),
    st:[1,2,3,4].map(function(k){return $("#gs"+k,svg)}),lb:[1,2,3,4].map(function(k){return $("#lb"+k,svg)}),base:$$(".wall,.lbt,.scr,.flt",svg)};
  function L(el){var l=el.getTotalLength();el.style.strokeDasharray=l+" "+l;return l}
  var LF=E.F.map(L),LD=E.D.map(L),LW=L(E.W);
  var lastB=-1,lastW=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)})}
    /* step 1: dimensions draw in, then step back */
    var d=seg(p,.03,.15);E.D.forEach(function(el,k){el.style.strokeDashoffset=(LD[k]*(1-d)).toFixed(1)});
    op(E.Dim,b*seg(p,.02,.05)*(1-seg(p,.24,.3)));
    /* step 2: the metering lands wear down; the gap and the wear profile show; step 4 renews them */
    var wv=seg(p,.28,.4)*(1-seg(p,.78,.88));
    if(Math.abs(wv-lastW)>.002){lastW=wv;var od=RO-7*wv;E.Fm.forEach(function(el){el.setAttribute("d",mtFl(+el.getAttribute("data-x"),od.toFixed(2)))})}
    E.Gap.forEach(function(el){op(el,b*wv)});
    var w=seg(p,.3,.44);E.W.style.strokeDashoffset=(LW*(1-w)).toFixed(1);op(E.Wear,b*seg(p,.28,.31)*(1-seg(p,.74,.8)));
    /* step 3: the zones */
    op(E.Zn,b*seg(p,.52,.6));
    /* step 4: the surface re-traced */
    var f=seg(p,.8,.96);E.F.forEach(function(el,k){el.style.strokeDashoffset=(LF[k]*(1-f)).toFixed(1)});op(E.Fin,b*seg(p,.78,.8));
    for(var k=0;k<4;k++){var v=b*seg(p,k*.25,k*.25+.05)*(k<3?(1-seg(p,(k+1)*.25-.03,(k+1)*.25+.01)):1);op(E.lb[k],v);op(E.st[k],v)}
  };
}
