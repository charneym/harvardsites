/* The story scene (BL/BY/DB): one electronics enclosure made the way Barlow Sheet Metal describes its work
   (barlowsheetmetal.com: CAD from "ideas, sketches, samples or existing cad files", SolidWorks Premium; "Precision CNC
   Machinery and Programming"; LVD Strippit P Series 29-station punch presses; LVD PPEB and Dyna-Press CNC press brakes;
   Haeger insert assembly; "Full mechanical assembly"), drawn as a fine-line isometric and kept on screen for all four steps:
   Step 1 (Data): the flat pattern of the case draws in as a CAD outline (as the section scrolls in), with dashed bend lines.
   Step 2 (Punch): the blank fills in and the turret punches the vent field, the side slots and the front-panel cut-outs.
   Step 3 (Fold): the press brake folds the four flanges up to 90 degrees, one after another.
   Step 4 (Assemble): inserts are pressed in, the lid comes down and is screwed on. */
var SCW=640,SCH=520;
var BSG={a:1.5,b:1.0,h:0.55};
function bsScene(o){
  var mob=o.mob,g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"58 40 540 440":"20 0 600 520")+'" aria-hidden="true">';
  g+='<text class="t" x="'+(mob?70:40)+'" y="'+(mob?66:30)+'">'+(mob?"ENCLOSURE":"ENCLOSURE · FLAT TO FOLDED")+'</text>';
  g+='<g id="bsD"><path class="dm" d=""/></g>';
  g+='<g id="bsG"></g>';
  g+='<g id="bsTool"><circle class="tl" cx="0" cy="0" r="13"/><path class="tl" d="M-20 0H-8M8 0H20M0 -20V-8M0 8V20"/></g>';
  var lx=mob?596:600,ly=mob?66:30;
  g+='<g id="bsL1"><text class="t s1" x="'+lx+'" y="'+ly+'" text-anchor="end">'+(mob?"CAD · DXF":"SOLIDWORKS · FLAT PATTERN")+'</text></g>';
  g+='<g id="bsL2"><text class="t s1" x="'+lx+'" y="'+ly+'" text-anchor="end">'+(mob?"CNC PUNCH":"29-STATION CNC TURRET")+'</text></g>';
  g+='<g id="bsL3"><text class="t s1" x="'+lx+'" y="'+ly+'" text-anchor="end">'+(mob?"BRAKE · 90°":"CNC PRESS BRAKE · 90°")+'</text></g>';
  g+='<g id="bsL4"><text class="t s1" x="'+lx+'" y="'+ly+'" text-anchor="end">'+(mob?"ASSEMBLED":"INSERTS · LID · SCREWS")+'</text></g>';
  var by=mob?470:508,bx=mob?70:40;
  g+='<g id="lb1"><text class="a" x="'+bx+'" y="'+by+'">1 · DATA</text></g>';
  g+='<g id="lb2"><text class="a" x="'+bx+'" y="'+by+'">2 · PUNCH</text></g>';
  g+='<g id="lb3"><text class="a" x="'+bx+'" y="'+by+'">3 · FOLD</text></g>';
  g+='<g id="lb4"><text class="a" x="'+bx+'" y="'+by+'">4 · ASSEMBLE</text></g>';
  return g+'</svg>';
}
function scene(){return bsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var A=BSG.a,B=BSG.b,Hh=BSG.h,S=92,CX=322,CY=262,mob=svg.classList.contains("mob");
  /* the drawing is framed each frame: its bounding box is scaled and centred into a target box, so the flat blank and the
     folded case both fill the frame (DB), clear of the top and bottom labels */
  var TG=mob?{w:500,h:310,x:328,y:268}:{w:570,h:390,x:322,y:268};
  var yaw=30*Math.PI/180,pit=32*Math.PI/180,cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pit),sp=Math.sin(pit);
  function P(x,y,z){var xr=x*cy-z*sy,zr=x*sy+z*cy;return [CX+S*xr,CY+S*(zr*sp-y*cp),zr*cp+y*sp]}
  function f1(v){return v.toFixed(1)}
  function poly(pts){return "M"+pts.map(function(q){return f1(q[0])+" "+f1(q[1])}).join("L")+"Z"}
  /* each face maps local (u,v) to 3D; holes are lists of local polygons */
  function circ(cu,cv,r,n){var o=[];for(var i=0;i<(n||14);i++){var t=i/(n||14)*Math.PI*2;o.push([cu+r*Math.cos(t),cv+r*Math.sin(t)])}return o}
  function rect(u0,v0,u1,v1){return [[u0,v0],[u1,v0],[u1,v1],[u0,v1]]}
  var baseHoles=[];for(var i=0;i<8;i++)for(var j=0;j<5;j++)baseHoles.push(circ(-0.7+i*0.2,-0.4+j*0.2,0.05,12));
  var frontHoles=[rect(-1.1,0.16,-0.35,0.4),circ(0.25,0.28,0.09),circ(0.55,0.28,0.09),rect(0.9,0.18,1.2,0.38)];
  var sideHoles=[];for(var k=0;k<3;k++)sideHoles.push(rect(-0.6,0.13+k*0.12,0.35,0.17+k*0.12));
  var FACES=[
    {k:"base",fold:-1,holes:baseHoles,outline:rect(-A,-B,A,B),map:function(u,v){return [u,0,v]}},
    {k:"front",fold:0,holes:frontHoles,outline:rect(-A,0,A,Hh),map:function(u,v,ph){return [u,v*Math.sin(ph),B+v*Math.cos(ph)]}},
    {k:"right",fold:1,holes:sideHoles,outline:rect(-B,0,B,Hh),map:function(u,v,ph){return [A+v*Math.cos(ph),v*Math.sin(ph),-u]}},
    {k:"back",fold:2,holes:[],outline:rect(-A,0,A,Hh),map:function(u,v,ph){return [-u,v*Math.sin(ph),-B-v*Math.cos(ph)]}},
    {k:"left",fold:3,holes:sideHoles,outline:rect(-B,0,B,Hh),map:function(u,v,ph){return [-A-v*Math.cos(ph),v*Math.sin(ph),u]}}];
  /* punch order: base vents, then the front cut-outs, then the side slots */
  var PUN=[];FACES.forEach(function(F,fi){F.holes.forEach(function(h,hi){PUN.push([fi,hi])})});
  PUN.sort(function(a,b){var o={0:0,1:1,2:2,4:3};return (o[a[0]]-o[b[0]])||(a[1]-b[1])});
  var rank={};PUN.forEach(function(q,i){rank[q[0]+"_"+q[1]]=i});
  var G=$("#bsG",svg),Dm=$("#bsD .dm",svg),T=$("#bsTool",svg),L=[$("#bsL1",svg),$("#bsL2",svg),$("#bsL3",svg),$("#bsL4",svg)],Lb=[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],t0=svg.querySelector("text.t");
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  var lastKey="";
  return function(p,b){
    if(!svg.isConnected)return;
    op(t0,b);
    var cad=1,fill=seg(p,.24,.3),punch=seg(p,.28,.47);
    var ph=[seg(p,.52,.58),seg(p,.57,.63),seg(p,.62,.68),seg(p,.66,.72)].map(function(v){return v*v*(3-2*v)*Math.PI/2});
    var ins=seg(p,.77,.82),lid=seg(p,.8,.9),scr=seg(p,.9,.96);
    var key=[cad,fill,punch,ph.join(),ins,lid,scr,b].map(function(v){return typeof v==="number"?v.toFixed(3):v}).join("|");
    if(key===lastKey)return;lastKey=key;
    var fo=seg(p,.52,.6);
    S=1;CX=0;CY=0;var bx0=1e9,bx1=-1e9,by0=1e9,by1=-1e9;
    FACES.forEach(function(F){var phi=F.fold<0?0:ph[F.fold];F.outline.forEach(function(q){var c=P.apply(null,F.map(q[0],q[1],phi));bx0=Math.min(bx0,c[0]);bx1=Math.max(bx1,c[0]);by0=Math.min(by0,c[1]);by1=Math.max(by1,c[1])})});
    var lyb=Hh+.02+(lid>0?(1-lid)*.45:0);if(fo>0){[[-A,lyb,-B],[A,lyb,-B],[A,lyb,B],[-A,lyb,B]].forEach(function(q){var c=P(q[0],q[1],q[2]);by0=Math.min(by0,c[1]);by1=Math.max(by1,c[1])})}
    S=Math.min(TG.w/(bx1-bx0),TG.h/(by1-by0));CX=TG.x-S*(bx0+bx1)/2;CY=TG.y-S*(by0+by1)/2;
    var groups=[],nP=Math.round(punch*PUN.length),tool=null;
    FACES.forEach(function(F,fi){
      var phi=F.fold<0?0:ph[F.fold];
      var map=function(q){return P.apply(null,F.map(q[0],q[1],phi))};
      var o=F.outline.map(map),dep=o.reduce(function(s,q){return s+q[2]},0)/o.length;
      var s='<path class="sh" style="fill-opacity:'+(fill*.9).toFixed(3)+'" d="'+poly(o)+'"/>';
      var hs="";F.holes.forEach(function(h,hi){var r=rank[fi+"_"+hi];if(r<nP){var hp=h.map(map);hs+=poly(hp);if(r===nP-1&&punch<1){var cx=0,cy2=0;hp.forEach(function(q){cx+=q[0];cy2+=q[1]});tool=[cx/hp.length,cy2/hp.length]}}});
      if(hs)s+='<path class="ho" d="'+hs+'"/>';
      /* the outline draws in during step 1 (dash), then stays */
      var od=F.fold<0?poly(o):"M"+[o[1],o[2],o[3],o[0]].map(function(q){return f1(q[0])+" "+f1(q[1])}).join("L");
      s+='<path class="ol" pathLength="1" style="stroke-dasharray:1 1;stroke-dashoffset:'+(1-b).toFixed(3)+(F.fold<0?';opacity:'+fo.toFixed(3):'')+'" d="'+od+'"/>';
      groups.push([dep,s]);
    });
    /* bend lines, dashed, while flat */
    var bl=[[[-A,B],[A,B]],[[A,-B],[A,B]],[[-A,-B],[A,-B]],[[-A,-B],[-A,B]]].map(function(l){var a=P(l[0][0],0,l[0][1]),c=P(l[1][0],0,l[1][1]);return "M"+f1(a[0])+" "+f1(a[1])+"L"+f1(c[0])+" "+f1(c[1])}).join("");
    var bendO=b*(1-fo);
    groups.push([1e3,'<path class="bl" style="opacity:'+bendO.toFixed(3)+'" d="'+bl+'"/>']);
    groups.sort(function(x,y){return x[0]-y[0]});
    var out=groups.map(function(g){return g[1]}).join("");
    /* inserts at the four top corners of the front and back flanges, then the lid with its screws */
    if(ins>0){var ip=[[-A+.12,Hh-.1],[A-.12,Hh-.1]],dots="";
      [0,2].forEach(function(fd){var F=FACES[fd+1];ip.forEach(function(q){var c=P.apply(null,F.map(q[0],q[1],ph[fd]));dots+='<circle class="in" cx="'+f1(c[0])+'" cy="'+f1(c[1])+'" r="'+(Math.max(2.4,S*.035)*ins).toFixed(2)+'"/>'})});out+=dots}
    if(lid>0){var ly=Hh+.02+(1-lid)*.45,e=.03,lc=[[-A-e,ly,-B-e],[A+e,ly,-B-e],[A+e,ly,B+e],[-A-e,ly,B+e]].map(function(q){return P(q[0],q[1],q[2])});
      var lf=[[-A-e,ly,B+e],[A+e,ly,B+e],[A+e,ly-.12,B+e],[-A-e,ly-.12,B+e]].map(function(q){return P(q[0],q[1],q[2])});
      var lr=[[A+e,ly,B+e],[A+e,ly,-B-e],[A+e,ly-.12,-B-e],[A+e,ly-.12,B+e]].map(function(q){return P(q[0],q[1],q[2])});
      out+='<g style="opacity:'+lid.toFixed(3)+'"><path class="lid" d="'+poly(lc)+'"/><path class="lid" d="'+poly(lf)+'"/><path class="lid" d="'+poly(lr)+'"/></g>';
      if(scr>0){[[-A+.12,-B+.1],[A-.12,-B+.1],[A-.12,B-.1],[-A+.12,B-.1]].forEach(function(q){var c=P(q[0],ly,q[1]);out+='<circle class="sc" style="opacity:'+scr.toFixed(3)+'" cx="'+f1(c[0])+'" cy="'+f1(c[1])+'" r="3.6"/>'})}}
    G.innerHTML=out;G.style.opacity=b.toFixed(3);
    if(tool&&b>0){T.setAttribute("transform","translate("+f1(tool[0])+" "+f1(tool[1])+")");op(T,b*Math.min(1,seg(p,.28,.3)*(1-seg(p,.45,.47))))}else op(T,0);
    /* a dimension line along the front edge of the flat pattern during step 1 */
    var d0=P(-A,0,B+Hh+.28),d1=P(A,0,B+Hh+.28);Dm.setAttribute("d","M"+f1(d0[0])+" "+f1(d0[1])+"L"+f1(d1[0])+" "+f1(d1[1])+"M"+f1(d0[0])+" "+f1(d0[1]-6)+"V"+f1(d0[1]+6)+"M"+f1(d1[0])+" "+f1(d1[1]-6)+"V"+f1(d1[1]+6));
    op(Dm,b*cad*(1-seg(p,.22,.27)));
    var w=[[0,.24],[.26,.49],[.51,.74],[.76,1.01]];
    for(var i=0;i<4;i++){var v=b*seg(p,w[i][0],w[i][0]+.04)*(i<3?1-seg(p,w[i][1]-.03,w[i][1]):1);op(L[i],v);op(Lb[i],v)}
  };
}
