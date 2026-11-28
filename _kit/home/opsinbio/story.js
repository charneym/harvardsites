/* The story scene (BL/BY/DB): how the therapy works (opsinbio.com process graphic; NIH RePORTER 2R44NS132623), ONE fine-line
   schematic kept on screen for all four steps: a pain-inhibiting (GABAergic) spinal neuron, its soma at left, its axon right.
   Step 1 (Encode): functionalized gold nanorods carry the MCO plasmids (rods with small DNA rings).
   Step 2 (Bind): after a spinal injection the fGNRs bind to the surface of the target neuron.
   Step 3 (Light): a low-power laser on the bound rods; the MCO gene enters the neuron.
   Step 4 (Express): the neuron expresses MCO (opsin channels on its membrane); a wireless red LED switches it on and it blocks pain. */
var SCW=760,SCH=520;
function obRod(cx,cy,a,cls){var L=26,r=5,c=Math.cos(a),s=Math.sin(a),x0=cx-c*L/2,y0=cy-s*L/2,x1=cx+c*L/2,y1=cy+s*L/2,nx=-s*r,ny=c*r;
  return '<path class="'+cls+'" d="M'+(x0+nx).toFixed(1)+' '+(y0+ny).toFixed(1)+'L'+(x1+nx).toFixed(1)+' '+(y1+ny).toFixed(1)+'A'+r+' '+r+' 0 0 0 '+(x1-nx).toFixed(1)+' '+(y1-ny).toFixed(1)+
    'L'+(x0-nx).toFixed(1)+' '+(y0-ny).toFixed(1)+'A'+r+' '+r+' 0 0 0 '+(x0+nx).toFixed(1)+' '+(y0+ny).toFixed(1)+'Z"/>'}
