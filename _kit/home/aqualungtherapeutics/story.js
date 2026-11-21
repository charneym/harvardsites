/* The story scene (BL/BY/DB/CX): Aqualung's own mechanism, from the "How ALT-100 works" section of
   aqualungtherapeutics.com/our-science, drawn as ONE continuous fine-line scene that stays on screen for all three
   steps. Upper left, an injured cell with a broken membrane; across the foot, the membrane of a neighbouring cell with
   five TLR4 receptors and, below it, the top of its nucleus. Step 1 eNAMPT (drawn as the NAMPT dimer, two linked
   subunits) leaves the injured cell and drifts out. Step 2 eNAMPT docks on TLR4, the receptors light and NF-kB signal
   pulses run down to the nucleus while an inflammatory glow rises under the membrane. Step 3 ALT-100 antibodies (the IgG
   Y) arrive and bind every eNAMPT outside the cell, lifting it off the receptors: the receptors go quiet and the glow
   fades. TLR4 itself is never touched, as the site states. Schematic positions. */
var SCW=760,SCH=520,MY=376;
var RX=[170,290,410,530,650];
var DIM=(function(){var a=[],i,n=10;for(i=0;i<n;i++){
  var dock=i<5,mx=dock?RX[i]+((i%2)?-38:34):250+((i-5)*96)+((i%3)-1)*14,my=dock?196+((i*37)%5)*16:218+((i*53)%4)*20;
  a.push({sx:212+((i*17)%5)*4,sy:150+((i*29)%4)*5,mx:mx,my:my,tx:dock?RX[i]:mx,ty:dock?306:my,d:(i%5)*.07,dock:dock,ang:(dock?180:0)+((i*47)%60)-30})}return a})();
