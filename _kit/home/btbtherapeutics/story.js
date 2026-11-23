/* The story scene (DB/BY): how BTB-101 is designed to work, from btbtherapeutics.com (Pipeline: "ENDOPIN: α2 adrenergic
   analgesia", BTB-101 blocks α2B receptors in spinal cord) and the PNAS paper title, as ONE continuous scene in fine line:
   a synapse in the dorsal horn. Below, the pain pathway: the nociceptor's terminal meets a dorsal horn neuron across the
   cleft, and the pain signal runs on to the brain. Above, a noradrenergic fibre descending from the brain ends in a
   bouton full of noradrenaline vesicles, with α2B receptors on its flanks; α2A receptors sit on the pain pathway.
   Step 1 (pain): the signal crosses and climbs. Step 2 (brake): a little noradrenaline is released, some reaches α2A,
   some feeds back onto α2B, which holds release back. Step 3 (relief): BTB-101 molecules dock on α2B, much more
   noradrenaline reaches the α2A receptors and the signal beyond the synapse fades. Frame 0 is already a complete
   picture. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var BX=380,BY=190;                                  /* the bouton */
var A2B=[[288,182],[458,182]];                      /* α2B receptor boxes (x,y of top-left, bouton space), on the bouton flanks */
/* the bouton group is drawn 1.3x about its centre; the pain pathway 1.3x taller about y=400 */
var BT='matrix(1.3 0 0 1.3 -114 -57)',PT='matrix(1 0 0 1.3 0 -120)';
function bm(x,y){return [1.3*x-114,1.3*y-57]}
var A2A=[[478,361],[512,361]];                      /* α2A receptors on the pain pathway */
var MOL=[[[64,200],[251,194]],[[704,200],[509,194]]]; /* BTB-101 paths: start, docked */
var NAF=[[366,268,486,368],[386,268,520,368]];      /* noradrenaline on the brake step: from the bouton to α2A */
var NAB=[[344,264,276,222]];                        /* noradrenaline feeding back onto α2B */
var NAR=[[354,266,482,368],[368,268,492,368],[384,268,516,368],[398,266,526,368],[362,268,488,368],[392,268,512,368]];
function diamond(s){return '<path d="M0 '+(-s)+'L'+s+' 0L0 '+s+'L'+(-s)+' 0Z"/>'}
function hexa(r){var d='',i;for(i=0;i<=6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}return '<path d="'+d+'Z"/><circle r="'+(r*.38).toFixed(1)+'"/>'}
function synScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep,id){return (o.mob&&!keep)?'':'<text'+(id?' id="'+id+'"':'')+' class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="fdL" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".12" stop-color="#fff" stop-opacity="1"/></linearGradient>'+
     '<linearGradient id="fdR" x1="0" x2="1" y1="0" y2="0"><stop offset=".88" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
     '<linearGradient id="fdT" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".22" stop-color="#fff" stop-opacity="1"/></linearGradient>'+
     '<mask id="mkL" maskUnits="userSpaceOnUse" x="0" y="300" width="380" height="180"><rect x="0" y="300" width="380" height="180" fill="url(#fdL)"/></mask>'+
     '<mask id="mkR" maskUnits="userSpaceOnUse" x="380" y="300" width="380" height="180"><rect x="380" y="300" width="380" height="180" fill="url(#fdR)"/></mask>'+
     '<mask id="mkT" maskUnits="userSpaceOnUse" x="280" y="0" width="200" height="270"><rect x="280" y="0" width="200" height="270" fill="url(#fdT)"/></mask></defs>';
  g+='<g id="scBase">';
  /* the nociceptor terminal (left) and the dorsal horn neuron (right), meeting across the cleft */
  g+='<g transform="'+PT+'">';
  g+='<path class="fl" mask="url(#mkL)" d="M0 384L296 384C332 384 350 366 366 354L366 446C350 434 332 416 296 416L0 416Z"/>';
  g+='<path class="fl" mask="url(#mkR)" d="M760 384L464 384C428 384 410 366 394 354L394 446C410 434 428 416 464 416L760 416Z"/>';
  g+='<g mask="url(#mkL)"><path class="wl sD" d="M0 384L296 384C332 384 350 366 366 354L366 446C350 434 332 416 296 416L0 416"/></g>';
  g+='<g mask="url(#mkR)"><path class="wl sD" d="M760 384L464 384C428 384 410 366 394 354L394 446C410 434 428 416 464 416L760 416"/></g>';
  g+='</g>';
  /* the descending noradrenergic fibre and its bouton */
  g+='<g transform="'+BT+'">';
  var bout='M367 0L367 110C367 132 302 140 302 190C302 234 340 252 380 252C420 252 458 234 458 190C458 140 393 132 393 110L393 0';
  g+='<path class="fl" mask="url(#mkT)" d="'+bout+'Z"/>';
  g+='<g mask="url(#mkT)"><path class="wl sD" d="'+bout+'"/><path class="wo sD" d="M373 0L373 112C373 138 309 146 309 190C309 228 344 245 380 245C416 245 451 228 451 190C451 146 387 138 387 112L387 0"/></g>';
  /* vesicles full of noradrenaline */
  g+='<g id="scVes">';[[352,176],[386,166],[414,190],[372,206],[400,220],[344,214]].forEach(function(q){g+='<g class="ves" transform="translate('+q[0]+' '+q[1]+')"><circle r="13"/><g class="na" transform="translate(-4 -3)">'+diamond(3.4)+'</g><g class="na" transform="translate(4 4)">'+diamond(3.4)+'</g></g>'});g+='</g>';
  /* receptors */
  g+='<g id="scB2">';A2B.forEach(function(q){g+='<rect class="r2b" x="'+q[0]+'" y="'+q[1]+'" width="14" height="22"/>'});g+='</g>';
  g+='</g>';
  g+='<g id="scA2">';A2A.forEach(function(q){g+='<rect class="r2a" x="'+q[0]+'" y="'+q[1]+'" width="16" height="18"/>'});g+='</g>';
  g+=T('t',418,40,'DESCENDING FIBRE FROM THE BRAIN','start');
  g+=T('t',250,166,'α2B','end',1);
  g+=T('t',542,376,'α2A','start',1);
  g+=T('t',40,490,'FROM THE INJURY','start');
  g+=T('t',380,490,'DORSAL HORN SYNAPSE','middle');
  g+=T('t',720,490,'TO THE BRAIN','end');
  g+='</g>';
  /* dynamic: the pain signal, noradrenaline, the feedback arc, BTB-101 */
  g+='<g id="scPul">';for(i=0;i<5;i++)g+='<circle class="pu" r="8" cx="0" cy="400"/>';g+='</g>';
  g+='<path id="scFb" class="fb" d="M336 278C300 282 274 260 270 224"/>';
  g+='<g id="scNa">';NAF.concat(NAB).forEach(function(){g+='<g class="nr">'+diamond(5)+'</g>'});g+='</g>';
  g+='<g id="scNr">';NAR.forEach(function(){g+='<g class="nr">'+diamond(5)+'</g>'});g+='</g>';
  g+=T('t a',368,300,'NORADRENALINE','end',1,'scNaL');
  g+='<g id="scMol">';MOL.forEach(function(){g+='<g class="mol">'+hexa(9)+'</g>'});g+='</g>';
  g+=T('t a',40,176,'BTB-101, BY MOUTH','start',0,'scMolL');
  /* step labels, in the clear band under the scene */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'PAIN SIGNAL TO THE BRAIN':'THE PAIN SIGNAL CROSSES AND CLIMBS TO THE BRAIN')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'α2B HOLDS RELEASE BACK':'α2B FEEDBACK HOLDS NORADRENALINE BACK')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'BTB-101 BLOCKS α2B':'BTB-101 BLOCKS α2B, α2A DAMPS THE SIGNAL')+'</text></g>';
  return g+'</svg>';
}
function scene(){return synScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .fl, #scVes, #scB2, #scA2",svg),b2:$$("#scB2 .r2b",svg),a2:$$("#scA2 .r2a",svg),
    pul:$$("#scPul .pu",svg),fb:$("#scFb",svg),na:$$("#scNa .nr",svg),nr:$$("#scNr .nr",svg),nal:$("#scNaL",svg),
    mol:$$("#scMol .mol",svg),moll:$("#scMolL",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var fbL=E.fb.getTotalLength();E.fb.style.strokeDasharray=fbL+" "+fbL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  function fall(el,r,t,rot){var x=lerp(r[0],r[2],t),y=lerp(r[1],r[3],t);el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(rot*t).toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var rel=seg(p,.84,.94),dock=seg(p,.68,.8);
    /* the pain signal: pulses run left to right; beyond the synapse they fade once BTB-101 acts */
    E.pul.forEach(function(el,k){var f=(p*4.2+k/5)%1,x=lerp(-10,770,f);el.setAttribute("cx",x.toFixed(1));
      var edge=Math.min(1,Math.max(0,(x-10)/50))*Math.min(1,Math.max(0,(750-x)/50)),gap=Math.min(1,Math.abs(x-380)/22);
      op(el,b*edge*gap*(x>380?1-.86*rel:1))});
    /* 2. the brake: a little noradrenaline reaches α2A, some feeds back onto α2B (which lights), the arc shows the feedback */
    var r1=seg(p,.38,.5),r2=seg(p,.44,.54);
    E.na.forEach(function(el,k){var t=k<NAF.length?r1:r2,r=k<NAF.length?NAF[k]:NAB[0];fall(el,r,t,k%2?90:-90);op(el,b*(t>0?Math.min(1,t*5):0)*(1-seg(p,.66,.72)))});
    E.fb.style.strokeDashoffset=(fbL*(1-seg(p,.5,.58))).toFixed(1);op(E.fb,b*(1-seg(p,.7,.76)));
    var brake=seg(p,.52,.58)*(1-dock);E.b2.forEach(function(el){el.classList.toggle("on",brake>.5)});
    /* 3. BTB-101 travels in and docks on α2B; much more noradrenaline reaches α2A */
    E.mol.forEach(function(el,k){var m=MOL[k],x=lerp(m[0][0],m[1][0],dock),y=lerp(m[0][1],m[1][1],dock);el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(dock*60).toFixed(1)+")");op(el,b*seg(p,.6,.68))});
    op(E.moll,b*seg(p,.6,.66)*(1-seg(p,.72,.78)));
    E.nr.forEach(function(el,k){var t=Math.min(1,Math.max(0,rel*1.25-k*.04));fall(el,NAR[k],t,k%2?90:-90);op(el,b*(t>0?Math.min(1,t*5):0))});
    E.a2.forEach(function(el){el.classList.toggle("on",rel>.5||(r1>.95&&p<.66))});
    op(E.nal,b*seg(p,.42,.5));
    op(E.l1,b*seg(p,.04,.1)*(1-seg(p,.28,.33)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.67)));op(E.l3,b*seg(p,.76,.84));
  };
}
