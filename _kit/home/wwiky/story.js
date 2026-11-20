/* The story scene (DB): WWiKY's one-drug theranostic approach (wwiky.com/vision, /imaging-and-therapy, /market-opportunities,
   and Dr. Weinfeld's bio: "compounds such as nitroimidazoles are selectively activated in hypoxic cells and bind to cellular
   constituents; radioactive isotope labeling of such compounds thus presents an opportunity to image and treat hypoxic tumour
   cells"), drawn as ONE continuous engraved scene. Top: a cross-section of a solid tumour fed by a capillary on the left; the
   cells far from the vessel run short of oxygen. Bottom: uptake over time in the hypoxic tumour and in healthy tissue.
   1 Hypoxia: the oxygen-starved cells darken away from the vessel. 2 Image: the radiolabelled drug leaves the vessel, washes
   out of well-oxygenated cells and is retained in the hypoxic ones, which light up (PET or SPECT). 3 Dose: the patient's own
   image-based uptake and clearance (the curves) set an individual therapeutic dose. 4 Treat: therapeutic doses of the same
   drug act on the same hypoxic cells. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var TX0=92,TX1=736,TY0=26,TY1=318;
function tcells(){
  var s=20250701,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  var cols=11,rows=5,pts=[],i,j;
  for(j=0;j<rows;j++)for(i=0;i<cols;i++){var off=(j%2)*.5;
    pts.push([TX0+(TX1-TX0)*((i+.2+off*.8+R()*.55)/cols),TY0+(TY1-TY0)*((j+.2+R()*.6)/rows)])}
  function clip(poly,a,b){var out=[],nx=b[0]-a[0],ny=b[1]-a[1],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
    var f=function(p){return (p[0]-mx)*nx+(p[1]-my)*ny};
    for(var k=0;k<poly.length;k++){var P=poly[k],Q=poly[(k+1)%poly.length],fp=f(P),fq=f(Q);
      if(fp<=0)out.push(P);
      if((fp<0&&fq>0)||(fp>0&&fq<0)){var t=fp/(fp-fq);out.push([P[0]+(Q[0]-P[0])*t,P[1]+(Q[1]-P[1])*t])}}
    return out}
  return pts.map(function(p,k){var poly=[[TX0,TY0],[TX1,TY0],[TX1,TY1],[TX0,TY1]];
    pts.forEach(function(q,m){if(m!==k)poly=clip(poly,p,q)});
    var cx=0,cy=0;poly.forEach(function(v){cx+=v[0];cy+=v[1]});cx/=poly.length;cy/=poly.length;
    var rr=9999;poly.forEach(function(v){rr=Math.min(rr,Math.hypot(v[0]-cx,v[1]-cy))});
    /* oxygen falls with distance from the capillary; a little jitter so the border is organic */
    var d=(cx-TX0)/(TX1-TX0),hy=Math.max(0,Math.min(1,(d-.36)/.42+(R()-.5)*.22));
    return {poly:poly,cx:cx,cy:cy,rr:rr,hy:hy,na:R()*Math.PI*2,t:R()}});
}
var TC=tcells();
/* tracer molecules: each leaves the vessel for one cell; retained where that cell is hypoxic, washed out where it is not */
var TR=(function(){var s=88,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<84;i++){var c=TC[Math.floor(R()*TC.length)];var ang=R()*Math.PI*2,rad=c.rr*.55*Math.sqrt(R());
    a.push({y0:TY0+12+R()*(TY1-TY0-24),tx:c.cx+Math.cos(ang)*rad,ty:c.cy+Math.sin(ang)*rad,c:c,d:R()})}return a})();
