/* The story scene (BL/BY/DB): what a living therapy changes, drawn as ONE route from factory to body, kept on screen for
   all three steps (Innovate UK 10171810: insulin "is produced by bacteria or yeast" in manufacture, then injected, and
   its delivery "has remained similar since it was discovered in 1921"; Hijack Bio's innovation is "to replace injected
   insulin with a daily pill" using "programmable, modular living therapies"; hijack.bio: "environmentally aware targeted
   biogenic drug delivery systems"). Calm line drawing, no needles drawn in detail. Illustrative.
   Step 1: today — a fermenter, a vial, a cold-chain journey and an injection into the arm.
   Step 2: that long route gives way to a pill: the engineered cells travel it instead.
   Step 3: in the gut the cells sense their surroundings and release the biologic, which crosses into the blood. */
var SCW=760,SCH=520;
function hbScene(o){
  var g='',mob=o.mob,i;
  var Y=236;   /* the working line */
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true">';
  g+='<text class="t" x="30" y="64">'+(mob?"FROM FACTORY TO BLOOD":"FROM THE FACTORY TO THE BLOODSTREAM")+'</text>';
  /* step 1: fermenter, vial, the long route, the arm */
  g+='<g id="hbF"><path class="eq" d="M60 '+(Y-56)+'h78v96a16 16 0 0 1-16 16H76a16 16 0 0 1-16-16Z"/><path class="eq" d="M78 '+(Y-56)+'v-18h42v18"/><path class="lq" d="M60 '+(Y-6)+'h78"/></g>';
  g+='<g id="hbV"><path class="eq" d="M300 '+(Y-46)+'h30v72h-30Z"/><path class="eq" d="M304 '+(Y-46)+'v-12h22v12"/><path class="lq" d="M300 '+(Y+2)+'h30"/></g>';
  g+='<path id="hbR" class="rt sD" d="M150 '+(Y-4)+'H292M342 '+(Y-4)+'H520"/>';
  g+='<g id="hbA"><path class="eq" d="M560 '+(Y-70)+'c30 0 46 18 46 46v86c0 18-12 30-30 30h-26c-18 0-30-12-30-30v-86c0-28 14-46 40-46Z"/><path class="nd" d="M520 '+(Y-14)+'h36"/></g>';
  g+='<g id="hbL1"><text class="t s1" x="30" y="'+(Y+150)+'">'+(mob?"MADE IN A FERMENTER":"MADE IN A FERMENTER, SHIPPED COLD")+'</text><text class="t" x="30" y="'+(Y+174)+'">'+(mob?"THEN INJECTED":"THEN INJECTED, EVERY DAY")+'</text></g>';
  /* step 2: the pill, and the cells inside it */
  g+='<g id="hbP"><rect class="eq" x="300" y="'+(Y-34)+'" width="112" height="56" rx="28"/><path class="lq" d="M356 '+(Y-34)+'V'+(Y+22)+'"/>';
  for(i=0;i<4;i++){var cx=318+i*20,cy=Y-14+(i%2?12:0);g+='<g class="cell"><rect x="'+(cx-8)+'" y="'+(cy-4)+'" width="16" height="8" rx="4"/></g>'}
  g+='</g>';
  g+='<g id="hbL2"><text class="t s1" x="30" y="'+(Y+150)+'">'+(mob?"A DAILY PILL":"A DAILY PILL, AT ROOM TEMPERATURE")+'</text><text class="t" x="30" y="'+(Y+174)+'">'+(mob?"CELLS, NOT CARGO":"CARRYING THE CELLS, NOT THE DRUG")+'</text></g>';
  /* step 3: the gut wall, the cells sensing, the biologic crossing into the blood */
  g+='<g id="hbG"><path class="gw sD" d="M120 '+(Y+40)+'H640"/><path class="gw2 sD" d="M120 '+(Y+58)+'H640"/>'+
     '<text class="t" x="'+(mob?520:560)+'" y="'+(Y+28)+'">GUT</text><text class="t" x="'+(mob?520:560)+'" y="'+(Y+94)+'">BLOOD</text></g>';
  var cl='';for(i=0;i<5;i++){var x=220+i*72;cl+='<g class="cell"><rect x="'+(x-13)+'" y="'+(Y+14)+'" width="26" height="12" rx="6"/></g>'}
  g+='<g id="hbC">'+cl+'</g>';
  var sn='';for(i=0;i<5;i++){var x2=220+i*72;sn+='M'+(x2-20)+' '+(Y+4)+'q20 -14 40 0'}
  g+='<path id="hbS" class="sns" d="'+sn+'"/>';
  var dp='';for(i=0;i<5;i++){var x3=220+i*72;dp+='M'+x3+' '+(Y+32)+'V'+(Y+76)}
  g+='<path id="hbD" class="drp" d="'+dp+'"/>';
  g+='<g id="hbL3"><text class="t s1" x="30" y="'+(Y+150)+'">'+(mob?"SENSES, THEN RELEASES":"THE CELLS SENSE, THEN RELEASE")+'</text><text class="t" x="30" y="'+(Y+174)+'">'+(mob?"MADE WHERE NEEDED":"THE BIOLOGIC IS MADE WHERE IT IS NEEDED")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · TODAY":"1 · TODAY: A LONG ROUTE")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · A PILL":"2 · A DAILY PILL INSTEAD")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · IN PLACE":"3 · MADE IN PLACE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return hbScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={rt:dl("#hbR"),gw:dl("#hbG .sD"),sns:dl("#hbS"),drp:dl("#hbD"),
    F:$("#hbF",svg),V:$("#hbV",svg),A:$("#hbA",svg),P:$("#hbP",svg),G:$("#hbG",svg),C:$("#hbC",svg),S:$("#hbS",svg),D:$("#hbD",svg),R:$("#hbR",svg),
    L1:$("#hbL1",svg),L2:$("#hbL2",svg),L3:$("#hbL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    var out=ease(seg(p,.34,.42));
    /* step 1: the fermenter, the vial, the route, the arm — then the whole route leaves */
    op(E.F,b*seg(p,.04,.12)*(1-out));op(E.V,b*seg(p,.12,.2)*(1-out));
    draw(E.rt,b*ease(seg(p,.1,.24)));op(E.R,b*(1-out));op(E.A,b*seg(p,.2,.28)*(1-out));
    op(E.L1,b*seg(p,.12,.2)*(1-seg(p,.31,.36)));
    /* step 2: the pill with the cells inside */
    op(E.P,b*seg(p,.42,.52)*(1-seg(p,.66,.72)));
    op(E.L2,b*seg(p,.46,.52)*(1-seg(p,.64,.68)));
    /* step 3: the gut wall, the cells, their sensing and the biologic crossing */
    op(E.G,b*seg(p,.68,.76));draw(E.gw,b*ease(seg(p,.68,.8)));
    op(E.C,b*seg(p,.72,.8));
    op(E.S,b*seg(p,.78,.86));draw(E.sns,b*ease(seg(p,.78,.88)));
    op(E.D,b*seg(p,.84,.92));draw(E.drp,b*ease(seg(p,.84,.94)));
    op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
