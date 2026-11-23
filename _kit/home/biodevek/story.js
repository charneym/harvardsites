/* The story scene (DB): GastroShield's delivery as their site describes it ("delivered as two liquid components that mix
   at the tip of an endoscopic catheter. Upon contact with GI tissue, they rapidly form a thin, durable hydrogel layer";
   "a transparent coating that preserves visualization"; "barrier remains adhered in place during the healing process"),
   drawn as ONE continuous fine-line scene that fills the frame: a section of GI wall (mucosa with its glands, submucosa,
   a shallow resection site) and a two-lumen endoscopic catheter above it. No blood, no gore (DT).
   Step 1 (deliver): the two components flow down the two lumens to the tip.
   Step 2 (form): fine spray from the tip; a thin lime hydrogel layer spreads over the lesion.
   Step 3 (protect): the catheter withdraws; the clear layer stays, the lesion visible beneath, glands re-forming.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var LC=415,LW=118;           /* lesion centre and half-width */
function bump(x){var u=(x-LC)/LW;return Math.exp(-Math.pow(Math.abs(u),3.2))}
function ySurf(x){return 352+4*Math.sin(x/68)+48*bump(x)}
function yL2(x){return 432+3*Math.sin(x/80+1)+12*bump(x)}
function yL3(x){return 500+3*Math.sin(x/90+2)}
function f1(v){return v.toFixed(1)}
function pl(fn,x0,x1,dy){var s="",x;for(x=x0;x<=x1+.01;x+=6)s+=(s?"L":"M")+f1(x)+" "+f1(fn(x)+(dy||0));return s}
/* catheter axis: from the top edge down to the tip above the lesion */
var CA=[262,26],CT=[396,282];
var CD=(function(){var dx=CT[0]-CA[0],dy=CT[1]-CA[1],l=Math.hypot(dx,dy);return [dx/l,dy/l]})(),CN=[-CD[1],CD[0]];
function cp(t,o){return [CA[0]+(CT[0]-CA[0])*t+CN[0]*o,CA[1]+(CT[1]-CA[1])*t+CN[1]*o]}
function cl(o,t0,t1){var a=cp(t0==null?0:t0,o),b=cp(t1==null?1:t1,o);return "M"+f1(a[0])+" "+f1(a[1])+"L"+f1(b[0])+" "+f1(b[1])}
function glands(x0,x1,cls,L){var g="",x,y;L=L||30;for(x=x0;x<=x1;x+=30){y=ySurf(x)+5;g+='<path class="'+cls+'" d="M'+f1(x-5)+' '+f1(y)+'L'+f1(x-5)+' '+f1(y+L)+'A5 5 0 0 0 '+f1(x+5)+' '+f1(y+L)+'L'+f1(x+5)+' '+f1(y)+'"/>'}return g}
function gelPath(){var x,x0=LC-LW-26,x1=LC+LW+26,pts=[];
  for(x=x0;x<=x1+.01;x+=4){var u=(x-x0)/(x1-x0),th=11*Math.pow(Math.sin(Math.PI*u),.55);pts.push([x,ySurf(x)-1,ySurf(x)-1-th])}
  var top=pts.map(function(p,i){return (i?"L":"M")+f1(p[0])+" "+f1(p[2])}).join("");
  var bot=pts.slice().reverse().map(function(p){return "L"+f1(p[0])+" "+f1(p[1])}).join("");
  return {fill:top+bot+"Z",edge:top}}
