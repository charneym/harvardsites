/* The story scene (BL/BY/DB): one toroidal transformer, drawn in plan, as trans-tronic.co.uk > Toroidal Transformers and
   Laminated Transformers describe it ("Multiple primary and Secondary windings can be made where required", "you can add
   a goss band for screening purposes", "Our standard fixing comprises of 2 rubber pads, a metal clamp plate and an
   appropriate nut and bolt"). ONE scene kept on screen:
   Step 1 (Core): the bare ring core.
   Step 2 (Primary): the primary turns wind on round the ring, and its two leads come out.
   Step 3 (Secondary): the secondary turns go on over it, with their own two leads.
   Step 4 (Fixing): a rubber pad, the metal clamp plate and the nut and bolt go on through the centre.
   Turn counts are illustrative. */
var SCW=760,SCH=520;
var TT={cx:360,cy:262,ro:176,ri:84,n:64};
function ttP(r,a){return (TT.cx+r*Math.cos(a)).toFixed(1)+" "+(TT.cy+r*Math.sin(a)).toFixed(1)}
function ttTurns(id,cls,r0,r1,off){
  var g='<g id="'+id+'" class="'+cls+'">',k,a;
  for(k=0;k<TT.n;k++){a=-Math.PI/2+(k+off)/TT.n*Math.PI*2;g+='<path d="M'+ttP(r0,a)+'L'+ttP(r1,a)+'"/>'}
  return g+'</g>';
}
function ttScene(o){
  var g='',mob=o.mob,D=TT,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"150 40 470 450":"110 46 650 462")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ttCo" cx="'+D.cx+'" cy="'+D.cy+'" r="'+D.ro+'" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#2a332d"/><stop offset=".75" stop-color="#3a453e"/><stop offset="1" stop-color="#2a332d"/></radialGradient>'+
     '<radialGradient id="ttPl" cx="'+(D.cx-30)+'" cy="'+(D.cy-30)+'" r="150" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9ea69c"/><stop offset="1" stop-color="#5d665e"/></radialGradient></defs>';
  /* the rubber pad under it all (step 4) */
  g+='<circle id="ttPad" class="pad" cx="'+D.cx+'" cy="'+D.cy+'" r="'+(D.ro+12)+'"/>';
  /* the core: a ring */
  g+='<path id="ttCore" class="core" fill-rule="evenodd" d="M'+(D.cx+D.ro)+' '+D.cy+'A'+D.ro+' '+D.ro+' 0 1 0 '+(D.cx-D.ro)+' '+D.cy+'A'+D.ro+' '+D.ro+' 0 1 0 '+(D.cx+D.ro)+' '+D.cy+'ZM'+(D.cx+D.ri)+' '+D.cy+'A'+D.ri+' '+D.ri+' 0 1 1 '+(D.cx-D.ri)+' '+D.cy+'A'+D.ri+' '+D.ri+' 0 1 1 '+(D.cx+D.ri)+' '+D.cy+'Z"/>';
  /* the primary turns, then the secondary turns over them */
  g+=ttTurns("ttW1","w1",D.ri-3,D.ro+3,0);
  g+='<circle id="ttTp" class="tape" cx="'+D.cx+'" cy="'+D.cy+'" r="'+((D.ri+D.ro)/2)+'" stroke-width="'+(D.ro-D.ri+10)+'"/>';
  g+=ttTurns("ttW2","w2",D.ri-6,D.ro+6,.5);
  /* leads, right of the ring: primary above, secondary below */
  g+='<g id="ttL1" class="ld1"><path d="M'+ttP(D.ro+3,-.42)+'C560 150 600 140 640 132"/><path d="M'+ttP(D.ro+3,-.30)+'C566 182 604 172 640 166"/></g>';
  g+='<g id="ttL2" class="ld2"><path d="M'+ttP(D.ro+6,.30)+'C566 342 604 352 640 358"/><path d="M'+ttP(D.ro+6,.42)+'C560 374 600 384 640 392"/></g>';
  /* the clamp plate and the nut and bolt (step 4) */
  g+='<g id="ttFx" class="fx"><circle class="pl" cx="'+D.cx+'" cy="'+D.cy+'" r="118"/><path class="hx" d="M'+(D.cx+19)+' '+D.cy+'L'+(D.cx+9.5)+' '+(D.cy-16.5)+'L'+(D.cx-9.5)+' '+(D.cy-16.5)+'L'+(D.cx-19)+' '+D.cy+'L'+(D.cx-9.5)+' '+(D.cy+16.5)+'L'+(D.cx+9.5)+' '+(D.cy+16.5)+'Z"/><circle class="bo" cx="'+D.cx+'" cy="'+D.cy+'" r="7"/></g>';
  /* labels */
  g+='<g id="ttLc" class="lb"><text class="t" x="'+D.cx+'" y="'+(D.cy+5)+'" text-anchor="middle">CORE</text></g>';
  if(!mob){
    g+='<g id="ttLp" class="lb"><text class="t" x="648" y="153">PRIMARY</text></g>';
    g+='<g id="ttLs" class="lb"><text class="t" x="648" y="381">SECONDARY</text></g>';
    g+='<g id="ttLf" class="lb"><text class="t" x="'+D.cx+'" y="'+(D.cy-D.ro-30)+'" text-anchor="middle">CLAMP PLATE · NUT AND BOLT</text></g>';
  }else{g+='<g id="ttLp" class="lb"></g><g id="ttLs" class="lb"></g><g id="ttLf" class="lb"></g>'}
  var C=["THE RING CORE","PRIMARY WINDING","SECONDARY WINDING",mob?"STANDARD FIXING":"STANDARD FIXING · RUBBER PADS, PLATE, BOLT"];
  for(i=0;i<4;i++)g+='<g id="ttC'+i+'" class="cap"><text class="t" x="'+D.cx+'" y="'+(mob?482:494)+'" text-anchor="middle">'+C[i]+'</text></g>';
  return g+'</svg>';
}
function scene(){return ttScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var Q=function(s){return svg.querySelector(s)};
  var E={pad:Q("#ttPad"),core:Q("#ttCore"),w1:[].slice.call(svg.querySelectorAll("#ttW1 path")),w2:[].slice.call(svg.querySelectorAll("#ttW2 path")),tp:Q("#ttTp"),
    l1:Q("#ttL1"),l2:Q("#ttL2"),fx:Q("#ttFx"),lc:Q("#ttLc"),lp:Q("#ttLp"),ls:Q("#ttLs"),lf:Q("#ttLf"),C:[Q("#ttC0"),Q("#ttC1"),Q("#ttC2"),Q("#ttC3")]};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  var L1=[].slice.call(E.l1.querySelectorAll("path")),L2=[].slice.call(E.l2.querySelectorAll("path"));
  [].concat(L1,L2).forEach(function(p){var l=p.getTotalLength();p.style.strokeDasharray=l+" "+l;p.dataset.l=l});
  function draw(p,v){var l=+p.dataset.l;p.style.strokeDashoffset=(l*(1-Math.max(0,Math.min(1,v)))).toFixed(2)}
  return function(p,bb){
    if(!svg.isConnected)return;
    var s2=seg(p,.26,.46),s3=seg(p,.52,.72),s4=seg(p,.78,.92),n=E.w1.length;
    op(E.core,bb);
    /* 2: primary turns appear round the ring, clockwise from the top */
    E.w1.forEach(function(el,k){op(el,bb*Math.max(0,Math.min(1,s2*n-k)))});
    op(E.l1,bb*seg(p,.42,.44));L1.forEach(function(pp){draw(pp,seg(p,.42,.5))});
    /* 3: the secondary goes on over a wrap */
    op(E.tp,bb*seg(p,.5,.54)*.9);
    E.w2.forEach(function(el,k){op(el,bb*Math.max(0,Math.min(1,s3*n-k)))});
    op(E.l2,bb*seg(p,.68,.7));L2.forEach(function(pp){draw(pp,seg(p,.68,.76))});
    /* 4: pad, plate and bolt */
    op(E.pad,bb*seg(p,.76,.82));op(E.fx,bb*s4);
    /* labels */
    op(E.lc,bb*(1-seg(p,.22,.26)));op(E.lp,bb*seg(p,.48,.52));op(E.ls,bb*seg(p,.74,.78));op(E.lf,bb*seg(p,.88,.92));
    var cw=[[0,.24],[.27,.49],[.52,.74],[.77,1.01]];
    E.C.forEach(function(el,i){var a=cw[i][0],z=cw[i][1];op(el,bb*(i===0?1:seg(p,a,a+.02))*(i===3?1:1-seg(p,z,z+.02)))});
  };
}
