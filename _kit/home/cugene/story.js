/* The story scene (DB/BY): CUG252's mechanism as cugene.com states it ("Autoimmune diseases arise when immune tolerance
   breaks down. Deficiencies or functional impairments of regulatory T cells (Tregs) can lead to overpopulation of
   autoreactive effector T cells (Teffs) and B cell autoantibodies ... CUG252 is a precision engineered Treg-selective,
   long-acting IL-2 that abolishes binding to effector cells and retains full agonist activity on IL-2α. It restores full
   Treg functionality and suppresses autoantibody production."), drawn as ONE fine-line scene that fills the frame:
   a regulatory T cell (left) with its IL-2 receptors, effector T cells (right) and a B cell (below).
   Frame 0 is already a complete picture (balance).
   Step 1 (tolerance breaks): the Treg dims, effector T cells multiply and autoantibodies appear.
   Step 2 (CUG252): CUG252 (logo orange) drifts in past the effector cells and seats only on the Treg's receptors.
   Step 3 (balance): the Treg lights, the extra effector cells and the autoantibodies recede.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
function f1(v){return v.toFixed(1)}
var TR=[250,290,104];                       /* the Treg: cx, cy, r */
var RA=[200,236,272,308,344,20,56,92,128,164].map(function(d){return d*Math.PI/180}); /* IL-2 receptor angles (Treg) */
var EB=[[556,150,52],[668,300,52]];         /* effector T cells present at balance */
var EX=[[690,140,42],[528,318,42],[700,452,40]]; /* extra effector T cells in step 1 */
var BC=[420,480,46];                         /* B cell */
var AB=[[498,512,0.5],[560,470,-0.3],[514,416,0.9],[606,536,0.2],[588,404,-0.8]]; /* autoantibodies: x, y, angle */
/* CUG252 molecules: start points (from the upper left) and the receptor index each seats on */
var CU=[[70,70,0],[120,40,1],[40,170,9],[30,300,8],[60,470,7],[120,150,2]];
function recTip(a,k){return [TR[0]+Math.cos(a)*(TR[2]+k),TR[1]+Math.sin(a)*(TR[2]+k)]}
function yShape(x,y,a,L,arm){var c=Math.cos(a),s=Math.sin(a),mx=x+c*L,my=y+s*L,t=[-s,c];
  return "M"+f1(x)+" "+f1(y)+"L"+f1(mx)+" "+f1(my)+"M"+f1(mx)+" "+f1(my)+"L"+f1(mx+c*arm+t[0]*arm*.8)+" "+f1(my+s*arm+t[1]*arm*.8)+"M"+f1(mx)+" "+f1(my)+"L"+f1(mx+c*arm-t[0]*arm*.8)+" "+f1(my+s*arm-t[1]*arm*.8)}
