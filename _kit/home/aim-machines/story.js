/* The story scene (BL/BY/DB): one wireform made on an AccuForm machine, as aimmachines.com describes it ("AccuForm machines
   straighten, feed, bend and cut wire in one cell"). ONE plan view kept on screen, the same wire carried through all four steps
   (no cross-fades); the part is simulated from its bend program, so the bends are real:
   1 Straighten: wire from the coil runs through the two-plane straightener and comes out straight.
   2 Feed: the feed rollers push it through the bending head.
   3 Bend: the bend pin swings round the die; feed, bend, feed, bend: a U-shaped wireform.
   4 Cut: the cutter shears it off and the finished part drops clear.
   The part shape is illustrative. */
var AM={cy:330,xd:372,sx0:20,sx1:240};
function amScene(o){
  var g='',mob=o.mob,A=AM,cy=A.cy,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 150 500 316" aria-hidden="true"><defs>'+
     '<pattern id="amHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(244,244,246,.2)" stroke-width="1"/></pattern>'+
     '</defs>';
  /* the wire: the wavy run from the coil, then straight through the machine */
  g+='<path id="amWv" class="wi" d=""/><path id="amWs" class="wi" d=""/>';
  /* the straightener: two staggered rows of rollers */
  g+='<g id="amSt" class="st">';for(i=0;i<5;i++){var x=120+i*26,y=cy+(i%2?13:-13);g+='<circle class="blk" cx="'+x+'" cy="'+y+'" r="10"/><circle class="hub" cx="'+x+'" cy="'+y+'" r="2.5"/>'}g+='</g>';
  /* feed rollers */
  g+='<g id="amFr"><circle class="blk" cx="290" cy="'+(cy-26)+'" r="22"/><circle class="blk" cx="290" cy="'+(cy+26)+'" r="22"/><circle class="hub" cx="290" cy="'+(cy-26)+'" r="4"/><circle class="hub" cx="290" cy="'+(cy+26)+'" r="4"/><path id="amFa" class="spin" d=""/></g>';
  /* the bending head: die block, its exit at xd; the bend pin orbits the die exit */
  g+='<g id="amBh"><rect class="blk" x="'+(A.xd-46)+'" y="'+(cy-30)+'" width="46" height="60"/><rect class="hat" x="'+(A.xd-46)+'" y="'+(cy-30)+'" width="46" height="60"/>'+
     '<circle class="dc" cx="'+A.xd+'" cy="'+cy+'" r="7"/></g>';
  g+='<circle id="amPin" class="pin" r="7" cx="'+(A.xd+20)+'" cy="'+(cy+14)+'"/>';
  /* the cutter, above the die exit */
  g+='<g id="amCt" class="ct"><path class="blk" d="M'+(A.xd-6)+' -150V-14L'+(A.xd+4)+' -2V-150Z"/></g>';
  /* the formed part beyond the die, and the finished part after the cut */
  g+='<path id="amPt" class="wi pt" d=""/>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("amLc",20,cy+48,mob?"COIL":"FROM THE COIL");
  g+=T("amLs",172,cy-36,"STRAIGHTENER","middle");
  g+=T("amLf",290,cy+74,"FEED","middle");
  g+=T("amLb",A.xd-23,cy+56,"BEND HEAD","middle");
  g+=T("amLx",A.xd+14,cy-150,"CUTTER");
  var C=mob?["STRAIGHTEN","FEED","BEND","CUT"]:["TWO-PLANE STRAIGHTENER · OFF THE COIL","FEED ROLLERS · THROUGH THE HEAD","BEND PIN · FEED, BEND, FEED, BEND","SERVO CUTTER · ONE PART, ONE CELL"];
  for(i=0;i<4;i++)g+='<text class="t cl cap" id="amC'+i+'" x="8" y="458">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return amScene({mob:MOBILE()?1:0})}
function amE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var A=AM,cy=A.cy,Q=function(s){return svg.querySelector(s)};
  var E={wv:Q("#amWv"),ws:Q("#amWs"),st:Q("#amSt"),fa:Q("#amFa"),pin:Q("#amPin"),ct:Q("#amCt"),pt:Q("#amPt"),
    L:{c:Q("#amLc"),s:Q("#amLs"),f:Q("#amLf"),b:Q("#amLb"),x:Q("#amLx")},C:[0,1,2,3].map(function(k){return Q("#amC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  /* walk the formed part from the die exit outward: segs[0] is the newest (at the die); each bend turns the older part */
  function partPath(segs,ox,oy){var x=ox,y=oy,phi=0,d="M"+f1(x)+" "+f1(y);
    for(var i=0;i<segs.length;i++){var s=segs[i];if(i>0)phi+=s.a;x+=Math.cos(phi)*s.l;y-=Math.sin(phi)*s.l;d+="L"+f1(x)+" "+f1(y)}
    return d}
  return function(p,bb){
    if(!svg.isConnected)return;
    /* 1 straighten: the wire's front runs in from the coil to the feed rollers */
    var s1=amE(seg(p,.03,.22)),front=A.sx0+(270-A.sx0)*s1;
    var wv="M"+A.sx0+" "+cy,k;for(k=A.sx0;k<=Math.min(front,108);k+=3)wv+="L"+k+" "+f1(cy+Math.sin(k*.11)*7*(1-(k-A.sx0)/120));
    E.wv.setAttribute("d",front>A.sx0+2?wv:"");
    E.ws.setAttribute("d",front>108?"M108 "+cy+"H"+f1(Math.min(front,A.xd)):"");
    /* 2 feed: the wire runs out of the die; 3 bend: feed 60, bend 90, feed 130, bend 90, feed 60 */
    var f0=amE(seg(p,.27,.42)),b1=amE(seg(p,.52,.58)),f1_=amE(seg(p,.59,.65)),b2=amE(seg(p,.66,.71)),f2=amE(seg(p,.71,.75));
    var feedIn=front>=270?1:0,out=feedIn?1:0;
    E.ws.setAttribute("d",front>108?"M108 "+cy+"H"+f1(feedIn?A.xd:Math.min(front,A.xd)):"");
    var segs=[{l:60*f0,a:0}],pinA=0;
    if(b1>0){segs=[{l:0,a:0},{l:60,a:Math.PI/2*b1}];pinA=b1}
    if(f1_>0){segs[0].l=130*f1_;pinA=b1*(1-f1_)}
    if(b2>0){segs=[{l:0,a:0},{l:130,a:Math.PI/2*b2},{l:60,a:Math.PI/2}];pinA=b2}
    if(f2>0){segs[0].l=60*f2;pinA=b2*(1-f2)}
    /* 4 cut: the cutter comes down at the die exit and the part drops clear, settling below */
    var cIn=amE(seg(p,.79,.85)),drop=amE(seg(p,.86,.97)),cy0=cy;
    var ox=A.xd+drop*40,oy=cy0+drop*120;
    E.pt.setAttribute("d",out&&(f0>0)?partPath(segs,ox,oy):"");op(E.pt,bb);
    var ang=Math.PI*.25+pinA*Math.PI/2;E.pin.setAttribute("cx",f1(A.xd+20*Math.cos(-ang+Math.PI/2)));E.pin.setAttribute("cy",f1(cy+20*Math.sin(-ang+Math.PI/2)));
    op(E.pin,bb*seg(p,.46,.5));
    E.ct.setAttribute("transform","translate(0 "+f1(cy-30-56+(56-4)*cIn*(1-seg(p,.88,.94)))+")");op(E.ct,bb*seg(p,.76,.8));
    var ra=(s1*2+f0*2+f1_+f2)*360;E.fa.setAttribute("d","M"+f1(290+15*Math.cos(ra*Math.PI/180))+" "+f1(cy-26+15*Math.sin(ra*Math.PI/180))+"L290 "+(cy-26));
    /* labels */
    op(E.L.c,bb*(1-seg(p,.2,.24)));op(E.L.s,bb*(1-seg(p,.22,.26)));op(E.L.f,bb*seg(p,.26,.3)*(1-seg(p,.46,.5)));op(E.L.b,bb*seg(p,.48,.52)*(1-seg(p,.74,.77)));op(E.L.x,bb*seg(p,.78,.82));
    var W=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.C.forEach(function(c,k){var a=W[k][0],z=W[k][1];op(c,bb*(k===0?1:seg(p,a,a+.03))*(k===3?1:(1-seg(p,z-.03,z))))});
  };
}
