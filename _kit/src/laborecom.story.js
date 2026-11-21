/* the story scene: a cross-section through the vessel wall after a heart attack, drawn in fine line like a textbook plate.
   Top, the vessel (red cells, a white blood cell); middle, two endothelial cells meeting at a border, the LBRC membrane
   (small vesicles) waiting along their microtubule tracks; bottom, heart muscle fibres with their striations.
   Step 1 blood flow returns and a white cell stops over the border; step 2 the motor carries LBRC membrane to the border,
   the white cell crosses and the muscle under it is damaged; step 3 LBRC-101 enters the endothelial cells and blocks the
   motor step, so the membrane stays put; step 4 the white cell stays in the vessel and the muscle is spared. */
var LB_J=400,LB_EY=[206,268],LB_WY=148,LB_WR=40;
function lbRng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function lbCell(x0,x1){/* an endothelial cell: a long, thin, slightly domed profile */
  var y0=LB_EY[0],y1=LB_EY[1],mid=(x0+x1)/2,d="M"+x0+" "+(y0+10)+"Q"+mid+" "+(y0-14)+" "+x1+" "+(y0+10)+"L"+x1+" "+(y1-8)+"Q"+mid+" "+(y1+4)+" "+x0+" "+(y1-8)+"Z";
  return '<path class="lb-cell" d="'+d+'"/>'}
function lbWbc(){var r=lbRng(9),d="";for(var i=0;i<=90;i++){var a=i/90*6.283,rr=LB_WR*(1+.06*Math.sin(a*11+1)+.04*Math.sin(a*17+2)+.03*(r()-.5));d+=(i?"L":"M")+(Math.cos(a)*rr).toFixed(1)+" "+(Math.sin(a)*rr).toFixed(1)}
  return '<path class="lb-wbc" d="'+d+'Z"/><path class="lb-wn" d="M-16 -6c6-12 18-12 20 0s14 12 18 0M-12 10c6 6 14 6 18 0"/>'}
function lbRbc(x,y,rx,rot){return '<g class="lb-r" data-x="'+x+'" data-y="'+y+'" transform="translate('+x+' '+y+') rotate('+rot+')"><ellipse class="lb-rbc" rx="'+rx+'" ry="'+(rx*.42).toFixed(1)+'"/><ellipse class="lb-rbi" rx="'+(rx*.5).toFixed(1)+'" ry="'+(rx*.16).toFixed(1)+'"/></g>'}
var LB_V=[];(function(){/* LBRC vesicles: home on the tracks, target around the border where the white cell crosses */
  var H=[[300,240],[330,236],[352,246],[372,238],[428,238],[448,246],[470,236],[500,240]],
      T=[[380,214],[386,232],[384,252],[392,262],[408,262],[416,252],[414,232],[420,214]];
  for(var i=0;i<H.length;i++)LB_V.push({h:H[i],t:T[i]})})();
function lbFibres(){var s="",ys=[300,336,372,408,444];
  ys.forEach(function(y,i){var x0=30+(i%2)*24,x1=770-(i%2)*18;
    s+='<path class="lb-fib" d="M'+x0+' '+y+'L'+x1+' '+y+'M'+x0+' '+(y+24)+'L'+x1+' '+(y+24)+'"/>';
    for(var x=x0+10;x<x1-4;x+=14)s+='<path class="lb-str'+(Math.abs(x-LB_J)<130?' n':'')+'" d="M'+x+' '+(y+4)+'L'+x+' '+(y+20)+'"/>'});
  return s}