function tumScene(o){
  var f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="tclip"><rect x="'+TX0+'" y="'+TY0+'" width="'+(TX1-TX0)+'" height="'+(TY1-TY0)+'"/></clipPath>'+
     '<linearGradient id="o2g" x1="0" x2="1"><stop offset="0" stop-color="#f6f0e8" stop-opacity=".0"/><stop offset=".45" stop-color="#140e0d" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M'+TX0+' '+TY0+'H'+TX1+'M'+TX0+' '+TY1+'H'+TX1+'"/>';
  /* the capillary: two walls, red cells in the lumen */
  g+='<path class="vw sD" d="M30 '+TY0+'C36 90 26 170 34 250S30 300 32 '+TY1+'"/><path class="vw sD" d="M80 '+TY0+'C86 90 76 170 84 250S80 300 82 '+TY1+'"/>';
  for(var k=0;k<7;k++){var yy=TY0+24+k*40;g+='<ellipse class="rbc" cx="'+(56+(k%2?4:-4))+'" cy="'+yy+'" rx="11" ry="6" transform="rotate('+(k%2?18:-14)+' '+(56+(k%2?4:-4))+' '+yy+')"/>'}
  /* the chart axes */
  g+='<path class="ax sD" d="M'+TX0+' 380V488H'+TX1+'"/>';
  g+='<text class="t" x="'+TX0+'" y="14">SOLID TUMOUR · CROSS-SECTION</text>';
  if(!o.mob)g+='<text class="t" x="24" y="14">VESSEL</text>';
  g+='<text class="t" x="'+TX0+'" y="'+(SCH-8)+'">UPTAKE OVER TIME</text>';
  g+='<text class="t r" x="'+TX1+'" y="'+(SCH-8)+'">24 H</text>';
  g+='</g>';
  g+='<g id="scCells" clip-path="url(#tclip)">';
  TC.forEach(function(c,k){
    var d='M'+c.poly.map(function(v){return f(v[0]-c.cx)+' '+f(v[1]-c.cy)}).join('L')+'Z';
    var nx=Math.cos(c.na)*c.rr*.18,ny=Math.sin(c.na)*c.rr*.18;
    g+='<g class="cl" data-k="'+k+'" transform="translate('+f(c.cx)+' '+f(c.cy)+')"><path class="cf" d="'+d+'"/><path class="hx" d="'+d+'"/><path class="lt" d="'+d+'"/><path class="cp" d="'+d+'"/><circle class="nu" cx="'+f(nx)+'" cy="'+f(ny)+'" r="'+f(Math.max(3.5,c.rr*.24))+'"/></g>';
  });
  g+='<rect id="o2" x="'+TX0+'" y="'+TY0+'" width="'+(TX1-TX0)+'" height="'+(TY1-TY0)+'" fill="url(#o2g)" opacity="0"/>';
  g+='</g>';
  g+='<g id="scTr">';TR.forEach(function(){g+='<circle class="tr" r="2.6" cx="0" cy="0"/>'});g+='</g>';
  /* uptake curves: retained in the hypoxic tumour (gold), cleared from healthy tissue (bone) */
  var X=function(t){return TX0+8+(TX1-TX0-16)*t},Y=function(v){return 484-96*v},tu='',he='';
  for(var i=0;i<=60;i++){var t=i/60,hv=(1-Math.exp(-t*9))*Math.exp(-t*3.1),tv=(1-Math.exp(-t*6))*(.88+.04*t);
    tu+=(i?'L':'M')+f(X(t))+' '+f(Y(tv));he+=(i?'L':'M')+f(X(t))+' '+f(Y(hv*.95))}
  g+='<path id="cvH" class="cvh" d="'+he+'"/><path id="cvT" class="cvt" d="'+tu+'"/>';
  g+='<g id="cvL"><text class="lg" x="'+(TX1-6)+'" y="'+f(Y(.92)-10)+'" text-anchor="end">HYPOXIC TUMOUR</text><text class="lh" x="'+(TX1-6)+'" y="'+f(Y(.06)-8)+'" text-anchor="end">HEALTHY TISSUE</text></g>';
  /* the individual dose: a band on the tumour curve */
  g+='<g id="dose"><path class="db" d="M'+f(X(.62))+' 380V488M'+f(X(.98))+' 380V488"/><rect class="dr" x="'+f(X(.62))+'" y="380" width="'+f(X(.98)-X(.62))+'" height="108"/></g>';
  g+='<g id="lb1"><text class="a" x="'+TX0+'" y="352">LOW OXYGEN · AWAY FROM THE VESSEL</text></g>';
  g+='<g id="lb2"><text class="a" x="'+TX0+'" y="352">RETAINED IN HYPOXIC CELLS · PET / SPECT</text></g>';
  g+='<g id="lb3"><text class="a" x="'+TX0+'" y="352">IMAGE-BASED DOSIMETRY · ONE PATIENT</text></g>';
  g+='<g id="lb4"><text class="a" x="'+TX0+'" y="352">THERAPEUTIC DOSE · SAME DRUG</text></g>';
  return g+'</svg>';
}
function scene(){return tumScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .rbc",svg),
    cl:$$(".cl",svg).map(function(el){var c=TC[+el.getAttribute("data-k")];return {el:el,c:c,hx:$(".hx",el),lt:$(".lt",el),nu:$(".nu",el)}}),
    tr:$$(".tr",svg),o2:$("#o2",svg),cvT:dl("#cvT"),cvH:dl("#cvH"),cvL:$("#cvL",svg),dose:$("#dose",svg),
    l:[1,2,3,4].map(function(i){return $("#lb"+i,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.1),hyp=seg(p,.06,.2),img=seg(p,.28,.46),wash=seg(p,.4,.52),dose=seg(p,.54,.72),treat=seg(p,.78,.94);
    /* cells engrave in from the vessel outward; hypoxia darkens them away from it */
    E.cl.forEach(function(C,i){var c=C.c,gi=Math.min(1,Math.max(0,grow*2.2-((c.cx-TX0)/(TX1-TX0))*1.2));
      var lit=c.hy>.45?Math.min(1,(c.hy-.45)/.35):0;
      var sc=(.93+.07*gi)*(1-.16*treat*lit);
      C.el.setAttribute("transform","translate("+c.cx.toFixed(1)+" "+c.cy.toFixed(1)+") scale("+sc.toFixed(4)+")");
      op(C.el,b*gi*(1-.55*treat*lit));
      op(C.hx,hyp*c.hy*.92);
      op(C.lt,img*lit*(1-.35*treat));
      op(C.nu,.62-.4*hyp*c.hy);
    });
    op(E.o2,hyp*.8);
    /* tracer: out of the vessel, into the tissue; it washes back out of oxygenated cells and stays in hypoxic ones */
    E.tr.forEach(function(el,i){var T=TR[i],k=Math.min(1,Math.max(0,img*1.5-T.d*.5)),e=k*k*(3-2*k);
      var x=56+(T.tx-56)*e,y=T.y0+(T.ty-T.y0)*e,keep=T.c.hy>.45;
      var o=b*(k>0?1:0)*(keep?1:(1-wash))*(1-.6*treat);
      if(!keep&&wash>0){x=T.tx-(T.tx-56)*wash*.6}
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,o);
      el.setAttribute("class",keep?"tr k":"tr")});
    /* the curves draw with the imaging step and hold; the dose band marks the patient's individual dose */
    draw(E.cvT,b*seg(p,.32,.6));draw(E.cvH,b*seg(p,.32,.6));op(E.cvL,b*seg(p,.48,.58));
    op(E.dose,b*dose);
    var L=E.l;op(L[0],b*seg(p,.12,.18)*(1-seg(p,.24,.28)));op(L[1],b*seg(p,.32,.38)*(1-seg(p,.5,.54)));
    op(L[2],b*seg(p,.58,.64)*(1-seg(p,.74,.78)));op(L[3],b*seg(p,.82,.88));
  };
}
