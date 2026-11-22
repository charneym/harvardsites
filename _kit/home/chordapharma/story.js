/* The story scene (BL/BY/DB): how Capsadyn works (capsadyn.com Drug Facts; the 2024-03-15 trial release), as ONE continuous
   scene: a cross-section of skin (epidermis over dermis) with sensory nerves rising to free nerve endings under the surface.
   Frame 0: the endings are overactive, glowing and firing. Step 1 (apply): a fingernail-sized dab of cream on the surface, and
   capsaicin molecules (the chili's own red) diffuse down to the endings. Step 2 (quiet): the receptors are gradually
   desensitized; the glow and the firing die away. Step 3 (no burn): a 0-10 burn scale from the trial, with Capsadyn at the
   placebo's 0 and the 0.1% comparator at 5. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var SKY=100,EPI=196,NB=478;      /* skin surface, epidermis/dermis border, nerve roots */
var NX=[200,358,516,674];
var ENDS=(function(){var a=[];NX.forEach(function(x,i){var j=(i%2)?6:-4;a.push({x:x-34,y:150+j,n:i},{x:x+4,y:132-j,n:i},{x:x+36,y:156+j,n:i})});return a})();
var MOL=(function(){var s=91,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<42;i++){var e=ENDS[i%ENDS.length];a.push({fx:150+R()*590,fy:76+R()*14,tx:e.x+(R()-.5)*26,ty:e.y-8+(R()-.5)*18,d:R()*.4})}return a})();
function nervePath(x,i){var w=(i%2?1:-1)*14;
  return 'M'+(x+w)+' '+NB+'C'+(x+w)+' '+(NB-110)+' '+(x-w)+' '+(EPI+80)+' '+x+' '+(EPI+12);}
