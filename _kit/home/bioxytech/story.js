/* The story scene (BL/BY/DB): Bioxytech's measurement (NSF SBIR 1853245 outcomes, NIH R43MD019594 abstract, OIS Retina
   profile) as ONE continuous engraved scene: the optic disc and retinal vessels of a fundus snapshot. Step 1: the vessel
   tree engraves in, as a standard fundus photo captures it. Step 2: spatially modulated light (a band of fine stripes)
   sweeps the field and every vessel takes its oxygen colour: pale iris for oxygen-rich arteries, deep blue for veins.
   Step 3: one sector's veins drift to lower saturation, and a marker flags it: the functional change that precedes
   structural damage. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,DCX=318,DCY=262;
var STO=(function(){
  var s=1853245,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  var V=[];
  function grow(x,y,a,w,art,dep,len,out){var pts=[[x,y]],cv=0,L=0,nb=60+R()*50;
    while(L<len&&x>28&&x<SCW-28&&y>34&&y<SCH-48){cv=cv*.9+(R()-.5)*.05;a+=cv;
      x+=Math.cos(a)*5;y+=Math.sin(a)*5;L+=5;pts.push([x,y]);
      if(L>nb&&dep<2){nb=L+55+R()*60;var sd=R()<.5?-1:1;grow(x,y,a+sd*(.5+R()*.4),w*.62,art,dep+1,len*.55,out)}}
    if(pts.length>3)out.push({p:pts,W:w,art:art,dep:dep,sec:0})}
  var M=[[-58,3.4,0],[-72,2.6,1],[60,3.5,0],[74,2.6,1],[-130,2.6,0],[-142,2,1],[128,2.6,0],[140,2,1],[176,2,0],[168,1.6,1],[-6,1.7,0],[8,1.4,1]];
  M.forEach(function(m){var a=m[0]*Math.PI/180;grow(DCX+Math.cos(a)*14,DCY+Math.sin(a)*16,a,m[1],m[2],0,340,V)});
  /* draw veins first, arteries over them */
  V.sort(function(a,b){return a.art-b.art});
  /* the flagged sector: veins whose midpoint lies lower-right of the disc */
  V.forEach(function(v){var q=v.p[Math.floor(v.p.length*.6)];if(!v.art&&q[0]>DCX+50&&q[1]>DCY+40)v.sec=1});
  return {V:V};
})();
function vpath(v){return "M"+v.p.map(function(q){return q[0].toFixed(1)+" "+q[1].toFixed(1)}).join("L")}
function memScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="scClip"><rect x="24" y="24" width="712" height="452"/></clipPath>'+
     '<pattern id="scStr" width="9" height="9" patternUnits="userSpaceOnUse"><rect width="4" height="9" fill="rgba(190,221,233,.16)"/></pattern></defs>';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/>';
  g+='<text class="t" x="24" y="10">RIGHT EYE · OPTIC DISC AND ARCADES · SCHEMATIC</text></g>';
  g+='<g id="scDisc"><circle class="dk" cx="'+DCX+'" cy="'+DCY+'" r="34"/><circle class="dc" cx="'+(DCX+3)+'" cy="'+DCY+'" r="14"/></g>';
  g+='<g id="scV">';
  STO.V.forEach(function(v,k){g+='<path class="vs" data-k="'+k+'" d="'+vpath(v)+'" stroke-width="'+(Math.max(.8,v.W)*(o.mob?1.25:1)).toFixed(2)+'"/>'});
  g+='</g>';
  g+='<g clip-path="url(#scClip)"><rect id="scSweep" x="-180" y="24" width="150" height="452" fill="url(#scStr)" opacity="0"/></g>';
  g+='<g id="scFlag"><circle class="fl" cx="'+(DCX+170)+'" cy="'+(DCY+110)+'" r="78"/><path class="fl2" d="M'+(DCX+225)+' '+(DCY+55)+'L'+(DCX+262)+' '+(DCY+18)+'H'+(SCW-30)+'"/></g>';
  g+='<g id="lb1"><text class="a" x="24" y="48">ONE FUNDUS SNAPSHOT</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="48">OXYGEN SATURATION, VESSEL BY VESSEL</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="48">LOW VENOUS OXYGEN · FLAGGED EARLY</text><text class="t" x="'+(SCW-30)+'" y="'+(DCY+8)+'" text-anchor="end">FUNCTIONAL CHANGE</text></g>';
  g+='<text class="t k1" x="24" y="486">● OXYGEN-RICH ARTERY</text><text class="t k2" x="'+(o.mob?360:250)+'" y="486">● VENOUS RETURN</text>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, .k1, .k2",svg),disc:$("#scDisc",svg),sw:$("#scSweep",svg),
    v:$$(".vs",svg).map(function(el){var v=STO.V[+el.getAttribute("data-k")],L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;return {el:el,v:v,L:L,last:""}}),
    fl:dl("#scFlag .fl2"),flc:$("#scFlag .fl",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  /* bone grey -> artery pale iris (190,221,233) / vein blue (79,127,192) -> flagged deep (38,62,120) */
  function mix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
  var G=[200,208,214],AR=[190,221,233],VE=[79,127,192],LO=[38,62,120];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.24),sw=seg(p,.32,.62),lo=seg(p,.68,.86);
    op(E.disc,b*Math.min(1,grow*3));
    var sx=-180+(SCW+200)*sw;E.sw.setAttribute("x",sx.toFixed(1));op(E.sw,b*Math.sin(Math.PI*sw));
    E.v.forEach(function(x){var v=x.v,gi=Math.min(1,Math.max(0,grow*1.7-v.dep*.3));
      x.el.style.strokeDashoffset=(x.L*(1-gi)).toFixed(1);
      /* each vessel takes its colour as the stripe band passes it */
      var q=v.p[Math.floor(v.p.length/2)][0],ct=sw>=1?1:Math.min(1,Math.max(0,(sx+75-q)/120));
      var c=mix(G,v.art?AR:VE,ct);if(v.sec)c=mix(c,LO,lo);
      var k=c.map(Math.round).join(",");if(k!==x.last){x.last=k;x.el.style.stroke="rgb("+k+")"}
      op(x.el,b*(v.sec?1:1-.3*lo))});
    draw(E.fl,lo);op(E.flc,b*lo);if(E.flc)E.flc.setAttribute("r",(60+18*lo).toFixed(1));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
