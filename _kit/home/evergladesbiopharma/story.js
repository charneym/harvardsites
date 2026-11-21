/* The story scene (BL/BY/DB/CX): Everglades' own anti-Scg3 approach, drawn as ONE continuous engraved scene that stays on
   screen for all three steps. A retina seen as its vessel tree: the optic disc at left, the arcades fanning right, fine
   branches at their tips. The lower-right field is the DR-stressed deep plexus, drawn with tortuous new sprouts.
   Step 1 (Compare) the tree engraves in and ligands settle on vessels everywhere. Step 2 (Target) only secretogranin III
   remains, bound to the diseased field alone, and leakage spreads around it. Step 3 (Block) humanized antibodies come in,
   each takes one Scg3, the leakage recedes and the sprouts draw back; the healthy tree is untouched throughout.
   Sources: NIH RePORTER 5R44EY027665-03 (Scg3 binds the DR-stressed deep plexus but not the healthier superficial and
   intermediate plexuses; VEGF binds both) and J Exp Med 2017 (PMID 28330905). */
var SCW=760,SCH=520,ODX=132,ODY=250,ODXf=ODX,ODYf=ODY,DK=1;
var RET=(function(){
  var sd=7,rnd=function(){sd=(sd*16807)%2147483647;return (sd-1)/2147483646};
  var segs=[];
  function grow(x,y,a,len,wd,dep,bend){
    var ex=x+len*Math.cos(a),ey=y+len*Math.sin(a),mx=x+len*.5*Math.cos(a-bend*.5)+0,my=y+len*.5*Math.sin(a-bend*.5);
    segs.push({x1:x,y1:y,cx:mx,cy:my,x2:ex,y2:ey,w:wd,dep:dep});
    if(dep>=6||len<14)return;
    var n=dep<2?1:2,sp=.34+rnd()*.22;
    if(n===1){grow(ex,ey,a+bend,len*.94,wd*.92,dep+1,bend);var s2=(bend>0?-1:1);grow(ex,ey,a+s2*(.55+rnd()*.25),len*.6,wd*.6,dep+2,bend*.4)}
    else{grow(ex,ey,a+bend*.6-sp*.5,len*(.7+rnd()*.12),wd*.74,dep+1,bend*.7);grow(ex,ey,a+bend*.6+sp*.6,len*(.62+rnd()*.12),wd*.66,dep+1,-bend*.4)}
  }
  /* four arcades leave the disc, two up, two down, plus short nasal branches to the left */
  grow(ODX+20,ODY-14,-.62,92,4.2,0,.2);grow(ODX+16,ODY-22,-1.05,80,3.4,0,.24);
  grow(ODX+20,ODY+14,.62,92,4.2,0,-.2);grow(ODX+16,ODY+22,1.05,80,3.4,0,-.24);
  grow(ODX-18,ODY-16,-2.4,54,2.4,2,-.2);grow(ODX-18,ODY+16,2.4,54,2.4,2,.2);
  grow(ODX+26,ODY-2,-.12,70,2.2,2,.12);grow(ODX+26,ODY+4,.18,70,2.2,2,-.12);
  /* fit the whole tree inside the frame (inside the corner ticks, clear of the caption band) */
  var x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;segs.forEach(function(s){[[s.x1,s.y1],[s.x2,s.y2]].forEach(function(q){x0=Math.min(x0,q[0]);y0=Math.min(y0,q[1]);x1=Math.max(x1,q[0]);y1=Math.max(y1,q[1])})});
  var k=Math.min((716-60)/(x1-x0),(456-58)/(y1-y0)),ox=60-x0*k+((716-60)-(x1-x0)*k)/2,oy=58-y0*k+((456-58)-(y1-y0)*k)/2;
  segs.forEach(function(s){["1","2"].forEach(function(n){s["x"+n]=s["x"+n]*k+ox;s["y"+n]=s["y"+n]*k+oy});s.cx=s.cx*k+ox;s.cy=s.cy*k+oy;s.w*=Math.max(.8,k)});
  ODXf=ODX*k+ox;ODYf=ODY*k+oy;DK=k;
  /* the diseased field: lower right */
  function sick(s){var mx=(s.x1+s.x2)/2,my=(s.y1+s.y2)/2;return mx>ODXf+170&&my>ODYf+40}
  segs.forEach(function(s){s.sick=sick(s)});
  var sickS=segs.filter(function(s){return s.sick&&s.dep>=3});
  /* tortuous sprouts from the tips of the sick branches */
  var spr=[];sickS.forEach(function(s,i){if(i%2)return;var a=Math.atan2(s.y2-s.y1,s.x2-s.x1),L=18+rnd()*12,d="M"+s.x2.toFixed(1)+" "+s.y2.toFixed(1),x=s.x2,y=s.y2;
    for(var k=0;k<4;k++){var aa=a+(k%2?.9:-.9)*(.6+rnd()*.4);x+=L*.34*Math.cos(aa);y+=L*.34*Math.sin(aa);d+="L"+x.toFixed(1)+" "+y.toFixed(1)}spr.push(d)});
  function on(s,t,off){var u=1-t,x=u*u*s.x1+2*u*t*s.cx+t*t*s.x2,y=u*u*s.y1+2*u*t*s.cy+t*t*s.y2;var a=Math.atan2(s.y2-s.y1,s.x2-s.x1)+Math.PI/2;return [x+off*Math.cos(a),y+off*Math.sin(a)]}
  /* ligands of step 1: on healthy and sick vessels alike */
  var lig=[],healthy=segs.filter(function(s){return !s.sick&&s.dep>=1&&s.x2<720&&s.y2>20&&s.y2<500});
  for(var i=0;i<26;i++){var s=healthy[Math.floor(rnd()*healthy.length)];lig.push({p:on(s,.3+rnd()*.5,(rnd()<.5?-1:1)*(s.w+3.5)),d:rnd()*.4})}
  /* secretogranin III: only on the sick field */
  var scg=[];for(i=0;i<14;i++){var t=sickS[(i*5)%sickS.length];scg.push({p:on(t,.25+((i*37)%10)/20,(i%2?-1:1)*(t.w+3.5)),d:(i%7)*.06})}
  var lx=0,ly=0;sickS.forEach(function(t){lx+=(t.x1+t.x2)/2;ly+=(t.y1+t.y2)/2});lx/=sickS.length||1;ly/=sickS.length||1;
  return {segs:segs,spr:spr,lig:lig,scg:scg,lc:[lx,ly]};
})();
function retScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="lkg"><stop offset="0" stop-color="#2fbf74" stop-opacity=".34"/><stop offset=".6" stop-color="#2fbf74" stop-opacity=".1"/><stop offset="1" stop-color="#2fbf74" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">RETINAL VASCULATURE</text>';
  g+='<text class="t tr" x="742" y="14" text-anchor="end">ANTI-SCG3</text>';
  g+='</g>';
  /* the leakage around the sick field, under the vessels */
  g+='<g id="scLeak"><ellipse cx="'+f(RET.lc[0])+'" cy="'+f(RET.lc[1])+'" rx="150" ry="96" fill="url(#lkg)"/><ellipse class="dsh2" cx="'+f(RET.lc[0])+'" cy="'+f(RET.lc[1])+'" rx="132" ry="82"/></g>';
  /* the optic disc */
  g+='<g id="scDisc"><circle class="gfill" cx="'+f(ODXf)+'" cy="'+f(ODYf)+'" r="'+f(30*DK)+'"/><circle class="gr sD" cx="'+f(ODXf)+'" cy="'+f(ODYf)+'" r="'+f(30*DK)+'"/><circle class="gr2 sD" cx="'+f(ODXf)+'" cy="'+f(ODYf)+'" r="'+f(14*DK)+'"/></g>';
  /* the vessel tree */
  g+='<g id="scTree">';
  RET.segs.forEach(function(s){g+='<path class="vt sD'+(s.sick?' sk':'')+'" stroke-width="'+f(Math.max(.7,s.w*.62))+'" d="M'+f(s.x1)+' '+f(s.y1)+'Q'+f(s.cx)+' '+f(s.cy)+' '+f(s.x2)+' '+f(s.y2)+'"/>'});
  g+='</g>';
  g+='<g id="scSpr">';RET.spr.forEach(function(d){g+='<path class="sp sD" d="'+d+'"/>'});g+='</g>';
  /* zone captions */
  g+='<g id="scZone"><text class="t" x="740" y="50" text-anchor="end">HEALTHY PLEXUS</text><text class="t" x="740" y="484" text-anchor="end">DR-STRESSED DEEP PLEXUS</text></g>';
  /* ligands, Scg3 and antibodies */
  g+='<g id="scLig">';RET.lig.forEach(function(l){g+='<circle class="lg" cx="'+f(l.p[0])+'" cy="'+f(l.p[1])+'" r="3.2"/>'});g+='</g>';
  g+='<g id="scScg">';RET.scg.forEach(function(l){g+='<circle class="sg" cx="'+f(l.p[0])+'" cy="'+f(l.p[1])+'" r="4.2"/>'});g+='</g>';
  g+='<g id="scAb">';RET.scg.forEach(function(l,k){g+='<path class="ab" data-k="'+k+'" d="M0 0L0 12M0 0L-7 -9M0 0L7 -9"/>'});g+='</g>';
  /* step labels, in the clear band at the foot; only one is ever visible (CY) */
  g+='<g id="lb1"><text class="a" x="18" y="514">LIGANDOMICS · EVERY LIGAND, BOTH TISSUES</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">SCG3 · BOUND TO DISEASED VESSELS ONLY</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">HUMANIZED ANTI-SCG3 · LEAKAGE REDUCED</text></g>';
  return g+'</svg>';
}
function scene(){return retScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),disc:dl("#scDisc .sD"),dfill:$("#scDisc .gfill",svg),
    tree:dl("#scTree .sD"),spr:dl("#scSpr .sD"),zone:$$("#scZone text",svg),leak:$("#scLeak",svg),
    lig:$$("#scLig circle",svg),scg:$$("#scScg circle",svg),ab:$$("#scAb .ab",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.2);
    draw(E.disc,Math.min(1,Math.max(b*b,grow*1.4)));op(E.dfill,b*.9);
    var tv=Math.min(1,Math.max(b*b,grow));
    draw(E.tree,tv);
    E.zone.forEach(function(el){op(el,b*seg(p,.06,.16))});
    /* step 1: ligands settle on every vessel; step 2: they leave, Scg3 binds the sick field */
    var lIn=seg(p,.08,.26),lOut=seg(p,.36,.46);
    E.lig.forEach(function(el,i){var d=RET.lig[i].d;op(el,b*Math.min(1,Math.max(0,(lIn-d*.5)*2.2))*(1-lOut)*.9)});
    var sIn=seg(p,.4,.56),leak=seg(p,.48,.62),abIn=seg(p,.68,.88),fix=seg(p,.8,.96);
    E.scg.forEach(function(el,i){var d=RET.scg[i].d;op(el,b*Math.min(1,Math.max(0,(sIn-d)*2.4))*(1-.7*fix))});
    draw(E.spr,Math.min(1,b*(.35+.65*leak))*(1-.75*fix));
    op(E.leak,b*leak*(1-.8*fix));
    /* step 3: one antibody to each Scg3, travelling in from the right */
    E.ab.forEach(function(el,i){var s=RET.scg[i],t=Math.min(1,Math.max(0,(abIn-s.d*.8)*1.6)),e=1-Math.pow(1-t,3);
      var x0=s.p[0]+150+i*6,y0=s.p[1]+40,x=x0+(s.p[0]-x0)*e,y=y0+(s.p[1]+14-y0)*e;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*Math.min(1,t*3))});
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}
