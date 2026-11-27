/* The story scene (BL/BY/DB): one wire, straightened, cut and pointed, as jouhsen.de describes the process chain ("Vom Ring zum
   Fertigteil": rotierendes Richten, Abschneiden, Endenbearbeitung / Spitzenschleifen). ONE side elevation kept on screen, the same
   wire carried through all three steps (no cross-fades):
   1 Richten: the wire runs in from the coil, kinked, through the rotating straightener (flyer with staggered dies) and leaves straight.
   2 Abschneiden: the shear comes down and parts a length, which moves off a little.
   3 Spitzen: a grinding wheel comes in at the free end and grinds a round point.
   Sizes are illustrative. */
var JB={cy:300,r:6,x0:-10,f0:90,f1:250,xc:350,x1:496};
function jbScene(o){
  var g='',mob=o.mob,A=JB,cy=A.cy;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 150 520 316" aria-hidden="true"><defs>'+
     '<pattern id="jbHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(241,245,248,.2)" stroke-width="1"/></pattern>'+
     '<linearGradient id="jbSt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7f8a94"/><stop offset=".3" stop-color="#eef2f5"/><stop offset=".6" stop-color="#b6c0c8"/><stop offset="1" stop-color="#66717b"/></linearGradient></defs>';
  g+='<path class="axl" d="M0 '+cy+'H520"/>';
  /* the straightener: a rotating flyer (housing) with staggered dies inside, above and below the wire */
  g+='<g id="jbF"><rect class="blk" x="'+A.f0+'" y="'+(cy-46)+'" width="'+(A.f1-A.f0)+'" height="92"/><rect class="hat" x="'+A.f0+'" y="'+(cy-46)+'" width="'+(A.f1-A.f0)+'" height="92"/>';
  for(var i=0;i<5;i++)g+='<rect class="die" id="jbD'+i+'" x="'+(A.f0+14+i*30)+'" y="'+(cy-7)+'" width="18" height="14"/>';
  g+='</g>';
  g+='<path id="jbW" class="wr" d=""/><path id="jbP" class="tb" d=""/>';
  /* the shear blade, above the cut point */
  g+='<g id="jbK"><path class="whl" d="M-9 -8L9 -8L9 -70L-9 -70Z"/><rect class="blk" x="-24" y="-104" width="48" height="34"/></g>';
  /* the grinding wheel, end-on to the wire tip */
  g+='<g id="jbG"><circle class="grd" cx="0" cy="0" r="62"/><circle class="hub" cx="0" cy="0" r="14"/></g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("jbLw",8,cy-58,mob?"DRAHT":"DRAHT VOM RING");
  g+=T("jbLf",(A.f0+A.f1)/2,cy+70,mob?"RICHTFLÜGEL":"RICHTFLÜGEL · ROTIEREND","middle");
  g+=T("jbLk",A.xc+30,cy-86,"MESSER");
  g+=T("jbLg",A.x1-90,cy-96,mob?"SCHLEIFEN":"SCHLEIFSCHEIBE","end");
  var L=mob?["RICHTEN","ABSCHNEIDEN","SPITZE SCHLEIFEN"]:["PRECISIONCUT · ROTIERENDES RICHTEN","RICHTEN UND ABSCHNEIDEN · 2 BIS 6.000 MM","PRECISIONGRIND · BIS 850 TEILE/MIN"];
  for(var k=0;k<3;k++)g+='<text class="t cl cap" id="jbC'+k+'" x="8" y="454">'+L[k]+'</text>';
  return g+'</svg>';
}
function scene(){return jbScene({mob:MOBILE()?1:0})}
function jbE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var A=JB,cy=A.cy,Q=function(s){return svg.querySelector(s)};
  var E={w:Q("#jbW"),p:Q("#jbP"),f:Q("#jbF"),k:Q("#jbK"),g:Q("#jbG"),D:[0,1,2,3,4].map(function(i){return Q("#jbD"+i)}),
    L:{w:Q("#jbLw"),f:Q("#jbLf"),k:Q("#jbLk"),g:Q("#jbLg")},C:[0,1,2].map(function(k){return Q("#jbC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  /* kink amplitude along x: full before the flyer, fading through it, straight after */
  function amp(x){return x<A.f0?9:x>A.f1-20?0:9*(1-(x-A.f0)/(A.f1-20-A.f0))}
  function wire(xa,xb,ph){var d="",n=Math.max(2,Math.ceil((xb-xa)/6));
    for(var i=0;i<=n;i++){var x=xa+(xb-xa)*i/n,y=cy+amp(x)*Math.sin(x/17+ph)*Math.sin(x/53+1.3);d+=(i?"L":"M")+f1(x)+" "+f1(y)}return d}
  /* the parted length as a solid bar; its right end ground to a point of length tl */
  function piece(xa,xb,tl){var r=A.r;return "M"+f1(xa)+" "+f1(cy-r)+"L"+f1(xb-tl)+" "+f1(cy-r)+"L"+f1(xb)+" "+f1(cy-r*(1-Math.min(1,tl/24)*.92))+"L"+f1(xb)+" "+f1(cy+r*(1-Math.min(1,tl/24)*.92))+"L"+f1(xb-tl)+" "+f1(cy+r)+"L"+f1(xa)+" "+f1(cy+r)+"Z"}
  return function(p,bb){
    if(!svg.isConnected)return;
    /* 1: the wire feeds through the flyer; the dies orbit (shown as an up-down stagger) while it runs */
    var s1=jbE(seg(p,.03,.28)),front=A.f0-20+(A.x1-(A.f0-20))*s1,ph=-p*40,run=seg(p,.02,.06)*(1-seg(p,.3,.34));
    for(var i=0;i<5;i++)E.D[i].setAttribute("transform","translate(0 "+f1((i%2?1:-1)*(9+4*Math.sin(p*90+i))*(.4+.6*run))+")");
    op(E.f,bb);
    /* 2: the blade comes down at xc and parts the length; the piece moves off to the right */
    var kIn=jbE(seg(p,.38,.46)),kOut=jbE(seg(p,.5,.58)),part=jbE(seg(p,.47,.56)),gap=18*part,cut=p>=.47;
    E.k.setAttribute("transform","translate("+A.xc+" "+f1(cy-A.r-60+60*kIn-60*kOut)+")");op(E.k,bb*seg(p,.34,.38)*(1-seg(p,.6,.64)));
    /* 3: the wheel comes in at the free end and grinds the point */
    var gIn=jbE(seg(p,.7,.78)),tl=24*jbE(seg(p,.78,.94)),xe=A.x1+gap*0;
    if(!cut){E.w.setAttribute("d",wire(A.x0,Math.max(A.x0+1,front),ph));E.p.setAttribute("d","")}
    else{E.w.setAttribute("d",wire(A.x0,A.xc,ph));E.p.setAttribute("d",piece(A.xc+gap,xe,tl))}
    op(E.w,bb);op(E.p,bb);
    E.g.setAttribute("transform","translate("+f1(xe-14)+" "+f1(cy-A.r-62+2-110*(1-gIn))+")");op(E.g,bb*seg(p,.68,.72));
    /* labels */
    op(E.L.w,bb*(1-seg(p,.3,.34)));op(E.L.f,bb*seg(p,.08,.12)*(1-seg(p,.3,.34)));op(E.L.k,bb*seg(p,.4,.44)*(1-seg(p,.6,.64)));op(E.L.g,bb*seg(p,.76,.8));
    var W=[[0,1/3],[1/3,2/3],[2/3,1.01]];
    E.C.forEach(function(c,k){var a=W[k][0],z=W[k][1];op(c,bb*(k===0?1:seg(p,a,a+.03))*(k===2?1:(1-seg(p,z-.03,z))))});
  };
}
