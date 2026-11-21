/* the story scene (BL/BY/DB): ONE engraved stretch of cell membrane, kept on screen for all three steps.
   Step 1 the lipid bilayer draws in and five syndecans appear: each a core protein crossing the membrane, with heparan sulfate
   chains (beaded sugar chains) on the outside and a short tail inside.
   Step 2 a large cargo (a protein or nucleic acid drug) settles on the chains of the middle syndecan, the membrane folds in and the
   cargo is carried into the cell in a vesicle: syndecan-4 delivery (US8647828B2), aimed at the brain via syndecan-3 (EP3911362A1).
   Step 3 the syndecan-3 molecules light up and a level gauge fills: SYNEAD's syndecan-3 based blood test for early Alzheimer's
   (CORDIS 101308627; Hudak et al., IJMS 2022). Sources: pharmacoidea.eu/tech/. Schematic; not to scale. Driven by the scrubbed story progress. */
var MEM={y:330,xs:[150,275,400,525,650],x0:40,x1:760};
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k,Y=MEM.y;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'95 40 612 500':'0 0 800 560')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="pglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2ea3dc" stop-opacity=".14"/><stop offset="1" stop-color="#2ea3dc" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase"><ellipse class="pg" cx="400" cy="300" rx="380" ry="240" fill="url(#pglow)"/>';
  /* the bilayer: two leaflets of lipid heads with tails, interrupted where the cargo enters (x 360-440 handled by the dip path) */
  function leaf(y,dir){var s='';for(var x=MEM.x0;x<=MEM.x1;x+=14){if(Math.abs(x-400)<44)continue;
    s+='<circle class="lh sD" cx="'+x+'" cy="'+y+'" r="4.6"/><path class="lt sD" d="M'+(x-1.6)+' '+(y+dir*5)+'L'+(x-1.6)+' '+(y+dir*17)+'M'+(x+1.6)+' '+(y+dir*5)+'L'+(x+1.6)+' '+(y+dir*17)+'"/>'}return s}
  g+=leaf(Y-22,1)+leaf(Y+22,-1);
  /* the stretch around the entry site, drawn as a line that dips into the cell in step 2 */
  for(k=0;k<6;k++)g+='<circle class="lh dh dO" cx="0" cy="0" r="4.6"/><circle class="lh dh dI" cx="0" cy="0" r="4.6"/>';
  g+='<text class="t" x="'+(mob?110:60)+'" y="'+(mob?70:86)+'">OUTSIDE THE CELL</text><text class="t" x="'+(mob?110:60)+'" y="'+(Y+86)+'">INSIDE THE CELL</text>';
  if(!mob)g+='<text class="bl" x="600" y="'+(Y+86)+'" text-anchor="start">CELL MEMBRANE</text>';
  g+='</g>';
  /* syndecans: core protein, a tail inside, three beaded heparan sulfate chains outside */
  g+='<g id="syn">';
  MEM.xs.forEach(function(x,j){
    var is3=(j===1||j===3),mid=(j===2);
    g+='<g class="sy'+(is3?' s3':'')+(mid?' sm':'')+'">';
    g+='<path class="core sD" d="M'+x+' '+(Y+40)+'C'+(x-6)+' '+(Y+20)+' '+(x+6)+' '+(Y-10)+' '+x+' '+(Y-40)+'L'+x+' '+(Y-132)+'"/>';
    g+='<rect class="tm sD" x="'+(x-5)+'" y="'+(Y-22)+'" width="10" height="44"/>';
    [[-1,-80,-0.9],[1,-104,0.6],[-1,-126,-0.2]].forEach(function(c,q){
      var sx=x,sy=Y+c[1],ex=x+c[0]*(40+q*6),ey=sy-96-q*12,d='M'+sx+' '+sy+'C'+f(sx+c[0]*30)+' '+f(sy-10)+' '+f(ex-c[0]*20)+' '+f(ey+30)+' '+f(ex)+' '+f(ey);
      g+='<path class="hs sD" d="'+d+'"/>';
      for(var t=.2;t<1.01;t+=.2){var u=1-t,bx=u*u*u*sx+3*u*u*t*(sx+c[0]*30)+3*u*t*t*(ex-c[0]*20)+t*t*t*ex,by=u*u*u*sy+3*u*u*t*(sy-10)+3*u*t*t*(ey+30)+t*t*t*ey;
        g+='<circle class="bd" cx="'+f(bx)+'" cy="'+f(by)+'" r="3"/>'}
    });
    g+='</g>';
  });
  var lx=MEM.xs[4];
  if(!mob){
    g+='<path class="ldr" d="M'+(lx+14)+' '+(Y-70)+'L'+(lx+46)+' '+(Y-70)+'"/><text class="bl" x="'+(lx+54)+'" y="'+(Y-66)+'">SYNDECAN</text>';
    g+='<path class="ldr" d="M'+(lx+50)+' '+(Y-210)+'L'+(lx+70)+' '+(Y-210)+'"/><text class="bl" x="'+(lx+78)+'" y="'+(Y-214)+'">HEPARAN SULFATE</text><text class="bl" x="'+(lx+78)+'" y="'+(Y-198)+'">CHAINS</text>';
  }else{
    g+='<text class="bl" x="'+lx+'" y="'+(Y+72)+'" text-anchor="middle">SYNDECAN</text>';
    g+='<text class="bl" x="700" y="70" text-anchor="end">SUGAR CHAINS</text>';
  }
  g+='</g>';
  /* step 2: the cargo */
  g+='<g id="cg"><g id="cgo"><circle class="cargo" cx="0" cy="0" r="26"/><path class="cgl" d="M-14 -6C-6 -16 6 -16 14 -6M-14 6C-6 16 6 16 14 6"/></g>';
  g+='<circle id="ves" class="ves" cx="400" cy="'+(Y+120)+'" r="40"/>';
  g+='<text id="cgt" class="a" x="'+(mob?405:250)+'" y="'+(mob?70:78)+'"'+(mob?' text-anchor="middle"':'')+'>'+(mob?'LARGE DRUG':'CARGO: A PROTEIN OR NUCLEIC ACID')+'</text>';
  g+='<text id="vst" class="bl" x="460" y="'+(Y+178)+'">'+(mob?'INTO THE CELL':'CARRIED INTO THE CELL')+'</text></g>';
  /* step 3: syndecan-3 lit, a level gauge */
  g+='<g id="dx"><text class="a" x="'+MEM.xs[1]+'" y="'+(Y+122)+'" text-anchor="middle">SYNDECAN-3</text><text class="a" x="'+MEM.xs[3]+'" y="'+(Y+122)+'" text-anchor="middle">SYNDECAN-3</text>';
  var GX=mob?480:660,GY=505;
  g+='<path class="gtr" d="M'+(GX-110)+' '+GY+'H'+(GX+110)+'"/><path id="gfl" class="gfl" d="M'+(GX-110)+' '+GY+'H'+(GX+60)+'"/>';
  for(i=0;i<=4;i++)g+='<path class="gtk" d="M'+(GX-110+i*55)+' '+(GY+10)+'V'+(GY+18)+'"/>';
  g+='<text class="t" x="'+(GX-110)+'" y="'+(GY-16)+'">'+(mob?'SDC3 IN BLOOD':'SYNDECAN-3 LEVEL IN BLOOD')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var Y=MEM.y,E={base:dl("#scBase .sD"),heads:$$("#scBase .lh",svg),fade:$$("#scBase text, #scBase .pg",svg),syn:$$("#syn .sy",svg),synL:$$("#syn > path, #syn > text",svg),
    cg:$("#cg",svg),cgo:$("#cgo",svg),ves:$("#ves",svg),cgt:$("#cgt",svg),vst:$("#vst",svg),
    dx:$("#dx",svg),s3:$$("#syn .s3",svg),sm:$("#syn .sm",svg),gf:dl("#gfl")};
  var synD=$$("#syn .sy",svg).map(function(g){return $$(".sD",g).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]})});
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  var dO=$$(".dO",svg),dI=$$(".dI",svg);
  function bz(p0,p1,p2,p3,t){var u=1-t;return u*u*u*p0+3*u*u*t*p1+3*u*t*t*p2+t*t*t*p3}
  function dip(d){ /* the heads across the entry site follow the membrane as it folds in by depth d (0..1) */
    var D=d*70;
    [[dO,Y-22,1,.2],[dI,Y+22,1.15,.3]].forEach(function(L){var y0=L[1],dd=D*L[2];
      L[0].forEach(function(c,k){var t=(k+.5)/6,x,y;
        if(t<.5){var u=t*2;x=bz(356,380,372,400,u);y=bz(y0,y0+D*L[3],y0+dd,y0+dd,u)}else{var v=(t-.5)*2;x=bz(400,428,420,444,v);y=bz(y0+dd,y0+dd,y0+D*L[3],y0,v)}
        c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1))})})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.heads.forEach(function(el){el.style.opacity=b.toFixed(3)});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});dO.concat(dI).forEach(function(c){c.style.opacity=b.toFixed(3)})}
    /* step 1: syndecans draw in one after another */
    synD.forEach(function(L,k){var q=seg(b,.25+k*.1,.7+k*.06);draw(L,q);$$(".bd",E.syn[k]).forEach(function(c){c.style.opacity=(q>.6?seg(q,.6,1):0).toFixed(3)})});
    E.synL.forEach(function(el){op(el,seg(b,.8,1)*(1-.6*seg(p,.66,.74)))});
    /* step 2: the cargo arrives on the middle syndecan, the membrane folds in, the vesicle carries it inside */
    var a=seg(p,.34,.44),inn=seg(p,.46,.58),out=1-seg(p,.64,.7);
    op(E.cg,b*seg(p,.32,.38)*out);
    var cy=(Y-210)+a*(Y-150-(Y-210))+inn*((Y+120)-(Y-150));
    E.cgo.setAttribute("transform","translate(400 "+cy.toFixed(1)+")");
    dip(Math.sin(Math.min(inn*1.6,1)*Math.PI*.5)*(1-seg(inn,.7,1))*1);
    op(E.ves,seg(inn,.75,1));op(E.vst,seg(inn,.8,1));op(E.cgt,1-seg(inn,.3,.6));
    E.sm.style.opacity=(1-.5*seg(p,.66,.74)).toFixed(3);
    /* step 3: syndecan-3 lights, the others step back, the level gauge fills */
    var s3=seg(p,.68,.78);op(E.dx,b*s3);
    E.s3.forEach(function(g){g.classList.toggle("on",s3>.5)});
    E.syn.forEach(function(g,k){if(k!==1&&k!==3&&k!==2)g.style.opacity=(1-.55*s3).toFixed(3)});
    draw(E.gf,seg(p,.78,.94));
  };
}
