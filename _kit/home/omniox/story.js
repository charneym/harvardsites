/* The story scene (BL/BY/DB): OMX's mechanism of action (omniox.com Technology, "Mechanism of Action"), as ONE continuous
   scene in fine line: a capillary runs down the left edge, and tissue cells tile the space to its right, out to a hypoxic
   core. Step 1 (hypoxia): the cells colour by oxygen, lit beside the vessel and falling dark with distance. Step 2 (carry):
   red cells in the capillary let their O2 go at once, and it reaches only the first cells; OMX carriers (three linked
   H-NOX domains, as in Omniox's own render) leave the vessel still holding theirs. Step 3 (restore): the carriers reach the
   core, release O2, and the core cells light up. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var VX0=40,VX1=104;            /* capillary walls */
var TC=(function(){var a=[],r=27,dx=r*Math.sqrt(3),dy=r*1.5,row,col;
  for(row=0;row<11;row++)for(col=0;col<12;col++){var x=150+col*dx+(row%2?dx/2:0),y=60+row*dy;if(x>735||y>440)continue;
    var d=(x-150)/585;a.push({x:x,y:y,d:d,core:Math.hypot(x-560,(y-250)*1.2)<150})}return a})();
var RBC=(function(){var a=[],i;for(i=0;i<7;i++)a.push({y:20+i*68,x:72+(i%2?-8:8)});return a})();
var OMX=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<9;i++)a.push({y0:70+i*42,tx:470+R()*190,ty:150+R()*200,dl:i*.035});return a})();
function hexD(cx,cy,r){var d='';for(var k=0;k<6;k++){var t=Math.PI/180*(60*k+30);d+=(k?'L':'M')+(cx+r*Math.cos(t)).toFixed(1)+' '+(cy+r*Math.sin(t)).toFixed(1)}return d+'Z'}
function o2(){return '<g class="o2"><circle cx="-3.2" cy="0" r="3.4"/><circle cx="3.2" cy="0" r="3.4"/></g>'}
function tisScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: capillary, tissue cells, captions ---- */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="M'+VX0+' 0V470M'+VX1+' 0V470"/>';
  TC.forEach(function(c){g+='<path class="tc sD" d="'+hexD(c.x,c.y,25)+'"/>'});
  g+='<text class="t" x="'+VX0+'" y="492">CAPILLARY</text>';
  g+='<text class="t" x="150" y="492">TISSUE · DISTANCE FROM THE VESSEL →</text>';
  g+='</g>';
  /* ---- oxygenation fill of each cell (lit / hypoxic) and nuclei ---- */
  g+='<g id="scFill">';
  TC.forEach(function(c,k){g+='<path class="tf" data-k="'+k+'" d="'+hexD(c.x,c.y,23)+'"/><circle class="nu" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" r="4"/>'});
  g+='</g>';
  /* ---- the hypoxic core outline ---- */
  g+='<g id="scCore"><ellipse class="co" cx="560" cy="250" rx="150" ry="125"/><text class="a" x="560" y="112" text-anchor="middle">HYPOXIC CORE</text></g>';
  /* ---- red cells in the capillary, and the O2 they shed close by ---- */
  g+='<g id="scRbc">';
  RBC.forEach(function(r,k){g+='<g class="rb" data-k="'+k+'"><ellipse class="cb" rx="20" ry="11"/><ellipse class="dm" rx="8" ry="4"/></g>'});
  g+='</g><g id="scRo">';
  for(i=0;i<12;i++)g+='<g class="ro" data-k="'+i+'">'+o2()+'</g>';
  g+='</g>';
  /* ---- OMX carriers: three linked domains, each with its O2 ---- */
  g+='<g id="scOmx">';
  OMX.forEach(function(m,k){g+='<g class="om" data-k="'+k+'"><path class="lk" d="M0 -9L-8 5L8 5Z"/><circle class="dmn" cx="0" cy="-9" r="5.5"/><circle class="dmn" cx="-8" cy="5" r="5.5"/><circle class="dmn" cx="8" cy="5" r="5.5"/><g class="ld">'+o2()+'</g></g>'});
  g+='</g><g id="scMo">';
  for(i=0;i<18;i++)g+='<g class="mo" data-k="'+i+'">'+o2()+'</g>';
  g+='</g>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-2;
  g+='<g id="lb1"><text class="a" x="150" y="'+ly+'">OXYGEN FALLS WITH DISTANCE · CORE HYPOXIC</text></g>';
  g+='<g id="lb2"><text class="a" x="150" y="'+ly+'">RED CELLS RELEASE EARLY · OMX CARRIES ON</text></g>';
  g+='<g id="lb3"><text class="a" x="150" y="'+ly+'">OMX RELEASES O₂ · CORE OXYGENATED</text></g>';
  return g+'</svg>';
}
function scene(){return tisScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),tf:$$(".tf",svg),nu:$$(".nu",svg),core:$("#scCore",svg),
    rb:$$(".rb",svg),ro:$$(".ro",svg),om:$$(".om",svg),mo:$$(".mo",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mix(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){op(el,b)});E.nu.forEach(function(el){op(el,b*.5)})}
    var hyp=seg(p,.04,.26),car=seg(p,.36,.62),rel=seg(p,.66,.86);
    /* tissue oxygenation: lit near the vessel, falling dark with distance; the core lights again as OMX releases */
    E.tf.forEach(function(el,k){var c=TC[k],ox=Math.max(0,1-c.d*1.6);if(c.core)ox=Math.max(ox,rel*.85);
      var lit=mix(.5,ox,hyp),hy=hyp*(1-ox)*(c.core?1:.5);
      el.style.fillOpacity=(b*(.06+.44*lit)).toFixed(3);el.style.fill=ox>.45?"#66ccff":"#3d5f86";
      el.style.stroke="rgba(214,90,110,"+(b*hy*.6).toFixed(3)+")"});
    op(E.core,b*seg(p,.14,.28)*(1-.6*rel));
    /* red cells stream down the capillary */
    var fl=p*520;
    E.rb.forEach(function(el,k){var r=RBC[k],y=(r.y+fl)%480-10;el.setAttribute("transform","translate("+r.x+" "+y.toFixed(1)+") rotate(90)");op(el,b)});
    /* their O2 leaves at once and fades within the first cells */
    E.ro.forEach(function(el,k){var t=Math.min(1,Math.max(0,car*1.5-(k%6)*.08)),y=50+k*34,x=VX1+8+t*(70+(k%3)*22);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y+")");op(el,b*Math.sin(Math.PI*t)*.95)});
    /* OMX carriers leave the vessel holding their O2 and travel to the core */
    E.om.forEach(function(el,k){var m=OMX[k],t=Math.min(1,Math.max(0,(car-m.dl)/(1-m.dl)*1.15)),e=t*t*(3-2*t);
      var x=mix(72,m.tx,e),y=mix(m.y0,m.ty,e)+Math.sin(e*6+k)*8*(1-e);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*seg(p,.3,.4));
      var ld=el.querySelector(".ld");if(ld){ld.setAttribute("transform","translate(0 -1) scale(.8)");op(ld,1-rel)}});
    /* released O2 spreads through the core */
    E.mo.forEach(function(el,k){var m=OMX[k%9],a=k*2.39996,t=Math.min(1,Math.max(0,rel*1.4-(k%5)*.07)),rr=8+t*(34+(k%4)*10);
      el.setAttribute("transform","translate("+(m.tx+Math.cos(a)*rr).toFixed(1)+" "+(m.ty+Math.sin(a)*rr).toFixed(1)+")");op(el,b*t*(1-.45*seg(p,.92,1)))});
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
