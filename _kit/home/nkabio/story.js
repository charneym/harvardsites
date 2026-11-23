/* The story scene (DB): NKA Bio's own picture of NKA01 (nkabio.com: "press pause on death", "when minutes count, our antibody
   buys hours") as ONE fine-line object that fills the frame: a stopwatch, with the prefilled syringe beside it.
   Frame 0 is already a complete picture (the watch at 0:00).
   Step 1 (injury): the hand starts; a warm arc marks the time gone.
   Step 2 (shock): the hand races on and the arc grows.
   Step 3 (pause): the syringe is pressed, the crown goes down, the hand stops, and the arc turns the logo green.
   Step 4 (care): an hours ring draws round the watch, leaving the crown clear.
   No text sits inside the dial, so the sweeping hand never meets a label; every label has >=8px clear space (DR3).
   The hours ring is a plain dash draw on a scaling stroke and ends at offset 0 (DR4). */
var SCW=760,SCH=560,CX=400,CY=292,R0=200;
function pol(r,a){a=(a-90)*Math.PI/180;return [CX+r*Math.cos(a),CY+r*Math.sin(a)]}
function arcD(r,a0,a1){var p=pol(r,a0),q=pol(r,a1);return "M"+p[0].toFixed(1)+" "+p[1].toFixed(1)+"A"+r+" "+r+" 0 "+(a1-a0>180?1:0)+" 1 "+q[0].toFixed(1)+" "+q[1].toFixed(1)}
function ringD(r){return "M"+CX+" "+(CY-r)+"A"+r+" "+r+" 0 1 1 "+CX+" "+(CY+r)+"A"+r+" "+r+" 0 1 1 "+CX+" "+(CY-r)}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+ringD(R0)+'"/>';
  g+='<path class="wo sD" d="'+ringD(182)+'"/>';
  g+='</g>';
  /* crown and side button */
  g+='<g id="crown"><path class="wl" d="M388 '+(CY-R0)+'V'+(CY-R0-16)+'H412V'+(CY-R0)+'"/><path class="wl cf" d="M372 '+(CY-R0-16)+'V'+(CY-R0-30)+'H428V'+(CY-R0-16)+'Z"/></g>';
  var b1=pol(R0,45),b2=pol(R0+14,45);
  g+='<path class="wl" d="M'+b1[0].toFixed(1)+' '+b1[1].toFixed(1)+'L'+b2[0].toFixed(1)+' '+b2[1].toFixed(1)+'" style="stroke-width:7;stroke-linecap:butt"/>';
  /* 60 ticks */
  g+='<g id="tks">';for(i=0;i<60;i++){var big=i%5===0,p=pol(big?150:162,i*6),q=pol(174,i*6);g+='<path class="'+(big?"tk tb":"tk")+'" d="M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'L'+q[0].toFixed(1)+' '+q[1].toFixed(1)+'"/>'}g+='</g>';
  /* the arcs: time gone (warm), then paused (green) */
  g+='<path class="arcR" id="arcR" d="M0 0"/><path class="arcG" id="arcG" d="M0 0"/>';
  /* the hours ring, open at the crown */
  g+='<path class="hrs" id="hrs" d="'+arcD(228,14,346)+'"/>';
  /* the hand */
  g+='<g id="hand"><path class="hd2" d="M'+CX+' '+(CY+26)+'V'+(CY-158)+'"/><circle class="hc" cx="'+CX+'" cy="'+CY+'" r="7"/></g>';
  /* the prefilled syringe */
  g+='<g id="syr">';
  g+='<path class="wl" d="M44 196H116"/>';
  g+='<path class="wl" d="M62 196V388H98V196"/>';
  g+='<rect class="liq" id="liq" x="66" y="216" width="28" height="168"/>';
  g+='<g id="plg"><path class="wl" d="M66 216H94"/><path class="wl" d="M80 216V150"/><path class="wl" d="M58 146H102"/></g>';
  g+='<path class="wl" d="M70 388L76 402H84L90 388"/><path class="wl" d="M80 402V462"/>';
  g+='</g>';
  /* labels */
  g+='<g id="lSy"><text class="t a2" x="80" y="'+(mob?508:500)+'" text-anchor="middle">NKA01</text></g>';
  g+='<g id="lMn"><text class="t" x="642" y="'+(CY+5)+'">MINUTES</text></g>';
  g+='<g id="lHr"><text class="t a3" x="642" y="'+(CY+5)+'">HOURS</text></g>';
  var ly=SCH-6,lx=20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE CLOCK STARTS':'INJURY · THE CLOCK STARTS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SHOCK SETS IN':'SHOCK · THE BODY’S RESPONSE TAKES OVER')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NKA01, GIVEN BY EMS':'NKA01 · INJECTED BY EMS AT THE POINT OF INJURY')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TIME TO REACH CARE':'MORE TIME FOR TRANSPORT AND SURGERY')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),tks:$("#tks",svg),crown:$("#crown",svg),hand:$("#hand",svg),arcR:$("#arcR",svg),arcG:$("#arcG",svg),
    hrs:$("#hrs",svg),syr:$("#syr",svg),liq:$("#liq",svg),plg:$("#plg",svg),lSy:$("#lSy",svg),lMn:$("#lMn",svg),lHr:$("#lHr",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var HL=E.hrs.getTotalLength();E.hrs.style.strokeDasharray=HL+" "+HL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.tks,b);op(E.crown,b);op(E.hand,b);op(E.lMn,b*(1-seg(p,.76,.8)));
    /* 1-2. the hand runs and the arc of lost time grows; 3. it stops */
    var ang=66*seg(p,.04,.22)+186*ease(seg(p,.28,.48));
    E.hand.setAttribute("transform","rotate("+ang.toFixed(2)+" "+CX+" "+CY+")");
    var on=ang>.6?1:0,d=on?arcD(191,0,ang):"M0 0";E.arcR.setAttribute("d",d);E.arcG.setAttribute("d",d);
    var gr=seg(p,.6,.68);op(E.arcR,b*on*(1-gr));op(E.arcG,b*on*gr);
    /* 3. the syringe: shown, then pressed; the crown goes down as the watch pauses */
    op(E.syr,b*seg(p,.5,.56));op(E.lSy,b*seg(p,.52,.58));
    var k=ease(seg(p,.56,.68)),sy=148*k;
    E.plg.setAttribute("transform","translate(0 "+sy.toFixed(1)+")");
    E.liq.setAttribute("y",(216+sy).toFixed(1));E.liq.setAttribute("height",Math.max(0,168-sy).toFixed(1));
    E.crown.setAttribute("transform","translate(0 "+(6*seg(p,.58,.62)).toFixed(1)+")");
    /* 4. the hours ring draws round the watch and stays complete */
    E.hrs.style.strokeDashoffset=(HL*(1-seg(p,.78,.94))).toFixed(1);op(E.hrs,b*(p>.775?1:0));
    op(E.lHr,b*seg(p,.86,.92));
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.74,.78)));op(E.l4,b*seg(p,.8,.87));
  };
}
