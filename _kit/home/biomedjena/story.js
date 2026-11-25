/* the story scene (BL/BY/DB): the video head impulse test (eHIT USB), drawn as one engraved plate kept on screen for all
   three steps: the patient's head seen from above, wearing the mask, eyes on a target ahead; beside it the velocity trace.
   Step 1 (the impulse): the head turns in a short fast impulse and the head-velocity trace draws.
   Step 2 (the reflex): the gaze stays on the target as the eyes counter-rotate, and the eye-velocity trace draws, mirrored.
   Step 3 (the gain): the area under the eye trace fills, the gain is read as eye over head, and the six canals (left and right
   anterior, horizontal, posterior) tick off. Sources: biomed-jena.de/en/eHIT-en.html, /eDVA-en.html, /eVNG-en.html.
   Schematic. Driven by the scrubbed story progress. */
var HC=[150,196],EYES=[[133,146],[167,146]],TGT=[150,40];
function bell(x0,x1,c,s,a,base){var d="",x;for(x=x0;x<=x1;x+=4){var y=base+a*Math.exp(-Math.pow((x-c)/s,2));d+=(x===x0?"M":"L")+x+" "+y.toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),g='',i;
  /* desktop: head left, trace right. phones: a portrait plate, head and the gain read-out on top, the trace full width below */
  var C=mob?{X0:30,X1:430,B:356,T:276,BT:474,AH:-86,AE:80,hx:-60,hy:-26,hl:-45,el:62,vy:266,ty:24}:{X0:300,X1:700,B:196,T:52,BT:330,AH:-110,AE:104,hx:0,hy:0,hl:-84,el:88,vy:38,ty:20};
  var X0=C.X0,X1=C.X1,B=C.B;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'0 0 450 486':'20 10 700 360')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="sD ax" d="M'+X0+' '+C.T+'V'+C.BT+'"/><path class="sD ax" d="M'+X0+' '+B+'H'+X1+'"/>';
  var tq=(B-C.T)/3;g+='<path class="tk0" d="M'+X0+' '+(B-tq*2).toFixed(0)+'h6M'+X0+' '+(B-tq).toFixed(0)+'h6M'+X0+' '+(B+tq).toFixed(0)+'h6M'+X0+' '+(B+tq*2).toFixed(0)+'h6"/>';
  g+='<g transform="translate('+C.hx+' '+C.hy+')">';
  g+='<g id="hd"><path class="sD hd" d="M150 122C186 122 208 152 208 194C208 238 184 268 150 268C116 268 92 238 92 194C92 152 114 122 150 122Z"/>'+
     '<path class="sD hd" d="M143 124L150 110L157 124"/><path class="sD hd" d="M92 186C84 186 82 204 92 206M208 186C216 186 218 204 208 206"/>'+
     '<path class="sD mk" d="M104 150C118 136 182 136 196 150"/><path class="sD mk" d="M96 146H112V162H96ZM188 146H204V162H188Z"/>'+
     '<path class="sD st" d="M96 162C92 214 104 252 150 262C196 252 208 214 204 162"/>'+
     '<circle class="ey" cx="'+EYES[0][0]+'" cy="'+EYES[0][1]+'" r="4"/><circle class="ey" cx="'+EYES[1][0]+'" cy="'+EYES[1][1]+'" r="4"/></g>';
  g+='<circle class="tg" cx="'+TGT[0]+'" cy="'+TGT[1]+'" r="6"/><circle class="tg2" cx="'+TGT[0]+'" cy="'+TGT[1]+'" r="12"/>';
  g+='<text class="a" x="'+(TGT[0]+22)+'" y="'+(TGT[1]+(mob?7:4))+'">TARGET</text>';
  g+='<g id="st1h"><path class="sD1 rot" d="M222 150A84 84 0 0 1 233 214"/><path class="arh" d="M227 208 234 222 240 207Z"/></g>';
  g+='<g id="st2h"><path class="gz" id="gz1" d=""/><path class="gz" id="gz2" d=""/></g>';
  g+='</g>';
  g+='<text class="a" x="'+X0+'" y="'+C.vy+'">VELOCITY</text><text class="a" x="'+X1+'" y="'+(B+C.ty)+'" text-anchor="end">TIME</text>';
  g+='</g>';
  var cH=X0+140,cE=X0+146;
  g+='<g id="st1"><path class="sD1 hc" d="'+bell(X0+4,X0+320,cH,50,C.AH,B)+'"/>'+
     '<text class="a hl" x="'+(cH+60)+'" y="'+(B+C.hl)+'">HEAD</text></g>';
  g+='<g id="st2"><path class="sD2 ec" d="'+bell(X0+4,X0+320,cE,52,C.AE,B)+'"/>'+
     '<text class="a el" x="'+(cE+54)+'" y="'+(B+C.el)+'">EYE</text></g>';
  var cn=["LA","LH","LP","RA","RH","RP"];
  g+='<g id="st3"><path class="ef" d="'+bell(X0+4,X0+320,cE,52,C.AE,B)+'Z"/>'+
     '<text class="a gn" x="'+(mob?440:700)+'" y="'+(mob?56:76)+'" text-anchor="end">GAIN = EYE ÷ HEAD</text>';
  for(i=0;i<6;i++){var x=mob?250+(i%3)*66:340+i*60,y=mob?(i<3?100:150):332;
    g+='<path class="sD3 cb" d="M'+(x-7)+' '+y+'H'+(x+7)+'V'+(y+14)+'H'+(x-7)+'Z"/><path class="sD3 ck" d="M'+(x-4)+' '+(y+7)+'L'+(x-1)+' '+(y+11)+'L'+(x+5)+' '+(y+3)+'"/><text class="a cl" x="'+(x+14)+'" y="'+(y+(mob?14:12))+'">'+cn[i]+'</text>'}
  g+='</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .tk0, #scBase .ey, #scBase .tg, #scBase .tg2",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),s1h:$("#st1h",svg),s2h:$("#st2h",svg),
    c1:dl("#st1 .sD1, #st1h .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3"),hd:$("#hd",svg),g1:$("#gz1",svg),g2:$("#gz2",svg),ef:$("#st3 .ef",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function rotP(pt,a){var c=Math.cos(a),s=Math.sin(a),x=pt[0]-HC[0],y=pt[1]-HC[1];return [HC[0]+x*c-y*s,HC[1]+x*s+y*c]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var i1=seg(p,0,.22),i2=seg(p,.36,.56),i3=seg(p,.68,.9);
    /* the head turns about 16 degrees to the right during the impulse and stays there */
    var ang=16*i1*i1*(3-2*i1);E.hd.setAttribute("transform","rotate("+ang.toFixed(2)+" "+HC[0]+" "+HC[1]+")");
    var ar=ang*Math.PI/180,e1=rotP(EYES[0],ar),e2=rotP(EYES[1],ar);
    E.g1.setAttribute("d","M"+e1[0].toFixed(1)+" "+e1[1].toFixed(1)+"L"+TGT[0]+" "+(TGT[1]+8));
    E.g2.setAttribute("d","M"+e2[0].toFixed(1)+" "+e2[1].toFixed(1)+"L"+TGT[0]+" "+(TGT[1]+8));
    op(E.s1,b*Math.min(1,i1*5));op(E.s1h,b*Math.min(1,i1*5));op(E.s2h,b*Math.min(1,i2*5));draw(E.c1,i1);
    op(E.s2,b*Math.min(1,i2*5));draw(E.c2,i2);
    op(E.s3,b*Math.min(1,i3*5));draw(E.c3,i3);op(E.ef,i3*.9);
  };
}