function dimer(){return '<circle class="e1" cx="-5.6" cy="0" r="5.6"/><circle class="e1" cx="5.6" cy="0" r="5.6"/><path class="e2" d="M-2 0h4"/>'}
function yab(){return '<path class="ab" d="M0 30V13M0 13L-10 -1M0 13L10 -1"/><path class="ab2" d="M-10 -1l-3 -4M10 -1l3 -4"/>'}
function mechScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="inflG"><stop offset="0" stop-color="#e2735f" stop-opacity=".46"/><stop offset=".55" stop-color="#e2735f" stop-opacity=".18"/><stop offset="1" stop-color="#e2735f" stop-opacity="0"/></radialGradient></defs>';
  /* ---- base: corner ticks and the two standing captions ---- */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M18 24H120M740 24H638M18 506H120M740 506H638"/>';
  g+='<text class="t" x="18" y="14">eNAMPT · TLR4 · NF-κB</text>';
  g+='<text class="t tr" x="742" y="14" text-anchor="end">ALT-100</text>';
  g+='</g>';
  /* ---- the injured cell, its membrane broken where eNAMPT leaves ---- */
  g+='<g id="scCell"><path class="cm sD" d="'+(function(){var cx=118,cy=128,r=84,a0=.18*Math.PI,a1=1.9*Math.PI,p='',k;for(k=0;k<=60;k++){var a=a0+(a1-a0)*k/60;p+=(k?'L':'M')+f(cx+r*Math.cos(a))+' '+f(cy+r*Math.sin(a))}return p})()+'"/>';
  g+='<circle class="cn sD" cx="102" cy="120" r="30"/><path class="cr sD" d="M190 158l14 6M184 172l10 12M196 140l16 -2"/>';
  g+='<text class="t" x="40" y="240">INJURED CELL</text></g>';
  /* ---- the neighbouring cell: membrane bilayer, receptors, nucleus ---- */
  var lip='';for(i=0;i<70;i++){var x=24+i*10.3;lip+='M'+f(x)+' '+(MY-6)+'v4M'+f(x)+' '+(MY+18)+'v-4'}
  g+='<g id="scMem"><ellipse class="infl" cx="400" cy="'+(MY+56)+'" rx="390" ry="74" fill="url(#inflG)"/>';
  g+='<path class="mb sD" d="M20 '+MY+'H740M20 '+(MY+12)+'H740"/><path class="lp sD" d="'+lip+'"/>';
  g+='<path class="nu sD" d="M120 520C170 452 650 452 700 520"/><text class="t" x="742" y="470" text-anchor="end">NUCLEUS</text></g>';
  g+='<g id="scRec">';
  RX.forEach(function(x,k){var d='M'+(x-7)+' '+(MY+12)+'V'+(MY-32)+'C'+(x-7)+' '+(MY-44)+' '+(x-17)+' '+(MY-50)+' '+(x-17)+' '+(MY-62)+'M'+(x+7)+' '+(MY+12)+'V'+(MY-32)+'C'+(x+7)+' '+(MY-44)+' '+(x+17)+' '+(MY-50)+' '+(x+17)+' '+(MY-62)+'M'+x+' '+(MY+12)+'V'+(MY+30);
    g+='<path class="rc sD" d="'+d+'"/><path class="rcl" data-k="'+k+'" d="'+d+'"/>';});
  g+='<text class="t" x="'+(RX[4]+28)+'" y="'+(MY-48)+'">TLR4</text></g>';
  /* ---- NF-kB pulses: from each receptor down to the nucleus ---- */
  g+='<g id="scSig">';RX.forEach(function(x,k){g+='<path class="sg" d="M'+x+' '+(MY+30)+'L'+f(x+(410-x)*.25)+' 468"/><circle class="pu" data-k="'+k+'" r="3.4" cx="'+x+'" cy="'+(MY+30)+'"/>'});g+='</g>';
  /* ---- eNAMPT and the antibodies ---- */
  g+='<g id="scAb">';DIM.forEach(function(D,k){g+='<g class="yy" data-k="'+k+'">'+yab()+'</g>'});g+='</g>';
  g+='<g id="scDim">';DIM.forEach(function(D,k){g+='<g class="dm" data-k="'+k+'">'+dimer()+'</g>'});g+='</g>';
  /* ---- step labels, top right; only one is ever visible (CY) ---- */
  g+='<g id="lb1"><text class="a" x="742" y="50" text-anchor="end">eNAMPT RELEASED</text></g>';
  g+='<g id="lb2"><text class="a w" x="742" y="50" text-anchor="end">TLR4 ON · NF-κB SIGNALING</text></g>';
  g+='<g id="lb3"><text class="a" x="742" y="50" text-anchor="end">ALT-100 BINDS eNAMPT</text></g>';
  return g+'</svg>';
}
function scene(){return mechScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scCell text,#scMem text,#scRec text",svg),
    cell:dl("#scCell .sD"),mem:dl("#scMem .sD"),rec:dl("#scRec .sD"),infl:$("#scMem .infl",svg),
    rcl:$$(".rcl",svg),sg:$$(".sg",svg),pu:$$(".pu",svg),
    dm:$$(".dm",svg).map(function(el){return {el:el,D:DIM[+el.getAttribute("data-k")]}}),
    yy:$$(".yy",svg).map(function(el){return {el:el,D:DIM[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.14),rel=seg(p,.06,.32),dock=seg(p,.36,.5),sig=seg(p,.44,.56),ab=seg(p,.66,.82),lift=seg(p,.78,.94);
    var w=Math.min(1,Math.max(b*b,grow*1.2));
    draw(E.cell,w);draw(E.mem,w);draw(E.rec,w);
    var on=sig*(1-lift);
    E.rcl.forEach(function(el){op(el,b*on)});
    op(E.infl,b*on*.9);
    E.sg.forEach(function(el){op(el,b*on*.5)});
    E.pu.forEach(function(el,k){var x0=RX[k],x1=x0+(410-x0)*.25,y0=MY+30,y1=468,t=(p*7+k*.21)%1;
      el.setAttribute("cx",(x0+(x1-x0)*t).toFixed(1));el.setAttribute("cy",(y0+(y1-y0)*t).toFixed(1));op(el,b*on*Math.sin(Math.PI*t))});
    E.dm.forEach(function(M){var D=M.D,t=Math.min(1,Math.max(0,(rel-D.d)*1.5)),x=D.sx+(D.mx-D.sx)*t,y=D.sy+(D.my-D.sy)*t;
      if(D.dock){x+=(D.tx-D.mx)*dock;y+=(D.ty-D.my)*dock;y-=64*lift}else{y-=10*lift}
      D.cx=x;D.cy=y;
      M.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(M.el,b*Math.min(1,t*4));});
    E.yy.forEach(function(Y){var D=Y.D,t=Math.min(1,Math.max(0,(ab-D.d*.8)*1.5)),a=D.ang*Math.PI/180;
      var r=(1-t)*260,ox=D.cx+Math.sin(a)*r,oy=D.cy+Math.cos(a)*r*.6+r*.2;
      Y.el.setAttribute("transform","translate("+ox.toFixed(1)+" "+oy.toFixed(1)+") rotate("+(-D.ang)+")");
      op(Y.el,b*Math.min(1,t*2.2));});
    op(E.l1,b*seg(p,.1,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.9));
  };
}