function scene(){
  var mob=MOBILE();
  var caps=["AFTER PCI, BLOOD FLOW RETURNS","THE LBRC OPENS A PATH INTO THE MUSCLE","LBRC-101 BLOCKS THE MOTOR STEP","THE HEART MUSCLE IS SPARED"];
  var rb=[[90,92,26,-8],[200,70,24,12],[560,96,26,6],[690,74,24,-14],[640,160,22,18],[150,170,22,-20]];
  return '<svg viewBox="20 30 760 510" aria-hidden="true">'+
   '<path class="lb-ves" d="M30 50H770M30 196H770"/>'+
   '<text x="40" y="'+(mob?40:42)+'">VESSEL</text>'+
   '<g id="lbR">'+rb.map(function(b){return lbRbc(b[0],b[1],b[2],b[3])}).join("")+'</g>'+
   lbCell(36,LB_J-3)+lbCell(LB_J+3,764)+
   '<ellipse class="lb-nuc" cx="200" cy="238" rx="54" ry="14"/><ellipse class="lb-nuc" cx="600" cy="238" rx="54" ry="14"/>'+
   '<path class="lb-mt" d="M254 240C300 236 340 232 392 228M546 240C500 236 460 232 408 228M254 244C300 248 344 252 392 256M546 244C500 248 456 252 408 256"/>'+
   '<g id="lbF">'+lbFibres()+'</g>'+
   '<text x="40" y="'+(mob?290:288)+'">ENDOTHELIUM</text>'+
   '<text x="40" y="'+(mob?500:494)+'">HEART MUSCLE</text>'+
   '<ellipse class="lb-dmg" id="lbDmg" cx="'+LB_J+'" cy="374" rx="150" ry="70"/>'+
   '<ellipse class="lb-halo" id="lbHalo" cx="'+LB_J+'" cy="372" rx="320" ry="100"/>'+
   '<g id="lbV">'+LB_V.map(function(){return '<g class="lb-vg"><circle class="lb-vs" r="7"/><path class="lb-kn" d="M-4 9l-3 6M4 9l3 6"/></g>'}).join("")+'</g>'+
   '<g id="lbP">'+[0,1].map(function(){return '<g class="lb-pg"><path class="lb-ppl" d="M-15 0H15"/><circle class="lb-pp" cx="-15" r="4.5"/><circle class="lb-pp" cx="-5" r="4.5"/><circle class="lb-pp" cx="5" r="4.5"/><circle class="lb-pp" cx="15" r="4.5"/></g>'}).join("")+'</g>'+
   '<g id="lbW1">'+lbWbc()+'</g><g id="lbW2">'+lbWbc()+'</g>'+
   '<text class="a" id="lbPL" x="'+(mob?236:250)+'" y="'+(mob?186:184)+'" text-anchor="middle">LBRC-101</text>'+
   '<text class="a" id="lbVL" x="'+(mob?500:478)+'" y="'+(mob?186:190)+'" text-anchor="middle">LBRC</text>'+
   caps.map(function(t,i){return '<text class="cap" id="lbC'+i+'" x="400" y="'+(mob?534:532)+'" text-anchor="middle">'+t+'</text>'}).join("")+
  '</svg>';
}
function storyDraw(svg){
  var E={w1:$("#lbW1",svg),w2:$("#lbW2",svg),v:$$("#lbV .lb-vg",svg),p:$$("#lbP .lb-pg",svg),dmg:$("#lbDmg",svg),halo:$("#lbHalo",svg),
    str:$$("#lbF .lb-str.n",svg),r:$$("#lbR .lb-r",svg),pl:$("#lbPL",svg),vl:$("#lbVL",svg),cap:[0,1,2,3].map(function(i){return $("#lbC"+i,svg)})};
  function tr(el,x,y,sx,sy){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(sx!=null?" scale("+sx.toFixed(3)+" "+sy.toFixed(3)+")":""))}
  return function(p,b){
    if(!E.w1.isConnected)return;
    svg.style.opacity=(.3+.7*b).toFixed(3);
    var s1=seg(p,.03,.17),sv=seg(p,.27,.36),s2=seg(p,.33,.47),rs=seg(p,.5,.57),s3=seg(p,.55,.68),s4=seg(p,.78,.9);
    /* red cells drift along the vessel */
    E.r.forEach(function(g,k){var x=+g.getAttribute("data-x"),y=+g.getAttribute("data-y"),dx=((x-30+p*260+k*7)%740+740)%740+30;g.setAttribute("transform","translate("+dx.toFixed(1)+" "+y+") rotate("+(k*13-20)+")")});
    /* white cell 1: rolls in, stops over the border, squeezes through into the muscle (untreated), then fades */
    var x1=lerp(110,LB_J,s1),y1=lerp(LB_WY,352,s2),sq=Math.sin(Math.PI*s2);
    tr(E.w1,x1,y1,1-.45*sq,1+.28*sq);E.w1.style.opacity=(1-rs).toFixed(3);
    /* LBRC membrane: carried to the border while the cell crosses, back home after; held at home under LBRC-101 */
    var go=sv*(1-rs);
    E.v.forEach(function(g,k){var v=LB_V[k];tr(g,lerp(v.h[0],v.t[0],go),lerp(v.h[1],v.t[1],go))});
    E.vl.style.opacity=(b*seg(p,.24,.3)*(1-seg(p,.46,.5))).toFixed(3);
    /* damage under the crossing point */
    var dm=s2*(1-rs);E.dmg.style.opacity=(b*dm*.9).toFixed(3);
    E.str.forEach(function(el){el.classList.toggle("hit",dm>.5)});
    /* LBRC-101: a short peptide enters each endothelial cell and docks on the motor */
    E.p.forEach(function(g,k){var hx=k?452:348,hy=246;tr(g,lerp(k?640:160,hx,s3),lerp(k?130:120,hy,s3));g.style.opacity=(b*Math.min(1,s3*2)).toFixed(3)});
    E.pl.style.opacity=(b*seg(p,.56,.62)*(1-seg(p,.74,.78))).toFixed(3);
    /* white cell 2: arrives under treatment and stays in the vessel */
    var x2=lerp(110,LB_J,seg(p,.56,.7)),bob=Math.sin(Math.PI*seg(p,.7,.78))*10;
    tr(E.w2,x2,LB_WY+bob,1,1);E.w2.style.opacity=seg(p,.55,.6).toFixed(3);
    E.halo.style.opacity=(b*s4).toFixed(3);
    var W=[[0,0,.23,.26],[.26,.29,.48,.51],[.51,.54,.73,.76],[.76,.79,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
