/* The story scene (DB/BL): how BA-210 works (bioaxonebio.com Technology and Disease Focus), as ONE continuous scene in
   fine line, filling the frame: a longitudinal section of the spinal cord, its myelinated axons running left to right,
   cut by a lesion in the middle. Frame 0 is already complete. Step 1 (injury): inhibitory proteins at the lesion light and
   Rho switches on in the cut axon tips (amber). Step 2 (deliver): during decompression surgery an applicator lays BA-210 in
   a fibrin sealant over the injury; the drug diffuses in and Rho at each tip goes dark. Step 3 (regrow): growth cones
   extend from the tips across the lesion and reconnect with the far side. Every element is driven by the scrubbed story
   progress. */
var SCW=760,SCH=560;
var CT=150,CB=410,LX=380,LW=64;               /* cord top/bottom, lesion centre and half-width */
var AXY=[190,226,262,298,334,370];             /* axon rows */
var TIP=[LX-LW-6,LX-LW+4,LX-LW-14,LX-LW+2,LX-LW-8,LX-LW-2];   /* where each cut axon ends (left side) */
var FAR=[LX+LW+10,LX+LW-2,LX+LW+14,LX+LW+4,LX+LW+6,LX+LW-4];  /* where the distal side begins */
var INH=(function(){var s=5,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<12;i++){var t=i/12*Math.PI*2+R()*.4;a.push({x:LX+Math.cos(t)*(LW-8+R()*14),y:280+Math.sin(t)*(108+R()*14)})}return a})();
var DRP=(function(){var s=9,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<14;i++)a.push({x:LX-LW+10+R()*(2*LW-20),y0:CT-6,y1:AXY[i%6]+(R()-.5)*14,d:R()*.35});return a})();
function lesion(){ /* an irregular cavity, drawn as one closed path */
  var p='',i,n=28;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,r=1+.09*Math.sin(t*3+1)+.06*Math.sin(t*5+.4);
    var x=LX+Math.cos(t)*LW*.82*r,y=280+Math.sin(t)*118*r;p+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return p+'Z'}
function regrow(k){ /* a gently wandering path from the cut tip to the far side */
  var y=AXY[k],x0=TIP[k],x1=FAR[k],w=(k%2?1:-1)*(6+k*1.5);
  return 'M'+x0+' '+y+'C'+(x0+40)+' '+(y+w)+' '+(x1-40)+' '+(y-w*.6)+' '+x1+' '+y}
function vesScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* ---- the cord: dura, pia, and the grey/white boundary ---- */
  g+='<path class="wl sD" d="M16 '+(CT-14)+'C200 '+(CT-22)+' 560 '+(CT-22)+' 744 '+(CT-14)+'"/>';
  g+='<path class="wl sD" d="M16 '+(CB+14)+'C200 '+(CB+22)+' 560 '+(CB+22)+' 744 '+(CB+14)+'"/>';
  g+='<path class="wo sD" d="M16 '+CT+'C200 '+(CT-6)+' 560 '+(CT-6)+' 744 '+CT+'"/>';
  g+='<path class="wo sD" d="M16 '+CB+'C200 '+(CB+6)+' 560 '+(CB+6)+' 744 '+CB+'"/>';
  /* ---- the lesion ---- */
  g+='<path class="wl sD ls" d="'+lesion()+'"/>';
  g+='<path class="en sD" d="M'+(LX-30)+' 220c14 10 30 8 44-4M'+(LX-36)+' 330c18-8 40-6 54 8M'+(LX-10)+' 270c8 6 16 6 24 0"/>';
  /* ---- axons: proximal (myelinated, cut at a retraction bulb) and distal (thinner, waiting) ---- */
  AXY.forEach(function(y,k){
    g+='<path class="wl sD" d="M20 '+y+'H'+TIP[k]+'"/>';
    for(i=0;i<5;i++){var mx=36+i*((TIP[k]-70)/5)+(k%2)*14;g+='<path class="wo sD my" d="M'+mx.toFixed(0)+' '+(y-5)+'h'+Math.round((TIP[k]-70)/5-10)+'M'+mx.toFixed(0)+' '+(y+5)+'h'+Math.round((TIP[k]-70)/5-10)+'"/>'}
    g+='<path class="wo sD" d="M'+FAR[k]+' '+y+'H740"/>';
    g+='<circle class="wl sD" cx="'+(TIP[k]+4)+'" cy="'+y+'" r="4"/>';
  });
  /* ---- the applicator above the dorsal surface ---- */
  g+='<path class="wl sD" d="M'+(LX-12)+' 22h24l-6 56h-12Z"/><path class="wo sD" d="M'+LX+' 78v26"/>';
  g+=T('t',24,CT-40,o.mob?'SPINAL CORD':'SPINAL CORD · LONGITUDINAL SECTION',null,1);
  g+=T('t',LX,CB+60,'INJURY SITE','middle',1);
  g+=T('t',24,CB+60,'INJURED AXONS');
  g+=T('t',736,CB+60,'FAR SIDE','end');
  g+=T('t',LX+26,46,'BA-210 IN FIBRIN SEALANT');
  g+='</g>';
  /* ---- the sealant layer laid over the dorsal surface ---- */
  g+='<g id="scSeal"><path class="seal" d="M'+(LX-LW-30)+' '+(CT-16)+'C'+(LX-40)+' '+(CT-46)+' '+(LX+40)+' '+(CT-46)+' '+(LX+LW+30)+' '+(CT-16)+'Z"/></g>';
  /* ---- inhibitory proteins at the lesion margin ---- */
  g+='<g id="scInh">';INH.forEach(function(a,k){g+='<g class="md ag" data-k="'+k+'" transform="translate('+a.x.toFixed(1)+' '+a.y.toFixed(1)+')"><path d="M0 -5L5 4L-5 4Z"/></g>'});g+='</g>';
  /* ---- BA-210 diffusing in ---- */
  g+='<g id="scDrp">';DRP.forEach(function(d,k){g+='<circle class="drp" data-k="'+k+'" r="3.2"/>'});g+='</g>';
  /* ---- Rho at each cut tip ---- */
  g+='<g id="scRho">';AXY.forEach(function(y,k){g+='<circle class="rho" cx="'+(TIP[k]+4)+'" cy="'+y+'" r="7"/>'});g+='</g>';
  /* ---- regrowth across the lesion, each ending in a growth cone ---- */
  g+='<g id="scGrow">';AXY.forEach(function(y,k){g+='<path class="rg" d="'+regrow(k)+'"/>'});
  AXY.forEach(function(y,k){g+='<g class="gc"><path d="M0 0l7 -6M0 0l9 0M0 0l7 6"/></g>'});g+='</g>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">INHIBITORY PROTEINS · RHO OVER-ACTIVATED</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">BA-210 DELIVERED AT DECOMPRESSION · RHO LOCKED OFF</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">AXONS REGENERATE ACROSS THE INJURY</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),seal:$("#scSeal",svg),
    inh:$$("#scInh .ag",svg),drp:$$("#scDrp .drp",svg),rho:$$("#scRho .rho",svg),rg:dl("#scGrow .rg"),gc:$$("#scGrow .gc",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var rgP=$$("#scGrow .rg",svg),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var inj=seg(p,.06,.28),del=seg(p,.34,.64),grow=seg(p,.68,.96);
    /* 1. inhibitory proteins light at the margin; Rho switches on at each cut tip */
    E.inh.forEach(function(el,k){var t=Math.min(1,Math.max(0,inj*1.6-k*.05));op(el,b*(.35+.65*t)*(1-grow*.5));el.classList.toggle("on",t>.6&&del<.9)});
    /* 2. the sealant settles over the injury and BA-210 diffuses down to the tips; Rho goes dark */
    op(E.seal,b*Math.min(1,del*3)*(1-grow*.35));
    E.drp.forEach(function(el,k){var d=DRP[k],t=Math.min(1,Math.max(0,(del-d.d)/.6));
      el.setAttribute("cx",d.x.toFixed(1));el.setAttribute("cy",(d.y0+(d.y1-d.y0)*t).toFixed(1));op(el,b*(t>0?Math.min(1,t*4):0)*(1-grow))});
    E.rho.forEach(function(el,k){var on=inj*(1-Math.min(1,Math.max(0,del*1.5-k*.08)));op(el,b*(.12+.88*on));el.classList.toggle("on",on>.3)});
    /* 3. growth cones extend across the lesion */
    E.rg.forEach(function(a,k){var t=Math.min(1,Math.max(0,grow*1.3-k*.05));a[0].style.strokeDashoffset=(a[1]*(1-t)).toFixed(1);
      var pt=rgP[k].getPointAtLength(Math.max(.01,a[1]*t)),el=E.gc[k];
      el.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+pt.y.toFixed(1)+")");op(el,b*(t>0&&t<1?1:t>=1?.4:0))});
    op(E.l1,b*seg(p,.1,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
