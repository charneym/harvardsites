/* The story scene (DB/BL/BY): Amporin's mechanism as ONE continuous fine-line cross-section that fills the frame
   (amporin.com, Home, Science and Strategy): a cell membrane (lipid bilayer) with the outside above and the cell below,
   calcium ions outside, misfolded oligomer subunits, and a mitochondrion inside. Frame 0 is already a complete picture.
   Step 1 (pores): the oligomer subunits insert into the membrane and assemble into a pore.
   Step 2 (calcium): calcium streams through the pore to the mitochondrion, which is overloaded.
   Step 3 (blocked): an Amporin inhibitor docks in the pore; the stream stops.
   Step 4 (recovery): the mitochondrion recovers.
   Labels sit in open space, clear of every stroke (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var MITO="M443 420C425 398 443 354 493 338C545 320 613 316 649 338C677 356 671 394 633 414C593 434 525 448 479 442C463 440 451 432 443 420Z";
var CRIS="M465 420C473 400 479 388 487 398S495 420 503 416 511 368 521 378 525 420 535 414 541 362 551 368 557 414 567 408 573 358 583 362 589 408 599 402 605 356 615 360 621 400 631 392 637 362 649 366";
var STREAM="M380 70L380 270C380 318 412 352 462 380";
var CA=[[214,92],[252,134],[290,78],[318,150],[236,170],[468,92],[498,146],[440,160],[300,116],[206,136],[512,84],[456,128],[270,104],[334,88]];
var SUB=[[342,192,"#e0564f",-150,-120,-18],[342,227,"#f08a3c",-96,-160,14],[390,192,"#9ccf5a",86,-150,-10],[390,227,"#3fa0e0",136,-112,20]];
var NCA=12;
function hexp(x,y,r,a){var s="";for(var k=0;k<6;k++){var t=a+k*Math.PI/3;s+=(k?"L":"M")+(x+r*Math.cos(t)).toFixed(1)+" "+(y+r*Math.sin(t)).toFixed(1)}return s+"Z"}
function storyScene(o){
  var g='',i,x,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="mglow"><stop offset="0" stop-color="#b98de0" stop-opacity=".45"/><stop offset="1" stop-color="#b98de0" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="sglow"><stop offset="0" stop-color="#f08a3c" stop-opacity=".4"/><stop offset="1" stop-color="#f08a3c" stop-opacity="0"/></radialGradient></defs>';
  /* the bilayer: two leaflets of lipid tails (drawn), heads as small circles; the pore zone is kept apart so it can open */
  var t1='',t2='';for(x=20;x<=740;x+=16){if(x>334&&x<426)continue;t1+='M'+(x-2)+' 206V223M'+(x+2)+' 206V223';t2+='M'+(x-2)+' 244V227M'+(x+2)+' 244V227'}
  g+='<g id="scBase"><path class="wo sD" d="'+t1+'"/><path class="wo sD" d="'+t2+'"/>';
  g+='<path class="wmd sD" d="'+MITO+'"/><path class="wo sD cr" id="cris" d="'+CRIS+'"/>';
  g+='<g transform="translate(190 410) scale(.72) translate(-551 -380)"><path class="wmd sD" d="'+MITO+'"/><path class="wo sD cr" d="'+CRIS+'"/></g></g>';
  g+='<g id="hd">';for(x=20;x<=740;x+=16){var z=(x>334&&x<426)?' pz':'';g+='<circle class="hd'+z+'" cx="'+x+'" cy="200" r="5.5"/><circle class="hd'+z+'" cx="'+x+'" cy="250" r="5.5"/>'}g+='</g>';
  g+='<g id="pzt">';for(x=340;x<426;x+=16)g+='<path class="pzt" d="M'+(x-2)+' 206V223M'+(x+2)+' 206V223M'+(x-2)+' 244V227M'+(x+2)+' 244V227"/>';g+='</g>';
  g+='<circle class="halo" id="sh" cx="560" cy="385" r="150" fill="url(#sglow)"/><circle class="halo" id="mh" cx="560" cy="385" r="160" fill="url(#mglow)"/>';
  g+='<circle class="halo" id="sh2" cx="190" cy="410" r="110" fill="url(#sglow)"/><circle class="halo" id="mh2" cx="190" cy="410" r="120" fill="url(#mglow)"/>';
  g+='<path class="mf" id="mf" d="'+MITO+'"/><path class="mf" id="mf2" transform="translate(190 410) scale(.72) translate(-551 -380)" d="'+MITO+'"/>';
  /* calcium outside, the stream through the pore */
  g+='<g id="ca">';CA.forEach(function(c){g+='<circle class="ca" r="4" cx="'+c[0]+'" cy="'+c[1]+'"/>'});g+='</g>';
  g+='<path id="stP" class="gd" d="'+STREAM+'"/>';
  g+='<g id="st">';for(i=0;i<NCA;i++)g+='<circle class="ca" r="4" cx="380" cy="70"/>';g+='</g>';
  /* the oligomer subunits that assemble into the pore */
  g+='<g id="sub">';SUB.forEach(function(s){g+='<rect class="su" x="'+s[0]+'" y="'+s[1]+'" width="28" height="33" rx="9" style="stroke:'+s[2]+';fill:'+s[2]+'"/>'});g+='</g>';
  /* the inhibitor */
  g+='<g id="dr"><path class="dr" d="'+hexp(372,186,9,0)+hexp(388,186,9,0)+'"/></g>';
  if(!mob){
    g+='<g id="lOut"><text class="t" x="24" y="64">OUTSIDE THE CELL</text></g>';
    g+='<g id="lCa"><text class="t a3" x="540" y="116">CALCIUM IONS</text></g>';
    g+='<g id="lMb"><text class="t" x="24" y="292">CELL MEMBRANE</text></g>';
    g+='<g id="lIn"><text class="t" x="24" y="336">INSIDE THE CELL</text></g>';
    g+='<g id="lPo"><path class="ld" d="M422 264L436 288"/><text class="t" x="444" y="304">OLIGOMER PORE</text></g>';
    g+='<g id="lBl"><path class="ld" d="M422 264L436 288"/><text class="t a2" x="444" y="304">PORE BLOCKED BY INHIBITOR</text></g>';
    g+='<g id="lMi"><text class="t" x="470" y="524">MITOCHONDRION</text></g>';
  }else{
    g+='<g id="lOut"></g><g id="lCa"></g><g id="lIn"></g><g id="lPo"></g><g id="lBl"></g>';
    g+='<g id="lMb"><text class="t" x="24" y="300">MEMBRANE</text></g>';
    g+='<g id="lMi"><text class="t" x="440" y="512">MITOCHONDRION</text></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A PORE FORMS':'MISFOLDED OLIGOMERS ASSEMBLE INTO A PORE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CALCIUM FLOODS IN':'UNCONTROLLED CALCIUM INFLUX · MITOCHONDRIA OVERLOADED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE PORE IS BLOCKED':'AN AMPORIN INHIBITOR BLOCKS THE PORE · THE LEAK STOPS')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MITOCHONDRIA RECOVER':'MEMBRANE INTACT · MITOCHONDRIAL FUNCTION RESTORED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),hd:$$("#hd .hd",svg),pzh:$$("#hd .pz",svg),pzt:$$("#pzt .pzt",svg),ca:$$("#ca .ca",svg),st:$$("#st .ca",svg),su:$$("#sub .su",svg),
    dr:$("#dr",svg),mf:$("#mf",svg),mh:$("#mh",svg),sh:$("#sh",svg),mf2:$("#mf2",svg),mh2:$("#mh2",svg),sh2:$("#sh2",svg),cris:$$(".cr",svg),
    lOut:$("#lOut",svg),lCa:$("#lCa",svg),lMb:$("#lMb",svg),lIn:$("#lIn",svg),lPo:$("#lPo",svg),lBl:$("#lBl",svg),lMi:$("#lMi",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var stP=$("#stP",svg),SL=stP.getTotalLength();
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(v){return v<.5?2*v*v:1-Math.pow(-2*v+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=ease(seg(p,.03,.2)),s4=seg(p,.77,.95);
    E.hd.forEach(function(el){if(!el.classList.contains("pz"))op(el,b)});
    /* 1. the subunits insert into the membrane; the lipids in the pore zone give way */
    E.pzh.forEach(function(el){op(el,b*(1-s1))});E.pzt.forEach(function(el){op(el,b*.9*(1-s1))});
    E.su.forEach(function(el,k){var s=SUB[k],m=1-s1;el.setAttribute("transform","translate("+(s[3]*m).toFixed(1)+" "+(s[4]*m).toFixed(1)+") rotate("+(s[5]*m).toFixed(1)+" "+(s[0]+14)+" "+(s[1]+16)+")");op(el,b)});
    op(E.lOut,b);op(E.lMb,b);op(E.lIn,b);op(E.lMi,b);op(E.lCa,b);
    op(E.lPo,b*seg(p,.14,.2)*(1-seg(p,.55,.6)));op(E.lBl,b*seg(p,.62,.68));
    /* 2. calcium streams through the pore and overloads the mitochondrion; 3. the stream stops once the pore is blocked */
    var on2=seg(p,.24,.32)*(1-seg(p,.6,.66));
    E.st.forEach(function(el,i){var f=((i/NCA)+p*7)%1;var q=stP.getPointAtLength(SL*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*on2*Math.min(1,f*8)*Math.min(1,(1-f)*8))});
    var stress=seg(p,.3,.42)*(1-seg(p,.74,.9));
    op(E.sh,b*stress);op(E.mf,b*(.9*stress));op(E.sh2,b*stress*.8);op(E.mf2,b*(.8*stress));
    E.cris.forEach(function(c){c.classList.toggle("hot",stress>.5);c.classList.toggle("lit",p>.82)});
    E.ca.forEach(function(el){op(el,b)});
    /* the inhibitor arrives from above and docks in the pore */
    var d=ease(seg(p,.5,.64));
    E.dr.setAttribute("transform","translate("+(-150*(1-d)).toFixed(1)+" "+(-150*(1-d)).toFixed(1)+")");op(E.dr,b*seg(p,.48,.53));
    /* 4. recovery */
    op(E.mh,b*s4);op(E.mh2,b*s4*.85);
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}
