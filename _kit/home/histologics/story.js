/* The story scene (BL/BY/DB): how Kylon(R) works (histologicswc.com and histologicswh.com About pages), as ONE continuous
   cross-section: a device head with its Kylon pad (woven base, micro-hooks) above an epithelium of cells over a
   basement membrane and stroma, with a transport vial of fixative to the right.
   Step 1 (press): the head comes down; under light pressure the hooks flex and their tips meet the tissue face.
   Step 2 (rotate): the head works back and forth; surface cells de-bond and lift up into the hook array.
   Step 3 (capture): the head lifts with the tissue trapped in the fabric, snaps free of the handle and drops into the
   vial for the lab. Schematic. Every element is driven by the scrubbed story progress. */
var SCW=600,SCH=520;
var SURF=310,BM=392,PX=150,PW=260;
var HK=(function(){var a=[];for(var i=0;i<26;i++)a.push({x:8+i*(PW-16)/25,d:(i%3)-1,l:34+(i*7%5)});return a})();
var CELLS=(function(){var a=[];for(var r=0;r<3;r++)for(var i=0;i<14;i++){var w=46,x=24+i*w+(r%2?w/2:0);if(x>580)continue;
  a.push({x:x,y:SURF+16+r*25,rx:21,ry:11.5,r:r,lift:r===0&&x>PX+20&&x<PX+PW-20})}return a})();
var FR=CELLS.filter(function(c){return c.lift});
function hookD(h,f){/* a micro-hook hanging from the pad base: f 0 = upright, 1 = flexed */
  var L=h.l*(1-.28*f),bx=h.x,tx=bx+h.d*3+f*13,ty=L;
  return 'M'+bx.toFixed(1)+' 0Q'+(bx+f*2).toFixed(1)+' '+(L*.6).toFixed(1)+' '+tx.toFixed(1)+' '+ty.toFixed(1)+'q4 5 9 0'}
