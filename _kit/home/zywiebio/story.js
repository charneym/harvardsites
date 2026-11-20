/* The story scene (DB): Zywie's mechanism (zywiebio.com/drug-development and the NIH abstract of 1R43AG097283-01) as ONE
   engraved neuron. A large cell body with its nucleus fills the frame, dendrites branch to the edges and the axon runs off
   to the right. Step 1: misfolded protein aggregates (amyloid beta, tau) accumulate in the cytoplasm. Step 2: ambroxol
   stimulates TFEB: gold TFEB dots move from the cytoplasm into the nucleus and lysosomes multiply around it. Step 3: the
   autophagy-lysosomal pathway clears the load: each lysosome travels to an aggregate and the aggregate dissolves.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var NRN=(function(){
  var s=20250916,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  var cx=372,cy=262,i,k,pts=[];
  var rr=function(a){return 176*(1+.1*Math.sin(3*a+.7)+.05*Math.sin(5*a+2.1)+.03*Math.sin(7*a))};
  for(i=0;i<96;i++){var a=i/96*Math.PI*2;pts.push([cx+Math.cos(a)*rr(a)*1.12,cy+Math.sin(a)*rr(a)*.86])}
  var soma='M'+pts.map(function(p){return p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('L')+'Z';
  /* dendrites: tapering branches from the bumps of the soma toward the frame edges */
  var den=[],ang=[-2.55,-1.9,-1.15,-.35,2.2,2.75,1.55,.95,3.1];
  ang.forEach(function(a,j){
    var b0=[cx+Math.cos(a)*rr(a)*1.08,cy+Math.sin(a)*rr(a)*.83],L=j===8?0:150+R()*90,dir=a;
    if(j===3){return}
    function br(p,d,len,w,depth){
      var q=[p[0]+Math.cos(d)*len,p[1]+Math.sin(d)*len],c=[p[0]+Math.cos(d+.25*(R()-.5))*len*.55,p[1]+Math.sin(d+.3*(R()-.5))*len*.55];
      den.push({d:'M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'Q'+c[0].toFixed(1)+' '+c[1].toFixed(1)+' '+q[0].toFixed(1)+' '+q[1].toFixed(1),w:w,dp:depth});
      if(depth<3){br(q,d-.42-R()*.2,len*.62,w*.62,depth+1);br(q,d+.38+R()*.25,len*.56,w*.58,depth+1)}
    }
    if(L)br(b0,dir+.1*(R()-.5),L*.62,3.2,0);
  });
  /* the axon: leaves the right flank and runs off the frame */
  var a0=-.33,ax=[cx+Math.cos(a0)*rr(a0)*1.1,cy+Math.sin(a0)*rr(a0)*.85];
  var axon='M'+ax[0].toFixed(1)+' '+ax[1].toFixed(1)+'C'+(ax[0]+80)+' '+(ax[1]-40)+' '+(ax[0]+120)+' '+(ax[1]+30)+' 800 '+(ax[1]-60);
  var nuc={x:cx-40,y:cy-6,rx:78,ry:66};
  function inSoma(x,y){var a=Math.atan2((y-cy)/.86,(x-cx)/1.12),d=Math.hypot((x-cx)/1.12,(y-cy)/.86);return d<rr(a)*.86}
  function inNuc(x,y,m){return Math.pow((x-nuc.x)/(nuc.rx+m),2)+Math.pow((y-nuc.y)/(nuc.ry+m),2)<1}
  /* aggregates: irregular dot clusters in the cytoplasm */
  var ag=[],tries=0;
  while(ag.length<20&&tries<4000){tries++;var x=cx-200+R()*400,y=cy-150+R()*300;
    if(!inSoma(x,y)||inNuc(x,y,26))continue;
    if(ag.some(function(o){return Math.hypot(o.x-x,o.y-y)<46}))continue;
    var dots=[];for(k=0;k<7+Math.floor(R()*5);k++){var t=R()*Math.PI*2,r=R()*10;dots.push([Math.cos(t)*r,Math.sin(t)*r,2+R()*3])}
    ag.push({x:x,y:y,dots:dots,t:R()})}
  /* lysosomes: born around the nucleus, each later travels to one aggregate */
  var ly=ag.map(function(o,j){var t=Math.atan2(o.y-nuc.y,o.x-nuc.x)+(R()-.5)*.5;
    return {x0:nuc.x+Math.cos(t)*(nuc.rx+20),y0:nuc.y+Math.sin(t)*(nuc.ry+18),x1:o.x+(R()-.5)*6,y1:o.y+(R()-.5)*6,r:8+R()*3,t:R()}});
  /* TFEB: gold dots scattered in the cytoplasm that move into the nucleus */
  var tf=[];tries=0;while(tf.length<16&&tries<3000){tries++;var x2=cx-190+R()*380,y2=cy-140+R()*280;if(!inSoma(x2,y2)||inNuc(x2,y2,12))continue;
    var t2=R()*Math.PI*2,r2=Math.sqrt(R())*.7;tf.push({x0:x2,y0:y2,x1:nuc.x+Math.cos(t2)*nuc.rx*r2,y1:nuc.y+Math.sin(t2)*nuc.ry*r2,t:R()})}
  return {soma:soma,den:den,axon:axon,nuc:nuc,ag:ag,ly:ly,tf:tf};
})();
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',N=NRN;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  N.den.forEach(function(d){g+='<path class="dn sD" style="stroke-width:'+Math.max(.8,d.w*.55).toFixed(2)+'" d="'+d.d+'"/>'});
  g+='<path class="ax sD" d="'+N.axon+'"/>';
  g+='<path class="so sD" d="'+N.soma+'"/>';
  g+='<ellipse class="nc sD" cx="'+N.nuc.x+'" cy="'+N.nuc.y+'" rx="'+N.nuc.rx+'" ry="'+N.nuc.ry+'"/>';
  g+='<circle class="nl" cx="'+(N.nuc.x+18)+'" cy="'+(N.nuc.y-12)+'" r="12"/>';
  g+='<text class="t" x="10" y="16">NEURON · CELL BODY</text>';
  g+='</g>';
  g+='<ellipse id="ncGlow" cx="'+N.nuc.x+'" cy="'+N.nuc.y+'" rx="'+N.nuc.rx+'" ry="'+N.nuc.ry+'"/>';
  g+='<g id="scAg">';N.ag.forEach(function(a,k){g+='<g class="ag" data-k="'+k+'" transform="translate('+f(a.x)+' '+f(a.y)+')">'+a.dots.map(function(d){return '<circle cx="'+f(d[0])+'" cy="'+f(d[1])+'" r="'+f(d[2])+'"/>'}).join('')+'</g>'});g+='</g>';
  g+='<g id="scTf">';N.tf.forEach(function(t,k){g+='<circle class="tf" data-k="'+k+'" cx="'+f(t.x0)+'" cy="'+f(t.y0)+'" r="4.2"/>'});g+='</g>';
  g+='<g id="scLy">';N.ly.forEach(function(l,k){g+='<g class="ly" data-k="'+k+'" transform="translate('+f(l.x0)+' '+f(l.y0)+')"><circle class="lo" r="'+f(l.r)+'"/><circle class="li" r="'+f(l.r*.42)+'"/></g>'});g+='</g>';
  g+='<g id="lb1"><text class="a" x="10" y="508">AMYLOID BETA · TAU · MISFOLDED AGGREGATES</text></g>';
  g+='<g id="lb2"><text class="a" x="10" y="508">TFEB ENTERS THE NUCLEUS · LYSOSOMES MULTIPLY</text></g>';
  g+='<g id="lb3"><text class="a" x="10" y="508">AUTOPHAGY–LYSOSOMAL CLEARANCE</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var N=NRN,E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .nl",svg),glow:$("#ncGlow",svg),
    ag:$$(".ag",svg).map(function(el){var k=+el.getAttribute("data-k");return {el:el,a:N.ag[k],l:N.ly[k],k:k}}),
    tf:$$(".tf",svg).map(function(el){return {el:el,t:N.tf[+el.getAttribute("data-k")]}}),
    ly:$$(".ly",svg).map(function(el){return {el:el,l:N.ly[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: aggregates accumulate one by one */
    var acc=seg(p,.04,.3),tfIn=seg(p,.38,.56),lyB=seg(p,.48,.62),go=seg(p,.68,.84),clr=seg(p,.78,.95);
    E.ag.forEach(function(A){var gi=cl(acc*1.6-A.a.t*.6),sc=(.35+.65*gi)*(1-cl(clr*1.5-A.l.t*.5)*.96);
      A.el.setAttribute("transform","translate("+A.a.x.toFixed(1)+" "+A.a.y.toFixed(1)+") scale("+sc.toFixed(3)+")");op(A.el,b*gi*(sc>.05?1:0))});
    /* step 2: TFEB moves into the nucleus; the nucleus warms */
    E.tf.forEach(function(T){var t=T.t,q=cl(tfIn*1.4-t.t*.4),q2=q*q*(3-2*q);
      T.el.setAttribute("cx",(t.x0+(t.x1-t.x0)*q2).toFixed(1));T.el.setAttribute("cy",(t.y0+(t.y1-t.y0)*q2).toFixed(1));op(T.el,b*cl(seg(p,.3,.38)))});
    op(E.glow,b*tfIn*(1-.4*clr));
    /* lysosomes bud around the nucleus, then travel to the aggregates (step 3) */
    E.ly.forEach(function(Y){var l=Y.l,bi=cl(lyB*1.6-l.t*.6),m=cl(go*1.5-l.t*.5),m2=m*m*(3-2*m);
      var x=l.x0+(l.x1-l.x0)*m2,y=l.y0+(l.y1-l.y0)*m2,sc=(.2+.8*bi)*(1+.18*Math.sin(Math.PI*cl(clr*1.5-l.t*.5)));
      Y.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale("+sc.toFixed(3)+")");op(Y.el,b*bi)});
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.44,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.86));
  };
}
