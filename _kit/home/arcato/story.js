/* The story scene (BL/BY/DB): ARC-001 Gel as ONE continuous engraved scene, from arcato-labs.com (ARC-001) and the release of
   19 Aug 2026. A cross-section of the lower jaw at the back of the mouth: gum and alveolar bone (trabecular hatching), the first
   and second molars, the third molar (wisdom tooth) in its socket and the rising ramus.
   Step 1: the third molar lifts out of the bone, leaving the open socket.  Step 2: ARC-001 Gel fills the socket from the base
   up, placed once, no needle.  Step 3: the three anesthetics diffuse out of the gel as rings at different rates while a day
   ruler fills toward day 7 (the target of 5-7 days of relief from a single dose). Every element follows the scrubbed progress. */
var SCW=760,SCH=520,SY=236,TK=1.18,SX=438,SCY=SY+70;
var MOLAR="M-46 -40C-48 -62 -36 -74 -24 -70C-14 -78 -6 -66 0 -72C6 -66 14 -78 24 -70C36 -74 48 -62 46 -40C44 -20 40 -6 36 4C34 40 30 80 22 108C18 116 8 114 8 104C8 80 6 50 0 36C-6 50 -8 80 -8 104C-8 114 -18 116 -22 108C-30 80 -34 40 -36 4C-40 -6 -44 -20 -46 -40Z";
var SOCK="M-39 2C-37 40 -32 80 -24 110C-20 122 -6 122 -4 108C-3 84 -2 60 0 44C2 60 3 84 4 108C6 122 20 122 24 110C32 80 37 40 39 2C30 -4 -30 -4 -39 2Z";
function tooth(x,cls,id){return '<g'+(id?' id="'+id+'"':'')+' class="'+cls+'" transform="translate('+x+' '+(SY+4)+') scale('+TK+')"><path class="tth" d="'+MOLAR+'"/><path class="pulp" d="M-20 -30C-12 -36 12 -36 20 -30C16 -10 12 0 10 20M-20 -30C-16 -10 -12 0 -10 20"/></g>'}
function jawScene(o){
  var g='',i;
  var sd=7;function rnd(){sd=(sd*16807)%2147483647;return sd/2147483647}
  var BONE='M0 '+(SY+8)+'H560C600 '+(SY-10)+' 640 '+(SY-90)+' 700 '+(SY-170)+'H760V470H0Z';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
     '<clipPath id="gelClip"><rect id="gelRect" x="-60" y="130" width="120" height="0"/></clipPath>'+
     '<clipPath id="boneClip"><path d="'+BONE+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  g+='<path class="bn" d="'+BONE+'"/>';
  g+='<g clip-path="url(#boneClip)">';
  for(i=0;i<120;i++){var x=rnd()*760,y=SY+20+rnd()*240,rx=6+rnd()*12,ry=3+rnd()*7;g+='<ellipse class="trb" cx="'+x.toFixed(0)+'" cy="'+y.toFixed(0)+'" rx="'+rx.toFixed(1)+'" ry="'+ry.toFixed(1)+'" transform="rotate('+(rnd()*60-30).toFixed(0)+' '+x.toFixed(0)+' '+y.toFixed(0)+')"/>'}
  g+='</g>';
  g+='<path class="gm" d="M0 '+(SY-14)+'C40 '+(SY-20)+' 70 '+(SY-6)+' 110 '+(SY-10)+'S180 '+(SY-20)+' 260 '+(SY-12)+'S360 '+(SY-22)+' 438 '+(SY-14)+'S540 '+(SY-24)+' 580 '+(SY-34)+'C620 '+(SY-60)+' 660 '+(SY-120)+' 700 '+(SY-190)+'"/>';
  g+='<path class="cn" d="M0 470H760"/>';
  g+='<text class="t" x="748" y="456" text-anchor="end">ALVEOLAR BONE</text>';
  g+=tooth(108,"nb")+tooth(268,"nb");
  g+='</g>';
  g+='<g transform="translate('+SX+' '+(SY+4)+') scale('+TK+')"><path id="sock" class="sk" d="'+SOCK+'"/><path id="gel" class="gel" clip-path="url(#gelClip)" d="'+SOCK+'"/>'+
     '<g id="gelDots" clip-path="url(#gelClip)">';
  for(i=0;i<26;i++){var gx=rnd()*56-28,gy=10+rnd()*96;if(Math.abs(gx)>34-gy*.12)continue;g+='<circle class="gd" cx="'+gx.toFixed(1)+'" cy="'+gy.toFixed(1)+'" r="'+(1+rnd()*1.6).toFixed(1)+'"/>'}
  g+='</g></g>';
  g+='<g id="scRings">';[0,1,2].forEach(function(k){for(var j=0;j<2;j++)g+='<circle class="rg r'+k+'" data-k="'+k+'" data-j="'+j+'" cx="'+SX+'" cy="'+SCY+'" r="10"/>'});g+='</g>';
  g+=tooth(SX,"m3","m3");
  g+='<g id="scDay"><path class="dax" d="M200 500H700"/><path id="dfill" class="dfl" d="M200 500H700"/>';
  for(i=1;i<=7;i++){var dx=200+(i-1)*500/6;g+='<path class="dtk" d="M'+dx+' 494V506"/><text class="t dn" x="'+dx+'" y="486" text-anchor="middle">'+i+'</text>'}
  g+='<text class="t" x="186" y="505" text-anchor="end">DAY</text></g>';
  var ly=o.mob?26:22;
  g+='<g id="lb1"><text class="a" x="24" y="'+ly+'">THIRD MOLAR · EXTRACTED</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+ly+'">ARC-001 GEL · INTO THE SOCKET</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+ly+'">BENZOCAINE · LIDOCAINE · BUPIVACAINE</text></g>';
  return g+'</svg>';
}
function scene(){return jawScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={base:$("#scBase",svg),m3:$("#m3",svg),sock:$("#sock",svg),gel:$("#gel",svg),gr:$("#gelRect",svg),dots:$("#gelDots",svg),
    rg:$$("#scRings .rg",svg).map(function(el){return {el:el,k:+el.getAttribute("data-k"),j:+el.getAttribute("data-j")}}),
    day:$("#scDay",svg),df:$("#dfill",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var DL=E.df.getTotalLength();E.df.style.strokeDasharray=DL+" "+DL;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  var RATE=[1.7,1.15,.7],RMAX=[150,215,290];
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.base,b*cl(.35+seg(p,0,.08)*.65));
    var lift=seg(p,.1,.32),fill=seg(p,.4,.62),rel=seg(p,.68,.98);
    var my=SY+4-lift*190,mo=1-seg(p,.24,.36);
    E.m3.setAttribute("transform","translate("+SX+" "+my.toFixed(1)+") scale("+TK+") rotate("+(-6*lift).toFixed(2)+")");op(E.m3,b*mo);
    op(E.sock,b*cl(seg(p,.14,.26)));
    E.gr.setAttribute("y",(128-150*fill).toFixed(1));E.gr.setAttribute("height",(150*fill+2).toFixed(1));
    op(E.gel,b);op(E.dots,b);
    E.rg.forEach(function(R){var ph=cl(rel*RATE[R.k]*1.25-R.j*.28),r=12+ph*RMAX[R.k];
      R.el.setAttribute("r",r.toFixed(1));op(R.el,b*(ph>0?Math.min(1,ph*5)*(1-ph*.8):0))});
    op(E.day,b*cl(.3+.7*seg(p,.64,.72)));E.df.style.strokeDashoffset=(DL*(1-rel)).toFixed(1);
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.74,.82));
  };
}
