/* The story scene (BL/BY/DB): the delivery dilemma and Brushield(TM), from pacdnatx.com/mission ("poor tissue accumulation
   and rapid clearance of agents by the liver and kidney"; Brushield "mitigates toxicities ... stemming from unwanted nucleic
   acid-protein interactions" and "boosts the biodistribution in otherwise hard-to-deliver sites ... tissue retention for
   up to several months"), as ONE continuous scene kept on screen for all three steps: a blood vessel that forks, up to the
   liver and kidney, down to a target tissue. Step 1: bare oligonucleotide strands pick up proteins and are carried off to
   the liver. Step 2: new strands stop in the vessel and a polymer brush draws in around each one. Step 3: the shielded
   strands travel down the other branch and settle in the target tissue, which lights up. Every element is driven by the
   scrubbed story progress. */
var SCW=760,SCH=520;
function bz(p0,p1,p2,p3,t){var u=1-t;return [u*u*u*p0[0]+3*u*u*t*p1[0]+3*u*t*t*p2[0]+t*t*t*p3[0],u*u*u*p0[1]+3*u*u*t*p1[1]+3*u*t*t*p2[1]+t*t*t*p3[1]]}
/* centre lines: the main vessel, then the upper (liver/kidney) or lower (target) branch */
function vline(up){var P=[],x,t,s=up?-1:1;for(x=20;x<330;x+=6)P.push([x,250]);
  for(t=0;t<=1.0001;t+=.04)P.push(bz([330,250],[430,250],[470,250+s*122],[590,250+s*124],t));P.push([626,250+s*124]);return P}
function off(P,d){return P.map(function(p,i){var a=P[Math.max(0,i-1)],b=P[Math.min(P.length-1,i+1)],dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1;return [p[0]-dy/L*d,p[1]+dx/L*d]})}
function pd(P){return P.map(function(p,i){return (i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)}).join("")}
function cells(cx,cy){var out=[],r=13,i,j;for(j=-3;j<=3;j++)for(i=-3;i<=3;i++){var x=cx+i*2*r+(j&1?r:0),y=cy+j*r*1.74;if(Math.hypot(x-cx,y-cy)<56)out.push([x,y])}return out}
function helixD(len){var d1="",d2="",rg="",x;for(x=-len/2;x<=len/2;x+=2){var w=4.2*Math.sin((x+len/2)/len*Math.PI*3);d1+=(x===-len/2?"M":"L")+x.toFixed(1)+" "+w.toFixed(1);d2+=(x===-len/2?"M":"L")+x.toFixed(1)+" "+(-w).toFixed(1)}
  for(x=-len/2+3;x<len/2;x+=5){var w2=4.2*Math.sin((x+len/2)/len*Math.PI*3);rg+="M"+x.toFixed(1)+" "+w2.toFixed(1)+"V"+(-w2).toFixed(1)}return [d1,d2,rg]}
