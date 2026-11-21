/* the story scene (BL/BY/DB): ONE engraved nanolipogel in cross-section, kept on screen for all three steps, in fine line.
   Step 1 the lipid bilayer shell draws in (head groups on both leaflets, tails between). Step 2 the crosslinked hydrogel core
   fills the lumen and takes up its cargo: small-molecule drug (amber) and protein (bone). Step 3 both agents leave the particle
   together, slowly, through the shell. Source: the Yale nanolipogel patent family licensed to Immunova ("a lipid bilayer
   surrounding a hydrogel core", "controlled delivery of different pharmaceutical agents", "sustained delivery").
   Schematic, not to scale. */
var NC=[440,272],NRO=232,NRI=200,NRG=186;
function rnd(k){var x=Math.sin(k*127.1+311.7)*43758.5453;return x-Math.floor(x)}
var NODES=(function(){var a=[],k=0;while(a.length<44&&k<4000){k++;var r=Math.sqrt(rnd(k*3.1))*(NRG-14),t=rnd(k*7.7)*Math.PI*2,p=[NC[0]+r*Math.cos(t),NC[1]+r*Math.sin(t)];
  if(a.every(function(q){return Math.hypot(q[0]-p[0],q[1]-p[1])>44}))a.push(p)}return a})();
var EDGES=(function(){var e=[],seen={};NODES.forEach(function(p,i){NODES.map(function(q,j){return [Math.hypot(q[0]-p[0],q[1]-p[1]),j]}).sort(function(a,b){return a[0]-b[0]}).slice(1,4).forEach(function(d){
  var j=d[1],k=Math.min(i,j)+"-"+Math.max(i,j);if(seen[k]||d[0]>96)return;seen[k]=1;e.push([i,j])})});return e})();
/* cargo: [x,y,kind,angle]; kind 0 = small-molecule cluster, 1 = protein */
var CARGO=(function(){var c=[],k=0;while(c.length<30&&k<4000){k++;var r=Math.sqrt(rnd(k*5.3+1))*(NRG-20),t=rnd(k*2.9+4)*Math.PI*2;
  c.push([NC[0]+r*Math.cos(t),NC[1]+r*Math.sin(t),c.length%3===0?1:0,t])}return c})();
