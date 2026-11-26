/* The story scene (BL/BY/DB): one bronze bush at the North Acton works, drawn as a half-section on its axis, as
   dynmetal.co.uk > Foundry & Machine Shop and About Us describe the route ("centrifugally cast", "a special process
   conducted in-house, which gives our bronzes a finer grain structure", "finish machining ... CNC", "Wenzel XO87 ...
   Aberlink CMM ... for measuring of all critical dimensions and tolerances"). ONE scene kept on screen:
   Step 1 (Cast): bronze is poured into a spinning mould and builds up from the mould wall inward.
   Step 2 (Process): the coarse cast grain gives way to a finer grain.
   Step 3 (Machine): a turning tool and a boring bar travel the length and take the skin off, outside and in the bore.
   Step 4 (Measure): a CMM stylus touches the bore; outer and bore diameters are checked. Sizes are illustrative. */
var SCW=760,SCH=520;
var DY={ax:260,x0:180,x1:580,fx0:196,fx1:564,ro:108,ri:194,fo:124,fi:176};
function dyHash(a,b){var h=Math.sin(a*127.1+b*311.7)*43758.5453;return h-Math.floor(h)}
function dyGrain(r,jit){
  /* a jittered hex grid whose shared vertices coincide: reads as metal grains in section */
  var d="",w=Math.sqrt(3)*r,row,col,k;
  for(row=-1;row*r*1.5<SCH;row++){for(col=-1;col*w<SCW+w;col++){
    var cx=col*w+(row&1?w/2:0)+120,cy=row*r*1.5+96;
    if(cy<90||cy>430||cx<160||cx>600)continue;
    for(k=0;k<=6;k++){var a=Math.PI/180*(60*k+30),vx=cx+r*Math.cos(a),vy=cy+r*Math.sin(a),kx=Math.round(vx*4),ky=Math.round(vy*4);
      vx+=(dyHash(kx,ky)-.5)*jit*r;vy+=(dyHash(ky,kx)-.5)*jit*r;d+=(k?"L":"M")+vx.toFixed(1)+" "+vy.toFixed(1)}}}
  return d;
}
function dyScene(o){
  var g='',mob=o.mob,D=DY,i,b=2*D.ax;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"92 52 648 452":"0 0 "+SCW+" "+SCH)+'" aria-hidden="true">';
  g+='<defs><clipPath id="dyWc"><rect x="'+D.x0+'" y="'+D.ro+'" width="'+(D.x1-D.x0)+'" height="'+(D.ri-D.ro)+'"/><rect x="'+D.x0+'" y="'+(b-D.ri)+'" width="'+(D.x1-D.x0)+'" height="'+(D.ri-D.ro)+'"/></clipPath>'+
     '<linearGradient id="dyBz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a88a4c"/><stop offset=".5" stop-color="#8a6e38"/><stop offset="1" stop-color="#a88a4c"/></linearGradient>'+
     '<pattern id="dyHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="#6d6a61" stroke-width="1"/></pattern></defs>';
  /* axis */
  g+='<path class="axl" d="M160 '+D.ax+'H650"/>';
  /* the spinning mould (steel, hatched), its spin arrow and the ladle */
  g+='<g id="dyMo" class="mould"><rect x="170" y="90" width="420" height="18"/><rect x="170" y="'+(b-108)+'" width="420" height="18"/></g>';
  g+='<g id="dySp" class="spin"><path d="M132 210A12 50 0 0 0 132 310"/><path d="M127 300L132 311L138 301"/></g>';
  g+='<g id="dyLa" class="ladle"><path d="M628 150L700 150L692 196L636 196Z"/><path class="lip" d="M636 196L622 204"/></g><path id="dyPo" class="pour" d="M622 204C604 214 594 232 586 252"/>';
  /* the bronze walls (rough casting): fill grows from the mould wall inward */
  g+='<rect id="dyFt" class="bz" x="'+D.x0+'" y="'+D.ro+'" width="'+(D.x1-D.x0)+'" height="0"/><rect id="dyFb" class="bz" x="'+D.x0+'" y="'+(b-D.ro)+'" width="'+(D.x1-D.x0)+'" height="0"/>';
  g+='<g id="dyMl" class="molten"><rect id="dyMt" x="'+D.x0+'" y="'+D.ro+'" width="'+(D.x1-D.x0)+'" height="0"/><rect id="dyMb" x="'+D.x0+'" y="'+(b-D.ro)+'" width="'+(D.x1-D.x0)+'" height="0"/></g>';
  g+='<g clip-path="url(#dyWc)"><path id="dyGc" class="gc" d="'+dyGrain(23,.55)+'"/><path id="dyGf" class="gf" d="'+dyGrain(9,.5)+'"/></g>';
  /* machining: the skin is taken off behind the tool (erasers in the ground colour), outside, in the bore and at the faces */
  g+='<g class="er"><rect id="dyE1" x="'+D.x1+'" y="'+(D.ro-2)+'" width="0" height="'+(D.fo-D.ro+2)+'"/><rect id="dyE2" x="'+D.x1+'" y="'+(b-D.fo)+'" width="0" height="'+(D.fo-D.ro+2)+'"/>'+
     '<rect id="dyE3" x="'+D.x1+'" y="'+D.fi+'" width="0" height="'+(D.ri-D.fi+1)+'"/><rect id="dyE4" x="'+D.x1+'" y="'+(b-D.ri-1)+'" width="0" height="'+(D.ri-D.fi+1)+'"/>'+
     '<rect id="dyE5" x="'+(D.fx1)+'" y="'+(D.ro-2)+'" width="'+(D.x1-D.fx1+2)+'" height="'+(b-2*D.ro+4)+'"/><rect id="dyE6" x="'+(D.x0-2)+'" y="'+(D.ro-2)+'" width="'+(D.fx0-D.x0+2)+'" height="'+(b-2*D.ro+4)+'"/></g>';
  /* the finished profile */
  g+='<g id="dyFp" class="fin"><rect x="'+D.fx0+'" y="'+D.fo+'" width="'+(D.fx1-D.fx0)+'" height="'+(D.fi-D.fo)+'"/><rect x="'+D.fx0+'" y="'+(b-D.fi)+'" width="'+(D.fx1-D.fx0)+'" height="'+(D.fi-D.fo)+'"/></g>';
  /* tools: a turning tool from above, a boring bar in the bore */
  g+='<g id="dyT1" class="tool"><rect x="2" y="28" width="22" height="78"/><path class="ins" d="M0 '+D.fo+'L-4 106H18Z"/></g>';
  g+='<g id="dyT2" class="tool"><rect x="6" y="200" width="200" height="14"/><path class="ins" d="M0 '+D.fi+'L-4 200H16Z"/></g>';
  /* the CMM stylus and the diameters it checks */
  g+='<g id="dyPr" class="probe"><rect x="640" y="190" width="84" height="30"/><path d="M640 205H452V190"/><circle cx="452" cy="'+(D.fi+8)+'" r="7"/></g>';
  g+='<circle id="dyHit" class="hit" cx="452" cy="'+(D.fi+8)+'" r="14"/>';
  g+='<g id="dyDm" class="dim"><path d="M150 '+D.fo+'V'+(b-D.fo)+'M142 '+D.fo+'H158M142 '+(b-D.fo)+'H158"/><path d="M226 '+(D.fi+1)+'V'+(b-D.fi-1)+'M219 '+(D.fi+1)+'H233M219 '+(b-D.fi-1)+'H233"/></g>';
  g+='<g id="dyLd"><text class="t" x="'+(mob?150:138)+'" y="'+(mob?b-D.fo+34:D.ax+5)+'" text-anchor="'+(mob?"middle":"end")+'">Ø OD</text><text class="t" x="242" y="'+(D.ax+(mob?32:26))+'">Ø BORE</text></g>';
  /* labels: feature labels in step 1, one caption per step under the part */
  g+='<g id="dyLm"><text class="t" x="170" y="'+(mob?70:76)+'">SPINNING MOULD</text></g>';
  g+='<g id="dyLb"><text class="t" x="604" y="136">'+(mob?"MOLTEN":"MOLTEN BRONZE")+'</text></g>';
  var C=["CENTRIFUGAL CASTING",mob?"FINER GRAIN":"DYN PROCESS · FINER GRAIN",mob?"CNC MACHINING":"CNC FINISH MACHINING","CMM INSPECTION"];
  for(i=0;i<4;i++)g+='<g id="dyC'+i+'" class="cap"><text class="t" x="170" y="'+(mob?482:476)+'">'+C[i]+'</text></g>';
  return g+'</svg>';
}
function scene(){return dyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var Q=function(s){return svg.querySelector(s)},D=DY,b=2*D.ax,H=D.ri-D.ro;
  var E={mo:Q("#dyMo"),sp:Q("#dySp"),la:Q("#dyLa"),po:Q("#dyPo"),ft:Q("#dyFt"),fb:Q("#dyFb"),ml:Q("#dyMl"),mt:Q("#dyMt"),mb:Q("#dyMb"),gc:Q("#dyGc"),gf:Q("#dyGf"),
    e:[Q("#dyE1"),Q("#dyE2"),Q("#dyE3"),Q("#dyE4")],e5:Q("#dyE5"),e6:Q("#dyE6"),fp:Q("#dyFp"),t1:Q("#dyT1"),t2:Q("#dyT2"),pr:Q("#dyPr"),hit:Q("#dyHit"),dm:Q("#dyDm"),
    ld:Q("#dyLd"),lm:Q("#dyLm"),lb:Q("#dyLb"),C:[Q("#dyC0"),Q("#dyC1"),Q("#dyC2"),Q("#dyC3")],axl:Q(".axl")};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,bb){
    if(!svg.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.28,.46),s3=seg(p,.53,.72),s4=seg(p,.78,.94);
    op(E.axl,bb);
    /* 1: pour and spin; the wall builds from the mould inward */
    var hh=H*s1;E.ft.setAttribute("height",hh.toFixed(1));E.fb.setAttribute("y",(b-D.ro-hh).toFixed(1));E.fb.setAttribute("height",hh.toFixed(1));E.mt.setAttribute("height",hh.toFixed(1));E.mb.setAttribute("y",(b-D.ro-hh).toFixed(1));E.mb.setAttribute("height",hh.toFixed(1));
    op(E.ft,bb);op(E.fb,bb);
    var moOut=1-seg(p,.3,.42);op(E.mo,bb*moOut);op(E.sp,bb*moOut);E.sp.style.transform="translateX(0)";
    var laOn=bb*(1-seg(p,.22,.28));op(E.la,laOn);op(E.po,laOn*(s1>0&&s1<1?1:s1>=1?.0:0));
    op(E.ml,bb*s1*(1-seg(p,.2,.3))*.85);
    /* 2: coarse grain refines */
    op(E.gc,bb*seg(p,.2,.28)*(1-s2));op(E.gf,bb*s2);
    /* 3: tools travel right to left, the skin goes behind them; faces are trimmed */
    var tx=D.x1+4-(D.x1-D.x0+8)*s3,tOn=bb*seg(p,.5,.54)*(1-seg(p,.73,.77));
    E.e.forEach(function(r){r.setAttribute("x",Math.min(tx,D.x1).toFixed(1));r.setAttribute("width",Math.max(0,D.x1+2-tx).toFixed(1));op(r,bb)});
    op(E.e5,bb*seg(p,.53,.55));op(E.e6,bb*seg(p,.7,.72));
    E.t1.setAttribute("transform","translate("+tx.toFixed(1)+" 0)");E.t2.setAttribute("transform","translate("+tx.toFixed(1)+" 0)");op(E.t1,tOn);op(E.t2,tOn);
    op(E.fp,bb*seg(p,.5,.56));E.fp.classList.toggle("done",p>=.74);
    /* 4: the stylus slides in and touches the bore; the diameters are checked */
    var pin=seg(p,.76,.86);E.pr.setAttribute("transform","translate("+(180*(1-pin)).toFixed(1)+" 0)");op(E.pr,bb*seg(p,.75,.79));
    op(E.hit,bb*seg(p,.86,.9));op(E.dm,bb*seg(p,.84,.92));op(E.ld,bb*seg(p,.86,.94));
    /* labels: step 1 features, then one caption per step (never two at once) */
    op(E.lm,bb*(1-seg(p,.22,.26)));op(E.lb,bb*(1-seg(p,.2,.24)));
    var cw=[[0,.24],[.27,.49],[.52,.74],[.77,1.01]];
    E.C.forEach(function(el,i){var a=cw[i][0],z=cw[i][1];op(el,bb*(i===0?1:seg(p,a,a+.02))*(i===3?1:1-seg(p,z,z+.02)))});
  };
}