function haloD(n,r0,r1){var d="",i;for(i=0;i<n;i++){var a=i/n*Math.PI*2+.13,c=Math.cos(a),s=Math.sin(a),rx=1.15;d+="M"+(c*r0*rx).toFixed(1)+" "+(s*r0).toFixed(1)+"L"+(c*r1*rx+Math.sin(a*3)*1.6).toFixed(1)+" "+(s*r1+Math.cos(a*2)*1.6).toFixed(1)}return d}
function blobD(r,ph){var d="",i,n=9;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,rr=r*(1+.2*Math.sin(a*3+ph));d+=(i?"L":"M")+(rr*Math.cos(a)).toFixed(1)+" "+(rr*Math.sin(a)).toFixed(1)}return d+"Z"}
var LIV=[690,118],TGT=[690,384],BX=[110,200,290];
function bgScene(o){
  var g='',mob=o.mob,U=vline(1),D=vline(0);
  var tw=off(U,-34).slice(0,52).concat(off(U,-24).slice(52)),bw=off(D,34).slice(0,52).concat(off(D,24).slice(52));
  /* the crotch between the branches: the upper branch's lower wall meets the lower branch's upper wall */
  var ub=off(U,24).slice(52),lt=off(D,-24).slice(52),k=0;while(k<ub.length&&ub[k][1]>=lt[k][1]-1)k++;
  var cr=ub.slice(k).reverse().concat(lt.slice(k));
  var H=helixD(42);
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<path id="rtU" d="'+pd(U)+'" fill="none" stroke="none"/><path id="rtD" d="'+pd(D)+'" fill="none" stroke="none"/>';
  g+='<g id="scBase">';
  g+='<path class="ves sD" d="'+pd(tw)+'"/><path class="ves sD" d="'+pd(bw)+'"/><path class="ves sD" d="'+pd(cr)+'"/>';
  g+=cells(LIV[0],LIV[1]).map(function(c){return '<circle class="cel sD" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="11.5"/>'}).join("");
  g+=cells(TGT[0],TGT[1]).map(function(c){return '<circle class="cel sD" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="11.5"/>'}).join("");
  g+='<text class="t" x="24" y="196">BLOOD</text>';
  g+='<text class="t" x="736" y="42" text-anchor="end">LIVER · KIDNEY</text>';
  g+='<text class="t" x="736" y="468" text-anchor="end">TARGET TISSUE</text>';
  g+='</g>';
  /* tissue that takes up strands: the liver cells tint grey-teal in step 1, the target cells light blue in step 3 */
  g+='<g id="livF">'+cells(LIV[0],LIV[1]).map(function(c){return '<circle class="cf l" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="11.5"/>'}).join("")+'</g>';
  g+='<g id="tgtF">'+cells(TGT[0],TGT[1]).map(function(c){return '<circle class="cf b" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="11.5"/>'}).join("")+'</g>';
  /* free proteins drifting in the blood */
  g+='<g id="fp">'+[[64,228,0],[166,274,1.2],[240,226,2.1],[306,272,.7]].map(function(c){return '<path class="prot" transform="translate('+c[0]+' '+c[1]+')" d="'+blobD(6.5,c[2])+'"/>'}).join("")+'</g>';
  /* step 1: bare strands, each with two proteins stuck to it */
  for(var i=0;i<3;i++)g+='<g class="ns" id="ns'+i+'"><path class="pr2" d="'+blobD(7,i)+'" transform="translate(-12 -13)"/><path class="pr2" d="'+blobD(6.5,i+2)+'" transform="translate(14 12)"/><path class="hx" d="'+H[0]+'"/><path class="hx" d="'+H[1]+'"/><path class="hr" d="'+H[2]+'"/></g>';
  /* steps 2-3: strands that the brush closes around */
  for(i=0;i<3;i++)g+='<g class="bs" id="bs'+i+'"><path class="br" d="'+haloD(34,10,28)+'"/><path class="hx b" d="'+H[0]+'"/><path class="hx b" d="'+H[1]+'"/><path class="hr b" d="'+H[2]+'"/></g>';
  g+='<g id="lb1"><text class="a" x="24" y="494">BARE STRANDS ARE CLEARED</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="494">THE BRUSH SHIELDS EACH STRAND</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="494">DELIVERED BEYOND THE LIVER</text></g>';
  return g+'</svg>';
}
function scene(){return bgScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var rU=$("#rtU",svg),rD=$("#rtD",svg),LU=rU.getTotalLength(),LD=rD.getTotalLength();
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),liv:$("#livF",svg),tgt:$("#tgtF",svg),fp:$("#fp",svg),
    ns:[0,1,2].map(function(i){return $("#ns"+i,svg)}),bs:[0,1,2].map(function(i){return $("#bs"+i,svg)}),
    br:$$(".bs .br",svg).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  /* end points inside each tissue: three slots near the cluster centre */
  var SL=[[-22,-8],[6,10],[26,-14]];
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function at(path,L,f){var q=path.getPointAtLength(Math.max(0,Math.min(1,f))*L);return [q.x,q.y]}
  function mv(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    op(E.fp,b*.9);
    /* step 1: bare strands ride the upper branch into the liver and are taken up there */
    var a1=seg(p,.02,.3);
    E.ns.forEach(function(el,k){var f=Math.max(0,Math.min(1,a1*1.3-k*.15)),q=at(rU,LU,f*.93),s=SL[k],e=seg(f,.86,1);
      mv(el,q[0]+s[0]*e,q[1]+s[1]*e);op(el,b*seg(p,.0,.05)*(1-seg(p,.31,.36))*(1-.5*e))});
    op(E.liv,b*seg(p,.16,.3)*(1-.35*seg(p,.62,.8)));
    /* step 2: new strands enter and stop in the vessel; the brush draws in around each */
    var bin=seg(p,.36,.47),halo=seg(p,.45,.6),bout=seg(p,.68,.92);
    E.bs.forEach(function(el,k){var x0=BX[k]-20,stop=(x0-(-40))*bin-40;
      var q;if(bout<=0){q=[20+stop,250]}else{var f0=(BX[k]-20)/LD,f=f0+(1-f0)*Math.max(0,Math.min(1,bout*1.25-(2-k)*.12)),s=SL[k],e=seg(f,.9,1);q=at(rD,LD,f*.95);q=[q[0]+s[0]*e*.8,q[1]+s[1]*e*.8]}
      mv(el,q[0],q[1]);op(el,b*seg(p,.34,.4))});
    E.br.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-halo)).toFixed(1)});
    /* step 3: the target tissue lights up as the shielded strands settle */
    op(E.tgt,b*seg(p,.84,.96));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}
