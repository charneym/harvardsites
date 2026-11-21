/* The story scene (BL/BY/DB): how IHP-102 works (ihptherapeutics.com Science; NIH UH3NS134781 abstract), as ONE continuous
   scene: a small blood vessel drawn lengthwise, its two walls lined with endothelial cells carrying P-selectin receptors.
   Frame 0: red cells and sickled cells flow through. Step 1 (crisis): the cells are caught by P-selectin on the wall,
   complement gathers, the cells pile up and the flow arrow fades. Step 2 (block): IHP-102 (drawn as the hexagons of IHP's own
   logo, a glycan) caps every receptor and the complement fades. Step 3 (flow): the cells let go and move on downstream; the
   flow returns. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var VT=96,VB=404;          /* the lumen between the two walls */
var REC=(function(){var a=[],i;for(i=0;i<9;i++){a.push({x:92+i*72,top:1});a.push({x:128+i*72,top:0})}return a})();
var CEL=(function(){var s=102,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<16;i++){
    var sk=i%4===1;                         /* every fourth cell is sickled */
    var fx=40+i*44+R()*18, fy=VT+40+R()*(VB-VT-80);
    /* the stuck place: piled against the walls around the middle of the vessel */
    var top=i%2===0, sx=250+((i*37)%260), sy=top?VT+20+((i*13)%3)*26:VB-20-((i*11)%3)*26;
    a.push({sk:sk,fx:fx,fy:fy,sx:sx,sy:sy,rot:R()*50-25,r:sk?0:R()});
  }return a})();
function hexP(cx,cy,r){var d='';for(var k=0;k<6;k++){var a=Math.PI/180*(60*k-30);d+=(k?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'}
function vesScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="vclip"><rect x="20" y="'+(VT-30)+'" width="720" height="'+(VB-VT+60)+'"/></clipPath></defs>';
  /* ---- base: the walls with their endothelial cells, and captions ---- */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="M20 '+VT+'H740M20 '+VB+'H740"/>';
  g+='<path class="wo sD" d="M20 '+(VT-34)+'H740M20 '+(VB+34)+'H740"/>';
  for(i=0;i<10;i++){var x=20+i*72;
    g+='<path class="en sD" d="M'+(x+4)+' '+(VT-4)+'C'+(x+20)+' '+(VT-30)+' '+(x+52)+' '+(VT-30)+' '+(x+68)+' '+(VT-4)+'"/>';
    g+='<path class="en sD" d="M'+(x+4)+' '+(VB+4)+'C'+(x+20)+' '+(VB+30)+' '+(x+52)+' '+(VB+30)+' '+(x+68)+' '+(VB+4)+'"/>';}
  g+='<text class="t" x="20" y="'+(VT-46)+'">VESSEL WALL · ENDOTHELIUM</text>';
  g+='<text class="t" x="20" y="'+(VB+62)+'">SMALL BLOOD VESSEL IN SICKLE CELL DISEASE</text>';
  g+='</g>';
  /* ---- P-selectin receptors: small Y shapes on the wall, pointing into the lumen ---- */
  g+='<g id="scRec">';
  REC.forEach(function(r){var y=r.top?VT:VB,d=r.top?1:-1;
    g+='<g class="rc"><path d="M'+r.x+' '+y+'V'+(y+d*12)+'M'+r.x+' '+(y+d*12)+'L'+(r.x-6)+' '+(y+d*20)+'M'+r.x+' '+(y+d*12)+'L'+(r.x+6)+' '+(y+d*20)+'"/></g>';});
  g+='</g>';
  /* ---- complement: small clustered dots near the stuck cells ---- */
  g+='<g id="scCmp">';
  for(i=0;i<14;i++){var cx=270+((i*53)%230),cy=(i%2?VT+70:VB-70)+((i*17)%30)-15;g+='<circle class="cm" cx="'+cx+'" cy="'+cy+'" r="3.4"/>'}
  g+='</g>';
  /* ---- the cells ---- */
  g+='<g id="scCel" clip-path="url(#vclip)">';
  CEL.forEach(function(c,k){
    if(c.sk)g+='<g class="ce sk" data-k="'+k+'"><path class="cb" d="M-28 6C-18 -18 18 -18 28 6C15 -5 -15 -5 -28 6Z"/></g>';
    else if(c.r<.5)g+='<g class="ce" data-k="'+k+'"><ellipse class="cb" rx="22" ry="22"/><ellipse class="dm" rx="9" ry="9"/></g>';
    else g+='<g class="ce" data-k="'+k+'"><path class="cb" d="M-24 0C-24 -9 -14 -10 -7 -6C-3 -4 3 -4 7 -6C14 -10 24 -9 24 0C24 9 14 10 7 6C3 4 -3 4 -7 6C-14 10 -24 9 -24 0Z"/></g>';
  });
  g+='</g>';
  /* ---- IHP-102: hexagon glycans that cap each receptor ---- */
  g+='<g id="scDrug">';
  REC.forEach(function(r,k){var y=r.top?VT+26:VB-26;g+='<path class="hx" data-k="'+k+'" d="'+hexP(0,0,8)+'" transform="translate('+r.x+' '+y+')"/>'});
  g+='</g>';
  /* ---- flow arrow in the lumen ---- */
  g+='<g id="scFlow"><path class="fl" d="M60 '+((VT+VB)/2)+'H700M688 '+((VT+VB)/2-8)+'L700 '+((VT+VB)/2)+'L688 '+((VT+VB)/2+8)+'"/></g>';
  /* ---- step labels, in the clear band under the vessel ---- */
  var ly=SCH-14;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">P-SELECTIN AND COMPLEMENT · CELLS STICK</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">IHP-102 · BOTH MECHANISMS BLOCKED</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">ADHESION RELEASED · FLOW RESTORED</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),rc:$$(".rc",svg),cm:$$(".cm",svg),
    ce:$$(".ce",svg).map(function(el){return {el:el,c:CEL[+el.getAttribute("data-k")]}}),
    hx:$$(".hx",svg),fl:$("#scFlow",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.rc.forEach(function(el){op(el,b)})}
    var stick=seg(p,.06,.3),cmp=seg(p,.14,.32)*(1-seg(p,.46,.6)),cap=seg(p,.38,.58),go=seg(p,.68,.92);
    E.ce.forEach(function(C,i){var c=C.c;
      /* flowing (frame 0) -> stuck on the wall (step 1) -> released and carried on downstream (step 3) */
      var x=c.fx+(c.sx-c.fx)*stick,y=c.fy+(c.sy-c.fy)*stick,rt=c.rot*(1-stick*.7);
      var gx=c.fx+260,gy=c.fy;x=x+(gx-x)*go;y=y+(gy-y)*go;if(x>760)x-=720;
      C.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+rt.toFixed(1)+")");op(C.el,b);
    });
    E.cm.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,cmp*1.6-(i%5)*.1)))});
    E.hx.forEach(function(el,i){var gi=Math.min(1,Math.max(0,cap*1.6-(i%9)*.06));op(el,b*gi);var r=REC[i],y=r.top?VT+16+10*(1-gi)+12*0:VB-16-10*(1-gi);
      el.setAttribute("transform","translate("+r.x+" "+(r.top?VT+26-14*(1-gi):VB-26+14*(1-gi)).toFixed(1)+")")});
    op(E.fl,b*(1-.85*seg(p,.12,.3)+.85*go));
    op(E.l1,b*seg(p,.18,.26)*(1-seg(p,.36,.42)));op(E.l2,b*seg(p,.48,.56)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
