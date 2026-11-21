/* the story scene: ONE neuroimplant and ONE spinal cord, drawn as an engraved longitudinal plate (BY: one object kept on screen).
   The cord runs left to right with its fibre tracts; a chronic lesion leaves a gap in the middle.
   Step 1 the scaffold: a porous, laser-microfabricated collagen-based cylinder (pores drawn as the honeycomb of ReNeuroCell's SEM);
   step 2 human iPSC-derived neural stem cells settle into its pores (fluorescent dots);
   step 3 the seeded neuroimplant is placed into the lesion gap;
   step 4 the cells differentiate into neurons whose neurites reach into the cord on both sides (Kourgiantaki et al. 2020, mouse).
   Schematic, not to scale. One caption names each step. */
var RN_CELLS=(function(){var a=[],s=7;function r(){s=(s*16807)%2147483647;return (s-1)/2147483646}
  for(var i=0;i<26;i++){a.push([r(),r(),r()])}return a})();
function rnPores(x0,y0,w,h,step){/* honeycomb pores inside the scaffold rect */
  var d='',rr=step*.42;for(var row=0,y=y0+step*.6;y<y0+h-step*.3;y+=step*.86,row++){
    for(var x=x0+step*.55+(row%2?step*.5:0);x<x0+w-step*.3;x+=step){
      var p='';for(var k=0;k<6;k++){var t=Math.PI/3*k+Math.PI/6;p+=(k?'L':'M')+(x+Math.cos(t)*rr).toFixed(1)+' '+(y+Math.sin(t)*rr).toFixed(1)}d+=p+'Z'}}
  return d}
