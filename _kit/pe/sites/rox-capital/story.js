/* Rox: the six value-creation levers from roxcp.com/our-approach, drawn as the six sides of the Rox hexagon around
   "your company". Each step builds two sides (people and structure, operations and finance, commercial and strategy);
   the last step closes the hexagon. */
function scene(){
  var L=[["MANAGEMENT",0],["STRUCTURE",0],["OPERATIONS",1],["FINANCE",1],["COMMERCIAL",2],["STRATEGY",2]],o='<svg viewBox="0 0 800 460" aria-hidden="true">';
  function V(k,R){var a=-Math.PI/2+k*Math.PI/3;return [400+Math.cos(a)*R,230+Math.sin(a)*R]}
  o+='<g id="rxCo"><path class="frm2" d="'+[0,1,2,3,4,5].map(function(k,i){var v=V(k,62);return (i?'L':'M')+v[0].toFixed(1)+' '+v[1].toFixed(1)}).join("")+'Z"/><path class="own" id="rxCore" d="'+[0,1,2,3,4,5].map(function(k,i){var v=V(k,62);return (i?'L':'M')+v[0].toFixed(1)+' '+v[1].toFixed(1)}).join("")+'Z"/>'+
    '<text class="w" x="400" y="226" text-anchor="middle">YOUR</text><text class="w" x="400" y="246" text-anchor="middle">COMPANY</text></g>';
  /* side order starts at the top-left side so each pair reads together */
  [5,0,1,2,3,4].forEach(function(k,i){var a=V(k,170),b=V(k+1,170),m=[(a[0]+b[0])/2,(a[1]+b[1])/2],ang=-Math.PI/3+k*Math.PI/3,tx=400+Math.cos(ang)*202,ty=230+Math.sin(ang)*202,c=Math.cos(ang);
    o+='<g class="rxS" data-g="'+L[i][1]+'"><path class="ln-a" d="M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+b[0].toFixed(1)+' '+b[1].toFixed(1)+'"/><path class="join" d="M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+b[0].toFixed(1)+' '+b[1].toFixed(1)+'"/>'+
      '<path class="flow" d="M'+m[0].toFixed(1)+' '+m[1].toFixed(1)+'L'+(400+(m[0]-400)*.42).toFixed(1)+' '+(230+(m[1]-230)*.42).toFixed(1)+'"/>'+
      '<circle class="node" cx="'+m[0].toFixed(1)+'" cy="'+m[1].toFixed(1)+'" r="8"/><text class="w" x="'+tx.toFixed(1)+'" y="'+(ty+5).toFixed(1)+'" text-anchor="'+(c>.3?'start':c<-.3?'end':'middle')+'">'+L[i][0]+'</text></g>'});
  return o+'</svg>';
}
function storyDraw(svg){
  var S=$$(".rxS",svg),core=$("#rxCore",svg),co=$("#rxCo",svg),J=S.map(function(g){var p=$(".join",g);return [p,p.getTotalLength()]}),N=3;
  return function(p,b){if(!co.isConnected)return;co.style.opacity=b;
    S.forEach(function(g,i){var k=+g.getAttribute("data-g"),s=seg(p,k/N-.03+(i%2)*.05,k/N+.15+(i%2)*.05);g.style.opacity=(b*(.25+.75*s)).toFixed(3);
      J[i][0].style.strokeDasharray=J[i][1];J[i][0].style.strokeDashoffset=(J[i][1]*(1-s)).toFixed(1);
      $(".node",g).classList.toggle("on",s>.6);var f=$(".flow",g);f.style.opacity=s.toFixed(3);f.style.strokeDashoffset=(-p*600).toFixed(1)});
    core.style.fill="rgba(var(--accr),"+(.12+.88*seg(p,.72,.97)).toFixed(3)+")"}}
