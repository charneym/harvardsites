/* The story scene (BL/BY/DB): how a Vigorous Mind virtual visit works (vigorousmind.com, "How do virtual family visits
   work?"), as ONE continuous engraved floor plan of a care wing: rooms with beds and chairs either side of a corridor, the
   robot's dock and UV disinfection cabinet at the left end. Step 1: a visit is booked and a Zoom link sent; the robot's
   route to the resident's room draws in. Step 2: the robot drives itself down the corridor into the room and the visitor
   appears on its screen. Step 3: it returns to the dock, the cabinet door closes and the six-minute UV cycle runs.
   Every element is driven by the scrubbed story progress. An illustration, not a real building. */
var SCW=760,SCH=520;
var RX=[150,262,374,486,598],RW=112,TOP=[40,196],BOT=[264,420],CY=230,TGT=3;
var PATH=[[86,CY],[RX[TGT]+RW/2,CY],[RX[TGT]+RW/2,150],[RX[TGT]+RW/2-22,122]];
function plen(P){var L=0,i;for(i=1;i<P.length;i++)L+=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);return L}
function pat(P,u){var L=plen(P)*u,i;for(i=1;i<P.length;i++){var d=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);if(L<=d||i===P.length-1){var k=d?Math.min(1,L/d):0;return [P[i-1][0]+(P[i][0]-P[i-1][0])*k,P[i-1][1]+(P[i][1]-P[i-1][1])*k,Math.atan2(P[i][1]-P[i-1][1],P[i][0]-P[i-1][0])]}L-=d}return [P[P.length-1][0],P[P.length-1][1],0]}
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<text class="t fd" x="24" y="24">FLOOR PLAN · A CARE WING</text>';
  g+='<text class="t fd" x="710" y="24" text-anchor="end">ILLUSTRATION</text>';
  /* the plan: outer walls, corridor walls broken by a door into every room, room partitions */
  g+='<g id="scPlan">';
  g+='<path class="wl sD" d="M24 40H710V420H24Z"/>';
  var top='M150 '+TOP[1],bot='M150 '+BOT[0];
  RX.forEach(function(x){var dc=x+RW/2;top+='H'+(dc-16)+'M'+(dc+16)+' '+TOP[1];bot+='H'+(dc-16)+'M'+(dc+16)+' '+BOT[0]});
  top+='H710';bot+='H710';
  g+='<path class="wl sD" d="'+top+'"/><path class="wl sD" d="'+bot+'"/>';
  var pr='';RX.forEach(function(x){pr+='M'+x+' 40V'+TOP[1]+'M'+x+' '+BOT[0]+'V420'});
  g+='<path class="wl sD" d="'+pr+'"/>';
  /* furniture: a bed (pillow, blanket fold) and a chair in every room */
  var fu='';
  RX.forEach(function(x){
    [[TOP[0]+14,1],[BOT[1]-14,-1]].forEach(function(r){var y0=r[0],s=r[1],bx=x+14,bw=46,bl=88,by=s>0?y0:y0-bl;
      fu+='M'+bx+' '+by+'h'+bw+'v'+bl+'h-'+bw+'Z';
      var py=s>0?by+6:by+bl-22;fu+='M'+(bx+6)+' '+py+'h'+(bw-12)+'v16h-'+(bw-12)+'Z';
      var fy=s>0?by+bl*.55:by+bl*.45;fu+='M'+bx+' '+f(fy)+'h'+bw;
      var cx=x+RW-34,cy=s>0?y0+8:y0-30;fu+='M'+cx+' '+cy+'h22v22h-22Z';
    })});
  g+='<path class="fu sD" d="'+fu+'"/>';
  /* the dock: charging bay and the UV cabinet at the corridor's end */
  g+='<path class="wl sD" d="M24 '+(CY-34)+'H118V'+(CY+34)+'H24"/>';
  g+='<path class="fu sD" d="M34 '+(CY-24)+'h40v48h-40Z"/>';
  g+='</g>';
  g+='<text class="t fd" x="24" y="444">DOCK · UV CABINET</text>';
  /* the route, the cabinet door and its UV light, the call, the robot */
  g+='<path id="scRoute" class="rt" d="M'+PATH.map(function(p){return f(p[0])+' '+f(p[1])}).join('L')+'"/>';
  g+='<g id="scUV">';for(i=0;i<5;i++)g+='<path class="uv" d="M'+(39+i*7.5)+' '+(CY-20)+'V'+(CY+20)+'"/>';g+='</g>';
  g+='<path id="scDoor" class="door" d="M74 '+(CY-24)+'V'+(CY+24)+'"/>';
  g+='<text id="scTimer" class="a tm" x="130" y="'+(CY+6)+'">6:00</text>';
  var vx=RX[TGT]+RW+16,vy=58;
  g+='<g id="scCall"><rect class="scr" x="'+vx+'" y="'+vy+'" width="88" height="64"/><circle class="pp" cx="'+(vx+44)+'" cy="'+(vy+25)+'" r="10"/><path class="pp" d="M'+(vx+22)+' '+(vy+64)+'c2-15 11-21 22-21s20 6 22 21"/><path class="lnk" d="M'+vx+' '+(vy+44)+'L'+f(PATH[3][0]+18)+' '+f(PATH[3][1])+'"/></g>';
  g+='<g id="scBot"><circle class="bh" r="21"/><circle class="bb" r="13"/><path class="bs" d="M7 -9V9"/></g>';
  g+='<g id="lb1"><text class="a" x="24" y="492">A VISIT IS BOOKED · THE ROUTE IS SET</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="492">DISPATCHED TO THE RESIDENT’S ROOM</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="492">DOCKED · SIX-MINUTE UV CYCLE</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={plan:dl("#scPlan .sD"),fade:$$("text.fd",svg),route:$("#scRoute",svg),door:$("#scDoor",svg),uv:$("#scUV",svg),tm:$("#scTimer",svg),
    call:$("#scCall",svg),bot:$("#scBot",svg),halo:$("#scBot .bh",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var RL=E.route.getTotalLength(),lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var pv=seg(p,0,.16);
    E.plan.forEach(function(a,i){var v=Math.min(1,Math.max(0,b*(pv*1.3-i*.03)));a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)});
    /* step 1: the route draws from the dock to the room (solid while drawing, dashed once set) */
    var rIn=seg(p,.16,.32),rOut=seg(p,.62,.68);
    E.route.style.strokeDasharray=rIn<1?(RL*rIn).toFixed(1)+" "+RL:"5 6";
    op(E.route,b*(rIn>0?1:0)*(1-rOut));
    /* step 2: the robot drives out and into the room; step 3: back to the dock */
    var go=seg(p,.36,.56),back=seg(p,.7,.84),u=go*(1-back);
    var q=pat(PATH,u),ang=(go>0&&go<1)?q[2]:(back>0&&back<1)?q[2]+Math.PI:0;
    E.bot.setAttribute("transform","translate("+q[0].toFixed(1)+" "+q[1].toFixed(1)+") rotate("+(ang*180/Math.PI).toFixed(1)+")");
    op(E.bot,b*seg(p,.04,.14));
    op(E.halo,((go>0&&go<1)||(back>0&&back<1))?.9:.4);
    op(E.call,b*seg(p,.54,.62)*(1-seg(p,.68,.72)));
    /* the cabinet: open while the robot is out, closes once it is home, then the UV cycle runs and the timer counts down */
    var cl=seg(p,.84,.88),uv=seg(p,.86,.9);
    op(E.door,b*(go>0?cl:1));
    var run=seg(p,.88,1);
    op(E.uv,b*uv*(.65+.35*Math.sin(p*90)));
    var s=Math.round(360*(1-run)),mm=Math.floor(s/60),ss=s%60;E.tm.textContent=mm+":"+(ss<10?"0":"")+ss;
    op(E.tm,b*uv);
    op(E.l1,b*seg(p,.2,.26)*(1-seg(p,.34,.38)));op(E.l2,b*seg(p,.44,.5)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.86,.92));
  };
}
