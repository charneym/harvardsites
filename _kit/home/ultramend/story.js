/* the story scene (BL/BY/DB/DR): ONE micropillar array in cross-section, kept on screen for all four steps, after the NSF SBIR
   Phase I abstract (award 2604948): 1 mould: polymer micropillars rise from a thin base (thermocompression moulding);
   2 load: nanoparticles of two dissimilar metals fill neighbouring pillars (shown as filled and open dots);
   3 wet: a fluid rises between the pillars and the central pillar pair conducts (current arcs across the gap);
   4 scale: every pair in the array conducts, and the stimulation reaches the surface. Schematic; driven by the scrubbed progress. */
var UM_={};
function umR(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k;
  var N=mob?6:8,X0=40,X1=mob?440:660,BT=330,BB=354,TOP=mob?150:140,PW=mob?30:28,FL=236;
  var gap=(X1-X0-40)/(N-1),cx=[];for(i=0;i<N;i++)cx.push(X0+20+i*gap);
  UM_={N:N,cx:cx,PW:PW,TOP:TOP,BT:BT,FL:FL,X0:X0,X1:X1};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'20 60 440 420':'20 64 660 352')+'" aria-hidden="true">';
  /* fluid (behind the pillars): rises from the base top to FL */
  g+='<g id="fl"><path class="fluid" id="flp" d="M0 0Z"/><path class="fltop" id="flt" d="M0 0Z"/></g>';
  g+='<g id="scBase">';
  g+='<path class="bs sD" d="M'+X0+' '+BT+'H'+X1+'V'+BB+'H'+X0+'Z"/>';
  /* pillars: slender columns with domed tops */
  for(i=0;i<N;i++){var a=cx[i]-PW/2,b=cx[i]+PW/2,r=PW/2;
    g+='<path class="pl sD" d="M'+f(a)+' '+BT+'V'+f(TOP+r)+'A'+f(r)+' '+f(r)+' 0 0 1 '+f(b)+' '+f(TOP+r)+'V'+BT+'"/>'}
  g+='<text class="t" x="'+X0+'" y="'+(BB+(mob?44:34))+'">'+(mob?'MICROPILLARS, IN SECTION':'POLYMER MICROPILLARS ON A THIN BASE, IN SECTION')+'</text>';
  g+='</g>';
  /* nanoparticles: alternate pillars carry metal A (filled) and metal B (open) */
  var np='',j=0;for(i=0;i<N;i++){var A=i%2===0;for(k=0;k<16;k++){j++;var px=cx[i]-PW/2+6+umR(j+11)*(PW-12),py=TOP+14+umR(j+71)*(BT-TOP-24);
    np+='<circle class="'+(A?'na':'nb')+'" data-k="'+f((py-TOP)/(BT-TOP))+'" cx="'+f(px)+'" cy="'+f(py)+'" r="2.3"/>'}}
  g+='<g id="nps">'+np+'</g>';
  /* current arcs across each pair's gap, inside the fluid: pair p joins pillars 2p and 2p+1 */
  var arcs='';for(i=0;i+1<N;i+=2){var xa=cx[i]+PW/2+4,xb=cx[i+1]-PW/2-4,ym=(FL+BT)/2+6,mx=(xa+xb)/2;
    for(k=0;k<2;k++){var yy=ym-12+k*24,bow=k?10:-10;
      arcs+='<path class="arc p'+(i/2)+'" d="M'+f(xa)+' '+f(yy)+'Q'+f(mx)+' '+f(yy+bow)+' '+f(xb)+' '+f(yy)+'"/>'}
    arcs+='<path class="arh p'+(i/2)+'" d="M'+f(xb-7)+' '+f(ym-16)+'L'+f(xb)+' '+f(ym-12)+'L'+f(xb-7)+' '+f(ym-8)+'"/>'}
  g+='<g id="arcs">'+arcs+'</g>';
  /* step 4: the stimulated surface, a bright line along the base */
  g+='<path class="srf" id="srf" d="M'+X0+' '+(BB+1)+'H'+X1+'"/>';
  /* labels, one per step, in the clear band above the pillar tops (on phones: the same band, centred) */
  var ly=TOP-(mob?34:30),lx=mob?240:X0,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>POLYMER MICROPILLARS</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'TWO DISSIMILAR METALS':'NANOPARTICLES OF TWO DISSIMILAR METALS')+'</text></g>';
  g+='<g id="lb2"><text class="a b" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'FLUID ACTIVATES A PAIR':'FLUID IN: ONE PILLAR PAIR CONDUCTS')+'</text></g>';
  g+='<g id="lb3"><text class="a b" x="'+lx+'" y="'+ly+'"'+an+'>THE WHOLE ARRAY, SELF-POWERED</text></g>';
  return g+'</svg>';
}
function umFluid(lv){var U=UM_,f=function(n){return (+n).toFixed(1)};if(lv<.003)return ['M0 0Z','M0 0Z'];
  var y=U.BT-(U.BT-U.FL)*lv,d='M'+U.X0+' '+U.BT,t='',x;
  for(x=U.X0;x<=U.X1;x+=10){var yy=y+Math.sin(x*.045)*2.2*lv;d+='L'+x+' '+f(yy);t+=(t?'L':'M')+x+' '+f(yy)}
  d+='L'+U.X1+' '+U.BT+'Z';return [d,t]}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .bs"),pl:dl("#scBase .pl"),cap:$$("#scBase text",svg),fp:$("#flp",svg),ft:$("#flt",svg),
    na:$$("#nps circle",svg),arcs:[0,1,2,3].map(function(i){return {a:dl("#arcs .arc.p"+i),h:$$("#arcs .arh.p"+i,svg)}}),srf:dl("#srf"),srfE:$("#srf",svg),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.na.forEach(function(c){c._k=+c.getAttribute("data-k")});
  var NP=Math.floor(UM_.N/2),first=Math.floor((NP-1)/2);
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1: the base draws, then each pillar rises (always complete by the end of the step) */
    var m=seg(p,0,.16);draw(E.base,b*Math.min(1,m*2.2));
    E.pl.forEach(function(a,i){var q=seg(m,.15+i*.05,.55+i*.05);a[0].style.strokeDashoffset=(a[1]*(1-b*q)).toFixed(1)});
    E.cap.forEach(function(el){op(el,b)});
    /* step 2: metal nanoparticles fill the pillars from the base up */
    var ld=seg(p,.28,.46);E.na.forEach(function(c){op(c,b*seg(ld*1.2,1-c._k,1.2-c._k))});
    /* step 3: fluid rises between the pillars; the central pair conducts */
    var lv=seg(p,.52,.64),fl=umFluid(lv);E.fp.setAttribute("d",fl[0]);E.ft.setAttribute("d",fl[1]);op(E.fp,b);op(E.ft,b);
    var c1=seg(p,.62,.7),c4=seg(p,.78,.9);
    E.arcs.forEach(function(A,i){if(!A.a.length)return;var o=i<first?first-i:i-first-1,v=i===first?c1:seg(c4,o*.15,.6+o*.15);
      draw(A.a,b*v);A.h.forEach(function(h){op(h,b*seg(v,.8,1))})});
    /* step 4: the surface lights */
    op(E.srfE,b*seg(p,.84,.9));draw(E.srf,seg(p,.84,.94));
    op(E.l0,b*(1-seg(p,.22,.27)));op(E.l1,b*seg(p,.29,.34)*(1-seg(p,.47,.52)));op(E.l2,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l3,b*seg(p,.79,.85));
  };
}
