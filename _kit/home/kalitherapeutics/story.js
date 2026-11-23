/* The story scene (DB/BL): Kali's own mechanism (kalitherapeutics.com and releases: the engagers bind CD19 with BCMA or
   CD20 "to reach a wide spectrum of B-cell populations", engage CD3 "through a proprietary masking design", "redirecting
   endogenous T cells to achieve deep B-cell depletion", with "only low and transitory cytokine releases" in NHP), drawn as
   ONE continuous fine-line scene that fills the frame: a T cell (left) and a B cell (right), each with its surface receptors.
   Frame 0 is already complete.
   Step 1 (target): the engager (arms in the hero's two blues, Fc in silver) rises and docks on the B cell's CD19.
   Step 2 (engage): the T cell closes in and its CD3 meets the engager's other arm.
   Step 3 (reset): the B cell is killed and breaks up; a few cytokine dots appear and fade (low, transient release).
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var TC=[215,290],TR=140,TDX=-36,BC=[600,290],BR=118,STK=10;
function cpath(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function rcp(c,r,a){var t=a*Math.PI/180,cs=Math.cos(t),sn=Math.sin(t),bx=c[0]+r*cs,by=c[1]+r*sn,tx=c[0]+(r+STK)*cs,ty=c[1]+(r+STK)*sn;
  var f1=t+0.62,f2=t-0.62,T=tx.toFixed(1)+" "+ty.toFixed(1);
  return "M"+bx.toFixed(1)+" "+by.toFixed(1)+"L"+T+"M"+T+"l"+(6*Math.cos(f1)).toFixed(1)+" "+(6*Math.sin(f1)).toFixed(1)+"M"+T+"l"+(6*Math.cos(f2)).toFixed(1)+" "+(6*Math.sin(f2)).toFixed(1)}
var TANG=[-72,-50,-28,-4.2,24,48,72],BANG=[108,132,156,184.9,212,236];
/* the engager: hinge, Fc stem, an arm toward each cell's docking receptor */
var AB={h:[418.5,316],l:[369,279],r:[468,279],s:[418.5,366]};
var FRAG=[];(function(){for(var i=0;i<12;i++){var a=(i/12)*Math.PI*2+.2;FRAG.push([BC[0]+BR*Math.cos(a),BC[1]+BR*Math.sin(a),Math.cos(a),Math.sin(a)])}})();
var CYT=[[402,232],[432,214],[388,206],[446,240],[416,192]];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'30 104 730 456':'30 90 730 470')+'" aria-hidden="true">';
  g+='<g id="tcG" transform="translate('+TDX+' 0)">';
  g+='<path class="cl sD" d="'+cpath(TC[0],TC[1],TR)+'"/><path class="cn sD" d="'+cpath(TC[0]-14,TC[1]+8,62)+'"/>';
  TANG.forEach(function(a){g+='<path class="rc sD" d="'+rcp(TC,TR,a)+'"/>'});
  g+='</g>';
  g+='<g id="bG"><path class="cl sD" d="'+cpath(BC[0],BC[1],BR)+'"/><path class="cn sD" d="'+cpath(BC[0]+8,BC[1]+6,52)+'"/>';
  BANG.forEach(function(a){g+='<path class="rc sD" d="'+rcp(BC,BR,a)+'"/>'});
  g+='</g>';
  g+='<g id="scFrag">';FRAG.forEach(function(f){g+='<circle class="fr" r="2.4" cx="'+f[0].toFixed(1)+'" cy="'+f[1].toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scCyt">';CYT.forEach(function(c){g+='<circle class="cy" r="3.4" cx="'+c[0]+'" cy="'+c[1]+'"/>'});g+='</g>';
  g+='<g id="abG" style="opacity:0"><path class="ab fc" d="M'+AB.h[0]+' '+(AB.h[1]+6)+'L'+AB.s[0]+' '+AB.s[1]+'"/>'+
     '<path class="ab a2" d="M'+AB.h[0]+' '+AB.h[1]+'L'+AB.l[0]+' '+AB.l[1]+'"/><path class="ab a1" d="M'+AB.h[0]+' '+AB.h[1]+'L'+AB.r[0]+' '+AB.r[1]+'"/></g>';
  if(!mob){
    g+='<g id="lT"><text class="t" x="'+TC[0]+'" y="470" text-anchor="middle">T CELL</text></g>';
    g+='<g id="lB"><text class="t" x="'+BC[0]+'" y="450" text-anchor="middle">B CELL</text></g>';
    g+='<g id="lDep"><text class="t" x="'+BC[0]+'" y="450" text-anchor="middle">B CELL DEPLETED</text></g>';
    g+='<g id="lAb"><text class="t" x="'+AB.s[0]+'" y="400" text-anchor="middle">T-CELL ENGAGER</text></g>';
    g+='<g id="lC19"><text class="t w" x="462" y="256" text-anchor="middle">CD19</text></g>';
    g+='<g id="lC3"><text class="t w" x="374" y="256" text-anchor="middle">CD3</text></g>';
    g+='<g id="lCy"><text class="t" x="418" y="160" text-anchor="middle">LOW, TRANSIENT CYTOKINES</text></g>';
  }else{
    g+='<g id="lT"><text class="t" x="'+TC[0]+'" y="478" text-anchor="middle">T CELL</text></g>';
    g+='<g id="lB"><text class="t" x="'+BC[0]+'" y="462" text-anchor="middle">B CELL</text></g>';
    g+='<g id="lDep"><text class="t" x="'+BC[0]+'" y="462" text-anchor="middle">DEPLETED</text></g>';
    g+='<g id="lAb"></g><g id="lC19"></g><g id="lC3"></g><g id="lCy"></g>';
  }
  var ly=SCH-6,lx=46;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ENGAGER BINDS CD19':'THE ENGAGER BINDS CD19 ON THE B CELL')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CD3 BRINGS IN A T CELL':'ITS CD3 ARM BRINGS IN A T CELL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'B CELL DEPLETED':'THE B CELL IS DEPLETED, WITH LOW CYTOKINE RELEASE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),tc:$("#tcG",svg),bG:$("#bG",svg),ab:$("#abG",svg),fr:$$("#scFrag .fr",svg),cy:$$("#scCyt .cy",svg),
    lT:$("#lT",svg),lB:$("#lB",svg),lDep:$("#lDep",svg),lAb:$("#lAb",svg),lC19:$("#lC19",svg),lC3:$("#lC3",svg),lCy:$("#lCy",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.94);
    op(E.lT,b);op(E.lB,b*(1-seg(p,.8,.86)));op(E.lDep,b*seg(p,.86,.92));
    /* 1. the engager rises from below and docks on the B cell's CD19 */
    var k1=sm(s1);E.ab.setAttribute("transform","translate(0 "+(150*(1-k1)).toFixed(1)+")");op(E.ab,b*Math.min(1,s1*3));
    op(E.lAb,b*seg(p,.24,.32));op(E.lC19,b*seg(p,.24,.32));
    /* 2. the T cell closes in; its CD3 meets the engager's other arm */
    E.tc.setAttribute("transform","translate("+(TDX*(1-sm(s2))).toFixed(1)+" 0)");
    op(E.lC3,b*seg(p,.56,.64));
    /* 3. the B cell is killed and breaks up; a little cytokine, then calm */
    op(E.bG,b*(1-.8*sm(s3)));
    E.fr.forEach(function(el,i){var f=sm(seg(p,.72+i*.006,.92+i*.006)),q=FRAG[i];
      el.setAttribute("cx",(q[0]+q[2]*26*f).toFixed(1));el.setAttribute("cy",(q[1]+q[3]*26*f).toFixed(1));op(el,b*(f>0?Math.min(1,f*5):0)*(1-.55*f))});
    E.cy.forEach(function(el,i){op(el,b*seg(p,.7+i*.01,.76+i*.01)*(1-.65*seg(p,.84,.94)))});
    op(E.lCy,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
