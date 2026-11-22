/* The story scene (BL/BY/DB): how a SunVida sensor works, as ONE continuous cross-section of the sensing interface
   (kilelehealth.com, the 2025-03-23 release, and Young et al., ACS Sensors 2026, PMID 42925536). A gold electrode, its
   dense "mixed charge" monolayer (compact amine (+) and carboxyl (-) terminated thiolates), and tethered aptamer strands,
   each with a reporter at its tip. Step 1 (bind): target molecules (logo green) arrive and each strand folds around its
   target, bringing the reporter down to the electrode, which reads the change as current. Step 2 (resist): large serum
   proteins drift down and are turned back by the hydrated, charge-balanced surface. Step 3 (last): the 14-day result in
   whole serum: PDGF-bb sensors kept nearly 100% of their signal gain, cortisol sensors about 80%. Every element is driven
   by the scrubbed story progress. */
var SCW=760,SCH=520,ELY=430,MLY=404;
var APX=[150,280,410,540,670];
function apPts(x,i,f){ /* f=0: an open strand rising from the surface; f=1: folded into a compact loop around the target */
  var n=24,a=[],k,s=(i%2?1:-1),cy=MLY-64,R0=26;
  for(k=0;k<n;k++){var u=k/(n-1);
    var ox=x+s*11*Math.sin(u*Math.PI*3),oy=MLY-u*176;
    var fx,fy;
    if(u<.2){fx=x;fy=MLY-u/.2*(MLY-cy-R0)}
    else{var v=(u-.2)/.8,ang=Math.PI/2+s*v*Math.PI*1.8;fx=x+R0*Math.cos(ang)*(1-.25*v)*s;fy=cy+R0*Math.sin(ang)*(1-.25*v)}
    a.push([ox+(fx-ox)*f,oy+(fy-oy)*f]);}
  return a;
}
function cr(a){var d='M'+a[0][0].toFixed(1)+' '+a[0][1].toFixed(1),i;
  for(i=0;i<a.length-1;i++){var p0=a[i-1]||a[i],p1=a[i],p2=a[i+1],p3=a[i+2]||p2;
    d+='C'+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+' '+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)+' '+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+' '+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)+' '+p2[0].toFixed(1)+' '+p2[1].toFixed(1)}
  return d}
