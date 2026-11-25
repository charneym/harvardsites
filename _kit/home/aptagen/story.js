/* the story scene (BL/BY/DB): how an aptamer is found (SELEX, as described on aptagen.com: selection rounds, partitioning bound
   from unbound sequences). ONE target stays on screen for all three steps, drawn once in fine line: a protein with a binding
   pocket on its left flank. Step 1 (select): a library of single-stranded DNA sequences sits in the field; three travel to the
   target and stay (in Aptagen blue), the rest wash away. Step 2 (enrich): the pool is amplified and selected again; round after
   round more of it is the binder (grey hairpins turn blue). Step 3 (deliver): one aptamer, a stem-loop with its base pairs in
   gold, sits in the pocket. Schematic. Driven by the scrubbed story progress. */
var AP={tx:505,ty:196,tr:106};
function apRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function apR(a){var d=Math.abs(Math.atan2(Math.sin(a-Math.PI),Math.cos(a-Math.PI)));
  return AP.tr*(1+.05*Math.sin(a*5+.7)+.035*Math.sin(a*9+2.1))-34*Math.exp(-d*d/.09)}
function apBlob(){var f=function(n){return (+n).toFixed(1)},d='',i,n=120;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,r=apR(a);d+=(i?'L':'M')+f(AP.tx+Math.cos(a)*r)+' '+f(AP.ty+Math.sin(a)*r)}return d+'Z'}
function apStrand(k){var f=function(n){return (+n).toFixed(1)},x=0,y=0,a=apRand(k*7+1)*6.28,pts=[[0,0]],i;
  for(i=0;i<7;i++){a+=(apRand(k*13+i)-.5)*1.9;x+=Math.cos(a)*10;y+=Math.sin(a)*10;pts.push([x,y])}
  var cx=pts.reduce(function(s,p){return s+p[0]},0)/pts.length,cy=pts.reduce(function(s,p){return s+p[1]},0)/pts.length;
  var d='M'+f(pts[0][0]-cx)+' '+f(pts[0][1]-cy);for(i=1;i<pts.length-1;i++){var mx=(pts[i][0]+pts[i+1][0])/2-cx,my=(pts[i][1]+pts[i+1][1])/2-cy;d+='Q'+f(pts[i][0]-cx)+' '+f(pts[i][1]-cy)+' '+f(mx)+' '+f(my)}return d}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'24 8 632 364':'20 0 640 372')+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="tgf" d="'+apBlob()+'"/><path class="tg sD" d="'+apBlob()+'"/>';
  /* surface texture of the protein: a few short contour arcs inside the outline */
  for(k=0;k<7;k++){var a0=apRand(k+300)*6.28,rr=AP.tr*(.28+apRand(k+330)*.42),sp=.6+apRand(k+360)*.7,s='';
    for(i=0;i<=10;i++){var aa=a0+sp*i/10;s+=(i?'L':'M')+f(AP.tx+12+Math.cos(aa)*rr)+' '+f(AP.ty+Math.sin(aa)*rr)}g+='<path class="tc sD" d="'+s+'"/>'}
  g+='<text class="t" x="'+AP.tx+'" y="'+(AP.ty+AP.tr+38)+'" text-anchor="middle">YOUR TARGET</text></g>';
  /* the library: single-stranded sequences in the left field. The first three are the binders */
  var DK=[2.55,3.14,3.7];
  g+='<g id="lib">';for(i=0;i<18;i++){var sx=64+apRand(i+21)*250,sy=86+apRand(i+51)*232,bind=i<3,dx=0,dy=0;
    if(bind){var ang=DK[i],r0=apR(ang)+18;dx=AP.tx+Math.cos(ang)*r0;dy=AP.ty+Math.sin(ang)*r0}else{dx=sx+(apRand(i+81)-.5)*40;dy=sy+60+apRand(i+91)*40}
    g+='<g class="ss'+(bind?' bn':'')+'" data-s="'+f(sx)+','+f(sy)+'" data-t="'+f(dx)+','+f(dy)+'" transform="translate('+f(sx)+' '+f(sy)+')"><path d="'+apStrand(i)+'"/></g>'}
  g+='</g>';
  /* step 2: the pool, round after round (7 x 5 small hairpins) */
  g+='<g id="pool">';for(k=0;k<35;k++){var px=78+(k%7)*40,py=92+Math.floor(k/7)*56;
    g+='<g class="hp" data-o="'+apRand(k+700).toFixed(3)+'" transform="translate('+px+' '+py+') scale(1.3)"><path d="M-6 14V2a6 6 0 0 1 12 0v12M-6 6h12M-6 10h12"/></g>'}
  g+='</g>';
  /* step 3: the aptamer, a stem-loop seated in the pocket */
  var ly=AP.ty,lx=AP.tx-apR(Math.PI)-28,st=lx-20;
  g+='<g id="apt"><path class="ab" id="abk" d="M'+f(st-170)+' '+(ly-16)+'H'+f(st)+'A26 26 0 1 1 '+f(st)+' '+(ly+16)+'H'+f(st-170)+'"/>';
  var rg='';for(i=0;i<8;i++){var x=st-10-i*20;rg+='M'+f(x)+' '+(ly-12)+'V'+(ly+12)}
  g+='<path class="ar" id="arg" d="'+rg+'"/>';
  for(i=0;i<5;i++){var a2=-1.1+i*.55,bx=lx+Math.cos(a2)*17,by=ly+Math.sin(a2)*17;g+='<circle class="abd" cx="'+f(bx)+'" cy="'+f(by)+'" r="3"/>'}
  g+='</g>';
  /* labels, one per step, in the clear band above */
  var lyy=mob?52:34,lx2=mob?350:40,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a w" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'A DNA LIBRARY':'A LIBRARY OF SINGLE-STRANDED DNA')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'BINDERS STAY':'BINDERS STAY · THE REST WASH AWAY')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'THE POOL ENRICHES':'ROUND AFTER ROUND, THE POOL ENRICHES')+'</text></g>';
  g+='<g id="lb3"><text class="a g" x="'+lx2+'" y="'+lyy+'"'+an+'>'+(mob?'YOUR APTAMER':'YOUR APTAMER · 100% YOUR IP')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .tgf",svg),lib:$("#lib",svg),ss:$$("#lib .ss",svg),pool:$("#pool",svg),hp:$$("#pool .hp",svg),
    apt:$("#apt",svg),abk:dl("#abk"),arg:$("#arg",svg),abd:$$("#apt .abd",svg),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.ss.forEach(function(d){var s=d.getAttribute("data-s").split(","),t=d.getAttribute("data-t").split(",");d._s=[+s[0],+s[1]];d._t=[+t[0],+t[1]];d._b=d.classList.contains("bn")});
  E.hp.forEach(function(h){h._o=+h.getAttribute("data-o")});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var out3=seg(p,.64,.72);
    /* step 1: binders travel to the pocket and turn blue; the rest drift down and away */
    op(E.lib,b*(1-out3));
    E.ss.forEach(function(d,i){var v,x,y,o;
      if(d._b){v=seg(p,.05+i*.035,.24+i*.03);x=d._s[0]+(d._t[0]-d._s[0])*v;y=d._s[1]+(d._t[1]-d._s[1])*v;o=1;d.classList.toggle("on",v>.5)}
      else{v=seg(p,.12,.34);x=d._s[0]+(d._t[0]-d._s[0])*v;y=d._s[1]+(d._t[1]-d._s[1])*v;o=1-v}
      d.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");d.style.opacity=o.toFixed(3)});
    /* step 2: the pool appears and turns blue in order of a fixed random rank */
    var pin=seg(p,.34,.42),en=seg(p,.4,.62);op(E.pool,b*pin*(1-out3));
    E.hp.forEach(function(h){h.classList.toggle("on",h._o<.12+.86*en)});
    /* step 3: the aptamer draws into the pocket; base pairs and loop bases follow */
    op(E.apt,b*seg(p,.68,.72));draw(E.abk,seg(p,.7,.86));op(E.arg,seg(p,.8,.9));
    E.abd.forEach(function(c,i){c.style.opacity=seg(p,.84+i*.015,.9+i*.015).toFixed(3)});
    op(E.l0,b*(1-seg(p,.04,.1)));op(E.l1,b*seg(p,.11,.17)*(1-seg(p,.32,.37)));op(E.l2,b*seg(p,.39,.45)*(1-seg(p,.64,.69)));op(E.l3,b*seg(p,.74,.8));
  };
}
