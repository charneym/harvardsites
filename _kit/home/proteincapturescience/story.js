/* the story scene (BL/BY/DB): ONE engraved cross-section of an iCapTag column, kept on screen for all three steps:
   three resin beads carrying the tag's partner, tagged target proteins, and host-cell impurities.
   Step 1 (capture) the tagged targets flow in and dock while impurities pass. Step 2 (wash) buffer carries the impurities out.
   Step 3 (release) a pH shift: the intein cuts itself away, the tagless proteins elute downward and the red tags stay on the resin.
   Sources: proteincapturescience.com (home page: "release of the target protein from the column is triggered by a change in pH";
   the six-step diagram: strip and equilibrate, bind, wash, shift pH, wait and elute, strip and reuse). Schematic, not to scale.
   Driven by the scrubbed story progress. */
var PCS=(function(){
  var B=[{c:[220,300],a:[-145,-95,180,95,145]},{c:[400,300],a:[-115,-65,65,115]},{c:[580,300],a:[-85,-35,0,35,85]}],R=62,T=[],i;
  B.forEach(function(b,bi){b.a.forEach(function(d){var t=d*Math.PI/180,u=[Math.cos(t),Math.sin(t)];
    T.push({b:bi,u:u,s0:[b.c[0]+u[0]*R,b.c[1]+u[1]*R],s1:[b.c[0]+u[0]*(R+14),b.c[1]+u[1]*(R+14)],tg:[b.c[0]+u[0]*(R+22),b.c[1]+u[1]*(R+22)],
      p:[b.c[0]+u[0]*(R+48),b.c[1]+u[1]*(R+48)],ang:d})})});
  /* entry order: top targets first, then the sides, then those under the beads */
  var ord=T.slice().sort(function(a,b){return a.p[1]-b.p[1]});ord.forEach(function(t,j){t.j=j});
  var IMP=[],lanes=[86,310,490,714,150,650,355,445,98,700];
  for(i=0;i<10;i++)IMP.push({x:lanes[i],s:i,r:9+(i*7)%6});
  return {B:B,R:R,T:T,IMP:IMP};
})();
function pblob(r,s,k){var d='',n=48,i;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,q=r*k*(1+.12*Math.sin(3*t+s)+.07*Math.sin(5*t+s*1.7)+.04*Math.cos(7*t+s*.6));
  d+=(i?'L':'M')+(q*Math.cos(t)).toFixed(1)+' '+(q*Math.sin(t)).toFixed(1)}return d+'Z'}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="pgl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff4d42" stop-opacity=".55"/><stop offset="1" stop-color="#ff4d42" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="colc"><rect x="41" y="30" width="718" height="481"/></clipPath><radialGradient id="bgl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f4f2ee" stop-opacity=".07"/><stop offset="1" stop-color="#f4f2ee" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* column walls with engraved ticks, and the frit at the bottom */
  var tk='';for(i=0;i<21;i++){var y=40+i*22;tk+='M40 '+y+'h'+(i%5?6:12)+'M760 '+y+'h-'+(i%5?6:12)}
  g+='<path class="wl sD" d="M40 30V530M760 30V530"/><path class="tk sD" d="'+tk+'"/>';
  var fr='M40 512H760M40 522H760';for(i=0;i<36;i++)fr+='M'+(52+i*20)+' 512l-8 10';g+='<path class="fr sD" d="'+fr+'"/>';
  /* resin beads: outline, engraved pore arcs, stipple */
  PCS.B.forEach(function(b,bi){var cx=b.c[0],cy=b.c[1];
    g+='<circle cx="'+cx+'" cy="'+cy+'" r="'+(PCS.R*1.7)+'" fill="url(#bgl)"/>';
    g+='<circle class="bd sD" cx="'+cx+'" cy="'+cy+'" r="'+PCS.R+'"/>';
    var arcs='';[.82,.62,.42,.22].forEach(function(k,j){var r=PCS.R*k,a0=(-150+j*40+bi*25)*Math.PI/180,a1=a0+(1.7+j*.35);
      arcs+='M'+f(cx+r*Math.cos(a0))+' '+f(cy+r*Math.sin(a0))+'A'+f(r)+' '+f(r)+' 0 0 1 '+f(cx+r*Math.cos(a1))+' '+f(cy+r*Math.sin(a1));
      var b0=a1+.7,b1=b0+(1.1+j*.2);arcs+='M'+f(cx+r*Math.cos(b0))+' '+f(cy+r*Math.sin(b0))+'A'+f(r)+' '+f(r)+' 0 0 1 '+f(cx+r*Math.cos(b1))+' '+f(cy+r*Math.sin(b1))});
    g+='<path class="pa sD" d="'+arcs+'"/>';
    for(i=0;i<26;i++){var aa=i*2.399+bi,rr=PCS.R*.92*Math.sqrt((i+.5)/26);g+='<circle class="stp" cx="'+f(cx+rr*Math.cos(aa))+'" cy="'+f(cy+rr*Math.sin(aa))+'" r="1.1"/>'}
  });
  /* ligands: a stalk and the tag's partner (a cup) on each bead */
  var lg='';PCS.T.forEach(function(t){lg+='M'+f(t.s0[0])+' '+f(t.s0[1])+'L'+f(t.s1[0])+' '+f(t.s1[1])});g+='<path class="lg sD" d="'+lg+'"/>';
  PCS.T.forEach(function(t){g+='<path class="cp" transform="translate('+f(t.s1[0])+' '+f(t.s1[1])+') rotate('+t.ang+')" d="M0 -8a8 8 0 0 1 8 8a8 8 0 0 1 -8 8"/>'});
  g+='<text class="t" x="748" y="548" text-anchor="end">iCapTag COLUMN · SCHEMATIC, NOT TO SCALE</text>';
  g+='</g>';
  g+='<g id="scMove" clip-path="url(#colc)">';
  /* buffer flow lines (wash) */
  var fl='';[86,150,310,355,445,490,650,714].forEach(function(x){fl+='M'+x+' 40V500'});g+='<path class="fl" d="'+fl+'"/>';
  /* impurities: dashed, untagged */
  PCS.IMP.forEach(function(m,j){g+='<g class="im" id="im'+j+'"><path d="'+pblob(m.r,m.s+3,1)+'"/></g>'});
  /* tagged targets: red tag + engraved protein */
  PCS.T.forEach(function(t,k){g+='<g class="tp" id="tp'+k+'"><g class="pb"><circle r="34" fill="url(#bgl)"/><path class="po" d="'+pblob(20,k*1.3,1)+'"/><path class="pi" d="'+pblob(20,k*1.3+.4,.62)+'"/><path class="pi2" d="'+pblob(20,k*1.3+.8,.3)+'"/></g>'+
    '<g class="tgg"><circle class="gl" r="16" fill="url(#pgl)"/><ellipse class="tgc" rx="7" ry="5.5"/></g><circle class="sp" r="6"/></g>'});
  g+='</g>';
  /* labels, one set per step */
  var t0=PCS.T.filter(function(t){return t.ang===-145})[0],tb=PCS.T.filter(function(t){return t.ang===-65})[0];
  g+='<g id="lb1"><text class="a" x="60" y="'+(mob?96:110)+'">'+(mob?'TAGGED PROTEIN':'TAGGED TARGET PROTEIN')+'</text><path class="ldr" d="M120 '+(mob?110:120)+'L'+f(t0.p[0]-6)+' '+f(t0.p[1]-18)+'"/>'+
     (mob?'':'<text class="t" x="60" y="134">BINDS THE PARTNER ON THE RESIN</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="400" y="'+(mob?490:482)+'" text-anchor="middle">'+(mob?'IMPURITIES OUT':'WASH · IMPURITIES OUT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="60" y="'+(mob?96:110)+'">'+(mob?'TAGLESS PROTEIN':'pH SHIFT · TAGLESS PROTEIN ELUTES')+'</text>'+(mob?'':'<text class="t" x="60" y="134">DOWN AND OUT OF THE COLUMN</text>')+
     '<text class="a" x="740" y="'+(mob?96:110)+'" text-anchor="end">'+(mob?'TAG STAYS':'THE TAG STAYS ON THE RESIN')+'</text><path class="ldr" d="M690 '+(mob?110:120)+'L'+f(tb.tg[0]+8)+' '+f(tb.tg[1]-8)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .stp, #scBase .cp",svg),mv:$("#scMove",svg),fl:$(".fl",svg),
    im:PCS.IMP.map(function(m,j){return $("#im"+j,svg)}),tp:PCS.T.map(function(t,k){var g=$("#tp"+k,svg);return {g:g,pr:$(".pb",g),tg:$(".tgg",g),sp:$(".sp",g)}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    /* step 1: tagged targets flow in from the top and dock, in order */
    PCS.T.forEach(function(t,k){var o=E.tp[k],a=seg(p,.02+t.j*.014,.15+t.j*.014),
      rel=seg(p,.68+t.j*.008,.9+t.j*.008),
      sx=t.tg[0]+(t.u[0]<0?-30:30)*(t.p[1]>300?1:.4),sy=-60,
      x=sx+(t.tg[0]-sx)*a,y=sy+(t.tg[1]-sy)*a;
      if(t.p[1]>300&&a<1){/* the targets under a bead come round its side */var side=t.u[0]<0?-1:1,bc=PCS.B[t.b].c;x+=side*Math.max(0,(PCS.R+40)-Math.abs(x-bc[0]))*Math.sin(a*Math.PI)*.9}
      tr(o.tg,x,y);
      /* the protein sits beyond its tag; on release it drops away, tagless, and the tag stays */
      var px=x+t.u[0]*26+t.u[0]*14*rel,py=y+t.u[1]*26+rel*420;
      tr(o.pr,px,py);tr(o.sp,x+t.u[0]*12,y+t.u[1]*12);
      op(o.tg,b*Math.min(1,a*3));op(o.pr,b*Math.min(1,a*3)*(1-seg(rel,.55,1)));
      var s0=.68+t.j*.008,sk=seg(p,s0,s0+.04)*(1-seg(p,s0+.06,s0+.12));op(o.sp,b*sk);o.sp.setAttribute("r",(4+10*seg(p,s0,s0+.12)).toFixed(1))});
    /* impurities pass through during capture and are washed out */
    PCS.IMP.forEach(function(m,j){var q=Math.max(0,Math.min(1,(p-.01-j*.04)/.5)),y=-40+q*660;tr(E.im[j],m.x+8*Math.sin(q*9+j),y);op(E.im[j],b*(q>0&&q<1?1:0)*seg(q,.04,.12)*(1-seg(q,.72,.86)))});
    /* buffer flow during the wash */
    op(E.fl,b*seg(p,.3,.4)*(1-seg(p,.6,.68))*.9);E.fl.style.strokeDashoffset=(-p*900).toFixed(1);
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.72,.8));
  };
}
