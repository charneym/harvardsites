/* The story scene (BL/BY/DB): CEATEC's "Werdegang eines Instruments" (ceatec.de > Wissenswertes), the making of an arterial
   clamp in 16 steps, told in four, drawn as ONE fine-line plan view of the clamp kept on screen for all four steps.
   Step 1 (Rohling): flat steel bars are split, the instrument is punched out: the stock bar and the dashed blank of one half.
   Step 2 (Fräsen): ratchet, box joint and jaw are milled, the two halves joined, the joint pre-drilled for pin or screw.
   Step 3 (Handarbeit): straightening, filing, grinding by hand: a file travels along the jaw.
   Step 4 (Veredeln): hardening, polishing, matting, electropolishing, washing, oiling: a sheen runs along the finished clamp. */
var SCW=760,SCH=520;
function bar(x1,y1,x2,y2,w1,w2){var dx=x2-x1,dy=y2-y1,L=Math.sqrt(dx*dx+dy*dy),nx=-dy/L,ny=dx/L;
  function P(x,y){return x.toFixed(1)+" "+y.toFixed(1)}
  return "M"+P(x1+nx*w1/2,y1+ny*w1/2)+"L"+P(x2+nx*w2/2,y2+ny*w2/2)+"L"+P(x2-nx*w2/2,y2-ny*w2/2)+"L"+P(x1-nx*w1/2,y1-ny*w1/2)+"Z"}
