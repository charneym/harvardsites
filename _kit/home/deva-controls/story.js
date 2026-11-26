/* The story scene (BL/BY/DB): one measurement on a bridge CMM driven by Deva hardware, as deva.co.uk describes the parts.
   Front elevation of the machine, kept on screen; drawn as the site's own fine-line engineering drawing:
   Step 1 (Move): the PCI Express servo motion controller drives the carriage along the bridge and the ram down.
   Step 2 (Count): encoder interfaces read the scale on each axis (position, velocity, acceleration).
   Step 3 (Touch): the stylus touches the part and the probe triggers; the position is captured at that instant.
   Step 4 (Report): the points pass to the CMM software and build the measured part. Sizes are illustrative. */
var PATH=[346,376,406,432,470,500];
var GY=412,BMY=150,BMH=26,PT=352,PSX=330,STX=440,SDY=380;   /* granite top, beam top/height, part top, part left x, step x, step floor */
function dvScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="dvsc'+(mob?" mob":"")+'" viewBox="'+(mob?'0 100 760 432':'0 100 760 385')+'" aria-hidden="true">';
  /* granite table and its stand */
  g+='<rect class="gr" x="48" y="'+GY+'" width="664" height="26"/><path class="grl" d="M48 '+(GY+8)+'H712"/>';
  /* the part: a block with a stepped shoulder and a bore (hidden lines) */
  g+='<path class="prt" d="M'+PSX+' '+GY+'V'+PT+'H'+STX+'V'+SDY+'H520V'+GY+'"/><path class="hid" d="M352 '+PT+'V'+GY+'M392 '+PT+'V'+GY+'"/>';
  /* bridge: two legs on bearing pads and the beam */
  g+='<g class="brg"><path class="br" d="M96 '+GY+'V'+(BMY+BMH)+'M128 '+GY+'V'+(BMY+BMH)+'M632 '+GY+'V'+(BMY+BMH)+'M664 '+GY+'V'+(BMY+BMH)+'"/><rect class="br" x="84" y="'+BMY+'" width="592" height="'+BMH+'"/><rect class="pad" x="88" y="'+(GY-12)+'" width="48" height="12"/><rect class="pad" x="624" y="'+(GY-12)+'" width="48" height="12"/></g>';
  /* step 2: the scale along the beam and the one on the ram (ticks), drawn in */
  g+='<g id="dvSc"><path class="scl" id="dvSx" d="M140 '+(BMY+BMH+7)+'H620"/>';
  for(i=0;i<=48;i++)g+='<path class="tk" d="M'+(140+i*10)+' '+(BMY+BMH+3)+'v'+(i%5?5:9)+'"/>';
  g+='</g>';
  /* moving group: carriage, ram, probe, stylus, ball (translated by JS) */
  g+='<g id="dvCar"><g id="dvRam"><rect class="ram" x="-11" y="100" width="22" height="100"/><g id="dvZs">';
  for(i=0;i<6;i++)g+='<path class="tk" d="M11 '+(104+i*16)+'h'+(i%3?4:7)+'"/>';
  g+='</g><rect class="prb" x="-9" y="200" width="18" height="30"/><rect class="prb" x="-5" y="230" width="10" height="14"/><path class="sty" d="M0 244V282"/><circle class="rby" cx="0" cy="287" r="5"/></g>'+
     '<rect class="car" x="-38" y="'+(BMY-14)+'" width="76" height="'+(BMH+28)+'"/><rect class="rh" id="dvRh" x="-10" y="'+(BMY+BMH+1)+'" width="20" height="6"/></g>';
  /* step 3: the trigger pulse at the contact */
  g+='<circle class="pls" id="dvPl" cx="0" cy="'+PT+'" r="8"/>';
  /* step 4: measured points on the part */
  var PTS=PATH.map(function(x){return [x,x>STX?SDY:PT]});
  g+='<g id="dvPts">'+PTS.map(function(q,k){return '<circle class="mp" id="dvM'+k+'" cx="'+q[0]+'" cy="'+q[1]+'" r="4.2"/>'}).join("")+'</g>';
  /* band labels, one per step (below the table) */
  var BY=mob?476:466;
  var LB=mob?["MOVE · SERVO MOTION CONTROL","COUNT · ENCODER INTERFACES","TOUCH · PROBE TRIGGER","REPORT · TO YOUR CMM SOFTWARE"]:
    ["MOVE · PCI EXPRESS SERVO MOTION CONTROL","COUNT · POSITION, VELOCITY, ACCELERATION","TOUCH · THE PROBE TRIGGERS, THE POSITION IS CAPTURED","REPORT · NATIVE, OR THROUGH THE CMM I++ SERVER"];
  LB.forEach(function(s,k){g+='<g id="dvB'+(k+1)+'"><text class="t" x="48" y="'+BY+'">'+s+'</text></g>'});
  return g+'</svg>';
}
function scene(){return dvScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var E={car:q("#dvCar"),ram:q("#dvRam"),sc:q("#dvSc"),sx:q("#dvSx"),zs:q("#dvZs"),rh:q("#dvRh"),pl:q("#dvPl"),
    b:[1,2,3,4].map(function(k){return q("#dvB"+k)}),m:[].slice.call(svg.querySelectorAll("#dvPts .mp"))};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  /* ram offset d: ball centre at local y 287, so it sits at 287+d. Contact on a face at y F: d = F-5-287. */
  function dTo(F){return F-5-287}
  var X0=200,X1=PATH[0],UP=-40,SAFE=dTo(PT)-30,N=PATH.length;
  var SLEN=480;E.sx.style.strokeDasharray=SLEN;
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 1 (0-.25): carriage travels along the bridge, the ram comes down to a safe height above the part */
    var x=X0+(X1-X0)*seg(p,.02,.22),dz=UP+(SAFE-UP)*seg(p,.08,.24);
    /* step 3 (.5-.6): the final approach to contact on the top face */
    dz+=(dTo(PT)-SAFE)*seg(p,.5,.6);
    /* step 4 (.78-.98): the probe steps across the part, lift, move, touch, point after point (the last two on the shoulder) */
    var r=Math.max(0,Math.min(1,(p-.78)/.2)),u=r*(N-1),k=Math.min(N-2,Math.floor(u)),f=u-k;
    if(p>.78){var a=PATH[k],c=PATH[k+1],fa=a>STX?SDY:PT,fc=c>STX?SDY:PT,m=seg(f,.25,.75);
      x=a+(c-a)*m;var base=dTo(fa)+(dTo(fc)-dTo(fa))*m,lift=Math.max(0,dTo(fa)-dTo(PT))+24;
      dz=base-lift*Math.sin(Math.PI*seg(f,.1,.9))}
    E.car.setAttribute("transform","translate("+x.toFixed(1)+" 0)");E.ram.setAttribute("transform","translate(0 "+dz.toFixed(1)+")");
    /* step 2 (.25-.5): scales draw in; the read head lights */
    op(E.sc,b);E.sx.style.strokeDashoffset=(SLEN*(1-seg(p,.26,.4))).toFixed(1);
    [].forEach.call(E.sc.querySelectorAll(".tk"),function(t,i){op(t,b*seg(p,.27+i*.002,.3+i*.002))});
    op(E.zs,b*seg(p,.3,.36));E.rh.classList.toggle("on",p>.3);
    /* step 3: a pulse at the contact */
    E.pl.setAttribute("cx",x.toFixed(1));
    var pu=seg(p,.6,.66)*(1-seg(p,.7,.75));op(E.pl,b*pu);E.pl.setAttribute("r",(6+10*seg(p,.6,.72)).toFixed(1));
    /* step 4: each point appears as the ball touches it (the first at the step-3 contact) */
    E.m.forEach(function(m,k){op(m,b*(k===0?seg(p,.6,.63):seg(u,k-.12,k-.02)*(p>.78?1:0)))});
    /* band labels */
    op(E.b[0],b*(1-seg(p,.24,.27)));op(E.b[1],b*seg(p,.27,.3)*(1-seg(p,.49,.52)));op(E.b[2],b*seg(p,.52,.55)*(1-seg(p,.74,.77)));op(E.b[3],b*seg(p,.77,.8));
  };
}