function branchPath(x,e){return 'M'+x+' '+(EPI+12)+'C'+x+' '+(EPI-10)+' '+e.x+' '+(e.y+40)+' '+e.x+' '+e.y}
function skinScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: skin layers, cells, collagen, captions ---- */
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="M20 '+SKY+'C150 '+(SKY-5)+' 260 '+(SKY+5)+' 390 '+SKY+'S620 '+(SKY-5)+' 740 '+SKY+'"/>';
  g+='<path class="bm sD" d="M20 '+EPI+'C70 '+(EPI-14)+' 110 '+(EPI+14)+' 160 '+EPI+'S250 '+(EPI-14)+' 300 '+EPI+'S390 '+(EPI+14)+' 440 '+EPI+'S530 '+(EPI-14)+' 580 '+EPI+'S670 '+(EPI+14)+' 740 '+EPI+'"/>';
  for(var r=0;r<3;r++)for(i=0;i<12;i++){var cx=166+i*48+(r%2)*24,cy=SKY+22+r*26;if(cx>730)continue;
    g+='<path class="ec sD" d="M'+(cx-17)+' '+cy+'C'+(cx-17)+' '+(cy-11)+' '+(cx+17)+' '+(cy-11)+' '+(cx+17)+' '+cy+'S'+(cx-17)+' '+(cy+11)+' '+(cx-17)+' '+cy+'Z"/>';}
  for(i=0;i<5;i++){var y=EPI+60+i*52;
    g+='<path class="cg sD" d="M150 '+y+'c40 -10 70 10 110 0s70 -10 110 0 70 10 110 0 70 -10 110 0 70 10 110 0"/>';}
  g+='<text class="t" x="20" y="'+(SKY+50)+'">EPIDERMIS</text>';
  g+='<text class="t" x="20" y="'+(EPI+70)+'">DERMIS</text>';
  g+='<text class="t" x="20" y="'+(NB-30)+'">SENSORY</text><text class="t" x="20" y="'+(NB-14)+'">NERVES</text>';
  g+='</g>';
  /* ---- nerves: trunks and branches to the free endings ---- */
  g+='<g id="scNer">';
  NX.forEach(function(x,i){g+='<path class="nv sD" d="'+nervePath(x,i)+'"/>'});
  ENDS.forEach(function(e){g+='<path class="nv sD" d="'+branchPath(NX[e.n],e)+'"/>'});
  g+='</g>';
  /* ---- the pain signal: dashes running down the nerves while the endings are overactive ---- */
  g+='<g id="scSig">';
  NX.forEach(function(x,i){g+='<path class="sg" d="'+nervePath(x,i)+'"/>'});
  g+='</g>';
  /* ---- the endings: a hot glow (overactive) and a calm ring (desensitized) ---- */
  g+='<g id="scEnd">';
  ENDS.forEach(function(e){g+='<circle class="hot" cx="'+e.x+'" cy="'+e.y+'" r="11"/><circle class="hc" cx="'+e.x+'" cy="'+e.y+'" r="3.6"/><circle class="calm" cx="'+e.x+'" cy="'+e.y+'" r="5"/>'});
  g+='</g>';
  /* ---- the cream on the surface ---- */
  g+='<g id="scCrm"><path class="cr" d="M150 '+(SKY-2)+'C150 '+(SKY-26)+' 190 '+(SKY-28)+' 445 '+(SKY-28)+'S740 '+(SKY-26)+' 740 '+(SKY-2)+'Z"/><text class="t c" x="160" y="'+(SKY-40)+'">CAPSADYN · 0.25% CAPSAICIN</text></g>';
  /* ---- capsaicin molecules ---- */
  g+='<g id="scMol">';
  MOL.forEach(function(m,k){g+='<circle class="ml" data-k="'+k+'" r="3.2" cx="0" cy="0"/>'});
  g+='</g>';
  /* ---- the burn scale from the trial (median peak burn, 0-10 visual analog scale) ---- */
  var vx0=230,vx1=730,vy=34;
  g+='<g id="scVas"><text class="t" x="20" y="'+(vy+4)+'">'+(o.mob?'BURN 0–10':'PEAK BURN, 0–10')+'</text><path class="vs" d="M'+vx0+' '+vy+'H'+vx1+'"/>';
  for(i=0;i<=10;i++){var tx=vx0+(vx1-vx0)*i/10;g+='<path class="vs" d="M'+tx+' '+(vy-4)+'V'+(vy+4)+'"/>'}
  g+='<circle class="vm" cx="'+vx0+'" cy="'+vy+'" r="6"/><text class="a" x="'+(vx0+12)+'" y="'+(vy-12)+'">'+(o.mob?'CAPSADYN · 0':'CAPSADYN = PLACEBO · 0')+'</text>';
  var v5=vx0+(vx1-vx0)*.5;g+='<circle class="vc" cx="'+v5+'" cy="'+vy+'" r="6"/><text class="t" x="'+(v5+12)+'" y="'+(vy-12)+'">'+(o.mob?'0.1% CREAM · 5':'0.1% COMPARATOR · 5')+'</text></g>';
  /* ---- step labels, in the clear band under the skin ---- */
  var ly=SCH-10;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">CAPSAICIN · ABSORBED THROUGH THE SKIN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">PAIN RECEPTORS · GRADUALLY DESENSITIZED</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">NO MORE BURN THAN PLACEBO · p = 0.32</text></g>';
  return g+'</svg>';
}
function scene(){return skinScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),ner:dl("#scNer .sD"),fade:$$("#scBase text",svg),sg:$$("#scSig .sg",svg),
    hot:$$("#scEnd .hot",svg),hc:$$("#scEnd .hc",svg),calm:$$("#scEnd .calm",svg),crm:$("#scCrm",svg),
    ml:$$(".ml",svg).map(function(el){return {el:el,m:MOL[+el.getAttribute("data-k")]}}),vas:$("#scVas",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.ner,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var app=seg(p,.04,.16),dif=seg(p,.1,.4),calm=seg(p,.4,.64),vas=seg(p,.7,.86);
    var hot=b*(1-calm);
    E.sg.forEach(function(el,i){op(el,hot*.9);el.style.strokeDashoffset=(-p*900-i*37).toFixed(1)});
    E.hot.forEach(function(el,i){op(el,hot*(.55+.25*Math.sin(p*40+i)))});
    E.hc.forEach(function(el){op(el,hot)});
    E.calm.forEach(function(el){op(el,b*calm)});
    op(E.crm,b*app*(1-.55*seg(p,.36,.6)));
    E.ml.forEach(function(M){var m=M.m,d=Math.min(1,Math.max(0,(dif-m.d*.5)/(1-m.d*.5))),q=d*d*(3-2*d);
      var x=m.fx+(m.tx-m.fx)*q,y=m.fy+(m.ty-m.fy)*q;M.el.setAttribute("cx",x.toFixed(1));M.el.setAttribute("cy",y.toFixed(1));
      op(M.el,b*app*(1-.6*vas))});
    op(E.vas,b*vas);
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.78,.86));
  };
}
