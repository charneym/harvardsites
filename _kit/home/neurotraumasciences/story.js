/* The story scene (DB/BL): NeuroTrauma Sciences' own mechanism (neurotraumasciences.com, Stroke and Science pages: after a
   stroke, inflammation, edema and cell death are triggered; immune cells such as microglia perpetuate the inflammation;
   NTS-104 is a prodrug that converts rapidly in plasma to NTS-105, a neuroactive steroid that readily crosses the blood
   brain barrier and acts on three receptors, with anti-inflammatory, anti-apoptotic and anti-edema activity), drawn as ONE
   continuous fine-line scene that fills the frame: a blood vessel across the top with the blood-brain barrier beneath it, a
   neuron (soma, nucleus, dendrites, axon) in the middle with three receptor sites, a neighbouring neuron, and a microglia.
   Frame 0 is already complete.
   Step 1 (injury): the supply in the vessel dims, the microglia glows (logo orange), signals drift to the neuron, an edema
   halo swells and the neuron dims.
   Step 2 (reach): NTS-104 rings enter the vessel, turn into solid NTS-105 in the plasma, cross the barrier and seat on the
   three receptor sites and the microglia.
   Step 3 (protect): the glow and the edema fade, the receptor sites light in the logo yellow and the neuron brightens.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
function bzp(P,t){var u=1-t;return [u*u*u*P[0]+3*u*u*t*P[2]+3*u*t*t*P[4]+t*t*t*P[6],u*u*u*P[1]+3*u*u*t*P[3]+3*u*t*t*P[5]+t*t*t*P[7]]}
function bzd(P){return "M"+P[0]+" "+P[1]+"C"+P.slice(2).join(" ")}
var VUP=[40,74,220,56,420,92,740,66],VLO=[40,126,220,108,420,144,740,118],VMD=[40,100,220,82,420,118,740,92],VBB=[40,140,220,122,420,158,740,132];
var SO=[300,334];
var RCS=(function(){return [-24,100,214].map(function(d){var a=d*Math.PI/180;return [Math.round(300+Math.cos(a)*40),Math.round(334+Math.sin(a)*40)]})})();
var MG=[566,462];
/* the x of a point along the vessel's centre line, by parameter (near-linear in x) */
function vAt(P,x){var lo=0,hi=1,i,m,p;for(i=0;i<22;i++){m=(lo+hi)/2;p=bzp(P,m);if(p[0]<x)lo=m;else hi=m}return bzp(P,(lo+hi)/2)}
function f1(v){return v.toFixed(1)}
/* particles: [exit x on the vessel, target] (three receptors and the microglia) */
var PT=[[352,RCS[0]],[296,RCS[1]],[236,RCS[2]],[520,[MG[0]-10,MG[1]-12]]];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 24 700 516':'40 24 700 536')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gAct"><stop offset="0" stop-color="#f26b3a" stop-opacity=".46"/><stop offset="1" stop-color="#f26b3a" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gEd"><stop offset="0" stop-color="#9fb8f0" stop-opacity=".0"/><stop offset=".55" stop-color="#9fb8f0" stop-opacity=".16"/><stop offset="1" stop-color="#9fb8f0" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gPro"><stop offset="0" stop-color="#fdbc2e" stop-opacity=".34"/><stop offset="1" stop-color="#fdbc2e" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hAct" cx="'+MG[0]+'" cy="'+MG[1]+'" r="120" fill="url(#gAct)"/>';
  g+='<ellipse class="halo" id="hEd" cx="'+SO[0]+'" cy="'+SO[1]+'" rx="150" ry="132" fill="url(#gEd)"/>';
  g+='<circle class="halo" id="hPro" cx="'+SO[0]+'" cy="'+SO[1]+'" r="140" fill="url(#gPro)"/>';
  g+='<g id="scBase">';
  /* the vessel: two walls, and the blood-brain barrier beneath */
  g+='<path class="wl sD" d="'+bzd(VUP)+'"/><path class="wl sD" d="'+bzd(VLO)+'"/>';
  g+='<path class="bbb" d="'+bzd(VBB)+'"/>';
  /* the neuron: soma, nucleus, dendrites with branches, the axon to the right */
  g+='<path class="wl sD nr" d="M300 274C334 274 362 300 360 334C358 366 336 392 300 390C262 388 238 364 240 332C242 298 266 274 300 274"/>';
  g+='<path class="wo sD nr" d="M300 312a22 22 0 1 0 0.1 0"/>';
  g+='<path class="wmd sD nr" d="M272 280C250 250 214 222 168 206"/><path class="wmd sD nr" d="M232 236C226 216 212 200 196 190"/><path class="wmd sD nr" d="M200 218C178 226 156 230 128 228"/>';
  g+='<path class="wmd sD nr" d="M326 280C344 248 372 222 420 206"/><path class="wmd sD nr" d="M376 230C396 214 404 196 406 176"/><path class="wmd sD nr" d="M400 214C424 214 444 222 466 236"/>';
  g+='<path class="wmd sD nr" d="M242 344C206 352 170 368 118 372"/><path class="wmd sD nr" d="M172 362C150 344 126 334 98 330"/>';
  g+='<path class="wmd sD nr" d="M262 382C240 414 216 446 192 486"/><path class="wmd sD nr" d="M226 432C206 436 182 434 156 428"/>';
  g+='<path class="wl sD nr" d="M356 356C420 378 470 398 520 400C560 402 600 396 640 384"/><path class="wmd sD nr" d="M640 384C664 372 684 364 708 362"/><path class="wmd sD nr" d="M640 384C662 392 680 404 698 420"/>';
  /* a neighbouring neuron, quieter */
  g+='<path class="wo sD" d="M628 216C646 216 660 230 658 248C656 264 644 276 626 274C608 272 598 260 600 244C602 228 612 216 628 216"/>';
  g+='<path class="wo sD" d="M640 218C650 200 664 188 690 180"/><path class="wo sD" d="M604 236C586 226 566 222 540 224"/><path class="wo sD" d="M626 274C624 300 626 324 634 352"/>';
  /* the microglia: a small body with branching processes */
  g+='<path class="wl sD" d="M'+(MG[0]+15)+' '+MG[1]+'a15 15 0 1 0 0.1 0"/>';
  [[-70,.9],[-120,.8],[-160,.85],[160,.7],[120,.6],[60,.62],[20,.8],[-20,.85]].forEach(function(q){
    var a=q[0]*Math.PI/180,L=62*q[1],x0=MG[0]+Math.cos(a)*15,y0=MG[1]+Math.sin(a)*15,x1=MG[0]+Math.cos(a)*(15+L),y1=MG[1]+Math.sin(a)*(15+L),
        bx=MG[0]+Math.cos(a)*(15+L*.55),by=MG[1]+Math.sin(a)*(15+L*.55),b2=a+.6;
    g+='<path class="wmd sD" d="M'+f1(x0)+' '+f1(y0)+'L'+f1(x1)+' '+f1(y1)+'"/><path class="wmd sD" d="M'+f1(bx)+' '+f1(by)+'L'+f1(bx+Math.cos(b2)*L*.34)+' '+f1(by+Math.sin(b2)*L*.34)+'"/>'});
  g+='</g>';
  /* receptor sites: open cups facing out from the nucleus */
  g+='<g id="scRc">';RCS.forEach(function(r){g+='<rect class="rc" x="'+(r[0]-5.5)+'" y="'+(r[1]-5.5)+'" width="11" height="11" transform="rotate(45 '+r[0]+' '+r[1]+')"/>'+
       '<rect class="rcl" x="'+(r[0]-3.5)+'" y="'+(r[1]-3.5)+'" width="7" height="7" transform="rotate(45 '+r[0]+' '+r[1]+')"/>'});g+='</g>';
  /* the blood flow, and the signals from the microglia */
  g+='<g id="scFl">';for(var i=0;i<9;i++)g+='<ellipse class="fl" rx="7" ry="4"/>';g+='</g>';
  g+='<g id="scCk">';for(i=0;i<6;i++)g+='<circle class="ck" r="3.6" cx="'+MG[0]+'" cy="'+MG[1]+'"/>';g+='</g>';
  /* NTS-104 rings that become solid NTS-105 */
  g+='<g id="scDr">';PT.forEach(function(){g+='<circle class="dr" r="6" cx="40" cy="100"/>'});g+='</g>';
  /* labels, each clear of every stroke (DR) */
  if(!mob){
    g+='<g id="lVs"><text class="t" x="740" y="50" text-anchor="end">BLOOD VESSEL</text></g>';
    g+='<g id="lBb"><text class="t" x="56" y="172">BLOOD–BRAIN BARRIER</text></g>';
    g+='<g id="lNr"><text class="t" x="86" y="300">NEURON</text></g>';
    g+='<g id="lMg"><text class="t" x="'+(MG[0]+72)+'" y="'+(MG[1]+48)+'">MICROGLIA</text></g>';
    g+='<g id="lRc"></g>';
  }else{
    g+='<g id="lVs"></g><g id="lBb"></g><g id="lNr"></g><g id="lMg"></g><g id="lRc"></g>';
  }
  var ly=mob?SCH-26:SCH-6,lx=mob?56:56;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'INFLAMMATION AND EDEMA':'INFLAMMATION, EDEMA AND CELL DEATH')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NTS-105 CROSSES THE BBB':'NTS-104 BECOMES NTS-105 AND CROSSES THE BBB')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'AR · PR-B · MR':'THREE RECEPTORS: AR · PR-B · MR')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),nr:$$("#scBase .nr",svg),bbb:$("#scBase .bbb",svg),rc:$$("#scRc .rc",svg),rcl:$$("#scRc .rcl",svg),fl:$$("#scFl .fl",svg),ck:$$("#scCk .ck",svg),dr:$$("#scDr .dr",svg),
    hA:$("#hAct",svg),hE:$("#hEd",svg),hP:$("#hPro",svg),
    lVs:$("#lVs",svg),lBb:$("#lBb",svg),lNr:$("#lNr",svg),lMg:$("#lMg",svg),lRc:$("#lRc",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var EX=PT.map(function(q){return vAt(VMD,q[0])});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.bbb,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    var inj=sm(seg(p,.06,.3))*(1-sm(seg(p,.7,.9)));
    /* the vessel's flow, dimmed while the supply is disrupted */
    E.fl.forEach(function(el,i){var t=((i/9)+p*.9)%1,q=bzp(VMD,.02+t*.96);el.setAttribute("cx",f1(q[0]));el.setAttribute("cy",f1(q[1]+(i%2?5:-5)));op(el,b*(1-.75*inj)*Math.min(1,Math.min(t,1-t)*12))});
    /* the neuron dims with the injury and brightens once protected */
    E.nr.forEach(function(el){el.style.opacity=(1-.5*inj).toFixed(3)});
    op(E.hA,b*sm(seg(p,.08,.3))*(1-sm(seg(p,.5,.8))));
    E.hE.setAttribute("transform","translate("+SO[0]+" "+SO[1]+") scale("+(0.7+.3*inj).toFixed(3)+") translate("+(-SO[0])+" "+(-SO[1])+")");op(E.hE,b*inj);
    op(E.hP,b*sm(seg(p,.74,.9)));
    /* 1. signals drift from the microglia to the neuron */
    E.ck.forEach(function(el,i){var f=sm((s1-i*.07)/.6),tx=SO[0]+50+(i%3)*14,ty=SO[1]+30+(i>>1)*10,x=MG[0]+(tx-MG[0])*f,y=MG[1]+(ty-MG[1])*f-Math.sin(f*Math.PI)*18;
      el.setAttribute("cx",f1(x));el.setAttribute("cy",f1(y));op(el,b*(f>0?Math.min(1,f*5):0)*(1-seg(p,.38,.5)))});
    /* 2. NTS-104 rings travel in the vessel, turn solid (NTS-105), cross the barrier and seat on their targets */
    E.dr.forEach(function(el,i){var w=seg(s2,i*.1,.62+i*.1),x0=40,ex=EX[i],tg=PT[i][1],x,y,solid;
      if(w<.55){var a=sm(w/.55),q=vAt(VMD,x0+(ex[0]-x0)*a);x=q[0];y=q[1];solid=seg(a,.35,.6)}
      else{var c=sm((w-.55)/.45);x=ex[0]+(tg[0]-ex[0])*c;y=ex[1]+(tg[1]-ex[1])*c;solid=1}
      el.setAttribute("cx",f1(x));el.setAttribute("cy",f1(y));el.style.fillOpacity=solid.toFixed(3);el.setAttribute("r",f1(6-1.5*solid));
      op(el,b*(w>0?Math.min(1,w*12):0)*(1-seg(p,.8,.9)))});
    /* 3. the receptor sites light */
    E.rcl.forEach(function(el,i){op(el,b*seg(p,.56+i*.03,.66+i*.03))});
    E.rc.forEach(function(el){el.style.stroke=p>.6?"#fdbc2e":"";op(el,b)});
    op(E.lVs,b*(1-seg(p,.5,.6)));op(E.lBb,b*seg(p,.36,.44)*(1-seg(p,.62,.7)));
    op(E.lNr,b*(1-seg(p,.2,.3)));op(E.lMg,b*seg(p,.06,.16)*(1-seg(p,.36,.44)));op(E.lRc,b*seg(p,.72,.8));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
