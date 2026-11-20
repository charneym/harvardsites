/* The story scene (BL/BY/DB): Reelin Therapeutics' own mechanism, as ONE continuous engraved scene (the figure on
   reelintherapeutics.com, "Reelin signaling & mechanism" / "Anti-Reelin strategy", and the NIH abstracts). A blood vessel in
   section: blood flow in the lumen above, a row of endothelial cells, the tissue below.
   Step 1: Reelin (blue rods) settles from the plasma onto ApoER2 receptors (red) on the endothelium, and adhesion molecules
   (E-selectin, CAMs) rise from the wall. Step 2: leukocytes in the flow roll, adhere and one squeezes through a junction into the
   tissue (diapedesis). Step 3: anti-Reelin antibodies (Y) capture Reelin and carry it off, the adhesion molecules recede, and the
   leukocytes flow past. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,WALL=318,CELLW=89;
var RS=(function(){var s=7743,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  var rc=[],am=[],k;
  /* receptors: two per endothelial cell, at fixed spots on its luminal face */
  for(k=0;k<8;k++){rc.push(24+k*CELLW+24+R()*8);rc.push(24+k*CELLW+58+R()*8)}
  /* adhesion molecules: between receptors */
  for(k=0;k<8;k++){am.push(24+k*CELLW+40+R()*6);am.push(24+k*CELLW+76+R()*4)}
  /* Reelin rods: one per receptor, starting scattered in the plasma */
  var rl=rc.map(function(x,i){return {x0:40+R()*680,y0:70+R()*170,a0:R()*180,x1:x,y1:WALL-30,d:R()*.4}});
  return {rc:rc,am:am,rl:rl};
})();
/* leukocytes: keyframes [p, x, y] (piecewise, eased). L1 crosses at the junction x=380 (between cells 4 and 5) */
var LK=[
 [[0,70,150],[.3,170,165],[.42,236,WALL-34],[.66,262,WALL-34],[.78,300,240],[1,560,175]],
 [[0,-60,215],[.3,110,225],[.4,330,WALL-34],[.5,380,WALL-34],[.6,380,WALL+40],[.66,384,WALL+120],[1,400,WALL+128]],
 [[0,330,100],[.3,450,110],[.44,560,WALL-34],[.66,586,WALL-34],[.8,640,230],[1,820,190]],
 [[0,560,190],[.3,690,175],[.4,800,170],[.62,800,170],[.78,-80,120],[1,150,150]]];
