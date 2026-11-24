/* The story scene (DB/BL): DiscoGel®'s own mechanism, as Gelscom and discogel.com describe it (Hernie discale, Vos questions):
   a herniated disc presses on a nerve root; under fluoroscopy the radiopaque gel is injected into the disc and finds its way
   along the fissures to the hernia; water migrates from the periphery to the centre, the hernia dries and its pressure on the
   nerve drops (discal decompression), the gel settling as a "soft prosthesis". Drawn as ONE fine-line axial view of a lumbar
   disc (anterior up) that fills the frame. Nothing is drawn as an injury (DT).
   Frame 0 is complete: the disc, the canal and both nerve roots. Step 1: the hernia bulges onto the left root, which lights.
   Step 2: the needle draws in, the gel fills the nucleus and runs along the fissure. Step 3: water arrows point inward, the
   hernia retracts and the root calms. Driven by scrubbed progress. */
var SCW=760,SCH=560;
var DC=[380,248],DRX=205,DRY=140,HTH=118*Math.PI/180;
function f1(v){return v.toFixed(1)}
function rAt(t,h){var c=Math.cos(t),s=Math.sin(t),r=1/Math.sqrt(c*c/(DRX*DRX)+s*s/(DRY*DRY));
  var d=Math.atan2(Math.sin(t-Math.PI/2),Math.cos(t-Math.PI/2));r-=30*Math.exp(-Math.pow(d/(25*Math.PI/180),2));
  var e=Math.atan2(Math.sin(t-HTH),Math.cos(t-HTH));r+=46*h*Math.exp(-Math.pow(e/(10*Math.PI/180),2));return r}
function discD(h,k){k=k||1;var N=120,P=[],i;for(i=0;i<N;i++){var t=i/N*Math.PI*2,r=rAt(t,h)*k;P.push([DC[0]+Math.cos(t)*r,DC[1]+Math.sin(t)*r])}
  var d='M'+f1(P[0][0])+' '+f1(P[0][1]);for(i=0;i<N;i++){var p0=P[(i-1+N)%N],p1=P[i],p2=P[(i+1)%N],p3=P[(i+2)%N];
    d+='C'+f1(p1[0]+(p2[0]-p0[0])/6)+' '+f1(p1[1]+(p2[1]-p0[1])/6)+' '+f1(p2[0]-(p3[0]-p1[0])/6)+' '+f1(p2[1]-(p3[1]-p1[1])/6)+' '+f1(p2[0])+' '+f1(p2[1])}return d+'Z'}
