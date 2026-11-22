/* The story scene (BL/BY/DB): how PHIN-214 works (pharmain.com/phin-214, "How does it work?"), as ONE continuous engraved
   scene: an abdominal (splanchnic) vessel drawn lengthwise with its rings of smooth muscle, opening on the right towards a
   kidney. Frame 0 / step 1: the vessel is too relaxed and wide, blood cells pool and drift, the kidney is dim. Step 2:
   PHIN-214 (a small peptide, three linked beads) docks on the V1a receptors of the smooth muscle and the vessel constricts.
   Step 3: the pooled cells are carried on into the circulation and the kidney fills with flow. Schematic, not to scale.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,CY=250,R0=132,R1=84,VX=470,KX=604;
var RCX=(function(){var a=[],i;for(i=0;i<8;i++)a.push(74+i*50);return a})();
var CEL=(function(){var s=214,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<34;i++)a.push({x:34+R()*420,yf:(R()*2-1)*.84,rot:R()*180,d:R()*6.28,sp:.6+R()*.8});return a})();
function wallD(R,top){var s=top?-1:1,y=CY+s*R,ye=CY+s*7;
  return 'M20 '+y.toFixed(1)+'H'+VX+'C'+(VX+70)+' '+y.toFixed(1)+' '+(KX-60)+' '+ye+' '+KX+' '+ye}
function kidneyD(){return 'M664 140C724 140 748 196 748 250C748 304 724 360 664 360C624 360 604 330 612 300C616 284 600 268 600 250C600 232 616 216 612 200C604 170 624 140 664 140Z'}
function pyr(){var d='',k;for(k=0;k<5;k++){var a=(-64+k*32)*Math.PI/180,cx=666,bx=cx+64*Math.cos(a),by=CY+86*Math.sin(a),ax=cx+16*Math.cos(a),ay=CY+30*Math.sin(a),px=-Math.sin(a)*15,py=Math.cos(a)*15;
  d+='M'+(bx+px).toFixed(1)+' '+(by+py).toFixed(1)+'Q'+((bx+ax)/2+px*.5).toFixed(1)+' '+((by+ay)/2+py*.5).toFixed(1)+' '+ax.toFixed(1)+' '+ay.toFixed(1)+'Q'+((bx+ax)/2-px*.5).toFixed(1)+' '+((by+ay)/2-py*.5).toFixed(1)+' '+(bx-px).toFixed(1)+' '+(by-py).toFixed(1)}return d}
function vesScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 34 '+SCW+' 436" aria-hidden="true">';
  g+='<defs><radialGradient id="kglow" cx="58%" cy="50%" r="60%"><stop offset="0" stop-color="#4cc3c4" stop-opacity=".55"/><stop offset="1" stop-color="#4cc3c4" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="kclip"><path d="'+kidneyD()+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+kidneyD()+'"/>';
  g+='<path class="wo sD" d="'+pyr()+'"/>';
  g+='<path class="wo sD" d="M612 250C628 246 640 238 652 226M612 250C628 254 640 262 652 274"/>';
  g+='<text class="t" x="20" y="84">ABDOMINAL (SPLANCHNIC) VESSEL · SMOOTH MUSCLE</text>';
  g+='<text class="t" x="642" y="398">KIDNEY</text>';
  g+='</g>';
  g+='<rect id="kGlow" x="590" y="130" width="170" height="240" fill="url(#kglow)" clip-path="url(#kclip)"/>';
  /* rings of smooth muscle around the tube, and the two walls (their path is rebuilt as the vessel constricts) */
  g+='<g id="scRing">';for(i=0;i<9;i++)g+='<ellipse class="wo rg" cx="'+(50+i*50)+'" cy="'+CY+'" rx="7" ry="'+(R0+12)+'"/>';g+='</g>';
  g+='<path class="wl sD" id="wT" d="'+wallD(R0,1)+'"/><path class="wl sD" id="wB" d="'+wallD(R0,0)+'"/>';
  g+='<path class="wo sD" id="wT2" d="'+wallD(R0+12,1)+'"/><path class="wo sD" id="wB2" d="'+wallD(R0+12,0)+'"/>';
  /* V1a receptors on the inner wall */
  g+='<g id="scRec">';RCX.forEach(function(x){g+='<g class="rc" data-x="'+x+'"><path d="M0 0"/><path d="M0 0"/></g>'});g+='</g>';
  /* blood cells */
  g+='<g id="scCel">';CEL.forEach(function(c,k){g+='<g class="ce" data-k="'+k+'"><ellipse class="cb" rx="8" ry="6"/><ellipse class="dm" rx="3.2" ry="2.2"/></g>'});g+='</g>';
  /* PHIN-214: three linked beads docking on each receptor */
  g+='<g id="scDrug">';RCX.forEach(function(x,k){[1,0].forEach(function(top){g+='<g class="pp" data-k="'+k+'" data-t="'+top+'"><path d="M-9 0H9"/><circle cx="-9" cy="0" r="3.6"/><circle cx="0" cy="0" r="3.6"/><circle class="h" cx="9" cy="0" r="3.6"/></g>'})});g+='</g>';
  /* flow arrow */
  g+='<g id="scFlow"><path class="fl" d="M60 '+CY+'H560M548 '+(CY-8)+'L560 '+CY+'L548 '+(CY+8)+'"/></g>';
  var ly=458;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">RELAXED VESSELS · BLOOD POOLS</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">PHIN-214 ON V1A · VESSELS CONSTRICT</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">BLOOD REDIRECTED · KIDNEYS PERFUSED</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),walls:dl("#wT,#wB,#wT2,#wB2"),fade:$$("#scBase text",svg),rg:$$(".rg",svg),rc:$$(".rc",svg),
    wT:$("#wT",svg),wB:$("#wB",svg),wT2:$("#wT2",svg),wB2:$("#wB2",svg),kg:$("#kGlow",svg),
    ce:$$(".ce",svg).map(function(el){return {el:el,c:CEL[+el.getAttribute("data-k")]}}),
    pp:$$(".pp",svg),fl:$("#scFlow",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastR=-1;
  function draw(list,v){list.forEach(function(a){if(v>=1){a[0].style.strokeDasharray="none"}else{a[0].style.strokeDasharray=a[1]+" "+a[1];a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    var cap=seg(p,.32,.5),con=seg(p,.4,.62),go=seg(p,.68,.94),R=R0+(R1-R0)*con;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.walls,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.rg.forEach(function(el){op(el,b*.9)})}
    if(Math.abs(R-lastR)>.05){lastR=R;
      E.wT.setAttribute("d",wallD(R,1));E.wB.setAttribute("d",wallD(R,0));E.wT2.setAttribute("d",wallD(R+12,1));E.wB2.setAttribute("d",wallD(R+12,0));
      E.rg.forEach(function(el){el.setAttribute("ry",(R+12).toFixed(1))});
      E.rc.forEach(function(el){var x=+el.getAttribute("data-x"),ps=el.querySelectorAll("path"),yT=CY-R,yB=CY+R;
        ps[0].setAttribute("d","M"+x+" "+yT+"v12M"+x+" "+(yT+12)+"l-6 8M"+x+" "+(yT+12)+"l6 8");
        ps[1].setAttribute("d","M"+x+" "+yB+"v-12M"+x+" "+(yB-12)+"l-6 -8M"+x+" "+(yB-12)+"l6 -8")})}
    E.rc.forEach(function(el){op(el,b)});
    E.ce.forEach(function(C){var c=C.c,lim=R-14;
      /* pooled: a slow drift inside the wide lumen; then carried on towards the kidney */
      var dx=Math.sin(c.d+p*9*c.sp)*6*(1-go),dy=Math.cos(c.d+p*7*c.sp)*5*(1-go);
      var x=c.x+dx+go*(330+c.sp*80),y=CY+c.yf*lim+dy,a=1;
      if(x>VX){var t=Math.min(1,(x-VX)/(KX-VX));y=CY+(y-CY)*(1-t)*(1-t);a=1-Math.max(0,(x-KX+30)/60)}
      if(x>KX+30)a=0;
      C.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+c.rot.toFixed(0)+")");op(C.el,b*Math.max(0,a))});
    E.pp.forEach(function(el){var k=+el.getAttribute("data-k"),top=el.getAttribute("data-t")==="1",x=RCX[k];
      var gi=Math.min(1,Math.max(0,cap*1.7-(k%8)*.09)),yr=top?CY-R+30:CY+R-30,off=(1-gi)*38;
      el.setAttribute("transform","translate("+x+" "+(top?yr+off:yr-off).toFixed(1)+") rotate("+(top?90:-90)+")");op(el,b*gi*(1-.55*go))});
    op(E.kg,b*(.18+.82*go));
    op(E.fl,b*go*.9);
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
