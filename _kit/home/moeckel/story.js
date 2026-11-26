/* The story scene (BL/BY/DB): how a Möckel Scherenhub table (ergo N, S, F) is set with one lever
   (moeckel.com > Info & Preise > Differenzierung der Produktlinien; Therapiemöbel). ONE table in side elevation for all three steps:
   Step 1 (Lösen): the hand lever is pulled and releases the lamella brake.
   Step 2 (Heben): two parallel guided swing arms raise the top, steplessly, from sitting to standing height.
   Step 3 (Neigen): the top tilts on the same lever; on release the brake locks height and tilt together.
   Schematic, no measured values. Nothing is dash-drawn (DR4): every moving part is recomputed per frame. */
var SCW=760,SCH=520;
var MK={FL:470,A1:[421,420],A2:[421,388],L:230,TL:300,TH:9,T0:22,T1:60,PH0:0,PH1:26};
function mkGeo(th,ph){var r=th*Math.PI/180,f=ph*Math.PI/180,dx=-MK.L*Math.cos(r),dy=-MK.L*Math.sin(r);
  var H1=[MK.A1[0]+dx,MK.A1[1]+dy],H2=[MK.A2[0]+dx,MK.A2[1]+dy],P=[H2[0],H2[1]-16],c=Math.cos(f),s=Math.sin(f),h=MK.TL/2;
  return {H1:H1,H2:H2,P:P,c:c,s:s,L:[P[0]-h*c,P[1]+h*s],R:[P[0]+h*c,P[1]-h*s]}}