function tip(h,extra){var r=rAt(HTH,h)+(extra||0);return [DC[0]+Math.cos(HTH)*r,DC[1]+Math.sin(HTH)*r]}
var ROOT=tip(0,62),ROOT2=[2*DC[0]-ROOT[0],ROOT[1]];
var NDL=[[676,490],[418,262]];
var WAT=[200,235,270,305,340,20,55,160].map(function(a){var t=a*Math.PI/180,r0=rAt(t,0);return [DC[0]+Math.cos(t)*r0*.9,DC[1]+Math.sin(t)*r0*.9,DC[0]+Math.cos(t)*r0*.62,DC[1]+Math.sin(t)*r0*.62]});
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'70 84 620 476':'40 56 700 514')+'" aria-hidden="true">';
  /* the disc: outer annulus (morphs with the hernia), inner annulus lamellae, the nucleus */
  g+='<g id="scDisc"><path id="dOut" class="wl" d="'+discD(0)+'"/><path id="dHer" class="hz" d="'+discD(0)+'"/>'+
     '<path class="wo sD" d="'+discD(0,.86)+'"/><path class="wo sD" d="'+discD(0,.72)+'"/>'+
     '<ellipse class="en" cx="'+DC[0]+'" cy="'+(DC[1]-6)+'" rx="92" ry="60" stroke-dasharray="3 5"/></g>';
  /* the spinal canal behind the disc, the dural sac, and two nerve roots */
  g+='<g id="scCan"><path class="wl sD" d="M258 382C246 456 326 520 380 523C434 520 514 456 502 382"/><circle class="wo sD" cx="380" cy="440" r="40"/>'+
     '<circle id="rtL" class="rt" cx="'+f1(ROOT[0])+'" cy="'+f1(ROOT[1])+'" r="15"/><circle id="rtG" class="rg" cx="'+f1(ROOT[0])+'" cy="'+f1(ROOT[1])+'" r="24"/>'+
     '<circle class="rt" cx="'+f1(ROOT2[0])+'" cy="'+f1(ROOT2[1])+'" r="15"/></g>';
  /* the fissure the gel follows, the gel itself, the needle */
  var T1=tip(1,-6);
  g+='<path id="fis" class="fs" d="M352 278C340 312 332 336 '+f1((T1[0]+330)/2)+' '+f1((T1[1]+352)/2)+'S'+f1(T1[0]+4)+' '+f1(T1[1]-8)+' '+f1(T1[0])+' '+f1(T1[1])+'"/>';
  g+='<ellipse id="gel" class="gl" cx="392" cy="252" rx="62" ry="38"/>';
  g+='<g id="ndl"><path id="ndlL" class="nd" d="M'+NDL[0][0]+' '+NDL[0][1]+'L'+NDL[1][0]+' '+NDL[1][1]+'"/></g>';
  /* water drawn inward in step 3 */
  g+='<g id="wat">'+WAT.map(function(w){var a=Math.atan2(w[3]-w[1],w[2]-w[0]),x=w[2],y=w[3],l=7;
     return '<path class="wa" d="M'+f1(w[0])+' '+f1(w[1])+'L'+f1(x)+' '+f1(y)+'M'+f1(x-l*Math.cos(a-.5))+' '+f1(y-l*Math.sin(a-.5))+'L'+f1(x)+' '+f1(y)+'L'+f1(x-l*Math.cos(a+.5))+' '+f1(y-l*Math.sin(a+.5))+'"/>'}).join("")+'</g>';
  if(!mob){
    var TP=tip(1,0);
    g+='<g id="lDs"><path class="ld" d="M380 104V90"/><text class="t" x="380" y="80" text-anchor="middle">DISQUE INTERVERTÉBRAL</text></g>';
    g+='<g id="lHe"><path class="ld" d="M'+f1(TP[0]-14)+' '+f1(TP[1]-4)+'L180 '+f1(TP[1]-28)+'"/><text class="t" x="172" y="'+f1(TP[1]-24)+'" text-anchor="end">HERNIE</text></g>';
    g+='<g id="lRt"><path class="ld" d="M'+f1(ROOT[0]-12)+' '+f1(ROOT[1]+14)+'L190 500"/><text class="t" x="182" y="504" text-anchor="end">RACINE NERVEUSE</text></g>';
    g+='<g id="lGl"><path class="ld" d="M440 226L566 150"/><text class="t o" x="574" y="148">GEL RADIO-OPAQUE</text></g>';
    g+='<g id="lNd"><text class="t" x="628" y="478" text-anchor="end">AIGUILLE</text></g>';
    g+='<g id="lDc"><path class="ld" d="M'+f1(ROOT[0]-14)+' '+f1(ROOT[1]-10)+'L180 '+f1(TP[1]-28)+'"/><text class="t o" x="172" y="'+f1(TP[1]-24)+'" text-anchor="end">DÉCOMPRESSION</text></g>';
  }else{g+='<g id="lDs"></g><g id="lHe"></g><g id="lRt"></g><g id="lGl"></g><g id="lNd"></g><g id="lDc"></g>'}
  var ly=SCH-6,lx=mob?90:56;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LA HERNIE COMPRIME LE NERF':'UNE HERNIE COMPRIME LA RACINE NERVEUSE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LE GEL GAGNE LA HERNIE':'LE GEL GAGNE LA HERNIE PAR LES FISSURES')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LE NERF EST LIBÉRÉ':'LA HERNIE S’ASSÈCHE, LE NERF EST LIBÉRÉ')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),out:$("#dOut",svg),her:$("#dHer",svg),rt:$("#rtL",svg),rg:$("#rtG",svg),fis:dl("#fis")[0],gel:$("#gel",svg),ndl:dl("#ndlL")[0],wa:$$("#wat .wa",svg),
    lDs:$("#lDs",svg),lHe:$("#lHe",svg),lRt:$("#lRt",svg),lGl:$("#lGl",svg),lNd:$("#lNd",svg),lDc:$("#lDc",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastH=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.out,b);
    /* the hernia grows in step 1 and retracts in step 3 */
    var h=sm(seg(p,.04,.24))*(1-.78*sm(seg(p,.72,.92)));h=Math.round(h*200)/200;
    if(h!==lastH){lastH=h;var d=discD(h);E.out.setAttribute("d",d);E.her.setAttribute("d",d)}
    op(E.her,b);
    /* the left root lights while it is compressed */
    var cmp=sm(seg(p,.14,.26))*(1-sm(seg(p,.76,.92)));E.rt.classList.toggle("on",cmp>.5);op(E.rg,b*cmp*.9);
    /* the needle draws in, then withdraws */
    var nd=sm(seg(p,.36,.46))*(1-sm(seg(p,.66,.74)));E.ndl[0].style.strokeDashoffset=(E.ndl[1]*(1-nd)).toFixed(1);op(E.ndl[0],b*(nd>0?1:0));
    /* the gel fills the nucleus and follows the fissure */
    var gf=sm(seg(p,.44,.54));E.gel.setAttribute("transform","translate(392 252) scale("+(.15+.85*gf).toFixed(3)+") translate(-392 -252)");op(E.gel,b*gf);
    var ff=sm(seg(p,.5,.62));E.fis[0].style.strokeDashoffset=(E.fis[1]*(1-ff)).toFixed(1);op(E.fis[0],b*(ff>0?1:0));
    /* water migrates from the periphery to the centre */
    var w=seg(p,.7,.8)*(1-seg(p,.9,.97)*.6);E.wa.forEach(function(el,i){op(el,b*sm((w*1.4-i*.05)))});
    op(E.lDs,b*(1-seg(p,.04,.1)));op(E.lHe,b*seg(p,.16,.22)*(1-seg(p,.34,.38)));op(E.lRt,b*seg(p,.2,.26)*(1-seg(p,.34,.38)));
    op(E.lGl,b*seg(p,.5,.56)*(1-seg(p,.66,.7)));op(E.lNd,b*seg(p,.4,.45)*(1-seg(p,.62,.66)));op(E.lDc,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
