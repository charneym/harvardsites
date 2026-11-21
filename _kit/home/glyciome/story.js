/* The story scene (BL/BY/DB): how PreBioGyn works, as ONE continuous engraved scene, every element driven by the scrubbed
   story progress. Bottom: a cross-section of the vaginal epithelium (stacked squamous cells with their nuclei) under the
   surface line. Above it, the genital ecosystem. Step 1 (balance): rod-shaped beneficial bacteria populate the surface.
   Step 2 (disruption): in bacterial vaginosis harmful bacteria (cocci, in clusters) take over, the beneficial rods dwindle and
   the surface cells roughen. Step 3 (support): a layer of prebiotic gel settles over the surface, the harmful clusters fade
   and the beneficial population returns. Sources: glyciome.com (mission, research.html), NIH RePORTER 2R44CA254543. */
var SCW=760,SCH=520;
var GX0=24,GX1=736,SURF=356;
function rnd(seed){var s=seed;return function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}}
var CELLS=(function(){var R=rnd(2017),a=[],rows=[[SURF+4,16,30],[SURF+36,13,34],[SURF+74,11,38]];
  rows.forEach(function(r,j){var y=r[0],n=r[1],hh=r[2],w=(GX1-GX0)/n,off=(j%2)*w*.5;
    for(var i=-1;i<n;i++){var x=GX0+off+i*w;if(x+w<GX0+6||x>GX1-6)continue;var x0=Math.max(GX0,x+2),x1=Math.min(GX1,x+w-2);if(x1-x0<18)continue;
      var t=R(),h=hh-4;a.push({x0:x0,x1:x1,y:y,h:h,j:j,t:t,nx:(x0+x1)/2+(R()-.5)*8,ny:y+h*.5+(R()-.5)*4,k:a.length})}});
  return a})();
var RODS=(function(){var R=rnd(4401),a=[];for(var i=0;i<30;i++){var x=GX0+30+R()*(GX1-GX0-60),y=110+Math.pow(R(),.7)*228;
  a.push({x:x,y:y,a:(R()-.5)*70+(R()<.5?0:90),l:20+R()*12,keep:R()<.3,t:R()})}return a})();