function storyScene(o){
  var g='',mob=o.mob,G=gelPath(),i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 760 560" aria-hidden="true">';
  g+='<defs><clipPath id="gClip"><rect id="gRect" x="'+LC+'" y="200" width="0" height="260"/></clipPath>'+
     '<radialGradient id="gGlow"><stop offset="0" stop-color="#8fd14f" stop-opacity=".3"/><stop offset="1" stop-color="#8fd14f" stop-opacity="0"/></radialGradient></defs>';
  g+='<ellipse class="halo" id="hGel" cx="'+LC+'" cy="'+f1(ySurf(LC)-6)+'" rx="190" ry="70" fill="url(#gGlow)"/>';
  /* the GI wall: surface, muscularis line, submucosa boundary, glands outside the resection site */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+pl(ySurf,10,750)+'"/>';
  g+='<path class="wo sD" d="'+pl(yL2,10,750)+'"/>';
  g+='<path class="wo sD" d="'+pl(yL3,10,750)+'"/>';
  g+='</g>';
  g+='<g id="scGl">'+glands(25,LC-LW-34,"gl")+glands(LC+LW+40,745,"gl")+'</g>';
  g+='<g id="scGl2">'+glands(LC-LW+16,LC+LW-16,"gl2",16)+'</g>';
  /* the hydrogel layer, revealed from the centre outward */
  g+='<g id="scGel" clip-path="url(#gClip)"><path class="gel" d="'+G.fill+'"/><path class="gele" d="'+G.edge+'"/></g>';
  /* spray droplets */
  g+='<g id="scSpr">';for(i=0;i<16;i++)g+='<circle class="spr" r="2.2" cx="'+CT[0]+'" cy="'+CT[1]+'"/>';g+='</g>';
  /* the catheter: two outer walls, the septum between the two lumens, and the two liquids */
  g+='<g id="scCat"><g id="scCatB">';
  g+='<path class="wl sD" d="'+cl(-19)+'"/><path class="wl sD" d="'+cl(19)+'"/><path class="wo sD" d="'+cl(0,0,.985)+'"/>';
  var a=cp(1,-19),b=cp(1,19);g+='<path class="wl sD" d="M'+f1(a[0])+' '+f1(a[1])+'L'+f1(b[0])+' '+f1(b[1])+'"/>';
  g+='</g><path class="liqA" id="lqA" d="'+cl(-9.5,0,.98)+'"/><path class="liqB" id="lqB" d="'+cl(9.5,0,.98)+'"/></g>';
  /* labels, each clear of every stroke (DR) */
  if(!mob){
    var lp=cp(.36,-36);
    g+='<g id="lCat"><text class="t" x="'+f1(lp[0]+8)+'" y="'+f1(lp[1]+4)+'">ENDOSCOPIC CATHETER</text><text class="t q" x="'+f1(lp[0]+8)+'" y="'+f1(lp[1]+20)+'">TWO LUMENS</text></g>';
    var tp=cp(.95,-40);
    g+='<g id="lAB"><text class="t" x="'+f1(tp[0]+6)+'" y="'+f1(tp[1]+2)+'">COMPONENTS A + B</text><text class="t q" x="'+f1(tp[0]+6)+'" y="'+f1(tp[1]+18)+'">MIX AT THE TIP</text></g>';
    var lx=LC+LW+16,ly=ySurf(lx);
    g+='<g id="lLes"><path class="ld" d="M'+f1(lx-2)+' '+f1(ly-10)+'L'+f1(lx+26)+' '+f1(ly-40)+'"/><text class="t" x="748" y="'+f1(ly-58)+'" text-anchor="end">RESECTION SITE</text></g>';
    g+='<g id="lGel"><path class="ld" d="M'+f1(lx-2)+' '+f1(ly-14)+'L'+f1(lx+26)+' '+f1(ly-40)+'"/><text class="t" x="748" y="'+f1(ly-74)+'" text-anchor="end">HYDROGEL LAYER</text><text class="t q" x="748" y="'+f1(ly-58)+'" text-anchor="end">THIN · ADHERENT · CLEAR</text></g>';
    g+='<g id="lSub"><text class="t" x="742" y="'+f1(yL3(742)-26)+'" text-anchor="end">SUBMUCOSA</text></g>';
  }else g+='<g id="lCat"></g><g id="lAB"></g><g id="lLes"></g><g id="lGel"></g><g id="lSub"></g>';
  var by=SCH-8,bx=12;
  g+='<g id="lb1"><text class="a" x="'+bx+'" y="'+by+'">'+(mob?'TWO LIQUIDS REACH THE TIP':'TWO LIQUID COMPONENTS TRAVEL DOWN THE CATHETER')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+bx+'" y="'+by+'">'+(mob?'A THIN HYDROGEL FORMS':'A THIN HYDROGEL LAYER FORMS ON CONTACT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+bx+'" y="'+by+'">'+(mob?'THE CLEAR SHIELD STAYS':'THE CLEAR SHIELD STAYS, THE LESION IN VIEW')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),cat:dl("#scCatB .sD"),gl:$$("#scGl .gl",svg),gl2:$$("#scGl2 .gl2",svg),gel:$("#scGel",svg),rect:$("#gRect",svg),
    spr:$$("#scSpr .spr",svg),catG:$("#scCat",svg),lqA:$("#lqA",svg),lqB:$("#lqB",svg),hG:$("#hGel",svg),
    lCat:$("#lCat",svg),lAB:$("#lAB",svg),lLes:$("#lLes",svg),lGel:$("#lGel",svg),lSub:$("#lSub",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var SPT=E.spr.map(function(el,i){var x=LC-LW*.85+LW*1.7*((i*7)%16)/15;return [x,ySurf(x)-4]});
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.cat,b)}
    var s3=seg(p,.68,.94);
    E.gl.forEach(function(el){op(el,b*.9)});
    /* 1. the two liquids flow down the lumens */
    var fl=sm(seg(p,.06,.3));
    [E.lqA,E.lqB].forEach(function(el,i){if(!el)return;el.style.strokeDasharray="7 9";el.style.strokeDashoffset=f1(-(p*900+i*5));op(el,b*fl*(1-.75*s3))});
    /* 2. spray, then the layer from the centre outward */
    E.spr.forEach(function(el,i){var d=(i%5)*.04,f=seg(p,.38+d,.54+d),t=SPT[i];el.setAttribute("cx",f1(CT[0]+(t[0]-CT[0])*f));el.setAttribute("cy",f1(CT[1]+(t[1]-CT[1])*f));
      op(el,b*(f>0&&f<1?Math.min(1,f*6,(1-f)*6):0))});
    var gw=(LW+34)*sm(seg(p,.44,.66));E.rect.setAttribute("x",f1(LC-gw));E.rect.setAttribute("width",f1(Math.max(gw*2,0)));
    op(E.gel,b);op(E.hG,b*sm(seg(p,.5,.66))*(1-.5*s3));
    /* 3. the catheter withdraws; glands re-form beneath the clear layer */
    var r=sm(s3);E.catG.setAttribute("transform","translate("+f1(-CD[0]*120*r)+" "+f1(-CD[1]*120*r)+")");op(E.catG,1-.55*r);
    E.gl2.forEach(function(el,i){op(el,b*.55*sm(seg(p,.76+i*.012,.9+i*.012)))});
    op(E.lCat,b*(1-seg(p,.08,.16)));
    op(E.lAB,b*seg(p,.14,.22)*(1-seg(p,.34,.4)));
    op(E.lLes,b*(1-seg(p,.4,.46)));
    op(E.lGel,b*seg(p,.58,.66));
    op(E.lSub,b);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
