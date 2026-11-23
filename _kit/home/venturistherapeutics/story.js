/* The story scene (DB/BL/BY): Venturis' mechanism as ONE continuous fine-line drawing that fills the frame
   (venturistherapeutics.com, Home and Pipeline; news releases 18 May 2026 and 24 Aug 2026): an artery narrowed by a
   blockage, the tissue it should feed, and the branch that reaches it. Frame 0 is already a complete picture.
   Step 1 (starved): flow stops at the blockage; the tissue downstream is ischemic.
   Step 2 (delivered): VT-141, the human protein FGF-1, is administered to the ischemic tissue.
   Step 3 (sprouting): new blood vessels sprout from the artery and grow into the tissue.
   Step 4 (restored): blood reaches the tissue through the new vessels.
   Labels sit in open space, >=8px from every stroke (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var AWT="M0 112C190 108 420 106 760 112",AWB="M0 146C190 150 420 152 760 146",ACL="M0 129C190 129 420 129 760 129";
var PLQ="M256 150C284 149 298 126 320 123S352 141 384 151Z";
var BR="M574 150C578 200 590 248 604 300";
var TIS="M96 316C180 270 330 286 430 276C540 266 650 262 704 304C738 352 716 420 700 470C676 512 560 506 470 512C360 520 230 520 140 500C88 486 70 430 78 380C82 350 84 330 96 316Z";
var CAP=["M604 300C600 340 570 372 540 400","M604 300C630 344 650 380 664 430","M604 300C612 360 610 420 596 470"];
var NV=["M168 150C172 200 182 250 204 300C222 338 250 370 290 394","M232 150C250 212 306 252 362 298C398 328 432 352 456 404",
  "M204 300C262 334 330 420 420 448C494 468 556 444 596 410","M362 298C420 290 500 300 590 334"];
var FG=[[170,350],[214,420],[262,340],[300,460],[340,380],[390,430],[430,338],[470,470],[250,396],[520,382],[196,468],[380,474],[452,400],[312,330]];
var NFL=14,NNF=10;
var FIB=[];for(var fy=324;fy<=480;fy+=26)FIB.push("M70 "+fy+"C300 "+(fy-10)+" 500 "+(fy+10)+" 740 "+(fy-4));
function tube(d,w,cls,id){return '<path class="vt '+cls+'"'+(id?' id="'+id+'o"':'')+' stroke-width="'+w+'" d="'+d+'"/><path class="vi '+cls+'"'+(id?' id="'+id+'i"':'')+' stroke-width="'+(w-2.6)+'" d="'+d+'"/>'}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="tclip"><path d="'+TIS+'"/></clipPath><pattern id="hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V5" stroke="rgba(246,247,251,.45)" stroke-width="1"/></pattern></defs>';
  /* the tissue: a soft organic outline with fine muscle fibres; its fill warms once blood reaches it */
  g+='<path class="tf" id="tf" d="'+TIS+'"/>';
  g+='<g id="scBase">';
  g+='<g clip-path="url(#tclip)">';FIB.forEach(function(d){g+='<path class="fb sD" d="'+d+'"/>'});g+='</g>';
  g+='<path class="wl sD" d="'+TIS+'"/>';
  g+='<path class="wl sD" d="'+AWT+'"/><path class="wl sD" d="'+AWB+'"/>';
  g+='</g>';
  g+='<path class="pq" id="pq" d="'+PLQ+'"/>';
  /* the branch that feeds the tissue, and its thin, starved capillaries */
  g+='<g id="brg">'+tube(BR,15,"br","")+'</g>';
  g+='<g id="caps">';CAP.forEach(function(d){g+='<path class="cp" d="'+d+'"/>'});g+='</g>';
  /* new vessels (drawn on in step 3) */
  g+='<g id="nv">';NV.forEach(function(d,k){g+=tube(d,8,"nw","nv"+k)});g+='</g>';
  /* FGF-1 */
  g+='<g id="fg">';FG.forEach(function(q){g+='<circle class="fgd" r="4.2" cx="'+q[0]+'" cy="'+q[1]+'"/>'});g+='</g>';
  /* blood flow */
  g+='<path id="aP" class="gd" d="'+ACL+'"/>';
  g+='<g id="fl">';for(i=0;i<NFL;i++)g+='<circle class="bf" r="3.4" cx="0" cy="129"/>';g+='</g>';
  g+='<g id="nf">';for(i=0;i<NNF;i++)g+='<circle class="bf" r="2.6" cx="0" cy="0"/>';g+='</g>';
  /* labels */
  if(!mob){
    g+='<g id="lAr"><text class="t" x="20" y="92">ARTERY</text></g>';
    g+='<g id="lPq"><text class="t" x="288" y="90">BLOCKAGE</text></g>';
    g+='<g id="lTi"><path class="ld" d="M686 254L686 290"/><text class="t" x="616" y="228">ISCHEMIC</text><text class="t" x="616" y="244">TISSUE</text></g>';
  }else{
    g+='<g id="lAr"><text class="t" x="20" y="88">ARTERY</text></g>';
    g+='<g id="lPq"><text class="t" x="270" y="88">BLOCKAGE</text></g>';
    g+='<g id="lTi"></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FLOW STOPS AT THE BLOCKAGE':'FLOW STOPS AT THE BLOCKAGE · THE TISSUE IS STARVED')+'</text></g>';
  g+='<g id="lb2"><text class="a g" x="'+lx+'" y="'+ly+'">'+(mob?'FGF-1 DELIVERED':'VT-141 · HUMAN FGF-1 DELIVERED TO THE ISCHEMIC TISSUE')+'</text></g>';
  g+='<g id="lb3"><text class="a g" x="'+lx+'" y="'+ly+'">'+(mob?'NEW VESSELS SPROUT':'NEW BLOOD VESSELS SPROUT AND GROW')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BLOOD FLOW RESTORED':'BLOOD REACHES THE TISSUE THROUGH THE NEW VESSELS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),br:dl("#brg path"),caps:$$("#caps .cp",svg),nv:NV.map(function(d,k){return dl("#nv"+k+"o,#nv"+k+"i")}),
    fg:$$("#fg .fgd",svg),fl:$$("#fl .bf",svg),nf:$$("#nf .bf",svg),tf:$("#tf",svg),pq:$("#pq",svg),
    lAr:$("#lAr",svg),lPq:$("#lPq",svg),lTi:$("#lTi",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var aP=$("#aP",svg),AL=aP.getTotalLength();
  var nvP=$$("#nv .vi",svg),NL=nvP.map(function(p){return p.getTotalLength()});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.br,b)}
    var s2=seg(p,.27,.42),s3=seg(p,.5,.72),s4=seg(p,.76,.92);
    op(E.pq,b);E.caps.forEach(function(el){op(el,b*(.85-.35*s4))});
    /* blood flow: upstream it moves; past the blockage only a trickle, until the new vessels carry it */
    E.fl.forEach(function(el,i){var f=((i/NFL)+p*5)%1,q=aP.getPointAtLength(AL*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));
      var past=q.x>330?(.18+.5*s4):1;op(el,b*past*Math.min(1,f*10)*Math.min(1,(1-f)*10))});
    /* 2. FGF-1 arrives in the tissue; 3. it is spent as the vessels grow */
    E.fg.forEach(function(el,k){var a=seg(p,.27+.008*k,.38+.008*k),gone=seg(p,.6+.006*k,.74+.006*k);op(el,b*a*(1-gone*.85))});
    /* 3. new vessels sprout from the artery and grow into the tissue, one after another */
    E.nv.forEach(function(list,k){var v=b*seg(p,.5+.04*k,.66+.04*k);draw(list,v);list.forEach(function(a){a[0].style.visibility=v>.002?"visible":"hidden"})});
    /* 4. blood through the new vessels; the tissue warms */
    E.nf.forEach(function(el,i){var k=i%NV.length,f=((Math.floor(i/NV.length)/Math.ceil(NNF/NV.length))+p*4)%1,q=nvP[k].getPointAtLength(NL[k]*f);
      el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*s4*Math.min(1,f*8)*Math.min(1,(1-f)*8))});
    if(E.tf)E.tf.style.fillOpacity=(b*(.05+.17*s4)).toFixed(3);
    op(E.lAr,b);op(E.lPq,b);op(E.lTi,b*(1-s4));
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}
