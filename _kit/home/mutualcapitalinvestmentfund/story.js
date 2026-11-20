/* the story scene (BL/DB): ONE engraved Pennsylvania bank barn, raised in four steps like a barn-raising, the oldest
   picture of mutual help in the firm's home country. Step 1 lays the stone foundation (the capital: the mutual
   community's share in bone, the institutional share, capped at 45%, in the firm's blue); step 2 raises the timber
   frame (the growth capital); step 3 closes it in with siding, roof and a quartered gable window (admitted asset,
   quarterly valuation); step 4 finishes the farmstead: silo, weathervane, fence and sunrise (the long-term partner). */
function barn(o){
  var S=o.s,X=o.x,Y=o.y,i,j,g='';
  function P(x,y){return (X+x*S).toFixed(1)+" "+(Y+y*S).toFixed(1)}
  function L(pts){return "M"+pts.map(function(p){return P(p[0],p[1])}).join("L")}
  var R=function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}(41);
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+o.W+' '+o.H+'" aria-hidden="true">';
  /* base: hills, ground, grass */
  g+='<g id="scBase">';
  var hp=[];for(i=0;i<=40;i++){var x=i/40*o.W;hp.push(x.toFixed(1)+" "+(o.hz-o.ha*(.55+.3*Math.sin(i*.35+1)+.15*Math.sin(i*.9))).toFixed(1))}
  g+='<path class="hill sD" d="M'+hp.join("L")+'"/>';
  var hp2=[];for(i=0;i<=40;i++){var x2=i/40*o.W;hp2.push(x2.toFixed(1)+" "+(o.hz+o.ha*.5-o.ha*(.35+.25*Math.sin(i*.5+3)+.1*Math.sin(i*1.3))).toFixed(1))}
  g+='<path class="hill h2 sD" d="M'+hp2.join("L")+'"/>';
  g+='<path class="gr sD" d="M0 '+Y+'H'+o.W+'"/>';
  for(i=0;i<o.grass;i++){var gx=R()*o.W,gy=Y+6+R()*(o.H-Y-12)*.9,gl=3+R()*5;g+='<path class="gs" d="M'+gx.toFixed(1)+' '+gy.toFixed(1)+'l'+(1+R()*2).toFixed(1)+' '+(-gl).toFixed(1)+'"/>'}
  g+='</g>';
  var i0=g.length;
  /* step 4 backdrop: the sun rising behind the hills */
  var sx=o.sun[0],sy=o.sun[1],sr=o.sun[2];
  g+='<g id="scSun"><path class="sun" d="M'+(sx-sr)+' '+sy+'A'+sr+' '+sr+' 0 0 1 '+(sx+sr)+' '+sy+'"/>';
  for(i=0;i<11;i++){var a=-Math.PI+(i+.5)/11*Math.PI;g+='<path class="ray" d="M'+(sx+Math.cos(a)*sr*1.3).toFixed(1)+' '+(sy+Math.sin(a)*sr*1.3).toFixed(1)+'L'+(sx+Math.cos(a)*sr*(i%2?1.75:2.1)).toFixed(1)+' '+(sy+Math.sin(a)*sr*(i%2?1.75:2.1)).toFixed(1)+'"/>'}
  g+='</g>';
  /* step 1: the stone foundation, laid course by course */
  g+='<g id="scStones">';var rows=4,rh=40/rows,k=0;
  for(j=0;j<rows;j++){var y0=-rh*(j+1),off=(j%2)*16,xs=[-150],xx=-150+20+off;while(xx<140){xs.push(xx);xx+=26+R()*14}xs.push(150);
    for(i=0;i<xs.length-1;i++){var a1=xs[i]+1.4,a2=xs[i+1]-1.4,b1=y0+1.3,b2=y0+rh-1.3,cr=2.2,mid=(a1+a2)/2,inst=mid>15;
      g+='<path class="stone'+(inst?' i':'')+'" d="M'+P(a1+cr,b1)+'L'+P(a2-cr,b1+R()*.8)+'L'+P(a2,b1+cr)+'L'+P(a2-.6,b2-cr)+'L'+P(a2-cr,b2)+'L'+P(a1+cr,b2-R()*.6)+'L'+P(a1,b2-cr)+'L'+P(a1+.4,b1+cr)+'Z"/>';k++}}
  g+='</g>';
  /* step 2: the timber frame (posts, plates, girts, braces, rafters, collar, king post) */
  var T=[[[-150,-40],[-150,-150]],[[-75,-40],[-75,-150]],[[0,-40],[0,-150]],[[75,-40],[75,-150]],[[150,-40],[150,-150]],
    [[-150,-150],[150,-150]],[[-150,-96],[150,-96]],[[-150,-40],[150,-40]],
    [[-150,-128],[-128,-150]],[[-75,-128],[-97,-150]],[[-75,-128],[-53,-150]],[[75,-128],[53,-150]],[[75,-128],[97,-150]],[[150,-128],[128,-150]],
    [[-166,-140],[0,-236]],[[166,-140],[0,-236]],[[-78,-195],[78,-195]],[[0,-150],[0,-236]],[[0,-165],[-34,-195]],[[0,-165],[34,-195]]];
  g+='<g id="scWallG"><path class="wall" d="'+L([[-150,-40],[-150,-150],[0,-236],[150,-150],[150,-40]])+'Z"/></g><g id="scFrame">';T.forEach(function(t){g+='<path class="tim" d="'+L(t)+'"/>'});g+='</g>';
  /* step 3: roof, siding, doors, the quartered gable window */
  g+='<g id="scClose"><path class="roof" d="'+L([[-172,-136],[0,-242],[172,-136],[150,-150],[0,-236],[-150,-150]])+'Z"/>';
  var sd='';for(var bx=-144;bx<150;bx+=8){if(Math.abs(bx)<41&&true){sd+='M'+P(bx,-125)+'L'+P(bx,-150-Math.max(0,(150-Math.abs(bx))*86/150));continue}var top=-150-Math.max(0,(150-Math.abs(bx))*86/150);
    if(Math.abs(bx)<20)top=Math.min(-150,top);sd+='M'+P(bx,-41)+'L'+P(bx,top)}
  g+='<path class="sid" d="'+sd+'"/>';
  g+='<path class="edge" d="'+L([[-172,-136],[0,-242],[172,-136]])+'"/><path class="edge" d="'+L([[-150,-41],[-150,-150],[150,-150],[150,-41]])+'"/>';
  g+='<path class="door" d="'+L([[-40,-41],[-40,-124],[40,-124],[40,-41]])+'M'+P(0,-41)+'L'+P(0,-124)+'M'+P(-40,-41)+'L'+P(0,-124)+'M'+P(0,-41)+'L'+P(-40,-124)+'M'+P(0,-41)+'L'+P(40,-124)+'M'+P(40,-41)+'L'+P(0,-124)+'"/>';
  g+='<path class="door" d="'+L([[-118,-62],[-118,-100],[-92,-100],[-92,-62]])+'Z'+L([[92,-62],[92,-100],[118,-100],[118,-62]])+'Z"/>';
  var wx=X,wy=Y-188*S,wr=17*S;
  g+='<circle class="winbg" cx="'+wx.toFixed(1)+'" cy="'+wy.toFixed(1)+'" r="'+wr.toFixed(1)+'"/>';
  for(i=0;i<4;i++){var q0=-Math.PI/2+i*Math.PI/2,q1=q0+Math.PI/2;g+='<path class="q" d="M'+wx.toFixed(1)+' '+wy.toFixed(1)+'L'+(wx+Math.cos(q0)*wr).toFixed(1)+' '+(wy+Math.sin(q0)*wr).toFixed(1)+'A'+wr.toFixed(1)+' '+wr.toFixed(1)+' 0 0 1 '+(wx+Math.cos(q1)*wr).toFixed(1)+' '+(wy+Math.sin(q1)*wr).toFixed(1)+'Z"/>'}
  g+='<circle class="win" cx="'+wx.toFixed(1)+'" cy="'+wy.toFixed(1)+'" r="'+wr.toFixed(1)+'"/><path class="win" d="M'+(wx-wr).toFixed(1)+' '+wy.toFixed(1)+'H'+(wx+wr).toFixed(1)+'M'+wx.toFixed(1)+' '+(wy-wr).toFixed(1)+'V'+(wy+wr).toFixed(1)+'"/>';
  g+='</g>';
  /* step 4: silo, cupola and weathervane, fence */
  var sl=o.silo;
  g+='<g id="scFarm"><path class="farm" d="'+L([[sl,0],[sl,-212],[sl+52,-212],[sl+52,0]])+'M'+P(sl,-212)+'Q'+P(sl+26,-250)+' '+P(sl+52,-212)+'"/>';
  var hb='';for(var hy=-24;hy>-212;hy-=24)hb+='M'+P(sl,hy)+'L'+P(sl+52,hy);g+='<path class="farm f2" d="'+hb+'"/>';
  g+='<path class="farm" d="'+L([[-14,-228],[-14,-252],[14,-252],[14,-228]])+'M'+P(-20,-252)+'L'+P(0,-266)+'L'+P(20,-252)+'M'+P(0,-266)+'L'+P(0,-292)+'M'+P(-16,-286)+'L'+P(16,-286)+'M'+P(10,-290)+'L'+P(16,-286)+'L'+P(10,-282)+'M'+P(-16,-290)+'L'+P(-11,-286)+'L'+P(-16,-282)+'"/>';
  var fz=o.fence,fp='M'+P(fz[0],-22)+'L'+P(fz[1],-22)+'M'+P(fz[0],-11)+'L'+P(fz[1],-11);for(var fx=fz[0];fx<=fz[1]+.1;fx+=(fz[1]-fz[0])/5)fp+='M'+P(fx,0)+'L'+P(fx,-28);
  g+='<path class="farm" d="'+fp+'"/></g>';
  /* the finished farmstead as a faint ghost from the first frame (DB): each step then inks its own part */
  g=g.slice(0,i0)+'<g class="ghost">'+g.slice(i0).replace(/ id="[^"]*"/g,'')+'</g>'+g.slice(i0);
  /* labels, one set per step */
  function lab(id,items){var s='<g id="'+id+'" class="lb">';items.forEach(function(t){if(t.ld)s+='<path class="lead" d="M'+t.ld[0]+' '+t.ld[1]+'L'+t.ld[2]+' '+t.ld[3]+'"/><circle class="mk" cx="'+t.ld[2]+'" cy="'+t.ld[3]+'" r="2.6"/>';s+='<text x="'+t.x+'" y="'+t.y+'" text-anchor="'+(t.a||"start")+'" class="'+(t.c||"w")+'">'+t.t+'</text>'});return s+'</g>'}
  g+=lab("scL1",o.L1)+lab("scL2",o.L2)+lab("scL3",o.L3)+lab("scL4",o.L4);
  return g+'</svg>';
}
function scene(){
  if(MOBILE()){var s=.74,x=166,y=348;function f(n){return n.toFixed(1)}
    return barn({mob:1,W:400,H:420,s:s,x:x,y:y,hz:228,ha:22,grass:60,sun:[60,228,24],silo:186,fence:[-216,-172],
      L1:[{x:12,y:394,t:"MUTUAL COMMUNITY",c:"w"},{x:388,y:394,t:"INSTITUTIONAL ≤ 45%",a:"end",c:"a"}],
      L2:[{x:12,y:60,t:"MINORITY GROWTH CAPITAL",c:"a",ld:[60,70,f(x-75*s),f(y-150*s)]}],
      L3:[{x:12,y:40,t:"ADMITTED ASSET",c:"w"},{x:388,y:60,t:"QUARTERLY VALUATION",a:"end",c:"a",ld:[300,70,f(x+12*s),f(y-200*s)]}],
      L4:[{x:388,y:40,t:"A PATIENT PARTNER",a:"end",c:"a",ld:[330,50,f(x+10*s),f(y-286*s)]}]})}
  var S=1.34,X=352,Y=452;function F(n){return n.toFixed(1)}
  return barn({W:800,H:520,s:S,x:X,y:Y,hz:300,ha:34,grass:120,sun:[96,300,34],silo:186,fence:[-250,-192],
    L1:[{x:20,y:500,t:"THE MUTUAL COMMUNITY: THE MAJORITY",c:"w",ld:[150,486,F(X-90*S),F(Y-14*S)]},{x:780,y:500,t:"INSTITUTIONAL: CAPPED AT 45%",a:"end",c:"a",ld:[650,486,F(X+90*S),F(Y-14*S)]}],
    L2:[{x:20,y:110,t:"MINORITY GROWTH CAPITAL",c:"a",ld:[110,120,F(X-128*S),F(Y-150*S)]}],
    L3:[{x:20,y:110,t:"ADMITTED ASSET",c:"w",ld:[70,120,F(X-120*S),F(Y-120*S)]},{x:780,y:110,t:"QUARTERLY VALUATION",a:"end",c:"a",ld:[650,120,F(X+12*S),F(Y-200*S)]}],
    L4:[{x:780,y:40,t:"A PATIENT, LONG-TERM PARTNER",a:"end",c:"a",ld:[640,50,F(X+12*S),F(Y-286*S)]}]});
}
function storyDraw(svg){
  var E={base:$$("#scBase .sD",svg),gs:$$("#scBase .gs",svg),stones:$$("#scStones .stone",svg),frame:$$("#scFrame .tim",svg),
    close:$$("#scClose .sid, #scClose .edge, #scClose .door, #scClose .win",svg),q:$$("#scClose .q",svg),winbg:$("#scClose .winbg",svg),roof:$("#scClose .roof",svg),wall:$("#scWallG .wall",svg),
    farm:$$("#scFarm path",svg),sun:$("#scSun",svg),L:[$("#scL1",svg),$("#scL2",svg),$("#scL3",svg),$("#scL4",svg)]};
  function len(a){return a.map(function(p){try{return Math.ceil(p.getTotalLength())+2}catch(e){return 400}})}
  var BL=len(E.base),FL=len(E.frame),CL=len(E.close),ML=len(E.farm),NS=E.stones.length,lastB=-1;
  function draw(list,L,v,stag){var n=list.length;list.forEach(function(el,k){var a=stag?k/n*.45:0,x=Math.max(0,Math.min(1,(v-a)/(1-a)));el.style.strokeDasharray=L[k];el.style.strokeDashoffset=(L[k]*(1-x)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,BL,b,false);E.gs.forEach(function(el){el.style.opacity=(b*.9).toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.46),s3=seg(p,.5,.66),s4=seg(p,.74,.95);
    E.stones.forEach(function(el,k){var a=k/NS*.7;el.style.opacity=(b*Math.max(0,Math.min(1,(s1-a)/.3))).toFixed(3)});
    draw(E.frame,FL,s2,true);
    draw(E.close,CL,s3,true);E.roof.style.opacity=(b*s3).toFixed(3);E.wall.style.opacity=(b*s3).toFixed(3);E.winbg.style.opacity=(b*s3).toFixed(3);
    var qs=seg(p,.58,.7);E.q.forEach(function(el,k){el.style.opacity=(b*Math.max(0,Math.min(1,qs*4-k))).toFixed(3)});
    draw(E.farm,ML,s4,true);E.sun.style.opacity=(b*s4).toFixed(3);
    E.L[0].style.opacity=(b*s1*(1-seg(p,.2,.25))).toFixed(3);E.L[1].style.opacity=(b*s2*(1-seg(p,.47,.52))).toFixed(3);
    E.L[2].style.opacity=(b*s3*(1-seg(p,.7,.75))).toFixed(3);E.L[3].style.opacity=(b*s4).toFixed(3);
  };
}
