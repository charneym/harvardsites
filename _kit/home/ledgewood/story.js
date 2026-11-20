/* the story scene (BL/BY/DB): ONE engraved elevation of a granite ledge rising from the river, the hero's subject drawn in
   fine line. Step 1 marks where the client stands today and the goals at the summit; step 2 draws the route up the ledge
   (the Investment Policy Statement); step 3 builds a cairn on the middle shelf, one stone per asset class (the allocation);
   step 4 raises the sun over the ledge (continuous monitoring) while the marker climbs, passing a review mark each year. */
var LG={
  prof:[[0,452],[178,452],[192,424],[206,402],[244,390],[258,352],[268,334],[334,318],[350,282],[360,262],[440,250],[452,222],[462,198],[548,184],[560,160],[572,140],[660,128],[730,118],[800,114]],
  trail:[[198,446],[214,404],[250,392],[266,340],[340,322],[364,262],[392,258],[446,252],[466,202],[552,188],[576,142],[652,130]],
  cairn:[404,256],stones:[[58,21,"EQUITIES"],[48,18,"FIXED INCOME"],[38,16,"CASH"],[26,13,"ALTERNATIVES"]],
  pines:[[596,135,56],[716,120,64],[748,118,92],[778,116,60],[486,194,48],[516,190,58],[290,330,40]],
  revs:[.36,.56,.74,.9]
};
function storySvg(o){
  function f(n){return (+n).toFixed(1)}
  var P=LG.prof,i,k,g='<svg class="'+(o.mob?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* far hills, engraved as contour strokes */
  [[300,.9],[350,.7],[392,.5]].forEach(function(h,n){var s=[];for(var x=0;x<=800;x+=10){s.push(x+" "+f(h[0]+18*Math.sin(x*.009+n*1.7)+9*Math.sin(x*.023+n)))}g+='<path class="ct sD" style="opacity:'+h[1]+'" d="M'+s.join("L")+'"/>'});
  /* river surface: ripple lines left of the ledge */
  for(i=0;i<9;i++){var y=458+i*7,x0=8+((i*37)%40),x1=150-((i*23)%50);g+='<path class="rip sD" d="M'+x0+' '+y+'H'+x1+'"/>'}
  g+='<path class="wl sD" d="M0 452H190"/>';
  /* the ledge: outline, then engraved hatching that follows the rock faces */
  var d="M"+P.map(function(p){return p[0]+" "+p[1]}).join("L")+"L800 520L178 520Z";
  g+='<path class="rock" d="'+d+'"/><path class="edge sD" d="M'+P.slice(1).map(function(p){return p[0]+" "+p[1]}).join("L")+'"/>';
  var R=function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}(29);
  /* steep faces: vertical strokes; shelves: horizontal strata */
  for(k=1;k<P.length-1;k++){var a=P[k],b=P[k+1],steep=Math.abs(b[1]-a[1])>Math.abs(b[0]-a[0])*.6;
    if(steep){for(var j=0;j<5;j++){var u=(j+.5)/5,hx=a[0]+(b[0]-a[0])*u,hy=a[1]+(b[1]-a[1])*u;g+='<path class="hat sD" d="M'+f(hx+2)+' '+f(hy+3)+'L'+f(hx+4+R()*3)+' '+f(Math.min(520,hy+22+R()*30))+'"/>'}}
    else{for(var j2=0;j2<3;j2++){var yy=a[1]+8+j2*9+R()*3;g+='<path class="hat sD" d="M'+f(a[0]+6+R()*8)+' '+f(yy)+'L'+f(b[0]-4-R()*14)+' '+f(yy+(b[1]-a[1])*.5)+'"/>'}}}
  /* granite joints: blocky fractures in the body of the ledge */
  for(i=0;i<34;i++){var jx=200+R()*590,top=crownAt(jx)+18,jy=top+R()*(500-top);if(jy>505)continue;var L=10+R()*18,an=R()<.5?Math.PI/2+(R()-.5)*.3:(R()-.5)*.25;
    g+='<path class="jt sD" d="M'+f(jx)+' '+f(jy)+'L'+f(jx+Math.cos(an)*L)+' '+f(jy+Math.sin(an)*L)+'"/>'}
  /* white pines on the crown, engraved: trunk and flat tiers */
  LG.pines.forEach(function(p){var x=p[0],y=p[1],H=p[2],s='M'+x+' '+y+'V'+f(y-H);
    for(var t=0;t<6;t++){var u=.25+t*.13,ty=y-H*u,rch=H*(.3*(1-u)+.08),dir=t%2?1:-1;s+='M'+x+' '+f(ty)+'L'+f(x+dir*rch)+' '+f(ty-rch*.12)+'M'+x+' '+f(ty-2)+'L'+f(x-dir*rch*.55)+' '+f(ty-2-rch*.08)}
    g+='<path class="pn sD" d="'+s+'"/>'});
  g+='<rect class="neat" x=".5" y=".5" width="799" height="519"/></g>';
  /* step 1: today, and the goals at the summit */
  var t0=LG.trail[0],tg=LG.trail[LG.trail.length-1],T=o.t;
  g+='<g id="scStart"><circle class="mkr" cx="'+t0[0]+'" cy="'+t0[1]+'" r="11"/><circle class="mk" cx="'+t0[0]+'" cy="'+t0[1]+'" r="4.5"/><text x="'+T.today[0]+'" y="'+T.today[1]+'" text-anchor="end" class="w">TODAY</text></g>';
  g+='<g id="scGoal"><path class="flag" d="M'+tg[0]+' '+tg[1]+'V'+(tg[1]-40)+'"/><path class="flg" d="M'+tg[0]+' '+(tg[1]-40)+'L'+(tg[0]+24)+' '+(tg[1]-33)+'L'+tg[0]+' '+(tg[1]-26)+'Z"/><text x="'+T.goal[0]+'" y="'+T.goal[1]+'" text-anchor="'+T.goal[2]+'" class="w">YOUR GOALS</text></g>';
  /* step 2: the route */
  g+='<path id="scTrail" class="trail" d="M'+LG.trail.map(function(p){return p[0]+" "+p[1]}).join("L")+'"/>';
  g+='<g id="scPol"><path class="lead" d="'+T.pol[0]+'"/>'+T.pol[1].map(function(l,n){return '<text x="'+l[0]+'" y="'+l[1]+'" text-anchor="'+(l[2]||"start")+'" class="a">'+l[3]+'</text>'}).join("")+'</g>';
  /* step 3: the cairn, one stone per asset class */
  var cx=LG.cairn[0],cy=LG.cairn[1];g+='<g id="scCairn">';
  LG.stones.forEach(function(s,n){var sw=s[0],sh=s[1],top=cy-sh;
    g+='<g class="stn"><path class="stone" d="M'+f(cx-sw/2)+' '+f(cy-2)+'Q'+f(cx-sw/2-2)+' '+f(top+2)+' '+f(cx-sw*.2)+' '+f(top)+'L'+f(cx+sw*.25)+' '+f(top+1)+'Q'+f(cx+sw/2+3)+' '+f(top+3)+' '+f(cx+sw/2)+' '+f(cy-2)+'Q'+cx+' '+f(cy+2)+' '+f(cx-sw/2)+' '+f(cy-2)+'Z"/>'+
      '<path class="lead" d="M'+f(cx-sw/2-4)+' '+f(cy-sh/2)+'L'+T.stoneX+' '+f(T.stoneY[n])+'"/><text x="'+(T.stoneX-6)+'" y="'+f(T.stoneY[n]+4)+'" text-anchor="end" class="'+(n?"w":"w")+'">'+s[2]+'</text></g>';
    cy=top+1});
  g+='</g>';
  /* step 4: the sun over the ledge, review marks on the route, and a climber's marker */
  g+='<g id="scSun"><circle class="sun" cx="0" cy="0" r="17"/><g class="rays">';for(i=0;i<16;i++){var an2=i/16*Math.PI*2;g+='<path d="M'+f(Math.cos(an2)*24)+' '+f(Math.sin(an2)*24)+'L'+f(Math.cos(an2)*(i%2?30:36))+' '+f(Math.sin(an2)*(i%2?30:36))+'"/>'}
  g+='</g><text x="'+T.sun[0]+'" y="'+T.sun[1]+'" text-anchor="'+T.sun[2]+'" class="a">CONTINUOUS MONITORING</text></g>';
  g+='<g id="scRev"></g><g id="scRevL"><path class="rv" d="M'+T.rev[0]+' '+(T.rev[1]-9)+'V'+(T.rev[1]+5)+'"/><text x="'+(T.rev[0]+12)+'" y="'+(T.rev[1]+1)+'" class="a">'+T.rev[2]+'</text></g>';
  g+='<g id="scWalker"><circle class="mk" r="5.5"/><circle class="mkr" r="11"/></g>';
  return g+'</svg>';
}
function crownAt(x){var P=LG.prof;for(var k=0;k<P.length-1;k++){if(P[k][0]<=x&&P[k+1][0]>=x){var u=(x-P[k][0])/((P[k+1][0]-P[k][0])||1);return P[k][1]+(P[k+1][1]-P[k][1])*u}}return 114}
function scene(){
  if(MOBILE())return storySvg({mob:1,vb:"160 0 640 520",t:{today:[212,476],goal:[640,70,"middle"],
    pol:["M206 298L226 394",[[176,262,"start","INVESTMENT"],[176,288,"start","POLICY"]]],
    stoneX:340,stoneY:[228,201,174,147],sun:[520,24,"middle"],rev:[176,510,"REVIEWED AT LEAST YEARLY"]}});
  return storySvg({vb:"0 0 800 520",t:{today:[184,436],goal:[652,78,"middle"],
    pol:["M212 400L150 378",[[146,354,"end","THE ROUTE: YOUR"],[146,370,"end","INVESTMENT POLICY"],[146,386,"end","STATEMENT"]]],
    stoneX:330,stoneY:[222,198,174,150],sun:[520,24,"middle"],rev:[24,498,"REVIEWED WITH YOU AT LEAST ONCE A YEAR"]}});
}
function storyDraw(svg){
  var mob=svg.classList.contains("mob");
  var E={base:$$("#scBase .sD",svg),misc:$$("#scBase .rock, #scBase .neat",svg),st:$("#scStart",svg),gl:$("#scGoal",svg),tr:$("#scTrail",svg),pol:$("#scPol",svg),
    stones:$$("#scCairn .stn",svg),sun:$("#scSun",svg),revG:$("#scRev",svg),revL:$("#scRevL",svg),wk:$("#scWalker",svg)};
  var BL=E.base.map(function(p){return p.getTotalLength()}),TL=E.tr.getTotalLength();
  /* review ticks across the route */
  var NS="http://www.w3.org/2000/svg",TK=LG.revs.map(function(u){var a=E.tr.getPointAtLength(TL*u),b=E.tr.getPointAtLength(Math.min(TL,TL*u+2)),dx=b.x-a.x,dy=b.y-a.y,l=Math.sqrt(dx*dx+dy*dy)||1,nx=-dy/l*9,ny=dx/l*9;
    var p=document.createElementNS(NS,"path");p.setAttribute("class","rv");p.setAttribute("d","M"+(a.x+nx).toFixed(1)+" "+(a.y+ny).toFixed(1)+"L"+(a.x-nx).toFixed(1)+" "+(a.y-ny).toFixed(1));E.revG.appendChild(p);return p});
  var sunA=mob?[[520,150],[520,84]]:[[520,140],[520,72]];
  var lastB=-1;
  return function(p,b){
    if(!E.tr.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el,k){el.style.strokeDasharray=BL[k];el.style.strokeDashoffset=(BL[k]*(1-b)).toFixed(1)});E.misc.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.14),s2=seg(p,.25,.46),s3=seg(p,.5,.7),s4=seg(p,.75,.97);
    E.st.style.opacity=(b*s1).toFixed(3);E.gl.style.opacity=(b*s1).toFixed(3);
    E.tr.style.strokeDasharray="5 6";E.tr.style.opacity=b;
    E.tr.style.clipPath="inset(0 "+((1-s2)*100).toFixed(1)+"% 0 0)";
    E.pol.style.opacity=(b*s2).toFixed(3);
    E.stones.forEach(function(st,n){var v=seg(p,.5+n*.045,.56+n*.045);st.style.opacity=(b*v).toFixed(3);st.style.transform="translateY("+((1-v)*-14).toFixed(1)+"px)"});
    var sx=sunA[0][0]+(sunA[1][0]-sunA[0][0])*s4,sy=sunA[0][1]+(sunA[1][1]-sunA[0][1])*s4;
    E.sun.setAttribute("transform","translate("+sx.toFixed(1)+" "+sy.toFixed(1)+")");E.sun.style.opacity=(b*seg(p,.73,.8)).toFixed(3);
    $$("text",E.sun).forEach(function(t){t.setAttribute("transform","translate("+(-sx).toFixed(1)+" "+(-sy).toFixed(1)+")");t.style.opacity=seg(p,.85,.95).toFixed(3)});
    var fr=s4*.999,pt=E.tr.getPointAtLength(TL*fr);E.wk.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+pt.y.toFixed(1)+")");E.wk.style.opacity=(b*seg(p,.73,.8)).toFixed(3);
    E.revG.style.opacity=(b*seg(p,.73,.8)).toFixed(3);E.revL.style.opacity=(b*seg(p,.76,.84)).toFixed(3);
    TK.forEach(function(t,n){t.classList.toggle("on",s4>0&&fr>=LG.revs[n]-.003)});
  };
}
