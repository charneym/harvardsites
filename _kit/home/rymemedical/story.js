/* The story scene (DB/BL): Ryme's own mechanism (HRA research summary, REC 24/SC/0123: nerves in the lungs "may contribute to
   airway narrowing and mucus production"; TLD "is a non-surgical procedure designed to target these overactive nerves"; a
   balloon catheter is placed in the airway, the console "delivers cold gas (nitrous oxide) to the balloon, to freeze the
   nerves", the balloon is held a few minutes, thaws and deflates). Drawn as ONE continuous fine-line scene that fills the frame:
   a main bronchus as a fine-line cylinder (cartilage rings, the open end showing the lumen), with nerve trunks running along
   and over the outside of the wall. Frame 0 is already complete.
   Step 1 (nerves): signals (logo green) run along the nerves.
   Step 2 (balloon): the catheter slides in along the lumen and the balloon (logo light blue) inflates against the wall.
   Step 3 (freeze): a cold zone spreads through the wall around the balloon; inside it the nerves turn ice blue and the
   signals stop at its edge.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560,ZX0=330,ZX1=530,BX=430,TY0=140,TY1=420;
function nerveD(y,a,ph,x0,x1){x0=x0||60;x1=x1||720;var d="M"+x0+" "+y,x;for(x=x0;x<x1;x+=40){var y1=y+a*Math.sin((x+20)/40*1.7+ph),y2=y+a*Math.sin((x+40)/40*1.7+ph);d+="Q"+(x+20)+" "+y1.toFixed(1)+" "+(x+40)+" "+y2.toFixed(1)}return d}
/* nerve trunks: two above and two below the airway, and two running over its front surface */
var NERV=[nerveD(126,4,0),nerveD(113,3,2.1),nerveD(434,4,1),nerveD(447,3,3.2),nerveD(214,5,.6,150,690),nerveD(348,5,2.6,150,690)];
var TWIG=["M190 127C196 132 198 136 200 140","M282 114C292 124 296 132 298 140","M612 127C618 132 620 136 622 140","M232 433C238 428 240 424 242 420","M652 446C658 436 660 428 662 420","M170 214C160 190 156 166 152 146","M690 348C694 380 698 404 700 416"];
var RINGS=[];(function(){for(var x=150;x<=670;x+=32)RINGS.push(x)})();
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 44 690 516':'30 50 710 510')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="gcold" x1="0" x2="1"><stop offset="0" stop-color="#7ad0f4" stop-opacity="0"/><stop offset=".3" stop-color="#7ad0f4" stop-opacity=".2"/><stop offset=".7" stop-color="#7ad0f4" stop-opacity=".2"/><stop offset="1" stop-color="#7ad0f4" stop-opacity="0"/></linearGradient>'+
     '<radialGradient id="glum" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#051426" stop-opacity=".9"/><stop offset="1" stop-color="#051426" stop-opacity=".2"/></radialGradient>'+
     '<clipPath id="czone"><rect x="'+ZX0+'" y="96" width="'+(ZX1-ZX0)+'" height="368"/></clipPath></defs>';
  /* the cold zone, behind the drawing */
  g+='<rect id="scCold" x="'+(ZX0-36)+'" y="100" width="'+(ZX1-ZX0+72)+'" height="360" fill="url(#gcold)"/>';
  g+='<g id="scBase">';
  /* the airway as a cylinder: silhouettes, the open end on the left (looking into the lumen), the rings of cartilage */
  g+='<ellipse class="lum" cx="110" cy="280" rx="44" ry="140" fill="url(#glum)"/>';
  g+='<path class="wl sD" d="M110 '+TY0+'H700"/><path class="wl sD" d="M110 '+TY1+'H700"/>';
  g+='<path class="wl sD" d="M110 '+TY0+'A44 140 0 0 1 110 '+TY1+'"/><path class="wl sD" d="M110 '+TY0+'A44 140 0 0 0 110 '+TY1+'"/>';
  g+='<path class="wo sD" d="M110 '+(TY0+14)+'A34 126 0 0 0 110 '+(TY1-14)+'"/>';
  g+='<path class="wmd sD" d="M700 '+TY0+'A44 140 0 0 1 700 '+TY1+'"/>';
  RINGS.forEach(function(x,k){g+='<path class="'+(k%2?'en':'wo')+' sD" d="M'+x+' '+TY0+'A44 140 0 0 0 '+x+' '+TY1+'"/>'});
  NERV.forEach(function(d,i){g+='<path class="'+(i<4?(i%2?'wo':'wmd'):'nf')+' sD nv" d="'+d+'"/>'});
  TWIG.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='</g>';
  /* the nerves inside the cold zone, re-drawn in ice blue */
  g+='<g id="scIce" clip-path="url(#czone)">';NERV.forEach(function(d){g+='<path class="ic" d="'+d+'"/>'});g+='</g>';
  /* nerve signals */
  g+='<g id="scSig">';for(i=0;i<18;i++)g+='<circle class="sg" r="3.2" cx="0" cy="0"/>';g+='</g>';
  /* catheter and balloon */
  g+='<path id="scCath" class="ct" d="M40 280H'+BX+'"/>';
  g+='<ellipse id="scBal" class="bl" cx="'+BX+'" cy="280" rx="12" ry="6"/>';
  /* frost marks on the wall */
  g+='<g id="scFrost">';[[356,160],[408,160],[460,160],[510,160],[382,400],[434,400],[486,400],[350,280],[512,280]].forEach(function(p){var x=p[0],y=p[1];g+='<path class="fr" d="M'+(x-6)+' '+y+'h12M'+x+' '+(y-6)+'v12M'+(x-4)+' '+(y-4)+'l8 8M'+(x+4)+' '+(y-4)+'l-8 8"/>'});g+='</g>';
  /* labels, each with a leader that stops short of its text (DR) */
  var WX=mob?160:150;
  g+='<g id="lWall"><path class="ld" d="M'+WX+' 150L'+WX+' 96"/><text class="t" x="'+WX+'" y="84" text-anchor="middle">AIRWAY WALL</text></g>';
  g+='<g id="lNerve"><path class="ld" d="M660 108L660 96"/><text class="t" x="660" y="84" text-anchor="middle">NERVES</text></g>';
  g+='<g id="lFrz"><path class="ld" d="M'+BX+' 108L'+BX+' 96"/><text class="t" x="'+BX+'" y="84" text-anchor="middle">FROZEN ZONE</text></g>';
  g+='<g id="lCath"><path class="ld" d="M'+BX+' 412L'+BX+' '+(mob?472:482)+'"/><text class="t" x="'+BX+'" y="'+(mob?494:500)+'" text-anchor="middle">BALLOON CATHETER</text></g>';
  var ly=mob?556:SCH-8,lx=mob?56:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NERVES SIGNAL ALONG THE AIRWAY':'NERVES ALONG THE AIRWAY KEEP SIGNALLING')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE BALLOON MEETS THE WALL':'THE BALLOON INFLATES AGAINST THE AIRWAY WALL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'COLD GAS FREEZES THE NERVES':'COLD GAS IN THE BALLOON FREEZES THE NERVES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var nv=$$("#scBase .nv",svg).map(function(p){return [p,p.getTotalLength()]});
  var cath=$("#scCath",svg),cL=cath.getTotalLength();cath.style.strokeDasharray=cL+" "+cL;
  var E={base:dl("#scBase .sD"),sig:$$("#scSig .sg",svg),ice:$("#scIce",svg),cold:$("#scCold",svg),bal:$("#scBal",svg),frost:$("#scFrost",svg),
    lWall:$("#lWall",svg),lNerve:$("#lNerve",svg),lFrz:$("#lFrz",svg),lCath:$("#lCath",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s3=seg(p,.68,.94);
    /* 1. signals run along the nerves (four per trunk); once the zone is frozen they stop at its edge */
    E.sig.forEach(function(el,i){var k=i%6,j=(i/6)|0,P=nv[k],f=((p*2.4+j*.333+k*.11)%1),pt=P[0].getPointAtLength(f*P[1]);
      var cut=pt.x>ZX0-8;
      el.setAttribute("cx",pt.x.toFixed(1));el.setAttribute("cy",pt.y.toFixed(1));
      op(el,b*seg(p,.04,.12)*(1-s3*(cut?1:0)))});
    op(E.lWall,b*seg(p,.06,.14));op(E.lNerve,b*seg(p,.1,.18));
    /* 2. the catheter slides in, the balloon inflates to meet the wall */
    cath.style.strokeDashoffset=(cL*(1-sm(seg(p,.36,.5)))).toFixed(1);op(cath,b*seg(p,.35,.37));
    var inf=sm(seg(p,.48,.62));E.bal.setAttribute("rx",(12+74*inf).toFixed(1));E.bal.setAttribute("ry",(6+122*inf).toFixed(1));
    op(E.bal,b*seg(p,.46,.5));op(E.lCath,b*seg(p,.5,.58));
    /* 3. cold spreads through the wall; the nerves inside the zone turn ice blue */
    op(E.cold,b*s3);op(E.ice,b*seg(p,.72,.86));op(E.frost,b*seg(p,.78,.9));op(E.lFrz,b*seg(p,.8,.88));
    E.bal.style.fill="rgba(122,208,244,"+(.06+.22*s3).toFixed(3)+")";
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
