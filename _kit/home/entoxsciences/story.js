/* The story scene (BL/BY/DB): the BaroFuse perifusion channel, as EnTox describes it (entoxsciences.com > Technical
   Foundation and Technical Features; Heliyon 2016 "pressure-driven"; Cell Rep Methods 2023 "pumpless"; AJP Cell 2025
   gas/liquid equilibration), drawn as ONE system kept on screen for all three steps: the media reservoir with its gas line,
   the inflow O2 sensor, the vertical tissue chamber, the outflow O2 sensor and the fraction collector.
   Step 1 (Equilibrate): gas bubbles through the media, setting its dissolved O2 / CO2 / H2S.
   Step 2 (Perifuse): pressure, not a pump, drives the media up through the chamber and over the tissue.
   Step 3 (Measure): O2 is read in and out; the difference is the OCR; outflow fractions are collected tube by tube. */
var SCW=760,SCH=520;
function exScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<clipPath id="exClR"><rect x="60" y="150" width="130" height="230" rx="14"/></clipPath>'+
    '<clipPath id="exClC"><rect x="380" y="170" width="50" height="230" rx="8"/></clipPath>';
  for(i=0;i<4;i++){var cx=600+i*40;g+='<clipPath id="exClT'+i+'"><path d="M'+cx+' 196V280Q'+cx+' 290 '+(cx+10)+' 290Q'+(cx+20)+' 290 '+(cx+20)+' 280V196Z"/></clipPath>'}
  g+='</defs>';
  if(!mob)g+='<text class="t" x="20" y="24">ONE BAROFUSE CHANNEL, SCHEMATIC</text>';
  /* tubing (behind the vessels) */
  g+='<path class="pipe sD" d="M190 360H320V430H405V400"/><path class="pipe sD" d="M405 170V110H610V182"/>';
  /* the media reservoir: liquid, the gas line dipping into it, bubbles */
  g+='<g clip-path="url(#exClR)"><rect class="liq" x="60" y="230" width="130" height="150"/>';
  g+='<g id="exBub">';for(i=0;i<7;i++){g+='<circle class="bub" cx="'+(95+((i%3)-1)*6)+'" cy="320" r="'+(2.4+(i%3)*.6)+'"/>'}g+='</g></g>';
  g+='<rect class="vs sD" x="60" y="150" width="130" height="230" rx="14"/><path class="lvl" d="M60 230H190"/>';
  g+='<path id="exGas" class="gas" d="M95 36V326"/>';
  /* pressure on the headspace (step 2) */
  g+='<g id="exP" class="parr"><path d="M132 168V212M126 206L132 212L138 206"/><path d="M162 168V212M156 206L162 212L168 206"/></g>';
  /* the tissue chamber: perifusate fill and the tissue */
  g+='<g clip-path="url(#exClC)"><rect id="exFill" class="fill" x="380" y="170" width="50" height="230"/></g>';
  g+='<rect class="vs sD" x="380" y="170" width="50" height="230" rx="8"/>';
  g+='<ellipse id="exTis" class="tis" cx="405" cy="290" rx="17" ry="6.5"/>';
  /* media flow on the tubing and through the chamber */
  g+='<path id="exFI" class="flow" d="M190 360H320V430H405V170"/><path id="exFO" class="flow" d="M405 170V110H610V182"/>';
  /* O2 sensors in and out */
  g+='<circle id="exS1" class="sens" cx="362" cy="430" r="7"/><circle id="exS2" class="sens" cx="508" cy="110" r="7"/>';
  /* fraction collector: a rack of tubes that steps along under the fixed outlet */
  g+='<path class="rail2" d="M470 300H744"/>';
  g+='<g id="exRack">';for(i=0;i<4;i++){var tx=600+i*40;
    g+='<g clip-path="url(#exClT'+i+')"><rect class="tfill" id="exT'+i+'" x="'+tx+'" y="290" width="20" height="0"/></g>'+
       '<path class="vs tube" d="M'+tx+' 196V280Q'+tx+' 290 '+(tx+10)+' 290Q'+(tx+20)+' 290 '+(tx+20)+' 280V196"/>';}
  g+='</g>';
  /* labels */
  g+='<text class="t" x="108" y="48">GAS IN</text>';
  g+='<text class="t" x="60" y="408">MEDIA</text>';
  g+='<text class="t" x="368" y="294" text-anchor="end">TISSUE</text>';
  g+='<text class="t" x="336" y="462">O₂ IN</text>';
  g+='<text class="t" x="482" y="88">O₂ OUT</text>';
  g+='<text class="t" x="560" y="330">FRACTIONS</text>';
  g+='<g id="exL1"><text class="t s1" x="60" y="'+(mob?440:436)+'">O₂ · CO₂ · H₂S</text></g>';
  g+='<g id="exL2"><text class="t s1" x="60" y="'+(mob?440:436)+'">'+(mob?"NO PUMP":"PRESSURE, NO PUMP")+'</text></g>';
  g+='<g id="exL3"><text class="t s1" x="'+(mob?250:240)+'" y="508">'+(mob?"OCR = IN − OUT":"O₂ CONSUMPTION = IN − OUT")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · EQUILIBRATE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · PERIFUSE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · MEASURE</text></g>';
  return g+'</svg>';
}
function scene(){return exScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),bub:$$("#exBub .bub",svg),gas:$("#exGas",svg),P:$("#exP",svg),fill:$("#exFill",svg),tis:$("#exTis",svg),
    fi:$("#exFI",svg),fo:$("#exFO",svg),s1:$("#exS1",svg),s2:$("#exS2",svg),rack:$("#exRack",svg),T:[0,1,2,3].map(function(i){return $("#exT"+i,svg)}),
    L1:$("#exL1",svg),L2:$("#exL2",svg),L3:$("#exL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),
    rest:$$("text.t:not(.s1),.liq,.lvl,.rail2,.tube",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.rest.forEach(function(e){op(e,b)})}
    /* step 1: gas on, bubbles rise through the media */
    var s1=seg(p,.02,.12);op(E.gas,b*(.35+.65*s1));
    E.bub.forEach(function(c,i){var ph=((p*6+i*.29)%1),y=322-ph*88;c.setAttribute("cy",y.toFixed(1));op(c,b*s1*(1-ph)*.9)});
    op(E.L1,b*seg(p,.04,.12)*(1-seg(p,.33,.38)));
    /* step 2: pressure on the headspace drives media up through the chamber */
    var s2=seg(p,.38,.46);op(E.P,b*s2);
    op(E.fi,b*s2);E.fi.style.strokeDashoffset=(-p*900).toFixed(1);
    op(E.fill,b*(.04+.34*ease(seg(p,.4,.58))));
    op(E.tis,b*(.55+.45*seg(p,.44,.56)));
    op(E.L2,b*seg(p,.46,.54)*(1-seg(p,.66,.7)));
    /* step 3: sensors read in and out, fractions collected tube by tube while the rack steps along */
    var s3=seg(p,.7,.76);
    E.s1.classList.toggle("on",s3>.5);E.s2.classList.toggle("on",s3>.5);
    op(E.fo,b*s3);E.fo.style.strokeDashoffset=(-p*900).toFixed(1);
    var f=seg(p,.74,.98)*3.6;
    E.T.forEach(function(t,i){var v=cl(f-i),hh=58*v;t.setAttribute("y",(290-hh).toFixed(1));t.setAttribute("height",hh.toFixed(1))});
    var k=Math.min(3,Math.floor(f)),kk=k+(k<3?ease(cl((f-k-.82)/.18)):0);
    E.rack.setAttribute("transform","translate("+(-40*kk).toFixed(1)+" 0)");
    op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
