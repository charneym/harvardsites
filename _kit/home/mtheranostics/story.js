/* The story scene (BL/BY/DB): how MT218 works, as ONE continuous scene, every element from mtheranostics.com
   (/research-and-development-at-mt, /mt218) and the NCI SBIR abstract 1R44CA265626. An engraved tissue cross-section stays
   on screen throughout: normal tissue on the left, an aggressive tumour (denser, larger nuclei) on the right, a blood
   vessel along the bottom. Step 1: the tumour's extracellular matrix (extradomain-B fibronectin) draws in, in the logo
   green, only around the tumour cells. Step 2: MT218 molecules (gadolinium core in its chelate ring, peptide tail) leave
   the vessel; those reaching the tumour bind the matrix, those in normal tissue wash out. Step 3: the tumour lights up as
   it would on MRI while normal tissue stays dark. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,TU={x:500,y:212,rx:205,ry:150};
function rnd(s){return function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}}
function inTu(x,y,k){var dx=(x-TU.x)/(TU.rx*(k||1)),dy=(y-TU.y)/(TU.ry*(k||1));return dx*dx+dy*dy<1}
var CELLS=(function(){
  var R=rnd(2014),X0=24,X1=736,Y0=24,Y1=404,pts=[],x,y;
  for(y=Y0+26;y<Y1;y+=58)for(x=X0+28+((y/58|0)%2)*29;x<X1;x+=60){if(!inTu(x,y,1.08))pts.push([x+(R()-.5)*22,y+(R()-.5)*20,0])}
  for(y=TU.y-TU.ry;y<TU.y+TU.ry;y+=36)for(x=TU.x-TU.rx+((y/36|0)%2)*18;x<TU.x+TU.rx;x+=37){var px=x+(R()-.5)*14,py=y+(R()-.5)*14;if(inTu(px,py,1)&&py>Y0+8&&py<Y1-8)pts.push([px,py,1])}
  function clip(poly,a,b){var out=[],nx=b[0]-a[0],ny=b[1]-a[1],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
    var f=function(p){return (p[0]-mx)*nx+(p[1]-my)*ny};
    for(var k=0;k<poly.length;k++){var P=poly[k],Q=poly[(k+1)%poly.length],fp=f(P),fq=f(Q);
      if(fp<=0)out.push(P);
      if((fp<0&&fq>0)||(fp>0&&fq<0)){var t=fp/(fp-fq);out.push([P[0]+(Q[0]-P[0])*t,P[1]+(Q[1]-P[1])*t])}}
    return out}
  return pts.map(function(p,k){var poly=[[X0,Y0],[X1,Y0],[X1,Y1],[X0,Y1]];
    pts.forEach(function(q,m){if(m!==k&&Math.abs(q[0]-p[0])<140&&Math.abs(q[1]-p[1])<140)poly=clip(poly,p,q)});
    var cx=0,cy=0;poly.forEach(function(v){cx+=v[0];cy+=v[1]});cx/=poly.length;cy/=poly.length;
    return {poly:poly,cx:cx,cy:cy,tu:p[2],na:R()*Math.PI*2,r:R()}});
})();
/* matrix fibrils: the tumour cells' shared walls, drawn slightly wavy; binding sites at their midpoints */
var FN=(function(){var R=rnd(218),seen={},out=[];
  CELLS.forEach(function(c){if(!c.tu)return;var P=c.poly;for(var i=0;i<P.length;i++){var a=P[i],b=P[(i+1)%P.length];
    var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,key=Math.round(mx/3)+"_"+Math.round(my/3);if(seen[key])continue;seen[key]=1;
    var L=Math.hypot(b[0]-a[0],b[1]-a[1]);if(L<9||!inTu(mx,my,.97))continue;
    var nx=-(b[1]-a[1])/L,ny=(b[0]-a[0])/L,w=(R()-.5)*7;
    out.push({d:"M"+a[0].toFixed(1)+" "+a[1].toFixed(1)+"Q"+(mx+nx*w).toFixed(1)+" "+(my+ny*w).toFixed(1)+" "+b[0].toFixed(1)+" "+b[1].toFixed(1),x:mx+nx*w/2,y:my+ny*w/2,k:Math.hypot(mx-TU.x,my-TU.y)})}});
  return out})();
