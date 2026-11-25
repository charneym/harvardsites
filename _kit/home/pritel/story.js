/* the story scene (BL/BY/DB): ONE passively mode-locked fiber ring laser (PriTel FFL) drawn as an engraved technical plate and
   kept on screen for all three steps: the fiber loop, a 980 nm pump diode feeding it through a coupler, the erbium-doped fiber
   coil, the saturable absorber, the Quick-Change filter cartridge and the output coupler with its output fiber.
   Step 1 (gain): the pump light runs into the loop and the doped coil glows.
   Step 2 (pulse): one pulse circles the loop; each pass leaves a pulse on the output fiber (the pulse train).
   Step 3 (width): the filter cartridge lights and an inset shows the same pulse narrowing from picoseconds to femtoseconds.
   Sources: pritel.com/products.html, ffl1550.html, tfa.html, fp.html (980 nm pump). Schematic. Driven by the scrubbed story progress. */
var RL={cx:300,cy:285,rx:200,ry:150};
function rlPt(th){return [RL.cx+RL.rx*Math.cos(th),RL.cy+RL.ry*Math.sin(th)]}
function rlArc(a0,a1){var f=function(n){return n.toFixed(1)},d='',n=64,i;for(i=0;i<=n;i++){var p=rlPt(a0+(a1-a0)*i/n);d+=(i?'L':'M')+f(p[0])+' '+f(p[1])}return d}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',D=Math.PI/180,wd=rlPt(-150*D),oc=rlPt(40*D),i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'20 56 720 440':'20 50 730 450')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="rlGlow"><stop offset="0" stop-color="#b0b2ff" stop-opacity=".55"/><stop offset="1" stop-color="#8e90f6" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="rlC3"><circle cx="650" cy="160" r="64"/></clipPath></defs>';
  /* base plate: the loop (broken where the coil sits) */
  g+='<g id="scBase">';
  g+='<path class="sD fib" d="'+rlArc(-76*D,208*D)+'"/>';
  g+='<path class="sD fib" d="'+rlArc(-148*D,-104*D)+'"/>';
  for(i=0;i<5;i++)g+='<ellipse class="sD coil" cx="300" cy="135" rx="'+(46-i*6)+'" ry="'+(20-i*2.2).toFixed(1)+'"/>';
  g+='<text class="a" x="300" y="94" text-anchor="middle">ER-DOPED FIBER</text>';
  /* pump diode and coupler */
  g+='<path class="sD box" d="M34 104H122V138H34Z"/><path class="sD fib" d="M78 138C80 170 100 200 '+f(wd[0])+' '+f(wd[1])+'"/>';
  g+='<path class="sD box" d="M'+f(wd[0]-9)+' '+f(wd[1]-7)+'h18v14h-18Z"/>';
  g+='<text class="a" x="'+(mob?34:78)+'" y="'+(mob?80:88)+'" text-anchor="'+(mob?"start":"middle")+'">980 NM PUMP</text>';
  /* saturable absorber */
  g+='<path class="sD box" d="M488 263H512V307H488Z"/><path class="sD hatch" d="M488 275L512 263M488 289L512 277M488 303L512 291"/>';
  g+='<text class="a" x="528" y="289">'+(mob?"ABSORBER":"SATURABLE ABSORBER")+'</text>';
  /* filter cartridge */
  g+='<path class="sD box" d="M268 421H332V449H268Z"/><path class="sD box" d="M286 421V449M314 421V449"/>';
  g+='<text class="a" x="300" y="484" text-anchor="middle">QUICK-CHANGE FILTER</text>';
  /* output coupler and output fiber */
  g+='<path class="sD box" d="M'+f(oc[0]-9)+' '+f(oc[1]-7)+'h18v14h-18Z"/>';
  g+='<path class="sD fib" d="M'+f(oc[0]+9)+' '+f(oc[1]+2)+'C510 396 540 404 580 404H736"/>';
  g+='<text class="a" x="736" y="434" text-anchor="end">OUTPUT</text>';
  g+='</g>';
  /* step 1: pump light and gain */
  g+='<g id="st1"><path class="sD1 pump" d="M78 138C80 170 100 200 '+f(wd[0])+' '+f(wd[1])+'"/>'+
     '<ellipse class="glow" cx="300" cy="135" rx="70" ry="38"/>';
  for(i=0;i<5;i++)g+='<ellipse class="sD1 coilh" cx="300" cy="135" rx="'+(46-i*6)+'" ry="'+(20-i*2.2).toFixed(1)+'"/>';
  g+='<rect class="led" x="70" y="116" width="16" height="10"/></g>';
  /* step 2: one pulse circling, the pulse train on the output */
  g+='<g id="st2"><circle class="pdg" id="rlDotG" cx="500" cy="285" r="18"/><circle class="pd" id="rlDot" cx="500" cy="285" r="5"/>';
  var tr='';[602,640,678,716].forEach(function(x){tr+='M'+(x-17)+' 404C'+(x-7)+' 404 '+(x-5)+' 356 '+x+' 356C'+(x+5)+' 356 '+(x+7)+' 404 '+(x+17)+' 404'});
  g+='<path class="sD2 train" d="'+tr+'"/></g>';
  /* step 3: the filter sets the width */
  g+='<g id="st3"><path class="hlb" d="M268 421H332V449H268Z"/>'+
     '<circle class="ring" cx="650" cy="160" r="64"/>'+
     '<g clip-path="url(#rlC3)"><path class="base3" d="M590 200H710"/>'+
     '<path class="sD3 wide" d="M590 200C618 200 630 160 650 160S682 200 710 200"/>'+
     '<path class="sD3 narrow" d="M590 200C636 200 643 116 650 116S664 200 710 200"/></g>'+
     '<text class="a" x="746" y="'+(mob?78:80)+'" text-anchor="end">'+(mob?"10 PS TO 150 FS":"PULSE WIDTH · 10 PS TO 150 FS")+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3"),dot:$("#rlDot",svg),dg:$("#rlDotG",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var i1=seg(p,0,.1),o1=seg(p,.31,.36),i2=seg(p,.35,.45),o2=seg(p,.64,.69),i3=seg(p,.68,.84);
    op(E.s1,b*i1*(1-o1));draw(E.c1,i1);
    op(E.s2,b*i2*(1-o2));draw(E.c2,seg(p,.38,.6));
    var q=rlPt(seg(p,.35,.69)*Math.PI*4);
    if(E.dot){E.dot.setAttribute("cx",q[0].toFixed(1));E.dot.setAttribute("cy",q[1].toFixed(1));E.dg.setAttribute("cx",q[0].toFixed(1));E.dg.setAttribute("cy",q[1].toFixed(1))}
    op(E.s3,b*Math.min(1,i3*6));draw(E.c3,i3);
  };
}
