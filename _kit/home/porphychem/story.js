/* The story scene (BL/BY/DB): how a PorphyChem synthesis runs (porphychem.com /services/custom-synthesis, /about-us/
   porphychem-company and /quality-control-system), drawn as ONE porphyrin macrocycle kept on screen for all three steps
   (skeletal formula, top view, from the same idealised geometry as the hero render). Step 1: the customer's target, the
   four meso positions carry their substituents (R). Step 2: metallation, a metal (M) grows in at the core and binds the
   four nitrogens. Step 3: quality control, the lot's UV-Vis absorption spectrum is drawn on labelled axes (a strong Soret
   band near 420 nm and four weak Q bands, the textbook porphyrin spectrum) and the lot is released. Every element is
   driven by the scrubbed story progress. */
var SCW=760,SCH=520,PCX=380,PCY=258,PS=44;
function pcPt(x,y){return [PCX+x*PS,PCY-y*PS]}
function pcRot(p,a){var c=Math.cos(a),s=Math.sin(a);return [p[0]*c-p[1]*s,p[0]*s+p[1]*c]}
function pcF(p){return p[0].toFixed(1)+" "+p[1].toFixed(1)}
function pcScene(o){
  var g='',q,mob=o.mob,bd="",nd="",rb="",rc="",mb="";
  for(q=0;q<4;q++){
    var a=q*Math.PI/2,N=pcRot([2.05,0],a),A1=pcRot([2.86,1.10],a),A2=pcRot([2.86,-1.10],a),B1=pcRot([4.24,.68],a),B2=pcRot([4.24,-.68],a);
    var m=pcRot([2.418,2.418],a),A3=pcRot([1.10,2.86],a),Ro=pcRot([3.95,3.95],a);
    var P=function(v){return pcF(pcPt(v[0],v[1]))};
    /* pyrrole ring, and the meso carbon linking it to the next ring */
    bd+="M"+P(N)+"L"+P(A1)+"L"+P(B1)+"L"+P(B2)+"L"+P(A2)+"Z";
    bd+="M"+P(A1)+"L"+P(m)+"L"+P(A3);
    /* inner double bond of each pyrrole (beta-beta), drawn as a short parallel line inside the ring */
    var i1=pcRot([3.98,.5],a),i2=pcRot([3.98,-.5],a);bd+="M"+P(i1)+"L"+P(i2);
    var n=pcPt(N[0],N[1]);nd+='<circle class="nN" cx="'+n[0].toFixed(1)+'" cy="'+n[1].toFixed(1)+'" r="5.5"/>';
    /* the meso substituent bond and its R circle */
    var r=pcPt(Ro[0],Ro[1]),mm=pcPt(m[0],m[1]),dx=r[0]-mm[0],dy=r[1]-mm[1],L=Math.sqrt(dx*dx+dy*dy),e=[r[0]-dx/L*17,r[1]-dy/L*17];
    rb+="M"+pcF(mm)+"L"+pcF(e);
    rc+='<g class="rG"><circle class="rC" cx="'+r[0].toFixed(1)+'" cy="'+r[1].toFixed(1)+'" r="17"/><text class="rT" x="'+r[0].toFixed(1)+'" y="'+(r[1]+5).toFixed(1)+'" text-anchor="middle">R</text></g>';
    var e2=pcPt(N[0]*.62,N[1]*.62);mb+="M"+pcF(n)+"L"+pcF(e2);
  }
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="pMol"><g id="scBase"><path class="pb sD" d="'+bd+'"/>'+nd+'</g>';
  /* step 1: substituents */
  g+='<g id="pR"><path class="rb" id="pRb" d="'+rb+'"/>'+rc+'</g>';
  /* step 2: the metal, its four bonds to nitrogen */
  g+='<path class="mbd" id="pMb" d="'+mb+'"/>';
  g+='<g id="pM"><circle class="mC" cx="0" cy="0" r="19"/><text class="mT" x="0" y="6" text-anchor="middle">M</text></g></g>';
  g+='<text class="t" id="pHd" x="24" y="24">PORPHYRIN CORE · FOUR PYRROLE RINGS</text>';
  /* step 3: the UV-Vis spectrum on labelled axes (380-720 nm) */
  var X0=478,X1=736,Y0=344,Y1=150;
  function wx(nm){return X0+(nm-380)/(720-380)*(X1-X0)}
  function gs(x,c,w,h){return h*Math.exp(-Math.pow((x-c)/w,2))}
  var sp="";for(var nm=384;nm<=716;nm+=2){var v=gs(nm,420,9,1)+gs(nm,515,11,.085)+gs(nm,550,9,.05)+gs(nm,591,9,.035)+gs(nm,646,10,.03)+.012;sp+=(nm==384?"M":"L")+wx(nm).toFixed(1)+" "+(Y0-v*(Y0-Y1-14)).toFixed(1)}
  g+='<g id="pSp"><path class="ax" id="pAx" d="M'+X0+' '+Y1+'V'+Y0+'H'+X1+'"/>';
  [400,500,600,700].forEach(function(t){g+='<path class="tk" d="M'+wx(t).toFixed(1)+' '+Y0+'v6"/><text class="t" x="'+wx(t).toFixed(1)+'" y="'+(Y0+26)+'" text-anchor="middle">'+t+'</text>'});
  g+='<text class="t" x="'+X0+'" y="'+(Y1-18)+'">UV-VIS ABSORBANCE</text><text class="t" x="'+X1+'" y="'+(Y0+52)+'" text-anchor="end">WAVELENGTH (NM)</text>';
  g+='<path class="spc" id="pSc" d="'+sp+'"/>';
  g+='<text class="t sb" x="'+(wx(420)+16).toFixed(1)+'" y="'+(Y1+30)+'">SORET BAND</text><text class="t sb" x="'+wx(560).toFixed(1)+'" y="'+(Y0-48)+'" text-anchor="middle">Q BANDS</text>';
  g+='<g id="pOk"><rect class="okR" x="'+X0+'" y="420" width="'+(X1-X0)+'" height="40"/><text class="ok" x="'+((X0+X1)/2)+'" y="445" text-anchor="middle">LOT RELEASED · CoA</text></g></g>';
  g+='<g id="lb1"><text class="a" x="24" y="506">YOUR R GROUPS AT THE MESO POSITIONS</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="506">METALLATION: A METAL AT THE CORE</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="506">EVERY LOT TESTED BEFORE RELEASE</text></g>';
  return g+'</svg>';
}
function scene(){return pcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .nN,#pHd",svg),mol:$("#pMol",svg),rb:dl("#pRb"),rg:$$("#pR .rG",svg),mb:dl("#pMb"),m:$("#pM",svg),
    ax:dl("#pAx"),sc:dl("#pSc"),sp:$("#pSp",svg),spt:$$("#pSp text,#pSp .tk",svg),ok:$("#pOk",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mix(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the four substituent bonds draw out of the meso carbons, then the R circles appear (they stay) */
    var r1=seg(p,.03,.12);draw(E.rb,b*r1);
    E.rg.forEach(function(el,k){op(el,b*seg(p,.07+k*.012,.12+k*.012))});
    /* step 2: the metal appears at the core, then its bonds to the four nitrogens draw */
    var mi=seg(p,.36,.5);E.m.setAttribute("transform","translate("+PCX+" "+PCY+") scale("+(.4+.6*mi).toFixed(3)+")");op(E.m,b*mi);
    draw(E.mb,b*seg(p,.48,.58));
    /* step 3: the molecule steps aside to the left, then the axes, the spectrum drawing left to right, and the lot is released */
    var mv=seg(p,.6,.68),ms=1-.3*mv;E.mol.setAttribute("transform","translate("+(PCX+mix(0,212-PCX,mv)).toFixed(1)+" "+PCY+") scale("+ms.toFixed(3)+") translate("+(-PCX)+" "+(-PCY)+")");
    /* axes, then the spectrum draws left to right, then the lot is released */
    op(E.sp,b*seg(p,.66,.7));draw(E.ax,seg(p,.66,.72));E.spt.forEach(function(el){el.style.opacity=seg(p,.68,.74).toFixed(3)});
    draw(E.sc,seg(p,.7,.86));op(E.ok,seg(p,.86,.92));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.28,.32)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.6,.64)));op(E.l3,b*seg(p,.72,.8));
  };
}
