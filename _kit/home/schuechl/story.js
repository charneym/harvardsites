/* The story scene (BL/BY/DB): how vacuum casting works in a Schüchl machine (schuechl.de: Prodaus-de, UHG-Easy-4-5-de,
   UGM-850-1300-de), drawn as ONE fine-line section through the vacuum chamber, kept on screen for all three steps.
   Step 1, Entgasen: the pump draws the chamber down (the gauge needle sweeps), air rises out of both components in cup A and
   cup B. Step 2, Mischen: cup B tips into cup A and the stirrer mixes, still under vacuum. Step 3, Gießen und Belüften: the
   stirrer lifts, cup A tips, the mix runs through the funnel into the silicone mould, which fills; then the chamber is vented
   (air in) and the gauge returns. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var CAX=230,CAY=152,CBX=312,CBY=74;   /* pivots of cup A and cup B */
var FUX=272;                          /* funnel axis */
var PART="M232 366H318V388H302V410H248V388H232Z";  /* the cavity: a small housing with a boss */
function vcScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="fillc"><rect id="fillr" x="200" y="410" width="160" height="0"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* the chamber, the tilt shaft, the line to the gauge */
  g+='<path class="wall sD" d="M60 30H490V470H60Z"/>';
  g+='<path class="duo sD" d="M60 444H490M180 436H370"/>';
  g+='<path class="duo sD" d="M490 110H554"/>';
  /* the gauge */
  g+='<circle class="wall sD" cx="600" cy="110" r="46"/>';
  for(i=0;i<9;i++){var a=(-120+i*30)*Math.PI/180;g+='<path class="tick" d="M'+(600+Math.sin(a)*36).toFixed(1)+' '+(110-Math.cos(a)*36).toFixed(1)+'L'+(600+Math.sin(a)*42).toFixed(1)+' '+(110-Math.cos(a)*42).toFixed(1)+'"/>'}
  /* funnel and mould */
  g+='<path class="wall sD" d="M'+(FUX-30)+' 262H'+(FUX+30)+'L'+(FUX+6)+' 300V322H'+(FUX-6)+'V300Z"/>';
  g+='<path class="wall sD" d="M200 330H350V436H200Z"/>';
  g+='<path class="duo sD" d="M'+FUX+' 330V366"/>';
  g+='<path class="duo sD" d="'+PART+'"/>';
  if(!mob){
    g+='<text class="t" x="78" y="156">BECHER A</text><text class="t" x="352" y="126">BECHER B</text>';
    g+='<text class="t" x="314" y="296">TRICHTER</text><text class="t" x="364" y="392">SILIKONFORM</text>';
  }
  g+='<text class="t" x="600" y="186" text-anchor="middle">VAKUUM</text>';
  g+='</g>';
  /* the gauge needle */
  g+='<g id="ndl"><path class="ndl" d="M600 110V76"/><circle class="hub" cx="600" cy="110" r="4"/></g>';
  /* the stirrer */
  g+='<g id="stir"><path class="rod" d="M'+CAX+' 40V176"/><path id="blade" class="rod" d="M'+(CAX-18)+' 176H'+(CAX+18)+'"/></g>';
  /* cup A, with its resin level and rising air */
  g+='<g id="cupA"><path class="cup" d="M'+(CAX-40)+' '+(CAY-52)+'L'+(CAX+40)+' '+(CAY-52)+'L'+(CAX+34)+' '+(CAY+48)+'H'+(CAX-34)+'Z"/>'+
     '<path class="lvl" id="lvlA" d="M'+(CAX-37)+' '+(CAY+4)+'H'+(CAX+37)+'"/>';
  g+='<g id="bubA">';for(i=0;i<5;i++)g+='<circle class="bub" r="2.6" cx="'+(CAX-22+i*11)+'" cy="'+(CAY+38)+'"/>';g+='</g></g>';
  /* cup B */
  g+='<g id="cupB"><path class="cup" d="M'+(CBX-26)+' '+(CBY-36)+'L'+(CBX+26)+' '+(CBY-36)+'L'+(CBX+22)+' '+(CBY+34)+'H'+(CBX-22)+'Z"/>'+
     '<path class="lvl" d="M'+(CBX-24)+' '+(CBY+2)+'H'+(CBX+24)+'"/>';
  g+='<g id="bubB">';for(i=0;i<3;i++)g+='<circle class="bub" r="2.2" cx="'+(CBX-12+i*12)+'" cy="'+(CBY+26)+'"/>';g+='</g></g>';
  /* the streams: B into A, then A into the funnel and down the sprue */
  g+='<path id="sBA" class="res" d="M285 102C276 116 266 128 262 150"/>';
  g+='<path id="sAF" class="res" d="M265 208C270 222 '+FUX+' 238 '+FUX+' 300"/>';
  g+='<path id="sSp" class="res" d="M'+FUX+' 300V366"/>';
  /* the cavity filling */
  g+='<path id="fill" class="fillp" clip-path="url(#fillc)" d="'+PART+'"/>';
  /* venting: air back into the chamber */
  g+='<g id="vent"><path class="air" d="M14 236H52M42 228L52 236L42 244"/><path class="air" d="M14 276H52M42 268L52 276L42 284"/></g>';
  /* state notes, under the gauge */
  g+='<g id="m1"><text class="t s1" x="540" y="250">DRUCK FÄLLT</text>'+(mob?'':'<text class="t" x="540" y="276">LUFT STEIGT AUS</text>')+'</g>';
  g+='<g id="m2"><text class="t s1" x="540" y="250">'+(mob?"B IN A":"BECHER B IN A")+'</text>'+(mob?'':'<text class="t" x="540" y="276">RÜHREN UNTER VAKUUM</text>')+'</g>';
  g+='<g id="m3"><text class="t s1" x="540" y="250">'+(mob?"IN DIE FORM":"ÜBER DEN TRICHTER")+'</text>'+(mob?'':'<text class="t" x="540" y="276">BELÜFTEN, BLASENFREI</text>')+'</g>';
  /* step captions, in the clear band under the scene */
  g+='<g id="lb1"><text class="a" x="60" y="504">1 · ENTGASEN</text></g>';
  g+='<g id="lb2"><text class="a" x="60" y="504">2 · MISCHEN</text></g>';
  g+='<g id="lb3"><text class="a" x="60" y="504">'+(mob?"3 · GIESSEN":"3 · GIESSEN UND BELÜFTEN")+'</text></g>';
  return g+'</svg>';
}
function scene(){return vcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .tick",svg),ndl:$("#ndl",svg),stir:$("#stir",svg),blade:$("#blade",svg),
    cupA:$("#cupA",svg),cupB:$("#cupB",svg),bubA:$$("#bubA .bub",svg),bubB:$$("#bubB .bub",svg),
    sBA:dl("#sBA"),sAF:dl("#sAF"),sSp:dl("#sSp"),fillr:$("#fillr",svg),fill:$("#fill",svg),vent:$("#vent",svg),
    m1:$("#m1",svg),m2:$("#m2",svg),m3:$("#m3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    op(E.cupA,b);op(E.cupB,b);op(E.ndl,b);
    /* step 1: the needle sweeps to vacuum; air rises out of both cups */
    var vac=seg(p,.05,.24)*(1-seg(p,.90,.98));
    E.ndl.setAttribute("transform","rotate("+(-120+220*vac).toFixed(1)+" 600 110)");
    var bu=seg(p,.06,.30);
    E.bubA.forEach(function(c,j){var u=(bu*1.8+j*.23)%1;c.setAttribute("transform","translate(0 "+(-u*46).toFixed(1)+")");c.style.opacity=(bu>0&&bu<1?(1-u)*(1-seg(p,.26,.31)):0).toFixed(3)});
    E.bubB.forEach(function(c,j){var u=(bu*1.8+j*.31)%1;c.setAttribute("transform","translate(0 "+(-u*30).toFixed(1)+")");c.style.opacity=(bu>0&&bu<1?(1-u)*(1-seg(p,.26,.31)):0).toFixed(3)});
    /* step 2: cup B tips into A, and the stirrer turns */
    var tb=seg(p,.38,.48)*(1-seg(p,.60,.66));
    E.cupB.setAttribute("transform","rotate("+(-100*tb).toFixed(1)+" "+CBX+" "+CBY+")");
    draw(E.sBA,seg(p,.45,.50));op($("#sBA",svg),b*(1-seg(p,.56,.60)));
    var st=seg(p,.40,.64);E.blade.setAttribute("transform","translate("+CAX+" 0) scale("+(st>0&&st<1?Math.cos(st*60):1).toFixed(3)+" 1) translate("+(-CAX)+" 0)");
    /* step 3: the stirrer lifts out, cup A tips over the funnel, the mould fills, the chamber is vented */
    var lift=seg(p,.66,.72);E.stir.setAttribute("transform","translate(0 "+(-30*lift).toFixed(1)+")");op(E.stir,b*(1-lift));
    var ta=seg(p,.70,.80);E.cupA.setAttribute("transform","rotate("+(112*ta).toFixed(1)+" "+CAX+" "+CAY+")");
    draw(E.sAF,seg(p,.78,.82));draw(E.sSp,seg(p,.81,.84));
    var sOut=1-seg(p,.93,.96);op($("#sAF",svg),b*sOut);op($("#sSp",svg),b*sOut);
    var fl=seg(p,.83,.94);if(E.fillr){E.fillr.setAttribute("y",(410-44*fl).toFixed(1));E.fillr.setAttribute("height",(44*fl+1).toFixed(1))}op(E.fill,b*seg(p,.82,.84));
    op(E.vent,b*seg(p,.90,.95));
    op(E.m1,b*seg(p,.06,.12)*(1-seg(p,.28,.32)));op(E.m2,b*seg(p,.40,.46)*(1-seg(p,.62,.66)));op(E.m3,b*seg(p,.76,.82));
    op(E.l1,b*seg(p,.04,.10)*(1-seg(p,.28,.32)));op(E.l2,b*seg(p,.38,.44)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.72,.78));
  };
}