function f1(n){return n.toFixed(1)}
function scene(){var mob=MOBILE()?1:0,FL=MK.FL,A1=MK.A1,A2=MK.A2;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="20 84 720 424" aria-hidden="true">';
  g+='<path class="fl" d="M40 '+FL+'H720"/>';
  /* base: floor rail on two castors, upright with the two lower pivots */
  g+='<rect class="fr" x="160" y="438" width="312" height="12"/><circle class="cs" cx="186" cy="459" r="10"/><circle class="cs" cx="446" cy="459" r="10"/>';
  g+='<rect class="fr" x="410" y="370" width="22" height="70"/>';
  /* lamella brake housing at the lower pivot */
  g+='<g id="mBr"><rect class="bh" x="398" y="404" width="46" height="32"/>'+[0,1,2,3,4].map(function(){return '<path class="lm" d="M0 0"/>'}).join("")+'</g>';
  /* reference and dimension lines */
  g+='<path id="mRef" class="rf"/><path id="mDim" class="dm"/><path id="mArc" class="ac"/>';
  /* arms, head, top, lever */
  g+='<path id="mArm1" class="arm"/><path id="mArm2" class="arm"/><path id="mHead" class="hd"/>';
  g+='<path id="mTop" class="tp"/><path id="mLedge" class="tp"/><path id="mLev" class="lv"/><circle id="mKnob" class="kn" r="6.5"/>';
  g+='<circle class="pv" cx="'+A1[0]+'" cy="'+A1[1]+'" r="4.5"/><circle class="pv" cx="'+A2[0]+'" cy="'+A2[1]+'" r="4.5"/><circle id="mP1" class="pv" r="4.5"/><circle id="mP2" class="pv" r="4.5"/><circle id="mPt" class="pv" r="5"/>';
  /* labels, one set per step */
  g+='<g id="t1"><text id="tLev" class="t" text-anchor="middle">HANDHEBEL</text><text class="t" x="456" y="'+(mob?428:425)+'">'+(mob?"BREMSE":"LAMELLENBREMSE")+'</text></g>';
  g+='<g id="t2"><text class="t" x="456" y="'+(mob?380:378)+'">'+(mob?"ARME":"SCHWINGARME")+'</text><text id="tH" class="t" x="636">HÖHE</text></g>';
  g+='<g id="t3"><text id="tN" class="t">NEIGUNG</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · LÖSEN</text></g><g id="lb2"><text class="a" x="20" y="500">2 · HEBEN</text></g><g id="lb3"><text class="a" x="20" y="500">3 · NEIGEN</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var $i=function(id){return svg.querySelector("#"+id)},mob=svg.classList.contains("mob");
  var E={a1:$i("mArm1"),a2:$i("mArm2"),hd:$i("mHead"),tp:$i("mTop"),ld:$i("mLedge"),lv:$i("mLev"),kn:$i("mKnob"),p1:$i("mP1"),p2:$i("mP2"),pt:$i("mPt"),
    ref:$i("mRef"),dim:$i("mDim"),arc:$i("mArc"),br:$i("mBr"),lm:[].slice.call(svg.querySelectorAll("#mBr .lm")),tLev:$i("tLev"),tH:$i("tH"),tN:$i("tN"),
    t1:$i("t1"),t2:$i("t2"),t3:$i("t3"),l1:$i("lb1"),l2:$i("lb2"),l3:$i("lb3")};
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  function pt(el,q){el.setAttribute("cx",f1(q[0]));el.setAttribute("cy",f1(q[1]))}
  return function(p,b){
    if(!svg.isConnected)return;
    var pull=ease(seg(p,.02,.1))*(1-ease(seg(p,.9,.97))),lift=ease(seg(p,.37,.62)),tilt=ease(seg(p,.68,.88));
    var th=MK.T0+(MK.T1-MK.T0)*lift,ph=MK.PH0+(MK.PH1-MK.PH0)*tilt,G=mkGeo(th,ph),P=G.P,c=G.c,s=G.s,FL=MK.FL;
    E.a1.setAttribute("d","M"+MK.A1[0]+" "+MK.A1[1]+"L"+f1(G.H1[0])+" "+f1(G.H1[1]));
    E.a2.setAttribute("d","M"+MK.A2[0]+" "+MK.A2[1]+"L"+f1(G.H2[0])+" "+f1(G.H2[1]));
    E.hd.setAttribute("d","M"+f1(P[0])+" "+f1(P[1])+"L"+f1(G.H1[0])+" "+f1(G.H1[1]+6));
    /* the top as a thin slab: corners from the pivot along the tilt direction, normal pointing up */
    var nx=-s*MK.TH,ny=-c*MK.TH,L=G.L,R=G.R;
    E.tp.setAttribute("d","M"+f1(L[0])+" "+f1(L[1])+"L"+f1(R[0])+" "+f1(R[1])+"L"+f1(R[0]+nx)+" "+f1(R[1]+ny)+"L"+f1(L[0]+nx)+" "+f1(L[1]+ny)+"Z");
    E.ld.setAttribute("d","M"+f1(L[0]+nx)+" "+f1(L[1]+ny)+"L"+f1(L[0]+nx-s*9)+" "+f1(L[1]+ny-c*9)+"L"+f1(L[0]+nx-s*9+c*9)+" "+f1(L[1]+ny-c*9-s*9));
    pt(E.p1,G.H1);pt(E.p2,G.H2);pt(E.pt,P);
    /* hand lever from the lower head pivot, pulled down by 24° */
    var la=(180+20+24*pull)*Math.PI/180,K=[G.H1[0]+62*Math.cos(la),G.H1[1]-62*Math.sin(la)];
    E.lv.setAttribute("d","M"+f1(G.H1[0])+" "+f1(G.H1[1])+"L"+f1(K[0])+" "+f1(K[1]));pt(E.kn,K);
    E.lv.classList.toggle("on",pull>.5);E.kn.classList.toggle("on",pull>.5);
    E.tLev.setAttribute("x",f1(K[0]));E.tLev.setAttribute("y",f1(K[1]+(mob?36:30)));
    /* lamella brake: the plates spread and light up while released */
    var gap=2.6+3.2*pull;E.lm.forEach(function(el,i){var x=421+(i-2)*gap*1.6;el.setAttribute("d","M"+f1(x)+" 409V431")});
    E.br.classList.toggle("on",pull>.5);
    /* height: dimension line from the floor to the pivot, with a quiet reference line */
    var yP=P[1];
    E.ref.setAttribute("d","M"+f1(P[0]+12)+" "+f1(yP)+"H628");
    E.dim.setAttribute("d","M620 "+FL+"V"+f1(yP)+"M612 "+FL+"H628M612 "+f1(yP)+"H628");
    E.tH.setAttribute("y",f1((FL+yP)/2+5));
    /* tilt: an arc between the reference line and the top */
    var r=176,a=ph*Math.PI/180;
    E.arc.setAttribute("d",ph>.5?("M"+f1(P[0]+r)+" "+f1(yP)+"A"+r+" "+r+" 0 0 0 "+f1(P[0]+r*Math.cos(a))+" "+f1(yP-r*Math.sin(a))):"");
    E.tN.setAttribute("x",f1(P[0]+r+14));E.tN.setAttribute("y",f1(yP-r*Math.sin(a)*.5+5));
    op(E.dim,b*(.35+.65*seg(p,.33,.4)));op(E.ref,b*.6);op(E.arc,b*seg(p,.68,.74));
    op(E.t1,b*(1-seg(p,.3,.35)));op(E.t2,b*seg(p,.38,.45)*(1-seg(p,.64,.68)));op(E.t3,b*seg(p,.72,.8));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
