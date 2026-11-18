/* Watchtower: how Ally Services was built (watchtowercp.com news and portfolio pages). Step 1: SPS Mechanical and
   JF Plumbing & Heating combine into Ally (2023). Step 2: a professional leadership layer (new CEO, 2024).
   Step 3: the add-ons arrive on the outer orbit, each with its year, and tie into the platform. */
function scene(){
  var A=[["HONEST ABE","2023"],["EAST COAST","2023"],["CARRFORD","2023"],["TRI-COUNTY AIRE","2024"],["ABOVE & BEYOND","2025"],["J HOOD","2025"],["CARROLL","2026"]];
  var o='<svg viewBox="0 0 800 460" aria-hidden="true">'+
   '<g id="wtCo"><rect class="frm2" x="352" y="182" width="96" height="96" rx="3" transform="rotate(45 400 230)"/><rect class="own" id="wtCore" x="366" y="196" width="68" height="68" rx="2" transform="rotate(45 400 230)"/>'+
   '<text class="w" x="400" y="226" text-anchor="middle">ALLY</text><text class="w" x="400" y="246" text-anchor="middle">SERVICES</text></g>'+
   '<g id="wtF"><rect class="node" x="262" y="222" width="16" height="16" rx="2"/><rect class="node" x="522" y="222" width="16" height="16" rx="2"/>'+
   '<path class="join" id="wtJ1" d="M278 230H332"/><path class="join" id="wtJ2" d="M522 230H468"/>'+
   '<text x="270" y="208" text-anchor="middle">SPS</text><text x="530" y="208" text-anchor="middle">JF</text><text class="a" x="400" y="352" text-anchor="middle">FORMED 2023</text></g>'+
   '<g id="wtM"><circle class="ln-a" cx="400" cy="230" r="112" stroke-dasharray="3 6"/><text class="a" x="400" y="104" text-anchor="middle">NEW CEO · 2024</text></g>';
  /* add-ons spread over the outer orbit, avoiding the left/right join axis */
  var ang=[-150,-110,-70,-30,30,110,150];
  A.forEach(function(a,i){var r=ang[i]*Math.PI/180,x=400+Math.cos(r)*186,y=230+Math.sin(r)*178,x2=400+Math.cos(r)*116,y2=230+Math.sin(r)*112,c=Math.cos(r),anc=c>.3?'start':c<-.3?'end':'middle',tx=x+(c>.3?16:c<-.3?-16:0),ty=y+(Math.sin(r)<-.5?-14:Math.sin(r)>.5?26:5);
    o+='<g class="wtA"><path class="flow" d="M'+x.toFixed(1)+' '+y.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'"/><circle class="node" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="7"/>'+
      '<text class="w" x="'+tx.toFixed(1)+'" y="'+ty.toFixed(1)+'" text-anchor="'+anc+'">'+a[0]+' <tspan class="a">'+a[1]+'</tspan></text></g>'});
  return o+'</svg>';
}
function storyDraw(svg){
  var co=$("#wtCo",svg),core=$("#wtCore",svg),F=$("#wtF",svg),Mg=$("#wtM",svg),Js=[$("#wtJ1",svg),$("#wtJ2",svg)],JL=Js.map(function(j){return j.getTotalLength()}),A=$$(".wtA",svg),N=A.length;
  return function(p,b){if(!co.isConnected)return;co.style.opacity=b;
    var s1=seg(p,.02,.26),s2=seg(p,.36,.56),s3=seg(p,.68,.96);
    F.style.opacity=(b*(1-.55*s3)).toFixed(3);Js.forEach(function(j,k){j.style.strokeDasharray=JL[k];j.style.strokeDashoffset=(JL[k]*(1-s1)).toFixed(1)});
    $$(".node",F).forEach(function(n){n.classList.toggle("on",s1>.6)});
    core.style.fill="rgba(var(--accr),"+(.12+.5*s1+.38*s3).toFixed(3)+")";
    Mg.style.opacity=(b*s2).toFixed(3);Mg.setAttribute("transform","rotate("+(-20*(1-s2)).toFixed(1)+" 400 230)");
    A.forEach(function(g,i){var s=seg(p,.66+i*.04,.74+i*.04);g.style.opacity=(b*s).toFixed(3);$(".node",g).classList.toggle("on",s>.6);var f=$(".flow",g);f.style.strokeDashoffset=(-p*600).toFixed(1)})}}