function lkAt(K,p){var i=0;while(i<K.length-2&&p>K[i+1][0])i++;var a=K[i],b=K[i+1],t=Math.max(0,Math.min(1,(p-a[0])/(b[0]-a[0])));t=t*t*(3-2*t);
  return [a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
function vesScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',k;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="vclip"><rect x="24" y="36" width="712" height="464"/></clipPath>'+
     '<linearGradient id="lumg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0000a3" stop-opacity=".0"/><stop offset="1" stop-color="#0000a3" stop-opacity=".22"/></linearGradient>'+
     '<linearGradient id="tisg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e00012" stop-opacity=".10"/><stop offset="1" stop-color="#e00012" stop-opacity="0"/></linearGradient></defs>';
  /* ---- base: lumen and tissue grounds, frame rules, endothelial cells, captions ---- */
  g+='<g id="scBase">';
  g+='<rect class="lum" x="24" y="36" width="712" height="'+(WALL-36)+'" fill="url(#lumg)"/>';
  g+='<rect class="tis" x="24" y="'+(WALL+30)+'" width="712" height="'+(SCH-WALL-50)+'" fill="url(#tisg)"/>';
  g+='<path class="frm sD" d="M24 36H736M24 500H736"/>';
  /* flow arrows */
  for(k=0;k<3;k++){var fx=120+k*230;g+='<path class="flw sD" d="M'+fx+' 62H'+(fx+90)+'M'+(fx+82)+' 56l8 6-8 6"/>'}
  /* tissue hatching */
  for(k=0;k<36;k++){var hx=34+k*20;g+='<path class="hat sD" d="M'+hx+' '+(WALL+52)+'l14 '+(110+(k%3)*12)+'"/>'}
  /* endothelial cells: rounded slabs with a flattened nucleus */
  for(k=0;k<8;k++){var x=24+k*CELLW+2;
    g+='<path class="ec sD" d="M'+f(x+8)+' '+WALL+'H'+f(x+CELLW-12)+'Q'+f(x+CELLW-4)+' '+WALL+' '+f(x+CELLW-4)+' '+(WALL+8)+'V'+(WALL+22)+'Q'+f(x+CELLW-4)+' '+(WALL+30)+' '+f(x+CELLW-12)+' '+(WALL+30)+'H'+f(x+8)+'Q'+x+' '+(WALL+30)+' '+x+' '+(WALL+22)+'V'+(WALL+8)+'Q'+x+' '+WALL+' '+f(x+8)+' '+WALL+'Z"/>';
    g+='<ellipse class="ecn" cx="'+f(x+CELLW/2-2)+'" cy="'+(WALL+15)+'" rx="17" ry="6"/>'}
  g+='<text class="t" x="736" y="26" text-anchor="end">BLOOD FLOW →</text>';
  g+='<text class="t" x="30" y="'+(WALL+48)+'">ENDOTHELIUM</text>';
  g+='<text class="t" x="24" y="'+(SCH-6)+'">TISSUE · BRAIN OR JOINT</text>';
  g+='</g>';
  /* ---- adhesion molecules (bone stalks with a knob) and receptors (red, ApoER2) ---- */
  g+='<g id="scAm">';RS.am.forEach(function(x,i){g+='<g class="am" data-k="'+i+'"><path d="M'+f(x)+' '+WALL+'V'+(WALL-26)+'"/><circle cx="'+f(x)+'" cy="'+(WALL-28)+'" r="3.2"/></g>'});g+='</g>';
  g+='<g id="scRc">';RS.rc.forEach(function(x){g+='<path class="rc" d="M'+f(x)+' '+WALL+'V'+(WALL-14)+'M'+f(x-5)+' '+(WALL-19)+'Q'+f(x)+' '+(WALL-12)+' '+f(x+5)+' '+(WALL-19)+'"/>'});g+='</g>';
  /* ---- Reelin rods ---- */
  g+='<g id="scRl">';RS.rl.forEach(function(r,i){g+='<g class="rl" data-k="'+i+'"><rect x="-11" y="-3.4" width="22" height="6.8" rx="3.4"/></g>'});g+='</g>';
  /* ---- antibodies ---- */
  g+='<g id="scAb">';RS.rl.forEach(function(r,i){g+='<g class="ab" data-k="'+i+'"><path d="M0 14V2M0 2L-8 -9M0 2L8 -9"/></g>'});g+='</g>';
  /* ---- leukocytes: a cell with a lobed nucleus ---- */
  g+='<g id="scLk" clip-path="url(#vclip)">';LK.forEach(function(K,i){
    g+='<g class="lk" data-k="'+i+'"><circle class="lkc" r="30"/><path class="lkn" transform="scale(1.25)" d="M-12 2c-3-9 6-14 11-8 5-7 15-2 12 6 6 3 2 13-6 11-4 6-14 4-14-3-6-1-6-6-3-6z"/></g>'});g+='</g>';
  /* ---- step labels, in the clear band of the lumen ---- */
  g+='<g id="lb1"><text class="a" x="24" y="26">REELIN BINDS APOER2</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="26">ROLLING · ADHESION · DIAPEDESIS</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="26">ANTI-REELIN · BARRIER RESTORED</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .ecn,#scBase .lum,#scBase .tis",svg),
    am:$$(".am",svg),rc:$$(".rc",svg),rl:$$(".rl",svg),ab:$$(".ab",svg),lk:$$(".lk",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tr(el,x,y,r,s){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(r?" rotate("+r.toFixed(1)+")":"")+(s!=null?" scale("+s.toFixed(3)+")":""))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    E.rc.forEach(function(el){op(el,b)});
    /* step 1: Reelin settles onto the receptors; step 3: antibodies arrive, capture it and lift it away */
    var abIn=seg(p,.68,.8),lift=seg(p,.8,.95);
    E.rl.forEach(function(el,i){var r=RS.rl[i],bd=seg(p,.04+r.d*.25,.22+r.d*.25);
      var x=r.x0+(r.x1-r.x0)*bd,y=r.y0+(r.y1-r.y0)*bd,a=r.a0*(1-bd);
      if(lift>0){x+=lift*60;y-=lift*(80+i%4*14);a=-30*lift}
      tr(el,x,y,a);op(el,b*(1-lift))});
    E.ab.forEach(function(el,i){var r=RS.rl[i],ax=r.x1+(1-abIn)*(-60+i%5*30),ay=r.y1-14-(1-abIn)*150;
      if(lift>0){ax+=lift*60;ay-=lift*(80+i%4*14)}
      tr(el,ax,ay,0);op(el,b*abIn*(1-lift))});
    /* adhesion molecules: rise once Reelin is bound, recede after it is cleared */
    var up=seg(p,.18,.34)*(1-seg(p,.8,.94));
    E.am.forEach(function(el,i){var u=Math.max(0,Math.min(1,up*1.4-(i%5)*.08));
      el.setAttribute("transform","translate(0 "+(WALL*(1-u)).toFixed(1)+") scale(1 "+u.toFixed(3)+")");op(el,b*(u>0?1:0))});
    /* leukocytes: flow, roll, adhere, cross; then flow past. The one in the tissue fades as the barrier is restored */
    E.lk.forEach(function(el,i){var q=lkAt(LK[i],p),rot=i===1&&p>.5&&p<.66?0:(q[0]*.9);
      var sq=i===1?1-.35*seg(p,.5,.56)*(1-seg(p,.6,.66)):1;
      el.setAttribute("transform","translate("+q[0].toFixed(1)+" "+q[1].toFixed(1)+") rotate("+rot.toFixed(1)+") scale("+(1/sq*.0+sq).toFixed(3)+" "+(1/sq).toFixed(3)+")");
      op(el,b*(i===1?1-.75*seg(p,.84,.98):1))});
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
