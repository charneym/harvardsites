/* the story scene (BL/BY/DB): ONE engraved figure kept on screen throughout: a blood-level chart above a section through the skin.
   Each step adds one part, as remaginelabs.com and the 2026 Praxis release describe it: oral dosing makes a "seesaw" of peaks
   (side effects) and troughs (breakthrough seizures); the wearable patch carries the drug and its electronics; iontophoresis, a low
   current, carries the charged drug through the skin; electronic control gives programmable, steady dosing. Schematic proportions;
   every label sits in the right-hand column, clear of every stroke (DR 3); phones drop the labels and keep the step tags. */
function scene(){
  var mob=MOBILE(),LX=588;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"24 22 560 516":"0 0 800 560")+'" aria-hidden="true">';
  var X0=60,X1=560,Y0=96,Y1=256,W0=150,W1=200;
  /* blood level after oral doses (one-compartment, first-order absorption), scaled so peaks rise above the window and troughs fall below it */
  var D=[70,200,330,460],ka=.16,ke=.0125,pts=[],mx=0,mn=1e9;
  for(var x=X0;x<=X1;x+=2){var c=0;D.forEach(function(d){var t=x-d;if(t>0)c+=Math.exp(-ke*t)-Math.exp(-ka*t)});pts.push([x,c]);if(x>D[1])mx=Math.max(mx,c)}
  var lo=pts[pts.length-1][1];pts.forEach(function(p){if(p[0]>D[1]+40)mn=Math.min(mn,p[1])});
  var Yp=112,Yt=238,sc=(Yt-Yp)/(mx-Math.min(mn,lo));
  var saw='',pk=null,pkx=0;pts.forEach(function(p,i){var y=Yt-(p[1]-Math.min(mn,lo))*sc;y=Math.min(y,Y1-1);saw+=(i?'L':'M')+p[0]+' '+y.toFixed(1);if(p[0]>D[3]&&(!pk||y<pk)){pk=y;pkx=p[0]}});
  var endY=Math.min(Yt-(lo-Math.min(mn,lo))*sc,Y1-1);
  g+='<g id="scBase">';
  g+='<rect class="win" x="'+(X0+1)+'" y="'+W0+'" width="'+(X1-X0-1)+'" height="'+(W1-W0)+'"/>';
  g+='<path class="wnd sD" d="M'+(X0+1)+' '+W0+'H'+X1+'M'+(X0+1)+' '+W1+'H'+X1+'"/>';
  g+='<path class="wl sD" d="M'+X0+' '+Y0+'V'+Y1+'H'+X1+'"/>';
  g+='<text x="'+X0+'" y="86" class="t">DRUG LEVEL IN BLOOD</text><text x="'+X1+'" y="282" class="t" text-anchor="end">TIME</text>';
  g+='<path class="ld2 sD" d="M'+(X1+2)+' '+(W0+4)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(W0+8)+'" class="t c">THERAPEUTIC WINDOW</text>';
  /* the skin: stratum corneum, living epidermis, dermis with capillary loops */
  var S0=356,S1=366,E1=394,B=522,SX0=40,SX1=560;
  var sc_='';for(var xx=SX0+8,k=0;xx<SX1;xx+=14,k++)sc_+='M'+xx+' '+(k%2?S0+1:S0+5)+'V'+(k%2?S0+5:S1-1);
  var cells='';for(var cx=SX0+14;cx<SX1-8;cx+=22)cells+='M'+(cx-8)+' 380a8 6 0 1 0 16 0a8 6 0 1 0-16 0';
  var bas='M'+SX0+' '+E1;for(var bx=SX0;bx<SX1;bx+=40)bas+='Q'+(bx+20)+' '+(E1+12)+' '+(bx+40)+' '+E1;
  var fib='';for(var fy=420;fy<B-6;fy+=16){fib+='M'+SX0+' '+fy;for(var fx=SX0;fx<SX1;fx+=40)fib+='Q'+(fx+20)+' '+(fy+((fx/40)%2?4:-4))+' '+(fx+40)+' '+fy}
  var caps='';[110,300,490].forEach(function(c){caps+='M'+(c-12)+' '+B+'V'+484+'C'+(c-12)+' 462 '+(c+12)+' 462 '+(c+12)+' 484V'+B+'M'+(c-5)+' '+B+'V486C'+(c-5)+' 476 '+(c+5)+' 476 '+(c+5)+' 486V'+B});
  g+='<path class="fib" d="'+fib+'"/><path class="cell" d="'+cells+'"/><path class="cap" d="'+caps+'"/>';
  g+='<path class="wl sD" d="M'+SX0+' '+S0+'H'+SX1+'"/><path class="wi sD" d="M'+SX0+' '+S1+'H'+SX1+''+'M'+SX0+' '+B+'H'+SX1+'"/><path class="wi sD" d="'+bas+'"/><path class="sc" d="'+sc_+'"/>';
  g+='<path class="ld2 sD" d="M'+(SX1+2)+' '+(S0+5)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(S0+9)+'" class="t c">STRATUM CORNEUM</text>';
  g+='<path class="ld2 sD" d="M'+(SX1+2)+' 490H'+(LX-8)+'"/><text x="'+LX+'" y="494" class="t c">DERMIS · CAPILLARIES</text>';
  g+='</g>';
  /* 1 by mouth: the seesaw */
  var pills='';D.forEach(function(d){pills+='<path class="pill" d="M'+(d-8)+' 266h16a4 4 0 0 1 0 8h-16a4 4 0 0 1 0-8Z M'+d+' 266v8"/>'});
  g+='<g id="sc1"><path class="saw dr" d="'+saw+'"/>'+pills+
     '<path class="ld2 dr" d="M'+pkx+' '+(pk-6).toFixed(1)+'V100H'+(LX-8)+'"/><text x="'+LX+'" y="104" class="t c rd">PEAK · SIDE EFFECTS</text>'+
     '<path class="ld2 dr" d="M'+(X1+4)+' '+endY.toFixed(1)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(endY+4).toFixed(1)+'" class="t c rd">TROUGH · BREAKTHROUGH</text><text x="'+LX+'" y="'+(endY+20).toFixed(1)+'" class="t c rd">SEIZURES</text>'+
     '<text x="40" y="56" class="a">BY MOUTH</text></g>';
  /* 2 the wearable patch on the skin: housing, control electronics, the drug and return electrodes */
  var P0=170,P1=430,PT=288,PB=354;
  var pcb='M190 305H260M268 301V309M276 305H330M352 305H410M300 299V311';
  g+='<g id="sc2"><path class="hous dr" d="M'+P0+' '+PB+'V'+(PT+10)+'Q'+P0+' '+PT+' '+(P0+10)+' '+PT+'H'+(P1-10)+'Q'+P1+' '+PT+' '+P1+' '+(PT+10)+'V'+PB+'Z"/>'+
     '<path class="pcbb" d="M182 296H418V314H182Z"/><path class="pcb" d="'+pcb+'"/><path class="chip" d="M332 300h16v10h-16Z M242 300h12v10h-12Z"/>'+
     '<path class="rsvA" d="M188 320H284V352H188Z"/><path class="rsvB" d="M316 320H412V352H316Z"/>'+
     '<path class="sym" d="M229 336h14M236 329v14 M357 336h14"/>'+
     '<path class="ld2 dr" d="M'+(P1+2)+' 296H'+(LX-8)+'"/><text x="'+LX+'" y="300" class="t c">WEARABLE PATCH</text>'+
     '<text x="40" y="56" class="a">THE PATCH</text></g>';
  /* 3 iontophoresis: a low current from the drug electrode through the skin to the return electrode; charged drug moves in */
  var ions='';[198,212,224,250,262,276,205,218,269].forEach(function(x,i){ions+='<circle class="ion" r="3.4" cx="'+x+'" cy="'+(i<6?346:326)+'" data-i="'+i+'"/>'});
  g+='<g id="sc3"><path class="cur dr" d="M236 362C236 470 364 470 364 362"/><path class="cur dr" d="M294 438L302 444L294 450"/>'+ions+
     '<path class="ld2 dr" d="M272 410H'+(LX-8)+'"/><text x="'+LX+'" y="414" class="t c rd">DRUG, THROUGH THE SKIN</text>'+
     '<path class="ld2 dr" d="M348 426L372 442H'+(LX-8)+'"/><text x="'+LX+'" y="446" class="t c">LOW ELECTRIC CURRENT</text>'+
     '<text x="40" y="56" class="a">THE CURRENT</text></g>';
  /* 4 steady, programmed dosing: the level climbs once into the window and holds */
  var st='M'+X0+' '+(Y1-1);for(var sx=X0;sx<=X1;sx+=4){var v=1-Math.exp(-(sx-X0)/26);st+='L'+sx+' '+(Y1-1-(Y1-1-176)*v).toFixed(1)}
  g+='<g id="sc4"><path class="std dr" d="'+st+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+4)+' 176H'+(LX-8)+'"/><text x="'+LX+'" y="182" class="t c gn">STEADY, AS PROGRAMMED</text>'+
     '<path class="ld2 dr" d="M418 306L440 318H'+(LX-8)+'"/><text x="'+LX+'" y="322" class="t c">PROGRAMMABLE CONTROL</text>'+
     '<text x="40" y="56" class="a">STEADY STATE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .win, #scBase .fib, #scBase .cell, #scBase .cap, #scBase .sc, #scBase text",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    saw:$("#sc1 .saw",svg),pills:$$("#sc1 .pill",svg),ions:$$("#sc3 .ion",svg)};
  var I0=E.ions.map(function(c){return [+c.getAttribute("cx"),+c.getAttribute("cy")]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* the seesaw quietens once the steady curve arrives; the pills go with it */
    E.saw.style.opacity=(1-.72*s[3]).toFixed(3);E.pills.forEach(function(el){el.style.opacity=(1-.72*s[3]).toFixed(3)});
    /* the charged drug moves down through the skin with the current, staggered, and keeps flowing through step 4 */
    var f=seg(p,.5,.94);E.ions.forEach(function(c,j){var q=Math.max(0,Math.min(1,f*1.5-j*.055));var y=I0[j][1]+q*(452-I0[j][1]-((j%3)*14));
      c.setAttribute("cy",y.toFixed(1));c.style.opacity=(s[2]>0?Math.min(1,s[2]*3):0).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
