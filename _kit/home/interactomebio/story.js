/* The story scene (DB/BL): Interactome's own approach (SCbio, May 2025: "human stem cell-derived nanotechnology, stem cell
   exosomes, to deliver medicines more efficiently"; BIO 2025 program: the Nanovate sEV Engineering Platform for nucleic
   acids such as siRNA, with a G58 modification for high-efficiency loading on the exosome surface), drawn as ONE continuous
   fine-line scene that fills the frame: a human stem cell (bilayer membrane, nucleus, Golgi, ER, a multivesicular body) on
   the left, and a neuron (soma, dendrites, axon) on the right. Frame 0 is already complete.
   Step 1 (source): exosomes bud from the multivesicular body and leave the cell in a line.
   Step 2 (load): short siRNA duplexes (logo blue) drop into each vesicle, whose lumen turns blue.
   Step 3 (deliver): the loaded vesicles travel to the neuron and fuse with it; the soma glows.
   Everything is driven by the scrubbed progress; no label ever sits on a stroke (DR3). */
var SCW=760,SCH=560;
var CELL={x:180,y:272,r:118};
var NUC="M114 250C114 222 136 204 162 204C190 204 208 224 206 252C204 280 184 296 160 296C134 296 114 278 114 250Z";
var GOLGI=["M216 196C228 186 246 186 258 196","M220 206C230 198 244 198 254 206","M224 216C232 210 242 210 250 216"];
var ER=["M100 316C120 338 150 348 182 346","M96 296C112 316 134 326 160 328","M108 210C116 192 130 180 146 174"];
var MVB={x:230,y:314,r:24};
var SOMA="M560 252C556 224 580 204 604 206C632 208 650 230 646 256C642 282 624 300 602 300C578 300 562 280 560 252Z";
var DEND=["M586 210C576 180 566 150 548 118","M567 150C556 136 540 128 522 126","M598 207C602 176 610 148 628 116","M626 214C648 196 672 176 692 142","M672 176C690 172 706 176 722 186","M644 236C668 232 694 236 720 248","M562 236C540 226 520 222 500 224"];
var AXON="M612 300C620 340 634 380 642 420C650 460 656 500 662 540";
var NUCN="M590 252C590 242 598 236 606 236C614 236 620 244 618 254C616 262 608 266 602 266C594 266 590 260 590 252Z";
var NV=6,P0=[298,264],PC=[420,190],P1=[556,250];
function bez(t){var u=1-t;return [u*u*P0[0]+2*u*t*PC[0]+t*t*P1[0],u*u*P0[1]+2*u*t*PC[1]+t*t*P1[1]]}
function vT(i){return .07+.1*i}
function circ(x,y,r){return 'M'+(x+r)+' '+y+'A'+r+' '+r+' 0 1 0 '+(x-r)+' '+y+'A'+r+' '+r+' 0 1 0 '+(x+r)+' '+y}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'44 84 700 476':'24 40 720 520')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gglow"><stop offset="0" stop-color="#7aa4e6" stop-opacity=".5"/><stop offset="1" stop-color="#7aa4e6" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hNeu" cx="603" cy="253" r="96" fill="url(#gglow)"/>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+circ(CELL.x,CELL.y,CELL.r)+'"/>';
  g+='<path class="wo sD" d="'+circ(CELL.x,CELL.y,CELL.r-5)+'"/>';
  g+='<path class="wmd sD" d="'+NUC+'"/><path class="wo sD" d="'+circ(150,242,10)+'"/>';
  GOLGI.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});ER.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="wmd sD" d="'+circ(MVB.x,MVB.y,MVB.r)+'"/>';
  [[-8,-7],[8,-6],[-6,8],[9,7]].forEach(function(q){g+='<path class="wo sD" d="'+circ(MVB.x+q[0],MVB.y+q[1],5)+'"/>'});
  g+='<path class="wl sD" d="'+SOMA+'"/><path class="wmd sD" d="'+NUCN+'"/>';
  DEND.forEach(function(d){g+='<path class="wl sD" d="'+d+'"/>'});
  g+='<path class="wl sD" d="'+AXON+'"/>';
  g+='</g>';
  /* the route the vesicles take, faint */
  g+='<path class="am" d="M'+P0[0]+' '+P0[1]+'Q'+PC[0]+' '+PC[1]+' '+P1[0]+' '+P1[1]+'"/>';
  /* cargo duplexes and vesicles */
  g+='<g id="scCg">';for(i=0;i<NV;i++)g+='<g class="cg"><path d="M-7 -2c2.3-3 4.7 3 7 0s4.7 3 7 0"/><path d="M-7 2c2.3-3 4.7 3 7 0s4.7 3 7 0"/></g>';g+='</g>';
  g+='<g id="scVes">';for(i=0;i<NV;i++)g+='<g class="ves"><circle class="vo" r="11"/><circle class="vf" r="8"/><circle class="vi" r="8"/></g>';g+='</g>';
  if(!mob){
    g+='<g id="lCell"><text class="t" x="180" y="424" text-anchor="middle">HUMAN STEM CELL</text></g>';
    g+='<g id="lEx"><text class="t" x="392" y="186" text-anchor="middle">EXOSOMES</text></g>';
    g+='<g id="lCg"><text class="t" x="392" y="78" text-anchor="middle">SIRNA CARGO</text></g>';
    g+='<g id="lNeu"><text class="t" x="684" y="376">NEURON</text></g>';
  }else{
    g+='<g id="lCell"><text class="t" x="180" y="436" text-anchor="middle">STEM CELL</text></g>';
    g+='<g id="lEx"></g><g id="lCg"></g>';
    g+='<g id="lNeu"><text class="t" x="540" y="436" text-anchor="middle">NEURON</text></g>';
  }
  var ly=SCH-6,lx=mob?60:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'EXOSOMES LEAVE THE CELL':'STEM CELLS RELEASE SMALL EXTRACELLULAR VESICLES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'EACH LOADED WITH SIRNA':'EACH VESICLE IS LOADED WITH SIRNA')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DELIVERED TO THE NEURON':'THE VESICLES DELIVER THEIR CARGO TO THE NEURON')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),ves:$$("#scVes .ves",svg),cg:$$("#scCg .cg",svg),hN:$("#hNeu",svg),
    lCell:$("#lCell",svg),lEx:$("#lEx",svg),lCg:$("#lCg",svg),lNeu:$("#lNeu",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function tr(el,x,y,s){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(s!=null?" scale("+s.toFixed(3)+")":""))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    E.ves.forEach(function(el,i){
      /* 1. bud from the multivesicular body and leave the cell, one after another */
      var f=sm((s1-i*.07)/(1-(NV-1)*.07)),x,y,sc=1,o=f>0?Math.min(1,f*5):0;
      var rest=bez(vT(i));
      if(f<.35){var k=f/.35;x=MVB.x+(P0[0]-MVB.x)*k;y=MVB.y+(P0[1]-MVB.y)*k;sc=.45+.55*k}else{var q=bez(vT(i)*(f-.35)/.65);x=q[0];y=q[1]}
      /* 3. travel to the neuron and fuse with it */
      var g3=sm((s3-i*.06)/(1-(NV-1)*.06));
      if(g3>0){var q3=bez(vT(i)+(1-vT(i))*Math.min(1,g3/.85));x=q3[0];y=q3[1];if(g3>.85){var fz=(g3-.85)/.15;sc=1-.6*fz;o*=1-fz}}
      tr(el,x,y,sc);op(el,b*o);
      /* 2. the lumen turns blue as the cargo arrives */
      var c2=sm((s2-i*.06)/(1-(NV-1)*.06));el.querySelector(".vf").style.opacity=(c2*.9).toFixed(3);
      var cg=E.cg[i];if(cg){var cy=rest[1]-120+120*sm(c2/.8);tr(cg,rest[0],cy,1);op(cg,b*(c2>0?Math.min(1,c2*5):0)*(1-sm((c2-.8)/.2)))}
    });
    op(E.hN,b*sm((s3-.45)/.55));
    op(E.lCell,b);
    op(E.lEx,b*seg(p,.18,.26)*(1-seg(p,.3,.36)));
    op(E.lCg,b*seg(p,.38,.46)*(1-seg(p,.64,.7)));
    op(E.lNeu,b);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
