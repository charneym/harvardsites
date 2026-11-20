/* the story scene (BL/BY/DB): ONE engraved elevation of an oak, the firm's own mark, growing on its rise. The first frame
   is complete: a young tree on the ground line, with the mature oak it will become drawn as a faint ghost. Each step of the
   firm's own approach (partner with the founder, build the team, grow, exit together) inks one layer of the same tree:
   the roots, then the trunk and main limbs, then the branches, then the full crown. Lines draw on scroll; each label
   fades in with its step and points at the part it names. */
function oakPlan(o){
  var s=o.seed,R=function(){s=(s*16807)%2147483647;return (s-1)/2147483646},f=function(n){return n.toFixed(1)};
  var P={seg:[],tips:[],roots:[]},S=o.S,x0=o.cx,y0=o.gy;
  function grow(x,y,ang,len,wid,dep){
    var bend=(R()-.5)*.4,ex=x+Math.cos(ang)*len,ey=y+Math.sin(ang)*len,mx=x+Math.cos(ang+bend)*len*.55,my=y+Math.sin(ang+bend)*len*.55;
    P.seg.push({d:'M'+f(x)+' '+f(y)+'Q'+f(mx)+' '+f(my)+' '+f(ex)+' '+f(ey),w:wid,dep:dep,x:x,y:y,mx:mx,my:my,ex:ex,ey:ey});
    if(dep>=4){P.tips.push([ex,ey]);return}
    var n=dep===0?4:(R()<.5?2:3),spread=dep===0?1.75:.92-dep*.06;
    for(var k=0;k<n;k++){var q=k/(n-1)-.5,a2=ang+q*spread+(R()-.5)*.3;a2=Math.max(-Math.PI+.22,Math.min(-.22,a2));
      grow(ex,ey,a2,len*(dep===0?.78:.66+R()*.14),wid*.62,dep+1)}
    if(dep>=3)P.tips.push([ex,ey]);
  }
  grow(x0,y0,-Math.PI/2,S*.28,S*.06,0);
  /* roots: spreading below grade, wider than they are deep */
  for(var r=0;r<7;r++){var a=Math.PI*(.06+r*.147)+(R()-.5)*.12,L=S*(.2+R()*.16),x=x0+(r-3)*S*.012,y=y0+2,d='M'+f(x)+' '+f(y);
    var cx=x,cy=y;for(var k=1;k<=4;k++){var ang=a+(R()-.5)*.5,l=L/4,nx=cx+Math.cos(ang)*l,ny=cy+Math.sin(ang)*l*.45;d+='Q'+f((cx+nx)/2+(R()-.5)*6)+' '+f((cy+ny)/2+(R()-.5)*4)+' '+f(nx)+' '+f(ny);cx=nx;cy=ny;
      if(k===2){var ba=ang+(R()<.5?-.6:.6),bx=cx+Math.cos(ba)*L*.22,by=cy+Math.abs(Math.sin(ba))*L*.12;P.roots.push('M'+f(cx)+' '+f(cy)+'L'+f(bx)+' '+f(by))}}
    P.roots.push(d)}
  return P;
}
function leafP(x,y,s,a){/* a small lobed oak leaf, drawn as one closed outline plus its midrib */
  var c=Math.cos(a),n=Math.sin(a),f=function(u,v){return (x+(u*c-v*n)*s).toFixed(1)+' '+(y+(u*n+v*c)*s).toFixed(1)};
  return 'M'+f(0,0)+'Q'+f(.3,-.5)+' '+f(.55,-.28)+'Q'+f(.7,-.62)+' '+f(.95,-.3)+'Q'+f(1.15,-.45)+' '+f(1.3,0)+'Q'+f(1.15,.45)+' '+f(.95,.3)+'Q'+f(.7,.62)+' '+f(.55,.28)+'Q'+f(.3,.5)+' '+f(0,0)+'Z M'+f(.05,0)+'L'+f(1.2,0);
}
function lines(l){return l[3].split('|').map(function(t,i){return '<tspan x="'+l[0]+'" dy="'+(i?'1.35em':'0')+'">'+t+'</tspan>'}).join('')}
function oakScene(o){
  var W=o.W,H=o.H,gy=o.gy,f=function(n){return n.toFixed(1)},P=oakPlan({seed:o.seed,S:o.S,cx:o.cx,gy:gy}),i;
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true">';
  /* base: neatline, title block, the ground line with soil hatching, the mature oak as a faint ghost, and the young tree */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="'+(W-1)+'" height="'+(H-1)+'"/>';
  g+='<path class="gr sD" d="M'+f(o.ut)+' '+f(gy)+'H'+f(W-o.ut)+'"/>';
  var hat='';for(var x=o.ut+8;x<W-o.ut;x+=11)hat+='M'+f(x)+' '+f(gy+5)+'l-7 9';g+='<path class="ht sD" d="'+hat+'"/>';
  g+='<g class="gh">'+P.seg.map(function(s){return '<path d="'+s.d+'" style="stroke-width:'+Math.max(.6,s.w*.5).toFixed(2)+'"/>'}).join('')+'</g>';
  var yx=o.cx,yh=o.S*.26;
  g+='<g class="yng"><path class="bl sD" d="M'+f(yx)+' '+f(gy)+'C'+f(yx-1)+' '+f(gy-yh*.5)+' '+f(yx+2)+' '+f(gy-yh*.7)+' '+f(yx)+' '+f(gy-yh)+'M'+f(yx+1)+' '+f(gy-yh*.55)+'Q'+f(yx+10)+' '+f(gy-yh*.68)+' '+f(yx+16)+' '+f(gy-yh*.82)+'M'+f(yx)+' '+f(gy-yh*.72)+'Q'+f(yx-9)+' '+f(gy-yh*.84)+' '+f(yx-14)+' '+f(gy-yh*.98)+'"/>';
  [[yx,gy-yh,-1.9],[yx+16,gy-yh*.82,-.7],[yx-14,gy-yh*.98,-2.4],[yx+5,gy-yh*.9,-1.2],[yx-6,gy-yh*1.02,-2]].forEach(function(l){g+='<path class="lf0 sD" d="'+leafP(l[0],l[1],o.lf*1.1,l[2])+'"/>'});
  g+='</g>';
  g+='<g class="tb"><path class="kb" d="M'+f(W-o.ut-o.tb[0])+' '+f(o.ut)+'h'+o.tb[0]+'v'+o.tb[1]+'h-'+o.tb[0]+'Z"/>'+
     '<text class="t" x="'+f(W-o.ut-o.tb[0]+10)+'" y="'+f(o.ut+16)+'">'+o.tbT[0]+'</text><text class="t s" x="'+f(W-o.ut-o.tb[0]+10)+'" y="'+f(o.ut+30)+'">'+o.tbT[1]+'</text></g></g>';
  /* 1: roots, spreading below the ground line (the founder stays invested) */
  g+='<g id="sc1">'+P.roots.map(function(d,j){return '<path class="rt dr" d="'+d+'" style="stroke-width:'+(j%2?1:1.4)+'"/>'}).join('')+
     '<path class="ld dr" d="'+o.l1[4]+'"/><text x="'+f(o.l1[0])+'" y="'+f(o.l1[1])+'" text-anchor="'+o.l1[2]+'" class="a">'+lines(o.l1)+'</text></g>';
  /* 2: the trunk and main limbs, drawn as engraved outlines with bark hatching (management, systems, controls) */
  var t2='';P.seg.forEach(function(s){if(s.dep>1)return;var dx=s.ex-s.x,dy=s.ey-s.y,L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L,wa=s.w/2,wb=s.w*.62/2;
    [1,-1].forEach(function(k){t2+='<path class="tr dr" d="M'+f(s.x+nx*wa*k)+' '+f(s.y+ny*wa*k)+'Q'+f(s.mx+nx*(wa+wb)/2*k)+' '+f(s.my+ny*(wa+wb)/2*k)+' '+f(s.ex+nx*wb*k)+' '+f(s.ey+ny*wb*k)+'"/>'})});
  var bk='';if(true){var tr0=P.seg[0];for(i=0;i<16;i++){var u=.08+i*.055,yy=tr0.y+(tr0.ey-tr0.y)*u,xx=tr0.x+(tr0.ex-tr0.x)*u,ww=tr0.w*(1-u*.38)/2;bk+='M'+f(xx-ww*.8+(i%3)*ww*.5)+' '+f(yy)+'l'+(i%2?1.5:-1.5)+' -'+f(o.S*.02)}}
  g+='<g id="sc2">'+t2+'<path class="bk dr" d="'+bk+'"/><path class="ld dr" d="'+o.l2[4]+'"/><text x="'+f(o.l2[0])+'" y="'+f(o.l2[1])+'" text-anchor="'+o.l2[2]+'" class="a">'+lines(o.l2)+'</text></g>';
  /* 3: the branches reach out (add-on acquisitions, financing for growth) */
  g+='<g id="sc3">'+P.seg.filter(function(s){return s.dep>=2}).map(function(s){return '<path class="br dr" d="'+s.d+'" style="stroke-width:'+Math.max(.7,s.w*.38).toFixed(2)+'"/>'}).join('')+
     '<path class="ld dr" d="'+o.l3[4]+'"/><text x="'+f(o.l3[0])+'" y="'+f(o.l3[1])+'" text-anchor="'+o.l3[2]+'" class="a">'+lines(o.l3)+'</text></g>';
  /* 4: the full crown in leaf, with acorns (a professionally managed company with a much larger universe of buyers) */
  var Rl=o.seed*7,rl=function(){Rl=(Rl*16807)%2147483647;return (Rl-1)/2147483646},lv='',ac='';
  P.tips.forEach(function(t,j){for(var k=0;k<o.lpt;k++){var a=-Math.PI/2+(rl()-.5)*3.6;lv+='<path class="lf" d="'+leafP(t[0]+(rl()-.5)*o.lf*2,t[1]+(rl()-.5)*o.lf*1.6,o.lf*(.85+rl()*.4),a)+'"/>'}
    if(j%5===2){var ax=t[0]+o.lf*.6,ay=t[1]+o.lf*1.4,r=o.lf*.32;ac+='<path class="ac" d="M'+f(ax-r)+' '+f(ay)+'a'+f(r)+' '+f(r*1.3)+' 0 0 0 '+f(2*r)+' 0Z M'+f(ax-r*1.1)+' '+f(ay)+'h'+f(r*2.2)+'"/>'}});
  g+='<g id="sc4"><g class="lvs">'+lv+'</g>'+ac+'<path class="ld dr" d="'+o.l4[4]+'"/><text x="'+f(o.l4[0])+'" y="'+f(o.l4[1])+'" text-anchor="'+o.l4[2]+'" class="a">'+lines(o.l4)+'</text></g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return oakScene({mob:1,W:400,H:440,gy:330,S:300,cx:200,seed:4271,ut:12,lf:6,lpt:3,tb:[150,40],tbT:["ELEVATION · OAK","PROGRESS THROUGH GROWTH"],
    l1:[24,402,"start","FOUNDER STAYS INVESTED","M150 390L176 366"],
    l2:[24,428,"start","TEAM · REPORTING · CONTROLS","M236 422L208 314"],
    l3:[24,30,"start","ADD-ONS · FINANCING","M90 38L120 116"],
    l4:[24,52,"start","READY FOR EXIT","M70 58L100 84"]});
  return oakScene({W:800,H:520,gy:410,S:400,cx:420,seed:4271,ut:14,lf:7,lpt:4,tb:[230,40],tbT:["ELEVATION · OAK ON ITS RISE","PROGRESS THROUGH GROWTH"],
    l1:[40,452,"start","FOUNDER KEEPS|MEANINGFUL EQUITY","M206 448L318 436"],
    l2:[40,326,"start","MANAGEMENT ·|REPORTING · CONTROLS","M222 330L404 330"],
    l3:[786,250,"end","ADD-ON|ACQUISITIONS ·|FINANCING","M632 254L590 226"],
    l4:[40,104,"start","A LARGER UNIVERSE|OF BUYERS","M206 108L262 134"]});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .gh",svg),yng:$("#scBase .yng",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),lvs:$("#sc4 .lvs",svg),ac:$$("#sc4 .ac",svg),ld4:dl("#sc4 .ld"),
    t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,.0,.18),s2=seg(p,.22,.46),s3=seg(p,.5,.72),s4=seg(p,.76,.96);
    E.g1.style.opacity=b.toFixed(3);draw(E.d1,s1);
    E.g2.style.opacity=b.toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=b.toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=b.toFixed(3);draw(E.ld4,s4);
    E.lvs.style.opacity=s4.toFixed(3);E.lvs.style.transform="scale("+(.92+.08*s4).toFixed(3)+")";
    E.ac.forEach(function(a){a.style.opacity=seg(s4,.5,1).toFixed(3)});
    /* the young tree gives way as the mature trunk is drawn over it */
    E.yng.style.opacity=(b*(1-s2)).toFixed(3);
    /* one label at a time, each with its leader line */
    E.t[0].style.opacity=(s1*(1-s2)).toFixed(3);E.t[1].style.opacity=(s2*(1-s3)).toFixed(3);E.t[2].style.opacity=(s3*(1-s4)).toFixed(3);E.t[3].style.opacity=s4.toFixed(3);
    [[0,s1*(1-s2)],[1,s2*(1-s3)],[2,s3*(1-s4)],[3,s4]].forEach(function(q){var ld=$("#sc"+(q[0]+1)+" .ld",svg);if(ld)ld.style.opacity=q[1].toFixed(3)});
  };
}