var TGT=APX.map(function(x,i){var s=(i%2?1:-1);return {fx:x+s*58+(i%3)*12,fy:236+(i%2)*22,tx:x,ty:MLY-64}});
var PRT=[{x:215,r:30},{x:345,r:24},{x:475,r:33},{x:605,r:26},{x:84,r:22},{x:722,r:20}];
function hexP(r){var d='',k;for(k=0;k<6;k++){var a=Math.PI/3*k+Math.PI/6;d+=(k?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}return d+'Z'}
function blobP(r,s){var d='',k,n=36;for(k=0;k<=n;k++){var a=k/n*Math.PI*2,q=r*(1+.1*Math.sin(a*3+s)+.06*Math.cos(a*5+s*2));d+=(k?'L':'M')+(q*Math.cos(a)).toFixed(1)+' '+(q*Math.sin(a)).toFixed(1)}return d+'Z'}
function sensorScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the electrode: a gold slab with fine engraved hatching */
  g+='<path class="el sD" d="M20 '+ELY+'H740"/><path class="el2 sD" d="M20 '+(ELY+44)+'H740"/>';
  for(i=0;i<35;i++){var hx=30+i*20;g+='<path class="eh sD" d="M'+hx+' '+(ELY+42)+'l16 -40"/>'}
  /* the monolayer: compact thiolates with alternating amine (+) and carboxyl (-) heads */
  for(i=0;i<60;i++){var mx=26+i*12;if(mx>736)break;var near=APX.some(function(x){return Math.abs(x-mx)<6});if(near)continue;
    g+='<path class="ml sD" d="M'+mx+' '+ELY+'V'+(MLY+5)+'"/>';
    g+=(i%2)?'<path class="hd mn sD" d="M'+(mx-3)+' '+MLY+'h6"/>':'<path class="hd pl sD" d="M'+(mx-3)+' '+MLY+'h6M'+mx+' '+(MLY-3)+'v6"/>'}
  g+='<text class="t" x="20" y="'+(ELY+68)+'">GOLD ELECTRODE</text>';
  g+='<text class="t" x="'+(o.mob?300:360)+'" y="'+(ELY+68)+'">'+(o.mob?'MIXED CHARGE LAYER':'MIXED CHARGE MONOLAYER · + AMINE  − CARBOXYL')+'</text>';
  g+='<text class="t" x="20" y="'+(MLY-150)+'">APTAMERS</text>';
  g+='</g>';
  /* the hydration layer the mixed charges hold (step 2) */
  g+='<g id="scHyd">';for(i=0;i<58;i++){var wx=30+i*12.2,wy=MLY-12-(i%3)*7;g+='<circle class="hw" cx="'+wx.toFixed(1)+'" cy="'+wy+'" r="1.7"/>'}g+='</g>';
  /* the aptamers */
  g+='<g id="scAp">';APX.forEach(function(x,i){g+='<path class="ap" d="'+cr(apPts(x,i,0))+'"/><circle class="rp" r="5.5" cx="0" cy="0"/>'});g+='</g>';
  /* electron transfer: the folded reporter, close to the electrode, passes current */
  g+='<g id="scEt">';APX.forEach(function(x,i){g+='<path class="et" d="M'+(x-9)+' '+(MLY-20)+'q8 10 0 18M'+(x+9)+' '+(MLY-20)+'q-8 10 0 18"/>'});g+='</g>';
  /* the targets */
  g+='<g id="scTg">';TGT.forEach(function(t,k){g+='<path class="tg" data-k="'+k+'" d="'+hexP(8)+'"/>'});g+='</g>';
  /* serum proteins */
  g+='<g id="scPr">';PRT.forEach(function(p,k){g+='<path class="pr" data-k="'+k+'" d="'+blobP(p.r,k)+'"/>'});g+='</g>';
  /* the 14-day result, drawn in the open band above the strands (step 3) */
  var cx0=o.mob?170:250,cx1=730,cy0=56,cy1=176;
  var yv=function(v){return cy1-(cy1-cy0)*(v-40)/66};
  g+='<g id="scCh"><path class="ax" d="M'+cx0+' '+cy0+'V'+cy1+'H'+cx1+'"/>';
  for(i=0;i<=14;i+=7){var tx=cx0+(cx1-cx0)*i/14;g+='<path class="ax" d="M'+tx+' '+cy1+'v6"/><text class="t" x="'+(tx-(i?(i==14?(o.mob?86:62):30):0))+'" y="'+(cy1+24)+'">DAY '+i+'</text>'}
  g+='<path class="ax d" d="M'+cx0+' '+yv(100).toFixed(1)+'H'+cx1+'"/><text class="t" x="20" y="'+(yv(100)+4).toFixed(1)+'">'+(o.mob?'100%':'SIGNAL GAIN 100%')+'</text>';
  g+='<path class="ax d" d="M'+cx0+' '+yv(80).toFixed(1)+'H'+cx1+'"/><text class="t" x="20" y="'+(yv(80)+4).toFixed(1)+'">80%</text>';
  var c1='M'+cx0+' '+yv(100).toFixed(1),c2=c1,k2;
  for(k2=1;k2<=28;k2++){var u=k2/28,xx=cx0+(cx1-cx0)*u;c1+='L'+xx.toFixed(1)+' '+yv(100-1.5*Math.sin(u*9)*u).toFixed(1);c2+='L'+xx.toFixed(1)+' '+yv(100-20*(1-Math.exp(-2.6*u))/(1-Math.exp(-2.6))).toFixed(1)}
  g+='<path class="c1" id="scC1" d="'+c1+'"/><path class="c2" id="scC2" d="'+c2+'"/>';
  g+='<text class="a" x="'+(cx1-(o.mob?200:188))+'" y="'+(yv(100)-14).toFixed(1)+'">PDGF-BB · ~100%</text>';
  g+='<text class="g" x="'+(cx1-(o.mob?200:188))+'" y="'+(yv(80)+(o.mob?32:26)).toFixed(1)+'">CORTISOL · ~80%</text></g>';
  /* step labels, in the band under the electrode */
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'TARGET BOUND · STRAND FOLDS':'TARGET BOUND · THE STRAND FOLDS, THE CURRENT CHANGES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'PROTEINS TURNED BACK':'SERUM PROTEINS TURNED BACK · NO MEMBRANE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'14 DAYS IN WHOLE SERUM':'14 DAYS IN WHOLE SERUM · ACS SENSORS, 2026')+'</text></g>';
  return g+'</svg>';
}
function scene(){return sensorScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),hyd:$("#scHyd",svg),ap:$$("#scAp .ap",svg),rp:$$("#scAp .rp",svg),
    et:$$("#scEt .et",svg),tg:$$("#scTg .tg",svg),pr:$$("#scPr .pr",svg),ch:$("#scCh",svg),c1:dl("#scC1"),c2:dl("#scC2"),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastF=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var arr=seg(p,.04,.22),fold=seg(p,.14,.32),hy=seg(p,.38,.5)*(1-seg(p,.72,.8)),ch=seg(p,.72,.9);
    var ff=Math.round(fold*60)/60;
    if(ff!==lastF){lastF=ff;E.ap.forEach(function(el,i){var pts=apPts(APX[i],i,ff);el.setAttribute("d",cr(pts));var t=pts[pts.length-1];E.rp[i].setAttribute("cx",t[0].toFixed(1));E.rp[i].setAttribute("cy",t[1].toFixed(1))})}
    E.ap.forEach(function(el){op(el,b)});E.rp.forEach(function(el){op(el,b)});
    E.tg.forEach(function(el,k){var t=TGT[k],q=Math.min(1,Math.max(0,arr*1.2-k*.04)),e=q*q*(3-2*q);
      el.setAttribute("transform","translate("+(t.fx+(t.tx-t.fx)*e).toFixed(1)+" "+(t.fy+(t.ty-t.fy)*e).toFixed(1)+") rotate("+(e*120).toFixed(0)+")");op(el,b*Math.min(1,arr*3))});
    E.et.forEach(function(el,i){op(el,b*fold*(.55+.45*Math.sin(p*60+i*1.7)))});
    op(E.hyd,b*hy);
    E.pr.forEach(function(el,k){var pp=PRT[k],d=(k%3)*.03,a=seg(p,.38+d,.56+d),r=seg(p,.58+d,.74),y0=200,y1=MLY-40-pp.r,y=y0+(y1-y0)*a-(y1-120)*r;
      el.setAttribute("transform","translate("+pp.x+" "+y.toFixed(1)+")");op(el,b*a*(1-r))});
    op(E.ch,b*ch);draw(E.c1,b*ch);draw(E.c2,b*seg(p,.74,.94));
    op(E.l1,b*seg(p,.16,.24)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.8,.88));
  };
}
