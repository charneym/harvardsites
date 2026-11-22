/* The story scene (BL/BY/DB): how Nutriwyo's approach works (nutriwyo.com Area 2; NIH RePORTER 1R41DK125213; Chenchar et al.,
   ACS Pharmacol Transl Sci 2025), as ONE continuous scene: a cross-section of skin with an open diabetic wound, epidermis over a
   dermis woven from collagen bundles, the wound bed cut down into it.
   Step 1 (wound): the section draws in; the wound sits open, its bed frayed.
   Step 2 (breakdown): cathepsin K enzymes gather in the wound bed and cut the collagen bundles around it into fragments.
   Step 3 (repair): the inhibitor (in the brand orange) docks in each enzyme's cleft; the collagen re-forms, new matrix fills the
   bed and skin cells migrate in from both edges until the surface closes. Schematic. Every element follows the scrubbed progress. */
var SCW=760,SCH=468;
var SURF=118,EPI=156,WL=318,WR=572,WD=236;
function nzR(s){return function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}}
function bedY(x,fill){var u=(x-WL)/(WR-WL);if(u<=0||u>=1)return SURF;var d=Math.sin(Math.PI*u);d=Math.pow(d,.8);return SURF+(WD-SURF)*d*(1-fill)}
/* collagen bundles: rows of wavy segments across the dermis; segments that sit under the wound bed are the ones cut */
var FIB=(function(){var a=[],R=nzR(11),y,x;for(y=EPI+22;y<=420;y+=21){var ph=R()*6;for(x=140;x<740;x+=46){
  var x1=x+46,mx=(x+x1)/2,top=bedY(mx,0);if(y<top+8)continue;
  var near=Math.abs(mx-(WL+WR)/2)<(WR-WL)*.62&&y<WD+96;
  a.push({x0:x,x1:x1,y:y+Math.sin(ph+x*.02)*4,w:Math.sin(ph+x*.05),near:near,k:R()})}}return a})();
/* new matrix laid down inside the wound bed during repair */
var NEW=(function(){var a=[],y;for(y=SURF+16;y<WD+4;y+=17){var xs=[],x;for(x=WL-10;x<WR+10;x+=8){if(bedY(x,0)>y+3)xs.push(x)}
  if(xs.length>2)a.push({x0:xs[0]+4,x1:xs[xs.length-1]-4,y:y})}return a})();
var CK=[{x:360,y:WD+34},{x:410,y:WD+56},{x:462,y:WD+30},{x:520,y:WD+52},{x:392,y:WD-6},{x:450,y:WD-26},{x:505,y:WD-4}];
function fibPath(f){var c1=(f.x0*2+f.x1)/3,c2=(f.x0+f.x1*2)/3,a=6*f.w;
  return 'M'+f.x0+' '+f.y.toFixed(1)+'C'+c1.toFixed(1)+' '+(f.y-a).toFixed(1)+' '+c2.toFixed(1)+' '+(f.y+a).toFixed(1)+' '+f.x1+' '+f.y.toFixed(1)}
function skinScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="'+(o.mob?'132 84 616 '+(SCH-84):'0 0 '+SCW+' '+SCH)+'" aria-hidden="true">';
  g+='<defs><clipPath id="scClip"><rect x="140" y="0" width="600" height="'+SCH+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="M140 '+SURF+'H'+WL+'"/><path class="sk sD" d="M'+WR+' '+SURF+'H740"/>';
  g+='<path class="ep sD" d="M140 '+EPI+'C190 '+(EPI-5)+' 240 '+(EPI+5)+' '+(WL-14)+' '+EPI+'"/><path class="ep sD" d="M'+(WR+14)+' '+EPI+'C620 '+(EPI+5)+' 690 '+(EPI-5)+' 740 '+EPI+'"/>';
  if(!o.mob){g+='<text class="t" x="20" y="'+(SURF-14)+'">SKIN SURFACE</text>';
  g+='<text class="t" x="20" y="'+(SURF+26)+'">EPIDERMIS</text>';
  g+='<text class="t" x="20" y="'+(EPI+70)+'">DERMIS</text><text class="t" x="20" y="'+(EPI+86)+'">COLLAGEN</text>';}
  g+='</g>';
  /* epidermal cells on both shoulders of the wound (they migrate in during repair) */
  g+='<g id="scCel">';var R=nzR(5);
  for(var r=0;r<2;r++)for(i=0;i<9;i++){var cx=150+i*19+(r?9:0),cy=SURF+10+r*18;if(cx<WL-12)g+='<ellipse class="ce" cx="'+cx+'" cy="'+cy+'" rx="9" ry="7"/>'}
  for(r=0;r<2;r++)for(i=0;i<9;i++){var cx2=730-i*19-(r?9:0),cy2=SURF+10+r*18;if(cx2>WR+12)g+='<ellipse class="ce" cx="'+cx2+'" cy="'+cy2+'" rx="9" ry="7"/>'}
  g+='</g>';
  /* migrating cells: start at the wound edges, travel to the centre */
  g+='<g id="scMig">';for(i=0;i<12;i++){var sd=i%2,rr=(i>>1)%2;g+='<ellipse class="mg" data-k="'+i+'" rx="9" ry="6.5" cx="0" cy="0"/>'}g+='</g>';
  /* collagen bundles */
  g+='<g id="scFib" clip-path="url(#scClip)">';FIB.forEach(function(f,k){g+='<path class="fb'+(f.near?' nr':'')+'" data-k="'+k+'" d="'+fibPath(f)+'"/>'});g+='</g>';
  /* the wound bed edge (it rises as the bed fills) */
  g+='<path id="scBed" class="bd" d=""/>';
  g+='<g id="scNew">';NEW.forEach(function(n,k){g+='<path class="nw" data-k="'+k+'" d="M'+n.x0+' '+n.y+'C'+((n.x0*2+n.x1)/3).toFixed(1)+' '+(n.y-5)+' '+((n.x0+n.x1*2)/3).toFixed(1)+' '+(n.y+5)+' '+n.x1+' '+n.y+'"/>'});g+='</g>';
  /* cathepsin K: a two-lobed enzyme with its active-site cleft; the inhibitor docks in the cleft */
  g+='<g id="scCk">';CK.forEach(function(c,k){g+='<g class="ck" data-k="'+k+'"><path class="ckb" d="M-12 -2a12 11 0 0 1 11 -10l3 7-3 6 3 7-3 2a12 11 0 0 1 -11 -12z M2 -12a12 12 0 0 1 10 12a12 12 0 0 1 -10 12l-2 -6 3 -6 -3 -6z"/><g class="inh"><circle cx="0" cy="-4" r="2.6"/><circle cx="1.5" cy="0" r="2.9"/><circle cx="0" cy="4.2" r="2.6"/></g></g>'});g+='</g>';
  /* collagen fragments released by the cuts */
  g+='<g id="scFr">';var RF=nzR(23);for(i=0;i<22;i++){var fx=WL+14+RF()*(WR-WL-28),fy=bedY(fx,0)+10+RF()*60;g+='<path class="fr" data-k="'+i+'" d="M'+fx.toFixed(1)+' '+fy.toFixed(1)+'l'+(8+RF()*8).toFixed(1)+' '+((RF()-.5)*6).toFixed(1)+'"/>'}g+='</g>';
  var ly=SCH-8,lx=o.mob?140:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(o.mob?'AN OPEN WOUND · STALLED':'AN OPEN DIABETIC WOUND · HEALING STALLED')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(o.mob?'CATHEPSIN K CUTS COLLAGEN':'CATHEPSIN K CUTS THE COLLAGEN SCAFFOLD')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(o.mob?'INHIBITED · THE WOUND CLOSES':'CATHEPSIN K INHIBITED · MATRIX HOLDS · WOUND CLOSES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return skinScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),cel:$$("#scCel .ce",svg),bed:$("#scBed",svg),
    fib:$$(".fb",svg).map(function(el){var L=el.getTotalLength();return {el:el,f:FIB[+el.getAttribute("data-k")],L:L}}),
    nw:$$(".nw",svg).map(function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;return {el:el,L:L,k:+el.getAttribute("data-k")}}),
    mg:$$(".mg",svg).map(function(el){return {el:el,k:+el.getAttribute("data-k")}}),
    ck:$$(".ck",svg).map(function(el){return {el:el,k:+el.getAttribute("data-k"),inh:el.querySelector(".inh")}}),
    fr:$$(".fr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastFill=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function bedPath(fill){var d='M'+(WL-2)+' '+SURF,x;for(x=WL;x<=WR;x+=6)d+='L'+x+' '+bedY(x,fill).toFixed(1);return d+'L'+(WR+2)+' '+SURF}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.cel.forEach(function(el){op(el,b)})}
    var come=seg(p,.22,.4),cut=seg(p,.3,.58),dock=seg(p,.62,.76),heal=seg(p,.7,.94),fill=.72*heal;
    if(Math.abs(fill-lastFill)>.002){lastFill=fill;E.bed.setAttribute("d",bedPath(fill))}
    op(E.bed,b*(1-.75*heal));
    E.fib.forEach(function(F){var f=F.f,v=b;
      if(f.near){var c=sm((cut-f.k*.3)/.7)*(1-sm((heal-f.k*.2)/.8));
        F.el.style.strokeDasharray=c>.01?((F.L*(1-.62*c))/3).toFixed(1)+" "+(F.L*.62*c/3+.5).toFixed(1):"none";
        F.el.classList.toggle("cut",c>.35);v=b*(1-.45*c)}
      op(F.el,v)});
    E.fr.forEach(function(el,i){op(el,b*sm((cut-i*.015)*2)*(1-sm(heal*1.6)))});
    E.ck.forEach(function(C){var c=CK[C.k],sx=C.k%2?740:140,sy=c.y+40,q=sm((come-C.k*.04)/.76);
      var x=sx+(c.x-sx)*q,y=sy+(c.y-sy)*q+Math.sin(p*30+C.k)*2*(1-dock);
      var ex=1-sm((heal-.6)/.4);
      C.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale(1.45)");
      op(C.el,b*sm(q*3)*ex);C.el.classList.toggle("off",dock>.5);
      op(C.inh,sm((dock-C.k*.03)/.8))});
    E.nw.forEach(function(N){var q=sm((heal-N.k*.03)/.75);N.el.style.strokeDashoffset=(N.L*(1-q)).toFixed(1);op(N.el,b*q)});
    E.mg.forEach(function(M){var k=M.k,side=k%2,row=(k>>1)%2,idx=k>>2,q=sm((heal-idx*.06)/.82);
      var s0=side?WR+10+idx*4:WL-10-idx*4,t0=side?(WL+WR)/2+12+idx*19:(WL+WR)/2-12-idx*19;
      var x=s0+(t0-s0)*q,y=SURF+10+row*18;var yb=bedY(x,fill)-6;
      M.el.setAttribute("cx",(x+(row?(side?-9:9):0)).toFixed(1));M.el.setAttribute("cy",Math.min(y,Math.max(y,yb)).toFixed(1));
      op(M.el,b*sm(q*4))});
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.26,.32)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}
