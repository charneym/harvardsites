/* The story scene (DB/BY): how Glucoprime(R) works in a wound, from tissuerepair.com.au (About: Technology; Clinical
   Program: macrophage activation, M1 to M2, collagen I and III, new capillaries, barrier) as ONE continuous scene in fine
   line: a cross-section of skin with an open wound, the epidermis, the dermis and its collagen, a blood vessel below.
   Frame 0 is already a complete picture: the gel's Glucoprime particles lie in the wound bed and macrophages wait in the
   dermis. Step 1 (decoy): the macrophages move to the particles and their receptors latch on. Step 2 (activate): they
   switch on, release cytokines and growth factors, and neutrophils leave the vessel for the wound. Step 3 (rebuild): the
   macrophages turn M2, new collagen fibres and capillary loops grow across the wound bed and the epidermis closes over.
   All labels live in a legend above the skin, a label column on the left and a caption band below, never on a stroke (DR3).
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var SX0=120,SX1=744,SY=150,EH=38;           /* skin: tissue from x 120 to 744, surface at y 150, epidermis 38 deep */
var WX=432,WR=100,WD=182;                     /* the wound: centre x, half-width at the surface, depth */
var VY=452;                                   /* the blood vessel */
function hw(y){var t=(y-SY)/WD;return t>=1?0:WR*Math.sqrt(1-t*t)}
function wave(x0,x1,y,amp,per,ph){var d='',n=Math.max(2,Math.round(Math.abs(x1-x0)/6)),i;for(i=0;i<=n;i++){var x=x0+(x1-x0)*i/n;d+=(i?'L':'M')+x.toFixed(1)+' '+(y+amp*Math.sin(x/per+ph)).toFixed(1)}return d}
function blob(cx,cy,rx,ry,amp,ph){var d='',n=48,i;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,k=1+amp*Math.sin(a*3+ph)+amp*.6*Math.sin(a*5+ph*2);
  d+=(i?'L':'M')+(cx+rx*k*Math.cos(a)).toFixed(1)+' '+(cy+ry*k*Math.sin(a)).toFixed(1)}return d+'Z'}
/* Glucoprime particles resting in the wound bed */
var PART=[[372,226],[396,252],[430,236],[462,250],[490,228],[384,286],[418,282],[452,290],[478,276],[406,312],[440,318],[360,256]];
/* macrophages: [start x, y, bound x, y] */
var MAC=[[300,262,352,262],[566,258,512,262],[338,392,396,330],[530,392,470,334]];
/* neutrophils leave the vessel for the wound */
var NEU=[[392,VY,414,300],[438,VY,446,262],[482,VY,470,306]];
var CYT=(function(){var a=[],k,j;for(k=0;k<4;k++)for(j=0;j<4;j++){var an=(j/4)*Math.PI*2+k*.7+.4;a.push([k,Math.cos(an),Math.sin(an)])}return a})();
function partG(){return '<ellipse rx="7.2" ry="5.6"/><path d="M-3.6 -.6C-1.6 -2.8 1.8 -2.6 3.6 -.2"/>'}
function macG(){return '<path class="mb" d="'+blob(0,0,21,18,.06,.8)+'"/><path class="mn" d="M-8 -3C-8 -10 3 -11 6 -5C8 -1 4 2 1 1C-2 0 -3 5 -6 4C-9 3 -8 0 -8 -3Z"/>'+
  '<g class="rc"><path d="M-20 -8l-6 -4M-22 2l-7 0M-19 11l-6 4M20 -8l6 -4M22 2l7 0M19 11l6 4"/></g>'}
