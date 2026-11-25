/* The story scene (DB/DR): how a saturable absorber mirror (SAM) works, as BATOP describes it (batop.de, "How does a
   saturable absorber mirror (SAM) work?" and Saturable absorber): a Bragg mirror of AlAs/GaAs quarter-wave layers with a
   low-temperature GaAs absorber film in front of it, all grown on a GaAs wafer. Weak light is absorbed; an intense pulse
   saturates the absorber, which turns transparent, so reflectance rises with pulse energy; in a laser this gives
   self-starting passive mode-locking with a very stable pulse repetition rate.
   Drawn as ONE fine-line cross-section that fills the frame. Frame 0 is the complete stack. Step 2: a weak beam is absorbed
   (the film glows), then an intense pulse bleaches it and reflects. Step 3: the reflected light runs as a pulse train and
   the trace draws. Driven by scrubbed progress. No stroke uses vector-effect:non-scaling-stroke (DR4). */
var SCW=760,SCH=560;
var SX0=196,SX1=640,YA=214,YB0=240,NB=12,LH=14,YS=408,YW=500,HX=418;
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'180 10 585 545':'0 0 760 560')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the wafer, the Bragg layers and the absorber film */
  g+='<rect class="sb sD" x="'+SX0+'" y="'+YS+'" width="'+(SX1-SX0)+'" height="'+(YW-YS)+'"/>';
  for(i=0;i<NB;i++){var y=YB0+i*LH;g+='<rect class="ly sD" x="'+SX0+'" y="'+y+'" width="'+(SX1-SX0)+'" height="'+LH+'"/>'}
  g+='<rect class="lyA sD" x="'+SX0+'" y="'+YA+'" width="'+(SX1-SX0)+'" height="'+(YB0-YA)+'"/>';
  /* faint hatching in the substrate: single crystal */
  for(i=0;i<9;i++){var x=SX0+24+i*46;g+='<path class="hb sD" d="M'+x+' '+(YW-8)+'l30 -76"/>'}
  g+='</g>';
  /* the absorber state (glows while absorbing) */
  g+='<rect id="abs" class="ab" x="'+SX0+'" y="'+YA+'" width="'+(SX1-SX0)+'" height="'+(YB0-YA)+'"/>';
  /* beams: weak (dashed) in and a faint reflection; intense in and out; the reflected pulse train */
  var bin='M'+(HX-190)+' 24L'+HX+' '+YA,bout='M'+HX+' '+YA+'L'+(HX+190)+' 24';
  g+='<path id="bwI" class="bw" d="'+bin+'"/><path id="bwO" class="bw" d="'+bout+'"/>';
  g+='<path id="bsI" class="bs" d="'+bin+'"/><path id="bsO" class="bs" d="'+bout+'"/>';
  g+='<path id="ptO" class="bs" d="'+bout+'"/>';
  var pd='M652 150';[664,690,716,742].forEach(function(x){pd+='H'+(x-6)+'C'+(x-2)+' 150 '+(x-2)+' 96 '+x+' 96C'+(x+2)+' 96 '+(x+2)+' 150 '+(x+6)+' 150'});pd+='H754';
  g+='<path id="ptr" class="pt" d="'+pd+'"/>';
  if(!mob){
    g+='<g id="lAb"><path class="ld" d="M166 227H'+(SX0-8)+'"/><text class="t" x="14" y="231">LT-GaAs ABSORBER</text></g>';
    g+='<g id="lBr"><path class="ld" d="M166 324H'+(SX0-8)+'"/><text class="t" x="14" y="328">AlAs/GaAs MIRROR</text></g>';
    g+='<g id="lWf"><path class="ld" d="M114 454H'+(SX0-8)+'"/><text class="t" x="14" y="458">GaAs WAFER</text></g>';
    g+='<g id="lPt"><text class="t" x="652" y="174">PULSE TRAIN</text></g>';
  }else{g+='<g id="lAb"></g><g id="lBr"></g><g id="lWf"></g><g id="lPt"></g>'}
  var ly=mob?540:SCH-16,lx=mob?190:14;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GROWN LAYER BY LAYER':'MIRROR AND ABSORBER, GROWN LAYER BY LAYER')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SATURATED, IT REFLECTS':'AN INTENSE PULSE SATURATES IT, AND IT REFLECTS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PASSIVELY MODE-LOCKED':'THE LASER RUNS PASSIVELY MODE-LOCKED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),bsI:dl("#bsI")[0],bsO:dl("#bsO")[0],ptr:dl("#ptr")[0],bwI:$("#bwI",svg),bwO:$("#bwO",svg),ptO:$("#ptO",svg),abs:$("#abs",svg),
    lAb:$("#lAb",svg),lBr:$("#lBr",svg),lWf:$("#lWf",svg),lPt:$("#lPt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  /* the weak beam keeps its own dash pattern and fades; the pulse train is short dashes that run along the reflected path */
  E.ptO.style.strokeDasharray="10 34";
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);a[0].style.opacity=v>0?"1":"0"}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.lAb,b);op(E.lBr,b);op(E.lWf,b);
    /* step 2a: a weak beam arrives and is absorbed (the film glows), with only a faint reflection */
    var w=sm(seg(p,.36,.44))*(1-sm(seg(p,.5,.56)));op(E.bwI,b*w);op(E.bwO,b*w*.3);
    var glow=sm(seg(p,.38,.46))*(1-sm(seg(p,.52,.6)));
    E.abs.style.fill="rgba(79,176,236,"+(b*.45*glow).toFixed(3)+")";
    /* step 2b: an intense pulse bleaches the absorber and is reflected */
    var off=1-sm(seg(p,.74,.8));
    dr(E.bsI,sm(seg(p,.5,.58))*b*off);dr(E.bsO,sm(seg(p,.57,.66))*b*off);
    /* step 3: the reflected light runs as a train of short pulses; the trace draws to its end */
    op(E.ptO,b*sm(seg(p,.74,.82)));E.ptO.style.strokeDashoffset=(-p*220).toFixed(1);
    dr(E.ptr,b*sm(seg(p,.76,.9)));op(E.lPt,b*sm(seg(p,.82,.9)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.52,.58)*(1-seg(p,.68,.74)));op(E.l3,b*seg(p,.8,.88));
  };
}