function ring(cx,cy,r){return "M"+(cx+r)+" "+cy+"A"+r+" "+r+" 0 1 1 "+(cx-r)+" "+cy+"A"+r+" "+r+" 0 1 1 "+(cx+r)+" "+cy+"Z"}
function ceScene(o){
  var g='',mob=o.mob,i;
  var Y=mob?18:0;   /* phones: the clamp sits a little lower, under the larger labels */
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g transform="translate(0 '+Y+')">';
  /* the work bench line (always) */
  g+='<path class="base sD" d="M20 452H740"/>';
  /* step 1: the flat steel bar, split; the blank of one half punched out (dashed) */
  g+='<g id="ceBar"><path class="stk kD" d="M92 118H720V140H92Z"/><path class="stk kD" d="M92 129H720"/></g>';
  /* the clamp: box joint at P, jaws to the right, shanks to the ring handles (top and bottom left) */
  var PX=430,PY=300,RA=[178,398],RB=[178,202],RR=38,RI=27;
  function sh(rc,sgn){var dx=rc[0]-PX,dy=rc[1]-PY,L=Math.sqrt(dx*dx+dy*dy),ux=dx/L,uy=dy/L,ex=rc[0]-ux*(RR-3),ey=rc[1]-uy*(RR-3);
    return {d:bar(PX-16,PY+sgn*6,ex,ey,11,9),ux:ux,uy:uy,ex:ex,ey:ey}}
  var sA=sh(RA,1),sB=sh(RB,-1);
  var A=[bar(450,294,708,297.6,12,3),sA.d,ring(RA[0],RA[1],RR),ring(RA[0],RA[1],RI)];
  var B=[bar(450,306,708,302.4,12,3),sB.d,ring(RB[0],RB[1],RR),ring(RB[0],RB[1],RI)];
  g+='<path id="ceBlank" class="blank" d="'+A.join("")+'"/>';
  /* step 2: both halves milled and joined: halves, box joint with its pin, ratchets, serrated jaws */
  g+='<g id="ceA">'+A.map(function(d){return '<path class="ins iD" d="'+d+'"/>'}).join("")+'</g>';
  g+='<g id="ceB">'+B.map(function(d){return '<path class="ins iD" d="'+d+'"/>'}).join("")+'</g>';
  g+='<g id="ceJoint"><path class="ins iD" d="M408 283H452V317H408Z"/><path class="pin" d="'+ring(430,300,6.5)+'"/></g>';
  /* ratchet teeth on the inner edge of each shank, near the rings, pointing to each other */
  function rat(s,sgn){var r='',nx=-s.uy*sgn,ny=s.ux*sgn;if(ny*sgn>0){nx=-nx;ny=-ny}
    for(var k=0;k<6;k++){var t=48+k*9,bx=s.ex-s.ux*t,by=s.ey-s.uy*t;bx+=(-s.uy)*(sgn>0?1:-1)*5.5;by+=(s.ux)*(sgn>0?1:-1)*5.5;
      var tx=bx-s.ux*4+(-s.uy)*(sgn>0?1:-1)*7,ty=by-s.uy*4+(s.ux)*(sgn>0?1:-1)*7;
      r+='M'+bx.toFixed(1)+' '+by.toFixed(1)+'L'+tx.toFixed(1)+' '+ty.toFixed(1)+'L'+(bx-s.ux*9).toFixed(1)+' '+(by-s.uy*9).toFixed(1)}return r}
  g+='<path id="ceRat" class="rat" d="'+rat(sA,1)+rat(sB,-1)+'"/>';
  var sr='';for(i=0;i<16;i++){var sx=560+i*8.5;sr+='M'+sx+' '+(294.8+i*.16)+'V'+(299.6+i*.06)+'M'+sx+' '+(300.4-i*.06)+'V'+(305.2-i*.16)}
  g+='<path id="ceSer" class="ser" d="'+sr+'"/>';
  /* step 3: the file along the jaw */
  g+='<g id="ceFile"><path class="file" d="M-70 -9H70V-1H-70Z"/><path class="file" d="M70 -7H112V-3H70Z"/>';
  var fh='';for(i=0;i<16;i++){fh+='M'+(-64+i*8.4)+' -9l4 8'}g+='<path class="fh" d="'+fh+'"/></g>';
  /* step 4: the sheen running along the finished instrument (clipped to its two halves) */
  g+='<clipPath id="ceClip"><path d="'+A.slice(0,2).join("")+B.slice(0,2).join("")+'M410 284H450V316H410Z"/></clipPath>';
  g+='<g clip-path="url(#ceClip)"><rect id="ceSheen" class="sheen" x="-60" y="150" width="60" height="300"/></g>';
  g+='<path id="ceGlow" class="glow" d="'+A.join("")+B.join("")+'"/>';
  g+='</g>';
  /* labels, per step, in the band above the scene: each >= 8px clear of every stroke (DR3) */
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="20" y="'+(mob?40:36)+'">'+a+'</text><text class="t" x="20" y="'+(mob?72:60)+'">'+b+'</text></g>'}
  g+=mob?L("ceL1","s1","GESPALTEN, AUSGESTOCHEN","DER ROHLING"):L("ceL1","s1","FLACHE STAHLSTANGEN, GESPALTEN UND ABGEGRATET","DAS INSTRUMENT WIRD AUSGESTOCHEN: DER ROHLING");
  g+=mob?L("ceL2","s2","SPERRE, SCHLUSS, MAUL","GEFRÄST UND GEFÜGT"):L("ceL2","s2","SPERRE, SCHLUSS UND MAUL GEFRÄST","BEIDE TEILE GEFÜGT, SCHLUSS VORGEBOHRT");
  g+=mob?L("ceL3","s1","RICHTEN · FEILEN","SCHLEIFEN"):L("ceL3","s1","RICHTEN · FEILEN · SCHLEIFEN","VON HAND, BEI FAMILIENBETRIEBEN RUND UM TUTTLINGEN");
  g+=mob?L("ceL4","s2","HÄRTEN · POLIEREN","ELEKTROPOLIEREN"):L("ceL4","s2","HÄRTEN · POLIEREN · MATTIEREN · ELEKTROPOLIEREN","AUSWASCHEN UND ÖLEN: DAS FERTIGE INSTRUMENT");
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · ROHLING</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · FRÄSEN UND FÜGEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · HANDARBEIT</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="500">4 · VEREDELN</text></g>';
  return g+'</svg>';
}
function scene(){return ceScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),stk:dl(".kD"),bar:$("#ceBar",svg),blank:$("#ceBlank",svg),A:dl("#ceA .iD"),B:dl("#ceB .iD"),J:dl("#ceJoint .iD"),pin:$("#ceJoint .pin",svg),
    rat:$("#ceRat",svg),ser:$("#ceSer",svg),file:$("#ceFile",svg),sheen:$("#ceSheen",svg),glow:$("#ceGlow",svg),
    L1:$("#ceL1",svg),L2:$("#ceL2",svg),L3:$("#ceL3",svg),L4:$("#ceL4",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the bar draws in, the blank appears dashed; the bar fades once the halves exist */
    draw(E.stk,b*seg(p,.02,.12));op(E.bar,1-seg(p,.32,.42));
    op(E.blank,b*seg(p,.08,.16)*(1-seg(p,.3,.4)));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: half A draws over its blank, half B, the joint, ratchets and serrations */
    draw(E.A,b*seg(p,.27,.37));draw(E.B,b*seg(p,.31,.41));draw(E.J,b*seg(p,.38,.44));
    op(E.pin,b*seg(p,.42,.46));op(E.rat,b*seg(p,.42,.47));op(E.ser,b*seg(p,.44,.49));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the file passes along the upper jaw, twice */
    var fp=seg(p,.52,.74),fx=560+60*Math.sin(fp*Math.PI*2),fy=282;
    if(E.file)E.file.setAttribute("transform","translate("+fx.toFixed(1)+" "+fy+") rotate(0.8)");
    op(E.file,b*seg(p,.52,.56)*(1-seg(p,.72,.76)));
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* step 4: the instrument brightens and a sheen runs along it */
    op(E.glow,b*seg(p,.77,.86));
    var sp=seg(p,.8,.97);if(E.sheen)E.sheen.setAttribute("x",(120+620*sp-30).toFixed(1));
    op(E.sheen,b*seg(p,.8,.83)*(1-seg(p,.95,.98)));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