var COCCI=(function(){var R=rnd(911),a=[],cl=[[150,250],[330,300],[520,210],[640,305],[250,170],[430,335],[90,320],[600,140]];
  cl.forEach(function(c,ci){var n=6+Math.floor(R()*5);for(var i=0;i<n;i++){var ang=R()*Math.PI*2,r=R()*18;
    a.push({x:c[0]+Math.cos(ang)*r,y:Math.min(SURF-8,c[1]+Math.sin(ang)*r*.8),r:3.6+R()*1.6,ci:ci,t:R()})}});return a})();
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="gclip"><rect x="'+GX0+'" y="60" width="'+(GX1-GX0)+'" height="'+(SURF-60)+'"/></clipPath>'+
     '<linearGradient id="gelg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgb(59,184,216)" stop-opacity=".04"/><stop offset=".55" stop-color="rgb(59,184,216)" stop-opacity=".16"/><stop offset="1" stop-color="rgb(59,184,216)" stop-opacity=".26"/></linearGradient></defs>';
  /* ---- base: the frame rules and captions ---- */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M'+GX0+' 60H'+GX1+'M'+GX0+' 494H'+GX1+'"/>';
  g+='<text class="t" x="'+GX0+'" y="'+(SCH-6)+'">VAGINAL EPITHELIUM · CROSS-SECTION</text>';
  g+='</g>';
  /* ---- the gel layer (step 3), settling down onto the surface ---- */
  g+='<g clip-path="url(#gclip)"><g id="scGel"><path class="gel" d="M'+GX0+' 92C150 78 250 104 380 90S610 78 '+GX1+' 94V'+SURF+'H'+GX0+'Z"/>'+
     '<path class="gelt" d="M'+GX0+' 92C150 78 250 104 380 90S610 78 '+GX1+' 94"/></g></g>';
  /* ---- the epithelium ---- */
  g+='<g id="scCell">';
  CELLS.forEach(function(c){var r=Math.min(10,c.h*.4);
    var d='M'+f(c.x0+r)+' '+f(c.y)+'H'+f(c.x1-r)+'Q'+f(c.x1)+' '+f(c.y)+' '+f(c.x1)+' '+f(c.y+r)+'V'+f(c.y+c.h-r)+'Q'+f(c.x1)+' '+f(c.y+c.h)+' '+f(c.x1-r)+' '+f(c.y+c.h)+'H'+f(c.x0+r)+'Q'+f(c.x0)+' '+f(c.y+c.h)+' '+f(c.x0)+' '+f(c.y+c.h-r)+'V'+f(c.y+r)+'Q'+f(c.x0)+' '+f(c.y)+' '+f(c.x0+r)+' '+f(c.y)+'Z';
    g+='<g class="ce j'+c.j+'" data-k="'+c.k+'"><path class="cp" d="'+d+'"/><ellipse class="cn" cx="'+f(c.nx)+'" cy="'+f(c.ny)+'" rx="'+f(5+c.j*1.2)+'" ry="'+f(2.6+c.j*.9)+'"/></g>';
  });
  g+='<path class="srf sD" d="M'+GX0+' '+SURF+'H'+GX1+'"/>';
  g+='</g>';
  /* ---- the microbiome: beneficial rods, harmful cocci ---- */
  g+='<g id="scRod">';
  RODS.forEach(function(b,i){g+='<rect class="rod" data-i="'+i+'" x="'+f(-b.l/2)+'" y="-3.6" width="'+f(b.l)+'" height="7.2" rx="3.6" transform="translate('+f(b.x)+' '+f(b.y)+') rotate('+f(b.a)+')"/>'});
  g+='</g><g id="scCoc">';
  COCCI.forEach(function(c,i){g+='<circle class="coc" data-i="'+i+'" cx="'+f(c.x)+'" cy="'+f(c.y)+'" r="'+f(c.r)+'"/>'});
  g+='</g>';
  /* ---- step labels, in the clear band above the frame ---- */
  g+='<g id="lb1"><text class="a" x="'+GX0+'" y="40">BALANCE · BENEFICIAL MICROBIOME</text></g>';
  g+='<g id="lb2"><text class="a" x="'+GX0+'" y="40">BACTERIAL VAGINOSIS · HARMFUL BACTERIA</text></g>';
  g+='<g id="lb3"><text class="a" x="'+GX0+'" y="40">PREBIOGYN · PREBIOTIC SUPPORT</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD, #scCell .srf"),fade:$$("#scBase text",svg),
    ce:$$(".ce",svg).map(function(el){return {el:el,c:CELLS[+el.getAttribute("data-k")]}}),
    rod:$$(".rod",svg).map(function(el){var b=RODS[+el.getAttribute("data-i")];return {el:el,b:b}}),
    coc:$$(".coc",svg).map(function(el){return {el:el,c:COCCI[+el.getAttribute("data-i")]}}),
    gel:$("#scGel",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.16),dis=seg(p,.3,.52),gel=seg(p,.6,.8),heal=seg(p,.7,.92);
    /* the cells engrave in from the surface down; in BV the surface row roughens (shrinks and dims), then recovers */
    E.ce.forEach(function(C,i){var gi=cl(grow*1.8-C.c.j*.22-(C.c.x0-GX0)/(GX1-GX0)*.35);
      var hurt=C.c.j===0?dis*(1-heal)*(.55+.45*C.c.t):0;
      var cx=(C.c.x0+C.c.x1)/2,cy=C.c.y+C.c.h/2,s=1-.12*hurt;
      C.el.setAttribute("transform","translate("+cx.toFixed(1)+" "+cy.toFixed(1)+") scale("+(s*(.96+.04*gi)).toFixed(4)+" "+(s).toFixed(4)+") translate("+(-cx).toFixed(1)+" "+(-cy).toFixed(1)+")");
      op(C.el,b*gi*(1-.45*hurt));
    });
    /* the beneficial rods: in from step 1, most fade in BV (the hardy third hold on), all return with the gel */
    E.rod.forEach(function(R){var gi=cl(seg(p,0,.1)*1.6-R.b.t*.6);var lost=R.b.keep?0:cl(dis*1.5-R.b.t*.5)*(1-cl(heal*1.5-R.b.t*.5));
      op(R.el,b*gi*(1-lost));});
    /* the harmful cocci: bloom cluster by cluster in BV, fade under the prebiotic gel */
    E.coc.forEach(function(Q){var gi=cl(dis*1.7-Q.c.ci*.08-Q.c.t*.12),out=cl(heal*1.6-Q.c.t*.4);
      Q.el.setAttribute("r",(Q.c.r*(.4+.6*gi)).toFixed(2));op(Q.el,b*gi*(1-out));});
    /* the gel settles from above onto the surface */
    if(E.gel){E.gel.setAttribute("transform","translate(0 "+(-(1-gel)*260).toFixed(1)+")");op(E.gel,b*gel)}
    op(E.l1,b*seg(p,.02,.08)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.58,.64)));op(E.l3,b*seg(p,.76,.84));
  };
}
