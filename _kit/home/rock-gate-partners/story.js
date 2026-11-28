/* the story scene (BL/BY/DB): ONE drawing of the stone piers, iron gate and arch of Rock Gate's mark, built on scroll in the
   order of the firm's mission ("continuous improvement and investment in people, product, process and technology"):
   1 people: the footing and the first courses of both piers; 2 product: the piers rise to their caps and the gate's iron
   pickets draw in; 3 process: the rails tie the pickets together and the arch's voussoirs climb from both sides;
   4 technology: the keystone drops in and the arch is complete. A faint dashed outline shows the whole from the start.
   Labels fade in with their step, one at a time. The drawing is illustrative. */
var RG={g:470,pl:[70,170],pr:[440,540],top:262,cx:305,ri:135,ro:170,nv:13};
function rgPier(x0,x1){var o='',y=RG.g,row=0,h=26,k;while(y-h>=RG.top-1){var off=row%2?(x1-x0)/3:0,xs=[x0],x=x0+off;
  if(off)xs.push(x);while(x+(x1-x0)/1.5<x1){x+=(x1-x0)/1.5*.66;xs.push(x)}xs.push(x1);xs=xs.filter(function(v,i,A){return i===0||v-A[i-1]>14});
  for(k=0;k<xs.length-1;k++)o+='<rect class="sn" data-y="'+(y-h)+'" x="'+(xs[k]+1).toFixed(1)+'" y="'+(y-h+1)+'" width="'+(xs[k+1]-xs[k]-2).toFixed(1)+'" height="'+(h-2)+'"/>';
  y-=h;row++}
  o+='<rect class="sn cap" data-y="'+(RG.top-14)+'" x="'+(x0-8)+'" y="'+(RG.top-14)+'" width="'+(x1-x0+16)+'" height="13"/>';return o}
function rgArch(){var o='',n=RG.nv,i,f=function(v){return v.toFixed(1)};for(i=0;i<n;i++){var a0=Math.PI*(1-i/n),a1=Math.PI*(1-(i+1)/n),g=.012;
  var p=[[RG.ri,a0-g],[RG.ro,a0-g],[RG.ro,a1+g],[RG.ri,a1+g]].map(function(q){return [RG.cx+Math.cos(q[1])*q[0],RG.top-14-Math.sin(q[1])*q[0]]});
  var d="M"+f(p[0][0])+" "+f(p[0][1])+"L"+f(p[1][0])+" "+f(p[1][1])+"A"+RG.ro+" "+RG.ro+" 0 0 1 "+f(p[2][0])+" "+f(p[2][1])+"L"+f(p[3][0])+" "+f(p[3][1])+"A"+RG.ri+" "+RG.ri+" 0 0 0 "+f(p[0][0])+" "+f(p[0][1])+"Z";
  var mid=(n-1)/2,key=i===Math.floor(n/2);o+='<path class="vs'+(key?' ks':'')+'" data-i="'+(key?-1:Math.abs(i-mid))+'" d="'+d+'"/>'}return o}
function rgGate(){var o='',x,top=RG.top+18;for(x=196;x<=416;x+=22){var t=top+18-Math.abs(x-RG.cx)*-.0;o+='<path class="pk" d="M'+x+' '+(RG.g-8)+'V'+top+'M'+(x-4)+' '+(top+7)+'L'+x+' '+(top-3)+'L'+(x+4)+' '+(top+7)+'"/>'}
  o+='<path class="rl" d="M178 '+(top+30)+'H432M178 '+(RG.g-40)+'H432M178 '+(top+92)+'Q305 '+(top+52)+' 432 '+(top+92)+'"/>';return o}
function scene(){
  var mob=MOBILE(),g='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 610 450" aria-hidden="true">';
  g+='<path class="gd" d="M20 '+RG.g+'H590"/>';
  g+='<g class="gh"><rect x="'+RG.pl[0]+'" y="'+RG.top+'" width="100" height="'+(RG.g-RG.top)+'"/><rect x="'+RG.pr[0]+'" y="'+RG.top+'" width="100" height="'+(RG.g-RG.top)+'"/><path d="M'+(RG.cx-RG.ro)+' '+(RG.top-14)+'A'+RG.ro+' '+RG.ro+' 0 0 1 '+(RG.cx+RG.ro)+' '+(RG.top-14)+'"/></g>';
  g+='<g id="rgP">'+rgPier(RG.pl[0],RG.pl[1])+rgPier(RG.pr[0],RG.pr[1])+'</g>';
  g+='<g id="rgG">'+rgGate()+'</g><g id="rgA">'+rgArch()+'</g>';
  var L=mob?["PEOPLE","PRODUCT","PROCESS","TECHNOLOGY"]:["FOOTING · PEOPLE","PIERS AND PICKETS · PRODUCT","RAILS AND ARCH · PROCESS","KEYSTONE · TECHNOLOGY"];
  for(var k=0;k<4;k++)g+='<text class="t a" id="rgL'+k+'" x="'+RG.cx+'" y="'+(RG.g+30)+'" text-anchor="middle">'+L[k]+'</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var S=$$("#rgP .sn",svg).map(function(r){return [r,+r.getAttribute("data-y")]}),G=$$("#rgG path",svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():300;p.style.strokeDasharray=L+" "+L;return [p,L,p.classList.contains("rl")]});
  var V=$$("#rgA .vs",svg).map(function(v){return [v,+v.getAttribute("data-i")]}),T=[0,1,2,3].map(function(k){return $("#rgL"+k,svg)}),gh=$$(".gh,.gd",svg);
  var H=RG.g-(RG.top-14);
  return function(p,b){
    if(!svg.isConnected)return;
    gh.forEach(function(e){e.style.opacity=b.toFixed(3)});
    var s1=seg(p,.02,.22),s2=seg(p,.27,.47),s3=seg(p,.52,.72),s4=seg(p,.77,.92);
    /* the piers: courses up to 40% of the height in step 1, the rest and the caps in step 2 */
    var lvl=RG.g-H*(.4*s1+.6*s2);
    S.forEach(function(a){var on=a[1]>=lvl-.5?1:0;a[0].style.opacity=(b*on).toFixed(3)});
    G.forEach(function(a){var v=a[2]?s3:s2;a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);a[0].style.opacity=(b*(v>0?1:0)).toFixed(3)});
    /* voussoirs climb from both springings (data-i 6 down to .5) in step 3; the keystone (-1) drops in at step 4 */
    V.forEach(function(a){var v=a[0];if(a[1]<0){var d=(1-s4)*-60;v.setAttribute("transform","translate(0 "+d.toFixed(1)+")");v.style.opacity=(b*s4).toFixed(3)}
      else{var th=1-(a[1]/6);v.style.opacity=(b*(s3>0&&s3>=th*.92?1:0)).toFixed(3)}});
    var W=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    T.forEach(function(t,k){t.style.opacity=(b*(k===0?1:seg(p,W[k][0],W[k][0]+.03))*(k===3?1:(1-seg(p,W[k][1]-.03,W[k][1])))).toFixed(3)});
  };
}
