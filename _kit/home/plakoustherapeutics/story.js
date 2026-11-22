/* The story scene (BL/BY/DB): how HPE works (plakoustherapeutics.com Behind Our Science; NIH R44HD100243), as ONE continuous
   scene: the lining of a premature baby's small intestine drawn lengthwise, a row of villi rising from the mucosa into the
   lumen, with the submucosa below. Step 1 (immature): the villi are short and immune cells gather at their base, with a red
   inflammatory glow. Step 2 (dose): HPE, given by mouth, arrives through the lumen as a fall of fine particles (its growth
   factors) that settle on the villi. Step 3 (calm): the immune cells stand down and the glow fades. Step 4 (mature): the
   villi grow tall, each with its capillary core. Every element is driven by the scrubbed story progress. Schematic. */
var SCW=760,SCH=580,GB=430,MT=500;   /* GB: the lower mucosal baseline; the upper wall is the lower one mirrored (flip about y=MT/2, shifted 30px) */
var VIL=(function(){var a=[],i,s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  for(i=0;i<11;i++)a.push({x:56+i*63.6,w:15+R()*4,h0:48+R()*20,h1:138+R()*26,lean:(R()-.5)*10});return a})();
var IMM=(function(){var a=[],i,s=21,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  for(i=0;i<16;i++){var k=i%10;a.push({x:87+k*63.6+(R()-.5)*14,y:GB-12-R()*26+(i>9?-8:0),r:7+R()*3})}return a})();
var HPE=(function(){var a=[],i,s=950,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  for(i=0;i<46;i++){var v=VIL[i%11];a.push({x0:-30+R()*140,y0:180+R()*150,x1:v.x+(R()-.5)*v.w*2.2,f:.25+R()*.75,k:i%3,d:R(),top:i%2})}return a})();
function vilD(v,h){var b=GB,w=v.w,x=v.x,l=v.lean*(h/200);
  return 'M'+(x-w-6)+' '+b+'C'+(x-w)+' '+(b-2)+' '+(x-w+l*.3)+' '+(b-h*.5)+' '+(x-w+l*.6)+' '+(b-h+w)+
    'C'+(x-w+l*.7)+' '+(b-h-w*.35)+' '+(x+w+l*.7)+' '+(b-h-w*.35)+' '+(x+w+l*.6)+' '+(b-h+w)+
    'C'+(x+w+l*.3)+' '+(b-h*.5)+' '+(x+w)+' '+(b-2)+' '+(x+w+6)+' '+b}
function capD(v,h){var b=GB,x=v.x,l=v.lean*(h/200),w=v.w*.42;
  return 'M'+(x-w)+' '+(b+4)+'C'+(x-w+l*.3)+' '+(b-h*.5)+' '+(x-w+l*.6)+' '+(b-h+v.w*1.1)+' '+(x+l*.62)+' '+(b-h+v.w*.6)+
    'C'+(x+w+l*.6)+' '+(b-h+v.w*1.1)+' '+(x+w+l*.3)+' '+(b-h*.5)+' '+(x+w)+' '+(b+4)}
function gutScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="infl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff5a52" stop-opacity=".55"/><stop offset=".6" stop-color="#e8182a" stop-opacity=".16"/><stop offset="1" stop-color="#e8182a" stop-opacity="0"/></radialGradient></defs>';
  /* ---- base: both mucosal walls with the submucosa behind them, and captions ---- */
  g+='<g id="scBase">';
  g+='<path class="mu sD" d="M20 '+GB+'H740M20 '+(MT-GB)+'H740"/>';
  for(i=0;i<2;i++){var y=GB+26+i*26,y2=MT-GB-22-i*24,dd='M20 '+y,d2='M20 '+y2;for(var x=20;x<740;x+=40){dd+='Q'+(x+20)+' '+(y+(i%2?5:-5))+' '+(x+40)+' '+y;d2+='Q'+(x+20)+' '+(y2+(i%2?-5:5))+' '+(x+40)+' '+y2}g+='<path class="sm sD" d="'+dd+'"/><path class="sm sD" d="'+d2+'"/>'}
  g+='<text class="t" x="740" y="'+(MT/2+4)+'" text-anchor="end">INTESTINAL LUMEN</text>';
  g+='<text class="t" x="20" y="'+(GB+102)+'">PREMATURE SMALL INTESTINE · MUCOSA AND SUBMUCOSA</text>';
  g+='</g>';
  /* ---- one wall: inflammation glow, villi with capillary cores, immune cells in the crypts ---- */
  function wall(id,tf){var w='<g id="'+id+'"'+(tf?' transform="'+tf+'"':'')+'>';
    w+='<ellipse class="inf" cx="380" cy="'+(GB-16)+'" rx="390" ry="72" fill="url(#infl)"/>';
    VIL.forEach(function(v,k){w+='<path class="vi" data-k="'+k+'" d="'+vilD(v,v.h0)+'"/><path class="vc" data-k="'+k+'" d="'+capD(v,v.h0)+'"/>'});
    IMM.forEach(function(c,k){w+='<g class="im" data-k="'+k+'" transform="translate('+c.x.toFixed(1)+' '+c.y.toFixed(1)+')"><circle class="ib" r="'+c.r.toFixed(1)+'"/><circle class="in" cx="1" cy="-1" r="'+(c.r*.42).toFixed(1)+'"/></g>'});
    return w+'</g>'}
  g+=wall("wB","")+wall("wT","translate(30 "+MT+") scale(1 -1)");
  /* ---- HPE: growth factors falling through the lumen ---- */
  g+='<g id="scHpe">';
  HPE.forEach(function(q,k){g+=q.k===0?'<circle class="hp" data-k="'+k+'" r="3.2"/>':q.k===1?'<path class="hp" data-k="'+k+'" d="M0 -4L4 0L0 4L-4 0Z"/>':'<path class="hp h2" data-k="'+k+'" d="M-4 0H4M0 -4V4"/>'});
  g+='</g>';
  /* ---- step labels, in the clear band under the drawing ---- */
  var ly=SCH-12;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">SHORT VILLI · IMMUNE CELLS GATHER</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">HPE BY MOUTH · 950+ PLACENTAL FACTORS</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">INFLAMMATION INHIBITED</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="'+ly+'">INTESTINAL MATURATION ACCELERATED</text></g>';
  return g+'</svg>';
}
function scene(){return gutScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),vi:$$(".vi",svg),vc:$$(".vc",svg),im:$$(".im",svg),hp:$$(".hp",svg),
    inf:$$(".inf",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1,lastG=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var inf=seg(p,.03,.2)*(1-seg(p,.52,.7)),fall=seg(p,.27,.5),calm=seg(p,.52,.7),grow=seg(p,.72,.94);
    var gq=Math.round(grow*200)/200;
    if(gq!==lastG){lastG=gq;E.vi.forEach(function(el){var v=VIL[+el.getAttribute("data-k")],h=v.h0+(v.h1-v.h0)*gq;el.setAttribute("d",vilD(v,h));el.style.opacity=b.toFixed(3)});
      E.vc.forEach(function(el){var v=VIL[+el.getAttribute("data-k")],h=v.h0+(v.h1-v.h0)*gq;el.setAttribute("d",capD(v,h))})}
    E.vi.forEach(function(el){op(el,b)});E.vc.forEach(function(el){op(el,b*(.35+.65*grow))});
    E.inf.forEach(function(el){op(el,b*inf)});
    E.im.forEach(function(el){var i=+el.getAttribute("data-k"),c=IMM[i],a=Math.min(1,Math.max(0,inf*1.7-(i%6)*.1));op(el,b*a);
      var s=.6+.4*a;el.setAttribute("transform","translate("+c.x.toFixed(1)+" "+(c.y+(1-a)*10).toFixed(1)+") scale("+s.toFixed(2)+")")});
    E.hp.forEach(function(el,i){var q=HPE[i],t=Math.min(1,Math.max(0,fall*1.5-q.d*.5)),v=VIL[i%11];
      var hNow=v.h0+(v.h1-v.h0)*grow,yt=q.top?(MT-GB)+hNow*q.f+4:GB-hNow*q.f-4,x1=q.top?q.x1+30:q.x1,e2=t*t*(3-2*t),x=q.x0+(x1-q.x0)*t,y=q.y0+(yt-q.y0)*e2;
      op(el,b*Math.min(1,t*4)*(1-.55*grow));el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")});
    op(E.l1,b*seg(p,.1,.16)*(1-seg(p,.24,.28)));op(E.l2,b*seg(p,.32,.38)*(1-seg(p,.48,.52)));
    op(E.l3,b*seg(p,.58,.64)*(1-seg(p,.72,.76)));op(E.l4,b*seg(p,.82,.88));
  };
}
