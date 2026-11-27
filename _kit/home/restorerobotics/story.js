/* The story scene (BL/BY/DB): the Restore Robotics remanufacturing loop (restorerobotics.com press releases), drawn as ONE
   fine-line schematic kept on screen for all four steps: a robotic instrument in side view (housing, 8 mm shaft, distal
   hook) inside a loop with four stations.
   Step 1 (Recycle): the expired instrument is collected from the hospital.
   Step 2 (Restore): remanufactured at the Henderson, NV facility (Iconocare Health).
   Step 3 (Clear): FDA 510(k): substantially equivalent to new.
   Step 4 (Return): delivered back to hospitals through Encore. */
var SCW=760,SCH=520;
function arc(cx,cy,r,a0,a1){var x0=cx+r*Math.cos(a0),y0=cy+r*Math.sin(a0),x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1);
  return "M"+x0.toFixed(1)+" "+y0.toFixed(1)+"A"+r+" "+r+" 0 0 1 "+x1.toFixed(1)+" "+y1.toFixed(1)}
function rrScene(o){
  var g='',mob=o.mob,CX=380,CY=262,R=196,PI=Math.PI;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">REMANUFACTURING LOOP, SCHEMATIC</text>';
  /* the instrument, side view, centred in the loop */
  g+='<g id="rrI"><path class="edge sI" d="M470 244H552Q560 244 560 252V272Q560 280 552 280H470Q462 280 462 272V252Q462 244 470 244Z"/>'+
     '<path class="edge sI" d="M478 244V238H540V244"/><path class="edge sI" d="M462 258H262M462 266H262"/>'+
     '<path class="edge sI" d="M262 256H244L232 260V264L244 268H262Z"/><path class="hk sI" d="M232 262H214V250"/></g>';
  /* the loop, a quarter per step, each with a station dot */
  g+='<g id="rrA1"><path class="loop sA1" d="'+arc(CX,CY,R,PI*1.02,PI*1.48)+'"/></g>';
  g+='<g id="rrA2"><path class="loop sA2" d="'+arc(CX,CY,R,PI*1.52,PI*1.98)+'"/></g>';
  g+='<g id="rrA3"><path class="loop sA3" d="'+arc(CX,CY,R,PI*.02,PI*.48)+'"/></g>';
  g+='<g id="rrA4"><path class="loop sA4" d="'+arc(CX,CY,R,PI*.52,PI*.98)+'"/></g>';
  var ST=[[CX-R,CY],[CX,CY-R],[CX+R,CY],[CX,CY+R]];
  g+='<g id="rrS">';ST.forEach(function(s,i){g+='<circle class="st" id="rrS'+i+'" cx="'+s[0]+'" cy="'+s[1]+'" r="7"/>'});g+='</g>';
  /* station labels (>= 8px clear of the loop and the dots) */
  g+='<g id="rrL1"><text class="t s2" x="'+(CX-R+18)+'" y="'+(CY+(mob?50:42))+'">'+(mob?'HOSPITAL':'HOSPITAL · EXPIRED')+'</text></g>';
  g+='<g id="rrL2"><text class="t s2" x="'+CX+'" y="'+(CY-R+(mob?56:44))+'" text-anchor="middle">'+(mob?'HENDERSON, NV':'HENDERSON, NV · RESTORED')+'</text></g>';
  g+='<g id="rrL3"><text class="t s2" x="'+(CX+R-18)+'" y="'+(CY+(mob?50:42))+'" text-anchor="end">'+(mob?'FDA 510(k)':'FDA 510(k) · EQUIVALENT')+'</text></g>';
  g+='<g id="rrL4"><text class="t s2" x="'+CX+'" y="'+(CY+R-(mob?36:30))+'" text-anchor="middle">'+(mob?'ENCORE · OR':'ENCORE · BACK TO THE OR')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · RECYCLE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · RESTORE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · CLEAR</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · RETURN</text></g>';
  return g+'</svg>';
}
function scene(){return rrScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={I:$("#rrI",svg),iE:dl(".sI"),a:[dl(".sA1"),dl(".sA2"),dl(".sA3"),dl(".sA4")],A:[$("#rrA1",svg),$("#rrA2",svg),$("#rrA3",svg),$("#rrA4",svg)],
    S:[$("#rrS0",svg),$("#rrS1",svg),$("#rrS2",svg),$("#rrS3",svg)],L:[$("#rrL1",svg),$("#rrL2",svg),$("#rrL3",svg),$("#rrL4",svg)],
    l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.I,b);draw(E.iE,b*seg(p,0,.12));
    for(var i=0;i<4;i++){var s0=i*.25;
      op(E.A[i],b);draw(E.a[i],b*seg(p,s0+.03,s0+.17));
      op(E.S[i],b*seg(p,s0+.01,s0+.06));
      op(E.L[i],b*seg(p,s0+.05,s0+.11)*(i<3?(1-seg(p,s0+.22,s0+.25)):1));
      op(E.l[i],b*seg(p,s0+(i?.02:0),s0+.07)*(i<3?(1-seg(p,s0+.22,s0+.25)):1));
    }
  };
}