function scene(){
  var mob=MOBILE(),fs=mob?19:12,cs=mob?20:13;
  var caps=["COLLAGEN-BASED SCAFFOLD · LASER-MICROFABRICATED","HUMAN iPSC-DERIVED NEURAL STEM CELLS","INTO THE CHRONIC SPINAL CORD LESION","NEURONS · LOCOMOTION RECOVERY IN MICE"];
  var s='<svg viewBox="0 60 640 500" role="img" aria-label="Engraved plate of a spinal cord with a lesion gap, and a porous scaffold seeded with neural stem cells placed into the gap">';
  var g='';for(var gx=20;gx<=620;gx+=40)g+='<path class="rg" d="M'+gx+' 80V520"/>';for(var gy=80;gy<=520;gy+=40)g+='<path class="rg" d="M20 '+gy+'H620"/>';
  s+='<g>'+g+'</g>';
  /* the cord: two stumps either side of the lesion (x 262..378), with dura, grey matter band and fibre tracts */
  var CY=360,HH=62,L=262,R=378;
  function stump(x0,x1,side){var o='',e=side<0?x1:x0,rag=function(y){return e+side*(Math.sin(y*.21)*5+Math.sin(y*.07)*4)};
    var top='M'+x0+' '+(CY-HH)+'C'+(x0+(x1-x0)*.33)+' '+(CY-HH-4)+' '+(x0+(x1-x0)*.66)+' '+(CY-HH+3)+' '+x1+' '+(CY-HH);
    var bot='M'+x0+' '+(CY+HH)+'C'+(x0+(x1-x0)*.33)+' '+(CY+HH+3)+' '+(x0+(x1-x0)*.66)+' '+(CY+HH-4)+' '+x1+' '+(CY+HH);
    o+='<path class="rc" d="'+top+'"/><path class="rc" d="'+bot+'"/>';
    var ed='M'+rag(CY-HH).toFixed(1)+' '+(CY-HH);for(var y=CY-HH+6;y<=CY+HH;y+=6)ed+='L'+rag(y).toFixed(1)+' '+y;o+='<path class="re" d="'+ed+'"/>';
    for(var k=-4;k<=4;k++){if(k===0)continue;var yy=CY+k*HH/5.2,a=side<0?x0:rag(yy),b=side<0?rag(yy):x1;o+='<path class="'+(Math.abs(k)<=1?'rgm':'rf')+'" d="M'+a.toFixed(1)+' '+yy.toFixed(1)+'H'+b.toFixed(1)+'"/>'}
    return o}
  s+='<g id="rnCord">'+stump(30,L,-1)+stump(R,610,1)+
    '<text class="rl" x="40" y="'+(CY-HH-16)+'" style="font-size:'+fs+'px">SPINAL CORD</text>'+
    '<text class="rl" id="rnLes" x="'+((L+R)/2)+'" y="'+(CY+HH+34)+'" text-anchor="middle" style="font-size:'+fs+'px">LESION</text></g>';
  /* the neuroimplant, drawn at its home position inside the gap (x 268..372); moved up for steps 1-2 */
  var SX=270,SW=100,SY=CY-HH+4,SH=HH*2-8;
  var cells='';RN_CELLS.forEach(function(c,i){var x=SX+10+c[0]*(SW-20),y=SY+10+c[1]*(SH-20);cells+='<circle class="rcl" data-i="'+i+'" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(3.4+c[2]*1.8).toFixed(1)+'"/>'});
  /* neurites: from the cells nearest each edge into the stumps */
  var nr='';RN_CELLS.forEach(function(c,i){if(i%2)return;var x=SX+10+c[0]*(SW-20),y=SY+10+c[1]*(SH-20),dir=c[0]<.5?-1:1,len=70+c[2]*70,ex=dir<0?SX-len:SX+SW+len,ey=y+(c[2]-.5)*26;
    nr+='<path class="rnt" d="M'+x.toFixed(1)+' '+y.toFixed(1)+'C'+(x+dir*30).toFixed(1)+' '+(y-8).toFixed(1)+' '+((x+ex)/2).toFixed(1)+' '+(ey+6).toFixed(1)+' '+ex.toFixed(1)+' '+ey.toFixed(1)+'"/>'});
  s+='<g id="rnImp"><rect class="rsb" x="'+SX+'" y="'+SY+'" width="'+SW+'" height="'+SH+'"/>'+
    '<path class="rsp" d="'+rnPores(SX,SY,SW,SH,13)+'"/>'+
    '<rect class="rso" x="'+SX+'" y="'+SY+'" width="'+SW+'" height="'+SH+'"/>'+
    '<g id="rnNr">'+nr+'</g><g id="rnCl">'+cells+'</g></g>';
  /* callouts beside the floating implant (steps 1-2) */
  s+='<g id="rnK1"><path class="rk" d="M378 120H452"/><text class="ra" x="460" y="116" style="font-size:'+fs+'px">PORES</text><text class="rl" x="460" y="134" style="font-size:'+fs+'px">BIOACTIVE</text></g>';
  s+='<g id="rnK2"><path class="rk" d="M378 196H452"/><text class="rg2" x="460" y="192" style="font-size:'+fs+'px">hiNSCs</text><text class="rl" x="460" y="212" style="font-size:'+fs+'px">OPTIMISED LINEAGE</text></g>';
  s+='<path id="rnDrop" class="rk" d="M320 238V286" style="stroke-dasharray:4 5"/>';
  caps.forEach(function(t,i){s+='<text class="cap" id="rnC'+i+'" x="320" y="'+(mob?548:540)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={imp:$("#rnImp",svg),k1:$("#rnK1",svg),k2:$("#rnK2",svg),drop:$("#rnDrop",svg),les:$("#rnLes",svg),
    cells:[].slice.call(svg.querySelectorAll(".rcl")),nts:[].slice.call(svg.querySelectorAll(".rnt")),cap:[0,1,2,3].map(function(i){return $("#rnC"+i,svg)})};
  var NL=E.nts.map(function(n){return n.getTotalLength()});
  return function(p,b){
    if(!E.imp.isConnected)return;
    var s1=seg(p,.02,.15),s2=seg(p,.27,.47),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    /* the implant floats above the cord (dy -210) in steps 1-2 and settles into the gap in step 3 */
    var dy=-210*(1-s3);E.imp.setAttribute("transform","translate(0 "+dy.toFixed(1)+")");
    E.imp.style.opacity=(.45+.55*Math.max(s1,.0)).toFixed(3);
    E.k1.style.opacity=(Math.min(1,s1*1.4)*(1-s3)).toFixed(3);
    E.k2.style.opacity=(s2*(1-s3)).toFixed(3);
    E.drop.style.opacity=(seg(p,.5,.56)*(1-seg(p,.66,.72))).toFixed(3);
    E.les.style.opacity=(1-s3*.85).toFixed(3);
    var n=E.cells.length;
    E.cells.forEach(function(c,i){var o=Math.max(0,Math.min(1,s2*n*1.25-i*1.0));c.style.opacity=o.toFixed(3);c.classList.toggle("nu",s4>.35&&i%2===0)});
    E.nts.forEach(function(t,i){var L=NL[i],q=Math.max(0,Math.min(1,s4*1.4-i*.04));t.style.strokeDasharray=L.toFixed(1)+" "+L.toFixed(1);t.style.strokeDashoffset=(L*(1-q)).toFixed(1);t.style.opacity=q>0?"1":"0"});
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
