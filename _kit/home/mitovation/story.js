/* The story scene (BL/BY/DB): Mitovation's mechanism as ONE continuous scene, drawn in fine line. A mitochondrion in
   section: outer membrane, inner membrane folded into cristae, and cytochrome c oxidase (COX) sites along the folds
   (mitovation.com/technology.php "Understanding Reperfusion Injury"; Sanderson, Hüttemann et al., Sci Rep 2018).
   Step 1, ischemia: no oxygen arrives and the COX sites go dark. Step 2, reperfusion: oxygen floods back, COX runs
   hyperactive and free radicals burst from the folds. Step 3, Mitovation's light: two inhibitory wavelengths, 750 and
   950 nm, reach the mitochondrion, COX is calmed to a moderate rate and the free radicals fade. Every element is driven
   by the scrubbed story progress. */
var SCW=760,SCH=520,MCX=380,MCY=282,ORX=290,ORY=150,IRX=268,IRY=130;
function hyI(x){var d=(x-MCX)/IRX;return d*d>=1?0:IRY*Math.sqrt(1-d*d)}
function hyO(x){var d=(x-MCX)/ORX;return d*d>=1?0:ORY*Math.sqrt(1-d*d)}
function rnd(s){var x=Math.sin(s*127.1+311.7)*43758.5453;return x-Math.floor(x)}
var SCN=0;
function memScene(o){
  var u='m'+(++SCN),f=function(n){return (+n).toFixed(1)},g='',i;
  var FX=[176,232,288,344,400,456,512,568],FW=9,folds=[],cox=[];
  FX.forEach(function(x,k){var top=k%2===0,hl=hyI(x-FW),hr=hyI(x+FW),dp=[.12,.22,.04,.18,.1,.24,.06,.16][k],tip=top?MCY+hyI(x)*dp:MCY-hyI(x)*dp;
    var yl=top?MCY-hl:MCY+hl,yr=top?MCY-hr:MCY+hr,ta=top?tip-FW:tip+FW;
    folds.push('M'+f(x-FW)+' '+f(yl)+'L'+f(x-FW)+' '+f(ta)+'A'+FW+' '+FW+' 0 0 '+(top?0:1)+' '+f(x+FW)+' '+f(ta)+'L'+f(x+FW)+' '+f(yr));
    var m1=yl+(ta-yl)*.42,m2=yr+(ta-yr)*.78;cox.push([x-FW,m1,k]);cox.push([x+FW,m2,k])});
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="cg'+u+'"><stop offset="0" stop-color="#ec7a83" stop-opacity=".7"/><stop offset="1" stop-color="#e2606a" stop-opacity="0"/></radialGradient></defs>';
  /* ---- base: membranes, cristae and the two captions ---- */
  g+='<g id="scBase">';
  g+='<ellipse class="om sD" cx="'+MCX+'" cy="'+MCY+'" rx="'+ORX+'" ry="'+ORY+'"/>';
  g+='<ellipse class="im sD" cx="'+MCX+'" cy="'+MCY+'" rx="'+IRX+'" ry="'+IRY+'"/>';
  folds.forEach(function(d){g+='<path class="cr sD" d="'+d+'"/>'});
  var lx=574,ly=MCY-hyO(lx);
  g+='<path class="ld sD" d="M'+lx+' '+f(ly-4)+'V96H600"/><text class="t" x="606" y="100">MITOCHONDRION</text>';
  var c0=cox[13];
  g+='<path class="ld sD" d="M'+f(c0[0]+6)+' '+f(c0[1]+4)+'L'+f(c0[0]+40)+' 462H600"/><text class="t" x="606" y="466">COX</text>';
  g+='</g>';
  /* ---- oxygen in the matrix (O=O pairs), flooding in from the left on reperfusion ---- */
  g+='<g id="scO2">';
  for(i=0;i<30;i++){var ox=MCX-IRX*.86+rnd(i)*IRX*1.72,lim=hyI(ox)*.78,oy=MCY-lim+rnd(i+50)*lim*2,a=rnd(i+90)*3.14;
    g+='<g class="o2" data-x="'+f((ox-(MCX-IRX))/(2*IRX))+'" transform="translate('+f(ox)+' '+f(oy)+') rotate('+f(a*57.3)+')"><circle r="2.8" cx="-3.2"/><circle r="2.8" cx="3.2"/></g>'}
  g+='</g>';
  /* ---- COX sites: dark, then hyperactive (bright with a halo), then calmed ---- */
  g+='<g id="scCox">';
  cox.forEach(function(c){g+='<circle class="halo" cx="'+f(c[0])+'" cy="'+f(c[1])+'" r="15" fill="url(#cg'+u+')"/>'});
  cox.forEach(function(c){g+='<circle class="c0" cx="'+f(c[0])+'" cy="'+f(c[1])+'" r="4.2"/><circle class="c1" cx="'+f(c[0])+'" cy="'+f(c[1])+'" r="4.2"/>'});
  g+='</g>';
  /* ---- free radicals: four-point sparks bursting off the folds ---- */
  g+='<g id="scRos">';
  cox.forEach(function(c,k){if(k%4===3)return;var dx=(rnd(k+7)-.5)*44,dy=(rnd(k+17)-.5)*34,s=4+rnd(k+27)*3.5,x=c[0]+dx,y=c[1]+dy;
    g+='<path class="ros" data-k="'+k+'" data-keep="'+(k%5===0?1:0)+'" d="M'+f(x)+' '+f(y-s)+'L'+f(x+s*.28)+' '+f(y-s*.28)+'L'+f(x+s)+' '+f(y)+'L'+f(x+s*.28)+' '+f(y+s*.28)+'L'+f(x)+' '+f(y+s)+'L'+f(x-s*.28)+' '+f(y+s*.28)+'L'+f(x-s)+' '+f(y)+'L'+f(x-s*.28)+' '+f(y-s*.28)+'Z"/>'});
  g+='</g>';
  /* ---- the light: two bundles of waves, 750 and 950 nm, from the upper left onto the membrane ---- */
  g+='<g id="scLight">';
  function wave(sx,sy,ex,ey,lam,amp){var L=Math.hypot(ex-sx,ey-sy),ux=(ex-sx)/L,uy=(ey-sy)/L,n=Math.round(L/3),d='';
    for(var j=0;j<=n;j++){var s=j/n*L,w=Math.sin(s/lam*Math.PI*2)*amp*Math.min(1,s/30,(L-s)/30);d+=(j?'L':'M')+f(sx+ux*s-uy*w)+' '+f(sy+uy*s+ux*w)}return d}
  [[0,750,15],[1,950,21]].forEach(function(B){var b=B[0];
    for(var j=0;j<3;j++){var sx=46+b*92+j*22,sy=30+j*10-b*4,tx=250+b*96+j*26,ex=tx,ey=MCY-hyO(tx)-6;
      g+='<path class="wv w'+b+' sD4" d="'+wave(sx,sy,ex,ey,B[2]*1.6,5)+'"/>'}
    g+='<text class="a lt" x="'+(40+b*96)+'" y="18">'+B[1]+' NM</text>'});
  g+='</g>';
  /* ---- step labels (fade with their step), in the clear band under the mitochondrion ---- */
  g+='<g id="lb1"><text class="a" x="40" y="508">ISCHEMIA · NO OXYGEN · COX GOES DARK</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="508">REPERFUSION · COX HYPERACTIVE · FREE RADICALS</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="508">750 + 950 NM · COX CALMED · FEWER FREE RADICALS</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),wv:dl("#scLight .sD4"),lt:$$("#scLight text",svg),
    o2:$$(".o2",svg).map(function(el){return {el:el,x:+el.getAttribute("data-x")}}),
    halo:$$(".halo",svg),c0:$$(".c0",svg),c1:$$(".c1",svg),
    ros:$$(".ros",svg).map(function(el){return {el:el,k:+el.getAttribute("data-k"),keep:+el.getAttribute("data-keep")}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var stall=seg(p,0,.12),reperf=seg(p,.36,.56),light=seg(p,.7,.9);
    /* oxygen: a few stray molecules fade out in ischemia, then flood in from the left on reperfusion */
    E.o2.forEach(function(O){var pre=(O.x<.3?.6:0)*(1-stall),flood=cl(reperf*2.2-O.x*1.2);op(O.el,b*Math.max(pre,flood*.9))});
    /* COX: grey at rest, bright and haloed when hyperactive, moderate under the light */
    E.c0.forEach(function(el){op(el,b)});
    E.c1.forEach(function(el){op(el,b*Math.min(1,.5*(1-stall)+reperf*(1-.5*light)))});
    E.halo.forEach(function(el,k){op(el,b*reperf*(1-.8*light)*(k%3===1?.8:1))});
    /* free radicals: burst in a stagger on reperfusion, most fade under the light */
    E.ros.forEach(function(R){var v=cl(reperf*2-.4-(R.k%6)*.12);op(R.el,b*v*(1-(R.keep?.65:.97)*light))});
    /* the light: both bundles draw in, then hold */
    draw(E.wv,light);E.lt.forEach(function(el){op(el,b*seg(p,.74,.84))});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.84,.9));
  };
}
