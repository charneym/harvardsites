/* The story scene (DB/BL): Inatherys' own mechanism, as the company and the ANSM documents state it (inatherys.com:
   "Preclinical studies have shown that tumor cells, with high proliferative capacity, strongly express the CD71 receptor.
   Therefore antibody against CD71 will preferentially target cancer cells."; ANSM protocol, April 2025: INA03 is the
   humanised IgG4 anti-CD71 (TfR1) antibody INA01 with MMAE, "un agent perturbant les microtubules", attached through the
   SDV1 linker, CD71 being "une cible directe pour délivrer des médicaments cytotoxiques aux cellules cancéreuses").
   ONE continuous fine-line scene that fills the frame: a large tumour cell (membrane, nucleus, microtubules radiating
   from the centrosome) bristling with CD71 receptors, beside a small healthy cell with few. Frame 0 is complete.
   Step 1 (target): the CD71 receptors on the tumour cell light up in the logo teal.
   Step 2 (bind): INA03 antibodies, each carrying its MMAE payload (logo violet), drift in and dock on the receptors.
   Step 3 (deliver): the bound complexes are taken inside the cell, the payload is released and the microtubules break up.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560,CX=470,CY=310,CR=200,NUC=[536,334,72],CEN=[408,296];
var RANG=[];(function(){for(var a=0;a<360;a+=15)RANG.push(a)})();
var BOUND=[105,120,135,150,165,180,195,210,225];
var MTA=[95,120,145,170,195,220,245,270,300,325,60,40];
function pol(a,r){var t=a*Math.PI/180;return [CX+r*Math.cos(t),CY-r*Math.sin(t)]}
function rotOf(a){var t=a*Math.PI/180,nx=Math.cos(t),ny=-Math.sin(t);return Math.atan2(-nx,ny)*180/Math.PI}
function mtPath(a){var e=pol(a,CR-20),mx=(CEN[0]+e[0])/2,my=(CEN[1]+e[1])/2,dx=e[0]-CEN[0],dy=e[1]-CEN[1],L=Math.hypot(dx,dy),k=(a%2?14:-12);
  return "M"+CEN[0]+" "+CEN[1]+"Q"+(mx-dy/L*k).toFixed(1)+" "+(my+dx/L*k).toFixed(1)+" "+e[0].toFixed(1)+" "+e[1].toFixed(1)}
function mtMid(a,f){var e=pol(a,CR-20);return [CEN[0]+(e[0]-CEN[0])*f,CEN[1]+(e[1]-CEN[1])*f]}
var RECEP='<path d="M0 0V14"/><circle cx="0" cy="18" r="4.2"/>';
var AB='<path d="M-7 0L0 9L7 0M0 9V21"/><circle class="py" cx="-4" cy="16" r="2.6"/><circle class="py" cx="4" cy="16" r="2.6"/>';
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'150 60 560 500':'40 30 700 530')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gtum"><stop offset="0" stop-color="#5fd0e6" stop-opacity=".16"/><stop offset="1" stop-color="#5fd0e6" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gmm"><stop offset="0" stop-color="#c77fbf" stop-opacity=".34"/><stop offset="1" stop-color="#c77fbf" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hTum" cx="'+CX+'" cy="'+CY+'" r="'+(CR+40)+'" fill="url(#gtum)"/><circle class="halo" id="hMm" cx="'+CEN[0]+'" cy="'+CEN[1]+'" r="'+(CR-10)+'" fill="url(#gmm)"/>';
  g+='<g id="scBase">';
  g+='<circle class="wl sD" cx="'+CX+'" cy="'+CY+'" r="'+CR+'"/><circle class="wo sD" cx="'+CX+'" cy="'+CY+'" r="'+(CR-7)+'"/>';
  g+='<circle class="wmd sD" cx="'+NUC[0]+'" cy="'+NUC[1]+'" r="'+NUC[2]+'"/><circle class="wo sD" cx="'+(NUC[0]+18)+'" cy="'+(NUC[1]-12)+'" r="16"/>';
  g+='<g id="scMt">';MTA.forEach(function(a){g+='<path class="mt sD" d="'+mtPath(a)+'"/>'});g+='</g>';
  g+='<circle class="wmd sD" cx="'+CEN[0]+'" cy="'+CEN[1]+'" r="5"/>';
  if(!mob){g+='<circle class="wl sD" cx="128" cy="128" r="56"/><circle class="wo sD" cx="128" cy="128" r="50"/><circle class="wmd sD" cx="136" cy="134" r="20"/>'}
  g+='</g>';
  /* the broken microtubules that replace the whole ones once MMAE is released */
  g+='<g id="scMtB">';MTA.forEach(function(a){g+='<path class="mtb" d="'+mtPath(a)+'"/>'});g+='</g>';
  /* CD71 receptors */
  g+='<g id="scRec">';RANG.forEach(function(a){var p=pol(a,CR);g+='<g class="rc" data-a="'+a+'" transform="translate('+p[0].toFixed(1)+' '+p[1].toFixed(1)+') rotate('+rotOf(a).toFixed(1)+')">'+RECEP+'</g>'});g+='</g>';
  if(!mob){g+='<g id="scRecN">';[[150],[20]].forEach(function(q){var t=q[0]*Math.PI/180,x=128+56*Math.cos(t),y=128-56*Math.sin(t),r=Math.atan2(-Math.cos(t),-Math.sin(t))*180/Math.PI;
    g+='<g class="rcn" transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+r.toFixed(1)+')">'+RECEP+'</g>'});g+='</g>'}
  /* vesicles that carry the bound complexes in */
  g+='<g id="scVes">';BOUND.forEach(function(a){var p=pol(a,CR-58);g+='<circle class="ves" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="17"/>'});g+='</g>';
  /* INA03 antibodies with their payload */
  g+='<g id="scAb">';BOUND.forEach(function(){g+='<g class="ab">'+AB+'</g>'});g+='</g>';
  g+='<g id="scPay">';BOUND.forEach(function(){g+='<circle class="pf" r="2.8" cx="0" cy="0"/><circle class="pf" r="2.8" cx="0" cy="0"/>'});g+='</g>';
  /* labels, each with a leader that stops short of its text (DR) */
  if(!mob){
    g+='<g id="lNorm"><text class="t" x="128" y="218" text-anchor="middle">HEALTHY CELL</text><text class="t q" x="128" y="234" text-anchor="middle">FEW CD71</text></g>';
    g+='<g id="lTum"><path class="ld" d="M612 128L634 84"/><text class="t" x="640" y="70" text-anchor="middle">TUMOUR CELL</text></g>';
    g+='<g id="lCd"><path class="ld" d="M690 378L716 410"/><text class="t" x="722" y="430" text-anchor="end">CD71</text></g>';
    g+='<g id="lAb"><text class="t" x="206" y="388" text-anchor="end">INA03</text><text class="t q" x="206" y="404" text-anchor="end">ANTI-CD71 ADC</text></g>';
    g+='<g id="lMm"><path class="ld" d="M690 250L716 222"/><text class="t" x="722" y="208" text-anchor="end">MMAE</text></g>';
  }else{g+='<g id="lNorm"></g><g id="lTum"></g><g id="lCd"></g><g id="lAb"></g><g id="lMm"></g>'}
  var ly=SCH-6,lx=mob?166:56;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TUMOUR CELLS CARRY CD71':'TUMOUR CELLS STRONGLY EXPRESS CD71')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'INA03 BINDS CD71':'INA03 BINDS CD71 ON THE TUMOUR CELL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MMAE BREAKS MICROTUBULES':'MMAE IS DELIVERED AND DISRUPTS MICROTUBULES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),mt:$("#scMt",svg),mtb:$("#scMtB",svg),rec:$$("#scRec .rc",svg),ves:$$("#scVes .ves",svg),abs:$$("#scAb .ab",svg),pay:$$("#scPay .pf",svg),
    hT:$("#hTum",svg),hM:$("#hMm",svg),lNorm:$("#lNorm",svg),lTum:$("#lTum",svg),lCd:$("#lCd",svg),lAb:$("#lAb",svg),lMm:$("#lMm",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var recOf={};E.rec.forEach(function(r){recOf[+r.getAttribute("data-a")]=r});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function tr(el,p,a){el.setAttribute("transform","translate("+p[0].toFixed(1)+" "+p[1].toFixed(1)+") rotate("+rotOf(a).toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.34,.62),s3=seg(p,.66,.94);
    /* 1. the receptors light up */
    E.rec.forEach(function(r,i){op(r,b*(.35+.65*sm((s1*1.4)-i*.016)));r.classList.toggle("on",s1>.05+i*.01)});
    op(E.hT,b*s1*(1-.5*s3));
    op(E.lNorm,b*seg(p,.06,.16));op(E.lTum,b*seg(p,.06,.16));
    op(E.lCd,b*seg(p,.12,.22)*(1-seg(p,.34,.4)));
    /* 2. antibodies drift in and dock; 3. the complexes go inside, the payload is released */
    var ins=sm(seg(p,.66,.78));
    BOUND.forEach(function(a,i){var f=sm(seg(p,.34+i*.022,.5+i*.022)),r0=CR+150,r1=CR+22,da=(1-f)*(i%2?14:-14);
      var rr=r0+(r1-r0)*f-ins*80,aa=a+da,ab=E.abs[i];
      tr(ab,pol(aa,rr),aa);op(ab,b*Math.min(1,f*4)*(1-seg(p,.8,.86)));
      var rc=recOf[a];if(rc){tr(rc,pol(a,CR-ins*80),a)}
      op(E.ves[i],b*ins*(1-seg(p,.84,.9)));
      var rel=sm(seg(p,.8+i*.008,.9+i*.008));
      [0,1].forEach(function(k){var d=E.pay[i*2+k],st=pol(aa,rr+16),tg=mtMid(MTA[(i*2+k)%MTA.length],.55+.2*k);
        var q=rel>0?[st[0]+(tg[0]-st[0])*rel,st[1]+(tg[1]-st[1])*rel]:st;d.setAttribute("cx",q[0].toFixed(1));d.setAttribute("cy",q[1].toFixed(1));op(d,b*(rel>0?1:0))})});
    op(E.lAb,b*seg(p,.5,.58)*(1-seg(p,.64,.7)));
    /* the microtubules break up as the payload arrives */
    var brk=sm(seg(p,.84,.94));op(E.mt,1-brk);op(E.mtb,b*brk);op(E.hM,b*brk);
    op(E.lMm,b*seg(p,.86,.92));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
