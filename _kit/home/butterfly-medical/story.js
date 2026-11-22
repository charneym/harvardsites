/* The story scene (BL/BY/DB): how the Butterfly implant works, as ONE continuous cross-section of the prostate, drawn in
   fine line after Butterfly's own procedure animation and before/after cystoscopy images. Step 1 (narrowed): the two
   enlarged lateral lobes press in and close the prostatic urethra to a slit. Step 2 (placed): the implant, seen end-on
   (its apex hook at the top, arms sweeping down to the two wing loops), appears in the slit. Step 3 (open): the wings
   retract the lateral lobes apart and the channel opens; the tissue is pushed aside, never removed. Driven by the
   scrubbed progress. */
var SCW=760,SCH=520,BCX=380,BCY=270,BRX=292,BRY=212;
function bfCap(s,n){var a=[],i;for(i=0;i<=n;i++){var t=i/n*Math.PI;a.push([BCX+s*BRX*Math.sin(t)*(1-.06*Math.cos(t)),BCY-BRY*Math.cos(t)+(t<.5?Math.sin(t*6.3)*10:0)])}return a}
function bfInner(s,g,n){var a=[],i,y0=BCY-BRY+8,y1=BCY+BRY-6;for(i=0;i<=n;i++){var y=y1-(y1-y0)*i/n,u=(y-y0)/(y1-y0),b=Math.pow(Math.sin(Math.PI*u),.7);
  a.push([BCX+s*(3+g*b*(1-.25*u)),y])}return a}
function bfLobe(s,g,k){var o=bfCap(s,48),inr=bfInner(s,g,40),pts=o.concat(inr),cx=BCX+s*(140+g*.45),cy=BCY+8,d='',i;
  for(i=0;i<pts.length;i++){var x=cx+(pts[i][0]-cx)*k,y=cy+(pts[i][1]-cy)*k;d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d+'Z'}
function bfLumen(g){var l=bfInner(-1,g,40),r=bfInner(1,g,40).reverse(),d='',i,pts=l.concat(r);for(i=0;i<pts.length;i++)d+=(i?'L':'M')+pts[i][0].toFixed(1)+' '+pts[i][1].toFixed(1);return d+'Z'}
var BFK=[1,.8,.62,.45,.29];
function bfImp(gw){var d='',s,ax=BCX,ay=BCY-150;
  [-1,1].forEach(function(s){var wx=BCX+s*(gw+10),wy=BCY+30;d+='M'+(ax+s*6)+' '+ay+'C'+(ax+s*(26+gw*.3)).toFixed(1)+' '+(ay+10)+' '+(wx-s*4).toFixed(1)+' '+(wy-120)+' '+wx.toFixed(1)+' '+(wy-70)});
  return d}
function scene(){var mob=MOBILE()?1:0,g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="bfLu" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#4fcbee" stop-opacity=".34"/><stop offset="1" stop-color="#4fcbee" stop-opacity=".06"/></radialGradient></defs>';
  g+='<g id="scBase">';
  var cap='';bfCap(-1,48).reverse().concat(bfCap(1,48)).forEach(function(p,i){cap+=(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)});
  g+='<path class="cap0 sD" d="'+cap+'Z"/>';
  g+='<path class="cap1 sD" d="M'+(BCX-60)+' '+(BCY-BRY-30)+'C'+(BCX-30)+' '+(BCY-BRY+4)+' '+(BCX+30)+' '+(BCY-BRY+4)+' '+(BCX+60)+' '+(BCY-BRY-30)+'"/>';
  g+='<text x="'+(BCX-200)+'" y="'+(BCY+14)+'" text-anchor="middle" class="t">LATERAL LOBE</text><text x="'+(BCX+200)+'" y="'+(BCY+14)+'" text-anchor="middle" class="t">LATERAL LOBE</text>';
  g+='</g>';
  g+='<path id="bfLum" class="lum" d="'+bfLumen(4)+'"/>';
  [-1,1].forEach(function(s){BFK.forEach(function(k,j){g+='<path class="'+(j?'lb2':'lb')+'" data-s="'+s+'" data-k="'+k+'" d="'+bfLobe(s,4,k)+'"/>'})});
  g+='<g id="bfI"><path id="bfArm" class="imp" d="'+bfImp(4)+'"/>'+
    '<path class="imp" d="M'+(BCX-6)+' '+(BCY-150)+'v-18h12v18M'+(BCX-6)+' '+(BCY-168)+'l-5 -6h22l-5 6"/>'+
    '<ellipse id="bfW1" class="imp" cx="'+(BCX-14)+'" cy="'+(BCY+30)+'" rx="7" ry="100"/><ellipse id="bfW2" class="imp" cx="'+(BCX+14)+'" cy="'+(BCY+30)+'" rx="7" ry="100"/></g>';
  g+='<g id="lb1"><text x="'+BCX+'" y="'+(SCH-6)+'" text-anchor="middle" class="a">URETHRA, NARROWED</text></g>';
  g+='<g id="lb2"><text x="'+BCX+'" y="'+(BCY-BRY-44)+'" text-anchor="middle" class="a">BUTTERFLY IMPLANT</text></g>';
  g+='<g id="lb3"><text x="'+BCX+'" y="'+(SCH-6)+'" text-anchor="middle" class="a">CHANNEL HELD OPEN</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),lobes:$$(".lb,.lb2",svg),lum:$("#bfLum",svg),imp:$("#bfI",svg),arm:$("#bfArm",svg),
    w1:$("#bfW1",svg),w2:$("#bfW2",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastG=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.lobes.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var open=sm2(seg(p,.6,.86)),gap=4+70*open;
    if(Math.abs(gap-lastG)>.2){lastG=gap;
      E.lobes.forEach(function(el){el.setAttribute("d",bfLobe(+el.getAttribute("data-s"),gap,+el.getAttribute("data-k")))});
      E.lum.setAttribute("d",bfLumen(gap));E.arm.setAttribute("d",bfImp(gap));
      E.w1.setAttribute("cx",(BCX-gap-10).toFixed(1));E.w2.setAttribute("cx",(BCX+gap+10).toFixed(1))}
    op(E.imp,b*sm2(seg(p,.34,.48)));op(E.lum,b*(.25+.75*open));
    op(E.l1,b*seg(p,.0,.04)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.4,.46)*(1-seg(p,.58,.64)));op(E.l3,b*seg(p,.8,.88));
  };
}
function sm2(x){return x*x*(3-2*x)}
