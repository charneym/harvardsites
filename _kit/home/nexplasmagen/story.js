/* The story scene (BL/BY/DB): how the CPJ works (nexplasmagen.com Facts and Technology), as ONE continuous scene: a
   cross-section of breast tissue under the skin, drawn in fine line, with the tumour in it. Step 1 (remove): the tumour
   lifts out of its bed, leaving a cavity whose margin still holds a few residual cancer cells (magenta) among healthy
   cells. Step 2 (treat): the CPJ's handheld applicator enters the cavity and its violet cold plasma jet sweeps the margin,
   reactive species reaching the wall. Step 3 (clear): the residual cancer cells fade out; the healthy cells remain.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var SK=78;                                   /* skin line */
var BOWL=function(t){                        /* the cavity wall, t 0..1 from the left lip to the right lip */
  var a=Math.PI*(1-t);return [380+150*Math.cos(a),SK+8+230*Math.sin(a)]};
var MC=(function(){var a=[],i,n=24;for(i=0;i<n;i++){var t=.05+.9*i/(n-1),p=BOWL(t),q=BOWL(Math.min(1,t+.01)),dx=q[0]-p[0],dy=q[1]-p[1],L=Math.hypot(dx,dy),nx=dy/L,ny=-dx/L;
  /* cells sit just outside the wall, in the tissue */
  a.push({x:p[0]-nx*13,y:p[1]-ny*13,t:t,ca:[3,7,11,14,18,21].indexOf(i)>=0})}return a})();
var LOB=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<46;i++){var x=40+R()*680,y=SK+30+R()*330,dx=x-380,dy=(y-SK-8)/230;
    if(Math.abs(dx)<200&&dy<1.25&&Math.hypot(dx/185,dy)<1.18)continue;a.push([x,y,10+R()*16])}return a})();
function bowlPath(){var d='',i;for(i=0;i<=40;i++){var p=BOWL(i/40);d+=(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}return d}
function tumourPath(){var d='',i,n=28;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,r=1+.09*Math.sin(a*5+.7)+.05*Math.sin(a*9);
  d+=(i?'L':'M')+(380+108*r*Math.cos(a)).toFixed(1)+' '+(SK+150+96*r*Math.sin(a)).toFixed(1)}return d+'Z'}
function npgScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="jetG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe6ff" stop-opacity=".95"/><stop offset=".35" stop-color="#d07ae0" stop-opacity=".7"/><stop offset="1" stop-color="#9a3aa8" stop-opacity="0"/></linearGradient>'+
       '<radialGradient id="spG"><stop offset="0" stop-color="#e9a6f0" stop-opacity=".55"/><stop offset="1" stop-color="#a13aa8" stop-opacity="0"/></radialGradient></defs>';
  /* ---- base: skin, tissue lobules and the incision ---- */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="M20 '+(SK+10)+'C160 '+(SK-4)+' 260 '+SK+' 230 '+SK+'M530 '+SK+'C600 '+SK+' 660 '+(SK-2)+' 740 '+(SK+12)+'"/>';
  g+='<path class="wo sD" d="M20 '+(SK+24)+'C160 '+(SK+10)+' 250 '+(SK+16)+' 236 '+(SK+16)+'M524 '+(SK+16)+'C600 '+(SK+14)+' 660 '+(SK+12)+' 740 '+(SK+26)+'"/>';
  LOB.forEach(function(l){g+='<ellipse class="lo sD" cx="'+l[0].toFixed(1)+'" cy="'+l[1].toFixed(1)+'" rx="'+l[2].toFixed(1)+'" ry="'+(l[2]*.72).toFixed(1)+'"/>'});
  g+='<path class="wl sD" d="'+bowlPath()+'"/>';
  g+='<text class="t" x="20" y="'+(SK-24)+'">SKIN</text>';
  g+='<text class="t" x="740" y="'+(SK-24)+'" text-anchor="end">BREAST TISSUE · CROSS-SECTION</text>';
  g+='</g>';
  /* ---- the cells of the margin ---- */
  g+='<g id="scCells">';
  MC.forEach(function(c,k){g+=c.ca?'<g class="cc" data-k="'+k+'"><path d="'+(function(){var d='',j;for(j=0;j<=10;j++){var a=j/10*Math.PI*2,r=7.5+1.8*Math.sin(a*3+k);d+=(j?'L':'M')+(c.x+r*Math.cos(a)).toFixed(1)+' '+(c.y+r*Math.sin(a)).toFixed(1)}return d+'Z'})()+'"/><circle class="nu" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" r="2.8"/></g>'
    :'<g class="hc"><circle cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" r="6.5"/><circle class="nu" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" r="1.8"/></g>'});
  g+='</g>';
  /* ---- the tumour, in its bed at first ---- */
  g+='<g id="scTum"><path class="tu" d="'+tumourPath()+'"/></g>';
  /* ---- the applicator and its jet ---- */
  g+='<g id="scApp"><g id="scJet"><path class="jet" d="M-3 0L3 0L22 62L-22 62Z" fill="url(#jetG)"/><ellipse cx="0" cy="64" rx="34" ry="14" fill="url(#spG)"/></g>'+
     '<path class="nd" d="M0 0V-26"/><path class="ap" d="M-14 -40L-3 -26H3L14 -40Z"/><rect class="ap" x="-14" y="-170" width="28" height="130"/><rect class="col" x="-17" y="-128" width="34" height="26"/>'+
     '<path class="cab" d="M17 -115C60 -115 70 -160 120 -200"/></g>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-14;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">TUMOUR REMOVED · RESIDUAL CELLS AT THE MARGIN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">CPJ APPLICATOR · COLD PLASMA ON THE MARGIN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">RESIDUAL CANCER CELLS KILLED · BREAST CONSERVED</text></g>';
  return g+'</svg>';
}
function scene(){return npgScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),hc:$$(".hc",svg),cc:$$(".cc",svg),tum:$("#scTum",svg),app:$("#scApp",svg),jet:$("#scJet",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.hc.forEach(function(el){op(el,b)})}
    var lift=seg(p,.06,.24),enter=seg(p,.3,.4),sweep=seg(p,.38,.64),leave=seg(p,.68,.8),kill=seg(p,.62,.84);
    /* the tumour lifts up out of the incision and fades */
    E.tum.setAttribute("transform","translate(0 "+(-150*lift).toFixed(1)+")");op(E.tum,b*(1-sm2(seg(p,.14,.3))));
    /* the applicator comes down into the cavity, sweeps the margin left to right, and withdraws */
    /* the applicator comes down into the cavity, then sweeps the margin left to right, its jet aimed at the wall, and withdraws */
    var tt=.16+.68*sm2(sweep),wp=BOWL(tt),cx=380,cy=SK-70,dx=cx-wp[0],dy=cy-wp[1],dl=Math.hypot(dx,dy);dx/=dl;dy/=dl;
    var tx=wp[0]+dx*70,ty=wp[1]+dy*70,ang=Math.atan2(dx,-dy)*180/Math.PI;  /* local +y (the jet) points from the tip to the wall */
    var e2=sm2(enter),l2=sm2(leave);tx=380+(tx-380)*e2;ty=-140+(ty+140)*e2-260*l2;ang=ang*e2;
    E.app.setAttribute("transform","translate("+tx.toFixed(1)+" "+ty.toFixed(1)+") rotate("+ang.toFixed(1)+")");
    op(E.app,b*enter*(1-leave));op(E.jet,seg(p,.36,.41)*(1-seg(p,.64,.7)));
    /* residual cancer cells: present after the tumour is out; each fades once the jet has passed it */
    E.cc.forEach(function(el,i){var c=MC[+el.getAttribute("data-k")],pass=sweep>0?seg(tt,c.t-.03,c.t+.07):0,k=Math.max(pass,kill);
      op(el,b*Math.max(0,Math.min(1,.15+seg(p,.12,.24)*.85))*(1-k))});
    op(E.l1,b*seg(p,.18,.24)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
function sm2(x){return x*x*(3-2*x)}