/* agents: most travel to binding sites in the tumour; some drift into normal tissue and wash out */
var AG=(function(){var R=rnd(5530),a=[],sites=FN.slice().sort(function(p,q){return R()-.5}).slice(0,30);
  sites.forEach(function(s,i){a.push({x0:40+R()*680,tx:s.x,ty:s.y,bind:1,d:R()*.35})});
  for(var i=0;i<9;i++)a.push({x0:40+R()*230,tx:50+R()*230,ty:90+R()*280,bind:0,d:R()*.35});
  return a})();
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="tclip"><rect x="24" y="24" width="712" height="380"/></clipPath>'+
     '<radialGradient id="tglow"><stop offset="0" stop-color="#eaf6ff" stop-opacity=".9"/><stop offset=".55" stop-color="#8fd0f6" stop-opacity=".45"/><stop offset="1" stop-color="#48a8e8" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M24 24H736M24 404H736"/>';
  g+='<path class="vw sD" d="M24 446H736M24 488H736"/>';
  g+='<text class="t" x="24" y="13">NORMAL TISSUE</text>';
  g+='<text class="t" x="736" y="13" text-anchor="end">AGGRESSIVE TUMOUR</text>';
  g+='<text class="t" x="24" y="'+(SCH-8)+'">BLOOD VESSEL · INJECTED CONTRAST AGENT</text>';
  g+='</g>';
  g+='<g clip-path="url(#tclip)"><ellipse id="scGlow" cx="'+TU.x+'" cy="'+TU.y+'" rx="'+(TU.rx*1.12)+'" ry="'+(TU.ry*1.12)+'" fill="url(#tglow)" opacity="0"/>';
  g+='<g id="scCells">';
  CELLS.forEach(function(c,k){
    var d='M'+c.poly.map(function(v){return f((v[0]-c.cx)*.9)+' '+f((v[1]-c.cy)*.9)}).join('L')+'Z';
    var rr=9999;c.poly.forEach(function(v){rr=Math.min(rr,Math.hypot(v[0]-c.cx,v[1]-c.cy))});
    var nr=c.tu?Math.min(rr*.5,8.5):Math.min(rr*.32,7),nx=Math.cos(c.na)*rr*(c.tu?.12:.25),ny=Math.sin(c.na)*rr*(c.tu?.12:.25);
    g+='<g class="cl'+(c.tu?' tc':'')+'" data-k="'+k+'" transform="translate('+f(c.cx)+' '+f(c.cy)+')"><path class="cp" d="'+d+'"/><ellipse class="nu" cx="'+f(nx)+'" cy="'+f(ny)+'" rx="'+f(nr)+'" ry="'+f(nr*(c.tu?.82:.7))+'" transform="rotate('+f(c.na*57.3)+' '+f(nx)+' '+f(ny)+')"/></g>';
  });
  g+='</g><g id="scFn">'+FN.map(function(F){return '<path class="fn" d="'+F.d+'"/>'}).join('')+'</g></g>';
  g+='<g id="scAg">'+AG.map(function(A,i){return '<g class="ag" data-i="'+i+'" opacity="0"><path class="tl" d="M0 0L-7 7L-12 5"/><circle class="rg" r="5.6"/><circle class="co" r="2.7"/></g>'}).join('')+'</g>';
  var lx=24,ly=430;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">EXTRADOMAIN-B FIBRONECTIN · TUMOUR MATRIX</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">MT218 BINDS THE MATRIX · WASHES OUT ELSEWHERE</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">BRIGHT ON MRI · NORMAL TISSUE STAYS DARK</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),cells:$$(".cl",svg),fn:dl(".fn"),
    ag:$$(".ag",svg).map(function(el){return {el:el,a:AG[+el.getAttribute("data-i")]}}),
    glow:$("#scGlow",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.fn.forEach(function(a,i){a.k=FN[i].k});
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var lit=seg(p,.68,.9);
    E.cells.forEach(function(el,i){op(el,b);
      if(el.classList.contains("tc"))el.classList.toggle("lit",lit>.5)});
    /* the matrix draws from the tumour's centre outward */
    var fIn=seg(p,.04,.3);
    E.fn.forEach(function(a){var gi=Math.min(1,Math.max(0,fIn*1.6-a.k/TU.rx*.6));a[0].style.strokeDashoffset=(a[1]*(1-gi)).toFixed(1);a[0].style.opacity=(b*(gi>0?1:0)*(1-.35*lit)).toFixed(3)});
    /* agents leave the vessel, travel, bind (tumour) or wash out (normal tissue) */
    var go=seg(p,.38,.64),wash=seg(p,.62,.74);
    E.ag.forEach(function(A){var a=A.a,t=Math.min(1,Math.max(0,(go-a.d)/(1-.35)));
      if(go<=a.d*.98){op(A.el,0);return}
      var e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,y0=467,cx=(a.x0+a.tx)/2,cy=Math.min(y0,a.ty)-40;
      var x=(1-e)*(1-e)*a.x0+2*(1-e)*e*cx+e*e*a.tx,y=(1-e)*(1-e)*y0+2*(1-e)*e*cy+e*e*a.ty;
      A.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      op(A.el,b*Math.min(1,t*6)*(a.bind?1:1-wash));
      A.el.classList.toggle("bd",a.bind&&t>=1)});
    op(E.glow,b*lit*.95);
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
