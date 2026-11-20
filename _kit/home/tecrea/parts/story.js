/* the story scene (DB): ONE engraved scene, kept on screen for all four steps: a target cell on the right (lipid bilayer,
   nucleus, a few organelles) and free cargo on the left. Step 1 the cargo: DNA, RNA, small molecules and proteins, outside the
   cell. Step 2 Nanocin polymer chains (polyhexanide) gather round each cargo and close into a nanoparticle. Step 3 the
   nanoparticles cross the membrane into the cytoplasm. Step 4 the shells open, the cargo moves toward the nucleus, and the
   cell stays whole. Sources: tecrea.com home, company-information and drug-formulation pages (self-assembly, nanoparticles,
   mammalian and bacterial cells, >99% viability, polyhexanide core polymer). Schematic; not to scale. Driven by the scrubbed
   story progress. */
var TC=(function(){
  var seed=7;function R(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}
  var C={cx:520,cy:290,rx:244,ry:196},N={cx:590,cy:300,rx:84,ry:64};
  function cellPt(a,k){var w=1+.05*Math.sin(3*a+.6)+.035*Math.cos(5*a+1.1)+.02*Math.sin(7*a);return [C.cx+C.rx*w*k*Math.cos(a),C.cy+C.ry*w*k*Math.sin(a)]}
  var types=["dna","rna","sm","pro","dna","sm","pro","rna"];
  var A=[[78,150],[178,128],[118,232],[212,262],[70,338],[168,372],[96,452],[204,452]];
  var I=[[350,206],[408,160],[338,300],[420,250],[372,388],[452,420],[470,186],[440,330]];
  var P=types.map(function(t,k){return {t:t,a:A[k],i:I[k],rot:R()*360,dl:R()*.5,ph:R()*6.28}});
  var O=[];for(var k=0;k<5;k++){var an=[3.6,4.3,2.2,1.0,5.5][k],rr=[.7,.62,.72,.66,.78][k],p=cellPt(an,rr);O.push({x:p[0],y:p[1],r:R()*180})}
  return {C:C,N:N,P:P,O:O,cellPt:cellPt};
})();
function cargo(t){
  var i,x,y;
  if(t==="dna"){var a='',b='',r='';for(i=0;i<=24;i++){x=-18+i*1.5;y=6*Math.sin(i/24*Math.PI*2);a+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);b+=(i?'L':'M')+x.toFixed(1)+' '+(-y).toFixed(1);if(i%3==1)r+='M'+x.toFixed(1)+' '+y.toFixed(1)+'L'+x.toFixed(1)+' '+(-y).toFixed(1)}
    return '<path class="cg" d="'+a+'"/><path class="cg" d="'+b+'"/><path class="cg" style="stroke-width:.8;opacity:.7" d="'+r+'"/>'}
  if(t==="rna"){var s='';for(i=0;i<=24;i++){x=-17+i*1.4;y=5*Math.sin(i/24*Math.PI*3)+2*Math.cos(i/5);s+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return '<path class="cg" d="'+s+'"/><circle class="cg dot" cx="-17" cy="2" r="1.8"/>'}
  if(t==="sm"){var h='',h2='';for(i=0;i<6;i++){var an=i/6*Math.PI*2+Math.PI/6;h+=(i?'L':'M')+(-5+8*Math.cos(an)).toFixed(1)+' '+(8*Math.sin(an)).toFixed(1);h2+=(i?'L':'M')+(9+7*Math.cos(an)).toFixed(1)+' '+(-4+7*Math.sin(an)).toFixed(1)}return '<path class="cg" d="'+h+'Z"/><path class="cg" d="'+h2+'Z"/>'}
  var c='';for(i=0;i<=40;i++){var a2=i/40*Math.PI*2*2.2,rr=4+i*.32;c+=(i?'L':'M')+(rr*Math.cos(a2)).toFixed(1)+' '+(rr*Math.sin(a2)*.8).toFixed(1)}return '<path class="cg" d="'+c+'"/>';
}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',N=TC.N,e,k,a0,a1,t,a;
  function ring(k){var s='',n=96;for(var i=0;i<=n;i++){var p=TC.cellPt(i/n*Math.PI*2,k);s+=(i?'L':'M')+f(p[0])+' '+f(p[1])}return s+'Z'}
  function ell(o,k,wob){var s='',n=64;for(var i=0;i<=n;i++){var a=i/n*Math.PI*2,w=1+(wob||0)*Math.sin(4*a+.4);s+=(i?'L':'M')+f(o.cx+o.rx*k*w*Math.cos(a))+' '+f(o.cy+o.ry*k*w*Math.sin(a))}return s+'Z'}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="glw"><stop offset="0" stop-color="#00e5c4" stop-opacity=".5"/><stop offset=".55" stop-color="#00e5c4" stop-opacity=".14"/><stop offset="1" stop-color="#00e5c4" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="cy" id="cyto" d="'+ring(.97)+'" style="opacity:0"/>';
  g+='<path class="mb sD" d="'+ring(1)+'"/><path class="mb2 sD" d="'+ring(.965)+'"/>';
  g+='<path class="nu sD" d="'+ell(N,1,.03)+'"/><path class="mb2 sD" d="'+ell(N,.93,.03)+'"/>';
  /* endoplasmic reticulum: arcs hugging the nucleus */
  var er='';
  for(e=0;e<4;e++){k=1.2+e*.13;a0=-2.4+e*.12;a1=-.9-e*.1;er+='M'+f(N.cx+N.rx*k*Math.cos(a0))+' '+f(N.cy+N.ry*k*Math.sin(a0));for(t=1;t<=16;t++){a=a0+(a1-a0)*t/16;er+='L'+f(N.cx+N.rx*k*Math.cos(a)+2*Math.sin(t))+' '+f(N.cy+N.ry*k*Math.sin(a))}}
  for(e=0;e<3;e++){k=1.24+e*.14;a0=.6+e*.1;a1=2.1-e*.08;er+='M'+f(N.cx+N.rx*k*Math.cos(a0))+' '+f(N.cy+N.ry*k*Math.sin(a0));for(t=1;t<=16;t++){a=a0+(a1-a0)*t/16;er+='L'+f(N.cx+N.rx*k*Math.cos(a))+' '+f(N.cy+N.ry*k*Math.sin(a)+2*Math.sin(t))}}
  g+='<path class="og sD" d="'+er+'"/>';
  /* mitochondria */
  TC.O.forEach(function(o){var d='M-20 0C-20-11 20-11 20 0C20 11-20 11-20 0Z',cr='';for(var q=-14;q<=14;q+=5)cr+='M'+q+' -6Q'+(q+2)+' 0 '+q+' 6';
    g+='<g transform="translate('+f(o.x)+' '+f(o.y)+') rotate('+f(o.r)+')"><path class="og sD" d="'+d+'"/><path class="og sD" d="'+cr+'"/></g>'});
  /* chromatin specks */
  var ch='';for(var c=0;c<26;c++){var an=c*2.39,rr=Math.sqrt((c+.5)/26)*.78;ch+='M'+f(N.cx+N.rx*rr*Math.cos(an))+' '+f(N.cy+N.ry*rr*Math.sin(an))+'l2.2 1.4'}
  g+='<path class="og sD" style="stroke-width:1.6;stroke-linecap:round" d="'+ch+'"/>';
  g+='<text class="t" x="'+(mob?776:760)+'" y="64" text-anchor="end">'+(mob?'TARGET CELL':'TARGET CELL · SCHEMATIC')+'</text>';
  g+='<text class="t" x="'+N.cx+'" y="'+(N.cy-N.ry-14)+'" text-anchor="middle">NUCLEUS</text>';
  g+='<text class="t" x="'+(mob?24:40)+'" y="64">'+(mob?'OUTSIDE':'OUTSIDE THE CELL')+'</text>';
  g+='</g>';
  g+='<g id="scMove"><circle class="gl" id="glow" cx="'+(N.cx-40)+'" cy="'+N.cy+'" r="150" style="opacity:0"/>';
  TC.P.forEach(function(p,k){
    var chs='';for(var q=0;q<3;q++){var b0=p.ph+q*2.1,s='';for(var u=0;u<=14;u++){var aa=b0+u*.09,r=34+4*Math.sin(u*1.3);s+=(u?'L':'M')+f(r*Math.cos(aa))+' '+f(r*Math.sin(aa))}chs+='<path class="ch" d="'+s+'"/>'}
    g+='<g class="np" data-k="'+k+'"><g class="chs">'+chs+'</g><circle class="pr" r="22"/><g class="cgo" transform="rotate('+f(p.rot)+')">'+cargo(p.t)+'</g></g>'});
  g+='</g>';
  var L=mob?24:40;
  g+='<g id="lb1"><text class="a" x="'+L+'" y="540">'+(mob?'FREE CARGO':'FREE CARGO · DNA, RNA, SMALL MOLECULES, PROTEINS')+'</text><path class="ldr" d="M'+(L+40)+' 524L92 476"/></g>';
  g+='<g id="lb2"><text class="a" x="'+L+'" y="540">'+(mob?'NANOCIN NANOPARTICLES':'NANOCIN NANOPARTICLES · SELF-ASSEMBLED')+'</text><path class="ldr" d="M'+(L+40)+' 524L92 478"/></g>';
  g+='<g id="lb3"><text class="a" x="'+L+'" y="540">'+(mob?'UPTAKE INTO THE CELL':'UPTAKE ACROSS THE CELL MEMBRANE')+'</text><path class="ldr" d="M'+(L+60)+' 524L300 420"/></g>';
  g+='<g id="lb4"><text class="a" x="'+(mob?776:760)+'" y="540" text-anchor="end">'+(mob?'DELIVERED · >99% VIABLE':'CARGO DELIVERED · CELL >99% VIABLE')+'</text><path class="ldr" d="M'+(mob?640:650)+' 524L'+N.cx+' '+(N.cy+N.ry+8)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),np:$$(".np",svg),cy:$("#cyto",svg),gl:$("#glow",svg),
    l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)]};
  E.np.forEach(function(el){el._c=$(".chs",el);el._r=$(".pr",el);el._g=$(".cgo",el)});
  var lastB=-1,N=TC.N;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.08),s2=seg(p,.26,.44),s3=seg(p,.51,.68),s4=seg(p,.76,.94);
    E.np.forEach(function(el){var q=TC.P[+el.getAttribute("data-k")];
      var a2=cl(s2*1.4-q.dl*.4),a3=cl(s3*1.35-q.dl*.35),a4=cl(s4*1.3-q.dl*.3);
      var e3=a3*a3*(3-2*a3);
      var x=q.a[0]+(q.i[0]-q.a[0])*e3,y=q.a[1]+(q.i[1]-q.a[1])*e3-Math.sin(e3*Math.PI)*18;
      /* in step 4 the cargo drifts toward the nucleus */
      x+=(N.cx-N.rx*.9-x)*a4*.45;y+=(N.cy-y)*a4*.35;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale(1.3)");
      op(el,b*Math.min(1,s1*1.2+a2));
      el._c.setAttribute("transform","scale("+(1.25-.6*a2).toFixed(3)+")");op(el._c,Math.sin(a2*Math.PI)*.95);
      el._r.setAttribute("r",(22+16*(1-a2)).toFixed(1));op(el._r,a2*(1-a4));
      op(el._g,1-a4*.7)});
    op(E.cy,b*s4);op(E.gl,b*s4);
    op(E.l[0],b*s1*(1-seg(p,.2,.26)));op(E.l[1],b*s2*(1-seg(p,.46,.51)));op(E.l[2],b*s3*(1-seg(p,.71,.76)));op(E.l[3],b*s4);
  };
}
