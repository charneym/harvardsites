/* The story scene (BL/BY/DB): Emmyon's own systems-based discovery platform (emmyon.com/platform), as ONE continuous scene.
   Top: an engraved cross-section of skeletal muscle fibres, kept on screen for all three steps. Bottom: an mRNA expression
   signature strip. Step 1: in human muscle atrophy the fibres shrink and the gaps between them open, and the biopsies give
   the atrophy signature (genes up, genes down). Step 2: Emmyon searches for small molecules whose signature is the
   opposite; the mirror-image bars of ursolic acid rise against each atrophy bar. Step 3: in mouse models of atrophy the
   compound acts directly on muscle, the fibres regain their size and the atrophy signature falls back toward baseline.
   Every element is driven by the scrubbed story progress. Sources: emmyon.com/platform, /natural-compounds, and the
   Cell Metabolism 2011 paper they cite ("mRNA expression signatures of human skeletal muscle atrophy identify a natural
   compound that increases muscle mass"). */
var SCW=760,SCH=520;
function fibres(){
  var s=20110601,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  var X0=24,X1=736,Y0=20,Y1=292,cols=10,rows=4,pts=[],i,j;
  for(j=0;j<rows;j++)for(i=0;i<cols;i++){
    var off=(j%2)*.5;
    pts.push([X0+(X1-X0)*((i+.25+off*.9+R()*.5)/cols),Y0+(Y1-Y0)*((j+.2+R()*.6)/rows)]);
  }
  /* Voronoi by half-plane clipping inside the frame (Sutherland–Hodgman), ~40 fibres */
  function clip(poly,a,b){var out=[],nx=b[0]-a[0],ny=b[1]-a[1],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
    var f=function(p){return (p[0]-mx)*nx+(p[1]-my)*ny};
    for(var k=0;k<poly.length;k++){var P=poly[k],Q=poly[(k+1)%poly.length],fp=f(P),fq=f(Q);
      if(fp<=0)out.push(P);
      if((fp<0&&fq>0)||(fp>0&&fq<0)){var t=fp/(fp-fq);out.push([P[0]+(Q[0]-P[0])*t,P[1]+(Q[1]-P[1])*t])}}
    return out}
  return pts.map(function(p,k){var poly=[[X0,Y0],[X1,Y0],[X1,Y1],[X0,Y1]];
    pts.forEach(function(q,m){if(m!==k)poly=clip(poly,p,q)});
    var cx=0,cy=0;poly.forEach(function(v){cx+=v[0];cy+=v[1]});cx/=poly.length;cy/=poly.length;
    return {poly:poly,cx:cx,cy:cy,t:R(),na:R()*Math.PI*2,edge:p[0]<X0+40||p[0]>X1-40||p[1]<Y0+30||p[1]>Y1-30}});
}
var FIB=fibres();
/* the atrophy signature: 26 genes, up (+) or down (−), seeded */
var SIG=(function(){var s=2011,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<26;i++){var v=(.35+.65*R())*(R()<.5?-1:1);a.push(v)}return a})();
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="fclip"><rect x="24" y="20" width="712" height="272"/></clipPath></defs>';
  /* ---- base: frame ticks, the signature baseline and its captions ---- */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M24 20H736M24 292H736"/>';
  g+='<path class="bl sD" d="M24 420H736"/>';
  g+='<text class="t" x="24" y="10">SKELETAL MUSCLE · CROSS-SECTION</text>';
  g+='<text class="t" x="24" y="'+(SCH-6)+'">mRNA EXPRESSION SIGNATURE</text>';
  g+='</g>';
  /* ---- the fibres: one group per fibre (body + nucleus), scaled about its own centre ---- */
  g+='<g id="scFib" clip-path="url(#fclip)">';
  FIB.forEach(function(c,k){
    var d='M'+c.poly.map(function(v){return f(v[0]-c.cx)+' '+f(v[1]-c.cy)}).join('L')+'Z';
    var nx=Math.cos(c.na),ny=Math.sin(c.na),rr=9999;
    /* nucleus just inside the sarcolemma, toward its hashed angle */
    c.poly.forEach(function(v){var dx=v[0]-c.cx,dy=v[1]-c.cy,L=Math.sqrt(dx*dx+dy*dy);rr=Math.min(rr,L)});
    var nr=rr*.72;
    g+='<g class="fb'+(c.t<.3?' f1':c.t<.65?' f2':' f3')+'" data-k="'+k+'" transform="translate('+f(c.cx)+' '+f(c.cy)+')"><path class="fp" d="'+d+'"/><ellipse class="nu" cx="'+f(nx*nr)+'" cy="'+f(ny*nr)+'" rx="5.2" ry="3.2" transform="rotate('+f(c.na*180/Math.PI+90)+' '+f(nx*nr)+' '+f(ny*nr)+')"/></g>';
  });
  g+='</g>';
  /* ---- the signature bars: atrophy (accent) and the compound's mirror image (bone) ---- */
  g+='<g id="scSig">';
  var bw=o.mob?16:13,x0=48,dx=(712-48)/(SIG.length-1);
  SIG.forEach(function(v,i){var x=x0+i*dx;
    g+='<rect class="ba" data-v="'+v.toFixed(3)+'" x="'+f(x-bw-1)+'" y="420" width="'+bw+'" height="0"/>';
    g+='<rect class="bc" data-v="'+(-v).toFixed(3)+'" x="'+f(x+1)+'" y="420" width="'+bw+'" height="0"/>';
  });
  g+='</g>';
  /* ---- step labels (fade with their step); they sit in the clear band between the fibres and the bars ---- */
  var lx=o.mob?24:24;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="330">ATROPHY SIGNATURE · HUMAN BIOPSIES</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="330">URSOLIC ACID · THE OPPOSITE SIGNATURE</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="330">FIBRES RESTORED · SIGNATURE REVERSED</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    fb:$$(".fb",svg).map(function(el){var k=+el.getAttribute("data-k"),c=FIB[k];return {el:el,c:c,nu:$(".nu",el),k:k}}),
    ba:$$(".ba",svg).map(function(r){return {el:r,v:+r.getAttribute("data-v")}}),
    bc:$$(".bc",svg).map(function(r){return {el:r,v:+r.getAttribute("data-v")}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,H=62;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function bar(r,h){var y=h>=0?420-h:420;r.el.setAttribute("y",y.toFixed(1));r.el.setAttribute("height",Math.abs(h).toFixed(1))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the fibres engrave in first at full size; step 1 they shrink (atrophy), step 3 they regain their size */
    var grow=seg(p,0,.14),atro=seg(p,.12,.32),heal=seg(p,.7,.9);
    var s=1-.3*atro*(1-heal)+.03*heal;
    E.fb.forEach(function(F,i){
      var gi=Math.min(1,Math.max(0,grow*1.8-(i%10)*.05-(Math.floor(i/10))*.06));
      var si=s*(1-.04*(F.c.t-.5)*atro*(1-heal));
      F.el.setAttribute("transform","translate("+F.c.cx.toFixed(1)+" "+F.c.cy.toFixed(1)+") scale("+(si*(.94+.06*gi)).toFixed(4)+")");
      op(F.el,b*gi);
    });
    /* the atrophy signature rises with step 1, the compound's mirror image with step 2; step 3 both settle toward baseline */
    var aIn=seg(p,.16,.34),cIn=seg(p,.4,.58),rev=seg(p,.72,.92);
    E.ba.forEach(function(r,i){var gi=Math.min(1,Math.max(0,aIn*1.7-i*.028));bar(r,r.v*H*gi*(1-.78*rev));op(r.el,b*(gi>0?1:0))});
    E.bc.forEach(function(r,i){var gi=Math.min(1,Math.max(0,cIn*1.7-i*.028));bar(r,r.v*H*gi*(1-.78*rev));op(r.el,b*(gi>0?1:0)*(1-.35*rev))});
    op(E.l1,b*seg(p,.2,.28)*(1-seg(p,.36,.42)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