function neuG(){return '<circle class="nb" r="9.5"/><path class="nn" d="M-4.5 -1.5a2.3 2.3 0 1 1 3 2.4a2.3 2.3 0 1 1 3.2 -.6a2.3 2.3 0 1 1 1.6 2.6"/>'}
function skinScene(o){
  var g='',i,y;
  var T=function(cls,x,y,txt,anchor,keep,id){return (o.mob&&!keep)?'':'<text'+(id?' id="'+id+'"':'')+' class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  var L0=WX-WR,L1=WX+WR;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* legend: two rows above the skin */
  var lg=[[30,40,'<g class="pt" transform="translate(40 '+(o.mob?36:40)+')">'+partG()+'</g>','GLUCOPRIME®'],[400,40,'<g class="mac lgm" transform="translate(412 '+(o.mob?36:40)+') scale(.62)">'+macG()+'</g>','MACROPHAGE'],
          [30,88,'<g class="neu" transform="translate(40 '+(o.mob?92:88)+')">'+neuG()+'</g>','NEUTROPHIL'],[400,88,'<path class="cl" d="'+wave(400,426,o.mob?92:88,2.4,3.2,0)+'"/>','NEW COLLAGEN']];
  g+='<g id="scLg">';lg.forEach(function(l){g+=l[2];g+='<text class="t lgt" x="'+(l[0]+(o.mob?38:32))+'" y="'+((o.mob?(l[1]===40?36:92):l[1])+4)+'">'+l[3]+'</text>'});g+='</g>';
  g+='<g id="scBase">';
  /* epidermis: the surface and the junction with its rete ridges, open over the wound */
  g+='<path class="sk sD" d="'+wave(SX0,L0,SY,1.4,22,0)+'"/><path class="sk sD" d="'+wave(L1,SX1,SY,1.4,22,1)+'"/>';
  g+='<path class="sk2 sD" d="'+wave(SX0,L0-14,SY+EH,4,9,.5)+'"/><path class="sk2 sD" d="'+wave(L1+14,SX1,SY+EH,4,9,2)+'"/>';
  g+='<path class="sk2 sD" d="M'+L0+' '+SY+'C'+(L0-4)+' '+(SY+16)+' '+(L0-10)+' '+(SY+30)+' '+(L0-14)+' '+(SY+EH)+'"/><path class="sk2 sD" d="M'+L1+' '+SY+'C'+(L1+4)+' '+(SY+16)+' '+(L1+10)+' '+(SY+30)+' '+(L1+14)+' '+(SY+EH)+'"/>';
  /* the wound bed */
  g+='<path class="wb sD" d="M'+L0+' '+SY+'A'+WR+' '+WD+' 0 0 0 '+L1+' '+SY+'"/>';
  /* the dermis: collagen bundles, cut by the wound */
  g+='<g id="scCol">';
  for(y=SY+EH+24;y<=VY-30;y+=32){var h=hw(y),ph=y*.13;
    if(h>0){g+='<path class="dcl" d="'+wave(SX0,WX-h-10,y,2.2,7,ph)+'"/><path class="dcl" d="'+wave(WX+h+10,SX1,y,2.2,7,ph)+'"/>'}
    else g+='<path class="dcl" d="'+wave(SX0,SX1,y,2.2,7,ph)+'"/>'}
  g+='</g>';
  /* the blood vessel */
  g+='<path class="vs sD" d="M'+SX0+' '+(VY-7)+'L'+SX1+' '+(VY-7)+'"/><path class="vs sD" d="M'+SX0+' '+(VY+7)+'L'+SX1+' '+(VY+7)+'"/>';
  g+=T('t',30,SY+EH/2+4,'EPIDERMIS','start');
  g+=T('t',30,300,'DERMIS','start');
  g+=T('t',30,VY+4,'VESSEL','start');
  g+='</g>';
  /* step 3 growth: new collagen across the wound, capillary loops, the epidermis closing */
  g+='<g id="scNew">';
  [SY+46,SY+70,SY+94,SY+118,SY+140,SY+160].forEach(function(yy,k){var h=hw(yy)-6;g+='<path class="cl nD" d="'+wave(WX-h,WX+h,yy,2.4,6,k)+'"/>'});
  [[-70,-22,SY+70],[ -6,52,SY+58]].forEach(function(c){var a=WX+c[0],z=WX+c[1],m=(a+z)/2,w=(z-a)/2,top=c[2];
    g+='<path class="cp nD" d="M'+a+' '+(VY-7)+'C'+(a-6)+' '+(top+120)+' '+(a-w*.9)+' '+(top+30)+' '+(m-w*.4)+' '+(top+4)+'C'+(m+w*.2)+' '+(top-8)+' '+(z+w*.9)+' '+(top+26)+' '+(z+4)+' '+(top+110)+'C'+(z+6)+' '+(top+180)+' '+z+' '+(VY-60)+' '+z+' '+(VY-7)+'"/>'});
  g+='<path class="sk eD" d="'+wave(L0,WX,SY,1.4,22,.3)+'"/><path class="sk eD" d="'+wave(L1,WX,SY,1.4,22,1.3)+'"/>';
  g+='<path class="sk2 eD" d="'+wave(L0-14,WX,SY+EH,4,9,.5)+'"/><path class="sk2 eD" d="'+wave(L1+14,WX,SY+EH,4,9,2)+'"/>';
  g+='</g>';
  /* dynamic cells */
  g+='<g id="scPt">';PART.forEach(function(q,k){g+='<g class="pt" transform="translate('+q[0]+' '+q[1]+') rotate('+((k*37)%60-30)+')">'+partG()+'</g>'});g+='</g>';
  g+='<g id="scCy">';CYT.forEach(function(){g+='<circle class="cy" r="2.4"/>'});g+='</g>';
  g+='<g id="scNe">';NEU.forEach(function(){g+='<g class="neu">'+neuG()+'</g>'});g+='</g>';
  g+='<g id="scMa">';MAC.forEach(function(){g+='<g class="mac">'+macG()+'</g>'});g+='</g>';
  /* step captions, in the clear band under the scene */
  var ly=SCH-10;
  g+='<g id="lb1"><text class="a" x="30" y="'+ly+'">'+(o.mob?'MACROPHAGES BIND THE DECOY':'MACROPHAGE RECEPTORS LATCH ON TO GLUCOPRIME®')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="30" y="'+ly+'">'+(o.mob?'CYTOKINES CALL IN HELP':'CYTOKINES AND GROWTH FACTORS CALL IN HELP')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="30" y="'+ly+'">'+(o.mob?'M2 CELLS REBUILD, IT CLOSES':'M2 MACROPHAGES REBUILD, THE WOUND CLOSES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return skinScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={wb:$("#scBase .wb",svg),base:dl("#scBase .sD"),fade:$$("#scBase text, #scCol, #scLg",svg),nd:dl("#scNew .nD"),ed:dl("#scNew .eD"),
    pt:$$("#scPt .pt",svg),cy:$$("#scCy .cy",svg),ne:$$("#scNe .neu",svg),ma:$$("#scMa .mac",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  function ez(t){return t*t*(3-2*t)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var mv=ez(seg(p,.05,.26)),bind=seg(p,.2,.3),act=seg(p,.36,.44),neu=ez(seg(p,.4,.62)),cy=seg(p,.4,.64),m2=seg(p,.68,.76),grow=seg(p,.7,.9),close=seg(p,.8,.96);
    /* 1. the macrophages move to the particles; receptors latch on */
    E.ma.forEach(function(el,k){var m=MAC[k],x=lerp(m[0],m[2],mv),y=lerp(m[1],m[3],mv),sx=1+.28*m2,sy=1-.16*m2,rot=(k%2?-1:1)*18*m2;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+rot.toFixed(1)+") scale("+sx.toFixed(3)+" "+sy.toFixed(3)+")");op(el,b);
      el.classList.toggle("bd",bind>.5);el.classList.toggle("on",act>.5&&m2<.5);el.classList.toggle("m2",m2>=.5)});
    /* the particles: present from frame 0, taken up as the wound rebuilds */
    E.pt.forEach(function(el){op(el,b*(1-seg(p,.66,.86)))});
    /* 2. cytokines radiate from the activated cells; neutrophils leave the vessel */
    E.cy.forEach(function(el,k){var c=CYT[k],m=MAC[c[0]],t=(cy*1.6+k*.07)%1,r=24+t*46;
      el.setAttribute("cx",(m[2]+c[1]*r).toFixed(1));el.setAttribute("cy",(m[3]+c[2]*r).toFixed(1));op(el,b*(cy>0&&cy<1?Math.sin(t*Math.PI)*.9:0))});
    E.ne.forEach(function(el,k){var n=NEU[k],t=Math.min(1,Math.max(0,neu*1.25-k*.12));
      el.setAttribute("transform","translate("+lerp(n[0],n[2],ez(t)).toFixed(1)+" "+lerp(n[1],n[3],ez(t)).toFixed(1)+")");op(el,b*(t>0?Math.min(1,t*5):0)*(1-.6*seg(p,.86,.96)))});
    /* 3. new collagen and capillaries grow across the wound bed; the epidermis closes over it */
    draw(E.nd,grow);draw(E.ed,close);if(lastB===1||b===1)E.wb.style.opacity=(1-.75*seg(p,.72,.92)).toFixed(3);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.35)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.67)));op(E.l3,b*seg(p,.72,.8));
  };
}
