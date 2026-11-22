/* The story scene (BL/BY/DB): how an nADC/TNS works, after NanoValent's own mechanism figure (Our Science: targeted
   nanospheres vs untargeted liposomes) as ONE continuous scene in fine line. A cancer cell's membrane runs across the
   frame with CD99 receptors on it; the nucleus with its DNA sits below. Step 1 (bind): a targeted nanosphere, antibodies
   all round, drifts down and docks on the CD99 receptors. Step 2 (enter): the membrane folds around it
   (endophagocytosis) and pinches off an endosome that carries it inward. Step 3 (release): in the lysosome the shell
   gives up its irinotecan, which diffuses to the nucleus; strands of the DNA break. Driven by the scrubbed progress. */
var SCW=760,SCH=520,MY=170,NX=560,NY=470;
function nvDip(x,D){var u=(x-380)/64;return MY+D*Math.exp(-u*u*u*u/2.2)}
function nvMem(D,off){var d='',i;for(i=0;i<=96;i++){var x=20+i*7.5;d+=(i?'L':'M')+x.toFixed(1)+' '+(nvDip(x,D)+off).toFixed(1)}return d}
var NVR=(function(){var a=[],x;for(x=44;x<=716;x+=34)a.push(x);return a})();
var NVD=(function(){var s=5,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<26;i++){var an=R()*Math.PI*2,rr=Math.sqrt(R())*29;a.push({x:Math.cos(an)*rr,y:Math.sin(an)*rr,
    tx:NX-150+R()*240,ty:NY-80+R()*60,d:R()*.25})}return a})();
var NVO=(function(){var s=23,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<60&&a.length<20;i++){var x=40+R()*680,y=MY+40+R()*300;if(Math.hypot((x-NX)/250,(y-NY)/190)<1.05)continue;if(Math.abs(x-300)<150&&y<MY+260)continue;if(a.some(function(b){return Math.hypot(b[0]-x,b[1]-y)<52}))continue;a.push([x,y,13+R()*16,R()*180])}return a})();
function nvSphere(){var g='<g id="nsP">',i;
  for(i=0;i<12;i++){var a=i/12*Math.PI*2+.2,c=Math.cos(a),s=Math.sin(a),x0=c*49,y0=s*49,x1=c*63,y1=s*63,px=-s,py=c;
    g+='<path class="ab" d="M'+x0.toFixed(1)+' '+y0.toFixed(1)+'L'+x1.toFixed(1)+' '+y1.toFixed(1)+'M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+(x1+c*13+px*10).toFixed(1)+' '+(y1+s*13+py*10).toFixed(1)+'M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+(x1+c*13-px*10).toFixed(1)+' '+(y1+s*13-py*10).toFixed(1)+'"/>'}
  g+='<circle class="sh" r="46"/><circle class="sh2" r="38"/><g id="nsCore"><circle class="core" r="35"/>';
  NVD.forEach(function(d){g+='<circle class="dr0" cx="'+d.x.toFixed(1)+'" cy="'+d.y.toFixed(1)+'" r="2.8"/>'});
  return g+'</g></g>'}
function nvScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="nuc sD" d="M'+(NX-230)+' '+SCH+'C'+(NX-230)+' '+(NY-170)+' '+(NX+230)+' '+(NY-170)+' '+(NX+230)+' '+SCH+'"/>';
  g+='<path class="nuc2 sD" d="M'+(NX-216)+' '+SCH+'C'+(NX-216)+' '+(NY-152)+' '+(NX+216)+' '+(NY-152)+' '+(NX+216)+' '+SCH+'"/>';
  NVO.forEach(function(l){g+='<ellipse class="lo sD" cx="'+l[0].toFixed(1)+'" cy="'+l[1].toFixed(1)+'" rx="'+l[2].toFixed(1)+'" ry="'+(l[2]*.55).toFixed(1)+'" transform="rotate('+l[3].toFixed(0)+' '+l[0].toFixed(1)+' '+l[1].toFixed(1)+')"/>';
    var r=l[2]*.7,cr='M'+(-r)+' 0';for(var j=0;j<5;j++)cr+='Q'+(-r+(j+.5)*2*r/5).toFixed(1)+' '+(j%2?-1:1)*l[2]*.42+' '+(-r+(j+1)*2*r/5).toFixed(1)+' 0';
    g+='<path class="lo2 sD" d="'+cr+'" transform="translate('+l[0].toFixed(1)+' '+l[1].toFixed(1)+') rotate('+l[3].toFixed(0)+')"/>'});
  var dn='',dn2='',rungs='';for(i=0;i<=60;i++){var x=NX-150+i*5,y=NY-10+Math.sin(i*.42)*12,y2=NY-10-Math.sin(i*.42)*12;dn+=(i?'L':'M')+x+' '+y.toFixed(1);dn2+=(i?'L':'M')+x+' '+y2.toFixed(1);if(i%3==0)rungs+='M'+x+' '+y.toFixed(1)+'L'+x+' '+y2.toFixed(1)}
  g+='<path class="dna sD" d="'+dn+'"/><path class="dna sD" d="'+dn2+'"/><path class="rung sD" d="'+rungs+'"/>';
  g+='<text class="t" x="20" y="'+(MY-28)+'">OUTSIDE THE CELL</text>';
  g+='<text class="t" x="740" y="'+(MY+40)+'" text-anchor="end">CANCER CELL · CD99 ON THE MEMBRANE</text>';
  g+='<text class="t" x="'+(NX+200)+'" y="'+(NY-120)+'" text-anchor="end">NUCLEUS · DNA</text>';
  g+='</g>';
  g+='<g id="scMem"><path class="mem" id="m1" d="'+nvMem(0,0)+'"/><path class="mem2" id="m2" d="'+nvMem(0,7)+'"/>';
  NVR.forEach(function(x){g+='<g class="rc" data-x="'+x+'"><path d="M0 0V-13"/><circle cy="-15" r="2.6"/></g>'});
  g+='</g>';
  g+='<g id="scVes"><circle class="ves" r="72"/><circle class="ves2" r="64"/></g>';
  g+=nvSphere();
  g+='<g id="scDrug">';NVD.forEach(function(){g+='<circle class="dr" r="3.2"/>'});g+='</g>';
  g+='<g id="scHit"><path class="hit" d="M'+(NX-60)+' '+(NY-30)+'l8 10l-6 4l10 12M'+(NX+40)+' '+(NY-34)+'l-6 12l7 3l-5 13"/></g>';
  var ly=24;
  g+='<g id="lb1"></g>';
  g+='<g id="lb2"></g>';
  g+='<g id="lb3"></g>';
  return g+'</svg>';
}
function scene(){return nvScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mem:$("#scMem",svg),m1:$("#m1",svg),m2:$("#m2",svg),rc:$$(".rc",svg),ves:$("#scVes",svg),
    ps:$("#nsP",svg),core:$("#nsCore",svg),dr:$$(".dr",svg),hit:$("#scHit",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mem,b)}
    var dock=sm2(seg(p,.04,.26)),fold=sm2(seg(p,.34,.5)),pinch=sm2(seg(p,.5,.58)),move=sm2(seg(p,.56,.68)),rel=seg(p,.68,.9);
    /* the membrane folds around the sphere, then closes behind it */
    var D=132*fold*(1-pinch);E.m1.setAttribute("d",nvMem(D,0));E.m2.setAttribute("d",nvMem(D,7));
    E.rc.forEach(function(el){var x=+el.getAttribute("data-x"),near=Math.abs(x-380)<80;tr(el,x,nvDip(x,D));op(el,near?1-pinch:1)});
    /* the sphere docks on the receptors, is carried in, then the endosome moves it toward the nucleus */
    var vx=380-160*move,vy=MY+66+104*move;
    var sx=380,sy=30+(MY-88-30)*dock+(MY+66-(MY-88))*fold;
    if(pinch>0){sx=380+(vx-380)*1;sy=sy+(vy-sy)*Math.min(1,pinch*2)}
    tr(E.ps,sx,sy);op(E.ps,b*(1-sm2(seg(p,.74,.88))));op(E.core,1-sm2(seg(p,.68,.76)));
    tr(E.ves,vx,vy);op(E.ves,b*pinch*(1-.45*seg(p,.8,.92)));
    /* release: the drug diffuses out of the lysosome and travels to the nucleus */
    E.dr.forEach(function(el,i){var d=NVD[i],q=sm2(Math.max(0,Math.min(1,(rel-d.d)/(1-d.d)))),x=sx+d.x+(d.tx-sx-d.x)*q,y=sy+d.y+(d.ty-sy-d.y)*q;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*seg(p,.68,.72))});
    op(E.hit,b*seg(p,.84,.92));
    op(E.l1,b*seg(p,.14,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
function sm2(x){return x*x*(3-2*x)}
