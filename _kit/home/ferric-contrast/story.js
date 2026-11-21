/* the story scene (BL/BY/DB): ONE engraved iron complex, kept on screen for all three steps. Step 1 the macrocycle draws in
   (a 1,4,7-triazacyclononane ring, three hydroxypropyl arms) and the high-spin Fe(III) centre lights, bound by three N and three O.
   Step 2 water molecules come in to the iron and leave again while T1 relaxation rings spread from the centre (the relaxivity that
   rivals gadolinium at 4.7 T). Step 3 the anionic complex travels with the blood to an engraved kidney, which fills as it clears:
   the renal pathway seen in mice. Sources: NSF awards 1746556 and 1951127 (abstracts and outcomes), NIH RePORTER 1R41CA301774-01,
   Snyder et al., Angew. Chem. 2020. Schematic; geometry is illustrative. Driven by the scrubbed story progress. */
var FEX=(function(){
  var C=[300,282],R=84,f=function(n){return +(+n).toFixed(1)};
  function pol(a,r){a=a*Math.PI/180;return [f(C[0]+r*Math.cos(a)),f(C[1]+r*Math.sin(a))]}
  var ring=[],i;for(i=0;i<9;i++)ring.push(pol(-90+i*40,R));            /* N at 0, 3, 6 */
  var N=[ring[0],ring[3],ring[6]],arms=[];
  for(i=0;i<3;i++){var a0=-90+i*120;arms.push({n:N[i],c1:pol(a0+8,R+60),c2:pol(a0+36,R+88),me:pol(a0+46,R+140),o:pol(a0+60,R+28)})}
  var W=[];for(i=0;i<7;i++){var an=-150+i*50+(i%2?12:-6);W.push({a:an,far:236+(i%3)*12,near:i%2?146:162})}
  return {C:C,R:R,ring:ring,N:N,arms:arms,W:W,pol:pol,K:{c:[652,300]},DX:92};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=FEX.C,K=FEX.K.c;
  function P(a){return f(a[0])+' '+f(a[1])}
  function kidney(s){var x=K[0],y=K[1];function q(dx,dy){return f(x+dx*s)+' '+f(y+dy*s)}
    return 'M'+q(4,-140)+'C'+q(78,-142)+' '+q(118,-74)+' '+q(118,4)+'C'+q(118,84)+' '+q(74,140)+' '+q(2,140)+'C'+q(-52,140)+' '+q(-80,104)+' '+q(-62,62)+'C'+q(-52,38)+' '+q(-32,24)+' '+q(-32,2)+'C'+q(-32,-22)+' '+q(-52,-36)+' '+q(-62,-60)+'C'+q(-80,-104)+' '+q(-52,-140)+' '+q(4,-140)+'Z'}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"50 28 732 512":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="feg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#c4602f" stop-opacity=".62"/><stop offset=".55" stop-color="#c4602f" stop-opacity=".16"/><stop offset="1" stop-color="#c4602f" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="kdg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#68cdf5" stop-opacity=".42"/><stop offset=".7" stop-color="#68cdf5" stop-opacity=".12"/><stop offset="1" stop-color="#68cdf5" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* faint engraved field: concentric contour lines around the iron centre */
  g+='<g id="cxA">';for(i=0;i<3;i++)g+='<circle class="ct sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+(200+i*38)+'"/>';
  /* the macrocycle: nine ring atoms, three of them nitrogen */
  var rp='M'+P(FEX.ring[0]);for(i=1;i<9;i++)rp+='L'+P(FEX.ring[i]);rp+='Z';
  g+='<path class="rg sD" d="'+rp+'"/>';
  FEX.arms.forEach(function(a){g+='<path class="rg sD" d="M'+P(a.n)+'L'+P(a.c1)+'L'+P(a.c2)+'L'+P(a.o)+'M'+P(a.c2)+'L'+P(a.me)+'"/>'});
  FEX.ring.forEach(function(p,k){if(k%3)g+='<circle class="cn" cx="'+p[0]+'" cy="'+p[1]+'" r="3"/>'});
  FEX.arms.forEach(function(a){[a.c1,a.c2,a.me].forEach(function(p){g+='<circle class="cn" cx="'+p[0]+'" cy="'+p[1]+'" r="3"/>'})});
  g+='</g><text class="t" x="16" y="546">FE(III) MACROCYCLIC COMPLEX · SCHEMATIC</text>';
  /* the kidney (engraved: capsule, cortex line, medullary pyramids, ureter) and the vessel leading to it */
  g+='<g id="kid"><circle cx="'+K[0]+'" cy="'+K[1]+'" r="170" fill="url(#kdg)" class="kgl"/>'+
     '<path class="kd sD" d="'+kidney(1)+'"/><path class="kd2 sD" d="'+kidney(.84)+'"/>';
  var py=[[40,-92,-20],[78,-36,-6],[84,30,6],[52,92,22]];
  py.forEach(function(q){var bx=K[0]+q[0],by=K[1]+q[1],tx=K[0]-14,ty=K[1]+q[2];g+='<path class="kd3 sD" d="M'+f(bx-16)+' '+f(by-10)+'Q'+f((bx+tx)/2)+' '+f((by+ty)/2-14)+' '+f(tx)+' '+f(ty)+'Q'+f((bx+tx)/2+6)+' '+f((by+ty)/2+14)+' '+f(bx+14)+' '+f(by+12)+'"/>'});
  g+='<path class="kd2 sD" d="M'+f(K[0]-30)+' '+f(K[1]+14)+'C'+f(K[0]-64)+' '+f(K[1]+40)+' '+f(K[0]-60)+' '+f(K[1]+130)+' '+f(K[0]-48)+' '+f(K[1]+250)+'"/>'+
     '<path class="ves sD" id="ves" d="M'+f(C[0]+FEX.R+40)+' '+f(C[1]+6)+'C'+f(C[0]+FEX.R+110)+' '+f(C[1]+4)+' '+f(K[0]-110)+' '+f(K[1]-12)+' '+f(K[0]-32)+' '+f(K[1]-4)+'"/></g>';
  g+='</g>';
  g+='<g id="scMove"><g id="cxB">';
  /* T1 relaxation rings around the iron */
  for(i=0;i<3;i++)g+='<circle class="rx" data-k="'+i+'" cx="'+C[0]+'" cy="'+C[1]+'" r="40"/>';
  /* coordination bonds, then the iron, the N and O donors */
  g+='<g id="cb">';FEX.N.forEach(function(n){g+='<path class="cb" d="M'+P(C)+'L'+P(n)+'"/>'});FEX.arms.forEach(function(a){g+='<path class="cb" d="M'+P(C)+'L'+P(a.o)+'"/>'});g+='</g>';
  g+='<circle cx="'+C[0]+'" cy="'+C[1]+'" r="96" fill="url(#feg)" class="feg"/>';
  g+='<g id="fe"><circle class="fe" cx="'+C[0]+'" cy="'+C[1]+'" r="27"/><text class="fel" x="'+C[0]+'" y="'+(C[1]+5)+'" text-anchor="middle">Fe</text></g>';
  FEX.N.forEach(function(n){g+='<g class="don"><circle class="dn" cx="'+n[0]+'" cy="'+n[1]+'" r="10"/><text class="dl" x="'+n[0]+'" y="'+(n[1]+4)+'" text-anchor="middle">N</text></g>'});
  FEX.arms.forEach(function(a){g+='<g class="don"><circle class="do" cx="'+a.o[0]+'" cy="'+a.o[1]+'" r="10"/><text class="dl" x="'+a.o[0]+'" y="'+(a.o[1]+4)+'" text-anchor="middle">O</text></g>'});
  /* water molecules: O with two H, drifting in to the iron and out again */
  FEX.W.forEach(function(w,k){g+='<g class="h2o" data-k="'+k+'"><path class="hh" d="M-11 8L0 0L11 8"/><circle class="ho" r="6"/><circle class="hy" cx="-11" cy="8" r="3"/><circle class="hy" cx="11" cy="8" r="3"/></g>'});
  g+='</g>';
  /* complexes on their way to the kidney (step 3) */
  for(i=0;i<9;i++)g+='<g class="fl" data-k="'+i+'"><circle class="flg" r="9"/><circle class="flc" r="3.4"/></g>';
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  var x0=mob?62:30,DX=FEX.DX;
  g+='<g id="lb1"><text class="a" x="'+x0+'" y="52">'+(mob?'HIGH-SPIN FE(III)':'HIGH-SPIN TRIVALENT IRON')+'</text><path class="ldr" d="M'+(mob?120:180)+' '+(mob?66:84)+'L'+f(C[0]+DX-20)+' '+f(C[1]-22)+'"/>'+
     (mob?'':'<text class="t" x="30" y="72">HELD BY THREE N AND THREE O DONORS</text>')+
     '<text class="a" x="'+(mob?400:470)+'" y="'+(mob?534:500)+'">'+(mob?'MACROCYCLE':'TRIAZACYCLONONANE MACROCYCLE')+'</text><path class="ldr" d="M'+(mob?440:500)+' '+(mob?510:484)+'L'+f(FEX.pol(50,FEX.R+6)[0]+DX)+' '+f(FEX.pol(50,FEX.R+6)[1])+'"/></g>';
  g+='<g id="lb2"><text class="a" x="'+x0+'" y="52">'+(mob?'WATER EXCHANGE':'WATER EXCHANGING AT THE IRON')+'</text>'+
     (mob?'':'<text class="t" x="30" y="72">T1 RELAXIVITY RIVALING GD(III) AT 4.7 TESLA</text>')+
     '<text class="a" x="'+(mob?400:470)+'" y="'+(mob?534:500)+'">'+(mob?'T1 RELAXATION':'FASTER T1 RELAXATION, BRIGHTER IMAGE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?540:560)+'" y="'+(mob?130:92)+'">KIDNEY</text><path class="ldr" d="M'+(mob?580:600)+' '+(mob?142:122)+'L'+f(K[0]+12)+' '+f(K[1]-132)+'"/>'+
     (mob?'':'<text class="t" x="560" y="110">RAPID RENAL CLEARANCE IN MICE</text>')+
     '<text class="a" x="'+x0+'" y="52">'+(mob?'ANIONIC COMPLEX':'AN ANIONIC, SOLUBLE COMPLEX')+'</text><path class="ldr" d="M'+(mob?110:140)+' 66L'+f(C[0]-20)+' '+f(C[1]-30)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={ring:dl("#scBase .rg"),ct:dl("#scBase .ct"),kd:dl("#kid .sD"),cn:$$("#scBase .cn",svg),t:$$("#scBase > text",svg),kgl:$("#kid .kgl",svg),
    mv:$("#scMove",svg),cxA:$("#cxA",svg),cxB:$("#cxB",svg),cb:dl("#cb .cb"),fe:$("#fe",svg),feg:$(".feg",svg),don:$$(".don",svg),rx:$$(".rx",svg),w:$$(".h2o",svg),fl:$$(".fl",svg),
    ves:$("#ves",svg),b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg)};
  var VL=E.ves.getTotalLength(),lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.ct,b);op(E.mv,b);E.t.forEach(function(el){op(el,b)})}
    var s1=seg(p,0,.16),lit=seg(p,.02,.12),s2=seg(p,.36,.62),s3=seg(p,.68,.8),fl=seg(p,.72,.98);
    /* the complex is fully drawn as soon as the section arrives; step 1 lights the iron and its bonds */
    draw(E.ring,b);E.cn.forEach(function(el){op(el,b)});E.don.forEach(function(el){op(el,b)});
    draw(E.cb,b*Math.max(lit,.0));op(E.fe,b*(.35+.65*seg(lit,.2,.8)));op(E.feg,b*(.25+.75*lit));
    /* step 2: water in and out, relaxation rings spreading */
    E.w.forEach(function(el,k){var w=FEX.W[k],ph=(s2*2.2+k*.17)%1,inn=Math.sin(ph*Math.PI),r=w.far-(w.far-w.near)*inn,
      pt=FEX.pol(w.a+(s2*14),r),vis=b*seg(p,.3,.4)*(1-seg(p,.66,.72));
      el.setAttribute("transform","translate("+pt[0]+" "+pt[1]+") rotate("+(w.a+90).toFixed(1)+")");op(el,vis)});
    E.rx.forEach(function(el,k){var ph=(s2*3+k/3)%1,on=b*seg(p,.34,.4)*(1-seg(p,.64,.7));el.setAttribute("r",(34+ph*190).toFixed(1));op(el,on*(1-ph)*.85)});
    /* the complex sits centred for steps 1-2 and slides left to make room for the kidney */
    var tx="translate("+(FEX.DX*(1-s3)).toFixed(1)+" 0)";E.cxA.setAttribute("transform",tx);E.cxB.setAttribute("transform",tx);
    /* step 3: the kidney draws, complexes travel the vessel and fill it */
    draw(E.kd,b*s3);op(E.kgl,b*seg(fl,.3,1));
    E.fl.forEach(function(el,k){var q=seg(fl,k*.07,k*.07+.4),pt=E.ves.getPointAtLength(VL*q);
      el.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+pt.y.toFixed(1)+")");op(el,b*seg(q,0,.12)*(1-seg(q,.86,1)))});
    op(E.b1,b*(1-seg(p,.28,.33)));op(E.b2,b*seg(p,.38,.46)*(1-seg(p,.62,.67)));op(E.b3,b*seg(p,.74,.84));
  };
}