function kylonScene(o){
  var g='',i,cx=PW*.5;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="M0 '+SURF+'C160 '+(SURF-3)+' 360 '+(SURF+3)+' 600 '+SURF+'"/>';
  g+='<path class="bm sD" d="M0 '+BM+'C50 '+(BM-8)+' 90 '+(BM+8)+' 140 '+BM+'S230 '+(BM-8)+' 280 '+BM+'S370 '+(BM+8)+' 420 '+BM+'S510 '+(BM-8)+' 560 '+BM+'S600 '+(BM+4)+' 600 '+BM+'"/>';
  for(i=0;i<4;i++){var y=BM+24+i*28;if(i===2)continue;g+='<path class="cg sD" d="M0 '+y+'c40 -7 70 7 110 0s70 -7 110 0 70 7 110 0 70 -7 110 0 70 7 110 0"/>'}
  g+='<path class="vs sD" d="M0 '+(BM+70)+'C160 '+(BM+62)+' 400 '+(BM+78)+' 600 '+(BM+68)+'"/><path class="vs sD" d="M0 '+(BM+94)+'C160 '+(BM+88)+' 400 '+(BM+102)+' 600 '+(BM+92)+'"/>';
  g+='<text class="t" x="6" y="'+(SURF-12)+'">TISSUE</text>';
  g+='<text class="t" x="6" y="'+(BM+44)+'">STROMA</text><text class="t" x="6" y="'+(BM+120)+'">CAPILLARY</text>';
  g+='</g>';
  g+='<g id="scCel">';CELLS.forEach(function(c,k){g+='<g class="cel" data-k="'+k+'"><ellipse class="ce" cx="'+c.x+'" cy="'+c.y+'" rx="'+c.rx+'" ry="'+c.ry+'"/><circle class="cn" cx="'+c.x+'" cy="'+c.y+'" r="3.4"/></g>'});g+='</g>';
  /* the transport vial, with fixative */
  g+='<g id="scVial"><path class="vl" d="M482 120v156a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V120"/><path class="vc" d="M472 120h100"/><path class="fx" d="M484 196h76v80a6 6 0 0 1-6 6h-64a6 6 0 0 1-6-6z"/><text class="t" x="484" y="104">TO THE LAB</text></g>';
  /* the handle (drawn in head coordinates) and the head with its Kylon pad */
  g+='<g id="scHandle"><path class="hd" d="M'+(cx-30)+' 0L'+(cx-14)+' -22V-190M'+(cx+30)+' 0L'+(cx+14)+' -22V-190"/><path class="sn" d="M'+(cx-24)+' -10h48"/></g>';
  g+='<g id="scHead"><path class="hb" d="M0 -26h'+PW+'v26H0z"/>';
  for(i=0;i<12;i++)g+='<path class="wv" d="M'+(6+i*21)+' -22l10 18M'+(16+i*21)+' -22l-10 18"/>';
  g+='<g id="scHooks">';HK.forEach(function(h,k){g+='<path class="hk" data-k="'+k+'" d="'+hookD(h,0)+'"/>'});g+='</g>';
  g+='<g id="scCap">';FR.forEach(function(c,k){var x=20+k*((PW-40)/Math.max(1,FR.length-1));g+='<ellipse class="cf" data-k="'+k+'" cx="'+x.toFixed(1)+'" cy="'+(16+(k%2)*8)+'" rx="15" ry="7"/>'});g+='</g>';
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="6" y="30">'+(o.mob?'PRESS · HOOKS FLEX':'PRESS · THE MICRO-HOOKS FLEX')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="6" y="30">'+(o.mob?'ROTATE · TISSUE LIFTS':'ROTATE · SURFACE CELLS LIFT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="6" y="30">'+(o.mob?'CAPTURE · INTO THE VIAL':'CAPTURE · THE TIP SNAPS INTO THE VIAL')+'</text></g>';
  return g+'</svg>';
}
function scene(){return kylonScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    cel:$$(".cel",svg).map(function(el){return {el:el,c:CELLS[+el.getAttribute("data-k")]}}),
    hk:$$(".hk",svg).map(function(el){return {el:el,h:HK[+el.getAttribute("data-k")]}}),
    cf:$$(".cf",svg),head:$("#scHead",svg),handle:$("#scHandle",svg),vial:$("#scVial",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var down=sm(seg(p,.02,.2)),flex=sm(seg(p,.14,.28)),rot=seg(p,.36,.62),lift=sm(seg(p,.4,.62)),
        up=sm(seg(p,.66,.76)),snap=sm(seg(p,.74,.8)),drop=sm(seg(p,.8,.95)),vial=sm(seg(p,.6,.72));
    /* the head: down onto the tissue, back and forth, up, then over and down into the vial */
    var touch=SURF-30,hy=150+(touch+flex*6-150)*down-up*120,hx=PX+Math.sin(rot*Math.PI*4)*22*(1-up);
    var s=1-.74*drop,vx=522-PW*s*.5,vy=258;
    var sx=hx+(vx-hx)*drop,sy=hy+(vy-hy)*drop;
    E.head.setAttribute("transform","translate("+sx.toFixed(1)+" "+sy.toFixed(1)+") scale("+s.toFixed(3)+")");
    op(E.head,b);
    E.handle.setAttribute("transform","translate("+hx.toFixed(1)+" "+(hy-26-snap*40-drop*60).toFixed(1)+")");
    op(E.handle,b*(1-sm(seg(p,.8,.9))));
    E.hk.forEach(function(H){H.el.setAttribute("d",hookD(H.h,Math.max(0,flex*(1-up*.7)+Math.sin(rot*Math.PI*4+H.h.x*.03)*.15*(1-up))))});
    E.cel.forEach(function(C){op(C.el,b*(C.c.lift?1-lift:1))});
    E.cf.forEach(function(el,k){op(el,b*sm((lift-k*.03)*1.6))});
    op(E.vial,b*vial);
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
