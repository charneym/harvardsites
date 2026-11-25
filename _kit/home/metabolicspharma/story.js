/* The story scene (BL/BY/DB): how ENT-03 works, drawn as ONE continuous close-up of a nerve cell in the hypothalamus, with
   the insulin receptor in its membrane kept on screen for all three steps (metabolicspharma.com /ent03: ENT-03 "acts
   centrally on PTP1b in hypothalamic nuclei to regulate energy metabolism", "regulates whole-body responsiveness to
   insulin"; home page: "how to reverse central insulin resistance"). Step 1: insulin docks on the receptor, its inner
   tails light up (switched on) and the signal travels into the cell. Step 2: PTP1B, the enzyme that switches the receptor
   back off, docks on the tails; the lights go out and the signal fades (central insulin resistance). Step 3: ENT-03 (an
   aminosterol: a steroid core with a spermine tail) binds PTP1B, which lets go; the tails light again and the signal is
   restored. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
function mpHex(cx,cy,r){var d="",i;for(i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
function mpPent(cx,cy,r,rot){var d="",i;for(i=0;i<5;i++){var a=rot+i*Math.PI*2/5;d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
function mpScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the cell membrane (a bilayer), the receptor and the signal target, drawn in with the section ---- */
  g+='<g id="scBase">';
  var hd="",tl="";for(i=0;i<=56;i++){var x=44+i*12;if(x>266&&x<334)continue;hd+='<circle class="lh" cx="'+x+'" cy="222" r="4.4"/><circle class="lh" cx="'+x+'" cy="254" r="4.4"/>';tl+="M"+(x-1.5)+" 227V236M"+(x+1.5)+" 227V236M"+(x-1.5)+" 240V249M"+(x+1.5)+" 240V249"}
  g+='<path class="lip sD" d="'+tl+'"/>'+hd;
  /* the insulin receptor: two outer arms forming a cradle above the membrane, two strands through it, two inner tails */
  g+='<path class="ir sD" d="M292 222V196C292 176 280 160 262 150C248 142 240 128 244 112"/>';
  g+='<path class="ir sD" d="M308 222V196C308 176 320 160 338 150C352 142 360 128 356 112"/>';
  g+='<path class="ir sD" d="M292 254V372"/><path class="ir sD" d="M308 254V372"/>';
  g+='<path class="kd sD" d="M276 300H292V352H276Z"/><path class="kd sD" d="M308 300H324V352H308Z"/>';
  /* the signal's destination: the cell's energy-balance response */
  g+='<circle class="tg sD" cx="600" cy="420" r="26"/><circle class="tg2 sD" cx="600" cy="420" r="12"/>';
  g+='<text class="t" x="24" y="16">'+(mob?"NERVE CELL · HYPOTHALAMUS":"NERVE CELL IN THE HYPOTHALAMUS")+'</text>';
  g+='<text class="t" x="40" y="204">OUTSIDE</text><text class="t" x="40" y="284">INSIDE THE CELL</text>';
  g+='<text class="t" x="'+(mob?96:112)+'" y="336">'+(mob?"RECEPTOR":"INSULIN RECEPTOR")+'</text>';
  g+='<text class="t" x="600" y="474" text-anchor="middle">ENERGY BALANCE</text>';
  g+='</g>';
  /* ---- the switched-on sites on the receptor's inner tails ---- */
  g+='<g id="pSites">'+[310,326,342].map(function(y){return '<circle class="ph" cx="284" cy="'+y+'" r="4.2"/><circle class="ph" cx="316" cy="'+y+'" r="4.2"/>'}).join("")+'</g>';
  /* ---- the signal: from the tails to the energy-balance response ---- */
  g+='<path id="sig" class="sig" d="M300 380C318 430 420 452 560 428"/>';
  g+='<circle id="tgOn" class="tgon" cx="600" cy="420" r="12"/>';
  /* ---- insulin, which docks in the receptor's cradle ---- */
  g+='<g id="mIns"><circle class="ins" cx="0" cy="0" r="15"/><path class="insi" d="M-7 -4C-2 -9 4 -9 7 -3M-6 5C-1 9 5 8 8 3"/><text class="t" x="-78" y="-30" text-anchor="end">INSULIN</text></g>';
  /* ---- PTP1B, the brake, which docks on the inner tails ---- */
  g+='<g id="mPtp"><path class="ptp" d="M-6 -34C18 -40 42 -26 44 -4C46 18 30 36 6 36C-14 36 -26 26 -30 12C-24 10 -18 4 -18 -2C-18 -8 -24 -12 -30 -14C-26 -26 -18 -32 -6 -34Z"/><text class="t" x="48" y="'+(mob?44:34)+'">PTP1B</text></g>';
  /* ---- ENT-03: a steroid core (three six-rings and a five-ring) with its spermine tail ---- */
  g+='<g id="mEnt"><path class="ent" d="'+mpHex(-26,6,10)+'"/><path class="ent" d="'+mpHex(-8.7,-4,10)+'"/><path class="ent" d="'+mpHex(8.6,6,10)+'"/><path class="ent" d="'+mpPent(25.5,-2.5,9,Math.PI*1.1)+'"/><path class="entc" d="M34 -3L46 -12L57 -5L69 -14L80 -7"/><circle class="entn" cx="84" cy="-9" r="4.5"/><text class="t" x="96" y="'+(mob?2:0)+'">ENT-03</text></g>';
  /* ---- step captions, in the clear band under the scene ---- */
  g+='<g id="lb1"><text class="a" x="24" y="506">'+(mob?"INSULIN SWITCHES IT ON":"INSULIN SWITCHES THE RECEPTOR ON")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="506">'+(mob?"PTP1B SWITCHES IT OFF":"PTP1B SWITCHES IT OFF: THE SIGNAL FADES")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="506">'+(mob?"ENT-03 RESTORES IT":"ENT-03 BLOCKS PTP1B: THE SIGNAL RETURNS")+'</text></g>';
  return g+'</svg>';
}
function scene(){return mpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .lh",svg),ph:$$("#pSites .ph",svg),tgOn:$("#tgOn",svg),
    ins:$("#mIns",svg),ptp:$("#mPtp",svg),ent:$("#mEnt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var sig=$("#sig",svg),SL=sig.getTotalLength();sig.style.strokeDasharray=SL+" "+SL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tf(el,x,y,r){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(r?" rotate("+r.toFixed(1)+")":""))}
  function mix(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: insulin comes down from the upper right into the cradle (300, 150) and stays there */
    var insIn=seg(p,.04,.2);
    tf(E.ins,mix(560,300,insIn),mix(50,150,insIn),0);op(E.ins,b*seg(p,.02,.06));
    /* step 2: PTP1B drifts in from the right and docks on the tails; step 3: ENT-03 binds it and it drifts away */
    var ptIn=seg(p,.38,.5),ptOut=seg(p,.76,.88);
    tf(E.ptp,mix(640,362,ptIn)+ptOut*170,mix(300,326,ptIn)+ptOut*20,0);op(E.ptp,b*seg(p,.36,.42)*(1-.45*ptOut));
    var enIn=seg(p,.66,.78);
    tf(E.ent,mix(600,372,enIn)+ptOut*170,mix(340,282,enIn)+ptOut*20,0);op(E.ent,b*seg(p,.64,.69));
    /* receptor activity: on with insulin, off while PTP1B sits on the tails, on again once ENT-03 takes PTP1B away */
    var on=seg(p,.16,.26)*(1-seg(p,.46,.56))+seg(p,.8,.9);
    on=Math.min(1,on);
    E.ph.forEach(function(c){c.style.fillOpacity=(.06+.94*on).toFixed(3);c.style.strokeOpacity=(.35+.65*on).toFixed(3)});
    sig.style.strokeDashoffset=(SL*(1-on)).toFixed(1);op(sig,b*(on>0.01?1:0));
    op(E.tgOn,b*on);
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.8,.88));
  };
}
