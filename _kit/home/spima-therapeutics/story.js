/* The story scene (DB/BL/BY): SPIMA's approach as ONE continuous fine-line picture that fills the frame
   (spima-therapeutics.com, Home and Our Technology; launch release 30 Sep 2024; IBMM 27 Jan 2026): the cell membrane,
   the myddosome inside the cell with its broad protein-protein interface, and outside it the two classic drug types that
   fail here. Frame 0 is already a complete picture.
   Step 1 (out of reach): an antibody stays outside the membrane; a small molecule finds no pocket on the flat interface.
   Step 2 (unfolded): a short linear peptide, floppy.
   Step 3 (stapled): it coils into its alpha-helix and the hydrocarbon staple draws across one turn.
   Step 4 (engaged): the stapled helix crosses the membrane and settles on the interface (SPM001 / MyD88).
   Labels sit in open space, >=8px from any stroke (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var MX0=292,MX1=316;
var TGT="M450 360C440 320 452 296 478 292C520 300 560 302 600 300C640 298 676 292 700 290C728 290 744 320 742 360C740 420 712 470 640 482C570 494 500 488 466 456C446 436 452 396 450 360Z";
var IFC="M478 292C520 300 560 302 600 300C640 298 676 292 700 290";
var SEAM1="M534 302C524 360 530 430 556 489",SEAM2="M650 296C662 366 652 432 624 485";
var AB="M144 214L144 182L118 150L126 143L150 170L174 143L182 150L156 182L156 214Z";
var P0=[160,360],P1=[589,266];
var HN=150,HW=4.2;
function hexp(x,y,r,a){var s="";for(var k=0;k<6;k++){var t=a+k*Math.PI/3;s+=(k?"L":"M")+(x+r*Math.cos(t)).toFixed(1)+" "+(y+r*Math.sin(t)).toFixed(1)}return s+"Z"}
function pepPath(k,ph){var s="",i,t,x,y,c=Math.cos,sn=Math.sin,w=HW*2*Math.PI;
  for(i=0;i<=HN;i++){t=i/HN;
    var xe=(t-.5)*220,ye=7*sn(t*19+ph)+5*sn(t*31-ph*1.3);
    var xh=(t-.5)*150+15*c(w*t),yh=23*sn(w*t);
    x=xe+(xh-xe)*k;y=ye+(yh-ye)*k;s+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}
  return s}
var ST1=(.75+1)/HW,ST2=(.75+2)/HW;
function stX(t){return (t-.5)*150+15*Math.cos(HW*2*Math.PI*t)}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="M'+MX0+' 24V520"/><path class="wl sD" d="M'+MX1+' 24V520"/>';
  g+='<path class="wl sD" d="'+TGT+'"/><path class="wo sD" d="'+SEAM1+'"/><path class="wo sD" d="'+SEAM2+'"/>';
  g+='</g>';
  g+='<g id="hds">';for(i=30;i<=514;i+=14){g+='<circle class="hd" cx="'+(MX0-4)+'" cy="'+i+'" r="3.4"/><circle class="hd" cx="'+(MX1+4)+'" cy="'+i+'" r="3.4"/>'}g+='</g>';
  g+='<path class="tgf" id="tgf" d="'+TGT+'"/>';
  g+='<path class="if" id="ifc" d="'+IFC+'"/>';
  /* the two drug types that fail here */
  g+='<path class="ab" id="ab" d="'+AB+'"/>';
  g+='<g id="sm"><path class="smh" d="'+hexp(560,200,13,0)+'"/><path class="smh" d="M573 200L588 200"/></g>';
  /* the peptide */
  var sx1=stX(ST1),sx2=stX(ST2);
  g+='<g id="pep" transform="translate('+P0[0]+' '+P0[1]+')">';
  g+='<path class="hx" id="hx" d="'+pepPath(0,0)+'"/>';
  g+='<path class="stp" id="stp" d="M'+sx1.toFixed(1)+' -22C'+sx1.toFixed(1)+' -60 '+sx2.toFixed(1)+' -60 '+sx2.toFixed(1)+' -22"/>';
  g+='<circle class="sa" cx="'+sx1.toFixed(1)+'" cy="-22" r="3.6"/><circle class="sa" cx="'+sx2.toFixed(1)+'" cy="-22" r="3.6"/>';
  g+='</g>';
  /* labels */
  if(!mob){
    g+='<g id="lOut"><text class="t" x="24" y="40">OUTSIDE THE CELL</text></g>';
    g+='<g id="lIn"><text class="t" x="338" y="40">INSIDE THE CELL</text></g>';
    g+='<g id="lTg"><text class="t" x="520" y="524">MYDDOSOME (MyD88)</text></g>';
    g+='<g id="lAb"><text class="t" x="112" y="240">ANTIBODY</text></g>';
    g+='<g id="lSm"><text class="t" x="600" y="204">SMALL MOLECULE</text></g>';
    g+='<g id="lPe"><text class="t" x="40" y="432">LINEAR PEPTIDE</text></g>';
    g+='<g id="lHx"><text class="t" x="40" y="432">STAPLED &#945;-HELIX</text></g>';
    g+='<g id="lSt"><text class="t a2" x="'+(P0[0]+sx1-12).toFixed(0)+'" y="'+(P0[1]-46)+'" text-anchor="end">STAPLE</text></g>';
    g+='<g id="lSp"><text class="t a2" x="'+(P1[0]-92)+'" y="'+(P1[1]+4)+'" text-anchor="end">SPM001</text></g>';
  }else{
    g+='<g id="lOut"><text class="t" x="20" y="46">OUTSIDE</text></g>';
    g+='<g id="lIn"><text class="t" x="340" y="46">INSIDE THE CELL</text></g>';
    g+='<g id="lTg"><text class="t" x="530" y="530">MyD88</text></g>';
    g+='<g id="lAb"><text class="t" x="92" y="250">ANTIBODY</text></g>';
    g+='<g id="lSm"></g>';
    g+='<g id="lPe"><text class="t" x="40" y="440">PEPTIDE</text></g>';
    g+='<g id="lHx"><text class="t" x="40" y="440">&#945;-HELIX</text></g>';
    g+='<g id="lSt"></g>';
    g+='<g id="lSp"><text class="t a2" x="'+(P1[0]-92)+'" y="'+(P1[1]+6)+'" text-anchor="end">SPM001</text></g>';
  }
  var ly=SCH-6,lx=20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'OUT OF REACH':'ANTIBODIES STAY OUTSIDE · SMALL MOLECULES FIND NO POCKET')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A FLOPPY PEPTIDE':'A SHORT PEPTIDE ON ITS OWN LOSES ITS SHAPE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LOCKED INTO A HELIX':'A CHEMICAL BRACE LOCKS THE &#945;-HELIX')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ON THE TARGET':'INTO THE CELL · ONTO THE MYDDOSOME INTERFACE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),hds:$("#hds",svg),ifc:$("#ifc",svg),tgf:$("#tgf",svg),ab:$("#ab",svg),sm:$("#sm",svg),
    pep:$("#pep",svg),hx:$("#hx",svg),stp:$("#stp",svg),sa:$$(".sa",svg),
    lOut:$("#lOut",svg),lIn:$("#lIn",svg),lTg:$("#lTg",svg),lAb:$("#lAb",svg),lSm:$("#lSm",svg),lPe:$("#lPe",svg),lHx:$("#lHx",svg),lSt:$("#lSt",svg),lSp:$("#lSp",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var SL=E.stp.getTotalLength();E.stp.style.strokeDasharray=SL+" "+SL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.hds,b);op(E.lOut,b);op(E.lIn,b);op(E.lTg,b);op(E.tgf,b);
    /* 1. the barriers: an antibody held outside, a small molecule over the flat interface */
    var bar=b*(1-seg(p,.25,.33));
    op(E.ab,bar);op(E.sm,bar);op(E.lAb,bar);op(E.lSm,bar);
    /* 2-3. the peptide: floppy, then coiled into its helix; the staple draws once the helix has formed */
    var k=ease(seg(p,.5,.64)),stp=seg(p,.62,.72);
    var pin=seg(p,.25,.34);
    E.hx.setAttribute("d",pepPath(k,(1-k)*p*28));
    E.stp.style.strokeDashoffset=(SL*(1-stp)).toFixed(1);
    E.sa.forEach(function(a){op(a,seg(p,.6,.64))});
    op(E.pep,b*pin);
    op(E.lPe,b*pin*(1-seg(p,.5,.56)));op(E.lHx,b*seg(p,.62,.7)*(1-seg(p,.77,.82)));op(E.lSt,b*seg(p,.68,.72)*(1-seg(p,.76,.8)));
    /* 4. across the membrane and onto the interface */
    var m=ease(seg(p,.77,.93));var x=P0[0]+(P1[0]-P0[0])*m,y=P0[1]+(P1[1]-P0[1])*m-Math.sin(m*Math.PI)*60;
    E.pep.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
    op(E.ifc,b*seg(p,.9,.96));op(E.lSp,b*seg(p,.92,.97));
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.74,.78)));op(E.l4,b*seg(p,.8,.87));
  };
}
