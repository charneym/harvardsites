/* the story scene (BL/BY/DB): ONE engraved elevation of Stenseminde's own mark, the wreath of serrated, parallel-veined
   leaves around the name. The first frame is complete: the neatline, the name and "Est. 2003" at the centre, and the whole
   wreath drawn as a faint ghost. Each step of the firm's own description of itself inks one quarter of the wreath: the
   foot of the left branch (roots in the pump industry), its crown (an active minority owner), the foot of the right
   branch (a majority owner), its crown (long-term ownership). Lines draw on scroll; each label fades in with its step and
   points at the leaves it names. */
function wrLeaf(x,y,L,a,f){/* one leaf: toothed outline, midrib and paired veins, as in the logo */
  var c=Math.cos(a),s=Math.sin(a),P=function(u,v){return f(x+(u*c-v*s)*L)+' '+f(y+(u*s+v*c)*L)};
  function hw(u){return u<=0||u>=1?0:.36*Math.pow(Math.sin(Math.PI*Math.pow(u,.72)),.85)}
  var N=30,up=[],dn=[],i,u,t;
  for(i=0;i<=N;i++){u=i/N;t=(i%3===1&&u>.12&&u<.94)?.035:0;up.push(P(u,-(hw(u)+t)));dn.push(P(u,hw(u)+t))}
  var o='M'+up.join('L')+'L'+dn.reverse().join('L')+'Z';
  var v='M'+P(-.08,0)+'L'+P(.97,0);
  for(i=1;i<=8;i++){u=.08+i*.095;var u2=Math.min(.98,u+.13);v+='M'+P(u,0)+'L'+P(u2,-hw(u2)*.92)+'M'+P(u,0)+'L'+P(u2,hw(u2)*.92)}
  return [o,v];
}
function wrPlan(o){
  var f=function(n){return n.toFixed(1)},B=[],cx=o.cx,cy=o.cy,r=o.r,side,s,j;
  for(side=-1;side<=1;side+=2){
    var th0=Math.PI*.56,th1=Math.PI*1.3,pts=[],K=40;
    for(j=0;j<=K;j++){var th=th0+(th1-th0)*j/K,x=cx+Math.cos(th)*r,y=cy+Math.sin(th)*r;pts.push([side<0?x:2*cx-x,y])}
    var stem='M'+pts.map(function(p){return f(p[0])+' '+f(p[1])}).join('L');
    var lv=[];
    for(j=0;j<13;j++){s=.04+j*.077;var k=Math.min(K,Math.round(s*K)),p=pts[k],q=pts[Math.min(K,k+1)],pp=pts[Math.max(0,k-1)];
      var ta=Math.atan2(q[1]-pp[1],q[0]-pp[0]),out=(j%2?1:-1),a=ta+out*.62*(side<0?-1:1),L=r*(.4-.17*s);
      if(Math.hypot(p[0]+Math.cos(a)*L-cx,p[1]+Math.sin(a)*L-cy)<Math.hypot(p[0]-cx,p[1]-cy)){L*=.6;a=ta+out*.4*(side<0?-1:1)}
      lv.push({s:s,d:wrLeaf(p[0],p[1],L,a,f)})}
    if(true){var e=pts[K],e2=pts[K-1],ta2=Math.atan2(e[1]-e2[1],e[0]-e2[0]);lv.push({s:1,d:wrLeaf(e[0],e[1],r*.22,ta2,f)})}
    B.push({side:side,stem:stem,lv:lv});
  }
  return B;
}
function lines(l){return l[3].split('|').map(function(t,i){return '<tspan x="'+l[0]+'" dy="'+(i?'1.35em':'0')+'">'+t+'</tspan>'}).join('')}
function wrScene(o){
  var W=o.W,H=o.H,f=function(n){return n.toFixed(1)},P=wrPlan(o);
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true">';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="'+(W-1)+'" height="'+(H-1)+'"/>';
  g+='<g class="gh">'+P.map(function(b){return '<path d="'+b.stem+'"/>'+b.lv.map(function(l){return '<path d="'+l.d[0]+'"/>'}).join('')}).join('')+'</g>';
  g+='<text class="nm" x="'+f(o.cx)+'" y="'+f(o.cy-o.r*.06)+'" text-anchor="middle">STENSEMINDE</text>'+
     '<text class="nm2" x="'+f(o.cx)+'" y="'+f(o.cy+o.r*.2)+'" text-anchor="middle">Holding ApS</text>'+
     '<path class="gr sD" d="M'+f(o.cx-o.r*.36)+' '+f(o.cy+o.r*.34)+'H'+f(o.cx+o.r*.36)+'"/>'+
     '<text class="es" x="'+f(o.cx)+'" y="'+f(o.cy+o.r*.47)+'" text-anchor="middle">E S T . 2 0 0 3</text>';
  g+='<g class="tb"><path class="kb" d="M'+f(W-o.ut-o.tb[0])+' '+f(o.ut)+'h'+o.tb[0]+'v'+o.tb[1]+'h-'+o.tb[0]+'Z"/>'+
     '<text class="t" x="'+f(W-o.ut-o.tb[0]+10)+'" y="'+f(o.ut+16)+'">'+o.tbT[0]+'</text><text class="t s" x="'+f(W-o.ut-o.tb[0]+10)+'" y="'+f(o.ut+30)+'">'+o.tbT[1]+'</text></g></g>';
  function grp(id,b,lo,hi,stem,lab){
    var x='<g id="'+id+'">';if(stem)x+='<path class="st dr" d="'+b.stem+'"/>';
    b.lv.forEach(function(l){if(l.s<lo||l.s>=hi)return;x+='<path class="lo dr" d="'+l.d[0]+'"/><path class="vn dr" d="'+l.d[1]+'"/>'});
    return x+'<path class="ld dr" d="'+lab[4]+'"/><text x="'+f(lab[0])+'" y="'+f(lab[1])+'" text-anchor="'+lab[2]+'" class="a">'+lines(lab)+'</text></g>';
  }
  g+=grp('sc1',P[0],0,.5,1,o.l1)+grp('sc2',P[0],.5,2,0,o.l2)+grp('sc3',P[1],0,.5,1,o.l3)+grp('sc4',P[1],.5,2,0,o.l4);
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return wrScene({mob:1,W:400,H:460,cx:200,cy:236,r:128,ut:12,tb:[156,40],tbT:["ELEVATION · KRANSEN","STENSEMINDE HOLDING"],
    l1:[16,446,"start","RØDDER I PUMPEINDUSTRIEN","M112 434L122 384"],
    l2:[16,74,"start","AKTIV MINORITETSEJER","M70 82L96 150"],
    l3:[384,446,"end","MAJORITETSEJER","M290 434L278 384"],
    l4:[384,74,"end","LANGSIGTET EJERSKAB","M326 82L304 150"]});
  return wrScene({W:800,H:520,cx:400,cy:262,r:196,ut:14,tb:[232,40],tbT:["ELEVATION · KRANSEN","STENSEMINDE HOLDING · EST. 2003"],
    l1:[26,470,"start","RØDDER I|PUMPEINDUSTRIEN","M206 474L268 440"],
    l2:[26,150,"start","AKTIV|MINORITETSEJER","M186 162L236 180"],
    l3:[774,470,"end","MAJORITETSEJER,|NÅR DET GIVER MENING","M562 474L524 444"],
    l4:[774,150,"end","LANGSIGTET|EJERSKAB","M660 162L594 182"]});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .gh, #scBase .nm, #scBase .nm2, #scBase .es",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)],l:[$("#sc1 .ld",svg),$("#sc2 .ld",svg),$("#sc3 .ld",svg),$("#sc4 .ld",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var S=[seg(p,.0,.18),seg(p,.22,.46),seg(p,.5,.72),seg(p,.76,.96)];
    for(var i=0;i<4;i++){E.g[i].style.opacity=b.toFixed(3);draw(E.d[i],S[i]);var vis=i<3?S[i]*(1-S[i+1]):S[i];E.t[i].style.opacity=vis.toFixed(3);E.l[i].style.opacity=vis.toFixed(3)}
  };
}