function blobP(cx,cy,R,s){var d="",i;for(i=0;i<=28;i++){var a=i/28*Math.PI*2,r=R*(1+.16*Math.sin(3*a+s)+.08*Math.sin(5*a+s*2));d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
function scene(){
  var mob=MOBILE(),g='',i,f=function(n){return (+n).toFixed(1)};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"176 6 528 564":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="nlgG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9ccd5e" stop-opacity=".10"/><stop offset=".8" stop-color="#9ccd5e" stop-opacity=".04"/><stop offset="1" stop-color="#9ccd5e" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<circle cx="'+NC[0]+'" cy="'+NC[1]+'" r="'+(NRO+30)+'" fill="url(#nlgG)"/>';
  g+='<path class="bo sD" d="M'+(NC[0]+NRO)+' '+NC[1]+'A'+NRO+' '+NRO+' 0 1 1 '+(NC[0]+NRO-.01)+' '+(NC[1]-.5)+'"/>';
  g+='<path class="bo sD" d="M'+(NC[0]+NRI)+' '+NC[1]+'A'+NRI+' '+NRI+' 0 1 1 '+(NC[0]+NRI-.01)+' '+(NC[1]-.5)+'"/>';
  /* lipid tails: pairs of short radial strokes from each leaflet toward the bilayer midplane */
  var tl='';for(i=0;i<132;i++){var a=i/132*Math.PI*2,m=(NRO+NRI)/2;
    [[NRO-5,m+2],[NRI+5,m-2]].forEach(function(r){[-.006,.006].forEach(function(o){var cc=Math.cos(a+o),ss=Math.sin(a+o);tl+='M'+f(NC[0]+r[0]*cc)+' '+f(NC[1]+r[0]*ss)+'L'+f(NC[0]+r[1]*cc)+' '+f(NC[1]+r[1]*ss)})})}
  g+='<path class="tl sD" d="'+tl+'"/>';
  g+='</g><g id="scHeads">';
  for(i=0;i<132;i++){var a2=i/132*Math.PI*2;g+='<circle class="hd" cx="'+f(NC[0]+NRO*Math.cos(a2))+'" cy="'+f(NC[1]+NRO*Math.sin(a2))+'" r="4.3"/>'}
  for(i=0;i<114;i++){var a3=i/114*Math.PI*2+.02;g+='<circle class="hd2" cx="'+f(NC[0]+NRI*Math.cos(a3))+'" cy="'+f(NC[1]+NRI*Math.sin(a3))+'" r="3.7"/>'}
  g+='</g><g id="scMesh">';
  EDGES.forEach(function(e,k){var A=NODES[e[0]],B=NODES[e[1]],mx=(A[0]+B[0])/2,my=(A[1]+B[1])/2,dx=B[0]-A[0],dy=B[1]-A[1],b=(rnd(k+9)-.5)*.5;
    g+='<path class="ms" d="M'+f(A[0])+' '+f(A[1])+'Q'+f(mx-dy*b)+' '+f(my+dx*b)+' '+f(B[0])+' '+f(B[1])+'"/>'});
  NODES.forEach(function(p){g+='<circle class="nd" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="3.2"/>'});
  g+='</g><g id="scCargo">';
  CARGO.forEach(function(c,k){if(c[2]===1)g+='<g class="cg"><path class="pr" d="'+blobP(0,0,9,k)+'"/><path class="pr2" d="'+blobP(-1.5,-1.5,5,k+2)+'"/></g>';
    else{g+='<g class="cg">';for(var j=0;j<4;j++)g+='<circle class="dr" cx="'+f((rnd(k*9+j)-.5)*10)+'" cy="'+f((rnd(k*13+j*2)-.5)*10)+'" r="2.6"/>';g+='</g>'}});
  g+='</g>';
  g+='<text class="t cap" x="784" y="546" text-anchor="end">'+(mob?'SCHEMATIC':'A NANOLIPOGEL IN SECTION · SCHEMATIC, NOT TO SCALE')+'</text>';
  var X=mob?186:24,Y=mob?560:546;
  g+='<g id="lb1"><text class="a" x="'+X+'" y="'+Y+'">'+(mob?'LIPID BILAYER':'A LIPID BILAYER SHELL')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+X+'" y="'+Y+'">'+(mob?'HYDROGEL CORE':'A HYDROGEL CORE · TWO KINDS OF CARGO')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+X+'" y="'+Y+'">'+(mob?'RELEASED TOGETHER':'BOTH AGENTS RELEASED, TOGETHER, OVER TIME')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(list){return list.map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl($$("#scBase .sD",svg)),mesh:dl($$("#scMesh .ms",svg)),nd:$$("#scMesh .nd",svg),hd:$("#scHeads",svg),cap:$$("text.cap",svg),
    cg:$$("#scCargo .cg",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    var s1=seg(p,0,.22),s2=seg(p,.34,.62),s3=seg(p,.68,.94);
    if(b!==lastB){lastB=b;E.cap.forEach(function(el){op(el,b)})}
    draw(E.base,b*(.35+.65*s1));op(E.hd,b*(.3+.7*s1));
    draw(E.mesh,b*seg(s2,0,.7));E.nd.forEach(function(el,i){op(el,b*seg(s2,.2+i/E.nd.length*.4,.4+i/E.nd.length*.4))});
    E.cg.forEach(function(el,k){var c=CARGO[k],on=seg(s2,.45+k/CARGO.length*.4,.6+k/CARGO.length*.4),
      go=k%2===0?seg(s3,k/CARGO.length*.5,.5+k/CARGO.length*.5):0,
      d=go*(NRO+60+rnd(k*3)*120-Math.hypot(c[0]-NC[0],c[1]-NC[1])),x=c[0]+Math.cos(c[3])*d,y=c[1]+Math.sin(c[3])*d*.82;
      x+=Math.sin(p*6+k)*2;y+=Math.cos(p*5+k*1.3)*2;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*on*(1-.35*seg(go,.7,1)))});
    op(E.l1,b*s1*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.76,.86));
  };
}
