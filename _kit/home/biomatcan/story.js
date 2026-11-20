/* the story scene (BL/BY/DB): ONE engraved section through bone, kept on screen for all four steps: a cortical shell above
   and below, cancellous bone (a trabecular lattice) between, and a defect in the middle that the body cannot bridge alone.
   Step 1 the defect opens and is outlined. Step 2 porous biphasic calcium phosphate granules (HA and beta-TCP) settle into it.
   Step 3 fluid wicks into the graft by capillarity. Step 4 new trabeculae grow in from the host bone through the granules,
   the beta-TCP granules resorb and the HA scaffold stays. Sources: biomatcan.com home and technology pages (bone regenerates
   when given the space to grow into; BCP of HA and beta-TCP; multi-scale interconnected porosity; high hydrophilicity and
   capillary forces; natural bone generally replaces the graft completely). Schematic; not to scale. Driven by the scrubbed
   story progress. */
var BN=(function(){
  var seed=11;function R(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}
  var X0=40,X1=760,Y0=104,Y1=456,DF={cx:404,cy:282,rx:168,ry:112};
  function inDef(x,y,m){var dx=(x-DF.cx)/(DF.rx+(m||0)),dy=(y-DF.cy)/(DF.ry+(m||0));return dx*dx+dy*dy<1}
  /* trabecular nodes on a jittered grid between the cortices */
  var P=[],gx=17,gy=8,i,j;
  for(j=0;j<gy;j++)for(i=0;i<gx;i++){var x=X0+12+(i+.5)*(X1-X0-24)/gx+(R()-.5)*22,y=Y0+16+(j+.5)*(Y1-Y0-32)/gy+(R()-.5)*20;P.push([x,y])}
  /* struts: each node to its two or three nearest neighbours (no duplicates) */
  var S=[],seen={};
  P.forEach(function(a,ia){var d=P.map(function(b,ib){return [Math.hypot(a[0]-b[0],a[1]-b[1]),ib]}).sort(function(u,v){return u[0]-v[0]});
    var k=2+(R()<.3?1:0);for(var q=1;q<=k;q++){var ib=d[q][1],key=Math.min(ia,ib)+"_"+Math.max(ia,ib);if(seen[key])continue;seen[key]=1;
      var b=P[ib],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;S.push({a:a,b:b,w:2.4+R()*2.6,nw:inDef(mx,my,6)||inDef(a[0],a[1],0)||inDef(b[0],b[1],0)})}});
  /* granules packed into the defect */
  var G=[];for(j=0;j<6;j++)for(i=0;i<9;i++){var gx2=DF.cx-DF.rx+20+(i+.5)*(2*DF.rx-40)/9+(j%2?9:-9)+(R()-.5)*8,gy2=DF.cy-DF.ry+16+(j+.5)*(2*DF.ry-32)/6+(R()-.5)*8;
    if(!inDef(gx2,gy2,-20))continue;var r=13+R()*6,n=9,pts=[],ph=R()*6;for(var t=0;t<n;t++){var an=t/n*Math.PI*2+ph,rr=r*(.84+R()*.3);pts.push([gx2+rr*Math.cos(an),gy2+rr*Math.sin(an)])}
    var pores=[];for(t=0;t<3+(R()*3|0);t++){var pa=R()*6.28,pr=R()*r*.55;pores.push([gx2+pr*Math.cos(pa),gy2+pr*Math.sin(pa),1.8+R()*2.2])}
    G.push({c:[gx2,gy2],r:r,pts:pts,pores:pores,ha:R()<.42,dl:R()})}
  return {S:S,G:G,DF:DF,X0:X0,X1:X1,Y0:Y0,Y1:Y1,inDef:inDef};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',D=BN.DF;
  var defP=(function(){var s='',n=64;for(var i=0;i<=n;i++){var a=i/n*Math.PI*2,w=1+.06*Math.sin(3*a+.7)+.04*Math.cos(5*a+1.3);s+=(i?'L':'M')+f(D.cx+D.rx*w*Math.cos(a))+' '+f(D.cy+D.ry*w*Math.sin(a))}return s+'Z'})();
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><clipPath id="dfc"><path d="'+defP+'"/></clipPath><mask id="dfm"><rect x="0" y="0" width="800" height="560" fill="#fff"/><path d="'+defP+'" fill="#000"/></mask>'+
     '<linearGradient id="wk" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#0677dd" stop-opacity=".5"/><stop offset="1" stop-color="#0677dd" stop-opacity=".16"/></linearGradient></defs>';
  g+='<g id="scBase">';
  /* cortical shell: two engraved bands with lamellae */
  var cort='';[[BN.Y0-46,BN.Y0],[BN.Y1,BN.Y1+46]].forEach(function(b){for(var k=0;k<=4;k++){var y=b[0]+(b[1]-b[0])*k/4;cort+='M'+BN.X0+' '+f(y+Math.sin(k)*1.5)+'C'+f(BN.X0+240)+' '+f(y-3)+' '+f(BN.X0+480)+' '+f(y+3)+' '+BN.X1+' '+f(y)}});
  g+='<path class="ct sD" d="'+cort+'"/>';
  /* host trabeculae (outside the defect) */
  g+='<g mask="url(#dfm)">';BN.S.forEach(function(s){if(!s.nw)g+='<path class="tb sD" style="stroke-width:'+f(s.w)+'" d="M'+f(s.a[0])+' '+f(s.a[1])+'L'+f(s.b[0])+' '+f(s.b[1])+'"/>'});g+='</g>';
  g+='<path class="df sD" d="'+defP+'"/>';
  g+='<text class="t" x="'+(mob?40:BN.X0)+'" y="'+(BN.Y0-60)+'">CORTICAL BONE</text><text class="t" x="'+BN.X1+'" y="'+(BN.Y0-60)+'" text-anchor="end">'+(mob?'SCHEMATIC':'CANCELLOUS BONE · SCHEMATIC')+'</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* capillary uptake: fluid rises through the defect */
  g+='<g clip-path="url(#dfc)"><rect id="wkr" x="'+(D.cx-D.rx-20)+'" y="'+(D.cy+D.ry+12)+'" width="'+(2*D.rx+40)+'" height="'+(2*D.ry+30)+'" fill="url(#wk)"/></g>';
  /* new bone: trabeculae that grow in through the defect */
  g+='<g clip-path="url(#dfc)">';BN.S.forEach(function(s){if(s.nw)g+='<path class="nb" style="stroke-width:'+f(s.w)+'" d="M'+f(s.a[0])+' '+f(s.a[1])+'L'+f(s.b[0])+' '+f(s.b[1])+'"/>'});g+='</g>';
  /* granules */
  BN.G.forEach(function(q,k){var d='';q.pts.forEach(function(p,i){d+=(i?'L':'M')+f(p[0])+' '+f(p[1])});d+='Z';
    g+='<g class="gr'+(q.ha?' ha':' tcp')+'" data-k="'+k+'"><path class="go" d="'+d+'"/>'+q.pores.map(function(p){return '<circle class="gp" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="'+f(p[2])+'"/>'}).join('')+'</g>'});
  g+='</g>';
  /* labels, one per step; leaders end at the thing they name */
  var L=mob?24:40;
  g+='<g id="lb1"><text class="a" x="'+L+'" y="'+(mob?548:540)+'">'+(mob?'BONE DEFECT':'BONE DEFECT · NO SCAFFOLD TO GROW INTO')+'</text><path class="ldr" d="M'+(L+60)+' '+(mob?528:524)+'L'+f(D.cx-D.rx*.62)+' '+f(D.cy+D.ry*.8)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?776:760)+'" y="'+(mob?548:540)+'" text-anchor="end">'+(mob?'HA + β-TCP GRANULES':'POROUS HA + β-TCP GRANULES')+'</text><path class="ldr" d="M'+(mob?640:650)+' '+(mob?528:524)+'L'+f(D.cx+D.rx*.55)+' '+f(D.cy+D.ry*.62)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+L+'" y="'+(mob?548:540)+'">'+(mob?'CAPILLARY UPTAKE':'CAPILLARY UPTAKE · HIGH HYDROPHILICITY')+'</text><path class="ldr" d="M'+(L+60)+' '+(mob?528:524)+'L'+f(D.cx-D.rx*.5)+' '+f(D.cy+D.ry*.7)+'"/></g>';
  g+='<g id="lb4"><text class="a" x="'+(mob?776:760)+'" y="'+(mob?548:540)+'" text-anchor="end">'+(mob?'NEW BONE INGROWTH':'NEW BONE INGROWTH · β-TCP RESORBS')+'</text><path class="ldr" d="M'+(mob?640:650)+' '+(mob?528:524)+'L'+f(D.cx+D.rx*.45)+' '+f(D.cy+D.ry*.55)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),wk:$("#wkr",svg),nb:dl(".nb"),gr:$$(".gr",svg),
    l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)]};
  var D=BN.DF,lastB=-1,H0=2*D.ry+30,Y0=D.cy+D.ry+12;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.06),s2=seg(p,.26,.42),s3=seg(p,.51,.66),s4=seg(p,.76,.94);
    /* granules settle in, staggered; beta-TCP granules resorb in step 4, HA stays as a faint scaffold */
    E.gr.forEach(function(el){var q=BN.G[+el.getAttribute("data-k")],a=Math.max(0,Math.min(1,(s2*1.5-q.dl*.5))),dy=(1-a)*-46;
      var keep=q.ha?1-.5*s4:1-s4;el.setAttribute("transform","translate(0 "+dy.toFixed(1)+")");op(el,b*a*keep);el.classList.toggle("wet",s3>.4)});
    /* fluid rises through the graft */
    var hh=H0*s3*(1-.8*s4);E.wk.setAttribute("y",(Y0-hh).toFixed(1));E.wk.setAttribute("height",hh.toFixed(1));
    draw(E.nb,s4);E.nb.forEach(function(a){a[0].style.visibility=s4>.002?'visible':'hidden'});
    op(E.l[0],b*s1*(1-seg(p,.2,.26)));op(E.l[1],b*s2*(1-seg(p,.46,.51)));op(E.l[2],b*s3*(1-seg(p,.71,.76)));op(E.l[3],b*s4);
  };
}
