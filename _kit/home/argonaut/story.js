/* The story scene (BL/BY/DB): one run of an Argonaut soot generator, in the terms argonautscientific.com uses (LF-MISG: gaseous
   or liquid fuel in a N2 or ethylene carrier, 7-10 SLPM air; inverted flame geometry for a stable soot concentration; up to
   ~1x10^7 particles/cm3 and ~100 mg/m3 depending on flows; concentration and size set by the fuel, carrier and air flows).
   ONE figure kept on screen: a schematic burner (inlets, chamber with its viewing window, exhaust) beside a soot-concentration
   trace over time.
   Step 1 (Fuel): the fuel and air inlets are drawn.
   Step 2 (Flame): the flame appears in the window.
   Step 3 (Soot): particles leave through the exhaust; the trace rises.
   Step 4 (Steady): the trace holds level.
   The burner is a schematic and the trace is illustrative, not a measured curve. */
var SPX0=320,SPX1=720,SPYS=200,NW=300;
function tr(t){return 430-230*(1-Math.exp(-t/.06))+1.6*Math.sin(t*97)*Math.min(1,t/.2)}
function tPath(){var d='',k;for(k=0;k<=NW;k++){var t=k/NW;d+=(k?'L':'M')+(SPX0+t*(SPX1-SPX0)).toFixed(1)+' '+tr(t).toFixed(1)}return d}
function tsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="tssc'+(mob?' mob':'')+'" viewBox="'+(mob?'236 20 504 486':'20 20 720 486')+'" aria-hidden="true">';
  if(!mob){
    g+='<text class="t" x="40" y="44">ARGONAUT · SOOT GENERATOR</text>';
    g+='<g id="tsCh"><rect class="cab" x="140" y="104" width="30" height="46"/><rect class="cab" x="110" y="150" width="90" height="200"/>'+
       '<rect class="lns" x="140" y="196" width="30" height="104"/><text class="ax" x="155" y="372" text-anchor="middle">burner</text>'+
       '<text class="ax" x="40" y="292">fuel</text><text class="ax" x="40" y="346">air</text>'+
       '<text class="s3" x="40" y="400">Inverted flame</text><path class="pl" d="M40 414H290"/></g>';
    g+='<path class="sc" id="tsGr" d="M40 302H110"/><path class="sc" id="tsGr2" d="M40 326H110"/>';
    g+='<path class="fl" id="tsFl" d="M155 212C165 232 166 262 155 286C144 262 145 232 155 212Z"/>';
    g+='<path class="lb" id="tsOut" d="M155 104V76H266"/><g id="tsPd">';
    for(i=0;i<9;i++)g+='<circle class="pt" cx="'+(174+i*10.5)+'" cy="'+(76+((i*7)%5-2)*2.2)+'" r="'+(1.8+(i%3)*.7)+'"/>';
    g+='</g><text class="ax" id="tsSo" x="266" y="62" text-anchor="end">soot out</text>';
    g+='<text class="ro" id="tsRo" x="40" y="454">FUEL + AIR</text><text class="ro2" id="tsRh" x="40" y="476">METERED FLOWS</text>';
  }else{
    g+='<text class="ro" id="tsRo" x="250" y="56">FUEL + AIR</text><text class="ro2" id="tsRh" x="250" y="86">METERED FLOWS</text>';
  }
  g+='<path class="gl" id="tsLv" d="M320 '+SPYS+'H720"/><path class="axl" d="M320 90V440H720"/>';
  g+='<text class="ax" x="720" y="'+(mob?500:482)+'" text-anchor="end">'+(mob?'time':'TIME →')+'</text>'+(mob?'':'<text class="ax" x="308" y="96" text-anchor="end">SOOT</text>');
  g+='<path class="ms" id="tsMs" d="'+tPath()+'"/><circle class="hd" id="tsHd" r="5" cx="320" cy="430"/>';
  g+='<text class="ax el" id="tsBl" x="716" y="'+(SPYS-14)+'" text-anchor="end">STEADY</text>';
  var C=mob?["FUEL AND AIR IN","THE FLAME IS LIT","SOOT LEAVES","A STEADY STREAM"]:["FUEL AND AIR FLOW IN","THE INVERTED FLAME IS LIT","SOOT LEAVES THE BURNER","THE STREAM HOLDS STEADY"];
  for(i=0;i<4;i++)g+='<text class="cl" id="tsC'+i+'" x="'+(mob?250:320)+'" y="'+(mob?500:504)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return tsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={ms:q("#tsMs"),hd:q("#tsHd"),ro:q("#tsRo"),rh:q("#tsRh"),gr:q("#tsGr"),gr2:q("#tsGr2"),fl:q("#tsFl"),out:q("#tsOut"),pd:q("#tsPd"),so:q("#tsSo"),
    lv:q("#tsLv"),bl:q("#tsBl"),cap:[0,1,2,3].map(function(k){return q("#tsC"+k)})};
  function dash(el){if(!el)return 0;var l=el.getTotalLength();el.style.strokeDasharray=l+" "+l;el.style.strokeDashoffset=l;return l}
  var L=dash(E.ms),LO=dash(E.out),lastT="",lastH="";
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(E.gr){op(E.gr,b*seg(p,.03,.1));op(E.gr2,b*seg(p,.08,.15));op(E.fl,b*seg(p,.28,.38));
      var o=seg(p,.52,.6);E.out.style.strokeDashoffset=(LO*(1-o)).toFixed(1);op(E.out,b*seg(p,.52,.54));op(E.pd,b*seg(p,.56,.64));op(E.so,b*seg(p,.58,.64))}
    var c=seg(p,.53,.72)*.4+seg(p,.76,.94)*.6;E.ms.style.strokeDashoffset=(L*(1-c)).toFixed(1);op(E.ms,b*seg(p,.53,.56));
    var hp=E.ms.getPointAtLength(L*c);E.hd.setAttribute("cx",hp.x.toFixed(1));E.hd.setAttribute("cy",hp.y.toFixed(1));op(E.hd,b*seg(p,.53,.56)*(1-seg(p,.94,.98)));
    op(E.lv,b*seg(p,.8,.88)*.9);op(E.bl,b*seg(p,.84,.92));
    var ts=p<.27?"FUEL + AIR":p<.52?"FLAME LIT":p<.77?"SOOT OUT":"STEADY";if(ts!==lastT){lastT=ts;E.ro.textContent=ts}
    var hs=p<.27?"METERED FLOWS":p<.52?"INVERTED":p<.77?"UP TO ~10⁷ /cm³":"SET BY THE FLOWS";if(hs!==lastH){lastH=hs;E.rh.textContent=hs}
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.cap.forEach(function(cp,k2){op(cp,b*(k2===0?1:seg(p,w[k2][0],w[k2][0]+.04))*(k2===3?1:(1-seg(p,w[k2][1]-.04,w[k2][1]))))});
    op(E.ro,b);op(E.rh,b);
  };
}