function cell(x,y,r,cls){
  var nr=r*.42,nx=x-r*.12,ny=y+r*.08;
  return '<circle class="'+cls+'" cx="'+x+'" cy="'+y+'" r="'+r+'"/><circle class="wo '+cls+'" cx="'+f1(nx)+'" cy="'+f1(ny)+'" r="'+f1(nr)+'"/>';
}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="10 10 740 560" aria-hidden="true">';
  g+='<defs><radialGradient id="gTr"><stop offset="0" stop-color="#8cc0ec" stop-opacity=".5"/><stop offset="1" stop-color="#8cc0ec" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gEf"><stop offset="0" stop-color="#f6f8fa" stop-opacity=".16"/><stop offset="1" stop-color="#f6f8fa" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hTr" cx="'+TR[0]+'" cy="'+TR[1]+'" r="170" fill="url(#gTr)"/>';
  g+='<g id="scBase">';
  /* Treg membrane, nucleus and receptors */
  g+='<path class="wl sD" d="M'+(TR[0]+TR[2])+' '+TR[1]+'a'+TR[2]+' '+TR[2]+' 0 1 1 -'+(2*TR[2])+' 0a'+TR[2]+' '+TR[2]+' 0 1 1 '+(2*TR[2])+' 0"/>';
  g+='<path class="wo sD" d="M'+(TR[0]+30)+' '+(TR[1]+8)+'a42 42 0 1 1 -84 0a42 42 0 1 1 84 0"/>';
  RA.forEach(function(a){var b=recTip(a,0);g+='<path class="rc sD" d="'+yShape(b[0],b[1],a,14,8)+'"/>'});
  /* effector T cells at balance, and the B cell */
  EB.forEach(function(e){g+='<path class="wl sD" d="M'+(e[0]+e[2])+' '+e[1]+'a'+e[2]+' '+e[2]+' 0 1 1 -'+(2*e[2])+' 0a'+e[2]+' '+e[2]+' 0 1 1 '+(2*e[2])+' 0"/>'+
    '<path class="wo sD" d="M'+f1(e[0]-e[2]*.12+e[2]*.42)+' '+f1(e[1]+e[2]*.08)+'a'+f1(e[2]*.42)+' '+f1(e[2]*.42)+' 0 1 1 -'+f1(e[2]*.84)+' 0a'+f1(e[2]*.42)+' '+f1(e[2]*.42)+' 0 1 1 '+f1(e[2]*.84)+' 0"/>'});
  g+='<path class="wl sD" d="M'+(BC[0]+BC[2])+' '+BC[1]+'a'+BC[2]+' '+BC[2]+' 0 1 1 -'+(2*BC[2])+' 0a'+BC[2]+' '+BC[2]+' 0 1 1 '+(2*BC[2])+' 0"/>';
  g+='<path class="wo sD" d="M'+(BC[0]+16)+' '+(BC[1]+4)+'a22 22 0 1 1 -44 0a22 22 0 1 1 44 0"/>';
  g+='</g>';
  /* extra effector T cells (step 1) */
  g+='<g id="scEx">';EX.forEach(function(e){g+='<g class="ex" data-x="'+e[0]+'" data-y="'+e[1]+'"><circle cx="'+e[0]+'" cy="'+e[1]+'" r="'+(e[2]+14)+'" fill="url(#gEf)" stroke="none"/>'+cell(e[0],e[1],e[2],"wl")+'</g>'});g+='</g>';
  /* autoantibodies (step 1) */
  g+='<g id="scAb">';AB.forEach(function(a){g+='<path class="ab" d="'+yShape(a[0],a[1]+9,a[2]-Math.PI/2,9,8)+'"/>'});g+='</g>';
  /* CUG252 */
  g+='<g id="scCu">';CU.forEach(function(){g+='<g class="cu"><ellipse rx="8.5" ry="6.5"/></g>'});g+='</g>';
  /* labels, each clear of every stroke (DR) */
  if(!mob){
    g+='<g id="lTr"><text class="t" x="'+TR[0]+'" y="'+(TR[1]+TR[2]+52)+'" text-anchor="middle">REGULATORY T CELL</text></g>';
    g+='<g id="lEf"><text class="t" x="556" y="70" text-anchor="middle">EFFECTOR T CELLS</text></g>';
    g+='<g id="lB"><text class="t" x="'+(BC[0]-BC[2]-16)+'" y="'+(BC[1]+48)+'" text-anchor="end">B CELL</text></g>';
    g+='<g id="lCu"><text class="t a2" x="'+TR[0]+'" y="'+(TR[1]-TR[2]-74)+'" text-anchor="middle">CUG252 ON IL-2Rα</text></g>';
  }else{
    g+='<g id="lTr"><text class="t" x="'+TR[0]+'" y="'+(TR[1]+TR[2]+60)+'" text-anchor="middle">TREG</text></g>';
    g+='<g id="lEf"><text class="t" x="556" y="70" text-anchor="middle">EFFECTOR T CELLS</text></g>';
    g+='<g id="lB"></g><g id="lCu"><text class="t a2" x="'+TR[0]+'" y="'+(TR[1]-TR[2]-84)+'" text-anchor="middle">CUG252</text></g>';
  }
  var ly=SCH+2,lx=20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TOLERANCE BREAKS DOWN':'TOLERANCE BREAKS DOWN: EFFECTORS EXPAND')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CUG252 BINDS ONLY THE TREG':'CUG252 BINDS THE TREG, NOT THE EFFECTORS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IMMUNE BALANCE RESTORED':'TREGS RESTORED, IMMUNE BALANCE RETURNS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),ex:$$("#scEx .ex",svg),ab:$$("#scAb .ab",svg),cu:$$("#scCu .cu",svg),hT:$("#hTr",svg),
    lTr:$("#lTr",svg),lEf:$("#lEf",svg),lB:$("#lB",svg),lCu:$("#lCu",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),
    trc:$$("#scBase .rc",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    /* 1. effectors multiply and autoantibodies appear; both recede in step 3 */
    E.ex.forEach(function(el,i){var v=seg(p,.06+i*.05,.2+i*.05)*(1-seg(p,.7+i*.03,.84+i*.03)),x=+el.getAttribute("data-x"),y=+el.getAttribute("data-y"),k=.6+.4*v;
      el.setAttribute("transform","translate("+x+" "+y+") scale("+k.toFixed(3)+") translate("+(-x)+" "+(-y)+")");op(el,b*v)});
    E.ab.forEach(function(el,i){op(el,b*seg(p,.12+i*.03,.24+i*.03)*(1-seg(p,.72+i*.02,.86+i*.02)))});
    /* the Treg's receptors: present throughout; dimmed while tolerance is broken */
    E.trc.forEach(function(el){el.style.opacity=(1-.45*s1*(1-s2)).toFixed(3)});
    /* 2. CUG252 drifts in and seats on a Treg receptor */
    E.cu.forEach(function(el,i){var c=CU[i],tip=recTip(RA[c[2]],24),f=sm((p-.36-i*.025)/.2),
      x=c[0]+(tip[0]-c[0])*f,y=c[1]+(tip[1]-c[1])*f;el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") rotate("+f1(RA[c[2]]*180/Math.PI)+")");
      op(el,b*seg(p,.34+i*.02,.4+i*.02))});
    /* 3. the Treg lights */
    op(E.hT,b*s3);
    op(E.lTr,b*(1-seg(p,.05,.12)+seg(p,.7,.8)));
    op(E.lEf,b*(1-seg(p,.32,.4)+seg(p,.7,.8)));
    op(E.lB,b*seg(p,.14,.24)*(1-seg(p,.32,.4)));
    op(E.lCu,b*seg(p,.5,.58)*(1-seg(p,.68,.74)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
