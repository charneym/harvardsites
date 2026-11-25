/* The story scene (DB/DR): how daisy chain testing works, as TopLine describes it (topline.tv, "Understanding Benefits of
   Daisy Chain"): a daisy chain package is mounted on a test vehicle board with complementary circuitry, forming one
   continuous loop through every joint (typically 50 mΩ or less between test points T1 and T2). The board is dropped,
   vibrated, frozen and heated until a connection breaks; the loop opens (∞ ohms), read with a simple ohm-meter.
   Drawn as ONE fine-line cross-section that fills the frame: package on columns over the board, the loop through the
   joints, and the meter. Step 2 draws the stress cycle above; step 3 cracks one joint and the meter reads open.
   Driven by scrubbed progress. No stroke uses vector-effect:non-scaling-stroke (DR4). */
var SCW=760,SCH=560;
var PX0=196,PX1=604,PY0=150,PY1=206,BY0=296,BY1=336,BX0=130,BX1=670,NC=8,YU=192,YD=316,KC=5;
function cxs(i){return 226+i*(574-226)/(NC-1)}
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'118 22 572 534':'0 0 760 560')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<rect class="pk sD" x="'+PX0+'" y="'+PY0+'" width="'+(PX1-PX0)+'" height="'+(PY1-PY0)+'"/>';
  g+='<path class="pkl sD" d="M'+(PX0+14)+' '+(PY0+12)+'H'+(PX1-14)+'"/>';
  g+='<rect class="bd sD" x="'+BX0+'" y="'+BY0+'" width="'+(BX1-BX0)+'" height="'+(BY1-BY0)+'"/>';
  for(i=0;i<NC;i++){var x=cxs(i);
    g+='<rect class="cl sD" x="'+(x-7)+'" y="'+PY1+'" width="14" height="'+(BY0-PY1)+'"/>';
    g+='<path class="cw sD" d="M'+(x-7)+' '+(PY1+16)+'l14 10M'+(x-7)+' '+(PY1+38)+'l14 10M'+(x-7)+' '+(PY1+60)+'l14 10"/>';
    g+='<path class="pd sD" d="M'+(x-12)+' '+BY0+'H'+(x+12)+'"/>'}
  g+='</g>';
  /* the daisy chain loop: T1, up and down through every joint, T2; and the meter leads */
  var d='M150 '+YD;for(i=0;i<NC;i++){var x2=cxs(i);d+='H'+x2.toFixed(1)+'V'+(i%2?YD:YU)}d+='H650';
  g+='<path id="chn" class="ch" d="'+d+'"/>';
  g+='<path id="ldA" class="ch" d="M150 '+YD+'V440H280"/><path id="ldB" class="ch" d="M650 '+YD+'V440H480"/>';
  g+='<circle class="tp" cx="150" cy="'+YD+'" r="4.5"/><circle class="tp" cx="650" cy="'+YD+'" r="4.5"/>';
  g+='<g id="mtr"><rect class="mt" x="280" y="410" width="200" height="60"/><text class="t" x="380" y="496" text-anchor="middle">OHM-METER</text></g>';
  g+='<text id="rd1" class="rd" x="380" y="447" text-anchor="middle">≤ 50 mΩ</text>';
  g+='<text id="rd2" class="rd hot" x="380" y="447" text-anchor="middle">∞ Ω · OPEN</text>';
  g+='<g id="tl"><text class="t" x="160" y="374">T1</text><text class="t" x="618" y="374">T2</text></g>';
  /* the stress cycle above the package */
  var w='M'+PX0+' 112';for(i=0;i<4;i++){var x0=PX0+i*102;w+='L'+(x0+16)+' 66H'+(x0+51)+'L'+(x0+67)+' 112H'+(x0+102)}
  g+='<path id="wv" class="wv" d="'+w+'"/>';
  g+='<g id="wl"><text class="t" x="'+PX0+'" y="44">HEAT · COLD · VIBRATION · DROP</text></g>';
  /* the joint that gives */
  var kx=cxs(KC);g+='<path id="ck" class="ck" d="M'+(kx-13)+' 280l6 6 6-6 6 6 7-6"/>';
  if(!mob){
    g+='<g id="lPk"><path class="ld" d="M84 178H'+(PX0-8)+'"/><text class="t" x="14" y="182">PACKAGE</text></g>';
    g+='<g id="lCl"><path class="ld" d="M84 252H'+(cxs(0)-15)+'"/><text class="t" x="14" y="256">COLUMNS</text></g>';
    g+='<g id="lBd"><path class="ld" d="M66 322H'+(BX0-8)+'"/><text class="t" x="14" y="326">BOARD</text></g>';
  }else{g+='<g id="lPk"></g><g id="lCl"></g><g id="lBd"></g>'}
  var ly=mob?544:SCH-16,lx=mob?128:14;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ONE LOOP THROUGH EVERY JOINT':'ONE CONTINUOUS LOOP THROUGH EVERY JOINT')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CYCLED UNTIL A JOINT GIVES':'HEATED, FROZEN AND SHAKEN UNTIL A JOINT GIVES')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE LOOP OPENS: NO GO':'THE LOOP OPENS, AND THE METER READS NO GO')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),chn:dl("#chn")[0],ldA:dl("#ldA")[0],ldB:dl("#ldB")[0],wv:dl("#wv")[0],ck:$("#ck",svg),
    tps:$$(".tp",svg),mtr:$("#mtr",svg),rd1:$("#rd1",svg),rd2:$("#rd2",svg),tl:$("#tl",svg),wl:$("#wl",svg),
    lPk:$("#lPk",svg),lCl:$("#lCl",svg),lBd:$("#lBd",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.lPk,b);op(E.lCl,b);op(E.lBd,b);op(E.mtr,b);E.tps.forEach(function(t){op(t,b)});op(E.tl,b);
    /* step 1: the loop draws through every joint, then the meter leads, and the meter reads closed */
    var c=b*sm(seg(p,.06,.24)),l=b*sm(seg(p,.2,.27));dr(E.chn,c);dr(E.ldA,l);dr(E.ldB,l);
    /* step 3: one joint cracks, the loop dims, the meter reads open */
    var brk=sm(seg(p,.7,.77));
    E.chn[0].style.opacity=(c>0?1-.62*brk:0).toFixed(3);E.ldA[0].style.opacity=E.ldB[0].style.opacity=(l>0?1-.62*brk:0).toFixed(3);
    op(E.rd1,b*sm(seg(p,.25,.3))*(1-sm(seg(p,.72,.76))));op(E.rd2,b*sm(seg(p,.76,.81)));op(E.ck,b*brk);
    /* step 2: the stress cycle draws to its end and stays */
    var wv=b*sm(seg(p,.38,.58));dr(E.wv,wv);E.wv[0].style.opacity=wv>0?"1":"0";op(E.wl,b*sm(seg(p,.38,.46)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