var OB_FREE=[[150,138,-.3],[214,116,.2],[268,148,-.5],[186,176,.35],[322,124,.1]];
var OB_SX=250,OB_SY=300,OB_R=50;
function obScene(o){
  var g='',mob=o.mob,i,a;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">SPINAL NEURON, SCHEMATIC</text>';
  /* the neuron: soma, nucleus, dendrites, the axon to the right with its terminals */
  g+='<g id="obN"><circle class="edge sN" cx="'+OB_SX+'" cy="'+OB_SY+'" r="'+OB_R+'"/><circle class="nuc sN" cx="'+OB_SX+'" cy="'+OB_SY+'" r="15"/>'+
     '<path class="edge sN" d="M206 276C180 262 160 240 138 232M162 246L150 222M208 324C182 342 166 364 150 384M168 360L140 364M232 348C228 376 232 398 224 420"/>'+
     '<path class="edge sN" d="M300 300H600M600 300C620 300 634 286 652 276M600 300C620 300 634 314 652 324M652 276L670 270M652 324L670 330"/></g>';
  /* step 1: free nanorods with their plasmids */
  g+='<g id="obF">';OB_FREE.forEach(function(r){g+='<g>'+obRod(r[0],r[1],r[2],"gnr")+'<circle class="pl" cx="'+(r[0]+9)+'" cy="'+(r[1]-13)+'" r="4.5"/></g>'});g+='</g>';
  /* step 2: the rods bound to the membrane, tangent to it */
  g+='<g id="obB">';for(i=0;i<6;i++){a=-2.6+i*.5;g+=obRod(OB_SX+(OB_R+7)*Math.cos(a),OB_SY+(OB_R+7)*Math.sin(a),a+Math.PI/2,"gnr")}g+='</g>';
  /* step 3: the laser and the gene going in */
  g+='<g id="obL"><path class="las sL" d="M636 108L'+(OB_SX+44)+' '+(OB_SY-44)+'"/><path class="lsrc" d="M640 86L668 106L656 122L628 102Z"/><path class="gene sL" d="M'+(OB_SX-6)+' '+(OB_SY-34)+'C'+(OB_SX-1)+' '+(OB_SY-28)+' '+(OB_SX-11)+' '+(OB_SY-24)+' '+(OB_SX-6)+' '+(OB_SY-18)+'"/></g>';
  /* step 4: opsin channels on the membrane, the LED, the blocked pain signal */
  g+='<g id="obX">';for(i=0;i<16;i++){a=i*Math.PI/8;g+='<path class="ops" d="M'+(OB_SX+(OB_R-4)*Math.cos(a)).toFixed(1)+' '+(OB_SY+(OB_R-4)*Math.sin(a)).toFixed(1)+'L'+(OB_SX+(OB_R+4)*Math.cos(a)).toFixed(1)+' '+(OB_SY+(OB_R+4)*Math.sin(a)).toFixed(1)+'"/>'}
  g+='<path class="led" d="M420 420H468V440H420Z"/><path class="ray sX" d="M420 424L'+(OB_SX+44)+' '+(OB_SY+40)+'M424 420L'+(OB_SX+54)+' '+(OB_SY+28)+'"/>'+
     '<path class="pain sX" d="M470 232C490 212 510 252 530 232C550 212 570 252 590 232"/><path class="blk sX" d="M610 214L638 242M638 214L610 242"/></g>';
  /* labels (>= 8px clear of every stroke, DR3) */
  g+='<g id="obL1"><text class="t s2" x="'+(mob?120:360)+'" y="'+(mob?80:150)+'">'+(mob?'fGNRs + MCO PLASMIDS':'GOLD NANORODS + MCO PLASMIDS')+'</text></g>';
  g+='<g id="obL2"><text class="t s2" x="'+(mob?150:330)+'" y="'+(mob?400:390)+'">'+(mob?'BOUND TO THE NEURON':'fGNRs BIND TO THE NEURON')+'</text></g>';
  g+='<g id="obL3"><text class="t s2" x="'+(mob?300:420)+'" y="'+(mob?80:80)+'">'+(mob?'LOW-POWER LASER':'LOW-POWER LASER · MCO ENTERS')+'</text></g>';
  g+='<g id="obL4"><text class="t s2" x="'+(mob?300:490)+'" y="'+(mob?480:436)+'">'+(mob?'WIRELESS RED LED':'WIRELESS RED LED')+'</text><text class="t s2" x="'+(mob?400:470)+'" y="'+(mob?200:196)+'">'+(mob?'PAIN BLOCKED':'PAIN SIGNAL BLOCKED')+'</text></g>';
  g+='<g id="obL0"><text class="t" x="330" y="'+(mob?282:284)+'">'+(mob?'GABAergic':'GABAergic NEURON')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · ENCODE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · BIND</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · LIGHT</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · EXPRESS</text></g>';
  return g+'</svg>';
}
function scene(){return obScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={N:$("#obN",svg),nE:dl(".sN"),F:$$("#obF > g",svg),B:$$("#obB > path",svg),L:$("#obL",svg),lE:dl(".sL"),LS:$("#obL .lsrc",svg),X:$("#obX",svg),O:$$("#obX .ops",svg),xE:dl(".sX"),LED:$("#obX .led",svg),
    T:[$("#obL1",svg),$("#obL2",svg),$("#obL3",svg),$("#obL4",svg)],T0:$("#obL0",svg),l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.N,b);draw(E.nE,b*seg(p,0,.1));op(E.T0,b*seg(p,.06,.12)*(1-seg(p,.22,.25)));
    E.F.forEach(function(e,i){op(e,b*seg(p,.04+i*.008,.1+i*.008)*(1-seg(p,.27,.33)))});
    E.B.forEach(function(e,i){op(e,b*seg(p,.3+i*.012,.36+i*.012)*(1-.55*seg(p,.8,.9)))});
    op(E.L,b*(1-seg(p,.76,.82)));op(E.LS,b*seg(p,.52,.56));draw(E.lE,b*seg(p,.54,.66));
    op(E.X,b);E.O.forEach(function(e,i){op(e,b*seg(p,.78+i*.006,.82+i*.006))});op(E.LED,b*seg(p,.8,.84));draw(E.xE,b*seg(p,.84,.94));
    for(var i=0;i<4;i++){var s0=i*.25;op(E.T[i],b*seg(p,s0+.05,s0+.11)*(i<3?(1-seg(p,s0+.22,s0+.25)):1));op(E.l[i],b*seg(p,s0+(i?.02:0),s0+.07)*(i<3?(1-seg(p,s0+.22,s0+.25)):1))}
  };
}
