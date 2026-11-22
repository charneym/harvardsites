/* The story scene (BL/BY/DB): how a CELLvo(TM) Matrix is made and used (stembiosys.com /chondrocytes, /cellvo-matrix-
   technology, /company-history), as ONE continuous engraved cross-section of a culture-vessel surface. Step 1: young
   donor cells on the plastic secrete and assemble their own extracellular matrix (fibres draw in beneath and around
   them). Step 2: the cells are gently extracted (they lift and fade), leaving the native three-dimensional matrix
   intact. Step 3: the customer's cells settle onto the matrix and spread into it, responding to the niche instead of
   the plastic. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,BASE=436,TOPM=96;
var STO=(function(){
  var s=1957,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},i;
  /* matrix fibres: long wavy strands lying in a band above the plastic */
  var fib=[];
  for(i=0;i<78;i++){var y0=TOPM+20+R()*(BASE-TOPM-28),y1=TOPM+20+R()*(BASE-TOPM-28),x0=-60+R()*300,x1=x0+300+R()*520,l1=(R()-.5)*120,l2=(R()-.5)*120;
    if(R()<.3){y1=y0+(R()-.5)*60}
    fib.push({d:"M"+x0.toFixed(1)+" "+y0.toFixed(1)+"C"+(x0+(x1-x0)*.33).toFixed(1)+" "+(y0+l1).toFixed(1)+" "+(x0+(x1-x0)*.66).toFixed(1)+" "+(y1+l2).toFixed(1)+" "+x1.toFixed(1)+" "+y1.toFixed(1),t:R(),w:.6+R()*1.2})}
  /* donor cells sit through the depth of the matrix they build; seeded cells settle into it later */
  var don=[],sd=[],DP=[[110,170],[300,140],[520,180],[660,250],[200,290],[420,300],[600,380],[130,400]],SP=[[150,150],[380,190],[610,160],[260,330],[500,270],[680,330],[120,280],[420,395]];
  for(i=0;i<DP.length;i++)don.push({x:DP[i][0]+(R()-.5)*20,y:DP[i][1]+(R()-.5)*16,rx:44+R()*14,ry:17+R()*5,t:i/DP.length});
  for(i=0;i<SP.length;i++)sd.push({x:SP[i][0]+(R()-.5)*20,y:SP[i][1]+(R()-.5)*16,rx:52+R()*16,ry:14+R()*5,t:i/SP.length,a:(R()-.5)*.5});
  return {fib:fib,don:don,sd:sd};
})();
function cellG(c,cls,k){
  return '<g class="'+cls+'" data-k="'+k+'"><ellipse class="cb" cx="0" cy="0" rx="'+c.rx.toFixed(1)+'" ry="'+c.ry.toFixed(1)+'"/>'+
   '<ellipse class="nu" cx="'+(c.rx*.08).toFixed(1)+'" cy="-1" rx="'+(c.rx*.3).toFixed(1)+'" ry="'+(c.ry*.55).toFixed(1)+'"/>'+
   '<path class="pr" d="M'+(c.rx-4).toFixed(1)+' 0q'+(c.rx*.4).toFixed(1)+' 3 '+(c.rx*.7).toFixed(1)+' 10M'+(-c.rx+4).toFixed(1)+' 0q'+(-c.rx*.4).toFixed(1)+' 3 '+(-c.rx*.7).toFixed(1)+' 9"/></g>'}
function memScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="scClip"><rect x="24" y="'+(TOPM-20)+'" width="712" height="'+(BASE-TOPM+20)+'"/></clipPath></defs>';
  g+='<g id="scBase"><path class="frm sD" d="M24 '+BASE+'H736"/><path class="bl sD" d="M24 '+(BASE+10)+'H736M24 '+(BASE+20)+'H736"/>';
  g+='<text class="t" x="24" y="'+(BASE+42)+'">TISSUE CULTURE SURFACE · CROSS-SECTION, SCHEMATIC</text></g>';
  g+='<g clip-path="url(#scClip)"><g id="scFib">';
  STO.fib.forEach(function(f,k){g+='<path class="fb" data-k="'+k+'" d="'+f.d+'" style="stroke-width:'+f.w.toFixed(2)+'"/>'});
  g+='</g><g id="scDon">';STO.don.forEach(function(c,k){g+=cellG(c,"dn",k)});
  g+='</g><g id="scSd">';STO.sd.forEach(function(c,k){g+=cellG(c,"sd",k)});g+='</g></g>';
  g+='<g id="lb1"><text class="a" x="24" y="44">DONOR CELLS BUILD THEIR OWN MATRIX</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="44">CELLS EXTRACTED · MATRIX LEFT INTACT</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="44">YOUR CELLS IN A NATIVE NICHE</text></g>';
  g+='<text class="t k1" x="24" y="'+(BASE+70)+'">● EXTRACELLULAR MATRIX</text><text class="t k2" x="'+(o.mob?330:250)+'" y="'+(BASE+70)+'">● YOUR CELLS</text>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, .k1, .k2",svg),
    fb:$$(".fb",svg).map(function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;return {el:el,F:STO.fib[+el.getAttribute("data-k")],L:L}}),
    dn:$$(".dn",svg).map(function(el){return {el:el,c:STO.don[+el.getAttribute("data-k")]}}),
    sd:$$(".sd",svg).map(function(el){return {el:el,c:STO.sd[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var arrive=seg(p,0,.12),build=seg(p,.06,.32),lift=seg(p,.38,.6),seed=seg(p,.68,.9),spread=seg(p,.78,.96);
    /* donor cells settle on the plastic, then lift away and fade in step 2 */
    E.dn.forEach(function(x){var c=x.c,a=cl(arrive*1.6-c.t*.5),l=cl(lift*1.5-c.t*.45);
      x.el.setAttribute("transform","translate("+c.x.toFixed(1)+" "+(c.y-26*(1-a)-110*l*l).toFixed(1)+")");op(x.el,b*a*(1-l))});
    /* the matrix draws in under them, and stays */
    E.fb.forEach(function(f){var g2=cl(build*1.5-f.F.t*.5);f.el.style.strokeDashoffset=(f.L*(1-g2)).toFixed(1);op(f.el,b*(.25+.75*g2))});
    /* the customer's cells settle and spread into the matrix */
    E.sd.forEach(function(x){var c=x.c,a=cl(seed*1.6-c.t*.5),sp=cl(spread*1.5-c.t*.4);
      x.el.setAttribute("transform","translate("+c.x.toFixed(1)+" "+(c.y-90*(1-a)*(1-a)+10*sp).toFixed(1)+") rotate("+(c.a*57.3*sp).toFixed(1)+") scale("+(0.72+.28*sp).toFixed(3)+" "+(1.25-.25*sp).toFixed(3)+")");op(x.el,b*a)});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
